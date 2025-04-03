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
    "4tihrk2Mi5FjeKoGgfnWjq2vwG2zSkDLsVHaUQf5MYX6HPhBrDTWVAGYazjVvrEeVQusrDoVxHX4QrdU2Mb1h8Qp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PnQGRD4dwPxnSKF6SPjfLDbTtVtyrMtdM945oEwhHXoJMczhrLZdvPWsPaRV76wrWeQWtsijFwKfBxNwjwQ94m8",
  "key1": "4C753c3EymaL4nWtU9tESgRLF1HACAVFcTT9mNF8jx1YgQF6dYeYKymxfBmWC97u5ivgiPw9Te9wjGGq2Dwib7Ps",
  "key2": "2XnBiJJ3HogQioEx6T32GPGNv7UgxzuqLQKGqKfedoQUL1tpCtQbMYkJPUXJYnvrNw9w7VRvsrhWXdetHBUPBNBC",
  "key3": "2QioWmZxUbt5poQXLGZiANernbNSh7w1nuK2bAA1FV5guU4kVvWjLZJqKwxUKEhGbQyun58UBkAQrFeC6iqaGyhA",
  "key4": "5FpUajkF5MuUvGv2DGXjrer8fGCTxsctkwYZg9m5Cy3Undrcr9ntgs2UJ7QsgW5MzeCGnNFKV3UCb7xhmm3Qm8Fz",
  "key5": "5sKCTrt8HHLrHNtgAg9Tx8xnSEtZXznkR18JEFhoaetfW3NfAGhi1jZESMQdTrKdRkerdDSuD8x472AV5egRLbcG",
  "key6": "7p6LtpLnhQT7fSCcsqQMQJcEdo3UNW4Gmra1msw6TVa5ZT41spVRTb22dHuxkdaWb6VuzDo1iXbGGykqnzKrvDc",
  "key7": "yuYEgh4HShWpoR5JYfeEvprKgvQufGQxM5ydniBdjJWTmF42vX6ktq1NNRhVDBC3sdPzEadA2hKXMKRRBn7RidC",
  "key8": "3DadsuR9VEjSwSS1faheNq79HdC5oxCFWv4V1teQnPuDKDYUPWhBhTW8dnr7R3BURvHeX83aGs1iY3B1NkGZsLYk",
  "key9": "2smJmLg6TAE2ZubmrfztAWGPSTdXZz4FfNy3Wc7pXAVgZDqCDBSGnyhaB39veYEA1LBbM5VeztK9qCLyrKJRnd82",
  "key10": "4dp9LhCon5NdxYS5rWcWeBpc2dEZH3HJx12BQoL4bEcMpmmYitki4K3v8dZAivPbUP1LYefQRYYxZ3dUQqTc6MQG",
  "key11": "pT6b3PXjvkoaKEzMXtyUds8DcMgHYYoddx5hGovo2nxe33BmgYYCTkKFT9izA7eQuYn5iVE9RkZwHYNiSDkhFXe",
  "key12": "4ry97AGMDCsCc5VWFo7nBfB55tqCtASmHCipsFQRoQUzoYuVYzbammjgfybqoMiZzFcePv9J6ryVdYYHTk5ZazFZ",
  "key13": "ornvZLMzJKhFsnBrYGyUKZcKhGBdfYswQh1T4mktCPH822bfjZ7vuXCFyWFeDnaUDeYL4MCxobfmJdrC7UCGxv5",
  "key14": "2PP6mJoEZeTqgpVz3WYEjXC7n9PGDcrZN4guxYf7Bw39MjpqZz8eG5DCuSQ4ez7xQRPvjdL6DxsueywJctY77Dag",
  "key15": "4d9raA5hwo8uMCGesYecMYZTB2cgvEUdAkXrJ6jTSpEMrzKpLdpvwrKoQRbLBZcuUwcXfkWSNJN9MERL87pSEU6k",
  "key16": "5mwj6AhDodJwHynRva7hqxCKv32V3LfBkPFmTsbfZpTc5AXUoUoe5K6Rv3ymJs5N1vWvRbXQZ3DEhQ5RkoRbgTMd",
  "key17": "45AjrwcJSP3y5UsroF9LfSzfLkEAuJhjx5KMZtSpJtR9AC4487FN7DQAQLF7Xr2zT7XZieSqKJyQNvyZvXhUvCEB",
  "key18": "62FzWhg5jHvnd35FmUjjzFnubbpWvEQVAKU8PaoA755heYmoMig3WQQ6Sn4vyPcA6cEPNL2Fya69g1BKAu4YQfTU",
  "key19": "4aFoZWyPYvzHvXhrv5cGnLX88883HkxGKJQzvMwDp96QuJoUa3x8zgQPD652vdYh8vm1hvpYJeWPDsp2g96gbxvq",
  "key20": "6tfQvW7xbyGgZg87x3Pg5Sbbi6bWThhuB4KRkc4tPnMPwm37THpZoGhZkx6FaHTbMJmX1YcY9t2NqwSCriKvU3v",
  "key21": "4KL6Wu8LfCkg6WcUBtQgqerVC1KTw4qyhPoHAhLjfub3dVEuqXn2XGTTN65wEwXwJQrK3692F7R1qa55zLMqnnaR",
  "key22": "4APRKu5bdGASNtYxHnmRLBtp9i4NXZ81iDzeg6jayGjxK2jgrpKs5jGajjrY3B1Vp8vaghhdBrTVYLLuztw7eKJZ",
  "key23": "2EkkBqF2TBv79qaPBj8P6BBUAtYw47NcUhhEwaro57BPkLRJYSnrmFsQ4nG3L2yAGWhZYFo6sDiXz9AGfZu6eTYH",
  "key24": "3oBhV8sfhBYXtNzAq2Wqqauake7q4ayxe1ACa5jqLnJn9WgEw8K2fjQqRiiWVa8YxCRRoLwzWVRhCoQ5kJCYyweA",
  "key25": "4qiwG8ZaUe8VWjNBMtYRiASgxgaEMNyQNVEQ78eB6nufCY89SHAcMxRvsJpEzJ9C8twycKsgPgXjQdE2wSrYA8iq"
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
