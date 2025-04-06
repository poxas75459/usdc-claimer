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
    "2GvE4X1SSbgd6WivbcgUC5QfvaQYNxpVJ4breRtAEjghaixydoRVWYsYLdxsXzkijbTt9bkGyP9fE2oFcfdLvejL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4njxtp9U6XG7JjaX6BSfHeviKW6DmpjVUTeGdEX25ZaiBVRUG3Q7mAmA8ELuapqoHUnfg81G1Y3iieZrXWTyTTNz",
  "key1": "25WJt5J4UDPMU48Th1PPgmnra2WGr21dQpDKAmLZX4TM64XN8APsWUBda1asaLTrRktehjrUV9kEBCZbVXr4rv88",
  "key2": "2yvDsvdGoSs76Y3QnRCf1HnAhMEiaDKyGLuBYdpDeE4z48GrSNcer1Qwv94jYeS83UoGLTgwZYopAdZS2dS64PTb",
  "key3": "2sDcUZ4cktY9tGPd3GsY46QtHuT7ezEG2EPRFEdCLUfZ2QgsPTZmFc6GguTL9gxYmG6eB1qKCwXQfikoRhGAHz5S",
  "key4": "3DzZWPwZpPzybqo84d72NJEFkbDKKkHPfJRRScTpETDRWpQmsCfL2ymWjXHWSKR62TeQy5nqorHpVXmfJaV3RGpr",
  "key5": "4MfvHBgkuE9CrX8G4shqUhiAD2BMYbEEoQ6Qpib1YCJ5XmowrTn8LL8t4ri9YrcPCYKRSA77GcmDBUmAJYmxSRVA",
  "key6": "RrHiMPrs2LBbxMET1uhtLXQFYd2K8kJatQXcY9vh4kKThEywnLX7HWVqPCxX7jUYS9XfzFxwKAuBTxZaBe24Bie",
  "key7": "2Z4YmQSGZepwS6R6YBYczrZuU2YTsS5hSUt71kyTgZuQjzAq9iKNBHsWnbCHHSWdcpSF376PpviHdMrcW8xopMqA",
  "key8": "daVorytbfbohmBTwLUBdhWiujCowFfbY1aVn2rvBYsce9eYnRe7zq82DAVDU7UKmvbhmDbxuF6CnRSsL1QdPQdd",
  "key9": "2pqEk24VwFcwf26JzbnmdLWckgsmxGrGWq2PvWwZ9o69fMFgmwW5YcW58SVvBQ5p6LXtXTS216e4nNFR1E1VEKZm",
  "key10": "3SKZM6idUZyoVpfAHGZ1wCFVXDRLN45DKJvwEhJDaah7VdaU7DVkYbb723BBYmfJ8uVRyVN3aheyCnG6Y7NWtSUK",
  "key11": "2QuRjHdSYQMgGNnm5s8cnBjfTejvWx9runDCNMqRPRXKPGJm9aQmh7fu7F9eMJFQj4aPNnL2nTKG9XPz8addrnDT",
  "key12": "2YKqksLVXSPbZUTd2wn798tmnreRY6wqUu587DDgEHKqfKGuTCBGPfPGXWuhY4g2EcGkQ8pWpZLbS3Lv6bUhMCxv",
  "key13": "3KPx5RoBByekQfVbZGqPGXoi9WnYf58QUkj4QazBXdNTr9BFkx2aVJjYGw5LoJ5owefPVmAvkaUvVzHqxR6y9eod",
  "key14": "4hqmGHFX4NNcdcqECBwAD8C44UHXJBaFX9Nw766TBNJQkPTGihd7n98WpCTiMxVj4qNabLEVcceiUo85cqgAqtAY",
  "key15": "2BRA9We4qCgaTtpBpRxpz8p9ZJ7vKeveY8RYRJhzz7V1BMUzrmhRhx3Lb9fNxsepW2MxfPo1jeV5eHnUHvCHmTvq",
  "key16": "4dQJbETJoC8fage1kJGpcXvyBidahpjYDMTTVRMRftRFjX2knrAjEFAb3Wp6srGcy44R4ZBqtcXFsW2V2H9bpYDq",
  "key17": "zH2xCnFS3cSHGhcBYQBmWZqejHj9rffQ1oK3HqdyJV9oUadHtT7snFcc1tVpscUJu369WegwZsyMwo2fHEu98PM",
  "key18": "9EcLAaWrufos2asRU3ZG6UNeo3dK9amKznu1uF26uZyL1jEKhqYSdSuTjoV2rKJEjYekJLeKR5JqZhz8jqxdhoZ",
  "key19": "49kp7yHfVMFD8fnAEas3f25jo69ebdbg2EGN5MfcT2GW8eV74dpe7qsPRGq6UyxgsUgNyxU1PzJLjpbEvrYy1SGf",
  "key20": "5c7EthYXY8FTvNpsiqhe2r5TgibMGVuxqAFGmX4WKtLRjKuqJV7GNaUavYaKrpEzd1Hv2GoJchLmdCmDRGLMwoCa",
  "key21": "4Dq6hoT9kseqnR5M1GJmRX1izYMCxCXbkzbpYznLRQAVDnfEH82WBywXFFqVyQMQoYJipcFAYFynVkYaTRbEx7sy",
  "key22": "2Jdk91w35d3XBiiGCENViRSiusRp8wgTudP4de9KZfDhEzopGuNqfdiGN9kpLcx5DNCzjzNFZJ9dAbKCUKCtfoBh",
  "key23": "4xwsum1Ph1DgAmEHGfeqWd3w59tQfyJhcMKmDMeipjY8QxQskUgTTfDzsEZ1c1nDafZFh56Kzbxi7xb9CLi9sV5t",
  "key24": "5SFZtt2gFDgryYk1LU2dTqttb5Tw2RBx1xcTQPbcoj7GbbNK8BcXK6sTvyqNaqKCrHVpyMLSf6dGnbZhQushiRt7",
  "key25": "4cFfw9S3PLyMDRdzHDu3VatFELCT6MZAFCdfWPS3jgsJyMd5epFfrB4UeoF3wsJPT1pcmtmxVxp8kvvXTti8V9gF",
  "key26": "XjX24FZt2ZrQRzy6b8LgXzD2eB4uo4f1GHYMNpB6ShthxXZe5CPixsvP6DrnmSs42qjwu3LycECQ5CjXcdGZPP2",
  "key27": "3zmkTxbaM1sCScQzW7VJMVcAJ9ytZNxGHtNwA1Yn42vFs6mEmfJfF5qgPDTb5Ri4rQL5vKvGBFPWtnrCe2dsiukc",
  "key28": "K7eMvmEMd2greJJHg5xwM5HhkeFnMTDpDShFQ5EWoaPordketVKnUNZvk1iiNJve9S3UpzUHSfnKtitBr2HMKfu",
  "key29": "z3o8EsxxpJaEHKxxvQV2Naavx9M6r8YFL5yqMbukqANEwvYuuqW8timWHoU4jPZorNmXUPPJW5rDsPtDvdoiYHY",
  "key30": "2Mqa9bvgesZ9tTvprtUaCdQmJfdQiW8sdXuLSHsQR7PzbZj8jNEdx5BBPxty62HXFUf31g3d9g3kwsYNQoGCR6aw",
  "key31": "4vSY6UXjHF9WM623vDRvwqNFUuAGZ8FDh7V9HekbbYuup8MpUVWPKLQtG3uZ8fWiLGXeth5FzBcgSkPBW7ZgfMyz",
  "key32": "46fSnSMUfKWCcWrUiaiYVcN2emY8GtJdQEbfFsYhe8xPxpJapX62qGdukrpwn1G1gHUA6X5NkoMst5i7UnvYwjD8",
  "key33": "21AAo3ZS7Z81G6xr63dngRrVM47XUP4QSzwwiMuyoxFWQ1Kr9h5MeTJqhW8PJbcRBRpJSR5iM4HyD3BbkQaQ4LQp",
  "key34": "5SwWeZ54mohewUJEoM2TJvRJdVCyRZFGGVaGhFkQyLRzPjFvDYgDryZQbd13w2zE1jWrum6VripHgyu175vRdxsb",
  "key35": "reaqJryd8UrzaVKx2NGX23tsh1A3Nv6Bh6NSPW626xiNv4ciEdYMxRcqLeXy2cFuLqa9p2NxdJGZr7gpieFENep",
  "key36": "2ZRt5ewh3Tro7HvupaFwhHt2zcgWZGxpAuiscNyjqWBP7CitVEcRLeCKrsR53xAjcZqhKcoN9Epkpzx4Pf7qss8A",
  "key37": "5Dpktf5gEGnJcKbsqpMeaUJQAeYXVsAMiYGohArTpd9gQakbctmmykHK8kBUYXW6NVMT9Na7UitCUEC2AkKLvRjG",
  "key38": "29qNd2JEoshTv6G4NoN56kt82dsz1mFAqrXAqtWruEcjBjjwsjtdyjcquXQQ4Z973kRvuQ46777pC8XB424DVhtE",
  "key39": "25KbymePs6dJ3hz962K1xcMzzHP4CenvkGMJWQEwUbTweKC7w513eCKGigdjwGLcxqPyG9VE9kiAJzGKdeqbPv8E",
  "key40": "4nGTnPX1w5h7wSN7r1k2SHskNZ5zuQs2r8cwqDrYrb2d8sJyWiGBpFxbX3CiQgVS4ca1tSfxPdAjs67vFFUWmNKR",
  "key41": "4bHn9CHz8BqnnRawGgQByPUHsfFcNWNp94rpjZYJgRMw13RCE3EitFNMTTDuL93ejsA2yzsStuMcjbNAYpbtjMKB",
  "key42": "5yG3uvE11SKjUWejB9xNDHv9FopfLW4BNXf5ZEhEzf91wedd9QSss6qBwPnAEktiZZuWRbPstMfQFWkU6N5fVXsT",
  "key43": "HN6bVPH4x2F6Udj8zt9QnirnTwtZRLT7vmjDg25jTywX4f7ryAQqdqJfvr2pVnPPUf3cd4nwnPS1gor3JjsuGk9",
  "key44": "2iYMUWC1VQEmhitagSwAJARmVr4ZQzEYjA6BL8CZATJyURfnpAmUxcbLgqzqhTYQVEJmxuhTu6TLLMsUhfw53Xtm",
  "key45": "3YrjzVjS8HqoVRgUnHwsn2zMxnWvpqANHt2hdsQSUMtLwV9c7QAPGt5WAcNogXkkoftGnbNpnVANVuqoYreWEqBD",
  "key46": "3yxWfuDdQJ46XKXFwdF5Ln3C2vny8UWsY5oskFzq6q8MbiXs8YHjcNotBUcAG1CitVnJdbCAfm9SdtiCCfEg5oZW",
  "key47": "4tJsJiuP8vX76ktiQ7ovGR2LQHqmWnqe3syarTxTnv4nqw6A7dR9DTAvEeSb9yReTpEWmATqsfkTmMTxMiE6dfEP",
  "key48": "4tYKwhxDiysmN8c2yj6Dvd9cubxccqUZ74Yumcoo7rwuDQuHw1PowBUAgFcM4d4NJpTFoGPfohrfdz1qy1RcJqrz",
  "key49": "HpHasyfkwRjuMNQYTMDm4FWD1s7ZSnTpZbodJ1eYAn3rmdwvGc9Wo4n9pHXQvtqHcwiUGZiBJ7Aazbr5zW7gmcw"
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
