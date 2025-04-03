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
    "2VQQU8zVbPiTdtoi71FXyjfKPfyVo2fsCDnkTcmam5cHLATTXR7CeCdATBrQyc8MVVmYjcn2UsNMwHrs8Vwh1vgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PZBvRfp9rmUe9EdwotydwHcCocXDh5spRBEXnEeLvLBtjyJMusPyfvYpBy2CMh9XKXJjrQcu4EAam726MxB6zVi",
  "key1": "5WnrDTfUa1hkHvfY9W54ipo1j3AteZXcYsLHwZR3J5TyNYHC6dtZxnvpc9YMvSTqciNn6pqT2b9QnofEDsezA3TX",
  "key2": "38G3PTgx2jwdFPoxV5oPopKRbztX3gM81bN88svWCg4txLyYp8u5dmVpfB7A1pXn4MQiu1tNq7N237EYcDn2N1Dc",
  "key3": "3Yu3SHhENAVpkJfXpQqkknBA4jn8oG7D18yS8J5MFgXPF9HZGJXwMoEyaYxxTAAEGTaTXkztb6Eq6KvjNkRwKkkG",
  "key4": "2AUDWEXHW8npomF96ejf9ZEyhWtv7H2zAZDJ88o3Hp6Ldeo69oyadz5k7GojWd1KMZP3paSeQhMX92ErShB3WqDe",
  "key5": "4TPbLVjQzCBrHeN6Hir98HLB5SYTG3Xvc9VWUqe3h2Jkn27JC7tgCWLbhDrRELG9MfETywF2SA1GpN1uuSgYfVmR",
  "key6": "4YKPUuCdqZkfHHGhPfRYCsT2Th4R1kFoR8UTYWkyN5q258JnDfF9oYQqwy8KXuNFJHcaxunnVX72iFdJBcWYkjyE",
  "key7": "6Dn1tQCdNdAyGJv7HLNyFW16fZGUf5UsqQLkkUKXCD2xknfZ44x3oJpD4ZGLdCDLLmHE9dryARYWMEqUxo3iWeK",
  "key8": "5ZvgCoD895YCM1CAUMxQbShvGcnUVjFK6J8raDKQUdn4d4NMjtT7Biesxmvma1XfjCeRWWfRZs8ySYBz7u9KvHs7",
  "key9": "4FSqEihQCekraRgfKhyiPKpd9awPWXa4ZZAcKNJUuoz5b6tXndMgvJi181BzprBZmZbAXJPNZUYCyX1UNYCsovjh",
  "key10": "24UxHA24qcZy89xVeSS6u1VTf2xm5RprPxaQ2anM8gsCq6hd7Dq84u7tiiqeVdNNby7xgwXtVFyNTo81m7iqvLKz",
  "key11": "58ZkwndcSo3kGwoMgY7XGKUMW8qHXtC6wnRHRVEy2P6EDpo5bCFQMQf8t3qq6tu6CbVFPLMZSksiQzq5rB5nBX5P",
  "key12": "3kpPZ2vUitSiHwPb4bHkFTe3B1CQ4uw9g3LXHZkByoWJup8R1Cbwdys8BrWEdg8QXpnoDbwwd9kaLimFXYxYmWfm",
  "key13": "5r8vitbuLiPAnLUs2hULYoZQY5MTZePHkk9MB9UKg1RDhXoECV1nkv6XG1MprAtdrQK6ZS2CDWxyf9XHfJ1ymqiS",
  "key14": "3wopUifQpeUM1y8rMwwAjQQNijzx5cNRRDF7TtxjrtQJzpYLCEPS5EYoWcUJACsNG35evZJLrmqd7WzhS93RQWiY",
  "key15": "4onZ5W98yLjdVpZUH7grYTNFSNtibgUM4zYAsYt4y6fAbvXgYcAzXs9zMsDqk8E9WLZbkh561xYnxZ5KHTm7LGUm",
  "key16": "3C7x3ZxYKMW67mHRuxqLAaG1FuiHgQdUiV2HvaFENKHfPFGFjJaG5uUCTTdie9ayYw74tPL2m4h8NNpZ63GmTapV",
  "key17": "3iJ6oSKkfNceTVEF1jZBKjymRziKkjH8VbZU1YbZGtaXvRbLKb8Qbyo3dcLVnkmDpNhuhTRTj869JHkAiT8HcVmH",
  "key18": "2m72UZcPYbMRHa7539a8fHgy4aNPSLyKqSvziZ41SLrHW4DWZKJNnTbZb8rubCfhB9WDBZot6mZu5f8wTYqH6trs",
  "key19": "bJAfmnWXufvbdXPj37bru6v4gkpCkDeV24LuwTKtuFokZugf1rvNyAVTCN5cC3KbU5fjih9MXxm1TEEXq8iX4mj",
  "key20": "3UXw8MDLA3qLvYgA9BTmJ3aLy1bwwPqKE8WVqbFsE24Ycm5T3CZuysbmrMErb7iKBMKcUVw1joEVjrCzrjySF9Q",
  "key21": "2tEVpJssvmA1m96bFWTNSnNxfX74t21jqzfzipgxz95mPXXgVjjSsrSfwKhxEVRpqazJekBfttkMqm6VZA2LKXtb",
  "key22": "E8cEcdhueCSiyRPz5qsXq1wDNpWNQB65GNpnFatyaHXaSbVNDurhYwbiuiPspsH8rFtYSd5bsvmMcMuvtGmikYa",
  "key23": "3Kpw6Xu4G8cK7RiKZNSXUpZqc3dKhfyb2eDWrVemihkxjXPGnY3rcYzvXYgujEqXza4e3znhLbj8onCqt5Dz1oy3",
  "key24": "6t7vSfyYvxYMdPRLJkTAp4pp6zTMtk5BqPeEmUH3xCsDV6SSUU9hWxn4Vxc7GdKGeyNbuhaZeP2uPKc4R5P3LZY",
  "key25": "2YmXed4xpDdPhQm1bfEzokn7VVH28m2bekpwZcj6RVE5BBNYV1YpUVQz39uP2MKbfsSG258f7uKVgvduc3FA6Sgn",
  "key26": "2U9GEynwc7dbNvzgKb9hCjm7qkwmm8RTCbkUXFuf8JZuyqk9BC8KLY8go2AcQ4TJvvZZgmj2uyVm3u58tQV4AWer",
  "key27": "4yYEuFJGdPdtcMX1Rzg8XR9KWscgRmweLijHU46pzaw7kdatGGbz1XdXSDZTBjiARG4uAnrVE4A634VxVi4G2o4F",
  "key28": "KjiizhV85bwWWL7xNgzqVftBdXW4MFKYv6sPDJz2tQ1rqnUsCrqdsEmGfUqSintXeA53okt96gXn93rnZ5peXT7",
  "key29": "4qvxwbLUG69EKfzPPMrSVU7yAAQrxzPyXtwW5BvqrUAghCSshxkfE45Vsy3JW2TjyCzQA45g3Z39FP2wV7PhZBux",
  "key30": "4Hi1qNWDLJLtAjCz3gegeXeagSUyxUqvmGMamqLwpV4V8FjB9te2XwYqizt4PgQi9cjeFAQcwfh8gKxfCp7dk7zU",
  "key31": "SGUWpnyNLuspGj2vHF7QcfCKGTQRMJeL3qmP8kLJwoM3UFyy3658SGTPrf3YDjQuBe28JLs1feeH1MUGcLW7CpZ",
  "key32": "3GR4jYP7KoSgnztti5eJnoEjkeybJVTAaZfqmY6NppfFeqNZQkoN9jwyE1KZipMLF32KEKs5FKPJd4Y2zFgq7hmA"
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
