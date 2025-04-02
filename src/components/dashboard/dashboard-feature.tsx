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
    "52DfCj55troNAhFe6H3v2TsP138d77aym3ujHFFAz4x6aL1hg6TSbtSYc15Xm98YsiPKsJYrrdYosBFiPz8nV4cZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GqbseZRXXAjZtBGUfiQNpQDmKD3FrqUKaVX94LQD5BHSgTiWbqRudtJTJwE8JuqBFouvhXNomLcm5wswLi9y8rs",
  "key1": "4mtYMDTfEJNdUPi6xe2P6WritDJRzi9dfT1xCrFnNMhtGzzEnCWhPxSVzVTeTkXB5kZFHBvjzkNetWrwp9SAkKgJ",
  "key2": "3iQ7zfNtatCb66c41osQDq4ZuhiYrM2QxzRPno3iVEUvFzFnNcPk3jsFHBjdeDGtB5xRmpjwDZKuq4tVB9wDWWE2",
  "key3": "42GxZ6U6qDgk7iCqhk1QePh5fYaQnykSw2hGeoMB3Arhq5VeDPMTCgdSVWXTyWjDmeVNYGZ4u8PVNbZdqoaqtVBQ",
  "key4": "34jt2PqW7JEFPY1jSGiUJ4jWBEnnyjv9qasDw44PUjbaXTxjsmTVdwXm6fFWBSKoLVjdCP96cKPMZP4PPLFaggaX",
  "key5": "rdTmHvX8E3BtMRHdZTxCK4m3cWMqxhoNe8RK8UG9NKxMKVTZFCYJ8wtD8jCefs3K2rdYZES8K9FL4BtP8n6y6R8",
  "key6": "5XD5R1yXRm8RbnQYJAMZXoRNh7C5Ah93Ar1RVf5qjx18pfMGLAE2YtfsuER6Q6KtbWorojQ9TRk4LTcVHLfXYP8H",
  "key7": "2rx37CV8ioFWLSBFC4MLV684eCrgt2ytrv7oia1mrNWrmkZuYjgjikkTBTtr5zdod1yJ85imziamw4756DVForQQ",
  "key8": "5yxqcix535e5DddSDeZNbvKVWEKXH9fkdGsr1Ers5gaxugsJgxWDqvp4PGGNMmRsnaB4vFs3R71479UQdftvMp9p",
  "key9": "2zXZiSHdfKcWNLPJYm8fZEdingJKc9YwZLUmhjNWDMp429x1QS7RTPz5CErnPGvtWzSDtEMhufqcjNcWVPx6kZ9D",
  "key10": "3WkqheN3LgRY6WRfG4pVScY5YZ2ZzoyCeKwFW4AvqoAaLeJa7GtJVJGuqBCZKn6ob6h4NzdJ8hxJooLWBT7BDgMG",
  "key11": "2gnogYipPWWTV5siRXwN5UwK1zge8UqNBwurB9PKiVdZMDaFp1YAEKS6ZRPibNy1v5ULXTTvMadpG5BgAosktfn7",
  "key12": "GB7ARur8ZAGu2Q7AXcKoHrG8C59D7uRRQnqtt1M4evy37dZPM1VtLeQ9mB3898Yet4p5W894zSDG6tnZgxDTsZt",
  "key13": "28YXDNYReNARF8EvY1d8mainAX34u7PCAuQRjotqMHiVdQgrJXSTeMn5KrpFznmqYfX2KCg6S92ARSPwD5xLS2NX",
  "key14": "2c2TGtJQKhjjSopxhzbXiHXFyuaCbpdf5t1yRdZwa5vrGxc6qjoBKmSCigzpkKLNWB4ZYCDSAqcBAABtSReStvt5",
  "key15": "2WfHGNMhkryFfQYyoKKFPiKeywdTf5KgWBYm5ZazVmVH7p5F1cBJPbHNwRv2wxH5Lko6PwRG5EhR1YxN272xXCyX",
  "key16": "3HXuT2goia6u6YM3xdbtBCmrgf32LLGteourrfxoZDG3tmtSFAGt8tEDSA1BuvFLjjRaA2vvYtt2zDjdzeUiQ8mR",
  "key17": "5E1Q4XHww13hihVRUG4vL3jukQVKgx3svebPCvJ3PK8bWjvHQAVxLtTp26Ca7AN39TTc56LSiu6nb7zGaUzheMQJ",
  "key18": "ebH31g35k4z94DDUKuVGpYRU8CvxymrNNPxyJk2q62t9Va4sECoU6hcF8WavRMv8EFzuf4LM85jD9q1Vwn2AnaM",
  "key19": "2WVKinKd7rMUiwgXkbJorg2oJq5X2zVmMbs6xF56BA8LyVzuzXd7hPW3Y7wpCyfTU5NceHHicXfWPFm7Pn2XLcz",
  "key20": "5TYdzGS2JiWVirovP5JF7VCBrbkyPDjb7X1bhuZwp52Tz4Q51W1vaUNj4uEQcxJgENLaXX9aqZ5xnqa3JNt1VBe4",
  "key21": "5rSmn8PVxzAeScb2UgubvMWbEhUTZJtg6Gk8Z4FqCckKhz7eRKxcMwyuqyrr94rZvWeHBMJ86c4QiLhCXTTHyAe9",
  "key22": "5gGSKrXm8U6FYP3cghwEiG1vosoxP7MSQaf4ZFDE4vJ6nWiVhXSV8wTYrxcc3TASQRPXgPKTDD3DzwLUTSvqrWcF",
  "key23": "f6r3zwjKe9iVQx29eyvG9pj4fCMSjkodTc6bhKLZVRz56G119ZEoFQZjmf9CsyS1T5BKCNcTC6FvWDTggF9kj2H",
  "key24": "2x2pnwh6bfVGp2nyHUq8vjZzSy5otrJ3MPaCw9gV44dpNqmrdmFCQPxhapw3tMUbRzc2vKNcNVhQjVsu2cgAft4n",
  "key25": "4bcgZCEKUx2Fe3PpsZ5seLhXw3Lp9CJsqi12aweX9hR8tP7Ce51eZxjdoxo7nsffRx3vHX3eJGouYfxFeqREe29T",
  "key26": "7fynZ59oUXDtCf7cGV3koLqDG1nv17BZHpWGc8gs3Ycjv9LUv1j4urDRp8z6cmZFUJN4ZSRpvpsY4KNKbJ245w4",
  "key27": "2E1mf5EsadT7cj7xAXHWqk6VTGVLAFq3BayBv2RRsK2dapAuMTo8FzjaVbKw75bfdQG7951wHwvzZ4PSLL9zQ8Yc",
  "key28": "3QoTaE65gAYiKVe3ujCwcR42VTkCfdQvAs8ejJ4LYu5yn7dsFY7E3eYCibEk8nfaekNaA1W4rshtLVU4f3xSuPpm",
  "key29": "jqWQBUKrZ3tZELzMVX2Rqoff2HKcHhkbzXVs72Ez54hc3NoBTzUTifCpuu3u4g5Wxw9WEughWJmXxEAWEMoWe9j",
  "key30": "5XrFcbxk49Z8NgSL8YvF8sjostUpSCbmcoYEXRycH19RcUfqwWr5Rvrt8iZCUJbj3Nbx2cYzam2V3udrharAoxMQ",
  "key31": "23Pg8zxs7xLJBWuoz4RBnwkD2nPrTYL5SkUY6DxEibX9VmJvstS2bXcDtCz95FEk6XKQs9NrE7iyZKJ3d9afUVW4",
  "key32": "5rZEWrf6aS8944z4vXpennRTTRpPq4vA63TiRahf1yXouk7GtQxcC7mG9H9JCaReoLT98mYMCL5m4f51Rs2mHRY8",
  "key33": "34RRNKdmoGSDUETYHn9hbVQhc7bjoiohR2tHLYRiVMHtBMB9BbT8MXFiAy47VzhP9G9FhUnWiAzzbx3DKiLyWy44",
  "key34": "4rPgP196NxTKhWnHUEhFyFomUqC8KQyZUnoSuTNCyUUfKwRygHCuDy7LnnHb5iqT82ApV9fsbr6WFCzVKWc44VFL",
  "key35": "66j5qeaNw6NyzbvXqKNeuUct5LMzmC6vqxtSgfhHHjSw5NGaCNNZSm5c5iYwvdhX1FNjrXEduBM5ui8YXpFTJBwT",
  "key36": "4hKq7orZrKCrxgJjhskocsnqMmjmxnXCJwgTCzq7G5Y3XULxKGg7XGobTSjWXHYg28S7CKeFejvF8iGc8X23xkHZ",
  "key37": "3Zmeg4EPam2R1rTvUceGVm8AHmTxLbpATowZ85AEPRzHtRnuSXvQPcPT6VMYkzpx9iQzcvL25FNzDnRN64EnSQVf",
  "key38": "3NUcMLqNmbeUVaK7Ky2srnYFooVBPgd55ZRmodb4F9dS53qYvXeoafyyuwa334xynw4gTbxJ5Bdcyaoz98vp2hSW",
  "key39": "2b9hiyKxym895WhvRsGkCVedzKJiS34R28aEug6kkN5F2SCUn5Xn1xM6h2QyMB5jcDi4tz3tPKrY3MwXRAvsRU1i",
  "key40": "397fQG7otLJyr32yXhWvjAWiHtdDvcvM71F8kazMycbMekcFnJivk4Db8aoQ2EbmdJHhcAnJ62rwGMmsEyw5dhXN",
  "key41": "3EXrYfhtQuHweEVnPPMuaoT5RkTsLC86UuDU61bZpfgaS5iwhqEvKXfRtdqHk8jgtCzPF4b9ZYFxHkKTczS2Ykt2",
  "key42": "4WinDtLaxJixkYcRQrfxE3gmHHCv6W2KstmTQHBivSqtRbo2aMGxRHo6vrQk5wxRHLVki9A2mxewRosQj6oQvAjt",
  "key43": "Kedb2e6ktcX9H7hwpBqzf92jbFEJ4FxuYzGbQ8kEWxrchVTJsYfwosCEANAWX3UvMbX785ijHQ8SCFAoyiukAqc",
  "key44": "5VMwPD7JEGD3MhHYeWY6fJCrDzUMTrc24XdnTGBFLfsy8S3vZBFPEwCqKJA3WbCQFhYHfSrvm4BRKbZcP6BcQLZV"
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
