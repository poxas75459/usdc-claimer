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
    "4cw8YHoi1MC9fZWDepGkEd7XeMaMeUA3qYVeEch8FdMTd4FSua6Jv8oniZyEgXgCvnCPVato5Wv814dHQ3kWDTs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QmxzKYWePC9YNQRJGZ5VeTSAef4eUSqhFkJTzPg4kg3D2DKMqx5F4PZsVEgA3m9bbfkypo9gjosB2UwU3bcrwGA",
  "key1": "5umr2FyeL7fquCihvyBm7a1rpdJ6TZPfCQTmVsNwUaJ8f3QPYZCWmke9NzkHatFxZERwDbH78tjFK3thoZFZvR2F",
  "key2": "2RGQv87WxTBLoGq9o6aoGhSx87oz2AzLiLucLMQDHnTJRxjS9uK3xP4rkhF6f8B8t5b6Mm435wgnEJaru7Qmybg8",
  "key3": "3uqkpGmbLxyTEHTZNJb98AbEhMT7JCGAKZqg4rwhmPXnn2aveavvgBbkdrji3kG4uDyeZzzQTtz5sT1hzu9MwHQx",
  "key4": "5iPJJLJfsrP5BSsj41fG7hSdW6ceEg94rU8ZCknsG43FwyWCPcJSSjYcYb3FCo2SFpxCAwPUBEh1BBmzYZdxJmna",
  "key5": "hyxEoaknQf3EXv4TAGeXHoYn1ujwq6v46uqxgZVsGwWigFSF7hz9jpjNRYbK1fMZ3SC2HtS3kSYL2bRzk1DHhNK",
  "key6": "2xwWNqALiKvtDcm7iXpwg8UBTiN7rVZqssiQKBaubx7AUVLxNEbeUyjcVSKYsC16qyzgnshwHLWBmqgNwa1tq18c",
  "key7": "3bJEQd8xZULqiZTeGtLefvhgQaNBrJLaiqsmaB6RkbwzjzomBpMLrEzzWS5FumTLbKTFXN5Tt6EhZewgrr5hAMQ",
  "key8": "285ysqzKFPAY2yQB2qz6iaYJFV662JWQw5vendf78T3XywVg3yH4PAFc3dBXLDfpzcw8JVbumZLm5efkdpZ58Rt3",
  "key9": "5mRhQPVUuYgWEpedF4VxAvTWyzVRMVXxCAP8VqPHJEKYJdVF9xok82FRrZ5bJrb3xEenKafN82ceH9qsmHsbADZ3",
  "key10": "5PcqCim2tS5hLQA19JjfocgWXjGietV5QpxGJuXmTLBnSajYk7yYGFz8hhwjeoANihojRfdrwbVub4La8oWvfCQj",
  "key11": "3LBoo3g6VE2VCpnagyxkXYdweYSBAc9QYrF5eoZUXzALTfwkzqwg7ipQkQwJoikLsSKurTCjZb7Jws9uPLAKKk9z",
  "key12": "43nV5w4UFicnFQpf6HszouqJzgDRzB9FykqChz1g8PFBAeoT2FbV2xfgw9eXiRsAc3VfSF9Jbz95JYm5TDuQQeQC",
  "key13": "4uFxUwoj8crjpVspYP9T3kqvQP5Cqg3w3skx2BNhqwRwAMeR3X34mhxvmGxZr96AwVgAx6X1XMQpvz6zGoLsbnnY",
  "key14": "2jL9Dr2MvncYnmvH92r9jFnChWm2JsPFnXkfDRM1X5D2siBRj8bwGntq2MpHoYhV6hQML7HRtxvdBCFT8vkWhWmw",
  "key15": "5SozNrZ38qd1Udk6dtXX4iZpkzS1gou4wC4Fq7tgNKJiPmifiPNYVXTzNeFMwBpafBZjcbqvrwzWQyddHDLJTUpU",
  "key16": "2MxD6onQBPvWGx7KnybBNnu3SVb3qS8nhgSrgohjy8nodNpuHRUH9cUpPKCN42Bj5oid1abXqZw6o9Hkstbcb7HB",
  "key17": "4zNGyoLLm3Q36Dmu1FptVEP5yJRz9u2H1SLtpAjmeRf5ViqbXy41Nm8h5TyJk6K1CZK1GBeXuP1sYDnYL1eRFNSp",
  "key18": "4syhP97eYtftny3LKDuFW45dSm8H2hVviJCNbmmsUEcGc5Bg7d5RnEkoK8pHLAUNWrfAcnD8HX5vhUuJFQV8qKEH",
  "key19": "4uyyhjL3HqVXXN2EVXwww1BJCjcvLuafN4NgMCiyPNmHL4mTst5Nv7PQgQJ71pAqZG4BG5hCv8QjrQGifZzMZjom",
  "key20": "BTTmzHKYbqHM79C7EJcq9hUjrrS7knqFZEwu19XwUfQunbcFHxqgPbpNSmCbchG5GSr66rDLFkfNUdLLHgRtkFY",
  "key21": "3mgfdTTQvGoiiFuXaquKKCuEGGqHdLPDr1uAx8j5Wgb6R5xdBMG9UhUfohzAxT4RD7Mzvwcj9RZgUee4sMRp2ERw",
  "key22": "3gEYU3ANRFE4NAyDV1TKYaxnfBCNRfCvrHVTE6zxyaaFZEQAnJRRC43Azcej93HUNWN3onH4Zt8bULphNYcnbiYT",
  "key23": "65Pfp4kwme68mdhrFoHauSpChuaNU1c442e9GMamaiKoqPcMTu7Ao2C52w85ByjbYCbryS7VeoVuDjzke8V3mkGZ",
  "key24": "25GqC1X2w46ksUwKKjwW6jwWLRsvyCkbvsCu42DWgSfWdu2ace4AHFGDiMjK4wCbfx1MTuwzpVeLLWSUEXpditBt",
  "key25": "2qqheSX4M2Bt5ViBDoLzG8dSLNLoFJEMkhQ7EEFPn36e99ucHtcB1KeXKPsKr8j1u1Mw2uHuBH2XHhXMkcftM2Qh",
  "key26": "54j2oE5UrM3ozTMETFpjVHd97mFMu8KB5w9UPgEnfLX7kUg9Bg33o7URwfhyHb3XryVhgAR6y8jRxJuFveb7AwE8",
  "key27": "b1yPeWNzVfasEbWrp9mEWmpG7k5Lvp39uUmswbgPEXthwEgjKRsgULtFj2bVAvNnzWnGaK8xRYcLr1FkDDpfQUW",
  "key28": "WHPzxfmbeeFaGbtWg3h7PtzgDeNfxS2WxPLdGW8N4F8sb9RVFMVHWdHXYNub5MGtd39q2e47KgKpi5BFYkzY23n",
  "key29": "5XE7mDj4HZkUmJe9oTG129aXV2qAHqxiiGG9N7PqxmypXEXDKL8MxdFYFkg1253aDJ9ecusEcn1pYsEoUomejwXo",
  "key30": "3UsMqSxfD8sDnKeM8mE8PF9MUW4Jevv5KEcgdWCaeSgQcx8CtxioDGe1TbRdJSvdAbo3J3iLo8sAHs63hzsWM2RL",
  "key31": "2MqLqc444skzviR5wy3K1d6vDzbyXDtaaidtivpEkLFugXctjCBJTzPjdh9BtrzyMrtLqSfSpPEkGTbsH1bSatdn"
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
