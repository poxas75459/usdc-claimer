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
    "GBXC2qmPJK6teTpR8zyFMjnM9T6mv2YY5LfwSxut1LiAjBCyu4JpC8wEUWmYtjNWuuxg2uP8UFxUVizX3iB7Doq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZWxRucBZJ4TGGxtvnb5PgCrqWPogRSM7D2NiU9KE8zCuGo1EwySXf22ghZBgxT1DCVUD8FCuPhz5W5XqXwCC55p",
  "key1": "pMLcKHPX72QFzpdEydc1JAPX5RX2eMSLBSsGKhmvWcCqMVbpEWUsokg3LQfcEdptPtJCeTW3ULksdUhG9wD2AUL",
  "key2": "345NUV4umGBMgBQSSTJYn7KFt3TC5TN9bJPJioV8AZEitU16Rn1vnMuwhynk2LeHx5VCKoqmqRukP8FVwfyt4CGY",
  "key3": "36u8c5rD4gCaRDCWD3fREyCJvQN7swPKwKpNddSTB7d8VHH6HmH8Dp7Nor9WnsD4eyGdwJfG7jqy9ChseWj2PDHu",
  "key4": "4EkfzoNFLqUP1x1nqx3ZRwbacNYCJYXc6dujxmTEFhCK54dbDkxURJdcR9gUYWNKhLF9EfpjfVZrzzULKaAwsRtx",
  "key5": "268yfErsUKSKQ1KVTSEFmT2a5iNpj5JeL8nktuhYvFUVpPv2n1BjqTGmes3n8yMFpMP6jNQm5RQ3ZfY323UWpPTq",
  "key6": "55wMXRD6TWv8xo2qZEXBgqPqEYiUqzThZoPUZLYHB2Q93voATXu53j2mSyR9Ur2MbA7fvb5Nx4hCPEBmeaN1oFfU",
  "key7": "f3JmT3R42aJFzr18vann89CTyugnVFKhJo569KjXtDnsjWVG8KMd3QQw99ubJ65UaCXjWnXJCKSqmWZCTPSDr6D",
  "key8": "5L1P24sNLFwb8UhJzs4QPbF75gLJbR7hwocP39hXXqAiV4S4UteLDytwhqpWRfbHXMyMQt7TbyhaBs4FCdKFavbJ",
  "key9": "2FSD2HsgiZ7hdchxZv6LZXDhXCUsKmvF6soFkUJwJw9PkcjKbUHyh85ua9zXWbFZ6Ew158PARBwLnxBM9PnLrNF4",
  "key10": "5aUptKttbQM9xTMd1QRsWc97askXXCJa7hRqtcyUGg6kDeufteNMLTLBL1kEFiF5Cno2UzafPdGRM32Fe1iL3Ti2",
  "key11": "4PFDzjVDHoujEYvFH19v3eBYHqSMtovdExbn3iZ4SSpHtjfe9RtYXyLzrthCb1qotv4DycpoEbWeewMSuy4r3aQs",
  "key12": "2Go5FACXB4b8pk8xW1VtfQXPxqV4BJadCeNHbGUyh1Vb7atm9eJq18kyFhTt9KiNmMPZNMtSaUruwW7hC9NnQNDc",
  "key13": "5m1Mr6SFZbZQiHvCM4cAaR2743cxhSyKCHreSkdgfpkBQnucfuENF1v1pwgUJ7LSzYRNnYF6iCvZk1rmwrA3Jmdu",
  "key14": "36eEwcPugzsdeZYe7tg2PSqgAxqBiW1bSmvzb6Hp7secL4tNsgsE2eNqmuYoGRAdhP2wm4phXc35Jia92C8f38D8",
  "key15": "5H2KqZBvcAuAWqxnhbE3cZVh1fWUFr4Asu4oNyK2nR4ox91t68bZL93BRZFJg4aAmo2s6BFBjGL6s8BRfATVFtYG",
  "key16": "5CTxTmC89d98GhsFC8UjNHGwLSn6xi7TKqtMXU93bXpQvzeVCJUAUS71LVpZFBVUrbPicHMfCHx1n2mCUK6neswm",
  "key17": "5oYnN7xwTBToExJD3qnjh49aRN6R8kbLr5JksoGBkFauSuGiC5XuXjqnyQgcNVT1Z758ETBBJ57S6D7BR2yyYD8Z",
  "key18": "4kYksVJH9AvaFEooA7hP9GoescLx4secnzeaopbPe4STJ6QRm39pVRU2PZynhTsJFfoR9CuPRtcvGbJ9pStAmLnU",
  "key19": "4yL6VgBp5Ksh9tr1eVZmFUKw9rqqDpoUM6vtWKfneUwhUwQjPujHy8DmE1Dz8FkiFtKvhhhgihTtr9HvUtTztRjv",
  "key20": "svTRtGNUWTAKXPCFkWkdSgyRYWhoWg7fdBM5VxT8GmAgUPXTyerSVTnrSejjTao2cxQMnLCYWyBGKmoq5Gr9HuG",
  "key21": "2VA1md3pcRJWBUAjMF3ZqL7Q4bst9aVHqgzGUyGdHjB1bo7kfHunHRcLciMdqDTDf5hzKtASHTkZwJon4ryJNLTv",
  "key22": "38SZuGBi2wodqN5NKA4KVa4NBV2rCTJRRPm5LcbSsnfxMnX2kqcW1XfJdTBYd2QJt1zu9bxPTCuPjT6g5j8HxZjQ",
  "key23": "5bM9cBZQKtJon4wRKdaqFkgv1MBw3zWLHB4K7LQc6XsuQxsNTRyqAHK9dHkSmvnGoPKv235MhYCJEZCjjv1o3YPy",
  "key24": "5JTLyLwNcUEkgcEbWwnn7EyeadbaHWCW9KtHgSDoVWE1fjMsNof9yXwd76Ai7qdxpkXant6mecBNtGCMhYMX8Zev",
  "key25": "61mTRCHmPKrFVRtZYuoKqEPyv3QEzJo9CJosNFoUnEZATe7vbK9g5srtDJ1XNda7vv9X9xH7Yev3aLg4qWSi4ohz",
  "key26": "67nsky1V7LBkKmExYjNuuoqvEyYxB4uLnVFVa6Vyd4f56xeyghdq4Z19Ak1Kdk9J2ZEExtw5MTB7t8Y1HzPEznhT",
  "key27": "y7GYPoN26mPLWoB6BPa61iXRTgsMej2gJKyvgF5fWLGMKqGJQeSykKvyLqp6jSTja11jGGjcXUdXJbSetGJdWRK",
  "key28": "94uKhZzMkGaYssADL3V37rvuj9ziqqfjVYcyRvNQZN36nxuDPePQrtNLQ4zVFDyYiZfVWdj1AdmczZ1mmHzZH5X",
  "key29": "4jwPUT7hbLPDvT3F1DaiHFYahCs2d6oXurcLxn62BNvDZuiHp2cwqsC6xSCGpeoXWEzELFJEkqXy2vgLsaNBVoju",
  "key30": "Wk3PhDoBcHbCkVyE8bWxCLDf6ND7GMomCJQxPRhu9tkx8eLa7Pk3WM2QBG5juLXsPb59457P2NQSZQvbwBAFrRy",
  "key31": "2qqFpYDzfM8fEATJ2buJvwaSnEnGRfGL74stf44EdtPnRpNcX6x2Q7yjPqeZdPcDQmRkwrwm9uA3BMQUeeat9Vy1",
  "key32": "66zCLqszaiPgk36JWnA2mD7inivYoRCowM35LWwuYzAQQwvn5TCx8aHXimcgFzo4fWWcEXwK9Zc6GBw2MZQ2rjiA",
  "key33": "Dt8PjqD5QoEx467aGWh3vGiiTZRyYKVNxnQcPFf7QCczoaKt1ocYjwAmtz4F9NW4z2YDQpz8LEVthL9sespMMa9",
  "key34": "3grtumRfWJD3dKX4qQVL31GqKUxDpPrWvb5Qpf6pJXeAeyzE7uA5FHz45MVdohkA4v7L6nkHha9b983VWHHJJNvU",
  "key35": "tuWMRRpgRNGZgk12ebC1WcQjvQkHNusUckj8opQLHTFW9ZVWF9jGj9gnKT6GmSDjJ1mbS9xqT6eCBQEQ76EugKR",
  "key36": "5f4cEWMXojsniF8uf9cew3G72idieVkFSa1BCWVjttT3aSRLacXinApjSPNX1sn6Ne7Yb7jvBvRwVrkGwhn8EYx1",
  "key37": "9a7si2Dk84gzwbcnjkGnehDgpLyoDVpQ88gttdGH5w7zjJJ4YTuzJJrbmDsAREApHvuMzBBCEYwQdwGZSSrkba3"
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
