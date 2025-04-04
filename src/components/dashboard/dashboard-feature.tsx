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
    "3QHMQfWubNL5M52A2ucjAwnRyfwP82jXmuWK8MWFNA8JM4beebrNPwwz8G3dL2x1Ej4UNtYh6YpdyqLaRV8E8Qrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5urjLx9Q2dnWvwytCZz8FCJYxard8e7HJoSanQB5tkZ5dcLY2AD6hmqaNcdKU8MQRTcL8FG1zquwyZt8peUtCn57",
  "key1": "FRGRowFYkeGugnRkY3Zo49srv7sQzjwstFSeLcXLoeDKZmAV3PumiCDD6TLzmjhyZhH5rnyfk78A9nKrVsUTutK",
  "key2": "61YuXSmieih9KHsBkjohXeEgeUqJMGP2tCS1NHKugLRpuWC95BAmMAySs3te7qkHBxXxn9USQ1PiQpjDFSHNTXa8",
  "key3": "2kqzCQveXaMcfJF2Gawoe9Wy1x3c92YekkDZHdqUz2uNuesvMNfjVURA3Aaci7BJPFfLBpaZ3bi5HdkFz23tfhyF",
  "key4": "5qgDqtJaoAaeS6VXetokrqevDkrrz9venkHaT17hB1xGjCX57RGgvhVnQi1vWzYp9gHnjkTGu8c14x6qveRXdyn3",
  "key5": "2e846WqAvMV5CbwB5EgsYsqfGkPXbw5SvHNXbzBwN2Zd7TsABw3tm5BLskwPRsmYMPj8NqJPXMSJN68ipetko22c",
  "key6": "7Q92uUcCC36DB9FcrimB2kcrh8TnU2h3sja85AWmsFnHbWhgtJ3Zgvgnibj77v7jgWFDbKjriU7UjHCaC8cJtH2",
  "key7": "4HAbimXC2UVarCPGRHv5fGBPtckZcBCjTQZrhpjLbDgMeyyPFDdH3agf8CvWTpUn78LABvQoRu7xyWjg5K7WFnpN",
  "key8": "jHHqSbUZB49xfhMdLEmFphopCXKWcYbmxw5dcYLdRiHeT4a6WJMYsUnaDeFzhGfH1qV6UPizRmR84hRqxriDYD5",
  "key9": "7jGTi9qDAxAGakHUpaa3VA6HPX82BsD9vUebaVqUAjZkJigoLvKudW8U6RowShJhyrpUiF9ZH5VULhccu4YNFSr",
  "key10": "2vCqgs8sVeXS6Y84CRDXwM2tL6yMmYwHAXamKJgtkEEVJSKEmSxygR2JmTJQ5zNqDCpXzQTjzCTyo9s6dafT1H5f",
  "key11": "4ZLGpsNJXU2MpZ28zXhmxUznYCh1mGuGVCpeHwNNzUSZWcayoF3im46B5NJvA6WEUdn6rqZXxtPtcY1rTfKQyzvX",
  "key12": "3K4RtACKdTRWy4ZMyGFX4TuiDf59D2UraPmKxqtV9LhUKZ7vad5eBNQT1PBFYQutvgQbPHax3MzgQGAgoaJWQjh5",
  "key13": "2UWJ1V9n4a4CFY4PSrNviDLj5BpKDYHzCr3D2k7XFosZeHqb8wNB9yJLmDJCsD1YDF4psQFhmx2GVXSC8vFjtHeJ",
  "key14": "64afcxpsPausbUDzWBDUwSsPKjRoHzDXManLiNTbaSPguTWqoVt2GfAA5yM8xqaC9oqHTrMCFrUo7t94JG2vt2Y4",
  "key15": "2VUaBYiihAbHFMDnAdPb3Ff71RY19WmHM3k2eAmXfJvWa1BVMVt9FauAUX653wU64co2StGfHqrqspVXLa4SCdU5",
  "key16": "2bKBu4wMMwh2JUKpLbvgroWiWBsajH4ckKqczpCx6ByZbSKh9fpj2vjU9yUTeFNZE5dqeVif4E8jurBXow1B6Cmg",
  "key17": "2tpT6zEsoSQzcnhsydqtN4uhfnL6UdwAFU91oxhUUskzhmM8z2UjzBSeY4uL5S859GWYTqAZoer9mgfFsbHks1Ka",
  "key18": "41ehLWXbSUHaV4mMNweAvpY5Pjxwq22UvYHUYozUPW9sfgCKZC2eQyJe7nJj7btVvZ9NyXgSsfPUSX67bH2ciAX9",
  "key19": "5P2yMUGaBq6tSSSAv6KE2bmp6a6NE46fxCZ3yXhne5vCYpDQvVHAZYPmr6ZrGhXWKXCXyx1rYyTBqyMqiH6NREDT",
  "key20": "4khAzMrVh8cbzLe7bQMwhEKLuHZc1c7Ac4deyUo13L9hGiLXvrNyxnJpDAx33ngHhPE5anv1Jv3jUA9BqKsdTVdC",
  "key21": "5DQdhAjHdnMNwEgGNxxy4zBvH7794Y9dNmdDhGgy5qNFqReR6ZJ13NjyefxTyNQRzbjt8q5JX8nuVBNfb5997v2J",
  "key22": "3EfgWsA2CjDQMZ2sKqEWohQ5aR1TRq3u45vXsxAidivNzmr1qBQzapbyu8nEHwRyH3nh1XdRUq2sAVj6N66JCWFt",
  "key23": "62sg1xjef9SkY4CwbfcZrYVfm61eHmQDYJW9v4ght3QS3aENjk47Z3RxqD1CTw6bAmv1ZFU3E4Jud8kUZ2qb7EW9",
  "key24": "4cFupyirZmETUXkWV5vcoHR1H7bxNzws6bLiAJXE8TDsZ5XDiE47koZv8nAPgYnTgnZwnscqziSxjnmd9VMv68jq",
  "key25": "2NfiemEytvRDeAmCJfrMhfd55kC7oddi66uFvbGU3kihasePRdeg5MtEKgXXoYAaYaPWJXZaWBuCdjzugHYAATrq",
  "key26": "NbmZ4TWa8FZa3RoRrGL6Sud4h1XPQwZowUgBAZWQXnY2J4AGDBzKmsUvjc1mXc5BmnJMZ7RRMufUEGmCKfdhCgx",
  "key27": "5SxmJse1YiEbEQPtQaapNBX59NdjDUsYZrYisZXXcU77qktPnjkmoFoYYHpRgkoHvbVfHGHxyMzrcpCzAdGEhvGv",
  "key28": "5xHtGBXnNmW1seH1ZxwbarziKMtLdhedBEyuQvhkFWfy3vD12zuTuBqhUBZeYnPjfRLzT6ttz7kumQmHFNetaQdo",
  "key29": "41eKFH3vz8oLZbtn9S4fBVRjDztgshZL82ZW5TJ3cxsFr2bJ9cQf1NNRHjCMrrUdyWobE5piYZkvmnTpWPYwvtWu",
  "key30": "54YRocSPJwPmJy3agfTAZN7UMZyaP7A3NFNBivhDVhhvLmA2qRREZoRLJmasmZn8msUvjhe7kSgAALciRUYAnVag",
  "key31": "39JeEadZkXJnUryhZuCG7VfzDT3NBF5HiV5iNWuGz8f8HHzRERqa7PEnm3Fk9U8ae9nN3eMLL6r5Gj7FZdLRmDUg",
  "key32": "414JRRPcCZS97iTsT2Fnjmhi56Wg6qzJiXgasnY1HSQ5DBFREgKGNG9PWSJXgWkGnkrxZXQ2JF38mvCvF5UybCAy",
  "key33": "385bEC6XrzuWtGC8jdpmThEwTnGHhQsTP3Fg9wLtL5MpLkZ1EmPUtHRiq3BU2U4xCUWKjXGiWhzSoGwmZCKtWg1M",
  "key34": "3KBQ4esCK3DXyu4wZZUrRc6xbconeT9BBYVMVsjgUWRq6UGXQQBj3qD7Ey24LmFNabJGpdGUjsx1GKBpPEfcbSHV",
  "key35": "QJ8PmsRG3syfYWA7oJLqtgQwibadCR9gqZXLQiimQ9P5GubQLthVNJxz9B81uXe4f7Vo6JG5VDb26RUsHSJuX2f",
  "key36": "3PY2xL2AXbotDqRQoKjypGAhs5EFzNEsPawGrWqEmruzFjHHV9hwp4oG1NFn2GiYCBdmJDWFFUSeHqjh2TcnXG7C",
  "key37": "umDbFbp62n9JAoDWFhEQDFB4qEru6xwxXQdyGpiYtm5i9Ajigch5KqJkW2ZPJr2wZVxPZad2D9UbMcdTydzqHyo",
  "key38": "mjHrSeiXRxKh29DwaGGetYSLizwWopTu3NRBCNpH7gcHQnrj3TGT76SbihAZ6Duw1Vgma1cjq4Ea5UfxUmAaTmm",
  "key39": "4GX725CFqpNpTab4JqEkk4ssvDxiR1whvLDd3rd1SpAkJdLcMzCZpurGuJnzs5d29uSoQ8WSa44uFdWzWnCWbz1N"
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
