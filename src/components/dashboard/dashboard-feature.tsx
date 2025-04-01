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
    "3SM8zZBcgMLdAZattjWK8HaNp47jmcTxf9JZUJXxQotfQx1FuoqTYTj1Ff6kUPtXDZgEo7oM57mv8b3qSNG57yF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DobTWu8aKt7WFmeUzau2yK7Doy2pkQ1p9GDzgFhMEugLYC3EQ8tM5buGBBHFCutSCaQdCxibrUvxCPjKEq1LW24",
  "key1": "5rWo9EEDvhck8mpqus6Pbve8hJnMWw1JgEEXjdaGXJrYPm3fx9qPNPYL9ymX2f5fSQr6XcWFbzhpJ2vjTFcPKZS9",
  "key2": "2vkeuByJzWppNLwuWYNXTamr9J6ydwTysA4oCaYDyKrJxG3pJpcXWc48HhA5ExobBDUnPoPV4hudfRm1uZNTtjpd",
  "key3": "2vMKFiTijhSGYqywgDfLBS2AGDxExJ3FyMZgrZebS31WJRHJGzLMzMDhA97HWQnukj9Pe55m6xFqszqCHqvHPP9m",
  "key4": "3UEF296bY2bKXPD6pvkpWMypLwf7SPibFwfprcor2yKD6vBB9GQ8RVBEx4GKqztq1P94TSZCx9Dtg7PmBsW2iTpz",
  "key5": "6JC7Srzz5K67HaDJ3uEbjU9D7Kdy2DNTaJx1ca9wXfm67YPRsb1b9YV7MPBLZdQmnDtR22sC9XUtY8AzNdWKHss",
  "key6": "4eShZFfTzndyrmfTGrcYDQNC4hzKEjTHVi2KE7TajyouStWY8UYPEr56akN2YXd8HP14Dn37aJcg6bSyVNKZJvU9",
  "key7": "3bhY88cRAcsn1VNQfcKnjCdmcQqnakG5rUqCetgQcEgWtWJX3sR2WGvwf2H8MsrZ19pF5byShMPmjEuqq3DNtSyT",
  "key8": "2hpR8CbFnZDP4eCEe2vmV5XcQra1sANzCJt9zoP9fkEDv8jcY8JtS2YfXsnSjMMoHDxL91B9C8fGDKGqFtMZ2rEr",
  "key9": "EpKCcp4csnozcP7tgNXf7WXM2hz3y9qCeEdmep7gLPYvXa3tdztyv9HvggDDRGYhEZNgud1r3FTYRNBCrSA4CuN",
  "key10": "dXN8aJT1Kbc5TnZu2rX1dDwjY92YEQ3zgiCVDmYDxXk836FB6867jHoBNjBDCdhW5MvxPcv3PVkJTbefpdsaKBL",
  "key11": "3f9CEQghuU9M9tLzvaENk1hmxHHXGgwUbmeXQbw8DNhPiHozdvnruCHf59hsZvVaKA7nTgQ7Njije2AaQY3z8e1R",
  "key12": "2XoMNnw2pY8WzZapHYUkHjBBBRkGCa4tDouTxXLuDUAuZtw4v1NyoigewZ5hpbfYw6sFBvgsQfPYM1yFKPMsV1DF",
  "key13": "3Mwg8LvbBUo5nsgJPxvw46b6SMgDLKbJAwPdW8VK8KPaBHk8jZRfhBDGox7v27vsPg2AP6YHZrEbhpa2McPAg1Ht",
  "key14": "2Nvog7bjB5uHDywMCHKVdA96XbYzovFcEdodKnR3WcHPxUtBcNzYTVgmnhYJFdb5VkgUizdCdRPkTMRqg6q9xjRG",
  "key15": "5YjVcs6h9ZP5F9v93D6fhxhh9JA8vK6nJckqfSSsGReuFK5Zm2uSsDNT2pZnt8MF2evodhvo3QaxiWAWj8vwqivv",
  "key16": "53EV9GqUmH7pjJXKzrfGKcW2kyWoavbranb1teosKPkN2Y96DMfnXyG7penyRnnczJjnM73y5ozSZNhCTaoR6yTH",
  "key17": "XM7xk9CUC5rkPJk1L3T8LbwMUz262PYxza4pR69YtsFxdUAc2WJDm9BGZcJd2W9wwNqvbYpymx1AxgTA2ehCcML",
  "key18": "3hdWxqTP5vkqQbL399AsbWJnsUzjHhiuahRaXvyHU4UqzZ2NZmUurXUmLWJZUXGRuLnmdREqYnQNDCGcNBTZCQnR",
  "key19": "3fQidV21X74PzGkdK9ud4bQA6h17XGMakfzLFqUWTUa5JrWGfCHJ8gCKGoQk7rzejZ4DNNy7S4fUvqggKCvmT2ob",
  "key20": "5VfrMXJddx3mV1KLfVhVfSonWbPWfghE8k8fdKrh7nwDzwhYDycHshrEQBoFuCZa8YJ6J31bALWNuka9e6HtKSnW",
  "key21": "4KEBzqFF32f6KrgPe7Rou5kLohorXEEaDe7rTGiNnMPrpbkYMdnKjD8jcXd7N65TZixE1ku2XvTnE7jmXRRVJs1",
  "key22": "3sbsW2za9Ad3FyEWxT6FdTC98tZQ75hDNTNYcezs9UkJHLADeNnw94yk3p56KxG4Nhy3rBiT8w5yBfftyhJvwvWE",
  "key23": "3cTTAYmeXVirW1siAGgWoLu4yckynmF5Xipo1VmpJTAr5QNKc1mrEqPY4xD3C6dSYMDTyMxWeyJyrpKV5S5UMx5d",
  "key24": "4heJUvgJr5PEbQ8Yk44p4VgjmuDm6dZs5fQMNwZLJLTkEZsNAyAathWskp7ZNSomHP1AjKJStpmAeocy4m8wbhL1",
  "key25": "5w2TGh2R7TP14VMj55KQxggXkPeQyDEYa2Q9WwvzDLdUsSuTMXWEzkyA6dK5LUmBgNdczx52ekuV8yiiseY5TUEP",
  "key26": "3VLE6KWyiGQkGFuCVZNGruE7M7cwFdaeuK6dmGXdy5RnvWqdVdGcKn9JGBWqXav14DBrpnGdNFMoYzMd59YznUNk",
  "key27": "4K5yu68287uZUfZfBNCERooDC95AtMETQm22RkJkhGNkwjL8VoYukAeRGgjvYr1AkCDKESnLo6VY4acnxFKzQ1n8",
  "key28": "4RvNwPFxxumBF86HVYBdpU3Z2AqdVbbj43NL1t8WKsQVXApk34xt3JTdzTdfQVAN9vG2ALoG4UcP12XhDiUL1whc",
  "key29": "4x7bUkNzTaFenqmLvZ3ZmADjiircsdSVcudcG5KTjiDBMAYsNVkdbASc27prvD9XEo9H18wEDuGTF54vSMTBCqMv",
  "key30": "251TLEdYPHqD37TFTBwf6dfBRjAj4SckhhDL7ZD8UUWK92S9dNEPNgF2K67bmSrveqhnxy96VcomCSVvkSGgH9EJ",
  "key31": "41JEvzP5Mxurvp3uES4NAU3fvuL3NGxjECwrd4veDok7QDxdicUPYZUq6VztYtX8GjWxvx4dpTd1QgA5gGgtc638",
  "key32": "56eGtqssF9yHMuMj8ETHoaxBDkSSx7psn1jW3vb7WVbL7hcs7rEnpWLdZwNaHFmEgvM6BPpDHijwrDVMLUp3DSyz",
  "key33": "fvta5umehe7MJtbVkeojwwDDPQcbHiHA4dzNci6o4VnFFi5BmwfRhooys7yLiko9R3adMW58b21jFwFuLudRb8H",
  "key34": "V6j2QuCZkGJaGbevon4gbNF5tGZiCtr6i18qBLS1acuWTDS3twwgngaaFYk8iBDnnczGdctLBZTzjGmwhRzKr94",
  "key35": "fT9EKCEKiD7GvcF9LdnqnZdJf8J3jGQHC5M37a1tLoaDCytfEEJAZBFUTADXR3KZtSombh7pfPCQnv5zfhHXR9D",
  "key36": "4qKdVZnNfVeDrKC5c98qW4LWSWkLoKPNJNXqe5cBv3rDbE9oMUDPNkMnnodL5y5FDANMvkWL8MDbL7vtkYCLyQqH",
  "key37": "28G5wausPAjk6fSbE81irimgokYQjG9qHcSDgRMrxrBenwLVNsNJuSb6c4uPXAjQinbMGZotKrbbiZAEWaq5qsF4"
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
