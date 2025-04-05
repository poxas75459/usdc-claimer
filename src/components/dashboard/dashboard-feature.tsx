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
    "3qkGwZtyUcogaDa32PSN8Kfe4xWrKUyGX3tbpj56eAjyvhtNo4AWxe7Tzk9Uva79oKNKZTseUNxUTFSrRRhThU2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dnYtRSkcgCQMJVGbq1QkWEW2DQTGw1QQuUscUFFKBspCukVYZaRiHcnPfARdGLWZZ5wwq1NNAcW6pNFP4mVkpZ6",
  "key1": "4oDCDSK6YGUkK9WPqEP52G21hMV4wzg2bST4TFuRDVnGds2EFograxrwJV69ZrFfW1CcD5HHjwmXsJKgWw8mj9jN",
  "key2": "47CXcJ1uVtZVa1jCp2JFf31WWKi5vov7EGa9soPnjSPiiEdMXxJx4Roc9LUoc7YyEFD2Az8UfZwmh9xg3vF9oVUH",
  "key3": "57rZkEMiWZFrsMYATpHycei7jsAUdEU7swHXYHrDcgFMMujnxfXW9b21yUPruqMAjQsVKmcZZyzxvxzcy7nFVX7X",
  "key4": "378c9ry6kYy4SY4P6oTLhp1uXT6UiFARLe9z5cWvsunPx7YMmoau9pMvRJQHKPtmbQGyxUGrzUyGD79xHmBxnmWv",
  "key5": "3u5emGEXAYxKSzrRvahR5vDLK5RxNq7k62rG4jgNkAb5vRAZhqHbCXrydQ1p86cDZCpHg2jRPeAcNTj4FkeVskkM",
  "key6": "4yg34AqezxQ8cMLeTjx1jqYwdVBaXFov7autekk59NXFi4LRRh8c2bWcJ12UH3DTSRmJYmW3NH1h8JCqazXq5EU1",
  "key7": "mgPzDniagccMnGb6ASxzsFQPgmJjL5PNMdb2747CZcwBwQZPc9hTU6nGtciibzUvuFTbiLsMR2YScJVModmRjhz",
  "key8": "iobxZD8YjobHJCDobh8EZfGhEGNTgoXj7wqhSwrfMCQkRe19o8CZFqt8zibM8TwPQeBVWtYyFFgtTwTs8wjYnbE",
  "key9": "jhtNt1qy4E4ZigyGjkvGhdzwwxPaM7tmRKvX4T4cCPFBmY9XN6TH4iPA8VLwmtTopfEPLsSLjNP4BwMmPsqvCmX",
  "key10": "3bDaJEf1CbsaSHB9kJmggUKB35uUB1hX8WqwAaGnQVdV8Xc3GN1s3Qj8gnCgWwRboy43nZyfsk61CMxvwdsUmDdC",
  "key11": "3G66a6YBwi65aURrKCAjYh88n6kpk8JR5QyApEsvqLrqxoYDMy5JeE5owM69SKr8nh9op7zvANRSsoUDUxsHy1qN",
  "key12": "ecrWd2X52f7WvDHEiUGynyQo6H2BFyszKtXNNQvfPrNrgorhK96T44Ez1LfkAPejQ3XB9VaCYMddt3saCi2jNDV",
  "key13": "3SAtYuDBVCHyBq7QaENZeug1H2SzJfMVrpqc4BJXRYq8WHkUPsxYp5nE7Nm4BitNQSRrdZxg3DsgJzXFqu5Xm9K4",
  "key14": "4U3wxfwhhoS3HWKDwCiJ6Gs4VNx6R5PhXBLCFSbouPyHpxCVY4PHi1u9YBqVjLqDbHDNAVEMn85jjyUAk7ZUttcn",
  "key15": "4E1pyZhizRXit8yu5yuMMuxsmGXVd7YtcydEhoVDdYccJxMN82Ya18Q64WcW42RNBYQbWKuZPnHEkBer1DXsesCs",
  "key16": "4ErYoQjyjHtcZ1zioD2YgufzRGoN3acGo6tsfL1UHLq8ExD5pkdCcAkhr46Z5erNGMrGwkQoiMahJKi1dvSyiC4f",
  "key17": "51LDL9tVYe6mSeXBjP8mPedWgVg9EuCJ4uBvgAgqPU9jFmJnXNPyZRtzPHHN3EZAcxsn6uMSmRb7YMn9yUNjmfBf",
  "key18": "3SMSgqSwsDQX4um7zR5nPdYmaNBesVz6bFx1AbxY4hvbVKSEyTkPUjC4wHtm4vMtHwDwt4mmiqcgnK8dmjxNApNQ",
  "key19": "3kCKogttk1CY6HWYhuDtJCi891cL42H1E6tDMMVbuifUEDEsKkXEGSyvRU5f9UzNRoft6Hs4bFRceqF8QShmAL8h",
  "key20": "36izSn1MkT8zWd2Rf1fQSSHp6hwLXQctpfew23mdaY7HR3k26AgkSKtDKqymU6ULCHuyvkY2R4B4AU8Yi9faYZ6i",
  "key21": "PXj84zrfJf5EzsHEPFgsLwT4KgmRJr5cAptAxwrvRuXJnXP8C4SzhmbNtLd9Nu9ANQ5sffNcKKgmYXHx4k8kS7W",
  "key22": "4AXD6gFnxgXuwR9mz4DLGPXNR4wrrf2Hsz6nKWvfCmUVrwPvXEMuLSVAEm7cDx41DZFhRFTLD5scEpBa4iuehNub",
  "key23": "3DrWkFdpB7GL5Er1rAzvQqQVxjFH6r8CBA45q1uBbwqh3toquN74xvekCYH9EC7Tt5tcVk2XW6oUT8MdB491F5br",
  "key24": "44zd4oVoXJB9C18fPCYmVBT7aRKSmNeCjkTmW4FizQCUZJxTppbccw4VhVWkW31RLaQtYBvJ4PAKgN2FgEtgZzNK",
  "key25": "2BLFAiwEjnGEBvJsmYH3BiywqUWXxfDSMrJNoBsjyKTMzgU1cYh9ruHx7yC9iiAggTrubK514TJTR92dfgeriD6A",
  "key26": "4apP2ev6fLGpdpcyun17KDPL3ZGHUnA6T2N4acE99nmB47s9deQgQ55wBLmVcgMeU3u1miSn523Qhu28yPyYgKsk",
  "key27": "43sExSUg5YiZztrZtVXjoRaor5qmbxFuNJDAZkDHZvEKAjgtLRvHnvBTtApzg1WhLfCzAUQej1S4aoKdzyNvgnpa",
  "key28": "2G2PJY5PYtsnGTZjaQyHdEy85g2Th3hUisbtgnHyFvhzbH2SMpxUKdxV1eYa5Afh151in1USymivRykCjCotB3Bq",
  "key29": "5VkEQP2rvGE7UMDxi9UWHSkMfimWcf3KDxqFnAFW2fnwWH8i7SbwvEyChbqZpj3rdS1q7D4j13EHgaw4rsiTv2Qt",
  "key30": "99yjYr6pTNLBVy35JUbaoFFVwzv7N9sgHdAFsbmMHEqWUAAqu1wrGS7gQdycLrt56YvBibtcPxcGfa5FBNoyxSp",
  "key31": "2VP23mhowiZKyngPUGTGQ39ToFJNWT7KrYcZFUsWxG35aPrrrcC9C9NTLg1oB9Qtxc5UZXmDAT3s4YKqsbtvNSef",
  "key32": "2LXvXHvXrPTF6XKJxJ9f6XPF2Wrey7ooDyHBxQUfk7njy9xsxkqtLmrnEeezQouDcCjy6qat992ocfbJPwDuaQvp",
  "key33": "3fRDyBPmwvby1CRXz7C8SiqknG6m5Xpdk2hKXJF7sPDtS213DD6AGwppPN56LM2uQL17V26i6fN44qLb2uuF7nmT",
  "key34": "5H1d27DEi1k9Y2PsMy9itGgeiuwN89hXLCMXLXG9aXQdPjU5EwFkzv6bKXST4mgUD4DfVN68C2h9hdZfjjNA7Uf8",
  "key35": "3XQ36vPqN84pm9z4LPzsYrtKC1FYaMZepetyMDVsZ8qcWNNNxPqWE6NpZanamms5hQk6wqCCGrrjkTpbwnyydcof",
  "key36": "nP8SU44834Ycbn28ozi89XQvmBcD1nDXShA1gKTK5AjCYAVdhDXt2k7ZzAsg1y38iLZh8wigqykS5DzMbuqDtvT",
  "key37": "21JnQbzS7y9miqsMJ22WSwJotUmAgyukKXv1uL4NanFesgFrf2uGyXLRTHZLFVwT7emZ67gDpUmYbAyWevhnXdeC",
  "key38": "5vGRPth4W7dvTbCghnsfts7kiAAwRj4a63CzoopnUTWriW48PRfSwuJm2mzm4gqADiS2P3s7kbP4ZPGuEKWSF49V",
  "key39": "23pCPtyG3Br4JdCJXBARdinbZSPjTyxUHPqS6We64mF4WTFvsenD8L5DyrKY3ycMtwN2aXs66zHsiDfSSQirk98a",
  "key40": "5f5Qugws2kVB83hxfBtKRvuVHiGLomjuodKEXgqMe5JyEjzrGJihk2BCh5wwH1ztBVJK6Rfb3PUCzM8aa1jmH17Z",
  "key41": "2V88cQd9W315KwzkL4fKwbcJAtAQTfKBknudTSaRuy6Ht3GptSudakCECqENLss1Rb3WKKkS5tzXDqxbDhhZuHjq",
  "key42": "4yxkNJPu8KsTqEDFp3uHgmu35zgvKrQF3jrEXKn48zcJgUCQKSkpgUZKAmCoq9TxcSApsjhxtDUaMLBAUrf5jies",
  "key43": "2GCqvnEDV9YBK9sHpZKUanoBhkoP3cChZ8uS6Fdp9kCsAUrm4CzyZac89dNGW1eMXHWMvuCqtZpbtyHuevLD4CN3"
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
