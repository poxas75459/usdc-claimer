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
    "4HFhKZM9cLqcsmmz3sZxQ1x4NR41LxR1zrmDCUF82pBySU4Uh5nG1HcA7fSb1AmtSB1QhSGsWd6AqBrRs71LoKN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vkc1YJU28oUKW3mrDozuLj9XiUKhzDiz8n1xk6YsZrbkMy4ktsbqoDEF65Avq7K5tPHE1LsuYSiF6BS9d7ibahE",
  "key1": "5KQqNtg7TB11hQtQuCJzcEQCXjpq4UZsme65ndLPTJ3avjXXwH1x3DrtXFxXNDQ28FtVu16xic1V4rdi2thE7ic7",
  "key2": "2qWRX7GgKWRi8znGwZ4JxAvAuAKtSHnh2FGgneyh2Q2Zze6wUv3iiS9GKHst9UPryYysrz3G763fNEMhCq9YUVTo",
  "key3": "2zzai8FQ5LwbZac2yKuuSeGzmcKreD3e7gG9v4ZNrC4bRVeTBa1dsW1n3itM7HFYoN9SamwcXYp115JG1cKD3MyZ",
  "key4": "4gJ8hb74BPm7kZLUx4mxx2yVbM39Ds6LppsyS5nGkEG16iRhGkEZ1NM8YoLf3fXrUDKMiXbYJd371z2NHuWPpREn",
  "key5": "YPYu22W7xQHmadfGNZdUayurPRUA3nxGhUQipRvLUQXHdRwQon1ijB7bPnDbXJAvYTMhMJYrSCabWML6efA7NFH",
  "key6": "4qSDsfvDHgsxMuKHfs2Wcswdx2zzzsrVVhjnsdLmsH13UZ8VS8fS4bEfMpK52VNUgC7vffVKgDWcvzyh6bLiS6n7",
  "key7": "2xkj7PLjBeTR6iiQq6vDuNnST3ZyYxTpkqrNbn4kp2caV192CPGA82nrJzcdZ56Mzip7vjSrE2MHJ5ZhoYq39aVW",
  "key8": "KtLXGTXMBUVTtePQ4X7uMwPaL8RmfLu2Kk12wB4RNEZ7xxnhSuPipUCCm8ypoun5JXdUjhLvwvfAdPZyouspDBr",
  "key9": "38mkLpn6LQX4AGdihSWKN4bSCXRMbRSuioyus2rzA7gnHQuhycgXuRVXBPKwpG9wtpUGxQbdGkA3TgRWSbxp1Qkr",
  "key10": "479d4BsDcWm11tgoEcVunXofdvv9iRVkzhHxLEXSXBH9cDEAUNWJCFvyCeQkRfEZu74iwdtxWYMpVMi2kHJtuQ2a",
  "key11": "ob2ryq9roT1aep25hCrVpMTNzCtJBfbejrVBeWRRoiaPXHh8kMNLAx4YzqjrPeYFu8ng4z59xUfKwbZYw7eC8sC",
  "key12": "2QH5cSQK6mkz5vKjLav2H6GQzmYKTqkrhtD9n4c77GhC7GraXYmauSfqFgfQQvmEJ6qSqmv2REWuTcYr72pSXu2z",
  "key13": "2G5xLW1coQ22KQ11HCE9RTNTCqKcpgZdyEmXCHEevXzHRUbNaHJTrdNL8QsxYfvttuN4Ykoiwjv9kakuWPvqwToF",
  "key14": "4A73v994m5J3D3UQ8xkihCHBBkTzq8MwvbtkUyQQPeDbiNeszbJ14VGpCivSbRC3S295D2xFKpqokyAWyDCMK6DX",
  "key15": "GPZ2ZbHUXtfsgn25pvujTKLfB8zgFkoXaBoBPPk7kXT9bHNoBwV8xqfhDVjbWGXokgNBHBwFdexjnkRRBzYPxSS",
  "key16": "KkQWN6Q4KWhUiv4A4FbU6DsvguEdW7i5CWBD4FVtukR44KPaFWc2DHZRVrmmfY6wyFbQwSRHekSeQ6cemNQ2WYh",
  "key17": "3y4nUuJ7Vf59oHMNDtKSv2ofL8MJJrWuRuQjAk71YKzeHo59KRsBCY4DzT7zhyfg5ERK2E1KAczJtEnnarigSkoo",
  "key18": "24Q4oCBo4NNfn9QGnM8uj556yvUJGAQUHWZ16dBK19BvWFS98y2YVBNcrzNvbZdovmcZvvK4iMgqwqV2f3yhKSbq",
  "key19": "5jCsjJY9hgSWg93NMmzkP2KQRTJgHbXCUjp8tKCymZrikTqkYYRgsGTVUSHZbVnywepiaYQG2dXMiWKXAHEMjyQG",
  "key20": "3i2Mzbg1A9qvFmDofZePDJ7LqeqLHUgBLbuVec5MtMqwhWF9SxFodRpDfRKabzcBqFfJG4a77brMMpN1y22SpKzo",
  "key21": "5AGRPXNVs7DxDEWyBH3XVmYS9NbjAfa1qyi6Agq3c7cqqeNwE3gBiQWFzFXTRazqHqywb5NYKM8hhoFf5zDTzuD9",
  "key22": "3i3wNakhH6FdXRmBcH3k7fFNDBtXRTRxRUqWAihxbzgEthheGGymA8AVpthiNH559FxRLkraCEKyZpZnTdPFqVBK",
  "key23": "2AxG9etesa9tMSxTbcMgDovp4KrFWXBHDsp1CeCuY6BrxcT4iNt3FppM4uGrRMAV99rEuQT6hKeo5ScxA3hxGLEk",
  "key24": "2x9uVsxREmKBtKUJke5vD7Jen3pDKefQaPySQuhTuJobF1heuAPChixnMKb2p3XA1LGzDiSBpUkhHP1JP3GMCh2r",
  "key25": "3ivujiHnJbkkL7mKbJrQAgfSnVncLuN7TWiqfW7xaGnwmkg6GAYgFrUkqMQn7bVtD69mZsX11eFnPy3Q8gqKHc3k",
  "key26": "47Ut2wtkkC1zzwWNEoNxgSFDQTx4seoXsYjMAjPgAMYgvoFbSXfzGLqUWLTfStuh19fimFPRT58TZMd7FCa8pSJc",
  "key27": "39U1dXt7Ws6LNGQEteqrX21Y7Ev2s7KUKAnhxD2hKU2NzrcUr7DyhYXSkaFZqktP4ghFFWXJk936rp9QEKoSSk5H",
  "key28": "5yoMBVyqc5AqxoiXhbEnAVkuzTdLbfCC8peJCaCzV8b75hxdgLhVZpYferbUkbpMe8BuuHowzND4vdkq2xL5uhGw",
  "key29": "3W6a5zaaXsViecPuJPSsngTvxx9z6b54qvrHbtjjFLXyqd9Sww6arxrhhkE48ReffcsyzKSBnSNSzvQMBwaCmuko",
  "key30": "3sDP27GuPHWHua1g7GeuJMTtfwVdv2F49JTgRpVtGFpmWNBo6tZQwdfv4ozDpqNa4u9Uj7Hf9ghq1GWL2Jw8yzsu",
  "key31": "4iPUXA6QSVe5G41r9Kvf7ZwVt3Xn9mEoT3x7QXq37FDHe84zBVoES1GQWDtxTykczhPVXXwvXfrrztqcHx2GRNTJ",
  "key32": "YJujDCLKbrxHaxEPrxtchbfN9PAWUHYg8uFfnCSr3Sbe3N4D7ccc5ZFHtYLheGiSiYw8C1LzZ6LXXsfAsPMZm3g",
  "key33": "3tNx3GpTRHPiJ3BH7sbt7msprKfgax5MMrag8ZwG7YhjGFrgVhX6z6oP3VpSKHE5tuCjeJFWd9MtfaRSVsQ9eAAW",
  "key34": "57eyRjDwDFdNJF1bQVQBH4256toh5PMs5XphZU9r4H5qwJ4tkYx7sJX9udDR2s7TwCEr4DznGB6g3eLSzWw9vbfp",
  "key35": "4GbzWeuk3RexnayNpmCG6i2AduSNcBdyTBnN8ckBwPxqqWMFAs5mes6wXNsbEqUxKdsXL11znokdWJvatWHyAYqH",
  "key36": "665Ky1AsorLj8De8o1EsTfgrQ3iMXugE3rPmYQGCrfWHbhifccr2P3j3BB5Ub9M781RiHbbJsBwTTHDd3VfPXkWZ",
  "key37": "eF3obosJ2H3kncMsENApY34qauLZmR8APTETAXoUHsQzWtprtKXHN78G9cfdiaDCFu5kckyHwGm5vg5Tr4qtcFB",
  "key38": "3XcZXyEccsLuJga1oZuBNF82rQQB2oZoj6Aymnr3DqVqV2Lybrm3gda9daMzJqDKVVVn9a3E8WcRX8CUfRNzcrbc"
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
