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
    "2ea8fngrcX4U6Kv4yrNuotyXugKUXQFsCDFcPpA5FvY2Mh3QaCzKqBdHvzdQS5BcrbRmSSQ3FiTcEjvtYbUk1WEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f4ezpWVLSn6B3xf15C8WhwpqdKjxoFJ9AVkqp9NgsEMMDfdsyR16iPpytSJ1Z9MnaBcPBhWrjSA4UMnoVe2sY8r",
  "key1": "4RHkbQT2XVn8RFd5bLMonvPNEdmvWGAyZTaemuJGk4TXooS8tE46isZsBFgiircPvMSBHqXuK5TQyuXeEaHe8K5p",
  "key2": "2LAGd4mQ5Ju6CPpDriMge9Aw9hv4DL4joPeiXkskBB674GjFJmdqjJ2uNPDhhMTnfFQRJHjjU1UBwRrABsTmCHgg",
  "key3": "YiVcjkpNpYtArHrMW8w4DcYMRNqWrMSSkL1fWxnzw1eQ2RDemGJkaxH9XRYzmSi8QEdAhxPQ4BRUP4zPgmUjbxm",
  "key4": "2R6UhZAre54rkxUqN2363kt49F9nidppi8zNrrrefA1PMxJwhNUAznP4bCfjrBJtpZzsXpKCHhNMr3mxH4mn31ht",
  "key5": "36ai6a6ko8JJLwR7rcysZK7o98ktbPiv9pMS4DdLB3YVMNfzi2VS6A3jj3oUKCrSz28aJ4D8QWuUt1iVzyxsSN7f",
  "key6": "2AfQdMqthbcgCgfsKe7HUq8j4YcAEQT4JXjihWwuxfj6tB1cqysrRfFRix97AiY2MfvohN24MPqMMB5dPyniwxgW",
  "key7": "3ntHnAMqNX6XudEnVedVAJ4ypYRtxpsD8WXVk35cGWhxVWL1kfdZLiK2KcU9mtFhnrpanz4CDXMn3BLoRwsjqmgW",
  "key8": "2kgGhCWkSytiemywujvi2r6yhJLjanNPDqNBzBY1fZmp9YapZjKd5vizMaG3HEJrbKyyXzVXhZjQsUnxZ3HfCTA5",
  "key9": "3F9omhKpYPLdi5jZgsyakaqS3Fms41MjXaL1VSP6aiBgsFfbec7CyJJBWkdVat9LEYKdyowgTSANGax3WbM3Sp7E",
  "key10": "3C2K3EobjnVPfcKPUfiDcQtFMfw5NepqpsGpgGmHYb7o6FV39k75QLsMSm5JCQsqEzffFkdXoo6ADyu93BeMm9MD",
  "key11": "4q3gbKBM72LVHLfLCQwPig8CTXaebqq5bD9jAD1uubdNHXLuCyCGyWKt5FHbGhBHNko8rYRaTdZkGrVPqk5Qr8q7",
  "key12": "43nyhRGWjH9dKY2nccasZwvVuXUhWy6K4VNuW8ogze7CEgSq1EBcBw31uDxmWCiCf4aVy5eovf1Zhb1KmRYpc5ot",
  "key13": "5wLWtxTJaAfsz4z3SPgKAqFY3G5rdgTNCVyrYLczYU2tkDQMcetxRKtnxrUoFFb1CLnXLsYd9mxFZ1R4qvc5ErQD",
  "key14": "2VhsVK6jNC6m3AEC6knhvt1oqGMohH5tdcqadRGyA2gnsqS2zsBoR9EFCsy3W88MhYYLPFXssj47hbEJ1fCn7Xq1",
  "key15": "2AEwGjyc8s7xL1FHAaeYqQhEoAZRCajELUJ6XLNch4uKs43uMwukvvg2tUwY1BEAx4FjH44A3tRQMWbFivy5VEqZ",
  "key16": "3XGZjGBK9MxKqiq4xsmC471RfZdZ3ypwbn2D6k2BRZnnJg9VnV2z5vdXA2BAiatcPoLQbkLp97S3wjVGdmAotXtC",
  "key17": "5Q6QzWmLB5PRX7XTuSchSqg8gH9mZwMkwdD6gCHGoAtxBrHMJgdfosFWQP4vEYoVvETH1Z2MnLYEPxDAsg9TQEL3",
  "key18": "2ABubcWdXViSdgYC5y2AHEAaAx7zdbPMH7jCAcvDGsCdNULZLSC5Dr4qjZL6eBN5tjS1NajddFdnbnLZCkXUNfdH",
  "key19": "3ehHxjVDTCftjUvKKJab6SU47CDevKJAtDc3fwem8wsPKtGyX9C4gdFRFPdKijxLpsAP65SQ6XJ1y7dEcCGVW6fQ",
  "key20": "5BY8h7Yu2GUzz4GQ6zV3s94U3VfJPi51VKEvGhTf1paxn5heosn5rb3q6HPLVm5udegCVt7gjoWAwAA1YZRDmEwE",
  "key21": "2FcUg7GcNsKaDTk2iYXL5KSdngu2iMeZKKLmi7tPoJS6xucfUbm7nTcG5LefTz4MJzmxHqgjqpUTSRCez8wKw33U",
  "key22": "5PsriM81UmuK5n3VXiUTzxAeeSH4GdcaVhPpLvh7VnbMMEvkG1TmqbHKKu1mBkjY641PS3rZzRBRzEDxhbvYu3VT",
  "key23": "2LkT9KvMx5nUmpcF7beAh4LyAwytSwnskxMLY96YoADnDFPA4mccJ2qXMNGGpxRCLo1fSmh8hYu1F5Y3zY39Ga9D",
  "key24": "3cga4PpCttRG5VS6fnUvmFspseMgCNDVwDkgdrg2xRmBrZ4SmcVrch8kr61WY22d62du1zjkjMKnpj9Gm5uhryuT",
  "key25": "3w1TYM3TYbecF2Ywoq2RYNkWqM2mwmgi6nRwiJsNWehH7EvA19peMfq85q3U5KapngHi8CPg4Wu9EoHbg7sUprHv",
  "key26": "2us1ctvXFK3om7S7v7CShK9ej989BbsCo87wDy2Y1q4Y7DFRpk8uWLsi8FCrHQMy52foSHEGafpRZthNjvcu4GCr",
  "key27": "4EaN3Tg21bb7BMzgquoxGeruV7fyKHnPc5RTeqNE9NrVixzSD1LThsgZ3XpjDRkiCp25YtEoxdgdVJyjNrXeE1QG",
  "key28": "ibCZxQ4iSNthWqKNetrwkNdk5JuX38jhsxhFnHLjxxMse3MpG7FPnPHDnFFdUdyi1ZEvGVNWtFgKTzN7jag8DHF",
  "key29": "2zU8F9tV64b6FwxZvB8MG6diAuijZd8kXFytx4E9ubY3oiL4xvKeW7xoNZB9oLoVXEreYn8D1q5SVAfBhjMMkNoi",
  "key30": "2T7Sfa98s88wzjw4mWNnMi362jJyaiRiCrZUVE2UybDidpg7QWRjgZ69sUa7dTDjz2tUuy2QyQaaQYDKX3E2K8mY"
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
