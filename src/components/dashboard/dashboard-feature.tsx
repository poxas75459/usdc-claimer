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
    "3hxswzRpE3VSUQgDkijG57P56CWBnUXcqE9sQJboa1Aaxs8TT9jytj6Sw7to8xTg1xopAeRPMUBKniT9G8V2wMPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tGQiBAczTYocnrb8Novj5Z3ntrFy48bD827Vg3sZMBCv3AzpXypgdgN23WJRWP11BfA97HDzcdavBGRVxVT4BzH",
  "key1": "58Jd5EpoPaigHN98ajmqSdVMMMp4mXPNtonc5LRYeWLFecKoXQeNLKN65pe1FVvnjqWbEFFXKLts7bEwhpRSWB7f",
  "key2": "2HxeE8AZoEHMHowameSY7PQPREWFhvWU3vFLK4H9E36bNsTtpxZfrqVXEr52PZiKrE49G1wgAt9KgeA3vix9sjnD",
  "key3": "35ArrEHVELvpvn7vq4ji4GVKowviYbrXdGj52j3un9zExjbz8k7b43dFWqU5igdp4NFucYpbfjmFSURgkhWXUJDh",
  "key4": "4a7yiBq6fGwshAkYe47MtkF72PV6P14H6suV2QH1KB3XpxjasDs8eMowCiNUd1y9hGRcpsAarqxjo2gndc23m4iK",
  "key5": "3Mo4WjgCrSHWvq6Mwci2ni8byoGGt1fsZ5y1Z4AEMmmnjaCns7icNxyQjprA1y6vPDQPAamNh6FsH6gtyUCZSi6",
  "key6": "2FqjKDq5JsASiTMEqhaMcyPn9vHiwkCj1orE5YVH145hpM4efimHwjtPQQPfUFrFLKigKUwc1Tu5ZKaXtCf9TG31",
  "key7": "o7H2TfBQaTGeyAc2kAeZxHJFKN9MVQeiyV9Zp8R29hiY6UwPTM5eByg3CTrn3VkXZxNPwneSNZ9JwscD6BvKi3B",
  "key8": "2vK5yKcaJrmPf3FFMxyJd8QDuMLBHoLQPiUPm2FR7uhZ7CeTRvMEakKDGHMY9g8zRLDAsAbmaj8TNsNbAqGzLADj",
  "key9": "E6Lp9K4cgekqhGuqPQxn6J4GsJyp66kecP9R96Wwc5qjFBrYMsA8aWBb2qYRpf2gfEBV7YHLdoYsKuQSbk33B1U",
  "key10": "5HGZDZZ6WKGagKTjNtsWJwMPnDpBJw4hYRwyTnShev2TEJEEK6dNfYQc3mXFvNbzyhNYxTofyQCEPLLgpq7KJmUs",
  "key11": "2seyjALGopoa4ofKKHGnSktAxRq3DAVypM5ThfNTiVDffb7te6DGox5M4hhJdiNnWXLt8SMHHMHfFEnuD7e6UZ9B",
  "key12": "4K45fojbi83doBXRdKgE19F9QUX8MZgkqHqjaspYF4kgqjBQQAwxPUNH3CvhrFsoQV3W1hMDYJP68tgY3M5uzXXh",
  "key13": "h6tDWbbuaMZhUC3p9fULZMEAisN9bdKVqwwZJC7gvPsRzp4YsSjRmjyJ9bWtChf2VdnkT9zXitwvUyvGDdLNH6P",
  "key14": "5HQMoeKhY2Jy2ErYUabn64XQdvDHt6wiAzfPNkR95k8MiJRXs3XKpNmBzMJCyj4xaNVmETuxiRea6AxeQzEqKWyQ",
  "key15": "AipRXf2SBYUyRqekJWzEUcC7KAmhx5ZdgBUkP6UMbTxFgPbBfbyWDeRPBqvxgUNNNH3cHi2mMeLNTDWrRXL6vyx",
  "key16": "3296Z8t8x9e6KfmyTnmaDiJAtbUgDMm55iNs8agAANdu6Vp3zjFBdn33vfb1ZejsuRCaK8sBL5X3cFaHHwWBqVPm",
  "key17": "2nqtTgkMyNzk27e17EYKxrFdsuXdUWekwwD1w2KUKqebym7Rkuk93uE1EhYVYLAL2Vp4rDfttpi477j2nbVtF12C",
  "key18": "2yrYX55yZB4vHerC6RR8bGGBk3xGcRwJ19vgyhcPaQwrQqfNMsWBSWtTx4KKYC7zFsyGCYsf3sjEp4aR9Yx29h5H",
  "key19": "2isyd4LjbVb96GVfHqNYocReorHjHEqWyXQisTZHMYYURCiupFHiLDo6cjVWkwQCqrpQtRKogA3sYZM51ZS3eNb1",
  "key20": "2udkF22LrzV55H9iCbqMpHDduvkV1kNv5e6ExtauhzjCXu7XLRsMUn1usYdafsdiCsLg4Q3Uh8iiA85niPT9Tg8L",
  "key21": "3fNTemWNSufotgmSLcMqV3WPGVj1PfDwTgwSG3se7dm8SKHn9obEErddN4dwzPvZi9J3dAGwhLeTe8VhGdXjq1xq",
  "key22": "5vsQ4w5RRAt5YFyugWoFogAKCfHLLAJXqGvpWjNxZATVpwsSsnG4wdotMyJ8E1kJvKQoFLFKJCYw1mUsTpd6T3vm",
  "key23": "jz9GUrTQnp4udFt6GJAkfgng1EH4RFN4v6om7qs9UU6Nn1LBjLxczay7t1Cq6GK64knEyEyGMRUvTaLXSToAbZn",
  "key24": "4h8aAEQsCvz1pUVpQbV4YmA41RdS2EG9ayJvTqRdF7SK1f1ZxaERvNQomi615UQZXnaqhAWPZABLLRLdeFWB8Q8n",
  "key25": "5zM36CtzatdV4VC17mceb8p7PUda45P4gTo4bahG61CeE94skrRqJCgWaoGrXw7qMFB24CcZNRhsge8dbdEyBdrA",
  "key26": "3hWMpRFnd7s34yRzk9DwpntUmJ5K7rQiAxoCJYbkswCqSDa1GVtJ4BmwBYLftaZf96sJf9hehJLPjSH64ZQ7WVdk",
  "key27": "2Z8xd8X2BSUP4whPvN3cCVMWwwRbvTAoDcaiubnH6c9NTMCfgb9995wFy2c7fEDWpkfXcNFjkqpU1sNCSXXCyD96",
  "key28": "2iAMJK7qX3WXRZH6JjTKVopLjmStSjeQ4NkzXyx1WgQA9SVEvudMcaJL39EyiEc41cLkCymTgPFdVomGFG4GE7EA",
  "key29": "4zeF3c9Ck1HM4jNnjJpZBTkeQAz1Cs7cysUNW3ZhHkh1vrS7LX8hpfSdxkJrtrwrYr7bMDtnDyEcuspcezHVwnE9",
  "key30": "2MxyVqN8KrvfEstBL5Cbf9R2YudahK1JXTofBzSNWyDcWKn35MGBp4dNUbDs9hxmA3BmvY8oSpmsS1ri8kWLooQ1",
  "key31": "hjt3r89U9eJD4PDUt2dcrYnZ3QA8p6abkFJgP5feEVA1H1uLJLfsdoYWvt8bJHeEV477go2hZEWXPeck4VwwJcC",
  "key32": "5aP7uLFeJan7sULgkSuduNiE98n8jSqqM7QNmKSX4Gtd5h4x7GUKg37yQ72wUeSTfyHqsmSroHZBsQQiSQrD9of1",
  "key33": "3LzwuULJzT1XskLGK8da2G4sArht475pt7X25TK2gg6s3D5VaZpAGTh4JLN5NBAzR69UnPUxi8RNfPgevAgp24br",
  "key34": "34v9q2PwaCtjeSPJJbdsrfyBeEKrfv9cR1sGMGm7FpkYtXFafNo2AE1XyjkVP2etVo1BvzhFAvbqA5Wyxv26LcFA",
  "key35": "44RrzCp8gjCSPRC9HwLADTHxfw16h34NLa2hMTUsjnprx3koFiiQcSdh12fcEsWRnTDfXucHZLmHRsjRbXkYSp7V",
  "key36": "qTYsXLxiSSELRYeRuUcnmwSqoH683xmdUcdho6334UYb9z57R6ibCAjee3qTFQCefymZa7ezShVRVah1TfQmWRi",
  "key37": "3k77Eyf2iHisbSYYKhPGw5RecPNHX43mr1diAqQbqCKVCnad2Rrx9KJ3cvSXXCfZZt8QPR5RLaDN28P5gJq1dgv3",
  "key38": "4pGFdyB6QHefiJqVJrcJrDRTgVYa4xRxUpM7eU97XZ5T5qHMxG8p5he6vm7YzFL8Fp3APZKx9Pj9tAdkGSMiMn4g",
  "key39": "5TzmRiCk7qEGCvgGs9rnsy4w8y6978qr6YRC6Xa4tLUym3WyX8FRDeRVFcHXu2rHGLCvrQvnczYDcbBVzaMSBejy",
  "key40": "49JrE2kQj2hYTNoLgV4tsXAUcFYoyVGYUzWboaVrBNy8JcbyJnmj8qiQjZ7RAbNAcYkJx9nDHrXggpPq9axNg1eK",
  "key41": "3UbpZ7HEjX36vJzEE8Bogcgfthox7aTTMtiExd6jZLe7ytKegAC1ByPKxLoxjqWijBUpNSf6dwoJzKXwMZQPVCWj",
  "key42": "62jTXDs35cbRTNiiqoAEwNPkq7L9jcGqghEAN2w5xbSHZnyzphYqdhbrahfLYUhqxx4ytRLWFo91USsWnV9hAzwm",
  "key43": "3SRNEw6Gpizq6vqZfWE8nYB4L9YiFhhXzViKptpmE8FY9GX6UK4u6A4aC17n8Rx1ZhMwxdhjwNq72KgWf7j2EHfc"
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
