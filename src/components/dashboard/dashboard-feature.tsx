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
    "2FZFqDfpZ3fN9pWL3Q3EyvBnHU4ekKtEAfrSPVSq91RC7mFKQo74nVKdgGm55KXQKMDN7a7MGtWsw47NcCDgWtth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JNWmZB672AbHeKRUjtapSUVzGtU6bKgmfPuzr6UMjiATUNjCAZDxJJY8uVJ3GdGhDAxg8DvzYrza8WhvHdrsjPR",
  "key1": "4v2sV8JHauvVcEM3aurpYudAYZyN8NfqZQtrA4vLmGpYKGuLERKW1vmYNxcw7zFopnyMTT4F6Qb8cDFFofVhxnHV",
  "key2": "2K1thxxXZUpWu9AY9J8TACUbEyAU1KAiaAm89itdtvwXyW3bwieNyQFmUXfQBgq1hgWRS6JsqH4Y4A8XnQnt1U61",
  "key3": "yxhuukJ8RnH8k1iWUUj6qxpcnx5hHFgAeKmwNfDkkE6X2r3Nz1xZXNehL2gjy6UUAief9vzHBbe8VMwhzELXEZ7",
  "key4": "39SQRSCVAvzfqqom8EmXDKXNyzRENwoamEwb2GmsHpNSL1Y93HjioUgFYVNEXYaVSxSca28kHfTE5pQV6av3JZ8k",
  "key5": "4hTzy6hvGFYePjTzTsemfEyKF3hZkyssmoDryew6WxcPxbfsLhMk4UC6uNghSZTN5BCVLvSt8YBxkjxsonpQTWXb",
  "key6": "2HvGtTZREgv3NUBgNm9g44ZM8sUDWZ2d81guU7TinFj64tMnpL59MXX8Qne3ZH9ScwXnFtgBsZVzpKnyUpHUjvNc",
  "key7": "oEoJ3NeEYjrgkFvZY5fA5gg7aoyJc9Vu6Suz5KBknHu7gxfE8k1a5AewQXcoLeuiY5yeZbQ6shPSxgtv5kKKufj",
  "key8": "5CxVXmecGKPeFYX3ZXAKTDAX9Xf9aRSQKfNiyuATKTGoAQgcAyBevWxzSic5ZrCRKrq5BgNMZPJHBxEKAAKyX3Cm",
  "key9": "5VdXQgj8B5h6dBd8VFuQeCouqrZ8GEx7raiDhC46wnhmgPCertQsFCHtNsnwRd1fA7RHdbyMCwGJ6PiPaAZJAdWg",
  "key10": "4fP28cssKBnoYXnAUpAZQxC8EDWvj4X32w6xp8PJX44EU6YTQU32ZbbydwCLKUvhXHgsfxSRVawU5xrizp5HuYpk",
  "key11": "2Q2Ux5tAZisfc2DDapF5WhQXYifDB8y1BqTduGz2gXYaGFiCeKaM79Li3bKzk3Y7G6g8ZCw4r45TBCMeStJGVmYm",
  "key12": "5zNMeuf526pnuaFpxgrgw8ha5RQg1G3tDcp7Zxj79vGGzm2joYUaCCfiAuigzVXjJUuYYoEE7LRofwQkPpnmXxCX",
  "key13": "FoXyEsBGbUPm9TCgwFQnEmqf1VxWbjb3x4EnM6L3muNWsEgwYZh9HPmpKjBRDSJaLz5TC26Lau6c7UMajwXYhyW",
  "key14": "2rT1Kt1DCuzB5sK9Tx2LTfUGFLCnSn4fXeZ9k4eUC8jktYRqcoG6Rpd9pbcaLMUME3ebuUU2fzAe71HCidYjaPg",
  "key15": "3rJCuTXbLPjBeTLVdxe9mkoTAZcdM2RmbLUFBgtBBnLPpsV7e7ii5JKPmxwLoqGpHYqu1ZZ7m11vXRE1X5fVbMad",
  "key16": "hHQ2hSnmawuf3d9jtDp3m9ktfdUuibDVa4aXeLp2aqwmrR76KhBzCmJV9iUJ8Rf3g9RFkEkg6dwxfa5YvN28b2N",
  "key17": "49yXoUHAApwptX93GfqNovjbhDEtxUb5J3PVpD4CewUU5JP1bsp4QTPYwjEwyCqJFFnuhZVimYKKhog1PUDncGqZ",
  "key18": "bH5ggPAKRjZdM26Ld4XjVPveChTsnP6wUpnHKKom7iJMeptoRSg2Xar61EMZURWiWsWy7NaTUXDKhmzv3HxkECk",
  "key19": "5i4oJ5wm9wdW4JTFPCh5LejnsHNXjGLNffpqFCRdWMV4on7V4ZqoM6ePUF4YQwtmCFFGzCByCFzzvHJ37gNdQfm2",
  "key20": "2xGRqnBU3rBc6hGnF9MmVdZC4aBATM12TPhD2YsoSVbXdQ2BVw8rA5i7ZXctkQc4MzhbYZasNemBEfRxEsWJjBDW",
  "key21": "2bL6pJHWk2RPnqatWpPS9LQpWCBTimwp6SFq2kBxULHvyNqJht2VfnA2HMaYcAkjQqEQXRKhFfaLWyzmEJGF4YxD",
  "key22": "2a64nc4xSoUo28HinWEsAorTanTd6WGp21wMwPDsQQwRhDBoxQVru4YhDB2wNiDRQfRqAVNQGxyWcK7qtccqMPNw",
  "key23": "3LXdSBHZNjTLmtgfP8t3u3NJ5ZZBwigGD2M5cehht8Yrmyv6UAYSyCtcYuPeVTJD8P3moaJ5gGqhJ7Nr8AWzx6Pn",
  "key24": "2MQqTMwjDmE7JE2KzF5rbPVehFPbwiBXkffqgXkbAYCdTuJU66ZwBxbPRic45NSsY5jaJ53xJ7z7T1BiiuRxRdke",
  "key25": "4bgjxiaM4xdVkRVC7FLbFM1GajZ2RrLxQU9kBCVNe3BFZ9B5vKjWhR1YLhm1FtMEyZtss9WrcEocvVsSk9Bu2WUX",
  "key26": "5XHE68MVywu9rYoT4FskKDHfkLZrPJTC8owWpQ1XHy9Kb2ivEqb6JFxceSpX7EtcC9tAePwjTRdXSewu8xxf9jSW",
  "key27": "Q7viX5AR96qywo4wfpydFzUYti6zRfqBFGQJ3Vc74XqVH9NNTz9pbAEAw1f5wQo51G624HAMPFqaS94evyrc2Q2",
  "key28": "XTWZqzJjCtQUWBKbf1yaZ5ECwsXbPkgntpYJmg7dP92EdjGWojiCBAwSZmPUWdFv1d2h3FuzQkbkYJGferMQFUo",
  "key29": "22URsZScsxCLeZQNECVo8Kz3j1GKsje6JKb39CEHVNTbRGq2vxGd11az3LTGhk7WY176eNTuDKefpmDHr4weKYTq",
  "key30": "2tYAE3wMrg5jhSBVQEqot5iJVbmLM5kmBtoHmcsAYV7SL9v2B6pN8CKe21uKqwMb6gygWnM9kRsLqu6SDXLGpDkj",
  "key31": "5vCqK9HpJsdxNyHZhV7KfDSzetLFWQ8poXJaso6sFqXVUpUbnaGTMdiTdcEC7HzvMavsCW2eKcbrkvzb9rDMF5ku",
  "key32": "5AjStgwgP9N1NqHDn3fbTCiBz5CXLTA2NCnJHoSwDyqqZbT22KsnQdiwUPUQq74Gn5cw6aXEjEZHBch7yMnQXxdU",
  "key33": "5K3fpd8CrbnGtMj6E1511yDJKgdy1x4w5v6DFpaYAPnimtcMRFnneAcFt4tJsSANo5vh4aT5f7jYnzV6LR5tR769",
  "key34": "5u34m16Yq5Uq5PBHcU78qCRXSo6AAc2osM8hj8nbfdJARmvG169q8JsiDrhDxmx1avatWAjo8oeEDEKc2NWYSrA5",
  "key35": "3xnAsu8xKwfrhmZASns1Eo79rGhtCXk9rcSdvVrgRqknXZwt5BWC4NEoQ4f6RQb8WP22sJMqqyQmtm6pBuzEkjhC"
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
