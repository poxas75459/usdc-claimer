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
    "7AmgNmFArFBrGgvgvAhXejAmwEpp5StqY7j84Hj1bL8BD3BFmn8MaQPdRFzzBMLcdJGLKJFMMjfD3jRwTeWEP9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LwuQUpPNvGSgP6czwd7zb8ymqY3jXn6UKood1XRN9u1YT8xKLj7gvs5zx8dYicSyzAPmhvLGsnUoJoKwbkPBWg4",
  "key1": "3mZN9qgg42VANcbkJKCLTcqK4ogdjnCvs2FF8smaBhuZMSWiwcCRvMcabouVmiEZNqcLTZnkpECoxYDmitQ3rVDY",
  "key2": "3uUziPdymf5LnTuwRbmZvG6Heqr2EnhJFnbBVkbb7wiDNkm3jfUnoTVekgAwCEA5txFn656vDrH6Fd1Vhu2vW1Ud",
  "key3": "4z4gHYhrNTFz5Mogq48kw8FvHyYfQaDQ897bQJcgBMi9U3urjqg9s88FyKCZqeXPr5QmdsT7tRZnREaSLuMBDEiK",
  "key4": "U6trPMnsJo6wHf8uzoeiiSoJVd5koAZkm2AZJdRTgR3np7gSwDzawdGc7iJnaaoNyGngzPDtLipCBMJeES6yBgm",
  "key5": "U95vgvn3BHsUKQtmysFijhTFm2euBwMJRofeW5mPCje3kFHMDdfKTzSd2cFg5NM3jAMFhZW6DwmBfYv1KR3bPxA",
  "key6": "3yETWnAX3SgGXKC2PnNDwF8ZV4GkptZc8DrN55Hco1KxyJer9yqmZDJ3t5UReRRWbeBxMGuut5Tb2E7uwQGUBkve",
  "key7": "ZVE3DV7ZKGGhdsusAAiBgR1Vbv2SzCxwt9D8Xzk1qLtELJJM3WkeFyHom2UUZd7mpvWvW3G41hu7JyUJhVvsukC",
  "key8": "3Ar9BEH22uzY52Upiau3iWLb34sBb19imbT5rZZN9d1ZWzMXxHo7puCH4GbW76tN3Xx3Lhk9hEDFcoVJAPFmJzka",
  "key9": "4QEnKm8vj7xWgEQAov9928DjrtPoimgev9eRQ8ZARD32156cfZpZvYYFD1qDMu5XoRDjoPv8UiodkFYS53eMEVLZ",
  "key10": "3iD865YrRQzkJFF9UV6JHR55shKZsoUM7Ek3hhh6LAvLoH3zQf7NQwxyNTtsXJ11ahLq2StEQmLkHMveqE28mDDS",
  "key11": "WTTcCE6rdyWbvFMRoJXj6yqPmCaMwwxqMD5XHVMYrDhdfCPwXov3uW1Uj6UQJATc1Lq94mujLTsDattdMA4v8YV",
  "key12": "5DQUzSzU8ScLKnoS7m1U1GUy68VXm8pneHa2McZZQ43AoBFiYWggYAyMVtvMU861G4696NSuxdaUJBoMMKaPx65B",
  "key13": "4Zzh2YeZK84XfswcMPgLurMznicr6uHEga74cydL32TNeBzVCRZTnX6G1iPkZgtpr9qRM2BusQss1ChnGBa1nVHv",
  "key14": "21iefg2tLy9PUFmXj9gJyite8KjLPb48naTEjDsLD8nN4RoF15JJbGZfgzDaJAS5hMUX47eYSd8g6wEEpbxjS74M",
  "key15": "3DZPCD37r9jmi2YREJpRZKHva3xx4B4UgNvFmfKGjKnYqPYMcaFwR91tFJS9PfWhDnSsRVwRusMS8Wcd94HsuQnA",
  "key16": "3QrLXHbUbC6pBaHwQF1pvaJUnCcp8aHxbKbSv7gnpS98oxvEacSse14vV1SH6qe4FcRbA9Cagpu7Ui6iHvCdDXWd",
  "key17": "5VUEaFDybH8bNEmykx4U9T8YdYhy8XQM5bxypFyYfGiRHixdG7wBALui4N2YPQsejtkktMjBoBeQVfYjuGcbqtfb",
  "key18": "4Ck9TXFw2xvKKf3rpidv9K12xZbhfyrEgbFCLAN5tpnw8w8T8v2J1MQDWJ4hrTffMcwqLaSAEhGRobDVSDRRWqE1",
  "key19": "GutzGWCQ1fSoV8z8huKYMmXbX5jMgtCJHLumWp4QXqbo8oHyFTmPcQBZUZXa1XadUag9w7mhURh3f2RmmorB7wf",
  "key20": "4s1yJ8Tb2yyTiYcvMCmQ3nWMAZYQ6rE6M6fVDJBw5LZRP2XZsSKoVTHHe86u5gYCa6r3sia1R6oHn1skPzwSmuZM",
  "key21": "3PuPBk57gZfJwayaFNdmdgLef7sT6HWAckn8wibrKAFGGwoBoeain2VTDBF66BSnfDyj6uXjCH19VNmQDK6mD8zT",
  "key22": "QcDMEAbBRhaSHJihhVpkMossxYrzTQpR5SuYy3GtvX57mbuP78fJj2JixRessqsxLzxAbjuuUUvDp9AyKKwQQQW",
  "key23": "5C5djobtDtooS86r4q2LN9GBhmh7VQSyaW4KX2ySdq9MRFCc7FkLzWAWsE8S7gvSAa4rwNgWQGwZx5XDFVVC8eEq",
  "key24": "SHnwCkN1KbqEdGcxuX6EGRkZCjHceA9eZ82MLCrFvuxbsgdjJfK5Vu9nDETqbtuNRcJx2Ur1JykDeCwNN8ciYZE",
  "key25": "3xWEjnCEpSh45RZ6pg7yPN8aazJ8CxKBko9RHsK3Cxd6W6rhhiLRWqihVNgeDoUfNTLt3td1nxsNkgispKUn3J3m",
  "key26": "21KpWyATvfCm6RKEvaFahsfGG5Nhtnor5D6BdcmUNuxMi4wkNTp6wBoCrkCvaZtFwqe8AdDhixp6u1WWv9WfxE94",
  "key27": "5i3eXDqZeNxbaqkoCR2rAN9MytkZApRJkCntRh6G57YTWZs6SLv6T3yZxgrffsV8UjsKRfAhzhHm9Hijrut3N8B6",
  "key28": "4hsSb1rd3p4adDQBJhtPjZra4NvusUyafjc7AjWFqUmxNoTD1ivkz1yDVpPpCKXFkNA8QftyaeU2hNSLLQjgmyNx",
  "key29": "63m4yk4p1ZRS5VpRtDKoKG8KnqK63vRm2vRC2qCfKioWSxMLnt8mnK5NK13sdw98Mt1VVE35aPdkjtyKvQKbRRoo",
  "key30": "2zoYKW3tqsvH2UFqem2SwbuLj3cY6Uhn61rovcurbRpUd94AoTayWkxLRde4j4sKbSEkUr1JYWpfyAdARz71XVfu",
  "key31": "46RYLyAv2WWYxuD4HQy5PBHJ2yyZ3ec3tkiVSabWEqgrgkGzXtEWEgRkjyRqAXKJEstmZEYXQN85PNP6JsiTNB6N",
  "key32": "2vaJz9QV5uxbGFk4oaSiMyqEVvjBHudyL3TbMNBx8g5Wk3KQnDJSJAcvuLJG4bnay4iSbPNGq7eSPYWnY6fuEVtM",
  "key33": "671vVW6Lw2YMYy59CiWLMNnwwDCnwSyajW3zpH69HzhzDhAn6fKA5NJiXPLceu86QxDK2AcLWL7ntZYdaMeCnaR3",
  "key34": "y9uVuRnnftoqv7czp9XKCukcgbGTDR6qbtUktxDk74WSynERTbyp53bisUE3XociaojLjKSfamvD5CL4JJrqx7q",
  "key35": "2FLLnGtZpRhxVhwecX3MnqzXpM2V4e4tdYvZ42rH5Aw7XNmhBM9HPSKhhjEnhvSMHKW6hxASxZUYuSqmwsh5nnmR",
  "key36": "42644Fc3TYK9tc1SX7pAFP761GnikiJFBna3iQvQ5gXRfTGXL47b7j9LafuPqrwwQXdTViXf72Gy1peHLKgz1PoA",
  "key37": "2PABHQ3hnmqcRuxLuN5pKWFqqb1XsDCopmHHySeVpqjc51BTCvPDPTX9rnDumRZeqJdJzwSMER5h8R6v4mf63DLH",
  "key38": "2BxzvxyrZzAAQsLNfz3aTHAVsdeScZhFjtVirSQkHAJofsiVrNagWoY6hyV78yetossMUZ2JT1TjgwcGSDiYVAHU",
  "key39": "67FNvxRx7CUU3gMfhLnBisxQajUpppqMP8i7TeXzgd3tm4bxvTX9kdybCuJvdpztiw2R3HGv232qHEu4kFoBnahx",
  "key40": "8KbiZyLwubEDP8VW7Av8B3oaqkoQjy5J8m1PP5XwJEMdbCHALMdQ3giNrSbwPwSXxmnPCuKnemBjz7Ws1ctcwbh",
  "key41": "2G8tuBR8rtXJoZLERAqTYZ8bMPk86cpbvD5LToNxZUZvShGSx771cgW4P13ujgw6F8Dpa9gVFfh4sUofWhAAE81D",
  "key42": "4HWuQZvQiXHqCoeP56kExcpPfQBhBneymm1h6Ch2sW7xeiRJU1Be9JFnSpMbKqWDvYdLZrEkp9Hn4p2iWZfWBBPh",
  "key43": "5Mzjr2G9tRfqu5P1PMzSvz9eQ8ZyF4z67bogwyu52qvDJPBKwoMvNvcFThZdhthF54tJojN81j52sX9XLohbjNdn",
  "key44": "4NbVnKEktqRpUjG3qZy94ytAT72T8oQrgnnuGAr7CCm3XEnVhvgrcCfZhgfkMFBguFduwhfZkM3u4MSNKCzPYb9Q",
  "key45": "4LnUNfeqMjZGeid5XrvJxaPkiMJwjBk9JzKvrQ7KD4eBPnK1ecFsBs3G2QRXxpvrivDy3eimdnHNbbNdYuNgsdmt"
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
