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
    "44gionuzfCdDeoQSfjDy8LEYbmTWpJN2FyYbrGY8gq1w7fdJEZVj17jki497BMZKZKv5pJLejfkPEQwn1Y52v3ST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F2i5TFXeaeMLhbk6FymUrTZeXJZDnewW3mnrJJ4cvNpyyL8M6NBtM7hvYHsGyr3RPA4Hxo91Vu2vagP5PtABM1P",
  "key1": "651HcCBw81Lepfe4CuFqDJRcbfKSV5dXETsSqXGcKa1hhqRhvWmepJiEi34F2mWB41bLiubSeAVczV3CP8oWZd9o",
  "key2": "TzaXTAXvCzKKCYiZhYxgyFeWxskSk1NyQp8kAQXJGamEzZv4k1ACKfAd2f6D4Gnpchj57xq8zUxnfA2DHHxgFwp",
  "key3": "4z5toWsC5bNLe7TbHriFEXfxpaYsPiC7NfUbeMj6Fckz7fpoVfaopsZMYtbFdKS1MobBiKi89ZYeSf5AH4Rd38uM",
  "key4": "dsXJaurB33cBifecpyRys3GsZeGAo4Scmz6XUbrPjNhWRQ1xKeC6b1Hw2X4iit9X1AK4dNnd99bBzAkd3X3qB9J",
  "key5": "4QeKAwoXsrvZXVfoz2uqWVSDv52PgUozpU7z91ZBEwMXTdWZ69tsGPruXcanTTRS2zG2J2yu5qBFfqi9Gae85fk6",
  "key6": "3P1Y1gm9GAf83AR5FUqYk2hvr3ywjGJA1kG714ncCpMaJn6N2bRy11JqjcKkgmtTCyQYa1wuy9LQGjMdjoSbYZ4C",
  "key7": "5MZL1jozgVo6XAjrC2CvQwjKFPKwV5C9XtFEQavqr9XShRSNwtauu5R9ZZXt5kQHC1nXJdkJua6cNV4bW4qDtCgt",
  "key8": "Q4ebaroHSdMJkDeBTfcFQjLSvokVWCrsXBzkBk2XwKsx8mjBzU4YZWc6scamJgmWXCDTauEWcL8c89mA7gUF5Hz",
  "key9": "62ZUfiRiSzUEngRw5hMfBtcYqgTtEXMzgmEH88nAjFcEkspG8eeB1SbSNJRbfk1VqUfGEPtDvnxykbLCZecTmitD",
  "key10": "Bcv8fpwVgY3zJhAqcEw7dSeCkSSowxmnGzM1rdog8FnPddRNhsCj4Mjtszpgnn9dhPVDWHACVz2SjqkxHhy76J6",
  "key11": "Wfopm6DbhRmnZX48Qr3kh3EJJPCzdcu1qxj2xjJRBj7bCpNpAmYkdKKWtiR7kPaKYwY3SHULA7pU3tQzKpi9VFi",
  "key12": "2fKdLrqsukL8tg7H2jRYcBj9p6qfRhxAzQMcM1pLUcmtyaDmhiyN3qiNC9GbKAwRxvKnTVV3t9qHvwQAwcQNfs7L",
  "key13": "5sA1R9gn5Mr75xe1utAZ2ByxFRcYJKiQPum3qUKTYcYhWSA7yXCKr22F6MNtZ2GNjg586LrxLma8EjyT3QuY6n85",
  "key14": "2sf6qgfH7muuMwbzPWmyp1VqMzRb8JVK1bC4THEAZi6WpRSSTrMgSsgrGsSMXiTbHmVYC38AoRbQzXeQmjrAMmc4",
  "key15": "hNgcCGWdVffauEbKos1f9XGtP3q6nvoycZcntNtkH2dtuv2AqRRnMtDETyxy4yZJuYY3MC4iW6Ts2qAVaMEQDQu",
  "key16": "LqVPzBAqc5dV39KP1M1ZfRPL86fpmnEVPDmThEUEYNehDbeEnzcDxEEXwTrkcs3fWsBSbJKQ5ubrwd1F2hkBfkG",
  "key17": "3cf2dDSKfjPBD7jUSq2p9vgQoaabyEc8QkmjEY3kX3rr7WLBJTKEj4iLMY7sARms7tADLVs4MymvRbfTbx6Lz3h4",
  "key18": "2Br4LYDTQPTER442ba48t8GPyL6gQ9JWEyvw9CbGDrt9JVcFgJbuHJHMWGnRmciMZkwFnMZWoboTxBdJBJFKs2mh",
  "key19": "4fc8C2Z6mvPfXXRNU8o25RWA5Cta37HZhdydEfhaKCbKqzwFgWhjrqxJqt2tWhgPARFUYARJj1RvawtLGq8x14CD",
  "key20": "5riWtopS1aTPkbUvWEDxi3x8eLAyBAawb6yD9zUtxLKKtZdXwzzT1sqTVBDt1VYsxpzP7Aqn3bhCCMgVkT9QiboE",
  "key21": "4MybHUFwQXXL7KF1GwdcNDg5GiaYpCr3fsF91o14ZVcSRZFuyx5drmLkFQUAiSWWF5YoRszVpfsRGnUo87Yjh4rs",
  "key22": "3sZguC1fd3Tde147NGFZt4Pfn75xAZQV93nfriptk2YxgTEsQFdmjucpTy28nkStpjZQz1KRU9PsMX3DrUhBX29n",
  "key23": "4Vdy4rx467MBjN4bMeVMutD1rEjpbvTUp45XNpscQ1m8R3d2bZ7jQrZVB8WyBAts6zbSToCimkBMopd6sNZFNzHT",
  "key24": "4fGLWnkdjEudxYVctxQo4y5PxJcGkZ5LASrs2CRVEK77kAGJNSJ7U6DWWqfk82nPNGpm7ornysAPAUc9Zxr15eJn",
  "key25": "32vcCMijJXdGjqE4ZbWuTSAJXjTap8t53z2VQeiXfcqcYagLoDHA2JyKeqdRdpmnvEixVLngkStLgqNg5PhHdXZv",
  "key26": "4hV5szL3jrekLcYFvUo7cUaowaCsKMFHHeeq8hGv6eZq2EAQTQG7JreuDp5NsUf1GyPjyHUV9XkdozL6fkt6goAD",
  "key27": "5ke6F9A8peWqq4L19GihaKBBbnSqeYH2WyNGK9y2ArKpjTnztjef7LKmtsay63EztKBYTrUncLhBtLiGv87URy7f",
  "key28": "3VLzTu7V1bBc1E2gQzbvrCjsA7kwQjmKX9bxnRnWQryA8L4g4D39MwsZkx21SWGuqkXhAwWE83iphGfh8pg1hdYq",
  "key29": "5tyKkhzATReTq5tttXoiZB89UvyCDivCWPmH6JPkQkXJE7gQEYooWtYtnzqRid8QTAjMzwjA7RJY4ibQgk646xoj",
  "key30": "2PaFNBMrwrrBkBhTUrXh4JceXDGtYaLirQwBnqEDrfZkmsoyXVoXphHtiY82eHkqaBkCv3JSG7gtdpJduNWaz1j7",
  "key31": "4y7UwtcxyBWkya888h8KD6CQ1L6dcmxwGeVioeTvY9zFQpkrhpgxX4qprxs6bexR1Vkzf4ERWFnNzcS9cVbWefPs",
  "key32": "3GocWVtP2XMM45LVkFBwthWX4qN7cCrbb4BjGbhimf2Fm49ATK3nD3KbF72mpjDavXBDuGsfMPdxVamjd7J1HFon",
  "key33": "3JZSEazbcQtR7b7JTcTq45GmLmuhKSKm8gNJpCxXxg7mRcUkGfCnvmNyZG3L1GMVaH9Uns57UQ19o1t6U4KaVrjm",
  "key34": "4XQaNgmWo5cQzEcMDQrH5Hw3GVRLchp8Xm6YaDkiJbNXLbTa7xsN8iGQ8WuME4WXAg1rSJk9RREWoRyppKRP8a6J",
  "key35": "3fCkGWyHNGCaD4Rto3M1oDaNhPeuz87KFj6cM8SjjQcis6q9SajfEY1XZs9HNimfcDoeBUmsqPyWyeGrMad1YCei",
  "key36": "2YCaGF7Gzw96XZjTjmRRUp7jxy16e2RqXGS29nhmxjxfyFKtLVse2RxWrLLTABj5fQpST3Ru6EGqECpQQEyokrwH",
  "key37": "2kPzm63yHYtg41MLAkWDz2E4Jzn2JeEctUmvmGMTYQzq6N1VDjXMrkQHdvm9cnLDCBNKxGU6CqPofW7ENnnkwnAW"
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
