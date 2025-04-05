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
    "9jUV9hriV8h2KBzz9EX1y1LAyC1gRKZPvdrtsefpTMtF93w54GhGUQZ1jxmrXzHaFuGJH5hn6eyVaGq7orr7f5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BLjRp2Peg2r7B8EjBZH6RLszCYsDRx9TgZEgvXWJpdVkh8sU9CBKnEfEUEzjrY5wCc5kVJkbdiYhHwud9ao2DkM",
  "key1": "cPDJMoamb44n1wob4enMhGs6ZpVh8JaWqApRhHTMhfLHCNsQqtNanq64GRJuHaJZhPWHEabYKCU82ZXx7ZTvEBn",
  "key2": "4WBpBSo4yyoLBmnzAGdo3TDDjtfJ7LkJWEP3bT2WvRgguguGK1j9EBzwbFfGynu8Ga3ZXZgLZeEHXccHi2XLCMS9",
  "key3": "3vnC8aM7aDQ1f9arvDaodoEFVS5ZN5CMh8ysqVuo2E8vAmFXCugGo8Zi2TjZFJApgX9vbMQ9ZujNfZM3Eu8fbcgp",
  "key4": "2mDZZJiVGVTtNBKMZcdxKL3gj4tHvvp17hvpdQx2fbMAWzqKtu4MR11uyK85H3ivLpcXDDBZoTbU1U3RGuiKasgB",
  "key5": "4De3y5EFHqao4z82X1VZ6MDpVCC6mcuXNZo2TAv9enrcMFqLupxxbKH79PMWhfm5RpnzKP6b5veV7tf7stZw1qxV",
  "key6": "Kmnj2VKXh1rZcxcCLatR5JVmdUa4vea3JWwHwPzkKCQcPvGeWnQnbwCFrvKgztMNR8f7vpVSUrEA5G3EUdKZbSL",
  "key7": "42oy8bXftSRunEcQHLKhCpscSNMJxEcctLZvi6pWQwhYk12JQAcX22S1GtpG6jcdUCSxwBd54WCGSNFfzTCN1beY",
  "key8": "2Nwvm7gY69Ar2tCSgZEgUQH4Dzntky3udKEczM8woUeYAKiEkfGco28Fjkc6B5XqvBmP5YeUic63xuCrGEZiZYgN",
  "key9": "4VQgnWvPSctVyiuyNkvUbPEnG13vtY8nYMwU1bYQCrsTDR6tj1GF6fFFaaX4eXbfrFp2e7DbBQZm4emxhcejfx3d",
  "key10": "2dzBWuy7SPQ5Ahk2vQiEckXx8ciKqDwXBG4rvR4JAyo3CrQaHAhadHLoQQghGuWzTcngmuRNTHDnCsctADzTY4HM",
  "key11": "4o3GTF1MNstw77nQAHjwqV69eJaJhwBqbNwqnLwN7ZE5EWFhp7vXs2Qb3DfHoLkt1PM26MrQnjrNhcFsbGbSRTcs",
  "key12": "iFnoDGbE9LUVHBXt826KzpTcNWvBWnkxze15MJL45rdjqCozVC42nwxj1ZwyGyMzoNVkV4nY7sLPSKBWpGfve5Z",
  "key13": "35jYzR66xJ4HhZTrNCqxmC7HsqDUd9BLndCuhfYMpRBe6Es11PZUtpLCioEpToggtFnNsxftYL4igd9wdN2k7g2a",
  "key14": "2iFGkiJaLfviVgK8LGMwaMVXttPMGqUqVk4rA3omi29jeMBZk3qhCWg7wACmMJuxNwbSX3zQaLiTAPLVr2A3Gpfk",
  "key15": "4domwseD15UeXiNfosoHuRT2KBYAfUCFqZtAv4DewNRhWT85K9ZHTWvpCAf2tNTrpSs7Z7oGCbEeuhQYvg2Cc71A",
  "key16": "3TadAJ32yynTiE4zAKY1y6ESxECmQA2TNJwgUNEbZaYgwpB6akkpBSXqEgt9ULckahJrTcw6oCmj9qbwYqD5tXsJ",
  "key17": "2jghauDdaed1n3BCgnzUWbVPzyi9irzgdpkyP9GWaiy521QzMUqpaTUeA6PLbwvnYbQdCAZvqp6sKqeFXxgfA3jN",
  "key18": "2Unay5dEwfUtz9CHK4FwXo2PS9JG9jxQWsVzTrQEmi5AwKHAh4rkCs9Vwq6BZZ8jTyCVbwSK8e1WxeRimmLM1NJs",
  "key19": "3dbqhous2ohtt3N86JRA1kVPYekGrVGd368c2hQppNvErDkM7WyTf6DAqPvdFLUqzz1fvaq9pur9BQhzUJQehZXd",
  "key20": "4oH6Zgfx4bT3ysT59CJtWNRCohEau9C5LbEjaUQDVKiHyJ4TTTbr6Lfkqyx5RCfXpThodzCozg8Rg7MksTdEchJj",
  "key21": "533ifz8UGT5KhogAB5sxqNZ7iBa7HC2NfjhPgUoCgwQCXmzLShkqjoCfcCFurnouCTEV9KCig4i1DTftCktiR2vj",
  "key22": "4SHpfLXogFbmucHVTzCixM9iKUYh69Kx6jxSyx8ZcdeWxFyUwBiYnK8HpUk2SEHrj7JnVsa4WEN7X92qy5jaSrq",
  "key23": "pyX62bwTaLGfVraZwLjVb6DKcgnanRSB58PRUbiHyeQPoysoWwXsc6HthRHfszXHc3f3nFqjndB5ScH4GbMTnUH",
  "key24": "4Y691SUCV9a1dPGqGMnUU7itRYsN5A5wifcFKv7yePE8XgcdwawXBe2CKY7VczjjwyNy5Lrw4Rm5yC3dKTCT1d8c",
  "key25": "4gANqfGSXVFyVYjqHjcvdMdtkKuEVD7iJevdPCGqjn3rQxYTNbhSY1TFVBinRAGrrQcanibPGWc3MesNBfkqooYN",
  "key26": "4YVvf44z2jUHAgWVBe9tG8E4WAjKHMNrHjuHMxKdgSrYJGM7ecjyLBP3Vp5fTYxTzWw74iDjLkt2Fy8DTLZKjN78",
  "key27": "251dEBfRNAXAfqVh8hyf92BFp4DcTJCLfR4i5GYZzpCo5XzSTpBxcYimP97CNBhNaX4Ttj2qLn6pAUd4QG8mD3X7",
  "key28": "34tUckbyysca9r4dBydw8JurF5LqJCcwQSAXvu47QBbZ9KAnxbugLqegvTS6RKzBcj2TXZ9W1qYoozeMTfqWNVGd",
  "key29": "5kikd5Bagq4MhX3Lk1KSPAXaWJyoN2gmrRR6Sop7wjrwmJUSTeaTLyE9dkV4eyPe6fmSnYMsqm65QiQPjDfWQq8i",
  "key30": "3SX5nkVXBaRB1fM1ji4zDxwQSZTEw4RFSS1Fcz4zTKj6zGE4sCmAkohBqTYxKkuzqi5GytsjNJH39JMsnPdyw4u4",
  "key31": "3djC7CZVztP7mGwvxzmX2UB98kATevccCjTJT1daniVttjt763iXM3xWyVbnj3UuAdPXDPzSoLqsVrddTuyDYPth",
  "key32": "5veE7DYvBJsUFnmDF1B9BDcrkSbvoJzVPfNgDE2NJe7yHYmR8q6HL7WbKLwf4xasXUJ1zgkRTxQ9MWMkirzFsChH",
  "key33": "2Z7jnfx64ghNEsQcusWQyixBbiW5tW8gcA9ZmtmwTaNNjeuoPutv2wPcdMa5hHBMHiAZfcyxdCoHVP1TPtKvWXbB",
  "key34": "4vf6bpLbtMdNsfQvunRj3VvG4cTkCfnju9DkiMTwWP4MBzFvg8KPUyL3AccTjHNCvN1aoGoKdp6naNF3rUeiDc3W",
  "key35": "45JVyjuC3P8JWZkFSWyoX1umj5cB41gx9R1YjsmwksfTeg8gLMCtBZtexvEfccihHvJWEXGkAeffCoYLTic1rjkx",
  "key36": "5E9zuRtyE3EUMnhxQvqj7FU7bBYNPBr8bgg6iNyriShsPSY4HrpLNgkgsCuDJABBxJmEYNxkyoSEiNEE3PUeQmy4",
  "key37": "2em3nVPNE34UncgiLwvhjst5H76an7NuKt96dykjy1zuNPBR8rWkg4LdvHeWWRwTLB7eXe2kVcdXLTX5RAw6Dpa4",
  "key38": "V7ewfprQvPmaPELwRovz4YXHY6gtsxDXovV4Tq9rKf9yygUkFe4HETXCFmsqpM2XyEKqiuS67kHwW1UoGZpqp6t",
  "key39": "3dUFKN9tw19oufNLfkHNbg5M11rkDLhjJZGpfndaw5Phd7rX2E2SWt6w4S9X5QpRkfLAguor1kqQd96SJAzKooJV",
  "key40": "5mv1uS4ZS56YBvZDSynbBwCwzLQnNnuDCZLUmkaAbUnvcTGSe6Gmcnjma5DJuYhDjHLLHPzVdu8gPJHEscC7fjLg",
  "key41": "3YEpTPwDQ7gVYzTGqjE1kc83P6Q2N5yGJ1kPbKG4xMgvgt9tD9xZEmSMYMpnYhnVSnqGGmFdQi9SAbrKWpdrTq3J"
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
