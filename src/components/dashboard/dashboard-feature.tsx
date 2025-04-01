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
    "5sAUqHL5ds1c6Z8o5iCVw3V1onsgCdFmdoNv7LfwW6pg6zXwYYqYuiqQ9G1SR1ZU7HQSPCzjt5HCPEDb4XstNj2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EMLgzKHm3jADPmG92qRDFqLBwUY6jZ5xcDQmJ2qe2shjgV55WK4EcVRJ7jnWr6SaA1f44JKp4gQzJXjxXMMVR5f",
  "key1": "4ag2G2XFwsbSwZoYeGd8BUrdMNzjKwCpvJo7KD8sau2yKDcqBoiQPwKH9xZteM1UoDVDcShsr2UmUte8wDei3v9k",
  "key2": "393ZPsqDhKSvBPXWVpfHrdXC4Vn6gDkMxMHoAcqnVLv9sR6J5LTkgzEGXcRmQN4P88LmM7FTS59XDJye1hS2VcnP",
  "key3": "4KeN3dVJsmkmwiY762oEeianHSd5WtDnk5g2tCkkVwyQK5KGKmAkVkGXRbU9A9C2Xj8aocpsiQa1vhpqUXqLJUpR",
  "key4": "5NzGZhhLVocjgsHrtUUAy18kDTFtftgBqDtitVcJhe3X7tY6RF6HDuRgUkBuGRrSsANN8dM5AXzjZ5i9FyJcVdm6",
  "key5": "4mfBoyzqCxiP3WgJaBnJU2ZoGqYYwZUEMQHSND2F29hWJNWxjcVG149AGSqoepgX8FbM7njovjVQzA7JirDbND83",
  "key6": "5ipy2eGbnLR88evtqtsfDr4idU7RY8RCMtfFHQVWUtUwvhDwjaqbtbrNmw3mu3UAxHwmVaemYndgnofjPkECutYa",
  "key7": "ZpeYaZ2TzauTGG9UrcKb5HscJZ9JLUk59tREzNXYGwCuNQpGFkLgnHPHRiGZ2dYYWQjmazrGgztkS2vt2CbvEnZ",
  "key8": "2H42aBSnLfPpCPNp5Z4qvmHK8uYwfJxXVfK4rJ4Zeos1rmvnRsHnkw5v4wTgno1VqSvvjontWrpNRG2k5hj38JDu",
  "key9": "5upVbEswKEqmKEUuACNuHHbUXmPSRqSCQL7s8YpSmvbjXw4kFm78UTeV2HKrH6dF4wpwc5JQTQczf75MLXqY1ZWo",
  "key10": "X8Mp14j7oXnrcC2iCjPoTMuNvRtv1gKkno46n43iMjbvKevuevNWaiHrczW8m6VWsS5vyg5vk3UqTpZRKYC3zzo",
  "key11": "5u7gvih6C5tVVnxAVzXhLQvNVojGkiRNBSczi8VGafQ6NdY99jLuxmo2uSLhFSxCWKDQ1n5L8f7Xk2WwGbhFiHHV",
  "key12": "2tmXxc6QSG5wgEn3dPevPp1AYA3UUwHJQUZuviDQ6tUV1B6Gd5q4nABgb1gxPvVamqfJHcrL3bPXU2cmPvSyW5cL",
  "key13": "SrQ7b7tDi5aERYMDQskFjd2tGx5SwHo11aNX94hNxi29RWeFNF6eb3zAFRTXx7WYX69NPBp13fUgtsYhTdbGeW8",
  "key14": "57rV8AMhhvmSWeE9iGqpnY6xLP75BHLcY8NdKLf5185qjHkFzKinNxm7bFFe6EzpYXn9eZCYEqNtCd3LxAmJzBcS",
  "key15": "5MjuZqZp8jpeweKqrAGB883cnKQvZxFZisBSU13ynqJHvC3p2e35ZxsqySXoEjzeBK21TPVR34uH8zcziAPDh29B",
  "key16": "3LRRNujGXYm5zaAEeURaFut5LNDQe9HhpAeRCC3xjwArKgtmeHskBMwDspehXbdJd5f8C6AnjwtZH4VSsaEV96Fm",
  "key17": "4uW4MdkjFYAL1cLXKm9gQhKKqSZ6YHzB9HBPKTz3MF2npTnUQM2yWrKUKPiVPhpbYpLATH6pEBixWfHsqJBYLqrf",
  "key18": "4ziq7Se7MaLDG5MfdHcPawyJc6Zp654ow3BdiThkyPPBuXrHRLFfVToX3ZkmdG136Pw5gApBjGa7axpmT1XErqAx",
  "key19": "3h3QNehKWCyxwXPES8t33HHgRuYq4x9p88QHnx4a3tjjJCt4knhTEwzrTimUiGCmwH7RjMHqBkTc7KaXv4FgWad6",
  "key20": "5WVBSZE481BqExhkpbzH1yW7UotJ27fqB7hdtM6D9oDfzsSYQA2shj8fY6DD6G1dWQiAHC8UpZe4W83mvsWG3Bri",
  "key21": "3SnipBtXJKzo6rm3dhgfWUQRa5LGxmQVDDALNs8vboDgsz8tkL2DJ74sFt46pCjikw1Y5t4wv7i3hvWL2FNHtog3",
  "key22": "P68kCPhtWKiNp2BNfyRoMnMA98ix1ZrEVayag785NPGVrHcsPezouPfe496JPFsHKkskrV3ZrhHwfjuvJrk9B6b",
  "key23": "5DUNw5tYXdXgA1sHvT5Lc6XYtmUQuuywrAzgb4Drxj1DDKm899iLHEznBTcC9rkeSZPZFo9b3qXKhs8CbcwY9wnn",
  "key24": "fWoki3jjwgPS7kikAxfiKxG9nnRmVGW3Bzmz6soToMdd3Pyh1mVhwrXWiTK67JpnbNHvPPzoUTsi929KZy3579u"
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
