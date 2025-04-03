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
    "4Rq2bQG8XvttQoAKvTnWr7kQQT7oVk9VvPxwR9Twxf5zrNkNuYBqTGTcSis8HLVJcV61scNs9Az9upLyHNAd95Su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mymL2y6QNY338xkDB6VAMRY45Lt7ydmeYcjjdXRQenW9Liy5gzHkmaUwpcxChet37RnvjZ4iupRXMURrKWzQntT",
  "key1": "3eynqZCMnHFzWjqAnYyNwggcEPT5BGQ21E815FArE1fqzTTWwpWbM4YYZKuwe4tcN4KxituGUWCfdQYceL9hk91m",
  "key2": "4Vnv2NoXGULaJYQHLxUM9vU9wGTydCD8UgmFVu1dHP11hkEuaB9yC1vy6EEMkpRkQVY1S6ywM4JrxFXEEeZPw8ur",
  "key3": "4Gax5puj3MpTg9KDuaK3o11N5ddUaFMtKBQk2EKtAFBiaSazUjw3rtCBJ7Mxh3RLZspDcYEXCy5DtFv3w1NW7Spi",
  "key4": "31Aw77ib4XqGJnCCDVznHh6E8E2yEhAM3KTDKQ6baEcbj94x1Uq41JsQZs8TKZuhGfgNTMpmtNMs2zVAWjBP9jxX",
  "key5": "2xj6eXnYWeQxRasbWpgY1nAhFp1iQi4JzCup6bMvBDMS3hevkXAATVdP4SB3RxjZG21DtUHy8eTwxSsvzJHCmeCN",
  "key6": "2Um6p1myRBUKPj8csiKuU3qtCxhpzGXmd3d5CZxzVDAgoiC7FYzrxHpLrme5ZMof16jD49Dpqkuf1QHQgWXcsX4Y",
  "key7": "3r2ptX8ANxzk6UAhmM5VWvtEB3m1XPmhrtMQRuqd4KKa2ntRKxkTdKoZRi1d9xrwdSYdjAFR9hbvMvbfqnEedrvL",
  "key8": "FL3q8AsuALHUrDgJ79KJaoqcprLar4Cr2C5DbCa6xixJpan8o62u99sCRNNtcdTkHk3Xs2MrWWtfLct71322oNQ",
  "key9": "5q8TpCdEpfGdE3Zc2ZQsfU9Wimne6BHyz48LooagGu5Va9BjfcxJJvKUQcXqatDFb9t3VSickqgoUEiZYDnyZrXL",
  "key10": "2UAA3ueaoo3bfrrLDZXvyZQvV4bPFrVpngcf2i2ZDtbmoYLeuADvHDFez8zRsrw9i7EDn35VyKsRvYhapwBMnHEf",
  "key11": "4STEyzWmjYqY5f2vKPNkGRRwYh2tKNrD8Xx8eTM6YvnDJ9Qp2aVjLMgufRhC9TyfgzQaWtTmfcp8ZhLtPCTjfSaH",
  "key12": "3aiS8dJfq8gkyxcWxYGy1U9jAKQarKxwYCRxasb5Yq3Fuzqpftji7KF7ETdMSdMxaBWmQSpPzLBo86xQoH3TteLD",
  "key13": "5CUXfkLG4UxqQiEE4UArmQ8xu2irF7HynCm6kqt4xguTcaDudM4PSEtABTFPFAoBTmcFE2JcCnZsVur6oLBJ3G76",
  "key14": "p9DJFJ51vRZMWSbEe9yv9S9txjhyznM7JdynSDriqvbDQkfFYxe4N2fPKX9hv5iuPET3A3XC9CP8GxAgD3QbQGA",
  "key15": "25i6LUwazAneCPiQNbtvBWY5GPESwniBPYAz2g4is1bMLHNRC1tbN5SxS9F1XM3HCpofR8VFgkmm5Xx45PYDtbL5",
  "key16": "LwbuqaamQEt8B8uXzNHYtPpznLU6TgMX29MMeuosQvW8P1hSosgDshAvmE6C6SN74AXAJXgriexqZ9Dm9utmaUc",
  "key17": "4R2b1xFhtCM3a6VxHd6o3JRU6RRyzUjWaYKMMCgbvVBZf6h2PfTUqNXoaFw7bTWRytzqbRa71towaxbF8sFZQHXz",
  "key18": "3pxijZ7WqK4KQ14KgccBG8Sd3YjQbvaG6LiFaHvJHVd9EoSrNCDGMFyDLxwJxbgsk512QjucKhL8hEdH2aXprVcj",
  "key19": "49dHvyCbFkPvAX2vADHQR1HnXHqsRBSvbgqeZvY3iXnGNkb6rZAerHECADT3t5J6nLgGsNDDd2mSc4egPU2T6HLK",
  "key20": "611VFAa7RZa8LjkDJy3cFWR3dtdcAkCky4MWFSgeUqyWnJ2uRekNCbVxdxwy7QnYBa1fJRe4kp4NdEUsDqu3NaDa",
  "key21": "LCSvwdDq7QQjnSDXFguA61QZ4gvxgjgdSywWTW5gTFtztC1wyHhbsFu5CweJ5tAxXKguuuoTaLfBmEARvYhuSUc",
  "key22": "659EsDb6cGnobFK7naL6Q1kpf2DTy7K7AC8AjzwmKPuEtWJrXnxTT3HU56mUNUPrxNYnE1ywdCPbMnURvQLn3VhV",
  "key23": "4GC8tFGp7MrEh3cm4xX9Ba67EyjqNP2dJdunPrEtPqFuotqV6E2xMLuFFkFo5KhFmmYUdt1gvSvTBoAdss6w46fw",
  "key24": "2smaucZP1AcnDPNAZwa16qCtLvgjY7aDB3GGHNAYbt28Dmo3o5Ky81YYrfVj6NW5ogkdysk628UBsL6Hmdh9PqQU",
  "key25": "5XEtkbwbNKYi9ivvHmR9AEmZWteMRY2ZYTaHeW65RqDSZY2ZYbpPk78kZEisxyq94n99Va5vqo2F2NAmHcUosarE",
  "key26": "EJyMVDAuLtsMxYKXeybHTSL1pdChDC2vy9jqaKgrKGNf1WYEXcqJjAyGg9nidaD6EeUHJuDBxoSZ2v8WhLgQbRM"
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
