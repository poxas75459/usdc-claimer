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
    "4yZnuNiFXmJcCBZxztBgxZKRgkq9ebPyrHV5fbC1YM8AnJ1xdJHq43JfTVxE1Qpoh9b7R5TiL7LDwmpHLdTUkjin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Poa5p4Q8nqCTpp6aZx2vyq73GAQ58EJdFnutA7UYcjgYKETAJJXaTazg8RFP5EVgBCFwrQFvWvhdN1YQY64QXM6",
  "key1": "5VLSDQv1CJLBDJgXGciEKUWDpephaCwC4WTc2ZHv1iuJjfRQX2Yh9q8esjBTZzqg32NeYt4kigs5d4cvdXtwVasX",
  "key2": "vwWr2z8SEEoEuhfMYbkwuSjrtp9aWh61sU8gdviBJRj8YbvQwPm9J3ohcYiQTFY6MA3xxmbBrxZCthrZYRFjgZv",
  "key3": "2deyLma1p3dTRGpRMb5e5X2d7SR51ihi3QAA4JxaUxJD1WnZN4npM23L964hpA88qYnCJZn46RBCte7Y9qvH9QbU",
  "key4": "YyMoni5TxdeWtKvRt6VeqSMBLBFL2HReK7kBwK4jiRiQR1iUKgxK4geKHsmrWjUEtevMeDW6xcH7NA1N5Q3DNFS",
  "key5": "2MnC3vp2BUBQHHRR5wt4hRoZPeWeejv7usN6RnkFFbngLguUpFYwvqtgu9id3CE93bepUZDsdc2G7TmDKMEvKRzH",
  "key6": "2ZSNyVUjqfeVitPCBodNnNcZj6YGnzJ75Bo2JLYizua445qfPs19Mqp2boeykWruEMYPP4C9HmU1UALHg6TjAWgq",
  "key7": "3Dm2HXMvufnpK2mTd6FmXGbZ5eDHSauGobWgeqFYqG4GZbb1rwB9UPnwmTfBuQp6kpVW8VSVacrNNaKeKYov9Yuo",
  "key8": "RV8AnUVyCNBvrF4NvpmGijqtqpNYX3gUvKgy3xac5WDL1bxDj67mFmwbdCxnsySJPwRQXWr3Gp599V6iMFvGYbt",
  "key9": "5V3KucufWSycrm5KGhvsPhToTHuYf18LGvcfZp7tuyKmgajSGoivUcUN6GJ5joVp18zjhT1S4cGPeNZxk4GF995t",
  "key10": "4K6PbrFScYGGu25FMFdGVdLHeWymZhzVPNYciJpNsuebmRRVc1u6g1AmUS5yf5NAUn4HewQrkzAWnMJF8bkzFf5r",
  "key11": "3kwpruKrSziYqkc2Gd7NXXcpusLaqp7cYoieimm2UAaKbjLdccWizTBkBGddqhMVVoSo3aKfHwybrnzW4d2uKfmo",
  "key12": "3EWNXNncK7pUTaqvhqFfuzCwEFQCG3LXwvWJRbyy6BLTdSVafotPuS4kby3Wtz9mTABPi9JS6PLgdrZCh6PkFqeB",
  "key13": "cAfjvNsVgcH9VcfgJYo8j2qfmedt2EjmNzYv73yHoCpB6EP1jemCngrQ3QgxobB8XmRFEapsdwPRXPFsm8kFrGE",
  "key14": "5HY4egrrqdoU4jnsN3JESCWwuyuCW7qroMeDZbHJQGvChQsaYskKXnxrdQpPHVfaAK8bM3YirwJ3v7oz88EgXMBy",
  "key15": "3csuSCP8Ye2fTcJjrhpsH328SLpV7uYKKB6bC5nfPuZbmczx6BAjcdHjcibqmS9Yh2bKdqsp1EjceWs8F4VKMwR1",
  "key16": "63PggN8jvwMpBApYjy3UsUZLkRRXCysfQR7Q1GuXPffUATPzKDfEGFr1ZdKZSKq3rPWrxgzAzYePgVfPktS8iCqr",
  "key17": "2SWZL2VquJUdSffVkN6S5d5cXzhNrx5o5c5sc77HWCVoTue9nhJ3GT9EnS22SauP8JJPHkgX6JZPjHPcUFGPGugL",
  "key18": "FLRdamhU6oGyX6PQDaHgfJbSZzT2fbXJJ2UFRQXnmEzBjShPw92kVYRN3FTRFY4RVRKSeygYnsdT3MtjJjof59Q",
  "key19": "5EYyKHtMzx48tj2oWYNmSDNTNQMMvpNToTYpaQ3DQ7LfUmpoWJLJqLDWUmMPCqJWJYVaSFQMVzbuDxA9kKdiwzQL",
  "key20": "2W1eQuDbttBNmoZazou5Y4iGiPK1RHs153waHUGyuUJJkGu6SGBgtajPEG97A8hjvmQZ7GMr7q2iA6Np1DFjaV4q",
  "key21": "2tXPR2N6LHzXkwcKz2WtxfS2KSyrqBTSRBkYEeBGtFLpdXpS6jXQyc64AkY3JBjZVE32YfhKYitZVJnEDt6ziWY7",
  "key22": "eD3KDTg4rhpjkbWPKM6iYrpNxyQ2kEAHb8ZZtJf6bJw4XpcsRpBXpzWUh5yVdoPGuUrHassSKyTJg2hTYfv7tQf",
  "key23": "4VBFfwjcf1JLjcEbhMfhjPyupNdydQZMyBXnhvhWEsjryCYz7pUmUVm1bhFC4Rjd4GDqC1KQawJ5zBNUk4ZHzgMN",
  "key24": "3NxjURNsS6peBG65DM8izmyFrXTXewTcsTxqDGQoueu4Gutnvvkbmu5Zm9ZvpDqhTJKZ72SB3hQNSxaQFxdQQYdi",
  "key25": "29caTxsZtGGPGiAVaqfdqoma3WNuBXcdSAYq8Z7i7kdyWqmM7AE6Zrxe3cwAqwBvRBycarh3nZ6e3YfmGPFf2ZPx",
  "key26": "49ALqNPAH69bWg5F5NRYDhKjsoaghMaNEPhN41xndY3PWyLhvARiitGJseARkEAJUwL7mF8ugCoYRN4RkLe2TkcZ",
  "key27": "44TdpHwviuMNscfpuGArvzQjHG7ahED3acHiEbJcpD79ffxf5R1LNpq5cbiz9QfsGCExi39n4b4EtUYCBYpuSWcG",
  "key28": "4RZ7i1B7WZugH3SoA5zajHmwM7vT3RraPPM4KnQee4Dd1bjvnmKxEMf2TMwvFjUKLHze9hVyiB6hco7rUXAbDMo1",
  "key29": "3WtxFuofnFhPoVzrDYb4pGaCyuCNEwhYixsqyFE1bL3wqLpFmy8sHpZgWjGrTCKESUpFSPgAm3EtSGu9wWJFEbf1",
  "key30": "4JM3bhdNA19t7ff46j3gqg6nt8UorToik7f9VhUVhxCQq45D46Porf6oUaEhYP7a7NMsbfKchviLZ6PPy7Ef6dq9",
  "key31": "48wMGbSRnZ8MjH9cFTjpJzVi6cXJkazbarAxVjCMdvzJrUBBNiX5uXYNuD83k9va3xNwequqpATZsnD4NyRrFVai",
  "key32": "4oYnW6ZTaKiRbnterre8n5mdt5sXVrRaTtbZKEuD94ZcTxMvfnyGitmpSvC7HbH8MLpdXiXdBiZYrw8WYVqqdugD",
  "key33": "3qfnYVvfCJkGvBiBsf4PpcXRVoFxQo6G588t4FYJYTF3MPoDLEGvaohuVu4bzJpXyeyWgwzznoig6iUwtwFp7LBV",
  "key34": "5UE4STPVahM9HbCgu9sLQUiq3qJpzpRBNzHZyaVCm2ZgCPb76ZXWwbxZWuTdCtpNwa7LceVGPTespRjUWMTQm7YX",
  "key35": "64Rj2yXAmReAKsua6gBYwpsVodxVE8YpN4zzW72noFCc72bNpCdxswfa6bjbP5w5f7istXiLHHkDRRym4NeM95uL",
  "key36": "3ZzLQXKv4fG1Dr8pYLg7Hw883CwqJBwCkZmmFHaqeXkedG8j9jTyWm6bTk2FruMqN6VKStJDJdsVbAEFwd3d1EnK",
  "key37": "4GjKghbjurZAiNh7qT7cf3gDfqdnuodjUDXxQXsBJ5rDDi2jAXSBjTV6aqfgsWj6gAaRXfjKSPDVWpyFf9FRE8U7"
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
