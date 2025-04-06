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
    "3WgGiaCfgTvoPsMrvjMvxo27vm43Tg7Ffvpb36sHW8un48jMTZqQfKNsDBCvpdYWQRwXJFmXnKTwMC25wdmRb8yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54gVJrJi1UrQ9US9qPU27FXAe9XgD1qc3mwN4qXZsqEYRbCkBdMacXNK3RWKXbnuvBwjbjaNN3SXv2LyF66sAc1n",
  "key1": "3QtFzJojoK4LK1dWLNVgvxB6kwg76bzTbB4h4DEPdseCZX6iWZqqpwu4WAahuNjqwDBG654MnggZejeSch9QLx1R",
  "key2": "4Af7UqXnps7ZCKqfKTPAZTNoH2gGBFeej4k4T181PVHqvuAx7xzL9iU8F6T5EtNRKn8oGsFP5c5jv96c6TcxDAFP",
  "key3": "vuRKdnvHhJSqnMSV7yh1LgCHuT25Xp7ufLnU1cURfvkcBDQqHciVRv5vmW6ayPCAVBbhDtJz3ESZtrbLB9bEyDr",
  "key4": "2QKzyvSn96azdcvUSTPXSQKpB3A4tMCuVhWeKXYcZsSLbL3v2E47CxMPaHDievZiYJhF1D9KsNCWatoUWvcTG83i",
  "key5": "2D6yGjpVep3WmarsaSZKt2B9N5xKgYRMgLEifPMAcorzbXpY8AR92SwHHVHhZFx9h8jAyniNwHSC5bZoHwUeZUbH",
  "key6": "2bXF3ijSwRtZJBVbbwwR4G5Za7rZMdPopC8Qm37xgBtXedqWCjuAKxLyXB2fzzhDmDeGybcoC73Q9s91yuArHW3p",
  "key7": "2UFH4r4ZLLbkYCp53UFDAJP69vrB9x3NubRCGpiiNAcU87pq1xWtVnukG7DCtqZKc7N864rLTPqpqNRDw3zsdRD7",
  "key8": "28ZBiHpWxxoRmsij1FcfdKj3S7wT9qdWbHR3C63cjUXf3bz1oHXaz9BDMGFtBQKLk5Rnc37uCRGogZQAJv2ooheG",
  "key9": "EKZrzNU8cuovZ6CtrCmfUgpLFKMmbXxkoZ3tNfjtaPm8PEbzzZhkaYYX7JMdFSYFbhHJAYZfdGqKATqKwKNNV9P",
  "key10": "RhR7YWCERNvmbRbfo6LcM2qniCm4Jk1X7PsH37wtgRy3KxQZqe5czSWJEgLSNZY9LU2AYxwC21omuhD7n8pe11k",
  "key11": "5E5FH7hVixj5Eb3Chh5jFYvnK4kdSVSz2bekshp8fJKzeMvyp7y8A41yiYDMpufdu11FUYcd8x6sJngNUu7ZvuXe",
  "key12": "5AGQexb9DScCTTzksNo2xxNnGxpwU5ie6JJGiTemJCVqeRZjqgbax2YjXPGQhb9ecyfcX9URHmwBEKspuN6ceKF2",
  "key13": "csK4E5YWw8Tp4ewTK8zwE8zuUNozYb8yi7NxersXBp8zEJPwsjJLTcPq9yRZzaLV7KCeZohLA9USooTrXVPr1wg",
  "key14": "MDXva4tT7S5V2TXKiCHgaxAZ2fFtN5cTuMdDRdyLkUGZ1sn51VHxscfHGs1w7Ze6qVZmQuNypj4hFSX8KPuUeef",
  "key15": "5waRv22KBXmMwsap2cxBPcNfs2eRzPpBhM7PJQjhQkYNrFqz5BHkqZprhprFuiScgJW9NHWs7iHptUFxy2r7Yx8R",
  "key16": "R6mCAnaUr471pQFU9ZSh8Hqm58roxcFtBFK4CezvpctEvFUc4NP52EAUMLP89rL3Q46AzPrD1CtrbMDSrS2jUMq",
  "key17": "2jUPxMiHqWYz6y8iKtbydtS2uuhEBnjKymypaamAxRnd4tuGeTsCdB7xPwkRRQCAtR9Js2Ss2srQaYN27uvkq814",
  "key18": "aUbSwcMAVqUfJxyBhT1raqcLqa27NyC2cLkGyPNwbCvSe7ZRog5LTfxaQPjMa1xZD29Dk9xSzx4GZizzALkDEa4",
  "key19": "ZtzZ9pridbEPLsMj6oAzQ3dVr8NLrDytN2d3HfVRfXy7rhtcFUVR4g2oiTKK6FK8CPvD88pa6jdbhspYHKzbdMm",
  "key20": "5R2nXhwKm3FVrdFcWsUREVYsAZa19viTjsFq5UhCP9oNd6VxNdBcw3S8BvRRp2idbgrtKruZy7ExjjZgjfzBssWs",
  "key21": "ofG3sgbaFd4JNcpCCvPpexJEJAbMmfTWv3ctFo85TQou3AKnANRkew9iBLyAh6rL5wf9xWkHvx1teAodcHyhyC5",
  "key22": "pAXLN65NCKnGSm8B9TW5yaC7PRt39p5G4yATNmMbajCvmZmNXxwrmRGRUegoNDa9L43z5fkQ4zfgVfFpuFboREV",
  "key23": "3f6guCaV6bY6rPJnPmSwaU6GFwP1FyjPj22uhecaK1NsvWFNGhYxYNjzx2wrKNH6nRo6LDTeXdWB89mffay65bdr",
  "key24": "23cVACYZrAPiTocPVVvyfWixEs9Ze9WtP4RoWoWpjfAdRMXHg2fw9noTrj9uKV6YWcTGhaw5YXpnEq3YqSowe1Ho",
  "key25": "3rnQtHGuai1ACdHknsrNrTkgxWqBEqExXHwY9xpEvCDVyQgnNAtPx2trhgrtFBYccGcFGxngwBdvjAtYrdovBGex",
  "key26": "2PxzEMUxbntt19MFhB7XWBebZu259Y2w8BzapMRXpzshzsxzvQuJTzaBoT8YMvcShZSFAWxc2CTZB5825oEXKgcy",
  "key27": "hRPeaW8wtUj7c3pCCCxSt8Po6BZB8GAJwUHAhPDDYep1ho9ziUaDxiJACctYt4ksMtTCAzer8RrwnigRXJG6tWC",
  "key28": "3GKyoRH4yTLh2T7CfvDernnbyUv7DeR5hztNyBc9ogxhB5VBX3FsSnhaRjBCWcAz7dCMP3g3GQ7vv1rRtWNRWsfY",
  "key29": "3VcsLVLmu6gCXyzWzoB2HTM3MH2ni4YvP8HWeehRuub9KeCY63sMD1c9cc5QmbycNXp6Erepf5nkqw5gafPgQwLT",
  "key30": "4E9HgkMiR9E1cCQw587qdpXwCP2kg3YPFNs9LC2hxBtZgp1UmPGzEUWrN72EmuHHLdNw6h3GuZT5U3u3KQmQ4BVs",
  "key31": "3JCiLGgSPUbR71AyWvkYSjK4hNt61PdVFWazH4smP5CYd3QXCRe1VcufaMbpmGrh6VmHJdNJz6UoTp4vD1rHtxvW",
  "key32": "5aQeVmUaqWPE6GyPiPRPxhqs3DYStn3WFgAt1kqTnCAMJ62bHzhTDt1mTT2H9Hx8YU82wYLcH91piMNYZv5oLWDX",
  "key33": "YWM1WnD4568YRTUCs9kR2EJDjRHx5oH49rRn9UUUYUxNeWA68WfFBEE7tP1ZU199Q2Ym81Vt5YUJe8iBYHzx98X",
  "key34": "2KU5gJ6GoQk3SLs8RnWUtCHuCZzwPEgLg3ZBsE5FLRcNFp5yR3wza7bGpe4D5RBTnk4Q3fabtmcctT1soQe3UDRr",
  "key35": "5mor2StmbKnWyfdLaeEW7m2sVScvJ1o1VRhWg6EhNfVdHSCVFEEE4zAi8cPDUBpvj17sLQF9Awkgc43pvtbFRiGq",
  "key36": "5yBmG1SjYDMoLz45417KeaXqNHMFErMHW7QjoUapDwiraMdC4piw2K2MGmkCiHV3L9j9vQKJHD4wzNjFoNRisZE5",
  "key37": "3b2vYJC8rbFHZVLv7WB7UoFaHbbfQ7zfJ3PijVCDngDyXwHNM7vj8FafXEq9bob27kshK85sSjJEjnPH6AtfhLYa",
  "key38": "5z7fEskBX7pFAyMJnBjh3z4Cn3fFu1m2ttA3CGFiXuRdBJ9WMSbVDeqnBUv3RGFqJt6qTebtWhbqragbXefABvso",
  "key39": "3W1XMmKPKcqfW3Ez9FedU2HgDnX1ukXNUo76zgxW2UiGnham4HoCPDxAvjfp5f9yk9kQ5wihYZaQ5RmUGokvKC5N",
  "key40": "rVrZQpaE1dtaukQhvSDxWC7Gwz1TNXgr8y5UfVCR7xmqXrviD2uxzVTGyVGnpprG6HeVeyqueozaweB4VWvwV7u",
  "key41": "3A5diEQMB1kgr42PGWrNPyxKqkuRt1Hc5mn9RQXSagzSQYQha8VceXVCw6fAGXtqLfbUvySQBT75DTPNr31pCspW"
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
