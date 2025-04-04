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
    "53SXhrDxuBhXZWDsb4xQbmRW7jd7QhrVVcWYtL4h42C742MDuvVMAZ9QqxRdHTma8Mw9rEHMn3GsCxBUhrmQQ4W6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q6GfcUhdYRreuKmhcRV5ex4mRcALqdiSMCNpQaRKym6D1VvDdiuH3DaVPhMQScBQNGD74dHpp1mo9Yy9weGraJW",
  "key1": "3az3PubD7SRGuqW1W6VXYHsncwD59CfLKGxNMwwWdkCwrr3BsfJju9wVditY6gU2Jc2dbyo3vKQd6q5qAX6SteSM",
  "key2": "5iB7goQ7CNYoe4udo9J26Q1XbLEwkSrmTcB4TLsC7bKwkur9NLC2vmHRdhmGx2SuG48H2dWiMhA7LgUovMPMT7tW",
  "key3": "4L5KbDYVzmVYsL4YHSmpAfbKn4ZGBXcEa2cN9h49mSe2TbKUKApFaUczNpnWJPy1GMqc1Gunv8SRUNTm21cY66Xz",
  "key4": "5J68rhHpyRNSo5M1GXkgeB7ixWxe8MprWX7uxGjMz9eEHwrN9RRFMzdjEzk9WeD1cGMF9E5ocVSCdn7KNTBXEJtV",
  "key5": "4JBQH5SAXBFn2EDLmpncTrs3uF6BKAWdah6jDWmXq7si4mWiTEzRYYXa6dEH6Ew2P8EvJJMuraSLu65cFtbZjtdc",
  "key6": "rxeHxcPpVCM7pmheUKUaimHL5ANf2jmuJThYS3shfAVRrkWR5q9cs6RskTf5k2dpYghK6v1tXcZNCd9KcTckzzX",
  "key7": "RV1dGvJpLE6LhdFCdvmvtc1Wa5xeZD7qD7Fu2hhy1yaQiWuVMFdiMbGHygournq6VWghV2DazneGgeYKmE93U3F",
  "key8": "rji9n7nTsArdTLPrD7iJuxTu5YGJBtyUARpELHuCSjZyuTC2F8vnsX7Z7kxYQrXHbBcic5Lvots7gfwaoLCJv9v",
  "key9": "4K5LPT9WStTUqpyPLzwgBdQPoujx9W7Dm7kvQPmsa7y2v3YgnzJCQq3gCmmF9BnHs4jCvHkFp3XvxemAP1WshAaL",
  "key10": "r5t2ewfb5BPaomJ3Um9Pmd1YoqJhFoh92vSBa3LuJNjngXPvJLZ2vCWaqMucnWkcs98Edxf2CPwAzb3Qhrftfyr",
  "key11": "3ZdLfBnUxmbYoNwFAkqymSRWhFhTURYq6AhjYfbKk5NDrRQXWF9Wxikc3R4UF2wyorHWSoahNZydHo14QdYAATji",
  "key12": "3EGPDoWkSeW2fYpw3sNz6nMwhbf7CYdksKyTNQvBZDLbuCPhJ5xuWzMuyyT7QShsY2Bo2TfmX9zMzuv7KVYFgvnb",
  "key13": "26VQcAR5eTYnWud1Gkg5dWS3sguwzDRaVC9i3hrfrx4mXJdyfH3oSUMN5XPVHLBYZ2D5tfmrqKo93MqpgdMrkqgz",
  "key14": "4fXc2si79zJ9KjWV9sDJPmEzyL8vMDybgT8Q3aSddmUhiZsAiVR8snWv5KuT9DV6WL3RStbDMNg8SPV7UMdyUoox",
  "key15": "4vQuUCKQFSGxqAcxiABrrmG6jHufJLRFAKJC4mmYhcbhhwhJYzSxLhgr1GeeoGJ4kx2na4vL5dKWzpKEUTE5SR3d",
  "key16": "31bJZaV3LmqgqwyjeYGS3KtiR3Ksfsm3tuDY8kUFutx9JGDXQJcZaPg6xuhzaDXajCn2KfasyTZ1NNtRn3vhsiqk",
  "key17": "4ngtw7ktx4rmCGQ8cUUxSH6bNM3YrS1qQCdPhyQQ7N79PL9YV3Ec9FSazoK9YHJSmuG9uF4yj4UyRyaMXvJM9jPd",
  "key18": "4L9gEfeGvfkJE7GQkAWQCj3fLHSse2QoYjEQ5hUDXr4RYwmPrm4E1g1qaeEZz7BdXcLY1VMfYUt2jct9U63rLXk4",
  "key19": "2N8Dqh6D1DbPnrix9g6kTLtvbKKDcwtLJijC6xPL8HEdbHiWwKYHTpiVTG2gU6oem2qEgSTvmkdfgbnJohz7JZtj",
  "key20": "mfxkJDzfS9MVwYAYGaf1yMEUPLco1eRMmbWmv6MDkFbok9g4obFS8NunQ641tqmp6qULZJk9jNJmAarNFdipQfZ",
  "key21": "hrKYGyYVNmwG2jB7QgyWUPuNHuWruhFqbLE8Pesw4BPkkVTPNAdpvq17mnAtnwufEksMRKbck3qScNpsWmxyVbh",
  "key22": "d5zUUdrtu5FjdMy1jmPXMHpcbAKTTKzkNMHrxKjLavETV5EoTHLRRsorsQuyPHGBtgUMJqxRETwhYeHG5XfQS3a",
  "key23": "WNCz6VPPAaivHxArPz42sqARND9HAhXH289A92m91bnyU786rhmq7sTgBLNkLrRxbXbXejvf3CRpcHPhVQNtmPT",
  "key24": "2GH8v4UVJTgPWjJM9JEF3idHRTFrKRrJh5fS4Coyh657GZVCiUdKSnV8CpCchXXj4Axg1CddDkaCJZ4xKpoZGP76",
  "key25": "38bjFvXrFkNS4Qy3reBYJcu92NCMc2sKc8LRsoVToL2HxBQhwFFsDPCP2BGoQ1HBVshztzXeAdyKukmDyfRrrQA8",
  "key26": "RgK7u6tfosuwwaTc9d7e1wpJ5aFZ5cimF9zieXKfhtnfDLTihXugZeRtSQLTy59uumeqL3c7EeELb44sFu42AX7",
  "key27": "3UkmVdqFd9msrhN9UvXZhR2B3fQCYR3FsrWTZS5ndqQGcaSzExCmwasW4WY53TypzU3vRQzbbni1RL4d1BfRYDi3",
  "key28": "4imkxt2BS8VADd3jCfj6ZESMNzWzDQbB2DtvMgife1ccoU4Ko4Pz1gx9Wp2jpFCoYn2FbwxRy813o2H9N83bpk3z",
  "key29": "4WEwub49M4usyNAXy4wUQadaz8EQgNJoapwsfsHNKzP13mPGQSW6sazVqmfStc2YQbx78sBHzri1M9X7X7innF1R",
  "key30": "4DkVuT6XZomti2u2GemRHtY6K4X86dFHJ8UUoGdaqEGs3V2DV61mXNaomJd97Mv2JyEH3osWrozscpzgPjz7uhVD",
  "key31": "55w2CUGQPN81WVoHxnyQ8jVPrw2izExY12BUHe7yKPAWB14ACnspksG2gdawHh4rmvwprNfYun1UJ4AE8KFP9uD4"
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
