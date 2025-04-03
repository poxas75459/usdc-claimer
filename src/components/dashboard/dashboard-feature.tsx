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
    "5smADWj789HYRZnwrYRTfjUZxyQDiPtDJJ4kp1Tt6JpGe8y8SjxL5aUysnjEHYY9NTZu2ND2HkvnPRnmBUsbGnWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CMJE6oTDhFYBbh31ypss8XgHpmLUWkSWbw4TdPF7Thtgxg4zUg1fyXXyDtitDCmNPHNLMPkMSJocD4nTAfZUZZx",
  "key1": "b1CsFaZ5LkeRkiqB23a9ejwiXroiUgyHYLpor1x9EKpbVnyGw74etkGxFN7hBVuKXhHPK2MLUNVwqzfQhXXiUA9",
  "key2": "4YSXfndkp7cUYjcxM3cePzsXhTyDAybFrCXCGi1U5xJLZrp1kyqRkHXz3afb8g8TeXoAfakTDQfGnfcYx94t1TSA",
  "key3": "34nesDMfQsucE9CSv4ifRiHMiwBz6emJFAynmQ6ioXMTLuLmuC4CSEaA7Fjiduz1A5Kcmmdi8ocFMsFvgGm5g5U1",
  "key4": "24BgqRHPcyboP743Gux29S6h4gRRJagtwtGynBcfZyqw6uC5RzLWx2zvFmYVzaX37w5Pfyw23Micub6HwPhWFEF3",
  "key5": "3NY3PisczQ4gRtTNvYw4osVXLNyoVn1i6oLanWQRQj2uTWSLkQEDzDLAYJ3vCb6w55xBosu8Ex7szmNF9Jfn8VMt",
  "key6": "3AKnLZw9kfDHroy1Vn3rZqpN9yZnuM13Gh61a9dCHNmgyQnZ5RLgoyuk48i6TBj6ddhyYH4h9Cjqj69pRMZ37Dp2",
  "key7": "3VCXt9xFYP5gpovRvUX8WdLP4oLpBpMcWvPT5vYB4cWFnmXehcRpn4xhTBDU2B2L3uw8VokMQjpJkpnB6qtWKW2K",
  "key8": "3bWSZpgbsLVHY9jnna58GxGptMZyN8oWyL1hFoSaes4jjGQ8SVWssYUoyhyWMXGgX2uU7XiBbVrMygbJN6ZDAjVV",
  "key9": "58hfj2WKiARq7vvVVc5AxNntpCPVkwgJfE6StqYBimcQTgoEgdVEiaTbYgc7K7NEV7jwRQpdUxU9sXSGYwuzbxBa",
  "key10": "3NKpDqT8oziAtn2D1FX8ChK2Z1UnFCpmspZQ9VMdvHebPBt9KSKZ68XU1upQSnh94u7Ldv4FZuKNRgj8ep5P5QWj",
  "key11": "62QiBY8MRe3HCUMKzP3JHfsApS5Mwkb7ZXJXv6pLxfjpiTpymJJSE2jD2bMfnUVErLu8AkSwKn9HqVeyTkFa7D5N",
  "key12": "3b9KbH8s54ySud4rKeZXhCJcC9LTisNnJRAwbfrwuQSamb7DN8SVsNd9hk53v6nkCopBU6yas8B6qxhULRDegA5z",
  "key13": "64orZq8mhLarPhor5RdSK1Cm1H8h6DyEpfrw9jQqzk5P51SikkZReM4kG2qAjwsx8aGGrjLo5zwrgw8GGCixNxsD",
  "key14": "RrzUX7XwW7jZQHmggJ4VC4WtoAnTzFF8QPynkEhGTwjVnraDCnuTgyqggMNAaFBiJCUVphPQHyAWPhrR8Licf84",
  "key15": "C9EWA9nSQPziUjEB9H4TzscMrZfB63sBsmbPWAaoU6QU6qmJektAetvYsnFSZHfaRKyU9PwbrqLtwfsLvbTjokE",
  "key16": "5w1SSvyVfxBMZJ5h6oSy3DGRknXozWwfnWNt4E8anLivfAaHy8ATSFP2LDjxBNTbnWiomBne9d2q1qs9sQDD3fsy",
  "key17": "2Qd7UvBqkpKcxcFDigdZnRtXzgMpbqLfzqNbrfBxxYt9JBuKaLbXf1rpLKmzS1oD5GBdzX8BEf7GN82KURuYXuJc",
  "key18": "21BGR7MP38FJ4fqzjs4iP1RKYcmxCau1c8sWVLosBwBnTiETE1jQ4psKXt2RXZkzfzeP3MSZ5oBwQxhgYMJBkYaT",
  "key19": "28puvi593J2HJH5YSPRhUagrcHq5zBfDCktT9vMqXjUWi7ekm1i9D7SsdFLrPKsA3Y7JQPuCXfRBhJdbMszE1yab",
  "key20": "66WN7hWvLaMsomi4AqXLuqfdD9ULrDiXYFh4s6UFFM6wZRVLGYQU1tndqYCWtXbAxQnAWdYJccYcnfiwijYrHAUs",
  "key21": "3SUv1LYU8gh59G895A1dA3tnnucFTw4UrRNXBzs49mhTpn2XJ37n1yUuQWVVkTiuuWzAcuaQVHtSjwQWTkjsFJC7",
  "key22": "pURZbtuKnffdtd649w42DBDyvvZA1Mx9n3fykZps3922y2Tbm2NBXv5YnCuQUFeZ9aeJbagw7JKdxFjMWuU55fe",
  "key23": "2sw5xZWi8QWbUF7QHXGNRSV57hTrufzPVWEdXjnLo8Eby8KLLnQCxWDTKLzrmhjdDjsMrhvmxVQN7p6kDq4gdwp",
  "key24": "4wjV6DK5qxjK7iABgPUy6K8TcL7b8bHwzoSPjiECuctYQLehL1FYPeaxzBuMmuhnteKAGbVWXMqhsRtp3WWgrLu5",
  "key25": "3Gci1BMTY4sjQNWubCBbo3ttwoFAu2g3HC7Ew9WHJfcUkGMsZW2LUtoJJcgVE871gas8JSriqTYLy7MPYuZg5LPM",
  "key26": "2xMdNfLR1eKTESfzTKQ5c816kr9vo33DqhrhQ26KaHXZHyPiP3u6tTfNUmAs5ZbbDtu5sY5tmJ4DfTbgvs7VLn1B",
  "key27": "3iHRriqfkG3Um6kmJhGBNvPe1XXWa8EcX7aWTgLT8hrhw6nz9RybakJe48Z251D3HXuVpx9ZZ7LRY9bDam5ZiujF",
  "key28": "5xx3mBMayMx3uvzzCwDSk15ogQyur3cxanARb7WCZEpsPccC2NBSLE4qUR9xrdwiVVPHqpefdvrde7CQzWeuojzP",
  "key29": "SCy4kLcZjC3NWFVP2dbfrMyB1Luew5oP1GGTUUBuqUXX8UANreKmYB9pGE9mCbB9sFFEmdf8a6QJYjrUEst8svt"
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
