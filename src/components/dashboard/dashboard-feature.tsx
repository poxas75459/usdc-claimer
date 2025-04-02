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
    "GJh6xiBM4tUwzuJmt42pE2FyfQ48BbMerQzs8c7bmERAZqkfzjZ8CooXD9upAoHovrFFstAKBfMkXcn9meNqRCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mDXhzFxmToZnpoAHaQrzLNtE5M7434fLQRNgSuBH6ZsM36e6B3s8ZHiNyhzQFAgNrih8TAYBim45wBy1M6RPbPy",
  "key1": "43JZrn6e5iUQLh9zqpow7mMUyHSrBxj9wW2JVqphiZU7AwwNSVwDdR6yJ3RPDLDTJ9EbjoCpKCAyAjauWarmyqFf",
  "key2": "qwApnKVqjCZgXWfqumGVimCEuC9B1PqP4epBiADpjLayazCvNR8HKrtHjR2DCB5nPsvJLERiKpea9PNntWvWhZU",
  "key3": "3iZVHdKtURyUnSyGMdBACCw5mKhq5KUqSZJaCJqgNdFVLD7WdSv5f943XPtzuf5nuF9tZ5812tCVf66xp5cgxFhK",
  "key4": "4UF2Ht4mPeQjCEEQMvCLdGfzVpahLZq2zckL6jMqbLtPwccEJ4fH1kGa5oShJ5uhRZoVuPTJX317FwhgczJ9Luoy",
  "key5": "4CXj5UYJxMvH3chmSjfCqXgyG7vMgGHJGrkgMDZxjptgX3nVkoh2nyD79JcazD7F8YCWTVSXfgZRaZDiTsZhKQhY",
  "key6": "38mpSW3LaT9pFWfmBH7q8gAkHsqcePuQo3YJBvnK9gdEAJvwdXgNjR6u9h29CvcrxFNfGTkFhrdKTLcMKysuXqxZ",
  "key7": "MGU39mRdz5vByTAEcDpMcgKhhPDfuJoJmrnMw3W7bHd3E6anmUBdz4t2HaZHGHwQcPqxhWExdr8oSzx5ebPLurt",
  "key8": "5t13Wtwzpx2NSiAUYMNoBx5KQJs4zfJvJeGTTu18BZHjKkxsaJNUWymQtKcbHuemFb6q5UH7qRaGeavypErQv46R",
  "key9": "2tVvn3RX3DZcLoBrcu5nyyU7SYJj5U5QgZtM7RzcWfLHgXQ4uho7QbwzBZxSSzb5HQNxPCYx1yBLoKw7fS3qpEJX",
  "key10": "4VL6bUcZb28mdf5gJ4dQkSxRmvDjydD25Y3GMQ9R6aByeRHDAvPLj82F4uPFazrmxwKJ3AZL3x4ingTGu2WNC9rT",
  "key11": "TNSNGBBNo54RiaDDbW8v4Gzd6nkVHLynan9vr6zHCGx2LY4geoPNp6ZebXM6UYKneT66Wbc9BhUigTtJb4PkRrq",
  "key12": "BM85vKMTeDrAwHncNny8tfHgE8daSn1hPGMuqFjcCS3CAN9AcrYp2XDnp1GTZ7eKHAnRG5RBqDqxTHdnSENdhHE",
  "key13": "3b7ZyDaoANBnjpkWMXSW5yCrJf4tKPuFHqPuxjHovRUPJvpqNfUnQfq651GzK47YGKdz7Pprnv3AAENyBz1tcniB",
  "key14": "3YFo9yN1kfdLTxjgg5jkxnJ1WLC3kiWrsiMGfdT3dt9YyN9eyVcFwMtGNEfbdtL4Hbf2EwQqze7YT4dzevWRHFgy",
  "key15": "4y3FM6ubCcewDnFEuXSVckisBCJdyAmdxD41MuutprTCNBHx9mDSvVhRo9HyZ7XNwheVS8GvdYHA9BRSjbwKCkJx",
  "key16": "kCw14PRw4pwSUJGR8yEHSDfvjJPaNGzA5DrP8M5LvzJZy4tmJ142cSsTFBgqviv37hMcSXZ64fBPnCC6bp7qx88",
  "key17": "31Cdan1CovfznGx4roBGCrzUaka9BSY3gVs3BrXVfuCPgfCSnpowxxpDU9rUPtmKnJbmZamqFSiZnn1TdJ8Wjizn",
  "key18": "3Udb6Ji553iUsF6LGy4UjR9YWzgVGGiKra12tbw5irBE75UX232rhiaDAExVfHBv57QQsUTX1zsYoRdub9BMvqHY",
  "key19": "5TE4z5urm816pD19Q5QXiQgkPFJBgQG9t21UDGY7HNwsyrjXfYh9v2PCvv96zD4bGA4BUBtGdNrEnk9owJy3Hftw",
  "key20": "2Lyqty4bA8deP4E4mRXskFjNM3b7XvxqbEJ5aJDT9SeMVwDcMpy1HrNJeqzUbWYfiMQ9UNdKE3NqK3dSeD5CTxxY",
  "key21": "q1Roc4ndsyuAg4GQeN8QtVE5bNbCGYfwakYeeBH9jm7WXpj1dDvDGiwppNXbpLcSNAdSR5vS74ohPgaSfigeJSs",
  "key22": "2TvcyhdYyQKoC9u9bGvAcHdXMqS1r16oopMDrfh5nWAmvKYPm2piVVW8qiW6uzqC8iy6wV4VJmvJ12GGy8PF8iyW",
  "key23": "4T717FmY2iGZHXv174pUQFDKD9NqTtY4ULAzKdWGKiGYub1x1snSczgkCKcaY3bcTAdgfy547Puvdky5jjbRLPA7",
  "key24": "5VRn9T9zSZTDpEuSyCW6Zh4bLhUswLKhpKna61vwKrx4uia7afQHeEBmYem6UfBxZvCB2dKfBAEfgGUPcKo57Emn",
  "key25": "3JuRtHTXgGiRjqPB1ysinH42hwyaVJZbHu6VGdpoQWUjECwNBZoNQxGGxqC7LYHNMYFtts7p949vzuGXfSNkSDgj",
  "key26": "4abajYDQFE19UypLc4bg5hjR21obeybLirm3zmZffYuR8oaz7RqxcMwUfvC8ztKsBk9MWeTh6KvrJ1qQSh7u5xnq",
  "key27": "3rRm62Y9b6NuK3RaTf2RHjiDEBSUoJKHnA3hcbz7N83pNwq7EG6nRNR8ofBmwAje5MpQLbYEwTkhdyrWAC6yRURW",
  "key28": "2yjS9dFTAG17hX8qqfeZ4RfC3xH6ua5yRqNKUtHWtZkm7hzhTi2h5hdoUPojWzBeoxswbCWCrn7s1qypi2ZVHjb5",
  "key29": "3yYReeQ4Ugsofsj7CpopkAZetXLFYtRTzPDguPUXPDfcmEfbJ9St4p3ahPcJNJ3Pr2hAuVgExqvwmuMECc5CE7t",
  "key30": "37v8BJ2VGnxoXNhQkhLYc5mNpFmQs6a49W83oK1145fDkxSzPiZmC5Xibh3JMuLN9uPETZ6YZcJwVdFKrEjR4Nf4",
  "key31": "26L5KRYc8zdHhozG8esraEbW7AutDW751wFJyKQUKBfkS8UvfrsQzf3vyEW65AEZkFoydjTcMdGceWFdZfR4VkXC",
  "key32": "2s8C1fBU3cBsxU7KmZytQmY1wKdjsFfFADxwJUkKaKFJB5BFfgVk1ym4dEg42xv1Nq6aVqZweXMUz6e7ARdeerS6",
  "key33": "2th5GuRh4qvqaiPQEowmUSvedNexXB9yZAUecafovhxmCgeUwVcmhezALJKAJ4s2MTDXG8thwLfepsmmXJmK2Qct",
  "key34": "2EtxBL1yRKZwZtenYbZc4Aea3h2ahuFNawysBuQEzxsJtyBDyDVkEXGpcefrwjfAmiSdSxRaZ3Ei4BxyrnGwDHvT",
  "key35": "48AdxbgHRntz9qa8vnBGSbLRJuk7VZQid1wGwM6JWZQBdRfhoWNp3kGxYSssYiDro3qEXXKwCqyMz2Nnh2Kq9tQp",
  "key36": "2SDxW6pvNd5LVHun6b7GAFCCyQ7uuV1qRb3sE5JRnDprW6FHbyRZmA4gj7tDbGZ67KFoG7oDzkeyteTYpDzoUF6A",
  "key37": "2aR7UR128rfgJvQZQKUiWebom4Hj9wPaw37njs99wTB9UMeBFtaKCrkrU82nTEMX8LA8BKCzJkDg7TSM79YX2twq",
  "key38": "3rakZQP1Hv6CrxCCWkHPhTRJhkoX8PeMkfjxZKbgvRekdu149zVfb6BKabtJJW4359ZiAfMHzemNwGvH8gnYKcuA",
  "key39": "3FoasxCT4bv8GH7U4ujgkcdVCYUmiCgCaeGEexfGqPNPbTrTxX5mu2sY5dH6F1VZk9YhFWTTZWtX1woSYogJsRxi",
  "key40": "qcKVzFaH8m5rsDECRASBn3qC8FA7KsNgp2vRotdSo43kyeFW2LaARz5MwhMr6eTjFFUjBvPVx8PnERLLV7uMVBR",
  "key41": "3eRoiZdbzYjdfgmWHubEwsr1hrrMcvchMZWt5R4hRWcbqux4PUYeuEVrdmGLTtuQMExvF8M375JnH39AjEnzPgEA",
  "key42": "21WuSFLyNGw3fBHH1LCdhumxTkGu8pX6HQQpVcPh74B22gz3KMb4q85fv54gqjKVBDd8Z4W3s41pbC8TNRyfYNec",
  "key43": "qjZx8hbePjzuGUn8K2eCAkEEKY4bhJ7ea7mSGLGXvBZevuGA2jLvjpgWcYjtwbTHcGZU7BPpABZeKEjNhk9Lxyh",
  "key44": "38wk75SqjJB6v89ZE3Ep5Ym9Wi6duHYBSEU6mGqm8CCVivXz5rNvzJusbjPXgj5ei2GcjTW1G8zKTkpjUywWx7HE",
  "key45": "2zHoA9277t2wzS4ikF2inywtiyZ9UPzUif3HFBN5gga6guWECsMDWe11HLsGduVRFF9a3EV6aSPj2K3SEKaeERRF"
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
