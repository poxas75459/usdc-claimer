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
    "1HwdPXZs8oBe61e9bztZvVK2ZwvtdYxSQbzhaRxAsfTPDZkETZ4wodnMzvCMyjcQ4oEDU8FSf41ByWj761jfBF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31QjcbXhsRLtsx1fGgvxsTbV9dkJtnE6ePUyqd2Z3Tdu4pQx2SXcmNqU1e2yeKFs1f52KVq4RgrSjhuY9qq9pWVU",
  "key1": "44fpuW68TxAeAaMqs9zHZB8HxmkzBYs5XtqAsrRqwxUUw31uWCLPVhDJPkSxkEmb8fD1QydArFgoWczyEgvjGTte",
  "key2": "4iN87N64BNtV5aS1mCAUu8wUS3ZyxEL45n6cNUi8Mqh45Hd5QBmELeJSUrMdkgrqTcUfkYx2DwnFdNeVWAjoHBgD",
  "key3": "2c4cstEBCoLtsUfGJZBJqMNRxhkozHMEgTWbHtb93TKDPHfNz14UitVdSjcQMKLJuccMGpTw7FUkzsfu7ftEbEL9",
  "key4": "24wGrxfehSWjnSHxYVnj7XVoqGpFc3NdLFkibq2dZ6cFQGpTnv2vCzE7xVYKDWsjFGB9sqXVNwTp6ExazKqwgWuv",
  "key5": "35Vj7UrAgJeXfcc2YGTxHMCud7dSLsLB4cEL4mAFyokk5WYvxirxd7W2DCqktQxj1a1YGeJbxRZBQKDsnQcDLVZe",
  "key6": "3xXt2uCm7YDUXQtLWywShFif2V3yozRodvYUJUVg6eWgux9escfiLeu5zWB3c6SH4Rwc1rjxrkqk7CCBCvL4E71q",
  "key7": "2xpGeXg5wzMFAomvcVCEBSthxWcHWPdwyrdEmDe2KBE71wKNnXffA5kuygJt4jqFBcsbcTLp7tk4risdQs5cjdfv",
  "key8": "2AFrDtmd7qoPtuc7HEybGQHnTREvr6RJN7pZtr3R5JeqfwZFG6Smq2AuA5KbwoaWPzMpbBZQM7BE4uzcrUJYxBS8",
  "key9": "5Shhdimx2BYZgWFk7yCjoWBhG1TogkxmhT93jGryNV9JTzG2jtkfLTMmK59Zm5YLc5iFvY6yZeQAWr6Xij84Lcyd",
  "key10": "3VHoqBeoQ1LQT1UAsmVd1m3ajLw3UXa4eMx7SgupYTr7GyDK5NGjhcMtjAJGvYMB2SYuyU6PUCNB1ndi9zf8JP5e",
  "key11": "5vStC8Wwe4tVVRMJf4U8WJCSmE8LPHJG3kvYmZoP1kSSFx8YnyEJThWs6F3RUoiFAP5NSafmC58CtvBE7aQv99qa",
  "key12": "N4nGjJmxgsJyUsAVYgUUtkmaeDNm4zjF1eAGJ93Evbgv9i3Qq1BPK5qC8N92QAmK8nPFWpcgN4zYQRJYHsCnF3D",
  "key13": "3L8N7RSmo7aLeZsjzuKr6955zy1KDCaQThHLSTjEGaRqV8WHs9iXrTMpXJtqzuQrqPdzg6caJrn1xVqS9xqV4xuP",
  "key14": "5A98ZieswrjC8tWHge9LZLWQ7PT9cvXKEShfzf7d2LSHJgQqVXyUybHTx65jkFbzgS6KDThM6dW8x8dLBKmnhF34",
  "key15": "2pC8N3Q3KC2n3Nm73mQDxXeVjgeHUJDRgNDuMAtmQ9SrRg9VEbvaQF3scaWgHzuYE6dk9GL966pL2kDqyi9kvNoo",
  "key16": "5vjGVBXvALmVCRZha4LLPAxt3BHhcFGQmXSAz4ZG5VGL1kxo9s6j2n9uQe4qqCm49kGj4UBfxGs73JpUzARtRxnN",
  "key17": "5b8kvfJSvagyAanyL1sBGqQnvkA7bSFPVMKZckjahZtg8iezYHXbTr3MAZKeW2WJsoEAitRaWFiumtccYNoVm9mH",
  "key18": "4pZ4fGAwsSP9rojL6ARzRJNi9kR2rS6EX4t4vznZeD2m49qwUVP5Tbg7aeHqJwNdK6YHzE2c8UHZaWPdzdb83xGS",
  "key19": "5bD8A5NeUTWGmg4gQe2yXvqTBLLKcixBzvRZuGr5dAPfhuJC3NQa6YUZqymmq7iX41RchXBAEtzhNQUpy8w66HnN",
  "key20": "5VvUFBMeyZ6Vaw2rCkAz7i3d12h4sAB4ygNohLMyQa8RWxyxFthoa6VjNuvcinUZLbmBpAvu31kQfRQxP72tEnra",
  "key21": "4RtqKBeUynAynYceYFE1FGEv4zPXuB72LDGThpu2bBb1e4KyN1vCUfVcbPRCMoJsRHGDeXPYHbzXjzmg2r3pRkFp",
  "key22": "4z9QSfbCTVRsRBDNRxMi5buSS9N7nkmiEH24W5FyfefaFNsSLjK7prWJnyj4oKhXyWxmRq5e4xPek8mbYk3t2n4w",
  "key23": "2kwcMCCyv6YqGLc6RHdg3fHUvAcMJReUpzKSmhVviEKNW7JVmJCxHBDuwhhKysZSYLsEEVYZPst3RmHswmu2XRPL",
  "key24": "J7mEqp4f3eqDEaVhzrM8pK1TD3t3Yz7ZiEn3XaTe8sQDkQLSwLrwopcbYbsp19h1P4abEn1H56d6CusxdKPthLx",
  "key25": "4Bdj2kDojWTm1K2qT1TREfnbSphKkNdbjTXJuwdm6QuVTX5YfjbJSijQFLKvEWNCLnk7i3CRVzLEkbwJBxVqRhNy",
  "key26": "2Y636eDLoeHiNPUMekp6fYdZsAcb6obhrYvVSQhfGUewtSgWZBN5p7o4JKZ8cqXkcbsJqqj4u4cKe7udMkHHqJaY",
  "key27": "3vxZG3tmJf22XieN5M8J6vo3bZ8zupPavFrpP4wzxmNc43n9Nxbtd8gBhXwHGQw5tU4s44aeQ3dURFmxUzArSbWJ",
  "key28": "2LuXAFcWLqwCGAUMN6R6pAcNH1kCtJJYCnyDXAKkmttZsgKLaUQ5YiS7CaqVYyRifNrCAJmh37EL2D5i6z5xnY23",
  "key29": "3CNrGy1ZYnXxTnMNP2bw4meRyqSHXqu7RZDXSU8uqVDVV8CMnk5x6dRa2T9L4g3DXysPwy6eM2zZhcUQbfavxYot",
  "key30": "37BM1yeLzswTCUn7N1S2WHH7gwd2PYztWkd1qQXHHMrra312F2WQyNmrhuAQxyaNpHzpiEH42TB2P8wrRM8LhnDx",
  "key31": "4kpojEtnCPJfQHLzhtpu1shhq8E5pyNEwaj4JNarzRYYiz3yn6u2QsDsV3vWWJpkvME4gxgEoPD9YHxC4xHmSv7M",
  "key32": "4N4oXXYwRhwtKfk2Www1YkrV9EcZyDfSemfsqgDePYS3npFs2WDKJ2brf1VsVRAydxJXU6tEeCUVVyvE8dayY6Rv",
  "key33": "4v9voc2XKMC5RjtanZVZtsYyDDhMvfxzQyV7dwtXqpypv9XwTv6B8KGV6NDRspa3wMSAyNEhNVwzgELxMpdwMr2m",
  "key34": "2T1NkXjkJ2XLKvnLodWfWeXWoWfJw3dr4BYLwP8vkpXdeUTuBsSTUSdoEmcY4bFx7rvgrSdRUpJzn2h6z22xQbMq",
  "key35": "4MthQdnaVaegRPgNW8WqBNYWFZkfyBKXYyCbC2eqT5XRQuzfovS56soxFM1N919SesMmu1hpoF2hfDdDq4UAutns",
  "key36": "2qyQuatVvApVDiCi9Q2oAV1M4fU9JeeyrpoANSQF1DN4r4HVSHmWY8xhTTdUE9qU8hSvVrnnnmxkr7yx3fHhcoGM",
  "key37": "54EUfjvGU3osPc8fkQSnFTaA8sPBPhJ6HxFC3U7kEHSWTchvbU4iEW9Tzy5FkcmJ7HYQLKey7TPfaECzSZLp1YHK"
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
