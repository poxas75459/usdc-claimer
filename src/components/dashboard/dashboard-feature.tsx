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
    "3F3miSdij5gDzSciK7zH4WhH5jF7Eqx9eY8K8A82oe8G2udB6i6xSkF5N7bXVMhqVqbKsgbtksBB3AF7NxNWrPfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XHFa9xWDiMBSBMVpiSZT8hdizhxgmE7zyeX5X4yyoNh1Uyr4jHqcrf5BUsKNutVDUjQgZtUpyHVR6RUGufNKKBA",
  "key1": "4xdQNiHQJX4sd7DdCAM6St2zerpSEoxpRQFfKdvZ3vTCp1hKkEoNxXJm6rn1Deb2XRUJHRHQoXwvvm1rqQbPYAqs",
  "key2": "5zF6Mu4GvMBT9V7jfx3gg4k8m5kF6mKuVeBDh8RAvhsdESxSx2JRY7nWHcc5KndXaLEaQegafAjDbm6isonQDSWE",
  "key3": "tYNyVSMEDUjJZXgpQsrGGcwEz3Fwoo5t6DA6u6KvTGLoXrrfH1vb24apU6SHsBsg85cSj1nkxSXocRRKbS3FhvC",
  "key4": "3eQZRGN7Lx3fbvioubSADyYtbecxD6KguKrPNZfZMBhnG6nMqNxrJ5aUBc7Q2yPK4qSFWw2PMDHv2SrzKJByNrkJ",
  "key5": "3vd5KwMUDWBH9FNL7CbrQ1zesCJMoYkpK8y423yXB3FhE7NBbuueVL36hCHEkVoTiTcDvWtKZm8LT6H3n5GF16SY",
  "key6": "Hqx3D2xQzCwueP8sZcu1iZFE2SAADTXqWnEYMJ1a2JJ4wvrq8WXvrdfcr78J7zuM76gqgyyuHQdvSQJHX4WepVc",
  "key7": "5AciLBcD2UyfnRuWMfYbj145ehtYHtgBrAeZQV8i1LomQoF99teAAUfJbEPrAcL2X5H5StxbZKkQiumwC2yAHjo9",
  "key8": "Hy3MRFBoy1aeoCSFc8sNGhP3FnJL6PTj5xEKPpftgibV39U4BqbRPp2sgg6PbpyXSVJihS3frEizW9SWWpAEJvF",
  "key9": "3WNgAKQkcF7cmuonfBC5ewoY4dQq8T5F6xRYgw1FM9eFhxWuYz6Fd5DKXZxru97hkK78pAitdiCHUzwAPCqBTujs",
  "key10": "5ST6Uh35aVZZnHdanrKkPT7q57vtUuN4mJkwpa8W9L6yZ54xpCPpXc4x6JbaE4SRLUngNZyJHyz69wAdpp6Q6fi",
  "key11": "4zCBbnLXnENZVunbRBTEC82ALP2AhDeL6s6p94jEBodrvAhwayMB4J98VPSKaEkfZVQprba9q7RoUULpH1WhnFR2",
  "key12": "3fMN495SKRXNeMak5eRRUa46VMxu1NijiAvy5BiHUAMU5pWXrz7RzKkcWauGWifioiKYuoTCJcvpzemGKTdqfSHU",
  "key13": "517gdNdMzwmyqt3KMV5SXtRPv6ZuYQXsGthAVBjCt3xvChF2wsw1NWueofGX6ciGhfYXBV6Wxz6WqFqDHg2CZujw",
  "key14": "4zTyFvciQbcHHxH7AtPkC2wF2VPe25STQoP2QQ1RWtJgsQZtLXoF4KDy8YcSo5xzaguPqJ6SZ8cF1soREQpkHcR2",
  "key15": "3gLKPqx8YqhimyZJgyiWc7RyDZs8AG7SAZJqj5QQatdg8UQHxsyXFLmYpiDAxk4oMV1HdxwKJ54rNsqMPwwE5LBE",
  "key16": "2ptH6nBdycDJmLxhiPzrWFayJqTLc3D6zZAcib7eSJ7FoD7wYBEVe4vMMwwyLczLPu1LuQXocMT8VtL8sh3KxsvY",
  "key17": "8FZ46GF1WottzwWGwSjmgG9fHnetFobUGA1qfkhqyxU46FnK4qCepF9qa1DtgjSrXo87oZGhSqiDhe7FECH7JE4",
  "key18": "66s8txh9nrQhKX6U6hmn3Lt9xnohtwhLw4uTPqhT7nCAH29gXHcXQ9uSeMwK8uvTcdAXK8d9nT5kBboAzo7zX5Gm",
  "key19": "1tQkLm5QX6qrAcPyHGgdARdjbCkq6fRNzagzufnW63VMPCDvHC39mKEJGkhvJ2Z2dJdE8NTCsivU59ffqdXuEL2",
  "key20": "ARRyT1kEoFc7zJXMpndMNaJBXfyBZUJmtrPj7Hn2Y8HHDkyLtQgthh7CempXb2XoAU9z9jdHw2tWiWhB3k5LJDx",
  "key21": "4NCwrMY9nCE4ozGp6g9K2ZFTZVwCD3iUwQGYX6kFLTZdbr3RXD48KyjR9BdYDh2usvfcL6pcbe3Z3SPmid9oMqJX",
  "key22": "4euytZ5MaoeVPW16CuxP8NT6kWPXRxvPfVzMFz46XieUd3Mi6L99N8kBHhfnagBxwnTL7XeaNJDnT4c1it2m5FHx",
  "key23": "5eDnwM7Py3ne9JU4jJ1xfZLYWgroSRTfrGJ2PoPPA74abMhMjAEm1Rrio328mUafSbm7L28f3PjAy2kBWXhJX7Zg",
  "key24": "SvwrvBB1g5AUgj5q9ACiAztxPnh4QNTet8zKPU7VBpFDHeaZ6sYW2FVvG6KDKD1Np5rCUChszbxJkbxZpxrJkw5",
  "key25": "2cZcerqLSGT15N7nWevg2DWPHbSqvxSGDUTbUffboKNpC5jAt9tCVwje2njc8uKyDR9y7mMN8Aimss81mpj5i3e9",
  "key26": "TG79Uyj5CFdYGVn85KXmxD65JXhgDj1STKwMLAeio3KxtRQGKXiWY5cduMzBzfqwsQT4w3hgghCrQgrwHMBmBRf",
  "key27": "5jNippXRzL3gMFJmBL3WiwZtgnRziptu45MHkw3AVMLRCtpqe1VbkcCg3M5kxRXAGwSdtDgCHFcTHL8Y6VEkTZtB",
  "key28": "2iLCvTgfkJ2nbGviDcnPjeK8ir8YhTfrnWyqZc4s429edYtQx2hW2WXSj44kXh9Qqx3Zip5tEMUVQFd9oPHUBz7h",
  "key29": "2Vm8rAYKhFnka9TsicsGHCn4umGphP1uEmTe9gSUeh2yXmbxRGRb7Up1NSZGeZcaMCCJ5hmW4DjWGUAxadvAezx9",
  "key30": "2dG1BpgrsXd3fKCZdimaDtB9RP2aMJA5QccTXcinMA7jcTFJ4RfWUrJTwxnEe33ZjwGSZNFiqG7vQe9RnNwiJrj6",
  "key31": "4bni7TFBHFJWShnSY6xKd1xMcn8wDsjWqWiTE2b8gLYhTTN1NvAFW4yPMTzCsvv15CRfZwkP2CSRCkrnLn6B1eZy",
  "key32": "2W91SdEemFmvYcf5bXCG4VMhVcFxjwd2smfnVKgD3XCFyxEziPLfN1p6HsRufUYmmyx7qAkwri9mmwRNKRx6RXue",
  "key33": "5zATW3kJLJpZGLdMTxoFbwnzjXS1V3tXPicVS4Gspb4VNKD3X5Z2pTWgmEWqDZaWXJnvRumwoicbBKsRWmP5zJLR",
  "key34": "2tTuTG2XHRvMydi7uo1AUYnrjCxXosmD7RE8YDtCNiwvHDsNvcSLfLBT5Cd7Cm5A7iR27EHYDEUp7hEWXVsAAVkU"
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
