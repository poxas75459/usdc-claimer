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
    "4VcgALfWui2VjBVpbCMkRmPep8ivXExGeM6VCrTrK9wWPFJTgtNXUSEb8qQVCvvCzSDejnzDukv8GsN2PBDb5M2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NdrtybfwZTVNTQr2ocT8NrjoQQKXBXL7zu2tDgvMs5317gyGbriz1k292oh34hd6FzxRkh6Xr1vJziGTtvqikC1",
  "key1": "2YkXE5akKmhhFAD3dLnBfYHHQ5NHaBDGtgjm7RVHmmNBjnYz95TEksVVhaWUeLsFXKiLRvW5hQYY8ENefdJyg7va",
  "key2": "4VQgtiyCB5qUYGtnu8r3xZ2P4wtGD4KhusbHdWgChjfLdH1XtYu2LaywzdGv2qgzxAA5Cbnam5AcZ3jSSeSbtsXD",
  "key3": "5sZygwLHpZANje9rUZEtDWd2QuajQwpmUM3LUmV2ipKp7JRyRx6oQL9HwqjFxaWZcYcBNo7TfENmWBCM5QebS84W",
  "key4": "4r6g2wkMukNED7mHMRXUKGanS8jTyKoEh1PiQTPPdwxiWRTQhfzqKy7FhTjoMtsxCZbXietEzRbBAwhbej1MJgJc",
  "key5": "4fo8yqH2hY5EheMQS2hgv7uye6QurZhJmG5yaCzPCY1doQBKFjLxBBV6mzUKsGKamFvdeUpvwAPuTSe1GrmRDzNj",
  "key6": "4hVxkfAN8iHGufmkRtdSkothaodp9Y5CwjcaxzAKBB2RhqMEeyN9dy52WnqpJ36yjvzL4z2NzFi7tmLeUgr2FSu6",
  "key7": "5p348vr94gBeUkFJ9nhR5oG5xU1DKw5hhi7RzuJ6vTRZa5gw3JyGeczFMX9GQxK9XxqorjjohKfion8eoHmFXN8",
  "key8": "5coFJu18Rdar45G5DbjmbiTuZRsekc7oLfLjrGoWsWiiFMTnjiofgamQMHBDyUzb5ADgTGoRCQw1qFT2eCGTPxKC",
  "key9": "5Yqr7zijvQphe9Rs46DQoTQs5pTobunDPB2UqSLgVpbgKtnYmJN5BqzLcFt4Z8oWxB4F3xrsiDQYdwoj1Wh2TKV1",
  "key10": "4rfgTnF83XN31V3GQV4cdvJMoBF82eT2cEygysmuTfA1idojRfMiondUvvujQaUwdp96skqGcrpEQvioHyM2EdLV",
  "key11": "5nVMYT9kctYkZNwsvnMDu1nWupRg4L5osdxEWKEvNYGozqVe5ykEVvxrj6FJnBhHA9muhUz1M9LqfzgbiFuvVaUE",
  "key12": "PQsp9PfgVVw8kNrek8cSXr3rrZN1PgEKW9CPnyqUfWamt2QGzyAJTtXNh7LNC84AebfqjvFRLQR3dfNE1Tsg5BS",
  "key13": "2CgDJXTR2e3q7ad9VXpBxvyhHX767FPYmaP7VwPiTd4PDgPvouic7WgspGQq586ZAEeMc6pv8Xckwr9a6mZNPaLZ",
  "key14": "2RXsPXAQGRkP791znsXiqf6KpNdsJ3ahaEqs86NKi9GELWLXEAo1LGYqvDFmpLxCBGnKSNFzgUEK1vUp4gVV8QhP",
  "key15": "22eYxkbq9ZNPMHs8yTMtbYtckob8Jh27eoUtVya4gTvT4jXShP9W3LJUwZdmbntkRjijgTknvMQfQi1snspYjb9s",
  "key16": "2hYQUsi5fifUQBTVupcT2DjStW5wwJwj259kTxiDFCppNaPzwYwYEeCAF6jR5kAs16XjXe7aCCfq65rL8Nh2K5gQ",
  "key17": "BCkfLKB5FjirmVFRPchy7VAhasczniqTN5qiqxvF5SHaHgYv6GvvUByQrLs2deHLmHvVx6iUwowz3fjhz4mKPhw",
  "key18": "wiAuXnikcuPVuqh47nBBUWo3B7hic5jGEBonztEqtfZqtw34iWKCvnbEjfxtevMPeQxsZbB1J8ZyjNmA7hNU1xb",
  "key19": "394AyDBdFs7stPatQR6eKwy6ft1U9kjcRbJTTkEEJ8Xz49tCYkJxvbjW6BVv1e4wbfcVvWjLtscZCwfevk6YZsqe",
  "key20": "2tM9a4m3e8LnZhXeRBYMDvG1LkeDftNYGNEaGdp199TkBWhmd8m55qsf76rp4xb1gSrTBMsvNaWvz3xHt2eeMZrU",
  "key21": "5bQiKSGBNh8QdU7BHDX6Bm3oMSTzLLsRT1jb9XjkBF7nEE1TEnigsftaobJATJ6FUZJVZSD1tC7ZtoxPunjgA992",
  "key22": "4vykLUAXfc7TDbShqZStPfWBfQNwTuJfoLhmNmviJWgbPoVJtysJETdo55PZh6zRd2ha4FbZMkLAchPsfpXZsedD",
  "key23": "491c8DTWsds3YuA8jVGUbfNpLrwpisXakxaJFYSCSVefVZMvCpak7ifY48sMMxjGR2YcZpFvrAKXXRMrbbSVqrYu",
  "key24": "5dd5qwyp9Rjpaa1APsJWcve6JALhSpwGEP2uhmD4t3Qh8dVb68RPcUBhX669vFfcd6dSrrypbDuNGFnaQcmAinbH",
  "key25": "4gsvWAhurBVzJvxPo31dqPfzXayfKLb8qBvTzdVCuPQSyn8aVH6Dpt1PkAnHpXrKZteJRKuemXd914BhGPTQZrwk",
  "key26": "9JFMuRtKUoeRYrg8gxedDMLW8tvHqLUo9Wtwow4tciB5zNbrLJE8yJjGCyzwYvidSpmZFmd7ivrUcjhUjPgzVAD",
  "key27": "2NeTjaZhcbu9WstURohgZc3HtHKqfRz2jJya7yFs9AYGMc2pK51CiyfZkYCsL3RP3B2njmVzKJL5DuLqZsEbTVrx",
  "key28": "NbCzWpshWsqezshW4QNRuMa3MWstGHzSpi5SZu8H359cPKzNyTiH7QV7N4VcUhDi1iHiHmZ2EB1LA3S6gXK9GPz",
  "key29": "3PbMRny9qVE4tA4mKWymp9X67LCEQfkLTrmVnt5UwARpGwtxDSLHpg4PvoY55LTQQ7ELcqHxqzRNRvyHXpRmBYim",
  "key30": "iXvxDuvGkk96aE2GJWwAeaMrU4RGSWUbkwv4PZrzzxCsCJEjw5aLADP1wnDfcRcAUvXJMAwvq5Xohr7jwUTHdb2",
  "key31": "qe4ogRPzkb84zxEqV1dHjvQL26jBr1xhBSPyzhUgnknx3pMH4waDUbdYL321Mpn9bTCrSKmhxx2iYzgM4DhpCH9",
  "key32": "5TGtxB18B6NKqGBjkBvBSYThK3MauZu7jX7Mt1oc9eLoe93BbAXqpsL45WaBu81YerQFEyTUQdDCjvf34Ri1bXQS",
  "key33": "5nXiJVc2ofL1X6oryozYUzogXhPeVFkZhpstu4eDkQchpdy9uFKm8yEvtpzu62kYWu9PzAYE13yrEMXkc2aj6UQ5",
  "key34": "41xHT4Newm9Ffkrt1iN8EMmygsvEAdB9JzzLLP6APyN31Py1nTonfJERhxwEqySBdt6S5B4fk3GqLt1GZ2MmJHgD",
  "key35": "4SnVJrB1Dj1eC2ZtesZ3BDMVMfmSa1hjgNKrdEcLGwsxjQRpTFednh9wSr63yW1JK62tt8wVx1fVfkM41n1Ub37e",
  "key36": "2huVHen952eFq5AKYHayfhwCKfHTVLzPGP7y4AmkF27s4y4958oqwhUcU1LUVAN9FzBZtZYd3JQEsyhQuzw2U3NS",
  "key37": "58U2DSb61Htp9QokNzkDoG7mzBWt1WNgzgU5zb7mu15uHWq5eqsamMLar4FAAMEr7a99tdQYKBneehZSx7afs5tU",
  "key38": "22pgKMThMZ6nkixRVmBo1ZqdT5ns9L96Ggjak5D2LXQhsPXCsSEysHQQwnhhj9LJ5LdfpFsx6bJp3hbo4gXi7H8H",
  "key39": "5mq68ETEf78zNHLnTEhA5mr3zbS9yHFFBnUXeyCh5Uf56ZMjSPRGpCeNyfrYuV8jX3RvtjX3jxC5GiQs6tMRsi8V",
  "key40": "4KeuiWQNEojKTzcXit7KEYXNiCbtiSmEr1bHEGdcZyerAyFowNkcBwjWB1CrwBRwnTGWnEZBpXciacwiY34AbkA6",
  "key41": "2MirEv8PV7qSD3V4qaRRwLPCMxFUmZn4FiGJfofPFFthZ4nim3A15xqicB1xH8HshRGfEv16yBpCd8u15bpRX47Y",
  "key42": "F9vzuFdku2AyBgoz6qfUCvzntraxqfgM5xgodQaSXGXRxSwvLBk6Ge9Yxez3i511yM337GQeQC118WooNZFAJn4",
  "key43": "3qhUkA7hVN3HbVS79GMxkwPJyvXEYPYw71pLhBvt45gpQAH1DqYGJJkav63B4mtr4at2CmFGvBFRRx4Pon9TLZqi"
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
