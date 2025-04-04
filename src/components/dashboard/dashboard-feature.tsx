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
    "sygiJNgjxEaAWRop9TANNXSdNoqSTsRPqGYs4kY77sd1HhhFsUjPGUHCVoGeWCpyJzsW9qGgMUn3pdwVEGAZDmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rYAY73r6UXs8HqDfgJfnFPrdAunfMhVjpwnQwRX57WPEGfxhTV9GVLtxtXw2H8ReHJgfTqLGT4mXeAj3W2onGJB",
  "key1": "3kNNVM5WR37i2pWe6HQDy2paWBuhx9cAMgdGpaVymRHN8Gq6PLeVHxQ3tDFBMpafPNPSy48Bx3BoS9UcJc4qycPC",
  "key2": "nb5S3znMEARS7c2sMyXKgXqYBeJE87exm9P2hWjzggyqa9ofMZAFg1UjsVpLY29jxHpPudfgrjHvDfGtaAzPZPy",
  "key3": "4eqMCyYL5QvhJY1GRZcgTa5TtkwdHpz4RQbfFGo3Ji25cgwJu5RkZHgudA6deMbNFFFcHS1AmFmposS6NKbTz317",
  "key4": "38bH6DBATh6cDbGz9pVR9GjcWtK7Z1EhTe3ddqdQhL2gGEGs7vhkAYVmxQNuV9ecG5wyhX9MQg8cdambutdi5PJh",
  "key5": "4fzhjxKDZwQjsiXwoPKovW3Fk434s1oHjBeg3nfgDmxUywrPTfc83VZ8Pxog3QAXhXi3AyTQLbdH1HaMZ6gQn7Bk",
  "key6": "4e2sCfegUUsffRTttnxC63tQvKCTm1X3J2cX4uQXXWGwgfc7UxPTykAh27ne9yLQ8NsHgNKNT1qzBDU4nFA85ByL",
  "key7": "LtYah5PFGpyvmPSBoW8MBcVQmiXFU2tyc1YX5NGCjYUeGmKZhm6PQinSQLU8BpEbfhb1TVggLUazkTRjZqaKFzA",
  "key8": "JRxjVo5FjKJPPUF8a7MFKoStdy1hVqSU8rtZQa5Tgp6BDRwPG6oxYhYcR2U83m89WT9xjLtjtschCdjQtNEKFg2",
  "key9": "4ZtNHdjqM9kUwukdsRH1Ex2nXvZG2FaZN3Gyy5Fg6XbzvWSSnA27SHz9jTNCWnErYCZ5p6urup3z2YhtfBwe7q3f",
  "key10": "565xyid39H82rS6R2FsPFDi1aV3Tpx9uHDwbDHXzbNAC9vz5kn8V3vsbimMA14Q1VR18yFGYk2wKotBpxtvAF4Js",
  "key11": "4cbZq7LKPPyuWPU4jBDv4fpbxJR5RwsZGsqwNQUoL4cDumLXCrBkzEJgeuHyiUm3zfVSYFdfMJC1Sf8ZiqRjawLm",
  "key12": "3gimizrwP79Viq1ZJzH7WMZTpM21hJMDVPLdVJvfPmdvP4WBK3gBAQEZhY9KYycnCL3uDfUdoYD8s2u241rFszpw",
  "key13": "5o45QWDcLkhqqajgx3WrP8tHaG9qmFJ2rboatjsEsQsxwwYx2htseBo6zhZiKEEKqWtNUUWPokpqtX5UaWcapND1",
  "key14": "4RpdfeEBGNjPPZSgwdaHkgSzBGrhuyFU8eQhGWsDCSoNeEGeHuJb1sfT8TJQnf5arLPxU3f9HZ9hrYp531zD8RxS",
  "key15": "4UNhefcq3waWZNQSeLnvBPqTgUWFj9c33U3FifWCdRi3aVpjB6QjL7ASEUnQjPFMXsWrajNGDMiMaeni5DJcSMg9",
  "key16": "21HZhWPCKQTPCXSraW6XdaXXoHwbQ2mi2t7Y6SZQWRftykenXMcPb6qBVTb1Mbn44szV7uHuWSYBHd1S5FkTVXWe",
  "key17": "2mQBUYy9DAJEpsKUTy9syiWMztLp7psijbBJarYSUz7aveXnN14VTd9uBNsJpdEXU4DAYJepXLWVn8WbwV7Kjzb1",
  "key18": "3QbeNvgJ76V3U6hHdmvAWNxiLt1gnkjXXsFHS3posytqQmeGW2QHyR1vwmLYsCpA63NgyxdroRDq2F4TbyVwwxpt",
  "key19": "4RRTtECYTJKrw1mt7NLBMybwUV1ac1sdh3Zqa3CnEggP87UQRmdmVu6VDpYtPEpXRWCeN87TB3bsW4iDYNGG27F6",
  "key20": "dWD8Jqzs1NJiped8koBNdsNh5BLfRcfwFftC3b3JGyKSyRTWcmAebtT2VWdvhu1GuxDZ3VqLCRVGqC7SStavp5T",
  "key21": "3nv7c4NZ2yMvNmsMWiEEdKGXoDY37PavUgCf4cjG6xhev7S2P2xaPo232g7LhneDyB5gTGGKseRGtxTVKSMckrBU",
  "key22": "3MUEY2KVSwFqLabhMSmdgirL3ZbGs86XJbdaapXRtgPc7gsh6wcoyBKKYep5VtR7JKBFDip9kwvhkY8fFLLTaChJ",
  "key23": "5Qe9wpwVEqZrZXQ581BMq5XwcSV8byVgrE8iX5bAjswJPrDLvkcRmJee3upUNCqSt1sJmjxt8ooGK2ruqe4u7f5",
  "key24": "QJAzUndXtn6UHe9yxesRw3sQGheS44uJHuZtd12dGsi1eCKUNMyFSPALEWs9WtwiL4Vu4XCAhNyuYRhBjSRnmt3",
  "key25": "2PxC3PXQLxy4Upf5VzvergFSRDqyQ1r9oHUBmXowevUWLEK3jjqwxHKBzb1mvQbHt2qSeAZ4GRSoJg9vnWSkyvVr",
  "key26": "2za8D3uDCyEmyhjWJB4WH4DXiWoRS9wq795gf6oZhTnoqTn8MsJyarAFz7sCWQhSDipbGryBdapEUDxRX7MsY2tZ",
  "key27": "32bxevdqKuQBTKKcaJe2Y8KomCkXGkcXh8wiFMRRKMQ3kqqodZ6f5QaLkPKv36MLJFbyiMboGuHtNWFnsQaEvcB7",
  "key28": "2Kjd5HCvTP5GAd8QFbm3uPkebkxMjSHaXMGMrU5tPK3yehMjJwk3ke2BBdGpAnp8gfXvdG4b71kVwSojiLRidyRc",
  "key29": "jmipawHrRhQgCn1RHASEbUfWbYWiSXyFQbQnqSXUPk3gEafKY9HBHa2o3z9cGMQjsDVKGGLMr5rJjSwibjCw5h9",
  "key30": "2LmeUG1GDzM8BJvp6qx72einLixySBy24C6qokm19sSWoPT3QNDdgA6Pk6JPvsFtRugWHA5RGf6HARhYn3G48dyE",
  "key31": "AgJBvZADfxSeXx6t7KeSdxU3X7DGq1vBiy2VcCETBPMRsgpdXTweoxpmZe2mjqJVJd3HyjYafaJfbVbrtPJ9MG5",
  "key32": "4iwF6jLi75QY2CLsKLnj6EAEDXqzgPjaZX9C98evEedbShHR8ztV7jzczukBuXUowJYYNSaxSjFWn5uN4bGBWXfo",
  "key33": "45S9nnXQZt9BLJWmFwzTPGLEo2knL1xmvZqmAb8iV8xCVaDpLwpS7GeNnG5Raf5uTRXnfY2H3unM8qJ1pQSvfX29",
  "key34": "HgW98CS7VXFh5wFxADSgcMKocNniybRFEis8HccP2dYFukGsT8ypcqmPKQXHTaQ3B3GUDkK6i1teLkDxeTxVPy7",
  "key35": "49corVGJX23PHCDMiteepAnewYVqe1AwtvTnijWsqZcXnpLTaLwNGCjAvUUudhLCkwkadciqgGYSTccycE6srhWG"
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
