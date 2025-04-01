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
    "5JC5wVKHv7QQizxf5kx6iCyBC2dXDbWa72hUUAHiT3daB8WPBe5kQvWaBtx54FeJGQHfzbodcCB1jQ4ity8gvaPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r5AV1JtyPXuSMtMmyysL4P1S8egAKesgmNZYzzscoF9pJXMBYawmyKmL5saPALk9FuchRE1uqEWt4U8XFMzcjUH",
  "key1": "3V2qJTtrga9BcBDUbnwNqVdzbL8UB5XTeXC8dNoMKL3ThVwnB3jRRmMmduGMdNJS55TZdVj3yN4CQUjYnsdEavju",
  "key2": "5b2vrVPXDDcg1Gg5yiB9Jwdciy8n61ELdkCQU86WrtigcVYnth3auHpdt4DBbCHdaaVgvJQ22vtEZRezparacUc4",
  "key3": "5XwjSyBd8FiXsZD3Txy3YNcamfQPfDbRPM5vSLYyw4K6ZFRym9jtAW38d86ZyMQUAaqTxt6QgyNTkDFH69vBnM93",
  "key4": "4p3jQqMj5pWF9sidL73Zo5u7dc8NUjy7Fsd2vuac5GCGKa6vjkZTUbGbBNoJkrbPTDxhZhxq3bRtQiViCpyTs4d3",
  "key5": "4jxiAGzJt6m1jE3DqcfmLgRpPG9xZFfazg5QayWr6naeTPwAVTvEEiLGiCN3bj9DvdtmNfBm87ji3GnHSd5K4Quk",
  "key6": "2HAHAvwWJ8AkEe3rei35N3dEWNjG3roV8D9UFLgYLfX4HEnk5LNB9yheWA9fdZRzRggaGD366N4H1g7XyuGRuRFo",
  "key7": "38R26jLoeETJgcgoRGttWdVDPqwXVvNwyYS4ooq7NzgEVJbFCMVp4eCzLKXvt75CYo9GCfHN15s5Xrv8WDkULfnR",
  "key8": "4mwzUPsrBC5sZMmkRx4S79bdEtcU6uxU51HAw2mMGXGsGxr23CGeDWkiHEyrE8mvggtBeM1QKLAaZvWfRPz6g9KP",
  "key9": "5ywJnLLr5p1Rw23RL29aY54RA5Xg7MXnKpHEP7v2jFMkAzdm7fwAH6UkV7FcdRp3ZzUSMBtnZv7Vad5eL9KQSFB3",
  "key10": "2HC8hniQRTt4tXhpThkkafF1E2bjc4R1dNdyuLvL5nxY3SwpZjLeNPMKcLhvqVFRBwztK8BP4sSfdAhUDA1jub8J",
  "key11": "zy9f2WtCrAuA66keDKJaKwoFAojCAr6oLkhwNLdUtpfgputEGB8UAaGhcwGozxRnT36oBot6hSPLVTQ9JSp1UeU",
  "key12": "3A9g74HSB6V41uqjqUCQXJuEaa7WN9SeUARh39SkCCwSkbqnmExt5HXge1t7rq895L324NDHqDuFbc4bGKEAmBJ8",
  "key13": "3Mb8EQUHbb24FsBUqkGHURRZgvbMqf6jfwnP22YX6fYdxqCeSxLP4aYxz5DzfcNJw7iWTfVNAKdr4W8ojaGi9bdi",
  "key14": "h9FN3dPkVyFkueCHNq6VsLaNwzAXVk5FVjohNbieqTZ3fzfj5YoLynBEXma4Y4NLDFpNrnyQG3ohoizsjNphGJL",
  "key15": "3RBVbr65odtmQAJRvkepQQkNGitTFPQUKRBfDvHeKDBQmDMPsn1c2gQRxqcYpEs6RcTBtXThJprh6YhKtuS18GmP",
  "key16": "3RJDBpYH8HmYRSrpedjgG8oevLmP1feDPh6w53N4HKpLuCWTrko2qHMKL5ZpoeTdLdUsoHE146Z2DLhHGwhigqmP",
  "key17": "4MhEMQptV38pArLUyXWUq7x8j9xrGFYMnRNN26QXkasHPs5rUbavybN1yjXz2P4X1vZmkyKFRYSKkcEygWyMuosL",
  "key18": "px4bhjdqgxwqC2SXVXVCEaJixiAuUReVcQhyHj1RxJErzSfk1tzntpyeFbLsKrhbNkSQj1uyb9c9BkvT3GVPZ56",
  "key19": "4gxrC9b8JKFb2Qo8HNcDxy1nfvDR5HhxWLHzsCHgAAzE3eFyCR2giooDogxDeYQVh9oAdy569xpz7dVyoxZW5Auu",
  "key20": "55ioF7h9Rz9y5NmRmDFhhVwa8yGsVBn9aeiknTcnkud5JYopGyFeK2ZLtGRcVjbWsCcZpJ8xnJjdZQCyxPtRXEmA",
  "key21": "4BuNdZscpUbqTYCwr2KibDFDd2sCFEr3fqMGT1XZkmzbSTn32R5uxbjDLJ4h5MMiVGQ6AGADj97FqjxtM9yRgdsY",
  "key22": "5HwrmRPoLxDdsUmAWsiaF2Mh6KPwscCXARsUN92btumRohLZcPyQEjWdqDS8zJ9V6h9DV8fQfRZNa1LGLtCAPtwN",
  "key23": "Gf74hSGWpVyPTvQuU6gzvXkU4Z8wcMupArZhZTbJke6EciTg7f1676i7XGAqUTdWwL7gRrSrxDSS7AaFirT2Cxf",
  "key24": "3wx8zHiYCX1zLw9rXFUNRMxKtAWZcuFHLRn3XN8yNxRcs3Xwy3SeMofRvxJuMqFLCz4aeGmGG4NhiZxcEgfqPmD4",
  "key25": "2ycoJz2PzJs3XQ3PbpPeyxMhHS8FkNosYuuqQNkWwYqSmxTZo9bLtNGQtM7LdzjpWLbAqvUGjZqarJGAwPhpvUDb",
  "key26": "ySgsLFqwLVBPnXbpMQAK9jRjk46gU5pTRUNe4AMFU2UQuYYT6dxtidXffB4jvsDXUfG6Q1pQLc14zLF5JmgRfSi",
  "key27": "271tzKQj24Byue7rnCzBASLXVmTTG4pjy7JqAVFxVEDkvGiMk787aiaeHaJ7pea5Ht3Y5DXb9RqKBNDVHSQYJWMU",
  "key28": "4wrLQVJbBZWv6xVSmjNfqQA7ufSW2CYbKhfRCzQX9ipVYvd5vfdjc3xHQxL1F3L6Z5FWZwUHzkr9Wwv2Q3vFVHTr",
  "key29": "4QHQ67yFBmybhNVcC8BgNpVmaGud7L1rJ77DoiKvAgzBKAkpGRBYhLvxqrba3zSL7wwHDy5nC5okPsK5RCezDRLy",
  "key30": "64s6Xt8FRc2KU3UA961aNKEugFnDAUzthNGF4XEe47U9qcqZPkYLsS3MkcBCvjZw8NnpcHTdGHNrrpHWtyumm8Ka",
  "key31": "5Pd9JfyLfofgJw7axGxdyj1uaYvMb5mgXyAvPg9ssaT9osuyxRgb4kQkfd4p5rqYsyaKaN15m2EZKenkV2omWGja",
  "key32": "5fSUFToYp3LUsCg91ygN3uckAQBhpFhivCptU5pqmhqdGdSWd6HtjYUcT5FfBaEGnUnQf1tv74jauoNNqHN7RmwQ",
  "key33": "3HSExNoS1BkMVLhtcfDAFCSV3GeXJnMYGfnJdAQvivBmPVnT6NxWb1TWtCKTgULCoDdB5UKzjAgYer9oYLntJBbu",
  "key34": "4pBtsVbTwatgww4oxCY8AXcBKHzYwvfczmeJgerhRJ5miiSt2MFJUYgFmy67YP4aP1bhBBa335fdkPM2eNx2xHES",
  "key35": "24ZXyFcBM1X9qmCfGAeZ3x71x6i9oYekSArGGFMVMYj98bRjrpjC9fr7Nj2vpQaAEBUC8mVFNDeDRGMa8Nk6of8n",
  "key36": "5RfGMtC1LkDchNwW8e8aj5csFqADSn2Rx3pS79xD7CtCLp6vDa6QSPA6esa3FXBDwKfmS361K4EPxUzzhLBzgWaE",
  "key37": "3DnEd8nrA6UpRm4ze9UdGT1VbBJZFUpfQ7if8AJ6yE7wP39iYVKwPCm8NffHhb2KJQgXNe6bqPx7WffZtgkYJTVY",
  "key38": "PBpm2JtyLpa7Ksr9aExj5mbPWAoWws5h4NtcXnzbbS2L2ciJAdu1gvHNfX6sL2WgKN5SHeDNbVQD8kV9oJnj6Tv",
  "key39": "5Q66bm2UWZNddkjs4TcPiRWDBi1Fqs41kgAyRpiYiziSKS2beQ9HP1LV6QiVtb3D8CLbe3Jwpvy7bayhwxE7XAvj",
  "key40": "215HPoxnTS2QrAvBeGd4x6eLdZdtNx4Z8NtDaRzY9Ap9XcnsgFHVqSfq17F3Z95nF2LzPnZkCnvT7Y71SgmJbYM7",
  "key41": "46kVEU3Y5KbKW4LqNHotA5z7s3EWRiDnJFqNJE9axQYpRxYp1nw8qgKn2jyM3GJPG8okVu41yT1W683zD9PNyxW7",
  "key42": "53UW3u84bFiCaRyRQKnm7ZWV2yUS3yGbRQ196tQTcXR5DEeCg4DPfpJpTgqgguFjGbuvBdoVP1x78JCfwEz2SEKg"
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
