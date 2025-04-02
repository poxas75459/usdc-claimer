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
    "uyE1M8QVG2pi2SayhD2BEHVebYnFUurDJGwoxuufH32jErmVh8iv5GjESdE8enDPVfemd9uSWtqnMa4szQ9VQF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ySJkoxm9ZGAQxZh2wk7XRrbEzuPPozvE6GctgYRXCj6wMVkd9J7JaqrCRTqnom6XS8KKXBq7dtgbthrvyDomzHq",
  "key1": "63jY6oP4yqDkaL6VdodBFhVQdaJyZuEnuLxXnQvCw5muxUDCoc985NH58JewEvkXRjKV5vKQTf9FrTuAxiTgAcRi",
  "key2": "xWqJyt2XAgTCzNgUv8LqzqUEeyBBCrDXbAvbiNf2FgwAcfhmFVv6wVPyLJr7NFPEnttgHEgQga9pKtgkH9dydKx",
  "key3": "Y8LQ6LppANzFopxScPXpPAS1npAK9niYpyNdzTz4bMXXi688NCHyGQ4yQorj1MMX2fNU18TKabgrKiwtopE3DbM",
  "key4": "2TN3TbLkVvbaavmeeFYzvHzv8gg4VKZesCeoLEivZ7RuMj5C91BLiay5CLia2fPnRZohKjQh5vvs8B6mcAFT1T2D",
  "key5": "4WgfnbN1FduMjNVzPJgNPAhuXLzyWL8VeecBA9z8iZQMyJfhRoUfuEez1WeJWBLbGyKwHCedWfwi7ZJKH8f8178N",
  "key6": "5RLDWHL4VUBGEq2grAXRgqTJJNJuadL2BY441S9yWUEanrx1kMXzPQv6C1i6kykvpR52QeLFaWnXeAVKexEAaofc",
  "key7": "5a6g1x3R32jUCRErdmA15AvZqg9gvF8qzyoUcQdYXio1msmdhX74P9VrtUjDHVhJUiyTFRDF4h9m2moJ7An8ckLx",
  "key8": "3bniTYYmp1wF8cp6GhaDp7oRzs85p8E1Zrjavibz1iNNQ1J61MrhaquFbKz1eNrJd7oTFo7Zs352AKLNptdeuN8p",
  "key9": "34WkNxEFA9HUfUz85FyKDGDiggAfVwdR9Adm5Gz68i5ueLDjM4vJRgJDXkvzn9zUdbKx6huhdvAFryLkvD5zPpTb",
  "key10": "4oknYuezSMXKuUNQ78PFFQKRj6BYBrsNW8CLnuKvV1264j7bSYbLELdLprf413sXcVdbAhPR6aKrvp9wcQPx8yiA",
  "key11": "4WaKtWSGoFQy4xjhdRkNM54cMDS4wiEobcXjTZAQYGH3VyFAeweb6xh96jvVXmUchRNaXkVM1d1ntW5woSHyjDz4",
  "key12": "2NiSeVny2LjGTrmKqnmaqvcocembzE7wrhVKKTSJWEyCHanseRpJAyfb5ouMwDwekcYG1H4TZH6FMoLFG5vWypJ1",
  "key13": "4pLgFuSUyk9R5ofpxiVKddxvxJQMWXeudNMhWPz5jD9kJRdP4GWbVETMjU16u3j2Wd8K6VySuQB8pSj1YP7ruzYM",
  "key14": "LJ7r12tpu5VAYsm3QspKZBooycGLvECmdoeDJULuQDAb2jGYSWmawJECUMDmFMfhNLoRvCe2ymnksitxDsKSHTq",
  "key15": "3HN1zqtiBM8hosCUTpjK3GaUEeqxE8cW2fPSQTL677bUFJdx18CnXiAtwo5BiUerpPkVYs9wj6eir1KRGEJLyeuA",
  "key16": "XKQWKk5x9hTa8WJTygYG21JCj4cmAq6oonHYCGj6YGsB8oLRx1CESKHriTUB4XDs5mRMW9zPADiHgL1UfdVq1X1",
  "key17": "24LQtBBKvDfykCA2iXW2xyARUND1SxmYNwFhmu5YhJ2Pmv3iG6CiuVrSAzZF7mrJK2dDA5wdurwSHfcrNaHSu41b",
  "key18": "33rV91pUhVmq8aZjvA8BRaGJQYBBjA2Q54SNgYLwb3AKV5QhwoHzoNVQoinyf3Z7TXwBGfQ2pf3m7gsoEzKuKJxF",
  "key19": "21kNB2gyo6XaU1GofuXihfToFq4rSsBxvFeW9aJF38rn2ZLB8Z96k63q1EENWiq3cu4VKm3dJYBpiMBotzAvJSfN",
  "key20": "2iKfwhZwJqZaTtcN5Ri3xrRAgo8AoVM5EP7XrkDKV6QVpAK3C4nu5cWL2tWXzGJxoRnnPvGtnAxrSKd6oKUYSxqk",
  "key21": "cPoqTM9GCs8j9Lj5LtY5idfxyMRsh8T2WZoU5taRX99hq4Xqc9mzocKC2RFwVgjPJfLJxzzwVq1SJd4DWzFjAYu",
  "key22": "4eeeH9wRJ5CyNY25LmXt7wGGV6uRR81H7B4JRAjwnpUReB2a5NXQwSzZK25tkQVqdmDsEUhiGUkVGCkNjMEWz4qg",
  "key23": "4HtGt5mu22HbzBewuWCNS2EkZNnfQy473o2JMWF7Lrxf7ma1B3CZvv9QystsDqz2nvTUWQUj94ktbVUnBonBkXjj",
  "key24": "2gh8YB9jkZcycNHrNgvsQ6DtNj3vQwe9GCSquLaFhKmtdBnb3bWoLjqtrzbgGTtdTx3EN1An5nKDQtHzxJVFzfn5",
  "key25": "28utfM9yiPvHRjyKzSEz1LD3YgFc7nt1vffBgT926YmDMcc5RoHtUtqVHHkpN7bSeoWry6cfSZyQ4aEhBN53iEE7",
  "key26": "64ToE1NoW3ZEpKcfqoedmgC5iDU4XbbEEbV6ws76wKsnS38LW7fRp5ANmVEa29VF4FsC3tdTeXjYx8mEc9ifmTEs",
  "key27": "rgnQ7qjiCvc2qtYL419imX7aTWT5JWzZ2nfVvcd9EeKnqJq7V8PDJTJLXpfbsJ3xpYw5MavyH9SxzgnPdo182x7",
  "key28": "3c9hT4hMPgqds3eNr1H4rBYmLQqsJ1caStfQZxGxyvRreAYsWpAUdgyzLJPTbH5Q95iHDsDe7KB95ijtDCSE1GN9",
  "key29": "2qfpFV8ZXmENmrW5pZigtYLeiRFC31usWX5W3T27HagigbnqR6fp4RCi2hAHv8f35na6hiMukLBFBicDwkTpxD51",
  "key30": "2KmNryfeUf6rWYxabVryN3GusRhskYqcJjzL8uUJwFdV7a1vsPXUf4GvCvqSdafdpiEG7Czr1yRZKSETqntGdNsj",
  "key31": "1CKrNVdLBzHzsDhrZBRVRGo68zLykXE16HEz7rYqYTGktmKiVQ4tnQ6W9BrEmFAKbbxWg1GRMf6xHTUWNx22jBx",
  "key32": "3tS5g9kVieZ1VoBN7G894yuwpqBiyLJQKTGsegjLiNrA8Zuy1KKJJk2VVAzz8sHVcE2EtE8fWyJmQ5SyqZ9K198w",
  "key33": "VNvYKcm6WAVp873H24XAYvcA9xa96V1749CPyKRp1V28V78xLm6CLkvtuJTqn4tPvR2kDMBjD8DHohoVXwH6EqR",
  "key34": "2xEnGRvFYEzEWKk5cnXLrgcE89yBrwz71XRg915RTqvojNWpHB4rcRKUQoj35fSBKRsawmmrTUt64sB5TxKe4gq6"
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
