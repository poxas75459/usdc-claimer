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
    "5LTLrJQdfnvwAPgmbFn4xQUjRM6jpspHo4zqu5uMrKuFyX8Q52M6PbShisyr1A4UbeWW74KoyJuKJDVQWwMm9tjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hgj5bb2L3VuVNV4m94pgWYg56GnrC3YKxvRy6uega13mhtHxXvdxLD8GjG9AbWAMPNesqsyy2PTHe5N93nChTXc",
  "key1": "47fFkhXjHCbKvyX9LoDfjyASPNowbeAJY3GbkFLeqtwFusyP95dYnynqJd8v4aCwDyGiYRUuKM1RcCBgpsc48Scd",
  "key2": "3kxopGLYmigrr6GxCdhQnkGhh88tLvjzCnnSLHZndsCSp466FM1Wzte8i3byvnTYoZxkPDRzaTvgqYEp1sTRLTRE",
  "key3": "4irFPpZCZi88jHNg2P3jVGKFhUbL6G4sZrGp9qC3ywiCmQS9jLKUpB8rMVJD9AJ4hM3r8tedbqiq4uUuPZk4AFzZ",
  "key4": "5xL216u2MyUgSqT1cuUPAWpH2ngQ781hQN6i7M9Bh3C2btrQH2iv3LHh8RVopekPh2D5yocgB9ARJ7YLUgjRJop1",
  "key5": "huZxYLE58Z5Bu8uQkHq4HHy3xcunbLwzm1q9zE6rvNN77oeerTXNnuYPdNmTraEpLVhFCJp1KACFrAtokZ49aHK",
  "key6": "4RxmWxTvyBFnVUwGCwXf9U4TFykRuhshWsUbBSYYE3inPd8zCS6LTRV9cZ8h1M85enBWcdKpErudZARL99mxXo9K",
  "key7": "2FzgBvDXyqkEYfwhktX6J7SXD2vxCLpLoJgPGEkWnCyVhnF6gnzRH1sGztuivoCjh4M3wAFZeBqotYSnPgtCxndP",
  "key8": "47SWdN4Pm6wCJQHsYr9qgg3KusP86vXJSsCMvzgrHzi4FDybvJFpkQcYAtc5yX8m7rnncavW44B3uXkkcZofEGoh",
  "key9": "3ueNPRbJVBdUHNawUSyzpMjHKJa8X7ucKsqpdTNFLYCACcbnVTJRE2E2AaDZz1GTFhmnVajCEUbMDcV6a64YfcVV",
  "key10": "2S9Kg6pva73CzSMtvDhCDtWxYQ43jb2ai6o3i9Z4gN5MUEh21RtUAcpDhiDNEz3TKBzjK1ymKMwppaLPmiQC9ZuJ",
  "key11": "2ELyWd1J3BMYcYRZ9BVjEpFYT19dUTN6ucy7d3TZC4ozwt4SU8DwsqC98z2nTfTPP6NJxTZjMmio7zM11TeWSRBq",
  "key12": "4CK9cMTZu4B3Z84c5f9jkFyAv1NjwPt1BHyCPFdk8S8ADoDMFkh4t9sx4dvaMN7P8sH1c5oJ3e3g7w9aAAYFkths",
  "key13": "3Cnfnhcd1rDwEoMfihWUMccN7ZjMc1NcG9pyQNvjBf9odTwcyJjJuLZ8NxZzuoTz7bQZ7Ch6AhhohCD6DVZCGx8X",
  "key14": "4uQSdB6XzzCBvr2PU2h82zWncbfMHDpShZsB4wLbs2ZK2W1UmLvjK4ev8TJm8hsy74mJSEhuwFZhkLLc5vWsRbhk",
  "key15": "B8GUVRFVrctpbqj84C4HLW863ezpe7UGLFdbNTwJojGuccdnkN7W6DM37jGgepGs3EfkHb2NTg4dHy2aiQ6n6MP",
  "key16": "4GUWjtPTDfoqVTFkjeswpiXT7jBwH94pHcFv2kJYqjV8mN5SQ9eB2SGG3csRMfCPXXJ86tDDKnsWaDn62Ce6oDF1",
  "key17": "5y4ugm1rRw1dEVezhoTrf8xFcxr8m6HoTGXpVDdn8Tsbn8RWAyNwzzaJxGBotjkotapepzg3FjTfFQEZKZK2mhJP",
  "key18": "hk39QCkbaLdvCAi6YQJW6kH2VvZXkETUKxidzkYVUYYcjC3eNG6YFRFThHNb5AfNeAyuHjujGrEXW3zK3RhVB5v",
  "key19": "2kvmw4kXd1dm3R4BkcMSKfLzgy8ueZDuF7LUi3ZkN64XYhzMtYTUjPxVf7hNXxgv7Yja2WiHhHmZ7hJVp9cfhSaY",
  "key20": "41rkQN1ufYHHzX9oXb6Fp4vwdi2QNM8FdSs1iG9NQuqfSdG87u4tgUxPBxooQ6kkmYq3B2zXdkyYR9WxvwRqN3K1",
  "key21": "4gwVj4ZGyo38opfhD6Dvf1sW14BANcSEs81m22ot3eazNT392ATJY5CwQEABXYJvD7jVJAGvQLwSNzcYiW74h7uL",
  "key22": "YHLuDkm1aK8VAJdBy1btyawATbDgvc6LWv3ACzPsFTTWogqnri2S4FHcsHxX6QFkxCnV7kM5edhvriGD9KeieKo",
  "key23": "3KqydopW1iTfM3UQCDx14eDsgMnpvazGEp4gDEuSgHciSb7ABrqEcT1sjsnb6ZL96UqvvcH3nkNSDBGhYRTJJoP2",
  "key24": "2MEFaXHoyFr5wsvv8NSQA5ZHZCBUZjxpnPRC9kSeynMGa311X9m5HWoaJrcBLwYjPRqsp6gRbnMUjxUZHynZ9K7j",
  "key25": "64pXjapWrhFaFirVEQexUowxFNrpQuA7YagnMRKkeMST9qD1ooeTnLCJKQe8BxFKqzhRXg6HExpFaKoyR5X7PDDv",
  "key26": "42eCifo9chYtuTgoGptZKWGZmLhpL58Y6BiZsUpnqWvGkTpeqcNo7Sx8cNCR1isAiPhz5j5bz41FfpndoQLuUGFS",
  "key27": "21qP7URXh72RJuFk9btkKDgpHrsdA5uHJvuNGERhSE5LtjTKdp6xuj8ZQoyD3DHAgBEDYbY3iUa2DXhPJU74CM8i",
  "key28": "47NrKbZMH3q6Lp6TGifvsYVPEir6Ytbwh1RsT5RMurcfG84RgKn2gUid4egSqqyMVZi6UDTFH1z5SxC9n3AJPCBu",
  "key29": "4X6CHyj3EdiNrvqXVResofcGLc3y6ZRRopZkyDHHuH5UU3svBcHq2p2atc6axseZd9HFv7rrS1CxPtns16hwsFf8",
  "key30": "4P6J4rtU94dosgD7q6zv3HJdDEWwNh9CaKTftsk4Cthh1FBLCKzxBNisx44N9C7T57nSiCFVDEzrnBEtcZzbjCax",
  "key31": "4pM6Cm5DmBhorMBxgCXvxgDUJ4WwXm6MZvYxv1EpeAdfYn5fxG7mQDbiXPvfrrq1A1L3jzksJt5RjkpimUdSDL5G",
  "key32": "2YRSebnhGj76G4bnvE9Jnf7gK9NpeqKNZ558NJNbEviVrwW2XwUnhAKq3t1KvK1y85vPmm2FcBi2VxZRADNa4Uh4",
  "key33": "NyxaYW5ubjxL6CA7PtjVqFst2pDEQRq65EQpDgxsMEdKRZWwoutg6Dpn3HQSdmPQYaWWDibBaDD3eMN4oht2WED",
  "key34": "22reFAHcgdf5U1XRuxy3rgiXqgvtZEsKrnZs3ebfykA1JpMKjQMwAYjVEoovjZ9BugMD7K2xbzZf7c9ifaV2gDCc",
  "key35": "4rebo6BVnY7SwxLrawLF58j2X8YaxnvqAsyk97JZRpzr3VUYEer25Qm1yNK7MuiCgd9Nht9DyFmeDFwTiTzgRiPm",
  "key36": "3T8GtaNLDA1oX6d4uwSwfk5KiRK97wKgLq47CFJ7BBycBg3rfY9m9ivsQNBM4CrUoaKZqAyvE3NVP7ySNp61JzYe",
  "key37": "2PZ18rYkabegN6khxrqbHtCNgtJPTbycsEZrajbinqWcHCRaLTusfT9jWNv8QMWnNb4WgNixc6bpxzcod5HGufWe",
  "key38": "2CXcBrSu3cKf7LJusArytuX2eWpByGwaWbNuyDA4UCcLtYsxuen15Hkdq1qLyNUPBjFZoYZb2tzftVcxMC7L45KD",
  "key39": "2iUHnGie74u7oLEDnCno8SE3FhVQuiMUA6Ejf62hurJGPH2kFnXfqXM5ACFCttiyP7KebSpX35Rt3ZPNfZtCUr99",
  "key40": "5ZvrXnhmpMZh5Ew1e288HYabTYByKi5m48oSgqma7GFquGQDqyoZwsYweB5ZD3PnPWFHMXU7t2bFZhgMemJzcuwy",
  "key41": "5zaHkei2q31WyMJD1uLxLjsN6mj16iPyTeg93vtZzRF2cKx8ptCaSbJbGa4WBFEKAKFMwmgnX9sC17SLvzaZxykX",
  "key42": "4nU9BgVRRBUQH9aUmyo4iR6EjXfCfrNUTEKokQZu7BAqAeiLimser19j8wdH22aNxTLRwkvafP2X7gGihsmhxe7D"
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
