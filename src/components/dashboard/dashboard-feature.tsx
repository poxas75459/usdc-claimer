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
    "4A3Di4mvHHoo1wWZZVfu1iewS9uzmibFC2uwKLzRaZnjWC9GBuhCcHVFQNHdpHifL4pxwAdu41zEPNe11ECCHGdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VkUXQP5B6XccE2UM859mBcwYn8V4W5zDhHHBq6hbWm2vRSgTo37WdpiCZFF85HyajSJ8rajF2KdX7LtqwDV4an2",
  "key1": "2RcKJy8WcVi3PWs1VMfMjiTQccavmq2A9TwdXaQrTUaEJAJeZRgR2nU7kCKmtxphfZbvtCTwsdHZ2jey2TQ1SHpG",
  "key2": "QBWJGfh39fzP1QMLgTu1FvWebuhX42YjudCAkeXfC4LNFBWbp1yAi36BfXPqkPyiJMWQfpeJUSMXyFBp21cD28y",
  "key3": "4kDajWoc6i5v9hM55yaLC7WyMz9efbH53MvpjKDLwsiRPWE5rr9umQ7mNpYdCdqH6fZkxwsG3cPs3WwGD9WbgF4X",
  "key4": "2XnMkArCCwLR9VARS1SEwpqMzBbiMFw8po9ZpMjg682nBNeRjCD22mkFNacw5SaXPVyigXutLNEJqvfVDca8feo2",
  "key5": "5JaWiEEC4uD8Puwho7mSWo6RHM7kMxrvS8oa8yV2tYqLXsVTHwHxhi4kYd2xZRnrwFSqZSjaHjeTeziaHmZiVFZ7",
  "key6": "4aTzpAtYz4HpZsZBXSj37jkkQhjaPfug8L1L8TN7fEt4Z5wgfc2MJKX5yWgeP2kfRiJf16G4asbwTJzUZZ8HCcvu",
  "key7": "524P2MSPKdcxtLZJHpFi1KEu9K8oMx4T944wsGfxw4iTHvT2NfE9YyvvFSD62seNK5a3DMQgDZQNGsWmqG8VcQb9",
  "key8": "4SJ2B324cH92yXu67zuDwNafzdgibo4Z8pcZSeGaE7A31S1ThuMSW4eCGfYdPneiV5vdaVrKGVAjffcXVijWZSp6",
  "key9": "5vNnUUcwnvLkinPk676t8WR32Tjyz6pHpbokMkDdMbCEoorb9fcd7XfhuVWZYimnARRafSE21PCU1MY6qA1VMqJS",
  "key10": "NG2NqzGmXaEaVC6E1FXZMwPGrQBLpgQWWeSS3trtSYPy6pK9Ku8TWd4EEso9F4vBHdTMbBwuiGhgAvVNKz4q5CC",
  "key11": "5gkAdwo3dLmrTdPtTSxuV7yeVc9HizEBVQrCGWuCxxmPGGH7W6tDK7KVQSBYQsJaAY6ptjTV6aE9CNKeyz7JZxdQ",
  "key12": "5NaLGyYjugThF9fmQpti9fiWUjodGNL1fpFcQiSe3ZXcw1e4h7JwBovSrnnAYv7CLmNxLCDuq2eJY7dc5PhKGVdK",
  "key13": "5yQs4GazqXNvBst4zGNRUtQNV254PiYFy3XXBaJHk2CBuotbzgffbLyt15r3kLEzfDGiUzeXDbusccmsDb5FeDXu",
  "key14": "2nvojidViVSV6vddFxPLi24tiJQYrpPF8bZy6Br5xNL6Uao79Uk2xo5cMBPWSeZPY6mwKWXeTN1CkoHkcMB7W3A8",
  "key15": "3riTXGYCgEVgXuqKsdErFsZX737ULn4VTkm6C2gPRiwE2AAniX8pb9JsgL1XdaXhKDNmUmii4pfxVhaucoJxxaom",
  "key16": "46QeBjWUG4oxDci3Mjo77LgEC72x7fSGdCAXB2HPLsDSwY85iSE91HajgchnPXXCm2ULY7BK8v9TNpqT7Km6JSVG",
  "key17": "8j4svcUf3hXV8k7JmZKrw2hxcUMTnQvv84HsUF4zjiWk5VubgEnEWquYgAm5iSjG6YtF4VRANPJk9E9g1EmrQdr",
  "key18": "5hgHjjkMw7wG936dKBM1jVnSFyFQrGcEMaEAHoRN5aJvXHGUrnpvd4uJY5ifvUKhBxkhg6XAurrH6hwpzoVVcYm4",
  "key19": "64AqVZWa6zazTtiCKWGh3TqVDNNkxSYYNsAekr3uLtdtZ3xtgnJXgmLga8dKSUNpNZjSUB9XyrbfnqQMMPM2Lqsn",
  "key20": "4xNWmpQZwRXkJ8VqV1LFRtY2Sr2A59p37nvF8G4hXNNTdpPGRWRZrYN5bJyzkGVhD7f5Bo9gVFeDRUzT3EFpJsz5",
  "key21": "26ni7TFC8sfi4XkPAtoqG3uCkxbrFsBS8YTWHm2eV2T8qbostEfTQrida6fvBRd9atXGnNrCMWt1fZi2w1zCz1e6",
  "key22": "fCJxX417cce3WMUEeNUpJDsqX8SepReYArYbwseosFzsxRkEwG2NKiB9ybgbQ7PGtRyt288t7sHxwQ1jPxsMoMj",
  "key23": "3MFdhA1kZbTrs9yyT2Q39gWRiamQY8RfXhtWRQkhXGroUBwtqQDVLXM2HWh1fAPFfCKfTRW6rkPoGe81g9fazyc7",
  "key24": "44gVhmUgc3QonxR6vLto648au57gZc1rqXsjgSvF3ncDpvBsV7ZvRFkEzYVzzcgXhstbPt5SG62LMuqCFMUdD5xn",
  "key25": "4cfe2HS9tp4Qr5YjaPJ9zfHfAkZD4drUiYghNy4y1w6pqT33UgrhWuksq4LRN2BxPRrBUUa3kMtnow7cTZchTAMG",
  "key26": "2HS1BoPdMvYSKhvAhbpDmNMxeqvRQ7fSyKV4Kw7hhx4Lx16U8rwNdTZAwaBLbQnzSoVe4utPehrtA7evV7u4EHwP",
  "key27": "4E1cfLW6qSsJPjWNrsDcWquUjBu7UJDbLuNpiPTGTLvBoNSPzfqFbPiazyxfKDXu4GGJCuvNG9Yh1rHACyRnSYCs",
  "key28": "5zEmcrZHdgbVLNdeeRywspW6SJ5VyssHAbqTS3TSzmcJY8rSR84KBhiSeRJ3bigAubxxRnaGdwEtDWmnPMMCGS7Y"
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
