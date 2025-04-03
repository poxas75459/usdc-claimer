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
    "7oTReeC9CRfv7cxu5ojeQNnxuRDpDmBzi13Js1YdTxgC3iwbqXdaABY5BvVivFYB61NC4eKAZjixd6kREop925D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TSwqsSLFXbugF8Ju48BHa3AoaaSPCLu9UzjwS8uR5QPuuXLEccCfd8EJrw71cLwcjJLFTXuuQbkS65QzBKx1q77",
  "key1": "yvzCRvBvmSRQTRPfCFVZ7LR4oBsZjFePcCfDmPqhMVsBsAFBkutHTKVNdCZgBS6Mk1AfqDun4XC9tWXAf86kedo",
  "key2": "3NtFBDfAau38KR2kNiPCYkLveGCAedgKA7eGbMvVCDYfHs4mvdHB5mbT58B5vUjXaMzubnwdSHkuzqy2TdAh1T7n",
  "key3": "4gKBr4UEA8kr6MxYMumknxNkv8dJCCaLQ9SaK5QXymzyzjWiubd3fYSzEryYHwSSar541CTqBkW3778vA3DL2ybR",
  "key4": "48h4i7ri7X2VC3HZFjeWmVALS9paEdNx2BLXd1wtDjfrdLRMoaGnUUURVzhj6qGyXrR3XU71pvkxgU9x3UoiJDPd",
  "key5": "5qCTmorBcc9m6bEk2cQ21hYCj5iohzdmZn1bXWNvC9MPj5qaGpsSeeUg75yd8yPDn7cy5BG2BCoGcBsvBWBqdM8g",
  "key6": "2WR8vW4auethEQcujzz6Rkn5wSeaCpfFb49we3WRfcszdtek3j98frALmvCguZ4UzFwdaQuHxAURxwTkdVLUrasD",
  "key7": "4RxJ2v2ata69voNyy6KpT5ZwhxqRgyEPQdmEEiNQV4gTSwTb11GESFtia2QkfSTAUpsqo2ASGMqiU48JwtVJxnJF",
  "key8": "4xncuiBXp43P1wQDmF2aeP2VzJJWTMB9uJLCR5gmXiZfGQFGVStzabKFW4YwgTG6wUGgMcErk6WpNhMu2aGeSxyn",
  "key9": "JpnYAHLk36FVMBQc5pCdhTCp2FHNZWzAEw7CEf9DdXRkjtZ3h1B54FRy3TwFTTqSQn3E5ULUn2Cp5msoDuS41uD",
  "key10": "3EUX8vUQxxTkqcPz8LM8YFxHNdwYbr9uVdvxNAVLoWfCkREz79wfyRXawxbotqW8mAkKXDDxFnVhueYg3MR5yRCh",
  "key11": "3Eb14gjfdfSEkBBUEwbJT2YuRhYLUe9Yq51S8zEm9kDVg1ksNWN584GtsL9reP4DnLhW5aVBw3cfQXwhjwB6Lqgv",
  "key12": "2ktKm1y6wKgNorPjp3TeVYQmuK2EEokknjqorksnPccivdHoG5A3J5R8XoWAw8E3Xy92V6BTJWjbZ3nwKJZm3bEB",
  "key13": "46QBE3XEch3fwA4yimno645VXuECdpmEG3pbiicCqkj7cqtP6tbFdrygystewbSNK3HFL7fsHejk3VzRBe2k4Hxe",
  "key14": "4q81LWhgK8QnmRnJZc39mPqXc9rwP7byqxjPuCKtWS4e3SoEFaixH3KPoKejnA9m392GpeyTSLdVpV3LQZzaZRxo",
  "key15": "31KvcCi1HF1DWUHb1gt9UmmtWBttP7tYGz4sxhYMewucwgjxU86beEqszY6xBoJ8grCubyK3HnM6jPR25cLn3diH",
  "key16": "55bayqK81irzAZHgtW1jfXKifHbQ6XFyyrE2pFCfcUe24a7y5zLQUcJGd6VFKsMQ5QFwSRuqnJ6btnp7fwvVxKyq",
  "key17": "2Ao73CiYsWpqTu9f77Pn2Lbm8cwedYkxkaXRB3dKYq4A2ANapmKxN6PJ47QCkzHxF9eMBwrkkbibqg1jGUFu3856",
  "key18": "JhPQXF5vVNhMKqqXLZLHfNE3vA3wrcenkE2SPwr7Zy6RGZKqCT19P5d7xJ26HLd9uDKNFKnPDM9hnLnXjYuXRMY",
  "key19": "5iidHr8YT8ZSPQhia7VRC72MDH4RwnAvudtp2f2yPHFEK9ZDhnaZH1u1dScUMKxvfQ14PMrhLF4R8X8jQgGWNiRP",
  "key20": "5j54v2ytmbivjq5CV4s6jLHCQcz6xZd7qDDjjhWVURaRZRzCKWpA6GnYfKMTSSyY78hKuMZaZ7cpy5T467yDnYuZ",
  "key21": "mJSyNjD5TSn5MqCmASq4VaaggqoTYcQdiqfGWHoVwC5a9gRynwHDuiSw2Co22DGm2fwKZXTtD6sNRvHnwwedg9c",
  "key22": "X15Vtb47yJZHJvia5BRPN8WryDpwNYe2SDchHsvHRnzHWZ6jzktQuqmWSrxcdoBs4wXbW9y6Nb4qrEZD3aFw4kM",
  "key23": "4EdVdgc3nU9ysfAXP13iAA1CTHSe2vYXVGyahaKi3KMv5StJsExgLdHaJNXZKpsEMGuyEokNPmhW4Y9eofv2ru1S",
  "key24": "3uz31nXBihnQk23cETBFgCL1xeRPrfGwBdipfqrD3HcmSWaKbMUW2ayg8yseQagfCP4nrWvaePFofsT1SetNERK2",
  "key25": "4qvWxUEtmUoiiMU1neCQ6KPbfAGVnBtiiJfYmMycJcMZmzEgJDcgwKB1pdeGa4szw7hoLRdVjp7SyjPmiAhD1fLR",
  "key26": "4SD5cE9X7g2hKVXANnzzQtcZT2v3Cp7FnbxGH2Edm6ZqLhdd6o51en7MbTugVvUMJ4dTKNjXJydrnBf1vJaCfhZL",
  "key27": "GAfMH6CotHoapwXuPRssx8DBbANsqNb2uc95zP7QpUjUxVV9VC38N8eNGZea4NfnUj9uXQMecAWtHELqbhJXhaH",
  "key28": "5WyjZa4nuAzdd7a9rsaoerynpmkX1mrCUE8er2mdeqCCyhVYhwUq3urigxHMrVKMnpe5bG8zAMauYd5NyoxP12oV",
  "key29": "uxSV8aVE9YB9Raic4fWEkQKaSPZfzBcAsWyuX7caAbt163biVw7UZPqhNZoa864T5QXQjAMa3zQikY36qMr7WrS",
  "key30": "3kdhHSzGEgJaG2tRpHQpiY7jhPQfiiEqg7m1dvY3DhAc92NnsJmKT8seKShG6deJF5hAcDd5LH75nYx3pWwcdfRb",
  "key31": "4mtxMvpcrbrpmNCJbn2GYkx1v99zy3dGonL4iweF92Yq6yAkbw5MyxMEKAmBUp6Lpdt1sqqmdGJzWu8oW97BZa8q",
  "key32": "46GcDDcvQZoBZkroLDBt9Soj8jPvDoFn4aZmSEZXZhdc19L6AnA1LeQJsgpZ59J65VEda9BcK32m5g2LdKGdBmdu",
  "key33": "4vbaC5rQhZypj6cvgRyDQjqX5kMxmHkuzZM1TvqQX9FJqdumbSW3RvdVvj1fWZ4KchBRXuZar6oKrNEAAMJGRT4Q",
  "key34": "Dzk6oRRP8xCokgN31HuKCkryisjNkF9v2xre2GCpyVaYTeWCt1hUrPypCrNNN8pHS3hsJbX7dMWaZESQqXyQyof",
  "key35": "Yv6koynfZqskbiFX6BMmMgsMKADE7XuFn9hZ9VVorehdJQkr3n8bend5t5ugpAxEK1DZxfdt7m61KbXHLQDs1RA"
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
