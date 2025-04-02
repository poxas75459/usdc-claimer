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
    "2ccxvqNq3auprCoVCxKLQrxgwEAF1yBimY9Nr2y4sfUyxqSwBU1zSeZemFMCJjs75x9Tk3wBQ3DCQweHsFUhk8mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c9fK3UgQwPLamaJvxD1ktcJRT3A7xgfQwFhpfd51ZKJd2feQQQUbTUdxKZch6NgUFoE7VwEhvgWAoUbFRBvYFir",
  "key1": "3rHQZ8QdDdPPHwPaWNFmZ1FQbvYpyVMmg2GKB8RiREuoR9aXWhnmPksTEsWyE58MGtTBvFoMgVxmoduf4SVr7VUK",
  "key2": "4VMqTTvpo9qWAdVGMKpYUca3HmPbJGvWXejgENo3v729AARNgvT8xaH3ezoy9xidHXsKKxTX8uXp2qhZa5KiEgJs",
  "key3": "52pe9yBu1cSsweoCnyxYnUDNpr9mLQs6uycuSCuYx7zb6JcHyUwRQJZRiP8RQqukKGSpLBuqaRtR6o2EUryvBLdm",
  "key4": "2Aqc1sQccjEjofuz8qReToXVJwthYCqe5YBhBqeMYE7AMRdUatRYwsHF2bhKhNevyHNJpWyGh9CzXVAdBEM7veXs",
  "key5": "NzT74r9MfU2CFy7pnCuEmV6pdRi5gr3bkzNhitxyncdCSjomGw1RG9gDLWXiEbR5zHH4DsGFYLZZVfXLWTe124K",
  "key6": "3AHgpDneW8BjBHUE6dSR32WMdr1mCVUmmYtALs1pmEm6FxNFBFeAKBi1ZchdwXJ8U4YdKd72ZAawscbWUT12uLAB",
  "key7": "4XwPC6Re2EeKnwVHFbCA4kQGGpj5jUjUeRzHpuP8iHbosPFjscyFtNJc3vKydJdxUfT2brAFFtdhhc7dhpXjDZKN",
  "key8": "5m2YByPHJwLFhcXMn6cLDMACGQpN2uLDew7iw6cMuNMVVRvAnbYWt4xvpGURavWGkLDBvYR8TpRocQdJtdNfEaya",
  "key9": "4NK5u15uio8dDPn4XaL4zPqL2Gs7nBbC1Tqy4VGoa27sHZ47kkR47PrGuzjZfGt5G3x1zwhcqaBCGhCLX7FWznLH",
  "key10": "4qsPAR8kTjf1CZHHuf83kLS75W4pPd9hfKAq5pa7zFBmVvfy1eXutCaZL2zmvzmzrAgVUx68PRAdAk7YAmoRGsvp",
  "key11": "46up4Wi9GARY4tG2gFDhYt6D5G7CMmRxpZdVTDEyf4hkNJ6zQBzptWuMLtKim9R7yhsNXK7Y8WJoHtTg5xMJ9TG6",
  "key12": "h2czb9qzUzff3CkC7EnTDWs41gfTHcdL61GJQHdBuesDiZf321vM2J2zxyPpShTs5RHsmxCgcJYUmshHah64Jrg",
  "key13": "5ykNcqYvYw3ZZYXMJBp3d1BHqivtujZHxwG9DxaFyPwgt1QEa8BobZfGhFNf1EdGhRWXjE964qaEZZ8XZ83BLRNF",
  "key14": "5jbhgDw3SU1oxJdXD3ymAgXvzxd6NxmMLpPMLqtYStLy4zsV6N4zsktj1mBkQjNn3TWjjy7BHZU9DbRnrxwFxQfw",
  "key15": "ZRGabNu3Xuj9JLBqkbzJHVXmmgzVNJdqCeRmrvSvqxgMYDY89DEY4UCwatL8X9VCSwPAJ8Evkdv2E2xSLzCzogQ",
  "key16": "x7LTFy8KEyjKbjoPsMM8KcixPje17JRYFk94RUVX65Ey4n2Cxx9LxYGRQ6QeFGiKfMSdkr4U1wnRMGZmHKbxy1b",
  "key17": "2wZAamUZnexK57sUzyqtgEVfrAd9wEuHehTXua7oqKESQpPPTzprAdBFTNiX1bJ9VkcDeJ4VC54Pnh3n6WQJXxN4",
  "key18": "5Zj4cgnRLNWcPtVgaumYTPnqZZaMVdMFdBUExkW7mBpXuSgmpwsMWjfkjs28Nenz6yaKJ6vkGXTP9kU9vimsEZVF",
  "key19": "edKp92eHt8DwF72Y1MNdC8hao4QvmrxiuKAgCPC3cowvPLV37AtogwRdBVzvNCPdNe5uJk9aoRMJxkTSEem86BV",
  "key20": "4KAkFMVCkzHD2sryFqfJe4J45fBnssxVpJnjfncWGb8s4kcP238Ki7tjxPeqU4VcCvqtfnBqG2YdzrFm479LT9BH",
  "key21": "4Ry927sySRpWKa1gPPzTsRPYE2VcZUYS9YNEuhkEvqd6N2tuATVBYKZRz7rgHu2o4QXEyRoFcLaPwogQp9thuVYB",
  "key22": "pnQEXoHMfiGBYT6pLKDKAwueR5XBb98qLi79XE1DvV5i38obpWR7RqDVgFyL3dSW2sho6BCJzmWNUdsir1HtXNQ",
  "key23": "1QwZeYJ6GbP5ZEK86iajNMtRKdBSbj8C3sj7xGjNNCnGmeehjv8qDJL2XRiTqEEUh9aQnHbCFcBrHWMHjpuXgPd",
  "key24": "29hBqZkTZZzAcahq59RxHukmS4PYJujN9eLeQjgr81eNdKtUfCYpuecX8uGjoDkbJ2RHuKVNW7G5EPbyyuT2a3WS"
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
