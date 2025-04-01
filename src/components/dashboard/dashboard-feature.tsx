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
    "4wNmj5Kc8thRuc91j5xr9Cn1HDPDrMY1dd4Mwwy7BLPYcU2bFAUvADuQ1xT4UK7XSYWwjWUx8VHjtf54aMuV1WyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f7YM8N4cg6REqf1d9H6LPxZmcCYTZ7vKVEt5rfMGPPo2fHHtq3UDbUKMWPDs365oV2BjWXx6U6cCXezMrbVV4QW",
  "key1": "3QjynKsw2g9FZLAx5eB7QdraS6kMTMHfNdzTnk7qheBRqBQQguACBkqxBZGycvxtMfmbeyX9bSDbMXY5dwyqBAqX",
  "key2": "ARaHRy1UXbAk2zA6L8PVhuwEZHB8TLCxP18JjJdr4UaYexm3xYYdNTCbRTcJgmVUjVGA2yzArNWt47zLba3rRMP",
  "key3": "7nELUGMpj93PVYkhDGzrcQVrvT2f2WWLutpAMX2Lbm3kmtVMdAtpspTn9uGqnsb9mtE7ssvRLpkqRxE4hZA4qyq",
  "key4": "h5GsZVentkzYkhUWUfJB6MBavqPDuzducSC4syJC4pnf3TAv4BqDgFJAX7JMU4ZfHtmNTDYhA1956HwcKqeGXVb",
  "key5": "4B6z3N4VpxfWjDJVi7cDNNjWkJH5hfcBEJC3LyGjJQ2sff6L1E8LFH7Ma7TGiiqSGJZxsVR4xjeMcGHWTt3mSqbh",
  "key6": "4YqtCPLdrgB7LU7nt7UtwoHjZZzeHmXaQqR29NhsoZzaAxGfoW4ssNjzfKkrhwK3Rb8UyWJyqivTujuHoSD5Cm72",
  "key7": "4JHvUiVPrtqrLb82muK9X8a18BBXp7Ti9ACXwsEVNmJp2PjC9RnzP6DZZUiGGWA1EEUMspJqhe7SbcfWh8tUKdXT",
  "key8": "5m7JaadiH9zpUKj12LurJYSBFhVPUWbkLR1mT7oTQJziyScMM94F9u2o5JzR61gTtRyfsTym2tKuKHTGakExoPWZ",
  "key9": "2dxRhTYdSC4QMtyei2HWEh7qHotQ56wTqUFfg9wJUtBVtvb785443AyU4yfJzHTYRABLUykx8Bs1NGsKj2xZncy",
  "key10": "3Ui2wrefAnWuVEu4THB32egm27UEnHykebqkKoVzy5ut8B1aXkACuqRQAEAfXt2SXrVMpRWg7uZbPcMfL6fJTdgv",
  "key11": "4pni6rMqNhehxLw2cjJ7i7Y7g41X8p9v1h6zA7XiR1DtUrM1rCe9oiExsxt2tUuTXMRDADsZSfvFAoCM82Z5R7u6",
  "key12": "dLJ6QXChDUsPPsqzTiyMmkpbPaG79dqcju1T82astkYRRBURL6Tt8i7imNJ6eSaKmJGwBD2pdEbvU8uKTpfe9Vq",
  "key13": "maw3xdHi1MBGjfU1fB1jhT1X7sWw3fMu9ucpU8rLT3hQCFCYLPxkQtFq3cxEfxWyxHbmwAfHoezHe2vUeXfwEy8",
  "key14": "3w7CTzGZa26YqKCHZsb9GvQSUJF499cr9o3X7bxUdQ7StZP1doZj8HAdzY6LmXHTJdGfw8f3eXysRQCZRBXAtZeX",
  "key15": "snqw4QrD9y3Cz5668QSANk2ePtJRiFr4n4wEXLdWUds8yv5ziTai7g5PTNZHMvHSimou2cU7kdPrjCBiapwtVvY",
  "key16": "2dnbssLUvYz37ZYXftxt2snxZDaknwcgv3VZTddz6gc94d11iDTMyeZ6gbaVhHPG1TDtEvZGihLyLeyZDiGj56it",
  "key17": "2n8waADkDCCBHXWhWVgDipXj31TvR3MovNVy33Q14o1hQ3m46S7wQXtKJhsmwzabBbiTN74ThmGbXVyXM3AQWyN8",
  "key18": "qxh5qoct59gCtTT7FHiFYj47fs9rZu47Lp9zSLbsUdMBhEpJEJsj7xjbHFB3SU3QrGde58E6FeyNQBCFtLnGfAX",
  "key19": "4caiEZsNTKFUoPAkaheLwAFvwhh9mu3esR6ioTPGSfZPwxLvsxQhyw87Fs8Jb8d6NNjdGr3iY3oygrXmhmvzBiFn",
  "key20": "2tntwVc9nGwMVKVQfLMGUGN8GGfaNw1NeGKSTwu4x69uT4TvybUKbBtLnVZkUHjxGiGehG984kKC1PvbBpWned1H",
  "key21": "5ScNFRPaj3DK9R865h9gkxcgfsWvaxhPi7JkAAYsxTpnHJ91FxPuvqis3R1g2v91oUGwZv2YeJSBQeGWLHxAKKsG",
  "key22": "5yBFTAW2UHknNhH8rUTkodBdmQYkvGY6nqshiBUHQK48ivHKkxHB3CunHjvZGMCNb6bdjGeHY4ZPJXE1QgrojhpE",
  "key23": "2dRcpYGdBFJicxLJ8rrDiBLbuX9owZ5GWPVV3nTtjEdDbre6QExb2fE4B4RP9wN8cCkMMtW4bUrn5B22wvWS6NJC",
  "key24": "C88eFNSbdVTSUaPkHR5wgbPkbcwecAy8NVphSxBiNJvh5ESp31SxCKTtMaxLvX9ijeAuESFq64g9jnojJqRgr4w",
  "key25": "5WGF9KVhNcwzDtginm9ieUiZG5piYsgib8yXQeqbxCfPC71RRCAQZSy5bt1Foe9VZQSKaGRhQY5tMw7STGy44TuW",
  "key26": "517sJWKEQpLwvhBwtzHPd9CKUecFVKiPss2H7Ub8f57cD2V87Rvce8ttQoXdWn6e7HQLGb86CCirF3V8fQVxpWQN",
  "key27": "4MM9g6XcsLX7Dfc6QiaZZxd3fKkCTHWJmuJQX6Rs6d14yCtKx3FMchh6o51DXyvJt31cvZYz3re9gKNTnNCgmryK",
  "key28": "aAykm9cFupTaCG6WNsRbMVz55oKxZadiZTeGsg7QPxDhiTkqWtL2ZumBpiTQmBKz59ifiVfEvL3vDqGPcW4MzBE",
  "key29": "4zcMMWSz4s8DeiDyopT5HWDfB6Q62UoTitipwuSD54KQhHqx6frinnZUoVhyRQCSZvHZdYdph3HFbKv6Lj6jXvvp",
  "key30": "2N3Q1hzvvd8eR86A16CxaH2T5gK6FxnMfthCxe5xL6r7RtgZLz5ynqk3NLGTMQNPBH2xhNpJwDFKZ23mEGGBpbSW",
  "key31": "B3RrPg7Y1ru1PF6pAN8iZnetgCCDTv3KrAC7Ua8QMKt6GCtijGkLVMXFLCWYup7Xo5kSeEuCEKy72K2pptRBMys",
  "key32": "5sFVr9MvqT8V5bh1xWz64vBFm68cLfJbRPS9KXTJhS9qQJYF8D8akuZUBmCcvNZCEwBcmsS7dRdW5i3yG5WA4UNc",
  "key33": "4UYjZbfuJkTdU2V2CzMGPXsvaDubcAgACLek1UPcToVeAxiPHjxPHAt5YkvkS8onZs9EtuS9NjEBjxEsVNZRwAjN"
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
