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
    "4mhxXCGvJnDanWRBNNFfV2JxhLDgy4HvUy3cMBiHSvsXgwyGcR7o66tK4wYVAhz3DVSbGK52kbweF4zuB7LZyyvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9p31zRVF36pajfGGEojsJ7Z6Qwbj5Wm4L1zGpw9SzeUVZTyBTBtebWcmJLmDoFmxMNsd8s1736REgjHcpCqT5KT",
  "key1": "4AWUr7mcE7Qmti9EeTKg9ERhBWPnkGBf8HUfkvLwttWB9qamWqZrqi5jX7ZWpLwYnQW9JWTRYWrKvUpKS4GEzSi8",
  "key2": "2NxD91pfHzuXChKLWqungU4bXLMVawYfPHaPSgonAtYfxyyqhqZ79m8fjSdTvtJTq3af69YgVQGouiZ1SATdM2WZ",
  "key3": "3S4pphVgZjxakrdv4NoxbsTPHw6ods2AUHFquTvcwK6o5PyGp5wKLoKMB8FKWSWCEgBVvutJ9BdkSKj1N7YxZ2AY",
  "key4": "4oD32h2RJH5zubdQXFo1CTW3VkwNGVbuUxbtwHmzz2VcSh9K2mpXnHgKfbEUDTPBBAgaWp9tAUHfrY7yXt6kAuF4",
  "key5": "XJmcRE8BRpbeEUc54Az6EApJuypBFMZpVP9rHT7QKgeHdg9JosQiRkJXPv9FVSuts3HTLGSWf7cazoiBMtv1S2n",
  "key6": "2KHs5FezBNJqeQV8KSr4Tomp9sFoxNqbE6iggyhcFmykuZapqCuzWsqJA3S1gz7VXzYTiR97rkCikmfX44aesC5y",
  "key7": "2r1BqMZprcd7RmJeAkHZzBL8HW6QW4LNTwKuk6s15ccmc16Jcp9eYJ4yEz2cswac5HQebyHt6cqac2Gx25tYLMPm",
  "key8": "3s8u9fE9YrJACVXkt5NLWENvqQ6L77zYm4aW8McDkcZkQhgUChvWoLcU6aPRacyeMdw6g12meuXGwErPWY6z7fXC",
  "key9": "5P9P9nZfXSwkpEMxccwD6VVMLdCo8uxGC4YTVA19A9j6dEdGwVK3WnPHG1PHoYf56CFzLg992T7QJdwZsDQwBUoi",
  "key10": "3SNBtYactxo5nL5aDJ3FZaQZPEKgwczV9rgJJbY9xqp2McGd4jEUaViBXdNtbkAUTnja5sRrjdG8DvUVAZspbTfM",
  "key11": "4gE9H8Fb62Jb53vf38mbgq3pCK2GHUpDe3h71aSQEDZdoJBGRXevC9qY74qPVkHXQs5JRW6hBD6t2rtLrd8ENJu3",
  "key12": "31gzRFc1CGj31w6HxHy6nohz84reKPDUr42oGrBg6TjAQCnyhw2zr2VH9aZEgqH34zpJ5A56wZYhXrXQNcsrJkiC",
  "key13": "2YD6eMoneqQyhBcB2PbBYygWayiW62X1FVjhi62LWDMxLmVvrN8iq4vzwwLuFrt4aq5qMUWAQERMbLU4WRhEe3SD",
  "key14": "5nzyDRFuhjnufGz9cY7tnZbPNvoZi5dAQG82DoBfKvBzUD6uMnhyhQPuCLFCh7wWofi3iJGjBr3iHS8pwPDedBqw",
  "key15": "3my5sKGfFmYkf4EtWu3xMoabQVa3TLCfP9sXA9XuPrQrByLs7susTKZx4dcyrS9avoCugdfKGPtnGRHqz9WhcQDa",
  "key16": "5WLQx25mjgCmmfWrxad13yJXDQZk2RHHi3icuhV6qS2ykkSLtLM5i3YBpbqxhAyrLtYRJcwzEobV2uhsqbeUKrkh",
  "key17": "AUAoJhjYQgEkw9mFT6P2UQdsFScytJ9kMpzyRxByV1LjhufrsUJUcZa6KVo8FXtpf7y1TrvTRtEYkxkgHbNJ3g9",
  "key18": "QJpC3u8AwAmJvZ1F9CWGDnJKueBRQGxXEeWKH9Cx64VMqnu3gWhrCPtpqpU5zfsNFPNAVuAzZvy93LFB9MXzHjC",
  "key19": "29pJkCJmHVhLs3aYtugkxtegzt9dKAahzMvYWNZincyoekVZ5vAcx7tGoXBkvq9FXDGtsehEM1yuSd8kw4Myqpzi",
  "key20": "2eQsRSBn3KKsSe1K2HZBn4AtHUGsCyw2uV2V15ypbNbbgKEGmB8E9tfDnr14BzMPcBSRuVuarjNTPUSSGmheT2Px",
  "key21": "4RuYsEDeJydUUeQWi9A5cifjUrJtmAHLgKoBixnD7A5sgAhP5taCe9iRFYQpLzZCQdqcqVUnDEQ7zsrq81TCGdrW",
  "key22": "3xatRm9Xt6u7mjNnaCMpnGvgxXSSHZvnmwp4roV8kWT6S5DPYaZaCVqMjyDCqwumdYyvW1UtiA3eQQbF8Zjo2Jv6",
  "key23": "3Vi8NNvRUaajXnxuSgiAFRW523UYK9EXPXSxzVRA47kDnHf1tyQy6hZKaDVhhU3feZyGHq3nkNx81dRww7NNX9hY",
  "key24": "5jb1sE1S2vaXDDYTU1hNkEQUUYcf7N51SDLCZ3Nrr6hxAtRDuYLGez9yqzxy91gJXNU2j2xfS6c7kbW6dqiV7d5B",
  "key25": "5m8Vg43yrfHJwypaSWJ9Y9UnFbKXoWJCqJ1U1FGan7sF49KE2N8SXsqCyWYQRDscB5VNmVvVkxQARKdYCndcrWve",
  "key26": "2CMHqapiHrwwewd2g9816c5GueNMz7WhuabpfkpiMm1uiqa1T5ByzXk6KfokbNoPvCDYXAQRr5iDB7TE7swYMNpg",
  "key27": "FNG68mNvnVNwfdDghxjs4Eo3HaJXMSfHWepwwY1eKYtt5KFA9LsX1TWuFcfkJRyNZzb7Fi4DsPomxu2e4Vhfzzt",
  "key28": "3UWXCMysJqubFeAaXBWWW4q5vCyXfPfvmrfam9mhExZZKwY6ygbR6Tf5wqY1Aa4fW1sfevsdqDs5n6dFYwTHrPVs",
  "key29": "55jaiA9sWzfjVPqvmyWkftzE2Dx4zpM98QqPj6uduF86woDsUFwhXrFJAEEWCw8nnQq4onGuuPZpG2hLgvXZHyCC",
  "key30": "2dpR9Ym5YbFkXJ9JNmV1iYHqjAsXtPgfMhwmdaEGMV6Y1sAkZUhpfAiYsDBooRsSpwuY8JGrKz45fA7L9sabBqQ1",
  "key31": "2m45KQa8ogxHsa7mPnEzodfGtJq6Jp1VWj1Zhpw5LwcMvWju9mhQFjAjYEN1ophtNnjizFUGBG2J63WZqNwPhX8Q",
  "key32": "43e2cyjqKsoaaufkRG9wfEaaUzu7A3tp2jkSdZshkZaTV8UqaG9grT9eDpFEM75hmrVnbZ3pYeKNzUCJBHW1znCh",
  "key33": "5c9b5f9BD1GwsnPBJvjLZnbHV3Zxi4ULSj7ED7augCdkQLCwnn8XW3MtVqwyDAWkq6258i7pbURVn3YfZRJ524gJ",
  "key34": "jKBzkhrWLGexDRuzcRHXeoW4RAjMtijykJeYwRSQ1qQSuskoy2KSe31dNiEoFmfgow5qbP15n77VArJBMVzxhPH",
  "key35": "4GCKaDzxkPkwk4sERKFwXfdTUS1D3keHmwmmK6Cd6TRQ9kUGxw59sfy7rqXfvL1HJfxtZNG9YfJd7pafeSQFpEDg",
  "key36": "wdkwjHm2VNE5PDLgNfVDswgrmHvcNvRUebWdmPS3WMimAB6mq82ioFGp5VRHFc4CFfKxHRLo9udnJixXtpJSocM"
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
