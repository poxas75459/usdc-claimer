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
    "4eGmKJyEJGYMdXtX4AZjAY4To39kBsRv3eRGHXPDwsTUXbEVRAesnUo2SrtxFM8wWzEhdyrjHZeVCnaP9aLkgVin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wDU3dMzr7SXDUrxMqKN6SHreN17oZYuJYpQPHQXEDfcb4q7HQDVvzA1Q7DpAKFzURBwAQCRGKieLnCzKaAfLTCJ",
  "key1": "4nLgKbBbguDMAUVq3AV3pEJ2TuSJmmuatCr6xaPdSmsJMnypbSHWamTAMDo2EcfBWNu6i3iSbMqgnCZLvRNzfBkC",
  "key2": "5NckKCguKeHqThEPEz3LJgCyGg1uroWnHRYPLtL8unaqrg4tb9rNfvLemWQt1a5AiJQ3yrscYnvjQA1mh72EqoYR",
  "key3": "3NSyZ5jrdkXVuEtZAcXd6686SHLNzbVCb43wb5jMp5ZeGQsLKi3da9Cfd6SULCvkr3zymUFn7DaEbk4RL6zvB6fn",
  "key4": "5YNjpuJSvReVBqjTh8HaL7S5Tm1XYzULyVzwNX4bMYTXU6Ek72M4GvrLbp7NDcETnoqu4iwtMihanzzTZB4LckBd",
  "key5": "3f1kzuJbQLNfLkzgpJVpAQ5XKvXBpfnTTRVB6sZzByJD4g1PApaZGFCW4cfkcyvHFGhPZGjQiGyG4jx6raRsoCfY",
  "key6": "Ls1DAsQyQ7QvWYVjno2Zkn9HX5r492dRTScfckcYGBdkDJx7RVCKh6NDvFRNUzR4eQN7HdxgYbrkGQEjaFoa4wc",
  "key7": "3soqh2iNcMy8QNEeQb33WwXRksDPKYKxNy9njw61smy4AGJeva7LgMZpCXwDrCrC5SGvjRiK7h3aBQJZK4yVDUY7",
  "key8": "yvkzQirVbwZNeypCG9SLnWKSDzBzAqyxYrEVYqzWunvbvgjXDpc26TEhh5rN7nGY7vJ8auk5xnnBqWRJrqVu1dE",
  "key9": "NH8DzzfpAVEjhKNw8C5dkP2RMVN6GAbdKdVdeZEGCZcJSSsuEbmti8Rp1Am62nVWK1mgQV4YbifzcEziJivGmJM",
  "key10": "z52eKgVY2DAVecX6z5WSUxE8pD7sSrToJvWYUJSSQdqrcexxCTArZqgMrMPskET3ofpiUBsy8Kr42vYDFVEYhjj",
  "key11": "2tPLNCggGqa8hArmTUqG9AVYLXRz9fP3K515FuVu3de9kVJPKv9CSxARmxTNHZkQCunkRTYUVy9PCPs1PPqjqdjN",
  "key12": "2rPj2fu3ykE5rA5qBz1GKgz3gxXxU4n3PuUX86XxxZzJ48hFSwg9njY6UtWMFpnuzaxXCcATFHbUGWxX3JYJJtVM",
  "key13": "35W1EoWwcWpwtXaUVcHva7sSaRj8CPUTBE2Lku5KXvSpg6vaXJb6FZeiEEjrAnGFU325qQxxLCrm1WsBk8FqQMAZ",
  "key14": "2MeMPpAkDW4NFXTtvefYxXVWQM7zZfjoThohZY5rExfKcyiQmzH7tzCVTRc1af5iQKERGECMy5jsPEaKdCKTfV6b",
  "key15": "4sHrqCzgfMBdxSG6WBdLMcv3n3idpCwF9zHDXMoTyCcUJthLLUJcE1GjhdeDLZ1ELb1oVWRZa17rR9HhxikFgqLS",
  "key16": "SmWx6HiYQ24svhXkbtccKHM6zRCzFU4GVCbuBHNpy6tXRF15vq78URHWa64tn49K9r2n9K3Viy9gacpyXK4CBHW",
  "key17": "2wDX4gV9xqX7CzuMDLK93pyRurttKv8m88RbC4mehfYEcpKYeFYcjQ1yijBK5Vg8TYrXymNgse6Bz6MAYAdswGPh",
  "key18": "5Qr25b1L6ySMQMbUNGM2kpocRRfpViiQUw67C4WciX5NMUyPkrWw9hjiFGKehNkqEhUuPbs7GKvYhZPZ5AQU6K7H",
  "key19": "2gpbdEsjhHU5Y6otbJuyAct8qpNzNXpRN6PQPBGAnXwKRc9cjyjWtt65V7h4R4v2MuYCfSbzfMb5sHdcA3uGdWJJ",
  "key20": "4RnkcwHDT8bnqF864M79ggxWEAi2gvzTFmfcDP6DJbvQ7kjx4KhsmRUP5Dnxx1TuaHS8qLbisXrzLwpd4hKMrh6A",
  "key21": "5ZRRcKZ9qGrLyBitLEwRj4k4CzxdG37EgLpNu6HzvLy8oECJY45VB7BdP6HGfy5aXEZpxF3zRhKK6Yjr1TTta1WE",
  "key22": "brekEfrt5UnEVApV4xQCrcPUhWsccU6Bs5XtYiqQXY3BQWQWhVhqbqSP4SSin5zCBS3ZZgAihwcHU6STZRLiRVv",
  "key23": "5z1dHhD653HAs6shMSr7zew9jSTfMiWsx5wjdi7j5r6uHWHrT2TuNuLFcFYujaXfu5JEtakFMcwDgbQ1Kcvty3eN",
  "key24": "2hxqqao83vm5UJ1FAMet9Lsd4hmi5iocmqrYTAE13WVicRw2rWkSrna3QiB3HMLGP6f66cTfuzQMLySN5eev1E3s",
  "key25": "4B9n3SEiVVgBm9CDanuuaSsgdBCc9u35XmVN7e62rPfzx784aDhsZ6cduu27dGJNzRwyxLZ74kBkSZSzaycECCU9",
  "key26": "4AmnUVb7FZphVxrecRd7AHux9Gk53BPYPWJZDborzYLK9zKiRo4jmbhiCCMFe7n3KyKhw7Q2W6Qw27MocRGaYH6S",
  "key27": "5ijdrgWGRFUHpEPS4ToGrbEeA83F7V6hMJaSUBFmYHSA9GPsya4PNnRsX3d5p6UFwweFgMTxYk5PnmqGagkPQPZa",
  "key28": "2Pq9TNGS5WhPLVGAkf4vsD6ev5wLMa3McsDrX1i7VpY1Z2ayrpyU5dViznrED3S2ta4JAs7RtYWy57TGPQ3HZHMm",
  "key29": "5Sj3jAsGhXtv29gjtYTniowdmJZDXqHjktnRvdrDCxBsetGeGXUETjweXG4pERak1dKxNKPKbKJTmeBXBQFegPts",
  "key30": "5FU7d6JtnZm4VaEfTZjA1R9KFKrfmfVxLwUPGFfmz9dZGwRj9EicEfMhouRKJCesGvjoV8Ddvq5SeZJ3kbW4Afya",
  "key31": "4qR5bV2rY49WmBeX5ibFhoi5kYnEEjwcERafGXkcsjGioJfNg6NurmcdyQXjnYN92m1m1PunSK54SL8XJE3ovL4x",
  "key32": "3J2tJfeSokWmehopmFu73vhSXPxzi3PrMhXkiGouMSYFaRtnCCSbpdtjxmp8rAehCZ224874T61yj5QUoujfQC1t",
  "key33": "3BQHL1d1ane5ncHQf154jBX3tCWUBFiThPHZpAXmY4XKxdUivJZskMF7yFMfv1iV6GqsCfASrJZdwMbBbWRPog5Y",
  "key34": "531jJnfKuT9o3befBHZ32YeBsafRzaLCQToFTKBtvHLeMWhyTKVx34QHiycnfbKuMxigrgb9E2TpffwjUYAnZ8fr",
  "key35": "24nkNaebcuqXQwwabCZJKZULrzNtN1t5K88DeQXB9L5Xi66R2Jg4Dm8vxxLfj6mC8vM1TBafmMbYnwr45NAWvizv",
  "key36": "2hFyWT1Y52uQU32VM6tWRVCvWk8bMGERzyrZs3wnFuLq7VUEyXLNfTngMuPJgncDTGr4RCYXaEtJ9KDHvu532b7v",
  "key37": "5hQPgKd7VGFd1f7Y7jzVNZEsFQyUr7qQnBTgUAchJz67vfvLW9eCYAiWjkpdWiaZPsJiz5wLUsCaZLdQwHAZSbcp",
  "key38": "E5NuBv9zb94MRCEFo2YiwZfVnLVk9Z7g9M6m4gmH7NdcNM8JYBB5XbM7De8oPmH27S4E3ezFeKpiAK69ntbdCtD",
  "key39": "2cC7ZvPSzxDecmSJxVYQsyYP7n3WpYiG9pAXfaH8ziGCKseuagfg8mfErt7P99PAUnE2KRet19WLStBfbKbT4zNX",
  "key40": "4PFhYfxPwR6z4wooxNjzFqmdVMyC3MYBCbs236MsQyHnuwFibxntJ4Zju8yiDXcVVqrqkEgBcFegTZCuH9LdsEby",
  "key41": "3UMQMkSrjp9UkMEvc8FdcMF8JtB1RPKMsriqFKQHT4rDvWfJ5kySFfnWPbZTom8BoaTw1kfmpdB52BXzVq6rpiux",
  "key42": "5hXLFPmh4JeHRR2UqVMdCkSQD9jSAGoTov2PsH73p7b3qCtgn9FvXgijRRQBDRQC69QfcsthDveaahwUKkU4MEuk",
  "key43": "JkYJy2AC9treJ9dX3iTbRqhbzMXnUDKsKpFXxnx9J1YGbEoT3Lek2p4KkDJPjJTtgMTHYSwPY7e2hBBgRjNLN8G",
  "key44": "5U5xLGYig2TBWqwRwKAByBevRDhpZefs7bjpka3NYnd7pBqAPD9BbYgxqExj8ZDTJh3PaCdhYiSBTcYDXPLMs6WJ",
  "key45": "3EMLwFoM15ckVxR8PmUq2JzPBkAQDGRPdXtEkkMpBenVwN6QCP9dfok2bPkFGSidV7wuV8uFTSKSdb7KxahHafcY",
  "key46": "64i3b2tZqEzaFMjiUMBDce7dUT7TgKdmWDgHPHMjcFyTsQ71xgNNGYMdP3uK84XkbP8m2ekmyXAqSopnbrcMwwaY"
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
