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
    "2gBKQeWNrugi2fWofy8mJgA5oaSEqvNoKzxACMsChzWcnhYP5Xhfk1svoRLk2k5MrQv15fmsucaMWTa4V5QHeHNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jx3dx7u4UnuRmmPbjZNzopW5PEoj5gLB2pjCZU5MjRbH2Z27tgz17e7yuTEqcp712eLVGy2hvxEgXdc1eEGTDRa",
  "key1": "wNUmqpLuicvccrY4WNnCxMc7kqXCSJBrzjcjeHt6pF91TcxEmvCdbfmzqu1oJj81AZT9xPUvsrFYWGzH4M3EzuF",
  "key2": "5MAWJjLHBPSBsFM1sAtcreaMeDG9McxPZCmxeN5ZbZCWwHdvvQsSaaEdFcGL82Tq3zpioJvLJSNTd3E6wrizUN3u",
  "key3": "5j9tprm4Y54Qtr1cGkLehCrYEVeXLoB3Xx6RjYZQa3ZexCuYQbw2o8hFHswk37HGpTvXN4JStf7ThKNEPa9cB5xg",
  "key4": "2VLYXHKf1arSphC4fuNMz5EvBBSiuxFtaT95SBprUV5Zks94ZpBtpYUZTFQ4wt7FAHWdBRYFu43YAYPHtPE5XFt8",
  "key5": "5ujyV7bUxPrB11EHuXLnAdSxZDPqK6Ud8Tkn5rsQgXqhzxGLUFeB6e5GfUcGYs1aupjKz2krk8B3tv5ZLrkP4fSt",
  "key6": "3SrVkNkB6Civ399ds7YF3e9rEv48gt9pkZjSXqXk9ttEtaz2Bs7JrU7dwAtHoxx7uArFU1kTFEGw3LEBYsAR957z",
  "key7": "3Zh9zZLhuAA5nXecvtMasDPAA5FFgpq1ykcc26WxDTvvsYgnybA5sRMqQRpogLgyd8Ft8Wk9sY88yMmtG6LZkgoG",
  "key8": "9fYMKrEJbucYxpbK7WapbN1vPBtyLq7P9sh6idEKtggqo1rFDjJrNJGKBQii5WbnggbrdMixrG99ySWcsca66YW",
  "key9": "2Csy2MeeJZyGMjcnjwHBoEz8Xzxm6xso1BEuEnw9znZRTGfG4mpduGTBrrtc1xEepUwUZkYkPitk3HAsRdCe2wXW",
  "key10": "2bEyFpUuFWnQGRAr8EsSbaJGvyahkrBhqTTSd4Z72h6AQ8ntqtNmWAZDUGsH1Uqf6XBZwdwGFR6MBs7QNVCW3Acn",
  "key11": "Y8NkRDSjjHvDXmqHWPS8ntBV4Cv69S7K44r4NP1b77mNHANFsPTweiNqBHu6BtsW5RZQV3vq27eLR24Ya8GJ9cq",
  "key12": "2ryF7MHEBqwzEQr4T6uSyLxng9WndAufgG9b5L6bgXh1Woqaimn28aDRVHzqVvuzVgA3Ff7aN737dBURNNMLNyGC",
  "key13": "5sKhJioKzzekNg9ffGFpFxTQyWknuSJZmyCC14pK47CtsarFmUJjg1zPdm6FHLcqiswiJ9TdGC4w34mrYX1ixQz6",
  "key14": "48DNvJtysou6WeCGdhkuVkqiBjZi6Jjy25R849VMJRVctzByeRis8HUKj4CdCXt69dB6qEJ7A2QfUjNpbRm76cxt",
  "key15": "446oBbVgzV2VjaUZXzhzFyoKYXRESqaZr5JjQETZyxVRASNHZJMTPeEUT7qrmwFAzwf7caWR2wMUjVeDQSy5iqBS",
  "key16": "hLVT4fHRmEqTcLTjHrULHnQvBPey3vWhdBfQFseDLtAS1rPZCRrAXbpwvKAegE4rHPraCbrFxN29VtYrT3RZfnZ",
  "key17": "3RxJoqiVamLnTAXdWKnanSkYRYgJFgELQyLzrHYPigneDSrLwnQfn9M2aDhvMx3oc3FGm7M5QP4J8pkQWqGM4Nqo",
  "key18": "3RDaVQi7fcU7usRbGMZwZZfzqjg1DwyftkmdW9D5D1qeTpBvoV63SbJXUK54F7rP6JRMv6M6UYL6mRmiJ7TSrrss",
  "key19": "51H7qoQeBnEdZZmATvwL34jbYNzwNQ44fEpFGReUktoXdpAQhhpRLn1yqi3PwLpCsbpbPAJ5iBU3oRKUbmZ3TwAW",
  "key20": "2gWfny7crcaxWCGbJky7hgi2CN4cuU5WJLYbRgTwxwMa4CJwBrmSa4QXkGuZDVoFpCtWQR2gUkfTDpVU7ptLYPQh",
  "key21": "2549xocLFBRuXsf44hoUMyr4haUe88SL21hkP2ZN1HVko1DidKtZjL9ZXhAJjmQYjzQZr4Rxu3QcJMGxP4Qv3qEN",
  "key22": "4ePiZgWJGvx9vsCtQ7C7sRAswRDXvuAQZEn1LDcmnbt1tJY3Xacfr9kCk5rtLN1gZDgKx6h6MxdYKceysKyCNhMc",
  "key23": "45nLK9RGsp8FimjsxSSWQPrDrATLmDbYH1Y5fGMNjnwd1M9BpZnEErZuErYraMtk2URKfSGnMjBRGMw4qK2arf4n",
  "key24": "5R1KuW6tsrhg5zRkD4a36UPyD1vGokMTZnPWk2DksiVAWgabSraBREgWNkcZF9k7mcn3EfAgShgPQxCh6GDbxMrr",
  "key25": "MqMDXUAHXq375gss1ZuoGXzeTivpMtFo45vGvFAvHgV4rFmn1qAgtU9TVBxkU7DabFCfq9dSrTq4yhFhMxsU29k",
  "key26": "NnqZ2CrnBNoR8hWy5VnCncRqjhijGiCTfCNxBTMWYUJWLaDZxXsvG6FqcTksYtb2VvoC4dBNFPNnV3FZAyfnqak",
  "key27": "3iwDEwWBtUAUQxoTuxPVSbmyn37tXJfZTAqhJvGHHAcYdbwfM4H4ojvu9S4JyoTsm9aKdb6SoEa8dUde9Tw76rNv",
  "key28": "WFNuWpMFjxhnSH8f2oJQqBD1pP4UBQmK1vcVxTTtqnzsep8cG7fcfHtX8xNwR6r7Rn7TztKh5FwcBNrLB39EcVo",
  "key29": "4dv6yr7tqppbxbEwjn1wR5fqP6ytyz8gaz5iPXJvFZyaGqqCYRE2npiCXgu6BoU2Zq42C1H9GmyDdYynWo1AjDML",
  "key30": "2vrYekxUddGFzNo6Y12XmUkqDcG7WCtnqBBwss889NUx16zjQEnPSaAYVg2TEjFw75GpAQ9vNe5M7MGhScg1FTkH",
  "key31": "5FezwkA6UuLcok3SYk4aJnPr27TNk8hQqiKzQpbRgLhEiqmenasaWqZPcULNHT2vqSBk1DdDyQ45H6opqMoNKoMf",
  "key32": "4wCb7mr7Lsn9V3LuQniYU83VGH3RzECv7AM5dgmknG6thdSLVgfjZqpTPjs8qhyfZQbUU5UxMRE1tsBP2swwbD6B",
  "key33": "5nyLPxcn63insYydjtJ9mpr4gL4c8xwXzmMfyxF2WZtKyt64rGDzbtApoX2kYwUp5R6qKPTUgXMeTsxTS6syxzET",
  "key34": "58iQ73F9AZWAz6XXw8wQMkruGch615QYhjAVR9teKZpu3mDWczgVaDyPMxS172bmTZzME6JjHnHWQL247QBescgi",
  "key35": "4wJ8dNNjuEQc8DRi78xigKM95Tcw2uHrjnnxZ8xGQqRGQG2xWkPdVR2vhYwfiKdTAHpiJqiRVWwbTAjogAP2YVvC",
  "key36": "4Z2N7VhxDGZqMaoSWGcht43f1XcKRTCo6yA1DurSMGYBpSnRwujEycRSbrGp5BpFV3sSKFZibmiYg3KEaRnAcBRj",
  "key37": "3sfhGuLhhkAEPW5TtUkKqqgDbusRs8EMfGamLdLar6cAZvTfBNy2EFedDSK9WpWp3hBeETQW4QZdFFbXuckq5aBg",
  "key38": "2terGwyo35fRyrpZLeAJQ3ZccxT4ty6yhzLN68tmJ3m9Rp5xzJ69FKPoAwx3gQJKs8Wngrdn6763rRPWH4nx686m",
  "key39": "4pwK17AXbzfReEwVuCiN8Ee8kk9Bqfics5x93whHTES6QajdFRv36Y3dHVSLc6yWgeNDbmt7La56i249YphRRsxB",
  "key40": "26xevLSdo9nKqRRa8xEXVDYXDXN3wHSZ6MivnoxNgRUtHL2cbwGY59RSmZj9pPQfsaTn47uLkgctEtDKocrkF8zU",
  "key41": "3vVSMrCMwPNopuBCyct5WeJwxVUZeKDDWA8NkEwyUmXgTPQ8SWiZmoG9gzxzxVoLoGSzDcXQMg3HYEhVwBBXDwXj",
  "key42": "54EmDemnwMB6JmzdxLfMxUe2qjQzhvKv85KDBs2YZp332B1xFX9JrVCLj45hJLEYfuvkcNNmwU1DYMFmJMJYW5du",
  "key43": "36FkLUgDzoLs7iBCkBefS8ZGBLrVqDTfcjYk2tjzzDQZVQMSD8iXTCM3FgKb8aD1DJ62aunAzyvg8Ly3YrNy2PsS",
  "key44": "2gdqzxdC8K8QqQFfTUx3gii8ak4DuXMwgjdLbgKJTe4mb7vppUMTNsVQJTt29Sw7nASgHqEcuj3sa4Jk6yRbprLP",
  "key45": "319ypjKjtNdQPjh3HvnF6RcJVBuwHy9TEi2cBL57cGWpddw6bpnXdL2nUgiCHBFo4ervWpRBjaeWnX1Agbi68YmS"
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
