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
    "23Dn3FTHbu4RFVKeqeNgZA6rrayzHPoFTGAqXdaoJUzcgU1gDcM9HHw1pJaHXwQ6SnrAeVbNEMe8N2qatmFi5QNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ErKT56xSTt9N8rutUWAYn5habYwn63fMp5iLXC5awBQ5k7hSwkUDju5VGbycEBCHVM1F9NoRYfRyE6wGbNcpCf1",
  "key1": "4JBD3nFNs8iuFX4iW5C5vahRFaWunC4jwGdQF7nmbNmEeEZp1Q1ApUPtHqWGoXf56C4egJm9WJ9eAQ1eqeH56Mtw",
  "key2": "4QbCEtvXiCjgN1qCeT228E9RyS1foqJZgN8FJAkixKaTRKhvz2ajJU1wBDaYQqWo2K3axXPbP5ACQNaK2mSebK8r",
  "key3": "sqjcmfWmwThdG6e82B2ThjZPQNAbwF9TxSdgYSFYCH6hbxvU3TDPcN7MAZEw2EUjEvhVmKeRnb8fXioCqen93op",
  "key4": "LapFWFLMZpp1XHbFYXWqoTdszbM8g4ojU2AZ51jxaF5LsS6GbGFxbhHKuuPc57JXzJc1UNsHknyPyNRXqJHPy9u",
  "key5": "2R2g39YBwz3guG4QJ7JZtzwDCp2G7ZMH6HvSmUQDCpQxsWaeL9gBZjagmRAogSqAnSWQYRo5CZuCu6MPMtT769yZ",
  "key6": "57TDDGBHM8BXJ8h2FwyNmzuPVCU5xNhGT2gNh2bDq6NBEWfffav5FMtBZNN2gLxxSnko2MKc93ojjaVJKMkpGa4J",
  "key7": "2KzNCxKDeBzkqvrbKpd2RRiSo7fPhF3nogaZcPZFgbBonv7UgcoE7mvySB31DwVFvXj34fG53F4F7iDpDgftswk5",
  "key8": "HgY56aNcXUMdLc5sK3SbNEuLUZgYRGV1qMDuMfNKJfL3EPDVXBq36hhqwzdNqyxaKioErAceYUJT4YVfZQ7qxPh",
  "key9": "MPf4WWPWts3p4m5wSkWHVtYQHx1dAyYYo17dpUxyAkC4tuL6gEfRnAksZU5f3RF7UHtkjVjWyxBLzLcJrfMjVgw",
  "key10": "2bTxqBfxHk7GVwSP7szTHfnyGRFiBxsS2eTUzAfUbtsKreMz7e9MvAHcvprdkDYCvsFUhaWq47SEQ6XjqtqQ9oCq",
  "key11": "TskWHRfXY2a2gdfyWZkrMMNjga1ypzinzuxKVi1wMncfQeW4xQEG4BBTgE3of43vDBMjCf22F8GhBnf7wLzMKDL",
  "key12": "rC2i9EVvrgD7t5wftkjH4baMD5CUJuYU8icMUJxj9MyF3VUaYLurzfQNpPJBoP8THz9AeZ5wQwyRNFQJChTux4V",
  "key13": "3Fg4wpVqzM21ccVUQvU4mB6HmkMEirFqqAmeKqP2JcYcfhuD1LYQi3jgNoJMmKcJg6Tm8i5X5AS8MuMM1zNxBBUS",
  "key14": "2jHKiHUCc5tWt7xc1mVUgbCLPRVWgFtB1jTFQMHEaN6jXyabFSZQ4taV312SaY5Q68euEomywELeqMt5w7Vtk9Ng",
  "key15": "4bf3nWrk4vdFDs71aC4qA5xmT4ShgSXTUbhyV9ZDB9dDgPSiMSqLitikEHp3ABzKYaiUeW4eEUyrC6HMNPh9qSP5",
  "key16": "63upYDKejPF8rZnhSyrmTGALwonKWtnP9YX3paBYLZNMWeZ13qfqGeGbNHp2Ag4VBwHQkMvt1BWvqQSXptrK9Wwj",
  "key17": "2uwAYHucvcinDiuC3K9bWBrWs5nGPjC4WfpS8a6Gfsd8VZuJ5kmvjg43Ft1CiaWeuwEmZyWFcnKcFcHLNgSGY3vf",
  "key18": "3AoGc7ujXvQCHWpf4G69JGRDm6JDU1gvpXGwBAiJbTykbb76brpdKo5awfehHB9e7gnXoB8vQKEvWsvH9E4kjqPe",
  "key19": "4yEVjpfsDSohUh6qhDFEJBLEbHxYk2jScaonsmmPZ71a3woBCqcD72WkXTBLBogfD4aTMA4qt4jAoGJNbjaWrVoS",
  "key20": "BbkhmShdZsgdNWrn5YKLKJC9AGryGr6iBYsYaFieXr3pnAkFf24ndSngnKbwRAtN34mAzhPx1jqfpeb43FPcBRB",
  "key21": "123vUmEce6TcEuhHjaqHUAw5Usy1rZCmHYnW6tTA9YRTWFwhokE9YEjjvknTx3BziyqUxCxdYNFXHENS47Qh59m5",
  "key22": "2onLeywKuhjofRurp8sJ1ijr7eEJtzJNaagaaGvhoL5hPF3E7RGN5EUPUHXngRhf92bA1jjUD3Q4sH52t7xPR2tP",
  "key23": "3KqerN5qLuxs8o5yS4VQ8kaYmbybc3aFAmnyRPA8pq3vc51RfbewszG7RhYjYRP9C9pXQY6JoP9zspjwUvFZqLia",
  "key24": "wNdqqprpsBNHjbrJ16ib2345DokmrQbfnsvuoWCThnczCfnQdy5CaHVDdeWaqTqzX91yPjCtFZeEK98vpXVaeRz",
  "key25": "3HxmrTmpytPMnXfHZARqCnW25ceMefsTanee6Q8PzcEw5neMNYLCme2kkFir7PuKwFFuzoKCYgSPb4ArVA1ox4Eg",
  "key26": "4qikAhAN2fLTecMwp7SJEc4mmGNGMQzzW17HkQCvVwVpA5FVPpKsnJaSy4nmHxqRu4Gw29ocXx75cLaSQa9zaY6k",
  "key27": "TCLGBvA5Hh4c53ZCH5GC3BpaBhngFWsVNviS7PXHTMAW5qM7ZZvu7amAzpjS7gDKREmGo1U16mTMPQWX53bxUZF",
  "key28": "4YT1YcpeAXFUWXrPvviPT13vfZ6QGinSiD84CruSBzCV2pADNSJkUebGSMonbDu4Y7cvbPP14SW5GMR2Zv6ZWSQp",
  "key29": "3wTfmpqEToHUVgXf4vKMmb5AquMX2v3og4mjMrVF9DWtWo6CGiwSwzwsrb7wNAUsvMcRvfg57gDBJRczuasbaUe9",
  "key30": "2MFztB2R21DQQ9LJNToEV7vhLAacVV6TrboetnsgrmvhBiniTk2SFnssnLUbMrxR4j5SAD9QikGMuG51EVcJCJw5",
  "key31": "4mS1vExGahUzWF7WKNYX3UAUJN2vsNZrR8HoNPS6412aYoS8BQ4JjA6Yap1jqERHeoPM9412QzW33EHwNzsz65y1",
  "key32": "3tkfBbYKBUD7LrpotEhNdwKvJzsoCDL6zst2Bg7uz32PSizem2GcdKHbRQX1bGh4bkfWydu9hdDHAw5FGfCBL3vb",
  "key33": "x89xsAFkLS3KvMejFmsyvNteSbjTr2sLmnhxUeLB356w5RDHiaNXoaXPgqPsoUZasmbD1U8QEFy88EveonHPfJN",
  "key34": "2hSpiDhKPRNisdUrN4JY87Vnmy6zcYgxTpyzx5xLz7KJETW63zk5WgrQgGSoih1bkZQYfaFXv4AyzL2Q1mDVFwbu",
  "key35": "5FCFPyoG5dVkkGHuAzoU6uKMJY5ngJNjADPwJGtiqJAkZLrRFNQegh9D1ZtoR82ge49yKUUe9gPCysmAtxLQEfje",
  "key36": "2dXzEhkR7dHfNnN3LoP8spuZ3XoM28chFs7LRzNpLZj9hQ1XLrgNFLRJ1Uf5uPbL3ChxUqybdZMJtj5T8gwbvzva",
  "key37": "2JJdYe3oUq3uTrCzUaurA8pPML7fSvKtZ18uYALBNm5FTcmoqHn63ZderhML3ebX34wbmReEwqTJynm39mgLc9Z",
  "key38": "3nQhxMKuWSypngqKi56oUQEFsYG8E3EZwHXNCFrpRNkt7zvhnLwD2xsx2W7L4wLo5Y5XoRHFFc5hEPRrAQwgNWgY",
  "key39": "HLPZoWF6avMHhwmwZtQp71g2gDcMp6CheW23bdfvohXL4NeKoay2Gdt1FPBTDxMc6cf4ZQerJ4JaR9KrNY75kgH",
  "key40": "26NDYssGLMPmY4GUdWzKpqgrxwurq49L94JmMZff9vmi98RsTYx5cWM54oRr6LP8yUhGh4JTT8ZC9hZaNizLsQPz",
  "key41": "66jJAzfpr9FrFjKCXhGaykgM7J6dgirYc6zNvyJnRcstmDtMAYwPhm2T9vF8Bkr8Lh2cmUvjN4yZQeHEaJk5rKTB",
  "key42": "4gVtLbrL58UKbxqcyGSdukNy5w2KmgzDDJTmE86MtHeYPErH6Xd8G6Le5p8p91inZda2fzB6p5vr9iXCtq5jBoki",
  "key43": "5NQEJ37FWZx33TSnCC9vhYUsQLKfb26zyPaoU275oWH6n9q6zd6bhWUuR66wH8sWpJRWmvDugQbpCTbuxnwo1SZF",
  "key44": "3P3sseWuAGZDSrc1KFzk83DuLruyC1ej9HVVrH5gwLoSgY2bDEcBQvf6N9n55yBfevWTtBCp9w4yvgHmhrEaoTBX",
  "key45": "3Rsy4JVVqbwaKwNZ4w9HJenecEZnxbJuk1RiK44qARFWEXT4hpaUi1DEg1iCSf4U24fTaeqkM55T6nF1Nf23YgUT",
  "key46": "cANn9XbpvQ4ky2RZKeLANf8jANXSQJhc7X2T6Awn1P24NideU9jkyshChqsniZas1jEo4L3p7nnSQdopYitxUZo",
  "key47": "2VZnoybTLbc5D6eqY3Bnjf65xhh2KcNjw2A2SXNPi1L7A1JYYtaC8hngBczN1qqJstpTNT7K9GRMEFvSipuGDvD8",
  "key48": "4b4s14zZQQYrZhCohEjZHUkR8fJ91rmzk5EK6LkaZsAperp3DWz2nTrVfRvKXoxb2GLVq7ZQEZLoT5FJucKhVimS"
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
