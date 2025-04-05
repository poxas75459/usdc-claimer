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
    "3n1GJnMSWSGUFjefWTTycuK7TmZ65TchMsXkykDQfxk6yQ1QJzkYfpYT7QN961y7nz65aq9v1Z42NgURdJu1Zp4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hoDuA8LdFynGRWmcGxejesxkTXFGwgoSwLgPvLrd9fvFZVJPkL4zfbBwSghC4n3a68H2PY7XxDSH4u4ztLKyWRJ",
  "key1": "gu3zeNGexeLFHgmTCtyNkLfMDEm4rZkA16aDsj6ybNbcBN5cfEsHHnwWiiRXPe2fhgGgt5ZQ7sSKJe6SstSZMr4",
  "key2": "5ma6CL9mdhZSVw9vuqu1kW6QtFBu5p8jtVfvLW1SwsFcYBpRf2i4yrVNuaVZS5Q92QW6UzBX8mVPbgJJF6SMbU4K",
  "key3": "3qYsWsSk7QTWxEP4SgYEd3wqSjLdG6QtCSqFufu83xZ3rS3b414zgJdUMev5wwSEH1443vQ436zsDqJzUxmGVPvD",
  "key4": "Pnctb2yUs4xSSqDajFucs8a3GQYesDakE8S1C5WtMRrQLae6iAVzdnDPFbRi7a7E23NUyH6ikYCyRceN8YgR4r4",
  "key5": "52WQpttXPnfJA5wX98ZA2r63Gega1QXVM4pzRn2Cjg2adqC7EnAoCtv7CE7fcLNifodqE1NjQU8yaNzWn9yU13kP",
  "key6": "4ioR59ghN5tKmxLtYiTyi3VTutqwWXCTaZENvpGcWb1smpTNdYHxGZJ57kxuKiivfcViBPuF5HWQvCfiHbscUdr8",
  "key7": "2gdvAvQPiCyvarqSj52FXjAKQgmVJG4e8rtb3ugGsJjsR6S4xZp6R6TBRHKEro6E281mjPiwiK3A8Xx4WkybC8Nc",
  "key8": "4bGuEXReyE4eBWuK9MywuC9BwY6BkUiuEfiYgEBfhHSYA28LqCroMwn2LY4jqpSD8mqfho5kM4XUEuRsjpTaEbcr",
  "key9": "1woZEg8DKzc9ndFF2s9XiwHt7rqtQ5V3Mwz8w9ompv9w4y88GiGCeeycv6zkqmjsbF4AUr6PD5rLbuRsVHM42Zy",
  "key10": "34HvKZnwdCDthyMFdFAqSM5yCc8wHizgd6fXh1daJyaL7vCnkmx3b6HF4emVEaV41SMQx7Lv7TUD4FYZrXxXJo96",
  "key11": "33EbCSWnEc7SthwWbX5Dg8HBEpNy4iPbTfuPZEYsfJvBUoHVYS1FohabdJEeLeSBf99gMu7vMYCXgEiJK7usbyr8",
  "key12": "2qRKTfnJe7cyZEq3KLupYzP8gTtb3wRdiFBpiFQRFeCx88mSqhZJtLc1AemZ7qsfteLhMGJMbfXrrjuH3RqqDpYK",
  "key13": "4EdX1QkL5t7FJPjsNsrWaNTSB9CcHg3X9ytenv8t1cXBsvKQQZKB451AfJzWF1GH8nTXWoK79PXRawTxqd5bV3bA",
  "key14": "29BeeE2BB1HRRbnQi2XFzsofxLSkWM1iyguifGjG97bS8KpSWfsEBSif3NhGLc4wKcwNvtKcLtsKJPEgevyZGPi2",
  "key15": "xkv9L3KAkH6wTCug6yTqe7t9N5Ud9eggBHywP4g5PMiFAhHDJocaoNzinZr18XT6RmgTCzcXAnKa86WCYZi5TVR",
  "key16": "5YUCgGYDJed5gCwKdrx9S3JdNYTeTwCMkKkSnQ9z2hMfU3ABnQNGKtW5sMW982MbAsSVvEQ5aCyrQStp1GnHtZZB",
  "key17": "gckDETdBJ9qtKV4zYUrmRMr6RaKGwjh1Vreqt5Pj2xsWTkDZZcpcCjH8EHEQFFDjSWprN3b1nPAmF4mTVxtq4fL",
  "key18": "4TS9wmbDAZM6szDRRXmw1C4yhTfcHymiD4fK35yGgaYJxr6ykfXvJiCQQv3ZvVJBrn4fzPEPaBrbzCtojRBMRVrD",
  "key19": "5qU22BXJiDJ1a9SfUX5Ug6cHfArcBhfzXU1zrHZNxgCAWtF5AKqZTs9Q4ujd4g3v4dHusYoSogmBdcx6bDAaP5CE",
  "key20": "44L3Qdz6qJ2zJ6HiurMHyKFGUrzKMNsoF2CcDHoTuTMd9JfrMFdPKX8JWTh7HzzjFsysDGknx82bUge1V1yPwW7y",
  "key21": "31uiE2f7KWCUKUTeQmxLc5ghkMq6gHwAxb4UXp99V2KkiUhqxsNdX6wGKf2gBDJ9azgkH11fuTihjoXhwkzCZYrp",
  "key22": "2MhXLqLNBMTfQ7BGubQmLcjzZJsMcg3ek1qSagjgoGVG8kZ3gnsyxhjqWzNntF68Uv5cRk1EKSqohghA8e8kitGB",
  "key23": "5hqHmBtDucmza89c9xmSKTBcJ18DJ3TUvoWFTvKYJej6uWHw53PkWYQu57vbA2kc7EgBsUCWEPaVC5B9Z43pqDAN",
  "key24": "CVsrzvesfCFKjfijkZz2A1ZWA1WXDVjwSz5UkJjYAeU9GLuc652ZQVoow45tJWFGbDqFmPrv2eFV4eCP8ztTSMA",
  "key25": "4jU4EtSPdw24gsHUEMShHarwr5ctkEFRQqtWfzAaCDfAS5EGds5UEG3GcCPK51RXFtFAvB5QREMda7LhLeP4hsqw",
  "key26": "45etgDBCYe3nWg6qjY3DNQJ7jR84roL9UqoU9uDnRLy9PdLCpCeL1wxk6Fdu1fufL9SbjQ6HQKpq9GEJZEfWJJcs",
  "key27": "614aH1eFX4eauuJPXeTg1KdVabdZ443EbiJQFrxyYvEgPZRFUbnkiatPHQLm8pdrbE6x71jkBUsT53grFiycRvts",
  "key28": "26nRZyb9hT8APMqtTxm5w1qLAXcdYgEKCzqS7p5Sdz7LYPnDYTVGvrVZcKVf3H2EV54CC45Qr7FthociZFQAdJzv",
  "key29": "2DGqx5mAqTWaMPgdmFeficojXamMPkDT8rk5CdhtNimftLx5fb6iRt5KEqtsQzSgxoYpTT6uXJn4hjQNJioEbmkX",
  "key30": "whaXihYLFJucpSbfhmm5HuUyHQhKQLyGHN5uHnTaJJr1cLetCdYCNaTY92bkqE7feexaB23neDtFM4r3HLz2E2V",
  "key31": "5DzZP1BtB4xpnSDGXu7Fr4AFUJ3YHRwjGihCvvuDbiiCprhEQCFitXNsg8md8EPi4hoQm6J67nLfe43h8PWmYqQA",
  "key32": "2HqAG58Knx723MkFoxJ1s78xGiBS2e4GnnTk6ZDRg15ehGbK56ndte9rK6GbkoLkNeB1EyeeptjXmAUsPmCfDuxY",
  "key33": "39xnwffivw6H2nPZzsAb59EZT8naL35v1XKWzTLrdinoTTwv5FNq9f4SMrz79v3QWq4RfubSouiTAcmnckDCTfHj",
  "key34": "5W86gs3zVVpAassza8EBv7gcesT8gj4H6qCdjsBBmNW4dYozxudwjnCKKSJxbrZ4TSTEXQUMGbnVPvDLKukNiN63",
  "key35": "4nD8BbUNQxJrSZvyPo5ZnBfXarZutmqb1kNFhLp9tYFU992qqb2uWzNAxCUMK7GBkQigfpi4WFEDDHL3z5FzYUah",
  "key36": "3aVFgSM4h6XBcMhY3FuFBdCMr9ekvPdr5GYDRRFHBqt4TYg4ZW318k3vauRi4n9G2gZgF1adQxUTBBN9oGt6eBjx",
  "key37": "51Lk2XG1HzezzairRxXiDK6XWXKZC9Vfo2aD9UxFuWyX7HsYXXyq2Zkh8hxKGnwkgzwGbJLaaCbXHKos9txeRWBW",
  "key38": "5sbpmfSry21BpwMFTDVPqjrp9BwFWbm9jbNwjMSPdMJSvqrSxeLsqqY5iwqPT59j8Pj5yS4voiKD8yLC2jsrpCDH",
  "key39": "26ZJLc1MdM7SfmoK5Xyzx4hVcsrgkcxFkbdkZ6pE97CNd1LZawx4LKRK6roydJdDKeECxNE6GtAXorudxLitp779",
  "key40": "3VGgqJbJkMLpjhcopTjrusGjTUxUBnw7C4eAdD5uEqkzbw6Z9yLsZZwwngmyGYqsDJjQdPP2LoiXepJXk4bCFKed",
  "key41": "5CWstBhLU5w7CHzBkv7RQs114XfV9wuSxFQXYpe5oQP42e5TXWXWzwkeRTuv2qM4hZVeDePuUpntnLHmWTQeP1iE",
  "key42": "czLcCaQQeWyqCSdDsMAHvJnBy8fVGRP6a9zKUigJxVAYQiGsrTdi53tKFFHNTgx8wEB4fQz8CooKfGdk4cMByYS",
  "key43": "419qpfeRJ9a13zoUrofMjHssUhD15qeGA6F9VL1vhPxR35mF9yM3TCB8WyvT9WUWUSVm45FaU55GmK3pWnHqyj1B",
  "key44": "432nmqKzdWoEPc1xbxF2JM9XcSAtWRYnmQXS247SUWcFcbncUYuxPZeMjdoB29PvSp3rxa7xxsFLv3pqeyeAMGdD",
  "key45": "5Qg7R1yuXXrk5pa6E1NhEHHiqLqPWHgYhzhxJHJ8zmX2McBc2SQzAFQ3beptQLGB7p4zDcYnGkbGqDd3tzDwrggp"
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
