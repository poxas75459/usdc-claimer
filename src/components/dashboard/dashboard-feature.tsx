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
    "42dojZk8VP2qT7cW89VKkuHB1N5gSSUWjHNSMSAy41sQzLabgyFvy496pqQKAkkcKjBDWKnv2s3PdTDFk1HEfu26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e4WrADyjkPmNitwmDTH2ukC8AcN1PurnSPkZVfYE7rXymVA5iVks6X6wGh1Le74vCnDRQJKVzTEHCrDWHJhJhbp",
  "key1": "2ikQ52TRZFCCUotDvmdubRwnEYDnjsSZmC5YhSBQyTwCCQA4ucLRQkSQmLxxaFNyrTHnZJ4U23gXaz4QsZDBziaw",
  "key2": "5W1YecjVXFG1zfcrrdKG336s9budkfmLrQMGDDxzxpFwuVo9aHqMEanhJdnWqo733xzTN1vJy3nZtM7zfyToTV9w",
  "key3": "2ru2vWBLRnqCSXzEthm5381HYXhKUPgXKDn9gFykU4DaJL9TPCULnTyv88ZwxpzvSYteFHrg944nUKA736dtN2vG",
  "key4": "5XsE5RGV7fucrZZkitaRCgUK81LVDTEJQwpYL2JNsE6z45z1brFkYjBEQcPgquq9AqjBNzzT9HNLQVVaFK8LtGBm",
  "key5": "3SNe9yRUSbobxS9LhrHG8cZeQjvsTfL3V4MQmGCCy9nRV77H8aZ98pSsmoa5e1wwBMUdwkr9KnQpcVeoS52Lry3e",
  "key6": "2UtaRDRv76S12nLLGnZxr4oqHdnhLtQyVL7ZnnqwLoZXQZyVKGV7zmv5f9qE4bq8zjKKdtcregU8jU8jbN9m55gJ",
  "key7": "8eMABZHBU2j3sPB9B7Qmk1FjEhxztdp5rir6NdFJWuNMKBAQ6SrqpzexCsmfqp2iBVfAWGSNkKLEPbZLxZKY9DR",
  "key8": "3nL1r13TxoCPLTFCErGYVZazMkgwJRixoRcV9LbyxMBMfWydiBRKwf8YwQQTMiHpHwF9yXesAzFXHurFm1xWS3Ax",
  "key9": "4Y1eK9PaBCyviAzn4PCHhZRqT7qDUPm8uqv33JgxZi71mypVKGr5XgPxwGXRCifwoTYsD2Ndwz3DznQWbWH4dFwn",
  "key10": "2DQir1pywrdBz64syD1jasgoEmDnGPqBD6fG5XUaF4T2Fpf98eRPgn2bNjJobDmJCWeN6stXZ7uqpFH7SUvPdeFZ",
  "key11": "4xez2cecnE87XKEiPYbtDb1BZLG6V79KU32ortVLeH9vJuCvyPE49AqWoU8D6mefvXWLT29ZGuWwF5MpHaqBSvzC",
  "key12": "4dy3zWLEo1bKQGDta4J2s5vSU9gsKPcDNGJ1cDUTYbepjb9fQY6i6UMctbQBTyTW28orVQ6dhQBmwuc1ReGSmAxu",
  "key13": "2S9BXqqqL3gsBuogBF2m4p3pJAJeCJtLXimDZ9XStQPj1EL58baujohnPh2HeQA7yNEsBWCPFp8jEg2cJnzYhTJu",
  "key14": "5YKtr5si7MyHRVUgwJYrwnqzUsNLsKNrAqmAVCcb1NjDJNGNJNSjpxzXu9ppwz4yHi7a3sDZiX9yGE2GhLkUmQY3",
  "key15": "uUiwT4MbpTXmGscWjaDgW8QJGvGBKkScRqoGBUpKFnVBeWBV8AdRJfQ6znqztXCneX2SgayqZ3GUvNeMfeFCbp6",
  "key16": "5H2UbL7sZHDcvLtBxdLx7KwWxgLND6msxsGbqAGTcKHr9TtjLBqRw1y4t1RktLBdb95XA1CEBzM1y6DP2H5rop5A",
  "key17": "56mY9KcLx4MJsXe1sRxdR6HK3WSRPHzcCcaEdRuYXrGY1SNNCv5GqUUEWYJ5jNqeGRsqaBiHGk7YEXeUvz2ttcTP",
  "key18": "5GgNMeuPWEaXR99Gx1SQWHeuqRTwszSWi3ziJY81pMjQ1uETu7VEdKXoZxNRq5TpJyQS5UfhQzjSAvYafhrHe5r",
  "key19": "uv11pequU5LHMVE33NsNCpjzGMuRuvvG93x5C6ZgTL3HvUDarzsc92XsVWwjvLVMSsHtzBpkcG2xrScDYCbWDsJ",
  "key20": "9g3YjVGBC68GkJJHQpYgDP5gLb47iwJC6w5xLPRqye3VWH7y4pHCxY6ZNihid4JVJFdviGEWMEPFLDvRVqCADPF",
  "key21": "Dvz7WCW7edHGrjHq6CCc13qwsJUNGUD8ZxCLR6Xh5ABxU3PGyUkZcxVTaanv6BBAp2eD4xaWPmUjve6iN4mKjgQ",
  "key22": "3mh2rt9k87DN9BNghyejHuUGM2ZM6hq49fRgyKk1a279AG1Vp7itub32WfQMeyDiRmCDBjxwcYVHau33ek17GNBS",
  "key23": "2uBc9CxL83sbGyJPNATbusWbyofSTHakv6hBoex2Qb7EYPfgzZaWP1S4AM3CWHeaqPnrYR1YWjrrrjnQKzCkkCdo",
  "key24": "3pTqgxxQ6RgDqq6D5oUKGrbcHkr422NmhJXiDbJWGUEtCJHHmBJzB4hCyK4MewU7Xy1Dpo3tK6NY2XmVgYascVcz",
  "key25": "3tV8CWK7N5BA41hu1JLu35xfW1yogH4AntfqGFGfJi5ME9U9G7n9oArr1YoegcJCaqoRS6mup9pjwntYZux5rBLK",
  "key26": "3qw2tZCdmCjrCXaTKhoazSG7uDKE1WZM1iJGXch8tD9xGxgYWQMKf1y8pb5fecUKP4TF3Jam67nJwYv2WpHUxLGv",
  "key27": "cxz9EaLSGLpnD8HGPXJw9DtRi8gidAWNtHBLcDhrG5DAEcX84nbKCYKbQ9hURoVj1VLvmnshKKzuLeyHU4hb7Lj",
  "key28": "4hznfr3N3jqeyGHaHqPY61DGoDPhqJcDwiTgtWeBfFCcjrPHH7BgWSXhKFmTi8uvyLGRpLu7Kt3LJkKkNv1ygcvN",
  "key29": "4gWojvth6y4yKXgwEHaSVnTJSGWno3rXJRA9UsHwmdVHAcT1jDcA4XMtDT8zMACN8zDqYJuvX4nT1Lj3UGKfDhy6",
  "key30": "5MDsHSKaqi5TDgN2H7CTHTADvuUDxTDDSzxK6fE9HPovXdqHdsjHsUjJmi4ztzAshvNTHMvw5X2mJJ8MKmRsGD4j",
  "key31": "2EhL8NFWyzPcTQWV1nDwhkq9Pqpt6hi73qyjii3KbkRKBUxztjTHMqU2LU3vuVz8X4kSj9uDda4quem4ww5nqBu7",
  "key32": "3rkhvt1e5Cjk7d94mAqMq8Ny2326HgegeGykEJ6yDW59yS62t6pFWwHBkfoePjFDUCPxyERuBnXVkSKrnDioA5dv",
  "key33": "S9SJQMcRbvEuQ52MYNpEuNGt5qvpSmu3JjGj7UjnTDiwF4rJV5GM2r79M5TRiTmTMdE6KNbCcpfysMN5kzmc4H1",
  "key34": "25xcg6RNdu4XtTCKqeCuPVLx5WzhktgU9PBAXoYjJjmBnX2KaFwSAwUo8NyiP17EXjVNiBE1crjY3NYZ2bEwzqTf",
  "key35": "27pspQ2yDTLqpotEf43TwFf39jda4zHvYqKd7VyeuTtVfKeQrDVjzQsondDwZBmcJzoYAdnw5bS9LrecahQGmRBW",
  "key36": "4zdEWRhSb1r7iSK2M2gf8ychYNoTfxQNDhMnNJ4B36ZNxbAZiK5Dvbyo6W537wNpWjwFuW7EooCTfeh61iKDatkk",
  "key37": "67gmHLLFznw3xMUTpMZuyLTUiT2P4kGHHehF2hDSUQ2BGSkavUibPPxVPku9ZpiCjtaJRhkK7tvmioKY5Xpg1CTA",
  "key38": "5y3BDD4uwLcku6qubnvPem9AWGkFj7mzvPt3oVdbkzKKfhVn246QbwtypSZtsU4DU56uwNehni9P6PVrFi54Bppz",
  "key39": "4W55KA83PshqQmjm89aWi5cgK9TQkyszECVny9euHHiugLXH1UKwWpy1eKz2fbyghFtEvMon5ay13sbXNfvTH9KM",
  "key40": "3ezQebFW717kwfxnJT8KuLn7MpFbgHBsmvkyRdRh4bm2tLCqKvpnQWJVk1QTx7rXv5Hqnzki8Bxo1gAavxzzgi68",
  "key41": "4mFvWBXPMaahngo9WCaqdD5hh1rBaQRYdVBKscA4LUiDNkFtmeAtDdgaSyJisE1fyxYUAdmSRUcdakfv5gB6hzaG"
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
