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
    "Z66z4Wt6cwoFycF4Ynh5kSr9PC3Yq8ruCKE4w7DyHo6SbEk1PZS7tCpRBfWUSgHBLDAwEZ9FGHE3eF6yByLnsvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uxfqNy5VGug6SSwPKgU3u5zMxWPWFfzgjbhEoXvw9awc7MzuZVTsGBbZuff47FjBvgJBNBQEdTJs3Viko557mN9",
  "key1": "5kdDPRtu4fZfiybovHyR5yGrDzapcdQNtqGHLPinfGA5XZHgKEd9LLpkeQrNUN199Er6CVgtiRKmiybeap9qwSN8",
  "key2": "62eC4hDRXTjKtWYxwcUzkgvuLARBpK9B3spQEShgz9uPu9wfyKDN6At9XQ3Ab3JHMo4cCDhJV3DM6vUA8yESDPty",
  "key3": "4fzbxbvpB8KTWW5uWpzo2wJm1b817YnUyPGY12Nzfx6ajMR8dnwZS8wqs1NvFqCrv5CBDyxgp7LQqNco8YTeimYo",
  "key4": "4V3QPgFcHrekbdqYYTAkg5buovJ9q3GoVVS8K2MYMtYwR4rHfM65ZK9KFoLniBYrDbGzHJUQyQb587VDbeWfK7N7",
  "key5": "2SV4gKbM9Pb1voTyxwQFqGkRNpNZcrvdJp5Leoy5Qtn2T7MH8MKBGdqouYgq4KcJrjkCAQbiguaanWCH3zngpNdt",
  "key6": "3Xxug35wr1h1y1tfb85M4LkZ97zWKd6SeL9665278WbeY8uFZE3hDLC8oMbsmfyZjQ43tVB9R3YCvqJV9a8QJJ5s",
  "key7": "5U6KZKtgrKzkRM4D3jrqZynznbxGhLshnN54yFhwCxQTZGbWPMV2NNiVhrZ6W2ZNZnqyNXC6qaorxMYMQ6A4PnX2",
  "key8": "2ovX6wBKoLTycZztkkbbdVfRYoBgwf14jY9AgBmgjoEsyzJSRF3yuiBGxCYUjNwyNV6rjVBtTEyX2ZCUhfEssT6d",
  "key9": "5tryxeGaJSuKzHGM5khyjqsVHPGgn2UBSf9Rr4x3FfEbnr33gb6RfTGNb3QgtDYipsGDPwgh9KnibC4BuaqFjaf",
  "key10": "3hb2Rt8YX3DZB5nL7NgYUN53nVNGZTn5AZfQUXhdbiNgKFdEu9vN89Tzp7BSLENxViXdL3V17stALmLMGmfVNHAd",
  "key11": "2DZjSL4LbxChTjqLQ5L3YHiBV2vTv1eWaHu4LzGx4bm4ZFeesFHBmXW6uGHiAJPqCtwTNuvCMjLxs4NjjtVWPwym",
  "key12": "28vK4QQz2Z9JJLmkLnDB2f3JrWFHoR3wGp8R4pshfZe8HnViBP2VPRW4JrG2BBPeydDZuCoJnJUsGR5sZ1fQCnsD",
  "key13": "B15HJsSKjEwfDe5U3WNGg5Xy8UYRiCPFkNo5xGduF3hGXS7LYjaPySEv57F9Ee9iRfbyFbVxGtzXHeEFka69Ci6",
  "key14": "4MMA3FgqAioWESRuEmQJRZpvbrwfwrc856LfqusCpaf7Ts5LamEq5B2hyi4rxQ6pRFLWAGHDNPZ6FjQUTHKMAejG",
  "key15": "4fdAtbvTpPL13qCAWhdTRg5FozrTTAq9CHu2ATheZVvU7AWejJNzr5HJeCcc3MTMKVjdcYGjq7ojijpE4iUFdrQr",
  "key16": "5dyMCbwMRCpWdf427wqc9i61Yz2eCjx7WwCQDP98twihh7dwqJUFX9VadiRqXdxKL8u8fr9xoRUSctJ1wqiGzL9s",
  "key17": "5SdvV9E32C3ZATmkzRiZ6TNoVi3wv4V8Pp6ZpxBenkoDSu1rNKphb94QeWKZgCQFwQHBVtaiKYyTTAhdJTZLsFtf",
  "key18": "2daEmhj8ggzUCbsGx9517LJjbAEQYmPM6TYQv5uEZC19nAvdYY7crN5moghtahPShfhJSFpw9VBHgGrgZ8kye9a8",
  "key19": "ZhpfikMwBm1WDbSior4pars9M7bsqrGBF5Rkq8GGRnwudkgQyyReMtnFKSJ6v1x9uEBoiJidRViimaZAnV5a6gm",
  "key20": "4kpkvp6b742xhpCTuwdeeGnbZG2amf3tSRQfm7jZ6oLvwJeo8oBXefYT2fZGtRm1vq6mpM94PY2hYNtdGzty1ai",
  "key21": "27CXmPVQJQP64QNe6czMfgPn9Kc4rStwQwqeN7Rw4UBinszWfcsDpj7XPypZPAPnkxpW8Za3MFKxA89yy1huijaK",
  "key22": "63tDRBsCXoChcZWuGCyHcg2FYXcRsbkJbgfVGf9wZUk4Y6ChKXeX7F5rgtZDUrGGUb4eAeFnkMfze5s6uJDvE5Jn",
  "key23": "winEEDZrNoR2iKJTiMHEA7ieq3Sg9QkdTCRem3KfD3afMHSNcbBV6QoSnWiuua68DypSjMMdRnEtCqhYqMN9aAs",
  "key24": "4AF7mPFgSCwurBJvJw3yKCjjEuwRZ6r1ommFUFn6RJSHwbW88GG4nJPbfAAyBBiEdJ4TpbmL4JakA4WtPQNA7nas",
  "key25": "2KXSY7mq5iqtLD1e8Mr95YyzcCLEViTrmG2sVhgmLYTn2LyoughvNAsN1WvfjnB6qRkApThLgioQopGuk6wM74dQ",
  "key26": "3JSEogePbWSkCVBKKUs3QPAnti2xDFwutCfnYtTkFsb1EW1trxvwSV97a2MyUxsv8X3RgbkX9wwt5SsvBLxdhojn",
  "key27": "3GKhK8bxmLjwVsbNuWcZ3uR7fiAJDjJpMLXx9UoMBwrR8wiM5AjfVACVCrTBUt9RYPbZdDaWSydvuMNCtVvhJ9R7"
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
