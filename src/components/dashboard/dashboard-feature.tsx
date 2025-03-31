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
    "2vF9pHKaSz3NnpApLZZvquDUczCwP1zvei3rw2Y9ycwTwBafGaK4pfqgS9yBx8GeWKVweWmG9gZtNtm9xiFagZRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iNwVLnQoER7tkbNnAHsUbE5Sc4yk3Zs7rLzURjAhpX6uo1uBrSRUPVprW66mTDwANYbnhnygTQuBjhiV9rHoDhg",
  "key1": "3oNLEhY2cGQu7Wse8n75PaGgBn4NREJy6v43rBxkhBL8LLG2Wvcs6VUYUuw8TzTuJJy3mpJsjXTFNXKxNghVLKBq",
  "key2": "3FP5CBUnuZ2dLmntTvTuVJ5QwhBhMaN9N8KiSWLmz7S3vNsUsuk1ogVTpDdw4ZKTU5iAJmMX7gLgTUe964pmishx",
  "key3": "3BL1fZpiT5Qfi6mDZuFtFxcCDMEpiGXJUZBXqYKgWDptn7Dmjbir5NGeCyFDu46bK1U74s3cx6QjeUGS7wk4txhv",
  "key4": "34DUaDD7eWQDAsmwmePwhbnmadkvWXrMbGjmUNzNVQDRfDN8K5DAJooPFLFQ5sWnE8mvu14grVaofgcR2XazsRF3",
  "key5": "59qoZqLsa2jqtK3rYvBTUx7rFjicvRFx3MfmZZP8KwBofuSQk8qrWAeG4KVELN8WvxxDqH4Bt7eWusKdaXehtkvy",
  "key6": "23HZQtVnuVGDgTZkTV7gn6PLgyzPjU5ma62kFak9BSAN9VRrfjdhyVYoRcJFqDqNtQgaX7CSxyxjfhc8HxyKuwrq",
  "key7": "2SsVHgHe11aGSp8DjNckswh41VfSG15igDjoMf2RHuGubWwDAKQBbkVTkAREBcCrTjWKh6vmqrd4f9VDzvNwcXGH",
  "key8": "3SSuYKTz5FQ9mfCxFtapCZ9sYTcGGxJB29TQwjQRSvb6niBWedMr8HrGn1Buvkh4DdQt8EDj7mzRpGP5vTnNxNLG",
  "key9": "28mK254CDMd123rqjDo4XFy1rM4ivghwdTi9Kd7p8FMd9bDtAJfn8MX9NmzPUXhQott2vx5bvi1ctuednQdyKquA",
  "key10": "4avNkz1t7jo1dZk1Y8uEx7bKUa9jaq9UP46npTLPEB6ZsLGLhcn5PTAtfi1y5JRQXLiJhYGoJJ4nQkVfBAGwT2Xd",
  "key11": "pkufTk3a9YpuNgSsp3mGFEznPi9gtos5ob6wdz2CWKnJamGQ6KxtxWoyyZXL8wP6jmbpxo6fPM7UvuFhji6smSM",
  "key12": "3tkXAtmr7Pof3FHtF4qdYHzWz7C24YxSTFfBizAqUkouxH6K2jV8K69Poris3DkJRWCsrBwiCHfyqo1yPRwsqSSY",
  "key13": "zeW77JCdqtL5wzK3g6ZFbE1q2oW4Pvm3usNiFTVLGdwFCnjr3RzMbGoyc31qee2gjsAxrDJfMheSWAUCn5fs2To",
  "key14": "RgGi3ek1q2J9pAmuYr5P4h4U8bPSUeByVeax2xjBidMwkGS8hV89j8QMKchZneqWjLAMocjbvaEdREvwgkFaQKS",
  "key15": "JrjjqiVZuCLrrx7E8G2dWQqByXfqLCvkexzvMapHFFpUnyvjCMexdrzfeKiweyZYPvUGb4AXTXdBoAuiwri7xY4",
  "key16": "3Goxmc8Ps5K5M99QRawAdaiFhySeBjjnCMEiJdYUGGJKDvFtKL2b5ndDsP2L9qZruHVYhFJrUsEG26gb3afaDvA5",
  "key17": "44CgzmXz9ibhiNKQS7Cy17C83YU8k2EsmvG4mmjXjVMa2bBpFrsAWynzG9oftfFg3oN8MN5Dk5rBXVL8XT8hQTbm",
  "key18": "mVFyXCNKMPe9gFHyZnkVcYZwNUMb6f7uPMfUDTW8sjZcuy42YwPd5hJpydzps87pgmUtCUs7TDApj1KdjfsArnM",
  "key19": "2tsTEMHuxm9m3Ko5p6C8QLL3a9GFYVUWduNTtiriSXUbCbV3dwYiov256U8NMThuePNvWSjAcYZXfNJ3yLWGryPL",
  "key20": "3ea3nk9Scr1hqhxRr8H5sZaJSw8Bspr9ae4acXRjrSrt7KPB3b2BUBtnQUL7vniU7xKe5FTTS7ieXo9iFmkXKkP5",
  "key21": "28H6pfQy53qzKTXxCSyLpncrceuzArBMNxQLXUm6cUoFEjQh5oypGycSLTSLNLMywzk7cf4ZWztPNQLufdxjALy5",
  "key22": "2gSsjGwqxymxL7tczfveNhJU1CvMJvxAFpRk4Xttx1fHDeDiPKCzdAXaRSJkvPE4PB7yenA5gBNPU19XivvhqLT4",
  "key23": "4N1nhfCip5WAB3tj99yowKhdYe2TN1GiQtniCeU3wS59rNhxQv7XdygL1mALDLLr4d7YnaJCy1nciy1aqcRNQvd3",
  "key24": "2ghPft9rHvDjCQtcCD8EWvdj3ZgjdF1gZzvXYarjckJk9Lfq8iv6vWHRuf2Aft6EtJ6HKKurPTt3vwqHxBwAbZNh",
  "key25": "4eHEjLp3uCDjzkW4vMZbY1FCXaMkuQhaDmak25yoQDnfJEQK51jhc17avC1aqfTkhdkRVGxKP1DNBv8Xac5m3Y4j",
  "key26": "5yrPhATc2WrFo2MuHMxZVQyveE5fkNdfwnzW5t56tsDNEJBGripVNzVTanRwwENVjhDBhzZwL99LRyebDaijYoer",
  "key27": "5tndxGCFSn5gZLwX5y75Fn8zz1Xv4RGTMAUaFXSh6av7dgTtPm88D7ztaHnB84HUJPayrbaGnZpaSTHGi3pAKGEC",
  "key28": "3YXKpAzvxK3NzE8ZbkyusMQQNaWL4FLAYBReCuKZGC6ivSBynpzMjtmBcrMR1JH2F89khG49pXXE2hecnpPRXwEj",
  "key29": "2PJAqZTPqpS4HDnnqoJx4F2bcYMXDtxGpRjvVZikrw2N8Zt3VWxr7D9ehM1KH64pXavZSbK9KNKEyspUhdHCAaNc",
  "key30": "51s9q3ydJYyUV9SKGFLtF6f6AHYiYDBn8fnpEKZtXLktaFbRzLWeymGRbWmxpJPH7Ld4grTbM4sqxCjQRZH5yDBf",
  "key31": "dHHU65drk7w1NKvrLZ7SQpBEKajnzx7qb8Y42z3Jua3SzVTQuDVsSUdS7oWsw2mmM17qCbi3Gc3rWEyPAHvYXrk",
  "key32": "2JB4Pqhe1pcaW2hZ2a82ZbSMAxY6RjRowGqvY4AwrCbVkWhKNVErty5vKEGJvnnVjJ4FWv3qisntFVvuub3XkiwD",
  "key33": "3X3tKMRfNW9Zyv4X3uHP5HwpPez7WGSA7x6FgK4ozpcuj1Nvv7yzgvwrhxbC7rM3djrw43W7VtkRwxxhneGHqiBV",
  "key34": "2xYfLQXcM6hgMUFCfcTSFxvdHKtzuBtEncWwxSXrqg7PQR8iRUThxV5aFuJveZYHmvCyXiBeZjU57a3fp2ip7bit",
  "key35": "581hV2C7Ezbtc249nWQ4sqP2v7zbc1XvTSpYwQpQL2xZNxyEa6jXohLVxb9e845Jce6AWhLnn6LNjg2SBWSbhwia",
  "key36": "4T26CxuQ5J3zVmPpHPaV9Wic6HvdG8k3s6Wamt2nf3Neq9cwycXL2CEdGk4MVkGoh5hc2WXVzLN7NrLtRTrKRGn1",
  "key37": "2Bef6U2n26pkEZnR9kZsJZjtq6hFWSQkyfbJZN5Cf19LSpX9bZb5cBnj3KWEf4r3QBtaTjQed7dPkojbvoJ7RSHA",
  "key38": "5JyELFeiQ8A91NDBiftrmYSfybiATb4K8i5B1jDFyu8pVb5HLyKr4kc5ZqZmRhuLeXkjj764TsECC67zjByQabpL",
  "key39": "51yPFhVfayswrwb2vRjPc9Q9NWpeXKpdMwMcgG3b7NTgHUJuWB1YyMVW3WPEpWtZLezXJWKVXtZ3rqU8N4T3qnnG",
  "key40": "cEtFULbJmMw9FPLwmFd6DkwC5uu2YbVYgWR7LEfqshHv2KvJRXi5TthSHwnuiYzR8c4iAhHjxaXKmVfyCGo23Hk",
  "key41": "4oCNB5d9YdfGrN7v1X23T5p1Ash9ucfFcPbgE4iwFrjRKvBz4QiwpC2fmmSgfhTeqfnai5aN6uq7sfGBgPKkAqvD",
  "key42": "2yHSmaXeLPnpccqVHtkEwMANomKBuEmLanMk8YBW4U3ykknZQobwyjyuHqY49dXpktvtXBnQBNraiq2WjHAkQHwj",
  "key43": "2fqwHPFbvvSW9PHMK86xowccpyYAVyUnzrxPBBeECuZnP2UDQBUSEsg5kT1Z46Ut3ppTwrTtoFc6rhMLAK2GsUu"
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
