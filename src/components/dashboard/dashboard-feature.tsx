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
    "5WZE7o6srt8gmzSbLcZEyj8EfXxkgESdS6nr2kBFJAYqB1XAFjk8grSxDsvx9QDKKQ2dE76bPYwwKyKtrbzWe9sV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AceStZ41Qb12jPTcPRDCKKyTtvkyzMVM3pZwnC8Br2WaUrCW69ZPetEzcqx9z457BavD9T9dU35bVhEPynxJc4P",
  "key1": "57SU5QVRupDoVGiTiX3eid2XKXnUojZ7G7twctjXEa5YMFkeRzRSgh6ZVHLZs2YwB33bEEzoyhu6YDtECuZsedd5",
  "key2": "2X8mpXK5yH3XF9rg3rC8eJ5qWoQ54okmBN4Y9CwXjjCCEhb5XVoJENGHZWWHTt6BQtksjNZx4QqjCEgSvTrmK4dR",
  "key3": "uoUXTYPxM2RbuDzrx9oUPkLWX4rfdexJU28FXPh4zKL3rirhkroerk5nH2KXMi12fFiC81ySdbrp15v2Ni1FF9q",
  "key4": "4udKjeQaNGA2qbM5zR23zCUXDQuyQbbmbpc4owZo7K2y7jgcGt1Q6rLEQnF4BzTwE2x2N1tJSGschikxc4Kyrv12",
  "key5": "4v46rJ15nBtzCsLbYoZZoWpYBieW3L2VTpDndQaiL9kjbs9DAHh51rAQ2WC4CUCSsVS12pEnFWcVjFFSD1Rk1k8",
  "key6": "3ynbX6egUteTzzdfGgVXJzqUC7fzwwLNTnmJftwcYw8QexbnwqaiASdRsNSFEXc5JvNpxsVXSAHQuMBnoq1fGXWH",
  "key7": "4gKcdLJyLkfKvA5fAccQyccp4qMZoXfvWdCLd9X8rxh5249X5CiEmEyWMYQu1D5FeKSQJubAq16E5Q9Xv9fvhrBK",
  "key8": "KcwQmdPrwEXPgotgQ3Vc8oQr1hFh9NXHEehm7pC2z6hvQSTNRgGRSUf39qUKBxSgDihWRjoVYe22fK4HKALVYue",
  "key9": "2a4pFspdp3d1nDJU9rD9u5f1TZ6JT8E7W4NMhHNd8JtnxE8auZMEJa4yY2GXfbKBJPTdG6ghjC7wi89US6dDAZyu",
  "key10": "4nt62Lb5KvJJ2YwjNAPcciDRxSA4mF9nNnck6dNFN4UtWt6W92J38hjy89LrQNmAHLX19Mt3ykWNoAKwLcAXASy8",
  "key11": "2fKFYT6Zc3nqdpDuuvGWBRayGMgab3UkLz1uMd3o38k4jxdzPQScv6BfQkqprkRTEC1LjELbHe7JQTT5CxquPyti",
  "key12": "46dsNtbFuVBjHSDM94hgjgnpDCcyeQ96PwkDAVWq3NwsV6NADGnqW85obrvkQW2eDLbT6a8gF2nGk4jXhqmFZ2cE",
  "key13": "4kN6UMcBinBBv5Eh5t11dBPwf5yNKbzxPjPEcZpfkuG6wtBoeDiQVAkUFrh7uaSTLk9fW6bCGNBzx8JSqSVinwuT",
  "key14": "4JofWVcT6HDTaMcb678R5ocr7CNvvnzR8diTmaEZDb8NR6WZC1hytgBCkSampeEcYi9XtVT1jhiY3ZPASfPcCQyP",
  "key15": "5FGqgW4TvpKfMszxghKjyT2NDnQ4rLgWn4qrfv5Fjd1eTv5ZkbmMaHkq2ifegmDEJ9pd2htqfU8zfKmtJRwxrX4E",
  "key16": "Rb3hqUhJyZyD2QuiAdpyBLwMK49KNovcVCu9DSBhcnU6wRkkQNXkcgxt266k84wrPrthiekWSLQnSGuLT1uynHu",
  "key17": "3SmP7ANfvGm8rWAxEcougBbwPRvhWcnLydh5PTj9AGJTuTXMDM15wSeqqq5oAmXZVSo65BDacBcpwxdjHcpYtfY8",
  "key18": "2uvSAnKskiG2xJoNYSythaUAkdVP7raPuALNXTbDeMxPtrNiBH2qu8B4EnCfNNKKxbsgLLTGqmPYVTFdtvwh6Ceb",
  "key19": "2Q2PRtXkVw4SYtUAYRkxPwGhycDjmNCQeXKQZP6w5PKd2t4LUGudVUAu4jjLgWivRLy2ovRRwRXeGDu8kn1UHFDq",
  "key20": "4dc2Ek9zU1zpPKY2VbfyvRwi9ic4RHWUhiAdS6Enzk1ARbveoFnpPtESAwAdaA24fYmVH9f5BFoUTbhUkgKtse8X",
  "key21": "2iuodCJy3YmpocKN1odd5SRNRB5bGv1oB8GApcYduJgXysoJdgzLjhn3eRvfEu4zLJQ8RnJBmkRxwcdWFEK2E9sf",
  "key22": "FwVmMBc54AReGy5Y4SowikUASiXLajVb6kKV7og2tqRdAYbK9NcNGGy2z7uCtn4eDpCZzHyowGVssC4iwAUzTT6",
  "key23": "2cwVqbMGcAHCFyRiS6PXoLakNeTuNoeVjMH19iCrwmnUrbQSjLCtTx5WiVaVJ7yzfMDwWngnLdRuq1TqDvdk2yM3",
  "key24": "2FfAa1u1pzN252XcmaCntevCutCrkjRRwX7NwGP552nyS3Rr7tUdUijAJSKaWt3HeKswvQBz7uFswpCvvEAFLKLw",
  "key25": "5xx3JqCenrf3tPyvKkj1LbCyxwkbBbVKJHpnYEbtWJbw9QjZfr6LmL93pQgtrsGTNzoLKeGduyvkRiXYQof1WuaD",
  "key26": "28faoLRjmPiDTuFgiyfNKCpyX29asYJC3E2QQnR2SHZKDroKUddLaRQ78YAgtoz8mVGiJ5czqVs9EWvBe9YC2Ar2",
  "key27": "5fX5iJ8oZ7S4qguGaRHj5GyaxRpxbaRUEZRUUC61PZJhAGAK2KfD8aZXqFpE1SLtwfZQmYXq6wBCvcqx7jBPfqp4"
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
