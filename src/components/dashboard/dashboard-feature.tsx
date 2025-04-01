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
    "3iUND54J6VJYjs9MD4eC9kA5YnCHgZ7BVazufAUFWXh9ACqT6wd9kKMxNmAoQXKXobUgrPm1aygSwMhHcthSg8Hw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QhVLCj4VPfkVWg6o9TWahAoaatDEUDGQi5oMu3yCXpjF66G9ezKbMfrVrGHykRLcPJcePqEc43CAXwfRYSZbTHv",
  "key1": "6DtaaBoKLHsTNcn5FigZZvBuRmbs63tUqFsmxJXmJbkoJ94NgZNpHxUJVcN9HL8BiChQ3vZU1fwumDXe3FEQZNB",
  "key2": "RCAAt3y7fShPCyyumAhUk5qdG8GAnKA9Y6Ujd4MMRkEn1t6Mozs86U6mJd2wJ4i4MxegK2A3ZnuRcNEANnmfmgk",
  "key3": "5eQouf4RbeaZMfhh3SFuJQL2X4JzhWLJ2ZCQC23huUs95G1z2pzwFKsf4U5MXM54StRSaZT6t6DnGEJ1HBT1Vgfc",
  "key4": "3BHGAmg1dZ5MprBpNYHdcwnxfRUDo98joV8ckm9rKd8c6nwDBE4vrLXbUnr6WCtT1xEeUSCkzQVyQPNuYCcHZwnc",
  "key5": "VD2CBFNPyUA652tSQjBFwXqqKzgZFCENp7vjJ5U9ZSdhWxkMKzJ3JqhogJ4e89rFEDu1pxNqLuQ6tAZpN8TMm6A",
  "key6": "4LY5GUJykkP7QtwqxpaApyDewmQVit6LAHnzm55QQnEHJdSndXgBMxscqWYpBsR8M5uT8TWk6ccZWLgwdUooa9G7",
  "key7": "ZfB5nh9TcTEos4PdPF8Efqf3VWKpYDhc7M9ZVX7EEG9Q5voTekqa8shkTiAH6uEjqozgaZ3uYVmbgPSNnwMxqBR",
  "key8": "5zVZg2d9qwrNk5VtDrW9kRRWnJgtB2U2fX5V9Pw5zZAc3bzwujnHDQkn3PeppwvcFicXkhsZNWMNynk4bGpWA8Ny",
  "key9": "EPhR8cA3jmuurAKWnfU5UXwmovm4eZN8YC3TdAxWGfatUvWKqydTwG6g5JRa1ZbmeRpBzE3KXUB5LLhujpwbtkN",
  "key10": "2nCCQa7QwZYzwdGJRx1RLfWYqPv7po8r5NUUTB7hpX4JENmUd6B5STPQDxkXYjUDA9r8JhWNSXahbkGKf3ig1eEP",
  "key11": "2u6q7s7NVvPTKwJQddKqsFLREvE4tNPnkNrwfepW8QgZ5wjzB3uNqsm4L9wpZJZ2Zu24qhzmHUoi8jWj64JA4jwq",
  "key12": "38PbfLhwJsGbZvBEyme2fdtori4JgotPkX9exbj8zqEqjuayKxhFSCfq53VPWHfgtquQHwJCgXZHrvkagrPzHYVj",
  "key13": "5PxkvQC6DnEoV8R1wuVCWyotnzwyMeqyitBdUrR8cdGZsDjceWSAPKp2JpX8bar3pSnpunHiRqAJNzkRaPkeQ1ob",
  "key14": "2je4aeJMVBXPnBBLNzvaDjGCcffK2emokhhjkTSSbDpiBEZeRc4b4XD3anVq4maiZ8g5ZqFB4p5QK59Zu7XyMo2e",
  "key15": "52KSJDYX8oW7A7iVZcxUjPwW1ViGWNn4VUvqM2Rc1bnw32j2kxbTMKnLzNvmdiXxksBgjVvC8WVfRyBgzCUizQod",
  "key16": "3rEkrsJuAA1SZzFbmkRenPJocDoR8gc2487EEGF3Rot27ZEhodkGoj3Poe7yR3mcw2vnX5rqdiMs7DQWFhjftphG",
  "key17": "4VEVctPZ53hbNmKf5EdJsWpDrMdDPQL6y38PtXTvzn36Wnznej5w6RzWwJCuXiBaVUHeiWGb85eyGXNpQsFCaF2Q",
  "key18": "312PaTLi5RbBAajdcMSNGFqj7ELKGrQLuEh4vrfZo9JfodmiEtaMASBP3SNdLVRtebrubSV8AtJtcVEYK8jeut4V",
  "key19": "2nudf7QZfLXPcB8gu5eTAHmApm1LDRWxV8VdoVbmptdhSMS4DPENYU4oKNm3LRki7VQMXskKzzETVph7p32KwLyG",
  "key20": "2uN3FuhocfGjCFWTv6vGqRaToTj3LQdTa6XmqVqNWCdvrJsGBJWX93PhdK6jSVmbhPwQ6Lzmtewij3fiGKg9S2u3",
  "key21": "5HTgaTR62qGcdRwhQMqpZYn36ZhDH73FViPUu31nTAQKD7hFu8333J9ZWmMX3oz3cP3w8diBXb1Pd4fMvuEAnUY5",
  "key22": "3URfFaPx1YKtJwoBg6DFyximYUB55BmbSP5FLabdC5EsoLnxY481VohVxE9YvxvuSt6MTKkGTMpfRDtQcoZMiQHj",
  "key23": "RCyJTeQ14j3GnZZWWPVQtMKNqgTRK4KmW6TGWUmoXDo968V39nZ5tqaCxnxsCbkViAwmyW91zy2TcmYXopsNxfY",
  "key24": "3dU789eYrXXmqppLMyntMktvnKFNsiayiJamfyE5hHJkfcqdzEjkcnrqMC9sfJB2yjjkSwPNeabyGiLqW6CkcSvP",
  "key25": "Cn88LVXZssQG3BXegLKWgpjnWjnsma7kfRkp4PNawAYyfjV44e2hhTxXstSJ4fb9FTAysWB6goHNBTvTi2Za92p",
  "key26": "63Eekm3Ksv3o4Q36EYH77YSJMqrdx3AUUZ4XYYhHxiJc98xDhzKrDsuTP6Z2F4baxy65hgryNY8f5ci9BubZjYhZ",
  "key27": "4TYv9phP4JiebmPtjWCqceNtUX4UiTNmLhMf9FbEEC3kocSk4HuS1regCaAe25ZQbeDRNCK7RDqipX2PyWo9bxSa",
  "key28": "5LCwagG9sDQpuQvEAuo9n6XBD2Mb4ZgAYb9QEGvkRCAxtFgeeT55SjnJdCBXKY96vnnB4rNv6BpLFfbKddppeqQX",
  "key29": "Uo4ZuVh2RnyS9FBJq8WUbW6soJQsNHPFfKKDEHYEgh4jtTjymoAWcWNHTU6STuwqPd3KjoHL8FKd7UBMnGBwdcf",
  "key30": "4Z8CcjhWtBnqAx285QGDyLvwMkd6oRWfvxSA5WQe4ngh3euPYfCMScjzj8A3bkEaXbDPzY19aK4r1CPKpxavHBVm",
  "key31": "3X4bbvWPH8XsJmQFr34jdL29MJGqKWHtzfvQmSYuXzKPkKaG8TGuPutsMgZeve75mY6ySiZV5C3icxQvHiRN6T1g",
  "key32": "3i2K6emnoPmYNhZHX82o7REZpLiawZhDfXKXZWTUfTqgdijysmLDFPwZ4WbhtC84JcCquywp3ak9Y5tXRceMvWuY",
  "key33": "HHAreoSX63dDLSKUqE9vuMS4d4V7LKtuQL1dcNk9FfQWziZAr3Uk7hGzZwqVnJ941im9pQ2CTMmwim9v38nEDrd",
  "key34": "fVq7UWwVLcokz8TrNGJAwdB2fsZKQ8BhbFzrjuhZ6gjhuXhQD3j4m529x5MnxpuWiYFoDEiwTcVh3MtG9EVEJ89"
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
