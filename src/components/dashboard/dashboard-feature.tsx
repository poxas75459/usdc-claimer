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
    "NxNZ8hq1A7YAiGzYKhdp2bqSirgwVZGD75WohwEYL4fSb1nM8ffr1BxeRmaWaq2CMt1FFf2Yq2fc2RuUyfdy3UJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nq7NftcXRgFRKR36tRJKNAcZu3ZvWPrUhWSGywXXKfyom1mAB5eT3zgmdn9CevxRsY9oqQAGqFiKUmN1ierxzkh",
  "key1": "3nUMyNdQZSJxPJdUTb3zBLUSs2TbYdkMK9WL4pLdfJGZM7MVdaNdmuR141HBtPHmEka5NyYcrCes4EpN99qAL9M6",
  "key2": "5AV9WrHaoB1MCDg3WpaoAc4sdXbyUYdBa9JYXac38px5XhnnQhd3RWvD9xkKpSJuyrb5HUriRU1YGmbd3smC6KBi",
  "key3": "9L5mtuhQ9e4PAfE3XoTFojifttNHBDJbdkjzZFzGhrpHyqS6GPXQWDzSng3LRyB4LdmDcdSorrBoayqPNGDgkCw",
  "key4": "5YCgELGSe2THM9JuKAb8ZLYjnJoiYNjRKxBtXV8RXZJabESc7VdX2HeLKSYTSo7GxcGqQ2F8siGJAX2EBCBxKq11",
  "key5": "2GRkKvwntMUV6gLCgYuYS1NDrYFGaiJuftnprEG7qXe1WXeb2t5TExgCxtnvuPTveumQLhYs2mM4stbvngu7rPTA",
  "key6": "3ttGv6M8kejADBYYmeq3bMx2THLKZoH94xEAfrBQJQnzU78NXuwvoJEyHE2NuX8B6seCiaEc1MKCaSMP5t6vqWMG",
  "key7": "3sPBYLhoEyvPxbEPVEhqiE6vUhVUJShArg9ieUtiXEMKebZXhv7fy969eCN8q7ZX2dqP9sxjRNi56iQpPCZWJsNi",
  "key8": "8KvspempRCsuG6fy7CVEgyGrQpUCha46KaBc8eQUnNoqmmySQDtdEGvnLF1cefE2oWGwnXpSPCN72aCtueU7iMi",
  "key9": "3zjeGGdNUco25Lyap3TpfzASJP1RGvQfTQcQxeiggBMbsSTkDR7xpQJKAsRs85kGJSfDPvrMjPk6ooJs3nkR3kDW",
  "key10": "44TGnTCBK9pQ1UzSXVBsQ9sbX8BcRGy8cbEr3WrVsA3aU77FPsAvDwACKpJRw2GxoeLv6R8MMjR7T2caCJJDgnQo",
  "key11": "5mBx69DQmn4BavFmbn4AKnaUaTJqb36Bza23N1JjX5SKjKcYoPUDxrXiMx6bZmmuPLGaz8pBvMtjsRt5qN5s9AiW",
  "key12": "5DW1bPyAcScVzDgG9nHyYrByTGU6L2nQjGa8L3ed6JLpxPeV15srvAu35XFDSi3vVSLP5PCCFbdahFZ4e9auMJDQ",
  "key13": "4XBdP4YxPiZoHLQaSWEfZZKgiYAJoVnyj4viLc896qUwvh1knLtMZek5kxqw9oXEH7BXCvWnRPguaVsDRs7YAxFq",
  "key14": "3UKBt995b6WJMrZAy7zmy2f5dx3NC9V1GDg2B2qagcv6FJCvh3uLRmDXmDjbvchSCYDQy8HmfYgrTPggpTLMdLYr",
  "key15": "3u9e5ttCWjy6wWvEC6csf4PFTmCodNuKyu3aZ9a7hXAnt9rDLN9jWV9ijJpVWmCH58G5V5pjVn37QoaiyPb366bK",
  "key16": "T4iRNaKmvSXUwBjeEoTzAz11vA9fCoj7jJwJ4raaFaFGy85so7XAXyGCgzWMsNpAzf7TwbTKo1Pt13aDXs2cVPd",
  "key17": "WSrsR6ZYezQEr6oMrDq6xt3QhhLAaqM5ZvQdCqC6dcjEKFApEdPjUVKHwfK67SEicqzr8bsVeeyHAPH8pxBipNX",
  "key18": "5H4v22m8WiBkES5NHfGZeb4BHpCPF56jn2c7mHqrX5YSVh2bdHTmvZ9E6VtoYrraJiHwAydHiwpPMSTRWoaBi6Z4",
  "key19": "9NUyyuyyEMCe6LGDyvewa2rPjuM3WZJvxnGea7Wb57trkVudeGUnbk4JLqvA3rjAUiptiaL4axqY5uezAdWmHSz",
  "key20": "56SCufRbn34TLtTaAyoWXGu8nxYsJHY4ja2pWcwiTecixTuPjD7c3dnUDUwet3oQFHqWKk1rA6gn8stSuDxFsZ6q",
  "key21": "3kMe9Wc4yNfwY2qtmi787LffikzVoRtGN4YPDhL6YmTVRjx7JBAugp47Nut5AszrWcTT3Ax1xguyi7rfpNCsPWLa",
  "key22": "4UKp4jpZABHrVeohFsA7kCPRxhXnyRbQxYUdJa4H2EjiMUhFx8X2wTxNptGLKF9H6j25SPK6UZ5ZMbs5ibmKkRw6",
  "key23": "3E9z9SLUGoqsh34QERNGA11Q5g62BNVuRfo6qqxfkX7DTZV8Gcr9MJprjbWukMJ8o46ZbvHiCC4NH78VjauyMK8Q",
  "key24": "2eZEeq5GjfEtFeapnNBMZpypDY1k3WLhDRULWkbfJ2dE6UCymjyBkaZ9Ef7qgyiR5Z2wFxDsdZqZzq4b41Gbq4nm",
  "key25": "5xAwYCMQDhbWdzjkqVFw4WJRSubJYtPmqYZyHtvjHP2qwjpBuEqCooRdr2nKV3om2WAQTY9mpuXZhXd1QovSs1kh",
  "key26": "2FFyjvMiAQA3zUTa55judGFr5fXhi7jHvySZBKEAfhcARPTaqA3WyU87TCdPzSJeDz5LSBcdHjw2Fvepqx9CNkRz"
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
