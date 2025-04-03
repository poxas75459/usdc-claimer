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
    "5pwt9hwGENK6iWDJncmgxo5uy7aqVsBNCDkHKYBkeZ6CwDtCXsAcKeQfsF167Py47tZXT1FnyiB6FPjxt6GTWipQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46H5J3PiWWF1xBLyqHEoiBTAcViV2QE8emyz9p99DFh7jTtwkSkaLLpS8kFnYnQLPKdtger2gzjAq6tCG8DFeJKQ",
  "key1": "3jHQMawYDZDY53srKh3dEN6Y43ZiHtvruduXVpqmVDp1XRzLQ35HDBEK6sibQcpCRkScXhTy1xPYFyGUqMoVd2NT",
  "key2": "5X9XrR77idMDPAEHKWucV9gL6KLYNmjE3Fw7NSJKNbcQW3y1QS3F9YigTtfJueKT5WVdBSXFYTDFrwzHmimLhBoQ",
  "key3": "5HGNsYeF6naMCACcqxsWosEVg1n9tj4KF6vsbVhaTJ1e5BAMe3pvg2kBZYiyhB45huY4bRGeGFDZDMqA5vnTcyW",
  "key4": "KavTT1XJdNQnRwNDVKK6FCb7yUiWonpMpdcDhTuxAget3tszHveraR1gyojEXBtbH99dYED26sj3zQKDx4EDEMH",
  "key5": "4nnXwTpTifRuyQ43JDS9sDnhi919mRJa4iGhJ7HumFDkzKDYBWcEAwspEFhqshzL1KEWBLmny2nVST4UXTdRsXY1",
  "key6": "4MnBevFvbstd8VkmQ1VTCSBYSF3psgV4CWZHRgJiDwxFTD2nqr9BZATYn4S1xzXQF8W8RLCJiKuGT2XbFHBpGSdB",
  "key7": "64PC63kgJRNjuv2NEtjkTfLxTQo9DoBDnUspJ5MxbGUZoveJWBjpZxB84WQ1uqe3UEPKU1i69SWwAkXHBhrqSj7a",
  "key8": "6523bq4e1CP32u899yhXq54Ch2FaUsrgVdjmDTjkP9npf8oJmhVxiG4t3ksKeWeVazReheKERtZaFnWFUoxYKBVL",
  "key9": "4bQ1dSWH6nFkLiHCfBUqcXBuZXuXBrd9wGmghP1PnnHaVU1KJ4WUjBYH4oKWK1WsZ8dF3sskUMBmdeWzmjmqenZ5",
  "key10": "m1dqJWMmp89MHgstyETJQZoXpoV6QZebQgAEGw7jX69CnGbaxS6Vbwo2a2UPpH2rrSxJK1gdezUMsMFe1J7UCik",
  "key11": "5a8tweuWHuv1jW497w9JMdMQemuLHBbn9TDhnTcxw39yV6mB3mNShka2DV7CKV2K9o9R5AuxYjDMVJ6CwZw8Znfw",
  "key12": "3H5sMFT8Hkvfs26hEVvjPVv6TRbf5wpUDMfjy4L6MK3omps4tKxmLpcPCDkVsfWCPmozcspy8pyQNWLb9F8N3FFF",
  "key13": "4fE1xS2cW81thnF6fLc53q5xUP9vVTXP3KNa6bLaGkTjbP3gDmmEhAzTGM2WnjGcEJV5E1LoSwcZsd9g8oHTxhQw",
  "key14": "2fHNjpJ9JMccKtmsYoy3uDDVQQkt3tGvHKTMdWNwLR4pszmdpgKmvJf8bbKFpHqzN1Zy1BCT85yJke1iE7Kx55hP",
  "key15": "3b283A43ThUiD7M6xgpiZGBFbnostvirZyH6DgaM7iGPRbpeufrLDVQtp3ZLfZoEvoSiBMJ69JphkBNAXFGQsm3w",
  "key16": "3nt3XmZf1SWijTBG9fB1TLCfL9pwgGYGsmSYkvic3MDBjVLks9jTGD5vr6W2DkcRSqtYnbXsFGehcBcmNebXWCSY",
  "key17": "4wuyVW7YxdqgQMgUrwWguCkBPS6idRsEjSJXxXWUFcHovNG9KywYUK7wKT8Di6M8N1VePyWiG2e7tzMXYzyrkBGa",
  "key18": "2DhmraFV6qAxgL36E8syGvSpMufetz1QQaysabpwprDMxHAknAN9vtGXcGJaSRoGPrtQrBB3JGbJfngZ2BugPVpm",
  "key19": "7CG4JRysbYNxo4LojnyU7DefQFnt9sTz3wHA7kNm8oXSU3Wk4yZu6MfaBieqrSqPspHgLnjYkEVoTo6wLwZqx4p",
  "key20": "4yCG8kDeBS3DNvSFT4VPmjh9Fr7pibPKP2unkDq5PzuyZkFd8XC8QFsjBKey7Gyhm2J9XvdQyVG4Xaj9NDmX2p4L",
  "key21": "5D37J1hYhWnJPQgrLwqYwDcJbdwuCGA8RFt7zWtao3r9BZdcpCsp6sMwAJd7wUdUB7CT5hzkw45ipxXqCFkiTRef",
  "key22": "4sLkJwn8JjFZxKh8JFzZUBjG6d4j3xs2CJRvf972MaULLD73fhycVaFWZmswfAjfwyonxiod723wFMr14KZ1HE9q",
  "key23": "24ysR2BsDKUjaS22LY866x4rm25ZutcHYnTUPc4pHftpexesXhSesjuQxfwSQydnVjBadDBKn28RDs5vcsTwjx1f",
  "key24": "4xKAp2GPEgM5NhWLvaaWpKz1zvnepb6XzfMmsw6vCtsConx1NbPzk2iQ8AUzFwi3L4iRgYZxo9A2CYhXh25AMAj1",
  "key25": "2erDXeBZC2W2DmCAVHqg4srEu1mbc5E17jrcCSNvEQLQNprNHeufajZGqGyjMU1V9xeUCyMTFifkKL49k8QHzxLT",
  "key26": "4N19Dp1VHhBhd9mbmu2h3TiZNV5vJrQCBmdAEsqSAH5evZQJq9S23Z123dAdhm2SoQWNNqg3e2BJ2HcT9vMvx3YH",
  "key27": "2hisBNHHk72Jtg7Pi2ELw3upcrsgum5gok5B4zQ8qP4qt5thDe47vAxEBiTLeiXpQC7CScJnFjNbsjeXdGZxALze",
  "key28": "2s5uorCU55DqtSCJggr5GsUNtBSbYqZMLDLpctUTKLPLTfp1cSDnwD6eksSEfyKoExKPmVnPJ1W5uQXMggUqZLti",
  "key29": "5n5jJ95NRx5FCj5gss2oTkwCecDxL18e73ie8qzrhnnW3uHEiAFJzcnFP9pFa9fVU82ehb5APooxW4h6WLnsLR28",
  "key30": "3n7UHQqra8XAcysw16SsKtjLFTeQpheGUCkiJKM5B7RdRKKpH13hTiCRzzWuj7xsFKLXnW93NvXkKExBv2jmGmgx",
  "key31": "3SohTgmn563Cspi4SJkqe3QHR3DuQcgrcHKnSt5UtZWX7KsiMzyWsprCZvWxTcMDDyZaKYxhSyjXeo8VGtQKxbtH",
  "key32": "5cKUsM7hpsotfeonJqzdPycip9xbLX5ttKLzBAKB6FHmNLt4e3VPhtNBVjDZyFuzE3AJHua7wJv2uZnpqK3KVFcW",
  "key33": "rLibrqoEyEdULaSVubL97VeBNhZuNiB4y6u6fZsn1axgqDMtkDSYF6FXzyetT5MH9tt196vujTFiysRp1ySyCnh",
  "key34": "5deQh26kxGQAUh2JnXBVPWRmomF5jyKfimjs4GGHZsNM68bTUgM1TJSyYks6bJu4EC5dpknMJvpZVAAAeAyZTQXk",
  "key35": "45extmBVwZ2dnVzwD8m8bqNgAMQHayUui2gMRWHtts6wZaEQjwuoonHLjooFKbbmSER6P4UkbqaEzjjeEs8ww6nB",
  "key36": "2P3TvXz7J9nvfuGf5ZvvCt2xaLHhNC23RoSLtr6cDsiUib6G6A17g7wwMDEFZ8ssWn2bkrB5jo62HbmNwDqe7rNT",
  "key37": "4fmeqy3w9uowXwKKwNzUmZBPjgpcCmPQY4jc5SuJ7aiVMUTt2tn9SubQ3Wo4bcuzyu7HcJPg4AYMjSHnAqRrfXo",
  "key38": "2m4MTLepMrYGKPEtvQAQ51NTSd3SWma4TfKm4ZDyjE1Df2v1xB7YhQ9ugAwcH56DgmtYiAc5vHCkMAZVXdqmgteN"
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
