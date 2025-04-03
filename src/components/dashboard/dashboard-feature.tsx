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
    "61EAkNcfRCspPrEPn1Q93wMVimZXErMdXX62VBW5swN7c2MXBVy26AehYc8ZzpezaofijMoUNC234uc8N6H8L8vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PJTbSwka7YXhNm5g5gRUHUPrKa7Wfj4mZSJpZt8DVnqvKdZdwFNfeyLYumQQ5kDjKAHUAoNgkU4Uc6ww6CH7gjP",
  "key1": "3RaftQBH4VeJemXvrZmPxiZjgVTzkxZt44NxWDytXR7ucr6dpMrhCb6JsmMfyTc4SHnayGWXbpBWRoYZNxtsSVfm",
  "key2": "3KnkSXdLddGDxGmEJb9gAwfxWhErcLn9saRSyYXam8dPaYn17gRXBDJkzuCe7gsZvFgVjtaVE4gsiEteJd1L2FsF",
  "key3": "2n6drHotRMNqtnRDhypTHaLVQo6gXyAFcWvbuQ48k3qFKkoiB9g35prDYPhBgtYsYnmnHPPzgJX1eqHYAKyPLxJ1",
  "key4": "3F96xBjxJ96fm5o2cwDhfPZhNJtKTxiRKM2HiSCW8PLgeHnEaBBD9fx6b8fjy1Nfj3cXm1BjCgsvbsAycZT2qSAj",
  "key5": "3yhKfXa83uDhx9toY78AEzhjve8Puq5gyLfrDM99FsbrfVjyi7a4weF89R8Lm5FwZ6LNmVu8N7dfPiJ1rzU7qCyt",
  "key6": "2iS9X4WWZzbTyaXFwRRYeKKJ66f8xk2oAMdHvrmnrtpLQZybHoCsdAYuZp2MC6QAirpvB9rWspb8vPFpHcgCdB6J",
  "key7": "3eVjD6tFcEVyyn7E7uiw2GpUZNEaiNbfi4eTdjYQwW1tVVjwfMLKP5msbUif6eSLm134yiAc3o9Fnhv75AaTivpx",
  "key8": "2JzhLKW9zHxYhbakKDPsPZnJQNojRGBPXDBpQ5abp6HYcwrE6gkRWLnzj6HvareuLvrL9NcmCPLeqxwGvVDen82M",
  "key9": "2Qx1Hs6WA3EFUdeASa2ownRvSTtzZiu3JL1waAsP7HLBMp6mQGzKpNey6hKHKGtLp2dg2sJxFb54sCZSrkRSSUrL",
  "key10": "5FwYsGnVXu6sHV3sZYSwZsZ1xgg9577n8TiBojjFabnqKxiBZz2Pxuycoba8tyywJJkA5vz1JZ52q7iUEQTE3U8t",
  "key11": "34j7ES8hruwgUP1vv78Vv6yUaU5goyjXocyKuctgCosgy9VmoC8WPYJ9PrZj9fVMcQMMEFE4hpBKxwBDjG3vdmP",
  "key12": "4U8nKfunX2XR7AgQ8xcMMpeuCJsUAvM1rrsy9uVHYj2rbQtDdRm2zrqqGRoRHTnkymF4mBhJe7zUC7BMkG2EHxof",
  "key13": "23Z7DBB4NLJcpNzndDT1VR6J5awBQmsBCpkBmepSpt2DLB5oYHCrYsK49YR6JGJqUY7pYqmaBhZVm8WBuCSvFKn6",
  "key14": "2EAs8sai2NGwr36iRm167JwH5s6zrDUqiCpjW1WKSKqpPPXYrJ8zp7oZ7FZnU8pz7g9KCNPYDjQc1J5V2Ad1k3DC",
  "key15": "245L2ttsRsTCjSg8cLUSFaoV6GMmFG8AbS9qX5yxXexNoyfzqkeByY5tqrWmZT2f2NZmigs7LuftpqXqnxU8mL57",
  "key16": "DpnfHLpkgF3oqS8MHVLsBMu5aon1JQHaHho7fxHDh9SRKX8ERUK5j97fyZGM8ykeuNfqj1gK7GsRj4fr2tmJdi8",
  "key17": "2xVXuxVy8niPyGe4Cc9yAn5v6JP3DNsD3wzkwKXxQk72KAcFrEnVd5dQDLh8sWfekaaGDvFuQyDmVzH3T8vVw88s",
  "key18": "2TnEMpbZ7BKRNzykKM1uXBkutwaSvkqRo23JPjUyX4zAi1DJH2n3wZ5TgwPnvW75fSC1CC5bNrgV24KcKX95y7H5",
  "key19": "2Bbp1jTUwNdryQ4bkCqVuc34oFQyoLTS9kZqNbb16yzSz4L9YLpa4M55EQEU6RmjuMkKa7qNweoTm1uM84UpdeDW",
  "key20": "2oXeLHrAqBwMi8TkkEUBcNCbR6ZF2ruSrD9uKJAsAgjp8TJpx9VodS3xoup9k94A5endZ2RMQoqYBSNAwqtbUMo7",
  "key21": "2cM65WZNfvXia5jjnTiQWcgc4bDahsiTfJQgPYtGyEAuMBhADrDMPsN6bp5zex48NyNVT9qvyYHQs1mKyUnF8Lnf",
  "key22": "4puUgssn73fYSaFxDhDwwnZcG3CHewh2rbVp2k5UHTGgwVzTmLYQuKiCRbPHkW54QnmE6RjWAgMkXHfkXrdQzKpk",
  "key23": "4f4YcR4VPruFBbJU8udtrrZ5smmWq5XwoXU44xYdGnrV63mm474Q6erPAo2PNWZ9s3EpoAPbeq7EAJj7Wr1ZM6YG",
  "key24": "NFLWkHk3LPhrErEAaht8anrg8RaqVRicNdoHJEda2oszvYUt2tu8yt6zYzGaC9qfceQ5wot9UTgjnMsFJLsULdA",
  "key25": "uxd4ty5FUHWuPVtR2dijyywhe9dVgzZHBEZ3MtAaVzEwnS5iJUKs51k3GUvWbw9KQv6swekL8sspoXitmrAXMyA",
  "key26": "4ZcJ1Jj4LHRRcRRJ8b54jx5cxQnu6QUaBTM2deBZGtMdBmbaYycgJHyuJKSVR22vL9YvvHRBQi9mnrtMUxtNGygJ",
  "key27": "4ShKmBEN8bTEqPzGMmFi3JLn6FPEFbZNBL62ddpQnLsUHup69eRwZ6z5bu5T5Fb2Q7kdw3i3nDnukAmshFK12c2K",
  "key28": "24MkXE7cqTJwv2NHKrMrmFtzVHEyEPkHfe4XDFVueGpC2KxSK18XV2AGWi1HRPQc6BKVgzNLVEZ4vZVBPWV9gACM",
  "key29": "2GiN2dR1QQvkb7aCBaE3oU6c25a1xVmn8naj4bmNjXti1Yx4NwagXBr6mxQiakgig8pNVfZphqmnLb7yx5ZRAXyo",
  "key30": "53WuUFcgKfbgNRNe1UgA581QAFEYW8qJHt79Zc84g1A3nqXnyNKpZRZq1o6ztsd8xp8fkCEff7uNwci4cSgTZK3j",
  "key31": "5NcsmFY73sheee7UvQAGV27Ft9HBcWMbB7gppjszUqiiK2T7DJc2BZaQBmE1t63yJLtDX6p3ZAc4our8BGgXgsC8",
  "key32": "2cNw4NodrYCQi1Jq1y3f3QR5tWCQJpim7vnoNJWnjcmbgjB4ZenNkj14Wgr6QqQi9AdvF3J66oA7sJfZCxSFqQJ2",
  "key33": "4igErn93Jtzq5o5eydsK2FgU7wiig6zjTytfHRuQKzHHEu2X729sg8kVYXUBTRhqn51XaQp5YziU5brNdHWRmpDq",
  "key34": "3YWWW4TCppYA4M8w3vDE2exEgGeyig1Kqu5HMb7aRh7msrRJihoRhojcUoJWdegBGe5B3yrjrnQ6rJtbqUFTUCww",
  "key35": "5yh4S5rUi7ed5MZhYCo9Zu1EF8CNf7v5he25hniNL9ffCDGQR1EZqUhhPBKfxq3D7WnwR9TNkQbVtyEPFYCvk9cF",
  "key36": "3eWDgMQ7D4fnutZqjEyJpQ34TLQMFXkM9iTCZiDqz3NyP8SDk68PCUxRQApCyXXs67FSQJeEmSQ4SutjtiC89tqJ",
  "key37": "3nAxitUvxG4S4zoSAThb1CHf138vFS4SrmjufGsgVFhPck3SEVzfLefh8MjWYQ9oqHSZbdYeX8udqsi3gj8sHhpk",
  "key38": "2zXsfjf2os2UXKA8P1BvkhPyvT4yYKiUWqCHc7LjJUVQsxCGFfxpbpV6BK1iucCJnfNWt4VNFhExz8JFCpAkaysf",
  "key39": "2zhrBGMZHmCUyKnaZzKTCBW3Y5RVZnMZ8UudFbzkEh8ZhZwZz2zstBbKaqSr6z6LE2jUycQGZXMkbga7jP32ttBR",
  "key40": "3duznrspbXJuQRC4ecwGse4vbptV5pqEhecmgGw3Kt4NYGNaVuCWAx4R94oy4dHstcyQubgesWU7CkcDwNQGWyNW",
  "key41": "Kv9irtCUKW4GMsTFmywXxuGxxCkPKcpzE6HPzpijw7FD1gqXUa9Y9qFxtufo2EeeM6CsAE3ApQuWY3mJfb3qSax",
  "key42": "5URHpnM1rfZDy5fvNUN8nTVs1L5xDK6PAYir3oARg1Wu87C78oK4CT5CKVZSdX4d1m3p6piC1WnPxB4KgPqwZfN2",
  "key43": "4kH4pChByKL3XScjNAfep6VA3375qQxqwuY793G9m7Zv5FVnBuSQzGVg1KuXDTQwwMMRKzc5k5qGkyYgg94d8ZBc",
  "key44": "C1gp1i6vT7ckSPiXjBAM7jWRnPyMfcUYmkgoiVdDugU3JrzfBQL77xnP5yp63LjxmfYFQXmEni1MYi7jwdY5Wkk",
  "key45": "2q3ZEJQFzn4xNhuznfYLncYMkWmKgUP8E627niPP64d4m7j1PWLiiZpV14HzDUHFsF5ncvv6dN394PM4KcF57MWm",
  "key46": "Kep8GzDpBf4vn4n1pgmiZsfSyRAevSVHurYD8FCziTo3LivFj68EwVroyC2mf63akXn3vFik5UBLftoMQjDoTu9"
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
