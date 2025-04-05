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
    "4B1JYoqd2wV9sRnHTudbFV2kYyzKVH98YVjsthf9k2MYRRkfWugi3bEhUyD6JFa2GBEajD4Dv2uvdcv58WahHQc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HzKeZ36YHmvoXfu4YXr3VAGXwHvQgaGX5mH2sL2stN1BejEXchQ7dscCP3JXt4xxh15FMtWGntcq6HTAzLgvTnr",
  "key1": "2YSG4zckLhXNtLwtDCZKFsXPMd4HxCoTPg8tvLWpwSzJzjycQZjvpXQ1NBBste2K6HJYcUuygnPUEHgDyfgghfJi",
  "key2": "3d52d574uvGfx9mAM8ikrWoQ2CjnsdQV1ZHgb83rqChLeuKQMLGjkjqkkUqnDh83H9Hv5auSREJsaK9yeVUTVx1J",
  "key3": "5gRNz4aUd7mxzFZZHNoSDD9V5wjj5gKDxUy7EPc5x2FnNc3mQLRcj4JjcxEKSNV2CkE9ooAoMYC5A8rFtmy2Mdfj",
  "key4": "4xSuLPj1VQenRJ84dWtnKj6HKkby8hA9B9ZeSsBaVmAUXQaPKv1jb5AHiGnpNWJgPpi5uaniooFxrAnob2ge3bCR",
  "key5": "P9YsMZaPjcKpmdH2922E49xF9zAP3rHNPzZPZadZwwCVYUBmCakQHJzVKd99kST4Y5DyYQUMeBe5GomiUSwuLoP",
  "key6": "2EnwsKQtkrCDyULgqjbCno1Z5KK5BsWkVXqyWRsdabYhJgohhUn1m9aFJvUteNAuYmtERSLEQ1sx8Kmum5d5GUA3",
  "key7": "3DotX8ERwAaFHmn7MfUSKtu4T5LvBDCkuPDDuQFsKNM72qjMf6vzEWuCjnpipgKLFH9VgKgkdHajoAkKg9i8PAbT",
  "key8": "3FdXKAUvX9hU2eHEdKxTYQPEo7tqJfLgNSXxrY8KnG4AkvfK8m64AfTUmPZddLFqcFnBiKMGux5ZGTSaDuEX6UxC",
  "key9": "2JmCgAvAdGVv5P1j1mdChFaxJAB9VSuqcDa9ZbaNGEEZnu8iQswebqZZTNzM6FrsXCwpqhKuqBczpQktHxVaL3Ky",
  "key10": "39KhMmxta9JRKfTyPwX1bbvJDy8FaAoiBJv7R7afqSaXT9DDToFBxTUQMsTq3vx2R32RExt3NBjTfz3m5Hg7BrhX",
  "key11": "5rvnmJAaDFr6stH1p4fMieCszsHRzZiKvSDQR8WWBQHr7g6TZK3ZJuq7UTUxraC63Wo3nEmM4q1jU8AzJhmCaGMu",
  "key12": "3EiabTLA3XYEbacR96rsAGMT87eesm1s4sJ254eeJBSqY2UB1tdEHBrTDzBmGyQNrWk3XJM7usYThcGZZ58ZnJdL",
  "key13": "625VpsepSXcHFcUJcYcGfKbZNGLmjBoYuQuH635eUFT6ArCd11QhgsJmgHv7BoYe79NbyFKKFtLj88Yrx6E5Xi2Y",
  "key14": "58hMfRfeFJ8VT5gJT2sRNBakqEiacCgNZmwixXJJWTCeB4b6osvy1eXhE8HHAda8iRFcDs1CZARyk1Wq5TSoarCv",
  "key15": "2ZTasvvw2AZ6zWZqWuLCgnMkWmB6JbLAVe7H547gF3ZDCfcp1fUehuJYmPFnHBo6cLeDZRPUQoenDVB8EnT23BHi",
  "key16": "4vAk981XBc5a4Zvi3TE7FxQ72WKzdSCsi6BS9FCE1QKty8x2FtRJt1KFoCSwAnom1huh46VLUPNSsquajBmHsfxK",
  "key17": "3mbWicLiRZxp1ez67YvZyGhifPVoRHjq2qT22nmFdY6YqLkj4SEe8BXbFXxRi1bYmqVz37es9c2HKmaEP5W7BcjR",
  "key18": "3pCVJj7wCHgiyjw79DPkLGN4DfFekWa8Pvf9i6nZ5TE1Bpi3Gi22GHwdGUYnK6kJ5YGwvnPbsQJXSmq2R4394JXa",
  "key19": "TZET6jGuCC2wcn9vB47exwuxL2a6xnMv7krhyhiKf6sdkAsPvtfQtGj6696WRr55cVQMENDqr1noNUFaMYgGzyV",
  "key20": "2VW8W71NQu8YbzUviv8MJGe9csizbks3UvSNVWZndxUDBXcdg9LQeYPbkRLrdDok2PUUtPdU512stUcpHhDTmZAj",
  "key21": "2LZsVNNS2HuJfseHovABs9ZpWD1SHBLybDSKTxfWQfEQdec3qMi7SPa5jvFqq9JYxbaqxut2X5dCTrFUpusavpmM",
  "key22": "n63736hCLDZw7SURhLS3x5v4rNiFk4gUiCKtsL7YHN3FwMkkR9f4UfrkMgea19J3CVGZoWnaKPmTJJs3kXk5vnT",
  "key23": "3ZZQ7yz7TGCZAsoeQSAa2JMA2CKaWtueELhxucB5DEpWe7HhNgRiWtq2zCbJHU8sW6xzG6P8R2xagydUk9GFh2pu",
  "key24": "awnaV2T1tHqHhFWMHoxfToARdBPBnagRnUzd4ehUHDWMWtAgN38GRBPW9GAWR56Ahb7oeu9mdEBs1Y5xAAhDRbe",
  "key25": "4Mv5mLjLqzu7hJtvSNKbRoZED5kkzbsPassrzJK32h2VvLfh43KN5VDdmcQnbN7xutwUs7P6FkgCuRJ1kGvaxHpi",
  "key26": "62oxusiVn3G1JMyPcp31KdFyKrRXViaDtKM3viW5YgEJ7JnPWWcmJaRRsiTHgKhSj8yQxGRTECJkEzvpSHcM3tJg",
  "key27": "5YMFEcWJavn6QGK5fFirhHr8v6nFRfRJ1zS2jhVgjXUPJixD3zMbzMxYQr5nPaotoHyQvxhGwPfbxhYik2Z2sqoi",
  "key28": "5spZJxynboG138wZSFCiUohc8dHvAmFUok7yMjmWhCfkk9DXzek2mx7bHNter1XRQBcgGqGQKA3mL1BF1QRLEsFD",
  "key29": "pc5htTanJ5jbvBGWZVHr79jdMspX8hd9TT3utNunMXN3r5XFvC2oQBsm5tYEVRfUsHy1PVjuh1er7Cf5LJ8V3R2",
  "key30": "3zYUJipj1Ku2a9NMkEpXJGZyYBGUwrTTbur29WhSTmZxtBKT37aQ3kAkVCMAu3CaGcBcnz4YusoDjuvX5VSY6fRq"
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
