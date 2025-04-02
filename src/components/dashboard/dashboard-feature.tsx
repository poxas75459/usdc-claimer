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
    "5W126TFDKbh41Gns5ArC8zKx2GBvyfdP6pqBXPoYnZgmViSwaBPBVzL6jd6w85hMsFQnMk6gwed6NmFaCnyF9sYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29PDRLiTJT36U7Y1ML9JPET3EtMorPKo61Mtoy8UeqF9NF8PBoAaWFQFGg9qB1Txrk37eLrWsAPHZEeayPMUWosQ",
  "key1": "3rN2ZMnK2oBGckzurrtmfnhSjQbkZvdMF2WHbun22bJCwgzL5Msg99gy2CZieSsbh67JAQjGgTvQNHf7gQPsHZLH",
  "key2": "nmZri7zY4WwDT2YE6op7uHuCP881UC5w4VVZ6j1bvZgnj8qK6o9GwxQXKBSeqPoQaBRVudcxjtYVE18iZkF6kzQ",
  "key3": "iPt6rNhzpJdQPXGjbcsdvPC3WNP7nV186xAyMuGc2hNruKu641xiYArEm6a2x5Az1KFvFTWcpJdZj4h2e7W6y4s",
  "key4": "2ishuf6rJVzjU5XFCgEWC6mRNgcDCZykmNYcoGbhb2mvWmeDpMqac1sANpAzux1sP4w9r2mSiwoEjMHkuYnZ59ju",
  "key5": "5QuF4u4FdmKHp3KcerjwuCpdBbJde6umFnRTFomMDRRnPrvksS3R76XbxPSHUAteZbuM3gKEBD9sX9SoVLJGVj6m",
  "key6": "3to73zuCcyH55bDFu3J7j7uCP55Dzvz7fns24uUvtZ9f1pXwwLrDja2Q39FdaMvP6csNaf65wgQAhUHY4tqXTuF1",
  "key7": "f2M1fTAjXCUaH2bma1x3xtJrywUuAyGsK5aHRwkRz5nWRmWYCzbttKWfouzzx5XuF5RRJmPcHCEuSkUF41jVNrn",
  "key8": "5DGytnirGZev5xkMj7J5DiwPQaV5vD5XxS3kRcWqyxd577GiwRSVgtYj5Mwiddud3Pn2dak3HhHWAMgNasj5zWrh",
  "key9": "2ywwpz2cYkcdpyryynE84St47iFtbvaUv5vnA5seciY39aDXevBjfd6ZSXk8sCpeWSSeA2NMBeVX8FDTU5PrEdqm",
  "key10": "S84PMcf8poNjkqPbSyM53C1pT8wHpXdsQ9WQLnzx3KdSgyGrbzcPyNtZ8gmYVboDfrH8Ygfi9jdYKmMvyTGqMtj",
  "key11": "5g9nbMzdSZmz2FhMC7nB92WbcGsDfU2jSUk9ftWg6Hz1RPzYULdW3x4GdgvMNBH3AAtfrWKpTnHP8jhSxrcRHdFE",
  "key12": "3vV9Zz4ESza4eLrn69Ub3rvhnjkFN8iVz6QdjbUktno9yVwCUaUFbfRHdPfzbhW3AKp9unmWFaz9KuBJ4KBFiLrt",
  "key13": "5Jpnd5uRiSGPeKE8KQMuqwVEumk5giBoEgMg5TrvShvu8dBYh3Mr6GtPXWpi9EgEiw1nbae9XqJTP7DTKzuWyLVo",
  "key14": "2x2xGgdHwk7CMk37YcYtCtnqbxJ963DYwQ8XGZMtueyPfW6vr2DWc9Gh8SbRhz1vXMsSwpN6ovUAMkciVsJWwzd3",
  "key15": "4fwNt9QWRAe1VMrmbzJW57dUFzVJp1YnyAc44amwcubvupPgi4PtVrmuZ92GbE1D3WkwYnqMjsDeH7eX3snJZnPV",
  "key16": "3VqhyMsEk3jvMhDcwigvRfCCVsHMMsmoATPvsCd8qyXnjCSTiQcfn3YXPTeRVRMS416ht8wvxHccx6Myi4LFhHbS",
  "key17": "iGfpFvC9igYycidu1i2aeS9N5R9jtvGqzTApCqUTr4Y5cRt76wamdfKhZbB3BBqXx58FSgWfEvrMHpbkDnHjX27",
  "key18": "BfEbvzyWKwPMMZ8T5SMwwzZJsSh5rbZ2Jyx9qdqcJfeeVgY4QUimpxM4hjXBGrZQuPHSzHWEqq4AfnR34HF69fg",
  "key19": "FjrRCQ9w3XHV1GweCG2tdhF5RjzhDPpNx6oPBTsoXEGPmmBQxRNsDNiEdcMNpEDqwqscPDLR8Q8tVkACAiZ6W5W",
  "key20": "3GmvKGxTfQEGyYco9jQSfAwJe4K1RCy98gmwhFKrnbKmVmwipdJA7YNiRF8Nb6HgZKXddRG5CZqQ6RUQD4kuDpCQ",
  "key21": "5R4nwPBuaVCXtrCXkQAnbcVjewMEYpkbP7ApbCSeQHifD65RpVkC7QUBcq8ZJ9KkYMYkYaQjVgvJVKHbqpg7RBiN",
  "key22": "Un23AZ5RgcNaYBmGn5zLzgqoEPXmeAyV4irPNfjQuoNXNiKtEkAJwH7NcbqdZm4UeWJ85AJAA7b1fs6TtPcAQuz",
  "key23": "2JCB3JvVUcTSrVycuBcA2mXxXpQcpCtw6sraiVkzB18hR9FAbiLTVzPu7XWqHa56G9MrHmgSGVgXyKkyf3Tvvx5p",
  "key24": "5XUfpWcjsNkWiRaDeBg3iMxJ7mZ8YpRhXnxSwQYP5b4SBuy1p4qXeVkSeVyzs6zeFMdxHG6HwuTsgh11sNqsHu5S",
  "key25": "5P1vVNWy3TWVFqWjLR1ibpYZBswb6Pue3sMdBgFptria8CBYYGNphPjXDByAMwnwDW4GWZU4BSwz4x9L9TaNHDsa",
  "key26": "649g8uyfmRx9ubZSEozL9PnbJwyyWRmyX8Tp7nYfcFstwGj3tbNT2c1pwTbaZVoHXy8kp6QeunDKMCHLoMa9Ceqc",
  "key27": "ADWZzGng3NTtJQTPHbXsFjN9dPzc1WDjD7EHWAzFVMwtvByu4aeqGHXpUJrxTzFtLYyD32PmiE6V9KmmraCYSTB",
  "key28": "4Q6Qu7QFWKumsYf2cujeh8pRNuhc3RQ8zYYPaEyji6taomWmmAfZ58CDQu2VAk9CqQxmT6aZK93biostmapMCuiw",
  "key29": "4wWeNdmNPQGmiueRPK1XeGxAbTuWaNjFPcn6vyA64BbQHPV9RCHWQfVKLt1Bu9RHVxNqKHsyTUPL2kCXXYLNPJqv",
  "key30": "2Jo4Jpob7UdRdUTxsP9269dkxHJR5rCgL56x1z1mF1P8Eog3Z4ZERd1NeS6CAzo4ykCu7o8bcKbKbT1CDeHHtLjT",
  "key31": "4FbYKc39x3fjHVwSmeUqjqhLphVEo3w55vfWSRH5edGfreb61bpL7VTLPNZuDRTkMB83iTytFLeBM9WRv3hqNF94",
  "key32": "3SXQUkWLnrB9UfWvR5QBWMAQzPBCkY5fbz4A1uhDpcQMtDxXDknYJ2M8earGZRAJWduwodDU6vgcQ3YAF3iDW5HS",
  "key33": "2v8uUzG8b7GVm4EifPm3paecpufaLXUAcxgYFJUWtCEY8HYLo1UDAFu8zbMZcdxfSmGwqyU69s4SbtpFE8g3fRqZ",
  "key34": "3YG77etBcNDhNbsJKn5ZJhuufohAVCiMuoyWCs34P96bcjfGdmQmKQdWQGRarMDgdstu9opK8D3uUcTD6fvmTG4i",
  "key35": "2yR1wYSNEz4dhzRRBVCJBMS3qnXwtf5FESmKAPRZ9KaJtg5AAESkBwRDVRLx3AZgCaCPyTGAJuLzbFaaQiMwgxdG",
  "key36": "Q8uhMwMYKK6igNMRY1uSkfCr46i3GHBTrzqFTRkRSRYn4fDd3DeLkm2v8hqB36VL7hFyJB5NtiTC9L2Z5vv4575",
  "key37": "2uGjgshFFfiHgediYEgFvV171tnd3qPwi8jRyFb6k6ircb32sT4gFSox5kNJ6ZjhBAZy5uff92Pz8uWXqdDmbhst",
  "key38": "4AvugiMNJuKcs9SC7UgsRsRn4wrUGeUfavDWDarZvH8MRrzzwHac5pUjvqVw6YbxxQXCZx5ZyfWXdH2LNFPoeNW",
  "key39": "HWmNKjS2nNkHDxkB8Xo2hM747wDKNXcrFDFG9PkyFCfxXzWzahMo4BjgTDR1RY9rZ7hbjgtUhAdFrgTaoTvP3cQ"
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
