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
    "5CB7BkK85HaHG4fu2yCBwKmjaRYbM9cVj4nAQiecvoe1PtAkYwYWcaLtzW3JxQY4eoMWM3TQzyNL8oSidfPP2kuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sgc5YBcAsDmX9QvmLAWvVMUNfUULVESczexDsg3qBrL7SPtdsyFqdz9E6eEin45RwZfAzXfVCtH8uz3z1bXukd2",
  "key1": "2r7nAndKLTetRd6Q2zvF4WhWqyg2DtyDy43HHcRDRP87R7fLz59QXsHER5qNjSaNAZubK9qYb5fPoH773hSz17wv",
  "key2": "4iLT46ax9J26K1YUarV16hXFAVg4R8GpYJJvgn4jLofYN9iVnAeGeNVy7wafyyGS41QD4Wph6tbuTjkBjPSD6y3B",
  "key3": "3v7d1DrQudWW62sAcUrdUmM9LerHktexG3CevE9yraqe6DE33YUhatLth7rM3WnAM524cyfRSmugMEpsqifk9DZW",
  "key4": "4s2hjNJgR2wUzuEJ69ZiyKNqgv81xWt72vvwnTLEb97M5Cf6tUWVDdsJJqChVVZzuWYQCmjTGVnBN68L1i4o9NVX",
  "key5": "3uASCQYjD7KHrYg3EXgwWfYxfFZaiYo5kGaAkkJbEp3pN4o1sUfbHSVExvZVWSHqniLT1mgSj1vXqnvQ7PqoNybx",
  "key6": "2DeUjVtpifYyMjnMAJu4tEk1mmx56nTeGfv6oHCF4FGqfDRE3ZWLQhR2vdTxGbpwhQ3XdEC2htKS2Mposdj2m8rd",
  "key7": "3LwcHRvFfCwhSuqBtt6LHwHNqBRYFVqj4suu7nW4rBXNRh1sAuE1sc1oC74LR88DB4rK4eN7v9xYvhr36XmL45QQ",
  "key8": "3PxKeVwF6gd7CdJf1mXMv5JffEVMmYHDGskmKqstKA8DSK3n2LP9192pi2z4kHwzTAVAaiJroVui5WzLjJoUhZ2d",
  "key9": "3Cup9FdM9GbEaNv5v8VAyZjU1F3ygBFqtjC9L6GqPEpyJpq4eHzWSU9ryp9Vh4pF2y5Jtj5QCrKQKhykdJkBSmf6",
  "key10": "2tyYRE8B8vrqUtQQHm1RXPsrR1XSJCAqmmVVGwGMCgWgb45guKP3xYnYtF1A221FjpymHtWr3Zw71qSS5WznNBy7",
  "key11": "5UxARsztosGmxXuEBXVeZ2psBVTmG7vP77ZEstG1DPEEmMuEqUiyPgNP1MD2FwZtAGmuQzA5GqUMkf6DXSReWSo4",
  "key12": "2AKn2tsc4fSnyLfohy6PbBXpjHyb4bjSEJPyWp27SAQwBcFQUDJELzj1WdfCHnrJ9bTjeo9sNug7LN3Hrdn4kZZQ",
  "key13": "2ZKe1DJKGv1oDTg6mN3zf9rDXsMbTMsVF8TSHTtddHXZd9GD5B9mtfyPMfRwm3tqd4yie1FaZb5q9MnZ8ZASecKt",
  "key14": "rv3G75uMCk74JqtvfutZ47Yr3R7SKNDHiEHokLoycMYTai9dJ6TZtk5F9egwJbsojoHH5NV2ftVrMhDhNhPVwxZ",
  "key15": "4KhtC4jYc7aXtm71WvKdXKYks8eU6wudi56ncEPZu9kiSHSCjNAfxLWEH4XZFh2zJwaZYg7Dt7VSVhKdzKFgcZrm",
  "key16": "3EcdAQEvKjqQF6eXd958u4J9Q1YBBNVK9ZpY6BBbRqFpnLbMTh8GLchWEPaLE5BEaag2rQi2w9uSWpGrQhkMmPRJ",
  "key17": "4EDh2P2jR8PfXWgpFMRB5HyFmwKPkd6enPYceJjQKDCX52rvhwdMBNpyKgLWQksTDAuVnbbJFZnVmEYQ2uPsbzhm",
  "key18": "u1jJCu6yrV5XrRXP55xpgytH4PzSqtqwXuq7YACMN7Dc4t8mo3RjxzYWRtBdTgfqaB7LAM4FPjLtFobtnmSmx8T",
  "key19": "2GVuUYKDqLSN3TUG7qvmgDumQadboRJboodEvzCKmNrsV3UjR7WsKHyZVvRrJurFf5e8aPaPsYCCWVsNHkwZH5rQ",
  "key20": "3JfTHC2Nr5pwmAnbu5dh6anJBxET2TmggFjFp4CFTxLZfdUaeMyJKFAXjx7YKZDk6i2dKvtUiHQ4nhZXvVPtaiep",
  "key21": "3kwHpdtFrq2wTjxKqkkTNi61jVgdWWbVJgtAXmmrTspaZ3rxX2ee1ALud6QDfkGf3dLsPo6LfzrKhA96UgxNXHTJ",
  "key22": "4p5jzoqW4eechnrb87Mh95oxUPZWJm3cn3n5GZx9MUaidt9PjEcQBzQTqD91hwYoSw1V8zA3gbjR1kMAiJsQDrn7",
  "key23": "37YjkXjHhaJCa4fSRDhEsAVKFJ9JkrKifmhUg8mMv3Vii1RtDM8taDvLaEL2fA4j8XH9FepT4BdfMj61iDtSDsyw",
  "key24": "3n6YGnDiAhdorr8LwjjtZeqtyckPYbe2s2zazmmFhEYUtTTpncgvzGxVwknLaazuWDcA3FYA31xBdc3byBpBxFUP",
  "key25": "3iPHDJDZnr5Mui1zKwgBSQ6j9DQDKwao4kwuUMXQNLQ2WWYCTpRJcfH9VGWn4Wi8Jo1Y5nazK9kjAPLHLRbh9fbb",
  "key26": "5U4RpmLSbpuyhop7TvwUhJFTRxVyhAfwr2PYtzL6R1bu2YzKYSXFnSpNpKsqhTnxE8GdMv1MA9ihEknopWHFBMF6",
  "key27": "2kBSGk3TzS8pMGrRTkpX7hxnP7sfzsucdBsHBfB3poY2BaLXXRi1duAiJBFvSLE9gk23JzydbagJVMrfXQNojAKb",
  "key28": "3wLxK2YoGttVzMr9HQau5FcEjvrW7ZdQYMShe8nasnxrc2RCPYNNNzb8haB39QGaXVHs2a3bj1o5U2M2JUYYKB1X",
  "key29": "2YuzQ2cgpcex11hx1sRnbp897YxR82LaiXn8gmptrbhVxFMD5SzCLpa58fmU8phN9jd5fH1GSqTcerM4nnBRaGS3",
  "key30": "2fmV6v7DEzEKvmZzhuZrDhyjUEkak5nbNZV2Tq4RVGbdMb5g6kaV5prvQQDYzorH1sQLEsLTerPPbM4AwcZJRUbU",
  "key31": "4ST6xNDGSh568s4XEFkweKv4pg1EQsbxZLP4pQPA3CESF8TQrgESSFZfifwnVdtaVhVr58cm5E4CnTcw3qA8d8Ad"
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
