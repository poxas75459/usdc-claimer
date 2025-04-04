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
    "3AaLFGNYhdog4fzPdNovYKFa7mxavtfHbHM85qC7qnv3WeChWr8UAK7ZLMwL33TGitjmWeFaihnhQRPBNnnM7jnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V4Nv6sohq6ep1aN5QLV1BsupL39KBLXoxz2TreQ2NuynXY4dBj3UgLVgjZp3s8dXnpLiy9qRkXAvSS3yz5bwEpU",
  "key1": "KoSfXcscuitMtxisJD95PEK5Qv4e5tTjadPGM1n8xbfrRcpw7Dq48xNQq3kKkCqWGZxhoTT2idnMkTrM2MdV2VE",
  "key2": "3skF61kLqQ1bLjkijVM5MhySozJk5Qm7tZubXDPj3oUqqRBCnYeB1VUTVpqpi5LhEDkQDx2Tjunz7qqft7sSaPQy",
  "key3": "kUWe9Z5QF14kePiKxjpNmAyCQnquyfmk1KkqWiJDNeE8RHBam3NGSQ7Urc9BLSeXXRkRFyVgiGtZQJKAd5zYNet",
  "key4": "2XLNKAaV6N3jfMRghSbwjvLo8q5myXqXB9XjoLzDjiRFJ1KwG69Fk5wQNQdbFMH9UcABU7sM63TPBWBSvMnadUNB",
  "key5": "33ry2Gm3kqGJeGL4zuAdEmsjNiUsKaZw6KnfuTu2gPTjPEbHwFF6GCgiaEtZDhgSBrHLsptWKwNHXGFPEqsZ7n8",
  "key6": "3GfC4Mq56qdqRWwEFLJxFMJsqMayT9s7yMkRbJfF4wgGFx1mg5PtfykSiLsXABXiw6BzTrpntkvxy7ZbDMeeR97L",
  "key7": "5TKS5XvJpmbTvkF49MiotJtdQ7taePBbBXPnR7Zq2idyWZvikknQXXjSo1aDdMM9ADpnerKMopYfLhPLw1tABMED",
  "key8": "3gUJFsSKiyKnwwJtwD4yY6c1Wcvux6hacWFjCwM4pyCW8kre5aC695FzedT9tNV8Uv58Sp41utp15XykFo1fnoD1",
  "key9": "5s1foiPhL6G1mxqZfZDavLTAFYF2xNvRmFWs6kb3pWSMaNwbGPUSJLjiEyTy4pix5xxGCfzZjHpjGkfGKdirFBdJ",
  "key10": "3mKMiqKkUHzBHvbtqnVyyGq669sk9WsiSXGZBdnzndAG1qKFWyLYXR4advAdSLgUPrd8Ky37K5fUnxGzi5jjmUmd",
  "key11": "isCJT1LxK3h13MToJCgabq4TyKkUeHiUjH3sTnypRFK8C5DU5BTu3Us8VUrNaGj7cEXEDbWhbrt3jJLpm1fU4i8",
  "key12": "8QnuQXNCfD7ripLRstB5Km8hbsFw9xXgPXFg8CGvYAVgw1qvc9WxjdMr3StGmTMc3fBnyy4W2gWNgYKVcCUvkRZ",
  "key13": "c64o5KUM56p8nn5dHuSNTbK2ubZCoNW7nWEj1NF9o9WAG9Re9emXUN8EHs3gbjizZsCrMKipbYzLXYxPpmeUwy4",
  "key14": "3HjuXEGDeFDkyE3jTmBSnzLoeCTr9PJW3D1RAL8qBG86te8PBVQ9bgc1bEEVYEreaxC3gxdGZrYRkJcX2tQfpt9s",
  "key15": "5gQKFzT7qhQx4Wg3quXDcUNNCBJ1H6BpXYXiZ6stsHJnGqTNj2ERQKbqmArvmPrTuygUvKtHGJ4DRzqSTHapN6EP",
  "key16": "Wzisne3H1JeKEvUnmSwW58ypEbEPwoxSvpmqXDg2fnFMpT6xCPYzvRW2vPZ9APa8Vee7DqFPMcKqkN8aiEzxaN9",
  "key17": "5XpjHanMYNGop5co8Y7fXdLTrabEssnJSGsyjGWaP9K2cPdLk5KiRKDPFFBcSTH1iMUfHvN3sRHtcWxj3me58mVK",
  "key18": "pqN687PAvzjFCjJANYB7Rks5Pwaz9FFrf54xfPiQCHYwfY7k9kWosSmm2RBcbv7Mo51sZxDCEfU53bZvJzDMMpi",
  "key19": "22jXdnBwWr2cdZ5pw76dH2xEKmvYoJCEKpbRyhvxbKXNDRnNg9NxJw7AneVPk9nG4J3sHkcf73kxmAoqPh36X7a4",
  "key20": "4TUjVDpTJvShmgRXm4hea8ji6Zr74Gv6LiuvpPHarFaGvYvEFnnRCWRVZoWP6dxQ81CSrduPbhQgejiLGimhkyPu",
  "key21": "LtgdvmU3Lr7rZ6boL31D4FJ6zUU4HUkgsxZxAkb84FnrEyLqySYRBTXRMDK9rprhBTYHtYPXvqPqCHDUY8vxcwz",
  "key22": "5nitRNPo8sPcLsuFgW2hNhUtfVj31dPEL8bPGUGDxtCQW8KDkhRP1qKHzfLrXTDf48RVEK7WNNPC1odJfEvgqUhJ",
  "key23": "3jqA1gsVDAuKqWtaq6QyHuqeHsaFc6cAJmCKetjdGhGHBqw7iS7ChZrzND8WnVmumQgoAUSddRrnvJg5fWnTbXZP",
  "key24": "3avxWBF5F1V8evekeZhN6eny1waf34xoAAwW5V3PyYgi2ugbVyRPPbK6L9WpeuzCZ6sir5CE2BRJCGiuS1W179M1",
  "key25": "4yvsYZa865kDewxgXBx7D8sxXFXRL1kTdC7zyWCs6v21iHd7N6dRrUDfSkz6BV9Sws2QKmEr8zQVp9H1dEREKGWo",
  "key26": "2V4pBETHK6mU3F4WomVuri6KD7F518UTPssevrHvXm9Q22mY7uerJ85C9BwygczznPLWwcxMmDoZxywDJy7bPTZE",
  "key27": "eiYG6tMhfRSLJuzWkaHMuyWk93q1dvPJT3XrJFwWcenbmCPWSAMK3URJarqqGzARixcAfMN138E3dVM2N8kko47",
  "key28": "57BLj8hWR8warFaHPMCiJqftLd7dAKcouUcRkAspUNKxNAymJCpRG1TFBmZt8DyELYLZSdaxjjBbxHxP74RKhL3J",
  "key29": "5BkQY82LKade8NvHRze6PS4tDPg484FtPyohc1SwGDLvCpRmTJCt51RgcYgVaPHyP4KwArVSWJGZDMpCC2HWXqSf",
  "key30": "yeVGvyA7CJYeuSJDDK9V4qvWt5Ys6A6aY7CsLRrLSSsgRMnTcwdejADPw2Vg2MjzvbYzXjZ3d3amZFSvCj6CZea",
  "key31": "39vp4gS2jvi3Mt93L3osT7NkCxaisftoYYdJFHAbbTd3gxqQA1LDY3o564v7Ghs9cKn1N6hyX6XSvBZcwqzQtsnr",
  "key32": "2U3xnNsUytioNDsT2fFMtHbscUNFjSBbjmAgCSA9bgC4QzcW4AtSUiHKEF1G33Dcu8HSL2KRbZQgRNru2y5kiegP",
  "key33": "2CeNLijj15JEyUZqpdg2CvVwyQWbh8SCczHhr3teBAVJ6ioWXWcAyxAo7qA1jixKz4ecm63MKqrhXB8at2pgMBQm",
  "key34": "5QXD86uBuNxrPuguZ3uQfL4X6azC24dL3RkHViSGMVn1HPTcSzaFjPEb9fV8xXbW4edT8wkvRtYAJ8ZXCHv7TcSV",
  "key35": "2uydpdX8vSqtZa2J18eBTD9EZbCPZm59yZf7jfHkBPxFMJqAc9k491fYuW2ayUC4LN2kt2ZvZAivj6S4RDoWiV37",
  "key36": "5b8ymCz85gUiAuD3AbakCYt2ZtAXANcevJzbDHgpDdB8Gsd6LoMsaFqDdsQZs2nyQydJfvZGwqL5ZkcfXMh3iJ4y"
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
