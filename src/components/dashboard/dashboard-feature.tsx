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
    "4mfzMKYd3a2zcp74noefF8rN5PfFiEti3vmZ88CECCkoQPVc4Cvv1CHYXvUZ699Yp4zdqbMtAbwufcfeRwTC5tK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ukPCLFKAcsQTTeECWSYd6YUsxhXATUdBZSscgAAgVGKg3uDTiEWwXUHxPKkZKuqttijMVtypqXP24ABvXuUQfV",
  "key1": "5mQSE2kFqy6LNcgPdaGeuVTYAfzx2FaqQJ4GHEWcTFephKmZrkYYAqHgrawpXT2A8mWyAqJT6y5vSY1fcBqS7s1v",
  "key2": "3GFTr2Uch7W83EnwnKBqTMahVe62WFHSKe3ZeeRDfJ3pyu79kgetyh6yCozKB2VeCeBWJYhWK7yEvVx6SRd1C8aR",
  "key3": "5GefgLZob5N8ejakLchbqGzPJXEayQkRhiXDz387QCtmFVrqkd6Vius7jkEhAu1Pz59xvnzvswNb7vyqAJq8KYq8",
  "key4": "49ybjftcaLfrhPjhYEPdyLiiR5A2nwrWLt3uS5cWaMCuCAEbJKYqSEXoL7AaaRXBR2Ap1A3bGpARreE3LYMcuK4Z",
  "key5": "5asW1adVEgiwp9HyPF81QpdtmgXYgEWGTDEN5NXWH5uhTuhYvozgm5RudBqqv668Uk5rV5bxKwc9yWxJJS4iRVZT",
  "key6": "AHH5zu2DhMBX6xtuLznixU4cLs2DCddtFLY7XSsFUCbhVDgw8Rtb49v88WxsbjmBQYBLPSDBEXFD4ia5Ddszq6h",
  "key7": "56weVqzr5HWA9ZKeDZVQHvhuAcDhhDjE3AzXBRAC3kSH9UutQ4WNRL5avxWNMVLGuePPVFQNeg4YVTrxMYncLPDG",
  "key8": "GBhuR3Ep8DbvRReo3x6M4mqq8hrKh641TfP3Zp7x8i1e4tjmif86W7jxfmzgRB8aopWSQdexwBFRUc8S4xn2SBB",
  "key9": "45JdfkfTxNvQS7L7j2nK3QigKF25pQ1JcdL3tktSXyLz8B9euJxFig8cSWgobuU9h1nzq1LEv2pz2JS6muSoGApk",
  "key10": "2p8Rxf3C43A3qgjpftAEGU4W2u1gDqTbcCmo6QPS7nZSdTxteuF8pjrTQkKke5UmSidtSjn2Z2FTPgPoMnPseugu",
  "key11": "3CL1ZtV27Qdaef7e43whJiKcGaSYg6UgPesCi6wYvPKWpNfBpv4QTsqsFduJe9kU7XPoukd9bi2DjiwjBF2WhhHh",
  "key12": "4zRLRAVrnt5RhyEy85YwNbeyHn86RGm3ZUKP8Z3wWHb9FZgQhBQ61moY5H1JVTNfPvakT9RCLPoELZesuXgCehBD",
  "key13": "AP6bWoyPSroEerJPVNLU6Sw9x3hcdwGcM1Xq7RiMwdcK57anszpTGSBc8SBq9FxhnUh9UXN9TBYzhgqncU6fsqp",
  "key14": "4Qhu7S6JJMTCXzDN63JDoZVeTKwJRNwqCys3NSqeAg4VV4jyDp6RQXoyk4bEVm3s8X2GZyuH848jCMzbcvWxFjPm",
  "key15": "3EsTi7fE3aZ7eqkqvzC2KTt2pNboq3r6cJP7oh6tUVfsU4y7kJAnKQR5Kgf6eXH8yg7wJsRpGLmAETL5bJr9pVdG",
  "key16": "5NUVjpL8YLYyssr4yumd6SyWfSvVksV7mo782qGmhJ6cs6wTATULvsw63vk9uTWspZYiCkKkTMyo6r929mMSgzjZ",
  "key17": "oopp1aJzAGsss7N6AqHP8eLspW8WCU87odTWgHFGrFBChKRDsu2Tqn49cEfU9iLDyv2vEHLatvtU9so8xVvcYxa",
  "key18": "5ye3ojFr2hRfXB5EZtStfg1JP8BceTUFn54jCpVpQCmxikFddth7neS466QH5GYMk8HQ6DNczexisqQvhmYDN17w",
  "key19": "31Najhi8ikbw48fzkQSGP9WbiLr4LGuPdKdpAoPiM52rSEYtSW7xxXEKZunF4LV7u7JYGuyZ7rPsS9akdmuB52Dp",
  "key20": "2wsqRCKNMpe12rjyQ2uBoPKHKAZsqQj3k2rjJiUAb8zPEBMDpHMfZdypjxZHiRArRV41PwmUDFd8u3ZxAoX3MPBf",
  "key21": "3YK5CSGNwtHp65Tty1TPc2UMxNtmPQHNBuifrysq57UnAhD1oaFDZmNPaEohZFUfCtJnHquN5wXHdQ6XxKPY2W6W",
  "key22": "4CQWWV9ge19ym1e8pbtcTsEyzMJVmoVcwsSFtq8Cy7pAkb1NEjDywyRWs5U2a41TXrrzmQvq2KfnXyF7hSmZMULo",
  "key23": "4g5eMPH83gkkh16DDnDzvvN3tpQJXkXx8TvfxyxywhgjqSeAkshZcjmgpQGRYLv2mnnzveijgHzwckmdYWdiXco7",
  "key24": "3LyAX9hdLaxeFA5nQ6iQUj44w9sFVbwaqojtyhrRhQoirLXQEFQ5JCHtcnCnooMQcwmUToGQC5oMGxkqgwapKg3",
  "key25": "3iAvpMhqqhv9PXbrUC6Uff3XBDMZ6m4ZbojvGnWwBPfHYpppkYRRNqbzBQTCyBEmUTBgjFXM32PymqXQQWmdRsyR",
  "key26": "2mh5ZLv6HXPHtWqov7K4bGbHtRJYXZ7NFozhMjP2UKgWJzT5WEe3EGYKxbof7gPoMyes6zSXHBVEA74MLqPhFdNh",
  "key27": "48AHqoRhHo7xXAR6yywfrwBHGetR7nCHn6Sj1Sy1gMqAeQpacDm7yZjhKxQ1kU4ZqS5h5tfoFQJjfNXiZZ1rkjRC",
  "key28": "67L8oqPjM8AtF6MLZ5RP4BReDPCHUf58pFbrSwXifBnFcEsUzT7eYnomQhFuLoeuLEpa2vcRKscuTVfg78xLDDn4",
  "key29": "3uRRELiHYGUSeokyXm6uauE45iCUAh9RtMmwVNDFRto6SvSFuvVg9uhguiEuxF5c58hC9tXbPwedtt3NSCdHURYc",
  "key30": "u6xBBhQSZQsU5q1KoGxSGzRJWdF6LKVEwzmQN8ARVLeG4rgvcdxVXKRhPJvgZ7GcKvHGwnYxM1AvpWeNnPs46y3",
  "key31": "4F3Gz2DfYxHM9nsGT9oBy7Reb5r5YT9QF7ZmVeamTkGB9h8YxQfzBfiEphEcmvyttgwaWzrnqehMXkEJcBGhbXe1",
  "key32": "21Rd95KmqUwbe7ZWSj8iPNmxu8Y2JcSGr6iVDCREYqav5QaHnRRwrXbKLDGP7wrKJonbRLmRR3xj5hugDzf3SXQK",
  "key33": "rs3dcE8jQRD5SffDMGSZc3gphyNQxx3UjGCMXMd6zNNZVoi6aGnymNxh6XbiqwXHhvfg2YfSxiBegct4Z6zQsbP",
  "key34": "5X9PicFxujxNUqugUT3dp9u3cs1xp1rgyDze33d96Ps1puKuJN8o4Lc96YdB6mMCQxuYHqYnE84g9V9HJbi3cuKR",
  "key35": "32KTzueZwbcUXKvHznWHbmMScCy8h5Lh5HLuwm2yXrn77aJtCmC1NTMj5kkR7LASq4zz8LGpXTJhTShyFUABihSg",
  "key36": "5fZy4n4eVAbRGfXDEFNpp9XgeBpwsL9MR5iihP6zXsXPYRpSKkeGBZeuqxGogDg7gQorMzQcAHEMeQ5o2pvrEUVJ",
  "key37": "aeYGMdGdQ38yBykT3ERBEawqfdQye9z3vT5PPcM5t9YJzwTLQNNFfFkZRRsMJ1egHyDyUckYHFMiYJXPMC1UeTQ",
  "key38": "4U1qRFZbHoUM92aF1GCzsnfQCz4KyMJdQoSMDaUMoRV1HzNL734NHcX8DZozdXXLDDNVmHoZcrnXf8JZScAVjMoQ"
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
