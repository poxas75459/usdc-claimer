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
    "49z7bfeeUoykTE3ygsSE9sNn6YdFhe2iaUVakRfpg9ncowaY5rxhtnXqNYCVc3Q6BwXoszXTm5k5PrV51ESLV9Sz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yskcRjNBHmEjogprkyF36sAmy2cNb48Nws7CoFPS9mPBmy2cGYxPLdQFeLrMg3dZN16dGTAeDeLQn2arZJLPnCX",
  "key1": "2PotqmJYZKj6sofAGEVAxjEXqfTdbbJUwttcdUVjHG6TJnHkxZ2iXfswyGSzza38TTCA53psR2tDhEgq9LBT6p4z",
  "key2": "2iTZqurwuD3q9GCHLYLx5WZtebmMP17Tpx834xwou2h81CAyAfPTzxix8LSJRjvQCtDUn32X4wexEnv1BZB3Y8jP",
  "key3": "4CDzeXGmKjE2uaXApYVUe8zdaHiciTePCXkVMAtm2HvpDXr12Fd4c7Mha72PmwgrE2LL2hCumJNYRotoCqe9Kx7k",
  "key4": "4w5iS1NcyeNvGwmqcH3Zg1QUSfiz8GTTLQ3ruUQeTJUMvHD14XW5Nis6Mi8bzvtKvtge6dXREnPDSGPQnyqV7aCC",
  "key5": "2kyeN7GSHYH2D5dEokSgg996np7F4s1ALG3mp2pRhwgoZhUd9ZF2kXkZAJ1ZnVuFKt4pxCLPaGUFaYUGzaMbnDX6",
  "key6": "2wsNXPjTEJCRm5A3CrNT1MTc3F4mPy6cN4tdNMK6D8tbTXE6qG4K9e21cf9QmyDE93qZE8VLAReU1vd21idaBiDJ",
  "key7": "35q38FM6zuNbn6kkKjHJVQvuVtnwHBeujA8Zf3ztcddcnjjoG4Zii2v4bBJpjy6tQhYUfknUZyVEkXu7Gmi2cnPr",
  "key8": "2AZ3RpkG8uWYBvytN8BFMEZrZTLswACD46AASfwvt5NTLAw3rE93xEBF9GAynTh2aQjUp1xvm1fXS3muVQTXD3PZ",
  "key9": "NkggWBhh4FY5yam8UBGHueqgENx9K3rZGZwSbktD7T9j5PKsU3F4f7tdU7n3gKeyKGBxQHVKeY4ARP9Gyw8KCM1",
  "key10": "55Vt8kABkibPtYETDWsS9PMMYfAUoBq8UDb7Jp5Z45aEb2smMbe1VdjKKS5Y6zekGesW1dZuxHP19E4kcCqworH",
  "key11": "2HfGoGVaHiBJPDTjdMbcBVG8oA9Z9YwWEz84En1iVswmPzfLzLSe1RsyUbR7Xq3QwTKSqTpCQWWdU38zwbWytCci",
  "key12": "GXT1ChpLZuXkTWd1ZriaG4T2gXdxkwqr4wLJrPHrEn4aLeRWcX3R9pp4t2Zf9CzQTvfYMSF4Ao2ogRfLHXS3MPv",
  "key13": "PPQ32fgUyE8BXKbpsvob6nnrywRE7roVnkkbBMBiDxmgP5C7iDTeKPfQNZUvWvpPmbrQh4bDF3DnHrkjpZiafwH",
  "key14": "2ncorQhsMeTG1As95CfNEe6g3s1nznMwPcaTZ3NsN2B8hRYo2GQ6NunW1BXFsFdd8qn2Cc8jHaucyrdXVyrA2ggN",
  "key15": "2zH9cuWhXDfX6ivf5v4x2kJVURS3infiFoTZ6nsoT8qn8F5cW5qao4xLFtDMfW72HECayqQUS35zA6o5TTNmDGte",
  "key16": "62KRcc5jrqSggby4eNeNJwvHkUfkSz8j7FzbBxUAFJ8boXULGHFJVMC3oLcBFTuddqhPD7aNnf41k7qArvBs3ebz",
  "key17": "2BfYCiBCSZX1jihsLSXr7ZPEUbU5ZiuiwMPcgKTiSZYck3zUSxo3Ez98ySxboVLPEdGXhqrcVHVsQ7Uo558Zevxx",
  "key18": "2szdZKY5VpP5vLYNUQdwuWcV6XGEW6jLSgpARyrCbXbBdyP68pTJ1seHHNdNMdXpMJzqThoxvgKxR2iKvBoPzRPE",
  "key19": "4daFE8hixL5parng3dxY9r2Canw4fR696J4A6296RfdsY39uXjDxex6capRujVHspQAmJ2tRYgkfoZcFXKc56azp",
  "key20": "5Phyqan1Y8XekDKcBFj97Tpna3dmdTmA5NegXJfsvDhY4zPJwnhzd79oV2ik6NLiAEJrePgxBFMMxdzdcVziZoMx",
  "key21": "2D7gYwEik6gtNx3NRfbyNcH9aDRmrdyRLDTyPUniMDDE1wQLvJoKZv5YWbTes3h6RwroPpAzLUg3dU1cUkfJfRm4",
  "key22": "64DEZGwybQoYoHArhgaxeF8SBJcudQabyeetYeZXcMihxASP78yzsKvep1VU351EDdosyKuFurdYa2hxybZ9aAAS",
  "key23": "5fJu5DteMCB4MgvZmufDDRXsHbsJYnv8EBmFYipLbsLdktpyTWshTk5j5UrbeQYW5qMCnKrhKzJUpyBXGddPp1dy",
  "key24": "4XJub1CK4p2qYc6mArAEpHwDJimXW9waEp3LqF3AzuCFSMDkSemzaydKksCDUxAGNQdRyK8K5bKWtDTbL5eqCT1T",
  "key25": "47kndogaMX5uqeGibwcdL5yzfFYxcthCDibRY9v3HzAeKYEko46q2Cp7knEnTy9zxmQQer3CFeJT6DAKWTtYBa16",
  "key26": "646xwNLJz4ZEFcGLT4XPsHAKjzF7Wi9gPvDaYMPSnw6NaCtGvbwS7ZkCZTeBqg46oxVTmhnRajkSwd1DTvnDJ5ZW",
  "key27": "4hCvB4wF4pdcRQa9y9sjxpy5jRW6edMTQvvKTxmCWrqhUmqC5JRuVoMexVr3hJT9KXeunDreUFCRsHKqMhwzkXzV",
  "key28": "3ns33cw6GEfXmq77MPFkzJrQm43B7x2UbfTswo6odqEcgiBD2HpK1eHdYXYYqAxHxJXqJ7cnDCxPWCtcr4VT39CB",
  "key29": "5gi5DCnbBXa5Gk39w8qPZ3YMpkCUR1gM69WMWED2Py5iUgcpGZtEw8vjor1CKJbYV5RFLbDRHhjPTnNg7S6n6SWA",
  "key30": "5cMeNeW93qybH1BT65QGdbp4y2AYJrWgzNnyezjzcWgpJw5hQhQFfbdsCTVtVrSdzfT12rWHgGLqsEkFM7Mf2uWZ",
  "key31": "5QgEPFAkggf5b96msYjad5XfQ897ZMFyhphvkuLHNw4jCtpgqo4i1ompJi29DE38ssghgZ8EayibBXdE7UfpZTwR",
  "key32": "o2vwjHQEjvxnQmZF2gnw9Jq5fNPAVAdW9AvfYVmHs4QT6qsJcGnFsvQTF3c7HohyfKACWzyZwFUC8o88xGKrZZa",
  "key33": "wBRDXiNFGTXFFQfoRZZ1MU6nswvKtnzrTFEQSAuEa8vPgyzs74X4QRKeV8v4FxwKvqkkMi1UJLa1sviF5gHRM9g",
  "key34": "3yV5x6u7sH2cVVxSGhQdnuP74zFn5HPcv9jf82ki9Wo9PKEvEdmsLm7e9MkmMhB3v3ogGjy7XHP9PL8bTUMSeUkD",
  "key35": "3BfScnkcovWjk8iAT2PQLSZVFM4G2ZReGHTw1nH2Etrrs1ygZtLcSU2e7qw8w5KtRXqa6fNBbB64D5NqH4fVR4Wu",
  "key36": "5cre87jZpaSEFVjJgcMyijgALMWSQ9yVUEmEqj2X9RVMdEcpymPwi6SkpvdhBji754o5rwrexdQ5j2hVGJZqbgj7",
  "key37": "39cQ5K8KAad4HjjLW395LaS5Tkbocy87WeusqeYpspTBg3hzfyvWLkDeHuJS8QVLxk4zr8upVjMRFzDgpcnecyix",
  "key38": "3gKJk6kPabjy8atxjzUN9uLDBUy3i9bxeQfXit9MZv9zHz9P8WGjUY1r1sLpwwADMbKsFGP42FfHMCFKN19yv5vL",
  "key39": "4kh124n3WWecyzNVbehfH6Aw3RR83spDNXLyojmmJW6H8umrdRx6gDDumFAyFUenpDrPZkNyP7SXbyXujiz6g1Lp",
  "key40": "61PVSxDsiJ12umcRPnRRvdWRaMKqJwHWRYu6iJ7EKDPNqdo8S3LHUaZCDyfFgCaAtMaw2Mnj7pm9kCz5FjjaqAjY",
  "key41": "44bZFqtSYRKMKF3XhHG3j6V1Lzj4GUukaKL4tk6xseaFXuvM9nVGimVtYGKaxPa3s1xgsky2RqmrnWCmSQbHi5u1",
  "key42": "3kaTy2DjS3HxH56GA1vtK95c9VHWMjHzEm95LzB1yAYojo2o6NtkzLPNXNchhjEvnYzxAfGjnbFUjY8bmin2FxM9",
  "key43": "2PiSjKY3FTrKy7vGWPa77MGTGzUhpdr4YMRNwwxcCnriz41aGGP4MM1etSNZvHQiHKxA2SYSgexnDSfaVLGNYzVG",
  "key44": "59mB18W3TgqQif2x1UnL2eeHu7276brAEabb8JDaQNBj8ZJepGcFsqiUtmDKx13B74oB4Q8hXcz9Ptyf35BAjtbh"
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
