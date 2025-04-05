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
    "5kBo5QeJKzoFy2GFj25cCZ1sSS7JCPvwUwrkX1zVxbrMf6XKYcGmufZpkibzYmEaso4Gkx8jjARRVVMNNnrtyohZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sUtYv7uqSKta6GWAqhfoLXyYqn3TQnpPRAA2GjqFM2RSk4Xtxjd721qA8WZ8GL9C1hFS4ZmnHibcFDDBKCBLiC2",
  "key1": "65W63MKJ7ub9NXjin7qab2VbANn5QmpPVqDDsVGHPSWskPLM3hZY6qt2dVqqMUuYJtY2jYpqB6D9eKTpEZo7ZMa6",
  "key2": "4WpyhseL1UNuekufSKHzFnBGMxeVL1vzNXKnZ7Nt9DyjvvjgPHPBnfZo1os2iAcCpiv1URPeuemRxmN7KtrxyC61",
  "key3": "2JfDxykXNB5ZvV2TafQc7K5QEpErw3FQa6eVGyit9htfk45eb5DmKvicLchDi8pzFEwAWJ6W9bgTcbtWPATBpo7C",
  "key4": "3puDAUnamr5LofkWh2YdZXiVK3P3NoY14XNQaM8meJGmfCtZ2b7s8xP9bQDMF1ifbJCzPzMkZVRWbCLgGA9zzySP",
  "key5": "2SutUbTs1FVC4JwP2GH7Qn5ighXnQjWorcGGsgc1JDpbisw8eYUtPxLXsvq2QxWY2X8fPwZgwsgBP1ZsqRucfbCi",
  "key6": "26H1tzCULyfkfk6CjnfQ394VuTLeZnkv9dmYtaSCMGLMTA1rAYLiBVRmhfSXmMwRoNzf6EMnjimRzZSonhut6kJm",
  "key7": "5vDsovWuSLdjscUSHhm8zY5MsExPvxjRQrDg1obPP43wHKgY9k7nM92N25DJWT4tcXYKzXXUWXUHDbfNRdpTauyC",
  "key8": "w3bguFtgeECCvccBqGj4dkfF3KCPeq2Rscn5LqZD7hkFXnL4qNcpqeKUTi4rBLj42pemLt8bwyXbWiWrycmUkND",
  "key9": "gdpZPx5Db29LUzz1o4ua6EetpDuKRrMdmjU46ZKDU69smk5upUKBDpbMkmMGb2CYrmCMwuWm3BZD4tzEqok62bE",
  "key10": "2NsE8pqongWu9GmKTNQSMCWkZr7k1ndSXPoNGjnRWoYFBypVVHyGd6EyXvTPJMa3XYseqoxX4PT6rK8tXeEMnm4p",
  "key11": "yhc5CAqdPCLBRh8RR6viWzYTusv9vTSQc3GrcT5gwjfuZg6gYBUUg7Hd7vb1p1M1yE2z9whwqXJC2FtJE2t9veN",
  "key12": "4PuFho7MtpnmNgCv39CuXuKA9KQEu4FXxvd9dcWRaPJ3wm28Qk7EvKfvfLQaTTifvV4ve4nWbCy7kaWVWhPpPd9M",
  "key13": "4iuvFqt2RmzhD3iHqQ7uATt6jBwMSakc5GuVoapTfrGeA78r6XVmHmTVd4yQq3djFZ52aJ34oKX4HdSuUuD7X4HK",
  "key14": "5cshLMrLQdj7eFhuSTjXWDcVwDgtuSpqdb2YT11Cog4tHTLkHfTZ2G3MQ9y3idjLUBX1bzwKNapTUu2q2637SpWW",
  "key15": "4QKbtwxJj5AWJyx1z4QWUgApFNeQ4udB1DifQ9xCxeUHioyxx1hg3r2NuJvqc8NFoN1rMQEeHLwG8CbykY1WR6MK",
  "key16": "2LSYrSY4wzVusSSvgJ6Yh9Yvmk2asKBtvKPX9b8rSPvHNFKG5aYogsDVkLDAeh84EiLpZ3GXDCKrwQaMiq3rw7no",
  "key17": "2gptif3gzQojZXrmWm6xLqhaBsJm6EPUJfRNa6NLviAZMyZkZToEek9M4uVcRUCUfVB3CchgjoVxMsFJonKe8V5H",
  "key18": "2DSmS6cw194UVZoKpXfCR9gpPx4Ruo7Nmrc7Hrrsduq2wpziv8v8wXUr2uLyMDEcGjiAJ7rg1mSdPatAsj8TN995",
  "key19": "4GGCULarc1TsvqyxGoua7Q46zpM7ePWpj8kAu2nX3bWjfJ1pSco47bKjWLUu3uCNiy8o7aBsW5RnZ7z2gqsY8WQh",
  "key20": "4NbJBDYrNZRr77KKg2yS5bCxXS9ihNLMa5onLLvwhbAuEe6gP1ncp5NqwFR7eNdQJKAdUKtgwuifDsbCfdgPoFdM",
  "key21": "4PVWrkxK7mjpxCYN9ZjYxumK2TecYcnSnqdLvjN1t3hHGQftPC3sEPtWwP3wsZcV5EHCkXoopjvVRj7Tnf2KdG36",
  "key22": "5M9jNGRXrBUkQB1PuC1WUfK7TtDRtbt2bt5772AJsTXJRR9ot5SCzYTC7rVttWgeuTVLH44xUdmBkdn36GUk5WqM",
  "key23": "EChmwWdTYds4MB1AkFhNSoRpcKaH8Q2hdQKwM1fwNgoqsRv79jGzdGoASso58Gp5NTcVjazkdkADhSRmNgwztT8",
  "key24": "3HawQoxzRvbPy3Mhu6RqCMSkwJd3i9MK6gbpob2nGG12LijQ8AVZRtCMRZFTHePggSW1trGNX4FKX6cDrGsKUqBC",
  "key25": "2phRVeNmquFTn9TYGzgHgLrS34DbzMaCTA9P23tnnyC1xWEA3sxaMArifvYR18ot884ekTGD5yeR4tpwKsjnZ6yz",
  "key26": "26U8zGGN21kuKe9Ys23ZLvZzD5h8RyecoD739NuvY9vMcmgGykpuaf1bz2FCZcSJAn76tX1jrn1PMa6feczmELNm",
  "key27": "28z1Ay2wRjDtHNdPMEVxyY6pXnuGNZQDv3xN4qgEssaPXNUJeDn34huB9omsTAK1HMQsK4epEEisbbBrXYTYRBcz",
  "key28": "2tWrSTwo9DvsqSCz8dQ9gKeT4PXsiCV22LmKZuyanDRtb4j3dcZ5BvH4TbxBbrci79j5wt2LjBgpWP1P5Mu7PcWc"
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
