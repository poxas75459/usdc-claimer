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
    "4mwraUYN8kE8J8Zhq57YNDW7AZJ1fCneExJBqBe62buFKzoMWjGCmA2S9eYd9f982Vjg5tqYeAdCxAMnLQCmscd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cMhtxZUvRZfZxL5BvkssPgXFXwHD7kSuLAS2CsSutg9Sdg3NunBsbFbkGR2vdg6ReDxe3SLZHPUro7i9uCnCeNc",
  "key1": "4ZwXPs5ZsR8ivCF5YuztCtSydGD2NPt6TFRgtGg6vkYE8Muq41QERUhdrwQmDvVBiqmQWmf8ZngFYU4ds4GX3eox",
  "key2": "4dxBZezFptfgbRFDcVjm2KNZaDsqfdXxuPnJd6JAdsyFLAKoUTcakiDufBf88aoVd2xjRXQxeqg19acuzjEB3uXf",
  "key3": "5vtcwwwJDHgZi847PL7XGTQraTESmW22uFjKuhvEYYpFCVUpVPrUudjtxz3ezHeTbBsRoeVV3wWmcrJdUFykEVC2",
  "key4": "KepghV2JbMpLGU28CGVWvLwWrMeP3JMAdJojRoem67qgxeDwrxjgBHksANemhuczbuEAvyyRFH7V3gKo87BG4VC",
  "key5": "FqekKLUT1QQSeot4eERcpzHxZKWHqoiYDfyoLL8UUeRBtj3Vq29PU8kbi23eD5f7iHiYuuZwV4auhbhwboQNWJJ",
  "key6": "3fnEgLPh9bAGCBXWEojEm5QyEhjcUghknuVvpQgJdLw2frS5u7dUFh598vcPPqL79Yv4YcY9vg28LT4sTfj5y2Pk",
  "key7": "3FfeetQLCtsBVKyH22LXaxyqVAD175LisyCZZMtJbhpdfc7wnHagSTex2tgBRMwGKL6mVyNTZQQaY4rGqvav6u8P",
  "key8": "4A7bsYU5h2qQ65ZgD83MNSM8cDanBHTCWNHNreVRwe3sbog9zLeNUn77ZNkWxi2vKsgjiyi1ePEZD1PAUn8u2MiQ",
  "key9": "3Ha7gr7uxXCezXL9V1XAqbCy1V2ntNMEmmCJwDBPFktLfSXSt4QCtVTpxchSZ8XypaSKdsfcPoHiQBDgoUWCZDp1",
  "key10": "4yeBVjcFdwjaVRwNGT8j5gw5hDViMzrvDb76GC8b8bqQCTUuNv51T88CoTSW7iRaBbt4McJQsKSazxQaPRu7pXKk",
  "key11": "2GdHEDAqByYAc5YuLhoek6A5DajsgcqtCCHK8pnNBUJddypqAfvYzd1cEh56JHCRW42CkRJZ65iRJ3EGt4iDYQXd",
  "key12": "ZKsC9Zpbwb7T8yoYCtySL1X3ofbmNXxjnkdsQVTrYdr9m6xgpQmyPrGPLHivm6oe2CFDCFFskzn9R8DZoTFic5R",
  "key13": "2UeB5oqtaevoE4vqH5KzhVHZhESu1xqZj32pRMZg3GQDajyCq89gcGB4x77WLtmvbRu3jVpqfnLW84PUrz2bWCVq",
  "key14": "aACnEHmDXyDygQibCbgDr588TW4esJLCLcjMtKP8pFFYKktVfpTZaB9AmmpYfnS9o3FjeqBzqRCEMWtZ2p7Jph4",
  "key15": "96Tj5MSmQ7ctyeP4aXn53wY3h1d47L5nt3VdccjPnvTwd4fCoES99Fap9E2MpuM5sLY2jJgsRcP7CKRCrGDTTXR",
  "key16": "2VPwNHnZq1F4iq2xcSGVCLGLU376AKXKCR9Wa9hL5oaHs5EWSgw28Nfy7kXBwwnCeXeLHnLTotGTeHnXE1u26zME",
  "key17": "QdkDu2iQavy6XRUhEC3wCqfR1UjDc9xvyRZTi8DWiJijDYB6XhUE174Mry1jSxW2cC3oW8Y6uACmoGLMZpheWJp",
  "key18": "t1T6jUF5yp74hCht42JbzpGjR5wvm62szeT4mG4AyfRxVBqE3rAFTnFRudPKrZJXsFVfdnPsfwBTXkSwBfniQPQ",
  "key19": "3cVadqaMmzjKcwpU6xS1Xg2neZdxBkvixQuNuwvnJHiQdj4Yk4RcMxJMfqYpjsAUw6i7px2xKv94nm7uaz48ah2P",
  "key20": "5msrPEdSjS3mvH5nTrHJufacPgJTmFGCtuqRKGbA3tQ6LNT2B8fwCzKwwmbcZ45AfPPUywbjM9VgXkDLWsZMWGy6",
  "key21": "3KUTV3413mXqpnjyKLgTVtHg5p5nf3769fqt7zxUFmNZwZw7WPA4h7eZBdmsAWxLhFxyugdvnE9ukHuZN27fEZEB",
  "key22": "2QRyUn8UN5oPCojn65JdA5r2RCcQZmijJr4CTLMpdskNHDJarsZpoZLBEa3XbRTT84DH579v8eYJxyQTJE9cYhYB",
  "key23": "fWnUjqUmoUrxUKESTPR5ZZgELy7cqnAVr18U2BwGYk6UEKwtiMDPnFvcNE28rxwbmMj44vVhs9jU1r4wFoTNwT6",
  "key24": "yPQXL6d9nvnTAiinZs6AdNddLStj4xyh1LzjzEAB6Sbstx21z9Meo1T9JUF1A8pWz9ohhyuQ7fB56KRr8Lg3UCt",
  "key25": "4eqqUwQ5dAPSVzmiwxqgU57uidS6ez6WxVcHGpm3MBNSCjid2nDg14f2TULxpiBLxwKgPUJqEwVbCDwSKCoa3jCv",
  "key26": "2YZac3d3B5NXpGZwFGvCjNPptc92x9Hwm91r74WicXmSA8oZ35XUtYd45Dk4j4CZiCtdEBqmyiRYDTMWdU4rm6Me",
  "key27": "54JTuMJTg8FMCwDf22ssAWFkaSLCQKAnSoeQhyofVyADodTdJLFQ1XM68jx8T3ERkG6kYqrMmV3uGR7f9pEUS3DG",
  "key28": "5X9gGSFZt878XVpcpfBJtETG8gYzNLciMtn5JW3TWSa3qbtYZ96mp5UWeFKaoGUF9fbz9oUD9hqLZvnJtZnuGLhM",
  "key29": "3nu4HHueBxm4oGNPkxsVKFrXDah6MbvYTPWCzWH74D3CDcqJXCoCgaUrUzTM8PGmu8d6U8ZgBd2XwiKDkTSsrjbV",
  "key30": "4iYnmxCwzyyAvzuUDaWYmnw83erGWuTPVncPUgNwTK6ARPwSnRPZ6xahxELrrmReSMNpx3doxphV2goKhtr8CDbh",
  "key31": "2JE5u4QdwLfifi9e3jLFSMj9kvj6HLHmZsDbVshQwnfSCMCZhfenkWGkd7i4hHRNgazjsteeA5uwDNLzttYhSCXg",
  "key32": "4cwokesRZicoSEJVquF7XkKtbghbnRfsRqoyMugQkFymbYQ5WsXXSBvetPujLmcnkW1X52xMkN1JSqL6DmjbKW5N",
  "key33": "5WgCRqnCHsqdee9vtyBnmCjaRHG6wrsBUg8CsbBvzBWXh3mhqzNkWWsHmSjB4bdPeBPZiWBW3R9D8U9jWngiDes2"
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
