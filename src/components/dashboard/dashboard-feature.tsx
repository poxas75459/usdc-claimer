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
    "516SwqzCEegrtL3Y7RGrPipJN63dtAbFyq3nFmVMc1Kd68bndZgerHKUdTWwLAjh14YoKD7PkF3AYNMgrKPTNzz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ThspkATgsRaRyenDKq9ZuKWyYD2goGumd5gfsahwz4qvbpdY5QhUwVg9X39zx7FT6NqbgTXNPv7jBDyXYYut65H",
  "key1": "5N47piYSKDJKu52eGV3A1W4yqsWjQroyGLZBCtPhb2QoQ8mt4a9SJEo796fPhQx1yfgmn8ijzg99oaehhKG2Loai",
  "key2": "4GXm8kG2ECyzZqFgzZfmVcD86drHdcaDQ8iEstHUvgZzNQf1nEaKVJzBDqCfjkcv8x2ZC7t7YJiGKHdVWezkWaVR",
  "key3": "UecfeVFqmkwThvSVCc8k6EdbYDLo6zQ8TQGscqdcG8EezioQTSDaU4JzXc6TsFUPkwDri3iu2qwQEgeNRHt3veY",
  "key4": "4CWdpZqc2EQnk2LVmCbTT8UxUgruHyPrx4jihQoVcTrQzAsEMRzGh8nUhsEN5cCetJWrN94adgTgZkVh7jwaeMpJ",
  "key5": "4QqLQ7QN3zVuMD4BpG3hoYBkTzUxss1bwurwCKQ1n6trKvKtwNxSVx6A4KF9M143bgXLGcS746b6A19W57sA2JTn",
  "key6": "3zyAePBYS672sRkpiQwiFJHyKjG8QHA9av5Qb3DAHsi2enJFExP8Jd9anfFUyGWQpxy3aKhx6U77m2afcL66swzi",
  "key7": "5UqZ7ag99noTP9fakuqfRPBrqVzwLGqm1DP2ieqGMAuZD9oY826uMMdVfy4Lz2NLojZv5pRo7dqr1ZDP9KRToT6g",
  "key8": "4737eXtPWUUwJNJvGpvzZ2DqJJ2dZvRorBqPjFvvn2evzpoQJ7WweNLwZdPmuMbPfXg3CCfrV3ySqaW2a6EBQGAk",
  "key9": "5KbGiUS5gY4NkYNy17Xnwv9wXQFC8wFgT8qnFaMUUbSU8zEBYnXV9jMfMQh4Kv6oYqFKEWiXbw6FnZvcj7s3nUU1",
  "key10": "y6aVydSjyWEZBqr2mtkcj6hNBQHjCuBBY4PbrHovkAUQBaFV1UCrfNyxQZwKNuVzgaDRhAwbhDD2yHn3jj1hJEe",
  "key11": "VW8BQibennYD6hH84pNWkCS2qwFm3uqxdpWGmWYDw7RFpxZuYwfX7ncNZy75c9B5qXMAMkxyR57Aw7ztskPHTAo",
  "key12": "3zLAJxRBgp5bsgJKC5kZwcWd3DdHCJL7WxMGY7ABjMmT2LRxix6CKa4zCrDkieBdotGm3DZQQWSNc6Vs2BZnXa5j",
  "key13": "5dxyyhnMyDFTERr19SHDpPenmQjALnGESZN5KA7KQL46kB4LRPNsGRJosd8cWjfBJS3VRFi3oX21acpAmuT3yJR",
  "key14": "5eVDcNMYZmKvAJXe6JSh8moPsxookQT4DawGvBw99FMfFgMUMxXonPbmMPaAnWPcpQm4b1hLXKgFzBKnyvSpXuHj",
  "key15": "2h3QSwxsT61ofHh69RSaucKfEHrikVseorSHWXvMBNZKEnp1qJjCSRWMsAdh8CwNsmJST8Z6M219CD4Vwq6DzkYi",
  "key16": "u2KsPf8mSFeTQt6fqTSeuKCk8HFzcNxgjuV7LFgfKUQWXrqw2NXZqJK5aDh2oKGnTXbH85RcT47xKdjwqDJv4QZ",
  "key17": "5xoqMnHedXRMz321rxvn3qHkFvWbwvDKz7S7BLysKQafnGmxAd5j8i21ewi2QvThNMpgXHF6jNg3gAdbNABGP7TG",
  "key18": "5q1TxFQEaZdwx6ucSgbgqvsJSYCadbcSjat4zQcsi3MsyFehxDubCTxR4uaYKVdKYwfVYGYkeCq9SsAxzPLkDiz2",
  "key19": "kQYMmZv9SKfNSEZnypetxRk5qP49bmgTsxksBuRWGctL4W6CzHCJCkCAi4qazSk5rrsea6j2rX6nvKzhrkAyXqU",
  "key20": "4o4fqwMBDPsdjoLks27xGV1NmgSm7gTdmbJZJa9q1Zs61YLmu7VtJ9rjQfJS7fLKrapAyiuam8PAngZqNdfyBZWw",
  "key21": "4CVpsXe1Tc3eG7xmKUCekcMpCoVGEA2hMHsbJ5npdMXQ29A2ZUmTzcwSVki7BxCAWuXdHn72z71qHNFcrbchbStU",
  "key22": "2Zsxe8BW4hh7vmEGL78P1JMGC1RrRmgSZW7uimvqwxmfYnY63QwUuJeQaKX6F5jidrGY2K3EH8RGuXCaD992WKWu",
  "key23": "3ZGi2tBMaaweRXSS1LK5ZPvskQLNs4z7R9CQiCqNvdA9aMEJT36bGMhTyV24xwtvN7dKHNDKpW5JSSSpGaHaEpDi",
  "key24": "2J3QNmnrC5yj5ybeRxkjPqdHMHFU1XSoeDbBANHdxTjn26aQyoTukbvZ9nkJQcUK3RHi4kAejfJmdwZDFTKZTjRf",
  "key25": "2iZbnJrAJVQsRAJjspnJDiUaeMTfqbm2peVX1G2EcmMmYKnBwr6MdMDburVXtj98Q9gx5TSA7dzfkx2EaC8QJuHL",
  "key26": "26hiXyjr4GDQmyqHbuQNhaV6jtQ7RmfbUai7RjKXwz4vTuh5HnwAeeSkgtuAw5Zyb8USzPzx13bXW8jLtz1pjq7X",
  "key27": "3CtLotRdLUPYJTn4eE5Z32jrJmj6kq7WcNiFuNokMvGoMFk1iAb9211y2uKqnYAjvkkjgKjBTscQUyUoo78LByC4",
  "key28": "3NsCViJTUdG8CFcd5t3N3pooCRPnFNax3ny9YdHxRXEsQTtS6KxZABQCgq6CQ5LXSXohu7FPzJXbx4b88mLAWLxP",
  "key29": "2ShnvUku4nVbksEHoATd4QvjtiJxzasXk81cmAjkp3RP93bpsdo7mCrEN43RqLhGyipQgycdomx4qg5dL2kmbuyG",
  "key30": "5ecP5zqAVkBgPTzs6WrfuLCMNjPJT99Txhjt9fgJFpEBKVqPNFZDhjCbhZHrXCjv2snS1h51LShK81TGUuhvLcst",
  "key31": "5CnJBquqWqw785zQ9dqtudJSSx2Lg181c85R3EQRbLJf6HTm5YKw2F3CX7tvgGHfKTEdY534GPkUcbGkqDqJqUcB",
  "key32": "53HpyBq4iYw2eTmKmiYptoCNPpJ7zkngYALoBbEyaU6o6ctRuGkW2ddGFiMkCtiEZeMbXBzpYcSkrhaAgh4Bh45z",
  "key33": "W4MAT6fZH4gc3J9zQBoYSDar6VRSd71BwEBnYZkprauYSSzMz4Fr1rTpd9DnmDyKxh6RQwdpYzQVB8fDLTum8v2",
  "key34": "57x12yeegPUJcWa2kt5eW8wpHFfZUfHgXVnFdyPFdv2HovVazJYEgAakZ2bvXTkyoWVeM4JzZDjmuSYYDZVE1AMa",
  "key35": "4PUKUxPp6ng5sfcc899DoAXLH5rVniXGLXWF6PxScY7L8TpCHGXpJmN4w9kx61MmpXK7Ab5q8n9nmQHhaQMpSL9Q",
  "key36": "sU2yosdepWgFudTmfRcAVEnSv3nxJAGRag56NvHnKZz8psGf4gi4QLsfSTDqReUewjvg4XWMVW2F8hWHAGRQwzm"
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
