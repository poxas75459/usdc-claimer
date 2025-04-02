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
    "exBaVHyFE7amveMnX3ro2JDkVnkgqyW8sh69vih2N7UFT1wRdFn9w31veeYdvgVqQXHq8pe2dYJPSh7D4EG38pE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BoviBRFP97TCuWxCQWunjwyfio3y8FuCXH3VhTFxpVy5Aiq6E4ttHkSAVaYsNmgGnYb49dDHkhbdREh5i2JYiVN",
  "key1": "Ls698fjKVcN8GC5ygpciXWiqqVGQHAvz3Z48iVxcBfZpLX46nXv7nuXkFYdwyeqKDkh1o7t6B8x1h9L1tUHVw7h",
  "key2": "5aYQizT9j9MXjvnp7BUgixiTcEAXoFQHQDzJasdpVZQ52EH3ADjoPyARzZ1P2QLMy1yM6GUysmFcwaB9xopKSDJh",
  "key3": "NeDdqWF5vCf1bMBPMSs7UACr3uKPYw9WK1BoN14nSU1goWMUTDPSxKV9kejAJgYnNNK61JKe3upiFkqhaSGka1n",
  "key4": "4UmWXGeKsDR4pMSEwHYSayp4YSBWPGaA1Rg3B1fMEzEw6KAok4MjEbke3hbbtcYkRyUBfiji8aTiZRNzAfQsiDiK",
  "key5": "sD9PvGo3B3W6aCiRWtN4dh4rHjrbL34Gc46kD31GGbXP6959nb5mVPXwXJJJXtTqYucQcFU7WefUyu2KQygXMSe",
  "key6": "488AqFaUwzC9U7BaiqgaDhwkatkL8LsPzK2iH46wLiqUQYzr7ypERFfcDY9g33qLmgMUbxUey2wyfBUqxfYddcKL",
  "key7": "4GUryfg4hxZgVBE8FKMhtARRnFRnuH4zFcJFwbFCtKUWRec9TNcXVygqcH2NEUM5ce4i76AZKEd1fKMTwiL591Gs",
  "key8": "4XU8D9KQTEFZzPy9kd3Jv8SYe8hUb8tiyKe31AiitbNY3S4Mt98j6nt4JNUgri87cSXdG3eZQ6fgN57EqabEjJdV",
  "key9": "2Y6UL4GYCsRM3H4J5MUT2qPxkme4uQMZWvW2wDm25agQEdSNECsqJoUfNB3CumSAvJuLgq3rpwVNyUMNwKeukgLh",
  "key10": "2SyZ84NB19KsUKEEFFumtQBGxuqCie9ezL8cjy36kmeH5XMU9B8PcGmaP9SogBoszuhGo4B8ZdaQ4kJiQ47GfaGy",
  "key11": "fPkm5sipRgSvEvJaD4UGH9J94rALNWDBdgBfaV7rfjeaigpsvZkCyoDBsuGDRFjjoANg9iQSHihHL3JVcAX3bFB",
  "key12": "SDXgRGsYy71d7yFpbiSJn2CChAsfxshwRr3HP2vgWDc2NYBriLQBiDxL24Ymy9cPm49LM25HSEojcbrVy9Mi5iQ",
  "key13": "51PpX9DwA9oSTSakwC6xyw3Vxtu8affQFnna3WmjAxAnjfjax1YRhDXxUSxBCSFzD3cR4zBcwgCUtAutqBX22g4M",
  "key14": "jMB71KLgrbwt3x6LXzFt4mSvNA4sbMr6XJ3Fd9EzmYpuHXWVSNxHYaame1stuszWLpwHzfx23FXEvxBQUm1UPzS",
  "key15": "uaTSRwroMTJYMt9rhWGkiUkmW9bCCpgB6ADmwHnGFoA1Fy7ccfx4AC8nWdfE1mhc1Lqe7WyzbZc24L9q2tRViRo",
  "key16": "4SnHKLAypWtbGLr8EQEeEp53C53GmAsor6jAE73d3kEm4L4S3kus271ABxNmvimqvLudVcYibGmFbJQSoTbWW4mz",
  "key17": "247c1ZMJCkAFCcm4eSEMjXroHoM3TxBSKPRknGtxUYkqVhZe5oV86E59PcDHVwVQAj9EPG2iHJCkmJfQMM9eYQQu",
  "key18": "3F34zF6Ya424yS1wD5p3MAseB72Xdar6a5jt5cTU9vwjBBo5n7c9o1CWDsRHrt5iXpWD22HkZWR4gPD5bMCsVHfs",
  "key19": "66HSvx2fYUzsZKJdNBXM9e7g3Xv5xaw3jeNu7vkjM91fXkSB9KZuE6EKqD8JUg5VkZS735jZzj72QGiosdtvGG8W",
  "key20": "4DdtyaJneHBDnrJgE4CFqYCMSFE2yHt27BURQjjLcYqZBvn6hJdiLG1FzeVhkCky6EagSdVcxaXhZVXCaUMJMcir",
  "key21": "5CmmqcLCWxWbYKwbRcXjrKRfv58dyxfMkCo9UrJMXCP1xBqiVSUUxgN42gp27dnZHZ49NA4rDRn31EJ55RNJwhf1",
  "key22": "d6poYFuPDck6uRT51KUjye4LPtK7vtdMntJmqBGoVaFziEX3TmkwrXU3zmj3s3D2yeBVKLR1meGDtWWpJWvAVvc",
  "key23": "3PR399bHNsnSakhfnG97ktMRtCe1So6CKk4zMc3V6SaRZkTUZDfkYgErfVVY3vt75HWkumhvaxrgfUK11vf46ci2",
  "key24": "6VEf3XLp4BVwFaGZktMoArunGy1NgfMAkrVNyF9LBrEGShbdi4aJM37GsZ97NTAsNeHFTSTgfTsewtnwzXXJeXx",
  "key25": "2KQfY7bpARmw4AHsVKMCRvZrodb2XX9M4eW8yWcqRj8XKQjGV86egNYfwjtXJWJirxZk3ZvmJHFX8TpKDjnccRh4",
  "key26": "3YyhAG2VBcUYdEBAqGDTYPErNNZwu9mBW4FoZbyPD1ZmzMxYQqahLABYQusduf86rpKsczpMm33fo5MwDweiZNAS"
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
