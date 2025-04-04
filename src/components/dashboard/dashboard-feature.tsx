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
    "3YnXF5dSHEfWqS3avMgxEG7bJ2vEyYULReX8KQ9jSkF3PwvDxhRUAhFsS9CXCn9V94jUM4SYyHuxcGQHEQMHtyzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NW5UUvtbR4FXFGRiLJJ5djboVCm7VSgGfZzhuruEDASuhoQJgpvXePzZ8zcYTFLLEF3MTbn5oWZxqnfXYvtyyK2",
  "key1": "3cH7Sx6orX4mX9Cy4VoQ8pGLmVDUd7EZifNgQQAzdEatEHq7f85BSahVWhHqTYj8z5Tw8e1J5LYqYNbSrBjrMag9",
  "key2": "HQCFh8sUVratFZdugLjqvUSNLxWnCq5JyVDtt1QgvpAi18JPJcfhBCuEprCXJDGD69h19kpg6o23Mzgh29GsHYQ",
  "key3": "2Wz5y2NY2Pyee3SHa5dTCiCm9W4N9oofX9zS1tXDo89iRyV4nsxsedTD5nMpZaxXu9ebm1AWGwXcmeMetLy6icb4",
  "key4": "48PiTUFzrzJu8REdg6JfUhr2wLsWtfRndnBsgZebxsMnbMStCGw4echSkHfqtrnFoVnWxzpVLLronwfgGpMSfGdt",
  "key5": "4ZqmVkmRcoCJmJRkFwJonc9DWqapHFQ69VL7owHEE6GL2DNc2qvYsoaweuN7RSGiyJ8kKjvLvuRFmzoxvWLBLKWc",
  "key6": "548ESjFX1P8LR6JcPLCHtSufzcEN7yW7Dwt7cE2VjPonTuo3XwSqrbBrL1aWkwDx9QJ2m4PRkHiUQ7KKwG7ufLx8",
  "key7": "w2FsMUitwB6tkJqSvuMuL9XAt6MEXyqsfTqAMm1xiyrMJHRqAj1q7sMJPc4a8fbyQ2PJ9WCYQNPq6vRytEUuunj",
  "key8": "4xks7MTvLYxS3pvsorhtmbkgNkS4jsqrCknr2saaocASdGHpgtWHxxVzMuJmiFNswZERfCa9Vsoq52SuJHF5HUvf",
  "key9": "5sKyM3t4oPVYnaD7o7PuyUb2UnRDfbwYmAmeAX1QKT57cdftHc6stFk636anjWGK3YxxSDqtbKPHNQe2zVNPoV9j",
  "key10": "3EfZjJLaJWovabk1ymr3wh1eW7X711yEM9GcFnz31QDspJvvLmDFc643H1Jbu9cDjQJAcWRa7S57CD11zMhxtBhB",
  "key11": "5eGbx3v2gC55A4zey2ZyLViPD3Er9dSczu7MoQ1pwiFdAYE4Ng4rzwsxe3WvBo1wuZTWDtsnAMa6ST5cfxXfqb5D",
  "key12": "4i97YVDK1tvKR5mZp8cg1uq2WmFupugGmL2YbT4SssGpEa3FrggEgxsfbrRxR78NpBvpcs8vws5W4Fzz2DtfS8bE",
  "key13": "5RXjCe1WYWr5V7wepu6vsCMqj7ChW67tDeLQJRfFief3SXExtmBmt5HmzxeUDbjM2KmwaUQkJoF1akxAvLgbJtVY",
  "key14": "qjKMZ8HKbcy2DVMdMqhbxspZ5paCxFxw51MRi9aAj7gy7bch3AwVuUKDaJR3Ewnph3m8Yf8EtdM4NsgYLdPYzzJ",
  "key15": "odD1K6oEcVRu7UgtnJNXRNezDHETc539RYFYteSxb9eDuWgjo79SMCzJb4jfCgBfA8yFAv7B42yJcqsdLW8vZBn",
  "key16": "26hAqEwgiCyBrzFJFFc7teY626ukex9kCgeTe1Pr64DN4676iJKsxEWRY5GzQPBgBQKNZ9hcJYvRqQWsjFpyvKde",
  "key17": "2beX9vS3XKLnPshHAEiVFqEvdQYkhft6txMMiSiVsRN1eW23j9GStyYxm2j4YRHZYR1DCA7v37bbR6mWJMKYfGqF",
  "key18": "5suLbeALDufVPx33Cvsxu9GRdKDoWFgmBtLNPc9Vu1GuaMNzG8fmKjoi93xBekfxFmLvD4hqWQ4n2tYiWBswK3Gk",
  "key19": "3UR7SCHSiuX25U9YFAFuJVW5Yak6YwRvmysf27kSRL56iXpwP72eQP26YwmAFPtpKVJecs7HPNKLoDwdnh9apZiB",
  "key20": "65DLTnzmFwvj7vc8QkmuDHWxC1Yiu7nBn1JeAXzStzuQ3Z3AB2GzqauPvWtufcBbdFHK7RCtZyLoJ3v6oq4TFPf5",
  "key21": "UfYg8cm9CVJhYUyXkTZriyjBXVg34RGEa1853huuB4tkXJzkYx55U5Ah6VxisHSLWLZshC9XUWQ9xCgogsVGFAj",
  "key22": "4p67GrTgmYukZwRDpAVHm2Csgn81CcfU76cCYBbS5tQeHJpTaHkhBmNJahgvL8cymRkwtP6b2m7BYywHejS4MkDH",
  "key23": "4d4uEayQL3K3wKGqkXjKaiQEXACgPZhEMS2w7QcmZ5yi58mkXCZAnigpyxSyiyKSMGYWfnSSKTjq45j9GUofxsk8",
  "key24": "2HWf6cTcAAJjw42m6UMiE1pqF9bsXi3ijNhRw2S458KRZFW5kr6bVGFoxdKAv21W64iFb28y4H3h5yxsFTaUVc6h",
  "key25": "z3zBp982wXq2iWbrWzFDWdfK64pjEws7TxebTmGQATVz5sK67fZbkm81b6qdvTmZizhy5wgu8BX8uMU8L33VQvy",
  "key26": "45jz7ZPn7AwkZF4jGe91Ekz4P54JLsvJqKygeDQxfHnGuwVLFDzbRHbn7JRdt2jn8X3jd65JhC6rFdsmWdDgdasg",
  "key27": "4Lc4TgUCkQj4xEDSoLhKkrqULdFVELJJ1HhbwD7gvKxbAjFiKxgbwhvbpsLaamGMSvXTNqZ7DKd4VUzvHNw3Aq9K",
  "key28": "3KaGgn1yZgAnY5Qcj7SAsGueEWcjaLvrHdfkcYEPZPY3NMfH64UzSSuMHAsRqv6wgFweR7UwX9K2hJgutgMgs4Km",
  "key29": "2SgJDBkHog553kT3w4muvi39CbVtkVEJ58DzQJHK7rkRefhMN2RcSPQESHPf6UUWLe5WwqHLjogxkNjbtEJwpfe6",
  "key30": "5kNaAictH2cswLmaTRf1J5pPpW185Z3wXEAEfzBN2VzqApPa34a33FdNH6mX2nzuRmmpC1WwLtjZP5vjYFZSXxRq",
  "key31": "3dbGX8jSQJHqs4MhEDbrnk9Jt3SsUvi9Q7cYUdrNXQDtfBo4HSGE9mFMn2yDpCoNt7GwuSHfa4qH85KcW3fcdFK9",
  "key32": "5nynBoQhESjZ8E8oKG9ij3PPRgmLqxM95t5cm1PdQM4163CJryxCCk4rw6YuXHWMxD29c5aDuKwFqDwrNVXsVhns",
  "key33": "2arYcmyFz5AaQ3qaK6JXUGxuqSeaWhSEe1cUCV4D4zVDDePEqKcWDwMSXWPCTQfbPBAKS6QBezEzP8LAstZ6MwfQ",
  "key34": "3jEjc6gDoMq6L8ZEMaujTywv5w9TVQnaAFrSZXbuqcYeyKzfiT1thFPkqzAPRHf3pMJxdRgLcUe41L9HYJvsdEhi",
  "key35": "4v7F9f38ft1aCa3hcFnHN1gPpeNZpc7zyr5kvBtJZmtkSv9goYnku8HDiJNTaK9bmpJK1bFChkhVzmbHh9J61hvh",
  "key36": "5o9rwQBu146duGYDApeY7tvnxCwt8BDc6wyXU93a6DypaLcpCc3aoa3jpmqz3WLPB77HMHJyKcSLRFpXFjFsZwKz",
  "key37": "KTJTE23TyzMrkkdyLs7oUYHRzrEZMMjqsr26FTDyjVz6dyRN82Kt6v6ADdkpRiFh2Ncauy142PSKskBXPY7RF7R",
  "key38": "4a5VM4yxLYUQiNzsw2NX3zc9kumeSVnadMEbanA9xMCv3c1dRp62H1Q4o5vX8vAprSGTAyBJE8yijtV5k8MgiQ5v",
  "key39": "3XRrK9MJk7GmxQUN1ve2BWPNkZrigfevFia8xjgjMkJ3d9wiE3F6PZ3yqoveXMzxcThV4SDWmtkaFkZJ7hXjCC94",
  "key40": "3E89Bdsef6YKFueAStJdXkDmoCEbG8LQxvi24GE1N4AbHURsNtztdMXJHCtoj9NphAviHzFJwuS11MgcXiBsCujv",
  "key41": "59u46EaBGYtjfKBN6vbhqiTuNhc8V4F5htJHY1B1HYG2M3Tdv3rRXd5RbyqXroG4zuZss9Bo82USBwbqfsfU2NRp",
  "key42": "51uQjnJCCNVm6km2r65vS4Jr6UWzGpikYCC3759a2bN12PUdxFdUC2WGv22wdCMn256Xxb43JRVGg7Xmnz3zuVDM",
  "key43": "3r39DWZLD32k9vaANDTVYoSy54V6YFuh5F4yNb68zLezKC7DWAjpkB5NtWCKfXg16PGZQXaA9sV6U7FyBYmwJCZr",
  "key44": "2RfohpUMVXTKmv1afE2gcBapJhCkq4bZJ6TWpMVUt8Uy2Zh2C3jgRDUFnvkHeGrZqt41vvAWPAFAo9gY437XqHJb",
  "key45": "3RVtVVcGXYrXaensVh6Y7YdDxpU3LpdLbP4D8BEBbKPNjpzh36M7MfuhSizLTKAhi4hXyWvko2mmMM5FB9vYirgC"
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
