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
    "mxyudqcZEhxf664Yomc1KFygaZJw9ai8wnv2mT97oLHTMkiDjhqF1mjYvosu2uTtV3fTKp3eLSuknCihnBxYWSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35JETAWsdq71y12RLeVsCGyTyh7AvQHdH9LYFifbFy8J9WHoYpTWqMvhxbt4e1ds7SeUFv8nUjdGWiUM7j8WfEtZ",
  "key1": "2Xrd6UUWyEjQkcFHawrCFyyuqQiEvPwaahZq4CNxQWB5cipmYzJzWtj5BLk7iz2NHxNFWMz2ReoCK1hVKznaqpY8",
  "key2": "2VqhXZwLQhn1xCR2F8X4PePJbrEFcVuFuwrsbzPwAUMi1fbTVuvcwo5PGfFwgYQy69sPj2KBPK4ZjfkanrnhNMVD",
  "key3": "3gYd72XMKvsThNyQhdecjcCodjnxFcvnMuCaX3N78qE4jKcEnmwjyJVL2jAUQdVjCDXYpTGLfNb7qV2HogMof5to",
  "key4": "3hTMxq3arufhVAqoUGu2apDdQF2g9aqqoAKLvZPPHetc8Ft82QsRbQsjbzAaEkrvKfEtenu6QQkBh8aMWNW8yUoS",
  "key5": "2QeSQdUgECmKcru1phfjM5kz75CHCAzAedcD9ouQmhcvAPfpQUtipj1icRkRAJf9uS5B1eCGy85YvaAWUDkksUYM",
  "key6": "2cGVrhbktZfPr9uYjGyjBsDMPMNxQSjQnZa8DBSfqxAsmPnxrpDNMPLieRbVni8YT5sVaDxyCVJPPnYmQKvASaah",
  "key7": "2DhaDqtaFX6KU4sUKCbGBsqNM82E5Lg2DWLYFnnsmovVjkodLhQNuWih4bJTwC9jfSrWwdzp2cA8gAtLckKcp6eq",
  "key8": "2CR84PT1QnD9UAKYGL9rKj7YXMT1iQsCTdPjHkw96D73SWN7ocJasg28NxLd4YsL8eBUJZG4mC9m4EiFim8Q4wPL",
  "key9": "4igNneo3xhcknPVubPu96E5Q22wZ3rCBQvxQ1t9AzoJ3D5HoYuH9u1kdAdvMwWpqhUwqZj1jKi5Fs2A5ygUEi5mR",
  "key10": "4cxcCZHXTBfqj578T9JfV9rTAtByirLp4J7cXtdr5UpmyJgHgfGthTAAnvSmfsu31KJ8aejLQjU8xfdEu9GpUVxd",
  "key11": "41AjDa6tuV1rXwxZpL3R6v2zu2ArngQ9V5x1H8syBPk2kBUq6dTC8LM8h2CGWXSViece3Nz8amAj5X5Tcp4kYMWh",
  "key12": "CRqgMgLYGD75tv4G1opAyegdVm6QBrjoMibWhVph1DqPoX1gp39zwU8pUaZP7ZwJXBrCZcCBdgi5CDtz2qzyRA2",
  "key13": "avexTfRFhkMoA7HdPrJrqdGewkZWU35m6oZz1cwMLkb9cPWXTy2iFLQRYC9TcRSfNGymDwjN8k69K9wgd4hRwwj",
  "key14": "3zthi4QuAWNmYLUk8Hj81C9Kcne19KVGnNMNykeCeYNjRpA3bc3Vnmja1fMGH3n4VJmoybESdgPTge4NomqcvEgw",
  "key15": "m89qCHdXFsKvkG5JUeLn6WFc5jQcmH5cdPDzg5kA8mwxaa5JyWqxvbcUR7f7uAohoNUDAqnJLvxPiMMYL6jJtxf",
  "key16": "cQN593AnFYhXaQ2wCVBM5FGfjs2KZnvUsDYmD9XyNwej8uzobuJgbF9FTA2LWYpKnebVPxjDaggmwCCvBD62CvM",
  "key17": "4148fjGbQDQ8Jgfsakrme4qRRAj8oPb5MpW3RvUDL1WMCcucmLD1Ki89aZPZGo6YWg3WBQeeQqZu7HuqvxpdwDKV",
  "key18": "3ZmSRxAGScqkYLjMAZ4VBAsH1CtVVUUGAdwUcmW5Qkj5AnZWsrfWbfKuHX8amygRB4XMtqTvBiSdgn65V3EJAwMp",
  "key19": "4mJwwBrDEGHTBxz5yuxwZRxUuMBV2qKgKRMxtTiXBUsJLUD6jW795sTFcqZaCs6rzWMfnUyrHZ65YVZXVNbMCUg9",
  "key20": "2gF6BP53vwLb3xW4eQSkYMFsUcYrwSv1qC3pWHdQJCQCUH7UaD28gfWQZu3vuVq2PCoGLjjD39XQ4aaj3QwX5b9C",
  "key21": "5p3kAuTKBQRAMH7ijf61kzse43inunCrPgLBWPWNgZV2Ycuggmsw5y1C6RWNpFRKPnPtgTy1Hwe2uh6DpX3hcBMy",
  "key22": "2a5kT44iKFWrQRiipx4o9xhUtUr1VvK9DgvwRra4aKLvqMJL6HrnGdNgBizW2iHrg1iBSqYiHbnAKeUKuWxr9cez",
  "key23": "3JbYL5v1sVxKJsA3S3kAKeATed2SCYEnqwM35TnmYieKG5aL7NLggLwdAgK1Wxn5km4Bdkm8onezpSEfhu9Fsh42",
  "key24": "4nwHh5NsAirWwyASqzfvspWoUtB2T1FRuughU7qX6S3mZXi65PvJXCuKYgmZ7H1ZB8VgdGZKGiC572DwgGw85Wo9",
  "key25": "4JST98cnU4XHLo5aTakbgkxsetKwTaXdbwbLMj3L2utQYXBYZw3Hrjrdjtzj4hgTwEXLykbxd2YR8Z8gMaSJzVbJ",
  "key26": "5Z7aqvxphT1mQdgJm9NkcS1E3jv9niUs1LfXrheSCvb1jXdjL2Ji7EedjW3PSNxfPNQKQbee6AcJs2iWE3b3ucqZ",
  "key27": "5pXsm7yQgbFRDMhHjq8ifyFbRdr3qE6LNhfJpUZf9VKCDENRsXYkzZWCXVbrJtBSv9LcksrpyQFjzo4BFvnPZai4",
  "key28": "56Jbhjs4actDtfoEQPJNFMv3ZMtWH9n8ynaWg2hZj6oP4VvPPefAwM9JUrrf7uk91N6e67e8qevfMD5YDSzoXS1c",
  "key29": "YAhh5g1dczCcq84sAMrex39TLjajGVePb9h4z3ZEBpX56TeaHrUyBYP3rJXEBTjpdep81wuKhCR2gVLT7WHTsVG",
  "key30": "5EVhEhQrg5fmfUJoXJPCxihNscP29jj1mi3xfjdrjNNttEtDNke8rWsAsGeNTGwowUGWeEK3ZXayEvnxkmq2JNu",
  "key31": "3DBb3rsByXDJ8k9Gphbj3odCwMgQgkRj7n5BmDduAS9HQcVEHSsVCFPrRaKUud5DKXeDCbsRo9xMeWBXrZLozeBJ",
  "key32": "4NvcwNtZj5rp2bvp1yDmSkKgR4dNdofbwwof6eratisQLxFNdjN9dEv3R3U2xYp3CrbEyNC5xxXBaiAj6TJ1G7Dc",
  "key33": "2bcAVU8abdytzw4KF3E7dr7xqeVMUPuiV2hnm8yhLjztP239TyfJEwE1meH5L2fimB8M3Q3JDcekai8cDFfjZHmm",
  "key34": "53namrhCzbr3psRtMX4PAzHbKjEeoLCU135bmCT3nzorFFXP5WKQq46uD6BU9e2egJ5kSM923WKZHZViXK8NCTmC",
  "key35": "48DRnvut634xWJriscrNgswMafrzmBUEkN9V5ATnv54WdXQ7PBah875ouFpiqHRUsfS95akHGsc34BLC99gbDTvy",
  "key36": "5aNqsAiRrypLh4XRkriy5j8kXtaARhLfec7ZWnsLP9aCd5ZHBKyvHudZoHZ9QSg4hRGZaf1fkzsb1k6JtHCLwtpi",
  "key37": "3sCung4hLim5eAugopqFo6wVCZbiwTKezVquDoDcK5hi9dKjiaXQwHR5P4NKQs943U8ydqTcnjAPYnE1rXkKsLjL",
  "key38": "2poNV4qLbKWa7FXRoRJgsHB2o1Qmo2mrLJciuXa569LoqQ36hRXRPExTK41J3qWafuo2MUoApu8po5wYasmvhZzZ",
  "key39": "2XkXBFFPbL9HJjeVvT5ZSsGW5jW2JRzZ7JQgruTAaHcARPJi7SXy1tK5Fbd6ZxmJ754ny3iL1SP1J95kEKac3w15",
  "key40": "37RnLdRzTaSZDxXPgbosjG4jay8iYWiujhgRDiXZ3uGw22Z9TDJ6jQLLUCLa57DFJz5vdoJW8m9uURcJLDMQhPpW",
  "key41": "kPsV5ydCixtUYraH7XmyTiwYDXf7s4BSG2ft8VHvSM2H2nL6PEkm7yKdJfV3AX9TanwGNqCSEYsGXbHxdmWo1Dg",
  "key42": "3x7e9gStqkTzYp4ognpX62E3jrJ5fbkh2pCQKSzsTCRMiMdh61XBaY69Dh61RSFRG1qpTyd85Wt6v3mBKD7Kw2kF",
  "key43": "5UWfgmhSpzQxhK3C2ZfusWRFEmfTVSnRo76PC69x5BnXgvdea6pAzNvZjdhLKg6unZcPSkspv4vRbyeigqToACnQ",
  "key44": "3Fkh48y9ycX4RYWez3QiCUCeQ6d9fmUHgT4dTJYxqtrPcCQvZ5TfDEmEeuuR7DAwG5Rsg9VhkFHstqkh15iQZtDZ"
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
