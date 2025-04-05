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
    "RDo3fF3HYJw7KMJBMzyptasCgATAzKN2q3zPuP2XktHgjE84sWVe91dd2unjTjM1Ng3dnzYikbGz2uVVgjF5CS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56BSGx78X1ijGAUQiC9Y5rp3sWzyPTNi1kXbNvDtqey7S7w4toMzgV2TBLBmdJaB2mMZTYiyiVyj9L2tZCdUTgf4",
  "key1": "4Ya6cCkLviTmFo6pnm8GKwKMR7VT8ZQwkkK2AioX7T45NpyXP2Y54RbhndQQCtmPpDjAiDMAS9RqWJPrFfjXy3Ag",
  "key2": "4NTjZoF8FDG6eVZ2oCsTbQWmvUgvFZkdaiZv81RtWRKrChKxSeEFAnwW9NkzNstFaeG9EVPTeufdL79y4S42znCV",
  "key3": "3W7KbjJzcZwdy1t26X7XbGAtWN2Ft9iRPRWGAXZvyqNghAbhk7VfrbzYNdVxGFMKsJsS7Jho5n8Tiaacs23jstAJ",
  "key4": "5Ru9wRzNKuLDAGTMVstrBUzUQTE4cCqdXre82XJue345gGLyumtuq9us3LfLzhAb5JjdjZcwh1YwLJrTjbVhuAeH",
  "key5": "6VsVQkSHHcEsKDovV2jHudH1Jb4V3KjcR16QFdMZUwrtxdjXFenBn64cfiTWiERwmQWUtfk5ua5ZLeGBaAyJN6K",
  "key6": "874xPTeQhJeeeZdbN4u6B3mafKAd9Lfc7aFx6e7C9s5bmrCypMpKnpRchKRZrjQwxiuAZzfreGoFVNHQm1TM9XT",
  "key7": "WcKtL2kwfSUiYN1YGAYVd8UQGushLWVyn3XeLnkWnGHMqfVNRjfCQoW9WJtiZouxRgQJcbUey39rVGfeMFaXt8D",
  "key8": "42bvJoJuNw7ZoSno76f2uueVTX9dLx6hfbjCwp68gatTqcegfFfjcPKWxaTZhh5yddqWNyF6g19W3iTQWcnZZD7k",
  "key9": "3XxVWsDDpUAFvQaf255AJ3yDc4anv5Rzgb2xF3dg5HzjcDktNDuCvQKknUAorLoyNG7qzs7LLzrkac2jgNApwQxU",
  "key10": "67kSuyCu573dFy1EaYbPY6WoqxUXnMQHBAkSodHb3EJFeChH5gcVTub78qVJbS58db81C7uVVbcj1XtyNLQsEPAo",
  "key11": "LieU8wjnbKxPHRMcq9tJ681B1a4xofNmALvUXpJiRCeECXjQUrf1kv5v17JNS3C1nGC1vviVpBd1bF3JL5y3Ydk",
  "key12": "3pb8EVSeu48TmeLN2KjLDGH5fzzN7pTyzp3G8558GyD1Da4YMkd5R7paDw8QZKkkp72QB1XjRcyuMtXPnQbCr9TJ",
  "key13": "4yMDfFg93jyLotkNJvPoLEtYvEnFehiwCvnLv8Dw2t4RVWtE64kTnb1z9NEmpyEgyXxkiobrkgwU2tV7WGq56Rsh",
  "key14": "3vq2Fj1KtXfA1Gh6NWPZYZBh9kxNxCrHpQzV4WGSr6K5mFD5KN9ZTfFL5zHy4MsaVgRfhdm1LJMn53zz4JzTJsXh",
  "key15": "3ci8qQZvPkSudcs6UrQkKj1xA4myQwRoEZ6ZG4XFHcE4dDVDaNjHKFwH1YhUhdB746kHzbkMxqsdqScvPzyaVXMd",
  "key16": "2JpoeXkg4WtoqffAS6yF2xAF4UWUks8MRj4REM126TLATMKJRifWa5nMKARAkjuVW91hh9hPMZM3mAr3o9M7VM2P",
  "key17": "4youYDxiXLzGBkCwFuXt9r3bBSbDbrDXjUtsUSiYSUZSigZzc391MhL9FYGod9wh98kQv66AaPuMLanBpVJG7AtX",
  "key18": "2WrVXcsZBAGijUcDuTuDSv5RDuFBv4x4oLesRQbfyFEVN8zhatAGFajFiWsfqxtneVnpsFsFHUNpTzTwdX9nEsuj",
  "key19": "DBigvBRLxJSNa266fqfHRF9PV293key77Spba6Zjmj12kueV1E3gmBj939nhpDnNCxZDH9e7varuxtM3eoL4hbn",
  "key20": "wNKPHrkGwvG87FjoEKC2Wzb8KNTxZrnrpC4k4dXWjBF71WZz6CcBNVBp3hPNfCMBAihNvzGqWviVHGHXxNTevbc",
  "key21": "5mQp4AjZ2LjjUaN7Xo2qHhthXuA22pbEeabdMZmcJr9t8TY78XVXySfUruEQms9YcHftXuVeQc4aHb8jeDGqR4Nd",
  "key22": "3FB7m3pEyBMa5nPuCKQri1xo2AVTouAAs16Fu85hxsNVB6XELPMgCotWeXDuKSR7nkxrunDAHE8rMynTEXgNsjms",
  "key23": "36FKFrc3WzH7ApC2XSYrHkAvpRG2W5uop2rk21Vyj6WogvhdgRTofSaWz92QZwrhPvK86XHCjCdyvr2J4dP7B5RD",
  "key24": "5tPdzuVSWWyGhUg6YFHbAhgjLAPJ8ff1UcVxkVgDKxjYbvfr8vHoGpLvDNHc9erSUP3DRx9mfnGo5V7M9eWKee9J",
  "key25": "4zTxPVXzwE5RRWwcD9Wu34Lffgd7tsWgvWmjvpqphh2CKCbwymSfQkTkTWizKhFGb6iSxsTZwikvWYkP5qhe8ZrT",
  "key26": "28qFW96ViUaRDPbepb8gA8QK4wwNKaM3VvvZtY7gM89GKcU8H5iAUVmTBScPsDcu264ejZJUirxVRbznQirccXVE",
  "key27": "2pAiTixoL9bx1yxP8cmsnongZgEw3yixTMAp93yScKUcEtX13JEVp3BXbYMPQQhwdYnhwfbcQKVEBCuURLYNbSXh",
  "key28": "64yRgLWNru1t8VJxWqZ9uuPmpzKHSsYhqZEcNTAYeSp6Z7mDkcpgMRsNtYH3QnTY1eFxrAuJbEETyujEaj5vJEtX",
  "key29": "3Qvh5Vx8VscGo1pg5MDnWeNGUv6QNyd4rMVyHy9Jro49gN8VZeXsYR41DfsmQZe2qpMJD6ywdr7s9hXcsvHn3yAU",
  "key30": "2fa9CnL4stVw4LpMEuehNkiXvynd55y7vijDV5SJueJGHvej55LRYk9QkaFR9sdQDuWuLzufrFvkrgaNwvXKGmZc",
  "key31": "4NxGGBvBKB4rhSDffdfqNTXh95vwax3bHnutpbcrg3Zkdby5pRSWLd8uanq9BuR2hqv6FoLma2iWDEJ52Ut4xTsC",
  "key32": "484uSXLkoYJ62YTgczE3RuCggwuDf39dgCYsQsrNr2uydNhkVrVZDYDR87AG31gnfZappGtGEJzbBSbLTSeTorPp",
  "key33": "5XCqboMtfZjHdAqUWqB6oLq1TVrUWEWdcNXEK869M3R4mr7wTspBgghK37bWW4D3QmoZfp1nbhSabnzjCmwN5RBJ"
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
