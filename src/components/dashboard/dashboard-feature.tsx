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
    "4xbp7mQvS8BdYBgMb8sWm6cUyTp1zYFzBYa84gvcnULryTMbE62fQif97qpV958FNE7jYQanqmikFckWKa2Zu65h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CBwymseiauJ9GmCRnVt7uWmN5gboZNWZMP4X4r8V2JVSvkEPRoTJwNVm42cfiYTvE9aRLduQjzga13S2JiBG3z1",
  "key1": "5xe3e4zjErRmuu9asYJMDwhSHJRfXQe5iKJJ6Ct2pv52F93WKH8knSpzRHrM3PM1EwBTs97M7bXTAmNEghmddBSL",
  "key2": "5k1fYUoN4arcDZVsR22poDGuQ36DhahiuibTpGwZDN54SQdt5D69wPXK3ZkSK2oNq1VewX6N94w3LBhthorpuoGg",
  "key3": "aRjy96vPBWAdCTME2txeMCN3qLbiac2jZzod6J8H6CaeBmnGTB5PTEJVUcJakxJnYLNXcSMR6Hvv7mmZCf8b1Gw",
  "key4": "5KWuGsV3VFm99rYyk6KBtzx8pkYVjXu937w4qgevL1hyxvssp78qQVwd8tnC9hQAHNHack91wAAJSj5RgkRvYeFT",
  "key5": "5qJnGss2S1w71gwd7vABN1Z9eSn5Yg8jAbaxyQDqw887TtX6pe32zmvNjZZeUv9648TUTWie1FBd1jXSMxtnP38s",
  "key6": "4JJ3SBRS7oDAVHp114ZocJ1F5ajkumc2VmWjNcw6ccYw1bMDtEV8x1F2xunSxVzioAdGLQBMx9d2rZWdzfmY12YH",
  "key7": "AerFa4fTEp2wCuKJ9Nvm1WNCwpwHwTQr5Jd2ZUt3QQWWcvMkGKLemoKESLsoTN2PewFrYg26n8RS1WZGhRwMikx",
  "key8": "3GQH4cKXZdR97yZiPVvZ6n17cnPJ6CMSpeXbtMsunQ56cXBMMHiER8119A3qaSWJrtb32PBJt6XrGRMW1xus3xSf",
  "key9": "4W5mLX2jznMLPqoskUUFtV17hc1fbWivtzedeJECUUrbQqzfdnxBQBE6ojfeHz7Ntb79eVJRDTcwX7zPAiWqSCyq",
  "key10": "55XYDACaqqL6e9SMRAhH895Y2kudFPdqYiFRBMmjDNduyRgY7NfvZtXoX3CePc2zsmspyBtfMfMfvPGqnabaescp",
  "key11": "2FihYzPyy6BA7DYYE6sWVdbMnniqgmwpod6KZ75XP56CG4DrUSB3NA9hcRu3ZE2wgg4Nbknzw6tiXcq9hxVwouKZ",
  "key12": "65XAxDk2xuDtuNWA5HYmhszHE2EufaWnPoH8KtjPHLC5zydjixTEpaMtVTaL3N8EU6VCHMXvGck7i1FYpYHjV4sF",
  "key13": "2xiPicxNLnBN6MDSpUBJLCYNW6j7PVT8dguGadq2XEEvPyE6DHnpT7Es4AqSGHzu3bqqJzJcUqpUpadLDN4ST9rv",
  "key14": "eAbMMAcWJKLhCiE4uPEe99rcZXFS942U2d6tmY8ejanLz64H7VCUxea8KSCnMoRhxM4ag8z9jSsp1TRi88CWs9T",
  "key15": "a6pmyvJBJ1EwzL96oC2ohDAGEzYQCGN9ZsVtTVZNTJ1Gra9D3uNdCc9VpLUiMwZDUYQqkd626jy8zUykHq3gDoq",
  "key16": "4TwJrUd6xE8cqWD37ZNRCMiwjSrs3try2tb1jqfA5X9B9E2FJDgFMjVznKjN2Nbbo4rVzrY2ZcK6HkfYxdtFpDCf",
  "key17": "4XF9Cxyw34FKxnp2g9xKpPyP4eDNp6tv85W3X1QHVCr9TU47bMMb7ZzkUnHiUDfXdoqW5R4pyhrbp1qsdmF1KNcy",
  "key18": "drrz2KPrBW7nuo61kRLdBR3YocAERcC4DGy9iEyysmjPQ5guJKXctt5PwbkZkDWHcBd3QJ2gLTp6PjcvJkyrw7U",
  "key19": "5GK3AG4UcQw8Nnp9qeAAMjYW21EBChPK4huY1cstwFr779GaTe7hsFvmEG8zp7HujbxHmfTMWydStXFsLA4LQ7Nc",
  "key20": "2A72ydpDAGBvRbtvD3dNdPUgxP1ZBiJRVbzEGoigaBHuNpmbGYjXLaxURKpU5GSUfdtMDodJf8ydbUjtgNeiq2gX",
  "key21": "Ah8bTKgZbiY9rVCpk6gryqcDutFcbtXd8xcBru7qdmPteoYRwH7xGi1tUryd9Zqtf88LDK2pL85SFxL8yR1R4fy",
  "key22": "3zMAhxz1g9XQSsAGJnW74hPDtxA6w4jzVxZ1SfF7PtCi2RvENv18Y9ofhgWjKmsT1GrsZE6tsGTYg6pbgsxg1LND",
  "key23": "3wvqfJ7v5RfQJns1LDApQjea5WHfXmXjWz9faCaH6Y5nAerxK6CgemywehLrApw6zeTvYgrbS2PKDKhhBsqFJPcT",
  "key24": "4Ux7VLZ5UfWdQG3HHW39H9e9oXfbULurCBEQCCC7zZpV9iMG5NCs3uf6VeDdDqtpLrRRPMxoxN8UvrbMokpcK8C1",
  "key25": "3PXeDHzCFr579qiEUFmeJ7t4iPT4H5eECtYesTEAVUEEq2eHgJYnBfFkbzWaSK5AEY4t1qwRqYGjNhzfTzRNJsmX",
  "key26": "4k3DZABq3uAB39dd5pBthrXzGk3ppMHeVNQkNtPtxdjkgTcxcP6v16BoNqhdR5RDTFJVv44ycEYBdYdwPQmZx1dp",
  "key27": "2aDmD4jBoA2NCyeH8AKo4guf43RcRZ7YPTTYfrD2v8RyhyDGRJEbdcMuaR7gLEcWAWp6JxeY2iPRVbQbo6UCncUX",
  "key28": "3texNGJVLuff4romihxWohEtQL5KRX5xphpKqb6t4HEm7zpmJ73qrdvjasYe5HtH9XjVC34YX5o2Bz5XJ5W6vdzA",
  "key29": "5WWQufJfEyPtkhnVFYpCAREYmmCirHNTRJagExEtpv9P3roQPALRDphpS1T9gxR5xyzdG2JP4pwxRkPgnHPy5m1T",
  "key30": "36wHC55T65npah3EM7XZWN8uJHnQ7VgKKazoeMbXtPcdy5bDaVemywqA3wCdmuHQX7tVPPcnYrrAn5mLxkKkhoPT",
  "key31": "4PK8KVA22ZF8PSMNXPVPhPS63TooJXL31SVJ2C12nSNhLwH7jaN7e15m4CTnvhY9DL6tA4NUuDMYrs6wDH8UgdZG",
  "key32": "5XvQgQcSi1hJUmWTBK9u76DcRVNRkKrKU5FwSCJzKYigcnX52MWLwAzTs4MtMaQt8fKjLQ8BpuiiXBhztixet33g",
  "key33": "2YoZatUaFzfcbHd5J7Mw367GMVwaeEchUpX9eqLRZ7niviBxPzQRfiSa7hLsvAmB6m9eaTd7EcE3ecJQocqb6otW",
  "key34": "2gtSvChty93pG1Fp5raXWjTUCmfXFs3FgdpQUGf5ChZ1JxxsYg3LyaFyPVuZ8XvL5R47VnZrLHuVLJeopkDLhiif",
  "key35": "2WJKto4BXgGg4wjK53wtBqigygWJ2WtQVJQT4UGCGNvPHFzoKiRFZpy1mdraDMn4xe5UVDsxvFLh85QZkqfJnwkN",
  "key36": "29VdS4rx2kt9y32gPqfrv5LHDHzgC2REb8NjHnZgugXak1fdnztnP7ggNyQDL6B2tzpigMp9S4AMaRY8j6Gn1XWn",
  "key37": "5Yt9XPGgbUDfamdieRnog7LYyYUs2wkSPjvQ6yzPCocG5o6siFnSWdcqt65effFukZMmbVKfkcjWQx6FmbWMHKm",
  "key38": "2BiccJg2BgxHiuEw9M1eDE7WsKY5uJwVp55RDJCrynf7Taxgtz2EkF6X7fD5s6Z2dteobxDo89Q878D7adyrkANs",
  "key39": "3NQDQHcZsZzGFpTzVqUXDZHNCxBT6NnyoTcNjjDz9ctRfwdcehHWH54iFjBhjUpbV73DtfHRN3hmpA4YFHKXVtig",
  "key40": "5x4WXxRQ5Fdq4xH57GgJxvcWU48ihctN3SsrtxDtqaSYfMitWASYsyDaEuX4C6ufz2VyBRRSmSxu17rujqRSFaj7",
  "key41": "2yJvHMy9R11yN7GVteuo2sR29qE3MddgLZCGzwHKVVyNbeRi5uKCZWwrnmUDg3SC86wGy33dRg5N55WvmwktCUuJ",
  "key42": "4WShJoYgDwL3XiwVsJyfBWKBmhnbzyDqVYDvtPbdfQ5GtJT9W6YLYhQeL3CUCmLfBV1Xd1wngHtX2KqJ6xYeAFo5",
  "key43": "57Wi6tk8xuKz6BzwadqEfFMvnyTqkDhTyWCPoZ4iKJpeJbW5BbqWb9KphUFNJC32qhT2rXKPWVFUaE1zsGA13aqy",
  "key44": "32H2ftGruGfBh2oHazhpLzK2ExVMBfyzgXUjumUSGp6eZZ3BR1XRac4T1p1BK6MP5ZmLRyFzNZUfX2sPaMAcyZUE",
  "key45": "3J9hnSyd4QtLfMWuobDTqDFkaJUBZrbaxTjyzY39VP3dXp53Ym5jMEKxnfAtZyymQdVoHcnuw9ExABfjnTnT3eMA"
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
