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
    "x8mg9JzUbtxg32hNpLrd7tmEzNqCtfUyeiDE2LJg68YMJnWdyp7DiqRDbLwaRMZJ4bBv1o5kXjaG7a9rj5FQWex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pV6zWATmn1Y2RvnMFfek2dgdoAdRLwKabvY5TxMQrPWWPeWv4U9tjTSbSqACAvqfd7cHeU1h6gREjkGec2vQL6j",
  "key1": "3K4uqa9EANkBcv7PgCTZyJuj2hpwv162cH9dvecanBr1FUH2e9wBzHepcNBYKeXcVeuN3DfXmey2ZfD2nsuPQXNa",
  "key2": "2RW5uPRnbs1DLNdZbc9XY1BnU1rFuzR8Nz9RvHEfycXtbrj2Rhi2tRxmeB4gLJ1JsbscdoEkou5oJS2xXuMZEsVi",
  "key3": "V8dG6J3eyQtTe5p4twcNACwicgXgZMB9YuXGUvcP1o6JyvmnFkVDW5i3KDNgmjeHCtaZxRpsPuaLavq7aDggTwV",
  "key4": "3CSgTfYu6HscfU99wjwQqdnSGYMsJtq3w7s5TnNwvz7qAgRTMrkuaz6pQ5BDfgfHrPz3rnkzuZUxvbEDWxKGDDr",
  "key5": "4a89vBCCE6LKeUUhPPPj5B75gF7oExiyhTk34tRXLPR2dBkzg8HomzLGu4mMx5cd8nBD4af1hqDoiS5J9QGT625H",
  "key6": "1NsJsJsLfgUMK1zkWr28MMZ1yNnV3p8YWNZA8ZmscwVgF6U3LHGfaYZLmgKtNZeCeaZ9MuU21kUGeFzekcr1Gmb",
  "key7": "5puH1CDYZNnDDauEgDX376UaEvUZ2gMDZogFHZriwiTBFHBYjNvBGwttPGEL2o344adss9hjedFcydWVnRkZPDGr",
  "key8": "3hwwRDq7gxUYtXQ74uCGsiY5HsoM4ycDtLKa3eyUtyrKey2m8wS6n2KVCprwKLk5oTXkh6RoKr9q8hFgqJDfHrwM",
  "key9": "5ztxqTzevdkBjjkv9T94TSV7ZW9RaqWfw9tktWTroSVgYQBbszjE88F5pHXKgrAy7XDYBwGeMWKXvVXJYzygmjhU",
  "key10": "2dBw31Z6GC1Hq1s5xiiyiAK9Dt4a32fiYPkPJFBmfbokSEtMvW1EAFQ4yJMhZFRFEdh6MGDf7BZnfKruPih61jRP",
  "key11": "3BTsAzbMDSd5pRU3KCoVspmEMWtTFsxK47c9T25a4bEimXeR8AEEVf5c8NiaFAfDF8gt9dbHHH4bioW2wSLkGsij",
  "key12": "2ZHf64bh1ufKUp2J6P5DcWuSvu9hjCL9FwhUgZDpLMUZqRWGMTASz3qmvT1d93KsBrb8vnFRSffbtjCpGLXV9en4",
  "key13": "4q8pZY6kHdVuPUqQXqFNaiQvmozRJ7LbiYQMd7JTbZvsLRsB4QTx5dfgVFcEh72bsKudpJrJvv3PEyQ1ALHDF9Dx",
  "key14": "2KPDRh2Fmwbhha7cdotgWkHkc2X5tzC4XMdermxHDWyJS9MDoPaixQfTLR9ttNuC9fr88PyuBkw9vaSQCABaywto",
  "key15": "YuYPhGC9SzzBFGQs8iav7VqJ47FMroXkd4tE5SmeoFkPcduZVs6eGCUFV7WyB8DbgAHfFNpQtU33HjXdXgqfjdD",
  "key16": "4ZAPp3DzeW8hmuR5hTAvhYjkXFER5uSjH4XsgENvCzHegEfkQRuX48RrpyDoSchriA72XrwgjngwkQXxet7cE9qH",
  "key17": "4t3Cyqh9NU6q3N4gkxtgit7XGnheSmHqFhVCWaDH3d69QFPiPYsBcnot7xgbT7uByD4XiwfRJXP3xghZEW1KNKCi",
  "key18": "5NkNuxPYPoDKQEAFR6nQWJjndZHoLN9FZbbBDn6ZmHiyrNT7a7pB9t4xh6H7Hp51hzuX8QBLgp22fTHha8dduJpc",
  "key19": "5HWKdgEy3FiCU3ZZhuDrLkQtoadCyJduLRf9MBXvQ9wqbvsw5YXcFLde8uCF3Qek2WrsKR2zPPVhCCmCQSrW3CiD",
  "key20": "4RJ39zqaMbpyttwNqrgYCkFPW1UAWHETbec9XDW3gUnJ85uWtTqLo6N7tnx3xorH2qKUbdjdJ4LBBabYnA3q8WE4",
  "key21": "WTSZB9DXQr7yHvk61s745Ft8q47Xgi3MKvCMTiL5PYnShTWTbcMJU3iYvYVCiLztuPPdek5ZLWASkeLDaxCgJy1",
  "key22": "3bqhY8GHcLTH4G8d3WVA6KuRBwQj8bSZbLf4E4oNyRS7EsNVj4rJb52hfTmsJnVSiDcNwsL9MmMMyZuEFcP3FeNz",
  "key23": "3G56NKn7HAjfcC9PG2r1R3sn7gjpB55pBk7thyAFybTuRagocVmtdQnWAfEcNSFCgU1V186iLobc6kHLDmpixGLq",
  "key24": "3JFGhzzP28RkbWKFqiK1CWQZfCHgamtVtfsEMirm8ZQL2TrSwzpVUyBESWP2rLXmmrHGN7mtJFTszDrkJj5PsvQ2",
  "key25": "4GgQvHhvcySYuhvRPzRz61nZfnGSepH5yU437MyWFwMGZ6ck9AcyBcEV8fTNMb6UmpB4aMQ3p8G7oQseLQ62BNVF",
  "key26": "Vd3YAs3roDT8FYbbp6NfmRVa31akxCELcodXrDMskPi9WWiKkpX8X5ihhvsTFnyvwZAa3rKK71P82AwKnuC2yHX",
  "key27": "3aq6YNV22ZepShdNQZnuWxxZueXDBfTTWVZE6H622jfogBuFg6gGDW9C3LhPC7KKcWRqp5ZAGzkdLXsHSPi3UzPh",
  "key28": "5ezqck84CEbdzuXrj9iRH3SPqhyiQb57JHLzvxrAq3HQifKPtzn6L3fF7hxSErDT7RvL9VQe6GHwv6GJtqaZgzLP"
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
