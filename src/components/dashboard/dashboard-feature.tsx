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
    "3HyP1jgy3tktF5MEwUEH1eC9mrZTR4LhM7M8VwmqjyfiS8VfkctZdNRiA7mvWYgBTC8hPmVfQQKGGszshsraCTxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cbda4rB3Yxij8x14C9vv8YVgipt81TCm6NUxorPidaQwd6rH2JXZcAu4ycuJVPsS4tw4ye6pbaVJAyqadPdqSep",
  "key1": "5YrawwAWgG3aQnmVL7AwjDaVyutgKJPbzrpbrDpFiX5idL7RQSRU6cw2Fk87DFT7PS1bjsr3ggQ1tKVGmAjko1ix",
  "key2": "4PuQMTYypFuUEjG6bXn4GeUe3eWUCg42LAQs9nYjsbHbagG5RSQWXjYfJNhK3iL6Zus9baEx8hDJFFeKTLLm3eNf",
  "key3": "417rwjSpvNs2FnFUy3QXi3Q65JVZXMAqyjTrK4WGG9fGADexTM7xrhpm7W56Pkd55gTDXqsXDRGk2WwM2SGiuz6w",
  "key4": "5N5PTqqU2BvATeDUCb9KFRgwkZGyMYEumSJxKEXEy8EBrVC7eC1Zj5dQhaihSaUW8XNdL83UZehWwVS8td3v1cNv",
  "key5": "29LnUiTf2ieyPb9MhV36CDQ3MCCnpxeqLdDQNsrKicXzo6nRqATguwXVSDbNQdgHcvgb8fRjvXDjXwc7ZtNkaRKd",
  "key6": "53JZRxBsCbqy7HLs8YMxfRCA3kvq3D5bRgWmofqrJ7SLsz9kkpoFarLYqf3R5Qo8312AcxH5ydFbx3GemKWDmjak",
  "key7": "3J21dJ1WELu1azA1SsYFaKxRsJFTWJQ9Cj5piGLbf5J7g12EMFK57oL9yiQGdF1wdi9HZNaA8h7U1TRhraYEgcDh",
  "key8": "5Di47z2fZVY5UAyfDNGsWcRzMwZaPUAsZY8HxMF6opBETVbo2FS89Lj3ubCZKVZ27Er1LYkfTCgcXdpDz1v1quvc",
  "key9": "5d5aimHdktyRJsJ5pPQa972WHXvpxu6usriVxUEqGbmbzEmXW6g6tzMBNFE8NrporKAY4oM3yX1jLVxA2MNuushi",
  "key10": "5kQmm9kVhvBPBAwgUypafTm4ejnTRKyF8rU5bBowkJo1w27DmKCP8isi1MsRKFb57TzoVShuZavAFAxkE8AxYaJ7",
  "key11": "3edAtCyTY2VBjMzhnKxVaMigtZMWeznbmE32mhUdYU5af9kciWwnk1nazeHjt81v88J1XfQxZVTtSSduRJVgFcvK",
  "key12": "QAMwTknoTg67iE1J1t5zTkQ3ETFfiVtZSnxy89mQhNftDaTTH2WEAYmwK5q5YDd1jDYwbCmMw1BwBxqM1aCJiaU",
  "key13": "43KL2bNPhhtyiGjyhrnV2toixu8AiH4KZwGrmDJXrnLGJ2GnS3pQvW1KU6PPT3LRi4r3tqxqL9dEvZbyQghMiQ2t",
  "key14": "6HrLYpYfEMETxqNVJVUjbHXGKZcQ67oZSPdAKrtPQaEHmMxDWSkMJ4Y2RWtriuzv8deKBy4PY1uKZvBGRtxjMdf",
  "key15": "4jgGQZ36QDedZsZNLDVvEK4SFvKLUpfFeSumD9t4sp16uVMh7FKS7ZsmknFWFxDZVSKN8FWGq2PtoNaDMiTuPUyS",
  "key16": "3oZB81UzSjaGAdeCy3QLVUBw2h2uJGtvzWqQARNXBFocHV24GTxFmRCU9NeEvwyCzbZAE9c954eS5T9UxoMed1Jc",
  "key17": "89ZuYarGAGdDzBVLdG4DoHd18beruVKuTxFgjSTJTbxjKkJnirLCLwwbyTqanJAks9oXAcgotSA5vpxCDd65Qse",
  "key18": "2Fx1zM2FaEUYvFBNA55aLjR3DQz4TcWvj7wQCJ3q7JTfcRhy7hHzfXAf7tibJCgvkbXLjpcDmFcbCJz77xhiM2qf",
  "key19": "4r3swuqdZJwtgxqjWV4iVdvDiNQgYoS7YtT9bq2AyaW23ZvQ4PuNhTmTbF3k5AUmJT3sNEeZTu956P49qMNtZQdX",
  "key20": "2oLeLF6Svkog8PEtMH4vY96WdZniUCF6EkELkdF3tbpcj76SrSK5WY37DtrSGfc9khiWkUB3wvhn6RCFmnH8JjJX",
  "key21": "46oCx2cVAqz2tGcg7JyhDTy5d5Q3ycwizjJXAWt2hnQ3wNMCiZJjEe1S1NJrkK6TAcUwHMD8QLMjLQTuFRCaZGFa",
  "key22": "3DDURA8uDaySbCvRcvZXsoM2kxmGPn1mgpZj74vC4sWP7iSoXfL4F9szDpijPraPqCMoPpWdZ8sFqDwfsuqkn8ZK",
  "key23": "4uWuo1t1K7YFFQEK81mntxDkfmjE2NEAE8uwfyiyAVyeMTwG88N6dLDtmfMZjBKnBWnKr8dASLPEmzsRPaZLXyHn",
  "key24": "ZagQrgazVwmrJiP1a8gJK2oLT9MsDDi5rTWVzkoeXfgLpnYwoJR5VSCRc2mNGCya39Do5MSzfN1rXvXGiZah8wd",
  "key25": "2fqBMqkgV8DWxFWxKq1cVAUiG76VAxLY44tsGTwqetf1ChGo8WS6KGLA7FmHg5JSfLRAT9yoGC4JNaQWMjWVSUqw",
  "key26": "mm1fjv2fpxyTTpcPg3pDcndnxKEUvE2dBcM3AZRM65T3LakHVV7j5MBfbup5QruQqF35etciAi6MQk5gEHj82q5",
  "key27": "2DDXF7NdSDNReypAeeRJjjdA5CyZCRM7ANBRQ5tbhnNifHfeeipaYfFWkhe7FmFqhkRmSynjMnPDUSiQkEauD38d",
  "key28": "5zoHoAfHTSXSCoTKQ7VCfLoLG6F3DvcM7v667FLXPf7pUxpssHTARq5C13UJ7Vt1SHXkZrbUXiSQTKt81jQjyvNV",
  "key29": "2a5Z7pa5JxaE89LBtDMLurwswehvFeGftuSiNSbajR9eQJ1jCvkCu2DkeXX9oWP1ERtrRfq2N28MmpQPaZhgZnAJ",
  "key30": "4jFj7ar94J9fvUcxyXY5EktTPy4iHmRmqDZHwFJEDFVGvk2tKJ836BT5vPGFTp6wcmVkb4eiBB88rWS4KZc9jCZz"
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
