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
    "55p1whVVsVk79vt9Eu4xqeM182n1xNh4Ho2E2JggHmP8T4cgRz7DHEPSikMwQinydWNdPRCnojfB1FCqMrKF5tQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23shWm6mAHCf43AG8h5nnucUBhxwFPkN5EWjkYTzwwW9m9ojyy88i2e8uVKP5ggqPSk1EKZeULaa2YegBBmTNFj5",
  "key1": "9pbkeqc1DHTgLLbrGU939W55PV8a3pWZqvWR9cxw4uoaq2Lj84zdQLZK1SmGf4A5cKt3ftTSLF1PXrNjBiewdtA",
  "key2": "3LWWH65wff11RidMRV2Da3Du71uT1zxy2vfmRAezkdVG1wVbGDF9tQ4uBJPYpogaPARQMD6yU3z86LBmU1PHe28M",
  "key3": "5vJJ2nvwCY88nGr2CazrVHvLuQhLJ86Bak4yEnQCnwfrKWjAEG3WTbAjWZ8UWH2NUDjtR6Jjev66RJ2aF9MgTpKV",
  "key4": "21gXiYYvy3zgsaTzKxogx9Ro8HRnavwRhub52UifXuZVntZm3D41DRphX8q5tMnp1H3dxAP3cGMTeJBBt4rQs7uS",
  "key5": "53G4HNmb7rC9Hegkr6H2ogdnheSF2AehmLUgvjDUZa2g4Jpe5dNo51Ly4FdMdjpvHHEzSSqMtofwtz1wwegnLP9N",
  "key6": "Y2thYrJHeEjWeo2q5pG7Sp64yagE7ZaYGmRZYKbzVKThUymJrRCscR6iiiNy9Q4FpG1LvwDXLshBKsW8j6WU6ix",
  "key7": "2MhSGAyUGctWy15HjonP2xPwdiDq3yVgP1sUw5KwXfTbrVJCtRwv5SxQpwAuj7NoEFBcC2uHpDNGXK9bnz5uNaSn",
  "key8": "2cJz3ALfbkyLxBntvFpEZSAorv7zwpTS3jHHhXMNajYiQQnE2BpZGq7DvJSzKyp3BkZs6FYxqEhhue2PzT9KWGkA",
  "key9": "4wt7vQhp8fTugPZkp4YhAdpg6dasoC8dj3rwRMR5PRMuKvnSKSjWiqJFUqVXMGrSg8ENcW5RiM1CFrTyXhYsEMi2",
  "key10": "2UtvqtLSq5dKkZdnQ9P2FghcQV4Ws4KmwibvSHZFXzUxdNBn67nvLEHGy9vpg5A83fKQCxoXXbA8iSGDMD1PLu3f",
  "key11": "43iPvG4cCbgnXrpH5njANyG5LLWZc1oy97KcNhcAcspimihWDczvGSRR6FeqMVMeZJ7NkVDduzvsDhSs5hRsmfnR",
  "key12": "5e6Lu4TgxY4Qv1upokttHutUiyUpUTzTk1nck4wwQ2NLaBFHXhSTZ1ao3scpzH7p91wMV6XznyxRNa8aft9J8aYU",
  "key13": "2YMd3hDySzPXN4JRZSYgxy28xBL6GZowRJGdnXdpXUpSwsVHmLizxRnQfjmQ3pwAxBaBein2KYJzxjdHw3JxAdvX",
  "key14": "4MahAH18xHBFuNo371BGosLyT6d5VAEvWnG1BnkoiBBXxVKPp171QmNSrQawhQV3HjK16vVhpEdqDHC9EQDsedgd",
  "key15": "4PNnzMJzbW9VZiuYz2NKpiVUuXWu3tmKqGwAsooed6xUmpGR3y1iF34FDMRLyYwmXrAe7BK5rm1eXaMymDcGF4kD",
  "key16": "XKGybE7PYoJjTWi9PWkjJvfwwdWzbZDXtvK5gCh1g8gcK5BQ2A6uHABbHFDFM81hP1upZTX8vjXAWamkqGdnuUA",
  "key17": "5LW693kjMKTnAZHF9hLpLaPUuYVGJSJHo6fzjzYakoeEkQSzaiz8GzX4rfR3AfKvMVcYrhD5m52Z9w58LoVuQhf4",
  "key18": "PNspSi37GwqDRnSXaMDQjrmxAJ6bwEp4D4S1SqqxtnHjeJi3x5SuKzpX5Lx2TpqVqbaieoHNBx9mPvkaxaHLG6c",
  "key19": "3mt8oqmzfThuSL94hbu7UfPywhZgUPfn9Z6C5UDCD58hxHsQR8v25nKBG4XVC9d3ejZvfQhY5kfEH9FTVJnTX7FH",
  "key20": "22PaS1NQ7LDz89AspXPuJtVYRVmgWDgDw4yGNsBpAfgyrxs7WMArHEECvz8zk43Lzy3b37L1eVydxKgZwBBenEKq",
  "key21": "4BFQ7bZBM5Xxvz7WBa8zE2V1PgWjPr8B6DbgDKYgQDU5mQr33MsJv4HtfgE26SBVzfK4JkrWdUBCbYKMq52Qou5h",
  "key22": "PDyAriR1WgQuCqcEjEVEGHHFGeek1ki8jSo4YQgY2ruLgxy9Zev14HBUbAGdDqXeWnMjUD8e6sic8B5e2dpfE9T",
  "key23": "jiAMwQWdQu23sh3SRAD3ybLpQWzpyxKN8Crr2XhR6BhcxBkjq8sgHR7UjBY6fW678AcrcPvzpDM1q7h8E5KzGBF",
  "key24": "QqTYoNXPe9LiCfhswGFpczbgoHbpiQFGEVFP7DSkfuhMt6nT9adZhgz6SYYA6eXkmUj3omRRq1RYXvZV6m5oBFn",
  "key25": "dWzrnPY2VV8rPZzjhCXdVdQgXqwWFwSK4D28HNPXatjdjVJXHfELfdjYvsRCgFXeg3KFqNi3Nd9VzsmXN2xmuRW",
  "key26": "5x2a7RZRHF5u8663SRegmvQNLfkrFdSariArUR9ARaerf5QN3wVmxzdN3rK56NzNojq7raq7p9thXReANnqWhGFo",
  "key27": "2ZiMzekW1DR1XovAWkyg7ZEc8wGtcMmHFvJX1kDJiW1adGbPjKqGtsokaCnHYUTqj9ij84jf128sAE1BC23mJv9G",
  "key28": "4yEd4F1uRwTY5co2tv8Q5zFzMv4GUMRFPK53rjGxrVWcxnaWXQBvBpwpdGHhwekV3JiHoZpzTSYmDStA6R6XhC36",
  "key29": "2emECK3m62M7jB5hFhtFxdvnzYaeeU1GBk1nwMywxGva9cJhEL2AXQkr5yCcB1dUEcqoidDDk93NjvjtS6XWPgzr",
  "key30": "5F3Fyppt7cJG68HGeWStriduLUgTpD2Kxair3MWRMWHots5sHPwWfaVwuFDtgzjb6VyzaN8MdHW4HwBXs1oKCK8p",
  "key31": "52YRReLcUZgyzvrpA8kxHniDKcMyZB74rtnP833EnKEX5HNe24E8QG8YCT3F48mkHPJqLEmSLzsR2oEzW1pz8QDf",
  "key32": "5vrJfoVAxYo5uhojcMV9u4WMDmYv79e7zXFXogWU7zw1jLWRNVqFiZKXKxskVTwXBKu4MuidCFL64wrSjtvYLsFv",
  "key33": "3fiuB8q2XyYCNCmFXFxFHk6gJGr1m59YKhHaDCSLGadxkRtQ7csh2XpR6NcZHrs1D12vejcN2U2j4r6sXDbJbWdQ"
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
