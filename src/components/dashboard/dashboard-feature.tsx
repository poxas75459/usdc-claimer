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
    "33gbCFA8Y8Fu7GEcT8HmrKnnA7Sgsn5ZX3ufMNPRfTNYZFGfd7nDyePeWkvucrtrtnBfXE4FWY3Mj65wpugRtBt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nsRJwEjAMRwBymwr8upWps5qbVfXsDgfFE9cgQGVj5QpnPCwAyv9E6Cndw1L5emfmjTB4qoXr5tPBpUQcW5LoSi",
  "key1": "3gPNzMJj8Kg4Ah2MSYUFoCg1zWJ94YLNxMngub5Jra5Tun3CvTrrQp61K8pys8x25MRhvEMW2pL3efxE8m2kU9Zy",
  "key2": "4FnDiovkyThF8JyBCN2vrQL5CQCp2YwEHeC2Gph2Y8kQ75mJ5i8kRxgE97QUbxPpb2UAVQc5qjxW68AGfbFa9P8z",
  "key3": "2CTQX7smiXmXhDCNiXs6YGShYpz6B6u42v69EGyHM71bNVhCshUctYs9B9JXxcak9Rkon4ss7WqLp3RLpf6kMqtU",
  "key4": "yvHPenFmtn4mvhovRMNXoCdUgJJdBjsTeo5junS7C7a9bkx7MyUphQcDr3wj5JXso931UsX95sesbqWQ1Xgrhr2",
  "key5": "AqGirreZE8i7LgGYBnTnyxj6JVWJ5yiGgb3UEYv3n18U5nMgBdxdJ48ydv5M9r3aUMqGsBhwk1UGnqDbJDmk77h",
  "key6": "4v3Px5qGjc96NVNns4D84v5hziEGBpsmhQVv5drWCo8FGHuTJHBbTsDbMLueMrzXaLJPJcpFr2btXuysj5Ke3QV2",
  "key7": "mYBqZiYT6k7LsaYSWfhxKyWX7wcK9BN3kMdmkwTUPoEdXkBDYKoo113ztToTriZBEnT2tqmdQcCfGHhUcQ8Nr2J",
  "key8": "3tSTPkkoSyk1dLo5LXm7tKWMDX5MAQLtpc86D91i9TmgcdXsqqXqBxZQZy6K7xxGEyNhRcvw8xTzszYgTJ8XFigU",
  "key9": "5gSckVYLNjGbH3JQ2UMx96HYcy8RZxMUvh9q4EGkoaGhidmqDAZuyCyFP2vMDCFs2U3jcjdqgAWW6h1igyHu7j5q",
  "key10": "4aRHpjkeaLv5RwW6Rkfv9ufzNfE5kHQYrkvjtrg6RfVtL2ec1KKfugPAiA6ENrcqZAo1fDsqBM7pHf5BXV5hDePi",
  "key11": "5iHfaRPsCHrrH3Xfjx3LtpW4MZ1xGxYgmv611KFkcvo17XZjHfxneucF9Cue5dat3R8DDan8j1KyoJNDMHkBoUhn",
  "key12": "4XQcNXGfnNnRkiFMNnQHtvw47CRJzbJD5ryKnQM49zmZykjfYw716S8qkqHs5qqLwtuvtbXia9MqqfbuFRbC8FfP",
  "key13": "4aaLSUgzDJh3BxNrLq4ctJBAbjgUS18jocR2osqte47MVauxsi1948N2FpC3u9M8h7KbH4JXJijzPWK3qHiKcac6",
  "key14": "3hoVziFNSq1MKAtiwkFF1kiY6HUjUcLCTaJWuJ2EAmjbeWkzDTX83kApsriAoM2fwMQThHEpLGXa4LfQ8eU6Tb1G",
  "key15": "3G5dB8zQh8fDvap8YgePC9Xvn9sf7zi5iZkCDTE2FfwRrxVDXKmmMXTENP79rqiy7xTTt11nXgoruGexR64eom8S",
  "key16": "2tQjjgp6DD31MgrMwZFPpxrr3mXiiFaMdsnU4dbWt22bYd7424pZaDUAzCQJzMtGvpRR1Z6w2wgWGvKij9qsrGmK",
  "key17": "45HPjWvdhMT1VhXKxJVuuSnZUE3sZhWaAQ6g9r2pqHpcGaLoCKg7QPpidij81vi2qsGLhXQVPWQyG7LindYZo28R",
  "key18": "5jS9U2eWkfAwkEtzovQ9AMjJYVt8YaJcQU4zMByn4W3KBEijtDvMt1MDFQZP16RpHnDwQGPDJQNAuHFYLpAJee4R",
  "key19": "2a5uhnovVfAAjP7AZqwstdAfyX3UTtnAN4VjTKNQMV26y8F6mypXpiXXdCBFJJtsoUhbVxfnvfGWjZgxEr5QZyyP",
  "key20": "vdTpn9MdfuWmfbn8j7oaHEkso1tnUXn7MNnQfa3ZJA7zTFTBKmghg1PhkrHziqnxFBn9Qo7u94GRfwgA1VQj2tA",
  "key21": "4RwfRJxBb6vCXyRW73imo4RE6cd94GbDYJswi9ZavRgiCzZXHM85UndTgMX9pCeGaPnGiYx13azj351QazGm9R9X",
  "key22": "R5KpNVqeFLTf57qb5hfQJgHg7e7W7XEtbYQxz4LJ4hN9d2F2tp5zMbKQPVbcwn8kcLSid5xrsQjJY85JoQmwWq2",
  "key23": "52AmuQXVjUJfWzdciD8DhERhdhM2cz7ikduWcn85qHUjauFfaRKcfVkDypdVZEeE2PyowFJVEKqbLFbGANZY5cER",
  "key24": "3kzQBQ1UsVuPYK3FJdXpqdp1ywvZTytwUFPghPnxKgSrutWkCia8SHsYjdvFTCKVzY2DHJ3jtqGtuLWs6AhiF5a5",
  "key25": "2qfjtyX3Rh1kLSoqokQHe6g4ZsijpkRGZGGBZduGXtHZjDAUutbkFfzkuKUp787SEV98eqUWk3aWL1VUbwgR1Cfs",
  "key26": "5ZQKnn7Ld7nbMv47S4szUiov6QPoz6bN5iwnfAyzXCqNsLPCaSvG19yeFgHxXGqvJNmAdMXp2LcsqycZWYYgAfgN",
  "key27": "5mYFMBUH8k3f5udHqcGvWU5zX4pEh6Hn9xaatuat1ufL5BYvfcQNpShCgtwM5NSTghT3CnigrrnJfNVtinzcXxkK",
  "key28": "4Az7UDeUY17Es7V51jvdEh18g2pmkQR8PcGPqHEfxRQS2pRTDPERaksVpw3PpUkVkQeQ8sRxWC2KBrHR6KPrR2z4",
  "key29": "5HR9Tw47TyvJQnAJqn8fFbaF5nhL6HagDZMNYdFUmHujgCC9hgUua72ZwBkAfNbCJhMFURxcdbg7uDNom8G57Uzs",
  "key30": "5j5WahjFVpC3eXswhkKHTTjU7s4Lcz5nBvhrnyXuQ8zbonPcYCyomB2NmqNxf7DvTjNXU1EibBQTDRzhKuCpfBjA",
  "key31": "2aSuyHHTcQdQgx5Ty47PaHpB55qcrfxrsMhPoJhgfcmQ5FsU1HexJYGrHTqdrndBErnjVLKn43huV6Rowkwb7Ath",
  "key32": "5eXVQc6KvAFPktDRrv1EF5apwottWJSrHXyE9saTkq3hXxnFm819VhggUnWroDnQF4XM5qtArD6aUG493SKTbqa1",
  "key33": "1HrcfqseUsHxyNyNVNo8Jx3Gi3KWWog3GvYmXF9RzErZvKfPddwkySqcC6FWyPJj9Dbyft9FxTcXXJZ53Cc6kLQ",
  "key34": "5Eb1XXEnAkZidVieGp9fve7dMHfHeigjuTWDQbDXymSzRBRM456od3g1BRTpxCQqVXLtD7SRkk9xeppMLjjLURqQ",
  "key35": "5Pg61fQwKgvpe7ULoYdZMDZ6eEAbfpCTzNNXtT3G1WbXMnAgTGQTdZHueHj9WjjWrCYmNHPyQia5tJgbaVqgmZYR",
  "key36": "3FDe1HYKchZCkp25LfaQ4Qe368EZC8vBfRMgqtT7KzMXvn4eGfQDC84VH4XsbEpwzqS6L7vPdBzJ5PUaw81ETSrJ",
  "key37": "5H5bzMKbhHmirjpiXBXwECgaZiHKDJbJ28TrDcxPqJwpSpxipDJuoGfkedFXKPnPm7YuCUbDE35aYLwfqWRJqckN",
  "key38": "4GoHZru1mWVccut21F9m6SDUJzdQhfiWUnpkQwNFGnzHtUD2sYXrejYaiA2YaBLgyb8n2vnymDuUywFDvkAJDJTk",
  "key39": "5etfRqDv9G1BY93YWtTtAwXSyGkoH9P8yA4u9iV3gUPou3LU2YpHMnM6PjEXoLvXT3vdkTyMXYystzUYUAMf9rvo",
  "key40": "2mh8BhRyATmx4GWYz16FS6EYiTabXXb7hBZ3bkhh342uhVjNuT2AAkPjW1NHccpA5TnQCDj4dnr6qQD2aYaQ5MSr",
  "key41": "5hD87UC4rBhWSvBUyaZsNsBgruMduhSqDMbYPZ4w8zn2aYMBuguXcfX4FSVGzkzirfpEUkcJcLBSi1AAEgDDH8gJ",
  "key42": "3UtXnAscLMnKh8akYrrHFQ2nrA9MByzKJY64QeA51CyUTX363N7kgGQ5vaqGiAjVSQ4RFc7UvYBBDHrm4gDP1zeW",
  "key43": "vcxE1HwkM4SsgYokWnzLixGHd3fgVm3yajRr1bnq14W8wagT2LivXjQA4C8WhtznoQvVS77q8DApSxRGWH9owBh",
  "key44": "2i7j1Nd9TCphJoi2b9bCaZ6KWUdXkGCgDkM3JrgRLGeXbtydbPx9rGjf2ZT2PzCgnhgt3ga3JCcjuRdbY86xt76r",
  "key45": "2AZ8iCF1kgsHCZGeVynWnbyRvftssGUtzgTjnmim4J1X1eJGjALxAdtWzTjcTw35Ko3Md7bH17qMgCxGhUWdd5hG",
  "key46": "5efPaVuUiv3Yr6bqNkc5fFK7Uzg1hqGTHwYpXDCg75HeMbAYX5qQ9BEnNYke6ZWXEsSgoKL1SaT2YSi5RoeRNgoe"
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
