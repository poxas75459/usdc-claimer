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
    "3Nt43icGuS3MvBSms7XAGspfw5ie7ybSRD27iUB63J6o6skCBj1tiTvpHYJgkJmnvCe7zJqDV6UTVQw28RwfFFQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k5XNzGvfAG2x3Senv934JBZhf86EarSuddd25qLutnEB6HcMmSLYUzyTqT8NSwupZecdFQKkdRNeHz94TBnEVjR",
  "key1": "4kMvMJeEECEVpYgnG5YzdhHnhzAMNEVe2F2VktnRRegxME8GCbFvtzZ4DejT58KhDwwENDXW5s6exEQNB5YisAaq",
  "key2": "5fVwTuARFGHYUUeqvcZhekX95uygeWumMEaBsvn3ZjTwR8VJgmHvn5XwLEXR5tkXjLfVEYPLCggV7yfmS3hZj1Ni",
  "key3": "3G24AgqbDp3L9ZRCqatrAHWzVYvdu9uaisxbTBXjfF3nzErZcLZ6udB2i8JvFYqTiBxgAsjQhE7QG5ww7B11YSxi",
  "key4": "2KKb1JfoaczXujG1xmRuzEXejMHyKzi3FjyXkhB8WCSNCvB5HwneRQnLGdBkbhWpfrig8YZRCtQ8BbST3n4wU9Ya",
  "key5": "wzqZSqmHYRm34TAUmdEhmg6Jg2krWSv4vEnCFxbe9y91MHGymCnVJpuVWAoseyh7Z2uhbvQVdmSN3LCvTWGjrMU",
  "key6": "5VtsehV6edF2NKHjD3xSMpVj9NaiBifQeFqDXB7WU6eLVRS2Q6pHiGUhcMFBz4GLo8vYtdVayYVLRy6DcsKB1883",
  "key7": "YgD75JX4HZ9sChdTKCXTUAemsopCCgLWkdWVYn97NW7bJPFgWQ6kHy8CbYZcCtemY537SorG3eZYLxjUiupDfJ7",
  "key8": "t48ENiagzPidPCdaBPvLBiy4HLk3SD5VxGbEVBqhMeG2uqfcBcQfF1D2UEoRiqKgofPxYKWjmVQvLfBnLLWuowZ",
  "key9": "4V9AfQxvgH1UW6yLqrxe7XkMFrhVdXoNp6iHEjBRShY8GyAXvQX1pp4iiCP5j4dN6T5AVseA2W94YEaDnnU8ZiK5",
  "key10": "53JHuLvFewviXNDLrAjVBx2CbSfPG3Vu61YgyRXGq6GtMjJpEKXriMorFCvszuAnN5KrMYdPo24mTZAz8AmqdWkv",
  "key11": "2tTUSoCdjvHkZ2eNceL6sBGWCaYkJWxxUir3dk1CTaWkuAaF68zfa6M2sncVPvVQhKi3stxphr73DGW5GpAix9SX",
  "key12": "5kWQnY758ahHkaLhTP84VXpTkzK64jA2M1xgnqtHLXzayNW1JeJ3ttsj42pfM7HPAkByGqLn7PLg79Toa22SxhZH",
  "key13": "wTGdAMqBJtJaMuF5YKPogFPHX4JKiDX9o9jUUo7hGFZ4MCrrrWnTiWhA2K5kcjhqKnAvNzLwBwYW6cy54CkVn9s",
  "key14": "3PLdm2qhFc2DHgGNzByDZ4xFmShwfByjpT7ys74LvNaNSyYd71op8wGoudCQ3xwbrFNWwZkrYfptzKnWRSNdAw4e",
  "key15": "4SSzHCfXzxhuHbs6RP6daURNfAUAAxiL4Hv5TJg9eBY5jfGHuv98J4VumCaKviGL7vubBnW9EsixpT16PRBff46Z",
  "key16": "63WDf7PjHjm88QaDdWYCgY5mY7XVh9ftipgUoYZ8UtS258GU2dLg9UYpBMUQ65TLziFgiMfUduxnfqc6nt1BixEB",
  "key17": "3TT7Tceo11VoRSoLPrZYgPoQEAnSenQNWkT5ffcqe3i1bqnzCJSZKPakWXmM4Bbyn9FUmM8MtrvXidcrKHKcDd6u",
  "key18": "3LeRgsMTMirfQTnXXCT24TH5Jcd6g6GB2TNANLex32N5rLzoxG7r8bst8f9hjBkJweQ1D5oPG1te6LTYmpjRSQqx",
  "key19": "4eWa3KmJumrhPcx9EanvUTVXYTrLv9nXHRzRW1KxLjzmAZbZMPuKrXrtSQX6PuB4zF9LjVmC4bMf6U7DBCqxjyoP",
  "key20": "4NEFMenZrMLCTG1LmmbjABXSMy4Gen7D5pGTxgey4NJBUCCTE2VhsFpk8rv9WuX4MRnEFSYs2xXu422VP63decKM",
  "key21": "4999wvzZemj7wBmCaiXpWo9D424eHhaknM4TziVNGVG2Qfgb1ek7KFpsbPDd6Ee6Goo2U6xqnnRDWScjxQ7SfvBN",
  "key22": "2fqqtsP7qJ746rQAPo1k3kYaKuDfeEgUADWQ6pMnxQuUBo5Z3mXv1YuRRCbNMvRuBi3jgyywAVLRG2DnQHYxwiNy",
  "key23": "4g2rH4Qn44TVgzJxjJbiT3Q2BhJLGv1QSVAhuujZ9vzcvguGFXi5CQ7wN5n2W3EhLgUuSaxUiKFtSAEr7h3zdyqN",
  "key24": "3PasPLw3bySi7o1RLsGsk8smnDc92UacCuhiKq6Q7BCtKDWsUuWaECnFzeZqxnS16rEmAYLKziKgw4ZUkUBJ3yuK",
  "key25": "wPA74ds7EzULnuqb7cYmq1nLdJH2c9VdaqdxzeppJyrQD2KcLcMwMXDiZJRCH1HsryzwoR2R8k49pWdTPkDaYCp",
  "key26": "5hjeAwBZT2yhgJBaQfhBqrCbJhM9LPiAxbvWi2NGcrvVT1TvugexdhpmLV87wts6k5bw3g7HVbJK9Vx3cJtt2sis"
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
