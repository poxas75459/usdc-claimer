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
    "34dU5mA9D3pnv9BRXDF4AkEKjz2j9T7jwK7SrhbCJ8sTKynASmbMiZR1hiDb6NstrAZBJRcUZR7eQeYGdVqeFhvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ecbvGdT36r45UFTUeQDecCQRVFwn8YvEGSTQqkddG1HayxgbfuYrS9UQyHHFfrj6LsZKy32qNJsdPucUszwGuEM",
  "key1": "2caw8G5WG8jmp7SJbMKFwKiBJPSFW9T56p6oJh4s3tCjtPfEyvdUaafVuaUnErzRpo2qRMco1k1k5NUJtN4M38Ro",
  "key2": "2Mxy4vMRwscNnVSmJYHiHNx3QwXzM5Do5LcXNtifNs5Na6j9MAwKqJ1P9W6FfjY237n7re9vQbGaptD3w3cESFh4",
  "key3": "4bY3x5oJ1nMLtYwbvh1p9xvw8sbTTCkx5N5ijxCgayYThiriNegDYY5M4fketCEasvZcJC8GcKu1eP88sEwbnBqB",
  "key4": "5gUSzQSeLHP8nB5H7GctpP5jmT5PzsCHFw3475mVuhANKGsY8fJTWNESn1DvyxZAKau6H9aacLThuzK1oomJ23hj",
  "key5": "3LQhYWvoZNCBDz6Nd6rth4VvR84AdF9rgBD6ki53NKnBzCPWBNZ1hhaLSfB6iFgucYNRRSCiukMFGig3bZwazfVc",
  "key6": "VYXyZbLBwyG6bUjjBAsdKwgMztPFLesopHmGHfbh3JhbJT484mXcaP2s1683nzcT8xESqZPPwXbmmPwLDd1fYJ9",
  "key7": "2XYVUgaBkczrEzbH44FXmaSddNFNJStsfsyDGCytcYBXGj3XNp82Qhs2RgqZAE9BfQduqjRmPtxhNJiXcNy1eteQ",
  "key8": "59XfLyxq7SkNf3v8yCs96frvQepFqqT8iWnMTY41mUEYPntLQM2rp33bxvehv6HtixEub94VdoiJdP5wkuorrt4p",
  "key9": "Zbfxo3PSjAvuDy6AXv7pd7Ay5uQbnAPHKMn5u8XLJD4K1fBUZ28Kge4q7eRc4R3N3fdhUe8L8Wgcexiwpct5dtn",
  "key10": "5Rx5VmiuMYhXrM1vMWGE4yuxhskuWsRueP65ctFewqwL97HcAPT6qkp6GqaKnXD1FRtmmYQLu3BVNroRvVi69XmP",
  "key11": "4QtY4eq5Y2KBX7hpKkmHqSYGgg6iP6P7btEN6qyMPkP1KgXK6dxyhd1nYgDKD3GFtHoesViasibuVEvmcEuCHBVC",
  "key12": "5iTNz8yMxjmZ9bxdTskz1hrHtPycqtqacY9QVsgXa5ob9FqM1BvKToMgkhdaNfcQQnyt4mE6jRBnRL7PwMQ87r78",
  "key13": "315ZqndkoKvJ5cFZ74CSRTbChwnxyYSLdxvSZtfH4964CgKtPKPp47EasLRqmYrinPr2298ZYj4ay3QV51B3RiQv",
  "key14": "5UN2M1bbnteAtC9vARnNsc2trhiLgFymmunDH1j5A3y4D2E5hsf8hbGyinKtB6o1mgP7A6veMTdc5RAWUjV5h2Ku",
  "key15": "2AkJT5B9hX4SQS1jz4PBbRUy2cbtin5J9fMT9KsVRqy4Pt2mYWUj5dWL4MjdRzpbLU9C63JdTwyZAs2qz4XvVegu",
  "key16": "4EQeGUSYUCHvpzmYviKJEsUxHPGJu5PeBTty75i3ekeKaYHfpgqk3tEG7YdquJUSpCR98RnMmQsMujhoceLfdgDJ",
  "key17": "GxtnDiE3XJS46JcimhZd1Pry5GvtSNxRuyc4ZpvHB66dEk4eWmQk6qK4uWSyzDKQkchNzTTin4X7eEq1w6zHaXJ",
  "key18": "5JSgZcBtrRSNcaxPJNrXE6uJYTcTgb5xjQsLgG1sAoP8x6MPw4Dx2nAaLWpaLvywNrvArVAqpHqPFMPxawGG5oFv",
  "key19": "mbyghJSezKhHhvgwrqi19Vpke6uW9WBow94ctPasikrv4RJHiKxmtnVNPZYZgBTt4vBmiEW1dWihSxS5pGtxHox",
  "key20": "51MWJRof6ef4vBfwPqYh4h1W6dvNhhBivm9zMFem9yjTHVR5NoTwAEEQrR2ENTUamwYnchpWG6Q92snWJSMPgzZ6",
  "key21": "3bLfnuVa15GqWuBHYkmZfmQAUeQGWG32Mwi4mKpomiqYfyFwa95DQKKERw6PyJ8A318HKUCVmqfjrvYM2DptEdUP",
  "key22": "Lp61N3uMm8KQnE3w1oKh4xUTjJH7yQPzJh7p8BBGGJixvJQ1vuykPbYb8ZTzWyAst8fmoCoSxMrriBPykCQwuJD",
  "key23": "5G7CoT7r3CXffPtgt5w4R5p4QY9mhto6jSG9J36EfyyT4rYuCFUBn5dLMUTkPE4NbRGaAZD7eyzgjUPd5XSM5KDR",
  "key24": "2HJL8baTaPMLaLC1zQxGaF1qgRUh7R8Z8etLfFRkFTz6MUianp8PgYsAXWRqV71BEASx2fQ3DnYZDFCJ9bnxXLFu",
  "key25": "5B769GVc3JWvGFhdip4mpK5MAXCBdVNKQfFfdV9sUUh3fhJeNZrZ4Ry7uSwKNXgnkaPbpciJvrYx2CuPbgi4Cqy3",
  "key26": "S6mbhuuMFPbog3TwoVB1Xjoj5Pru6gScPYJSEsujCpk9G98dWjBFcWevNXqqDkYEE1bvQzX5vrdmJGdKLGXLbET",
  "key27": "5chopzyGeieRdqekHyLgZJRGimi3sX7p7EhCgMvmBDPv8M9B1cgdYy3QiYvuD5dxc1oJJ42yFu6nDeEuU9RztRpy",
  "key28": "5XswXwrA7MBkkrcshMHjNFGPDdUCXL327NGrgfm59LMZwrawoZB4ABZfnV4p91RyVzYYMxR1MHug5nqZoMCDonin",
  "key29": "2zfnmL7WKwE2u21m8TnBLNKFjEojgXAozFcQyP6n6cbE98r2fthnVk8cmCiQEgpumbqVgCB6BbEfjE4Yq31WvnGW",
  "key30": "7Pqa4XBnMvEUr3AidmXED6hoe37fP1LipZ2Lsr4VVM9CJhNvJCjBfs9ioboSiUgjQAckesbR29LzgcKrKzG11Cj",
  "key31": "4tQMZzEy8yY5jp6QfLf5Jxt1Ufn7zyz1iUX2ekki1HAcvus3T7VtsSNnSJfFPYFamQW7hFCmmxVRpLPVFAN2heGE",
  "key32": "21rywosRcocAgyePUFFZAnYyrg4L6gMwcmxwmeynVM9bx8kg5onRs7aKNkrimbjj38JESyxCdsS4yAWxbLcycYia",
  "key33": "3WPDEpxt2dDFDppzLPC8jpgfDLFAZdJSnfTWAP1FpnnowNmPJNSAE8CUx1HJPY66xrCvzmT1RPbjaPmYuy32QBig",
  "key34": "4wwA4Nbd1FK4ZQHGLXcER8Zb4nGKEm1Lzby2m6huTQWztVxJqT4SDrLRkipaLRfb5vomekfniXWmuekya85nvx8M",
  "key35": "5bxXfoxUoYh69b7wekRiKsptQDpviqq6hh1tQoiZ5AgMZ2vFPVRara4C5m9JepbqU87i1wab4uayQvqhrpAhVJUn",
  "key36": "492TAySfceZ5MaqzUVj7KU9jcY92Rr77PcHDzbJcbRBEXXMyiCWFnyrd8i6GLb8YAf83dx8Ss4HtgzGkYLCpzcRb",
  "key37": "3bCWV9iWbyugUbFaeJe6D3YXMPRGq9nzJurFq9gCeBZpzaJL5BGrKhdopApc1cYGouS2usMsL1N5AJV946jwkAqu",
  "key38": "62Z7C4PzsKedGkG1LGEgEmauyuTpuSR1nmruURdLZZGbmnK1pksbrpzJP4L25dyrVrpDzzqovtSRXA1sSL1MkZXi",
  "key39": "2CmG91wXx8WbKbhFP7yKS5qnKU5LQTqTpqfY7W5CXSeb82P3rBTpk3bPYZ3g4tnxAijLcdbXKNsvP286B1q1pM7m",
  "key40": "4pRBVNmqDw7SfubhMHZAWwF9pNBY9pcHV2GL9g7DiMQzJrQBDtqTE8xmb9M9hRWKdKFxLQ9uAmR4qhnVCSdfFCAz",
  "key41": "v82P4qY7P6gjg7KqfnCtLexkWv4kJReoS4YCktPfFF5LUHZ93SpYkVfVmBCisjZVCUsWXGHbdNjM7SdKhVZqtZb",
  "key42": "5csCGyqQuZoD99zBpfVJDjkDxqXkK2bAW4QEyKk6f1Nxk7yXxASdhWA8wWizEngCNKuympGQStw71psgzwmbRrzi",
  "key43": "3nCLLstJxavC3H2ico6phPnx4kAsapZj2nbd3nR3WA2mxAZgo3z3H7bHvs9acVBLn4Ns512qpKW1bKmhcjh4QBdL"
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
