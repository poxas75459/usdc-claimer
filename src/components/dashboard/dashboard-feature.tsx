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
    "22XjCuMowjKVk5Ne6YXFmX63Np5Q6araKmaR38UH8eAuVW8AwBNY7wwHrHsvn41c567WcxWKkGsNVL6oCe3GnooY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cdBX8fb24kRLWckaajuNWjc8iRai4wiiuA9zXzs2dqxkEJSYPpjDU1CCtvF3z1xvrsGAM3U9EpaoSEYcDK7gJcB",
  "key1": "4NnQuy8gnjJerfEmTshyc6L8iRa99mFcJuG1Tk9p89poeYRwSyMHGuSvzhWhpwCqhSEbq97dZoYTGzd71Mq58sLJ",
  "key2": "47w8DrBcEee1xByrRgSG6BhoMyMxLhHaP1Nq3qcyW3p8B6QeTijaghJCV3k8zdrxNPxPvqEDCrRHpQtk7YhFkMAG",
  "key3": "4rgox52PRYspoEuxsAhgFxFV34G7kDTr1VCWfUidVD79UDbRSuDwtLUd5T1scYahWrD87G6bYbwxSguh8smwc72K",
  "key4": "5cAtD1TyyunmSWVfStr476g1PArAEYBLs3WracgDBQdY9C55A4TtD5GoXXVHRYn5fJGLyLB21JQfagX3b6HbUQ28",
  "key5": "4TL3UUVmNVKtVWQin6TMGcG4QS9XC5KQHtk7ESu2mkKkdWEVhcCsT5GPftwKeLuErLWGhXk6fzbZyyBQMZTaZpLh",
  "key6": "4FtxFoMT37gdCji6j4zUJrqrXEbuoMVpNRKUSguyEptczHxguSgPBE6tSiLFdXu96YdPFm7KiQvRAYJSEQA7qTWx",
  "key7": "5yFbk3ApqzQ1eS1AVJoTvfKw2p3PszPZVED56LLuxsqyzo54PtoFMVaA1nmbGoE6BAmY5DUpaXCPJCrwjH5jcrtW",
  "key8": "4qHNEuHJXvPwfswrT1ZFRnjvZWDTqCRi2e86Ce8sB9EW8HUa3YaqmYTR5JRXk5RVWrRQ8YX2dPucjVRSYDqhPNTw",
  "key9": "4XSZoaMRdFtoULJeQEEbT7KMyRaP3X2BCCcdwJAi3UDhEwAtPP4HVxocC5Gd4bPiUq76unWPYU7v1nqCUEGCzeBc",
  "key10": "pXBnWPUzXAJsESki1oKWiUMQ7kRpMLVjXmrQj2v6tWwGcf6QEbMA82J8Qr5fvoTfzyr2D2b5xwJD8hb8JPq8Esh",
  "key11": "28MvaaFbbvwnYEEfJWavpKVtHywekdSckL91KFRwBkA9qfS2BNfuHpeYGT5r9dn9QBqJG1pgjH3RCzTUeDyRU8vM",
  "key12": "3pMbgJYnxC9J16u9qZ7mYtALcNjyXRKKgFc7JMtuQ56M2wjSmutEJihLZtWGj11zvTRXUMhwUFQ6zPrDKfPkPmND",
  "key13": "3qG39uFUgkb2VEcSQXKWMj24Kui1HZEJWkY7TsowLpkNhxpC95vbGL5rrFkkpoCVm6m28H4xtYg2eHfgY3Dk3met",
  "key14": "XSpCv4zScC6brnrdAyk88UPJSfyxLFTXredabMsFqmDYPSDnoGHQ9GeBHmbdWZXUpFmYsEWfSn3xwQZtT2gXP2n",
  "key15": "AjK28RVkVPiTwMYmf27vr5xTZj5sZgFwFnovH7MECNRQp4fa5serNM82qwoQTRMSnrKygaDWhEqLhLAQEjaunYS",
  "key16": "4BVoFsS1N94kdfQsxZyfg4EKwsAvx1S7doxK9cHUueSkA6mYxfjqSeMEtpnNazHTDEx8k4w312wbjvmRJeiJ8MPk",
  "key17": "Froohw7rzCZv7YnPwr7Tnh5yz8KkXv5tgjsPCdT1XumjzgfGqjp5xByUzrdqu5J4oTvqPSEZXknZFLVeofTpjex",
  "key18": "LHDXrKfa9FN4YRMTK7NhZ2UaWPJj2PJLDQ1qNYqCJzq6wHXob6b39NUnPQgrLJDC93QqMJj4r1F7gX5WGx49SEE",
  "key19": "SU3iTDFoFz3xpgJPBvyC5VYvoFRjUjJLqZiAr6K7ABxjDY3JLZm56xjarCzkJrR53mQkfkBUenAvcVAX4rknVK6",
  "key20": "39y66Yi4zwgmHm7VEfuRmabpSs7b3fMAdEiwY4JMK4qWepCwXNmxfA6f3KPXUD3ZpsEAMsJiMwzPQcbnaEUanD5k",
  "key21": "8YmRaNowVQFCXsST2azc2ivRbgzGHwaA4QERPaWABECH5ugU2YMjcL8ndGcG5aJQfKzrYTWSBdcayhkEffv3BS3",
  "key22": "5skNKh2VkuuJhDNGcpP4arKYEzNbdTBJw8t8yem6vpVBUJGbmeqBjdMFCV58M96QXYtmiR6xg4yiqc7eWs7fgyWt",
  "key23": "4LeCDtTdUUhq9EpoPGkUJrbbF7u4bHALMkTCE4kzKovQ4JPo7ytrN2VhRKcLKAqg86jYkrUbSY6gCqydff8QsKkm",
  "key24": "2gE5W1W3mk9mnLwAQnMXy1auW2E9nSryVENBr1qR3qFmv9uFXHGDz7Gc9gsP7ahDZJMpZyBbg63xce5JZMXUFhnj",
  "key25": "5cxx8aNVDeAa2iVLaUhS1SB9gvTg1iYEHCRN3FHwWB45UjTpP1yWj9rQL5N7v5wr8JKETsnZ1GBW6rJsk39K7SCm",
  "key26": "5cwy7A7LdVMxRGL2K3qwnowYVnksEV3bQBoW32U9zwSrHsJMk5E8irJSCqir7XAtPiGGPgyGnY69Wp9nMvjisLSC",
  "key27": "4QmvQKwcUDi4Cfzd4dipDeXeqFd6NyKTe6ruJ3A2ms3WDKEL9t8uNKdCQc2u64H4o7zosb75FNeDurbAzYj9FQz4",
  "key28": "2QJ4GnyirenzZKxWPChkLjmz8QXPmao9Gk8qmmj8de1zWy9EUnEV2XVZJecPWDmScCQ4gPLYbgd2631m3juX6GC3",
  "key29": "2Xp4NH5fJraumgYXdVDc3obAyBMbxpr33CX4zpvPBf8bLqaqENkfMgkt7zA6a2CrCDbiB9a4TtsoDxetv1GGwNmF",
  "key30": "39iN4dD4WLUoQNmzQTiNgFVDYzJQZAP3RkTGbiQSYqj4wd8ceqRikxQhK76M1mbjDiDgG9cEp2oMx5j9j24Vyhoc",
  "key31": "3Pfuy1RJCqviY84LVzbM6BEwjZNBPYf8yQaHie5k4veesmaxCncPoYsrrohNodC7YzdKfoPVJosF7Ph62PduLcgx",
  "key32": "5fKZ87sTkwq2a9Vp6FXiwj5Pgs1FmLjadH7HUPn3NQP1TpHFRYTCmQ9ayqZbrr1S2J9nzgL8ShxWwvVjo8sotATz",
  "key33": "dLc84FcNgi7Gwu4pxXJ6BLiLixMU1sik8xGb4FzjBc2QWpoqe1diDoC8aMPHbbyByMSskbDJLZeKHeHPd9eKEv6",
  "key34": "2doFhc4PPqe6ifN1vmsVyJQgbdcQ2vvnXCWvhCRucPBFxNgSHwd2BTk3Pi2B8zjHF7AP1hVuwaKTqBkeAacqNqEE",
  "key35": "3dDT4TD7JiSVe3yFiuimWaiXiVsQeGjCHr9rhFe2DwyhAh4Ze5MVRDo15yPYWdmLW6q24p9BbmQyo3sNH8BcjQ2H",
  "key36": "5DrxPEnudZ3sZJ6yzGKcq4FhaPeqgSe2hDw84msCE1S18miwBjJyHZEhs3VVC1yk1h8Ya6DhK9aLfpsTkeEvEkFe",
  "key37": "6RthWCeUTuxYPFdiD2F1EerCLvvUQZgoD69pURUGQLx33319Xarsdm1esDoFZoTtR9XfzzoL7oA383iwFP753f8",
  "key38": "3tvwKSzxfzD37baSBqRASz2f4dkr26pUrYSrmzHycYo52u9F24ndpoRgrz46Ze2qsQqYx6UfWmx1HTKt91yASzqd"
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
