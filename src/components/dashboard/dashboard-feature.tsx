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
    "62Ba8RFNbRGfDvpBgBrHqMozjjCanpSwa563PxEStNwWJpoGMKFjRzBQTP7psAMX8QDfbCJPbcbTgeDW3fhuPhRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YrEDGK1qdXY16VUSkc9Ry5j8ZWU9oYEhMeGMiaeum5EguwgtwEoKR3wFYzRSteSyYXv5g76yaBdRzkct5ewxA77",
  "key1": "BCgy5YAQjpada3ECiaAug1grZhMqBHCqZHcYXqLqZogZhLqrGnZo9VtEz4TCxHecUozfs3P7rWzjCEhW36vJiK2",
  "key2": "GK3k1CUPPu228aLq9iq7V8koKE58WYYHymCxCes2y9ZkwgMfCUvzbd78XsciMn6ycimPqBrL34APFEpj2Fp9UpZ",
  "key3": "3fQ9nZqhvh79nZb8XJCNb5Vo3gqYgQq88bSPYWtxhkwie55YQvhhtdq4fvLMcgeHiodYMzCk5mrH31iB2ttaq3pE",
  "key4": "5vMJ45o6sTGjoQ2sFtiG7wj5pQB4MspptDFvNVbw4xDpzBtn4sC9Ro2SNz2o3afSggEj8jhuTC5NUDNhGiKY5F9b",
  "key5": "2FJ5yoAWWWv2x1daEQxwPaecKZoMhnd2Da6R9KtdAwfevPkJL2kzbsHqXfHJUUUdTahCnWQsoHpo1HQRL3QpHHn8",
  "key6": "8udEVKqwW3QDE5YfJqd4MLXCzSmsB3CMgG2eqjCDByGk1Axdk9o7ba5kwHRvTane3B4DLp2X1pHiLtTFGokwMQ6",
  "key7": "xp18rwjUufAmA5enaT8BdW7rzXReYCcNNBUtwENDvH775f9H7sSqeQNWjuracNwaWbMP7xSescwNzdUnyQwTrME",
  "key8": "2hk51mqZWyWkmpKWMVXU5JJTFJ5i6y6N6xLmQVzhfiFc3uZnVycYZMDbm5v3jR211qpifEkEadbKCEv218cauYb7",
  "key9": "3kapcW5KJgpy1UbgeiuvAYus27kdPmRLJETxNCzNKJ1e7MHDHHtJs8JA6EWc4Bb6Fac1yKjFzUgZySr7AVckqDY3",
  "key10": "5H5jPssJam9xGs6zvtujL1uxntMNgxU7NivtvHB59N8192dUrdNXAWzRJZkX25JMYRzf5MjNFzt5DwF8ajzUiQ3H",
  "key11": "4EqSKzJQEs1ihnMZF1bQEboZogNPhVudp9NyoznLJcMtLD3EfbmERcdXAhtzVX6cCGuaUYUN5F3PyJhx1uPd8gPf",
  "key12": "3Y23Gd1w8BgNw4cTfTza2VKufpH4TRW4epcFwie6GVncskc9LgWK1SrcjZ5pZuFPwacoXUWkmk9X2piBk8V27XYN",
  "key13": "VJHXUGC8zZ8bJppnbcGtb1h7jAyWWLtCXWp5d7NASt2pVrp4MdRiMqu8F34TNzj3udXm3U4L4cDF4wsYgqd4suc",
  "key14": "5Ddk1CWHyRUnhn9X3zZNwh3dMk3z3NH5d8cVSCA2membPtkxvxXjxpG3ACoEfJAP6nyoKKCCXCyE6rjKbfM3HPkx",
  "key15": "SUoppc4AtuG9oNMuuZkXcEL6Jix51U2HB4QhKCwc6jMtuhR8wGWumMEGTSfFieCbsMGfGLbaWNL8rPUaGHjCkLr",
  "key16": "TGCDeP7V1F1j9h69HCxFsXvy5uJTeFXNh8tjm4UiYhmw2F7KKkyR33pMVGbdtYLZkc3RjYAtUXGRXqjeUcqvzHD",
  "key17": "2XHZAcccSLMsYyAHqEsC3ZUVShvqKhiPHNEg2shf4aGJuV5dT4LbjfyFzpoQc8ySBcdzERuEtCV7J8MX1thobrTc",
  "key18": "45Dzo1HqmCgMXrnx4VFLkNN1SXDZ3XbTNoi8TPRCxUnt5Po5iQCPcRXtdLR9Nrfa3KVMHpm2XUEp6mkRKsxayLzX",
  "key19": "2yNoxNQ4kYnmBpWSLTieioFJi5ySsiczLxYQH9XVKbL2Yg5eVrNzdYoXBcELQHHNaowcFs2aDq9haJ4cqG6nyGmE",
  "key20": "4PF6WDEj6hr4DqF1qh6Y6VeMa8dw8GfJiFKEMdzWtqeaJcjwXNZHyrd35wRP6Uj5qvFa9rjDaUBervRwiM9YfFS8",
  "key21": "423xAGfrue3X9fcQgGknw8Mss7nsdbbPydXRjbhWEjMd9vGMFpZHhyzEnYqpXuNzWA5zAUqbKK1EBcxRPGEWoZuW",
  "key22": "eAriVHXYS2BGUoMBFTfiY8hz5xx4Ye8eTDxPu2asxCTWksAQh3gygkfsdYGSUGuJPc4skPx8BqPEbkTngFGMQW1",
  "key23": "3WTG2R4ecHWH89qfLsyqayJvWLjPEDqnn8EFQdGc5YfgahVCazmnDLZoN38KKd6YBZV6EjQs8VMjewbYKkiYvWTo",
  "key24": "5eb6taVuoYqudkorYLcZLMZdWojuPckVdAnVRU6GskB6NTusKtwh853sEhgEEZCi8CMrbpu3ontf7jAwhVzEn7JH",
  "key25": "2fSDMWDF7oXA9CBrtiH84nk1LJ1uuKkdkcRd1751d4qQD3fV9eVrCexqmGb5zhyrzpHyJiUPbHAZxxzomb1tLoZW"
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
