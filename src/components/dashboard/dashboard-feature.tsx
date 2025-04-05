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
    "2o4ocYupTq8J7Xo7kvzNwcDTTY8Wnfuc2h1v1kS7yZus2rQWZWVr6Ao7w5V4ggm2N5s8rkDpVbWB9ggh7u6aGxjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jCn7w96vQryzZBMYw35qiqGJ9Wp2k3FBoxVpspbbqWVYj1FUL2ST8Xb5hLYeLiAxFmG4na9MJ6FBc5koKUvsvk5",
  "key1": "5RUgJBdJyDH169gY79e55pmV1f5U858fC1SfJVBYQcMvkoGtH2dFspdUhLgN6BxasXbcFmQpqQqfuqFY1PR3z36H",
  "key2": "5KrgAVwHx4wgEP4yZTXkkYJqjXNiiqZK8j2i2zN3RQVMYGWJoYKMQeQFx1TnMKvJRS4g1JaxFGrSKU11UhRVM1cA",
  "key3": "MBxaNCjqiFFGQr6Lkeq91ZQskVqT6WxpAkbWMFcUnQGsWv1t3tSgHmTnXFmRhAXPnkhf1Fxhd1v53P3mrp8Doxe",
  "key4": "2qpDSMYZ68aNPHxA8t12r5bwfDdNDBmLkpAZiE6MXZZQZ7Rt1HeM9Rxuxpts2TAbxf6Az2KMojqsTafXBh9Tmx1z",
  "key5": "2dqfveongtBSJWQ19GGbibVNCHh53xMNQdTk7MCjT7bA3P3Xfd2MRoTfjBogJoGS2TAxMY8oR5gJymTFm23QDCY",
  "key6": "37RsVCNY9ye3ZLFWquQ1mmbjppmswiCypztmFMDtwA2CfR7fuqqqDPkHCmcf6an3ETeRDBHJKHUCRZuu4TE2RBZf",
  "key7": "3DDFkSGF7CrdmWvNMVpPpUda4kT92bwzxnL19fSrzokhbxqnmEGj1dHcAZzVP6rGxgx6ffQNm2HctoJC3rr4K7J",
  "key8": "2iUeef4xgSeyrWqVEysNbQXfeymk2DLKkD45Poh58skVDNYGTdjvmd57sGiJAPh89RBiNJRjB93HvGrZiG5kSgvB",
  "key9": "5yBLtCLaMcS4FZr1gdrUXXe2MpvcDh3CE2sbKuBfJbmwqTJkzVZe7oCG8kPrLXdnN1V7zh37KmCrr9CjSV4ca1js",
  "key10": "5kPQuhpQcCjepp93FaA1D3tsEaiCcVJQgGmG197FjVwKGnT4yMHuqMzjDeThK5hTfETFavW4dDJnxj1qdNspFFHT",
  "key11": "386Ta3L82rmXAgkhysLx6SN7b1BRG3BDhuB42dSaFZo6XesxhBxVzzQeUXE7Q88Zm3GUpMPwuyCksavgNvpuT6MF",
  "key12": "4e8y6FcKCp9pKzPQSkwfBboNFMcSkQh5m6BomwrHG8Y4AgC24YBuh95v9HEXAV3VDSMASG5ma8WhVf3Pk6uh4tBr",
  "key13": "29bR1RkCdDSAkS6neGhHw4rutgEjDhrtsKV6ciMqGHko4A19dNJedmS3rkZhpMUQvyXfA7JpzVgn6erEh7Lvcccj",
  "key14": "4Sw5TPm8DW8eandoEZ79TLJ65wNqm2Q691mKyXpV81AbaJVLphfhsrAacWSf8rbkff4448x9N5PLUTvAwmL4tKVZ",
  "key15": "2VyyAtnT3HGAQBP8fw4bDienjdrrbqYgwP7XrKcCnZWErvsQMsSmCCWDAN1hKPyZA7nNHi9kS4uAK2GXvY5QGgQ5",
  "key16": "2QCDTpm3CZmd2mj6ic9Qhit1sXo21d7wn2g8qoLfDMS84LmEvrDwfKtDzf5LWVC1XsfAt4MsHtBpSXnXfWwTmmJo",
  "key17": "HLKMunWBmaiXBkPQep21rAvin3Dqg2WhGBCjrXKMLG8DnbPb5chAKeYxk6QsbZ9VedYQQtHuf8iz2zgRtwrUoCo",
  "key18": "67SkDsfEMc2NgmQXdfQxJTeVToiAHoE8rQPhcegQFfFgQtH6xRc1NHU9txA3rSk18bFEBvzFjPCNVybrQuvtat3R",
  "key19": "45xZrpPafZpR959kcfSLnSZbMD2fHxb8UAJmZqxvrwmP6bhEPe4BSgq8YDrLLkh5bLtqF9sDe7phuZhqCARnUGXQ",
  "key20": "4rREsNYznRJiEy8kcZgDijuSRiPStWLV5KYRsyrekCDmNT7DiVVLRfGuiaFhrxJLZh4vxGGx1vPjZZ3cYLSi2Dh9",
  "key21": "21oUt11Wp2uwyoxMqF3mXBNKtSpCGb987uYexqFfnjKcsqrsobQHFqgm56xbVgtxi7ugbzeXzNZhzy87iSKT2wAH",
  "key22": "nHGh9rzs6fhMyL55WUDz8LK2hw8uAzkLWKQXZ73cQH3GM1atdxNTD9tzS37ePEtFcU5QEaacG3MTWPtPRNmdSii",
  "key23": "5ZaptwXFeXmVW7bBeqrW7cfGQUUUuqFQe5t9o15b1oboad6ZjgqUbm3xzFFi7akMG68rUwN2fKKg36r8SLmCrnZa",
  "key24": "2D2nDByRaYktN3jFTHMMBVSyqT3CgLhvnAWDTt6LbY7AMNRDHG3PMuW1m4ZsromnH1KBNaGbrC2huMhX84sSWbkj",
  "key25": "5nYcsDh3BhxtCHFLx8qDiYehMZ6ufmHW9WyR2EkuRab7xKDENsyvNzLCiff7oZrJ8AvYzvLXwu4s9T4bCGksPbQ2",
  "key26": "4Hm37Nvp3i69wQGcF9JTX3KdBLEdkVP9iWpYof6ZVTbTB1pxTZSS8bLJ32tFKYadwxweFnErLpgB2FDgbuh2juAE",
  "key27": "4PZ7aiA7NCXK6m24ML2RbfoFpt2Ukb3gxYP3s8YvWG649kCRp9S5qA9QQbC9g1DL1g2upcLJ2rxDmj7FKqVL44j9",
  "key28": "3GxUpJQQ2BxuSWd7gcLpS7jfLBTQ4Wik4qBtj6DAWwQGXBBoaTViw623SPsDD3FefnCp9eDdQxiVdPQ33XPdqFS5",
  "key29": "2Xq4okv1sTGKmQdGjfxvwqfYi1PuC1KRWcWWnRCfP7ZG5McRtnFHFe97FBNewbE6LEXjM6kfXhcAkFgLyQy5zQ14",
  "key30": "5wtJxfxKdq48vCu9GrHHSqL4EDByx7dgwA3uSRqhwFLQr2vVhSvJcDeu48xQHiqgpYi4oWtTFJ3W5eKXUUAhoPQc"
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
