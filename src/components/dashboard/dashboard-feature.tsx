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
    "4mawRUbjuyhAp5uH1m4TFCvvSDXJtWVQ8onYpj3G4LRVffcb8yGVijQAMKmsVgUBX1XMwJxKpo5w8gZ2zJ77YTGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sqgu9DLurDySGv6VLUq2Q3RGq6jEnQtz7iLfJNvpQhkWDpB3ArTsprksKhUdGJLzBVRnnKNTU32yDvX4aHw4Ve8",
  "key1": "34FxNJhNsdATPYrvCWa6chiaL7N8gxqq1jsMeoxf8xMncZpbfpGhVyYqoJMYbjbsesmuVEiL7pL6qLPk6nw5S9Gv",
  "key2": "2icWTSfrgiAHkwJvoihi5GxkU7rtdbBeY5vLmnw8hcnz4v8aC8GkiD92M23E5L5516zgktbXJ4Mztt25iZkZZ6Jd",
  "key3": "4UDMe8LuoATknUau8A1ua6sKERBoaNvkA9V6zojnB4HwcFB9ysNQg7AFw4kapXwMqBb7u4ZHTDHsadKRbvdG7y4t",
  "key4": "3VZtYiWQHiKJ6ir2rSAPb472zUcu5S3iPhJqanYXNsLFiHrCKD75tuk1ZZp4PT4sWDVuEweR8ELECMmnvVw23mDG",
  "key5": "2RmKSefZdwdgL5cmeLRwmGcToS3PEmeGTKoMszxqPBKwv8ChptkDbtJxv6u2sqjWg64ryCWKM7JdrNjkqP6X2f1J",
  "key6": "2DTXErNHHdfPwdR2R8vSZCL12SLFHw52s3oyCS4WuvmrRbNWLbepxpzvQUMDtgvZ7hqYWS6m4WVnebTz1Tp8ChZU",
  "key7": "5CkmuBKzFAjieskcQ5xX8XkKzbRHZj7Ujrge8uhKeMZHPaLmSLxw792GfUD32jAvigsATkqbpSWm3LMru3Sf4rG8",
  "key8": "5rhRQy7b6iwoCrUxPd7gnirJf1kzYQHmPX2SAB7xsf2mSVjmuiKNwBUc4HWYUc629MbWBbjwiMZH45ghzKhsuWYe",
  "key9": "nEMzCk6KCzVJxGXwFcJCsqZmDWDEi9KymZFx1NMediyh4Yd64N4XxTMZHrE7j6ViYzMtdkPPDxx1ke1XzL8TjxE",
  "key10": "3bimBSMeQr5cvXFnPbxJXh3ipeP98NvEjd6ocpznSRgax8Wq5jJFof5PUZmwCU8EuLCTGN5xzjBPrbCafJXFvef",
  "key11": "3R7GD4i2yAb1z2HVhq96KGqSCQ4LdeLFBh1vAeGZYcasXoXb3MoMznwaFFQbd3J3FKbv2dexQxPcpgsCSjAp75z4",
  "key12": "2ik1CSMthFH49txpn9phPFBoHRmtAjNLpSS7JyGgJxXPMdaSSFugAfJQeWZmV5LEwjzAUnabJN5Rx5vVC4ioB7qY",
  "key13": "446KYECbxBY8ApWfdAmxxCLS4D9U6nxQMk7rvebyxVa6anS7H5xa17BmhDJqtgM2HLgFyqMcBrhapiBsBouGZiC6",
  "key14": "7gVYPtZunzne7T6EJmgtF6m7nozsJX4KGQkqLTj5mS472PgVC9ujETCSFjw5bdg3qN2V2YZhdDRCAUgDBNSLrU7",
  "key15": "5TXwDiitUdR7htDCB1EyAWFiXiX1xTy63vLqK7YNj54M81Jgqgmjtru2gKuFZtpUJX2x7vjDrJcBAYkR9Ltq23tH",
  "key16": "2gnqMYqz29psBmHLVooM24JhwM3LLfCWmY9g8JQB59FEs4RLpN2wEnANyFFCVZrKNstLV2QMGYhC3m52qiGzHQc9",
  "key17": "3moVL8FyMHmguRXGCcg912mrBm3dhfWbihZ7oCiN2LtQimMjkoCKvoGDXA582CepYn1eCG1bcFN7HmHBojZSGivt",
  "key18": "46zjqhBL9AjmGZNa9suKv99rmN714pERecbgLHjKfT9fMYy6ZmXREoRLdBnHAL9Gaoq5XbA2Q3vZjKmteJdNhyR7",
  "key19": "4JuoRsdvSEhei61hZSg7qsG8z9p67UgJYXT9MZ9r3V8y5LA2Bo9g1kL1m9cKwMgvi5e3m1MRHkh1iGQSwHR43vhb",
  "key20": "2CcTWCds73jhwfmh4tmV5P8HujcTAbQ5pTm5h3jh4y82LoBnKTxcE6gGsoYDkfcLKECoPvC4cfqirLn7TtgJkJbx",
  "key21": "53mKh1fmWYNkBWwwcdjio6RwCN7J5TeSNiok57T3jLBwzBeyiYQPmt1uUzD3316Cg8oa7PaV3D8a5AHtYnZz1o5H",
  "key22": "4qV299zwS3auRqUTkLmf4bQG4HF4uQ16xnzQedXrvuzs1v3tS3L3KZDsv1H1fCdqUCDCY7JFeUHVuTsfYxjaqKtR",
  "key23": "TQYxXii49KQtQe9g7HCEV4vJxxtCTY78nSu1EiMfLsq4tSAB11ADwznGrToYPZeadJMxjpw1rE9SWeqpSnox8Zg",
  "key24": "5tD3ixbcypAsgJxjLK5XoWBtSTW7o4XMXW9ZuoHQFQrqYEiymxi2FAX4uLtR3P4SvNY6v7Twq4zfw1ZPV3QEkp7L",
  "key25": "QqKpB5iCQed9YNgELZ5qKL63hNkFJyAtJUY4txok7cDgRjqcFAwrX7Fb7cq6T4AKcJyY7R8mWw3fpmiHASQgm3v",
  "key26": "3wuBbz8UFiCd1JDqq6X4JFHgp36zkK2TuLxbgeqZwvFEFJM4Lq9qffzU8vAN8MBEGXuWjr1YbC1nGwrRXeBraBWE",
  "key27": "2JqGNwQjncS8osYeLx1rrVQ795raHMXASDCWKkUQkQSzNCy7GKfb8ACXzusNc4LS7XRLQpKtRUZCk7GEfmTpAwUu"
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
