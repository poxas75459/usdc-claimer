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
    "3TgV1YZDmmELpYrrJnWxcWrYL2gdNRgCDQBTq1VYTBhNfsUK9XJdsiaTSCcH39ca4g478VC34yVtGyVBrVLd86wT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZexMnznF37k71iHiv6NdHKDYXN7K4SZhnFM7XEhsEQSDx5d2pibnhHdvRaic7vGuUV5t4USF6JcYs7ivY1GrJ78",
  "key1": "5G9qac1MzWFGcZCSwxYwYzbdCK543v2WTUGawZvxG17CW6srvyuJrkVa5dtS57oVzNxYyBUwQYpXsjBvAV32cxmL",
  "key2": "1KDh5oEoiVaezCYhNv1YoCd3Hs2npX58QisEn1iuSEemY9mzKmuCbi5Yyk6ovRHGqBRN4PDAh8oaAjYka6bwRUw",
  "key3": "2i6VwTEKehuocG6Qf6HKLdinFo6fuARx2kcQC9kXuGjhN7pkryKyR8LbEBvWhPH21D9v1bm9CWLt4qVdfFSBtXQ1",
  "key4": "5u9cxqNEbheBzd2ia5JFaK19b6V8ymrBGN5kwiNRvzWZjRbNqMCHDuzjEh91gYPzugPQ2BePjcmjsg1M3i7MLGKa",
  "key5": "55UNiSFC37xB3gg6kVhU5q5s332zdstTbRoMpxhitwUkZivGrfDkCtGVQkYBnNpxnpgByK6ahgt97H9gypdeBte4",
  "key6": "3HWDGMwokZmbv1WwPr5k6ejYdXK6Ahv8at19sW3SpTbpCRLwb9pP3yiBkpYNcpMahQdFDnRjnQ2UxnsNus9Rx7g8",
  "key7": "21Ed8atpE4rRmLEcwf2bj5U7MFeCYy9EySm9aTyK7fYAV77wy2MdvTCiv4vqceggoMYvWy1r5psTVNw89iAwbz9s",
  "key8": "3i7AsUJiSbWPxcXfmjGQPEc7VSSAd2A6keS8HjuFbaTNpq4FcFmGdiD3RpuvVqqxfQ2RNkLQiDZe7eGQDtmaRAXt",
  "key9": "5xEF5AvLCkzvSDjGncXu56NhEdDMuNPozUZFUhjJ16qE8nbk7jWE976iYNsuXFPPWmgea4BzCNPDvgfvxMYQYbQ3",
  "key10": "41HftNkuxrCd5jeUoT53MksxarNEzjjkpZ8FAyEh8UscALz4ttRc4AHgbQC8oszXMPeqSK2F17nfFQYv5KsoVnLP",
  "key11": "3cb23G5jsff5nBdA7KFCpGKHvCemWZiyn1cvo6YMaPCJ1eMfh1v1i9pNxo6i8Centsb8ahUqbh3Mu7yc6pBuFaHz",
  "key12": "EFDusMF3HFHhrvKSy5FStLRSrDxXYBv8Tfc3rsvSs9rJLxrgF8pKdL7JbAZfaJqLuHxk8Ww88pvj4Sj5H8yNnu7",
  "key13": "513XPc86PwxktMNa81fbMK3cxS3hzZbZyqqvB3nmVnxG1PheK9f83nEUWnyqvKfBuva1RQVk5B9uDjsa34zv2CVM",
  "key14": "56PqymgbozpbFqtwtLJmN8ZtZ3dNDYHtgYRwS1woyqr18Aez7mDbdpBreBGTyrRYsLg6LUxCBnaEbjuWUt9U7HrN",
  "key15": "3AFXRBaQtKkAeuUYL3AWhXqDBHggpy7X2VYz5njQnMNmvhPf1kBAX5w1PFvHPT2dpMZS6gDaQPQ74xfMhXYMt8W",
  "key16": "3kqmCrYbJ4DLLgc5knQ7pEdkdNMtQwMXQWSuiuvUKZPbTdZyH8JY5vhPTdSWWPKU3iP8Ni3wvXfefESHEsxn6ZZN",
  "key17": "5QhZc2F2Pv5qSxfxDJQ6ktQfxk1kC4xmd52ZQHA7vCDJGfEkdUFoNB6v7Lov9AFWphQWUph4AkiMduw6D8EfXwJJ",
  "key18": "4rHzoSJ864Nm9B6FvdYzqLRVZa1aRbQPPhxYif9xfzhu7AV8SvtnEiHjg5EdoLYEKeqmCm69uJLyDMz3aPC2YbdR",
  "key19": "2bEv8hn3daJoULP4rd9sscQUBfkmEJixFpoEhJPHqGUggxXqDy8v5GxDXfNY3u7zR2W8FyLwuZCUXxPdWxgW6Lgp",
  "key20": "5mBGigdsZtmUZs7dz87WuJ8QZcr9iCnDbw99wFhDXZFAShdSSe9fZnfK5uBhJAmAfYCahHsBYYK8aNrJd6FJQpqX",
  "key21": "4pKcLduffK2aXkZS9rZaQHRAa8UHc7iQ6dQrkniMdmhvJpU1TWaAoyNbGALLwTVXR1VprnTZEortD86srkTLYKVy",
  "key22": "5WA3HuedZecW67PZufJpubZzam5BeH4UTW6ozvHwRon341PhXsMqCkmC5FjeQEMEPevPwR8N7uXHN6f31KVkGnjE",
  "key23": "5q3uNX8sCZ58Z55bpAw5XvZcxFHihEm7KpNAffTK7fvtP3SdQfUDxmoj6m47mYcCnZBH9oBYMpxAYCd9emEFMw6t",
  "key24": "YgL2KpoYtB8tU2QTxcap6MqBdCbsNpWJhcDu1ADDG4j64VbDEp35msDt16RDXhcPgutJ2kivrti4EhVmd8wZ15h",
  "key25": "5db7KkLwgE1YwoaYVxV3RPAD9MFg5MMxa8wAbKMxodRu15fUejfZDFDLUjGriFD4UELpTuf9461My53EE5LJSzF4",
  "key26": "46L9LFJsnq8yiCT6B28zCENpBomiy9GVJezyo6B1UyWQo3TpzDHpUBhJ7PTypw4EEvixQyhAPfgMzSE8fm3mELQF",
  "key27": "2PpSes674Br6kVWkZ7229pfqtrqWZa3q4tCSMfTsDszg1N9p4VAYj5PcxWJ8knjErGPYdw6WcC5x5yLaSUASKH2F",
  "key28": "56wD3W6gvnwETe9ny6WW2hSR9JvpEBTWJQu59uP7FM9GqU7FJhW6Y5g2kTat2kYGA6kUBPghD9LjWs5iobY3q5Uo",
  "key29": "2tHvPjCSzxxHsdT2Zy1admAgLazYdwCiBvF43n7ssG5mccyQAXrAkNBh1FWHihFppb5kYWwVyCFjpuHmoz3k6Jgy",
  "key30": "5PLk9MJr7YQ8ELDrJe4Ldg7rw1mtk5Jw9akLFe4CcfRAY9kYbfc6E932vK6ycUqcpPuCCQotYATTuvetpNTzd9Pn",
  "key31": "gGEvbFPCVavrnppZbAaZ5ZZ8XvwJwfLrs6DEF7XPcUNchb664mcZocNQ7Eq4EHGxAd3ZV5YLGMyp5zvs3yvaKMb",
  "key32": "65Xe25gy8HpWGY9N2AWTi499oJCYUtQqSQBvXqy3Ck1tNKbvtpDTMybEXZxNDZxrtnUF3LPDZCpkKAMWKBzKtk5W",
  "key33": "QXpeBSr4bYEvSB6XnFNJo9wwDvhFfQxY54i51Y4t91d2hkpxgsu8bRAK4cRofZzj4xMYLZjtiqaEfQ8MNKC8bkp",
  "key34": "2z7VKki84vNA5HsG9efz5cMqsZHTmm5cX43rVmUifvFhG3JzXv8K8LwdcTusE9JMvdXQihJfgQrEFv6BsCV135fj",
  "key35": "2PLbDaYz3gX1pD18mRavrzdpjAyaCWj12M3Py7nMpwYg5x33B9gCFPkjoM5xuBfdnCLSW6VESMgiXpH5oBeMPoCT",
  "key36": "5V8oXcshhTsQxXYEbtVDqFHaiUDVEzr2UuqZsGLZFCrPpGg2kLAiYqpkhxJJpD3yCMw7GWNp1tQyogQKJKqn5xPm",
  "key37": "3PYcPoUeMju8NSDSgC21SaPaqeXsjXGYU1peoyDnQWJVcjRRoEt5PpRCtB5Jd3a3tr9eAjoxLbG3dP3NNjKqyuRj",
  "key38": "4L9BCCwhU3Bb5yU2xPueEKMhMonuYdq1wTKW6kgudXbR67LNCfjQ9MvCYLwEsJPnrakERakmFhcbdNNe7Wju67dS",
  "key39": "4ombtrwVyCAfHxKeu8p8XJT8XLdhii9jpcSSe7PGZqk7T3NuAtKr1imY9KirFVtEGbfP9TCoc5N4GEWnAaSNXYZP",
  "key40": "3yiMUTC2ntZNdytS6R7g64Jo8AZv3LpSWpqUWxAG6P4uMemAioy2RSSoFN6n3EbZNkfxWicvAb7xfp7LGGqphcZG",
  "key41": "nc2rHekmXtFoy9xSb41sALAdAuYj9LY4j1FGHGUuWD1fPGsJAALwVJ8LL8ZZwf5CVwwdkJ48k4Miv42o2FhFRLL",
  "key42": "5CUCSVGG6PQUUJhPeLcofLEq1kFM6oit2e99raPDXFgrjv8R58Lt7Y4TKq1zSejvvpFju5ZF5g8pYLRkpCx9vrSv",
  "key43": "39VDzpnHY1CD6LiFBGQzPwxMacsu1J6kAEwwYia8V8aJ1Fu7V8ymqw5SeneYSMh6y25Umhuz7NS62ZiBSftURa3p",
  "key44": "54chDMykuBf1w7WUWxFQswQ8DAPs7emthP8QFpvxdyFkGcWAUdNdjPkRQ2P2iY2xohc21qqXLdQhvAvbkYM6QKS",
  "key45": "2AK5VBEcLqR7oFbVKSriCYQBjNx3e7aV4d8bGDUCVWACN9KoHy4TGU93Z2AXqYCNJwJheuap3vF3a34dNkQc5aEQ",
  "key46": "WhJTfUNqsfNPvLcPvcrBfLyAKYCJGeUdmfycp8kdw1zi5xLeVTGeaeo86LZZjt96um54KLoetAEF87wsJxqDsoh",
  "key47": "5FtXAmASjKP1LTPLLghRnXAcVsFDKFoZmEdqhwWepR3QwhHX5coJ9vhyo369aU6v1HG8Kc7XJ6VLoLsPFvsTNqPH"
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
