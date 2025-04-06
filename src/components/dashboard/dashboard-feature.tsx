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
    "5tJTQ5NiBjcxWz8y7MVAWKXaz41G264WzovvL2jUe1V3LuPYwTa4FGPTRUjRRjnfqx2bW15wdNA2FZWARjjsDgYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uyxTCwGQ6GX7JLtjYchwrp1MhHHonQoZDZpNc3UVZjYCK72Bh1VGEyrVRyooyfLYMTHn2KndGZ3SWNthm1sQMHA",
  "key1": "jR5oi1cypYKzqYHyVFYTWQtRHXFs8vjNfFZfpKER9B79SKwVsbDrZdHZbv4NbmBPPzC5UFNhAFmKd1SGTyC9RKs",
  "key2": "5RXebjP5SmhLPNtvyoa9quWv9wxzxNgEn7uvRqLChhgH7QvvrekifcNYPg4DKzcaxA4yvgwdteUV7nnYe7fE7L1C",
  "key3": "iA916qihDvz4BZLnAwbL2A2m4cA1WXUdQnWoriRdEqsWVevfNv6gxj6aM6nNV5jKkNZ9CkL99WMFQbZEhU6xpHC",
  "key4": "51vnWbRNWUqwRSVWuxn7cfgUrEK9FP99rtpoF2nmcnnzdje2ZU4EmmXsY8kyaAAmFbTFWnGEJ1atk9uAxGTAnyCB",
  "key5": "3HpBdemyjSWV9Htz9MCN5E3mb9WXBcy6ehqZts9FeTohQQST6C7uVsvE4t29BbXdfpWV4BeibL4LVqNbSFiCECZv",
  "key6": "5LK1kLtRhmtFcA6NSycqZWmaS81cPKoS2uDHsvSFUES26ju6kGHtYZ7kN1iuaR3dM7PXLipT8Hw1Do7MkTTBiPki",
  "key7": "4dZHksWBBdhcR2qQ2Fa2HwZgUFhBtNYyA2i1EUPpwy5PNAaAsXR2rYKQKBzmiSRGZPqb6BisN7hXQqTifvLmAM7e",
  "key8": "665pyNWK5WZ2x4xAUdYE8XbaXhhMWWk5EzmhfSWyYajaSTFd61T84MPzones5WG8LMknX9LMzMLt6uzs8vn6f1kM",
  "key9": "5McvncF8fs6W9mjpiLfyAGbKJJApeaQotvt3kpQvJ4f18zNF4veYiAH86iee7CfnpNrK7HjMqt5jt8WXD8Jk3dcf",
  "key10": "4yrodHkdVNWoiyBCcKgH4Lz7vbUVc3CiFfUma3JtGigGgefgyCoRZkym6jzNA2CWJgDFDvnqE9aXmbyDY4zhgxVV",
  "key11": "pyTbB5L3F4z38fXPoD5xn958oP4dFZ23RBb9nL4LN11WnJLiWxovg5T9T52NWWs2uzqdoDjEvXqmrMYTPzpkU4o",
  "key12": "54A73Ykt5y8xW1smHvnji8zhhqfb2EeDHfLZ7pDUtHdGSoCoSyzMqwNYst4Ke8Q1tXaTV9pEgufPetrRv3JoSV36",
  "key13": "3NM6vVcyx8M33ryeRv1ppvi4PKGqHJEdA5pWUPV1vhTxLFBnd65pBBPXhh4LBmgdffZCoUVw5vbgqAC76akQWDCt",
  "key14": "5ZAjPtVqFCgpggKWiqN32jHZ8BuQpYfDQ2gGQ7KetwE7HAqYRXzmtf9SkyTLB4dg5dEWizWwyCNrWdoxii828Dh5",
  "key15": "gM7Z5RaqDD6Ecxb8thTeRwjkwZwzmB4qz7sKbixuDzXFeNXi7Ksv5Cfw37xmZEwJQdVEomFJweDLjipiTgWvm3U",
  "key16": "3SaGppyUKCeLBGGMnY9PE2zQS9tT89ieLQrQqD7kgzyYAG3ZMvF9n8vNay6mUa3bKdwyamwzPJ7i1Cka5ChUE3pn",
  "key17": "cJNqHnB69JLnAEdifspc7GxWbmsUCHuzBh8K74nLc97A1c6zmYbuW9wVJjiY6d1HXkx8Z49QupMGEWjhtaNNRg3",
  "key18": "3UB9eLYS8gp9w5DCEpdnjJBrFrzBkUMN7LxTpJdW1q1wJ2t9HfkoVvzxJbtndnt7Mh4npNdLnbPWjSjgFZqddJbP",
  "key19": "yJ1uX2bF33XQ1ddtv9DzXF93iStnjuoDNSkXHFkoZVRj9a3j9tDbCyDKsEzGPmd5q7csKXBvfcWUfGGiLNfmWVg",
  "key20": "43DwmWyqPrJ2n4excALAaDZGNpCSL6qsFxfW95jChfXsVCdhjLiHuCb8Ay9DaHpL2EJUyA2eyxvum8wCZwZwapTz",
  "key21": "q39cAyZNEzVrB4xdi3Dmyfbqc8JcMJgE3AHsypS1eR9fs3eTvCodX7BfRBLmqLyGMQQfSVhei2Nk6WUepBVkHTG",
  "key22": "59XvANo4WKETEkkf4kt3Ha1boamXceqKkG2pgCo7jLaugVXUjxUnbVUAfowiZFs9gTkxwVx7EpxkLWrXCagH2kef",
  "key23": "5UAynuJctuD4AnC6WpX1tXitVtTdFjDGrUCWunSAE4KJJy2jsKEYhKunrLhf8JPjhsPdGTsMdSSwvrkFGhSAjG3r",
  "key24": "2RXWNYx9hfTqehbfgQXMNEvDr9fLDCU3CCE7pBzxrPJ9qazPeuZyyLNj3M5d3ehcBdqUsfyyZCpMqJG25nUGqpB2",
  "key25": "65o391vgfebppRDzFbFp9CVqWruVcjQ8sdyoVxCNZHgt4DKpyP9QfPnxuFXrXbCr26BzdixKtXRGJSAQNnHEx1v4",
  "key26": "4oFLZCkS2bxtAeWhxoTmCB32LgFmsZ1QdXJRakQzra5fnZw5pfJNjTfNNETrfWBquWgsgdw837PxVkXeX8SrWCtW",
  "key27": "3Hr3SFBLS76rE6RHR8U7R451finbkGM2dBb3dZrggm6Po6yM3K9EfH6XfRD4J2LQfXT9a455b3ZsqFohA7XaeaFe",
  "key28": "2fpoZkRsGih2DyQEzQu8vXBzkTpcCVdSLVGiuPdUa3NxXrRzsYm5Fe4fpzeZqMmknXBFsSX1h2AtUuNWTELEDZai"
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
