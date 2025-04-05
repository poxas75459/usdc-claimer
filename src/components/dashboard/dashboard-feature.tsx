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
    "5tz9jbRZgSpvvv2cwwiH4tTjVwsdhZK5CfX9MLDHdts8d3prQ1fffkpdJML719mTPttNsYPJrpFBTeXzZAi3PTV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E9fNHxn4nkknBUtewynfgvbyb5osUvHiN1SwY3wLTMtqNcpSUGr6yzmdPevTiZcZivKPhx8cTJCRrULqt5HJTLS",
  "key1": "4sTJYwPEvnPkfGXFqoB6rbJxo54JB1jAA9bNs1aE1BYY2uf5YbbpGzL6mbQqMGzH4mRKDT2HaovwuVa7kxtv5gPg",
  "key2": "nQPYDEvWqJnoajSoC8vjaQFJjm9a8qLxUF7Dpw295v8atwU2nsVgiMwdUQujyYxndpwxMEHcnmRHmz5QHeTwsVk",
  "key3": "5MSEGuuoXpJKUmZGBGKqyT9vuHaZMDQMzjfSVkHBaboAFSiscdbYBDehd2cZFzDQT4BuU38Ao8dzCwWTqeCb5GZT",
  "key4": "2ZJDjxtuntxqTkJUpkF3uuE9zfzDJMN9fMoHQDV3dHw6pxMwJYJu58QjbdLU3qC22T2Js8gUfy86cJ3VYKr257Dr",
  "key5": "2L6Vsk1KYChXpvXnZANX74vJWi2tn78GCJDF1KXdV5WAgphRVxukfe6HLJeTi2212CLRF2E1opAkRQrewUgAkgGM",
  "key6": "3nX3WNsEpxxJXsgs1zEhD26SMBCnrEXPgkQRoBc3HSmsTN4jM7JFyvnzfzRwkxAHsJAkhokvE8eHWXnQYKMiUQ1C",
  "key7": "3fKE2Dd8qbikEYdYb3LebLtgNbkre2sbboMbnuH6bBKQEHhEDeQSVdNaPnsVC8yDpjHHLrCFTzJ7rkQS6hZa3BDy",
  "key8": "3uzjdqxKAckqUks487CxrbiYem7Sa1fCEbjjZbvUJEFt9ebseXWJtjdEGN6QbDx65ySLxDTNbGiWS62qxFXJC431",
  "key9": "25f6Tw4R8SLNrMUgFnQDuxxyxZxcJHS9MXa6CyEZmnYsYkWqVvqUrakqvqYtreC8G93hvTikA7tDnJfkG9B3smtg",
  "key10": "oBqsnAmBeBxd2Z1VEfVH38S87XpsfkZJAJgZ8asgN1X4drAFqGJacA9MKMFjvoqTYkTz5kUxNhL7weZ432HMzAi",
  "key11": "2ZHuvSMd6S7E3nbfPU9KYkpd3CCwUsWXq1ep8tutsyxQDiBeDCC4zcGZhyFQph3VD2Wa7r2Uud9X2rH3D8yJcruQ",
  "key12": "4nTK214hKvYjW7Mg97if7eexvXa3UbaD76hx6BQz6JCGvNbjXfQveDGLTWoZCJYkxKMmmetS41q7FAgQwx92QUsx",
  "key13": "5waBYgr5AVoaDbnwPJxT6wNfPECyzKr1g9AQCa3uLMdPq6thpXthWoYhtLJXJCNtJkyatJGx1ZBJW6PtFcW6VmYo",
  "key14": "2pcfUsSUiqF7t9MEaVABEvGHZKJgbG8Dbhau3pBqZNaSYnffZFyDW8PDc2o1KfKc2BFrZ8E5N6B8x1UxA2dMVLLj",
  "key15": "u8yspKVjZn2tNNH9qfnDUmLCC17pMHaUy9YUrsF7t31KSMyyem7xtKWUZfaetUfx5KhenMaZJLJwhXUJf31Zhx7",
  "key16": "4gUjwRirvzh3UNyQEipv736BKJSm4cSHuhauVmh4d8AEt7BBovuKA1CSi95JjitKY4axTq7fC1gStmF6AcvayN1Q",
  "key17": "283yWHJavX9GGpBhJ947ZUjaQThTSsvUeyarqDxsYK1nUfdnh9zTT4JYkxbF9WjB5HY6PoKUEYUftcssU3Uo8ZBq",
  "key18": "53qYidYiT5hcC3s5KEQxPJD3WW2cC8RMdrp4X4gdjJqGMDPtkKzMuTKWrRhs19X5XuZnr1qquQRiXdwQv4HzQ92u",
  "key19": "55hxf2CTeNdiGhzLHnd6J366Y3bLFFscpG8Hc6no3g5RioGeEQJst6BNNxkpNTDUNcQCLQhRwNC1ZcbLAUSrgrve",
  "key20": "5m24pZfqMGXQvhAKDR8H4Cn8CbbGTi6EswEPwhhqk5FNp4fgP2R5AhvUoHJA5dEgFEPALU1ZJUxyrEctmgVnv9Mc",
  "key21": "5PWKYecuVpoyZnnx7XHx7r3oHtu9Y3iZtWaZiZYJGc9QzPDb5RpygrQfTYTNpF3SdxD8wkd75DNxDXw9KDAgEDXV",
  "key22": "4w5jsBSSz4xeFLTAq6paNotkjstyvRxe7gm1utQ7vymWxra4Qp8jQX3Prn3Ze4fjcV7y1vQb8X6r5MUkSbULQHYb",
  "key23": "42LwtLbNdF49BPyywhz9VmGoTp4XWyvkzV8M1qVWQnSfCqupgSXtz9z5ZBQv27Dsufu13Mf6eYYwQf8XravPkeaG",
  "key24": "5xzVvwwRxEYBDLMQpCapvRVWiZpBZWPmwHaF5fX9z8aFrGd8ghUyaRPrn1HWg7vKFmfqsC42yS8BtLcsAwUjF5rJ",
  "key25": "3qLXgzdyTtwn2YJ4AwRFMJ5g2RnugczYb2ExkAanwnLRzzWsm9j4VzVPQMCnnuneB6HD8mdkjPcXGSENdnwc2SpD",
  "key26": "4sMUcyWfZjQPjJ6BhwTmDaP9P9pZxvuEtRxaxsUtCMubD1oe3zBWKrEeqpC7uyzrp1s9PzDZUJXzdQEtdabv3Aw8",
  "key27": "xd2xejciX1LSywTnfLWpnN4GjNDzTPfvkzywqwY4SgpmtZDDA2JVwG4LvWhCXTwW2EuV7FWbwh25Hne5tkGsRpZ",
  "key28": "2hLR1ATmCMb2aDcECSLr6rF2EtWh7F5XaMM6wvVnXNT2BK7fkmxavaJq3MjeWxjEhwRc3F4iwqc9t8t71MJQRFn5",
  "key29": "4AoFWiKdHP2tkPVj2TgNko8qpivrT5e4XBVcHdFy8ZQYKTPScd4yGo6y7fK187aQWCBsiMbqrW5ijqCKCnDebitm",
  "key30": "4JcZvUvVtnEfYR2ughjBK6mx3N7vzz33t5MRG8cdj8TcYdyd1gwk5MnyKn9XTEdGdV1d6J4PGRuKymXrE2nbkLVJ",
  "key31": "5WmkGXBQN8qxXv3awtAzufHa1HaQrneMMwgkaRyx5FW315uM9y3a662AkbkRfAj4i6BedpgYjSGmUQdv56uVxu6E",
  "key32": "9WJPZYDieES9tEP847NJistGJZ6oYdresLDEGqEc5GfuvcYwrc8YdVit2qqv8pH7kpvEcWxrp21GT49ZV6WnBYy",
  "key33": "3UREVWXHo8HYTEsk9WY3fQR16Rxd74FVNHHZHzCKkePYdPCzGBRzNz2JjJjJMd26N3GWinZqmrThryESKfQL3HBC"
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
