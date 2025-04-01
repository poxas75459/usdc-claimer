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
    "5ELvCbVVSSJSNeANvFS6fGM2KvDCWtYP8Gq9WhMCXr7P9Yx7rT7fAjKb2cYs6Hx6LtjX7MZ8mxsnesp2bbs1fe9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w1Z9rHmLZGviwrcbhWiW29wFAKpCCQ6prv36DZrBQ1qHAvdsfKJp7ZwAQDFXFfMWdNRNMX81Q8toswt6hNeWex7",
  "key1": "5vdV9HWAnYADkjjE2gp3xhyp2fVg62JmPkYvGupMXRoF2h5mG51zoawvY59dr2cUJ4GV1xCHy2URoYb7JQRxFBsn",
  "key2": "66z5ahsL88q2UNyHg1TtmFoJbpb4KX2iFGk9EG7p5LB1p7K2dSVdqX4WEvE8Rw5JMCuFmKdevKWWNsktaqsn94iF",
  "key3": "545ywjurRAtzZwcUCxHUyUTLHYNHTiv8EvVCg9w5kwYyahBTnDaYtvj4xEGxuTanG7FKTPNtuo1GpW5QrkNdWi3R",
  "key4": "3LWBW44hSFM24a6fncamqun3XvdXLZGtYtdsY4mnGwgJxsBvdjZ8hss1HBUs3uBx2FitzFdrrGeF7VAL789uZ71o",
  "key5": "53u2jxm9GL3G8EJtoKW7tCdyh6FuphetXdRhxVaVzbYkaB6JKG3mhJxvynGTVy2is734fxkmhRSouMKbEo1xpomg",
  "key6": "5a4MGiGahGWcH6tGhsSjqnmV9DjqdbEztCzox2EXJdYrVeHiYQHpAx2qkHsPYVwHWG2HNK8b1mrDzUGYXB3TUYMS",
  "key7": "3RnjuMRkeMHR1ip1Wbwj5gDQMer5jskVSZZn6rbR7tZrTNrbq7nDDTj8aaQkxNbvXqFB97qbsEALz9w54D8wASt7",
  "key8": "4sDKMB3G9eXZw6qLWENAXvrVzk1QB197TiGuX9wzBQn9u3u47z6zJ4qnttbDv9smkfnmH4iby7wfT8Gutiio5m8u",
  "key9": "2rcMCYgghNi4QWXqmQWwX2gYjpXxKkV4Jwo2NMXJMWE81pkHKpBDcUysgSPGbTCKPE6nzbUvNT6EghNM4bovtaPR",
  "key10": "vXDteqVWZU2ee7qhRsrt7LTCaqLCXvrPZ2o6EA3UjKJYwbK2ZHQf6JesyoWykGHE9n1C9X8PwjohbDcrJfA9GCk",
  "key11": "5kTQ1cW36uLRw19gSc7iixZMuKCsYCQaR2fxzwu7TuLwdWRBpkJRWa1E14kdrMvHCDUYS5yr2vx87xNrukcfXXwj",
  "key12": "35bQkszEPXMEzNQd2Yp8EABi8VT8z4iwdy4wVCiCtd1ihwMwnLHKajDq5NBC6JkLUxm8ByNJ9j12fRuaUpGtq6JG",
  "key13": "2VJw7qd4EwsYEXAy85udaQ5GjKn3pjgYqTmhqE9uzpYLjYa14VCkSYapLPTfB4aWSNHikaGRtssU541vTSxdDYNX",
  "key14": "5cV1VD7e3B3tojohpiQcKr6tSKzgY82YP7QUGQuGtkUSS3PFcpSq4iAxd7nzrWyejqB3MrjHzp6YGYPJgPMtnLj4",
  "key15": "587UR75PYCA8RyptUMYPoRmssPnXBwNtdgBLPnS92AcadKoVB9XeA7fc6PZ4nkj5BAh4jKsjmjMtUmJKN9dq9xnt",
  "key16": "4Z8VYUheSKBsHWc4UhqcdVJPqsbVRDnAfiPPfafv9oYyDecbCXjZ6vWmfnCy1kVysmst1K5HJ5PGKLdRzxT3FkMV",
  "key17": "4XbiHz4mPY8p3XAr57v1Fy9wnQCPe1qH1in6eBL4i26ac3TJPNu7ryLkjJHs6NGAptq4AZm66wxR9Vt39CK8d2Eu",
  "key18": "3eEMfM2Dnr7hNz9cSxKffZ5SmQZjLD6iSgyDKZvupUM3jycMppQkVEVNDdaWc5spiZ6npGMteQcr55DwQsyxQzYk",
  "key19": "2PSFkEsX8Ftjn3m8XymoxTzMQkyCapNLH93ym1naqMJAYUfU78GMxrnxCwp3RLkxFzPatysh2aAeB2kT4yyhDcif",
  "key20": "297CzriFwPgyZYAhubMyMtYKaXo1yvwck22D1szDPnBF4BXURjSbig9vpWmGNjcZ69ut6Kz74vUnkaAgLjdCytwE",
  "key21": "668vKQpGJdDGDDXcCWTQC7fFeVKuHjfhuj75nERELk8kDrshNvNge2WPn44zrvY2f53xn6k1NG1woBZmz4V4Xy9m",
  "key22": "28r9g113vnxCFXmFEkDArVKx82icHhPB6CbB8prvMVuXvVxGWU9ijbUKT4zgjbcs2XimKTnvRND71HSunbqLfxYo",
  "key23": "fy2kbhBN1eXaraUzAzCBBzCMM6ArJ637GZQEPhCM8VomFowte6SibiCez7tFd4HWTaddAY5BYGeEVkCCSWfV7Fr",
  "key24": "5uHcjj77e8dVs5vAGC4JibgDwnSKduQv6h1xz24FnTMWj7UVpgGpouGY8bJJEPJ3xxzfU4vH8SRoPP2sdwcjEASH",
  "key25": "eAbQvhcVB7gpH663ZwypxXujcM746dd6jik7Z7WSw6B32zXbjRSPYjuA96AJVgBWQYwS3MgFqGezgzHJZHQ4iGC",
  "key26": "2Hi1XQa1vmWEEyhzZH6ZZKAUU75AHQKFbjmBpKMcFKZkY9Gp6pn1uQb9eQHgP1UJi5NeQQqNpR4WziQdjJ6hnKUt",
  "key27": "38CCHVgLm5Fd8RN4QZJgfEbrME4YoMifAHm2LENXq92YR5a71zVU3YgKBxsvwV11wN8HYXx37Jjqc3LY3wcF4yC9",
  "key28": "8M2VioNHbYfT3m19J2KJgz4BmB1K2yGPA4cDJ845FeiH17FvCFNrn7y6dsQsq7rhKwLMGrGLJyaNnQ8wckhc66e"
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
