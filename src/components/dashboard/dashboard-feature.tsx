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
    "2PVfTZx7EMchbBr6DGDVFNcEXYYKST5zN4MnZ1AsMPka5wM7bQ4tjDnWvrYj9h5qufHgPQ6X6qW3cE6BKKTqrcwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VqJWZH1J5VUKSquC8EEguHXGz4ezie6kbgFoWymGkfKdRCWV2CWrYooqH4Cnjyd4d1kokKnBGAU5Tzs2HqgMsrB",
  "key1": "m5PRTXBzozwBCkHLTvUMBSRSMaGpNasXxy33DBvGgrMft8wnNrQLMYLtk3iwpdawkzJmWPcmLrPdpQmxEjZCfWA",
  "key2": "4T4Ys47xhWSbYUbtsKkzdafKKTnerg5MBv8Bt7Cy3yZqq11sME4CQwR9KueCPN2vGH2cqZbiGBUNcATm8CKw7BAK",
  "key3": "5tJLFBLmAsTXLEDqHXtmDP7Rk9gPMCwEBbsxmDNZNXoXPJVKGu41qn7ByHtuZ5cFukjh6PgCaqWHrA7caGkWvzXg",
  "key4": "4MjusZxVZUMop9KrkmJP2oB1d1j4MTTmex65hsjjxgfvCBMpNtmdYAtsXRzvxLkG2YcRh7rc3kXRWKDTDyfA2baW",
  "key5": "4oFgB4yQkGwuSvaHwdEQRefVZZoTXxtQZZ2ag2nEDPaW525pUoqeKauj7b4JNRM2fXTofcmRxbxGZqy97ZUCnA5R",
  "key6": "5f4GtLvtLn5Jx2iMuUHhKLRfeaMHNAMqnrPq7YBFazAVmD3L8E5M4zTfCS8SiLpauxNRUSNnHdRDBp2xmN3Jmzkm",
  "key7": "5mbTXAGzpGD2C7RLUZtBxYBZbfgHNsuJYyCLCw2i8h8tTbebBieVv7eiEZUfAw1XpaY6J9SzvazLmd4dCeeCEEhS",
  "key8": "59RfR4YXuk2h78ykvrn5T2nJFQrXvLxjWf2GBDQ7HkNQoiuUBq8hw7U9nfgTexgkPcigMF7K2vvMeAgTKE4W6aA9",
  "key9": "5VczNYs61C3sYf3qJpuDknj8TWW5QFpuqqLKw5wsVtmxnZKj6xiUjFKgepjM31FayrjSa1M7aH9gAfeFUaMuMzG6",
  "key10": "2oAxFvcNYLYva2PRyEky6p1TUEBifmjWYcyWfrrkAztnfi2y1ZZTV6C2V8b19mpGKysDYtbvrV2ZdgQEufRRFMW5",
  "key11": "4dYHcECE5YCkdxBGec3B5sdJ6kHhgdc87F1Jw5SAyDsiN3wJ5mquaeDBiRnnVydgrqYqmqdxPgkP88WpGi2HqHQv",
  "key12": "2m9geN74oD9gHzRYFcXGNML5TEFZavn6NfM2NKy6xuBXA2gQaWS2xxWCczY3HrtzehvR8VuW7GRAX3HDSVDAn4vj",
  "key13": "38MRgTtWFwc3c2BjMHp9v1gfHoDnkKGJyHfGR7kjcvFiJGXwqmKbr3TcAXkdwVzP9WmBf7hcCmUh8CjyU4aGDEGm",
  "key14": "2LoJ2ZzySu3ByKguqbLVNorVoMQNdC7JefBXsBS31PU7qiLKNDD1HgJLmWpjdiviPoPBFrE3wE2nVYF2B7i8DiXe",
  "key15": "WK6Ner1EVdGY2VXJ79yrNXq1wTKfsFCU2XQcWG7hC7SPpbs1RHSVRLUsXMPorKXgE32TPHSvoSZTXjn5Gr8JZ8y",
  "key16": "3Xk2BCK2upwuMV2JssPcHhVTrq1nWTc5AXSvYLeMnYzazafnv5yvvfg2Zfq91iM4U54ySCPuKEDPU5ULyrwNJpNx",
  "key17": "4qyRLbqBJKTzKqzUAAp8XQQWiLPg2repEqPy1EMye9H6VoFfj1GiY73p3HSdC1KYqg2yrxGMvYtJJZrW5r2RhPE8",
  "key18": "2hTi5DcvKnuj7PNrc3brVRRMy5HZNjb5hVoQbHyx571QiDy13EmA644abQ7MSCSSmPdenmDebt8CdUSxqLLn5Q9C",
  "key19": "ex2e3hP23rhYcjtTPCrU8crsLNrbzwgap1GdRgyeCW4PQWfT6DKSAbBga2szrUGJwAzktra1edwp7pM17SYWHfT",
  "key20": "2uAy8bY4xRCaLwfdF31gs8axjfQDJyr7oeKxEAAto1oj2PeTGL8NjUe7YsXqUeZYFFWioi5aJqimQuCrRTeEjh46",
  "key21": "3yAt1wNUpNRFwKKWGxH9PUpCenxRNCDBngvgaGv156Rroik73HKaCuAUvhR7MU44CfsmiCXmtx7b6gUJ7EXsQzpi",
  "key22": "4CtZ1DLoJsBKnHUcF6zfxE4NoLhjkrb7oLaERvLB9Avkgi1jY2eyUy2HSbohXCadkKyaxY1uqx1nnL538VAo7imY",
  "key23": "27oFdms71obisB23eMLu57zwQEecsemXoKBZ6L4k4LrL8S2rGkTpgEynMWvEzirjdZ7C5ZyHpKz8vJ8z38gSkgyR",
  "key24": "3x4teopXWtbMdBTFZFAGAUmqJyurZfXCY9iQBAymm4ttXycQxyYf9U4ncWEgRrHFazWRA1mUTRmTftecrSkitShE",
  "key25": "2z2N1eVDBLLnCtZvoxUKaLvkvAsrp9a1kw6vau64vkwk2sDcHcnyhfkviV82wyBy3yJoRzGzeF366Dsu1DQNgmsA",
  "key26": "34c4LXEaxQtxpseXbq6PHWi38ggWCS2kzp7G78mh9fyyGDxKjDENZNETVXXDchbSmdfsyLA9k1K5j94uEUoKduJj",
  "key27": "2uLNP5WhahqWftRFX4KU8gP7CLnxDnQscgLacsR7S6Q7MruRrTzVgxqCWxxRdmHPZBkEgUWUizswwJcivHMg3kBu",
  "key28": "5hTUVdBRV67Wn46XUH6pPAp761WqzCkAUbkZf9mbZtnB4CHdWPzUHM1gVXapov8GqM1ZqCkctpYJVXusZYMekx9e",
  "key29": "3Tn34kWBREM28BGjkzTeHC2uUbGkrfoXST4rAJ15WcneT416DTpSYV157TATF8BWc4E5MLr4krYRkzQhgdeMjEJu",
  "key30": "4rVx2gZnrTTDmHLP81rETJHvnXERoghdVnKkEvg4z2MHNNAfKmbbNg8mi9phTJjkn8nqQhKVX9hVo47rEyhCMVwA",
  "key31": "4hWjuvQKXR9vfhWptB5715y28PGWGoKzWtdyxHkw823jkcUhpEDFh4v7aC3jLkeeVpVSS4BP7PJjER18ymiQ8bM4",
  "key32": "2c9NED6R9Z4asBEsyj7TENB9mG2ZrfVTqtod1uvzJsf87ig4s9QxxoGwhmjLR4MyWMygrAh7oYahq4nyLCng3ZWF",
  "key33": "5wowgSPi44Sc3GSYuuuiJBY3qx11kepYUFopu6nrRM8jzrM9N4oJdKUxgwAiZuo6wGGgTeN5N2JFT4YPz594N3zw",
  "key34": "TEyhKnWoPkdTVYiTPfyfp53cmoDRTVQbp1ENZwhgHGiVDscxWhHodmhJW1dcTG9CiQkrRjxW4vjtdWWVGFCod7v",
  "key35": "fLvEFoWt88KoxspGxDqkXWbAjS8CNV12BexX2nbx6cPcswPL43Y9tkrcpSZFRp4WDKSV1QDogiRvQHmEct9zvMz",
  "key36": "5eBqFDM49JuoVCP8hPAcHwRw82198v2XocAxjqd9YHExaVYq3UNXPnn9C4v5mn6ARUu4m7Y7X4tz1FXFjFWG5Q7d",
  "key37": "5Jha9UnU4canD7YT2HCeGcHx5Mwp34xgYSRe839uHTX3whEgWcUtcyXQaQF5CvqEzbhkheFKwPU9uRNt9y2wnNKe",
  "key38": "5dNNVoriHmLCncNQ78UfS5C8M6GiJsqYpa6e8XrpuTomqYiooK5WdbAoohR8uhfRP8dHPKLJLrD6A874a6deF9fV"
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
