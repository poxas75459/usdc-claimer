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
    "4QDE6xG3v8HKidJRAECnjCr77xFAUCVBeAEowC8g1DvVxVi2mFMaA4YvxtxSbs3uweYZ57mVgNZNnagfrdU84U2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gkwNqvxcKPUPS19dA7YZGs63SryuBEan7Wi33JrKTknSKoNotH46xFNmdGwR2M5bdGrQciFdFiSvAJeoH6aid8o",
  "key1": "5gRpjD275hEV5iCgZvxfSTnGQ4ZeDCeVCZA5adMF9pjJmwj1hFGhd7zz6yNuMoAy3vMLvbeMhwT3i2fat45MGsq6",
  "key2": "3YVWTP7iFhBAuAr13zjqxH6QDA3AW6YY5Ve95kL4hu7PMMFK4d97fzGm6hNP2YFmARM8JmKcBLHTfcDYtK8exVGE",
  "key3": "3M3syU8mbnKWkHjVxcfo7iCML2RSU5Z3JE2uAjxn4g4HWgkSagvw8ggt5TXcqJagPpcNsUnqTNMBXKa9a9MsX8Pg",
  "key4": "5HaUHB52jgU7taTFms6nnKXnXc79KyoxePvo2YSBFeP8royeiJJjPWiDdJR1jJM174xLLXWSkygaCpotNjbStNz5",
  "key5": "2TkA8Rbt4SSvFhfTpUetxLiWFojVz4teUpKDnVf1jVa2jwX9XiwMi9noYWPcJsokpDXShCsMP5TMNjagSusfATFX",
  "key6": "5z2pLVo6kxtrgJVD5sawuZueZSsmJqLS5UvLpQ1BZpAcYjzsyTscUNqE9khgf9nBtvamVhdxXfFRRx26tS5A7m4k",
  "key7": "PiFCj9FPehA319x5gHeKdrcFzhwq2g5iywM5oxNCXYHQKrE2h87tS6rLdr9SD2Mpy9hiCc2bwJXPF16uTD8GQVB",
  "key8": "2jv4mHefqqih6NkUtKMa1gkmiEuGMPActRhe4NvshJtgLAa39nM5Q6M5nKNtXPTgmMvienf1rYMt8wKm7TXiBpWU",
  "key9": "4oG29rEvBi1Fsy2xwkTC7m9G71GRWkHstF1KCQLbUdW9e9fhYEEFTW2hX9EzgMPG3nkZiWxNEgKkDdiPU27KfguT",
  "key10": "61Dt1A1oB5gDfEzrCmJCdF2e3vL3fHhHm46Rn5cFHoNP2AL65QeVdZnn3WpM1niEYU7BNaJyJqTk4fbwPV2JhQJm",
  "key11": "5bRKbwynxgHxwLCv1kvTGLYvCkFAzgMHAv8xBoEwXfUKeWRGkScZgDLEs3yQYe6S9DbpBU2HKSRfikAMe19uWjot",
  "key12": "BSZepB94ryRY7hofehUamnqmpPpUGPVY3Yw68xHC6t7ggtJ7A2axtbhJNzGrbw9mmWLwmgaLtL7kBxWVdc4GLcr",
  "key13": "3jSdGk3mB5ftMThLsWcgSZKCHnE5EqJccZjV3Qae8zQEMgYiNkcDByd3sbo8TynhLRPQMmWvAG2E68qp63vHfyhs",
  "key14": "5RXQSjAwRGpCePz5RfupfGm6E5BdnuRq9EGCm7fa9EDqq1V3s3Y3yZXc89FcyBZG8auSsuZ7F8tByecViV7joUEq",
  "key15": "5uMSMhCsYywmJPMRkjgGkE7ciZSg77F2owneaMcYhvgY1e8ezmzFB7NDvopVoRJEiq8Juh8d66Pd3TQcXdDKLZdz",
  "key16": "t9odXBT2bnWu7qjzMn2TABPuCLdnd9wG4Cxe3un57r3GLxjrsEjJVk4a5NLqF8BTy67pxw3Wv2DpGuJxD31m3Lj",
  "key17": "2LK7TdC9s9T6xx2gSmhJS8GQVkwxmpxyypY2J4M5cpuq7LyQQG54u37hN1V4WVtW9gjCkTbLapRVK3YmAAD2NQie",
  "key18": "67Rwy88FQ48qhf5NaTTSZTHucsnUYJTYx6Es3xV1pabhou48Woy1pnUzTYKUaK7moac3d85AcVG7eYBp71HwbdoE",
  "key19": "5uwxdd1Fy7ctdzoePPB8c7mzFrvbe6f8RsuBbznsMntVkT2Snyg7QgtZNz6wWGnscrvtnM8tMitnh5FhGjJcVYgj",
  "key20": "5XwS9vVx9zCSgEqccNXSqLoHDnF9KYS8g6A8Q7VBKhPchp3FUrvThw38Nm2Ht3Pv63SXbaUbxpbzNTW1kRKSRVk7",
  "key21": "3msj7DNq7JEtnkZbupsMKWZMaB3cKBoQftvfNa7ojoXezWed55PYEFfgt9gGTrzQQvVmTnJ2bceCGgwmWSndyVV7",
  "key22": "2wMxru5MeGwh7sWzXRk4hmQrnqd4x9rcsN8WpnWKQiHn8JFsSZCAmXeHoForquRy21KSRAt2rVNWxKdRmmHVEhYP",
  "key23": "4anXu7cywd2W8NqzWVuvMnoXbMUoFdCX6VBTgXpEWrQioX47sktrvRpjHPPgzzmv33VmsmsgKzs4b96kKhBGAQQg",
  "key24": "2do7joEkTiQHN8bNkZTrstiY2dmZXzPBfUiEnjBizvQfQBFTokUhFysB33gBYUS6euYHzZ6eoegeyWHrxvFBdb4L",
  "key25": "4bhxA7LQSPz3y4bm7bH4M7kieHC4UiDKAQ5UQqgNDkeucGBncyw8zGuqvifYLhESWaTZpnpGNsgp2Ymp1CsXbJFv",
  "key26": "Hqd1seambp6PnPoVE6ykyUr4YgXJSUyUuegqezfw8dKjyXdbqMSsDN46zhSGpd3VgpiKvdJDZiuLtLa1dXUt84F",
  "key27": "XB1zbsHVQM6pGMzjAFAoPxua3PkabFrUycxC4RXDBkgYyuYL3ecehe7bsmHHX1bvrff3oQK7PerY6v5CTjBBje6",
  "key28": "48Vv2XzXWu7TUGvcVprNTBrFETDTQxBtaMDsBvdyTwEtcLYPag7UfRVs4n3udY9ESfU4goLSn6QhEQjT2135Yy1A",
  "key29": "5ErV4k1SaDKMuxecqM1Hju4hiaLNg2AHPQnfYcCemgPjBptPVmd91w12zSJx27Jr7cYqZqxXgZRk8BhWdrGzPNkR",
  "key30": "3APCTaptpsxM4gzqimJtdCPUkgiZPHvYWYsLnKxTGTxJ9A1SzSSE5kktmbzVbZqx9vQE2MVMjL9w4BJweaeDMKtr",
  "key31": "5MXrXLr7DgJDVp24BZ1Ct2kmQqBqsPYkLQEpS8dGVHuay3qqrPPCktrAaXYUwubQQR26HGE2c9WH4t72Ezo8vm6n",
  "key32": "CoBnRuSgtxVPYM5VaUtQE8Aovk7FVtne1o2qbU9HHuxNBCSQM9V911ZHfSP931nqcPZ7uztGs46RfXS3CJBBsFt",
  "key33": "2gx2bzK8FgFtBdrrX22xkFgfTBujJZyGJyQRMUsyu7C3YNHqm7kkX5KDarc2mK9GDMTjHswwNfnw6ipPx4yrNKp8",
  "key34": "5E46JRbS4UswMMxDVkLkzcgBnP8CNXQ8NjYXy7gPRuna1mfzbmY2qpnz6VA9mR4KUgts4QfZ3dmC3UQ4gwGeaHtP",
  "key35": "4c2jsZHMvxtLh3D6XLLd16jSb3ANfkYokra6Cp84cFT4w226Wh4X37Gytp2Uod8oVbdqzsWYbbsJTXyRN6aHjpFd",
  "key36": "4g2819nt6RQz3AN3BBKtWrJJyNFqYZY5E7cbNAu86mddnNQxvUMugQ3YHX9M94dVvm9tf8jGMtUbDJw6MkGf2HMK",
  "key37": "22e6mSLBoDWZPie3JqHQTwfVwmfH3HqFvzfygWvnDSM8WwtcmoN75GFfaWrfyRoiCD5RNKhQeHabY8opuXpFZV8b",
  "key38": "3SFD99vrBSNdQKRPdfQXuG5CSLvrkXgaGErByGeemeSrASSujtPxVXrCCGsDvuBxBEv1W5PD9XuFBCSYuoW2en9Q",
  "key39": "5ismDGysrpcrPe2hV6SqPYaV9XKGiF65hB5GtcUFPfQkNxNczsNBWDaEWvDaERRd7BB2svsbvwhUGpNgaABKgN7o",
  "key40": "4QRiG6UiUdjgZndc8pSqYcx3coH4eCjTmcgeESRzUCmzLJn9CSoEzCohQ9ruERuJSTj2LnLD56tW1iL17VkqTWXa",
  "key41": "5a3z2UumSu2qhNdzxW5fUAuT1jzBxjJ6MUEsPKeDUFmWFZhFjpynaZmf2znD6Umphw5LoScRpY1rEyUQps5zqA4Y",
  "key42": "2d5N2fPHhiv2SUcbZTsdqneKCqNoYgRwaSAp1fVxsfmo7HXiAyLLAATQBrwCsuwU7vvWp7bd6jMFyRa7syZSezZ1",
  "key43": "5YuMwNBd9C7fYF6GDMXVgBUMi1pUqiS6dgnx7ZAdMAdwDZpyDFRDxpKBjs49Z6hPP1U6yhHQPVLuLVUKWw1F7Dti",
  "key44": "35hizVCgJvyntBDZv3SeCMdfYthLBkjHETsi9nNphX5CjPbMyg1WtqJyX1JbCp5nSKJeaRwSYArCSbNc5RwcQy9T",
  "key45": "3ogzxnQpZYtcssDBXebkasqcCGXbHp9uJ89iD9od9CiQLjtg4mPNTzmLrqMdxmuRNZuyY5KfkzfRA6MCHa2xQ8bf",
  "key46": "Nbc32jBBfA8ZHiSHwx4NJhSTzUFzhEdWRDUNtBsxFwRcVp3EDGBGz72wfBtzogzPeWx8E2fM6efxYTcSchTDUL7"
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
