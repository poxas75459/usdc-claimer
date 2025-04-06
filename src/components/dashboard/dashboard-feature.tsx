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
    "kf2LCsQRc5xpfEzUyH7eKjKG3S4M8mASTFFAcas6SGf4TFZBMv6bmEMWbGCLxw4Sor6XgGG8M1N3XNh51j2K6Gh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p1ZPXyh9RqgdSYEMrJd7sgb9ccd7yAvHyPewr29XgxU842NHMSqQyAS8fo5kYQB6RfdFEdEha85cpHogWXTYR2a",
  "key1": "sYmfCsktc2WQGTvezzjhPXdxAU9udpZ5t6pGtLmZvgybfP8R6tQSwmehFW8sqn3BTTQ9mpyH4QMp5A2D6AfbhGv",
  "key2": "62wanwd8RWDrC47CdDQUoypssvZ5MjbixVDtmibweJxdsBFpzko41CG1UQEZWQdiGB7RtxaJjyseMgqJtXKEd72y",
  "key3": "3F4h1mF7tRPazZP7ewxmHAEvY9ktMYTgGHG5Kk5nZjXij9FmNk9x24UkbDMZAsvXr7pH2LEQGiUKp1Fj45mPmzZv",
  "key4": "PKYAUbWgJoKiMYKfk5ptedpoq33CQvMxeURmxiw17m1d23oB7eKt9HnaNVafJ3pcTzgA7kA7NW2TGYwDm2JJooY",
  "key5": "4JHdWqKwZTAq1y4VPYaRQZmTiyFatVSMFG8t2YeHaY4te5RVb234ip8bvm2JfKvFQA8gjAiAFGpw59GMZd8buSDH",
  "key6": "5MLXZRRAsLyFjdyJUCmcV6PoYy1USdzprLMc829NAt55KQvhazDjTnGhVEHbpGVoM3MVr1zzWLit5JokV5ymECew",
  "key7": "3wu2ChRQ1sAWpAS5MWppnGd49wX1R9AHQoXDFRVcTi4y8kd4JaBXdXzF14Dypn8baPpGkf7pqnd2z2dXdr87nP5W",
  "key8": "fPMqPvo3d1FuaTGeEYqWBHX64hrFQCPQkKvx4rkhL2HiwfNZkDYwCfrT5hYyY3QvViVV5p28bDCeecyH7EA5rfF",
  "key9": "5sBhNsJRf13N5pS9jGUa7kbga16iCrn617an3JA1mT7DF8BtPqvVF9UB6pxa2L66xFEfZK7u3ToZent42S3mu25N",
  "key10": "TpNE4czFtLhSu24ELscLkkBqymrvJ7tSmv7T6pgrqbBf28xkaLQtqTfDSUy5RnYiyb67wUaNysLW299HytJS3kh",
  "key11": "3L2NFsPkoTsm5Wzy7NKcSLYicwgrsXxC1XhRuqN7HZ4eRi3gTh9wGtWxPu3AtHFMvWdQntEBSX3eSRmtmwasKvKn",
  "key12": "mAQXJ1XXy1fy6A8HFReAP7keeTy5cgf22UBKezikSDbZ1HC3uUHpSntSDE6WnTGc6K4M3Hd8CAZCmZ58ZhKMHWn",
  "key13": "46V5K3dqAfKyzrwy1PjuLm1at9runQBHhLpiifSr4sdURqhb3TYu7qSjC4y41SybrguTfj5ffc8wvWKGM8nXdR65",
  "key14": "2UVvDjSEDXRRRCXNGsakTNKLUEdsrijAYPubfmkYUJqGXCwhxhy4SM4yHxA42YHEVp6QDe7Kv6ytauReoetMKsoy",
  "key15": "51cq8fKBGhGuW1MdsYwSDpJsZnszyRpU5xG9mqzhpuieRuKiuZ93hvV2TFqkcmh2f7bjt9FztNcsUxQ2FwoS7ygN",
  "key16": "3E7o3atYDTR6ABBDy33y5tFRWEUZqaDjkHjKnMUtAxtvVNdXs3PuxZuVCRRGeAHKE1E5PmTN6LXDU4SK63cEboeW",
  "key17": "rxULXw1Xo4qj26PUv1UCMNcFJ1z5z557ARLnELXrBnHp4TxrrtEMhgRfTayz8YLqWh5Zyixdr4mdAevttG4ESub",
  "key18": "5RzEnF8HQSQQvJm3Zi7SzrV7Md8J3bnouyY8ADAsaX59GZzDPmqj5YPhTuTyozFcP8TLAPPnd4sXKCHnajeZHK8o",
  "key19": "41HDJXx1fPk3QWx4zCxoszEL79MueZNyRonmUa6wDzUcYKqxcxqt3utvrmQ1qgRe9dNcMB1oJ3RvXZ8yeP4kLFuG",
  "key20": "3R6eEjEPVEm4ft96AWS7iWULkkusj6fHQ5UkgAVwdvEdRn4haxJueVZ2jkomXMkW6mD5KhUh1wDfsaMAc1XTkcWK",
  "key21": "5jqqwuwr4h7AFRuSrdWUJjXL7iFdd1yL6qDgBKEArLAWAdHbm8Q6kqBzRNHo9iVEYbRQoTXQCrVw81sSvzHcAGor",
  "key22": "2dodGjSuHPD3Xj428j9ALpQq4CPaG2ifJvBwAeyZDAmxzQT3gwdA9rWnj38Wt6Tv4rS8D772TU8jbtimbdGASKVd",
  "key23": "3FivLVuDzqgnkL3Q99d5Z97BZQYzoUkzSJtgBoFRzdrHmKSS4SRWRehJgzLk2pTuGNe5A9ZGLd1uR9jpADd2Up1A",
  "key24": "2EH81AXv14xeV4AcHT1qD8zeQFWj2Dj3ePC3rnpTvPfBiobYkoBGcbsaZqqsqbRTAd2D9VcwUjKkQbVTvAZocMbd",
  "key25": "5JTmGfvkNvZa9pP57RtvxUmdgZ8StGji8rYNpFvQsKBT5TPTyzajnqo8aYcBKkieciWmGG7skUGTfDqgMV88xYMT",
  "key26": "WF4K4r82a2HjzbDtY2m9FD7toauD2CeCGVYDshzf9ra86LVmXCDLZU7Yo1wb7FzAFWZUvk3AtidZmDD2xHwNR9c",
  "key27": "WiNdx5f7k1aKTVHA5h9ZuNJ334KgBGaHy9AYnJnw83VDceiSukk84HMBYe8s1W6hTHSJQNDSsTPA4c4B2YyZi8W",
  "key28": "3n1ye4Y8MuPEaCFeXYu3XvuSeJ5wYrb7NhPZMfsRexc16GZFsMfSV76Uke1mMJUU5Sgs3btrFvocydToC84qxMKe",
  "key29": "4oSzWxSwscVzkdZdnDqibRDTGN4Wc31MBCNza9iLGUwyGCjFyzqmMCku8fa5cxBrQZRwiTcwGjdo8YdfKBieRyA2",
  "key30": "4NZ6gmkw78HG7tbq4dchbHg9oyWAPyGoJnhzYMWuj79oJstXQZWtS86XJX4aejf1wBze32qLXMuHnVmzJFbMvnes",
  "key31": "3gGYD1ucSLVF8coME9PoJPbdd5gNkxiN9ChVJXhnn5vXCEr53AyKuFaqC5y9KK5Vp3Un9aKaPsHUjJnyy4vboMDc",
  "key32": "4dow8k8eUHZ6yEiRxRmZXwtVnRowZES2y1vmjWwxJyb7CMNtjKJrN4gUBk8bsReJZvSPuYLiSZAHazYguVBvWePi",
  "key33": "4pcPiWAGQY66aM9FnoxzTuYd44zNs7AtM58JtwFKhERqbB94dvQTNPtC8bP9v33BxP1Y3CJGcMrPaBKPB2zgPEUc"
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
