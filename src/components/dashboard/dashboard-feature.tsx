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
    "4tstvY9Zi2hbRUgXa9G89WoWmYapYYAs8drhh68kjwcRfgEz1op5o9JM1S8ufvs4jyF5BJXKHndSdAoKb3gigPiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BN6HL72JfmZ5edJ56qiRYFzG1KhH8CffFzBPA6u9TZe3gbxn3St33gKKmrTPySuGSuP9uybXtuRda9HrC2NJQQU",
  "key1": "4wrzwNS6tyuKw4KQ12Tzu3s4QrCRVz9vtJmcku69hZudok83VusFFnkbCn2aaF6B5XtJ5xAUrZi9qyTa685YJwtn",
  "key2": "5RmVE2pCG8fvqDVMGngn1XP99oESvYZQdNd2vS8TMfnV5GZW3SFt8sWyxL3bBc1YmqCnFqQLuFrisATFqaYZqT5p",
  "key3": "21373hx3uegWvQtymNjygci7ukuye3zs57v4eTMzkdvpT589FW6Ei6pnjaywEJQuu4tiKPzvZTnrwSoGwskckppa",
  "key4": "3Yw2Sd6nZbZDrStUzgYPcKTNTBhgiurvVHkLUsE1X4H2mQERTWj19cqUVa9v5F2dLsxZjRpUmRpRL4AfvREm8ZQa",
  "key5": "5pdwyqTTPbAQQHMDt6hGEAZhuGGyDDMqyqjC4uLkGtVN1GnFe2n59N6Ua6aZ6vCynBFzkH7Xz5ZMXBbwirepZqqb",
  "key6": "482aKcyfZdauMqnAHkcmwRDJpNkuUz7Bzjwrq3qsVy8KXcF7nqe6puBFpDV6xi6cEwcMRh28JFpUvNztYL9iYqYE",
  "key7": "2ReNuUZEQLrwU143UYi5ZKMB6tEpN7xirkHpvpJ8YU2Pp78PmFfrYzHLsKv3EZx3pzAzPvstNtoJccqoM2m5yrBY",
  "key8": "3QMEXEV2FUbkorZd5MWfBY23Zq1SnwASDVQt7mkA2M2avy9ymCnxqDESj1zrtN7P1fwXekQMYCL1Ccsw7zGGysZM",
  "key9": "3YVVJLrS3TeFYFwBWyjXw5r3JEhNfutx8BGWF3FpArYB4vdqUxo4aYYL3Kab8pjTLSyxmDLsffcMBkqwpRShPoAS",
  "key10": "24nay6T4gPwRAm62NSwBTU7xuHDymwb75uKv4EzTAbKUVxf4easRBjc92Vx6QApcXYydDv8S11d8AEVqY1Gj58jP",
  "key11": "UenzrLtwsGnXRTyVQCBtxLTXNJ7cuKcukGDQ4F5rrxYj7UQiKFXAK9pxL1GoiNEUrUh5qTseSMMoLAYKKWX9wrk",
  "key12": "2pyFSXY3vMqTeJQqNWLKaavT9P4MBdSpLfPEVvHANdmaaf4dQDQEmABKbpFSBw3HkBHHGNwUmLrVo3sixMX9QEwn",
  "key13": "3yU83Ay16dmrWaiyEDTwZuk686mAcPj5bU4722TJnS76mqLnMvsssu6chWK1uts66E1HJkbi121X6rzmqWQpCkpk",
  "key14": "3FrhbVRsRMbrvVtDvn8Y36AMTb8P59tQB2iYDjRFWicX2CxYMSNhUYJ6Sgc8j27mkm8HmrbQ22T8kK8ugFRFXGqS",
  "key15": "3zvVxJ9jwhaoXLvHXQao7vfFyLdCDqbphrNNE7EFtqszgaG27PqTaoyLxxLUxinzhSZV8gJD9Xu3UQpUwxDH3GYS",
  "key16": "3XfUrUU5zLnLmJP9L6uqCwywKDxx9XiXSbTZ76NEcWGybgYRYcut39XAxpMw3TPSTnXctR6jNeLUV44RmZHSQhMt",
  "key17": "4XWAwqcGVZimud3kyGCgMZbTXirgd2WSbx3UcoGi2zahZFNAsURfU5Rh8n48okNhwmkCU3yVy9wMg7EUckN4G2ea",
  "key18": "52KQwb1KYNJAFW2jTj1Xd8pvARuHaXfAiwFpWmedCoaQS7939XZTk5rspEjY3pnBgzSsC9TWJUyF5uHD5Yu3RgBZ",
  "key19": "5SxyQ9aBHk7EDhn4a4dWfif2NESNB4RSsZuaWZkBCDS35rxsqhc3D1ahcaJdzM9Bh8i11gFWDnw9GoJJqD5pEc2i",
  "key20": "5S6g8PV2Bgnj23979gWiMS7VWy7jJ1N6HtJFvtzfL9338EtSHhFCne4wQpd4HUZWKFHX3jzJNqNCmsmJ5mBQuv8h",
  "key21": "YSuSPZ3v1cvTcUp5vzKBeoVGYs8maL9pRjTVP3KwxGzjzrqP8RfAaFMo1NgA4w68J6fW1catD1HEBQG9pqrc8Hp",
  "key22": "5wxATUZNKBitANYEXLhAiZBjDmz783d6u7jkoBvPz18dFLMWhgK6ArZnPY8GZWcHT9BiyYvN7FogKeJAvxMZWk1W",
  "key23": "4HvxbNo83UaAaWUTk7VuqWyFyGR9ACbN4472izx7drfsR9fvthMouc5wuzgtxbgucA1NuEKpv6qugKv2zxreNXu7",
  "key24": "dPWSDARagZReai1Ngi644xcqapVEJwJJohpaVqn4N519cVdDAJQhr2zfkRJXpTRGL9Y6Lymi9FUXZiqxTgpvmcd",
  "key25": "4XszjRvHnuZi8gMBGwghZxWMDRLA1qnaEQjRDEtRMHByfJfDqEuMcteaoHh1QU1nPox3K6tKLoeyAPyiTEnuruKx",
  "key26": "3z98J7yxbVs1Ufi9TrN9N6jns4ujqDV3Znes8q5Q7EmiWh6hHLXgtCAjMccs6JS23Kn58HwLCBCsd6d7gpkqKvYB",
  "key27": "YEfa4jpVT2TQ4bFFLbUR5DN3jGGoE4zK6mRxTAKV8kqwqkxBVLd5tXTyQaUGXc641N5GUXixJkgW5JXaHFGKpZ1",
  "key28": "3zz7Tv5vbGBB9BHpfHMFrbAozUDwFNAZePeWiozXGvFCYndEJdZEcDsPdjAu1k1Pu71VcFBPSkTWk5EqKGFSTyVR"
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
