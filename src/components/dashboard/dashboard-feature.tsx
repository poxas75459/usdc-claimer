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
    "5pyJ9EpeQzbcEFBVu1o72XSeohv3zRsqzv1zoCfLo6dwmgC9TtEfH8P9FjLXk2R5cUDDvKsQzGBtKbEAzGA4jJPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4heTrL8s2s8SHh62UUJi5BNFtaoP2GLSDW5uLBWZxuUscyS91Vb5EzDnxaNMPPcafQyNJ9HfTG2etsosvH1kCa1q",
  "key1": "24rTSPZtjmxUuiseVzQbMgM6roqTeGenFB5TbBGmeLKSkN94ybygrUcACXm8tuXPEf3bRcXVhh5jbQaaPTMHBFHE",
  "key2": "5K5tAxU93JkCXqwVBdqQyrxGzGUoG8KWoXsZRVB6SpjMTFQtPdmQvWzLXhvpKJrpMSbvpGLvPQWa3VDjqZMuz1Mv",
  "key3": "2WCKR6RbegzmhVzuNubks8DgcWh1rqj6QfLix1VQ2gwmMGcWFmUbejqZQwTLG91V6DTM1z8w2HaVj7MYLB7J6QqT",
  "key4": "5JWbBj4hSE1Wae3m4s5M1T5XNv8B9TLAqgZCqVWkqCZUJopw3iNxQ7rJSkZe2hoXFK1TGeGpBNLjSbqXuZo1bnEF",
  "key5": "uEMkDc5aihqVoDDrdCFN94PyDn13KAKY8i2NpBQ6kqTfYQhFVbno1qT7pTkYVFWLeDz4cVxuqWeZTuajcRpU9UB",
  "key6": "3DBbLf6jaYdc6qEoNfWcLFnTKhGTfPe5ARFFhzQfDjBzxNS7HFUupA9F51QSSrKqMHUXaYKuEZ6y6ox1e6iBeq8B",
  "key7": "38sVyQ2SsNrVGU6fTZ6JZHn3PbRPFqu3eozSFTdBybPyTuLvYjZGcwyxXujERfx81QHJx9fRwsZZSXFHzHTFK72X",
  "key8": "2bRFDAjBvXCm317wWY2rFmUe9uJUPcGaEyaLkCeC42pKfKE4qN5q3npdZwMgnTk3CPsJiM2LfxNQbDYdq4psgwz9",
  "key9": "5ANfCtdLPS3pYXiQtnWKKWobegcbugE5Wu38dMnXsHwfySUfjU77rkQpfwKXnLQNFVgrrteMpE8DobShBEcewcRm",
  "key10": "5goJYLvCkvqzDjTNjZbH35kmJgTQNWRiH7bDqRsaaZcsqa8DiMxqwTnL7ZVGoc8AQGKD4Q2CciaX4rBSZ89rCPCR",
  "key11": "5zfJTin8Nq882dsEZZs3LTNhRhxM5fKSYAJmbMLDVE1jeruWay6EMyRzho9bcGVvPWHk8b17bQ3nMzNDhn7sudaK",
  "key12": "44W5KJGKjV81bWerHEP3HmLZack3PbeSLRbRiwdRRGatFChQHDJ3asKYko7niSDCtvfZQq1K6cQLzhAezp11e8zR",
  "key13": "2HAQmPRgewumLvrRbZBzLRSfRTRzymx8WwYa3jXtfvY6HuvXFk6r72A8fN78Tw8XBf1MNzxEzBG8jbhCrCvuiSZx",
  "key14": "tyPSBDHWPTEaLsvffXBEbu6cUYDzenWwtHPkrJKMSvoJwRf55MxDuoBNy3hdDFSqwZirX9zc5YfApR8xEPJNfXc",
  "key15": "zYz3fBj1UcoxWydsurVkwZQidtaQaXzqtYs3ssUgAuCQwU4v1CEuEQgNJDzGAngsg7MQtyiAZwihUKVLbtnex5p",
  "key16": "53vtw4MFhrMYnqRUnWnEvbYPTL8yDaVptK6JnTaj4ySrMMwkXEW5amYWNURaTEtNNf5Yxihz4wriiPZ184MYo5WF",
  "key17": "5a5G5r2kxPYKuqmdrmJcXKs8yRFEachoUqB4D5UpaP4ovkaxwTfzSienG6x2DvJ5wTUkSQcNNLgDcuEfF2tnB4fr",
  "key18": "fHoZL2ZsUoJwMm6NXrqJhGAyvQZYFu93FrGAzHVXZZSnYpWWZQBVxPrTNKLGA9ardrQgD6CB8wX1RXwLRSpfqnC",
  "key19": "mgbQziurcbh3wWdWdyR1tJGVNqLvys8SP2rbyavyD9Vncb7fcGPWb91pWpzVrjfF19LeyYZfE7beFpbvJQpLoW7",
  "key20": "2jy6VfkqvjSUH7Z4cK1efKzhCaByA9bp12crvkDcKh67Aq2RjMRnkfrQ44KDkWDWZEknAmTfHvdrZGSE7egNVuk8",
  "key21": "4JVEnQq6AkX5aJ3UK8cs7koa1AD3sYYDzpuTUektypmcovp4y3jEtuVEux2D2g9tG2KFSba59YudVSNk9xdKoLSw",
  "key22": "2jkS4jsNSTUuf1N8v7D7fWHFscYvDToZkZnPakCxJzb2or5Sy2gnMUK11yQo7MS4jNDcuzTzu8cGMfos38Nwk6yF",
  "key23": "56UmyhoPzyJ2t9A5TE6rjkdawy2GppoEgrenAQ9QQ8tcpmFEv7UXN3CpqSmYiyJNmDSxZTmmSuuBUQfZkb1G4DZ2",
  "key24": "iNTVkCwXqKFHsyuDwXvbWYuBrj464mpzZsWXm3Sq2iA4p6QFSsrQX3ZB96jWLjDRT2rsTMY4HRU9cyfhAmxzVd1",
  "key25": "g2uowRkSTp4zQniKQ9NCpj7ezomiQr88xifdCoAtnms7b2yrRmkPQSruzkd7zct2W5yfS7t2X2pxyvnvL5e1WDZ",
  "key26": "aFQetHkcwRXvyYFy1YDUN8u1tNz6jdxTX7Cb34u7jH4W9mLEN6MoEQaoipnoUSf5z9yRrBA36DxedP1FPHr6T3n",
  "key27": "Xea1aLg2yKqyCxSx52qS8Vv45LvpppB8NLGpCPNUsMGCBeLbvDNxLhCboDjFWXE4ZrQ3qk6zpLgsqBtiSRPLUeG",
  "key28": "2doMoXmVaZcmBeghQ1bujWQxgUNE8ZbdtBQFSUCDad3kAzWmj6gw4o5u9MSRkKHX2wko9yH3Dv6Er6HtJRLRqNgw",
  "key29": "swyR7tzSrxSkhmpHT8SBofTDPVReTxxME9EBs1tE6VX1iqYp6U49h2xQQrGVt72ewLCTGv7uzsAPbDd4CjbrR6m",
  "key30": "277gXQD6gfZHyXuvYgHJwaArLvb9fMSwx3sE3wZpvsVmTLgrzJeYphFQgyKCgJ2o9WVR6uxFxSuMKyAV54aQs8mB",
  "key31": "4m9KHSXdyCnMp6grpVsuvuNyhP7nkJ3UMuEz96aELuc8fYHJNYsao1PpGcXmrcmaGbdAApjidZJibBNyiGpPrzGZ",
  "key32": "67bgicpeU8tBTuY5rML8VtuBMbhPbWnFddCeG13ghRakfzQrTfcNbSAieKGfaNjAoE7Tc86oAr1oyC4JdD6rXTxd",
  "key33": "2mFgu73p2TCVuLQnuGZLWe9eCszGCVDEwWgfNhitgdAP28DGvGxLE9cukTmUYzjSpHhwHWcmYyTqz5QF6TpWmcjR",
  "key34": "5jFk5tCByzzjLqHr9KKWyqWqNnG3pmhCFaLdNeRi4Rica5LEWVVJH9iTPDs7XFhCoG1dFd87btxmjWkkswAShbiC",
  "key35": "arEHwGFuJQDN6a2VKUgFyVDkz1YLHUU6mB3v5BFf1vQsSwW6nCqzUUZFUcPWtir2p1SW8btDDFFpEwsFvzdr6C7",
  "key36": "4i94bZ9frMhoBBjrjuCufP5innc4YU1EvCp8YUBgtogZ2erQz1fFUCU3o4hKWjHudbcZjs6VbU8PwGwNeRbPQByg"
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
