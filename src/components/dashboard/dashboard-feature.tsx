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
    "5cdgit8MWNHHKWn2VuxLq9wfLnfDLraycmsMxPm6JZdkJ5D3rQVst9uzJzN81MknNegQu8VW3xi7Q2SV93MRzym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pbCKXD5EbzrrZwz4C57VYHwskRdVGHRe21ccryazgrNTBt8YSKFVG51heGGWeJLWX1zZyEChtTHc1dyKzXHoHiJ",
  "key1": "4VZ4HX9QGwiGobW9ebBUnraCYvQQyTrP7eEMeXCxsRtTkZ3uTCRPidZtjBTXCiABNkWoe8bpr2bToqkp2EQmEUc",
  "key2": "3dxiQ23KF7X6vQVEyaDLVTXDLuCC6WuBbhUXES9xzBjcCfc5WCbUmA2DHpsfHA4eHfGf3Aa7pwsZ2YEUcK75TFG4",
  "key3": "37p3fHRPVugohtAVFGoXaoUijfHusw45TLcjF5kK43USPP2dNBA3Hf82Tpa9bL4RXSQPCd7gPX3sigtQvgxAruvZ",
  "key4": "57N8quayyLxd1JSpv9vki4z2MeN41R3x9s9VBQcbfysfeRuF4vDbBeELGpmsR7GEvLNjSy86ioaVyvqXH4CV3GZn",
  "key5": "bvoepVPRPaRo9aLAmdPNpcFnZEgRbEvCJawcFuJhpXQ1jKAGckKhHu9UidDPzv5DNh5mP8TtCZxt1ZeKfxBKmBx",
  "key6": "5pidAWbacBwQWaDqAovHkZJVfBGt8qAedDLdWjSqLvKKGLSvpLrHZzZcSEx3YvH1m4cX9JzhUgiKBFzdT1v1dUDp",
  "key7": "66BDnugtKNmWwCPhoJSHmYtXUXDdLMNKD5T3irRrXLvaTScWgnrcDgcSwPVagHPDDkcG9S3d9ubQ87bhy63bfUNt",
  "key8": "5ifcDs4HPmPKyXaTvuSWcpHbUTXihTWqTmzpfAWtzS4aEcVbREjYTogdzSYFwgd2am72SVeGyP3Dk6tRrFRxaM5r",
  "key9": "tvMbeLfsJ3wy5tozq9kYY9w17cByxeUKPZ1vYXwhsCC8DqDiyMMAq8mwiLfzMc18rXjyuqssttrGVjmsYrQRjJh",
  "key10": "4NuC3psQjK3gBhKomtSDZsfyVwWzQ56oRgA4b5DqY5DhgprHxFHujhsgWH1NRvqk7yDNw2DXVHaQ6Q5jfRqwUch6",
  "key11": "4j5As6ZWmbeYnP8axdt2c7K4V1VWoU18ogyKXTjZkq9FzpPzaF7rALUmmdjTVAwTv1eXuprgeDfjnaC2nRQEmTpg",
  "key12": "dN51p3jaQUpgogQM7F8di3gK3HZaXuQ55PWKhMRh8WgrgQaHnLad5DpckrstU9W44HNeLTRXHQvid5h6HbwNTfH",
  "key13": "ufpAHm5G7e4Xg8iT8QsGspXL2juFQpLfReTRpeSAYKM27eeoSS9oKZwiryPWbCgkNJu4A1NLEwGWoQw1FptWK3f",
  "key14": "5fPay3j2uSP5WMDiRFF9qMuQkg2AxkE7PG4vRvxUqoH4tnfqTBKtGjVHEQ9SWrUyNChMNW3DTNSZcZmK1gtE8rHg",
  "key15": "3zoyqnd5fb4BUvvR2gY83W48AEjqEutVXfCx9B5nh1xoStGXCQcxVZ2Xs3ijfpdLHLSNUrzRmFAQEhCKhRChZeVU",
  "key16": "AAAVz9Pf1thN6kjkNP21pgsHrZqcB2Q3Tg42ir2o27jL6W5kvKGEQEzFNznyXLJUdkJy6Anc4AuKDUxeEuVhfGs",
  "key17": "2sPXFgWYfZdFDXRgg2fAaTyyhEgbjPJXH5VipkXkKTApotbHGJm6ygFozdgcyxCCaDVwSDS3nSxCwiVUyEkNnJxn",
  "key18": "8N7xcEsWQ5FrTuPyP43V2jpeBjxrqtnRrgBxocwh9b5QHTowAejPUAxetYErRK9Dfoy3ujnovkxgfFf9CQqHTJe",
  "key19": "57uLLrxCEspwAazcudt4ZwUCqNycvM2AWoe3MVJzAwFG89EVTSNDteaowoBr6DPVep3wQE2wQdJWFFqJSx6utS2w",
  "key20": "23i1u68dCX9HGT2jWwk2fVngLWoFLa528886ehhtVS4dBFtXNzN423KkRxuWUBgSRMg9yMD32q5eJL97mbvHn4uQ",
  "key21": "46fnN5SwFz5JYneDo9kQ6EynymxPusAaxnGFXi53ppTNMdo6zv4rRJxFdTK8ZpRweDDxUif2GyNEPLK9D2XLYg7h",
  "key22": "u5kvapSd3pTRRVkgACnaQgBH2SVLo2r7AP6YiYyTjbVjePhnVPSDyFahxCt8QZ5cF8vFttvxCjCrZmNbgr6a6hu",
  "key23": "5bDnpsk9Fdk7TuFAKcjvEW5B9mn9P36YzhoKqPk7g441WfNhuyUC1E8H6QGrGTVJcvG7k1aKfFovymLeF1wrFNUQ",
  "key24": "3S3Meo4KupY6L6ZoBFxJv3gmiAms7YB24g7LxUrCnYFK55P9X7bNQ5vFeP24oqybBE4CuuCfFpHupZpSQqdFKoot",
  "key25": "2P8LnNckSeTCSeimsMAgjzMYYnD4raxHZaQR9YSrX82WHVwrwEPjKY2Nb1aawhqEGG8aTw5BP6WxZZscSQFVAT2W",
  "key26": "39xi3QPf4wmzwKxo8ZgYQ1z2wH186yzRD1Dv7JehG6DvEZYr4M4xa99JbLBzH6msvM4Dj8YFzaSvNCErcsotJvSC",
  "key27": "3ARzs1fjE3KUT8kDYnUkuDWQMa3hdL7v2JQuxfMR7dWiV1P6CCPaLUpMbxnMMNv5KVm2HpFYrm7DjG5ZNVNbaGLv",
  "key28": "4a9KLqX9pjVYttFNLTvgGZ7WthJ2xbmpNY4kNEh11mjEyX5NnPeScGZeJjRMTYmfqAaVGKqe3h1iRu6aA8471n6N",
  "key29": "5yv6Jovq586QLh4ysjfYvLbbydvkK7ZtT1AhVatukpJ71sHZrZjH3WtmHoUHNUZ2B3DgvrqQzVxCnhWuHPZkUaQg",
  "key30": "tEf489S83T3o2hDA1KXqRKK52mtVEMRommjPNxx8S6Py1oLL8KxJmQrjmGXtDooPmE57Eu7QGSYjwZxPgJ8Ga4V",
  "key31": "29CqvqtvFoEncNXuKDWYzGacmr3mohcre32jxY6aYMttykoEPeANey8AregbJwrSiFR845vctGzZMAwxQcLBLaok",
  "key32": "4d9hdbq9Yu5LKQc2UBgFAmFodqUtd2YXkDqS1U3fJNCPoNKRvM6muodZUEw8ickefiU6spQYZJbr8goLYrpvUAcm",
  "key33": "2XgSgLJ97PYM67oB62XS1DXiFTr44xicHWWrobCymU39qAvRiRMggaWpopndwM2qQDpH8mLTuZtgv3jvb8LX3Rfq",
  "key34": "2i7JzQgpSSvh4fgAJz1zwZWZypGQNPBDi7CwzqMSn4KbE919rsNQbHWzH55BAKFRqd42nL88wQsSJNn5WUR7ibTf",
  "key35": "3Mwcs6pUVXdDAzaMcJ7shLotQkwVP76yGxmsBVwTZ4XQcdmmNvxjgSqWkzP9x2CJzjB72cMD5j4oo3DYzrAqucQU",
  "key36": "5UjPcDLQQmcsEcKToBJEZ9UkofknEPsXP28KgjJAzbeYrGmb2naQHpkFvf8fDJ6EtgaiFMC8HiLspuguamL9LzhP",
  "key37": "3fGn7WANu1yNQsNi3AMMzEdhd4JuAZfTWbcxKXfP2B2xiEXz1EvTDNDrSvXeydHKPD5cQWF3J6TX5rpzhxnBwib7",
  "key38": "5FdFCxRaCxgqaT5LJvwsLyakSVa7yUmWUq16M8yHQwcttun2pcZ8n4iCTQy7Ftw3q4S6tmJQJGuUfDdq63122XHN",
  "key39": "5gXERaKTi4Vo4fo3v2ysXzLbbaSZJHVbzYhMt1itb5WaA5mjwXEhKxtw4JHuXRonzWan712kVokPv8VEZiNcnn19",
  "key40": "4QvEKFFB28EUfBXmnAK99FA1FyShwE9opNq83GCkEF2QF4wGV8KA9iaQtrefHFZsVrYkNQuiY8E7swLsMQq5R2kX",
  "key41": "22fAJTc3iF1wmDAJFrdjRiELSQWYUdgtTks2LtiMQL1EmvtwggeE869ovuAWd5bSZ7xsco1msCbdcMkoSr35qisK",
  "key42": "3F5pBr2wwJy1Tbqdw7gHcgVTREFNL8eL24MhRzqG9FoQD1MvVex6D3iDHDEt76eipPHunvVxo9Df1nUCpwDpYykm",
  "key43": "2G6LSGsBuXK3jV7mvxQDEXzpuz11TbA3sSPf8KLdU6feR7WbS5k7XaPEJ8QhM2ZPjxnbsV1PLW1mk8Bkstr6Z1qk",
  "key44": "5iRNd1F5xgQ4JttG8iiSRcydRCW6gkD2qGtRMVxNzDeyWFAbU3JJy8jCPuJ4cdRFjwLwDGBFhKTrKBsWviEqbjQS"
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
