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
    "7AxqmYoFF8Dm8utiz9GBN9TphvHUBKaDB152HmHucRtWHV23z6tZZgLuqkfMSYLC3RcGxycRWAGmhQfAPRvHMgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65K1VhQnbGzxVhfXZhveJkMNUxF4kJnWPxGwufaLoeEzZu3YZryXfgoPK2byViNrganEjUPxmDfYgbjksVZC2Y7w",
  "key1": "3TPwH66i2Mz21d2xpXGmJmx5kVvCp8aQkVHHBHBKbxVNREJBo5tu6JiecFjYf68pXYc85gEBhdSo1CwghmhVLAdi",
  "key2": "2Um5Au4q67bEoxwCE56pKwotPPAqrTiJLHqq2WEmjjpj8hj32BkmgtjHWYjoYJZMQhdxtf94NRYgzbFqvZ9Ui8MD",
  "key3": "2EkcuxQ3MjgMq9vtmhYcrGLGksiabAAvstiSs6K9owQxe1jmvUxT4Gn46WGbJQfnysjzTU6SbCdLseVo7i51MQks",
  "key4": "123FiW4u2wJc8cXpGpYbwufTQWagmYu7njSZU7HAR6XCQNE4HEicRiHh1xpBvf9PwuVijoHqgBWSa3CxUxj7TYev",
  "key5": "2xbhNU9jtg8sSSmaCJFt1bz5SJJku3J8SYhNXPqZKPCMtXCzzGbbphTJ3yBQSyCNaAwaEt9CyJf4ZmztbMksn983",
  "key6": "Z7WLqxQg26CET95uCp1nvxLcXbBVdsESKkjvApvzpA4oRYDJKSyx1R4M2JLhwBdT6KoMULBhDkLYzMv3As7xuWA",
  "key7": "5YqZwd7JHzDqwJ5oSNjkuRZx7PpPecjEqYg5QVQFRJNuWWaJ4inNDJYSjKWQiY6CDtCK7Ux4ZxspzG6RhrufVnEd",
  "key8": "4g5BMfCRmiMXMhsGzCeKuXu9octhjcj2tK5xWFzGZ8ZzKS47UwJoz9BN7nGn2LSSvWQC1jznJ3KT1rks2P8TFoHy",
  "key9": "2Y8UXGB7GjnLRKTpbWCytBLmNQJabAzGGbC4aDNXw3eK3Nkxfb7pfeAGwUyd13ZCZgqjSuPBwdCS3nJr8r59bfTM",
  "key10": "2SN9puf5pJYqtDVXkkyiy59k9GrfixUEiHfwJ5RpWd6oMiAB3MumWVhrxe4JutnHAzaRft9pDvb8wCGQJ8AT5md5",
  "key11": "2UguYxfKvbxJP7Qe6MGF6idyndAi2tWTsh9WoirajAuAZ4ECGMmKMqVQbVFofvshPnozVbkXfQSyE2piEZ9H27ib",
  "key12": "5ZYt1ZNMHuNvTnYQUZ16YzSo3ETjLgsoFEUfwVZEFCmVGEyAVhrREzWvozxTxm7DRgiZ5o2Lm2L1twgvp6i8VSub",
  "key13": "2TwWK3KJXSpRbPJREjHmiMj3LCErmnabeZUpv7pTQMjt32YJvCCwMF6RhAfASwt9ynre144KajKQnnMQKSZtxguA",
  "key14": "3HQfiB2gXxmpfanzzXZNV4XaiDvuV5Bxv4opj9VaJv5JaSURJjawgURiEwar7d4LAJayyJb5yPXojR8FotWDkRJC",
  "key15": "4qnjcPoEUcBPHas4HV9dFipZfwMTnVyt4gvZypCDXYVDVfzZbLgmfQD3kWrgkovqHuZbnhsWgAYiuFeiYzU9rTc8",
  "key16": "2hdTf3fzuzBb3nNtkoB2R15WHEnXdTrS1gNEk5jvUTeZvnL68y3TxbxnBW9Lv5hf5QQx52bzt1J3NcBdSwBYzXTY",
  "key17": "63kZkqeRgD2nEXryxL48kkjNLNWnNHvFJ4aLVmVk3XZNnKCjJfB4Sy2DWtjh4wtDPtZLNodEqFfdzks8fgmxUBUF",
  "key18": "3HF2Cjtd2oCksuiph6yUxmeLMyeBaFZgHYnTSxg3iPw14NxjoSE1JcrjEycLmKSBYnPWfvLvSstEWJcwenNuzWk5",
  "key19": "5emUdzFnTHZRxUrHNWRgaQ2gLKmvMFs24Bo5AWXrBrCq2LRxnBhqQrjSqnqHPnwvPMBqitcfxsFsPkDTP1cCaGju",
  "key20": "sumiq37rhYdkszqtbnceKDJC5CZtzJ166jj3RFHjWixZpVbmtjNpRyvo9QEeVY3vrTgeYqAsFq315BVkwZk4xTt",
  "key21": "3eSTyogJDvKb4hgf1tJdQbvBxjwdFPzSYudYE35Qm2PSsai7hacAgUQhkMWA73QDJttsezLFEMvdEHvXH3Q8tsKX",
  "key22": "42S7pbcwFPh3GHHWJ1VqW5bpwWDgxdqFvM97mCwptVAewN1MaGhD9CuDHu5Vbe81j2uFyoPPFeEQ7gNkuaqajo23",
  "key23": "2edgigpSYYjUxsMCYxP3yFeQkFi3EAf4Y56AnpwAGiXA6p7oQYdkuWZWNRuxizzCBidRZjaraWVcnuG24J7Pk1M9",
  "key24": "5qY6Z3jBN15FC7aZwwx1YZaepEVVt48ZKvNG4AeUVFRUb9288NWWGQL3EuGuJ8DeFa81VKxtdz3grtFLztL3UZfE",
  "key25": "5vG7vgi6pbaqcVhtDYgphpAG6MsmnX2wzivMWTkfXAtXQwzJhmqzxTXCkMzawGKg9NY6r4ej7UiDmvWrqS8vm1nY",
  "key26": "3Mn8BsR49BWhecdWUwcm7g29ibsFCjCZm3ZgdHGhnQuykAEKpsYN39ndwFH7hoDevqSy9KZrH4tHsxnuN539edvx",
  "key27": "3hsB31rX2nUsneFUmTBYbHxbAcdaxzNXjuQ8WBYr8cXa7Bm6d7AfePNd9nYCv371aUk1vgtXRM5VJLxFhY7vFeYd",
  "key28": "43HuBqm49rfsKgTR4q3UbZSVfyvsbtrBQpZpYc3LCaboJww2LksaawCFJ4AxuQG9TpoGpvvXAtN2cFeE8gB6P5Jg",
  "key29": "3J4DNaWrA9x9VaYgtr4R18H7NmcgAFnQEhd7kCfafCs6YKFQtgXXdCr26dPKDBZRkLzAR8FitirynDHy5GwKU4g7",
  "key30": "4Uwm7kRrxJ1CQxsuyuQkssGLfxpH6AmnjrbnAQeHi6KBj6LpHi4zE9X7jAEnF9JArzsryAt9k9BjJu4LaRMgiA8s",
  "key31": "2SVzLB3RR8wCa5GTuUtM4rmMWDZiVhKBJoiG1dofYrTGTVxWEembCwi6aJaq7pgyjnN3qchVKeYvSCfE2Hpn3FmS",
  "key32": "4XECbhhkGgDd3ULSq6U6DQ3555PXYaJpMRA8ygYNMyEBQmupV4VDXd4Y3ftfntexd6twQgezBctcwdX612rANEqW",
  "key33": "4g8KhNcTpj1GPoz9dAWyGGuCW4yETUGuneyd9BZouaEaLXsYP3tQcYQcuex4kHwUhCAngHDqoeZt4obUPrKfCFNA",
  "key34": "DShRG3U5vhvLpxg83XHJs7YoBJfjg4amSBuSRTGjJqyxFRD7CeVB2zvjXqjcGNNZkXPGgasPK7vxMvsFgCuBN5P"
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
