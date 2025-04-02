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
    "5fJLTjM4hCpzoJaybSm2WbderUUnaz5qrGvmifmdhUjpdWFBYJubMfhyWL5THiQrXKwjRRG2zwHVfizPfEj7hjH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FzvjogsXq6rvggvQXJVnfGKCgc4ESSuX6r4YoQZjKJkrS3NJqFdkoEd6sgvKnHyS5XWkzmapAHgrEJiwtsa4tqY",
  "key1": "4YVQFqW6Ab9tXgCWvs5MukHnQyDQHrThUhWWN9mDzhrrDTApRSENY7qGmFJLj2fvWvZ2vfHrrsFB415P38GrJWM8",
  "key2": "2DPMzTCGSMxEn1gmqLxsmn46bcKYC8ZAs1NfsTjdjkWyUR3uPrdHDeenXpe4mFnbZPskaD2YLta6LNegMLfsNAGi",
  "key3": "3uc1KYEAhLNQbgFyCMdy5cH83Ni5TT31mzMhubhXpFEt5MM4JywELRKmiLf4nmeA4maKi8qut8FpJCpnWbBqUfPA",
  "key4": "2TqGhZM6hAMNHE26ju8mB3ueLpJu7xeZYt6Yrm3mSz3uWEw8b9oZvMf4tVfps7TFoUViR43xKmpeGb55X8s9c8yT",
  "key5": "jJYawcySU7A8UkF3oB3N4R4SPJWYac654VE1bg3S9YGrk51UUtXdR3RL2eyeuYWYq4KYG7oPRT99Cf8hgKHzc3t",
  "key6": "gHGehgXtZBp7C3sbpY3FzoE3DSaxYUuaWd61vAeasNH6czMxhXyfRF7kDin97v761eZPWBUECyuWsvDGHu5GYv3",
  "key7": "DGK6VY3719ezK61inPaqTQdeuv1umnPbVrzMWu71HtNfWcg69nKPUajVkJz6gooHPFi1FpNPkLBps37szQQccFe",
  "key8": "ZAmJgpQnTMh5ctWNj1z2p8He4guNVtLodr5bCQyCYSxuazoxEscxN2muZUgTYZ9yvYEByHUAap3EQV8P2vymsdo",
  "key9": "4XACjk5zQXUQbDnWxfMqeSpvp4LM3dwn3MqMtYXnFpAmquccfkBwCSvU9DTyqD3QUEujeDWhu43G47895oc69d8H",
  "key10": "dRsNmXK6M8rdL3XtnUTAB4Yf38VQBDvXfymzp9HjcQN5niDaDUGWJGbmXubt983v9zNNTBSND73LTEubfi9rSUy",
  "key11": "3F9yccaNDztUmaMtDuCUUcLz1ur4MhT7m6KrYV1BDpwEwTeXribSppTUGaTtJxjW48CzaE628ZaDuxmuKpKdnGEZ",
  "key12": "3pdcdkJfXFNtgj3PaLqdgYCA9dPM83w3iri6yMAsyHzQykZLo5neL8Pa5CJEaMrmHiMM41TYQ5CtZmvcCYsiLwWL",
  "key13": "4HLTxV1FdvAGZ7wbYMTeW76pXcyuhEbAXmNStFXbrMNED2TNeeX4Ccz2KAkHEBAhQLb6eMhmrG1UbiDKytRDZVx1",
  "key14": "5b84AhMFuUEzo63xzyqWnMVfsiWt85HKU4FCAv1d3rnUbv2TfCzirMZCznA2B1wtT1fjqXfkzBsQhfx5oKj3DW8a",
  "key15": "9fiFP45Vr8Zobq2SQNn2ojBfrTzjsLzbeSenHyk2qs2bvE4tCV83k8eZqUUDUZWBN82crta7LfSWEVaQSmHjprm",
  "key16": "2J17JqeBj2d6ucjf2aFUYm193Dm3D3sVbcZSoFoXm6EzFcy4SqPKwMoh7EuNoVxUBc3wWmghTYKfs1hsGQVUZSoD",
  "key17": "4CzZNXTpjRbnyVPTD3junSx42Jnig6bFLJw5Mnw594TZnnhsHQWjw4Xw335KM7JKCvmXrpcnvmEKDBqTEPNuyfLj",
  "key18": "3RXTbp4zA3vhomyuYvXZWHRXQmU3BScwpW9UkF8HyWFW5uCceK87F7RiUNZWjmhscLX2vuwWRAz6WKbx5MAtMc1Y",
  "key19": "2KE9WNs9RiEoZakiknoo4uXgHnubcFtQRajFk2bEA647RHDandwFb4a7sNb8wTxX88HFXJSJsHRgMqTSQtfTKUnJ",
  "key20": "4u4MgGkqjShcszHJQkcdd4eLXY7Hz4uuyfSNJws9NmX84bDWADa4fTuUhW5kierMnbJ8bu5xaUo8o595PNx37ftp",
  "key21": "4fwAVc1EUed5xvbdtJdxAXL5ehRH1WcbXbL9CjGYfmhrcJ4wYwzXESQ2i3BiAzWKGqf6Lvu6qRR5NgwVchrtsZfF",
  "key22": "3KmDLsZuPJwFGNr7Z9CJzdtRiP729fohzvQ6Ckc2rXaN4LTrGnAUP4A8QjxSbAV6T1FsjyhhGoyTyc6WKwWTbH6q",
  "key23": "4ENsj464zEeVB11DgcUAYj15jkVd6R4LThrT5XbyNyaznB7hd5SWJAaJCXXqtFZG33z8DtDhFjTMYAikAbPL22BV",
  "key24": "29j5nGpgomFBzu62oQdgCar8QCVPAVt7cdcWe8g6D8dbhr8Cgxd9fCZSuXkECaosmdHiv2aykJUc7goEtq86WNK9",
  "key25": "44GCxZfeTXDV66E3HcPK1996LwKkpCQbrna2PJFm6Pu6uuXrUg2pmYNMQzNBTUPJRtzgEEVwNszLi2hGvtZ5FjDe",
  "key26": "2jDhd8rr2bmNGPaGLD2E6LyNExeyEL56bS4bduC5rHdUWz4xPrULRaRFHZk2ZSyNAsE2tc6eiyMgBRNpu7eMVKcY",
  "key27": "AFjGn4GzWNt2o7frLtaDqVXJBZXGk43w6UWnytNmtMQ368658WMKBS9nzwaSkMF3yWLdzAXnkhWsJLJpLLVfCz1"
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
