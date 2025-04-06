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
    "5BqeDipPMwS19fxWJv1CbfA3DhDMsqx1McNHci2CZ6V4Bb52V97ZH8SNqAfkm7wRSd7mhxtUKYXY9ids8vsc69Uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5214gdeVsth4fJ7moVxzfX3rGttRzAdcJXERZiXgEPaeBo4LeWac5uqgzEm5rVYXA1SCJWcHRqeBHb5RQQRdSg6E",
  "key1": "5qwqEoNToR5cNodYNf4KKyT3UwijiSoxKcm7u5LEXLX2z9idhgBXNDrS7wabZ1GXdUPR6Aq3xAVGgKfXj7d2WQBf",
  "key2": "3XUWKxrRxVSjRErYx1te2yECSXFTz9vb2MhMc8nVBf5ivwkCeXBeJVqHevgKuFK8YKzfN5rt9M9AUFtuJoczEW3u",
  "key3": "2mCCXm3rymrxHSoeBQyo4vDNASas9o7Six1MwdDNBcZ48xzJWCnVSKuaw8gXKwMSaxLWaDDNDqjX4uPe5z2nMMDg",
  "key4": "aeAoUrGQZnikasgFchsYm3AN3VukazqDKQyqjqzrxHTCPL1J13GojGEYqvyWQCXfYz1NLLyVEkrVz6mwpuqaYkQ",
  "key5": "3QagP2rzLjDQsh6fUkTw5y8f3mFfkaM7Za81SzwFrdEzbZq3fAysSAjF9dqtB7PffDaNiJX9182GzSqckuWR2Mix",
  "key6": "2yrG6PiSo1oCsxK6TBgqbnXRzo5Z5xdZdsZfQA82ESHRCXGukQGsZvtoh1x8cEmPJdiZXC9ZB3knN3H2KLq79uUK",
  "key7": "48pnLPvDmohSABsifqb77eKsXvGMjTDbBAuq8qnbi5TFChGw81ui9fxfSixuEpzs6ouhvjq2hub72ZcvsRmifLDw",
  "key8": "2Vckmsg8mWmLA5HyetfDt2T44QKaqBiWjyTnLaEWr1UeBoA8HYRFdJ6AxUgKBRpFjyQm2zX4LQhhwWwZjPEDq5Th",
  "key9": "599W2QFtM74JzpcGtSthT51MtfY9qRGR1691uxVPaS5XyVpvQtzhi4icpUfPf2xuRd5EUQZ7BdtaFZCNFfMex62e",
  "key10": "5xK4xPVH6qGKsys3z1FiTx9ginTdErH3JHgQjCnVzjGBjuGZwRehYDTKAhqL4tbjsWGXpZSEBaDPrN1Nsbe2fkpH",
  "key11": "5be2A43q23wp1ZtjVgqzX8oYsztpdcBTHaHgLqyA3e7y6pddUvUTXMWTDkoqKQ9HhvKrAk5qgGLSUWCZ8LZzEvTo",
  "key12": "FpM16rfxM8FzuM3sfNZNe4SbHxLLJq113LtHAp2ZkgLCwakLZqVqrcJavBwG5CnfTF3du5jVZnLAjhzmnwZH62p",
  "key13": "4i5bchkUR5zYNz6ftydkkTv2fbQFYwqofc49EfmgjtMFU2FoTsxT5Yj54HutPgFA4mMAXW9rPCSks3WKZXcsVisq",
  "key14": "3HdmpFQtoiQJXVzMyoYmTtr3iMEMR2mGnARXDm9b8AQJmty8QNCmfmu1kDo4y4YNPahqUeFBoaJrNuqYndsaKgTs",
  "key15": "2T4WmpqVgqoN57LfDMXYQc3ipE61dmhBPQQRkz2fQzd8NT5FWYTjbkA9pJR3bnQTwZbp7PxC599VVgSp6kQs1Drq",
  "key16": "5CMzLFfsCLvhC5bn18uReMbi9vMsSkihajCrKYjiaDam4p1DK1PBn85wWpBdxXuJuXxKByxvKQ5x1cFvbjNLZGBz",
  "key17": "3xyRANdCRE2MP6ktWQRk2joVyzDBcBsdETo7WdQoF7Ze2htE7v4abAFNfhiUyKitU8NABsrqjYCVXUCyHcKuDmBV",
  "key18": "21w28xANkgh19U6JAhFUvHq3KseckhxDrYpU4aRuFGGb7GCgGNXUkna4enzfJDffpWTD2Xmwg2sZkTyvggSdaqCz",
  "key19": "2rgY2GfbVWioya8hY47qpJuDZdCsWV3e44inM4rzn1kw8RcFPAhUXa8DVJhWJFB4W1hHXKgZsrhbW1oWdd8PrBzk",
  "key20": "2ZKXSx3aqmTTY9hVxD2TV7WmW3J9zCEkg1rRjVRHTwcsMEwRAk9ivVAEwKqGZWQ6pWq1NRnSn7oCFKPTNnjcADfx",
  "key21": "4TB9mktUqNqsmGe9MVQYW7mBeUuaWyGZuzpnpZyuLnEJv4qSYfdaVgonsgEJs7RRkMTRbEsZFkWmNg6CFzG4kQT5",
  "key22": "MuieiFfapFe5nWnhJdnXDi4g8GWU5vFn6smYAJ6TcFTqGchzq1kDbpjUMvnvhoR8hRzQsPPDyWzv2muZwhNvRsN",
  "key23": "5LFG6647cySANzTvmab95skmB7sjsYCYMYu26EAyLnAd4oUoJhq2FV9nTfjVoFJWk8Wmsj7n32wKfT3izxaqZNKA",
  "key24": "3QDAQnt4YyEkbDFzhpsrNBKUbNKB6UCuh55zk8Fw86eZMySqLeyBdWkP3jdbxjQYfr7RCZiYwv3YomhZVFJa8tND",
  "key25": "29MAMkTXNbHwaFqVXAYXAekUKoECnN4rirhqUytzfF34TvWkN5qmL8gpkMYHb1gbgNjxptGcakcHsGPchGerFjwf",
  "key26": "3mxQoXXtfoBAX78HZJygon3PFa79bYc8YU3gACwjf8fYCDRUicPPNKyF3Czt5EKYwjrt5eQQYkBR1aTNyZ1xhCn6",
  "key27": "3wd3qff1SnDJUdH22hnoqaoTsj5xAeX9R6P5J34kJ5sMQQzB7J8A2ET61FR7zEasDoTiGzdCTW5wmkGtQrt2fw2P",
  "key28": "5jHt9XRKYjU5rCMKHcdpwXafjUBHiaeJkySjQmgfRtQynrhGZMY1L6DHazcz3TQwdVvyJs13cxJR8ghyaR9Qcg9V",
  "key29": "3QiCr5b54MYZwMmRS7KRL2EKAPETFU7XH29G2TWgvG5pjFGS6hUSzckmtCTuxbENx8MoHbM9bAdpsZw3iL6mhpRa",
  "key30": "4fi3PussunUDT9Ly5LACVfD7asYoq2oZDBJKg2yACeDTKD5R4zxbv8dkNJeTuApst3wt1w18ah2RmNB4SkGaWhac",
  "key31": "2vJgEwqwnN9bYCiaRitgrKo8C5Lj1MB8ANjCZfp4j1AUFu72eHotijHVMNZs9C7kAPJDhwMfWNob8oAT7YiYa8dx",
  "key32": "2aEHMxoQbq8bGHqzhPn6Pr4mZzCLhViJtZfpRnnzGdD9X3VmRFx9M9XjfWEhm7U2Apguy4AUcBpVgRub4TH9BMni",
  "key33": "58VaRuKphmWt1tWY4GCtRSZUVXbVzFZU3AGvJH3CHtxjVasTn7TLEEJr9eA1G6cCBBjQZHJKAawu71f7PZ45zK6P",
  "key34": "RkJVjzg2jNcofFENvMhcw3vDjQHKxupESABL2ah32RszRdkrP6rX7qMtv7kyYeUj6jCwLELU3bupQ8jTHW5X5eu",
  "key35": "3J23Edmgx11Yjawr3VEuRjvwn5sN1oqnndszUm3rtYj2TvUEH3AXuGApvNbxXBNwKtBwHaKmpH1C8txdv6ZHcSWH",
  "key36": "2UNzyH27x3HdhQmNNsqdDGYCPgQwtLm75FPrvn2raK8SspGQ7ggmer1XyqWuB6HuiKP9GuXctTHwWmproZgHtS6y",
  "key37": "5x6skrc61XkFBDytHj5smzcYNcTNvRkG3WdUPSYbpdwUoa9QsFHmRbrVQKugcQoheQMpPEafNyqzY9uyGeTBqPY9",
  "key38": "3vRt6JkiLgXzc9XDmcrJ5JcB9g3DimUsm6fQWiMgpAdtrmNJd9aQzGcLSstRPVm7FBvbBoxZxs4WtnUR1vwsnc3h",
  "key39": "32fMtJn4VEp7t3fBWjNDRSmFoTmZHs6C3dvvibKoFXYtJFyA4k1qfUPh4ykyV1tmjrUwGBuMmgNuNvN1VdNFwf5f",
  "key40": "2feUJV7bzH93jSiT637sCZU7qEUkFgtH8bFnEm4C4jbY48dLz8CL1VT4Qn3p3VbTRhWKt94mrmBppjM762jiYvuT"
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
