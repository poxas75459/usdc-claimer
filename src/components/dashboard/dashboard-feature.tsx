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
    "4cHhFjNEdr2xPStFy9ezJQthWvbbJg6n4tFbPAWVn7wBGhzvCmNnGBPhq563ZQm7wHASssixEJqk4YxKbaSVqywS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yvd7mwGjGbGwJSxvwdT2rHYUu3kQPSawEk8eURTbzrVA8kQyXZEVw5qsD4jUSAzS3MoezDumKHcVeke66AMePq4",
  "key1": "3niZqyRfqFzFHnDseP2sos4QBfptq32ci9nm3PqBXh9envsCsbzjmFSyMjpSrwVGf7fcfg9iiBH7FDtQhJnHWFnU",
  "key2": "3kSwdwpSpbXb7j8oLBSv18f1cukm4rBqN5J27ScKE59FqDGB7pWxP3knAEptdUJapwFQHPeL6dtqa5yyrWecSw97",
  "key3": "2FQ5oTfznTiVUH237wWhbAqQB3xZtTuiqLt5PkTEixt1UQrxwzXapEQhatU3kf7W5rbWnsxgkJMLB89qaCdtFpQb",
  "key4": "5Fr3a4x6LjLStCwtQVxkYWoNLJDeZmagDDc5rxfQKTYY7hPU3GKMurFeEDe2znSagy5gyTPUf6wkep9Yxj1N8xRt",
  "key5": "46y9d43iW7dzWVcuXTu5JWeSbbnEz3n4VqvqYr8M6w9iXCSTe7S8L1vVAu1gvTTVYECrTCjZsSdr8E2C6PtB2ByJ",
  "key6": "2BwycNZmenkNKJRsPfrcoCQ2RgJXgvC5UViXwJvpAd3TGUBVFdzcq9u4cTGWjXM5z9suqNZtp2P2Vv8YZjkZDC6G",
  "key7": "o5DUUegHyGucXyEbso95zzW91ut3vS9KYAJSW89xp13HSsiPtwavL2DZ1R63B2sUfwhWN6WnG3swS6mZ4G4G8Ge",
  "key8": "gQmyySohXhnMWvGmsQd6uaVm1Eq9TV7ozkseiZEaGx5Pk3hKugLbTawnrcKpf82TdNi65DHrfHQqdy8QJiXUd8K",
  "key9": "GXUzVGmCKMehqL925Cjhs1YSK6hK4gh8mBBkZWC5Lch7tw4YeVc8W9Tm99zFUzDteD4gAijfQ9Htd7Wx3hpNSrQ",
  "key10": "3dFFgFsXwpdpiddbgtFJDTsY68BWM3QwuAmBEW1T7NkLUbkZxuqxGhcsMG8VY26f6spL4weS2oN6iC8L6SHXHbwh",
  "key11": "D78mCqn3o9sni96sj5ua5foDoCwdbrMws1XYjRdcGmQCFsrjGJdZZJ5XvkcCs4SNXzVwkiZRrjFGFQiXm8MDnZL",
  "key12": "639gWuBmbG7YEBnUwtCnjWGJsppdLWuR9D1wccEGLYtQDDbPdVhsb3nMQANpM5BjhwCDh5PTKVWpZxUytRcA5rBS",
  "key13": "3TkNejepfT5Bucsz8fZyd3rXy1QT4NRqcyHuuFwDxAn6M7s9ibDECNGmuWdc4whT5FG7zVHn8HMn6RsRRMdR5L2T",
  "key14": "2YFxsS2Nr21md1u2oRLppeQcUPGp3AMabd6HC5FzF1hwTNyRuzgfaQTnqwA6aGD1oX6EhAzQKLkow2BbFNRr2b6q",
  "key15": "29SckxH8jWRQiPw5cCi7R4nMf4CYVm29Q18kdz3E198wyZP4E18FTfnvjTbEDbhSi1JQpHmPXuwUGd1yextNgLQM",
  "key16": "2CpC57xVoLYJmgnPGyfzEd4gWP6zwMjtGid6Y2ftL7AVtGQudgxpafEbxRdixzLeFzuWKMV3ePoKB3J6wbqyTytQ",
  "key17": "2d5zY8drPLKeetuCDiGTp9ynMErcNqonVRrminZouPPx4UDH1nDbv51oPfaHfNkehj1hFBsteGjBSkbE21tv8jd5",
  "key18": "3SJRGhBuhmHGtGCs1N1omcvfabkUJgmAZ5Aznfj7Xx1ivKYKXH8e4N11YtZGamdvG9Kd1ioAuufvA9wULfymK8jU",
  "key19": "4nLDcGQtkeasL7tPWvkgMDEMJzN4tGA2tcYUECXnVGk3rJ813QFqNBWge1CRoV6t9MnDXs2te622M3rkK9NQaYCR",
  "key20": "cERr56fjMdjgxcWkFu3UxAWTmKYtSXjqzYGxXyEcxso2CCZd4yXg1YsodmPSrXHVfbADqrBJWgU4HT1kz4arSYk",
  "key21": "59aZq5pMQ42jSLAvFUrjAjQJ9MeKnSRg6VPeAT4DxWhZzk4aiixgQJariEh2odyPof58RPRvqcGGBo2Rmdy9VKsM",
  "key22": "2iv3x4heAXZLR3V2kYDEmF3HeUhYaXWY4HmURifDgSHtmBAGZJCUGtrjmsie6wfWHcRVDrN8GKebzkAp2gk3r8xU",
  "key23": "2qFq3uHaXs2wQhbFtyQjJzPSu4zu3qAEpRPEkgzwG1RyXbkY5VnxVbtZPpnM9Bg6VEo2gyL8NW2pN7gYMS3zRzpd",
  "key24": "4d6K1AhLNedGob1S4wJFzK4Cnv52j8af5tRoZ8ABReK4CNgDe2uZAueeB1LHiG5sv8cpWSAnYZ3FuxwDeJUat5v"
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
