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
    "4VnzuYgm8pPe7jE5vetKtoRnuSWZdpjNSTKTWGrkoqC84FCMCDCQwVYQemZqeLwrJzR7LhgCgSWZpAScaiTBbDwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UhcA4pew77D1iCvs1mYHc6PPRdatKY379sGrrTs92ixfopoZNsqpT4rGqddM9S4fufmePTSBEUxBW8zGbw7Fa17",
  "key1": "3d8piySMCL3S4KRduymkRnr8gePuQs5Hn5LtTCNxurjTiYbJqUXcxsiYFaVjC3dH3wJekaUjC3B8xJE17uSKYTUn",
  "key2": "39JdnKugEiv7daVM45KZLoAnvnxSJSgcA5YvKyLw4f3zGFsou8TvawFGCdcwQWobpZGQWR5HxA2pKC56wo9kGzqH",
  "key3": "2XPVRD2dSLzzQwderAo8pwk4Xzkp4hMa1nDw8oq7MniFwRwcEGmK1HTs6DPxzKtZXYGToZ62EjbiZ4EgtHCTj6sa",
  "key4": "5PHZFHQ1jMBn8JPYSnARuqPR4PzFC1c9VJPWPcKWDHqcPZcTnuaxCyb3zoaxtmjMYEpbsRcwwVq5BAF3hV6EVu9p",
  "key5": "2py7c9NxCx27YsWLyZsJRRuMYobacRH2bicUhCt75Pe3Ddx6DW2nsPtDRHnDoe1zYN9x7EVBpCinWVXCCBytPck",
  "key6": "563Pc5jn8Sm9vhkHXZiUBjwxH9dC6gXGR8snwvUnR4bdFEFuwB21vLRLP9F8jmWwjouKWpoVMjZbwtNSNrtaAWKf",
  "key7": "3LAqEADAZqDJQZDZA8Pogje3QkRbbCNKWfQzaaJF37wa1X77R4vvSC2Hvyt2RuH9Pt6vwF3F5eajv4K4fFJzG1bv",
  "key8": "5CAERNmGVRtEbxAMqtkK4PzZgitzbGxqwGk9vBDEJ2G7upzoz1PDRAfKb3jqY8VBLiUBMGmG8C2SJjAbwdMmu6AX",
  "key9": "45hqWjg9opYNt4xgq5chdwtxjdSbSZue61zWTBAMizFKa8M76MhELgWfgfJfwqM73dJnTbEkBUo2pU9PkWP3KamV",
  "key10": "9vbQT6VpiYqPT4mQ557rFwC2d2CbA39ENPrrx66HcyzzmzAidv5E2SKM2qsWeGhw5nGWWjFuDANStZq2b1kr7dn",
  "key11": "F7ucM1BXyULqJN8tSqMZCk79JrTbpd45xZpAxnKTTyVj77j5XQATwL38dwQPph1zdpaUUhEZznah2Ay6uygj68w",
  "key12": "3bsCHPsFpAHJViQorQqtrDMHvYeRuRG8Pv2DbmNoiVKrNb6em5gUM4J4WQGpJWhVE7Cuf1off293xdmb237dAmuE",
  "key13": "2W6FE8aDd5rXuaW8nE8HYwLy7zwHDYaNAB2dTZKZNuViD3GG4LoGbCRxM4izaqM2bmU1ddsxMQ4j49zVVKGAfREK",
  "key14": "5giAmeaqxQVT8dEt3B31vRTscK5zBEknUzevwGRnd1CF1H9rPsnhkwSA6kAznTSEUxyLCc6ifHmyPPeLZQEvmBcM",
  "key15": "4Lpnqf6DJDBqoi4y6MU7RFa9FkzgPcamtxQPJFN236Uu9JD3QW93Quh6kC2qYKs3oqtnNbzYnvCLMKg34K964Rpc",
  "key16": "636CxNv35jcr4hKu9ZVUeivoRvgeN3XfUSbtioo3zYKJFkVmUqKEjgZa6kJES7rawauMjPv68MqMFXvk2NVsWgQD",
  "key17": "k2QSpru3ZNQXBcUfJDXna9jNtRrzvUUbquf9Lg42F1B3rXN5eBP6XbDnA9h2SYFhqdynSQHJvj9KzdZxMLUfVqo",
  "key18": "2wN7w9MR5foWzrbPaq3jjUL56qBPppHyXadJsq6mLDf2D6bW26oXPGto1z5NoeNyFHa7Xd8dawpeC6NqP6Hi9ZTk",
  "key19": "3Jvr1GQTEdNDfJ6eRnY2ZWYpqL5DaEv5SkzaPe8viYYygoWUQFQfsYfeNK2znTD3xMRHzJ6ytuXFuCCHoAaeeK5X",
  "key20": "4LPXiYK1YjzZgMomYjerXTKh9mBnymMvWjHYbt1NTrstM3a67Gnq1oVxWGBJTuyQY6ENETV3EVJsyyqb2hPGkBUD",
  "key21": "2k3obkvMiV92B9WoP2gfC34NsrFYhdNCkFEH7PQwM4htZiQXfL5fF4JfvcNAm2bJ6AZgmTv5siNGqDCJMfXxNfzw",
  "key22": "5K55ydDUkuqXzNaVpVhtwy34V7hrTD2h3315BY4NGJSqMQoR8Ni37hFMiKv3PHd9NEYNnqHJS2zb5taaAXc8QA7F",
  "key23": "4FdifrRmhMsiofcLCAHQ8GBngkf9fNFQiLreREvEnRsF5XxgpxPQRc2FXBU5xQiGc6nd4kMzjKF9fAdtJHV6owMx",
  "key24": "2c7y2NVP5pLodo7UqNcU363aZo1ebYuZ5s6RZM3s2rPK97AP7s451939EvUbV82dd3wmZegy6YwddYUZALPioFfR",
  "key25": "44QgsbQnJPUZEjuoR2voEnodZeb6YQ2m54yR7bBCxGPv3gpRtUTw4rMqK1SPBy4eZZT1p9bx9L36sWuSWPCRR2my",
  "key26": "4iAuoszXmUC4vPA2FEEjm2cqevjwNotXbVJGPrtMc4BkQTH8hdbjcfFeWdVaf6gsccxwfpWU6voeC24apKCuNR85",
  "key27": "2vkBthsWJGXagp7nmwy44PFNrALeHijmCu9NJQEus8YocdrJcDGVxz1FSN3BWM8PWMLSqPMKLAksAXcshry3t4ay",
  "key28": "b6SEGvKu8JwRgKDd4iEoaHzMmQybQ2X4TtERUhGAPTDXy9gGkHJDBsEzA9UFEqgqRegaWvTNCbnJ24ebEPobn1c",
  "key29": "4rk1m3LgMguJYYH2V8Xi8YUpuJXbfruKrqR42wrPt3DxwqfgRhbHppxhJyXtGnwqo4cEUCyYRyEKdZKcaqZqkUMf",
  "key30": "2STaqSrnCWNrjszqdwNjPjgjPrVgaM7LgAWF5RMUAh6dEgnMyqVxZ5Lc6MFxt9F4azZQy6HT1DFoxQQKe8k8Ji4X",
  "key31": "4qYigYWKZfDFUDRFwSdZiq2neVyKNmZG1EXqMaMWMSkfGmSYF4k1WZDSJoSenNxJfFAYgm9Lt3p6MnpCPGxd1BDg",
  "key32": "3DkMnmR7YDhrecbzv6oAYghfSuFPbku7KfWZytF9aZsjMMisz1WtSSBCPo2ZuxzJdZGsUHaFEdg81dFRsvnH51Dc",
  "key33": "2N1RVbZz4s8oMJ32V4mLsazceFVgk3A5BuNL9nWWhkNXiGp3GXzVdX22LL6bQfinPRGLiibCX26U6wM7H9ztLUy5",
  "key34": "3RZzDKxnU6hhKpxwFkSihYAs8r4fuJq3JA9gC3Yjbj5got4SqrThNeccB12D848q9C6qKktGcXQ3JeVtyRNNvNsZ",
  "key35": "48T6ca1zD7tSYjJN7UZAZopFo7Yzn7FXH9o5jLAg8pTm7JseoKr9oioejYuwSvetpabz7CikZN5eMzJRbqypiybe",
  "key36": "4C24g9abnW5HNz7gp63dEPcjGW689RPm3vVrKNDComrU8HWpHo1KrpiLtwe2CFdVys2XpBGuZGmBNBoLxbVX2xso",
  "key37": "52oWJCSteWZhD4WB16VR52Ujojz2oFYLBsupQ9LWTAxjRsAUuc23T3z6XHoh2GF4fqxVzVEhagdzWN4rSSYs9jpB",
  "key38": "YYwEj6Qi9T9gKTGbH9Vrx3zgBBthCsgScxntSRq14jr4gdkAdRxtg7GUmfxS3Y54u7kX3yhiiyN6GRS4eBkeyUG",
  "key39": "2n4dcK8uRvVthauwWpt5pMbm4jUz9QqHktNR4i5Q4ss1YUSfXyGWr9qWZ4RKbFzEtTUcm1XGAQ679UWptnZ6fENj",
  "key40": "5zd4sekLgyRSQb3qvhTQrgdKZKTJyFzLoVxQzqK6Bm7Gtgu9SWqJZNuYmPWY9mWEGoHEjx3Ze2bBhzSAapec5xmY",
  "key41": "4iRuZFHLHUikJLEF3MEUWHKHUb64bnFfygS2aE1LgK5T1JLZg1fSv1zPQDrJMhdgRwx9m8EwPNsm4KhVCySvSr6p",
  "key42": "3YJ1ddm2BAB1p22SAD6Ms3KGrQTVRFWXZxA57tdiPoJGE25zdJjFmAnGybKQQ7pSCRjUpUtQQLRMZHcaBjLjrTW4"
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
