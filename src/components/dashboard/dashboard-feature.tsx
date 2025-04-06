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
    "24VCmmUMjYRBmz73KXuTvFUx3Xrzqy67ndAcLF37sftVve2SD4vYRcsm7FikbSa83NP1wf8eaZ5hHcbWgSJBvPHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43x4QdSekKMqXEAfDMVNNahWMAt8WKGkuqGQqtpDnpHUAwpNgzLBLwJE1GwaD1pquej49w6hchzHdRdRNCwjHbzu",
  "key1": "2jE3DEJDM75ZmtBcYGEW25FhNTvBEUBdDZMBQCDdRow1BpHzLwGJo4dZNCq7jVcbNS5n1Mj48v9axaCer16AfBnr",
  "key2": "6Cojrj35mtDE9aEY7ZVDofjfe4bHmwjwehYhKC5dbxXWJWztJfqPHv7cyoPmFiSZE7k1thUsg2tr9f6vRQwemiQ",
  "key3": "4Vb7vGr1EGD3byaFPNc8jx7hJNvpnySy6isbx4DSFHstdVvSRV1LdvEtvWzUzfFFP64P5hrf2X3tWntpHV7hjq7j",
  "key4": "3YokgCXH49UXyE8cBc968LHzDNmsRXGU6iQv7VtqbJBHZBWojECQtHPBMcx4TzbWVwTTJuq7ioRqKwFmDFAFCriM",
  "key5": "4kcUAc8cRXYYRKhFDT16Q8RmTgZSjR951DmWJ2rRGg9i5WNjFa2hbjkS6JE9H1jHVUyThea6hihdiMpC8SvPgyzp",
  "key6": "3zAFkMSKSNHb1EbRuUJdDkFp2xoBhmH6efwN318kqXXdgmdbN8a1cEpgB4NDnegYxqs4rDXtm647Z2PRhMyFDR9r",
  "key7": "5fvfcoSCXuEgCwYny17tMxgMJjT4fScSiyJaZFe7Yw7xhdUcQi3HynBbE9cDChvGyBTAkavi6JziassieEbQG1rd",
  "key8": "3uRHRzdYqxyL5Wg7z1eNwJNua7kf2NE8rRbgFyqDpYi1Vvvyvz3it7V4tTsRWcswtGJoP5Co2reLXiNSXj7gVigi",
  "key9": "5Td2XmjBKo9at8NKa4ph9uG9xKdhVpyPM7syAX51GsuoVuK95Uy1EtJmLxjus75HGr6Jh65tR2tHh7bQd4p7oGqo",
  "key10": "3p3YYdwAT2byLf8g2TW2c1YGWopy5rbQ1Z3fXwiC7pxbZnYVBD3PyxxABn2hrrDnZyzJW14i1wfFHrFw8msHBuvc",
  "key11": "66p5532FrkCofjrppXiTxHXdVV2m9LDyuSEM2iaWXaKWr4BMyeivn4awVfu3PfX5WiJR1CQNy75oD3PiiWzrTR8v",
  "key12": "2JA7H4MsbH6iYVRqzEMXAiYQVNda8gqfbhjoVJvTBn99PzdZGQxFns2haDfzgztvtQ5pTe857ucCEnuDgiQ1Lqp2",
  "key13": "7bJ3k2M8WT58w5aF345MoKPiMYaBuYjZPtRvMxNgpEHrXnJBoX9A2b4gyzwVX8hL3RhjTxdFSsL5txF9Sb5fgkt",
  "key14": "5C8LkaqyPDx6WvpF7Vy8psEF7DjHY4f2kNcJPuCjkuYDrqDdDejvmm2heXFF9qyaTr9vxqYDbka6ucBRzydkXvih",
  "key15": "23shQCywYpBzuu5Gf3awZhN6eCL9H6BKWWa3MH4m4L1rPBSyT58pZRUVWWc1YLFCGSD6VJ7nSWDBNxLhScjoQBcf",
  "key16": "62iv3YrCWHvNaDC16SdjtdKiLj3MnsWna2LBYDZUUL4oq8bs3bqR3G1VW5we2o3LzWrV2HSgBhF6X7qCTZGd3ASG",
  "key17": "2Q2qt7zkPttmqzKhxQn1xnSNoaHAKdrYe4RbbqaUDnCHs6gfBKnBdXpN47JZu4S7HRpDou2dtLY3CHk7yg3ZEyjn",
  "key18": "2ewCuki6ku3gU9teH55VPnQBRiY2WksU98Zs4rvodsuUXCHTK9kJKbdLV9Dy2XQ1MsBMV9dXoYEAXq2fgUXJPQMt",
  "key19": "2ExoNzP6DqHtrEoCJRuGSYstCrBh9tC3sfTMrkanpBY7vMfc4PzGyCF3qQyzvysaYTcC5B8GaywcgEsadWsHdqeh",
  "key20": "3A1H1j1VdMrbiKPVwACJqKQsAzz19w5gGdNtEKMQqJKGk3Gcth3MiAaunZTw5nUH9rZhRpPyT5xhnLqzvrrhNpto",
  "key21": "5ov1ZppKGhzp2Gr9y6w8XdkerGFyJp2Sc7pkj1QeAdawLKK74sackcxY4buVQuWptgvhdiiPiAYAFLDpX1mPvp7s",
  "key22": "BRPjuhMx5FZX7Y65wuDPrSrVDXDKrqDKHuNRutyVzNEUKunrQ2HyYxfRKiojSUcMMPQ2mN5x9BM1R1rHGq6E4Ry",
  "key23": "3S3NXySxrRvMkVi6vvkSWS2QHDWuUBMkG5Kw5yJ1Y35zadyFi8w9URqYK9Pk2o7qfP1r3zYR9boWSpTSuizdPSHB",
  "key24": "3BJej8qNAxqSAgw7ZpjLnw8SXjrDRpTPM54VVgdoTZ5tfS7B7o7oAJM2UbAkBneqPkKej6624mE1spdZmJ1h25SE",
  "key25": "2g2yYvXPYRhuP6A95u2sBj3wTqfn4b8aKMHsgn946KnWfhstUXUdxKa2puMpgv5BeCbFti4xzBpKThvwBBrG3zEp",
  "key26": "44ZgjheapMK7WkHCnm3KEoZrCvxMayqVvS3dYeW2S8qHDnBzqv4DSjjN83dEeBn7Jpa9DfVbUjhmWCjMg1xQG2hA",
  "key27": "2KPGsF1PfNbjNFjKXZsByWyAqi6bkczCVqgb3BRo1uzd1rbFRTq2o2VTgJnsEFuucC12CQ1drVHMiLXLmc7bKV6C",
  "key28": "55iHLG951Pq8tm2fteDKNCyMxuCAt7zY5CpxNVGrL5hXbpDQcCWJ8zQKnFDUGHQ43cCCfZW6AujBDgYEqYH9xiCf",
  "key29": "286pjehFjJVTVDgpZt3UdRbSSHs8AmfBUrMLa6VjLQHU64j9EPEfk4hpNkPTuhtdZUSsR4JyKKE1Ag6uNXpTH8xZ",
  "key30": "4VpLD6r1ZXu61xcZmgrmvdrccapTk5A6W3PymRr3wnvJEtME5qh9W2TGF1buBmhds3MfzHwCoqiy9yACrQKQxKsB",
  "key31": "4erbxvBfzdRgmHozqyueKqYfYrQ4SaHfEpkgqN7iLbVHp1WYmwTWZ5j5DzPbuKjWV16GhZSc8GmdJrKUXTJr3RQd",
  "key32": "R46ZEJHDbWtFHptzuVPhKL4byk9934aott1UAsHrBzQwgmKDtkZWP5HWPBvXhJSAvnvN593cLb9XW4wFUHVAgaH",
  "key33": "5HboV2UnU8uu14LG9vLv9bcNs6d17HsYHv8zuiopproqHnjDpcmGmDtoavoNreWBqZGPUcTp3XeLE2XFyY1P2fbM",
  "key34": "65rEZVyk7DdFna6MYikWxWdroMbsdq2CEkGuaQLAyyEuzrrTdV2UyUNvv985P47aWKhCrBrcLFvFmj8Q9YVnbh4N",
  "key35": "3x6A5Csxro6DSsiRxrN6KhaYXk8f7LvkFGy6gbs4MiUog9V88cdTCcwsVe65gJvAYytJV8b1LugBT7aeGHuisA4Q",
  "key36": "5FaCetExwtUXkg4VHHekFgCAeSxKoUKvJi5h34Ry9sk5N2m7ibEdTmu87Kw51fqLc8NArzVBY29wCwDiTphctABb",
  "key37": "4a1E1ZyqjNzmzLLi7H6sFu3dfvBbqfiiyxEFRcdisWVJ7ipe5NoashNK6PmyPXngVzPA74MQr9WvshmysQnnN3BV",
  "key38": "56ZytbTBFrNteCggTrXNysr1v9ZHM1ETuua8zv3zbW8LB1gRS9c2zJGUW6bcoZeKoKX3kBRkeyBiWLJfXr5tokCq",
  "key39": "a8egWg9tfRoi2g5RiJ7PeLjEEXqpA8cm6zJ1rCoNhUDggMnciExHUUs6Q4odF3iWiENso22eS99XaMoyMd5K54U",
  "key40": "33MismfJaK4g5n7vUB7JZcioYqdyJN6n7wAw6uXDHtUKvr8YvANtf5EKwqewEZ5dx2w5QFmnvToUftc8fHFDHQEb",
  "key41": "5WhFoximHwig3pvQ3mJMuA1TjWvAPMGzDoAxo13sBWLhjofLn7Bct7DkvRDRkKxH98STDCeg9UbYBrmjacKd1CkP",
  "key42": "3ZUKQdHdYc68qat7x3AmKdvX6tdYn32AfACjx6BuJg4vZZFU1mpqfxAY3nfY8d32AjVHHjV24JsEBVKzhkaq3jRG",
  "key43": "25q9VCLfjZ5TMTV6GozeogPpLqaUZEfbrsBPKDicCLis4J4MZQBfP8A2Nkq5ycDjehGcWC61MzYDUfmc5KHUztrz",
  "key44": "fpBPK4MJsqEqGwbTXQAFbdZGB7wrURiKPUbJn2rXQ6uKxJm2Lnt5k77CTJJHpLgWm7jJAtkjkMz5xTdAoU4RASw"
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
