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
    "2GPnHATiyhQ3df6tiDkbnaVjTGkmhKFGUFvp77CmjX1NQNqv5uQVzti8iNXibWL9AQKEVvMi9mctRaFUzAJcnQrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dm8SuppBN6JKyXeG9WB7xPNeurKWctZ2Yw8hxaczFw2zgncrxTritZsCKCmUPaygJZUZRYSMEwUeqRSVrV1GfHd",
  "key1": "3DCM1aLhAefd7U8PaFfW51o35LZrSHz921NbLgtntPoQaUkz8VmQtHF3zHJeHKvQxVbg2U36M3wFmhxkNDEupZk4",
  "key2": "4VcUQHBdjFqTdzAjScKP2eBmduZomKdwD1VgrKY9ufUFdzjpUT2Sc3UJVSkUK3MtE8BBxFujDpLfpuvdQKwN8rFu",
  "key3": "3JY3nWmaAr487eYqJwHHFCF8EjkJqpYu62qnMopoqdor6sRn1gBYFpK9H6ewQzH2CdtzwbCb787Sjd3YapEUjBDZ",
  "key4": "RobF3bSFfh6q7TFotSX2XxRWMkAmfR7fF16RiiwDXbowLByNRGRrrFfnYQ9W25BeH9CczX51r5wT1zCF6WaWk8F",
  "key5": "4zgv4jcnBtPk4V75ZmGhzU1kUPrHYSthFqgmFKb9fJRafXYHnEc49Z9B2ySafHxiBsvixnsyv5FyKdnvwdCXe8TP",
  "key6": "FLniN5DrDFovGLkhTowD6L3erJN7cyryNDBoFYewNG7Wm6UKct29HkHViR3rc8FLcigRvVg3G1dGqBzy1RzAX5C",
  "key7": "5xdrttQLNmH3BkwfXtP6NZdNvvxgiEwits2k6kizyLcnYPVnENGNWKWDyy6j2tDqEu23b26oiExATkVQLMQ84kmH",
  "key8": "61MstN3Li8bJXvqmrz5yqbJB7a9Vaq7caXqrSqFN8ija7kYAae7Pz9kNik4hwQviH2XcLnHo7hwUtY3rFjRdGBgs",
  "key9": "4ymV8joGwFsjxdHTLU8bU1HXX6YNFfVSTc59XvBYEBw36FA4vLVbvC5QHRXDPjDPS7ZkEmWmGdZE3rxt7whAky68",
  "key10": "WV8h566Men1eCPCecLVSdCVFmA3aoUGuWTpbnEzAdoURP6f6Kcc1c6YY1AXPKjwfwzkvcSDYUfTHaxR9dbtYGrn",
  "key11": "5MQ1hv7oJibTg8e86QedjHCSi6oNNd8G4JEegN5rmqQbp7rmwYd4sYMEM7APcTFwtFWcLo6ZzgPvkDrLZZfBfWGQ",
  "key12": "3d8hEgLnMvYdf5wFiwKQwSia9S6RDT2ozK6c2KHtibKLNoSJN618nUnTMW65EefTbAFa1jMMrmryHgJe1DG3T5Gx",
  "key13": "2XrGp1fit2KdCnW1AUKgL8Wm4noPahx1D9gA1d1y7xyQTNkZxjJWpECEdMtDgj3dg6vS2fYRjeR3VuGbepLHW1mU",
  "key14": "31Yoaete8qLsQjsryXNXDrUxaa8khj4rKpwcu8yHbpuaHzmasNUg2XTTxi8sdx3P3CK48qvSF6z2xVwFQrz5Pd29",
  "key15": "4emSukHBjRhJQ5be5L7DCcF4pAQ25d5qz1ZXc5WKT4xyoUmZQEUZjv7BYEmJpaoPXU5KVgdRuX84KNqPBnrYWi1X",
  "key16": "9EBTSPJTciWVFpCC9gunhcMor85MTr5nEHXact1KoqBvpqg7ZnJt5qXKyygvcaY23VzEcQEe3eArvw6Hwskgser",
  "key17": "3fc7e4hT2c4pZw9khMewxCEUixKZGBqZFrnXKQxBBvXse2EWS37uiz5u6vmxSFUvk1R3At19ZJ185oQqm86DuSta",
  "key18": "2BJGhN8PkoZTb2uLZh5xsW3bahX8CSx5KM951h8ufzduKBsbPNdorHSrAGLtxDr7i6Pc9FWbyFq9mxSvR3mtYK3B",
  "key19": "2cWPGmKnEwX7f5oi4nx72WFh6Xm5teR9sXEbJHJs3wnhkzQiiCkr5uy7v34m1WG1c6DW7bT6kKunLh1AStgiwh78",
  "key20": "ucHZc9pymuPjpavWMhPNd2LeWQQvkWNeXcTmixiE66MjkV6V6kPDgWF2oxxBCkArwKAcssHTD52mW1ATuomhk46",
  "key21": "5uP3P5W4hRZ1SQv6JxBK4Bo3rLQRghHWiK35kXxhLruem7iMDh7nC5KBrLvMXp51CK3g8VxYksVwYpnQUt11SapU",
  "key22": "32XQHvVNktJeqXmaxAqSPGbMMHBgJp9nYt9gqD3LYSxmFr4Yb14Hs5NANNRuNjCBi1aNTB2a4HbE7REvejMfoeRU",
  "key23": "3GoUGfwpdccM7YYJwFgxGytVcoQENmHk1XUiWgwKm6urkP8C6AVQjk5hzb2ww9xEUo3zi2Rdr3ft2KVFpjqgGWGp",
  "key24": "QVhs7tiQT79Jz5EvXQcXdXX4a9LqDXBMxcg2g1gwTYb7DGmykEnvR8mFyeiGBFryigwGbnPyb3AiKeJNRqJ7p1W",
  "key25": "3gAJTAiCsuMPGjMKkCMPdHML9pEQaANHr1NFpMeWXeNdW9CbAdzmqeU3xrSft8S7zyfV3nrYiri99rBo4USMhT8X"
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
