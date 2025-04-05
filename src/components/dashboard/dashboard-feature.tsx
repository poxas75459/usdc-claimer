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
    "4tbNGXkbxQJfFtBgRAG3RTzLt4eutHMFJwRM5KKZtynafkQdXV2LFcSFjpEUQJURmrasANr5bCw4VNm9RTieCDg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "433aUhvKwfNzPbFNoaBTBNxpFp3h8f5jLGHasB1y2voZoTBvpx3DAxJ9FL7ywWk1v56NDebZeV7MTGvD6xn6LGCp",
  "key1": "5vHhSQEVwptAt12PwFAFHX7SQiqmrsg5nvf5tTQHT2ZHuJtDrv5Zu6N6YREAorPASkyDgXBbbcqarZgHKhpCogWV",
  "key2": "4tX7JKnHSY8XdCWDQChEfYipPPdwMBLhPaU5GyDRaJW676vWft87ssPgn7xQE2mME5YUtPG1kqdp3b48zXAkzEGc",
  "key3": "3byt46gHaPwRCoEphyF4qoH76L7KM4bsjtVZmQkHGn7S168XSSghwp7g5ZU24SMe9gL7bqjwjKTVFLeme2AiJYrH",
  "key4": "2E7RFqEX3xZ17SR8U1SdtocudRvzvnXKEpt9fS15UvzTYmZy4QBRj7HLWH1fW7NDWp63RVZrwJ6fn5v24jWbaUjM",
  "key5": "4VtQHLq3DEweYeL5FUiSBjWzXHqPMTWs4fn8nmEJrVCCrWEpN7PPQeJi4B5A8a9fNCAYUDVZ4HxjMada39tdxSmC",
  "key6": "anj8HCjzHNkbsTF3Ay3gQD9QqdB2HQUrutkc5yfEzfpyGtURxV3W7TTUmAihwypKV6zKGfeCdvR1R4hSSxQEJA1",
  "key7": "2a89wcQJjKDdAqhSosbHV7CTBviZ6dt9YHbrwEqqGP5ACSrzFV3JR2GMteucH9Rgue2RZJCvZPdtiv8VB45Z65wi",
  "key8": "4C4G9m5G18nq7hotFHua16t8S66PWSoQMCeSHaTLb3FfwERuahzKQTFw7uoBztjyNLR9khYzRqW5NgSRbW8qviaq",
  "key9": "2Eyg4bRN8gf1hgkoJC6PKxq1Lfa2ZDFR9WKWZFD4qUZqLBfxsJJpGDkVdBtwsmjJHnswqNsa9jh8CWdbYLWrtdt2",
  "key10": "2b4gHx1WC3UfuBoGAUY2R87D8nTxFowizPHYfkibQTHH25P65B4nrKyyjgQjAAkG8YVJzCirheYkGRc9dBisu8aj",
  "key11": "4bHN7tJaurCdC1424EZWpd2pVyNFJrZt9LPJMdUkEhQwF4DC8hXEmDTiCBAkXGFkUr4LiLnjLmVWvoquutKuD3eC",
  "key12": "2VYCN3rg2xoUZzohEBbaV5w7DUPa14FkggpU9riQERGfMC4bZikArn8gjSwn9eHprBEXeTR5wK8Q14rFm2kWkUdr",
  "key13": "5uQrJA4M6VqFrAHwc6dazSk4rY7hYdmuTpbK3ZmbtXyWmQc14wajCYjVGMSUopqAoCtHQSe3wjbaqca8sDH3Qu6s",
  "key14": "2MjGbw432ZoqKHFMqyMPw39UzaP6DzbtfEyN5xydHLpiLUhdsN737f94GmBsG1emFrRaTphTUyA6bkpXrn2WSth9",
  "key15": "4Pm8BEk32gb7o6hCymQ1D7MsvMsX84KWWeNXpMWUW9JdCyzUNBgW942v9A6i95rWTtdojNRgLCjPQv432LKB1nPx",
  "key16": "2mghrSGCdyoVvPXUP9q2bWDR9guPoALDWgde2ufLBHwp4fcwEJzzcN78F6xBrxA9Lccugit318azW7FfH2MfWRg6",
  "key17": "2FbTdknWDQznZW2noEcPnZqYgEXvY3VuhLpf86thHNkdHTFzyxw2JoJ9NJayH9Z5SDzreZnkz5jpYq9x8Mz397Lt",
  "key18": "5GsVpzS3xizJTQHWyQaLjKEMAA1LNtWAXCCjQ5A2HfvP72KL9SToUpzDFUiTTyjjcoBBhakvM68AgMG9XmNJdA7S",
  "key19": "5c7ETdjtz8ZotvVESMWTfipMYzFyjrxT5ZzAkBpZRNPWcYYDStSsjSnQMK3mEFJjDS5LxeXRKpmXHfA8mQuVjMbT",
  "key20": "3AyCVtPo9hn2JSXjwTaCKurgExn9qT9SyzzecqvuXdHR1XKJBJ7LMiZhUwrHUMhqsswJ5kkwW9aS8DLjYuSKjcEd",
  "key21": "5cZuArkHzaPAevnbDwrYnPA1JqLeuW9K3CYQNDAJaEBLhW1vn23RnJNPDCmtdQ359wPuKtqZR51g5tWZ2ziijMjZ",
  "key22": "36kzutVP1mCmZji8jdR2TERFJKv4xLuuPUph5Dn4CEDJaPCBVmQ9S1b1rTAWmHTLsdET2tJyujZFSBFV4x8ELniQ",
  "key23": "3KftE22fv7XStjBkNBDVx2L3aEHa7tMLmeAd3fVzVK92yiJtryABfu3AUGqDuuHK6sLkeq5p8M5fTX3wZTSkyMM3",
  "key24": "tKYkX4np93Xmt5HUXap2zTq1X4YrVcqLMtDhmwWNY6VgdUmHpwiFuaU36ASpASWg664TAmQGU3hDG2Hv5wJ6G5j",
  "key25": "4vpYSu6Dtoob6aeCtWXyksncViZG8sgbT9Wrf3WwnyAjXi4gcqTn764sTMhugokuqVNSFUiV2ozmhqjEma2iymAC",
  "key26": "5EYUT69bkwcnzUV8iW4t8e2xKPaR8V8ZcxmmizNUUeVMmZz6YNPf63P6yfRoeu23WdAUHi7xt5rmhE7VyLgS5mBu",
  "key27": "DTP4SWLKZKpRkHjxaRmbsTY5kusoV5LiGL6jnJ98qHqAjpJsWgDZJKb92TY5AqEyFiPzLZaneUSTRUiaXMQra4g",
  "key28": "LDpjkGXmq5hY9Cfi8qBxUPfMjZvV17AiVsWFZ2HLwFqwV19LnxuEjeZaQccH9C7HwyWNg7jHimmqQ54KC1AkMCT",
  "key29": "21ZE3gWqaMrg1CF7NjebG8bjrHskmC9YJcqgdJYD42ugRWo81gBc2vGjSBP1VE3akAj6jL28usjZ8deBkbrqu43W",
  "key30": "4KDQ7VMD4ErPKdEAVDKN5HPNVQwkWRvDsCNxKstsg5Cg7Xxtnfiq4tbSDBLqSS2XEKgRfGb5jegk4FjRuHaMDfBT",
  "key31": "2Rnixeewd7wdV4TZU8sLDHoZmEM8i1dfjtonPk8HEhJk5KaYKMGVa93vFs9nFD7bwBsjy7fqAkXSyWzk9sadCbXy",
  "key32": "2XGnsRE9KVwXdRQNondcA9Z8NSiTuwLHYuG5NPeAdMrqt7jL7wSh4wxcVK3wWJFUncx9y2LCaVJzEjDaoTzM5xJ6",
  "key33": "4sMwgMVtUZHr547BwyNGErPsHVG3eWPaxzXxrWNZ7pUXAERSZYR79ZVWvVmTWK69ssEDar3Ji3JfGJT1R7AN4y6r",
  "key34": "2F68fYuJrZaM9iS1qH2ThCSoKR2FkPUcsS6yikV9hDWK2MPw9VZbsyZswWpuNn65pu5pf4imvxgmq6a8K8UXkWmi",
  "key35": "2NymnQjy52gZBbvhJMziUneGfFqWBJxA2KXPNT3C5rL5iQQEmxDiycPgroD2Erua9DaCHDzuUyUgC5pjPJwNL2QW",
  "key36": "2De1d3NyL5CJKrULYJo5ja5duu6rrxe5tuuZ4LR9pEfQZGKUvEGn6gk3kL59v5jbQjqUcFvwqhGrSGGo9hDiWSgu",
  "key37": "5P3DKATnjYEBJzjSwoyoQ6Zn6pUFaCJE8KJAR6bqHTJ12keuYfZHhRm6irmGF4U9u8qqEoxRZstXTu8bgEUYDW7f",
  "key38": "5JoRnZyB8vHdJiaiht6LLCt4FfuJuXBRr462jR8c13EyR8rToDuBQSsBdQ15yyRbRm8pixZVSaedWYRmxNoZyubN",
  "key39": "2p18guNps1DBoAWVhtGpBKZ2GoZuhoSxtV4B6rukQtVFJivzSrf1DnQmHJyoJJJyFrHFP9pmHmphU3rnbLFGSR7f",
  "key40": "DFJP4yLyKA22zsbv9tsm6a2cAyTH7EMEvGvNT43ZMhapqSS3JLXzMWjYrBXwxc34XBLnoEV3cMTK58L8nvvm6ee",
  "key41": "3vTCZ1iZiZ6hLysFLN8voWvuwsZGUuXt1mJm25FDMCySrHW3M3WQtpXZTCevNhNiCK9dBvdXX9d6fQWhciSLqDZr",
  "key42": "3ZsmCsPTAUDL7wWG74HyQi389vR6pvtS2dVjt8ekLBu9zyYMMEFYgkJPwMiJqypsoxXAaUTUcUZLQTj52hSdQv1g",
  "key43": "368VHZmd9J1QeqbKHDQnp4TX1hyocfh8mDpf7ubMwc5cfDXBn41HUQ3RZneJ4884S9bjtPzHG3Bttu4HkPMLMsfx",
  "key44": "2zD37h6YthQQfhqQ8c3EEXAfn4FAaX39rd45FziKH72WnnVYKjdg5DxftGtTR3GB8SZCJ4sPcY4pzGakPd6PWJXX",
  "key45": "5dyCkouqZvtqsttFwyLH1G6WMh7jErGFFgvYq93EKbjLgTmYYsJLHH5Bo38zYvud2Gy9zTU2NSU8jeMqsmhWdEf8",
  "key46": "2sSEKXeMoEtgDzUF5mjUmS3zLpdns5TeA75oBUAfvjzK12WVrqyAt1kEc83vfoztnNcPaQn72L35Zf7ccHguDuDm",
  "key47": "5vKF5fXYA4QELxtjpbowbfunjncY5iRKGpE3wF2tLeeWSbs5vtA17aEt6GSCHR6WCzYK6UShqBgy2A5gWXW65riT",
  "key48": "5q1MFsBFD9mZ5ewtELffXWMHY4S8Qyjt8HpB8FKDQZci3Xu71egSZY5bt17zwbtdCPAurSfbkpzgHtiV9ADWp9Bx"
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
