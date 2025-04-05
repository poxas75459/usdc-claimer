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
    "4NXYCYorhFawW64nFt5UjMdGEJmzMWzY4CM366JBsKgKpuCpV2pE8GBxdbaLwxghUeqRmxtnDJWbkc8zyBLSTYtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H1YzcGZMt1TDzZ1Khy8JW1wnwMRUTd9m6mRK8xqjd4n1p7PzsH9R7y95wNuRKHC27CtoY1DEL89QxiieYwfaG4k",
  "key1": "4RVcKushNMgNi3q1md6SgULtvNrzHgk6dBYeWub2WEA1BkeRfTQJkmwS4QcvhUzaD4cDhy8gajgHoLvfDWiPoxLi",
  "key2": "125FfhGxLEJkkM53W896km6a643uMEJonBmJi83YuvdCixsUj9mbnovfAkqq2srPZfjNJifsL9H6Nc1EsiphXZMa",
  "key3": "qZzF5pchYTfEb5c8eUdMbRQVKDKDwsbbxTyg6NDJbcHJ86RyiLXnNuQqYU4inAZxW553Szr7CapawjtGG6cD7Rk",
  "key4": "4xV5jnCrar63VKvcGo71oPskWgRhLrTqwqpEJxukeouP5QQMpeiiJiRQpzD4a5vfpcBRzHLBrQQbXevvMHvAPFtK",
  "key5": "48ffC3vaHAmtNQ61f93DupHXciW3XKddiAzSM1vnoFtafW15uNh4vFjAuqTCDfYeaun5pc7DN7BwsUJX1stDo5XH",
  "key6": "2Viws3NafvnohFmrBgKhKxt6U6q9gTjey4dfuEqmQox2iHsM82fzEsgitWXrY2NX6kwCgVpoRBHbZuRA6kbc1Ukr",
  "key7": "LEJ9ALxmndGgxq3m2NFhU4h9qUtPyv3iZFXu7eXHeP9gR8NrFjb7gcAzbtBGfhBVWM5V98o6JHfCdTu3b5uaRQP",
  "key8": "5wdJLxSoW9fdJHzMLtPAJRTdK65sf3NuAXucWTy9G7kkKUaqMHtSFbz2AGXvKTyDrqwsTaeEkkCQe5xujtQ8niJh",
  "key9": "szTzUXLut5QApNtyDo6ZRKi4UAUUo3RpWTAmKFCMbRk4yfPvGnvHyzwpKub9XzB346ShV4RKNp8NxkPuZxpesCs",
  "key10": "5p2SDrq12dppXcwtQFABVddNvj7zaBJ6vHK5XoL2PU2n59ALSVDouCKx3Cb1UFcPVaQ448VfH19DbmawVfqXp51P",
  "key11": "5bSHbEa2j9AcXEZ7CxqYasin57qv2vLBarYQoyN2DauGixcVH7eML71dgPiNYDgQfZFHHWBk1VRrZddDscLDG3Hn",
  "key12": "2FfEo1a3tigpM1rF2FctUbJfMrPuC35HKg9Thhda6UjRnEVEaYp14kzc57WTmPUSH37iS4gPHUiK8WVTQa5tpbaf",
  "key13": "5x6Fm6fMRiKzdTJU8gaDAi2yti7mUJBnXy6rw92mJzjN4WZ2HtptMGcYLPCvGh7FbRqNenFdPcfjApUVAxSRAFGa",
  "key14": "5prWArZbyNRSh8TTbepnvhJxuhi9LBwpCR7rDhhBbz94zFQaHnQfaA2Aq5EpnH3XJaxx4VggKVFjizdnayTMxB45",
  "key15": "2nt8ez8wNB7hxpoGWGb4pWKunyNEiS4fhshaUB4iHxAcjw8txdQkdw4CUk2hdg6pNwfhGMCQPhM7AWmApEZRuZLj",
  "key16": "5RKg3iEy5wa8CBtd5nHkujR9UWMxz5cFEDa1L7T8VTBm8TARdMC4mZLewmGqpon1v8KFbZRykwsx11d2SDH8pGxh",
  "key17": "2MpRtaEeZJV7L7cJsqueLUMwbN3TrSVU8SJPTjVn4ynAsD1rA1sfPr6Qk8GyYFgHgr1FzfbcGAKNG5hkkPWHQ3VC",
  "key18": "5bmnmWw5Vq8ecSqaLjjGZCYF9WpPxYCkqQJ3GprYHqB18Q4TCwSATssCHefheKRdWXJ8pbAmMd1UZbBBJ9QwH75c",
  "key19": "5Ry2Ga1X3ADJMiDkYx69ZVX2yNYBu9DsKMt3VENhXrJc2yxU6w4pkzKSqH5n7t69fbCXBcwG1W2oNDGvTUwu5A5b",
  "key20": "3LjhycUbNacEEfaHJtY3pkCpd4sfTT5QJuqCr2FCuA4rr4kSpouSirj76BLri33skMoMenJDaurhEospci6t9RiG",
  "key21": "5QgTy4tnCiDfth2frK82tP92aLwr28DYNEwXxoMU5NBPZ7ixCThHG2hV7FyV48RES1AUgNQsaoXa6u7GysU43UAL",
  "key22": "5txjng7qP4T1f9WsZJgEsFW9F1S6wqtFJfaWhy2aUk7fYpcVedxasei6AKntJrD4GiejnLLazvJ27NZFBTYcB6Ab",
  "key23": "XXsWH9efcruhx3VGaHDCNC57uTdcZtFQhNHZirp7Y739s7xfpfzEuyDzPA6erVpK1CLFTRihLTaTRFZvtQpWWfq",
  "key24": "2wcU13oi5V8DvKZ389C7Tk8QmPhFrZepqScDsePt6rS5RVU1aCbkcfjXJmhAfFpu3o6atvJxrpT653w4jQCWss6e",
  "key25": "4ehmfzfJv2CFpqdFhQNsmBAAfLRrQEnnL4DazbP12fNnQ7RZH28PG379LKhwuhxwRtmH4bzBZGcYmHu9TEKa9Uyb",
  "key26": "3TDe11VmKmtbTYHbdFsf8nwJNm81c6uXd8Fycr7cUCd9rDsgxmZbx67wk1Cvt3i1swPzWVFJKAwfeVhBsHh3bWow",
  "key27": "4HJVd4ZNjXyo6sWrjcgRxwNVs9oLqepvksvB4Zmp4HXpJwJAXkgiQgpnFe9UXTXtQKuFoM16MDUjYxCQDGCDrity",
  "key28": "6vUnnfLwNV3UdMw8bKPXPgbEjVHZckK1zJyEwXHo9EyrpjnRsodg5WrGpVguYggSFAiasyf1hWeTXUCZ1x2gd4n",
  "key29": "61fZMHtH6kskMTp3fCRWaLdcDQda11UkyHps5giSAZGYAA5VCDpwsuqxvPQNEq1SdayS47XtEZxWmuncqYvTirM3",
  "key30": "62fsQEgtXrfUngbsBEzFVZVxzdUnLfNWh2GuF8F6JgHpYL4ApzKZSFahF6q8MSfVDUwJsFEqZTcXtMYY17qpJJ7H",
  "key31": "2zd1b2C8SZuXWTz6L5AaXdyuV5Nhxbp8WNEyLXhSRsiSmX7LHHxaitHNVtRyxwVvcikCjUNffdNFume74bGeKrVA",
  "key32": "3H7BA7nL9rGwwuNVfLgaLfaNrBNyzNSJJRrsSZ62MWZGSm1oUVm24hZre2EAvZ5HwVHLdyyY6gdxMt7J3iq5qJHj",
  "key33": "32yEfkSw4TK9vutmeiYaMfcNKMbDDJZbWVD5v7L1PovWPMfkKvNpUNNrXG3ZemeeXto5yLnsRkxuXHos58kwdJxd",
  "key34": "4RmypcLafRqBiP9QFL7F1AM79Mb7ckYY96h69whWoQg3m8tpDZMCuTVTDJKigTNR8of8bKSX8Yo7qFRBTkGsYyrg",
  "key35": "5cUKZjrxcNddGn3P2WE6V4w7GQLxhLnWb5gPS1JwZQHqcR9GGNjk5tk5i7sj3Mr1NpukWMhZdH3gGpce3qHXyGwE",
  "key36": "62g4SCRsEph6xMXSeytpzKbTcXcb3qb66D6BzqP8d14hj1Ls1NPmncYnYYm2Z2jiEqJxBmbxuCqnzMRMASubSiYR",
  "key37": "CiNkffd1KiAv2xMRSCkCu3VyNGGmfnXfP3ojaTcMN2nKUzxZ1MFwaqvzRVE91M3L6h8ANE6XwuQZUXRW1gFb245",
  "key38": "3yy2f8osCbxSzujVkPLWxAdWEnUQ9VPZyZKnUrRoPMb1dsRMo5YgUR1k1xBCfXE6kRnfsYN8auvvuYTApbL2FrBe"
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
