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
    "4sWw56YMT1hgr5FgKVocPoSup3w969EWakdumfuzQMVrTKB4VAf2fn8Lccaz4FXfkZtBSp5QaP2bWex9uXosvPsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GQBzsMTJ8WtDzV2bD7BEv54WtPg7nHVLd3pYHKe1qhMbUM3Re8XmTcfzvgSVFUDGkjwDPTc6nL6Sm4Jcsb3HcAM",
  "key1": "5yELNsUwggY8v7KXbZDkqCWo7o5B9Ky1Gxrpr23t8jW9HQXh6TBsndMCAMS6shcauAvLADuNDeMLj6twZ8q3WASh",
  "key2": "5ydvjVuBMrC8F9fy5iNnucEXjqfbeNnCHDxE4Y9hgA5S99R5L4rx5HUbAzBWqFrViUp27AqgRY6VrEQ8P4U3uGGi",
  "key3": "3Kj7Pf6cxiiijCwZTRUTU1dJzvqkNKv9JSuhSmx3yX3gVDE41XPjYok9RE7B41UFZzP1p4BXMx1ryJTY3jEFTeja",
  "key4": "4UoNgzC1U2MgXKoQRL988P5jKrKKhdvCGWU9sGZ5cDbT7YQc13me4r5F274N684JzqdvPSGakZ3KhuTrbBCAgTru",
  "key5": "2M9ALohAoRJsX776uTGAdpEXn4mxy1LYbB6onbTY7TZyvGYhQNDZ1qSKEVc6jCx9icRFNU4W7BuqdAo5c6pstdLe",
  "key6": "6fZVrYegCgVqak2X3DH2KUp9atBdnvDATUS5VWnhsuPhEfeKE9txf5p6PGRFbfnLv424NERzBQ95xPWdHxWB1R3",
  "key7": "3f8J534me1VTEev5rY6F436fmgyiAbXqKTk4Pg57XUvZu9MeYsAf23oKLDrMYbvsMMKJecTxnJUSxZeRNdpXXQ9o",
  "key8": "29T96reHuEwESTX1ZcWWq8RXsh3pN2Ph5Ap4cbLyQVJYUNng567CAHeuazVxbWdENZT5V9Hf8BGmgFKHyCdrz7yc",
  "key9": "4wXje8YHB1muTLLRMvxyGHzcY69HSr83pH4cypEBgLmoVQDUV3WaX7jTgTrs2X6JCHKivTUVeL4SppmLdALJH7Vx",
  "key10": "2GmfRZo55XhYbucvPqaeky5WXQG4vyqzcbXvwzDefZ6Bj1ZZCqrnTwVRAAEo55on3kqFNXN2LAkaa4GtmiaPwAxo",
  "key11": "4W76hiu3ysxYVJ4WY8QdAS4bCq7n8HJQ8BhaD1BeyNrBbZmDnwU9ACsh5faUS8AzMXh1xLek2tE2aqoGwchwGmRS",
  "key12": "4ksxWgzryThCDxTMw7AdDhHygv5z54of9ELpQQvGcwKgBVQC4CT4umCX43zRLd1DZCXJEL6R5w1KUgTkjyHxxcMp",
  "key13": "4G7fGSLkmuCpStW9qZS5ukVkDZA5uP3c7rHbsgenrWBkVYwrS3niMb5p9pvc76ypAYr8ak6sfnuUceERaCkQUZdD",
  "key14": "9CNNDm1aUkMzTQysWSGLFEAGsPPh89a5GjGKTmML5D9HAVTsQANmmZ3RQ5kQSwYnU2KPP5uwYyyaTQDNt968vYP",
  "key15": "3sXpdR52Kxt1Tgt9tdjjm67LCygKSuvCk1RZexZKcvKK1whawrY6x8iWkrbRhwT2g1SJdgGwC4jhHWj8CvCGjinr",
  "key16": "4Wfnw5LjyssfJJF3dhvCWK8FBC96xgNxM2fpHxhesJEbRMpu3Y12dnR7v1ooogH6XMeEoY6xh6A3D2qLSvzHLs1g",
  "key17": "4AG8psetDTRazgxeQM9yhpSeitwaSUp5nH5UbtQqQ7DQfb8WT66XctZhBmJm4y6yrGaf56wW5VFXJHzZEGBgGVMb",
  "key18": "4XkDJA6588Jg26j2FJBfxcJHfMLDtxkJn2Mb9PCz9vGvABAQu9e4ysZtfSdHE6YBW6xscFUKeDpKRotzbwdT8vAk",
  "key19": "5cwHkRSPFtmxbwK9BWY88jEhW9KVmN8rZT5bB3AV3M8zgNTg85ZmZq4j8xVeUMCP8iwj8q8ynuHMLToCUxsBtBMf",
  "key20": "qbeFB9Cck8rTKePj9ES5EUjrdoG6yS8fMKBgWN7Va8bWe1KYSWiN7mJgVzJFtMgtAZBrzenGXzCx4j8qZsUv9JA",
  "key21": "s8x93SPNAxUZWZo52UkAXL6pbneCL1UwmuzMTFed9Yq2mRLEwXS7ZTaKuHzWkcZbSeUu4myLL8FbAYbZrWtDxzM",
  "key22": "2wE4rTNTM8bFwnFVM8bwPkqCvtuQysedpp6sazF4gZsvz49ouq5ipEZGu1GxyukWfHXS7oZKxNndxNyiKgDAX4zW",
  "key23": "3vWpPT7qSvrkWym15Djr6WHCiCyuRjGvBquJtZjozJKwcC4k5FSnMggdUavCNUL8CnzGYwBVhstBDUa2k7rc5g3k",
  "key24": "5sCmQhjVCty7FkaxUteZwNwKsFsUKJKZta6sV9GEYBpkP42qUJtitAD6t2zqndAsF4ye63o8ADBZ1ketxUTCUuWb",
  "key25": "67iWFYDLdiPWsh51g96dqHLs7AsYGDp27vRyqbs9V3iLJpPtts6qUNTUowrstJYFmwu56vbQwuWAGPzozuMEW9vJ",
  "key26": "3kq2k5U1kL1jQ4GH6F7vEs9y84AL6CBbX9Qdu62o4pQ9yXUEgTLnGqe97MgK4Ddp6yUmX1L9eiigPTuqbC1DgADQ",
  "key27": "3h4ozcA4BACncSpf5pCAx4KXaZ75bN1sakzZhQjDoZdDHb77uGCUzh41GmoisWG8WNy4b4uKhiPooDkQMqd3Nwed",
  "key28": "3whPxzzFGtedBN8YzLBf7JCG5WQJCkwAa8FhD7pLFn7Dx6DXMq9yesd33rZSzkhnsmCv4F1xUbQs8sH9doo21Q2W",
  "key29": "5PF6EGc87G7rKG6MhuaXixCWR64GaWwDP42PQm9sGQkKDYNWALtyZkfsEWt3P4ojtXWCrF69VxGnrLfAAsTmf1CB",
  "key30": "YKoMtJgWUWKs1znxEor3AQq83t1rpABjK2cCiV3xGhpjbnfpCG6zynu72g5BvLa6BnmLaXBBp7xf3RPWWrSCrKM",
  "key31": "2LzPacMd5sjynghPv6DRq9TB8tSLcKBEutyQxDR1XMxbNK6CzMDDd7S5FaF8KR5WXRs6X1ooRhNtmPhxKgu2YmRP",
  "key32": "T5emrdAFqnEAXjDFHibjg2mGk4eiq1SAEPWEXYs1jEznXbAFdzk8KCJAbbYZjJZh9mpH2fXbrQRkczZAqLvXDqB",
  "key33": "2Fy5ppnWfFHAyiU32iUYveR2f9Dt1puJVMrjBhgRGhtyrkZRSqvc4zSeTn4BZQwVPnoHDBhiR2F93buszBftoDR7",
  "key34": "5fckMThzJoiKmjUTAWwhtqsnuwdXxpzLNh5PU93r6YUgn6nCsJoxM9VboaXAqkWynGPpqVzhJPMZkJT2rXSMsQgJ",
  "key35": "5hL1px9SFWwVEPdTNAFoH66dYhpkkwQMiLsjFavrDcgEzY4V2vjLS7cBA4MH6tEF8tYrSqi6e7ZdRyt4ZRc8DXWo",
  "key36": "4VFScfMZzE7Pyr9zxWVUEW8A7oWn7b4cgFNqqLCX7Q7nCbTgvn9DnPQMrzC2xXk6nrY72ewYzDbFMgwMUzi5zxBW",
  "key37": "28R56aPvSTShAv7G3FKQgw7o1URWdRihjXxSCsA1J9ywSzAJhGLYr7DmGn6UmfxjoZUfDAxaUTXaSrDKFeF4aqTL",
  "key38": "4HK6mFZmZqE27HMjJyJxboUhkEPahS22U45nMt1KpUBdEFcNJ3dkCpWrKtDNq2aJLQAUFRu81P65ZK51YvT9BGJh",
  "key39": "49214CmD9MQitZDw1z89geNCEPjqS47ApkMG3RU7Ne56ZRvNR5qtYqTSjHzBmdvRXSaXQuqLSisPtDnDdMfUfiBZ",
  "key40": "4GZSK86nMTRD9CkUc3uvAExHKRFWzXEqae1YKDxFFv8d8XWamPiF866ceWSeSMGRtdbLWZSj4951DdgzxvCn8DRY",
  "key41": "4N3xHTFPyc3Myfhykuhe5XxqANcgHmoBGoifB4GLMGdEhcA6ecy9Zgf33vkvEsZEzRwfMvnTSZchiRuf5wMzjfB",
  "key42": "5ozheZkye5Sbe2n8AXxKa1jMt8VKhJMs8UPZm2YWhg1GvjkMZp9Aaavo8HDwYGBSePV4jNbKKaTgx2VTN5fnF18c",
  "key43": "FWW5emUFD4ezZyqXe4WDB7khV5dga882tVaWSo6Rcw4WKNVfRCV9tXRbe8zRhiWx3h8LPj4p7jauoTf7mQnkvhi",
  "key44": "3bg3rQu5sbDPjGoVqKmCcUPDaEvp7ZeXNKd75QQtAMq9VmEhUi1uXjEGF172JiJbDub8kohDn8LzSxGVinKnXwHx",
  "key45": "fJy9esi6nJp27whobitUHgfo9YAdEWZ6GS2p11V5BQKwoJ3Cg69fVRUhbWD67nvCoxkZc2X1E8vAMZyMn5hC3qR",
  "key46": "26rKH48c8Puxn3sWEwsFgAzBdaJVt8WB5hR7QvByraJfy2QhNNmEbBZUn4EuJrRFhUoa6gdvZg9Xor8q2ozcE5YQ",
  "key47": "39W9DaPh68C9HXKxAN9UMys6cGkGaoQa2kDwVM7ZJ8mCFNjL4xdnbzdLpzDC1Avy8w2cZv1owjMz1CCPBKyL7Bb1",
  "key48": "5WH6sMGZCE1QcjULqVVqPm84wLWi8EizyQZaTb3KTCJHT7ZR2Qbu2fvMxuvCLtNB7LHETZ2ZtnMKteUdr4FsALAC",
  "key49": "5PiUbfrh8MkYbknhBwrpFJXD84JFb55VSgh2JGT1cFFup93TsfaTMiSBvdc6BoChuCnhyqgt4kRwvN693h9kC5HR"
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
