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
    "2RPKgRQ3asNeuuWAbZwmREiRfCQHkVezNirchiWxM4V95n8Rp6zXWsCaPyNnjoWbg5UAp6ZtJmzi5S5RFbbvM9wW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UvisuXDJUtDsTdv21nnAt23ZufXfjNkPVohJHySgHpZs2CCtrcyBQKz6A3pRhX7bUWnKcV7v9qyFyT2hNQrGkBH",
  "key1": "5sGGiwVeGWcsNdMETkrtjjBbnz1z3nddyw2Ri2DKYhqaidkDURxmRNuHb34YJyqixD6T9ogPWdWLBx5RqF6LUDMX",
  "key2": "A877MghThMjXbsVjJQz2Kj1Eanv7ciUhfMhj86SYRNJpzS5mr4hFUM6NwA9GSLtwmuuPXh6PUvkoanJSn8T4Dwa",
  "key3": "2gM1gUk2X5tZmaFnQcmnn4EhZWe86okiRtaSdz29wpC4e5zVEFSqnfP3wekzYP5fuyw3AmjR6eAG1tFVpV2vJhxn",
  "key4": "5goV3KXDnzxXJEHN2WgcCFM9PTBs5T7uZBdBxaFeEsESkdKezNRJR9G2zPhTMbb38qoPCwWnqSyG4MZkQkTjJgNk",
  "key5": "4SmP8o9XGRgtGtTMPcLmuKM2dnSVsMTx2qwcwHMsdSjvh5rsexznCMRNcJmRUZ6R25S1YkVVGYTKusYCy3z9J16s",
  "key6": "2kwpofrUfpckcnND2FtCPqmiCUb1ZAQ3SMU7BvsrfbwyoQGi6af1PxiyrY2odAABZaBLKATWtdMHajS889wtijHg",
  "key7": "2N46MHbYoUCzopBNodkdH8kD5iovYEJCVxgMNePH1Q487Qv4QjXWXzKBXiegj88uEuCV8Tepapo5Hbo8vqMRrV8w",
  "key8": "NxYLHXs7wyUduo1SbBCHHKMt7peGwzL2hx2ezE14gcfq9mHDewhdpHjsHahcKfRKmemtaNZW8nQgBhqbh7eWEXZ",
  "key9": "2DN34ZsutCmizEqsrFEp5G3u21h698ND3c2QWbJBbCbe57XmBUkQ9S8aA6R6FW4Z7U9xo73BgxBsowdqy5WrZfF2",
  "key10": "5MSJg4QoYweDMoir2LZohTWwx8MNhwqfHiaU2eYdpx2UMokiEFZoK86YKfpR1jAA4Af4B3S8cNKc2EcDzEozR8sP",
  "key11": "3dBHGbQZHzHYgBtebbFa5oVevf25KUZ8TeHhg6f3hPcy8JKNjj14qtGvzhoWMVc3XTUXM2qeTsh6VUw7cvK5AbK3",
  "key12": "4nuQkUAnUWYhbD9roSjKtb7Vb93dMaLB5KEEwbZTGsxvVBDqx1psassU225ELAgefgAULALoAgdfFEJN59MvfmF3",
  "key13": "47W7mzdkksvcbXRFjDfNvTz91A2L6uhKRf1JjifYJGLaGR28kbhdqBTTX8EoWt2D1uK3nD4QkihLhGhmZX8BWMEZ",
  "key14": "5nkTk1bM2tkryvHBmExD8xQd237Xx5YWHQ4dHS71jLtW2vW43u5gFepSr8vJy5QsNCegdT43s9EM6gJv6egRERUz",
  "key15": "61LiCNrXu8zT54A4uZEuUbnoyYbJVhxXb1rK8TakMBhnrVQFA2e8DLADKCfouw8srttT5EJhrXuhYMgyHk4jucVx",
  "key16": "49B8j3LH1ZHbG5Y8HTQ35G8eBzYeRt85kRtr5cby1ecSQfpWHTXUE62m4VQDe797JbN5bmvMRa25nQbCWB3j7hr1",
  "key17": "2G4h4hZGh7Dkb98pTWnz9QYeCA6KYaEbayQmQ37WZDaKkdfcQBUZzoJAQ7KF5XWjqtc6teKZnjK23b48YxSDC8wc",
  "key18": "3gnaLJ7HmEWpiVwcM7oBokfFzCf7Gg1mnzN178XuLbTM5GSrdCQ5i8BGE8iiCPKqsDYvMv4wTfTy5qx2Zx8xT98H",
  "key19": "3iQwd4Ynx29Rj9EcKdKCmpg3EKejYjDW72GVsmaNpWFeAEfKhrrm8RX5RFcnhXCrqB6ZKkGt13XVfZmDpyN7mA2d",
  "key20": "5rkbRfdY7xXRaEQLXekCrMzVjYYRuar8p5yTH7P9mAXC1Fi7DiNeLitNPZLGWGSp2xWHaPkiK1UUtRqQDK2TpxmH",
  "key21": "5SAhSA1TChfHGU64m8PVxvR9VCVgNkRwzypkTVqNkoxgccFPMu2QqNrq2Dv168voX2efWRywgDEE8RXD51BS6L8M",
  "key22": "2tERiDEHSbpx1JmukcoT3QXEeKrNEwuRc4mpuWM2yTwKDSq6uGyw793QWprzZsDbU8qvoL31BNErdgTM6SS5h8QC",
  "key23": "5VP1kMzqciTBQ8wGSgL2irXGrngqSZQShEeKG2y7zPNSPGFuNcbGQ8Bb5ijYoCsSwgmJqkPGu6fKWF329GUiUuwG",
  "key24": "5kGo9KgpxUPc3cieonvJBTJfyFGqKnNDJKu4o8a4zYi3UQsAR5xRd4HZxWkwMjJ93dh8e3PuNKivLpqCL1Ba4oEp",
  "key25": "48QFk1UpV9QoQQeZsBDE1QfXb1jFxPnkA4SkKt86Dv3Y52Svrt866xuP6BVYiFu6cMVdm7vX7dXHeHsax5sayHwY",
  "key26": "4kCcWJnsfQF6vnCfMMh7uZpZjUFbWnTFKTuBZEFJFSp3WsBv48gLWtxQurrQyKJAUHgZ29hPkunVbwij9RheNZAV",
  "key27": "3tbPhoNRbkxCWBUu4wEhHs1DsmkZMzdomqTquP8Fo4TZLYTs8DTLWnWcArHCrcGexYW2Q9qo5vuc6s2kK6zA3NKP",
  "key28": "MYqe6GhvQwTm7zxKvSRj7nrzCkzpy9w2QhqLmoZHsdcaRigi4nH3TvCY7veemwkuJJdjy6vz1xZAjeDbj4VUKDp",
  "key29": "2DiwawyyBG6d8MgKticsQeSce4mso9X77ZAaMTHAVE5Jb5gbJ9pNDGFui2vXKExSdrTo2R5pPSwC7iZEW7g5DF95",
  "key30": "2GPsvaEE8zmUQkGjwFb4qS415SJHHAFkbQop7PTrMxKuMLwngAER2uxtt5xN7iHJtpGsDdcHK67hcgCqCaBtovmo",
  "key31": "3oXaxRMb2abJvGc89GTwipDjbnkZRH1at9f2QR7s3WZp2xAbdmK586CWSUVAnAS3hdqqMN1V6EHUCzjwu8VmHJAM",
  "key32": "36FCTNF5Q3oUXT92DFvgyKFP6eCW3oTEdrupLQdfrgzzM6hmGqXTPZBgyZymmk6b1B6t81CgdWnTR1tg8itbA7BW",
  "key33": "38SWDG2gKmQxHboEjTUMLszGhwsXfoyvwchXGQMWy9UjpYZJRWPsJJD5VsFxtmejJDirwrdP1u6YWNW2VVcUhMyB",
  "key34": "vXzBhv5QXEpiLZPDiq1ANDE7bqEVSFBnK8b8RRgQjKJP5ydbtKi81rUba4EQQDZroWWnQVkDGDEDioPGiWpbAYa",
  "key35": "TtqSy8oL2ggSB8QbDYGjRa7FEzTC8AWNFiYq1KKZWv42kMjUHn6zL237ruv81WVvyHnYA6274yowZoZ2VxgQJfz",
  "key36": "4X1ftegyCeuA4FvE2CbYd4rHW4hcs83X4JKCTqhMekYhNAHGrqrZQe85xvPmUMDum8JfZ1Dtbz68UUbEF7UCGzWj",
  "key37": "wuVDztQMRtexZWnquj9GXcAMCVvya9Phjo9YwJ9M91Ryry4hrGKtQiPP5tasZF7Q8ag9WoQVBvM1GRiqBq5m5cV",
  "key38": "2nJYUdQ7UQmLHvtsxvexNHYfRF4kUk9VytGB6isghGUB7YAdecC173Ep8H6naBrnKY1GCvRWXWxvYXghDHSJW3vJ",
  "key39": "2sxntjxupHVHL2wt1iEeohUtbaGrbSeW4RyEq1hBL6rVGxBhiCCjN4YTCAtjbjNZrwTCDfcjyEM2jFwwuN2fBLjN",
  "key40": "55MB5RX3nCjVg3tu4ZjYgLkcA36bwoBkLtin6Ae41uN2tEmqZxW1Krt7RSwZLGEoZgU3wkaZgcfcHbrrB6EnWAVC",
  "key41": "5BUuemxj4xb21r7q4zfCgZxns7EAsf1NRbwyrH7nTdZ5fcuPVYxGeyQW3639DKaSVTVWdZJ5eL9ufcZeWNnn5dnW",
  "key42": "3S9Nn38cFTqVDRvLa6sxyq3dcooUdWgnkgwwgEZwUnWaqmTVCCG1XWx6iPzHs2JPDdHA9mKjTJGgGHADRw4dJYja",
  "key43": "44KRPnSSW4vHbTHna5aMCpidnnDAkoZduThu24avGvqZAX4TWXGGNjZtfprn3Wh2TgGQhMM4tb3PqfxXmvbroudp",
  "key44": "26DpF6ajQj6zruPxcZhRUtfQXDoY1grXZqatAjpbdG9e9BLPJDQwaA3T4iXCHbpCQWAXUJoyZe1d62AbLXPvLJmH",
  "key45": "2kSi97Hf9c276rBzYJaDQBtthSxQn6AYuGkbbm3QeZzdBfFiQ4jpw3RHsvmKKA9AjN8zPNbjWRPsUn2rEAnuwA6L"
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
