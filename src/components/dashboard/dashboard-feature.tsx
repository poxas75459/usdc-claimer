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
    "4Nh4YyjCyCzsqE7puFLDEmnCGGcKAfyWFNGSi4GWzbhvA2NkdLPRvwS4R8VWwHmUwqbPof1Gk8uN8bCpCCBj2jed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oFFQnqig5N8HXZAHo1yotRi7MRF7f5CeeYV3GTFyYyozeytVo14YEEbFAjxLkCuTNBtXpaxEmHjPdGP4QpaVn2t",
  "key1": "3G3kceAgyoZij8RdjEK9HL37d1sXjwooxH7bHZtTPGrbfBHjs26PqrhnEdzrErz4sdt7PypwQyNYL9hgKZypWfBS",
  "key2": "J93dnyJ4NY9Ew9gSQFtXfky49R7EGfovMKr2QvLdtrspCHEUELnmm4so7s1YDWbQ2Wqb93ScEan7yRMGWFCiNcJ",
  "key3": "ceJvhEXexxJF1TMZw6mVM4Tgi9WrKQtrEW4VNbFYTR2i8LjhKeVAxCC3uqAdXp7rBsyyDMTh7RHgcex5pB5yhho",
  "key4": "2MK4ZvxAZjpQvWWn4qCBFbaDxGsvGwtsuYHaEjgr5yX9oPn3TMfcmgUhXjY3f6LP1Wku7JuqmtkfoJFVZuDmXET3",
  "key5": "cMCWfo9dzukZnEgJbT1CK2D4PnPpUU7BoYazeEVBCar9t9ZRx1bXhDysR6Mab4wahWesZRE7do6sr4qbTrbfj9E",
  "key6": "4WTEDvYwy7VUa9VYKnaLTFCj4AAqpmJeXSVmfG7BiuhCj4drKU3C7N3gfPgxA8DoQrZUPLtQB9cNKueCNoexginQ",
  "key7": "hHjVtFrmSwP2coUdc2m3qmu5ycaLiswHLUTimRNkxafZK3zwf7f4RkZZGWDK4Los6GGiEbCuhfVcGFEPJoHYXEw",
  "key8": "5Auc8gj7HVAJXXM1hDvMi6oBfBJ4DC2qqmAtXERPN3Y6XKGQeEF95ozfv1ibT2mWzVdH8NhjTGUEiA16QodSe9nF",
  "key9": "3Yzuj83bYqVXQfD8xj4TZXS3PKyTvFhVCKsUwa1xBfLk4JfLU8hwx67cpRcaseXes1aWYd9bfbTD9i6w8JydT8SP",
  "key10": "4GmaHBupgPfeG6Ub2Q8NpysbzkqhseE9yDjicKnzcLFNn7iTKF4wtAiWeErgenJPhqLHPmVFWQcmhNPzcWXYwPzb",
  "key11": "4KVmUjdSCV3eUfLHBQQ7XyUv8H8khoqVmJLv8xPZBNr21fBvjKjovuYiGGEjWi7KtW62bnQvvmpA948QAjVXiwDQ",
  "key12": "49eQY4bULjnaDki1U5eBTpiCkLR7V79ie8MMdUd5uyDYBzfFspGc7oT9uXPdSc8Zjg5Ysd3iBFy4f4m3qCbDwkMx",
  "key13": "2Dwpa74Vy2dwCveX63yE33hD1fq8karRShuT7jL2L3bA4g62eBT3FtJT9zts2V7s5XoHRjPFGNg9Vh6FFfHBYWrp",
  "key14": "5ZZ97PC1H3zjzfHnfMSmJLSTKy3GTaCpDy8yYbSXPG4GLgHG9hd7AgBVHTAiagzeqso56nJCZxNmwWNVrHWpyncR",
  "key15": "25s7r59bdK9GnPGNnQETBgTiSG8sXAN1CyB74dFDHVUpxRhqTshKJAddxibUk5hphe7WCTfWutXEWmQTk1srCpXK",
  "key16": "2miGrcKRKyWZD1bjXy55xn1DSt7aFWEynjxHbFXBLUWzfLuynfCXL2Ep5vw3fafxMZFtwMRLitVfeopk2UoM1dmD",
  "key17": "522otB1NAkTiWwAutduTVKpbNnhRPTwxJ54gRyzZLR99a2NWPRV2U4C2ihpf3Xn2Rd1F7Si49qPVDJ3bLiD45FzK",
  "key18": "5y5GAcRpUGtUaH2mPTJAFJr6tR3SE6PvHJ86G219Nm26ktmVZSWDjW6DmgVBF3giZYzgMadNkisXrpBXaLhYiSnC",
  "key19": "2K7Dj3KgqHgLwE9ctRJvivDVQMSb9SEhJ7yqg97NzssSR7bNXL769d84pW3N6fPJcb4LSYzvqHmkwnQf7qR5qWPf",
  "key20": "oSTpW7iTNM1J6CVWsNkG9uWAFabkBQ2whHBhdLwAV3udstkQkEBVPo3AuMuT8pcRNCJ3SdAQbK6BUBTjfY1a4jd",
  "key21": "5Zhk2b1kEfh62zq4ZVogQjJqAw3qxez7VaPAZ3pr2XLgpaqeKTP5q1F6pNFkcxw6Xvo4MrtHSCUzXTFrx5QMudg6",
  "key22": "5L2De95yxhCCNTqeyzLuiaoqKstJV4B5AJ73bFEcgJVagDgU2A3XY6NAC7LJgXCXnGmXQZynUiCD93tE7eqXEWtg",
  "key23": "4u2i5UrBE1FTrkuWMUKfKVw8vcbRwzjUg5Gyfue6g8wXfntPh8UcMXZLQHA8eE6UuB8W94KF5hgnUvfLDAe71L7S",
  "key24": "61UgSqVrkwTa8A9v7mT2demzVJz8S6L82nwsG8BQ5vyZWk2LGCM4K4ZcNVEnzNrz6eBAaD1mz3zptQd9pW49GvYz",
  "key25": "2VNgLeuYrhNJR4N8qbrZE8uGD3mgN5JHXJjMDh8xSeQMQfRzBZxXkSQcEhLpFQEfCGvXnhh1rSwHpXhDrVdMD3hE",
  "key26": "R8J4qJregsuQQGwjohKbno1tgChebpmE3DcHYyd15VMRbk8BbZ2zi3m8P7hbm2YZtaVLh9EsDezmHRy5ArbtEdf",
  "key27": "2m53EyBpxLs65tvtUreKZjogsiwGr51oe3gNRoDUXH9q9LeKNogtcAGM8bGGrQnquBQJiXEcJDnEnq49U44ZDZaj",
  "key28": "2K71qrYj8AhfhVqQUqLD22bExH7564BSxnGp9tpNBkWjdcUtFXEDaj262UbtXTTmNX1Fnc6w49VgoBTNrbM3G8Lc",
  "key29": "4mnCw556oqNdqTtjn1WgYv2Q7gRneDxfUFAyqdVXWihyCj9XRZc9JtXnYo7jnb5YFuMe9Ce2QmJFukPXKuta8mZe"
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
