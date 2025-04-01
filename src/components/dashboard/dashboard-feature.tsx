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
    "XmqpPpVBKUhS2ojMjnWYYXjenjQ2YvvWhnDpWojtRtbF4PiEUzrGPG9X3UfhYvS7gBiJDm5k5eCjWDHzocqNGY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yTDqoYpWJ7oWYA3hRBgX8kwm8rr19uoP5mnax4hTCsife29fm7w8kNpKjhVpvs56Hg2DmJoW4YbRMCwM3aMD4z1",
  "key1": "4QFFiD6mdSTo6HPLTW7oXJL1jCGcSezT8bDPYNJ5oNbVqLsAM2v6zSH4iL8XYgAhgqmNLf3AETSF4nsYnQP5xQE7",
  "key2": "4xRxJvWavM6MUa5TqPQpsvvg5vuu5fsqVvSou3aMiKFydeuWuiLXXqEtqqnSgoBwdN9im3X71NkAURcFHHrowJH4",
  "key3": "2koqtcmbk17Znkip2CvVpfkSjENKBEMJ18oGK2LCp8VqYpghFz2RWZnspg2ov9PszmU4rhVK4yi4kJiwXmFrCJZU",
  "key4": "4wtoQAeqMSnYpWhL5sD834y7v6ShrQxEi1Lm1kZXUJFfUshRYFuNiNMTjuGSFHQYSLYSuXger7jn2iZ5Y4ohJ9CB",
  "key5": "4ew5J5WyrZTKkTVTdEuSkYwnqft5e2HLNDcoUPUVdPQX36i6y67Z7rcEr6whMaKkhJZEELbfjqRff4rwVgWSbkS2",
  "key6": "42pGHEV5GhfKay1wLKTq61UZtg1EPUqPoEmbgp7PFkd5BwNEUNgAogMbhiWM7ToEYYumE1X67LzViZ5o3xwfYsyZ",
  "key7": "3mBjTtvsu4obR6NtH8NHDFovBXTgQng8QoN3b4WX7h98Snt3r11hdHhiEbWwYtfSPsJzQrSL3xKZGNEqCW8SBQrk",
  "key8": "5x7q566tm5iquXYS7Uc8fkXGHjS1dV3HTffzeBrUVRD5JrSDd5mBCWbe8xX9cmMGfRU8Do53PHT7hrmK8r1THFLi",
  "key9": "5LMrDytNoVPagsqADrmcuM5EWhyQFg6FFykCx56Bs77Z6V3bFAbQzmDUsJdpNw8LDkS9Cgdf1eCYrtXNrJV8tksF",
  "key10": "4mdxKZYKQz6HDEvLFysgm6PtZoT2AxyASdyyFuCAJmTn7vEkKNnm98JcTLctY4KNnA7QpRBdYKzCbB9E6R1kmKQY",
  "key11": "2jGq45wBoxyXTzBByGrzfVDuVw46UGCFdcmYRV7trCFP9xixhfAkn7KnTnscDa7aWMUU4iWcHY1nvREGyihmxrYb",
  "key12": "3Vumcx5q2r76BQoAFNczCzBjNjkuQ4aQYduSM6Gg2yhWtDZGYtSGcYWrUVatQk3JRTiRk5n9McZm2fnxMA7CLpGy",
  "key13": "48Tia9m1dkbBFMyLa5ZmMaM1m2UndxYKskDH1dthD2LcqP7uof5WsfH6cYxYd4v2MBx35hX3Dp9YxsHqkHdvBpc2",
  "key14": "2QaLAw8xeSaTZFkdtQTzpAANjFa5WHGnXf2mdvuy2qEpWG9hkrJp7yh2jbyuy1Z4zb9xVJGy8RLwDG6r8Jfritke",
  "key15": "6eFvFZ9Bh3NSo62uiPuSVRCJad7sUP659UdkgX7aMyo6EK8NBcSwH7y3BWCyUwTDYtC7vfwmZ1GVfghqmrKpzvR",
  "key16": "25ihYUDyQdU1CM65wUrHEHu9ZhPizWEYUEvnuviMkS2Q4fWh78CvVKTTrVvAVFRpWJKjPrXE8JF5TzfGwpU1vmte",
  "key17": "4NTFnmyHMJjmFWJG5Myhx8JR5n44EgA8U5zrgF62H6fMQZoEo6pbVzsytUB78yteWeHcPEPVTkE7ts2gDvw86QQy",
  "key18": "5JtQjLjeDgbg2bePi77kUEnELo8FaB3ewCTAtADqc8vpvv9A6RorcTWGdX1a2jhvotJa1LkjgSrsCRjRFuyst3AH",
  "key19": "4XKj8FfQ5sMvNohWQ29DcDuWpNfwSPJ1tYhenzgGwftNnh4QNyEB7L6c8o7K4sW1E23kvXLBLTKnAYKHrNdXLCh9",
  "key20": "5UR1pDMWRo1DQEE8HenZkTsQ8y2Qj657gxnfPtmq2No5phPpyLZsDLKbsRymXMp8DDc4WmQNaagztLTAb861LqyT",
  "key21": "4NV2bMtWjKCGo6HJV9deb5Kv4z7R1yLcH6cKmG1QaHc681a8d9yvQdBxcLiMvvmX2BoFCoQtsDoBiHbvA9oU2Y4G",
  "key22": "4L3GAq1Pg9bUo2mSMvw2KcJKCrR1QCS2yozZ8etasYBbRLPQJkLrHxwmcXr2Qt3c6zYp1z3KUnztP6hfibUQGBcm",
  "key23": "4DpctnJkoVErRzZUuyGBTHw2CWBbUMe85ntPRY7E9MEcT3oTRRnxyGpmuuSvJaEgQLPQGNDWYeUJ3e4TUYVdehJp",
  "key24": "4CqqCVG8X6sjhEyFtJgvgJJLCUYJgu2XADuoQMpQZNMmcuqN4Q3WD3QiefHTQECqzdT1RpxAqMn5LSnPkFZ3EHng",
  "key25": "58zpSEGE6HgRJmnrCr27EaPeiThvdUq6qGN7StDhHiYfmViJkqVKMSj6D6F8nXCQKBwcBhcAtqZgBj13fgEUiyKb",
  "key26": "4oYviahmbSkV6Z48umEFr3szvKLWgrUFRmyFC8FEq7hLeQtEzZNr9ta6yXzfjw3VATKa67H8snGPd6FnFCmNwGMk",
  "key27": "4ZJfcqhmVAriWHr1oz2sE8AFKtqk8fwbjxPmwDwEAeBrYMXSRv7EVwLZUrZC2WHyQfhQ8dMAeEQHX6t3h3H3qmcp",
  "key28": "36JMH7ZKz3da1sfkuwyXJH1tibYucfN3xqGMKmB9F1qF5rBXuC1QGtW5jNSNRGvzT1ucuyHM72EXRPqdE48mgCkp",
  "key29": "2pBSz7Yzf6aCSGhTbQfkiHeBPEFjcBDZrynXc5GYSZfySoDuK2zv25yCdEqi6fdsyDVNeszdkxCyT4C9BzLfQTFY",
  "key30": "4ao8Dx6CYrpMpmmV9ZGxkcbnXWVXV1xwA4XBZjhaUHy4a7HP9cVfKJQfL3WEppUpRJT19HXXfpKmvKo2b2rCwa4L",
  "key31": "4YdQyvu8Kz4BSgSdZhVmPAzBqLPFjiQDnwgVcRB8EzJXmLRuykBuH58JQXnHaWDfeFjnaugVhdpKkbTNVZrU6xt9",
  "key32": "4FD6KkqRUPRX3VbZ58pBjrgeHUHeWucNCzM7Q8FdAgApGTM2Uc9j9kdo9yg6GXECbsF7LdFFzkQfpCKyNE66P3Y2",
  "key33": "4Bxq7WiSmAvf29z4pAf4sQzLLhfFkFvjbEG9mmZZVPrQFPa4PortVXQBb4EsbyPyG3n41dHJXjePoxMBga3hXMcc",
  "key34": "Uut566HKUQu9FCjcdWv5oMrGKP59TXxd8V4972K5bWZks6EvbWL6mr1YfNU45oXYZuYGXoRAsC3Eu8jqjMd2KtC",
  "key35": "5AkYjYkwa8xPnfYSRhJ3WLqcoMhKmKgNM9wKQF165zHPHyQzCDsA8C4ZVpJLLkPnNcVtHMPzkUjZJkeSpdL7DKQK",
  "key36": "56j4hpbFrbGjyfSgDi5payKtvKQQzpmvhtD15C4vYxiTjGptFhS9MRmShpaeG6rGb954QGPsDC12cFP1vEoscYVL",
  "key37": "5xhcV6NKdngyEmVkLPEizqSiGqEscyGT6JwuxtyFTQQnD7E8AxevBD5C6FuRjQKc9ATdv7uz2SeAZLNJN9cEvLgW",
  "key38": "4c7DmtoLRUdAHbqrMqRqX5zVz1szW83yDjDthZMWHB12BgywthfzApwYCZJdf3eSRiwz6PXPFkVzFgZN1qDZGz1B",
  "key39": "5JZoEjtTs1LhowxQsTbt9e1ddmGU6TGzw1ewU9Ms89WReywJbpa4fepZK1srdkV641sfHtE3nL3GpSZxak9icB8e",
  "key40": "Wo5umsmNcMpWV5TtBo3GNfKzNMqY1dx6nGpDsBheVdJPRfZg39tTDdjMNpmPVjXdxZ6vbv9WH8FqzeDGfD4HxCW",
  "key41": "51HEwd4MdnapjPHfpC3ZQrZor1KuJkVgm2Z5FBQL34No1xa5VNXkj8yXHXintevAa3N8xX6rcnCqWobVZQSAbedK",
  "key42": "39FSQgQHEAXo7vjM17zb2ry4VWwionT4fWdWKRRxNzU8ZwLVWvaADyQNxtYL6Cv3DgMjXT9HwNX9RLU7PwFvHu51",
  "key43": "59x6SziP8sSvDiYEqnLGupGddBSUKWYvwXyaEXQJcJN2EtvRkNNNz4uV67Nze41dvXuamogfsoyWgZF7BrKgyYxZ",
  "key44": "hn423keDg9xdKYCKXCNtgP3KdJx6hu6SvkEqvN3m6s8x9cLdy1YRrMBkkXz19Lx17ZyAUN1Lf8UFPU4oXqrwXgG",
  "key45": "5kLq3hNmuMsMLefR4bE3zKMk7me2PJu6daTpaSzAFyiTiT7R8tHRJjcSjfsTompEuZVvz5nxN18KvbLsajiesMxg",
  "key46": "4X3hyRudzYkxxjA9HYcLhjd5gdkwpNJF9NvdNPVb9o1rfyncXwYAvnF9vzEnxDtPSFS51XDTgtm3nY6dqfx5Fqni",
  "key47": "2BAVXL7izsmmnXCMKJX1KPrcPs6PJqL23B5Qh7tUCxEyGMQELYsSViDjiE2uKD1F7E77DbYv8LoExJT5Lpk6YUtn",
  "key48": "rsvDV4ErhXEP82W3jtDfn4Gd3aHMLUFkDxBYZxkTjXfvnPKvcztEt9DdL4EfXVsiBuePEHzCzspsDwKvjHSnHqw",
  "key49": "2BXjYczcw6CN6dL3qWabUZMsxqvCFC3LHhosFedK3fP6q2qPr6cpNaw56WFQiNoSo1E2DraAszApZUS2JpFDUPg"
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
