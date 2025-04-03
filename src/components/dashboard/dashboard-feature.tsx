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
    "6vGPMZRrP3enrTHMFchgBom4QfULu9X2EWAqBKUpzDdzuLokoJt8JYHKNpGWp9QLxM1yxZpWrhDWtjb2i8cdfwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2joBseDTgbhm6dfVG5L1Xeqo5ivcBDaGXAK4N1SKPZ6YuNcyNAA1wyBv2yds6i9mW8xAHXfphUBu4EadA2ErJtcv",
  "key1": "2rsTxF3FvdArMvpgwcnXEMjByUQUbAbpfi3po21vSfiiMbv1SUxfvUnappGNA67frQdj8JfmWtcJy9D8D8onLFsJ",
  "key2": "2mCQcp4fAAJ8zMBSAr3DUZuMNrVaNrBXe9JwTTHmCPT8p99HSiL19rFTBKCTyGmCLbJ3vwSF3wAXU6BuHFKdJDGL",
  "key3": "uGYF7LR3CPbXKoEoigzGrXYZiFJmRai5UVFAu1xEkMavRHtwREwcVVDmTmPLsaw5EXLvE42DzXqwKYjWAu2M5rb",
  "key4": "3KpyY8nbgNcA5D9zfcuncVhVnVy3khxX8AabhUsFvUpPouCbfjD5NY7shEmPK9xmMY6HXycVYQHFyMCEMkBs5nWk",
  "key5": "2yapetBdtu48qLY6K5f7XWNfUoB76EmZv3ai1mwWHCwAbFESzupnDdas5FswXaT1x2kDRBs5L6rznjVxHbXqBmwj",
  "key6": "5otvTr35DvokKaLPZ3ZtDgVhqZKQq2RNwS2XsvhN6V91mspsQY8vSSJYnKV5RD9LHJXFdApypjgUWG1psN3Duvxc",
  "key7": "6598fxdVN58tGcas359EsbX8GobTB8ng8o4EB2PGXZBcWDypPsJojPeaysiUN9pKr9omMp9uYPBnFptcUJSgq113",
  "key8": "4NGFgggC3P5yCLCEHQQzqrPPifuWbHRGCTeWCQ2ukneppuCiZGzcgBN19omXz7rEcz9gUK154889ohEZbTnDHfTv",
  "key9": "239bE1AarMxiLdhbYq7azrHALJTZB53dxSe9c7ByqPwxYSPUmwzbeUsq5jRMa3qF5aZxZ55w4GZpbXxVXgfVKuQ7",
  "key10": "5cNphzJHxjxLW6GrkbCDWpSuY2GPbv7YA2VsjLRtsvoTvNqpUHSGXC7fMeLrq6eWFhNRLHyyZXTh7prZD7UTyext",
  "key11": "4FoACSQzYp2h59dvDjCDQge6VXwcyNVbjz8Hkyr4w3Cgy1ssBuFnhLRNWNWetj459wXh8pLFwu4cHMN2HXCqiirz",
  "key12": "2nuJwNx4r7jcB1G2hxU9UudEeCRSEYoNaJsKysCoJ6HSXz1y48sw6xcozkMYAgx9B13VZn82YQ3NbB9YupCCqSKo",
  "key13": "2VyqRuok5fkkNsMU8P8URyPSxAbzyHbrdN2NTSwDF1SRLfSJ49SwXFpb9NKV2KziCqNtFK888Y7dDWmMoJ32re8Z",
  "key14": "4t44pUqBtcmYVNKkEKYutZPxthbdBPk6uSr1AmUysSGXMgA4bswDkjY4qCTqSVQJg6kkMqXquXLQukDHDEZ6yk6e",
  "key15": "RJQTWRkgbFdcCpUkZNydXihVkG7cEFYFsCch6MnwBdDaLLWeMXNY1SzZzZS51hy36ZdUbVu6ULLHfpJm3XzUdBZ",
  "key16": "2TViyYg7t8tWSiz2Pt7CQEkyQaps2jG9idxpX3ovWVfTnSQFBErukzjhcEWtfuB1vwu8hZohK2wc2MmyUsqSxcAL",
  "key17": "2MCy3846Wrx3Q1GgitSDf61JhmQLBH2uiU1vm2BqiwVkc4vVHsVb2c79zRqEy7BRpnY3gnkfQpUq1NLSTeUrSubP",
  "key18": "5CyPzoRVarN8AaH7oJQBzz7AFhfLB3PDRmZRTsCHiZYzx8sCBptuJmdsp2GSwa7CYmHhwHZn1AVYKgbTqSpYwkt",
  "key19": "61LgUAvbjTAZQwdHDrRrtMXTawFno8xnp4ZZBMfhz3UDvmiVKhrgisMzkbWdeo82MQNXkNmLN1t3EKxnPyPu6M2v",
  "key20": "VrT7z2E7qh5Fia2zX2a14f3M6V6iLUnXfK5LcbTjvE9yvHBPnaeq9V9cPXTNFQLU57sFLc3xA4f61X2Qm5ryhYf",
  "key21": "66ffB8NzCEvf2Xn8GExH1T7Nct67jpYx9peFRdrrE2w83eTyKUxM9LbmpLqDJXYbEwZrwXz1y1ePE2PLdzSEPS6e",
  "key22": "36XX57aTJ61UjnCAVhbSUKSDgMpjiArnqG2dQMKcEvddyVWPHembMyixAn3M7JMpTYpjG4S4RKeCoPL5aKZkngqp",
  "key23": "HFPaETZxTbuV5iNESKUVPk79vuMxymMeb5RqqeKkqpSVRyPE5xeKYVQxjBwhzqNi99tfBp12s348tgarAF6idTH",
  "key24": "445QaEWckAS2mDm5jSY7HbLowgxG6VZmCnoMpjPFgNYFtPFHqB3Fb66mPtFxVZviTipo3urWCm3P4SV499sXgomB",
  "key25": "4gNaNwqSbTJqguEVZnTk1SDqSDnJvV8jbPhu5345K5GGrnrvyi7q21VecJqi8GyL3fpwNwXx6jGKSx5VnzzN11in",
  "key26": "4j6ZHkEvq9JJUVNUTZqa8dfWmkSiu86b3eiZAtJ4mnrMbhu7ijovua7TqfcrPHN5izqTNXrpKujLdHp8FgV75Yeh",
  "key27": "3EugpSdhcQn6SGgqXreh4BieCnZFpooqvcTG1izy5L1SR1oMhCuLDUbuiReQX3YM6SLByUGERNZG1xrGuCDGiy6D",
  "key28": "5CNwhX4HxdiYf8MXBHUJHdY8J4Xz3uaBXTR96jduGJoY59tqLNyjRAoitF51ovq9D8uqAuD4kRMozs7LCG7qheys",
  "key29": "PG1ReijEuResavka8VtcumqTXozUd964a1B5E77qTddxETxiAb8Sb7aCgMemuJ49eXuRZ2Ej2ur8sFs2UBhZqe9",
  "key30": "4nXtvcr9wyDcKiXvcFdbUVtQ6xmm8oYMCVESybPNYsPAdc57BKyWEqMva4C8cdn9yx79gknqiKnup1ZwQRPdw2ke",
  "key31": "ZePsB9ynPna9QqcFHmE8hZouG6k23Ptkyo3s86WEedDmwtk7E4qRvBNnJp3Ru2jhR9FzDbiJbqqmNko4CdeTGqw",
  "key32": "SojZ9KqJLaiWzCJvkREwmkgWTZRL8VYkZb8QXkB6ujT1NNhpLrnxtUQ5twuAj82haPr9UAuBe9A9otdN9Wfam8Q"
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
