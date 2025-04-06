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
    "XSBbwBF2iWJougHjPKq8RNjFfeE9inKjH9yWEuzknRcVvFRYssVy5V4NmDcr9mh1aNzNSwKMip4zCcErKuW1HLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L8zJdPiDnCsdv6Er44usug3X6bSuPqys34Deb79Aoaq2quLrxDzyyTsqeS165aeethvYnHBN7P6nK8pcCXaCvZe",
  "key1": "2TE88GxVUgm3TzpR2oNt5bHTtFTALAYB4jTFPhVLnPmDZXoyChnjMwqWFdXj5m12iJkmH3rmMYPGpkT3WfZ6RrCU",
  "key2": "4a3Dsqhootzg5W1EVkBVQet72dF9SkNFw97ofQUNcx8MfP26ikfM1gp2cNin9PBpCC5GS8YAdAbEyebjZPbqZ5DR",
  "key3": "27eHhQ3hnv38ZQR7ZuZoanJhds5TKQgiDAjZFwyr2Tx7BGrH3nj9xwgQK2zZRCdU6Pk8sVgeFciwPXF4SoDHxLM5",
  "key4": "5Na3ETP4VYRcaC5sqv7v8fjhhYE3Wn4EKM177mPv5uFeAiXiW9BKqNjA6ndrqgc1Xx4cs3u4DpJ67irMQf8bfemk",
  "key5": "56pBj2CEQC6XktBSJhPi6vj47DyKtnfsdhoAd9LrwqLQgpezJUEenkdAsHBdh9rxoAKzB17ar1hMefAcW2Ywe7Ze",
  "key6": "2RMW7nxjpyME1SiQj4gED3i5VArm8D3ecoK31qowPuScoj1wN31GfNeNUfFYoQn88eQWjKSf91Xzuz89fFjMPDie",
  "key7": "8LejE4Y71kt2RkCjAfbUJ8iK3rHVQY9YY5daPQ45JkPWheengBoMvBgWcTsux8XJPhFBLowhHUaNr9xNhCCQwuW",
  "key8": "5AUdxu9SGhRB5USz4YzzEDFMdS9WixTqMPZjM8mmVnscc8mviwBEe4q9BdsSFDhnhZrPCAZQeCxsr9KFpKTQkiYi",
  "key9": "JaWLxSzzH8FfdM2ttmfZwPwSRvyUUDJyyB6P4uQzJeZcb8QZdxmS4PZLiruKUDhTmV7S6RqbpcrdbFw5p2eWyWF",
  "key10": "4tHXHhT6NJhsJwxy1RK2HtMMVmxJF7Tf5Ez8PBQUhH6F7M23ji9WLn2zwkdz8NZSQS8ayDRAucgCUKgthvsANAVY",
  "key11": "M11gmKac8ZtC2o6HbzsxZdqWZdX7L3zdRzG41NxX9gF3mFYdVPobBuWBBXrbJ1p7B34E3wHi257ppqCbL4aUYLm",
  "key12": "2Wq3fGLvJpvSkzbwAtvX74hvJwUwxLQoGJGToyWZtKrBC5qxWoej5KKif92Gg1n7R2zHpxMoYxEkbsCzqdwvR99g",
  "key13": "5ANB1KfTsrSx6jWbhim5CDwxTXAPiJgjuxjcDs1s7pe8VjKv4ChtDGVSzs58rfAz8RB8ro7CkMZyTTwy3oB3dD3i",
  "key14": "296c15EVXzFgfFBagcdnWS7YggxfsCPcXuJyMtv3WTPKm7tQuF5Azu31DZfxWULQHntBFwtsKD8gCGr2QAXnDzjL",
  "key15": "tmcYUtH6vEEhcLv88oW2zwg1UR1MPSkqwwnE76UKcas98rCUh4eLxvFETJwN6rhanMcfnU4HMJ257vXFjCR6Ng3",
  "key16": "4GppojdjZd1tMFZ9WSRVyecgucXvux4id5yKUEnHw8wcFwa7WMGFoyN8L7ojVp9MfeevkFt6RqAgB1z4EtArgaxP",
  "key17": "63Z7Ktjrb42tSbWTrQxMnxzNVwn1JPzMZ9EXbxjhBWN6qnPftD2ZjDz1T8gp9gpdV3fV4mRWMnBWCtLqY8VqjS8a",
  "key18": "5XC7R67XD3yA6QQFuKttCtruKPfyamCKB93LU98Q64VanJVDr37b4tonULQHyVSdWLJ7LfEjYCLsbaivVAydXA5U",
  "key19": "3ziYbfrqhkJrC1JxGFSqW1MeTGwyzSji8EJaMXiSfpRUxxd71F2M2KxtxcpLTZZqU1umCBSxZmR6FvMwHYKZXQJM",
  "key20": "wJNaWP5Ztiia6FmnRrduf7YsBsDgn3Z1E93t9DSX4tL9EwsYUfHzWMUzrCkNmF2MUo4rkUGFduD6ajmMGjTuiag",
  "key21": "rV9PkBZ89MKMgsbx9PcmmJrZbR4xaPM4KhP6jGS7aohAXazhpCfhCgyX72LHs7zaJEz7WdoJfswVwaAAg9E11M9",
  "key22": "4gGArjcykX57HJ61AQCN4C8sT5mqw9TFMHMoY6NLqyu5r25YahEASCQUoRZWTVPBdKoFaBPnmZq5Rdb3qMRuk6LX",
  "key23": "38zSGfNwofWXUuPVpwTTirySEdCwnojwMUFU13GEX1yBS7LGUFrJGWzDeZZwBh5x1QLDaTxTQB9HjZafvMhUCnUy",
  "key24": "QhEwRwfQHb9UWPkyqETDXz7MTSFHS95iK2o9d5a5jeKFttf8oXFufDknZKcSm7rgtRhxo5BBGArhiGGw2zoAcba",
  "key25": "2vXT3Evu8KnrHTiSEr9qa6iVyVrx3B2B2byrXZahjM3KzCogZvqhuXeevpM9XNtCu8aCjupzRErxFPVgswMsKj5V",
  "key26": "4ZUaTk7Wg4ENoiETU4c7uEWicHuAcyG4GFeaVkYA6qiY6k67QYWP2hfvTtt1zK8Unwt8bLAks9F4Ju1RFJQ7X9Za",
  "key27": "65p9J3SqdgdwkvBQ4j5YtpgHD3AJzz9YjQRZcVS9PEKMp9dQ7ZNGAa8FKdxUttwA7F4XKFYQBSraXwZmTSkjZ6yq",
  "key28": "5q4uS3EDNf4Fm94aKajAgeUYUUXwTy7U5HExLM87tSeqtgmBHioMiw5ShhqmvWZev9AnUPPrktBuDYhPYKpn4JKa",
  "key29": "484tjhLYc894FpbTjqtgD6LWQbAuUcVDzyahvTVQdPUoroDUNng6WDLSrbKca9A5GFoUy8WxZ7aJbbbzWTCuPQ69",
  "key30": "domyamq3dZa32iP9BhgbyHFEdbbqk1riyxBqRfBsbbf5B6zCd2bwcDgd7Xqr62kU5YXWZqRkSxUcWsUTV8bwJ3o",
  "key31": "4XMpxpeqm1YCj69o3stafUGxL6WDNMhv5R7288HVWGBLFvsXm86DSwsRhTqRSKAP66JoDoiB2VkfVXNEYULFv4Rn",
  "key32": "663rDntNzrsGsEnKjyffbD2Hgr42FMMtZi4v22vcNfXZKmbda1GSnPVLQ1r2FADuhd2qPgd6uKjvLjZNEvj4nbe7",
  "key33": "51Z7F6SoE8cinxMxepec5ThY3cwktPGgWrpXF4TeNuqQXob4DsF9f6kEkZUSYd1AAFQJDUwkeueNpp9Jj1vdLhHj",
  "key34": "5BraobvtSQnQxbpfKCVPxqbghRTaVQwsaxMmYbucCXS4Tc2vVsFwhysuihVgqU4Wch9ZYi1Qhj2AxVgNCsR5gDHh",
  "key35": "tSaVS8dvirhhFYgTfbixeW5BGExg8MFbp2JN1LM18UwbQnDh9ziwoUHTYHUPj9BNyJU3RmAExhPJzqaGJEhnzER",
  "key36": "umLNe1YqCVaJCE6FZXS3DQuPdyrSWnVWp8xoURZq3wecTPwS596yTQejrbqM23RJvUPWqX4Fh2cwPNnS1birzvg",
  "key37": "56qu2bC2zbEE6yDrHmPLDBk5e9zoteKdBPcR4Yq4U1mhUHF4PoLLrptt6PYENQ3FGMf78JAdrbYHh6ikZJxC8nrv",
  "key38": "LGNc87HbyhYb1RYVtcPKPWSxDe552jTAp4cdcnj5K2pmMP43ruy5TibgcVjPRBooJ8vV2vBDGmkMYVKhoseU22Z",
  "key39": "3rHx1pQWoyWX5MX3W5j2zt8SiK6bcrc3mrjmXZ6FytjGqEonkRKfhSGLdN2qhgqkqjAMHJzPRcnW5nkigLiKiZgu",
  "key40": "5Eg8poSTxaAT67gbpgQPsjCgwRCe5DjZW8ThyPDDcL4FhUxs2bnNzXKjg2sfGyRRFwdtPXUh1Gb14D94ntmGQBjh",
  "key41": "43kj6HuatdTJzkXfN5qtJmB2DLwLgrrpksnHJFmcLu8kTY1QKfHyRo3oVFer64MiJEiiiSEddVS9tkjsRwCNSTTC",
  "key42": "5bHR1kUcMzUXExGjww4pgUqCxpWTU9rhXtDUwEh525YSfnBpWzTpjjh2Uk3Pi2v7kdAtb9AosqFkADNcSG63BLp8"
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
