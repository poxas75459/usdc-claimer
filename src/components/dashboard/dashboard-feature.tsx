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
    "5QjwrtcVYbbXBFL7BvACwW3JNGyWiyAFhvZHtFVreTsFppvz8tfTBPvcCPooGhmAHYtjpndhdttLZdzH9mY3sHim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Prhi1vWEMgutXRE8JJMxT5mVyHg57pqYUPnraWctsiv71aSCMKe8FSTVgeyPmiHHEf2d88UXvnJ3CrnaPDNbUxW",
  "key1": "3juPEx1XATipHN62grMLfHHHHCmiRQ1QpTEZQKLF8MrbTdXDPKBZrkbS6qb5R5v9MZTrfSH1jNKtgbF8PYzuCFwV",
  "key2": "ytyDzXpi69aA29h8uBoYdeXbFDwqtJD5LaxNmtLCFV7pdcGwH2iUmfCjefwtxxRtpCi8azgK3JJXb2PdwBbWkS3",
  "key3": "ET6u65aLoXwFesB3deUs25egFPNjCJjiQFsWR3sKehL1WXNZXSkQ5V5b3L8RU8nKVRM4R3eH2uuF1WjpRC1Rhtb",
  "key4": "BWH9MUHZfdG6JaZx6P16iSXFSQqgZoft4R7rsTLaqBSWkMcrr5pPhubTToTXfQc5HBDkrVMpYvJ9he5CMG7m2vG",
  "key5": "3Vg3LPCqxkeTHLeXEFZqJxkRs2D81oopTNSzTxpN3f2BDcWjojqXERAsaVTchTqzYhVio96jepxouywxzAHFZEEP",
  "key6": "2K6zPv9f4rzr5fTykTJi9QCaYkFeVQJaSVerDdS8Knrhyzra8yKGxDAQa2EFHaGee1SdMkVh8GCRw8xGcdCYCxQv",
  "key7": "4LqqbQMjRqffawkhXZ1oxf6gRa3rg5rjLmk2ZXjKEQgHKqdco53zkC9Uf7xHHDkVaLuyVFHZFyWkYhUtDUqfJJs1",
  "key8": "5FBu8sFnXom2WGhnJHFUHQRzND5jHGZWK9ap7Yn83GbJgjukWg7EhuoK5zDeEBhhscWYbsEt8mGhhkvFpKbTg94j",
  "key9": "3mLoS4KJETB9TkbWc3o6S4bULo8w3PxGnuypWLoS5qtTSfuaphK4PHeVaE1m7kwY8aXGvH9P3F5U62v8Fu8NbQBc",
  "key10": "5HjsC18oKmvrKYn6u4E5vLjpv93i6ykSJ2FizPVD6mexPZs17idRTuqPYmTniWaUyWpM2Dx2RHRWt6rHiFEvB9td",
  "key11": "3mGHSM9ZHRMCSsCJaPxXGvbQ9YxQ3drYeF84VYkbXqw9m91W1317tSr1pauny7rofbntZazfxQxWfnT8tPVPjuGx",
  "key12": "Hon3rEXaKV2c2wH38BpbKh9NPF4CdbPa5Xdpd46YQQZvsvRBUVg1JxYzkiUTUN7V6RFFxryGE1Y2EspGoFQbRLk",
  "key13": "4wvk7jMxEiFEKfNDWr9KRHKAWCye5fvJNZpC4gPk58m6AJTJgb3JNrkho1g1yXZCyz6Gf1VUsGkP8CcRwm6ZkqRH",
  "key14": "3jgRprV5J9hh5sEd5B69VxNo57H2CdxgF9EBaxpE42HAtTbtTeD8RXTxALWqq3R7T5GkukNfTbgT4heXWXyCehiJ",
  "key15": "smKkxKrgK4t9WcFe3icg59MKkkfgfQesMVJrhV5oPtgiadrYZcm4NuA8XVda86qqinDLLnkciyxR1simThPLxdd",
  "key16": "5ZZ9jN2o1yMDnrdjLqYviuZPq62aCdqZ3oWqw5BRzvJ6SceKmRbxAJPeDTNaHuNjBhuezqHz5XKS3Ndn9Uov5yQv",
  "key17": "5RPkKm38U3jWeL8BFBmuKb4KkLkTurb71sfSJ2vz9q131xodT6XKiLZboequXrxY9TSwXRELNf9FvP68mXLfF8s8",
  "key18": "3xmsYVYgPe6KEa6AkGHwRmH4m2i9gAWeBKeLKfHG9RKAkUVwbUYQW1EjDFeHMZXWj5jDsJrBJDSHf1CvS6ojJt36",
  "key19": "43vr3HFkcJafggbsAGv7nQt8uzsxr1obFz3VSY3EQGq8quejjBg3D2eWveFmy9rbh74uSMfwF5TzfEQD9Yjz2UGq",
  "key20": "4GBqULKL1BRyAgzWmZD4A4XWaBLJBmRq1YPUBjHFVTHkeXcio3st4UERD9dsTkm8rw5hcPdhxo47iS28nzHwRRDi",
  "key21": "Y3LURYiEEmTtZtX2TLyyyphuxEc9kDSvscV2yTQ8fxrCEnC9a7yGQVQGTaKRR5S1yt8id3D65mhVG7GPktX26AX",
  "key22": "4w78cQ2Ja6YB2GXxKLeVN74poK3nf9N3vMpahcdv1yzt5oErrenKXCe37mjNcrZyk88Urnqyq1cJTVK6F9hKdxAe",
  "key23": "3xaJTHbv6szmHZbZKBE2CymUrvJYdWYBJzwCABUyGZMN9zsvtjAbjd96bdvRp88SEqEHTa3f2bffQwGVVuYH6sWo",
  "key24": "wTeKCWPiLeUNdEWooN5Yy7fz1MSKoZUqT8kpz1cYbavcexHQ8RSLDPPN36rzbxsBj52eaja9EMa2vCFWXXESv5Z",
  "key25": "5ntVxhVjkKQ3cK3LKRvzRnqPsLTwiqn8oyuWw8ww8R8JxUVKpqUQMz8van9fErKJDSPZ4fCYqyYDFbrzBnJSagnq",
  "key26": "4VMUXZYZUtdiiuZ7uEsVnmJ1hCrGTH75iwwqsovGpkxTfyAPb5i8VrxNrEchMva2z9HWui2jdSxde8Euge32azNj",
  "key27": "4wjhVCm43hdecHZL9Lsx2m8EPTFSpDeKGbBEjY7MKv4ZPb6k3BKVeFZG4ecGEqCVExgBZn5dBWV8UXYQez3sH8AE",
  "key28": "5yHpVK3BGK4bBAnREksjz4CKXcQuGUYPZVk8aYZcKG6xjhudLTtfWm29AmPe5pxjEA16wgcnRUt2j191jN59PBn",
  "key29": "4D2nZmQ6hSMicAbiqpkg161oD7vSMzM5Qbh1zEQeVYkuipxLufMSXqY1YoiXR5noy3zcCSv8ZUexd4p3sT1jBEBh",
  "key30": "qjRZpBBYw4DM7HRfLdNBSDCjeKmRUTqivL5mbwRVxdVwZGXUijJ4KkFFEBan4jhG2o3LjujqNRo8gGxtPxESVb2",
  "key31": "23FNh37WekScW4ffzPdXZ4wTmZULArKbtR9V53qa9iCGYuToc8AzmGAD38BPhDU2HKQkJSWZQR8jbzSLdnEDUDsL",
  "key32": "3CbCz8LN2NPpVRKvhpkunBCo7SumMDf6BgabErpyP9vD55wHYpcwFa9XGtCeKnAkW1Lk1arfUs3Sg745KzQZ2EHu",
  "key33": "32qwUJUfYpX4svL22qnRyHkK19QpRZhhFT52acCyc6hmtbhFspMiC5ESmjPPoM55MECcmVWuoPyXbhnMMXJtxxmE",
  "key34": "91DAR5Ym2H4HtgXTJEcRG75BZiVyYMcEidzwu3B1qN1bAURaxfhYqzSFQTTkrsLVcnTkJM3pAwDRdMSKVpuCxE4",
  "key35": "256G7ckMmXsUDpYxzTHcXQNyu4hrKvf5boWW5v3Vyo1aimxyod9zhDYEezg5cJw1Ck1pbwHKFgAatxVHjTCTueE7",
  "key36": "4xgzBoCgUqBKnG9foZDrbxgvkqhcDwHja7SM3KHkCttU344YKgZ81QsdJq8jqT6vLqKLYUCZUJxQcaFQPpHa2H72",
  "key37": "L9UCABq1jDxtAxtgidFGvfLX8M4P6BjMwwMMmkrDDtTvoBWGyZKFFFetZKNkSHncq9ysrdmePEdSwCuzmtzs6ss"
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
