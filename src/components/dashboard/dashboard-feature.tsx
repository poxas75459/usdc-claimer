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
    "3zfSfsQnRfpZwoZie1ihLx1E82LZuPJnqjmHLzuQSPYdwn6gdeinvLSJHugukufExNvSwLYu8VW4nSbA2YJNjA8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sXCUdAmS722W5UWgpBJESxA6eLDjkKMFSTGk88mvukcsxNgd9iZJfB6Mf4tgnvMWMoBjgT1mP9v5AQvyGn4bvQn",
  "key1": "BrQuqnZLngHSmg5cYhrCLYTjP5HjRcVZf3mrZrT5GPrXshbgVWAejft3pKqwrcdSnbm2pm7awtQVGR5c2vTJjWc",
  "key2": "4Eib54J1NyBNgbKTSPdrSdVMGCXgeASXwWbPmXkJNann8PMSz5CUQyGndwjbiUmS7MRnXoG3niLYTvhc1YzNjam1",
  "key3": "3q6ZKCpE5jgzUdToQmrB4gcpaVFVWfwXVY2QgFSsEMh1EW8dAptMk88QgoNhe9hc5V2kxzDhMXtBVMRb5LuKv2QT",
  "key4": "2fxaRs45U5F9QpYMGqpY5BQGM7darNp6Hq6kPt8Ny3X1aeJWMFNJFop8Djn3KUkHJkNmVWa3BdTaZcxtY8wiNtu6",
  "key5": "32Rkup7mwJgKe7f8EJ6kpG1SD9dY2W7ChSbDSA5MPDzrY25QH9W7YFm8RLwxTe5X1tjGjmHejbohDXtBbDDAMiQw",
  "key6": "4gJFKi8r6MEqytk7FkzHintT7XETHSh4zctVe2geZYBUcyyxXQRmGdFyyqiT14cLJEvJ18M5ZRxdRJfKVPwdjwe9",
  "key7": "5wWt7EnXAuCdiU9N2xSJzuYi9Frw5qNAemej5TrMwju58Hpn47Na6k8tAtRUUryqKaj2CySL7rsj1khUpkptt3mY",
  "key8": "2M2FGBZBu3NmkmT4QPiu74ibafTEwSXm3fySuJTPfiApzN4SGJkYKjGBEnQpJ4BsXHNMbKAK7MwqrDBC5KadKrv5",
  "key9": "471r1JsYvX5cGNGQfYsPa1UNuZx4cmRdWUbkCU137S8q5RpwW4BBd6pKQiYyPX4PEWPimDLcWJkwCST3c8bgDer7",
  "key10": "658j28NRcc3f6RtR23FqUyVwnJLadR9BxkssXpHc3CCcK6SoacPShqkqWnwGKu3Ve74gx2SKma3TpE77KsiqyN9Q",
  "key11": "27xrk7Vf2aUmzauDeSy6XVFUbpxCJFCSD49qinsFGsPboTvmAXws2yVSVUaAuj78PcCurauYHHnXE4ccAAtkK2ZH",
  "key12": "49uGpBrCoFVUmZ27CQWULnHxY2onVtNHufPxREeSNRbCFmkLadiueJ1y2oVaJQuJ9kLvN4t6cCNh8xPUrUyCWReT",
  "key13": "tmKC1frNpqcTGAicKVE4T1pmBJFqpKyzu7fdurr3ixMVC728jJYVZ7gqBAk6Ye2CaipGirVYrNEVmMxGuGa5F3G",
  "key14": "SYgfU9bEt5acSXjAwg79K9TGWsqLjM5WnXGzRPQChUejrsuP12PRr3yAk9ynDviUGVbC7uccPWsBZ74B1MfLvGN",
  "key15": "2RPZo4jgn92T8L1mPQ35EJUo3g9F4MNukboAdyKQrSeifwpSif8qLC7TN68b4f31MtwKyKiW37sxsMWM8uicVYWr",
  "key16": "2Vt27G4p2FxWtpLp9P1564ncX1SyNESSHTwcYZ4RN43xMLygLYRQqsZYLBAh28VP7p1q25yeiJe2j6ZX69ThkTph",
  "key17": "3PwSg9QAhrQqHU4g1dXnSipgpoZ5EZ4WMM5TKK9dwBLGbagHCUWaQBgqxJxdg4dhztL5zR92rtYZuWpwKTdQJ7vi",
  "key18": "665RepNWs6yrvkq2K5Q9W8V3YqteLV2B3JemkhbNQQksWaMdH1QZUDi44pKM914dGYcgWgAiGEXiBhKVpFLFcTVT",
  "key19": "2Xm2cEpnVCb4hnGYigqtpG2ASyAqzxdM6VZe6bPCqpTGtN4ZPf2ZSXDmUHbJ398skX94iQJ7AQRERKuDW8z9bHVH",
  "key20": "3Nkem8b45Yap4jfuYtL8Xp7jcfNVmdnmtJryPayM4qTwXx8Je5yg8Yz9M5moYRN8WpXZeGyTfnkf8P5CkmBFeiaK",
  "key21": "5ctsMdd7qi6twtrh5fbFRqhrpSfGCbDkNUNDFN73SEdiA3ywidrxjhS4L12yzQu2b8GrsQGueNzrsthCcCev7xbA",
  "key22": "yoBFTjGaUny51GnFW9Y1WDBQc8oH8opL2Yeo4pR5KPFVC1m8EX1GoAETEm5pGXmmTxSBM6aou2vcqc4eE2bAp6p",
  "key23": "4UXHX1fPq4qZuB5gq23ddE5jENTz8RiUWQ3MhjEJ7RnfFLgCr7M8szeH9SMc2QauSiGvwmmHQdLXpLLHu335HWoh",
  "key24": "2jZMeixmTgWsFyuX5FBs7wCdynNy8WDFienDftbZzdxuPnhGboMyuGbsmyihvA1v4hikNpRwJ8zzWvWNdRgdPs7G",
  "key25": "2RKTAiR2d1cwB8K15HbdyiwDDxNBhmapMsX5vzDSCh7b9EXRHaUHS4gZNVnRRHzuDkv2suDN5wtVUpXDVsV8JrqX",
  "key26": "sph3wxVXChWHMAAxb1mZ63hcMZH2wfUFnZcesXyASMh3VnSQQqeQ6Vu4T9Dc3aBwHWtuAuZder8Lsa321VNmUsg",
  "key27": "2asaujsMphoxqHqwpnRydy6tD3i1jfn9qPEbohYZ9FwcyX2p8CsFS22mmPbWR3gkb59Cxncv4uHHrPRRbkFggrXC",
  "key28": "u1sYjxmQrfr3rcBtwHm5mqoMUd1qQ89Zek5k16hZTu2Q58F6G3QLyxf8bx136rsk6YYhqq2hHQNmBMY3FapCxs1",
  "key29": "3AD9aHjiwck86ceTsgX9hhBDHg5aejcmME9HfNHvGLsn6NSRSG5VLXyPi1XXpqh48vun5Awy1ZPNRJL65sen1er4",
  "key30": "37YNCB1njgBThuyzJzeBuoDzU6MCDUzw45jckujVaFiJQpkJKF4jn3Cbi9zP2FCtKCaqFcxQaShcyPb2YNvwtZQH",
  "key31": "WWJyNFnvPh8rFdDEgiwYxvbp4UzTZTo69DqUsMXXRdTPwoKmahauhaCN5A3uNzSyF7K8D1gSSLZHp5vXGKFfrg6",
  "key32": "2A3NsjHhH8PwcTyD2zcbWAAWxrCurRjs199cbDZX74bxSK8KMy9XAMF8nYf4Runzdw1TNuARzFjyWwDRt7C9mWN1",
  "key33": "4GeeMDthG8SRFEWSCQphufB4VSmoE6uXMkjCZZ198ASiUfFQQm28NrUA33TLYstybK2pfPNYDugCTHMzkHRr7Zmk",
  "key34": "3PGt3UsUSNHaehhPRHtUUoKkoVciVgvNDtSHCwPTYDfyp7LbfugfESmMaCevuTDeQCZMGrq498vfD68NgrgAQjPc"
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
