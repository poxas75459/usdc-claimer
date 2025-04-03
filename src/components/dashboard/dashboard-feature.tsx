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
    "3jMnRgk9mqfifd2nM3L8ncpVc3xZrsFeqDJSJGe96EmG7PguYyJzigaH8mswBorVVf63PhA7DZJGHkYSzqQ1fFpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xAPscbVMdT8ATcw2wW519TFd7imtXbi9o1HgewQP6xHUPBNje4KrWtGH3YYGBCvurqUpqqoHRZXZZq6fwYK7QxJ",
  "key1": "51jcmxBKwKiFXfYxTy4CRxM8cFTxuqZr3cvLNpBUagi7MSjZXrxXLbYSS3RRjvwKY3hRazuPQvr62CpkiBoPnVft",
  "key2": "5aDBARQC6erPxBiwDZbj44ZNvj9STW3CXJMCC1JKWyz9RmTHFAEP4Vj5YBmcNJtTkUtim68wUvT5k1kb9nisEvhw",
  "key3": "DSVVYmeddbo5b8kDGnyuKcaNRtZpnJqAmhg8WBSafQeyXGchZKht6ma58McXhdbenGtBk4R26j7H5zN32Wec6ho",
  "key4": "6mNurGwGy46JmsGe9uxd3gnptWZ1y3Yax7m54oFhAHJaa8xFz9meJfXfkg4my9EMaa3MerNE1fmwg7j9HKmXz41",
  "key5": "42DJb81QaaZkNH6DUZpjBYzYw3a3FiSdaczsX8dVzD8QNqXHQbTaPWPdemuUtYoVrLdyqdsbNLQLP7LiTZ2vujWf",
  "key6": "3MEvPpdfpdcv6MaTkzDvMPFK68BMmnRiFeRUWACXbfoGt8kdp88x4L6YbnGEBSxepkP1mM34avNcdAaTdGwB1PWE",
  "key7": "4GM8cnHzjssfHLfCJLSsnRd9PiuRJA3cwygYTiwWdGHVquPH1rk3DvTBt22rxCPXfmw1qLeh4c1reSvL4VBHDhhN",
  "key8": "2qgpAiGhRgrDVdyj3J62abX1JLZL4Upt5nXrMWHkizZ3UNjZp9c931jLC5LyhVY3nk92TG3FasccTG2BG8QvMfxv",
  "key9": "4p1ZtomwziXupUUosWbmLn1yK6KicKAwajoN7fEGmDx7posjC626yiUiEKNCd7VcNKcEkFUa5REHxg7NHQvUEYPM",
  "key10": "4dzW2TSutnCAYo4KdhzUUP5sRuGkwxQ3YgyKgPKb6nvPmE7hp5WYnoopfKqQA35TV6NCH3EUkEsg8rJQYxnEJYSb",
  "key11": "3dFyVpYZLmEu4DQSrRg9F995qhzvjwDEe2omLNV4KoGkQh5zvrmzkrwuM1X7XK6gFNhLVeE1GtoAw63tCJCkwAYh",
  "key12": "4ZMXJVTo5vdQMotNTEtWfnzjpeR9nnpKWGGzdUYaQLbGn4hchofW1f9xt5ZRkfKg6bL3z1KLt5UzUPgDCVs8uKJT",
  "key13": "3KQF8XtAAJ5YaZFMJp6uKyUYr63hoEhwvd3jNbZ4HMEWJDEDGik2tXHp5sdo9NSwuAxghYydJWWAVYDeQi3LRScc",
  "key14": "4PtHbMWfL6ipbSZWETxLVzFiNLp4mCAgSvGsNmaK2EzvHypSm3cnaotvGGWNuZQBuVu99p5XYKfvVDeYJfsdUnco",
  "key15": "2BpLJD237ZwX58ZNbUDvaMMxjemZfKH73FhYN1zuTzEGxqwq3uVnkE7SMEo54u5eQooqeWHNYumCKUUHShCQmAC7",
  "key16": "5FRLj7B6zVYiHjZcPrt4UC4N7KMg4PkjWwSLpunicLJr7wnquXvS69ReikftvwBLt6ccs65dPorGJ4C4t59QJBbw",
  "key17": "4PSbeSHHbfg5mikEkK2jV649FKhGSm65YTUTUe9cbYcfRfHuAFm9hJ4aR9segNmtQ256Q7G79QVQQXizRozbuA3N",
  "key18": "429msiTFLjGqgw6sfXBRoDRuWyGFNX85AZHkWEf74vzpwRUV67kMmHG6oewg3AZoYUY13L9FJ3JyGeq1XDeZX4RW",
  "key19": "4t6jPXwAhDz8smwcQpH6kzA7L7GpEVymLTq5xuAy7XJgyuugCETMbxr9fyvCSCv9g64i8ACThybfdwRcsfA6P3Sx",
  "key20": "5n78saASYfkyAaaTWc7o9USRa4a52HXHamACB7onYwVhqfibEDxSX2cFgAAXezYWcPpGJkbdFNT6wY2CZyQJ2kNp",
  "key21": "3vapAa2vviNcUEFVDtbar549NWmoqPABQkZnEUkbqAyP68yEy2wtQJgAq98FrHsV2W4ChRPdRG5ke2jbg5qrFWaf",
  "key22": "2rjWm4FqeaHVx58jyzMyz8k2uD7a1isMFZgAiu5SPd3RU8TnaWNa7v3MK32KgCNRGofMyi71Js6RXexbCLBNCfzT",
  "key23": "2kMSFX7qwdovTD5VRRNSG4muWsyoQPjPNgUHMcgE4JJVJkVuJXW5EgSJtVRrV4BjHJvk6kxfJJnUkR9ZG4V7yrd8",
  "key24": "4qjgBrqCmQgzvb5ZJqdfV9j5ybocUDHkLwtBos8PjqntKCSs5niasVj5RSZ7bQYQhL2R4st956yqfMT3R5nCmdvc",
  "key25": "AAmDcQHrvGk4cRkw7miCbyHURBQuuVYjJXNGL3FxayaduPz8rLS9JrBmNdG8vf13yGGd1pCRVcBbzsBQ3EigJcS",
  "key26": "46zRiJLjyifenrcWrT1nfqQJz1vvkkzc6btACnHLkWSjLY5zv75ZQVWUkn8ZEfTwEoUhw6KoKar216rXmjJ7UvaR",
  "key27": "4SPMo3YLBwM9WTPFfRwhfRRKBqS15xiQE79XUFYzurieLjxLdukGNw5LtEgk1GvdUv7miPGCX2BWkUyqXnm1Gnxo",
  "key28": "34Ynzwa8QdfMGQgMT1w2dwaHJL2cEMFPs1wdJXi1yEHRfViLQDrfPjWmtHyi6K492Ha4QzMR4ciMGetkSx5MsuMS",
  "key29": "2cBntjvhbtPfaUBcX8Viyc2h9i7bhJ9ZRGs3ViLVYKd5S5ZmFKY2ajqYTTYiwA2vpcfnKs7B6usfnmqeNnt3eyZT",
  "key30": "PP42xC3JGY5fQSC9rdwais4XHCnCH4aC7AKYcxLjcxGWcnnMvwQP49nq9JwAfeBkQ37ajnb4cYzaXAKBrCqTejq",
  "key31": "97LC1dowuroZgy7qed3j5gYP5Jp5huS5ekiaivmt4NycXwy6iPzSiF2paK1TNrgYKMS5U3WALaHJMRCFFD5FH3t",
  "key32": "3VHFGpW838iHsKmbCNMYRZHkH83dajGVxey2iEgqKMgaWJKgAWAVinbvHtWKchwp8ewW8LvqkV6sogLcCokmJ1sD",
  "key33": "32S44q82hg7rCSAHzAuvBYtcyh9746aixG2rvnkCXBiGsHiQFVk5ToAPDJPVRFQF5FZK7dAVba98nkFwkyzogefA",
  "key34": "nLQVCwfz1RxbhCraFenXAhUL2gaJDH5j3Wng51x8cZtVHEBhFxfHkQT7zY96SNqJTRBDPYeySoqJbrLSdgiFw3u",
  "key35": "4ertc6Be8FAR9FYqN12TdfhUkthu59MQf5ZnPQuhg1K2maeLwipG4F2VfPoRGogmNdem7FDx23Jj7YzwiryN1GD1",
  "key36": "4BEWqzdnzHAXEDwqttoYDj3kRSi42EWvmioaGkMrSyAgSB277iKH4mEMtqouZMx2JhzbDuK5HmRu61E91qFsWuwP",
  "key37": "42Ht2AyQzcH4LhCYEm9ANNCR7U8vJvw88WZLHm3Nm9YnKka3XinQxUwY1Pj6T3AMoqLERiguyaWjw1ptynDoPQE4",
  "key38": "4yuCceCFXbMfzkw7y6mfwVU6pErHwfj9yq8Gyyc2EvBwxsNvYgLGKRUS3APAHss6uBWe3bu87pmGorKrgM46Sx8C",
  "key39": "5CSLGNZ5NEyqeGJzwJKGLrmkrcdfAiYmUpyyv3ZKQZXJAkY81jTNGPHCkVLrFBYDJYRPWjfdG9isnkuCQg9QsDgJ",
  "key40": "5XPQBxsiyR4d8jxsbuSiycWnyHnVq9CJy7JBnScUVd8Mn9MDfw63rtzX3DLR84DmrccVaaNjzvCJakcnqGb6D6b1",
  "key41": "5VRgJ3NgcuNfyeUyQ3rE84JiCTPG9EzdSKbDpFFBYd25ezt7tyRH2rvnDdHkuEWA7wfp3ecT6TiuNJSEdW54dSw3",
  "key42": "gh62xhFoH9Yv5kT2iEJ8srzZxAJujJeb2Q179zCKMddtYbe1gKWup7pxZkskizR4xr1T7pSbaqnLEyQPrZgWmmw",
  "key43": "64mBG5VdxM1K7pAAqXgq5z6cC7Nut6RUT7mos9yTn9s3Xcn6ZrKNpywSAqTfvQYzKikxwgsuKq87AKc9LhD2APQ5",
  "key44": "5kXjmFucfcSAXCpuNVX6J43AM2bR58b4HxTQpficq4Gyqae9EHV9bzLW2FFATrCDHSz6njvWqr7EQXZYhvi9Uv9q",
  "key45": "WX3bGDooQ9unoYuMoLFokCE2nFrn94wfXxx8fQZ6vtiGheTPYW63z6c9tMVhQeSwVS8YQy8UyNjw4QYnjvt3p64",
  "key46": "2QqiEc4qCJZAPE3tAfWgSqD6t8jagVVm8YBMox4n4uzGjoteEm2D1atj4Syw3ZybSVyT2avgERrZ2SAmcYSWBNTq",
  "key47": "2dUpDGwbGwEtmpijQtxFUj5S6Mi8H7VQBbMjEfr3Z4V5BmdWZWyFUoXoXmHAzAbY1Y1WFEviGxociRBTg69joot3"
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
