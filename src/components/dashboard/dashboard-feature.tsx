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
    "55UvG3F7XHaqtBDEL8HCv6BWED92CR9r1omn8tgxvpRRskHxeM3eRPQedQv62JvSKWTBVoCjnsHR6zwK3GRA7T7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NabRki18hANWJ3t7DLoPf5ZXdVuiF3Krjk5AFuYD4CnJyFbx899yVd7Nm6AHGnSX9YDr7f2LGmMrsKJouwY5Gqv",
  "key1": "4j8u6URnrYzA7gFZudTh3h8Q1xPWniUXHA5VeTKRsmNYaYmVQGwUYmtoytaXSZ4VF5sLeYedikSGSM24mbVPZAA8",
  "key2": "wALd2qDnngvyK8ysN8FgtKPmsV4gt3n7wrf6T9Me9ePwaF2Dq3jSpdFAjgZF7PPZia7gKNYCBmJ2fFmiHbbzdig",
  "key3": "58Mq9H5LkbED8xAzFMh3W9t91uCSb19CwYXhgmwcMag3NjFCqtsate6z64qPoqKwZdj2pfYXTZGt8RfUBJrcXYo9",
  "key4": "gBQNYQuDF67E1zA7iJEbxoq8ReuyCAdsHTRv8Q817619niQL8hkDDKdMJTiuKbTsTvszXVPkePDJVXfZTc1S8uL",
  "key5": "2iz6oaeKJWENqRvd4mcyH5o7MVka4jVwQYR98oJkvpL2Xnn1nUCmMppN9nzqKzc5DhFW6HsaBrHQNEPUeAqt5c8R",
  "key6": "48XyLp4QpMHdoYYsvRG9wrdQDQX1BhVnGeT3dDnYZnbUZk1V4BRtSM82eu7aX6LaSnXX25CBZeeguaVTXcUTnWeS",
  "key7": "N1P1NRcPrFTjyYvR8T9XdbackKLjrYrFT82TzXuCDjQQJdraFY2rmqs4ZhB67AKtyKaJAhHKSaPYVaXmnL6YmxH",
  "key8": "2fQniMgKr2HJax9rSQv9zKqjnTk43BKF48X6fhankzRmhetZncU7mFMAdXHX65RZyTD1G5zAVeEQGYAc7fiaChB1",
  "key9": "2pZ4qpFueEaBuNUXEPrigQasFPefp6UJ8AWBdmbpHu5f3AfK4ZsjNCQ1xWTgBxnpz4MKM3U6LHiTmdRkZQzG6Kfi",
  "key10": "4vefVDV1giDv5rz6zQmgfxcJe8jx7xp4QzQoia1WzpcS4aMsjycfqcXGPRtpWnn9N9wnBUfGvmAwiH4SYSqLgEKd",
  "key11": "3n9NgUzYFurUKeCL2yoPfjZUqzukTPwPfECouSqbBzxYnGobaokBrMa7k6KbvnkJUFRv76tJR4MZT2PnJ36mxKNX",
  "key12": "4NeuuJQF3ZUr5zJtErKD9u9rKA5n1oBzomnEr43yM8bfe83xv7w8EA453m2zvHwp3k9Xj962ag9f4e7chfZm4DSi",
  "key13": "3cZZfZbUyKX5S8UjNJCEA6w7SbRr7NuFJXUcHsebeh35uFyShAKDUyiGN8krZrL5Jd8gscTEqWGE8VyycgfAH92G",
  "key14": "EgHkCppJUkzB5ZgFPiV27FRMPtqCbEADsV4hcrbXrXhmDN5e7D7RACQA3c5WoKGgs1KP8uUrpFs6vk2rYqYMFdi",
  "key15": "6jWg8WFJtrrZjneV7cL43pXuyDE3NoiEnXpyS75jTWC2d9csRs8AMxSQ5Q4CmQED5nR8mJ2cQr24e2dS238LYcZ",
  "key16": "3nvmy6HCEPLfe1Xs1iNhttxqbHLnzJYM6wFMcg67C1LERJ8U1eMHE9CPBzm1E8x5uq3MCcTmowLqk13LvnE9kVwi",
  "key17": "5JmbUjza9JsNogRqZNHTg1rrfgg3EJANWxU8DwHBap7AxXWQsT1eWt71RHeHJosT4wjRJQjMv7BWE1AdLytQzFEH",
  "key18": "3McUGDejSqCqNwaqDh2uc5jzJxvd17U1JgpoVvtht4KduTY7ELnY1UcHzyh4pr8xd7wzNUCAno4idxR3vD73Z4vB",
  "key19": "4Sk6r3Fs7h7Y2WSxv4mSieptXZWiz3P3hnkaPsgQWSDjVVyMbiFT1gwP8Xraauh9d4RFa3tQTWXnmCmzGm9CFBVK",
  "key20": "2CMku456XqD8uUakdoRmG6oBy5fkjNZFsxWbUthSETNKf2ZmH288HB9koMzM3HhVxzp4gVbC3oAL3F4ngbickkim",
  "key21": "4zBZBEboacJz2jXtRMkLh9pFCRPP26JcM1TGu2r8o95xpTRs7fRJPWYj5vMKk8T21omZf8BbBPrpR7G3U9C23TpV",
  "key22": "2xuUYw3XmxZ8k2q4JtaUbHNy3cryPwjbpf1tcukS8zhgboaJ2joyDiYTngvbafuEZxb6e69oVcM6em7XuWFczQbj",
  "key23": "4ZYCcPzgYsFyckdXgao79C9XhEW4JfohoRgSxqaYaGKSzLZDpe9zCapTzT5wwzcjziesjbkgpyY9cw8NbZDgNaWs",
  "key24": "38ofpKxdpBfWwiDGppQxDbYToZKvkT5HmRysUa15Fg1PjRCcTdMiVwQuqwKsQR29kRU4WtJ2WUm8JCcUeXJ7xywK",
  "key25": "2NL5DmnmkVBUG6GwLs22xCJzGvsnMcJ6WJD7qPRsKZhkLh7khnBBk3U8GJ6XR4GAD9BiaS7RyhySEf8jiyY2WkhA",
  "key26": "3mupLKqt6WE63PBvNP7aneNkWPzfoc9gTR46yzwEE58CegX7imE54Ctqq2qBCuf7nEqegSYAcZBaBZrio5uvCBFB",
  "key27": "cpoMPwDvxdviRDUbxLMJTScLQ6qXunpfPXinCH3JnwnVT5omPdAjsZBpnRRJcsgStrcFYzRzi8Um7ZKWa9sTgTE",
  "key28": "3vWEDXYAG2EgSvmMMDj9qJmEVJ1X1XiuoQLbcR89gopBQX283nVR8EE7YVK6ZSuF6kvr3q7BpthAK5h31T9DuqJL",
  "key29": "4HZg9LND9z2RvwXxwa6FabCYRsaJnLASAUHGBX267xeaWhwimc6Gc3NdA3NEciM4Bzakf8MFfUoaYZhhrXZSCqSF",
  "key30": "3y5AjqxCdN2rywCDsCbQiUDaP2XhuGMj431kbCiBzm97dzzDNqSfo13ibmhPm4S4MDi5APPzbYcBtHrA6T98wZV8",
  "key31": "2mtxN9yFrsRbfUE3r5tFChnVh2gN7dusmoYwZmT8uiqbXhT6kAXm71dAoAfYu5PhVU6PQspHyM47UFfPGBwWvMHx",
  "key32": "gDYTXHSWNBAuFq6vLM864PnK1pgBmWjRC2vFcvrpcHTt1JthH1QB1ta5qc8TxY22S89oVmFcFaLhqtVHqSugnpt",
  "key33": "4nbL7qWmYPD1AsAX5tT3mBob5ScJ6u74KY8MhVaDfTBoKuKwQ1U2ReouAZTTAF3rS8WF25w6LMJRzdGV1Ap8PR9H",
  "key34": "2TbZYr16XxKTKf9diVCtqohNesxHem8jVsz73ESaCXzYbdzzD6ahnVrU9iNofi7W95GQZ86UnmwhtEVkYb3pwauS",
  "key35": "3RhEAiaD3bJhNnPhBbkU8HhHxF9AZQoUbocBHe69nDTvTjE3CFb7UvhQHMf9kn9oActRr2YhhkUCmLpC2J1hWaQJ"
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
