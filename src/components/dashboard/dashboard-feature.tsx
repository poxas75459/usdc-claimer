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
    "AQTvQySdVEAYEMSsBzrWF1YsXCHW1Hjr4Dmj6Ecj5UjSWxkHpMKvyyDmZ3Ysz7emKUXw6f9aGJsTEURBTRyU8Ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61HSYSMquFJNuzX8jj6YskBPi6o7WstCHAuji6Cxqhq36qFLtBTPh2H4SZNGXf7kqMkLHSaL7nfDWUhXWZxvV3wv",
  "key1": "4wGoLMGccDgnS7bGEiowY7PnvHmbFLPEVxRDcmvT3WZXkckFRWiWF9VRPr3MvJuge8Jufp1YpEZyR7wW5ZwtbxTM",
  "key2": "4xLKQffLVWSHXZ4qHUXjvvj3cdZY5yFEzV1g9rXCsAEBKnsrUsE3c8nEj6sEUth1y8nA6xtYjqQb9rrNFysqres3",
  "key3": "2gMk5QPLjgnHS4agbt1Km9R6QoovausNB624FZf5PxKVegsuABMMPuTJ6mXc4F9TRZP3kPjUYMv5wucQBMVJqRta",
  "key4": "2emKCAFW5nmH9SSkRX9R2xXUxfchTF2qvjDuccxoMdV54WapYs2NPcQ5MKsZDvpU4tD9jULMnd51r36VsvwY4omX",
  "key5": "C4R6DVPUNUXfyix7twtFAB3Ww3d2ksnE81B1SMB6W9pMuDCjz4fJ6gjg8TTgVc1kYfJXujpMD5zjafMaRtB4jDU",
  "key6": "sddBKVfvpDV4Q8m2FjctCYzVWzoXUPozWXj5ojM3wZZ4Pa2QLEo8dqoDF3GpBjrCtvSqUfkS1WJt5kBdQqmsCD8",
  "key7": "2dcdrKibpaRnWJ5ZpRNFhNLaktwcV6Dks3P15VRkjJZR1aJmJ2GkMRMoVKAGmJmZ7bgrS6411JA8CGm2C4wvUUfJ",
  "key8": "5jJsfLtpd6sYS2MWeBMcmJUJNpEVCZKUuWW8ZSwE9L3Q1pxWfDK1m37FC9xdmmsQdXQy6YjcAZHLKGmLgUSRaCPk",
  "key9": "gqHtfi28iLk8ABGtSTaxXEBDrofyFZRNT5Xp5HFJ8qrnDzyMDoDMjxZ6yQMDdhur2YLfjN2bfYzAUNewyc3N5Sb",
  "key10": "muN75ppkxFJM7Dezci1jQVwAGVmVvqGaxVA2ayBukbHe51azTHGRznCntoVCLm4DNhke7EKZkqQrGWkJy6DN41E",
  "key11": "38bVG3XKF2xWeQE2AxMDmagBrjHksyKucm9Ufj9q7zydDNDXyFAbnv1xEeTmYdSM4gs5fvJ1fDTUi8pJPVCLmVPz",
  "key12": "2NCHpcRRcTXNTfNYKBmuAPqNA1yntNVwk4FNA675M53evhNZTS3HPNstL7mz2tT8UvBJ692yuPg8GTpknhzCp6JA",
  "key13": "4whLUhiJvsRg1JbUYcYtiVGSh4PAH9eRqaykrFqBkiWtz3p61ToEEiia6a7FxnhCD897BzGfUfJU2wgJ7CETbVEY",
  "key14": "2c7UbgWKG5xuF9oBt4hAugCw5XSdMrYH8EDf9Kf1N2UnhGVrBf5mci4iCHvmtMhFZJsdyWC65GQTaStttNAbUnrQ",
  "key15": "5x2rJAqrdqCdCtQqDuGEcj3HTPv7V9ZjekqPUEGNvbKPh1cyj4nG9UFrRaGJu6Mp3cMBKXDZwGHB8wvbcJ245pBj",
  "key16": "3LuQh1p5YSJJL1E3BwvHuSXs8V1Xpz4ZzAAJ9ZRf6vzgre7CtHGPJW93LpnELNbE6ECZKft5SmU8SJiFv5ySrhmT",
  "key17": "WvkG26mkMYXz2gGGnJvEdhMcn8qKesPm55qpUek8rDB3pszkRxLL5vKAnQhu1mYZJYNaNfQ2cfWFYF2W46QfcHa",
  "key18": "2eQ6ciJ6idQfjjbuxXR1suW8fVvFP2NnU5EkNkbFBcc3Lvxwffm7hSyZnE6YiqB9osVzHDRBstr8gCPNnTyRESHR",
  "key19": "5RCdQfExoznYfqqqNmM8aavYUqVvN5y4Qj8LCinDsgERRMhSHruSxGQEHvpqQrYsmtWHebw3UXK32xRWnit5je5r",
  "key20": "4YRmf6HEneG1Vr8rzHGJT7PUXCw9faWQSo8TB1CG7kkj1tMbAkRf8d6asRxy6qfMPTPSD7y8JNQHVfAuA1H2kAR",
  "key21": "2M98xrwWYuPsd6JJqEKBDX3iiR1kLdbGW17wZBqxtbMAGT3MSGeDMoHbHoLDkJeaaPb9Fzo4EP7D3wpe1PYd3LLE",
  "key22": "3Dr64aYZEEuM2UGGc75ADbABvU8uuQk8yc89teJeZNLWqPB4m4kL6d8GkTtUXtT5eRvmHa4oxE56mzEJXPso1gYc",
  "key23": "2Sy6xiPot66zbxbav6NzKVScAUq4xV4ZB5NKabtzqAWSbYR56SV2GgVDqHW47TMwB8PNvA8f54r5Fd9ZD5GawPPx",
  "key24": "5iWWJfPtsg6FVNnBwdGp3uWfdrRJaQ2msCd9iKpptn9MTSDqtcN2gdQdGcNyH8t76G4Vn5JSNzGRVg4P61NRU4B8",
  "key25": "2FRLC8wKuhZaFdEPFa1DYoGBDSA33NwB4qe3VyhXeaVo6a32cvXPCZBqr5vHoKiRejKvZyMgVuEDNvJh37J8sqG6",
  "key26": "5h9dyVmaHRDFUcwF7h92dbWMoguhZSLHomFsWbRHav6MNCZ4KN5qSbp1GeFTec6MrSCCbKZ679V8HhaWtpioHDqF",
  "key27": "3ZZJpMyPAe7bu1FHRLxrbfEH3QhRnaovdygfJoAeVLQ5dax4MCgQMzFGdSH6N1qR53QPtokp4ccEsQ98pX24eSer",
  "key28": "3Rtu4ayptrSrjYSnxKbFD7bHiDmiimdz2pSNnDFeAhGwQva6uvsMqMYKzUmzWtJRvMrpCYU4eeqEZa3wYKHRGmfg",
  "key29": "aNrQei819Sf6Xr9Sng3HyyieQJoFtT3f2CqMqV3bHfT797HUknZJ7chhaxZvxLnsLmrDXnaK2SG2x84oWsC58H5",
  "key30": "4SQoznPmSmPREhb2Vkt4xahgP3XmPvYMDXU3d1NudUmbiXYn6FKjwHhyrySuyU7YjvR8BYyXmPS2LA6uHytM5A1n",
  "key31": "3nrTmnYA1GEtWv8WAVgWqLNxjGbiSwVPLJhNJds5oF23KtuhQY5aPJt9m2aEZLTvhpsgBJe7mcZRTTZVhoDKmAa6",
  "key32": "5u49Q4YVdtzmQQxBKR144wJSVUNvnYHVVPR6T98FgsucwQGR8XUzQjd2uw5BhNeuaS5CM2XrF7Fou1ViqTiEDsxQ",
  "key33": "2uNzHMvtR13xLJwpnrQyQQ5DttkRXTkZisx9mgJvcAfUN3BFix1cwya3wX51iV2SHRaCMrgHPmyBdMo1wuuva7yA",
  "key34": "5PcY8to61upPmzzrqXrW3gAWG7iGENhfSEbrQm7CYx9WuDJHmXmYdMgPA4c97kQUSaciRm1Tup6SeWZy9p2Sdzwu",
  "key35": "4Lz7t4VGs6Fy6ArwaqWFHgHCUVGjTb3jWe22UqJr2FjaTuXoRjvn9AfsFtcte9kDU1Ro7rs6b4oEz3boGJuwzk9Z",
  "key36": "3uW4WqcUVg9n859brA8LM8zZLEtqX2FGyXMyXVepT41bvtfPwJmgK6ePERSGhczSVcTAvwMe8BKqJgQt4dEn8Cnn",
  "key37": "4QE1iEKZbFeuR4vsGuHTkvjEwmp1rZjYa4CiY73tktujTUpr9LeRCdiX17FZEnK3j2ft2S3j4DUySs6rmPM9ss28",
  "key38": "X4eJo3AJW5n9FvYc8UGDb8i5SvcGF4ouN7hUjGdCYnwmfdA5NpqCq8SGCHqpMgnbBy2KC5wU15agtUPzUfKGCEc",
  "key39": "4Je3ecUsMWS4BKoAM7ZAm2LVqyitayfH4MDCqZFK5qX7Vr78MzfLWRJjKvGX8hRLbaNo7hi2wHemxyGvJGkQTzsY",
  "key40": "RJjqhN3jtMz7Xc7ZnnukmRfzsn8TGa7fJE4YwiT3yTbxzkfGxCbkjgyUUW24pZ6EQDs5hiit9gWTXNH1QshkqYz",
  "key41": "38SEHdSKxLbEpnsp7KVEsoarAFwq2w1up6thZfu3bwQ2mar9CFowCeR1La9eB3hr19hggYTCT1jK3Zi7qntTgtDH",
  "key42": "3hZHS13FjuGCjkHNsUkSWt6bfjX4NUHhbnxpTkJ398WdBgS6i2rCww3WzLucphEviMGXsgoiPkr7aF744NBJ1Ark",
  "key43": "36D8jmMrqJmnxnvxFdDfeVYu4og17UsKX1Se6n4Bj2bvm9R6V4sFMPzaMV9ZjTT8GuGziTYHjTJPXZHg8XgLGtTM",
  "key44": "3fjhqSaipELc61vJ2SU94Pi3Ja4vWXeR6UK9fNdjDmSeZA1454SMgSeGVSngixNZcKtiUQKRZJiQmmDNUJUwC1NG",
  "key45": "tKuVJSR8GGKChDkkign7cfeJZ5APA6pDCungntGQ1FcMjSVoouNxJoB9pcVTPHdaphC8Vac3iUfwVwL766CFXqU",
  "key46": "bzQNAQ9Cz1v5HpCbcCWixzQ1pegr9RbXd42kjg8yJz9GuWqCaLov7Q6Vw3EQPyabJgimnrAuY1AVUeXM5YkzhzS",
  "key47": "3nrwatUhRzaR8qFfU7itJvbRbtg34rZwJXJEhEwyLRHEk9bHqMW2NjahN647hnFUi4wkVbyvbr4mbq1Bk8wuqCDY",
  "key48": "3479Ce98AZ5jvQZb1XbP1Qax9FFtyoPPoSbfmocYFktej1WvQdBweV6jusawA7uHXzaJFMyVkVcbLcAGD24UwN3Q",
  "key49": "8mMpRFWVTotLpS3zotWJoLZf1DPdZAsG8wkiAxtHYXRmCUoxiQzxZbAMVBfdfYbefEvrk2kXhGeRg9VjDJpfCd2"
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
