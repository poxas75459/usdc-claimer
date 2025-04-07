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
    "5rxnJQHf15VUro8nqBEEz2QqUdzp7WYmsFvLkRqK4R83h7tnFbMnMAbFX6yN8mDvsHW6V6gQATVKb7rXz4g8kakn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "77kvNBD3owgzVT8n6mAumNDUKZVkDN8Q74AuQQ1wu29PL6Rtco3q6Dav589rNNYki77MyS9CA3rMcNsmX8dm6Y7",
  "key1": "4sBcSXNqaKy2HZgXydm6CZ73rqD4cdhC2dcfGuH8beXaoLpyKyRSZNApYcrGSjmNxYEQADKo97xJV1b7Xwo6vvHQ",
  "key2": "4uHwetP7frRruj9ueLMxLMwm7G3a6WqFNQrYQWcrbVYt2qQUPJsYyC3AuyJTjBjVD62w6BaTL8WmcMPWzyb66sDo",
  "key3": "2V56qSnGtic2LSEERabGLV4vVU6xufUzfL2mxKswzk8Ne1AS4mb2X2wSZNCyy3yvy3JryeARzoFGkU6yxAGyuLut",
  "key4": "3QM4swfq3dgRuMs5pWgwQi2CZbzKxWXjDnMsNGwqn9DiybcrnKecvibPos2vxptj8bFmmkZdkFPcWsmRr7Q9Ug4Y",
  "key5": "p9BPtvoT6xu5nqBTSrUddEbgqeLBLHJn6Q8wmwoeeZXYf8QwbmEHaS9GCEx9qYr5Wv6qUw3pEiR1dkTLxB65V1Y",
  "key6": "5sHPcqeUsewJEcaGsRvFFrrVoAn9ZLMmfL2E4zEpfASjSXQEUQaGv74FxZ5MGDMwhDeKyPD1EddD1ZN88wXYqXyj",
  "key7": "3ASRJjzypJTJYYEoDDWwwM57EpW7U9iP2zi93rygc6E38c3vrjRihkUsS1T9UTcLDwhiLoMWtTRVkjr8zk9QbuYb",
  "key8": "3Cvwsfjhbib3rBkfLaqqi9BpRspSkHB45zGKjookYvSRYoxnwe2zecwm1EGbmYKzeMvFYYnJci4tdtxEBBMUBs8X",
  "key9": "5HzRwpvC12ukudjg6irNJtPASdfV7vB6pkpRqCScgNdE5xxaNjm9bjaHAbFomiKyi6UE6MDREyZQ3xDmurGT6uM7",
  "key10": "5MWf1Sj6NjixgvsSapRBgCoHEzoQoPBwRRPBJRvuP3qbGWoo4P6VRzJddbz4V6PNCsqq7XtEti7JxwWwUtr6SLW9",
  "key11": "jnmFfNyG3ynxmBZ3vNYbCpZ6pBFcMYZCYe8JY1wtestSwu2sCe886s9fX9EvyDF7qVQwDuo2mRz49n4aM9cxADB",
  "key12": "39MBnyd2TQEyv3WZGSEyh7nan5hdvwyuRhimCo53etXSsK7Mpmao6sjpjW7dLymX8Mz41LJGTLDpiYFt8V22MeUK",
  "key13": "5uExFgDuPoiEztkQWjATYbvwgqwBySHG8pTjtQNapyynZfjYvLpCQ944UMNFv8MqPGdWG2wPDUerndC43bBaqavV",
  "key14": "4BAj1qwKXrycZ8nwQfAvLkzUUMRBsBeKQ4VDArg3ezw9ZuyN6fEZYoxNvSVf8jUDjoFvmThgZ1oit1MKmu4ouonG",
  "key15": "4QKmJriM9XaXTwFZmRgXms1VGZQMRcKukcwkx6FCrDELyhrFyEWbq4zBvqRoTYd6aCJUb2ryBj6Pv6KdpNGsyuaK",
  "key16": "55ptrXfMFrTs4pBnZDZjZo3wmYgK28eq45GrtW4M75sBfoPi6tym8xjsvA2VJvTu5sC6njnWjyfGT2F1YLasN6Eg",
  "key17": "3HZ1WoQURscY1YbQTsPwDGtPeusvsAjLzwCpQtZt5kNHhaajoohydA5RhNLZLJXNDGD3PWWskqr3aFKJakthTnWX",
  "key18": "5DBJTG27ZqZzvLKdPGyMSFfLgEU1f1uJSYJzTE8eTGRTuXL3nfSEaK342R9aBAf1HtFp27gWMBxoKbBqDVZ2zcTE",
  "key19": "5mwbEiG3N39yNwbn7BnrMRRLbAcSQqsV8CnD4HcMsUzpnV7b3pNFDkvoExTwtoJ8hraaeLJyJPxrfsqPfRhEcHAR",
  "key20": "ZSoHUAv5iWPkRrvNSPi6obUqLDyPLHsCNTwKaRgr1mP7o8kxN7CMuVkjDQQrYgyoFpJvWZnrNCEWzG1gDPhrToX",
  "key21": "5WjoGTDb5YXiB1ZfbnxJ1GRUQ8y7LLmmsyWyKVWLevx3f159kF6Wji4YiuGD52qcMC7fFNxK3ZnBzaM6yY8XtEJT",
  "key22": "34Qsx5j5r5pGtThP28kk5ao2PWy3qiJU4x5Jod1p813SNTup22Z3AGxgbRCcvEHNC2dKUV3wQiyus1ydV95p8SMq",
  "key23": "5PG8z2urZYjkJkJB1NsLKdjYdqxw7DzLMyGctwAzq4Z9VNTPs1zHz5p26kxeztWXJnF9Rwv4RDw3S4XoWNmY9vem",
  "key24": "62e7EGnDsabVXap14UnWGeqULaSoDcwYdSp9AqKaMrf4tTZoihASy9hiyAZ2dJCfTziY8KEEaso8RhDT94eWnVGu",
  "key25": "sQo4xAmxCiYtf1H1pJcNr1H7oagzq87BtocNNH8Mhhd8nGksFCybuDzwvUtv8fMNDTVwabZP4vPTRNTgMWmyMDa",
  "key26": "M4r2Ruk5XpCdnSLUoYxmahtVAEnFVAzm2CKWZuimQh3jjepqDJP74chZP1JWpscvjVsXqP2JtEdSqwvTEfqmtq5",
  "key27": "2k4kBCZhwpxfxyEZp9642LBHDmmufpXMAyq3hH8gV9airs3xC6hkPLJgZtGmy4e7qpsdbUBWpjSdBvoeL7S3gT5Z",
  "key28": "3Yc5Bg84Fq9ot7FPVnVvZBhKS6pDiAUJcawSwNsneScDTd5BeDeDEHrKUnDrCmmBstzpxGw3xVkj6i2V6tyr1e2t",
  "key29": "3bG3o7qt4fmdiJk6PA71JpNePgJuxt1m4aino5d73eh3BGwmdcX5KBKx7AgfT4T53WGU6XuY9B247NJLhiEEdCe9",
  "key30": "5UStSQPkrZsV4M7vzuqkutzdbeZyw7gR82LLFi6Xg5owVeqFoML9XCWWcfiJrUDnbKALziVN2gswBRzQt39BzVRh",
  "key31": "3Lmj8Zk5ghFnsX8XnVTTkgdrejsJ4matNxoFwGpoUMuKhu9LfPycwTwcRFagKz1BryCgBDLqvnZNpxWSSeVNTLd7",
  "key32": "3rP6W6fEUPsHAM11EZ6mbvLsmMXs2kv7wGumMSkGcgxRtYW7Q3s9e7iTh6ohEogZ4QaV4NTr72svgK9S9DoxGiGB",
  "key33": "5zpcbzXkVW4y2nW5ciK1VmeXtPoeoV6DE2yqE4JVvbCQE9wnz7Uz1K6DM19Ni2RguqRFWpKksQAURYUZHcSukZsF",
  "key34": "4ZxQ8dZvRoR2qzFnQD5B7KpiEXGPZVbU1bAM1Cbg1fk5ehrUQmFBV4K4Fpb4qi5r2HPsUDZBH4bfAeSV6s2YeH43",
  "key35": "5FCs7jRaUL41CGXELRrrTmn5KyhHCu875eJKoT5kdaXYXxsVh7qMJ29BKjvos7ieSqNdmb3a9obVn3Q9zb66Kbu9",
  "key36": "4evynBVjvBeknudRBucvnRpdBrTkaCqTK7rNjZ3zYwpcRquQJqUzHtC8khq3Xb5tk2Ao1FY8miyTcgZ1DQBuUYwe",
  "key37": "JF7UgZNTJMxTTDG1wwgcSM4zZBniE9hETKGk3TdcAqD13WgzWBH4H7FhigqSkudPWiZezBvrYVpaqXEQMP53jHi",
  "key38": "2TWBFBbJLougpwdcL2YAbEXLE1VPxZsTNgB3JAKhvufiMUkaDDuDQSnAyrhhiAjgJKtf9wBff7xYcS9kuRmcPgb",
  "key39": "5wRfRHqQP6tS5pTYQbCtsN2BAWqjeH2cy2XwkPWL9VqsUz5dwRVQRzRWoAN3qrshQb1uqAhDD3DgwwnrvsaiSSFv",
  "key40": "rLbudFjqBnsWBRQh8P9WZDpQcfDUzXSHoqbeKNGiQYRa7HmqPiVdkNx3NGKzbZpJNTtQuCf5fs9sEmX3BaZgJoF",
  "key41": "EP1A3ZTig9WuvoewHx3EfAwWVcbL1wGrY51nZtf9FvANcR9gwHUAMJ3Z9iskRy3KvAVyPAi8jh2iq82ZtGtwguH",
  "key42": "5bJvwf7ehUFTbQRBZSonuw1VwszdaM7PnJDcBhu167PfzkGZ6txeE1cXAb8dvMiqRYgDoEhSSBregZjFR3tNyn1p",
  "key43": "2e96aS2yAERVedU4hH3RguSk7GXhUf9jNDMV2FzvQYsA12Gr6YLgBKQdC7NVQUV3nniEeacQTWtFpkTDXDkDHfrA",
  "key44": "ewhm3sRiUpGv3kam4VQReTn4RHCYQLDnLfvYeVeqneRUQjiA6rB7S3uNPHVjzvKFcdVycpEWL5kor7ysneVdjmq",
  "key45": "4fejQPhiexPFAdQA3suzagC2QWJp4s71Y67d4rHMtmCoX2p9dvf6GKNJmZ1EepWP8fBA8Ss7pLGVLWb39JCcV9Ve",
  "key46": "3ZF8jsMxEoSBFvFUhdMhZRA6QvqiSwB1NmSW1gUV7vNkaqzCB95VSTVo6DpYwHoLgZHDvVan2ZMv6xRZrFEvmH4p"
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
