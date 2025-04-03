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
    "4KSRmCnVQJSsxhNPZeqtRk3YCrxfBKr1gyFDh2M3vjEhA5oJvC8Qa8ABPegBoM9eLA9EbeF4azruBW4ah6TjHa44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "223HHPXgpQrswAhYc25n8sstavSeNSzb4qGdLL4DQzP2XHa5fU46L6nxoDAy4PkUtFKsTRPRqV5XBSiRi88fmrEk",
  "key1": "5T5CSCLRzF8TjVc754a83jUj6WARgdDx4ePXJU2M38E9DtXWQyj5WecoTq3zKB9hA7WY2RKA4PNZErhSRMLdnaqh",
  "key2": "2ejbL5jm45fABQX1G3nwfaeCpV4nCnEUi5tL5kxy6BnsBkiodu2D3zpbJ6tNk7pLdVaRGjXoWC9ut4mNkkHSVspg",
  "key3": "59gXWCmG9GFkFKGLE68Kv66V1ChnL77nAy1UozGez5qWr73Lx6e5FaDfGGhBMUkXVH77c4y7eBm3MkR1xebzSxLH",
  "key4": "3uAn9kGUbSxy6aqnYJxCZTDRyf1Tmjn4pHYotBSRqdjYx3kr8qhax53ASGTbnqGdfMXjjf9sxzJ8X9etWtnDaF98",
  "key5": "451E1tteeWHUct1Y63ZssdsmC7dcnxmVjstE7JjJkkZAMEwBUVCLfJAUmvXmnWo2ua1wMnUg2kV9cQHWugzLm7Zw",
  "key6": "4dARCzadYz4xM2u6MfAaQoBSHJEnciqNe7WYmFFcVtB75pRn6vXGFGAPVnYoqaMMBDFrGnznL8JXvHWEmSFk7VMu",
  "key7": "vUTvDDJJUxopzVbqkw5P2B94gjDhS7DF4hXUPK4vhDiKxVuv2GfMkhDynuvscQHddkNE92mGjd8ggn6jXwyzwip",
  "key8": "8fSjRLdoj8cHW4qJMjKZL4La2ctGhnGmWp1L1spdXC7vPLDkiTGEaMYYKhSDgn9KuwwZNnWRprqnwdzPqybNu9V",
  "key9": "3epNaAaJeNMUA9v34trGdx3fQ3EFC7Wuvx2cDQmAkPjV9YBJQVq1Hur57DtKPYMtWsbtbp6fVGnom2wGUiG5S2Ku",
  "key10": "377ZxYasTGyHt4bn7R1AT8hoCRkJMvmWnSQXEAsrLjqrTSbYv47YEUNcBt8pwbr4PQckXhKvYcDg7hiBWHPrTKGR",
  "key11": "2Dgo73MRfyTNYr2fVM3TUL3GwJ6DXxcRZ3GCGcCcePUo4x2X2ZpQrxJ8FZTYTZbnbfxj7MDDN8SvY9TBAxEh6hs",
  "key12": "5wV9NWBodgyFGaTtPqBAZMa4HEiVmT2hZNEEF2rDQEUJQa1VXfuUeUwwrGRWUREj4yQjV4xSj1RAjgADu9Aw1MZ2",
  "key13": "5GLQB5AqDaYo2d5F89MvW16k3dhmqFE4hQTPZf2sTX4tfKsSFD4VNc66TMDiKr5kGkgPSzTaZicRLtHJvZKe7J5Z",
  "key14": "65TwiGFxbJbXano9wjokX7UKojypZqdJnhqUwSw8GJGyMhFhCotE3utY6gXdXdUN1rdjc6WaWjNiAPuPWj2Neobu",
  "key15": "492um1e44HrpdZTzmnzS13bzuiruz1VanFyeHEV42PK5Ync7MtVoMeJcQCWy3EydWbc45dU9HLWZXEXQappahNkM",
  "key16": "3JW7N97HjagctKr7A5S1PCd5z6bQqkLe9ETe2t8ywPpwM88TG7Fx1D77j2uPduhyykGfsnEwdJRjN1DwPgbppT5d",
  "key17": "2wYa2i2Sc2eCkGaQor3ReXLZ6qkMu4E9AvqWHEP5GzxSUZSwVmCBKHAZj1aRQ3e8ZdV2tKH9WUS5xn6uHRBRotNb",
  "key18": "nb9CaaEENno9jZdxzCGkeP69fY2oS6cFRt179S9AckCujfk5ucFSWAkK4tDKisB9prftp5BbfbfGMtWakXuuUrt",
  "key19": "dRkjNJxXx9ypGBYyWujrru85YrRekFFL22DGTh36RHG3H2jq3GsSbcp3A7BmiFRnD2BKNAc7c7rFkxfK563oZyK",
  "key20": "4ANVtYVpRCiZ86ggS3Q6bY8hHBgycGebrpKQQB7NLS1JqD96sgDwzSDEcP3BSdNQYdNsS7oGCSZ32R4oeNbX32ix",
  "key21": "5JqRvKVLpy4SrGwMTwtG5khzsfDxFG3uZktuQYXd6Xism8hFtzw5V5q6hCPBLCxhoypovZkXzoQFYLERpm8sggkn",
  "key22": "29vwRhyuaT355eUQ2QmvC6fjWLakb2u48ebFGfcUES5K9UsZ3tC9dhJpbkX9o9NBCm31rMqZF8vt5RJisez1kAAL",
  "key23": "24F77wjRNsLvyXQaHBha5PC7VYaRmKsJXd9twsb1L37fCSpa9NGcwYSzzYpJ2QfrwTXjefLLFswrFq45qsdqF9U1",
  "key24": "3oHuyU4yaXtjZd65dcjzYtY1FmMvVk8ToqJWudkvYSf88suvzQWDvLUB28qqkt6Wt5S6hbjZ5YKqg3qzXNfGHRGS",
  "key25": "2GuPhKxrdy2Pv6CSs3tAZy6B2xjsupatsBcrHswTRh1qAb2Z3uP2NDaiUbgju4R7x2LKqr3NX3QHmxGjACt7TJig",
  "key26": "48Gw5MwPwoRgXqTsbjkP6zM98rkwxj1Caj9rf5vWF7sDECaEBys5xajHi37r9d21VEHvrvy5mpcEXXJ4nusXTC15",
  "key27": "2Cy7YEWSfM1maP7ddAZW6fQzgiuQfXte8uXq9FFAAGu4SXyWRBK8d76AnXPzmSsjgQhwUZD5EzJBfHs6WR8iYhmc",
  "key28": "24vaQYiN7Tqp6BEzUkkF8s1Ci8ARkpDAU4nvzYw91G6Vd2gJVzDU598NnNWwD6Uj2msHDHc6Ej4f7wMXAbpVG1Ju",
  "key29": "4UCUXGDpgCfgtqBNCVdyRC3V6AZbGMR8ESbrTMMVoy1pjptXARRLe2rgLb9fU2LkjqM7WTzwxcNwi6mHMhUtX1yH",
  "key30": "tyV7eLFfdbhpYZwgcscsdFayvicumWiC3ikf6ZsCe8WzXEB1oyWtQHbGd6aQLJdjfqcJGkbJ1MKaq7pAi968dXA",
  "key31": "3Xyh7XVQRuLkTmY5rA8FVPXJRWkSCPEy2x3afDPsR4A5Y1WjmrNKh8mYP5fHiJvisFYCB5LsHUbi9cRHs6t4B3qC",
  "key32": "5eNis27AeqYYsu78JLDEP7MV8gt1czooxa3iYXGz8PQMWaNgKyugyYiJEvXmS7jsgiE2qGEnUhHGgp5orgAh7AQq",
  "key33": "5Vz7w12d1LwQuRb1abQK3jCxAAfiMsJF9tmbXD4iCyvBmfLFZsWtFbXspuCVCoKqfphZ8YoqyGSAdU4LFqYkReoS",
  "key34": "3zWX1MTidzKvQXczBebek4oPKhwpDKqRb1qm6EmkKrDEeZyiHAQasaHyAesZyWp27crubWXEZQ1F8rmDv16rxqQc"
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
