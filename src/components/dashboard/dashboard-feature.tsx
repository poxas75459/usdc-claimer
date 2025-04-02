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
    "3b9xZFSn8earBnd8sWUgLg3JiizuMjRq3EP3yW6MLo3yDpN1wotWPQy25JZsKV4c4UyTK2vi1kPpGQASpJ5PuT4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RhuNn3Ch4fBTW2YW4X3FXMJVrC8mZLjJ6GwKehRyLrGnku9rUVTGchD8ETRLoi5U5audssGsTU4H7X19rgAXpqD",
  "key1": "5fUYDSGFW26mCGFCfStBw9cedLospmEg5XnZMDDHaZni82zhmJwFJLn41EocLH14A1cAo21rsMB78X1249Dx643r",
  "key2": "2TrTRUrvRmA9tnsoitresVHnb6rPvNuadJXDmUZTigYXg7umRMUqTxwNkM7YhRRPWCMw2qYJJVwRSaGFUoxpYMT2",
  "key3": "4CftiAfGFWpxWea9FnRgoJzwiipkjKDWzYEMAu1X4ssqVsruujPJ3uMU2CvqCZdTUUCurxTCiYLbRVRHp1ADKrE3",
  "key4": "3qHRu6euZTu3ZPfuHmsGnXgvKdY3akzFFtjCw7HgZMQgjKKk2n58vK4GQuBHcXD8PzfwfGyKsRotdp1kxHYkoQLY",
  "key5": "5PdXJYrwq1FEEAX7W5hVJebyQ4VngHm1gTNCrVQWoEnyehu46pZRQgzRvJqFm3uTMBZY6GJzU7ZP82yHH1up3yJb",
  "key6": "4NDuyPhsgP29QiYCN1bbrohqbjnW6Ke895jfMyTNie8eWhnAANZXARtmoH8ZVjnrrN8XXeTbT817Um4wS32Wftt5",
  "key7": "5JsDUupFqaF9xRa6G9hH2rYCkQjV9suCfS6QPNojbVpqsrcne93YcdFGnibZaH8HGaqC8bkfC6d9TEmLYgM7fChk",
  "key8": "5guKdHBYf91A7F4DCX2apCfmi2yyw3kyt13joPtPmMDfrFGG7Z9uVB1DpbsitLeUYPy9NcudCRirUC8muXP72Fmr",
  "key9": "4jKuK1eyY5mJVUBgpx7VogoQsJQPJtvbTmK6rmi9CdgcVCkQCE16sKKSAbnp43bEFe3kf8yMhAZ2TSX2r6VwzZjn",
  "key10": "2dAwndU5hgyW1hdgU6yonytVdA7kkSEzJzWYaBXwNTYHd25xBnahZWE6Jnnhhr9qf7vSMuui24RWtW2WZx9q54xP",
  "key11": "3pHpqD2o9QWc4QxWU3hCL63KfKWQjeTp5sN7x9F2Q4wFevM7ryUx3vuHcmiMGMiHDSqeMeuraRDvP59fBGiAXCCV",
  "key12": "Yj8Xonywm7THKR2wf2FRATMsemAASgSafCGBqnGen6c949NAKToNUFesbLvzkmYzg3A75xsKXGF6CsQyBhe4Vsz",
  "key13": "66inEs7yHpYUt8wGcrmLEsQLy7KuizduBj7ZJsDvhbAB8UeqxNPzHUvjVdMVV58kaXmzjVkN1FeAfspbQEd9usGa",
  "key14": "CAeWWfzW7wuKuaueonrqd6TsF1xz8QBcQuUtuD4QVVfxrsf1kdFKafy88NGz1EHMRxaA9F6cG8EcAChuKGVeEo5",
  "key15": "2gci9qTV3fza9Njwcs3UoTDeyiw1pBYKy5EL4CZ3Dgjqs5nZAhpbMBXp1JpgqosM5sGYzM1pym7FvXPbv2bFjvDk",
  "key16": "A5HbYkgoBGgqJBPA3vWm1yCgkNY9MbeV7KYSwMatAZwtPErRLyY87mxXHMYnrbiTti2kn2sfSxNxG6oSwRXgR3y",
  "key17": "5gFsucEdmewsSGhrMdhCEzSLxpuXG5iNBL5bMsdg14HkwPDtv5KnnVQQiAM3marzejCmVoy98KtM3Eby7aU3hteM",
  "key18": "5Te5Lhaxd2926jUi9TyLzNnXveebbfEdK4HhrYehkoFqGkpDeCLpN8n372JyZZ5Bws2JTT1eMEEvSpN7ZinMHBU5",
  "key19": "CAiWyTQfrUmSVEGf4pyKyNtR1arNSFrrrbeBcJyi79MYGzLPvX1sndNv7JS71jG7duvRmnMDWn1VJGbGJyFb7uj",
  "key20": "9bheModU2Kt4Jh2JMSsiTYJiCqVyPKA9Bc1NxvTjTuZTTZhApbYcFPdxtCTtjPswFa2c1mEi5ujJMMrSTL4N2sh",
  "key21": "5mnVEULzdQixA94zgzHXAAmyvfD3b2jb46pvBqxPfxyyiR52HhQq3fPvJUc3XYf86jibNeP8yFycvVv7RELJoSEG",
  "key22": "4AKQDFiHJvfszi7kXbseyusWoWWf2FicbRiZtJLEdAZz6zoGYY2RyYyxjZJFHxXYVDWFNhuKTZJ2axnR4cQeCQFU",
  "key23": "QYy1YPUP5YcAwHuawrjucqtYPNn5DZoyD8gQ2y9YxJqL9F3WshaCeeQwtZk6gR4N1cFhqixqCxvkSJNMBy7oH21",
  "key24": "4t6LpzM58xnpacYfoshZD4T8Lk2CAEiPCm9n1LAQQp88ML1szc1eWUqS1vjvb1xmvaitapE896kbaiWqM6hTtumC",
  "key25": "1UR1LW72TbVR1MnbcD5tfPLsecDd7TFeCcouKd5DFVNA6QNmrSG9KvQQ8aCswtpdKQ26jsA39G31GXB2yaXKC6T",
  "key26": "37vcCjnpWxLdBgmwnt5qjCLCnzEiiUJ5tZJfeRP7UWWwDvzWzgzpP6mSF9Hq62CbreKN4NeabR9Jqpp73qYVtSbQ",
  "key27": "RteteyAFWcF2pM7FGHAPi1P2sbge7WtU2gmznsLbFjAZcLsqQRtcjrJDHihQagtsRA6TZ3Wz2yCw1QNwJatqivT",
  "key28": "7MaRQcN57WMZh3qQxG2JPaWuqzrg3eZUudxzgPcbitBpQaRihcTmVP7XZjpcmcJQcmyLh8a1AY1o6s96BSkxPLG",
  "key29": "3fFmBCoPva96XurDxo3h4Kb4DiHdMsTX3ZPSmV23cJ1hDggyf5pn6aay1CmMEmwWBdAY6WUKMbU98o8fcTwmyiHu",
  "key30": "58q5z3S3inNT9BbthxA2KsTjPmAJZT5tnZbPctvkRLfB6Vr2pJ9vpZ2bck65upGU2X6KYxBbjfB3FMzWoBMrwW8G",
  "key31": "414nZCwzmMuDcwKgPj3Yjj4nHECtxJWJN3RvLKvo5ks1TctoocnSvENSNquX4WTtcQft2u1gWEV2it485nDqF6HC",
  "key32": "4NtX2Hp8DBsSPKxfcGHTCWvqKnfK88PNas3roBTzgYUHgaX6jxq3u6ojqcAWUaWZWaStLygtrZu4PHUcnX5dNbZi",
  "key33": "4MoFkZFUkrhqJQrHfWx5BBiPzopnyDBTPgm8ouVPy7VqUGANrS2S3Bt3VeE6Q7vBqhQgMpDm7HkfBcsJHmDaxrmh",
  "key34": "4rpDD3gWRZFjT1bhyG5K32EaAMzjzNzVWdCVu9tiQkQEKb6G2yqevtoFm9BUDNTuctDFPMPfJbNVDBfrkYDYr6Cm",
  "key35": "536wrCD2xnLqkNu5sQy5XNwNUpb3Zsoqb7orraeaQhFzuzooKiQUrrhWY49nU78iEZCbmgaN83aYHSC4wx5VHNpG"
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
