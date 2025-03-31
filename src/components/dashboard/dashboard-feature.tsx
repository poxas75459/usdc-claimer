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
    "4mGjooSbrmYFaRKpgHtfS3592U7jHZTK518JENjHkEmn314jcJTqcpFv17JJLLNwxzaggMwfJZwvpQ4sBJHhy9e6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u34KjHJcAwWjdqR6Chp9JydzpWdA8VNwvw5f4UGZwXLjMhnK2HDr8QFXvbYGCub3FbuD3b4REeNYQukZA4443uS",
  "key1": "4Te6hFs4o2TQKCYRLwxVNaQgeLDiTQzfCctrwiR9KxzVURVUVQDSeu9gfUqPtrGrBaF7FDrByvftGoCk3e67joqw",
  "key2": "2bkcc8oTNaeWutH3svriFF9mNgA3qWCJhs9BzzPmfybxqfz71z2dEimnNDpH2g9umdfzyhgQ284G7mswsKvgf1mG",
  "key3": "26Thd6iPRx2z43meacwTGnPqqpzNDArtWUuymg6ds2rwzAjq6YH7Vw4XYNBZetcpaxNCPBKUojbJwBmG3Cg7oSgM",
  "key4": "61TE1jYfDWRn97JMFWJ9g68qEFF5oumKRUc2nFBSZKaoktovuGDQ4RxyZe1MVEaRJN3N7ZkMsB7UcTmGf4bQK4nS",
  "key5": "54zWwNyPX7yHqU5JQeFP9hhgnZW8sG3V1pJFxs6s4cB6ceN7Fz5evTVSYPxSjDE4nE94YAVhvziGcC4GEjFLDvoJ",
  "key6": "4E9gRZFywMkHD2ZRD8fCh5RtP8Co1QBAJfVZ6dtwSr6C4PF1tgJDMD5iXXt6q2hSQEjjvxBwZez9TTKqfahqadVA",
  "key7": "4S2SzaXVnNoDC1izJfr3S8HyDQ8oKMqHEZWM9q2eZsiepMDHXmGAHRDApWhNAN3ioMDj3vuh86wccNSTLuv3A3D1",
  "key8": "29X2eRhGhRtMTWXKCNMPZndoSPsDwrh6ZdeXBs7ErdXqucxNi4LjcQA4vdCNzAQZFBtaqRcwCpPtAACRt849Zpsg",
  "key9": "63Sg15UuQFbRRJBS8aSQf6GqVZpEyEsqii3qm1qm14DdWsAgTmi3AFWf3u2JR8dgwWURZYQd2P3VdZHUrcV926hd",
  "key10": "2hbNJQFrWG5mgapEgs3hQTZvCo4KqentXGgdvvUDEXDMZ2KVa4ecvaxfaMqEGasSVWoPHwjjVFJ2CJYxzQRuug8B",
  "key11": "TmHcQEsKKr2vRyF3KBryXNS5rew2QTVkXUu37icPscJqxMrkktR2paDPsLHUDsyKJueXBBVfQQp7divnJLfAuTM",
  "key12": "2hZ65BZLH2hU3jLJ4tQfMCa254T2TfMCPG8QQdKyRpGjezHVomWnSDwmZKjHHkavyP1YpbWRfZkRWhaXCd2SnQj1",
  "key13": "35s9CKKgp66A1V78avBmqD8wifLhwrhmhHjSCug2ZU664eiYKUP8DPa8j2m5McnkkFfsDp9UAHEraSUApPe7K4ef",
  "key14": "67ja2DsQRrdJNn2oUGAg9hJSBpESqgxpD12qKTjy1KZY1sdog6oZu5Hft9BDMRzF4oFGzVmHBvPiBgjwWPUfYPSM",
  "key15": "ar9YaENDzV43dH8bGhiQ9fbhFqMqeea71z4RF6jvAhmSLfnBLY5RHZ9ua4NfEnFk5hcTKkp6g5PpTkQEBWHTbk1",
  "key16": "i1C2pfGL5oZ36ToUFNzRbbudYPGQ4uvACA8JE6Fi3AXuKskqriHHU7ZrgXn4qV1vpyCYMgyDodkV1eohTfatoq7",
  "key17": "4W2Tx7cx1ycWaLtH99EioaGQUwHFYVcdJuyUjJMNRYxYgRLgPuiMkXvQFuMaf7SRaUdn4ihNGP8PzJGEf7qifTXQ",
  "key18": "mWbr1hhPadbowHeeFh5hacvFcz9o3zxjZigGbsDb7Dhw2s9uQUwyqvukPEyvPL49iv4ZWDAXCpk3WYxgciiEzto",
  "key19": "4J3s9bzr6TBGos5XN6MZoF1CuQhAaZda1JnWPn1TNMJxA9r57TMCPZhrx3n3X96vAMuj7hSoxQXJYxWD8iTHxGzu",
  "key20": "4hzHWHfWv9SUnDDKiyjwJvjgHCi2Hgt3dXz6cNMaNzQwJdMbnbPaKyakGQT3DJw3WPCB8N8Zz1NsEnRNVyhUckcY",
  "key21": "55e1wVXBBQZpmEkPGssxGfPb9EMrgy3WrafcGFL14sQoLzfjyFBiH7NZXxrjq7sJDbQtRAN1tLDw2KGRZcrywC91",
  "key22": "GqNBzddXADZTLjz655owrtc8TxNsLoeCJnpQeyro678y8fpuNhvokauTaRjXWRDKXm8tCJZCtnNvN2cegZr5qpq",
  "key23": "4dj13N3okHanrTMWzHDLgUn5jCt8jjRoKYBwsYeQakHnYj52kyJLJRE9UQkuWGhbU13onqKd918advg9scRFhqkC",
  "key24": "429JfWRrAq9UVCib319ZJcypqbpLeETY1Msy8CAyhAzueuiEmSXfyQfi5rbdp3kVPrU978BRcJrU1MMze4r8n3pY",
  "key25": "2SeBVxiQy9duYB3VUzR54TNsTPfvGfWcXSwMK9JCDE5R1ZdnziuxngFeg7tUMzEFXDpFBUZMszoLp4XgwwLHQtGq",
  "key26": "24hcThg6ww5hqYh4vL3tiXVznFHLisGQ8mT1cgJTqW9a2M693Y27etKsZo1P1Xvji1LsmopZPnKm1wztP2tpVfrM",
  "key27": "5rNDyd5kpogDxGDfHXZFvwmFEzDqEbrYTSx6E3zHLnanpcptxe27FyrHQG4YntLRF8a7KV4uHJwMXPy8BSSCLLTB",
  "key28": "dqMmdJnWkGuJkiHyQ5RvVkCvPK6Pmb8WDccpZUrf4KSsLF6tw4dVwyMzUtjb1zAwrK3ou7Vs5nBQYhKGeFD9q6L",
  "key29": "2BFdtwkVkbbtcEG6UvzbKVEeGEXLq4gndoE7bwh1LG2jAUwvJ6Q7bLoXeGcWKAMtWjcFM4jXXnzzXB4RSv3rcpDK",
  "key30": "4nJEZReEszby666njfzDmXGaNjVmNqqo2GNeBbAGn636u89AErfnDVmMDU5w4F5SgFxJDc33UmHpaCoVUNhQX6Nd",
  "key31": "2nT1RiXTqbaBFdtKcL3Y6tSBxjGtufBiVSfC2EV6xb7Z1EUEHLm68ir8621yRZopLTgRjCXFd9EYJWk9t18FAVm9",
  "key32": "5ynM9mFtzfV3QGKFkitMAXckr1iGGSAGZK76A758UAtjHMKYuMkkc1XtfCZKXtCEXv2JSQnNB9ZahVNe6YTDAvaX",
  "key33": "HNA1qFNTaLtUyjnAoL7bBN3hVhF6hSF7JKutqapvYdMfeBsGYQZpB9hnQipqunT6XMNs1XZRZtavF3NZgFGhuKV",
  "key34": "3Rv5EuWwfRyevGGDZCwY75murXnLDxyZT8Ud95jwhXinXkaAHXEXMdiFjbBMRvDHEey1XxYCq1TP6Dzer5NgKkzw",
  "key35": "5xoTMpTU5jBCLKXzfVXfLVzar9AD3LpDHR9QB84ayLSNhT49Y5xmPuAxAAwPBYAeJP68SD5qPmsRRtKVNnd93rnt",
  "key36": "4ndSCsoVYZsFfhfYrYhPDY9BrwnUasHd3an91wDRmpYFrQsuHoH8EcuFUdUgikt8QpjWJAAkCd2mMXjMamN3j26P",
  "key37": "3SpwXsMrfwUW2tHCvVE2wQSNtSTQL9BPJGCxEig5YnzP8ABRPvtNDPv3QvHamtrNecULcSHwSayuV62ymXmoG9AA"
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
