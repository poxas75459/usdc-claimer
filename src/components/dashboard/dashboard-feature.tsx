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
    "2y1ZxyMDrMWWCh58U3hoyboUgiyqqUVPcYt3Lao1Rrmojz6vFVt3VuycnSrYGKvDq8nxbknStcSkLkJrFed1N1CP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U1eYwE8bznvTxjW3Ljo58ohALZf5RBxR2CAA6EjZvoKvkYbuoS6GAZ7sKmeWW8gai7fE256XE9R1mTf2WqKUkSY",
  "key1": "aP7b5bf42AZRdwhvy57yeykHrG8rZUn8SLshyRciKEioZYsTLxQcPhSfuJYUDAJ52VN98XUAknC6LZwbegGL1Ti",
  "key2": "4sXnu6gGRnvpJTZ2LK28RUXmMwKLgaQhsYuk7n2W953AYoKiszHygwUQ8SWP6Hpg4HD2qGJdeKyigY6QH3wLmqhb",
  "key3": "616Gyvr5udhjuEH9omQsP7RDGBfq1xASfXPsHMejyKz9rsjpd2BVhdkZ1NRvU9v2vgd2mwEyVvJaHs5JaG37YaS7",
  "key4": "W55pKviLjwTi5StTnLpTcZL8RMCbRzS1VaMmFSVF31K8zNWidaywNXrE12DpmKZPxfkQn9SfGCXsryFK1qypupW",
  "key5": "52EMQNb7s8ykiNSt6XfFGQNj3LnxCXnsmnbJsjNwVe9o5Amugn85HCu4zJTfEjfsKDK72N5rnfWJhDXw96pzGpFe",
  "key6": "4fjd4q9MVqtVAZMBBA9h1UMyVB7oK5f9CKkU5hcPGU2fgXqJQW2MLZAdH2E3sAxXYubyrz7KfqAGdYWJejQQsdng",
  "key7": "4nrdAUH7sqvKSqtzk41XYxenPBp1ZKAohwxmTd332KNBAEtgUoEVbUUhryXViAvJfSVX53hcYRru8UHxvz8qZybT",
  "key8": "4icyunK8veSVYMqEt3yc97RYhK738ohbUZq6yUoSNeXRHwSiStcnAUC4CUfA1JwaQbAV6UdeBtbEv4A4M6QtqL3e",
  "key9": "3UyJsVY4MHDU1uMpLmJpmJjyKo3fWwUmKrzSHMwX2xZ4ATXjuvFuLXXh2ivPLVnPqh4EJRgHW1nxAC7SJzx4izXH",
  "key10": "5SzbjwwNntJ3UbQc3AZpv5KtgH5h5KvzPuv2V7hanERdVCSeHKGqGWVcdcZuRCBtroWYoAuzHUU1GbagkKEwxG2h",
  "key11": "5nyoX8HJGHNg1KJ7DPJU7mvRbo9qUaBmKSaNknpcihnxBGKd5C6aSscCk21RtxkFgeZe1yQTdry9SmAGW4AHkBve",
  "key12": "3Zu1GZRbbu7UKfTPx2WmtXX4ssth73j7xMsvAS5rzCgWEXFa8s5qrMA8Hs2nNegNSTudEqMcYv4FYLww9x6Xb9RN",
  "key13": "3xPWTNA4pi6mDcWYPU3VQkVtyjEw9mwc6PniUC9WCp1HZePHaRvQ4pLzQfSzpzdy77SfW5xhera7zRLLfzN8vWD3",
  "key14": "31eRU8dQdys3nFme1hModxpTDiSr7nFYTmUYHGVuGNJ8GvJYrLfr3zAFEWo6KnFegCikNo8woHFmQ3aDVh1gSyrz",
  "key15": "SAwJWfC1Voyu5wPQE1CrJQnWjfptmkQQDb8MyfH7ueCtoQCVbPtxUyQQU4eoux7yx2xwUQP9Gy1jM8M9gzGUDAJ",
  "key16": "4NXmFAZA4JjVdoKKu1M7K3u6PjFGTQhVWiiqQ2ZAMRvZNxxdWGGwx35gzGdcaJtFezQr3SEVT6SKczWc8sbETqYq",
  "key17": "4uqeo36S6GzLJaetkRzo4236yiQuomjxMoss6hFP8CumviG4UxT3QCiPmV7kV7oPo1VF8YoTFsrio46LCB1PtUYb",
  "key18": "5HCdq6xvFT1CN7efgHcH59fi9fckFP4nBZuwUasFgWLkUNTTTMmGPrJcZezS3PBRmApxsnMVVmJB2uxDmpLkVnTx",
  "key19": "UbSdjWdsC5CZfnmtax49FLNREBM5drX63brSX4thN83cQuRQN7kt9QQFfNQ6Lqesk22sour77KQPzNgygg5RnPs",
  "key20": "5Tkm9HEasDirYCdSi7yNWgGFHvJK77hZ2c59vEiGXH5wHN32CN8ZUvSsDdgsUSsdPyKMuPTKpcqozDfotULkDdgq",
  "key21": "4RiH1gZ7Fn3zPkwVxzFEbJnuDwM7UaLSBmBkJKGA9nSoogBCn83zTeWHzA6jrHcw2gzK65Tmj31PpWsCJBz5gpxz",
  "key22": "UGCtnjSosvkZHQ367viETpmcgczqxx2QN6qNZWLC4XQ9t7UgYaaSqAZNUXowmAmbopytGfLRJudCsqs3oufPHDW",
  "key23": "EkeGmQqVxY8SME7mxvVgjsBct6iiyxiKz3hmDDrUbQH5y9LvJhE4RHMvWnXYRTP9Cfepu3qVB4d35GaZHKhJvFr",
  "key24": "LvkhfLHLEyGa3S229KWTwor9JorHgcTnyHJ7r2v5MN2P9cwR5w4SQ9xAhtqKkfn89giLfPZbmKDb9BcVaLBm9CU",
  "key25": "3gaz1sAejXpvfoacX5rVuMiuJvcFmeD6yCd4tmHeaFPx2kRpgBAjwroyKtrD2QfqQdZCZBEpewuCCTvBfQmoG2HA",
  "key26": "5gAHH7fQcqoDWJp4kNPXk3NxfaLPDibiFgNr95WK6ykeYWgF6KCCYMjy8GbTAKXWKNtPck2tu5CXfQjDyiE93219",
  "key27": "4uenqkuYfoDoXeYDmySsHkntA19CTnETpskTuVHYSLGxYaTTbMwCMCg1PcmDua8hVaHcrfQmG2pMX66A6CHgzWay",
  "key28": "4Xpa1DmHgFejCjK3R872J3fitufsKjHG7yTmCEBfUA8JmgMTLcGNBDEaMgGqTK3YtCxekYLpHGR79EQF1qr687ub",
  "key29": "3MknJc33mZdptAwg8wfdZSEbJj64ppyddeimaSmqoUtcf89fCyUihSexB9UCZnRUCUViBxcYLB1Wgu5Chvfnceb7",
  "key30": "3qR7jWbJb8sFXc6FnyHMvjCdmyCvq44MX4Cx2QssHRsfZ3oGiUupcnXbiYdRdjBFPyDjwB68CRmi515xZirsxTEo",
  "key31": "3p4JEK7khckyUURMvjZbQhh2fsFchxR39PVxnDizxGpqsBHexzJw6N7YguwT3WhDmkAU3V1maDNjpWntkq4CgskF",
  "key32": "2U3mih2vMNHuRJnMb6z3eKbA64Z26S2Q4xpk2p8MoJGMwpEsF7aJAGwWed8ZFNxmB5ChL46zmLsq6yoCx9J2e2vs",
  "key33": "bV8MH4Mys1J85xdMsG3NfL1xD3cdtGLJA4vvFCjDXwRcc6TV3euzVDMbzyFBkKRwTckt2tZipp8qxCqPtjHLDCV",
  "key34": "4AR4c7iSnyh4WWHc9CVX3ENHyafuHPMtSBBo5WHAXrLR1v3LwjUd3yNGj6P3g1ciTU5hm2eUMAVgsQ4AtanM8nRA",
  "key35": "4kXCbjeLRUGx6qXwFP2zGHMvqHpCmHt7e85AMVUMNaJDQkaA6askxj9Bm6iXAdxFT3EhExMBnpKvYNbE8ocGwfCP",
  "key36": "KsmRTGEpHfu3d78CGL728egNyynfxz638oa7oRLn1P33qbQ7U48YFjSTYBsv7KpWwhgezBrEATcoHFuowGVCiEk"
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
