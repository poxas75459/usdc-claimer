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
    "2JFkjNkwy53eLiUA5B8wg3VYCGPb2No2GBo5sBwReFEv8LBbDrPeJRAzRn5CN45fRffgvD8m19o2yy8BiZ4sc1wc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LHfGs7JN5FseaiWDYv9erPTWijVoBjBo5w73aqRBp6sYe6CLKgCUwVqQVsUoH2B61H1xtnTpmuePqV1U5aC7BEB",
  "key1": "38c9osyzSmmqPTBs9snBwHdaDj7MqEByKrJPTwc7apZdnptLQBJQ1Vz4EgMhHn6f1MmVxZGunBFnqeHQz3VeefDj",
  "key2": "29JNGiPi5LWGvsNYbwtHDUzLUU81dokZ1DUA8ef6rkzt2HGCRaqYA8KRzSvnhHGFLQCHDuEuk3i1zx7hDaTu14p8",
  "key3": "51BVFqc6M2YasWd92jzNJnhdhyPBmx9Z5TqRdAPoGrDnxu6W32ipKRAceJ3N1XGFkZtMde8HFWtu2ZuckTMksFJJ",
  "key4": "JyYGxfDah8nYARXDps6kpUT1QuU2S5JTeWpULdpr3KnSoK7PjgGVUVNGf9WW1uevWQ6mr45Zkmq5Jdka3BwNDxW",
  "key5": "62GKaL7VinR9QCCDfBfsYENSwrw6BPLCqHXfbgiNjiCKQcBkrtfNB7xmfqrk31PCwtNjDg1kTkQim9DAfAQtJbfb",
  "key6": "5UUNT4nQFaM8YJQs9iGucBoG8A6HQFTityppytUCtgP2YQcY9WM1ErKKpcYbFxzevwmGvVV2vEvLuBH5f5ch95wm",
  "key7": "5GJQZTwdKiRHhk25EZ85uC1b5a4ugYWHKimrhrwfj6hMnCyQXd83Je7Zg4R6ZHrjhaPFtm53LYk9UoTYYZaeoLhX",
  "key8": "3bcpxDs8NZ8jExpDWXqFU67WQZWVn2wsbAT5Ms6fhjkbYV9HT4caugfBVi63YsivoZ2LRRZ3oUAzMaLomWRYyAPZ",
  "key9": "4jfjFMu4bCpbt21ZP4Hz4bqzniazLGpSEdxcWPzFXfkvaAJT7RwwjTN29Hm2GDpF6DFpfhCQ9UE54BUqAHkcroKY",
  "key10": "5EAMRzqEJoh1xz1WvgRyMxhREV6f8yfbXjLp9pGDffpqyFKdUgw38WyA2SHt51V3XEAY1p2VyzgKv6F4KxNftr3t",
  "key11": "k6urCx96zxaUJ8zNbR8oX9Cwmau3zLVuePt1kQTZoA7yWdDFGJKTfMG434xuAUR9Ycs5adNGU7PwLQtdaXPJTRS",
  "key12": "4vJHy6jdPZXQiEBg68GGPQ4m3nSR47EDjg2Z9qrg6fEH5bj6WreTdESsuWHc4b6TmkADFYU1x7MB47AKWrjmbrWq",
  "key13": "4qKswqs4fGF9QzyTJiZ9FUtmJEJ95y5Kzx2oq3gMNPv277BB2Ae8Nz9e3YhWb4q2PN67zKiXji8siA6VFcnFPhF4",
  "key14": "2SjcPow3RzQPCxL8qmmZVFWV4RGd2199kSBNXeJohqfULrXKKaKMbzKXBnt3zLN356KnhMvaQqtDoNpSB1M8ocGn",
  "key15": "4duEzrSpGskugXWFfWTNGvriHVFmCTBJ8VkKEVgPn74bQmc49qqwLnN5v369WBbtQMHBr6pq7CjjJ69Xr9HFhwYD",
  "key16": "vJA9KJQWpGnuPazQkdv2ogM5FeiVuNrwCBfRD1r4zbs5cvwjPuSktmB6gCuF4JrzjcB52ndkCcFyuCFtTRtpofb",
  "key17": "3DHqXSaXpswY9yVYCs2vN2qTdmfnYhzD2p2t9TTghqqDDJPfFS6pnXAonUP6vA447LQzFkTmhYayzK1Lit4y12pk",
  "key18": "65GBgECLVkejGVjUmHBxG2WfCWMNZXcibnr1Y4jpkQY3QNWcmFtfXTV8m92qSZCMcM6CLt5yg7Dg8Z4ef5fvzv7E",
  "key19": "DLHSLEnKLd7wqsUhwHXrDrVdeiuLfPRCENMSSnLspo12upEQiC8QLdEWjrNTq2Gq4MaVsMCCWZdphdxBicJEUie",
  "key20": "22H8JAEJELoV7qMyJQLKCGbKqSan28r3WuGo6Wc5ZoeqdQc9otxnDuvEavb5f7bv7bnDFwdUM7rpNh5XGdxLKkbf",
  "key21": "21htFAAPoXeK2CDwpg3NM8txppBdaiTyq2Xfdui1eg5U9g47SPqwwAYowTa3uNcY3yjTYgfyiExzmo5FKJezbi9y",
  "key22": "2f5QkjAHhucbxQSExvvNUCDkeZimPg15Wmc6C3sXkcRsjjYaNUpRx92EVUrSQYhDUJLSb6ZfKAERM4FPEw8nEsAF",
  "key23": "2pbv2Hnre1TpDWeXS1N3ri1YZ4DaKFeeh2HsWZ1GKoJ3hx3PD8R1HWM6GymuyDX9bENFQKESbtCZSLgU6mEpQnQ5",
  "key24": "4Z8qux54djGcZzoc2JiNkBaUPMzJ2RbRDadaMyuvdXEqfP1Tv2StxfZ2ENE3mTKBC394y2FGKYupQwivbbUviZnY",
  "key25": "3jvu7aWQ46vkLsUCjQg4PYiqVP8ynJRh2am9bBdH5zx1AkvSnDufWdhLiyYuYdwiZh6hUrFFsgFv142nfafA4nnn",
  "key26": "kL1iNA9fhVhRbgR42a48EtYvHzitVvkfJKYcn1WGcjDd45VJfiCpFDcTrmZTZhorDd8i4ATnC47HBFhiAYQttHU",
  "key27": "QhLg9ZAKqy8aJySWhWU7ShevBTDtLjPzm42BLTeqwobG9GM3pa3zuQFixxhfcsTz5AePmqMtkTzhefhnuDSF67o",
  "key28": "2k9bEU1uoadzp4KV6Es7GEo8WTSEYTcjvV597TWZi1kh8C34K3kc6pn59RQShb2Qysf4QBgZzyLLj84n4exiM6fV",
  "key29": "4iy2LwtxmGkyVjqNb7nJtTJ4qmbmMYXHPFgRiLfRJNm3tWxAkxDyPah2CgFYWCGECVgv8KqZfrwzS4DvpVgFVkMU",
  "key30": "kkR6UwWX93p8iyQtuYtkidzRqhzubybre2TW4oev6ir62e8KSX1EwXh9dsxCJZM1c1KeCw9LdfvnJWmQ8rndzUQ",
  "key31": "4Dq759tWvBUM7vWkLgZWSp4t9nDsx2u3jfqUEEaq9zjyzxSc9BXFKMj8icfZ3W7UsrMLz8wJHKVi3PH5WaGS9sZS",
  "key32": "4qrfwKPzv1jabC2SR92wgUiiH5prgkbPz8MtsnMKVCYYVVj5GAybTWtxiUawTkfRznquFLZwuGm3xGz7hg5t81i4"
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
