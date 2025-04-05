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
    "4W1xK2UWeKYJ1cusRznw4GMLYSXsLAPpnyK5D4onCo1vYEi1MzBg5xB2QYY8BCYx7dsuLTj7LRTVwUPTpqMZNEzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A5Jg2EsoBtuyCovX4uybQvnCi72ZwjGc1rFMAjiQh119uDsw4u8jwrG7JSdKnUgX2ESo2HkzXRFWkof2Yw1kE4d",
  "key1": "2pAN9EZAjjndpjBFHRZufHawkdeny8v8oVUiAaG9QyWB3DfR6qDeSByCQCvxt8Kcxyca7ETuhrFR4kPfHyXNChgB",
  "key2": "2xTQ4yYQUH9rv6K1PP6p7YLFzZGabcG4utrhPVxxc5CaztNR9ocVUXdEtVT2SmSjCReDexYN7JC5UWuobrpPgyqZ",
  "key3": "64uz4GDZNQ2zHWRA87acWuiV9oxVqYRG9sn74QjCcn5ggZeDX3WizjSWe7DJBBnEok9cegJKtGyf8vD3m1ABFmXF",
  "key4": "4d7BuB3nY1etQNHZXFiz8tDKt9qQ1UGRwxBeaVrCeQEVCKCxJPzeNbQihze8cydezzbViiHS9pi2QS7xr9zXPqrX",
  "key5": "3ktTPzhaqcCMdPn8pZDgYWSyndP6iVKU3E7yHRWPDUkNfixbuoPJxHZWY9VSGYo4P7eQnt8EgEh1BnaT1aUhQVQ7",
  "key6": "uEFZqbSUAfeFdv4ed9g5TY63t29HTt7GyxVUUtjtGqMPMxhF87xp6JgMg6417cGxszzCVgNnJtmK65wpasLCfiQ",
  "key7": "2gz1oDQJbeXoea61J8vKXux1bmzkeE9XYaJ5rYRcRSQW7B4zbvE61T1U3E1byU3PyDHKWJsYXfFy8MY77Wt8oKNm",
  "key8": "6KCZFVTmbX5Pwfk1Z9SUaD2RgEiShXLgwjsLzXMtNTevvU3WM7BMptA4jGkjXEn1WfEmGDF4gKWMGca2uSbzane",
  "key9": "3X33dTkoHsYtL2pNw1cqNxE5RCL9ea92sjLbBXTyRjMGsrBBTqKTL9fyBGDgFtXgaAmYX1G4zr4w49ntVXgNByoY",
  "key10": "62J45HmBRYtYvqrbnJHFTpuijfUVcmuT4CkMPTVFgFaYjCQgxk8FmyY44JpHeKioA9kxQC7NeNAfKK8tke4TJf48",
  "key11": "2ANnkjNXpFrHMZDWupk8jfkFbnEmPRrtxueNMYbGuUjsnzVVQSdtNqJVZZoQUpxKiAY1Z5L6y2Cd8EZeMA27DXrh",
  "key12": "4GNTciTVSGi5FQr29FRkLvWft5kFiahZuZ5t4eiDYtxb9ecuf8PxFEfzwWcnxLdqwjXdz4ZaGwehatu2ayG45YXL",
  "key13": "ruyyotwAee1gPjvrUtooP7gktiEy5ZKb12mcmaGpTnKwqhwZGkkHKDcXThUypAEUeyTaJv2QN6dA9CsAakp3bhg",
  "key14": "2NSBVfTULuaCrM9b3WMe85WspN47Ek4bFm2Kq34SgK8vmr5UHgpUWTj8WpHfACsJCdgDrypKhe9P2YidPx6ynh4C",
  "key15": "4CUdLM3DbMQ2ksgiRPXv3dTdGMUqwXPBc4jtQEhvN5vCFbbJ4QS7Y6JLBvNNiBJcgJ1TGWbDoy8p1oSDQCTDruss",
  "key16": "2qTRgUktrAfuj5Ve935L8jRwBzn8sJ5RSLS7iMN1Tb5DwRyPDEkSFmYgM41UKWvwevUa1HE5J6r9pNrvRkQwr6i3",
  "key17": "5xQgtjSbd9haKf7Ri3RPzWWMgJfYqpypr3JGz3VDvKgNQ7RjEhQA2ZECwSaoWWxJvrDMkCE1dSh81FrQtPYqHevk",
  "key18": "4D6z8S6mQKHWgcB2AAeTkwmG37YTH3DAJWZFzNcrbq1KifndMSpe7DitgvRSWaxKyfx9aKNjNrH2x6DcAYDZARcT",
  "key19": "2BPgsDkwPyvnTtnZaoMCRdvtctsPxKCHwuCd1BGQezArbR1kwS8eNFpqgBoRxzaqc3ovARzRbZK5ecDxPr1wo8yf",
  "key20": "2jUVDQZWzbHJiamzfU9mQ8hGYUxHitdBhnwoXyafzdM5eXnK5BgyYuWP6JczbzcSJ9od5GmrbAz8ro25Ax9GuD8X",
  "key21": "43gsN9zqPZHzEZNoCxRNx5xXeGwJoGZLJwKG5FymAmqapAp3L7qNuHQrJCmvAVVEiBv3ZSa3S9oZYQfyiZxNg1Pb",
  "key22": "4hYp32wDqGtjyHSvPkPdzYvBPe3ZCNQKcKqBDPVY73sVRR9SVz28vmsbCC8TKkh2DLiBsRztP184pwfkmg9uoNzS",
  "key23": "3SoDFFAFF6TddntP94TGxmyBBnkEusWsnnFsrqeZ9wECXs1FXcGgEmURGM78aFnemFu9QGNqNtajudwd3DU7HGPa",
  "key24": "4YqheJumGKJpE6ZbX2fYBaBxzcRPsDvBpmEbAoH2bA98igRNwqKrt8Mmkdn5WRJ7VHDj98vx8a8MTgpAuvmf2pFs",
  "key25": "55Uvzs1FCQdc9LMZpcVEMRGBYeXESDgJvPHLegAjjGm9b7MdrBRH4rpV6X6gArbVULABJiwfs3j3SzGbCw5YqS67",
  "key26": "MRekFPiRHNauMfGkr34nMRmNsC2aSCpVDg7X95mWVa478Btro22BDYs3gyhu3Ly8eihkFkjt4S99Dotcs9oC4g3",
  "key27": "4LpPmM5KvJ4ZVj3qGege9ztXeXa46aygBphHXt6p2y8VxQxCcemUJNwAtynKn93dZVRNvgVxUaNFonqFGigAvu1R",
  "key28": "4rzHgSEMSpXdHgvnSJfEXLxnuwrVE7sRrx1E6qLHnK3z9UB5L5NdnDE424CwWuMQW9mg4gKndqmjrV1iDC2cHk8h",
  "key29": "4qGKrmDK9NcuBPfjEhEjV8VTHMorhtFo1vKPtYsLRFz9qWopYe5CXsWVkE2sNPwke1XvpDiYZfBr2arsXkr4eN9h",
  "key30": "5ES7qRRGE8BYEPZi4Vw632u5ve1vbzmMWPC8p9t8L28kCy5bh9o6SbfUnCiwUTRSU6CvpQbu4u9NXKxwXDKdYZbn",
  "key31": "5HqKGzJGVkd7vYsFb6Mr6xRqwSJ2W3Ma4pyy5FW57UY53d4XzU6Kn4S51gGthpcbjqhNbsFJA8J3mX6BqHMvTVBR",
  "key32": "H9n6iFK1JJVMPqtWoNHM4oxGdMDVdMGXpwGmds8t7i5u8xBscFVLB2rVNZJxw8Y4onGcvvkwZHibNQhW4jogQmp",
  "key33": "NpXqM9zE41fuLPNVJouivx4zjeuz7hVw4n6Yqi8T3oeSqfsogRvZaDF5UMuT6F3ER8qrsQAUkSQCFUSJG3vNrwf",
  "key34": "3n1bwKZzNYzL2uh9hn9cMKJ2t8H1hLF6hnHRQkvtPsJrfwg8vuZggoqnevQ9khSeRiTbYhN24kHyyDBaUEe9DjMf",
  "key35": "5CKNUPvPbFgH9TDi5UK9EbLbH9geFgTaVqDaPFR2iXxBMdHLSfuPT7BxaMCFDMPQcwTY6cRtLe4Ami5sUtzNBPGz",
  "key36": "3Jho6DmJwYnJQZd93obTsiCzhAmaLu2WoKNawLM7KnDxCjku8MHA7VGp3M6dYU1p3XXnKQWq5SoH5ATbh8QnKG7V",
  "key37": "eXv7y8pXDFdBStk4CWgnSFEiDtt9wYk2LwmSXJyU828i9wXph854VpRG9hofekAYniBaFtNAbTbyGW53upiARgd",
  "key38": "5ypRycskss6cgvrQmvk12a6geYGTXW753nrSg4uXrzcxyt2gfeXJPyoGUmMa6EJa24JCbLrohKjDRdCzPrFkNNgv",
  "key39": "35rvdPUGiGGGBoSCo1VYGZF2tHgkEbH7nLexwD4NCCwd6GLL8QZsCFd7Ez4mUK7x3pDBv46X51ELWEb2F6FpAzpp",
  "key40": "256ZKTHxqfxsywt53tt5V8Svhx6UsFFLWofDa7tgnu2zZXJEWppgkvxpH1Fe5EzjNZsYWSo9rVHD9Cd7qzauVPwS",
  "key41": "37KjvVokVSyMi8sacEF54JvruMj2PB28smksEHLcgbQNLGyG5d1mUhQwEbKHmvWCPvi9csyQFxRYMiyKAbc1p2h6",
  "key42": "qcCZUrXcjrqFoh9cCHEAbYfs89h8wKyD4QDbtcUfTEWYjVhzaz4WPSf96gnUW3PQtfFQYF9vAcHvGqKpyPmj5wu",
  "key43": "461JNq9qWhhjdhxrHaYrK48KPUviai9HYTQxMRg8enms18iMCAveoizHJnRtuB2jsBFZo44UUKAu3YPSMCgtKHFp",
  "key44": "PRFiFiKaTW32ZJH2aP4z9vmncn3A5Ej6Kq3iuTBARQ3eYw4nFX83XTh1x8jTiSw6d4hRmWMq2NoZY2V7by7JxW6",
  "key45": "4WeuzE1e6oUQ6brTR6JzTasmUtw6tRWGLHVJcYfQWPwUek76CdRENADF9jz8QLWbJgsyGtP572yBzzBqU3ra3S46",
  "key46": "4HS5o1CoNZMA1dSRrrUpWQtPJbzNS4iyAybQTrRrctLL39AS1CjM8sgzRkBUfCsxqSHwN2Pyz3cfaXbNjZj7x5XF"
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
