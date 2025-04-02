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
    "4Ey9vx93KYxbMGDhhdqM4aecMVWN6A5dHkUY853aMzYcMSKnRaKTiHrJ1HnFxwYmhdooxyQif4j66HnijiTs5th6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hpx19xFUExMe9EZBHTtUhVimTQjWx6yxgpJ56hqTLCPeomHsp2zsy8sn7Fn1tz7yBaoTquAQrGfxGHhmF62sK9c",
  "key1": "5ovCYes9Kn4yiaw7zXN8t8rqMw79qDLi8ruyLQyLRdCLuzt4giVzsp5PxqpFrVNg7tWg41wVCkdEpQfBMQoqXCFw",
  "key2": "2GUbvYctgW1Lj7WvCNUqRazYpPibjix5EFvHeBUiWaBBroL8putqc4HiihNj1jKy6TRNFqBPuXuowndZ3Q8C31RN",
  "key3": "2KG7uDHLEsPJRBSaxKF8Yu27E5xUUSjWJ3vuS6XGCDbci9EMtmSzYkqU2M8tvTGywuZ4pMHosq8EwXHbJiEUx2a3",
  "key4": "22uLPMGRNbDqaMp2WpPaXfXYt33kYGMnrb2WnvFczTqGNJVcWgmrJDZAYPw1SoMQUNUBD5vP1Ur85fuaiMVMEqS1",
  "key5": "9xcuHpM3wXBHwkmPAt3rEx1SBdbGSuP9dfTB3cLgx8hPfgCCU4P3jsREDmNqZT7ZNMbij3FBUa5n9ocuWzNGZf3",
  "key6": "3mYjuMdwK4END9QMdhvpAMWrHDgRfN4TZsE3oC6s9qfx4ja2fJn9RdkNSRRfEwSdmfn8wXAAZPSufQ3FPHYPADww",
  "key7": "3K9jde5nRiuavfaQCJo9XX5REdTisNGakp9iGapAAFtpHwQ7SfVmfFZWMy6pHq7GPW9xh2ivdTMG1YcegQyCLZD",
  "key8": "3iwNSLWd66rCtXgutRQZoe3weUFY3L5Uwqp6BXKjUoQuQa2SpLH2Euc7FizZTt45fqQDHvKXS9HSR1z99ZM5M2f4",
  "key9": "gXMmLUGtpFZdUMFCro8WshCNzPjGLEo3m9bzhC31jUmKpXQvgvDoQQf73SFNygfPR8DCtWnXjQBedvz8yoYM8zu",
  "key10": "594fVvLsFMXtvoD1gwYgSWNdkeQPp3YWytCoCzFC2pV8EWrxDPEm7TepAnm2ANJxvJAfBwBM2yDbzxhxpyGjJeYA",
  "key11": "5368TTYgyCSXUipXftuZgBHNUucvDhHgKhobhBUogRDnJY5VieeNoeiHFn7vEJFHecBZy4H67ZmxKijdTagL2vgE",
  "key12": "3iSFq9bygtRnbBexVebqvypfMVSSQsxrRc5ugbGs4Cd1qSMadH66WMQEBE1Hn7epuqyE2rNbbz5rApnCh8Q2E6iu",
  "key13": "37UWEabjD8wu577sKZaKgaMqoD3PjD9ipiSFUeBcuAJs3aLDZcdy1GDAoZiCibgXYkVJ67VHizH3Bw6ZAd2jV2yw",
  "key14": "3YKefMqyazD1B4CUMjghViwM6TxBQRGryHPoVGMyog3b5nHaYrgH3pTCWx1F7hirWUjD2fvYgLpXCzVchYqRu5US",
  "key15": "4H3Y9hTGuy1K6cPzNZezTraQDiYTWLneLZcX15xYj5zSk82qifFdECJ5wT9LJhN6Piww2Kvb9aejML4pDoTNZ1nr",
  "key16": "RRkWKXqkwF8qezRCYCgzKJQmPNmsK6RGhWq5NWMjG1eSrrGy9uzXDJVtUaTU4QNUdjxRMzDCW2E6Z2vgFQ3PENy",
  "key17": "2V9sjnHC7YGQQuHd9TrWXgepWuDxhxyoP6FjzRSt7o8ZPJKUCtAizkw3zVsLLeSdhah7dFTnrLqzrV3yJw88g7dw",
  "key18": "5iZ42UXjo5p8AGsErC5BWTqgGQsB1395DMHLdJVxsrQNAnU3yKBG6ZzqtmYxLiJ8z8BQSi4D4LVKu5u4NgNSXTKu",
  "key19": "2FUP4VussiVkwjHEFMNPjJFbibsu6LDHDgewbp5juV6undTY2sFrH41nRw7TYpB6jyTMR27nt7foM7P9tJwv8wPr",
  "key20": "33oddr12e9QM8UGbzn9SqaXxhu7TRTtemoHc3qpoTVpRnU7tKo41sR8eJZ1kAH3HoZ1mqZ8LjgCvz6paxeMUSPUi",
  "key21": "59vQpEEmNdQk5h5Pz9pPz2CgPbqeQ7M5k8qZE48kp74U56dxmwynknXDhgEgCUeXGa4cgawcapxyAcx8E4qFnXKh",
  "key22": "22hbzMFATeiVjCz1917FixyPy4ZboPy2JnjwFodxfHsoVRy5NyEPkqWduxvEBBZReu1PxDewtRtXpjLgfZjRfByq",
  "key23": "2hS7jTJpN8v97rtTAmYVxp8eKsHnqCixBP5VwVNDw4JBfV7zmSyNywAUN8Rr91m4r1YJY1cxh3THp17DdLH45V4W",
  "key24": "3DRSEMriHTQTMG4gRcSFRmxn8qZB8FTB5JAqsk2Ty61k13oTS4PzVC7UM7pR3T8Ghf3Y6qgQa5X4cm2NDFjXcUxf",
  "key25": "3Xnwkwhx498LpehqrsZmJWZVoNZTqQ8L488PitgSi4g6TYN8YEKSBMHmjNQswkAv3MHtHEavCniBrqTJHAXswz5X",
  "key26": "2VYNi6LSUskoFqZn1b5WWD3BYHLtNRrUst4BiR8n5E3ECCX8dxcejCDHbknW57238xze5c1WXw3dZRK6btw2P7P4",
  "key27": "3ff7tTMGu5TuAva4kTGQdC3fn5SzaWYjDCKMmaXc8hSGWCya1FdAbiBMC7qX4YyXWjsG5JxPbAhnyATHZkmhc2RV",
  "key28": "V7QjZ9oUUjdEfx82gknRroKFdcucXma5NvC3VWMphusjf3gBgbphRwztE94KyFrvkg7PNpKFs8UdTDKh5dQozWd",
  "key29": "8FTPJEd22kD6wZ1ABp1GgVoLEZW1YV56M9ucqvNubbEJMgCvBfVG7EX7T2CNuy9AfQ5gsDchnozEprKq2bnXhwZ",
  "key30": "xQgQBMVxp38u3frYscu8HEhAsWEVPEjgkq7SxU48xoHtT6TrrvktF1ip3shsPjXzag9R8nfdk9mXHAnFP3MQC12",
  "key31": "2tqECQEoBMEQ2TqhTx72VdH74QwLnkVs9K9Ti448an1JqPQvdPXdTfptGQ3zJmttog2cv68sSBv3nNZz2ciCWJoa",
  "key32": "4xLvLPDUDU5EeMFqxwezaEG9BbZK3RmXMuqengAJQk7WxigYJUeRTz7zHWpqQDsZrGRDBGAsGJVtkJq7fN7ALirJ",
  "key33": "3DFfQZvQ3HGCPiermjJUwNkB4RqGRABN7uyC4o3RP7cjWHk3MU9DdKG5tRJKJ4Xh9r31Z16bVKHRfbr8b5bFKFcu",
  "key34": "2mQDLAzb8PJNHbjssXczGEvnEHVef3QSZMZWCLcSKLPARqBiXCoNmhpyuNsGRFUnt6Xe76dMLrVF9r3aH4YbmkN7",
  "key35": "5DUQukpEcj77iEpMwWZqjeyNbJnzAs6LvEE4xaNpsw3wep8HuyvkHyGty9aviEpm2q249pYjYnbHpDjn4PwcNBuW",
  "key36": "43SmPS7nGW8z2AzKaYb2KeDp6hcVZDyCqRfobxNfir5m5PXcc4WEfRoxSgSXC64X26NkKSmy3dzhnLZeggd2WGPk",
  "key37": "4HU6mvev94gdaQzWy1u6ujLEb8y9EcWMVH5xhwUcu69x7xrDDTstb5mmr35Sm1yuJBpnGte3t8QwfpxLYRBdfboJ",
  "key38": "gdc2ZdggpiRaKGjzDZ28fpWMG5dUFehzpsTPFL9wG5Y6GwmKSVN6V4sLFt6Cr3ootTRGxFxGf81T9xUdZDGWPpi",
  "key39": "3gYcBfoQ2buXJYVJTpm4Jgn4Ue6yhy5V1EV7Cg9N8PyyT2HpTtwmrUqN7HUqbTaFx6ZWUP7X2ggqHrZM2mJrL16P",
  "key40": "47aGvKHTx7Zf2wkVJyKw1npFpK6kdFx8Dnu44q3fumsdT7tmao3zwG4XBPXj7UjTsGfvCAjdJPWuFFuGMGy3Cx1x",
  "key41": "scYvCpKeUJXKQvrDo1n5tm5BpDBSLKha4oAFtVKKzMpyptJcKQxgh2YmoTs3e1AixGUC695wRv5Ji4SmirwT3zB",
  "key42": "3vzq1vXQTYC5ekeBQT9iXqDYhBHmLJ73jKPKRrrq3Hb5yBzAeGRuVtbv5Ko14ffjjfwyrzFchtWwa6dHm8eJxWQH",
  "key43": "4bBtQd4QsQDhK7vy4eVkhAMQDEfbxfqnG4VC7dfjtMbkRFJAB4pCHZqu5mwPHTAfBYiMfifF89RCqGpGrfs5t1Wq",
  "key44": "3WLtvG7gbsm3gWxhGFvU29tt2Xf4j2tiAP78n5kSTESVQDmG2Hu1pAbNVTVbPcZfELBar5a4EDtXhiVGopsrX8pj",
  "key45": "4FWvG6ZJshA1gm63rRqGcbvAetCJGxUiH87p7FkLYzSuEuBK6h7bFVHZVVncchUJxvajUNcJydTMjtp7utLwJzNX",
  "key46": "4ausLZzuJXDemMFmg8oV4v1KqWYmPDyUB1nYyFnWW5Qub3deKMCzRSSN6XMgz4Kv5wmW8UswKBfQMQQu8YSYumbV",
  "key47": "AeotA48vsVooAPeY5GSp4ne7PLvd6NgEnfFepUjP4D1uuFw1c6MxKaPhHrVx8RCnmSf1qwPsPFfsGi8qVgWNYYx",
  "key48": "26MFTDgXYrNrjdASZU6Pc25AvuV1rvYNDs1XZBhpTPqmisENi6irmn5T22oPfWwMbFWfj92a2YMJcnYUD8LAA17j",
  "key49": "5EDDaCU3EdHAWGYtq23V1jT1mdReELRKHoEZs5zecACi8aAscp88JCSP3sboKZ4Jt5HqdXwf79PTQv8frF1vjqcV"
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
