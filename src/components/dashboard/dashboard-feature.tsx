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
    "4ctTnfe6QvWtV1PwMMFvfGGRs4iqHxwRWgAYs1rJKcrjAJVX9ht63kykzBqMh2T469P48KpEaGZr9sXScFXzX5uF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hBb6RYoJZ7TJ9B6nm5JoMjbMPT4cKpkwebp1vzBDtrM7VWMoUvvnrCHSEzAqEe7ouSJErH3tcRJuJLqQxGitSm8",
  "key1": "4A7sa8ZyUpATJkhYiRhaRRfFpnyAtZaPnoDfMeKadnaxxpZyDCFbUSyEQCkrL8Yhpb4wQU7BfLDSzA129Y9npxhV",
  "key2": "vGT7qjqmy6nxAwfpLKmP4yNdtnsuHTwVTNn9bn1MAXkLB5x34KDCofj2Tb2ciYx5YcX56khLuYJ4gZ6JLbgTU6h",
  "key3": "3KLcYQiwbTv5LJTsk5mK4fxnXAp2Z85tcUsUgmCXmm9nYtEvgCptvA7Q8nUN1tp1qSezo45Ycu3giMZP1NYmjkfP",
  "key4": "3buYUqEdp4fy6peify7FaxqemeMq8XhzUkbcLibU2FV49FgDsezwAARiDWUVEZqibXRSB6KLJGiEryWVZ5GvAbER",
  "key5": "54gVTv57PBJAGHiNQYskTJuDZuohx4qQ3MH1rvAT2dbpsrVjV7okgmDq7mciWXjjk5xz98i7EiYsrrjWWcXGALsU",
  "key6": "XGHtDGMcumTNZirmnsigm7m8UwUt2d7RyVk1AvC17RPqyEh9pRzr8hnWtWgfrBPPTsMkYpW1VVw7g8zgCKRXjQY",
  "key7": "42xbgAaeMCkBowrvikCaVTCkfvExirXL39Jxmo3Nakkdwg5tkZpbk2R9mGaGnUMHDnLK3ihYiZ57nph2yXaYFB9Y",
  "key8": "4c29eQ426k2xgz41cTnZ4cjJe1JcvD7dLLGnWhyxpJaxDALtsT4mqiQ5acR3EunG8siBj2xxruY5tkZ8KJ58pnGh",
  "key9": "4tBhNN5KqyXuMBUhbd1bT4gHwc9tGVgkkfSFyFEU1x1CSCbi7pa6dbHykuZtEjVqy8XVnFCRUB7XhnD3YKzpP2sj",
  "key10": "4eBBYJE5hNkLjppEGuhSbhNgiBz4we1gAnHYYGzX15SLR6BDhsAuKnqdsGTs2S4BNDqhQMCHMxwxNtdqebxYQqCh",
  "key11": "42A6oEc47pBNka8dwK36bASvpoVr55DbJ1y8xvuH6nddUYso6zodbJiKF9bSVax9uEv6ZjCL2k2ZKXnBL6YF4gGm",
  "key12": "2kH3GSAejHKQHjtfawcu76Zti2dgnez2z6PSu5tswzwn9J449GmqFbTCZwh78up7GGxZtLfddAPeND64Vy2Wcr1d",
  "key13": "571ELuLCuT3vRWEdVwMoMCgnwBiJvzqNzDScnijEn8FbmGKGKfNQz1aYi7KXhju5bFH3PSHHH4qFgQkatYA59uxF",
  "key14": "5x5FCJRbrSse9jqYKBcBxBP3y6DhtzcY67MjpZ5bv7SeYo2YbGHTUKJT1Xj4HckTYSi9zoZiTNhai2MCqjZ4nmJX",
  "key15": "41r5PioN5AppBiJkcfaw544WF3cYU3QD4nbuQJpoGNyRkQeMXc1FuZmeg9XkLSAA4LvSQQRYNSLxiMxu7wgbj4Ew",
  "key16": "3wFTCsM1u6PetMkTdCFVXGXZXpQk1pJp8aiNj7dgLDxdUERpzJG31J39hGyGYnsBuufWKjFiz7zLVpvm95b9gcUk",
  "key17": "44KFyJ1gmTjcSf5jHVVZuPA6hHfKpUCpV1KuUCogU8tyY3pMSFcPwa4BBa889DAWiwyjHEJaiXJ2MGGGgVLaedaT",
  "key18": "m7ckgmNdVS1145f9LkDGiSQajhUkS3Q3faNaickP9VphdDczsig4YUrUs8QDh7TbKr95BFnr1rwPPynzfvkM16j",
  "key19": "2AZne88BbvPWK3gxmpn1kHUtmGxfeZ3zDF4HffJsR6VdpXp8wZH7GYXH2egZpg7FMgtwN29dF7CVq2aebbUqpzqa",
  "key20": "5dJcEVZaerQKnAXeyhuXNTvvdqEnDx2hqzmWUU5p2cgJbKeBw1dq24fADyvupBxwBPZsfsqAGf72hYM5J4DcvYxh",
  "key21": "2nuzEP3L23Vh84jrGEWjjEexavPT1fSHUxfqoRN8EaHWdf1hLWJKsBq6MiYMt8kPGY1Hk8y2bKSQigYTMNrpR48r",
  "key22": "2Hxq3LP2PcosMJD6jEWM1LbunVs5uZCCu2y5wRhBw1E8wghJ8hZLnJXrYWnNygrnkMbaZNdnAQRa4uFSACot6gi4",
  "key23": "3VCWWck55kxF4zqacwHLLnAoJNfTcKP9gnCDU9Y3srPzHnG7pSK7Mb8p953EcidodYNumaYtU2pV9pKWehiyfR3k",
  "key24": "YH6c66wj8hUGavExLMCVBymXJXDhDJvtvsXxWrxgiKEdzfubPzNzGQHzabWLz15y1NS92K9ui5uaksXQtAUAZAT",
  "key25": "3e8Lu3Gybx3sHCENQxv1aF9rCg7HejHYzvgAdudmyAHYSMmKzaTCs7o432QsjaMpkwDe6p2xo9F3vJ3zdiKtyjcL",
  "key26": "43La4myWSxNJ59DxGDwQPdrD1SUu5ZRsUnjUVerB5J73AoRrFoJYJ5XdrD93MBD8gkFR5VTyjZZct1cNc8NCWLAm",
  "key27": "3TXh82ZsNaT89wdHEpYg2de9kEwDHTPCYKq4cx9BHMascFoWchcK1xSEeaHqhZwF1exod4xGZnxsja4AZLwjK91H",
  "key28": "2p5fo8XexFhQgxKDPL6gx2Vekhn5pyqsq7qmE4ypNbHJWgDuXFbUPPXu3GfnzJGRadvEaJqBYuseMP5TZSUrTeRy",
  "key29": "DYEkPzkyjyG9FaSGtDx69nxTRuDHYNrgZjjvkDVXCkHj1rxaL2kuEadZMpRQRwaznbZg3QRNF7jSSZ4RNbUgBkB",
  "key30": "sdaJ7VRWsoGYJJjGC1tFx1W2qLHpFnoHw6N6U1VQEHBBAfSxpcYG6jntNwFGTU8Kv61btB9QrdG5cgayfa9FKfW",
  "key31": "3ujYdQ38buhnj3jJaCwEoiHLzNEuD1KNSL1C5iYgEZsZrBMX382Bp6Bo3Pg8dBx4pNYCv2LEVTXodkY92SiSsRCd",
  "key32": "2tZNncV8VHKWFqk1eReVFt4RbwT56213gXApjD5S6vUEuMUvWdP6HzfidxXvGGZCqeNRzq4eASe1eLAqXWdcikdH",
  "key33": "4DtHNpvumadvzrsdNRSsKeGrmU5kXgd4d1M6AWv97ioRD6zVNCPRznn55im3ZtCi9AmzwUywRaM4cc8MkzevZsX3",
  "key34": "3vPv9PcdYP23Z9WYbjda16w3MpYYVfqMiraSZaBXKSaXqGRkygYJM6T2tsDTHJcupPsFNcgshtT5Xa9uTbjPdSnw",
  "key35": "2augsyF2Kjjx8riiHqWX2anaeRWQJqdwzDo9outHNWsozdiXbuXvfLkNXCkpfarVCCjNkvkAW21yd6UegqwYxuGi",
  "key36": "3dFRUCihjDvePd8N7bSSCJdMr4evHGc8zGwSKtzp85mLk2QvpL5sfTWuGrLShHDggwFUUYGsMYNvMYu1irJu7k9R",
  "key37": "3HXyPzgKLqtk8kGq7deR6VJJcBiWRDw3Z45DCePHho8ho5o8rip78TQwX57knX9tQ1vDSKen7o1Rj2WhA4At3G4A"
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
