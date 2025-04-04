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
    "2mxma44EXmHUHBmKHJjNr2YQMZxK7Ge2Aby9eecPGcGjeDGu89eT527oCn4HAnQg21PvsnVEZsBDRX186zCwMTtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bMxs2RfbxHp9xnG8SvUE16ud2HdHi8TKRfqC1ssqQhotbgkupY9dAZsY7Mp7axWH5GB4QyRt4QbhVVHcsKTXk12",
  "key1": "2XEEznUxV6qjwp7hfDpD9Z6vPGKWc9wsucbs6H36GensL3HLLHy9PiF8MLpEsFoaWc31MSNWuzyxBAq3zFF4rKAz",
  "key2": "33LRQtvAnKBf54UigzTbxLPAdd1bVPHxmbNfU1d3DS3duxX7xqDQ6gJjpmYVe3euicVa4nis3iqiFRqsxo6Gy2vi",
  "key3": "3AnSfSZZikM2b7dbeyL6vbfmzYCEj8qr62GpYSgwgx9MnrnhgyedrFiFjBhf1Kyn4pbzxQkieZr4RFUF2FMHQKmn",
  "key4": "MqF3SgkaDbXr3dTFACC8Kj9XjMoPQYBGYZGfbxUC1Xchqv6vQttKvEFnsuTTpZZWnGCvXXKwALdofJr9LkXWEd1",
  "key5": "vQ6cySryiFwN9HqHQikyvFVCMvQpQ621knEEpUqbCGb1iczPckUDJhgxe8nPkXsZjZfMrFE7a5m115zuCroJAxe",
  "key6": "2E7YxbuA5UMqCpYbMjxkPdqukm9zfJTchNqUhat16opBfGWzXfD2QJx3ys89ExLC72ojsvHBS2q4Cr8S38XQvjJv",
  "key7": "2hAMedXsawVo7eAN8pqkwLttRtPcABkZeiCAVz6D1MVqXbR3LthKFETmBiSiqXWyrzbEHLBE6Ld1X3bm7tNyJSpJ",
  "key8": "ZH7ZfYdBNyYydN6DY53PgTgbHNfRmVRpG5vMuX6BCGJJd342t33qxCktyn6rip9xp5o8mnnPCD2nKCWNS4Rx9yC",
  "key9": "4dBx4eZbfaDVW55SQMEtnV6R7wr3i5SY6tiV6bYUimGbdmCXahqN68J2MJZC2rbhzqP1Ch2L4uFGqVRmDrKcLAGP",
  "key10": "41MKqk3KM1Ldhv1QxbLRd5UbsRmsRRsSdhRiCp6bgP3MJKXAQBCssdHkx3Y6vaaY8QzVViyP6TFNH1n1nfiVZP4m",
  "key11": "65pmXWPHN4RFLdywKWkg6VGdtn86HUjwPzudknuP4T6UT3L94tvAtjAq52uJVH7KJcCocMvEzTpvgErH2J8FVuLs",
  "key12": "46kYDFgHTE3nuwhPM5kPZStNSzrqPaCrYq5UM5hzcm6fPbfYDuTw5fpnRnS6YBVMrTxjm1xKVSaoMQjTUs3MfQfU",
  "key13": "2ccKnhQpQT649wjfuUgxmMgiBioiFBdkBpxj8GMKn7W4Hqk6wRajfGKCYvB74tvjNU8TGavLwgYwHceGe6Fn2KS1",
  "key14": "3VDfbpCe5ShkUHwtc99q6RzpMmVVxajGW75tRhhr6jaMAjL8fU4rru8T2XpXon5W7CmYFDn13vnjp7RRZZTkat6N",
  "key15": "5JXpzXBVZo1AC35QeF121625xqrQeaoSF5a2XWND1urwhMPM5ifViWPpfoBt56gMgRWaEsW98QXSx2m4oFXcGZH",
  "key16": "2naPwrTe12XEruGXFfPdrDACAgCckK3kz6FMgMeR9UNkyseXu4Mxod4KHUsRNdNSB1tXMXVzbakJUg2B8jsy1VNE",
  "key17": "22giwtXfiafrD5V7R8G3w7zEPxR4mq6MRo5QSLm535yAg1Taoay1SraxhTucWWiriUovUqr722Mg61R39cXpfV3u",
  "key18": "4LjhemBUj3kXeG8paCikVS476MRHzpR2jtay5Cn3LSXNfCDCusi5Vo95UXH54o2kJnCo1PYzW7iPB3eH5BKZTG8h",
  "key19": "5pPwvQtauDXxvVCE8yx1J5vPeJ95DGeWTigcBYSAX3qQr8Jf2Y32mjWxsyqjWMSPNpuFRukeZrhyg6Nxzw1tMNPE",
  "key20": "NGHgpwVd9fXTkzWMQZiEfAcFrncuEobXE4H9PDUpybrj68ifgbYRsJSN2Y4ZzBWfdcdMXnyWmP5fprHyFjYcsyQ",
  "key21": "BewU35RCVi6oeDRzh492BQJDeVH9skpPS6LqmxHMGe3NfL5rzANvwTvC68QMserAeZV1roezXL7p5yKWrQCv6fx",
  "key22": "3XqTFm3sC4pmxsavdoniXMWtf1Ehz9Uz2oNz7pag62TLpmoNedrPEsXEuCSFeePhyDHutyFA18wtgL3YyCAj1Bxq",
  "key23": "5ct9kihErqE7yXBmWcTMmpWJPHrXpAfEv4cahFL3L5anDaGjmyBcNgPL6SZY9JvxU5G6pwUcCZPUeHt6kuCbm4mb",
  "key24": "5nfL73Z2X1UqN2EvACmWFPH1oH9QsvjhbJqutYuVE2HeFVBsnBmNZC3CkHZ1Yis9GHvU6Z7zoANtT4QAgYT1zCvQ",
  "key25": "MMWQXaQP84yXZuKFZeD3MdN17ZUyPyss5rwtkf6JuboQ8gFR295xJTZwZnPjw3Bzsi9QNQJj3diDygnhWc65T39",
  "key26": "53pg21RvjghHPs5iPrXuMMr6NzxroQXEBmhLmmvT6okyYUpVw6gRpd6pmhxtLCpegS1kgJ5BPa2HzMRpym4GYTkB",
  "key27": "4xkYjz5EtfzkgfDDF79kJ9o64XhxLXNUJFVWYFEz9czfhBgrzZbAHkb4LuHP1qSb83pwHT7MELttYuZurk5SRwLK",
  "key28": "287P2wEnaGd5BegHUY9oQNgXPCUBhpT9HyqNyY9GrZFWxFc8vWKLk639MdF6FJDgfF8i4DCn55XvNbqAEwPqFUua",
  "key29": "5xtLGgN2iJfRhgmMiwU4HkgNWyzTb3Sf7pBHdswpzu2EvT47PUnH8217N2T782utyCRvVm4n5YWorUWN1jywQGDV",
  "key30": "cE98DDu4yvCZ5xgTxvNbYyoaCMPFpcJvYrPJKFojuFGoHyTJbFFjJD7KctduW6Ddw4qexeWVLfxyb5LZD8mErFS",
  "key31": "37ov2xfvC6rCdBjkm2ftyFLcf4JXs9yjSYG5gQ8hjoDqK57PxR6Nm9b3PmctakxpHnhWkDa9owEe4ED7LqBNXNNB",
  "key32": "5kghTyJfuqT33x7Rm1yXwPk9P57VGM4twAw5eYp32pPKsj4tUwDpFTweEZ8yH8E2kV7Wz4WqR7jqudWPpz9Kj98h",
  "key33": "2JP1tENaWjL2E3oAmPppFinrF7qKsGzKQ7hb7DrzHdy3cyVJn1V7H3MmsUciDZhthkwrhx4QmTfrmmt8yk5aEHRB",
  "key34": "33uFiXZcFci1kfd2tfbEvWS4fABYSt6MNnqjdyhSnX5EBHWoTaJrDQdEgcgZSBFxHaGKx5B6nsmsCBfnjN9uNkuj",
  "key35": "G3z45cHKcX9gteJFeQVEixn3CERMCYZq1PAxQurQ1oYxfmJLj5zfswPcmrNkaEg3iQhc7mkmbmwR1VB8M3oEAdM",
  "key36": "3k1KSFYnL9mPJ5PK4HxJ4AioWmMRPotABSTze3HrgZJUP2Pknbmsfz88uiNoHSe7FuhAgHVe2Fmk3EHuDydZC1Cx",
  "key37": "33KBMfzLaxpzaiuwgFdC8ZxznUFMriU1R3kf78P4CV9J4AwnBhiF5rdYU2aWiXcpKwNAZW9Z7p2rhRmySeCYyL6L",
  "key38": "pXWUG4XaUXmfQFEBNp5QbcY5CabDvGXJhhSDrEVgoFdAB9RJaPjwdFznVL8746AowZihFBjdv5gspEqJPy4Sbz2",
  "key39": "2aVPmdAgLEXtPMYNR5DJ5i3g4Ak6bFe4b4RCncwb8at1KCrCyhhPKc5SqDnejHKEh9B4zWp6DU7x4worFreyrhK4",
  "key40": "3Cqxf3eUCaepjVfuEBoxWgE4DJcH98iSBUYAX3vMEDujDAdhjpugThhvmU28o8fc7tLwxMAb4vpZaAZqBqLFBJrf",
  "key41": "2qau9ASyZeW1FNA3g9GvS9mKqQxSWR54Eo3qFs6W9TtKhskFs4nMG8vx31CGJCfgvTekePUcAaU9Ap8ZE4uEmf21",
  "key42": "5NfBUKq2tX1iYZEbT9xdC23oes4Cpq7HWVmaW5pMGGGAYdLuPwmkVyiDRY4ALwcMhpfrTUsBsXv4QNCdWP5fck8A"
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
