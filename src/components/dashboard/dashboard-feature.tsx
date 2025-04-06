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
    "5QV38PH9S3xjJCafBMq1NwRdSZUUsViAmpe9MEsK6VBpCJLJQWjhgCM7D4ogJoSJFaypKqLbuQaUwkMbZMAYyNiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RC6wfxXqZwh2mwyxQM3vpB9KVMGBayLU79C1yv8xFxufdrc6M1Qm9m48pftTPKVsRgbRwR4LGW4SQp47A7o9uvV",
  "key1": "4tSex7CjN8vVtYiRPNJbAdPHTyvVkGMqLRXfdni4mnHHdy9X31LoLvY385SegasTNpSytbQ2GYdUZZm5hUVWyMVf",
  "key2": "3Knj4p3USxeRLDgCf3U1SfSWrK4gq8V3nXjiw7Wst2EzP3BLSZGw2czWuJrmRuGcdn8bYPFWQKEFTHLAvEaYrQCA",
  "key3": "kVXAnsJV4tGRQzpEkc6hTHYM2vN66cwtZKfsEaRWAqMuRujkhpjJeT58SeE72YVnNdnrqpg8ytyQiUaoUddrNWQ",
  "key4": "455KvrhfeMWBdZvHZyGtdWodzppTgVoyv7NnSL8U3y9BHw9jLccHwfSGKZ3Fi2HcGj8x2k6h4ujmcUu3MmtAg8S8",
  "key5": "4SXx9RD3k2moYQ5ELq6J4HutcEPkzmy4j3j6SFNvmGksngRThGGUHNELXffwNTbj4bM3Y6ikZgw82Des9fYENTEs",
  "key6": "4Ky5xKLDi8axXGTXyUcxgNsnaRSs6Mh8r1qWgbhuFS9dbc7zsiHt3hNF4huueGaz27W3zmfmm59BG3JkbBpKR7u4",
  "key7": "fGqef32ruQ7sLKCPakY2BaPCe7324gN4fjB89X2fPMaozG2rievMehnGY7QHnuVygpRiMsp1yKDRaPkA4FYRX9Z",
  "key8": "UKabxdrsrsPmmbQQkuz8nwXF1C4gyj8E51Sp9vQr1wd9YtyS4GgSKtgynCGSkcNwQS2gr8bQvmgx3LBV55oXHXd",
  "key9": "5QZxy2XmTHzyLXMKTkUe2UUBBemgNeBkkX2UELGfrEovoSr1jqASKVZCyNBa1m78yEGmRsv6NxnW3W5TXdBQADyt",
  "key10": "2737qA8txuRDd6VqxxnSumHJVBB4SMQ27gvdYpwCfuFn8R3xt36ywxzsKurCqR75WQTL2tXno9QAo7NwHxchmGoJ",
  "key11": "rnQBryJ92HGEEuWUFj87LzheQCVqG4J9vayqzGDhHmFgmnr1UGGjMBuyPMsP4LsXPj2VDvb1BdnHTmN5NAcGkDf",
  "key12": "3EGUY48rErqjtoCK6CdFW5YUrmnYaLtWPvbKuEQSmbShH7pfCgjBt3i8PdEFJZTxkQrA2wCZsYSsrfXHpmt2eTro",
  "key13": "3Px6AXVKtBhY5B6QJBf99NEtADsrHmxfsxHJoF7V4rzHjPSeNvtU47oxgzkS3bMLhFKLGA7QbCoBfcmjJ7LiWrRq",
  "key14": "2cMHjGq4G6266XKycWXgmwCDGbt3D6butegHbPKvoDycwL6D42hdiq9yNAonpCTQzgHHjaJgspB864nm9aSsL2j",
  "key15": "2Dft85uV8hREptaoeLoeivt7eriNk1jGxpGrSidnBmtb9xfXE1jfM1QPi1t9ZsEvmeMQ9GPy3RX5cb7S2CNa8rMU",
  "key16": "e3XAW8A2EYHnHvzdT4gFpYQqs1uHY9BegovtKRA9VNwnRMEBNYEoWwvTasWKD1ucE3WE6w8F56qaJBMdfvySBVw",
  "key17": "2cUzcgqZiyr6oG7z4cUo9aJk51BtZMbQ49Mv8LFtrktNQavv7yE9EzcnYMyhpnWEP5Vt3ouhrpA1UNhoX2GYiddT",
  "key18": "4ebbhnefLARoHn8sRGEpTM5WRxutJMGcBMx2TCQRmhSig7wCYuEutzb5kgDh5qyXo9gRqvp3eWjaiahPxiDoz8LH",
  "key19": "5113rqCqAuVTwNrQmgcUFgEkxoVNMa6ecdwHetBjnAi1RzmzPmBDEsjsQmtAj8tkZooUSFSk8oEV7JMQxCcrVXN8",
  "key20": "5GQDdFc3hAMwN7kFnijrtXzDSm9GEu6K2WC8jt4PuTRFZEqab9Cvf9M6E96bBKwhpHVRNKYdSZFtWJ74tJe8htfN",
  "key21": "2sn4EnrMmuRqkEVWd5JrusHLpQunb7fqE3hfSC3Gh1hG5cfoBAYQsUges8c7RL37vwTkMmARjTsRA8eF8jb18FQH",
  "key22": "2Ct46XChftuVkzqVahRKfgfaW1u7uaF5SyunzAtjUs8kGCLcgjHeWkS8dEYiKKsy5TDzuW9nUAyqHbA7jA8qJzCW",
  "key23": "49SDtKEJxjHCULckDEMcB2EF8wa5e6hV4c4MPsUv5rRiAh6uFy2iZ4EGgurG7DT4vC3RDKPo7F4iVdh2upudf7Y9",
  "key24": "SinHtqHPYNZewU6NgwP9SmoG9Nt4LPBpfJVubtBXuaoK5JXmP5RPeo2bzj4qyiBqoeTZJr6MAvPRY5C8SKV92Vr",
  "key25": "PzvELCxypsA1wVRZQgLiuioBotbTqoAqmxBQoyCSoDo7TyEFaopYc3e2smbh5nMvJ94gTDxz6joFHy7NRSFcxMw",
  "key26": "4yXPY3sPZ14FeAgkyEaUmFpr2VQjxWxGBX6ohwxGm1SMGLuz8oqWucXGrgp3ccFHkAZB2DF9ZkDD15TNiEjtLZje",
  "key27": "2PaxN8NiHJ1L4stx27HMTcjw5ihU3ngHxTM84SZq8j2RWCzaAfWN9GoFryq3s2S1sitc7GbA79DY1h2xP25v2kcW",
  "key28": "VDTjKT17NNdBR48jHAbdTTYqhU3i2PH6Uk6teYKJvThRxHcj1sn6dGRP2jRmPNRDMbH9oDf3r6FGwFD6zpRRceY",
  "key29": "5a7ZFfCYmSo1JEy6tcveuJ5YksswNEwBQ7aFAVropaSvhhpZA4DM3uVszdaDr8BtpNYDj5Uf5kVoVGizx5qpsfGm",
  "key30": "4destBU1HKYY7pJzFwAoVPhvnLCnr9jXcKqm1HwNHHNu14RNMsmNHzCJ1hMJW6QdBwFc3YhZ5Q2CS7qGTUqKPDrv",
  "key31": "4KqWNszz9idVU6sbcyqg4SoyVHKoswSVzv2N6f9ArooXsQ7VEfdUCEu4Hxv7YuhzSG3C4HLUit2Vv1E14RwReiRv",
  "key32": "b2cj7wPfsWj2wD47sJXbYQaLqCqPSXFNYYFnTGw5WQ3qSvCtgEQg955HTuYvZnTQvpJYvMjJQZcLBGmMxBdmMur",
  "key33": "5z2tu64TCV4SRKpSC7h5QkyGvpkf3gPc8YWRPz5BDZQoSA3yrc3SqXfzGLmvcTHsw9X4C3GD93veMnSD3g6u8ywj",
  "key34": "28tu4CCJsy2n7c4gaqVPEFMduL7KNuULWgCjz7zydy96DMZWzQY2ag7D5jqBdScuoradvqfoPZZRkZfnC74FohdQ",
  "key35": "61wsNS5HNYziM1FrXxhXq2FNeNdGr3QdVEySM5P9jhLkwpXb9rU2Ch1BHo7KkZ5QuXBRwV1Whuo9Jg3T42PW9HwY",
  "key36": "654zE1hg4fGjVJSGeY58GxGRHHFKyEzyNPgLWdkKVfrrqrCixJo4Jm4vcMn9dLvoZPfHjUSoMxWrQEEhKPfaif6e",
  "key37": "3PDLyUVdgjohiNR9kpdfgUHgFozdcwCwB935WCvQ8zYhqKMxqsR9qouKQEDjz9Y7MAj93eJXB24RWMhMNQ9y2dZ3",
  "key38": "4uZVyprEdGXo1ndjLKy2ocfdgDorJ1s9U12TxwJcyzrrYJejnm9FNXRn6GWy8GXnVPiDHAUM9fnaNSCdcMYKQRJH",
  "key39": "5mRvwjxc3KmrssmtdbPy77haKWUH179HffSRn6ZWbF2L3e9P6rV3ie3k4qfmt8N6vCjVDJgvHhKSxUxFomLUtx6j",
  "key40": "4W3fuuBQ1s5evppYPyicJLvcEKKHHfphGUQY5YDuwPGS8cZziSdTiZuwyRNkUKhm1q8dYwP1TDYDTWyhgtwDTnew",
  "key41": "Ecwm954ZZ7WFM4ZYyJhCoD4u14GTMRTakEYGc6ik4n1qAo92emrVeRjTQazo9dTktmoFxDM5SN66Ho7WYLFaWX3",
  "key42": "4UmeF8tdprPoR7urbzNA1NDeARqumQ3aMBpAieYuVP8xSFym7QwdujGCydsQQZGzXjNLoEUN5B6mzQoh7fQRzcvT",
  "key43": "2vLsKNAfBN9PdWB9wPHLS7o5EEvbxmKpwuXsjwrqX3CmdUf4yW8omiq3oViubcSPD6kMbnTJD7eQ7HFEyqxMbPAD",
  "key44": "34JxEwnFX5bnFQvdEqwAf6Vif79mED5f9ZbGhvLnxby4JaxELMURipHtVFFr3p2aTDrA7avEDwJWgRFhXb1RYzyS",
  "key45": "2RhS545xdUnebAXpHSW5bipBmcbNRnVKCYx8Py3KbXbaMo9fmFxnUHsdvAhFkr1Va29KCxwTV61TxeKK2fJZi86j"
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
