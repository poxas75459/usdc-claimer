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
    "4dyJWYETjpqMQfeSGNjskYoety6Sk1nxozAUqPAeDYMXuXCJ8YiQnYavR9jHYhcWvo8CHUKrPfMbcSNCwaNdotpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rmo9VqmvS1T4J7UvN2fC6mBQVGHJ1SQpLkMA6sam6XogbGpV5yBmpQ1FtUjAdRg8dcnx7tWrVGAhoJKJtVbM3bx",
  "key1": "2vqYzNC3UkCtYisFwZ2yjhfpxgPXXnkyM4cMBaj4UfCVjbZFutbr82h58ovgmUjASSghUjK966cX4koQDTe4ZqcW",
  "key2": "5gJzEm1fVDb3BhfbvnonTvjSDCHRm5mNg6baoaokeMWywzPt1fZ7fWQbjzcJ2zCCVUFCUMbcbQMW6yB4hmRqKfBF",
  "key3": "22H98xqN8wRGBqoRYkFB8rSpP18PHt4LGqevut7Em2aA6B5FfBzizx8pU8hP3VCnoVrbanxL5h6mVsU5uDJTowtt",
  "key4": "2UGSKmyDwNNhG24NANRKdiVGezgydBX9qsDZ2Najmc6641zq2ekKoAvkJjWy4c1aHJ7m8QcQY5vPKigrP7zc8VkQ",
  "key5": "21zeaze2Ngs66d5iyLxX4C15HA8Ab4B6BEKgERSThLi6VrrdWkhzg5EkZTc7fRcQzN9SAJhDjeknuwNreg6k9Pje",
  "key6": "2DoZJXr6jnanTCrpxnZFDVBnB7TXHEZSkdGuatNaK8GGaW3dBehKFW1Qj2LJb5mbJTKFTu9FhrP6iYFZF6N7wUz2",
  "key7": "5j8dyzkPMhrPDJGiHnqxYwWZiBWVKZv8UsE6CYpiwSWeh1Jydg4DRMpTg1b93tr8Sr9C3S2DwWPoEoqfZ4iA3k5b",
  "key8": "5ipgRknsnCsntVdY4R6R5MiBmX3ZKVysywQHW4XqEA9sKtqkBPTLi8aeiSAaZzDkumt7CaaUyNHth35bD5HuNbVh",
  "key9": "4f95fw4MMaGPuFVMhvvdG74ZBt5hfcjnJEdsatWYLVev4wrBg2Q9UKSgP5pCEPUYKpyrTi12wYDfDrvV6ZLrgbGN",
  "key10": "5nwTyi2LVNbQtB1uQBBe6PUG3XsmnX1TcY1cNPzrhSefRyAvwvo7EfZgpTbGmEnvgVMh1xEn8TKpeEFLqN8Bq8BU",
  "key11": "2o8WD1Tv5Qmh6pwhYhRabRY4THq3utr3c4gENV4c4khHBJ23Qkvn3UsaNHGQ7otXtC9sTwxAPfY2WS2pvnZM6Z2h",
  "key12": "NV2EjtG21UQdfZv7My6yi8Xy1SLksvGynyefy41rnRMqgM2mPvMP51bCwfMYhinpWTfaYtwzWrLAroHtHJwHT6L",
  "key13": "5xSp3S3frJomUfuH2AKpozSFNz9i9GMbEpRZuZpn4G6hMdBgSdZKx67xbqD5VjJ6HXhw6SaqaHdqnXVP6788uKCk",
  "key14": "4XgDsYyiyRGAj2KrrBzxb5DsyicCHPx7n31r4z3i9XhhSDk711hDR9CRY2B2sAc1J8geqv5kpwJfgW2onTuNnBKe",
  "key15": "3j5qmdcisN9XbgHtaYPwdjRL7gAngb93rjDMdTAWbshzsyRgd4ZPDd6eKp6prXXPBcvokx1f2hF2HEE11FSWH9z6",
  "key16": "2zgRknyNNYZWVUnzriKho2TQTRYwSfTdaq3HyWvjBxbtHtLUjUR4pWbEPqn5CXk1gPC4TkaAcsgdJ18XDADLzFiR",
  "key17": "TUYVwu5jKKFrVbZwoQwok3c4S3nDbLqVLF4epP7wWG3vn4gGg31sHLgxn8PuLcdBC4gmrtZfCaPhTRtJM9tNE1X",
  "key18": "mGYsnw5TLvVsAouvSs37gmGMCcqKoPPEjC6aEUp7hfjiHMex6C4CyQKUYZbgjqRU48KNce8gjLdnxo9UVuhM2JU",
  "key19": "MDhm5fwfWctixbkqDju34DKTVJc4kf6mtsPSjvGB5Qsb6NFU7nfyriza5C1kM125KicM7JRFGJedukgNMd8wPcY",
  "key20": "4PNU2f3Ft9gZrZKZ9XUtWCrSRxTdCegcAcHFrBndCsC6KLss2ubpBqzYFPZm3KsEjgU8Emt9GCaNrJq1AoBstLHS",
  "key21": "2C9Aep5tziVVfT48njRjwX3d9jMKXtAM1kftjnu3zZHYmfN4y1bhGWBLS5iTthkhbrRE6t3G1M9J93wfJ17mH58d",
  "key22": "zo1mh9ub7vG8YUt9QtQju7WpEPUAX5YUJzNgBnjYJomwA1maw6TtZjMXNzGZSY1ytx6NZ86zphXNvHPNDF38LCs",
  "key23": "2j3qe7ATu1oFzqaSai2QgXqbtKsQfCGFDcGu5vyEoD9eSqx1fGmEMpeSoAJBnV5qa3TBHq6Xw6fNEG4drRLTAKo",
  "key24": "4vB5kKfCCgBfKEwvvyB8khtTKqGPKQJu7xBvy7Lcp1HbwFYT4mw6bBVSA8KP4aGmQRKETYNZVeZQ7tEEeJRH7n2t",
  "key25": "49E7qBqDgTg33VBPoEef9PFKix1TFyXU93y6W8jiHij2UBkWJ6MJyGrVYxDp5SE8Ck3EDr6GfzL6E1Ras2W25zt8",
  "key26": "27tVfMfCZk2t6pXjHcuyuEMwXjmZcSRjmzKvN1Nc8AFi5snx6t6MKbFb4eJgYUrMQKGCZrzGnKEtzakXgfpUjcSR",
  "key27": "5rCYPbD8epavRoT7qbJ7v3wiDq3oviRe9xXVSywexxChovnzPCWwBTkaonRt2z7hnF5Rh2PypHaewQhXAgLa9eQU",
  "key28": "4CLDJEc2MEgogkSc5yNgaL9iDMtKBeaZCQMk4B7QqHhPdyeaR96hVwx1nkzizhbTHAjQzdqVX1yxL7ij88yhp61Z",
  "key29": "3sXy45G18EpkCXEXybaMaiwbz7ovD8C6KPGskJFjuy2nZpA47QKbENR6TfNMgiLpXQhoyZ7u2TSUNaDWqoufeU5",
  "key30": "3McjeHR8kUj3SZ6aRxrPjhaUjDjHqrp7Kouq2HkUht24yiBmxX1CKkQ4THFB35kkvFxgmhysRUGeWKGYmKwgrB4m",
  "key31": "kH7zUskE13qRGW6k6UgPfJ7gXvgCpchczqf77riDLM7oyT13FbjFbMGMRsQLi3SFAz77c6So2jVLdaHB4snw6Xi",
  "key32": "2nQqvYBiSuzmTKQwuMJ3C3DUfFxQzc2jpRzEVacRU7Jx5sdHTRT16GyejtQRm5vFY9szeGnGTj4JfN58kJgggmxx",
  "key33": "2QCphV8S6BFQZxkBdF9t1tSjp15WziFPRbsaUKEv78gSYswUjXoHvtQHkNdRGvrhdXA1PVa8hVb9p1b6TEYm9g9i",
  "key34": "3bAUgFuY63XevgjiyTLhomZx85E76Tnf9vfm1Suvq7vE8cVBCXZtf9WJMMyTBkr7KdW7gdKfYGfrRBSFo3XdQ58B",
  "key35": "2HZX53j6gnCNhhffE9eJ5kwXwvbL4pUXR4voKhUTbrU4TeEE4QNiLLijUYMJ5TDpp3KapLhPM6oaCGD2dEtG7LHs",
  "key36": "2VctwPYihHAy4MWpLJJpB3Q3SwkH4QkzsGzSLUeYdub7uwvvnQXKFpQb3HmcZXh6KVvtiVY1yfu8byN7xgcx1Tnn",
  "key37": "2j1FcMGU2qY3J6smhd16wJRizAqugVdx4WYDU1PZSpTmZHoqKBUVAMfsLn28o7bBYwmkgfAw5piyXTa9maGT4v94",
  "key38": "bkcNvMstX3Fkh7Fg8WXJdLLWGfLMr4XQHGSMDZkTwju8dWpxbrND4gx6nC6uYL2fAVNBW5KfynKY3PpS5ykas4k",
  "key39": "2okBxcAFQQjrVUr3F3ZTw3rA7ZHLVBAxTFxWVbLa7fXF6mewtM9jMFt3WJtKhZek1H45v5NGBuCFj2gy3aUvm1uC",
  "key40": "4PMC8haCzikwqF2svx62jtaoMVD5Yo1r7kf2gbTnRc5Br4y9QmZMtL14uJKPxkWg4Qc3CezGXZPqvyYn85W62rwA",
  "key41": "4r9juaQVJQun2PkYDYdiCVyRbSrBT2iyBXDmEXodZ6Jj1r6yiofS9cicnpiXeSXjB9KLzEzxBAZRvBj4bQ6WSg3g",
  "key42": "4uBVzMVcfMYRDpLcqrzpwYC8dsE3hq4j4m8EeP7fcsMZ6efmPedxwFMo9YdGMfpkBJfkKijfoHwSz5r2Q9h1hqG4",
  "key43": "23UJkKUeqzhwx1Fo3Dq56xZBPgghQ5KviyMWNX59akSr1eFTHP352YcXKuxzpeEhwVvMttKgd7iheCvFqoPeRAuz",
  "key44": "HgTai52Sgmk1Nqt9nku23NyDjNcCKH8TCFnvmR9MobKX6XzmX2BjWrZsqGCAChCxYbQrZ5wi9xUceLCXmnQdt6K"
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
