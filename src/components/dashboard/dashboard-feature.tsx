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
    "2c3SFKUqYGrkdH7G3pM9BdPe94KmUY8RkDixgzzYLTAWkpkxhzuJyxWLn2Rc349jfWVBc3M1KCSbDpAxEX5JQ3px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HKLJ75RbPmAi7R2ahyFhkfCVSwHPGVU9DxLU2TeCNxVwhqQb15CYGo4qdGdNqrUXsoH5LEd2J6dViFgVkQDqwLq",
  "key1": "5vSofJLfaqa2qS9PMRSMkpcsCpGCo7tuHtiHheBTDzS8Udfp7sEzh1GD1iGG1L9o2gJXku1GB2eaYAzQLDEoVhkk",
  "key2": "2TogVGTvSnWPv7qPrJtG5x5dNo5byXBXYQJK6vyLxc1NRdPQ5DD746vyaxJvs79Zuo8VMhRrSu7d94vj5DYVm9LH",
  "key3": "5TJgfvVbcsAaEJcW1akvtCF3V6zAkggCfi7xxiQT3odpUtcjetNE1X1PtfPME1BpSkXWnYdtvBkq3PcEgbFpuTkW",
  "key4": "uH1MDd6fEhDgHboygUBS3Ymgi5Rgp7sXHBRaNq5zmaQp3UdCQgnBmsJAH4LzN314JEq9zex5a3BF55KNGbPntKp",
  "key5": "jUgc6KVV5qQmCt2LMW9t9gF4UNjjMNWDy7RD7FtSTWgePLRjeNTdEFSzMmovPQLiT1CY9L4mzWtKo4xR6my6LaE",
  "key6": "3Mr7d6vDe8W4SwQ2V3bcxxfev3qUtjaqA8w9WaMfiuQAf2WoPXgaLrX9o2gnTvhu7MBqLMX7nNG98R6SfJuaTNJo",
  "key7": "2BjGkjqsAkU4WV6iS3ZE7AaWfMWHu9SiwfgWYXumAva3jqM5QNrAZyL8z1qF5VkquE57rYB2sQmWZiN1enroYyN6",
  "key8": "M6GGJNRreouVoqceyNhMqPzsyn5rNY2EhnXwHGJWKiQ4acWZYnhymqxJMmpNPuZfnFnv5wFmWQ4j4vSkM3DWuzz",
  "key9": "2rbwTQXf6gXTKyaWToXad79VVQ1ep7NPjCB4siE4Z1L2sWM6qM6QgiHAQF1v8bwyUMQ94BmF67hinfrMBQ5PaVSC",
  "key10": "45xxke1svFV9rdQYzAHmar3wTaS4xxpWFGXTD5HTkC8aksVFJoaFEvGQazdx36RhDSUfue8amjQViTL34WhoKF92",
  "key11": "46qJ6MpVfooNYa6G5dERzcG36tThG3nTUaSwkHzD5L1gftEfXHAK5qgUfkhcF77odFFxQ72WiF6n3ijG8GpD3taT",
  "key12": "65G2fbdFiEzECCnD7vGBdDAHjnPNMBpc3nN3i9x6dsj94DhU93mKmt2LRKeu2VbSZz7mDiE7QPGPfeUwWhoKw9bk",
  "key13": "2hQsJ6jo1pdG5dd7uJzyVbWxamCqzrnwZsowNLSEuoYLY33QeDVJtPKCQfNMMEQkTJuG1qhjDeCMUWqo1LTmDPFK",
  "key14": "BVojJXpbScdraqHFtVCWCeDngWRUPsuXfS9QEucJ6zQbwP1KvBXpmomX14wVkicZ3kbYexqDVXFrZ6MdNoc8gZE",
  "key15": "sakrSqnySjfA5a3wyFcRset5pPdGj2YHtpScqL5yeu6NhfVwscQb7hArU5dUtRX5WWh8pB5vifk82tSXxizxqVM",
  "key16": "AW7KfBMnPcXFNaQA3yyEeqYiP2scUEUf6bUE1K2Fv21osYiSFXwhYATU16Sz2fWqtqYwPJjH4pYMaWzHpNn7XF4",
  "key17": "DJK8sFGZGKCz4rK5BJ3Eg3RM58qXWbLUCoUiNi72FUowmAu2U8t2AxZjqcQmdpwH9FD9MzGvdPSCzrJe22RCPvJ",
  "key18": "61gkrJTmBDGBJNZVdAv94fk9YNCx8wJWwQkfwZcKHcAhQYamXRm2kz5EQzdi63tEfTP4jwGWRohwjP8PnUuNK5jZ",
  "key19": "25EpamYtu9dgxVKFB9sr8HveUdnxyxNUzCtVbmxjJSYTp18Eh7EMB5JnvxLx438CPfjNs8wGW35u5GacScF2JQuP",
  "key20": "4BrdZJCwZecQT3kAvh5J2d1Lbf37wWNtFHF1FkV8nxDPugVaj5rE1Zy2Ta2wJaVgJnTcTMwUv53aSFbMRRPrV7xZ",
  "key21": "zxVYtbffSEuEdrD259h7aYTfPDCSwzpK5LjieRLzTe9jp8Nx3cirCn8rz8Vraq8cq6DZrPFiZ2pGY7kHBxpNqea",
  "key22": "3aPFV6mZaUkgdXrVAfzueVHApMoqeGdXEhzEaNtxo1s1sq3AgLSm6wKHCc12Ts73z6HbcNvQXsVaATvgHt7zU6nY",
  "key23": "4W9zEYabknPp9WP1PaBpKQkJBXKGSFeHtq4q34CFAovNMFobhAQDnWbuRf3KReBApyaeyevohrSfRrB9dNq6g8J6",
  "key24": "2aSxPpRRHkqZkPjHx3CGj43YCuqcnRxs9mUhNK7YduSnhFTJHeCPqF4t37Nfqo5okXdXRMUBi3NyCV8Hn8cNQsKE",
  "key25": "5DsFg1Mmv1YH2htq5gCjL3AUEdXVxC1DKP7SLwHa87GnDFYnU6Lb9mzysG1mHsAy3Um42SVFKx3JVTsxBZkr2BQU",
  "key26": "4W4m5dFFPbERoCQHs3jCpGzfLQjQMqLJSqGUrbvEz8BRZJCQeyxa92V5FTtZ6FGUyVoU6kucC41QtfMRqtxqGUMM",
  "key27": "2zJcRvJ6ZZ7fTmojG4xPVhQ6x4t5NoHdhTbdytk6VbNzbDu5GjByNcYV3n9E2vqVL5hccReu7rMbyyG9FCHAQN5n",
  "key28": "436YmnoBwjBbXFyMTkLX51dH1MfVtSgnjFErinKYBhGxdTZwBgTrRikqmrJCuwjJGkzkRGc4n2U89JL3YPbsuLdU",
  "key29": "h9nbEG7xjskJ2B5N5SESj57zRAU454GxbrU3HGh6iYWtbByRF9mG3mQPEDFX86CRFa7rTqop9bahQCpqb92ucgm",
  "key30": "4hG6MkQC2PMSAU91DZJPARkngVFybRW5T2CCbKtSENNe8MPc2Tqn1teNk2Pefj43Lkcy4FkawBAFztHDE5k669Va",
  "key31": "2wPLTYLyiPYZaYAQGosAwtamZYBnpwG5ii5Mieqc8Qak6HkSGk6iNzwVigoVBMH9bPrBxpxjyJ859MWYknF4DhDy",
  "key32": "q6FYgnDUjdrGALXY7mj2FfD8LZKCgkBWmgLG59oqDEwmifDjexv6zkmGj3BpDPCSnZxNDtwUCaiVSSZArySS2XV",
  "key33": "67jWxXHjtXXrC7ZGmaqMs7T9U2GRS2oJywaYpzZ7ZjFp8okNe34MFAMV5AXPUjtDn9sFcGKHMqYu9Ly8oR81unLJ",
  "key34": "28kRYPKL781wWXkW8MoQe6Yn9z7auKvEp8MHMx1osLgnDoJP3GyBdyWPfANWJZbY1XpjgSf4u7qSdNkW9rmRdfqd",
  "key35": "4oc8nCVSx5KQien3vhTBGPjMzZ5ijMLnGSsPhmg5S8LNpScR5DsEDgS73rnpS9mQHsUKf7w3GRXdHysKc771U1t3",
  "key36": "9pLTW2KzMbW6ZgvcPZcHCfaaBWjQmSfrZpZtQ3Kdi8z1oEaAcqwi8JChu1Tk7HQ932Uk5LmMcCJK3EctR1ZiC6o",
  "key37": "EFSXT12oY95V3bkeK2N87DuQQwXcmzFaFN1mAdfXQJfh2J2ZBuWdLUtvtjt1GE7oayWBbpVhTHErvoZFeDjzCUw",
  "key38": "GtvEE5hDeubReupsAKTcXhmijA5jZMGEtS7VpvoWxm8ZRjr4Ey6cxa5iHKL64ePFrxMHdo94DkLKWPowm9LCMUP",
  "key39": "66zWJeeQ3LqU8q2fsqnPU2Tif3MqYb3mdFFnyP9QNb9Baqs5S4KJBxnT8An4WbBHPqJ3hmretJfs9d2jXG9JKDK5",
  "key40": "4Jvk2wzz36dnQLSLsHuGQMSpSjqknbz7U9qVLH1eXdW1gVEYRHd5nZUDnEZ1yY33grJCgRrnRSsuRNKsPrCj53SL",
  "key41": "3GqrX2cbCHntk5BP2MaaawoxX2XWrWgJpfHXZ2A7GeSB9TNnTwNjuszLXHpm8w8VxkvYmDe9zcUihYskcQN4SwpT",
  "key42": "2ReKmVY5KNRab4JtbFXDC4hSPg6NeJRPU1gURoEr3sC6P9rbdK9VfD4PBT3sVXdKnk3iAnb2tQeZpKqqSFg2b1YM",
  "key43": "3R9irnvxcjhmks4MKtTYAFLHnM3huaQqb3WoLzpCSUKPCch1bZZgUCoybUY3XbgAutNiZE6V47nfceo9aY7XzMUS"
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
