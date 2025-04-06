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
    "5nj6bstHkGiY97ZKBofPAgmRxq1TDsCsbhuJ1AAZkGfjQaW4obniLZe2BxUUgaye97wuEXMCzHJeVvSKKbKPCTUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sc9U6RzWLdm2L6yotXBV6JfTKFStmHUhEJgGZe94mBMS5J2yihn5jQwzNhNJyB1c6A8Qnzf9EmJ8RKxay3JKriy",
  "key1": "nxpVvJzW7WbtESLPuECrXNxAH6KHJBUfSUXhYsdqwQ7V4N7kDJWaogtgxtCHgtts3hn513iEhV7jxD9F1rdyZ6L",
  "key2": "SAeabDKPntajfsCrw4XCmvrUtKuQiHeYdFyKfiainpbAR5heRXu57FDDVd14iutrJnSN4hZRvgM1yyyLP6zGbVj",
  "key3": "2fBX8WUH5sckUdwePDF3HFmZuW61Z48Xk1eJikGAi1tazsRa5J1zHpoxa6rp6Jh8y75eFhHT4sLeKZYvrYx6ZSHK",
  "key4": "3bKy6L7Xzxv23Lw7AKH7FdqXvF5JDDptfiUM78xRTedc8zPGbfeSYK5SHs1yq7mCEMDA8B3GkjD5Jnp1eq6ZhYiZ",
  "key5": "39nvAGZCpgaKafnXeeAT1xipSYVcpi2NDXoc9qaciVTe7vEH1ynxyWeHahujX9NfzEqKmBYycBU2UG73f69zdTRQ",
  "key6": "3pR8jEaeHCJ7Jc8HgZ3VsSXmJN4gw3cD176Y2KyfkdfSTnHyLYZNy939dEsiiTngT52o9rz1Uee8w31J26Wve4GU",
  "key7": "xLsynQXzAPwidgZacV4EeWhy3xE5aoUGhzqGr5ge5PTCAD6wsR7FKrmZ78nRYC39y6FRGvWqNcDKL7PE7EQoffz",
  "key8": "3VNADJ8PUKK7QLgdiDJkcYvSYAypzEMBAA3ABG3sBrqup92ukioM7a9rddeH52vR17zwtoArA6tGyUwoZiG5uWLT",
  "key9": "2o7pyvM4s8rGjvATSBREPEtxi3iSUGyq9bw7rRtwcDhD9QZpG2BPyXDyWCGQdM71Na6Z3QAbzHQVEoAJCVfSYq4C",
  "key10": "3ihrxycVBmQLCnTDHk3VBJCsr3SWL7RfFKQuPek48JiMoMycub7Bkf5dT4kAETPqo9ffhNoHe7DNWRhGr3RXpbym",
  "key11": "2TV2942ydsAfXUdWB3k7Q5mZEsKAFXAxtqHBKF3AsGhN7scRe7z8WqtdzUerSSTSPPZMyawrN7Q1oK1bdruaSx2x",
  "key12": "3hk7qyy2LXAiQyjJFH7ehad6PRq13zCeBVk4ZoCvuKQyzejZNeiV3hohQqR8UfVKmoLpPRQMHEV3nSwPKXibk7JU",
  "key13": "2oSgrWMSUJXTEE26aUPuehVLYa1HQAP7CbvmJBJN5PJdrxHdUxdtEU3osGGdYJsivamr92cDt3W6vuMxct7sFgtb",
  "key14": "5syJbzkoi31sujFAtn42BMGw2tKpcYpPYig2TqiYjHE5Xu5U8mNxqMmqWPZxhj7EKK844Catwt7bFG8zCR7iWybM",
  "key15": "3JZcf3htpSq66wZb8KyJqTxeohzupaZau97H3jb18oUKPzWxsUdxzV2A9Y69XRgz99CF4brdDQiu7RKWraugVXGC",
  "key16": "2xS8C3vzHxMfC6KkQU9K6agto94kAbX6jmaV485tqtBtP4w6gVR3WdDhnmapa4P9wVipsZoQtZKDsWQuWNqLWDeP",
  "key17": "4i1zfY7Uqj5G8GMtMjpNz8crR5dfXdCxkroebjLS5YBsqBdPRV4WvKhgqFiQ9nE7RGozRwhveJJJ4wQHP7SkWxx3",
  "key18": "2WA9GMuYrF5mU4U7KfN1yud8uPym1uhtVp6mCbvbYQTRdPi5C4F5wteJa8yWjHoSd72oWg4gFBadzjf3GBMBJ736",
  "key19": "4TYX82hZ728r8RF4kSMvbgEpya8Zk4ceU2cM5RRZQJvbaFvkuNYYssd9AepXsDNdm2qRsRjV4bEXZDu36pscLe6t",
  "key20": "66WH57FSRpWZGNGm4o3sL1AjmkFJETdUXuLCvp4u3hsGig7tXArBufgRneto1ErQM67nGwLnQPuGNArVX3bfKoY4",
  "key21": "2d428PGqj4FZ8eepEVraZ3VX3tgNxAZrEkqgETkBLnjmPGw4BnTMaA3J4eKNbvCNaiknavFauASoDnptNTsfTiez",
  "key22": "363zzHdqoZeWTaFPUrNSMsJtKWmYudx58HyGoMCxfTRfyZiMDbNXpwFxCgjfTtS3uBqF4EkQ1JQpoETBNYvmJ4x1",
  "key23": "2XQ77HuWKZCDyj7a14GXLvH12JAMyfjC4wzBJrW766mD9HkQeKhot7QeyNJp4pdy1BQgacLdPzFKNBpNgd2RVt7v",
  "key24": "5g9weiUaQkMMrq3MnhihynFaRJCr4dxzwRCKEh9ZL1eY2sF6BpyBemdGLvcChFTrZLN6T7DdXGK6taZmqoos6LYU",
  "key25": "5UAF8EjbT7PbGryYEm4otPNreMZWWBuykPGBuH7UF39Vz73nQKftqx25oJxsagGSR7moKF5gFjBgeg6A5vHaf3mD",
  "key26": "2Yc1r3JNEwMLyU4LwEu3CQwKMp6zNTP7Uok16k6xc4XWYDm8cRCRY2tHnq27ntXctUo3QiQ1TwekruyuzfvyHjRC",
  "key27": "32MZmQqYTcZuKLZ9ufwQmk7vWJR8QWfvv5J3h9NGhAo45rieNcPpWSL8wbTnobe14jiaAtjukzkPheekYUYJTcRs",
  "key28": "2gbbXwQoL3g5FoTVe7mM46QJemFQKGWfKxrviEiWiQPYHLqBJ6THPLEokv1JXRSrCUnBmBykkFiRmsMhA2zV6eJK",
  "key29": "3oDyQztRzfR7D9t5zPdzRXDcnnrB6K1g7RH7jB1CydHthJGXEpRydPLe5EWMEbFdYYpyQvnLvXr6o9pNWMc76KLH",
  "key30": "3W3ZL2mFv27kfDX2E837rxoyQ8TTt6eT4tyogSLPC431UM9QeTce3LkpA1Znnf82aWtSZeeLEL34XxtetRUcFzfc",
  "key31": "3dw3YQKJHqPk6oA3NFrJQpq3nh11cwdc7vqSRJBYBuZHiPFBRTNYmXwC5zu93fdA1R8rRa3uvus3GECaysfipF82",
  "key32": "3QaKHugveNbENNFa3CRzHKzNWuBDcUFjx5mYTue3uNRDzCSfFUwacJJKd1Nx2svXtzh5sYrSV31LwbbZKqcCoAMT",
  "key33": "3q8MeZM7XhevJeKP5gfroF6Mv2e1qEv42EBArvnBvxwroYb7MpekCmFcggmVq2SaLqEaqDQcEXP1MZLxke6Hqqkm",
  "key34": "3AGLkQFnHZdvzqh8paLcWnD2gwi4bFJJhrPe67TgHN5XWqWz3jpQKr2rS16cxkjEBfzBUyeXqLr8WwAPi3GRcfYr",
  "key35": "36FdvGPWqKt1osgFhzWXKyy1asQHCfdx57Q2FQR6Z2Y2SSvoSMKdXRP7F4URX4aJjD1e1wE2xdN47C6eBS3ntHNx",
  "key36": "kVd4jJSuG5NqnkD8trhcZmZKi6u7EFvLUMsGHoJqQSmRDQ16skx3kWh8ze6LHJaXYsp1stMEQNTuKq5twbaEeAx",
  "key37": "5eKwCcPSagfxWHMk1NwFhfanR4uqoZqaHSsN116m8ddBJdeiGMLMhbohsQS2CUs6eMDKp15RJRaya2UdLgenmPWu",
  "key38": "2LZohdZkiGneDXhYRgHECYQ6LdgbkzxKoQgVyN7SZJ5tT4796CP9xZsCPA4x78GPQDy1uUXvbxqmgWSBiivSyyTL",
  "key39": "4tZqa9ck9pyqhmDJrpzJ8zPMrVn5BUHGKUbgrhd8syfPuaTnWE458wBTrgwgk5vgk57zpPpfx6BPevm7WLNUSbaW",
  "key40": "3dtDwhapxxFJ5NMhx84QpytGu3GR1ft81vnTF5dJMXG7Nhz2Xx1cpa2X2kCejYdtB45LFmkGR5ZWTt1Ebh4qUQMA",
  "key41": "41dKS8w483L3i4QvB4S2YLmKFFwywh3ecCPyWRS7izfHZQ3DJ5EQbuJpuohg3vhRnMgu8JxMgqAcweKvo7M8pkk5",
  "key42": "3oThopq7JrjyMqLaH4dXFS7qMWAZGn7XcXtqkuDoKcJpVGvGhwXE62GN5hDP4BmvLKfJr2L31toKX5Y7jjpWnMZY",
  "key43": "5655VSaZsePCTdLBKJAS6jDkTHeWmFFxWKE7nbD1Vse5qxDE6ggNpMPn2V2NRn2ZRnJFi93p2TbEZdYH9ENbLZ8z",
  "key44": "5FXLSg8j5PJF6aCWDZUYDBdrfXanhsH3WiJMf9xqYzpZn39CFyW2pAyaEnWRPApzeuNuMSeuSEouHe5d23bbUsFH"
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
