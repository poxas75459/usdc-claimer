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
    "2jKtxhLVqqQSE51mwytZbtiengQtc9v1T15odnjc5XMoYbDiRrJSFCyEV5aQd1edmi3orB3npCYBGtCCPe8LBoai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29i6EvT5Mq8SbzvStJpzFQQPApBif5xK7KEYZVpGHRhbvHxdGabbRnB8x79quN3ehf1Ffs9VKRpT8x6KYCXcGM1f",
  "key1": "2w4XZRwsnntJMsmX94qSLxPebwN7hr3nc8kNxUNU5gHLZGU2x6tkSU9GChM6hCfVWYR1yss4izEXD3StfpkCJUm",
  "key2": "2QZvrc6gR1UnkH597eo6P9w1tTTvrhYED4ZeioXDWJdab8F8q8wzJ99EFveFbcVfPbXfCKZ1YeyZHiCuGjKfJGjo",
  "key3": "rjG61JuHpCjBZABNpcyt9aCqXBDu6CBK5p3nnxPPsUjFKbS53VcuNUZ58Yb1gSf6tjvq8CvfeQQo3F3S9uPDWQk",
  "key4": "4i1udmruKyu9q4mXKqXdtGaFE8GWxBb1ccNKU2czBmdWEVKkQVKUrfcosiP4jRotLhNNXR7B45wbeapc8ZQjSWnL",
  "key5": "2GPMRmKzxEa35TaReYcMMjKyt4UobZi26pMnJWHJGntagiLExntj7UeNKeKof47tX33Y12cgknGLHjmkgN3UgdPA",
  "key6": "4BVVFqcuAnBAMsxQaFq2oUhA84bC69Z7LxnXcEZNd2Tgrstmz1wRr3gbbWeFKUpiCQXjdCyBPe1AWkr9EgzW4vXn",
  "key7": "vb7AUTHVzF62hTDgn7hCYizgEDjg3UXDm6R1VapPbiiwEUUptFMkxprZiockRbckqKtAqp6oDdrmvpDDMFxRjfL",
  "key8": "5zqVt5qE2Mf2NSA7aAp1AJrSBHo9cFAMj9VxaaZvTiq6332GUd7VPtuY7WDTv1Fk3NH59g4UFtJmrBU1XVbZHKkr",
  "key9": "2eB4EsPxyc4aZEMXgG8qKb6GLccZU5bG87ouVcC4a3PgRxfCJPehRD9GjCP4J4dTioawokgsDEyTGwPfE8u6KuPj",
  "key10": "5ofLbtLqNSvTh3tC2i2yL2zJ9D65FqoctCY8Vdu59V3ejDmiZ5T3gjTQQ1pytKz4cZG8Vyge3XPUhhBp2L8q9ewc",
  "key11": "5kPFRuiTxANtDNh64twj7LkPGB1VjBEDJhnoNdqEbTb2TkmBmZPdAyMWVHhT2xsm7GbaFjw9DzYDxrUpNVP6kn8N",
  "key12": "2392Az8odEFSwTUpeX8oALQtgEfem3a8QVSvrzo3nieSx2U7HbLV6UvuMW1CUMJtPH4VH7mViAsBuHji5hiygxon",
  "key13": "3HqGs1d7hPTea8RXpMpsEihk8f8xKwUbXRmjMRPDJpX5b7W1XZPJJ8U9yPnyWbQmKjkpqmg37LReXD1Yc1CyUGkz",
  "key14": "5dYWYxuArqULb98KJtfmkVuBw3L9t8pFTHiWCas5ZboBqKf4KEHp8nveuqYZftuv7x5Admy2HghGVJ3x28njp8Zn",
  "key15": "4i46SngPpuK5KyDmLF2bKRVRKPsRGFBd29WbLX61jrMZoUf7ZeqwNHbmv7qwTWPpxMQTFEdGoD6LT7FYCoWwgZfc",
  "key16": "5GKdMtVEmegzWgmvndf7ZDTUj1bUL3MA3UnYDFhu4fgCEsFGNygiB6mCXWCtfAEcyEa6n4khJJ2DoDFLHgk6GLpf",
  "key17": "u9K1uQsBLn2Ug1tFCfCYu6JPfxeyvJM9pW1hsob7KP8Rp8ZyEhPvA85kTWkRUa3cxYvyBxxWG3mA7pDPGzLF246",
  "key18": "kWF7yn57FqxV3gYRPUrbCK5odDxWUR4oXdSNHQRMfF5kvX9Z3B3bHju3Hapt3wUgULtth79BmXc8zz99d5SvVqD",
  "key19": "3FQZa3NDZmsykk5mqD5xaBDAPLfngqZzToa3D9dd6arMwrtFA5vqeKkDXoVrdm1ipNpbWUpWYD8MS1k1vXAF3GvR",
  "key20": "3J9FcVBKQYLYQTK7JG2Rqbia3xzvYhie35icPb3a42nzCPaQUtFKkXaZ7uh3ir77LvUSPRpxyZjw1QN3BnV88Ric",
  "key21": "27SZLhhZdyY3jPPzEDyEBKPTpGfY22QfAhtd1WQEthJi4mucsJNYQnfQnyuETnBohWUWV4Bdw6CbXMxJWosAugc2",
  "key22": "3nPjBxqE8W7MQinUNZogdDfnG5GJa2dv9K41vDw2FkjfeaDNFKBD5bFqG7jsxu8RCVYiGd5UgzeyDTE55XmdoB2H",
  "key23": "bUBAoLoWo11rf347zJH1rjZ7xLsT2X5bXcdzSdrLLKD4ieKMqVJm6wkDssG82DWwt8xvcRLQg5CqKCaddeiBU9b",
  "key24": "rgRraWfSkKHNphDE4qjSrBoNVYAqgU3WYp3djJj53BoeQVqgRa88hRqogL8oezo4fWa3o6kb4SRD56pP2mH4qTd",
  "key25": "44G3X3R7nzSEMwpjZW38D4cB52u5kbqsGfFx33QDX9UyrYsTbWVA2DVL9m7K5pTmTp3m3JwR25w1RQ3rE1BHqSF8",
  "key26": "5cK7CiPFPPHzCW6F3LgBkxdtEQqNN7sbED3hcDutkuaSDX7HKJXLDF1KfvEQGuTG8Ljpjcw4ddBioXQBN75Adf2f",
  "key27": "iGFn335XS2Pb1Wt1EGah5dLNYjwiGg1tPsC4NfypHMGrd5uaiLAt1Hd5JY8m6H1WCBAyeRcWggMDDngnWZPYUk9",
  "key28": "uG1mZyKYEQC5Mzgkt45joSmCy98A9vKMEGqFr37F39hyxTjvmL3PDAtBThR6dnBUJT7NY598mgvPY6KsLcSv3g6",
  "key29": "2C1J13gkMHUQQ6H7nc6aUxUoRFYPFk8oMwBnpqxVDmotPKRoA8CVccghhCd6WvQxq2EHifN8cAVtYEt24YASxoDA",
  "key30": "2tz2Dd88RSAcQ9BC1dEeB4FE3rtEyXoZjy77KPpMmFRS2mWX3NnyqqbtmxWog3agpTqwEVSBZpdmwsbaYuf9VuVC",
  "key31": "3rqWSNiYfwwZhPag6qpgiQKNeL71oexKqcE46jD4PGW94h9bs1Sa7GpkA6DtWA3jjAmwS1jEr9hPctyM8qRf9C2h",
  "key32": "67Cccj6aJFqiU3CxM9SSQexXyVeyQrjkbgMo345jc3fJ96RVjwmBTX19fzmXh2FKnDcvxW4XkLnxroXpQwudEUyu",
  "key33": "62kcTp3UwMqgb35Rb6sc4H9FQ182QUcXzc9bCHoB3cUeDAFaiQpPk7kZcrHy68KWnEuo7DRGeK6Rvs2asW3x3ZQA",
  "key34": "4bEAKVmZnwvf5ju3okHtoAAK6xtkqeFFiM477XCzYmqt1FAcYwFQL1E1QjaPBhXknk2c2AYgEc3opXBQtnu75T6f",
  "key35": "4c5N4VjMKzaSAXd6Mson37LmCnM5W9JodKfpeGyV4oTiF3xtoSUVHMjUQ2DHNNEpqF2Lf3VCArEwiUgsGBpUMaiL",
  "key36": "5PcZSh2WmDDy4Mx37gaNQ16zjCapd8ygShv3c84biQj2LZZQWcwqEJUucQ5hLP1faX7YLxrZ3sKjQNAXq1X5ch2",
  "key37": "3YGvERbYAPPdKBU9ogeEojfxshHFmb2ZoNr28jaYpF61wiXhRrMzpWEMCwQsgqgF5WQnFqVkE5CakLCRSYC1fuzU",
  "key38": "4nt4yLjNmENwPKdGfByt8doccVME53ZQse2m141ZMDjRzLqYMPKdsHNJmJfuDCxtePvFG6QtuYR7kpKzc6qtuYTJ",
  "key39": "52fd65MwB8FkcvnXQ4re4vQD6ep42uYHK2wVxwWmW7vJcK456AhFqaHjyiGZmycvW6ZK78QmJNXKGyz17Ge5k2Jb",
  "key40": "3thBSMqMxBAqS7Arotb4hfAZ8cpuqtfiR3VSbLAraZkygCXvsroZKKpnLW33op5oXFhF7DUFy9So13DrrmqHrYTx",
  "key41": "4icDkfSzoEyyEASmMSYVoSVV9wvYmgxonv8wSALzGHvS1iFkSwAMFqPDbL9JWCMipaLQCqNQV8nSd9EKJLVkPzT8",
  "key42": "8nDZma2sTr3VD9DfyQUxGqx2jufkTCdC8qfFXK8fV4QAwg4sZCGoUoLyYwHiY7cUvFe9qKagKmYTCuCa7mrC2oE",
  "key43": "CGp8fsRP3TiarHBMezz563kuRUjuwsFZVhMtArhZJRc5jY6zgXPYv39g56C5EBqYxLYxbVUL94b6eyGHJtUYpom"
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
