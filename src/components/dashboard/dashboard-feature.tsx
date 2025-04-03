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
    "626qANKEpzaEpSfTqXAqTejQhBqjwngPPxvZB4MsNqJYzgddgwLTkFisT1FDzdUTtZrVebzttUs1jhENyQAe2PMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xGGCpyvq8TergdvEnLohvpT9vfyk9vDJRgbmgxgKUyCmwQG7JJqvBY6yj7SpnBxL8P5EBb8FPw8XXAUEZbGuwkr",
  "key1": "VFGicAmQSSLr47pnTvWHbQ6bk4NrHg1YCuqhdLYGrNvCWHdn2PkbutoMRLxzhDU7jtxBRjAW4x4YrDMG7nSot89",
  "key2": "2pA3CvmssbjA9duE8epdibnY3H7kJGSc1XTABWxqFkrgjrg5xvJzz4BEz67CntaDRbVER12eskrXeC5WvEh8MZtk",
  "key3": "5SpF3fhVShrnazfYUijirLERd1UAQYGDgcvNXcNcQXxMJh181kiBEC158HSUJuQ29ycntdzptKpn5aGr6urLfVku",
  "key4": "3FkfJgTsdxnCtVejjhcigavnD9ainQcFmL24aBFgFCCtcvZGjr6JbbqNtqx3p95WpwH1K9xs6RBLRAXqsNzQhAnh",
  "key5": "5mrteuQbVm8uMTsPm8CwxdcdwWk8bvUxGdes7Y4uP16KC7o1iMGqf19qDhkjo9LS561WaExEzjozu22KEkFFfJxd",
  "key6": "4VaM5smqkB4bfhKYTWePJRNQB8HxeypL2YbBN9ypAW5UXhdsmqbsnqhBxnBFJg27jqCN9Vyk67mhS5TRiS5rsfXZ",
  "key7": "4zXrBcELfrPeZMrWgs4YToin8P56HeJQqzhVndjhBF5fvThCxThY9TDjUsYpLU63aU4sEv4BvKX9cKiBZkTWrtCW",
  "key8": "3hRHq5v2szfbXgjqrBE1RVAE9owDND7c7bCwARqqhVdUHuwrrhHhQRvWbDn16a7e3qQArCBVFn7jETg5W9R6PoKw",
  "key9": "5M37mFBDZ5s3rnm2fEBSYaeUTbaFKMUqJ9aShti5GEo8Bxp1E8uBV3M3mrYvQ8DS9ahtwCVv9R6GFMDugTi9Kz3u",
  "key10": "39VkbzpLGM7xNzNwXjv9xPJ7QuE3AE2Wjx6UHsnMbadg6465VxwtsdqAXfprgcwuYwyBMMKdoujTGFeMsXLakRQd",
  "key11": "o1mN4ACPEG7kFBsfoiyKQSHFCz29XfjxarFox2WWK6uS5hRkELcYHpAsYSEuVFCoSBnEx8noNua7VjiTkwo49Yi",
  "key12": "3PH6j2gWhqZsmSf8giswWT7xG6j84GVLjqpxihtsinqMhU7xV1PA9PuFfekVwdp5gurkk2B3vDmSQv5Fd3HPtp4k",
  "key13": "4iuc57uQSXGVPGxjY4ttYVPFbTRGKBMSgS29zmEgsZYX4fR9Q6f74ryK3ygjcXaGoVATUk3AcRUg9Xp5fyLGeCVt",
  "key14": "4t5mV7ByXMZbeUWMjrQ7Hs4nFtkmNQ2KuLeakeKLKc3Peimc6rhyyMm4kSQAr2bZorBTY3UfP125JwxU9mPjZey2",
  "key15": "5c9oubWxY63grtpuf4DUif7gK5Kprpq2eJCwgTTV8g3fw5892motfrT4a3xoJbSvkGzcDZJKh8t1UvVALEih74wK",
  "key16": "2sTnPsUZpdxbksYjVGCiKj7NiHfzi66UrkFstmKg6fnzh5TE23cPTXriJr4Q9GErXVMDShQs3vxDBFuME955WbuS",
  "key17": "56RsBtKYHWgsgqXv46iJobrvNWM1ttbHWBzSbvdknEQ2g7MtWqydVRyuG36ae74AGGw1s9iLxV135WeJxmNuRF5H",
  "key18": "LjVLQAHfKEo77tXzDYMpWsEYFAANvby7sESHuspZN5WrPeomZK5t98gXmoipqFhQWNqTryyBEyej3q1NGEWXSKm",
  "key19": "4A8NRxvTrcVxfWfUWuAERB5EuuSUvzFBLYr8LMNjesdz7sYEfhU4GsxayH25zxLGrCQ3ru66Z1QgduUY7ab6azi9",
  "key20": "5YTgn98k5KoFSjQCJrMvidfbK9AfDPvrDrJMH1ZdBKQGXxZD13KVECapFYCk8WUuTG6g5MqFrofY6nFHimRuZsDL",
  "key21": "4KEbJDxruwrQKMM8YX9tbd1gmqbFXTgyS52DGyToD2LKoU2hUZnN11dSQCb5m78WQY2wDFBF9DWnVKF3suEig4gX",
  "key22": "3XWytAG9CagFYefpQQ4HbFNi1xrijhFDQmMUyrW49SxUMr1rTeZPoCzDcto1mrMFYe4ZomfbVLMNchVFmwH2hoRp",
  "key23": "3yJnTK9DZkYhQ3wS6m1WHgRcL2znLutBDHHa7AyfYWVkw27J1cXgw7TN4dzFxLHKuy1kFbcvHbuXEX3Jx2Pdec6U",
  "key24": "4vBTY3mS6tU8LYg47qTDap41sFqMN7nX9X2A2sEHdTt2YS7Kn5HhEssbQR3dKsvkDbCjzP4Gj35T16NoKMtyrBE9",
  "key25": "4ZYA1JACUwQTGsqmcZXc8oGphYa5dBPweZmshs6mpWDYBHQJFJQtV2EedFV2e9hZPaoJNdpqxEQLGrP6MeJH251r",
  "key26": "3zwpj7bsmM2Cb6UHgXVvdZwfqcGWL9xCJhpgLrfJaq5CamQxD4RLh29wEMy2fcY8mZZ3GQcrdZje2KJYrAsDnSAT",
  "key27": "4GX57YF75GLdPgvufkWMh7mm3B4xPh3xevrz6kzsitmoJZXbg326gyVxVWEk5m2AKDz3bDNTmckYK4XwgVfTj4WH",
  "key28": "4FtHYBxGL7rcZDRrtemZiXvm9MZgeHjURWfbSi4tyjSuKvCiXMXcbY8Jzib8quMTUkxExSvMuERZBJAk9DuVMASj",
  "key29": "4EJg4EaVQhXQcbVfnZDZbGo5axaCiPGSEL1iFVp5BWif9okjkAMfyGXvZz4DFk2kGjesgPNiKThPoDqx83dpxR87",
  "key30": "41sBHr6vQ5cdTarLjJw5WcwoiMMJSvYobYnqj6nhf382NvP3vBSj6bv8CdVsSNTdjsBF52KqCDWXLtrrKc8xmpFM",
  "key31": "2239GfuKdY3945ZoHUhpd6gVLwbCbUNqRKaDkJNrA7Kt5bkQiD6rnh471sBMdaEHEvbb5qdQVdfDxtmS1F6chGS9",
  "key32": "49urbQzAghhpfPL8HbeKUYWswz2kSsrkPgLNExbYHBonKfE6mPACsvTjfPf9jCpN3A5MCTAZRxrpcC8HovKdX7Ey",
  "key33": "67NZ8hEBRVVa9sE6c9fiSr87iQs1tPpJY1EkdeWDd59n6n2xssmsiXHNdAdHjYdFXHbFXjbkA8xad4YmXwwdSoJL",
  "key34": "2LAA25Ne22MrHriLPDnEy89S1HwP1uAh4Nby3Cc6pBcvnXsuGpVoFArgumduCJy7d3WyrrwBjnhYW9QueCdrobHf",
  "key35": "568idDCzwQVmM2UzzYTAq3VkktehbTxZjHpaF1H8fq6HvNiQ162LRXjteCvr1881yGDNHedKft4wpZjigRukduBC",
  "key36": "2CLMfesb6Pi2zyjSCcFYx6kLuhJVQwPJaQf14kD8gNZdBCw8xBWcYTtmgTsGo6rkCEkmGcw7NkHU8NqXiJ5sdaRq",
  "key37": "5Qm4pmZbxttRvn5uoMG3H8id67CfWVzinbKjFRXbNJgSwA9dBnnBRfRr5SBzmpxoiq3YtgpTGTeZTANn7i3afXUs"
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
