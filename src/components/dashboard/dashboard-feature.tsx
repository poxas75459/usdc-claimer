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
    "5v897Cz6DJ9kTkUqFKLkwPETVNgM6q6WpfKZzqLhzfSEGv39VkPPzsm66QZwXMqRMqzpa4Yo5CAy7hBg7aFYPcfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TvwfxUXaPtBcCnh4oCcVA8tTVEWhHJXpwZjXnrmhq7iQYVeqWe7fZwHtykHmS2LPFwums2bJwN4zZrZKgCYYpDL",
  "key1": "4MStrQbD1gQLBPRPvmUUM19taf4U17tNKeU5Wh5LgmmjiaSLx8m7egV86ukgVQ2ddZvbk2L9xu5jvEVht9dR2fe5",
  "key2": "harhKyMRWN827iZyw4yJ3B5LjKu98zBKnERPPKcvxPYavquy8bs1qecCwJfwnyikVS2nDzD1GgFtwS4tTpShqf4",
  "key3": "87G1Aw3smJjRkeQnUawUv9HWRfxw6ALzjECDM2T6yUQYRHxV98HWGQaGYdCRfbp6MbaxaoM28T2boQgct8cAuki",
  "key4": "563vLD9Q5tKECoLuiY24QkyjaxziPG3iXhu6q6pxNvgSzrCQxnoqYNAvL4m8eGXpiaincP2VadcWb1ghVzZGFgXj",
  "key5": "4toYYX7HrECj1hYR5AtRNKhLp84uGtSYKGC5uwyWZjBBPtidAVuyi9KNpgSTf2mSV8UWnKTGqGvjuGd2zDyHecnU",
  "key6": "33AQNFnvuA4mZXo4yoCi5vTos8u3PhX91tX1bhLuNxn1yQ5UUL1GP1rxzNJzk4sqi3EvRmQGKrH1nN1CbAJmFffp",
  "key7": "4DELJDfozvjMFr3r1HRPhJieoT9C5eRr59j8s4Gb11h5ps4akCSfPBAaF22RpjFkXEXuXFBLSpQEhR66vUnMLwWN",
  "key8": "mobXcxUMCwcd4f6LgCwwc8uyK6frySdR7auNUSVd55kApa69cxVqEKU58ihbjsXbsXEthfWsgzY5w4mr1zaMHQC",
  "key9": "4h3yyDTBdG9hnUh9qeYCw3EtX7cqWaRUVbRVxDArU4su8wAo7czKf7R2aPkvfi6Xo1GA3JKbpCye86EwBjJqLALE",
  "key10": "57zLwo5hQqfGdv4cYUMQGgxDm9Dk8KXhbxWRyYmjUx6USdtpCKNE1MTqXU3x66nGqaW9RKDCsyax1WPAqqeHD1eU",
  "key11": "36FfJwwXvKLinsdymoXcBxvZ13mypGhxdWA7zTGVKSLKuhNXfW7cNAXNgCpd2cpRBUKoBjwL7Sz5Xjr8y5FDkJ4N",
  "key12": "5AsS6PWz5UTYVroJFbvp8HKRf5N9kXStVSgrU6rk9pbbax3ss7eHQRHvAzxTH5eDWTPHpojWV2CAi27bQbjMriW4",
  "key13": "5shiLuJw1u3XJpJj2mdA223uownQNvnRNATRaBiM3gBAxzPWNQMoNJwaST19zBpT4zYTywUpbjC72i14XrKhyaq6",
  "key14": "55Vc8WKBe8pjBVdWz6mBtGLR8WwPHa6iKvh7uCDWZrWk6uELswyDmoC8zL3DaSKmrjcPibGHhfi8SXWsuEv6tobt",
  "key15": "eNQA9pBUHDdF8ZchvrWKQUvLMd97YtzNBWfPvxncrF1Tn8rQoqNym1r1NzDTc6X2aLUZwkwsQrdJdmvERAuLSNh",
  "key16": "2nMbDRUw43HcDtxTXL6jU8oxjSdF9KFuXEHgPG51iDytWT2SLaRvPvU2FZgNQVTFUikYSoQ8icJtWrkoWY5vxMG3",
  "key17": "4aqfLXByQ9fizMPZnLMFCMecGeEwonhsrt7LSPqJx4VZqhKNL5icFEEEC264qzD3F9uAV4yeAmrcVPsHAAEnVWDQ",
  "key18": "2JHt2HyqhmjezYZyniJxpQ8LpRErcTUAUejqbGca5WUSdc5uiRRHNcMLDmAb8KG3Fq3oVr53rcR8Z8AzXrjKba5L",
  "key19": "4QK47hYwiGVXZ6CMVxLCDPD8mz33KGZRAM84xrsNEGpmTvBrngLbJJCBfYFsEDyty1te7qhQEQHgXXsD9kmfJdxx",
  "key20": "3HZAJ1yFHt91Dowx6uToQD6wLqhWUv4BfMQtLxgCqjCaZrU7PQYo1r5pn62gfGX9NobrEV22u5gE7jQUic1fMM28",
  "key21": "2akXypzzThSKgkXbh45L6vqCxYqhhKXVDeWW7eCTDtvy3rxDmtSCs5TkouJmkk92JmQC4q1JJLNFdVmXkJWDcqVK",
  "key22": "5nfK6kwBQGcdKNAdqAyqdcgq3Wy6E1RYucpAEPdw6FpiQnSSo5w1gpYi9qtGod1ChxcCUyFSHgTa53ZmTEugLogb",
  "key23": "2TAe9zNZCYkoDvABimY8VBJ1GyE1Fh59FhFt6FoRhjk8Z9PpaPWiKQYgjCLZX5J2DHt3LU4rWc4Vmg7PLXpw6LSK",
  "key24": "3M8SLvB8iLgS9NJQA9gMCCU7NTkkHHhxLxoAfxpkLL2h2gwoXv2XoLtgPurJ4YM3WXSvKP5qHPRe24GuBveWhVxs",
  "key25": "5YpSL9L5suMra8TmuaKyiv3A87LLsSm54AqWt1atDoyMd1HEdRZQajNWupi7wnFg14SDddTNdSngdkWx46vSERMa",
  "key26": "5PKVjGA6mZZtwM1EdF9hPapszxG2p74LS5EWttv8F9TpajQg9iaEPyEpVkbX6ZuyKDD5FJydvZKjJvtDmCDCa3QX",
  "key27": "2oZioAobWq7CDqGMC88KdKFKH2TuXoNaBAczBE1VRj2gNqg1DxkCKcEMWUYuSDgy3FCyr5dA5qBLNdk4nJUA4Rox",
  "key28": "644hWnh5KJTNTBYTSdPwYY4FMMzsvHSLuJsG5xrNujJ5L1CEXuDYSKdRKEPd55H3afcJxF2JCMeqqfCVFtNYK4RC",
  "key29": "3Q8m7wVYwHFUSaMMfhbhwpCrN5qmDvQiAF3PnEBxPZqUBuRoZP1MyZjfg6o5FTzNEPGUGjZ7hs6UBshd5QNiyDsS",
  "key30": "5WUQH4q6X7ZHGC1RH8a7KUtqaoscSTKxQSuT1jqPw5vsYBFqJ4iCg6EiiUs6rzKqyGmZCov9zPwY39Cv3AzSA7ZX",
  "key31": "4CYncjmScRohbz3RwbkNJuoChQ4yT9nwDLETDN7AecCBe7ctDYFPhNVUWr4zsx1ZJ3YKQQ2owr5hwsQZhc6TAXvt",
  "key32": "2N4Dg52fhExHAJCDDdcfWtVeGyUKWmXs2RPUQKPW5ZmLy8N1CyyjqwrbNBYfuzR22qaoEAwUEegdNHWqmtSCQMuu",
  "key33": "3NCzJg8xfKBc9c5bbz1qxyVPw83YaXHjkjjqatj5T5fQ32Y1tfwHH8Ce2ZQu9rLTrck559sx56duRARYJKFGgXqu"
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
