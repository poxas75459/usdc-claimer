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
    "3Erk17kvBbhs7qFfC399dhKKu1sboLxaTy4EqLeH47CbNKWrYwkbvvL2QnMrLSo8BeVfkTP5GZNozo9FD6HRgP9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fZ2XiYLceh8n7xEEL6RKAhqHnAYMnEpez1dYaMnHtcKJ7hS4hNjG6tkL1EMdam7XpAK4gPFnrYkFv57QLErZDnB",
  "key1": "3gaRk4QqYd3KTqdZ74dUMCspedVfHMzS9cML5Jtk6GZTL4g9XEptiCK8s5ga83xJBYxx8kByUCwpUPa9uZkiY53Y",
  "key2": "3NZrk3CPFpPRqMxBrrcz4gTFL8iGGK2QxRE9f8G3ccf8pzHkbFiaME121gkEmBSTE5tWETst7AA4HKjzF3vSXPUZ",
  "key3": "7CfKCu4ebRq3mMFUsJBFDQffgJTCB8ZH6WHxyJjBCcmfth9oNHf2ZjtDkcTAEz75QVJpsm6VVtbZwk56qGSfhis",
  "key4": "2HCd8UM64HxRTBctxgdwsEGTZrHbqeLNWvDFjjDD5cBgKatYRei7RC7oSGajAjN1kTejWk1MuWzq3sNXbvHJoCbW",
  "key5": "dBghcFid8wWZx73ejdHJvXxbj2V3uutVa9CCnnps1fr79ie9C8azjo1HVA8mprsq1cGbEywKcLRr5e6JikQf8xj",
  "key6": "3ZELQqQwJq7U4Ki7mkgdvcGW8RNM3J1HbN6g5hvjbL9wCyisbo3i2zvg8H4d4QBHYMvMFuaje4Mt9H4mcUP3GsvX",
  "key7": "Y4Dj176iCn9hA8adc48CNsc9QKP6xfT7wRKAeg5D9PEe6NU8ydihtJDDGxkThToFSkZGe8iHg3ucAXwzcebj1bm",
  "key8": "5ncEkEL2KXut5D2xZAgDdq2oggJFrdjDBpBBY9SweWGbbaw59hvarjRtUcDsxmavurEAM5XiMrA8BLqV3M2dRjSR",
  "key9": "3STUk8irSVMugQkfJ5x7Pord9G7sYMUjx2Km4q8BuikyUksUjMa1LNnotyKKRAURwwEyc3uD66GcDh1JZCidtk8W",
  "key10": "5eiLaChRuR6KyjgGnGKuP6QWBX6eBPLor2qfsoM257m9AgQgTvC4guoNkQzBWC8E8BAx9yj5NwgUFCbrezLNsjuR",
  "key11": "2uZa4h2GF6yFetDJDCiPqKznCfKr1bxGbzZbcrZKvbKgToMafcNRemoH436dckK8i5mTws7F4m5o8LyHWuAAtzxu",
  "key12": "TLU5bRa8AHwhmAxJCQpJhhBXYvbCHwPbikMb2CTx5ip3Eb4UwRGraRNLX1HfFqSXv4Hq44sptbj3L38CHZjC9SQ",
  "key13": "45WRAVxVgbcKjQh9g2sL2dWUgho8y6WeTGDypbwxoXfAq76JW7qKacdaRfQ6LuC13sSCn1BPBCU7PnH2itCNGzBf",
  "key14": "xeK27FhgUNnJwmYxougbYswCPTsi31UBqvWEDnhSAVE25pXmS1FtLLJrHDaqf7EwoNX27YbECNW8hLRZnbViR3g",
  "key15": "3ajWHK5DS9NDnErk2kEPkFgqLsSM39Fub7SpcGCS5P21ipHuP5G8TvzZvc6X5EsKApDWD4Zq8at8TDoPzXSoyUeq",
  "key16": "3QMiri4raTri9g1XYts8UnEZHNAgWcKhgYktFgzob3KqYYrfhPq8fNfRd7qUaupkxUDtyz1gZAMq8QtYPMJSi7BZ",
  "key17": "5HbMwyx17AgNadKChXNcyjLGZFNH87mdR1KsXkGsKxsr769aWMmjYCkf4ZCTxtJJBkEXBKxExPBakYMGymNZQxPt",
  "key18": "63NWWCm8LHCH8ceJKd4pzzK8pyS2nNSjjdGB9bw7tmtHGFTWGfDXqaX7PmX72UTq1jieBhS1FHXqEASZs7ycJ7Sy",
  "key19": "FFTJu5KUQ1zg5yeuSiXZo6yD7sN8M5Y617rp3xVc478qnzxZrhivDkjHNFmkhbvqAmThVZ8eZV4MAPWSJ588rrz",
  "key20": "62j41PGmWAJmkWT4saS8TjUZcGTk9h1Z4KZXWaQLY8v4fiJj3NkrL9PyTppi9RbmYRFsHwfZP1EGP1LjXNtyqcrR",
  "key21": "5jRtoXFJcBGa8eiM2y6eZJkMuSqFZxAodTLoJeMnXbtFSt8HMEVApmDzMM6Aokm7T9fMQP7PLjydwe6UBMELq6tV",
  "key22": "2UmphMHkN88A1yEMMhqxuW6qKbqru3QssPruWYzT2U8SFourE6SYnEYR4mwFqK21ffQw2Ti4drnHdyH8BjWQXCcN",
  "key23": "4a7wEyppBCuFrWQaa7QxpjT5xKPEdzGhhmMcBP6CV3EW4dxZuo5Pr1aYTXvB6d5zVLieWAwXGEUUCpiT4pbcS2f7",
  "key24": "Qfo6jzVGdV67ajfaDiFUXMj4uC5xn4CirQbhLqZxyxRKSh6TmPVZUBqBt6HBwqtTjmdKeAt3zvumTsjtuDq4Eao",
  "key25": "2L4zaNZmfRfVBrpT9pHjDzb7JwnevN694gzDmKWAoMuu3iTz1FpM4JwvD1qvUeQV2JpiNNYTKZLbeKYaFZvHezzA"
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
