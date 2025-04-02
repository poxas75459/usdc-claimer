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
    "c4NYSH9AANtJM7GwP1oRLyCJSnEzMjsgEm2xdRt2WPxD5DBwjGWbomuSmXih4P8ZP7XfLtP4NwmpYs1wmfpzrtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hNCUTqPUfAXsRyi5wB3grovkTRDCvRYHEZ99ZoCYDs912hWNXZGLnP6FVh4UWyLD8dZrt6y2R85o7odQgygoohN",
  "key1": "4g77Zc7ofgwqNbvYK67tLDgvgpm1zwkuzLpCNok7dsz1hA5AgGeKZHnwDdMADa3bWQLkTFfphwLLGKinqFCmGXnn",
  "key2": "52kiEYqnDnUDPfz2ShYLpMzs8JtGK6vArtwovBZH4QbLgEQaJc1bCBWoNyAFiqHkZNqW5XH9Q44JEEjMYuoFZunn",
  "key3": "2rU4WFtrH6Q82RQR3sCUMyxHRajSKp9J2c4NpRaoujTUVBaMc8QJ8oeQebSqYFhirm6Wj62BoBLStVwqs6QeSBmw",
  "key4": "2jyH1sSFPYRUMzpTYsgSVVdqYh3TU3TVyqX55Mz8n44QU7wXC8CmwmpP3NdsP3UVoUXxruNqM4kta4HFi8vnBfdo",
  "key5": "BaP7hbGPaawSCiw7rjw7w7pQK9PDAbpVNTciKNLkfQuDPvUAkm1k79BGctRs3jjTBbdBnUHNoHK85kJaEC8bXnT",
  "key6": "4tb6LpV5WD5eGc8cvk7nhhQHWv2zSYhpWrFUQaUu7hwFVKco4eGVvpxLVGKgz3maUUTiRdSa2k4AJi7xHeFC4T1M",
  "key7": "5e1F8DWsmtYM1uE82qQPegzyuHm8TRJ3y2CMKFJrUMnVPn9YJaqHiJwD4ntsAq9gA5L6fkJx1nG3U6m1xkrpUssv",
  "key8": "3shC9wfsJYcaLKrUy2R824NiHP9LfFzuV3dx4ztqanVenuN9wcEutFKisZ5JYidtjYMPkGLstoeWVqNbZxFnckrP",
  "key9": "ULQZqUSJpi8mBxsJF4kyxoJrowTqA21mZD1CEt8KWNnpaPNune86CEh5bbeTwpvu2ucaFKJcnxdG1WbWYX4XBvd",
  "key10": "59jgUBfViWnNYGosBJgd1Pem1FRma6PYiV7Lupv5QpSvZzSK1FERAhLcdfES5nNQ5SJfYQ7evA7RxVjiu8wcbHEo",
  "key11": "38zvjzrfeasUQbFniLMTqnYiRuML97R6YyL3xSYK7eHykMxJKKGyQDQMfBQ5VkKieM3ymFSa1uWnXBKp3XZ9fbE4",
  "key12": "2VKXzFqtreRnzXZPSygiaLT8DxKYE3kTnEZ4VJJsxMSDmw8Tc9nM9Xsx7Fa41jJrXpVEmdHuDS76dXDhBCUeL5Qg",
  "key13": "5TveyJfSgKHjgAMehjVid4fG4iomLbCPwADc5yeHjNwXo6EMaQjMiSk5gUs1WAb6wQRQh7HRnL6Gr5eEzwrHkftv",
  "key14": "65aNgXxbt5FRZkXE8evCURn9Dk9YxroqHe9AYJQvevswVmP14z2f4YrJkchyvQPK14zAxgzLSasiwznUHZiuQmQU",
  "key15": "9tpY8SMrpPiLd7GfPGtCy2vKLDRVhF8SWx413JF4Ys3mFL4dU1csDt53S9ic9SdipCA5PawpxcUQeDEN7y4WbGh",
  "key16": "3b9FVFuKnCyWhdP5Vo2EqjnVjejzTmT2BSyToFQRgG7FeYWPfQMJASdnMragedRzPaTWPH777MGCbhhEgZJZDQQJ",
  "key17": "2DFm51PVHQ381GTCqE7gL2CAb3DUjYr3EybJhgoMY1ekRCV5VNdxTNcHFa175KAiQfDR6ngC5kN2nzYprBcAxw32",
  "key18": "GXaLySp9v7wAT8w4FqH9ASPh3GaEnH12mEha2bMHJ26Z6w9BwoWbx7H6Z3tys77zy2uBneKfRCSKL7TwdGF3qQf",
  "key19": "QMnJQLdSLaP8YjLrsCB35AfC8XMNyFkMu17PnojvkD4nmyjVnjCzTqBAPP3T4rCC9kGaxnmwsbhVGtSVD5BT2pd",
  "key20": "4xP84GykXjFSS8nKuWGnvuxnJXVvQNNUJB55QNSixBK2GLr133fvJVujZKrApbGQNvC6GpUuP726bvch45WoUUm8",
  "key21": "4ufMwReLSsKmQt6saPLB1SpWJx23pCzBGuAmJ87ygKCNm5qS194BZ6KNpNRUkipKKNBJ4CtZvP6pLHhSGF3h7TGc",
  "key22": "5J1Tge4jArEsK7i474ytKHAFDN13iWEyjbgjjSd7wCh5XhXg9LYBi132v8rVkQcoBB31HhkMmgiv1ApsheHLo193",
  "key23": "YP8HWQzmfpjwfcM6Q2Wfa3kc3VsE72KZKdzS2RxGBFH2Lvz2NsM8Mqk29aoUBazQnVYk6BsnzprHi1YNXQ6V3BU",
  "key24": "3c1Lv2ifLbKkELKBhxWyxkfuCDYNZcitZ6ajagkMBB1aKSdXydoek59AZkjiKtF1YV7aajCMp9q3SuBmbk5XXcfu",
  "key25": "4FcB5tnAbXZQVyXPBMJ71ktKof3SxAqWcVC6JRdwDy6PzLbGZZ8YNbY5KMjZ5CcUFdpbcTnzFyeg3RKLm7pdL3QP",
  "key26": "3hk1sssHQFTEHmCv7A4y3PfxjJ8rSMnYoswMVwmN5B4UwQRmx2VTsLnntZLdiLSsxQd3tMasGcvZpjn8gTW9TM9R",
  "key27": "85NxXvmB7cMcSXUtmi5QpuXMs8anTyWL5bdFChuZfLVNQKaRFVyEeofQYojUSyy49CBdMq4fTgCQiN7SZpnQroE",
  "key28": "5fi9SSSijFKLeRGTXQKcHpzaucFFXzjVy47fbU6MqziFConQSw7akUUdSzjRk9rMiix3F1KHqMaHGHTfe9kbgrbd",
  "key29": "3S1AJPSLWrT782QRFB8VJJ8aZjAjoRHGiKwGfrfw9PAY3XwvCA2FSShUAZxSEmsnCQimhortMNsAVy2vNdvFteTx",
  "key30": "5VFU2K6GZNFMA7TuEFHRYs12QX13TsdG24pHuUVYLmiyCq4ZhHpmmHmq4e4JEGUM13xyGeVxc1WScxWshi5Y9tdK",
  "key31": "5p5jp2TsgZtL8PepND8j7LWSCdvoxz33t47o5cfSxu9KJpardcHWjRvFZdsjaBbuXgLRHNSeUMe5Sc3Rp2vg33HX",
  "key32": "4RtSW6JcYiS7MRmrSyGmqRd9yNhExmaZdH6tT5k5nXnB6JHQSQUC237iEwRLqYHcY1yDnZerJQ9944jb3j63oqBr",
  "key33": "27SFEWRLmkvyVRwhTEteGQvrSoZBPjkumWM8EAPVFhtWAUoypX93YCQqzr27szmj1NXXbkfVSEfq9PbaFza8wMkc",
  "key34": "47iRVjPbd3ZcT2PLxVp6w4bHLPf7NViLqtqeExTdGVXu6kf86tCw6iwYXqF6YTae91CuBPX6xbResv116GN8cQCV",
  "key35": "4nfpFNMDVd3pZsK5K7Q5z65Vtc8eAcbYwwmjUDuPsXikXoTyQmVLFDS5PtPcJ49AA2o64ELzaX76wkgjq8cfAeaT",
  "key36": "3zME4oaZHhNXrgBPtPfHv7KeA6HmNZ2BAR7C6HayudwZQMH2hjJrchnKySphCUfNkNiMRReukvn99toBh8H4QATG",
  "key37": "4HWyg2cqNjySbBGvCHaVKy4bduAashbrZS7iRwjExN83oJR4c35ixtPxeqX11K6VfHijKmtgKNyw7cPELYsjWfqf",
  "key38": "2tvrMQds78nZjLWFLw9tKBzBFQ6XUA39atX3xRTVxbmH1XrFDysXwxJLV1noCfyGxEGGzwpBFDYxSsNpNcyQtpGQ",
  "key39": "4SJKqtC1SLRfSr6boTj2w4vn2HY7H3ZpuoUZjxSDAzEcqstyHz694bHtEEi5CDkzEDEVZiqa3xvqhjxFYQCMit6X",
  "key40": "9CEgcbheeG9tPpnVV3JN9bWa4tFFNqGGvQ9KB9gQisjgxNRciKbFdpQrSGkvdurr9yYSMQjyHxXpnrpM17twLvW",
  "key41": "3w4sShe8oLwrPpQLxUeSub1tyUvRTysJLfFDRoYdKfVvYvUcF3iuZJFi8onV6feMWJ5mYcBY1HS1eT1xAmqgfquB",
  "key42": "CxjELMpTmnxPhySciiou3DQ6ssyi6ZgDmKVRhBwFWdvecg7xjWnrmTjPHSfuaTfyEFataMZG7qJfFN91B6SGsmy"
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
