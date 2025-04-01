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
    "5SoWUn3ue3ireAHaD3n56oBGBtSP1gcvDL96RmP74zGfVb6xorfq3YNTkF62B9kSzD7ouRRa9ETwt64kZGyWcCJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A1PPyhVNBm25knQzNMpskJQeJBomNqgTAM9oKJyHWhsFkY7n3cJvuAMrzXjnj3BQWNAnHgZzxzUVb6xc61htNyV",
  "key1": "2tNCfCUvDYsPRDVmmfeKZKuFUB2rNkQC5jXmHZzDWHxY9QE1RLDLL4VdK8BhZiKUQNvDKoasu42rQdFpc67uuNpb",
  "key2": "2EXr5f4SU97Rt173Pou49ZvoZzZrp679sXL6X7WVThGC7rk65EU5a7GzgY1SeRdsfZaBVpFNWgJR6GEXQLgE2ivn",
  "key3": "mvej2qsdpPaCerd7PHv9HiYHcKZuLYx2o8vH4vaD3DhMnDvd4W1pe9r6Pnc2MojUibYTbi6xLLpEGEbepafLDGf",
  "key4": "5B2oYndLvQjPw1AEdXrRVgpGcE518Mwh7Cwa9zeqtTLfqrhXxZwmcANs5krBCoR5MCUQbg3QyBfm6yUx3rVKuqHm",
  "key5": "4XUR2orLK9kmyhU4DQHvgzq6zDxdsBQBWM2nyuJ45XSoG5y9g5WUyJyn7e3LmQiQQhwfY8DafruBeFf8tSaFuMCL",
  "key6": "2xSP6EVdpkBbKJKySjishNdRSCer67D9MhRGdKQ9wHUyEHVpomqC7s7mBAWSkz7NJbNp8JM6sXiwgWoKm5jFjnKj",
  "key7": "2wF9ssR3JTNtdmFpPKWGj2h3UEMJ5S2eWoc8YftxUdrhYVkwasTfMC7pQvEeeDrJM5Mk1JeEZLiTKQQKQ7StjH6s",
  "key8": "4smt97PBq5KaUcWv7uuDuzYN3C4K4b6GJVumMyeenSruxgw5JkDb9TEDqcDJWQY9LR46bjmjgpJuNXzxKeCBk6Rm",
  "key9": "5k2HA7ePupzFeNeYocg6NeM3Gk3xyqajcmhWY5puoH2ySHBbjzAq5TFYagzJ5W6qhDHmmMKrWLARmJpB6Dv91ruG",
  "key10": "MYonQsT9jEyR972idp8YPhhv3cUc6kSWPzaJiK3TdvoH99x9S3xQdtoqm6PuPUSiiVcn5HAo1Q6qXLqT4aDNrti",
  "key11": "3npiBsyaKxBXQjpr6zzv7sWTNuaPec2MgJgfNoV4Er3x861FvSApTcA8rR1yVSwohrvf9zyvke2bEAKxVUGTP2RA",
  "key12": "3gieVdythFTNg64wap6NTQ1BiDc8sEUuC2DQC1rH5HaN3BwbTPiR7h2XPDH8tvQ8DK6Mh3bahzVFo9LecidNVoL2",
  "key13": "5Wg6xDKQTqzH44XDvHoTDcQ1CqVKbE1yAnUy3SWfGnuuK47ZvTnEPa3qhsaeJsHYmJqxG79XjNnRAYp8zRq5YnLz",
  "key14": "2cv1tnsgPRPduuXPqsRW57adQK1ARVkVV4He8Jtxhv7KvVY4e6Mv8c6w13wKBTf5TnTFQFQ3LUtRjoe94dCA1eow",
  "key15": "2b5uxSVWju9aUh876ZW7tirfNLdo7qbvjCUEj2upKjYXWt27vK1tR8U9jsipCG2qLUP9RKxhTc5XvXQ5Bikcd8xx",
  "key16": "25RhYo2tVkn4NbNvNQvvmecoZFgQ592Hz4yzLxGhnTMV8A92LX8N84Z7BHCDTgUaoGJjWCRYi1P1Qo3AeBCkXnsA",
  "key17": "TUWvuHujR5XcaVRegGeH5K6LmAKpSwijJ6TEgswbPUF6WKVmgYPFDumcsmFKuSTFgm798CusxV7FZEBq8uxxpmm",
  "key18": "5fkQPM74py6R1kcDyvuqcgiHpxNj8rWVVNk48VGsoocu577GFD5dXV5ggqpSeswNo4SyC9Th9vBpGRAxQJHknvdj",
  "key19": "3XJwkcrTtRqpYA6aB6qWMdH7nHfNqJUTwv5appFwA2rD5yrH5DvN4wx5tHXT4tu3u61cNXLQVbFDtJRE8F5WSiJ7",
  "key20": "3fygtxXK46LkEQJA48tCfp4QcmMqpyUm5UwSsvUUut614MFsPGuhf5BiMZRo4bot7snku25azi4vkqbQRjguwfZY",
  "key21": "3wWiekvgAGhE7hY5DjnQ8tZUp29FYu8JybrjWxt2RMYvCMqCvfjVWk73ZNUWsbVHf9LtGUQA3nmERSypTdamsEjw",
  "key22": "2kna4FB8KVp3eXZhEWQwHKFNm8iw7ab5sjbr6SDWdr4asmXxwYHqjDXrJ6a1shBWrSdFuvFjoa7eR1Ve4wBR6pBb",
  "key23": "355ANfNsjseJW3CD6bFKR4jN632dLeUvpokjGGJNAXqfUCauP12ciqNrCS6R6hUHTTJiPv7Lic43GJ87S3ikQDf7",
  "key24": "2TM6ExL8ZfZHMfHKcmZVducn4nD8VRn2CAu5fTn3TA8G6drwHsiqyBmhNJRxoqrsg2ydZbtGWtBK9SS66NFzf2Rs",
  "key25": "3bi2ni5u31qmXVVVmQD3yDKSjaYc5ynS3xBq7R7PdUuDbTX44wVU8QGpNbv8HM7mqFLBYFopnKYdu279qLFP1cZU",
  "key26": "281GjLsyQSs2ifeywQhsa6Qn77S4YWTnZATKbycdZQ6qUgEDKcuu9ZwrcU1Z36qnNf4LG8tkrvdtab3kDpraJmx6",
  "key27": "5xUN78UMXY8kQcr2aJskxyh26z9p2rvneAorPhjQ891mtnqAEUTfYQDbVtFHVXqh6HSgk2CfG44NJFwoofGeSTQn",
  "key28": "21gVXnbcpGhJKz82dgKeDvau1yr2D9N1xgK2t52WRLBTcBRrJXRkuKz82dhKTBMquDYnd4AiwUTmmNmPpkLvvfEQ",
  "key29": "5UQNGjgmMryFjFW8cLuXU8Jpn8Ycpr9uzpxzQjTLzo3S2RQqJuKsQeuj5n12wfxMPzbDDLzFQy3tqHDRdUjefGHn",
  "key30": "3iG3VWDVBVtTcSpKrLhjPA1Yzzn6tPARK22NLXpoAN3VJc1dFP8QLALiogEuikiDLynbqnibGudxV7GjiCfKeAu9",
  "key31": "2wMBrYeYi7zsCQiBais4yF3D3XiizmGGRBh9cm9piC1dTnJYYS3yVGKaAEaR3NJ88FiK1n4pjoWfuEeprXuiRgye",
  "key32": "64QQ6K9yQsEPxpzWaLMbCctbD7tMchBUyTS2AJUiXsvj4o4Whpny6HarPZGPgDjD3seU3M65S96kmxuhDiH22SqC",
  "key33": "4XLVk1e6SpA8PTmovwB3M33HTbiZNU1TDZnwuXiXAA1xhgHM4fK231cQALpbYtUUXbD9yeY2gH7V88eVMw4S1Qxd",
  "key34": "3jYL2oxRDXXKRzTMGj2oT7L7DFMAhPs4BQQpYP7MJfthHBWCsaPdL3FD8vN4uinz2SWDUpjvN5Jnk3vqRnG8YwvT",
  "key35": "6LPdDSPeApTbfgwhppXJEFEXks1W5j1ea4W1ELUiqEH7fBZmbngVgZT9qbjuu1PE7qeDSXS2jpocEbGrKSDPspa",
  "key36": "4YGtb7G5MwvcM6JMUmy7VNAnGGWtmM5cgwzBMgBAsHQ4YRaVqCav6huNkK9RZd4sD9CreGMy6q7mx478HmWScg9c",
  "key37": "2GLbv9JVqWuD7qvUxHdT8opGEHdKP2R1uHx13hs63dv1xxmpqoeasNQG3adKWcYqiM7iUykphZ9nJCQWzZGkkejN",
  "key38": "3aUHnk6Bf5FqR82KmQPtLEuMxHoED8jyfyqxPRDZuACEvcWYB8g64vUxHfbozju3FjtggKRXUCQb9PBE6k3V2m1H",
  "key39": "5rgZQTkQazShXVzRfJZzYMysqK2Hb4NyYBeAiEwDu1oVyCwsRig7a7sxYGZHia3NgSuCrHmNeS6rLMh4A3ttizwW",
  "key40": "pkhfNaXnkrBG7PpEDvn6gBZy9y34dEez87np4hFMHvDpVniNcWqJhV9pn2iTETPPs7hSQqncvS36pSaMqUC4tpC",
  "key41": "28wETccsrM6byhkxcXXDuUU8sEwRombZWsTgrLvZ4h7WaQnkmGFGbctQPkwudohtJktKTeW3b9fzcYjsvL1XKkR1",
  "key42": "5xU4QK59jZPtsQvujZ1KZxSq7Bd9AVRFs5dL9AwzYTGx6nQ1oMJeob2tDyVpLwA69uKQSWqcet7Ypz75FQoxVLTw",
  "key43": "5BbASe7mFKHsLJrd7aW2TYRVrmTYGGkH8RULYowEGrsGSDG8nhRK7VLRtbaRcMDuFGrrP675dgMxe7nkpsu4QrTb",
  "key44": "238Ks9sNCoYXTFFmbeZ81N2wUib8eKFhhXVCALtDiaaqNjgYbV5LvFCyeaGuNDFdqr1CUNjEEDQyZMEChsKqdWzX",
  "key45": "5UZzmBhiywZYLiX5ucjML9MR7j1eU8Fa9p31QQnpmsYPQsYYBc6qA19WbNrrMQT6uiUoSmnYAb1TCXnS3mB6ezNG",
  "key46": "49ER9k48DCwCWGpvRfeX3pSu3zkasFzFt8UAdS5hpULLvQxom8AoGxuQxn1uYehGhNxtb89uVqbAMLPVgbtmGWT1",
  "key47": "tNMKVBBjiKvVmd2sFnhp91Bemih9V1CDQhbVrRoxo4MywsnccN1X22w5oxZriS6fxSqMC3uJDue81c5drCLX4VZ"
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
