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
    "5nGgLTptFyfwJGSd1pBByUUaqvQug2bWCvnKiDxuFLw1b6vtu3ktTsTJPsVJoTHdiGGfjp9dPkvEtiThckwLQ7o7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5STuxjCh9KrLRn2idzrF5DtEmduuHRprwY6fqc6vpSP9C1FiGhCKcQfnnei2dn37FSBW6N7yKymEQ9QhVGnGsUAe",
  "key1": "5r1KKdRDm7UXKywdfrFf6zj34YXkQ6e5xLNx6SKw5X8wcKmD2yydQUfxEdvA3V11wyDBkVgXTKSkYXCjCp4s4MGm",
  "key2": "4RcChsaXHQ5KB4R2mD2JX4q76Sz7SjLTmWk8ggnYeZeV2my7ivLatbrNN8tEWEWyMzFbWsdFw27fGNaxpxBiuoj4",
  "key3": "vg4njH2HtiyAmeztc4z1iEqWYXoT9rLB78XumAxNFwK8FwfjUhjuuvN5EEhZK1eFCWQQtA3seyABrU5gBE31PhN",
  "key4": "24DQzzsxAagQWauRZEcB6R5BXLFE9vHpggDu1oGc2PKaWW2LLCk8tYABgjFxNxkLUVHwBaQuZtRFWZsoN6BqN4jE",
  "key5": "4CJjJTCSrnaYWoiE9MS6cQAnvGm7EeFEjju2vCXzQjaTiczTqez6FQQz7YGAcWG3c1hLsSVocPBx5skWhSZ6aCcU",
  "key6": "sAWcCBdqQCTKLBVKKvXr2aX5y4d4Bc51EWbDZYSy7gCAC9GTF23yEbVQZrRpPpyHK2NZhcfyEerCqspeUGPpAxL",
  "key7": "3C88P5cKR9vaFpi5GwHqb9hCJ4iDp3tg77vogiKUBfd6dZhkdidHY9DyoiyuZSFe7XRLBrx4FYqY1LKCwHzQzXkv",
  "key8": "498msV1cuHujM1pWZbdvHHD8Rr2oE7TZ2EhhyfGM5tBc6QAXF1A9dQ3yW733jX5w1atEnz46waw4PMk1LsXkCv1C",
  "key9": "nGA2ejFi7X9xvkLKCgVDiQd9j713dtnnf2su8oxQzsHA3o6X2R2xwvvowhe9dAL5fXnBY2eNWK6KvQGzAvpY9K4",
  "key10": "5JWS88XohM8XiE4uZdjo9KhD7Ph6oPTZMchdTH8DMChTkCyQeYd8NQEJA14CRBMSksizYCUHxAiRwJJF96s3XCFR",
  "key11": "TQPzSdKJeSANfbZCPZ4jZrQ5v3cqnwkYFYdqZkoJ53akpWiJc6grxLkTcqXLWgMdWyes5g4zKMkiE1N6wLpa8km",
  "key12": "mYJjvLQ7sgfixBxhA3h6sZYFnWd2Z1kquTnZjkd1iAPhRCmPGZAyjDv3Kwq8jRqe6dsPEFDKLC1fjuzCnRJeSwq",
  "key13": "4Yn8nNauhtwcHLKG4DRvxaSrJrBK2co1gpkC51hQ23nFFtMiHQ8Lw81E7LBiQZr3owz2cW2vkyVZi4mdHDyWsuUa",
  "key14": "4wqx9nZZjTXGMLZaUzyrK48bf7qCLynBCjYbQouvQzLE5h9i8W3VtHQ1MLmu92VgT82kCFRTaeFXkY9jRx4JGWvE",
  "key15": "2atDnzLU4cTjcFy9jtLqZHf1mffCVdWaKzfco4GnSYpJ1XgGdsbj1ox2LWvCFjfT6v7w76rHK7N4viLmovYnteXS",
  "key16": "31aJeszowM8xJ1zFJU8SncpgyRhbaPyTEY5MaCFzGHg3MvJprpZehdvaCrCoEko5SazFcMnBJ3fMdQPtR4u3tb7v",
  "key17": "5jzYrWj7gWUhUPnU8xbTqpyH7fb42G9BcDAh2kHkHpBNMybfruVT7QCbj5XHKeFYsUqH6iLhw4oayxiWFZTaXECF",
  "key18": "29M3KLxm36JMgPfR2t4ND2ThhhvwmT4Fmp5Bs32d5idYwihjHS4hV1jkbA8wim3H9Az9NPb74FadBVYoXWA1J2jJ",
  "key19": "2M48xp51RQuU7MGJXQSvA41uwXqzaHmiezzwxXt9sZpmpNgZvNdZHvq6m8a42JyNd7cwZsXh9WS3XTwC36P7HmCG",
  "key20": "5U7QZUsTNJhnVCyaNtaHWo91df8Sa9Tg9BcsdFtZxVyLmEYRP6ZCTF2GtQgrWcxkCJ7bL1unNvsaEyESLXvYefhr",
  "key21": "488uxYg6nT1ZGbgqa69MkDi3YawMxngkvJkQMm8zzcyJk7eqFyTdgywVUUrqC43oKdvYWXsrk17Ra17qtWxdgNA1",
  "key22": "4eZkSg9scnfPCGzaGQrBiVKK3YeStPVmpuUruaqghb2WZ2JyjAZRCk7nJbEzqEK222phcCXCRpwWqT2mhFiartN",
  "key23": "3auCmSKGZWZHBqkSuouN7w53a6XNai4GbQ1UEHrrMfty92gQtudcvw8MHcWgvgXj1WMArtZmLjA6rrSefoLUEg2T",
  "key24": "5LFhj8BQ8hgg9F45YdW2a2oRqLWSonm9nnyVEStPBedGGYLyRBuHrZ2uzJBqS5DjBFxFCwoaLADoJemyQKexFCQs",
  "key25": "SbHuVf7N3HLGMA5vBQMrZE7yjCSVtuGrNVmjd2Y6i595Pdv5DzLfhmXgGLyCsKzkpd4QdmCDKokSAkChjsBfMxB",
  "key26": "3AsywYaNtK49HNz4NZWKDtVJrCVhYHMx5Wtr1XVdjtpUMFv74W8QSpwLkYN4vXtWsWBP4E6r41WR6mZRCrYEKru3",
  "key27": "mh8HQX2Dd8VbuDVqfNtcDueWTx4M96SW2a5h3xtGn7Q2zkDf2JxQgFEuqz9gHuKgea71nWfYUadJeen1aJeLz16",
  "key28": "3jhxvL1ae4PrdAtBED4oDTUgxxMYqwLv7A11cPX6s2x7D33qKaCb8U6JxRvoNbq9ancSNW2GuNf7ai7nJDH4Xx12",
  "key29": "4uS5ww5LkpabwZCSXQXwbE5fzTWAgnLzTMEwwuuajMzuU8LPpPoo2niBSw66jx1knZdXbiTGmfqqJJLKG6ZBsRbA",
  "key30": "55zdvoEADxc7yUWgsuG9gaDL4s4A3KQPyF2gzMaTK7RVjhjWy8RfZZmBETb9hY646grm9Zq9ZtzyEaxaJ9P77Be5",
  "key31": "7Hfa7iA9ZKKFcSfGDJguk9gKtmxzANJ896CecSRAmcAaE7Hbf3aUUDn2EbgZVPakqY7brn7ZGNbYrEvn5PchHa7",
  "key32": "62oqqAwAhbFkB4Qj6wKEV9irVuqsBEkyq7EnxpWCDJbWjnFdK8ZMHffoUCeuPmbSMf2dTNMP7Qk2inmZj9rzY5UX",
  "key33": "4bb4avq8J8EsX41jiBGw1mfito1sgvq7XAHTpgEZyuXAMVyPayZGAfm673PrUreqvTi5nbQJkrrU4ozJdBDohFky",
  "key34": "4vToJK6Zp3n2noR9XSkQZWQ3q6PaGP3j9bZtmk4yoXNWxopzKLRVJykYzgD3hW8Bo3Y46NWCz8eHMqy4nwR3fFQY",
  "key35": "4FBMh1gCbig3mYznWyGSXnkMttH1eMqFwC4WFFtvmbSJ9W3K23kHtoirv79KCwTJSjCaC7YHv8RTQX79DYeEPVDp",
  "key36": "2tMDoz84dKZcV6SkQnozT6NnqwBtcx2s67ZNdPjiL8fFaYLmWimJhmUXxJK22tN78443bZ1yJfa3YV6VaE4UNUo8",
  "key37": "3dESpq4PbRJBVz9rVzPFpii1o7fiXYibjbF7R98PQW33kcyTd9iMksqfKKeMGuGra634MoB3TZcWVNmoS5eNqfVX",
  "key38": "5gPUjN9EqgHADTS7DQa7yFSGWhh96J37kB1dADTpuALgZhUyeCun1KLG4agxyj5AayNP1tbG5V5JmMuLe77ANHCN",
  "key39": "3qAL2ZnJ1qBSBjw3Sq9WKzyxwaUvP6d5rbBJ9j6psyeFEHunLKa2JhygFUz3fhMEnTTJBV2AkVbzivabfiwdZy1t"
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
