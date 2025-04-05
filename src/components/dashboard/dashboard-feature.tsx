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
    "34YDU9iQq39k5pZVv7ks5uTu9xQaBUYLmEymsHmd5A8cKDh8tFnr6UUBtK1xXcAcPg8ZjxEN35aMR3XkHkEhZoeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RW63dL8WY8GC3fpemqExniWTC75Nen5B9AmGsQjKRAKqh2tuaUCLoex3Vs1szDN3WrwphS4uqJHcBYqoJqmYSqd",
  "key1": "56SEGUFU1mPDz8mfmq8M5sY86AfPiaueHgfAs1iou4LoasmnPbqD3BYsy4r4jtqcvcobfudQTgpYdVHGM9H7fsNJ",
  "key2": "3j4wxTkgDsHUCp5ptBSaFctUfucUSXWiCFzWZbUrCc7bUWxWDt29uFsNw6JeX2EJCNgCgkujyyveq1EzoDFf12vk",
  "key3": "7V1conuaEZC5PdvV8BNodqqdHvH7gBNyV9RMUKEnUcpboCFBhDMpr1ghLik46o7Xjfsyq26sFsR3hHC41GS7ZAN",
  "key4": "4kCexcfozE9y7gxPx9E9L2NtcsHbjTiTruz9XncURzxABTSF5N1Nyo2qyW1pLdrR3WYTNszouv6EdQ2qWix8qSGZ",
  "key5": "2WAsAQAfBKUgtHddU9diTgZHQL8GFBr5qUWQHGb7GjiVShFtA5ku7GaXfMFLFqsu2UNhuQdVRbP13RdfMU4MR5S6",
  "key6": "3rdqhyNYppQ9ZcUux7xPcUbbXR2u1asY1GeXNMnLnBbcrzc3wCLTkYzHqenKqYR4spaF65r6hg2tjKni1NKrN4u7",
  "key7": "5CNfhu15bpz8z6gWkK2rVJxLC9pnebaqF1jTJhNdPrZcoZwJ2BZemuDWoA8mNq9ZdwS9y2gk4DPWXrSFj5eDTqZw",
  "key8": "iMzXUm7K4UTNNc2LTXH1P6ECQGLfXNAjajdCaRcSkeG3TyS2hZKDYgJSedRUVHiZa3pDcWMsMR1Rg5Nexw5hH3B",
  "key9": "26GTW4D797qtnNLYeqQAJ9CGx1QT1Wgf13GpDABJnX4RaUAyj7GgWixwWPcgXWNiD2z1nQPnpCMfE7Cxnnq4yymn",
  "key10": "u2gpptxvF273tAW5Pp58u2FSHhQXoh2d1opSAQmRAzfx3wVMXDztVaWLKt7sCuhEVCGq4Qpk3rKnoQ32HY8tRUn",
  "key11": "3HZ3yje4o7H8xrWKMVHHXHqzvZ5ZofrrPLefMU4okTGJDLKCxZ7paVQbgJ8XFPG6KmE9kMEwkymyHn6JPMoZVj4M",
  "key12": "5pW6HeYfayLbPLLve99hFSvPGBMwusxJqMXe3HBQR6Sq1CqDJGTdcYnxz6F3H2PViuCfxoeiJ8hP7YX71mTMkq9B",
  "key13": "ZojXTqoUY9n3jej3rck698KwM4evqVSgE5Loi6dQqE5n8S9nyJVDuFkxNtV51QTTZx7svnE7ThoA6MebqfH7KkJ",
  "key14": "Nc7dmDbZmY7S2dHWKTSAUXsGZBTKxmpgQofKYnrZzQmtVZUMHwX7bJYeFvHYDChh8LQatniNWyw7ZDf7ZXuXX44",
  "key15": "48FhCFa2672HXZk9DoQGioBTHGho2sTYFpyZoiPaue6FrMXfDiGz1RtTbzB1Dhjzdk4oYMHXEabYEUwvtC1nShNu",
  "key16": "53CUNJQB9P6qr78CD7Yck27XJzoeyorFm3Z5vxBFqBX6ZJ6uhCFseXRRH2hvTgtkzrUZ2zB4MhTxr7YzFvm8Tk1s",
  "key17": "3kEYR5Lu2aS9nZubNyUk7LAWLz1TfTG82XcXPr1QGkrqMQM2wWS6AWQLmvpq4rRFY3BcpPJAt7Lbz1uumjYNiwjm",
  "key18": "5bvgnqADNZaADuF6mLur62YuybjdLtakXA6hcgrSwzAbQVkbzBDd3E8fjkXEAJn4hogbZ1MbuYBezimYF27iQhVd",
  "key19": "Vrmnqsn6uRNQZd35fxfxuFeDvF3dHBHfjK5GM22mACPTU6e3ARstB2hq78dAG86gScYFG5L1xRPwRo8fJTivgA5",
  "key20": "4jUCZjB7Kvy6HeZ3TTcgT1HFF6ucwJFcAK5gKNbK6u4ZB1wajGNZ4bs3Lcw9wMhmsNuoFRLhxUULAHC2T7DQxRz",
  "key21": "5PdpSQJ5HaGWdyevZioZ3HVJMUb1Co3ojeBwdN8qT75NACKrCWvtqv2VgbfdDViDYf3By5omi8upRp7QrnPC5xbX",
  "key22": "25HxTrL4bVTYR4xTCLd5eHEnvQ7npXyLGSfFYL2N33m7P7AHGwESXLKjKqDp1wA1X5qXM293AXnV5kLtrR29rMt8",
  "key23": "3M8XpWjBK5BXaqaDhhzFDDFcBRn7YGtEmyqHj54JTLBn5yyafufb6XhL4kaGdqzRRZ8PeoDjBxh4XixZXwz1VpLC",
  "key24": "Rh1Xz3R2EuXkFpequF56xYGxJQRhhRAjDS8QreX8hbaVkHwJGQt2iBRh8rnMB7LmpwnUNMeWTE3AbJubqH42WWa",
  "key25": "5DXMNb7nhjU48Fp7j9LgVLjpE17UkRYYC4Crg4TUsEVPY5j2qVuhwPVmuJkX2TJaS1yqZxCrGWr8rGkBNTpZNnYE",
  "key26": "5vRDs5qMRLaNpoMv4Nqad7Bh2SUfmuHxud8ZGWoK4us2LnTWhZb5sFT3L31Vu4Q7eHwRzkFUw9f6DVpCwLaQ9rZ3",
  "key27": "4QcQrX9dLhRjZ1SEzJP2xUzWQAf1Shj93gEs5Lur1AbQ4NYNJFoE4ShVTCckPbBmWKMhpUaMqwAYyZHekKY4uyxp",
  "key28": "T8uciJ9o3PbdzTTwP146HgGBQH8k2qua5A2PqSoS1k8zQFk9LAEYa1jtoMWbsgUpBp7G6BWS3pLrcWjTytYoQ8W",
  "key29": "35AaEwtSYHJq1dXeKu9AJZ9k6ZGxC3q6HjiU5UANzptAqR4YqhgEo88qUEswMcNM9qm8sudx2DfDBCzwwGdG2oZR",
  "key30": "23MNQCP4dqgJ6uaY3Zrd4tWWFBXydLqK9XWzGnmWv3CXuzs7kvpzCsxQEkUdg7Cc9ASSEJT2Cf2rzMJc3WkYffzT",
  "key31": "bL7hEVbLP6b5JMJ2TA2uTfiPU4bS2i54wBBUQWMgABpUkhrXUJy92k8nqS8Rryn7yNZVDwDmW3modnR8mdVQ3PU",
  "key32": "87a2AwDCSSjwmtJHiMHBXA9x7q47QKo7oEpegWwyGfep6XDrx7NtGCaqjceknztsbxBDGcdFe1NzMcpydte3QyN",
  "key33": "21PKszEGiNF2VKM5baxP5ZYN5Q36zsZtA5Sa3BgpTJHCzJSPmQftGVVNpDHaMg6FmoV2qpQKSjhrrKGUR8WZdTnp",
  "key34": "5GTkynH2JcmoetGCpk1btapt7zBqUt6raRHQ771AsfNasxzg5rtcpSCcV5W7bMR3iPdreRVKnAqZ3d8rdY4hkvaz",
  "key35": "2GGzs3qVu21sXb3exLeaMy3Zh1K48TL4Ju2qwjBxFSN9DAiCo37huRJy82Ra8YwkSF1h16Yhzn6mbBdjZHKEayaz",
  "key36": "3Hnvv8dXbDrgVpGJerQ3fafK3wKrxHTq1EK98tbVZJtRfeKv3dPwV6S3MdE1m6J3efyWSAgSN14rdaAEnU8zqNja",
  "key37": "3NWSwhD9NcpbWHPm2aDM6FKMiHxVJEm7xMaap3Pog3JT7fJPqttxRfPUKmS6Qeu21xT9znRhY7YkNqjzaTpJEUJH",
  "key38": "3JAeqUJp88pWDQCEddX7UKvYeAe59zQtAYHDdfunEDgmWEdA6rrNJfe9WJk9Fa9Y2MqCSSsTDwHzsm2RRNS1ZuFg",
  "key39": "3Bh2JZmSJhgStKFhVX9bmsG81Y7aScYxaw7FizkMk9ZmqHd4NPUwMvd6oY3FJBoguiF3BAoLdbuibmsJuSQpa5fi"
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
