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
    "3BjEx9XSrCe5rxQjDuoHobkFzs5wPzw6ggm4zVdNezgE3pxgc3kzu7EwWD6g79YtGuUE5CpWjrubZcpyeM9VTBFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W82wqNLHnRkm4BmMgLCYes5exjQRYQBiYZQ2pZskMbgc6dL2LJ9t1amedEMErYNRHuRj4AoJEnZVBpUb3jxgaAN",
  "key1": "Z7h3VvLj7AXGt2PvAZ3iAwMDVRfdGHacAe427kmuE6vkEfN8i1FbNTczJu4EWSKcDYQoeGhTGpvqBf5vaELEp2z",
  "key2": "5iiF14TTrBaeyEsYTLCnzPgEcnEpqeXruFFdcevLWmW5UPadVUtEw5h2HYYpuE4Sn2swbxhsAt4wa4a3KEMxQcWP",
  "key3": "5GqumpEDEQNxP9uhfgLJr5RbZ2DuhFpCaYrZkBwsXgEWrYBi2NbRGAkkWjwix9bHoMU7NKC8LtzavJVeuCVFvPwr",
  "key4": "2aEGmrZVr2eoiw75g36yzDuzKcoSbDnvWNmER4qa1gvAZ4jgJg8smCZLLBWY4nTBeqbPqtKhZ8fFkY4HC9a36jVA",
  "key5": "4abxubaKhh8XUFuKyRUrTvpK78qnYWVPw4KrMrZAv5qdnxhWzsyzWk9xTCvuJbGenrAYeUJYSQ7R41cEmvDERcXn",
  "key6": "kJjzG34GkqN5QVntDKBAGg1UxvBzcPMcyrtdnSyNWStrQfzHYPuKe4Fv4BaQMw4NKVpVzAHQQAkQLTtqjh5T9xy",
  "key7": "28ZkgzuP68EtdVjYz4R1MEtZv9BRV9QAm6rRqShL8vMngRBbjTZPYXqkjJDMXK3UetoUAZCDRx91vimDRkRRD1tj",
  "key8": "3Jig2QDcwZ521B8i4e3SLxGBzDEdb9BVH5mq2rjFGgu5eFz9Vs5AXQt9jhbz8XcL79cjzfEMuqTcEimRUiHZWo3z",
  "key9": "3DLDG4c1GM3Y8AWNEysqyYc3hqKe7qerG5pmpyT79W7DykAzxW9f8887qhb3JzmcZYQUQ3Ze5vzD3FUSrnvKojry",
  "key10": "XiDGDRw3gfrwXHW3MoxdpD9XDXvth5xV1mboWSX4ZFWNEKuM5ppr2Vq4rN88vmKX1mWu8u7BBhjZPLsoQiGvRUX",
  "key11": "4k7MKq4gJPakf3gFRtfxkcmDZqnpUkkozzb5iP1YEQsHoXD9MoJtKuLVo7FcBFJ1fo3HqGssgkvHJ8xMnxJQHsQT",
  "key12": "5rZop1jj3356R7jnXAZ9tCw2tPfCKiPSpCL1crVfy8qvBim3SXEnUHnNoLCuzwXYLQJVCmBXELtF5tretmXgHE3R",
  "key13": "3BJrSs913bgsAHL7Kvuekzv7dtfXApTBdNvPAWuzkqEr5pbuXriUQQoXQUUZrB5JLjYXBjz2F3peEHXbMAF2LSjN",
  "key14": "2xZ9tFfBXC3Yq2igJeVfLU1PS5mg6A4nBAm43wbEQQSCx8JTCNUexgdvHv9xBoEJsaTCFKF2AgLmAGJVwRPVLC3m",
  "key15": "kbwtPuU8Zyf2VyoJDQokaWFVuv7PCC3QgqKhr4a56gXko3pta6f8CNG5Eb2LYfeFCLWDCL7YBRrineEPUKdfYLp",
  "key16": "9sqmrZrBeJw1DFiXVpDFZDRha9FNAudycWBxSwbiTtTpSNsRFSkPWhHn49nv5gB6kqNhJPqQfE3JDQLfa2CTXMa",
  "key17": "23FPjE6M7qsJL5KBfSLHkLABWRsruS6xm9tL9fqLSwBVm8P9MYYh3NzoGhwwZiHucWbHXtEWEHV3w8rdoS8qKCEe",
  "key18": "5Aqo91CjLtbLtdhCwSWmtUc5iGrP5PERh7QPYJ8GFeDKH6CWNtT68KSTHfRa9L82tXbYZ72a2e6gN57BWHQPrvwJ",
  "key19": "2oXCi9jGahyc3ghmn3KK7VwfZ3ZkTnMg6GLaho9WoYj5QMviD15uWRgMGbqjrE6iuu8LAGNHCnKhehpimJ4U64Wb",
  "key20": "5gzGKzT65vqxAcoufbzGqU2RwGaiCs1NWnJ9vHfztGxncmWdBM7ac3e2Efu9Hcyk99oVeJdMMULunZLNxubLeXGK",
  "key21": "3wLQoh8tokKXeMzSj6kUJhavei8ZsVtJgyGjhkuHDtt9uBqbTYxrX9UvewTUScs5rkEWL5Jx4rHV2Na8j3d9J42t",
  "key22": "UKASfx6jE6gz6yNQBiSMaGGMiR1aNacv7e45ry6CHQexej4fWMjPUoM3Bx5S9Bc564bpvGwcx17YcSHHbnL2fix",
  "key23": "2ceNwh5Hzm5C2NDtUJGYn3Eyuaq3iS6Wpu2FWbxjnKTGDLAteeX6xp7wDnAHtPuymvgrSKkQ5kL6YCeVU3javrxf",
  "key24": "4zjccLdHexgvCCgR3CtPtpWcjhCAHyxBWgLupahqpXdqgLswgjUkBj9ao87vTTACzStqjQWh1aLrTDLn4mmoD3Cw",
  "key25": "65TnTvmb9v9hfsQQDdvYiGo1mkCw1KxxfBAAG1nYGR1c3QdivFEd7NKdE5bMNTsk19Vzm4CGic86B5KS18bHTanF",
  "key26": "5Px9cxiZocsGrTiCE9C3Q1XkXE3eELi4oiw4EAvZdZm4RXcsaTzxZWfDQXePveN9H4m1CQZFoTRkejzFL9uG8PW9",
  "key27": "2KKFwf859hULn6SPsPTuU1ezkydGXniNyr3ifAk51RcQXzpDpsqy15bcH7s2PZdAE9vEGUcPJn2BS9YCSJXw4NGf",
  "key28": "YEDq6e41ubD63FGKupauY9rX5QaJU2XHXE4asKJQRRaSAUCmjw3oqNdAHd1hAKbvG95hEPiBSBt5FAFH81RUiXu",
  "key29": "2TYLJ5yVRqynMw561ArnPyMi2dg7g4fYzuGRLEbtia5KdTtLQ77wgcaevD92rM3iMgvf15MRaSPsMnFzQff8WoGx",
  "key30": "2bgP5gP6xbL2vnJsDCseEnCpcfx75sQ96GStHZTAgZn2MstHDubAv71KvSV1h1bbPDG7DDZchMH2D9tT8BDgbHfm",
  "key31": "4W2oSWQze4ewYAcvwM2oyedtjSCbUj4nj3KidjoxTtYU5bXRAPi617VPa8jjWFGDnu5Q4cuFZD7mv8rGTSmrw8kM",
  "key32": "5awWLPJ4692gmHLxXn22AuBWSxbkUjDRjnGGFsTDUqT5uLcpoVwPTeD3nnehViGChNxcmAd18QgpoB1opUYSmYN5",
  "key33": "isfJUt8hDkpiASSjf6RMrornzU4NjsPML8RSFdtBK7iAndYWTxKFdQSitx21b6xGcWBQAF7pK7qWGtjiqXiZ3Qk",
  "key34": "3fTjJ2Zh5683vpXMqPo8aTRQz3xxutBSGPZXKnZHxGGN3RMuVYz3YtKSTtBAB5H1DvqPhpMtRQ9TJUSfTL4jnaq9",
  "key35": "2dEUFEzgrEbm5BEi8t9g4twwMvyBqUXsPvkShbAF6irEYB72ppKAuU3W86XMDnbuoGKuuBVcKvFxRhQLze8BskVo",
  "key36": "3y27nfLy59EvYiazkdcm7pxbjjj6PWpYkosZgE93wpn2t1g9MKf1GGPJCkvK6XTcRWEnRQUN82gzYvdLcb6H8y5s"
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
