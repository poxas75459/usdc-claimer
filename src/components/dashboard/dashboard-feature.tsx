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
    "5JEs3if4CAizgg7sCtHzPbrXLEgZdkNGWgB7E6CKVdGkWiiKm6FAGUF6QPkPCP4wvNuCyDjjGDqUNdnLkN3vwdWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ivnE5f3hsYC78mimHE19wVkY4x7oLT3afucd9gJmm9KAkZYemF4ESY5hpAFL2h57urg2fWxHsBYzB2drTvRzt2s",
  "key1": "2iCoPnsfHamrJLL7d18LAGS7a8eP44dTKW32KFCMsFtWEC3NDBzUtUEW5Hj4Y5M3JDomLv3TZkVeh1SQV6FQz4nM",
  "key2": "3fdxgtmehFcAhkinaRfY5tPCSKhBSacRbdd3gzUmnr7iNpxHhrsNdw6yXkqdnqX3yMNQgCRdgiE8y7EgowADFPyd",
  "key3": "3obJe7dCAUJLfjSqdMeaLH9dSNbCQajKxq5ijfvFaPJGcsgt8GqYLufYtWUZJN3wyu4uCWdRPjiPnkq6RnzafTMj",
  "key4": "55NfQb6u5Gic9iyUoMTAe2xik5G7C9icZH9MsgXF3A22jchGwz8zkg7bG6uHyrDnY6dt14Wn1NUgMdEuszctfs7v",
  "key5": "3BtxVti24Y9cvBVvrrsQeDni2tK92ow7ozJ8Uk1idzXmGRQc6S59tbnBCvDyE4zzhGqj9KWSNeeJHvxxmgLf5XN8",
  "key6": "BSBkW8neboHh78d73q76CdrhUNxzRgwKZ3ba4MGLC6AKp41LgD36HanZ8MKvc1eiVkCnU9B9qvypWbheSCaBxhJ",
  "key7": "3UFRx1ntX1JayMLM7zwTKbPosVW5jYRwKbtA9TBQPF1ca5nM74pXuubH8tvr9M9sSm55ivJYkmWBYs8qKVchez95",
  "key8": "3Wd7H4Nz6DYaojfcEcdjE9dbvRsrSxC86v43KrQJJ6qNcSmS7PbLYaBPYDzf6tqK56LxDhGGW657Q9zGRVuoTrB5",
  "key9": "2cUTK8unMbfQa9qMDWjggxQAPDqjU94XzDRRymTDzpxFqumHPRjQLBftx31oSZm8NoBzkWspkcAvm7bNjbHWeiJv",
  "key10": "3wmTf8brapj2nPHmw2qWe7EUFXnGBzzHmKVuhspJTjvYStBqZSP7mGENVoCm57QNWCSnYhZmFoxa8djWoftxrmA5",
  "key11": "3bLUYcUyXuR4LRo8saQvtBXQnNHgngGKfz1nv7Ux48KdSqPY3k8WVDxTbPK3hkbAogjPXNMkspQJqB9CvU9NJDiA",
  "key12": "3AxTrTyVJpk8fzn3rmAuFWo1Kwf5ExzQEkT38tcEiakFf7ADzHJd98ZJXb7bnXbVyQVWM8wVVBHpUZP1V3VBx7Qj",
  "key13": "4ahpEbeHtdLNbqqAKKtJVbaAMTXhtpLyNmTfTuTkHVbxHZATH5ejwqPiQsX1WyghwhDgehexW2LneRAvQpSFH4Aj",
  "key14": "5p1qYeBKBVnP2Q7niqBcJAMs3XqXhfwqxMV6TY6FQMAYc9fqgBX1HnmPSRSxDvx5wp6wJFTEJ42VcsSms8SXUgve",
  "key15": "4KaP3KVzQdxMVw9TJvo1A5ZTZKM5QN7Vkg9rrYACWnydGY6GUFGPm1CnrCA2Mmjf7LU3bd11kYgFLy3cXaGFp8CN",
  "key16": "5opSRhkeyvYB563DTmwqkLDeH8YfCupmedLqxvQu4W83FMmEKVNzrzCSjCiEh7GzXVw1sKguPnBMYKeNf75Mmt22",
  "key17": "3sqiabnifgXCYfKuUbgmxSBx64E5Ebo3kzgoAcq2Zvq1uADcjdPvXbbG3xGehzg7nManyMSnJ5EhR6sAD8P3Geq1",
  "key18": "58dR7aLUw2YQsti6e7iDceKF7Afs4L9ZrwbEtmRNiEPkeDTyJMJYLyjS9Z19qpCF6WP2Ne9Z7eMuDk8961Wz1s3J",
  "key19": "679EvCXh211N6hYiVVjtqvGyzsDZuJN4A1PV5r3tJrjV7qTPMebcGVvjAEfonFrVEtJZBVEJiUiizaLv8Q8A6GnR",
  "key20": "4LvjTpywRMKJYPSsyQQCAm6bFFU6CyKaymVtSMjGSg2KduN7cFUg5FXHashtxwxRuqUbVJYdN6UXYEz37ywJFZ44",
  "key21": "4NfDG7oQf1mvPGH8MR3Pf2zr2pkPPWPjw94kmXpCm8u4WDbes4kqMB9utmcFV9FpNyqJf62oGe59mZeu8mSUUwit",
  "key22": "2hEM657D7rqufrabhYBBEy5oVSbe5q4yn6xib7wS22mWVENHHpzYzkEyrLnxmA44eaaNtqgDzub4XQiGVT2gThJz",
  "key23": "4g5gDPEpdxKv38Bn9SBjqQHPnds7c1x9b4s9NmexsCTKJT5L9MYADFpyjUvYg4sumTJPoQWFSmy47LBPrw9Bk6f",
  "key24": "83FmxEYbyEZPAFp7fDWAfn2ZAEJjABdZLzoMy2CmFgsSXVSXjGd7i9xy2ycVeU1XKXba6M2e7zsohjc6APbtEsH",
  "key25": "ds4ZiHxWRoZd4nW9tEAsd4PPLpS4sa6JThdZaf9ShLXTmWiuFp4RQ1b31GEqmRN9ruTCF5xgNVwpMoLhdpcMbfH",
  "key26": "Hyah8AkSoxHCtSPXAVeCNKb1VycmBUQkP8MgUpxwB71Lkn3Pf9Yuf8yKBTG87X9Jeo2QudHnGkExepLxDwjaXRK",
  "key27": "3641UbfutKmqdCTHxLkFzqrG1MgyvSkLsG8J6QhSTMYpQjYdAdsNQyBbBgFqAvG5DCffMKGtWUfN8EZywnUZL9cf",
  "key28": "NcGKktkuJyfynERep2TK1QYpckxBwCouioBHPWVdceesSyvLeYoGu9Zm6gz8EBs39qSXiLcW7f1qQZ8NGEUrGXH",
  "key29": "63bR1dw9HLuFMyoyVudLL74MsSpKnCsd5GAFrMCf8LrTLoxm19wEZ8niNe5kPHZrazxhW8PzZjpZKDXqT5wNckL9"
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
