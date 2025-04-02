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
    "aQR6YRiekDHpicRyKy4hiVZaXcTNVe663VEHt1Fx2ob79H9MT7ndJBZzMhb79KHH7eNYjDA5389MJCLVWgBfx73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bDCEbvPB9sEEgW2onm1Jv2Fg1s3St6k3DidEkrytV4EhpuZLiGwaEX9sg1VRSoVUFDpZrNanq95xSg8PPQwbjHx",
  "key1": "38rfkDEx1MogDcX6dhErUFhAh8BZmi7efCXVJ3mZjrgt9eH1Yo8W3dAG3EVJsak8aBrNa5tm5QC98Y5Tb7yPPnsx",
  "key2": "2N2HnkaeUyrb1TSfPk8e1hqDPBsgtQ8mA5cF5T726QnQX2qK4PeduutEkpe2TFe2sv6jCoV5dKd6NQHvJLgYiSro",
  "key3": "2hfPaqEX8nxsKQsgcgwcszyiacRNvuYHwz4XPQJFrTesUa6AcYyFqfXQ7ciPASjfwNMdAtuAEMhQHLtx1bGcdTt",
  "key4": "5KgE1FkNPdU6o5RurtqtA2uVpnoWnt6BgPrKUDqyLmFHXhDoun5TshHN24ihJ8BJ6CSdVjPQ6E4RgnvTEr12MGRu",
  "key5": "VNQcBNebkLwJkeSB7DuNavVr6hziXELM9Sc37JNuCcHtLhx6FepgJQarSjc9PRWViKYQ8CKoqNGtgT2ZVo7fqKr",
  "key6": "NH3apwdrbNkkvYw3ygfrkRvgmFhMMH87qBjJyyqWQLgpinDaDZQnWkHiBBUbekj1thiHCDdz31DDohH4xwvj9n3",
  "key7": "5WPUhsRtekRtFsaVk8Cf46xzrUgxduZpzA7Ym3xh9fBxxM5xHP3im76PhngkX2hG9mhZvZxj93gmQjX87urdXbdz",
  "key8": "2AZThqehaYPCEiu1PSzqCBFf5behQg63A8zuoWipqkspssiURErnRUhmHdR6D8J9XFygak3XiV4igdf9yZVWC91",
  "key9": "A4kcjRLNWvqCTbEfjcaQHShHvUkaDNC4bu1isibd1wrZiakMr2Abdc3tdtMTYQ6TufrHdqQg45UjU78EWoNGraZ",
  "key10": "58BdPize3XQPXVkiykYXkHJ7HcoqQmRv4EgYSZchwXDMeakX4G18TrrbbAoDqxEfrn8X45Yvpdo1XXrtxUU8tAyv",
  "key11": "3bFzwrUPT6yFkJL2h5fJHUS13raL53X8FAX9Fgu8TVvrQ7Ygw7AGzB7Ne4o8SedAh76do4Cn6iz4kN81bKxUrViE",
  "key12": "2Ub9avNm5L7GcbUxz4eqmZ3gEwL9MJJF9yTZpUxxorgtPfsCbXmkKPCNqu88N9f18tPrj6vaL2ZjPU2RgDtNg564",
  "key13": "FJ1cyqoPySZxPR3jdBVKFDYX1ktUGYMpc1WQJjBJRoSDK2P3Mrxyqdf2krJSK7x8fFN273gQme54cE3nKdXW3kN",
  "key14": "1CzuPwEDd61PQufGABv1xMoRdPKzzWX13ZukxwoH1uDrbShuAdhhUDbnQvrXNyQdVtzhmL3vfzi4rby9XcJEmHv",
  "key15": "5zYw4J3QyYgz4SaJv81qdFJthkZMXPVHEdw2ZADcgekemt225buoRNRXt7nBs72xHtjNNNsV6U3BDgLkGbpDJ34A",
  "key16": "4yd4XYJKHUvNNuJQyYotDrdpmt5fss42rCtVdt6dStKasFGjkRNDFnPn383PA6nxB1vEdxX2pmkahW4TCvvCfUV5",
  "key17": "L5qp8sauFAr9x3rqhXckoYvprjYwjn5WVo25Y7cuioXppZKpmVwRoCQUsTnijeRWbqJRhmEVnuP3CWBiTTGb7vq",
  "key18": "4sdasPHXfGqT6WtH1qZejbwhxEFoDJXtm34mbjzjoQ6XnzWa5Z9c32p2orWGgVgR6KAnML6fRcorEkRn822YYaCd",
  "key19": "3ASzE7yYt9ncKuMcjFUQ9QUS9kamwJbfeH6JevmgdHKHdqHXjXUobnZTDCvhHXPMWyHEskvjze4ZxJjWDWW9RXuC",
  "key20": "4UDccPb4TWZFMPVancJy4DU9UtmtEyeahrxMNYuLeiYcXZfGu8RcR4H8mCaMiVYkgDNf2jVpXD793Gs3xFqteyDD",
  "key21": "4cnLVoMhBp5YKtWRTkAL9Gf6ot5YaS77gpa4FLkC9y14TUWHW8cQ5h8SZrHDDoh1WMY45yEMCgw6idiucwGrnJt8",
  "key22": "2S3s1qh6tRWG6refSjLxmz6g19BHpeesRfuEAS6qWBvnKJTsLRQ8pfmXHcpDF5NWVcypkjm7mh1NyjbJcuQSb7df",
  "key23": "4e1D6Mx6H6G5CJvbGS4Qxm2ND12aSFnWR94D4mY5t15eU8aUr5qwc7NtT7mrsaC6haPaUQuxsFa7nM9bmnEARCHS",
  "key24": "3PB36uUXGrXSfW9pzQN7Gw3nb1Yycwj89Xud6SvHBvBNk5x265a4e77XfM5Ja7z6xMKSuPAAiy4iQRXp3oPX7Mi1",
  "key25": "kRCjxgkcoMfhFVVioFYp2sLrSeBNESYX7skFrZ7tAfaUS8kFNxnzhFUqJ9wwBs9raCYZW5qu6x4f6uv9WFMEh6T",
  "key26": "3TvQ3UhXmkFvPVEDaZ3tv3PhS6zzYpxJWuW492Nw2XMVQxtFJhQWkiFdgfct86LNNMA8BsesBPV7uq1jSakpWdtU",
  "key27": "4ZMpfKj6Uv98HGe9xWCJZdgwuZKkEV6SJinbtpk6fR7j4yoYW9VFDt5rpA88WYNwpacBwanjd7qAWFp98rsZ7Lrv",
  "key28": "4csiPocgekYU1H3teqWWuYydnV2a34DFpyxdgF1Gqz9F4e1h4cY4rZ2vEYLukNR8utXncApvrP96Dj4zcjVmMf67",
  "key29": "4R6DDLu2r97JfCSaCbthrTRtGSLgR2zXsur2bUnuUnmTqQeZRotZwMPcHKidExTrF2VYE82A5staHbKA724JLwFe",
  "key30": "46vuFSxJxUfb3GACcyFNjvrLPBuje8P4WLocr8KBedo4WgCvYuJt1Kn69giaPxmR5EDFPKKAx9XdkC2Ar6rY2pTG",
  "key31": "123zAwrPFDGVyaHcPosqVdd6mdAmeuqiK6QYX15CXvy7azGWr5SZwRw8Pn1goHS8iSv2MGqsKjqDYrJ4pjwfh397",
  "key32": "4zt6PpLPAae4gdbQhrqp7Mm7dG5vJjR23eCkD8Ewf74J3VJmkWFsnmtm8ZoGnYYehHSByMwGMPjJ5qjhYkP4jw15",
  "key33": "hCt9nc3X5nVHLQePc3hbKptihpPvQ6C2YYdZ2JeZy7a4dKFHwZYNmcc9jGPWS4s7U4Y6X6wNEQo13H7XGdf3oiU",
  "key34": "3b3oSmAsjQb9CPqvkVoFp1hMDLU4Vy9Bk1BdrPcFLSVgj7ZcDXThLRJB9Fo9ZhzuSMLF5NksEL8wC9VbaTjD1sSh",
  "key35": "5jMhCWM8CzQHmZ7GZeoamGQvyrXfo15KBMp7zmnJVPVkYwnUwvZKVPfukUyrY5QUe2qNMutHEKaVqepy12qXhmpd",
  "key36": "47mRWufkmVWD7E62H2WA3s1nNCHpgcncHHrbmT8RC7pjjc8nTKFtFmRZAKcA9XHWXBSNhNkZMweqjfML2GzBbrN",
  "key37": "oqAaFbTUtKFGdxSzkunUQeWP4rRMDPVMVD6LWNBwMafzvgB82o3XTBb5VR5bb3LyXCksjjNLmA2RYTw2NU8qVXD",
  "key38": "3z72mEtcvzzdnnKV9hHxguyynKAaJ42nH5sb6ezgPhS129pjETBbjvWfzdaxyfkkkeFrSjpMEQr3HMrB4ZiStQ4Z",
  "key39": "3r3cTu793jTnyAYrn1jT9YiPLmobk1fo9DfFRRfKmtsramM5TnshvRUDern61nMpWtY4SadJmgHWyquhrdhQwHTK",
  "key40": "24A7wpwxe7vhSiiBX6zrST3UFDjQE7yZAyNJRdviwHBfVS5JTd8u5yLTLG7AP4tUhap4GtvBXStqgYx1wNBBpW5S",
  "key41": "2WBgqWzdNGLquEYek4UCZDpQ7DpSzogu1vXd5g2zn4b2Udq1K7a67zr8nFx7SdZhi69bNyniy5EwBQqM5RVYdmG9"
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
