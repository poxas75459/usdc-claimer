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
    "5ZzXf8jwo2qQF5TnpLkZ42h1YadokWXZ41B2jRgHyWSptWt3fdJzyfAarFx4E36NXdwLnU22aHPsgnMTdtQP66dU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AqHRVewMbpvNythztCiU9Svg3XPhMUABoe9P6fseNUBShe8kfc1L8ytEzKVwk4cyGZxgdTWjBAFduXyvvivMkcn",
  "key1": "4UxKzvzjPn9fjPHKfF5VSLVD89XUkdtE3HEbxV4aciGSkA6BApMfzeheoPVsixFi1PnW5CNzLgWz8vANhLn26Vo2",
  "key2": "3BWLmg1iRu18pYyR5T18kSC2ZHL19jebydpL6pafwovqK1jP6i3cEHocxbehyLxcwG51MdAoWyz36urA97LcYbAD",
  "key3": "5MYabzVnkWp1SSRYyKrk5HjEFvDVzmXzfyVbY72NtpDRX9McKZcjwhex4G4XX3hgzWLZ2Cafwr8QXK4wwXSS8Fni",
  "key4": "ZgE3qJfkXYe8yrJZTDFParadSR8k4wihckBh64YGHtWYR5FUNvyv28RNfrsDxJ9xobhJp84B1KezJTmBocWm7td",
  "key5": "5ztgwz5dcJW9ykSVKYc5DmdFbbce5s1UAoKFhBqA65MS55AkWvnRBxjmh19tRR1sBV8DAvjUFomCDmofbfyowTVx",
  "key6": "2K42HAz6jRjoH7ZZaAkio8rKuuRQZd4JxhL7vhQfsoGzEQjNxZGUSksSMfE2dc1L7iJsfumy37cefLXhzHB6HWA7",
  "key7": "2dDKkNEvhMEGBgqbND7Y8ssbrds97YDCNuvrhf9YX4wfZNkgwYg4n95uAsEAjTXAxW3mE6fZWLX8YDzyeLPUsZUY",
  "key8": "2dQy6AuoRYRNXprpDHDkgJzzvytpUUAoo2i2fMqgUv1tHTGoNcwB7PTHipmp7WttsRhJicKMHasNPsRUWuXAdjEJ",
  "key9": "7gGuvLaWu6k42PcQxnhoJYSgvgqGTHYEiug28FjAvmaPzXAywnGWbTA5AuzG2ivSyYCN7PYah15qBsDA6BypBJp",
  "key10": "3n8YREvEvP3kRPTcfUJLgL6rLfhQVQDyTH4ra4xhaAM6NYdCfq9ZRvK48PQMi7erz5izex3SeRTR38CfexVqjvAZ",
  "key11": "5XLBfxhmgr2aQZfnkAPyeMVtr9rM1Xip5xE4ukmdxHPckmnwkDT857NwLewyxvZZMPUyfFdCFW6F6GtPfAeDQUgo",
  "key12": "3ScFNP9DXSdLmUPDNepmwadhvUA5xayzvi454iv35Ydm5NQwYsTgyhopSoecKkYcBzBPPuU9y8RcRJscvTJ96F2d",
  "key13": "2Rm4tVpXvUpt8DhRWznyPnNT3CtxYczmDzH5FS4UMCL8skw8UCyCPEgmSM2F6KirPHMJz8FsfUJnBK3doqzdytUx",
  "key14": "29HJscgK9b2oCyrgtNxXVZan5srQnbUD2MGqxym9A5YgGHLk85L4gZHfr6eHRW7H3tk1efh3cgQstgCiKqDxDqNt",
  "key15": "4MwegKi1sAh52vN69DNcp5tjk8TfmQe3HrANbL1dK5vybjtXdr7dnA22DLUYfDwvbztT57x3pEAEHEdBDGLhFVqL",
  "key16": "4xfAu4YRPDMepbUwNdjzxVmGRj4MFqGfjwh4uYPZvD1DT2fptAzSDgWeXyKQ5kJweXsHVLArbKBYCE2f1VhwzLtg",
  "key17": "3Jk3CFXB2iUT7sWDVFf9g7keMLmEcL7Twdc7cZfp1MqrrRDXbLyHTMWb56uXz3fx61p8JhFPe1qRGzNYFBvpVr8P",
  "key18": "2GoMehmyouD9cKzQBt58ESrz1pjR5E7sukBzr6XEuHpZzUXYptrqVUQdtNBG3MpGrq6m6APgizPMtrBaUmTGDr2k",
  "key19": "Syb9BkMrgL2sbZZnueVMpYpe11xY1mcxnphSaJ7RqYtAw6SoLE57MV17ykrVyUKKc6CuB8BjqMkx1WKXHuM3U3C",
  "key20": "59C7pzxjfRBosgmC2WwcdxaexU78NuMbfSZSGU5EmY1go99V3ZFpPknws98BLLgZ6xPwTD8QBgntzg9LYfeMiR4w",
  "key21": "2dtQVaqS3KLiPhFPdZypaEZNem5Bn47DqnMepe1sabXsbXKvnvdhUUxR1NYnFVxUH5eNhe6191EaxfBK8429MBkG",
  "key22": "4Dr6z3fpvKp1GpQeKLY5haAHgEjeSZLdg94F7fQuDvBZ4HueKuP5xBTmi7CgDdcqp13pHJ8jS4rvZ3qjwCX6WPrq",
  "key23": "3jkYotAKd2r97por6d9KA8CcgwRvx1wpgxcUDoRRTYsomCvV4GC3rrdxJX7xEKzFXYEnPEhvCni7kVjeEFHNQcFh",
  "key24": "5GoVJWzkV15wCoXeepgTD3osPmU53opcM1JXiRRknAwyJwmz9hCrCr83CtiuasLhUN3Y7BZckdf52JPooPs1CnAz",
  "key25": "2R7kAR8H7KSMhn73yWdPVrhfmnaqhHDX9vSTpcYVFgtecp6jkpKFqDrmCrgzYmaooq4vLaHq82JgJDML1SHz1jb4",
  "key26": "3yKARXgdqDyvsHyWVo2ndByAawhSyigFVHHbRrNupdzyLdp1xCrkkaYEvurETC2GR38BfkdRSQutr64i2UxhJej5",
  "key27": "4aEUgbrkYqD3jrMXHj1VmgCTvvsDJ1fUSU8mseFL5brZqCimCNrpM89iYHist67QjsjHpjsrMni2GxHkB2mRzM3X",
  "key28": "2zhwc3PtyEUvguc2P6Ftg6zf1jjubKpKYLdradUcfoSqaizv5H67dDog1a6Sm3XkjvTeAhbK9v66HocyCBhnNp6D",
  "key29": "33qpCNKA2Y1MGMKM3CHgv3k2JjbAhkWgHwPg9Z48ZWMi2pjyBP9BrGmwEoAAM1rzRKRsFpM9siTeaXH2yDgSQgCL",
  "key30": "48BVw2idNXiKGSfHtF2chJLMm2zYu6wH5ZXLeGgV75HfE2qtMQhrMBhKBt1TkzBUiUUEyg7DHP2HUsz63D6pevDa",
  "key31": "4S7Xo3yNq67yhx5BurJLiLWMCPZWY4qPG6S3LkhXhV5ufJkPUXHXr7hBQBovm37pFErR6XWNwvcYBc2VZnjEvQ6i",
  "key32": "2eT5KFjkyzrr8k2okLnRKPVkjDp3qEBQJm1f1av3x7Vaeih71UpZGqR4NEGSWJESKEJqPvG4xakqJT5RbWh57Eca",
  "key33": "5aYHmdfWbZixse5L6tDY78iDrA1w9kGEYnrc3dPGk6umPU5FgFCNFX564tmrbBUtu5pMaUu1dLQt746Qc87AZPas",
  "key34": "4LUsaX9NxGaUU4XoKegzDQbjttwQ5E2na3CrgKrsWQSWXteoANw1waBxxb3SNMeqXkCJjpUofb3PicxzP6v3A8Ty",
  "key35": "2AdFMJGiDERjU9i2MJdPAc2h5qYtDHzCehvWMNe7diEmnC3BtdZU7uRsAvGtSFDWxtLF6adw4qrYPwAr1ZYYh63N",
  "key36": "2YhgAxDEqELMun7JcTTaaZgsTkcnbzyo3x8YTv566ukxgVUKVBoato4KyozEpR2WYu61vUko6i2i7ECzXfka4Q91",
  "key37": "2u8vaXHZpDqS9ZBhJBpUhSsNKu2UxSXTMndc5rGVEjNSB3feLvmXXjZFryHZuEnDxMaTwR7PiuFNbT5oAn5pUPxg",
  "key38": "3qG6syuKh5kv9e6cG95ZzzPwcpuVcc1ByH4CjpGNQPgHRgHGTp5wh7LrUTUEDiK6DbCQFMZy8dmCGRjvq8F899QU",
  "key39": "3bDLmzzLsmrU3M4W8Vu6iE4s4B6Qe2Xg26DApw2ENmxpoXQrD218kzdsUNzafYVHGUy32N3yvncUgiepK425gPxa",
  "key40": "31yxqmQn8vFAnM2innwSrJdpcsSXwtfxYchFvkSBzjgbgPMUE42fo9jvMHynBEqm5mPdYWEEsNS5rq69MCUDPYHH",
  "key41": "5GH51UYz8Szt1tCttzTzfKqH5Btkh5PNnEokEtFV1hUJiZyuXqMSrdwdCWy91c8n5BtpzYSMJCgM2UbJhTpzm55P",
  "key42": "4QX5sMRomLar8HtPegAeyhGAono1boMqRzwgfBnwx6unT5Rf53C8PqH2qUDpWHgeSdLP2RiGWnVamLPMJbBrgrCm",
  "key43": "2xLN329skGyzVFh95RAGppgeU3pHvAFiPFqGi3jsywpMWeVbRBa6nRJ7RE7stpJ22ufypuNGyQQGYEE7XQxSDUK9",
  "key44": "2mB8M2Pt5tHLbAAixH8WpCM3zTcmnYAW7VX5fg38sjRdW5cRvBuqfRGXZavzTQCfwBqtr9qaBQYDTWrAC7crK29d",
  "key45": "53CYwXWZYsXTtv9b2nvTqBHu4Qy3GfyXnBthjevemwRQo4JbWZswrW6XvnbLdSmnGWD8ntEfVm5nQZ1dJ3BS9gMt",
  "key46": "2WLzKuVHiSuzRTsFKYn9N31Pvx4yRuDE1QK3agUdxjqHJtyV1dXcEcvzMXycoHg2CkwnsFJo56YyjCo74r9gX65C",
  "key47": "atgT4wd5BbMrqnSqzsxjA6WpeKAWeme192mUJp8fVt959Ws1nQH9HHVWMaedMF3rHHxVKpACKSsR45yrjSzWQih"
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
