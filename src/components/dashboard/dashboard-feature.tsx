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
    "2KGgrMJX3aCQNvSaGEAbHCSWChuDqyi6oy9FUQvARrAfacDcEeq4gtPuiTAwJHTQf4PRrwH2bm6kVKceudFi85gb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cymHrvusPQtVsW2K82BG2ix9wqP6Yya2mpKhRF9cmxWoHpZXnzf869EgLUvXG9HtoLxcoXxWyz7KAhNJVYex9jo",
  "key1": "4aoUB1aafVfTbCEiWYjRz6Q9HLDsg3g7e9iUbWy1iUB1koeAiASE3VyaVnu27V2gPqRBwq2BmJDmFGTQevjBDs3j",
  "key2": "4KLLKZz2fJtWCCP6j2KPgYdB6C7n6b3rCMLtxvo4qCMnw2xaD5W2EYvHJPdm7cxeC8YJPGt7p5QMVQgY9UynTv23",
  "key3": "2ASHCReccbyhLqDgCETr9LReWiEch2NJzuwS9EJjo2YEPh5qccLxaHktdbSVvuKw9XQ2nqDQMvAhh8EquiMnw4ob",
  "key4": "4XLS64gUAMAbLLkPDCYfuyCqvhYsNwRgz6MXK8oqyaWCrRpG8SQWJ5hdTFcSgJ5FRGFFmbrcQXeQvNGMMUeFdnen",
  "key5": "xBM2UUkjQwbShvoue1emCmSS8bVuvANPaemyH7gp1yQCCELAQ1CcTr4t5pCdfyrv7vZ3HpUeyCbKU7XknCYS7yC",
  "key6": "AsYLmiN9RWJz6D493t3DFjWeG4k3Cc47w4ncFgcnEgFVUxtnSCyou9rv9RujQLaSFo5f4XyD6gukZudC2ACmQEC",
  "key7": "5kXXr7AUTVVRxn6KHjJbMtSBjSVZvVhVeAYqPX8BB2eE6aoUCwEQBnSFNErtN7x8XApmbRC73CiCfMM564HBTunu",
  "key8": "3rBdVQTB8scgHqhzRuRGyaoQbttfuvTrvhnfYScepdzyivka9qHoJcUaKEVnEpjByDV7qndEjgfMGf9dDkQEZuZ4",
  "key9": "2RgkTBwYxkrMLuPnEhD2mrZNC8wU5HMXmtSnBojxsqRVCc7HeKB5icbk3HBsqGoH46TBEF1PjVx8MEfEPRpmBXRS",
  "key10": "3RKwgx8my77mwkCuJXrp9fcd5cRyia1j4injgDNPPMoiMHR4XXCV1ABEA1ZhVRYUY9LnguSErzk6UP1KawzvTwMi",
  "key11": "2gb3ksBMPxnPXPrMUCLK1KRfVhcLj8orhvZVHMMFiqdBy9vciF21Yv33xKtyK4Y6BU4xLEHcZR84nDHs2PmDhMEK",
  "key12": "3SMkuia8fA9FMhDVUEGckXuvoAaYUM3y86eE8JptLpEumeGnGfVsEMRniXzM3Vs2MsmfoqES6cxgJZWg7CiaifV6",
  "key13": "23eu3VSwkbGD7sknfpUcEmMbHZCk8c8gYsWWb63zfniP9zionr3s7jWzHVXNqbiP19rdU5BidzixX5kvzWtuzajs",
  "key14": "4bitSvCmrNNDPMScKu69hjhssXcFCSRoeD6vbgfHmEcxjaWUhju2ZiKq4jxGcfTAaFHfufgCwoVqKZRaHxLFecLP",
  "key15": "2b1aySDLXtcrEaBpZHX3YeF9VAXg9e2yRoi6RDbKWHuHw5BwgVYYKDP4iesVoXMGYUw9fpaJnYvvU7DuR2pN2PVA",
  "key16": "3tEtBMYMZap2JPbXhYRpXctqUj3mxDBYvb8najqsEyoeBSLMmdLvmAtCau8RrAjUBFoBAS711rbvTc9uoBEbLbBM",
  "key17": "RgCvbLBtVFbvT93frZFX2NuUfeQdZokR8y1zExsQ2Faq12oHxjeZMNaq36sgpSFJGU4FyCVNXjYfqc3ZF6wWYFg",
  "key18": "2nVr6J2g9Trb4zWUYeXxP6AJvNSYGDeuer4twrEHP3PZUu5t327K2XTSF7ubMN6yBP67dddHFku2akP1x3g772Kc",
  "key19": "3RQG75suvwL4KnNJKw5gPCYR3MgaNXezitqjDud7nfpKJ6TFM1KDz7C5reai5QuK8JXGysgQ63NQUHh3jvzhwNfj",
  "key20": "EXxvKDT12VQSvwYFWFatnQh8rkbsLKTMcb8VERGbVYzkHbKvhjT4wjXxfS88bqGN16DQPZsK46EMdpdUGfhaPNQ",
  "key21": "5U28PdufAdBGJgV1aMQVwoK8fWBgq9hGCEjFEbWFanmkjVzTNqhDV31e4wtw3jMqGQewh2hQa6gJbF9DkiipjABZ",
  "key22": "2CCkECF3FLyv8SYJ6jq486Se7m97gkWLJ3vLK6YHPwrukBPQW6eYdAmtgnp2rcmLnSrdXM9tbchGRuxUWys3Lpqa",
  "key23": "3ZZ44kQBodgJ2umxpaDmufxJHmhsT7DgsJjnHBXz1hQiDdQMxMVCi8pxmAWGaeg1ZDgdBBmggRZyVFsDUaV7aDZB",
  "key24": "4P7pcgvjwFYivPBhVB2u4DXdG6fJBUfukPaYS8p35bKMrpqiEfVsbiVrjawcie3L6T7Qk8WsRtdJ13h3ZnftRw57",
  "key25": "T1FA2DJsMqzbPsTzPbgEzZs6buaXbhjvgyR2d9QE8eANM3drsFBGoHoQWVxvT7L6SbMaXLAYM6ggmuBg6GyaN2T",
  "key26": "3vRgBWnkjqBLpb8VAfT7xGgk5F3223Teq6dynWbLazEEhdLPjbeGnwo5WHR3jhiXsxuCSjex2M5e4KfxCkoSRyog",
  "key27": "guEGh5dnUtx9bQszcmLCxAMDo5AfNgCGckRdiWcn4PpuM2FuHgJLrUceXrmB2ohS8ZA6T25UXpjH1G4VPKhGcAQ",
  "key28": "2XwTuHJgmpNjmNrtweBEEXcWnkeVtMe1pq5gF6x7YosfTgYXYDcA9cqamTQuFV9KUo9G1Cg2KSqHzJbbcYnUDmU7",
  "key29": "2R62rdRxYJTesd7Wf1293YicGi2yJErrspVb1Y5YYAFqSj34C4DsosgJKmYyaXjdu6oP1ex9mzXFnbpoawikhdmt",
  "key30": "B6Ly8edMtJz5WCAQTNr6VvezbD73JKsi6rdjsNw658H6trgtrGW4WScocntTpV4qbu1tx7Jej9rs6QdGqfouptT",
  "key31": "2YAtVuxtejVngjEm3B9sgmW4EP2UukEePQkLXx2FbvpTX5RZQcP8nEXUkEVTE2wZNViMnGJjwbrs6MiVSCdaPnnu",
  "key32": "SAu6ZGkX5HeuNp6JQoqdiTRDEiJSLaR7vrK96oYDbpjJfhohdKSioKHgKnVPMPCsfjLxonXTpZ5ddqded1xJ7e3",
  "key33": "3GMVDSG8DMRKcuVd6eaSsCdTUPveABkurfvVv4EVZWJcJXydEf8iBmcfWPKzpEgoiFVPtTH95TL7rA2TL94ey8qP",
  "key34": "3yX4GpzmQn4Ee1Hu2dwVioTPhZ1u1e64GZJBc3mnDVCPZnxR5QrCYsfLYVV8PYnYwGWr1bGJp8DCYF2gWxEvupHh",
  "key35": "5gzDK322R7bvrLCDb1x6RvYAwsW7pkbx6MNS2tvBM8PWfmiYsBnr3okGWPAPyjLxNd6cCUvX4SwZJ2t4ybYpfXrj"
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
