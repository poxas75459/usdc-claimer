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
    "594FUPxKxWbLdJG4uiJuMss1zpif7CregdSW1rfQGwnJGjstwEnB8Hbir7UPDjUKCuJtmr7CqdobWJSo99bPjPdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36uw2XnzwxZ3u8CgS8stV7jFzT5Nh3U9YKMiQVpmqSFj2U2tt1fpynbTo72xCjvSqbMmRrYeMDJ8BbzYrzvpxuqK",
  "key1": "469ypn3m2rL6sKrgQ8zdf7C6PrScxsymT6VimDZxHGsevNcBB5soBJ7gEmEaC138CrEDnu7TFMJUz73SzJ6HaA3q",
  "key2": "7B26PGzCYPuUYyefjU5dSWkkg7DiSiWzXKbmxdYPsrtNBmLxmjnSyD43s5qeewju2fwgEyadm7ohV6ttnv8yDCL",
  "key3": "5XJNLFk2jb64acKeRFLJUFbEuAe76WvXa9qbYRZ4yKeFXu9T1NgQH5ppJcjxMDZsw6SC11ZH8NUDBfj2nXDAgqf8",
  "key4": "2nQEpjB4UnFsdfUJJ35T51c8uU2f71gErZ4U6Ne8FY95UwUezHBSmu7kfzrovkdQrYuugr1f2XFTTR4Uk1xjqGDK",
  "key5": "41NKmNhmuAt2pHpbXAMZi7mYHqKhnLuZwFDEjQhk3vPZUNKgLLMiefbZLqaDL6PMNavYz2J8aBpm3cVESTA1t93b",
  "key6": "5NB4k4s9jUEK2qGBe5ENAEvVdkpJoTiEzfJiaLA8hetXyeDH6VaCbg1xuCLvXH14msPms4XDpvV3mUHmsy2Y2Nd5",
  "key7": "R1Bxdn548vYVENGxm3tJXxLqme6KvjygCtKLcYo4HLpnuyuybAVqyYhFLQzHBfEoN7YHeKfNqM6qEw5Dgoybyaw",
  "key8": "2j9XwbSx6j4eyJWKPm4Hh2TdTyaxAABRA3rwV35F7GrDWbGzgmkANq1BL5XLkyoFswHSJGrCNnBNZ5TEZKKxqt8z",
  "key9": "4xVRNVFbYnT4ahRVB2qFq9YUSkRCJxE8gxuTPxAUhYbeJhUskAVoD4X4P43hhaZr1jAfCA7xr2nuRJdsKsMBR7GV",
  "key10": "4zcEbzQKcBG6h69wRTfN48Y2hXjCV6HqEXz1wUPpkQ1fcN8oGDzxuAvnRa5chiWuBLg4haSFDgfhx1suVpF9DE5",
  "key11": "2fzZ8Ha7NyUer1hX5KdGo4tGUbuDWrebkJ2qeuxvrAHotBk9Z34UvRbtZUc7TvSmnm3KMLYDSRXk3MTgoAKPQ4ge",
  "key12": "128ii3RZd5MwS2dg73NXjijAZvQEn6pLRgZEt5wXj3aGM5R42QWYaBt7Fb9n8Jey1yLf4wib6phNnPM5VjtBfj6U",
  "key13": "4abSJxPfrGHGrK5kA5YcXDUYesp2nWy2DprJsUuuTjWGtToE6K1Hb1i67Vf93oUQZNR9ybJnfDiZmebBiayeRHrD",
  "key14": "2C3jYQKZdNNyyddF6oTPp5tLzFto4gqBXicNxoX2KwDbvfD6vsmeivjA6ecmqPNi87CcYsL6EKjHERfVhPuwtmtQ",
  "key15": "4FB8Jdx8ViDQ4e9bYeEg4ijG22JaV8QPKQWFdY5kmWuoDcGT1KGMCJWrhk9fYiwGHuTZWzwB3K2X1e58zmk7c75S",
  "key16": "5xW7nTtzbJv5AC1v85n3UZ2E8zTh22q2cw3A1ELxFXaJuFZgoegT5iEopXwqzx9fdz4Udbz91w4hQEjuA3udX6Q4",
  "key17": "4H5rmTda4FhHNCuUGhg85xe2PyihZ92TTgjPy8nXjRCBEzPkBUgk6nmSbmki6Amzr9odMVPhwPFmw8BPuZbi7ge4",
  "key18": "4Jopno85VHHUdcH8hLQMPnMKAVvh6fgZ2zCbmUsp32YHx1eZXNBC27CNcG423Urgzosf9C5ftbm4hhtnxbCbRiu1",
  "key19": "vfH2i34sWi8VWNqdFLMaMaG3ZprAwoC4Xoggu3P11swWnUEmXXLLcjSuqdNAxE2uZRtV9Deh3YE6bVKY1JofmtA",
  "key20": "5VjLxszTdoth2rjzqzFBjLajsi2UFy7U9SdLidKF7npto5cmkbiEcQ26s1DspjR8EBLtkA71CYXYKuWk7L3wQ5Cy",
  "key21": "2sLmMSVCzNPATRRKEJspDsyZ8RDdJMUzLChsZwoTh97RRzyrMCWMrpVNsmDMkChk5HQUDWgdCsYamedT4T6rwBEe",
  "key22": "e6xa7eNP6v647SuZQNNvULma2j9Ez4196GFe2n4RbGw9rtD2epMXU5yfSsEs58XmaBc5qxbXLq7kdYcKPAk86MQ",
  "key23": "2dJvbzcuCFxB2YesxppddFZQp3EhHTzFWNnbnV9zo91TdqwYAncfAoM4hobhrsAhhbaw7KrPDostupi7BYZY9r2C",
  "key24": "3teBoPjfXzPGFMPSfSaKWej6sbW49GttLsrKLJeQRaMEYjUNntSimiJNmpv6uMDg4GWkojs8ffPyzSqJsegriFcG",
  "key25": "3j1sZd86ZbE5Vf2joMGWacprt8UChyvHXkbYfziUiTJNMGR8SXs4Zf2Ysf3ix92i6XzMUq76pWs5SeiQDsa4KiUF",
  "key26": "5Sn8Dv8yPa63hpWhwdV7FHqAmrcxJegfN1eSQ2b3JWa9WGVvRWeBPVoPvsC6hSDWnR9huhSxfMaXF3igF4sn9wSE",
  "key27": "bgznAsVhvgciy2T2oVN7ZgEn8RmUQsZtMwAj7YvKbGsAP7AjufAsv4G6UBTWpRUr5YrRXRBqeEypAG24Vs1rzev",
  "key28": "4mM6tdsveAN6roDGE51d4d6ntvbsWWVvhYmhfhAzK8wzTHvYYwjhwQRQ27DTDTpGy9zGLDwhhjVFsom9Pbf3EYVW",
  "key29": "x1SWXMWJ3bzhuFVduY9SUA5F7uChmQY1KGcsJGH99CZtKH7q2UHokPJuvEmdYAgCyAtMS26kyBWEuPQrPwZ2yJN",
  "key30": "2xNs248PbhGa1HAbK15XKnfV3A4BupGmVUJoFwn2sL2Ey7Dy6bTqGC2tPRwRuyzXWRwNirH8MHWQM3weRDHkSbTB",
  "key31": "5HopPCYo2gzwSgU3zGoh1HTdDN6haXXfyFjBb5QJiJFr1YziaXsXDChQfmw8H4astzY5XJ1yKjmyKywxDQiftzML",
  "key32": "Ws1LyRMeaVGNSqgMsdbCD5kBQfBwqJq6mnHZ39XTT43xpCyQMVdrJkJtvywFgjQvfFYQeTRTBq56LoDYnCKSLjP"
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
