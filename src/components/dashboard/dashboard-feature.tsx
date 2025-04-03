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
    "254B7Q8teG56MRWDbopRpikkihzrTVA8Eu9UE1fV27uP8bvSdZC68qHKFk2kZ7hFK3uUvnvo5CpwNYZDfAxrJ1bT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kgPK2fCKtYcSYo7aeoetqGgghvczZN5FYP2SYU8iKfvsqaRhYvpE3MFMRuhzas29T7CQTGoYUAfJLkpSHJUTtjn",
  "key1": "3xdhTfr9AtkTiDM3AjwVPvrMrp5zeKUk3HKX5xD7hBEmxg2AtsrH7R1y1x2isAXhWa2GLeVTpGd2fDFnPbNoeWx4",
  "key2": "5YyZUmkYXPm8VKW9aE83uxpU4X9o1AyTDUVeze2jvaEHiu9NomES2iJ7efYjsNxYMU6EDpyfQ9PMupB3rpxCBU1q",
  "key3": "3yqt75as2swGJhc7QrkAKzoh9qwoUCxdyuN845yjGWpoHpUBxZmmLwRDVpM7VFkgNa3YaXVqU7ybKB4hxQtnCCrs",
  "key4": "2Preb1qDPvY712LCWD133CivCXX4VHSTNypT15gvUMUnZDcTWC4xMnQJwWwmdoifv9tyGrvx6b5q6sBxFokkaPai",
  "key5": "2bKQhPELrNGiTKMbGJNDGHyNbom5ydF2LTjn2ZERD8PydEW666GEcM8e1KUoMFcp3oDkHxXx9HQthZ91FWinoi4N",
  "key6": "2dAA3fy1Go25XoyNvDn83c8Qte2eaQpUnH5RSXeq3m2BsLKaHW1tsoXDVNa2dHBWDBHgiz8DRK2rKDWPpSibtcZW",
  "key7": "4X3qrNY5buNQqhB4ZroMqAFXpRQ6YYrPtBGhe5x6RJAfkU98hSMoM6XLwnaDdr5nzHuUac2ZdBTEPUyVc6W96rHC",
  "key8": "3Ubv28sqEapyK1rMXTC5J7SFFGzFuPXr7EnNme3nHx4nxJbTcotukVchc887Vbc1V1je2vrK3976ia3nfHCBQpt2",
  "key9": "5nM7DN3DvoBdmtNLS7VifevtPn5A4p3mqd7qvC312z3XdqqESmYXXvMPyQNpzRvRdJcxxax4EJtE4NtMgYaoTUCg",
  "key10": "5yBcAmLipTaQyyKKyiitSyAkW8vzgjwjrcu1mH6qwAXV4VYQyermnLEz4erKcHB19WeKgV7EeLCd8ujZg48FiU2V",
  "key11": "32Mpx8NWp3CwqubnHDfoCJqmjZckHnXJtW2scQy2YSo3VDtFtPmyChvcG31Wqhz5Yf5mhWQpArZKAszL2CYc5VUw",
  "key12": "4XRspLbQ9BLZdCgd9M9TUpkVSrkp9EsRsNsM5bAU5agGqYPodc3Gt8tvTZF9oAToBWJKisqWcK6yCU4pUjbGpYWh",
  "key13": "4QDdbt8qMpuhAcxxdnL4UEMMMT4HQ4nMHEq6g5uZYdQ2RCoPNpz9x9yczNENrP3jezQ2q3KXHt6wM8wyZCH45bN",
  "key14": "5RYGYTST7f3AeGjSsQVJ2CFZXCzffSXJiuCQbw9aUwCoewxFtpNFSXHvn6ZehCW9UMGqHy8kzz7bwm2Ju23nuRcf",
  "key15": "5vx87esgoLptVaY3aXsnbhbM4bnLCgF3Un6soqs2r2mKhdcr36rAAheyGLDPMneFfaugpodygoSCQjVMCusj1VU5",
  "key16": "2u13bb6oUEcEDfv2tpkehCxqgKiSwHWyx8T2yywTmFcWCLyRbjemuxiDFCtz9q2617YELh4APYf8ZbbJ9Hu3gFFG",
  "key17": "2qarawkkQzkq8usQK3un5G4BffWmJ3WjCCQUvHSpiQr9pWQvZ4xe2mGTPguc51tQrpWRF2W8KYgyP9AZU4LALmDa",
  "key18": "eVJEmtAQP1ZtF6YocgiyQbysfQcJB6nimLE61SJnirijCJs4Yv7joLCZjdwHVvaUdXePGyuuErCQAkt4ZANgRgB",
  "key19": "528cqkLugGxJfcG2Kdq5h86N7QT6C1FVvFGfmqbScu9oowL5cytt57e2rESuvC4kTNtQ3YzuDZ7vJk8nPXaw1RXC",
  "key20": "3rnz7LuszPBp9rBjeccFD7i5uGCgzijqzkM5Wt8PcCmFC2VVz3Mg1w4tYNYPGMaeawyfYGnCG5HgkGv91xagEaQH",
  "key21": "5RGAwwfGVc8qyFCDa3TGsggECMcGy6v1NeS2iKTz7PuH9rCB67BqWviTnKm6MXgakvtnS1wBqP5f6dCauWd4tEfw",
  "key22": "cAh7vGYFXm1JkYXPJDNgxznS79Ng6m8UEZdmJVRZCHskgYaHHdd66ZGFedvnfiV83WwvSdYDzbmKn6fxHgvxANE",
  "key23": "3uZLhhan1TJJUqRxxQtARNjGXDCZvzAoLsGtrxm1GNskhnzctfrtTURi7Yhs5aAcK74T2VigkyTZZReyesFvkD3H",
  "key24": "3VBsZzxYpDgzSSTz3Munwh4CXivKG3d9wzw12Um88dE53K4bXG5Uz1Ej2SWQ7jpQyAhKqWf5kK92RDXejEtqgWuL",
  "key25": "41wTzJZM12U3y8zCj5kWH4BmRYbumESuFrp5s3wdUSQZhs33SqUmvMfY3yH3cQWkAtMZhCW9Dk8EPRUFh3qJSV7X",
  "key26": "4sih2Rc6dedVKRj7ymRgBwA2yrxgE5BESjKhUfA4fxhor4iYA55c9v4qCYnp88ywsBM5MCvFkdPnW7JMVyz9UiFG",
  "key27": "hceL9XVCvyiV8YN9A76kd4N49ViDYCpYZaJEBsvUGvpNsmPyFJGka7eHxDWCVqGDkfgtMHFsdMUYxmjF8cHSaVN",
  "key28": "2nnsPxKaLps1WqnxWzAAftNRCjK1uhk76BushLjcni4GvPaVtr1s4eARLrxP2VY5UzhVFvWG8RPj5SqDGWTpixdM",
  "key29": "2y72uP9PZUHUsN6Pyi8ChnDzuP1owTGw8ZzrEkz7Cwy34sKk78W4oHw98DR3QvCthNesAEGqGtFkSzzcTiNQ9EFp",
  "key30": "678PriMvG62XJVpuRazLziMDsZgkK1LRV9yDsN57SNxC5U4kMecPuqFzCnhrNsyujmegHgZM8Sp53EQRx5Hemwce",
  "key31": "3WzRyeqnbMnh3rm3SMWUk314io2Ay98vXhhk6U1vn6zpKgtuMfahTfj7dF7hp28ZTo2EJMuMht5bnzJJkNfHz2D8",
  "key32": "4t61UeLc1WgM61FuQEPMfXQhnY8Gxv4y2A9FFWxegWRz5Qwqq2WKxXnZktg2FjFXuVF13eHH1GTLvKQwrXXaWD6K",
  "key33": "3XeB9fwEajCkB94D1SQ6cArceMhSfgbFguESwwv4W5E5UZ1dTq97JT3oazzm4dbgUFRKNG87rNYDud5bPhhckQuZ",
  "key34": "3qkeCtJP7poGreVg2eMXwqVZiFkzVN8p2PiVqwve2iy7qHEcKELusQbA53kvyGrY2pMKe3haxVXJQwbbDQ1mskPc",
  "key35": "2Uocam8RZZVj76V5rb5pXv6VV6bwZCMrhjqH4FoofoDHBmhj3qP1WfjmxwJWm6hoJX61KJ8BkygUMs9uPrAEF8f5",
  "key36": "4FuTzwS7BTGeym2ze94DAsTfaUQzmSYwvNZLXvUarzxKzxoVWR1anbrprKPMV3q2PjTFeJcJQms92C4p2RCNApWv",
  "key37": "5AMsGTAFXLF2LkGPzqvHJdNm9LoFoiKgKvcJqS8oCvv9yen3G7YCcHoqWpn1CnSG37R5C3xL6i2ZWqQSK3zZCuP8",
  "key38": "2ZNDUNC66DhFhfG8xDU7fu56X6DuTLngYKtDhyjXPC71SfGGdtK74co1tGuEm9kWkL9vZsbUMcq2jMrunhWostSV",
  "key39": "GqSLiw9ajZTAFRsrpZhLuQMb34WjkwBhdEWDrVm2LF3DCcizYjTK5GPiA1LBMELxkAECqUPVQwYPUXjkqavMNyw",
  "key40": "2PbaSUHqu4rN8XgW2JYQ68J4n8bC2XzatsKLZCqZ8xRwUoaLmSHHQ2aVv2VzaUedE83KStCcybXMeoMjJ4ZE2ngs",
  "key41": "41EEuUMCveDphGz2Pgr25kVGCMQWgAEi6j6rvPGHcHYFctbj1FVLFrgjjShj1P8x739Lq5Nny95wM7yAruADAPZG",
  "key42": "4yUGisv13AUKY6nDe3bKXs1fPWUQcYRa8UccpqFWfmY7gMcBQD1Ybevoxsmb1BrZi4JVqc5krBHxk4Z8c8oANe83",
  "key43": "2LcWkLURbEuFPwq2UM9dmEUATCrsrXCMryysbzeZFX4XLufFEypi3zkQi8V8xsb6r4QT1GKLxu54SFJYPiqVCKBN",
  "key44": "3NejnTvr5gp3qb8XzPNJ8fK6eW672aAJGuTwu33mwuspEVZNRih4f1BLuj8j7vJXDLYWL5F8gEsN9ehsRiz6MJw3"
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
