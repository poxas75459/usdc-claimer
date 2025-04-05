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
    "54Qsyrds8xohJpyH5UuJcZf6GXWP6DAhLTGpHWaekaHK7LeSqhSgnByDkVDjcpNJ4zr3nWG8R3S8KsHYryZ9gkN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AfCJ36DeDC73wvhaaVRSHQDikvt5mWerUG6fQsgavxZX3K6T3quTZD3cYR9SVKLcr37VUYp66Yj5m2BVXqR9WXj",
  "key1": "2SN3cisAVqWASFzQbPXijuTmj9biFQ6zBv4s7qTkqzG3xuoY8uPCq2SNvg3YXLGRytXKUmNDPxdCaTWthxNX2Zkm",
  "key2": "fzz4DPntqftANDpB4Yjg3rRo1UyfHofaa8EwjAmreUKhhJSsdkBCf2znv7qFR9ciNqFU3aXUNvS23qzXSHoMEdr",
  "key3": "3qvKaLFvbHUjYeadmn7o31mw2xL3i1hDxKPYGvsSv8grH5ZZLAVp99CnAXjsn1ygiE7dfR6GQ15L13W633EtP8Mn",
  "key4": "4kqXGcZCeanNvZHmrJq7N3AjDMpCt7GgXwgD8KtLjNGfn5vmcG2nLJpztJgmtom16qJxbfVKxYkhqmehKNQT2uMQ",
  "key5": "57Sx7DfJh7bnB3yruT3qzTnox7RrExQnRvGGjqDQaZn7HmfYqft18439omKyUV195rkkKtQyGyG9CbUvP1A9sRvu",
  "key6": "5RwBxkHFYg52PfmASkgLmsGvAp4kXuEd5zrYDKzJR9jaQ53b48qCjAkS1DRMwrN2TKzZdmaFR56N9sj3GdGotEBt",
  "key7": "4Ygsyw8Y1cB9SAydoAZbT96wtxirhgz1FrtnwpnKhXuPDJBcR29hRGqqwz9SsC3yuX4U4qzhU8U2ZW6JJAWyQv5Q",
  "key8": "4mr5F6TVdqw4kFZpAAj3coSKUrZ9fPLLvHMP876xrp4mdABP9GeufDy3zkdrv8swpSsUXBkGBLGSQLe9QqjKJkUG",
  "key9": "2nRxCEYhUBZ787dU3pqYyMvHJ6Kyp7tMPqNf2SVjvMbRsdHjpHTesL6wwPWe4s7m9NczsqnjfuoPw2pMLKmhumwn",
  "key10": "9gthDfF26Y12hhpwVgvbXFydffYGhf4JcVP4J5AdAPDkC3DJqRettUFfwMonwsZQLQ6AJkaLPdknDEjNtNrEBUo",
  "key11": "5uRYfjrococyy9qHAgTgP67RXRd86HBV3HaCQGYF8LmXrUvpmYuVJfzK92u9BpsW8W2xorRAZeNh6v76pY7ztDcc",
  "key12": "2KgbqpAia3j8HwG7DuVUgJYde7Ra3r59GFQtFRF8ZqoM37sH8AKQ4g8CtGTSdBNkvU1fsJzgJFUCcpDj4byduCVY",
  "key13": "2ooVVaVSAkN8dM4aQcrieXopyzx4b2AtnGPE712iYeEtyzCrHT1h1t7Y9Woh8e3syd5DYxynTVQM9HVNDPrDpsKG",
  "key14": "58zEeowoCezQU9XogTpYfvab9wh8oJ5zAjfWhCh1WW2KCeN1LU6mEvmeS5s4vf7Hxvh88oAjUZfPwDgjFsaaL4LC",
  "key15": "4kJfGCt68NF9zPYQDSJB2TqeDUf2mh4wUmVtruH6jpyMuhVhkTSwPXcrYjXKzD3uNe2oHw9TPvj9jyb4EwkyNUeU",
  "key16": "3K99ABasWYGSdU83oCytsYSfDeQnVg2wekornX29MmWtJeWvxAcFkTK9mGBSbfakvb4jtFSaXySNZgEWV2RqXyN5",
  "key17": "4Z3hhLWYNtfP1KT8BpfiqbWUZxRPxpvb2tLAJx87P2BvHZfhqHdFrejEN5FADiitFRh9TrojzzNRFH9vDxRzbPhy",
  "key18": "2ngVeq6vfPQXXbhPtZCyotP4JqSDbYuSVePf8ptY8bfXrUbQCmWK1iSKqT8sXHsAik7bvvDf6bJSabEkkYoMu6jx",
  "key19": "439Wg6YCSoyxEhK4K8o3MTRBLQtDCjyaSjtxm1otNTaKtiSkz6vUkp6RxCZxTpCdmiMxKMq9JngwPdbaXzuwb9La",
  "key20": "3ANfK1tHZjrx1z3oN6couqVpsA4npX5UGz9XaVzEHnGAzjUZxJsbNPW8A9LMsmubGd1X5XLiW9WLHXN54qVmRDCT",
  "key21": "pA139jNfNQxbn5m1FP5eFWrAanQCFALf4QbSK2CKmwmBsRTBa7FcBsx65eZXoPgV97CxXrm5NZmPaXXorzKcwhv",
  "key22": "48f29XYYZH5QCpeWgeiiFSfqniSoZFVRcUQQYFMtdaDYDXtV2E9reYTNVouH6myrFaM1x2pBX2m97gah814AbRus",
  "key23": "4bEZ6dHNATm4DxUNQcFxf26YAMTo5cijDtgZTCtdkfJZFfE1n6Cqtv7rCGe8bfsA7YfpSacYiiabtfcZiKLUnqxs",
  "key24": "3C8gBXvgkDczEg3pukFQtfsXsnxYc7tTaBWoFNN9BqbhNYMNUhbkSzhbBqrj2MLTaHUNStMWNE5xUX6UMMVNZQDh",
  "key25": "5HWqys8GUmjWjD59b4HDtMuTeVTxx7BeYrPNK3k3YgPBgCs6d5D1pZtGVKmWaMfggU5yqYGUhYCCfsunTn9mXfwd",
  "key26": "JWNgDSqUHG3zgHuJ3A2cNaPBGZKiw1Fg94fm8NkLPQjTXb9R2iD9BwpALLoxouG7rrJXUa8DYRyTNpraz3ucXhp",
  "key27": "3diu9rMAKNRpqk2VXjvtKJECQW9BdY8pA8Z2kP8g9V71n2LH8oNbQJiwCWmAPpZieW5GTbwxNxMBEu1owcJsEcyj",
  "key28": "3Sj9aqEjny3MbRK6vb2Vj4oACyE9oTgLCS66GMUxQrtMJKYSM3HVfAr8vWhHfckyp2j1Szyvb4GJUhKZFooqLC1w",
  "key29": "3n1WYPbY5rGksMVUA5rMMXkfwjh5diErqEdHSWD8NsqxPWQ8htycjBKjhvimpXxcpD3fqBmYAZLUHkgR7ZBgjg4U",
  "key30": "3vz7kr4eB8fgHprQ3KmNtokESb5QBPoywpwefQCcsiEfBfZ2sgnwdSk2aWdZYgvJ28BFtuR736M25JGwovE1Kke7",
  "key31": "nhxoka9wyggo96MxiBwn8dLFN3aNPZqZhjDaMJeYmZ2HiKph7yL2aDGTTPpmDXsn7mirzpNzbLx9F4XmsLHYkgx",
  "key32": "33E9Grw7iNsTBy5XP3B7GkVNEthCxhggEjsSQbvPfpzLyikHJsf4s6m4EHNCXgR6gfedye75Eb1T9h8Z9tvVi4w5",
  "key33": "33LBmEME2hdkHkTpocpoA2oGtCKB7PURLaydrBx4sVKMxiLrveGhXpB3kJzh9yiwUmagwWBHexTnJRWWMf5L8wzH",
  "key34": "321zd7hrL2GVV5Hw7utJtAC5MfKqbTP2VkysyQEJrwH4mXQaRu9tugv4kJkCq8Pvew5VmMtr6fZABWXP77NffHXB",
  "key35": "56SSaKhqojJf8JzPtbtSMWcswbSJ88NxxPuJnfTsGxrtXjqoy5h3BhrxrpfgNMMiovxnWLcZ3ptZp6FzDE7tbQCZ",
  "key36": "mLffbqezLScM1edZ3JohsfmsufotyVw8SJLY6HGVqwh7ZZabUMxpD5UeC2zfQZDB1P5akZKT1ArsikXJGztVFBm",
  "key37": "4SN9FGYC6d6818ZVknouZyENsHo8tsEYYL47iUSDw2GZ7mH28gYHpHaf3kd2Spg1E9ubtQJm23mRt7vhr8vm1Ym8",
  "key38": "aeaACjsW7Cq9Mf4DjxRZL92xUj4RdxjpccPRRcVaZedDktsWS6Fw9ZLRmbeWrN6oEi2kwNpiaPqqq8gZ9WwB2yA",
  "key39": "3dFFrPuwMwhKkVno1njdfYLcsnWvYi8CGEdotQPYhvmopZey4EFGpuKJ3WDvxgvUHEgrnhScnx8DWNsqeezshtDB",
  "key40": "4WRqNaZ9V2dwAyMAScYLa5i42uCEh953YRn6AnZf62tjp78S7kkyVqksRgDAdMhJkmuQg9Zpn2XVpmvS5vjQx6Gt",
  "key41": "DcHjTcFDCK8asRBTumNGRz6SWPscypcFbqfHgDYGxr8mRBpj4SYpR754KkUYqkocRZ58UnkSNCYnQ3A4YmunCPP",
  "key42": "4xizvvdWbPXxnjniJwupZwARZjtP8cf8B2acWh5icsCpWjFWhH7wCRfsYcaYYXJEz5hNoozwG3juwfWHdegbLYFS",
  "key43": "3Dasa46L1qSKtUoDvQcPTba6Q2UBooutPG2Uf74Jjq2NdkgJsXB4q7mWpD96kbugUiFgUMce5mcfrjuhgDjZs3u",
  "key44": "2dr2bxmArQKtLwFnLZKhXcADPNYuDJDe1JJnhApsMvSRZgppRU2M7dkEDvzq2Tkr9XxFzN4BPnpMMaRymTMwMSUU",
  "key45": "4PUHAVzmfMoWLr3GnmVTf7kovUqqBCT261U8gjxeiUmBodCpSG6rPd3h2SWUQAVB2goU8wQxhrkGfkCpZLb7zMJF",
  "key46": "5mXg9RGdkiA4RiEC1Eu9UeuVCfTk3hSd26HznBr9coj2mozrPXd6TXQnCVUQAB4wQ7nuL9JQEMrhJoJk6MN44XCq"
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
