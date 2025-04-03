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
    "5RK8XFRXfvT9EU85tEU69CSNxvHkkCsHSLkNMujAT1ARaj5wykN8yRANRNJiBQMjY1thb9xDgEysftLFAZuPQqE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mP2aUzYiPggbqKcJp8sHun7uhUnGBMnYZ8A2Xr4zEihYPedSvTLJrVuFjoBygidXkiRU1jY8jtBzigXE1iMZgHZ",
  "key1": "38dqeNg5QNgBKqkZqpo2BjJkciyjh2LWGFTVQNL6R2TjWm7tCWzwadGcRfcRqZaV3CB18RaefsXCviexzBSBkga2",
  "key2": "2z1oRobBDsdZYNiG3a1Hixtk1ra1xGSLD7ysQnKQa8HiJ9ro1Lk7UMoeX2S1VL5YeMSNyz4nqGjHW5VvDhv5CbkT",
  "key3": "2mXx8KfeUCnkpuXqkDQAcCVYjQEVsBmxrAsxw5ZaSLbowQLqTFFRvj4PT52kzkCwn9SQm5JDX4ivKPrW61Y81YQ6",
  "key4": "4aW6bd5FyXrpZ1uRmTCjXTytXki6h5A1qeisjpc3KDGv8nJhj6ttGAYjhkf9sMHCJeoLJr5s5rg37cCkyVP34ZTi",
  "key5": "khpFjYJ164KEmDWtTYu5QZM8tBsZREciQweUfCqhME2dUY9ojGhyFWjX826BGUSchebNaK9nwNZbeKnZv1RLJNm",
  "key6": "431Ye8kokzrKCwtA6QUb2cucVPXadcCUkxL9g5D4XmjodRXtEcE5cxAfqfuiidLDbXmv7SsnKbGC3nTZPajvt6ZE",
  "key7": "4ximHmRi5L3uiSiUyvRbTQY8vuzrQ3FCkxYmYf9qTxg9DNvwXcuMKXNX8fiutBJFB48MSBqdGbR6XtpjpsZp9ynv",
  "key8": "3drZR5cX9HaHZkptvMA4HKsg7BFNE2ZkS6D8K74Dd7vEe28JuN46ghTvsFD4iVzGN1ewqB96E9PTbVCN89jrto3c",
  "key9": "KEQ6ez6L6sQNhFe87hw5yeYAmeaQRSG1Bp7zDQyAGPmZRLKaFYufEFvJ6FikvMM7Lbi1vXttqLyx4L373jYjGTC",
  "key10": "5hP7UEkq3YRiD8LrPEZ1UgTYakdHYrugaCMpaoJgYCJ5UtTXcMuQEtYSV2zqBSBc2X3WJvUNDy1aSyBhFLLKSMDp",
  "key11": "31s9Sdkm6mXhU6WKbycivdxPv75pCfqquhj7URuH56HugCJs1EymEkWoxZ2fF5r97fijXo4ZDDxHWW73yKE2e7b3",
  "key12": "623efStyvEtE5juNW7uyX7AZbnHuGsv6ucLyGUGho8MqKTSddCCkLqJDS1sHLFhjxUuKJNNaTsnJSVmKcHgMVQL3",
  "key13": "2N6pKQYbC8gjXG4DcF28oryANLk4Rj2MmAMEd6mj8hTkREgYN3Q6Yc5VAJ3r5VjqZdaqW7ksXbQVFeZPw4fSn5Je",
  "key14": "zjbnCYPKpFdwyb58xzW7a6mQBbUapQXKVoAo9LsomGpxXVcKFFrCmmJF6X8ETfxJwKEwGHyw29NHHWRzE1nEE5w",
  "key15": "56hdCkRevSfKMwfP2QsGHFv9bJW9NecWeDgJKqNi5GvbPRJv3ZaP3ZnU4b5mac3uyGDcheJGexVE2J8WX4Z1azFj",
  "key16": "tmywyKKdJhHtW8NGhX51wVR1Ms8VUHxqpcQMZZffh8gj1wdVkHCjYPnyibHwPtDWDTZmjpo5QRt5n9p74ZEi2dh",
  "key17": "5YE2mw5Capg8TmFCADvWWwAQ3UJmc3fYCjfQCaYb3NkeJjQ6QQLcbDL8Cfn1SBuhT1fhV6sM66QvERZGNRnjCeA6",
  "key18": "3GSb9KovybFveXMTygtd9Pn74j4snEUNVepYYJDE4Tsn6Pns3AyrGC3vSFAFwUYAjGf8QZGQXarBLiKx3D2tGRQD",
  "key19": "4a7pKAnX7ghC2BLEuFzJyzv8AycgppZXVZxvk4e4FikGhuR34FMRBxw8PRoZMXrSkQ7PCzQvonocqDwGZSZ5gGhm",
  "key20": "5fPF5wXQfL6eLjUqvWFZRGrj3NPdqAuaHDWHQ3prb8ST7rF2XLXhAebpRdVpbdSGEhnbDZgaVyexey2rrFKdD6fp",
  "key21": "57EYxWVqhixvHRsSU3bctyh7fPSySLaaqjhxq8eiqB4z48cDBibsWpVijjCHa3D83zMKpsniMq5FWyJSLxPsxBtW",
  "key22": "3ozk3WnuD2TtrQCkonCojmTGp7EjHDoqYCkMKfoa8ZefQjQ4XWryFrm2FEywRvj1cy1HtaRSkRo1EojVHrEERTkv",
  "key23": "5TTJJJKyNDTxPA2Sw7tQMBcAUpjMpVGkjNb6r4c4ntrg9pfEHWC1YWMqs3WzT5s5BAceinbqnACMWN55A2d5XXTm",
  "key24": "U3ukqxn7PmmiB4r6GCngPDPhkBK1L3QbxuRVxYRou1FpyYcNTzC5cJGH14i2H4Df48SoQcq9Wuf3wXfmkyVCRJj",
  "key25": "b5tPknMz2rVHmSXMmCaHxn2MTB8rtLGPaoBGuhFDaApb7iJdwjKEJNYZrjSywtePqQEqJ5gcGs6Lxb2dXNzgPRw",
  "key26": "53wi7D5kBuzwHc3JYHCeBwwKYRn1Kc4zWbHGPbzw47iFu3kjBUnctjcqTiA5S1waCJEbcDFRbkEtsqrYDL8ZsXhW",
  "key27": "2GJd9M18uxqZd1F4Y2WdbWtybLG3RdeWioPDek6PfgvAjibiaB4MKh3Tg6RSenbLLXfwjHJe62B7rSXo71N9vMtV",
  "key28": "38poajeGvR7vuANTRTzu5pBR6Q5vtbXTa9kZr48gmh2cYBFVWbponfB6GH4YQhhVny4bGhJBwvTtnyXwt9qZvCjX",
  "key29": "237EkyUvrtvuK3MXp9XqMHJbz2mxsiVLeNDY9u5NvqD1qG4sHX3wCmX1XaFHsexgdbJR9qZSEVZEDsGoDFXgjhQR",
  "key30": "4Krgfx9G7Y4wnU5iS2dopHtGyMHtsDYADhsyGtPtHL6G33XREtyNbyB2WMzkhrLBctDnCn96hfiJN2fQx7LPvHgc",
  "key31": "3YpETva8CB1nEU961JoGd1mJh3zh533sHJoFcCwF1TR4k8H7YU9mXBYiKeS6NTfePFDdwaAUQ6WRcQZqT6r21Mx",
  "key32": "4z1DTNAwEZfQkxsBDUKGRoYfvvimnT8SCRKL1KhcjH9uVjpkLrPT1S9PF2yXwFChScERu9F2oRcU1PZArPkBahKw",
  "key33": "5pvaMcusMrMxc886hsNnNWkU35SaNHSw7pD1J3di3XwDP93pPuhkPjCQJDLv2g9yhxAc13Xgmfyas9pAeHVGCiWB",
  "key34": "1ED34z6CMLm4ztKPKjtoVNqTy9pi8hfMqpHWzHetNgwEvMnT3THFYDkMcFc4tWsxbBSWqfobo6VUSYn2Gi7ZHgc"
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
