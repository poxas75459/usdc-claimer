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
    "6Qrk9eJn8xmWUuUs7F5hneF8QXVC4A3rdjCMD4V7yHrhGEHEm4jPS2aS24FjXPShb9cQ5AzvwXWackUWvbAMLXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k458E2yCLWXkfz347vSVTCCUs9LVp5nY3osTTDPjFWcynan2MyeR52Jgk2UUzodc7aevXKzav36UEmwv7FLxDdL",
  "key1": "EfA2tHNyJLS2WLb5UD23Lrhsik5q1TpyGEhsyRK82usTrSE4N8LkxSjt7Xm6rrXKahUWeJYWtCC4zhKaWhtmMwp",
  "key2": "5ewUQWVhkHat38N4iYL9CtpCbzzDifgw1n7sKThRy5VQ3PkuuDYKoad5WLj4QSEdSgT3BYJcRxyB5YGeZr8GBh5M",
  "key3": "2aCvF3dkVWYNDBeZFJ2tssw9jU2sQPw25QGopZtSZn2p6FEPnUzAMhyHqiJDsEcxaiqb2AZqXhhhGhzEohffN1P7",
  "key4": "4HncfpwY367fgDNuBoWaNaebevGNtzUc5zRR8uF67wT8mbT3DNhLrRgFGBTDgXs8pixtZ1JdiBo5NYtGmZtaMtvV",
  "key5": "hUTjXuanmZ8d8fmFYvxBx33o5UoezgU4e1ydsas35yJtqY8NwCWdTBdq7dRDBFa74r54yy9PXeAtmFJcxrXAPqG",
  "key6": "4WNU3P8oqsx6WcHcmWmacBEwD1EjsXyLtUqq3YBi2oGNbAEHojo3qj4DE8YWE4xzCtXR8PDhezRsbU6bTQDkbGaJ",
  "key7": "85pdcMhuoTCnvy2tZCGFkthhik1vrAkZkWVo1jvWXZ2oxpLQwZASmeDxPDqazNr5zhcso4fptr85B2yB39NmYVf",
  "key8": "2VuauPq3rqvv3agdUAyk1To8eRZFMgUh786MM8AEQLBaF2jxo9hpZEHTg3jAv2YPqNJpGPtWeM2gWtArWLWHZiJY",
  "key9": "Xk5HU9sCTRxu795nWhcxtEH7F6ZSzHWAsJbdsWNhRtgptyLWjBXSfgBHXZSqqKe65YjP8cDfr85Meo6SXtP2w44",
  "key10": "2t2zCfy7FE1pgVGfqvUUBavfEpgSDvVL56bPk69DHeaRiYSZEiybq3HZDkx7MHSLMgmUpBGuF19U2M9PQsuDEzhs",
  "key11": "3bfwQe4jobEzhXRtATTgXVQuMGBv938Ajauc9Beih5uAWigYcZhezoNjErS983TtaB5qfjbHjStx8X946YAETkVB",
  "key12": "54ipWr7wKqe7j5FA7FsHnJNmsPDSZ3iFArRGXQ8vbkYMPgrh5ADnq8JjnsF9gAnrUB8JakgNnZvCsY7wfsXe3Fd9",
  "key13": "iwAE3JkWSiQYVaxE4dr4T43YLUQkq6wyyVXqUZe5453L6aRTwn6UpRPXicEe9CmZbganac6r3MKszrzq8qRU7eq",
  "key14": "3PeQZU8Rhzkbk6krMoTkMkKW6PyLKwxLwsb84E1MK1kmUX7D32ttvnSdcyCWgrrn51j3Hekj77J8mzGJDhdMYLCN",
  "key15": "62wK5Uds12nuG8NckYxnqMJrgRhrygoFgwYs2rcy3rKwCfhCQoRQmvBVy34F4AkwbZBQd5Nz8SSZmhJBGLo7M8rJ",
  "key16": "3y2tibp44CiAH7kVSzezDEeEYeA9aSBXnJ2CDuB7fsx8E7ebUpvAyPy2NMhwvW7Z7JGLePcVFbCKxMayGQeaLoFu",
  "key17": "43nfJWHC9yrB7fXRt24nfth6nMWF8gZxofKe5grxcrVweLnwoC72yyMquHxscoRMmNbS35wKNwn4LtoSj6fyWpkk",
  "key18": "iuzQk22MvJHtU1YJJX7NZ3oi4ktPNHgK1setocxC164tNYVtqe8rmGr75R2oHJeHicFNMoaQr65P3TuNV2RP3Xe",
  "key19": "4jSdgdhRFJqNxWLYfwLrUiN4p44UFC2gAHKB9ZdmrFkgfphKaAwEts8u5sLDtQA77GxiiJb347qp4FJJYG58jyuY",
  "key20": "TZiQ5VaMKycF6QixNcQQpg84695TGpTKdBWG9Kz9D294RTHZTEgpPdj5Fp86XpfiNQxRpczX4xBVosvuuk9u2Vd",
  "key21": "5L98YvMAT1k4eSyDcfyK8KWK8NL3q9P7BmzkrxJGJ6Uu68gYW4mvNiYF2E5feUi9Ua4Q7vET4XckJFaV2DTbLJob",
  "key22": "2u24WXUFbT9BwGZ4Te7xaorMt6teoDQ1keLNuwAA7Uvxsyp2Azww3KpHYeNH2KTtogta2nAz1ZoxuH37EnqsKCcs",
  "key23": "3zPpkEd6u3n8VN11dQnbq23sehnUdERKSyAzjxPYGpEz2bcGxvW8A7411TQXitCx2aa3XUUGixrgLBWyHGnPGF7q",
  "key24": "2g1hfo514G4YsHG29LheWtA5b3Hw15HixythHF5afNn3ya4jduaPBKfFyv3j7T5VMaUaAYuzYmiomdJVDGXNsoCq",
  "key25": "32xxSXv47GeHC8iGTaCbsnFtJ1dSgMRjeXd6CwVMxBgg5B8DKSYH1uCcgSKqRgJRJW26PRizj4NRN6VMpJ9YELc1",
  "key26": "Wc1dsKkTZuZUTDA43WspTY87TJphZk7ZATAQpEpFt5sTfr7SSCTCNsSL84kk4G9x6FPuvEM1A2Nt4omU6m3YtSp",
  "key27": "A2Mg4tBFZgdtWJzdCLojJFhU7QXUiag2UAWUx3bTBGRbGB9K9AGaLK1hyBbsf2AoMd8WmD2hWeGh6Xn4WS64LQo",
  "key28": "4qJG7conLRmFpxfJzWPAXZq76ZD94ji6Hsd3QfNgXBq4iNtu3DFmPVdJohzKzYUJqhbv6RGyC6CHps3BWYoYpVto",
  "key29": "4hfszZHpComF8xveQH74MA4fMoD2apX5BJem79fttkPQjPJhdxnUw5Q1NPT6dT68Dx9uCGMjUU54TmadEZEqihZy",
  "key30": "5F3iKnJPfqSMGgEPpyADJ94mQM4aRhsUvtrMC1Z1jY4keuwKh9QQb25CoW8rMEFvaTNYfkWYvwBX4Tv2wNboiact",
  "key31": "MVuFKmdhu1hE7CEzjmfeMhQpYU3eEkBtnvLnGEozeMnXYiU7SdFbDYuf1JjLLhfvnBmdUnFnKD6QArHTYY1xgyv",
  "key32": "4Xyuw3auhpHTqsvULrKQaQs2KKBK45GUMX19VDw2jEVZ1QiNsjhxSLuaJkUNGxQZ7V16Rrp2opnHFzUcbLSs5A4U",
  "key33": "r2FvVNQMWzcazXzLbj47SdhMtzbEb6EP5iBRPbA25SFZcCcWdN8rHZQw1dp8HKR1f3pEnECLVG2LXFe1TjWgYXu",
  "key34": "3thcsJpi2htkuWuTTJ4J6Jvx6yEgQNAVy3uweMaZo48DMqXfguCQWpbKmMMpZFRJyr9XxdDzdmEp1i4AyvpFbU5e",
  "key35": "khssCSXSnzpKSh272RNPMxCFjY8hT4DmBoh7vvjGxdPJkeLZQwwYGSu8d4yo9oCebocPtUpWoYpaa9MPP7Hsw8z",
  "key36": "289y74ADoPxZup6jkG63fJ4o6hE5CGMZBkx89DiKoE9Dv7tRxKv1A7E2d7y3BK32CsJ1CzfL3rmB7TncwzJssQmA",
  "key37": "y3SdeTanxTQiVTcU4a6aJ6CPycV9YtAesWw8C1WtVkPwDPBmUHkZEhFaMJBEPxX1uzDRTqAGbVzSyfjNdZ8RUsW",
  "key38": "44FuKkJ3UHGZUo9NntQRmBRqqp9Vdf8wJaTaEXgkmRXAa955TKigfEVBs3yGAtTM6sAG2ZE6tpKE4edePcazvXSX",
  "key39": "5Xue1wWok51y3A8dThL8SZPpEoXR66UwCfD4QC56WPpXZbjh8PDDCQHT9uDwKKCRtLmvASNck8SeZo9jCaJtCPSP",
  "key40": "4KPZ1W8usuoeXzaTwiTzBYWNWtRX1QpZiXfa7owYTaMhFoofoRr47BDBLZrE3tyStNXVExsrTck2FKphMWSuaj4U",
  "key41": "2ZKggR8x3WSwoTTfWoqoPn331anLDYLRxmoAyPe94Sb2BCuoBP1xRhbiYmgV9XR2q9w76dWzivaDeCki16CXpH3A",
  "key42": "4GyQyhi14SGH3A6cQebrw3UZc5yDmXBLoaZWst5CXe2ukz96cXFuVG1QnfdFG7zwduahRz1kd8QoWkqXjKKdNm6L",
  "key43": "c5ohhf7pCz7Jki49vqZDdd5xeeMf5WXbdC2aHmzCF51S7N38p6Bp9yAAh8MLh1eaB9XwMxXBx88SJ7yVj6deKJy",
  "key44": "43D2SzBM9fPh7r2Dzgx5KCux8tWbJUYgvBpNVEMk8qWMni3119rZ872KUCNRFYzTbMaCeV4s9uydMSRi9B9P47FS",
  "key45": "4EwB85W8mVYo8XjgbheUWWabY9Lt8n1aSXiBm5zeHk5rL9EevdSV8MVjdLLeffM2US4JTgH8cr7L8HSGBos2LxLj",
  "key46": "3rT4Hr2y2adyGaRMZkFGyi53pEdvJyn8wTDbLFTM36BMx8LrpZvwwpZsUK4mAfKbo1UtkrHe5nfhzbrzosCFEm3s"
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
