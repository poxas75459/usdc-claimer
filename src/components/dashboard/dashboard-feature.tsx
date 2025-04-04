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
    "5onBkgD4vSTBpCphszS2R1SWZxaEkaR5P2Wh2qPtUCLukFbWVDWToV4zubpX1YyrHvDv4XS4njLsVhyPXVTJPr31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Sa5LRSvvNNkgs19EunjMk9DRmTx19QxBucbiv2gyQNqPr2ibJYtg1mu95vXVXtE7npoz8ba32yjJRPVzMueBHt",
  "key1": "ZSGbaF7webRzPEjFxu1yegLn8WmnP4k5aZk9ZFFFxnccYadNxotpQCuZhBcW5oCZdUmMTYQTBy1ARwtDMXzup89",
  "key2": "5Luj8ETxRwKV9b4AyY3mKS6tXgwhK3aGFzcgg3zwUdrxrkDzyr6vnJz1w57bdbTPLHW4rtqCymyqBCqba7iqJbTT",
  "key3": "419LfVmWHtKcwJ9VHPzMhF6QCUrXoBhX99pCN5twFTqZhofRzuwb9cABVveAfah9EubfrLow84v49zJY4fP8T651",
  "key4": "dq3AZFcAt1aPoVFjfET4Xzm9pGJsF6jiie6jMbaS8omMm7HYfStJCknb5DaJKDUysWyR1bWvcM2dEYgiNHm73Ro",
  "key5": "58BiYTcnEdqQuXUYY8ysvb6RrdYxsyjbx1ysngaRMKgB1pptNk5fnmkrZjcbzuMe3VoT8ec691s4H2w88z2P3Y9D",
  "key6": "2hMERvJS6a4R4n8BXbcg5Zy8wzvhjiRvEgP7rhRZUJZncEq23Qasv63oLJrmz7DMJYiZHuepecwfLYFNTSVU1NPX",
  "key7": "KP78TqEoXbyCWdBnxHSyeD5q62RwEuJ5vtvQnBXC8UFoko8LjjrYfe5QC2WritDow35gdkm9fKiG4k3XXxwHJHQ",
  "key8": "41fJc57iEEh8ybmHjcR3VeCX9yvnivHwzNzWPJYVZUEXK3MZuVPmmTCrmRRQy4XgEPCsEAMpwbkK6Stwg1LvLHuf",
  "key9": "4EZiysQ4hN2XCwf9ojo54QGc1fE7Yh5ywPL8CG9TM165fs5UZ5C4T8bmyrbgCHw3KSUB2zRdrZ3K9e7PCyJk1S7x",
  "key10": "3z1sKEbBK6KWFPHZ19qFMxxR5jgCCco3NBKoZhQk8jufGcQRKhvMgA45FJopAcKDujKV9peQg7gEs6Vqhsm8bsj7",
  "key11": "t7HLpLYDAygsF9DRvj4HkJC6CWHy79FXsquRcQnNvKSgaCG7vD15jqXHZv26RKFStk72WoDGFxs9PJpeVWcw5qX",
  "key12": "3v9MeFvuUUB8f2YEd1RzCJ87q6TuZZZxjyDcwhkBGGr3iFQHM1nLZCne4gNnqx33c1JiDiV9XkXK3D5e8Kh94Vyb",
  "key13": "578aW9S93JAQKvMKHbejVL5yfx5VzSfcSQDq7FouLSKT28afqsdN3rQEEMbyReVZLy3mF26QWUEKM3KxA2qqBHe4",
  "key14": "4MdycTQXsQNLGWXzAGGW8d8z2SpGLYEh4P1ai6AQS785jyEWWfiyGsPqLna2jfXmHERWNFK6zQXj5Z1Xr86FRf8n",
  "key15": "YGrk3fX16God5okN3Ukg9QM288yYe4H7URRrVEw4VxH5yVbY8chs669zVWmL5yFt6cUrpqjkRgPvhhr8zRrCZTj",
  "key16": "4YZizryREHYrAAVjkjEadnSpWZFJspHPG4s1gzphAPA6h3W11TGAAF8od1RQi46KovyhvfBspzujbQvAy34eRwTQ",
  "key17": "Jzkz5ubKdhokCRfFQhavoZVvK9EhPJh1d94u6WANVDYW1qVi4pe4Zi2tht8Xhu2Pn27q8X7QaxoKvC3xihpXPoi",
  "key18": "29PFKCXaemVmj2r1Pug6B1dmcUrbqEnLG1KEYUDqJXZkgoSVis7ksFr3zJTV2Ep8r9ME9eo7pjtt7chfKHMjcaBm",
  "key19": "4vxV5bcU52fntKFps2NASzDr7fNBL4TXx1kYHTqiLuPZVKiWDu1aWs5rmA1VS43o2deYJ4fgG73ZtWae5QehP6SY",
  "key20": "5hHoNyCsAr4KdDMq38w2DpHWNoitvkAVatwFDa1nTER3PWEZvDyyHNQTzcKZWotYLhfNrhRBZGYB9s4SCrQZWECp",
  "key21": "5Bw9cC4Xguc1orUacvVHYnCtoEEvEpqM2nUi2TBh8nz9o9mfSq9P34vteie2kwkry4dX52e2HtzRKRg5wR2TWstn",
  "key22": "3CTMUv5sXaXfYNLgk8CsH83W7s5burzdxZjcEKCmqiJcUxfkJDgxFGRLcEi7vNh22gSSPYBRXPHpyHTYip9U3SNz",
  "key23": "5Xi9MLoWMmcqn5KmL33nx4zUDhJXCqed4ZBozjMN4SZ7KnNmr4Bg3WoHDEZRHm9RpQ7SidVhmEGpWFR2EgqpMna9",
  "key24": "M9BYSoPfug7ZStBKTEAN81cDBZwQ6o6LXpxGovLS84592R4tTyeq2hBXMPm9PcUpxoQVeykHTf2H9AdzKB6NUee",
  "key25": "62xCfueSAZcC1oFzWVTeudjxcTzkTbjt6w3joPAbZdw2mzjocL7cjyscUHNcq23QRiyB3PPWMR5UeWMYxsJq8vM7",
  "key26": "oK773ERHRLMrVqRihPpaqRngd9GRJZLAi93A4QuhWCAJ3LHUCWMMH78j8jWswLcGv44vtzw8bu3Qut5xcRYLiQw"
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
