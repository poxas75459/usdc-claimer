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
    "MaXLxdMB6F2V8RsVLaMWfpUCwMsw4fziqEDiYrWvQ68qQnMvFyFxVKbLEhbYw43NTcifeByrvaKZgceynBtoxGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g4Lz2Z3Xr8NRUN5aUzUqT3H9kDyKAWMiZxXUhK6PtUMeBAWMRkzirxgZp2NiZc7htZ8M2K5AVCKi843LgtKMrzH",
  "key1": "5kij9xvzW8HPuKQPCNWvtZSWSGVPd8xYLfs4PRZe2jU7tx3dqtXW7m3UfSCWsDzk3rfPyJv5QBSi5qZzeAX1f2zF",
  "key2": "r3xPC9mXeMruewvxuMMXti4Ap8STkeEKJMCgePdw24XjUtXm5tuTvEAWzcLWN6CoZ2hTZNfBPG7P64TPbEnYN7N",
  "key3": "4BGPAwjLHzqQNin9me2xRzvcYtsJWpXofhvyuQmN8NKEan4AZ1cavw1SQ2ei3S5pJzohovxMhDVhJz66ZzFZ1uhT",
  "key4": "3QLSnQNxP6Hjv85tSpYt5iwvXCyhdmHxCJC6iqNQ1T2RyHL5jxykwqDCqbpqQ3zRBUu28pZzZgHdC311WaU7csEX",
  "key5": "2wD9XEZ9q437NKiMsLeBr8opX2WKVfVJWcXknHwPiLjMth18Te1D3SxqHbt5HDGde1fri3pZH7Q6MJEFgFeLTdcH",
  "key6": "2UmBUZufaZDy1ZiiPu2J41K1NePPSzFubBvraMTCvMDWN5hq4fn9sHKGeKWSDWAqeKSmCya32YCp1iuGtRx47zkt",
  "key7": "33gYwr6RtZaPWeLr3Q3jY6g9nDfKBp6XQy3PDKx7zh3csFnJ1e79F1wP14Y9py7w5J9nfWAMaPxPpAWvqR1Lf9Pr",
  "key8": "siEY6dufv4VoNiHhjG13uN23oEczyDoJ1n4Q4QN2qskB6gNpPgBhD2GaBW66HjJXMsbeAXT5WaXsZcD14S1KXzp",
  "key9": "4i1GMJ3WbFNhyKtYnzaqza6dbZB83RnzMEx8ZUPL56smXgC6FhdsXsY7mKH4k5DvpuhEFPid7Dd9GexW6V6eGEea",
  "key10": "4qRSrQZLUxZ8d7BzkMEcyZrFv5AY2oToetfzQ3Cb7oY9Qb1CzsGo52r5BFziUe8QnYyPThZdNHMQjX7h2fqCpmNQ",
  "key11": "3MtJm4T5p1tDvmq6kt3XpvmoGeEUYxcSqo6bLkNPWNbgjqF141WLudHvqunqMHJGAHvT6MzUXz5PM9V5UEcrCczv",
  "key12": "34bf6SQzxpMt9neaw44AToUgtVPq6iH5Nw2rT6gXUNYgEHbYg6BNPzkFuMj287dRwQhBCSQNu7osGjDyeQTX7JzJ",
  "key13": "2Gb5z6Ebom34cac1AQf8446b4vBvVCQP39pnYfYghzy7mSsysEcvdjJucdXxzsjmoSa8oDMtUJAGJ7AwsPmGDhLp",
  "key14": "2MhXrTNbBLL1zYL9v8zaWC2xiRqA5CMYGRiDbGwvL5ybCsikiw84UpBWC7XPxxWfs5jDadMFKWew3oYYztoZMhw6",
  "key15": "hY9awwCosmywQnKptZnXr6bEhgUxfTM8HTqEBRTQVpWvSrHwXVub7eNGzwXCjsaWkg7Xrbo6zfTjFazFMPNRu5o",
  "key16": "oZRYhUwPsT2F2NrCoZdGqr898kTB7tqbrwbMx8Ct6ztaYLr2EdkiaZGwm97HNQcdDQR66A988YaWmCich4wtniY",
  "key17": "49Aaj4y7kBTb7m68xXPktotcT3eerFtvEWGPSiQRSLRGr4LT3UnC1d5b3vXwmaBn5zmUBiYdFVcyjNyxT2LgGZVt",
  "key18": "5hKuZ8ZtX38PnW9yzDQPtfjTFe6J1afkacZzWJ3pdG59jYy3dNyxbkWEccfSZTFSD3AQmNVjzAb8Bi5vq6RopKLU",
  "key19": "5FBZfQEQtiPiXg7os4CQHzLYxvUtGzkE2xP6gwj7FAQQYgFP7oLpNAhL83BY9ZAxg8438v793FBuHUZUpjmSaW2s",
  "key20": "5oD6J6fKi2pHU6QMnAGciLrcGsgj26GDC5oASQ7K67Cog6oMRJqnZ4JbksirgHpovBFRRhUtZA8bwMDNe1zwNKLQ",
  "key21": "4nBaj4ag2jsKdgW36QDsS2PbP3dp6K5c9Esx5rxsNmoQS3u6csGG1eYyK6MfYyMo9KveVQReA6N3m5rNhJ1Evn1x",
  "key22": "3YDray8nD5oFY8DyFhfegXqcFadWdvrogCqFKCQfM4i6VBgTeMmLJJjMHcY9S7JYXTvrDcafoK2s2csEWDMVGo8n",
  "key23": "WKFun43TwZw8vCu4ELrFk5pAq3pR5UyCtWUKWBGHebc4ByqYPoqgBFC3EBD7VEK9EEkM7JBYzfxHVtjHoFHrDP3",
  "key24": "3fUDtvWmbKDq3nbPqUvSRQ7fwC2ECN2kPxaj1nX9Bc9QVbbvEehXoVwMmkRG8BDFczYgCCe5FXZym57KarKT9TdX",
  "key25": "5HfRBHVHGZkAjy8do8AGwsiuPrS1kvrzaDqHHg5DCq5BZHmYdvo7SpN7Yb8ZbTaByJ63nRh38Kv7cBDSwxqbKfyy",
  "key26": "5W6A7K9zhghPJRbHXtJquyuWrrY74XUV4ZZ7ri1mkX7dewUrmUMPBLEVSZpPHPT7fuYDqCBTmJpmb5A4RkfTvkzC",
  "key27": "3GAy4Lnc83oc5GYD9fnWe6Fjx32G3KkaGpBpYK1YCdrRMWnfKBX2TtXcCWQVTEhXgMEYmEQk1c7L7bpT9GCqLwBU",
  "key28": "5i7bh6Y9mfh2VFV2SAhwSBo5bpx8WGWvGjmGesndLdCwWd3cQwUX2qrtHh9kGfpHXVWeNJWKtFcNfG3n183exWMc",
  "key29": "4uD3iA3wPcwfZauEdbppPky78HL2UUSiBKnanMGERQpUQQSZEmV5GeY3ppXXdMtVcpgTJuk32pvXiV9YxdnfNkcw",
  "key30": "4J2hTwZ2Nb5qtQJLCHs3S3bq56LtTLtimnnxwEFqR72D4Gs9EdjURsZfZcvPNiyxs3U4hxHdLa8UMwnrWaJK19RR",
  "key31": "3Y7DLvmhPq7Nwizicu99ZerTfjQ73mdmCK2vS9VsxwSoL8gXXuB5e9gJ36BhxQBs71QNB54GNGxijvRfynfzGjHL",
  "key32": "HssAZ7FuepbhMNJr9Hs5YFm7NsBRLW3wLa4E5wiUgmiUNEybXMc8bxYnkXKUogmfpxGkr35aY2KXdQhMMqbNPYp",
  "key33": "5vH2sra32tqMqrZwkTRisxsdR6WPYjKyAKRkpYVUuWM3PAGFA8QXBGxGXyzHuHEAGSSRugD7g2hADQXd2jz8pCtv",
  "key34": "4vtEPuPRKn4aFHjT1YpNGe2tKvYdLPNc7u2H5zkVmYfj2dKctSkQe79HmbzLDxb8cFkf85YckUZerv2NLrhcU7Rz",
  "key35": "cmPP6Q6sMwjXo2nE8VTA5vmrQQrBkUJBpnS4zRuhW8fV9WppkKSVzCdg6q4bF4j5dsub9Mhpm4kwMRn89fbef6f",
  "key36": "63QcpzLJzMgoVxf3hDK8Zy1qAqAT7A3nX5KMewURwYBnQzXcEBCbJYDE4dsmA4pmKnnwN6fiXZ8Q4nRV1Exs9mfo"
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
