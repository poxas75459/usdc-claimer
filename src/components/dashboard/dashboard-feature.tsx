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
    "BSjpwHtMF7FeL2UBYKJYAWPKpeLmCzvP6wTcmZNzKFT5QGjP6kxhXXDY1fXyq94BctrrGniTroHjEx97W8ZHyDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Dm7smqWnxpS1eWqF2oAKBaVoELyuQXJ38SrSyhyup9xHuULicjGCxiAhrTvmxisf55K19rXi3bbXuZckY3E2ti",
  "key1": "CMVy1iSGeu9xi4umikYqNiUtLztpZVzSHVZyGoJmeCHbMKpzmAFPo5SEkZ9C7P4Qnyi6BeErrcu6mYDxobwWvQu",
  "key2": "2RztkMZspbH3EAJbnAh1MCjhBth5GQKcAnb7YY5DMFUY7zKbFTwkW9p478Yxof3xNGsdoqBwD7wuyT3KJeUaeP74",
  "key3": "3sSxjLJYkrABmtTkfGg7xP3desBeiHSzQ2csL6v1R6svPPuGQzxEXAuX79PzEu7NcsgomxKNGZ4yHQoiTahmvV96",
  "key4": "3m7F1Cn4pu67rNNKX39q7kKKhQeNZLBuRVJxLfD7oWFmEycJJrBGhNGAhHjkF9ddvEfNaHfucyFMJuRYvuERuGQE",
  "key5": "5yvQzNx7UkPqxRmisEKETfBddR7PzJAjdeS3EDzssKZX2nmvYHegLeD1JXrSztDK2iipiwjQih5b41QYbP7v3Hop",
  "key6": "3G2pvVmz2iPCn7oDDEc6NU8TowKUwG9q7th82dRFjV3KM4WbKwscB74HrxhQ1LJtK8mxJE2ASrCQ4Xforwkyrm5r",
  "key7": "2mS8FpMxQSCZFnbBS22xMZLzvHHkNdWqGZkNoHFcxG5csJRZ3GU9vn8BETeAtJRwrxfuibu2ZXWxUG3qYZv8C5F9",
  "key8": "5yP8Zx78wy6X4fiJ1hUWzsGy7HbsUrfE5FhyPC7XMuNMp6EiQXRd6F8WypBwejFUNzqEt2DD7k6gY73mrEXGUgSo",
  "key9": "4zEFdK6HBzYYrqCztHz25MznmNzKeG5XeAHTzqYMKeAC7GVfeQ5M9nmHKepEGaQkfeKJ7yQ2GEoaDth3JJgLKXLT",
  "key10": "yRt6sZRAgJdBgyb6m6BeTWBt5StowcqexrBa62Tq37jCW6Wrq5GtF9a3hbjdeeE5mfiHKFeHSZ4C6nJFx23VxjJ",
  "key11": "3QsWGYfHFLU6Vx5RDVyAsYxKPrJjUMXp2eZA6M1ZjVHk7T8y1829hfLBkU6ZrNAE4otFZhEtRojH5bZgKZSFPUMV",
  "key12": "Lt1QFpdeg9Vmn9dxhzefhsgaaPX63eKodJwdaQ1vm3LRkfpbzjyhhnkuvZsPpdP1AQ7H2bnqz46bofBEMtuE6c1",
  "key13": "rz1F44NvWFQZypXKTJb9kW523QGWLCV9FP4gNrACCTEMpaXocHtxKapSJZUDHo8Z3oJJ8m723Z9N7ZJV67c3zoj",
  "key14": "usRNMfDsiMd5BPH9qbEkHFT91DrbeQ1VERQKn4vr4a3q9bWwmCbf7M9BMfghRz1adNomgW8uL2YRM9akzP9pCVS",
  "key15": "27eZMfcAQe7gkeAVoXutL8kDhiMfjCuVe44s5nR1fjn2BCvFntxSzXBg9xmjHyDfBJcvskv7jkaFVJntGjnri2uj",
  "key16": "3LQLftCoBspDRsAYZGnS7LnXu3LhCHmsjZYJiy8VRhJEJ38ZD5YXQSCAfkHGxKBnKkmTfsgZSZB9AVG7V52zdJpj",
  "key17": "54b4zrDrETYet4a2Tg33dKgrVKDnmX6fe235Lg9wFpZmKfTkbt2ScN5ZrFV99GVVwxHgYAuAT5cuSnVxMD3VaQNZ",
  "key18": "5djoLUCUQ9YGMXArrHNPGmzxUHMo9xxapPJXWk8J4vJz3gzMcZrKLKmwWj7C3PnG5WNnKpwv2H2WcWF7w9465yKa",
  "key19": "2zN96CWBSZ3ws555p3tWmov4tTnhxpU1wyRkDYiawDqKiKxoj1oYgFEidYLF3J4NG98tGtBvAv7u26v6zk22SWX1",
  "key20": "5i2k8wuyeZsPHwiZvoFi6ZyfH8hQvYcuwoK5vREkugnHb5cX6zrdJEPo66CiS1HhhqHDgw5TbNCFdKDn96k4R4gH",
  "key21": "4sdiDkeTZwLcKFfL4RcHDyJFyVcD8uY5bpd73zDHJQAR58JXPGuoqgkAtnZFeB5xPa4aTjGi3eonsduXrFnj47Pk",
  "key22": "2SvG3xjz8ycpSQwH1Vokjszq6fHn4DX2U3eR9YxhUVBFNUtKjzVbtZN3NZbBmYwikxp56sWnx2nzEapaiGpNbr5g",
  "key23": "gmK4bC4uWxWbUSRyqma1YViSDwj3kcVar7UVMLMWb1CmRjBynmCgvS6z5sEtmoBj9tGL3BqpXGt8ntSww5HNJMd",
  "key24": "rKi6PQbirsJK91hF23YuckZytnzsh5vAtTDa1QMLKRe9jZYcoESt7LVXThNzKJH1eN17sbdeeD6NYY1qnFZjinV",
  "key25": "5Wc5B74V5uMxDN8dkf6LvbLiEpiTqtz2mkYmHNrrovCbCVgrygxet7BDMkH4GQLS4WxE6wJTQxMRp99cCdUVonvx",
  "key26": "4EgFiMZo64pAzxk3iwN4xswxXQUU2x3TLg7zUm4Hhha5x2AC5mwLtSJF6SLNterYwsUiLZYt9JWbSoRifdf6BLZ5",
  "key27": "3Cm3oEkqtgzYLmpYHkDfTwrhPrfnVpPPzHb2uUcZWp9HC58vWFVtw1G67QU4veg47nDEJkViLJhvsGMSmdKATgb",
  "key28": "3wP9mo8upRvKjrt9b8YoRRUMCAK9KydjgoZ2niX9aaKtzcLKyX6o9qiJMBr3T6UeEH7Eosde3dtwCfTbdRXAunqd",
  "key29": "hbsUgch1tsHzgBcMFpCpGkX7cAi2kCYkx2LXtH7ykErHeaS6FzSEzAeKh9b8Rdjp52Y5hBmdcmJBDWfXN28fYLc",
  "key30": "TnM2xSxVxnDYyoy1diomnEr6wGBm5UcbaajCdXMwv3hGVGeGtBbB1ajSkuApHMRkGcHfoQCWYh1eC8ZiFe9QJ26",
  "key31": "5XoBQg7PEpABSHT6aF1KUfzbhz79HKw1eu86zNGE3EKDTL9CXVuNBzQcKVd9wizn3LxcduNGtztttpr29QhdX4fx",
  "key32": "2EVdqC3191pgWvJ1XgEtYCxjosCyipEbv5suw6y8j4Ug7YvE3zu32xEEsKBgHg8qQL6gqcVETrU7tXBnBzYsebXo",
  "key33": "rB1Y6jjNywLbFypLjeGAvG5opA3sitd8NzKbqeLaZL9SUwAxt6918Pa5YFdiHwUwPrvcfxGxeWVoocdFfgr4EJW",
  "key34": "2nuWgDn9Adcc8Lf5J5VcWE1DShjHajbA17gyARUT8CraiRWGrbjicJRSQ6gPdcA5aXh9HXX1xxBnroYm3c3JiHdE",
  "key35": "52nxVDQEXPGtKc464LbNKhz3U8jZiNcKqJGfHQ9FDJ8HKwdAMER5awqR6uKK189NHUWSRN2pUig8JCbvVicmqcic",
  "key36": "5KUQthGs2k9r31DENT2wHWBp8eAzxcoyKhdbVwinrHn4v95R2qWhpb8iYGrrTiuRgMZiSvfN6Z2EJ2qRyvESjbaQ",
  "key37": "25Jx2tvVpnmDVxFJbzVXepzAdnkjKq9M1PCMFc6Az5iVA1m6R3ZNruZ2LjQiUSWSPEtrgjdQ6SimyVR3nV8aXtQg"
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
