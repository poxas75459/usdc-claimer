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
    "35R3Rgs8jA1D29euMaSGkytqGUrd9xJorx2N9nZzRZxiYEBXTUzZQcFyt6AvV8zLnHgHMZFUZVmpb5a69Kq6GPrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "npzE6aEDF6YfrQJc1cepRd9JA4T7kt4vVFPdtPZDNFNsrcxsjnbgjdBUgXqEbfPfbu69ydrk9yJcT9Vm7ynycf9",
  "key1": "38j1yiX7iQKuRojGsR8ovVcqtS8GzKA7Awd5xphMFbAEyngEdS7iB7T9EtTgqh6MyQLPUUpNtkcHT6w13SjSpfYy",
  "key2": "2UaKesqyi16dow3XweGMkawRpfSkh8mU2jbqLjdfRqDcg1JfAyTxp8dZZbD8qtQRo55PiFS1Rb1kSSDqbaoLzcqf",
  "key3": "4tRTnY2fqF8ZEmGNVUvWCRcgWQzpDcPy6DP9e6jt53iS5NqYywkTnmWxzrntyK6v51zkGt1gtJa2aKAxmszbtF3Q",
  "key4": "2BWcdEDMiy6DNmkPCciho1pbqC7aH1iznTwV7vkg8DYf6dSRFn5F87ESYZAV7UKHJajnzGRgVQEyvrupQR479Ers",
  "key5": "DzcbGVgvZ9473WP9NoMPZw4LC4fdRc1GJiqFXMGaBbnTKZ8nM4NCKfvoHYiAVFwZ3ia1Bo9t6PbeXCk5P1cc8ty",
  "key6": "2wF6MnwS461eDYiybMY9BSjrCEbYyN9VmdAcRQJHvLv8jncc6rjFAjLGfnAyUww7e9wvoAyKeMou2UCyqGRm9E5V",
  "key7": "3nCGdGWc4UYG9Ev1p7evzTdQ7FT8S35HXAWhf9D6TW6CZAkJtKGYodo5KEccFx9p8H3iR2ofDRw8jJJhXhUoKybp",
  "key8": "2KpEGXez8vj5xffGMG6xqeFJSsgk6jkwogbYo58dujtevrGWhWAUiGk4R99QW8rRmpYPZS2wm68XjQmzPs3MorRp",
  "key9": "4u4ZJm7KQDPsNTRvHDp7nktFcN1G3YhoqiuXNcMR3ME2jYnsvcodrHnyH64iJM6S4NNzPBXHKLxqgUjhxw6a3odJ",
  "key10": "3uwXEG5REaZU5t1tbScKp44J3DPGyvwnoLSz5zGH3aNJYfR1qXwVTmFGTt7JqHSvmxqo3k2TELJS2vdWN2gmpbTb",
  "key11": "3iyvyDhEkCXBFHiJodtRTzp2kjXMZyjgvwcSVWUu9rUyCzS9V1Ue1JcPiCEYNFNvJ1JMYHMeTt25nCNwwwqiN66r",
  "key12": "2D2q6FRoJfPDvuSYhbcLv1kAHNDfYdNaYP6GMjzoRdYBFeGWWeFD7KdAzD5cxExmNorR2FMKAe5CgWUAHTSv89ei",
  "key13": "3Jf89dPtur4MFCMHKubL6dag86oUEwuPPFMpr4SSacanW39dwbCFf7jj6hsQTcv8VePshV7n2WwQdYoK6DYY3JYD",
  "key14": "3LodtzwoVJoLyNSCJjGrPhYk2FZLqGgSTriFRRoEBBBrQDXxkwrYW2j91xDj73MQxobXiaT8mdG2iWAP3SiMAF64",
  "key15": "4ymWE2Mk1DTbnYH75mNkKXu2Sje8CQbHLNGTqYpAyAShT3zD7JacLkmHsZkRW54yB9AHSVHm1AWESj5jMvjNym1x",
  "key16": "4yXMaLgPA5FUjeDAE48AtmcGFhwAUtve62Qia72r2tzDJCLVq6Gf5gAF5mbag4LiKBX1wwQTg6aq6y2NSb15ENTZ",
  "key17": "3kLcV3MWNZJ4dFgsEAzaPDbUCvoGszk5de3FqT136Hrjk7Yv1QZgGWnSbLA1QxH8mpLs93Efz8fWcXRVvjdrxJez",
  "key18": "4ypXZnDYXmuyiM5uy5Kuc5uAzprczKoecAiFfvJAyqf5E7cchLdY5NKMjCeXe2fMLD47SsWquR2LUsG2jACaYWyD",
  "key19": "3357mwrDTfF5a2gcihkuERwdFmc9vq6wZ9J4oUEPaVBS9QfG6NWZRf8go31xeSBbkyGvgyzBvgp14G5rVT6YwD9h",
  "key20": "3JweWJh1ay2LgrZqf9HS8i1xftd8YxGZK8zutPL6x64GnvgRLPL97WkQfR66bD53Yg5B8ALw5x2cTDEinJbRdgSk",
  "key21": "2JT9dw1V3ZxJMtFVn9MpUQgnNFoAKvkejZYsnH5Et9UDaLGxrU6JZbQMxcj9sxEgi7swTeWdNchuT3FNBps7Tmc7",
  "key22": "41Kpyse44S7VKRx7GydVjzzYdL2MgYSHPyc7rHfShz7RjdnEDmQ9ckk9QwqbcSJY8ezogBVVUFTcFEZojbKnGszQ",
  "key23": "3g2nnX8TKbkN1gaewfTLe9c4EMV1nrXRjEgjXxA8H2LtcrqcL9XgNGWNDzxNPC7F5C6yS2YEG66JT3nyG5BCfrEH",
  "key24": "cGYYaQkeCvCnRBot9xqMmgs3iyxU2Rt97NWGCkfiriDWYnVqtkXN4sxKbGDyM3SSVf9Dx9SZoWrNuqo79h5Gvpq",
  "key25": "4xsyDoLXLMR5BtgamjQPpdM48sF8Nh3nK3ixxc3ifC9tP245XtUUmLqZaNnkX9SZW1x1idATohTf8wBvcDECH9EF",
  "key26": "2NN81eFSETveKoGcGjWYZvGEAWZn7b5yQSRg7jecn2FaoLKB7aBkFBYL5isaeTu1u8heAxTiW4U2TyGsM3bn5g8E",
  "key27": "3CcxJPPLRCEjKDUxd8rDbKiWVSVWUJJeXAUcPFqqxBT2deuh9Fk534DBHZN4jkVs6X28p7hLR2qB2MimBVz4dR3b",
  "key28": "2rBc8R77KGpoNBkmsvGqpoBTa9EJV7Q3fCiWm3QPgVN6RuJmrvTCzR16TiDateWXC8bengyaEX1yvhyweSqU9jWH",
  "key29": "5rMnkoFPGxXXVLL5EGiFKeRy6DEmsxaPp9ZoBCRYm5T8U9Ci7qSZ1pBGeNKaU1swpmJHRH9fs2mxiRPheUh6MKzL"
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
