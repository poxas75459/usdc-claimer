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
    "3Ax5Nyvw6szVFDHy9KctRqjfigiXJ2WFRtz8jejzJEuyKAZgwScDyw9CTdkYgFTUWU6dNgNnnGLMFg3u65eoc1XR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JKgpSRa4ZPwko3P94RYSJitoXGmgZgsemnLPWLcr5ybA7dC5BnaW5BX9RMXGpvBng9axjw9kG9Qi1LhqLwYxauh",
  "key1": "3ZAQkbZHt6HksRWsLqyH4PXxFpmvsGoDzZuXG4L6n7RvxMb6JpyT1QsDrDuqVCMK6ntS98ZzB6cVrxM7iaJR9vJp",
  "key2": "5vxtBBYVkZGPfZbyBT99tKKRmUxLnTS8J4XF32ezD8zch215uPxYHVaJcUN1ZnokQ4Cm9karm7ejb8o5xWdbFL18",
  "key3": "3Tmib7o932HD2h8GRrKqPDLQcUDb4bAkF48F8FJLoN8A18pCEqE2A3pxVj7mNJNQjydPttnueHEtYPmzGzWueTL9",
  "key4": "2VECZ31Uk3oubvBfNkdynozt2rvpG1eUStbaiJxB922JjWfQTEnvWqsQ5DjPYcgBVmZkaxdRqei4hHS6xXBrEyok",
  "key5": "2JdBUN4aq5D8a6iqnkdjSC6Ntph5yJotgPmYEyg3cyoPbxa21ZixRXpVCgZsbNQVuAJjd2JL2JjsYk8Kc8LtxCkH",
  "key6": "5v2xKaA3NWgk3QPobUJAtVZeYNb4BpgnY7ub6GNVzMhEcCktmVGNLUQ8hNRcG9UR37V4b2aNKRZK9vRnERaTY511",
  "key7": "35pUesZeUQef46i2MQTj6fDTDLMPqkx8NtFCTgQNcGq9CF7ivTubeYR4oyuikK8FYLktELD9HvDf2Y16KEPgdqpU",
  "key8": "yX3dFkSTEwBa9QFzru8qtPXCA61WcSAanZQ3EoNjdXp3rteuev6YfGyoHz74sztXTt6B8fs5NiXudvTgq1xJHXa",
  "key9": "5DJTqTtpnf7HYoCLojKTUVWZbovTYDaCsHvCSpJ6FCSprHSebPfnFrMqgaKUoJpMbkpX9i9oSPDygC5S4un2SN83",
  "key10": "593UpcXRyiwiGr7QCcydDNt2yiV4wh4uSRXNnErtmd55uGjTpSnhgGB8MzGpuiV38T6P7LNnWxFALPsSnPxTwJfF",
  "key11": "4XpzJtmFA9HF9MmbEgCbEKTougqb1eZnbeN2DMxTm4dQ61iWTkN2AfDsShRer4KMpYpxBrZv4j1uAD47WsifMuR",
  "key12": "5FrifXqw5bqfrfQXmq8LEZ9iUfyK9bNubMsgvWXt8EobUffGB9rXQ2rnH2WxEppGNH3eTX1K4kYaAVRp8FAQgXrN",
  "key13": "62jztzs3q9KpLwABv9e8fEwbFy7CD7JqzrrypTSLGuvD9TctDYquz6HRNPUjSW2XrsSnWbSiPumsaFJdmv3Q7YHT",
  "key14": "2x9Z7d7Ww5peWuDGHMKb5TsofU27EKg9ZkvyGomBC8Yy1J9ySDmUoUkp7EPyJv21PNVza3pMHkkfWA7HTFbUmDGi",
  "key15": "2hLK9Py6VUKx1NmwhJdunwY8ToPNEQrbqS1oVCrLGqX17yq864Nt9SQ5EEUqJXmUQ8vwz6P9V17u3JM7WwiESxoc",
  "key16": "57yLGZMdhiscmLE9QbxEPQMQ8wLPPJPMmuaCfu2aoMorTDQro82cAt6S7msX9mttbTJo2fPLXrQcUg6FufQoCbU3",
  "key17": "3WHPJgDL4w7MsnzA6ErBb5sq7BGgrr9vZLH9LAV5WmqZCXXHZyCh555y8z2wXmNUfeM8j9kRN5Kbeig2gQG3fnEJ",
  "key18": "4AdmTnc7F9cPdJ9o4PQ2NdEynrXYVx4j3WuY8YEDDxvPRVmmGK3Cat1Ydm4UcM3bRzm9QdYSD5nbdSuefSsdXZCB",
  "key19": "4gRQEv6dKqgpAZACkMWmAh6qWVEvDPHtFgLYQRkxWQ519ZMM9Dn6Wcf9Fj9EfwHhS2FLernw2CQL7NRTQWuwp9Xd",
  "key20": "31p2suVVBvQK7VjY5mFYvXcxQsiKBgiHrpNabWZ89oSZ4GhskPtBFTZUFL5u4to25NwyEvcedo83MxgQPMk21kdH",
  "key21": "3dWTePfWCnieAxxkePhH4Jfaa8jnsjKY7DW1MHwT2wv5qsiY7ZEcCZ3UR3TtbW4xFDdBRnYo7RE5iDrRcermNCFF",
  "key22": "2FEuMneQXPfPWGqP71tsBZxjxN1eYn4b7gyYz1fAJbhAcjarkxDsGFCR7DYJ2nByNLW5Cp4DsHHf8udsePP6NYjv",
  "key23": "bD4pdTotGEw79PkFbjuYXFbCftuzkt3dZP3iNBjmw4h6CJh3LDYdL4qciUfscgVF1aR9DTJ1e4EA5yPa9dXQwmo",
  "key24": "5DmZucAJwE9XqgVxH3FQHLoVx2FcJErf62V5jvN3rU54BcERaAHM5jpBgbcPaR8nSzorNebEET4qP2GXvxZMbkV1",
  "key25": "2xiFCj1XijGdbz5E92Qyzc8zq6u1c9fy3cRG5GNEeam7Sxe1zbN1cH4GXKGnh6dzqdnE8fujwQXoBT5HZ8cjDbDc",
  "key26": "4uvymUxSuyzBc9ZEEgMoe9Uxu6n7EN8KoZyUs382FxjWFDnRrXbantC8yWRKKY7NPjXp8xN1UN3t5hZTQYqrZSTP",
  "key27": "57cVtaWkv76XYZvhYUcuFz4vRRBCJZbqCBkYQyeNEMHH1w6j21pGfRkRVvRguPHBEmrzgt39nAUhK9TwXcjeLNsM",
  "key28": "5iG94TRRSj1hsmrfry8bK2MD2Viv1e59XWFaSJoseLYnHzJhSjAu1x1HHgSWXX8ZmKfZHzvHKh46FgzMBa3XAJwk",
  "key29": "24nbk447HhmV7SE654XLgvoGwoZiP9LLK3qwaYf8i3hBKVcq2tDwcgTUfBgfykFUgGmYVpQ2mFk6HBkRc2nRFEgC",
  "key30": "Nh6xpGz8dhqBKKkRxCTnqokL4gCtryBokSDwwjpbYzDYoPYqnVWt7ZK83hiy3RACYGcHCK7RnY1jPx2ekaTEmN7",
  "key31": "3Zm5VHwCbDfANtuDemugM6q4nxAz4H4bfoPmgBZniUw7ou4CaEscDx3WRe2vJUrPemSnUSjydGfJusEhesZpDkT2",
  "key32": "5VogcA5h6q7HHd7bVdzDQ1jG5SiZxYi1H62BPi1A3T6C6pTgKCKRftz4APXWBA2WBFeVzXdbiFyg91QiyHp9LMut",
  "key33": "i9uN6Vr4LtR6oJADrXWCEzs8y9PxyPzssvBaWUkP9XgbRGJwCNeM7DfiEFrMjPSGCiALumbtLRTZdbGbgpsHHYb",
  "key34": "22MqsstGCRi3WDa14sQyowMNsXcJLskjXgywrzXm1seo4RCMPHmcx3wHr6FpRJbthtz4EAoxYRfTnqRD42HaMocH",
  "key35": "ehVPZc1EZF6wLZiChnpnGkqickBYQV5egrwyqC2dbWsTxVb2abNAuZpyEnMZMJBkPQaySsQb2ArQ9BvtvwnXEMR",
  "key36": "4cadf4neRk9pqUbSEPZrXX7zvbkpmtbWoaqrHH5Cbu4amZBpW9tVm4j9iGLKBmMSKE6is7Pb1HAFuf73xXFDfAHA",
  "key37": "4pL5YXNewAgkXjMi5ypZzPDkAs3EQz5PAoZWhfW2Ucd9Us34cUw2qtB84rrB6etW1QugVseeePWZh61UgQrx1ZRU",
  "key38": "5kzXbeBWBDMnWTznrES7iyesTEGaAQgZrKZxz1D5vL6LTyKT6KUBeqQWfUZisBE6jRHwx8HaVsF3CPESAAVWGXWz",
  "key39": "3rCBzgcvxjY8295zL4adUp4Lin6CccSZL3Vj1cV7j7MTzrdV2bkMQQ9rBoVWumtpbJbNu7tx7ZVEkv6vhCj8EsN",
  "key40": "2Y61FLXwijrcQSchy3P6apTBo9p3VdA3YEh7kEyQTbKPGGSssEAdQ6cnabKQRT23AkVQeDct3Fm3qWJnVLM4jBiG",
  "key41": "4dQw6Vs8WbCVpvMnPhACJuspUVLynyi6AoKAthKEuneqsKRMXMqESxmm4PBjCjAixaEM7djU58W3TazhRqMtGxew",
  "key42": "ooyE1hv19rAkFyHjzg1RzLamvfndBssa1fwhNokvJ2uQbpP1g1yGkCSkPCkBsjEp8ZDgJD1P9As7GoocRJ5bC2u"
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
