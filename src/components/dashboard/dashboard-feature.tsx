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
    "2DqYuTucVVKsRRCV6qZtrCMBjFXGtpEeEKC69Ffyw1QUcAmefVgvk4HkVFTzhejtdNjviBPqCiAkXwKvS7u3X7yB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WXB6yUDBSTBZn3xaTPhhStvVKDBUo3NG6nfmX38q22VPgiij8rqcft8LFG93wDGaU6TeTy4vs8zxrJ8FDgKjQY8",
  "key1": "51MYziuoR4PYFzjMSYjQD6JZ8ayLLLcKDTdhTVfeE9qr3ZHxbriLmSaZkgXyFZe3bQA4oEdmDmj5s2MU7kTzcHzr",
  "key2": "5bvvrDGi5UCMp1eoFA8AV1GcXygmTDVFrZawgYdFnoKU48XH28uM93mimBJVtHifwjhoGCPsihCP8Ycy2EsFgJ13",
  "key3": "3bFBPMhCRhat4sHv3t1t8seTKhWLb5q8xFbdKLLAi3kBZw1WWa8xDbYrUxf8RZFZ525WKqF59u6jrNU1xYmnexxb",
  "key4": "4haWbPXqqqAMbRGubW7FYh25gjBd2FTwcxhseNLkhdpQ4gGJgiHJwcsyCcjqmxu5nhKLqyH4F3PmRdfNTVxDLjTh",
  "key5": "3CM68BMmXq7cFE2rXNtyouEAfuM6VLjQHFwaS1kmz6T5zzvxQpQaGi1KiQj1n4YjSE5T251d4MXfL2Z31JX8UEBP",
  "key6": "2sahgsCcFuaXFfFctS1mak4vfAhjWQyXTAW2gYdkceh5GDN7vGdQLS32d8YDWC4siFY96ggBnKCaB5zJkYngZ8J8",
  "key7": "24M5ftYx4uEE5hahHJm9JQqzVbjtD47XU3WEBRVtbADNSzy9YjsNRZ5Ppyt9KmabQuymc458KCqs6bYFoMtGAsd9",
  "key8": "iWcGTUeNAzqVDU1HKpe8uB4RZYVM6BeNheTGhtvWihgFR4BXo3W85Qkc286uBA1E3YzLFfkb83j3FCuELhHdXGG",
  "key9": "4eCaaaBrX4HASQtra6EokK3dvM3zgWuENWNVZ3zvEGNtvUt2sKyE83dEBUxtjuxUKcjNs6Ze45oCdnRVJDfM1TXB",
  "key10": "43gpXDbrnWrKvvvPmx7LznitBYnio7nm3Y8GSdjMffZb8DKhEYPChWjVMqLkrb2kgswpA1MucsNjiMSt4seGRDPC",
  "key11": "58wtrbZXxZoY9fAkaM17sDobogVbH5GYs55MgEzVoebPnovWxFDHQpNHbsZeSov1c89r22yVBCUBQvxDkNjPapgp",
  "key12": "4wWjeGgm7x81HQEfc1xL464N56mTm6vB6fQzuyuSvrfRQBYqR6bEQ5KVKQSqfL4bHGHn25zMJ8eWgJrVk6HXkBfx",
  "key13": "48JZX1Mj2ybJ1skzoKNUwujXT1KSm2FZXaYLydgLGSBFzd7LysVWVMQMuZZAEcPEWQcDZva1mxm4yG2D3NYUFYSd",
  "key14": "3dYWvV3tb2rY8FAC5fUjxZ8uufC29KKLRZHmkVztRXvSpF5YvSYFH48qeVL9M4vL1rmWaEgwcVLRkNVBvv4SfRmd",
  "key15": "3P3KxVRSkXjHYtcnxkAEFFcfUEuziS6r5jwJ3XvwdtyC3KBTt4rQdFxfUCiaLCu2USgzAoQQ12BwNVkTfLQDqhMN",
  "key16": "2LbPN8qMDM7hgT13hpFT5zkxmV9hvwi7oXcYWMk6HskYfMjfHu5rSJ8cjDau2izQhQH35EweYcciNjE9XpnKW4nB",
  "key17": "2i3rs2RXP9JjcxbywdSvRJ8rnnJY2e79UFgv6odmQcp8Eev23kFv3mJWPwFD6fEYf3hPNQTNCCQx2HxAAt3S8FHN",
  "key18": "23TQrRij63jcQoC8NuQ7CpsV7mWYrhveDkMmihshGVAysGNhYdx7QYzhadDzC1KqtdiKjK11qDRRfj7p6TM7YL2s",
  "key19": "QyBMZuyMpJ93dGaEcSZwGuXjwtswYUvy7LXDA6eJSC9wHwfY7nA8Qo3MPfNNpihmW875KgqSvYtmQc5wTyAPaX6",
  "key20": "3WZ74s1C4r3aCYdGRMmSWSpEh8KvBhfctmwcDNoqFrzkDMgJj37rV6Pykj83b8KkhXwCKWfpci8853NEJzQeD4GW",
  "key21": "4udzed2fFgkS1ix2EV8JbgCDcFL5tfgvEXrfJesTX9wirAe3GdsiyQjTNzoKZx3jWEZByvduEhkKLD87Ych1UXp4",
  "key22": "NjFjEbtDdbWaU3tNbJHxAjz5VBuKfjCsLrpicBqSasgPCFYu8c6ykoLyrpiGotJu4dZAYgaWHHfBRB3kEXVGuJC",
  "key23": "EZsy5xuPEUWpG3yPXHiEF9oaydggt9kMpAHu9P4Gat6pDvSiHBgxsuZoUSaNpnBurirkX6ckb2gz8YB2pwBvuZ8",
  "key24": "22GSB2KKtqK1ZQrDkmWvPJYCYxLWCkHFo8Ld8XtGVn6jnck1DeoLvoQGMTfSBtoREEZfLQAJnbUR9dPvjVS1iyMU",
  "key25": "5L9ttYPbDCK4KKfkdtFDzCXbKsc9B7JMQ5cLNZVviEuUp5H76gsNMn7uzE2jBGibaCe7k7snD9eFoerd4kaD9swR",
  "key26": "3pBYJy9GdAPKQDbVpoou1B3fsogFiFxCY1dZH26XmFVehMVnG7AkkKRyZ3P8Taz41V7FeMYWioud8HyPeYPxV6oo",
  "key27": "2YDYn4caAwHYyqoz9rzFkcBRSd8cyyZ8gB3S3p6AqTgnB3tcTx5eM4P5djQpDg2hJVQLaNPYnP62Mop1JfuoYnTK"
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
