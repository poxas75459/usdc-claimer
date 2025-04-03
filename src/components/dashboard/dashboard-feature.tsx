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
    "HMPVPFzfxH3FjmUEysWHZAwNFrrgbZ8CAQUCuSsA7Jp8dVX9kzKCBAbmpaN4CPVY6Ka7UcFvQ3kQUKymDm9xWdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pA63kdohhcr7RJqGL5oMKgRJN7pbGrCSZ7LBasv2cSpVB37bvTkNBJPSgXVahCCgLvSs7qsmhyvZhNdcpsSngaP",
  "key1": "JSdQFzupjkeH4ANssY2XEACNavUJZKi2QWsbWHpRXN72mwyqzXoKpXgM4XrKwGPpJut3KaUNwnVxqVoyERV4bwW",
  "key2": "5oEDYETNUNooZkdvso8uEXdxeHrqeMw2c7FCetc3JdVvcH6g75aesSjBmB3hUfYUde9EVfYHtSwJ9EcwBwp1RisD",
  "key3": "5cnF2ACXx752FJfpzt1MEv9z7Z4wKbgGizujWhk3Lv5kuYYHzeBXQxMoMXLKMZisvwAjkESuoLefNEVTkBrSBqNc",
  "key4": "2Q9i67TMyuujv3SrATyToNYFXNFHFxYkqd7qX5JetVZEMTYAtv2FbbZ5Z8AJohBD4EBFwAoxpmkYoXXJ4qXn86FP",
  "key5": "4GmTdHNvvaVAiX5PVPLayn3PFwcobZZYLouhin8RStu7MzbrJGJmkY4u47dEysJ6AhE1u4MVpwt6AoKHSLoUD2H3",
  "key6": "5aqe61AsK8q7VShkxHYt17jHZM1MbK9uwusLiP3yfz8b3DXAceiJGxEF3BNjWHcHAdU5thTwpXx6BuHxRd5nCrq9",
  "key7": "WrH5FTHbUvqJc24iaeqvzgZRyBMRPc5itPAjB9vciTyHx1YTigMmJqDqSgL6nenSAwTXNcowwwQqkMX7nsJ2ytA",
  "key8": "2dMj9PXpqy471AJGtVkfspyp3hk2bMPAZaYLLMtAa1JftbYxYUXTxRAtT1Y4ddA99jYfSJFpefVsjt14fAeznYi3",
  "key9": "3GFwueBu8WmKwrSYMC1myM8zeMwLVhNhh3x1rYtbYJwZHKNuYSmwkHb3jVwqHtDgUyYT3i6zahTegJg1nDLfTykB",
  "key10": "58ZPLLhNnVZYsxAfog9GggMZeq5xT6m3rLiqgSDxqhsQjKZTKcUpd1mbKZfEvsVM6FpXZY9Zj24HWibXeYbW8NhY",
  "key11": "vvur2YzPcmjez6j5PjKE5DzbKqrELZqyPUqT95G9KC6z5g85U4aejJnspxNyVbiowniU4MDfJAhzNDPwoaGamgT",
  "key12": "u7ScN8K4e8AmHA4zDmZJG1fRZdcb9BKU3qT7gSpqMdgtDWvhSLXaLjUzvw6XtUnispDe2rDswF2YkJMc12hoBQS",
  "key13": "4PbXJa1jqjs7cxMPfFxEkrRBjrFQFtmJy8QjWJ6ijQQddhmb7ZR1DqW1pwJNJUJNLSoqYNGQNfTcis6aPYf91VdX",
  "key14": "4TTpQbdz72hvcKgZprGU4YbKqZR989KXawu4gfAVfA7L7WLC3f7PjoaTVHkVMhX3Cdt5o7L1JeG43jp25vCpW6oM",
  "key15": "52fYy9xDj3uCkHHjtqSsApqKWebrja2o7QXaEiqczKzqx2AjiSeWvRfN6D73JqmwFTNVmmYB43ed5hnRNUMDGbeR",
  "key16": "4F8UabB6kHczP3rXAkzWYgfsDgoRJtj5juVWPcDjokhDFkgkujURwy8tM2Yc7PT6jDHpHTxS2XwL7hA6dKZNVkPZ",
  "key17": "3LKbpVYnmy3RLwqVZ2hX4mKnHx1rgXUEKEKgrnAqafHaQeDsb32H3KLiEEKoWVvZB4Y5RTfemEnPEdjXUK5RT9ho",
  "key18": "5Y8qY7cMWg9zhweSJRXhkjZTKhcsvpe4QwKqzPKNHNcdRVXMw2wHMxLzcu78sWhAg2rkpKEjzFgT1TvQuLmiKrt6",
  "key19": "4ME65Yb1YTDHEtfi3tjXYRENyaAAjgihGhdmvXF8pjc3cSMmD6twDFUUAQwJ62fktHrUV6nkNtnD6PtctxNckyso",
  "key20": "3fLcyZtt1vwget6nHxjzc5af19Uxrc8X2Hd664LsYhyUDSBb82QwCjNMMSaXXD47SpE1ieaWzCciUP2MkZJbRLui",
  "key21": "4rzmiZCdi4wLzgv7g5WechY7TUALnHLJu5VJ2fD4rGvDgJqm15bKzetSq8tRpFT4ZEYuyHiiFk6oZtTh3TDXCtSg",
  "key22": "4NSdzXoL2DKJZwEzNKqwAhC6PbVVd7epfy2ozZCUQmvCPozfV2i8qArMZKDdEFg4ZmwzKcaNZJNFeoHVHKFYbSrq",
  "key23": "4yUjpu1KJLeYTE92uMSPcSKvmaqU5HzrbFtWa1hcpQf1T42iZ7Fs73mrtcofmJuGGnYiuTcJZn2Je4eZBuFQcrxB",
  "key24": "2QQ7nryrh89uajrb5EJCm6avEkWy1ZKoQ7NJm8dU7PTBYfX17qDfjX8Zss3dnfMzQrTXESRVH8eA3pLUrNAYbkfN",
  "key25": "2c1h88ofRdWVfAmk7vYmZm6xn8AJyiU3H71PESQmHKEbJni3KMEdZjUYHsuqQjrDYFcrir3qDMufrMjv4VoQPudj",
  "key26": "3LNeb3mK5Fc6vVTYtTAan3uoufZv4CxNsdkGoLXhH2yDFkk4rNV3VEfL4cQEjMEpMtsuHFCutXk7bJ16UxttRK1X",
  "key27": "4T5a911KdFSkjzC17stLGq7Fk6xJYJtGCzEb6uxAb3KXaXNDNAKNWiTBev1CopMBVD9zTMmP6pagPYBtdukQSEAM",
  "key28": "2MCa5AapDjgcbrBkEAYE1Ej84qpXkUtyG8Hh4nBqfBJyc1eda4WZDCPc7JnVfzM7uT8APVrCEaaNfJSBGmvjwFS1",
  "key29": "otok6h4XD9wTVkTRSi8Mm3y8mGrAGcC8pMuqrWUBMTSyjrPJmMUceEQuSr6SPe1JSNXaAiyCDBV4PAmpnH4R1y4",
  "key30": "pb2c6NHcBV3uND6ogrFFemQTHEkDdn1tVmu12aKveFcVhLMGrN4DcS1s9jQyPpiXKTfjxA2tVdyZxXxtL3dVJD2",
  "key31": "2kqSqkSHkR2r6zUCkKJSHds6yYNMQ87UCfyPLHBY6iY3kCQDvbMUDwY6d3Es98bdtaPJWfhg6yX9NPef72MtcK7x",
  "key32": "3ruAXKPsA5WGHv2f5cqB8aeEsDTJbuExZjC7qvf1DCczuzK2dtwfAANCRrfSCcYXYX5ze3LTLZSCbqhnyazjBUiM",
  "key33": "3DjcSDTxkHZSZBRgBQcjqDh9DmeknPc1Tgh3kh3kGkbrjoajpqZnWZKoiA7c5oPiNa1kaKbFncQh2rYDaC8Q8R3n",
  "key34": "2PUnJpoqPJW5yapS5cmLx7AdR3dpre9q9pm2NEYviz148r6gFny6deKPZz3r2MY5t6oBr9PoYxJc693jxEt1mFFs",
  "key35": "gtyaxycXT4cDDiizLXjgNKxUnkmPrcKatT6PtkNrzUjVUUcYgRfGp1GHrMxXtecrbFo2zqyVsj553V51cdWeLZn",
  "key36": "3dL8jMJX4hsYqeEy163rYCTnP3yMoU2EToPGmio6V7QviHhdofTLRg8pS37dUu7TcycbyiSb8VDpwXn7AgHymrqv",
  "key37": "3pCLH6zjy6JgdqNzcL9GKPm5TbEYoZZCTZZGctKxWwDgXcKdEUdJYHZsx8tMhAfwVgGjD1mRSQicbdiFngqDXSW3"
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
