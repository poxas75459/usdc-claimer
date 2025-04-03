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
    "5TTmRyePkeese6zprg8MbRSU5jcgdrgsR9k4N5VRWpvoSjnWebo2t1tghRLYNNsuLFyHh3qr6BwLsnzeJCLiUz3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cBGeT7bBAHe1HAihW87UCwzqxpbEKJgFwYzWzbveUEpigJTp8Kg9bcHma6sXxATgGS6tMP8j83PEuTymntgwous",
  "key1": "czWpJZGZc5hJiQd69HSArRvsnAbtS7Ebuu1csXamRA442PMvnT41EzWqiZh5mMYBz9Uzmg5wKo68UUmjrSKofKJ",
  "key2": "2X8EidDjgYQe2xjF6vWAuzXH29R37QR7bpUbPLXuZ5tkDpneQyPbyEsaoXgQDSWXaHfBMcECwE4cAvLbt1ctK3gG",
  "key3": "wE3xVSxjxkMEVx4vbHvxER2AzGQAZPSpeqKZBcLeWr3t6A3humFX7zR48wG4jjJwQ8WNX8GDYscTiJ7tApjsphc",
  "key4": "ZrcP8fAt5ZYLJnsV1beANSgz8zwMNuKkCMp46CTxJKDR626UhvHGK1uK1GceEDYbTQsXWA41vu8pqi5kZrHahCW",
  "key5": "23oJXZ5i62344ignni1hRECPEXM4H6BRd68bWermQegParvTggLuJ2JpjTYyJaz5bitN5uZ2UF77a6BwkjASB3WF",
  "key6": "4LvXjhLgd5Bc9fzgVYovaiFcu2FXzrBkDXuQUvt8bntj3dmKUta27monrSrmSvn5d3mEkyTycuiYWaxCkmVm2yYw",
  "key7": "4YY1fJBCcVaLKCni6SbVLbLFvDW4qMXXyysZM3XLd2eBnBq18oLPbVp56KDTiCRdQTiBfMjf7km5XcbEPYoKeRAN",
  "key8": "3tcsYh6zVGcBCTQHX9QFh886ECnLHYbgXpbRUR9YJ5P2YdYpAmHphs7FwcJ7WS526bU7WbW8VzuC1uvbP157dcra",
  "key9": "KFrLTdNx8E4fFKaqoh4WftZygJVBjkQ3VwyTfzw1svv778FEpJbz4rgFtfhRAawvgUX1krNQTw6DAmcyhHmo8Th",
  "key10": "5UG6uU5qpEfrqi3hNXDv8jQ5SJhPbarYfFkdLBV2aLaPhLtG2y5DcgFno8E5w8juEYuVZqxT7yFoMDDotn9UHVM8",
  "key11": "4yrxXod9VQibbPJBdTAW8Pqq6vkJ9PQGunx1SKfLsTuh45FFGXHxyfm9eK22MYJjUPwKf9vvDjUUiYRtwKGND4q7",
  "key12": "4Zt6SbJVmdDwH3bzrxCDva3ezk5rMRiMrkJaVgXgUmrhoPNKX4zFwUe5pQbDgPuaoqpnxppXD3qUCUmHwmrMJ8As",
  "key13": "3mN6KJM3QeyFPFBC5D7ai3WqxLugfUVXULNq8gHYVAc1fgnsyMVMJbg3QqGhPXmSKLhbizhwxYoLCfKDcNqzzuEK",
  "key14": "3zQGsZ8oi1Z4TKiFCRcPBpChpvY4L5Q89Xvq7M61GPBraKvmxsDSdayn9KyCmqxiKcLrneb9QaEHSk7uCwzQrwQv",
  "key15": "w3fr5vP8Nt2sxg6XLuVKT5jiXWhj57ZDyUuiHBBPEiVVBbGnVY5VrXLwQfED1wbgMWLVog35xzGqAq3jtAqEnba",
  "key16": "3drcm6CLZU3GvhLqDH8uNGGyt2muQGczXTy1GhLPHiZSGpgo8oVGdgkzwhUKn31JfNiLyXVrPsEX42CYgZokYJwE",
  "key17": "2KEUP3jutvA6rAt6LkHYDyprmMd4RJ3SZzA2AH6Dj3W1sP8UWkwkr7nMxjTf26Sz4FXG7eJpPd33zJhb2UGc5x5U",
  "key18": "3KJ7Yxt6rYxAbgsJLXUHtARkz8dAA6JZrssLfp4jMJ3YNgpFKNSsQYg9yNVYo5SLxaA2MtxrarUvt6Qcz7UkNr3U",
  "key19": "qMEj6ydcZRvzsTNDWSvN7obFzW3oypF5YAs7ATejvLJdLp8hnafFMRHnQh9ss6TEt53N9BkfAs3wpc8u5ghDDst",
  "key20": "EHhWsStwX8Wt32EEfkMKWEWeWPHYjZgdtECK2j7eiNdQ4T7aF3yVpoQDccgA4xyVsK8gV5tCEY7QboPnARE4Noq",
  "key21": "21cCUbzCWhFzzPoBsQrd9UK9ZZ8q33HxHhCaQuHSeEpEFsRC2XnTzusMYckZoasomYfGjh4LcJri3W2CzGJdqzLT",
  "key22": "3fvY9FwavhAR8dFK32ZSbbaz4wiW9DkDcJuiC2fJKzAAaaLUXv6LPJj4E9iVUgRBUbBN1wUeAjxTFfgsXvkfqUa3",
  "key23": "2UGGg3swVSQwDFdpf2K4Uoz6x9Y4rK3WEqxapS1T71naCAUm2JnzsFwiqC6ZG6kQEEWMDYsLzwN1yV4JVG9gQs1g",
  "key24": "5N1Y4YtAcCwb2iD18FfbrGobC6iYH1sfuqppbRm7AD6A58Ui9VLT789H5ZizvXRyriWUrXUmb6AEoT3VPXhsVgf",
  "key25": "25RBEgLbt34gNwhdLK9ey6bTUanotR6EJEczmeEJYUNAd3BQPXFW5jHBFeaQvP1Q2euhWVQMoz8xxdPdvQUTCgJ9",
  "key26": "5W7BojYNGPhdareZtAzmsWmbnzTJL5hSqx2KxZzF4854cELQSu5ryRyRKjKspNwirX5cirg1ngvZDVtzEK5axRzc",
  "key27": "5qhE2kZLaBt8F7ZWqAF8HPSeQQ3MAZJvcRVFYGHTBfuJspxUQBAD6xEnVzZFVfkR5W8jb19uEtCDUVY631hXNuw7",
  "key28": "3MYRrLL24N7MjVoc83cySFM43t2dK3kDZGk1EkC4dBZrdygvb2dDZwJ566NcwNZL1dNMmf4V5nBAbVX3GiojueFK",
  "key29": "bNeWfgKV7SZdzWKYwhdLbSy7QVvsp5g9oW9rafZVtWzTKQu4QX7GuqL7nDse7XgrFr8a7kSGMKbUDWuCiXD4bdM",
  "key30": "xM5uZ4uMWyBk9ZyWqB5uhSCLQJwMxFwiRDMAknA5BLmKCTBP7RyMk7R4CbKfWrJ2HGJ5eDuLrDPr728cyc2GgSt",
  "key31": "msGL1ztin46jHXqP2L5oghaDo5EVQTZXRU2kQdfbncRqfFhpiwWurmy92VNw43pVdR9oBx9GkAwe6AxexhpSw2X",
  "key32": "3yWYmZP2wgxnk23obBiFrk3WT2yyP1BoDwLANTLY5RjZPb7v4UfzRYmZrqtG91VfvTQVT8Fo4w6hCgPyizhtUA8d",
  "key33": "5AVwkz3PmSRxFbFk93JFmsBqUBbx2eZX5eNw7Dr1UQz8jznBU2hjXJizyXtqxGfJFzDBnzbti2LDgpKhxTHkz2sD",
  "key34": "3q3WPMuBmRY6uPGcfzyABLoLXkwYNdnMaJU92pXEhmNwhBDaE51qxyVyDwnJwUrmCCR3qxDLE1LGhhPFPibyEUb7",
  "key35": "3AEtivBUAGi1VXAikWQE22z8B7jxG6vjPxF26ss5d4zbgzEmmUG3MUvpS9wDs3jYdgViofkyg9xjYRg7EwWkCBL3",
  "key36": "5RFvz4NVeNd8GTjz7u1RJkGaGB6aEo7xRZfhqkkexQ4aGsxdMEY6vHd7H5ztBg4Xigdv1GQddGTjMpasAcCXrc3h",
  "key37": "htwisnXAiMGvNGmnXzooFkAH34mh4m3HTgV28JQhFMog3cxzuzApxaQ1sNYqseWK97ge7ekBtH2oaRbo4rRMny4",
  "key38": "4W7aTftPTSGhVb9YdMSAyTKqKZWoSUvhTmqRwJrojdnJszTC9zPaCtdVgj9Q7bpJDLootwPjJqLn4c5uuTbWwer",
  "key39": "5tZwhqtzfbj1v1p41cE2PEdi6gEFEXWW15t1XMuVSMhztDhG6C3MUAb6iWBz3geoBDVwHeCS29r48Tm7R4tKbFXf",
  "key40": "3TiWGW3wq5prtdzhvBVTg2cFjsYvnrdF37vLzESrmDbJ3VphegghyFHiKJGBKfchRQDjBvrv2zp1mB8g4vMiwLt1",
  "key41": "5DVRLuqSqi9j7n3ScESDJcCi7vVbjMn9CptrDs5ZC5ELjyBCWmQfxGGiHZksj7FxvWMSE6SmUZVCn1Hs17uKN5XK",
  "key42": "pPmggRKK8bW2mMxzfmPA69Lho7kDUXhgmqPjva4FHuN97KJvSS96WMkUZwCLGxcRgbmtAcb6mUJzjPuKofUQcRv",
  "key43": "4Rn4sT9DptRg3S6qNaKTrnQrnMhQm8pYB9FhL4BxE1vzZqX9k9NuRePvB4APe11XqS3pcvtu1DtNsi7Ps8kiFEK9",
  "key44": "2mbNQniw6gBPXzKhMqtA4wH1fB5jV9ZqS5BtTK5YPPGHDRm5fDAA1icjnLRhxV4L1bGRtW3nPthC8h6XpsKraAvb"
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
