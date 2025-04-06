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
    "2FcjasFUS4U9Ebo1bUqdZGm7pCSX7Bzt3LqefecZG9TuoCg9yrHccazJXzvrKjeR4QnNTn3PeF9CtUAHmvwB2RCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7hg4ccotd8C9W4dweGFDHy1sBE5ZJdmGtmoPeH4MRkS8oSZYujvEHdUvHFV5uV3R5BfAGPtHRxmzuRrkMiEFC5",
  "key1": "5Kqh1qmbiBnxHfGWdBsXNrM7FVCx1rqeUkzQSrt747RL96pbHbQ81AEfFCR1oijVdWWHFP9KhDnXqKRRajkHFMbg",
  "key2": "5YURusc5G9qwaSa1dUUeR18JbyY2MGJTMJoiUW8fgcDSNAeemVoxzx6BTbGDog3J5HMp7tzcGEnGoniPvAeYN7Fr",
  "key3": "ygGyQMcfSJqaa1F8h8cN7Rvh7j6eGAD9wxy8y4M8CyjNQkRruq2NN8BdFvLedKCLFUJg67gMkurQmnk1nQRDfzG",
  "key4": "3m6uug9yzVtKHKsLqeYaMvEp1YpNygAXDDPj3XgKEhuLsC5ZuH3AfmtRxi9QkcrsgYUnjCbnaserFHn8NexCuSzQ",
  "key5": "4mWLcRetUUQa3uLcLJW1nky3nSVpv941uEMSPtjv4jtA7W12qb6omFGHNbyswSHJ3We84gmEqAdZVp1JvUnk5Rtw",
  "key6": "2FBrhm54oqQAvednTJdq9c1GqWtZMhRXyCUAmia3D3SxvdbvVHwoPyJRgyLwZutXEB9fBNx3KFRuCsdAeqAq4HVX",
  "key7": "3tZ6Uc4vzu9dzGXCSLXpPnXMv51HKiLPdMwhkZK2xJoxyQRybB7prbCuKs7xLSb7yW6S5T7eiv9843FmpfCD1rQQ",
  "key8": "j37xcyQzb5D8qxzCVSTcZt1Fsj3Z4wGb2XTYnh7wDk77HEdi3nPGbsF29ipcLFjwemf2pP1b5WhPmnPV1ArK1Hz",
  "key9": "33PXzvYFaZQ7Wa5NLLp8aLbr7DNTeDspBSznBnT18zNjkCZLb9fc9Q4eBZnmUF6fTV2iMKMQxZ7iAVaiP5hmHARn",
  "key10": "2ypmLEb6qiCRNT4F5fG2iDnQtcVec4zcSn4QBXEj5XYwPvri8hK2Lt5mozEK2QEYf5wqxuMribN1aT6kTT6TTW5i",
  "key11": "4B6hismnoqWNEVSg3r1Gj9pboHq59syRATqmvAREspqzLdXmKmx1vbxvqfmokam7SYxujGLr9zw3QwosWzKLT8NY",
  "key12": "2BAnVG21WeKd7MDQucrNEPBaxJq2omfVBwmJD3FoukWsXELE7NXz4ruhFzNsD1PLoWMgnwmvjbHDxBm7sYRdahF1",
  "key13": "49nZnj8AGENQ2j4mhUSWgwALNtHeZ6aDzEXJfQ9nyNie8TGRYX8QqdSKcmaSPhWoT2BmtTGDWT2JaMY1TpbJKvyR",
  "key14": "5FCo3DsN2Bc8hQvCpSmDQv95MFgBSkxjZksSWmFoiubDyogwAZN7MATDFhVP2KArXX5oxnQeAn3gMBrXXPm1tbK2",
  "key15": "2818hkrBTFcovuArrXcfMCYwZZT1MgUzzKyBsVKt1vFrAmQSSxEWozDoCCSHWkJwCgJfJJPVrDaU6cfCDy9sjjtD",
  "key16": "3QSqnQV5BUr37kgpo6PjfuchQoYGDW9d8nbHyToAUVcCVUu3vs7QFG21SjD348WwbWjQsWuvQtDDxHkgy6nm32dD",
  "key17": "fEC3RxH3XHKKXPo8G85tkQ2EMr4FUYr3HdKdJmhHDtUpU2oPyzBdY41KDyB5rYi3AVM5mik9G44hzaAAQJBz8g4",
  "key18": "2eecssUqfcH1AoMzgLHsbBDxLB11mk9aSYyH9tH9vhYYZwx7K7v3z5fAJCRdox32qaDLJerUTSe57zmFNFCd1uD6",
  "key19": "5sU8VTjpouzXAgi5bRVscwBKyxEa8mQKgSq277SSJsxS4BMBDSYeS74YDn6PuuDK2dSJtSPXcZchSL3du7KMByPz",
  "key20": "5U7zjDffuhYZgXoqqmrnBCk5MqHAhJ1d1Q41TJW9QLZiUQqekQiABrDKCCFArLymtUBKDnAkybVVh3N51sxkGRCa",
  "key21": "RFkNrCENFSGbkrY1ynjJwzkZRYkoSKytBKSTDdLaeoXr5U29LwGtgoZ4RFuhB1v3rQDJ7tKnWCpiRRGA9mtKp7v",
  "key22": "2qFmqw8cB5cTYZFw2BvqE91T9GT5WGYxie4arc8NvUmKx8A8xhRmBxLEBv6bdoBEzPoj6H7v2Qb6Ys15c5cXZNh",
  "key23": "kkcJJCRwjcT7eJLD4Ab9nLPkVyZqKNmKK6PJ2fNxrqm4bwhQ8QsFeeCcg9aSWbxCr1jBw7Wh4JgGURph8iwwATT",
  "key24": "3vQnByyYtmmwEp3juYggsLHqtgNv5YEJD3NNsWRTxe4xKvkvCxB88ZJ6bJ6Fkp3H2REnRPSRDda2nn1XGQsqpwNp",
  "key25": "wVzi35TjtGwK8iQrd2CMx9tbvBVYRXKkox3srYQCXMtEMcCuCirV1AJGwcf4m2sCv5yjbS6AAZ8C2WZ1Cg4t3J3",
  "key26": "QVTN34Mkbu1mBqNsJR2iwxoo4P8GAF6s2yNtrGnSpRfdWYvG39Wx7eaPkYtJZs2Bt73SWRB9PtbDCFgAipWLSay",
  "key27": "3UJpo8zasRYDJH6qCwVuVPiwwsciHnHrPWFZBntbwmY2pXtPD4NqmD3NxcgRWVCJDgwex4KpznnA28oZnMzPhgMX",
  "key28": "5UMtJtzWCjJWvMtTvDBxg2g5i8wygUYggTt7MZb46DkRxJTpjCR3ECF366sszwWRPb5p7YUkgk3dseorHyzRwqrz",
  "key29": "3kAnTFGVvXmCtcPmPPjcXn5Ly1UNdEX8caYFxU1X5A71kqQx5BEbc5ZGys4L815MRtt9wNPTryhCcwfppesYbRoZ",
  "key30": "fRzc8xKr4j4aES3XA4vMppdhofwLr7HU4qBhMJwF7kcP1FcS32TCZssLKMnsdzAUoLzsA7i4XdUWw9BBjz89T8U",
  "key31": "56FgqvpYuLQLqUZeY8WhqYDJz76qRAZ3vjYfrrFSc2CbBAWytJFAv43arfyqMtxSByk5xPDBzJXEDzSmSS5NRMXw",
  "key32": "vujQ2ifNHMvCeaaQoFiqy71tXZQMgqrFBfUznxVri8RrBE2TgRicp5ecKn8S77SdP8roYxBe9fB44d49ZxrTc78",
  "key33": "3xUYZUwU4C7mqU7p6jP9dM6idBo63RLZ31DAWnWuaavBMNEULpHKtQjAyLznfDD2uks6PMySTY6WHvvkEL1ogEtE",
  "key34": "st3CGcCeNT2tsNVT2K79W7sLXLvSDZHsqc8jB8Em8T4tYDukNPuqna2WZiYgeaC4SQxZAyXdWvMQDPUZPTJJ6Qv"
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
