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
    "3f7oL9FdXsNzGw3JnK8mpxmpS7MZ3kkK1t8cL8LYcU2MuRTNmPr7DbuDzMyqfHrKCW2tKE8kdSA54fzRePXCJR66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64QHiCrGKCA4jebEVrwewGHh5nfJXxExxiJH4FjcQ3cSVt1eK3sF2YdPHK2oaNZoNYH3FyVznRyMeSfs3XBJoewg",
  "key1": "2dETCQEj5mCRGe8qLuFWMiQVH6U6o94eJ6133TiCTTbEwkGqmhcBWczb4RULGypCYB8VLq9E7tgEidWejpFEWo94",
  "key2": "5XJnyL7AdtbgmFwgNVtF3bTjmvBrWbtYBm1YNn8WRMFm9e4sokWxDCHp1LnB1tFVwZYAF5K6qCniGez93dHFAVRZ",
  "key3": "4dSvAUVqjUKoqCbftQSVsQwWjYwbQkSWAWdcnsC3DK73rFKGmsn8wygR3tBTnZrVYxmAeA7vQsgBo3shYPyJZgJE",
  "key4": "DMRThczA1HHQjU1FQb4LVSreeFqeWCybHXcUBeMXEGu2MSn3WDcgaCb5fkUs3RUaYv2jff9Yaa3X8hPzyjyG9DW",
  "key5": "g8RH9ujCF7g9duNsxiYLZUuL2jKUj8uQGXvNXqNKJTGdFef9WnzV9rsi5HiaVHNfkqxobAHUrQY8TrYwLi5bsm9",
  "key6": "9mVFLQ67oQ7axfGDQJS6VDdS141bBejdhBjUMo8jqdvbnqeHgMkKxkMq7oTy8CX58cxqtSe3FNEx1hbFP5aGDC6",
  "key7": "2mj5XcHLUAgGXAiZFdMPkCPBKd5mVyi3PnBLG9u8qHt8httSJZM9kvksrotiYawX4wAfyrPWUYU51aXdoV2LUbPh",
  "key8": "niR8s1ishhEsz23uYdMhQo5y2eyKhyhpfvGp4SgknVZGLDF79fhsjnRJCS7SAHuPTgtTPco9MLL5T5oQf5ymFWz",
  "key9": "513uBEheuHtjGRc1gqLF3RL7uvYNjfJoshcXkDpStbB8BfmQvzXZE3rEYtujkgNDoWkH6M3iecKJH4PCZkFzA4VJ",
  "key10": "2jWbR5qYMccLZvwj4Vroq9VkPfTuzGHVRVxGa7MY3x6WceTrj1as7c2n7A28oZLgbcevQGz5LpfNscm62zFnvgn5",
  "key11": "4XcwApz1ebYkfwRmZBxs8nAJY4vc3D5xJuTmDy177W3ULPHzDJ5D3q1rEUehycuCHENbkd5oFnGgakUtR8Jbp7Mu",
  "key12": "2yMSySChv98qYKPkETQ2bZJijdsXePPVAETYj81DB1XknvzcvDqBsPe6aEDpMh1hfShggdsT3DNKbUo8dDtALSWs",
  "key13": "3nxQqPBiLMPYvB9Rgx2A6B9g9zA216Wk1fwxXFN543ZsSUjsqCwk42C7SQC1yzHUT7ghWjLYsdghpxskPp86d6Ua",
  "key14": "51zTqr4QNqRtJtZvk4mR2RBLKamiMesrVj9ftRw4YtGdh8tdes1B7dVU7sDTBr4n6KjTduy73o37xx5RFBDucrr9",
  "key15": "5QjC2k4Zyfg4uQFLBku9zAh4nGaFPnm3UBd3jAkHje4L4K8W1f9egxLq1XYNqEzHd1kRdmV1wvE3fpjVSWRBupdo",
  "key16": "3dTR4qyUsnJ9wGnbDkMe3Po27xVSaUQaSbVCPnJZZGt3fdygiRcrfZocLvNCPRwr35qcUMTyLgf7UjiPGSHwftJJ",
  "key17": "66xxL8TUtMSbysQULFFNgiB8nCcaTfNZ9DcfrxouCtFHkiXVTKbubPDrTW9YsgNsxwnYPZmKoe9B13B3xzathmP6",
  "key18": "2B7aUHS1GMAY5wdyHr1R6tHKUbSzoCm5a1wsqm2NiUgca8ajEBNrbJEKWfFmnoAVkrd5Ebw42QuPuqpP9vJiBtan",
  "key19": "3vbwqtP5oy2G7JzDE7H7owExRzCKcP6NLjbtt5ppMr5sa2JFHa4Wh48noptZwNs2L2KC5nbaugz7WHfnc41rJ3u4",
  "key20": "4exJXQdCTp1rq8jksoXgzqnoakGb5P2LHpD8ks3CHEWM9tC9EQQs3c69d89wEFrHqRbhYX9tkQx3riHcQESeB1TH",
  "key21": "5kUJgCVQP1X5XetzCzUwVgzUje1rrZ4UFuqGvVBo6CfqY4Q2Kp598MnKVFR54pmW3tQD29Sv5PTj2CLmZAiWXXHn",
  "key22": "62GCKJCUmAwN85SEXC37o8fWWTNQytAe8GUUg8HoWxNLXyH3JqWBq5ZmfjxU7ewgPwFzndYXk6g1ucyzFBc7oztq",
  "key23": "3KYhpneapeQ8S6QEMYvN87E36RR3fLJwbGk3W4PyqNSyRf4LEfC5iEU3u9y4NpLHU71LWRDQtiWG3Ccgia29wwrG",
  "key24": "2iGp9Jb3wmgYmUPRpwTae6VB9NVbEe5WLi3x3ovXRT9xSBZY75KH4ocgHrribP9cNv6XZb3Sy1ifozSi349J345H",
  "key25": "5hZDNeJE8t2Asioarn5qszfrHVdsvY6qhYvnTW971t7KNd82nJkaTLnvuZtThGFCvs4hzZhXB2JLCrrF5C5eLVSb",
  "key26": "4gfi99Qjn8c37BtTBEUSkkvg9yXQ1xZQTmqVsgoAhrit2xTZZ6KP1P34RTgoWf6UJqxYLNKNCmwcmQW3SLebgWi7",
  "key27": "RbyuWJQP8ASUFnK9pxQdTTsWWJC8J3ToquqSg8mYdKFUFKz2t5EsaGYYRiQWaE7TExnXjzR7A5m1sDLxt5ccYfX",
  "key28": "2Xn3cRBdTZxKTBLbmodJ7iJZHfyJeFnVJzqubUgonHaUiZfzd95k3oeDQ9h3p3eZFmmDPHfZUUagb7d2ttVhKeug",
  "key29": "3d2JoJK8rGgKTpcXcjydKERdtSATHNzdB4mghNcm42GPqpMbvt68eVh3WLxeoPrGhsHD7az4FGk2SEhAWRkkzhxD",
  "key30": "5Eyw4etMTY4WAbvJMj5CxnfeWQvLkBAk1zWzahRjBpQLG91HPGtyj7SWu7uHrxyFh27LVovAMjLZrZcra7zRU95o",
  "key31": "2YdScUPDupKiaq64xLJ41wTEKVCD7LjRNRMywzPJzqpXWBjYg3s9nEBPfMkjttM5xCERVfK4YagzSPbhQxdupALi",
  "key32": "4BXBjec4CKpRkZQSugeApm1RwAGWHbuDpMx4sPkYGraYthHTiEnRxdJKmR5VxakjJAtZeTdjfTweRCC8HnjHEqep",
  "key33": "3c5jRVFjtH6jvgbLxHv4e1pTk1NYgYsRmzYdcs1TgqY69r5LmpRURy8PkUwhWRM1y8zD8zeexAVjYMvXuUcsfZhm",
  "key34": "2QkyqZpMCoNsTKtM7fTfNJ7gLRwjHv7jBC32Jigk76jMFYeRY1vbmZKcx4XFiVDarumkjA8cLn26p4dKMM9bP8Vg",
  "key35": "45vN4r7GrpZwkhMzBmznykoBpn3gkkr5GWZwLZJ2dcLda6r4nXTWmn67ZSJ3oA9N7sSS5n1F3B8vUWTsM9hTHZjC",
  "key36": "2gWdYeqaNh9k68EKTW9XFZMHYhGjTBDXKiU631Z3wftXA4ULdw2xDbr4kevB8CqLP22js3dJJV4G4Hbz865XqxAe",
  "key37": "K8sr3PQmzoaCSavo7SphuSvmEZz14RYiRr7MUb4Vjzs47gioPggptUYy79ostRGYQDiFPe5UmMn8iexkyjTucuW",
  "key38": "49qLJJYUSTcreiGzDuy6Z2YqWHBDpNZxydftXyA6MBwkdF2hBjstR8FFhBU8JsunbBYnbZ4HZ8hg5xWixkqMfE4G"
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
