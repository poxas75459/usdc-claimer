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
    "4SJY6hy8saSPv8hCigc5sfoCiobdCfb8J5UH6KDybRDB7tiRP4PCEtFv5fSekyDi8wN3iAnJymdEfp8ip8fjnRGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u3ubPZad33kDDhY7dz4tqYRHnK62Q3bDuWgMmpKTgx6cPLiPkMJwNHFPzbWApxXBC6EhS9im97uQsgAtVBPrBb8",
  "key1": "1B395ZD3YmNAt6MWF9XainjCsCCWE1Tp6reSbSLn2NkCTmCAPhvs6v5FxW99KdJD175kP25jipcjmBCCmVSHaPp",
  "key2": "3xkBhhCV6QDmxN72y2nLjfehJy94aruoGNHJ4jEJqycw6Yic8SDuwaKdshkwqNHBtTsuvjVQpdDUmv6G2Nk47JGU",
  "key3": "2MioVcBGfhLCdDM3J2bnovABVQL15PUioyzTBks9MQEJaxfaeLZTT4YARBcGLRFbHk3MGc3U8BwfeLfbhEmKa37M",
  "key4": "2nqGChtVVrHJ3xvgkb1J6QM1o4JRsTyTNhPnPvRUC7DjvFu7MT8HWG4TmCscUjcdpVaBWS3AuzA6W3ZQxsdzHecN",
  "key5": "23FocR81CuYNsf1oPXHsj8S8DvyBDhP2QPctqmCJrhTBnD7D9pfJJtGG33hbDuEaZPtHmz6trdn8hJzyT5b8r2Fy",
  "key6": "5tSBycPRsKvZL26c6cZuXagmJdbUfMSBdkrLBCvTyru5v6P3aCSRn9wy3QLpEMPkAhKZuFpKayDTAVPCQsLpmxCb",
  "key7": "52NbXAE5AsJMKexAhjLFZvXUuu4EZVfzRra861KaUKdTobRwDLwy43TyFQbM8BRnkpTBwgWAjkZUP2FE7ZBH7rqZ",
  "key8": "n2VZpn6KUDsjxvWYKqRmZ8kfiaMiLA5gUdspeydiFVGtkiXp1W2vcNUTDA2cUfuEPkskjcjVUQ2wNbYF9FdR6Qx",
  "key9": "2DyLExPJ1nvvWw8hR1DzquTBMmXsJNfgQw5TKjDvbYLeFjWdhbKhEybiN29UerVAwhLFGQvjbBERPjY2zZxZiqQy",
  "key10": "2VRELaqHoSGnkwzM1hMipKRcrwGPLdY6gtBZwtBLSYQ7UsSvjERb9Wz2dzxdvFjeoYSZryZ4VdjpEtYK7GiEgoEy",
  "key11": "5k1dVmCYHYUWYFu2HZh2CYKhHf1tFQD9C8Tgg1rrxczLxn2UVpR5u2mePWuFSJfvC4LFxeuEwaTt1kVeHCBmRWRR",
  "key12": "51c5GVpExj4U4PRTDzK2XAujDUtHQjPdVXuS1ou6p9nye9f1KKEr2MMtiuZrhxWfXmAAdL657SBhe8y46jAmebLz",
  "key13": "4YWmRSHBsSFa2bSa8TzPpSAson7M9qdCWARmFcKjggSKWsP8Wk84WUM7m57x8yn8uHTp6PxRfGSGEPBUqsY4Z1rr",
  "key14": "3BU8KWsZ19PAup25wsFByoU2wcqrfUj3ocMXmdcjty8t8Sj279WQB7FBpwntBnsGHfKegr9ZVLWzH1KdKYFhaSxM",
  "key15": "65x6iHmJmdn5JS5132pvpM82rjLnHnHD5k7h2ispHFnUNvF8bBhZPKmqnTg2GhKPYPwpVHCcsTcB2CtWg51gB3WY",
  "key16": "sHk2cNBuuvLGYogaioDpLSj8XdrZmRieVdHLKvXPMbfa7CQc4TBBw2XNoXxtW4dfHg42eRJ48Xun6LdnS3ZQNqi",
  "key17": "33dWthJi1FLydVUt1Y5MCTELKgCjoM2caxzyZ6h5zPf14s8n4UiB7ibL2nF4QkuxeubKan1oukjDQ8DL9c3Q55Lr",
  "key18": "4A8wWqsTQKFtk7iTDGQbSgHbaSxFQAhMZrcgihpisSqMmuzbX38NDityfQ9mQnpwHnbcwUaJe5HLd7zzmL4SSmfL",
  "key19": "3aoCgjeuZm6snuPgnpJeP6jhXnXMFCdFYNuo31nGRskhYvZWL3YnQ7vHzGRN2u6nfbt441vEPCdf63XxcBunavZv",
  "key20": "UidbggnkPsNM9f23QcjupcTFkXK1XN3ubqrm4vDo4LreTjuxuHy6ysMfRzUmwSbcuLBavUvsgRazHB7NPUuyVUT",
  "key21": "2mt67RHHBXncx2tvwmvpgiR73W65hfNAUVuPLZBPnAcdTDz1841aXn1NbzCeHaoxuEBbrnF4zokHRE3QiXbWpC2W",
  "key22": "3B2EpFXKmQKJ5HW268AL8BggUMpbk67MU7veufN9XAKphrj1yitZ3gSEakmfsAnNkUbMf1ZyiwCjCz5kPULuymbH",
  "key23": "2UDVjoW6e68APVbZFokuqmdTpqdBxEWG264RY5WbwicD8q9QKDsKx5w5e9zw7t96Kx1q1AZpvxK3MSyUwymDFT1m",
  "key24": "2hGmKYPuUw8RfJAWQXGGfWzNSD43LpT96wAvsf24wwZURLLdnqq8pihzjUNS3N9UWVKW6cz8f9tQj1mP3qNQtDCS",
  "key25": "2FavViQXwaVs6YjkwKytPXKJ6ixkjiWyYiBAbaG3psPb4mmi7idCxKjti7NdgPesRT63f6i2jgLX4NsNS3ToCxfu",
  "key26": "2kAMRtkCXPiDFR2bKS3VHDgVMpouYZgX7KisRr8NXVha96cWBLBzuiFEuVWNE3JKMKHF8XGCwDQnjmjtNvKtnDBP",
  "key27": "4Uasy7oH5JwUApzbYQ7fW4P6qnU2AwJrUrEP3M5pf5kYWNpVXQzvhk4xqh4YsyCRoLEPwUqYYrbBezkYUykdrEZu",
  "key28": "2J4wDeqDRbenZHEKcDYK4dDpvXuwf9hBKvkdGeQM2WnRdGgtqsjGF9S8Y5JxRUDrrJbwsAeAmeXvKdjeX4kfqRcB"
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
