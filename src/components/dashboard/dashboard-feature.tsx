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
    "2Qn1qfQZf8MHEZaGSykrTaz3Qbt9K2A3nsgh2yHL4tyR163VTDEotNL2wa4ABCfsG8gpvyfN9Yu3aHokP3Vfhg3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kU2HqfbByAte66Fvr5HcT6fDMnDrfDMADVkqL5Vq1Tgf6Rgr3SV8L2ifVrD49UK6py5B9PNq4Ca3X1D1MtJhAgd",
  "key1": "2BuHTn9SM83bvG742pi7viEX1oytBNVUKDYa6ue1SSMmkFHLvvzS92jDXwj17CnhXjGdJZpxNuWv1CMFAghGikQP",
  "key2": "5XLcd9LHkcsPfGv6FxoeZKwd3oFie3jXJEzSoZnmk2evf4bwv9GChWtR8FmyEFFuQjtYNpseMPq1wDt1n44sjEoc",
  "key3": "5LT9roN6hrwPKLmY4Qz9eWi8gqgRx1399TV3AUoi4g5xu3hgFtXkMB48rPCrxgX764EPskMun23qeUNYR3sz9LtS",
  "key4": "5zpSsvQjByGsKdroYKaqNS96Ykz3j6hU3A5onGSEjRmMFYUVBG9V8C9BLKBW7QXzGradxJBiRHFckVriJTUiVXzk",
  "key5": "4ddRJXVF1HoDz8Mr1xiak1EgMEQMLAsrPtU8kW4fNTA8HtzNjqFM1agTkY5HXCHBntwUi7aNQWqAGqTk4mESj79d",
  "key6": "4epTYKEcjq4iyK8iKmzb58tjHgdDALTckA79aFwXz6EbEApZMGQjMkSGKDp66hg2Bmf8hQ45VBLHgkSPPcVdQ4qW",
  "key7": "2gozswUvcSfXn4gDaAc3QyhHZFdq3Wm5SPDyBj3bYrg5JBc99rAtciXR6AKR8DNwXCDRTUqSs84oyV1j73ZuqbQX",
  "key8": "4JSmf95q1QGZRDKmpE2WivcvSJcUqMkrYJzX7zJYMMpQcsJUE5DeJSPHYGCy35YEarAdVadT6MEz32oD4ganJn9o",
  "key9": "w7bckFXYQ1eusLqMo7QigUkWx8jWK5QxKXD6v6CqY7nvzPRTr41GWmk9NsnyrJuVfpyStjLZWxA2FUWboz1xSrk",
  "key10": "5JgaSUpKF6bVwJ4hmWd2ip5NJVwnUBC9dWkBqw7XnbSxUEsK1FEdKDJ7mo9ibnXhYF7h8acF3mjTLfpjiZkiEt1F",
  "key11": "UEjiSJSbAympUf3VcPrTyZDjqW1QMpbcH9ixULMAHYMY7eu8cKQdug4ptT69hZvWrC5iYm4QH352kM5uT7h2kbd",
  "key12": "4ptHr4cXRch7BJ4b7BFKpzDBU7wk8bQsAQUs3r4yGRbcud4mKacz346Hw2442VMRTZe7RiMu9pAksk8cK3QxCZ3b",
  "key13": "5yN8DWvP3RcTHvPuaQMJuv3pUZEtxW1bytu2DFGjqYywmA5LDH4VbE3fEVW7ciAiEx5geaSUksoD7GxR3agAaa4X",
  "key14": "YQ983GdK13MS4pvtJ6qrvtJttQQq74DB3BmTcFmA8Yjp8BvJVjYgMgzFWjvpybhco33rRkckAbTxaeP6kx4LE1h",
  "key15": "gU1pcUTzwwjKaH2rs1pqU84yeWsoUwhaESWdmXUfM46DzJ7z58HvuvgJxmtpx3RrhbbGrHFBZMqw8i9iU2CwFZs",
  "key16": "2cjZrrEbzXjwVqS8L5Ku3E8amP7WLVys21RxjSQG1rrrwLw9PjvasnmCga1qMwQGytm9ANtGaHDFRcdWUKQViFQU",
  "key17": "CmWtwbWrgEmcgnitRdUZdtL6bFubsRJdURdjafE8ZdDvwk5q7e8vvqS85LKjcQ9tsh13D2bdY5Ms8Fo1izMokbj",
  "key18": "5oFoCiXpKAdsNeCNPkV1LJjqP6RrAakpQRtEnziRxF25WEzLjtjbjc9jthrdDZXrvAc9GEirWeSQg6TAdED1JKyQ",
  "key19": "4t5p3mP3HAX1N38vnGCX51SHNDFwisvpUUFa36W27fHDhMCvC9V1BDaxUDa1jSjSiZrdqbCFB1A9j6dedUpGHscX",
  "key20": "4h2gSbuDcfYVuUS757pN4akkGJTVkDnqwVzo8vA2gAsuc5TnZp3TCMbBiP7EZHJaLdE4YRVrSCCYpWEmpzZZMuEz",
  "key21": "5bUtmJSjnVK3B2VVQmugZSbKy66JSHPrdCxAA2khF7oeRzV3kRVVz82SQNh396tAvCm9HgWkd468EYMDFjhNrN1X",
  "key22": "3Xd9Q2Ue1VsJkZNag6GV1BT9jSP6nAKSX4voqL4ueEowf74o1kcE6vceEJddGKL7SXhfy3bjerFAJ69CZYLFJ8Ci",
  "key23": "U4FfYpiCrbPwafeyQdYAzdqkGhsgo67FXzdNX1psByUDPPCWzzMBH2n1WMqnRdZNLx6oKXYaUL7gz9oMggz4UFP",
  "key24": "4vY3YNCzyVBazyvBJR35TXa66taU5qdQe31RpYNH3QjMjRgeSUHNHDudaF7RSKMYWgEztDSTzPbPKh7pWx5D7aLM",
  "key25": "45cwqaqa77Z5UBod2w8gBdmPEEnZReKvfuV2yB4CJnDwNRzJqQTDtpEqy8ZQNmVCzv56bMNCyfsNTKW6F5CMwrcg",
  "key26": "zpkycDeGGEe8hLsdJcDUgwiam9D8oGoMN9Ztq1DGAjTFmJSMjABbHQj7dWksVB7cuBB1tgFZkdUpYX841Q5hgX7",
  "key27": "PFF9J9TwWem5ccz1uWp7vWFhfH4LbiT8fEKbj6nvECRrF8YWMEAuvzR2CusXwScmB3m4NEzPoRnbygRhSravf5F",
  "key28": "4U4fuYC74p5e2yrzwxqw3WA8kddvJWCsYmvyn5WCSEfmo2Hh1mBUNYjTpNE8FQtfTRBJ4kDGawoCSvFds1iR6F9W",
  "key29": "XALa9th3sDF4NTZYbGBxPEHWARq9ZXPvfX3Ygk7Q8RKXjfsW4iyZvWeZcuGXRFNCmfZjuNvXymozT64Es8oe2V2",
  "key30": "5pjADdw2ktr8F7uZTo2xzosE6uecie1Q6vF1NrKnpCy3H5DdHPqvsZKSbMBAgyuBoorLi7vYSDN6FjiC1xhKYCxw",
  "key31": "2NtRJCW6G2G39c4svyHwMxcxbSH8uLfuDA4pFup8LcakYu1nnSJxuvkBNKDh1dzSu9Qoz3GaRRxjVHPM3ugK3WBs"
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
