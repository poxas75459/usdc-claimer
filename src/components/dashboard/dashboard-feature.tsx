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
    "3ZhHmoqcCBuAqm12F1meQZrP4y3yfSaGbrncf43dreVCWPNLqyAibGUdh5TaZP37xZiafDcP4WhNYhm2NzK8QLje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RVvoRgPFnMCRgK5CJrcXuMdL198SmpKBqN6MJ8YieAUNrufYvK2mqU6b7HQzwkTZMUmprnPZZChnNjx7KpwGkBp",
  "key1": "497Con7PfoK7cN8puw14VNs98h4uEKSNK5cepjzeT1vg2ue47amyHHQykWEnsJBqvFtfXB3sWPCsMbEpwjPZAd2N",
  "key2": "4xEuoAnJE2f82mRpE2XjdPvvxpgJ2BFgxHYVU987EDYySL1N4nh5qqYzyDQGUj4CxbNapFa41VY9mbymqL5pTVYs",
  "key3": "5mmXSW72wdEetJ7q8wwkK6PcutovirvVa4GbBXK9cm8WZvhkWusrDZHK1QoNgwC8PnkxoBc4HhpC522bxs7vSJJy",
  "key4": "4Y3r6MQNdpqXBEFYrfougRFmvz4nG9ftFy9CoSqntGvRUJ5x3M9Ciub93CWv2oqNVNGNK2wxiu8Kz4SrpWkLC42",
  "key5": "4DBdSX9yeRnt527bNRhAryd5ZoFf3XvC2D881zT1PSMA61kNBygnsZjFVEPQtiqjcehjfgFabAGTiB9JheXgZsrt",
  "key6": "22WoxaavXBvpCjmoRjefrYpJUw9MnCDTdRDxfkHTD26modpJpR87FvjcuRqSqAPohnLtxhP2zgAAJcgyi2Qi8Wt7",
  "key7": "nQBscgUf2u7VLAgQjt3JvG6E9U14Zgk8xF5TgBdVdKZ86BeVwua9KRGCpjNebhfbweWpJ45muXCKzKX3KsWWxty",
  "key8": "4tNTaCHHix5ZArjms1RtBDpbkWR7pTu6ijuo6bj97erPK9xJgHiitoYeHqpcfqUyaUucwJyThJ1tpGuDvqbnLXpj",
  "key9": "EtJ2y1WT2EWjrUkPM9m8hvTzbLR2hKkfJTxaRHfnebLa6G3rsTP21khMa7F6dCYqkNVSX1BGkYjetmuRoRRkXng",
  "key10": "3t7LfH6nMxLgmcDGXML5E9gW7LLeockdvRniCV7t8ut3N4jeGB3txuHSPgXhbPcZPLkgX8Tphpt4i9QCJfDeWoET",
  "key11": "2GbPd1aezXWK2YB1g1JETAvkUP12op8rFji3bQkgztGqQqqbi7oB4yo3bBY6FpwBAWCNaKFdTCP6iTF1byRkAegt",
  "key12": "5YD3PVaF37jKajKz3CJkNumXHAVDksee7dPBkJGshsgWXqUovzM328qAsyCnG1pTL7rYgAnXhfJA1BChmQexuMra",
  "key13": "4wQvHyeLgGpmiwiE1uUJEdj1MHjZgXhK7efqnwtwGKCViPHdB7CU8M56RTBaUVsQ6TnvnhsiSHS2R7CWgSXbwdy4",
  "key14": "3hHDaHbEFBtBxHYniqhGH3dBFA3m9FZM2rNZtudqeQbj1F9PjT4eyBekYJP9xBFi383DUMprRyFpe9tDbJs8wb43",
  "key15": "2x9SHVq15zvWGnmD5AmTvtxrzDBc5VYxgrMciuALCNuzfZNkoeeFjMT3Kn2GdxqxLzjtPovSWxMJKz1huDJiAV9g",
  "key16": "3acAb4U6VaxWFSSjsJyi61fN55zSdnRqJHXm1aFyeZutcqmEVArkMiKWiq5WrJe9rZMtBbhWi3X4dupo5N37SdVM",
  "key17": "25L1LNeZMvExGHa2gKn5en3bfAQV9vEFLrRbz2j3eaPcrJqkV6zy2gkUyycg7okaTB88pCfDT4v1wRoCdjPniCAf",
  "key18": "RYe8pa1tQnnhwkT4gn3QN5GumC1sdsWAocyZSxzVixHx7xVU5kxUWzTMU2FnK6ywMziLEd3CQzZ9k8PRqwLWSgz",
  "key19": "4YbTrSf8KXvhZ5vMGrF6PyKDB8n36WyKjtSzsMwfdnURhwusykc4Eq3sjBfYMAxaMzT2H9DQDDfsXAzjs9cX9oXj",
  "key20": "673XzGcfx6gDWoCNS3yEnbSZt8bUevPAk4scjN9isxLMNBTrRSXa9M9Mgjfa4CaAPN79wC4bFurLisWvX4HsBHk4",
  "key21": "2Hk3gzUN8eW5xJH5P17uG1ZpP4zwQjxhmnRrr71s5wstta3m6zoUBgqQEVKRawMNSfW41yoNxXx5CTDGsNBvJPq7",
  "key22": "5FXp2ZSeYecex1LaVi4fYFNqjSBPfHaqAmdUQ2SCWi39kbAR15DCqioU11sDqyYF37tC95vb4nsUUy81EEBKVBC8",
  "key23": "Y3FPUBBti5AyQyn7T8KeJBB4Ur3YHoHFqrGU5seBY2VQNVaXEmpxN3pUeoKKfnqs8KkKXfviMZc6AmpGdGp83qD",
  "key24": "4cdragC3VGkgLjzn4Hz3gmtCDWa421JJQc9SykBBxWhSwfMfrpZBpDxvbDrwCHVDEwTmGbnPH38Gt7RXcsCczHkk",
  "key25": "5s57ZHNhGzNTVvrWS4pxeCbC6UNvJujso88xWuhkEDDrQVx1cBZUVLmCvMWzxnm4DpBG9EVrY9Troi2tDD4ouA6f",
  "key26": "2RGyJbwHvkJFpd2zHgsFqG3kz5G1tLGVArT12Z2NJVTC41kedNwskvo69TidPKbEsbqjSNYeGhFyjXEBW21uY4Vh",
  "key27": "q6vF8ozeUA8Jv5URXRdMwaz32fWPhHjF8aJz9wtkQ4rYAhLQtkJ3B7UQsmNccz5aqmX45d1ZYDPiQVG7EcYdHVu",
  "key28": "PMy77dbR2WDHEMcUnPYX8QkuFKBARbN6wk9Zm7aTRyLtpbJT2LfEsdxNdPeeCByYz4AytH2X3V2xn4zNvW4Khzq",
  "key29": "2DHd9USFf8WGvYB6mTg7aJSLcwNEdjfpcj9ia9896rBRruVf3NW6TGgQfoFS9gVp2Bz6Qn3zsYsJPirq8fT1nQyx",
  "key30": "4cBqnZS69iMv66yLrECJcqdf8ujwUNDRLRfdgZ8x2WZyCUnmBiUQHSk3paRXiPXLeJkGuCMHgAyivvmgy8Rn5PmU",
  "key31": "5o6VzofeNucJh7o5Z8V5zWSfomtViUX56w8iCPxBm1XR8DMK9NkZQcAxCsViMXYPU8eVQShvdpaABY2t6cEmaHCL",
  "key32": "3dvbfZkTk6jZLACDnqXLbTr1R6WXmoAD3CYvhQh3D6ZrRTBzpuD8DhkifdksjEu3dpVHnsLH9GKD5SercGdS3sSa",
  "key33": "sShyCQKP8joN3c5eAG7jCGetAuQ7b8ocTwYX4pHDhJgQpeQJqKqpTsacWd1sRLFWqzbuqADGZmxRK7jrC5maRZA",
  "key34": "5eauXbVpsoKztM9ot2HMsFkn9YodhcPDJLjMYsVoQB9m3F3VstHhroBMJDh9HbagsNFpRkjTHtHs2YHAn76wBJko"
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
