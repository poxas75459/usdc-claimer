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
    "CWjJzAZpGkWqXW3UjHgCjMaw7G8mJy9dsiLXPpzsoi72YTqEi2iDnxi6aKsNQTnddYF9upc54dSpeVzqngbjyP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "573ckLtvM7vK2n3qd24dLwYcCTN9gMQ9WFuiusiQ4JxXvE813PQcJXbc4RsHrw9uHfqTpD762tjkcihCKQbWSTBD",
  "key1": "2Qepj3F1s4m51oFDJoNDszoLJsxngDnLpvvXGxmwJvxneRVaSqF97FhaeNHMwnp8741Fmicdhk4MCicyiEPpWasE",
  "key2": "5v82yjVdmhWPxiWG4neFyJFsrWzpcaRv3DN9oKaGA1RxRAW1NFy1EUMKGna7RRFUh1fcgRgf4BccVezigdSiDoYL",
  "key3": "rnTD8yQEjbnTTyzpELemjX5B5VzvN1ztL6dLSbUtWvEzPLGUi2BcoaWyJnjciRzvvRXq4nKFpN8UEcrvRuDWa3N",
  "key4": "4dx2uJdgFzfCAp7PREpyUbddZ4z8sJnAZomoaEz2FbDSXoeJ3Dd7Ma2T8yt62A6wDDyiB37ZAYqybA7YERmDhrFF",
  "key5": "4SKWebZc29CmX6KUcsuhRTGrdrLRrFYChneJAGwZMk4GGPkXJJuyNcvZECusZFt86pqT5RJjBh3tJFCH6bwetpCn",
  "key6": "3njddRKajttXqFmG8ydDyaaVaz3Xa36zWt6zzLbXqEiqXTR72Jka77QBVwnaU858JX4NGVvb2S6ZVNM4XFT4fmbe",
  "key7": "4pM1VAE2nG54S9biUxxAzCmhwRthtMHypk7WYjawa5QkXeYQb31czf3wJUVNREEQW1q189VZL39tmihzX8jRqWn2",
  "key8": "2ZBugKLR4nDt6qmtsisiwJ6mZg6qWQteto4u5YBNyVJduJn6bBJa2vMK8TAnMc7STdPLmzhe5nUzGSvW9idAE4AQ",
  "key9": "2gNNwK1f9Ve5QFbMqLq15h6wzU3ERHKTkHEBZsMuCUTLJAEmNymE8dQhbThw5y8U9oVQymTU2ewxTdCWBAhNcPni",
  "key10": "2PfvTESPBXtt9A77QhfFQL851tJLmkK4k2L9kw9TyzjZPKtK2Lvy5BrvDFEHyVA1BEzSMr4kqFjacKmhcMyS14fo",
  "key11": "oNygxfjCJwruUCHC5Q8Pbt2p6sFxdMAuCPNTAPiJs7SDEYktB3g2AZqr9uziaSG6UYWsMAhhZFMnA2Ja3FMxYhm",
  "key12": "3WqNuPs6btG9bkZtK5jtJGnSrMvo9BdZpweP8wVSeo1UVBPSm9MGuccBCaUdQhUYuPNv31J76tLzcP5GMkcF55mb",
  "key13": "jcGKH9Qw9ki2FyeWvcKV5WeZbFfona15JBqRBYN6J8rXeucC1Vu9ZAQG9b5KvGEvqa8o656MS94Sg33dNZxNjm2",
  "key14": "4pXn3eQdSpNz8W1UNyNY6FEsRhqYJ3KWYSc2g7Nyc4JZdu27y3bfntmJUMtspjBN8XtaHedn5uaNM5PfYy3tHBGT",
  "key15": "WTx52Nu2unoTqFncit8Hzw4P4GjF1CqDQyjfkTzR7hiZqUQ5KTqdUiwooKM3GZKSFKFhob2omRViLVQxipRJrL6",
  "key16": "287soS6eySuVNzq9egjHDvsJp4XCaWJJwBUyrbZD5AryZx9mRTTzEFe1aUqiYNUGB6Y3AyWRB26ekcbce9vFeQ9e",
  "key17": "3Y3ZVMYyR3hSFXtQ1yMGV1zZAgJqUSTmyQaTmNFqSbJ8WmtBunzvFoNADXdZwYFVsPZEnuVbmQUuMRYKhmmfcBtB",
  "key18": "5wKz9rRaUP4d3xPmz6BfidDqQv9V2zpfn9KiiMGKMnSUG5VFn387cekXTTWXZsRFNkZn9BYHnKKZHSqWQaXzcMtR",
  "key19": "4YvRQtghLzq4i2bjiXhJoLLgzkwHdj4HZN6rcXSF3PRrbp6rbyo1sztfiK8DwFacBznhvEaBAiEpz5ipjUizwxpU",
  "key20": "461Li7EQTMFP7jSjTfoCQjAyKtz6d9bYpGimQy9CV7XawFdxEmNFYdknBs1CXbTWqav53YBH81Zh4aDsUoyBsucg",
  "key21": "4W5gLCcn4nUWGBjR4gYUkj7M6MbDfvFbQ5sUgMdUkDyHJdeeCHd7g7w69vRgH7jfD1s8vkvRKdmgzZq2bCfvBnFN",
  "key22": "2t6VTex4pKvwHHuFSmP65su4mpR5SWNWmDcEM4kTmAqfDFcUC5nENFdQJFAbFcB2hoeC9fJNVGGARVTQDJHY2ZqV",
  "key23": "2CFCXxPcwUe3uMAo3KEUfEsTFSjoa2JJTkNE3eZxgSsaXVpfLJA5iknczeiYFytpMxwDz7NZKKsdRZE2nE7gFENE",
  "key24": "5kBwoH33hqkKvEubjpe7sdbFEm4RM4iyET7BNrgkD56u83ig5DK9XNw2a7hGoi8HKXbem3mW2yo5vXoYwo1w8NDq",
  "key25": "3HLrutNeSUwQvRgwxsSrnAaXqc5XVwxQiTHCSC7m7k4jSm8MfuEtq5H6uwUCyRFtbH7LAsBmGWLL8TKP84zTuv61",
  "key26": "3jZyoDwEpEwBNJ9pMdR3kpjUyB2r9uPuJXd3RGpVzxapRH1Jyvxx2jXj1Cw9CCzyQZGs27myKPqG5QvWNcyZDQBD",
  "key27": "2brUAgJ1oUgZByJHcFiXBMHaRkdu1Xg5nZ3Jhgjj2Swm9x97RJeppbA1cqusQNN5RGSoG84u9J71gxEvA4jTHiWb",
  "key28": "5TtAJ3reEeELsH2u3DoeUtFV4VwcNdFsedRyg3kp1LEgpeWJeezGFvVWDBJC1Xp5RHWH8fCwGwyS2tP37y7ubsDC",
  "key29": "3xzbWMEPgSTgm5fFUgfAQUgrMgWe88HW1vX754SZDqKD8UKD7Lu2mbhmveXnEbuWr33VhDyxHfYPK21RBRNenJxz",
  "key30": "M6E151SAoxgAihJBpJVxEqRy3dcvQgwv1v4pHsRj63erzZoAPjonqWGRxLscjjUj7Nv8RzYt6vPuzkRQQojhYrA",
  "key31": "4FWUQJUCsp5sFnSRr68oqKWgNaFhSq4QeefdcHoAfyYKP25wsfW7oBSj9pPFYxGibHEHQkJLVjxLo6op1Td6qEns",
  "key32": "61tfgxAKXgnSp3vm2iJgjpD8pTz2aoaGmpe6cvCsk9ExzHPsg5ywSWYJ5UAGi1BLZ9ZR6ffxaCs3dW1Mn1DPhYHA",
  "key33": "5P1gcbKTe7183qVySzZLpS7JqyEQL54BrBouW2SWEDXFmgSYRnAE4PY6uVtYpdFi2muYDYDQeNEFXB1iTW4bRZAH",
  "key34": "WmN8odCq3qNLunYcVnxTvc4SuctaLUs34wQPRjfVjto8B4kRjfiQVYfAnCGTDqJWv7d1nBTr8hekJ77NwbgKBe1",
  "key35": "3XWykWCTaLfHYGtn9Mrkm3o2oWbkWRdhXTZh275yRoQN69j2S3i2oTRePHQRgxyxbsEe5HcaWkSy4h2AmtTjHmy2",
  "key36": "56iT9V2QecoZ51jReyXS9PNhGGf4w2pXCqaprMqThyYAfjXUGMCvb2mSTxyPsBbSG7o2mD5H38nGizxvjZyoa5dp",
  "key37": "3EyjfGY5FNnoYj9zWdy8CibELwDFB4TbzN7p9sGJgkMWtYcmkWG5ADuFKZYFPm81ZVEZW9dUXXSF6NBve5afqCBP",
  "key38": "4LSCvmcRnh7gNHUWZBabhxUypXLgReKhXBVSD6DD66roFEZhwAYUaH5VzV4bp9bqGZccU79hsimtKVkZWz7EvN6R",
  "key39": "5VgSgFjvQC4K8eS6X4k9jCxjdbZoAM13NfRMM3Z2DhwoN1yRkS2vqx47h2CeSbZsXoGypcTf2dsVupZYo8SCBUGU",
  "key40": "5zfVfQXTYdajPSYDNn5CdZZdZ6z1i3HoYv8Le8UdqgVDwy3RLfDP5ccJByN83KrVczEDymKmuXxKiQHLKP2Exbo5",
  "key41": "HGMEy3SxtMPZHLTQMBaMKxKY1w3Czprjtb4wZnLDjrGyD1KAFtRFHBPwD62hSd3tQadvtgWVGCKh5nPofogqQrW",
  "key42": "5rwvdC2TLVX65w6F1dQ3wLAYT4qaHtu5YLPFZo7Yos5926WNEsPNgwn8YHjR7MDWhA6YCoEVm5XfMQaYwB7V6ymg",
  "key43": "48TE8GqCLj2RXMp2jPs4hUbm4SduZGU8XYwdasZV5WoRCMUTEuTFDivA1BkeVSroVmdvZhpCq47fkj3Ju6HbdVEV",
  "key44": "4ZuKqSbgbMUrbMcFms8ZwBDfy6xk9dNeGHmDEmKp1zEMLprXSxW6Mhihov778aG2thiRZa79NTJmebPDN1AHYTXd"
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
