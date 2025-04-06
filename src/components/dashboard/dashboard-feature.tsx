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
    "UTMTYzGbrH1nHxJW8F7SKxf6YjDPh2mgaAQD3kb9uV1s79gXVgkxZ9Enp5dKPZZRJocukh3UGzRZmXwWhFJiQT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dUmu1vR5qHRVYysKaSnz9mhZeQcuAt2A3tCr1BunRULhJRFjthNbrkw6f6x26HFNdC2v1X4KU31Mzp2kVxKmYeh",
  "key1": "5VuFStgcRkavFE1Z2vm1ghAbowTgsHrfko4GHaRzD7UJ7o7domnw5Lr4dYQMgLBBwE68pGrwLbpvnBbgnfes5bS1",
  "key2": "57PKghYdkGpA3i991fiWU8ctmJnDq4zRuVj16sBCbWw9krahnRCeBbVZKCFfrMfW6J8Rnhnt5LfjyM3XyZ8N7vJc",
  "key3": "5KNxViwvVEZHUJmneJ1T7w3SXTPoDA6z5JDGsevm4rGwfp3vebPxkvBRx67AxgF4MKcwdqtiMJUWChmnNkwEdFRu",
  "key4": "3w1RQuPQX5qadD5BSwLatnvN92YMiGgS8iipB6W4YV7PWYGpCTKZ5xHfaE2SmjH1TAP8XMPjYpPuA4PTJw9QSLB3",
  "key5": "4BQah7UK9sjLuQwNTAb7isoTejMEG9nRmPbZby96iBzcgvEEBQkewT1D8hkTq694hMhrbscfyMewPfCnTC3d5a7Y",
  "key6": "5T9SRCxXoS6dK73h4hemN8eWLRdi9XJxwzsQnc4hrdnQZzi6udPTqkUyUAoNmCvtD8XDCUJG8rYUJuQyXmZNkU9i",
  "key7": "64moPCoJgU97V91Fd9SoFqUtEeEDWRpUuYkJBAkzRtV3z6jADHPVLMZuVnETmZZpUAzETCb9fPrDxqpfaxevThey",
  "key8": "YKGRJAV7bJGu79P8nfp3JzpFKuo14f5cXN3uKVMsQwrS4XczYPAu9j7oPc2bLJeoJDNsx2g3wqLXDKc15cbXaFC",
  "key9": "Yr81CtV5MmqDb58nJsmprexEVkHtMfRD9hCx9SYoUP56RsCdqsjLQ2KTiepMTGWF6Y7iyMJVUKRaCrax7hs9kNg",
  "key10": "4y2Ev1mrVCQb2o674nN1fAXij3ZVkWMrkWmCa4HFAoUsL2MXmimmngYW5zJuHv8bYenuLgNz9GbhSa4E5V3XjR7H",
  "key11": "3QbNzyZTtUHM7RwpyRxtqbPA523N39XcPznteH3PqL9yJJGxeyHmHAE4vTQGwEznvYv1tL44zCVvuMNfaWiBMSJA",
  "key12": "2awJT9k78PGrQ8irGA8cXFRWTcYXksuMhEbjZezyVWYb3DTg7qN13vdquKUqZYBtSGqQGZnq15caumeDVCWQCyYk",
  "key13": "4jM4iLZd6L2Vcdt6F8GnA26uRxCGDrdfwJW9Lt8r4W7xbHKqB4B5JTeNSPDLqa1Ei6W9T4jMLny8h5aALSJUbnfk",
  "key14": "2L9Yr8j2HpwGWgCzgRu1KoCpgxzMkyZNF2Y1dCRvRSVbXzqU34ekYeLEGsDNWctWeyBrF8356dhbviPBG7A2zj2N",
  "key15": "62FBrGnJciiBoeK9fJx3L9KijCXeA6nahdZzjWnnmh8DjMuutWWQqhU86ReGf5N3Hbzg3hKUYL6maf5g4U6hP4nb",
  "key16": "xmNtxChWadWpyU6rPN1SDYFn2qbjU7hx4mopRbzy5etch2FCym5daD7dJurekEsfvqP8LTy1mkQipMnbGNj2Tu3",
  "key17": "dXQwnfNpw5oP4gZ9NdNfDtEYt4EzqPgiShjRAKzYg3WLsznWx9VBrnQPm2HVucAbF56ByFPADMhENQjhm9oG6bu",
  "key18": "4CUzLkgBgpS89EEbvkivF7ns5wDBoNxpVL48PGTkHVYybDm6sRM3BmCwPh6UUCe3tfMwnWRdEqbb15CdC58Ymozv",
  "key19": "2rX2TarmnRnwWmW95ZXESBpgu44oT6qXdDps6rWT5xKM7dhD3CTgHBeukQAFKxxMj6VYfhG8BKH2sN74Ykg7bU9P",
  "key20": "2MtHM8caYkFMEp9BZCUAmQv5w7tE2Dst2MbJQniiqun5FZeG63mqjn6DdY6eKtdfusEGmvHaTcmWD2YSkhMiRFtZ",
  "key21": "2YMCXn8GcmJoSZ3prJsrdRAfRSV5ezE83twctCRUUVuFt1Hbvm5rtCzuUGCBojaQoNjrpmdFJAAcaqVnACYfAE2u",
  "key22": "5sWGTqRDX3LKhKqbGS5i1GuQ4xSsJu9H5Yt7h8XPZo9pGDCj2gaqhr73Tr4xpJgx34WgK6dTggctAAuFRo2bgEo4",
  "key23": "4f65uxyQHgjvYtwi8S5DLiznKx3bmkTq2GaFuoTPG7Gm6NT2vLneuGJYh3hERdDjScDz3GQKuvxdpTbd7jJLK4kv",
  "key24": "a45wh6oXnxfGBNaremQkvP5GrxvSmja81bUvQQwNbRcoHH2H8eAMHofCB4WDfgGzVts1bLQ7vzqMLpDpJK4o6MC",
  "key25": "2auVu2u2qZ8BSfhT3wgwHQDktjYaHWKtBNhRuKetrg8o8Tjogh4mVxzkgF7vqSakv4ehc3utqaPSAsFyeAsjgFYb",
  "key26": "451jYnp4eztAjJJ6LL2utzFY71iCm9hhr33Tty7X8TrGE6Wats5WrnxRSA6dLjEBS23UVMHo2BKp4YAuMFUbVrEy",
  "key27": "4UodrxDMrFwz1t6oF9NhinyHtu1CGcPqEXgTt1ZTAD1F6QHG8eUghdECZbWYxU2eMGf8BYjJK1o5risn5FPiohCN",
  "key28": "66osCchQRhkuiMZT1XLXvSDwiWmVN2skbzofwQqyp8HTDBwnrdKoah7QkMZ9L8YLrJrpFmqWmHcFzFWjQ2NudRbE",
  "key29": "2HH56hsJfHifxSEZcHHVi6MpTc4m3L7DMSYq1UJaHT9ShCVC5z5wnUrbTGrCVxppXuRFULBUkq2Zy3vM38ztUW6Q",
  "key30": "4AN6gspYiWEFYqERALK13w6YEZH8zSgTfUdmYu8iDqmg3VHniPtBSMyE8n7HxXFsiuWFCLqRwbtWuGsVz4G8dahE",
  "key31": "D8yYdhjfxqjidppyKDBa4GiYyz5HtxscAnvsnS61EeW38eSSa2jHNnQANaVdshBKMKgtCeYVpunnPRmi5HpTqom",
  "key32": "39w3r4dC52n1vjqgH8xUobp9FG6LkRJpbU4gyJCssuVtQxGNMnEZZZNcRNhX7D8aCS7GDgfUCu4TMsv6QLok1UMe",
  "key33": "3ZJ4xaKHzqDYavKj7Nvx4XZFEc9Rms8fmW5XCBN7g4cDWbbPtZGP4sGeawoNEzJrhLM6QKUnLPMFZ6iWJJCfyej9",
  "key34": "7CK9zuAS4Jndy4zmJ4wwUgj9L2593kmS2PbGSuSmfMT2emcLXKPxqNfMPaVvszuVQFPpXLvdc3Wgmn8Sv67xVsn",
  "key35": "4cFqxrSh9Q18tjVJJ3q48yjpMm7NBQQDArf8XLJtS5i9iUkyE5k75QrWrUH67dHkKB1fDRJsejBTkPgB4S43FzQJ",
  "key36": "2D2MctLUZsAoVDbTaX1pjcjaRoM1itHqWneYGPjvqaNtXxroBVUfu5rykgW4sNoXujreaTjNxPUCTEdBCjQZQUhH",
  "key37": "66LVYuBYNNa19rP4rh3J9sYsweE2d1GKBysfz7uQk88tNFvrV5vQmeuzqoKLzEZZ4oVHNnGkKQRyXkqRgrWehL5N",
  "key38": "392CEqyoSvYL78bU66STroWYr6bFDLcJNBN7LA4Vc2Z5Wjhyd2P3wKoDg9154YkGeGSebTPq1MLaTQMeo5T5J8F2",
  "key39": "Q4V9vunmM1bzyqw9manrK8kAh2MFVyhxneF7nR1KcJBghBd47B7Jt9wrnzCXypjTTUNR3m5Rhc9StoNCjrQKTv1",
  "key40": "2tGePhV7KPrUi3YhkYMydeYziyu8bRTUuFqnQridWFiZPSWf9aNaDCQqhUN4d8kJCAZvUXjHmk8TYxpRFKzGbEkh",
  "key41": "5kHxAPT1bDZgXF2aGWTr1W3YTNoXu6wx29qJjSwgz7R7rjLU7CPjikhLZ7YK4JyCaiYCSZedxxasgxQRe1dRHtvf",
  "key42": "rB9ToCSqh33TutwmC8T1H117wJFoYhb7EZRmMeAbc4mztR3ni1GmxuzVwNtYZXEnzw5gKpTm5U4XYEaZoADsPsW"
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
