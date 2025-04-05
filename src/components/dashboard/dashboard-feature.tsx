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
    "4cPrVB8aai9HXYfMNBsknwwJxdkkX3D87MQBGLHaRZi6Nrwb5uLLyEchUy4T8Zj3ZGavgHWBHTxrhd2vjSaMiSRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1sXkaxtarjUKNt7d23UpQCJ2HQbt5HN6bM8ZjPvAf69SjbxhxAwAPLtij1tELynvEE3J5njtuzVw1mb15U4ePX",
  "key1": "3dxmegs82BYiKs7caufX1udVMDMRo91z2oGiC9xccHBfQEf62kt3w4B1k5fKB7YFeEVDwbqXNjpBuNismAea9sVj",
  "key2": "2WsE46N81rZJ6UuX6mKWjga3yZ6drgy4w5ymaRK4XGYAsHKsSut6tBoEzWbL3t9d2zcfN3tpcGYSXFKLudCcPTyX",
  "key3": "4FPXwXNX5hphM9GRFcKuEcK25fVzoPQenc3VgnH14e5GAqjFFAwZKdxpiyaxW7NvkJRb3AoADg1mjfMDF3QrHCD",
  "key4": "2wfpSuT5cJEjwz2HtiwzZzEYZPvCUTG2AdwUvCB4Bbt5vrqavFjsBhsEmBmKxX5uHWxTmmc4uveW2g4DQjuC7ouL",
  "key5": "qLXxLvCubEe35hXnN5y6BEcgtjoGCAsQviy5SVZQPZrUqnBGnceYzzBDa8HK4GJAHcCx64UHXUQNyEJ2kz5SLRm",
  "key6": "2xhei6eQvfh5QDXdJU1EKv2vxe6EpPSobKJfTcDqsiFyRp2FcREW7EAXuD3F5CUutDTq1psF1EB69RoRX3ted2tQ",
  "key7": "5LUHZ9FoD2jxZzQ9PvUmEEAcUaDTqY2SBC2d2e9YAh97NpzQB6TwKL4Vb7Z8aWZyETt6pRFFjip7t7jrw8gu2sNH",
  "key8": "2hE6dUwkqTsZF62GvsPSvtDmeSf5bTLAnAaLRey76cose7qBNg6ubmdm7fNLfjvntkP1xve9QUZvAMDvzG4ArYzV",
  "key9": "2Nje4KGzbgP3Bk12BP4E9h4ubvJsyyUimusAWw5FcB7WnV56eyRVK4oZMXgpG19gMwSeFr3Y22QwAKprhDzBxC9C",
  "key10": "45vrcjRUBVCa2AtAD3uqzknVEUGS4CNydCzcTo9NtLnZBbRfRtwJk9b6catEoUuW9XsQdjF69AL7yuuwarfj2mAe",
  "key11": "664G69eV7m6n3C2JvbBK6uF6S8NETL2PMy3mrBXH6nAeoEbxzRE9vpXraqgrkgrKXdmUgqHGVdbE4JjYw6q3iTSF",
  "key12": "59icYDAdQ7Ld6dKsn78L55UVtxhzfcJv66qZUNdS8oDzcQEhLKMauvbMWwSXKWp9HyEWVh3aV73oq6tmrr3DgiJu",
  "key13": "29ZNyw5BN3DiXmytCfirsT3CaPWKC9RwAsyJXbJRBQomiXoRwfvAjhpoYnbLYzGw6REgRfDLxEPCtJBfmHTB7xmW",
  "key14": "4xgB8nmFwzoTdsq4ibZmhgozc5hqePoPu37SbV9yEHdcvxsh5G9pDi2YpaTs2GASg3Lhf3eqFAXTtdhXYKsyiGGd",
  "key15": "5yKcjPvGVHPPXzdHrR2b51y8mbTVzFpoX9YPmifJnjqWfDDr1knvhvYUd31mLaZqxYxF9ZLcn6ooGPz2xUENbWeG",
  "key16": "3TJMz6J3ymrWkWvkUdtV5MWwkm3tT48wmAGwVqZYfSUZuVPu17FRKrAP7DurYaGAPQAjmMq4rQNoN5pM3gLhidpU",
  "key17": "26f6g75TYd2B83LGLd9CDNgemBa8oBVYN2RdU6xgN4DrjEzqDcNfWUvzWU29Hz2MCi2xtsMqBTgnZ95ZZar9pZUP",
  "key18": "3DLUj7QGk8TXnYqyNn3vBw8VrxzELTf1YDkqgBJbUTEdEdK7FrzPoaRKEmnnn2LGvXVF9yrqLD3G3FTRY5AgWuWk",
  "key19": "5ZrCcmHf68rWXL6rAvR9snhYnRoHH9anmp14bTNKUeY7sTyLfHwmRUqKMhvM1Vh6x9tVcxDPx1mvUHk8jcoEJCP5",
  "key20": "4xiq5VGxJGduSmKdmdAZ7rDCfFncmmEY4tLkj3eRsEmjQXGAvLFEj5Lag3vmjA35xFHAWGFh2HVJx7w6wPsYcp4u",
  "key21": "4gmEhyZBqPNEZeaQzZnB23AFfxs1VLeT8VH3NjgeddwBNJ6PyHq2JWRqtGb3eJsoRK8xTFpbnAf2gfGp5taPJ6pJ",
  "key22": "3oUYiVVwJQrRLxxS5RKcDbNw52DSSPs3oA9jJ4yKBaPXMjnrzqz5DgpJHZr8ZzSDZw2tgHy4q59oZpJWppLfsKDG",
  "key23": "465H2DwJzjPyeUG7PsRuzDs763YjqNApBQkuhoa4RpEQMaXdff4i4hjf81uwEAWvApLZjzggAn7jiEu8hQvg35mg",
  "key24": "3DTxN6LgzJ1hVsi9Lu7Trp5epVPA2nyHR21Pu1gEaQAm7TjRXLGJEtcUWyW8Ga9sbHC3vjmPpRrvEX8KY5Wh7kZe",
  "key25": "43RjcUFaB4VztGVNnCgyYJ4sec1DyHSdPqSKYxCHj1gEuNk8VPrcszXtug88cVKj62b8bxGvimVMG34ySVAwAsBn",
  "key26": "MPLoBN4xVduEY2Y9vXw1X9uXJHxcgHJRwsTymNyETBvvYHYbNNC9prWFcsgWkQhZy65vvvu3cp7M6Kw53d8Vsrs",
  "key27": "4DYWYY2gGBxbtykD2Eyh8TXnhaALYZkLhLfYMxSPffVvGmGX7bWWRVP8aPcvdvB5uZBEY5CLk5iYYGxtHx25vK7M",
  "key28": "5ac88yFSJvisGMiay6Ka4FXufca54P1Ugdf88nQrwfXCCE3jqzfACrFYTERsiYnWy2eVnHpxnAQL4TBmy4SfSaNc",
  "key29": "66PHiKqsopYXFcbiTYabqcxrtjTJeSGtFCTQDiGT2c1uTJKagjCVnMtPooghmd8aN66hDbwsG1tzVfsjNgpLWU9M",
  "key30": "5GVQrkTE48v8bd44Zf1bpR39DcKbnUfBC3VmQ2iSn3KACdajqXW37uPagg9YX4gf2N9QAJQKHo7GvoyDRZdQCrSR",
  "key31": "22HXc7UhUina73cR8MHAcMkhE52GejbmTMepNBresM7HXzP3zkaCoGyJLUsRcM5P8bNLD5bM8XLycef9URkTXuTt",
  "key32": "7X3L1zb6es2cBn3FSFqTSM9BEEWqZBMWVYPLDg5XCS7J3f8cjKYNRFyEfMCGtHX8FXkDDtnJmdtWtU8CLf2GvRX",
  "key33": "v7FXjttx8XnChChmGqe3Y34o8Bxosvk5ZGZq6dLkMbdJMjvjz9QzNgb4hWLY65yzrAVAzYyC7pH7R3ASnStarnA",
  "key34": "3EyyhgXw7Sz27YdYZSn75tvHHBBUbuwX8dcESTHcL5xotPSrLmsX6h8DvH8uCTyKAshzt5Goq6XYV2gaGcZVuK9R",
  "key35": "2j87JTd6y2Kgsj16PukEr7YSc1tYBzWvxkwT2YipVw8PVeVhAZeCtKmBLSEsKLWw4dnPx9sRfnbbGYommJJ1VhNv",
  "key36": "5MiBAqAQXwV4ik14FP2ww29MPGfiMQWZgmG4LXe6opFKNyNuEzNiP2TPL4nNz7TwmJApiRXnZFPsUA6jbPxpMoxK",
  "key37": "5uxrUSmgfNJxEmkbko6pesDH1busyfrTFDyw2kJ7Nh5P6Pss8ncunC7MRq38uR7NnkchfgrbdjVZDiMQvwUVryWY"
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
