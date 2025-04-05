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
    "vj1QvX9zPAi1fSscK4N6FKxdJnjFVezuGpmDUpRSbFZrTQqmZ74k3XpTcC2LYDZvSQG6ndD8eDYjrX13FTzr6Jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EscWc7DZLWyhqeWECEgpfYT5WU29tfkeyzjvkAChFaE36GhoUdvoUxxZkrukYXgGzJx37YbAeGDJhg6NxpJUanW",
  "key1": "5m9pwzb5RaCqys3oKWiC3xmpcKgJpjRmf4rSc8f2Mq2G3p74qBAZhK6zN2T1Py73Foo5GxQdCmdUxaz63WbbDSFf",
  "key2": "FLycHcacuwavCTj8gF5MqHTWHB4XosgXpA3EnQsRDsXvypCWH7W1wLZ63bYbtHo4Qo6MzHQTrAsmXBvcjvwJUjy",
  "key3": "AsrCq1A4sbUaNDpfgFdhdqFZGSn76L99rXuskTa3Dssxr1fPSfSkMJarfg5DYosLrT9kyYjvhGR5kzXQ9Sx8BvM",
  "key4": "2nxmjQdgiSzYhhxKXeSmVxWeSLFffWrKeFepzw3bPEaGBC5gwjyETquF1StRXej2V7agCULJTxCJKogWcSSfmr5",
  "key5": "4NLq3Fcgn1qTRQb9iNsGcYR9fPxTFQUDE2sExkvPu2nc6EEmxuoMazN9eoyNFNz9FJhVqrFLGSB5WTAhZAmFK6UW",
  "key6": "4m6vCJhbouapLsKm9YoAckof7YNhpi5Q8aseY8aaAg2e7Yc6FwbsSjmWc3aHuWL8pbgwxuDW16AdnXgVvCPKAkK3",
  "key7": "3viDq52TGmqaoC9vgAKz9sLsmjcNqkRDxCQWVR5Rcd3GWuDgkZfoH7WvkVFbJoCf17KKdbnTHFpQWRRt7yEtWjuR",
  "key8": "3fnvkwvu1pZYyJZHSqDuT3Ew2RgNMs6B8gc7UuWTxaF7kExeCFBiHNpsRdNSpJF9T1XAENRkuWjZLnKbY8RoZpjE",
  "key9": "2ME1etQZ5Yo8fCFmaDCGJwG9oj7w1eZwBWTXGuR7gupDEuFbn2GnYFhu4LEMGfyzMZn3SRA3V9q7eF1vu4qdFEnU",
  "key10": "4xUe2Jp95wKfuixxxSc6Ktad8dzvUM4EXRu48QYLniV8JanBd8S8wjhJSt6o7hyJgVhrtwxViidYzCmjNPExLncA",
  "key11": "3KLCw5KuJt2WoDjBX35p3VxfCrYLiD3U3K3SzFwe6hNPs5iADRsKmm2VVoF2XctwYTZwyjkfcyPUPpZRQSQU6BRo",
  "key12": "4eHoKZbJ1oJ2bWiazBJ4o35WTspbbaVpg1hnf5aR4GCasi5EM4vTezQYYj2JLKR2BU9VpEFpDer88aspaVGBiPT2",
  "key13": "29HjPmT4dyUw2Toxj2nr2VSUB1uxkomyu9ZLPYamiZ6ayL1CjbVNypvsJFHYaFzhwTkQbmNkVU9HNxAa9sY3pND6",
  "key14": "3ZJvqAipj3WZH4G3mxPNZ3FAKnBYXYvB9YLuVe9goD1gu5jdzuooyHw7fhD9b1wMrTQQg7NZ4xAHxK6qCLH8CCA2",
  "key15": "Y8e37qSMTo9aqhU6Lytza3D2mjwkws4XZx4Bs96yukBJnewCtj6e834TSLtiLzxjoLx1GdebPZYp5qGAJoHfATP",
  "key16": "5Joanjo4t86s63bEGvcY2CYKXHNP6KtbwRzSbG343ZjpccHJ289NLLa2EmFsu8P9UTN5veYSx2qS4RjteNLsqujn",
  "key17": "xtdzAhsBCRTM6HnbzEfGEEJyXynnRD2UsstGkf3NGpL3tsQchWN57odDRqfFthpuk3E4GaYnqrxWWtV4KiRiUia",
  "key18": "3j5weo9q83zDYGgpLqrPeQSFe5K1cdhj8e87HreANaD8ZkcBDZ23dpWZUM769wnEcddDkFrJDGGT5hArBQTvnTjt",
  "key19": "WFpRtEduYQXFQQifh31anddHH9rDFcySf5JVPjduejRkmChL4pDAAM4u84fpghGvnRb4HEeQGgPBPt5bzPLhAn5",
  "key20": "5mm4ckw2jSoyAg8Pfiw82CrxHpbY8611AnJ4zm8Hn2yKxangFTWZp2corR2BVUJbWvJeyz3yZseAcGNgKAen9NaU",
  "key21": "35gwvcp13zy8RU6CwWLpoAQmpJVK3nRcixkTxFFkQE4yXMkv89BCWoCA6c5nhBci9HZ3xpLKEVKjCGHjcsA56wZu",
  "key22": "4qC9NrbqbphixaXuYJHVf4phgJ2TZsTxcmoq5KTAoqbWfhiZKKHxshqoKYyZXhQv7FiaTavF35MhbmTi7g7Tavma",
  "key23": "4cjzs7PP3kN6434Px8RzTxhRJP2PPuzu2RddJKa8FD56QJ4ZucFBE65tJJXW8Gu1KEj1mdQoehQkLCQeMLCQC87e",
  "key24": "pS2FhfBUk62WxBiTrho6Z1xUUie1ZXqtouFy2UqqciRV8mLQFEi4nnomAq4gpDMToV7pBcduppsPPbx6i98Fjsk",
  "key25": "3QxQZXx2xgG1xdX5qPd5PWfe1yWHvowqEmdNN4kaGY4hmv3xCDz25hWk2aXid8V7e9R6LH2QTpLKb8CSH37fGwjH"
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
