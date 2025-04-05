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
    "3biGyJ6nxBKAXg61vCLgDkkiFiYhxLG18Cg7isLCNgVcKNAHNBPgdXYg1pJBSKqYSSuJQo1YViU2YwPfUg8u9MUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nZseTZQ1DukDHASX9x4Xg2iVAzkAu4Fypvqf6cqv3nT9GuMrmvv7UN4FZqaqzTFq2Fk1sQ58TeraSgFQ34Tys5F",
  "key1": "5JXKDcbW5A8iQBvQSVXVePvw3CruVuV3HQN9A31MnERbQpvZzWQtmpQgWJ46Ww4GumTMbiZuPSurBBqkLwRb3jLL",
  "key2": "482UPVHRzQN1hGgWZaW97gSg5gFFAAK3cKDgcNxniB9Z2cQnWZsxJpJx4g7fNypbg6V8SF3oNxbbpcvbcjqvgCxb",
  "key3": "2on3yUVjLVwQqZowsfeDSnBBT9LnwGXiGCdo42GFNq2w66WMoVLpYuPyMz8WQMZ4gygzfdK9YuT8sFVZpmPyXUry",
  "key4": "4dFPsuSzseaZNk32cDSGuha1mAL8k7uBfDTrWeSRPCrvGH9iwEbGHZGRCubajT7Zu5gtAVRTAPhsnFcbtm8urwxf",
  "key5": "42pCuiQfE7JLjQh8BBpVmzUPtLTwFaWpKcdPSxT4gS1jYy7fJxc2K7Q2PgnG3QzW1iXAHeEdKaeoSFPM2uBihWPk",
  "key6": "2j2gWx6UjFEbBVgUjmgwQMV2xtwXUTEgkBMTMGGwRTbvKAJK48iPvm9zh7akVfj95Rd3SxKTfXhhP1fC6Q4tNqAj",
  "key7": "36touxBybE6dReih4FrWwDaTGSfvfP95nTrRytQHoFEwqDznQvK8RqEhNphZKQyiHSsmjtXV58C5mBDAkzbQEoGL",
  "key8": "VJ115q9dBSNqTs2VwxCan2ptHg3jk8FEEjigMRAyqj7hJcLtnbFyDeKYMmGL7aHpYifx2CFWssLFM2KyJyvCD8U",
  "key9": "5crQ54SkYJBCF5b1oWXdL6Wn7oKCi7GHYium5QQatCdbMMhxK1ia2rWLiJdBZWVyVaN5jWbLkw7wWJHNaLRpHdbh",
  "key10": "2fdEjVGFqXjyVonbKy51uUegu4oGcNnsRNhf7AbZAAw4L2KNfXNd6QfZwyQVpjNX8DkhXbQUqeSZVfc3zeJxaWmA",
  "key11": "WDPQPGtUGn8TJsSCRHMnCVJMvU8ZJQanLfPVRkeP3wad1NsULLMFTY3xtzY1CHZh2zmBxspsUQMjEQuw1cidc3z",
  "key12": "27TChs1RuJxMZKRsJ9bNST7QzDp3PiHHrZJz6zAXTovHJNkcZ7FtoSUmPXyTf9pdiadTK6yhzgioHmFhYLRw7SUz",
  "key13": "28jrzqifijyQguvAXfNRpDGuYmBsJgh3ZxQAwhVupMWpBzWRtiLCZ3Qcn1waAjhnVcALQjvL2pYFXro3R8uV5o7P",
  "key14": "2xG5vuY671DRSjGWup6jcHQTpBbUPFJ5MnRK5eWLz9vydQ6PWbEhoPcx9shNgtaGbZ4XqhaGnNbeZPYK1ZQQE2Qd",
  "key15": "6SwmH94cQa5zYEXixdeRH5toTLGeT9XqsHH7HsWZK5upfakoRGLi4RTWN29qYyMaPkEKT1PZrxA8NuuvQGjEtfe",
  "key16": "57sx24RyRZhe59acdwwNR1qTnhLyW65ewFsd8ne6JzFVH9AJ5S6eybbDzTtp7VDxbNb7S9ZSwW8SmBTad2gsXprE",
  "key17": "4Rz6C4fWxbknmKxTcBRyM5GABdwV2jg8Vatf7UepNbGHU3HTVZBgEt4Jo9CA8SgFLiXtsMSHAEaAQKkGLSd4kGak",
  "key18": "55ne1AGECaBxSd7uVDuMysYErM5Mnbrus2zXidXYXrrtq9yYqwvkJAuVVug3TmMKPivhPAafpFKbmZfCYdtJfzen",
  "key19": "2WdaGE7jY3ifHMPSn2Tou7ob4EPBhwzkohZMaApiKBtvEvyT3BXj1DaUqLKGEVyeSskWzJaY3FFX2ZzFdE1Z5eTF",
  "key20": "4sC1PLJP3XZrM3HqPtCocvErrw287QvPnN5yHgebyPYcbDzcnm4yhY7wVjCEPs24A95bRnroZRwtLCXcREAAA5V9",
  "key21": "36DHtmU7pFuMHYZt46dwp3PnAdWEyzdwPQaY2pagBjgxB4W3ughHUbZfLBoyeMpv7hgcsCKk9HCEfUXypLwnuKuq",
  "key22": "3PEb2qWzRQcSwZ2r825rfigJY3wbPmvPYsy9UZBSVfVJjZUdBocsggQ6Kviesc5uZsVrXRyAiFAziLR31Te5H8V1",
  "key23": "ga1RJTwowxdZBcnQ7xgjwo8WwDzGcuEWm5r9B67UkHgyA1zpxsJennfaPhULLM3Vmk3HKn6doTkrpzbRgfCMFGG",
  "key24": "4MdxbjGGBYVYE8QF9cEjKExfYp61A6qiuf7dmSKHu2YGyTMERsSCMestojUhwdeC5zh6QNfSgkJXGxUuTvVu63v2",
  "key25": "22aBHVJ3vwGuV2voDWMAVtP46vjgyU86ehWbDfQM7RVMW6ocYQHSZo2Vk3LmHuYy6bXk2TxvwPxLuG3yj1nsNXdZ",
  "key26": "4HimhuEiZm5ih9xwkmSxhV27rSTgTHQWPzUdbcqx89VcdreHPjFyMS1sWFXWeFfeYNWqC5nLWJ7TEPan3EMRf5WF",
  "key27": "5MDJUL2KbFRJbZm1XqtXoQFrRXPdLnkbqUSpWanmSGURvSdnxHNpY24YGh4k4b3SDhxAj6YgoiBpSDwBySNspnC5",
  "key28": "67aFuxexafxTYP3mYydMvTJGCRK5HjSept7GjoQyLzB7KbqK75JKtiVWVHoU5uwXizam4eCx4jwS7ZW64U6uiZ4x",
  "key29": "2fLTRXQWxxpjfzT7h7MUF9PEbABAaa5aMU1VLKATgUfZHWr4QJBM9i3bdMwB2S16CpWPi7d1PjH3ageeHQ83ffpf",
  "key30": "6fe7wYyQgMDYaGvEWZ9Z6jDnYMhKs1fkzuxVef52r9i9uZXhw1mKHBgqQwDYWi1DC9Bujn4y7yWkXAkLJ3vEW7k",
  "key31": "3vfFpo1D43cgmqqLDSHDc2htARnpN9pcFp9nJy1jijt7DS6xrQyBen2yUj754sAja6GepDiaMAsFeaMy9WKCJq3K",
  "key32": "2zJeSsYPpBCCfqcixqUXMpZfnyGu7dF8YrGTL2Xe4ThaxmKu9UmL4JPMduSzdPWHBrZD29UfgmPJs7aY1LnEht4h",
  "key33": "4g8nmkvK9mW7VTqcdQQqFEBQvQ1SrE1iSKE52itTu2fVa1mgNdL7r6qEHftuutcVAkdDDBqNa3mhf8JwocA2szu4",
  "key34": "48f44WrBVVk3U6qv3eudSVcqPurgA51UVFwsxk5B16BxgvE8c1WbMZ4tVNJHv6tyD9RtP34rkAsG64D72Mf4qu8x",
  "key35": "2HKZYN7TtQqjnhioPqnh3SEeKtTVB2PfthDPtqgQFhDJFVRWK7QqCUrnAapH1AvkjhM7TzKsMCzRNXfcX5ZTyCy5",
  "key36": "25DhEhxVgzaSpFbCgaXKw6WT1Gar2Y75bxadJiNjDvNW13MSbRZqRavnRGXKVNmZF7XEQF6MY6a5S5x7jMfsHs3g",
  "key37": "nJqpYn82Bz6fxpUdMvT7x1oXhA7Coq2kf7bQSn5Xd7rB6CySwTJfTCsE1DaqtZqi1S6bi3fYzFXJ82fwvMj4QxH",
  "key38": "3mTdV1EQziBuirRFnNus19N2K4djfHZyrJ2bheZNv5TRvTizDnRW58TtrbCtmMoG4N8RD1LQxaiHkLduBHtZXvDo"
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
