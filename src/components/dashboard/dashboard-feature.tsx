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
    "5XYB2iQzNQALCAt4MvzmtPS4qPJdbba82HbdCNPpoicvXw3WZ6gGr4kqobt3LngZKPAZt7njEB9P5wAzqEuWhZXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GV653V3gybBJFu9mseyg9HeZ55rYh37CBB2rFbgZHusfxsVcodPVRMtm719DUkAFLkmBLrARmdpR8bDJ67uexMG",
  "key1": "21AoKLqDdLdgosU9teTNVtR5SqACHRJ5pRfKyKRf6duRkDDKy2VWK15ytxBUB2Cwg72DEjjeEYjs9F4hzYiF5NPA",
  "key2": "5tu7U4fQkaiLGouJDH97UTUCJXbEXA4kqGkDBtiNrL3n6o5H3QsbpZWv14SX7zg8LDF8XZonqRoSN6aNuu1RQdVv",
  "key3": "8MPhszBRF1tAbG75xFqVHxaP5P8wxNtLtYSq9vknevZgHHg5zYfxqybtcMcqsJZSZ81grhb9MMy6EXdowVYnSD4",
  "key4": "AHtj4uL7w6U6LpZBRtLZCfPhkCeymS1hiMPLfX1m8EKCUJb2Z7qatqgYDtpQ1rkCTUHpfc4yP5d1gUV9ofbE2GG",
  "key5": "5NQKuKqpFU8Q5r3UcCNGZvsQopbrGnfpV61Jv4JccNkjZCEPAeKvpo8uCHwMtKJxtmemR1xSf7kbe4MGSdkFpjn",
  "key6": "1v17DkiSGGihVept4Cm8EerNTwcp7Nyzwsi3aHucFH6GSBhNKrVqQymA6BP7noutouYcm9v1yDoQJpig7Ag4Qw1",
  "key7": "3iqoEKn2oGC6HJzcSHPVXsPfNqJUCBz4Uq5ejzF1YvesH2gxBzqfEtdvGgTsgJR1zmN9vgzvEaVj1XdLrJoj6F8p",
  "key8": "4squnVZoZdgoUyvfhDD8AexK8y1p9FqiSWnWXxfLTHrS84H6Esy3hX25xsJeA3iujTEUPb4vCUtP9XW3HVcemsqd",
  "key9": "3wwNFAf9mkSN2t6jGJPUjP952GoQScmEhsyjBGrvE8k7mdnnbKNDMmBTTiqaovjxsNJkrrCFmfrWhSZeN6FBz2qr",
  "key10": "A1zNKbvkWn3BhnQ5LF1pGbp5d4mhWQqT2t4hynnWN1h3jJJSSVpRuBSA3rrCWxAPEUUrAuPkJ8A831dWymQWQXL",
  "key11": "2HfknxymT6QqcdtxzfxeAjyhzG2Jop1eGp6HRndDfp5KncxUJZDEbSynch7CNw5oEyoTvocS2ENq6VcmRkamnTtk",
  "key12": "5wiMxmSToP9wuAjEn7ZMMDgP48RZDZuYXUNJLPv7K9cZvjkBRPtgkEjr8p8SnjA2keeiZbBXZ7y2L1Rp1dUtJ2mQ",
  "key13": "JAiaMm8SDG4ryBsjZnCiQKgEgUTJRRFJDSfbzU7v7mJVucWj2oisr4KcwoLcVNecee7dtHeoFYbSAkYaeir7MJR",
  "key14": "2rdhT1hGiYUtAD9DCM18GD2CZXjSFAf2VYfhgr8GzZePJPBwuycGwigJrtGJtKFcrEsY6ZKhPhkxepK5LFWiZepZ",
  "key15": "5f9cR3y7mM9c6Eo1Z7gBr3noJ78ezZePEDdg4KuXRpwPUQXTS5bbYWMkGiYPy3hAdmqWgk3mtQ5dQ5wMoXNktaYd",
  "key16": "4HKncwPhz7QtCrwxdojRUWc2bJuqC9uzAHYoJaXpzahstXjvTr5r9GjWDbpW7WQkXmAnayUpKzaFEH7Qd89vtQnX",
  "key17": "4YEpvYr3See2ZiDxMwYuXiju5xrY5bqP3C76A2B2JBrTaR61Mx8P1uHv3cZ6Cd11UfBYWvJ74dfFTcLVqHmyd1Qw",
  "key18": "3G6Nw3g2GfsihnzWicM9SkfM9gXi6Z45tzGfybMN6ViXgWWBHddDq8T1Tr4GeZKhFfdUp1BpEknpJP4jDsSebnv9",
  "key19": "5Vz6hRRGioZ2QpqZ97TuY3z3qNxeQ6KJuhkwu3X57aSGhgVTF5W55yiy7wgLzr9oFfzrLj76zxZUubwrP9D9Xbdi",
  "key20": "UJdWQSj8CYKEf1C8p65E3m3DAWdAgxKFUC19QNBcfj1CvAY9QQe4L8ZCXZx22AnstSTAZY3YyoKagcnwTi2GfaK",
  "key21": "2wTK4MYYYuBgFxJb8fU1FjGrTzqZXqanhwa1rjvm9g7sZ6CK2m7h48DAfEGRMhJpKi2qfk7cYBvsD32EcJxJ4Xwp",
  "key22": "4UcpYAdgug9sBXFJpnN4uLt63LiZ83S2Bo5cojRGkCpKvvNFGk1VEW2TGKjCvU9fWHn2mbNMdv2Je3NpFzK8NjaF",
  "key23": "5ehW2SykosyRiYZpau5p4ach6hKa8dEWQbP3f4A9ReMjNnCfVNGPyNvYC1zRW15zMgRnRbFbEz6EekJCGSaJJCRG",
  "key24": "2y8nS2vyf87q1DE7Zhc3kGrifnQ1z5w8Knz83LBB6GRmjbah7PfnEY1xu5hXH9hzKGsoSihkDsrLEHhnjQDxj42i",
  "key25": "4iQc76Qi6V4qa2B8TGr3uV9LG9WfH2QDM3jzquaLzkHbXPErbZBSa1ypGCZoHbT14SGLqcHD6JyHExKYpcC7kifN",
  "key26": "6FphNoTXj57GXB4m48WoQFeVqDXxFc57c6yzHybC29c5Q37AsCAqcrRcfmzTijEeNC2SLB4fm6tQczzpnVXqQyw",
  "key27": "28YokgN5vLh81z4wmF6RxPTDrMghEstaT5JSTaxgWegKzH2FMVgnfLba2iWDqxLnHQPHwksTqCwutRbxJrojfD5e",
  "key28": "2Sk4pJfddx9sKhRjYQgVZB4hSyXe2WSv8p7V7TbApLsWofuTL9wCb8DvNiRFUhPvuc98bCKuaKc3AV3ZWsx1fn9w",
  "key29": "3MXxdPmXzWaUgRDnHE54GzpmPvgoYw98nFYusQ3xYJy4X89Aqq4vneqRuaQyqUivyHuUToYk6wd59EaPrvZbUPUG",
  "key30": "4gQb4ZSPhcC8YrmxcnYuW36ZYWFkG3AnXtqcRdyevYZVjnkBvAHBwQB1aTo2GS2y8ccFZgbW4bqByDiRvm2MAZwz",
  "key31": "5w2bKcnRckKajgCQEaNs5ojsXu8axr3Xf9txnYyifUDVjTngizbDRh6p8wvzuyvxsWQytfsk49wpYJ9J7Bvy3gyw",
  "key32": "34NgZ6LA3hYFFgA3qkxr7CbHBqFG5nirt7Par5ftTLiqg8pDouQktMFk1RGzeg26vX27sNLww6aG4kjic3rU2BkB",
  "key33": "59dd1tA2NfVYZWSm8FCHeVU7w7cfDJFvxBrHY8JgKwt7W1Xyv6aNqM5tks8YUNcNVpVbqhXggZX73o1wSccwF3nE",
  "key34": "8JkqnC4KSzFatRQr4v4i6uezE9Qi4sQSwJXaSY33ujLQxpUXT33g84ar9K83BamiZbEND7MD9HcaQ5JBVsjdpXt",
  "key35": "2hKVDYKYko5FpUnTer5sTPjzhdKtu4cu41zajPrcHZh7mJpD6SM7PSkeieTdDd2dTx2wNLjWRUn2BtFXeEvTiSo1",
  "key36": "5ohg6VtkXXMBsSbppQLcgthKn7tqcgSftH3Rh7kVTqVtFcsSN7dekphoCPatEQK7gpBgbrFyHEipkkZz5kPHm9V4",
  "key37": "23fFMamSLGCFuzADg8RS6Adf3sJ4xuPovimYAadVkz1U3ZdEFPDnMB834NRQZyzqcWv38vKXpYtQcP8SxbDquZFD",
  "key38": "3iw9HyeqCnUq4K92uigktqSyFQtG5FLjsXWSJkpnVFJfHpm46ygaBFivMZdCHKXQdctATrrZZvV5mjoP92C8PdsP",
  "key39": "5S4FL7RKunV4sAk6iDcdJns5HfDDrxkhWZjmNHtanciTeMdAPLc6xVqhtuducwfjaFphPxL2Tim7z3WHbfQp5Yy8",
  "key40": "3pq73LtB1hcH3uHx6jvCkKxW6hnP1HjhN89MAT5KZsDXMPysjtpPziho9Rx7yNxRhCgjnfSw8BadzW6bmSJbXMoC",
  "key41": "5G3duV9vbR3jiznUeaYoK6RrajUdqp56gdjX7zuPet2r4JTPiDdERviBPT7VkinSuCDXXnhj8RrEmuzcb1nQjrhv",
  "key42": "5gs5FGuuwEQ4iCfoCq8ZXp4xdNf3LupFfxaU8KhibdkPBiyLs7rBG4gCTEjKMsKYMVLLZc432SHFiJ5xcD8Csq5h",
  "key43": "2cLcrq8Yv2hxWYRykxufvU2cVfwAGtfmErK31rrrF6mDxWnUcCgTHd7CHxpNGAqyiddTJGwQY8YpwMb4UXy5xu8X",
  "key44": "57vyim8kxSA7uWSF2JGtQ4py9dFY9ExWFtQRiuUu473pRuav6QbLSna7q5SJbfGykrQGFzJXhEWf3EJxwa1Pm8kq",
  "key45": "3D6WuEhifGkwZUH3uXBqM97uDae2SWRddcX35pSbfHCYqtqaBdjQmkTSiLLjtzGWgHZJUvqCXYXaYEJJi436C6XH",
  "key46": "3uD7P7tRCarofCvLsPxFBTnXrrVmGmBPuzFneYVtiK7gBvVgmrCy89uruxzatsV936oS8sfSQw7xNtor1EPT7XBQ",
  "key47": "5QunN2geK8LB71eLHgXEKPuAfMa1xnfzAZaGwLxUhMFJwEkAg3B9UcwpoaJexFeajFDHJG7jhJ8oUkqgtPRjYcSc"
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
