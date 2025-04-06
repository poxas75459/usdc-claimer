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
    "4GmJmkSxmYvbBDz2S35YDn9pNxQiHiw9o8LSXWVVL9GxqgzvhVxEaSH3vaha1rexbpUFXxnAuoSe41JvLMchccD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wh3jxzjPPumtEsupNFhTSM7HKYr9S8bSzzHHBPwCtb4LhKo3XpNmHBfwrALGTJ2Z9n9vPuYubiz7gNefMzddpwC",
  "key1": "wXNsH75xZXnhDUdxSbeDU4wcTQgc9AcVfKEhq3Noezjxj8pbbVxXLS3g9DzMzzkGPaasedr7CwuDqfxWPHpaTwi",
  "key2": "28gg5WubvXPdLdXWEiNqM7C8XsubJ3Hj33UM6HQGEwKgqmiXUkhYooLXmfFUXFyLR6gqfPYAcuVzyRmHdm2oK5q6",
  "key3": "4h3UngMDkedQMQjRKVajx4n8g97YsUg3PXWGQZHnpdgHx2EESsjFHEnPwAPaDMCM6shQbtz9VuPubdvUF4PMp3JH",
  "key4": "5b5mGTptVEY2CgS1NMLHvzirSh14DdPQ2zSRGF43U8mtRchVtgZvi42U82UZtfPVhRYuN2suppjnTT8SMoA239Xe",
  "key5": "3GBcjH6WvWPcBpkgfjqxb671ANPBajvqrJUfAuHobLCMeum5yZig392LesMrgdJxVYPey1B7qHkTsmseUH91h33M",
  "key6": "4QJcyceYTs9VPppV8RLNUkwXf7Rbx4UWkgRqRFBHLSeD8euanWWjHtweDkrEWSv5StrS65ksYg5x76wvsgksoVub",
  "key7": "VQsKThphH2GHthRU4hb9YMZABxWAFDtaPq3rR3Dc5X8RXSroYEGdLQAgiQr8zSQ2y1mu2fdX7jRKDjzeHDe6H1b",
  "key8": "57YNPc5ecLM8vRhvG1qzasrKUwZ1ZyU1nPydP9cnK7Zaet75AGF3jECeWE2MH6tTVDAkjE9i4tKSB9gA17KSeSvt",
  "key9": "nHaybUYsxuGfvobDD4kQx3bvaWTYUiNM56x5gzmvdSzApHwfuLb5aSteZvPu8DUSHC2hXBYBxZ6AXxbdhYQV7i8",
  "key10": "2CzC7GXqMG2xSeGR9kGc4HJCyuErXESV1ND2QZveAwuuVt7HSGFF2vcpeRWdN6m3CnNEqKuo2BGt3Vbq8g5HFsFM",
  "key11": "4rsboEuWhJxPKuZsYSuxWayfQRL9PBqtM7ydEXbe9tUZ5qouXu8eipL8BUhBxfsvZX9Pg62iv58TKZAg7gagib77",
  "key12": "3kXHFM3UAE3YR3pBn32X7veQmuZjqVCcqYDMfAwXyStvAEZRFVKchSBpmmo8SfDSjY4AZayDmCP9eY5Xv7qwy29L",
  "key13": "3s3bxnz2XyEyU7jii8sbnzc2gey9H8AQwD2gUBrppUb1sg4MkYQijwzfAoKKZKaMa25Ecsw5FCrMuRVZmbndBaSU",
  "key14": "2mmTLBrPVmTHvJEfPeBBDnoRuoUcnP14mP8Q2p9GPTFkzLGKUzLfFbZQotezEdvyKgz4Ct4apPc4ubZin8XzVsK2",
  "key15": "5LNMDweg4ft3LyTVHUfeGQzncQcvs4jV3kYKvKUSnYt5zkGwkv8K1co2NUVuxXqrs5qvM1szBWUkfRtd5JVcW1ak",
  "key16": "51myX5GJreBuxKqM73Fkd5vzHXfEgSiMaf4UJxrxLtCAvYAfZXPy7UVxmG9JuxPM6t3LTmBJ2kjqnTjtbqkWpfg8",
  "key17": "53zyWgdNqSoFSXeTt69SXaAuJ7cvunVZcxahxZd1kWYCrUtPb4P6x7XSMuR5pwaPfmB2rAhk5ynvPhHK8GNUCGMe",
  "key18": "1gxX5wo3NRvAwapi1xjah741vDguqMotNDUPVFTigxyzFaKcjhDhm41Z8mB88oVhJveNsiG3t6tgV2Ztf1h3Ycs",
  "key19": "ZMbywTfnPyLg9jYpvuHodczgWmN5ChuTyEYWo7Hp9JDKtgqEzfNawRBpRF1qVCjUT1jmQsmuC6D1WqF7xcNHiy4",
  "key20": "5anbrbHWcBroLkpMvkwZfzeQQLDzQ2tVR2w1sBc8QuTWuv5pPT2znL3Hhiy7C6hSsSkp8FnFxxDCLDSkbEnCMBoQ",
  "key21": "3JuoS7Tc9wrC586fg4X2GQuvjRzj4CN6FbDFyutJ4mSqFB4zc2DvzZvtmogvrNKQtwWq5Ddvhpj9UmfPGnuB948C",
  "key22": "3MN39px3Y1USvdwRWsUdWbjE2mAJVozGYx6WMuPtNXDa4RRdx75oQue9tDZCfHyjDhvuaYtGNwcoCz49PRAWP2i6",
  "key23": "4zY3MTNrje9vvqfk9wGRjWiXoXf7pocN815GLviHf1FG9v6428PnVAq9JdTF8WCpEQFVyRyr3xjsueFxfNQVv78N",
  "key24": "3dmvUUUqfhX8Dd2k6xYKTDjE4z4kKv6J37zGtRbJEysKZHiNCbVan8YNtYGoWFE6JHRhqRFULz3nANUHJRnE26QU",
  "key25": "4rTmQ6UNH8YWbEHSZ2z1jq3UjFgJto9fsrSmWrNHkKN5pXujRhsJY76gaHbMWLUK7Ay57ngcgkcedbF7iEqMXxbZ",
  "key26": "2UAQzr8JzXacqeenNHcGqV4v1WTqYBYSuY4YXjhQhTPo8s9FEv1gohMAE4iGNw2TgrFN1gxNjvW8Rr4FfAffXgC1",
  "key27": "4cEv8L8RfXbxn81mabZZug3yxRHn1cSfk6dTUERxy9G21dzAhQunjXp7RnkxzWaBwzo8B7xVm79ikeuhqsmvnMNZ",
  "key28": "3zoFNG7jbcob8PsSHo3MKJeHxdVdAVNsn2XEnktZZL5qU6AsS17z8WJH3YkJHeCrCx7mukpBgSo4HKrn1cP7y6Ya",
  "key29": "61vUxa59yLRTWVvSp7q1CPih8kaV7MKdrr7s5H8g66NfRiw2bnNRX1Wv9MT7n4w9BCRFJzTSh83FjFJFN3he957w",
  "key30": "4GVexFr4uUdgkpGrXSTpmQeipxB3ZkpTeySsKMgzLzj3wiAEE44sqbGzupUSSmWw3hh1bRi9NNDfYYoN5jexMp14",
  "key31": "MhwKXMwwJ7RQNLDd1F3ePVbjjLSe54bzR9TB8NzBbUKiz1E88iZVHbmaVqEzBNEYpYptbqZB6cDq278rqEME3VE",
  "key32": "2zXX7WoRav8BH6JLQSBFTAzKi77eCtcgonhgmi1zafuTBKxKr6Nd3KC4sp4AMvQERbfjbKmA8HKzB2JkJEqcLbQj",
  "key33": "5Ly66uAihGMYCxpLxZRT38N4tHVAkAx8deuXGtJkrqG3xJK9V7VWg4V4EpQHgtuVUEFR1WmFKBGa6p3QviTB4KPT",
  "key34": "uhN2WrbbnS5CFChqhFDLH2wWXeFc9KEqssqijDbiwooNAbuFWCrFKvtJ89iXJdXcGyJP3vNM8QnVUjY1eerd483",
  "key35": "2qX8VsM4eaC9vucxAJHgVDJ6HKrdPxhhQVfKD47c3SVneYqtuPcxMaJLwtXPsTjHbbRWgEBkagGf6cwQfvk9893d",
  "key36": "2X8ThgqhobXKyqRNjt9ncmPEXVgwRiQWwta5vNpJfqeUsQXGdT4j2gxYGuw94jktNtw4Ww6nKoNocaNLD4ivWujh"
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
