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
    "5Vjha8g1h1qAcypDtRc7NFMyoTbzte62YAAxjqKPeabp8v5qXvvD521BkrbkmjmtxyyxiJNakZTspPtN43VeG7My"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45eJFpa9Z9UKL5D2q81xLVJbzs3drFHBnWvnAwTfR63fUzqrBdzFQPUHdsReRraogjQckMuZ1NqjosdzUihjuHFs",
  "key1": "2455tWfhTr3GGXqFu3spdsfQ4PdEeNs8oukwkgeJx4oNtucLSXvHBKrHPc3Ez1ZX5mX2yzXct5KD8zt6wrmqj7Lb",
  "key2": "271kPMGF6vBmDse93EHWmvVB69TN33TnEoext48YcUhbKYSUg8uraL9GSyCmv48AissK8L5r1G2axSnbfLr2daZx",
  "key3": "2gkFW2crpF5DbhKAAeCyvFJ8ejBmoxHckMg4fpv85uiyt6X9WMqqe6cJhJegGaw6ZQ4Ce6StLMx3Jfc5dxbQ4hLR",
  "key4": "4gdTE6zWLWwKLh6ABryPBuaMzjcT85NP6hsGT84h4ZzfqoiQPSyvLwW2ymyTo4gb1G5bHWcSSaXPnGzZraSMFMx8",
  "key5": "4hMowQ3nDJGLAvuzM2v2sMYSWw79JM2dP8RCiN2XqT48FdH6V7CMMwTjkhXdG7FT5w6WZwaZsiiq1Kbe6CyJMueE",
  "key6": "5tVgEAc3Bc9zqRQqrif52ZU3apA9oiowCcZzSh7uHTpAeLkxErUfp1fczpegrACxfTwCEzsYprstRVxtKxP6CUwt",
  "key7": "2Hxxw9kCTKvxFMfgLmQmGGtm5GUaUaBcciQyMh57z8EymdN7RyKxhbyyTZcS2RG4yk1AP2P8zPi1SySgzBosZr5p",
  "key8": "51rVkfrNwKE2aG3tJzFjSK7jcSDxAZkNz7dcPrxk8twb6TjtZQYnwL6Vkud7AghKxviNrrmEckueSgjdhQvN1FEh",
  "key9": "5J1nceu93XgnKG697bLQ2CfdfieHnmSxHbhXELNqZ7hJh4EZUrGwumTZqdpZ9AxYV9DMSBMWsnqR9nVVYuB1hXKd",
  "key10": "2cz1CZa1vqEN6wwa2Y11SmLfoM2VfrjXrFtAHyg9LbGu8XCTnad7dvQ75f8dGT56gfej5LXxconm58yUoYCuhYj",
  "key11": "47HhHjdm5R2K6kxiL53GiDgGBcWzvHZiC3wod1CupxsyDLwgPSxGCiQUVSJyZyXNrGbwa9MR6k1aaFMmVhnK4y8r",
  "key12": "4NVLqjAxMZs3NCB6F2U4KwP1bezKnpbU2T3WGrvwGcpnawcDxuR6SXzS17SQtCVNiWoC4S5ckv5Mr9Ni83VvGvuv",
  "key13": "5jvMQC6TN9c1CLZeNgbKeZ4ba693SxQgUtBa4PYECDKbcAKWLJVg65wuDzfZ649rW7pj7KsefCsNGfZJgKVEGRgZ",
  "key14": "3ebd5fqz9ep3uNHCDZ5RwHcwLRRu2S9R133ZjZZFUMvinoY89DwTNwzWwPCoqE2XMkMiuU7kQL5qCp3gjgpyt1Qw",
  "key15": "4dR1MkmnZbXLRp4BJejP7D51gvgkvCRvssyBE81ze1h2N5diSM1BLtKVqdKnzLMhC4kKK5VcvW5N54VkuYFdAMNd",
  "key16": "2koz5prpeHLbAXszxnBWkDXWXwkEoG9J4Pbc4QqcULkg3SsvXnrbs59CxCYS51gC2o6zuKFov3qXjkeuAoaSwhsn",
  "key17": "58r4wip1SCfRz5GjRFVmRB1itpastgRRWzL9WYWtMFtWp9bSFY98Z3AsDtbWmXfGrb3ERRr3yBTKAuYRRFTiWJKS",
  "key18": "26aBhpGuBXSUmFWpcNPNCLN52PTzbPmYbUbgMvNzL3uJiFxZjjduPSty8R4gvM75KRKwTqdpcWXEee7kAGxUF1eT",
  "key19": "4gWCvFgxDUakevFmYBEYjeUUEzrPv7FB2wEnwvf6Bd1k7JVf7jVD3R23afS5V2UupJn2E2wiwiiPV42KSFWaLV3K",
  "key20": "ZnaxtBSHEVHtMLCsZuu27KLztEhhwj8NNThX8gceyVvB6sDHhzovud8MamnRgZ96NhVtrvxdcsdZthzSmHz2cdq",
  "key21": "5cJGLfVCi7B1PnU9UHo2L2W94jcnaDsrG3eKgmGVpZyqfBWKkGL7q6w9RC8VvfT43MjGX9eS2Vgr9fth8EsFNbQ2",
  "key22": "44yxg69iznfmUHsgUyxqMDxfVtzb9kkn96ZA6rtCNia6EJjghkbGfjs1UbNhJANuQfuPHXgAuEHk41Z3yCJPDtZ4",
  "key23": "2TB5xp7RnMtgxDtSvRqcgXtdDwcbFTkcpd36a9ZyUr1vmmo5E18Y5s6hJHGU93ZK3JTEoUdL4YoJe6fqYb216yVr",
  "key24": "4gcQY9HSLjg3rgbqGFpM8cqypE46Dbwud5PE8oBMiKq3mKcEY5b2ShUYu4bq85GcCodANq4AhRQ4XPP8aKTpKNPC",
  "key25": "5nx1FMkitS91FCxgDdLa7BQ7VLNLYU31yDUgA6GyePbWFHFEPVHu7AWkcirrJzq3YA6pZNVnjcu1MxkMTEdG5Tsp",
  "key26": "4aKvYtXYAjCAQa2otHXLuNLXtwiEpNGwoWfHYAE3egmYtWEB9fLLfLSBGS4zvxYwHNJovbS5naepVPeiJ7EwjfHj",
  "key27": "48LMhD4QaBmcpmnMydzm1khsN145eGkENqzXeoEyDJvVz3SJhVDjCCaFnRcC3NTWU4kkth81QDPALgYKPCyZJGg9",
  "key28": "2bDjpfKf4PxcZW9PHZC5upa3m6axR14z9feagmEcayKR7aVed45qcAyhEB34aadRqXWopugyYfvHYijJrwaiQvbh",
  "key29": "3pjBLED9jCac1jN2NxZtLWA5iUsVQjbBWMeJLNAz3nd7GCu3B3GjQH67KqCkhXRENPBwF8dygXCE3uQPXEJJFfA2",
  "key30": "5hU5PNG3hzLnuUfqJvkL6QbfKKPgwNYiEDfFfNC8j9oZndJSBKG8zB1cD2XqJMLWphEcygCLVugsQFkqo9ktH725",
  "key31": "55WXAU6WZ4Hp5TurUNoxpsuqS7oiY82KF7goHjTpirrc5sx5u38kQzKwT9nTKsB3r5gF7TpTMgYsXAtD1m7V1cAK",
  "key32": "4YFJetTBer8gF6MqHZqCLQ8tff9xQ5VnanhDEU3Wkau5Ey1WefmDtPS6cSdAgwsjaA5icEmkLqibHtHpmPGWgJ3K",
  "key33": "32uH2uZYC5WAcQ8XJ32fxop9N3HTt6c6Us33pnxuwNLQiUzzY6rtV3aTjeUh3BQZBR3bjBxWRwVg8RSNUSSVPSf3",
  "key34": "4Sm2Ei4QroEjVnSAL7YdHAYkNUpwKhkjuNVPUCR8Jf5UbQ1zSg6YnFveWyH3DZEB31d62ezkyKSGc6BK3LPt5dR4",
  "key35": "5ifZ9se8fw48yXLZoWn8UNKbqWtiAReRu3Hd8BgYCn9SQ8n7jomHiPPU8PWa7GtM8c5Q5NShE6VcS5P5NFnGpyUL",
  "key36": "3cnQB1sMqJiK1CPYTLD1AZ4mGqWbBWcLjS1S49BRFiyUBJQZTaHPzwZHEfzRVRYe8gHURcSvE4kCpneBbw81JgAL",
  "key37": "3EirnvsgSEAYPUYTauXhFwG31kFem625BAfbfquzv1LoaFa6QdyYGKjPUiZzMbMgfRKkqcqzyXaAG66NyETvjTsg",
  "key38": "66ZdeMHKeCnRBtLrmCs6PWLwMssJMZ38HbqnTZEwcT5GFhUWmQTjnWmR81h9qW8p2XZD91mT7m1MFAvzrqyAK6hU",
  "key39": "25SbqxqgNoLFg32ZXNkZAinC7Fth8pMJeaWtr9NFM4rRMtojJMoXiLfXPs1uKZzWJK4CxkRkZHF6T65WceG92eyC",
  "key40": "3FG1wgajPWqYy89bwCyF5ypiRSHqaR1tKQh9CXpGYbebrKZ3hMyLQY9worbxWgaMuYXeFU3VRciwnYA97KjL17dU",
  "key41": "3JP1H8NzkKWurnbqsYKix7cZbXhAtomzoxoHeTfs7yT47xpznZuySshjydMSQn2QtNmf6KbWk1HsJQwKr3GgFxu1",
  "key42": "5xPtGV47QufEMqBaAzHep6tM1SChssA583V2GvmCipeFcZF8V8wtgNBAo6oPrXyQhu4PEgsG711dnM5wZ7rcjfhp",
  "key43": "4uSem4UARcio71judwreAFAztHG99hB6rZiWgTc8VznTEa6VnJ3ZsVtZxGFkL95c9qMYdHPixG735vYvwY3dUhS7",
  "key44": "5nkkEvA6ZivUCW8xcHx1ejiXRSwDqjFznzBHG6qTWo4Cj5kmvnEqTWG3gHdE91yTpv5tGpbuo4d74DLw8mGTAqYX",
  "key45": "s2widnZq5MaUodscDf8D6Asp4a7JRRKKZe58BAtPSsbZ43RBB6PFY2GCwbqYWqVwiHYSqgcLpMJrm95iuZS64J6",
  "key46": "5CgF1kXH5RkwDZCc2hpy7FcJ4LNpUgmfuDD6wASKSxhCqkZDbUMAXbVfsnN2nZmTMBoHKHNrmxt2B9Xa1WLGxfrh",
  "key47": "5rYNmoCANQxynoKiLZz6MkQS4KsPoNFJuEE5jm4NCpoHDjjF32rUxDXEn1KdUX8mmitnQgumL2h87YLxJUgjUJdb",
  "key48": "2LABgHBbkPnKZbSe8PuxfZ4ocBbHSN6gy2M4ikJg8DhnSCWcJAHwJh7fiYzPAJt25oUFoKPoQ7Y6MuuUCAwXK7nE",
  "key49": "3zo6ChQwUiNeypA9JBdwee3n21XtM9MnWTfK7ZgReQTuPh68qZSiT1ETiDBGnsvF3i2pSbscX38an889HbiJJnHJ"
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
