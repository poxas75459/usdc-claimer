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
    "2dcs5oSMoUaTJDrhh2sTXS4oaZW7UHaaJdLABuTpYsJGWbmgJ9mpzDrX1YArYGDnMemkVTH9pHc7VHKa8BQ99SzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VJfrUZUSkjAeGADFTUnCtvGuJZ8JC1nEUmSmvnhMVPWQjuyH1jNhymr83o8fa2472UpZ9ed8ApjfNRYknuthSfx",
  "key1": "26tUJvZ5v9WUPPeXZdnHuickeUWBHUWX6VvQL6gzgdjPeYfEVfn7wvXSmyMb8jg29ML8uTaaJ3b5cszdHenew1w2",
  "key2": "5q9QGhsSBiLt5kkz8LWbNwUbZBfVxgJ1r6AJkF9C5gGcsKJ5g2jjNfxKndz8NnoAxdJzAB7NgeE6kgtqMXnY3iKE",
  "key3": "5vjFrVMnrcS5ohzh5EaVJiqM8D3edoJdGeRJHrCCHsm3ojUg77tszUo53MLSQcRNJyCWRFepPpnCUCAbxTJTbqy6",
  "key4": "2g8Knc1sLwmi1qkfmRfdXPCS3JGJGCwfpuNXkAZDB4tQADqxMq98nJwig9bYEFwTWroiCDrMfxLEtCRmELmNaRZt",
  "key5": "4YbkuiVgqELnsT32NbHAYNbDUbtfwjWcrkCroGVNtwzY1ExwRdRCW9joUE4oYUS5tdQQ642zbRnPeU7StHAAdvNR",
  "key6": "x4yf3Ro6FuSBZt7ic5MHLPBfKdMuCcbJVkCZzQybC4sndnB4MWUgJ249oFRzfydfzZiGqmcvmFJ9zwppa6HYKFD",
  "key7": "2XM48MhAXC8K29c4Dfn8mQSdVRk5vHKGqHKvVDDWZ8qF4dkE4T7nyiRz6eUeazAyjc5ZqS13Xk5CkRC1xWFdkXKb",
  "key8": "67F7362VGTzgT9P8FwX6qWaiegtvsSaa8jyaDgFL5GuMqbt8sPqCef8dVPSmmBcpny6ko9R6Zai6DKpStdjaB18r",
  "key9": "2L4NU2qQwzS6sgnLDGb12A6Yf7oQ2eJd8KCM9o4J3ACFWCR1FV5t69Y6ntGhUbZsW3NLi3o5nhGUpUPVnXZtbWSu",
  "key10": "1LwTHQdXGK6yZteryvfV5sgAzP7c5PHiVJTQt8bB7bchPmzcWctLedFYNa9Kd5NtpqCJqtEpBzdyWMmC3Ns8tQF",
  "key11": "4hURMTBrgqPFrWuafyTYYEDCRaximVKSFHM6GvzoSjn1se4bgYujuqaomr7pfUUznSVM6zsk55vyECzRA755Z39G",
  "key12": "5YpEtw9AX1Cx7ij8oHNZERUHPyZQMSiyi9Lobgp4oKT6J25oq2K9MuAEdq9PdQZ1PuQLY3n6Q5LvhPg38JmBDonK",
  "key13": "2Zvonxse7GubNSDNmYAkTV9agvGETJqbqjtFPXjseKJwQQEDAjoY4h4MeZEGaCddPZEudnCDn9H1C4i8vwdrjkc1",
  "key14": "36ox77ZgdQLEDdzaLWFQ7BBXma7Sgcqb9NRZYAMk33sebQxzwoKi1Dv73424Dv7jQ1RmSN615BZSDAaWaRW1pQUf",
  "key15": "5Py6hp293TSbfuRohSLSDL5o8CAwYrWKvCsnSAFFJVAbhv65iaHxQH6i42xtQUNExHFHgeZhcuemqdo91aAmeQ5C",
  "key16": "3yR5YY1oZxAR3iBNSXxF8ZFiXnUA4zP7wFZrL6n93Sq2pr63o1veHgh9KVJo39tj2aBaiiZ3DHjE6L1WV6Y9koX6",
  "key17": "ne48GSw1BKwDPSaVgYSfGXtZ5pyziW5AwUE5T3SWxJ8Na44J2y6V2hqQoeq3pGkPY5PTC7BgUqMHNxStsxchW9t",
  "key18": "4WgdP8wu8FGqc7hkkf85AF2yb8Gwh7YTf2yFSE5JzmKdsNPVWm8yKLe5rGZZkHw3YzDHbokSqPonHZP2DYGxeZe2",
  "key19": "2g8mZ1EuYZqPDj2xXWVrAtv19UfLdxRvHfjf4WafrJujsKNcpKGU1D6tsoUGQmczGBoYzCUoEAA3F4kRBmYgacFW",
  "key20": "3p9eq4kfM34Ys2C1gDMsJezT3E817dfxeT6XFpDwWsBASZ6KAC7fUhh8iuQeKytVoZxJhk1LLgeucwjzPMeaFvut",
  "key21": "21q7q24DJSov4c2LzSktBUDjcDfsmhrC44FMg3Zdx4RKs9uCr2T25uTVCFHX2gYqLc8wNgF1FqDfEPuQFRtJLALx",
  "key22": "2VGJ3WaxsTXtpSN1cN2jBdoj5P6GnpGrnJ5PECjhWdXoXyw9j6ZNZo8EJEmgo19kkk5Gtk8TsTDS2PVAUDy2JVqw",
  "key23": "3rsgVBfor8zDfYeM7o7kysa6XRPGxaBQnjmGrpdEq2HWSwqYoZBhxzr9SkMeYEPTdSDnAGJxbk8Jp2C4keYx3dKq",
  "key24": "3dZiYhScYN2NWtzKn9VAhvpjzZ2gC8LBm3sFv42GmEkDpzZ3xFexEPgCZgG325mpToVexsCNjR9EtiXja4DyGhTH",
  "key25": "3hJcNXgdYUFwSGnWYG1qJ1AGk8FAEAAg7nEhPp3odAXAHoEfYZ36RR832S6turbF3FYL4kwHLQ4YNyePd3qZWcRD",
  "key26": "3QDdiJmh9eV9WXjZn4bkUs38EG7NyY5RXX6aEZYqQvwbeogS4R893EtreA3RsX2Xj3YtHhErLhMAjcpE4FL5D84c",
  "key27": "ZZZqjZ6nkLWugnrwwgNfjiw7YwbBdfhzCVpxoq4EjENzSRW6gwrJXbL4czqRXf7HEurBsrpqsEjaN8xh9e12aZV",
  "key28": "2LUykVi79X8BaEY1XpXe2LD78zgXqnx4wa6eLvLsgHccDL4VzVXabkbS2rqnewGr7XptMKTR3eviLhfxQ3H8ab1o",
  "key29": "3bJMYzEdrBvL7ouGt4yo13X7ZboTV3GfNV4BPhcFV4vKvhBx49BS5a3DeQkZGmViEHkz5nKEaEbqJZAoB8QZ9cHx",
  "key30": "nqYZoCi8noEvBNddjUZchXtFh3xMci1LVCxutk3o87ApWtrGtL1RjywMd746a7JYDB2fiTiWmLawDp3anBoBuYc",
  "key31": "619Xxcj3RMywQFExge7ri31MgBbn9NYVBEDSLpuLG5Woe7FYhQ9C3SoMtoKGTvjgsrdjAEFGnzqoH68JYpRzWPkf",
  "key32": "2qzeGvGA2hAyRnTNvpnixNLFBJ9XSrEYahjyGpEdp8KECyo9JhPKFgUCGc3BwXz2JgTYf6UPfBUwJGYuBAcdj61Y",
  "key33": "e1DdkXM9sQbAMiiiWqM8x8gE4XtpMQphagquS4KzP57vc7QHLECNJXfF3RC68Q54YRuv7xeXV3Wena1YzknDkzz",
  "key34": "EqU39x5msfEzHu2jBTDvCP3XHkZfXGJzKxVJSG9sJ1BrCshERmfd7VajpgDDUbSJjT4MTErePM9EQSgPmVj2w2p",
  "key35": "2rePWwmpbASnRBW4wyAWmevpND7f7JHN8i9UdYnAvDKfiQHigsuiVcHzrBP7JQEKs7SLLimzmB22jjXnhmWHi1fi",
  "key36": "3BJkscSjzrNTvVL7HLMcDbexjfuS7jXjGvhEzAeR5qov1JhXcHniyaqHifMzKxdKvEGAoAMTPU6KRRMP9MTvpX76",
  "key37": "4XqxvUJXX4z6k5uLP6VwCh5gJ14kPgDBsnNTn18vWR3YXG8p8Wgp4F9bYL3cGfAvpv4sguLWF4a5AkZwPRW8qgeD",
  "key38": "7sFBEG12hwXfXxYD5jt9Z1EY9r5YXjipgfoLgH2NNU4pd34AXt3WeN5v68pUGgrbRS2RpRdkJP47nnp3zUem7Jn",
  "key39": "4Y58jvK3jXSzn2XhexfoYFHHXXxv35s6zWBZMYRBKuMUN6sHa9nFTR5v8aFaZejKtWBiYboocKs1gHuim3QGBVvd",
  "key40": "4ChsGcn9gHK5Zs1bvpNqRLPkkUWy5XepCwxLMUo3HweSv6n9LZeuFf9AxVh2B9kzJfonHGC4TN8Rksku2w4VG7SB",
  "key41": "4KFTu2CZizFoKGdiN7EfjtNvBC7FHzRYC7UUFm43SY3jbopyZNQFoS5EuaGBtskh4sDMnLfBwtV68auHDeZCw5Zj"
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
