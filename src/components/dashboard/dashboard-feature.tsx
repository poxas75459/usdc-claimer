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
    "3nNJynbGpsYo3UXukUb3U11UfZqbZUaH8LDN6ss8efphZXwZhk6zsv6j6iQh74YNeVz6YBRh3S4PHTg6X2weP33B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p9ZYg3ujLfV9vhVTqU9kdN7pdRMUCmJ9uUy1kL7joAYyAgTRKcqVTeEgPhFmfEDPavLKgWhn52JUgKbe8u56pie",
  "key1": "4r7ZALnyxnEvkSyZAqGT1e5h5Rz7oPQ9B6hEVgc1WG75XU4diofdvgfyABrbT8K5gUbPF6i89fndDhKEmf5rq7iQ",
  "key2": "3pbTewi8XQBQnw2hbbbjBb933aQFPXkxKpDoUhP5Ud61azeebSBkiE6XzccphhGR2VWXghNXmRyTFTJveFinpvbV",
  "key3": "3pS8Yxkx8rv6aYugZVQuZb853xGiF4WnZfkWqxYXcxmJ6wUtcmJ8ZuUsXHFpNHnhL7mDaMMndwZvqkE4iSi8Mqra",
  "key4": "3uWsX8vWJH1NGkbUR42mb5766Jn54hFBSCtYkcDeGKUMktqHpVQWLaveXeCgPHJyhebmSzeVrVsAdXm5Dtk6SpSy",
  "key5": "5NwH3CwKzYNBLomW2vCa7sSzZXw4XEtW4ttCBQS75JzpJCi1J5gnMrdGAUqQWPvZepJkLiqRu64WvAt8hkiB4csY",
  "key6": "4c3QtdVRb4xjrTdaAM1MYesXUmpLG1Db2rbMdQuJ7XujkQ44QA9ixBzz57xX4EQKqXrN6wbnKjBXwNSzpVNLzpC4",
  "key7": "4bMYWGc56tjwGyvPfvvWmLmuDxMmts85N34TavR57v1XonDkeSyQPeL47LTrzn7rQ5xcJJJrFzQxy6qwSHAqRPXp",
  "key8": "52GSxD5akdgzSUjzdZYtZqRrW9CofzxEZDRRftKRAF5gvzGaNCDeKRZmbGiVnHWRvywmdkLaAPhXrVe49GZLFvo",
  "key9": "NvzGGmM2iSbLT3ovy1x34nXCZP926diC4RvRa6SLfQrnFCKfTc7FmsEokmmkMCq1yMHqEv2b6EYuUnDKxyTz66U",
  "key10": "vsN9YYDqsXE8nqcwuexE5i3QPDkwT5aG6CiL7Gkapdspgcdqb9bj6ivxmM4AWhg8T6UCF1ErGBycQWVUBGNyhu9",
  "key11": "4CaKcqRDZyMZYxjREi6z6kKY7eor8K7aNCRdiWjncjVv4efhGcFUEjkP1PjxWfN77zuttxU3RpNLd3GyhoSDi68",
  "key12": "4JdiPBDZzhVXy7SLz67VsaxZqS2jsuPSrCGAeP7jfXMrjcbBSrjkgwZZhagp4VwiCpSUzXaBkxDQccmKhkMjn69R",
  "key13": "fxuGXwbEepXJQxKq3rtdfbrt1DVLc7CUTDif7cfppkf9ioTUA8xYf5ZUvQuX6BGYxPwwxmTCpFitqLd4y6QV7VC",
  "key14": "4yzn3R2YpC1FR6MTzBfFWCdLPZ3G39ujv7gBYX1wJF6kpvhj1CiYsxYkW6UCwfRA3MwbUhJXf1wxqH8UiMwaLu7c",
  "key15": "4Tt5Mo4qPQPkkd4gMCPDnu85hChAhySeF8GBZ9nVeiWspZ4Cvqu3Bs4BkiExTPhfk5dXnucJUqXEJ1NokMZ1HBrm",
  "key16": "5dTMLJDUah636c1KzvxnAhgG4hHorisdWdsrW2dqHznZCUcjCLKzBAVZkyjH9NMzVsG6oJJH99V1qmjJbXxv3Ck4",
  "key17": "2pRFFc2iQfFMLoz9XYfA9Wm3VXyxv7VrkZaD9mbgEVcrMcfV1g3agbgekrcp9Hio45n8MNnmnX13GsEpxYiDjDGU",
  "key18": "EAxBGeKzM3yxRXvzKJ3ES8sMKv63hczaa3wRb3FP4bm9UhYsQboxozKHFzUZ8CkDAg8EWvxYjRxrNcBH1F7v9vN",
  "key19": "3ULDPqnbfi4M1KJNk7RHwguHCwokXusizjYq6D8YPE5eKpyDSy8QZkHVBNqd3Lrzgfb1k4hSc5d4fWG4MxF1jME3",
  "key20": "5hbpgaiYz4tWaG697DSyRgHGEhWEgM3cRNSsw9ZYUoDSftGrTYt9KVt28Z2wUYkHuao4ghCZuwCDTgkkRaumHP6b",
  "key21": "3ddTXtcat2hakyJR8zd5qPCBM28ytX4g8ZZK76DNhNGzFyjDnWoSCn3FiNSo3m69DMUJtRkCZp6wJ1oRKcyB1mQi",
  "key22": "4LxUrNGrYeJwHFPqEjt9F1453ki41xGP4CvTJY21cjYd41DwCYRWkHbyw5uWuMwWy9vwnPbRnfRnTUDzd8n4Teur",
  "key23": "53dho2nnGBfc2ATCG34Cc1b9PJq25siKUqdxhNDKWko5UyL59AnZ2Q852XHfQGShzuG1XE5qGNkrhRZb9mwXZnax",
  "key24": "3KBcDMmgKFsgwwaL7CUcRsC1cKTiLYmh31qu59TVW4tA14huQQnuWRicpEs51tSWABjYwxoDZTwHXPwKZ7HZkrg7",
  "key25": "3TgomKbEz35M5CqxkfBTA1wRXeut3m4zB8fCpgmrFnt7jfrs6pbUxmCN4EX14KWrAe1HBXtCs8N7K1jXnWfYzU9",
  "key26": "4V1jAwYuxSH7ea6axGKfxX5CScehYSGfJ8BFAHYRaXkrDLMhAfGCGtfihE79kx7Z5TS5nn2CnoQGPVox564rWkSq",
  "key27": "2VWJwvZn6PeDtDTcBgTcv7HAsYSJgB9FeADgyb4TWGe4Go9eTSEGR56LikYCcpCd2xgpHTcBkVjA53ZcZ9FWJ57Z",
  "key28": "5whmzWXMRz2gjvCDvpLiXkdBYC3hJcseJQe7xJ474CFFo6iamHGXQRNtvKyZLuoZTQ7ds3eVRBkaaGQDoZEXjpEk",
  "key29": "2XwD72TorHje2dEymJJrSReP1p62XZXpUJXJhoSb7AaWWmvFwQtu7zQ3KUBzpTknPrvdMCckfnWsk2iHaak3j2h3",
  "key30": "58PcMgbbpnhCnmGYhg85sE3fqPEUTeZ4u5fhBdaNpafePtTMVkMscqRyhHoEEnknXwAZtDH9WJkQAivFwqN8N5NS",
  "key31": "2T9TZPXUTYEDUYsm5Vgq8xQRoazBhcragZzz89KeFvuXfJfeLhL87Wkh5G9jQiSrjAXF4Fi9WNwkqJNvwnBroQXK",
  "key32": "4iKnyER8AahpGMfS29V19g9CegeVavwXPrQ2jmEUYjP6DKsBMd6zSsJoXe8MnvZp33eHVMou6CwC95sACTtibt3v",
  "key33": "48baXBN4qQ8VYcM7U7zRNafeUZtWfg86GG2SnuT3jZwgkPeYnJ7aKjroMtrebixRkBojPciZciWs9nKQwZeEDRbW",
  "key34": "Cr4cFCC66NoMsbHYQXT35ckC9cdKuRyEMh7kbgjp9zhCfNVBLCNsu7BEAvRTjCMan9gZg625z9Cejrs4qx6jP8D",
  "key35": "5vvNg4zVYG8tfn8fSwHafSibcKA4uJBxMenXencbksqYnFzurbFSC6TNdakSgUDjS2KUk3J99P4yUyEfUhYYeCCi",
  "key36": "2A36waC6gvHJ5Q7C94Le27956LwaspHYFp6SPmCYuPmBPsBwoHSW21pRTUEZ7pes6dxyWdJQmhrpGTTj56nmH3FG",
  "key37": "3AQ59V91XgGyCLzQCem32fSxFCgiTch9NXNa24DhpESYva7owq624bxfPAQETfGdoMoH3ANAgPzKTmtsELw7R7CG",
  "key38": "5AFhiRocLHia6SPbyvGgiwcvMg2VuPPVrFq1w47tmXmUqdBdukV2A3MjAki69xqXEeeB7uq6bt2AWr7yDtSsFBqu",
  "key39": "4MEHv5cHFtrdEMbTWLZ5AKzTg8qMYStngZKFdvQLrzMcEoPB6cYRo3UjzxfWh8x2C4kg1sQBAgxHojtURgP7AqSf",
  "key40": "28zqr3BizaNJiLkky8mUJNyp39urB4A5SutVxccqQUSeJojUwWrnAdd2cgdW1sRJoYmpg4bemmTKCYXG96JLCBHL",
  "key41": "2V5yHdSnZdL2T519MnCoK5YZMXZGkaiXThcfVsvcJ8KV3cPFeiqsYXAcuJwK7Ton47uVSC1Xt5MiLHt3NyQf993z",
  "key42": "Qr4Cdmv6GMUgHFAhCBNwpNKzMqvXtqKsPEZRXx1eTHVtGY347fX6BFYCJhhenRNCvq2XJ3QwJpAg1iFCdGXb7ZX",
  "key43": "Ww77m4MKy8XERX5ifxRQHYhqmCxWMx9rpWnk1YeqN3CCzoLdXyGh9UGrqBJaGKVgZi6yepmFEkmaCPpnvZcCT7V",
  "key44": "5RTUeFReWMJVMruMQC3NTWeSgHZX7rSnB6rJADvHntJmPh1m5cLdabGTMbgi7G4h48y4oXp113mLRRK13rexx5A5",
  "key45": "66vQAA35VNjmiYfvvSDdZG7B69NRq1BJn28jt9quQWyM4WMoHUxWBxR58Y16AZvvKTNPoNbufmQ1j8nqtyXfMH9P"
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
