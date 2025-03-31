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
    "3vHSTDZGY14u9ydVnTWENgzGngZX1ecxinA2Ait5RwArgpi4NY6AgBtBDehu44qNm1bQRyWmW7YPnYgm4dT5MKNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T8d9zqGeKMfgJ4GYDHQ7U4NrEsSi5UoRXMsatr1q9xCeutQYLC4jvPM3jLxANvviWKCQWdp6iAB5inxTMijtLwu",
  "key1": "22JDD6HVA9NUxCPVEuyHzcPXSUaA8bW5UkfzX5W7saRACU89fstJ3N6JMHh1VGtwFyijJVzRkE4CY2541inGNiZ6",
  "key2": "4PVFdHGNq9EC4qA2MgLgQ1XUSUeizQuCd1bdfGm1s27H9eZ5uE6K7kcx9xvDMTnfdQCUeWfTa85vRGHcAUberWzH",
  "key3": "3k2VDkT7pwX6c58RzXsV4KNwLRAEQAPzVxqckimx3g8WADqtQaHVF7qaouBNrqtyaxdQvJAni2Zq6RJ3VaoDFWcN",
  "key4": "519YzjFqg4av7VgP4T1Mti6SAh7pqN7GgfYyuiA6eHkoxScJmPYya2qwj8kV8FAQz93QnWUzGySFfMZdLcKVCYtk",
  "key5": "t8z5knAhTQ4aTDD7Jyj2z52pBK3HBN1NttSLE4yMEc2qcmof5FWvhYd6LWS4xXDeaAr3fibXMvup5h2YGBomGFX",
  "key6": "5S37kqgJXRwdqQmY2ZV1u8my8j9YxvDusyncgYV5ctMXz76mFxW9vkNbsHYJQEAU6CfWF4nQm22LpHZTvBJ952Kv",
  "key7": "2v7Eq8PqxVYzF3RoUE1agFPAvTRv5TGcbExfR8iPnB3PtHPYMt1pToqwC7wSVzq26sFszRWkfW2jSrMP2yeXEZEU",
  "key8": "2ovzi3bqcHTP1q6upHWJAeNgiYcC5gfhmCJQnngcqDKAiXQySYuiXoFKoD5d8ezR72NxoHYtvPXh4CfStcxPwpaU",
  "key9": "5yKvRE5RZRWhurdKEg9HeL9uyFfkUJQ6vc8YQFeRHNWBKRRjsvcCqhRzek8N729DmBxFECyXKTfkUipxkT5YWsLW",
  "key10": "5dzLe4XWneyEYwkgL5BfveowpFLv45CMgfai48HWLATkkuAPVz57nwqJYdU2vx6ZdWPB8bqpefw6FcmmyUqcPPg5",
  "key11": "5jeMCzEe6gtDZ95HVsZp8FKfS9tgzLtfo9FRaaK85SnHUsCpoyC2V5gTBWSNSc4X8fDgEgm63ZBhf8W3YMvVPAbk",
  "key12": "X3E3axnw1WFQuCUroqWkwpzvWjHs3jooGd7AGi9SiD232JRR48qDJdmW6mo8uS4jsZ9kegFVB7w3E4tVMri7PrG",
  "key13": "7rcAQ6MvAbQnih28Dkr2sk5cQ2tY21wiBWL1nwbB3uirDWmRPew5myZ1NNPapGJRB56Vk6byhDPVBJ8eij6nVZz",
  "key14": "43FadicDuuecySo6y9diPaCmCTDXadGiDmW2TXutZdy9MFGjH6mNUX4pQ673T2Sogw1gz4uKtU5EEkxgtTPACnBK",
  "key15": "4CVfqmRs1U4ytZ745YMKUE6bH1rKNLmsRAgEuCEPrz4fbFo47CNN25M6FqTeSMd5f15oaP2F6daqnvDzWiYx5DEW",
  "key16": "2UkitquQ8LavN3WBndsDNgcHHsi25D8RgeCm9YTk69RLBBroo2mnAGY7SJpXAjuLHHwTd3nNcmbmcifLgah4Lj7s",
  "key17": "7xrCRvLbT9PxziVF8badz2pgPmWtWoDjs9sr6Y71xoQkfCBwH8xt5z4LnTPoP3bAF6J4VygnxiodMh6GBdBXfd4",
  "key18": "4awJh7Ndefeyv4npJzxjLLpqw8yfkR63gVHpxecQy2gzjvTkfX8pZJL456YT7HzLLViQfA8oZ8JMDXUCTi6tQdHn",
  "key19": "k2STn2cwydSGjCCyLTSkhd3Jj6bmTZ9Uxr6xXCKtnxAZoutGqWdUjRheZPVFToCckkWLmwgtLQTNE1P6Xhk58Bh",
  "key20": "QcZAoVwXhZmuYUt1FzNARiuhGTGk4chSezerqcQzAmWuNT1odDfUtehYs7nupcP3xp4cUV7bAyxm3n6Uz4Jnomp",
  "key21": "65t77pJBthBFummHLCm8R6vvXBPJfqArJTMggyqv7CDg3yrksStgY9Jhiof9R2CbNvWfNeHgp3m5VD948fAPxo9q",
  "key22": "2thCFYVVeVua5t3MecanivmXsFusLMfeUdSB8TZgUUQXzBHRb8482pjvPxYzrPmqDDxbbSeNdMQPvTJ1ZxWBBuSr",
  "key23": "3agMKxsaooTEB79V6FRmzBsBhpgaVtx5DzBz89zkcBWA5hoGDMcTwX3fcqQ6qsvCW86kzThQRkvSLXxeWT44XahZ",
  "key24": "3DdFcyxdg7zKA98YCWnFoBrLSnpsiBMaezEJHJK3DqFswojXmAQAFQJCcz9nG1SJX7EAe8xAxDy5TNx6Wi6T9zSo",
  "key25": "4XJbCv3Hd32UZ6M4YyCiD4TxTybg8YhZggJWG84vaVTKQGBv5AJYpuAqmAfHMvZ5J5tuWtJwW4KhBho2LjL9RHEH",
  "key26": "5gn5778M5WCrSmGuXmR5kauNLLicnjdUvPDHxgHi8t7gL8nStxX9uZyyqtJWsoGY9Lp7AkYF16REPAGikeN5z2kD",
  "key27": "2qY8UnYEhkXVRz7bZuXeh2t7rBTKPt3mQ9X2Zduwuvkac5tkVBzLxTmD35FSRYzfFQ34UJkaCYR4iVbyniuTjFJP",
  "key28": "4HSEk1wZTuwfh1TthiR42SKYXzoF5DBkyt5wzjaGqizBoYn8LXqvz9L55jtuLxfHapz78cZXwCAVNF2AbtBiKHcH",
  "key29": "5msTaQPvtLq1wwSsH5cZp8ug8zWXG4j9qYKnP3BKbENtb4QFHVRNS1BWAcdSZry5rjntjPYGYpQ13xtCsmpswzVF",
  "key30": "45LB7NVSUA8WrbRa2xVMrjHquvvgUTx64enNjS5MurYsfVZgKBxaesxTXhCXFv7Jm2AAQmjxZFHXyVMXn1PUTmoV",
  "key31": "4kZ6bHS4X1EGPQDdR1doEFdFSMUgaWSNR8hPpqBE19ngngbuvdQuEeJAx6uKR54WRBZSS47AaNTb4oEUjfRH5Awg",
  "key32": "4U3TCxL1177pZWBfCuF8Nnnnr9iJ3aNfhMmYwU4P5YpLJaLbKvbBh8xmpZ4w2QSx9Fgbjt3Wb2GEzxGUn3ctKteL",
  "key33": "5TrMzXFxVtTvSWSFnd1ZSQsEBB4TstM2SdW3zPM6UNviYZYs5F4z28rLLH5GnRK2vygaQpkbo8ucRkW6zvMzCJ21",
  "key34": "5oM5AdqhUgfAeYKSjqg1NZ4Kcq4emN34LrjpYPBnaBwpFBpoLVupHMheYzzFYb4Xdw5W4yNkvUo77sS7H3NohhbH",
  "key35": "5Kzy1yvEHWmMzd1qa6NWZnHD9qu6DYhS8wg71uhZfUND8buqHc57g7Qf3VT7GyUUkkeq4GcpkZCz2xaQKBXLWT7C",
  "key36": "2UezQqHHQqRmPJntJ25LUR1RhM8KCBo35ssaaMyyhP19JrtJgKqQMmkTKTway6pUDYGLvMyKMT1s2A8N5ogWHkXe",
  "key37": "ALAYy28k1o72QiM8giX7GiqYzYCdKG18cdmZmj2D8n1e9PsATNAyjjFABRKRJopUHgJnio8yBF6AEqpH4zQgGix",
  "key38": "3sLsLsaQAwkqrPoAtZpQAGbjJxEDLwA2hRdyX4Gip1V4fJ72ahCqGNAuc1LF97yW7JYcdHmkSQoav3biyYMCQqJD",
  "key39": "5YujFMmsw8pWBaaxQQsuATesgUYwH5HjaC5Co3S9zce83cqMcNU6SaGS2Vx1AstkNSy7KyMJYm4dgafqVyKVbBEh",
  "key40": "25hcnfaDeNCJuQkoooQn1Wz1qPNKP6j4UiH8uAJ5RXCKdQN2aWDD1rZwiWK8B8QpvieLTdgevpurKT6MMiQpC88X",
  "key41": "3vrPg4kCkNJMLd7t1H5EL67X3ftefWtcw7w4UARsCdjWtoMbtcC1kedVgj7M7pV5X6ivSo4weTsqZdGGNj72kyzz",
  "key42": "4hfG2eG77nALAaikYLJVmvzrcgwKz4ihurUbj5V2czRw6EgZkrNVNpxB9tGYBW6Q7uLUejftoj2hw9USCcKzx9cc",
  "key43": "5WoPz6yEurnBt4cga1zfYcjqzrqriF8Bwhk2x6dYdnfh81k6bZDFgR6ooWyY1vi1MSzNvGkAHwMXcoB26WhPyGK2",
  "key44": "4FgNSwEuNtTSqgUpgY8kdUaxv4vFtuKtR1Hts27UDH2uwoQq7yrq8h8PwxkoY3yyaogEmNsQSXMvDWhnBymxGwLG",
  "key45": "ce5CqEB45HpW7WEU2bXEuRArDRSFkEeCHUKMP3W9uE4vkG9WfRgzYR5m5rjwnz2yh3XHbJwWNiqRWFfZoGXopov",
  "key46": "3keLUuLzWoetzkBaAmhJxsqXHkhqqH3pYo9Vxg3ahXPJj2dLRiCs6PJDf9PnrZQ83soUkvGxUBcYh5BAsXCvuy1j",
  "key47": "5Rfs5fiMygS7hZMDFknKwnMoCFNht5e8BJ6xtY6FbWScy45NvomYrY9mn213iUuHHh1xe1Z8TYXiKNueBo17ZGQC"
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
