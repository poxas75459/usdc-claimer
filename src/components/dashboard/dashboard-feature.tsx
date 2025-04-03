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
    "5MvhhmXLRmdBKABRxbPDHZhSc3jbumQpbsVfqqKtfTQ3Q9UdW6poDBMaSMNY4P1tHf5s1mpfijK6oaUo6wd7YZJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "neGuzatPAQUvskrpoKcqQSr2iaTN1eccVjzseS1xkRkjbTwGWDUjWecsZ8CcY4z2CacfQwEi7UCpB6R99eX1GAD",
  "key1": "3E3VSanP5bbd2RfCcrpt1eBWycvNizz5Kb7sCWtm2kFUuYPmQsCoq75f4Yi9PGFwZvDnDEGPbJWPd8gbWpUoAvLU",
  "key2": "64xu5Nh2DNBXym7oM6SjdXYf4ndAgtRfW3P7Eot36M6fHgjeL8MqWny81BRD4PnjzQq1iRvRu45EG5tBBC6zHwnn",
  "key3": "bsAZCBHKKqmYdA69mxPhKLjqsy1W9cDbyfeN6hocSsUmZNfzhBWqHdwDsVQCmohSwnqqugjReK8c2WiNm1364gB",
  "key4": "somKLVDn5F8LBs62eJ9yz6r8YNdmuRL1JrPArDytgvz6Wafmj2DqurMH9bVHrAhCNjMNn3XmRQYmjiG5vRy5dBC",
  "key5": "sWdEHpS66LfyxGuhvQra4rzUVEp7bKcUCS1n55kkKPSGXBDCNz2MQZtMvCzzhad26vvKk4gAnB4aytbSMjvVJYY",
  "key6": "3Jy6kNz3DvjRLV1W9UTfAXe6bMNTnpL9Rdqfyf88BYRMUVnQRwppwsWhAjmiF4MnAt9ATD8cX5ThFPsBCq8Bc2gw",
  "key7": "4fiBoB2KY65vpWkyQucpZPWg9X8z1bzjbbWWFVTW7h8f2ifp5BLL4G3M5MrrmEwRPiaYx4PyiCv6o4pkzFzgvawG",
  "key8": "4xRtsSTvhc2T1BkX6Mybz8pPU9GV7tSWwZ8W8ouFGjybu7VdDBvQveQo4TqRybypXzsDoepiFYZ2AcC9Pihm3sWM",
  "key9": "33dycWGvtst67ggthLjpbaBbGY3DNjKA8tPcxh6pvyqh3vmxRupNAdXW7zMVqN5pcY6Lt9vwi5oA3WJpbHDiCKh3",
  "key10": "25BC5B96gR83WpQTNUaPb1k9xHViAKmVE6PySbSGnGMRKTnYo5mdbHRMkv1oRxZF4ZVxYd9TR1LLEzjhuSxoGmYJ",
  "key11": "4pudrhnJywH6gXKJ5dPErXRV8cDsrrAiDaJcDV4Zo5eEv5HaN9WtgMyC1KcC9nF4Y4UR8kSagQksJXsq2xxLLg7s",
  "key12": "5Ys6SXwy71Eo8isWEXqf9VZkxxPHU7QLui5ERrRQhv1AYMT4gpLqVRVDXT2mPTXdE2CH2VeXPwRNmDDvcfdh7brv",
  "key13": "4rcqxcFUYDfb9r5TJzGHAmPgX2rMVgTbggJwkhUpmeJAM79MduDQXovCvdJ7VTcQ4eoYx1vkuqSd78hxQ1pnStBu",
  "key14": "nB2rSA6GoeHv6yGNLG9uFgRMsgKtVEE17dYG52dsVWVXwCFXBmDDXSFoEb1FsYPao1p9FhvBtsbq818mBacK86S",
  "key15": "MicmBf2NqfL2rHBYvQcfsmFMVUsZ4GxEhAEtBfuZC4Dg9BkDLMCDHb6j2AWZ4prJH3m9ETq9HMuYyyd68WXvJ1R",
  "key16": "5yZeYuiiSsfKt11K537c2urvz1MzMj85ySyy5dsY9HgY9WSwMdHXVpy3m5i8UUd8CRjPy1EEk2awKtjpoMgG7ja7",
  "key17": "2dx7veaVvuwic4dAwPs7gf1Ss8RFjTgwSfFWeoiDaT6RomB5xWsHvMgwkd2Yb4D6VBsjnBAM2XdzfLXfDgsBYBW3",
  "key18": "65fH8xu2GEuUtMJwpzg4mLamxfqAwxpGYyigyLWqHPFBpsiAU661sHM9fkRFfhRTBG6RLdSNPGVAyakdqRkeRW3j",
  "key19": "Xd37ZRBb1JaxvUkBb3zquitqa6uAqu431Y9dUTcevHmLRc6owwcdaU4Ymmfc2dGUjZaMVn32bcT2EbxXXnzEqbA",
  "key20": "5MJ6hr2CxfHgcdjDyspzqDviuj6NfzaQi7jxxwyjbQsMydAWpWmmLgTYBy5zbw4QgD6siKJnjRAhPwiZkwt1ckwt",
  "key21": "5wb86rqxwo3jRMFxXBHSLtGCT4bowkT7J5T7pnFexngqcUih9UWeLrYDLHrinkafDZFTH72DT5AMPaatxZKi79KW",
  "key22": "4UkCLuPBKWThZcnht6J4Eo4xdusUnxjautDzUuAjd4NXEdbuGRcBqNQNcwvMHokZEHxTCgCVpUuReaKPzqdEYw6i",
  "key23": "4GkqoPHL1LJHvrN2GGcFPtB4mc1ScUUvXM76TnVQWP2MdbqZv97QEmF4D9ECKXfHMNtiaJ1A9rZQeMC3Xvb1DuvW",
  "key24": "q4HJBNPUeV77jkzhFEuGQq26bZ8LS5dnPWXhi7v41kATQwe1Aeamx6PHghUtFcBvgAWJcy3WsrZMmhjKN26hTT7",
  "key25": "26a2JECYeorTVtLxtmFacPVFoYtYEXQSSTr5Y2GVKYxgZtwm1i8wjBqiPevZQ8z41ksGrESy9bnHfeyMrwK4PYcQ",
  "key26": "5zpe9gG621tSv6zsrxUkSYkPVP2WbbB4ZxQpNDjop42Q9x1gppXCapSxj2cz7tDQ4FsRQ5NmqrEMRJXrtBUDmLt3",
  "key27": "2XyB6MBV4Lxx2yM5izqGSLF4kbNp8RyeHR5H3tx61dM2PiZjh6bXxdo1zfSN2zWsRskwFSSLNcdUbmyx76NFLpBZ",
  "key28": "2U8sMbgTno2dAVZwjUNmcH7CnQbKhKSVbcxGGwme9HETULknYqp5PeWWaFpW9cAn26MYYKukADL2ubBAyDh14RNm",
  "key29": "5xd5cxtrtGbbvStnVVLQQG3CkLDteWMPuRvLwuPYJVabW9FqYoWTsjuEfoo8FTdEYZeEBg3RrEHCBkTXzkij6nGm",
  "key30": "3sZ2HaMCqHKSX2BPGpeYaFxt8PTfdMxQWMpdk39K3JkAW6sqCfmTxANVYKx5jCPDRYQd8CAoE9gZLxg6kjzHA9Wh",
  "key31": "4KCJJpEYaEd5rAZDR3GFNcUdTKW1DR28q82LQng6kDRBv65XiRdyFSRLHeuyetBGcFrxFZn8Mi7zZ1a3qe83ff1E",
  "key32": "3AK1VpLxGsWMUgoevDvCuQZEDagLUTKzPgbunHqChXC13YhuT8bW8UrESdc7YuWVqDfThzeZRYpfgHjDqo4nNPBd",
  "key33": "3DxXeJeqgw6QBVYCCxGFVtHvFiUnY3Ue6yt5rhoK7GRKuEq1TzMGp33d8RJidvbxET3BBhgPufukWFwbuujGr2EV",
  "key34": "2MXKt94F2Bz63YFPP9VZ9vEPDtPiNeyMjju7r7pUcBead7v4qZ7grTSG9WA35i2xsn9EAS5VfGdC1sAcyxQRx5wF",
  "key35": "3fm1WxG1rqNRdWicGH2ANNZVwgqi14hYfVttdtEgsyWTZAYPjbuE1dk4B6im2zieeCPDuDGLBESfUiKsNXBMYps",
  "key36": "LCUVRqifQWEvJ7tSen3bhHaFv8UuCtyT46WAWCkjdHhyUYkDsp2qma7UrxRQ2vaLdUhZLAR94ZugckfU4Ccihfh",
  "key37": "5vCixM9oziaUYibbUHXPfQUYv1MvZDKArTg36nYvxAUoKr6MKU8B2Le3hhbheJ8nbh3AFbj2eU8CUQaN7hbPfzb7",
  "key38": "2cZkvLhYEEAGr6Sv68LEnn1a5josb4y3eVUqZoYsg8jodxQw1tKTsubJRt8BC8t7hhXMwpNGK1B7jXMJUkAVtMrT",
  "key39": "24gN1jfSfkEX4Y8dyxzZfVmrLrwha7Z8vbaYrSbotp4H364gHqMRn98qNRsU4xRDH9x81gSJj7Z2cnXqE5zYFwC2",
  "key40": "2gk9D8XbF9UqU2FJTDeX8thuXy5KtgYCWcR2jZ1nSiExE6Vnczyr25mcf7qMMWSGp92RvA2i7oPsDGTGHYNVMQAJ"
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
