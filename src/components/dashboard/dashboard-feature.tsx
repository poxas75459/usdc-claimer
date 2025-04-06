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
    "63KhBEyNCfffCqcc6691aJH6VSqbsmG2offJJoeTt6RPnCaoTBWF56oKU8iyL4Wz6jFKFAVB3RYVbynAhLvq31D3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nn2uRVgCxi5CUjeYwge7isfek1RPGumaHZaw59nY3qjN32M38FnMuKuA8r1cEPRine5AiP5GTtcmwvcCq36Qbto",
  "key1": "5hdm4AgNERvcyBY4FKUrE5r1dJS5BM9iJMCZxGwGegFavLMfFLyGGGpjFf5vokQihhYkn8fhhBRPzN2MnrsWaqWX",
  "key2": "4uCWydbW2Bh8Eq6CSgrZQ6uQbTiqnH2NPo67FxPbNWmK5P2tmPFvTXsnypFWiXq8ytTixpTxTLL7ukpwbWWyzQ8v",
  "key3": "sH32LuDpuAXmYE3oatUxiCYh3VZtvmcT7fQEnrAwtJKrppyrwxjLChrm6EsoWUg7ZfHYWU1WhFHqSGPRVCk9aNA",
  "key4": "5nZSZarfW8cXdX8Z2Y6rNAN5t1av3t6X5NpvwrsNXGwcYZNNrPk8PN4MyDm5rcTonQh9DcfSVV6K688vFyfNyYZY",
  "key5": "5davQa7C9EMw2PtvFSzrHccXSpSn17UtSWpw72neSrWrK1iTeQaCSgpXUXhupCkFy9hc6emQ6adpnAmKi1tGbkPd",
  "key6": "51Hyq4SW4J24MXGkhJGL8nfKr6vwvgsu53G9EZiePRU5WNSjpzPnX58nQbqaiMffg9dEaq9fhJ2dXKHX2AwnqbWd",
  "key7": "2qtJeWq969fg5E6kCzeXjtT1UQCbjUFEV3J1wb7RJbXctKbLAqT78Vo6KsSUK7qW3msJxFuHDdYb1FqkvFWbeom2",
  "key8": "2dvLWaeVCx4dawHAxQjxGJzQrvtFb7KPi1QoiB6zWk1x2PaP4mbs9XQkqLa58ykzKhRPMTbrUYwoGN8sgdfp2pvC",
  "key9": "5DE3LGW1jipUCYwcRHLb9gifsYFqqULca2jfaYPjbcPBY2dGDxvP8nKYx48W8YsdW3Tpth5iefRUmv6jHtY3N4Zo",
  "key10": "32fWwC7ZmcPNjYe2RxFQY9SNDXJa2LRxo68vRKhukGJBF4UY9C35C2UAWJubtCfToY7g956JR4GKByAZVX1DUZ3S",
  "key11": "C5qtLQaK8fGuiFKLVN9cNYEQfyxHKzeZXUEtynk4xYWd139EL3eBNPnGaV3GGziuGEzYPTkPxN2wCVjjB5BysSp",
  "key12": "49eH3MzKFVib7Pipc9cCw4XawjhG39DrjsDYCDQYmprR1m7HVNEHNnLP4A8w3KnyR2FnikKLAXqCUHFAoCyUiHM",
  "key13": "24wTaV7tfnZWUhGtEhDDm7xbVm2TYqWFco6h29qqL4YZXXxaJxtUv4ARi8yng44QWEzaUdurkgPrQwc3zBFjENDa",
  "key14": "3tSvpfeomKQKM8qeij3ep5MG46GtPjDxFBrvrmWAVpBEugfcYQfHovcpzw6AsevUJ2rXfhdVwmSfMBCBnvAZFTZS",
  "key15": "4dWcXUNct2AneANoN4oiMaWWXDHzQ2thumvnMSspno6h6FkLFkJYBS4QS9y2o7eAhePQJPRjQzRTuhpTB1DAMK3x",
  "key16": "47SfffwXkScYpwWoootiQK9TA2EsPThpuZDqfA1fFFiK4oAMKWGPhReQGxreyopU8JKu86SgDZBkkzursVPmPqFv",
  "key17": "3d24N9aUKBXJVH1xjxp941G8qR8GLwKwXL3PWpWGuGJv6gejxMBbvpEVwGe3JV2hq28SdVK7pcReMSsCoZD3FGV9",
  "key18": "3fDjhXiwimhEgC11Kj9j6jrz9nX1qfJep3Ru1Ync3DKzA2iE8xHM69NHVjKi7gyxCrLKad5iYoewfGUTnBNV4y8N",
  "key19": "47cs11929vahjG8hUjPujb7o41eBaB8HQXV11DZQBkD48N3kWgdfR228P4G9URKrXuajbJQ4koAbnhBP3A1MKPeo",
  "key20": "Fdc4eYsjKXH4R8fsXWqEAgfDTuaYd1rdf2jnGgaWCcYszQGRTZFtsDvsoKEYeJvfRvxVihv77nbjJ7AAoVQ5Rf8",
  "key21": "2U1HENqXXfh8m7RyAodGDJRyttPzBkNJv4hrmXmtNBymAbNTLBPbKPjgcue3YbP95MmhdYeTgWRHajAvs2At87Ye",
  "key22": "2EEz2JnRdEPQ8grC4ZzypJjNektWxRpyy5QTK7KbfjcBTCpuY7s2V5e3zgk7ScNhJDVRdNHYR2F7DdxxY35xUwqH",
  "key23": "etqTq2UX6xqx4YRYni3JJ4qg76YjR4QgNPmahAb8G9QsiEfdkRZcUcXXpnf4mektsm4nbiqGYsMYZmXQKGpttkE",
  "key24": "7gWNGtawyZJYb5G51N67P3g2CadMVTekxM3Wv7osDjqXgdswALdekguJbMfD3SkUDY1pcExwSB1uQi4cNBHcGQf",
  "key25": "2Zv7rzsVmwBiC63TLJT7gHcDpH6syuwydMLuFVf6o22vnB4tCRnq9JL63xg3M1YRxEsGAoeGCAKk7YZJoZkfFbNf",
  "key26": "33qf6s6RWjU9M9YSHPKGYXUSjdMBURZQq4r5gqnXbLNN4J2bTaCE6ivgZB3guVhmTNon8fFW6dXSfh4H8aEqQpZu",
  "key27": "3QCChApn2xHNjgMsWWvxZuCaF3Z33k3yqUkjHLErvJReWD1nCvEiuSzoAs6d8msDPWvMzbnt58MucuhrwoiMXzsd",
  "key28": "wjjpcZG4APvnS9qaz7KtJN9yHywBvGKbFFrnA6DXHUi3ZaAPgyTkxRScGgvctbKg9CkamGQ5C2LJ7Z5nQp8kC1v",
  "key29": "3216MZ52k4YYgLqJcEAnYbi3yyC7HMcc8mCSkprp5JQKZDp5Qp7AUv52A1A8LHrtedqi65oq68Z6mBghF9kToik8",
  "key30": "4P917V2kGhZ7RaCrRRzkrBJSyabqoBmDrRzbiZGD8yiiR6v7KhcS4ZNea8PAAybpWjV6z5dRuZZtJ5YLB66MnN8m",
  "key31": "4tCdwc2FELv2bLPeXrpYKqNibjRiyqUTVcLW7pMuJXVzjSPCp23kSnwbLEMWy4e4dtK7hTwj6bZLnjYzNtrC2uX3",
  "key32": "4xeMPQJs8aZGCmg29xBnL5dYasykrobfmKZETeTZwq3w936a9DYktarTLHwBr4EMTtvG5csEJA6JiwXC7emkvt8X",
  "key33": "221NrLFB9u7CDCQS24NfMdnfj1PAoePZAzedr3oXtvZHSkdo7KqnmvT1q94B3Ewvw28chzt994J4FMs481S185JR"
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
