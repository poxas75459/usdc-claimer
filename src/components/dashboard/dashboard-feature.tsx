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
    "5vXh3ijHonUbrefmfaoGjq2xctmX7wKsCMYDo2YT7jF8KCR3p7Cebk8fnkS9vnX86CoJ4kwdPnhH41J8rFhvTvwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aYW7jFE3uiL1mUqjrYoDx9vXDYTUZ1QMCuH14RHoKRoo2jNbtChbNuJpky2sug9wgYrNAzHNyDjHM5Sju98Ja29",
  "key1": "5sy4Xv3ZzoxLTdhnX1snJLaz6WrHXY13MBAvmurWvdQCzHkbfkTnBaXN653Xnk4jdsuNnTSeLFpkebLR1Td2tSZu",
  "key2": "5ECCjgLZRQWBS5kMcBXw98vdsbGG3CvHxsxoh9kchgREUE97hJCvRg9LopYPFZXkqxV7k4DgEwVdiTPYYCGzefyv",
  "key3": "3D98UpzTCawKwKNsRJT4sKyVvnWwdk97USpkPQSuVWG9BCVGm6pjQRREu6nEPZp1SSBnvK29UTc35pr45k925Qcd",
  "key4": "5wyvWRjwo7Jw9mMY4QuoZsjSQAjY6Qdne5M6ug2yGYARwgbN9xuWid1vuHY4EShpxe5BsVAh9gyoT7FrmmiXELbr",
  "key5": "2rzRUkdy7r5nmEAxiCm6cUruBezc4p88E62G3AywkCVYeLsGYfPzehg8Ajx47p9AoeZhiz76FJ7xf8Mpv4PDoW65",
  "key6": "4rjCSQ1WFF7DeyFufQE4aZKvmMdy5P37qY4w9Ck4GdCxKp6Kv1jaovjqCmu2322MaitM6YrNxYMtNvnrDuVHmZtp",
  "key7": "4mQY4rBGCBiS2J5Ludx3Y6ebVLfCdfYtodJfEwYRN2d84dZPQXVisbrRdNMprqGoki2pHMQuLRN2G4XuyxRu1sbQ",
  "key8": "5Y3chJo4QkMh1EkEiiqbt6LgnH5z5sy2KKTUBjhfCQ5mxTEq5Y7mFYgicrwFHkk48ZLBcMtwY69sRz892EMkgZ6H",
  "key9": "3QWXiB6uVsi8SPyUo3BsDbQmAD1yVtt2hcwqmdYzajEL75to3Ums1Bxbw2Qhhfcorqxf4SvLuAETm14CgLrxv3M8",
  "key10": "KxzFU7ne2yNbZvbCJqNZ7kBCuA8BC83La9AP3WbBN7hu6VcrDhJysKV1jJCFNUvYqrrDXvaFz8XRxNtJhLi3jvn",
  "key11": "3RSG2ESodEVcn9uUSRxp7Smxa2xXYux9EBfAuEnZuNhecWiB2r6cyJJ9k6g3ZLn8KYLJcDvcwNhSjRZVExLaNsu4",
  "key12": "5fkUCwJSqbEhUAbK8BNXwsWW4cpmWr4XZZ5BqhBMttifk1Mepg3wm5fmtAnwvGoqXmTZfp8eGSavTiF4bzfjDjCM",
  "key13": "5S7RmCY6j8rBXzvE6SxdYYhKMHLSKh9D8GcDjfXvWutZAAaQstG3bPH5UHRnVhtg3W9ovhCmWtLedTsBNoNV2xkT",
  "key14": "5zmFxioMDf1Pgosnkgix1Va7LqMJSbYyCP3Fw7Cr1DziH51M3M7wK9Uj2izr8H5MPEuieaYw3Y8mex48GeaVnNp2",
  "key15": "4SSJLoeoudAaJQHmy63CeQziEERtXWw97X7Nui2e1Z9syPw6CzBHLJe9Kz6aGncZWRV5HTsd6vfX9VGFf4u9bccW",
  "key16": "3JQ1QbvSFAwBj4H58xJBVv7H4xXQt6neBR7uAfw6QVFTXfXreekgY7ZvbRPQPf1SNaN1rcw98hMhTKwpjxPgooPP",
  "key17": "3kFKa5n67eqxSfLQeavJRYFPfXitWg8nozATKSbwYUS6jkGBcf41QvbSQK9Pv2Wn11S6PU1M5WVofaKXHJFAn11u",
  "key18": "2zZeaiWXik42huEL64zFV8uEYsBXv5dUAfkf6MzmQq88v9DwnPJFC5eQzekLaXPpgfXUBfgcDcL2da89RrSxerM6",
  "key19": "xUvKGF3EoSgmxHazhzk9qR6UXsFnqJyWG5NKiCVKbcP78e2pzPji7J5HqcSJozxTbozu78dj7Hq7yiHyFHTqAwz",
  "key20": "5V9VNqT1vSwKyB8ZRbxkHJ75DynpFXFr4o9sDdcGczRBpRmzHmwG6FT8CTgcmJTyKjBSkVmcEYQxJZjiu74u3z78",
  "key21": "2AqTQxicT7hteLPQQd7x6VTDYTGgZZ5pFYbqYMqXKehFeKJK6xAmWpN7qdiPMerqcGKXD4F37n4RLqCyxsgu3fPZ",
  "key22": "3T2xmasRrXbHbcrMmLhYAjEQtDwj3ShJzNWKYok8jR6gfwdtv8RsNVm6YGP4z51NAfAvmmSYHAR9badvZe7NMNaT",
  "key23": "5FVPJZxH2Zhjwk6hqm6tSJfspMkCkHRUWm2s9HFwQHFSsY7PSc2bETqEtj3kPACcT5Xy7sQpXKNYYmLDLEot9hv4",
  "key24": "5gxivyNAdAEdmZ81PZKvZxxue2V1ZSWR2yZ2pJookKsywKeuVVVvtr9dNDChh3Hhs1JBxFXRKe65cskdycjsGgnM"
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
