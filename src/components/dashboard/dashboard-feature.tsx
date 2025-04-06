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
    "5N6zxwtV4uVzDsW9692hjkp5EFr6GgFuXn7SZRFjJgSri1tt9cPJ3R37LGULkGSBPdPZP3DQ3Wc4t4oh8gqa7p8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R51sm1kNzYSxw2pAsdoLuJ5mJSHHW6FcKBE5jHDCu9kGxL3uJzPN2uk2PGgQRMzjQDke65YRENqEkKLd59SyZXP",
  "key1": "5du9zzESsQPJAaCL6idhCGUQAkNSankW5fEeWtALrTo5P98v7u2MeLZyHTU2PpgEbujkWtz2tNR4xKvPpWWrx3sU",
  "key2": "4DrSr6KxPCYPkanXXZVb7RhnAzM8gXJ3wzsPepT2v5Ci1K6CUmg2sS4qvi5oNB2xeHRqp8igxDdEhPi5t9VnHhtp",
  "key3": "5Ce7Fc5iBzTmitGxs5ZuEnqEmfe4uDw46X2r5YsaxLTKbuyKLb7bQj7SMVGJgF4sr7f19KaUXtYRT5Bq2bSsz7eN",
  "key4": "4Q7uqwRtQKZjy8CcSahxnTpJo7WX2MdyKrcob94LjW4UNS7vZxTg4he66HTYyUaatMgNRnBdEksfCb9EdE1Snyhi",
  "key5": "5ZT4JhfA4pcf2EUMuvFspPbNAUQes1haqN4rxNXNuyvfJzxHPn5DqWh6zfNaRhgBxFwDsgujEMtBN2KC2MwsLJoC",
  "key6": "4xgAbKwPrv7fQuc3vCkhae8VjoHLQEfFGkHFqCXswkCdKN6K3xmNWVwJwn4d9bqxUmfUUvVN63DhDFZC1kkQUaP7",
  "key7": "4uCjqUyJJPtHezTC9vdBmfzvqf419whv6TXNxfemM4b8G4Cah6yhniuGY1p6zBcE8eUtTab8wSoZiAwrdpxbrTQL",
  "key8": "C8kiSj9srQ9vAxe6kLXigY9LmjuzEGW8gcTwfS21vCjN6tXMYCBqWcRkk9AqkGtrxLJf8vD7hccnJ5dkhLfk4WU",
  "key9": "2xTMauqCQ8SXAY7V9QTdmdLX34tx1mfsE4cj3S9D8pgt52v7ZXCJgA84ZBnFHcumdZ8Df4op23DevCNMZ4BEmYXB",
  "key10": "3BMMe3tmmhtE6mJk8Yo8Yo2ndtkPUFPQV8GXz7sB7yFojYs4mAhL1EpL69UwKwWX97EbMBDB9Pup9UoBcHeB1nGG",
  "key11": "56U9fy7hCGdDqupsgDAWANWhYUwEwnXKFWUwHmMaLwLNf6q3VKhVKdMKZQbs3YvgTnGdeU3EXVb5RfXAQUyHNtZ1",
  "key12": "35UFSYm9DQoK9BPbztcDWw5KQnbhwcA7QhmA7NZ6ZevvLh4ovCorpeZLdUwEYpDy13QMsy76waa74eDmyPH46bkt",
  "key13": "3MS3znLFYdPxNBXxCiJef7oHPiPKKPM8VXSeR9otbD8aF7pThLYgAmm2czaamGwjpMKTPaZKSfKTuMCkqVoMNjSx",
  "key14": "3MM4HhrGMjbPZ4bq145ZD4tHQXufEvZHeQS1sJHTm1pH4BdneQD7AtFKVejB8io6t5EJ85EnP3t1U9tuQFKnUCng",
  "key15": "5tHeG3kN3ZvNjoetAVJNPXS77ACgV1GFMqSe4BxjTbuucuwyffopLqayy2N58xrKAYrAYwEmprNW295MraeEGyCB",
  "key16": "2gCUXJQcrKqAu5WvfAdfaoHJz1UyLzdp7ro4VPQdChtPyhgwMfy4He35hGJst9WXvzYdzDVkBtVbaRSitai3KaLo",
  "key17": "49n89rLPxoCmY58BZNqU42c2NoDegekk9upd7z7VPQwAzPXzGQ4mt2apuhuqYLndQ3vSBQERgTs1DXpceSPSveDZ",
  "key18": "62EXeDhvx8zsnHdpmju1mEca9u8dLLFNX24pG3MQ3QCwmqnXxNA6MEGAwMAzdhPB2AsDnyZBvEzhZFro4UvxkEdn",
  "key19": "4gJoRyP5ajboAS1jfRjeZEsddWPcgWLXVyNAh1WqtZSDJbbwvARDRyALaZ5vXvQiBX49qeGwF2yfvY7Bo3vgELsj",
  "key20": "5nNUrwyq3cQBCrbKQ9UaebH8zh71cFzeAv5kWCJ7FktX1ocKUuQWXukNH4yvi8WomxS97Gsr8P171X6Cdpk6oQUc",
  "key21": "5NVUQFsED5MjEWDLUxF7s6FpwAzRymw7Jzi33kzD2j7N536zqEp2YHYWEeC5RdPqRoVmTABKKhgp1XjKLJ1EEUYT",
  "key22": "2yfHVWwFTNcZucmAMdW18b1ANzLkkKWWwfvet67aAafRErt55EShcSkCrBBE2JZXKgoLua7973SH5wWanrZN7tCL",
  "key23": "h7mArtg1wyWBLf3er9PgGmrztEtETFWEyLDBfhDXrfCHw23WLrAMSD6iLNJmPteLnkpHqEWivcV5T6c9bSA1xjT",
  "key24": "5YcFgEajLm7ygFVUTCAcSFmpCiWz9bp3ZchAmUx39M4CfUr172SFxphfLVzCewuRCBmRZFV142AeHXMDsrMyvMm4",
  "key25": "YqUnEDEThEQmXSN6thvBTxz6vGpreKwEmdK9XNyidRi7yK8seR4738FVE9uYfhMaits5NtnrtVZzRKGo4AGpF9v",
  "key26": "3KPrqbVvwDJCnmTqN87X8S92fvDP4mMYrfYfL1qnqiVquwqN6B8Hu4sELkJBX7UdxskciSoHW6dS3brUYWoBUnVn",
  "key27": "3cSmpJgu2wTvdicb7Th34dzDd3gR4BND3gXHUcGkTVzy5UQZbWQVhGBkbfNCTvE2ZGsG4qvvLrP2LzmZNF1UD62P",
  "key28": "2wXQp5oDdupErJGYs7r3joQHrqryfkcYcgF1SVs2MqujB458AjmwtC1NwtGq2xMZAozdnGHVC8Xcwzs3S55QCgh",
  "key29": "2wcXWUwptpiY79nPJMPcEmHRiW3Wx5UNQrgND5a6JQXdQouboj4jjGcWGaRXQqnrN5K1pqbPDeZ9TLR9GiUAqAvB",
  "key30": "2p1aaZWpcATkRJTBhrLM4gNog7GvjkPT7oLjsthBzbrhEUw3t6GZWqTeW16wHbtUqhP8xJKpSVZieFJtcfoiu74U",
  "key31": "8kZJT1efXr939dY7TYiQpbXb92s7x651NCoPGRmkYvWVLVMHPeUTjdZxxnCn3SUemNj9S5uYKDz349k831cgPTm",
  "key32": "45XRrJMbyVAJzYAouxfmorihQSSJoKkQgNN5hu2vdCSmC8AnYhTzE42eA4Ej2tvxRqbFJaGKx2A1F8knMdvTQtea",
  "key33": "JS9MD8dwkhDBuFw7HKPhwmMWPEj1NoQkSTDHr1nS7zJNy4mL798dokPLyC9qhpmrRDEuskVXZEachKzmVhiYxbZ",
  "key34": "5wSo2bqET53FHccwcLqNs6hXzWVgNrSBMPeXEASfe61TBB81NeioyrQHQjZgn7QTjj1Ks2Su2AHdV5mfw3doBCsw",
  "key35": "4vPPdsvPBNJAjnHKDoMVLUR5uhqipKW6AA5GfiScn3oGaAT3tBiJpYQXkgqLBLgLZ46LfK2e48eNaCQif1N82bEh",
  "key36": "5fyrmWDpVzuJ15HPkzvrWckqeokRGyW1A4rivP6bRFpDUaESYsPo9DsMBVftNsY15J9KM3HXhXJ7kntBe5sLMjif",
  "key37": "TCEkLjVfu5BnRPhUY9e2z2eBsspRtsURmHaKyeJ5Hob6a5bXJmBp9ZiyeHNkM99YTp7a5aR5vMX3M7cmWXVYf8T"
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
