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
    "5DXAQtDWSrpX4AUNxGWjdafTZtqREpqVrJUxbxBWHM5tdHx8xkC8yFXoyjAVroiqbmemyd4gdm8di36ymtfFbhKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gWfiBzPPmScnJ96Nu9GMuoNskGznbjn5Sjb2bPt55GwfTjm4K2X7gkjjh6z3TL3SbPsxKu56gztUvWvBF4gA6An",
  "key1": "3m3BpKgMV2QrJ4BZU9wBa49LWy6TmrA1uMZXgGfqGojmXUn6KC4JGZR57EscWCXfKCUWKy8QnHu3sf7AKrUwAbYG",
  "key2": "2mQiMrJYkN25mHUhwxjkSJUudKVQnoaHU4yB6Tuou9bbGCUZ1FiKXDEm9tWGBYXHwWdZSJoNmvYjCwcWEfvrimrt",
  "key3": "4SswjADqXPSzjDGag9BSqh7UrHG7oVkewptocMgXFgczmtEZUZ7CQx2JwGW4MkfHoTqN5DwoMkDgdi5bDbPBjXFX",
  "key4": "2BqtAMSkUfQSapyL1xqrzZ4Mzcz8GeiPv9SZzhb71DZek7zuX1eXJmpFD9q7sF5cTygxSnn2Zv34BYzin9RcwgtA",
  "key5": "e8uarNhqSrzW9YD9ETXWuA71tD8BwV5nt2FB5w8yizw7RZ8b3Di7gYNW6NJz36BqkALFy5neW53xJTWXtDResp7",
  "key6": "3kDCPKt4meqyX9JNCimqsr6gqmVLcwHhwzWUPC7uS9Pnggdr8ZoGxyVYZoQaGzwXDZKRqE6zTQJdka4p69ENG8Zo",
  "key7": "65ekX8SzE91t67dB1eVWeQt3fyiYUtpqTwa6ZqcWcy6JSVarxGqGMSQE7o2xDRjGFmTybseJ6fZrpi61oHXGsJBM",
  "key8": "sbrMBgB8NQrCWzC5U3K1cmc9vYYEhy1HrSLUAERwLPNdYmknekmXJ2APzzLCE891SaMqd4Hn6qd6SJf4tuQtfvB",
  "key9": "eVKMu2wSrZeg9VLPBvtS5M8ZNND5RppYbAEYaEWoQ81mRf24uZv9LEDSdaFyqjeeHqxrJCM2g6nbshAmVdXHKZK",
  "key10": "2AsMNb1k3UcWYDJd2Xc84LB6jK5LAWWTD9zMnZfNN38pKxrFk2zFdx8sPE8Uvx8SFndeLBR2siggE8NxzFqqQwXR",
  "key11": "2Wq8Yq8JtcGEdHm8EN8xmcvwbHjtHV8Pbi4CjAKqSc7tftcj29PhLf5qUHe2h9BxNX2UBHpibCAopvj2YkjreXti",
  "key12": "5iLdSfSduH7eB1uCeXPvpGhPnWP83mcerYxjCwvdrK2Ye1URSaT9ozHpA2znJhuR8GfcRaV37mAFkhF1r96JSjFz",
  "key13": "5oepEi5DB4LXNPpS29WQRhEXsHw7s1kVpnk8GnqCNuv2GjkEuT5prqY2CpABpqFt9u34EwHzNx47DVCFjeRbKinA",
  "key14": "2snpaRYw326tZL6Lq1miSAuqzneCHtQ6fF1fxyeYnE6TSsz4fh9Mr2Csmzrc6XRuxjLoKLmthNMvMf5K4ktUiPvw",
  "key15": "xnmRh1GbUfVfUTS4fLqKasNRhtwveU3kqaRyQjZpPjLamJNfaQu92EYu2y1uGEriwvTtoFo2x1ukzuRs8xQMRbq",
  "key16": "5MZS2hwaxxdZDn35BqUgBh3AtNWGuQBBACbf5nB4qEur2MuWHsX63xbUEkGMDfMX5gdmW8AewZwMqbDCATEGR7kx",
  "key17": "54pVutMomVZgesS1ve8ddanMMLNgvNM2nMHMQJmRvhH4o6RA2gVXKCsXcY5hG2rBbXyPAFiJZnryULQVAMCeyUEw",
  "key18": "5QTykrdmiaWSShYYd5RLSEpZ1zxb4rrEcrReFNGnHYUZmMWbS5jDc5ZYq8g46L2ZAgbxWf5RVSXV4TCGw7zQ5euz",
  "key19": "3FpoWGm68um2qbTaYLUdbyrc16UMSJqZKXgGS4hgvHCaseanKbeD5Qu8fXkuYaK6ximQXGjp2gfZrcvaFQntZwwL",
  "key20": "3BDfxukXbAiPLZ1yPn4jw6x6WMM5aLAWnySP6XR3vk5tEMyoGLC8VMMiP41SkRALhMpBNQuAQc6JmGwNmhfqU6y4",
  "key21": "3bcsZ67NRSpmxb2LqrGVFApgXSzJyr8s5391D4nHFbcako4JC6Un7Svm5yX6EWZR9ZqQJrBmqUvyhufBrSJGY6ig",
  "key22": "527ad7aWqAsF2Xd1DFZ9JU69c576PhoEo2YyGtzHRU7aKqmvZdMoFkpCiWGz1SRWUtc2WkKPZfJTKd6jVSSvfU5a",
  "key23": "4caeRxuoQMEDMBCkGGHttUBME7aD8uuHSmLWrME6Cy2Pdw8oGEP79WR3LvbzBGqCqzJm2TkwXC3gDXJx5SceXkMy",
  "key24": "4zCjLpoN5m5GAabg4GrXKwPCFN7Y64o8yWxo3mact3nNe2qrFAQ2FEmktPgysZoT4wcTrqFqcpy9WN1Mfy8nheSQ",
  "key25": "4mibn9Sdw9gmrwediHaAx6x1gPCBsQK2js1cqQcJM6zXE5d3vXzKcpZaWVmNzWz81N8aNMrxkyUgGvXMXjBKfB8u",
  "key26": "32VCgNzLA4C7hFkpDCsQXDFT5n9a9JX5e7E3fBWb7P1ZKokiskRxNqNVfaNwrD3eFRcvZdt4m9ZAkF8HQFZtdJay",
  "key27": "2QvxzC7DJVo2m4ZPKf2D9zsddB3jmggGfVnk5aUSD3s6tFUVfF8UxfJhi1nGCWJCEcjCudoq94Rdx9Lczd9REQT5",
  "key28": "4uhRmy4HVX3bWbGsNm11K78K5YJJjN5XZuR7oMdVLG21GuRpjpUEz4VEAaJWeSnRmY4tz7dXSsKFvJo77hPPbUtU",
  "key29": "57NYQNMNgyyDWJQvqTHnaRdcV64CzThrRCSqUrM6RQcd5DChNyeHg4ELowEzSW34dqHbwJKsL1jLU6jkHfsdEzj7",
  "key30": "4ukVBo5431LMrNSRGCxhyffVsCAzpghR8HZiHxPbbZKosVkmTPzosXXm44G9iMZhfAZZTAqunjTeWRnSTrcsPPg7",
  "key31": "5oNju4EPbo81rE2D4FDn3TUc7SVpeWSjjHUqRgMgmkCjrH4Q1Uqngey5mNWaVqTWcXJzMRGkY2Rw547FDSfRLZGX",
  "key32": "3qyPciBekVeazRRhW7evdYEdjapoHTq7rwnjVqAwdJefFSrHFUw6zyrpBPDg2XQw8SQJEgNKNVnPUaMb7fGEjF8P",
  "key33": "53qGjxko9LTYaTFtwF52zxvKxbRQzbc9BBaLmpYiMpd87FYrr4iPyFxs4mz2yErzd4P7mDQb5oZSr2n8w9iN7A15",
  "key34": "4pUFUzG8E33SJkiUjQLXACDXyTrHPaZsRH576hpmnuDwdFuqrpwZ1Bregb5JFaRR9BjNoJ8qUBXybA5c2iftXw82",
  "key35": "ncYmHBzxWWQnyCGLqrGC5ssaQig7XbGqydrhp96zLSCNuXTucPtzjdCw7yRkjjkkVb8the7TLkFktmcqraWUPR2",
  "key36": "2D1AMSEC9ozjRtnu57jwrHdUkAQEzedeyB3fihU7unGDXgs4VcbWKSCJajR8Nm2VtrxkXip32twCraht7bXJoqEq",
  "key37": "2HmPtURTVw18MFZuCTLPbi6kzQQY16jumhqrtraw2hAPp8nxRcmMoCuzBBUMdS2tW56gPkSZCe3txfXYPVVMsS6T",
  "key38": "4FkT1t9mbSSWDm1SVRaWYn2kjKkMjzuXxcB5TK4vWTqCafCUhGWMRGDgkVv7saUfqWkGEujFKmgP8mWXDLE4JBM3"
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
