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
    "5tdGU6LSD8eWw1bqJ2Dyifv9d359CC7JHsSwCJN2sNpPxzP9TSdPdasN5avY56mgCoP5g8YcvL3C3hq4SSXnCwA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W7RNWzww7iwFbLmexGwMLhCZzVsAT7YVWP5HuSDB9Jj1gpq6xJsreQNByQcKi7PbDhUoU53jXjQTCbmDpZjBfGv",
  "key1": "5AuUsFzB56Ncvqd818JHYmuQFpcfL6cEpBN3uiXHF8gHodzxt21AKqCkjXKvQ1a7oqrrnyc6YjvJ8NhmHXKv7CrK",
  "key2": "3hAHqFV33iYy3MkheZro4qqGWfoamKdxTLHEAj6ewRhtQPd2Wfyv7WJLkt1xkXqw83oUVgoSFc5uafbaqjSPVnfr",
  "key3": "2hB37B78onHL679GMdFMoaM6nj9ha3phXo1AL5sQvcC9CU6USVxcKq7sxra36UD8hCr5bWZ46SLfLbxBDrTdnbXM",
  "key4": "3VXdCvQRWosHkPLWPPvk9hdfFARLnx6BnoYjaf1k96bArsw25Dcw2G21nArDCDGJkJ1Up1uvFYNWQdmVrtbkjiyY",
  "key5": "2GmGtmMWGnnb4MyA8ZpAA3CRrWireoW1EaFvP432vBsu3XG1woXLfeF9ZayiZFh9GXswfT5vNof7bFAFS8iCGkoB",
  "key6": "XMW6kWf9C2RZKGMNqcuo6H1abfqCxveQreLeiF1KPQzYb3nzeEHwpfcquFc8rtbRvWvHJ9nNGTqGPKWkdYLNv7s",
  "key7": "4iEZEmgQhiLjDaJS4qycVqZ62sDbeFN7oUkAUvomeFPZpNDMsrgGo16znJNuJ9a9Bc8jrGVQzFpeKePk3kLiDiBX",
  "key8": "2cZp5kQMPdrpKKsxHWrxfKdgpEEsx2ZAt1zQcogXncRDxSBJTQWWTALHKBtGHcSq853s84ze3RZAURzN9MCPPRde",
  "key9": "D7KKX4Gk31wgHTAoC99QDtVqAsjunWhJ4NLABqpd3ibFwGWJtzfUvefcvrJs757XX9RTNUHFcy5VsuPS9rkeDnF",
  "key10": "3FJiZmQ93mkfC5mpVD84K83rgeCkEjGfzULEN6UWP4XgfuCkeGEfcobouNvEFYeQQb7ohhTSo6DSVqEynUktPbNc",
  "key11": "2ZCfEp13h53JVqtnLnLfAVFrs8KqHqJV1jcGpGVhNDNXAUpqS93gaHqmipRchQnnRCz1cTAyHfUSFbwE5zzNXUtM",
  "key12": "5L8iMzwt6X9YY3jYL2YtWSFWbY55L94rKSXC4nc1A3726gNmh4sXyiHrgvUuxnmtDHovneT8sUApTLAx86k1HMqC",
  "key13": "55BdD7v9fn6XLZagqzrH9DMms628JyX4DUmg4R6S2Hj1LxG6U7pnSRGKRmhFXgpMCptQpCBnvCKvBw6uppPmmNmW",
  "key14": "5WeFm9TbuMUoT1GoT9ummeji7XFQCJCDgaaitKyTbgB7SAb6SR541KMFvVSCouYBVG2udczU47PTkbcjsQFGQKJu",
  "key15": "NmCQVy4q1FTssd2jzucHJthHVGAGJCrioF31agd16Hp6JjXCRhVBjxHbFye9VzMQVAFXziEdgc8wSFHNoMoBbKU",
  "key16": "29Gt5nBJsKnC4Z2YS32VLgq8SNqPnUu1X2H5JqAj1AMVazmqidxXP2j6ZNVkBVMyeBq1k26KDQCYqvg4PwU4vK3R",
  "key17": "3PV3d5BKAmUPYAbXC9YKMqrAN2Pnnsk3xQ2Zmx7szF99kC438kbDiyivwrX1mDAbhBSAD67NR1L9megFpCtH8M6C",
  "key18": "JJdxEu336XkPSsLjQ18mFTAaQP7TzLS7hfxpvEGXYiHoAA8iqk6VorC6EnvcLcC34L3eD23gmmSsYbvgSAFAYsR",
  "key19": "4M5Jy7QL7G6CUdYruayA5Cb3bf1CSc34A1HHYRiZjNTcbCnLYby6CwdG1XFPhs4jrsC36ee694uyjF3ZXV2iWLgx",
  "key20": "VZDehSSwgq63o8hyqYYk8GAFNrmpzFBvUDiP4WnUGivXsSJpQfGEhzD7C2p9CymucF4bNSSaX7iZ6BKrtjAacBi",
  "key21": "5GuAhsS3W68aVdmQNGULaXMCcxAmLkTXBJexFKNdaL3FEJ43P3BfmRoDFgGT9LaRPA2K2KW943CZRwZBzypth66i",
  "key22": "5qM13wNYKtANoSniLNS3Sw8K6MarfaFX1aRApZ3qzbQM5aZ8tDtveC6ZVxjZyb9VY4U9vkP34PUqHTg7j8SH7zdU",
  "key23": "2CB3eV67pe6B5PRZUHx2TNRSY5dq6a9kz5qa3EscKdRvQkjWjsY6qBypjsQSRHyGrxtZ1rUW3VTbC86ZDpvwnWGe",
  "key24": "Cyj78bD2F4rQzEKQhfh1vTQnMdvkWs2GumtrnEygzULM4eYpDuydp6zwSi8i7hqF3evLn4ve3ZRZpgLa8LSoHoQ",
  "key25": "631UFpVjcDnFZ78nwRig17P57WA8mz7U5ZyUMyC2v41y88hkafJUrMAjYoMethbRqmnza6XSjxVd39N3SnP9ZMk2",
  "key26": "2nwf4aMA5FYJk2DnKJRjLmCgR7FBhxPH2yiDDeA9HXowu6fGE6Lqwd2dbztn7XHQKkPeEr95khPPTexeHfyPpCCZ",
  "key27": "4y2ZA87JnLNRXb7n3mL3JLEGQzDZ6PsbGTdAVtbYksZtAa6QTLtkuMUMwaD4SvcfkWzdvLLcjUmUPGoQEPfqGXJH",
  "key28": "5ZadXozxUUgi75yTvxaHt7nLimsfmgVctrgZ8NdQjgo2T5dbvfjsweKFnHcqRiEYJjGXcWeEewqhoseJQasaog41",
  "key29": "24nh9fkeKD7zi2eg241Beq7SUos2btWxwaFW3VMPV5UhZcdkxo8JpSUvGc7KV25YAQsexYHcjE6hVekc2JJpztG1",
  "key30": "3aPp9wmCEX41AxFjMvRuKj35bwZxNydaT6ZyodGk2nxMLEFSyegzVocTtPUKfc7RqA4awd3dAQjCX5o7gYEYA8X8",
  "key31": "5LBUkMLhdMQY6DAK2CBTbFvWCF4Un23NCKL7mWUUo6oQLcUYatQ7JtgRRLgC22LPaF87BpCJeFFjWpV7niqqrFkG",
  "key32": "BNmw92xU3V7BHuAWQycg8CifJJYx65wmAQyBNHSpmuyvjkrmQukXk962EJNym65MahpzQBbFFYLFEvDErfdu8PU",
  "key33": "5nrHUCudQF3f9UDEzx7XLUaVV86ZGy3GS2oHZzL1hM7juBbBzpkFSarLXph8GidmaBUcN13ZxdEmdpNV7Ziwrtp4",
  "key34": "3P2NEMvVNFfEgcDdRpJp1LFsDJgEFhboJs2kSebwozKkkKqQNeqjRqUcFPdYCmnnU3Ek2rMyntQK7Gmusgjvn1kf",
  "key35": "4ZyaJAiXED6VyZJyyiCB74AZhM3v89vHSd1kqwV6fjnSY8YBUCgaYxReWuBUF9MLtdQHfyjrAP8ZJHCpHUcMedM8",
  "key36": "4kVPfciG11bUEAkRnpsE1gyDokZf5jhdemHhWp8HPpcKFS4rqy3CQQT2D1on3KKqMLqxePaTmoiPLa97aD5nTmX1",
  "key37": "37YvVVqrJucWbXeU7RNvNvybPSyuQ3GiHBrfTNQVb1EyC1mKSGTPsimDegmWGhhSWF4xsrVbDQvTG4NwRyrP2unm",
  "key38": "X2sqVehsLRFiQG4JGBYZcFZYc8J7BmJ29mD2aTzAZfwW5J5ZHe5fGA8fgb3udrurJvjyik58STAi6p26v5Z6skF",
  "key39": "5oF87MfqZ5xdM3KYYZGQZzUkBvTi25onwqqPkhqTP9X1TBzvD4xyShL7hP4CeJubrXTCqdqw9PoyB3FyHq7MpCLE",
  "key40": "4UNw1F5h2JXyU9giQyvtbn3aLPLaNdZvEShW43op83FfTvP7sYFZ57jrdubfAjZbw3NUTki5suYNrtcxUGsrznF3",
  "key41": "4FU9xJRi7yUQdnqVJY1GhSuZajuddu5WC8VCHkFTvY8u2X6AiHambr9Wzm45hBDfgcVpZhMSxXjudQ5jYQfFmt2s",
  "key42": "4bUdFx3ANDqk5826SE6CBBib4wsp3DLZkpfoPKqiyszmEnkCHrRxQvJA6AWSLVz6sZLi68s361QtfinqxAQsQAZ2",
  "key43": "5sUv3NizxQiFMgVN7XFbEDroGp64vLd1oeA2RRzPAKvTiSyvhgb17B3Jb8gFB8h1wqGD6LofJ9LvqheQLKdQjoUR"
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
