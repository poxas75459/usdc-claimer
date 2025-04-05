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
    "4uzgPRijugsMGC5VH66uS1PnRgz69Gd32mReZLHZRNeQQCdXTm1q8ZzBj9hiYcRPjkpEYTXJCYbzacBehVKa41F5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KRhnbTTxhiPSkVSnxLEC1Yr1rhr4bqkteX3Jz76u6Y7tAVqTXM7EdePyMMUz4YYgjWaZD4XdGW4Btp63jg9VzPF",
  "key1": "4uknofWKzCs7zr4SdVQ3m9F8L8ZZsCsKnromJSHLHZF4gPUkh6a71cUxa8kQZZsZqkTUKGZAyvEtUmKWovb4wUJ1",
  "key2": "4yTSHh5d6vob7sdzREMNJP1ypKhjoXrA3ew2RocSMpXnAYnPqQEJrDCoxzdgSEcLR8Hu2Vi1djLn8JxJfb9egbB",
  "key3": "3CnQWo6arDScwqAMs3cs8Pie9WtrfJep7wf3fNoYX7V2bSJWYj3158tCk5GuU8fH1vUa7FiiaqUJLYZm9cwAfumm",
  "key4": "2xXNvjBS5iMi2aDWgo78Y9hV9mtSJF3SNwjjhfpMUq5RyZPmZeSPhkqxtMcqatXaUCFHW4pxPpU26FmtksYQYYw1",
  "key5": "Mqak2fNpLUKVgY2a2G3Z8WabGSts3jr91Pqpo5sSJuQGu8xRiNWharZja2iRkZ54eoSNohTLc1H2jywxVhJfarw",
  "key6": "UR1kMYAdtPxgxDWw44qgq7iaJpCrYqXb8jAtYgMJ5TQEAt8VNtMFwXCJ8bbLhHrBFjBG2CKdyC4THuUEwNegLke",
  "key7": "5W1uQtKRAFNTjbFxpwduLedLNnieUrwF5ZGJwoWkNwtCPEPgKS3qh8RCWumcHNGHWTyhjjJc5sjtEXD2dJDiPyHG",
  "key8": "2jqeC1N782jKAEUcztybdTri87ouEZfNpRi4Z6SY9b1Y29Z9mH1zBTDwDq4DqUgvoANrzFqHb1TYTiW9evARjCEQ",
  "key9": "5gsHZrdcQjV9CoYjdZo7C6LaWq2xHduhHHyqYEWLYCVPGPRDNRLyJDhyfsfteAtPGpjL6xEL5SthRVFhmMspetSc",
  "key10": "2thEUeuykJE7X6py8QNjmzkAod4Mp4h6B2yEg2U5nznuh1aqa8qabLDWi8kaLVA4DMcR4wKrifivN4b6YffetJZD",
  "key11": "2NAr914aPG7DUQyRoT9ZUpscXSnBHd9Y3XR68bkb1pxBzdychYUg9mzpoWgdBMHGhaREGpG9HRGuv611WhsYLdtc",
  "key12": "3W8PtXFgGkDPvAutH8eApnB22QY36q5RJgp3LXDkoWy4xSgSwn5MdT2DEYPhkhstaKVBmZV7geBDtRu6KVK6R5yX",
  "key13": "3m4VqN64iPrVP9ASbCPhh2vrNAWp8mVdZ2zzPaVAstR6zBZ3nyjUg8f6NBDRr8vv4G87gAV3Mb9wE6VtBnbVdhqj",
  "key14": "2e9jkJv9ASnNPbcpN4JBkhgqVK6p9eKgr3S1sPKQWcqroPCta5T3Bsz4gv1bbyKGiztjcEkLT72D5K51YQNRDHTk",
  "key15": "48MZ5w6JDmdpCJsnpg8AzZCNPe4BV6HT7WgxEvMHE9usTg2g78w8H8KKWDbHBLaMU3KNXcw94DkPqPDmUUzVjxrr",
  "key16": "2k2ikgQDbyUYGfm5hGcHQtVaJ9hCvWuwHFw2xM7d2T6jaEGExGW3ysDUUoCogib3i7AesUiQUpWHiX7NVFw3eupK",
  "key17": "3HLBap4aysAYoqSwqNPTN45pUQzF7pFPRYYMtRZZ8zA9AQjtP28m8VBzPSqkH4qQWfVYEr96wtj5t9Pv8NKx7fHy",
  "key18": "4B291GPdqfxWrD7WKxW63mmV4PEDuXCuoCgj7jQnRZXhTp13CwAshFju1kn3nKLJFCE6PSDhbRuL49szATgKKLhK",
  "key19": "4bjbQkt3c6cFT1iDSSvQemZRTZEVGqxvnvBqittSv6sRk5wZBcmLEKJv8QrkKVjDMjQT4THdBYbqXtNihSaTTudA",
  "key20": "HKvbJYxEqXSgrXCL7NgEu4fqR4oRtzng6hF7yHwAd2HiYQUsd61Hahf5bEtEkjPfeUw1VSHXw3oMHnrDhie4wfM",
  "key21": "3Y92RfnUn9gFyW9sBNh2iHx4fh7F3uuJpZXYbXB4eJGguorcUM4ZRYbwdadvXc2RkfF7GS73ZGNRHTyXDBLDY4Pd",
  "key22": "WrjKPsU1r9qWkUJintGv6jMFkYDotWRzNmT7ctReRoM84bZRSvNFbU8ocUH2D32jQw6tQqj1jeFUFdWPD3tUQ6C",
  "key23": "hsxgr7LSFwM9qyiKVYLAaWKk4237njY6m698XjXUZ3Mkmc2NggGH4ycSzArHJbU8TEe89Mg7CBpebCiLvLSukPW",
  "key24": "4VarskXnmpqMTM7ft7RcwCvt2wwEPTYL3apXSpGkMu4Ns7q5jUhR4yVGbYTiSKkBHAjz1SfpXxgburoM6XNJ8fkL",
  "key25": "3T8aNBKqkyaZKKR2SZKcPUJ8V2366Z9VyBZ7pQ48wU6Lz6fwjFPwAnKgfy19HLwVLC7aVobr47aV2ich88wvFi8S",
  "key26": "5Vc6QjDk67FJWyDmcCRw8NCYL326BcqwgtQuoLmqos5dRWVihLsVxBgDGbdHsuiUTEChfv849Eo35waq41zMx1aX",
  "key27": "52BDuzcZqydRXMBiwZPRdvxQogcgWHAHXtaxK8nnnnwfNL6XGthvm3N2NAxXqBXxa7NmDk4pgZ3Jxqb7BnaxJjPy",
  "key28": "2CR74CTcBosSNuYNP2QmCtyBuGEbrefc1dtHPtQdFHK3gvPJ1mCn2Xin1CwNeLJngvofuvEfK4RQ6F3TqyAtdUcZ",
  "key29": "5rsj2sKaHdfBrPEFvh7csCwbzgaZmvjmRYWDubeyf6gPiED8SyM938cxRypqNxh4dFQhFQM3TsjDd1nG5fwGtPne"
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
