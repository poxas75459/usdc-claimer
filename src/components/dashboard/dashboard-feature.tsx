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
    "5U54CPtqfpvWZEdDkFo8aegp57NcksguxYnHcV62PXPGoacM9HUz9iKtuEgDMu8dSFS9RveMmb5VACoSfR5dFB1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZqafriTw3eog6d26hHqbAYybFetQuqLYWR1EeNxqX8d6SdvtJJz69rkdiYqZUASS69YVKtxppSDckjK7nfTAA1Q",
  "key1": "3D2rApkJPzC4To1sWjSsKRRkGY34owhj5GHefzu4dqmf8SfbqTvQ31M29peVwidgVm5tFwevpH1ATp7yceMUQw2L",
  "key2": "5nVnJGdYXUkx1eVC5dnjygKj94enitL9GyjuzicCNsLzH3Thfkb81nsVzRGKTjszLK4rfMrZZrwieVcG2AC8NDEe",
  "key3": "3NMSKq17VBgB6Uj6E7h9jSnJ6sG5bxkoH2wBeGXWCfw2ELVdGcHpPz1nKEEU11NsginDkiBzPWy54XYTEWtvNZPC",
  "key4": "5RHizyXpfT2LD8EKvSE8U5c8cYv7zdeAAMncajuefdjQ6A1Rvbms5aq5Uv3Bw8TFrruxawhmQe8Rounu3jqLXXr7",
  "key5": "J2P99vj75wLgEDeRNH78XKKhQRVJCfcEKwp2Fg5n6Qrwt8pj2geLfBHsx8zqYYUkCYHCoweCxcLCqhE1umVT3J4",
  "key6": "3gZJ4FRjCRyvo5CBkagCukvcTEALXvqSx8K8mYpQCtTwtVK7C6A6teufYPuhGjyWPymPRXdxYxjxunfsW871u7zw",
  "key7": "5Bd7psB9ost1L9qDP7NpK6ZrjYHZJarJesw4RvuerMzDVjKVbjhbfJKMAK1zEdfsvyXaa4d89WJL4bWyQh5uf2H4",
  "key8": "5m8Y9uWVf2hSyba8Ts5gFESZhtZnYAn4z5XaPQSM721zMg9j69r2xdasx8Tg9KddQVTy5zBsViaPWj5FaR9dUxet",
  "key9": "4rTWmksGvP2ggkUogJhPWwibNpomPJd6fAKGxV1Ed6tNgXMsTP82qvEeoSVzoU9xVrX5pazU9yBAnhKefn6CXupm",
  "key10": "4FB5MuzBQkMSjtNgvBsQ3Jmg7ZYFhJ1D8AGKMCVXiWqL92P7BfFToqTdTZf8A6jCShaFtZDWYPxLPGwXqFUMGkSf",
  "key11": "55vLts4AzuPvAus2SrDNjQWRuQWzfpvHV1ftndeRBAs1hrPFhYW6NTbnwmcxwbC65hDsTPBZ35T14Fp19tUrKUFP",
  "key12": "2PxU4XqQiZJMguRujNE88jonQMT1AS8r6mGU9a5DMpC4sFKe9xziS6Gt4oETzwj4LGKZ6z94kKgTevVBrGmdgspc",
  "key13": "3L5mSzCmPNzFfrxQYS7k19ZKJDrZZfxYw5ki5CFxwGZFsn3D1ZDsY5Bvj5MAaK6YjwdRuQhJgZDn9i6VpqrhL6KZ",
  "key14": "59kTdSLx2r1UtYc5XSo8bEoHRpAjGGYMKuSYmxcPt32ArijA1LJ42kcyfsmi9H1B4bZB9aB3tx43DqipwzCixpSh",
  "key15": "5wDfpJgubm5BTWmJMjve9emgu3omwrKEUqNXazELPVZwyUkvYuy2qU2kB51koJeV4erw4yz7MJfwqcY5XpWy9SGm",
  "key16": "Jph16GnXeQxf6Jo5hT9xW9w2PUekAtLStWDdfS93bqXja8pEXesLxjyMWMsCiTMnXy4M3AW2U73TL2ETmHDWd6u",
  "key17": "5HYA2RN9U5FHbDrmfzSww4NAURXRGC7u2sWjTygSYKxz2rtFo6txifbYiCzBWmypAdZoHQ4mMqqHLFDWvTBXczMB",
  "key18": "4xRgyNBr5GWM8vsPpXNZHAm6PJSE3UmkxQBQbDfzuVtjBw6BVTn8r3RXCZs61qTFXx9gBYHJfyftyYjPdYettCmR",
  "key19": "2paYToehdwszktHCrLEt3teEaS8cXpA7NHwXEuoE4qWn1GVicfqf9jydceExewEX4JNaK8Rw9XvrLhhSnViqfGuZ",
  "key20": "45NmXvyy462zWbRSmt9Fhz4dEoiReq9xt4CaCZhtKqmnrmxtpudGrWC1hEYS1aPEjCBR3GKF9UmdnbYfJbqhEAZr",
  "key21": "3dNqtSaLCRj7n243S6C4AbeQW7VpvgRC55Kct4Snio4XC25QVpqD4BrYLDkSJr5zyteKCnzmpbE4XwPBKf6A9Po3",
  "key22": "i4MGp74d6X9G5brYxDMobhNJqe7gWRNpqvwAzaBTDxCJpnqUrDmZWJiMawuMHp8vP64WRN5H4dhGyxwwZf71sqV",
  "key23": "4jmtHabzjSkWCec3wHQ2R1ryDB4iWZbUBpe5cXWfcKVHUcG2cNFyXJrSURhb4orn2wwZzwkNrwvebeDLMC5AV1jR",
  "key24": "5rxfopfV9mCfH72oNHyWG4BikYBpWaRCCVeoSt4q59DGWLGnWb85yWga21KyhhVkShoPiTkjtoRN6pQuinCGQhjK",
  "key25": "3AFp4oCzFtwrd4bMoBYGmwtWAb7f8KryHanL7fyDowTaA4F12uQ4VfM117Hrj13Yt3AmGzdSsHBAWnazC8CmFoqt",
  "key26": "5ubdN4k4ASabQdhKJhSYEEoaWsXxgfw2fHMzp7Dy23g21z39CechyaarrgmsyCiJyrp1EWUbPJVkTTK9wk9uBYLe",
  "key27": "2GAuzgM1rpgLhAZ25eqwj85PAzuyHoRcjhD3vcphFNPP2kSDm24KWzRvMdr9c3HgwPT8Y1UejENFSYZ52HeWMDyj",
  "key28": "59MUU7ZZS2774RojSDhAgBWBxMXJ5zRN7xMmbBCCwHA228VvZT6WZcGVcdswPnmteModvfdY3KLKnyAtb7V4UsH9",
  "key29": "gtZyFnk95nZJWHd8DBH2ya8XcyyohMUvXw3BFr4HMC2moWjxABdgDgsXaxCfTDTMubrmL1oLNk4bSYDGxhs1Rkz",
  "key30": "253Ux5NAd1iDFgBGCFWVWY9MDfZa1vmjan4aVJA4Dbv8cjUemfDpggQxKHecd3ycNNWh1d1zBgRVPdko75AKxTsr",
  "key31": "3JQaqD9QoDYoKGAesyoty3e2tn68xnyvrzP99i71bvVha2kbLq7u4NfZ7v67g3q6Kf2Wpf1QLujQ4eBfWS3D9hnz",
  "key32": "D7zZJGCdbzZkdi6nmXCb1eRDAKpp3PFDoAKV2HrcEhYu9NLQ7ctxEFTP4aiby5A8haUj8ACSyYNFtR8MMiWzo9w",
  "key33": "5fPtgJN9zS1sxUVwoUiMWAWKLTmv7GhH4cUQgS5qcT6bJToS3zMntrESgSKQRzupoCxYFm1JAYh1JHfNVe1pXMyK",
  "key34": "5CpzJKPMw3MgtCzNx7KAFFNE2Rkg7rMSBDuFbw7xPon3XTYtKEwi89sRaeoCCmS8L92CC491m19JFMgQAzGTcE7A",
  "key35": "UmChWkhiqZcpKSPYQBrkoAsuTzNGTFXKM4MHiZJStMZFUKPQ7JTaYEVWsZMff71cWSaMQmnW99VQ37WY7kDR8F3",
  "key36": "4bFhSiJFK8ZLisfTmYHsvUZv6c9bfeNCu9XXDkWwNJk9PZ1etdg3bbJbRXAf1Yo2RYUfpn6cjAm6RuMdYUAh9VFd",
  "key37": "5eTyGtaJrGEw3cW7MX8Ks17V5KpqDtuBt4E5imJpHPv2zqJJDzSffmAut7eFGHbhNUNpogUTKEMvLo8zWmZVtDoG",
  "key38": "u9STQLbN4oo1VWsU68UuYU92cPiYYQE7QgRpW1irjV1NyG82PvL2JEgNcYY2En1NVe8vwXKuxumDwbW1QFKJEjs",
  "key39": "3SGwxbUNQw9SaHX6UkdJmgjsrwrp8n988JHvhLBaqaNXiyksHU4EhreWCeJej8c5R3y9i6fPJQYzCfmRLwBmprqV",
  "key40": "3ma8y1AhgofZ8WWghrvSGuxQgPAyKFErANeVoWwSVwQ7QYthEcX1qF4cDZbwZso4ks3Hn2SAstWce8m5SizsgHp6",
  "key41": "W8YnsPK6hJh56BAnatWALDNHpSr8pZZisT2SpV1zhWq3wcR19H7D8AQQvHLrmsrddv3SsRug51ui3cBRedzNCUn",
  "key42": "4iQBdnLzAj8XbVvdbbM72Cmhs7MyATn7twy1m91hXz8TnFdFu3ra58EBmuVPLj5Tmtum24rzTu9hYNEF4okxYG4h",
  "key43": "YjdMQtmZiX4LQKXiwCFpCijCo6w92BcHqvzF81i5RLiW8dcT4WY3kx2UXQbJ8QpNYrCBdayKMC9ue66uqgqMhdK"
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
