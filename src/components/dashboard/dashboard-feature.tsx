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
    "65D2HbefBQVBJCS5wX8ba8pK21hM8CG7VWBbeGcafySEbgHbZZntLpe5KUtum7MnnHmmtYk6GTGEsghrdmzZ31nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yF4qjMJ1vmMQWnKFPNoRiTVHWva7vk3Tkmn3Z9SuRqnKoipU2p357ejkpVtR9eQ91TNtPsygVDaCHX3S5xyjypa",
  "key1": "3sYYZmLc8tb19fGkKEhBbo5ELwapqwqTksLTgQnntCJW1sWNwiLootLCHnaZzTKU8KbiafrvC5nSiAWUNvUq69VX",
  "key2": "pJx5aZf251wMbdEZe5v7Jto5Kmrmpe16iTRfAhHM1ULCfnEZKEVEQFm1d4gxvK834LGi9qtcVq3Ugj86QNkmBTU",
  "key3": "mzRnsv4b1XR1QqbQg6oQYxFvGtC9pT5edVPf3aMveSGdkSfN8F2ywUBXioNMBb8MDzARXKwQmMUyviuauTsFYCB",
  "key4": "3ieV2xUSP5Q1Joh3nE11r9yVVeEaRpSnr5oBTKAjTsQ3kajoNXsyRiDwpCH6TBiKSek2G8VoCgAz6WjxkTRtuR3d",
  "key5": "uC7VqufGNqVEWhiUKVWUDF8YCYFmX1puxGgAT3xVKmSGwQhx2aMK2hFcvfmxWrnPihB38qcyM49VFtVLGjs8VQd",
  "key6": "2QxWn1biPnmjRmJ1MrDoBbCCHTrJ1k3tA8NzupzCHAgtUddWVwTh6rVxCGkAvDSWqHQsY5nVtfdz8fR6Fjd9Dkya",
  "key7": "5Rtg2APnNRwxV2Qe1X5vfJdxcWMwprxefxXnSGnYA8P2dwqATWqzFPpGywWS5UFGn8zSwsj3n2nsAmZoa3puzM3T",
  "key8": "ewHWLRgERehRPGjJ1jm5fmKn62GbSXCEGxFEWP8csTzxsntafP5UAMAfN1N1dR7FYAs4DHxnoacbBUCip7SVNKV",
  "key9": "32GibuMBUrgZ153Bi2h7dctNmCX3Hs3MePKaUfsGH2aCqotb3zLVQB6xiCQsEGw818hzBk5r4KXFJ2Xes6oqRMpi",
  "key10": "nCUHfeAjtCWusFXUYDJ1rHPpFHM6L7pq2z7HFftF4XAowMYhGnRnXaCxE3C5RBiT26ogpRmne37qTiQe9knsEzB",
  "key11": "5PpoKrNR4Sj6QHxBKFGsvydJGpxBC3Ltw5aJJEb3Y99WRNP4qJUTXYon1ByxVbpxQSqWtwCPcDoQRLzKyHXFiYHT",
  "key12": "5kwFL9iQL7NxKGoxdazTu7vYbA93rJvqcB9r8i3MxfwfeBH2aAWLS14pj9UQBcJridMo5UVBZi4nuPPZKZMTJSoE",
  "key13": "4NoQDBGWZhqZCyLYGHwDWH6k1XvB2mNJDuDvoKRLvPVEZDqtmb7xCqjZcwkMhjUcJ5rVRKBVyuSC9k8kV4PDxwmv",
  "key14": "3aMxMrSTz8iJSTtQNk8ULCUSwZkJz11ihsrDQapNDipMqLTSuiL1cSn2p9uySydWXor9XamHoMddTdAs2ojDNxBH",
  "key15": "5R8h6FbyvLLXRrAYmKc6dB9sNn2xgk4oRcz5GPTgAGhre6N9bdq93XhHPASWK9BYgTgnrPnRqyzPhWsY2YKxX5uA",
  "key16": "2BKyqJ597v8CkWU4qVpAmmB6g61NYkVRF9qttHxxGqtcTCotVq5xfiwSrikpqETircsy7LRiiBSqtdhTQZVgE68u",
  "key17": "2AuzthbjDkfMxrzz3QKZXzVvHgdRHChmHYpEwtBDxodxrwD6whdyCvrLw6utyKF4GoficssLYZjEEGqGtLRGPznw",
  "key18": "z7zTL4x9DdvWuvhybFrVggCTkA3VTqZKGLRTqfnJx4ay6gsu7wHWix3RtCDev8NmT8RGwoWzLuSRD9B8ahNAAs6",
  "key19": "2S2ouTdZQMtrLhvAtNDrWzXGKUyDwqG3QjxVYFg7Q41epmPsnJ5HycseFpaBX8GKyAwRy3JK3HhsU9RJPPb9bbUN",
  "key20": "2W6LvHG5Ahf4enqzXLpMN3VpaRNbfK5RpMLR3grU6J7tV5Dq8AjumAZjNoqagSkEPveaLrPDEz6NhphzLgrnEuNU",
  "key21": "yPJEeCFZ6kEHFVgCusLp4fn23FsHHMrzVsnKr89xExfxuyfXq5fjmUFnVxheFxUnpmCxPqBHSRcNoq75krWx9os",
  "key22": "4wNUhhQDB7e8Vqr34eti5GoMfLhz2U3kxarmK2zxiEEPmhj31fHUTPetgsSUpyx5gvudwTNiP7RAwPy5g59x8dyE",
  "key23": "2jwD2MRMcZqAEEiz8S8MvDy98T6f2TgssEXWB4z9A1VKjGwLfxx8G4mkU2kWFyirFxdam74wPhegsfC4sM3ZPbYG",
  "key24": "R1VhdMQrsm2YHsNtZ8zYYJth6gzyuLaJg6tCcbhQZbZH4QNjZXZ2NT9rx8UCwdhKSQo5r9esbYUT7KhdiJdn3tY",
  "key25": "2vVGGjTaAxYWBtUFzvHB8CeTSvCN7a7uX3gK5FTd3nDa4ppRH5PTWbcFRvAMXEmuLKGyySErCGNJcx97Ep8bobNy",
  "key26": "47DgNKDBMdgSyLbuz1zeJwTQ9gcdFKyreQSmpMLQ2decJVmNdh94wYDtx87DTmPP6UJfdUs31kjVi4wjMkRspcns",
  "key27": "5muqEShs32o341fGGctiFaAPxUmkk41qLSGSH5rf7vMpZD8mysTsbQZT7oWWAQShbN76qxkX5HUa2kUBmjmvtUaC",
  "key28": "2JSw4fPoVzRKpmCzf7zXmqQsWj44iasiXJAiFYwjkMfXnMoV8z1h8fXL3RAeuB9mzSKAsFiyirEB7idVJDCJ7TAS",
  "key29": "jZso26jHULbhtuPmtXkyWgNXPw4LencYSWqXc5k722CxiTaNEVVgLQ6y5TNCV1Gb3fACGTAitMiEES6M1VzcpZc",
  "key30": "5z1fmKJRvfbFssNq8NZEUMLRCzw9hq7MEgBoCSmrzfHHSygU87HghMiUdzVA2G9ytWM6qWgpt5je12YNNNbVaziQ",
  "key31": "5ZTLriy8w4hHq8WiJtSP5v3pRvGKJMe6gcyZmjsbxbqyTHwhWFjXyJW7SkJez2Y6BfYuYSR7XoY5AyXWWnfDVT4z",
  "key32": "3RKx62vCtwQSeJfKwjaG7j7K83DAR1ZTfCtiNJUdoJHFG434WQJmeHkGy4DaBHBrovX4jHhVs6WuL69SCnpvh2vE",
  "key33": "2L4QvM75FB5TtADBw31ALCA4UEGq7bBVh6eLBzyuRyVvoRkG9nZ8t6zm7CDRnmjYNNrjK2JtRzfFUVBgWTAKnoeo",
  "key34": "ao1hWrGnJ1mCY7dZf36BpXrg3be2mLd7N7ueFX4aXcWj53cPohNUdg3Kj7Wz3WToLR1YDsetoqvYL8GUphBoeX7",
  "key35": "2dmHsT2HkTZuqzijdnhkKcVQQcWxpGjHVzvGbDKhCgczVzzVZFnzvcNvUbuCdDA7bDvuk3NxfPxAjaTcxrxf93Hm",
  "key36": "4EtMJTeiDTt6QvnW7v4SopuF7BPhVnYKV8mXaxvDQiN3X77e2CUFottmjss5HsPpGodoHdBZwh6C5Tofrj9K7aQH",
  "key37": "eNvCQ5tm25P17NTqsuh4QjfQgL1PYvm8wju4oJjFdekznx9pNvrVJsKgpvoPU9ikpXH5WYaVF3ZtC68sb9MK1o5",
  "key38": "4iM2xh5ZH5ShGTMrF6XKdPegvQ4Ax1UugRkWQGg68VAFXoVEapRveudtMP8uKzgEd8UPP3jHVGeakkXre2SfyLVc",
  "key39": "3ERb37CBbuPaqkCz16uY1y3vtpdLad8ARQyzUkEbBWQpTrgMUrmQ78joJk6v8PQDoXoehLNFmUUou3rFhaRsdCYA",
  "key40": "5s4UgH8BWWX4rnT6jSjvjkws33eT7VAr4HewfrK2FB6kN4pYS1ysQg8MVGaqJo3BrzNLrgYMz3MqMavXP5Cufww6",
  "key41": "3rfNUL1P59fcs3W19Yow3CKK5PMRXraFi1AsSENvFGxtcvPJGKbbNxiD3iTmj55XF62kz3hpMBPBLRmcNDMJ5vtU",
  "key42": "4GorhqobU219VBjkfMweqVVn7mFFW1uK1GgvLc72xUXkiSmowJU2teyfU3bJa5QTUck181SEX3FUbeaJpW3W6G5r",
  "key43": "2nvDwtTyGFWhtjLXRUnbWByuZV8xSmiEcpHMCaFG8ynwGoxJwBVnbGpjPBjCntwpJMoJbNWti3bXe18fEkQrHoGX",
  "key44": "45MJMpKiMXPZu9o1eFYS8TUFTUfHDTE9itQiWTjfUsqzos6xDJ3zAYeSHR3CATDV3VX4YdWGCQBHy6LaZsFDvJdu"
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
