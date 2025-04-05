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
    "4YW7gYem9uuQQyaRt8UsvM1teM8DNKNTymyKDBi4DFNj5bfmvtSAyfdNoq2xD4rM8xLNjKkkRuHHHNUaAdFmiuNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DKUNHFCq236VyuiJogrBTuGRAd6gbsWAhNagiN3LEUR4dNfBjwvcJjWhhg6UUSvbJYL6FMMvbezMvVKnWQm2hqc",
  "key1": "5kqCoMJD6JdWP7WAoTxQZ81DtXNzHWaYmWHPiqfJsE7vToyL1dQU2q6m7sdgD9595TEvbUzTtKeVaBJaKtFsDqyL",
  "key2": "FFD8nw95gataj9wiigcp8eL5PHbQZAXXnVY1rMiahftaMGwx3MFHJw6K2LavvSq5Dc6if2SjmacYdbbcBfPtooM",
  "key3": "5L4V8NtxT5BpcMg5vXLZpF8NKFfmZjnyLE4dE2AE85uJfAorkDp4VbHn4JyfRiJSjptY8BVB7eg6H8vMDJkj62V",
  "key4": "4xkNT7CWvX6XwonR7dmYqdVARvwovQnDzU9o6a1wtj7LGit1p4sWTN4W3HU4ifJPrmJB2aP7jT3kBLpfZMBoV4rG",
  "key5": "82SfQfMq19f7spRBqGLYukdLgL1mdMG7v2Qg23HPqs423ePmXtHmikmho81PXworrjFr3pfzsz5EaoaXaef12LV",
  "key6": "2dA1Aw4rF6oGUtwZLp78f3Pr4XR5RYGYvEqPSJ2VLq3eiXtR87LcfyPLbJdS44Vjq8WiHwWVW2QP7ixVP5G1efuk",
  "key7": "4jHd13La5uNH36CfgcyoijLoJHnCFtxWrjazyVbGy8aRxup8MbknDLysvWMbQfKkE94X8VibK8eZ4vFY4TNX23Pd",
  "key8": "5y85cXXJ5qHiVg28iERMUGbdf9ZkiaUW6RcUs81Y5d23mAXpti86Jd9GpVPRMb3nuPCgP7CHbGvqwwAwdkJarmjw",
  "key9": "4J9jsUrF6VcWvuLAzKMfDtyXmSpyt72k1m5PZPr4gRD81nUL4tw8aVq8qw5ciXZcrhdZiXqUBAGk6DMUUSgU3YG2",
  "key10": "kaegdgk17TS9cHx4ws4kX6Mt9fJBwjsDtHtu63P2shixssDNsVQDDH94jApLFcUCbp6zihTMzvJJJSokz4yNnM9",
  "key11": "5awUiz5ii9EMcRkRZcnW7LvVUe39Nz7eyvR2k2doxN2DLUGCawKFkd1ffhvPu1eKTMGhNqvTypHZBRvMjp8iMYoa",
  "key12": "3cr3QTL5DkWmw1UVJAcQXCnafsPfExgyxm6SnZo1QBbTekeNatUFFGQh2hB6xZ1u2DauUiDfjNSC7oec5CA2EmHw",
  "key13": "5XxRaZshNpJcGR5oWsCLM7dHC4UVDmPbaFLQPWCt93QLGyZBfQDmAAvNTD7ee332BGX5a4PS5Zgf62CSaKgLSEVc",
  "key14": "5n7VDSM5bXrT1VNnzdEuyX1bopnbwKYxWB2rvf1BJT8w5T8KA273AQ7HLwQi4QrGvrbHv6kqNq3PRZT3BeVygAaT",
  "key15": "2tpmSWWj84xMcbfyHtF2NkN9XdvNQSo5fWPx2z2njpR1KqmsRzeutFHhg25PeEAXZxQA2npn2M7hYDZRU6wT7vfH",
  "key16": "CtKAB9AqRaGZXjrmKCnbJDiuvmXuwwmcUrTzjLDekwCrR4Uoxs4EzihyZDs16jHHuuGnvrCssN4wJPWiEQqHqfk",
  "key17": "5YMohd9NTmMxAL3GYwvKANGbivX2F7tRsP21isNZZe95HdCU3DSUHWPpzKrrYaDbKrB7rhSyFJ6YgYtoPyMXPzvc",
  "key18": "SpXJjZnNat1MDGq6H6VKpSQD99YD9FkGmxFPBoGdoAhQ2Dq3dsFgMpoQQVfc4kSmoqaFEWJXBDy1rRJRtWKThsR",
  "key19": "63UKy1AM4CoPLGH8z6XRb3ArYvUJVg6Agvt8HYpox6tadR3v6ZPT7XbRnMp8ypuXMtfbyteaqwFRPFUWygBBScrR",
  "key20": "2EdqrmaJdjtZ8DLAMwgFWKhjCdd6XvL38wUFNVKgorDVtny9Ui6wt3KeQvuy11SsEU2MbXneL8L3h8CU9tB74rJA",
  "key21": "zaV4JH9uR7znmecxKZcaotMp31bf9337z6meUWfXVD6sZQ2ki5HarkJ63Jju8w6rR4JwDMSLrnVkNgXssUQYY6F",
  "key22": "3cauBazitcSw8jsaZfFhACGEgaNeTDvs4URyV9Ubb8bhFZ8aL1TcUGDYCGQTxB1zDwSVXS1WVSCJYnPLaJH33DpF",
  "key23": "3avcrSfcEaY5YvGZn9nAFrt2NiyYDeZrMTo9esx2e6PWcxhaG1ZhwKzdWWL5aHP8xSjTvt8h5i9jBeRGHrGMwSvm",
  "key24": "5weEX3ucEkBkYnfgNC17fa5ex4aEUcTpxkuw8PKfTcWJxhSipcB9dSdV52mWHa8AvrZiSCtvsa2vSdYgVJbAEHKC",
  "key25": "ZU12SK9e1cK7AXgmXPaxK6Kb7RyGTynm9xxTPm3YpKT6cecs61KNQdF4M8CWA7c9st3Kg2WhweM4cVzJUbHdDHZ",
  "key26": "5aabG2cmAJGCR9k6EmEp4UqSog8QnuMAYqfbH7SUgHdmM4984dCMbEqMeDpXEnFvVaumW3jSqWMx99Fb3nEHrUHV",
  "key27": "5Rw999eecp4DbSLvREdLvzQnkCLCNBFCVFFBdZB8QaBgvdohjg3GZS5o7Z7kcasRyH2QxczYfMQdZyVN9m5A3hBW",
  "key28": "NQf5ZWihxuEuKHwUT9AUxz8mNNHYmAHoG8XWrwQeMhKw9XPvcjwEQQmEdZcSXhhGpH9m1QfvNMQTRNDBgrpRTBQ",
  "key29": "2Wg9AW4Y8SNRR9mcgGesmjvEcoEniszoT8i6CpGEkgFjCvmU7f6kiC7iWomUYHCDwtpiNoxe6EHVBEadhRVjawwi",
  "key30": "28jHekhSrwaQHvpaMcs9mUYL8dG67Mufdp3tTxsvfc8r9mjDnQK6L89XBjEzDmSXaHgsyH3jQHrX56eXoNbXgff7",
  "key31": "3Yy3ZTRQ4Wd4rWjWVD8tK7U2PyHkF7yXPc26NiVDmniKTxWV6xsJrNC3qjhGTDAak5NHmPTSfcLCtzaTTbjJ4nMB",
  "key32": "3LsUh7345XEG8R62x6fFzE3xT3UPh97vox9ZGus733F2YkPvxLpA1UzTirFGyJySHBBTg1SCeb61taFvFNqgVcZZ",
  "key33": "35oNbJH8FZEt1ne6HmG1kwmmxB6Aw6Y418ecoLU5W17QrcuLCS5fY3LZPkisuhHF4UuCmHjYahD9GRo9Bhei4Z7v",
  "key34": "3nopKCLhiibuAkpbJBsDZfDhEkRw7oZsjam1Lf98JrYhWsfrJi1XJYVeYLkUCWSdQaMoLD7i3SpbEcwasHUZxdrt",
  "key35": "568FJC3kHPfLqUVejHaqVLDhX5LKmSfMURXNxu7Hwzfha8S32KFGv4xJ8pdDsDopB2F9nfiJYSDfTLvMAuHQLyv",
  "key36": "5gnX7LfAPJTBLMPxH4baDz98WghGv4m3B6wwocFd3ZzeDLQorzZDAn8fvVdA9yzhWZhYt93ArL2sjJvcZ3Scj1hH",
  "key37": "4L7jXpuKgGToXnifbs811TNhSfZVGWcn8z8cZL6gcxTb2xXsgnvVC1rTGvJKANycLhPTXnPdLfdNyme4TSQyuv28",
  "key38": "44JqQ16oYvobYJGNnYJXk1e8j4QokUYpCgAgzgykCyBw2hoXbptUZvtRcTReVZeDEPvFxMM18vYN6L1nzACxQJNn",
  "key39": "5vUDkDscQr7gz22U57cUKQXYebMCYjegTHxkLvEAuWBd4Uyt1yTNUAkTJTst45H8LT9aJYEMba8g3shpseeuFocs"
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
