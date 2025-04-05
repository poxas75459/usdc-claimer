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
    "3HAzX4keNS2y2QNAFbwzdZ7EBY1PZKoA1VhpsQtvXBfMu6r7iyDjwr6otrQXDGnwx3ufAu1AxDpkukjtLerxYJEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tRf9P6v4N6HQr8vFCEpkf5YrmJB2k9ixfcSWdMS6Gzjsk8qCgJXK77HuSs9umNtb2hTFN4jMmTCDFyxBdLcGqRS",
  "key1": "4PDqN8YFm3yx26Qc951bvkCzCD32whxD4KVxTa4GvXeoffs66TkaMriL1QkKURxoZV3abgokxGJZYMY5jCGGPABZ",
  "key2": "4udWSJvoHwdSEo9mUARzvFcwBxM7ZLTSCZwBoexy9PsSX4My1T6y4nTZFjmquimVBYK898A77NYvxFGseSqvJPX8",
  "key3": "3XNhu8bWU3tkh2XDnsfw9SrvvrqBnASK2ufePCuMVmqYS5yeSVYWezQAfCUosWmtWedLkfhGhdBjB6WUwbREcRFJ",
  "key4": "3A5TdxQW8QqfRqLpPNtzXGt1LPKMe67T2K6LPLSjCV3TxyUNeURX9YcLJsyqmFsjcVjktoK3scAYVqi6NjSqxin4",
  "key5": "45PcMD5JaXeU6TGoy4dLQFzkTY6i7VoyXcuqUAzsTer2JBvFkhwasKNo9nTZutpwHQBMdDdZwt4sEojki99u8wNL",
  "key6": "5BzFe1hiVRiPuBhdG4sM7LPYHYMz23xADR3UBBF2a1ZNX7wKAZmWFHFdUKncbptM5puxY3CPsjUYUjvJ8wdXQ1u3",
  "key7": "CRztb28LMrs1uM4QinQV9aFb29y2sUnefSwPe1mGuBvau384mZFQQuuYbTMu2i6KJiZpcp4wcYVPC1dwWkYoJHW",
  "key8": "3b4oVS2fzFYyJsfvj4LvSDr4BR1PTqcP4MnkBWNMxTHyoPcMPVKEX3qUbzXzJwLRHdYBSHa5phV6XADVJkzVFzkk",
  "key9": "4i2qKksq7AY9gYiSDs9sGS8CHqG19Pu8FKMdp2JmqHZrMZoXbx14W97aFuu1UE8YhVAExVYX3SRxZ8QDsoVKr2gT",
  "key10": "56iWyF69c3bmBvdZvq7M7PsTMmmv9ZMMW9p1m59bzzLQ9DnueyEz1dqfYctQZj68YSfahZwsgd5ciW5NbdeUF4RN",
  "key11": "JtJkW8Z1p316zJoSsb3VCToabnT5q9HPXfKowB21Hx6TDFUHqCTuZAY9zYveVMcL3hRfnYrZUFLibQKen7bbQTp",
  "key12": "24d3Veu7jp9VLhKzBLAC6DvcpaRQkgC4tUbp1jJ88Eu3LFc45r4x3qgWhzQjFdoFZXppmSE4xAwibeJR6Ujqd9ak",
  "key13": "4x64QMZf7oyGkkuX8x38LC8A9THbgejE1DreoJViwBY6rUiXfjpCB3ypQChGvxqyTrASVDv5wNsmtobB13ecEcHN",
  "key14": "WtH62gyd9zetDKWVTvArAqohmozEpbq4XnjfRwMQCqPxS12QpaLYGAXbAw7aHJhCKo6ZG1AbCMsceeFSkEKb6Xf",
  "key15": "5qvQiyPmxcYRnWiBYm1vMhSNipLGqK9JVgKBLZwUEYyqjwQaKTF3G1mg2JjUpXpdRee72P8CiTYqzEuhSASTjgng",
  "key16": "34P6kb2xcE8ntH1kjuvCCS8otMMEfH2AyAXYaA75MuBNajFfXYuXG1QWTZ8ZFSATtDgwsRHwjH9ru1eSdR4D63nL",
  "key17": "2jbSkHf7LPLfL5HiYoBe7QHfmXzuJxw6QkW3fSGNDMhsEGbdt5BGcpWqNsWXFUNoTrjAcVBKvgAZuJ5k8yC7jjUP",
  "key18": "5XeooHkHepdiJJa9aZhM3VcZAGcwiYMfwTBSbcahh3u3Siw4FqemDfasXDLCaT71vS7wBdrCC1fUWGkXjY87GUHt",
  "key19": "2uoYwSuENPDFsdnGhoUp4hPMR8xWR46CfBByJHrRAQAkq1mhG2eWEghN9MU8ntiHXzS9twtR7wiJaSvCS4AeHa4c",
  "key20": "3JAc5ESsy11dAxnUASfvBbSupzCYUz8MqvCJku8jzysKqiW74rBinsJKPyJGp5MGDHZEn9Disj87hXEKBuN3mER5",
  "key21": "3L7b1d1ftXEvNc6mcJMV78ad9YgnA6SUDNBp4AyrKiUAhV22ewFg3Lbkx6cUtj3FT8Qww6T8KaXemssXa6PrFHHg",
  "key22": "2XvvH5i2D5qXbNTRrMp2WP94HNaiNSm7JiTCuu6HCxuiUdoo1jSnLxgB9mKdpSi7YhdHeSRyPeMkXv89ktF5x356",
  "key23": "3wM1zRUq8y1orM8aea3CyX4JMFDVYUyeHesdr7K56AKpb532LEidou1k1FDb7riedKx1zqgbDUyq91EuWwwo6uLE",
  "key24": "5X1kxaygkS1URo4WvU1fVuWGzHuGHZogUxs1zbS4n1FAoE7PtrefZ3811GURDp9Wi4VybVaGFRaNo8VD3FBCcYw5",
  "key25": "5KDzYPt7D8qqeChocto4PSQa9PbpQLpunHfCWfUXztHz3KJzZAmBf7FtEgEgosFKTGFRXqexdqAXnrTaEMQe1mPz",
  "key26": "3qKWG6srLWwj4mBmD5egaxxogrQR1d2sCinJG8yiTBMprPpQDP5RYbeWNiWEsUTjQ6iF95gdBi8hNYkywwajCGjv",
  "key27": "5NrXLFS62ZEqC7wuWGd4A7oqArEg9ViEH9eyPLtCoRtNFLGkS8FSu9NY8CLKEubhopSJUvJyR4KrKYYHW3CXLv5C",
  "key28": "24qBEj4nchocMKyVaqN3Ln2SF1LjCVHL2oJVmmhnWv2UMBpixToKyPFv6uRkdzae21Tp9Diw5ag58XCKY2QyZaBG",
  "key29": "57arS9fuYHHfoEzFUHFGJwqE6BKhruja7Kea54uhRxBkcfPzBg8pWDcYxTCAPFMVq3Lgk2B7B2Np59AVVaGQYm6L",
  "key30": "54yCfiP3925wtNED17HsHPnsZeBHKhgWbkMNAV4XZQZ7jVNPzDoApAEVCU6RoW8h63WDY4CNHefVCVo3pn5g3yU6",
  "key31": "3qKba6uqZnXFzAAdF5jmsTHSjraegfxSSmhTHMRH44CfYSmtaHwqH61FK7gNXhEVWnP4RdW9BmYP9xv1Km3pPHTb",
  "key32": "7PUDoE9uLtEf4peynqXZ9129p4GW3RsHfN4HJ29wfn8vpuX2yd6aWWpShqRnmuj44F3kn4SpnyikWc6Aqfjb1Xx",
  "key33": "5qJQ9KJXiD4XtsBw2ThRsniaXe7jC7JcMA9RpGxEFm8HEDGz4Vk3h5odLZwLRfPNXkftr9gyFH6ED6tZduNfh45h",
  "key34": "2veAa38uAzCFcVEtayFTuDoLGC9Y2Dqq4KxrSPt65f85CHcaQ6ydKVaiv338awwN4oS3zd3KDCaXDABah8NrfvFa",
  "key35": "BMYmbjYtC535NFXq6yMK1hyx24ce3G5xAAykB7HHJnm9wcpGx2HrYpubKdrT3cjG3PkrGqRRXAQvmdcVmhSeZ6P",
  "key36": "4FCsWHB5GFwqWNyTqiQejFALd7GTVY1BhJrzH3xJXV9YumYT28JfhsKQSQBApDHiq77KzGmBTD9WxqDCbJ1mKygt",
  "key37": "5LYXVxrgqz2GH3j5KFkZJ1UCmuBQkdTzR68iqD3N27LkoGsrazfipLgKeD6Diw6LpijTkWAkNAXP74vVZusgzvWQ",
  "key38": "4FPHr6pMXgyk6RTWZtCXCEuAFRVGGHyXMjyLbFZ99xvW45kk2pPMJDqm5kLPNBL5Nm26jvsT6PYEzNcZVX6JYvgP",
  "key39": "5pfZ8cM7TLaDZUVWB7WiQLF9wE9P3iv24xM8kthnGZ5zcCusWxsoQpDmpcvaLQAzod9zXTk1wKtqYEhWYdFqPSpc",
  "key40": "25bisvuVtZTep31kCEohmgDqYNwHwFiJ9GSD7MyLJzWa3Pt94AJw5oQRLU2obho5yAPktuJdvanYz2jbXfFPFRbH"
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
