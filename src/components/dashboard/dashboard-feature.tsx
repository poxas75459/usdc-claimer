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
    "4riPokwUXyA6Wf9yLo8gqJ1yTWCUdgHkxJYTuJo8iAGzhN4RJaQncXAzycrkkqRjr2mRwXuBYkVDBQbaUh5hziWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "592fmLY8K4nkcDqDD9dL8MdR2itnYvm4hqfnDM1RydaCVyMLyD3yqbENzrAhz2SnjTRBnuuwcZYTpneWFuP69gkg",
  "key1": "KxT9CvjXhfZY2ucHCwQ9PjSGFRk68nRWJmxd2vKRPJR4HjDVGpiqUVHoVWS5EGe9kRk969BhMouKn5QpbCAw9nn",
  "key2": "5jvVd3HkXThvR7c4obXi9MqdbjZaDYyNJAwqZdDSWWARHmuT7LSUWkDyhS82TPcTwASw6rxHgVdB58df7c16pgnQ",
  "key3": "2nLw3344xmCFuzBZxrb5LGkiGiWKaiVJffSmK1ZGBMKY3ku7KtugtbkCYmugySkwg59QWwXjd51qkxY77PKomSNh",
  "key4": "3jtwgmnULFhoXDce2QHAXCF3tvzCN8ytkr3cLMpeAAF7UGn44cCBFv32xKhtwWLhiLtWbXkr9vTek3TYPuUXU4Ps",
  "key5": "5mic1h9mBMcU7mDH8kzmmMb4imZFiUQBqi26XQK9cAVrDZ1NFTuSWWt2oUv1PJoQmS7y8FJC5MwKCpA4dNKm4NZa",
  "key6": "4hckbDns71zJ34966ZZdU6Dw8m1ALuXhUx7itQ6enDdKmeq8FGFk8PS2NA7ceFuD8iXnekLUbUgst8h4A5jx16GG",
  "key7": "2youzhFqCD3U8iUyRDjJHKzF1kRR4B2xTQc4eG5xhpCm1JnE9uzvsR7wA642e5CwpmaHBehLbBq55YLvvEDFKsqu",
  "key8": "4xU1D6urQC58sfrvqoH9HxZ52JYuamcDrAJHoXTfSXpk6uPs98uKtHtgbTje8ipJ2rGAb7qjHU8P9UUtgUSeLcvM",
  "key9": "2aoNSbZdcWmqTN5xqxZryHCL621D14RG1eS1Ffsao5GriyQ5bExUqchREhxXHsdagHjFQXP6JU9yRjtASyXMahBY",
  "key10": "2gMmm5G7BwKNYoWyVbKHd4dXARW9kZWz97TRCNxejAbZk6PtDpDv8jyqqt4VQf4CmxBCHDEMPrRWJrMJqdaCfRG",
  "key11": "4CEaN3LevdwZRkCFGWoUgJ6VvDWsoppymYf1PdSHeK9tPHYrsWMqCE8DqsoHjtGwrn8bjJtJk3reYMs9NVJoCtfm",
  "key12": "5iw2PCEbX6yQUyghKd8GAUGdVJjjLeALLS29XZSgdrkt4gfvhmLis2FFKih1ky2TsNir85y96QbyV7H2fbShcoHD",
  "key13": "48m5q9YxYUpijn7QmUMtRvAAf68kxcqJdRhbhhba6ymcEjxeT9QxdT6fw2o8tDHqhd7xtTEdBKG5RNV2q2DSEMSb",
  "key14": "5JSVqxLEA9xpFuECF2v1k6vbR5H8ANntL5zZrDGR1Nh7wKphLZ3pM9bxKRAa8VsKpjrr8G6bb7YGHByuYJdyjkSa",
  "key15": "2CPcxMEQUs8JaEzRyWVQrZabnocLxjZgRrSKLvWR8GargfRQKc611rHnsYtdZisHEaH5Hd5EXKoXNbXSsCChEjCQ",
  "key16": "qYfYRP5quDu1WygxUbvovM1LXkc2FdLUsbfEyCrBLfLTTw3aidNUiBNr6krNLbgsBX5e6SGfzLx2pMhdsCJiZWn",
  "key17": "3CVpXmXWqiHn3Sevd2xuQNVeYAX172GYzF6peZzhNeFtDAKMwomcm8v3NRh3ynTAV9zMg3vT7G8w3wuSGUwoAXyi",
  "key18": "LyWRPViFxqmXDYL5bDzc46sa4HkxhHc1QX1ZaFZ6iqXLVCaadoLYK1LvNwspmQEZHkVGYhtaaXsCLgybwJ4EBTa",
  "key19": "5DSvff597PKCKL7xVNcYdwYC2zEsxaiXbbDRHQxzhn9jLEcY9RsyCAc8c4JrgUvvnVTwyPvDJ9Gy6UkW1apA6G12",
  "key20": "3EaZs6tPCz8bYPXd84cpyS5TwmCzEF5CkeENAvSzqt3aonM7L48W2Vf5QAU722uDXjnUbHyiAxTm9BRfPWTYNqzF",
  "key21": "2TKQd9A2KwhbPwnEYkBKD62avcGopBygnDnP6eisdsnG9LLPY62vsypcYLBeJKBT2K16CC7ombcagzeV1nkoo3Nv",
  "key22": "5Q8bqMwvNMcdy3iRPwHj57bcmMqsEAJL3czFvde2r6BdndqDPg8Lnvd1UzSushZnReLnsPVH4dM9qHTmBjTNRDHh",
  "key23": "52KyrRSALNz4VSfbybRpwEvg5PjGm76EswsHc1V8QTY84NPEHVLk9HKuMZtDvAvrAPgTb1d8Lscgu3Gwo1sYsr98",
  "key24": "5LES6vMmuSfr6tY8vXjKavJhhVG37q9vfV5wbf3oMKuuzNS3r3LcjVo9HKcKfnRo9Vy1bMchfGnrEtNVtoCrxhMv",
  "key25": "2ivEhTyrDErP57cXXsSg35HdL7qz5PdAZ6L2XKsHqYanGUfyAnoBLwbeWxX4ojxwxG1QUad7UtjrAAuDEWUhBt8z",
  "key26": "MjuRf3cywPceh1qXaQRxkt29HMiqeBeQtPwFKDuZeMkFBZiLvpMqKfeFafdD7zqdyD8DsnGGXhLMYBCibzpcReh",
  "key27": "2sCxn4tdStMq3mGADvNqEuYMa28RegDvRsYXrjtmpZwtPUbZMzYBcySivbdY7baKEaCA14GEjmXNqt38qTbz4tSB",
  "key28": "3bcjNYj9rMFhGcnWbhmBj9duKEQKa3UKWFzaTF3Xh5TppqAf46jBcSJ6hkZPre8ygDrVU2uND1YEPS49oWM1cYN5",
  "key29": "5ntQ6Dj924veQRSkp4TGYtaL6kmXaJd7sVzypFVWcoT2njxwRqVM5fnd1kpUBYXzD4wPsyHMokSAYG5i1rugSvZh",
  "key30": "5WuwQcnNFY4vFLkHrodF27B6eiANVQK5xMnpm1n4bPVM2yP34GRzU99L5zVGPd6qCBbG173joQNy3moUUFaVfXZk",
  "key31": "3HonRbrpYCZzWjqbXefF6bodvrXg5Hcj5RHwxLtrY25JXuZEPwxtzV4creoTsuEfSx6QbXymn5GtwKA39vNNbNfm",
  "key32": "33Z8uB3o5D7Nj6Ea2CLdqrytSMwJJh4jPHWwMLqMbov99S2UzsVxfTCrqBwZtwHfZfgGGJYEoRroadjYsDWxpV5h",
  "key33": "4KEPHQhZz9ty1YWMTkTFbnyULgLJTF4gKDmSYq4xStzt3VLWjEfpKGVhqHmFviRCq98ZuE355nBgZaxzZE8RBvhd",
  "key34": "66CgM784XoGJypp2ap7CqDj6q8cpzKGxEq1ZxHzRgSo3P5ii257ZYTjvxeC2QpJTwaMEyaDy8WU3S4SxeCQbY4Gi",
  "key35": "2KQU9sAw7VojMaWjDUwecgAdJFMhDm6BMTybaafiszbMfFJFaMPY1F3rrMdAK5bzsdrwmudqfnLKPF5Kv2c1QpfB",
  "key36": "3hg251ua4eSG2Jz6aaqenzKVsy28TackqKQTruf4v2PSarkmJRF16STgpJ3gEQEXSH5G2C7grPWm5J7rwMzSMAZR",
  "key37": "64xbJDVNWKsgDi7pfA6TNNZFiDUwzoj1TdLwKRyST2Mv65TH6oYn97A3eXfA3ekzHytNPzUE6XYAvKSksE4HgJ2M",
  "key38": "3DVPq9c7wDsnYnBMBHmAbH7VCbT3hD4JXRvtga4dsJyfLjThHd6VaHmKyatW8GG6sykfGt5a2wM9Rrm82tu6qXf8",
  "key39": "44jAr46H2mjwxWEzLmAPxmG52AUm5X5fCsBC4AvsewfQ6PsU8MSKJGKGsAKwvwerNosSZ7dL2sCaRVVzm3NiHV1Z",
  "key40": "3RXVeGZLorLTCFLQWoCJS57n19tcGaZAkQ6DCMkceGxR41KaoyM5DmGymRRMtLonFzbkG93J5ZwvZCgKLx4rdDqP",
  "key41": "pn7Y4PhFmfVy7kNP7BuoSGxVpRdPsg4KTZ4bL3wKubGaR4WghLFqVy7T276AdLXkfq5gi3SpDmgqTjX8dPJLsL7",
  "key42": "yxNC4uqUPVJH74tKTd32JVUxDqqBmFVczynir1tYNjf7wvShvHLtqBLcweLExF9uyToNAhVBdenmv83VYpnpJQ9",
  "key43": "3anjQ7cVusxSNmnXih161r4nkaYjPuYDGJ9sdX6R5Qf6LWAXgoNnYDq2Eh8B2VzQfmkTHJJNz196FkxYGBSQTHNn",
  "key44": "2KfHMeLMr3e9PUZFdTE6NTCoRc1Z9v3ptcsaNFr1Q5yHm1WPpZUmpvjdNuSFDYDyMUjb6vZwnGfefwx2SbXNtSxH",
  "key45": "5co7PqVLrpA5H2v86v9eaKPtqLTQtLXYfEDisZn9wFGVLqjJpfEURUBhvXWAVsuXPtWGMigBfApy1xsD4pGGU7KC",
  "key46": "DPQRBAfhGpf9r2cz45TxvPUKxmksqN6jPUPGKJ2s2MtNvoV7NgwcStY51ztAzTSsG248JsnhWLYH8ri7bHSYqcg",
  "key47": "67dqJnvMXbCR8BGqvqmdrfpgBnKxpr24tfTowuhz7D8Pvt9Qj72cc9Nn5tAWDqUoaRRWE6WsmHY97jrrzPvnLtWu",
  "key48": "3pk2fuwnQf6DaBU74J8r1Cv65K9jH7qzPRGJ9YujraKZmtmC2LoNe8MWUcFy8qoTmbjNsLLhVEwb5aEyVtzwqp13"
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
