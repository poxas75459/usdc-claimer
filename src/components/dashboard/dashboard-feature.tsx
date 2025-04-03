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
    "2jxnDFKPowQsHHb84mwgKRSpFMRUEoTmDEGt98z1ej3jZC4ruu6iaW57qohsXk7ZALiaiXPZcjgzRVqcz1pdHJyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mw4J9guFr7baAE4A8NYpSUodj3o84ZCmMkeovhEDDWrue1FyaWC1FGRKzMbhy3tzE4NoFPUFEgQaxM9aSeGDVDg",
  "key1": "3YGMzv5g7n1tzyRA1HCwM24DoaTGgL4qwb5oKFe9HwMhsBcNDC2FBWkUNXRJP5JVwiqCr5LsA1S7PuoWqFMYh3Hi",
  "key2": "5ettN3cdyi7ch2bWfV7G5ZAHEsMT1rEyyKBhsNrV2sjkqGtNGsGkBKNrakkTPNb3v8G59V1vU8yttSzoxSrZnax7",
  "key3": "5VKgvpFimoUT2ugrfQD1fQrszrMEwGJZQM96x1PaeBnhxHdz2VBwFxNhUdBhRTKXcfnSsMAx6BSd86RtxzRy4CP4",
  "key4": "3mNMntZpVtfiXQgj3MdLWWbLywZ8SYf6hy1T9zNuLo2aEGMGqvkpwteqk7t4yYegaFtMc4QZTPTo3B6fWMVxrafK",
  "key5": "55vzVhuWqat3WtPRAuprYnsBPg8t7abH38sbBKCBPgUjtvyfYwTSfAXobBVmrriNZB8NrbDyBhz6NyWTYSyfoG3W",
  "key6": "5mmp2u1TweWe6QbPVLDKmE6XFcQkSwLHoYJZfZRk9p2NpWhnymBgYDi1Caw8o26vXFEXVHcgD3LgQLHsm4Kqqa66",
  "key7": "3kmfm46n5uHpdTcMYRi2P2gWUiFsJxVGoB5cw936XUxA8ybYbD6JF8DjUw2BNpGtFv5D61JXWaoPYVTuj3Y3AJzP",
  "key8": "yDVAEE7gBCgTs8wkeKVBTRL3SL8GEComeMzjnyQceat5JfbmEF3k9YaoXb9dcmkyt1Xh7cAA8fS3gRdpZR6krtJ",
  "key9": "5moRvzmrkBppB4zNcjDgQ4iBjE3SysiQ62UCN7hKnm1C5pu9GVK4Hfd8ZjGTXFw4vo39QEzwJkHT7UppQYuVWBvx",
  "key10": "5nqF3Y3UPfYWetMBRPUyE85cRYNCeuzZYqgFNyaAj4UdN4N1hGVhdjCk5Vkqi5DwiV24fidK5PHLgpByvajtcqiu",
  "key11": "2vdeJndXv8UjXc6HmN496ZUyQrNJXLs4QJuC6dD61BMGqc3tneWaAmQdaK4KeNsWd7MkdQ26QCzgcqFfSGx9JU6N",
  "key12": "2M46KNiecai7uYed9nLEafiTvjuD38ouEKwcKkme6pD4Hwp8vTzGbTS7MS68MnUoySAHbzQ5mAJKqH1WKHk8SWD6",
  "key13": "4md97rPfFdnv5yUXvYtxb2h24rhsQt1KL5nt1oFF2QFKRfdQUs7kY2Vv9uL4ehz8L78CdaG1PbSK3gNys2z2nK2M",
  "key14": "4pcMUTnEQigJoi9iTczkYbMiCH2UGfrPDpskMSuP62HExCjy3BVZHzb9uyGTZtarbkz299d2MnhbBeh3FDn4g8TU",
  "key15": "4RGH6eHqbsxLJfKVB9Yh2mY78WbcKYw1nVnft7CMQosHBV4k3gGq3CU3xD9YcUEEDkzJS8o9JTcVvUTxs4rZsL8m",
  "key16": "67Jm2WhdeMTg1espSUXy96n8oZLhnDqN4m967MYCcpcyvDrJb4UdV2FCpkBYtFSLz6UEpuVw6WysVNVpy6MHGuuJ",
  "key17": "3oscsxJ9xRAZm8Jn4MaMEyXNoctUiWTbvHt9FGeQdCDxhxZGQnCqErDoju9R7dc5zEhkCmW2VB1DoqXR4bkU1vWG",
  "key18": "2LVYDD5KzLy5d3B73BUbG37bH11STjAHuFnVix81REZ4CXWZGDy1oYsHmzDfDQXshkeX2qMrkGeEPZZF2oQNWoNM",
  "key19": "4m41LCQATAG4hWMxeBdVHDrsCxHBvQpXwAcp4NpWfCUxR9WMNQWUsXtKtr5makZkHAcLSLRHnrqij7uCjtrJoRAQ",
  "key20": "37SZkhApwAyAyaTMiFNc8pasJbc6K7GDeqLbqMo5Wka5RSKVDuJKZKEtzMoLkzXR3JG4MuyPLYttu8LAMKK9bKdr",
  "key21": "3aHzdeGKvBQqb3TfrQG6yyPZKZ8RDBygDwQv2NoaoaC9vJWeXFz8nmkXAWrtVSUCk481eFb5KbCxdR5AjLiFvdj1",
  "key22": "2Ga9Q4jY3jLP9HVCFUAdgfLQAMLt4EJwUKu9LzZjUxsrNVrwpwRWWNBRd2UXg9bzSjEWsm6FNJhDNoYBWCN2Gp5D",
  "key23": "xyBB548yAz82dkQSBy2XjsobgCHqVm1vLebvUQEuHVVnTx8bE1VEVe31PrZe1V9dTg66YvsuDBTPAAijBd7xATf",
  "key24": "3Mk4QXn99ZujJvyZb1HBh2s2eHsdtTjBn2FBZwjTG26hQ4U5V121b8FBSdZyJmQfYxeGcqVrzGEqs55rGudvooKG",
  "key25": "5CmmcpHSgYLByuGCJQ1GNp3udSnJ9LeCTNh7hbMsSrUtMe7hYYfucKGWwkmyhF1RT6UAQxDAvD7RtVjJDWWtX17k",
  "key26": "519pPkHx7tKo6YGDmksioEhdRf22Y32mYDDzppjD7XSnTdHfqqQ5mt7FS4qS6gS2ibpNxT95xMmx2S4oUoQhYWus",
  "key27": "48V3KHEUoZo8B8TVKY3vJFvHPRdfMfLmNjeuA7YsMM4MiaaodEP7qTT7D1cZdPArGRVqzwayAfCLEFvNti8StDej",
  "key28": "4Jccapn4GnvtE4L9b4w5uXJJQqvb81J116y58N9Lnc1s7ZbV2ZYFfTYC8EaweknM6xLFEa7zqZFkwKdmANY8WBbx",
  "key29": "45fjpZABRTJX9awoVy9H9jGVWEuaZ7EBJRemze6Eap1dAmQM4XHHiUqHQsLUkjf3Mvxf9Nuc18JtRLegsR4h1n2b",
  "key30": "3D7onwgAy6JEuaEckrjtH2kKgeAapnGYjthvpqL76LwzyhyEzWJZi2EzkMjtKoejxAhcmWQn5uXckH5Lu2Q4yFbu",
  "key31": "4FQfGAv2RYrzi6ek1BXDr35pFsuzDvGsw7LmKkjdefusm1S8kD3SHNWgQnSjbYpZcds4hyXj4q6JD9dLWbLcHuRm",
  "key32": "2kkT8scFH5Ee1dXTqQTfRidnWZALkX6by6KGSkqMi46uqgw4RTVwFVzW4MA5hFenYmEWK1khpGuf4VAFKC5sURrz",
  "key33": "2KFQjzsoLVbGrqReS6UMYNJsFT4ikh77AkEmwYYRGFNEqGPgkccqvsbPqNjBWQDGFQi8R3NZrtnX24ddAbsH1cQ9",
  "key34": "5F6vCnZbARHHaxUhev4FJy2gw7Dk1D3z3XA5uqhrfQxUxdSzgV3CCzRsrAqDctBmkCaiEeTa5Bn84VYfi2jFrZ77",
  "key35": "4sy6sH6AdCeJ5ifwBXYxDUyDKog2nASRqDX69Na7zMnCjw8tfVnrejeNqvLbrPzEcBNnY33TMhtRBPDLTj55ePfo",
  "key36": "sf7sAqpPwaLnxXw6z4ryrBgLUDhY7sXeviw9CvYJgLghZEohrfacsiTth7Up5JB56uUvuBf7ZR64GXYg2VYxoTp",
  "key37": "3uwjq5mk5J6aed81SnuosyoeyKRcReskx3LiEGqd6EcfKAWoupc14cmwExvHPwUG4iNwzJVsGUv1BJPK69iNvgs",
  "key38": "5S2qcUhkwMFsqTswe46HCiF2Q9BfjF6jTy4V6PJQRZsWMLjoF3YqYPG1ZEgS5oMWjrCT81RaQ7Dn377avNMo9Mzq",
  "key39": "5JjCtp2Qqq2LTeiTfiph7HsV4WyuVqYGgA2tNQA6NTFvBg3vqBjPkhNoGWsCtKewEN4cRDfWm4wTCGA6yPo6J2wC",
  "key40": "4MjthLcHb5GzYMUBWRjJN6tS7eYBHFAwgJ8EAZrM1ddocAVBCVBq9yPnQNPLSRMkXNDmH7bmb2Ui6pJ67e88C8c",
  "key41": "2j6ihWoEenPaNsCbJ2nVNeU1x4R4CVAJb78urVxPjyUrB4DMBEs7siFKJJWdERrwEGUv3a48D2CWMNMgVRswrPFf",
  "key42": "2gXmE5nTWGyow46KKZsfJeZjFbvWwr8Bbh2APCDsGjZt5d6Ym4qokbJntL8QiP3vgKorYEJPDbfyYWfsw3xv61aM",
  "key43": "5Gzru8TFBWw3wemgb3zFjrVv6dUZMoRhn9HNnmzyRU5dW6cPtmZZPw4vKuNgzgEL7uMFLVGwbzqSFXqbEBr22jZp",
  "key44": "3AH9soZog6wXsdVRHsknZmVptV6JkSXC468VjtiMMmHaijxwMtfBSQxy9Vbg78GabiR8WTQNtgGXMTahQRNrqgQo",
  "key45": "4XmW9tn11wTNiNZUGqME1Ur9AbSU5CKmqR3DgLEgX69MgD99dDu6Z7EpXRY781ktbzXCXpHrrXUdYB7DDT19sNg5",
  "key46": "WkUj3uxdmuuBE31Md2a28PZZbPfCxkE2omDh7eWwNGXSx4hiFBNQbPpSBUzaF4hg4umu9W228j7mg2UbLuETthb",
  "key47": "4fmjqMY8ZbUUWR2yufp8zR54ioFgErsTbK7gHRJiPpQz9XWCCtTmWySPaS7ebakKCDG3ZHrsqVcnTAAgxk3YW3Q7"
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
