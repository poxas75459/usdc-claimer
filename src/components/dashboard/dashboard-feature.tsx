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
    "2HSH2eFejPgWjs6uEQKN3BY3SDBxVM2cZqvhb9ANyUWQx1fxrPYkX2PTqmqpGf4FKF5TeBbeaAufvLxdtd9Lyh98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46rMFtBYhXXiJh57LBDq1Q5Q68qz1fgMgTDMNDsAiv1mWGDZwqVQfFhy1N2XkjqnEKD1LPq932o5djQL5UXj1CD3",
  "key1": "4Z5AZCEKdghN6UAthzVuoEyqNnypfBy99KtqoM2fXJXBSu2bRXoiiRJFgt12cbLodMcGpm9TKsP8jyEJq3u7e3rT",
  "key2": "58bS1qQEZYnSDmsbocDNQZ22mynz9VARyxYQYQDvRfwiudBTXPJDZrUo5PFEC3jqomnQRRhPcj2G5NT57pbHpkMP",
  "key3": "3eqnpoBCCCgFd6krTBHVna14q1YKfM6ejyABvCQ6hqDo8H4KG7UsA7RF327ZFrfnqoVgcisWzeDavF8BGbPE8zwC",
  "key4": "5AM3P6Jr4fjaAoqrCcoP1e7FeEA1NpPndQyitvqiJEWVEoR1GhiLc3nQV4ipjMAH1qaL8fESgy23chqESFxBGuUY",
  "key5": "5peqjhsAcfPfKwVPairqoih7RMAH8x55drc8Y4FCjhqn98gnHtxVyGiwaw19P5Kt5LwwrMmpJrqzncd55GfW7Fo4",
  "key6": "3iLuiSmMM8KfrKNJAtWZxBtDpKWLkBHzsDV3Mp2KWB7BqUMnLTPgc7MRE2B415Mzgci9me8cUZnd1hvjjwa1inJh",
  "key7": "4YTz3RWgU1jxBzRqFJJTWmJPYbSF6LxKygCPNMfvDPLq2F4p1g6ytpNQowYcNMBGnx3SJr1uKt7bsKzp81EKQ14t",
  "key8": "22SuivKZncwdazwjSWMgvuyAPUJnFUHHcX46tbf5DjuezsBX4ktAQZwfG8SC2X52UJ5WRuwp9U42vqWN1QC14xSo",
  "key9": "3NGemNgf94cZA6k6rv8gSBQnNnRPB9PX5iSrnohU2V2L5dm5tk8vQV3TocZ7bJcJ6uGUPk3PxKbchdbNJAxQnMYS",
  "key10": "43DzyNnCwWNf5DQHQ8pdUV94urEaitF3k8HSAr7ru7hiqGBCHgXbE1iTPvXrwCGg7Dt1b9ctThfsg7iSXU72LKFa",
  "key11": "5ZMGo2DKNTVAfvwCWnuzqhsec1E9hDs7dhKRrbb8otggWXXAcMzxj4L3cXg7qNCogVzEXyBz2LacNWWbJJ1hJ1Jc",
  "key12": "45qGcUPnu6YWe4S9k3om3rHz9EWShV5M9ucsmhUqDtaQRVnQYDeLn1kahjLaMJkRi14BJUNpXy29VJPobjiPi876",
  "key13": "NEJUcm5ajNXYiLTxSpJkHUpJZhtamzHr91Wjoj2bwMr6wwVpAxsvr2uXWDFTd7ip4jfYyYci5TwJiJEd5k4s5Km",
  "key14": "gxfrfpxcaa3ojcXaY15oRKvk87Qp6eZWHHgpfkxtMFrtjsJzxgAULWpWASzdNPTcrb1C5Ly7xnweMFzELSfCyFh",
  "key15": "4WJ4bxZSoue71cQH9HA7HNsVgSiUZEqxxGvenyiUjGDtXKtBvshNSKqR6a6PKipF2c9sFHg3j7iBbGkpLsi3kvFV",
  "key16": "5h8WoWL1AXwhiXpH1VxcbgH6RZarqiKUr9B1D1jCXU33D85UnrMCntNzRbJreURqQBhqsPPRyCzFLpx52NKtC8FZ",
  "key17": "4DDe1zDBTgpFB9nFmbV1DNoj5HU5N68aH8zTVRfBAa9AsHef4V7NmwTajtP6iu1Z5yUXLhnNZrPqVsv4mokzd8D1",
  "key18": "4p1eaAUMj8Epaw37UwvpeyKcgStpoqo26hsqCNCGXzERwF4evH6n2LhwKNiBgVusXUcPKWNqzzxpq5yH8uCfYXN5",
  "key19": "4Ch1DLnecyEC6aBZHGW5vzesNiW9EmJYMqZjpvW1FvqHXxnEhZbEfqgQFiEppAMXM47WkHGfM68VQmqRra6Nfuxg",
  "key20": "3PqquiSVcvfz6urF9so83PfNKEdiVdNWsKxKfjv7PZ2wmrsoYo7yVAkKKLnP4xuCXHDWzdHqpHdXE5ep73QrxvbS",
  "key21": "3KxZNPi5soYYnwAutGnnLmV1C8MZZF3Q1JVV5bSRbScaZsJgoaoDZutd7z1imwXtby57fQA6XUn2zua6hvQTBsT1",
  "key22": "5w5xC3E1mKuodxj2muS3thxW1WfWKzSHHkTYiG3mqg3rLPZ3ZQxzSyaewvMc7PAC3ozUWMveBBFe8hu9SnZZWc63",
  "key23": "3v15TD6zTVAfWK249uJ52zRy1iKJPDLKaehjsW1L1wX12WTfftKPSkEQYyiBL7DxjSoJs2We1YaZvM4gwLXJobQh",
  "key24": "5VHDLcv3U6nMMijRMg5jJM6JLXe2gytZ8cT8j7MuboguKdZjUw1zNMK4KmgVzkc3U83msvv1Et9HjdwQSjZG4Ao5",
  "key25": "5HP7mtWg2v6q2PAWj126kFXjHkDaRw3DSfUakWgDZXJCKXSWfRLVAtSewmYJVJYQg2RXwoaBNHPoC2VRVuKzyp3K",
  "key26": "4AEhte9MLBQzKBZFyAHmwqY85WL2y9URtUNmLW5uL6mxCwnBxxPPVBw1GbYbHBeW5aNamZ89URjpgUQ6V3QSpzTN",
  "key27": "2Z6diVVQmAH5uokDzAobNqufiYm6hiGQcAKe73raEF7mrNrLxCZYfaXLof2XHWpyurMBvEgPJp53GziC5qTjbCNk",
  "key28": "4fk3LPsGwNRuyMJbuLc55cDGWuqmFQGVxe2QCME9Y6FWiD2JY6SfMgZLBXgFUM14crqt9VJcStVyCfBbPXin5d1Y",
  "key29": "37PCDeb95AuLe1yiGHLavL311ndaUCrUd19BMLLHYC5DNvt1xA5zQxKyFVNAvfXxfTKBf9B9pMtr5a4WJyMqy25Y",
  "key30": "W3eWDLFPUg4cFjhgkmdNjna3jVG9bAbBGx3yuRbFY5C1PLXvJKKD7hTwVhuT2dQJVtvQ9gCStZN79qvQX4SdMY9",
  "key31": "4veQmVBwyDE4rU8S3CgjifUrUcRHA21VneoPLkmb9sj4nVkLVSX6wrWYyyT1W7FYThREpgCoSkH3A4FJcMNgwz2",
  "key32": "2YLpHjNZ8poi1Q8Qk1BCodNbfL92nFnf9mjgnM9asSGFDKNkvizDUhJcyGi1Qr6KzXW3GHrCJLQB12xeeGG7nkuF",
  "key33": "4xwN8H1csdqxw4Lwiy4PUsjXAjRp1rYmHXPdxuZHozHKX7d5fDwvMeGbRmR5na5oQ6vv5bZVWcUXTzJLyL3Z1vwC",
  "key34": "37DyUEz7BRVXSkcJt2UyZ9xaEgyeMAdcDo2gbCAi59pXKEEXRfnyNoxWwcV4PRzAEvEZicjS9Hh5SnpWy3KZxxnv",
  "key35": "SZWnWQaopFey42m8rhyLeSkJKcDpeYiP9aSBje53rwxkwGtBaaLfvQohvkpaBo9qq4Ycd31kom7hg2bV2U3Uatp",
  "key36": "3VmuoqcWfpHD6NFRPYhrgVwjtfeo9Bx5E2skJQgXAvjxobma3G4Ta5ZsVVkXN37Pg15Lpq9vptXKRxY7XARmKyQw",
  "key37": "4D3uYopF4nwsk1N9KeMFTGP7YEYN8bNPis1MKdDQDuypM3Ay6DptoznZbRjWThkjbkPXE8hNbMNd7gZ6qfAZKkyW",
  "key38": "67qaSaK8nAwg1Lu7eY4CHG8DGxhSkaioaKFAJHoMEEWTxceVba7228NRChgiiru8ozDvpCBinGE6Jku7fPvMvqYs",
  "key39": "4iAKWzZWt9jpjFWrJDWETf7N9xhggY3ustf6xhuMcvM7xvy3DpnXULw62j87fiTM4ywD4vmpU8PP7UF4JZinWsJh"
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
