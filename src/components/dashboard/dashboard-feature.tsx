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
    "5ELAo59w8X9ZPi3wc9yH1qUVejehT4WEqFoJH5Jig4aVj1isnUhn9rYhTuWpry6nUL5nxXeRfK8na5wmf4K9vs5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fty6LoV9kXnG9ZmAiAckYsC3iSsYkSGcjpRJj8TCLTtMiU3djWTRFaiTdm6xXLhCH4T7HbjNpiMDXWPFn76FuLt",
  "key1": "5BPvHyBGdRfsoktLx1NqjPBqy5i9wNJ9vMd4gia3caqNsao1T5MppGd6y9WX3AJiaQxCmPntB99Bx3MF7rCiChdg",
  "key2": "nNStYcjzBX58UmzKT9A65HPtcSfCJpA83jtWR6whvBvEFs41dJM5YkYeGdgzap3AykPfyB8NhQjofXctbZKj5dZ",
  "key3": "5scMQDEv5UKCT647p6HapRgU9Q5bPj6KiTVk5Gv1P7UAtwBrDFjiSBMnKLifsiq8FNdG6TNmy9kgYjnUbPKGbV3c",
  "key4": "4TBQCvuohAPyPSnkGW7ST7hvXCpFo4jp5v6uK79oLH178HxPvCMm9yu7VcEubJJHyzfXFHR4SE4JtzTPhPL8Qkgi",
  "key5": "3JuMr6xgwfmhxEGDLwKYLeTZop7yeTwaFrkhMWRMwN7HJF2DPa2mJdyQUpNpGBUwicScQ9ujTKiisTdx74yV3pgi",
  "key6": "4C9XZji4X3d3sCg7MwNibGctYyEM8wd4jWZgPWWPkvpb7UGK3zqhPM9FvQjkj7371y23HiAtDP3XTnBMYQp9T2xa",
  "key7": "5Xuq4TusLddL2AUpTSx3rPwTnuubgjXFJsq3eM9WAK4rxsAMHVxJDtNTdzMicpBp2aRVp2HtYeLiKnbvsD7ygqeR",
  "key8": "4DnXKCn3nfbtaRAFfiqzAhDjzjUW5nA6E8kZkCK8jxo39bNAg7MDY42QBhx76RjmhLLowJXNuLq3jyrNjf9WnfEb",
  "key9": "538WAtu8oeKGn851VBUCBsQ4VYMTCFATqgbDXU7MBMaCk17WFhfsE8i6E56YDeKM2UtDXJ9MKf7hq9haTMkR2mwx",
  "key10": "61TuKYt3dT7jrDYQcn6mcFTZyPedutqyxUwBhCb3Fyr6LjFZGkaghHizTmKoQPB19XDz6fnWcSm629bzrPD2juGW",
  "key11": "TRDF7EM6iiZ92DLF6nVZdCGbHgzXRN9Qc9QgJCnxhmxTZS51hyhNFfswKtaWfhaqgkNhdgxwaEPmJjTssiCFDGU",
  "key12": "5vvwm2LrfyZ7WZgfFkoki3sVxjgw6FvgQPZ8xdkCzdEFB2hcpAHn2PiQdT7eNZecqjymSkTM2QiMALkMi3qLjJa3",
  "key13": "3N937mXkEsAZce3gJQKCg4qqyw2VCuSRpkJGpTXNerdCBadgiFvwukURq8C49z7hhkUPHsoQp28buN2BhgXibjij",
  "key14": "aEc7EHH6jT1aD82N5mvBNkqwcM9rAy6WuUvwfV47tq1ENyVDSVdaDgpKvf1j9NvmToWhpzXYDEwtxTtmQDv5cgs",
  "key15": "4S8aHXiF8ziShq1mA5zWwS6d19GMF6WZRzcktpahQz1VgFo8mLVUHaSfsEs7an9pgHUaYz3Q1B7GXnsmS9w6UsNn",
  "key16": "5xvzFiUFKibnnyA88mqVcQ45RTmyYodFehSdg1gBmAHNNkiZPMdm5ur4QCDjhfr7BwgDdLPMnKDmZ4oiM8Hsm11T",
  "key17": "2XmphKEPM9rJZPi2YWSJ9e4bqrY22pUTXeKVKShsK3s6j5jK88ArjWu1BYkewxeA9KW4pHmJkzLjvjCwMiE2vZo5",
  "key18": "2vdQmdzXkbvqGtdV9EvugfKcRAz3WEuq7QYJuBTHoud6WzZFMecYZQoCQ5Ec4ryunYyeP4D4PkWxc4LbBxWMrukF",
  "key19": "4q1vtMc7J2s5QdWf1w4sJXg8WX3hxWPwWNwMQXg2ehoJ5dUCiZNQKvpoqhANBVFk3xHPQHzLf14EtZBybcBomK9j",
  "key20": "65ipG7HY7Y4oNi5vedbTuNcrUwnnZ7Ssm65AeTXsUD9wN37exAt2o1LJHJ146Nxd19dR19aaosT9f5jkhzAPtGCN",
  "key21": "5v5CPmB5ZPeq33D7RWaPFCL1Frou2fySPpjuyxoPDZo2VrLSDuZ73Gwf4d5QjmrBbAN4RqQDwyjfAZiXSZHM2KNo",
  "key22": "5zaLncRijPPJTiXLaPJSiMRtqdR8hZeM6KYG72HGAAkzQRHmMSTQJERiWeyh9aAeBg6AR71AWuuWc2wMe7icdNGj",
  "key23": "226pWkcQ7NiuXP96mZDVCP31ZJaCQCTV4rWJe41ocURfQH1vjWWGcJy8nqUxote1Fc6Unjk15Pkdbhs2qU61eXie",
  "key24": "2kJska6aV7vrMp7zxRVfZL4S2SD7rJPT4JsazRe8e1exAASHuEtBJtju7wn5zTV5WGYcY1Cqka4EFBM64hc4orLZ",
  "key25": "5U56iamv2V3sUAAxUpjfeBoQMnW9b6jN1LcjAfFn3NPwLeeoN7MdyUQwMUoajqYHJJ9hnKP5ZuRDPrT1BZ9hAq9g",
  "key26": "2jqf3NZ6nQiMLKTGBtZ52m5h4Mjq6JYpfemg3brcBsWFTspEqqsfqTugkMpXnEqoT3J17A9bVEHjJhqN3ekXgrYB",
  "key27": "21k1TN2cHfFASs441mWyqWqUrpxW5jtwzX51Xppw7LxpG1zpKbN8tDG3chW5ieVcM58eUS3uW9nzDMM9mTPH3JJH",
  "key28": "4rUzNm78ME1HcCUkkTJXHhXgWYnRknEEa9NEvpZ9aebb39ZUR8T6BVqRxD82M3gG56Nffcm8S6QHMHXmJx6y9yh4",
  "key29": "3ygppPLLonhGS2MYbPbGck5JBX19Z7PreEhPPJF53CC8joSfRHugEZ4KEf7BPFUi3QaEZu19xQDsS5s2ooouDQSZ",
  "key30": "4362qTbb3xiZ1V12pF24Q8brjBeKkdqbFF1CE5Jtn7Zzm6cFQZQSsVK7rdz1wQ76czmvGoXtetrt2Ua1zCzWxTtt",
  "key31": "2TXtiVvQ3UBaSi1qzuwJv5munGLF5ZuT7o1tG2d3v97zBEgkKtNFXE233Xqzhzbon4BpY6FeRuh1jR7u3uVce9Gg",
  "key32": "3jaZo9LLRhWsozKTGodtQ753VqYZFD4x4ZazcC6aMuRussrjwQUeHCLjbDDQnrUYsjwQvcxpGuuCuB8WyYiW8moD",
  "key33": "SaGFjxctLKFpmwVxVZ6VDzsEvx9rrEPZTwtH7W7E5sGrZD7fpEm9WN6S2B6E296cjNvwbz3FtGdDfXxJ9FQag9z",
  "key34": "338RtSceU9LvGBUXbSMgkMCH6tkXYJ1a9shv7ripYphujXJgy39YHV96nTbXPvJ8e9ty5VYNESeGgJWg9NCcqYEy",
  "key35": "3tQvtMdNNNyv89ZCAonUQaUcSoCpfFUQP6C1eeVnNDYiK4QpW1orqbR6qMLnNxPbUMFDZgjcosWZCFZbCbB8ipdN"
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
