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
    "6hUnEKi5b878J7MLsQ6JqFq8z26aMZX5Ji6UtodVbKqxrnDAS7CihkJtgy2XkYaAoN4LShtXTYAwXxJ5Zmtovva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AYaCMTurQitDvBb5frQuXsFNd2VgMybg5PxN9zq6jNdfHZEnyNNTfik6u89FPmt2zGEuzjQEFgGM3GVwQG8oWiD",
  "key1": "5SL8p1wiqaDMpK2ua2Hz7PcFokptm6d5icosvYQ5S6iDhmm5gfn2WeV7sia1EPmBSNWC1VfxpLGfK7PspJjfHbVr",
  "key2": "4xJA1MXE9H8rF6e53hYGJcX2x3rK777yNx3mgH6wqJH9CHdHcBksD7RfHw3Te8rXE3pBRe4b9GpgDZxJ3CyeKkgb",
  "key3": "4UxyWGp7krGcFacovU2pvWr1cYaDzCYdMpkWfMLJH2ssECwFhVonXn7Y5nHexqMEU8d2WASdCtMgU11HLGasTsP",
  "key4": "2QYBzyCLvhEk1wpKSAhMAHePHtYR51sbhsYziytmRFNCMWRuFYtm3JJwpHpoVFHA8K8qtCSFK9tZ3B6AAP2mjGsc",
  "key5": "rFVMDfR5LyFXeM8kqwNWeyEcVu9Mtu1JjWkJDU1KctkQG5nLEY93BvZ6DWDJyEAMNPYETiS2TFTpxWEXNpyLX61",
  "key6": "4335bJiMbi53S5XXZqpCtA4Xs52sQkp2CgfdJTE5XEpVrpBshHLiov9orWT8SHoczqLRyw18Kc2stQjvgbaPL7sR",
  "key7": "3m1Gxi2ijRGuRuaSgxBDuF625wrgpWmq7t4X3yUh5txxNYhm3NhoQ2RDfG94ou9cJ7Ymrud39jiQs3yZaWaDJLkX",
  "key8": "3KtF9dSHUQgntt694k6nLuCmMcJtiuXP1no7rVogx4pRbu3yu3Uw7oKk6EYjnUZHMos3Mem2ReHS778fTo2G1YNx",
  "key9": "5Wh25TJ7X9d35K41CWxzgLvYNWKBBgmwKRqPBcGj2XXjkUzUvusT6ZL8TFkW7gwm919voAGnzVzvY9Cq289xW37Z",
  "key10": "3rHZdG8prXcgpUZyiCUVdPAaXSbxdJbHQ324DUQEUENYuRCdkN8h1MvCdZT9dvgcc6mvgRBvRNNxEGTKzGhJXcqK",
  "key11": "2ki1TcU4RC6GnAyeWgiUtSWDF9suEP2PB5T4uZmaHFb6iShWxf7upeWHi67tfC8YnPipwPc7SjY6mJdAQpSd19qh",
  "key12": "4Jk88fB4ziADTN3hkv7RarUwWnjh2jy2tpezJCKwF9ePgAyetGajU4tPRhj6gXmJc7ts6uQZus4B4LVfaaqT9f8u",
  "key13": "3S1E8zcu6wKb7ycPM9kUKSadSr5jnwQ2LmKj7zGfGva85LdmqLPYYTE9j34jR5fDKcFFriFeAL7WnXLusombrcGw",
  "key14": "34ihKhQobi1w8ssZRCK53yfntwSPVAL4a5gw6HkcskP69aqRhDXTxkYWTyEZhUpfKWFuUwYA6gg9jDS3uWy7fSLF",
  "key15": "khyiDWbYTqigWLLbkX5QE4o51bszRmYBiUK9oqvitM9RcSmeKCj7Rp4KTbzFev4DiFyzPjHu8VkTcmBf8bxxKtn",
  "key16": "RQ4CwyggwsqF4SBnVjWWUpqmonzrKCxw4st9GAgTxSjkaxHruPZuqYE71ai4B9SH6eYPFhqpcBhjh9sDr8UxjRX",
  "key17": "4TWTFMeJhGULgDHbZgsX9gRReC5fQFcxU6vwQb7tSXXHdLZaeJUQpRZVLJhkMkKLgGJbkVtMG2F3fR1JjPkiGPML",
  "key18": "63UyJ1LBra8LkbMb3tQR5NA6oFnRqKHabqjxyadsDcWgT99ZhMuqMkJNhmQgtFhJ5NFMYDt8NxHZ2AmReieFJXQa",
  "key19": "4JiZ9hFScLYBeL1xMh1nhp2obsSRyotbGqocE2ouYFvgBmSwzHE4QrFLj46oXEo1NazPpBrpqio1rnhbSgHMB5Hn",
  "key20": "5wrH9FGhEZrQ1sxb8QfXsjpwpPAnpS755rjFSRH3341oxExt2598pFtLnsbzaBxE9pmgrYCWYY8Gve1WnkRkot3H",
  "key21": "eEq3y7EqufbZZ5ZFZjxbHfdp4bE48SJvv7cdvX3McHH3R956dcBsdooX9oKJGPqRkHMQBgcr8gF5BRAmpC6hsFp",
  "key22": "6ZfdECZtz12fJsWjergV8pgQbV289gEyCjSeGdmtBKsMCd7cQcFxHv9S5V4mRaKJcgUbAX9yXwdQyi7234guPC3",
  "key23": "41JapCU8vggHmVd4Eu4yMFqtVdjZhkAcXV2PScM7hFkvo9Df7uZMoUKLaEcJRNn1mWtcQoQEwVPoVaECXCxH5pMj",
  "key24": "3u8b9kjvDuvidxN1ZyoRmsGjtjyjBvev3GVaX1dN8WQLkNGWwDXGWiGWGJZjUuRaFxNziGc4QxyPJANk7kmq89yz",
  "key25": "3xufo5yuELy7zVNnZucSwrPAN713cNLtXadsjqLfm48SQAEMchhueawL5u59xvECYcJbCktc52zQUcPj3erViTw7",
  "key26": "4E1Ax8yPe34fG7Eq8d3FkRkA8cZetjKPKpWqgtYrEYBkzf4nU2sfdTfez8L64kn6w4FG1cuBmdkYNBVjBLtPeXZb",
  "key27": "5FGfKjfDewwReM7g9PB9d5GHnBjYwpHUpB1oBuEJvfkBgM4GZPgRZ7y1rHgas9qHHa2sGG6pr8qDdTFLrud9RQD4",
  "key28": "4jBzbxMcE8cDDZv7jJFAYEJzkFeSmSSvPMntLLfoS8bWRH3wvdXpqyfYfVAbB1wsNW2HccVcv7t3weJwhxzyyig4",
  "key29": "Htkn24yR1dXwjHzAxBKCJpoFreeJNvhZ1j6XK3NhBquvBMtbf1AKHhEXrVqAvxAmEpCpAXyjU5aXkbzzVPiZoqh",
  "key30": "5g3RQ7SDK3bhmbn7Ddu4b9S4QN1PyHARGXqe7FK9YwM4EuJ9FURvqX7Dhz7VxkZmD9FcWBjfhSUSgqf8G56bEDfB",
  "key31": "uTSxZVpApDvYSL7gtUjeYGvG69VT8zf9jBAqwZVAw3dsYAGwicBNXxgEv6gCeifDVuuaNppWyN3PE8cECekf9fV",
  "key32": "5m9v7ed5vTD7EtuQEcUZe2VCVDA8HpytFWC7M5PZj2SbwEpAKdCrTAtE5LdmzfDuVMeSjhPUHHnRnzARfEFab7Yu",
  "key33": "5jt8CK3mof56PM33dZmErMjxKAk5SmPgp1yQuspFEiCFEDKP6uAYYCZ29pWhxta1HxxEgz8CYm4G9q1mEs2c4FML",
  "key34": "4iwEbVzEPHZTCeUh4jhgTDZ5ykxrx17zvPqmbeiCFz5ckNub3anhnTrpvXrDUTVMEszMf8yi77HRLiuNAZFdufg7"
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
