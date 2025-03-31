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
    "5vK78DgbWASSrmd2BphjfxBUpbqGELyzrCimrqwXs5xC5JjpXBPXkoxq53sS25dCzwSXui4CXh5TYS6zGYGvYVKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WE8NRFdmmTiqTESQSNp4ErJebsCybTGSfSZKxTLgkoWQQ32z2shohXkmvgLy9w6exSGG5BTPRv7cCX4u8ai4gt9",
  "key1": "3r6iMjXCaktW3oGGqaeUhZByqyd66iHpV3c274kGxbfqQaMMvNryCjrQDgFG2rcFsi3w6pySgJNPRwMbYfyy7rP1",
  "key2": "2i19cHCqy1rjSajg9JjgnBaccR4itQYPw4ZsrHLM4yLvkTVSVYbJm9BVBS7qVTSeFPjQauh6UsDcuU6AjCXzjQ8f",
  "key3": "4C3h7AK3TrcyknqHJcSNUXDbyEhfCeCXsSkqvGYzpFzH7i2a2RBKeGfBNBD3bkzpYwmaAAYMZuFZ2qKKdRVoTwie",
  "key4": "8H1VXdeptKXgyjXxBgMeL3S3muYms3NRA1NLe7x7AAxc83cPU1QuNBDhoaTWaUZHLVpPTaiU9KgzCbb7okWT7xz",
  "key5": "4Nq3Mu62og4Wus6mT6KuMC99wdrNAL6vAt46fWYtv9tbfL6LCT46juosoy9Q65ftnrM3xeMCNvKeHfFPxju2ySbS",
  "key6": "44n8Je2DqojisVKDKn9SkxvcaV3ts87Mjy5uX8ndY1bZE1BTNGoDeAbCWWsgfk3wdyx3SpV8XkytBK8vYD3W3Yft",
  "key7": "qZ25hDcS6X3uA7ngjwpyaz7AGWAmoPicmP5f4wnk6XjJmkS8kMyLjy4KRBceFYLDpcaMNJfoZXPJYngAqT86MDo",
  "key8": "2LAzygPVht38hi1efayMY4yH7sF7LDB96GnsLk7acBa2JopSeF2Rw7m7GksZjsMowtXY7aMjPkwS36uJbhc5AwX5",
  "key9": "TY2kyeYRSCUocmRTsKBiafVneP4Q6Ld3HTAhPWM9nB7LH3H1rHqoR8JsiWEfdDSWkH4rPraWzDVAo7bpcFZ8pnV",
  "key10": "2KkfJBsu8PhC7FE7uV1sYM8eDdBzWMdAEi94pEM9Y9ZFgTbZodVjv3KJ2LYBLec3CWzn1vVqvgRMkjSayvTzJ7hz",
  "key11": "4tavCCdHuRmJGkTXNhRdwydRDKVusoMst3aAWvyw2Cko3wFJ2uYBHZJR145pdYFctg9yysnAuomuwSs3EMKMZZm8",
  "key12": "5wkLjU8c9yemTvPyCdmUsg9qagdz1Sf5UQrpwkCJR9cVrceVDMNh7tJL6MyfLs4ASyt3oHtT7rrKDLRfRTB2Q6id",
  "key13": "4HDhvBV3cy4BD5axmV9B5bnWHbsSLemQfKq4y5GUy5WsmH43RDjCV9dYat52B9iq923mZA8ns1LdS4AU2G4V8bgi",
  "key14": "522Pu8g7Jk3X9jQ7FEHR8QbwkQvMvEjTtaj8U4LoZ5GdeFMEpaxeoVrzsBuX6DwYqT8wDFcABBg3hToAVYbDVtaE",
  "key15": "biNdidtqi1XJHsvqEaPvSNNtKH5RM5dWnRRpJ9gbmjuKNzWobz6JAyoq6TaSEmrqLrEkNwCm1EUpGBqh961sRU4",
  "key16": "5djbmun6VFfzgFVd3VunWUm1XbHTusHzhgFA3YVj7URWGg95LxB82CCLrGrz6zvmXPDZPY2tCLPUAnZyGBadQkaZ",
  "key17": "ZL2pPERfBSvETGZY78QmfZwTk2Fyyp4shkV7Nrd7XUMJjDkUq4KzmHrNAHyQUdYSJK68e2Hud8yEVepMg69PEcR",
  "key18": "5kN9cFshZkzMjA7j9hEkrbgHdPFN1yjGBhFLhg4hSBy2Sr4bVXyFbuuwKEU4cUyJuxFVk4yMVcFCMLQL35keYD6i",
  "key19": "vHeu1vNm1p4ozii24jCf9SzJhetvpfXbNy6ixFcB7cTsyx58iS3RZsxyFWHtLicdGiUhfjUHb6DMUamhTkAJ9aZ",
  "key20": "5RHyzJ8QvYjeWAqsCi1TWMkFu2hR1PY8GJ5DGzHoMKZPtsDrrT8qFBhiJX5Gxa9bsT4fW3aaWXyPTeeQr3qydzhB",
  "key21": "4RH4L8FBeURAesyr27pKx1yDQTMhRp5XFL4cGyQdovc7yE6BA7sniLWqBNMBryhToMs4KweQYkAB3RC1MpEgcwst",
  "key22": "3UoniwZ2VdbjJ5ZPsRorrW5iYmmNhCwatnwx4gi8xab7w1pXtzJ5f2cocwpfZjAPHnkqJiPTcZfUv47Z1ZRPK276",
  "key23": "3t5DSVepSXE71zdBrDf4jqTqNfdjc4pbBTVtB7fxsswHBFzb7PjMASknyrRgAGbvKor9gEWkKwUe2UXC7ntUcKnF",
  "key24": "5WPkyNzRQYbc46yNjStayg7NMvY6XQ7FBiy5CNjGxeoyMtTV12C9dNXX7uf71BmRbQkypMtVeZkCXaXTKvegzqno",
  "key25": "3xWNcFe4bWCvfSUfnpzWtufyceLCrwv4xN2zdYQMAHJbwkf2UVmynibtSePKoTRQSg7LbPLYipqpr8HeSCivsm7v",
  "key26": "51Y31Gcv5Z4Y7WxTYBkGRuVuhoK5ycKsGtXkezPBgpeF5H5QGxY1rbgoQkCyY69TNUgRZKC4h2wdAcbPXaw6fJwa",
  "key27": "5Dx6m63BeqngZbuBtTaQiRvkThUAxrezpkCew8Xww298B2skz1pzoV4wqvLR2CSvYP9WEqDbqbfFY1q3BXTaNMmi",
  "key28": "39ddmbodN55A1ybBqaJzZkSBKiVncXMjTHMP1TDr3gS5sMXR171iEi1mzbbyZWaJuEWpAaXHwrbu3FmZo8ypNapZ",
  "key29": "3JbhULMAWsNTxr7emYrgvFuYu2NYpRZJfzYuEWQsBqH1fquhnpqCmbaqV14hsPdN8FqSW6fAHJcZ18mUXw4GA2xj",
  "key30": "5CVSaEwnnhTQkKMdXTyFeQb91aDxKaDKGsTTLpVuQgy1mTymYS9KtjvkihUc6WYwh83FrtkxEpqFijWWHh46Q243",
  "key31": "52VTukAhoXEPWFRn6UvZgchLQ5V4Z35a3ABb8onRUZHJd9RyPHNLZpQb8CoCj6EVFvr6mMkmPw39Zui3jJrwRg3h",
  "key32": "5bRLgXNi1U2mfjemN13jU3rkyBx61CFGJMvPuBZMzszTkT2LVNWWqez4YRAUVGb4kKzBv9Wzk7mr7TFJN8M14tpv",
  "key33": "5QRGK8PFMu99zvqjBVYLDz3XuaBn5rDuv3P79Ni4dxz2zYSWSUJEQs1Xi2q8z4hjWLkeg7hYbXFUqzvtv2EoYaNu",
  "key34": "KDxHemqWb3TKmPmhZ3dDBDUu9L3JtxW26Ua1ukBA5vmVyvarfyx1veaHjD4MfWp7n8HXXjFkxH8i4a6K3aRVKsV",
  "key35": "KrMn1dbc9JgWZbhkSJs4GGKSBDfB3fVLV5ANJXdnR4Mr5jzPJKruVQPNq6EM3dxx165h7a8B6Go8JxXhHLAVgm3",
  "key36": "4MGf5WZaYCgCWyAawjzaCmcCXdZ7d2nGyTyK519G5Bq5hpDeGpxf9t7RguSbJstXC69zYL3kyRDP5NaE53nL2aw2",
  "key37": "3LBqs7UpX8wjKvcmNjLm2dUre2yLeFwhsTZcmD2SU3kWAFkPNN55tYGP1V9jEMWWiNy2MXhStrENTRaDAWs6LY9v",
  "key38": "5mQTN8fGo2K52aWtJLcuUpEw2FNggfqHp7dSy63bjQUWtWv7c4qHN1E5FV2zqFkZTZeyEWtV8XarLeJcThQayuKE",
  "key39": "kPgiwaQgpGBmHFim3q7XiKYpBmKaeLvyb761KsGcuuCQ5xA5kKunjDeHBFaRUFn4otbnjKWZQ6qMooN2MPy57Qj",
  "key40": "4NhSFye17vy4PBqBg7zEFcyHQZQeUa4YWsNARso5BPFd6SUg4wKQ5JQMDTM8Y6SLBGr69rVidQHFBp4XhLt8unzX",
  "key41": "43Zr46DjcyVNUMKM4J8BkMgtu9erxeoJfN5vpjfesiAkvXVwN8kcX4sYUMd1xoJRgVKyDeWkEJ88JmzknpFMSDtE",
  "key42": "2PBhf4tvd1WJDA3ynbSd4bKAmuqy52R3VD9qBv9ko2ZWRLUzEBaNHG3q4FeRftBtXC243759PVf8pJQxEK6tosAC",
  "key43": "44RpMgnRxBdjLqpK5ULxzzPjC8h6oVnYQMED5TVT4iMQ3BCxtUM94CMesStvAQEimYqBpqYZN4RiLjE11pfYLysg",
  "key44": "249u6DEUnheku5CTqSYoJpdhKKS7hZhg6Gr7jTMKmEijPfAoobSbANRqWw6s6Tzj5N5TeLtXKBctqcSAMJy64Hxj",
  "key45": "2wyGqJeEcb5pHnqTdTs3baqtwerKcczGdXj6hZhTzQ2CVqfZPrUVm4CV9e7dums66D9V1v6vJJnSDJusc7aHWnHa",
  "key46": "2SWjQKV8PKw81r2rvSJFFPgagpUpWMJfMsPqwkwXbtwQyurRFpnsZWpNJGnNEiyHttD4cde4cBuJXeRtQ2dxm9Uk"
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
