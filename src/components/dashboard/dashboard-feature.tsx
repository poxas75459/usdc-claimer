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
    "wgJveuQwD41hTCUNoW1vbkwc6tyQCUNnpWtQyejMbvpKtiGDGToKNmgu59pcQuBsqt4cvVHkcPrAAQY2LpV9KN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gjPgCX1ajSSgPkRZzCzMbdbWWcGzsJoGdjXXSpAPnH5pnEQaCw2Q8inujR8cA6QtLQqFvBtSKbTDu7bdspGvKqa",
  "key1": "CEfaEx1qr5y24FzWtWwpoY22jtbiEUXC97wA5eJUNryPcn9pxBw4f7FmTVYEwgjPinEHmaGgqNyD4fKqWR3NzuC",
  "key2": "59Wx3sQmjcx88uFm9iPu3tErrQdBBGMkQAvizwA3iimXPTBRsQjzGTQKPrDHYZMXBnMTU6DbPuD4pZAg6s5zRuFA",
  "key3": "44jSQg9JHjECfoWiWeLmGLGS6ZuHWijJAwMbs4d8u6NUe5aYKR3SYoLyH4XwFJyAbBjsmBXvMeXf7NswZpUPrZC",
  "key4": "2rjuZf1Y2caZWSRATPvwjseAyDQYSoehBe53h5tHZ9BmpMgZcxk2dLjz6rgS2x6GTV793j4hjQifGpuwug8dM7Ub",
  "key5": "4EKLW9hHXEmqMz2j7uZDJFuDLkcxXX88g2TLEv5k4aBiABdiyzEELcAsedxHmyQCa6yoHj4X8UdzFWHeqMNKhj99",
  "key6": "4DHZwMkva1SD42qdBnqJ79d8ysGiXb1yeeA62g7P5dm9bg5jZV6oKfJp4AywGx1cTGXQc9ExWWZMDeGiR1oUSCXy",
  "key7": "4sWB8DU55o7q1XcLYRznFWHJhmuHyLeukUNLMKE8nm3khN8VtyDtJt5ArXuXALrjFLAe5ZCNUAWcYn7hEQZ2i9p3",
  "key8": "4KzSai4ZBsxN7bQR3kDw1PmtfzbBAVAguwpTNbPGVgaVMJFQzuPX48VQRnNB3TwJADJU9eH3BhgEuHfX5BfCRFuu",
  "key9": "5PmUFsBVcrmB4gVUpXhwdQDHK57cByRad669zkY1YufvruTbFcFDfd5oeYumoMysMX8NwozD3ZkrhmFjfkUpeNrS",
  "key10": "i84xrKbu5MkyRr6FZefFBN4dwDgxvCfSFRDeqMHeSxsMS26kiBzch7gphW4wCV1HLafiFa1aLoUxrqpsmzdRzTU",
  "key11": "HVowfotsW4eUWFGhoNEeeKwj85RPy41c9ggDg8DFHiH7KoDY2gAqQSjLH5ah5ttqxRorvDjic3819WPB4qMj3uR",
  "key12": "9ibKvcPvSumjYtXXQx4ZTVvyB5c5uzWs1YiCo7DKdLQnqHvSAhfxtcntvJxGtxnpBV9vs3YKk9RJGivrQXUZqTE",
  "key13": "61pEmB2QziZ6neTBachoNP3UAnR9yTstLmmEfa3diHHAzWzScLVzKML3HvAWUEpnzgD8Fd42pfWtK722yNYcqiXa",
  "key14": "42pwjKWRMd2VgQhanvMUNXDRjrqXVKBNeXpuQY92Cmu5xVBKs6dt5B8PNyYpSbizUmAkox8tBWR79KCaVefmf8qS",
  "key15": "3hHafYYfjXHRxx6MhTHBzM2HHFj6PgMXin1c8s8qLVxiCcaDbcKk5p8s9qRDuKnmBiTYwogM6YHd2NbmHchsjzyy",
  "key16": "2hNpJqg6ULEsshfKnFkN3eCjtCxhZz1sE1kmckE8JYXk17MFedmHpWnHkFdzidW7Jbay36hrfnrCSBSKD3GCym8h",
  "key17": "2FtSS5dDD2sR1Aps8b5r5oD4ojMXdAEH39vEkPsGo4wg2Wfj6kHaDWT6tp8tfJYEpFExoFWg7WvnonCA3U4GAaEh",
  "key18": "3q76pZ7QXdWxBWVVSK9Z8m1T2MRXSWfzsAsQkrtbyxy5d2zcDa88rbtmP2uUwVW5ntcj1geUC5f7vpcnhTn6oHJV",
  "key19": "EJW6DXjcWgf2VYFHefxNdU48mv34KJ2zeim82RLzScoPKaTAXdBzKLS7nKxw9uXm8AS5hXt2AAEfH1wjxzYS7uA",
  "key20": "2r7d1SdRvyEcNEbkyN5WJuTtRLrRRuUVN2tiwbHVh16885dknf1P2qe4eqFJ643qSoPqQ8drduf1D3md2GMpyqYU",
  "key21": "YjEhRc3zY94skFRiPam916r8ftwY9fz1mLqiAFCEQD4ehWrT48NGE87kCcj4Z8hWiLUKVGcZPyfnYCrP9pKv4gV",
  "key22": "3MtggfQezqcYtZPFhrgrDDo3SDU85P6u8U5RooJfpxE4yUi9XaCKofiMxNuxYGdESV7gHmnrTrSDzJdV5F3N9sjE",
  "key23": "4gK6ETTp8C1b1X6ZUQfUmevGqETj7mu3VTSYDP9ghCoAbUJoyHrEqDwwo5vrf4vS9CfpBV4GBbkeNMmaEt7zrqYM",
  "key24": "2iWyAvTMyYCpgomtu7jGF1wRmcb1PDYgbocx2MncttRBfSH8zckAntAtsS7SijYVoqPqTA7y8GwMvowuWp3Eibca",
  "key25": "3z1b5SPVHFPQkqTSRbj4C12RYmNSFrFwiAXkDaMCTUA3XoUU3bxrkHZp8uBEXFsJrhXoxMw6qSnHZXZofWrfUSvd",
  "key26": "2RGRvViyZykWQma3UMgGfypK9NnzKvwKwTkMKeMLKXNrRusmqajdga1WgZg1SEpwYRwR8hd74vzFdenbfufdiPbe",
  "key27": "KMribV1Y9woEqqdiVLqPkWjTgdDwq5UhtiEB7JwonRyeYre7ywCCscs8gzaGivyPQguoTSUZtVoyN3uzKUsZ1k8",
  "key28": "41rb82MGttwPeix5mEpCxX1AC9and2gghpTKKTGPmjfMBcitXXkG64DNEinwd8KhFkNXFmf855nSTAnZU5VSDmRP",
  "key29": "47maptSStrdkR49SLFr4Cqxrcfqskn22p6X8imKFzntZ78qzbXh4FkHz86aW998KUNPdZc6nAgpXkf7ocsryH2a8",
  "key30": "f98h56hvUgf1whTQrRR8AiVBiAb1MKmdPLxQ1npMoH3nbnGj8Pt3QCm7eN8mvhMrAyMWntNhb5Efin215ds1HpT",
  "key31": "5MNJXxE6JWdue4ZgXbG7GUAobsBVHXXmNavzrR4FpW9SgjeHzNZbszLt91zWsUufbCarmi6V1sU6N3Mm6BaxfJxT",
  "key32": "5W89hJSRp7m4YunRJNDQpmpveYcBbRRMffgM2ff9eZ1Aro7Z1s1Ede5u6msgrE8Bf4QAi5YyU44wXHWYAsJjMc8n",
  "key33": "41mJyV2XUEUQdcHn5mNtm2JrxStkZmPtDDCsKhw8HiAnd2XdNgbnPuS4T53L9KqSTbFSBCp6AritPS9UypEFosyG",
  "key34": "2GNGiGoKUdjdahVpgbwSyuJDdVJcDJZkhw7B3dCW7GGTwhJ46teKRdStaQvL3v3cxBx8WrEoNprtg8wZFvNLECXa",
  "key35": "2c7sERWprpfCrnSyP1tPd5WbRaFAfFSKw4Vy8PaGztUMpytYMDLerGXy4JgHqbrfXiBeGqwhvwjP25hq25myDzu9",
  "key36": "3ro2HGZZ7gNGHEsYdFf4kpsMPsFKHotfCdUc4UWTHY51oNBRnFkgEyt2GobkeQqsRJQKJ6e41Tuxdxjis7VLiRSH",
  "key37": "3orkzpYYWitf2EDaJNsAR63fH4q4ZfbX9fPkW26Y6sJCjpMdVvjKctnqxYkEmVHKbyuFaCSXJLKTUpQ2b9N1vMTr",
  "key38": "2qKoftqW8etYWRU4oxHzxTXov2MKL3LejEi3bcxvSzrnFTujojLBWqZuBqH5R22sB2dbJ3G6pP4XAwTubRuzm7Ex",
  "key39": "3fysSNNmpJQYJSYQimeqVynqtjuFX19btMq5Y67ygzSLAMdYJ1nz4YQ9vHxc1X2LSE3PzMrSGxRev1SXhByA1YTo",
  "key40": "2mcLMMkpFpfNBT6bJcp6qaJGfiS5fAy3rPY1i9ZJRHiEhRrVSKCMvMxYcXnohpGpotSFYFZAWzosbPUJ6UHZ95ho"
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
