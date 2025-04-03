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
    "4byrw2MMEg2sjpz5sFBmmDSLnHcBAENDCJ8XFcbXnru3UtxHZc6vN3K6VasziTBNuKJtSCnXYoRuW7LiWraZ94sy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D5ep92VPqAHdbagbkKbUqK9KLfsb4T1mmXpdQLkmDfuQYEqJpLCixqkafpgNP9JfHZU7EQhViCEBqrig5bM1939",
  "key1": "349W7mJxrhpYLuXXqrQbmJJq42ZpY7QLB4mnvXaoa54WLaHM3bCWy4miRW3fopqaTpa6pRJBAatiorh1WJnM4M62",
  "key2": "5RxLcHrLjZohAdcSt1SxjDjZHkd84oggXUSiV3wFAeZwpaL1wA5zbqDK73zvfPDXP88GFS6vbYsvbun89Dd4ZS9Z",
  "key3": "27jACF8CKueJDwiPr5yBWpYdwLv7xmwouJoMbD9M8BXYfYsnDXcz8P9GPrZTB2nEFXs6afYNeAv2UZtNL3nD5f5p",
  "key4": "5yNDYeHppttoGTMS8eJApR8QECN8Rmq5FWHjNbKNZvzzr287F5jvvoLpwdkzMGW6HfRF4fzgKttyoj419wYZW2Uq",
  "key5": "62jH9aNvJUjxGr49aJt2iv7SzWzQrwRLSSFpA1YDT8ffmMbDzJL4DmS8gRGzUn1vRro9cPMAxkpgoEKN7nskNTmv",
  "key6": "ADv38NstGnq1PVYD8cZo9zPB3RymrjfnHppJNbYNzLaFyRn6NK7bo625wTf8hiQoha77wtuMHsptzaNwu94GE6G",
  "key7": "4paBBUe5sSzLbTz4u1MGqTFz1spncvZgs57T8jF7ragy6zww2SyeSzn7x91MWmm8ZKera2EfhR1QaiT5mRkqdpfG",
  "key8": "2Tv53q1Dhb6NNkHVvpTa5xLun3t2ki3R8qGmxXYiytB1XLguU6kJqRhNfmq15FuxqKbr6E8JC8w8iW9QWATx7e9q",
  "key9": "4SgZytRkri5oMdwAgk21nXxYTbK61eJfZbCth4BxJTjkKuxzDdPgGaiofREgAC9uWhRfRToSKGtJVyfGZJnpCwBG",
  "key10": "5BmC78rCLWvnCFf2rMvYdbN8SbZFty6wWUZwpWQiRHauyUrBE71UiaDQmWwGn2DGTNtcYKN46Dxqh6MwiHXya8Cw",
  "key11": "4qLZ44E7YNfCG5S9UmvfxbmXuj26CVVaSFMugPNxRQCi5c5P3uhyxHJmTkc8NwuDhsBcHzCEKkVxbmaPsatnq74B",
  "key12": "SSxeYu3o185cGfQxvto2zhdbDzpuMhYbV2uSQdMDjckoViGBoVX59e4v6Me2qEo7yjTGkzVHP5yjmWcj5pUNeA8",
  "key13": "2RVhcQ3NAti3Ug6yMQfB2cEs9ebEyi3fDNMbr5VbN9tDtnVgDL2MogzsWtsGsxwHG15S1dragVJXkcYYV2S8o4Y9",
  "key14": "3MCPkRfCJDLVMc117kPNXsd6epeN4rSKXU3XYu246WsMsxVwPFrnVorzrbv7LUWfUYv7Jasykib2puLXjsMtAeXn",
  "key15": "3pJFSxQgpN6oN4PbpShgrTVh3VrMhGwjWhADYazHcen9DY1Ra43Hsb2xGAtfAUZ2Y2EGsTDNPsvCPNMWQ43fxof2",
  "key16": "3UWr2djoVYM4bgCbaYYThrfH8H7bZ8LNKgFPzwzLJE4uX9YNu852AWNYX8DHAoEw1gF21u8jW4g3cBxCevkazDEd",
  "key17": "5D3cHY2SpyZ6AZ3SmuAjx1GYhdkJm4gN8bAtMLXjmf13geHDn9QxmSkd2YCUwvWVdinprutSh8SpMbUPMdgVTU5G",
  "key18": "2cR7KLQxnQkRSb76cucpzkuZYTsqwb1BN3zmdsD92pdcmprd81H6hrdnAw6QPaBqMQ4ak7SewVgAUHeRWAhtTF2g",
  "key19": "4pFR38xnuVCnasogUck49EwUFzjRxcqoffAyjm4rY7j1eCt2zZrBvVD8uQqGeybJuLfTiNF78naUCFUmAYyiJ8oT",
  "key20": "4ayFyxgy8vSNyvV4E3g7EDfnDjehVfmMYeLgkueBEAHWeW3z7tk6FeARPJ3wcSxfvxyvEzyzH6h8AerRzcbU68fi",
  "key21": "2KKLPKWxTzjap4QvNxA1Jj3dV3JHs9hLaNq6CsC4CbDExp7qUhcKCiwMZf6eupDGqt2HiNNTPA2xXLp7gQTFmvKH",
  "key22": "66cQDka3EmBYrFS1fsYLme1gZPrTvTSSx2n5aBDVVowjinLtbaSiqVR6LF32JtKhkT4kzgAN77x7pXnDdAYnB9R2",
  "key23": "4zhe9M1MeekVZ6xpLrNpvPYacUoxvG7jQDdmGRzDVe5AQDqa7and3t7sXC7nRWBQ38A2LzCm6693wFFn1f3itdTc",
  "key24": "4iaatVg86dTyVpHnvQZoRVYw54t2YfY4CCECq4v3VV8LkXCuhX2P5KWqMrWgu7BBQHLXexuwwapmUheziXA36qNf",
  "key25": "bJB8YYR3BBjB3xZpi3hhThSddYULJ49Uvudb8KqkJfrRtUwc3TPB6s1GZagB53jig7jkyPapQwrpvP6vxFaipVP",
  "key26": "2VbuyXvofaKAgkCQXsv1jquF1ERa3LjLZkb5p19wKJyNowm8guTC2W22NRoq4LfrbDbizQnPYcM6aFKKN2ASN1Ff",
  "key27": "5AkUG2dQCvJwKUKnkgyXnybdJdV2RvAkdc53A7PV6zzAWvMu3MCZGqZBiEx9a2KBZGhxJ1kZbTYY7nKdhm1dkBAd",
  "key28": "4YYjjt2Zznd4WuREV8Pn72xMsemNt9ewzCq9rh1zi8DzZepg1okdB6ZUoLzJPzuJvcRARLwoHXerBzBrHtXqwLBM",
  "key29": "4kAM3dCSRpQupzxBCfGCagB69SCa386Y6tz6UYqwdsxXzEisy6b3XYSNdYhg3QhQWSe4yWNc568pKu3yjXy6fGjt",
  "key30": "3pqk4j5Mmz5ybunybumnnYbvgdFmAkoArfUmJD3qySJh1sh1g8PMLMuFiJf8GWFi6DoCWEXookeZAMu3hvbiwSVS",
  "key31": "5X4rg1t7yoX3ArKEG4vTH9QqBjkkSSFg3EVQ5wbdyDc3TdE264LR4UPaT5uSMi7WT3rw4MvXK3DbUCxTDZTSJUnk",
  "key32": "56EJ6ce3rvKUT1EXHZemvTWW4HnHSrqGzWLczDXNWf3E8yQfw7v8612dHMfwPJSY1MmxCRGsyrtMo2nRfBqTBkwU",
  "key33": "3X8qQBYXyRdP7p5GEyLQZXCQBxWAeu2RHqG9GCcEdrbRHT1ovCiUiVF5ggyR5MnA5DDjSFtqttz7GQ5dJiobmxo6",
  "key34": "3cm3QPpQXhKdzKxvYHVQAjrnxTw7JZH3mGdsCzLsKNNvNcBrPDE9ZJ8s1czNeXQyWMByhziehHwwxoUEgjwDY8FX",
  "key35": "2GHQzBqop2Zdq3ULWE1kYxBQGyxVwqxzfnheXTXP3QRU4M49VzhxmVdgf4WkEE918fsNpsZC8HsV5a3NwnUdK1jk",
  "key36": "3hSCnSyMeKK6g9zgETwWnGqzrpqVanTfgWtFidiZSLpZSVuuyJUVqBEq5vyVdYjmvVJwReEJzYzjid7DMEqiEcRi",
  "key37": "8x6i9R1FcHY5J51rbJpytcL2mQGGTxnxigxeQuBpx5E3q6bPEZ1i5soFFp6tefH6mQJmZ1iZjg46ejYpkto47vZ",
  "key38": "2fkoRm4jqKv5fsV9AJ8Rn7ejr1mLi5KY2Kni8yA3SKBNTgxpsprsNsjQeYVrYZzBbbjgj19DLVZ3aUMKnvXpRhLb",
  "key39": "75d9JPhW7oajPZ1txBPx6kDBnJTtvzpAN3QDd1tbaUhCDpyKCNd1PfzKcnUiBTeHEifQYGy4CoKyXTbD9H1ZWdB",
  "key40": "4RCoTnSrbb9CXbHTi29hfCAfqHcqBTfxqmHbhBK4v7ND2PhxEWEL8RKaniCiaSMb5yMmL3XsqXWEMw9fRQ8AQLHz",
  "key41": "MwhnLcxzK7DporVP5DCZZhZ7EXNF4JEm8zzukcJSjQv7Lyg5JEy1nTzkPyYGjAYfyo91rCFWJP9WaNQu5cTowox",
  "key42": "2Kukro5QRHdYsVKeddegQ1HfBS8bGiHmxnnq5hfA8FoA6wN4BP977bG3FHhnitJQFGku8jR1z8DodVy2jVWrNbpt",
  "key43": "4qCVvgA1mDpuUrdWYed1Mvx5YqkVK39X85xD5CgP7hFkbndRsKQjdEyUgGnDzRuYTY5hin287BAD6huEJKJqte6q"
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
