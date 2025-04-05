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
    "2C1N26HdW2A8YrTjok8cjqEZhvPTEbwvThyCKJkSy5JyDf6Pd1LNnXRkacgbGu2Cm5UZFMsNN7ZTnecXfW7JXo6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tkUVuVjRx7ViJrTEhvDvrHgtXCWEt63v1L3jXPpv2a8DP1NgkaAx9kvN1YvPXq8M4GstKspcamrD83WhzjcFi6Y",
  "key1": "5vTrqz8G1oNodZwBnkUpBopUpe7KcPuS36a8ZGAsKky5DjsbPX6k7QCV5NaRx6VV7XmpjUQNineJtdjVyKSqZLHf",
  "key2": "54s4PmpZCHrgqV5tASDqjzJ2a4x46JsKRHJgwwNVgRfW1HbqLvFUTB1DeC1fVVA8psr7gHqNX1nTtoiMkZkKbJEU",
  "key3": "5hVBjFeb53jSFnu2ryRKvJtv7acZ44UzbWzJDGvxgfiB3X3Bi7nyJ9C6KPRzAKEJRKQpiYo6bNwB7wbRHrjxQWy",
  "key4": "4FziiB5MwQLJhKx6AEeeymBLD8puYtMb4YNgzabGer5AD2iED6Qf7DzG8QJ2sCPJ8Swg1NwhCzbLf5yJw2H7cZek",
  "key5": "3yQXLkkhD3sEti3KZT6M84dmbmmzFyyLwojwYtjr6mufdHwFvxFGQDyBqvhjFw4Hrjo4n9LUJL1kLANJ473aWkxM",
  "key6": "2cTUNo2cMdeVEDFHV9rebyCeF9rYBSh5f21abVASvtZiz24hsqUKCYQFrmQ7owugbrTLwcfkPKAuY9UxTPXkcXi3",
  "key7": "4aa1CaXje3z5oz52QdeZWStjLwCg6iYrmqSswdSehJ1ZLMDLaMhTWHXKTb33Adi2kkRQk1Rsv1jYhWMPrGfhpTpk",
  "key8": "675nG1gsZvYy3VHLHTLCWXWJ3CcP7iHqj6kGFXtaLGUjXonGpcgUmB57XkuKAWRCazbQrpbFtRxivYD3Rv9o5zr5",
  "key9": "3GznrsZLkg6hk1E9qVmRZdJGqkxxXDsTLCeuP8Dv1PGgQFtegfLeWC2PFRGgMkC6WwppzbtpgSsyBg52PrmEBv2s",
  "key10": "2Ygm1A45GZuMPcbsXwsaCgKUTv2PMWHgtWrr3UHgVFoRJWwMojtYryAqRhqDULwTcaZAunQ8LZ1oCPAB8H7VzDgu",
  "key11": "2cwSuB7xwYFR7M8R87jhmtJfn7ZkMpBRRJR6qv5EbRGkzpVkLKdmJfD4fRpUBhvJYJbB3VehGohMhhsTn6D2VAsS",
  "key12": "K2eNqNscxtCryPMtbVPSHr6UrfK7D6RnqtBV6fBAQtnUfM1eKeqbTmxq956sU46Gh2TFK5U2LiM9Be8iNHNtpd8",
  "key13": "2XpKfX194MGhndUQjX6cU2iDh8W5Sa9FfbvTQtTUKYGeedJMECZ2xGxaZYVHKjV5pqzXd95SvGAKh1UBf1EUEhjN",
  "key14": "3nKAyxRrLhndMk1emRkhhjGm4FyMaA26nPkwj62TXzST2BVyPnejk6cDdeFfxviKwHS7eiTVVpq2XKmg5XBpiwqo",
  "key15": "4FAVaXc3nwHMkQmn2diUrszpnvB3j53t8gnupKS2YUrqyzUqK7Z3RpjE7sUziKmcyjoXLqJ7ac4L2uF4vjRf1REX",
  "key16": "5b8kc7z48u9YKba7cMcatKnP6tokczYaSmuEPaarQ4nhCezSNm6uBfFpo74EL5b7qL7xtaohe5weT7GWFjrgzAK8",
  "key17": "5WbiVdr8sZsVtNE2GDUVnui6YPK11mKXnGAvGHYCE6urheWdEJUGK9St6MTF5UihxpoG2ciymY2GAtqrxQsMhytf",
  "key18": "5vA7i9jrZSzzKLU7pxjxQ5An7oFDs4BYRnJGS4cw8Yb8mXZHCsCmoN8rjZxQyegdGwo6dsTvVHq1VEju2KHjP3HX",
  "key19": "5RYfmwPjWjYeqhcR7LMxjgEubMEAyUxHhFZB2YKAMYWEJdcXAtUSYRSgVQ7BQ6jzHWz9ZgJ6omZ4iCzRdMEjJ2xe",
  "key20": "57Z198W6wMXXzwzYXt6ZQCmSP1b59KSmhJyfVQHn9gfvwSLkhzq19zpnLbgdGEYvGntf1PApKUZKnWLT9ncpETgm",
  "key21": "2payApNexpDcD6cuR44BJbbTirJ6eYsEsNviY3cQZYA7jG82ea4QRECcHBXnT1xVatPZfnnb4YBh9BtEiHjrqRkm",
  "key22": "5aoDiKn7EbTSF5aJDxf9TBP8efHGmb5gX29Xyxv7uxUBY2j475LRGntdAAZhHrSLgnyfxAHGRH48AG28QCTaE61T",
  "key23": "YvYms2j6a1mJxdNqW9mtdzqyx777L3zsUvjPBmp7L4NHxBcTfcFjNCr9ypLLEpv5iFMfDaHfos4Qqzkc8x2FG1T",
  "key24": "3pxEj7fBvN8tNkufKJCB6mXjhCJiFyqUcipUGNmX3te8WJ5cmTWvMGxTuW9ewvKwFfCsaoBDcYmTJZrkjv8uiqza",
  "key25": "2yiJjA5vSVG3qiwCDNSTjk54U63cTMpqbVjnqhxdiXbpeKuDEhQEVwEnGWoN5Gos98b7qAk5CJJHdXXBakVM3PuN",
  "key26": "4GnPGSFi2y1V43dRMyKdqRttYEda1WxHfBpFojh7FsXAHMfMQbT3ab4F7m2x6fAFwZjmDgDXSVNUnT7iRdUii3Xz",
  "key27": "USUCG1qp8AYJQCAJrMFbjm4XsX9yv6Y3eSfcXdfFTDmkVUqdhhYw2TmDGyu8Ef5QNXh9GwWGfd7KJ4rq7uWD7Lb",
  "key28": "27CgS9xJ43mQ8Jt7qHTeqkbkQLsMQxveVS4PkeK4qrKepEa1dVrnzxcTEMLtAeu2JCdnCpDYwgik1ojzG2Ykt1np",
  "key29": "3qvvsqhaRmT3oyEALLQN5Bw5nxCb4W2tFKV5AAK2jyrW9AgZXNxCjty2rnrmRL8hJQDngMCohC7j8xzPL1Zrj7kA",
  "key30": "VisghVqsyr8RQJbY1k5uJK2b6CA1vDTeqAKVep3tRn62GHpCfo2XkZF1wqyRfPbcHQGfeHfRQGy8XBkJizr1zs6"
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
