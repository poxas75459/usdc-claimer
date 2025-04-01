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
    "3uvcQK4NAEHVPocxRujBF9RbX2HZAXnM7HXwDNUnqyubRHZPfRKwrH1GHnEeEN2vxCAKgEAAmBsek2TJ62txpegg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ACbtA7tt6DPbCPsY9oB51E4zUmZSzqHFDueJZGsSkNJ1P1NPD4dVr9yPJYTHwmCRGkimarMrB2RmhDm9JA6tQv3",
  "key1": "2kT7P6BepHVgorf6m2iG4XtQEGVUV5oz6QMrWFBEjxPu7TTgbDY2i5KfXmYYqYw1kLCniZzzYcGXqcxGBwAZCu9H",
  "key2": "XonNkmtq37wZL8k5mNfMsg8s4q4JwEarh1JikbB1dm5S9uJfb33bq73Ug1i4cVSouD9AT2med5SYZWdEuy7SC4Q",
  "key3": "3MTMdRVuYxKH7Ln97PhUryV6CzZLLC5UUzUQR6bKdBm4QHCfcuYiw1b8hR9ZAiiZa3QKadT5xwEWcyR921gkXSsW",
  "key4": "62hXxqxB6WoCE6h9NHCrqEZ7cTRVxAigWx5WP2zWbmm4g7KLtUAnZamroR2NvYsVsYLA5QUrNX3KNFvtybxs4yFT",
  "key5": "33N4X6oWApk3k4fBGARj1hh8nvCX4BM9TdrK2xEJtntRTPSVZj5AZ7rPQzNfK7uQENQ4ak15yavVY43pPazxukZU",
  "key6": "3jokKSG59fVcW4SQ7iSBzyg28hiPJahA4jFZJPnWTVKPu2M3UKcLGuQjewKhoG4r3CBiSg9pgZDh7qdWkM1cwq9J",
  "key7": "WTJBHxY8T9YjgLZGixFXXhVstHmo9XKoZ6vUoQ13JKbDXL1wp65v6KrC5egEvHcrE34v1uzcU8iL7QMbtz1aGJh",
  "key8": "4ZXBSQ3884qFNjLLP4gy6oqUY7cNeuodR7WA47jg6X7xb67ysbqZKGFEVg5ArAedMk9Duc5BjDtp38zpPdr3WfU4",
  "key9": "49MSpUSSCxgNyz2QuUDA9YNBZZkxhMxKiqqeMGAyPAHWAGSuNdCBtoTHNfDqcwHHVnQx872pcVk9J6wjkWq9BahC",
  "key10": "45B4w77NEWc8F66VVPM23BE4BCrsQuDV1HKQRHzqpyPZEfCU3b3ZVVAJfz8kDj8RAKdCKbnj1UvYcbZs3S3QNJz",
  "key11": "5azuitcPTBmFsNzWzwmYtbYGqp1uh5cQZvrfUcq1CC6nPnkK8KRWXQE2KNTXZJuQSia8uPwuzA8qMJCzpqDK5wDH",
  "key12": "4LkG6iZC6X1we7DcAxcfRmZHN1ENphqZuvQHu8JCFoV4MAnNooCnwXKPCL8p5NXGg2pDb669DEfJpaUKj2vr6xmV",
  "key13": "TrGhfX8AZpfs4yjoCJNjgxFzEW5PMsWr2iY6X77CUyUKAajbSkENECKRrrkrXqhc5BxHKqtrbJYyhXJikhWPN2j",
  "key14": "RWc5ACw6fgU4zYLa1EzQFz8h1a1XM5MPH9Bd1g9Z5uaQ8BEcwmbPuZDB1caUw2QyMDsGBoCZreWiFkLpbfMR3y9",
  "key15": "2rnDCAY9Gbw39crhKaBxXwp1A9xH8DSwv4A2bSvEeLB2NG8uc6XJvdhfQPxuZuNytQLbKBKs4CeW9DfAE5pLmuEt",
  "key16": "jKenzTdF9uQ6Sp285iTH3zhRGaD25fRaXnBdPPSLARTmcT1qtuULKfzjL92eKitrKaAgfDS9CvFhhDTZU1yiHZz",
  "key17": "42znFBLm1KQXJobXT38MaKu2LxNZ8xNoG3JBSnChRfnWsdJNSJZK3e2GpYvfwi6N8RpE4zXPM7PpCDkr8QXtanwe",
  "key18": "4SmwPuuSEEbLCWd8r2V84Xy4UzUDKjFPapbb45aiLFjNW95xYyqYv3kYSyJYpnVtq5s6NqgDvfdz3shAR489y4WL",
  "key19": "2b8tiBP2rW6mKx7trCbaQHvQNVViuJgCvia8185mB1kcULcPNvATsrSXURK6Yn2jU5ujeR7CUWagvNXxA5msFThr",
  "key20": "5AJVyzbvjQCPmXM5VvuEKawByCM1fDDD67Bb259Xx5LhPyoGZkNCn4xWzg7gqunmWs2dHsc5ZjiSYeSxd77H14pu",
  "key21": "42J1YR8rxXK3niH4Zt9sQsKBQ72BjBNAbUVxAmtX4vNjSQpD4DX4tEKy2TKeHaUMJhSeHFhe5gpEThs2rGKhbp2B",
  "key22": "35TeY8cmyARvd6HhKSHo7KjfQpKqyVdWpci7Uc3NVBQCuFMNGNXJMEtQjr8fFVKaAPyLQRrd8dhW1QfPvSw8oJPH",
  "key23": "3SqgBMzX8G3PTq9TSVVXqC6gYm9cDWMSnRPwHZctZbyowy28QPhYRkx9Q3APRAZonEc9tfewE8mFHHgNnmgTAVvP",
  "key24": "b2k3Tr2QJccy3pRojDCPdGmu4cpYJHtqQr4n3UvGftH5kkrU5NXx6RzBVnM5z3XiTA4SyN2EhYgeThJNJuuo4qF",
  "key25": "4qxV7wA4YPNXpoY7CnoHxG5MuQL3szGAH1tamJAKfzcVBVeh8Zt7xbKAuqiFAeiNbpfy6fd8EPGGSdMZU7EPEAL",
  "key26": "29GorS9YL8FemUi7kjK8x8hDCn6o6zo6j8HeVLtqt8PBdyBNhjySRb4CFweuveafCcue6mCUcnsfiq5Mi7NbQ3bQ",
  "key27": "2PxogmKbUQUtiaxbG4byNi4iU78qzwkALbHJ31AXkR4pntC8ojDjvzatLerQ47c17SWNXKG43cFBebYhPVmo7btq",
  "key28": "4KT4oYBqBanZv4f7H3q3TUCpwts97QhgV75muZLzerJmHB8LvKapKTwd8v8GmMqxrKwiFmPQ5VnQgPS8dzHwn1kz",
  "key29": "43jb8dSKDExMJoB1EzKGtXXeUZrNsHeg2G6KL3pSckcV1fM3V7sNsKc5h8JTRzGvLW7X5MEjENFcSX5nZfnszriz",
  "key30": "MWZ9x4BveSzKmkfR2XrsMmunvgkKKgb3jPiPE564sbEnkYJb8Xhw8EvVRyL9sS2bmCJ8svg6ZdXwcuSpthKY4ma",
  "key31": "5vdtgki8o6jEcpj14WLJ7WPxKYe4Abk2eWs45NyCDMbMchbBssVR4XPefNVaSvvGRWJRE9yeqSvSnLXzQaGLQpYZ",
  "key32": "2kWheyHzzdopGPZizyZcVqfsG6T2HKtpBshmHDYRL2k5GoMENazHipcbDZn4TxuDRxJ611CJN1H8RpQritWBVECg",
  "key33": "27T9jkLzjycbhseHrFGEa4DcF2ZEaTdwmv9xnUpgWdD2vZ8wLFPrwsF1tfqjKkYv2sSxDCoPBmLXgCotfZovQRCH",
  "key34": "42wtkNEZCFdojggwLDbJ6JgZwbYJ3bVAsqaXNQgt2yBFySYsMF9WPeaJwLo6UHLXhTPuRwYNjZhUj3dboGmQoVvp",
  "key35": "5ekGiCBLQmbXwifHr2Ceec3eQCYiLmFBrq8JDgo6nzoZUYu1HubfD8irVnyRfNedjHcCas7KdbjtVL1QZ3ACRh8Y",
  "key36": "3ybq2UW7q1JJLBwsKrTLUDADRA2pfpqStFe9xA8sUYFuer9sGctsDbSTmAduxZueJ2ZzRgJHaXw3dJfNccfxUY6S",
  "key37": "2hfjdMyMVeDuhUe3oZyGCdBiizM1LXu6uSk8q8TUiWUPnYWX2KNNbuopB2uBUmVgv5mHabApfCThBThs71WRnbQM",
  "key38": "5H7tfYWtdDqKfxT3Gyj8PXpkenRmmnWAMA1zu93eAaoXibH5xVzeV3oDxZLvp3CCnF2nAvQwsX9GD2ecHjz9Yqvc",
  "key39": "mWaSssvVUS2FcBvLcEJhRZoFhi2qUTp8WikecR3jqbVYpkWWqLMDGe6V2FeobpPp4C25Aufso9ERU3UPCYXf85V",
  "key40": "2mmxK1NYTBSc6nEakUw2iL594TidBL1ZgLWuea8eDmTVV1bzEM4MUVLhXD19eqz4zJ75WfhhQPQ631gspAbBmhHq",
  "key41": "4mMXoRTPq8k3vvVvMXNxKXbmBKgCYftqbgrLTQ8jKmAEiQgApEGKXCS1SF1RXQMh9MFEgNemRHVWhHb9bytdfNeL",
  "key42": "4odPYBQTSeqy9gxnrf2zCPLaBuhHvwcoHipREmmCVqHyNEaVJ6c1YSL1FRDH82Ny7xRfKn6uSmeVvpP67Uga2Pj4",
  "key43": "eYpzRGVCRm1oRsDdT3iV8pY6St6AwiSjAMoMEi84Vk22KGj8H4g1BTUYK9MNqwHxavaZAPjTKu5SvZcWJy3L1vW",
  "key44": "4Bd9Sjg15bZ6qrbDft9SC6yXwqCwP6QrFuJyiq34VVjk4xmSRb4igobNj9NHtKUsinEvcTzsHxLSvnQrmM29rBVp",
  "key45": "5MyAjp6A3vuKR5Y2p5TmGMiabwuGptVA6B2XC51bYFT2eoDzMLZXjTNVtsSU8KQenPghs598VRVpD8i346anviCS",
  "key46": "sS9ychNEmN42PGSrDCsxT4HLPknoRTGA72mqJqsY3qP3LAzFQRHUXNxCSNo8knmyJwT5sgBq5N2sCBmFn17wqsa",
  "key47": "4mrWLx6PpctfFX4gkdVWUbhwX3ttqubefNvrihxDvmLKnDm1NtnsCVUiuaijNcbJveDBuQDiS4FWNMvFFYjaTxYC",
  "key48": "2LnGRt7RxjYVbhWKfo4urAXFdTTU9mgh4yquMUE1MnCF2NVmMJbzSwgy57aReqqM1BhoBzJBfeVdCbxAnv47atKU"
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
