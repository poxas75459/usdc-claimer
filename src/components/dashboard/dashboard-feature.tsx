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
    "512HZMhN9SHHYpuQfGUCLnMzE6wm8W12p3x3RYfWBPsVPg3ZtPHWnA4RKikQYDPSHmDF5PCZENnS4gq4Cs5afAvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Haj6EtNWTiLwdm4A8DXGPrN4HMqEmauxjpW2NykJJsFRfBBMMvvGnAgzvsVhowtJNhufDa2oxkS3xHij8Q3rRfo",
  "key1": "3LZNvBa6ZbgBrVqyxdtG9bY6mpNnWWccyHwzF192mRqakXujWLX3TdjsUTkbbKwLWfFtba5KGZDBBFTTfTzNWxJE",
  "key2": "ov6PUfp6UQZUuw473hk5D3KnFZXQftLSvinJGm4RW1RfGSPpKUTjaXByoSobVciidZfS4YVGotfRnRVk9UWcxc2",
  "key3": "4rCeK9Vho5rx3EKoZSAKRikmZheRW7EqrNYqR4hgWmkMaLUXcddK34TcrSqbKMcEwD7Y5XK5GCbC9z1VjVySK1e5",
  "key4": "4BNmFBKysA6bytyw832Depeu9t9uBM8sPdn3SCypf3bxjUeDdBMzuy2U1viT9rhXNRMKy6KroSQqWXrd2ZUxN4ma",
  "key5": "2iupzwY6Sq8sGX7LbAm4TGbMLeZq7gVRFx8AnhSaUzRYqJuyZNXrD826z6Sen3939PhybC77eZFPEVLhinZgkyvw",
  "key6": "2hZKcyDFVCuwPhYiWH1YFSuxoS9ingqoUQMFR6RzrZG625AxawYfjvAygyyMqVjBYUA82M9eRKxEXNprnWvxp2aa",
  "key7": "5nGrrhCLgRj2QxTinCzbaZsKcvv5fU79L9geBG69oiy6VadSgz8nR1Roxf2UVFaneugMe2GTnL7oFWZjvsoBAHE4",
  "key8": "27Lw247df25JNKpB5V49WjdfB7co3CwJMyXf89Hbg7fr5oiqUSJvsyZWyA49nS8zrQ2YiozoeNPaPYJNS965Xs6J",
  "key9": "3W59JoH8BA3zsHM2MCfTMNcbXSmx7n2ME6bESSgqanw7jZcADeN6qAQ1gpSmwHWojVm3Xy4AmFPeCrEZzrJPq4RC",
  "key10": "34WrKYUkYNgtQMYZGF1jeVHAHQNHaXJ22knHEEdaLof8pc5Y4tBXia9tvsCBV8acZbkx35tR9GWwW1B3dAQtegK4",
  "key11": "3QQxKHMBnNb1UT9dM3bLrrFr8E3i2SFexu8E2jhWYgX4eXHyRSVhXeJJoCckyuZ3GoNxpcTCxxXpY5Fk6kvKBvdn",
  "key12": "ZvxPbdPSPVnggnQFMKwHYWHjZDceCfuCs7tfYgeE3CLvrjoPtTuZFJxd6Sj3bUk1LVucAvEhBURRzjUszLZbRq5",
  "key13": "53rXrwucyEVRxD3ck5RMESrGCXPKw8jmztKNKMtTGLqLfkkYW8QpEhwjpGiECi9Abr1zKrohKHntpJm1aGsNJeKC",
  "key14": "3XkXF6v5ePkiEWSUx7sodvy9VmCqCNTizBDZ6wKUh9gK9JtQoagjK3jmxas51GBEpr96xJZLVEH9bUQoq4hG5RbF",
  "key15": "4SSwPAf8DDcm9gpxD9AY8urKEQXKRzJJEoeTwHHY2tqDLbrXwJ3SKyiwbYTDQKSEWV38xkcg9cFh8Xe1Dqk9vyMC",
  "key16": "27QNFpghb4ERHsd7AxSK7RYAJ821gh3NwMU2faFDTtgN1cRSdXKAQEXKAvXtZS4BVkWtp39zFdv1gRiPqpbEVoFN",
  "key17": "4ya1L8moofP4BopQXcDqAb947iNWjuWDPVAaQ6Jc44w8bKAUPjovyN5tSFMmsQHqJcBfjoNdm5qdaf4svrEvMrWz",
  "key18": "JQSj8UcSqRfbAFH9jsZUJoxDQDPKSTAyE6Svzvyw2zB6qJDBjbrQtJHE3x6ZkRYqTDU9Mdo6Dwq4haw2Nb8QN9d",
  "key19": "5AMGiVxApSpVUAGHhaptpnH9ZKp6iVt7rXogNNjvbHskW64cJp9dqqqhwmczJ1Awu4Baqo81A55PVjpeorPHo1V5",
  "key20": "3y2iK6UCcGsc1dQDnw8Anp7bg1HEY7LH5SWmJ5tNp1qK6jmwaShXBCDCgm9ULXFgumbFQraQ7rSkGZiP1sguRsn6",
  "key21": "4XsT4mAZPvSSXzv2wQo9BnX6ZDjNHUgCS3PSRbrHDotT7cmecBWVZm9XTxDFS5nVGAhJNHTGcSWu4YAEAgTDf76P",
  "key22": "2uMEcQKEg4NK2oRz2dEJNMgZ3yfTJJfEah4Dax8uZFrdvWH2xjyqT6BEv1GRAkhtGekinMFYKf8VmCKV5oT1F6S",
  "key23": "3JE2rQ153UZCWNcZEBfQvr7Ntu5JeaBDT4w9Nh7SRyRsCzt6TdYyy45yoUQcHd1VzWNvKjHcht935Jn9yXpztfPq",
  "key24": "48oTWrjhG1CvkS933niFKXNRDZe2zCV1NE13kRBSek1tfQBTG2eGsbVnMxZ3Ukyosxa14ximNCruud2HqW3KmbEu",
  "key25": "67Hi9bVR6ikErJY9p41b57LRL9bFQZW84HMfjMCYDP6iz47BVsaxeX7vXhJN96zfFvwcFk2t44AePmANgM9wqGa4",
  "key26": "3i1qkTRq4nk1Kk2YsQb1RGCuUzGBYnyELNe4v6VSdY9haCz3dJfrGuYDoqSFZR5yohHNLH3hFyrsechMfJHTxVkT",
  "key27": "2G3LHhSw6FqS8p1bgzb8EHh5ixR48wK9v8cbY9A2d6u9msCzVD9KSGjL3f4KypofoxHTG7DxLxxUcRgpt6ipjhLK",
  "key28": "294YyopE2VjAvSTLBFiADLmJ894hNxk3yRkL9j7soBqYzwcgh7P6bquottAjZ1qPVgNvtm5vToZKvSpDBJbponKU",
  "key29": "duHi3eXWervbYVfAtjR9RpeCxR1EYDdVFVQFS2z1tbKGfhhkTi5Vuc5USymvL4qW7dXSSSKi82NGao1d6Y8s7Mh",
  "key30": "4fE4bNtuyYURfDxvKqUrYMbzPqoxF1mf1eEYQMpQ3PfgbKx1bbeywWtdmu9KfNwSPHuDnaonucJzvqSmHvWuh5dY",
  "key31": "2cG9mog8SjeNiu9HcM7BFHeRFdjTyNazddtXjWir3zK6yuXzaxpbcrY2B5b6NwSasGGq9JMAqWMYaZ5oKaLH4F7D",
  "key32": "67MFsF34NP1yZH8Sg38R2LyP9wTrbMtLAUdGUU1tL8zgJKZgpExP4wTZUbw43Ms9wHUGb1XJ7xN6kBn5sfvkp29M",
  "key33": "4xS53RjsntRSHHfKhQdqZDXWc5gowTwuXitVxpUtLzrq9XCebShVhP7fhbvWz5GLhAxgyRNukP2xt3Jya8QyDbLM",
  "key34": "5sCi5EWQppDsiCFPyxY8uftGekzGdxkE2cuTvC598cHPgpSd96fs2ApKX6psJimyuYFVk7gPaqbdXadW14Zf6Pp",
  "key35": "41vFzaLEagHR8vy6MEN2jc6ShgvitDMpSgMNZhswgMvbi6VyxHRCfworYc99VHBJKY5ozxFRmmBWPbqhhHgDr8tX",
  "key36": "47UxFgWkXw1oYzT7CL3ZUU1JohcmrzuGT6Npm6uPrDCGWpAuqLLkyQWsQqLoDtF2PiVT3Nnof16AivNoJiDCJcu7",
  "key37": "42yMqMuFjJ1fEQgH3idVVeDjCMYm5h5kY5NrREfVWXMvFqZ73rxAZQDc275hktsumkZcCsY2SyU74d4JmNrSZbMG",
  "key38": "2rtPemjB57oz4XSAD5XGAAxe1iYi2JPWZzpkYw6h2BjasjUZ3bPEsPwwUBB1iUYx7GrUcH8bRsHVs6QUJxg4M1Lt",
  "key39": "8HoVwJPmiMX3d1cckEnP6SVwFjNKvWJvTK24RcBUJm5CWj7piordjhLJdzw2pptP7CFvEg89gxDSKhZFdUuGXtp",
  "key40": "2q3bbEhBudyqeX4TBifYNJCzpyEfQk5uiK4TLTZzVAESsSCw72R43qcjrTphY8ubWtvngVo9MkRMCLRTvVmRtVnY",
  "key41": "5kzPYAww8zYfEpMuSAYopDZAMHive1YuWetLE3cbTJk9Piae5V6j8NLa6kwXg1RZwjK9r867LnXz7TvfeN85fWmK"
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
