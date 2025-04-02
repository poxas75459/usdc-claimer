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
    "59zr2H5DLVG2kiN8iz68t3m3xff2oKUiBJyQxsG9RPwdtdX8LhbMoGpTHhhKKWCXNqoRbpoWwLuEHEHyntwHQqgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QknKkWSQdLNqRLLM8ssEK2JZoNgpDoHEkD5F55bn6SmotFuWiFJF6RCGDMTTMEMFxYp93cazeGjSWjQJtzneZgA",
  "key1": "2huVWWNoZYW16jbCaTixxXVh9srG1QBXaTJumByv1QFX7ntTJQPTpt5ib3DdaGKuLFsuzy5rvGi3aMxzd3Xu6iHB",
  "key2": "ZARM5TQePUMFYMDbFY8sxeBKx4FjFEq1wTEooowWEd4JCYsHGdTEC1hkrDjsGTosoNSdXjrxzCoh9n1cmwdt6Pk",
  "key3": "5BDU2h8kHnduKoUvB614aF9r6P6DZ7zPfvzVuErcBNhjG3SaQYvHni1hdpwebRZop553Nn75BSYSWG7dExK96EQd",
  "key4": "3YVnuUUrMa4hakXjUuRvTWutzfo8M49W7L5bk3xnTdbMYFfs2AjYAmKRxT4TYtSE5WUnoG5tWBy2GWCGwB45rjyY",
  "key5": "62CNNSvbyYgubmhw9a3WdmsxxEv3VpFnvcWVKwEjfnqZm4AyKNL3ifprWpx4QGC52X6jN24iSdKUSJTQJHLM9Lq6",
  "key6": "Ywu9TYqWsnYmgDzM3orvgzzUkCwseFB3zeYJ6oXAus7wCKSVToRWMD138rEfPihEFBUcBrQ6y95t3dfg9nDfBeT",
  "key7": "3wVRsc2qtmcrtM5q5VJ7VdDwsU6ZXn2DMEe6A8KsawaSYGfmBdLaVh5wPmwF7957d5HuKxx8neRdV6HqmD4X5mtw",
  "key8": "2gKVR84SA3jxQ2NGayPXs2fr7mumiuwVgwN5x7uvaxvzHmZ8mAMyg1A9cUTrMY2j2AgAfY6Piu67Tuu9LCbTwHYd",
  "key9": "3MjtFFKEpwDBURFFkE6UpT18RpyxpoF4nkNy7MGYoW3J86JYanyJ2L3LK8yFEJVzsx8dFtcnQuabR17onqJRBVht",
  "key10": "3Bm7NiLz5czHborj1zPUCpryQbGt7Ktqm8pp1WWhdfrg9m2k3rNQA9jh1MzUr8ymsn9ogzdVhpUtqVVGxPAg8VPG",
  "key11": "22Lvde7fSyw1EEM85AwbdcTuvt5MvxBPHur5d1A9P5T8KCLtbEGrbfGzZnCQRBwq73uWFaLNpitnyKL5BcZZuu79",
  "key12": "pZ3BPxYrdTj9WgTdRLVNbzaT9FQeMVgkVHNDXkFRHtNxmRvibKYxNKrt99awmbfDr3pNHy5sRJucMKP5SDpycPv",
  "key13": "XwHfBAn3ELHTgGQguSyj8u3hbZbhgp4esohKq7EVii4KUXS23sTiRWLsidDmMdZwcusUZFMCbrgP7YVA4JT4HsJ",
  "key14": "3YrnCANrv7TA4MKjgVMXfx3sS2JRe7PU8tgEGRCVeoivX2SvBpL9Qvnqu6w66PMFwrK72wEXHf7KkazQymRa41Ti",
  "key15": "4bct9JHTQXuxdJU4w4RBDQYL9VaqaC8GcoKyw5jVQ4M1TNE6bQrHB9sTu37bp4nyrKxnYaG132R3aRR7dZWT3fP5",
  "key16": "5WqaK2MFKcnN7Xnv66pyggZidLqzsstXzNTDVA1XKx3ZUx3TapH2XYD75TdZ1U8birEaYbGLAYsrkQBbiFRoH2pv",
  "key17": "2HMCaszvDs1dQyWEKHwTkvMiCCK8iVrwKHoktn9HSvk6H6WUr4E9HjWeqDHWVGeDRLbGjjbAD2Sgf8J4gsbgKJ8Z",
  "key18": "a7g32wMoGUErXqzBoVUY47cd4C9ACDDJdrTwJgidYRKs85d1YjTmZjo1LV54u377mP7S4QXSnt16zb2i36NTJAo",
  "key19": "4YHK3Q7iHhz6NS17WCjV8ir5XbyDcAofebrUT6NVSHYXQUyu1GNYB2gZEmGuWE7zma56unPSEEHUjQ8dWBTVezZm",
  "key20": "4GRymS6fTBBPZSTiQ4YWJiMQotKF7qFFh54kYd4HUECLhe6vPHzjcnsxDdbrbXZZMJQ7WQiMWaa8DUn97Y9ioa32",
  "key21": "47y1eTtx1TMBLSZcz7sYfzV6PGg3Hngd5DnpkdWCqnU8pXwjND3B3aXb1eiHiF2W71tKLiGouJVB5UPy1toRn9yw",
  "key22": "2JxKkeou6Nwp8dbKfmkCptd7SNKzMzrU8mF3inwLyFG9mihei2nBi6DqjZb7VSTzVpZmgZxKC3No9d36wHzvzJ6G",
  "key23": "5mLMs5MMBB8MtnAmUg7JCMNoNCe8bQcdV3huKApk5YJFuKDGmeho9a47NCvakQcpq4gmErukHvLYKKAghF3dyF29",
  "key24": "5DjXwknriAhCQ3qFfT4yxQyRNhKkVw5H1EnnorfkGSZ6keTqUBvs3gRkg2ff1sTWSzF1FD4xN7dewgmpoG4rZXqp",
  "key25": "2jkBqKoG1afCLTRSvZ4EB3ZZfw7RNKqa3Ym1gpkxK7rmsrm7Z9xSXnSvkEyhV1cfbsEompQZxQRUFN4ryfn1yDHe",
  "key26": "3DPntMRj9YYwYKGbJjtM57bc2SMpZzNGZaBqW43pN4UTqUNKXfe1M7QG5QrjMipJAhWD3NHerW1KeuzvERv8QvDD",
  "key27": "4N5UW4i6WEjoLRPZXd9UeDj6kPRVdxdDJnhCkj96RpfEpTj5WpPKnJ9JhbkoPoUtFwdVuLXqVewQCsREzjjRRjNq",
  "key28": "2FscCk5U8Ys1YApPmkPLiUc3w46wcMX7EwZKXbkiUL6q8DWkcyVhLhDFN4MG7eBW2nEHEwtSpLVY6MoRvhj7jy9J",
  "key29": "3CDrhQ1tzpHoCgoR1bg1pNd9fBmpf4KkdN6z9UK9f473Co26MtvTfN8oq4Bk3phJUTGB4xrptNxBu7FFRikbUXH4",
  "key30": "YjWnhFLLc9dFKrpFpY2nQ4sjYkpJ1d7f9HP5JYj92QDjx3a7s17g3mJ9Piy7fSEVcYDtcVxRGpjg7pHhAHJVzDV",
  "key31": "2msdeWDBwCH6vVv7eKZTcuEUg21iYuEEaVTCEo8PPxrotMPXaYJurgPNJDXJCF4tcGBWot68iEDNBoWy2C8y7n1i",
  "key32": "2Z6y8VvC14SXB3rKx6XQkXUno7j3yAhKsLbZVy9c5eBiApdG3BDoc2izyH85LHjTx4PWWkm3fbKD8gHHzXb8BSzr",
  "key33": "64jaBH5H827oK8uCBY4nPcyA1cixwqwUYa56Zi4NxZ8uYFX2v8BjaFavUcPVBRCmdspNExDECsZfkd8pQakdzKyT",
  "key34": "3Rys1dq5ZoVnJrxazyermMEeb3hjs9zzgJAYHY8deKimHEWstSySrkS9Kk9KxQNxaEjyD5kzkVn7xTc3nrg9Uk1d",
  "key35": "2fgkyMnLtMNVXTNJQVjggo4fNdvGCahyiyXyfC4h1c8977kurEHguuEokUpMNVrybxnAP9M82xgkjHrxRdPAvE5r",
  "key36": "65DJ17QL5yWvik4mS3dNbjN2KoVhPc3EbMkeHFs2o7XErxocL3c2TccaBsLzy5LVxHuThzCwCmTUkAjoKaeQQRXt",
  "key37": "3GrmBY2kxEyWe7L4TQ21DAVjJQyvxNPBruqxmGFrE3hRfiajNWeRCAkpi66BuMUHFVJ91FoZo7y4vaXW9yTJsL64",
  "key38": "3okAcmw7fo8Z6xCWenrevKVGNSHt2NaniKnBZmg8cuWS5PqDs7HCDzjehUeWAQFHyhpuxY1sQfg4DRJ1asN787zy",
  "key39": "dmA2vCdbHrbk1pWEJN4pfF89DKwrsxCWsZfJNhoZRrLXffyeuRM9Gz4tpTMRyPhsHqb7aVMsxqrKpxkgLzVg7ub",
  "key40": "4osA2gZ7De9rkCVErCgXjNyNeQNWfmevGy1KGfW9xJVsXkxA1canGKrvpzbZGyAL5WAk1JWEzbkNhqxHTEfmJZ65",
  "key41": "5HPWATW5P3mtkwxYiMVpSLXgzaMLX9LpUAhp65kMNBgU9RT3MDQHK75pVJP66Fs1x9y3AH3PNiWRs4JTXRchzcEC",
  "key42": "3TK1ewJxvvVPNbfG9fnE7dapAySMqkDykUcXkCXEVjCAErNvZckeSSGT3gzdb9tutkws9u8QAXTVqFSFiHkCjebC",
  "key43": "2VogUtjCkcUrktfWBcSWX6kCP9KRNq7NnAR4K8yq5fvUTztnYEnAFms5ENVpypKPbYwbXGpJXN6ULKvnxackJSrL"
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
