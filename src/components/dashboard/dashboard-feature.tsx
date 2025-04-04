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
    "572hHG6mLTY4aEN1U4f3EDiEoGC5RdChLyTjiZHLBLTQSRShN7Rp7hJ622sbvke7GP6CTVnXXfjmhG231RbuvLHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hacu7LVSdwL4pBBFCGUffM4kvcAesZZJaZWG8EGu5oJpH9vVJBy3bexJq8wHx4MWGQULwJQbiz1eK22ZpqBkmAq",
  "key1": "4V4SW4PKebt2fwkQRQtLmgVje2n86pqatyLsHVzqkXYfNyL3TuUVexmvSB5JMZaSUDpYhvtLmaMM8sMvMqbs663V",
  "key2": "213abnpSfqJdAALhVepojR39CeNpFcfNT2Gc2N9EJTHFm2DGfHhvSg4awWbACNSsvZQfLXvKy2uU74wWmbZssWUi",
  "key3": "2e5BqrpBPQPMuBzwLMfWeEHtWHBK59vubdFa9aiSsDNFiBeJ1uMoBQWjt3gs6Snpzin6NSNbvvHBZiwCYYEEChmA",
  "key4": "44sU84fa8zsMiovqHqJoEWkSAN2nktPKMM6Y7PZ96YWfns8QGno1LpT9Q9au9EwJPydrjqzmU38W39YiynJxfteT",
  "key5": "5gL5FWhDzACZHBAEGvif9HvJTW2ukKsL2MNcxQqJB7sUjbANrAqsPuAbsobZyHG2uM9TbXnnH9DwZPSYeE8SuomC",
  "key6": "5CFE1TC2ccTrwsc96XixbFzhAU7CnshvdxEuV6tt2J1cu4QQN7Qg99PNudMBEqLMegqdf3Hq2RAqLwrxRXzSA4kQ",
  "key7": "4SM4Wz8TZgChEsDyN3sY5h4eVW2dp3fpBkHrMsQoMgMy7M3uMo9AA2qLQMzbD2KWhYMXhn3SjTix7XjsFC7fwgy9",
  "key8": "m84Pwi3UvSouC8vsGW7rsBLgbLhxhGfxKtcXTiysxPrL9Bg9ru83odXJCxLy5oLuSEDj19uqxHHpLV3c5GGmNeq",
  "key9": "3or4zi885a8LGo4GfhCVpfJ87UR2MZVDdtQS7qiDYLCSFgTPLii5Mbbmg9Fq1tjqHJyivmncEdBf9vBvAjddgVZg",
  "key10": "3V5pVWTS4EykbRwQq7sNoNZ92qTkowj6zxev4iCN5tZFX5YdHPNaNcGUJYoz25B5U5gT9GcPpkRQ71ZdwTtLa2rq",
  "key11": "56PaQJERSCgzSKfFL8aXmr4oVfUoM7TtAu86QiUDYaEKi7Zd3NA7KM4Exe28b1s9jLtYe7Ncx8SCcaktBoqECUuQ",
  "key12": "5VbqH9WHiNrN2ig5cS1gwmTFeYAqx2tUahqhvMcN1dXrdov3Pcv7uAqCDFcxgRd9Mqf6yhxxr5R6r4y5daj1VNcA",
  "key13": "5SVR6KFV4iosHDRz7sS2x2H8cV5CgWmxGMQGaM9rGAWZz6FGPtJrfCgz9RAhNLcUSBTDF62NZkN5eCnuQKmestcE",
  "key14": "66Rfdr7EaBJvgwT1dS5i3HzeTSqGHSJiMwjL3uEH3TYgfwBtm1hJsDgZhiNxcEwpQfhTtavBubDwM3LUXCyrv6M7",
  "key15": "2CTHDcnaBMBDcrGKZ2fUZeseqPEkA1eAqn9a9S9xf2GVWP3bFRy4UwT1AYmP5v1jSjWD4acAYLaHmnR9znG6cZqf",
  "key16": "4FkbZ6Gtj8amLYtg5HfxcPzVpZFxU7STkaRDL6rmKd6KJkvsqDmA1rq7m8QMrxCgXJRLBEbcDaS9qTrkxm5nBFz8",
  "key17": "2RrrM4gcT3zUoyND97NFPMt3EZa5JmcJcyp2nToe1CTXKg2jyu1n7TxpxeCuTKa8u9dbJmE9Q2dB2xr36eJcrsBy",
  "key18": "4hhwZdAHyy1x7jJMXLYiyeLfz65tewXZrVMhabVZ3uuH5NVJdxpzPu9sLQ2rks8uJu5zUCgTscBMCg65sXxqspbc",
  "key19": "2DtYJrXP2AeCUm6NieTS8AwE4TZqRnLXA5CKRNzEeD2QyA8miwQi8oBgETuqKcwv9KsberNC3puVf89i4acLehia",
  "key20": "33ozhAvy6CFqdg7RfZqrNxByRs3SLRmphB4Ee3CNedvLnAaWqXEaozmzdJb7CcVi7uv1vgoA1xiu4UreGfxQFQLj",
  "key21": "3gBcj5j6JMXu47dRzGzToyNHcdvjZ4s2eDQqeK1cH89kgtx5K8gSnaDtHNMsBzt9M7GSMqGSdV1hYpnHMRT5rpGC",
  "key22": "2UyNJ1RJHgtBUUKG7hUCN1P8Z37q1vih4xRgyaTfjDeyhCT6dKHhMqkEcmSEC6JWpLFicKMMyUA8D4FHbT6Cqjdb",
  "key23": "2meReAmKJ76VJRBR8mcff3mtfiB7dgHKPbc9VPRuZtTR7exu21sYRDcepdvdde5P8JBSyqQb3yvticYmBWhdVshz",
  "key24": "2xXjsHa2ow2Tzv6TvbhWdvK9PLhSUypRJDc9zcHdUQ5Sm8ZVnJsufioVvDZjMS75iCDpvTjLjXGt1MtpsW2yMHFa",
  "key25": "3d9Ev7W9b4ovtKsKEsMf4w9KtYiL9RJfoHt3EVPH8B4c1wcppUuGq3SLZekgYZTpZT4upCra3QZQhYWGzV8ZZbue",
  "key26": "496GCKo1rWAiLi7BwpFZHuMdEw6egBBFmcj6V66yirUPEeGBSiMardUKaP171qHJ7szuBHfhvQpFWwWCsW2pytoA",
  "key27": "4sFwaxAu1vAxvV3yMbfCG3PD4EziC2uDCvaqPemRCJqxzdeBw6oFX6E3UQdgiA5RLQVGeHnSr5yUb175fGktoHMo",
  "key28": "3ZZ3RRaij92sX2n6jc4gsgZZcri6zEQ1jB9NXsMm4YL2X6gKUhtzmHMkpjGqaSp2hnhPCiVBb3UQGmsaT7i54yh3",
  "key29": "2UdLW5uZB8GfDEsiRZgcLGXU4HfpGs7qz2vYL1E7LBP6pEhQfSWkyteQ9xVP6fihJLXfBLgC2e7PMbkUb3aDJum2",
  "key30": "3ceRyzUWKSgUJNKGRwy2EvqWawMVveYM2S8iNavbc2kZhSak9CzbbcJpjCVC5tXTwQLjrbquCiqkxh2dro2PTytS",
  "key31": "38aQ3gFu8EzN5P7Abd19A1GtTx7721WDfkV4GiSqBJtctYEhC21Hr8ScXU2qUkjFPpJJcoMmFVexGg5kAqgyuixT",
  "key32": "34Vda2yH7tQk8KX6Qa9X9aUQL8nse8RP3avgMqFE9qyPBMQRerEAWCKAKW4gku8UgVkhwnJKUuis6L3hXNTCc4MX",
  "key33": "3evj99tb1YFw3zcAeDPuzStFhNVSSca8vg3i6kQNgymn1TFXfdKoXi6rAoioBfCiskxYZcHiNToB1cbAEqUxJpiC",
  "key34": "4tdEjZyxpoFcpzRZA4KttDqJx9BTevRpZuKqCwDGgwGj2QbWX9s5ELm2CD6x9XHoxPHRLqAzdRz4uXnjGQ7LJpji",
  "key35": "VB1fikZdhmAGtw92hfuLQdkTZ9fFBdEk39dddtT1aiURW2keyd5YSaUDeshPTefWh3FAqYfgNRaySZVpqC6Pmwi",
  "key36": "62wgsiNGCT3Twe1yk9dxWUhrk6fuXdUoDtTjTX21CK27HrSfu6eg2Lmw2JD4JGNMga36xhn5tjAKVnLj2ZCYAXS1",
  "key37": "rZnUjvqx7p8ysHY3F8NNJ5my6NcErdbZDPMxuYALizUcxsswxQHjeFRNUibk6YdemgSQfwx6VE7PeSgyBkaBYtT",
  "key38": "44TLDmjDwCS1i6YBb1MvMVeti2iPoXc37sET1WWXnJi5RdisMxqmrrhfH2iEh6QUhMrKne929C95WhGRFRgo8bUc",
  "key39": "4KpVZZ389Xu3aieYH1j4humY3tfHmt5fcuptSXAzFqZrQid7ekUJLEVofUyE3QPUyUySZpx6BkhN456sZSApLPU1"
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
