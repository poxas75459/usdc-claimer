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
    "JEDmBw42jGS2a7jUtgvPUkZvgk9kcs6P1ffLuDTTWDYyGfys99T9Yury1qJpQx4CsNu8xMJYDvoQkmr6YBZ9cZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BuxmVnXPxKAw6PvVxPk73GJqrZW3PHx9q7hjE34MrBmXQBuFqhCJdkdTkobhSpMn83yoaMjnZz29b8AEXWpWLes",
  "key1": "4wWTKrsYX23Qr72ByLFKuPL8ax2hPDaoMykUVJXV357vThtxG3bCY1EY7pTekJk5stJ4TVXoJrZ49U2sZpT8V1Et",
  "key2": "3h96uf6CoukBdE9qxtcu6BLGfghGsddvz2tY2c9GsL6Gy4R5g8jWXu6aKrwAmeEy8992tetrjttaHMdvkW2ZEVGe",
  "key3": "4vqEBhsmdQbb4YUDWv1nZ4EtmpcrGUyjeQhLFfRMNZCmJWB3wKH2sLgJ6E5vHWJEdHc2nhoi9ozTAe1XA8xnGoFh",
  "key4": "4NBsfQRaDzT1bMdGRPYHTxAt9yzMs41RryNMJJDQMW6SjoMWX6NyddxqJd9AQiwNewvKFwvLNxLK9dHV76ZqjANz",
  "key5": "2yh3W7oNRLPYzFqFbYzXBdLi7QyR4Rdbim7QL2cMMSFfr6gVqtjmM4B578JiXf53SGwq1EAMZSiSqWoLRsZLyFe7",
  "key6": "2hu4b6rNrAazGpYxgckiaFuv7m7ABKgWhujTjicFEmvDNdKB9dTQcgj1kcLadQnVa6mm8KzqvJP8NsYZVW89u5K",
  "key7": "2W6f8x7yTQ2ieubsPQjzxmDAVzGjCtiKhpsdsYR7BCJwekmHCGtk7csbJ4vLuwzgG9MTxpaUfVnC1QnM1FmNaSW9",
  "key8": "4C85aC5cUbmH1YmU7k3akD6DQNffeFSqbV6x8sQ9yyUnSWv4VvQQSvLwcPBTfKdrpByAQ2kbEWpdzPNTkVCPDCJs",
  "key9": "3Dhj7BhgFUp62UnocjKemuUbEriYbsuzWBQEKuTeUA2EnCNncKzZ5WmknK3hMxaXhFojLZuGWZXEsdGM2HizJmaK",
  "key10": "4uvHdxNheqjejPv42icvnEVFPyhhLhd3q7snSRVCfU62e32Ypyph7zuSDTE46TSV2uSipjE7tYRWbbqzj6PrZHac",
  "key11": "3pRhMPDcFsPtY1Mgbh4W7aVyDvKcp7fgAB5Qeu9jk797Cn5tfoNSUgB5m4zkTji4ZDvtPyRC1n4LNi2cK78JKhbm",
  "key12": "5NQQGaZoqWys3RERS8JNeRugbDpGfkwR6Ri13ZoMtjDpaCUcvghhS4rvza92WRT2azzxpRqquCu5Wet3pVtNLyCc",
  "key13": "3SaHaErdqcBSwcYLLJkdrVxZ3ZG4Raqz7ejeTdFFQTDSZzc2SCEPyPRkxxEqUexJQt9UMGZUapfkzXQWoGy9qzjm",
  "key14": "hvG4zyZxLhppkob6jd1zsxbYfsAVsUQd7j28hRgPcZy68UkQETj332Tpa1sfV7vhzMhCbYh9h3RXFSaL5oTcwLu",
  "key15": "2ftKnti9BiLJernaqtDyytJkNkFM8pRh72VfB9GFCk71r8y17WK4fcq4CbCw7qSKsTs7S21Y4unEZUK4zwDTtyF1",
  "key16": "3uBAget4QLWTmGVR9vMhbdVALzUb1aeGnrnpYK7sdzg1TYSFCS1s3YCaiHBXMgh13DwSzvsRJdAX3U1jj48vCWqL",
  "key17": "3rm3Kw5zthJtNN4v5kxGr9LyF1tAMeJw8zCWuDgVdhThwoP13Mu4HhcxaD2gTP1F5nGyJiMEcLdv8ngknHCcpkf9",
  "key18": "2kCRo7joVJXjF7ZQTAGhLWGxBwMZ3Dd2nDh43RrW69JadUXh74Bp2HnMErQsRmdPPksPM3QNEHyH8bmb3GyXqFLA",
  "key19": "2bpj1o6kDjXuZPBqYQHsqGvUGCCLwRAxc4ni4FgwmnYEf5qhyb5TFZkY1Tow9FiDZVeJwF1ETfgifig8xdXTiQ57",
  "key20": "2zSw9ui3paEr2WXdjen2mNpZd5EC7H5H5qPqGvX3C5ujTZAF1fdJLtBYtKZLhbctmNGHs7gBmj2M8Ui815KoXcFh",
  "key21": "C7qx3i1kaLqqpUcedShCuFTSs9y6WfuqHQ4XinqaMVdQCe9W99J2dHPTYFNanXFYNLKoDpGNrHqeNf6SNW7Bu58",
  "key22": "qcvuwYyWwiamCLJ6DBiWiYc3FARSo7ifS4RiwxEgsWVYTiWrm8xEyPhHuqtCi7amfwACkG2c1jwQfUweG5VfDsT",
  "key23": "5dt72dnvhUDbXaXkswXDxJMpRZW5h9rdvM7q9fzrNt2TTeShLXxTP8pp5WFKuzm6Zn4AVjgRQpJauPm2XWWkw8iZ",
  "key24": "2B2JdyRjFQPkxmUiebCc9gfcoMKtKacbXwEYAu8mLbxiCHyvhhAk4ufdh4r92Csrc4zTVKscWZz9d84DrfbHRSKb",
  "key25": "pqZGVVG6c6FXGfrKXFTE3FGLGbekXVTzQ4cTuaHRai4MDNBTj167mjX2UhvYG6SgRjcMdz3JP9iJQQgsdxXf7LC"
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
