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
    "2btKNeH8QRdVqezVDp1oPKvGYtAWF3gDbuLvLh1NsDwtJpNomFsQyPhniNCA2yfehXRR3fS8yJtY3d18mn1SGpvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HURDUEcbZ4aWqoCTMG7Psm55HDdE6NTvri2daHFdVk667WHGEG4b62Qb7yvNgP8kRcVpRLpSRrB6ZW9ZGLs3Mmx",
  "key1": "2voBr9zhFWiKjy5b11o4MJaYFrBc3Y3rsfRGSygkGYgc6eiqvUyHJEyg5Zfbe3QZCPF6Wu8Ptp5CADDqz8Qox6An",
  "key2": "4N3gzSLmJM2otAVZLtiYaRTf7JgNkMi285L4YveLmVHvekqQooMqWrWKbNPfrEomEk1FTHvLof86XtPTbSJQhLZW",
  "key3": "MUFqfm7LDZTCvD8RSXYehzycyXN2SfsYHMReDsT2umuNV8YeJ36S4dSTbGEATDHH5UopNQgAiJUeDtgRE3HL1WT",
  "key4": "2jCX3yhvzj7XzuDuHmK7jDnaryHd8DniNy5ws8NwbjsTfGe7W2q9RrQ1fem7WGETNgCjSfspZ76djffYQAwmLv92",
  "key5": "9j1QJXovJiBWWMLwxH43vua1UrPWWUwQNvJMKLpoAZveMCMbTXK4eJmY8Xg6xZKiXRJpN3JtSPyXLEAbfWKPrY9",
  "key6": "5xyhj17ncbeiAARPyPHf7yTp7qjTmtYGwZbCRNw5c8AH84A4N3TNaa3b8J9zzL6rQGE1VsFQJL5piNBs9Fxekuer",
  "key7": "3bnErKptfnA6PFUiZ4EqCsLYBzJfZKy9t4pT5DcsxLAR5JMFswCSG2UZB5yqnv9MywToC3iaHYtue9s1r38BegqR",
  "key8": "8BmTLFSPSo7WJjL9ohDKBxu52q8fYBP4wj3RLiaz56UeAXcbUuQC6t1W2zvSDC1GaVNauSwo79qnQdZ8GujBzNV",
  "key9": "4vh3YYKSYghXbUUQUtR42uRv9n81daNBov5KnyK1v3ZCMWPVsjih5ruP3s846BLJ9PFFv8YVhjsN1XjzjNYP4aAR",
  "key10": "64CBK4ZJ6NCScvTheH2FULuryd6qfvy7MYj396mQWaYYCgETenoh3LNApWZAoesZWWxTuvt25DSFbnAU5uHJS9K3",
  "key11": "2G1AUiu6JcR2jnz4TRobUWQayuTuPFcApmNFEiohzjeyvsLhob674u1ht2z1QJn6tbMumXCAdcuhCTqJrx3asLot",
  "key12": "48LyKTwHU9H3hXRqfcpqPvz4uSZMiGwu6MVeoCmmC6uBb181iXUJkZYkwxakGwDNyyEwJAPZMcRByriJq5noTHHx",
  "key13": "J8fdsNB3pJWupwNCXbFh7tUUJvKHo62Wm2ETFDqiumqZgmiFBsGLCVULEK3MWpbWKsTdZFyNAsaJWP1mMz6N8Dy",
  "key14": "5UQ8Ydv578kRe1LrZQpDDES7xrREJNRtd68bFKFQu9Lnp24pVBqAdWEtcMsier8X9FBVnj298QzdYZMH6H1fSYWv",
  "key15": "4LYwmpVUAEZwPt7WnCxaizzws4egAWmZCNvsiynPZQQFRjHG8Svdh65QzsEWRFhQ3K6LwbSQ6RA6J4PiXNDhdEAQ",
  "key16": "4cppesnyyRCVu9FDGZd3GW3JWYNLHCzDv6GJpA2xZgq8CDCpuzXDqC39iTmNnmM4iiAX2eAVXMHxqTE6yXqCnV21",
  "key17": "5a7AiDviLKAQB8W1PLYumymEj584D7kntbRAaokvh6dqXzZ1CNmEF3C2X4xCMTqfjBxYtop1SbvWbWbU7gVRQv2E",
  "key18": "4dpvPzstnH6AYYCKMvSDPxWAHmYiFrcUBDGLjKeeKb5qZn3yirLv1ZktbY2fSJ2WR6pwbv2eEjZ49JVLmUgS7e5F",
  "key19": "3spj5Ydp64cFSq9uCGkLZvnC99WDt9CEtQKCgzDSbLjeC2bXACtWYgg1AEa5QNV5xRGsLaDMnK9N4neqXpD9wohh",
  "key20": "7nGpu3TY8bXty6RzghNEy7nH7cmX6i8RFsT5UVVQiFwoVbCy96U6c82xsRNoZpDZocQeFd271yWSqpvPjcFJCuu",
  "key21": "5LgPYi5VErUArntLLD9tEV8qQHSkCSn6R6uzyZBYSbpPfsvSGNDJiXGX69KeJJthfFgFe4YdrbAzESjbhMnePxQp",
  "key22": "3fi7BEtLedwcqReT2CevqppbE9n27sUfiEKkv6KXoj7iW7caYcs4sVV3VRLaEGEw1rW7pwWn7LQPZxpKVQhmZjey",
  "key23": "Uqbf24XDKmYCogc8rcj3VR2P3VBShdmrK3M7CSNXozqiPACY36vwQt4aRAWSPrgt2kQtGf4rjFPcJtSakbqfH7f",
  "key24": "2oi3im2fDYsvWC5FkhWfZBqQuggkeJbqAzauMek6uFyKNYWJoR8HQiQbiVcjR1QHDV1yzENZXTi3bz59Dqh5y6yn",
  "key25": "32E6AqxPWudvfejgtiLamnApYBHg8ui7jop9QQAan7m2aMr1dPtLLKRkmN2zYR1RowWZpnuu8SwvTzDyVtQ6oRRM",
  "key26": "jxd2E8796grbNBN8s2RF7FVC7aKFpSEhegUmuScpLkc5inhWHpo7Wk22jCFeXk2Usg2HwMkQZCqoE52kEfb4xRd",
  "key27": "5dKKRckXziKwQyaGsXxKVwMwoMnP2ziA5zt8Ub1y3zjWNVtLpTXjGjTuogoTTT1GcsCRi5iCDDMRmn7WbquBgxJ3",
  "key28": "3cqCdNpbaYN6w3steV44j8jYXSb472d59QeSK199omJijRpKdnBQksZSfyRvyrtkGrPKhz6FaqwDLWXA6Fc1xpWP",
  "key29": "5FCycBef8pxcJi3TRMTC5ZrYUindLxy3bbyRT3Q9rgZnd3ewfNjqQcvnpW13PRYvosZCWQVBxwdQfTkLrzeMSGXp",
  "key30": "3LDQx95BqVrYZeiAGv69frbyj6WgA3FNEousucoct8ABYQDGgSvEcfjLXr9eRBFFPjfiqhiKXGKfGVXunbqk1TK4",
  "key31": "4nNd8Av7vA53Dgz6nuL5B2wCrZ9Rb5eCu1uJUEVeueUmoDNk1mnq7EJHZQdaLty8TsU2VDgYQi5QqHcbYuVMs5BG",
  "key32": "5YgeFXYBkB518DJVhcHSfanHQWEFxYRDn6RPfxQMm9825N5eqYoZyGEfLTLcQoNUG8cyUXEoKgYF3wwMuAVTnkFZ",
  "key33": "5BPVbdsPrttZwLKBZQPmR1bCyz76tQ95y1v1kaComKNvLSwdJauf9keigqrv6S19qHQ5yyYTQy6ry6bZhGDqVt3W",
  "key34": "3EtQnds33oWryg48EUsw8UvPjcDFZ5b5T7wmqBFmL28DJBGpzVfF6QVxss1WG71FEsUhBsXnWtEpoenj2srktkfm",
  "key35": "2phpS47nwszDDFVM3Up9UrDfSUjG5dkPvGSHyrVDb1S5dbvMFp7MPdqNympDT3nLjCNkZocvkgtT4WzYhd81HzL8",
  "key36": "LF9KGcE4duhLMbMoWEvFK6a2h6W8BCDTBK23f5CbVdr1Ug3QewUrLoJ7ZP7jiQDWzsEhzzCTC4sxYTxzjqxwg7B",
  "key37": "558W9CCJ5H3187amwuBCFJXPVPNMAFYfswGcLkBGeQmBx7LQKP1Z5FTxzz38V2C9dJEoCECDiUPY4WJgnEVWfxCN",
  "key38": "qNiEp6wk9B5Moh5mS6nANANbUuU5hySzdPF7Y83V2vS8ypXTLKPmY7xg894WEJdzYq1oaC3K9682pXkiGui6Suw",
  "key39": "2C7nmTA5Xki35zFX1aaph9v5RW1MQmGsWEGwGf1m4XKs5XDyigemuc9p7d4bTDNkMrRtffCa5VoefsTGMLj8NQpB",
  "key40": "5d3SU2bYphDbU7VCa9vLE3G2gNafyibSM1xgyNPbqcfsoz7PPY7iWnDF9egKxH6dDiYBZUtGuxK7VzHHV18m1Lic",
  "key41": "uaT2wvi1qSL8pSNaXdZbRhnEGJfxukLzrTvMYooSi8zc7EQq3rnj7ZtxgrtLh3ZMHkjaXjToFZukbB4mZDZyaA4",
  "key42": "39XQirmoDoPYALaTrpQ9VJfqLr7gchSgitGDUXMPTiw3EaZZ4HF7gpaKueBMAdgCsaCnAfioQPoPNtmCACpPL9aV",
  "key43": "2nSJEKAd1Bq8kB3hBe3WRAHkZFtH3vSQuXsVxwktxbN1mTgX4P2DMfnGCXHsfKfXL8QPAn5tcNqV1dLCQeHUekuV",
  "key44": "35XfRNFBKAL3LFkx6SkLi8nWGjPDsnAAXTX4vCyonZbSrtJrVvAJJFgcpmryLk6xEnWtY2JoSZNtxMk5pkLXqFge",
  "key45": "4VDCMheyXScyoS3LvBbs177nc7E4zKx5xGVJaREAoPc9tjXq7Wb8GguHArzpkVJkeXJwCfpSXfhRJ942H4T5bWtf",
  "key46": "2id9UAxxvzvGoWLGhD9tXgp6Mo9KWFUFYP4kWZx2a2KZUeXDQLgQT6rfwJg2kej2eeUcFHnMUBugCjdxGcFk9Q1G"
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
