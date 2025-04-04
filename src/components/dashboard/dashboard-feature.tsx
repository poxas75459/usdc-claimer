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
    "5JastTzxbHYSVB93GsszPMqa7y9S8PgtPt9iJyy8Xqdj1uYLbyePsZ4tCAyqswGXER7LXiUKPuUR3Y2yPf8wFZK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dHaRYpQFtrMWMKRLcyVheeH7DDrKvUgXAG5uPfwcZuuajTttQENfftZUByqErbVX9bWMqZ9BpUpyw9wsBHZn9Y2",
  "key1": "57jsHmFZHNyvhAQsejoXCdeztRPSSJpbH6oqiUgexqShH1SDX5Tq4U9o6KUo8KwMALKiSBhPZj1KLojDYSfxRrJQ",
  "key2": "gKjebxXwmQVqKCNLEnvfmVdRoTDYVc7wRnjK2YwrUNtdRopLGvhGVsbT4TYH8gi6oKXCnLz6rAuXyc4hYioeGZo",
  "key3": "nR4UCPuydmKz5RWavzshVAJkk2exChhShtkfnKDUAzm6DAfLjnHaQTzSWcYSYJ9ZNABPy82Phc65Qyo4Xij8EC3",
  "key4": "2skyvps5fE3HWGTw5hLk5KrsJpAMktkRe17tM2soiS2ZFabvM13q1Wf4g1rmkHw3kFBtxAjDicuM5VAi4MLssnVX",
  "key5": "2u89kNQmnXLq8qoGBNj71eoCvJJ9FbPZbr9DK8c3CfyFCbrcFz3LGJFVVZBRXb7DkZ57Nk1oKzVKPU8Vhny9ESVQ",
  "key6": "jsNkJb1e7GY6K2JSHgrXnCfCm92QyFgVC4yRyfoJin3UYjhpmwEqihaXMYa6dyoPDocu9Yz1n8PrVgFB73xni55",
  "key7": "2M5vw2Ny2rEVtWvwJVuJogq1C4E8BWMwrHkq85SVdoBJrKLFRWFq6CdjoXvgRxujMcdVhLtdcq6iwd1dCdqMLLWe",
  "key8": "2X7kvJHa7B5SskBv1TN4QTh2CGrnhj9ARYtHimD27L4cevzrABVrWkLfXv7ZpQmBYNZBjd9ZxkLF41hBTSPgHDp3",
  "key9": "4YtiAuF7jqQtyyUBmKsZsDqrmnK5RnPdc4b5bxJYS4krLrjTNu7ZkDUF8wgKvLZF6BQikvpsjP3Rv7xu6mYsiwz1",
  "key10": "2n8E6WKmVKJdz8q5fRbR7Vz4F7AEBrpv72341bhLgW4D7SAtspdNCmQ6iHbGKEQZRvdeNJ88BuZDfjqncrJT53co",
  "key11": "4wfs1xAqHVuaYW2xqL9fv68jASdCAKyFvBPTAWRSPQXiwaJz8h6P9mSmVAQR9nQR1vsxxcVEFM3wJJpxChsTqEiF",
  "key12": "5kGd5DjXxV7kARRX3zi1mWQgkm7bV7mtwSdDPRUYFoG736uGDwYEqxG8Yp1hXZ6ap2KjntJkv2dnpCSQH35syTbs",
  "key13": "gaXqN7m5iJ8z7PpGwHAxg9ac32i4vwT8E8nRmGzRuo4Pht6JYJpKtp3tG7KyXbXaL1RxZZCrGuoneV6yBYz93aG",
  "key14": "3ATxEDXZ3Wrv3K9APZfku3Xm7y9ZNxEzhqSZhRBKhzMJ1eqoXMYqJLE6NyfZUPYcapgXmfdUUkkkcvM82S7TBoRp",
  "key15": "ESZvZhqgnk94XR3dWtBwReiSVPnykuBPsWU4rFMT6mPZv2ahNSKJmBmRKSoAPsuQxHhNVZuqHoQ9c1Fq4ZdVJrQ",
  "key16": "4fwajYGYsrrjxzJY8Fsxznv9nkXmg7v8MbzwTyHFQjq8HYWmM27ug436zSev2SQTu8Ga2rLFy8oPxLDPHezkBxio",
  "key17": "5duaQfqTVYxymD1naTJrexFaNgPkaEvUuJJErDRdo6Z9ey854vmzATZKkZBqq7j3XWMLuBpBaKkZwxGaLjJGxfnr",
  "key18": "5AbNzcKcBmVVhL1AkHprqYh7cVjcFGK1PS5ViJ72M2ZVfsa87RSjX1eMsP9ocqzqL4RUYXE6aDfcfdz1unWgncvn",
  "key19": "53sBE2aPfqBwPW9cbosPXjCPsc2LQSgq7VTbjcFM5Ab4UW6kMvBxwb7AcoCLd7wfUoEMmVwgnWhZA2NPwGQgLy17",
  "key20": "27rmKJ5YjJcvn15Ui1n4oDoq1DZ7G1Sq4RAiC9K765ub4dnJxXtbg9rv5t4RSbvmjYqgx29ZfyyRjGPsBgaQJXp8",
  "key21": "wwbaaFuv7PWXwxw1Z6DeokVtxPZWuiWBJfxdzYL9uR6EupNAHzoNneGHnXZnEryVWE1UKCeVokvTd4oBHa3T1S3",
  "key22": "VWnCkKu9oZYKRt7WNeqkdep2XdZ7noHstSisU8G8NNfEsK8tkXSSTh1hshu1UGTNay4shKaRGd2Dq6tk1vei2F8",
  "key23": "oPdydquJ4gsC6gaoLhF1FATvMN3Sq17ftgsBYegzUBb8rpcNp7XWRKmSTo8HbC3eodG7P1aRe97BH1dv6ivWtfQ",
  "key24": "37i5bM52qkmNcBFfPTcd852H8QpHBTLnCeysvvYqdign5f29b8P1cEjJ9xgxEftd3tA2qiTc5Yi9LBesvyaYj2cd",
  "key25": "Y1NN2tBUGxcW3codVzW7oxjNwfNFXP7cwvY2iFBXLQe1AReYQk9M6rKAVkjGrpihkqZGED42nTwGwUXoYyoEbTF"
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
