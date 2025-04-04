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
    "2RgrpoACpQ6ETkbkfRtvHdm7zvfUjDag5UMLvgrV6fBouDt7Lgxvzrizec331HV3ZtisDAWsQASbeKykJHpgC6st"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GRP6VwhAUCfMF6yBpWEwrF4V57p4qzFLYVD1sKR3MZSgw3feBAim6fPTew9CkVBqbWy1SeDDMK9VoorQcX74nu2",
  "key1": "3kUNChaYGv57DyuQrADnue8UC4g4pDV9yakaQ3NAitQJgPwv9rrVXTKiSJDfsJTc6rU599DASrsmjeECSRBFYLKM",
  "key2": "2hD611xsdnEQCCXqkahrSYm9WTMuD6EVUwarGQXXcm9kMvbUsEMh13BdSpU9qjisLvLccXDGJ6QjiZRCiA7fxQFe",
  "key3": "37oPUYPyfBbvbG3LKq4ZbbaFuGmwjdsDB5H468BCUvbMnUfUVfnKiwc7fBktavtvooa7tQJHVyaoJhVhu7PfNxp5",
  "key4": "3XRmBdJxpG9n1KQBoUtStLeNJFuUjW7Rzp1u6zTxxxUNB4sCjZQjH8gD8iacbk6u3rp5H7U1RirC5Sprs7H3AtF",
  "key5": "51ja3acMaeVMyLqM5KDhqBKsoyXqH8bCzLjYjDrkXUHYpVTChSF8GmcVTKxUw7NFqk2RFCrMxNQiTSSf1xm59DW5",
  "key6": "4tnxfpCoWVyMZC12h1LqMhasTq7B7avHhmxSU17hzy81UqDMT4BrKVieM9TQYXLjWp7xHvtL3isvNkxTSjjYX6Rq",
  "key7": "86uQUUxZfpckhHbQirp9WsXhawYygBxqoJQtNAZGmHDtXoMxXHuvFruq7R8oT6opRYkFo7cRpQRoLum8BvQuEPt",
  "key8": "3CJxJczdCmCxgAomRG7rEnRFEWRypknGp72TEtSQYnjtFyxmDEPRYcHog5rpmnabnSxKRkVRpQnSnG7SxSdbxZYr",
  "key9": "x5uF22HhhBX2G7276irC7unZHg27SZbMEs1cFqJPkJXNcHEw5wxKgtVjb8NbMdZyuE1K6dTe8AhXVhTE8YfNgf7",
  "key10": "3vb16ALyVzXo96SFmN5inLdrWtqMoz9dCa5L7b3zFyhCno2HN31hoxeS3eUy5pnRyWXv94xLE2WWP7p5Dd2XsFhZ",
  "key11": "4FgRFmFgzjZNsuQ4qv3Z2iYgPxPRt8pntzPSighizwPCy9hztpCC8d3njGrNpZFtdVCiyA9XQzZbQrtYYXimdEW5",
  "key12": "2TsvvSceJTqcaao5pCMPHrsJRsrC8SWcrwKLPhYXZ2RZ3J8sCfMS875pW1URcb67qvMfTZEBzkcXPZ85PefUjpnB",
  "key13": "4GPXYBS5bQLfNoigjApS3mw2F2jzAdUo9RKzdp11peh8kRcNbWzJTfkoKpbRzggQE8YqAdyGmmZ2rwzqiK6ZKipZ",
  "key14": "9F118GrwnzUiVeFeahbKoiDCjcfLaq433QcS93PwtREAvMGngWUyDuxV8vndVdDprt8KYKkXZLo955fArbtPPw6",
  "key15": "3t3ngfkcgYdb4vuQJjvvmpRvVc24uS9PcTJfg9FxDWT1CFL7JFdyaHfwvaKbuNKkRcTWe4jfG1TPUTbaJVitQEk1",
  "key16": "29J9kEzTcjA4KzMMVzkvL3zZKcXPxmj5pG3H5HPjFGgxLmzn456P85e2kcdYvd8HNKpqLe8Hzsf5iteVQQtbU1A6",
  "key17": "EU8Ca8bkukgAfZ6wXEhhotkht9xx569coiRWA1qkCSaFGggsX1onatqmdVprWcm68HP2tYDmCmyNntTjJ1JC5Jx",
  "key18": "56pdEgkkCVuqFXoUi8TfkgmyiLNEFsKeAvLf3JCX2jR2yYFbpMEzPkQpTVgV8KDGwz2kFqM8cD7G8CZyHiExGXU5",
  "key19": "3Vcx6HeoM7cGB6yzQ2tojT3Z7A2A6ejCRk1Rhvmni1i8nBCa8SoeR5Vk7cx1tT6obEHqAr5MveRB7oSoZHhdxy3u",
  "key20": "2cp4iMQjRAEYUw6oVGbeZJSg8PKBY3qrmp7yFSzPt2aKL7D1eibY3svTvrBdfbMjLG1W4UEYQRL9RXuHZAEsfqUe",
  "key21": "EkFm4nNKQbv3dRSuUdqY5379WVgjtmXdiGFFNEnmroo3yXSpfKCe8T6yHHX9s9bpwtJsh2LHsf1rpnbRb2ZucjT",
  "key22": "3emhMPihmvzwDzw38WaBmDV6Hs3gKZTN6b4xYkCRUq5mvtLoFQVn99daZYYZBJmoR8idR33EVLgB9dfVbspzMqPx",
  "key23": "43Abk4u2K4Sz4aT1vrqmLWhRZUYVoxJHYjkYsmUpXE2WkUvEk3UXawCrDzJ38J8ssCiwVndYhFWdEgWYbvyEHmSq",
  "key24": "572XHgUq2JkCAeYyV7vxtH3GAEnoxNoFGAQebt5s1u26s4LugWrfFndqRHz3MxkrJgaPW8DzoZBY1kFgyq6g7eVX",
  "key25": "ycHUbrVjPLJ7dhdzAskhYoUAvbaqGxg3uKgH8pDns6ecXVnoe4wEvaveyWui6WHR5sC8opkdPnV3UbbLxk9vD5T",
  "key26": "2nMW43Pe6oEJ8YDbWZfJRQ94xX3y3GJGXqHGxChJZXT61pgeeyKEzC78jXZBmBs9w9rPA3E7yEUWvMcP1gBH1Rg6",
  "key27": "THs5tGP3xTnoNUFUqrbY9FRPjgBnCT3u8uJhAZfReS71CCwyeXsJFhsdWic1BhNgrnN9dL62HfnunHZZxRg26zp",
  "key28": "3nZiRJpRLKwKgRSbHLwFBAmNViajCzbkXgS3zfYRDZnqUAikzTRTxaPtr8VcxwugzBNDYXNHAoCZ5L2uVLetoRby",
  "key29": "3eDQ9QiVHX1BXpVtrozyT5RgqqUSwgFYexXBGth5DZ7eqHnXq5Ziwa5GNEFAh1nT3dNBeLVWbZbtWDezNT8ZURmk",
  "key30": "5aERAydNeAXd7MeCGJk5oSUPi8Xf7ktQxS8wU9nVqUxTFb72RCaQvHbWYisskdxif4E5dU6LTJGJ4eqFy8CVJZw2",
  "key31": "8ASD86hY2AgqDTBrSDgG6xTqeHzdHE3sNk6ezZTE2Dvffr9sxdbAauK6gePNN1V9CH5kpDXXLMMyve7PaBmZsqy",
  "key32": "8KCCHAWPRNLxbhXAcdphET7YfDFEEpWhW3XYRGuQoDv4SoH29WcN7CCT7KiaxXnNeNKBXVCNcigYgbFcSEUWkkZ",
  "key33": "5NtXQYDEY9e2nRf3GswLPZ8mCFr8NBQVLGDciaREFq85JS6HiVebm1fSetRmwNeBaj1VgxHKuX3XCFazSXkjHpQn",
  "key34": "4PHCrDJXVbzekHLvLBobBCUzKjUtaZRtFpPcsTEcAbL82NWEMoMCyQ18d65cgBEiNVUyn8zRQ5BVK9vHNHXputkT",
  "key35": "2As4Gg4wRHjse7wjxb2iuE6QKEHEkYFJSaze9vdVTgDW4BqqfituVWRMBRALHCxYxgSVqgPHSkvdv3ZHjyyTBhLP",
  "key36": "pPjQeDD5AANQWVEKCCYQ7TUirPYpEGVQu8HoGwfkTeQP1EGje1fy8MLF4upBhbRa3pF2RUrdEzNzn5BP6Zr9npx",
  "key37": "BRq8aHvNLAVGs1TYwdPFzh2SmxtvNSSaq6UvvLsSVegU516WpB38g7onyNpPorboCXGKfaEKDmFPmaS7JLpb2mU",
  "key38": "43kumpeTHBA8SoX43eqSXTYdxyWuKAEnQwwFrYfaQSo4ePfv6ZPsaSQvuhNTwDrbDjnvj5gnTzzfTnXxF8p8UP24",
  "key39": "4RpfT2ZpKFG826kiSqo4SNVinmSsnSPNt3xpGTKXfA6HHCGFrwepPea5RQZET1p9CeM9fQXxBjFZ3TxfDiRZ1TBb",
  "key40": "65psBdxjyTpq2qG4cHwzVNX7tkocJbj3h5HfjcBwfhQ3NaVCN4rKQYcjDTgQzSpUN9ZRc6UPNGFU2Hi2EYBn349v",
  "key41": "2fcJQQSK2euYQfw22XwsUcnTHovxaaN31U9QU1G6YL5V3mG9EbPBybgEMFJ6xaqaRucA27nzcBuBJqbDK5Q4gKCr",
  "key42": "An4zScFj7zn4cR4CGXHoHJabcuznumPm4dZNRNY1KzhG7PFEgWMxvKfaYsFM4pLSUbbQuACwdZvVSS2x7ML8VDs",
  "key43": "4RxGmiXAbnVbsZgEneQyFk5PfLxJjdPqxxe1a4Tf5v9Yo4pVcoaKwmw6cc6ozoJTbxEpWNmT2VRx3SH9vky4PfuE",
  "key44": "4543LwKpoFLUmDkg9JfFNsNkboaR9niUUxc8v4SLBPDLBzgMJaFcSAdcTqZXavghdeDWkeYRpC2LJUabekkPU2XV"
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
