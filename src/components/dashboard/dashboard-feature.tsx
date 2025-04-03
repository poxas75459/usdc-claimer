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
    "5GCqdmi77ugTepAJsqb6xHUq1N6xU5NbQDtnCZ7Mioj5VLsE7cwcvH5jVQi1yQqsW57iA7g6zNiy361xxE1awhdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WCSqoyfzFWqZfQ7PZpqfgoirrT5DxV1PSf5jfADJaPPuRKh8NKVGYA379Jy1ApBpd7nwLX7y8v5qJAwGZvfS3CP",
  "key1": "5m1D4XZHGyqNrhMrzY4efrK6UxKrT8YAzKrrgukfr7ucMqydMNN1pyKWG8rB5yp5cUR2ybYWh6R3ytuQvamewSfq",
  "key2": "2JVgaViVzuRzbNtMwYGNkjh76dhN85a9yHQ9eJ8c3CQVzmKmLaEmmNmPiKQRTRAhE4KspcsVAekG856tJRvzCAj9",
  "key3": "5UQt98tZJPWGAuhLNM684TjEK3Gt38a3icqWiQiQcBrMeW1FQfFZDRRUNcXvA716E3ttQhNF5xm23DJjat9cXD8i",
  "key4": "2fjCS6ZvRPuFQQLvesForAQXgChwJzQcMawwb9AMVq5xxBXXmBCXVSNYJdWJMg88CS8nJscVy2DjCoAyMGTM1H69",
  "key5": "3ZyAidCyBp8aSFmBwAUKsd5bQvFJwxZZpfVxHu3nkfXujDW3qfbk33PUJDvsx1HZtML7b94AzK6nmQMAsoSBYkU7",
  "key6": "3uWHskRSKnE5WUiZSCRrdNhe9efza1U9WZYwLYMVLbpdg79uUM13BiSeVbmynn6KzQqnEtc8wVfmoBwr8dR42yci",
  "key7": "2njFSW7NA6SchZtgTqu2K4dMrMQWb4YaEuGVPp2Qk9wpiLra5mkBsdxEQp5PuEpTXxCWudhzDGTUWEJHgsRc1RuS",
  "key8": "5aMPP4LgdoMcoKVePiRz1FVnFbHXfeqXywEhjcYUzJytLPWEQs2ThA1girJv5F7LyKpfHA8qjQCfqnH4mMRCy3Sn",
  "key9": "4s6pEkJo4FcHTF3ahX8g22Dr6ZQPM7ig8XHGmZQK4UYZodzcYCwuv7LjBGYkua8nVcTEjdJHA2zBVwrjqr8SiaUF",
  "key10": "3LoWVNc3UPenxf2nrc1Cwrx1bSGMwS4E8Fo3FxafQqotWszqjFF5VY2HjQqMn3oJf7ra2Eq2ZCR5PgfyhTRRXioc",
  "key11": "4tGA5CjtyzeoP5t7QCw6BEzgNLR7rZkUng12XaSDK6TRZJmN7jJ1aYrcqNVkxXyLJvoY9NnSwCdGUGUkzxa5b2SE",
  "key12": "2p1pmcvKH1zXHScHQfmPdxaSE4QvFefZXeZEw5d7pggBUnwBn8yCQUdNJ3gFgQebRRLh8oW2K3aTXrQbSdHFmYtP",
  "key13": "3qM7vw52s3fPhD4oy8a7ZjqcpzwgxRJvk7GcpDtDFXr8EstgZEtWJRvCVfHQ2bmmX5dFbfAvFsHnWsZUFuScjnFc",
  "key14": "5kx3s8QKefcJ3KBqscFtuQa5AgReUhicNHRhv9z1gQPTWuATLk8qi7EjPS1dUiQo7PkAisNz92Eu7JbCXXNdSAuu",
  "key15": "38Hh7cNCSeG2FMJwp3meikHX3xFZLp4WaSXaoD56yyGTaxYHhENg48vT18PykrQCiy6SLRpSbytU1yhjjfHMWu3L",
  "key16": "4DT3nqwH5b2791hudqFBGdKeAZt9Goxo467mvdBbMSBpu6p7skUiJ6PBd5JBYNmQsqqA8smXoJFbwdYpFPZPCYVP",
  "key17": "4wa3zfe52LBimY7VNrTZ4PGPtgsBhU734uLr1jeM21Z1ZK8ekvrGk3tdQU9uZe81ZWHwfjmoxAaCSi9cSUphNa3K",
  "key18": "2myGZQT5ge1NFUtHp9pYTwMdA9QbSRqfEE1m7hXcvWh2ZCFq4XcHSGZPXbmtjXVx1hGmA2Nrn6ef9wbfu7W1A5WK",
  "key19": "5m1YAJ8qVENaHsRDQiqVKE4CLPLYG3uDtwauN56DFsdxVnjLRJKNuy1TDGTj7CbsipC4uUrwymQ2EHJnenSinKkW",
  "key20": "2LKGZu1KgRTHNoNv23iFYboyhbPtuGYeNApNaViuvB4W29pDeMQEhrQwCASphV7jAQL6n7ncudy68WHQxiZgnvH5",
  "key21": "5RUc9H5XsA7u3A7rxQjGuEEVKbwd2s9xncJYsCGPNa7HTWo3iRhmH6reN8TBNSYVrtVXF9NeS7SCLBY3MgVh32DJ",
  "key22": "4xuU4z2g2SoZ6wze9Brm2TTbGo7UeoKosiMku2psFaKzMoFvhXuWi2upYvDPk74nS5T7kYoHSRg9cPdN4vpyMaYa",
  "key23": "3Jj9K9Ek6dLh1E9RUgFuqkSG3XecwUp6BWFVTpsFRZRaWq4gtFAmWKw8tMHKGmTfQQxQqvdUSGn2oaa1TdbsA4ya",
  "key24": "3zAad4sw8KvphV6U9CiAXMWRc8DmdwR6E8EQ1LqPhEFJWyZErTeEAosqbDU8a1p8s29rimACtTkc8a726RRrwzAi",
  "key25": "38j4NMRucd5Sgrx4BbsaNYLGi1WrguGbasXheqo7JUUmyUddQ9qwtjTsYVDuok3rDCKV3hEZ5qe3FBP2YSRcZ3io",
  "key26": "4roR8XWDvMiNs6Ke3k43xswati8j9w19RzX3WAuUTgWGoVUgtXyXKeTU19sJNkp7783b21uw5TWgXtvhmYQ4qerE",
  "key27": "4jjpjTGhM74fFWmYhQ47J9shCQmCZtibWTjffWmXaQpQwFTHxgBXMf39k8dHuRVtSLrENZhD9FWNZ5SbQzsaQNh4",
  "key28": "5VVxH4bRpiXbfjN5hjhM814G4cgRpyG1TtUcdjxiKE13Dy2MpvnecXsAdXciXWfkQHfV2v1aMWywV3NgVF8BgTHK",
  "key29": "fQVf9rEzgaeS6dx5rGA1HaadYgPwsPyjTGbdqe2QXNfR8r24CNDiNRs726h2jwoArWQiHoTByW1zVJqYpCU4kYS",
  "key30": "2JMXSKZDrRuv15gmNjTQUZCEUhPnYSE26MD8HAYw9UEeBasMjsrWVzDEoVkFoUgA3KMxHrbietYP2znwTtD1sa9y",
  "key31": "hzTFedEMnyZrvXRpUgFjuMShXe6cQ4NW1VbQYrNvidggzrFREqS1x6gNbESqqwp35CFiT1ZR1Bh8TFGhSLXwbBC",
  "key32": "4izjEzNAdujrd8uY2oYcK6po9AW8r46yPQTfYwEZMXurZjDaHuWCWpEbfQLqSVUVSJYGwq5g2bByvYQBVMFAjxcg",
  "key33": "2gb2T931SqyXxW8aDvoh9Y7nmgVoHMV9bLdoSz6Dww6zpZBE6iANqRomSSsG9kymqu8AFtjGL6iPGkaErK38BKxs",
  "key34": "4j25m7zZTWaSheQnGUMSJJefcGwRAesppHLQkafiyUr3KSKY1Mc1Ey7a1JDSDTotqmsbJhjSE5wd5qTFscnqnDE8",
  "key35": "3YVMEzyaqic36TYnJ6GWmQ8H1eNwHdELogUCMBfytvER4DWHYDpGDCTxP6usrr9GMknNXrfiU6K14ihVU5KoyuVy",
  "key36": "4hBTDE7VpxYCuPJfszaFaAiHa1bYCndLStNrb8RvSAyLw5pB5xpTqycmfU2gE6CsHANB1KCRrEbemkv2GEFrihok",
  "key37": "5XGiG9JjXQH22cDEUC9Rd6xdKjhgPBjPvsR43DBRxLHFJWaRLbR1bFC8fNtn1jFjovjoAh3e96hzST2NFjH8LHp",
  "key38": "4VopTU3CJngS1aWs15VXdUSRhwUPDvt1MoUXGXnKWoWcXpWt5RdMsng23CQMFWXDwgTUjSXkUcTSfSUBoxokpyyr",
  "key39": "mUrfDUdijPKUbE7tBGWaMB1Dtb2gChUYZaBGiP7AX1BB3gXfnYhaQ4Rrk78r8rTvbZT7ZY97hweQXtdi3Z7QChY",
  "key40": "3sN4r8jxrNMEa7A7D7ZQ9TUHfbQcZNxiCJuCpfbBnzhi5M3n8ZCkUii6WADb2mhEHidSnvBybTjEBeZ4TnywsGvD"
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
