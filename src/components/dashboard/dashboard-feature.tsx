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
    "f44UYirUXYfoYh7uoh2kzCZi1DGZY5nhmd8NRKLDiDbvn9294v3UCYDRf2iPReJDXDrWzwSix29tvHHAVfhqNL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KZzZaEe9VCDst98wRHV7Fnzn1rWmtEGvSEEcJKB3kzc1qxhnyV488RonHyDpur94zZifPFFCUt1ka9ykooNHxGz",
  "key1": "3rrP53wk1qhBePPh5HVDsvfTtBLLT8PNaLJGgEwETJz24bYU8RhMmE3V1tyRCzVtpQxfNgbBVaaJdUANcXw7fBV7",
  "key2": "27YHuYibkvBjq9V93xkcpnHxhxnp2Yx9BrtpjCwr8HfiMQaLxwr4apuFRizxMjqHQWMSDgKeGhS6b1muEKXRvCqd",
  "key3": "3m2v9DhrkpDn2WqQnP32A3eQ6jgQriZ3HazuKmZFGrwEFWfa1SVF4Hmc92JQz6yh7AVTuL67q4T8WCGnUdUjjjSe",
  "key4": "3FZSkmnUimcfscq7zi2LXS8nH9j6EHrC5CLLs7NUzY7CcSaGYSr1Z2sy1pNSb8AbW7avR12sgRrKqYPoH7hweZaL",
  "key5": "3PNxKNJhq2GuVK4muexzW4T52zLj7ErfbeaJ4qh6VtDYi7wy88fCzyQEf7AWtZdcM3AC6YKRkQxa7uojHtnBRUe9",
  "key6": "4HxZqGtiN87zKnTEAaBr4GgsfY9s318A4SnRSVsVCkc4aEWuvw5QQgtrHdXcJHrZEyeHuh8oAcyjBQaNfvwup4rq",
  "key7": "Br18rvQBngTXjgpriXKNb2U46mQpQc6sYo36xt15TLSC7gyGawUc8cCcCiGsvEfKoBSek9jbzCPgmuvwfZeKgrx",
  "key8": "3Btr9DQAPCaKwL7DcwZAYAZwCEWJ2Y8QtLoTe48LgyuKRMrbgHueVxqH7X5Az7utfUPyr3GFBtnqAeuuxqQfJrM",
  "key9": "4ZYoAyUYZ9Agc6vebsTnvj357PfRZgWjLhTzt5urPM8xPeuAWj5Zhqp6TUiPpnVSqf194ZXfi856A9FGTjaEcHet",
  "key10": "FDDYrX7KKUs2DtAFd4STjr9b3W6ZLcw1jptVS9VTikqvrAjATRdMU31JeyQPG94w7bAw5rFTJdfVLzmzE65wUKy",
  "key11": "SpJvbBPFD3NwSKmsg3ZS5b5gC8Yf9eo34trp4EnrFcqFAVPCri3EWvRLSAaedZrsGZ4SkAWfTxsexnM47pXQHvS",
  "key12": "2Uz92HCtoESZdUXbFFGLmHty7ctwUBcS2J2pYoSHimbLCKEeAQsuu2sZm1beMUkDzKMYrnJN6JMroV5uMupNZAdi",
  "key13": "2e4isGRE3T8By3ZSCELBc7cN6WsE4xoskCxKVqhQPHSTZgMJamSDSCVTKmoLphaCKXWC56DuZ1hXG6Jw1H3yAXDh",
  "key14": "2FTXhMMDPaSZDKcKkEV7TXxDimxobamczgjovPVVLyUutgwR9UiW5AE8pxSLsFYtHaA6QJCKMCVsw2LXrNqk6B7c",
  "key15": "3NMos8qBAdsEJvQFSrRKuVEpbQZeQ5LMRYhdUgupkE8fQ5G3rCrCzjkpjH8zmkTzXXkqUHS1cQtGzPk6qiydSiSJ",
  "key16": "m4D96XQVKW7bPF4tKHZ4GpuPuHGgdbXUw2trWzBWcdY6DUmx77BfuQS47hAoHFkKPdK1NDi1rpBY3FHdM7gZtBG",
  "key17": "2g5XFshM1yyxQ3RhkkrmNZaH3DvnJWbYaZ2v6TfnKS81pwDLLmmJs7cQp1FD5EseVtEtDykP1Xg4MAUFk9gooJPc",
  "key18": "5naWghUMw7DQN6pr4gV55HV4WGtvFzmHa5tJnsyWYeFEKVrpeeS9wFUc6k3qtRutxwSuBBBybue8gTjYpbb7p5Wq",
  "key19": "48jv8o6JJSyUTTbdBqb44ZmizkKdhJqaTQXzppkoows5UucBReTftV2f2oeMbd3v7kA9FPjHKj1FFjj4m73NP5rD",
  "key20": "5sciDiStrfkPNGeZ89Bu7vHi7nLRG5E5RHqJb8UKhfRaJNmY4642P8vgEWcz8WUKUni3Fh4wLUKu3ZXLVdXSNB5p",
  "key21": "hzbs7JGMCEG3Byvuu3ANTnvKEjiSWZ6U9YJkudeaiUk1BjUJFUpMiuEpAPoTnNqZmZwxpoNDGwprmSe3boaxG9n",
  "key22": "2bC6k7TZrkfaYmkjVbAJ2ofp5uYhdZbu2eAK6aD6x5dskAksnUc2hJeJhDa8Poa6oYXcToYyx4C1z1n2EtwwaaRo",
  "key23": "3Je8RdmZhoRfFEawpTcfkx4kdZiyQzK2vHdxRrX1FU8xuNmogR1hhhEsQdgZgzZst3B5Kp2wQXWzJvZ4DBtuaVJt",
  "key24": "5t9QdBAYHUVMTUHkSTkHUdPQzmw3qemkwzx7HiYTy62bH41o5ZfyqSQq8UfWkjdu52UUuye7iSqALduMD1ggyRT9",
  "key25": "4mBbaHv1rgqvmGDAMEGiHY9KdzyP79jM2UTJ3vKNqZTRZ9sMXrjGbHPHvkMyeNnkUsfnhUfAvCsPpVfsyQ7XbTNJ",
  "key26": "1AVWZR2BActsXk5ePWwRbdho7vSFEoZpsXzQ3QtG9qXG6G4SHxojChFdr2is8LEmbSmq8VH1Byq6Ssn5R2Yr1Ya",
  "key27": "5og7C7HqKBkASBwavsg57fKFdyZbxjGTx8xsyxbN8FDe9pn7Psvk8riBN6or2WkeXuf9Ez3iHMQiCVaG5zKC32oD",
  "key28": "5j2aMsSP6Ds87acoBMEckgJPkiFNeuLuQqvTRWPqx7QcBP5iGMZYC61QFfJR9o6dGAnk5wWocoPaV9vmDKjoxYbp",
  "key29": "5J5F7zcPJcsfnqwPHWhMmtUUikXkJYTWVa1rXiED9BS6fQ2wHipts2zPfi8UAUpboqePHLNNBQwbrhK9PMP2jQxD",
  "key30": "3se3mCKatjm9j3HsKtmxP3tReVL1ZE3ZeDLakRSdx7KJLbBFriFFoN4KMUgzFurZUtH5Ex2BWAjdY58BAsNfNLJw",
  "key31": "4NVsyHuWBqj8Z29gqjTMyjrRz6c6a82wzqfPvYFvhBTNScjoUgYiB7hdYanBcaFofDgmXfNubrbUiQ7Rgy2stNcp",
  "key32": "3mb6Nk4VwjmosYSnbELZTHbw3erWDUcpAhUpdSQSombkc3CRDngpAo3WGAKSSEgcTFh2bCH5AYsi97hWEVribaTz",
  "key33": "5XYZRUc8ZDpdYZvGZDx5wSr41Pm3QBf7qwHNEH4sJPgzZYLu4Tfvs7kEMj4EDLyzx8Lw352GmK4tgmbz8F7t7R4w"
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
