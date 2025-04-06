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
    "2PgE5phB6bAfrrnwjYpQVwRZeDQPCsUQupR752wxKD4cKM8naNS5nZ8VrQ3QdbdAy5MrJjXVt6ccehz3kcAwLofr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rqUuseGdfzPXb2sJbRwVbnx3QWB9WsqwpLsTmRQcUqjwEo4Pa7L5ug6CJgnYACM8QnSbzJHRh5Fptq2eCP4qmfE",
  "key1": "4NFp99J2NkUMrNcw17EQdC2ij6c9HPPJod8FEya7tarVUEFf7KeZnb389yrZNC1aUU9xRjeBerMBfh8Zof8jMuPJ",
  "key2": "1xKMYg5tkqS3uu1vU3JkosLt8ytbq7Sau1EBFBjGU3RJSP1NQ6RFeJS5krZitS97YSjJa6adSU4SVw8K88qPxDz",
  "key3": "5SvhPnCPp1TNfBXm2fA4Gd96wbc72rjhBNRfMBJHbV2cNRW8pRy6n8j3FKrz3EcMiw2RkYDUmA1tkUDBGNNPBHPC",
  "key4": "4v51onvYvxPMNrQm9pigwXsqKyXjDpQANKBFhFZVwe2fohgagsXZz7ot9QJwgFfmNYLJEivuECCatxUe1qjoLJiJ",
  "key5": "4EsTJawF2YwwheAWBEsYL39FMtBPhwV3tzkmxWpfGjqsYXDAhUbN12k3wmPhCP8QQKQonVNnLgh9hQ5UMtQRHiDq",
  "key6": "25qfWub7etaZFmwTXLjaMZc8c6nEXcrEKfAoeLU4ZgeSZ9zQrw4jyga6EF9mTAKWi9Z6wJZTLzrH3Cgd4phAq9aL",
  "key7": "2MWrKKJwNa68y1yaH38WBgDuhHDtjWfsQuQzHRXvwwLhrFYFnSfyuf7pHPcqveTzoPR9SAsrtxJuhsk8uGyBUJ2N",
  "key8": "vNSgoqPZWzkXc7BqhhazFXYoXKhiiUMLZ2EoG31zcoh6LWgSth66s1wv2EGnbkrRe84SKdJadJd76AXgQXnQm4G",
  "key9": "SEMiUucMnMLum8nSezPn3Ei7ozpPxfiUMPjDjyfWz11ko8V9yUoZaKaxVdVBMhx9NV36UPtwJgdgFR19N54yZVv",
  "key10": "2Pt4mvw3CeB7vGAEP7vbHisnohXZhShcDD2Uq8ZNYsqLHGxk58ddbfwWDSLvB2XDNKSqSvwHHXTiWrPmG6k3kDfk",
  "key11": "3LT8Drt14zHeZwrR5989BdEH4RUqAu393FadVTYN2ce47HMGNrppJdhnMhyYa9bdrQDGkdeSrSf4wbosXyHk5RVU",
  "key12": "2o8255XFEXmKDNHW4oytUq8JFQfqZSKLiPmmHkvPZbVzKx2JqjK8vTVPeLmdzAGCopWqJYxmk1KSyUHLrN98Edp4",
  "key13": "3aJhKry16iuzpujj3kyy1gS4jxvA5S7YqhHSMnC6u3JnTdpaA8BgsejLguRQ1ap7YrrV1WvPTtYRSiMebKxaBG82",
  "key14": "4TUNa72HZNaHoX9mL436nvxYW5PekCaSg7qdqS1J5S42mxX7jWbFcTFZFmUSsnTAhnGg7Cb6npEs9CaAEKM1RMYd",
  "key15": "3G8gjVn8RUtsRsYB5tKSk6gAUjTa6SfY2vApHeK1Wg2B1auf4NDai3vk4x18W8mYquF2ANrkUKkkE2DoNqq27hht",
  "key16": "28DivvGuJiqdwZVweiNcAr81PuH1sdEdQ3awAkV4NEq9eaxJfzJ4LMzoPGFNfWH4pBen6pjDwMhNtJ6q5xZh3EkQ",
  "key17": "XjksbFobJABM99wn5Cdh1CDqspqYSAYDjRHCCUbvxsnZPXSazmKymtpxHfvakN6WgxTW988PK7e86TZnnYYjEYq",
  "key18": "4DZUdUkom6mSTsF3EH1Yd1JAZc5C45fB6NifUF83MtHe4KuQ5VeagsorMhQbkccdwWoSDV711cwvZADcHEAroNYs",
  "key19": "5hyoZpp57iSZcvNoYTXudMuquezgZoEsvkAcdS5tLacZbEByCzDQb6CGaTfpKQeYP9N18CVyR2hT6sUs8zABYb6t",
  "key20": "4bYXYoeBnkiPCe2Yeq5J51WGocZTpVyfibHByVhaggcBQQqtPaUPjz1XqTjzMxH91ABuf75tVfmZaxiUUGQj87S3",
  "key21": "3VYf8cWDEesHSbjWyqB29HWDBCRR7G1oLj39MbTaopfpEjdpDJivv7MMynmKT1UW6UGur7UCDeWv13hvmEtsQPPd",
  "key22": "PVXy557BeR1rCJAF1xAmJBXvuiuxi8qJBCRg5EMULgAU2X9imYH3iBNaUGMvP6BDa9szZDeZuj3sdmmjgvTQ7Hb",
  "key23": "qRav1muVQ4uY16G4KsL6FVXSzeCJkzDbM2CGvmMJqFtLdC122CRgM5r1a1wvVwE3YZYUha5nBDDcd81a1xkcTEi",
  "key24": "2zKgFEjEQZvo4uHDvGatWacUgh4SakYWwxj27igK8R3TpPQmKsvycSgPL1daa2hPn6DT5LPQwvQ6TxRsCBCrDTBa",
  "key25": "5qPN8xMKagLJcp2xZnhW8UuyUAfSFGPDqtUZXPRstfH5YQnviLPJJkKExSCBq4qst1iW7mUC38Cg2Wjy4Qfq39Yi",
  "key26": "5suVuEqToKaWB4zyhBd6qZBHd6BKyyFjtGgyK6JeSjTTCNoTNEYZUAjvSi3dcuQhTTesg8KBm3KXGLgQsUhFUtmK",
  "key27": "4QSdzvzobfkmFDSeR1cH7THxgaf9Hvf6tvfuwCcYeqr58ZP3jWhxaWbECDUKcN3j2Q7mPYqFDkXFyUpb8aNKtpMv",
  "key28": "3VesHPczsWepFviXUS8vpGs6MbZEpBHRj2WJAM5aNQLSkM348u8UBfzmw7w8W1LYGRWavZGUXic7vRjHMefBFjmm",
  "key29": "4D86TuV5MiNfCMvg7dca31LsaacBCHLAsNeBPBazGCbUEmx6QSNfub1wFbJH3juT8RCUkMq24eBDxqKaGg3UEYnb",
  "key30": "4FrvQfHt39RC3ZoRWbdhEDVxzwVncgsYSqP3yd29E5hgFym2gaLzm9ShAcTfDGNc6pvAmUEYmbCzCtgUcYHmTWGx",
  "key31": "AmDi6LedzAUUNdJxyrvVmS4juZvJq6fv9Q7UMWg7FntE6ec6ScEBv18u6Kjh9iAgXQC8CxWtZ22PbTEFWWit5pY",
  "key32": "3XJqVyezJ2Vt4Hq1xS5gZhuFf9ajMwev3VAykdVPXhEWi8odaEbMwGHpGami3jaNtFKWnnUL9LeKwvzWJ6gb2iiL"
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
