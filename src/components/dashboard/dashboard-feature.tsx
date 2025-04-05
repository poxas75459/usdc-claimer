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
    "4WEjjRDgmNA2bCzG6jbDx8ChV89ch8zfEcudgYjKbp7U71gjDKPh6nkuVi5V7AKqHebpYpjwaY6DkszPnZUyYxwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j4KNegEsBcNFpkrn4eQ34gnoffaVtxm6NiJ3GG3bx2FNzC21TgUJY5eMg7LyjjTkUE6d8ZBPveQFuXXJTWCrmES",
  "key1": "UddB7cKu1ZuYEcy8hMyaeLGiJ49Qf7TeBXFRz9cXFhCNZnPGJMDNQUKP99r9oYUdLJuvpT7AfpDEostF1zDiQm5",
  "key2": "2pB4yeWEsin7h9zhSk6hgyd2JD2XSWBSPQCBsR2U2fUAtTepiGtBRWKTBfMjbiBhswYcSiUGvXz1BTYNA8qqqALL",
  "key3": "2ZYtxXSXj2tgLdZ9kvZBmqMnHWT2FHrj4fNvgxA4xPTYBhvFcn8JopLE9pkWsVaihZTK3GXQoVZquxSXJmrCu1bF",
  "key4": "q1sbDTfVguoNjeTLazLgfiAdcxvGuD1k2evFexrCyEkaAgXsiaZHjCVWgrQJLHngSXUNuhuPLvRKGRgrzEATy59",
  "key5": "Mu685bY86tXEACUyvJ9NQ4VSaTFjii74PTEvcYseggkAvJCXRW4bnMFJMoP2g3AUcqJjP9waeEbdVgcjGJ22L8c",
  "key6": "9aTLsdSuyaLKmRWr6qgaZdkYW3GuqNTTTiYpSyap3RXzGTDCYhabmN1kUMxLtwmt5ZvW2dSEAzyziXRoDdHwoRa",
  "key7": "2agubnpAJ5pJZXpJjyg14X4q4Q8RLicBrffBaiii8cZoSdC5zFqFuom1kBmaY3JuydkyjM8fVAW2FBYwTALFuvZ2",
  "key8": "5hwRWS1eTJU9uEPKrgsdipb1dYoaCD8hnE76ixFKNq4kXBGuDUCzpBoVyDaqftgF7fQin5NJuUj7WSnRdY63Jkv3",
  "key9": "3D9gFjc8hnvFyWtDYsUuWoGtwJdZMiGHC1jNiJpBW7tpA5F5uLk5iVZXec6SxD3nPP77CdUK8b41QDHULsPLyfKg",
  "key10": "3Yfs7ZavEejhkMPDBxhA1xFARCM73XRwyXhL1iUjWQEcx5zyPyXr7LmJzq4zmRF3U8xA2MWPaCUMRNRPHDzDrMgo",
  "key11": "3UTigTsFbTsupFpytbwdnWm7fKRBfzKLwHYfYRG2v5oWEHFxp5QwE9nyXMPWWNaBhC1L5gX8JgXEqQtp8qHMR4zS",
  "key12": "3SUb86u7WuSMkfmvKucpmfEsodaEMCjbdnR6HziBFuaiUg1zHafRLJAZ8KuZsRFPouJCNaBpVNDDX68B9cqvV7wC",
  "key13": "AsRP5M6NZx1ZmWJwX2Ad4wEwcXBcfDv4Y2ideKqsyNghSmRXtpEUYDzqoeYXthDajSP4HoyPwCJqF62PPS45eTP",
  "key14": "3y7XZvNGMf8Lw3SbUduDfFdqyj8GufFb3byWx9UpyRJJHYEFiPCt1Bw4RRKNCS1BPnyaybAVcaWPNuNUovwhAmVS",
  "key15": "5Eqe9ciSgRXT9UM1HT96uPCBxNEyVWHFTQFjcxCtff96ms1ZGwSj66iyMJXLz35xFh91yHPFZJY29jUufuRW5cgh",
  "key16": "583KyrtfakT16fr7TNxAf178rvPyetMdeZikcYNAs54nVRg2ByA1D8rv7q9hvDJf9KKvMhbAJuvAAup52kEFFDZ7",
  "key17": "5AFNByRdYqEPXsffuuuruSUtjysTyeHWtuYqLDQSYeiJ6ESsuZPp8HJGV6NVU6KXzDJVEeBmtnjLjsK55ca9iKxb",
  "key18": "2ibzB6AYNULkN9ysFMUJZKRfrTimkbE3tGec9nhFF4R7bVcwGL9Ve4Di4yHFfwnwypqHf2zwB5heMELVbqCEaSNd",
  "key19": "3esvqamgT5ufxFsgBaaoCw2GAzjMtcUSZ4Kn13qmUG6f3z1TPArRGYsGpX8GYvJSAftPknT5TwL4vDGvxrxn9f3Q",
  "key20": "3pd2iw3ncDWH227WLyYPNoisKvKuf7BumWFnfrBUPbDikZ2U1VB5HgUGDLjztL7rytvF8HdX13bVjYTcTvxjWUgk",
  "key21": "3N76pHVwTdVEVnDC93dZNjRrc2KkFtXqKKKWfaK1PnQ8A7AhSV3Gut69wxRJFHRRWUofA3LVVK7UEejTjLRWjv9s",
  "key22": "2RrUnDrHjjuZHnq5GnWsTnVzQePiTbGQbtoNdYSDUaHi4UdRPjYiL1oUdcs2gWLdD8cVuCLktqWh2EUgsVpatZ2R",
  "key23": "3JkwK8EHicv3Tiu76ZYLvgxCqGCLaptowrjJuTz4L6fXWgp5ACzi2pVQDdzgoDXu3rff7TH532bYewebJcZ1BXuJ",
  "key24": "4SA2MNdkJVZLbSd3eLJhPT2qcxJRJUq1cC8d1m1QR9AAsyNMriUk1TQZvCiZ4PPdJH1wMRiLYoTk1NsBbc4ALBk1",
  "key25": "4n9wYZbX8FKKJhGjeLejr2x9TqghaUwCbsa4PQqt5pHKFY5b4Eyqw3wR9ARg4evzw2wX36AhZTA1t1EmumYBrGaV",
  "key26": "36HGUBoxnQ7Y3Jg4myTmyB42iuJ4PXiSCCXFQBwDEZ6NPNgqv8ZbYwys9jRQiMzo8But8WcYzozpBt8qQNh3Ldxw",
  "key27": "4JjFdoGnQj2mcFSC2yFHZFc6Fej2ma6nxTX3zrzP4FQ7W7n7hp77Ry92UWssJdk88pgF5V86HrxXA7csAGwVWnbw",
  "key28": "2CGCGqin1T5bV7CxAz2vZ8FTKGDMYMm2CuqpaVZnzBRjL6bEwJXr1Fwk2jHE3zqi5fLSHVB8aF3Rnhxey4hyGdsx",
  "key29": "3PZV2v2PFwVySAdwQWbnr5fpzcWCuwkhRzyDN1rQeGPxkDXijnLRL4MTzhqjTo9VtMbjRnUw5t7eDkZ9eUp6TZn2",
  "key30": "5fDghrUmzCzP2y6YS9FD2z1NukNT52PS3Kzq3zLkhqs9MHDKURFDUsrM16mHLV5xSbPvLEkayoo7rJorrYS98i1v",
  "key31": "2nmu3MU1VQU8rR8T4JvHDgi4CduSR9PPaXbMFWhPRuLu4Ft43af52m47Pihaw3yk1vAF1CdkhzydcgryJgCY51Yj",
  "key32": "31fH979FhHW3ycLReEfb7s9djdHkLwWhFPFX3VnodMspUkq3mw5DPF1H3bcgQGGQVfBtwZakhbFymas5HaigDW7w",
  "key33": "yuFMxRUQZeQqyuXeM15VUREuESt42GgctT4VSioebfYYhLKUNTh57kVfn1HzQBv6aQo9c3DHsU4SLyPEB4bVD7d",
  "key34": "3q18y9gTodgUqgxakyGaZR65QcJvU8Hf6Fze4UqhymEqD468FZCjDFTcihTxY5FvUTSzoGdxCgXYRZZB364LTH2s",
  "key35": "2WcUjihhidkPN5emB53yqEfeLZpbgjeh6SPQKTqQKQxL4n65X9M5AYjbM8AJ8j2KhRSCGQ2zqLGcxpHJqFcQaf3X",
  "key36": "5hsU1FuQ8C9gUppSUmrg4TwMReZADdaN8wqpxdGU4WcRoCjnrX1NHSheZe1pR4TNALhCYwUPQj5Zb2A1oaAnVmwq",
  "key37": "6cSx9YfrVz3jLBh8S2d4N2oPM1GP2F4wjv4CneRsJaLJ4XjSGx3wMxMDANYV6rkpsaKLgN8N7NufQCjYxSJ5DUn",
  "key38": "5mFi5fJuVDbPQVH9hztE42Zds8nbPukmYTXJ5NYfdw8XfFdKkKA9y33wcqUkXWYJipfkhq4FioVRsczviYWJAaG7",
  "key39": "4DQzQfYXp7q2aFcxiao4QiuNPd6jDRvG8hDfQf5bLw2WKXYSExAkG2NcKw4iZqPFtaqdMmbNx3QVVZoTCUHvVt17",
  "key40": "3EDyWzQEeABi6ewBDjB7KyjjHp4TeuDjYi9v2jkf7Amgyd5vCaydhmnKBV5vsAyQjG22nBtoX3mQgTQuT43Q72oC"
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
