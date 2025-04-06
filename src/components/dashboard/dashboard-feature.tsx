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
    "4DvvwKoPa9dJorhfyNdB6pUe9ZoVSVa3AKnhjESygbz4GG3yE8FRCZFVUkHfzGMg1vb7JpT2pjXPYc9Nb429YCpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kC788tsV7DQqw6spnZyRohVFMHTK1URFEEVAungvkooV7kTa7ENFWfyugas2kJCx3hBYeUo8hoTH1KaTMqCsFbW",
  "key1": "4vV5zVWSCx9dJyUjaSqMrKQQ2daa47w9MZUvJUY1iGwt7Mp2CCppDBQcUebvaXc49SNPW7ypiM9eQKF8CU2eu3TD",
  "key2": "gacuRWqdnXdxf4vghbgMostyUKwPLdGB9Fk4MXH8Qt3erM25G98U7aaqseUcXxkN49Jqxq9yWM9GWPfyvPHrJeo",
  "key3": "4cHmvyPgkgPB5jUtbQf7vi1Xt1uwsVuB2VsyR5Eay7mZAyTGCiJRqPWCFqTDXKyzr8FNqxBNSQ3Xza8GT7VZMTZc",
  "key4": "hNXcyQbKbRgqq5W1yki1coymgYo8FkwaN2pwZ8sfi89AMoUsb7Y9aPUxq8GSTwFAvmD53Qe5zWqynM9UDbruHcM",
  "key5": "63VFEoVN6Uui1yCAUhXHV8URK3TaNQ1XWdv57FJpbiABumpESi91i27HLXidETXp8mLDQYhc5VZwhNME6zTtaBoM",
  "key6": "23av9aM3BB9VXM5DA2foGhTjJ9ionGPykwJZ5JQdWqCWYy4jDpwattszwXG7JUvZa1J2Sv7usrT43QUPEswmzJ3M",
  "key7": "2Ck7r1cd43h8Qfwd926yiPFf14sgN5t7s4DAWz6ybS7xCb8vXs848LTcbFMAsTdqEkPJXsodnrFmvg2ZBZRnUZ64",
  "key8": "2Js3nj3ZRZjb2Dp8ujMuzfyDPcQHPgAkfnnJHe3s9EBYG92ik6QxjmYfoEEPSiHo87kH1bmkVenxxLvw8bE536r9",
  "key9": "41AJL2aZik265BpZJHCu2m8Lh4bgmbhgdEU1qFAarzR8p7Wz7rwQXH6rCiF3yWZu5VNbSTmDLwwiXFewBbgvsuN5",
  "key10": "4Sejxc6uTLuZtjKWiN1D2vURQGrJQP9qr2wVHC6uD7yGWcbGSipnCpnto3URB5NepHMbJxPUrV4zujaZwDkosnso",
  "key11": "2go8VUX1gVFz4DqBZtCEVoNNFvGuqgKsLfNKPTabgcgodmwnMu9L4PPkLDnbK8iWsuvuEDywdsUxenyPpRjVRjtg",
  "key12": "5d89Yhv1u7p7GwBYi4J55YohCFwCV84tVyMNiw5aWXTP8RsGFHYxsBZQx5oaSBWhFZ9BuD9Yzxvq9pzdfdcBaw4g",
  "key13": "3BoBFNqL7tNpnK3pEJ5RnHvxx74p9XjfzRKrvMCErby5URrhFJegNpRFFSNp7MbtVZ7p8o5V3EaKjoPcnPUoH8D4",
  "key14": "QzC5zurz3k9e7mEQvt97Bbx4vrtuWwbccGBp2ms8Gr9PV22NYrdbUw9NmjxMAov865W43Pzz7jKjSU6zHzSKqE3",
  "key15": "aTDi14m7PqJEtMsj8bY2r6QtowHfEtDMtwTtcnnUSADCHUaTxm9zAD5Si52BPm1MnLpxKXKRbiLRsSRXhwo487X",
  "key16": "2ZLzVurBUyJUeViGmf6N2Yo5CFK6A8NKsKsM6SugG2SDZDS3UVoBqMdvsAkGvbW9vHNuq3asm3JgCLJ6JZ3jYp8W",
  "key17": "4Vp2V72hYFwqyxyr5hAXhXEX9XdCqEdi9os63SN87j6wFetLNCepjWonN78GbQPihCiG9Qz85XsfxksAwpe2jAiq",
  "key18": "2gAqLZ6VXj8zo74bSW4dfeFYwYJTbBP4p4X98HN3yKCwmgoopPix3yRwtEYH7YFxvkFzfTC8fQcYY4NWLhdNdrmT",
  "key19": "4iMZDuEvAH19Q1VtVdU9J8fWpyrjdFVcVPz9Tr4B7y9bNZBHM2VKzDHbipoCsJu48GsxKskqUT45ngyHYMehtYUP",
  "key20": "jzRA12Eidi5frQQbwJCiBSxQrZSZRax4J4Hq8kCRV8dY24cuGxSp5ezMH5wYBQqpKWL6G8istvtCv7ys9fQoPoK",
  "key21": "3TisMpB12i2Za1jGm4yrrePx6JAmHgiExVAvizF3a3T9c4cT7jaibexNMZ6e6RAcKXjxtjRqzugu4AMDpBScZZJk",
  "key22": "Ye66JVPywqWpvRVVBMm2ZLyuhCBm9jEzvnhXpANWXf5y6ycNHyk2ZjqegA7ArvaE9RddUCfMHf8j6tQiS7znKJm",
  "key23": "3Ao5AzmTadrybeZyaXNaEbmKB8pWiudJ1yEJNYHTPDshokpVdkiuJkzQZ4b11MDXG6qVrmpXf95gsjz41HMHae7s",
  "key24": "4QByw6By4XRyavpcgaq3ExkswbL57ZTFz3XTqMpoA39tRjtGsWy7aqGm9AidwFP6SGx1Umzuzu2MgxaFg6qspro6",
  "key25": "42mQLEtR1mpG2JnoCCzTwFEwLQ4EE8KazF5YYsted3HC7nbgtWHcKttd2L5JNv32h4bv1RmtLyeNggm7xbRBa46T"
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
