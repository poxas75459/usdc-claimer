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
    "5CTVzfH6JDojbuyMpp9Mjr5J4x5oThUdzSzDKfHQFnnkY52irDwZn5qFWWd1qdvpTwUywZKbHJnZdrMdhbXNmEwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hewewkJvX2ojexr8Dwhdm3VaXywHkKSGgqQvu3NxA83C9YkyvWcaULTmdXhosVgkg98vNp7kyPBvdnvxrPBV8ri",
  "key1": "2U32ZFc2EB5T6zjJnus5NMAWPkgpZDCYmYiwi4e2sNxQhtbyxFcR1We6DAsiMo3FzgtkPZ1ZA5t8dyAt7BsnmNKz",
  "key2": "4iagT2twgXtkzzCSVnK67ajvYfrNVNAyMeLrWTZfPuqYpqqMn7QddBZWD2B2W655TeSYxJZHPibLJBj8YUXAXbAA",
  "key3": "3e3FHz5D6FyrVnY4RrTrSCMms3oVNzwHARhU1fKHWoYzN8k9BzeJ7PYEMDh1pZwvcDiQENSzypoUQw3n2onxGJ4",
  "key4": "2FHpDJgZUZ63Mrfvw8euq9QKJTCNV2h1C9QFhxsUV3iQfpGB2iGAJH8fcWz111bCwdDQDc8MKfP14ieKyxD2TMVx",
  "key5": "5XMbiaAcBVhVLEUh7Y8gqsWoPHKitBg9L74UDQAZRdjepDsF8McyRMz6wds6AmouQkCn8y8RMsqTnSC6u8UGHXR3",
  "key6": "3nb2YMSQxUgwkSerYfu4yo5JVxzfneYojtdynZhuW1uvb7rhKHN4K6fAs3pTZRNgMrQQ7AsAWwxw2PPMqFDaFmmG",
  "key7": "2YeakLHS6NHgK5TMV4D5fF93fUDB5DP7mmTaD8YKdum9omwVnfKEbWVVXHevZBoqcnb7ECkAyAc8GweErxQrg2YZ",
  "key8": "5V18nV9iPxcmC7ugq5hgw68G7k2xZaupQrqhhKPYV7pUavA7fi5DdzSiLrF7o2dYfnSfXvgaNZk86qr8nrcq7zQX",
  "key9": "2FWkp493vB78NYWvKYn6U7psXhSeg614iQiPuHCnd3Nux4ZUhtvxty8Cy7YJVnwQaw16TYn7Yv2yN1xSfVi5WUwQ",
  "key10": "5ztG4XsHbnAWdzTtykCHdaWSYUGjhNKS9vnG15QAvZyPtwdCgMpuggpYg1GKWkHu7QWwpQcEsv7A4LX5auHU1VUC",
  "key11": "5CyJ9H1mnX14WapM1QKSY4ohSHefoTTa51mEx1gE9WN8VHhMhL7WnJU8nJHf84Ldjx4CbuLSeceFwPsB6cWFBiNv",
  "key12": "2pSTJ2sLEDzjxkn9XiuXbQGSYzhbZa3CEpUweQjLhSZmtKHmrVJ3hm9ErwCeVJcSCVWwahw4mJBTreDYYDJVrj7Y",
  "key13": "31gbGudYCygsQB827LBEwQV3iy3i6wzZCcDANpeLzgMFWkSbtSizqsEu7L5HasaVD4PAmJeZzn3rsLiHDnpr4YeM",
  "key14": "3Q12csjNfcUS7AHGdsjkzrLjpwLdzeecFcsjHQLypbz229tkgsibjXxnRbbKP3sAa8Vc4295VgusrMS7SmHTtz4D",
  "key15": "43fkWXjm8ipwidfwFFdnB6bbc2WJDLS8ysDeQuSzz4PZW5hVwmU8T7ukrbZQQG69DDKfu5isTvQF7Amq3Ay2EW4X",
  "key16": "2h6Ju5vj6smiWTk5YdWSdBARZQAWMU75kU1FZEHm49pgpEwTHY7v88VWAYVPuVxM8tKgHq8maUMkRRB4kbcgDeAg",
  "key17": "26SkFtacjqLbEWyBeUCmutpvKF38zdYFEE4TfHqRTUk6obFQrh9uo1vtGorNn5yacKbKQBEwJ2ivAywLU5Wfxenk",
  "key18": "2tW41mXb6GJCQBfnqhLTgw6sKYr7GNpd6exYdkkdrNxWBoe67RwKSveKuCwJka5ubVfERfBgq9rjfny4i81MJD1X",
  "key19": "vHAr5hGrAqMeSyVzT8Z9E2f9ZihFHuqetRvL9hNk1P5rK9etYuiQwakSFJCVVPyQMZVUf9VEhNVGoBDcnspPJ7R",
  "key20": "BVVFmvE49FF4X9Wi3WkBRS86V9wDbxzJVnNerbBACX2Rz88FYHysYwcX117nwF6LbtVqJiyUk5bHfXM5bQGi4PL",
  "key21": "AyLHyqSDgW5PCDHLJ1Za9ijvfyB8dSGcNVmbV5ZNN4jWhpxLwCvbGSWcBQ8ccqss3r8v1JY99jVJeQikewkgDNa",
  "key22": "545aSYPUyjmQx1ypWDkiGryvffTDewg44eJ3vZ72B85mrdEb44ZF3t5AVTLecXxWcCDmYeTC9aQem5p8UKSxLSH3",
  "key23": "q9vuKtjY5Srui6c6D3MXezh6kbdxGNBm3YR7XKUf7RNeriXFEZbiwgMCmsAupfsGdw1RK7Hp8Sg8oNVAj17Z5vX",
  "key24": "2soWxkxk6d9izaLEM8jDwCnRTz9KgT7QTKT1tqpFmExnyM3pNFyj88PTBvPDhLixQXYh25cYqsoWeP8ydimSqsgu",
  "key25": "4t838GMYTuWyTJqpUHzQ5CZUHsD6svyQDspWbcMae2Wt4sqSJQXLGHUHWWwzAhXmKNeGncf2W3wEskt9qPw8GZSt",
  "key26": "5k3TYHGB3Ed4AZkBoa7N1WzuN415E2FaAKMpQ6yRbeLhCT8EPLQBnbsLoxZBx9ACMLWwsGVvpVdLUb1mPeWgExjj",
  "key27": "3GqppXb4FFLbMFSLxJounbjR89HBSnyaoHprrhb58hv6zMz1V2cP2FnndRQ5822ZJkxv4dww9Xf7BVtnvNDC7Mha",
  "key28": "3Sb8ZLYyqfSg2WTDjUTLaKQ8CBycD1JhxKZdvRcYSmm37gskBNEsNjnqxjjspQd19DHrXLRCEJiJJwAZwBLqTVaE",
  "key29": "4SsnwWpG4wLb9rLq6tnUUsCPQXKuzTXyWKPwy65tD114d7gC2AZJKctBEpDwnxLu3yMeWGueLd1r5P17wqL1d6sp",
  "key30": "ekZMZJ44w68nKFtpZbk5XEpfUc2EwcSr6rGKoSYff44CJtRPoYF2NkxQwTHjgTXLZz6CD33iCzAJ5FB62p5fJW1",
  "key31": "HVr6T8bFDSR68WUzyNKvNtpvvLD1iEZpS4niaMZToB9oHGqnUWTbgLqPrUacJEkxK7yXGXV9AcFzBzzUmXPSxpU",
  "key32": "2YJ9NFbtpYhQixegwmFsXXTJqnVCzK1inNMSpJauByuAfg2ug5SYzz5p7NHtwio1aVu2gKtVVhEH9HyLySXooEDP",
  "key33": "53x4SghZcG9ueqKDkkdFwZ5sPVSfzeMyN6KjKXAAQo2ZpHwHZqNwvozmDaCkxvLwQoHfvtLxAqEumrYbx9Z2Yz97",
  "key34": "3BX4EcKcfVumZaHiLYpqoSzReAjmjuY5Hivmohvz1xi3cWsrJRFSKuP2PaN1gXGu82DRkCq5SjarGtDR5YXTwBvx",
  "key35": "5pTWiGwgazUHbXBmLN1wZmThY242jCQsK8WEk3j4nnZ7QSiT2nJNBTddM4mgw73wVummPEATVCqcn3mHvaowPoi",
  "key36": "3Naz6Z35Ld1oekooYcYguughpWqkRU2BTZkPzfqGmzB5LBHsdSyy611smucE5cpYTgL7gsHEXhY5gRn6iLmkvYAn",
  "key37": "4bBSJRW1M1ZU4VxeBLiULYNQ9JPJYiXeaudyy443N9V6EhjkUyNgyyJPqxza3t58aC4mMLZLFjemMoqZAnpibSJ1",
  "key38": "4e2T1raf98YyZHJTjYheYh68FJUnkDKjc7GbGX6TfWReDS5ikBdsPFAx9xVs46PcHAzfkH8cEwwT9kSEPawiYtYS",
  "key39": "4JY9AWrc5jQWPC42zvJC3PmJgGX7GXCseY7Mfo9KkZPB2EF1Urhrb68274zCnjmRiX7xTtzmEeqrz37skt8JsziM",
  "key40": "4KXziAr9KgL5xR44btjiu5zEJS3Jh2TjoRCKpYE1WYstg56Lf6NmDnM6sZG1hY2LX5R4MZEyJhXP7B2fdCgwtV4h",
  "key41": "23GUxMRQdLxvmZ97AZqKhQXhJg2dwumK5fTkZ3bmuB7PhrS5VhF9JrFV9tvJF2zsG7HiDQ56f2pQMEq8Y3ZtgNV9",
  "key42": "oaGz3LqYaAFrRhV7oz93jHi57cj23NrHxX2A1Vkrgsi9qzLyCY31ha5FRvTp91Wu45AseNRSPfifFBAtqJQBsMJ",
  "key43": "Qcusch8uAkbLeNBK4wovNTUPivX4CrYJ4EV4u4MU7YigQtWVguQAmn87GUjsLB8b19puDEE65CK5prVu6iU58uk",
  "key44": "2TaXfTkmGUgjRV2ryd3jHA8HgR9JDvqhGCuSZZHz4TpJX95osxKryEyJkqV9DVdYDaSCu2rKadUFmkr3HoeysEV7"
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
