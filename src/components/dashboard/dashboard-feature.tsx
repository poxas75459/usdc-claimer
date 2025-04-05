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
    "UUiPNYWZFgY6FSEwMHvFFTQKojmgK27qdYs4EpnrUe8sgaNYz2cBrkBdrr2pQhU93akoRCGmb2pHA8eGSicudwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44FnisWuhwnzCvXf6KdTkD3Ycc37T3m3mKFes3eEudZUwwGy2ZxbRXF5BGi6kCKVJoqhVDDvNjnkMNWDbcddjtx7",
  "key1": "4Bf1nENhZ1sNE3NgPrsLyvNq6ByC3YHo4cPhnJDqhuHfvf9XVtTn8Hbuwh6jnQFHj4yGEPzUNdDwKB49aCfNZs2p",
  "key2": "pUejuRsYCyVrXGs91fN545xSHaH9ovmyrnr3Aycv89kXgAfvfD2Yrg1rMWcB9MZPhoLpnprYCnUdk7dcxQXreEo",
  "key3": "4seHjNDxTexfyxyR2MTfW5tcBqNHw6HNDVQLDBaEcVPL33xCTAWvUo424sVDQH6KobMN77uTjZLqmR29U28L4VsR",
  "key4": "2ZaDo5peGSJ6z9iNwTdqRSDM73hsieDpE8SoEUc7BqYMFk17mUvQ1h2PxymBTL5yQFEsY1kqu4dKhqqWGpp54jSo",
  "key5": "5iWC4yXTpxBMXbwNcqMe5AUfH64u3Pn8rFk1AF2VM4mNXuo188mjybmdktXo6zNXnsKNNsdvmD3tByUhDd3duYBk",
  "key6": "2bu2gffveeQ74pxpNbMzxJjELzcn6qyB8uStNi8irDbqDjCDAbxQnFwViJYaG4VMEWLPbFfFVcjroQkNrKoLpUZF",
  "key7": "4gKQWGFrWo7QuHEcb7ZnkYJBGAL58B3b7yQy52mGRTPs6R9qRpg8yVHWFmzfP4VVUDTenJbVs85WTaQHY4fNt3q6",
  "key8": "2Rnn1twtpuSBfu74BMzCkwURgVPrfH67GRRVeAwFAk1BeUE6VG6h1mgMJd4KtaJ9GSH3BL3cLm3Bu2zKpyc4rUe7",
  "key9": "3Aaxo9dkPzTir87RHmvygFDKugZTWMEqM1R88BaFVd43QjNMMDTahggQ9DKTc9xymvMiNZ6KxdyWAmRW1CZvf978",
  "key10": "3XEg7fpHSbK9skYykhM4sBdqy1FmGLgPE77JwPdLixY7wStYHDtrWaVCW9JkqqqTP5LhmvYUEk9BEvwc5hN3ej6b",
  "key11": "5nLnJ2uogrGcaAX7E4Z6ziZ2K378coqcD9PTqA4mYWqCRiNSA56VddMaYuZKVJmtDQ9x9iiT9jkXDMgy36JJoaiz",
  "key12": "2Zuhob2ny3PKwkVpJ3bag2GM1mBN3HLJEgCxfRd6gUeWvPWAK9WuYKwS8RgiMrRyTSuCxUPHa319j8UuAtVTJWT2",
  "key13": "3yRioNYEaGHYTkKJus7CdBDejuGoBjLMYE9JW3ksYf4GjJc6n8XMqCBE6n4rhn9PHkchgvqvE62yq9Rwy4HtSZpn",
  "key14": "5L5AQCCQQBgWXswGkuQpRoTWYp9niVopTdW8B1LNGgMQmvgGh7tyaifyWt7LkuhCGRomAbhGFcwhRrXLUU9tyftH",
  "key15": "ahqgE84yAFh7vE6bPBhF69JDTSMuUEFEZCKALgGM4fGvprPRqg6HembRjhCktkcGmzrCF3egw5TQKGPofMJZjex",
  "key16": "3DUP5czyh89tv1G76C1So4pWnjqhnRfy3WBAxXA4Sp7Ef3NQt1PQXXcW1y6jPkiCmvVVVftDHPYkEmGw9YggAtnN",
  "key17": "2urK4ghK5Ph7JvaJt22cEAXy1JvBGXg5wJepcSfWmAgfu1CraF5jujtCGDQfqcNq5Fjy1anHoKQJTeyKwEs7Yswd",
  "key18": "gMGFAHP6rPKW66g98AS4Bx5JRbL24G2jQ1DKJZiv7hgDymTKUegTA4UCX9wNhssAqg6Hh5rpG1CWTVUxsd4cF8u",
  "key19": "2AnctE1Tio8cgmJaF4hQHfyH6Gbov6G8YtbrvPXYBmNdfbTTxM1GiinDkAWW13cT7V64tgUNdGtcyvriPs56AXYd",
  "key20": "4bX24WZsuYiVY8HjckgazyqCUu5RT4v1zJojKKWASr1kwGhCatQZVxo1tvPLKGp5vKmDz7oZC9Bd5JyV6yKsPAFb",
  "key21": "24NfcTEd9Hyyg8cpugdn8qPCqLcnDWMhdKnBmek1SWfoXMwy2cCjnsGAUqY1XzUyGkpPapCKGCD2FMxX1QkWF66r",
  "key22": "onndwMR2fBEhqJLfqQys44S9Z717KE4hpckCkizQEDKpNssgLD2XRbg9oTRQWdiybNBN934zxc3DDGQm4DoU1Mf",
  "key23": "5mgknxnnhc8UFrkxUudSC7FNNWSxAiqvp1oCRY75zgd8dREdMAahbWVmsS3SojD2AxrqzpPwGDYzG99Ny33oAvXY",
  "key24": "648YcwdXyUW7uaWB17tNR8b4JnqvgMTG699AGLPCP7GtEzLvPQp6CFNwWcPro1B5mrynUGSzyDvsE7q5Qq5NX37D",
  "key25": "5YufhPVnmgg4BTmd9eFfPNdcRSrZLk83Uu1NXG7Dygv583uVaLzDLX1sqfGDZv6gbyyNYkSPRLiB8GJB6Xp4hTkS",
  "key26": "2xdG1tLR7JZ9LDuPRVpL7LNCdm33sbY7QVf5rN4QR18kn7Ly3WjAgQyo2KMWkcCUHXgdbfun8nYZCSYc7iKZoJeY",
  "key27": "ixyR3Ds8Jq6ZQ2qiPs8hPeCgWZGLdSzeCeP4s12U61nj8CkNcmMf7SsMwJFMAspBEzEcb3657CgKBqts7vaaTWE",
  "key28": "2Bssa2vVzq5TDrZMBHqBe7aKxN6ENjuAJSk2StFWTSdbbah1PmdDo6aPJ1gAkB8aSBHNDzpnEfKknLZLd1Sq6Cvv",
  "key29": "5ckAZcw4pr5uZozMHb1RrzYTvd7iDLev4CN3ZGeR56kV9ykPZpn8xByK9ESUuC5cQHMBTBsqLnjCTCyCRrJft6p8",
  "key30": "4H215mKXUZx1LSz49nGpUfkPCdEonek7ziBS5VzESSoFP9p3cWAb2KbjYqSxV5HTqFNugkN9Mj7chhp9rcF89Pki",
  "key31": "oEvCpHi4jhhdhBrqGYWAjuz9imKCE38EiX9jh75rY2qFmYgnw7ymNMAvsYvVAs6q3X4Bnvtsw1VoYWNypiBXiq4",
  "key32": "2xmxbrWRPbVdbtQcRjcb3hHUJr8nCJAnJMd6go2vgYLDM8zs9rBCwrbd6xnFsngjbi2LWGcB4AJfU59QYetxUMei",
  "key33": "3GZRbbjmdFnnCgR4MFDH31BuYpucgd26kzPaNzL9ZHrnPZe4Vz9nJRireNwUQa2MmuZmMQYe5YyJ5ZWihc8oUbZH",
  "key34": "3QvAkrf4eqvDzYFLn4V6aaqUPUWQLAMrC4ZJP2hNsNy1ynDHuyBpGRvZTw2Ugqp3QGMyo7U8MFfKWwzXkkaDmJdx",
  "key35": "5D62XvDpBhb2zUqUYpxxJBJMyauxtwJVx2h48t6bBkD7iEWnypMcYVsfS96m6nPpu285huMpHSKpQdZrhHghRWov",
  "key36": "2qbfKoQSix2TmfP5WPnMLz1Y9QP3mUaW7j2LJ6ABZsFz5iB2gcVtKTnDa68MvcZNT67V6LVmuVodq1Prg9HfHYze",
  "key37": "53BDg3vpgw3iF9VZvmVCrpQWE15m2jsjDVjnrZYtnH8juKys57HNHTXYBsYqG6tgHsi6EZmWDccESjsNYdutML8F",
  "key38": "4qvxJ7uwoPXfVx6wLQHYiS3sGCYgccn9LM8zL6yKNfjYGcVs3RUDtEBv8ZiFidnxdQWUPyX3PqTe7iHA7n8WsDXU",
  "key39": "57NRj1h2pkY3ZmmY1M6Z4T9UZNjinZ2kZbcUwzVTMF5w2rawa8wFYkovDqxuzvw3AkuieG9SXeYFM9aVSb47CtKm"
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
