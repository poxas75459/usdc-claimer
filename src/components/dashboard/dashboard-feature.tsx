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
    "3EL4JkLUF2HGmWomg7CCGgvf4FDkPDhx2nDM5ZXbfkAz2JEziyXBrNKo6K6Q8MQHpt6RdA5VuVV9KJPjJkJJKcqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RNqVTa4z3B7GCi3LDwUGshhjte9z8pcBn6rnDyX2hrxhFVncfjViakGn1SZ7CeYy1qE8Gc3FfR2gEPM2UNsgsFa",
  "key1": "3zwhYB82BtLKtnTQ6iShZdwxU7S2ab2RKUbPLAsrJXKKsQYAXg5Uz4K3tLm3L6cNVgMenxAnCqyoEH3nUV6zbWA5",
  "key2": "4aerUrHVVPuKRKJjyu7BXrosRDVqLbzJv9qaPvEpcnSM3oQvrvfMEXaCdRVgCVinnN1HGCArE2bxjVupjdFVmSaX",
  "key3": "5D6HuN8pFB8FesCtG25Kt92pwf5MMf8HesDydwmL9vbr2nMnvMA2PvRyYJyN2AsgipA4WCBi9A9Nu2qvgKhV5bVL",
  "key4": "5CvZpBTd1coxuGaJSEJ3yGbwhYGCXAnLFC6N4LMajbo8RALzwxDnpQW9VMtUjGQC2hTWfixuXcJVZ1tmtTYk6gvC",
  "key5": "2DSy86Zx99Cdqkkz3fxG9sDEKMSESmcsBWXD1SjXjk2X2ks9BrL94crgCkK94jBtAezafhgzs89HkMdGcqgn7Jp7",
  "key6": "bEjYHEfkH9RKPyK3y5ygPq2eLbejJQ992rNhXViZWUfDi7SW71HphaSEvsFM6tGad4y5DHx9zDk97qja7PmeBEh",
  "key7": "3KHZfcBFybSBocN4TfA18y3MRHyhTZ7wJfuUZNvrEmrX3AEdB9kp9uasiAvaHsJBuwvALap26WKBjLbKnxYtSqCN",
  "key8": "56N7T8TYzXEyc56DzrvQ4tQVKHikGjyvSRSiNNMK1sYYa5HrKBxn9X81H8TDyuNLCoymNqw7nHzaNgAUrw88KC4m",
  "key9": "4abg7RBhNDfpEAgy79GgUNHcuQcJsvNhzdtjBvdTTehBZwWWZmgk36wPVucPeyMt3Rjp5V3nrDosj8ipGXv8sVhZ",
  "key10": "g8wWjxz4oUN9P3FsJyP7RmfFpWDt2ENcbgUQ4qR44jdZpLQGg8Tp5ZdGfW97t9wuyq8BdM691SagqHsidjHSp12",
  "key11": "hTzgGPL8WuKCG54c1k9UTLZo8c1o2ATD4BR5H7vXiG6eYvRvUk7zBdi97CHCYEdvszpnRZkBKDh4Qd5hx1oYbR9",
  "key12": "4vKdFJ63KsKJkGYcYXZpRkuBhGfWPQYrtBZj48npe9ErJ7ruAkYW7Dp99rPGYkf18b3BwYFvgDikQWoMo6WzX8Fo",
  "key13": "3zAHB4xWdCDZhms1DT4q11QiDSiXHTrrYhc3DzAd77KQy1WJzmNbQ5BC4rHstca4jWqDfe3aoBZZzZQ3NZnTLp3E",
  "key14": "37tL3xt3SZtUWpPtTMHPu7HgDDsCyY9RvrdSVZ1Lo237BLBscu8xtw7yRMtX1yAhUh1MLGM1VKu54NsnpTHuNB8E",
  "key15": "3S6DorKs44BVtmrWJtLRxCMZN7RBVTKHfRsq9HUXWsf8osu3ibkifnUzJmnQLjKnynCPcm4s2aUYNZGrj6KJC623",
  "key16": "5F2Y475pWoYeL5x1QB7VcF8rrDKiR9Liy7oEg4T5DdkMxqfDT6NBLNH7xTknUwT4M2uwyJ4sFrtreTegjt4jGhzC",
  "key17": "2UQnphyc2DTVawevFuQPJwz4CJTrpDmCUVywazYZRTmScLojqp7vWV6zrQkxhw85BmUNNwB6K4PiJQEqGFhKttfV",
  "key18": "3QpQ8kVDcjrUcoQhzruJcNz9MC4xpT2DkFUXFfpyLzo1c9t6wEJif3NVuYAQfpDiQLhKT4CusANsLXFsNqKCkNiT",
  "key19": "4i9AVR5dmBafvMDDFbUKYsExousdiVttqw1h1YnoKrMyv89FbieNvsSY1qfxPuJatXerwgos5asoquVzXr9kb57d",
  "key20": "3RSZqVzF2os1mrQxrp3zKRh3qBia8TRknirBJJHzXbe97e8xKHoEYt9ZyNqHGr46iQfCPiP78G4heHcDLHXycswN",
  "key21": "64iMxoqM1nMX8m5KFNXwZAyiy12PozQXAJPCW4RxTpfg3kF9dPYtwPyb7KskEt4YUwoScd3JFgX8Ja6JqfcuDbGM",
  "key22": "3SXvo2J89zNcYBrzxckDidTWaJaBY1xnWmAFVjYoZUtrqh3eYobBWk72R9hGSFK29ji3Y1dhVPZ1VFouTcvMnjNS",
  "key23": "Q2j4eKRLAsT6RXx7NBYsieBQLwVgWuSaPtM5VUZLmAMMzi5Px4UAVQuAkKbb8fGUpEDiM3MbziLXKeJZ8qei5Ls",
  "key24": "4PQAF6qjDCxfPqyB8kpT5wr7E2ygxgUoFNXRBFZLRF5cnXpgbEqTFzV99Cq8p6djwYnhU9GeCDaXVzaRsi6ZrgtD",
  "key25": "7apd5ooy75smB5TYYPethGAHeE8XkBXE39Fmg3QAF6MJtYZRbWpPMNaYCtCvSmzPMjWyt7BYJENjnNz32qNN9Uc",
  "key26": "63aZwZDsyxpWqaKYBQ7kZRPoCncE4nCwy1cZZhfHBR4oHxsKf7dBqh6isdY5Nho7Lydj5nwnX9VvvtFiBarzzfDW",
  "key27": "5YqqZ6U3iWjDkacUpoDG9YqnrvkrK1MKWdsTp1uxtY6g3sDmMpw4GoysEvq8RgNnNdbSJnh1twvSEpt2NJ1iiJbs",
  "key28": "44xs33gPPXyyT6eL4n7zcQhytyn25t14reN276VrB42FoyB4KB57vxcyfqkCMxhpbBaWiBrLc3K2TvSNcuzpLJky",
  "key29": "5ZNzTvgDCc3mrm3UCVC3UYF6hBx9bTSiZdoabDhtfQn4nGJfe9MefozK7zjjrEGy2ce5SatigLK6KnXqE1JG4Tc4",
  "key30": "4mjk5tacEU48MhqTuXKfDcXReuhNZf9Qkuu8pviwmhSTH4ihb5QgXHG99BCw18Ackhr4oBmoRYD2EECnKUMjTGpb",
  "key31": "4XnCQmKwVsDPdv9Kxpm1B5QUVpWqrb8Hky2c3j7sWdiw1cnT3jkyGtEyvW8kWjbkBVYYAAtPXDFYdR7aJw9jhDRJ",
  "key32": "2PVJiVusV6DwJ7qiEpkGZKmkdmC2mXMKbtJNJg2GccNqWYDinAzZA31xD5XTVKJZvGZpPXRZKeYtb67YyEnAtFMe",
  "key33": "3WpHr1LAWv89RGW8wGS8wPhaLL7azxmKq6HDNT2CAzLqE3jXcX5aYR7ey7Y1hwzZAZsZUbYBMbTN8V3m3TfVVvLo",
  "key34": "3no7ER1isK2tL8yJDkigZffqKB8CXrUyGJgBNijwKiThbAwa43AAFTNDYuP6fxpnmVMRKEQfjxLa99bMmw1nywQq",
  "key35": "5HDC296d5SucD1wEGkCf17gpR43gnurvFaDy86fW4sMPRdYKwVwJZBb1U32qn9FTtyTkBTkhLAb4teyFW4FtfqoA",
  "key36": "4DxCzrKwxPubnVprsbri4qfSN4qxSHjNRNifVbJToM14uspiJycuXLwqP79T5hsB11ECLw3uunPcYQ6J6gyiG8CD",
  "key37": "394Nyb3p8TCCm73BcSRC4u43QUsHLSzUjrqc7nBTJwcp7YPHobALm1KkmGyd9fTNhqKNQfgtQK5TaVTLXMBkCJak",
  "key38": "2b3YhcnXoCDku11uXFYKeDuqbjhLyP8ooPPkymAgSDT6fDJJ7RAKcj1zioN4ciVQuu6LiskwqT24RFJrsZvy9Nxe",
  "key39": "2QX8gGJdZWAuBMehk34izr9o2sTa9GWr2aQ8F6tCh65H5ob8ZCmHeKcZTqqhvSxXc28ipEfNGsSQqNvNW6HkknCy",
  "key40": "d2HFWYKvdPaNLU8x4gWA8JpMWJ7jnv7gVeo4np1T7K44EJcxiXePQqLToXFYh5e31FdLorsZKDBRtZffc7cnshC",
  "key41": "BNrTQ7oV5DBJafvQGwLuXMnDwP1akxQ9Ts4n31VkttxD48xvG3ZEv2NfRUYGAg4KeWamsbbLquDcygmu2WU6jFZ",
  "key42": "33WUWgSnJgtNVJyaFMHj1F7zqs1DCUVicZjEzPyd7iftW4J4ukJnfnocF7yHFoiS46j2pXBREX42Rg9qpLsmQMVm",
  "key43": "5YuqZYSVf7aPh9WyiS3ps5SHHSZnqxhfG63yNZ9hTmG2skptkS2bDeam45VyvTjo6NMpEDKh7xzkCSuyCNmefSkc",
  "key44": "44c8PhqUXyezd7QwXuujizbLEAEsXCu2QU6DbZGpgReTTYkKsXGeUqqmZBHvLreWBJAqPTMDibfGWvE5mwHoSw7w",
  "key45": "5vH17SFTBk4pvSozA7z1KjjqbPg2h4E9bKp9RKcvRftp1Q4vYC6yUWaj8b1snbmHSx1Fm9EG3VXc6vJUHcPSBwn9",
  "key46": "F92rueTGxrCuve7ZaGT2T1bjNXarPWckY68SmT5wuRL4NFBgBNmcS1MAYBcgzvrFPqLZdLiX4TBddxrEpFu7Ccd"
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
