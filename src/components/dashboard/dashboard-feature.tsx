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
    "pLUv7LFieV3BRFF9QjZ9ZDnttYoGjuXu8MkosgCumivU2CC7YDiDviDpeUEjtHyqRwHpACRFLMvHQXDJAPvEXWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aUbXrAEzN9cFqgKU9nm1qL9C1vgQMtoxtsUQZPgmzdWeFeCjManPEi7FuVpWwKJdpzsg4dX8KC6w8SceyWC18nG",
  "key1": "o3MwAEPQy3t4Ak7usLf3HkeckAepnTEDqRLYedkf7ALianS89tifFEK4YqycNtmNc1yyzBVoB7EsPXvxx51RcHf",
  "key2": "4V5bXS4Df6aniYvCahQpiW6vEMiN8Z5v7QUyobjq82CeDQhBT4BFSptLo1GpLjrW6rUJr8uaYLzA5Q4B6kwoXoZQ",
  "key3": "482fxXcp5pWezm7o5L7hH7Mv43uTBUGGYfHPPm2yRo2TL5EagEbQEkuEodeWwzwE28QztjJomxCAA8G1EJ31hMpK",
  "key4": "rEvJF7YgeCNH4LgCbQkyifEg4xvtKNkBz4y91cKNfSvCoGpU2Tx9v9AoP8EQzj4vSpsqQm3EVear6q6zCmk1kH8",
  "key5": "4dZ5sz6VbwEqhWLnUagGfNxGghJ4dueTuvdRTZoahR7Jgwab3nf3qZMSGeAB6d3emquqUQ6dNfpd86Gik9ACFfMk",
  "key6": "5t9jcEV48oMi5evYKYUCFyXChbaT1CkCbTwf6e1eLxpFRLvUvDDwEtnA9kb8CrqFfeVbCnyEwZ6tVESCZNxDVwoG",
  "key7": "67JeLvT9RpBVsca62fVauUA5n8hcu5vQY8mDMVe6k4sd472ePWwWbfXca7vMLpLx5e74FNffE7jpzZWVJvtLbPxq",
  "key8": "34RWWSgGyMHtq1R8exMKZjdT63VnLkcPJsY7Go9JB9n7ZLcTycfFh5b5ovuvSVef5gXaAD4tUoaYhCtk7C5wgryc",
  "key9": "4FQAgcddvX1EX7MMTVzdsCvYWfjFacsMr4CGG6rbadY3jPMYELUUtTGJZ76CKpEdcUZqJS9M9yjgpCBDY7jgQzhr",
  "key10": "3DPSK4wdNLANABc6SXTR44v4PfEi1eYfMgtgVwSBddM9mLC5rzrkjGsxdvj6ebp9J7iochRTcXTzpBVDnghRFu4x",
  "key11": "3ArwMF7A1qUGDdMGHnjDUjehwwq5Ef5ErEM6zBEyc2EwixAW4rRTF4tbgQPMKAJbFTY6uCdPR9B5uH4VNWY9C6yL",
  "key12": "2hK19orx2y3Geh5E7KKCbfa46gQ9hCmv1xcz3tB44rseCdSbfY57gJBnsymUSxMKK35aNacmRQ12FNwqUANW8T3N",
  "key13": "5PyrEeA1886JqNvdn65gXadzoNj86BzhRa4gngToSXGYZ9fub6N5YwFLjRpnD2r2T4GHSzviMeEWcPuG5WX7CvA5",
  "key14": "2Q2k41BKKvCiXZuvx6zM3rNWXBxdV5NauaU5JamnoPUM3CCotrYHMK4X8w6vZSHaEWjdzcEWZV9ngWnrPuX8N1oP",
  "key15": "5p3VTwypxNw5oL6Pzw9g1UYnAKVx6wig2yuikdoKpmYVH1DVsxUeR2wfYcv1PnPqc28nvmALN49WjyGSyAf4v1xU",
  "key16": "PvyyWuJ35s5nsAroDz8ae3yBpNs4pfFFx2RhG45rzEYeZoM58GdxY3SYzWU4x6yv5gBTEcBmA31EVgM5Cpdf9o2",
  "key17": "3VAE4wKzUgFNQofMGzWRAbyGwxQK455aLcuynznBsppQgfXJp7w7NqgTRnyiTVgTa5KJzJnbSkoXTzftFaorndK8",
  "key18": "36Pu8DjRhNWoBJFfodBBNckSoKUCr7wejtKdshhfMp4fD9eoxjJtid9MF7BqfStwY7RfbR7DfQnZmvGvFmFHvkEN",
  "key19": "3XRgfHzTQNjc92VjKPmv79y8Ko2egcBvJAfsYLFvVcvY1q1jAPRkosXXVpnEnwLQsZsBk4oEFRhQQgvHWJGRZKsn",
  "key20": "5RJSp76dYGaQMj3JAJyaVqXSPEwxu8RvPdFgGScDgxg9JVzMAyCk4nMenAJXmz724mQ1sHCfFpJqM64yi1ow63ap",
  "key21": "3sy27ps9ZVi4HwVeH9rewwzj7ctWNmZydboqiyyiz8RWdNqe1b5LbEB2xHjrEF7wc9g3KeEcXJcADss22Uzfabh8",
  "key22": "5pjpgefXZAqjjsUgTXPE1CtfpGeZLHVEHF67bGLtvti8moVWeak1Rv3drUNPaGpCihXuKDC8e4XGzUViJHK97niZ",
  "key23": "57dTHJhjujKnSwmUK1MBdhZoiDjGAxC3Ct4MEPstfDYAU8WmzdXP4FnFLtHAibXwpiQNsRanp2DApKYCfpWra6k1",
  "key24": "4SRjXhkWSUgAY52egEhiLxpvu6rxRzuhJ5dCSUTtB1rH3dZh6Z1NZcAQFC4ow3XmqhyJRPX3xHgtFneFWcnQzU1e",
  "key25": "2ms8qPHcDEeZUJG8iqZfdMq4chvrVRvcGcLfUGE2zUJiH555ttAhe2wt2BRrpjjbETR8usn3ZQNrt9X3VoKYQUNq",
  "key26": "5puYPDB5m88meFPZ5to62ctU1p1AzkvaCAdTat3AUWHVsaHdgJnzU3NEBP9qcVtjn6Fuy62gsFsgmtCE6cwdQB1h",
  "key27": "2ZPNgd5NayQShh1rwrSeyjEXwtiDTM7vBSEsX1RnTAWyEz9KGF6uE7to8yRdCjhkjS5hCKyzLWS8fmsoKQw7UKhA",
  "key28": "Yrz25SPKvuzkmqLpHyFzNzLvEHV1iM6CT88FzUVjNXG6et7smzPrKDyQtBXjJJyrDq5XqxeC5SQdpmLCfi3vwxG",
  "key29": "3Vhu4RsY8Xfd77Zr97MrdsWyebCMzpp7RyfC8NbbvBVC1iCqJAKBxPrjHqq7Vmgg5XWU2CozKoDycJqQgkF17bjt",
  "key30": "3qY85GDE91Zyhh1WHyfMPKZEqCuVDMgm4wGgFEyQrZkyQh6VdhHR37n9edPwN2tVUzVYgJ3HvPaNMaz3jeeunhXt",
  "key31": "5qXVJd2p291Y9a6ZufHMb1KEF7KK6NrWgXpJCg66dcW14wx3cJXk2EdYKuXS9i79ZFqQejR28o41UvHXq8gLkdPA",
  "key32": "3x52Pw7JHUT4YaioJu7D5JVbpeTkPstPo1J6gxp8vAG2puMDZAiCQHZAsqpU13NuUakP9qoQ1Fm5EgXWEqELdgdQ",
  "key33": "5xBZdFAg6rWszYL7fMihK7yof1gSY8hDJoHSSwiiuf52ZB65ZZDXkwhHAJTnP2wZJ8aYuCWqmGTxHc54fGiiyoYs",
  "key34": "4P4cA747Bzoe2TDEdvoR9uNCVE2ybBrgNyktv1QAX2MSZDtVW9FwfZtgLTcPqCd97g8Rpz46YKHaHfC8XfMAHAMJ",
  "key35": "fPLKYuacxkEaUczcPZ6srYW4FXq3mT7ThDUXLhWok6dDxX9iosEJHEiUos4dRfpLkVXErdhenJVRAHvHpmSZNZH",
  "key36": "4Hcpaf2YrVJJTpt2L9eycCnVfpbkfL1P4gX6oRotRHAx1miiRSj2nhhQjY9Pq3N8kzemDxSto2ebc3b6TUcWdwmk",
  "key37": "5Kj5HQxV6cLhyuumYcgqrNH5z3TQY8h8Lut5jCxEmyVzMs7ycqHSVov6dfCuP31wnhbfeCMP4F3ALn4jsCQiSf6Y",
  "key38": "5uQyeCVMLuhXpMHkcw4AEDFPSMcPyQR8VVkNaddUuLxSJn9DSiU8c2jPQcyqzh52LVgEaYpzC8JmGGuEAnMcK7d8",
  "key39": "2PVaqG3XcSSqZ9hppDPtFwKcfeeroCWrY1ZzkUcXP4dUqntwT8FJZQmHTjhD8n87BYVesENc9PYw7QgQhnkhae2p",
  "key40": "5AXZUipLddxmGtfZZJrFk3xvRMkAFX1kppZ9mTc8mE5oja4KVvh5mYfdhUWo8Ko4KhmCcrwGYs9gNB1x3MVMo2MC",
  "key41": "3JRDHSyxcmVmJPnCFu3pEsncQULgR2pHuKkv7t3msvDAHWcAauuLVjJG6kgLiXvbrgGo7pyAXh8g2CZU3qP46Nok",
  "key42": "4r5RCWmA4KiX6Ps3JYFe1AXfDewmJNbs6oTV3Db5YZhdGCCgTDE1EpF7HcTHHwFMmCXR1FBbPpBA21xWcq9Bnagm",
  "key43": "2XSrmLqdSjWZSgpbfUf2SCxU2ZynMGsawLM233xK5nb1xYGSVtYYiKgoiZe2qx8iR8UadTfCRgXrpXgiyKqxhGar",
  "key44": "3jKzfFV4YczbbqW3V7smKkPUYHeZwLkYhhCD4GxvPD2birN9aL4eRyUJRkfh3XwFiA5meueSG5yr2TxXXM1AYBpV",
  "key45": "671AndMrujogz1dvvNtr8kR8Fz2TPxMb7eoomzX91DS1hUV93ABsJ97NCT192Xpp7joxMDvXHGSMwJ3yDSZRqSkz",
  "key46": "2QhaX7AuUd4NTNK3D5WEW6cLuk6thMiYwngGi7ZYazu9pp24U4aYmXUtrMYAd3RGSXmjRVumbSpxbLNcD9rRX4ZL",
  "key47": "36HsUhfnJgwYqNwtY3LVwS1aGvCHRvvi2bTdSSMae24uqvjLTjy2JbNpMEwUKLaaLGrZjMCoc4QtN5mHJtHzp2ph"
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
