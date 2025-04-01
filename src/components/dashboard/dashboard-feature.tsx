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
    "2k6VUFVPHGSC3MdXfoYreKPDeFrqxi1gpVoX8u9aY1aJoreNtFrDgGLkSurQ5fssPpf78frAXoYHsZfT2U7e4in1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XN8topvq3Zq5SxYc4DyAoo5gmNvxhZG8jNj3aB962QL6mc8QyENyiQKUpaDAGFoQhonzaVBGEPTtLRuqdzV7hu5",
  "key1": "3xLoq7oH8oiajZA6hmn1MetHt5HrscEZCuS9rztS1CR73gWp3mYuYuwp1hZLXpR3auiRbSnMnvU5TQdb2kgcDeTc",
  "key2": "2gubLxsuWdPKLez1tm49rnA9zsB97ZmrgNNU8kaZwGU2W227Z7QpfS6tmF98ssbw4M876La43PAkr8ZV58S2qqv7",
  "key3": "2MHod1QPyhYUir5znd2TsCewK9jESH8FPGP2BhVLxQo1gfqJesL3P7xswLv5gE8tjSxWy28JZ9QXUkwWmvEWH5uX",
  "key4": "3Ybf42543JMFbd2VombjXuQpuc1T8zMwQibgzgdkqCCiRg53cJ6jrvBFC5reV32Dgj5CKidwyBSdhAnWPFFD32oW",
  "key5": "4kwNd4fDdrf4Kx6h6BPUpEvsnRhbvXrxRYmPxMG67GTEXL4w8AddcembjgbBtJ3w23FB7Cff85USUwjaYVusEzjs",
  "key6": "netM3zTu3qUpVescuFTam3Dr1HaUrbf5DFW764e4jJ6d9hKBa4PZGBp3pV3Q1Z8gSr8BppcKfpCGvKD6G7ALYdU",
  "key7": "G6QsiquVubNgc2aVdQ37nk8CYs9HTrqJjJEm3Rr7DERtsr1ZA7pEq9NssaWUJH1Uymua55F1FCDitSymp2h8srY",
  "key8": "67qDwAgf88rF3Y61uQ6QZsuPFq6qqpRf3i7r7WDEuPaJgXLp6iiMG4vv4jadWpcerAVhRrvy9iG1e8XHCG6P7P1z",
  "key9": "yFWTJpmUAAToGUT3xfGZLGijGaQTwhYEJvsAMBM7t7a7Eh2zY3PetixxSU15sFr8DZrXaaXPMgy1Nvo1QhRjzHU",
  "key10": "5dNR8Hx7nW5semAGtzgS6MAJuEgWFMfonuBoTRekd4Ja8HRYLdC7Whr19ro8d4DeCC45CzCF1wF4exTaeTDUxSz2",
  "key11": "5qeGcM5Eo1f5BzSqrUkNG72WenoenKPsCrL4vjUMSdUXm2kdCV4e6ThbuQ2GBF2D4cS11h8LGbhSgXJYoMEkFhER",
  "key12": "22wMZZPQBhz3hVqW3F64yrAWiBziq5tJmMA9adUKmZK1wHNHzdT8oiXaY4RaUthdcq44Qi4ZLa33kyvBcMcB1qb6",
  "key13": "3Dsh6jiyGTZmHov8RoTSaZ61bnCTrKqHAEiViaq5xd5GtAZzePo6iVJPyMtmbASzdDkKnR2w5GH63mfn3qyV5xWw",
  "key14": "3oUy6WC7JyKyiCX4dSCjzqSCKRZ3zGY7Fn3UJn1FdZ1Ta47VsbBGPHEyUM1pTYgig5tfVRnzJbjq9RKevLqWmvaQ",
  "key15": "3oNTGCwVwTFki66DAW29UGozAnA1LKst3SDWTt6S7ndW4wQuwvHqkLVzVJ6xEThrLS5cSFXMXgECxcViSND2WV1m",
  "key16": "2PCSV7UxaxyRkRt2QSxgMay5ULetmmSEHqSyeixPPvU3DTP67hzhigD4qoFTqEAnLLgfhuyFTXM8VKjiuRLgGcjv",
  "key17": "37BBasCh6FZWk3zpV21vGCLonLCdWNDmQHb97iQ9CUkzBjpdRtWu33se9PGE2fugAn3vfKbD9Go3xyMkMoVwyEZZ",
  "key18": "3AbPW1GcenXRRaQbPAsZwge2dDPPi53UPBjwbrM4V63JGhCAzWMUjVxuJuJBkFukrMpzMAxKh9zbeV6BbCHizPTe",
  "key19": "29VEnuTVp5ybcGgdCBZaUexqaPi3XAZQzwwjn38fGkQ16imdXB9a2phC1wxNDLjz7CnZG8qDqx5FM7H5rNghJooo",
  "key20": "xcMwN3H3fvv7SbzNouSfQfFXwXbBVbniTdVnnPnFQ2LPBfKr3tFokAmjUVPE6aFb6XaqMojZR9vwD9ifo2Xf1aP",
  "key21": "4yhRzopRPCZsurrX1eaiA99WwpSYsg1q1bUQcoQC89UG71SfUdkSse6npzpueX6vmbk8ppRroiNtLPC2HtJexcJU",
  "key22": "2c5jkAwUmeu8yuJYjZnU5VgXXQJCCi5hJ2XY6VE7GotLZZ36YBNnWmBZ4i1mPPPsBFaQvb3WP23F1DX9YP43DjYY",
  "key23": "kfjiLW2km7uwsgLGCJ4b17CvtjAfTqo2NuZfmmh1wonhwpfYWAaVXwf9toScVfCstnCm6yZ49stcpwUmABYuMmK",
  "key24": "5DU1LhuBPodHha3BTeiDyV3PFMKbwP2WrTKFjNKTzzMMm5ULft1VmZBHTrz6oDLZfsNCQQs6v6QWUer7kijcFZcy",
  "key25": "5UACcLmcrdSa4gTvgACKhmh1XAzR2rnvtXViqfewUh9nT2d9jWN4fL7hdm8AHtNXWcEju11CDtM7FYQFWSoxsS38",
  "key26": "2ib1HgYeScU4G5TVeXHq8EXoDAW48hCqSa4tvV3hdcpHbMzRbKUzKPrnAY9qcyxJkqVptawYJQPRDEa9Ni3kPEzH",
  "key27": "2yFSvoN7tjR1ixt5XFpWMSUVHDsgca59xQ2JBmvD1JGFmuGgCVmPwqBggJBb5oo4japXLXKAmfBdX8kS5xX6LALb",
  "key28": "jcLjFQ6kXw2VC6x1VoPrmUbuT1cHPVskwA6V3e8utvVkHwgDD6PXYS2ronc9RQbA23MZMNHNYFjfQBN5bB26EKu",
  "key29": "3toptumZEP4LgH9F9MkTBTE5x7j7YZPhGVk5teosfCUnJpad31aQgiyiA5veyqMpxNiR5NeR6oLLNpRiJf1LmqEC",
  "key30": "xbRPR4A8kVZYQzxvEVeKBmnRxoBCwmFsUJGrjX5wgbofKMg9Ee5WUM8TdYspHuEkhy6zfGVLuRHnAd9d1xpJcLc",
  "key31": "5EZeHbJjUG4xY3inFtF1YndjWS5dLYJTBCUVrxgWuuYnyBM4tJ2RxeSgKTLdpZzjhVfmWzp2ThKJUsoAWCbWAxsX",
  "key32": "33GidDuFh8hzadKt4LZeWFgE4QbpHWEGn37k8M1xQVtmN5SZnvUc3SQVyKrh9xvr2rsrUwpNoGxrurRiVjZ84bt9",
  "key33": "3CV7XUZiutCiTu6VFFtzPZSu1BQFLySRvYbBchqacjM9XLATDgr9MF46qBkM9xvqxYTRvX6rvx8Nz8NXhYAtEYzW",
  "key34": "2rZ5dKJDUDZEuhHLNQVnoVhpKg8uZdFEMPPD4HMzZeQPFRSfQXagM4APGBxdrUzQXQpkPg4PqSLRBxYWN9tr3DRZ",
  "key35": "64Jfo6Y6FuHDqMwXcYzvJmQx7pXXYV1D6Pc7ostTjc6EpHSHKwDKnorgJvM1zPaM34wBRSvSE7FXEcHsp5wgvhGd",
  "key36": "SbmaTaFP4iwLXAAYbzWVAkSPxK34NJNBgSU9Xs6MUoTMTkUNrWtHTnjBkThTpF31aKmxcfGmsxk4xSXR7r9jUwh",
  "key37": "4uzz22WT4iumh2pCkS8Ys9NWc8tqmgLHdRFUzqydRr4YGAfNwqqFbsjYE5HEB6byqPbr9BrHQdPTokqiG7QAjnkN",
  "key38": "4Gh14CKiuZncN1PZ5XqiD8TVAzr4gjKoFNpNMssznN67sXTgQt9soZbB9v48zntA3tEXVCExs4rLLcq74zF6YVQt"
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
