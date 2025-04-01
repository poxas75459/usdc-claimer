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
    "dHZqjtQC2MtRWTrtXZX1zbZt9bncymSUjAAzvKTWgKGXebte292fMxVThXZ4k4LGhqLYAmW3JnzMtD6SuVmsuYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pCdiCZqkXpJhoWH38N9JpB8UShsnkcxPkwESHrVdye9qGtTzrsPrVapuKruNuTXwcX6pxPAMP6pkUJgorq6rxDf",
  "key1": "2HuRtAWBcRW1KaxW7BMqF7AvkcxfF19kDhNirLzwp2mGFV5cqjmuLwyxWM4g2j49ALuoPQAoJenbQVud9yQdXeHj",
  "key2": "5FuKenKgayqXht4LPLVxGgyhCcw5eHqDdBNvEvPPCPtuZeCELAw415dsXBuAnpvNMYgqVRiPSG8wr581qKk5b2iz",
  "key3": "4g1m8KErGtR9izk84EwxpwRyvYJES8T8q5cpKeA49sQCLVjCWdpe67B7bH7SCTgg9zELfkjDE7mSDRMsfZUVBzBz",
  "key4": "2LLptkMVJPeTZzACDQgfgPEQd8nBeeASXG7S1hUNYpxNUoxLDmEDSp9N8wTJ9tjhj3dViBF276rESQepJXowU9w5",
  "key5": "2cVGVF1dXPFqvwKHgdSVq78UB2vDGt7tiUF9NJismDiuhuc2XaES853QK31CasPwEixXhEGNxLJek65nyB4UG8hW",
  "key6": "3ezs4fo8cNf3EdhesJ3vLVrbhVbWZpzkAgwheegJ2297ERkaP4tCQRbow47Y69qPkgCXu71yHJzmbMucd8dEZUBF",
  "key7": "3yM2JGc8mnnQXEuGsY5Lmpwig2hNJfsmUHDUUcWMbwGPPdonYGXNztE8fZ6vmvVkTKYKD3yfAEF1wf7L9rBTxZ2S",
  "key8": "63SKZAjG1UBPYWajBSxjNH7gZ6dZSU9nk615iYJXV5Y7fdzwUSMjc2YDPYHAvAG5f4CmCoHggPp9U141ySH7HeYV",
  "key9": "66A16K9KoPmAcA7hQjyTFF7nzFWmM4DpAUnbd3bgakq6DM6bvQc7CPAWSiDkjKEACxX8t3NSYX3UhWSg3u4UvUeb",
  "key10": "E8x9Kcwx1mucGCXCTUSWYmGGT8Dui1gSqfpDMezbG8HmUUKRrzG3Dbhu5WG3CVAaqsVvcJPzFbom23NgenAydgV",
  "key11": "2aXmDghMdX5dBJT4TantMYqNoC19s8HJPcyC7QnnjWCp82d54YXVL24j97q1DjQeWXqPAZSywr5Bpp6ecuEHkWRe",
  "key12": "3aVP8ikDQyQ55koBt7aeJ2GZkUu9MtKpBJuwTBP1nUCstfKQopuaj4GzBqTr5sHeZnXjPMnU1yaKD5Kr6ayRbvjF",
  "key13": "4FhiUFKXSP7aJWso9fGhABwb7DvjBwRjp1ifR5qRenrT8dSBdx7Ra3uNnSbuQwAm2qxDE9W2tB9eszD2fdHAZ2wM",
  "key14": "5EYCCPWcPcCme79djXJzKt3AKYcwxK3xGmSkeXGdfpGc2uF8UBvcHm4DvTqKNtp272FHSRJ8bY2EhRmKPf6gbR5n",
  "key15": "42YpQ8Zza2QKqDDfd7uoMMic94YvFk9arJCqvxNyPpjQ8r5e9U2iRqo4RQyLJifBkETr9cVgjF9qwCtkwfR52XiE",
  "key16": "3QJNfqyNKgRwdzmJKzENe4jMGBpu7D9RvNrbbGFA3ZpCGtCndph9RqzwndG1oKu7o4c9GfAvdi1gAoJMFfiBb11H",
  "key17": "tDC27x9iEFdHm1tquKdiLM2N52kcPCDA3DKymJQvijWhNW7vHEUUFedZT5uLP1ud85uhvvFqYoMDREyooyLQPSy",
  "key18": "3hCRFTJPNMXdwydqXLuRgbA5UHDAUPUztGQAbzacBma3MDPFrfbjGihG9EHm3ZK8Jz8foYaLD6Wpa1wsAt6zDu7J",
  "key19": "5VE5GZMj5so69kL3uzvozYHaM9LJJzjA7wU3AACi2ZrGzvY7HLc6AyKzs94wSyzH1MUVP8tBQPhtjomnzwecPNgs",
  "key20": "28BeMGYydcSch1Vcns5WVQVf2XSCyCVCMn1rvmbwaUoJjYB9kMpfxJUeHnoCT4bEs1h2t168WF2wSnueMH9bSpWA",
  "key21": "3fiqgbNNhfDtaHurNUDcJ4wtfukGf4PKba2bcJkQFne77MGwgw5gjZvLfCpNh8xCd3Df3mQyeHUDXnb7PuATnt2v",
  "key22": "28PXCbZhd2pbbZvmcKPvcN7KUD2uJWb7qkwsYUNZx7PMeus6aoQM8gY7uE8XcQRNPMRnskuws6dtHTojphTXst71",
  "key23": "33SFcDpC5vLzpAfwSE5e5d9Scuq5SkUyP83MMb1SQya3GTZGq5T1qYCaQansyizkEGBwrziV9LgnqwMLkFjfPDqp",
  "key24": "5ycx5SC4yq2ha4uTmodRUKgDCnMxyARgMFh9fwnfV3gu5RJ2zQpykPiGowhEyZoHXr7pEAQ14dWR3DRV1aTumZVZ",
  "key25": "4GhREbw5qHY1MLzrAuGkRcdkw5pNxHVx96oWwTzszLzDgopbnoqLmBQmJYH93SHmQzNnT84tdDb6aPLhddPjbZ9g",
  "key26": "2aPgmF1fsSdm1Yh1s7SxeWN5C2sgThgTqb9suKUwq2jYzea7WDuhrVJKC7n9X9wVwi76td6wvXpFweYokyF6ox8P",
  "key27": "5Fk85qvgEsEztRkxh5KAt6gaXmeVkDnD7RZwKS1J1ki29JQaf8Kjx5iLXPLqkQRPWug2syBEYp3VfSvrUumVVp24",
  "key28": "5BFGZ5nM3gSr2ixtNmfqZeRFNn78pApwVsfRJr9VrATaeXrdKsNAhS2oZw7JEp68mWFbsYk5wpB7U6E1WYfKG3kX",
  "key29": "dZaSFT58qKU9C9ao54epQ9PCmKkYQFAF7FjpUtEMpgYgDjiPTi8eMbzoC8Fms2UFVPWYyMhsRwGvrweWQ7K8qbz",
  "key30": "SjdXFBa2onXgqdtFSo7xyksNULTF3CVsrVyb6wzJz6pBrHaUMjdCD4Za8bWYgBXQP1oxFCoAvGGvbuHdTR3WiMC",
  "key31": "5teomMR5taacwmgv4ShBX9ffLrVmw6cY2P6y8xKsTqa58wiKxfJPJgpcqTofsTv4A3AEkKxNNGS4aLfWtq9CyV6r",
  "key32": "2Y3unMzVGW4xP4fgsmix551Ynj2uv2QtgF8ffBJFUrnH3QXrpzqmFs8Vz9YrFfhN7bha4Y83By91qPPbx85dXQ3K",
  "key33": "3b6ofKvdDcaJQXNp1mfGz66Wz6gNBeb3Tiu5ekyvQVEUPaYr7ZnRM6ENYjD9nDiRTF7YaYNFTiGiTWEbhBLjygrK",
  "key34": "5PUCiuJ8jMdUn8RzKoSavsyNVZeruPQtQNb851fu6aTq7DdmLqZgjG4HJSjUcHFt9MtXF5bCkRa25qmszBx5rtrT",
  "key35": "5bWVUaL4rfHJMdcXirMQaQkFrZx2BmsUwXY8ewYhKvALeVaj68j3p86gsBPGQ1LmwL6J3pa4iBMJXendMg4vfri",
  "key36": "5ftH3Q4EF7N76eH6qDekFsGi2Qnha6f3n33gEwXSfYyaY7CB4f9xVz55vrPkJCUF1N3M81D9EuK86is12MnMEbUS",
  "key37": "3rtjZdzL67LamWXqyJp9jhqBeou1B8kVxq1iGtG3hPfqpZw64pvcVWkVAotH499SqC3U8uVuES4pK1RMDjoFbTki",
  "key38": "218sodhEwYWdKFW5XHR77HT8tr5yP8FLbNUZv4o7e7Eb4tr6Q7dz3YC9mkyV9BM2wmj4k4r9TUEnDkkHM8fiHbyU",
  "key39": "5kENhEnHDKE3jDWMVmkBWPDGhHQdNQhwJaCSBCkKEwphToGKeMqnJb3nqN9iMvXWqGufcMrMMEKpQnxzvcdd8Sz6"
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
