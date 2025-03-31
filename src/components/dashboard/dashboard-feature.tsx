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
    "4P7YiZcgYHekiXnomzFu6ahDK4XeREMnVcgAN3e2kw3iGxcHjPhocFS63iEPnVqumgarAd1u4dUHqXApRnfwJTcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cnYaFjhbTvbkWuguTy6BMBDszjAFXcsNXpuPQp3wfBiQqWjBG8o9AsTDJDJojMe1AczHPxtKWMq1UvSQsiHP3o8",
  "key1": "3oXcBLSKAwcNCkLxdSUS6qGskQi6WNHxEgzTbc4Y2kBmuNU6HDjMWoxSoXZgP4RQZce7n69PCtdocUEmdT9bCpP6",
  "key2": "5tXFzL6ccGffpDeH6HLACh3G1VB2f1RMpFHmUXftRxEoaEvDH1qqxMueHuuyEZgPG9hsrxKadqpfnc6KvU4nvrSg",
  "key3": "HtACq9L51qsBRcNd7tNnAfG8LEo8zN6tAk3YTF3MG3k7pwbzL1yRqZuAkUj7fvCkipvEz4sUN9vjxLknoDGmERA",
  "key4": "5PJeAqa7FAgCPWxZdNpVsLVDcB1ubpfMhh2G8s9W2jX7jrSju3hk9CAPcuHAFg3t5oqz4daZzWJ2nJP8V27fYyoG",
  "key5": "JofRDH7QjusXQjQDdkGsjP2xe4PkxVbJcBwq8PUnWAgUSCvpd7M5GRWK2kB9vfEDuHXfgZ2sTJo32rs5UWV864p",
  "key6": "5DzTXcbeCh8JhVWsgzDT6L2o6GPvnvUkSB6cgqYtZ78gNtM7TXBEFnwdnapSFutxkgNi8GJTTdvsDCLWPLri23me",
  "key7": "5zp3ysUqrgDkJ4sgk9yHXJr8b6CFTtJ5Nr7DYzZ98VFNeYRfhFXVMLJaqRT7tiBt3uMpkh25w6vFkaJeK2guJXy9",
  "key8": "ptoURuv6x4uAULfcgUZqNZMoAU3Tws7rTFB4YR6pYtPMKghYwbY2JNdEXVFY1PEW33yFsn5dVNTDsQ8LMRu9S4F",
  "key9": "4xEHTQfyXBPjtieG6tFktpqTAJXVFQ5DAk7t13hu8DRNceZT8xWj3vqUmgv69GLtsPcXWsy2SZ7RtmqqHeJfARBW",
  "key10": "2TeoFps7eyMJQBjLTfqZLri8XJEHGDGd36H5ANRmPTEW7UCXF2H2L8WHyuyeH8GAeMqL3agurDKwQG31vDCBrvXT",
  "key11": "2ieTuz9Gyw8dpKaxJcfQYVf7wX6BhGDeDWyKZGF7etvVz1vR5XjhnDC6Cw9CipwZSPAMxGSuBRYasUrtisyeM9ik",
  "key12": "2F4JkDiNm5oCee9EeyWv5RMeaR2NAGtnAuH2Q5VgZZ2ASHUPkS37EwVu8y86JGCE3U2uyy3cQccVfX1gtJ1bE6k3",
  "key13": "2waGyLT7QpfpNgEMpiwST9kwBCymcY1DdhwhtdHZfNWxFMuQ5Pa8oNMAoiEYLVPi7XSBugBHAcBdAyhUS4NJkPHT",
  "key14": "2dSUB7tTiPxFFgup2WGgVXwyRQHgqY3ZJ37pwAUdDphdznBeRQF7CgupGZRWcFqjGyhPxKBd5LujcTXW3LTgtzxB",
  "key15": "2ReWpWVL5pXKq4RDs3u8dJFAvk3S6kst9bojeKxd3zbHnJFLLTbnKwDCBErb2pZjLiMCd4d53cRGHCCs5sWDtXt6",
  "key16": "JYE1dmaxqSfjQxg2nWt5aWj3aKjnxgJ5AWHkNg35d9wfqEtYWyoB3JSRfjBJfGSDuz68aRUtkfKAiKWNynSE1tF",
  "key17": "DhkYVBSxmojKVyRVh3nVNwoLXRpQE65AZmy8JLfC2g5HrZ9wpwDHZB4aVBjy9dgTKzX1mX8wfTS3yw7TZRLQEC3",
  "key18": "cpDM1CdbvMixDPX3FAw44c6vmg5WgPevPshnZ9QQNniPaLTYwyCBUoDzQjJVMif41H3YLLtpX1mMxE3KdBnKkoi",
  "key19": "uLAr14Fr9pgawYCZbPiur5AT6UUnuSSXCoNEXvo4KEzXUtac6TwEW1Tqm9nqb6chbSrsxn3pKJViFGNoU8qfEVZ",
  "key20": "2jpW2hxrX3iMjMKzYwjLHuFW8Hrv1FBr1sK1kFvevEfGCg61YJfhbVVXXNEiMDBc1Wknmb4VLuj9shrVXEkZsGpa",
  "key21": "4n9wxnJJBkbCNvj9CqposwsxH5yQQ5uCxj12cj3ZcCvjjkU38aXaLYzZLhsE2iZQC74QwDgLG3nrLTnBfjkVVgVg",
  "key22": "5xyTzDj49ZrqHwNiYCdc9ygftbqF7Er8tv4Bh63RDrFtoNe5tQCjji2Ebm7qbeuBFyKjujtYTcpdcywUkdUEny78",
  "key23": "eg1TAQw9tedajFD7KSbHH9x3hEVXxyivsDkUYA4Ttwut3CLV4AoEQxVd4FRmkV3YGMRC3Epe2Z4ko9L3WP7vYDe",
  "key24": "2Txu4fS7zqw8JqCrWbJKuZDbzgLGn6uY7GeYTJArWP6YqFuBNbhpfow5uZV59M9XawLLe8pNy6CgBKBFbQTbMgFJ",
  "key25": "3844jPPA6WYYvfKraffhPMDFLGfPBfCAx1M2Qf2EP8EqMRxraZ6Fzyc2HQ8JXvna7qjEAYjEZ91dGQxkeZEM3CE1",
  "key26": "C3VqC2MVvBw3hZM2WNUn4gAvmWHSFVovmL9CmPwMCgP9dRwEA6ynrrbxSS5bwb7eLBLQzTRnjEDQ2kCHCvXK18D",
  "key27": "64Eaqcb83TKSsX4abRDCdQ3weoniRz1C83pBv5UspfgwjKQWyYy2LY1uJZ4RxTunER9RqG8uhcXzTiW6b82LkbVu",
  "key28": "2nTWsJ4bAfkexb8XX5NLAe58RdJveWtVrUEF7Gg2v3QE2XTfiSWcHMSFuDwxo7GVV5eXwVAidXDhmcu6o5xpGbid",
  "key29": "3U8RVtWK98kwHCvZe5ZFF78BvdDoZP8cHzV5EoGmP6kQxsgqpuSFv3c9pzFZ3454zgsgbChjMhJsAJzoE7RmzbnP",
  "key30": "K3EqdTRGDuVpFmRJqdzVs4FPmuT4RCaRv2mipBY2BbcuYoxEsoTvqc1Fi48zx1Nm8JygQFp3zNHDTVH8s5FLP6Q",
  "key31": "2GEPDaiQPAanKS1UtrwKHQ7AdWEAdhuyWDnU12EsEiBbQTvVirHkMc2NCrt6pnF4bakiKDYJurvaSAsXJPoiGA29",
  "key32": "UEvhf1ymZTuBgbUMqPYwE79eoyX9VFANEA4KrU1bMXiiF5pZmmd4ReMu4Fsc1eDV9LTvQHq5y4AfjqwMd2Y4GRz",
  "key33": "i2nnk6Qzkq3zTcA7k19KX8Jak2rnXSkTcfzsS3h3fmvfMC4Rjjuaacoorv9HGyZaunJvigMAfcp9W4SFvPJhqfG",
  "key34": "5sgCPmSe8YZedEmG6dUCGXknQB8wG3Q5pfbviZt4gjpMXwBHoNs3sLUJwMUjsKRGrG3YsTutMRWiKShkUkkWxtx2",
  "key35": "5HAjm2FYW9EouwuXBU33mZmkEQdcooHo4ofMoVzgQy2hMXmgHwfbBSvivNPhNFwDiaRHwdpkVU26wSonn7Zqq1Sg",
  "key36": "4fxyY91tiXdA8x13KbyYsitqQaxTyaC89DVoKtJWUB3oCV1q7uE9w6WMC8txNBhf9AAH4mWsx8q8FJVydJR5EXqS",
  "key37": "27gAZ3a436LKLJ45M2bhGoLjXCRUWmbPgboQVzQVoN4hpFXzoea7cZb28UjwNBFSqqvdeVVyFz3iSewS88x9LTTv",
  "key38": "2camFy6GN6PPpvcqXJJqybovcNadKkchE34JJ6Cs3kHzip5QMreX8pU24KBUWMhQbRpkUed5hQRJYEUwgZoYwPAY",
  "key39": "27hxmCuCrYwVxiRboUnC5MeUHqx6unQvDEZN7GumC4nswS1B1sFsGpjhVeNwTCQ9YtFkjjkP4kzdQLuxrPNxs3nX",
  "key40": "34Kpqriz2suSAhJhksrQVUjhk26TEFU5Tm3kmJiUUjFLjeuvsvB9eka18oJrFrrBWMFX7WqdCZDX6SML9geGNxs1",
  "key41": "4c3zCTevaAuvBeHXHAxrzZTw9XKC9X89JQw2c2qPr8gfHDQdvbUuq3Vrj4Hiv2tGxXDt8sBJkw6FCxUnL6g8wZFk",
  "key42": "4MZRULf9GLpWSVG9MxMnMWrk6TP7fJZFGRHFmzEV7XdfrRXBTV1P1JCPa4YZca2xU1hsf9WMZVbH8pAkNZZ2AGc1",
  "key43": "5dzU7agLB2AGAsD1rRRUcdmjBT9bBat695mRduRshYsY3kQmafDKWNCDCf9rJ4WnhUi3PQ16YeGjgmRp63WoyRAH",
  "key44": "HEP2W9sUhHFz7QRzwDCVTAf4n41AZEjHdG4wWSc5tizGGg3hp54wHx4hiZY37vKA2mfcMw49i4xMA713iE7qJVG",
  "key45": "2WP8y9aJZxqkwoZxEty9cU8zuCyEjxe3SXnq3ny3zB7PYju7wWz4q5Gz3B9ZRugugpxsyzpzpey1HZqs2Jysi2Ws"
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
