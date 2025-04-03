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
    "5hEY5XLHdYqQi9ofHuUK2FE4aX4KEB3VHPZjpHEn38yuum7EaorqKGc8LftZk17NDNBnQ8U97wcV2giFqDY2JQB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p8YhYy7VguakY7UYGwRjEJDeBMLeDG9LxschY8DhVGfmYdRTnwfbUqafociTBVdtu3qW2uhxnqXVKCvCLZNf8QP",
  "key1": "5ML2j376kLyoSkc9AxfC28Th7hJrszs2gGj4u6k9ugcNwGyJP5ZwkesUQuk7iwCGMBy8DTU1qSTsP69mymiCrnk1",
  "key2": "5emj4NGxigLUQJ1LZXAk7WV27AMG5ihMah2SMYyYtqaHXY6mqs6rP5HqHL9YPmHkZjG3GjAcSWbge7DQYzgcFCpD",
  "key3": "34SEERPy2EYtS7AXteijecBJPW7FC4ezdYX98gBscGCKxjzsFympSXcLmBvoJA4BDjiZxEMnFZCu7xTjGUVt5pc",
  "key4": "2ANzE41W5gQtRyHYDgt2XWE1oR4KVvFMpbavyCL4GtVPq9D4MAoKvJu5JSVjZXsnPxCCBEyPzTMyLg3beH9a3JXZ",
  "key5": "3j8FpETd4J2ndazkD1YAjFQRcLx8NxFRtivprd3XiJV1QFkdUz4dX85pyNBWJfw6xoTPp3Rt7xtFwKq9XrRFg6n3",
  "key6": "5bzxBZsA8P32AksVVDrqRCxzEhtSBnGQYZQS7FwjiofWdVH6tsWmMJzo4FkdQQfxHJ5UdJX3SDrRs56VnUjS8T3Y",
  "key7": "5vF3HQ4zQby5uQyaALAoNgoJ1RjbD9ozj3LX5etFpdgr8HSv3SPnS6EXx2mfKva5E5E2QqjHXf6dyBYrB5C2d8Pv",
  "key8": "3idjbf4FwCt6sFnnRAtqQZj3qe9oJyoVyRxwncM5sYGjpsxPWCs9vmXpUPPBGJUzyWdo2gdg993kbWxRmPveSSNr",
  "key9": "3VgDE6B9WsFXCSnxqUhXRHtd7QGJfeXDTWR652HKurSEVpxvJb1sDcd4QDGEZmBWBhbW8HPCnBASrg7qfk3DTeDo",
  "key10": "4Wt1FDusLfm2VAp8adEG5ZdgpcrJvMVzXmSSaiZ4FqxpdUKQojdxNpmeBd4LrE8HqESBhmFhcHRkuJJxEJetbnMy",
  "key11": "2Gqt4penCwULkepccFuP3161bSYZyLV62DW4pKnrPiEsvPF7QBn1BukQux6Nj76GCRzM3cEKNn32n6kcyQUM87Nu",
  "key12": "5ni6hZkmmrWQm73WHxFDiAPewja1DEyTVtMwT3WdofWw7a83qh14okPnJRtd5txJ5ve9pHq1n3XM6aq72vmmFEPL",
  "key13": "2FdvY4Neq9rJ4sus3x1cvaDHWF2rT3GcG5YyiJz9tij5g2pWyDDP8jasbFVsQCLPFcc3qKRYdr56dqknYeZR3nGr",
  "key14": "389yqjEBdumMPgwLQ1CbyoGc7jQkP7LL19GoPKrm47JeD7SzsHDUsxDyHK1Z8AhNJMQzDwXdeNkRH5tZkrj1jjS2",
  "key15": "2yuMg2k6qSmknzVfZG1hSrPuTbKN259i1KujURhWEVk2GCgUBUeh2jhV6RGsZNk6LEGhXpG14xyRk4GsEEhSnu8g",
  "key16": "dw6FAtZCG28zLkkdazwMHjursbAnWWpTURB1mhq3n1ixd63rnU6Q7TFEA1Ek76WshuDg6vqnoueZNsQiVGdCJBA",
  "key17": "4yorjdzQg6XiVhdSwSYY7Sgdp3jYGYi6DjeBreK2wVf1VG8eWy4Bhr1rjEtkcaij4iB52m3M8wjhPz7akU9RVXMW",
  "key18": "5RQTLkpzweUYtYQJ3jCBfAPtKt65SfX38FN1pLMs3ZyVjSGuPHVbN74mvqrkGBPdDdXNHDBJKwD3hDKk7ycLZcGB",
  "key19": "4vwd5AtxSTwQuUpHugMfBseCvNfLSyrvV1SQ8gk6Wcc61DPouop6ZhmYuTgdw6rSY9RAeqZqUTr1XUR9cx18K8HP",
  "key20": "pyDFUM4hjFtPgNrWxBbm9KQSoPzekW5bTyak12iVhDi33g1VFVoGX9Pxu1vLMhNFgp5RfZzp8d3GRmQDfDsQyNY",
  "key21": "5J6UQCNDGczyodP1GmYBCyHRuU1hNvNFYh6QrZbR48YZr6CQ86hQP4ppmW7JWTSppGF9u2aCxW8HJwyHGL8MFtQM",
  "key22": "2bsoCpoSdTEzguQeW1WyCTycvGyjEfcDNGNRQexLtipY6Akf3ybq6zAdSXh2986SXyt8jQ7c9jgzHxHLcDNy9mZE",
  "key23": "4f6Jyrfpv8B4DErnqs82GLJox1FSHGwAjhFCobuJZeXppqaWbLXAHbL42kfCepmrAjwRkvtLUk1FRRS8CYSC7Gpe",
  "key24": "4oQKU9qNesEXEAbcdaNY1Q5AJ5BPBtvK6MBfzLTZJTRUv3U7R1YrFmQAPE8PNeUE9DHB6b8Pa8YZy7Df5AXCCPFY",
  "key25": "5Y6694rhqfKhXtgqA1rpygzvmzMUmMPjgxiB8oU22ZJkDLpgqTYagFJP9XA2gdmQJkDQfhAAaDE8y3rb7VZrnELG",
  "key26": "3TQiyaSTPRknvPUYnk82kaqkpTyBTVEgjkYVFudGM94FcswkYFnbqFLWq9i2ijWe495UizJyZCKzhn3GkyVaSMCP",
  "key27": "3BTXgamF7zz1RFjDUJVZJpQaDUmzga3qwEeVk3v7ad1E5psjYqXsq6A4zPDf5PnCrP8QLUNafUohKEsMpT96QP9o",
  "key28": "36Q4Jktum1mypEyvHwqJaJuNuYJ7QH4tCaKMaPhSUQzCovHyEFCWZ9AwzdsknAYJoxz3ji5hnkeg6TyPASvk2UTK",
  "key29": "4zE8a6LbfzmGc9KGB1neQbZePBowcLReuQBTPHWzTm3244RfwQrGKYXN3N9VYVgLiU9qytBVSR9r6kFbQDcioyMq",
  "key30": "2RS1tKYai7xYcQb2RnZmW2mqmMRdfCbEjsC1nvATvb7LXs4p4Umg84zsBUUw7nFQHJLSTD1723nrqRwMYfF5FERK",
  "key31": "3RSWKxGhaA7SW1hKhRiGXD551oC45jcRJV3GnxehAy8pvSUVugNhNMSBbWBKXPnWQFT395PYcmMbnUnW2Bv8NTCg",
  "key32": "4XKqpmM2yWfNzLLKc6yteUwDxQbrzb3EwLSU3ppLdW96tMigMgvLvN1V9nWabf6mWmcNFyijNGJDKpRLke2Hr71L",
  "key33": "3w5Mua3xTNt7PkScB2YCcHESAM8sEz31SgbBTTKrFCoBujtvv4krPddAnWSjhmgxQ9PePYU4emAD15p7ZwAm1koE",
  "key34": "5DR8oNjBoe2Su79uqtkHVJU64aygCgenuynv8b18ZJUXdo2Trvp1sL4FFj21QeGMVMuXYiKrSWAdLq7p39jbSDDh",
  "key35": "4BVizBmbLXktcbY2dZ6uL9xoFBsw8U87qMc2QzT1Ar2RTzGygQAQ7fFbExMwFzzTJq91kScbYsbHf1DupeuXyAEr",
  "key36": "4edo5yhx2TVmKGVtgYZJZK499g5wiEkcuLpVy45aFmY9vZbXBVUKSBxABvHozEqfLzMocQtozm4keb6GJNv2vbvP",
  "key37": "3BaWvFF2Ejgftsya5mek51RtMVUuwMAALAQmxCo26PHr7XntTharLWRKgywLZunsAfm1qR1owE4NK2Aj7wz7NmC1",
  "key38": "5KhfsaW3n3oP1G5Job37jKVvWeupgV7hTRrnCYgwKxPAuiphDiJkCCeFwVmbW1sDHoS2yEG1FKwN7PwPJAzL1kXb",
  "key39": "4g4sdwpeYNR5LxVFEWxc14g9NAhLAf36W27Hr7YiVk5eqQHaBEbH7hfRcFraZ9Bp6RvTkx4DS6FmxAAGdG3o66b9",
  "key40": "5Z16bu1LPgp3SQwQ6BWyQfLHNtH7ECjhNQsWFLbVdNFJaczThRNJ15jCiUER59HsUUHsjAYzJk3aKiXU1adKZ8Ax"
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
