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
    "5cWC6Y8zvw3NKhWw8EJQp1aVFPgA7MtsoiszbSgY3wvddcAUK8fNLqB7M5M8Ph5KpeW8G1pguBHAW1rKJ4X8ubKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i1c8CBCQKRBYvZ8PTf3QckPhbSYXku6xDzu66yhWKRXKv81oApwURzEF31upw8s2uHzc9VeUxwyfryYXMTwoV22",
  "key1": "5NZydYHbns7HFXkG5UqNEbTGCtMBn5kfCAo6fRxq5EpbKbpBYTHSKfPX3XNJh5fq7insx88PvEtAQzXJVCvQECSP",
  "key2": "5wNThQ5bHYE7s3Vw6UG2cLgJG77YgGsedgQkdxmQM6FcBaeiASwgCVSUombTAaw8snn7u8cRER4Geq46bpbcdFvn",
  "key3": "44u9fZzDLSWN1pE1dUtwxi5Ti6F57XZ9WjNp5uExs9fVzqsq3i96TCgxcxYwasM9UyegcbaBJLgr8P4DvFBydoiw",
  "key4": "5ezkpQ1bMZTdAPcbmWopKV49EHwF9igGMg1vJWJRvvdUCTh1LVM9CcjYYpGfy78Yu9QoWw1ja2DgseLJfu1ypy7Z",
  "key5": "37gnthkZMiNacaxy1APGBGEL3RjDofF8gUg6ctmoUBAyaKpQmTM22Tx3yV9WQjQWq5NTNK9juf3K3pC33JZLKEs2",
  "key6": "64FkpcHdHavae4BhcAZSWebM3kUNJ2afdbhiUsoyVXsSU8Q692ji15JTS9p2eVE36bsRHS8j3pnz9bArkRm52eQo",
  "key7": "3ZFFcVgyTPjUvao91qs9oS8Ca4VVwvTsf8Ny8cE2AN5Z1akD5Cm64ctm8dXP7VhMSGA6pGBHLeEwbHySYfjq19t7",
  "key8": "3ZRvLKyccrvzdZYZdbccBuV3gPyNUaTvyoExdRSv9MSjK1U3EwfjnQXKV5UPKdk9rzbaeeXbpiRxfN5DtLRkzW63",
  "key9": "4BvZhGbL4pep6ymcxTQgEKu4Zy5YSPeNmE3BpKRyxnGMKsi1Cb5YZeM3oMC5M1VYJ7bRwrpu4WGP23961dAgRYyi",
  "key10": "4LyCgXkL5K7aFXMEG1t16pCDLkzgzUBdRcKVdUvzgP9ch2yECstibJrNaTeHRLQTccAb3SQzREuiWcaneYkEWbnw",
  "key11": "4saF8kQxhX6FB8JSfvPvp84LmGx5sQhhoZkwVCN135vXbvmohwcLrRr9LETKHrfBGeHoEnViRqEpdQTKoFv352xU",
  "key12": "4zvgzWyn4ugRLDDyjgCBNofnBYJUvsRqhUdUXc9tGGgJ2rfNDcJVhpj4CGLVZBSRcL71LUXMdYmX4VCV9cRmabyv",
  "key13": "2N9ghPrQTGL2fperzRTs7jrypfAmXxjxtez5qk4SX6dYSSQJt2rQ1JzwQtbEf8VVuuDBdHvda74t4TUAsGWA8n7U",
  "key14": "3HmNxLNFXhBYxwu5JewmB5HGgupFk4kJurEy2VRbJAvqnKSRqgafdsUMVaffDfGM9wwGx2YNPKDSEKn11XAyWzCu",
  "key15": "4qQr2XGF5g3ezMsfRyqqURWn5y7J4GC6ueTmVDr19skndoRVLmZ72XUm7p2GqfgQcMiKDWDnXqcQvz5Zq9ZDnwMs",
  "key16": "TXiFTc22Uf3pb7tSd46dAvRcSsEJAESNLenDM1saEBkj6RfCDDPM4myc48enBMouoErYU6gRZVxeGtyKzFopwfe",
  "key17": "54T3MffVmAUqjEJi52sn2VZV8HkuRz8NhHJY567itf6vmLNS5RHFHTR7dpv6myaz3FJAz9kFFxDLGUMHoXovtBie",
  "key18": "5BiNF6ZZfgFSBJ8aJ21b54bFW1tTfGFjESFFB6A6CZwbSuz23DMnteZWuD2qfQY67aQXNkgvZviM8pX5R2yFKkGj",
  "key19": "3Rd35sYofTR4MWQmzb23J3Qv24UytK2S3bcxtfYycTAoaUqJDRaK7wHw6smhyjni8FzT21XjgvRAFfXNGfRVSAFM",
  "key20": "vd1PjhGWo9k2GfxXDeB5PwRamcT2GmJ6pbvFPCmhtjEKB4nxQ3q5VrmsYgrVDyGzr5TzTq8mFTcsQwr583EfwtH",
  "key21": "52p564eSz4iLx6jCMYdVBKbQCt9Buutrb6sVMC4sgccXfqqueJsVyot3c3hty7H1L3fTTdVwhRFwrn9wEn5Hj4HK",
  "key22": "4YyxAfjxje2z1HmiKA8kHN4PvWSqts8e8DB3hiEoAVWZEh8PeLNWkHdsoCwwV4thukLqv351MFW7SY1rMaVPGju1",
  "key23": "tKZn1uoV17m27PzPjAt3XKLhFVe1gy5PdEkF3VzTSQQSUZdXXN7XmVWkda42mX7tQELApA1rHPNTquMJWrAntDC",
  "key24": "45cEwcevC98XoGP2rswrBH2UHNLQA9sTUzuX4usy4Eb8dQScTQqeQRguU2QzNUpaJGoEWxZB9R6CzRydGSJhG64G",
  "key25": "4oMVawdw3bba8f3NCwBkF1DXSCNReibKkkPuuJzPYeDEWXx4DSjVzwtXbj12hUpPEFpRv4ShKuj4MaqZ5VSgNHUs",
  "key26": "2UwZt7KrvNUiHFMp2mfaXqAKzSrUX7qK4ikBgEy8HTqnwavYchirWnQQQRAcnqaLHRrYUiyRxjpsGDFWX6QWNsPK",
  "key27": "yBNQ9MfK9v6DBLU5ptWHBdG3eBMn3isWKexa4rAJgfqhkWoLGfsyZ5V6X3ZPVRZxtt9jWgZ8AXuy7kTTg6v8gGu",
  "key28": "5k4SuJ9ubxiW5ANNRggzoxFWNna3i3BCT9hwP4YZWKPuWqGbSB93nCSmizrBwiw3ocJ5kwvdyKsVESFiMEika5Pu",
  "key29": "46MMctMgm3MR3hW6hND8yQVQwcdKLwqE8fdgWeGDKQ4jDYKUJWYYQpke9RMEakXx75NEt5KZKNo93iZ8j3SDwAsu",
  "key30": "4S8gZgfAjyfpvELEjqiF4HHSmFcXAaaryE6zoUYN7TCnDozjRL1vchbUujUbjDWy8DAjjYCAEzAgWsd98KmMCf2S",
  "key31": "2RTX6FMT8xbu9yWLZ1s6bj67ynejg2CGsm3mX44MEZp48iygQHQ4huabHpBuqCMdhqxL2Rc8KEkpZMvUCfMY2uaj",
  "key32": "4yWhvPMjZuyGqtGCYQYNQpmNxtE9NqocjRaNF1YR6cTvtamEisTiebvVPXyTMagdzNRqaPqdBF9pwDJvGkbzR2Vu",
  "key33": "4otdDiAS2m5ZLUHYkW4Ua4QLDBZoVnpuHz8rDk8C9NswNZfoy6sR8hDGx6Efp3xJ6jknxNFndYFXSJrBhyRukuU4",
  "key34": "5ovpCJvcz4dSwYnYJZQpPucfTJ5ZDAnBk48HrzkMAkStUMf2apPtcSzBDspTaS3qqq2VKQU2fvUUAez3K6qiTuvK",
  "key35": "3LrUTq93SXLda4UVs3vAXzGdw9s1DV3bzYrxFDWJw8pjABPzmtJhgdHoTM82RAuNsFz5n3pir2ysGJ1hndhQfhxp",
  "key36": "4J14PERjyRfxWU9q2FdE3dFhZsohUtRHyK4nA958TqWraYtkcfEydHKhhHSh6t5JNVLWiSehDmGkvd4Btm4ktaXi",
  "key37": "3jRLQE6VMrp8qYZW6BSUwAvrcPPW8B5X6voQZAJBp2ZdKyUrfogmRFgK1FKsVyfzYi7TfHpSybH9JYYLhqvU7Jcw",
  "key38": "2EZGAXqXi6PvoutLVq1oyynajnHryNn3UdnP5NgP9VEcWZnT1WLeJhqkZpGQoNhFAzEWmMAaLdBcPrdLhaSiAGP7",
  "key39": "36dh7yVfK7pVNLzE7TPu43WujbHd2F2S774ckqpZS8jMqMHH1zsqLkQysKtwz6spmMrVaJRAwd4G5R8PPsSxQSmu",
  "key40": "4ZWo3WVcBMjHTUF4RutN8dFZ2ahsyicQUFseWGh6cXbkURZRdogAiYbvX5EVNsjYt5UerDLHtSKmU3kMSk9gURAM",
  "key41": "5EbFtXuKANcTrpG8VPJxzi2tPr763zYgaBFmrLzUGJNpjF4jQ9GG9KNaFCBk33eP89pZo6EanKhFMEphwxLmVeWM"
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
