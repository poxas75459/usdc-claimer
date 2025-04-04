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
    "61uMDo53YtkxnPnhwSz76wrWR5gF1yGkphFc2BarY8ERrq6XYP4652oRUAH27V9jcqMqofEYfJh2mgj413sTqiP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NYsbttFQjGYGEEso5ZnhzfgKt9gtxpD4ABsKVCcMUBWcUdGLpkdfo8e461KTP4KmJ2ASDyDdzvSGV2RaHBQ72K9",
  "key1": "3o792txAH73CkNB3Z3ah4QcMkZjWYgnBQjbvSVPpemXeiXY84sDRqVjTWqu6N3URZBmFTKgEYpF1eYoCbT3cbPom",
  "key2": "FH7Mea6gkwC4BSR8sRcqSSstgeYqR7qJphhCvecCtVLJnJUbDp4VPCKUwyLfZp8zsRvynvTQ56NJjPefFyeguAH",
  "key3": "2JeLTsVwiUkx7gpzvoLGMj8p5DaBkjWfweajtuHR2xQcciBYsWPehivtP5Sj76XLTEZJpvUFDXHoUaxdpWAswgNp",
  "key4": "3oNXZiqCM8zx8quTF6tWWZmpUiEjJSnzm7jqN2AQ6tcchdAGM5iNi2z2Lfzvdt6H47uV8DuJgGhQn8CQ5zNSXtP9",
  "key5": "2e4KS7P56XgSot9omr5q9Ki4WDbPJhUoDnMKdF4woShaNZPoT7E3dVZi8Uf5KUMThxuc4pGEyRupoqGdcYaJAgyA",
  "key6": "4Jp8ATmN3pabbDmAi8iakgUCA4eCJuXSqgasSSvJvMrms9UHEE9KvNfcCATQWjVTUuNQ4Mtjs7cXpo2LYnemabdX",
  "key7": "Cdh5qQgmaDa6h58dmomc1znEuPwhT2pvPgcMLqt6wBhKBXgBrLivdHwSWU6Y19DykvQhpwmz5sQWHd5oCpsFZ7i",
  "key8": "2aFHyDnNg13aguG3VFZ1XfGHNCnUfJLuZeaVWuAFeUYszZGEt9hKYQr6xDrLER9xKTqjAyGic79JBG2cRUTxt1Qy",
  "key9": "3912PALYSk6gXSSLE7PGYqmJVxVdbhvEPy8ycGdtqfZwG3a4py7GpmBmNGL2MPyv8XFrerXtaydmMCoAnLkhw28A",
  "key10": "2z55c9PXuWbzh96YMQXo28VgAWuvmtck1GkCppwtSWyMaSv59bvaCJLmnwnTovJgsbu5sjt7rC1ESWTpHXTo9ddZ",
  "key11": "yS93tFWWgTrkczfHyi3gP18cWQyhtWiuWfd1x3cwscZGXuwsr7edDddRNBQ5Lv7X5jzuyxMrAhf6h4Gu2Yh6Awv",
  "key12": "4PEYGaSLtTHVzw22pnFbCtmppntrYPWKHgJ5Gi176yU2MJcUau2zwG3x43krKdrHFCfKSQpjgpMC7UVsFpxa2HXc",
  "key13": "xYHB7o54QhErZVn9mTFfebJWFTyY373zjnKh3SUzcf9FVqKtab5XJvT5y1y1RPDRQWRsz2Q4VDV3zRUrVvDbrdT",
  "key14": "4EogyDcmb4aPvTYVdUGHonS4byBrdSjy68dnFnYWi17nQdYpL7u8UWbzYmavnfwtXoDQr8GvGyUzC3EVS5SMnfGn",
  "key15": "4DNE6bag8fEow239XuBgJ2tkc7pTUecyuSKEwg7maQMSxnkWyGqoNs4JmeMZwcUnVEcJYh9LPYHoCVq2B4oArj5A",
  "key16": "4pXGygpXE8KeCCPKCX5wSbgDiA1rejfeG2MDvydCFAiTiypBhJ96KQwKwH699npoD6m7qoAuibGJPLGZ1r7QDkQ5",
  "key17": "VRFJYDoCX3afh2mc7rPi7idui7NzdVRHu8VJ7CYHaxcfq1WjijLyikxpdiEtehLgQMmobHiMUZFtFRdFxaSuGVg",
  "key18": "4bxQLmp4dtHHpKoBwApH5P7Qspe2BSF6EPvP1jfsv7xGNxgta7CYY6D8W2vHWcbYMHjbvJsMzLQ5TaR4eNZAyEqg",
  "key19": "2P2kuGyjdKmDaeLTvCRY9mgvbeb4hPa59VXvkwwYAfFSVqLpdv8TDAtxisCCPS49YBaDJqhVEMWRzsTVza5Xr9KQ",
  "key20": "3uzR69YZFixVxrfdDLVAN4mFBLKNugz29SeQZc9YWr4GC1PcJCpnN9fr38kST5rzLWZnZpzwnPfcx6XsdjMMfYGf",
  "key21": "48Fg3heXyMe497ducQqF8hyoYa3HtuVeXjpWMnWdYf6UK6QStsBx7ZRMpnmN9tCREHMGaoVEq4JFUss2rVr57Ag5",
  "key22": "4Uub56QTRuBrjmwzTHLUhkRmBXki76FeyjSYm1gbFtAHmcmqVGcuJm6Z6mAma3ZwyNKBTrbnzV4zCJtFinBCFj9Z",
  "key23": "VP5Qe28Za3LPesHUToYjTipLufQKi3Xmi9Ro535GYXWG6QhPwtcSQYe5hqj2CZweHLQ7N7eCXYdVz2k57djpnnD",
  "key24": "5n1dkQjcodSg8BBBx9pRnVNZSVFKmJBGzHvnZyHcnqAnz3UKnvYK6amGRCjKpn9b3y49TntwfEk8zUXQ7Jv32T3J",
  "key25": "3vGs9NG1Mxrzw294DjLhkUTGoEhmj63T2XoPfspx5RxEStMmnMVRp84SUDKHDx2kmqcgtf4BcvJXp3sdp4BeNrPY",
  "key26": "3jvpca9xgBufpMojMsUtgcoLk4kX2TJUchCt1q69MPvdUELecChHWRpTYhSjeTHnuoqiogaAGSFSPoEq7MiS3Ead",
  "key27": "4E7FjRvX64PyqkVwVwBXNTtjtaZFRXPFmLDDAep5uryoohnXsFpNJMNUcMJ3zuzBce2hEXaC61UK5TpT8QgVjx5E",
  "key28": "3Kt7xHgrMNfCtZbLzNMxvPbkZGd4HfXpYEF1TExMNtSKHoW2gUPEWF5GbRbRWiJNErfPF75NJ3AjJ6tPc6i6QgwP",
  "key29": "3edNWLuicwCJBGryFLBx88SyfmhixsXCwydVs7gadCTajoqx7g3cTiNMWgttG7jCdQa7ERrh2D7TzixTtTAyemXJ",
  "key30": "XXeupPBqUyd7L2nyMrXu3apNma2ZSmUaZqzX7xQ28eNDDnrzLsrfuMhz8La1fkMuZLMAomZrXYzw1dGhuoHM4wX",
  "key31": "65dv9py4yYyjinUsXwz8xBx3PYdyhxvHURg4TMn9vPxhxGVWnjmsjzckrC8fasnVNR5Q6NpusipA6VLJCRSqTcyH",
  "key32": "uw62C3yGTeMjT1WRYb2p4dxp5NikQPgfgwgngAYEtCU3z6spqqNENK4NYwBH2uEqR98PcyAJP5K17ayRYE8k1Rf",
  "key33": "4TY1Em4dFWG9goy4QWfYwTQiKxjMabRSBEAHbhaPC38MgRAqyW3hV9NsHzWWxeAXcTrZicNBnZ3KhKHSVvxxnzU7"
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
