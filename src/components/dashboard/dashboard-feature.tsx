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
    "2nJgWrQHvEVgNV2UmpSjDD6HTMnMJq6ZaDKyaVFFy1uGPEFGuwRqjCRazE474Gafm3aibVQQDwBp6HNWSV5td7Jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "objjAsGb18Rb2Xzwf8JExgNNbRgYTUqhwHujq7uPJMFAJwJQH4e8BXoEMDQGgq4mZ77Peuy6x6VpUZAwtfctr2V",
  "key1": "3VhmzKyPUiJYQtzpQadSr7S3GWdUcwP7UG2kDbdyUKBvasfuwKW7fMxsEozM2JM2KpVALK8wJABsL7pmWZyNz3dh",
  "key2": "2EzRjEbpBx2rY8zqhoCGDjiwgsaa7S6ZBf5Wznm7pc7JwmGieynf7Btk9BkW6aTcwtJHxSEoNmjcguD9YCAUp2s4",
  "key3": "5MNiLwPj6WRooGdn923uQoG7z155CxvGwjc3MhAREF4FDSQcAz89vjnSWHZ7PZEc1JzfrPmoNJWikNpDYHtCWSNK",
  "key4": "UayB5yTrP7dpdZeXAzYX2KLshWgTqvF46YaVTsQWaFk57bbo7RkVW2ix5KLJ3ba2ZiWmB8nF8XeutNattugaUd9",
  "key5": "cdNC9WRakCgYp7jucQGu4MfkJR2qY7bsLbkBVDoH5rUXrbuxkz3opYBAHsberMPvhZgcDqtZs56qo5myXSpRYU6",
  "key6": "3SRyharSeBFueCqS6rr7ZUDnZDBeoXXpWkP3q7shwf81DDFBcvQkrwevzi7wmWnPGcsXPg9VdkZHWvkq7kp1dJpt",
  "key7": "32ufFpDJHExrbyLJC4Q87mfvLAf4x1upK9LcC57tMLJxiRp1XRKrzAFxVt2GwzCLPeZxCCs6pGABE8rE5rSMvPM",
  "key8": "5V7gEdR1AAKqVBXC4bfDzNMfKGBM8V1Y92WhhfFpUa8qewAVK85Ft33qAgcmemarjp58eYiZLSDreJB7bSoDfbNs",
  "key9": "TWYGhMJYLPAMSYoDv22wjpXKXYRSP4oPQekD12ShfYx7sHhKK9xtsL4bL4gzXMcM12otbH6KEkayGa6CuiC6zNV",
  "key10": "5rGDJzoUc8AXsQsP1CqvZKj7rbTSPEjTzA39n6RFp4m784rXvYJ2ynAVt5jVNsJPid5drjMGNuz8WYL62kJeoYZf",
  "key11": "42crqZMxgi9ctz8KLUBSwkgndUit3JkcspgpfcU8z1bhiZmRtTQCmAnRaArZHhkqMa2eB6NVNUVY8XZGkuLE5ZUs",
  "key12": "2hMKRcpBwYayT7ij55tkZohvKsJ26mBL8xqtZPNhm9XZH1GbpNphD97rVBictGEtGVHj7nK8DHtC538gMzGhpTRb",
  "key13": "2vghXin1Ui3XKy4LcSHcJiiBwjSUSv9Ne7pZWsyt1gujGc1rseYKfPWcuGqyeuXssFffMSoeb9wJHSE3jnpLdoLq",
  "key14": "5MJGYhAS9RniKG2pQvw2ruufqxM4uMkWQ1T8srxurHT2PheMCDyuGx1Tf5hFnMHMWahV9VCnh2tYPBdqNbHZfKi",
  "key15": "42RXX2D5vmMXGpJvNgRzXpV9UG2tq8H3i4D27eDqEcLLdHUjxo9ePy52L6VxA9kCSMPKD6QjXbqeTWNTXWmYQJn7",
  "key16": "2KBw2W4MLHDtE4EMUcfM62uaMJLHZ221qTr7GrTK6hkvNPLBSKPdk4rK9ZvHKxYYXYP8KNyfkLHyz65ovNqmGRZf",
  "key17": "2cqspR2wrPXdfrgaR458dxccpnwuZKnuCjoWmK5eERhRdLT51qN9CaLZEk9mpjWieyEWZ9zAfHi4zrzDsnd87wFP",
  "key18": "2hDRm4tFUHDAHJ4wVvn2pt2LLCvEEPrZPkLVSsA6kwkRTCeGJbVsq4nebN7qQ8j95RKDT2rLeXyDy4yLqyKX2qk9",
  "key19": "3U3NVfqPwz2QcVgDxqrdyN8KmmLj7DHReQAVoz9YFbdoFxPgUcFEoAetzUdtUmUVvW59zNVDW5ZcHHh4Apin1FeH",
  "key20": "3dWLm4iSqBJSsg1hkuJ78aYotzdFxxXmTJgfTMWFdhrZkDNVtGmxgTuXqJdJnufu7TWyvvf6Y6MZrgburqCD434N",
  "key21": "224AVeuu9FwWcMizoJekjwjpb9DwigPz4M1RY8SS9s9anTk3unypTybReYeZBneMQMWd7GZgdHdPz8Rt2V7fMnQ5",
  "key22": "3G88PP9GyEYdeyFvmdcy6X673Y1MRx3QQMUMqvKvQfNd5wtsB2ptYUGssDvTKHNrhKo26G6a5aS6ayVnnsrpQPmB",
  "key23": "2SUpEnv4FukPjkzhjzTdvwNva8hs45ACkS2ahxgzKB78Ud9QWaBUJUEFvB38RDpjUVCfnKUmS2Bz4fRE3HudpnnS",
  "key24": "4rtYF1h1MdwRqziuqGCxJu1iPCNhvLihDhZVnq8AJabGi9kB247zzKqaE8prAoZqMAKB93jJhGFsuTJNgk6zdk5z",
  "key25": "3qXdkKTKhhNSGLuumrgtLrPQckDKxtG75aJ79tgibJqCiPMjysLmtDY2bu1XbaK8Mc4vphnW4nLK7WD6byaiHkti",
  "key26": "2QPYQyhmwmF5gTxx2wGHro618dQyXSxaMVJEP6YhwSnFREcZ8J6XAHwCDJFUYEmj6VRzJzdYZubtu5shjGgSex7A",
  "key27": "MBN7C6QNUqGyCTJF14DXLKotUwmxJ8dH1nwT9DRoFWxdeAam8cnrQxUtJfaRt9axGXwpBoPUmWTPQFaiLC7QYb9",
  "key28": "2N2rZyXUdi3kLf17M2KdN5G7dTspek3TiXLcHHDxtpLH82xrDaMowJ7FJ7bNPf8eyWxEoQzikkRMc2HhRaewpqG3",
  "key29": "54ZSpfPi5ZJa24yS3ZC8mXVTZ9rSUD3X6opNAEpNEBgppe3A7jTd3BN9WsCLcRfW5DDmVpFzfU2pLAQc8jmRgFLL",
  "key30": "2ksvaaUNsEzTPAxJcLXEBhoRi4FYgNE7VRkK6eXhknd6CDembW2Yd1cqQ7a3UDP7LX6UFnRSj6gRsGcTScwpRZ3e",
  "key31": "121dMyYyczxdUpex2fNT5Zzkx3EmqhcYCmoBZA83uRr3BW5FjVm1bHv4RHV2bSj2u3PGSDSQn8iG1B82pzsLfTJ3",
  "key32": "3i8UL36SqnZ3WQALC3SY15LTXFeTxpUwXw8XEhLSY3ihYc7r49Mfgcp2BrrEWqpgMWAj2yJFYmNL1Ki2j5cDTQe8",
  "key33": "2E6bzqmps6X9CruVdmNLWdkYWMS2CNNKq3FFSyVgawQcMg3qZNnC5KrfgqzXLALvC5g8SS6kHVCTu6TKnRPxQjch",
  "key34": "5rEeTn2beJeziRew4UYpfvg7Xga2vBfpQrTNMvGYoq5wreZwVM1DqTMWLeYYHWD16kJCudMfaRVUs9CA2Hdjtzs7",
  "key35": "4KZCrVn3o9BQhQV2qtb1BQdz2N5CgffwJhQCyeNKjUYq7JSw1Lh63rxB1np4HjHqyXhMTx3P9YrHwjBfa8GMRXdq",
  "key36": "4QHpi3TgLEppZk7zi5ZwUu44txxjP78f8JTXJWywxxy7xw7qTvAnFujeEdcXThrZH48L4F8XMFKweuqoccc5Y896",
  "key37": "5e2YhEefSg2yJfye3EkUVCCFjstnokirWQUSGKKzbVK6CrqWGyd4P2jKZSr7YctSmNFpD19WmnVSpX7WsRMikdEk",
  "key38": "3HYzzCsmM1yZwUWBkbDxd9sUAcQvprQghjdthS6uzRsguvHk7GtvDC7oJCR6zw9EUTVRN3vTLprwQxgmugUtgLGg",
  "key39": "iotC5UpQzZAx9hzvoehmEJDFAio3YJEjhREQmBmLuGJYbVSHC3ysGvao2SSEG1MQ6NSBhgKGR4JpGQjnMf9vJYH",
  "key40": "4ZZayeRtx2eEvrghBzbp8WHYbVqwiYQnZdhA7VSufDHWkueefmVv2AwkdsFQqKwgzD7LuJLGfto5fcXRtwhcZoH4",
  "key41": "3piBJa5DCQKtDf7pNWpSS9Q5y4ZbYui9wc8rBZMCca9tGy3aUKoSWa4igcCMdC2forcTbwPfAKu9GfGaAk41XKwu",
  "key42": "31K9EoXoYffERLHnZZHTdxQ7sfiwJ9Va4wutGNywNTyyrf9D1oMSn1V3t9bmQCgGFLKXjiiY9VXFEJzJnFa5xaSm",
  "key43": "4ZaNWGWiAqsnjDuW6U3ihLdiEnjTTFt6KDyFSyYbdvTN3QqJwcE8gBzLp71jGKsX91wXbRGkAMehWnpMxXW93K2i"
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
