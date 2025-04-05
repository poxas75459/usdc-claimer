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
    "5kQCBKmYAZSQf9dd3z6BTGGsqrJzGBS2yovrDwsxWJMx374fGpPFfjwUMnoB4b99mW6pqXnwxneq4WA51xZyxRKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "362x4gc8LMMgYADBn25TJ8t62Xks8q16urqViBacRLiunAVnsTX4HaMHrS52CaFx6aTkGVRSMLM8qhG6xAGJvER3",
  "key1": "4YktV7Q8qR3hnoK8KmsaCmuXBA5ePZ44ZynFCQgBYP5rk3TY6AChArEvRFdUQhqbtfUfnCKiR7GcNZVtF2PTfYtH",
  "key2": "3ftxwbcn26TjzotyZTCRaaroFgQJe4UnDme45tuDJA5fkpBwskszcauVWpfaKPPaF5xPFfVN38RYG6V4w2osddDF",
  "key3": "4m588W3Qy3Qw94hyyVShaqKUr6Rwtij5zWExGhMc3M7JuSPVj8QaBood1uWHFxctMCDbM3P4pyk2etu1W57gdRbX",
  "key4": "wNNQXBhTNghvtNzWNL4XJy69PceQ6ktznQZfiQW7eFXxHJeuXD6kAvDAFBcmJJCLeun8WRociWzovXmkbgNcpXm",
  "key5": "4sDfGoDULGUcFAJAxYEBsQSY34TD3zykkUH1HshNpMNjwhPkkDy3DxtkWFo24zmddZxYMSeMp67yM6wi4SZPQqPb",
  "key6": "wuu5zCHThQiHUcJAYezACFwXhk431JJt5y3iJY2GsNUQ6t6GHKK6txU5AzxhhuVYGyTmzGHJ3mQKJWPPt1dzGkc",
  "key7": "RR4SVyitEgebVa3TKEaG7NJcTdrXyhAkr3mxMJQZZNqsjh5vboj9SL9vEEujxaNV8cC21FPYNrLor6B4EsiiioU",
  "key8": "4FksgHvd8gwcCquPkp23q2FhCSM6C3runmq5bbnjoQp4e4zj8Vd98XJsp23s3qYN5HNcZjgPFD5Y3wEnWZGxxbZW",
  "key9": "4gqykyRGS5k8tC3PoAWdJeMSghg8wGcctX8SACi7YoqeN6wNHuLnaTWfFm1W732D8XruGk4utem9mxS1eS1VfA8T",
  "key10": "4FpJdTFGwPTM5USAApBQ9KZEqoDyHepQi6E6bYTG7PUmNGyVuXVnonx32sR3KatDjZPLmo6HRRW3Rs5dpwPEwG2Z",
  "key11": "rZQvAbFdjxown36CdY7Dfipf3A3wFkfgra5xfsXjH3MgvzmGoSZFv1qq5WAucsdSzwEG89jNefXdxK7RhkdNxyx",
  "key12": "3Kn8BB1MaXKb3B1wfsRVZQ5ggV5tqcxoEi58hi1N1cWzwynabkY32xhmmuPApQXPB8QXcLk8XmVZQ3reFue28Npu",
  "key13": "3PcTF9CzdkLT5yssHNbJZMaGVhcci3G2oiiyPdhD9TNh7gzoG2qEEP51LJXyHKKhbzgGvrzrdhdBCFH71eiPwJFo",
  "key14": "voEWdLB3VLiL7arC1qAhLcuVuv67HGcWx4CTcYoWL4yHkwjvsFCo1diNenRTbuTXxtaeVQj32QmhcZnjxGEcELs",
  "key15": "2pMf6wQRvYtEwKsPAVorDLPSWQzvjjAk2yLgLTvoybp2bDXfzsc792SbVaPcHzG5N5mo4SqisimSRMVv4E2Lj3Pn",
  "key16": "42NDmsQaLVPYtSptApZVc7fZgMPdQu4BznSouwZ155YuJiEyPpnzMUBXAj3zJdPxpZeq7qXCVrsZDymxWVboA1cz",
  "key17": "5DQ5JUFweSVF3c19vQcbe7ynEXTgSHa1azD7XSs7dd3npqXG4K6cgBJ4tJpsZSMK7PEM7LkgMT5WM9p8a87jX1Ps",
  "key18": "3FvA6EFmL6fuJWh6ZCzfoCFxjnYdbfqrbhZLHXbF2ruD6ATuUZrtePb6T46zFqyaHPFy2vZAtyHmeSadJVKRSAns",
  "key19": "fCb9PtadXTUNYSRPKUHukaJA2mPFFRgwEgJyzJkX6VtV8jY2jbWh7nAuHhQLCQryeE1CqMRqjSskf5TXFmqmpsE",
  "key20": "2mFULw56FqRxF9PBv38rE3UGRpFJS9YGsKLmczSRtvyQrE1kTaMHMiJPvyzM1SkViLPuB8d7hLcp1rXGWjDzmRH9",
  "key21": "3qwCJXTc7xEhCWnyQC2nMF66CVFZaNGCGJqc1djRyYAxVFdHCMA88F4iUKmQxxnf3oAWy18U59oe7qMcA24Lj2Lm",
  "key22": "4LUk2jp2woGyqNLXC23SjDrUrw6Mrhhu9bPk5L8wJ3tSgTwKzVvNhPsEEV2PHjdZDtavXR4JBYeDsijgedjs2dAU",
  "key23": "z6wAD8Q797fvhpg8uvEEQQ9cdcQ2gnqKx54u9cP1JehD49nArinS63tRdnFpMs8mshC5XW1tPSd2jEz1VdHjPSo",
  "key24": "3VuwKt3hbf1cFShDRqa3XGvUYcNFhMSkzdxiAQ8PpSG93uu9XaHR9T7oCsmQ3ae2i8zsQ6riMnJNBozfssPnQXwH",
  "key25": "ZYEmoYhZDArEnPdq3VPJbNBSSgSy6bz4MJBTxmcNPQVEubQmAeGVdMPbs5qFQ6WjkBB652PRuKnoZQPMNoF4ku8",
  "key26": "61a289Fm1Yuu16P735Tj6TCnKuqtzLzDZ2txzMRG2g8XCdXkMTxfed9uy7BZhT1xFptqYM531nzbkUsiJpnKbtij",
  "key27": "63JzdrP1AtJRdz9d5QQediWx7PSecWAA8ge4x33uXB9thZvrtXZ3tMkc6qAYuKKpHi3egMxD1DWuzUckMbAaJNRG",
  "key28": "5GGyMyWM5uB6THh1zHeDSPziHQx47czhQoVKAaTp8DcnT3mU7YXBD34aoAECxZK13hpdh53rbLq238gAXtWdkDHq",
  "key29": "SdirM17gGD8qzNXYu1yFw7aJxaF7wUMenLLkXAy2hSLNXn4Hv9HjMyDNcU9ZxYN6KG6Wmx7e3PpJiEhoJxuLR8T",
  "key30": "ZSVGPAeGTKYduvrAZ2zHmciVgYuYpvxPF2sbfymWvUKeAERVp283jxcUJF2MJFdQpWrE89G1NFYHhgqs3Uy9SYX",
  "key31": "akxmfjM4DybN68oRHk5HrodM1VjQscmjTLbCZ3K58Y9tLtc754AuffkTuGEiMtb4EKsrTQ8zVxHnGh5Ka3kEG2p",
  "key32": "2dsow8ZXHWwfTLV787xZUNrTbBVNMda9r1TgikkPoN9Z5NwREZ6bY9cGY6kaNPEAy9JpZNeJu2Za7xVNexUtg51W",
  "key33": "4NvxFhMk2mXqR8FXoRHXqEMyaFEHY3BegLp8QP3KNstogYty1PyaMNLHx2uuwduyXL5srenrowzwQEQLrt5zuotw",
  "key34": "2vrt7mky3uwKjxvhMgANWuqS6oCVM8U4pF1rF116JUuVW7kvAa1ijvbAhQr3F9gE6JGqZtoJC8TEhfM6hmhczyVB",
  "key35": "4Rns1CU6apfyWWtxM3aaFsru49c554KjDB7a4WS6GrY6rRQBP2MaVq67dsMsGr5uX1unyf4EPNqmXhi7kygQax4v",
  "key36": "2WAfUTtHfMwL6qvcTarmZwHauB7qzgUcM8RTB4QhWMpGpfQc47kq5wkW3N6ArLT3SPJnSpVw9ru6cbgfLBGwZL7R",
  "key37": "GW9bGHxJLSQj7uQKzEqfcW9puen9PpWncmQtvTtQ5mwzVZJmyU3NfnLoJs9yCqGak27zNLCYQwXVdenxB2bNsW6",
  "key38": "4nMhpun9TBaE4UnipZ78cj4LDziLkRxZ6eBJiFkfbRWqry5YohrW3FVSbrVCPFdsCBo6nC48FfPwg828BTW73stf",
  "key39": "3RV1FqGitKmoTKQedw6odpJ7N7abZezoaYYc5HECypuTtWFPQXMCawr5G92MRmXcXQhxADkjkLcJD9KTL3iyickt",
  "key40": "5vEpZqGBH96AasKZv4Km1AcfK6uXPLXsZzKEHZ646kv4aPa9LBLaynxUXDwGiLn9Q3vut9Hkxe8BYQiU7i6WonYv",
  "key41": "2gC1vHVtapdAB3Vbu1MsZ4egPr9DU7TLTj1WPHwjEzCRDQaiw5H9hfDLVWuaGzwo23viJaad6bVu8Sp29yjc6cJN",
  "key42": "2xdFFosZpBTizRsTVnSZqYoyfmYFV9jgs5M9n2acVRFZE5EAzULnaxXZVfMLoBP98a8ahp1G1KWMcYfEK6is6iE"
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
