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
    "5fGiY1NxxW3j6eq87mmm29sH3b6FkShswmfsRGYry5ukHuqd9gFB1EoGzVNG3Ek5EEEpcXbjRAcpzWQ1MMVAR6QY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MEbR8C2qQYcXGPqfet1oPKZtD3P6wYyVRPgHnZUc8qWnAjzg3zvgeyeKY1yQzmixAEhdpaKXhCdhwjQieSkkW86",
  "key1": "vgVsuJkhJGMjXXkGFW8TVfFYBWCnnhkwcsRkHtGcWaXBqiamvs9JkCtXhcocZHHWCW95NKYRR7yg4yq2w8g8Z7C",
  "key2": "brdhLVDaeNaTCBEhw5Pwcbr1DZsByCFgfTAaMzCtuzcZhdEbF9c1ZP8dSg2aM5kGzwUQLrg82hkfWzi9bqctPoV",
  "key3": "2cbMKByyMBHf2Sw97e7kadKStLS7YfCAuJ5fk9yZVLBaiE3NEWqWByAsXQdZKt3G6G7KzYwZ7AeBpY2w6juNyE6X",
  "key4": "28WwnJNyifFtPunUd9cBFBHEVxhcr3grJDYGq3GkBPAnktJLaFY7vxCWWXsAQBbp8EGhyk7Zo6e1RMF8Gc1hPP2B",
  "key5": "3zH3qwypGAuwHziXRNE6Hfurcdaoz2rRsUZWNprtNLCcgW2gkL5JxGvVmjb2FyvykzFQoYrmRAwsmH3P7qLApznr",
  "key6": "3up2Rc4Wiy3SmXqEWBasdTQnD5jCDrfDxjPZxxmbZtFTDEE3Xg779ucE5HqRPy12xv4dDSQNcQWcCCVwY6XfqXkw",
  "key7": "28wKtjgrjphP3hczsrASDpScuaAW7VWNQYEmBNYzPG2zVLYTzpPJV5NgvaPR7TeHuJfamRoGAMm2Zrdmipjr7k4c",
  "key8": "5vhvpA4KWtGZurDokWzYX9upMS6zLTuFmpu21woxRArkuPeBx9DtPoKHZyh73fn3DrFkKpknsuBs5hTXKo7fvvcn",
  "key9": "axNtzsFSBEgTHjgJ84NR7vdMmzbC4SPesHmAo1m8bPWfCWKwm1YbVSrRqdEuFFo5Qu5aYkGQfQ8THU8PJvHVeZA",
  "key10": "3DBtxN6BCHadaTR4ttsQEeiZipWMvMRu6fNHbNaMZsNgVQDuLPRsBRM6X3p3DsobXQiPnuSoHy3U4J8582JZfp4o",
  "key11": "5UXthQpmmYzv28rVi4zQk2dDYt5k6H2JVL8KGjEt2DKKkMvbFL24K1KeND3mbJVWucQbPaVUDJ5J9TJ8t2C67CiW",
  "key12": "5jfUfEjLttuD78mY9X8t1E9aMuaaT4P2ZSt8WPmVbCX3dVmYrxTZfQzaoGsTq8uq4b26Tw76wsGftv2TFNjsog9d",
  "key13": "3NpfHeEsRRnJ25oYQkCCWRxmYJCLbo47GuNFCL4FrT1KA448TiPcgnF61SE8VRgAtFdLRSjiUqfkPCi4Xoaayqwd",
  "key14": "66f1ziEgLU47wgXUXyvzqxgfMQVS822At3f6R115qyvEX5Ukum4RsCBUVKLb1sNcEP7tc6WKaTuvmD4SBobo2qc9",
  "key15": "34NwissMvqt8TafjaVbYCHijd1jU9gingSoA2uaDKj44uD5zDNgC6jVvTWVjwSzTJEMi92qSu4iyJqNge6HMobHb",
  "key16": "YLpPpkwptY1Y5KkVPJ9ipVq5SsDPQ1sB2AF8eXVPkZrTQLXCcc3xycihK4PVeJ3vsqRzqxHSqw7d3sUQvC2VkgL",
  "key17": "29AnMpNnVTZa3eKABapvaAFkk17j3tVQdcPZM6QtGMSLhAAa5icrfbJxkmxfFDPjtngSaL9nx1w29bzYPcbx93sV",
  "key18": "41evRJBRz7em3ChjAGzWHvNfmPwpvxYVFt2XYPf963F4b9Qc7Zv5VQYQPtfGu22VUoPatuXrd7p6EKf2HUD4rrRn",
  "key19": "MwnmEZXdcBuqcDmu1MKe6u3oNnm3hEVVNizaK2tyvbVhy7hSeZG3z1a6FqzBkfQBHmdJabfqLe9tPNe1sq6jYHj",
  "key20": "5xUV9dPV4ppGis8tkrgjAy5CYJ7VNzsAQxfv9TV4BVxLxNXRrw2hLXM6oP2Aeux1XhG6G4sFRAx4ejSWGLaMfdG",
  "key21": "3sByCVW7UnpBRaqdYBQZcB25eRc4fw7JEiqxKjrEyLFUm26CAjdq16yzgqnb6Y6Px9vN2d8g7Y9ZLZhWpeqVQYVJ",
  "key22": "4nfJzKeDQejeKzmKbHd49q16CQbK7HkFRPWsssgqJwgwRoTw2AYz7ENwfx9yFc4t6Tv8LZHeHDAYx5uDKYtFexDK",
  "key23": "62aLc6ZouosEpP9VfwasXgW911FTkk5MhDhKju26aF5jonzbCiwcfDSTkNRMi7CaQccUMyH5jrByCmiH5onfofFw",
  "key24": "5HJFs9zkk8RotDctSEW2JzSueoZKgbad3KjD6p6axXdQadJj6BwrEAnpDzpQ1vFpTsFmwWajftYUD2rKZdvSkQcS",
  "key25": "4bppcuWwFSqAsXuJaJ4Rr4Wcq68pDpRkiFKdTnajN5Se2SzFwGeJ2Rr5n4q5iDTYPYtu2euABqThQGUmKAYZneGt",
  "key26": "5WJMy8LwW3Tb6nyRZG7WVuGQbzYBCkA7yaZRkafen7A7w6ekr8S1Lzw7kDiC4X2ewkfoFmxehfBEHgsUcnNKKh1F",
  "key27": "5bcL5NdQXWcJkfq8BtWLY5VxZ3pRuDWXBpNv8FqEvWpTFkGTXSYCDyQQ4ac5DSVUM4ogk2jq593aXNALVwstAYnm",
  "key28": "59wSYLhtf2NgbLwyCtRatvMCajhjsPxfrGRE4oJ5tusHirKWPuQb84cvw1a1jxWveKmbwpthuJnbYQcTgu9MeUSD",
  "key29": "5Zfgay5VnChr2SCdxvGfmZ4DkqdS6JbismcpdpzxFPGMD3BiDu13c5dAnGotZFKmt1YsgtT8ijV23Kyd7estQooW",
  "key30": "4vaRGiVqgWooBcsLfaVBYaLnU3D4V5zHmYhoMExSN5XKnMbUfiLFPmoL7Fm4vn9AH3q2GHuGySSFJBzkDT6zBmfK",
  "key31": "VEGMd2SnuFREXXah4DLVTqk4BtCy1aFS39v97jPQynYtg3e9iVFpmTkxcyhEaE4rnbD8P9DDSa95XAwvh9t4ceu",
  "key32": "amc2zgku5p4dz1BtS2YDGHmvijHhpDE57FFqGJZqpPWzV4Ejq23TJoy7CMHVFCiFxr3mYXixLaEB2iFMD43zwwz",
  "key33": "241fcA4G11Xh7bF9DRygkjRxVezwFRiV5qz3XHTZTuXK853ZuGfKvpZHTuUAaMGmQjp5bB1L9Cq2FVX2pa3MJvGj",
  "key34": "5m63iBdwCSn7TePEy1aaZD8hhWwL9EU1Pq21TqNP5rzVbnCrLNZFANmVZvF533VNzyZBtaxY8RthVtwQtXs99vED",
  "key35": "Q82hu9owQd9dGERJv9FAAwRM5BawngE4D6AZCrgaoePn4KuYya2ixAF943JUhESrF4piibmmjuceCPiMM1LJDUY",
  "key36": "LuFi1SrwxqksWjPR3uqScEiavWdYqm5XnVTKNAbByZ4quoWFStGJFJd5Z97dLdagoiZ8xw1yG9AuYJcNncz9jCp",
  "key37": "djG1cr4qaTY3TLsd42QFGxf7yGhpqUq5D37LiWSCasouGHwdaDARC3W8ayVXbfuk3DpRFGU8HuYkJR2x37d3rDs",
  "key38": "4GP7MKqSuCohmcmZ2WLJ3Ugh9C32T2bpKfyc5FaLYx9D4pcxorpxjpWpmiUfcTNGZdNMxMPqNKbWKuC9fV4b8NgC",
  "key39": "c7Ed8xSmwgdbSkfD7huhi5iDLemBdsFBiXq1b3t41ZrBH6GZe7VHXp5nJndJCkWLCLZkkYh6HzWoRjobhWakfcL",
  "key40": "tMXtm7AvzntBVwEnrkUpMWeTTEAW5fduer3TNubMKvZz1L7NNmTuoeyfZQ7c6ZPbRNQouwzjksMveeHMvhx8LtT",
  "key41": "tjGPed4Wc3mgfxyrQv7XE1mjaaE87XvHyVr8DoFZ7wxvJiSHfmxVNJaYT3HsrfDqZs6mKHhFrcK7xzgahHzoE7M"
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
