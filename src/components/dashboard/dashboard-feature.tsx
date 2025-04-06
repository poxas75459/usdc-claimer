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
    "2jTtr6qfDuJ1nssHiNCRBLPM9FH1xS6M8g8BLCB9VT6uKmShdpD8arJJcE4RHWC8mMS2nrAifz4hdAs4FosUzFqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vh9CGCwwN46hrE3C8VHF8x9LRG7XtfVusTgroZ7KazyHuiJjiKUF9bq2CNAhjneAwKVHwXrtswrEyLTznrULuh4",
  "key1": "3na8mutKPVAaRnDw32XaqivfUMkitrHaLZaS8DHWRLvnGpsJ1EuqyugMFaAVp3gyaq59aKEn3JpshdAbLP3sKPVe",
  "key2": "31px5CSHHeX7eojtoXntBZMxHPc9i5Wmgzd9ytLTK4oMqESQFf5PT5F4RBbq1xGmeDtPaBRjdbTCzktTPMQqSwpD",
  "key3": "4DYcezr1McWLmRfNMBpgew1ZTG5PC2B9D1ZecxMmcz262ed5VT4Lzomda8gEaKbh1Cj3XFnX24o7WcM3zJ4FZNLk",
  "key4": "3idGPKbEJTzftjLSt7E7ByBdYjt22tzuLY1RfUVcR2gNLm2h8eLHcykWTKTirCPmKfZq4vMmU5A9PwQmGmzw4TyW",
  "key5": "3u5LHZkFS9r5xUmi3zY8owzSi77VDdjUS6uZ7gwgRyPq7Xo9vKB8aCDCrbJMDtKzMpFWZAifn5A6EX6Q9ePEGyko",
  "key6": "4yr8FdztkAzzvm5e4qS2yoPGmGnXggmRd8vFyTWHeWjX4JAz74xw8HSDcCThwAZ4GEwDfYRJZDo4QyVVi1eSdd9",
  "key7": "65u94mMR34arz79PM5kxTfR4vjpfCBW7Rzxpkjn6wrpVAFt3G6fMUoyvRtbWeS4xUnRmmwYgePRUUcojJgQjtLhf",
  "key8": "5vjrhSC2Dk9w6uFAmbf3Kxp1e2RzhRD2eCAEkEqnhmsfp4DuFyRPmyxRBfXvoMNXsmjDDsUoS6WSq4nDJAm9o11C",
  "key9": "2o8Gu7GdEN2wgQjvXRbdcN2PKumLv6qejsowyaQEhCfX99TSMYABypAMtBXKWCy1ASvB6KMRjGsGUzy6zCoV4CdK",
  "key10": "45HrLWyJAWMT742UGic5adM7cQVqQB3iQ8rbk7j3nTfL8ZbG6c7JYVNLqtXxPUxHMEzwBvat3BbojzMDhG4PQYVu",
  "key11": "4rCCeQo4f3eY9r2zFZMHTvFv3MA54ZETPwng86zRemPJqoPmLdvp5fVT4Kac7ESBCLYFbeUEVbdX2BU8vbzJxGbC",
  "key12": "32XGdayG9a8ZLFdiaqkkUzEzoqrSUB2Lr4ywniQjfKJCy16iqFyxEBXic6wPaqtTisCb9QbjYHazswFSUBieUX2",
  "key13": "4vfP17brzi2UBuXeh7SJ9yPmAHHF6MxL4HqZoSjssFYPmWvQCTDwUEcrw1UabUSwLfe89Um7bVDWv2gMx3kjpYVd",
  "key14": "28LdwZpGD69QWuhANe3LsWevvFqwZuCpV43Nf3WW7vztVxUw5GTeuV6J4na3fss4CYEvcsQNeQ1MZM9fax3hMHpK",
  "key15": "V2yxDJpxjWg8A8SdSXy2QqJQZm3Pzr6DnUXUavdicV9wUagQprDYF11py4wruPuSyorM94tJh75NNfqdUMox5R7",
  "key16": "2Pbb32xTWRD3oizCpAHsHgrsKYuKMSwpMyVtwurHquW4PKbr4wnGV7eGCfaCmPy67QhVBsxaQmTZYMriN99pqzwK",
  "key17": "4rGz9XXm9wd6Fw6jQprkva1yRhrc8PsHTWN9KzkFqiE6rY2xcVswwYfpum2VvjQ32imgimq9UshzUnzWJN88Gkmh",
  "key18": "2yGCUhW8YUHHzEhhzYsXpjDTzJL9bWxTqWQ8Dnwi1okKFJhUbcgipAQLUicCNwmhK5CWcxjJbBhVZSYpAHf2Ye3x",
  "key19": "FqSENfyiC3NinSbT2LmCTdAgqfL7y1NsXZdHQZxv3GFseetUZK7wgZ1iW8YMXCe3J4ePxhFg7981meCTeLjtgWa",
  "key20": "2yJ7srdXvWF69cTrUY2DRwYxpoZu4RxKvuGzh8HwCoxTV1xifZcoubf92sy9zew5HtuMvdTX14fhgAuLcdvgfvFp",
  "key21": "FZJVEdLc2woEfUATPpfXuykED7EuXBJoXBxjmC7MaNqudjbTxkWmrHf18FATpux1p4xpfAAvithcmyCXc2AZfw3",
  "key22": "3DxWsMMu9JwwMJYDmyMyvoPZuRDbDriuHbr4EpPfzSNdAegwdCCbsAPfFNYgzYDCUZw9RuSqK57oDB6psU9vYyDg",
  "key23": "4HC3RpGpYVycKvMnkMgECAXvVfg5uo85owp7iyQFnWouBette6PSN5doDftHk1iFnrgt6CJzwmHYR2mdzEU9WaMt",
  "key24": "3oD9CDwFdPUKZ8jhDnMA3RNsNW8oBBapC8EzCK4srTy3SKepiX5tWQXNwBgNGLgcFoqRrpuhfSgtbCrx4yjyTY42",
  "key25": "48PJAcgscg5tjEWBjMWgkTMG6qtCEWwbaZxk1hnUQ1r9gNSgQ7EU9xMAfqs5RBnkEJ3v7i1AZFdfgThcf9onT2dT",
  "key26": "6ckap9UUyfiqAmFUTBmMeDP2QvSQDPw2wrreuzzv5kLB4NCmGM4DfTA2gDM5t2bqwJzWuE2u4KN9fYfrwPi13MK"
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
