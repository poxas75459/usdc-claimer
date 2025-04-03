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
    "4hD17zsWAh2BH8gyXeQxAeSfAq9qcUNHPVjnL8SKGAjgkv4EgfQpoybgMr77zWqQfyCewWeFCYJTHMWvqhm8kDSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GAjSgyuuQXBpPziS4GRjPrvQ2XfhktM7sZXuiSqJSuYfhhHdyWnQBWoxjWHLZETtxDs5rigpJubRNmYREHpXDNb",
  "key1": "VKjGSKmZHzFjCD4kzWJux3dqv8ijEEB1G5cyKiAU7zWgN7rAusK3hzJV6TWqKG94nZVt3qv998cY5tcRv9hoc33",
  "key2": "AXdrTYE5XRe5qcuAnZoM43ZJ7MR4vejCBDzi3TByvLmU7wvbdBoE48s67HGrrJPcKKuLnb3asYxpGLwbKeLYLby",
  "key3": "5TUPVPAPooKYjvaLioSggUWXnJ3hia2N6nrwEZ18dRdNnA8DHiAh1Qq48U78XFPTyvBTqUxywM4QcKk6g9nvY5Pb",
  "key4": "2UGQSdvt2dvq9YUypinLq8SzYntiDbXk97brigGunonNvZm5sbWEd4gbJWRh9yiFG2pY1qWJB4pEDPs1Sb8XsgD4",
  "key5": "4jCBw3fMwRVQgbRtNGLuMJksRSFDFLiR4c7vwRgKmRib6jZdVwNwoXrXU5ipN8YEkNFs2SmNubwa9q3oHMoBePDX",
  "key6": "53nmeaVSBsjKaMuvw4NgMy1ztgCukm6JkHTyCcTVMzChU5B7L8DrtEXToJiX1LVMkELTXqfMsyL7ksz7eqpq3RJE",
  "key7": "5nezxxSTdLQLsHdzs86LhxDyTuJ5zeUJn9U3APkyocKMr8LSNinJLs3J2uQgmHH7eziZUr4BXiRE3Qtw9HD7Gwr9",
  "key8": "23SQaHrXUac7YYT59sbYecjtR9vqioA7Cio6ywucFjG1tVxVvmvYDYVn9aBbixEaUVGwotwq8kvjwpXcecSNevm6",
  "key9": "4hnSjgyeKqKwwcvq4inCSpveYEwJbTDHKsQvKnprNmCLCy9LADzczNRHWpuv3CYT5jddfGZaQrbisg5AUnz9Ruxj",
  "key10": "5Ly5jmFjX5TFpfVy6iiKMZCwqTkDj9HThjhGiDAvMujhLx8d4XBudSMvjNVbbmejcfCykVc2gBVMacJgbeNkrUj2",
  "key11": "36219fjw7hwTsQfnJfF1XNwtvyQHDZWegy3wjVnLgZyhLuwRLT5GDaP3Zu7SLrpMsgQK3WEJprCmRypBz6DPytEw",
  "key12": "2yhjwR3f8LogjgfeqzaMD4sfaT1q7jhk9rkxQd6m3sFfKgkfiX3rsGjQsE6xSuBotXPfaz8dp81spkQNW2uq12Mk",
  "key13": "4Z8758obE83Y7VrGJm74KaneJjPEpi6sztLeadRVRBmtMCEEZErDHFKWKfQybZcvrQvuTfmRLYvQeGi1rnt9xJow",
  "key14": "3LrxEV24DzAfTnztDVd5Lnb7qvyoAzFAuTpMb5Joe4vJBi6K7vvcYb6VcgKS2U3KE9SxvU1WWqpxX4mshfmWZPof",
  "key15": "5xGaTmCGKiYkZhPYbk9fEvDV3Mj3gndoQLitGPngVFXrzKBoioVHU3vWznYym9sebmGinBwdYPV5h9CXsjwMHDdN",
  "key16": "5FW9bWBZXwNHL9fwLoc4qSLoJEJLNcLgNoZ48J3ybe25siFpKF6quDZcvAa7VezZqxTEMAdkDWiCT5DwZ3zftmWr",
  "key17": "2VyMXckuVcHAgc23RcF5V9YD6EvaKqn1zsMc4QuhczyagTL9SZRGfDKkJhKBAehJKbxkH6Nm6Gj594HvfJHzfoQu",
  "key18": "2iHhcN5XB228HpEjfru2aUiWkV4guYbhr1ZP737numP1rNNQidboZGFc6fUJDL7LbDcCwY9eP9qVL8AgM7NE2Ss9",
  "key19": "Fu7Kdfs8zL7sE2uKqGG7qXk8hVA9VW1iK1GREcbibgeJ7S4Spsx4ZPaeBqc9g1yKnQEd5wV2smVZMWqGaLXdtVy",
  "key20": "4aKy2jgnhnXMg442NUMNGTmR76LTSujjaWvqwKB46rLpwZKA4dL3kUTjXeEWP6q4dF9BYNWuCGBxxLnNA45nvxFe",
  "key21": "3Hvh4nZxS95SnAuhN8HWsUeFRHgRLkzFxZ4hmvj7NwjfcBKdD8irpNrSJ6vuCQFzSsYWdeVShD5mvquWvVACZ53w",
  "key22": "3v1xyvJzmHBdPYSoDkGsaWoVL2qJEjfreTHnETB5cWLW7xvGhF61v4V9GdZctkpFjXbHuLoRgqH4Znph2guz7CiW",
  "key23": "4W9HoaRfLUQaua1b9AVMgoJXVq94xbNBXbbL8c6MKjGhFSz2j6xYLkE8HVihrVZwizLHdFUNzbkyzwxAmPd6qLCQ",
  "key24": "Ktf8qnCyks1m8RZgeCf3MjeZiUWudd7Fy1oKqMnLj6XwxQnSjGv9MzNKZQ5hPAFrWKH8updSSzjptFj7ZidmjGG",
  "key25": "sh2Mn6HAh5VMpiLfDKjhbphqXidcdaA9wmV98ve3X35qe2akq1hTQfHXJsYZw5zY16A53VvLsT9JWe3Q7bbNgrZ",
  "key26": "7uZsVZLnVwsiusDnTKXBz1N1QwiudfYRb1GCUDkyZ8PjUBvZYkkLhhEKErUj3LcsPpUiWeP3tL4EmStjBFSzq9J",
  "key27": "2Ui3JgL4omruWvwmM27VPkW2FQUb3bqGMzMWFh2x2JS4eR4ZSjxrCwrF9wXghv8zREzzbsT3nhRMSmVbhbmSqtW9",
  "key28": "41eSGkXQsfPc7adRRf9Hp6accRDuASKUrC6WS5WVK9jweHHtQSp6KHVUZ61XGtDcMN642M2T35Ysme3fTH8g24Eo",
  "key29": "5zepZWzmbMQ1n5Rxe3n1tNATciWhdBWNYaseSudZjTebhB6khEEcCum5YJwm4EGbFnX5dUHT3xGdreexJT5bNkDp",
  "key30": "5USGQCy6bKPsY9c5UXpJwcuh98g9vMGN3VTuYYsX5Lmy2fEv2bQUJoM1aFWC6qu7o7CbD1AYzU4KNWCxn7XmkuKT",
  "key31": "26zmRh3Bt1knjSeSsEg27fXBMXRqF4yq1PZNBVpqiV8xnktuHVUGohGFj71dbDLN7NjLnj5tz5kNi8EqimgwXHSJ",
  "key32": "PuNp3twcLtPc2zgZrqR9VKmPUpXuFamQnQLskhuKKkvVRMqKjFGV2c24vJov7tCwuVakazFSUXTMSJygYitJAie",
  "key33": "2saayFkZKg3yNjEzWbHs3e8jiHrujdEpZhnvzVr6zxeZHhiZe2MozzvXjRgMVoPC2bhF3xLBdZbsTr5FzcL5BJQF",
  "key34": "5FQgPNkZewkSkaStCWUR7CWiCrCJYFX3XTi64A47XWx8NUwRKwpss4btAYUDwDd1cwayGLgeaw5MGjdY4DiKWMqZ",
  "key35": "TKh5eFwuY2wmcAmGA8ao486J9YuLxDkxWJXxX5o77giyyd9napxB593BdJnKgu1wZbVS4avVdycLFPSNw7yvhdT"
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
