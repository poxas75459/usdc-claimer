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
    "2Kh6ZFEFkDNVvNJs2Vi4ee4UKDYb3TSvaGie7mx4VWF3sZBWY79HNzYo9LGs2KzvPLCtBJiP7ia7ijhnQjMs2Lnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CnJxSqSpqetKkDMcPN2JUZpuZohXJyr2zFuTd8sf4yvhvP4bKN6QP7guUQMdBQq5cCV5mdNVAYt9Vxbn5pnnkvq",
  "key1": "3cdXPhTMVrPLW2XE2295xUKtFqMbCyt4jzSwsP2Nq6QoXvhijxjS5YP25W8w5EXxS3thJRJL31Biiku1oxuBsG8X",
  "key2": "5ri278okTe3J1bT6myarxczWnE2RcJPPFT2n5RcFZWT3Gjn8kZ4bZWZkEbS9R2RRh1RzTGuE54NyYgzPTveCTaBU",
  "key3": "59dji6boQ2bDr5HUhHPyxrbpHxEr2GiHypptJ8pbyEhLzv57sUd5bEeJNMRAKgJrxUnWWDy5tbx8WJ9icCwsRpPJ",
  "key4": "PC8KP2EbhhCRZay5hcD77wVEhCn2eUjsQt8Jcbid8X6EMYJEH1muTTmPYLNqosLo2bz5URxA3awdm8vPgDBHUw3",
  "key5": "4uCZfRvnaHjLybjfXL86uHfi9ugh15LTSCS8vpZ7e6LcHc16C89STo27HZdn5SFn5fc3muB9QcRuLPs9FqbpcK5v",
  "key6": "23ZQzvDsZzmiYSJo6Jdb8ndDmnjYZgMqyHAXBvAQV9Pb7ZJMSdDWganVjA7gBmPN1EU9ip1w45uSrJwip2Px8gYv",
  "key7": "36CeJ8fEWAp5tqoJdoBezosiKwtgjcgHyWfeWnQL2JcbTonnNiscWC5VkiAVFoehZ1uFgHRZX36faryJkdPM8x9H",
  "key8": "5EuqcZjXRDPQcuVuWrFm8MDJrWkfshqKL9G52ks492oSXSgKLAK9cfeH9G5fvxmzPkPadA6gepcP7cNmS4SjQgue",
  "key9": "2YpLwVbKzyXUVBTpiEVCf18jBHLGZ8fmKaykJoDJqBagTpw2ph3jNBD6BcihVstEqTbvAnuXCCtB7esUdtkUE16",
  "key10": "2ChX75NK1fEh6aKUNTmbje4AtmCFSHoMqQd2mbuJhqH4voKcjsiaRKCHNJ9pyiMtgAiXeVv35xCbH8Qviv7hK6FW",
  "key11": "RMRQYvfKfYawC6FscXenYEkmTkBv7nCmUiHRFZMQHMoorwqQntnqJCQEarV2XGmjtnAevJAZopY3PU6dUwfyUDd",
  "key12": "BFiERBUCXxgwD7xF3YeAt828GhJrac7Krfqh6gMNqpGtooZ2hv1fJzp6iuYBGXyKWoVCtW68XP5q2ZoE5XniVnU",
  "key13": "5hwZZZc9Zt9UJnTGY1Wpeg7UvLtPdTTBoSWnJre4aDDzDMgVWontaLYHwP94h31nnzneyuKHe8kFBMku8GYPdch",
  "key14": "2JGTramxGin7Yox5Xd9ZnnBj474q559JP7W9rEZr9TMJetutbZAdpA2wxogGPz1mgXnc67KRJTcTb686D2srhjeE",
  "key15": "2mLFETRNEEufzHa92PFZBfYSs5smfYpsUFsBKngtvg2pz1jtcFVbYUA5p1f3kZvgQKUmnu7PcYJoqL35BLXFvj3j",
  "key16": "2YpqVN5JJp46FbbbsVMnF3ZDu7UdPmeWnYL73aUD6gNBvYzr7wRj1fzvWXhLQ4r5pHpBxDuTxiWWeUKonjsnw8LG",
  "key17": "UMwDvra9fVUAzcyk1sUAqVgJrzAdVDqSoj14qQ2bkhSajxE5NRPXEFc3f2qCHjSJJiquMgTWAQL9tCGoMxv3XEf",
  "key18": "5ZytLUfa9M3PT8VtPtqZSqLYgWhrcAXnBYcYvQgJsBoA1QNHT84pRLVzzrUESninZphCnsZnvznMPysbVcawKR9r",
  "key19": "22zmdb2GEqCMjJ4L5uwfm1x16w2Aw8XDEyHqGxx7nD3GA7A8nWETmQaP7MKNkj8r189KGYD7B12GVUjThMezvPve",
  "key20": "5YmTgLziYHbVLKvQYtzzn6ANBjECUmFvnFvadQ7x3k8UGpySSWeh7QxsvWv9JaMeqbM1kmnVkj72zHmu1JQ6ydSk",
  "key21": "43ziwLXatgSHZHkCRZrKqooGVKFQMc5hwJ9jkFMZngqCEpcR1dpxsYLiEmEm1CvtHMM43GxpDg5D55uaz5qhmdPZ",
  "key22": "3sptmrtYRXiR9K1AM9BsRspvtJWw9WvPLMcFuQwMWNuVG6DZ4fvKvkrv3a3BFMdM9KeMjX2WAYzb83ZKvQsZAYu4",
  "key23": "3vmWUSRmU5GX6jWpoQSVAbP5K3YYpsZ2y1Zia2EtJKqK4gJTRrHGDXPeV3aRENEE5cLEaUZ8LVbNYnFtaEY9Q5Dr",
  "key24": "5dG2fVL4BGcvJP9UQdcoW5sBxHjyTR2RLocDrZE9BGypS2mrVmFnmesEfn7ntbzm1P8L3BmyPTNY6iDMf6cunQUC",
  "key25": "oKjgVkQFfsY33Kzd23XSjW8CpEU9azRbdi41APcsXeuwi3QtyYZGjBvYhmP9qDcFh9KsyLzgioEqrHcbB7MkMyM",
  "key26": "2nmBydq7DgJ3N6962Sc1MWsSq9v6VNwAXUYwcu8cxCA3xEYUweXyyaE6EyMoJ5EGStPpYaJ8Gw3LpjskLQ1gZJVb",
  "key27": "dp49fZa11A8QjgRdzEM8Wnfa5qajWAyDB9MVSPhmV4bi5q6pEhoeyuZrmyxRtFaVzR7XeUjyVDesfX8xLPKZArr",
  "key28": "4LpbwSydAR9fCEBZUeXKhsRCQUGvfvsB4pBTukxsQTqDLA4ZYiUzEkp568TvJ8tCxwH9HipBTKr3dw4N5rGDCzf",
  "key29": "4Csmr5BcTACgBgL9fgDMvYHJ1zLSYx2Mb7pT6eL8WQ7emVtmDDqNBEevwkKnZDwbdiK5FKhC7BnppYdgmEQTJm4B",
  "key30": "5gf7nYoQyzG4EnB6ApmAUeK3tF8TUMNaiigH3z8itxigurMA7ETzo7EeHNKpbHkKa6ZeKHuR4Tprvmc6JjPsgAML",
  "key31": "YRSGJXZmKJR2yuPzcRtBqvx6SdPzyVVDUWfmEjExoLgfTVR5zS2TswKUaR5jc4oyDNQpVJDChM978xFe8KyNVvq",
  "key32": "2cpUx38JptKrUkuzoCAY6vJsV8g6aedk6RNspjDrrwi5UQeNt2Nf1AFxen8XVgfiF5xFMsogb8aE9uZGynP1pYYB",
  "key33": "31DHYGJq8i7jCMTwAwubSK4gwte9SqK1knEAdX37txjQ1GkPQ6ynq9MzDN1upkrPsQvP3V535fhYooAoexHXKQqc",
  "key34": "Ec4iap1hVp8MQbKXMhDB5rerdspsXQfSFF32724uCRs6t9f7ngRX8QgbhqWJaEWHSYzefZmEBAEwhewtJxV7XoR",
  "key35": "4vyN5NwLAedk2SCBYLfjJLQ3nJP1mhJeRGXZJXhu5KQMgkfDxzQtJnWzFvV6dLyRcjAnSJ2itKtunS7eJdQUckqR"
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
