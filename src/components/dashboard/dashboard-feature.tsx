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
    "9yUxohyRei2WXFg4v5RZQU5g1p2WNY2aZM64gZAY8ABQnRrZYpEFf5KAo8YPtPeXYGRod1G15s5h5XSbAHppvFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o6bBPXYFVtcLLtDGVaKygs732tc19zDApSMPTS6MDMEs6FveyfpBAbzLhxejNxxUH5sTT84vMF8EBY2mtcgf3zv",
  "key1": "4j4SADKT7MyMdCfheE81Q1WkEVK2nyRrNTkBaNcBef4ymV43badHUduARp9S8u9h7J5No2K6K179YPjdi9YaXynu",
  "key2": "55mMzcja2G1NSgDcCRAGFHyzLEdHTRkpv2fZxgahqLaoU6Ww3qbg8qZkEGUsxuGgW7mxLbpmmALU3spkMX6fT5jT",
  "key3": "4kLWne5vBCoMFhnStnuH4ie6T94GNC32SFcR5g7vsQFyAVs77f4VcLvD8G14cpKWDdBgiRyfHxA5AqhjyfqxYc8p",
  "key4": "2CkvYp4Duug1fme3d55MtsPM6TgbPco2vmyQQtuNjW24Nzmd6CpwfBm9hgysMx8LeANhKR9EUam8RHHHfVk1hcmv",
  "key5": "2TtrF8Mocp5hCztANy1KVEQkzpPMHQHZLpX9QgpRzGAakRcBwGCriJBKBsBkahzVVt1gFryQavRuqEUVRG2jJcrc",
  "key6": "5Ew3nNsBe12ma6MpeVvfvb2Cu19CUJ1rc6DVvkEE9QnZmov6n2JZz46H4aiDDFuoeozj91ihsoasbkojdytnJhQ",
  "key7": "5BDD424QKBZ5N2G8vdsHiLJ8Ga9wQaBs5L2BgPagSB5ezy8qnfoFF8siMyTPrU2NAeagANWbgGzhScUTUnWauu6b",
  "key8": "2XGhRq9g4WXbutKUxM6BdYPpC8P43zEpcdd11SEHjr4ecUFLBzmG51WMCXd7pVBPPkTGLE2SuMkNtiCoCupQbiAX",
  "key9": "2A89dQci9ZbTprhbsYmiHduUAub6AJf5oQx7L2aZRe3eEog4h8uSwuH8qv5BFueaKVRaANgg5PpBJVsudXmiN1TE",
  "key10": "gnf9Eo9DLNqUfyJ8x3ir3YHtLaTmZL5ujsx51wEv93V93KneAJMppeb5stqmCWLiVFwR39rdpCVy3pfZDMvu5Sn",
  "key11": "25wxdUBFX4K4NtxhwkmUPgnuCAEGK8ZpZg5XMojVH2qatv1JekuA4sRj84r2K2n5yoPwb9jTXFjmHATB7ATDKTaE",
  "key12": "4vPTMofyVguKKRmuyWwrfNTdGGFceR7ZMyX6k55hmdCt2q6gXnWCGWdbb54KSrmTeCnMdkpk9SXwMPyxQqsFSiGk",
  "key13": "4Tyv27aqgE9MhNCnPju3PDH2xCcmd18aUW4DWsyDvx3cDWnS2ds8ZAkTfuqvc54LyDSHMFX6xeiWzPAwvcsjTw6u",
  "key14": "qQq4c5MxpZU3QA9QgRWmseTUYYMWpquvHD4EvmkzacwPURUQZPg19eVqFna1oDCJREbCmyMZCMByzsGzLBME9TE",
  "key15": "62bX5QB6Kp3EBwYmAgL828kE74DqLedFNeGQJmR5u1o61L3F5eJwjHvANxUPkDgCSMm7CwmGD2BT2tFhxXQKoP2F",
  "key16": "41SdpVEAfxs6N7sVx91MfkGop3zDv5xRppU5K321ty9hXvAby9rdyyftkgeagV8zmX52XkNRw2oBEuLCa8L3GuMC",
  "key17": "2ANuV1EQ25YzUSjVsSjU6fetm3yfjHqW5npYwSQPcKeUqgbZgqFNz8N2fGKRefezN4Ypij2hzjxrmmb3VEGjUpUL",
  "key18": "3fmxknwXuFYge4fJdzxd5BWtz23duVbEQG3bnmi6SnnQZStX8JZZfk5p9gjFXimkZeN18Ffigd5ueg5LXWtBuPqo",
  "key19": "4RA2sRHVcXxrH2YbWo1VRdoud7SMufzXRDgdvATyBFKX2FaL9txcYrqgLL19hhVEPPF5e5J9Ee9xApZUWguRXF3A",
  "key20": "5T9HFX9xPreUz4sjTTXUrvgB8enmJDsSVq5RFg4JCYWRSt5ih4R5hBPe5YC9gK9ceMBB8gdxVqRtRFkx5pkYvMq3",
  "key21": "3Cvyc27QPhJuZwM5n3ruiCJaYMeyb6zAPVUkyPvTjRZcA3WLrbWcJQ9qd5ZB9he15p5Ev8phEEtatRaL8kqC4hGr",
  "key22": "GsEAZUX29qeumK7RPnqFTc4uHPC9hiSfEgQj6msjUNRTCF7AwuoZ3wwKAZHTDGoXdM6EtKE9TmkfxPkkPQ4mLgs",
  "key23": "3JJBsrPXu4g7w8wxtKN5RpdQVvAV7y8DcuWjb37Fmro1U5xXRsdPmTASWyYTQQS7NfQyk4DrYN5ee12TUrUbRspj",
  "key24": "3PpsU9wefxoYX6oExRkUE5kJpQsrKaycHtcBVf2phDcdtLkoSfZfyvTcStBXdHSPCZiFuxFtDVEMhu437WLUMVPX",
  "key25": "e3JUsiZKzFMihRa9S4FVyscK6vJJBJD8sEwSVmT2Nv3ci7VdXKTWTubVTMQoBV3tHjZHuTsqoB8aLbFB26HytD8",
  "key26": "2NmtoS9AS3NbVkqMfMVgJjcA2whV5zp5TYfyS9fV2kHsNsGqCJ94SWZ57UuBbPVnUBCpjxba4E7CMgHuEzGi9BeT",
  "key27": "3ftxLtVCvgGoTaPnmThwmbDWyGyP52Xzt2kA4rfbEfvczH4MQur49kwRJEw9XxavNNr66DfmhUW84DMpx1ZQRD72",
  "key28": "4RPa6KdfDvcv5jwoT4TXpsB6cEkWDrTWPvKAHfNDVTsBaMvKi3wyggHzrDHByovMfCBCtZ5czqoizB6Ch1BSDm8E",
  "key29": "3mQM4uFTMcu7n1Acg2oTdXdyTvpFXUmiiw5MoVwPSzJ2RrNTLif1mRdch5RLchym92Ucgv6syLXtKeJGwfVpYoh2",
  "key30": "2hReCAFCC2mvp85UehMqAJUci7PamSFL6GTzA6r3q4TwKNd3YtqfUEihP23GND8ZmeLgkQ2NKNSjb9zJfKLjmTe8",
  "key31": "3a3pRb2LeM3iHJWpcRtBRauN9Q4SJzf2YDHryd2gtkSTefy5JZHL2AWZeGTZEpUyWbG9YTCZ29oeJcW7UqaJwq5v",
  "key32": "5itmdZNipKmZk3nNkYvQw24iUqycgWkgcp3e2QCTBWzMe4CGxj8xjJ7vhoh6XWsYMQhTiZ9JjNq98umPekKTpwtC",
  "key33": "57TadyAgBQfSSFJ2oaebhKo8HKAHLq9feAe6CCpzxeK19rRcPGAXVGyRSCWan4CsERxirSkt2Ybted2SGRN1RLu5",
  "key34": "3nrUgPnnmhaBXvrEjuZqGuWLs1p265CmdigUCSvPZUjVkPu5WEUhhHUuUqXkMcdUjZGs9WaxTZbPeDUKBddE5fwn",
  "key35": "2deuuqzJyzEPfw4muJZqhvaGQwtrLgDbftPL96V9ShQRM8Tdk1DMwkCCGNqwrwx2ALQfBGVEdFhwa8EZuEE3YsAx",
  "key36": "5KhNhzC3vzVGy359oxwGnPUpgsPLwvUFSMcBAtSkFZjguHqA7ATmWifs85yvmLjAdsGXrDj7uF5YiZumztLzRo5c",
  "key37": "2KYuDsCE5PWgVsp6ZWndG5MhXMdPKMhrscgrfeunQYFg23fyCubZRXxtzAS89eGo6i1dDD2zjhAY1pRdKf5hg84w",
  "key38": "3dZZY3wZyEx7tVQi7P26ewbT7uoMyFFitWiFZfyvfuHsFRQM8wnbyAbMGmCGkWJ5y83JzSxGFhj3BEVWSFowPcGH",
  "key39": "2SEBD29G3ektZui8cUeiu3VNF5SMQfEBtW7d3SHdeW7zMXbmvRME6jEpqPEkynqiuXGUwoB1qMtb4EjHWh9MGZFg",
  "key40": "43vLjRaWvHcHeeRoorXFgXZZPE8Uua3dwd17jbv2QqFH72J3fRqvS8dDmCAw32Hb6jt37PdX1qA49mAegiMonmL4",
  "key41": "3Foe9ckMZag7Nt5fqYAjB7G2LM2FB4jqcW73SZh5kYVD6Kj8SM9dBoQgeZriYUatreENza8gMGvxPoZQAE2ChnDQ",
  "key42": "5rVnbx4DGcYjuP1dr8eSzYijsDHaaqjz1tvVTUaXFLS8xfZHGjYu2tAkv2TZzVeD1cEC3i4evrJB8kF5wTr5hUPD",
  "key43": "TFjRwYwVuDbTtyDr2nf3SRTf2pfvmNfHtyNAyy4U5TwPFGLSXgyg4yGi6UkGfBBzjJ9Xqr7MkyMVVseu9A7vdn1",
  "key44": "2J6XDmRW8sgmqDh1P3WAyjQmfDH48FMLbnDGTpNrSky3uugxfcZ155W5aUD8S2uoARxk55VxBN1kZ8F1DpxrW9ik",
  "key45": "3Y6nhYrGrXy9BWq9kfEiCALhJVc1gMzWN1A8Zc8VRDvxEZ9K8Pbjb5P9rFYMWTA1B3ZvsVH4hxz9HK6he5BYz3JK",
  "key46": "5JgtbRQC7yW6pNvkUKnuJfRUppy7wANT6TMYvxK4NFsfgW4DS8HW19rf3HdquCeBfFqtY3jQKFFpRPBJkwybxvCM",
  "key47": "2XmEAGjban8h3eHb8e2X1Fv3Mj2TGH2KXPwcuyp82SD8pcqb5nTZf2V5vaQH9mXUKQ62FQPsgpVNeC9iLu6fdNgF"
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
