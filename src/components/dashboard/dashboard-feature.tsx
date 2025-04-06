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
    "LLaXoEDAu44ki5Pz4QrkZ3cJjZCWgHYCZ4d2BYuDt18kB2i5gQmk3A7GSsDUAwzUBX6kLnCbMNLzV5mNjD3nffb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Wt7zpmhhiKD8aqpELcYas9Grah83uF2M6G58jA8e3FnojrFHpcAVBpsSD2cpzHnvJAR2uU6qW1xnEy1kEZG8Uy",
  "key1": "3WpBpXskZAM4mqPg1qHBf4D5rKfKp7wEkKVFhmyN2L8BcndkGisnQUyPw8YVxWrC8UcVzYHbHgZHrZqKw6YSaS6D",
  "key2": "3TvGEymSqegd31FAypjrQ4Ew4WsGygTVJTQTES49yJ1nrLycLtCPpmBZz5wC8QU8jAQMjt4uoMjteR1Rd1MqnAFX",
  "key3": "5M4qJrXsFJHtXFP2ndiPWqCK3n35D35J5G6GfnbWs2jH3q6mEw2X8FmjBa6ERvzS2Ya9NkKe1W34iGRNRTw3vXri",
  "key4": "3hV6ZEBHnYKTEsKhJZpjpcCeWFHRTdYkS1DdXUAa2Jxh7eV3Svn2FQF1Rp7RAHxrvTDZqghfMYHRmmD7WarPez9L",
  "key5": "5Ak8qQvp8g2PdXPMivEGyeQ9bBLiGooqZ2bBuF4N9aB8j57NzgfwTNbZqfvCPDh2VH82sShTvKiEvmVS18YQZT2Z",
  "key6": "4Xu9fBaiyBAWA1CZb4MGjvy5zw5C72oi8gFHfqVf8Pre5gFXdPTi6yYBTiANrhCpZZEuLnMupJfedaiJ5RuKmehJ",
  "key7": "3AfcNbD2v16Vc7idQk2pis1D7b88WyWRjqPnBvacbTML9Ki29j5C4243X3vo5xHwPYvVmRsMFVg1U1fkjxoxKtMG",
  "key8": "2jDdQxzyyNDtDVesMm6fuuwfBebyBp5dTenEosrna7DVJNSm3FXqNW4rGYioTG8neXgCBurpajuUDpUha67fq4rr",
  "key9": "3t5xBES8QUQffAqMMaMXyAjTbbeAz4GWiGb8aAHPJzHnubGjDCGX5bSBmqhSvF7bddfy2MFhu69NHHujdmCqEGBS",
  "key10": "4vskqWqZq25zVnPZxWhJtopo2HGpUDSXeWCxyx3J3MawoLzuu9S3xXuGYBuY69MeM2YcbsZQfbS87PswC4Y95Ns6",
  "key11": "54C6Mtttfky59qWpF9aD8pBHC5jiHvi7k1CLe82H9SPwdEy9p2MsY96pcjbnL6DaRAngh22hb8Dt2HEVyhFdPSqQ",
  "key12": "5uoyzz18X4wbdFh77FUoTtYgfmMwJNyaufDmaTXyga3GRnGgU81WXn35AAGt8pNAYQCkNM3Ti1i9G5aBpG8jhU8w",
  "key13": "5f8DKxdMoPnxUQXjuBknHUt2r2E26bpWRjmMcvi6nW8FdrkVqJ5DfPZgDn8fx4KTH9VzaFASPyF4UPQojp3k2cZG",
  "key14": "5NhNjtQAbg5uVzxiXFsyveBTWHaJpAs4PM6mFeuLziTyyY2Apiah64jRXmUyXcCf9WrP4cCbDMYeyuW541D9NZ4S",
  "key15": "31i3v8ctDwZtEjNvpnQGK4DHW2kUr7WwkkqcFWF9MvptfiwJkQddMrAhZHSYiqjKRv8zRMn3FSUe3DWCYzSJyATx",
  "key16": "2xwP27EmHrpnZC9DoktrvAFw7C5A9bzUhXdRQ3E9mhbT8JCLF9mCvTVgLuoa6rMMNzPRds4boCh9ZYueNPcXx6Ku",
  "key17": "26h88EhN8c6PTbHJKG2c6cYyvMBnwFs8RRYTxc5Pusm358EBtZFj8AeRJXdbZTfYCsT26byLBrK4gSD9Xa85y7bL",
  "key18": "4QQwjTXb6f5AboR5pnhBmzP7CwbxaHsDSZ1unAc2puFrxnP73ByCqV5jLt5A4s6pqyodzwtXs3GpGgUmJg1fKCfA",
  "key19": "5RSrfzAy3vB9tHs4hBtdosWwGCi1RteNFHWKrGrnun7w7jCXwfRACfX9p2S4v8svzaziXX8zx8C8DRTcH7D3iKcS",
  "key20": "4geahD5yTeF13QD26ki2ALmCR9gZEpURLMaKxwoLNoDXhTn8T8pckoVixtrsx1cajX9q3uQRTnvUXRDf8Lota33V",
  "key21": "2eVpMHLtX5PX4XiCzC1sTqFZWUtFnbFfgXHnuDPUksbaHtA2RND6h3WZ1ngt3UtmAgWrCFBaYhkyn5xfxUhavq16",
  "key22": "RMFZFt7G9AdGxXngFMw1jJra9PoNxPz7Czdg5dLgL7FbX5383KMjPQ5w3YfaCSdjWFwyQnuTGTw9wUUupfX8y5o",
  "key23": "3a19dvxvqE1oUPvV3G5ckfHniAHXd3MW1Hdcchrj4kMRDWm1SrrRQG57BLgqdcEZwQjfTazG6gkdicDe12PnKsej",
  "key24": "24rFXqykSv5gYjG4cfWRLLjMGJsSZV9qjFGD6XtD9LVmmeUZJP5s76HWifGJUx7MBWYFDhvNz9KzxYiEvvv49tnb",
  "key25": "4sPC1ieBh3D5fW538ZhDaTeCEChjT5vcsEjGMZiAGEXKf3DwXh1ZmZzjmnzprk2RRLGzrnPewEPJFopUGTruLJUG",
  "key26": "noqPkJyC6AvZzD5nDwWjp2t8zv3E6cF82RkjdTSRzQXo86GsnMH9UfT7W5HgbSoWtC2NMop2xd3vnpwPkpGfbyi",
  "key27": "4kziu7hhUzs9jTkJUMVebTtEeyDb9egkuuD36BE2JeN9eJp4PCvbTsez3soZvXgsCEeUQEiQG2EZiWLygYSr38nG",
  "key28": "2Stgd6Y9AyPXGJcYCGHmFEU4KqenhuSqAkipWWg3HpqfpjUGnxzJ7H2nsmQ7dGmeehC5bjHJmiQLVQ4aAQq6nYjg",
  "key29": "4ECy2WxQ6f5daD8w4i9coQiEUHr3j6zRjgydu13m2bgbL785uM3AJwmQ4RaWX5PzN1pnfS2cowAPHwBP5Mdj7H3V",
  "key30": "2pQovoAvYr1h3eTW1jhBq3o7D7WYT9XQZY5bKun7shcRgEbmUwF7z8MiALTiXEDyofyV9nCwzAgT2XKPwhqBoawH",
  "key31": "3V9FLw732rUvXfCw6YYXoj6Ja417HKi9gEWEVEWmyGz3e25eFNGLuqUsaF3FdD6gm7wnRMkosXPrEtyU8jSFBSPK",
  "key32": "22Tyg16AYnATsQQ2x2jcVoTSGcgdmupdz4TfxKe4bzy9HyKTydvVaAga78dophhCkJySNKDxAikxhe5EASRHacFq",
  "key33": "4YKkvp92i8XXmeNqH2mtjHd9PXc5VZ1BuLWu4zvtsdJ67uNu1fPYcMQL1KRTnCb2YoKq4yPCZwQC2xYuzh3KM1rH",
  "key34": "3ox19jXvig1KKCi57452d1LCWk5QLn57BUvsCUpmaRt22pXJsVG4VVrXW4rWBQZ47FxShZTwejArJzo8Ri51tdtt",
  "key35": "5QgvqUJZFn7xmgz1uZVqokmRAZJWTZk9aVgMhmXzcuB1NbvUdt5Ri7nKrVCFno5w3K4YSUzswK6LPkmouPs11uZ4",
  "key36": "4BdhiJndf5suiNvSh1KFhHx8UMmBT6YZ89xEJNqsHhrfNJayaA9vaeX9yjK3B8VsKJQNqnnJV9ZYinv5vUBfsSMj",
  "key37": "4PVL16dvkfzQPnp36iCYRkDkEExrimW77dzti3faqRJD1AZCMZgLvqQnX9KgCpujgLQG4uNSQy7NYgh5ZmwKFUEu",
  "key38": "5iddrA1o51Ptc1hxdXo2Y4nJtSf6zs2vxCMhpTn9apQQTTtUaXc28ivgK6cZCbvzQTxV1dQfaCQJBUSJc1x9CvcW",
  "key39": "3joJSPTNNRBsvgURHffSTrk3bjW1jqPAcvfxPX2tWSzB4vd6YyAuGry2g8ADM2WTXuG4t3EWmoidSJiLsxXkkWrm",
  "key40": "tetBwfijqj2tnYeHE5o2tg5iDsVMYrUSbqenurEcenypcb7kq72cxwnLxaSQWFoqrmNmwWXayVAFLhwcM68bN4t",
  "key41": "5rEfFXryqh7N5s6SGGHKv6rLtYtDiiCpVwct91JytRYmyPFewL6txKBZnknVSvCyqao5qi87L7uADP32JvuSxW5U",
  "key42": "1ANmUXvzs68EUoPWwLWGMLvNDf8N8U9g4SLDNpicHvdvGTEarUNoHHmGZzsanBor2mVjUFMW5ggCTbhpadVmFBC",
  "key43": "4DnLKnhkH5pXN3tdnN3Lntf31oGf1n15KoBXrXy5b1kFH3h7S9zDjPXWMQ9T8TKCmQf8UJ8mrBWEocPQruqv8iQe",
  "key44": "4mU8VL7uPDtxBg5vpqVdaTpBD1VovKqbuoezjzrkLxNSpFyMUGH3Uz5g5JpAL7WueXm7En44Sp27J9jr1FRUXkbM",
  "key45": "4HGyyefy75aVunGy8Yv2REkAmPetbY1FiEagUwDk5ePh6UPxCgsP9AQcKuk6gLayqw5Fyft84GJnfofvxHpSvp3J",
  "key46": "3R9LUnTWXcYwcNn9EHEeW42moERsj4hGWGkn2SpQD9VRCX357sDsSApV3rTgNFLqFjQei6ig6vJnhvVgq2om1vhX",
  "key47": "2b8pc1Hn4EdzfApPoYAuYrjrX1U2G3dDtQLWQAevxLWs1ZRS6CFpE8G4mBGtDjoy2C5SFgJXbDz35B4S7zR2W4Uf"
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
