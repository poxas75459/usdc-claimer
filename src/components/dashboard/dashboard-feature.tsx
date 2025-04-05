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
    "3xcwN63YSXbyUgVpZ7fQVaio3ZhgQBZoHeoviJdaNJjiJ4ApDMexvLf5WqqXYqwyK7nFq2wnCiNsRxciQoRDUzvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tsN8tXhB1kf3ZhMdhFSTSgB4E7VPfUYVS3tnaojC3veLHYacDh56Jssos5CkBti2GiWnGTrMS5uPDqLx2mFT4rj",
  "key1": "3FjUzYxmt9sW4vE6uxPdw62prBTTuC4BbZm9LzNxGqP6JCPiLzLB7srqH4CsTJVHVz6HG2qi1bCr3sfjUkfP6vpF",
  "key2": "ZXHCZ8V2Psea5NAqkCZqbf1fwSHX7dAgFJygf1kVuYp1fWNUGNe8L1HddL5UZCLwZZ2UApELUUcTRtXRMjjrFzm",
  "key3": "J3VHNtKFNejT84dYPancCGfzXKCBdHZbJSMWgftEUmUetvuiq3yLTnsZ4DZnP3R7nfKvEoxhRJ5SRgbSFUWtYph",
  "key4": "5XZ1PBtUS8yeaHDmnmBunNM6aEuL336cnXNqQe3XggKFoq7pNp1nAkDWdZjHRtzodAFFBNjcWHzRkvNq9wt2RBj5",
  "key5": "3nLtYGoQiywLh2kVfJmmAnQLkrw8bG7itWqY93Tft2krMGcs8CW7vCGJ6k1zubsNYR2JrMQerPC5rNqwrjzd4LV",
  "key6": "5nBbMS9cbapC6djdz3ZF9pWEYHANG5w3UJUmmVkELtdghS9WDf2bD1vqdNywBmtGJ6y8GqT9GJzxkGj55jjkzn38",
  "key7": "bFrpThg2Dz7EMHGaKL3qLhRuK1o6spJh4W7rb6DV6Kdp5hPMXdxCZ3mEDHCL1mDkg7rUbpmbSCd7QGrsjk9nExk",
  "key8": "3HR34BymPnh2X5DckyZ3nmXiFQoqXKjuacr3sZpXgrSBEV2bhUG2cXAfkSVfJY52YbA4XyCDKh6WVcLTumMuDoqP",
  "key9": "4PDz1n4xW7Y36rA9n1GqQT6ynGdQ2tVckXxxgRQ2DAuteHf58czxjTLHP4bdaNc4mZsosnJzk9MHGrhbYxm9HRZt",
  "key10": "NTAnCGsVx25uQSuFAReDiZNJoCvLLZopBnxrq5TnxtQnbPpNJQQ95UmqptLNiWoBvHAR36SNNwWrNVSiiY5gZWX",
  "key11": "4T7y3jgkFUWshv8ZL9jsjbVhw5iiB7hBb6zV4EEjuZJfcFFCAhCYiCbTbMGdLZRuyT9VJeubXTQxobkxBCKuPoYC",
  "key12": "4ocEiThWMjjhC1gaf1v48YBAsvSef1hBj8Uwm3MQr8kC8j2kJyf4z2KNDvpDJbWNc1Boux35SJws55Rvb1wQUPuE",
  "key13": "3oeNjPvBcu8WosLg21X4jxpatE9woDC6z6yTrxVfpusz4Miy4cADSGu4hEKVAAV4k1r3QYn9SVr6SUs3Sx4qtjni",
  "key14": "3VTFYS7M2q95DW2s8YkGAQZSqtU7CJdKR4RfbY2Q6HhXKdZzdobZHY4yJUDDzi6pmhiXzjqHA7MDMwocvd6RNqL1",
  "key15": "5imaion97MhkW5CoHvmJuETnH5bNthtSbaChqeK85YpLajbj55omRHaDSk2jicmZndsxGwegAcPBn9S384i3BP7D",
  "key16": "2QkwfZzFaLi38QAB3B6QkEBBviQ9UEE1SZGmRMPGDn872g7qPYqcPMKSHKMGCUHMnE85d2axA7zRkHeU5eMihe8J",
  "key17": "Q4T29Uq7jNT6nBiNcohey4ZARUk2gA1X7sUu3P75AHHWG2RUhFBQ3HCZPwUms6bgTZVbsY5JomQ8QAYd5eBkHSc",
  "key18": "2FBTQ93AuWvda4PUGVcwYhSQrPwHGiWsYqYxyhwXZZFY7z6P4c7iPUNUAsJhq6eGKnZv7jVwUv3kzzPDMSMQ4Q9M",
  "key19": "126nAo9Z5tu85cHKz4W8d4MqxnskgjMJMYjUy5BUUvdoRRsqRzFRWpoipug19L3txgW8fi3qZCfFAPok3qCWZ9cf",
  "key20": "5a9MHMXm12o8uqXG1xhKNfHbCusEKtTZBEVeCiWqTa5fgCTHrkUXmAk6iA2HdWiQD1aAU5yCb7orvFwfFXgCfvnX",
  "key21": "4rEZdcpJYDAXzaJhU2SMbjnMbgK6j4SS48YtTR5B8URfzjNQRYXtAEgFEtFhkgsZjz6zjTTwSZvMDDXx42prSjYR",
  "key22": "36ojc3gtsgVQioZvDaeT3rBcNVwJK4PeuMUNfeA2vHyqr2i7y94g2UbQMfaQQLF8avLtAfqbAYaVpdqAYoAVdsHA",
  "key23": "2n9rBebnfNAvgxbDGTTNS5DNLnRtKRKUiHpaqdLRVWXAYqQQaZ71BNC5HjriV5wm8gzBkWbXmoKCLfumqMmAWV8q",
  "key24": "4uob5LV8uQEMuGZ8N5PswMecL7oQrK8588N7MVGLFEPwcf6oCtUMfZUTcNQZzydKgBDgG5aoFa7UnuNvkgdoGVnt",
  "key25": "4pWWYJ4cSaqhX8EarSdejrecQ4iMnPcGQjufxzrCLXJswjGyGUQMzkeYXo5joicSPAHsmEHa7tdDPde3T841N4yi",
  "key26": "fhQeebVjmsAu7vEqSq1q2SHuMbQjJknrsgic6jQnP3wiDN4rVxukFx4bxkzk1mNGCSyCjJaH3JGCedfnyKno5ur",
  "key27": "CxhHvnfSohsP8YyMPV9ZG9QaRPgBsGayp71azGsoii4rTaJPvGZT7MpRYL6dA67tbnoPw4yEETAWwbgMh32frhm",
  "key28": "4sWQYEU5h9BKMM75kQWGZvDczytcg5gX6PSGCUvUokkqX3Z1JWoZup5C2GMnBirFxkqNVe6EPgNuW9BEF6fQ5aLK",
  "key29": "5JYoCewknXK7ZjCAdUf9sxXTVJmnwmRVoA8KkuaEB8tPmombBNgmh3arY8xZk4X656cnTbS5AypyEYmzPZ21ETB1",
  "key30": "5K9nxpg1jHMN6BzKgtfp1wq8KgiiRiio5SGZCxH2UtM5DTLon6VVoWvib6Cguw9LcACv72nrHvaoaM6NzC1TGLxH",
  "key31": "2WwBqf4r9i77oYdjFpsznpkVukiqX3cBabiWj3GE1J74MrqNNVBeVZUqMoQGzdViht47QVKCERenZWNNtk4V7ubM",
  "key32": "4qWKPK38Q6fLq59zh8K1WPq5ZYAEiTJs2NVT2UukrJpTCELpnGz6m4TyTGWZevCbg68bw1JZ1cp4bSchffuaUDZD",
  "key33": "33CPRk4uit5gExHCWFQwuVrBEa6XvB6SFnFzF5kfKct6jtK36s1JSLjYwz992r193gctwaxMkqZN3vs5KWFQ8tR8",
  "key34": "2sNSQwT9oASKScFAkH7A8hMrUhwkPDxy7HWerL6BFjaBX66SCk4hy2biTJXu58SXmnPy5t6Rdmjcu48ss6RJu1dD",
  "key35": "3D2AgWbQKWEicpyZKU1fzvndcq75CrTKvYLD3o2mXB23jB3DsUtHdqGZC8GwFAqYNJXmRFowrDkRe1UMubAnq1as",
  "key36": "2ZkK2zxn4smGZa1k1qh2fzVRD2pVE6FLxVE4R7QMYdFeVWZch9gGiEzqHBqi3AAAgGfTHHucSSkmj4U9Jfk23STm"
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
