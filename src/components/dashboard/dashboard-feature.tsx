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
    "52sUUMqmdVNPcaoZjdwxhzm1M3ocdQjpEpvepvBKpqsqZdNL7uCq5Xgy19hkSpgQaEURXY9Ykm4S8rsUVmagPyHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51xyZo5NpmeYWovK5JgxeoRNtB9ZfwYtJhsoFbANoi4HB3Er4LDjnDta619S6w2HYKJRRgoUdutML6Cnu6vEUjtg",
  "key1": "5aJy6NfQnfLqs8qskpmzHq4nxEDiZY3MyPzyupnAbDt743eaZbrqzGee6B5mUsXPYHzKTuXAx5UukZjpPfM5SkxZ",
  "key2": "34wj6szUW1zNNx3nVTzENFtQjurygfWff949ZQutUAbN9coJzMm2ReMYgHdBZy7avueRcDkcEkdBYVFjzhmMw49G",
  "key3": "5FuNHdc6aHKEkBzwmigovZ9R3SbFZj8dNsk4pPTqBbK5eGzZn34qJVM5y4sUw7jRHzknGGxzvxvF18VztC8Fez7u",
  "key4": "QBZyEAj9n8PuXzN9Gj3AsVZYPhr75MV75Lm6x6rQSNnz39qWNUmNxUTs9PG8jnfovZxv9N4pwNLUzYx1Uhf1y49",
  "key5": "24Phyas3iUdN5385sWXrRH5KZH7J7yZSjj2Jd4txv8jG5H7hW2EqtgVq1cJdV4Rz6YEPchLFANZJaHYxwHkS15e2",
  "key6": "4LgTv84d54vPFpsM159o42UTBVYcxfSDVhzpLbm6Uzcvbo75om5P5fPDpsLMKSt9txZsR5ayMziSysh3Cmwdk8eB",
  "key7": "5f1Frf5h6mcDCF3D6LonbZtRtRKqL3Uh6BkSgepyB1kunpQCZ3GpUELahkj1qCP1PQj3Mv7HHu8ZdhcvMJJCE4Sz",
  "key8": "3FDGgeaBtm17HjPbrXDVMHTeXUXjpRtmG6qti14zw9t6Q2fUPGs8Desg4ycwd3RPpYe9JH9KJSzvMmgN1HoYoyTM",
  "key9": "3ryyZFWuMCE5oZhj1t5G3z4V4cKd7t64UQ69mkyEqYcuHSGmHKEb3V4fyQXzqZQRyf2bNpykxjpJiBFYrVrFGEf3",
  "key10": "5qFeh8fKCozhdt2nac3R22pPYxJWVYk5r6n2syNgejPJjSGd38FUUaE4V8mJN65CuLGsWS6x2kKHv8CVoyDEoq1X",
  "key11": "444bAZSSD451RKtyBGUeERnBg1UM1ywcL5qxeUTR8PSMM5VHsa8pmSPygDMd5zTopf7EtFjvhzx5NeK9jxV6QVzG",
  "key12": "9uUvVoKr8vbSwjAbx4jiu6DEaTom7cTCxWiuY33UdGJtSigj5GgCaG2HuuVrqVYXv7vHLUumr8MBrDMxB6Vs3SQ",
  "key13": "4ZEKBdQhUav1i92BTgkFN8N4oPm9eubNgR5ayVN5biJPk9TE186vsP7jTC4rdJsCfGztBQU4yX8KPmnPpUUNZA4M",
  "key14": "2VQHFUvzqumZrdR2FJNss7WmTKTp9hJmQeAKKQG5mBYyG3Jk6SGkbP9A4ZTVbGATwazzK2ZUyAgmYFPfhR5KDaR5",
  "key15": "2svk1bzXLckNPMNf4gu6ACBcrWp5xsFhoVphS1YfGZQxR4oBecbL51ndoaC6VQ71HpdzaoZTZ39xS8twYHT4KbXq",
  "key16": "ExxpBxnQXmHrejLmXYiHYabLLbcGu7fWkGhVXTZWyXQti3NNBoKnxXDVMQNnc1fn9Vyaq1oVrUwqdPBssvX1txj",
  "key17": "5eU4gNg5H489YQcvV8oWKed9g3Wdf8snQyZKXWUCpJUUqPoqtmpUW7Qi2b2gtZyiPLL7bw47y2B33cX9qH82TC9k",
  "key18": "3yt76Y1fHZdpSEbWLMNRCHBwQp7FBVvpkg9gRXfVTJUhP7jZkpsR8JFHa7JyV6sXhGpsdYrfer6DKZGgd2fVafcb",
  "key19": "2swi6F6TWXUs4nEp88WqiyNKd5RthzAuSSnSKFMZ7WpCgRigaEPx56iqkVB9QJuRQ7uBj3ohxuNsMhGzBhRwtWys",
  "key20": "4KmwpmNvXh47V57do5bW741mi1r91MXuZk29ch2quH13cEAf3CuCw8SiMhsmUs9b83t9kdQuWMBDxpwjSBhTBDMY",
  "key21": "3ApqaUAHtBWXShwDeq7Krfu83GKu5AMmJ1T7gEreD2SYkPnMzC8z9JbFJ9iuqAHqQkvnNjXzpF7xaeKj3Foq16rQ",
  "key22": "3i2mWcdqGMToz3J4ZTkRimPMPfoyg7AHYvyUEBdMmb9K7kWAjfX2CJGyUjwB4M9xoAJiM1nz8QGpqCiVSKjwGGAW",
  "key23": "5GHWVcZu9Qzt7kcKuH7P177D5rbin6frMYnrMpH2w4WkHqYsuLJ2TsKBwVAg2PhcCLxHL27dEioVccGWs5R4Ad2C",
  "key24": "5kghq9ySDeyCgEb1RwCS51UCvtdMmC8xJsQFk86kHzx3LoSNXrberc3qkgf8m5xgvboUiHXnAXMuULRUx9ZcoFag",
  "key25": "5mMxcxEiU4PtX1pVdsMM5zCLraxDSYSyicmt7eheSY2H68cVQPZjbVMi3zgPZsZR8xa5vX2RFh3cTNpJDGQ4dj5q",
  "key26": "3mArFWJ9XfSq7BJqhUMbbmLJBt1mY9QXVL1SnqkxCoTxdmhUJnDvWgFLuEjf7tP1iCCrwE8p6H92NQUh7e9WHWqP",
  "key27": "4egiPD8QdV9tUFj63pQ3Hb7WPPN29hy3DdWErWSYUz8HZBYNdvTmXS28x7DXsm9g6ocywfZVi37cDn7AEHtq3uZm",
  "key28": "5BENaxAMKnorztsRxcRKbGCiqBSBPVJvEsEXRxDaxjjMa3uWzdqFkXwrn6Hp6zfzKrvRtgLMEQo3NjFDD8YtD5ft",
  "key29": "4Bg4jn6QaVfoxobdHmjJxUY15cxUkx5tgA1C8k2hhMmEJzzbsgZniHReRBVb2fYoCoJbYJAEkNs96wuzz7D9x1au",
  "key30": "32XXmVjvyxrERB3gDQP8ihYGLZoDoLv6Tnb4qoWhKXxztFmab55H4iNv8wLJ7ciZ1gVm13EnxLyJ8uEq17CKhEbr",
  "key31": "2PqSdZNjTeqAcLhwffP4WWMbFR3uim7AGte9nxqj9gE8qUwPxZFTnyTjcCDtBDycA6P4gZPxAAGmvxvdPDRnHjgP",
  "key32": "3rvVCdFLgmWpjhfMziqfikpB7ek6EknnEEBTjBVSFJsAg4byV9iYZ1fceBBPAMPyfLT34W1Qk9zZwyieuHjT4hrw",
  "key33": "nASQhfdEFsGUrLch9WFUDxTzdt1oJWaZhSFA6H2qsi1AhY5BK6zmktrUBAieHKYo9ovsSGq6ef7jHCk762zed3X",
  "key34": "5a6PbVWsRsfvdNFsY688km6Ryeqahgwpb8X1rQ6j7cjdKgFA2VwcimE4YG5Bdxvt5x7DMTbTonGdEVk6SRgy7N7L",
  "key35": "aadYTWGAuqDo8J2GgPKyzwruwKc3s6jz6ZUvsPXbWiohifv5AoU4xcHmyC6eKE23mu4wcXusC2xPRCuj29Cu1UX",
  "key36": "4XGRwzJdzPhoCcLTHqNqmz4jwcjWAvVYjgTteSDPgBPgTzMVhzoFZ9MTMkB2sSUGKrV7YsAG6Sjw9Pt35VW9kE2s",
  "key37": "3TRTSCazAtf8Y2ydafG56mZaaF9xsNw8SgW5WQTgYQNEfiagcBzng9pg4171tVkknDAJTDob4x2PjSrUQXVRs31A",
  "key38": "xhfEbhqbwkKe9yy18mpyxR2W1pDKmMYe2pP7yLT4GWwtLY1Lic8e6y7KmVat84k9LxxJwRVozMH88ccPhDNbHXt",
  "key39": "4qhg2kqMBeX1jm9aihsVfrRUZeDYUrqX3ToVQKZo7eLb9DcpKSULWMxTpNZNQgPN4crdXGmNCZvV3yvgHU2r3JfN",
  "key40": "3baZcVrp7TTzyvZtHWwDdUEJC6N51esDwm1345e8cUs5oomPZoejqACquCs52WEYPPhJ9XExx5SmwXKAcwuuKKgP"
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
