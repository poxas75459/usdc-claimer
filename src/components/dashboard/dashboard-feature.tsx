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
    "FCCArFfWKXjgRNNYNRdTHMkqR5RpdJbQVPb1RQ7FvDAdRey1XvTw2pURpYDvYbe2MCrZrFXuMUuejmXxZNMnURa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KZpcFbpoBDn5Y7YBsR7KYwUxFzwrgxikEkNpCzGciwK8sYdi3JVWFvQXiGQGkm8DTFjCLbPeEKd8oKELZsmAQG7",
  "key1": "CR9aSJ4NWiiT1CCzWqEgTWPmV1h9oPe1VmGxy7a6adxoBrWCHGbZ4na2SUoDP1NUe5GXGiewnK8e4oo8PddqjnW",
  "key2": "2vGLUCKyhyZVUK66o7eWNLZRDtSwnRKe5kKhdYST7jahQY3BX6GLV4GrCgXiN11nke6XxzPJ9fn1eVxUzzM5TZ8d",
  "key3": "fY7vWKXwttjKVu9wjfyKAHWSkjYm8PHYkExk5f6FoF1DBruicHWwtXCCS5swrWPex47EYzqbfFisrRM9NCM4A81",
  "key4": "2141WUGyV3MdQSXb9a1m1TPvUTf2EseBtGSGyyufddfPuJ4gTmyTpWoFNqMipXCxqv8J9vPx1oArUAXpRJpdcors",
  "key5": "66r8RKadKhkiTk7Xcj81jyVQ59Bp9qBi4KFztjK6SKfVu75A6hMU7USiKigUs2uRWKGkk18p1W1f1a117BcHvfhm",
  "key6": "2WH5W1o2XtAGg1SGHdDK2RigXinximPeSzm5Dkx8gmDM2f4yrQ479mPwXA7XBjcwbBYkJZ4qXS7KZxo37PdaThrv",
  "key7": "3GEeJg6zisrTxBE9vpww1Mb2UJFRxFK38mpW1ro7t7Nv4drq4ExtuaPjcfDhuwSEQrhU8F6M8LL296jQC9HuBPFx",
  "key8": "4pPcw7wf1d3gs9SvzWeUdLhzr4KVJEeNVTZuHQkCvMiSYbYd3yfHz9ry31MzbRphrNbZ7kFxudL7KHuMx8FubGUa",
  "key9": "4YcGZLweNBySRjtmzBTaMNQjt73j29UYKpqQdi758dcTj2qi4nbnck83qEGvXYM6jH7EmEB6UBQpNT6yqJzhrLPr",
  "key10": "3PhNi4Qt75Fooz6fMXUkRVDqrkCFCtyaCnY8Mko8fxGLnDNqRzvwhsCNsLcaMhcmSJQGCmECWSAQz8PHX6Vo7n9D",
  "key11": "4DAjYhkPoLfCjuktnbbSeM3WDnVB6jkMzp9N1T9FxtEY39VaA6E1Tox1M8XuQpmFHRd41fCLRKCC3UCS1Wp4RNVf",
  "key12": "3UNmevihUvyEsAeXzpfmi5LdagVLNdFnTYC5eZzwgCgAE87B5jBag97FPSkyHTLSn1dCuaHL9mBVA9PimtzqiYwQ",
  "key13": "sWLCWrumyosyMnZsAjBjBGssCjpKWz4sieoEokTvL4xskamPP3j18DY7zhutFwKLvidNh7tX58vPpJRrk9Zd6xp",
  "key14": "4S9JKoQDAgE2cySfrcWatFaSQrwJtkLMspCViybKAyeiZg9uSmfeSfUiRhtUZB8UfSVmhccyGbyT8J6GSm9MobjY",
  "key15": "2FsoqdPtCe2asp1LAcBiEuroDGiPFx8MAHg9xWvsxCs2wshwSRhiLyxNhpxs15DBtAj45bPmY5PLgCdL1mBE8DTW",
  "key16": "53ACyormPL4uvMRW3EWy13yCDfaWD8uLzFkXKCfKxhkbaBJwz2XtqbnYGePM8KPBTKrHQSc3NwieoUpf9PntEAUu",
  "key17": "57BSvNSJKUX3JsuSeNKdzbBYsFHq5qzUM715q6FZqKkmT3xdA6pPfkjkS1jovWetB22U8jqXmobhFCpdCgQKMT1c",
  "key18": "2pSUmiBcXLc51jLyxNuBVk8o4pVkHd7KLYx8KyCqfH8xjCksaa3qx1n7swodhk5cXD2zqJ9n1DFxzMEn6vA5Kbc7",
  "key19": "sQuNZTw8fRrfk5oJZsvEPuLA9ycCn6Dm112AMmA2WK95UtYDnz6ARertTW81PB8kVHw4Gz1HcZ6gV4W6qBPhGLD",
  "key20": "3nhdwRh6EYrdGxqBRHZwzoc66Yq98y9wjuAMqe5v29rEKZKSzphcZhTZ3YjPsoys7NqEX2JpFuAVMyGDDSddMwAa",
  "key21": "5ut8KpusVckDZgEKzLFU64zdmEeLoFpnW81dDitKgTXWXLJz1Vumr7zhe96n2AnfEQS9HVYFiUpxte7nKLH9qtdL",
  "key22": "2xYt424LAH6SYY15HeJXFWzNX1YdZTPuLEgWR7TqckzH82qX9rGjGt3aBgV8jk5edp5G4LnbaoaPgjbCkos4MJi",
  "key23": "2YBR2632dAN3MaftBUt3zu8xBEJxgk25UpuBcnNCyzvAH3bgerxasP5HP7gUxm2Dd5GiZi7RqaaBDXinVzmFWZB7",
  "key24": "4auL6H3uJkzTAauoq7Wbqt86XNZBX1iSCch38K2rTvcYorzcBKqU8u1ifyP5SuYmyjJhdgkacF5iciN3cBmLV42J",
  "key25": "4U74NdQR7Wnnx8wjTeTdm8yCtMDLipXmrTVB4qSQsuiTDo7JUQCMycGjDNCXDi4Us5tmrtHkGHwTHMmmcGsFxJXm",
  "key26": "5hMREfe9wGQgraqFUrYaF1CsUvTWcNs8R22jmM6YFPyYunPVviFgai1KYjKb2SnGSBZz43WfXyTdLoAij3a137Bc",
  "key27": "2j9daHoUcaL7jB7AFScxQb7JvPvrGdLAipGks2wTLdTCgUsS1w6MWWqjg8dnupvvMDkFpb8xDgitp5uCjnepEwsh",
  "key28": "2sDiVTvvRqd9gcXYo9C8y9iBtK6s7VFXEXYLvUqAbHJVReu2L9aRR2jY74QfW7rxfKRmnSRJEXkXRiiKSYAbUbj2",
  "key29": "5AJJXtZ5gpkn4U9DZnF5qBRMoGg6NMtDCX8WMLsayowZ42jCCkE56d4DK65y8zdyMKCw9PwHmsQTHVUWQ99NT43h",
  "key30": "WimaC4JZPaCuAAJZwroPS8GnTZ6QXa9VsY7He5yU47zpuA8AQ2QiSs2kr6jzG17hysE7T6o1Ueqkk1GB1zwmjVM",
  "key31": "32Q24DtTUiWSTQjaQxcmKZRtTCrdUt5x8s6DLzYTCvRfK68qV5CbKdPpbR3Uy1xp837HY73qiU9xq3ecHj3J2Rj5",
  "key32": "3vaKkC832wVGYZvtiM3ooNhogEg8jkQKoRi7HKBefwbw7QNZ74LiYKsktqUk1z6PsEhRAXwhhvwt5F2dc2HrDVH6",
  "key33": "2FeSs1DUmimkmpk8JhDeBu3SB7AoPb2YBFd1fSn96KdtRrHBUUtBV4r2q8JdEGohjUmhaCSZjb61xVLS5rozHZA",
  "key34": "4ytEXErdvf95PC2zSqfnDNLD9kjvzk8rnKpzcYQGkMBHibwK2KnGCw9hLpnWiSxNfHyrr2a1tjwBdvSPGq3MdmmD",
  "key35": "5q5NMui9zHFqDJBFWi1ZWG7fXvyZSAYQYZDeWmhFsvgHK457PGBTVcvYw4PWDfq2KMRwNb4KUKYqAdjh2PfqGyyS",
  "key36": "5Dg7nNqnyenfQLRDRXXXKe9tRumNGtqtcVikc1hG2Tzo6rRKUCBpY2M58hSvvAGqN8gdiYzcAe4jgAENRQcN3Lb4",
  "key37": "64J4nzdqSr1MRXZCiuYTLgX8WwejJybuL8ujt9v6ZQptstSxucD9p2itNiXfKkrURMRBzyzq6h4U81VXUrSfdiVt",
  "key38": "3wmRcH9wZh4iyEoKHxZTYAiaSspYP9VRYgmi1oBmafugGXMjsWpsJC7xuKAoPD4GKi8VY7Btyuv65x8yKJd5vUx5",
  "key39": "2V98itTDCbCFcfjjr5Nd6nFb9Zn6ZGrTWwiYPsBY4P7HSSzjrQGhcNJc6mJ7d5obmovFYsS2yxUFkTTr7tSwCuxz",
  "key40": "6ijRXRdY2wvF8QdR286kPDRj1EGsMqGV4inhgn7uYaSJve8yhPfbVk98k9pt5Daajoc8np4EWKh2FBeraGj72Q6",
  "key41": "4MxvpUrwWsX84prhnbyws8BAZfX5CjUKUMQHRL3jjLXc5U4PvuNqo2ssNG4TdfY2Y8rfbyjccNFw3ZgVu11Lmim",
  "key42": "4iGXDKUYg9UYiAvvL8yKLbMsfFEMyAmieH3K49BhjhVfUhBFGQtQa6u9M2aCS4ZG95oAjWG7fpDFfuhbwHMFnp7Y",
  "key43": "5VDfqHVDRFToEqz1bA3aR5ET6vDGCxTDFTzihxAZoPXWweeR2wipNKRXHMqb5wEA5Hea1xDMNRhYj9H5CfwqysjP",
  "key44": "ZuX2985xLoDVjgBuFs4zabNW1CHr5wf47URUXK4kxyU2WnJPKwrcx9SEjvhAXUoe9gfsKQY8gDGT5KBmD4Pcd3w",
  "key45": "3Rd6wRbe5CYVMq2mwVho2m3VMfF3SLiuVFVjbc3txSWcb1uYPXxsJF3BqjLFbjbmwQbTxS1kuLCdYsNQck83jVkK",
  "key46": "3uNeY1KGy24RXg6VXeTvToojcE3k146P9ftjDeUGNV5rLGn3MZbsbjTqds4UdP2H3y7rk4T8ho3xodCnm7tTL2oV"
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
