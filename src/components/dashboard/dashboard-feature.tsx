/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "YjJPkKRUfqD7iAQKHpGhpDWpJBouW7muAUNaJDDH4niaPYDwnawWcsfqFAQ3TjTuaBRWjFv2psqaWHqxaQv7wDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tioaWsefo2D3kEqqu2Y1qYqBLkY8iAxZyE4Pxv2RC9w4YRBP3ZxsEtNJk3nEmV21dTVvrg7w4zKguBMdMvCXiSQ",
  "key1": "29W39viKK3bSw4ReBnRCxnjYYEeXQuEqVLnLwS9RnSi1RD413QPKczsfZUEMa4M91QCLYRYTPFArkhFJyXjP9FFa",
  "key2": "4424sm8ZmhMR3ZRRDeWXuRsBRAAebTvSfsH4TbiJxuoCxAuZ3Y6g35GjS5KtyLr8uUwtJsmnxgYHhw6rJGB98f9H",
  "key3": "226wkXo1K5pwMimnMpHFLQsV7CipgKbxFQeBTfGwb61WDRov5p7EswUHjxepRa7LejbYvU9SSFA8iG3JNXnMXXRA",
  "key4": "9CPWfPDrL4dHkgTXWtEAKc7Cb6uY9GMtABrSmHwhGRdFgyNStJ2niMgPAgj9nURvDF9rkgJLf8kpVJLfyP9V86Y",
  "key5": "3X2vhPPAqkVGg9Y6MAW8hBvhp2x7Yv4R5bhqhNrqxRBLPFLBZDtTAeycYrMu5cAe8aBTUpo2VocRjnNoEF7GdWSU",
  "key6": "U19Wid1XQf5qS7RZ7aEYc5zimTFmHVmSbNpNYNcBwqhaXi3f4EtUnw23duBKj3HPoaWGn9ft7YqYj7qJ93Wz9hz",
  "key7": "5AyyhnXKoevjPHZWexQVQCps2CPhoPBMkdsL8Ax2sZuWXNnZJqD9m6BVr71qGeSUuwVVXwHMdWJRQnD84dQ4hnCu",
  "key8": "2gTCnXZrb8q2zzZprot8KK5TNBU4DDeKyF3Nanjs3HL1fNoC2rC9pDqrFjRU5Tg1UTq3dWv63NcTSmwuhsttiixv",
  "key9": "3rW9ttVvjoQAcaaTRT5Zp9zAW8jpwS1MMVzWW9TA7ayhDDd6KyT3V1nDqpPh44f4amMpjcLXR74ReCkrqyuD6TZC",
  "key10": "44Lkz8aQSdeMeiSZCAk2pb1shQpEtEfrwZCD8AZEPTtPtq4Z9raL7mY8nFir17zfXoNtTgKn46bkUhcDHmU48EEG",
  "key11": "5ZuHVruzFcuaybVh5BXiBBZkAXi5NfLYwNbp351ytND92pbLg1yXHpMsTfx3TQwtrEuKGiN6TCZcyeVERzbBJ1X6",
  "key12": "3nUo8RNYvEvUwkVRg12XRsCysN3BCeUoSeTaiDwHq5HtfmyrGQWGpAzLA2SrKpLjPXTYm4Ber5Q1vNrM9H1XUphF",
  "key13": "2vpm94MZjmmWCbYbFypLJkvmBZv1Sxff1QoD1dHcCn7dCMPudafRoGEdVXKNb9YfgPL8bzmkLx1G4dgGeeT4BCKU",
  "key14": "431R66ueUE8cPCoPZSCWSYUJKBTvjLVwesriPvWYvbx6Q2owcmRVNKAHheD2NGdTJn49yVWsWXvLzcSNfuHYCvNS",
  "key15": "5vwtrcCa457qoVb9MGkuB69NAZAUQYwi89rt4h6Gy2oPbTUZAvQFZbJqpkVc8TzB29o8C4eX4w3FqHXg98qxMKKJ",
  "key16": "MQugM7FyBTjcdajRvmahnDGUpgbutCvGzi2doEQG2fbNotAxkVWZUUtBR1fwY3k72vsR2twYrgUgx83tWpazbSf",
  "key17": "5RHD6RSwYsxtsDAHxxfYUZsegSkzw7Vt42bofaoRHENXrStBuqgS6pp9U8yQm6QRJdcdVnAiPSQhS31MP3ezxod9",
  "key18": "3hhsC1Q1B5MbxDgUjsNFRsPGqyhmHwL2CwipTamoCmuw4d99rz1RQwv1xGfPZjcLJBcoarsWNfkxvDRPNF6bfBKq",
  "key19": "31Z1CtcqdoYBVHRHN8C9BRYYbWt6sgAXDnbNcsjfmctNSzAkpkkMgxwapDYvsTdcoqhMywxWugszhrEjfREJgYwk",
  "key20": "4hCurKGyMCS6GHDLEGK7bhxBYyv53iEnpsZWkFvG6aVoz5MgAk1hnEKExrffsE816LhUnSBoHR3VfS4DyiC4epnv",
  "key21": "4x9vgGtVtezWFZo4w4ka5UrDhJ7jwgwKW9DrJ9593tg8p3kPTQXUz5qNPVG3X9rLoKZXUySBfkov4azieKBe2ikt",
  "key22": "4Rr9RvxHnkirBys225Cqamro8Evf1XakbXFZUjUhfV8VPUpfB6VE6hEp5acdd2WJm5L5XZPJnxssoqN4qVz1y4CT",
  "key23": "28HM11nyZiYAqrip4ZxdDMpEx4UQ8LzA6ah6H6bvqGLqbrKypWNKP4FemZdyXHHtXbjGzvpyKvfKAfKmTS2sUCSJ",
  "key24": "4zTvUVGBjRPPU18fgF38HEsFnjMY1Jm1Ttr4dP38FmxqRfp9qpmPvAfGLkMEzxsi4irBdKDmvRD88PhBtNhPJCxh",
  "key25": "3hyBUVKs7wDzLWQmEHs9YARzymGXu1qDMkCpgfQMmNPzVmbNSD5tNzj1QVkb5oJistk1wn4LkueAqx5dwmoeLpGz",
  "key26": "575hu3an5oMtAfJN1kagJ4VVeacDudEEx6U5NsxNn3fHKewQFAPR9CznqcyA3YLnhojRHaf7UWbjq2eupTiqzhEm",
  "key27": "MWexvJimbcNtL5NyyoZt5GGTAYmgJLFNtn5sq7okKq8u64NxEm6tMcrMyKb6go6o1KSVLxrCGTxJa3WqVzNtgFr",
  "key28": "5VXE3GVWaxi4b9m19mVsqeMdijUjsbosMk1BFhScuGai9oX4CfLsDouYMD8qEwq9raYBeV7kyEepcxwpD7rV35Wm",
  "key29": "wFTzMUFVFntk4T9ZqK1jthEBR2pjGFYJtMyydYMvGjyBLVCCZRXmu1GsrHyqRDcZgNdtGwruZfhKx1svL6zLchr",
  "key30": "4kMTp5CXcsMmNfDzHbkfixFnBdm2YuaqYHq2jxSPnGPtnUbjKXCdL34DMRvdKTQV8iZwyUTiwyCL5JqR34cWG9jy",
  "key31": "6SWHryKHfZiFezNqA2vc3Tsxs9rnr4ynKhiizZPUEXSNF4uULy3pTVu6TArY1XRY2qrZL4TPrZ6KLtNv3mn9kQt",
  "key32": "3fFQHXZZE3kp7F4TZVJeTdWSLEcrcs9upqZMeRfyYDtcXrxjEHXKRZzHC34G8K2pLk7mDpJ43iPT4tHLiC1j8LRq"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
