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
    "38wpREkW9DebmbauqcrSqrqRuAWkAPRnEm5CneThrqEYs3YdHsAb8dsh2jRV45wa28JWduEr7o2hY8ajaEn2pNKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eqYLwZ8yuqVsuR6ENCorgE8foka3rHmUSA8bjzZ5hFsHTWokBJ1gsnC3CcwqKECk4JK8tdyU3ffKsrAMXypCKir",
  "key1": "4Tb1tneFfCNKMFjcsob1x65B6ZftCHnzKFXhtNiAoDK1jETGsPRixMDb1kKKm5HqWgkS2eJG6YLvCaGSnBHb3LeA",
  "key2": "55EHE89N73PV7drsDSC5oFDsS19iBRNKd79xC9PpGQrUsFu6SXR9GnmNXQUDucy8LKt5yJ1myT6m1YcGsYkUsSxu",
  "key3": "3puN175BX8iQMpzDYjCV3NCjYH5pLAqaSa357qU6qyxAAiBShrHu15c2Dkw8CXG6KZSBcHFZTeStWGtN7y44puSc",
  "key4": "RThytfoexUbvvC5ZRApXDxgQjmvtpEcuJxS3pvrhjjR84ePQBSoD7EBUPXTZevDKrB5p2LjuLWXt6PyJFyp1nXV",
  "key5": "5pMGz17prjaxZXSnFC8CGq8rJZ4gsj8TTkWAkiVXtCcbhtJaEdWHqvsXpNGZi3mxjMWcTxNebGRVtBfG9jYy7i7y",
  "key6": "4HhMD7HGcpQoxHQXw67VbH86WMiafMqhM2zx8VdrR6eqmzKmhqQThRfnKRuTkq3JVg5sZyjjwsbytZwNjvj3H89F",
  "key7": "3dhf3bJ3Gm8EL3YedHsDjRttKw4D6qWjLdHh8DhUS6jjn4Lr6aLS6NJFzTjD9yHhGcLGEv1V8btq7wPg1RKtcCoj",
  "key8": "61da81UNEqak2sC6mxqRJQNnereAC9WJDG2ELXjbFsFvUsbvfHPfciod6xU1E9psxxRRf247jZ7kpB6nXzrbqxsM",
  "key9": "3CrnYrG8F5CbZTtNDsDtietUQiFVR46VXWnfD5UHcbhwqtkqCKQZ2VaxFki93wHDq9bzYfH3mYVddnpwGMw6wv4d",
  "key10": "5achKXA6QvT4wnkJQKQNxZDUXtuXMZkaozaanYwjZmEcgt5xuVyLsVMLPp5sznGJP93orthpbtQe3tW44sZAaFSL",
  "key11": "nqJfgCQ9aZU9VXAUodQK4SKnPgezHt6WvXvQ5fcc5EgVVMPePKAEwrhbnhJP8VrR34giHLYddhKLv1BV62YAuhm",
  "key12": "4f1UKEK9vPiKn5JR675xDCf9b64rohPpMty1iPXBGv4Gm5hvxLqKqwuPiN5acKcbvTDszeLn5FB1A8obpGWzbvRr",
  "key13": "3CykMZ22iXJEvgYSANTwVu6R1B3wRFogkJ9BMfwdD56myeoEQFmiJpb96G2ynmrDEeik8pxN4EcGrPDZ3CrR3z9H",
  "key14": "4uDGRbSYJNK9NdhytQdXeTSxq7uQRGhohE6bnaxaic4vgNBhT4fiMEHg43tKPfYedbwUugazwsZzfQC5kSL3h3JV",
  "key15": "hnFBCSFDfq9MpAWzcpe8r5eieMJZvxtVYk1zTMwGTedygBzZtKFijERAiRJHhdQLL44c9K1TCWhMCC7NT3tiWRC",
  "key16": "4K5XBJ9412Gsg96XSjfccvrjJKYf74cvwL8eAkSN7cxS876HJCy5T55NS8qtcCQBUnuPVhWZuJcUEEuQG7vypQDs",
  "key17": "2FcjwFiGyoRn8u8G4vKfu2fYDNgY4Hd4KCBcEzAmoiYzhJojTiwaTGjPpVm1kF93vM2dMWxJD9fH7aYpRnotEUWm",
  "key18": "2ZCHRH9vATzhEHkEAq7ERg179hzWrL1k9WoduwdMw2pJYpupAqNCtP1f4YZeeYDKjYsiq3VsAe5SVAG8wV1P6bdq",
  "key19": "2oxBHBaQX9tgaf4VfwcWkb6S2BwsCK8S1mSBqQmfWYMXtYvhuwrmVbWAZ98ELXtLi7Mi2QvVCTkBWVr4cGbCM8hj",
  "key20": "3G9sZWHHnnMyREkJBr293mh9AajdtRLsTPjpf3FSKUwBF8r6bWFwbP36ddRFSMkuD74pJg3XNQoYDXDTL7jzjEf7",
  "key21": "3NBTK3BXHb32xVShX6AE4R3bxzKFgoCc8zrXgBu5gAGHfifZR2S4gfHDCvxMGzjcxahedtrDzBse8ncuXpEj3woJ",
  "key22": "2T5Q1HdnsGE49hbb6Pn4gv5NRe5Ni2ZvaeMXVzYgNGWQYdgnWbVvkrH76UMFhDotuHaq6xWUt8ooVhDbpmY2Hphu",
  "key23": "Dnb7hTZWSuXmkRepyyqFQkLq4CkPcqfuCJZ4di1ZUjUSC3Kx2xn55Q7sBU4utuVPsyxW1yicPHzFgkrUeK1aJmy",
  "key24": "2zFuELFrvao6EvHqtyMqDGDCsMHjZMeTW7Srh5HcZptu8AsxGRC5nRzvkXyWVZzRkaS26op68TrcJfnj6cC591cZ",
  "key25": "5KYbBx7skxAVCdAjRPZ3WBxngdDv4whtdXoVeBXf1PmAgnebepCG2wm9pbCDh9emhzvp9wzTATypFKd7QJRiWZ2X",
  "key26": "4bsBtKSZsqFQqtuqMKzeRaNg1z2ZwmMrhA4gTQeEhHPvbafR97eX9QYYfTkcESGHRqErvWBuvmxbsPZEuoyco9UZ",
  "key27": "3x9CVDLZ98YptdGny5g8joU4maeN5uizA62naap755iXiPqdtasAED2246PSKJ5cNdak43ZXLUQ7xAGE7qR2xjMt",
  "key28": "3Buc944bmy6iECztWxturJiT9fphtz2uA9917jxGELP9UEepNUp1h6mjS3nXve3nGiw4fVc85epzKAfE6LH2BLHK"
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
