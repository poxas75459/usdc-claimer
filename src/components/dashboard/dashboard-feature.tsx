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
    "5CSkymeWGRSUd7GDN6QxbX9EnqYnh43Mr26QLJTyDJuSmL4SmWT8jzJj1bBjk4tCb61SgYTxhdZiApcsBUfqq8TM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xktkQ55Khrr1gRMYnxFSxAq8fCt2RPtkjRDMowmLa8FtbapTf5iZn2VHgfpBdZwdKhfpEH31NSRK8Rnwa7C7QmQ",
  "key1": "4eM6dBpoDGgcq656ewfQHhZxbe2on7zCcQvYN28Dy53rNYq9L69KdGTLiyytQfFSnYoryHocj8Xoo2LMyV3u1w4S",
  "key2": "5jVxobouBU1Q1kTJGu1KbeWm6XmyuM7wBhhbj5SNkVCTNf2pWvdi5dxyp149nsoXmzmgBEpThh1UofuxjL1dX1pb",
  "key3": "4EuypU6DUNGu8FMTJUfYUQLd3pYM3Vu2H1L9mJNEdpjB5G7Kb91Q2ogb5qZGSBeER5ojv3cPLF3FGc5GWpH6JMsZ",
  "key4": "4Duud51V4PL1KJe6shCGnsRzcgULrqLoduuqozFPTErSzS5eiB4WaWRbfBKgUnFbVUJPrVCNpuLNZmqwZRkMQWfz",
  "key5": "3QujqaVaVkegunWJi2iuPXTzkwDb6kRJ3XANfP4pWzsXzuf5zxLFRDBczvDRQhsDHpv6HY7BeYAdPvBmJE75apAW",
  "key6": "66T9FmFV4Cs16NBqrwZh39Mga8wu6yjh1JGHagCtvM3rhmoMnPwea5BHKZxfTujq3PVse7Nz7T3HWyZy4upE5SeN",
  "key7": "4ty5kyw1h4ndZBmjQtK4CwBuXH6HRYrzFUWNAcfyS8q8WnCV46t61u7EdgjdjLomXHRHsDZad5LTaLSBftv8QXgt",
  "key8": "49jzFd9pwi2fMtmUmCGUNkyEaFCRnJuAwkBzAKhxf5ZUAPsa4i4LcDdXY7bck8E3kY9vvaya4W8TQHrcPgSEcMoS",
  "key9": "2LAZngzkHPZxnKqonpHsgpgLF3FSAXCuP7dQZvKQgoNLHZPuwAriambRq5NdmQktreQVb8PqaqmzyJJxVCyQ8mxb",
  "key10": "4RJURKs1hP9brsx8WDnTFr59yzLVp3qgMpZGYiRUd16FCFhFStTFSPEJteXpVDvBLgz3Xvx9oeRZCm9bpERJhf7k",
  "key11": "2PbD9b8NpudSE8TPGtiHnRe87t4uWihg3QGcgbfxXN8V2CRY3HyQaCe764VHwkMqRvA26a3vcQP3o1Hsc2s1HXUb",
  "key12": "2bbW26SDydqmXiMoDuh93Mi6P9ccQk9eMi2JgqnoNhytTzsXLUH9UnukN71S9YwZgmXtBMiJj9c9vAoemMEydqGF",
  "key13": "3X94PdFyCpVCmd9Wk6UAs3bJvTvk3pYaEWU1yzYXhd8nKXJxsLEmqvBBGgxs9AnCi3fD2Etgmm1rNmND9bxs4E98",
  "key14": "3Q6D123GG7daTvQ3Rbv5sCRtQVXkPFUc2KnUmwQNKeguLYUcM1TyVa2gDR13d1JQLaoXEtf4Gh5ZWcjFrwTAKQvc",
  "key15": "3gBCdtsqKwaQRWqD3mbNExaGCvDMgCsM9b77TgNtRE8NmmMgZhJeLj1Bs7E2QHVnSShLiRLYH7xgMxXMnTd6713E",
  "key16": "Nf5DcK6YQKiasrRXoZwnkxZSjrvBrnLBpGYigH9wyKTpuhT52zG1FSoMzMH25tgiFTEEwgZznLmfnYUrgLh1NxP",
  "key17": "eGProMyyyNi3wwRCwGghpxLEzd3VApVoYqSTXx8NoAyzS2NPUQb6YsEUHHrad5eqQ4bRJz3mCJW1G3zz4vCGKPp",
  "key18": "58YHg2aztj6eAjUiR3sxbn9oWt7zfSzCMYrcxVkigYUbon4KCXnzW7NgncF3RcG6TN41JwcpjpJbCmoWo44UJWmD",
  "key19": "4o5VYD25srD4rNuZLNGb25hAyRbReRKnxnLCAfTYqJsK1rLRMNv5nGSMRZMiyfCckLq3pvYhRjr8zpHW6ATa7C4b",
  "key20": "3RpW1qmP6s91NrNLPNYUXjUtAG7NntM4gHAcyJsiRrDKBJw4YpRxQqRFWiG9Fdkuc1ZEH8sZWNyXfY4Wj6Xg9HHH",
  "key21": "2jveqiMMtySgFqyvDWngQFyujaJnqctv6zC5tgxCq3iPQSAL63rV1EstN4GNUwNTpxAcGVKhe6hP1bhRJNgSrNme",
  "key22": "eGWNmVwY2Y9K1RtScAFsUBkchhttBN16nAqdyXad9F6GHrjdxN4vrE5CzkgtRixTusC3nphkp3hpSQYgRGdVbHK",
  "key23": "4QDfTm67EUPoCBr8RwwMXQ1CAY7X6t9iopkQHWzt9mJBugVesCvgJEcL6s9sJVgapArvByRaPNG886411h3GkUfJ",
  "key24": "3K8CtjzNm4TDoATQ1Xx9gUU3gqs4uNxn128KXoDbT4fQPX2MnpM5rD1BQxtz9ofxb7fishkomYMcrqn7gcivvgN9",
  "key25": "4FmrbnKBoQNcRCbgNqqLDaqyJFZ9kimFDmCiiZQTqDd2BaWy9mw6MMR34XAwe4Uta89HextpwVKjXSebW82i4kyC",
  "key26": "3mXAvpgFdQ4XnzodFVwqyNMDu3T2nG7EK9wi7SJMjr2kGXg6LhHAsi58LLrP5jLf9eyip8HD9pgXhruHBtakvwk2",
  "key27": "3tbKUB653TofoYhhbd8Gu45og5UGaFSaqavLDFjgxARdZTxR5TJCHzSGUVZm7nd4SbSXZKL874M9XFphdFywsvBb",
  "key28": "3kFAoKmU7Aef9friTW4Xa5ui48FrFU6q1eHJQdGDVCkopgfwgjQH67SMd3W2dBQ5CEXgc4JNzUCNW7X5HtoLdCe9"
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
