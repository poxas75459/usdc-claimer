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
    "5yobB9yVACUbC3uapVmCk1Ro1kXMymgNEeSFiTHhxqza8MSEVrFyu3uXhQcLkdbDojiErQgCGjEytZ8tkJsp4okY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dakCYBaR99GrfxBuW4rn52rMpJWxB9p3VWTdu3H3L24H7DqPEKJbWfyYDfH2uNjd1B7c4kW4oTjoeG9xRneTSrV",
  "key1": "2DCCwUhCq3cgtMESBoMKkmRegFEVoH4uTFEwehoQ61LupFQEbT4xbxJbi8c4kyEThce6v2t8jMvBF4aUrQUeXcio",
  "key2": "3cVmBVWbswc28o5HxeXbaEnwrogqH3yTCa38eTHoq1x8MzpCKozbtGvt9LBVuh8PFJ21ANUmHDPThRTcYYiq66SV",
  "key3": "57L759koC8KCHwtXuQgFRZxz2hahki5hnDiaFgYbyHKHfaveY79qvC2mNHPh9mjaUtZ4weNrKuyNy33335sHGrfW",
  "key4": "QhUHsd2ucmtmSXuv6e66bgFmi7RJFTBgyVF25Y11DAYgkjDuXFLDAg4fuX1cCagfih9VPaeQZQybYPnJSrebHYa",
  "key5": "AEDVJ1NoG5mTvNmNcQPZDCVnPssfpQTY2XqjaiowUx4kVLR3vjUSw4nqZbUXA9JvxvVLVKF5rSbEepyg8PDbwQr",
  "key6": "5mJSaHLtNYbvGwT3gNrxSYU7rcR42eXSWgsFoABNgkV5bh6fWyi428ycQ4KrQ1qt3w115bkTBBZofHDat6qYURDj",
  "key7": "55sAkDJ3J2Mtwmri3TxTBLLpQEncoqzwPxSMkZaKLuTrx1LFXAVbdGGb7sD3dp37MdamSAURVmMeKrZ7xNZc6b2b",
  "key8": "5WDAto8xBjA3UbvEqoycoCTiAF67qNJkTg2Age6DnN7zeRA6NfGGjgUQuT6vLFHcRS3G14z5UHysfEkdHbjSRJuT",
  "key9": "3PaHmkReYqaM2RYS9H4pDPZRGHoHibbpzi5XDoRqJuBWCXQfTtjRdMEcfJzU6forrUr1a1mkbWkUjkRDumSURRWd",
  "key10": "Z8tDuzdyt8MokiMZB5vCxbUiVYmGxfk7Zvgwsw4rMNm3iwFbn86YGcjcRKAoUMRCsNZbrktD7iDNa6RBUHR8Wo6",
  "key11": "42BzTthxS43somRs98CzaxpERh4Mr4YYkwCWRAwWMunRjhieieodwgeQD7YKFMAkZMR7NYcM9Wiw5ZGJPhC4Vwe8",
  "key12": "3wjELd4b3kyst5ZUwiqrY4N54WXUAVgSB5YCW9MhsQUktkPepc5BH6AwB4a6i7NhoMf5Euve7aam1ddVthRGjLL2",
  "key13": "2isyqH4Rtu4h81QL4WEq8FUwxQ1MKMHUSaMgzknUZtEEp5V2BM3x6HWF36csVbkXsTENrQZnn7wVTaZk9BYFecXU",
  "key14": "4oELjpzGRj42hkpZ9UevkHtaJrNwQWEYzSVZa6eSmLne9YKqtDuehDgQ3JJQ7pjZq1wz88jpEnjD2Vmja3asDuvd",
  "key15": "2BvMec63gRuTzXE7Q8ZddXRwzCrLtd1Pc7owHb4Nroq7K5XweCapUuYo1xbdkrky219kCKULc1qQjLdmUrchAPBo",
  "key16": "2pQUQ2Jft6pKvDjwKESGmPTcMRExAdpnF48fGp5GRzcENNQMs29PrqPJZNTiX8oezrDZb1RS9cHrXcEm1Wn6u6in",
  "key17": "2bKYWqr9SqrJFyBwgRQRKJXf5APGQkQ6mhXwxJu2AjFjRT8TDjdQedWKLWpqH2SryAUZtfH6qdG43eGsqn8bzSGW",
  "key18": "5ZFsSa8k7k5KN6PYTPAu7WqCJo3taZiyNwmQx9VGswVpCGdRPuXx2qLibazA8V9hFRYyxHd3dy4WSyKt9wgj4okV",
  "key19": "64TzdgNVtwVKqmfr2zUKnrfgFZj4UfzhMsP9DhjnVaJ8VDBpgrDimUX1SaJ76H93DBR7vaef3AfdgzziLtrZc7Qj",
  "key20": "46idhYo6pYcfWCBGAtciw1Q3bqLDSrbpQSoUqtV2uVKchsCXmet5qpuqyd8vGnD54zdi2iSXKUtcRrYUrd2yxiNV",
  "key21": "4NzWoeQ9hnz3x48ih5rG1fYDG1h6z3ev69C81kquHc4yioowWxqe9eRnYHYTQg9nBMui8cwNpCepXP67WTCecaE6",
  "key22": "3u3T253g8ZFsuPbFrwx8kdUgB6pSd3azZbyFCNgbEkgXHtMLWHBdPKcHrQB5mJPSyw3T5uvnXv8nb1sGjX7D5Bpy",
  "key23": "5iJmPYAhNksdeogMPrM9QHpiPVyGvZtdfnxTTmidHTP5q6GWRAG8GbwVh2km3pMUTxo1aGbSdbNrn88AWYp7E6eH",
  "key24": "5qVoK5tbuUdRFh4AHhBJSeApZ4u6HUv3Ffbi9R2a2zGLhuXRRREQFxkpUV2zxxj3aPjnZgujuMm1ifKeYZcYb2tr",
  "key25": "3xhqcXT3ThpRBrX1hcxEmqA8iZmUELDD5ERQXCXzshbvEZuLRatzaBvMG7XRvuGt1QvdAgwgD5jvsdnExRHpb9vx",
  "key26": "3A2dHheLYpzybdsc6cQr2fpPtKfW79XFs4KBZrwCnFmfoviYdGz5WrF7rDVQiyWgM3FeYvxAp2zez4GVXYK6YCfm",
  "key27": "3WR2tENcfQf7D2yH5HU9JmbAM6dsS2JG95kbaQ1Pbk1nAke8DzJKP4XAajiuyANA4L65n8kbmxfHm7c8pLCSF52n",
  "key28": "4yyNKRrB8TCUWbhMqL1QMKG7bRRvemLh7M5cKcPnXkuXLXQmLpNDzTutjKB5wfwznZY62ZCsUx83ure7FmQoB97b",
  "key29": "4v7dJs4oxth2uGAhT2MeHqxQEtH6fuLd8Xnb8tzvM3oTsdA7DvC7mu4QJS4CiXFyABhcgETFwtzUX4BNFUqoSgHG",
  "key30": "3qQ6qVZBuvm4KA9WwqNTCYM9waeUjUCswf4Z8iV31mC8JGKuvYv2TTdGQAniJZUjm1Lo5Afwo469WzNFhjY6QN92",
  "key31": "3ZxycEBbhBKo1NtL7hA9vjx6yDF1SAzSNtaYXzTpGTMx9ZkFNxGDD5JGjnn6FLuNJp4aWcnh2EPyLPFaUfgbbzmo",
  "key32": "2wDKdRdZrNqTLmV2FsMeXdUp7TPpFzHwYNgoDm8Ln9JmsJoHSPV6N8NmQTdHcjzTyrXAYGqEb6zfSHGWhgXmEgNi",
  "key33": "5HbytCDrb85me6SvtEsZRQnTyGThr5zVG8JojbNPPTW8uZ6kAfQk5K7JFUfGVhroH6fkmv8qnH58zamz7mbqrTfU",
  "key34": "TXYLwJoWxnvZm1eZ2Rs5DRQdQdWrnFhX5RS4DEHCh3CwKNCZCRr22FVZtG2oAnw96ZsrnMH819Nm33kG3UEXtGr",
  "key35": "4fjSAcZJGQ3jzqa7JwEUCGVxtdNSUFthbrAC1bh4nhgjNdQqo1oB6rcEcaxFwKungg22muQASqxg8ab4T8UHaUN",
  "key36": "2uTKvPwmEJSsBK631zv2GQfP8vXkrztns6jha5ixmqr7Dyfbaz3tsUw4H4VeenLZjQpscGqSf853P2gGq7KpaeL2",
  "key37": "4ZYfqw1NHCJwarNuSJFoUY8f7hUUyvdfgUhfAGWM38qXWLgnKLWpvR4yGAvSJ6EeYZefxGWLPHbG7Kg47c4ykbkr",
  "key38": "1bQ86yN41Vrr1zU6TCp91FqEzzeXp8Ru228sqW12E6oqdbJfYw6LVTesD6NDskg6XQhnnWzKxzwZwwnJDUsPm31",
  "key39": "2UC8ZHsTp4NC8DL4NLkGh5RSvcbBJh98PECSxzmS9A3KU6zoJEyurDZUJ2QRYh7xRzKivNUXfAUTyTQHJFUHc7qA",
  "key40": "5S3aPMTgF8Xkor2S7SrM6684r5UBP6r3qrdt4DRfCoDSnXdMJTmxHBquRXm3T4MZZdDz6Lv211qf319D2PG79mjf",
  "key41": "4sCttHjv2rJ4pDYkfiANtrscK5h1agKfXJAZpijHy8btXM8ZFoWzadLPM61XVLeaFKj27EQhufwrXAZF7zFLpHQU",
  "key42": "2Rqns3WEuXSBFf1AB97GPx6ZFhauaw28nDgnBgg2ifLFuTrhgEVt6rH2s689pKoDKpt9m4BCXeZpSBjQH2paZstq",
  "key43": "2uzzvPKMvi5jNxTv92KaVipg4LwAiopiNbyV9g6SFN7SH1SRHkcqLLE5anYpQh9YWSzp89xssuMrd3qdFajdMyPm",
  "key44": "5rxiirCH9DweMKH791aZiGn2oEeRd5aBtUPcuUsyLSJ3ro2TRBLysbASUpAsw5LYiq5PCG6HhP9arfyyicBXSmzR",
  "key45": "r6epF32e8e3UiaE23foHzm5KfM67M2EmB7F5b26vjs5naTRU8aohBB3Z8ZcJUtKxhqi4EW3GnU3S5J6wYDpjXT2",
  "key46": "4dVz7oc5eX1ZovVfXmZ3kSJcPpULmC31s6ALxepBsT5jEqzCyTbFj7VHkfdxPXqWhwZttfSh4z9uRgVfLqksw5Y3"
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
