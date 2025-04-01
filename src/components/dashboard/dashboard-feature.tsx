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
    "4DLANJ69F5wMQyJGKnK5Qfs9i9MzQ3pUtYyWBK4jvNjxfKhyaYptwmSDzEEZQSoJtCWbm6XYTBKEbmo18GkyYYet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bLNYz833qeRhLitHjmEwuUSpaJEx9kjAgadEN2ScKTJ51VrgFpy8P1mucgecRmdk5MptpQcw3zqxXEEJThpBpWS",
  "key1": "4kVc4hg3nJceDYuqiH5RY2to6MW8C3up3iRjVJgBRyzw2pk3c6aBXXBDrUUxyq5cg11u6jUccDoEsDduVGRRjJ2U",
  "key2": "2BXgGfDPKaCasK57szN6JbkFnTWbsDxeumFTp8jGsMCPx8bR7zDzqXuf743J5xs8tEdrE8EKiu2CPtbYgENtFjbe",
  "key3": "2Nyutpx5Jf4b7U2bcoE2XhGfpA8EtrCSFq1Dx3tuGZJsZtUtshrMKErLx47QMN6MUjB2Kd4xuw84X1eYTHmuMAVF",
  "key4": "65aV2cpnKNeD75c3nxxGA6QozWYJ9JMujgmBY3djqUi3eCL9CrqUptcpGpBzG2QoghnGhqnCc5nKzTiwvh2UwGCy",
  "key5": "2SgaETqCnGHELybeQQa6JnNUAXX6xK4mb32JtNzSyDKMxdz3NKvmctGqhBo77rrNbb8ykeXVc8dXtFUDC8WnK2dk",
  "key6": "TP9YFASyP65gPtfgQLRBwvj9YkCLggCwADTK9h7f2g5YFgh8sryVLk58ASR3qWTHLdb8di1vZrQLp94a5HN8SuT",
  "key7": "9dfvmS2WhqLJG5HB6Lue7F6ByQtvwhm7ecdAytaryD66WGhkVWtgJQM6vcpCsuCRLSof6tuRidfGqq44WqfZqzA",
  "key8": "2CAFTRi5NmRumHGoh4xmaGrmyLM1iiwxhXqE5aLCdruPynE27f5h3ZCRpipHrtAvzAnHBWTrgh4Tjv4fqzipzJxT",
  "key9": "5hzueMNT8kSqL69qPWDLStvAz9w2BH51ttkocL9Ue9Jx2n4Bh4eyWeGoVuvMVdAjb7PDovp2bvCNCeuBA15gXQ6i",
  "key10": "5pMFCdkUBj6mLfZDuWJebpQXwXrW8qu35RtSJykPHvagB27dTe9WRdadv5XLZQm9X7GfhXr89RzNDMmUXrkwZCbN",
  "key11": "5vZrKevWJ1tCbTNqefFc9eaiuDkZY8MvHvJDTrtY2iZD5KuypdirVwtwJLraeoMwsj2mn9mtNR9HK7UxwZ3fKrQx",
  "key12": "wFYE8RFSN4hPiZWYaB7by4FD3gC2JWGQB7H86S6TPkVZxgErwyoa897VNxXSmpkS7en1jz1rKsowSgViN7DXHfa",
  "key13": "33BRi8uGRtauziMzJ6gDg2mjUiJW2NccWbDBzU1zWiWVHisHoVH8tWgacaunZ876cmoEPh1uQePT7BxYTVaQDhKV",
  "key14": "P2CEgDqwi6HVGjgYUQERkeWhoQEDD1aci7YXhaKFycta5cYCZmXvevaCYdaQihuDSTJp1KMjhWnCq6vN61FH4RK",
  "key15": "4WWxWZJ7zPWt5UiencpPsgkAAZYxpsSAJyfcADyvwX7EbLMmr1ef5CVCwYbuSCAfscuorURj7hohWNEmv1hhcTqq",
  "key16": "2u2VoLdcPjjjHGzRRRN4nvzDe9mgSW8jgbLdBNR4iXCQyadSoWWe6GvKS3QtCn3wmB8JjCFmEeQyi2n4u6w9v8Uc",
  "key17": "2BX8XiWVCKVHeDMep23b7YQ74udpExXagVZZzQmQUSsLj99oxDUgH3wKyKmnTXrmDmZM63zU9XAc9JK5M1CwsVn",
  "key18": "2zYuJjqtnSZ5gPqDD3v4UpvMai2pqFimGrkjkS3VzFrXpDdJ3fwwFC1A9StsXdbPjHhPLvdxmH5ULNaG22V2LBUC",
  "key19": "ZmL9KTxqkjWYVWHoQ7TmB7sUSLGixgMmV4UbHte8pKtbzMFLjRP4R7XewKfzdnka8MVeKeaptSXEKuiECzumwWs",
  "key20": "3M5AXgWbgwzx4obWgBrVDcxV84WyexgyFeW5SUjdCaVwSv3nB8PunUvWTaNY6nPBzPt1U8n9vj9dxsX51iC8fmJR",
  "key21": "4Xxg5nEasqH78XWiuTxPpdKkciFdBRBkvPXudeqbUYYx2uzdFbP2F2um2aseGwfpqs7DRxBT71cBK1cfdZENJPq7",
  "key22": "25Ejcq85wzeKrnmqnWi51z6ue5WDnv3iEQUtDovYtfz3qUuJ4kgus8M5yXC7jYyJKiJLF48N85et7NBZ1cKkZ4wt",
  "key23": "3Ym8gnN21wsDw6VT73AsHcJEnffC54dha6o2nc6LMs9CRNGo4JeYYFCB9uRb41Q7zLeCAoYLL4jvuHAGWhqmVYuJ",
  "key24": "3gQiA4yP88N8axmWyUCHjyZKArpAWrCkTouptw5PfdLiEPCLxLZhAQsk1tnncwYxiVrRJrFFo39fhajKug2NEM6w",
  "key25": "4AVavs3VS1fZBrWKkmQemZcwtcZuMnbpEziQUtugw2fdrY1qaLPU3CqwkXoB5ifMpZCoPrjga9jEgxL8bKewRBm3",
  "key26": "4NEdTAQFvss2ySmPzafV4tGLfCT1BoQSTJvLNCJ8poETYqEByfin4j2QpxaMoummPCVrxiqpAedGrKT6ppK5Qtpu",
  "key27": "38qY1DVhAV4cGtWee3BY81Msm8H38YheyaoSa12aEAMXUvMg8EddkEiV2iuBj5gu4GdT1iFMM5JR1w6sBJYgitKH",
  "key28": "5LdqZuuGzaBs24tLt59WRsUqQMXT1fSyPqW3T4W46GdFnLfYK11Npzt13E4GAnCgefgTv68f55kzP49L45g8EpLe",
  "key29": "4itEg1gRHz8mZf8CvBpXrvNaweF6W4AXmvg4ayXgJx8wVyHbav1RjZPAjikn6QepASh1XBUv7mPf9dGbgaKnbhFE",
  "key30": "36N77SG15V5dt3FESzDcxc3ss5VvmSjvLBLZ5abHDifSicKQp5Mb6SGizisveM9WDTWQmMvKi9DBTLhxcXFpq2vZ",
  "key31": "2f3wwW8M3sJpy9X48FdPNBD9wRYmFzmfETAVKTjcDnknv9gzzGiFXhzQUTQCcLoh2YwaEozGfAiQxDgNtvvge7Wo",
  "key32": "59rxTbbayYVVzu8MPG9fwyFJEGpU4wU11MWTgLM5HHfWqTMwhKFhEG1japcBvy3wzbUkJ2VyVj281b1gqPUVnzxU"
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
