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
    "WvvZh9JfKdAv9LuPMK43LmFjtrkMkCbPUSbjgep3yzoNx9P2cRzxaSgwLe3yNCBsxDoRSf7rX6XMz6DMQae3bgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47CmFVyfaSBEtevEfd667cQUBWFJGL1xb12qgCg99mRcAk1VTcPNUxyQYNfZJtkTCCNnhz4nXQ7hdJeb9U5wwtmh",
  "key1": "GEuVTBzJdyzS1pjoTzeJe9T9iBcJbjr2dXDxuWQjt6vR9wWu48fCuxJ3PxB7CuLpRrmwn4DEJve8BX79KXr2kMA",
  "key2": "2GxMj6bUdhXzMARVxZPuoWpiTHkTu4wZhsMbxMASd2c5Wyo9bWAd6FxdcHiWJkNYvKcsDZ9XMBfpHNwBw2Jekqeb",
  "key3": "23NztiGivVJh2abHunVfULsDH4YUvWgBr7Ah7akxcE5k2HbZVXZ59o2qba5hof2HwaQ2DGJENWX5M9CRq8E4sdcS",
  "key4": "5FWvPjS5o8RXk9CWntRjozJsdGzME4zvvYgvQ5rTBARGHvXNdnU41K6EaKnTGqpvmMsuahdPhcpm4v2HcrY4oPY7",
  "key5": "4XVFZda2TDTu9CMSJQ4QGtf8BAaLBivpjFLaSb8Wuq5UbnpJXk9YZyDKzSDguCeWLZBQQty91FWVVqjdh2ncua5R",
  "key6": "4agno1MUB1iGkFFefPfbUzaZtEXUCsVcuQYAUkCru2fyajGFmeJa9W6YVfujSEM91vdgVFKhd2AYGYZVoJF3Fqjb",
  "key7": "2b1dDgB8dfuYKDNjPci5Z2p5nmKMatmPZgseHPxee1hpSGTFNUksa5P4BMRrYqpKcaw4yb6gvRhtN5ANMepQNmYE",
  "key8": "3USVVi3zFvwJy2M5XbiXCYMG1UPCzHCPpdERXdWpDGVVJCwiBVCZG4emh6pdSJTHPXRtr98jRNAHWAhbrtsRc3ec",
  "key9": "622yXUESR3CjRoWV6xYSBqmt1vTiHhfFHYK9ceu1DMiHgahKgGgSjd7jZyFjrKpeemAjXUXFGwgbBikNHvyvQcTR",
  "key10": "5KVAJ2T1C2TYCWXcpiSak4sMDNYNfgo1JrHw7CbajekK3YKgT72Zc6FY3mjoW66Kqy32bdBMoJgDvwPiEckUcu85",
  "key11": "4Lo6jQ1HMiswUunbHCU1Ty1ErzfLsJH2BdenuSczjQNoSfq2yqsosF5ATnMXsgVXa4bMkgJKmfNpq9BvUEqeCy4e",
  "key12": "48diUs1BxNeFD8GUe14ezQdCMk1VNbxmZCck6BsMctrFmXpv1YAQbtcvovyXrVFRE6jMRaAgSgy3CsjNbZf6kbW2",
  "key13": "5VVkcmbqt6D7UBJ1g3F7GffE5ef23K9D5YppAK9huYiCYNqegmGP5neFgFBUEjHNdxyW3owaSYkm64EQ1MoBrHYj",
  "key14": "5ZUg36HPAcFKbiNfUkZdhryHLpHqUBJpJUA7YnovafhodA7A97tffRvpAZeN3ej6VJvHTtVv8PosuJxrgjTvE2bq",
  "key15": "5bhGURwtv2VfXcyBLittTLmiMRvACwkGN6uByA1H1eY8RjZa7EuzfRe4XcpdMmLtfNA4FuFN28acYPRs8yWpFmch",
  "key16": "2twRGdT13MMtfFTsog181sCkS3FDpy47YFWNhQ18RjMH7ckNZV2JmmwjpzLugkrAyaYLKmMuuRxiwekN5fBQhU7p",
  "key17": "3ENg6RyBk6Y3N74H6LcEaSEnddJm5bPWeVTgWNcPyVFFPxSgaqEXP1nEHBD5QFibEWB7WVd9PSgSB7QQqV78HsXb",
  "key18": "336EffVPycfkc1ozmwhdgQQrwFdfftNqrDhdsrczgogUHS1cLFVMqWzXgZTEK32UJmcnF5hm4UPkvr4MsKjZPhhH",
  "key19": "65XDyZorctSfUWnJhRegYHTuB9ttMaAvAzB7bv3x7kEjSkBd9hNKP53JjMqLStyPdKDh9TVd55SUqG7wDnMBr3wv",
  "key20": "3NAMLPkCd7RXD7iiKDZDgoPu913yWnuU4Y8QEaH32wb9T5qAfWu7p3NcqVrnSi2mFNaWYWXvgtFx26U1Nrn7zs66",
  "key21": "34hZMYaVYo1e3YuZzDhHR3t1VJifLURy3zADuSYs7iM5ZhA4S2hLMHMJ1KrfVLVGmxiLYuvREGCC5ScS1sfV5e7n",
  "key22": "oE53jgaCgExiHmn1cMTYKRwYQfCq8VTxBZAnK4HbMMhLo8ynJbwwuupDdJkA6jvjtYZab3rHRBexPbpKwrWMQga",
  "key23": "DmBpZMMSjKYQXRnpMuZDPQyURCV2UjTquJ5ZFYVWBk1h8Qr3LKWZWNF6S5WDWSU1dvq2efQ7Wvip1W3Q75VwmGH",
  "key24": "4p2XvDjQmHfFtKyH2uZNjSWebKUpSNhuJZszWiyXW85hfkr3b9qCA4rN7vntjivL1tLe6q3uhsowvvWeMaNPCZEH",
  "key25": "66uCPvYhEcJRgoKuKsYEPQkV2QCVmDQkgDLYH2yo1PPQR8nKv7pDskPPPW31Ctpr9GGHdua9xWe16xLzSNr8WrGc",
  "key26": "2N44NivTnaJJSZKG3n8t2mSdpTamtsHZ3kkmSDzoMoEE1A6Bmng5zS6drCFBRJMwc6cSz1WQVT3mjw65iBkXhzqY",
  "key27": "4kwe36pHztS9JhPZ3v2pdTgfSNUYkk6ytVCYQDcTq9cB4PGmpxZbX1q1ckZ15PoNprmUQNi4PX7kQAUKY3Mrif18",
  "key28": "N4CbPB7Aq4HKZ6bhpUjgbLDkHmzLTkt8yHibioPXmP4v1K99JmtTob2o2ktSGFfUse2yeghJbjKkfnaCGJ5tuTb",
  "key29": "2pp2vBtJhJnvmwhurFGQyq9pukScXecLiNvPcUjd1MofWYYgAXem6qqpPMFDg57uSU1zoDFBT3tXBFnszRmzPyKi",
  "key30": "4qBs9o8c2tk57QWRkyTta2rnnCLAxkeqhwtYHiEDbPFgXX1X1vLHHK2kMvYGfdhQJyg1Eju5HX6igBzcZZaNehdd",
  "key31": "2vqZ4KwnhPnKdW7riXTidUTtmbzZoULh9C8aPDVCiDjMc8Wk1X2BvmnXtFsXqjkXZ4YNGQZUtHTCksxYm2tPQnmU",
  "key32": "44uWFrS2kZXSzqwWgyDdZsWyv8vNtWMgo47BZDMh6M3L1oxkQ15PU46wN85HLfkYvuH38aUChVAecA8eiNe4SuQb",
  "key33": "eL8ysTYNzBxRYr5pPeeBJuuLfqChkBfjAHqbe299kDR3Euy1rtxHNNWn7HJYgCJXsmuAiRFzk7XSSsFzQLTzFZG",
  "key34": "v6hSfeH8qoUNK1WrPGVKtXF9DALQiUD5zjdKYtjGZrYN4C9t7Vp1VriryTW5VL376evHb99vfD9enBCTmDQW56q",
  "key35": "5ergivFg493Te8QmLMmtxrLS7UDJnbWXKmQpTzBvUEMoJBAr8FC8JGtawQEySbwLmgSBE3KFGaGBCxtzaUEtz6Hc",
  "key36": "2x6xHGCCVWjJMagkTGnbuMNL6xFx8SDCZcCih6BV454FfSJgNKBoGHGL9qJtm5PsQQYpPSMbxEVxMLoceY113968",
  "key37": "5QF4twGkCXqpZ3EZZhDyq8Yo6ZerxHgCnZp7RgnTAxqKms29yNg9kssCqsvvFDBscQDMY3BmZBLdCynEXpesfnv8",
  "key38": "5RD9xfbouMbCtj4unJzo8F3t11EoknRAzB9sgK8UBLXBpXjn5sPfkBLDbHycYQrKAYXtweJKdwAoCXPwGxwPHjcS",
  "key39": "nzMY9Zug52vQLV9w8vXmno32GE46wi9Pn4DdrRs4aae6MWDMz2SkGM5LtmNfxB1cLrymb6kegt38uc9bw14FZd5",
  "key40": "2ywDD5RwT28FLBbBoPHeJaEeKW6WmRcnBLrjBqyy49cLpYERrUQMWpBuDLFZx7ReJUA3uKAHD19EfBzvG2eDRGmT"
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
