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
    "58PBECvakTtGj2SmvBovCRMoKJxJo6Q4u4WibVrtCcVUsvFWaTYNQ4FjvMpvZjAc1bN8iBZpiWxPvPvoxqzTovY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XSQFqrSQhXcyusTQQ1V6jWXDVnisyZVcqPs9FPi8cf9Jd9A6ATBarQfeyWhsPodMkNkA4nSe7zssw6b6tX8AqkK",
  "key1": "349bjTEFHXbmLThd3qaoNAEqKZuVAAyMBS3ipJNBkKiJduuSjZSyCrM8oz1PEZpQoVPeyDb5MoYWatyrNZsyTWDb",
  "key2": "4yCvLDWFYmYN4rFdLHFeWWdSWYWkz4DNBQaDL2YLpQxSjGqmxPPb6yEcQatX2bTv3rCtPzsrqtawp83zG8pSQmoX",
  "key3": "4X4ADducb5woD2LVqbfkp3aMKpnzSMpJz7MyGBQETGXw7WcnHiJQpjxmDr8cytq3qoFi7HFwu66fw9FnyJh1YuFe",
  "key4": "sqkvczVay5MCq8rRjzgNMd6X2BLrHXJfct89JuMg9MdCgRV3W6Srvb15yTGB9ubv4B1hASwCzzXnBCqn6y5vPLQ",
  "key5": "213bLZyVAaUAdBdmZMtCEYPetnuNYFTPsTUcnwBdH9qaDjukphiBJx2GZMc8eeejws35PkYq4puYQ7cznFXhdCqA",
  "key6": "X96W36QJzT7wkEPo5PizqjimLjadCM3ZEGapv3QyzYbYJkQYuH2jhSMt92UwguJdinQQ1w4uQVcFUcBNYRfqiDG",
  "key7": "8gqomeotehc4KMdx77pqRBsmEX5GEKzyXvpiCfXt7qP5m1JWMZRkoUo93UeJTWmumHtpWA3z57seaAX2zshWJ7o",
  "key8": "65sG5qJoxU1qedZTSyP3BagV3iHgKDywCw1nnk3YfxUN2BbV6bicjnn9mWA3MWErUS5WG1Q6BjGZsGj1US3ZwN9n",
  "key9": "36P3bzweMCm3Vgbdx3j7q7681VBTejxsJ2ozWEwkvCgeQcHPFosRwJRsCjWUqe1orCyTUuuWq4ikv1Wib2mejV3V",
  "key10": "2fSwVLb3TXaEjNWrfn1bVz8eLUFVdqgpBxGP8eu8X4koLHMZj7ij9xcUUZAfEHmiF7Z7RmQtBfXDXvuxpziuX5hf",
  "key11": "4wz4HNvc1Ay5t8PXk1V55CWWCSFp2CP3Tw9SZX6RCM9BLkm84ZNrqXNePMxjGpyS5HGtvBHdgK6KLeduUx4Q5cS7",
  "key12": "5Lvs1PyeZ8wbVzFja5wrgAM5ZGjDqWF4fsEpn4Gg9qvFdAvYdqfU7XCkvndX8w1fQoJEWDauiWL2KmpX9aitxz5c",
  "key13": "vaK5Hz5KzH6W8iH17PxFv2qhT62EzJKX8XbYY1CgrDcNvZQhNFB5XFWQBJsyqzAgYqh15UQK35XDPnu6gtUX3ap",
  "key14": "49e5LNowQs158nq5883ZnLGJPjsVjZEdqz4yWJh3pbLUuL2dMt1nG5BXmyHhE1FbyVWwy54nDV4ZEnRHV5vwBpFW",
  "key15": "KK41ZUJUHXF9CgFzbHDrJ3MmqebKmdkXffTuaCFYkG49zAJvEskScsd9dDcEAft9xEcDojdJUwdiNXchhQNP5Tq",
  "key16": "2TzEhgbJZjuZRscjVUGQ4MDgyFsJ4dfKRboFxCXJ68LicxBmDtPuLqbjH2DbjSioG6QYJk2yBKTsi1sRbnTED9ft",
  "key17": "D48AE9AZZsDDeHVakWFaymWiuW4Xv3zoLPRVuAgh7t4fbGcoewpu6h3rLPQGmBs2WaoVKFAZPKdbZNsU2Cv8mDu",
  "key18": "XokyVRpLaDchj6YcRWGk6BtGwoUwagn6BQnggmQekJGdQLCueKVVKrZDGsbyD8Q4GafsBMvuU3HiYnzbpn1bprs",
  "key19": "2sbPPa9mY4EXxG2p4GspTPmg3AnrpjnLiVt64wHeLZLiUmSX645VsqAMDocBmZsAkgiLC4htQGgvdU7JHfKkEBSs",
  "key20": "2HC9LD7kiYp4j2AuaNQEkyJNhE1vUhkxApQPx4MuAZtzGs9eXr8odvzbwhBug91bQtbLVYxVdWaKhGQZZTaDU9pX",
  "key21": "gEgHsmUXLQLBEUNjUhKmR2cBdtpJE3dVGp9VZrcthcFxLXZxmNrq41KVJmWALKZMTvU3XUUW4HHMCyswhoADKZB",
  "key22": "2YTmyopu4gBV2MNqaJhfG6iNojgePXfefkGqF1y6k2F4nrj8ZJ7yWoU6GW8sbyzQSnpRG8TNPpdj2dEYQ2hD6XiL",
  "key23": "231zXrhCEn8UNbwi9bCCDnCutPn6GrN2FUVZTAR4NNqtS5X3sQQSBX7CxebNJBMqb5XhVEmYTpKRuV5idGLL2TWt",
  "key24": "42mcPwTHKsSePbUVi4KAUp6wwK7LmwWN7Af576ouekQWsH1c3i6bNoQN717DFXQNyfdxsDMzFBHLDH7ityn6a1MD",
  "key25": "2UgGTZoovApj4KVsCPR9QLWehUCmHj3scXyuSN8XhggWTo224d5CfgnBiX4Aqd7yiFP9Cvm2vPgGAjWVRrNiP64M",
  "key26": "2FwQyRFA7nxNmC2oGXfKdGPFVd4JPCjodbfukSp8m1H23uYkZFnYgXKvMdsY8GaPaPpm9NWX7AivveUuXdTok2cY",
  "key27": "vNYw74boafNuNYow5KNfrkurU24K9YLtfB5Zo4A2SH1M7UCqjgN31TyyH65RFtYyW9AjEM5NAaSYXPbue8U1wim",
  "key28": "4gR4za2SH7DgxqbZ87fBsQJsMxM1d1HtEbuTA3ZtvDkfoUE9Swtw24LsHkaYJYCVofKRd9NBFiP1NtXLvvK7hz8K",
  "key29": "FiC6G292PkR2JLGkD2FNJbhksNWAUvcbfMgKRrGb8BkBYAN9kG4QDtZwhbZnhG3HDDJRQpsFLtGRV7M3HTznZBB",
  "key30": "3Jz1vXfrvfVxTaMmfwbqDkmc7BkaW8Nibg7SZuBZGYim4sxKB6jFJLBELXbFBpT66w7ky9eKUrJvhrmdywz5S4w4",
  "key31": "5exQpdud4efyfbdCAHttKC4Zkrg49Fx63ycXKmeVjFTpYVMq7Nkm91Y1G9Dxp558TYszd7ke7XjqmBxLMrGFz1r8",
  "key32": "sT68NdpJgH1ienc18FC516k34gGNWVh33tgTSQLUPntEZdBGCTY8xi5gXh8kjt82cYpWzFCaAFhcpwHtYP7shkV",
  "key33": "vKe6faL84VGTC9vtpxAdta4yeNhQnEajaZt71APUJbcT7eHhb7Bt61tWjVULmj6QWiGd63zLSMuY9YyhwCv3DD1",
  "key34": "2LUvjcJCbkHLt2drQBbEyvSyRkCGhJ8ixqfoBEbb9e4EV349r2xcV9qLVGvzqPHSNB3WG99C7m6EZGfapHQ7V1p6",
  "key35": "5bPs3xykHWhCLYpqFvCz519qpdu1o818SG1jcfiVc7CYNVAr3fyNnUuSMTFyPJayUESGYVs3XFrwt1t71NtmjPpz",
  "key36": "5n1ak7deiQcjqyvsyYWRv8URvnj4Q7ztKcBhvYTv6qjiyMPDQKBzZNz7iXNUjj6ReKg6W87Z23eFoorMwD4BL1Rm",
  "key37": "tirLQ6NDF28vXCHHT83mRUvz1ECuyWxgQHbQVjmG2WrprJqu61YHG296KyzPnFtgyiKwEQo6952GSVQxLNmKMLH",
  "key38": "ggLFEbVYmTh6eYfku1TQpQcFWX4bbZVCjTMNmcauySTDZ6vVwEwCAvjH3dFSB58enbDaEoGcnUgxJ3LPW7o4zhJ",
  "key39": "28jCppGTLVLbTR6Xctvwh6aPWtB8MmZKzJmZg21LXQAx7iY8nJFX7J6NaYMkkoqABQvBg7UPwkCaW4HVkHLSu3BN"
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
