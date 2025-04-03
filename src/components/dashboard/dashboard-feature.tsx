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
    "5BefcF6i3m2kU6YLPUqZG763eygKP7Ty4U2Dit3gL15hPNhvLFRdsTSobnzK1nFWrdBGEkvQqeUvYnMKeiHg4Sy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NsJd3wN33tAy1rvUJpFuE964eCQt15NyT54aTHf5g3aMs73PPgaDmfpWUQLCBu7AiPGprWwcafzJNJxoErWd6vs",
  "key1": "f2ka7AHg5jRSbj7U9n8YtrqEf8XijgMyi3VhsBJcikDimEuc3AHE6q4bRVz8bKVaug7NkgzriZpPC3EuZX2bsBb",
  "key2": "5sGxto4S2HVhPGREhSAiEQ277jHiYKX79vyHGG598P3j9QvzVAJKjFrZJkQUaEj1RGKzrvuxGuArBm5cQBAkcBJs",
  "key3": "4pPj1VunyetcgNHXkfL26rnB7GwcrqnVQU4JzioAN3JBRs4ydZ9ut22a7AwTZTUhVRb2yxqiZWBuwe6R7f6t25ZW",
  "key4": "moYSEKsWW1vuZKrLEr1KmgAT29dHfs9jAw2HWpBXXBZHWdPSsM2vrQiYpLP8dUeu2RMvTtWRGg5Fr3pvYFygQCe",
  "key5": "5zQRjGjd86Rv23cEhf3uEx1Kh3bXha2GDP4sAzpesCs1MTCEPSxej347f4q5QqYDSfjkTXVqHMrGoddZAqnjfMAk",
  "key6": "5ahZaz86CSq6iKAPGjCE2DSPEKXxaExuiaPwhLJSSpToFFLRwR6ZJJU7rgCfZHiWjXYDMUeXoHL3EtyG18wFsvMW",
  "key7": "2XtLnBmpm5b3iKMKMoRMvYuCWASss5CLc7oAbvu8ZGfVAPzgSWrRoHUNa6mi334TNKer1jGLi2L4gmbKEC8LUvCe",
  "key8": "2KYHrirvKfLJFnPahXvU5vtCxLeMqkie1whoTUALUMQLNfZR6jQ8KotmvE1Tvb79UJnh1KmMQy8NSgrKkap7Ug9w",
  "key9": "3hrm4pm5jGwug8nUp43kMGzGM3h4HVHS5xXxhSrsfDW7cWEkbHESDZdAjQ26vQqwLe1EczkyJSiXvNVeaAh5GX8z",
  "key10": "46VDS2Cy2PSFTcXQuBbY4q43JjTj22go4Rz1yVAJT1ZaqCirtgwoTwZbzHuAqgKP3GDEUuLq2RuSD3WZtStPSXrF",
  "key11": "2C9okrhLgt4TtcquPCqpVycHaJesbw8pivbG6wsAuBKVQJCMnyVtjLtQf4s4mQL7Jq6xyfoqW4Hc4ucZ5tHbFybb",
  "key12": "56FWhaNTFjJSh9ky4oH2NKeAHEj9Nssru5wpjr4Urnu2zMhgv8Pjg5HFNwBjzL4sz1qqSgcNftJb1TugfBae6cRk",
  "key13": "2mrCLcCySRK5i2JjjzLLdVpquP1wS7eD3Ee5aeRNAkNdNDyrRqaNCPgrRmJoKzhz37egxudU8g39enNanwFkzRkZ",
  "key14": "2jMLstDMKJr1u7aBbkDLedWxRhJCvjq6Z2WVit8fCEQwVU9KC37LiXYJzuxgVJWfZ3b6Mh3z3yuaoj7uUcvk7R8T",
  "key15": "5dqav8ZPdfU2aPuY57CxLpuLnEW2GBgabCPZZer4DMGFgtmgMmbUGPG6n8GCVhLJchLn4bg1aqGxziLzc62VTiGT",
  "key16": "3Ee4MCvqDV5hP8owkHsnTEpesZgkqhx4es4Q8yB8iySBSFhSCW6c5FXfQRDKBLfcyFHmWTfChJRmxBWLE3BNaNEj",
  "key17": "2dtQktjNnzKNzTVTXpWH1j17yA6jTytWpdVwtbk8JUrMkxchpQhDEwU7yCNhk1cQNYS3jPc5db75sPfLeqFHeoZY",
  "key18": "4y34mq4e8FUCgfkZvztBKdndi1CVRtpp2WXwp2ewkYzsQQLSEajWF6kSVHoLCZB1BNXeDqaJgh9DbWvKixKv2pxf",
  "key19": "2vYDvHLgssQWpfhTLbrmHZ3daGjzu3hLqKC51NYzZG35jQMMxwMeMkw2WTWqA8dTtBUqk2m1bgmLvWAq1vWfyS3L",
  "key20": "3W7GtN7FiHBGQxSQRC85C7ecGFTXdNGGBXLZqwNouw3aGk936HxY6ohqD7fFKASPoAxeLBeQgH2ey8mMWJps7hTa",
  "key21": "32HNcn2FXurF9Z53uYf5i4rP8kK9TTFjXfzef8QvZJnA9KcmzypKkF4fR5Q9QspvE5WuBDSxygX1drLF5RDV92yy",
  "key22": "2s5J4GwCVUWfY1ouGAj8fHWjHXGH8no1ogLZGsZpwGd77sqKiLVqwd8yLWE1Rd2XXJ8s1SPXAt3F7NvRxj8nvW39",
  "key23": "3vwpabqUaRkHGmR3g4DveJZrrSkrQTffxkaggXAYZCWg6F972An1draHuyRtnQsECtJ3DPuGWbHLykYHAtrCHsUe",
  "key24": "3cgLZyQajcMD9skAKr9Np1dcYJJW74vjfhaJ7Fo7uUAVFY27WCozXAUD36HrJ3cFN6bjfBcj2iCR4XrMimVPsr84",
  "key25": "2TDoTEzRqmobhSsHf4G7qUAU3wQtthjQthbkeGyeea8fYRcN93gn6aaXoaTm8Et7wzQJHrjSMNKvUgtZFbdMeGAJ",
  "key26": "vYJRVAp5yu9XFaHkMfJ6n2xEEeMBpuEQ8rgARRHtLCLbFx2byiejKCM2WX5dkG6e5pUgC6WoxgiTnWZWBCnTsWK",
  "key27": "4wrnq5zQps73pCKKoxwmjQD8Vf386syfbbuGkzqumx7E3EhHXDaLJBTk4Yh3PoSi1jfcshmgvNRXkiGPJpdjbfhp",
  "key28": "5XDk74sZUDmvNy9jNg2t3vnB3vSqjaXZT1kosfJtNRMtig93o9nbJvRGB4VJWAu4W4x1zgfzbkficgY5McWykZxF",
  "key29": "5F21CTEHrLJwmropeoidgUFTgTrGhG5NcSbfC8KGJ3Ui7skzzXCPTbDKjFpLV8UPzMEPyPbdBfAPtCCwwiYivxUx",
  "key30": "3xNjFguDXbEaZnYpWauAFS5LctYB9DpXZ7ZzrqaGbKQSJUZ7MXMHmB2jpjWo2jttCZgA6tTe8Cak6VaSwCpdenDL"
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
