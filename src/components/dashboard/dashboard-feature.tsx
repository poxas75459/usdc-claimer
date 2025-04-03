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
    "3FBCv8SUGfiCBaXbgkTbLSrmrrAHVkZCzv2qbsF4oABhDeW9W25kL18pxKpYKYeLSNF74ymcxDcUHCthMfFm26BN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mYKeDs6bVFmyk6xLwc5124paBSxCVS6UdvUoHAgZXs469VD3XD5HQfTQtYA4uz7iiZ72QrNjj7eEEGiaPhh2B9k",
  "key1": "4Qr1mrsnQ6wwEP9ohbMja3CPwGrWhGZz2G8CP25rrE4mjv5ssHmiKyVMTkH5hQcZuFZ4DmsbjcgKePPeqFMwGi6r",
  "key2": "ZAD7rgo33LiUetyVoXBMWChJNxDeQwJW1sz4NyUhwP5ZrgWBEWgRxgvoPffKtkSr6fZtBmJZzYar25FLQa8ozjp",
  "key3": "3EfFdRaspwK74XqfKWuaZMat874pM2gjwRUnYpJhP3K1H5uHimV4TXUjuvWYrp8Hyqeo1fZQCrAm8H8edC5vvmfm",
  "key4": "617MfNwiN7XxXJxToJ1MuTGHqSQoSpZg83vRrypKzHkqjeMPhh99fTZmHcUw7DJsGVURQNX6ZVuAKjfg4eSE6fSu",
  "key5": "4h9te8KuVBaPXYhXE9RngRcxGVz6DvkNqPoc85KNsiezKwnEXAJ9D1mtmxM7TUCERARDPBDrCAJc3fJoebxLvEfD",
  "key6": "5vee1VLMxYjAti7vaBg9F5B1k2ZTvxw8d4c4QLrndw4KZM4QoksSEruEGkUKZtHcUGqP4ZjzMy6Z3dM9psc4zPeh",
  "key7": "3V3oquohTz1edgQoiXr7yuWhz467JGSECWmH4FwFhZQLQr9LYJTdsRXw3XvprzBjsLo6KU61NKqXCoVx3ZrERnbd",
  "key8": "5fQc8dDp7DV8a118YYhNqaRMG3iRL82MAuPmLxKficPwVNU4VAJhsadqSPGRrPbJdYrVVqJ7dBToJ9NQnTrJ2mDh",
  "key9": "28Pzgb6gHh9mvLXJQUWNsBNk2w6EXbiZ39SRS9bKL3eY6sKexT67ndQ1FKvXYhkccCmq9EibJD1jPxh8HtfQ3Fsd",
  "key10": "6647Ec8Mih4yMcmqpaedMrGMpjVGyayCu15MvmQRc1Qqbg6tZzL55UkTh2LbSfeT6fjR5ESxxjwzLhzMohygYcuc",
  "key11": "3TgB7mqF4DJMkvwA6vFJmw2HjXpUcbJR9WWDCVSYSwxRjghxqJMqTsKP1MMNgEeEJjC8YXaKWJQv1Mg8ADX74yM",
  "key12": "53bevUezap2vimguKPW9Wn69T73mTPys6UDBRqGJjCH6LL1XPzn97cPbCRZEo4Qhqv3iFoS89ymNUYD94vYcVH6A",
  "key13": "2ctWCyT61LuVZ64kiw62Jg7Vq9t2YthMwoW3YjBFe7BRA5Z6feWYwcMrDyUCFmvXQUeicZXusHMdtDJSfcoXLgAU",
  "key14": "29hRREe5XJjGvDgZHHH4jPjgWT13xwSZGEesBYhRWcu88FmqBBfGMm9CCmvbyNaQZBJB7WLVxb2yTifmA2Y4XP4r",
  "key15": "fqLKxMDFegU1izzB7PWZMwcNU2erbY72cqXeTX2P874T8iMyB5sYiGHGGmGr9iRtc6tJYECzVxCUFbudZ3am4br",
  "key16": "4aT4q7jrZ2MXf5Jk8F3whD7CHPQpFSWAiMFynVPhsiVqRLwwkcDyYxtrgwC3L5yu9mLtpfzgcStkhmSJLspGZNP6",
  "key17": "5hRi9omem7pDjg9LK7TbPCopZVaS5wcsWT4vtNBqSpnn4P3jNvN4TSsCgu7uJDfur6pYqofmJdSdaaYDo33JsTvu",
  "key18": "4GBBzMQxCoBEy9WKJNCpJasfm2NH16QjUQQR9jFCDuhUSTmoaj8ytPw48Q595wVZtp3fST1HSsD5vW5wQpEynHZz",
  "key19": "45FE2YECv85gRdqxX2RqsjLMLHyaezZkPMR6sqzhaakGHNxbEFzomXxF7fmMriDokhV2XPpMKDkQTRHy2Bk3Bekj",
  "key20": "5WQJzexAKpiwBfXtZt956MUTwcUMcVzXXVBmYbwe3JFLpFPFF79vHFZ9DDKcu8ZgasoMuLt78aaKupMaSG44yzM2",
  "key21": "5X5TaVp3gaX8PLzTpNNUT4u448MCqkdGFNcfLMV6UBqXt5KBZj8apvgm1jf1UiAxQfnv27Bbr1oHm7SqdcmkBYA3",
  "key22": "4LKTejJv2JVPZSUuBo7h8uW9NqcCc2NGoFbzQMKoF3p5XnjHS8XnagNs5U8X67j4kStAigL8PfY1Nx6Zj6Kha6Fu",
  "key23": "7tAcDGEuPssUVaTEm83nZJwNAbFccgWfJyBQ8ZAWXJ2pevczZMY6rkWngtYKXp4p2tDx4zeF11wYMhpzta74cZp",
  "key24": "51E4btjXFeqfdqXrFQRmByzXCEcYz7y1KYbEGPXFtKb6GD9AmNx1Ztco3bJa33wCTr4jgArpk5f1YcT1btDeQphJ",
  "key25": "4EJZuPDMPJeo2FMVhhMZ6aV5NJV8oneJE8a9cbJWSodgb9jyAfVBCFo5BareWhb4f4RrJro89CAm8u1nEKdGZjth",
  "key26": "3iWfGMGmNYa2WZe9QvUCoWyrCba9TZWBR15FctSJpHcCo5M7wnqxLT3Qm4Hc9znzVh7LgngG5wgPcemDEeVQeqdW",
  "key27": "4Cet2tJmWUCces8t31aPPmfUsFL9XD8fwh31LgauMuHwsKwPywb9tEKbfHM2mrEkFtkegkknugGfrFMLPosbHqCM",
  "key28": "5HVB4wHiWxbiFWHdhhwTCMD1MqvoVn9GJ6oWJhGXRWJ5rVccrWnAeayu16uLRgVMT3w5QbBZymC6x6cRxyhkH6XH",
  "key29": "57QmFuhGYDtQv74bARp6iymFm9SMJ6E2kMufncafuRgSUvf8iMDBvLuPP94rir2Cd6NYaGmDBRcqsF1HWNjA8SFe",
  "key30": "5r7wj7JozbNk1hn9HeBDCU3dKP3d7fpQ3NntzyNiNDJy59wsDkCYhHS2USiwEebHYmA89GZQtwKuGU2zzyydkYgK",
  "key31": "3NvULJ8z3SxNPgmGZU2qGg3MriDUnX3s9agt49NzBtvrmaAwy1B6aMK7CjoCkjrUXWb7VJPjKWLXufqw7USgXxvu",
  "key32": "5HigNzCShdAnHmAPX3fHx38abVYBeQj5pZZ5HmH9G6tzWigdgbaD39SiJHZu2k5psM3SzbZAVDStYAsQu7myoYVS",
  "key33": "2HL6qNELsEdAnNWwUr5eQ8N7KrWztZXRdw7C87SRGQma7VPZy2MwobcHjxLJHm24C6vq3sLpje2g8fBmNFG8b89L",
  "key34": "4Ux1qNsoGYWpVDmahp1jwuCq3wx3d4oAsYTpDhd22ecX5pHzXp6uipdgfNLyY3WL9FTbUJUMke66pdqJrw7emHDY",
  "key35": "54eKpN7LBhSHM4SF4e4qGzF1Da6uDDg8jL3urqKZBnQz21JwfUpeRXHwAECrLACTRS42cmrDi5R6QAG6Surb7hTe",
  "key36": "2zKKbEGpQagRUgHQu3wm1CaopkMc3mdwCKyrQZt3XgrSazimNeYfof4FRnxBzFRHyx6inUu1kqMFfh6iA2gSv6GU",
  "key37": "3CG4CRDRSJkv6amaPhHYi7DCg77LVUsnDjqg4XC9CjbxPTnrMPXd15r2vJFJPswYX9PbdjvDzkNyvcpp7FGe6Xrz",
  "key38": "5chJtCaL9d63u6W1iaZvhR8Vi84UU7p6FCQFivdCPP2jBeSLF4G1NJHPRDNVDgqBZ51r7xiXtRLpvhCQdcg61umQ",
  "key39": "66oRzUYw79LJwV6oAH5jn7sgynaRSp4ggXgjqx6PwwD6B9e7cXp3oaVvjheSMZpUqtQimxcLS3ksyqRuVdjTZ1FA",
  "key40": "2DMjGgohsDYW3nP95LXEunn2CMVArWvBv55wsNGgMgFYuw6PhHaUGsJhCKzC8pfT6VeuVkNXkaUXAwuMvYKGvAax",
  "key41": "5N68mFQJbuWGM3Kqfsg1RSmo5Atc6XvHADtKZ831sabQZCXRqG4sALB9wqdwnxpxWxyUX2gWg6sMLcDV2pt2VEHY",
  "key42": "QJF4ECoCjtx48f1c11Jdrydk56DNjihG7riRjSafUc4gDqefAWphbgYmSHPw1ghsUNayDwbEhmbmNaNfcjqHkwy",
  "key43": "oXoFMsRqFxpMbiGpE7Ad8Yk4RBNQryTQekPggoBjqbe5t98ipNYEtrbRYuTk8hTtp8xdzfv4uud4ER5U6LGY6UY",
  "key44": "3XiNn2RXq3w7MQjVWNhCnkhDTfDFxdGutWQ927Z2mVvo9HM2SRDTcVrjPQgGsj4QEQrDJNHT434UvA3DEvvjoLFn"
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
