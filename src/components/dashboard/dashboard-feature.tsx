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
    "2hT6yWwzWXKudQjH1aEVXRk1XNPTrpRaSwEfeowRtnvdVN2iuXaQ4aYvaUBp9fvxUGWw4iVoTze2fcWxcMmAR48E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ELvupcCrB3urjzuo3uFwJSg99BYTEQJiRQQ6ESp7kcF8PaecYocnT6qBZDCn5BZd4jotuhhcckEd7gAnWKai3jn",
  "key1": "5y9rbZQcNjpKgvC1KmXDXTthAkb3Det63z8M8zXRt3iLBHztdyn3z4YupwJZmMBd7gwyEWgf1ofsfDtBVBEK9Qym",
  "key2": "3jGUUGFEsTVbBW3stkgaa3HquDs8Acw8pkLNAtt7gDbaMn9EGYS4zVF2rtevn3yLVmCh2LweM9mxx37GV8sJY6Lm",
  "key3": "yqRrau4XmZ7tce98kbrkMJ8iXJqoEwyi3QWC2WjxnLFEN3K4nQuusyFPpcEvyPiW2gFDvP2K1dCJFrzepy3Nieb",
  "key4": "5Mnzx9Xi5uWViem7K7vsi2DgDXWeXY3WiDVaevyE1Gweoo3iyLfU19h3aaXcWbnJjndutJbRdonCxNEyGq4QLeY7",
  "key5": "4owkB3wnPePWNaM3FvxaM7bDanvW3F7vLCXrrhGU79evAEjg3XGwChtjBDHwtfvYF58xT3yjqfVzNYqTnZRvRnTw",
  "key6": "4tBdgWZbHPGcW7rySk5QkvjYXKsokZZyyL3xwuZriHP5c93TsjAvBdk6SXwZaSqSCUg2YoHstkDLMZUgosRS3Br",
  "key7": "37YMW1hp4ug9H1ZPJHTpLtQfvdpRqbkGFSNnvX54hxAKYJ1cYoAEjtrhXmMA4CNaU7wsyGTGiH71hacNpvRNtbTN",
  "key8": "5q7ThDzrpuikN5e17wwTB7V2Ch8s1AXfJQkHXEkbrNTEXcuyhZdEcK18YJmim3EHS7pEJC5ZjsVU8TVTD5EPsNUX",
  "key9": "3fAVi5u3yqud2uwwwV4So8XqSFDAxyVpkbfcTL3DHNzLyqivj4V8a81EFWozRfS5hYT5vrMqqtdT7KfHRpqzFvQJ",
  "key10": "3oC1djbNUAKSQSH48gJWwkg7EzTB78ybfyx4bMv2hjeC1X7izLAZGRhHf4D4qcya5bHZoPpXkp2nDuj7VkL4AAJz",
  "key11": "3tgsGToqZM9mjpsEQf1scYss8tjYyX7fCrQhPPYGwZdYiQvJDno9VjAhJEZ7DJnchVqnPLc3k5r6ExKM6KJvpjdr",
  "key12": "J25YHg3eJP6R5f47cSU9aXaaqxEgWRbirp9mibxc2Rk4YHouwGyuTD5bijDCBD9ksCUthnMY7naeYBhueupvg6k",
  "key13": "3tP9fZ5VLN87rLW28CGwhWesAsr6XtBvpTSpbV88faTVbUqoXze3oZZ8Xn8sQeZzScbeLW2kVbgZCaZfB2qqhanp",
  "key14": "5q7ZdstSFGkHgFDazukVP2g67Yb98snrzo6omCaRgfT1BFHju8YkJqeoaQBfUyEuYPPJM3KS2UAHC1BJ2UZ1XVU4",
  "key15": "rXYtq1GyJ4kxq5ndEULTgk8kywWuBMV2moq9yP96Tgj1KmLyaXdkCJxcUBGApSwDjwz6Gc1ojjeZ2wSVq9p7HgW",
  "key16": "5nUvXxcSUiAgzMZ6J3PZjVv24TpmBVb4Rz5hBbKntBQ5RiEQDCujfn3QrmtrJM88B5kijZuebNBeYYYkfjuva49m",
  "key17": "CTwCnfHMD3ZP7nMRXsrdDdc9LyRVUbH3bw2MftpviM8AfEDQKeoaQkHH6yUofw3G37KCMuNDHwQCCpoaRX5DeL5",
  "key18": "24Qmu1JTbqrjqWWtcdZcmgavVh1xxT47UtWkfqv7iAjiHfVbY8kLuZtDdDe62X8Vw1mFaGiqH3CumA56GqQimmHo",
  "key19": "ZuHQwV9oJadcEkfd8hb78UGyvE49QXptmDmgpt5s6YTVfssE5jZxwXVfNRQmixneEiBWWJ2qmxABNeRZARKE1h7",
  "key20": "5VJqEn3geZJHxKRYqB2MNoXAmy578Ph68UcNZNzuBYT1P4jRPyyT81XjgQ8owLsu4KXcV6UjULqQYV1xbLsBthS8",
  "key21": "5P1EG3TB63F7kZWdLa666eM5XmRcJR3QLpu8HNQixvmii3bHffomismK6QeqWf7QbBR2wRf2zvems3KGKFJJuxwW",
  "key22": "NCnAiUwvEZfLqxxWEyQgmzrp2ZmzmufSrd7x83HhCungFiJchDpbufz21P8stMMviffo7Fdj9JUNLpwYPtFJ1rN",
  "key23": "4PAJC1r4xyoYjspk6DsEb1WX6mrkdHey32mdyYLAWc6nWx3Pt11XFwVuqb7EYm9EG5xfoaKDoC3i2vE5aE3vMy2s",
  "key24": "4K8EuqgPJR1dL3xrogqE2unKgv7nE3GAM4xYEZQT3BLNBbuqqFxt9By3xgpndWMqAMiSqbV99nfJr7WcvGFgkcT8",
  "key25": "5e89b3bR5aTqMSCKvTMYFcyKNXShY2mJe7emsqajGmRuftmU6cAf7JXNMxG6UhGnJhFCMkX6CDH8axgRy1gCmjK5",
  "key26": "2NywTJvyxg9YpRQTKWYq32sLDYJ4o5jTPw9LpAWYb9ahgCFhYY1eAB3EvaWfPKkSfsshRCHSSuL7cWwGiEqq7EJX",
  "key27": "MZQf17VR6pDmZxA7K2EBYM6XFMSyat7QNQ92PxBggY6BpJfHVrnEr7JnL4bHfxsudqmP6am7HP1thArrJPqnBcp",
  "key28": "2eHpVLd4iiCBTzpT3TyHRvqtGRDBTofhZjgpXEKt2mkxNUMS98i54HCbmyXxoSZBCEi1msVB1XamNRZ1Ao5pw679",
  "key29": "2BSMwVn9ThFVd1zzipWeapiUN1hx1deYpku2NGgujzj632kpgxNnxuK2m3MjhQ4ysih8RrF72axKWxRrb7PENAQZ",
  "key30": "5vCneG6NEYJyVAEtaqdZUJjTbKtDH7KXcuH3Ys9BDSywgy4N2ygKTChbS4uYHJU2fKSMcBE5fBahA6YdTfyFtpuA",
  "key31": "26XUPxSNkEqYTkQUpx4CvTRqreHy4QDvHzvRcv8RwZMHoEPjqzohB1qapvfA6KStRLHomh47D3Wd6PX2iSWVosfb",
  "key32": "4c9LMevufLDmnccxNRKbWgKhZQM5HE7FTnP3Uiu8RKkTswd22xUv1VdiSTSbrQdR8SWQPwcdptXstoon27iTFowv",
  "key33": "4BWzH1Kn2MTWzjCyCSAgoo6NTFNXzb9qM7UzWNU16GAormfJq4sLZgfHQEMLarLa8S4yrF77ysynsP2JNNa6tzuF",
  "key34": "2cY1CuzgqcNiXTjnjp9dwy9QxcwRRLtGFL17rJ6S9gacHEEfTpKCLthR34CjVybZQwqfMMwyDf39HHjgP3CGdEM9"
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
