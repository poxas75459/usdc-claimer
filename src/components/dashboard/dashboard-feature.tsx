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
    "5SFAA8YArmUGw1zTXiYqyCNXnGoLuEvZndBKPAMckjUgi3qphnbynmEuaDoDEDyZa6PfN9vU14i6RirQLWfimrXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rqwEFWZJhjvtQwUxXeEEvtBEBFnw5Am8tjZ3Ecwq2mwZKqWZCDfHVZ9PkpuNkrtEpNewziCicFxuASqCqty3rxZ",
  "key1": "61BqjcVQkREa4CQBuQ1AorbDREtfQrerTeRg1FGPKfbFXQdLqL8UARYFjwryaBoHAbpMaf8JgnZGbRweTKcBZ26J",
  "key2": "4tdSxbCepcb14uPQjiKd8esSrMLwiejnQTFhQAWvKc1gHiTUNaCE3SgvCuRtwQtUyvQTGrv5HNgCbPLdywVqruxs",
  "key3": "4kJLYjJTrnopschkQtdpfHyKv42Gd1ws6ij7XeWvsFmZvJTqmTg8xtVdufMh7bPdV4LH47MUgrFnR6WLWeYTqctQ",
  "key4": "4FLWNwcBvvncvrFjs1PCgD4P9vvuN7CwQetfs6efcxoLJrH7hcLxRMr9yVDpmVM4Ya5vtViWM7q5Au52Vwixmvmq",
  "key5": "3WXZnyfCe351WwYDiNGCkWcLP8QLVQNAihWVibB3PRJjQKRXYNt2JTswA9YXUhnj5eGuWcsgsDtPQqjHuWXCn6ZU",
  "key6": "vaDQVo8A35EqKRHk6swaimkE7iV32ie1pjywnjS1Mmgr332ZfYPZqyZ4mHCwfW7L93kqH9QWo3JRoCD9Z6d9Qjr",
  "key7": "5DKEU34xH9CL5JbtK1qSMCz9uhf8gMWYGbZNirE4arAYuFCDbYUH3gBXw57W4Hk3heNnyHVgyX2BNufYujaqQN62",
  "key8": "evFfbhsHEe41Q3z3R6GfptUXQwCfm2bk6ArDuPupSVK3ZHPuruA4QnZS24C7PTLyiWMBimgh7LtdzsjxWighdVA",
  "key9": "3XoJVaHdxC64RUN8rxJAiRgn8LDCxpCXFYPWVVkrNNYpkv14NdgGVrkFtzYd8LY75JYLsVyTnAA94sh6z3yjmjR2",
  "key10": "4LPLHKsSgLT66seoc8xGBgXdrb8x5x17bQ9ivHN68vLivsBjmBsaiQiwB61Ak9J6sZ4nPV1mchq1JKsohyKTXVDM",
  "key11": "5vBSq2LC6CEjYkbwUSm4Y8SBMZ7cM15RqfjCj4MJcBvnnA1PaHzkwGvmsNqiGCkhuEhVf8BNv1HKL6ocECAxPFdQ",
  "key12": "24qXptJnriBUpqDypV2jde9uH9mNEQh2fugChHCejA1x27fz2vJFcgoxsc754CrC6V6k2Ne1WfoXbvbg5wGkvxd3",
  "key13": "4DoZSsZVJfdUW7Cd4piQzYv3myobsEuLgxZca7EpTBFjCLdEpxWuspi1WT6vWMemfFDFwtHsoaLK5nJ7mjGdwj1N",
  "key14": "4oMSVnPt56pc94jaDYfG5VYgcytxBty6irUvcyBRHFPhWexyVCDCwShBdTrGSU8Vz49Es7ugLGbUEeX2Jur8sx9Z",
  "key15": "5LXoFdKTHK5ZiWn273VgD1sbzJCQLDVDzCdwzqzzKnVGzVpvfUbrBb1cQjKbwbA2SqK49viFU7PbM7mycXz7eW8o",
  "key16": "5sLLKMhxV13zeXq98cSLCyVXscubrovzg4FKCwhwQVt5rVJTuFoTHLhP9YSpyT3u1ZmAw8FyrHVnxX6KNLFECEhM",
  "key17": "4okEoTW5y6KYniUbH5hjys5LvXa1JBpuyumn6gdPvZcshBAT5G4XvBA3ViE2wLHa4LDwBcS7Uf8c1TqiEREh5eYj",
  "key18": "BsZFaEJMMhxUDVZN5NmpFoy87oHw97nCf35CFpG42moWg2NQh19ZawYieBPJZDxH7MEWiGfHBRj28EU6Ds5pKSw",
  "key19": "4NxLgxz9KXUB3BRPffvBGVvMp4qU3bSB1AGkSPcJ6RdT8Let4Yf7dpuXr5N3sBtwLAx3ubGTsvWvd1q3A3KSUCo5",
  "key20": "vjtJm4z8C2DccDdpx2NrNT2D5CzLb3aAGdmWHXyX5Ka7cyWVAfmVEwkf8zuLYYnRWKfPeLZ76Ucc5NdQQgWCWyz",
  "key21": "2yfApDR1UEcjtfKBiAc6xGarStyfMRZCjwGxbxEWEx7jfS7mREjC8guH9BpLpV3ZhEuF7ZkfxLCuDyogCvqTRZn9",
  "key22": "QxoND5bPqCPSK51JzJjTn3Env9iBNDysHSRnaPi6Hx52BKxKEHFdEgeD4dw57PRxcF8nZ8xrCGEtniVDRMs5eja",
  "key23": "3B4DmBPmvff6jnVokF8u9F39JpM1VDC5XgxQeYm88349wSkDRGd9XfGS5vYrU1GMdrk1pe2heT9nuBeZHg7w9GSE",
  "key24": "5Uevyi8dwzhH3Z4SnbWfXoKK3wEmdat7gizhSSJCmnQBDQYyggaSMjgiNZ14BsvbYF4aBAuDiKY8Q65gVPWginSy",
  "key25": "5EF5Y1i7yXecxUojhDeC56ac2siB73aEfHJBzmnDt6djfc6jmiHRDjzz6PvYbnHQCA5mJ7kWef4wKsxQVi5at4uB",
  "key26": "EkAsbmWowPV1za1AJUvV7YWrH7ZL3z8n5f6e44agRi5ErWckEUGDBR553yionrV6uxjhqaYyeG732NohrSngbty",
  "key27": "5rqaj5y3wx8H5tLeFinMtL8JNgeVS4NMQ27ELu8Jjz1bTXhPqkremM5n4tbvQknHADtRheDkxvsemwe5JFPXhcTP",
  "key28": "v8BP44YjtB19f5N55iZ89X7PwEJ5JanQS1ChuHfWGymiuVgTrxwKF6XywKErjwYCDYN4Uv56c1SRhYNZ9bM2fBB",
  "key29": "4FMvQnJLMGA6cFaHx8aeP3URHneiJtWaXoSabNL8nnH493R927MXA8uJqKeDWJZnxotchrDggQXsQVC3wf2UC8xB",
  "key30": "2peQWRvuvhyrPptCnb9BwLtnP39a9P1kFRGjAuYHCouvmNThoH1G8BStsrZp6H6Zgc5p31U1ic341snwopaxuBKZ",
  "key31": "5ySVz2g8jZbzBtABTAwuBqA4eSdXU5HPHG9pwYuBk7uqREGwCk24XuGLJZFuEpxdm2KoMEVxhhHqyMagjWYJTj1C",
  "key32": "3Ncgwwc4MG6mNqsaodU5Qe4EzTfTX5Hz9wPMDrQ7ZSfL9hkzoUg3re1BzFah2tVy4NacNtGCznJvAGprkrfq8Xnj",
  "key33": "4SPeWqYLV46ZgNsTjHXRwm3GseV3kW7RUjnML2FoPbQXKPu31EVd7SVRHsTBtgVKQLo5PfKwW5Pz21KqasUG344F",
  "key34": "2Xcx1CwspZVWVMWTe7cHTQR4ymF8ZD3jLsLi16pGtensvSTpw8vY2WHCYz4imz1e7hhGzRHtnsucAVNA1AB7ATYx",
  "key35": "EGD9TA1znhVNJk1L7uHNDsmmE14EHA7GytA6bHcmrYpPzcXsaVHMzVq3qdxpqJQKkBgcbUKytCR3aaxEUXKpmig",
  "key36": "4BQem1FsPTTpb1HtCo76oLQXdytGjZ9TJyxLyWmE8dW2Cd4u4y7tyHGKgwwjKznf4YDvbLdMh3VpSBymn5s3ZiBX",
  "key37": "4VQbk4eoiuggec2enprMWWKTmeSzxPR1tutgAn4AfaWeddDgksfKhLFcq3JiCEP5zeEQPcj4TTZxo11nHD7HycbM",
  "key38": "qsVkL4MFEhrBTNLpA8GUDPMbi6KteZrv82pehERcvVfUJEvA2tM2GoPWVSSEd6n8eM7koPsBjagqUgcUEu1oecM",
  "key39": "4BxenCmvotYzNfnwrr5izs9jJ1MWW8gXiJwNJrLQced6P5Um7YPTyU65VYL2hBjxKVjwV2dZLqKW4vCzWXA3s1Az",
  "key40": "2rhfa7DPk8Mopb5oNULMoBF2XcZBveEB83PjbGgG8zx6vV4yjumKGHXAqiAvjNFBkcuRNJuNX1AoMAHNPcyRBfzr",
  "key41": "3GTdJyPXJ1t4WcwcjxFURe8bRcukFNW1gHfeJfENPFNvP97eKjnq2Uf8cqPRu2hKUhsJj1bimcApCjbEeCtUsHsb",
  "key42": "3jBtBCtjeJoxJVen5tN9vRB8rvJ2ewFtdpgRTp9C7ngBbYGHJtqmeANV4pbdeRRp2cta1NenVhspFDxnqpj6PNRP",
  "key43": "3QNzhnLGcDt8rE1LDY6MY1bPsAMdEKrQNQcPx7nSW4o6b6boLu6Y5GWwTXnkgeC49hgpdkVAGyHtrVWFbWCZ9iLx",
  "key44": "5dRA6XK5YiD7L4Rgzw4UPwfKDQACPMcXqPdwm9NjXUe6noRNBWEF55e1rPqHpgWQZcwfAmDAqfdZu18EfovgqgC7",
  "key45": "c4uuy3jspVUBBkbA4jZiWTV1TK3ZZN8W6e2UKUm5EiN7LmcV9bhSVmqV1DpKiRQUvJVkwoN1ZC5HZoNRDP3nAgS"
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
