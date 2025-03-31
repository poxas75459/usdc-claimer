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
    "4WP9xjJpWk1TwcRjUho7sTrtTPCa8yzGsHGxinZYJFHnTKxt84jCG1z4oUsUvnTB5DzBuFGnTxgtoygw7TKRxX9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dbSPZ4ASee75UJU2rm6Wz7eLnxrEuwNw65ik8SyxsFBqDYUuWUoAEdPenXcWr7moGTMijxdx3ufuqSBqZuECKYC",
  "key1": "4UUKUfiUezGHpqhPMWDcjd7cgtGbSW7xVXt26tFCWZ2ADyVrJPMc39ZdNSEXLZmAS3SJzYpuKa62wvPnxrhqWQyM",
  "key2": "wyCjFgLFGBWv99kms7h7Da8JWsvK4cbSbGc1BXrdyuzmjrv9hZKEkfSBa1DcPwodpUMGMD99kcphtfz3c6HrPRT",
  "key3": "3HiQz9JEeAPosAc741HajWbw6X6i4nFScQgrdkKYnWLbQbfNujHR7phFbeQvoWKedPyTFonQUWUddh7e9ztAefuv",
  "key4": "FFzsfhCNV5z4sHtTxv6Pa4ZD2rQb6RdtfUSKFxZYwpVempmCT3ey6e4PoMZMwF9a1nQFqj2GVZCFZGmQBxDbziw",
  "key5": "2sMHo8EQLrUZxBMuEJ7pqXgjjj7FCp65uZgNpjuk3XMYgjEKh2pfBqkHSztzN8Htisw3vJbMAPcHMS9KmixKEioH",
  "key6": "5XBDjUmroJJRUNaJDLcfx4nHteC2qqjJHXXRwErsvy9SbLuueAS5EpMp7oQApKFP9A2cakMy7xjBG4XHr7F6ohD3",
  "key7": "YYoJFM5MYDTuPN4nBu7tbSQRen3rrwpWdpVt22bhbUdcjscd6XKp7xtcpuC47x7LG5AbbQ8BxD41E762wLSrEHe",
  "key8": "33JPQ1ia6T8YaA1M4YuQW2yf7TUZxxeACxJ8v5gkTnqaoxPhMV21aCCwRGMRg5Gw18AbL8Eo8kQBXSsofdGRFCVw",
  "key9": "NvhqbnTE45RzqNjeAh5fth4XUPBzTo4vxuBzaUmSSLe8Yk6byai8KvHXqyWjydvPXSFiqr4adekNagxveGiTN6d",
  "key10": "Nr7P5CHemrm36vbMN4rm1epy1X2b2fDZnwXdnKpq3AzHqRWgp7nCFBfvj5L7DUYK4HcwSrRg1Z1gH8oNUY5wq5s",
  "key11": "yggPztRygqiBmLqWNb5GmcQALk9F5VnttdSbJgkp5shKQxnM656GjDzULQUsRHD6HG6za5VwZi8Jj2yhcmJvpbw",
  "key12": "W9nPvwN9Z287Jzsr3uZxPVacvo6oTLkh3tZ8zDTwVcQT3gdftt8MCmfJNGbUize8mFn4Xe6JqNzztxN1i216dZn",
  "key13": "4Xxe6GceiyhzWM4ChfEfF43TXSMJqkPP7FjFzAK99gbwWM7k3RwnsxPjs4t2j5uMt6rMrXA1Wciki8zcQUD3n9Hm",
  "key14": "3AbJMXsC8ihoDQA6FU6zHnByxcJMr8uVN2cEyt3SrMhyyJehDengTPCW9cK4rJFBcvstixCJdfdEne52JuDcZhiT",
  "key15": "67Mn6SAYZVjzQGDACwEU3BUDLXrcSSNgZT7x1yj8wXxyrjKi5dr9ENeo4jtRu5FszGCufB2GtDNmapLzJFpXbncd",
  "key16": "3WQP4zYF2fqZTzzz12T1s47jKhWvseufGbSJkfaCMG9cuExvx18Qe1A2tTP6c6iJ9dHxcGupRvBkgHcMbiz57m3Y",
  "key17": "2JdqeFFdjyjvyriRhkRMUhmi1bUs14UwMS1tcw4d6CM6HYwhYWicJGDSW5fxFdrkwUEkWpspwE5UN5WoRVKDe4sa",
  "key18": "4PHtRZUVKYHuVPydiUhRXZtTT6U7Axrvz5sJhLV1ZbiRM71bjX6U3T6stYpkCWHZkb5WFmnxH5TESYETqBCSCDCs",
  "key19": "2YGuktKyXee1VrjypiG2Lz42ixYjbKFb6VT6NACoY2fHSFqLAX4P7z95nx2V2EnhYHhyQ8H1YFmuMq2e1gXR18jv",
  "key20": "gGrob99tUFRzua7gzAFBFkvwoR4GwrgqdEzrLTqjqpNNxrSLk5vqAqvezTMFNCp5teoEKqz1RxoP8VQC9nDMBhy",
  "key21": "4WaHsMY1UrjBjPxVfcP4V3oEhhzpoUkGf5H2BhMNVqBS9VSrPbaS1HStmCDZzWYDoMcDTAKkZnczgLQ9eCuHiSQQ",
  "key22": "XePhjywrn5yy6GKXBvKP5TCEExcbLZNbynBXWfMjfeusES7xiNcipXtYxnZBQ1oifaed5dbMgXdZ3vokYDSHYZY",
  "key23": "9j25CvgJ9mxuMgoGkXsqpKbXtufw71ess6gDXsKJVCctz8eT1i2xbrSoESmRQpVqUdoBcCHL946nbqXNdtvBTqi",
  "key24": "2XAWYaMWgP7f7kA9Ph5FLH1GNKds6mzgMiQcuseXUnRaepvJ1WuJqQFpFeBfNtxrR3an2zDZy2dxZ1vtzk9hR6rn",
  "key25": "tCpTdj6udWF1Aj1XCrErbiZDNuamEotdtpjGHxXZ4WEnNBMHPzVqfn9Png5dxa9bFY5oLRtqjoEtMN4Fxw9822H",
  "key26": "663cRXDrc5spTg9ZfJXjeAJnbHDknaJXH1PfqqsotLDnVqPUgk8ep9dFDpXdZwwvLNRKFcCgAenU7yk3HEA2zh9x",
  "key27": "wiqziroziHUr7EQZ29QDiLsGMi6mfgM1T7YRzhgrN6Z4mungTKf5xhNj6PBFiYMFyxfGjdqekz5jpDN9bV5sUTo",
  "key28": "23cmN71tyEaxMXoFsLsAGFUU15SXzJnZxhGtHBSqT8v5fPpm2N6phvnNNNFV8bBEZSMveGiQJtTViFxb7pnxg8rJ",
  "key29": "bhmkziNR2fdHdHL4ZLftU77yDAMML1C4FYLqW37uyVX2xFEDC6tv7ps2pMKcDqNW41cg8GLDpYA11dEAHALZSAf",
  "key30": "4jnJaqcqD5Lg49x98CxRJTkjgVntzPMiBkj7PSq4iCJbncwbnoZLbAmrD18NqWDXeBRqa3Ck6YjC1HB5cQKnsHJh",
  "key31": "rU8UEXZZrixTDWS9D1T3ZZYdiUXRxJPJkefhEk8d56f3q9yxcmYrUWmjrngN26HwF9FwHKNHm3VxP4BmhR5W5sM",
  "key32": "2ZTpa4nKnzm7MooTJUU6bmFUuXJng6nvYRAogame1LJi5cjP9ad1MdpCmFx7E5JsEhnMVi6SH1BDuNdZujLqS3sc",
  "key33": "xq73o3L6t5Ehq8hY4HNEH6vTj2aUVyLpkgWWt2G1136Ey3stMqk3UW8gFmB3h2g9jMdbbQxk68ZGu32yFk67ubN",
  "key34": "3XTfe6PMz1eaZsMRwpZkAZMFEQQTW4Po4LBWCdtemGbNe3WPhdGgCGEaSRi2bEiSQyK6b1Yt3Te9i4HEXiieCGhP",
  "key35": "mrMnfPSyp5HKBtdwzA3evpesmGZG7rgXtg22aNmqAVQuN1MtfPLEBCxFDSSKK1FiELF7yzWGbaMkNSbEPV4s4My",
  "key36": "3zeRSHRZa39ufUQ7wKgxzKeajyb4ERhLCUJEcaMyDe7bBFYXnPfeht133PDo9UuaH3MTrnotjGWAUMAmQ8ATV5Rw",
  "key37": "5EUnH4KkHN6UXwJcxRmZux4D2cpRY39ey9c8pjhNXwbSSTfuc78qzfGoKfEwHqR6DdJtSVqA3Zg69csfK1LSX6FB"
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
