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
    "ykWfTvp7iHRzfUGPhJuzWKLmcxNputy2oJopwT8RXPdUkATS6475y4EL9peSvk5coHYUxMR8pDjTx8RMsN4yEN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rqm4smSxsdaY2vWBV4TZw8MDggtUwQ2ehFSZn9iPxoL79AN3FqHDParj5rzF2cWE46x9WgDTmxdMeNfgASpNMBK",
  "key1": "4LBTgVCzbRyYMTgt7fubhpzRNV86G2dT6e7tH8hw5yu54QGzcRymx2V9jjF7ubGmCfqfG6igMQqcSSYL4rF6cTNJ",
  "key2": "5pgLEEC9WPASamkh7awriFLpMTJDn1hwgdvQevbo3kUGY7sdKLbr3RwaMkVP44A7hfyafLTPzdKYAwCEZdcADjDb",
  "key3": "5uX6kVvdKn79iepvbQwCNg569LZoN9yxaV8VVuc9RowyPDNwLGR56rKPEubUVdTUTySkkAL3BgSy7yfCVQfyZ4TR",
  "key4": "3uD2NbLy32uZ4he4XVK1PZXPzd5ypGvYwnCDTCL68GsmFVNUJJ9nJPTf9eZnocvftwZ44m8zWkiHrDG5VLuZkWoW",
  "key5": "2AGuBK686AuBKe5decXsUc44MwtzvDTPFciVRyDPULDA9Z8jhy3VqS5UXYLK27i3tkbu35jq7Knj6fnP17u9rZKD",
  "key6": "5rWhoECfw45ZEB6k8Mp6yMEurcNCwCjUcYES36J9MJ2ZmjWhnrhzCcqunmYj7zCYzHjJgD5UA9A3abYbvY84jgQi",
  "key7": "3kHhi8u1SEzRM4PZpkJZksTSFSmZDSaqQaLbxxNX9eRWA7APxwwXDhP79U6c9aZq4P21GHyJ3hwREKdFLkG2vU7M",
  "key8": "4AcGbrh9dTJmpVczgEmAbah3j5MGTCigQcN5NrScdJL1uRQZvZECfAJbeL3NCPcET3wy6qfSSHQQH7j5UKpqAfKA",
  "key9": "5VajpD5rhEBQ3M72SK1aQ4SzZZNAsQqkv8qjjDv9fMbF6qZ9sfFRthhkXemQqTbe3Xe1y5impiqKTbeJoX1cV48p",
  "key10": "ApJpvnDFt6WHZhyRYpyKvfh2GcJfiGeH46bUVaUQyzj4tWHxbArQEDdahDdWnRaFwb3kYAeU7bLXviFh4QWQG1T",
  "key11": "4cdFjJFTMAB2fAQXDH58RLyihmnqU3WVxVrwWjG8idvvrnp3wXu9LujAgGnax1ug35bDJLrMHPkoq1jdPNUVz8H9",
  "key12": "63GkzjX8ftcZhZsqCbRBjYsg4njoXirjM2ui3TpVe3HAVmyqq3SSg1uURn7LXKuFXaGQtCj6w2ZE4YvHwkiWE8Lt",
  "key13": "2DsoX8iU7jgu5YvfY8AoAXmHiujApztMDN3RXS8EVPbfrwF3t31XprmBghFViSmsgtzgyURPyR1hYTpVSfVkNt4R",
  "key14": "ubHZAvYNLPZYgYxut1Ukb44BPthEZfgTguQZK8Qv7NzvkGwwT5jc4uk4J9aYGrj9UthsbWkrky5s8ocRBntSDdV",
  "key15": "r7n4Rqt2QMhcHm6VrddPdtvaDXdugG64MCZaqZj6aUcDfkQCbn6CKBDd4ibYAhjyeFFP9bHetJEwvD95BfDz347",
  "key16": "44bWMuUr91kCR4TQeA8QCYts9acFieGHGrJtEoKGa7c74gAWXGgMNRF142cW15kaErvMyi2gvrFAfcLxNuzZMyuJ",
  "key17": "5DtLwHaynSgqyxgrG5eja2vESEWUntYjvX6bbmSbVoULcAyRsYTxGehmpMs5xB23dDWgwHK8tpHSf1rvEQLGnU5S",
  "key18": "3GeH5Sqfzp3uad25VyRwY55R4S5EpZvcFc4wj9CUJtwbgp5BwCr61kSh7icz7acgbameqMcpdge8pv9Ajr4w6jf4",
  "key19": "2xqCYyH1vAzSzRuxVzcNsDqJG12EBZddcKRN1xdyscQ3EvSQX4XCaSy4Whs3ZaGuBNCMYCe28S4zsJSibXFDX1Aj",
  "key20": "2GA35aXigryfPThhuNN8cfaVSr9i4NT2pS2wSKMCuwVMGrPs3v5DqNUuN8kkHuQnGCQea5yFS2hsYCNAfe9ducpA",
  "key21": "2k2HdwActJLSX1h9fdKyBji1CmUeLkpDnD7KUxnWTimqG3b3xc4CPofxRiq7h4KhdBSSgiidqsNLtiF7JNTNXCff",
  "key22": "4S99HxmHPz5KFtb2yTdSCf4WV1sbCLC1Wr9LeLShapywo7nKPWWhnb9jJ98tRfhbHo1eMZhtDScrvFgY9DrfjjXq",
  "key23": "2qShLQVdfVhkGHGPvZYSaUwRYXVancSfmia1W13DQ5bMh92r2KrMxJe8wiBJGQZKjKb7hcvdswvHG5DcsFSqGNHZ",
  "key24": "4wiC9X5qGaN3pxYdEBabZqqeEGY7PKBfSpxNqh4JvAKaUf9AKLYWRGdf9ZwFYUF3Z2M3w4uxcwLF1aaguPVenxnk",
  "key25": "UAsjsbhGqECQnUkVx3p8VuuZXir4H9YHVrDgyRHeoxPV2ZUZFR5Cg5ztsi8oBSd81A2FdYXFuLoyiUCxKsnGNYr",
  "key26": "W2HgU4DfgQm1XpDVMrYwe4SAPAQtQoBY4VmA6LtoKhzPDHEh61DMUqHvhahhr8b4HNtB3F7vUcSd7JbJSo6bXgt",
  "key27": "1r8zBKPuEt8RCraDogqf8fcWFENDz3uAbQ4rVcW66Zg1mbeCRDtdcS734DWSWJPQSNWESTPXkxRKZw63hZ5Xdj7",
  "key28": "4qkF8DmVanuh4YaQ32qceuThTuT7MidtpG4K4vbgoM3bPDjXE6Xto4zqaWePG1QX8TkfK2MRfZiidAqFBZNq3QB3",
  "key29": "4cpzGi8biYPs84aD4E96ddKBHpyxJhSjra2haxHm2RNYY4zWviyJn3fZAfgLA1iFba3myaKKXhnNjzvsC1syQXgL",
  "key30": "5qpJcK4BtXQzQxYe6tQPT3aVznhoqTZ5H3tHnCKBGG1r7PxN8XVYZeChMP6gBW5hikFdRyq26wMFbEKi5ZX11PUT",
  "key31": "3qG7ih99iBo8rmmiV1HN1WfAMqk1XRksHSB2h7f1b55s3gLf1YKchnCwEcjW86gRejqJbVSoyhRnXyEDNB2XpER4",
  "key32": "34NuwZfCQ86e8sRPvGeUf7x4byCUpPBh51hgE5xWBbVGy3qmNs6s5qfSBMzjNV75h7WmQYCNPH7hZbfk6TcEhJpr",
  "key33": "4CtRxSPPMeLVReeqY8SKJvKKMvJN5jMi4QKMsUH1LdiKsDBDhRjGX2ctvzUrVvP1kU2Sn13Zycd4Vw7RqECgXz4h",
  "key34": "4ns4L6cc3eR4p5r1Ljy3X6vXbEbEeYWwvQxRsYZXtDpwsK7q7A4AmtdC1BVZMYLurWeXbHTfskfohKYAa9gFeN41",
  "key35": "21K8EyTsghxbGqNCAHQWJAxWo6CRcAVHQr9sr5tthHooKQqoprhAaP4AyXabJq2MuD9995cye5NZPc4rZ8o5gL4N",
  "key36": "3HGwrWwMLzos1i3AvpKZphKGmnU5jJA1VTfrKuLHdoFFKvfoSRm28n5xe8QiNbecz8sgFRTxtYbSxiPCzvwDLxf5",
  "key37": "5mm8GjvPPnPFczwHcDDKKQhkoUcokrCinJtrzuRhR4JLGVBPwEnuZFeiVGJD7eA31gACm5NZJU3fNgSNM9AuHuQU",
  "key38": "3Bkki3HsJPoJm9qYQVihtYch5ZXaBkvsA51PKzJzSXQQd7u7bApwex3orUZRJ7RENWYB1i2LurC29bt31z9pixik",
  "key39": "2gV6eAxYA1ubbpdriwLoXiMs8A12UoaEbcA82gWDRhpiXAj1rLYdDK8wuZmXrt3f7riTagZeUPyWPZbscY5dvSNJ",
  "key40": "3uzmCf4WwfaQM5p9aA6JN3RYYezWda17NGhRrr7mFWvMkn7k8uTYLAqpUSvgPQcsMPrcXBQuYDZfkXhVF5h8WqvW",
  "key41": "3r8vN3LaeREwfXCQCVL9SNUYVn4hbZQXt5mj4n9wQEshY9PFG2nvJHUeAeF5b8Y6UnR8HfHLkWjytvf37kVg1vrM",
  "key42": "4HuvbNtkiuNLFJgo6QNhEPa17UCrqBbYtyCi4MsUCNBpxGU4Vxb1NZd7VLG3ofAP2PFdr59Q18KkDgGzn3gErNqs"
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
