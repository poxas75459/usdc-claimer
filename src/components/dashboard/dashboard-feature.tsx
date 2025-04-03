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
    "4xBHN4SzhaHdv4CrYK8s7qaHPoTAB14FCt2T7FJQD1heSHXA8LadLnCenqZ5mb8bGSfhDhSjCh7jjoXkizYc9MLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s2PTzL5gh1sYspR12LNrT1AVZDSertbk8vic7KPzKzCwX5w8uVSHX2MKkDXmgaaYTJGs5Dnn5idRCv7pKiWq4YE",
  "key1": "ioCNnUfcA94WK9GonJQYm5S7z5VQ96KyxswUcPL4tS9PzbDAHWwBJ2fimzJt6Nc34PxXuZKeSQeYq7WhFBMJusA",
  "key2": "2FKFRMRoJTQTMsUhubmCTnFk4QrWV5xA1yMdBX7DyjzYp41EeYTSrQiaYNiDge74LJehRp1MXcsjZYzVTxWJBE8U",
  "key3": "2cDGY6wsPK22i37F8WwZq45RdgnYiB6yFHVz9XPwK9kieEjL87JuZ43Fx72N4DUMMq7Wd1q7b25Fr7dCejay5QjP",
  "key4": "38Uh53epBgn9fsf7yzhqu6qkkMCmidg4zM1G8rwo7YcSmVjA3JqVMzjwDLTH1rwsKEropULayVwonVYUEynNoqrt",
  "key5": "3YmdbSipByXP4fuUCMcgYLV61zBywVhzxYo6vG3TwT6doTosvgYQTEWSkZdktDH3hd7bRzjRBX2q6XpUY2UhAJ5m",
  "key6": "5rxg534FP7ayEmdCuqeH9MZqvfvJjRiin2VcaAsPXKVHE5faQa1rPFzJyXaj4tYTspCrsj4ptC91MeMapfs7UjmK",
  "key7": "2ua3XRAzcw2d8m9me2LCwMugv3otdrfDwpraYoDyd168wPPz9RWHJVzo2ndE6U23hz3uhWVSb4pzuryq7YFpBzCz",
  "key8": "3QoGmZV58PPFq9CDHmyH519Yw4m3GrLfv9fbpBQiZ25akQ1B8MBGhZav4uWFjxxsGV2DfBko7c6bnwpDJW3fdfwa",
  "key9": "q4WZvduynoQ2DJxzHgTnKTq2wakP9nog9Qi5t4v7vF1Vu4NhNEGpqxX54Rt4z4W29Kvbd42YPmYf1b3fHicvG8E",
  "key10": "2fsrKyMujn8dncbjdaCd7kRhRG15iNHuLyphAE8f4sjDTyrUqLUC89uWjfBp9YVWJMdsTCQJoGT4r6QWx2fPck9n",
  "key11": "zXTUveAp6hMu22Y62a7oLVfThThu4RZe9GxiRCogTEzdfuLVK9gV3sKRKD1uFhEWLh45eLyiATf2hn9RSbZBeyn",
  "key12": "48cTQmbF7DAvQMPRYX5ZwS9v5vVwv93VKYMyPjqV6BJ9cQqZ8P8ENcLc3KJG7bViiycUTTd7pXqEkLi7WGmSLZVm",
  "key13": "2osGC7L5bELCQucrX2fd8SkjdYWnm2fAXwLr32JfPbEKJxfAZ3USeReqnkDi8wPuu5b12v94upHdRGeUCioNsBKG",
  "key14": "KiDNioZX9ui5SzouLMjWHxJJUmW4GbhzabdvK7yenrimT7hDkStFBTWnJGXqn1D3rHS7Q5VW1QiBMCQcyyA68rc",
  "key15": "KZBApj6hz9cNQ1rETBoqGnvrvJW9kPmV9FDmxpBLE7yJok2a6vhY3xpGWGLa8skN9rfCJbkrCmqXkMURXwJAYWd",
  "key16": "5aSAVyjc4XLVPNMwqGYQE6scfdsGZqtAmdTKBfEbbnpFdSWSSPdgVCg5aHvxMBJ7DyttpqTG2VBSypLcGtiS4Eqf",
  "key17": "66HdJBMQqMJ2oAJaQhrW8pJ6QCZVL61rWqsityeHWbgtUtwD86eaHDMmJYaVP1dafuk1h9AF1QZJ8LhuPqPvX3AZ",
  "key18": "4vRRdgzPxMDFx7Fmx4grvBvrfgB1ignQKDs2pujWrej8NWuysvtfn15FThUQbdFNPpuVTwn9avoruRLeAyCf5oYn",
  "key19": "5XU9cbPX8DtzmFU9h3p5QaEDGjgw8J4GKx1uAjqPVMjFoc5aERTvx64JdtbntMH9X8sBrgeQdyeQdZ64uFy3BVWZ",
  "key20": "Uw8JzteSd7xcPamXNwGy21an4eGCazhpE1pp5uWJ5AtMBj433K9LiPCYPZXMmeGRZDAToVkxbg5kHfnUEopKPBf",
  "key21": "4aLZWi47dNSVESFobPPmBa6wAhmANz3BPnT4hjXDu5H3URV6Ja3yoHUrsLRQ6EQqxRp5DSHRK4uD96hsXjfwKR7h",
  "key22": "5SERTAxjJehSV474JxrMqk5EnPwLgXg6aCqnpEL79CWtASzdxyz7UPsBdFtLDpZ5tJBagnqzrXzgb7MCsrSYVRnB",
  "key23": "2Ex5NaAnhWp7Xa34uTysxjx6nEm7MoWsvWcGfK5AvPuBfh4qUJznc395KAUCdVanu9YtKbScfbMVh2QSHzDBRAoo",
  "key24": "4TxugoijbEgJJNUW7zPGrTe4Un6NfJnPehY77cnR2bxXG61dDPRtuV53hz3REdz8UnMZsLUm981iJZAbqsFARASC",
  "key25": "1244dEvy5PCbRDdTnVvax7LcV6WDUv3JfF2gMgt2jTLsfgwXYCpMv8tNGMnubeYha2Ps2v5UTmnQkxfJ2ZnwaLC1",
  "key26": "pZwizzx6EQBzhk6pT6pujbewvJQtb6AfUk3ddqfbicnV7gx9vxVHqnZs9YuHZb4THCredQAfFw7zGp8H8NpofNF",
  "key27": "5MJAYjmPPcLBVg2SYpSgjBKpR6jEYocx4W3t8dNhNNx2VeHFAvorBNkncVMESvHkAxkWLXLoa8hXxpZY58mwDVF1",
  "key28": "DLQE6LtqJZ81xDW1gFDPNJzinfopsXb1qtpx6KY7uK7i5k7d8UBRe65yWmwLHemQq18S8XQ8vU7RuT8pXLhCT3T",
  "key29": "3g9LFYyY3AWoRo5N9DaWGPuV9wgSuMrpT2KCcaNZfFkcggk6JsCtSfvYBxGWsHHT96J36RgjNabcfxBzFRtZuLQo",
  "key30": "3tfb77eyUZEpduJ11fPNYXzDQhR7gLW3zrLaDm4x3QssNiRHTyweDU4XPUaM2vSj8EmEu2hEvj9LcZwir63X5bxS",
  "key31": "5mGCYmGhHrj2xVB9tgPPrGbCAq9aTvjUXSPaUsks6HxQ3xMQLEBooJCXNMbn8FRiUzdkc9Ep7p6kSDWi6vabh1u7",
  "key32": "4VkaAkMd1zuTGfap4ujk7adY3D3cQrW2wLX4TQ1zLqGxUb187mbJ7Ya9sXLRsRK5LuS5osaZJUb1pWM6A5eGAnku",
  "key33": "48boFGkpXZ9Ad52YF83BaTijd3Uq8H66jXakzttYGoLZuMzvBR5Dx9MAw7mMC49Ym5zJn3xg8HgFJLGzZKcUsEiV",
  "key34": "HQXirKM36f568bSUiREjt3hWQaKvH2QCHjGp8Npeyh4Y54i6gfjk46Z4fBC9YfpGSVQdXXnEw7dvKqfost2B6mF",
  "key35": "2PKex46LdREAaxJHYchCqGpRFUAQbgu6BQaMaG9pEpYD6VhXbyjaJY8pqHKGNkb1xEabAwqnL8KxdQiFKdXD95Mt",
  "key36": "FR6hZARrJXTVuHReQwVuPoy459L2E6Dx9GDJCdLn6gnFrBYyrfFn9xy1Akm3eTAD96jrYXSqGwFdi3STcacoPMi",
  "key37": "5tnhoicxeAwqizQ41v3JirGEJFLBNiUjA2ZGR6j9hYd9udVu7NvVLCKJug2T9GL77mZZtTaBWnNiLbjtGNKPvCM3",
  "key38": "2kX1D5a9H3bqufGN5NR1VAXY4rE8bu1fEeVecXoqSb8ktdpmneDapt4PQfNTiNZtUqLYY5pfbTgEiBrABHBsN7R5",
  "key39": "4q7az3jfLWhk2jSNYF628KoqBRpN3dWHEjbBNZ8n28fmP3zMzqQP9dNs71ZuvuMaLKQHVTFBWUxBmbdKivdCaSjh",
  "key40": "tzB3pXJAev3ZLppTYuc9S9c8FEbs4SpqbZHfumys2Jub8VbiTzhJK3HZw8y8ieo8FF6JQLSchuRWES1qPPn43dx",
  "key41": "hWPAPBnRjsmqgHLJjDjqnhytqrBETmUcLX7F9nCtcJjdAtQcDXEkdG7tSze8afeTYZHaFFt6et3AyrcpRG45TkP",
  "key42": "qgz8yvBxwFWS5r6FTNSG6ruxvPgxGUSiEmMsCLkG5pPoANrsqafU2GUVgVH6Bms4x1Hona5JkRbTMeCBzBuqctw"
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
