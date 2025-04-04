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
    "64toDkLUhNPkxQWNzEC2LMZAhbP9VT2R2gYqrEDhNJiem6n9R2gqFg8NSvbGAn2g2R8HqaQKD762h2avJTmeQDBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31V7ySVg7ksL7daRWUh2JktVUnXgf7gmt2G42QiqYGLhr8LfUYbmmnFveBYc1mdb5WmumXK8AiyRSiq1Zsb8rm98",
  "key1": "6jdqd1beajjyo3SgNUBuT2jHC75s4bPL8juGFz71LmbCYQEeeSdLDm5c4RWFX9cYAFxRFP2tLw2ECyURWdNyqXs",
  "key2": "4XU8e7ScTiw6j2pXbkjBB4HhhV2NiA5xYSZwhhCxxhdGsZHUwS4MXycmexnTVx89Vnz6tubDko7gH1Z6i7KsY3L6",
  "key3": "ZguV4xWh6jiwijPErmQYsZw7NdGiZjVYR196ooKXGMQzybs6tXYHmq5x5Q4ch7LJG4dhVayDEZbTVoBsZmAcFg3",
  "key4": "4qnWYGTEWSqCHuYRszb3R1MDsrJYEGFb1wKspEgiwVcpxRJSte3S59BEF2EAhV334sDTowktzPDkCf3U6r8haU14",
  "key5": "38MbjBTD2PUVKgJqxmqbZtvdnejcL9KFm39bEfPDRgDDc2J6vYycamZBdV8tQZNCUvXGVCiVrHLQVWVtaZoBH2ps",
  "key6": "K1dy8qE81EZGR3yVR8sMxPEaGebAAowM694UaKz3P2PSat3bsgLRYMQiezwoMQx56LfwDN9e4JVwvAGfsZVffcm",
  "key7": "2quqVHCG1Qk9ARQfUYoMJ1EU6xPdga1wejo5YEf6rwd6Kq6x5nYCahhEoPZ8hqKgUfNBbY1hUpmUXofiBQwLV1oa",
  "key8": "3HHpDG5NWqt61LGn85vWof393ZF8HpQ2gsACVPv6rAeHveAhb4oY5MpwLtb4L31tJEW4gAuV7p9irGmrRu4GVF72",
  "key9": "HeJUjgzbQ1mpRPGenuiLLP798V3MpmuEzRsPwZYCuJn1r9dTLMXZtZDgKs91wyXvcS6UNUiTRJsWPub44xYow8D",
  "key10": "5CSCuS2DXkDKKMkDLLDsc3DpZVRU6oTEHJqiLRQy65wpX95bwefuMVGhH8Rg5RVqq4vtXcWL6ri35rbvK4xRJyAF",
  "key11": "2r9DxgdDpV5tmMqaPHN2WRN7a7RqC8XRHkTjFkU6pB2GAP1V6CsKCaU9L6cWhYpG4vnGCDnfv1S6rvHgAVAi9P6X",
  "key12": "FycqrRMXu4JMe3yHTGgi17hHBXY4NwgKefWCGWb621oMBJXUL3uoiNkpVXgGrMxFeHWXzzrKkTNmHrEJmyiTfPP",
  "key13": "2nt3jLB1TiZMstf5MyLDo8xzNgzzLGgWsAzamnnDkiihz8UwqfcphiEUDF51L5WJ4TuMvF9P2kTAK9X7x4kqSUvd",
  "key14": "5onMTGPMtdX8V3wHkL8Np64caV9PmaEgY9tZpHRZton9YDPPWsr1mq2Na79JJwEBtKgWN3WPi1HpdCPdwfXhDkyv",
  "key15": "3gYCC1DBGT6BZhaTxRHhCkzhpVQpNXwdrqxbwX9JNgBmTAKQNNBGreJVVncWhA2CWkePE6DHzej7AX4eGEBP2hAt",
  "key16": "uEdcfy3X2ahpsWkhoCd8kYJEVa6kHVYJRadAZozuswZtNvoX6zvJRnDZC81iDUz7mk1UyoNzBjzf2hTPAqRVqkS",
  "key17": "1HQkrcx25YqifC5XkmnagtRm71mABzWvA242cRMQyufmC6M4UH417mNJFH6M47v5rYZoqfDTeWkvE2K5UbkoWWt",
  "key18": "DcUA8ppqFAk26ypqusxJiM6CpRhLh776AZUPqn9bVY8jXp5fKGzQi9HYDRjsrXYoAKZV7aP3Qowi4XdLUDetySP",
  "key19": "4ySVNGTWGUE9GStKL9noWomH5ERNhRU3rbZLyLksJHnprFCVTWTsTnNoUTh2cr5nDmgycRM7253rzvSafMxYcrbN",
  "key20": "3dFrDkVRLPv1cuR8UunT9N1ekqdhtk1YLQVNmJTwZRSoyQaSe4Laq9RX1RzwRK4gp3vsyg5WhA8XDm6j4a1FzHZZ",
  "key21": "5DkA3LuPZ4Lvw9Tm5nsNVVW9DYiF5RKmqLt2dBjLbNgZkvN4WfEHx5WybH7ZSojaBED9G9Q1Nc6dnPgk4bYuMcw8",
  "key22": "53W8wXPYxUUt4SjcKGPfpEego5ooKyo88QsZ9xcJV3StWCHzP159p3hJb4oA1ramL5dKUpPjCEZs231uX8eE65kt",
  "key23": "3MeR2P1xvqLu3GL7UqH1kZeuWpxaudkPQzWnkKQxck96tQPZTXmYP97V6jJftyqa568K3zw8qu5HKwzho7nhepSe",
  "key24": "2psp2kgVhMocCGMuWFCZLygUvWxcPcGVUgTqDm9xEGu98vRtWRY4KiAMQCMnGFvCs1Giq3xwJZy6T841nvX5sted",
  "key25": "4YRu1sYy4gzijutBmGG9BhHo3hbucMPJfmeJc4s1nCtSQtd7YW8nSMtVh1QJBD5HsgHqG3az3xRoRXsdubjLwxFX",
  "key26": "LvtUfTu7iZypnUfXHyetEWRzspcBJSg36fAQRh1PHj4jbcsj3r1ACFH7mX2tRP762duFH7ePUjNeFF18MCqajkk",
  "key27": "94V9GGujbjWt6monZMJKE27GUQDKw4j86zNx1PxKvKtnnbsAASFC6ofiYdKP4KAEJYaJavZxfTbDa2LQ6WS25gj",
  "key28": "3ckJ7pUDJ4Sj2pMGGC7n7ctinEf8icsWBGJATMF9Ndibi8fHuVxSkpUdrQpmRr9EBkYGmYVWB9k8zWFraCVBtttt",
  "key29": "54PfvrS8nPGykhE76brKQmQmwf5Zn2BS1pT4AGoFJryX4pUDGkfCYWeoNZ6DqtC5Qbffc6zxkPePWMemC5STHcJC",
  "key30": "6219jkrKZTrJNycfafHKJaeqxRSVxGowxzUtXVAUPr9FLeNBEd14ncma9RvvYJq94Ese8kaH5XWBsqM9ZS4hyYsc",
  "key31": "tkLGhkivgwBG55juefKU7aX9MgD5mBSbhiMzz2W2Xr9kidRZBcRsL87FGsEWQoup4Uif78znNibRQkSTgSJCDXZ"
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
