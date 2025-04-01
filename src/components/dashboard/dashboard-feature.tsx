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
    "3KjGop3os358kD9iZjhn9NRs9LT3pT97Yy9mxtpBmyjHHqhFu64i5u4y5jSaYyWR2S82KZLDkx1kEFuLc4tiZtPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o6uf4rt64BCuQXuU9RtwvCQ7nFtdFroB9p6VucWp3WWrKPL12DDg4NkjKZcEN1RTVatnD2tEqtRcMwC4gmKtb81",
  "key1": "3LvdDhqJCy6kxGqgCJMRYZdaRTtPo2HCdJ2kgQKj9vjjr6ESuugFoVYwbefWKP3yXJGup37quFXzVUhJb27o2VdU",
  "key2": "5VqLf1iQLcF44NPG3soCHnb79R7ZuKS5pLbtgRALmx4BbeRo7x8Pn9So74Gfm9w76WYoVby2Cfj89tjydKabryxE",
  "key3": "29N8c9V7Jbw7bxQnRe5HnTGKN6jE9dUXG3ZXpE1s2sUH4DJ5Z2zyEXBRWBiqG19hAeJFs4QsVDGFCwBz7CN9j8WJ",
  "key4": "4B225yU68wtQTDm8f1NKQVkiRtNQfCVoFkeMXF9D9W6kmUGGVXsXpAtkdtZYkdzQFRv67hj67GD4wRiDcjqH7VCS",
  "key5": "3fTXtGxMPiXbwPTsECBBdPEKTkACzqaKjbdBaabXdVy91A5yLeozC71Puz52aJgKaHzDuGaL8u2gywHBY5tEgMLe",
  "key6": "xbSwjKZGyahhPQbjuYhUxsJcHRQWYMBSMZeGeEiNeaQfiQham2Kk6DfBVFt9gb6UcVAM5pqN7KDorDLW128tRuH",
  "key7": "2UgJHaQZEXUeEa1mUdeTMCsLX3N3jspaPdjGhyPjxtsdNwyPPCEVq3dzi47BuBvkjwUPfDBYup89G15MnVLUGuZn",
  "key8": "2ZmKvdxdFStztXMs3mrNSnhvVM51i8n38vF2XTu5VDA22hkEn2papcdVMRDr3iKtfvSHGK9RUg8BqyNJd2oa7A4L",
  "key9": "334Am4eqkHwYVksCwn9smquJse8fH5DnJjXV8aSeMjKPtNdKNrk2bmw22TVDSJa7y2KZ2R7FHvt4XCu1sXkAd7Ca",
  "key10": "ohkpzM4GUZuXRVpFPvkX1Xyz5xhFgHTe1ecCK4kzkHzzij5GYBx4r9N75ZLXYB3TpzKKqVsfngxVggMnJ95iSq3",
  "key11": "4gh6ciqxBMikCEdJXo7rVFShCEFTfznVhUAKLJ2kZPGTY7YFtfbxrrwiYC9ACKxiw1EG6138eW9qoQtFjFhaMtR4",
  "key12": "3ZmAuAdjZANHVNUQp1Bwk2TeEdk4uGR5bZjWGsU6Hw8htxyccaG6NmXPfhRx1cpAgGeEzMpqoZX6VcuqkD95xo4p",
  "key13": "3Sp2UegbwYGbPWDmBto83yaYd5DhPCwFefngy3jRMzArSwtWb5rNuzVtVxfKuSUB7HD2Sox3RU9vVJKVENkgkgkj",
  "key14": "52CMRcXUatDez6fMv9cL6nqFq23skdC7jk8XggxdfjS22Zm8Vkq2mBqjw46siW6vLV17shterXmYqXnSQgAuafMf",
  "key15": "5SpT1tpktG2BPpSMKe1zapuuK2DYmFcQJ5GpErVHBJ9bvkBXXxs3G7ZxHTdntNsWRJkgSM7x4Qr2HEa331EMjvMp",
  "key16": "28KNjWg4s1iuuHKJToPf5RhWF28Kw8EBjgFr8Zvhvb2pJRwuCrpSgkcv22kGdAM3HAjp4U2ERKmdqHYtPcTf8zhw",
  "key17": "xsTSu6je2vMharxDFvcoGKUfLrPcbTPxZ5dk8Fr6iorB8yq1QB2cAspaLv9toeSjdh3aqmxjqXEUjhqhHethyZH",
  "key18": "2YV9AYqyHEjaLhxrPmhKH3gm8DgLXVvwF2ANF3z3N5rsmMtSLBgkkpHsACt2eW2sGRV9znukQG7yXzyA7QrVmJRf",
  "key19": "44G383nqRTSPToSqAgWhQniP8Nsf3cMBrZDeWPrq3vTjbPknTknu8xsuDyA5ov2cDdqXwrUAWUd8KvbTnk3ZHbiz",
  "key20": "3vMXPdWmtHk5xDFtPVBFZA5JQVaAAeikPzD4awb6vyovFiwtra3FtVTFGcjeeGjGUNsSDHYMWEsVqLRFTzCan8CW",
  "key21": "2eutPdet5Qs4AktbeE9JD1NUwrPFBd4Mr9xLTcgZjYCoZNtSxV6acXFqWM7gHnJtnzkAcaz5F9iwKEiF84xWzm3D",
  "key22": "3yXFoUo14BqKzing131iJASVfqDqP7sgiJe7eAJhGY4FWFPBBZ41aJDQsiwKCS7cSRZbzqVsLvjV12GzXoQccuRU",
  "key23": "3oAxypLwWT4cwyJmazVefGUnpiWGoN415R6aUPUJPjNn2zqv7e3RU355YbKFTyHHWUU32GjyMdc6EWDX14eKe8KX",
  "key24": "4SWQkRfWFRxzui5Kj5vPNEWkuGrCbRVSASLqAcePxGxVJGqxrpupnETrCxLkXxD8QwFDD8ige4N4hFpu8YTsYUja"
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
