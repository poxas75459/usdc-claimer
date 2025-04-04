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
    "4oe6ENskLaSTga6DGgquceHXFAomrkup56xU8ZiLXgXp9ztmJ6qQbXLjDHmb8hyMTGuM1Ss6tSkfGuF9hVsq9oEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BQJ8vaZdv5YcA5oifsE47rTpzvbVcUEip6XdsyB1QicmuhedLf7JXk54ekX1wuDVEpWsY4BhEC1PWWbDuCo1syt",
  "key1": "31JFUtePdvuANuNbvZLSYJJpariQ3TUFvGCUEvq843bWzNKnXQGHrioqgzqHhGdwyBxjvUqMFz9pTnukBTrymqr6",
  "key2": "2GxirPnNKuSxRUJcLW8XDSBWPgwmDwhUpQqMSKQecdkN92uSJCNAZjy2m2Pk81PJ8Ng8SWhH7Q4nLMuNii7dfawP",
  "key3": "5gnVCAEKtypngdKM5WJs4c76oTX2c5YuMbYFfsHL3ygvfVyrJXTodcdMaF2xpAk72Muf97ZTe7hJfbDUCm1x15QP",
  "key4": "4dYjSSnGweBagTHFHMtCQp3pQ127Ns8NE9tcMmKcjDZnbV3eUWpyBYNhTu7yEqtMEAK23Mx27C2b9eByokWopHTq",
  "key5": "3PASV4xqZhkMNqtP7Xho5y3y7bLUCND52mqes7t3XtQsTyK8Fs3aQjDSgACFURq9mB7epTZDyFJELR29v56c1h1T",
  "key6": "2TNYDeep7NqMX9hY33bLjYWdtQ5eDbRRqgxQoSHo26wwWbGmMzxM1QndWd8FLxKcp7ayHyZVkAntN5F6tySR7E5A",
  "key7": "2sxUehvMJUe2QzTGgB1QC3vgnc346TZTeDjabMEo5aZX16cTqXRCJsYXVqBTyerKjLDE8FiftVBJhL2gy7bcyyAP",
  "key8": "4SSpLDrZfVYSgKLc9DuTCiUYz4SoopaDXzN44AykV91sCmiZXfUD3M2FDbrRnKgonvCDqkJPxt4vfQDfnzVBxrsZ",
  "key9": "4zFXWTvRuNXd16JGFH2Qse5T469JMjFWuQ6FcUKh8g9xcyfojkWgmihNfNREYnvzKhgEU3FC5F3K7SoNGWo19Gza",
  "key10": "2aNWmkTXHbDEuNgCFC3V8Gx2CpH8uqJEe6BBUTzdoiUymDVFmDU6yeH3Cpb747418JfovNuDppHw2aodP29srUQX",
  "key11": "4GLQFHM5txKd4njYsh7D8HFxW3zGjAVP4wysqS7kqfg434WkdXMgAgeeEz7fJbswFANPJuD2VsSfbSPyfvpabkCo",
  "key12": "5NicL1AtQgcGc5syMCgRNRXHkTn2grikLw5z4f1BGaReVLwWTxTJ6VuAGdq5bjSDfipM4Q9Vq5YBq8gHSFCE3LN1",
  "key13": "fj4jwKKNWahoFQvFa4eQGR9DTCQLSDtzUTmUKRhjqpn4KahbBNW1r8CMeqD9jMZ5JNw2QSp8FoBvgq5jNShz3am",
  "key14": "5Fo9oLYowcCjQfTewBv77PUpqPC9BawqkzksQBsrXXgSiGwsjUgaAkh4kEGSVRqrhVVaomLFfakmXm5Lg9mKJrao",
  "key15": "2noppKot78edUDGQVW9HifDvkV8UN3gX2ntVHpfS57u77LneTzZAgsucuwW22LWKa9eFP1JFWfMAPtCuHShMJonV",
  "key16": "5h3Hmy2wZcFXHNA2CPrByfCzMmkkLjEn9PghDv5YyiwhCyyuD42rcDSS8fskKiQgKHnZcmyB8VGQUvgQMWV7RyuV",
  "key17": "3KvZ2SbZi6B5UwbqgH9GNoujWebtvqmVfSb9jvHJBp53vjnwH7aQ7hRQBYyTQiEsVB3Nn6PwCSXrwYcFKWWL3WPg",
  "key18": "5iWfz6TmithZBcwonb7uCDZTGNhmiCbkEbWnQPmM7TJ1bto76PaUqRSc4bMVBaS8Psz3pzeKpxJEX8Cotacijbxi",
  "key19": "2khTJY6BpvDHy89CA1BKrAo2pJURVqjoeezLnmLFW36ySofvSEwJVc7sfLkUHEwXfpDNWR8wSt8LXFzm8BxcAJZ4",
  "key20": "5qG12hvVAaih7VkX4rSf7hQ1peEYjJNspbGhQKHDYELBVacpjqkhvv9iFSJ5xGFJV3iNydNtLzzEqg1BHebFhAb5",
  "key21": "TM8r6EMCE7Xrpv2pcdgmnJ5JopjdRApEnbMCq4182huv81VLZehr1HQjvDBZStjzk1vw4ePGqiQHic93QyaVveu",
  "key22": "2jFZJWLeG5KmRm6y3DMrkHinxPpndMtSLf8neX9aYfn1w2vVwfXugjwYyp96Yvz3Q9w7bM8eLcuyGTx3bfoEh9wC",
  "key23": "3wJUKdRAbVSmAMc4hMy2rh6T2szdawfUuRfAo6Csy1FZ8wsbu9TXbuBqhWZt1VXiqpvqdwJxcvyFpwWKgG4CUxZn",
  "key24": "4cnb8RcTCYBxYs6hEj3wqp5PtpvYh7M883aWkmW2VLto1dg5YG9AH3EDaWCruVemqaSmYHJ8JShELoMSdba2ePkm",
  "key25": "4fmKcTxp9gKCr5JJAfrSB5sNPJEZLUmszbQEv6dcABPGnFgbkutP6bVEn1NzxChw5fYm26MGoGG69wj48rFrNCmc"
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
