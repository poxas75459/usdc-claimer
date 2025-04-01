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
    "FogrkXttAHv8Ye2rLDGan8hm3kKKQAaSG7KkYNSAybPh8UErCgj3HMRm1rZKwdiBdmpgVLM595VkmxkRqq8dRgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QRz5jR2keyDoeKgr5Gw7mhUTaMNqoizkxccoRDHmq6UzapT2GRCTCJPVMustiFKnYf7uKiWFrxiBBJEWPQmrT7x",
  "key1": "5HembB79GhwK27cUNugwtU8pBBzzbDPThT41YsyMwbSXJ3UtfBA5tjaAD44oLdQsy8Sf1FBmT2pHhiYSwNnwvB9v",
  "key2": "3viji4vdo7tWTx3PCMK2Axb4LKN8FqymAyJfn6ZfrnCvwB8g7RrsAuhMetmj6bHFhcPmByFauo5LZwR6VyZxYxTF",
  "key3": "3vvjMN1mDEStZ95n2GnBksU6UT78mYShchq1DwovXc51jC8hnDGCb9ZxY3rkSLhDQ91YzsHg4SJDDz1jnbzkeKuz",
  "key4": "5hPoqaDUhGUF6RY6689yCtxmt3fDQ6AMWZdEr1otnRit5KvJueMdGrrFkgSk24fbjaD6CX6ui6RVjcijt5j3FdZz",
  "key5": "5NtQ22gTP9DtvDHRsRM7yvSt5EoAWFM6dQMvSjG26X7RYQH3ZwF7cLNbp9WNPdqRGzESbuJXfiMQPFArEt1guo2o",
  "key6": "2KuztHzrS3wno4dfD5k93hG8T7NcNSghYe71nLemuxbaiEXEJjyxp7a71aSckwT86LGNkha5sVnhwBUHZY7dhdCP",
  "key7": "3PvJtFVUoNf6KksMXQECMCvsR7AGUL3CpfM9KMPEfjC5VSYQ5mNEGj8KuemvrKnQj41wDKJpq94NRMVJhNtxFsva",
  "key8": "34d6qw4kR9davNkAgzG8A5HCvaAneSoYGohCtymVdJ1U161wfM6JZURXqNXuk6q6P1Eyo8YEDsSPFdCxtXdBSeKF",
  "key9": "4Ymkm7zVLjSmmYHwbswU5AebLxnsBX1zfTmhmeVy3TY6ewuQbrAijCjtiWPGvfjjGqNdKmB2LircmwFHr1A8JjLx",
  "key10": "45U9eQchikYtv1vCTd6s5BHFb3eAXn8N9SqwUcEb7HpYbuxs5TAZFSyLyixxsMZkPcrpVeYR3f1W7X5txCw8v7rc",
  "key11": "5dta5Mm4PtjvTXtNBEhDbunQztG3rBmrZU9RoueHQY8HvZ7mQbF8F4bheBDA6Wm92zXJSwa4YmFekCE2xREVawFe",
  "key12": "2iAxbk7A7XkyH5VdXC3HbGBbWvLYiLEddmCokywJAiHR3rxQKc6hw13mDPP2CP7hraL33crX5kSEcxRFhTrHm2mB",
  "key13": "2QW7fDHVH7Y8nEfqeAS63m9JpJk52oA6iV7LUrL17KsvQWtJcFBHsihcxY1sDWh94uZe9LvZSSyHogyWcbCYCr4",
  "key14": "3PUSmSj1tdgFAPBse4pAcFNpc7r9vqTtYTdFkDwnofgdkUfnGRsc3jNaMgepWxwh3kCwDi1TcioCkqnC7PpsZRGW",
  "key15": "YFpyut4ef2Y7yutmCqwdBbAUrPmB8fdUdbRRdiPsBQZGU1yekhgFUyyyNkiFMDJrUcqgdt9Kz8KmwDh7B8ARJPf",
  "key16": "Zu6VfdYyVun4YS9dQ5KRV7YPQP8XFwsARHZyGUcyEYbThaHmSzUuKoL4y9DeTcHDDkYDvm29rzRf53yo41bNKWw",
  "key17": "2Z1r2dxkkd9YaANPGrziHhHKJ7smGNzYyyjM3cDprJ3z2XN7TFhNqdyEEHJRQVgVq8LznFuNSsTp7eb8H9G65qtN",
  "key18": "5WH9d9niY3CqAH3hevz9nbnrqprqsVpRBafFBEbmjUHtFCm6fCARs6vhygCFo4TV46tTChx21Kt82HqX6e17w4FN",
  "key19": "4mDJwKMZkFjoEmB6BmYvR4pGYFQhRYfkjuPA9xRHMP2t7ecgVaZc8vyDs4vpwi3vhYiUu9HojuHBkJoYfdHYsPsw",
  "key20": "3sxsthZrAkzfLtT24cBzwmSVh3VRL5fQ1mauPJgAqLk6GngodMupt3HQwnEhuL3n4Q3ANnZB8VpKuXLLr3BJPfiU",
  "key21": "49u3FBSPTf9Ed4Sxhmf5HnhNNzwjDsjkk2FBMMZnKSpvZwoXQg3ZKpmZiHn6GtbR19u9Y9a2YPf46MA2gbYpT1tS",
  "key22": "3fB79sDFXn63pZYySewv2UeZJj7V2tSUSfkHt4UopiqCSqxgQM5rA5Ej3H2QRt4C145LbCyec9nUQAvKAUxDvawL",
  "key23": "4vkTt2dMhPCtCZenhQ17vatUbo31JWhWTX83iaPW4FQuwAEJ2879LZysDwe1ynpPdCeKn8ngyZ3hFCg1UsrntB6F",
  "key24": "5shBKkB2rLSvBx2xfX9g4n4VipHsmFwH4QwyQ5DxfT1yMaQH2b346gNm8dW7168gay8mMgdQUXBoymWrkoVJXHiD",
  "key25": "3owbDLbnDReR3shiyVBnNSbnpao1b6KiYvqtgSgj6KejGP6SYB6jQbd699JTbcqmbZ7tfSVYWmTmpW2x2LF8CSfT",
  "key26": "5fbHdkRdPPLKqbRZzBEJaHXrxEb3JuswVQJV9BMdpmrAV8xMndPykZQJJWgqhxF3JNp6cYtrHCZyqcdztWoWGGV8",
  "key27": "rt7fiaeFBy4iSRbArWg6vazYPhEY2RZK7zsrWaHkgx8kYo6ksHRXmSuywGvAqZALHvVcxFwHrCmqsdvvjDHXsBg",
  "key28": "2LVhPZZTrk7aTuwJPyvu5ibzxaizJuuXZbK1avfDBae4siCCt7Tv7dJ37jTxt3q2utpgya5H485DxiSibLnWzKUA",
  "key29": "QQ8JSLkX2dAJGcuiSvjWckMQovB5qd3Ym4ERYUdWas54e5dRKcMhY2NxdwzKF9KyvuKp4sEPv6c4j49AjX6Lgix",
  "key30": "4gqSgcQYruJJPa4eWZmzD2hE92fRH9Rz1a7Fz4kKZNYLo3SY4CnuQWcjJWsJ6d8DDanh8LgW8uj2bYxRGz8J6C5a",
  "key31": "45zm2D44cHfBBNfSTg91qRYy5UooF4uoSdn4jcscSAzUFM8515AzTQHPEc14di93PZwVRjJ2KAmsSA57U71WPEtL",
  "key32": "3rPGnVuTNoF2Gq8pg4d9dxiTAajRRRzBzjW3cXakCqqBhP5wsV8p6jVLjo8qEjv8TZm145KLyDsocEN3LbCQuTsT",
  "key33": "pue1ujBaj5bzmKZ73UmNMQGChdVSAUKmNEMKAqpVTYutG3xTxcyXRxhvbuoFEyXahwkmEyJLsfaP98o1VztSmhF",
  "key34": "5B6xkQEST5nqJpGsp9Z2KHySPuD7fh5EJNATkpRUE4MDb2EpqxZhvcfdjLkUVdEi91xRFA3Uh58xaXaQvXRaB9wo",
  "key35": "2kWoKSUtoMAy9YgjxN79FqswR5bgKqxLoomHx9CMqk4LnwBJtdkGm2pCm2ioe6RrFwd4SKL9pQxM54hJFpdSe6uA",
  "key36": "DKE8R71bi3eyUzTkA3qCBYAjes1gXDnSB81AvxSXGZ5gtGGtqMkYow688oyZ9AywRGuWTLL7zmVsA74hsvL3uTe",
  "key37": "2QHcR5pT4KjriMyXuJU27yVkadjSbHjAC7ZGN4FdcXSusT6tXk7d4xgUHvpBogm6Ca1MZp8tjBPZdixznDgHg7Hf"
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
