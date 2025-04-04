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
    "2YxPJbXTjiNYt4KnFUQXEZ9Jv5Do8gRtbYEunzzGXitjEML7Q7nRwSfjDKE6hvHvot4Lx6Nc8FWy9WCN7eDSQi1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fb4byu8GpcUeWJFAXjt7d5kZ8oyKJMrwRK6LXEJGEb2sovHpTEDPrEhgCwB4QZRJWcwNs1poWBmkxAaoUTxrDxP",
  "key1": "2YLLN1CbCYDgJ3kxRzWZYEGcXusjN8Ch4xdLE81s9UshAQAqQpgdfSQEr8pKCunNaySD9TTu7weNiHMFvHsNfzRU",
  "key2": "4KNvZcbj42SLS5oMPvpzpJieUoWuMVMe4Nxnh1V5rmWvJhpdWwC7RuQnBfDZh7nQCjXb4VfzyMsxwZwEjNHebQjT",
  "key3": "2AHxhYZmVivVjVRYUaEqFefMDRfJ2bVM38s4xHemMSh4fs1vXsgxqnZhJ6RDcDk1arzoEQDurN9nZxStS7pEq2Ut",
  "key4": "55V2FpxCtDYpRYErUt5mbFCE3x3m6KSZ1jRRM1aN3ZVUidCJgviz2UgM8PXRKdqAJSVfZdeuCzY7rm5Ry1m7v63",
  "key5": "5jJdMP3U2ZnVKyTetqVSQzR8fVp7b8pxiuWcVToVCVML98TQ2evVYZLVBYoFN8nGMU8ASobzuv6sedCYyGifCEF4",
  "key6": "5kaQKWA1Hp5ZWPPrhM7bnvZbff4KLsgtMkUrsmZjQTQesuJ3e52HTuoe1UJjoqvJAfher4gtzhKMWatUgkZ4FJ87",
  "key7": "FVcn6WaAe4y5o82uMoQ7QPQhmCZtDd19KGt91H5XviJHfJmonTsVjKs3Yj2JzapfEA6Wanx75QSAAF3DduLE4RU",
  "key8": "45jKYPmSnoFzVcmQqsdR5jDLZyHmxXVyFmH2vzihhpsWAAwJ7gAUYuprQJYpR2znkTbhALYLdturUPzF5w8uYNaP",
  "key9": "2c9n5TLDLeJivy5EAKpDyu3pfjjEF8tubduQ4nrnkHuHNQqoqJoo3kD896XjfYF92EGcpmvzCyMRJFvm7idUphN8",
  "key10": "USLga4rha7ygsz4VcvpVU9pousA3Ae8ufpRAfGpJSJwBS7h5DZ4XSfysmaxc25GvEFJtvAt1UTPfTQQKCqLxYhP",
  "key11": "53xvm3G2dsQJBiEJi5AG2xBdDTZ7vsiEMiyXmGtfd9svVQyM2L69TzyxpDyPMNAGPZSSJHVit7qLuWyAGtVxsuyL",
  "key12": "2kvbevWLsR8SQEsNZJa1AirdcRwDuCpwrBz9bRHhpfuPWuvwvjDaFDfSXS9R87Q6WYDK5rx34HFYU7o2wKTaJ7UK",
  "key13": "5vJEADxqYYduEwK69QxCMW71QALqBKj63fFzzgY2xk4Hf1X1Je3VeuMDQDAPAmMbKqwVWqyaoq4Ek2kcGaCuXagt",
  "key14": "nZeBtcuqtTB4ZMck1rANsjXo5NudULErRCLgGigheeZUX5kvc15Hm9GP38atweNwGr7GBeD8C2yo8jCAignGCK9",
  "key15": "4amauku8QrcUBGX4RdJCBpfvGon2mkMsMqPGtKcb5QqstQMf4hZzzv4FKwK2EDerCnpmfBRwj47yxPbSDNq5gaDQ",
  "key16": "K97oJRGdYpKx5SL3PQM6aXt1XQG36tTJ5kCEKUi4d7rWUoyS5QWihEHyoVyGW5ZvgZhFoFx9QbWX51c7n3oGz1T",
  "key17": "2ygh3ZLcDyy9Z5SnW2c6cYTRM4Micg5AVZf1q73HF52aDFV9fzGSe61AF5RGHA2SRhVb6oMz5nmHeikFRZa9tHRt",
  "key18": "crsgdNA8z1zsGvcLn1h8WVh7yYkya751KX9c1hj3Dy6TZaaB641G5UtzRHzbqAN4TsKLvN26SSBMnbbuCXSGiKA",
  "key19": "Q2ZLAVMKinrYuKxivKmzBYPrJ6Vwt72GYDRpPKDhHUPBp4ZbseyUG48aNhLxgL98a9bVrBDECUz1aTs9DyuAFqc",
  "key20": "4ype9weLWCkRobNEigdbs9KtKkzw3oqv3hLhfFaseFpwtBifVyzYQmGPjmFwFFnxt3vENh3M7WSZjCfjG6PTgksd",
  "key21": "4PLFgqBavc79EoN6AV9qYXSMLwjeXBRrQWzgpjxJFbNZMqbfj6TQkavK8XZVcLJztzoCWS3scXD7vT9tu18HgVfQ",
  "key22": "2xXEJ8gFtqugrGuUv26je31qtxfqk89fvAgZbyxueQQHn8YqAgdGA3So465deW4Hkk8mMPGYsXqEAMZaju2bDD79",
  "key23": "4KDuqH7WKWoE8WkmLHfWugumjNxY5VpLa7XpmGAz6bcaG9QUaCoVnNLspPYxUE325cDmP4AdJevdd8ydtRChVXRW",
  "key24": "9KHYc9DR1mpAW9g9SfJ1FjogYqQ3j2f3L7FGhBGbdapSiv9bN8qZiu7wGGaKMhQC3YYEGxU3BkZfRmeeNVF42xR",
  "key25": "3rUcQ5xUk4HhBAfXnLS1W9ZpJehj9E1vCyGrhcYaeg9u3Uk4q87y1FYj1W1rLHQQiJ5d4zPyi5hgzq9J46hr6gCT",
  "key26": "3hJfsv5HsZLF8Th7PWVyn2DohNWxyK7f5eGqeYuzYqXx4Y89zrM6WbjQw45BpypLXjxWr1QHepaTWN6bbiuA9jM2",
  "key27": "5V7T7aW17eRLxntwWqmoPaBfyvBmRsd5QVjeZjqbgSNoc4wAAK6iqN5UfffzYph8aZZmC2nXYt5YS1EVFNhwBsju",
  "key28": "28BUHByrvGrkMsYhgd8naP1DAirEA15BQBDMQGQofRNQWFQCbx8JspqC77w6AQhxnZ9MNtF9UQoFqCeziRF8zNcn",
  "key29": "2PVZaxucCoLVMLNuKumLRHbHuvMd3rAM6PHV1ztDJhKafSjQmY9cjN31xXo61dNpa7yKJQrbwxxgLo4GYcWv7NwG",
  "key30": "5aWcbVPbeYvBzDBWYqBFczDsS3U57ZbnoeiELSergaowYKG2dMKUZvcSvnpKr48BHTuXzL4oLhyU12Jms77B1Ubj",
  "key31": "2aB6WQNefH7q4fEtrv89vQGSH6cVsQnNGHL5zY27NWo1gdn2NpQ63SXvbcEACBTBwy65kigXwdMEKY1nLyVdoV1B",
  "key32": "4DuVuDpREYdPFN1UXCHqUxzhbSNqqBerLYiy2VKmUsTs2QixKabYcWYDcnRU5WuKunUexTCK5Hui7KsF5kNo6SW",
  "key33": "4VTND2vQmFJYsGQR78UoXjkxidqCojmnamgsTGv5CYZGSNKFXro6D7AwxsLLvkYx9j7nwDAHkEHvx2J9Udi6b15Y",
  "key34": "43wHfFWQmy6e8KyWjsM6LiumysdFNthASgTP7gDbPmyRErgFhxwm9YoVjhv4HPVfnEgqNMF2ZXHxQC3xtkgeXDzN"
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
