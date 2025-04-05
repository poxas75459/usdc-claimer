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
    "4YEZHCt2FRLPB4xW2DaLrvVxMCpzQBuzbGkCYA6rZDcNu6WoNsejmDhZxbHXRtvUQnHLMf7wP3SicRg4SejehU2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CjWnYcjvGXWxuT3Fpp9Kpg3kvGda8wSH8pSERv1uuawMZnMrejB2KdcEys3hW3LKt8A95GZTAyzcDmFXFYXKiLq",
  "key1": "61aPjY1nRmmF5xxYE8MsVfLQGKKUmUxLiEWs3HkBHRx7gP2kCGf8seHh58v5Y43yH7ksMDeswQsXzUxqmqS92LwW",
  "key2": "2RE1Nr7Bk2akr9XRLWXMgPCiBsdttbKFdFeD9DipVBvTNYJGyfLfi33TGrrz3FwGSQjaWKDiYRAQMvKp33bChbtw",
  "key3": "5k5eZxpXuwRo3AD6iFe3ncThcN5VdYg2Z1PJ3nk1j2EuhFixxEG87b3hUdsJu7SCFRZWZNwkgNMmPv1gnezmA4tS",
  "key4": "5yByQoWbK6bW6Zs3bajXhXgAdBucGjfGiY4FBAbVsZG5Ei5vFbbVwvBEhTre1cKAusF9BbVoRsgD5JQmGphScPbG",
  "key5": "2JMAwdXhjHDtQtmrf9JdihkUMKDFtESjvgfH65nZDbriKGXFcMKzNk4gZBvNYsLYXnutyd6KB1P23vEFL8x4wTc6",
  "key6": "4RhfGt8FbfQQ5dX6wHM1bkyg3HwMUcQ5xj5TKmwxRXcmgtNNKP29nXrEkb4RJnRgpDCoxnFvuV9VLJbAgstf3Gpg",
  "key7": "3s8YmgqNqH118xgkM9SX9p86KYZNLFiKuvXkfZAX5fcyLkbrwdzcvznNX9pHRFhA6F9yNiXFufpD68ehAAAbw8VY",
  "key8": "422X83gBiWKKvNgPCEtoj2PiHsqQLMCYEhedQ3Q6PnrEwrRSzztdtWj5uB1voihTSqRjpH699RJf5bskv3UAvx2J",
  "key9": "3ToND3p6DMXuCoWEUi5ZupnbS5399ScHpDgprYvW7SZaurPwpsiwqFGqg94pnLn75JWJo5Autpmrwm1ziD9LhXw2",
  "key10": "yzH3XrakbZ4hPEq486UK8ggZ29Bmwkok4fL74u6yuTewwmZJYVGDHcRtWZmiroWuUSCB7amqXm4dbRXLscgXarW",
  "key11": "2XJuWRUdF8GDso7URhV9HtsXmEYgGKiEnxU6dK7sCi2hE7KiAJoBgsooDsNmQj1dhafk3a8GWfsbEGqKQtUgAJmB",
  "key12": "48P6vDetwN3apWuRtEaP2buvdH8FAAER2nAdjrve7wgEDndU1F8WLFfGX8KGDoPu5KCoviamDi4kUUCLrunSh4Az",
  "key13": "2UVeCAByTiS3KfzrbLkG43pwy8w5fXF6HceLGEb773VMKTR1khVt4G4sDTapZkBD5V1LV13fnRTr6WfpJNw6wem9",
  "key14": "5RWRjeQfG8Nnyuh9iqcXMza4siMwXUtGBuxtPfgjsY2TBH71Sm9nJcEWLn5txUmtBdGUD1t5WvCHhuTGQUseSyM2",
  "key15": "5L3HHtu33Y2nkyUcjNcTxhRQtvuiqtFukM7YRBqdPA9yvqCt19eKcZpkwXwUAxWTHQRxDJ6kXS2JHKVBc2SQWHfe",
  "key16": "2X5dyc7fiRiwbJ2ZoKpuRgqPeWZrNkX6ZsWK64gmMaCFz1cx4WYT569x7J5S8N7gLQpUxrLe8wWN3EdLsUzzGeMD",
  "key17": "5bUfnd5vwiyugj9mmaMHusFkSscDQLzQ5geaLfFJGLYPhSdxF33Gbapds7BgGLgawBkp9FudCCo8t2m4cLShnaQ4",
  "key18": "5R59dUJmzDus8AdKsH2GkmwEmD7cGs35LCZv7a3t46fRxid1o6fVM8dAURcSYq8ymVdck9uaVWFUau3yFzA5fHy3",
  "key19": "1msBjrxmaY1jZQDSf9KEjx1jTQDA2otVpJ1zQDVh3e9SWrvKkxQy6H8xS3JdT2N7apzs4fDEehZztUQwvFGztPs",
  "key20": "4bFUyMdR5MKMjdzXA3n282H4PYmkg3UWXh2GwSQBYRDipH5qXaDmhRm12zKuv6GBHyZfgoCX7iVh9vECPjxQBc58",
  "key21": "54pEdASrvJNSo82Ej9rqX3pNwc9RR3uXBNUc2onU1ZaJVK99ZkfuXq8wKT39pVBFsR4FEhQXKmrU4GquZbfh4AGb",
  "key22": "4AwfF8nKtNrcMkbdYL27FcMNNKzHEWkKyo8PQGwVWZVtP36BhaYhRi9wVwRS3Kq2R9QqrZ3GGUMGVGAr6jx2snyp",
  "key23": "5Eh6ZoTEVV9nxHViNajwpr1JMY6koL1bEwHKX1M4QTzYQiZDXnqG9vfmn9A49xH5j5bjWhkni5ipcvzUkpGhmaQ9",
  "key24": "2c1Pbtk28SZhRkcVGmt5tYyhLLHcdLH8sEgcUHptHYFfsBn2VXTXNQ46fjYsZCFDrCkCbeXkNDnZLVtiXuw7yYnj",
  "key25": "4XdZEJ1eicUZ7fFTeCP2KyfwaaAASCgxKUXgAxuByqGUBuxfVGyNkjeqKP7U6624TcvBoDvm7GPcYy7D4eT5Bz35",
  "key26": "5du8df4d9Led8QcGeikiqqoc5Gsxoj5Lp44MRFX5TVst4PjPorog1gmTSfST4EFcCmcxfrMwU19L5g1Q4jiTiVe6",
  "key27": "eDwaXCPXQ9GpYc5ffzW1MbwKEeCZ5NKEGRZsuhqfHYm1fwmAySKLmGozBFbPxXKJiBfwSPeuHvuzkXbgTUmG13M",
  "key28": "33H8AavCdEAysPPoViH3wAninrhPU2bJKt9XQNeXRjvg8Gd7arP8i4c26FcMJS1Do4hffqMqAQSWnhPL5uPqBDxH",
  "key29": "5CuEFtq7TDUWp9FT1n8zmKbcLKbrroPozmLAQwS9z7tXa3zVRybWqpUojSnvLcs64x2XSn4fK12qdtfLhVrAzgtH",
  "key30": "4Yyvgg9UwNM3MKzT4p342LtjUEcAh1pACTqAZR51JVkwUPzay3ZZghcUTwkqCo1MLkhaHZiAcwarBNmwnxAhjU9Q",
  "key31": "3L4cynbv1Xh4Cu3gj7FTQMjq7BeENCRX8hZLseSSbuhGXwHHdfrEa271pbW1dz7vGrrbV8cKwKv3Zxze3L9ZhFWT",
  "key32": "C1foNhwNgaLKibJZb7VFHFBD1kEZ8USQsgwBCTvpE58tWkPCpn7rSJ2Xmo1EfFKJtpAvWTLkBJ244CJDTf6qdoB",
  "key33": "3Bg6sibFba5MP8VLypXXWKqHPBS2pP6MVJBBQnZTNUaaVTjQPT7HAXBTJJaifYGEc5nQEp7tnh2764fftDWohys9",
  "key34": "5sdjmRqK5AMnJEWdPfD1dYtR6TAbWZpYvnwJMNu7GHS8GgPrmfGfqeCEH3JKarfzGmBbYUKby2mBva6t9a7oQH17",
  "key35": "63roq3Z4ZX7M1L3sDGkEdbBR56Zi6E6qpVU9kjKBVCjHfTCvgS5igqNFAkSdGBcEGMWCWonhbMNWp2zEHQz1LWwc",
  "key36": "41SDE71mAf8UsCt4wWZyDsspREXB38GDqzRXqXLihrVHHaCWsJ4kaEzF4sG3PjTT1LQ8FSQdKHCC82kLFo3kydJx",
  "key37": "4dii1C37xjAi24zCVhdve1tfRWvi4fBCC4FpyipywTccjCj4a2shGd8tJKD9qyWUrWQr4sWxfkXs14eYsvPW4LCh",
  "key38": "Vc35tykXwmiaJbmL7oKBmDgVXLyJaoFhE18rVLFihyimJa5NbpxkpepxQuf7rqzZnAut22R1D95gviQ9s8Qarxa",
  "key39": "4aK4LWh6yBDfxQ9Hd9KfLwWc3VVBjBjZYy3CZYWhh2PdN6X7XNR2yECPUYwhAENVBAwyo9AkEUEaqjrBTFaqUjTM",
  "key40": "3SjyRo3Bkk1Lk3g4utZwVoncVmme4MUomLEpGaPBtEkgytJ6rfJPbr8uPK6EQ7CNJypdjW611rzmjBJY6xS25e2p",
  "key41": "4LuiK9w6DmfRY2dA2ewtjFRdWZ15Qb2GdeJkw5c3xfYe2Wr9wemGYUhExHB188TB2vHUgFbbAyzxVM92mv34afjU",
  "key42": "4VtmobZN7YG89AHNkNL5KRDNexwp11P1QwJ1EKvuRBJFWZc64pAv9KMyA74ngh5VBQJhGpsuEHVg3FxgByDV5c1S",
  "key43": "JGd4zsTL6HBUGyKJT1MdEAL3ab8MfH2kDfEX51d9gnsBrsRyehLCS2Jhe2F8Rsa71Q5zaYvUHKLVcrVkoctsKtq"
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
