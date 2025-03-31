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
    "5mp8YjWoW36zFQGuELTbmPpJa2c68fEQCfYezQ6robScm7sRxhtWFVQboyWc9X3HF1UyUJtvZUL12CGEXQ4iQCmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65t53teaN3TXGAqoksx5b2NmPPY8daFusP41FV7G2sWxRgL7DFTjbEoHkvG1B4BSSd7AVJi21S5f3bUyNAHfzx1F",
  "key1": "3ZePxnKBQz5Rgru9TVRcqtnhoKAnzPAuj55pU8YH1Mqx3X2kPV3r9QCn14mVNCyLiQHiqW4zb8kU1TCoXiwBG4Ay",
  "key2": "3ucWirp6uubfLoiuiVmYGaP7AyEfBrYZQx88EvjnCUahv5TUaGu7bakSA5dxRftHVSqsdrzL6G3RseLURe6Qv6Hy",
  "key3": "2RUA1rbdcA86imDeNpyFsoHVXS4RXTATjU7U1dY6MRAVfhMNCC5NiXRdzup8XvJcZPRfDCwvg1R383zHjUn2eKRA",
  "key4": "3rYmZV1ynmct2QB94XUjs2ehqvLNo6UYsoQMBU7jM5JZyxa1Js8bVXjW9dmF62cWGbZX9bpHZhXYjMWfjVubzpKJ",
  "key5": "4aNQX42sVTsHQ9LxiWWr1TPbfoNdZB6QtzvTvD3MXePjHwcAPu9XhdyKhs7MDCXm4VycHcsFedNpofKiWNLTbSFF",
  "key6": "4Kx3mUZp2ycyKaGi8hZyRxGfXQ81vzYNPCDiShwwsNhd4CgjhNQ8Uc6wUTniQ9uqeVuvApJ331b8FaZjjbHo5qc",
  "key7": "dcdfaZbA1aLGHvWmvVMiXrp3isb8CoDwdwJNFSx5d7jms3BqNfU8YeaDi4M3Z3A1BJLTr8VzCHGSpzoSFp7dG3u",
  "key8": "33PYGYG8yQoj2kAadG6MLbqj2YZ7vB4FtBNoiiKsxi8KAexbTQaKXaRG9gW2C36a7GHivrP1psRXhrJNoN6yByYx",
  "key9": "UW5pYJjgVEMMKeTzRSoTvJQmD1KsUVHoPnG4LT6GswtC94zDVky5DY3CBJfMdcqHu3WLudLLQhBAHyBy465eaKY",
  "key10": "4kUF7VjpbMSLJud8CS5ye7QTA7MgyXxenTe2WbgmSvQyrdGNjmJE8pRGSn2qfX8EdiHAZ4bAEesADJfPHwb4xhQC",
  "key11": "26erKxDbBMJ3QXDkAqpctkrQv3oGqkyNADkkuZzKj28rHQdU4goRLoX4ZmNjoA6bmBxTRFXtkSJUJg1HrzGEdYhb",
  "key12": "22WTMpY7Uc5FMygPgnDtDqR8i5GdyF2LY58QoEnUSvQCV6zof4oqu26343MgPzYXP6xu5BiuM5VcpQUeH2rK9Pbo",
  "key13": "2B4xLxm4UKZG6uBh3mwXfbUbCsL4AhZYW8Mr6XDht7xJPs6gw2QkPcLSchsMarPN3rQuVjw3JKdk5KTxG4FBoDna",
  "key14": "KirTPWqMArUN5BBRVtm2vCWukJK7oFy9oxnu73NTXg6Pn6KbJXFUFrzU9BzB7h86h3ioRsisuuABXTnTifSEi4P",
  "key15": "4AFkk3pgbuFLzxTyXqfjs6xr4LYUvnYmf6hmSxgMeGDwYxwfpg6bAZQhpVre5Cb9ayhTFakoAXApbRU8apMAr5M6",
  "key16": "LrgN2rhT7cg8PhnumDgnazfGafMdBPHBwaTb8NyP3WzdUMdftmzcUQH2ne4u79EVNhLMYFLQVHEpb9ED4FyLUYB",
  "key17": "55DqWviJFxreZcxnqMPkN8nd7YUdL5SohL8hci232HWK6Seih5CYKRT6S2x5wFVLgj3diBKhC818vFiCY5ej7AZs",
  "key18": "2UCcBNmv5mkmNym5Srhzr5Q2jPo9FYGgHZY7Ysjy5cuFCZqiqrLewVXhvmyrcvd4NAXKXs2KHcohYXi9PuYkbhD2",
  "key19": "2LzMgAUYX5MXZGhqCj5ud88qcXxfyXRx4bnJPAeVoUk3LPwvZdm4zCuxCGgMb7T3BB1JeJpFqGeZAV2Jvbo9WVKv",
  "key20": "48aBQk21NzhuPJUC7RUSmM97fnoW1Svco9m3ssDCNQQGgPpg3yewCcVT8kE15QVxipCpjhPjg65dejLUqXVnAZmd",
  "key21": "Sfi9LdfTcSVoXXfsTRqPsg9hE4XpEVP7LPEmzAhyWsJUMijvVo4bpfgAgB9m3TeUvpRTxEd1WBqQBirX5m9V4Jb",
  "key22": "4NzwvcWxaymK1L5RRftGb4ThvBP5sF4eZPmJAxQ14yQ4EbHiVEHJbTUxJf8mAQuwCupUd23X6Kh795iUkDhX6dJa",
  "key23": "3s7VLZCZC99CWfrpdzqdFTaDfXPrgfNCysY94Fp8gTCNUe8L4qTkHq7DMCVy9KugC3gPxnQzVGMicqkC3Kzz9spW",
  "key24": "BJM3RycNWSnyqogmZQxsone9jMVD5gRK829TodkCRLCup3gVPknpaVkzyyorVQsCKz2xotGcErzswiyzhizcn7X",
  "key25": "RMRafXsNuPJQu5ys5M6wd8x2goqKH1LeT1Gtz4PBYMJFJ9nsUc1Yu2gdZddFgsbE11LaeCpSrmNLcvrwXd7Ni6L",
  "key26": "3Zh1rbRV5BXQM3r64yFMyie4JSRrKdRyK8HkoaG3yixhGYeM4dNUdzpYs6N6S1piVNe4Mr7bGqVYAtfbJwLo1Bu3",
  "key27": "5jcKhmeZ9DYpGUYapyFNaipkj3Q7Pvd1sAseDkj4m5syczWiPGe4BCvmFJ4WXJDS6cbcjvSRCL3hqg5WgQrWPsTf",
  "key28": "3bQcZHnpTH8jUN649BpNUkJ2KGbwr5ztXcsi5ZVTJdV1xUg9SDxgSTc8dC4ywmYPvKVcYoyMsPC42Y1fKhu93L1K",
  "key29": "3pWieYeekeKa55TCMBtTWAXTtamtmCs9qyFVBmJRBswbxKV64Cxw8TNqi451sLYovh5onrdvVEdZWCqbPZgXysZK",
  "key30": "3J1YE9rYPWspoMkQiu5hi1cNvU7sL5eBK7Sq9vg4BNFbVj5AhcKvmiyHNZx438buyME56KVHqdGgo13JfykXtAJR",
  "key31": "ymawiz2Ypyix2UrQroJG3izf9iegsNzGafnc2s9CxKhh3524RF1mmSZ9J54Ft492jououFJUbBTieEzAM91yj2d",
  "key32": "4xuX7eNYF5zAitKHJAPf8d8jTBwo25vpLpCxUeHk11Jsp8x7VL7JDCRMu2GAzsvQyNkeUB3Aume7Cz8VLraxkjEG",
  "key33": "Nje9oNGUwwAxK53yUG83ee2wCm1izKW875zd8WJ9GMf4t5DBxkT4mZqwvVTdfMM8iyGqfhSQGMkqjyaUhQ8DFSD",
  "key34": "5vS3uMPQ8tyGnV7Azd1zz9K3NvXXaPuTpv5DsXTdimnBZfJuK4m1Eivedx5J4wHWqwPZtHWn97jBqWEnmYjCz3Ne",
  "key35": "89GZFYJ76nrPcqWzfBS2mryn5C3YmFQrfkXXjmmdNEnkeCSTUU37kWyNN2sNMWaHd3CYdGuew7MiV2f6rRAfiXE",
  "key36": "5mQoZop2dVYU4Q1NUnVXwseka7GL6aemgvzSAmUK57dTrniiLsmEmigj1TMn9WZ5WRhJmC1K3P8oikSCNUfXEgU2",
  "key37": "2h9HvV8toNqzzWTi2ik8QJfoxiErXxZELUgfr5TRycVmydwJGasgWbbEJ3SaPALfDxkkzif5AYcoUJ6ndcmEQXT9",
  "key38": "43L892nxUhSdhCEknQrPXGy7qjAMVffiwUsbAYraZmeRwFkB3iHYy31xAtkWixqoC4DVryWyduwrBHMCjAhJHHr6",
  "key39": "41aNN6ZPEmJH7SBqJMcrFn2UwjW2RSd8qMv4PdKUv7fUksvfwzqv3EHwR2SnM5b2PPhAESi7A1ukscPEgM9LgZEZ",
  "key40": "3j7Hhj9HzeCMoosdSo73yEgvKbaQxPgVxiQKs35wHi7cSm98VHyJCTYs8SRySHHW4Y3zy69wPeKrgX48oXC1fS5A",
  "key41": "5P4UEAPFVjjZXTVaPUHyUQFiQdNNHAmekjwV7SbgjfADGXyhahWYLVFyxtDCcSYdRPNDJNxLYA9omaRcBqMCJXoW",
  "key42": "63tPUyXoDAXwFgceEq8v4hNa2CQvexDWSrpoCSTNh4fRMDx9T4FC4XyBUVMHi2sHEPTUf5GepXZSkqapvnSAPyh4",
  "key43": "3WexMvwQaaiQzAM2MjgfyPrdfaJcqxLpg8hNfH4Kvo9b4hvbrkt4h9mR7Ld8gXaeFt1xpAPjLMsN76Qb8SYMDyKP",
  "key44": "2mUL2hXQnGaU9K54BbY5JRcrtwRPdmXsWHbqMhgvWLz92htfQUGD2AKAiheajTVgqPfypRzFkQi1BEFuZf9LTZEJ"
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
