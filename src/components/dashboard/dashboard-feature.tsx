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
    "FQfCVhnzgD9JyCd9kKorBdcsxPfiwj2PZRooMbo5McpnQsDZ5piXXoudatTHW4emLaL2FqzB6pyNp2sjqzSLgWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dmYQm977LzPWAreYWazrNhR7qLEiH66AewvSQPpaHKfUoJM2QMvDnBiYhAcqwevEwY96eMmRHHPdQXxckHxuJv5",
  "key1": "4W1oFyNgR6o75Jgha6grnrxjfrkY6ZMquDxbGp4XLw8Z9wP8CVmzLWRaeLQ3AwaCkQYcXPcrSEwy8dN8ZQ3WHLJi",
  "key2": "VywtoPrx5gkne6pbyF9Hai6RQ2RkhjU431397cy2hPf32AxMcq7fypMV2wDmRXWvMMAkHj69RNJMccdN8P48f9L",
  "key3": "617sZzv9e9fZbv58JohzMzGuodSo8Y3fGPLRnKm5oor35vojDTBD1HZLqsLpCr1iw4FXj9N8ohHmYvGhj4ystjCa",
  "key4": "2RpDowYTm2phKQw2zxcUTpGRZsUs5gaHAuRwrUSn8zjbdgwzMPvsgQqhjgdyKL9Ji8HnYpBoGkzcEBLE4UHWySkN",
  "key5": "3f8gZPqCsiFEu2r38JvCsm4NoY4LWhe3KYzyLFwJS6sYLKd7gw1P7uRD4epAfsUdNNvsxBnnGyWAWzcPYBqYPBJr",
  "key6": "2ftpifhf4bP6yf33HiciYKrA7Lgw12zRngesVrjqkpDH4VxYRbnQ2ZoR2nZsQFMQDKF5GUSDboibDPjjmwfxgHzp",
  "key7": "5psHnitWN9BZ1ubbVUqjdqAyN7cvAvqVafypn1AftNCM1Zb1pTTe2JaNnyFZYSHJoYU6wEAVNsonbZ9LkpMYgjte",
  "key8": "5FdwWTsk5h9tJSzGetzZBGvy9nunUYVxZQZKKVoQJHj58iayYuX6g2StPinmjUexZLKfdMJX7SEDv7KEfhraJvFi",
  "key9": "2xTaCkrR8b6BhuKCVok6oiGETiyscL43A4eQYWPUDi88d4KpkABt9mW5he8hNQrMweQGRqsVuQiiq9zFQiS8ajEp",
  "key10": "3o9bjKUwnEnKpqvhbPwuANHDSLKNwUmAm6WNSSbyaLznT4RS9k7hA4C89fx7x5MhXjiy5XkBvtfmGBrS68LJ4cuL",
  "key11": "CJJrZK7ncmbomi2c5Ew2rLcgP8UVHFQAXhcSiAEaxpCgLL1UsGhS2FUdjS5bvXk3x8KRiQyKk2f72TXMWnmBMPW",
  "key12": "4nXEHBeEjPnwp94rkXX5HefjjGLdwEyHuKvUEZHAMs2qE2fVRdRtMWio7afmD4QyszdGUpiKz5wmunnbQadz4EmJ",
  "key13": "2JyVKvfjcTh2QVkxsWjMxK6Ke8gZVxzHJdXAVVZ4tR37uA5MWEXGHu96LRxMKWvf91cT8gosUgCeN2NFGs3qn6ZV",
  "key14": "5AsL2EGLSzG8GyD9PWzSSjheF64FANCYFj9vfGXcjUSReCRfL6QwfptyEeA8cz2w2wkRJrb451eLrSZQ4CGh3hsF",
  "key15": "55kY4CrvQjuGqu8WtkFeWPedwKbDp2DPjZiK1GMACavfrALz3qy1F4fv9Uh17FC3SPVhMqhMq4TWx7m8br1WaBqG",
  "key16": "yvtwLYEhsMXJAkFuQ3CyUBC7mNGxLNEPNqgGZ1Jk35bVErHumfAyo6ZTAE9RtmpY5NBWsYeNnoGv4fHp7GnsmzU",
  "key17": "2riCc71fqJWJVtucwe6fdZDVygwbe54bnUpFV95YWmDzwfQbDsuLVEJaWCYA8JVQwq79smaoRdFakDRBftR74D3d",
  "key18": "5CBSfy8qR7kFQ8ssX6p1FmLA4wsG1mHmMEVRqmTGhBtSz7wYiyZp1LRuFefyjhR8DNEEEUFwfM9rNBejitYAQhmp",
  "key19": "2SVqcmYPJcR8T3Hb4tr3fBMVSM8hG6tN6UQ4rHPr4fLvEP9j75E2QXWipDHLn4sbH6bx1nSudULKAgAPEh2EUk4o",
  "key20": "4RTFY258eVbBvgK1scHtDbCPsjW2hrwExMYYMHNaxi9rEqmGSU4sGKUMwJfzZEVuaaGYmZDEyeCJjJkaYebWgS6T",
  "key21": "5C3LWhpkeLHDKjVkVDVXtiq1kfyypBf6BbfcWi1neCEqYUpbB28fWahzoM3cua5tSvQcza4oWMyz228HUSotXt4n",
  "key22": "3PE4qaK8hbAja93FUtgwNyRiYmaqLCibz5ZFiM2GGd1kRwwtSg9d7LbXHcbuMXzDmNeDZada3rMzyRHy5AzRSujP",
  "key23": "4YsFa8jGLe7oPJrHQExEAeYF6wnY3oCdnH6b64yv89gWCfZRMXXW48ELJEw3xJGG3K3HMzYL6vBqZVPbUmTvt1w7",
  "key24": "4ZP5JY2s1Vw4xnTFAXwLhj5JpNuVKM9qGgxXWLEyK66G97kjdZ9D92KJCAmGiNyi7DJosRwEjyv7Lqf89btmSB1R",
  "key25": "5udbFuNPzkicHt6cHEyYeF6xgvDaW8dmnLcNZiaCc1KMU8KbJmJyrPZKwqnCrRgLmWS7qSToPZfj4KyfgC63TBgB"
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
