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
    "3XLWfKLHu1UyADSJ3tfVmyFoSYC8T73rHvkppuVKQ6jAuVk6SnWdE9r6pw8TyK6v66xfMQYKEvyfCBi7ex3y7Epd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EvunDaau2czATmxenudEabY4vPQPt5jkuzLxGcqzTGKtUC1CqFek8sGQhKfUv5wQMVuRJr7hZku4dHXmd7G9HNq",
  "key1": "34Cc8mVMDU8VsvH4MQGePvKE6iU3aNJaZWurGfQztGwLBHG7nRnd9jqyh7yMzgd2oJsGxYDbM1doEb5TD2kar1kP",
  "key2": "4gC1md646RiZwwpYDtEthLoCs1aymiov442ZAgAD5p6ci5TzwQPCy4xSexndxyvgii6Xrss6kT4fG6Qf2fjQgaH9",
  "key3": "3jNuw8psvZ2P3NcbM769RqaBfXfLVcVob3jsvsqYumzhu9Tq3vZ87ErSkgMMeSHEAwLLmDjQVmub2KNSpdqi3NGH",
  "key4": "5FWu6nvi5UP7JiUkXY8kQg7n9jBvN8vXfzkG7zvsQDSMLzxdv2p7yd1QYqWXcS2AZQUdHQngzZYBwyhFF8AUMtSB",
  "key5": "3Y8JinVFvwH2i5Vahgo3SELcCjmpsBZZQyZD1puCr9Gk2VGeN2d8gqH4TNNbgngPtuyF6gaPH19K2XM25w3pvLT2",
  "key6": "43gYmbeFeLwPsZYNCpwUzfVyMj26By746Xe3qG566fDxZozePWtAgYxx8RxeZGa2QEFwWMFW7mQ9AQpQFn7z1dm5",
  "key7": "jvJpCT7kCp6XaUy6o4bRmb7HkGGAQFyrRPQNWEgQRG2AVkCKyRugxJcFKRuxj6UbjzqDdtsSchBpbsXgz9KEtyh",
  "key8": "iuEZeF1j6GxWShb2axUfNPY1zMALWPMWA5oWjJwGj8wGCR7qXD56f9VCBDemMgWMAeZsJ64BVEog3uJuyLmNbrq",
  "key9": "2ZbnEHwz4sJukNwSfnETiHEwSVMLWv2M1M4EwSa3xBbC2cDNL4z3r9Wq6eoiJQGVtx5Cmh8ZT1obN9qk8d3NSu8D",
  "key10": "635H3qUXfYGg2Ge4bhAaRxDJd1rTMY56GrEZPXELRzZiFitKSogSy7mLhhddfqn9AyLF2i5tNv2gEZRAWbye4xdX",
  "key11": "5Z7Cxzxsyts4qzddEcKkr97JsNvDG4tReABDwCiLDQUT3dBkGnh3GAWqZTfjbvACh4c8kMY1wDNwoJVZHw5G6zTT",
  "key12": "2hVHV9fLwTBbwqodjBYpfuBuBsSpZnupjzgrgvCTZbqgoYsWdani3uMGR5eb2hvuUJSJ3faoepJVXBRdxk5yczhy",
  "key13": "wgE3E8dejMdvU2qDKNFzjctaHqK3hxqwV7gBWBVTLTZ7pXhWMrQSvu6v7BenAeQ4qzGJoAgxiNgTLgrhfR3dupY",
  "key14": "3P24drFWdS9o4Er7DaFzWQLnwj1DJ5QQQ7zE9vkVsAe5mWwtryNFDemKXDqsPPxMswE2EXytK9NCpLtEk3q5fbRR",
  "key15": "2YVtFunCi7G1k4ywTTZH8a6Cedte8cBoKHCecyiTZuHQE6ZJX85tAstxXHDmp7xHPduRkMidWbdeuckk3WwCeaj3",
  "key16": "3ovT1qeL2E3otgPtXHAc4btgvVwfYUg1nmZw9Ntjn9QnqxBYjscGLgxNDKEuW7mXhJUpkZZ9We9oZ4t3Nq82qd3k",
  "key17": "2fbeA7uBtuJKNnjk8YdMRK5yxfk5W4nELPW4BDyss7zs5UnZntst4erb5KXLN2WpXqDVc3PNBwuzHQdauHGoteHy",
  "key18": "537AGex61NSUttZ1hB9MdPUgvcfsh7NP919xyW5Ay2G347BgqLM8XkJjzn7KcUJjYLHuDAqSnScodwhsGCDC4CUV",
  "key19": "3bFysvjy6M58A51K944yA3SkHkw19zNR8w9wnB3XU1zZjFSMkNzcscon5ZANAAA52ogoCZ7QL2sMJsV7vLs56eDh",
  "key20": "4Fpkbe5iqUbZb8LtTuJPqP3esqoyhGg783Dp5z56Ligxh9JLPfxmYeBcgmw9Csm1tDQbkdZ3EULBEXGgeR73YLv6",
  "key21": "31hC1swsYUJQCW3cQ3YhcvzdbVMZn7qBtaGqWPcNVibsww8QQ9thHYfeher8fbkZAMBT84Uh8gtna8hoM5rtLsWf",
  "key22": "22AEJEn1vE6AGKk8gnYCWZdRqc5h4bBytejRbZDKo3DyBQdBhxT7ubq25EVm1ct7xHPkgww11Q2ewRhPWTjDRb1R",
  "key23": "3yD6zdKKo3kC6uRaJzYEffqTBVdMxWzZZyMtdRvnS8u6wKXge3iKSGazKN1tpkKd7jXwNf3VydwczMuYa95McXbM",
  "key24": "2swadiZ4iq69MHgh4rMmfWeNQRa6gMsWgBT6rTMx8g2RvnAxwLYPUPaL43EZqji4bCxFcEqhFevaiwj19nNbBwjR",
  "key25": "2KkKrwxeVwQ7Cb9oCPtpjG9R8F2BpeDg3Y2ksK2M34wdGnXGetJamzr8pzdfqajxScC4GeAMzrEQ9PtCdvZJp5xt",
  "key26": "4KxRiLUsPM33RKvkmvy57gcJ5ABf3oMbYYyN6CQ1gKunAfJscmdMMmJYUUsfHHcxta2BxSpsQw5LoBhhkozgsPBU",
  "key27": "7Wco6dspd1hQLSrDavxQ4nQQHC16jy7S7k6aRiijjsg3utwKM3w5MF6TpDxf5hYh8quuec4M9QJULdRQXFbYkeZ",
  "key28": "4ktcM5ZFdViHnvMwej5svjpo8wFDpeZ7hfeHZcrHMRc2xgh94dwH6vbv3LxXbANk4j8RuFTmTigTecrUfF6sPRLX",
  "key29": "23x9YR7wdHSuyJive5yT79KjThqrnT7QQ2DMYq95aJ93Av6kmCCVVAQSaYMFgtL7HBMLJRE3naQVBMH4tdCAM3Kk",
  "key30": "26eijMr2w4nprQP4X89Lt5WnEAzZCtKFxFeaGUNHrNFPHxqJdPQm2FTgTKEty2w1aZdxoNzVjjqv2Ayjd4Pk9D7i",
  "key31": "4Ycwrq2i5KLwddfbiiXsrtiXXPBNjytvoNiRUDW95i1eM77pzMchxtY8E7JDuD84wZuDZ4vnmfdJH6p8xbwW87uD",
  "key32": "5fGQ2YyqaNeoNxAeAiQjdomrjzw8fimjjnjnkNREWNWRzH2y4q8wktWYLqL7FXUyk3cr1Lv8diwWLVo772yYGgCL",
  "key33": "5mLgp13iggRGo7gviY5wjg8bN13HgQ5nt12sDc9BveeFNff5HDkNTy5iBvCPCdjzWeVH9yVsb8bVSjBCq69nLY6N",
  "key34": "2pU45wC9UMosm5qRTXqiQm8sdxb1ji8SqiEpmz15U2vntcgLR3k1AKMC8HiCpqAC9RjbtnxmFUaY55YwwfwdYmRr",
  "key35": "4syRa5xLqudmiQEr8EsFrucJqd2r17N13bQyoX43FabT7cMH3yQdugqKTuzZC296T8M38B75csj9fSmyPdEFBQ2U",
  "key36": "5JwEzUMQ9vySQ82paR8U3VM3e58ScDiMyhLTeAsYR6eBTqmuMfDdoaZJY6WcdvzbrDEwjg1JQWARUks9HqaQ65r7",
  "key37": "XF4YfBSM2ttiW9NLyjtLT6ceDSag678J7XCDdqhmRYPcGmz6A8roiebM9up1o6fJtiw1cjpwFMxBBXhF5RNc6u5",
  "key38": "2uivsHvQTAXVGWHPDZYYZToZu46DcRn5yVX9nLf9u8Wo6EGrtJb5533EHGq3cUgXJmPSpvLuzQCGUC83eE3mXvN",
  "key39": "3MW5gzCE36cvGmMtsXRvv7wsjKd8BmiVu2XhqNsfDSxUhUgDQ4rWdG939kkFLFkizP1PPMVL4ZNmShfMx9CEd6CX",
  "key40": "4WPshLYm9bh79s4aF2XjXdHASZqTCWW11kNweKorrPcrJ2peF8PHQNMvLUaXAEdwuXNgUFQmUuh1C6rAtqxb8jRP",
  "key41": "2AZem4ksQixZHaE9zhh6ckN9CbBVU8ETxo6SHU1NGgAwtLnGxKRN8pxWHdrjkMmd8ePuK9jzQpZu8dWEzVMijj2j",
  "key42": "FyXfgM7bw72uaxgFjvFDmcejeWkgMNFGYE1BQSEyGnC34JdgbBN8M4iTAoXaLdCqbCWj9B7EsXje5zaffCCcqbf",
  "key43": "4Ps7YMJYjdDaj3fmHegsAaTz8nsgGivx91JJTHQKAixZHeVk8tjHhnFLn7Xp4B9F8r5htVxEUEgjYJd1jQHh3Hhx",
  "key44": "3E3L6ir7tf71Fi2SVqe392QWnnJiW5uszoMhLXw9QGfg1e5sfzBuf3g2JVcq3xvxs2Ppax9kDE2QkM5mgN5i1GaW",
  "key45": "5PUau2Xap9XiALKYTxdH5bi5y8odCWPubVcqYZd18bUPM1ZeTq8QBFtBSTcESB1bF4KNQpPiats5kpJe8XuVk7BN"
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
