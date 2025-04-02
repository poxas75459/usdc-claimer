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
    "2kCk4tUPqYbC3NsnZFDT15xnguTZpx9QcD4fgkryv2j8CqG9w4SyEmZPQjsoj5X6sYXYV412PNAAoYYjMgBPCtf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iHKbh77Fbq6YmU7GyREqg6zCxJPTWwWsJ1ENCYTriRq7quSCcc4TqP5km3QkAWLFN6p7gV9zDk35qyZygvWuaYS",
  "key1": "4kdbYJ6vTW23LF6HkPa5USJZjW2eyhYNRYPLd1QZpA9P5kXjRfA7qNebXssK1f6SJYnkHe7EKtxPGMUnxBqt6mTJ",
  "key2": "4KsmVR8ETXnGZb9gFUpKwyisMp2Y597jfRMc3EG6taD4EyPtrH6ozRYyRsPzeJjJRgKKuTtsYJsXwx7qmhZ2dEr3",
  "key3": "28AXAyqpHJY79RRhqHpxigtVQgrzw54sR4Mq96mURsvgtjovWv5L4b2jHRgm8Y6qpuzqKmn6NsjhsxEXwjpaPeoW",
  "key4": "4jQHiv3kAe3kRU58fEJDcZmpiq2Ae9F8N9249YAnJVhUQ1YC1ZQW6EeJimkkhnN5hRmG4xqJ6e8DxShF9gAHnzB2",
  "key5": "3sLA7SJXrB1UCXJvCrPT8YGjQ4HovE79d5RycvnaTks4FexRWBtAKRUo7WRz8LSGppe4FqrkxKNiC7sqwKEoshPB",
  "key6": "4n7igDHgGtj3mxetjZGsEoMznWfAh46KgZcxjSxqnqenFb97LEDzLhySYmo9LwYoajos6ZSD6icpGXmyCtQNx3sK",
  "key7": "2t9QiqTVkzdbehn9RRe5eEH2PSombG18tAMadiMyHDBofawxrRERgaHH6sA8k8YPQBJwXyF7aAZtCx1j4xuBiHh",
  "key8": "21gEPR7526hPZbYHqNgSCfsWdCNWS4cLB9siHHNVyLcJGpSb2VMfmxedGA9iDb4yT4iZoPWnWS3mz71sZGVHeVkL",
  "key9": "64TYLqEccxxQv3NLBXLzUKuFDe63FuEPPhEMiDXuiLwwW4sH6GHo9e6bGdK1FJx8N9fZacrFouG1VyGz7om4M6yJ",
  "key10": "5i2R6um9nHnoKcgQ8R27mJ8HLKYVF877i6UmJFS92HgQJvsmB2V9ZDCd3t63RYRoju8xGLPBHAz6H8x5ZB7n8zh4",
  "key11": "3JhBYfKy5EGEihcKB3JCxoNkksb6B7fEpfN1twHL52J7szDDQBGN8tsbRUsT5PmCVzA8Gx8xfQbbW3zNoU4bZeD4",
  "key12": "4ygV784jaUumcJwHfNg4fkBVtpcWiQsbuA9yBE4Hsw9vm8ouMqfe462NMh7owLkDYeKXPkWm6ngdEnpd96vse6kB",
  "key13": "64Tm1Jn2shZ69UFcGDxmW4v1iVu73kLxDSqfqF94L3UkWzjYNjPBoweJxAKHPBbGcPTbPtRJzHU5GxPy3tLriB6P",
  "key14": "2AYNpRd6SyU94qKPR3US2Gz9JUCobEuT34jbtnqFMfwd5Q8jEEo7FXxEHrxgySugjeANQZJPqCb1MhuNfPVNEpiZ",
  "key15": "oK6rCEZbixhsMa97RmNfwfPVxkFaqfvBG5PRTjcDQ16rfbNeb2ZZno8R4GUapQxgqswEtTt2mKAqsQU38de9rTo",
  "key16": "2cNtEtzVX78KuVT9T6jM5qRaRG4DJLd5JjZVUseiuQUECdCDwBjRGNCuKknrunfAGNdcPVyFfLyuwABazV52m4Ne",
  "key17": "5T6AMUgYP47jiv6QnvzvhU48rXUoPX5xTAQksbJaFTtBwEaLwUV1fdhbKZShvubNBiq8Vz9bt4az4XBptq93VX1n",
  "key18": "59HbGe5YJnfV6FZ4bCSeSUvfejUS7j26fW5Ggz7ssvPcYsMqtcb8hEPKEbWUX42bkKpjoXhddPjAdkDFK7BFXv8K",
  "key19": "2f71x13XEj3sjJW2MUBx5T3SijgjuMDcfcRGovgEencHK3URhnecpCojZNeSxC1RR7EXWVsg4VvAo4jC9NLm9aat",
  "key20": "YvfcWByfadeMjjLdEV9np6Hq4TreXUgX4DsHSEQ3zwZReCJQZNi29tJfPm9VDoFPrkQoLTiFU7UNdrwyg8XJ93H",
  "key21": "5NsqxM7GCgo9T47aFUtY1dPAWa9GKkWbne1FgUYwsmW2vuJDNfV1bftjCjmqMQBLgMciTYYRx6cguWhTypaWAQgh",
  "key22": "5dDpxTGJ4BPdpn7c54btpCMA2kZsBZzbbBqACGvJWVZ3NJe4tFsNGakpYC35fz31djwkMveg6KddgFCyAaRnqnVB",
  "key23": "f6enEAX5H1B8WMVvCA1Y3v9tC4kzciFsQgdZF27QHPK1MRUtQNvwdAFr8NJidRPpebfVYhCNvrhEbKwrPP9xrsx",
  "key24": "5BaUn2P5UePfFfjbNU4BvoBi4KCbP6nLKhJTRaeyhRJcCtwHXCjtzLe59WAtekWJ6wNR7Bjn8nnuquGVP4Mk7Vna",
  "key25": "4qMdKnAANjtMrZHnZ7BAfiYyozUVKCCJoNfSWBfMSzwiKWh2hugWURAKs2QFmvjfdRVFNuQs3vTUa4Q8juFzK4CW",
  "key26": "45vDngBFWJVKbyaiuJh83STuCLffmPbMFDB7h3RqbwN2vqdYyCRf97gn7ZR5DiMfMxbVgQJkctSvgGc14MmCCT7J",
  "key27": "48yzVJXfvXYYxisVwBo54AjJuXAjzkwsGxYAC938qM11tE6xe3F7cysT4DosvD8oL8yBpQDqCn25Z8622kfarxcH",
  "key28": "Up5Wh4iitSLN8oUkFnQzMJxsG1uQaziW2P2TcMyqCVh2BLX4shvSqTvMygMiuMzx3VrQmzDaArbCrY3d8zuQe2c",
  "key29": "39GghTq37kMb7wLcNJcaCcN3WKwCsKPJ4ghkkEdRGUcQBXTuhTRF98cX9TKTBNzKDa6VajStHU5LAJQsaMx37hK5",
  "key30": "2SqLEcjfbat3XvR6agrH832hLzaFEwLbhEpZqW8mbKEyrpMLjYTdqjTJg1hKJqiuxQKYA5ipfQM5fEMQt3uXjc2d",
  "key31": "tyQ53myUtXSa9hAb84ATZB5FVRzno7cYgGvKhj5BjQa23FFUmQ3toofFdZcfCZgnEwU68djNEejSdFktQuW2xxK",
  "key32": "45etfqJUiTrQw7f3d1pbGWvQp4X4HRyib9gmU66sG3WK9pt2LESNdD7wAKRsnMXdptMGsVN7vCYc9xC3uPft1aJR",
  "key33": "3aAhJGqgQMLYhyip9GoXYKUDwGoMbBwHF5Vw2rLnaNv28c1tzJWZqbBxzshQVNsBr8CoGyW7AuZaRqtKSPn3Vuwg",
  "key34": "pfbLCoYjDXJ1D3HscM4BqCVZGKCPHQyX5epxWL93k1j1Ltc11Af5GwpVKvwaTMVXBdz1tduD4D8pmuxnwwimoTN",
  "key35": "4SCLEWHiYb2MTSEbXw3Djq2xNAk2VPHc4aoQimrm1z1A71869YmcKfbgKhEj7X3kXKza2r75GBwL36R2CJiGQLuw",
  "key36": "3fPPj1QpZQxcfZuKDXkV12bZy5zwwAJe2MbCoBAAbJ8mafZh5Mg79icBs8uY7Qv2Yd14oBU8Wekq95KUr3LMHyaH",
  "key37": "47TRt8N2mkXHEy2KieH4TvQUKHh2hyFEpYSzS25ngkxMTi64kAFHocgycXetW3N25NGbKGQUNG2DPXNM47jvUZtG",
  "key38": "nN33GxGMYqSwaux1xTLGzeRm4uhLeby8TDQC8FdWCVKvcCm999UsXruXWobPRnaDkuq4YuCqtUaDzg6iWXiN8W5",
  "key39": "3THniU1v5oWn2AXyNYTVAhkBypnr3FABkTUNi7utTGQo6P1wEtk8F56vqiMcoC9kySpJ5ncdNMkLN33HFLAV19kA"
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
