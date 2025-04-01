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
    "2j7HPvAZ9Db2u68oKEW5Pr96Nj9zwmdwuWBAZT9K97yA6dMjfgbtfq8wCsWQq5SrHXbKS34ZYwQC5y3P8qaiQ3Pe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63owaR37Q6mrCt66UmpsGvEoEwV538ZZ5FSdyqqPbP7WWGwf4xjabgjKRsnGgvZ3UtnxC4PNodL8kMbo4bfbKo6R",
  "key1": "2w4HBsJy434qiT9vuNGeZTiPk3Aw52zTMkYryA5kFoTomzJhraPPiURmgLnPx8Q2Uk6pBLEkzkXq6xTBKFSK6HgM",
  "key2": "7osZVkpSxzgEijnxcS2FrgU1Ju2GYM4S5eWiq5Gfww1YF7eNsW2rS66ULaqH148g5mKiE6gXLGBfV2LSgNu6okA",
  "key3": "1rcR8v6HSumU22pM9j97tqe9566ZNHCSxdkpCBxXP8aHf5ntTreYCe2aqATLSApaLXTy5N7KFZgQuJDRrxCV4RV",
  "key4": "FjGzhpHXYxpJoYXdNnLFWtWMvfBxq6PsXzt1T2XjvKK775HRfqw9xFAJ576Eaqde18Q5ZuM9uyxh13oX1yVdqJn",
  "key5": "28wJPKTie1xNmodtMjCecEipx4ippDmdtmhxxwtsuxBaaq67NyUqBYxnxE7LwZLSdSFUcqLacjiRVKTFZJq2iv29",
  "key6": "2o5aASarVS5M3UDpZ629aRxZaZbCubcvKSueGHVHoFh6h3MFWhLphL1dN9Nirr7fgo9mBbQSaY2N1p2uub168CnW",
  "key7": "5z1un6HXzSdfcSKLPYx4V73JuXC1NzEaa2aq86cSRHT1S1vRjUKgApzeH67iemZ26ZmANaF3S3TspKtsGNXPvKeW",
  "key8": "2b9CP7zx14knkDgXXPZc9gjUfTZvS4J6uEQgABjQxeoiW7GzfThLDpfhNXqz4obWwbnXQXcWMGvREphrr1jD1UsW",
  "key9": "5pCcfPbZYqqLdsnVbVBLNxfWekiKefv4oEbsXxxFMrPraHXzMyWzqnyFrGMRMENzHKF8zTj85FkUfxNRhTG8U5cA",
  "key10": "5WDMf2dKLQn1QDbXFBchVWJhMNWH2tctnD6HfpLce49F1LjT2XesZ3V7vqXFdq2qMFWqDeE8yfBq8yGBWbTYpidk",
  "key11": "pPGABBRwc8wySK2hKzwYogbuJ66pRcVi1LL831B9EADjkbXaSnPoz5yCQvDveaDHBef8qy4vHgmjy1jGDSRkk1D",
  "key12": "zP2auqzLiDz93CXbHdJyQWQBXEaThTtga5Xhn3G87kxxNwJz18KHfLqh1vuUU56toE2HtYp6zVjaT1LbEkdtiFs",
  "key13": "W1GYQ32r3b3gcU3HVyQoPeJNM9vDDRGAqq85HUSNNgEU1ZY2JYEbdcncbE1Na15DuAGuqmzwHxNHwkJ3U3i4cVw",
  "key14": "2aWW8mzxKM2uFW6AYRo9JGc6fE7ftTwMYwzTC8sK9hBLvmVPkc6eeBDgwEBAKrjfkKAda6Lhp47GMLWtSJ8B2Ys7",
  "key15": "5yMssHGnZM5GKUj4Vs5NZGvFs9jxn4otv8xJggJnjjCVCUfRTQEmxhUWyaQNgDcrd2xpsPiuBBzeavPvgKXtyH94",
  "key16": "36XcLMTjYrGZ36KKic7btxk72KjpLKSK59Co146qH9UdMs8RBkudzRNUuCZyDtj6bmJikXdEbF7otYYAdaSXJvTq",
  "key17": "5CM7JmvLshwqDnY8dTz8g4bBjJPkYExPgC73y4yi6r77pPb1wLRPLswtKKcZtBPnMaVLr5BZ2q1wLDGHtdpZzQk8",
  "key18": "3PvQFTVK5wGM6hRjHCp9K9Jug9y9vpiaSHm7cdD8KS8kHoj6LA6Mh3GAhGzMFxw7HvGRUeBh4pJ42meyHVXS8bkL",
  "key19": "63hSmfS6FjgT9vVY39JHwjCTQYu3rX8JsNmjB3dH9fZPyBFnW6DHpF9sbi1YaTjM5EeV3jcQfSaUJSRey6fiLjH6",
  "key20": "2ZddHgn5jgfWvEjBmeagwUfkkS465R3WgGzzxHMvVA6usJRmmmuLF5hXeixvveJuduu5YhHGcsxtUANmNpm7eA14",
  "key21": "32s5y3mc5ieukXfm31RBf8XubtGJ5Sib4YnQ2ANYQRDyVWGyqM9ddVtSew3WgfLS3dTf99ZNzW8hQGDLzFrX1wPK",
  "key22": "4hUcsQEVH21VfhGu6razS3ao8Rh5DTPLrt8XpeZMj8CuSPYcBZySWBW7ag9paGgVwtpXYRJvrRrnmYTcmYjwJAQ7",
  "key23": "4ndHDBr7kqZtqpjo6Jt6scBLpwDKw4uKJLSyikk3wWvnx7uiuUXrumwWyUhrNkGUCEFv5zr9oaXKjYjhHCc3E8K",
  "key24": "4ywhg43rGbZmDTtu8tBWeQFakxo5vh7bK5QWjAUSE1Cq3Kf65HRmtF9RnTayJbBvXtiiDFED2NJWmpQb6uJsEK6W",
  "key25": "5i3h3iEB51SfJMTgjHqVENBxsy66bDsLvMP12ujCQnyZp3Hi4rrizwnE2FaHQbLCiq5dmURVUgmKZD3yg4o7nLX",
  "key26": "64smBphNc7RYYizddNKqUBoH5JcCJvDYedSg2TBeqrAxmSusMmYo6fmq9yf7ABnQvTiuHcUm2uGNfxmRXZ1R7Xsm",
  "key27": "264PLb4eBRCDnsP74vF1JD9YCmKH4xzPeXVWGVonCLrvmJtrRHEDD85sUgsprdZwtxceWJy8yWfY8jjkbE9k28uW",
  "key28": "2GVGitRNRwfdQuEmGdFjuZgAPmdYDFN1cjei5cGt6nfPiCaGERQNnmNfCMKhPFwxVW1vSsuL7uFu2QpLGKqgP3Ei",
  "key29": "3rKQEHNcK5ko8tUnAjxjQjszaSWWCNetJjzq6T1HXQz9d8kH52UzGVX9WyPUnU2Xj1DPC4SjDQAQ2n6BBdJ5HBSj",
  "key30": "WdP4ZNZcrGz1dKcSSKbbbumgkG7JYUAKfsmhNTqqChJUNjAAuzxwkUJMpnn5vdXBaK8zSLck1dsc5Y8gfU6oNXg",
  "key31": "2uRTSbCy2rWVZeEXPXmLtrJDNhZ4xs9oe2wiGyZtUukDqs2i87HwGvLS1AjaGyHSoV4mBCzwuwgU1LTudgWsh9hV",
  "key32": "3xtUxEDyNLbJMYco4zZBC5mMKQp8Rkz6L1xuzhhRdbpwEo2gmfLUSNikR4runcCqCcibsARjNBbrwebJ7bbVXZiE",
  "key33": "5bsfrc8ab4yTE5ByXGQQbAdrF49mC7TtAaXUSmAtMoa1caQ4QCbuxjKxCfsn2KVH7KjLUKgnx8WN8omdSsCBCyL7"
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
