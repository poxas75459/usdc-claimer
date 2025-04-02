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
    "3uD5hdmzhmfxiQAdD5ZqvyWs514gpQEBY6oGcSpJgaEBM6aHHhrTfJumiakvLmTaE81cL2xAvTeQa5sih9UbRMms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hzTvsmakiGsztYNcTLFMBvYJU6ZKudwFqN29S8GTUoVufDmESoDvKEmHSYHmxqUfuoybWdRLj3m8BBihJ4TUrWY",
  "key1": "3wjhRXZjkYbLVUTAce8zNx6a2ccwKxeZqeex4zkF3jTqXHeCMWKdNPgsUy9v7h2s9VW5bmj7osAsi5owzjSM4GZp",
  "key2": "hdY6D8GuMC9Uu3F7zS6G1JFx8bvdHZqwza9uUHfteyuWrH3ihmUyxNjT3zUYwNFVGSWxysKMTPmwijxH99anCa9",
  "key3": "CdjSvazQcank61C7gtdbRGchZjZUBbm798SH9PCsgFa4FxGHVLsPxgpAEcjUzNBhEEHArWzhEMAkLWDbx3cqURz",
  "key4": "kDsgb3iXpDX5EHMfh3nNBQYrc2HgaJuSTYt29eACjj6V2CYT6n9ZFQFXLZ1a2Vr4vUMSbKtZYBkQUmDuhxHHYt4",
  "key5": "3jdeW78mAkzE8dBsBF3WFTEHdH3eXmVXHRJkUfAdHq4yndxDupWKfgpkdhVXCfMf2GqmH5jzQcjQM2RGeybgHoyb",
  "key6": "2sSAfZTUi6fyf6bnPRLz2ZvrTgvtisw97yf6wvnycR8bHMwRoGFARYmTBcQ8BQMTUn9FgDSeZjomBgrUrMNRkNaq",
  "key7": "2pS7GcH7iD4sLc2TvcsZjwWESPpUaEnQ3hwWD8Crvs64p1LiDFuZk2nFELkiDDShG5QrAFCkyHPvYGjwGQ1F3WMt",
  "key8": "3DsE61udn6sT3pWPPt1vTAW5tw5L6cvXptTs7hBoDvxTTVisNiycMZiAiYwiVNxBd3DMwgDCwDS2d4NjXarY2daL",
  "key9": "2G8MPPT9JJoaATZ6rwBKNEB8dd74XYwn4kWCLq4BJRSgcfWk9HC4YvQ3yJcga2uBDfJMxjLbsBaGq1PH2jxkRSzz",
  "key10": "22kJeeJJVz2i1ojMysMNECUMsXSqSRSsicnm9hyqZgmLA22GYpo3tpQhSBRm9d86K68zKPYAzLE5ETvXkDyzaTLS",
  "key11": "3NcurC4Bechd4XKeamyQGt9UdNgpw4s9FeJgHXTy8s7WZ2Hb8Ltm7w2pbuVSGVurLVDW5uSkGY9YAdE9rerfPXqq",
  "key12": "2BtLSU5BY8wJ7DNX56AVKUwvXD4btuvU7ey7eCm2SGXJkXYLWF1zMGW2HMqnVm6RGzct6pRweLDFaLFa6MzskExL",
  "key13": "5TwQKuNdEZsw14R1A9GFzWoQoA1ZMijv6xpbcmv9kzcvgzYBdRaW4FvYHacNt3cDKT9pAPx7RaHvRJXDfotaW2dy",
  "key14": "4j4QkoAVULCsM16YvqZMpLZ11FQYHgr2WpRrFX3rJfftv3Bon8uZ5TdbNX4yqh47hdU2h2UwHX55fHPxpuZHsQ5Y",
  "key15": "4ATYSUqrurs3hQKmHpeA4zG3EAmKcWKr3uCo9V8UPcCxHbZ3MTTycmiaSEBtKVzoXD9f1je8EvTnXBvMHhySb3C",
  "key16": "2Yp4iWKnNo1WxxMbGfVPiBfYPg2KdsYmZGpsXRRwwkqAQq1HdDT455LjA6HrjCruf9MDW7YeM9GLvYqWBDT2X8wH",
  "key17": "Zo98ZdsZqoL7XF7pqWsZUPDoCSWAYS6sjCsTi3h5ze1UmMSZionTKG3kabXYzCQ5MjYPCcFKDhVYHeZf1CRpiKa",
  "key18": "53hTn7FahGgzXWimHtoh8GRNZQPUz3MdTviwDBSHHiuyMCn9bpGU1VPaPxe431JjGEUmTraqNG1S6StPnE8oswLm",
  "key19": "uYRr2X3ZJMg9EAjPKGb8cDLxMYnAbm6MwCQGmyJXSW2S6T2av1E2pe35Z35eLRBBm1PKxLmFGQ19SUcxFxyBu7A",
  "key20": "2D64tQTm7G36SviSpz3Uir77wJYD4PhoTcXaNDZyUWtkpZwVhwwThaH2Jsmo9FD77Gc457ddaq999uwmRs3SV1Q2",
  "key21": "3wc7rvyXVQEKYGDgT8AQgQb8oMpfUfi3fTweiPY2KJ7maTBpzzZgzP4mx8M3U7JMqZde9JkDUpkwJB8gYTviEoQp",
  "key22": "3ZDEXnoPJmX9duPiGZdpNmrLAXCSD8yvqVMKRxsCD4wXrazXzz2MfT8dxH7bfBpT24uzFrrjAWxp48Y3quWcqJR7",
  "key23": "LSiCBJyKuhe9X7Msc2nXPDCUxSszHra384qBcbVEqQhSH8tsJwTgHxkY1C7tes3DchZPMXsx3GwvbuCVDv9nudd",
  "key24": "D8P1QnDvL8rX9QPi7VNnLZfc4EzofJg91NiMFYSSjBzzGDc2Z1BrQKvKMvjeNsNabEbKtrxcmEFoBNbCRmuzW6T",
  "key25": "45CCxE6Y3kraUitGDBBcPbVEtWyWwFy8wgszSZ2CHAgLgzHxh5Eq7fhAqgyVeszLG81uk88qiccCE5Yw7rTho5Fr",
  "key26": "2Qsbm2DNmyZpE5dNQjDmRQd999XizA7b67NxEq4e2gQiza6fCRnd4AeK3DDtS6buDu1F1CUJmFirkbesHAMqhCyJ",
  "key27": "3p8aif3GqSHUjHtoke7bDuqyojwZM3GeFBvZ1K26RN4YrEfUoxPLZfzErvvAhA7z7TcAFVnSv2FFSBFosyKUfaH1",
  "key28": "2xEmDTqvGmpjs15Mj5ND9VXmHXasgfq7NnyXiZsFJLpjTB142GzQGgE2m6iBoDNa1PLMdgDDPdqvWNxU8eTgt2YW",
  "key29": "5DdZWZrgAx7qNmLx64hZ8z2AAysnpFjupzdPDyfv3pP7k7hAwW1rbzRB9B7KVtUp85zf2ScgRuV1iZdqAWcott4J",
  "key30": "4ikhPkAkWW7yRyfXkW7yRSGNhkXfxrPUzeXwSh2RhsbbuQDpukAsaprnmSQ86VUJMS4pPSyXvMNqVZTrWjqgzTh9",
  "key31": "2SmSswSo5idzaFUzeGYCfLWwe9FKivQ3xjg2kCv9DnUeBuV42gD6M8eT8ATT7wsEULdDGdGDa3xi21rp3MFW3y9d",
  "key32": "Y5HuJUqQyajSyUJfr3qij59wKw5YXnY5R6hKVhLbjPUz3dG3MwhzS6w9zWPCFRtXWa7f5hZkDKGtv1yawUcQEX8",
  "key33": "4vSWjkxF1hnmzcU68LLmTJjnMYK76JNCaosgLn9bxmfC6rgnFJabEu124wmQvrNYuQpXosERLfmyhUtzmYoNW6SL",
  "key34": "4HFPyrA2uJFCqVdNxFxkBJJnFfqDMpnMcfuvtS5dDdozMNb5Zm7YBv5PiqA2wdp6gQvHmzeZMrn2KHjdHLvSMgQC",
  "key35": "2o6voYFP2aT7t2KrtRcVsDkuwW3LW8U5GKnBa6qMdU7kw2wse5Rgc2MDSx9ADjRLV66yyrpJSsmCk7cNK6qVKfgv",
  "key36": "3DNL2Dv555S47EGC5vNsoN21owSA8fT1XEQNwpdrLV9PAQstik9nfjuvnsHEfgih7Y515Gy5R2BEjgyVLC2YivsS"
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
