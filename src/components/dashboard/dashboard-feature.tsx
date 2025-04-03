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
    "8HTmNfY1VNM626hz2VG8cBs5pVLLr4cCeJaE5NFspaJjxoNyeMXKQ9QyA6i9BQL3egyes3GX4osjtKTcxTkBMBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wk2bEkzPyhiLQf61yipD1VRKEykjQabQaS74WkgX6UEPzriGm4UH5PNCBbwik2mU27FHhKaC7WqLS2sMwWKGMad",
  "key1": "34ZuMiB6Lfxb8cXbwT4rgLwPy5SkGuf9XTKFBtefVhrSa7YDkD8AbmNsJmTzQkCSi8xx5LCjaWE3Gtf1jQ94oJi",
  "key2": "4TnfZsfQk69T4zWCKYk5uTf3b9kHy536WrYGtudyVgAnFPAAAdvM9FCDshitv93s1HH61qQjtg8igaYmt9UDj9jM",
  "key3": "57bp3R4vKyxXzjHsXCBqAG4LQPUYXfzPY1ev3hD4BnpBbJEndGtTS2KQ6TXh5yvEVj39D7HUdFfEQ8nMkpWibT93",
  "key4": "4CaDbaHeDP4tJgTFK686HFV6Xrn7kneVtgY6vEmaNg7kQfi67BRgeK88QmY5hK6njyoi3FGJyjreE2nFLm7rjnEW",
  "key5": "BJhfDMKe56foGnBAighuhZVWncMDx1xGVxxND9erWSeQsSSMStRDJuX7g4k2nGkBVapd9Q9BScdM9WwZuyy3TF1",
  "key6": "5t1KVRRVgNQ8YxvkJE1qhxS9JqNjX9iETjxebDSDXTYWofJHoFrLqj4fmqhFocZUiSuG5ZgrD5Aw51U3R2NxFz21",
  "key7": "3AtaHKbEdyJvxaDJmeCLuiq7nXeu9fhh4spFmS54D9vMW2ZiNrn7DsxFpVzxFT7823cZANdYRHDUQc9Nk1euH8Hp",
  "key8": "vhZecwsw8mbrr3ZR5rmMjKX6LDxKqFYhmFa8PQBnrznPF6qtraKAfx3puCQDZbE3STfAnFhxWsgyxzXPfToB48N",
  "key9": "4ESHHkXFvzgbpAiKxHDrHBemL4voRT5GUzR8J9L4aWY5r67wbkiRmJ8iX9hW1buxykeo7Ea8mEpL5D532C9jstJY",
  "key10": "5ykt9oA371mPPx1LHnbMJE7SWycbbEzmU58or3yML2dvK4UrkbvxUKZvbdPz8iDkWhLXr5CAnYnpcRRV7WQhyJcq",
  "key11": "52t8cHUfWmz6W3s9B7QsR4rS15gfQK8GyMLaZcfbrBY58FxmTYCokr4pGtiVcdMG39XuJJeFSuZtJja1tVCpdEHW",
  "key12": "5K9ZQpr1pWcWqM2ahkK6w158uCNx8ngxnAqaZxXiQf13Tz9Wm7Kv7UaSd2LBjQxMSXjzewgBx9xTayszNg8WC8oU",
  "key13": "S8ZifTkCsBu9HWC8EABuq5tTH4EXdU5me6pPDgnSr8ogY81jCjiM3FsCQDyuCYvRgLMd6jRRENPDQzK1eRjmkN6",
  "key14": "41ogoF2kcJWJrbeFDdsFJCxHdGQgg7VqNdYDME5xJvkWFL4PKTpvA96pFUdwCwF4tDzgdKTmbrX1315mHxCL1Sy5",
  "key15": "7n5WBfhoMCAJC674z57HDbV5bf9CG7ycmGnkQU3RwHdsBo8zJLcvrgRV1pnGtEm5X8QNhd5WZ9L6XUAYYiQe3PQ",
  "key16": "4C2YZAAXCfozgDvvqH6FjjqAaYP9AukQbXej8fQhtMioU33vrrXwnidARkTqtEUYYkBAfLYkR3pmP99XtQBQwa6b",
  "key17": "3NQAcSwvkvEsQvjSCyLHLG7uCkaGdAbZWLQn9V89HZ8apK5jd7zq4pesow6ptsk8KofaHshyUZEpPK13abtYvf51",
  "key18": "4jNNXL4t8YFQknUp5JwwpRAJagGbAtk5xkPUTUxjJv3g8fdXcRG2CuXwzfUsTryE6nMQ4nKzDCXpHrtDpFT1wrfX",
  "key19": "4RB2q3wWM7r5DdhxGcyMKNBgTdTsE7u2Vrrq9b87toLKc6wqroqF5dL1uWm2nU6iHSd9SSwk1tAXDTW25JaQk1WL",
  "key20": "wfXL4r7tDsdnFtGhmUtvzBRK9FEVV15maL1zczf9CofpKYtcd2nh5EueYyDLW9kmQpdEbDhg9zC7AnL98Popd39",
  "key21": "4Eijzi3nS9FCaUsS2oYSUPZzeXZebS6HpSWjyTzaEqjsxYwiHon1xQ4fRZJ1uqu9YvzFG8C71ENLwWvuoW6WQkaf",
  "key22": "5AXJbZp32FqrhMZYsqkKxnoZ2GdWSYgBCrhoeeLrDU5Cef1F9z1TK7qnSbfPuJdVnnXP3cK8Lr71Fhk3cAf1EMio",
  "key23": "2pihNA4vTmQGgSLUuzR5qn55hh8SF7gy5FVLZYWkKPsZ85mZToLnntVnLndnJhLx9fQhvSsHSoSrVESQ5UY9Bmkf",
  "key24": "62GaffuCS5bPWWLP6jSFqMWEoZ1MonUnRFXyWTzGvkFVgABzXWqdT7GbhH6juCAZ78mR5LCGmJe4m6zwjac8DnVa",
  "key25": "4M7XTbiozjf7jiBnkFYSF3nn821sNr1zgZnRyjpTauv3qNnLUirPDujbDM74Dt3Du2yTZ8Di8segXfHJrZo8HXsp",
  "key26": "GbMWB3SSywKVhGwx4bc3anyzS3o3vazANuKrd4ZZL1C6A9RqjaQVXQiuM9E5KDqqf5PAqb3UgydN5akX5YW12bL",
  "key27": "5CE66MsZWodhdVehPzLVJ4LELiAyjBGKmApN9nfrHbvKk2TtfMhcsRcgWqkmEy3CQ8jQkDiN2Yz33bnwPZh63tWP",
  "key28": "3UhidSvcs7VCLrP57RnXUYVhe6wfxoUCghcyBrJxMGfJDefWLezBEimVRUqmnjWga8inx5N9GgafSccmLUF2e29z",
  "key29": "3zNuxezA5CYFd63QubBSyqTnNqPFdt2QEaQpCFu9kGgQyP7vj9dzYQkYmezZwWK3EzKSxGqkRXTnw9R9iQd13dfv",
  "key30": "4s9myfJNLwMfpPNrXMe7DoJqP8iGVY8oHQphaLiaev4iNhhFK1VxzrwREzbXXpPpN9xAiRJ7Lz7xQTeHCJsUjuN",
  "key31": "27sneeeh6iwYLLqCTHH6uMJhahaKbzucordNvX4BYcj8xKZ7wLGmdFuZ77CvmxBnc3FxVTKAmS3rnmJgz5doDqzd",
  "key32": "2Rr2XSX2mwS4VfHuXLm8RJ3yyfUc7RE2x715qrcjQpnG4V5F7mK5R2z9GaKvjDcwfptmD6WFNwyJ3SsHaTEbVBPF",
  "key33": "f2fS8wJMRd7X8R76CYxhDYdm6qtBqPZ8vxtr5oHUXyuX2iJspJ3usURFpJDkgX5Wdw4g4rncF2JdsimULFLxnF6",
  "key34": "2RVzTQAy1z3xkeARDYrSheBkthtmfVWvAHt7dSzYhJmJhLB4ejywFJohpwYc82mEgTnPjaLo1vAwYBGgrgu1t7MH",
  "key35": "AmX1uteYZurpNCgbFXTrtUb4nF9gq7uHy2vXFoK8fETqVrVF8VSZXkeayNpwPuAut1b11BraiNTa72ZJKq6pLiS",
  "key36": "4A66mLB6UXA8bdnJ86MUaL6xL1ErCkWv9Rs7kXFiAvZzd8orNYqvZZWyjzJNv7qSaTrPJ2jmsMczvun8GzKq9zaq",
  "key37": "GCpVNKWnV2QhsHxmRctk23KQRqvni4DEKTj6mwLeKQ5zN35HH97zQKUdDRyFdfoYuJb3QCFHdQvWZobG2vXxMHL",
  "key38": "5rVo5D3Md9JZEXupBE7CZFLWxusaR1kFots8ZoSTGt2cYtrigFUJ5YMLKKgHEMNKUmCfrifyZ7Kzs56Ynv7dTtGj",
  "key39": "3MPy8vm6qADDA77Lf2ycjAijrGSnpCtCEkLgj7JweRTzwuWxkbEbTopGJCj647dQwsxVxhcNWruVw8KKeshSsGMr",
  "key40": "5rQzsjd1jmTmQVXkK8qW1AW5xqzszMbd8tRfXPjZ2wXmcw7hk4kokc4x5xsLy5JRCEfgepLUVncPdDA4VLEuuFhn",
  "key41": "5prWDWxJQDanmfrbhmrsriu9pLvGujZ2PsVVypSKUijrRuwzejHanEaKmypTfx1MQLDhyJomnArsQqERcLZqVNYS",
  "key42": "5ecqinpzgoa7eMiJaeyKGJ7WJe9dMaXvWjAJTD82upa2vfUn5WAgwsoF3ifrV5U9qFKKU72DjT5FQFvMcKUXbj8V",
  "key43": "5d8RYyajE3sjb8N7dPn47qMXJHCtb8bXotXdwJJ3wLynjpXR9iM2o4qNrXdKEGaC42k3UZmfCFoWnsiraVDFnQuy",
  "key44": "5yEXHnJZ4cBkYauheRL28mSfWxN7cK9RHo6izLefrFjmm1oFjr5LiaSdYfnM1tSojjswiucqPmCgJkgGGAoWxTC1",
  "key45": "5RPZviazysvM7woeYmEhs57zBnShwKiA3EBZ1JANe2BXcoCQXTGD1Nw7ZJNtXtfD4FpwTMeLwQDLxebdCQuu3Hij",
  "key46": "4GjHdPdfeEtd2MiQ5ZRm3z7eqkUVnuuRtqe4tCBPyhgNUUboZqbqU6Kdygh6BMhrbLnvNboNRUUHrt5ngxWcGp7M",
  "key47": "2sPBqwAH2t4ajd2dCP7iLtgPfB33EAa7ios9mFzbxLxcgPM8CJqM142z7ao29VgJNcqAmfaDiziwETF1RNENYeQF"
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
