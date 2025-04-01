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
    "G9m6FWTjwD1LR4hY39b4W3otCZ35sRgLuzUHhHeXXzG2gncqqBgS2Nwmsu3yz6d3qEBxhvykFe5nPKdNytHhUCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DrekRFwBW89yimq6FYZP7FFCtq67ruXayhSvdULkfBrQwc6cX1tS7Pjm84cnYMTbe4AmrntvnZwYesSiPan99Q9",
  "key1": "9HwPGHeTBmCs5QPXJqu3imAKvCHivtEAW556avAoZpDm47jetXzH2G2gvGB864F8uZMpEZj8UevgeZBuxTrfDPg",
  "key2": "2ZCsQ6saKojwkNDL4khiaQL5MpqPQtTCR2GsZE6tBZhYY3DJ5ajkSY7vroTZfmNsxNstCq5AyguhcKuvfFNypFNg",
  "key3": "4eBjTHCv9sggMf55TRv2N6Q56yMoaMgasqWbvyhQSLQxtoBJbWeZDTLfjvM7tUnWgbUQe5r3LKXz8StRqEaiuC4h",
  "key4": "2HQ7W3zDop5Pp5No3tKeeWPVzXiGqaQaY5x89GY7ShdskcB8Zujj1MxXDFU1Ri6UXoHuPVXKT7ifFewQRuJwAjX8",
  "key5": "UFP84FWkXzJMqeiAzrpW5ZHpdKr1rN2sTYCUHDojpX3DkFds3PpVvTvuWUBh2JPUDxGcXQxwcTAhocfn4cGsXqJ",
  "key6": "3CcLe7vZxmgk8tHSso56nWgWwtFtTPZ4HgWxXUubgogibbtcyYZvP8Fnvs8eBPfhTXTzeShm7VcKSCv4SXS9eMN6",
  "key7": "4yHdEcMxmEFs8XQZ7qAn1v4ccjBF2Mz8QxL9XwYmioZcij3FB5PBSLn7JftD7YyHmnTMqey33tEVdMMm55i2xUKz",
  "key8": "3g5onCsPDecEmREox6VosHWwyKmiQHJirgBckFx1kqg94T2tk33WyCP798XpoS87tWizqLkEo4hGr2PT1yr7wDHg",
  "key9": "2GDD5L4nBVpDpgBCTNzRpFK5HA3iFGxosA2QyTDg4Y6YVoK4w19D35qn1QSfy6C57qcWRdW7SzfHawbG49aqosfV",
  "key10": "4bes7GPh11twgS6iGs5dVDqYsyqqcBVYTqD7njC2jPvETqp6qBdPUULFwVXwuWksFaqCkGTa6dV636hGWdBNd5Jt",
  "key11": "FL2Z7SPvLkLwX3bE2UJgTmaV8366r3rJg1f7wxbdmHMdf9YdGDve6YJ5psnXbxtUrCy1GsjBeuDGebT5PtSXXna",
  "key12": "YHrjY3P74bGiP4joGTbhQmyg4mtZugxz3LWHEeXQsTXGGRH3aVaXBbbyYDKJ3MZyd8GSS2cWZToV5aifDUcFMZd",
  "key13": "4E1LToLxgwcxJYcp7GKwFjtAtafiqfbgaxUZSMsAioeyc29HJ67nRxKvRRtndDRJS9XsdQ58gPZiFQ58ge9hxWjB",
  "key14": "5B57cG2L8Xj7HLVGSiL5mFxj4SZEpqPgfoMqMm66H3FpFLK5ug6saHpAT5ZhAEpYFnmapJL6yFMq2UifXjz65BwP",
  "key15": "2GgUcVCTwxP7UUqTF1ehvnumWRGs6mm3nwWRKeXgFtXfV7am8yzdtXhsnB4yRNt4o9TvQL2ULrotZDBhQShfyFwg",
  "key16": "3yDMFqNiGraXFd6QTBSepPBirAKC7z58AiiZ5a8uHQnJAhcpVEPgXsH9JYDc21CGTA6n9U1XR7oJUMtRTMRYyGsb",
  "key17": "2phMsF8Fajhym46LicJVpUzYiwQrGL12YNuJ7Fk618DCnMK35n2ZUPzz3nS8DqA2PUK1ESmsqk5GmxB3rKZ9EG66",
  "key18": "2ADuGYtKfDoL2aX3QfRykEVgPpEDTbf46NHCP9pz9zp6dj2HPCtTTEDDX9ZogmiacmNcyg49tnZC8tAFdH2YZFN4",
  "key19": "5ozjC3YGULiyjS8xc8gvisqfVZkeCi7knmTMLH8jXQCQZAKkdppoNyHZC1bV1tUmWP59xmHpzKuGnMbAwnAMNdkV",
  "key20": "3hFsiJ5bAVN9naZpozaagEQ4V1VrWJKkiishZvnuGcNg2DRYDYpzSYhg4gngrSzaYLBwnfVBmr54wHrjyvSNUbsi",
  "key21": "DLn2aJdxzAEMM2EF47P7RWnBCnhqU1p8DZL5bYVGz2x7BnXwhRdc9maZmb5nKrs3AgL8Vvo4skSpdiWXhcwjNtW",
  "key22": "dhuaiyx4aG7CpRkBp9zqixdSndL34p2grao4U99sZgRMzQYqGYZzVSi1Zm1bb4a3Ptsp8rEYo4va2mjhKTVtmJL",
  "key23": "63EnNd9E1p4NKiAARasw2XGre15RWxzej7KLwmE4cByEWcvExpRHe3K14bxrWMevRg3qyGv8Y3GuaDKvd2SSin33",
  "key24": "5zNBTvihpyp87ceTkVMD1p9Rq41q7RoWA7AQXmXo2TEvEAm6vo86cF8WRpQGJFUBC9F2ypPxeHQrfQdVcPQkBWFw",
  "key25": "3qLv8NEfNaLHqetZUAz1UHCBAEmNMVUSwh6qczMYsKfCGeqaEF7h29C3ranztF5mLaGS2jsBy4JgCLYpVEegUm8K",
  "key26": "5AgVqmno8RixPhsfmn6YVFzLqdiCMLnfgcyLVE687cJaU6EXfGdCvBNTjPb9a86yL41SQi9QiRU6ePfTpMABarFv",
  "key27": "25XPVbBevnAnm9GrX1UHQXf3euub9nVysccYPk65XTZuLdDXUfAvYd8LZJarZBnia22apJAzotdKyeha21eXFaQn",
  "key28": "32mYKn1tfzFHzoWkicPx45SLYYCbkDzee4mi3rq9C7Lwt4rxEJXfCGFRtPU2waN3iNxmqTarwpvw2qwK5LDHRHAc",
  "key29": "5t6ZnUosiEdniJHyAaHZrQtS6rEZ4D2rLy6XhmbfGxqX45CDp6uqSu4cpyLwvk3pN4HNnSYqbMXtj8bbSKZwZocj",
  "key30": "4pHftr3icensaXebnXsNtne3kWctsaBpN8PfKorBkNHwX3FzSVyyCxduXckh5JRGnhArXQQiKv7QsvWUYFpLhqM9",
  "key31": "3LFs1tRmt8pDHexpKQPcp1EY3h56NE7Ef7XfFm9q9G1qTt6eMa9VgKMYqXCAwix87GZjNBJgVGUVdXYGsnxMfju9",
  "key32": "624nZs4mJwYqrn59Ga9YYSrtRKVvrYTzCg1a4YrqhmnnqGkuhaiYts4kaQStLd5Mmh5KtwJRXHN7hddnWQnuxYwm",
  "key33": "2hzqBuz2ZcnDKNumrsJeiP3oGHpGkpKB6KdwDqDEfuJbfybeDjrEH4d6cgGHySmXkWmunESUo4SNAmF63H8rar5",
  "key34": "4bRQSz88xjb41TpshBDrCw1UAARfnbWzNRnFCtacwGZcqTrfsQ3ybPBBrPg3xt2j4CiK4EsH3ztg5fTfV2mfffgj",
  "key35": "5pQgEhM32DJfZ3nYT4wVTMBJJf4AUNS2iP8jXjCgH3gCnQ7LE5Bap8BHVnVxt1rwtLjH8n2PBvfeWgFrEh1r8up7",
  "key36": "4uAbtxvXNBkUj1zg8a9wA7oUFs8Ad1ZD3Vrx6NN2rm7ASudKFXB4ye3gZ6s9uehHCsRPrfNTMWe4SwekWsPGmAfs",
  "key37": "376mAYdg3re9uBdrg2JKLRGb3DnD6RvTkaGgYVXo26FfPL9XjS45hx9VS6HhzuNqe6Kyu76bbS2WEXEXKYmXy3vT",
  "key38": "296HjbLp2VToKHukx7XKKoJKKsaMboKCotJGsbdRQ5ekqnTjt5jr9K2XmDfZVba8ciR5ubNQZJFjewzV4vEL6ipC",
  "key39": "TQpYqhWkF5MTnsysCfL31xsL89sGwL9sqjrfuSj7eyW2uqvXUVZ6nRzE6KsFtQe3pS2jKptu61G4HFuj1VxtYJa",
  "key40": "44MEbsDkhafGkndM7NSpqGYssPx1UMpymtTtQBqQM4PAWWCfWPMtE2CS1sMTV6UCCYpjCsGLPbrkikfeEstC6wjp"
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
