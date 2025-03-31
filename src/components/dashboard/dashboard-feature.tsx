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
    "3NSuM7vdesT9h4zE6aZhPpz8HA3eU77WEGtCXpSZc9T16xfoocqmLAAxq7uM7JV6oBAczE51J1DpgpWZJddMoffF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hH27hs9WrECjoAn7ZjuE2vMbHuDSK7az8gdwqPYZvRDnf8XeXh5dqijPV1PGhS2oaCM1pUGWo5DLUTqmwQNGbQ5",
  "key1": "4aybYRkqZ9s1NcrFD7CN2nd2bxnYdgxbEHBrv6HYUs5FdwHs8T76ZPKNkC7qTHFCw2LczY3CgivFvNzu1w26v7RS",
  "key2": "26ZSKD9mDGwJn9NLXgTztGCuFTA24aYg2gzCWp184RQ9CbuWiFhoszx6EudVgXXjNEeeFkCX73zU2YH5BYkDzNRM",
  "key3": "5rt2N15jQm4PQ8pwgMLrzYFqiA4tfCeFgV3MPdqdLriDC7YcvEzJH2UVSezwko51op7AUfej6fs7j6mtD1q2eBW8",
  "key4": "4jhN1jYTmptbq1gaXrzpD8yXvFrkUQG61H66AYazAXGdn2M26s2fJfwDWxDT2pB9cfv3VtFbLoa2Lw9iJPwn48iv",
  "key5": "1zWMkgNAoKSCvPkhKozKDrkRa5WSVDJhGP9nYDQW5CWo9pd8BA3TRenAvZtnCLfXcMSg1NRKnvC1f2RAxETv94W",
  "key6": "4JNGBTozTNAyaQ1UpYx648AR5LpgkDsJBEuiAiC9ax2qCUdU7cEteqqGHYCEp4jmFPniKLiukapcH5WFZbUzENGi",
  "key7": "VVc8efGuoJjMFLEXWLM33iqV79Ku24zJUANyoQmPcuvTtS3w9v69nPN63UGp6LWPudy9g5qsJT6hpdJAUuTF9V3",
  "key8": "24YeHRatQ9ZvWEqneo131Vf1DeqdA5D8eAGAaicPbRcu5QtsMMCAsifriEd4UQ5iNEzAQ7hPjXgNN1mzXwTJXDDw",
  "key9": "4o4uMjuQBTtCbzNcM9FehW9k7BGN6NUVqPh3dZY7jyoSCwMKd8pAXkZnv1W7GQpGounnEeqsek7T9ieeiaRQe6gL",
  "key10": "5G3hf1nPFKbaZFEKxVBamGJLrNpu52t5xHYEHmDUDHmgzGWygRRRdV1aVHiosTM7aK2aV8oQko4D6QnE713EUeF8",
  "key11": "4vinE7VQdsvSS56E7Cc5hpZnfFZszZHdny6NCsJ7PLuKosTki5uG4iNU3toFwRVp6sc18rS5zSUyigi4dA4JKVRk",
  "key12": "4KyYuttDwMPeDZTY9BGCMD414S7NG9sqow42giu8LHdtpXSUJtLp3Nwy3fZTFiV2mYsCJ4GWSEAWui7qn7fKiGcb",
  "key13": "3N6U3ou6bXVeeVyb4B1Dn859WmjPf8ibB6NKe6m31N7pp53vStmSHWkrTdKaAnRyYz4PFSLmscy84BMQLgXtSKox",
  "key14": "2ewdyxHchvg6zLa2t37jV7rB2u4fAVSENbMBw91Uz6KjYM6WUtfZuEpK2BsRJXKyiAXxjT2E2nqKuRMnZoEPhq4D",
  "key15": "2bETiX9NvUxEY6LtghG6BovzZ1Pv6KTWMCovtx8mqmT7PLh4s9nsExTyEQifRSp2iuVaGGFiWGzc9eZ3vD5JWPdT",
  "key16": "4zhuEEuUcTzx5v813mDdqYH1DwPhwLzzYRiexP7sgmS6fe6bnUiwm3wB6nGUwepFu5EZcjh55ZXMzE3Qe7NDc3Ph",
  "key17": "JSPNGkT6ZtCK7kRwNmr5ZnLzqzmPedcaKSB2j3qvPfRXGUAQrzrU7LfboS2dEeYS4oVgenuoR3UUiwtL7V94Dod",
  "key18": "3ACGexUYzd9F3NyML4vNuGDXA4uSQmaT9ufA9JBhr7tDR8kRr8Ny46jnbVWErPGgYpq6N4XjEepz27eSpF7PwMCM",
  "key19": "2PwWZGUMbvykv6ZQbL54rGQhrQRLBKAC4RpwHKjBQNF2QzK5cEcLw7QZdQxmMSh223LtfNZtfPM3HZbyaZ59XjTV",
  "key20": "3G4grqtd5QQ1kwhvrrMfZyvR8gpy7QNK5QvYw2DafSFfyu9zRZtT9ovMj9y7FogbrsFARi4Aoy7nVKJdyWXUnRdb",
  "key21": "2gnTfVK7YVRZPWxs64FN3UhwmfbfrS1tpHdBHaUn88PEwAE2KfSa5w7yoZn9CUADS26eknvv3WjizA9Cw4Y6UuMw",
  "key22": "2MRhxevJydD8ay7MfpPFyissQa3RVe9AaPhWHjjW8pVxZbv6ouQod5EtPqooUUjfbVUTTg3LBTBdfy1E12C3VAN5",
  "key23": "3HCo17PhJfUFRGMhcc1qaRS4Tv5DdGyovnHbtvn7sf3eYhV6L5HA6tXzqSgzyTx2zZ7vkBESCaeUnVNR5aoB81Mb",
  "key24": "2R1ag9CMPiXbEaN9axSVrbREfWB5gca6KJom3mh6F1GDep9STty3kCquG48fcfD3J4WeJd97vrPM676SZtCxEDLc",
  "key25": "3Faig7Ckn93XFBGQ5QGGpMhWQkUZreV778Ho9QipxEj7dut9WC1ow4YtrYDKgz2upBb2HFa1gbdTR4uSFyweSAo",
  "key26": "2hw4P3vtuMLCCfes2w7PbaAUpVdxc3zPJdDgh5auJDx54o1R5HbLcgHVAgSwSfKQ9juXctEsPWUnYTF2KvtqJgv3",
  "key27": "32Nf6PUc6sSRi5FfmrnGsc9WmQuRyxMEvhKLP8DSH3yHSMvN45GFn6RMXbYCX9CWNcKvDLXY1Q7ZB4P83ctocLkX",
  "key28": "5XjsqBajykdiZiB6B335XxojBwcrseRG3AEaCynAszwMRrPK85bzKc1kbMd76HDkm9dJsjihBsatTmaM4ShyjYER",
  "key29": "5FyomyZRJ2d1UUACT2Sj5BJj4nvPZFRrrkTzfcioN71V6XWbGA8r9pSNT95Wn5S4ZWhoZpQkvtaA3JBTbgA7KVc3",
  "key30": "p5bCxb68Vhhjj1aUWN6XdfirP9q3KkdBhY1VuSPCTBBMrcZy9W9d61YC5ofi2VhLBaCCp5bAB5YugVjznCH6qwP",
  "key31": "HjrsEnzbmAFxPRdWtKTGKKpM2UbH8bfVwnGeVLJopqt2pLS4b74rvYfCWewmDe8tk6vbyLmy7FwXxAT2QpXjEke",
  "key32": "4auCFXpQxmxY1hGh3Cf5C1znUW63oGtY6UKkpw8ZyWkFUrBYMugXiLcAH6TKf6HFn48beAW7dGMVydaKAo7K8pKG",
  "key33": "35GKScqfGjm8EbLrzgjKVRnRP6qzEfNDfEuhTUUywZisBTrEhKwdhj9oUcmLoD4176WAqDbHvGXENTFw6MPU2kKx",
  "key34": "5pZ9cbYr3Nau48NTMSfqfrL23Q9Jr1koaMRk8dcyVu3rPaC8wwgt8LV4eVqwh17Fzn2TtVh1a6eYQ9tY1tcG3S2P",
  "key35": "4DzwArBx1NXPyqSLBxjzAxgqec73VE7A8Gvi4nbBt1EXgKQdd9nYRRxQ2fxLRvAfYrSASMAbjMmQi9pAGiz239Z9",
  "key36": "45Ay5sogHCWdRDt1QSuwSuZkP3zJ4gTem8xLbjaqYYiUokyd75MTXG95TgmfHxU1riKw9XtFAHpK7B4eEhnrpnjX",
  "key37": "5bkqKaMRKzo4Zs5MrmSWJ9uHzNrtKRH8qAgVAKk1Svc6mH9KSNaMpBzjoukNRSY3b66rjwhzAMPVMccAAiKEGMgk",
  "key38": "QJKxV4U92wLsgH8FtsxErAB33KerNPQizpHZCpjdnYh4jsmsKD3kKu9UXk93h5vmaFrdipLAktQY5En9ibM1rPQ",
  "key39": "5j4fzxzJ292T3vgtReryZDBjZtk73q2PPBjvCTN8RDufHjjETRTbDk8ns5MQDM2WSJoW1Wc3QCRqh5hpYkCFunA6",
  "key40": "5UCVnCW6Amrg5sjqqQRiVq92A3Vt3XzFiNpVFpVvFpbdVXA4nXuQtQExPVymnNiL788ZfMk3SftjZsZR77qjZLnt",
  "key41": "5ncSzFWxJzqDk2PCKPDMySx1Tq2cXM6SPF95FebGUbwBm85zrCX5svxdJMXohTTTdCoCqFFkQu1FV8rqH6Tk8yJD"
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
