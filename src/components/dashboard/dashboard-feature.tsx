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
    "4BMmG8yY3NDuCWbuBBB3qHngdEySBaY2k92iBauAP24KHdwTUaMtxsoN3jmzDrQtzjwSSWm7sSpLYEcLbvs6gvNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EWv6vZ26JpAny74axoTD7J1A3WwHfJC48hxWZJ6ZijUwZkKT9b5batfQjpmUH7K7TJHLTTVweoBeMCbqmXSX6Mf",
  "key1": "2e1ZAZqZaXm2fx68QQ1uQiNQD1dcxsRmdCKMg77Xjt56d4FEwBWLw2Jd3iHb3n4BLQZsvEEWqtXvegyPuEAMvnK2",
  "key2": "4FfG6VyK3k4XvJG7yFEUgktrBQFqweaVoqCqn7HeY3KREcn8qfAXEyz1WXeT7bDTjFoFP7XzgEZDLkBoSZcqRVSw",
  "key3": "4H4pAQadbBJjcDUPwYyywA2wnaXjV3iN8NitqsSN8DLeYqazfkr2qLyZoRGt2QM8y8N9qmcgEq9nxjXeL6apYiNc",
  "key4": "4ELF4EHuMjdLDmjCLkHh6gvdEQMMuKkryDX3m1ihMZhe7poGwqHjQqGKnkVKeQTQGfasrDBbck6Y1cYUdJDWgw8F",
  "key5": "2JbeRFmnVm1ZXh1qr6inT95KwgeevmwBD2kUgAAFoJvfVnvgaqVzQEMJ5Vc4aXCnoBuigD9E9BXN5MSxeLq6NfS1",
  "key6": "2U9Ptxcs1XpF6bNML8QvvFqfQ8P6sHb2KQZQAAJ8MFfYU5jubUCAgL5VsJdW4XaPJ18ymBgoRhTwJKUPXq8zHMcu",
  "key7": "9UTZjg3Eor2n5FX1L9hfrcguXE2YVNgKgpSpqi143FzsZHRCZNWkWar8vd4dC8C7jJC9wpUZXz5TE34rfRkzhFC",
  "key8": "3AiAjWw9sf2HHhfSJDqDjG5FevBiL4RKWw1AvWHVvPE5XjjhRwmY8kcpcWW7i8npP8KY3RCWNd7CD74JdP46EZy5",
  "key9": "3uMfaLiXLybCfthFeQxEbWc1KW642HaLrsAMu22UYbpQHDZvNhEkEHTVvcWJs3qUxEN3F5AtsCguVCn2wZAk7G7K",
  "key10": "5VC5m1LRfUQcXjpEMwDWAqHgfRzvKSYpokQDzobEix7Lvraa4ARmWjQjGVYcCsQLuhGdh8twDXoLngdFCjUbfxzq",
  "key11": "2skcKXZF7vTEBcXccjTQyh2w5MtUSCpv1FWhWS7r3nYqKDgEQWbauCV38Cbbnif46XStezwcHLkiE8Mhn4mZ6qxC",
  "key12": "3sSeiJcny7jTYx1oQ7A8B2k8ZB7afbCeJUkhDrf8Jn2oD827ZFiscafk1o6vJyW8HEPqoYazqxvC8hpEGyZG5YaU",
  "key13": "2u8ZMMAL8Fbaaeuu45Z92gU6QpUizWd5tAziV2BzbHsni7719NByGZ9yijq9hh4V9SwAdXHnhi9oFJQN9P1bxERi",
  "key14": "45m3TBkR93aghaUDe2aiVeDrHhDV878oF6sHS1Nwz79N5g9Zj8aQCfbcsGfJDKh3dkzFokbZHmPzaRuiayAE1pcK",
  "key15": "3j6c5aGnNKCCgEU3AMWYppo3tMwYk788Hib39UpaTcc6JgUNywPPfeURudsYhHiHPQKwgBtYnFGrnWM8Mk2BNvVL",
  "key16": "4CJWsEH8743RcT9NzUVxt5zKZDv6EpwohiWjTF1zho8MgqXhifJRLM92NGrNPpdLGnqWq2FUoX49JuU1E5qdo9NT",
  "key17": "HRjHmtp9EGF28XTzWT6TbVeqid95MWunGs2THGQkksDdBC7JvgQYb9LvxhDGNTHXUY2cvK8LDPfWBiQJcZcgEMc",
  "key18": "5brrr2fGZk4BczxHyuq9WyJ6wUkn1ojw13shBYgbjcao1Nj1n4pZ75bs9YRDVBowr5m52E6a2PzUpDn8wVWbqgQd",
  "key19": "52Ax3qMVZzaR4VnX6x7zaozdtGbnqqY4NDhBPJdUhBaQZMqEmHAS72Jtatxa1x1eTz5DJ4m6zgPwp91fipPbPBHE",
  "key20": "4R31HFmjdUggA5zwx4oKRZVoLtw6HEB7wNMGrD2HZpemkThsaUwNyJ7BYgtdQRAqnozuw4u9i56YnE9rXUUWwuew",
  "key21": "4yLyLfv6bLBFBEouYttcmm1rxG2ysUV8BeD6yVHm9dNg2t9JiBetAg92mZxSCbUGPWwHx43sPiCMnyMav8V11U9V",
  "key22": "3WLFHUK9TEEVrJJ5vk3ZmrwnxuoVPPdRGACC9as45jPGxQU8HUHzZs8evz31HZrSdCp9txEk9dGcdcNegfLxJsdN",
  "key23": "2tG6CR9ZNo61N357N6vMzknHAyy6A7KW5yu4KfACK4vXH6tfXDSS5ZAUBe7Aa4URspmiNr5vgtCk1Z1V1LNLj5C8",
  "key24": "4mXDaLXbU23GKGu2WEJokubaaggZLZB54y3zPR2xu9YNYWrQLBajgsPE7jWLxk6eoTN6BQqkSNV6WF5kyb2goayG",
  "key25": "5bwqn9gm13uqbwUk2vXUAhtTESEE7NLgUWM2ifHofyFboj5BF7rPQ63VEDn2n7HKzr3JpXhESfyRZihkasKaJr3V",
  "key26": "MxWcztgXoMSTWxnBhVwvC177V9faizFBwRarbKTg9HdhQJirE5KzmGmbeecCn6NsgCT7nyLp4uQ78dfcK4viUqD",
  "key27": "uU7pFpWoWf85iHzcbicbGjh5L35wGbgwrp37JKc3QKemLC3BT7NTzN78CWYygYX8DJmSwZLcvGcsNiEc1oxmZ4n",
  "key28": "4fS2cp5D9btZBKhSyh9yyMGeVsgqUrcUKFYWmzyWYJS8z5k6cKhV6Dns41cxP9P8xP8JdceftYEBJVLiLpJ8gV7i",
  "key29": "66U3uZsUgyr9fkYTtY7xuPHE4i8KoTHxKijRQ7Nd8FWgsLF2eQQppZDW1eHNr6QPavK9RkvadjeEkKHvPYpXqFxU",
  "key30": "5KLgmdJczbNnAZdJ62V4bEx77V9SbYaLfxwZ33Ja88Y1w3CU1uwAhnzA7qssFePfphmFTEGwwXktZvGoZU3ErFon",
  "key31": "pZZmMuALeeMK5cpvRcVr7QFsoEwfzxpzdFHPt83D9SDiMTeihfSR2VhG9wYsGcxNMsjgGUrkKHUmyGnDzVRCn54",
  "key32": "3taCGvqaf4MUVPkA9zCeDySNJB9mxgRAgsmUCvSRBSTGhfE4ZtkEKZKxaQRCqnvRyenRbgWxScUvSAquEW7DYx4f",
  "key33": "2xf8y8HFg4FuevjDdC9jsnts17hSRTfzuxasZp9pef4EfSJZWbXdTUFDXiKugZffGAjieATVf6xba6CewivSw8JB",
  "key34": "3KNdfP14jaHe8MCZD3TfNJrkqoDXA6HrbPWpwdzmuhbtAgxDa7FrAUoijSBqWT5e8ArCpf8nCmfKfXgtNJj4JEuw",
  "key35": "5MrAfNJGhemVpKszcnQaDM5xA6K6yaNKteqZX7gYEAnyZjChhxiXememEVnYQHQXocgpkyM4ADyhkqK1MakfrtD3",
  "key36": "3L9Lmp5hSTGLDoC3Fuik34SuaJLCf24wRjw19X6XTMECjEAAQXD1uzHAb1c2MqenxeBjxuGkxW3uopYkwX6zbVw6",
  "key37": "5avyxaQQ1wVekFD5mfghZjpYDcvYvyP5DQyGsEFmYHMNgYVCrXgd8hS7PtUTVh3aFN4Ly6LWuLjeeXkysroTtdkT",
  "key38": "2BQ2atienTz9LRAKWNknfds7nDbr3r1Rw1q9Ls7kNxvJfZiesHk1nLYBW9AXcKsPsQs2CD92bjtUXjiFbCwgQduQ",
  "key39": "RVGDkfZKztZDUXBhJ2V2TS2ZTkyexvRtz3vnCPTUFMAQbq8bmtphCZhgzYrc9EpyqrUPtmufrZGqborVXjGH3Qy",
  "key40": "5eTkpa5W51VCEXWJy9Lr55EBEDgkU2A1KFzoSTfwnmmeCBf2zVf25exbd244YegX3KDpntkAU94JPQMWS4KiJGV5",
  "key41": "62qxoNmoNUkJqYxy422295DVt49mmLoX2PBY9j5Ae17ojt4auykwXkotsdaRHaTFQysfrHAH7GvbvdXvjDEBB3cx",
  "key42": "2dwfDPX14upn5jjD79ZxV4ee2fVhnfsKTVD9QEDfyoYg1Qm2C1pUqSHasoqw5GnFQfWTVC5TY2b3voewdhfDvEw2",
  "key43": "2U9hZRMV43VmEkPqNuf7xFA2Ryw2yGL6Q1MUdM2Mm6KvmVF8GfiJXj3a42qsijTQvhn7yxzYxwF5fr6Sse9CMjNb"
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
