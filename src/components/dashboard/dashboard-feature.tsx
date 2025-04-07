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
    "29j7V3Whstn9hQ81Ru9UGUUiiuP2pT2zFL5m2P5Thw2wZqvJHTrzVA6q9UwxbyQjcnjnkedaQT12o9KPhD4qsRr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EfKzoLiactbSKtFEzXW8hPSSfykC21mCex6HJenmUFBx4fwvNdgWEFhcMbnqCsC21njTLWkb4DuMH3rbxfh7Tkp",
  "key1": "2fvJSdFn2gonrkrCU6X4qrKMQbZ3UBRQ6zCcjTYbAtWsw7wvmD4ZwugxXRQw3sHUvmnPLys4msDpFiTKY6NzMECy",
  "key2": "66cNFtdjFaq25eKc2aTJ5JiZ8otvP3yYQdpjCztazuYMPzfrUGYDFnKChUYma21U59EanbgfXyUzSf7i4wLc9YFz",
  "key3": "C5WRoNfyWNC1f5yxbEuF4sm348jVNun75eyQRRYiVJtViWdgHUPQt6C7py4mXanZcmcQqrXfTEua3ePbLS6ybqe",
  "key4": "2iubqy8UxhXKBBTDMTvuUix3mo1dLxdVffa74SWBMWxmCXJeNnAvW77L4pUD3ehSrgqsin9bKv3BktcMVb6WRuTf",
  "key5": "P91RPyhfpL42QZk45YP4wPRXve1r1R1gxtgJbDY4CifhgUSkqERiJDMbDcUkbtJbP364ZnJpASav9Bu9oKBQLFs",
  "key6": "48YFFBw1mFS8U7eU1NGrKtgkbHoUmmY4Vj5Ru4b8DC7uSmpSpZBv9UgEyKGCDN96XLdadMz3eBFjVu89aryufZQA",
  "key7": "4eUQa8V5eHj9PSpiasVpgFSz8fHppBuzom9dd3VyF9DeJZKVAEMf6SnaF5NWhshsuWT6isgdPHeBDhwHQAAbWHja",
  "key8": "38KaBfCPJVS4HVKpF2XAHK6a9T8s9Y1crKtye5LViXcru6rVTajJbrHFC6h2VJzpbow15Z16Pb61REAWgvGwTgpY",
  "key9": "2UqX4D8Zy2APbPq6PUm45V6J9hMjjFafQ9upiZPkCEkDS1HGkb5op5PmPAh8gaMS1BjBAwVwVxQQYf1wqRacZySh",
  "key10": "3zYkVkriTGZLxJ6neKVNjkdvdyjFuVjnb9ipKnfsMdQT3HMGbv8rXpEWXcC6rALSScFJB36rkYpVkz79XyWDt8rx",
  "key11": "2Dxv4JPdB952gY3AMPaHafM2JNn6Q7pwKx4YRiHc71azBN4yS4LoamzFHeeV9g9rRdayyxXeVUa3s4TLsjPUuLw",
  "key12": "4fknnihdoQznztcAfm3ctn6GzfhzmLFSnqKw1TQHjZDD1PXmqsAbK6GWQ8XyTXXsVYmqK1noHUARGsh1fkujvStQ",
  "key13": "4AbPfQp3TVjEmQT4LxjnjxgDfYrdogYfivg41uuNRMzEpdspV2aVfST3Kd9bYT6UJD8Qz2f3Eb3xaCCqJgmCTX6V",
  "key14": "5YUHhRr8e1UVPMZKwvXvu2Hgr61QEomFnvZ2uAHn8Fu2hZCvVSUP9PFTQTg3jQrw68Ve6NYCVddZk2GVRJTPyMAQ",
  "key15": "3Dx1xnd1TuZMVBKtQuS6soSjU6rDdWBriaBsvdR3ZGnPukBMAhBymRSiHmCkQnGfZitpwQ8wmBpqQJNK7GSEHMp5",
  "key16": "51KSMi1Z4pBrtUL6d8aPPLtKCbhbGVQyXkf3pBTymN9uZRRzHPSWmFf73PVzsFgrnm3j5uuWQt84sPQM9vSjM5Ln",
  "key17": "355RddxWmAePpmPJDsWS4uov1ZWVCVxnk5S7ecwMFRVrYD7DhvMiWwqnFFLJtNdYh6CYNNjVpZ68dZBwQHEpnjgE",
  "key18": "3JSKZ9kRqfwB8JGYghfktQNGujwnFjEEo1GeUnMMcU8wXEB82kN6FBs9HPejiabcQRTnkHBgFDM4S2agtwFj84Ud",
  "key19": "39Gdzpy1zby1wXKwC53brqiT9Aiy3RUUm6SEHEM4j1ZCD89Y5MvwJS1YzCPv9ijpJwgXMD8pC82zVTB5e9SzHBaT",
  "key20": "4vQxGoCPrbrcYfsshBZR212vn4m3smq8BuShGTqVj7ZcFVTnX1bvKD6N1Pck4f4uP5nKMpzY461Tgi5PKpfEJVnk",
  "key21": "2Y2A8EuS3hrTyq27iMWnjFiDEKLLQVUuqy2oPSDxT5yq2TGZR8nPeCYJ686SoGed7fiThCFGk6NjqWr18XMPDdCh",
  "key22": "ZFmSWmXtYaQSsPrSen7U5kifnTg2CCD2cBqpbPj1FfhnsJ3WYRsy83MTd5v7KD6bzE3C2SXvB7JTSS2Fk8X9uR2",
  "key23": "2kqinomwXniknGkAU6j9QK9e9H7A28r5XSz1NfbvzX7ZDb3Egc99QeSbbDfb8H1brYHWW6A966ZJQRsVG7ntivtc",
  "key24": "4oNGXwJfEaBJBZpeBkdN7sa2rRAkALEKjrCRt7dXd3en772dnNrrkDNsMGXEvCcfW5fWvxA3p3nXGxiNk7eiGd7H",
  "key25": "2Lc4Uy9FGfknJcx6psThhyS4gXXd5TmJtXo55toA4tmEroYyerL4ZSXm7Eedrg8NFAQB5Y4kF3pHv92nzzRPvZBr",
  "key26": "4g1eZ9mHVzou1FbZPw3FZ2r4ycAtTMjNvbU5RBjrsQHnYevL1dFJqFRTrhaNoVzzseGrTqfCf9CSNAtH6Lg1L8vG",
  "key27": "5ZXrfaeFboXjWe8RLXVd91XWXuSPwjiaLf2WRLKVgT3LrLmjZNjrkSyW15jJKhWGjrDQSuXJz4okGFiH1kFmVYB3",
  "key28": "5BzNnAwBgKw3S4SgGrWB33BgBzaCzU7s2scms2pEzzUwhyZGJenkpVAXsJQjHvt4pXQDiwaHNBFePbPVS4v6xzjk",
  "key29": "5gFiMd3JR1hx1MaYLvsbgAFmVN8Uqeth9xGjZ9kZwNB2rbETb4v6dHuv5wqYiyFcHVuubaJjv3KS5a64PU8ZBfFq",
  "key30": "3sfm75rV6EQ9nJdvdYdJTca7Jq2Kob3joVHZhnLnVmrXJee2RNNyqeGrJEU1aKL9o8icEUwQaPPY4NtpDfAtv1sq",
  "key31": "651Br1dTdr3Mc88Zcbm36LGKFuFBbnP639rowvEWJdiXAcwW5wzQ7awtRQ2yLyniVzmaDN4e6vXNEHzqvu8Z1MhP",
  "key32": "2MD5qG7dExo5uGhDm6vnQ1j32qhCeqdbuhmKCCALez7FKk2EEFfooAQupDSmkumRqZ4P1yk7yWf32pGb4oiNCPpQ",
  "key33": "2EqLVBKBT8d8n8TggQbmxNLvHHeTv9KqNjf2N4sLK294stthbhY9pAA7g4tHhASQc9Cjc3hEwcESzJoTXrRamYJ8",
  "key34": "2989RxozSp69DKyPW8DhFaiMfUQfhDrkH6DWXnL9AjmoTk5AMdEUXfxowGgtWBG8myh7PcMVdPaeZaHAiqxRvhcc",
  "key35": "41V9B2MFnzvmi5s28GLZ72WmD6X7itE416QapVU3FgtycwH412UDVYkFz89FLFYchVZk6aMcDcgDhJo3gUFPv8C4",
  "key36": "34g97CnjNBq8LyMZsieydbLha1kuYud7GJkYRWgZMrks72HUH23KUaG4KUN8KJr7qs7Bf99BvLQ4jGZaAmQeNTZi",
  "key37": "3kopKnNHBGnYB4QPL1CS23pkCauzRAzWSEcD97CkzseQ5ig4obivDXnRDtYyArqb8fSRPVhJdBdKhomh7nvH5snE",
  "key38": "3uFTMSvdtxLtVhuoTWaPdCKhnWoTHoC3CZfN2vw6WkPGrn3pHrcQFJMeUbsqJby3EoRrEdkgJTLn5PCmi9xPLQZ8",
  "key39": "2B8u4vr5ZZDFshwFpiAidRKkjVT7pRQN39ctcyJ3xLB54diGa1uP4NXpqF5ucpmBngU9uTHdBVPShhT8XJ2Pdv7c",
  "key40": "3bxzpX3MzAK2gWeNbYbB5tVyy8w3LwyPhWqUAE5szFFjc51Ut9H4ghNuAEhai6V1B9jMiZkJcx77szLzKjMB7G21",
  "key41": "5cVNPHUaMqZUbUVeWbRqBjQjKC8BiW1krfNhE5c3S21dfuGUZJNw8QL3vNSu8ksACBiDSCo1khV8h57V6qy4fD7m",
  "key42": "5Sm43d7suJbDvpE5eEMvbzMcyS8m9uQmkxy6aV7A17vmCKEcT9Xz8mbiuPmfM4oomk86Mod8x9NfQVJTwQHKvaoj",
  "key43": "2PpARyMGT5BFs8magCMZaTFbgRBUG24h9AWEoUoxLRSwfs52stCZX6LZKSm5LWnZuCiAib5rvk7JXcE5rWwSmEFX",
  "key44": "5BspE3y9YpfHpWq96xyKMjsT32UwKNTSuMgb3rHq4D7J4SKB2jGCGnoQAiaKnEYFqweA7ZS6rtKrgUDg8ubjhD5G"
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
