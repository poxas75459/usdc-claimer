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
    "opY5uGqv8FUQrEjV8iCLAVuEm7X9ESxgibrkbpV12VQepJchHyzJtFVw1SYTX5sAVZPqgZRozaUBekk7qkyfY21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJzh7p7s8Y4nttUvW4gzUvG6GAiM4yRT2G9sk4dBaGV3AKocuf7g5dpsZLNreKCReYhJWVaQusgfRue5p9caZVm",
  "key1": "3cTsfeP3PtDQYfTgxjB1ZbhfznDpS4iqbtF5Dc9V2mGkMaF1JwYg9BkSQh3AhrfJiVABMS2JFfhPoWygfvW1qFWt",
  "key2": "5GaAhUfbEcwm35qy7Paggti5SEvS3cswUJxCb9x4JaZsArrQ3D1X4cK33DyqJW3F82ZRRFBL6xanQ2da7seJd2cd",
  "key3": "Es1BjmLFPUjqa1ZGwxUdMfBT3ehTCt5AE8hhjGzV6t9773tE2STmSXdawH5KmfD4LUnZATcHfrwgX3YVyCGUa6a",
  "key4": "4QFUrcAxz9GdATsqk2GyE8gKAwwgAW7cedpT61yzPDFq12JZmNxpbP7JM1defEGFdswUgtaobDz9Jixz746VZZQS",
  "key5": "2CsyspL4QJQoP8wpYmkheytMEbaBtgk9S7UAjwEgAHRtSfQBrugqQiruHfVPMz8ka7u6zuGcto7eTd8Wixy46RBD",
  "key6": "4wVMFGK15FrPesH2ZxXZodp6efu4NHs62npUmixYneTNQFKKEvz5HaNQPuExxFueFQ5dRaKJCvvAGSWRpZTsQhZg",
  "key7": "3KpvX8RyAWfWgtxFPg8ttUDas6ijDyykL96t5CASN7sucXAGMmUApy6rs99kkEPiucabTKFKdqcVJw9M1zgU9Lq4",
  "key8": "5Ldq8jzFvGedh47gxJzVKMgMXaCY5W22UVjifYsSxCya82hL4KuZqRDpVWpWH8yHrmy6sKBWKxMZRR3KzRhCjBZG",
  "key9": "2qSvV43z2dYN1dxHPH2Lg1p9ikgaV34a4gqFTrM2WixhaPPD1dtM1R5EHrAYbDWPtLJczgVipCwQUegqnpq8k6f7",
  "key10": "4KgV9NybsoRHJjdqE4NKESbR9vHka6fCJdfu1fY25wk4eMtznmYho3sa9v2Zryd8miTXt9uSKy85SX845AupzoP9",
  "key11": "krxYwTBLEvNedic6oLLnxZzS9yrnEARno5wA6HQ7driT3y2w2yzYbGV7LfafhzWePBu7qo7py53tJazs4aujmG5",
  "key12": "3G39FJCh8MQHGtLW4UShvFX7bmE2bvT5rJmm95ttYrtLxVHmRuov9skxF2uQszfsdWgh9SjrZYt9qWLnpLzVkiHA",
  "key13": "5Hn5udZoEG9WtTVV52aZyYPk5YX1uqionnwbwE8FTSA7PdnDYjNcNsDmzT16xbaNV5WwgE9VubjNerqVC8oKAwrb",
  "key14": "3Pvysbn3XFSxbEwdgYsopoBEYWwQvdeaHnY3U9sWsNdwh1ovNBv9Cdw6oG6JDCfnJGsh1gVq1pCn8nWqbY6BmuhR",
  "key15": "hhPY9ryEvoHGcu3xXQbVaARgpNgXqG2jsiuRhvWuA8NM5sagzxCDxk4AXKvVA2oREkonHgGEqy7ia6SsSEovT7a",
  "key16": "4Ym4rnwDc2bN6QSEFTZGowsshTdmMwtn8wMNMW5mLJLXAAeiUWLwrtbYH4Ve32zU6YCaitwaJYiZB2bXEoqTjxoP",
  "key17": "4oo74DRqHf3r1rYhUTgixG8aUkqDNnyNUkcQEbho3vxbgCmfU3DHvFBSoYZ6Mkt4K2SCKkSeESQ7nSVjx6RUM9mR",
  "key18": "67rE4BNS7yUhfiaEFSSzg1h9RGbfy2cFK97FJiwKZ3zsXar9yaonBqXng7Q3ogsnzW1cc9jVpyJY6epEwDAMXf4S",
  "key19": "4jomj1wX5Cz9892FQUgbiLrzMHvvXRDdJbTDXHWEoVEeDTEhCH4cdSa6HfQvJeGaSjLmraeNXPLBPUtN5iiCZKrV",
  "key20": "Ko3ffVtWiVtREwRrLpZQoLa4CwaBQmNAdKAnHB5FBogQcYj6z8VVtVhdxFpyWz89W578ZRtsiYfzsaxtRsXo3x6",
  "key21": "452Sk47to4QTN2QjN98mHbHWPmGvz58QgPEGGYFUJFZ8dJwWfQxeMi6Jd5EbezqVc4D5ivTHB2TV5LAiEMuVviEc",
  "key22": "2HpXeguEWrHDq3pJpSw1VAYTZkxcTCEuCJ3qjXoF5Eb2i5i8T4kabAYzGrG5PgF9HEAhfktkEV5FcGxsbfSoYK6F",
  "key23": "Fow9qMaYLub6CihsYU9d21FFQXK2CZCTuz6vZYTBnwmJ8f2H3QKAGDJnQxE8UFzrHxzFfnzZpXrfKUFdyH7QhLu",
  "key24": "2LazDZNQY95zfn78jZb91LF6bBgT6bChWjBVnj39BpXBaZeuuVK8AXdGSbMU3LeUaKJAY2LuHww7vYvSQoFvEQ2s",
  "key25": "zRtjDBqEzvpM3Sp7BEaLTBE95EvNDYkzZETWK5gJmEMTKKbJm893rwiCrr3GgFXnFWZ7GwXayiNKgWMvW6C1rmP",
  "key26": "4GbHT4BSffHmfrKr575eJdnuAemyQueBcePYcZyes7q24h6cdLJCYBmhnbpVP33K64c38Pq6ck3QBKG8Sj1JPFPK",
  "key27": "2AQ8e6kSCqzpZ3kLLVEWA82TTT4cvJfu2FGT199ee8eevvyuyjniNVAgXbJuhoJwsJh1EEg8FrpuQr1fQVLVPPU",
  "key28": "3SeLG3dMFMgN2v4xieWmPrAV2VqBM6udtTeKdEso6dN5Rrt548gPztLcAndx9Akq79uhr51tHyd5hW9DdQpAAVwj",
  "key29": "3PcVAB3VXWyCG4Kybt9H1KuuaWKNKCvHtbbJt6MyesnpRFKnY4ZihJYqhcsS9yqn4gUZhFAo8JRuhFDUn4eRbwjQ",
  "key30": "3wE2LXJ9WhmsbMqg7ZTUXGhpiB2NN9HXy9pKw7xQKXujGVmJHiPg7WKShS4SXqNuUm31rf7zixjG721GApCbYsER",
  "key31": "2Yz3xXvRCRegsZpDBPbJH9FLaPFnvv6H9eyZsArfrsUdXcXgLrEZA2TWe3wPFaqmGsWyo74e5w6tpUKYBBoNerM8",
  "key32": "ytM1PPPUnLmX1asx7fDbUMs7KDYKdwqiiYR8pp9y32L7AiYB3VFvJx1anVyFojH3kpwATvd93aECdyCN9mQ7SNX",
  "key33": "ix7kTKMkBQD5v5YS5JWxmu7rwFsDAJHofT77kqbWKzYNqVwRXBJhBwtzmskLpXk8JcwRMJzBs5fXBeqGosqoo1n",
  "key34": "5uNdXKeWM8GK2mbFUvr7qudcxTQgDV4m5fkg1ALvUyM1deWhvLaxvoaunoWfMY3g4zf4U1Ljcrv6SAUyEnbpyjpD",
  "key35": "2BBwsQqwpUzV7CzyGKy5epBqa9SQivRJUaJJ1hUiKdTkigYZSFap4apCnCLjvJUkxHnrn32cj6Ahh4MSuLtB8Hou",
  "key36": "4rhpFN6yarT6xRjRuffitzDoQk9Q8xT2ThDSiKutMTRdkRq9TBhT6bbLDmZrKLDHx1AJBYACyC4tD2wED1VyWQVB",
  "key37": "3BAHgcyQ2E1nUr6kCeQtu5khHKNao1unW69VeSEQpnPHyQVB7DpsHUwBBd7ozCbpZp1v8DbvMgJnXav7dCwaamTd",
  "key38": "3uvcA47TNSQVCRDTWbS2zmq9jPshy8HdDisopxnRW37fzPAkUyEK2tba3onaryu9W2gHc1DeV6DGN5ZLyJ4Ag8J3",
  "key39": "2EHTuQwGWtgAQxT9Nto6Mheygr6Qk2eHxCRsEFjwcuNCQaqjraFeV9ha9GoNJKcYcH1bnsAKVVRKcLXCnRxULJnP",
  "key40": "5F2ayf1f9rQ5jKEHPhQLtocLL5e5HKw4VrDCCfpqvqrxwXpbN9iFZE7AYaceuCYU7WA1CkfGckrTZX7Vw4Q2JuDD",
  "key41": "5dhDopcmCEf2UERcBFjE69sQG1BM5WpvgrnB2orAgVwHSeJRxhfmoQzcEiEwB7txJJkdRALUmAX64M3CWwSSbJmr",
  "key42": "55oaq74gAAEPVsnTeTctMBeKqWG8Fr8myz6yyiyNngFS9rjAa2eYTpygHiWobs7r1fsNju44wXhuf5yKdk5MVcu7",
  "key43": "5R63F54unefxWzwxQjMjyFs2te6NbsPTBWb3QhENidzZZqe13d6ieDcTKE4qub3547Y8dSRSEP9gWuTC6Co2Jdfb",
  "key44": "5CFrKK9UEsXHQuRRiCfpXUfxyR7w3DY6Mbpp9R69NkwXPRSAYevUjRacVSaeaH3ym1QhRxG8UGZtqHUFmJ94cy7i",
  "key45": "5uE2ydxDJf16urj5EnRBms4J1MQcDJesU2ySB3XaJsYp6gNwkmKGeuNv3gFDpz28izhSpDxTpN6aoKJjL9UwieAv",
  "key46": "2DWD4xDu2ubh5sBy6XnBU8gobGQ9nuDcHpgM14X4sdxavwZoybr6A1NEzd473unviw94EAgBWwqvMNQUbJj6zLir"
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
