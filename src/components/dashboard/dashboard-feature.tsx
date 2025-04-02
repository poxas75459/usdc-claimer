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
    "2n2YtgpW3fzaZLVxKBs3jHT4uYvVqdxtpsr7xmsb69hePZkVgwgReDDWhvwwyhPixNckWcp1ZnmASSSS566x7MXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QSZsuXYKm1NrtoCYyDQNC8wNxYHP8mWMBXLVozBpKTaghtW3oJgxVMEqmUKAN5fkUiKotJs3oUVkWtb3zsdAvLF",
  "key1": "3k4xZn7eQRFJ47pnu8iVaYWdTkvPemp5Y4fsiadR6AcGyyUoY69qM1ApGM5EbEZEot39abVJAZhnGojbXMuTYfi8",
  "key2": "2rTQ5ywCSyJvqGo9mAeas74cRQiRvABSafukJgg1Qrq9NADFDd4mWShnYj3JzX2gwKBTnPYWb8254yCnEthanncX",
  "key3": "5nYFjeYQdQjyVYY35E1kuTRmbpgpGonNAbyKSd1nc9cDSQB3uN2ShWR8geYTsRPZ9LxwerJ83pkdU5dkTaKvNw9W",
  "key4": "2R9rXeD2ByzHdUpfT52ZeZ5FbFPEVkKm3Rk16ggTBV4A1NrJY6MpmdpD71eBKoiW7wimdPPRmu8swFFa5R4g1Ndq",
  "key5": "2yfZpaicxpgA3NzcXFzwYKzV7mqa4T9Vd4NvqhoiU3ZCqzcVoh7fVDras1LPEofGUC2dfPB3HCcNM2kWfwxDj9E7",
  "key6": "3kesCwipZ5BC9aWjWVbaJHUryU3h3sPUvVFf79mRCQLfvSJHFU9tCFASnGS2DSPasbkssnh2xG4uFgvNWNvejMkc",
  "key7": "5k5f8uXEUonN9qjgauMnwJgeibsKT72mXnH4tRAD8Zeiu8RURxYsCr1tyUUgmkivaPMzRXfmLXc18akcmW4zbu4",
  "key8": "4uNYEKrKLyr9o6czVBWPzkF8VSm94XjEWwRnZGXPaZCds8t7p89yRVgaYQF9ZtyUHNxrK2Up3xCQi8AcuykH2BeY",
  "key9": "4WiFgtLk8A3Q3C2eSMjTv2KCLw4Ytf56yqhcNgyBAdTzVouuG4cXe74AUcEfLvMgbPtFqDJest8yA6VQpzwjz2qd",
  "key10": "47Tqh9nocuL3VRgAqqpht5AvdFjiZDLHLwsoTJNgVd4dPdYUS7Q6eC5pT9WKhhNGdyfHZvLxFBqaH3SZynNp6tVP",
  "key11": "2RWMkoc8Go2UEmteURyeFMchujiixHpWqvErREhLR3yxFCfbM26BRtGFBykQH56gzM29xUXJRmy4giytK6iBY1HL",
  "key12": "3BYVVd3kJFWgMfw9F2kcSSLpyobDz1uCATdRgtQq9qfVqWPYSsmiUGmAhoaxeVqxHWaMyTu2gjLZ8twxuMYUfYPY",
  "key13": "4S4NUtXdqcXNuLFDXs6g1hn5LgovgLHADCvFBkBUkHvk96M1x8BhiLMDYTtX3fggAFgq3qXrP9L2cujCaCfnNdrD",
  "key14": "4z3oEZfaiUhoYqA1fQooXHEXN1GiSsSBDup1J8FHn1KnytYR2Gp9HNT7y3dfAnNkfQvrFtWsotBNsae4rUkfkufC",
  "key15": "3FouReN1wi5owBbqmLn4WcVQMcmzn24H1XPX4fatySqgosYK76rBfe621ZgQpQaBFxQP9mUGstSiEwPJK4DLQ16L",
  "key16": "kKAwnGUsHJeVkfBtEM7eQvCLuV6gVMJR9GkxyQCLP16u9QhxreK5xGQwzFzGfmGsg2EaeLJacXphK6EJQVAnJ8k",
  "key17": "44VFxNhAbqNGmpDjJKjrtdiJuVirWgbWw9PD3d3NP6Qtm7EttH81ezsREZYzi66dkFPeAe5tY4aAZELVzXHj8gBz",
  "key18": "4UZXEUmYkuABfn2zJwvmBXkkkGc49ieaZY6FbKJ81FtVqkstYspn8QBVoaRvUJoCJRwMfPF3dEHxStHVjrcV2EtN",
  "key19": "2fGP3GQzjs9d4XY2jWFvoWniitCWCmGrQjJY3VbaGPc1pq98D9dJVB5cF9J5HWkap41kmTry41sjEAwBTYAMxhvC",
  "key20": "2VWMgC6SxpdUTJb28kBrwyqgoPGx8dQaNwmVNqYhp8SM7DLBEpENnGNJeMbhm5TxFGrpvH5hmvX3WDpZRoJ9gkcm",
  "key21": "23Jt9QerpuF8wtG5haYTs6UZizzKrmTuAkXVDbVrunrLHzompxuE6RsUh9t1ouqAbkF1aXsZ5RaJvPwetjSZ22kD",
  "key22": "4De7dVSp3musHixsvokZ5TpBwnQagZnDoVWVyUWdzUyKGKwULhBatha5xPDcN4axBDF9CbiTScGgojUq4VxMmXMt",
  "key23": "4TbLiPMqr3n2wW6YkPAFgj61HAEw9DtA8seZr2dMjUiN2kpwbmofJjs5LmnWpyJ8LgPibyT1LAS7tBk7RTtLitfK",
  "key24": "4vvxRd1CpMuMryL3RpjyH77od7Fq9Q1Wouk67osMhSd5UX5V3yA5HrYv3DgKs8551rhYfSxve8Gema46THfKBLs3",
  "key25": "5BDxtBZ9jUkQn9xGzqbsyhfiknoUcncogkywuRX4WkrioUFmz4iK75ofLJACsDJkLzJZrhW79rxTKbeWf3bFrKdm",
  "key26": "39ZwYYVLgkGRDgSAVDtwRCUVSHgPFCbCdc9fKDQmjg3emyb2gRjgBDYf4rG5oBrwatK5CBS8Nw1e4k4weincoKKN",
  "key27": "4gDLGxhKVc3PwgxPqnXCVccgmzhu3TNwpBVsjWeJmwHGUTq8dMdatLLeY9isDDDMMejKuXvRkEcvWGU2JW6tVN2J",
  "key28": "4zvCjjGXcv1btqiMZm1SK77oAudibjPQ9AeMKotyNp4ML84NX9KCUCqKmubfziwRfuHgLx9KYPTfYPLB4eyaEbvJ",
  "key29": "2G5swHtyGZ8MdFbwndAvgLX1JZHJvTJ7WRQqjYDLgSwxJ2SUYSzSAeZSPadKKMF4QJhQjbEfHcdQhSxso5rJGH8f",
  "key30": "4eDtzJzTshWQmdJcfeWbvzWL4odEkRDTXS6ZGSYBQiRLnUGBvQ1jHjthRbugW9sqDKi4FrRyeZZreFr58vfSMxuz",
  "key31": "3pyBVqg2LFba5ezsq61g7AFMoxGuwu49pogKoy4QdbxcqrGeUeXjphSNRvW34Xss44Y5xVHtwhQXkt1kCmiiBxFZ",
  "key32": "67oNnwbPStcAFs9waSxYHLNYyVErEHHkhwvQo1BMqCBHYrmGJp1QVreDFvFb3mEW4vHjnHJ4rfmVWtnfuuXWBZfA",
  "key33": "3BtiUdLH2hwpsi86dcBnh7ZpuiP9FkQN3Uae9C4DYnrdNKqK58HSWJ7LK426RbufmaHGCtRdqAsY31LjY8Yz9bMJ",
  "key34": "3MLhCPBSBnZKxGEr9HqEiA4GwYSVZk1HgKJtDGCCPCUajF4mtsBEJTjL97eRg4pkJLJ1me3CWbrB5wyuBDT29gYH",
  "key35": "2yYDTY4hihbJt9RR33dYr4nzBqQTwjF8wXbqgKnT7ANgybaXpouycXNCS5gzUZsmmB1GxN15n7m3E2EtLCTN6xPA",
  "key36": "34dN7oVnTJxsqQ2fmfG8qBQnYTc3WzvjTyrZafdUELbRvFsdMqXoYCG2D17nb8qLC61kvYUuKMtueDwSJLAVZFKp",
  "key37": "4nTiJsNRmdJLwoBd1pUvhCtNrBAkrWcKJ5ncbkjTBdGeJxhjENYZwQYzoZg5YBvD2kip29cLBgBJHxkUNbjcCpe8",
  "key38": "2uvAuHaABiM5yjhm5hPtSe5BkX5kQSf1Y43k6HRphQGS6sm55C1c1RQ4tV2vX7T9A8pMShhcX7Zb6EhfJVjePTDS"
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
