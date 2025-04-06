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
    "4fgukJbP8rLHjQFkz1k7YEbPdEBgwQnwg4ZfaR7tph9PvupYz8f7pZwhYXkLJaDTzMMveuEoaHpcsuNgF2wtVSNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46P4PJaarwApQNqdsaiMZYyMYVjZGDc9SjFUw41sMZEG8tcZjLY1P5inovPPwm2MgSb1nAdhM3XfB9jP5UXXUTgS",
  "key1": "37Xk4wv2zsLG3zZr4TamWJbwzwHtyik98wPiBtghDtmkdYRz6tdTZfi6G6WcsxNEX5CbaSHEei9cbL3heP8QhJaL",
  "key2": "5K2H1dsUTBJSijGhuvNfX2VR818mmUXnrwJUnXARL7opGyqnS9skWfVpAZ5KJbpdDCciYdKyamUnj6iNHN3tPbRf",
  "key3": "3auqYPoDs4mLE8ZQK4AC18E1qS9anehU1E82hWL8ds56oQPu45zn2L9ebkU8D8LWYZS43UT51ggZM8yNHUX6sefd",
  "key4": "eedppRf7bh1Sg8246FwfRmD4Kc8YqjKVTftSixcvMbn7cGWzKJd9tajGLMhSMoR7BCeWBSwDTZyNnxpnXqsZTNQ",
  "key5": "sZvAeMoLTuCgF7BuiJ9DkCScWK91yE5VSqy6kXYYBZoWyiVfAfnLHNAzW8wAt3bD1w3qeA8EvSaNrS6GTDF2r2s",
  "key6": "54HLD5KCpNPm9QAMQ56m3YYNqKc7MXnEf7wkhn3ZVoaB1SJZgSNymCWbRKhg2V5y2NYzD11xfNx739vK6GHSr85h",
  "key7": "5wzxz19BjyQE2PBA1bRNYTRCBQF2ZWKebuvEyixnjTG2UTKgxk376j3EZLRiyEDAjK49jFKChsTjNyZaFCzhEqJF",
  "key8": "4Lrh8ZPAXn3rrJGP5G18wBe6qD4wSchwq7ajmZzxdG4AdVkEmaCPkfgAQKZFcHKQjwZet3F36jyEXNyLssowntiz",
  "key9": "2rjh5d9sV4eGNWx64JsN81WpqwHY4TaRRrMZ4FpQB8FyyYbemw8PonoZZeCLbVDNpKH36tjWoE6ro2wFsxobmFcT",
  "key10": "5v6D5Nf9FbWEyV9RgCdnNyEnBp96y5WfZaxzdHiqQQEnegW1X8goi3qgLqyeu52UTt7oWnPSHrB4H6RDpCMXZozU",
  "key11": "ztxh5CdLs86XHZwRzF4ELtE4T4y7h3L3xHxPTp5awyP6triHzsGYw3VzhmxTEjJwB5wXNNun1uYkggEq7Tn6pMk",
  "key12": "xra8YUp5MrQeWHAQDEpNWwW3kiHoSXDVc3mnJDboqE9gqVabbe8GzektPDgRGWYNT6VAk83kqZQxGWKfoUkJhUc",
  "key13": "d8LyiMwy7mnNNtzWLq8q292zMX7qgkyYDFFnNaqetBE6tV5h9Xvswc4aJ4rdQs4F8vNUk2GqAgExPi2osrkkSzz",
  "key14": "67WHfnyM5H2w2RbdKqZ8tFzvpfrRUfrJJkwEx7Ei7LmH5DwPau1VHMxkwvRDE5rf8NAQoe33gJrtRpg5XZa6VXXD",
  "key15": "55JqNW2U4EXGXWJoqe7op7Fxf6ab4sCwztF5NWbUJxQfZvnmSZ85oRQRtm1seLv4aC7uB5WKwaUcZLEhjh5tbWgS",
  "key16": "3P8JLmVw1MxpicKNeHXnxRxp6eB7fdE6V4XCLXLMHTkZuHZYLdKwpfmv6aQNL7s2613VtSyJ5Y4YwF3LTi3NZVpZ",
  "key17": "63RMYcfb2G9g2KMc8SCMDB8jtasVKTsoEVkS68dZguNeCMp9wAERDWkm7pzPKp9qGa8da1CGKU459mJ3tyYj4tCG",
  "key18": "2HjGqMvx6gWCmv3viLHBUtYB84DbQRoZk4jtSsSZRvQXuzdRfZfVzpybXU9Tq2iexQiPHxBysrzqV8wxqA2yw1YV",
  "key19": "3df8Jg5A4zNSTioYT8aUydYz5YC2HqjwBx9usBZuhvAHJkEYmBSa88BxHH48wwSdN9M8k2SnKTbqc2hHpBFHQJf3",
  "key20": "2tDWY7ppAkBsfLFJ6iNPShiignpwkQMwoSyFK6RrkRfHKG7rfPh6HgXo2mBhoYUcnoqCLsTQeoWKNnJ3rfs8vUvY",
  "key21": "CeUVhEEvPq4TnpFY8NWLS9LyWiymAeV2yq9hZGo7pRh4QgfyR5u1ZpZHd36T5CGWbRJkH9aY39G5hPDWWm1Ntjt",
  "key22": "2ghBkkfSm7a8qzmTr2ncFuUJEYgAhn6sCzkWiuFiT9ZxKhN66rsQMus9K6oTHwwhszPvzVohUeNYgyyQU9aoH5zX",
  "key23": "2cN8yAgW4ZpmzG54fxbMQUM2uhvY7U36Ac5KFauUBC6zsZtckHwuPNaWUxaRpVBzPeMLqxFka53pymo22e2vnANj",
  "key24": "3YyDwYYkgzNBay8NVvD3SktQDZuDc8igLQJnqTgYHveDCH3wRwRm9TDj7vj6GnFFRXBhExikDDQCx4uL2krvZHCM",
  "key25": "q443DxeEgtsopoWactnbJ5TnHSMNDSnVrZekepw8FEhWk8bd3h7VT2WkH7P15aut6UfNepSGgtJu1sFDujRNFaK",
  "key26": "2pRoY3HaQkH8rnCDvCHZRGtcJNpZ6nJaPktY72hd5WiqdpeS1nSNCDbQT2mRkf7YycJSBMq9MLC1zKcKKUGfj9p7",
  "key27": "3n2jWm9c6MRtpjG9ck1jBwDCpNFdd35ENgV2eg1SgVYs8YMBsuuAa3t2va8BX4TR74fXjjWKCqcT7avApmmcdtXw",
  "key28": "28sawRu1drx9P1YXNjmHYsDcwj5U3jCGxpEXmmLGaqYawMDuhZw3c9Bog1BfqjJare5jEHLfVh2FEbmieyxc4TjL"
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
