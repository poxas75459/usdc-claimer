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
    "2LaDfzW64ivyRVedHXBwpZEp2QWDn2PumeCAjH93sBWvsm6yNRVuA3uSiS1Am28jPjUvq2pPfdnV8s69AwFxBZVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PjtRkWqzMUBd2UkTBoHvssbEMLWGQMVEf1FXSV9eJQKJuQBmJH6YeAMc9R57FZJVQDspGfA2fdqAfW2phC3LeHH",
  "key1": "4bExKX4DUi4zfKynbxpbjpMR3iJ7CfPHpdFb6vE4mZCjzF72xErgTV843rxLDVdvEZD5HctHKrDZfgsgsTZspMXT",
  "key2": "4Rg1qg1xPCRBRsGAitx5jP7QLN8puLU3sF1VFn2guwZigTDavWWJrNevVJoJxPW9qYpDZaVtmsNaNVV56eb1zi72",
  "key3": "4br4CHxghwhiG1hdyz9CZq62fBhawMuyHzbK4zATaBHQDh8jb41aqkwbSkWFw1pWM3QFWCvnDuBo15UMuxwtQnGF",
  "key4": "4uHTBVKWbXWcmdVQ7HRchVUGcFD1pmVizC4K4jyC6x52LEupQSf1kNf96i2JBXwaK68YCEpSUwkLUD4Rn1jArj9U",
  "key5": "Jp9DAvC9VUPH4wSqFg2ut1bVKpVL1iSQWqr4DoDWEyFwnKqDeKPCkLrgCoRjgPo6uXkysnKPkDbRRpkVvfHP6FR",
  "key6": "36HtSvyMJa8U6RxxqHAk1Rui2NjEs8W8RpkpcmB1MR9dq7yvb5yDcbck2BJ8b1ueqXRAyenXBiaViP4uYDcDJW3e",
  "key7": "4vidVpE7fyEpmia3SysnpVd3M5wbSViwPkPtexQvm6hmw6rxMkGpFAJwsfKjLeuxnGnD3dqiGBKUGJ6MqWwaBJA4",
  "key8": "ZQHRZSj5T9PBG6wXA6uQRbgVbaPJZ4JkosyphidFtD6drA9RMKsNfQu7pRHcyE4vvzKqGMShCDdYnbTrkuB7Hwy",
  "key9": "4gucVtMY3hCkg5diYDcHjERtD8K2kTWoC1hyWzgewgToxQtDphBxizGLaJwU6rrKmtxuaLyL4BUQgFQgMBcjRJ16",
  "key10": "3PGoRacRPrm8L9GN78g4DjKNYJMvcDQGuhZGjzoyL2cEAANht2JWxa7SsJeBw44Qmere3CUfwr2shMgXWe8HSKkZ",
  "key11": "55jNRFaiYwu4kX4S1aLFhpNgwTuSSFbYXFkJC6yoH8ZZF59FrYUJgGDQs47u4vkqKkP8SbK7PmQr9QzJFLPqrTTJ",
  "key12": "5n7PHV7xiKp3Gd8cLcGskyEGTCpvb8xuNdp5w4pcEPitmNi4TJmt3niZL9B82KQnNDu9F9p8f2zP5Wy1giGuBHHa",
  "key13": "2HNb4w7kV3Td3ZMRgVZy5XVw6Ah3GsK2kjGb9LTF6yV5x9VpkSXdhD5fVMdABGFLzsJs91qZVmPVMhB8RTURP9Qx",
  "key14": "55aZK8bm9Tjs2x55AhoehGyhfzvSFkMF8sEUsmUt76tqcAzKktzJrdHmi5LxHkDvhBQiERYQTmvnBs7aFg4AhnLP",
  "key15": "3k9PUnCcp46BAoSwFchD1NVk71NhjKNWrpNfMJkG93JjirCDoNurMvpSD1ixKebnB4DFXZqMWhK3Rov3C3CQp6dA",
  "key16": "2RZhfnfTW1uXmVbEkGwz4DTmCJD3pSKx6Y8KJkmGELmSmuA9s6aSNrgp1gX9Wz2smczV6EA66z2JQa1wn3ZYyeNe",
  "key17": "333RRGtsG8VvhPVqU1Wig2Ab8aZnuDJN6JRoEdKrkL5U9AP75qY7RAEu2H2vZJWhs1j4JA2danpS8HeUtXUkqsEX",
  "key18": "3N8zEh1ZPU5e3RgwoBkUHrjgP45JD4LzKsWiXSxhLzU1RT7LdwMnGmFNHNNpT9CaHJCBMsD66cv1YLbR2TJ9tZSF",
  "key19": "5ToV8XbxzaTnrovFB8C7AMDxypkKkLQr51hnbHXc3H8UhqYjPCjMB1gTuY5hLaPxYM8hAveguNzRz1qhiAjv5TT3",
  "key20": "4n5Cjw1TVki7uDSh6NvA8uhLSBCB2rMG9pkrGUP3YCwLmbbhrfCianJFUXHBzoTmTJEx5XD6puCMdUaT1K9r6epT",
  "key21": "4GHFG7ZHcLVzqMnXoJ6p5G9TLgv4VfMGiCatjNEjczEU1X5V111F2KbqbqRi8qNYhnBVxcjuj7Wbr6Wa76RUWG21",
  "key22": "5qC9wQNq35rKehhh1tEYsGpMv8ZFMjHRFzt9Nq5EBVRW1uK47scVTA1R1CjPob8m4R7HgLQjgyBB9Ue4kgYxtiQY",
  "key23": "3B6WiiRzjYv6NuxzcWc7UGXCYQk5bhwK4Ae9vxkrbfMoAgA94rrDQRwDfXnE9u7v5KVo1utTJTnVKW7JX6XhjkE6",
  "key24": "3fqRDFCA8CsULaMbXq3YVciTGpBgZ7JVkhNAZxNZYYeyLRKzN8cAXXVjjfnFyZiAmUajvnr5eivsmAANF1XkhiSg",
  "key25": "3CMWZnbBSdxDvXXBmQtrjxGC68H2jGVhh1KxGgS8cx4SA9NyyLRhfQY6gvQvh9J975cMx4icQxqdyBzvqkEGkZRM",
  "key26": "2pKVVvdzvp4bMGhZ58TbGEgmXXE1otGzAdhrQk9T7sepbzrh2m9Ld98jZwFxZt326PXJEE6D8Aw1Ej9RoFZs4SmP",
  "key27": "qSSJbSy4T4oRtyYBTVYUQJk2U6xhdJ89CyjaUFsiRaQxnE7ymnCbx1k7eS4TUbBDpZsrAWhxWbEDeR1ep2P19Zy",
  "key28": "5sdghR6sPGmvt6k35EUMVL4mhEx3mabBVww3d2YdPCh8GGsVx2M7AZwmRS5ZR8LQCi8XEMYMXMgLzsw71eSPpMYV",
  "key29": "3DA2ovxDgMS5y16dZHe232Tn8ANxzCwrDYBf2ZP4cBKd2G2vmcPpLoS5oKG868Ys18yxDy4PqtiwDxoyGJQuiy5S",
  "key30": "vvCqoWSYfk3d655fNna3cLpw3BmNoEruSnmywGNCA7upiYZ5rqw9eZp2waFCSbyzjPkWbZXktEM1PZnZ9MmC3m5",
  "key31": "27g4Y7PLBtnPJn9hnyTEV594EPNnWv3hKmGoxDivibiog5bqkoPBvZgoq6LYVWRCnbUnL5XviWzWWAZCduf7kSrd",
  "key32": "5APNyLxBFFWR17kg7CQ7sS1Hoh7APEHCUV1ewsVRfP6q5mh3ybiXtG3ALrhQWbMZehbcdf8FK1NZwuRWF8QLQvyS",
  "key33": "5byBqixSMWtR7vNoBkdRTZDBKeRr8xmC8Cd82mNY9F6he33Kq7zowmBnxpJu2q3mqFzfZkjGhWhBM3MX8x4KbYTV",
  "key34": "2CQvXJnyzCUBCg3hraXrkiW3GUWQEtxWiWFvWVJ41nBmSHN3F1qCtReAooHMu4pd5cmnxhFguTQaKZcmLci9Losd",
  "key35": "5qmJGCPoNWQJ2Vn4E9p5JUmTw3teGUnM2dfa786qf2hMmqgYiDLLA8BXx3dQJXvF25jQf9aqkg5jeA9DzVvoEkCm",
  "key36": "k2d9CUPeFqcVBXmtbQ58HH5JxTiBhtdSjBtm6YwWjYfpZ5qXAg9vPqQRGwk7BY1rGwuTRgdgMG2pwFKDrAv11TZ",
  "key37": "2dSYjDL2GbiGHwDgzhsXHEUZstewS8M3Scb8MqrLFTym7sVGh319XT8hLG7CA7edoPTHJpTPnnguZEZYcygHskKt",
  "key38": "2rC5RvTp5FSybu66vEGkyQ1BmA4hQhCgUApbLwkG7VCeasDzPCAGJ2fS6r2ytNtP3w5A8zpjMmvzVGmYksWMTH23",
  "key39": "27yQo3uuGkQFKB4kNCSyWcbmbgiucUxjVZA5HP1geUQ1pjQPUHP8xo8AJFXcmWqNnmP2iJfE6oUhEYD5oojP194b"
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
