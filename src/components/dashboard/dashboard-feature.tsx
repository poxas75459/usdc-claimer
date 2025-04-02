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
    "32HLmZxD4puerUvASMqgJHqL9ZufEHEjyemwoShH7CbRgVCrMoEpmWYNpvRDMiuLFsY5F4yBBSe3YxRrK6FdGxNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PxNMH1AEhPXveKH9uZnAuGtmt3Eh3DaGrzNCrpvS93KgHP4vRmuWVpmjz78Kq2RWconniF5z9xgE79TZbEdGRne",
  "key1": "2qqUpNr9Dw4P3v94a7HFZT1XSSVcDeHjgFYvhKz5GwLNvCq3KYhEmv4v27ythdJ4va13cUV3VNiPWSusz36FKHdH",
  "key2": "4iDHiVsCUVBvGonWZrgLjzo89g46M2JGfzLAnGRsMosotTS1K1UkvgRJKX9UeBBmeybHstK9XXhXNSSTccy88uFJ",
  "key3": "4WmkjPs2xv2nubf1f4YatpexiCV2Sc1csDupSDLEYnW2ZoosdvqrBpnxZuaNe1nQr8tWfXaqBkewf6LtPH6ftvxf",
  "key4": "64YMaHGXfAXrCmmBEbSXdZDUDdL1VbxR3GRpiY78LHRYiBXcxm7HpRDitoZpXaUZAbQVUjeXirGePGYNxDEmpD7J",
  "key5": "3mBdUstZnDp5Sw3TFEAs8kUYB5RLsfJzxGQC4ZNWmhHWYpiCBSaSzsopVZEQ33AkCbDcrvbeD9pJvCjEsy1utM7W",
  "key6": "2XVVgY3SoiZPWqWWW2r3qfJQAqPCVj3uya4wQBVwKvwHiDq1V4qpsArV68pb35pq7GmcagiaUQaXgRvjzVnx3zdy",
  "key7": "4Dk4B6UivR8nscWpj4FwsZXLSbcuBAGL7mXzpNe63R18ToGaE1i27i6sZrSZH8zQ5umcdCigCEgYAyDSdngiJXPR",
  "key8": "5U5ok6rbD3zC7nEZPh1g1bf2oNLJFDNqqFqCnFx5qVvT9L7PY9ayDtFFKFkASHN41qxKsMg8YbUKXatqYWyex5aS",
  "key9": "3eYXw96iFCJgRaJ5AqvCQte4Gy5MSN8pnCBEnbzTd2fadas2TmW2taYW35QqHZ9JHddCFwgWtMRxMJQDMCXV5aA",
  "key10": "3MJts7g95Z2urPVVik9Gw7nsDctT1yUSHrbLKsQngDSPFuU6dE9vRStYUUFVL5uKtQnhRFBHetHKCR9tCH4WQpbC",
  "key11": "2AgTQtDJqFaT5HqeWeEDoBNcCmkq5JFrkxEDcAeKMRkc3fZDFE8rkPrQ3j57h2m9MyYtEujiz2Aj6UPmuJJADeAe",
  "key12": "3su1AjkNfXgL1Yd2GUFUwbc2nLrkrBofGv6zdoL7jBfAdUB9GZaTH2MQymkKCePW7aFqVSJek1HdpQR6P5RgfsG6",
  "key13": "WTQuE6FHTjSkjFEdcRy7cAorDrrCFqAR2oqkqMertiJ7zZKd24h5rjsSeW6RY2HxqAXSTtghbRtFUYfVb1wgs1y",
  "key14": "4pdQdchF4wYu8W4gJwmhgmK6sLkymnn2St1y7ZgDmS9idRVTNzzQCheEJFjcXTmhHrjrR68EkCoAcr5okFwRCMnj",
  "key15": "4mLkB5bya34QobM2Zsp9VaM1CTvQuA6ioiyWPDTjjabbF1BB5Nmi3XrdDt8juDUwvghig6reCqzWG6GyW7cV7H5G",
  "key16": "2wk4P6s3HmvxJFrRu2DwUUDmoRuoZph4S28veVvgioYRE6bcjFFR2tHU94utv5reT3LVGCPurDJZ95XzYwVRgFMv",
  "key17": "4U4MYEN1zCTLBEmFqyM7AT7vQVVV93mDt6c3kNjdqAWkfDNJzxdM9tu4zcsjMbVEkqvDiF8x7kr38feKp6CAja2f",
  "key18": "3fhsRQfBu5Rh5LtLrFGQyFkuDC95L4FufwPJ18tV6rc4mTBuGTQA9tUDBLzfAUvNhxN5QxaFe3bS6fHAJRvcmNUy",
  "key19": "2Ssg1HFhkv2jb1qj53imR1LBcJGhraxi9GRgVK1bJARQqP7ugxDGenCfkaskVH6eacDxH6r4cTjbYqxHJKgCw2qT",
  "key20": "2vXS4t3ZYurVEQB4tpPbbwNuZf7WDsd4mjrbWUJYErEvEz1jDhZNRVdDzTEYwK3ayuF9s7Afi68toKCGjMSxfqr3",
  "key21": "4eMmqRPoDZxYy21HnWp48xP6KX8hPhx9G5dB626ZTJbYH77hVa3hemVgFHYoqWcuB7p8PcVbsr1Hu3KwkQLTvJke",
  "key22": "2YWvCoYjP6Q9XL2fFidDchXewBjYiaDP4Fdgx4tJD8CH6keYAkoxXMqU8gmADaPq7rR26RcBLHhi6JLF8ZEjyaqT",
  "key23": "2rsxSEnH9e4L6isej88EGyE7Rqn1uJ2iYWwe1Vb8oWM3ccdNe8yxsSq8cPJcNjJywctGjgtpWVZYcR6rfKPAnKh5",
  "key24": "eFCcKQ9e8poXC1ZD3mjVA3HTTkrVW7qatqKUr1jGQu4GA6ANNXwv2sZGpKUFvzJJKv3AZhNgkfeLiMdVKs9bxDX",
  "key25": "2Vvtk4d2m2Ky2tfpfpd7yF5FQxJ2m7t7oXx25vdRJMNGwhmFBEDZVYqm14R2KDMM9V6GcRfjLQ35EAJhEHnDQvfE",
  "key26": "5S1bcwHFBEt9ykMD6DVvpJgQ1iExp8BAYHyaTf3M3UXt6V6WPFtoNmPbCb5b9xaq1uBJgq776x83KiVQiv9owsYm",
  "key27": "5zpdc5cvjrnMZjLNxy9uA5ArZVUjUvd4L1yxPmkhaX4VHxUk5fhP9yq9EJhpXmabepiSXfQeSYKeoJ9v3G7znrQG",
  "key28": "61weFGZwXqXHrggZV7X2H7hzPBt7d5GL7CSX3eEHVBnDdGt86RfKUFhsdJx3NPfEM5AYBWG6pcpAf1bU1ehvn1dp",
  "key29": "5aTwfM7mnKUgyzxDs7ZkvyCXK74kXJtiCkAcvYUNQZVXTYJfEQBAQpheD2mXnDXtts3rbzX1CSj3LVk9eHmvGozr",
  "key30": "29DbKqCVDJu9JVxVxEzu4AuhqPqJd1rqfZT49uBsP4j1MTsKXhZVQgCwWhhLTruAUaZUwYyMEmN7JL95b6hgGBqV",
  "key31": "BHqUGaspNoBFTPVZwBwLukdnsKywZpCMYNh7xQFrbHDGZBGcPRd745BL6csme1gzEMCMiBRjYufKuzTyWfNGuHv",
  "key32": "4kjU44Vu5322Tuq1wsQhiVCA7ZNw1S1N5hGGmsRja8toWMZhyjm4YngDdnyAvFEkM9GAH1rQjrU8zZw8iTikfmCb",
  "key33": "5MY6Vmt2p1jCMgpZvbieC7uw2DDUkvE424weVdL5VX2rS37cjtVjshEWixDVkVANRUjAvt4gwqM435QVutJT3ibW",
  "key34": "4CLPXfT4B9c5tK7J8PoETJ81D3m6hU7SkeNoBSSyKmSGNcCFqXucakt92b69ZKbwBn8ESNewvwZsAvMmA2Qmp2At",
  "key35": "35PAkE1qwbg9UJodY9qib17yzaSXbLkuKXhHuEmtBunXECgwNwQzcborcUv8WPXGjeTU5H3QEaTZks3CL3k5qsvc",
  "key36": "32A1jFaSBuu2q6Kv7PWfSUtbjfmNRSfT88z5qE6M5GdC9taQHk6ScJgj6JR77pMnCWdWnVkFvqELs1ScZAcVSDwb",
  "key37": "47DptzeTbQ8sSBPE2uJbkUYP7gEdBKqNwjwXym1brTCy8UNcthsL7Q9whiPYsteouHhPHuSF4UoAMrVkTQmVJH8A",
  "key38": "mxU7rn8wu1vhcHg59NMqJsaU1HzU9WLDmPisXHsUVVQ91j3Zt31wKgTSTR7sp9g6F1oWJ47J7Fy6m2fdaz7e4hn"
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
