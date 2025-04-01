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
    "4C98RpGWYSHXtNxvbq5yoQqvhzLoP3Pms6mqHEcAchwRHJMMDWMFyqYPf5w6mPN56A2CGgWp6SqWt5Zp2N8BBCVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25YcDDg82wmBx1mdVTmLWjMRKEMS1vMpxRqueK9eetJ4oQeB2WVZQhpdZQzYKjJxi7RDxYikrf8dwX7xZ2ptqRkx",
  "key1": "47BSoiEkJb6nCqxRTE2DtJLhXqUsfLjjbwn5vEXAhUqMLCwVL41BshQ8ZfU7XPbkigfau9tfPDHQc3ntRpqoED7v",
  "key2": "3agxjmbhhWjMcWtgSsLZwtizdj5JDdQh23nxpCgsHXexDNUu6zkuFWASEyQhhLbARiDeMussh8TBdYraiMJ5tC4Q",
  "key3": "Enim2aX58XUXeQ2Ro299ytswgiYUvjeZoQMPWA7iwNSnZgSPVUcmsdNb4s4CezCuRwyfHA8k3DaKd2uRGf6gP2v",
  "key4": "61BKMGMPm8VrLbLpTWd7ZuEVscreD7vE7QXYGUdDJuF3aYULXo2PKzAhKy5388m3VJZEqPLe6xXGaoVoZQnfzy9w",
  "key5": "2LmCkwRrFazGhUG79YrPKPaQySDEDC8BFQYCFt5JCVWx8L7bUfBk1zmYs41wpAVxH6yZg3E2yQGMiB31Mnjau11Q",
  "key6": "2wZMupkYHWhRgqYQzSDnecFLNnfCdhhGozpxB6p2VuknXWxtJXXhtsdbgkm2b89BpMwqxpsRg1uE3iKvGiRQmDgq",
  "key7": "XVCSbBdPuodqcPkVNWTfgXxfCC9NJeQ1SLkr4igLgzuyDeAG8pKaCmuJV6MHYWUe16xBStFpnQHtPs9v68TweyF",
  "key8": "cWMbgvdE82dMeuG9wMBhtgJSXTatybR14wK3ePCUnWgNmGhyKWTk1dc2ZaEftxYhP585TxYixmG7CtpC2F34F8K",
  "key9": "4uyzL4NS3Y75VFssSNkXX8PQox8JzuSikXD9SDBWQPZaqWr4u3JmTJpve6hoyHBMRZg5TkWVAYdPZZSJejMABjhX",
  "key10": "3b6KxHqW2qyeEB9mrXpYrQHSuaW6c4NWeXYEvwDQbToMqzDWF52BVxChtrdPLYTGrSZeEceFJe2L2DQi2oT83E32",
  "key11": "bk34Jrg7nJkz5b8CzqLakutwFd3hKdjfSDDGiCZnnBpawiEF3vuahPiEs4ACHvd4oTJgfkPopSELhMbcWKPgVuC",
  "key12": "49DT6Rd4fkve5fQUdQcob1VYYshTP1bfa9ZfLwgbywx7magnXD3n4TR8EmBCotT3aUWFbQdwRtTzUBiaGKTzJht7",
  "key13": "5XE9FiSkfPZ9C2XG5oXgb8VyX2ZEmoyW1VJE7pEWiM1taJp3zp5qnZ2cFkVSya1Kbo9HMvpfrNt1ikGTHzZJuFWd",
  "key14": "2744cwNSpSAemP5JDoSBSAwopbEhuJpoJBxDKbJrXdp7QJ6QpU2Hr2NRv2jW83VZRW5DaJidEP8cUZQpGVaimfTA",
  "key15": "2Yzvjp1QNpfUGxn7VhoxHi6HYD23zGstJkzT9VeXfq7FX6LMLSF82wQZH7oHw26v5Lxaysm2J2wEPjXbguceTv3G",
  "key16": "4GbPfrP7bzpFyEX6i7S4mh5Mk5wdZmdM3ZrmYFynNKLMyu2vCjn4Xv8Pk1mN9KmAh1tNGiCx3JitnFiVgVopt1rE",
  "key17": "5hfcuuuFt685tJqGG6rJx4ctFAKkwCEHtrpMR2NbGADLDyKzugPDb1Yd5xdThZimDWnPRnELq9URT5mP9Ei1ydSZ",
  "key18": "3vBhjH7tX6yJ8V27VTgt3NDVCMwrSwJvePVBBRaC3kk3R4nd9meXHuuCQ4akJoR1ouTUiARdE8nTsnhfaedbY71D",
  "key19": "23e3SpbDkJu8NyL2hHRDUwwG3uSMvBbFaYZdLSCcHb2ByUn9Hci3e3vw89dYtaW32mKdc8qxUA83HdzF7KSdygzz",
  "key20": "3Y5FTArCLEC8CjkP1DkmThXkWgf62fAMq7r3DEte4gztCxdfiqHP9ABLiY7kgoxgeSxsQwd3LcBjbJicsUnmdmZC",
  "key21": "2wSBS4pzBpnqZhTapoF1qoZp44HdTRFcND7QFCai9GCWCXFwFGjpqJUZ7RE4vno3J2XXwirwU9HABHSuWvLB4N8L",
  "key22": "YsjKqz9PyBbRmYxgSR3KdbLqZmzK5V7D6MxtkGm6kxKs29atg6vBb6qiaCVZF6NYCFQCDGJqff24zcqF4XQh7T2",
  "key23": "5xefMNGz6W9ca4vrAfCNMzRZSjXm7zZafC3NndrLhLXkLreaGiQuVoYQ8yNvp5zYoqLMaprGhQ5PVFEHegXrr2D7",
  "key24": "7aQrRPKgxqGc74rY29ZyUsB3EihyMNEB4VfaR12FukZop7ro5ho4jLZKGvYDNMMTU7k62QSHsy3xVHvBuQsE2HG",
  "key25": "4RKvwyuwNPrMJv5YVjDfeQZCR3AC95T9GfxfCu1rAeoah4MJH1esp67ziu5hx6H33A97n77xfFAQDx6ktqzJQv8q",
  "key26": "4djJK5s4dbW8ZhyLK7NJVtKVQTgjUK2JJd8QRbp7kDDMGp7hVZsscoiYprsjXifi7NzR2iNaZZkk9omtdtNwDDGu",
  "key27": "5e28mEWvfevLC27uSYLZg3Yf7jmmJgha4vJkK1QjR7rXBZ7g9PyNWHRp6w7oY24F2wxLKj8jPLiAzKY9VmLpoh8x",
  "key28": "3AzqUMpm7WVqneWByNRN498tLs62Tyyn6UqenkCU45ZxJz4CQhfpu53A7Hzm9eNqRLYQmcfwuzKsjSBLnjHTxiYd",
  "key29": "3wZhfBRPKKEyvBPXSeZwbZYQSqL4LiQYMtrBATeS7yF7Kio7aaVjyjdQ9A3ZbNMx22y1b5T2RcifxncnFef76GAZ",
  "key30": "9X1hJV9U9rD9dssN5pnBNicNnR8ejMpQq19bnNaYYz936HgaedNAhNyjwMdv9yBnNG4FmN7v1srwNWRWxncEVBk",
  "key31": "5bna9ZQhBiWHB2sk1R5X96Eg3RMixKxcAA9DyVvxhwbDmVm3s1prKfLB1wnvFmiGC5w14hyhpSVTEGnKp8bGU5cJ",
  "key32": "hVdJaqYRRkZcS1ajSZD2bQZ7t7r1NfhxgCe2BdCoh9UAqiwZceKXV1bwobVAHNxuM89X3aVyxq8CNEzVMgXYAEf",
  "key33": "3fXv3Qb948grxLo59ttdV4TdMpKdZ5vHdwewsSmxf6PYWf9s5FB1wcmrUcqedEB3DpFzb6AkHAMQoYtNXmHhjkQQ",
  "key34": "4GJB9hdKMgH7PF3wAYnzw7xYqr79HNHzz9de43kEnWYewa2PMVrWowZQaqztkmUEUhD9Zmz3gzrCp4R17NHGm44p",
  "key35": "4H1wtgwMkueqVZhSU48MwmkGJ6eeGZgGufcUP3ihWZrY35zZh1GEijURi9Vs6nqiMfP7hCHQnyCe1gHCsDbiJ4nx",
  "key36": "4K8veRi2aMsEHu32tkeMDtktqJyvRDDzEjE4tcoX44zvAWpk51yUD7fNgPBuH7WZCVCPbDaPZMrD25Wcy89ZX5Hi",
  "key37": "Cq7b11n5RYqxn9XkutifqQ6YUJcguSkivDTQquyZPhutBqbYXVGH8D1uoJzejNmCVmuav9J4ojD1cAVmK3HUw3u",
  "key38": "2td13VZN7fQs5S6vCg1HXgbsaUqQ3w1TUiptyvCtLJSKHatpT8m7477q3qNbtuW6FP1mpGGLCBqhGDi8ynPRknKJ",
  "key39": "oMCUeFVB5eyPHKwMfUAZv7abevAesZktH88DjTb1KWayDA29C7nyRSo5xi2pRZP3biY2Eh9qhE8yeXAcWNhFLoX",
  "key40": "5erBKsoJzb1R7F347X9gXbJ74U4nvjpuDeRLNdq5uqFrLZx15BXjhCSEtUwN2tmdJ11F3KEYa35rWorm9hrHqXb1",
  "key41": "3ZaitgnqgXSxWfABEk7McpzPoZwD1i468au1FaVrZJWtVAwvu5ZZSbU5ePyjNc3rvtCNN31HQof3oCnYwXSUVSCj",
  "key42": "oTgRUkVfjuJ5XFTroTKy671ZKZJw2q9prTEeWKirPjHoDvK5XG5dxtP1aYxf9hhb7i8BmcqE2e71BMUue2wbein",
  "key43": "3fJKRsUb4eFFBh1NRLAA478BXE3xh7xSVLwxb3ZTmZYhwf8LRt8YD115UME8CFWDP6j6CSzs7Kbgh6ZwFq8r9qMs",
  "key44": "3zg8WQUQyeXoQxAKm97WDgTcWnD4L8YABt3W8iSC8AntMoTcmthiq4hSEhTKJAjNX2xQfvdtMLifMPKYfcNaBDZH",
  "key45": "4HaEXsgeogRmNnsmMByU8bjjtjYLvYNMDXLHymYAVjeuJMs9DE6mV1B6x1tW45yiLB7WepKuaN7r8KhbmGAveuKo",
  "key46": "2JVGsg42aaeYDxKFuV1EVDFdn8HTQJS6RHCToXmBTYzBWfu1dBKQKbLVNUyNn6fJducwUAGJZFNtGw9dL4dgC26z",
  "key47": "4jcWe9AhndzGZ3K1ieKTxyeFVW2pucs4XMsaCWsmuZPjUrGPf7Q5TugHn8G8dfPmGHjkoxyn9jrb64DuqG1YEDgs",
  "key48": "4JoLWLRnob41aRBdsd42N9hhEbZJHNrVbWUguQT5XCRpY5Zho8sPkjxDGHsT6n2xZK9dy95caMgQVL22ut9uh1ba",
  "key49": "51hFQGM4pUGTmuDd7cA3NY3hdgFaSVbA3vTFT3HWtdza1uR3VLaqm2hF88jEgitZkETX5t7g27W7vVVTxC3rVrab"
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
