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
    "2AN9VbCVLqRpvjr63Jof39mbRadyZ9QgWuQ2nn5E2oyDNo6pU8UznKE9EXwBT1sgJ7ReDfLeGRNMVEWpPF3U93MR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m5qrZ48ZnzAcje2CKcV17e6Hd5aEdrecBudiWpoGcwAC7SXNwXcicJabkpU73j1in5Q5UxY6sB5wNykXzNMuD6M",
  "key1": "4cnsyposzuAqFkSVzBFf2UvE8286w9XtNcNro1o7ydGQqqVETSNvBpnrQC8BUMWTBHRMko2af3ys8mmmDVTGCeRy",
  "key2": "347JwdFWfW5cGwM6yT1R1arvv43mE9H9gDhfdxfmvPFTBBJZc5abeghhPtN5jASSFBG7Z8SQKPzS5EDFGxkYWZzR",
  "key3": "58CaRCwtWg2uE2depwmXcKibBzTt53LuWhg8TqsNz1fqDZMkGmNr4UywyXVUaeTkxtAVLyXUW39UP8HUEfyp29xu",
  "key4": "xajVTh2KPqJ4m3aSDHig5KG6HRsEXGiFnxoHs7HxJM6cBUzN6wPepVcpBRASkM6YwjN81wx1a7DfNfGtU91tcn1",
  "key5": "3Fj5UtfvfFrcAsRyJGDsWbAHMhimGNyS7iaxQq2LGy8hzxDjMMWPrkmzot5HnCtwEqe2jwwWgqMed1BeEtQhC7TU",
  "key6": "BRdhUYGg7te9oKoWtDxsqroXscH5rMuiLNh9WrCfuM2YDQzZCZLagYxynu5mDM3hNRptBHDkpqkbUkMcCr4Ep8r",
  "key7": "3JZKJ3vwyL6vMdRx6uxJuLWzN7aexwcbbDe5ucbBprPDH5YwiVEv3zUi7TdEK97RGYDL9byNjGdMoY7QtZKeUaEn",
  "key8": "dx1Wt7p7QovH2rzpTChxPuJUMxy5gPeM88TR5Mpitij6K8F11i4qnYVQM8vSVTpbv48MYVFEk1JwKcuKmLx3sjL",
  "key9": "5hkJwvZ8rR6JAud1Qd2CPN8ARacqxebguyPciqqCqrvpfANiV27SS8sibDWUcg8JPbDBbMYacepP3DPNfB8oUEKe",
  "key10": "5ynQSRxeGAsTxjas7JbkyceTRCXDcZLfarwnkdbWLUndfRRLEFiJX2PjcSKMYtu1FrmrSc78222ceRgkAEC2kEpW",
  "key11": "eYuKLxLBP74hj8iL3f5ksxriTkbSXgRVnteKvfkmjpKYvSADSvmZ5uZeHS9gNwLA1XXm9B54A8vgMwxY2PKdnXD",
  "key12": "3ADj48MzSHViqrxKYwMiFimthGbSeCMDwyxsnd8M7ebQgHQtQxvjeoTJhGjfvaR57gQZBnaagwm9d1GPDorFwB2a",
  "key13": "52tmfH888B6csFXwuxs5c2KQ65S8UWkQVRotkwbjnaTvZpLJ992jF7PTLyzZMoSosZqBifiFJSo6LgWeB2Ju4k8n",
  "key14": "5xUThEhkov7Hyf9YdhiGpkD8hFymFL8SonXJy24ufcSKCPBmAdxajfcR2WkU8ZFcep2quQKRw9qBD2Fgybn92zkf",
  "key15": "2oJ1hiuv2BHjWu3G1AfyqQ8UyCFfTiFQ9BVXVCuBN6KvmWtCuVPH7W7cC1t4AKwiQBMchifK24BZmxWenYB6KNKg",
  "key16": "5kmjfHCDUr1K5U2KjxB9KWaszbqHbG11bN9t8mXaWt5njBjBiBasKB8uDPm6FTJA5GVPJTqH8rjngMbwyeahBykA",
  "key17": "ASimxcAZH1BQzUEKX3neU4UZTcio9UZJNonVgb6ywbVFgjU4LwyxZ3KuQ2BdfR5sNpFMV2JeyMWbRVxGrm1fB6t",
  "key18": "4zm1AZX8hwVYDY8XBjbPnYLGRJ23kdCxn4fzt8Bz51xYcxYugK7YzhJ9HobYUjwd95bYWdv3dqi49W2BVLzug3sV",
  "key19": "FJYfQzF8nnZpnjLY19nGb1wvQrB3FfTJZ2tzZKqARYRRxfRmDFtUaRKV3UTRGvPsn64DJ7yLvYF2UAj5Gbxpyan",
  "key20": "23YjUtf3QRiUBjJD1RvdeYD5t5VY8kBME9zZTqachBggzCEEsioe1hqUowsPnBasbcP3tFqiYN6C2KP71UPu9M4D",
  "key21": "44XByiXSSDWQ2UAMJ1xaLJn8Qiwki57rVwRLPWMo1Gja4MtY3ETdiurMtpsZYMeP7Uqd4UE1KmaxfFmCTUAvuarW",
  "key22": "4sobYfXBUQ8sB5oXSM3eZkntCriHCBWQA12bee3uDRKeH7wn37Ci66rXuncveKh4st4viy3FeqCcDgDWPfn3W6NK",
  "key23": "4CeGYtxkPGtKnvZqLkVhuNcQo9HAccxFevnz6U4FZ4b7GpwrYZBGpyGamipdWoz6T3t53vis2hkFyLbZ9wx4DurF",
  "key24": "4pL4ag9xS7nxopAwshz92arGGnsYaCMsFLtpzmUumkiyE44F7r9ZCzGuXkZLDKeZ2sPneKhpc14Qn3WvzrMXY3Wb",
  "key25": "4LXHi7c2YdAiH6S1gzB2xz1qCMRH2bhxxhThxLiDDKaqmUzzSEoKeuL2xCV8V4TMbtkkEnMgtsQG2QEJsaBR5Xnh",
  "key26": "jAMq73uXsPoscCAiU1exKJf8o8Q5uPpmiPxkbRB2CMCQjQpkMmKRs7i4hnafwphVyrbH7Tx5MXQ6HZUgBMHRa86",
  "key27": "2o2DFZdnyNxsPmmQ9hypoas4Y67KzbFPKE96gMQ1qePmgBTt65NSUERVG2ymz1hZ2W4U2Z2K1X97m9TfQEA6Bk34",
  "key28": "3UEsg7YVUr7FodU7R63JJpYsR8ZywQtuDu7DeFEwC9UH7eEBVCz6Pn3SiY82eZntPUWxD3USKBaUdFfep6TtkquA",
  "key29": "2xEKkTpfts8LrMtwU7D8P4zdY3uJEwbM9J2nbsHjHpfMVHuRrgzkkoEZ2pcRxFtXFx2rKFCmM9eDTeWMwQupMkX7",
  "key30": "3t6g8Zp1gKLKKXwsRvgWAuegZ9AFo4UXcoeppb4pHACarxxntEJSBAJi1grXfK7ZqzB9KwJCB6oTaDagg5pJpAcJ",
  "key31": "5rvYV3DiNaQ6bi45KVePfVWyvhW1t3CvTyjTK6DY4P9boCx1TrBdz8nhactE3z3v8gg29vkHnLKDnRWrsy4DaN28",
  "key32": "2GrvhovnKZApPgUsGHhU3FyQS5pvKCP4N3FP5jqzT2gcN15G6hg6KzyruLzmNtJZDY8mtPFM7f8gtfsbcSmysd1N",
  "key33": "4v6RS1Xtsm8ZHLTz4tHyfqgZFy7cpZdwDrgfum7yskEyteeZG23BEZRfRNZhSB7NoEUR4tGXGgS2gCJ6Gy7x3hms",
  "key34": "HSg1xGpAB2WWv6vSe2nJyP2ucv3bqJdnbhJQWyBb8k1B9EjtteHzA4FGKHv1A3jVAPWRSJRzDqvjoRAkwnzkQXu",
  "key35": "5387zsLkGjSv9UJXPhggUB6zP7gTjdcVWExkPirA6DFVrj3oGwHNnRsmhEvbWjmAxiTsz7P6cuAzT9UkXhkeZ88b",
  "key36": "5sS5DokxX8W1yjwnSYCn95wN7irBhp8sg9TSGLbLZAMEJaxBEm3uBqPe8XEsuYWPL5xAU6WoZnLSNhN24Xq8mxy2",
  "key37": "2CfUqz7tANaBy47SkWmhJkAHkcwpAgDdsNjPBHjuwKi5WdPQjTCrjbX2j4D2LF7jbgj2Fosqk4S18wbDFmXkhv2H",
  "key38": "4EVi8ow8jzqnZn327ai45ZwBhcmzC2KA6tM4QENFRg2wxf3rbeuKzJBWftQk267DdP4Y2iVB4j5rDdgPjLUbzrdL",
  "key39": "6n8zmZKXVKJtMNgCg13VAJgcQ8U9HyGoLLGULra77PazFSJby3qU2LqsdJjQpSAXGxyRX8b5UY7tdTLEZqFegZG",
  "key40": "3YE9wkvPZVz4xbbhfjgpDyk3CnyrCdFSL28Yzfk94cbvpfpHhc9DEmpDkBPG8k4DNxpHCWUJHKpgXAgUm2MT6tNx",
  "key41": "54ZjMpy917AgBF66SC6XjmWSSDPPCiYQqacT36mXPJQSVgiUKMaYNRHcKqjSpsQzseXnjfGJStaoUXS1jHHKoDbY",
  "key42": "3sUG2NUDACVCrdCueC4jjG31qZSSpuMygSUpmZ1RmwhVnstefcGJEYTg74zTcGTEC6fWCPMCperSAgAdETKwRMsN",
  "key43": "429jMLUCB31CbFBuAsSkuTXFr1NMGWcUy7Ec51c4239Vahy4RSye9B17hW3pLe42n36nFuJ9cYNrkudX7jsFPqVK",
  "key44": "619328QCMaesPggUwr6dse3681LjmrordikDwaj4JqiKL53L8kWtaXNUaWefhRNMbu1immw6waxeR6ZSFYzqR7Fj",
  "key45": "4YWFSh8uRxSz4JQA1i9aL14DhCG9xjQpJPT6ARXgVYn2fmsqbMMBsqMSkNjd7xMgj7DT1n8nrAVf5avc8qGbCkr6"
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
