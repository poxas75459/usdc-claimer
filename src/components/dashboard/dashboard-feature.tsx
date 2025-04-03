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
    "2p2CCntNJwfY77VY6NfAjM9SzMPeqnLzqL72w4BRf1hStNqDSyuUNQ5c4aTTFJa77mR2fhoJuHjeqy5dZCnRTBQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YcUMLNSGkYTW3rWpnVJUSvc4FZAZZkJTrCznuMWTdzi1NQ6hBHHTwoe2eqsBintcuYrMmgiwszBjSKuxhcFvxWQ",
  "key1": "35Drp3FhEAKKpmo6wMjKiNPCo192x6ND85QCHzkTUBWBUT7iDWRvKQZCno8H5fQFTovRHXhV3WKrXvv2FgUY3FWu",
  "key2": "3iqgY6MfcjeW94Y9TGjfkb195owFrKcYhVmwGhuy6ta8r7r9paccrfaPEKnoWjeSdgURy1H2s3xY4o7dGXtyzKPQ",
  "key3": "3WLEAGEh6c7KYeK1TV25nZNSMvNFKaWcjiasyevFLdfgmpj7GWn2cFDAgESMJyVooCLNFqU9SSsZgLz5t5M7vgpW",
  "key4": "3KQtBHxz1ZZL3PRWdHwSoxwsjhimoerk1ixatpTAT79fR9oiyUzFawcBNo34oj5ZuE7QK4jH4ZyLWU3bgt5ZHE9Z",
  "key5": "3fHSjvZD7v4GeureSK5XtRyUmmXSjyqQ94yUL6n3PH6wAXr1nXqrvXhKKhLBZsqLoNEy4igGnTy986cJ42UeucQR",
  "key6": "rxo35Y4XJdS9E8ppfmfVdPhJdfnJhNmpreCmxRThtHA5svCv7wfVTib55oXCLcjroHEVohK5VP5Fctp2qjSvAFQ",
  "key7": "27HMdv8Av64588r8PEFxqr7QfpbPgPKt6bwdZ1TmP7o159bRZMdABbpsNpD9uwzhaRpVR72HpiTuBsAcBF9NPj2y",
  "key8": "5ZtKUREKbsxBeSHo1BLJ3eUh3nr3siwKkWprwadiP4YGYVg69GkjTsJJERSHrWuPDb2rctZwiVaWxWYZ4hp5iKYm",
  "key9": "4YN3QnMEwCakpEmUSdSQSNQcAjyQTbzBrANPYmJJr2Bqiq53T3TUDGQ36iNEnUVov8ZPJTpd9ivusYNScdVuetXr",
  "key10": "5EJCUTGxVpYA122SBhPTpLvvatmqbnSgE9yAV6DCzaV41niexW1U9Z9uiBe4dYaqMvnjVCJs5XHgpA5qFefjUsh9",
  "key11": "VuufyXoigM4kbKebDZtXiPTLxCfWsU3JfsZMhQNYMArcamMe3otrj9SUibRXwRcYP6t8qsepRTTMMv1MWXKPrsD",
  "key12": "5S4sZba24Zf8WGzwvWHevXMHbr7ZzTm9N7FvC3QHZUKumMqfxx82Ss1PyWDdxhxk2jSJq59c55DJp8p93KHran7F",
  "key13": "5kT97vJEsA5ruTxonystn9sohHoD7xYTkMfYj8kVQjMHtMx2KZfGFHjnQ5dNLq1cCkmzh7cveYkLpYvPHCAetfmX",
  "key14": "3sZFhUjG63L9yS7gQbhQR8JxfXVHGftD9RpAbwcc68VDPtNUXkD4dSJbRBehXQUWu1hvA9fBQUBzvYy9XoNHLagC",
  "key15": "5TXi1MB6V6Mh6EEL9tZJrSZya721eXpyeeWnFqoRhj2wjPa9EtT9zhiRTuN2UJfAoAX3gq9kEuRUZ4FFjsbeuzFN",
  "key16": "2zhNHrCrTffkNFYE5WikQrhBByHSedVzGQvVMsdy7PcwrrvEkyLLUbsFPKhf2ifRWYFEzkt6Y2z7ZBwmmS1xeFQq",
  "key17": "4d25yDHq2eq3vwvXE1fFo43Wxaaf7BT9JgsGfquE1HuyjySL7N24KVwhYBUUBUPZ18w6es3rXjpgpM5Dx53LcM8L",
  "key18": "Rk5UTEQ3HaeGFfwtQJwxoMV1PiDPiJ39pT8sMR9U5Qp6oyJhaNMa8eDwM3wk7BZQnfugGLGFHxfCArQp15Jd4QX",
  "key19": "597XLQujLxsDfjuiPFiEEgFybzGUf38DhYAqv8ZZtr9P7N9QMQLiHDvn8MqiL5NThG2AR6tLdJ57hMawFcmhjaS3",
  "key20": "5htZrTJ1VM9MKjTryUJo1qYhyT9DUMSSSqsSAZVcQ4eptpRW3hBPwyMgRKuAUWNXL1oLPFoiRJANBumZ6dyYsTgK",
  "key21": "5VBAD4E5gpMHVSYXWi7UoHdnJHfjwQDSXWXXp3chRAtsXM9iZhEpm45ZUQPeKmPWNkNAk1MJq8bd6tRBXnSupgYk",
  "key22": "2iA1V8TfmtK7t2uFdibpaSqaej9dna1oC1cYgYkh2M6dCqGehd714SFyCBL7LaCL3EY73ArjtVPnZTFBzGmuFheq",
  "key23": "3T7gf1QsPMQuLHHN8Hr8QP5b4TSPbMK2rBEVuFFvnSRc1vkKNHiYWnF93mduumJRVsSC4FdSTLXJJmKmCQRXfLsF",
  "key24": "2b5VKPDYPgHQx7wab4LM3rR4CgXZuGx8exvABdzfNGjLwQXJ5Fey6RwQb68FupzAGac5mAGZRWA3vPxLXEvDsCTD"
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
