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
    "4vrUitHRQeNjNY8RET6BqawXGv1SsARv8ubkrwhzeWUUweSGb2VMpKd7Thww31TXTBxuXMu7LWfNQepqnywZvdvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pLgYUXNMhvnpuxpkQQM5EHmpTKU2n6JoGVZoQWcqBFhyRmSUzzDvoBj4U7EkYXHiMucn5eGKJqCvVJqCgwkoDf8",
  "key1": "2Lgqf2typ8oWkvdM6YZUvjXfrti6xHB1VbQTS5dFFnUE32dyK6t6ocmhZy5TanDqQEZYihBWKAAfTAgjRJtBXzoR",
  "key2": "5YBtUdLETt6JLn9WMYWy4B3BEPsNXQ44CaNueGC4oi6DPH9UXprRHVsxSb47FPfXiRJSDUt2uEcTTRfiFgiuLqHY",
  "key3": "4Hj7WzBDtqWr2Mq66gKkuvaqgmeapwTDPeB25yskGFRkYFg59Ms9DnFZ822WTeyNo1gZBaL9swAkb3CCguMPsr8m",
  "key4": "63bavhm814SBwt5SJgszBsowEP7EmD5fdB84rnDpFBB6wWEXZFStrAK1qS99yDDBHTKpiiLudWwzmkjvkmz2yFD",
  "key5": "5T8GEnpaeNV2PRuP5Vg3t5DGURtWmxEbEwRqTv94t64YqGUCjprkMZgJPGjsGEu9svaTzQJFPoN4b47VcqHmtwPC",
  "key6": "3yfkVeefqqwy8epiUDt35ojiUcNfguH2zT4TPMoWBzorJAMJ8fiXAAPKUPatWSVupzdnW6YEqqxzeucJ9KY7DDfh",
  "key7": "4LWPE7nY4AaXLTqo7F1GZtfnhH88xA56QJu3hin6PfycULcTLuk2XFeZNXipqaxFPYWSDMiZfRyEMuUGsz4L5MPC",
  "key8": "5chZ314x3i8U95NxgXZBKdmpw1gjY26xJCLryRCC7tYeraoo3q1icQokVTXExb9AqYWEbejXR2Semm7AhS9d3RvW",
  "key9": "5Qw7YBEnfNq5MV44qnNFd5zAPaGHAQK19agaKjQPPfLsf61DxmQvUz1rqnTJu3MB4fax2CvxCgPHLDMYmLpxLpFQ",
  "key10": "3DDynfAPGHzedSiQrJAi2PVA97Yv7P2eLbEs23t5zd1crMyUHZqb4HQfcuHCjihpxMZG1c5sWKrxYuQ7T5tDwMX3",
  "key11": "31q76YokJei7PgfmihMrGqvg8KnbyX2t7dTN2TWCQBqZuN9AYDR2DSG4QX4JtNHoCmM8kHi2daUUiGmfBsReUTq1",
  "key12": "mZa9ZWNYeqRvL8ebR2ktUHsYW9sckGGtWoeb99GBFiCwWziepZag5HjcRMWxTE7cpozfeYjeswpEiE19LbZxHAD",
  "key13": "4kFnTVvUghXXYwbRSfzBDETgrVgKzLhWBvxSRNxhrpY8ChCi7ybQJtYQSGQty8AtDS4USHsFKwMa71cFsqqbGm1d",
  "key14": "24K8gRFjVcYi4SuLMyWLxE6EDG1u6Q31AKHhbs912VZnp4otqjoMozNdfhoP42KAnwWwm9ixadNEbMUcrYemFgKW",
  "key15": "5UNsoVYCwzyTCLixg3ygpRKUVhQEA59QhDsjNtmEFekXe8QLBc4yqf6G9i3DDmfYRQDvHhPjXyFvwWmEPH2b5XUK",
  "key16": "3c1tVnecnv5LbjVpeGFLQuznNndsVumfM2H4Z5K644jTqwmfzncNVTmcvRKjXAVbaiy1B6Amn3njQvSSdzFtjGei",
  "key17": "3NYRHHWKZwJ9JPkepi7oS34SEtZ5dJzKz9bc8zWu8k4JnHG5fbxboXnyTje6eYWQivTEZRYhHcddsdwQWKJ2SdPK",
  "key18": "347uFnuxnpxiZwr2nC7uaA4NmwTVF9oxmx9dwyXy7G27FwVKxxTHccFXc6q1R3YgcWaqajqjAsoufwXJ3YfGgSvz",
  "key19": "38ET12PM2yxj4RX6kYsTK1JgMNHG9sJEFWwxrshWi9jek9DxNB1dth4gwr6uG4JEv2zks5pJXA2JErPHdmoaZwgZ",
  "key20": "27oH6VAMo79S6smVC5XNUe8UKs3D9XR1VbBNKZ6FvVrxSjUh4CMzHE68RnvdZqNJpCKrM98NkCLLhxQ2XBqSQh9V",
  "key21": "zv3hf1mHwkLsBNBavknWudcm2K9URGae58xDQUkTdn3rkMcHZ6NUzJ4u6HLos4ixqqfNTGL8ycgAuHHMHbLN1xG",
  "key22": "3JiUyvFvpDFsFoJLqhM5sNNV9pnLoqppzMCDWxsc5Eseq9mSvRB4Ua1WX8tjFsPZokd9DdT6kurWG4hLX5QUy8dH",
  "key23": "4Y11ZrGFHDN5QFTGWxRgbGcmbxNqGPV6XKJSJnYDR7byNyTJiKAqrCKZavePYqCaBuMCg5dQmPM7kg56AV9UZX4q",
  "key24": "3bdvJVnyt2C5dFWRYc4Jvvbsb6bDmDtNzT1rSPuydZ1hdf6E82LoCTcRVPPsDrg1rJKMyC9oRYzp7opi3DRGmxXr",
  "key25": "5SfafDxeR6Y8R8DWS6QJkv8NzRK3E72A7FCm2Pm8aNGGiJ2gKoddcRjshDNn5BkdC8PpV7PF6oxjKuAtFj7BwFUc",
  "key26": "4RFMNcq2rHNcQ4nuKo16LsSWERWwsxcCANMTLehsomWYjHp2RuqCXyRuaYbRhbdTZQovBMan8GCqVHEKUNXgDUx8",
  "key27": "22A2s4CsrJCvhSxbDRNhXuxnNiHcR2kPfykdP3SYGQuCkpzBGwoKAzPQzHFV5k5K1u54zEdMW8C96jYDAmqNvuPT",
  "key28": "ZB9t1HkEyNSKvhseVSEZmgzfAXvSFR2b1QNhBXyAXepQPcoZNdMqWQy4cbygz12nCsnrbKEfF4hLSJWDKaq9vqr",
  "key29": "2Z3ZY7kvJd9n4XbwobEjW2SZbAzHfBYcuv3jj4CpM5YJ57JgJV7yQ9izcSHJTf2X8QAzz6axx442FHE4Hap5T3dz",
  "key30": "5GyzxLLGN4VBKLi8CD26WWRjrvgYoaknEUAYMCAq3UgjLDKVa41rfo3Mk6WQf2SD8dQhtcKPghN7K5RAJ9cwsBj1"
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
