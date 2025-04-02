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
    "5oZhLYkwTuTXzXRK1scATr5KyQryGKC3zvGJbPRSSwtQwfTxTqoz4is5ys6djSr1ejKBUn5VBAnJpeN8ns4eAjRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vVjjo2B3wGvthLpAK7xFWF4CksMScTPyFfcKZcoGJxBxq2SBJxwwdMKGXeyF8f8QRv7pjFjV3rskLz4dHzpyWPu",
  "key1": "4ZsVAJJnuvDwqjKr7FVqC1Tax1Nf4ypjkMWk7nLPS3s1T2p2ep3Uo6J6w2Zeq4DbJGo74G5T87TrC2won23S3ywt",
  "key2": "2ue8EHjQeUoUa9EBwT4wSEAf9E6HHmd3mMoFCFGJC1c8V1rLdpwBBrFuAHQJJvKTgvYMnzhTJiLn7qwPF6en6pz9",
  "key3": "4GVMPDNMPBjykcKkasHhbMBT6jZVrZY3MkXuakrjf1pdNB761YKyVqURJ7BGR4QnpCPypXqzj58tvrLhHXouUXWB",
  "key4": "2wStLLn6CZyvQDFda2M9Q5MhzyXrWVrVkxiCX2ioBj1URCJuZSXyDpE98A618i1D63oywPVrJRdtqAhs3EJ6pBba",
  "key5": "3QwxMPb1BHbttEB8GgyoxMUKUyvKic9R87Q3Q6JFUThEe7FBxoigeQuca8TBhV6m4psXZrLdqkBQRT7WbiuZWzNq",
  "key6": "3YZmykfo2hguEaA4Zwm7DJNaxNhPB7fLZZ3pPuUrodiHe5F75ZobZKUaybCSM6VN9wPw913iXmNjxvempfQhvYmZ",
  "key7": "3UYL3aGKmBuaMS8i86B4t8nz15AyR5bxLNCDkEmB8ENh8Lb2nSrssuJk2WgL53Z14Ww2ZiLFnwd9nj5cgMmZVjs1",
  "key8": "Qd2LBmmQWWmoP1JkPxiKu1uZ4GxfEJA241nsNwC7V7zRhLM1ewfirYKmpUXDvuozDyXkjdbdtDHFhxe4Cf21eMY",
  "key9": "65RzL8dJkvxVKi54yPQPipt6eARC8agZcP4G6jhaw83VTU1Cnc2Qt23fPh94C7RkfwnMtAr7keRjHvZ5VfpP1X7Y",
  "key10": "Vy7pPwrPr5ehZujazDpyQjQ56R8geNTfSxoLuVJ2ejdqKRzm7PscPgCEQ3C1G76qPSHycrioxw44EMQQMD3sb4n",
  "key11": "4ANDhk26GBgNPqXXQ23zcMrrU2Qr6sVRGbc8MexZDCgxVNVqyEd76uSmPoB4EQMbpbXCdrh3ZA743P6nAtVwK2qH",
  "key12": "2DDd88dv57fbFBHfNASnZXxZecwXFnSyo9VUbtNUy9r1DWurs7EPpRXswEFJAj7MFr2HdQpzMep5ymawcbbzj9ss",
  "key13": "53CpMdaXXPxT2APcn2aCCvcDytZZRRq62YBpYKSgrkKn4dwrJPuYM337NQeuKcbbWWJKLWS4Mt7KoeQyACiEQ8er",
  "key14": "637Jb5gNh7PJkYdVk92NsU3DW8FQGPsbFfRQWDZeenkjfvaKmYTw7dBJSV1B31qhP4etuM4qLLVs4rWtZhwhJtTb",
  "key15": "3o6ip7Yshr6xAuqPHa9DAGSyinmqws2281a1ZJog9K2vn9sXHoPkELiCQMnoFBT9z3Lb4LTdxnWdT5BcNZdhwPhq",
  "key16": "461qp2cqTnKTwhbwabBZHn4G7zWUCjfkfteqHtdh4MxdR6QQNy5dDphYijrqEXJcaAHCnGXVAyy5F2gn4XoFruh3",
  "key17": "67FR518H2BTvb9hiXE9a6Gb7wyoBSUysXRb27xjR5LKUx5yGTKW8ACF6qJcu21QEBwdKZDAUCRT7EX8Yic62SDo9",
  "key18": "4d9DZBhUhLBFRt7CFxPuZk8U8YU73X7wTWjxnKNoQBq8FahJPC7BEc6gojkmisMaiaiCZrbkQH48tpe27mMKD8Fx",
  "key19": "33DzpA9pAX9MLhi1eppVeuD56tRH34637B8JcYGbR8TWBUNadJBdkDokHxoWVpy48qKe9QPVSfLzQTzbdCeXkGBM",
  "key20": "3q3uXBsw8YrTrZryHUix9WHboS5Jqoe1Q7dXPujtXFmAJTkfDEywRrPbkc2fv2pLTDtQfW2Mhk2VChWe2aDoMcN1",
  "key21": "3ToMK4KyVv4mZqhAomFKyGsoCPaXySK881hPAs7qqNppfEgxrGoPU8u1zyced7HCdGyoqQpZkiH6ZRQUvc8CVabY",
  "key22": "4ZU8jG3JnKoDtbYv3zAd41ZNGtZvdFsNku6d1mnau36fLbvd22FcgMhb3VgaT1QgCNk8yxhu54ghE8aveMKaGbPJ",
  "key23": "2WjgJDr581TmaDimSLygamdpTZf7dZVfJWyRN4hLM1LhkEf7xMD5gvrGMNovg2hZJo2pLP9znGwvB8Y48wTKTuTH",
  "key24": "24WGkUDVVetnxP2pMe5jNAMWPA9P2ux7Xt58AbKyZgfiu6XMVn3E8LGtaHA8AGV9udH2mbY7njLj4hA6JFod29u8",
  "key25": "tJ4aRdUod2jRr1TiLuyFx8Ubt8zBpsbbdkTHwBmSycLjtkWyUXbtxCirRqTHQUBCXGigTZkum1rRdAhuax55LnK",
  "key26": "3WBW1WsjuNKp2oKD7tb5ebmQBm2MQjW4gn3CkxJMuhTX5CBfDXdLWr1DXCKZ6jA7AHnEg6BEUC8gYZvbX2QZA8TB",
  "key27": "4a1cqam5ArFHMSiYC8dsyv278szzXz7HEcuzmcRyZ7ss8wPxLL5gNMDj34ZYz9kNfaLr8aGe5Vkg1U3seV4pb6Xw",
  "key28": "4W8wdi4c7jm4aNW14VvXcWJ4xanUxg31q8TuMmXqbGuDyoLC7X9pRRAm43DEqa2pgGXTVc6te8scz9g46wf5yugm",
  "key29": "2aC8bsHWsvzSqHMnWdadESnF11VHzSVsUazTnTiY78dhrXdbsPbX5DJLbx4rxK1EGfWBwb7FDxdVdsZxNJvSorei",
  "key30": "gTaQbvuMbpdyyFKt4G6Xk4mpW8UmbknHHzbbmRtdNBAf6XskLUMZwoQwNFed7owHGLZCfNverFi6HnTYwBF8o8c",
  "key31": "2J3ijiTkwVFwScWGuUXgVRvQwpHijrPobUGqG1T4tfDBs1zAMT2FtjpbQA2Xrb1GitNA2wPfVYyqZ2ywGsBEgcU5",
  "key32": "2pZUEedNJnb1ZhwnMU9K3HhERaiLMR7Pc1R4ZN2ufmeHVGUN3Ukqb3ccDvxHt8PhB2tsYAftPABLiyP5rCeBfUd2",
  "key33": "2W8BNdEhR4fmyqqgUHY2GSzz3fTxHKMu51apsPw11YhAwfJzg4WPpinEjP7reAkunX3ZyqmGNDFdExcUNutktvuU",
  "key34": "nf324Z2ZRJcr2uEa3Nu5LACBeSMkbZXeHfiyHVG69HcfVL3K7C4uuXPANEQBrNBvFQRBLMWWUHZaHUXVWtdLbim",
  "key35": "3A4J1q7za6YW9gvvGDnamVC99uMr4W9K56h1QR83yavFeHebepFgRCXSGqy54fqDJVzFrTzXLRMSRdRYM7uQcdQg",
  "key36": "2XJyk9r6psZtCP7FXgUU5SLz7vtw8f6ULu8TUZNz6WTAFk2QzaszR9ctuvoMHQiqQ1C7kUwJrPPSRViiM7iBQcAv",
  "key37": "Yqncc1TdhPSG5jqaJke1Uf7MeKyViDsDLTZtiWfZHMzT1ZSd5jvXvt8N46ebisiVVM7QxbAR5iuctZ2XmaKGzaT",
  "key38": "PJ9Qj3w9U73c1J57qQV7SmXpqCuzFzRmJsnFpGk922tJXBmyNCuqAXpRHVzHSnGvKGvpLVECh7q3bfW4G3pyJ5F",
  "key39": "kWucDeV6vA7WhmZtYT6abrxAtoux4uhXjdgkeB7wDHf9b74MdxxkbNj2HvNkYPryjGL8rfLe25uJZsdfmh3MM4q",
  "key40": "583LcBvXNiWgY9SYTFCLcR8sSYFw28tGg367rLxxXKzEfrsyWUob8dA4rmYJ3JLveW13LYKy4DH2VqEXLtkiHA5Q",
  "key41": "539vxdyBR3hpUDnnHTg3m5wqXnLnkzDTvhfbjZsAwirskR1Mwdx23EEa2rCoCEpwictrxnC5YT8k4kMxsx3AEvvd",
  "key42": "3Ls2qNJEhR9RrkPmY4BFKqccWT3tuGPGRDXCrKWcf6gZE1hUUwHLabbZvtK6ifeQRUNM2nacy8wSSH8seBYZCfiA",
  "key43": "5MuXKbAc1YqjKh9oftaRMhBzzrMcuU9oxDEcBQX6xPPw3MKgdoaoHhvkUiMLQ5gg7respfG6Sd2Ef9LJCgJaFsGm"
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
