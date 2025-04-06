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
    "4B2XJVQF4HPhmkDMSNH2FsJzp9obh4PtFCLtPQPkJmb1RKhzhJ7t2YfKDbDpgZ6C4QdFxtgz6fo6wwRakiWXjPDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zyDViuFeoS227nUcL1vmp3a2rSPj16wi6SLzG2kW3eg5pBM1uuorGXx2mvCSDat7G17ksyaydWBYpPxYsBGsyBR",
  "key1": "2ekSCy8fgp89efR3FWY9YuxWQVLdWEx7MnCDQdfLuvYA1i91eWVG8WSEdNQdD5ux29KZ5jmEdAT115optoveciWo",
  "key2": "4xQVuQoitpTpYC4E71nR9HgWxgfPbb1iLUDi6xT4GDVUjwRmeLT7w6tERZehADpSSxXRTsFSDcoeFbfwACtx3kwW",
  "key3": "5Mzd5BqWNYLqgcCrBaSs5MAAx17KA4RZkRmPWy1gy6XEZ55BsAWhcptuMWMyPkESXQDxWoEo4gRA4Jp6pXkGW9Yz",
  "key4": "4HEAJ9Eu7V16uCEe11Ybscms9W6s4zXJcwxDRhvmkFv819XBSFccfhEodg44vbHUyeHTh9zuQj65KhfyHopGhoVP",
  "key5": "ggV1YcuPbujkcn7bi8aL48xH4mwBguDy6sTDGmzediXZvSDHTxbroowsPbYPJiYSR7hi2LMoM9ecAQdhQ4GP8Yq",
  "key6": "2uosYUuWJ8EZaMpWYbZPc6k6pb5C8wnghEGYCn1F6E2jpVdfbjB8UgRgi3psrL7n11YPS8AZqvPmjXrhhvxvDmKP",
  "key7": "3EhPN63GMf6x69PmkWucVL7UMZXFdBDMSsMq781XEw2dAcTZZsDtz56gxncaPNDBHUy3wKfvLYjsRB7acqMTAaZN",
  "key8": "3DVLocYE8af1474jVJEWHG5rz6RxRtyt7vVvKABJKLdnUxxxZ43hkyZgnoLxMwnss7KTUwyWsTr2RkaAS8PyawYs",
  "key9": "5LMRgPb3MfnFmQmUPQeddW1GRp17nz9EhvgwwwPvhFn1D94M6gbNnhgAW5wmLNFoQ1VGcxsmHKkRJu3cddbuzPg9",
  "key10": "RVFRGrfiwzcsF1hEdKXq5R4VqnzuDoTKasrvdsj7YrAuAuxUDDPX3PRRTpoDKnWt3YtR2UATABxLgEFY65Nmc6z",
  "key11": "ZjSnGK7oQqpS7Zxet9Sp6Ezs5fAjeSAYXtgM5jgnBGJq8E9NHv7LPr2awCfgihpZAGLuqGtnS2DHkWCy87zCZkc",
  "key12": "5yKhJbNrGNj6oyk9v6HmDQrA9AtN1X8CY11TCZWQq1rFPNGGgq7eVMbCUswKp1zGVW4aqEFdzwuevg3Qku8C88U5",
  "key13": "4wiXxiStir6SHRiK53TNs7Frv2YTm1495JUHUXoXbggFvVawfnPqQc8fGszkeZZ3Moeb3hYcdaTikUEvusFb6qkn",
  "key14": "4yT8CJNJpnyMsVozw9TL2yyNraC4hZB9uWDTDkVht6mvdkD4bArBAAG9MzyBSYLCs2KMhBRAVnteQcQAY2d9qqgs",
  "key15": "8aEaQPvFmsAtZNz3UGHNX9nVTBDYavAugg6r2r96tkiXjYy1sfCtckgnFZ7LzApyNKkJ7tyAthVJQiF3huBFSmu",
  "key16": "41EzbCwBGemTPb3QpJSjYYmB3EY5fQq1bpJ3yeAc8JPrbzBo2MtNxZfXRXYwEkJ42C9vWsYBPQANuwYHyBwPjjAB",
  "key17": "3y1Xme81sND8gYRJEtGFWw4qPwTevmwNKrJgRhwedx1fHtrJdGC83mTiuZZnJnBGhvZ6voUsfttf4dPUXRP52qrV",
  "key18": "2PvubfoiNUiYfxuFoXakrDMYxRRdSfVAnZtzhc16NQVNQxaJ8anNyHQyru9V9bT4cfiw2LmiCbhNrDnTy72hoqyY",
  "key19": "zWNjhQB2xr1oKeZctBVd9yDKGWbaCxaQZ54UCunNUDdQUyyXV53Eck5CDNPkYKsinvUQtwGJrg5u9ZWPRqLbFYv",
  "key20": "5XvNMRAZ2W9dgT1t9a66YYB1sVkyUntedQq1BVRUHnFEsbba6j2qVbTbfYm1xfTthacjUBLfntzzy6oit8opCVZS",
  "key21": "2wPDbRWEFC7DznMiU7bzAqa8DVSRkKZbXGAvgQGhrTpkv2BkLGYJ32QR5ApWMzqsetYgPitoXfZSedsoN6MFUSVq",
  "key22": "4j9hQmbiT4hHSAJRzSXAJqJ84Gvz8PMg5xjsmFiyX3J6Kkeya71mexDUpjZq9nSSkuYxfw7SP9hfznPeXTNadqdM",
  "key23": "3UE47quvpCFQEw6vAwBjQ8sMa1cbs8A22z9tuqqMEguuHFNnrMfjHE2vaGK4GkZqwSmfJHZDW5LP7w4zySJsoLNN",
  "key24": "5zZGSpFH2fYsGBqv8KSwgmPpHDk4tXkG41pczu6gWX9cNG7xWrRNvHmDxfpH2kmrLNBKCK4N73dhRU6ngBAfHayC",
  "key25": "2j7etBZ2Jdt4mT9zanFE3RegeJAGD6mLifuMhLt25SMuASUNVNAsqi5zyQKnPqT3NpEwB6hNxLBKixm1QKJmuc4c",
  "key26": "4NV1EWojkL5gi9VE2eq8uepaw5VHnrqU9q5LiDFAJ9CoU4KvkkJhjVN5XU6uWVjKv8yMkYZyuEu84uYyJo6EaGgR",
  "key27": "2jSwENDTRL5wxKLwXMYNtiB26yrvQ6sCsAC9F2n11jKmjmWns8LKBv4EWFaDsd1nSmZ3KvebTVgfF5mvvkemhJX5",
  "key28": "3SftSGDjhEu4zEnA84UiBvQ391hx6ZUEXQ5ChJCjaY7uuLjEhcbtHh4BTcdnPQ5NibspeRE5XCFV6iYf65hn1m1V",
  "key29": "4gBFt7WMGeQbFg9M65bnYk8bfZn55ZKv31XQ4oxa8cb4wSLGtqrX15fTtXmkcsiF15iDDyQEXoqToqwiHzhvWcbg",
  "key30": "wBhCVmDR6FcQEkMwBnoNHbLP3z39bckeKt838xq19ktky845w6E7K9ScG1BhRHph8TgiZtsGMJgsSptUGBnkXDN",
  "key31": "Q3uaYnvaewCcc5yPD5fYw91Lfgh2yuGepaCWRpixAMXKi7r8hc3KGTM3zmyy5P62D7jXxXenjtAkAaXStaF4Hsj",
  "key32": "3oeHh6zdUQEU2kbUpoXt9WkvX3UixfvVzVomM7t1fePsGY6mX84HuGb9CmPPVWNHvSytUYL9uJ2MZAxpujTg71Uc",
  "key33": "GERNZFigUULf7FnRVPkpoRSH1iefk3V3MnfDrymy9uNfw9owrEiLcK37gGrs8dqBVN8HLHiQefzczQ5r3YUiQv1",
  "key34": "61bFHbtE2bvP65ZYWCaktjmjLsq3UxF3N5zYDXYxxe3fDnfAPgPV62TPLmdM1UpoPdW1SnnymBCEjbZ8N9hZrzwP",
  "key35": "48eQcAa5zbDLfHnESYVcSJSL1sBNYNNsHjeb2VVd5vAFqAWBucJqURtmAgtQxm4xjkLWRyeJdKsq53V34SMKebYS",
  "key36": "LLowL6xghSuG1ux9mTdUKbtYZ4gFBfrW53KBLrBkbm8jk66FncrUYD85s2GKVGrSfPZEV2gBVZ69vN2sPoWZfip",
  "key37": "2xRuMKSGzv3EBaWQpKs6raec9mBtZXQ7wQJLRB7LXRNsWQo83YW4W1wHCa2MMfkNBtKjQitDfnzrbJBQRQPMfavw",
  "key38": "4BSH1owsHXyZdNH891DdkXYyJmK9s1jiiiv8PQzNyWiLdS1K3aSowv6F2hcwcKNpezmWD61tzMSnVp7JTyqiBnXA"
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
