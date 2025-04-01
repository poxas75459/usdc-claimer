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
    "28SoqVWv6exacL4AjkoK4vKzZYVcCHTDJapdKrkoFdgwr8DFfXvoMeo5dUgFLGeXJtBUsfSSBQDHLjzjKSFgPLbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qtjjcXjtxj9E2e4AfuPoKdGyNs9C5srYapH4CF3rYLK57DeqjRrHjxqXzmRdwpBU18HjXyHPcPQ84ooAwrc1LdP",
  "key1": "5wmf4uYH531cFnqx54PhqLEwMPANJaJ9Cn42BVbnJxDg9b7bSMb5sdiXoKHLhZUQMCPazAp8TrrYvUhtLwrnCymZ",
  "key2": "2HNVzV6XrqABfMvqZujAnAMWSB3v4yhwBTDkXH937Hp3VAeB2hi87wCvMa69TTbCjMDikLwidSRbAaor1EQRhE1G",
  "key3": "3DPtEg7VL4GyhbUSWpC2RhZ1kbYhrU5s5LxHkxH8ff7onUifrP89TEbyc9ycPvxo8cSeM6aVT7qXuAg6C5nq2Mdu",
  "key4": "2L1zoMJt7gRqcpPH2zLwcKoceLf8RjaGtuznARBHEoKf3CFZQQdn8auxLaWorAVm23U8V8cCiAvCioeBoh8te3Lc",
  "key5": "33aRHaGCMH7iaV8RQwXUxNyQFhF1ixdbwtspuf1fcBi8NNuWogGsGSgmAcUqQRJL59LVAh8watoC8DeGnKko5vhi",
  "key6": "3Vjwr8bSLwYXfTuxN4EQN97mngs6VibhMnekxqY9jS3Ph6H5S9CHbosUzvE625E6RZPvgH53kY4nMM99tnptcrgZ",
  "key7": "3PESriw7YFB7z2n6VYDdtmQj5RtUTrgCXWi9TmSst3fxJTYSmsBEFXF7fNkaUzne3HnNJ8bK3H8EvPrBExwpEsCs",
  "key8": "3Cc8Ce8HwVqcVgVBjcmZUHyHUjRGmx7VqByUpTvvdozwXwgdTkj1Quo8ZLDBdALjLfc71KrBr5MGtgFAUxxyysiu",
  "key9": "5dYWZ3R3NGKc7XqT5bKa4bL9rDYsLH2VNcDymSLfAMpxZR3Lqim9N35zfytXrGavuhTZnGmksv849guSQh5u6xmN",
  "key10": "29MH9WsqUgUw1EaTp18StTmZE7Q9pBBXMcLzTQrDK7mWkP4zeDWWmUg7pzh7aX6M8XapnRA31LWC3qykMEH8qvpy",
  "key11": "4C3GKgatp4i73N5AHrnKrwtp1R2HnFMrFLDP4hDQMbmFvDqJSGcqJskMdQhP4DHdmXyVyTEpHfV2wA9hKWwSmp1c",
  "key12": "361rmmgB1YHofRCqM1bZ8E8ffqA4uBPZLSrjEK1tRjgomuWb2GAW7GqDqKU2iWJG2QakdrdPfTEskRC51MdYqtoR",
  "key13": "5StTqWeAtX8Y7Me6NTqJDkccW8bVBtyPnQ2emcFMmNkSC2WEVhamzUqGRNeWbE1nE325Pi69gHvzvuQZkVuZfeA8",
  "key14": "5bUqDv5sJaDTGKbLdcze9S6dN8tF4ZpEYhKABLpminHZtkwFiwnhYDMCjvhy8PX56ocfubjhJuVLQq4igcEsMf3u",
  "key15": "2gvaGpkru67Lw6WXChxqmQokJgof2vJQLhWQwn4RfHfaW5etsrwqtVaFjH3gDmZoJTkLdv2ZYvA7uzJQ2qs2iEDM",
  "key16": "3NYi8q7bKoiHWDpxcZ7UgjZdohF7MHXbBeMCgHM9pqT9NWuE2WiUK8sj1M861k9hb524facwLcriWo5FaVvCMPEY",
  "key17": "2RsRuKbFy1bJtPQMoBxuP2T3aQnYf2CcQyC6KsAQkVnfwbXgPQcbWi9dFCj7fRKymiWXTY1ENR34zmgPFUrK1t1q",
  "key18": "4E8tPgsewFvZdTKNLeaMTrwUyyHBVAsUcUTctmMyczSeroWVLUPgRTxHzAcBKb7j88FRs9engLn95gr3tci4vEVJ",
  "key19": "3Q5pnNPrHP5Nuu5SeMMbbYn9m1V6cQ3wWsPCmaPpL7LFX1GVkdtfeu7LkWJeQ5ML4xspByA5roAHiuXocNDWJkSq",
  "key20": "4L71CniFv1Mg4g42erhJzf83N1JHmnsqLjWabEVKiqxg1bJhMfPu9n2zBrLyKUgfNiFJ9pE5VvG7dpYNMgjFggi5",
  "key21": "29X51MoNXZ7KKdiZ2Q5sUUj24G2QbADA6xptvx3S8MPJscHycSs7khB97UNLbFaGGtgd7WcmxNg3sNCaEFMwTtoQ",
  "key22": "4rchayvC48DnvcUQ7W7pSRsksHPPtz5bhnujBgjYWjs9EBAR7kFPrGfMeNawRm5K5A3vwMj1w3o7EZoNXHB1ZinH",
  "key23": "cWHpTKToWf1wVBbe1cjJTrdxYMdE8XwCZ3MFkY4H7aAbuND7zJ2utakttu8LLWBT57GCToZcyuuA9WUxJ5VJq5x",
  "key24": "3NRirixB5VseqZkTdrqHbKjvf7UdCngJySw9G8DDRLqpwHf2vPd14hAbjW8NvfVkfCR24nxAhfNFrwqhb5Lhnz7P",
  "key25": "4shLEH8TM6C5rRnNTTpvF5f35F78yKAGoo5DP7urb9exdxbF88tUYYkbKA1roFfj9dJJXgzunbLCruejTuFMP3eu",
  "key26": "3P3QjQrFqReAihV1smcvYy2Wri16iNXJ2nN5uMDgjqbSC4PmXBfShTogkNPiA1F9FzAsNBFYN3Kett6knJFNdJ14",
  "key27": "3G5suWXDNoDwbmcRtq1pFa7fJHzv7bZeLp7gmX6EsTM9bHSNwnZocY5FYbPGtkewpRexsjgqSqDLESpTsjMAtG9m",
  "key28": "5WVjJJQM7bBRD7RUopJMtkFHGDUBVobqP7VDwjEvTqVK61vBppMDRiBHLc85HzVKKYuV4eusfSU9t86stUeujAao",
  "key29": "3fEpwwtF8aVdaHGBE4uQpVQpkZWXsEMeS1Q4wgPprWyWNVskKWWxRZgBPL2kBof2NnLYLd38pKzPPqHkvz4bzgJT",
  "key30": "3n6CZTviUsa6MVcU24eoR5NYVWB9s3HXLfcTeaTGuYmfApGAHBN7DiMzRpDZmgEifB7xypg3sPjFtzKFhDjiXxQR",
  "key31": "3ngWDpG6fKYWprjfDi8DKuixYFgLvBkyvya9cyNanNECpiWa8UYeVm9tUn9uGr6wN2v4E4zTCKUXy2L69MKHuzTj",
  "key32": "22XxoRoNGJ5rWoKuTrbdK7tM6N4Hxphii7aguPjE725qUqe6rW5yc2PNNkozXLqu6r9e15E4HJuK1BhMcYRsesdi",
  "key33": "54d846YwG2Xz5nfvzWaeCVkXY2p62Qe5iTrpJR5r4WQpLUyjErsETGUyEBpsnPLyh3kHtXAfANCGwJKuehdfX2oT",
  "key34": "2bQ1N4DXYreateDtySXpjLaFf5isJngWppaJRYy8uzeacWYfi1eykZrcbf9HudXKRcHQ4HH8D5SBSvBSS7RBDRTs",
  "key35": "3utEcQxTijTBB9kWtpK1dvbk8F7AYUSopW7HZCKs6bmHorc5ipPB3TusvbqgtUsAa1fFfWu6mh8ruT32HTwfXZue",
  "key36": "5sVGCx5BrvXNDXvp4WKpXnnssBo3Zt8bn5yVQRGza2RCXkQouuJ5VthryNbK1QtGMbjMSwzhNaV2FiJPTh58psaE",
  "key37": "22BTVto7zoTXmJU2zWBrebzTi67eEUR2WWRdccnDASVNhTPR5KGrN5mwANujCNFud9HafVNDucq3HLhp5sceW9NU",
  "key38": "3p2U2NtzRXhJmQymKHWeBYHkGghphed6H8d1GhrhnvWoTLbuRx3MisP65gJiSBkzrSv9MzXHoyWbxZLPs5pKQoCz",
  "key39": "5P4SWuXcvg8qLwgvz1pSS16GY8csuc1oJy3MRb8sXpcpFBaX6RZuS8DHo4eH7GCEDexNhEtAoofXGvpD5ym6HquA",
  "key40": "1toah3DhhPv9fDLXChDgzXUkHMZ2GADeu4tmLtdQqL1wNjBjWKUfAhptvaJbpKR6CsrToTaWZ5qM6R1RjS68Lhb",
  "key41": "54tn8zfJmUgj8QyS2bvNEr8qaGvUrH4S8zdCzPFsoxor4eS68fBfyCGFtx8CH1hNMSNDeMCWYqQxu2VQxCTS6po1",
  "key42": "eLdT57YNfgv57iM5mgwmrLMf936srMvaKyNru5qdHnUm72wqh6m5aUJwvN3wPGTAeyMEGP7mzcJ2K2N8ifBGYkY",
  "key43": "3stWoARdbmbFaH5Cz7BgdYeR7JfHuB3VKDS7ArjZNA9mfsugNWF4cL3DAPAJ3Ybq4PY64wJ2zVcRH5e9ULwNQgqz",
  "key44": "4BECUVJNqSFWt8K1YRKVrDwqxjNvSCKzA5tmrkoQpwKV3bp5X21bvo28vNjFCkjSZzC28DtPJNzQS6PxnSrzfTGo"
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
