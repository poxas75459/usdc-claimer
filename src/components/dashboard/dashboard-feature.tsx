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
    "5JqkKHeyyEEc35chGiU8yF8HM9p8spgy2YCAfXs9dn9EQLpfCLMTnaihmxh4TrK4uxdFPHrek2yTg3eyp4N1dcKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2trmJgUTPEmAzPjTFBKQBNx826DWVUpDMRucpwiKh5i87W9MPp7MM8uWiCr9vF6jnF2vwHAg96NuvayYJ44amYXW",
  "key1": "8FZ1nMdXA5WcrzQAwK1Qvd4ZTazP8rGQZvEDLETKkxeSF7TUXzZCZFCvUSp1Zdm9n3sZ7DgS6NGSaeQWkZHA8KD",
  "key2": "59irNfQbUiR8s6SwxwWhtfEDZWk7kzjWkiHt6xE7FFzHnrJkK4ug77sfVnQfD5Vd6HEkatDEwhrvS7bsDZkuJzPC",
  "key3": "5BML6UuVh7BQNnhuzsU6kKjRsurmtuc12pMZ6aCeKcXnPvUaqXVSaJFvUxJx7CjgriCsYqEHiEZX7Qa9YQg89fw",
  "key4": "4wJ5cAwq7d7Unqnu4HA4VTLYpYHpCN71NrDpCeLF9GnUnTaqLiRastaKAwpyh7ce7rUwyZ4rizsRizQXxfv3KzK",
  "key5": "4892dfqCmBNFabnQ9v9j9yJiWpbu4PjEyocZHnJqxD8FPdtPTRGYYqapkxFg5JDRX9BftC3U4j5SEYkRDcaUznPx",
  "key6": "82eU4e3wvXcodzADQC1ucR6Q4u4HbEf1hqQCUWRiRioLiTChWAoUJLvLQezxABd1hJxsTVpQMnd6SqXW5xzJHHC",
  "key7": "3UaqiMCJuEmiDpmJDpXr3i4Lzd96j6QAG3VctzLtGzKizdPcX5yQ8qEYaEEdq9fzXst8RVTtzR2eRvqUr9YFg9WR",
  "key8": "2jkwaYYhZzegaKibVku3jJ53rwSsv449ftneC6ZiraW29edy55KbV3DZ2X5Qyd7G2RP35KRik7pwrgCWnEf3cBQj",
  "key9": "5hi1LAbS73P7t1T6ztB1wxCrvChQ3x2Mu7YTSZbcmfwr2a1QMFhNxckdjzgCVGVYZd7qy28Ste6PDbhW7sC1AT7s",
  "key10": "2aKKRpzW8r742jfMkZYYurCMGtgjhz8K7yTPYBXYt2NxDRDv42BhWrHz9sNuNmzQ9BEbXFBg2RJx9SCF8bbBHcc7",
  "key11": "yRmVxvLL66WSymU8iKoS2ny9kVxf3apL3fEnF75JLopKxUh95LCw1Nwb2ukCJ2Bjr2ZA9ZQD1ptcTzrdwWvbN8j",
  "key12": "2jpTLYygr98AaqFuv2uRayWuwsiqfX3FALyXjL4PPpYn5mmKqJoehFrciyEWMrrQ4bZ795qRmG5XH2vHGwJdViVy",
  "key13": "5rM75JNWPnbZTXc24YnDd5u1dvqS9rGn4SK1Bi5uDp8JyJcm1rx8DXsG95wXYNseTXjVV5mbcgKQmFQnxRk1SrBp",
  "key14": "2uTpTsHs9EoQJTeCDu5Yo1h1THjSX32YBwjYu8PYJsJeiwtHXrxcZBgnRLjYH7YjqLaWeqiXDFkGzw1gDVTRvUBd",
  "key15": "4hx8mn6oJfvCNLVd98HTcEfq81h1EL3wGBhZodD6BWqdvi6bNBBztg8EvracH1nW4qYgrdsQFpp17mHMkRJSFYkp",
  "key16": "5ystAMZJ6KzWEwyRqqbDndGGDQ1szpymBw3zp4TZJuwPUF3myACzrEEVeoKcFt3Xxjin6HPpgbGBriWUaf3C9S3F",
  "key17": "3phtbF4QGJW9r1W57Tw8dn1xMkNtiEPr5uHJwnGnUJ9oSySjho9Y3ChXwSH1x3fdqHuh4AiPtPcjNpLFhog3j1Cj",
  "key18": "5rczFWT3KHTHLeX1YgZYDM4R2c6ipFGqzDtdEJPv2XuGUNDkoaX6tX72uRPa7SV7pE5u8XxuAndpqgXLRcG8CgBg",
  "key19": "2Qb9t6hdnMm2CSrXSurjK97aLGRHkY1VPiZ9WZaU9XXwrQ6pKSSYGzoW1sFZhLo9GZPtYhnm4GZHqX3SbvCBqBSA",
  "key20": "4TDCcn9w9rjDTxpU1dpsrq1im3uzvk8ubA4SKiu9YWG8hzvQAXqQi8tpL3fHKeb4nBJqmDyzC5zJZ3z7xDjQbYLG",
  "key21": "28WMbQemc4nr2eYVk91bWS7MLEug7nfQbnBV8L7uHY3Z3YTAR3aqYauR3guvhp6xmfMdveFagXXda3e5hcfWog3e",
  "key22": "4DrZL4GaS9LsCp1BohHTRQQXzcbS89m5FGo4KiHDy7TmBrbQ7Lk6UXrNC9agyXGuvezfzU9x44uFNJxjCmXm8aNV",
  "key23": "2y7BBMNXrKbRwVL51su8jPWRZ29f7WTA2NyKULrCtMSurkiXJymxTte1kZBBtstRVjtJyJNTdWU4dobDzEXn6SDz",
  "key24": "5GTthRDTQ9ws5vkagcAEF4XJprcNeE74S8reU4FHUqYNQRpUkue3W7TYrG81S9m2reCKKp18xRXqoGphcyxmgUUq",
  "key25": "Lr5Xp764AxnMgTfeBapePPf481WA6Wii7AoDW7Kmy5C2tXJpgP1GnGDiohz8M3dWwGUBGxVUQBweY2ufgUc7BHQ",
  "key26": "desRuNi8iHT8Uhwy4iYnV9ddb5gAzCW3o8AptDxUv1qh3VfaQaBsztX1D3suMLBgRoDTk22CzsTJq8PuDoL4CfN",
  "key27": "2psqzbqcnEX62eByLFEn7UQUw3YZe91utoJQYQrpPwiWWYyMpYh3QV5G5Su2x1PT8wagc2hAKdgyEbctv9gabzsf",
  "key28": "JUSYxUAF7u5etHbnnPQ5j6rqSqJsuyY9HA1vNuJS2vsXbVk9fRwnH1jcNGZbUNJVvQRo5qLE29eZ8vUfqqnxAeA",
  "key29": "LRbaut9eayqBHGkRBb2Dy1bgkem5Ry7aQp6wD2b9XRZKTjF57NN7rDAsixWaPocu2WA6BZyEYFzKyFJv9cKWDNi",
  "key30": "3saey637BaXvmbQrvE5GaVQAg5fadsDUgrh73GsQcihDZ9V7E817jtF5UPB9gvrZKsXgKfWojx6zXX8EPRUwGVTB",
  "key31": "6g2fyxZLC3dz27Y1QDrHcoKTnLryJAQ1h31KFtz2W8KXzTfG5mSiLPPS5AWioJYK6kQGtw9Aup3KSU4ejwebjQY",
  "key32": "4DqZNJwdXn6cHYnbVWKjkyDUVmJ8JB3q7NNAiZJ4YhLNf8SUxZFWXyqEHHPdV4iTDyFYxDiTVNPtpZDXAupPACmR",
  "key33": "2tVmgnphSMvF8eygXqH2wPu4E2zLr1fS3KPxQKUmagoADZPHic2MRxT5NEVaB5CRVxfzS588C5mKK96efb22Q3AE",
  "key34": "4WS7CraxbNKpVTcuA815x1Pur2ZTarzVEfencDgvrXmFtpXzrx3xhTHyMjttTjzEsHrYpxa8H6mcHkLydRnoswmj",
  "key35": "4NQtzo1vxNgCcjBorkZ1EJt7VgArKwwVRYrxXRu4RMFMGwxWLDqTkxiGVwvk72MYZTCfigv67Soqo2gs2URXcttq",
  "key36": "Lq5BKLNePPR5hcguum3KPDCneipTd92uNKdHykZ9AW1qJSPCGjt9Av8HUMTAniUFz41KSe6SZmdk7KGtgD2x943",
  "key37": "25DpYjiu1HymmXmCvAVmSZeZtbneMhSXRzvGUjMUFtEv47xHHUwCgGQKkJwgvtgVKpFCMQ4ZJ2aKD51CaNxEwFNv",
  "key38": "2hidkC2B4LJGSNYekFgzgcLyyNz96faBRg7DyXE8y38fV1N7v1kPednLSRztMc7c9yaud2ttTZELNHSqZXPUZ2LK",
  "key39": "2pKVcanXCr5CWSDt7kpQBSJByU3uvFedqgXtEabnZ9hNntbBYCQLhZ4mLXzZ3wZy9oVmQ5V5iAE7panMyhjR8Tps",
  "key40": "5dQ43BLf8VDMi5DRSJVvHntq7mbyCY8fCkSYgcp8Fw3imXnW3Tphen2wkXdgSTA2KhGJVFGKtX9L13EXjmkeyH8n",
  "key41": "2jV11CSWfudHpiTEVYRNXRpvsSYKMGb1QLgz2fpLSb2DFPGBoWExuUjYzVtNiquwUmAmScQGA41piijFEpnMf4qX"
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
