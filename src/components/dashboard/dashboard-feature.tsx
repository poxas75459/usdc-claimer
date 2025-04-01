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
    "kEnL2uGPrufgxnVrhGWjWScnp2VpfHDvRJ2FZAGNHWhdBuxqxL8NSLsMcWsuCiFgmuCsBwYwTJktzPWpS872WuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YUxCNGC6bi58vYV45NrhwXNGCGyAHc5zCH7eGYUkgWM54gLcLxFLDeW3fjkWeM2C7ypvBXNRHCFv4U3PcQeiw6K",
  "key1": "5LLAw3jhEtKAqxtabWXwiC9mDibgf5hkhv4FWuPu6bRztdCVUh4MXE4mgzW1trNxtMDvieniUtzHshJySgGQ6y6T",
  "key2": "2VM4iqs78LXAzmV8e8nRFfGzcWpcV7483vKAj1QnQmMxD5nZbiAp8SMe3NV3RKPGCbwnYG7vNhcHhSfG9rgAXzZN",
  "key3": "5uqnmuCHAspmVdoLtGjgwVJ8R9JGEzgC5h6nmH6nVix9F1MAs3EmVJtkJh4wH3fx6RZH1UKNa7pUNENc2ox5rBTg",
  "key4": "k6caYAUaz4tPtJ1B34brs3okVQ3bSRk84eSzbh7KgkZ3TuZQR9dgYPHsFSXNsopUr1YmagKfYSuwrQ1x9h2f9Hu",
  "key5": "52fi9H3J4e1vAHFrZLZrN7jRrWnPoFuBq94WZ9gpFxH8exzBpZZF9nkretasTmgab8hRRk2Pe2cFQ3C8zY1zwCYD",
  "key6": "4y4UJqF7BRGiuxGcNZLxYWYJ4DFPnALYRedE1zCaJLeYCY7FYnNo5Fm3V8RB1uhGKX5UG47sxEaX1NNErW1R9LNU",
  "key7": "41R7Jphgt4HJLk2GkMwq8JGeoDfUvuJ7VctHrAeFjCPMuXYTebV12neLncPL6joEnqn59NuJvRu2PBBTpXaYfsWB",
  "key8": "3rFxAUjEQ7wFRjK2uP19eBB9UZNBastZ3u4m4Jx2wyGnWjRKtmF593M5SW98jebvhL5regah5RDCiGcSF95gJEbF",
  "key9": "3B844YDGxnDxEQyEQ4EFxn6gZVmysX1t3ExRYFyUcLXmyAuzTWAzFL37yA6eds89t83fAX4BqofQBixBWV1xFvHq",
  "key10": "3J6SNg9pDkrZpB6cbWb44sk5fMFR4apNmT6qKx8DVZT3ncHrhPfojxwWANendb9WzYTWABrbh5ArAaDyWi9kktXs",
  "key11": "5wWjuksef9QvWvLFHnMvhPHDxhXHTs5Tpp3WTXQAzJGJY5j2RzzAuqLnv91s6PFrX1cT9zEAij2TDfeToAPX8WiW",
  "key12": "5odgLcHojsBwTSbBXxhhwT7nPDFtqoY712qbm15LPJDc2MaF1orhupxDSeCc25FtYKN1n6Sx5bweyMVvSTbV5vJr",
  "key13": "4wHdCW7y9Rxstvvx9F6LTooAiuhpNxfDt5HJJicgwFw3GP48dUn9JJKq5gKYYYdKaTPrmShxbbuqbpWzgquLqjcY",
  "key14": "3LZVzysyDWaqkj4aqxKBirpSmAsnSPsgh57sg9PS19mW9xd7ydm3231zBbApsmS5ZRfnMqEPuxJETnX7ndpjgxbJ",
  "key15": "2TMhzvrRCp6AsBHET9YnxfkrKNZbsB33weGVTjP5AikXdSxLcysmKsykGGh1oWaZffos7SBYJDmAqWJyRWVoRReJ",
  "key16": "3EGYN7FVE33hsR7HnAxkJFWxkGu8Q2qeEXgZX8RfN79wbMPrgpatqHEABLVFWYu7C6BHZoCTk6BTTvcBbfAo2nZ",
  "key17": "3jX8WhbWd4uNPrzpZAsT9v2wBHe49pQWZdME1zvqFnuPWEJ5YfEjiNtT2QkNaeQTBMvAJ2AbLnaA8RHzghHY7QJz",
  "key18": "32kyZaY8b1pukpMjV1SeEm45UHKLYVjdC9gW5E2ozyoeWYormf2shtdc97eARTTipBWKXirr3xoKgAisLiMGCfRc",
  "key19": "6e1sbCT3E9NFDUJmuLaf1aWW5qK1Pdycy5fS1KumATEzs777e8NHJho1GCririMswMyW1kXVKzgKwPjMQHzPTgV",
  "key20": "5Q8o8QQeyMhGrmL96y1gitu5xe1Px9KEcK6np6BrRJ6gydRjW54tsxYCziVtndxF6HBCEzwUSkJ3NkE8ivxhth8D",
  "key21": "gnBrtak2gUSzPkheRXWCr5FRKiYfwFgY2tDhdU4hJHKm9LhMQCK9jWjequoBA6KZcRoT6688FUQSfNLJ4RpTJcy",
  "key22": "2dg3EPrYwSmmdQQorVKLkeGHckgi7iHD5kxEpvHxqdEZzQaheUvxdSYi7S9WN5uYN5eiaaTRumXaq1QSgBtcerP6",
  "key23": "2oKdorR15kcf7VnbU3oRhn87FJNrLYVcP1nn4RUKw8h4uko3dkumYfkm1LbKa2QDdjVi1hRSbn4mkZf1shDZ2pQM",
  "key24": "65ZZgLoizsZ1tpoGLGbnHtEoXH9fxCvZGd87EnuqSSyq5etixSbGMGUCEoRgVqssdCJKhWVTaUDAKEyEE4fQZq1z",
  "key25": "5P19pM7qGRa7vDU4BrYpru79kUNmzK4qs8FFVuVgEu77QtQpnrbXUvuwboYz5QYL5rLF19Eu3E9e6AScNvH2wQt1",
  "key26": "X42f2iiGPPCMHjCY43p4J5QgcwgcQrG18vhjxzdkQ8bAygsr8EREyrHkiHGg6Hrc1F5CaJARC8gh5PsmXQZNQsW",
  "key27": "21er7Gz19KFAUV4HPnsURxSLs6REbxm3N477881kF9WqZfQ3WwGpX5hS6yTHzpJTAs6QPhdnmdE2BU58JBTf4yrh",
  "key28": "2R9LeyjhdKWmz4mTYFC61diVdhubcta1GWbRSFEzoVRu8gC7CedcBwWmAB4oc7V7yCHk43oAKp3kvyoUWnigi7na",
  "key29": "3L7cSFmrgExsFTDnN53q7BrMHVeJCMGKXfkhumgZxkS6Zs5998X4tNiaaJcCWoNBEcftFLJF3FUrg2gnHNVx1EeJ",
  "key30": "38MCbTqpKpiDm68Fs2ZcoSUA8zqbsNX7gWSFCoC8pdWLNxe8y9o6ejC9UX8kdQfaSA16GuTA2WBxun5WRuHnKWUj",
  "key31": "4BkrtJunmx1V81CqdQLr4a5YQonz26g4jyM3d2bzKRDpr4nFjMsJqFaj6s7NqmqZzJzcJ6cqwa6UjPUZdWXmBiXh",
  "key32": "7VEsRma2QUwtKwXSzwgCCYnJfD6aM9suFtV6te5kaQ2bUEJCRUbnEYk4jQpd3nV85Rh8dW8gwm9KV64jgrPmn1H",
  "key33": "5LebSDRPCMnCCxnKR5qK3N6rkyiUDaftAXj8tCRk4hLXa1TMrYpHbyemVGhNUy86Emh74fg8JCTSfoY1EZEDHBz3"
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
