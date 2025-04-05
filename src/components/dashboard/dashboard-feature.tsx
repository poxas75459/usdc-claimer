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
    "5xd45cuSMb8f1xPR6byVPgz6ZwE1TMqBrf5RhRJXxy3SigdFqG1unrAqJBWcbWg7fL3y7Sm57u3CyCevYbp6HWth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BoayB6svaHHF5x3irxgjDoJX5iNpMmZM7w2QAdmXeKCLyibnHUo38GRWpKP2o6o3BTfckxWLfhfy47epCEiSR3V",
  "key1": "5GkiQcqYEt8juA2k2SdW9rhuhawYu7nMogxdxxviLFweTtB4BAiimp9niSV3ETZXWDtSJXhQwdtMm774zt3q7MKU",
  "key2": "5e3W6oNi31PxDmrTyUPAyuknLkDCXKnZHWMiUsRwxhnUFbvxW3tcuAiqbPhaBU58C7if11hmkkFE6XGWAEk5nypJ",
  "key3": "45iv1scpeca1AGezLZo7w6WF2zT1ZNtmGVWjR4REaMBXTEr9H7txaG25Q6ukjTUMQe2NcqeaE5ywQVJfAvFsRj1R",
  "key4": "bESzYnh1MzTLscfAfhhw9ngMZ9fszbpxq6zEjibVnbRDYJXD2AeKNhVTUVyJ6YK7YXhJQMfsXeC1CQBvugseHWM",
  "key5": "2TpwuLb3HCiT51PqxQgpMhW2juJw9ypH8zmxsZK4R64rqFEBTRvo5T3CbtrucHJNEmu1qb69LnpCMGj4nRxXLF5k",
  "key6": "4ibi7SpG9ntBzNNKsJLHmZQUVM8JoA9DMWDL83KRDtXQM7jxJbotj2UyzLb67W4qR7vGAzdxcoNuTQoXQSKqST7i",
  "key7": "mohiRWCg18BKV1DqKsUsACAyutCoReRePF7cyjRYaVEvxnyXeH2dcGsc4WQ4ZCgB25osYJ89YKFhmxowdqYPsms",
  "key8": "3nmc7xwjChjdtc27xyeY3AaHZvK9rgqALPTr3q5KyLLqq2wAFL24CsNXQLXyiioJm4YpPztt9SRz1VgpMdW9Q88b",
  "key9": "3Qi4buqp8EihyeBGLEvWPnWZJUtFN8RumMHRTqt33vzQT5Kgo9awSCsVL8D4ZQdDxh7a8Rjusz9hu7YrXpfZFJ4p",
  "key10": "4oodBZ6fp1fK4EUXVCM7nCR1etuHfwc35FkA8uUyTXdXkZEeX31zvSsxL44YTqEFsqvcsQAqXzyTFSP5YtzYe3FR",
  "key11": "3L1YwGHbM973NozTWMvCyV9xr1KoDzVbuFUV695fJkateqowqhJmapVn3ZMfqrSZrZPhjE5fQk6xx6oSd1bofTDE",
  "key12": "34EUknPQcAoUAsdqxxWwYGbu6dNo1QDDLpc6m3AtFLgxFVhGPH7u4wFgwdHeHhXPuwGrwRZSGFax2mJQjQXLoYhn",
  "key13": "4h3KMWfsXwbF4tZFQ3vw6yNvxGdPrzp5KbFootwovgaMpPerb2ct9qvSA57KKMYDefDvctSLz627iePe3PRo6WWA",
  "key14": "372CxCdThGwCnYnAtpgYrk27JDxZikVuBQUak4aMb4g3gUhiDa2s2oocN3S1cLGJS97FpYP7FfpSMERfKLcDWCyL",
  "key15": "5yon9kXYZ6T5Ajq4cT6w6uE5pgx7dbkf8Emx2Ykted5yNr3YhJP7tzwiXZ1TjzaN9Zby8b8K4tkGZYAfN5T4n1Wz",
  "key16": "4tyxEKNKKnPvShFYCsFKMRfP2Tgug9LhyJNakimY8LBNcca58tqXLoHHjeXDQtmkVzM7S6ZiGNTTkv1PSEyEgYkr",
  "key17": "2XsgZU4Fgz5VLEuFPSUmSSv7b81Q2u97yaG39Rj8nXEJqUM6VDM84sBrsCYVehftb828iq5wsFMUdpUn26Guih7L",
  "key18": "21Qb2vXVkKnouY1QWcTvPDND3UiJbZ1aMbSdf8xkP1wSeD63CdD1YS6hzizPLVtPo6WVJdagdHBH4P7Atdmt2DNq",
  "key19": "4XfufhECFUtHCqmiMv82kMsaKafAgUJCWoUGMdooCV4NQjKYmZYoE2sw1ibEHG62PmnjgEApszzaGWRzBkYYKdxC",
  "key20": "39Cd81L4nvwErUfU3TeS98vcEttjig31foSKoGSZ3oZvDkPefJSDYEF4CsDF4xkK2nPhaHMEeijwagsf8NEFEDCM",
  "key21": "2dSRDt9cyp3uMfgd4AwfeGFgUkpzW3KfcATvD2Njk5JCe6XyPyoaPNW8MdSxcTZdGGbtnr29gCBsxr4WN2Mc87cZ",
  "key22": "4yBiLqk2vh3oPmo1xcACJL3PtVjBLTdCvUwtm1YD6ugHNmD4BmAWBeUFmNMSVMqeLfxGoazg1QbF3b7pRsh4Dge1",
  "key23": "3fBbhrEMh5b3fZz7Qb1mfjhM8EKsGr3H7UTHyrXayrd79kuKZ7dsgrVLV9xjrqcePKKRMZSZWTe7BARJohvbb25q",
  "key24": "5TVt6yAYoKMNuVkk2e5kM4jNoME3XPRcKLjqpHuncAb5NqtBK5KG3izS3WkpGftY8ynA2moqLmDBnzgX2fbwFtw5",
  "key25": "6Wz6o56fDEZs5VvAJqf58A4BonA2BTvAEqHiskiEBCB2MQFLzDxZiraUyejzaUv2xfnBjNtjbBMRDc4a4F9zA46",
  "key26": "bAu6ywm5mXXRaBaViiSCNYf1ZYGZGk9UmCNHP7L5PUfL9JELWPgMZ9JrdLasD1Agni69oa9hSXguVhxSWKLENxf",
  "key27": "C4Zst8aWQojk4FjATPA71d7ibsusQLF2b1itYg8GzYT897Xm4mVYm8snxDkCdxvBGxk7mU7185MJYZ7ankrwo1o",
  "key28": "w2G3SsMBrmD8AMVG4j2KsXnrHt8KUybAgN9Cn7V5mz67oKWKqThCpay55DHB2Z3hUnjYdNc5Tq2dTGLi1yt8v1y",
  "key29": "3psin7rMfTfE1cv27FyTMHnviwoZjvyg4uiMCamUCUXwt7mJdMznLm33QmUCfyxe8eTZPZ2DwauyYEjaQnfeW47k",
  "key30": "59DjiQENnWzjK2pDYRP6XcSp1d2yyNwwb1bMv4y8SHiizjE4TvHyeFh1K5ymsVv9SohtoVRAtdbT7KBz86yHLxaW",
  "key31": "5yZ5NQo9GZMzxgDUn61WSD6d1PQHWdAnDZd8jK4GjSTjRb8uzao7yUNyDoBy45rC3sTzmGQPiJTCpe3Ab7DfeaD5",
  "key32": "5XuYSXi8MQGpqTK3x23DeP6FgLuXA1NoE8hWJyh3mS2Dg4LCWYRJNLqxJrm9LXHYenvQm3Qk9gUtjA9m6cBemww2",
  "key33": "41az78bouGa1GpxGnamyEpXY71kVZ5oRqBQkBBJdpsos2NQjYFLWN4vsHqiJSauzxYKonwh7weMEyrXeuoWB9vPy",
  "key34": "UfQdso7nWEe7XNZ1RAWeACRr3h4F3uprwNxHTihzj6NxspCkxJ2AUPuvmAyiaKREzvJ5N49Mqz7ajRQ1RQqJWJc",
  "key35": "4eoHxEMYBWrx3N33ZWQHCqzrwhXETUPkJDAjLdqnaNJw9W6mCthhcS8hWKSJGDMevH6QDDLWseNum9hc7RVGKDV9",
  "key36": "3ZU5dRa9vvJcPekw97uxWh3V263JnjPKm2TVtBjwkknHVEtpnX56VS8tqDu7vbfMVmM9TQmoq55KPsYySxDegKhV",
  "key37": "2rLewv15E3kRpr8cSNig56BJhhHBdRa6LCFdPy82QqP3JC3T4DJK7jmmcWrSC9fRMKA6BGqqYHDSobyvbZDwxE5Y",
  "key38": "5zsJdzE4XXBpWR1xq6ypAiYmq2MndRGYXKmSj7tRvDjWwPnQcqsfNjCkZk3tXiGHbrJ1eE2TGLxCSuGyfjCqZuJ4",
  "key39": "weBwQLgMi74y5h9whjCcZemve3bJ2sZE6gSaspNNA75YnHqW8nFFMxfeye1YNLDt6fAkHNzywiBN96Fm8zRH8Lu",
  "key40": "3PeccUzFuqkwvPKFBd2qnFtGyogK8AXPAYzEywSVZbc91E1gMZzKtuN2f4QNAm5e8abFN5r5fwQyDSxYXyUqZ2A4",
  "key41": "52ZJ43tiRryV7i8mT7zH3fK1pjjygGJNLNZM7jP9ZfDQMMujr8VXYNRipzyzyLSKW8UrYBGQGqcSxe3htBoq1kbv",
  "key42": "2WNVxmtvrexUe89coXtJb73x5383Snqk4nxaC89N9VeuFXc6Mh9dTjp2LiiCexqz8iwx43rRJnRExTDTYtVSe26v",
  "key43": "e5D65NzfJL3qtrCDELPp9db2LZiXyRDM9suJXx2MQDh2rtZc55eeBNHebxuU3huQbLF6PTNMnNRowbJNJRvTS3i",
  "key44": "3f6Wd8d9sfqUCk6NYHn9D3xgM3zpRdKHU9FzPLWxZT7SNjFGyKBhG3ShimYLNnVFCNESS2RERdgouAEte8qadGq1",
  "key45": "ztrQyUFxccTciZsGzdpsbMRHkeDM5HbLcBbDbLAfTLdndXDuCcTFyhxQNixmvE3MTGsS9bVJqTcbFeUUqbehqjz",
  "key46": "uFB9D6WWWx1msmDyLvGWBQLLmzhHEvjPPdaj8e5RveB2fF3qq2eUNyjFjoWfcZZn2ZaaWGL1U1Wqb4QthMAGjin"
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
