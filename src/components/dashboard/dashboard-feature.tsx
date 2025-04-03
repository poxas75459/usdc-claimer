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
    "dkBJddiWLa7YP6EuCqUV7b3xgg9rg6GmE6YKURwkPoQ772g9TxPZTZRYk4QQ44vxFBJigF53smD44Bg8iSVt2de"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gobvvdpvdFc6mq64F8V9mgMKWjHACnvw74ZHEuiDf4hDaJqYCHHUkLv5eCPewN9tVTeuti7jqhzXkQ82XcgSDNS",
  "key1": "3vuoaENh1f2fZ9aRkLooaAhnGEpTzjyS2NQYb8hPsv6KskqpDmTCwq7XEGxsVhYsbrPAQMob54ASGcMLKPrvgoai",
  "key2": "2uQswvTjsgKkFUfCvt38EgbbkgRgQryrUeh9mRYNgtqBxYa5W53RQAzdLS1zCibCKTdwpiJ9FDodzvLBNf9qQwGG",
  "key3": "477JX6tx1zWAaZ8kU3Aj1EMknCAP5c98YR5NWHWEqNkRsrBtdgs6cDJiW1FWuUMzdZeW5PXi96M1rYwqUi7NQrNB",
  "key4": "4TcsAzTfAJHHhycBVTFKSnbJVRyto4SjtxRhT5qpsW8z3tj6jJKtrdrGvpKHhk1ppN8xYEDKf2wPK68whVq4jcFM",
  "key5": "h854skbZhkxqeUdhkm6kQzKpBAyG57DsUUQvjteXW3tfjee9k3Jox3eK9a3WaNhquX8qZLJvNvTSPCLNHyiQGyz",
  "key6": "5r1kYq8ar7dcgvRB9jqUv5cXUKMYxipyVHu9co4UrjnGbP1VabViucQKHPnMyCNN7tCZPKQCU42uXTVxKwGQJbEm",
  "key7": "2QvAz5xRfB1aK4nQ97qqmq3sNFNf48bYTtMWMstVdLgsy98ws8cX6s4uH7LJJr3DDkwCLXcssJquWQsmnpegX3hb",
  "key8": "5eKxYF6e5ThyK5v1ohUJ1dx513Zgg99zDjJGHPGyJgZhvTN5Xyp5BLjTRxT7T1mgUiHhaTWPPwDFKkFS37Eiv8jw",
  "key9": "46D3W1Xnce6hsGQ6nGKCoYqtC6vBzqRU6o3t9bxNwFtL6S6AqoiT8CeSYi4GYExSZWEktrAnwsk7ka7vTx7vJJCd",
  "key10": "nUE6EwhAkaGb5hRxck22GwecKc1wCvoEg9qJzJBVTXB6C2W8nBaU83xdQFRbfE39jvBqPZwZUvJPsbqusE4A341",
  "key11": "pWMnafiZrmYVTQw4owLcGMbJyAeokpTPQHxmJxxFowK9BWg3jJLTk1X9iDJPXpH9Jzhj6uad79RzaavNprJo3dn",
  "key12": "2yy59z9jXArT2kKkMfkzk6yBkgeSygRSfciT9cYiciQSTY1kQigaQsdsZ35nW8bfBqKY6vfCkFK8pPpRgSdhJPWK",
  "key13": "2WUnSz1xKQ39KCpJV6AZzvPB2gsq9WneR7YB1XkVVuJvrhv7z3P6qUq31D6Rk3PuBb6bTiKQfHeEnaHikhRx9D9M",
  "key14": "4JKnhB53eiJjyPfE85NE75ex3M4Z2iipYAYcQrALiDZsaAuvXc6tVnVC9yV3x7vBYaJfmJY47d1ptbG9uqJZ7tmg",
  "key15": "3oBRacRUq6x28Z3VWP2uuj6nUPjwT3r7xkU979LJde6jHDc7vPwSBxLwCmDgMxegRZE9ShSopqTcbWWp3enPnbPY",
  "key16": "29d87qpXX1qJsUpT2Ujm8o3ZZweNpmvTwEyDrbwCpqm3rQxXzxKCqHmVEUWXYd58S56fK4SpdkVFGxvHkoqbJedv",
  "key17": "5rAFTTuLWkwkpb7yNqWQQboAkERoGZYy7WF6c91poehUPHuTo91RcipWnYfzvN5RkGdGguZ2xSucjGGrxPGM1QpY",
  "key18": "44bA8vZBEMS9CHqY1ckTwLY3Yz2dWpZ3oXZ3KTqTdcBNRmxx9rEMTt3nU7jdmJNXUptX5f5FVRQ4gXu8ChAkRMre",
  "key19": "7ZgPrtmgVAc8HJpf8b1h9aEDcvWHMC15u3tsNcGmGhLmvcYGsB6CdsVaSfoLUynaRBe9rWBDEBz7Ncr9BmBKner",
  "key20": "27SXUzmJYN1FGSgLpnDb94SqEn9iUqmnTAi3sbF4dYdqNHiwxhA1nS5LvQTUTuuPT8UxPDVsvXoY1JCMZnvpgLfx",
  "key21": "AJnavqmWPiaKjcn7EBAzAt2eXMdF8GDqGTs4Y7C7DUK6qSFBvBuznTLHUAZkbDcSoKW4STDaJ2fg1esZe8eLR4Z",
  "key22": "4i5PgHx6hUptc23X7RhbiHd8oQhvojU28c3KfgisrAJiDaenoMfi3xhkW666WvWxhXCMtyZXkBMyJ3qZ5WB34fee",
  "key23": "4Z4S9YsnATTNPqvh1ept3tX6quhx5rKUSoiMWCWuGaYyAo9oAG1kmvrQzmgDTWtEQKR1XQfWUvbQo3GeStmn5jKd",
  "key24": "41mtjJv9fzonuHP7gDJ1xuufz5k1JZaN1juLM215ZxcroDtaiDMnYhsxCfHYoAh3wh7EuqD9bTHgfphckJ3x5EeR",
  "key25": "JW3joTE7gM1Kb4KUdK6gY1Bz8JqBfY9kXvjpbawCnnSXFjtvGQxTgxy8vkQooM7BbUSpkPNMJXk2xEK6ZrLkqG3",
  "key26": "hJ9GuXWmURU8hs8guTF3AinPZfYL4bRqW2TgP4kZ3gEdeBtQ3Y8vtM9P8qZKBQad6VALaSpLBfXDcYzMMYgbDzn"
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
