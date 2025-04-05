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
    "4EzFUdjWae98CmGM5N289G18P4t9XT4CKgpkJvy1u5sUJQCyyUvVT7Gi76QyH5yyXxQzabHtwAR49vtinFffwpTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w1Hkqe8CEYB2kaTEn7e2C7myQUzW9o2SLHcCKQy2F4EXKzSYPnME8hQHWjdHA3aXDpGeaXUuFXYDuByDcYLc5TK",
  "key1": "3eGvofa8neYoTPRwcemzUXmzpnWwdGpsnwAhzs4nC1aBDZUa6GxYSPN1hMAAKDZ1fwKsmDyxieQ1g4kTA8VQDAkb",
  "key2": "5Jc3t1czTdfzqaWQet3vetpww9Bq3EjmQ6168ELAp8ZpwDVfPV6m4dM8P2dMHWxQxVgZdn1DUcbaamXMnyvNrVyN",
  "key3": "3MV8XGQfmU9Uvy61fECtbht3VRp7J5N79nZ55djqqXYWfeYGQpV8wDQZNbHRG6yGHaybu3zn1uaEE7cp6AyMMvX1",
  "key4": "5AHYTFsfFHyGBmjLGgSMkHqVL3oNDBro2uAcojkYRujuz7wqokDawU15HTbXyvcoo9nFWeJnjFL9Tm2v5FwyBKQt",
  "key5": "3mxVd8kDznBREF6mangdqt84yxSTDEAt8kbfYRZzeJbh2DTjcHke8Mq6hcVU68RPNFJpHBP5M1bdjeBtCEEi3sf4",
  "key6": "KdMRtQo5VtSodgvA5SKZUjjySp7yvYzGFNymCTp87zfyXpJMSLsZteFv1N7P9YVU3VDfmXVD9LoUd7fMKubryzN",
  "key7": "bDrraXmArW1sEbNM53TuG8wfXLHsYrBv31aLxC1bg6oH9MKJfFjwGPyctvWUoJrGTVtp7DAFijBBkS3FC8c7HUb",
  "key8": "32pxB3CoLn4CCB5JtCN8VikC3NWGADHxhh1szY7g4ByagrugmjUvsenjuxBy7JnkG9ys9jJue9YYUJL1XVs54WLA",
  "key9": "2tZeUreKdphonQYJGCa1x5TCBrkmFcXxae1KskqzfLXCwomfDa1fRzy6XYAyM2aEEuxpaTUrZK22Rhpas6USGcYM",
  "key10": "2cwT9o1xvFZzUKm2E6RRPSB5LEWsLa4T87KHvNm6Z2aerLZcr7V93FUXd6dsiT5zGjtfmG5Anee4vJQ6DGfF7rFL",
  "key11": "2PFs3yvxABpRQZ6Pvb4tySpU1S2GmPq7LGxKtq3WsgFgTAegHBeZqmpGpMdbXZrXQczNWt8j8BTaDsx5QLbGuXA7",
  "key12": "4g7q47wrsGwHXtV49FWPmxGZU8rm6MK4tSJvyqwH1FoUzT7xqAQ7n1buMQsU7ykXrQhbycaFrpGrn2Y3wVMHp98h",
  "key13": "3qQTockeevaYT3kq2oz6Xwn5oB1RDRctTpNCR5JFTHXMLkD6mUDYuLW1YqH8eez9RfabQMPJw3AkwNxDHgyrQVQY",
  "key14": "645FWGDHSdpuGeDm1msKVNkp4G4rE7hmKRYyvaVPaa6c8DejARAWpQ1xa6EQev6z8V69CBRF1yuerRLyBV6Msq8W",
  "key15": "4g4QhP9grHSmS2yGWEPuVv57MvQPXMJhAwuGknDqtVhEBzBh74rUigjSkGNQC64mpTegi68Cf72VvhgAp3sK6JDz",
  "key16": "29k5WHvX1muJW6ujsyUPgayhJyDZLWQVmPDyHLLJSavtT6h5QSr62bc1RZUDnWBUG6JUTN9kUpNvNieBM8NkECXz",
  "key17": "4UeaNr5uKZhiCeSV2XmXA2zhi3tDMpHYqrS4jFsH5y3CP83KxMgxxZawXHRGSFJRKnJgodAFWLTdSujdir5m2EFG",
  "key18": "WRF5MbZWSQcmEpM2CEWCY1LDEc6FuyTar8rJPbEL8SGrcXtPCawbUFzjRRUrFYkVuHVJQJXE9x47E7LvUk3WqUn",
  "key19": "5xhsUiePofriKPbA1LZWdDT7Q8gon88RTaxw52MwwMHW5YtpFoxRqS2QUZ3RoAmUsSmLrHcTV7stAMqLRkMHMLy8",
  "key20": "3pPxZ8Tx2ATgvcpsA58ArX4cBAQB25wuFqLwYg8YAzzAmzDhfMxo8hCAVxQn4dYEgzqg7ikCmBLRAGP3mdJggsAf",
  "key21": "5Q6E2RML8twMxvsTQoFVUEeDWtLuazjDwyRxwQm5gACZ5YptzEaMuyvHomWGW9vx2asNJiu5hGttSoaGfiPDL6UE",
  "key22": "2aujZ1pZ2bkgxYwLPnSF8MPA1pYPxDKZCeRWtjgxZKs8q8MUmofD2vWdDRHFWRBEtWsYA6ga8yC2jvX1bHV2mDL5",
  "key23": "ECYkezjebLRbFU4VTxBZxkKs7NA3Bb55PbNYJthvzyX8jnGKtsoXhS96n3P88ujELC3spw5xrk5B5VR5fkkYMsh",
  "key24": "1DCkkq6vPDA7Q2drnhNaMnrzJkpv5pXgWzJHXWgEAAzaL7dGK88uWShEK9ExG7XJgeDeACjbwqsf38r4DY4iZCv",
  "key25": "3qyY2zrHEXt4Xq8Qg2tazJ5shQEn7WM55AJVYXnNtw9rzi8WDzeDGPEsEfAzUjE4auDyidEgf8JXrMTcU56teTRS"
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
