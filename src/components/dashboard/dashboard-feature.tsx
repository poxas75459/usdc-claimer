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
    "2fAzAqtp7iPqr2HTeXXdhkwfASyryZjsRY3NLaMFtHsnaKRgszhLXcDkJYDQ2AcUS6oBdAmS5ipgeor7wV96Y7Hy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sT2CbqLcyM7UtnjMzfXhjt9FMiTPC6xoKnoe3QA4su4xxmZjn1zhXgV6uqZnr9vHTAwTb2KmrdpjRjYCy3P6ru6",
  "key1": "5pBQ6zpvRUUJV9eUkmt8sAZ4AKJEFNDR5NwD8YLbdzJYnT65CyFm8R31JLSpgCsAAYqCKwAENLRaAvCiR9n9UCDY",
  "key2": "4R5CGgKSphQ6wz2KzRY5ZhS7CQHUQsB7FM3aMr28Cqoh4ArXRgYjANQvpChKpauhcej87Rp7Jk5BsbZuLxDG9RjS",
  "key3": "5oFQcL3b6sXtM5pa4aHzLxSTJsGYWu4qvhuLQRdpEenY5chnU8swRfefDMxZ5MLLgCF1eLU1M7A3Y2BTuBsZK37H",
  "key4": "49MfQwEz3XwE4YLm4gLQeHxVu2pMLxKRpjtEMoNNJpuaUd5sbbhiajTmkbk247LxGKHioBCRhsBCa1cuu7kLziKM",
  "key5": "2SYAdWruu9VXRazV8vQwfxhwthMM7x8VJVG63EykkeormaijbCvnP2JsgFjh1C1AT9wdF1565bb5VKcSkSu9M3u5",
  "key6": "4v9vHG6SZaMrjpWCiBdmRbBLw5faRSFiZTZSEtahCgvcRoWU4t5btRhGkRt1xEGVHdm6k4biXh3fAecttZhwDS4r",
  "key7": "42LFuD8EWZp46bGNoKKGxxFwy6R31ZiA3GkgJ2EmEBmyS6RjY3UfAo2DZp5LqbSEgscffjWj9N83DBvGFgXxhkoG",
  "key8": "4axQUUpjGuBT2CPmc5dCG71ZRNn7jT9BxiTe8AobYwNgPDBUpQUdBGRbhuqR3JguRwWZpe6texqsZ5URY12rqGRN",
  "key9": "2CE3LECUbsSGnyuVpADPC9a26AVoVZp27WNTyhVrrKn3Nw8VywyQxc6ushMBXrvDeyn9Qg39bdrWTYax5cfd2w6T",
  "key10": "5i58HmgrPRbD3KqepNxi4c1fJbqUeyByungXa1iQjPncebDUuoYLe6FVFVuANKXZXf65dDnVBra4wHWdiBFScS4y",
  "key11": "5spD6gif6adTaGTB3TFE4gpmNZJB6fF8hEy7RmHZx1BwziaLAqraije1wGETr3p6fzRxdubGsEYjjSXXNWgMvJpP",
  "key12": "4RumnYNHVXw7noSebSDp7GJvA2wMfXZgw7mzYo6PU5wMonny3YZS6goWHRL6Kx8eckWxuZeUGQvbthLYs9GHkFHH",
  "key13": "4eUDwuckRxWXyjkhwkApZnTouAaCyob1vD1bAAYi38zP2nk8qV4QRR7JtyCLNMH3pSJWsdyjyMRZDKdu55qPGDTv",
  "key14": "5Gvy5DwKrcGryZVdN8GwZ5pi9fo8xxAajAbtFcLsJNrZrh88CLzGbGNUJv9p3HtqepionpjK8DFd2gqTyp2eNLfn",
  "key15": "2cn3DXhwqEBuBd7LZFUiTGprvMEFL16MJdFLHLy2G15HV4PTYpeWASFkoatcRjmFMEhQRTVh4Zr98RwyVJVWWTwN",
  "key16": "5iS3mtvuob8zrbqGXjvnbhXA2ffwsFctrgfkMBQh3MRqPMkXyCNzbFBaDF55SsWLW6DUYGwzVdXRmidBs4E2y2hc",
  "key17": "4wavxgRJkLUabGCpBVXBdXKzJ1BHYnt6PxNKyrRrt2joogmRCyWkYpmMLkPwqY1nNmraKZ56MCM4WckwDpey6Rpy",
  "key18": "53ig9iMSaBpvWWWGAGGU5VfnstkW5oKL9fqi5rTSqisHBAXrvwfzzn21ALSN6qZoKKq8iTUaNbCxTHGkeobunAdk",
  "key19": "4FsfvH1Ab94S4eaVZCmD22p8Amu58PQZweGYzceFLXhBbfDZ5D2VSCb9hjyZnnb7ZwuNepGyXHEaaWZGnFCtkWRL",
  "key20": "8cG7wLdhS6WubrTMmobFEqZakx5sdWPJwbV4BapyjayvuuSarnMK3yt8oZi96CytA6jhknNcmCtW8KHkLN3pDc6",
  "key21": "4BUDiUpH63QM7bXQh1gtsoUDiQswUbspjcyhCpazGJHwzbBmqNtwxpsc3EQYHQWLFY7txeNQTxWGxXePJsTegbr4",
  "key22": "4awB7nXcUFwmCrFKxfB18qWSrdAqwqQjJ5SoWGypkPpjW69Wq9i71a6KBkr7dDCGkKqjqJvKfQNb51vykbAsqE12",
  "key23": "3s6bGTgg6k38MxYhUDwS9smqv5unKznSgBRoHAuYzTYZgbrdYYdGTg7RcxH6oJfw1dqmqkHfFHCTYbzaGwqYyZQW",
  "key24": "4XaYtEf1BgKvmm4SvPCeD9KmTwMVhHNjAwKbPEBiiC3UiCkjZT9nhMLj7C1tfYZfekmf8CQivFCFTCEpvgjtHWEz",
  "key25": "2vBQEreRr2ABfeLtKAigy9HZnxHGeKGoKsM4raudYpXztU6KJmFnmr6tGzYkMWmNu9pQoF3HvvUaRWUToBA5G1PG",
  "key26": "dHoZWbFDUWYDnUVPb9sxAVShKwKbLKC8gNDUV6kRLufh9Kraf7FPLgsVfXumJVhZrypwWd3nHSdM3fBhdFZBCjy",
  "key27": "Szh9PkGghc2JcBfYxTgXeHx4SBJayPGgpqkCUC4rTNhDL7nixdoo9bafaevsZb8SycqPXbAADcVLSpAes2RqKMy",
  "key28": "2bCDEvnA2KUr2EeuHRLALkWDHBihzJsDTHSyG23SiKPfuYRieTy9nBgmxuucmi1vb8qBcXhycY3P3Sg9UP3aPF6J",
  "key29": "2oDn5DJMThducsyWP5ULYdzDvboMB4UQ5SCmJ1mNAw1hkzRb5vxuFC81SbHnp6Pzh6Hhzz9dc8hjZLr85CJ2xS2D",
  "key30": "3KiKPnS4VwG67Rag7HVxGmoSjEiYGz1WKkBumECVMCdj3h8KNSBCkszcdK5RKp1MCyEtZ4LfQfC2hFxVPrNY2vAR",
  "key31": "3FbZ614aTVrd5bDG6HndGyG7imTfFp7CauAq1Kn9SiJGN59bUMzquQ2dsqPeubp7steiGLw96MHUodqfUeSEyux3",
  "key32": "5EabhLFqDN2Mauuhky9s2XzAR2LmYM2tp7YzBtxJw3kAgeAE186VC8KvTdBf87U1wVMBjn8jVwtZWPXV3zBPADe4",
  "key33": "wSzALVcJd9cUwDa5rLbPqS3bfMoTpaCam1viBy6RqYUTxGRULQvexHXgsFmJshQKFVEZD97fZje7jJd3ya1Rw6p",
  "key34": "5KGbkHrENrHqQ6AWGemYeFdtK1KdXVCwJVsZ1AcJDHWSXG2G98dp93Y8CSYrR21ksi7HUW1FPVFTKYQzpM5YyA64",
  "key35": "2bvsj7T5MzpT49zgf2BdBQqpeD82K4QtBiNzBfkFWCruj3Ky3C2Kt8ke8uk2cBKrGkjRHVNkdBvMkjtuwK2udWqf",
  "key36": "5bY5VHodX9SyupnjruoCDZiVwxKV7pspMyxNPVGvEPNd9291LwAfXEcMaHfpi87pRJxJssHF78sDN2pajDvYTfet",
  "key37": "2Vcn54zpvRPzzbMU8UgiN3npajcrEzKJFUxVhMgn3sKFo6HVibsiBkxMVFYRp4XRCySjwYgYLhaFrudETW1CWzwY",
  "key38": "2hjiQjs3Y8BbkGKi36csKpqoQ2vPNzyVURbdgdN2ArbHCpW1D8uurw4wNgr15BVrLB5s3r7vvMLmBnaugEFJMf1r",
  "key39": "5RG3mzjUaApPiKPXQQDferGB2oixcTbUWatokJNcLXF77uZr8pBsQdcwr9EuuEjPQQUnk3UmYEHh3LGsq9gsVXpK",
  "key40": "3ZR41sNLJnai2Z4EccS7n5Dm5WEiLYQvqtCTWezvzVv3hr4H1ciexXPyJhv9Svz2qwD2DmLUorfEBfDTW9BL6sn1",
  "key41": "5jxFNM9JG5nWq3CSmcsyLHkiTmYS14XPktUT8SWh57WjGW9tSGBkULAFgGyNmsWDCrLBEq7SG78PtagMnLjLK14P",
  "key42": "KkNnnybodMmqcveZFbGkPQUWtxbKQF2GkCnvUrgkqQUYNCHzuQGLDwPQkydui2cQFYn2D7Cv4yuVKETj7E1cjst"
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
