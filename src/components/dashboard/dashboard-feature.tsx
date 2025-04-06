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
    "59DSJuNSfSLLQmtds1F6PCNTRVhyAQggDehEzvDKYhCs1SccyHSyPUZj1eHU7zk4Wt5H3H55GvwWHjqHyPjHPHWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fK5QU1ubjmMLji8f7Sh2mQmM6WmWBeBayWAG53vbM44Vepp4d79BzRRzwTuez5pfKycWbhm1rDaLXixHimG8dbm",
  "key1": "2WMMgNRo4e84wSBLNToFXiczFs8veuZToru24N1wk8ytoVWSxPMA7FMKELWz4oSgJ4vjynG9VJeUjDnCV9MijVQq",
  "key2": "9jpJooavvV1APZaHLbGLw7Bw19dvbLEvyhtYPSseXHxj8EbK1KzKoPxge3axPwepjohcHNCnxpHx7M2H8hBcd3V",
  "key3": "oVSNixeCjhWtdKhac3vz8Yry3nJv17HGFddGdGywydfcHGMR2vtuFaqVZf8qkBZDPTztygu3FJHRajYFGp2wKv5",
  "key4": "2ZirGPmotNNDfXavF81hRbdutyNj92VhVASeoTFYWAr8eh4QPfypcTE3F4wTgS7cEXWCyQgXRQjXGUczJHmXFpac",
  "key5": "3TTpTyEbWKmCPPd5cyHaKcTeyY34z7dAJmSrwki8nMjdnKg8gmUh2Nk2iudsBj9xXFK3oqDi2YvxX9FxVXPxssrW",
  "key6": "2u4iKf8jywvqscyWfLX3q5tdVVS5f4pdvptNEQQSyhor6wqPZASwQgdbA6dvRzjhUA8aXKEzNeauHMr1m6cVmymn",
  "key7": "V5ijYAmp54N2sM4r56ffk3UxeEkS9goxKAv9mTvbRyyogQWGZrNDWYF8XNG3u6EguE5rbu1CHfxTnvDopjHngkH",
  "key8": "56XoyJhD1Tf4hDMocjgsbTy8igaUeKSprZvybeKxbfeqdoLWoor7bRBFJWpSjy4uYFmUXZfAQaCL2G3XhbiHdqmD",
  "key9": "2yeevD5i2YYK2ZZ4RWpQhnZBygz7HiLPpxNEynCcreQ11opB26zh6ZDd2NELRti5L5u1NF6YSjkPRkk7uZKytJSr",
  "key10": "2hfQ9PT9S3GkGX3wbaysTnfYRoMN4zDMuxpU3UeuSAuhpEcUWcB3CDiwrg1hBiwgAbSWMdsmZbUW1QSx27L2s1w9",
  "key11": "QPAS8UCdS9ZzuDknBNEpkxPXjywMc3uRZKXqNL3NsXRCXR67dvtWskZq8vnX8d166rTUPioZhw2T9FTD9YzMgXt",
  "key12": "4NaHDbQwQ1rB4Fo3LD7eVdkYtkU8E8sukm51gw9johm1ziUntqCLrmH1oV527vMMFtw3G1TrJb1hWe6rkq6gSkEe",
  "key13": "EDR5vFsQX6juDv6nmCXb79EAYUDQQQE2cNCHFkgWn9Hja3cTWgLzzWjWJokX8S3EXpr9xJLQxweEz5M7wMXjRNS",
  "key14": "mbHptDX6kR5igkFauBwwpNyS8mJyNwvfYEsy4SWdHMZpcNHZv5QcnSjHhaptauPpZpYJ2uoNnDHSAComJEfudND",
  "key15": "33SqGWf9Wd4JZEGqkddtHdY4p76ixGorDzCu1gRMrjDXuMYVt5k74ZguKiSpfi2NYUCd7fhcexDFoivJxRVufvrb",
  "key16": "4wLmrwPDQ1feGGZeTntbuKsUoeJXY3Ku97PboUJVfHgaSpCMkYKLPyLXtm1pm8ggPre3QBDXUUMcsojdwLxMycFd",
  "key17": "2ezGGRLHnkaMG9G3wMXBXNNUhDn6dVUP2A17vEgGB2iAF9S7KEhJDzh6psfQh2rVza7WTPtABGzmpmtz1JDHGKH3",
  "key18": "5uPS14XFUar9CRcEBkzkgXzrQfGryPXw4F3Gbe9iroBiKyy93isMPMLkVbDEdYNrQaPcc1PDp2qxj9YFGssaV4iS",
  "key19": "65kZMCsqwWHiTWkdFhN5oP1BRHwHtnpH1N3hY3hvnYRYX3CquzD5TKyi48jtbDDGjv1Pk4YP5Ny9otsXHPAqZvbw",
  "key20": "48oeuDX9zAhPR6k415N8TNkhRKuQSjnhtBksysiCe6B5vd4NjrQMJ432cztCjneaxqFxeV3fBpqskcrd6GthPrdV",
  "key21": "5Miq3t4H22t8w9qjX2kGMVBA9ZWaxK4YhjS5nyZEiDVvRhaY9HtLLejWCatM92Uq1mt2PDXiJux8UuKpKbAt8YZi",
  "key22": "47GE3FWvWt73ARM2uhPebTqWg1ozCtAeLLeA4EwG3AghvU3RVLofJyeZxQeLxigLPhTjYSEZh1wNLQQfZV4nGK9d",
  "key23": "2AmD7eSYQE4cAEcDbjd7MmYvHb6F9h66EwoEoryDNk3rAndkP2m3e3XTiC3XmhbSEdKv2d3wwzd8Hp8xT3P5mh6H",
  "key24": "YmPV6ZnZSKAZnwUXYdYDQNqvk8Ea13naTUuEjBEyAbz4gD4szix3Tik47kQKaxrPgKyP8XxJDLiJd7m32xLFUQm"
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
