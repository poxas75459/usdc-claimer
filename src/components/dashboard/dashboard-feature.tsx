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
    "31715T8u1MJFczR4X5BRoiS5jpBrvnJ5R9tHAucRhcJtyhzKZF4VUvKMhRBXBbwoJcC1W33nkmstv8ojDxtxNWov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xBE3AARsvVSTZVBtLZAqfKyBrV3sg4YwhzY8FeCWWmawcATr9F1ocdkLrbeBCH18YtmYrd37H4LZDXcM9EMHKm1",
  "key1": "5JtkQamy4ifCWtFFX4HE2Z8mUnV1aB6e5BBow65S21XyBZhPA3BqV1nKYpP5YmJA1wnh4eQzeu3QAfi6jw86Hyog",
  "key2": "4adHuQyVkLoY5oV2AZqKyX84j7xtpLnFa1nVkAQ4mY71JSEZfff2hBW88Jg8PSqdVddt3t45BwULD2gGr8fJJRBg",
  "key3": "4yRSsMDeZHTP9DUCEpReECsRo3Kbmnsik183VDUJHKWBYEtfqYeZRKShB3qk9VHmWJ7noFrQ2x45a6W4U1U2wRvL",
  "key4": "q5BxNhhWzaNcSUocDTWcwGtvd5NVET9Kxhi2U24eYdqqdGbDhQpsXezxFjx9fkYxitSwXvqGs8gdiuZSHQ4muRZ",
  "key5": "2ZBQfbN3N4dEZZRugjdomqcm5DcFMce3rDvsb4pi6CS81K3iw59zsdXFaMxLnVwKVhXHHu7qWdk8RSdZVmKgiZuv",
  "key6": "5rbrsqRjHfc5bn2EsM17XdhKsypP81PD5Buvodkc1JBCB89pJ1YTKEtfD8DQ6MgK4fb7Y8aru6BFspVyAegh9CEX",
  "key7": "F1t3DDvYZUazMxRxsZRHgjasKo1Ge5WeMSzAkSwWe7qrNWGmqmGYxtAQB3ugGddsd9iSEQ1jZudDf2CLq53fosU",
  "key8": "WDKrL4TpvhfUQ1fWXJbzEBHnTVdX5JiDtTzPtXu78NbMgJYCJ7nXEk4UKpdBH3Snp9eqhJweXMmsTq4q2yCBFsf",
  "key9": "YFxgXYm5aBq24CSFcoj6bxmPcwcz38vUT8Ea4YsoSm7up79jry8ariFsZ5nyZ22dsUzDVTB5mbSjXuFRgZzKn9P",
  "key10": "oFgnGNmwDm2CUP47xwZhmBgUkAygLN43rTFvfkc9r759uF9hoBsdsWvtBQNrNKnF3ogHjtvh5xCJsf87ZcMJPhQ",
  "key11": "3aeYsb7fpo8WxoaWJC8yHHCfSxqsdRKuDSDwDp6b2Lbx6Bcq8xoy3x1xH4xDedX1hUpxRmKpdurDjcWUeTku9Mkn",
  "key12": "5HrwuuJxkEkCh3zPKWtXj1mpAr2tVqycMb666CuzsFgeuNuTg6pTLr97RLNN5bAQht9TwcET5Ax4Prm3NgpodQaE",
  "key13": "2p4gAqDEmh2zEPbAK6gqJjsRNoch55wuKC34uDArqgoJ9Z7foCqNaiQ98XJZaSdLWud82HRgQb4xt6tnQwWtp26D",
  "key14": "5PC8uyQNHrQcxP873J156TFvJiULAjVy7QnpfRw14JHGSxR54TGtQFQLYaZNHsZiVg6CC6e33oPNnzMVCbDm2hHr",
  "key15": "aemHSmm9sLUDpGBE4oHbLZFqHwoEj7XMHa3AE9fMiWRZpaSkP7aJJkhAgzgYVYCJ6wnvuhqWidrvbR8CY1YM5ZQ",
  "key16": "4dxLmhpDQe7KfmkWqzwPqhRF1LkwUhwPNg1qdrySucbBQsMvMsgYmiVwcpE23ZDfFbWRxmdiP9RNWsgePcYTQejF",
  "key17": "8VcUqWc2VXYcrYiK3fY2bmdxE167QytZCrXzzeHa1mAiwD8AxJ2TDgy1onfedfUF1umvyVS7ATzpFt4PBQCLYZg",
  "key18": "5Nw7Z3YT7QDyYbxZbCw8iEVzTYaeZeqBPVdiRxcfhtCiHqaEHHWDeSB5AWgHnh75yqnesPFPyvN4GF3sooJYXzBh",
  "key19": "36ZEXGDzY9ddnM2y6UcRv5gEn5oTYGANdLgBDg6PKzE6n2LJCn7JQRbe8Y3jQTfSfJRR3Kz5wVaFW2uTBnmci7jW",
  "key20": "eFjxE7g6g6rfhHsFzLr69m43J8ReJRLTXmbYcidNEMhG7PfMqBwGADApJ8TmFYChCnCSwMDUvu5HQX1Lm3zJxrx",
  "key21": "3zJxcJ2WCqMk998Tipz8Dxccz6sMpYJuoForPMgbgVCW8rtDdQF5J5UiuDZd8tQmEJm5xggFZ7ccy4mbNm5LMWLA",
  "key22": "2nzso4YsPi8hodJnKFuETUcxS8Em2Kp1t36YdtjRuFP13mcifUSDRujMHz4Hb3AwMWX7zou6SmMXksPGHcH4zuwU",
  "key23": "4WkdjNnS59nuXeJgf2aGSHceWz8ZDXQZMCXWUahr6cr8YJgrAYMnzozvkF2X6nzUpyeFLTWXhBEUX1M8PJ7oWRZ4",
  "key24": "4BJC829y7HiQRXuy9b24n9zPFHMDBnVSFQRCqTNbF2TsMtY3pwCVXxpRDpVnD77qpSeMq2boe4ZaGpUfhvsrn4DX",
  "key25": "2H4DvWRE3QNrLk9mR1penSPunKiyW9pB3WwSNGNauULEfpmstdi9FoJ575dCfy9r3h1cMDsRFqK726EPYZBTzf7z",
  "key26": "oYFoyVcFGP1QGF64WwR9u7JHzAsj3GZkqpmYJkubA3MSJtELixhkbM9euww6W9hnrjuYgu7pLG4D3BXWfCvtTYT",
  "key27": "3J21DQdMgtbj3w6xNN6VmYe7WTFhBjoyzECX9QGMhP9XsZZofDW4Laj85PVqEDEvpbSD3qgG1Dop4sRnS3aa9JvK",
  "key28": "4UJkNfdatT94FCJqSNmkCsBrpb7ACSAA47x2zZqWsSGRyo5JM1g9oiCZDoCDyNnvHo4pQNtEgshCc71RvTfK1vqq",
  "key29": "ddumpNBAferiYHeq7FKQ2fpghdyZ8EptkjLmHJUEtPWrydZdRGyW7Hxf2veWFjLrKiu3qmJWgLF2jKowYpZG97k",
  "key30": "2DZsadjeyBCe2Fh5dxGxN6ykoCTKUEycQsg9LnEinFCcE6jrVUBD4pCZwKPPNwmKfFUqqpqpU8ZPWSBepRbj7BJ5",
  "key31": "5XEv7dWdMvkSLr5uXJTahoXPXT8b5zvXntYxmDLHNknb9GpvB59hAN24ioLTV1hy9VXo1GBcxfhfCYGstSPZeu6b",
  "key32": "3nB4smZRfTK73dwrqNi44wwNsrjAS1vUZYPxCvCYUzhuUXjE5vifNSgM9Tsi2pUSqSSCcV4Td9ANZzHLV3BEUwiD",
  "key33": "gam1unAyxiSBEau4iPmqPmsBmVNXh1nHhBnPSYs9TV4knUH42ovnXMqkLHxit5DTe1D4KWG4FqG7Vs8zeFB6ivU",
  "key34": "5H3AmWjQY6njnwPzx5itDG6pk79a99aRTk1P27dTfofKHPyzuo2vsgsaxNi66YmtgDY2DqAKYKQt1RE4g2izGMEB",
  "key35": "2GnVhFMCmR5WeoLiVNSDYZng8D6M5nvNpZzxjWjjCqg41FKMdh4ptraZNM5oAohqGVirCpvT32FuEhwMCuTv73P1",
  "key36": "5MsMzKYnnPgrWoKfGrBZtujbw23MKc3fTAmw4jmrs7M1aTm4mUYB9BXn6buTSC1GJD8pD4QQQVNbK93FApAhPCEV",
  "key37": "2J3C7tWTpVmt2vSbNg3hCbA4C47BP6U25FUV68LcHvbdFfXohFqZ146QKUZgJcZpGY1PkP7zWE2gDHqf6VUAiSuS",
  "key38": "5QR2qBYRmdb2NYASQn5utGf5p3okqThQmLb9gD5TKUkmKPdBDdYBS5ocSVFqbUTTxd31saNqpnhs4PcoAXCbg21y",
  "key39": "Ln8tHY6yWKqdXnKLobBNuKy9qfuSZp1ie7Vr4D4yHxiKWCPnyNQfVvKG8Wvr435v7sS3sNBWZ3q8VJt1XbgDZfZ",
  "key40": "3FvhLpe3ytk8iYdNb5aMd47t8Wwf9mJqN7wgS4h4gaKaoXfTnpCiiSeLQVQMSZP8kE71GshaKEXDjUBFc4XzEt4o",
  "key41": "5ACoUhuZ7CCf9oBgjwEPhnNgypuxWdSALQDe91e7UcNLu2Fo6JUjUj9jFTDRKLb1Mw2PMZ3ri46Fr3zkuDDJSV6",
  "key42": "4tCH6YudxXwsyskfUnjoZQiE7dMp7RLFyFZSreTPpBfqNQP2HhxMVC25PDaxHQh7A7WUGusRZkhAzYnSeFTupMtW",
  "key43": "54nJGFdH7VBdRYx4NequmUAddRFYWXy1xtaDfxuHBwYGDrz4ACPBqRhMNkF8zveoSckVhEkmM6SvuPgGnayHovQz",
  "key44": "3YMLq3PfQC1UeJxfrPK8UtddGr8zhBzGXAMHTF1HRWT3n2UVZkkiQ4tMtmach4S11nRqJuEQDSaN6MYiBtjmh6mn",
  "key45": "2rt95J51RWUMWx4QnR9ravK3peTjPXTcCvWdpfuDxJC8C3fifa1cKqWyqoQF2HTtNGiVRFrsVcV4d9LvS7mq6qtn"
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
