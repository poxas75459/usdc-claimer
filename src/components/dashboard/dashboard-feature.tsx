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
    "3XqcggTgbu8P5gSYF3cQFPiTuzADNctwQPVPMsoiBHC5q6GEs7EM3dC3Y4BXbvyr1Ho1gtPwdctfxyLNFHoymwLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MHjStAewJ2dhgJEsNDb8LaJb2BcQ1dQ19oAu6WAXcCWhphqy6y5aDHZ9DBKou6ZNqEWLQPmiYk5WJ9h7Ezj5QM7",
  "key1": "2RJp6tefc3dUPiPddohf3kTberirhtWJrsewAbR2x3YUxfuNUFSz7rKKB3Ay4dYCagAZ3Bf93mUnaoANBeQifapX",
  "key2": "2TMi3jaQrxdBmXjqomdwQxUqAYdRznEaNzQjgxkqv6m8oh4WVqAnmx1qWMq76HAC5Vo2x8ViwM8swF1N7NVJ888t",
  "key3": "5xKRxJQw3GB1AcT3JZ6VoWPatNU9sqsAbiRKSYvs3zgWEcKk6VXVyCgGHiyhSBTU1cuua81bjMXT8HXWM2s1wQKS",
  "key4": "5VFD81vdKeu1ZeJW6DsCUTngEnBvPnS4nFjYEf5VpsPi6bf76RNMGevbTi3ZTHohPo1KUDeDxqkKqvQYWs9r9QCW",
  "key5": "5wMXrKP43qvZC5eLkWZcbQ6fW8SNGXwjdgpaJRycn7S598mZRWhxyg38f5jfcZRK75Y3kbntUEtV5ZNBEE8V1Knz",
  "key6": "2FtSihc3DsYMcVU7o5mPAsS58y3WqMPMr4Czpez1AwQXM8jwmSb2T3aahCEFjdpymDaq2YM2GzhZGMW3xpZVN8ck",
  "key7": "Z3teTEMXSfxN32Bm5TvMVYr3b4i3GqCU72xiGrX2DqJS8rBxsy1im7pBKQ3N78i9bmKL592Q5DMGGu1rWZ5kNZG",
  "key8": "5wNJrtntRfJewEqJf8d6b3d4UZ13H8CXhia8gLKxppKWo7Kt2YczWpDUuZyqwEaoiVeab4vM9YYdkW91khHenENZ",
  "key9": "qRhQyJcCTjqcKUadmb9wVEa3DA158Ty7uh6hqsHRkBFKi1Nrp7tXuwkNb7F2DnbJ51eUeiB3RrexnYyoMhQgj6t",
  "key10": "5CJXxKk2gHow3wPYhZMtgEU32Anh1T6tC7yAwXYVEwD74r8uVnPBScAUytiXmSJT1gVHd1t1uPp4aAAipN7WWTFU",
  "key11": "3hS8pyA5mZTPo9ibgyiic8zDopJ9uxqzKqjfh4ZBPN4XKWeT6FChxhGgZLsuxExTfgibnTYRL672KwcPv2VP99au",
  "key12": "3QC4uBxwEScKDsrhBpXwxS6YL6vzKgYMTxvMBLsVEyP3dA4Y5trqszwR8GvSNSxog2kn5cysC6SiLPD2gPzExgkK",
  "key13": "2LdhtVeKa69Hq6iXvgiq5dem3PKebCMFMM3AU1n6EodLacEp9z14de317tswhdKUX9PjHBTmiCYJjNWDcR6Taj5z",
  "key14": "3gRTG2n1MGcM19HXY3wEDSd2brNJDVJMqjsJAAoTzoBcEgCWn27JZLyAF2Jc5fth6KGswazdtjKbXACA8LNbxU8S",
  "key15": "ghfXUd8oG11UtF7B3LGc35kwezMMU83L1fKcWiYYk7Wv3ZmaxmuEz8yoYKbzAmaSRNN8HzK69dMuT3Bp5WhtzLC",
  "key16": "2XnuhV66ot1poKvSNLbEsv1RUghdiashkpSWBs33HeC9TqKpaRGQfTJBdrSjuvLBtqMJF11Nr56ys5LoJ8yFUgxE",
  "key17": "4fWJuwYMq4zJsSihPk8mvKd2wuREmmw7nSp9AQTF3G5nq1UAorXgsD6T5wgwVaCcTsMmDGwsYUNpYgkz1q4FE4Ky",
  "key18": "4sqy1Fcw5hKuKmEKDX54TsqsxopXHa2Ts4PJasPhQYfogevmRnEVaz75kkyi4qJ5cuuehNm2Epfk3chE6986mEPZ",
  "key19": "62HXcaXnkXxAyUFqjvLxn9Nko9twxE96tPAFSxbK43yyMkd7V2Pp4XaDoVbQ8RxRwea8Yv8bruP43X3ziaZD2UKr",
  "key20": "2oDKSEvQCqeWpY2KpUcUmPWVjZHwtk8Qi79cywKkAyieWjKJ9BRDbSVERhmr7L6W1FvK77r2buAauqesTmVoxUWA",
  "key21": "iGBokkNagVcwu5as3NGTwW5aWjN9QXFFmhabc1s7xSt27CqC8af6zc175okyuBwmtku1acDNVkw67scsZuQmCyV",
  "key22": "2bGqzstNRAmeaXeQf4bzRF9uwCzZzhKUrjFaoaKXeEkSnd89XnxDuRsvShNm1TX93WJmgRUbMPeEefMRuKqvHFXV",
  "key23": "3k5GnkJRqsEhGmexB6okAipEuyFRo93pH7menrrUEjVUKyZ1FZioF4XvsQFokCUZirhXnZMHuWPYBeRDp3ZZ8xZZ",
  "key24": "3Pcju18uAXFZ2xrSQVhfcyy6BTygMwwvQ3w6WjS9pUYnfWieqEHrCv2AQxhpHzPy9sKmCqsui6NYFSDVf6BRZ85i",
  "key25": "dUsEaMVx5LXBbG41yvR3E5Ha3Rwqybi7XWeCbKp5AHJbccv1goWVvMUsAVge9sSbKH31Y9cRZaPMyvTNY73hfE5",
  "key26": "5BLV8GzMaiiZbzkHp1j7fmV3uik3dkN5eAZmzqGH69qbxv54DX1uhb7iYwAbdomrxcdQUaM1wCjuJSkjtnVkwT1j",
  "key27": "2Bur25D738NDfSPDtzsVUGUGJLUdVeATBKE6c6m99xmeARXWejiC8yHWWzcXHK3FRBz6pWz8L1hfnGLSgjPndx2s",
  "key28": "5QiLW237zoBvxTnfciSyAjyF7mYzxA1padUNPReRsBTEt4sb5rXbRQLpiaszGp6HX4VCqE4CGrRpuWUM2Ha5T3iv",
  "key29": "4KtJEGZGSiwgyAZkcYYb8kC1arqhxv2R2PXMZR9gpTCX54GhkL2F19Fhh8MVkkLQBNai9QpiTx1ZigJLgag9goCt",
  "key30": "3h8p3ZoTKLK7Kvg2zk8cMfYAHfrg46FrjX9R5fHY33xNDGBGRpmDrTq64y6bFwypW8ZKZzt8Wwh1Tq3K9acCzErB",
  "key31": "RGW4vmZddcvqApSmrFxTSCecyeKaVqryhmHkinReKiQzcwPiABeE7S6gyhMaP2LX7U7n1wWA1hHsbWf6WAhWwoU"
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
