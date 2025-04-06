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
    "44c2oH9u4Sp5P5C7M9oDkTkczEpxpVy6XJUoGp1fXRifrytXMBpkTyGVwqtAjuRfSQeLvcE3cHyXdcL3mepxriRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPSf1D4sdRZkuyhw1mfSaFjxS8NoPKG5XQaYcfiurwegkCVSBMaPchn6gRRNNZADYSNXfrHnXx89jX18HTN1hgE",
  "key1": "4bM7fRrLAMBUBvqL7uFwvxvskZSZLRu9XXSC894sMiqvbxCAL5QFoLAvZGpkBFdpXfgwTs1KRF1w4McPvVZdHeaH",
  "key2": "24MXkjoknyCNLJPTLXU6B8GMom7N8cneuu526gM4tvVSuLcqkZbCYZynfGhW5jWDrxKSr3kKiKy1ous1fADUVHZb",
  "key3": "2LUTMVK9kk79xtEXDVhgL98N47YtjG79XWcccz1pQHxK9AAs9EMak1PGEGxJdM16rqkazP6E3iyJePXbDv1mKjwr",
  "key4": "2kvevy5vCUiUTbfjygqmZWqJ7uRM6NdKPNXyLS37nm9c1zzFzZFPwpyECkZ4QUiJvtMYAFkDM8UxzRZPCmM3vDDZ",
  "key5": "61XZKDJbxKUV7yohGqxXy6aC5jKb9yW543XsfAZxpRrC9e2pAhdaXfhxZ5t6EcU9GotJFhoqfJ6E4tFMGmuRJX6w",
  "key6": "5Y59qsVRAnn8NB4ac4DnrjYM5KNbnGTBE1rzrbSD3R977gbLat6vpr6cPXTG64uv4ai4f8p8rDM8MobdsHgxm8iZ",
  "key7": "2WhV6o5M1HSJMChPz3fPtTC9BKz1sHFb3HDxjm4wnSDmV2zSZfXXm7i71CpAV5uT1XGesWJzWJfiicW3Nam8Cy14",
  "key8": "4Ls3WcZ5cAT2XAmqjU8KqgMQ3n3UPSvHduaor7U3gELyJBW1LqSWRqXyB74E6fbSYTz8XYFBQkXHJFraP3v58oZM",
  "key9": "2pEJYpCu7S1zc6YWhSoRMhBPq79ueYL5aofBEZpBMhwTSLBoRpTDhkMt86PeF3UNuwPUytfB1uUkNwNAKxkPXFwx",
  "key10": "2pDBxzEc9XAeG7fX6rwEvQqDxYdCMPscVNyDAo2Y17tiipNvNpXcrDwYZnZ7heEZ5Wer1ANp5yMfaaDwu68eVceo",
  "key11": "3M7PzWNTNAYPzSsiQC28ZC57wzqhN2rETckwAtxGrQ2gFEZWWpUhdRorhAoECtrtQpPGw1dAbNbymfeU5oXSuE12",
  "key12": "426kBepbFhio348zvocEUfJJ2sHGCrT4vgZH8cAQbrb6T9K5d38H247WGJC9upEBvz4T4zq2mqrjjUS16dXmfQrU",
  "key13": "5fqsqS4tZpi7S845gi1gHXRsLDRiX6ptq6F15hSTUMQZdzGaW7o4GrUEKnaHco9gNWyhXYr8MiSX8M3iAno48cge",
  "key14": "3QTND3k3c8HDeR6iwvWarGm2FqczY4eKdvhCTwvrzT6Jor4tViGm6hg3aHoToooQUvQrDb9FTKAFpWk5rM3iGjmH",
  "key15": "46Gk2eqaD2RCfTYmWX946373hVezr5p7yCQ13UZkZfSqxQCDvZZuqtCqpF1mF1n8AsS3iDuE2X1uRKNvM98VrB5N",
  "key16": "3RfFshDAnmvXyBysj3PZ7vYc5kibP7TQgirsouJTSt44JcnYvUNh8adA7DSWbsZYN12x2aNEUMmt8B6EMKao2dzR",
  "key17": "5cVXguzupxdFdPYxwAXMoMkVrkSmWR49kPFZHrfbMNxxSHf4PjWTDVZJYrJT3rKfHZHbG5k9GzgX8sMFcGcrmA5B",
  "key18": "VPJ3FEon5YkkotGnx7DinvwaD8akDV1D79Yc1XxXjXJYXxRMbZpkyXx6okYAff8zsEA7copkvAFytKQ6BBFAPTT",
  "key19": "5ivhBZ6jaf6qN59ErrTZKzgsTQbwu8t8BqfPpZ78L4aGvLCoTyvhZ58iUQSPjbEU8jx4SkSNBj8xfdHtNaimtomX",
  "key20": "wju8guE3ZPYWKAn52r7cNMpaKq9XYMCgzyDtiMDSn1v4kTfsasBEm3VULRSEKhyQeV33PBH3mUoJyGUW9L7JCKD",
  "key21": "5Xe3i8o6oDE3PRGyETVAp2gwWwp4vEgSMgGKCAvdd3Kswu5sABb8EXD2E8JazFF33GtYhfiHET1s1KwtAkneftX8",
  "key22": "2sxss6UrpXhiT4aJXAwtPoa1JAo7NcpJkvvAXdtDBBmLrKWtyA4Xz1oBaTh9oR8awrDMYoQXowSFLu8dm6wUHJgt",
  "key23": "29xVvnQLifF8dF2zUG8LHj1gDV1obj8jWcuyrALYW9X4cit9z7mgDopqGaodRPAEJdnhoDDatWJAbQesEiryQxXN",
  "key24": "5SuDzo9yvsvcgvSPcr2sGKjsw4oWAsnB1gUCgB4sPSBoNVGuYvoghgyrWJbsBrEWydKPoJs6tZqjop4FTVmGXTbp",
  "key25": "3DKhRkrYbhF7DtLcTTrxHXq3nrpnYTHdEbnk6RMbzcPsNG4ZeCnAY7xuqmtJwEFepKaAmvce7NQ8WWWd8YFFeqha",
  "key26": "2UeMeZ6fDVaJVJKznwLq2H61C52b6xFm1rFALJEpqvEYYDhkqy7wnvs5NDzWNx9TY8ov3T72HRtoNQkPCzjzruas",
  "key27": "4oMmwy1H1HrcvfHZBh6jnj6fPedHm2mxqndaGgF8dxsD6A1VGzoYL1tx4waryjgtZveLiNQ4y3eRBv4A8jUz1cCF",
  "key28": "sUje9VLUQVv9rY7tPmm1JNtS1ZXY6zWAGbPXX5yd5f7sGvBq3R7NXcZ6hht21oQkczFSwJFbkSVRui6sKYJpwL4",
  "key29": "4RM4yjSu2A9ch4aBtPMsWSPFLoTPRq4mTXTVamWrRjdASSMF3LjxABmqSwgpY27rq8NV8bgCeGsGmQzRHCdMvCUY",
  "key30": "4SrqfGmHEfYy4EJFuGGi5jD4eNod2H2Cs9KmtKA7X51nZN3cc1i1CaFkorGBrb9qKxkvC6gs1m6xH2M7tqsdqhmL",
  "key31": "5wqfJr1HaNVKE3q2wS3miWw2YauKutSawP8hFyEVK8Mqpz7mjGRZEgpVCP7TVHf4pCJwKqoFDrDDF5qDiUMM9H8X",
  "key32": "5UtHmq1LXboav7VqyjPaRMqVskBRRVKHNTzG79FTXo61v4uZPx8nxPYsHw5pXGhNNLCC9joqZb6hxVXkNcnuNnoa",
  "key33": "3mBtv1TanxmYpMMNagjrGcJGRvga628jjGUEvgXygV87Ltc3YiAuuaVX9c1XwdoUoHjEuhuPC85HTGqbjvXaWNS6",
  "key34": "5QTdjxCDeEptH69KRrZRT7kxDokpCaCkrrfT1mk7p1bfqw1nYv7pB4diKUW1eqDuzY4QLEbJeDLMwURgeMYcah98",
  "key35": "61NTYrWMZ6x6ubf4ZCQvRMgneE5dA2x7w9Nr8vziGgyE6G4EPzmeb5ZfFHXfXRZAQT3h5UPAYTfe7SYzLPp7bLHU"
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
