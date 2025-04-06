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
    "3K4aerqamGXXLKMZ6ybj1n3XHMFGvjcwTvuv8FgVLQs2tjgiaHwhrDciQqdMzXLxAdHgy4Qm7NLpY3PGUGRaMh1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b1iQRqzKjX8H2kcfkuNk7qaRuZzhtwMSLiJG4WvCJphCE9wC11fa25omkWYtKvRVVxX8vACXx4ppBygoqCQQuBn",
  "key1": "5aCJUK39r1TdC3VD8HPEZZ8RjqpWzsvZgKLFfXJAozGguGjzy3uhuaXXp8siPUS3awPT52BH6BFRf1MCrrxb28wq",
  "key2": "66QCgxyzjMRpsPNQ9XYHYJ7odWQRakyNiPbu6bW88pryHASxDSgWWpJEkHrysTfBJGXnTXzbhYMfLqtG7drTozQy",
  "key3": "3dMj9YFNKhTLtGLwii1WZD77jyShkQDTR7PN9iWJCZBzDc829tCRZmuPP7o9zeMxNgddeifQKN2nRdqZguKFR9K5",
  "key4": "5KfL6Wf7kHebjX9DRE6J1QVi5f3m5rd68MYKcH7d36356mnXJYhs4MRzUxuZCzcA5oGb1YAWstwK3pe14ogG2BQ6",
  "key5": "3zyeTp1Y1c47PMnAXe92MdovAmeZUoPqxKvkX4usnueLpf5bh3HR3Kz9Fgn8ZXEE8eo657yeChhxyyCZejqTNP4z",
  "key6": "3TBeQ5WTSbao4GsZmvrU469U3tksjijzjL7oi9MNY2BumPrckTwY4M82RSCPUn8c3X4WmQx3Tn66y8jQaD9xW8pT",
  "key7": "4rzbaeT4BKRCHzuhoEJmvibTnR4sNfNrspoTzNhRwzisuRwWTKzjk8G4jxVDNHTRGRDr22xWyxdxHR9yZYFUXbHA",
  "key8": "5Fx6Xstpt3Lj7WZ3A18UmFFgfvD4TmiLjmYUEcqSuoz1vp4vpr8KjdjqW5YS13ULysynBoTFrJ58m4cs45ABBm4B",
  "key9": "3Pr4kxbic8ZYjD3mymiiuqT2YmvQLEM4p4g6NrVKfg7VsAbT33hFpZGRDeoTNuBn8UUFwjDb2ZZf7wdx6VVznqjp",
  "key10": "2rTyhtdDzovMieNJo7eBq7DV8r41yY5G6sZoR6nFyEvnVD2XY1vL39a95wwi6kVSL9KUuENEv5UXW6zPWPbjJErH",
  "key11": "2UxUXY8oecdkeiBGYb8qRvixyGZWSZbvi7Gdt1RJYBZakWFdbdUCRoBKvbnfJaBNerPZYSVnTsDWUX2URzHeQp7n",
  "key12": "4hR2zJ44AHfqdM3W7z7X7wJvQcWbkhcwzYMtFuYYawEMyfk5hdyxk5gzXThHFLmCkj7ct2wBvq66wC9hbkWKMSTE",
  "key13": "58x9jYHV5dv99bBaWT1G7drSNzfPrVuRPaJnLoaZd8LmfKfraam9L6ccaCcDyXjhNeLDdZcfNihftF4avEdo9Bt",
  "key14": "5sFsvP3w8pigYLFsQpt8BmiJW3dWbxcyP9Fc2iAnzBg1C1XtUEpL36oayxbzGd41HsBUMtdNMe8SK3BvfqyMryCH",
  "key15": "3tY9WEQFFn7AxjXVfTxT7tW4MGByGkGLWG7RzPjnKJ6rMeictvKDmgVFxMgB7z7h5qcXcgW4C6ggFGDUKAJkQRAx",
  "key16": "3j3zFunR9BaQ1QX5y5eChxHfqHLdvY4qpQMm5jS73AmambAyMzaZ7Rx95toVkDhFjmPgvh78vyP2C7uvUT32xpnP",
  "key17": "4eeGYEM5HJypnX3P6UH4YmRBQVj5Q1SKLnZkwArc8WHFLPKfmtNQiySHVUmXSABXn1VGpMLga5Ag3xq8ac4LwY8V",
  "key18": "5UoNABjN2UQoWauoc3wUAHG1q7B7onSarsCaxrCoYjW9s8Pv8Zb5H69MaWaEJituQWr6sBuspCjA1ZkKXEqP7hLf",
  "key19": "4Rdzfmsi6FJC11WKxpHhBVVswBXTF37eDzJoMmQa1gfvSCfrKtqXHJ4WznUDoBx744u5LAvZSutn5UM19XvgLLtd",
  "key20": "2s44pgtFXJVG1mX8zidYBucyRE2C55b2pCahVzpiS1kdzpPnvWrA5yQZeKFP5xQeaaWxrx3KyiwKXd5N89cQVPYu",
  "key21": "5ibfSHTFvDNnahao1Ljvca3DAYfJLrHZi1fjxAxmF1Pk6RcfkCg6cHZ5GLEhmqMrq9zV3bBAHsqT5eJx2TdHLoyi",
  "key22": "4cZDqb767ZPbUYZvdazcqWpn11TcLjTDEqXPBRMFAzWZTFUfzApW27fGd7P5ANo3LpKAhyZQgxWK5kkWWXwoeX9R",
  "key23": "3RwjrsvxC6TwCzaCmUZw25E3SDCAoS89yFPz4CMwNQsvUPqUKov8hTM5Ua1yRXrcM2sd5i8SL5KxyZoh6xQb8YRM",
  "key24": "47TFqPbBSvKdAjEA8RZQcdu6XnGhv4E9pGpVaGYAWHUfX2aLaCJaobEMK29CekGgWE2hX3KB4UBDqdTyJLENzHNw",
  "key25": "4vA7bTm13riwvpttBuZaGLwAKprxiJwK3KggtYdYBnCijGdjuw5q9D6AbChxeLM8Z7cGPWX1mAwoy85KJFD5rQbz",
  "key26": "58EqtLR8Tfhpzavh2prwbBdkqRcAjDvhdiR8QMNrBzZ8T7c57ayEWYkaLcVGQphgpRjyshhcgb5XeJntiZZeWpuL",
  "key27": "2Fr9Djy5oS2uLLnVmeft8BC3gU51Xh7aobYXnoyod2FFwqZv2LqaEzbhxExMKcZgy2NXv1oD6CCmR7ux7K8XTqiT",
  "key28": "3TGHUwu4NSWDAcoLRhd359d7fb353UQYTuH4iXL3K5a56EK6W9mEnvEfBJi6T47dkTvZBq39UBxDa5QptiPSxtio",
  "key29": "4jZ6AH7mmWBCepyNuWwTxNMwJfxyAWs5w577ywAxFsuYzMQGHW8DKudtyYwKr4NJXpeYpUW2wr9xzno3eRuEEZxv",
  "key30": "67HbneR5TMZz3scTDZfsFzaULP3msKnGEjQteXJTgK9HxRwUSsYcLtNw6yuggYSSWWhb5ZhaHLU6sUW5QuqdZAye",
  "key31": "3xoEez7zamfwWsHL7yh161YXXzJCofKWr3azRJT4EZSd5K1oGBxbjtVVFU2vsDWXufLgTvG8xRaJvmGiMY93wuLi",
  "key32": "3SxyZjRYJ3bkCsz8BVu3ZyuPsRPt4fn7x2Z4A2QNs3VeWWn9aoYjnuW8DeXHVodZZxnkM4aVo9XBUrH1ad9PgQRE",
  "key33": "UhAmoapHDyyuAM6D7mEKpzTL68Dyd4iyb4GiEKzRV4B7JXvwob48T7euKCxF36CxnJvTJ1Xjbuz7jAVb7tHxSLv",
  "key34": "5p7NjhEFiH2kpz3u3ztuGnLDmJynkFNZtoGJ7wUwhxpQRsFBmyVGJsNseEXJyoEH8k47Jf2wB4BDbu36xPbo6Zq6",
  "key35": "2PLQas85E7faW34DmAwxWbm4LLXWeeigMXkRUFuQdkUkeaUrJB9nQgcTb7TkD3xpapjGz2DWtwrRJNCaGFq2gvDf",
  "key36": "5JpBfKgKK6ZwH8KossBCd9B2BkTVjivru2pYq6bETokJ9bVjqSbLZnDK6w1nSxqshPr4dpUTUP5Rq9KGUThYzejQ",
  "key37": "4WSJSSP8u8dLfSQZDJkQbDL7EWrYTArzejF6LAT5uTMEE8uEq61LZVwsV6irUdaeZrtQuURbd3ukhAVpT96UNQyA",
  "key38": "kzUx6n3kxX7A4YwJguWnnPFgMcNnfdZScnLVrRJAMQuANybMGTXRvcDpqN6vPC3RH7ZbfS7potAH7ws9WjmTguf",
  "key39": "2pqzmVkeRGqJ4YKFV3U9GmnR4QqCRAGouXoJdEMBgnNWtgQCo4SYQS8KimnXhpeDobLZYWTkpZZNVjT87hie9EVc",
  "key40": "2cDeEZ8wmAz3BbFxv5FQN2EWCmee7adeGoou6qKYhFPJ2ohgNJgnkyhXLUSqacxBYkqRL4V4xRa8RxCvLgLSk616",
  "key41": "7dBU9hkw1CQ5tHHKDzPoYeew9AvZpH2nGBXozrT26fdL27hmwiyMFyeRLAgzKCBZMAacMUiHTFDb8sUa9dxSBPA",
  "key42": "3MJVRmsZ6MSyBPcDeiQ2pqexFdCpn7sDrQQGpakvacSBwSY7Wd3S71nqjZHAqGA2zmWHA2ctWbyCCd4gLe1v1zPU",
  "key43": "5iDjuyjrocJBAMahf7WKGz9jgT5HncmGJyBo6a6o97Jbgu58v7LcLw2vD8tH6c3B8jBbTsDgv2zcca64FeC8UZSN",
  "key44": "3nz8P2miHYo3tv9sHXuv8pye1eB2DhYY44HWb4EVND8r5d7aJWFyNB7PXX4yZhkGXcVw7FhJaScGuccNpdT61SQx",
  "key45": "4A5i8tpApbaoNjNwANGh9egGA1s7j21MNp4ZN19V1x1CFiixqNYyFA7M5nohs8LCScjaQd6BEeY4SYGppBv9HKDs",
  "key46": "5xjK2p65Ro3vBmTyxFMZJRhXez2AUoVwNZonug6QhrgJEgpGmRFVEmWPTSCW3Bj1HS5Qmkihpq5yKWxgaM7iTD6Q",
  "key47": "5srATw3Wf2Aj9ZDCdcWW8vTrKPWv2WNCL7yCkwPQ2u4GMfghGisYfN11By9PtESZav6c3mNqFDcHG4GNSmb9dCvD",
  "key48": "2H6r2RSHcjYe6VxkYHuYXEwJZSwDgQKqwhx3XGx3MSwfoxMzhaV9KUkeNyQV7PY76K5rwA6CPLqZsiDycLfoPVVH"
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
