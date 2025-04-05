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
    "5sEBJWnzsGu9pPQLKn8hRWWJEdK5Bg23wu5vdsU3pjWHgdF5XhCXhXqxbYu2acTUw4fjpwePyXj8eU3t1LnqYQFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AAawdnTi9deb9P8GVhKXdxD268d9niQcfGcv9vHDrb2LhVvNLzWZnVfonzXqCmJoxwBr8QkdiAda8KDqMo6A4gN",
  "key1": "QD4TVN8mbxmkDWh1cyEraBToEKPjTL9Qw2cXn1Ev3HDQEvj43iMRMdgeb3U5bVGrWFMPX9eiqSU6wbKFHyBdVHJ",
  "key2": "3HSeo3fYttTSNutgQeq1hpgdEfvqVW8Xo7FqxnzrwFbauazYpHrFzv72m8vmGGS3tb2fqrNzP7qrmM5uGAPRKU3c",
  "key3": "26ztAnR6Rezo3VL1jXU2ErcQiFoy5EKJthxkyLqbyofp8Y965MmpSS2W3ANYHnNuVJjBzefqk5bhAUpnN29jdRPH",
  "key4": "5oCxmSypL5Vj4KJEJ4nB7KE9YbAQV5gGo5NYstjYvBjSVqb11aMxjEdemuxPJoLhJKAmbVF3DxQk6SFZQUKrxeum",
  "key5": "4H4kkMay7e8PdUCA7zk4YCV7NT7ug8W5LVRxfefR11fcUBfbo847oRKEH4w9cMppTHVth41P5BTWZWGWU62QkriY",
  "key6": "4PMuToFFExrFQbqtJtJEP2dFvWF2sKBZKtb5TkpqmHUHTN4BPSn4jofwneoebEdqRgsduMPQADMM3eCTZWwYBXBF",
  "key7": "3Nf27YTiFcQJUnvSjNdGvceDwGhjrWkZgJ5wWhSxgD3LP1wKHCXeg9hLkJrgqBPNNeC3cYtADjKaiGuSt7LENWrF",
  "key8": "4FNZu4SGUSXDHkKBkVDyKjeYgJyuwTfHTtitUkAk4UP298MKp6RvXAQbvDJCN5gvexNGvGUjdPzPVXESJHq6Bq1f",
  "key9": "473zAcfroHEMtEodWhQgrzaZ3fvruRXG2E69uPYVXW2YLzjanfouqtjajinoqCXeiB3FcRhrjuuqsJWaZrzo9AEk",
  "key10": "9f4U6eLTS9mVXRNrKvQJjWGEhcRjcob1DkHY2oB6dHjbTsVkKcDHtQvGcELa78GFcjCxRMf3tfssYKsts8YuSiC",
  "key11": "3KCAUr3iXeMewp5ku264bTaMKejmJwdMpyT3qyvEnnmsqgFBsvmioAcwcSdnUSnoxhYVejcJ82y1x3eeHdiughZw",
  "key12": "4fdDFbEMm1rXhPr2Jco5exZj3tozVTQp4xnb5X7NBYx7n1js888Tnj7BJby5CgadZ9AA4LNnsNsseuYYMRV3BDYn",
  "key13": "vFkrsodyuLM7EB3Nzc5swQbhv8Kpuw3wg6v5aGgXtTs93ERwaQLDYFBY52GAbXN3uBEoZx41yVECoUok1aPQVc7",
  "key14": "4xqqbYsmW99xwFnvs3e5i3rkRQ6mnuFnw85nHecdgTCrLHC2mHx6biZdEiSZQuGsKEFdm48sFuZ14jfPDpEbmjkE",
  "key15": "4ATgCLnTGnaMgVQwJDmMGMCskUKF4qYWfi7ZuFS2wDTXEDoZCkB4nunJaDiH5nL8xip6dRHDf7z2TFDJq1vMJyNE",
  "key16": "22MNNXDhEhGn81JTxxmjj9NtqVWqwkyQMppfB34huQv7JRy2RpngbiMJ1zvJhtXv2C89QaE6vfvifDxpMjTgagUD",
  "key17": "37NEpANgqTMyH7xXMmDzAhZze99s4FQV2naF9CE5VL4t2Lrm7RAUUfCHdXheo6VyKHzZBBCEn1jfrwuXsUBzRC1L",
  "key18": "gTCXMyysEivix9Hc93QBeH4DcHcSH9FVre3KEgpXbPjKmpMynLUpkuPV79WQQ2GkCMxBUqubsmnH8TVdfCTfwYw",
  "key19": "5EyEctebWNpjEvAy6AeQcHA2Nym9yFHCEUNg84D2c8SVD3tbRkNbsKsdmU1UAXqf8bwuHuJMgFe6hiLzmdAsFt21",
  "key20": "3KBQYf26X9eZ8pDGCbrsnqhje6bFC5ot8mnC4G7UAFuk2dJe6yboustVZZpkF7vubieTrXiexeZ5fbwdKVweZsrT",
  "key21": "4rTvXKPcAA7f5B7qF9hbkdLYkev6uqq6iKbk3EVARUhRf649Qg6x2HGGjcUvt6MsApPmWgJDVPfRLmxKtXpcXDCi",
  "key22": "3ZGi3rmXvx1RrfBhqVPTqaBjcBZg9E9HZHzFtxTAcwqL1zyzqNHPKb6fEwHkiTyoYCghG7UGMMYx7T2sXMn4ps3x",
  "key23": "3KEwu1mSWJn3CiNYiBdtsa8bUCTEPycqereY83xy1tudim5zu3gu4LZffn6adtCNyAMzgshApZCh1Qq9DXBchqGk",
  "key24": "3pmgD9apQcW144ANan5pyvAkws3WCXVgqqFa3aRbN9cyMjFgaTcVDhRU3PULNPLCPowJHKNGW2RvHXdj1jmJedR4",
  "key25": "5r2s7odQ27K9yseqnVTDkhf9S2TmawpjDumXzn5CKSddUHe61teq1dJ8YQuLik7vC7jPdzWkTkf2S5gZgQNJSXfp"
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
