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
    "7Zafxve3QvxJ37T9hS4KCcuXqZZy5WGTpWudECgpD3oxbzjznD7d775mMaUFSRhdiiKWU1Z6NigmuGpeKuVx8h9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GYXZz6YS1sNCBzS8Cg39oTAgWoruwMuYXaCQrGyeHEsmGpKNAJ6eUhGk5WRggMfdqbwbPqvFNSmNsBSPfxRWfNm",
  "key1": "36P3C64qn9EqACeUbz4xgL8rB3tBjh5oGeQ6VfuZAhYdR3Tuc77piroPoRGrc7BRN2qQjHbT11NWAa6qx4nYUhSZ",
  "key2": "5jk3iA7d2mx4yPLLYNRGfCu5fVCtoWKS5iEwWwbi2EGEUaJJXGzcYLmnJgiUD71Ramj5ocH8bx1YbEXb4JBchfzV",
  "key3": "2gJjGwmKRvchfnwtQgPZakrB2T8qT7APysiTwqi6LeB7YnKWm381QzNrbDj1pZ5dgkpqnYje1pKhnBGVGfT57Z1r",
  "key4": "58jNn9YRGuHf97r5yeXc49cbLEUKhJzXSdgnEYTfXzr3QZLTHfQBhZZhjkYFuaA4HfhdHT1zfZSquQrEENkXqLbi",
  "key5": "xnMYo4D4g5e1iMvKkjm317c6hFxKwErkPbSadgBENTCD9DYKDof5S34CRvsT1c4WmyE9V78CCkzAQV66rvqMsg7",
  "key6": "5JXxxC8Z1MkB4YkPxd8hHGEr2A7SJsYymmvBTsbniFiWjVxMbRrTHxuv59mL4PsnvX8rxRc2BeQrXep124TSRYs7",
  "key7": "626zUKxPNpAgccWXbNN3axNiLdNMrGWjTXH3CADdU5bNm9FKgCWvVz4H9TvFnqwpM2X69eb6QhXigF4BeXsGCvan",
  "key8": "2mQ9R9puQrtg5d8YF7YouUzESvgUzYJAzDhXSYMkU12qUZKj8oFtTvSBN9stgvJPQHiqJEvFmhBBw5de9ttJEwPN",
  "key9": "2t3w54GsbiAHCc5chPNFnM5SQDy41NxgkVrCZqynHq4D9MYa7pRbaBFp4qUDgRhQLVGXpEiXx3ybUs79Ew2FEDMs",
  "key10": "4txY8uxaEC2u3c742mS3KDxY2Gn94UmYj1NsHASUZm74AzLLuwxvkGJdxQgFaGpqsNLAoqoF3JT7fjAC38mkgx7q",
  "key11": "3VeHxLovM9v3W8JCrWJETtsu5FBeHqwct2BrexRVZS1eD8VPj5xcvoFEKM4sxbB4x3pyJVCZGfJrJgx1zZ4ye6m7",
  "key12": "cHTBuD4hv88N3svVnUNBtG59ewR4RbgvSp2GNdfcB8c3P3WCcoRmW218sk66q3u6C74uvPPnPCfDLauXbsidyK3",
  "key13": "3fqwdsv8djdA4CMDVwTBSLCJam1aDN3mnDeaAAacbaiyoUPZRFdkXtCF59DKs6jtSRsnfLqoEC3owk68jxi26dvb",
  "key14": "2YnoQ4qkU6ZRALwegM2wJrsm17MHJ4aknuY74kheZM1Kk8Y6CmtP3SuzYiPCyKfKKBtuCah8dzcg6AkRDg8giDyM",
  "key15": "2j5Npyc3QAk29HVNyhGkMBvQ36JT1QGM7LR4vYPsKzwRDMrWY6C9Y8Q1PeB5BPhD6vy2s1zzWTzQGctSoinATiuT",
  "key16": "4YXG7YkC6e4ZSFTF8kjRewrevTTYDx8cbxD4NUoSJW7um59m8LSoKSaJGXBc8dCkjYENohLM1pF7HDX963oRLrBf",
  "key17": "4iYHJR3sPfEAAgv6z3AgM16VL5CNgNfbUj5qDtrVU6a5jXZ52g1xegzu4FnQ9ZrW4LFkAwkLaemwEbNBGLfFQ9Qg",
  "key18": "4d6ZaBwqXE5x5FNTLhiVyzUNSfrUZGhGB9QNvywxvaHydqGNMqTNzeGiWmvTMePfo4psRerTYFAAk5mu42eyCAzC",
  "key19": "2jZdeSPccMVBwddyCoEocRWJC7Mgw1KvtuKmg1YF448Qaz6sVWHsJSYEjRJsF3RtheHsaKnyok9mNQBrm5xeLmxT",
  "key20": "5PLChKXFkepmoKrimsqf3wzjGe6TV8EuUNCHEjyhGE9HZFKwdCHyicfYp1aW9Rx4g1Z5hVJcemafCaWVhdiPnAGA",
  "key21": "2FtWhwyDGoRv3H4nyF56YP99k5yxauMxXyMKBfknwFa9TgCrT94db8gqfGnFhpGXdvjMZhb8UfSk68UpvLX4cE6Z",
  "key22": "5JYugVF2HV38kA5f2pqGbjdTFvPrYmY1oMWm2EDy3FKB4S6HSMfQTQUTFFf5mounU23dNCnm5tpL4DPSCTSvuFuP",
  "key23": "5TVP7mHvtYame8BdsDNyWCSkx6drvmzHGGSCetbQae3YUTfxsaJEmSQRHsjxwokXwXgkhpyVSK57RLxZTw5ygadE",
  "key24": "32zPJ8L8V7DPRmgQ3Esvnk4oLzuapp28ux27Wcaj5Y6XKDiPzBMage1Jsuq4fox2GGNkoTtAK6jzqZrQfwQf9Cbw",
  "key25": "oC286Hx3szxJfgzyMfjunCnXh4MZ78LVofeFGJawq8moDb261YG58YsesWciwm9FTkeHfNg7RUCSC87bWsrYU68",
  "key26": "4X57SBhZoSAPXZCF7gLGFJYtvkuL5rMELUxrT8NCKVn962p7FWC4nSiXkNQeZi1mYEpeQpnZhVsvumSU6JXmQpjA",
  "key27": "35G26pRtmZapKpZhqAywrd8YY2Ac8ShPpG2wE4t5Vtn2D9tfU6Hsj1zRQFvkFt93GqqxR1ss7ibt7LecTXWxbFJa",
  "key28": "4oekazDFhxDvUNBayYdHQk6aU4mtQ1Fsw4fh1XMyvgt5ARyCisxzy8p3RquA79tqNQmFe6tZ9QoahvfBujg3azUx",
  "key29": "sW1raD1gGn9oqQKPyguGXUWJq8HBhaLe7nmy8acQVcYSbd9agXysRPNJZ8LrqEnufKrSRmiL3HLodJZeaABwxAA",
  "key30": "4FCu2Nn73s3LB4tVwkiX8VPvM6DfTYyuSphaE4NS9VzbSrBtv5QVUeMkcbqGrZhbmPDbKhkDSHqPKz2uKzDWMRfC",
  "key31": "2SjzhwKrTZd8utLZ59rquKF5mjeWmsXr2Npc4bAFS6UeamFCinVm1efA933vCMcbQBMqoMHDPiRznPHKsDbm3hsm",
  "key32": "4wVLdYRcFR4BEFq2xXzV7kcxiMktskazM6VEMWq8GYdhnvFhR3BqBXaXzaR8KE2PfLrawgr8mJX9U9nAiHDVeoY1",
  "key33": "59c4VZ63KyEWDf9TmPSWWtEu7anoWrm1RPNy19eJsMpzBBMAyAvoqxZPQGL4CV8jDvJUmow6GSsf8U4LJ2zx9g3o",
  "key34": "659WQyJxd3fMYomH23JN4daZAJX46bfoV7mwvBa57FbiMJskXHGHj8Y8oARprgtSgBPL2HvBFzAE8nU7e7mFuSF7",
  "key35": "2dwvU78tVqgVq3mU1B3GtUZ3rcFD119GhVJNpDKnD1Z72tKreWAfJpKsH8T2ETqNPds1sg5gWB1ZA4nA5Vx5PsWq",
  "key36": "yqyk3J2BfCcQC9XracQGJfQx1fZ7pKeG5ADDxZBx4tVUB3grFDLzUBVnnx5fdCPph3XbcuCa3CiFgfBvk6atZ5c",
  "key37": "3xA8pVVFynCpyyjodtWSGnsXrRMHtmb16zMUryNfxLfBKVcbz1j1QEvJ1EZ1hEYPJnfTjmgXHjaewNGED2SrW9DW",
  "key38": "4D9aVZsamnRcATYUzfP18miA3KPcdbEojYVfh651FK9kHuqk1FRyNFRCNc7AmZhZywYmo96UcqYxtJwbfPB9LJnR",
  "key39": "5jGDrBm1cb1nZRRTRxXsbjt4vnj9wbrf3KPg4Vx9sZEU7CTx2ZLCZU6jv9fUGWC2kA6stH2Vh8CC6XHVt2osyrD2",
  "key40": "4z9ZtsjrqNfnV3XRWLf3R3otN8hc8qWaLwX9LiWCxvjtaXMf2dvQSkFCRkNCJhB7ji2MNto4HbduUvj3vv5MzYRR",
  "key41": "2ZmhRLazBzrVkw3jmNgfjnNeRYLNZJwvqCs4A5uFt5brji6RqNPL6DU9j7JF6VqUWuaWYfYmWcYeGsrVYud9a7nu",
  "key42": "2NTVwE6tuas5a1zqK9jkmxhdkU1U2eXa4EuThzbpkdZk7bGQR57JY8gaxmPGwcFV9uvqYbGYBMisuqVz8tbJamCh",
  "key43": "Hd7CCxxbSRjHi2knfdDqzApLUDBeduFadvYwYcNZkT7z34z7xN2XBPFwku8zSxBz37SEmbXnKu3tbJZGQMAaQdG",
  "key44": "5JLMi24Gz2n2q7seazWHHnVtKcUymg3Zp2BhBJspogUE76dkMRoQue1N52vQqkQjFbWj7rAuryeiB3e3hFvEArqD"
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
