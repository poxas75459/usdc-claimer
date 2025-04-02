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
    "5sdf9MVN2S7NWiHksTPaDtoGxgBNmiPYz76c29aE6ikjJJxRAoVHPbouMj1wq6NkbqoFZf3X5ZrSkGP1T25AyGET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V62dFYa2YsRPxTKJFFqjroe3vTdC7oXZXuHwL6jAf4fRx6BjmHyhnTkGhU8nJWvkEnSkk5j49TXG22gFkrvEhZT",
  "key1": "3oHgQL4v8VtPGLCaMZMB1eSSmwk51TNeSyZBPj9DK1JHdsw1wJqBBaErdYeWJxVsFTjrFGF14scRyXiT6dn38pPL",
  "key2": "3D2ZYnfWqGz1k6KLDn7qETTPT2sXwjfxBJ9ejyuSghMJXN8rMoFXV5JUidMBgZtzZGt9qk9hFuqkrJNLKQDDfkHp",
  "key3": "9WDsb4THRQ1V4xQ7Suf8krKftKLB8gR22pKsWB5jPdYLsvURmR6VdndpttAW2xRjsZrJsDrUAsofSg1WgReP97E",
  "key4": "5Jcr4wrZ25Pq7atY3YGeF3FGJfuzeMFcz3QbA3owNm4GZx3AfHbbnoBBwx6mFmZ3R68rgF8ypdpN3WE6UgE28hVP",
  "key5": "2qH9QvEYVtc52nPoF5GUaU12pgyN3F4xxLZhhGNypDU4uQJiCJ2pEKgYQNZSn4Ss3wkxe23F6sujBThMeYVQmTFW",
  "key6": "4hZgGiwQt8NEvnoao7cQ2eyNxGpPYi1N5vvxRSMigqM4rozVZV7H4RYUsjFPQZHCayUm44TenA2Aj2ZztFvfxQJ7",
  "key7": "2ZxmDtai7BtHHSK7TNm5sft2XG5LhqTEEtKfsW2j3UcMEQ13sXbn7aRMFaRo6AZpE1NL7AnyEvQaWbJXJ3rmiBC1",
  "key8": "4FnJADqjsJJFuZDEEe2RXWHnWnoY9g4q5wSsRPLhMKoGF7yyNh12JvdzrZYYFhVgSc26Mqkfz3xMhRTUXpPhNgcg",
  "key9": "4cmPHKSh3doQ83exJivtBedsEF4PmCrVCfy1XWvBC7jKBWPZcPerXDsg4NqtATp3r7AE5Ahbo6pC1jppEmwQxgDB",
  "key10": "2ApnRXSvyP9sriFQZQ2wJDEUJBhxmXmc6NgN3oQG98LU85KxkfLfcp4Vj7AchPymBUaHC8VrXoDpsYrTV5Zz9bLJ",
  "key11": "c5CLHo9Qcr66YAUPiVsqDf2RXTtsKHoQqz1PP3B18QBcw92SKYwDVajarULiSTvy33jegRp6KW8DGgsLdjjjJg2",
  "key12": "5PjBpZCwcGmKuQkc4d5zD5Swmiij3sTFYVmzdq8DU3mxpa9z1Zb91oKDZQXeQPmvFNZHFEHcEuCbTJWhLeUxc5NV",
  "key13": "5gcCyWb6PYPwKpejkjgvaEPwa4DS61PapQVLnavLie4iq9bNLu4U7gARbayZ9uPaSfEtJANqXe1kSeTJas5XN3qe",
  "key14": "uKhh6nyQ3tVimEqjb2opENaovyLwzD4eBXfoxSbDvW7xuJMbg7TVrXnR7JnKAKqbh942bRiiBa1nsjp2UGaZRFh",
  "key15": "4SD8F8HUndWBrTLF1PgSKho4YBpvKdgfcouRKhFzAen6SqAQoRCqjQmCpRjLsoAWEe5vcCUZ3oewLZASn7GvnSQG",
  "key16": "516JpQXtk9GRK79NUpoXh3sBWhKVmARY2TFAWyMXnTnNwhmuiKNb8gzZRBF9wbnnqL7TQmQjB5bsE23NEcwQU4yK",
  "key17": "pD3MM1nGcMQZ6d2dubqhFPoS6arFPcuQ3aGqtYeTQvKio51avfTZJKFDvFaUixjdv6sxsH71ejoM9Sv8x5aV15W",
  "key18": "4z67ZrPWBbyxJK3ahFq9c9EHuqowSDEgpELyAm2qG6MVeA5XXip3ootKKmCXuhXf4SJE7cgFStbmtCawVz3fywu6",
  "key19": "4C26ynZWy2q12mcCAtiyi5CYd2awcRenkiuvN38oeVD4mxfT2HekFMWbAGMbn8brvX6kcGd8ikHenZtxQeXvRwGm",
  "key20": "fsR1jRXs2xzG1Yq5Hpw9osdTSu2g22m9gsHCijet6xJaQa13zeS5XV96N6H7tqS1fQhDNvtKz2TDiHY45NvQzpk",
  "key21": "2UMrKUeZMqrCr5KrYLsX2HaHHZrgchDJe229wZd3JUKYczQ54raNbEscqbcLdxMb3MYKXZyk99C2ZS8gpTZXg6Zv",
  "key22": "5Wxx8UtEjPoJG3LdcWXgBzKHkLJeNdhGjnGJ6FsFFyMmX1qaPsaf2sEqY6kQEDiH5L2dPL3FMnFwf1FwzpypzWu3",
  "key23": "ExQYGoGNiBVcgTHwjyfAFXs8nc9xEn8cVRf5oVtMuJrYJFAvjuYF9oBx9KpyxMx32jXCbvBgR8Pb6QrGgPqARR6",
  "key24": "4UiKz6Gt37kFiPNB6niDqhMtAHa4f4i832S6gv74A6uGsGZnbuZy6C7g7WdXUacD8SFebKCiXTSyaAmzrvoX8YwT",
  "key25": "5SkYMrDH1cXWhvU45U2miSWT6ne9deVoLTKTnzkm9XYttSZitU8EkbLHsN6P4W2Qm4spd3gZUbtcJ8dTeEQRd9em",
  "key26": "3k6wsCBVd7bXCXE7cKhTFMwzXAeVqghDqJKiJwYLsio8Bd6c1fkd32jk3XAN9kfhtV8pqNXEVU1JSxEtoksPzxiU",
  "key27": "4Fx11sKiGycoDDPUYm2BdKJJtcByt24syE5f43yb4XVaQdu43mPt9xGwyqq41iE9epTEXj8qDiDvL8D1q8enyyBG",
  "key28": "5QnRagaPf6gnXrWa47WmNthyvPUNDaMwVt2noFVpxSQdyVLWNTvuW45k9PwthtDJkf3jDMQNAoK9xT8mSmsinCDW",
  "key29": "45WsDXnERSq8YfbcHvnGgFRcN9hEx4HKgYUYyNUspfaFNg3yqK2dhadDwMrHJDB1RaWoy825BmUvguAUusZH9MFq",
  "key30": "4jVZ5jzxryTeydnALQRSRWDeB75QXrzXoXGizPwSU7Lq8JCjqbYseei1wSdvQTrbCHXseGzigocrKX5QYL7vFHsf",
  "key31": "4mqrrn37mrtCLuFBo3JQGQqozy3NCYBKyp5a7wFsFo4qQjyDdJHWacADk1qkvbis7kotCdcyBeFpiaW396EDP2o2",
  "key32": "3UKREvQ1ymN2P4mmSB8sCBxfcXXj1b3zhhyZWZ6UQNc6jTZPrqYHWjDaGTqGQbGAuW4PVkKrQaDFcv5AezzeTWXW"
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
