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
    "3HK7Np1MqQonXx1KcxuqMt4Qi5Ec7PT8uVPRVibLTMBs4SVMvxVpaaeYWUEB4UakNKQuBs2BQkxJGS2zG3n7zNdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7NxgQAG886iuWARPdVsL3cdHCcVooYwavRrp3dWkJQAnqc3V9mwZpy9E7Mn8FSVfHay73YYDDqQaJVSLJS1PCGj",
  "key1": "2VPSSREgPXKQEQbHkSMjiMwiQRBvFKovHQMdNcFya87k82jT3XcZufxmv2wJvhzo8BN1jPpdY6Na94MPEetDZkFK",
  "key2": "Pyv62NMoqqpQsCf1bNRFTprQX3RmkQpgKwwY2iqyqYSN598PDFjvQGjMYbAxQrgWgyrJzKkPoZbVsrPgehy2Zsh",
  "key3": "62t9WGqGMJWALoJN4qqFAYbz2akHd2iUGRN2xCbz3rvQHrpPWpa2BU8Z2CdH7PXMgcCzJHPpRGF3vbCo4ydALVpr",
  "key4": "3xmgQuunvUifEDi6Mt4Jx8mnEHNwue8vY6owgvJ99zj2XCX1EGgASqDbVZeis1oB6UnDG9Wbb3Ca1CWFjiz78juv",
  "key5": "4QdiRwVPgRv43hmGhKPJMtufM9Rk4wnDD6WmA5Wmjcx1nom2L36z3bZQnGi56eHMSm7Rv3JR24pZKoVpHFzTMB1N",
  "key6": "YerpVBpDGRzBTEuv5k2VgYdCzqzrLGHW5vhNei1EciEcpheHjNDJAkbL9ngUz2CyYokZi15viLckHnwgiDUyYqj",
  "key7": "3vnoS4ytCtGDQC4SXwMKR5qeewB5qckPWoHr3XMFpJDAWqjuzP443zWCo2TBvTA1zdMKcQyzBczjpumiBvfEwaf9",
  "key8": "Mkq48UDgnjhVyknk2a1yy2jmK4Gwr8s6fkf3SH1aSsezyVYswD13AsGn8nAghHWEteDkKHXdEMhwj8jv7yTVWix",
  "key9": "ZT1sMeeEbV8MFdXrYbM3HR86L4SsYWdrKEwyVStV7tfyXu5Tp5u9YNzi58bqtnhGM9omrwLVWJMXoeJwqN6Tzsk",
  "key10": "tyhNiacqUQk5AYkCVbjYV94WAq4JkogkbVzJ66MYwZp8nLFX8RgHe47BkD91ZbNsaya2ooGuXknh5nmmFx5Gjp1",
  "key11": "4tYcZmmDU3smLx7rfFVbbNEfBhYwwNoMyE7i82u6gGhtBwjMoUFQBrNNyvyRMxF2tjdztcnWbKXcrss4b5uZGJYY",
  "key12": "2FYiDJ5tc7xY32TJsRK4T3QiWV9pMjYWf8HLP31Q2pLm1c2CLdtRXACtarytvZCSyRe5Cu1giv1KAyY97Sy3aG1g",
  "key13": "x8tbBrLZxYatGZudEkaZ86trdtpv61pWdNHdJmVYd5x9KaqUUaTMQfVJDSyJi4bGtDXoTZPgWStDkGgq1rfgMY1",
  "key14": "5S4VqMJmmqeLfTGPWihfdpMj87nYB9oNcm7NNZ7T7KF9aNBN8yKCqtNyTDmiFnH2HbU54Jxq9NdsvbyumD1ZX7he",
  "key15": "4nWnCKdpHntbNZQYPmzUbttZDpSWgLeLA8g5nfmuVbuwrQvhp3VMKtHFWsZYP6wq2sUBgoxfDFTxkvaf5FCbsMn",
  "key16": "2dEy8USukeor61wZ2iN6vZVYtcvH9yvXmNpZYj8SZ7j9kF9oHem4WiEJpLmTtKYenbVYKCm8S8LMTGyLDodQboso",
  "key17": "qKHpVQ5HpxAFKbS2rr2oXRbJLmaCQPmj9pcBAsP6bCb2MfAdqS4Gyt5HDGyBoM84DLJPpMKNht1i4813kAGi12q",
  "key18": "4nP1Qb1LodUHKaywL3CscB8RR9xVBgpjtdaYfxQtLP6AHboGri55joZQWPBUkSVrN4yvaPouiSgm2FzvFp7WzLaV",
  "key19": "KpToEjNNa7KTfVW42h9gsfRbws9eeytW8fp3AnCgiEViHAUkTE949p7KgfdTSk9xPHJCuAmUqYz9bxwqp4yQMbm",
  "key20": "2AcY7u5gT7K6S8Fu73LrMkXZiGsqSkDNikwHFsuT3sc8gCoQaRWkP3ubkdozHUDpRctsceEkNrAaLjxzRDHRbiBS",
  "key21": "2b8rRNpGS9JSjKCLWcS6QfwKxcY4hD45deXwEckTnZTBPQJiphrrASwHDKzrpVsFdECnEx8fB6NSfgc3w9SmcGX4",
  "key22": "t6uYWg248PizmfF6HchS8cpigXE4i3qTYq3o79nZN2fL3aWKgMcc2UF5ZvqSg1fnKzrnAZ1ttZ6KAzwSq1aoW1v",
  "key23": "3LmdCKnmhTB6sQmDomBbqDuTW2mZ9wzRKNgCWzPtocEcMs24uQP7H2v1cgxL3mUagL7vNX1BsEVtixSnXogEhpU1",
  "key24": "48feGxwNr4cvmSYdRjsVcakWcT8hq2KM2Qp4BeUi6rHqj2Sc6u6tXirUg2JcEdPmtxy3ws4QTTMsNDMhnutmjiZr",
  "key25": "4G5hgxVvGUFNCvhyHfVKLtLhHMf5aHH8Lm6UhSmUwioKwWmT8cQCCdu6zRhxVddkFkbBHYNWMXJgFTyMHY1Zoz5a",
  "key26": "3pXACD3NtwCtmd25XnR24w9FHxM5xrv3nXDq3ATzmECWbQQXhKjpyWwP2FcWd4jtCHLZuQnKjCxUMzkEYafprasm",
  "key27": "si6bwkDe9Yx7QHRunWiENyJ59oyA4LMTn9EpakSaSPcLEAnL5yuqh3924psJeDTNqsHzQSbvEVveMhVEVnTgmxr",
  "key28": "2Ag96yQtgj74uexDdkDhobfhWmb5M1NsAyDd8xs3qxaMvg6tKC48AAqEQDwT91abDbzeu6L9ZxVGDw6KVLAZEkyF",
  "key29": "39hm58ENQsBYchcGV2MxftBDRnLFZrH44m2fsYkjhfSKYNKXfDAxC6HTgLzEEKNGsABAAuAJLE3x4agc2j88N4uX",
  "key30": "5ERsAewEFqyxqzRS7QQfxcX9i7z6NHMVAPsjPaWuN6VuAgU5WJgbnaM4WGWAwnxC6wFtfDUxJGMQj36Y54c3ECLF",
  "key31": "3RAdWBH8eUhzY3AuNx2vmjiArnt5eLm7FdUehX3Yxz5jyKhiwdUVmXA1eZhXARADiVyzrwkTvvtcsC84PMLfagML",
  "key32": "53SmKNbw6pbMydGuEL3tzP9iv3SVBzbyhEckJkCmR3RZHVnS99eYzabYfEEXFGF1T4UcX2D8i2NbzNSeqJ2H7rDg",
  "key33": "46DjUAq17XaiD8nttkjNKHgz71rFmKE1dKLjg8aPzz4cFmWXEx4Esig79NQ4ZGJhNbx5rDaN9rLuwP2kZTQKBQqu",
  "key34": "9X2wskfabcyQ9Z71t5WiNU2Eoh3TsDfTnVHKmFBKe3Qa3jBhTaYLv6QCYG1vXKMoGAbBcFQ3SxJezyAUCWr8ky5",
  "key35": "2uKrPuniHhYRnxoTow5DysgyN8r2msDAnxAnC79QfCzduZjZBFy2pozySaRxUrkP9DqkjVT7nSWp6GV8ULwLqViM",
  "key36": "5g36b8pFbwFfCwbXEuKMwoxeTy9kyhn7cwK6YHiqJrjJ1BKCEgghoswHKUkSeMFfWTxW2JxcftoHjXFn2mKuqF5W",
  "key37": "5LpmEcQew6qEvwUJmsQxquTa8yEiTHRU1essSxp8D36kzc2YGF5k6W2mKKjP7BgrX7fcpGcXZqhuD6bjqNnXJ6eA",
  "key38": "ko2gNuaH1E5Xx6sDqDJVGeYsxpeTUCyGMJKLQSfBcazHgKcGiE1GotsabR3v3tQQffVrYZQ1anGjmyHfRe7YGMN",
  "key39": "2wGa83u7zLomWiDcLwBrnBX9M2FaxaMw8F3n15qpQBTASCDHxZJnE6F9jGppQu5KrNZ9AEuFDY7RfRShWMHgx3yd",
  "key40": "kkWaXNVDh7fUJHsuMmakSRDBf3FGNhqj99m4JK4AxqDmabrx8HKW7eD5XgbTFjQ1AZGxnaWMRGWVD5q8GKbQivX",
  "key41": "3i23QFL5z987jWwfxCdE6CseziwX2tCXVjQsYdfcvzFz2JzYBHGiFVTXvDBMGQfmGUupJRaYkVnYgEj6X3bi26CZ",
  "key42": "54afsH6rgsKyK1eRbX24j9FeCYGyzpDnTxrkAD6tk8QZ9i6NjQsBwwVGihySGLu8KG6gsH3iHv2zM6G2bxG54o4",
  "key43": "4YHH7PfKZujcKqDksvEKPNTAuNqoW7D9ffiemcYu3aBbcW2YTHpkJ3f2xuuDjK6Ft5r3DxaSrFNUhtnWhdtw2rWf",
  "key44": "cCArDR31hfbdUmVzA9XK4sLrqQBWwriWEGoCYYSH2sH1wR5mYavawzewzWxMFivMWfinBkLdepjpN3VGSTNbFDF",
  "key45": "2QAFJFkkowzTd48DLvgaWRmDSMXsKEdDDghKyQaS3TRDgH5Tz2CZBi3eoVu8QxMyx42oyhEx4x1BAxd5sNz5Ffe2"
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
