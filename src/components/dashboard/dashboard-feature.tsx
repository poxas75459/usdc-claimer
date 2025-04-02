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
    "3ckQhh46QY2eUfRMcpG36mjNEPdALwAyV5cJBAwuM2c6xdgUNKupirti1raD8m4yj9o2r7eMraPRzgxZdTxwCMCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25pe1HpwDeQwou6SBdpLdLBggQZoL7e9Zx2JhjzHepACAtcXKDpbCd1m7BXJxuRdvChuMK5iRLUe9aiWsm71afSE",
  "key1": "3RiGpSG3DKnL9MperyxJESe39AenPhCzmLNu4HGnWf2KHQzfcqJVNWd1n4rUp6wfbz73PM1HtrfFB2Nv9JkseAK4",
  "key2": "2xyDbXDZkfDM9oBffSQ8oRYP9RWo2V33Jch6GqAB49Nhgc2Pc5xGXWyb7TUJR7FAqmLkVRNDu32M9jWoZtHNEpdz",
  "key3": "53jZ33P5My9fYHpkFUArTX2LRB22cGXuXzQnMik3PzCA7jXtwjgcnY9SAJCTGrbXPnkrtGHvMMgHv5hBvpz5CKi1",
  "key4": "3NFazmFY17KYruwpKXo2k9enqwTjMKvFVU4uytE1mj7qZZxuRqHY6jsaqnTrSmPkfivQDf34AJVkJ1pE5N323pt5",
  "key5": "oGQ98jkhybpQxixXLMBLrB3GQxtyKQY9m1QPM9cK9ggbsgjYu7w6QWYofm48wknunvVkhpyRBo5yQRDw6ARBJC9",
  "key6": "22j8pLWwnNo1gq5wVVqhJQ7kpkuWbHAL4H53koBr3WgWnPg6V2KpQAFhFNhmnpDhwKHkBTYz5r7YVTZ18yPT5SnN",
  "key7": "5pnd7wDduq4TtvPz1VgVkwWo3DqVFmjyyBioM9nPb6Ea59mdfbYw9dYPbzCqM7qexhLqvnPdrUezNRRW4ZpW8ks",
  "key8": "521TTcf3XoMMwSWmiNsTVhNi94p2K5DHkDXMZZTY3aeNv7DuCiuaY7jGRRjuWbKSYLoWmEBWeMjRjfVfG8Fh54DD",
  "key9": "2odqsrTCreEgvgwGmbCRqMdvUHxDuRTzQrkFXsG3DKujztbGg8W4LatxV19ZyQuA1D8N5c8xcsyDDteK9stPn2mW",
  "key10": "2Y9G7KPieEA1qmjz5ARJt9dYzWYpTFF3MrbnSuChdhgRzdHtKB8V6tQoU3Vot21wDCgicbA8eiSEYWv9nazEtpKH",
  "key11": "2jvoJXU7eSGgnpYTi6jmMWRArmehgercuiAJaHWEEH9jorokNbcZ5LuwG9ZT1xTwgtc6w4rVf2Y4bV9sjdpEkFeH",
  "key12": "3VDjMEyqcYRdJcdjbT7pv7J5nGdNsLkPVan3wqRN49fGGgBUXLsSoNkisM4723EdPGRu2hp7eKdvFjyfBgPwfJLD",
  "key13": "5G6qHufXZC4z9P2HrzvuuZSqAHZSDk7EdMSXokXe4bQzWxZDNk64tHeKojXjtbZ7J3yD69x5PeiUYrLAGyaENyqr",
  "key14": "3rkw59S59hryrFwUKnGW8uTjbfYeVGSHag4SFfD9idmNqE4hyGTgvgLdbgQmBoG67cYwBsZKYqtsyDKYYZ7WCfXL",
  "key15": "4o1LbkSfi4BYvXz6xNSWWkPSdLpLkfMta6jPgtgkbt9EUiSd9ueNXSCTLMEdazRRzJfzSW8vKvp1UsDewk9bVwHY",
  "key16": "4FNEf9zei1ky2nHW9JtePN6xuqVg9J4TrYgAhsijFedyq9QMo2hytE6xodsFcUKbsbdrPh7M3MHSmsvNbhK3Uav4",
  "key17": "3KiK1X6ZQymUSzz33wHcdNrBtbY2wn2nPdeRrQNmrXmbgAvFDY2GJgwKFGkb2WKKQjJTikgMLXsNnwqF9gARF6yC",
  "key18": "3rf6MVcMWKE37VjQTywutRsDhDZZNDjrVFaHWJqhW6sMrTV4BhbLnEd1QrgBxgSnDRugmJsFrRxGdZkrb1BKRTmJ",
  "key19": "5UD2ckEpufTzneFWgtpSeTNRDnGE2AUPi33Dvh6xD363kV4LFJ9SBNTivuJEJaeTAg3ToCu7rCf8RZdfmAQvyJum",
  "key20": "2WznJBgfJ1dHVnB5mZi1CTcLmxNrnwCrHRDZYLTJunyXTFqVJP1LrWXhbQuwcFc4uhdp3KYepiMWDdZWRRnN8i3Z",
  "key21": "2np5yVuBa1rhir7nPNH2GF4DHVxXZCFMJ9cprMHfjyh1ca2qUUUctHXWnUGgAVdau5eHwDGRCWyecd5EWuL5JEQM",
  "key22": "MnpPj6QMM8aPz5qTGYrvSGPnuUAB3UX3jfjMZ6LYoZs6EQ87bAbJ7QxcGYyeaKBxHeMjj4cudLDDXpgw8jfGc3z",
  "key23": "3muxKByRc6WvQSAadDWuuwj3P4xMZdaS6mqt4pkrZpvNwtRKyG1H3vt7nvKL9Dg1dMsQoWSxgkCnJjmw14oGBqGc",
  "key24": "5bPUeXfJ67v2tVgHgAUkruwgwFEc5huwJCs6LsoNxuqoskREx3efdQaEivZx3pivBB37s1vV3RXbUAwu87DMFSHW",
  "key25": "5CTQf9P24Pp7GXgRAKka6zAAqt1x3EPFyJKh1sqG2AsWaSJNeSkjsNRuBCdKC977UN5a5pb9571vGgKjt5SgQYqo",
  "key26": "3JVnpK8jNcjbRffvJNRaT76AD3L7ppebmBWFegYkx2rq7WUqdhULPyyBXCCyyeRxrH9UAh3RWLWvtr8NfiG1Ys14",
  "key27": "39P5YczsjAB6zbaaiDrrf85CJLk1zNJBFttnuz6mCEcnMKGrgdkQGYHh8jvBzDfmyQUyLu2NwwDHYr2q3RsNGSeV",
  "key28": "3APnugzs3karszrjRbLF5gF2QnSQ2CiSZLgHxpcTR5BbxA9q8mn9eJB2cTt1HYVRrESkfbdk6hDEGC15cGNsHBk2",
  "key29": "21WAW15vwu56Pd3GVtuft4TCWkwKULczQxYyFXXB5HWb4Ds8NKaHhZ7GQy15jhM25Wxf9oNq63NkoCJZr9Vdvh5p",
  "key30": "3YWQwpRKDMwAev4kiBArhnCDUNvK5RiLPGUBceKLfkJmu5e3VLNscofxAAvAPz3vSZ4ryQNCy6ZWwwXSWKtS6VJ4",
  "key31": "dnUBZn4FfsFh4DNVhqdYLPmbxDwmFDmMhGFCRCmD7779PNnRvvCQZKZw8nbmTsppSuxKqoTeFR3wHBGk3mzyfKm",
  "key32": "4vxkoMrPHHMqMjyRwu1G1nWaKqjWCYNn7Nc6wygmqMMHHfowWr8XnZyLhoxo4oMAhB8oWPuAD8XZRzgd1BaCoYuT",
  "key33": "2BV4S4EYNiPSGXbeVrKBVQaQhwj1xDoQoEe9vFYoEpgkndSiAZE2q72NfVnbRm6kD8puSGkYUBfD2N7dSqbMwFCP",
  "key34": "64Zjw7pQhHTeggtWPYtik7J3hnfxDmf7LnZEyHx5hv19jFsyYKsAWoWCbxMMt2jABeRSoFSSp4BEgHzn3Jogtu3p",
  "key35": "5EoXUDjfseH7KQt7bmhmutsQaeNVop5f5NLWuDe3NyoThrxsPjt1som3vidBsjGnWB9quDd1x8pZnj2c6gx7Ur3F",
  "key36": "3rmv5TJ3xDTGuaZESxRFy4z5eXUPSxchqNL91Z5mFkq5wEjZCSdkEtqNB3gPGhqEGz1AAa2Jq5CGQK6dkszy6VwH",
  "key37": "4tUU3GNWFwDEwBiRo9grTEvpn4quXnS3ghfmUtvTELRyj1KAKRvXLLW8qBwmj2fTcVj2VVbvZpV7TwPFd9L5wuu9",
  "key38": "4JfrBKg5ozJQpzNdvCf6L78pqjUJHxbTCBynDp1ub2nSX4cZrpnVmJjNLUwxQfCQ8zWJh3kJgUvmxsTgfNYKKiXP",
  "key39": "3QKT2QGFjF1yULUWwNZpyeWEydNmj43LeJgFLWYP5cHesf1UYWdzC6W1BgBW9saECh3HmFrSpMUeWmCDyebkUFfo",
  "key40": "3Khhr8BbCSPwA5w2tF8DGcxa5o3SRT8GmWwnv8XrmLQhVn6AWrtUYiSUgcpDXtXv5ULJ2EXSRjf6rTpPhmcqNNbY",
  "key41": "5XumTLfcs2MaEYRw26aq9KNbDEHBK35RkrP8d2aQV1FCtwmYAYtvmwXcvWoECFUzsXno6KL7QLhjcVVLckC6RqVG",
  "key42": "4zmLSNkrgR2wv4PvjiJ5PQt6FMmnh1roAZXtR9yu5xskAEF9EuUt9Ujf8HJpKEdLCQXC1rGEsYN963jLUEiAh1Me"
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
