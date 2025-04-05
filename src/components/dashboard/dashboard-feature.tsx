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
    "2ev7697xiWbDFaqAU5GSYUodGCTzVrdrmTE6g5Qmxomy2mueeXJMpTQAcZYzXDZnkMHLmyFKZV9GGRcwDsbN4657"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36PcfbfVG2MsWAjVPHB9Y6N87yx2PUz9vebX1syDpT9CPjk2zcC4ViRftQsnUptHH7EpaEiP3EbVnjUxtNHpaman",
  "key1": "4MuthKDC2RhDKsDSfBVj6HDXNCSs1UfdPQrXwRGXGQ8xy9MZf1zTnjf4n2JnebpRkeWf9QrNavRktTpr98HJdk9J",
  "key2": "46h7hX2ERHTtGbZLwfsbyAPEe43EewQPVBa3cpuQvEaVwWfKkZ3gnp2zzZwCVKNxyQK4ekYBnshh1BTrBUq99Bar",
  "key3": "2sPm9HKbMRRN98vzcxamAxqBKa9raje5dVfqqcie5LiVB369MCyrKGGvqzeWNPGY7BmRqiR5fjM3g3GgTqRYUX4d",
  "key4": "sG2zE5QWJ4tLSd9xCkHB1azSyAbpaPUJA5sCuvTrGVWaJvzYpHEW8NC5a9r74T6wVy5hYBNCWZeVGg5HKF6t7gu",
  "key5": "67kJUA3x6cbZExSiwSqpRDspHUynnHzjSR2eve3NGD4q6wu36aGCBC2WZ5EEDrv3PKhPC6EWp1BPXFjJFiFEyvgN",
  "key6": "23DbMX3zVmCg8e6G5k3i1S1RQXEwuAZzaRCTQRjojo7BfYnJ1pbDzhRQXVJuHyYTME9H2DkxyUGxSCtzCQjGJvBT",
  "key7": "3mvAFAvehEvWjKuxbgqeZ92qS1zXjX9YUdLQFqJ22vvwi2r69KYQKJhCVkLFmCmLiLc1THPxeVCv1vjHeLnc3vPG",
  "key8": "5AmueTfeUqRwAXvmt3Th8r9JEkhtab1346TiyxPn2QzKMywq3ksNQxYQioXX3Lu8Kcw4R1UVWhg39o7HLxNTMATF",
  "key9": "4Ru422qBYaAi1eqabNi3ZED3BY5KJnLGGq8spbi2WbVUzPgdbGwTfmz8rSzrXNxLM43wJxhrUQQJxLPUaG4zViTm",
  "key10": "5tdNBK8d5zDftYUbAs721D7vh1mEiN2LowMs5YshZoRvcJyXRWRrVv51gaVYBwRmo9NUdd2Q4D6ZApSswoTrrZ6p",
  "key11": "5WPdHrJ3z8JSsv8KCdPdNAYkFvHxSqvRVxSfC3dusbW4XsauxubrbmSVn7NJDRftcs9mTLk5paYqE23XB1zkLyk3",
  "key12": "3Fkh8bAjFj4yaxcaWZAJuJRUQFyFoCkdBEBXhSt1NjGTJgY82iNg81BiLDxpXmd2W3NKa4Yp7EArsGdqjgqArWRL",
  "key13": "dfq7EokFMJzuWYq2sXcVuDs6TQUf1da53eZvmXbCAwYLBB2pkGAwVtorRECzP2DwVxPM7YoFvosysMbcW97UFgK",
  "key14": "3rBMbGVEv83LMAuH2QLvt9xQs6UFXJ7nqqAcRNnvaqbY1LGoFukUPMH2hbh4BUZfkjorNobCyrVpZhDSP9WnVzVF",
  "key15": "4dPFmQdNrzNnpckBXnSAgziQ5ukvdNeFEqsR5x1XycC6kXwKkyHyoYaetv5cM4a83SFZ2qRSzjHWifVoE12P9sFi",
  "key16": "2ywj2zPzUsJKtHNKdcm7zCm9AHi2SBgQNd2Da74Dwn3Ly4ZafneVJWhNSAXH6UfZM2mFrdUGbHG33aDfvWpYUGvo",
  "key17": "kpAx6yRbvGEwpuBrDS6sXfuEqF75cYNPWNBzmrjyVn9m89YhGJQy1MzPPTxL4Fj48y3jwSHcAQQtmF3evJsC4UR",
  "key18": "3RMkHMcixWGRRmm8qNoBM5ovu8xDsMcjwn9cn8ZXgAVijiPC8fMewLTHzPyxSryFD2WtEo4EoVNWudSiEmdceGPG",
  "key19": "4RErc15ttCCBuZ9WBvAeQxCzShvFD3zQbQs7CVDtZXQNdFHwAXzgbnKTPonE9G3tyeCVC5nAuXfRzAt15vQ2HE3u",
  "key20": "43B8xQRPyEhyKCYPKtdatNZBny3uEEwPAwbK3GsBsmdtUcYUWBy2b9UwXPWWYoMKPEa4zrbA7Rh6Td8RoTEvE9nD",
  "key21": "4kEKasyxTRAcxAcknwK8gc6eijgmyuSTjWEqo8E2TRWVRmmjzthio6LzmmJeMZcaGQgbJxxjYNmfqrZpoqi3vUu6",
  "key22": "3Kndv5aWn883uxeamooEEuzYjbi4DhBvk5WgRAryVyFsPziaG5EN7xpm5izq8UTnvorzBvNQoPvLw8qyDgWT4Nn1",
  "key23": "3FmZ7fAFiQxvnVDn7tD7W6aQVaNavefRBJMjstj5YR73GxwdTCiNjULgjT3CVdXErqdowqmFXhvCBLRvv9cMUuA5",
  "key24": "5USdXPSvEUU9vnV2mVkezt3YnbX3Dnco8A1pL3j26iYB2DMyaSHmmJSJauYLkvUYk9dbQc5ZPoJXJA83aSW3rhSw",
  "key25": "4x4QRKY2QcFHjdeurkoJpaZsBWmLgYcHohKixHcNYWVQ4kTPT3ytDNQ2cmTA7dE6XPbvCUp7HGBZTXZYS9GdbhMm",
  "key26": "4tmMgVALj6KyQUQVRiZnJk3qh8vJMWtw4PznTtrrzXZUpC1eNzURj3aqq4HMoHn1b18aGowe8U4zKfD5ek96cfZf",
  "key27": "47p9cXwejyasJVJ1xvSLzrddqZDLwHrQJqauyx6CAhoP5gx8ixDtgpBBUdXD55mWYiSRHv524ivDobuq71KdC1n8",
  "key28": "5tANKZJhYMoWeMgYJj5JkasUEiEUTUsC73w7ApsCVE6jVgVnQzGi9ap5FTw73p38ee7a51FyLHGsrkAuzjPRchT6",
  "key29": "5Gyh41zBuavQBfCVqki17NZZ4CmKD4udekYGab22APPuqui7YtiQKs3LgioVi3Gg9Ja52o7opsiL5UNWmXAzycyJ",
  "key30": "3DPEPJiPPjQuR3tHmCGnw9tfaqMpg1Wog2nzBUkC7PPkvmXJqFvC4osypTvdYFSiezkzz4N6VMnMBehXnBHPyfD4",
  "key31": "38uBcM3eWPfaXbANuJo1k5vBo8gZNE72AwuuoiUqnxnuA1CK9kefLBV24dr8uzYhwe2p7G82Gq6zJ7a45PywnDoK",
  "key32": "5rQs5znkXsLpmJRXYASqNDCvX6H9ZZAvrMUUsWqYfeqdow29hQ7nMw9AUpEzusmSBJZAduCQBvaYaTk5svdHcdxR",
  "key33": "2DYL87ckfuHfJXKHRp6oLCeytu5ewHPWUUgnnz2ANzbHmJzATGTSneahr6sHj522u1RonXe6HSgdj7Jjbr4jk2KW",
  "key34": "5yJTwLrqYyR1yLBaZrtAJynmGEpa7XEQFryw38NMRmVyPj1VGX6oo7p6Md9n8XEEZPc8Fos6Qsx3a1MW1aKFcjzm",
  "key35": "26jD8in1JsrHo8iZ99bpdYB8Tx1ArLEC1JCjn4ynoDkLYzghiWjVTJKz5zyqJEQdPTZQwABQkTVaxn8SCw6kv6rx",
  "key36": "39GzMvqtKK64fb3wc4CvL4G6XpxjAqSbpLtPSQ2k8x54LJGkD9yU7Kx9S7uNSxEyMabCF1GXR8Mtedqsz9u3oPnj",
  "key37": "3zdZg4M9eVTWazNgfiUR3ou757yYsoWYWM5KwpKgsyNVMvgkpHDFJWqnPGuqTrPFD4HhSEUmkcC82tkt1PA6PgJG",
  "key38": "22ryWvTamic8suTneJE5N8hoU9nRR1P9p76ztnpBiTFCkBdnkdk9ZgVf2EGBBUi1rKDJHLomWX3kQQ5v8NuLhN5n",
  "key39": "2GzipiMYBfAHqKwfttjp8auGJnQE92dSsv8gMfFcU76U7ihGDd91vLV1aoipKUNsZv4fgeU1Biuhmqu3iQaieQPd",
  "key40": "jrQNNcFsma1ib7HKityNvbRq3bcuHMRqaEtn4mQkpYrEFhu75w8DRxyLz4MZ1h8Luz8oYroEqHURUVz79st5LkV",
  "key41": "5buWXmUs8u34nsWPDWLSCLP9Uq7Bgm4BhkxQUqA2YhVuSykX3mbsfx6NPs6eWPfrTkqBaQYcrDa3eFN24gvLp4hT",
  "key42": "59ovatNEWNoNcmxkr7hnSfR8vuKomdX6tmD5LZnXSFfRKjJbasU6SPnmt84PWEvjjiECn2rpQS7PLMNSupErXksY",
  "key43": "35bC6dmgfvxYjeTy8xFrv9Eswx93b3UCTRMcKNe1BxeTqSgr6SCRLfmwyQnMHGSwBw8Yu52jfBrCfRKBNrrrgZkr",
  "key44": "3NzjEM6iSwctPVTQFZBJ9TurRkWR2iJgmS6CAPHRzeW4nuXuaEeURLYpnpnBmmGFYJSCraMdvnBSBdHacXYCTmDe",
  "key45": "2j9crZHP5x9PBbiXLdYKZqA4xL4MkuroYAFZKqrQhzgdHd4FaV9HS3YWu15sCtbzCcU8sjgwhjCDpJnXhHxNYhAc"
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
