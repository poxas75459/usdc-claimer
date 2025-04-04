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
    "63aUZVxgQi8amn48zuVjbhoEAT1noLFFyyFGPChgGCWfVPJyJtj4byABmQ73GsAuYvffLyg9zQZuvFtZoUi1jYZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XWaXcWNwEjBHhFpDUygjQRr3pL1GvDjx1uiKdmciK4DXJB6TQ1fTV2XeqATtufocUUpR8Pms23tGi1wkSkLrbFq",
  "key1": "5mMWzhzxHBe9xX3E5BPmkQojc62gViPGMNaBNn2F1Lk1ZKh6GwYFeHgtGGRpm8LnbMrjJvW41PQRECK8QdaqDKdh",
  "key2": "xXrCavD3xnvD9ShJ7qmWHSXR4qNxtHU94VBVrrMvz5ixxxjzhiudvG8zw1gU7ZgxrpGxFx1DhcLvkJMY7DdigHP",
  "key3": "RZ1Tx3m2FMER1S9W72Rng1thn8vFTj6LWXLcFBRTEF6bYYd1GtZxLd4fu3SNwWpZJatZVytvonqoWzJXEgFR2u3",
  "key4": "4VbQTrRYye39gHXrJtdFyyEcy3DBnqRB66i5DBa8Aobo6Ttu8pAzX3WvyiitzdtqFfAhjyPdX7nLJGSq28HWExCz",
  "key5": "4RM3tZCV6W8m3CgCwaAajRSy1cBX5qJ2hpPTrZT1oYpdfuDh8pNjocGSoUekm4gWRH4Y6RyWn5ojYNiH1kQjr4Gd",
  "key6": "3K51K2dnAqYAQ1PMALEHE7cNpuT8L3ZdWnY32SkjY8GHEezSfSNp1u8TtQazgN1WCa9XiC7JdoUEr7FjT3UJVANe",
  "key7": "3HAa99rFfnigJxdfmM6xZdEaeK7ZXHunXjiSZr1K76py3JZHYKh1h6T4vug7DUwyws4MjQcksWkTE6ZBqT15y8wx",
  "key8": "2JvaSJ9hx2b37JghezdNgkuEUKSWFSxykvnqyW9TfZ9EBLSP4TvYM98JnsECFX5h9aVYM8SKMZdtostwyqbgHrET",
  "key9": "4i5DZMeRccVhUdwRpPJDacuptP3FgebjL8Ni8CDkDs4GsfRoRCXfSvzvqJdjKhH3msbx745DUgT1YdJz6mHgt5H6",
  "key10": "o5QxHZqAAeukeknhGrQPaHPv4MRtK5a77MeN92n1keK8ysfwX1U2jXmnXmgC25R5KJPdh8BKRqjcGHvcd7SWpi8",
  "key11": "3HtudCZRnrMWrin3YWRHAb6gVXpH234GkA8hgUavagFhL87gBhWtPmMvHzc9P7pM2TeLCGjMktBu9Te3wSkVMWGQ",
  "key12": "2d2sC4uwDnWbDqVYKZXnFdwGVw2mBtVMnNRkmz5iAQryP66icimTqFG3BXyhccbJxdho7Lz1fSEdycYXXWH5UjVi",
  "key13": "499B6Rfy5VvdkiyKtHLz3ReUwMi7c7q2CQ5BfsLFJq5AtD3DGiFGimgDUWctAXTZJ5NLM636NWj4G2s1q4ubaFz9",
  "key14": "2UzLKzMzUy8iDkdM5X22yK5bJy7LzLWgTkM9YDkqrcBMpwxmNBxkLragTdUQ6z9PKfHh2XLSzkcwCKeHr2nsDBdN",
  "key15": "3av3RUt8DU8dwdQEWNovYbBc3dcdK64Vng1RAuHszXsZNCNE1TDCe5pcCzRvPFpkEidM4jYULyjGvVNfPyh1ZCsm",
  "key16": "zLaLo65WQyX5aSpgtyVXtCH57cvRsjPMcJartC42pdfKw7LSLZ9jXcPHb8tCgV2u5UxqxQ6NzUqVM3DoAdnLdqq",
  "key17": "2Jt1qdNGPsnNwKr8LbD29y3mUG5orye6rB9B1JFKigkuS8puf6zK7GcAcoX4MrPqoq6vnVCRLb8DusycjvLVVC2R",
  "key18": "2ALrdebYzLGrc22CnnXGaauJexhhVNUQA3hpYQwceQgK2SiSkmjLGtMSqUYsCov7pVkUWUrcaiXZKfme4j5e19Vv",
  "key19": "3zbFGQAgEe7MhKHgRZArv2SdyptaXU8Da5ZoGuP5nb1MDFfPsbxU8zf2q8wgrvF5W7DM8LSrukcPxGVogUbP1jVo",
  "key20": "4gf98mwr3qTQNWsxgtpYY3oKQUzVcJ4ui9anBuC8VbUv965rNoSS3jeEkzwPNNaSnijEdbATXqzFMpCJ9unANY6T",
  "key21": "5TAmJaDfFHZqwyZtHCGrrL7dD5LdD3GW9Q2k5ZhFhag3XexeF4wMs5WeDFLEdwDPC32wTVDfMRMjWoEwhZbsPGvW",
  "key22": "3pLbJXd2tn4oXjToyBxTAAtu153USjr2YYsw15U1jyohozpnNfjSXKd4brLDrXRxC2SGN1svhBktfNtmmVY4aisw",
  "key23": "5grBAgvAQMX7urYSCCcbMZHEK5xS7RKxHFcz8h2HFghDYKgkf7PubxXhPxSiR3APPAgDx1zYcaC7DKQXttfPj3B5",
  "key24": "2KLizd4TPUN4Mv7mdfxTPWkR3FKvbZdedmR2aRaCYuXChFnvyYstgkEPreeUiAtEjTZkrSWVo5oEgfwqKr68s5BA",
  "key25": "63r4GYReC6rVN9x51HgceWB9SgUCJTXRMHAy6QGuYyMeEVWFRyXtLNwdDLkPtUkCuoScDofjRgqFjBTzFNcDBKq2",
  "key26": "413dQjZ6tAQLcNYu3ucL1K3hKHN495iZTDHG3ewtY16VNu12WMbiRKEYaomt8R8UXMHLSkAtKkcWtveXmfmcfUoQ",
  "key27": "57h3f8MG4tu1dXa9UhU19wYaJd7o3DzdzZoN3vjLzW3rcKQ27acHeKR1KAPEvHWcx7Wqu4x8fkAQG4qZBSp2UjTd",
  "key28": "3X64Pm5DEPimMymxPJjqaJSfwy6HpZKsYdkrbXkps6qUSgRtGAGKoSzvbGF1DQdZgD3HrqZaFJLqooLB1mhaN8Xq",
  "key29": "43cuqBVbCELniextNomK3hUiEpwtMmFy2a5VyKswUcywa3howUArAWKeHFimU8AgML2ZGg9FtA3UmEjeF3SNPMHQ",
  "key30": "5uXktUttidccbEW8c8AdvAPUfxsZXHGp6xby4Yox7TfEKuS16KZc2h5jaa8zvxg1Sq8JQioi74b1N6QhQcrLxsah",
  "key31": "5FzjYQ578fMtk8UkGgLHybbH8bGiUudg4hEFUJKfY8J4HvEYaqqaCSxPcZyXczNyvKceHBKcvV3RLzXn2yJweLVd",
  "key32": "oWNnXqZMGBPWgx33w7ZXzJoNUxXWYmGPo3x7M8nzN5ubakkUHg6pDZNmSRS8BDtBLYVVr97fPy9gVjxrwRB6YDN",
  "key33": "34cWQccjRfGaG5dpYC4aMg8p4stdTjvBkQgBwa3XEUn4CzPw9FxqoJmeFLkivcWXLs9pdTfvekUfqvh4LTgvJW12",
  "key34": "24yJaiYLsYwDrsTnTXtm2FVKgeQQFweZG4urmTuSrZn792KVHm9MQA7NpkY9NM54hMnMzRAj1abtYocsRH2DBFUh",
  "key35": "9mDHZRLJr9Erfi7irDPPj76QhJpLSyEgrzC1unY83TzeWq6HSLkdzKWAjvPLkJ1X6cVTNtKvbVjph1w41KVbQap",
  "key36": "3Ji5g6Am6CtmhnViHNuppqoLGWs7tssA6HLfV6DyCbGQJtntR5Ezee3PqfKUfs2b8hBaNJZHFjhicWRfP3SEP9ik"
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
