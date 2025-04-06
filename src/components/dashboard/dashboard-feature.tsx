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
    "4Ekb2mkHRZXnbw3GSJEoCgu7ysBnV5bFR1f5Lboj2tHvgwtecLynqcbYD3stcM8bJ9LarxkF2qJQV5MuqFiecrb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oQNnanCVHFMH9rGNKneq6kfYQkTjgUF3ShmsWWXkt1DyDkajRW9jHyMWYAfHXATD6mivxm8o2aFQsiRSLfKduXT",
  "key1": "4eMyoisThmuMfNkG3Xzgrkjd4diRLGdcKhkwmj6Sj13pGsDGhE1xNV2CtBqpXPLCvZYhteAujdEEE2hgoCxCXCEP",
  "key2": "BAZFqozvMJ6Bazf5QQVGB9vMA8WLsxa9xrqjuD8vYhwbG522i2quEqXnbE7jBcRS8Si94WYWiXfnZDkBzAJfaNk",
  "key3": "3mDtccYifGQ8fSpBbbzvwM7mkBenULGt2GvZvDDxjwjdNx6fZGZy1rBZuPkFzugzJE14nmdXGt4ibvaRUyCBJ4wh",
  "key4": "3TeEQJ6Xqeo6KCQp949LhmsmL19asXZZEDUgCKMS57ExoPJx643XTfTcyQUyLeruir53LuRTn7ZxyhGKNYSVmjzD",
  "key5": "5Ku2d3sLqCgn3BuDe4HGNjDtCoQSe2uyMFFtE4HFTThxACy8omfYPbPBprLiSZFXjy9rVfQKLYasAGHwAeDxrUxR",
  "key6": "3ZipAvZM1ptJPBsmQmRMNMRN8LwvnqJJxkgQnfcyWdHHRbYgor4ySYiPTwKXL9gaQrSxgtCoaRTPkCopshTDHJ9C",
  "key7": "4GQRyDTbWm9AF5pH1P2z6utWDooFmtQkT2cXkTqENTpyMHwKR52QsXghAbFFDm6sDxhu7CEEpEV5Crv9TLdnUxm9",
  "key8": "3B2ttn5jNssyRq9UXSgQbpf2RepYFDUAtEXiWi6oHDibipdCuhQyZRbn5FpYmvB8T85EaL4aE8LFmCUVmz6FjiLP",
  "key9": "2Uf3kQFeAXyLYhs2nPzaXwnkzTSBe9NkKXVagERrtUDmg2KZKshEkVzB1WmzThHY3PHKVq31Ek2EXQQGjFirBQsS",
  "key10": "4eMfPrFrcRnTErhZ1TGXLnHLFfaW7nSAfsL4nDFy1QAzLTFX4R6ipKudN2hDEza1VsT9V42ydfGy4nLsM77ZeV7j",
  "key11": "5TqtVeZ5dyBjXqgq6dfpE3AKtLMiMzopa4UWxpHfgBz6HdVADmDiqgEy32WkzYS1VE6oDqPyS4YYPqLhUckKVs4S",
  "key12": "DuuieCp9q9ocTtwWB8sKgg684coTcHJYFufUrRCbHXbSn7uCG5uiDsvgXYzvGMG99GeHDNeshaLUkdqGcZJfwmP",
  "key13": "4taxyhhbCCbkiCZ8kzUgM96GvHiax1ccusSZcBBGz3bbqDrPi13AxzABTLXhrJJSb2e5898pgkcqDz9bx3i3GUxC",
  "key14": "4VGnYRgZR7vFGJzhFpduT2vUQNJdLaP1CD68F57YDS3JmbscttYF38xivtfA7P7S1cpLUsGTAdfCFBYiXhqtz1um",
  "key15": "2LR2VwSCtxFciETEfqZR1kc4ZYcs1tboB1gGGNrXPj479CF7kNV8RDTqyi1JvHhMk3J3nu72oTZ3VruYLvHP8jDG",
  "key16": "5XF4UK7bvmfWPfbrmEZ4xvCoKxiQptmJKvDotvNTDbt6ycfhpFbTvvPe72koA28kHJbRT8R32ou8a1hKxaFNZW6q",
  "key17": "2hAmMs1EU3xTSkdD8gTVekiZEQyaTWVG2XrFBvGsGrBUtu3sLsFm51ZQ4YExinUA549LTgmAJiHoPSgfttg7DU1L",
  "key18": "5YabJEGxKFoDYwriGmanFkeEUxvL9kGCkVAGp2XjWcMQv6sNiAZhrEw9cmRHyowsYaxk8psjSbPa7FKUbmcbfuua",
  "key19": "tEiYosSY8cE8ruWBQA4FZftrrtPaazsKhpGvCqY2iu88RCaKLT6UJvPzswLpnkBv741fR3RpHV8i5KJNvNPiEWw",
  "key20": "4o3vuxrXMEN6Zky51nvCFmzEgUB5gWqV1H7byvx1GpVbjiphHWpefbmMWZWLBWe9hg7eFRtpdXHsVmUbaXzbMr2A",
  "key21": "EUJ6WwKXkSSDa4hC33jWMsmZSQHGoGhkA7haSPhsSGoot5gpFshbKE6dQb7gTUV5M32dpL1dTkexJZ8Bfwv6oE2",
  "key22": "3uyfnxsekG3J1DE8gKoDymg5nykvz35PqkaLZ9hwvuq5t6MAcPUbwc8S55aKShmd6YB3Br989fGnz3W9Jg8M2Fqr",
  "key23": "cDAH4MTiJgKLkLeHgXx3DVdV5uboPGLrRv7kRS61BoscR3QJR5TKEbRt1gcNWZabS4vVNHJx6AWqHKwXRbfbkKN",
  "key24": "2yoPyx8GuiwnywL1ndgx4htNSgjjrngunNwmHRMdYzAxGQBCidASg6NQCHsmXkJ8Lh1jeJzeHsXTZJgNG91XjZxK",
  "key25": "22KMvFhSWhtUCpootsZy7tUu5cDNANmZ84auT4qCh5Q1dQY3SAeJYhYbfaWYsLuCBW4pFgLwtzEM4eqzwoNzWjNz",
  "key26": "4mcPVTcr98EUUzvSqbhxk8bRpv4chpah82TRTic7aM6dVi7No7SPtexmYBQNbVrjNBMPn5oYiMYCz9LjPihYMnBC",
  "key27": "4uTFBn8zJ83oKR3MfqUdrDdgqkWocxLCdXa6Tt1od9QiMLc9STCFoBLCTnEQxmbLdoCjBTUwY5PZgz7q7mqtntoD",
  "key28": "RFvBB5jTAJuqVKcHt1vfUSYSheZbhULRfUT6ZP7zfxFhzPiKWhGJdKYdVFbd63nkbbXSafNQJS7ZLX8Fo3LLGFF",
  "key29": "3enww5s9n4cijfb6kJNAzzBom7bNZ5mzicQdnyEqpJJWsorsgjWkJmEsrz7rjUJiVTgLzpiSumruL6dNLP74vMm4",
  "key30": "3f3Yp6eDXf5TjP3sJtTNyoYRF2A3G3zjweo3Hbmd3bf5N2psnfkegiPvoox6f9nTE7vuJNQiWek5GK3to5VtCsC3",
  "key31": "3XJSFTJcQAXPNvL5v67ETArcLa5qdTZHt9SUYFC49yoUquQfpQwEEUdRUvHJMsNki74hUa1m9xhmMAh8d3CfitTh"
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
