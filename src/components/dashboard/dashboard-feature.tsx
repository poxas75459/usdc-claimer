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
    "4WtqyKqLvDTsWa3cPiNuXhjQXCUVwCikeHvdZ22n6bttDZKPS3TrtQhNvwpNjLxoJWyDnLkbz4KbrUL3NoiNd2uC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23at9o7ySSzWMy5qt9SMXHcfTpHb4WNYjqjMPpA2eBegcsU2r36KWsknbQJDrLWjnVkEz9Vi9QsLLA6YxnfVojw7",
  "key1": "2a3YNYLQaeQ5rMAQGRE3vteDGTtpWRAa3xD4MKoyTSGNy58MRfxbK87Lxu9xwZBoHJyVVxNBfjKywnPrcPD7GL8J",
  "key2": "44vARFak9524H6WqpTZyqjKhd2xi2rNaLUsjLDZqSCrU8qdbEbapR3pJt1RDoVxSjyzAfy9hqbKYuGuc3EcovDnH",
  "key3": "LpJkaMU6ZRmUMCFGANjQbbh4zei1vsgQQaVfjDAvettVCJq6j6gvHKLSbqkUu9e9QbSpm7EApXiVJH6HvPQgetG",
  "key4": "RNJHQ592Cp8RWXFQh9PuHtCe9GzAXJTEmuHFfNhzpFU3mqk8KoU9r5LiSxCutQWYzLd8QGvzY7QdW1AZMnbiprs",
  "key5": "2aNSsyBTQqd78dvkmH8y56vZrJC95QWriXCkv4z5o1w7ndqRiabXdDxpFhahMfg6BSaMDTk8uxfTXDWRtce1L5ZW",
  "key6": "215yEFQSvLS3WWM2sYZ4LPv9M5xSYqvq6V8Uan6meMGj7jG3DgvWSm2WZWYaXgtyNJrrUkVVHAu3qCEHyHiN9hNA",
  "key7": "4vDpFstLaLtygxE7c7WSQnHQ6MgTVFSmuGeyj2LFHAtijYxybAr8n6mgHmpNeRg5x3fjR25P7WqnW8FkFbe7h1vB",
  "key8": "4XuVPzKpr5UF8h7JsgWoMNJkX2habeucaov1hmVJaVjr48qpQgbn6fja6EX6ALPmR3RxJxQFGpKHnHfhAyrPAuXZ",
  "key9": "ZRzG2c36m6PF13aoiouKtbSJ3v8s9vPUhGUQfngQ2RjW7mmx41FvcKruCLfZh5PCYrXZVqyqnLhCFQn3FBeBBM4",
  "key10": "2zifb3rVBQAPiDb3Sm81ETcgAzgJ4Brd8T5V4CkpGQskcRnH73SLEX3rEySCqkgKfSu2DMndEXdSdUspBRTiS8x1",
  "key11": "4E7HzCbAC9Qdd9DSEQ2rGNFxCVFmKV7vsWc7XKnRF3KpM8hzJm48aGy1P7zVKEfUhNg3wsYcQrJZoxqQXuEYP9YV",
  "key12": "8ax9HMMbrRwTNm5QAP9XMYgXwE9Y3ZY8Myd6oS4X1DvAeHUYqk5r9zeDGPDxVSxHr66qoUf8oDwMQDmmykXWr2h",
  "key13": "7Ae7iXhEtSWDJ9GpLehNQGbWEuk6khTLc3YcPbuVxuGYKhfaAK9e2U8T9XydPhoe5JgCrTZ8gtWwrpxxPxZqkT9",
  "key14": "2edzke2nqshBfAMjNkzMwAvJPayQYC5vdsj2VkhnhBqBHKLopHxeaXXSqVusg6CUFs2Nh54TvtzQGzgKMxhZdy2q",
  "key15": "5XkLqNsMmDaF16Q2hhEgMc8EFihfZUq2KYPuDA5iQRfRGAHB7viCG1eyxdW4mGJchCQxaU6E23Ttk3NcjsTdEAp6",
  "key16": "4DPB4gQSppmCDdEQ8XuchzcnNSa6ZSNzqbKJeW6p1kv2A2uDDadtDjf1KVezHdeZHJwApMKMLYQQD22eseMgzWoJ",
  "key17": "2TL8iHXuzMuqc1KSoxPoXroj3utdbqkGKecMh4oPkiHDNjVZEhfWUqR9Xdvr2kQNQJMHps4HGqEL5h22vYj83h8F",
  "key18": "47xD8ENaS28nCTSo88hkUBnMNCbwSXvri4jwJr8anFyNQDQq4xMTgoTcu4TWnrH8ESABNh7Ck1Y9aua9WYR1bkAA",
  "key19": "3tA1cbgQKmYaEa2LbeEUBVBKujDWTJw8Axi4NwPhTGGQzz9mxbXi7813VS5nt6tqWm9mPgqcYwBv1Bas7yksjvFN",
  "key20": "2sTPys96HfsughVjkyzuuQnEedQCNMN2fGaSztZQ5Kt1uP7KSayBUeUQcEvyMdetFbJfQkfBZa74Z94HmGFVWqT8",
  "key21": "6RzNMy5bcN8BzG4N2VyT3WEdY9zzYFH6rKDjuG9oATjmuwE3a6ovdbmPHVhA88tAyRVnhd49yLrimXMirptU3ZD",
  "key22": "4L8LX6e7xpdhS9GeJLVs7VPpx95kLbH3pfmudS6GBWEFKhaHyXEaVA78cvVqhY5hos7KKuRtfR6HGcbQ3aPwYFSp",
  "key23": "2dfTVKLkrU3f1h2fR42DMR3U6d4wNAWjmWSGUz35mn8CXyTfDoDDbyDdwMtdNSm7yf82nGMcquNE8J9HKPm2icyS",
  "key24": "5yoDa2iyhbv1MCScjkNQ79CjEPXVkkA8xuvs5D62Hk7jEuNYs3ukuLEswi161BxNcwiTTBnEZVb4mLKhwd76PNS6",
  "key25": "2vUepoaSJKg1b5Z6TMSHhj33YtXRwTr9vGpC1dcz2bs5G2ANH7nKPirRXEXzwThEr6i3Yutzoeo4zMuaTbTwyHwK",
  "key26": "4B93iLGPJP4NhjcbKPnKnbN6kLm35T6t35fV1wuXUdNJcGReP49nz5F7ghgdAuAtTzbtqkdHmybQYx2BBoNntzFz",
  "key27": "3xqxJ2k98GeXwA8PJxmRT2oNqzF6YTrv9ezcUjRtb1QiE6VW4Aw42ciBXoHtkHzciExSTa5rJQU8yqLDTdKffgjQ",
  "key28": "vRc5d7aUFg3q7pB72btEnBXR5ZUvnAkEPHr6jKoCYUnyx9JRx2Abwek73gj1rLXiuQy2bWbzvCJE4anHHEXMnzk",
  "key29": "2yqVTqwVWGpPdzHcgbqQQnX7wXiASjdoxdMDLy3Lw2Ym23z7gV8e1N1GUE8TkqW8t4mrnRzE2kaBTPuUQq4wucSS",
  "key30": "5NSwF3dVCiJdxGQCSyjDLUb4fajXiCJcNo1AciyJ7CZp75KaFAadFf75Bx9Nmyu7CuNQT41buUNRsSHKCYqH9Wxi",
  "key31": "esE6dp1nQ4fZaNpXF67rMZ9zRV79jh37GyXABkECz4hSR4WVkdKCuXTgKhCkScNv4QG5Q4JKZWRGzS24DHbrSDU",
  "key32": "3S1ts6vBox1B89DCGuavRhE7GLZgk5jUEr92u2K66jLkziRVGELSw7VfB2S4VXCFfRvkCvKxbD4ST9zvUqVxW6Q9",
  "key33": "Yq8GsLYbMdmoFK6hWqeGXXA5Mxtf8MSCHM1hzEJHZkauT2fS7vHhZPnWsqRK3xisEbu3B3Lv9VCZtkVpKBfoBs9",
  "key34": "75zeiRzzn8LA1Dj7ggS61TVg2hQt6bCRBJwmwRyYdUBmfcFiqzk95KmBZZtQi5hnXhQmNoTcn7K9wcdtkhUAvfm",
  "key35": "uNBTq3LV89s7bi3zg9EsukfxmD58qjKtahCEk6wmRpNEoxhsMND4uNjzJX5E6SQ4m3FDmzZAsnNcYhZv85vaLQS",
  "key36": "5qywaKeaEW3EmFfUtFcEWp22ynJJZ8ZtH6YVrj31afSLq2yAxi5DdnbNSihM33ixfBeXNGfH5JPM4Pb3Wprptwkf",
  "key37": "FjAnU2xSmfSTCAocoYHPCW43GV8rvNXfRLQW7cZnFrVtTKzgsK5GkSwgECR6fB88nPy8Z89LtGGDSRN6BbzHyGs",
  "key38": "5jQ4CicHFxT5i1Mvr6p3WfKNN5pJgsjnM5FNiRwETUWv9P4Qf12HrJgdZv5KoVqGHV6J74mkyGYTip4gLNbXybdb",
  "key39": "4LPrQKP2m6zfQ9wGgWMofbz8Cr9uNksZ2vxP97R8iPpBWtNUXjKc57mH9NUdzBH9as5gEjzMKGtb2kLa95ByXBjE",
  "key40": "LMerCBCnf766HJuhnAww6pBvXLTy2idx1tRLvUQEKvRyBL3u2J6rJiAYK1a7npD6dQB5s9LVoSN4nhCUo1aM4Mo",
  "key41": "374tJ6T2Goh9bFZkHogXViqRoMkcfbiPwJGuvwHATBEXyLCFtv7PU3k8KMRJkJAkKYF8FijetBjD4pDJWvp189FK",
  "key42": "615DCqdkzD8KcyAxwXsqHcCPrHN36uyop3xVTvL9WZBnmnEivVKVQqMcLmNkLh5ZbyFWd4GrLPiQitF56JEf1KMC",
  "key43": "5nTnBW7sobyUcup4E5KBv85M4eQJPzryTEy4tXtDiktthducAzA12dXtGd2R4J99RMeMBCNQBBHSFU8rN2cm4eEA",
  "key44": "2ixPPyvnGJp7pvYxTSTj6YhVB2re4Sjpot6LqLYQH8cCwiQqmAMqvj5NCJEBdy4xYv4bYSRU1FHZLt7TRqC9z7wZ",
  "key45": "5hDJ2tMwnMuxiaFNnuf1FCwQ1jdn3YsodNLnCzf4osdeBcMLGZEwKH7jzCpNeesu8SjciLEPAQB3bYRpNRaTG84H"
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
