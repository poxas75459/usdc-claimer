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
    "5AaFA9h6WaezSVECCAxQNQDiP1wWYu2bbAebPmAJNmnK88LD7Y3KQZbYoJk7QGhM1ZMZ1kogiTHwbFiHGRNRkN6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V68BMCFS2Fhkxr5bhxAza1QzTUDHfsSBS2ZFv45aC6AukumuC4ukwu8TvN3RM6b9B4TzakgZe2SGhnxjWEry5b5",
  "key1": "4gavLHRTSrbbe4Ht4LyPZA7HqfE5F1M8Zdj264HWu5kMB51PfJVUqocqGZuuWMjJUn97hycdubfqgeaa6oqA1CZb",
  "key2": "29WrCWa8nFd8FgHz5V4Zi8fSMhYhv4abve2EMjn2Cd7V7CfS1yhy32Pd3M5ujyZZmYrK735nD6L9v5wwHzHVHdoo",
  "key3": "5fcPGi643cqoRKFSSqqS2D3Rfd6fSTaT6DjwcCUtMjEMwHFc8Go8BbRF1Gmxz9Gs2K4ohV7gyhCS6MSAArhAmw4A",
  "key4": "2CkY1XJe8YgF8BnQetxmtHpTADiakbKcmcMTTinzZ46bNQBhUrC5nBYF9SvNPo5bTrjrVYFDRRe56Dztzntg2Qkx",
  "key5": "2MQQZ8TaYtCojqr81tFFZ68yihCHGmyb831Wcnro6WDLN5pBy4t7iCRwNB7Lz1m4iHDsQnYPUUkeP5RaDGe4JMB1",
  "key6": "3H3QhdgwV4uGgyrQjmUoDnwsmExMmwBRugpJAV9yrgoaYuzZredwp5fD3NpEy4p1vhXDhZnDyd9pD31MtSY4H4sk",
  "key7": "Sim8BHF9Ggq5b1u24k6LtKsHbdc3cM4JHzNXUxudq9xEAnGKgLYn1MqMMWtLmVu7fcJqhvKzFQMJg1D5iKJt4Gu",
  "key8": "4EoxD3eTKDicZqNCw6naWVQRMsqX7gvWgYtJMcovAPRdNTrgDyMt4deMin2qUuJdnH2uLamMKSc3k6igzekZHb2D",
  "key9": "3Qs4BGEPi56qHsBo5UL8b9y9SgMy3AKHUVMvvAKToFDzTAgy2k2QzTAZm61ZusFVxeyrcMXPdVGqywrFcBeVsnPK",
  "key10": "5SsAnpCskscrPB6XAMyUVt6485aspfMJ887offZtoaL5xKrZDo5TCM1Gdv9hgBQESyT1sZ5cXUTvhNo1yq6ZiBTK",
  "key11": "3izx85myPnjKLt4ycSaYEZ8YhDkE7Y24Z8ndK7iPZUhCk6XpxDFKdP7YNYT9TEoQFVeM8PoGQttg49pBBDKBcdrG",
  "key12": "2gVXjruVPvh2H9uXdYgQwmD6zijao2Ymc31pSGde5fERh5zaDa4xKZuKAMvHDph58b2EtsgebGgwz8kTUwL6s39E",
  "key13": "49ULRtzDLgnarZdZ3hfFkK5RnqyVr8juBfHkJnQEw1F5r9TSRe7k3r4e6zavahjbR5v9LTRE2R7BtcFdaU7SSus8",
  "key14": "3LJFumueGyD959ApPJhP7nMb8v92HkvExibpBgF39FSbjLFZBrNGjUce4mMz3JUoEuw11u1d7Tot2AHYYZ1TjYhL",
  "key15": "4vjUxa3TP5scNnnUvZiv56ZCntRBAaQjjxXKUFpEwJt1XB168bmGKjR8LahKrWWFrVH7PDPWYKNitmv76VZ2WsYt",
  "key16": "32uvAmsp7dbBETNmZG6mmTu25rrAhKs3Umz4hG1iepWMV46Vqp9xLLBzvQuLmiq8YHzWYvaZUDGEfBgVQGsvZ9XZ",
  "key17": "4uTwhg43VWscLe4NUeLaJVpdbLrMawoVGjMt12zLanWK1c5AdLfzAUwU1WSdvmDxYy9tAhEsB2oG6LiTGDZVufB1",
  "key18": "3NP7LBxsQ9gR8NE2Xe8FxGGouexejktnSi1UZjRyf3a2QZtHkbVTecbf1iz28eN7T1vYKaHqbNris4Lq9qqm7N31",
  "key19": "4wet5F9fRQvjakhZexMyLiMBiQriX7TfEjo7SVog1jc2g6CapsoXigRjnHDTv2r8hRNfA7Fyg87RcjLruyytjVd8",
  "key20": "5BVkCu7mmWDwyrLWCxTUd7iaBqjBkPGGdVqWMWxvWLaKuGmLfCGyvw1D1GgGsubBYJ2m4WjRqXqNzAoUx5To5HZU",
  "key21": "2UoTtNYDj6FChG1E5RKZBdcjL2L1ShR2SYZnxeEkJKvFw8ELjXFX1kFjvyyMnqg5Kuv1LkGHxRf7AAwCtD4xyUmw",
  "key22": "UxVC2uPwwZYJN8J6k6HMXikc5wbDjMChL3qgXhY82bGNccTZ8ima4jB3Go1BfeeunzU19eBWJ3p8XS3cc9ZbDWa",
  "key23": "2Ct7BPAY8Bbjxf7i8reQvfGHdXzmc13Kkk1bCza1uwsGAqEcsvvHuJD7teSooS5xBrXkRttv6pxCpTAjtMNg3SnE",
  "key24": "4P9tfFUUaarEaZMVhgBkxP7TSbMvnyxqE1Z55bpMhdzw9MUb1MxZpXzoDWnEyb2G9o7Y6CeZ8pzp4LDRP2LTUyMt",
  "key25": "3D3mTHMCdTqKFwUGdUucwWU8RdYUHWbzjkTSJyaVtWj5RW4iDpEcqd6e3CMcPWA1m89XJMi9DNVgf1F9hduY6KM8"
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
