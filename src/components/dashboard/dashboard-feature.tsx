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
    "2mkTckwUpmeBs6CphaFqYk3TcQGA91Hu8AsSVQpEfvDhChi7MP86gbHaPUJDLRpw8HQdAN7W7TZbzfdTREjwk54B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ew8ZqJKWWLaH8xtxJ79CfWAC6VydZTRL9ieCkypz6sQRmwM3vZPSxrJZ2R7aqBXfhAo9k3oCc9umaYpGDMtmfSL",
  "key1": "417NA4KudS56tgvuqzhh4MJAULaUe1p5o5KNpPrKubwcfTApakLja5kvTvYuNZsR7ANctVSj5Ny1to83do1h7LB4",
  "key2": "3q9KyDSyLJffFDx8GTD5pQzscWhxNSPym26ufnULZAjGViTJFZSNtqQZkqMw37tq8fHZ52AUQFjBaWtSvfvsjucH",
  "key3": "55tQDdNo7npDmm2Q9fZ3gCdHh6xtsfMKDcTSyJfm2Pzq5ggnkT9D2CrcFaqZuaPzNwvhrX4mVQ5wQ5ng5EzU2LWK",
  "key4": "5RduB87sXEiGJRvPVxUg73DecEHfy6Uzh6Des8ea4dPeJGdEoG8C5VmmWeT8AGV1A3u3UxVkd8e6tQmizTvTVhH2",
  "key5": "4c8n7XVUxoGVexxVMfiHLNDinXdxacdoee82LjLAhFGzZuwRN6dKMymPCKpJm4dEJ9tXDm9peh25KT1rqaomLARp",
  "key6": "5P18UWJiBjqcgqMciwA1R7Znr2JL11qpjRgB1xYeHvivhZ3HQwWPp8HtZtpZReKXQXbFhQfbUZ3E7HgP6bGQsSSR",
  "key7": "4sAWNoZSqvhcLNJeWZTqYdwue89Qutwdh6ViFCTYCsxCmBnSCMyG1Beves6ofspnnFM3Sump5rzXD7dqma8tb4Tu",
  "key8": "3Gi9RykA7FzjQBinrPnndr7cU5myUmdVswKF4VoMcfZe2FgGbKJKjjA91Px9hKUG5noafFg3apQN1FzpeE6SFy5k",
  "key9": "38oaLFBAo6ZKDNNPgarSkW7QYA8PHqi2S46jV4XWWLNHCAVfSiGNXUW91pKbbrk67KdYC8fa3LhE1gGbZzFPAKJ8",
  "key10": "4XUVbxmmHgpzMuQWEUQzgmdQ6F2U7SA1T17sR5PrYo1M9vzDsQ8n5mpW4ja9zkuiVn9Rm8kyXMnp5dvs1DWxoMBP",
  "key11": "2HWNuA6uYUQMRvugX4Cg147YEtwmc13ntWwKfJ3b6qZWLLA2Gy21NDz2f2zaLZtRJtXbfakC8Lb9qjmpfmTM5hPS",
  "key12": "5yJt6KtdXnCWQ6gnTi2TezsjVBi9rgZvEYWusHXir9HrzARB71SvhFNNELuEBZ7rVxqLaUedp2FfdUCTDk8jADXK",
  "key13": "3cDsDzk382hyvrJ3oy9rCu2zu388BXXkQ9potGrFjEV2AkEq6XzmJqYkeVr6f6gbfzYSescsrZqqmXuEbXHtx4A3",
  "key14": "3CDeqLWbxqb5qKMJnQQ32acBnszuGJhRQf6XZmZoP3gZ8y4ThCtmTW2Bjx9hoBq5D2zQkjE9vMcqGU7pVsV6wzUG",
  "key15": "2ELNvoC9iuDiSVBJUtSJEMb1Yg4JBRp5R8VpTm34Wdt9bU8onCJHMn7dma8tS3QTmytJpHWC9fGaWEkiTPM2gGPL",
  "key16": "63KYhZQ27csbQGFzZ4QF5ckGZEdEn17Pzf25Msq4zHLKnCdh77YWnN979VoR77hPC2jiqdLJEwABggGzHtq3sBNY",
  "key17": "2NrMYjAsDY43YdsvrJ163JkVBfg5JuEBGA542BEtXJZPWdK3FFtYh7yMXJwDGe5XaBCAJtpXESUdRhxZKJLhpZUa",
  "key18": "4gxMvuNmDLhEh7ecvV3pU63Pdf9AUnHeaokiytD1WwgZ7AhW912wpiCSGz5DVWNJqSWQD4bBWP3iFhZvBnVc4c8M",
  "key19": "ZKQJ2rPn7Tjnh8qzkRUc9DL8J5LzRmqPeo9ExcT3fvuf1yjYag63ToFt8bDgbqXhW66p3xubYLaMuNXtr1Ls5Sd",
  "key20": "2uRhAAjfKp45SUYqpH4i2RvWuTfCpZLBewbd7mAX9unNUNEonM2W8Aba8SJs47KXrg2nVCtLamZJBDJUDPDe9PQ9",
  "key21": "3CryyuH5Swy89bjR8KX7NCQuzt7hgMSNaLmX593P49SYmV3FGUL7eNfprUtFhCGybwxCw973A5SqUpfmo82easy2",
  "key22": "5vLRCdxiBeDBqXTFD2Tb5TWf9BXokmsdeQSp8eFBBEHAVnGzEGftD3FRxta1yQvopc61RKRa3snASzD2huRwM1ua",
  "key23": "4v8qDn42i8NDUdiHKkHovNYmdPhfXUi1XGR7WE7hTp5NfsFBJegsYUqivhGGp2foTgC79kacCn1pfQ2H1cUiTMun",
  "key24": "21GQ5sRwCQkRA21S1juEckYae6qBProJtoVcz4ry9EYGQmR9qbuWQb6f31grfHvPCBGMScYvCULZ6qX35J3KjRHw",
  "key25": "3rLnqmPEG1Yy2VXD5t4NSueVU42vRF8DaQMDcFYmSoF3v3kHrX9rcuPtHb2er33hRduLJbfJveE6YiS19hw9yGiN",
  "key26": "4ToYj7LTwdnraaZmWhuYTAJ1fSoK8gCSGRwsEYQP4XKuPNUVbB62erEUEiKYAhWA8GnzkEmMB8duQ2LKxcutG864",
  "key27": "43D4QxnrEFXtBKW3w461K5FDfxo7PjfCY37VP4MSY58DCgtWZhkFGWE61c6KWv6oZXfajhWyyD49gSQDrFFCxr7d",
  "key28": "3LQxfSZMX9ZKGuCHjLJb9aCB5gGHp7CqWoBSBPSgHRosU85NQjj9aaRad21vFJz8Ek3sCrnDMkdxcFgCq3zBDn5k",
  "key29": "cRh2dyYajHzW8pX7cFmBfGYGdA8Dqo5wTN2duxfviw6RWYv8mBzhACzNDGUefcfHaz8BUrvyJchM1XZvcPekV2A",
  "key30": "39pCAUqFWpGxWNV4sEGEsGAm8DvY8oMKUNQyTmzj62cXGNsonu8Fzgvkf1UKBUmrwXtJ96ym7uetbG63FYbUogxQ",
  "key31": "3GuaG6ZuLZPCaJi6EY2UmM52pxr6eo8ASL1JhXxDvYhxqcbtzZtNVUNHyvGzvPMz4SdFi765j5AEe4d5K9ueMSnp",
  "key32": "JTS2HPtujLubCrNBTrDvUJoBg5hmPGmEiuyYEhA5p36WC3sG4bF6umGDBudcoiUfcuRGs9ywnhASb1LGmFwmcvJ",
  "key33": "3rEqNEp2UqWWXx2XUu83rJ2Bp4TZp25BiwFNH9DBfgNxEQkMoVR3RFnagWeTSSqkGBHQrR5R2B8rFneEtAunfEhT",
  "key34": "2F5jvc5ex3vz6FmcgXZLRg6gSprWUKLRK5EV4wjVdvza44LLyp3LRRkoybhmz1q5nf6fw3MJnnJdBgBMXkWauoSJ",
  "key35": "4p6TWZBHzrZtZ9dcL1fu5LgQGy8kLJNS3we935nbzQema9KJNvVtuX1m38sPJF6XnfBLZtWk7gKcFKypmj3wksSw",
  "key36": "4gZUk5mKFiuWzjCv3HWxjwqScvVnA7bctxVimgwCCR76aRg1953JGbgdF1beRVS5FjgH9cywPJJMooBZGJopo1uf",
  "key37": "4zQJEKVszpM36xcW51e86H7TQA5vCVVjS6SDcNp7nKUT1Ah4BXqqEfi6fiHAV9ChX9RerobWztkmZAEh98YQayXy",
  "key38": "KjFKCFC2RxQnnm1fnM8G6YkQf9ZkdwKSVsPLc6DGxmjGK2m1CVsv9nUGvLacsMzBEbAZCxDQaVyJsbVJdGMkyde",
  "key39": "deaPrucSonxtWSDV7GoSiZdA5Njr3zemPsJz2jCdoxgngf8zAqsPGpbaX73UfmXM6bs7FFYHdKz6AP9k6SFKKqS",
  "key40": "2VUcxssLZcBR7uu8Vd7kMmAL9WXzQaiM582rtKGPWpCNvshiEXSmXhVe2yXjWzL8827SuSYz6hSuN1ZDq6NojJAG",
  "key41": "BJZAj2qek5kAkoioGWrPNxLuHaU3FWuJVNpio6nmAWQk5rnpLqYhmyjfGvrJS6NNLHwgpTmjjYc1R8VC5yQEeaC",
  "key42": "2AHTJaty315XxqPERsp2CFLhZTbjYgiDpdpEbN62z1UfZYBnHfh2JKbfnRBCzNzs9E4aeLDMDTr8Ro1nn2ssZQ1w",
  "key43": "29TgUzNg8ST9pCAXy7xBvzVNmv9FPRpzSJeRyMd83EjSfxRXerDdUyeESBxH1NRuLshPG5sszMMBmwWqQ3JAmXUb"
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
