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
    "5DV33a5hEfdr8UjgC9kaKwUsnCX5aBitGdFLQ77LJfWAEUQQq7c9ii4M4ePVhiHq8UW4z6JiQRNZFLVv6fpe7Px6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YAbDBeEcjzigXghwRJBLaAQiC2Mivmqinim4fpF3FQbf3C3arZZkMFWCTHeMwcjftNeBFZKZdVUDcwnPXnMzikK",
  "key1": "pShEfoLbdrYL1oLKipYDwLaX1H8FeCCDBQDSX7qzR1A8C2nzrW9Md7peLfe5GZ8ZRBuTABuut2VuQyzarPq52rV",
  "key2": "5wHX1mosAXRdM9ScBFzbmH3ycVeZpXSY5Mdz9qkR3ggCNcR7Zw3fsCF5Hpmj14JyirDKwJRLz9smL6AbZxMxnkf9",
  "key3": "5bhnxELoeKNzU9YXQcuJjh4sRZksk7QZLdqCevJVRgCrdasfVCMiEEWzvQS6yiETrddZkcbunbjDRfUdAKj7LMdG",
  "key4": "3rJYni1pB92Pd2LK9P5sQW43mEQaju2uPhjyjRnzBHPFJ9MAqEzN3PNHWGLgrWNcx8xCv9UKu8fuYDhTt6grtm9G",
  "key5": "5SG6jst83vCUxy2RyNwbsWe4x2cWNEXsmqnvmpXQ29UxnDqbe3vtNn7zT8c4jhWzGgvUhHctGqFYbho11i9mcx8N",
  "key6": "4S3yR67bgVJBRm3WqNi78ntnMoyPPy4SDz678qL7U5HutbRcpLmDhbyQiwhpsqnyhRiS5AkEjDu5Txok1Sv8Gzau",
  "key7": "5e13JrG6GAHC3wgVrt9qHu9KofnaF4VsuxtXVyqo8vYWAgnwWhPXxGUSZ9Bv3HNRsvJNesM7uv7KjjPhU8uPihiV",
  "key8": "2eVh9WJpQ41ZHhgVUU3ugLjCmWMj4N5iMqHux1xkPNUnLxdVhozY253HpmBK4qxd8cDVap6WX9zhFhNVvcNNvUdH",
  "key9": "SRxeJRzocioPUC2vyrhqdpgp2kdf9KwoQCxya1tqeQ1TbAzwKBLD9kfh83d1spVGkCur9k1yE5fGz1cBmx7wo2X",
  "key10": "3Pqbhb6fJ9xemCTynSnAGeuSkjfFqXaiTcmwEuYPd8QwV2HucarHPtMxhxZHsUxY21ZkrtVhzjrNj6kXKRyct16q",
  "key11": "5owqdWEbX4dfEcxYQexsxfSvepAouh9muRFHep8tn5cGMqvZ3MZ5pRUSDLvjZ5kVq4LyWkYYAToazFNf6d6ZmTMn",
  "key12": "4SaoMtY4BepP8BKeH6Gdz9DajeJ8H1VvDzTfLJw4tup9QeSZBivfvc2TaSoTCNdzDnZyZ37DEqBZSTJeDGwc85G4",
  "key13": "3a3NiB2JdZdDfFJCwDKVUdnhUQVLen7D8VmuC36mfR3pxifKtk5PMFzPJxpQJMvRXkVz9A6xPUWW452zQy7VdfVd",
  "key14": "5aneRC4fVtLim9BTtdUkJxuRJRj93Yb2mBVJekDeSqpbLSAjz8Yzb9k8jUV2WsNVMFz9a289Dy5wBeRPs7BJHthq",
  "key15": "3PFccBWmyVpQ8QTZinsSx888mimTXqk86jvYhvdnAEr37iMZ9ryiEhq23bs5pPZuNW595fmVDqtgojQ3ZXMx5H5A",
  "key16": "35hb1Mc498QYQScZWmeDKc1heymZsdY8Z1j8N6Luz1bpw1jpQzjULHxNbCUgtaS79kdTsqWGkRXjypLtPYHeMHEf",
  "key17": "cdipWvi9fTujpFYeXW3nMmLK1nhGd5ZfVhycpRtqkwq3Dk71xBFjDz7YnC8bmGWDpwh7LD6S29z4RjkyTF6yAsM",
  "key18": "668aGvABVkJw3rtRQr1WKsZUGM2MPuEsYNoRW5XwkNkax9ARFRLXmNeWxcG7dCbUvq45yXHeobSY5RVisNhCSaCN",
  "key19": "28sTsbYHcSttuTS3xH9Lrzu7EkJtqn5UdzSFdQ8rP83a2J4BZF6SGiuJYszezb8fJiooHXpwRQPNAt8KvtEAqNFz",
  "key20": "XtbAcFvqyeLux6MrsrCSLHrz1TnsmEZPzvJrMQLt4GtzyxZwsiUmPn8DUPP7mK8pfqyxmcgSFBoaP4CezL3SVNM",
  "key21": "5ARvZ3DGMPGBcUjtq7tx2UkQ64gZYKvHmFKGKGpHXQatWHnHnjUZvBcQaaBdzJQxWeSPgCgXYC9VRQqJDebtHPkK",
  "key22": "2QidTdsoBiKjnsXiUdCbvSuxu4Rfx3PfEKpZrDxK26CXX5zrsHmg3ZVkxtiG4FYqTz3gLKzy6Ph1nKjKKaQhne97",
  "key23": "2EwyH8gVjZYavs1xzp1a1fQxLRiazBvrW3BP4SVUFkHUawG5YAH9RwZpnMG5UTJUnayWye6XZLDbfAWun7BnbWGt",
  "key24": "2pwqmBiBqSrmaf7asEHL6WkHuSUwtPrBCmkpTjkVeWcunsAp9REiVotrdcLdvnXHPFrXdQDbunBj8pawUoPXP1Yz",
  "key25": "5GeA7vD5qjno2iFP5a7JzSjWVoFy3QLrHNq9Vi7tVqaqtTZEWuYhLacEK4Hus1HPfaXM2HcvXtQw7Y9GrRrGiJRN",
  "key26": "59QewQPEu8nPYn358HwqfrEUa6uUbfiEnF9PDMAp1NPM6LSc7ALSqYDkYRv4esE5Lo2QQWgxzSDhvfxee2RDRfuD",
  "key27": "2obkLVZhNAERWoTsEHxcXyk1fNcMkahGvfbqptkxW6wXuFEo2P4cCtyDpUDL1pp1qFpM3SyiKUhRVc6LcwCoUDtf",
  "key28": "4Hm9hpyyKvvCUwFQBZHdNFC9bWXLhQHkFFDx5TXwVU9akv8Qgv98twgrkpEYPnvKLiAKdbbQLh8rrPeTretUcWy9",
  "key29": "21Cdz74sacB6ijmL5WjqRaebwAGf6kC1TGyE7uo8nPoerwE3dZZNGUzGVuTWR3aCrN8er98aziH3ABjTAaUYaiWe",
  "key30": "xxojC9G2cwCknoSotZYa6eKrqS9rSxcJhUGkUBDW8EukqwbSEKEN6HMo53tvci5x4BxxSj8difh94toLuDmsGBF",
  "key31": "51mGumdP1CEdF9BZP5bya4Pp16pgKxaPE4Z6EBThxZNGfu3zEVhR1ycq5dXzQDYfZnvAFW7MQakmpEnHm63oHKja",
  "key32": "3Xf1ZZcUHJZxKQsKJADZXnWU5jU6mN4WaVbiEZeoGHFCstNh1EjKPuZm26sEteLacPz1gCUZWiVUZU9fLJUPdRMZ",
  "key33": "1P93DjjBGZBh13keq792TLeopi4Ad9NLu8bBZJh2PXte1aXrMnr3uV3x76HmAvFJjbdaR69qz3SiuqByp4BRLEA",
  "key34": "Fxsx7NB84Guour7AypQEwTci8gaStniUf5LH6zyFPez5BomgtEWHzkNAf7SZKCAxsyvzBfNYbhHpY6cncxtfwGA",
  "key35": "4c19RHjTG5RzdsZdA3sqzVTth1ZusKno9hroC65dSrEoZkXCsc95bJXapFrYjHrJv2Ksq1TYwZ7GzkXTiH8tEEBS",
  "key36": "3XJZTUQfU5Yaun1ckmkUg52sSvi9fNWAJz6FQzDeCaC4XSzj7HPvnGLZ6p61627wyHKTHpHuht7WN4WSJjzTT2oQ",
  "key37": "2MJPJfHmPZvkoHmU7eYGPgAtqEPD3VEJAvxauGZkCc3Qq3xf7n2zedMzcVtwJkTLQDJpi2niVCzeZNFQpJ7mzT3U",
  "key38": "F3Zf9f63i9A8TcRxkbYygD6eM331qFTaYQsFZFEijCemj9cZTcSpxw7HXPqkiLGvE5kam3Xndt4EZBkJa7aqKqh"
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
