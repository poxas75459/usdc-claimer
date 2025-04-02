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
    "2aCDztMdB6x7SGbfDQNzZJaZbzGPry1mU4urVSEckfHhoXjqrCixZTcG8jaGYgnaupUBNMAPxgAhXMpx8EMiTHMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTi2MdgiTUWSwb3gMniPspC1qxM73pDTHRzHT4oB4PyaWqbcit3DsNKhhpFnaJetehD7hdG7aErFX7VLsuuHiFp",
  "key1": "4ovW8oYUbzaLivM2XZwYVUUx7StbDdKg2kTAYFbcUnnshARGNvrUd1r9vvicDzqQLWvcANgHapew4DvrmHJpmfeJ",
  "key2": "4S8a5C1Y5QPyF83M1A1KWrJ2KAUMU8aG792oHtcTkzmzFMfnR5i4aggztyDjxo2GmQWk2WTn4Ev11qRvSREF81xR",
  "key3": "5J7ZK1Z423nS9LQRVTWBBtvAMbyRyfSaTt7k4HNp4rfZRiF44shhRw63e3wpb3rCYX7tJY1UxZdUikyE8X2nVa7X",
  "key4": "Q9LiquLZ9SoZ8WHkrikezecLdG4rzi4DnCJ3QZ4TL3dvjJf7w3s1SBmB844E4T7mzSm4XRC6hxVHKjSJy6H3ZVT",
  "key5": "2ArzwevhczHUCBHdxfUd4NxL2Ux3GppmWitTAnN3EyT4WGGD8irQDUouKxoJUGGhsjQbdF4YZfX8bDqK1bCfByhY",
  "key6": "3nN4A8XbkPEzcKc38ceXQxFMCTSu1AiFoDs869Q2EsbgGKD4CX7CAYkhtcyjZAbVobspAYU9y2GT8QxKXtWXzQfs",
  "key7": "V5Rw7qPE4eE33YALsBsKFXYvGFe1gRu51i96Bd7rybU7PtrsCffv429HSscXM4RuUvES3dhFJ5EgsD3fKJreKBq",
  "key8": "4qcr3sacPpL92tEkX4A8wyyANHtUqa3mXyee9nnbRCMPdwR4cqnToTcKKwQBnqhNTKetGrUgeTcjhub33Bp77VPU",
  "key9": "5qBZaxXQgmLbgxfja4dCrzrL28TrZa9QqYBtKgFosJy1ijizKFPcym3vWL39dEQjpcwogdUonXFApD3x8Sy1Sxtr",
  "key10": "2fEUgdtx9Ln2diPUkcaSowkTTvLioMLDUiSiSr7Svr1UMe9oMRef34AaHhzPYGRwJJWf3VH5XQveqKgKQUZEY1QC",
  "key11": "4Mn6FQyRWP1vHVSMXBMiq3gSGmmG7LVXBeJBam1gztJ3ZxeceB7c7QWmJn3rJUMUVg8raAN98hud6XLv4YqRt6V3",
  "key12": "5AwzPJDDKKTvyL2iwjir8h544uUGC5nGU7dKt1RaoquGVPkBWJ3V1PDaHVK953WyppWWscFwugWEUfeWaAzLmrVX",
  "key13": "Ka2NwC1EjdcZWmEWgoK7Ye5dcQJeJW7tJMxQjnE8mtZaXMzco7rMUGLWyK7pW33a6reC4ggGB9B8aEfJjEg75af",
  "key14": "5Pj9f2vnK6FdHB9rSi8AJjRgemx3TyzUYNDag6PiNdM2ST1xUzufWZqpJmuRfNPGPhgYFtNEAAbQ4eCSopUFva8K",
  "key15": "5MDeGyEfxYUQHKtj3yiDDvLifLRJkQj2RxRwLMNc3MHGVkeFsM7XaX7kUZfTV7FS761umgLLuCUoUppsSJKRAPHF",
  "key16": "2KRNBB5L3ppEGMZHTe1XwDP9iYzbbwmjUkow3JHhy6bx627ZYhVEq1kGXKZ58HZ4JhSVEUwUnpcVrBDw5YY6Zwf",
  "key17": "372BtZjy6DKgRSyDvt2VXtRzGcsj3kNss2gebqqJBVxApmECH7TcmD71PKRYWuM1q2DmcACZqQxuN6LU87M1a6ah",
  "key18": "XrZ19n4bSxA2yJzrtnLx6X3mSnQ4qJX5QdVAnE5Hkah1e61q2VYpSJ1rAE7LtxsxRf88M9UgH2tB3cafS92unsi",
  "key19": "51x4doAPJBER4cFukKeebLTATdGosmGNXehf1vLtVTSdVEimPaYNJ68qsQhuMSfW7pdww3nqvpfoUH1nQqYTUZ2h",
  "key20": "3YLtdjLa7ovo3qsWKRt6KmLGwv33M55zB6GHWzG32zokQpcVAQseLf4XHeo6TF1oVMxT7xPgoQuk4QNDKX1KkeUg",
  "key21": "47i7SncLaEJFfkPU6rT96eZBrs3wHfmUxxFCfo82ycbPorsHLZ5KdS2erAccGYKqsLSZJjKFYKA1qPn7Ykss2KHt",
  "key22": "wUV7gkChZtbDX1nA5y4doD8vm4ndBu2MfGxfCtvo6LKHhxx5Y4FjEN5bQpNoqqiKoDur3ACLDXjVXPc4d7rxBdT",
  "key23": "2hBcJebTMprCPjFxXDzKiMtK35KfnysB6Vskq75zeahoXjcmYrFjooDQGATgn9Sw23YPiv25u74ptSnCTmoZVrKJ",
  "key24": "544YiERnBjttZ8Sdhft9pgX2hQPmNifDUTX91GtnP3dS66YnvV9CBUwHTEAsomWbpwzsBYTcSRgfvbCu17RHoDjP",
  "key25": "4veaahVegHDM2sFQdidDkuoaSwQevf8aCUQZdRhjDRwH8NAZ7WZ4iYRjE5KV5nmZStKozV6xrVRVz6NZQZxX3TMC",
  "key26": "4PEA4wxgqWeg17hPfNrXLE6sXnBNKjknbVvVm21tuZ8sAU1nkmwZdTEmH4WLCiyDNQ64pAo3de5Qbp44e32opfdU",
  "key27": "46tNLuzcdXMrBhF75ZFKnMAPnzfBJzSmVykb7rHN3Da8KXsH9xNZQW41CXXHCAo8JM9YP8vyKgXMaTjAzTUVvPrP",
  "key28": "67YbJXbmM7fdDa6GCvoncZ3557AEEHtUvP1vT1qPAz7PjK1iMzF7MZJ6hevJRmyFkYqnKEWvBvA7QvV19R1Ae94u",
  "key29": "4wGYZi5W4j8hVxmkkTa2HbYCyXh8ZSKb7sRNnQkETZmmF5f42joUPchp2SbmsQ68rGtryLERZeJLdopeYbT4HSDX",
  "key30": "3sxoht97hc6yrtNbcDU21mUFUzyL1yLBt2m9fqABM66XzbbCTCkc2TnHxttqLiJLUMJyMuXXssfmx6Qz7HWPSH5j",
  "key31": "36kEKeVWTbJgWwh1hM7essCLas7hBjY1pCLAfHcnTprRMrWtms56kKaMGqDLfwGJ6iZTeBaUEXuWpbRfS7Hy5JND",
  "key32": "3cdjL9YgUZT4fiyRaszs9TL7muNJqs6srsqPLHL4JZAnBj5NCuNtwUFCpAjN1JRHcwJqmGQrhAh7Ex3ecMPYrM4q",
  "key33": "5XqsjXKpKjkgjoq3o7b81PhYwYdMA7ryrBwSZ9J8e4cqSCVa2sf1pwWwxi6tN6NUPkCtqNpypyy63KeHZw5jTVFU",
  "key34": "4WgL2TS5T8fyHnnpF3TpGAxw5Wq6N7jA814uG3L8kaABJryE58sxY2gvzZjSH3LkZidDoyncU9ni9NcXRs2JPo4h",
  "key35": "2gUgVuWwkYX3yWFP4ZkAe7VxKiQnCN7b6HtBtNKciLEdQJHqBmX91dRFwKFADhcgFLEwNgp3WpGz7C7pXY1MmGE5",
  "key36": "5nAETfum3GJNakaLQpGut1vNd1AUJ6Ate9YqfmyGNi9D85ttPNspuKxHJj56SRmuzbmtynrPLyS28gP1qnE4Xw7F",
  "key37": "2XbVLqp2QvPSGgSkTHaccQkC9qUcj9ijbdrXGfZXkWCBy5H2rQofCWMXxfHA45JL745v88TFEvEB2owxg5b4pKBC",
  "key38": "2jeCo5hpXzuzU6NfcjRcLcCwdoYQRuPkzLD3JsfzAaV16Ex4HuDYwNtDqfzGVT4KT2DNtiymT8n4GVkAnvPGqDxf",
  "key39": "2VgxE8axX9UVxdWBVDtwQrbiN7TfT8LbVnsGhAZwsmMGgLcNmx3bEPfCG39kEHyNeohphE46od5r5yePwm9KqMJ4",
  "key40": "7kqr8ibbEUfZxXRnTzZgmn6gRzhpxiyu68RMMifXsgUTSLWcCqF3YNt1vxhrt7LhCjDG2qKFXjfiYvjxzs8dLda",
  "key41": "3ni7Ptvgz1zuiZmR3TUxwsqVn55e9kysU8ZPXxFPmVyD381ZEfRiQYvEsTNtjrJ1VPwyZqbSHUZ3rWXr4LCqjimW",
  "key42": "56cUCV5Y2zw67f34M6dCBnpf4MYC4v7U15uur8Ej5p5Eo8A48KWKTrmM9CwkhDR2P2UbajjzxLhSoAoqCJ21t82p",
  "key43": "b7jSvvbGehN3xbMyYmW2fvrcibW9uUC1fADbQyPndat15wosto2fWuhUGsnp2bWnm8ynRPhyZuzWBhm8nvsgWJs"
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
