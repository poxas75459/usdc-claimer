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
    "PHEdqVaBbgV8ejumVusav21SDcq5Nbgc4T1rnhPgSUKhcoASuNYmM7AC2u2CQzYJi9MhmxTmJ4z3Ljz5riM4Xuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ppLTKdbhDhBh8W5ZRi17LXwUBAKjffL1bu1zPhtJG5TQDZEB6WjsGQfajXJ3puNy9GYHyVKwmqQTZr6mFGzqWqn",
  "key1": "3tYyednBtrMybxWvTzgNV5ju9MNs34tPGgiAbLa73ztUwUod3G8D1YsaXFhtRBKb52JYXtZCbjWRXiKBCv4Mx54",
  "key2": "4yLYyizGVSXpNVWtYnwTFiBpFaezx3sp1XQ3m5CVcei8o7LYrN2G3FQvbCQpCshZhBVjJaiCraFD6r3ZWhLBPKtZ",
  "key3": "4UrUHeysCiQdMSrwSFy2x8SvRBRzB5J5KtXN4KKEkoa5bviuLch47BAoCKAMnKxMDYb61kktJiXiKLL89gvKF7Km",
  "key4": "4MGFjhvGEGLsCyD48f5KC9GJayCEYdp8vmyCWumwm6mw8JV1HKCsgipvyM9FmemvKVAwVksJBGcj2cmMAJ1ZeDoe",
  "key5": "Wfi9DQjwYy8nifocAWFHqf9Kb4qifVzqpryByv6kiDgroxY41DNM77wQJQtW9WsZ5Jj8EuJtLMXq7jqbRYkRSR6",
  "key6": "f8perDewqeqxUDWF6TgSGkyjmvrrJbU1TSy7r1QTcWw9NCsBLEKKqu6g44ocZJgXMMRvjgF7ew4HBGKB3iSog2T",
  "key7": "3pRT1dtia9g22WjpqmzitXjZU3PW3AVLrCkdPMFsXvVUUeMg94Rh3753gvzrf4Ag87dGkkF37c7fxXusuuosg4Yk",
  "key8": "3XgKHH8ympzom7zjEi2jShMPKGxPWyWdwx1jL8F8VdYmgmQN3EyZTU2SV3BxJsN1u6YZYEXaiWp69ngpRm4YnHZG",
  "key9": "yMWiMaWTAMA1KuwXWUsTBaeyWEzqyZZpyYFwV24QJK4Z9V9rG4CjFBuWGGjnFeBQswfU3AxgM5TVAPZD5Y2hAjE",
  "key10": "2J2gHc7c3jzCEn4gGcsTF3teFxE9dDXbJ22tVv9qDV3JNLEwX2auB9PTVZym5Eret2sDs7ffYwmbxx5HYhvL5qrb",
  "key11": "2MBrNgX3yUHrBjumVJHPgAurSwPFnRYFWsLEiZ6s1Zv5XnzEkw3qtA4pjPjh7oGjUXDnp6FFzDrejmQ3PqaV25K7",
  "key12": "5MqqHCFeVr1qLuASQAU2qpxzYaDYqMDeLsRm5MUbxeneCipBDheCGjyTXGPh2azig4uTkixUmnoBmA5L6sy5Zku4",
  "key13": "4uVRrV9UvYpKyZeKSJzFhBj11Zh3YnHALVLiKz5ey5owWrH8TAa1QdDMZWjhAn1hRJyuA5kziTn16L7M5hDnozDW",
  "key14": "52qcgGxKB4qzCcpWBMiFt2nsLWsaD275gEg94iygqUm6R8CntxQoBvbesJXjYbZBMFDUUaQofKS3YeN83rH5G6Qa",
  "key15": "371HHhEcgPHrkt5AaW5ZjVke7xGCFxxY4g4K36xn8xGHVTSHXE7WhQ5T6jp3xFRxw4ngBVXA4DaGr26BHuBGGtPe",
  "key16": "55MLoSMKhT14GxX2CkEhMbTL3RYKvYUqtGwsBByASBTDyGZDyAXVqnGFdyaCd1oUTk2p4C3nbUTHXUKtUg1nBr88",
  "key17": "3mGHLx5hrCyyszGWKNXXZ7pga1JKubxaLuNv9CXx1gH2bY1BSNuYJfaor4be79snyMjahpJs9GMRoYVE69VfhmVd",
  "key18": "5Sc4bsoN77S3pgYQ5wHoxPYjfqihFwARvcKqd4XTVA18YaRxsBNTh9nCD82PKP4KvpTvZKA2MAGiSnDms8ABBJZ9",
  "key19": "m1vvYvfRqzF2jNKrNJ1RqGwK7yhoZDMVSP45dbAf3GD8yQqx86bu2SPwef3JXossZtsdNa8tSkh5UjtcRqcv7Nj",
  "key20": "2Bw2XLzxTmsJeupykX7KRkubYMPdyNkndHJLG7QZJt7AXUA9Wu5XXAaC3w1bm6R528SHNfQPkevJQURdSgme8T3V",
  "key21": "5NdMqUJWW63LE6prQNTWjifvFYP5x5iqjHNXdrSe2efibExR1mW2A5iaEfjzbm4RerngAQfjwBBY8Hsp39MxFzjr",
  "key22": "gfxEh7ARFpJHjpzR5suLqJxzjxC98EbuyeCo5tLWZKdLZC6XUYThTV9kLLiqgRSY4eZVqB3nUegnavGv16FDzGk",
  "key23": "5YW3bC9enKNzxCcbi1FHqTLe8iSQAowM5WrK2GmbuCmqEWVDSu9iT5nLB2sUQ5wd9f8oosZWdQ95eHJwnKQT1o4g",
  "key24": "57ERfayCiuLm2oBqG2y9PcAjvGXp98cK5o9bZSxjdUwaHKSWrsFD1693Te9YfFWpY8pGUcD3vB43Ba1PhzT5VCkQ",
  "key25": "5Cqz8EHaK3XSFk6SCPahBmTCw7mMxxmwHoDMFf4EfFyzdB4DT7KFFzRgRx1Le5TUHyzyHPUNvSMc4QpnGoWnbXBE",
  "key26": "3uTPS3RpeW3cf1U3WDaByVNu4oLshtANgAMTGkMS9PK7u8uJ1FET4aSuji87mrXgscnN89SJHBMYGf87bHDVifrc",
  "key27": "4NAeEssfsRpNvkCzX7Bnud2veZHUvsUdZfyCQLx2eofc46XcU8LirFXxj7uc4BwkoF52XdAA5gq1aV1qmfgv2hvK",
  "key28": "MXBs7VE8ZiC14qczLjT6GfTxAV9LwrxGsA4kN8tYCgRir9tuiAThnCqWU6Mir2FCkomsHeBHWCGi7xaUTHYJjmk",
  "key29": "35MrDdnssNfS6uLABw4kWpMvEUa1o1kUpDg6hdWJMgtJoRjvmT97bnUXpe4AgEuAmF9pWxe98JGYPX9b2WuJFxVj",
  "key30": "4rZdenLcLqfg5dLWpugBMrUQLcMNe4r2oUG4xTpwVPMtjn5SRn9eyYvAK5DXkV5bqqqPibnk8MmTbqAihYBh5ihP",
  "key31": "41LFgHqXqvxqV3q3wBtXHdn75UFvDYJmnKfxq2uJKPnEtP32nJbzmZpof7fRQ6FpdQ9Hj2hi4tcHbmYstof6ytpC",
  "key32": "5AbT4zFFbJB8vR9hmyFenjv58oK9DowG7JhAv3yNzoKFC3GgqRYtSwHN11gFmgRtUhUDd7LHKvDSBv6mSN1oRUzn"
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
