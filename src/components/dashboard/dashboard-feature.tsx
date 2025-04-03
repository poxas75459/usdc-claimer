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
    "3fzGwDGGadhbTEYuviLKq1ZxLF2v5xD2vgd9jPtsr3YoqncZw3kSCqNzDCPKkuoUAhq9qkFB7DTL99fwCYLNhRXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iEb8mXYfksXpeiBa6KbQ1fAaRtN7n7oeHhhteA2vwUGp2G1R8NWDqBwjpXnARA9RFQn4436XE9YjPAdZkU2y7P5",
  "key1": "2wkY75zCau1X6VjiPZWNz5EDpS1DkZVrH9pixVcbaTFT4h3LPcp2GwJ78EnFuFUHEH2AkMCaiQMHWkJJ2ZRSA2vS",
  "key2": "bCdRSJH1FiWm5Xz68sWGfkqWBLq84FhQJc3XMpBkCDtxiZhVzpmf56efqT4HrZ1aZN4nQScWNjPBBcWW2sGrBvZ",
  "key3": "cAtvQKBdQ9pd8TMEkr1GvYGVU3X6XnWkmmYkwtk1GbShQNYrtKaLyvBBuTxFmY2a47SDafwmAu4fXNC5YujW5RP",
  "key4": "41VTF8LQKHHst1MzCKhgELViahboVisdzTEhgQ6FF5YyzKyvizMiEFEZovaZePbyqZovnYp4RugKVWX6wSU8PxKV",
  "key5": "ezfRDGfyErNBuNXYZbonSCgovpUMaEde1YGg8jUQJpYmy1AkMyhYMteJXFmUiePmhNDtbvkkZ1MB5Uc1n1WDp2M",
  "key6": "2JBZvZJq29NTLGkbJY3QxxQEcz7FKGm8H7w4dZrMpsdhCVgwmT6MUXYkZfeW2Hd8ux5dKvCLF6VFmwJaswfMc1da",
  "key7": "4ccnhmGeoadtyYTgJinY46TgCxJbJ6SmjvPPyDomqBzPRmP5PBARyeB9GB14jbMaUsJ1E8uxg2Ep45qgNUaSMXHP",
  "key8": "3A1dLiqsfXeb3Dbjn7Dh9SKZ8obnSa1vUMGgKua4uwP6YE4pDF7jeY3fJqN4epxk6VgWE5URCe6Ns47R3pcgDNbP",
  "key9": "4SnrNkNFndnkjAd8M2axyvgBs26uheoKuM5wU72wUfFKKMwE4uQbSbEpwbHAn7gjUrCZr7ntWFYvzpgfsMTGpSu",
  "key10": "5YpXresHvBmKK7nNKPfLtMaegxTQpKpK6z6Jr7GemG46f63Z44GtQ4bTPmdNx8otH82bSFZt9b8WFDPAMstuYgLy",
  "key11": "3nHrMx4CseiVjeJ3ZdzdqDi5fmhFt1hP1ZBcWYtwfSJWHiszx8H3d5zFihcQRd12pHi5reZkG5dL5Qm6rpgUNL6H",
  "key12": "4XsF7VUkjFKkiBF8yp8hDJc3HtdkPxYec58Hjfz6viujohVTHx8CzLDbgiJThSJvxvFTWSHDnsWpoJobRvuV7nhW",
  "key13": "3YzgXUjBWLsk54q5RjFaME36fckJzeAmEZy1uGpPXfDFjtHqjG1WMBi3k35NoticDAFNVWkqJSqZpxJnoGiQKe2n",
  "key14": "5XdST7j4nbunE7pknQuMbf7Xkgq9TBwDwbu8tdm3rarq57ha4aiyw86bEeLBvBRx3RTVG8jJJKNhqVdW5umrMK4y",
  "key15": "5yKKJabW4zKoYQuNxUiHQY5X4duezegZjofAJvmaXziuFq1EJFmCPktVqqzs54Ng4E8TJXWmwdjyeB9ayrW3hmz1",
  "key16": "4tRS42Zc1L1jDzxd4ihYkXjqEH8mY42iYv4sHS5YYjMrWXVNn2ZJgMomtt2VhsdAS2Gujw6Gv33Sv2w8bRFPR3wf",
  "key17": "64UTh75MydtNA9vaSTpPaGfNkc3yTsJrcMvem2ZQnugnrLL3qanxNCL5JU8ynCKwa273eUsuyv7q1MMa889as6vc",
  "key18": "5BQe28awAATg4gk9aFTTYJtGMZ2bC38ybRZw7e7HVe1YPBNyDziE7jXQXJtVyJQP6KujibdJr2VPPLfxAJANtPAG",
  "key19": "2yKnnkL8XH77cV3KtxgDsRqbZLB71WwBKALEtbfoNuCivsiHmcQ8TtRgvZka2uShbvkuurRW12s7AHSJrZAom94W",
  "key20": "4jmbNzgUxGgbHyBukhHWbQPox5nTQ4DHamWfY2Lf4sFn5hiaNS18ENTUFGANZCeraCybmUs1tb9n9YsJwKdJrP7x",
  "key21": "3WUz9jXSgScnhe4PcN1U9k6Wj2Q2sdWTxznzap4o6gDEhehcUpUgWEbiPMd16JgrPfqAW1W4CA4wTs3Bzcci4BK5",
  "key22": "444D7s9cHKNPZwZ7f8uuQ5j1No2t3Tk9JPa4RWE1VLy7fXSqSoH5ztBsDcLEcjtrFvVyNdW2PuqrguJVSrtks4tY",
  "key23": "39nqsRHiEPFQjsjgtxUPbhPRbP4wADrQDgSaL43oQE4R4kaLZCSoJkiCYCYfCj6mYkmMBzmC4jAUVD8xiyGEyXSY",
  "key24": "4eaZ4wBwXrRNoBTVpobtMhdnqCU3ArP2AyvgDwMKjv2bXwjuFhQmRqxmi3c6ud8HgkyAP52wGbFAyovGJxDmqDsR",
  "key25": "28WVWECZLUvGwgWHhLAH2GZYS7Smgvt33Wx2trsDMtbUmzuNkn64oXvpigAS1dvkro8qiABua5TgGT6ynuxNRvFQ",
  "key26": "9sNyK7Lhe5Xyk8cSNwYkTJFZaHt9NzxzTAqZ3mgaBJr28XMojdqmbqH9464cc4nzTj55MxbsoHYa5x1nHVWTCrz",
  "key27": "5mtiXvK5DzSd49SGHTVyZ6XrkTUkfQwMUzWebiQQyt1vN9yKL4ndeRqumbmB99MYXCpnbk3dBFHd6RVZssBXtc96",
  "key28": "2cjYW5QiQbuByVLyBXesvzNDM6BYikaFPdiybRHUVDgPtTTChiwNG93LJhhZJPA2QXpxYYtEHAXoc57jyFE7wVYY",
  "key29": "64FiKi1qKWFqyGsKoH6ZPP4KwsoMrh32ZArUre4WUUxJuynrPNsi6G9CLi2fAtvquamRmZfCJJuUUvQdKVCtzBQD",
  "key30": "4ZhUKRLMUBvTA8oHYxBCK75XAqX6u28N5DoEECP5MzSLtgJP3kj6zz7Hacj8oaPTyxKuVRrMXfvc5ELhau3T4nXX",
  "key31": "45LhTC6emfCCqxLwqY2ZjoFB8QeVHpm66Xm6kmuG8ksMzZFhVLhh6o3zs189R2t1KYWJg8NopiAAW9TfgqSL2fLP",
  "key32": "4RajELLDxMTCpsB3FQb7JYqRDFMc57G7X61gqaT7gJkyTy2QkFuNYGrfZa6sda21AHhCMXd4w19pZCaBzGcwuET7",
  "key33": "35a6Gt84LnmBGsxok5pG2mtg6VK7aBe8pC5wSSc8TymJe3DnZJ24cBtajdZ1ezn6irG3j2RUErD4EmbrZeV7JUsr",
  "key34": "2bhbqWkzBxYAeuVGEvMLNpqLPRz6CwGZeGZmeYVuRhrQm2WywPzKZ2qykKutowbdJdbduqzKLVekJcMxJPdBX3qa",
  "key35": "3CXKk2ckt9TovYCNwiWuqDNUqrNxT3KEXSxgeckLQkzVQmggJFJUSyyrjkERvLax7wkFDreRBR4Kgp5e8646T8xx",
  "key36": "2HFqamSAReUtWKnT6YCxne5rvqM6BSFd8qjGNiP1Uww8Kv1ehDhx5P4zfW6JNBL5eMw67XFk5zrbVDfbPNRjsqh7",
  "key37": "2YFJz6FPqJKqFTjHkCFoD48tRp4xERkPuRYabzWLq5TZGXJC6tcYDqmDcnBrMZzmaLz6ZEacn4Md87EDQdx3rdza",
  "key38": "4LX89Gcbz47MeBEDcuZw93TifAcrYmbx2uxgoG29F8s5fCQpqS5611Az8MGKASFb9nLT4pfMFC96eipzFvAg5LUk",
  "key39": "3D2TwobfiXmXLhTrMZejoLozBDiCGkSWhxTDPLsw41ekZ2MR6Cj9PZkQY2kNzzcwHCsXGEajGRcYTq5oJHSXRUjA",
  "key40": "52GbqjhbCwRabi7zavwcSQBqTRyLQ6rqjY41MW6axWWeSjb91ArZr2bv5QRyN98o89XgdNUZnSzADJfuCzXuPcbA",
  "key41": "65T1RXGhbjMk7gSPsvUfSn4cP6wDhHcN3kAqaVefZCVW89VTB1x7eQnnD1zBZHReqSwp6cFB19nxLnGHuGqPuEmE",
  "key42": "ykepdfVmym3szkbnyYJ2SSL99Ehbkmm1oGubj4EHDaVCb8NiwM2FRz7pAs99gWijWrx7RKW2tDKseRVs8e3Z31f",
  "key43": "3FAyMjhUikUmHo66PeATm46GNFMsMswAWZrPcKcjjRjWGbRyNo7bJW9EatfLeeuZCkM2gXJsZKK95ghqseatd86Z"
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
