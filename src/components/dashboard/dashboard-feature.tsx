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
    "5s56Nbpz5XdaiZzH66nm2tEPBbqUKp8iWJjsARGqZwZAeGJ3A8NjdgyQNy5c45xrhzfRyypsiSk496zxiYgyHHu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34WcZKuMFMwf7aYswBpG624anYJTZzzPsMUV9zLaohP5Hwm9KbiSCFCcscncpMPjYZx5a96McNx42wwCjrhAW3Ki",
  "key1": "62RDUSn6yF6rFCcYeYWzoKPGWaWqdCKMLcExCQi1R1erd542gZAq6fEySNHipcUmiTJjmv7r7a6nBqtqmBf3wKE8",
  "key2": "9ooKshidcRdHHrbe8ZZkt2yFNwakw8qRd92JTtJmpVG4J8ZYWChumuqxTiHbcxgDbvHvv79Ku54VNEuxrnF8uHJ",
  "key3": "3X8RXFEQqLkLQwY1GFgGpMetQ6XGKRmjSeMZSNujU9zpUkDmF5jbjZRSprjjbtbfTFKUyECCuhfhK8mzLmzmczbn",
  "key4": "yZVrfYhzUyGUqcgP7ukVyZzCciLp21w7SQtBrDQSkbgepnNRk5v8GQMbhJ66KXYUPdz3yV5YQ5geZKbAWmYaExM",
  "key5": "3Ezy1u5grqMZURrQ3U9vcEU7hWbJV51vUrFZFvijmiSebzEMhfDyHijKysykxKQfP85pHrE85pB7QvkVTWBjH23n",
  "key6": "2PdZSSe2DtEhFtmpgW8S4ymMKxKWsuL4fbwNnzLtaYVpX2UNagFqGvJD3vFZLHLfGejAxhdL1DXhDw8BLnPzhNTR",
  "key7": "5HJ7R943gZ6YZvBRJZB9d6hA4MZGQTfEbfZ2WBgBW4TUDDDWGeGuWD7bQVh8eXZcqtzGKYEZr9Sz4t5ycY5tqCrA",
  "key8": "igWjVcc1ir7wQ1NyRs9p73JwCCByTosJJcJofSViLuKZhcx7WhAcd6bgDAu6cWguV7gB3kKE1kuAnfS9C1z8hhx",
  "key9": "4G79kWZ5bJNDWupFTDvsZ2tgUuPZbFt6duVzCL69AooQdAH1VUtyjvbGb3qA3AREy9snZRykY97GHDit2RGzVYEv",
  "key10": "5w8eXcWZSW3aJmFyrnmPVi3DWQzoTgrtjZYAfak6YsH58Q943QBeznVQ6HTnXJ5g6Gds85fxnjqVZKAqRVmB4QBL",
  "key11": "3Lp5TrLuWrPRZYGBJ4g3J8PoJMUWgj9Aw9biaUSrcYHaWP5HkbSTHHJh6bTubFhp84dwthzs4ZFvuipCTfMELG8v",
  "key12": "jVVaoZnTGeLsewdLcYBhE1AT6YGkEFzaLJL2mieTV1vFvFfwAWP9YH8dAYTyfr6ZmbSKExJLtbWgVnGfngfoYXK",
  "key13": "zG46gN4notfxkUGFr2Zdn3U32UKKirhY7o9xvKvSakxwxTh2o6ZU9pvWpFgrR7C1k3YG21BoX49Gv7YM8vg7MpM",
  "key14": "4H96Can27CCjSrhLnE3VUtA4i7641V8SYLntG4R38YLNhwY29KnjveRwrBPUvahKXxow3h1G8bkYh6vQphbfV34c",
  "key15": "5y1swgcx7NygWQsPSNHLqwucY8cAn9kthTMiCEyjQL26RXdRDPNngtyQ4fY9UEz3z4QfJUuEJm9iK9wQAzv9dcEU",
  "key16": "5qnxXAmahfwNzJkkGB4ZHNPH4m1PKoSqmHtqyGhyTvyB2Fgr2ZgE25QAJm6JBZtPc2shtnfW1VxD9Ruxo39CMzFh",
  "key17": "44Zr9vD7xce69E4rQqmdYfsE7DG99NUhso5LkmvkEon8Y3qG7gzcH3bR86k97MTpNr7SX46gDjkkqmjVQEFidd3D",
  "key18": "3WEzcFrVohYJMwVgwMGJr4SoEKwAbu8yy2dgE3GRsLhZrsiwMzi2Dk1qE8PUH4VYhQTgHHnf6NGaeVy9AgpyVJn9",
  "key19": "33RWPh6RBt9n1e9eWVrwmEtKz1qNo3ooPkm4E9cNScKb5ZcUuku8kh4xRapjqWnKYx2jyn3BkubjsZcK3FHhX7RE",
  "key20": "3iUrVZpPgsJAWGGMo9RGARMmE1jrUoojdAFM1dXJiX93mvT6ofFRWcVEZMiEzGKav1GYjFtsJ371o9wKnre9Kq22",
  "key21": "2Gz32crAs6CMCj7aXHDbb7wzU8YAxBLaSjMtGzr21ycKdwJikKmv81nUJDs6wtR9DHLZGCd7XqAofHEuUyYbtaXq",
  "key22": "5L4PeDnHBMsXxQybqDhzsP5cwgLhJbVbMam3tBzZhkspEfnVy7SEuHjhAJAFKKtpY45UsLu7vtNTJ7GHNcRtVXx4",
  "key23": "7ra6XbxgmC97sSvvPHECGS9srFLmFXQmxhyvvdrLTmrWYKmFCKXhvadPusDhjYtQ4JHVjVPnH7SPGKHFf87XT3m",
  "key24": "5BoStb7ztLtwwnRBz17FaBjpSTxw5xsvL26i3LzFJtpB9wcyGZWL2M5ALsWAL82sPvn2DAUdP83qgZBgNCj1eKhB",
  "key25": "4vfWaSLgFBGzhU6JsDD1Ht4nLg2C5Km8fbZqSRtQk63nxSQZsctRBomKUVpUzBKhebbeXhQVohd48hc31JFkx6Pm",
  "key26": "5chYtbLiD22oDHNjPfdWzBTL4P39p1rsxcqXfs2sCV5H58yuQaWVUxyABnswscYZQxHXs869zXB3rgz1GmSzbhoV",
  "key27": "5PXWrKsPM3MbTmsiTBcfsMfxFLYnAvFbcYrwzDfoj7vWi27dY94uxp5QxmDAzYVV3HWD4C3Je3c17XLnWsjL61oD",
  "key28": "5qYH74phB4ttzabhC34dHrgYr73DA6yvxrbLfof2RKUF1Lrq64dFSp9Nm3AW5jRTo2awvXLrFGV5Hy3cBPMicDbv",
  "key29": "57V7FcUHfwdJaGfb4gdQi1aqkYRUxzGqft18gShcvU4N5818DyRH8k6CNXR6WCuoxSwvGiu2NGuCuR9mRkSqvxux",
  "key30": "2MmoRgAxTa8amXDRZumTVBnhSvnfiTufg57DdrGYcLB2VBL7DeY1D2ihp8wftcMyxgnBMjWYaoC3rKb6MSBjDXS2",
  "key31": "5gjhaZmYXxmiWKms5Gdy9irUtLMN7yDcrLHNCgpYdg9RpooR1Jwb4nmLVozwfYvECzsdaoZdSLi9sZmmf9rknypH"
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
