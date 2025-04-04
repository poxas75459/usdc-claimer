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
    "9mmqF3GKF4yJ4jkBgXT2euALJCCqF8GEhpwd4QSTdpN9KSyUnk746N5bTHEiEphY6Wr8E6N1NaR3CCrqYP6Vtbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ap8uVwKCHYeUTD646jG2NHL2TouwfsVysaESm22zvuVvz9K5jg1tdPizozw9EGmnoRhTPF2tsvuVeeCnBzk1xG7",
  "key1": "4e7Y8TtFtt5uSEQgRhoZpwXAYEZ1DbxE7W9pgXCisinVibw94Z5irEn4yxQFR7uFpS5mU4HuJomQHpknYFfwW2fV",
  "key2": "5TpKAE8vWmbghGBwt2CG8fMr3siayfwSG4VfZuHw5zKRJNYfxUo6eG25RFhAPweHLpt6iRCzuxpJpoRYcLYHs1ho",
  "key3": "kAXevoN797BeZnGCBQVGYJ4aP4QHTDFV5Vf6Nrta6jsQiAzs3o7ktPGasct4dEzr8JF973Y88R3mK51u5ab2vQW",
  "key4": "4fBVaAMj4J3S55ZEDbwYnGZSsdjizVeMq1Goy4vYx9rp6RnMd3fA4jcW1uremMiTyU6uG2Y4y6rXmRfgeoKwoBkY",
  "key5": "3uDeCWjb94Q1dEZjLpvf5LCMS8nG2X9XhsCftz2i1anZRwwaWQZgNLk4y4Gpo1ZvapzTSVFTq2eQFCtHdX8krLRw",
  "key6": "3dKPMVLTg8QnKY9FEH8HLBEHptCN7GeBH7ZVoX3qDyHu9Tatdt1dj4DhpmGHncMRvM23had4MRSTLuvJX4qJcF3T",
  "key7": "zPP2b7joF9f2Ky44cUyvCt9t7WGg89MaEcK9kE3vNXKTquX1Mph2G1H2miH5xoLofQ85Gakx6mR3GN3FrGsZ7EJ",
  "key8": "2efT7r9HqpgcGaffRP68mM9ByddvEkczmH84RzvRxK1wo7RTD5JdXg42xSEbFtMDPJXagmbdwbmuwKKtJKUsyX19",
  "key9": "2NF3odvdXL7g4CCwcgScBktHL54CEUBAGaMZfkTxiHRC6SH5XSgtXGKQVZpp9AHPSxN8SZKS3thNVURSgpjFYjWG",
  "key10": "3Mo9DMbEkLrz3unrVWd9JdWtByadM3PjRiyfHwDM7y5arGP7Eju5qTVVZ8EiNormKb4ab5ZLwSsuCbLMSPviYz1i",
  "key11": "4NiVZAZeZ7bUP3uH3MCnvkyLGrMjfSmsX8BUszY4V6GFhY7mGxSsxmWotja2TrianyvAi4GENB1mopyLfGXL69Pa",
  "key12": "3RvdHDnLE5YM4xQceCuQNHVTV7SUZE2B69AyJVZ45hKfoo6vZDgBnQHZNkR2rCAnM4stPhJT7GGrBvipkjXiEXvf",
  "key13": "4GEHv9esjXbeqZvaLV6Gmbz9hni3qJ3E2XmEQfZVUkrjC7w9wEF7qJXbCxCnzrK3UKdJ5ijwrW1zkbh7Gds9eEvY",
  "key14": "4TiY5jZqSNi55AGve3eAJZtGGY1wLmRt4mkCqPFsvbTwdQKh7WitvHok8Lps9EHr1a9RL27KvhpFtkJNafED97Bj",
  "key15": "5BDih1EUESW44Yff8uBWbaPrK6px5Gi2ZHbzyVFKKbqrXrXWxuBr2CvCQdGyQDA6WJDyyRzGHQocg26Yx5GUnRsZ",
  "key16": "4hy1jd5BWSCLWXnK44m8QLCzCo4MJ6EXvftEtubKKZDsrTwSC8Zyoj4cfXwCSsiiVTLZdUYVD9N2vMkeB1pAsaQe",
  "key17": "3xRLGSw9kApWLBSyERr86qyy5tddT6WKN6Kse5SGUYDk44hcdxBjv4phH8Qo1GrNe6xiaDqtJgUiRhdDNWjF23ab",
  "key18": "5FGVo1vRAEnZjGth7hb53UNYxMYczcTU6g24CE3xc6UWDGmzxRL9nmYJ7gkhDYQJXRxDPqhGMB717frFR6bTVjMJ",
  "key19": "5n7PFDmiHSMmdJ2Rx3tjQhrrizgg5HmqVpwUrCf7t8EnbnhDfx2iUwH2Y7PDwrwbnrDTKboJYaGHKdqfcABTPr6h",
  "key20": "4YW3ANerMbkDduaH8orQPN9jZWFsLJVCbJxVL7B3Zt3XNggF7PGFGysYuWSX1L9634fWrdJUzu5qimMvtxbkdnUx",
  "key21": "5hBxuq6CsFZzCuxJgF1E3nfhrWsK2FoN23x3Qxsg21LC2QFKT8QV6hhyF6R4WaRHCnFVRMFW4CyCB1ZY1szBoNvx",
  "key22": "4npQ3gGGFQjhuJuRvW4fuoCK9QgVzL4k1zHdvp2JWQQPtud81UfqGp1U8SJ4MwvGaEUoPzBkxKe5vMRgEd5r1LXc",
  "key23": "27ALRX4iGh8FC1H27U9DnSH8RAENzQMow4jgb5DQsCSqHdnLFwCKYZ1K3ij91CnX73vp3J8R2fvinMx14BjJpfKU",
  "key24": "5KjkaRsbWHQv1riqv4ct14dp9RgH7Cz59E42T122NhExhvBzp3UevD2XPCsCffNt54Xsv9G8K9kXoC9vYCuYwLQx",
  "key25": "3dLr8nU2gdoJSgjA1CCDWxBEtNAZ2y8wfpw7AHVmWU7oefuX3g8qRYyV7CzLUxF7E8dxq8wddtjkDWUaNfeFXbc",
  "key26": "5jKbDELXDVg4BvchyuXyMChR7zWT9ixDjprcKdgFwhZNyUEWNEZYMTVVg2cUtvECvpYdcLKRxiq2g2G5RqjfF6Kp",
  "key27": "4Rc8t3i8SBHTriC9VRFouWkXTmyN6Dbou2vq7C8W9rwGgWeo741EdnThoCcFGSjANh2hsRRdR1dvN1mGAKXzPFBB",
  "key28": "5Q49HPrCJBSF8KoERNt7FZSmKWV96QfL34WXXNvocWVNfT36RPZPNhyXs4yYMoYNmPdL2MJ3bc4hvY9mBgZkYLHg",
  "key29": "2AXFE8ZFTbvSPXDcmR2PYMJGc3ru3nvM3BScPPvfb3sQHvLSZFJWBXp9pduiMubeZthPbRrjZfT2TxikA2qH6EK4",
  "key30": "2bjwtaVddG7XMakuSPRW842SwbBJymLdu27uKGfTEpLMx9SkPzNAJkR6gxFYm8Y1fvcP7xJ55J1V2BMHhnGk9mYe",
  "key31": "34MerTkBwzcbHvXzx6RdRAbpYPWUEYTHebXRtsd5UkKBooxieYwrD3Q6aQt69LFuJTgSp6iBU3QHE1EUSnCKNGAJ",
  "key32": "2CMYtniiyfZwMtcVzB8xzSur2HctRi7D1XX1UmpL6ki1gcZjqj1h4ozr5b5vDLtCii7kptnEnoicsNx2WK3C6LHJ",
  "key33": "3kPZtPf8NiMCvCC5UUQvjKXQ3KdDixCp9U4pXFGFNrbNLXYYSM43jnJbF4F6YNtZfo1rV8CwYURQyoQ99FNd9ySU"
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
