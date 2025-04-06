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
    "63Nzzw1DQp5Mm1ZH5c23LKBktVHtYdEWnngSGRFcNcpzPhwmfuRU9bUgKhRWvuoe4iR9kTHRY1Wk3asx67Gn1G2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jsBgXBCfzZ4PEQtaYBgskVoivZ8ZnNmXDigjuG9iKCcChL617hDssbPY4pmVQxKFGLXrPR4kr6bEv1fQMohqBUi",
  "key1": "5AUbscL9g7Nd1CTG4xxUvMswyUQnyypAjtz3i3XmQxhzk9xntvhnH3ERsFncDLU7caAbBBpHizyXTg43r1Fdf8Je",
  "key2": "5s8YAkGow6uynq94uHMhweWvRGyXe1zuyX2ZVw2XZP89kr7UhCqSsbb6Rn9y8GK13ncQnYAfDA5mzssLzdhwgTut",
  "key3": "5rSR3nki8PdqXY2wL2raguB35Qh4QF6ovWiAhuzVjTpqEPE7Jm98RihQqhmZsKRvzqUyi2hNvcwsDz92UV1FRMQi",
  "key4": "2PWM8rjEu8K6cB8sjCYmABDeWSL2E2b3FUfUDHFoZG4M7XodmCLRqddxuhJciisuXS9PUEZgfgc5CHkktto2MsLf",
  "key5": "4Sj5pWHDT17sYWgEwCrsjrZteHXXbjxJGw5yShmiuzm2GoFZzKaLCQtf7MFB9WQ4ZnyASg9obbYL2DWMXQgLygB1",
  "key6": "9MNRfDbuj6DC8TQ3pBunkTvsL8xs5iHkiBXV7NkRSTNwReACLFbGoqUB6BehWjQwiMyRuenJcAi2ZGX685NDSUV",
  "key7": "48LVjTH291rz6BHzAhWAuRggYuovrUCRGisVURmtfbw5H9FeTs5gryrGzdtzWXgAB4vTEFRg9TSUhDkawcx355b3",
  "key8": "28fRvBcLPSxpDHiC2ZtBXkhmpfqX47jG5QTeAQNhtzJFmzAAWLeoasys3knWTKZJAPrDCKk6XP7jek5gMMnxKyaD",
  "key9": "2V9mo79r74z8LDb8rPLGXKL6cDhCj8h195tx8YGwmrF1ocGM5x1MqGY1GpiELLQ327cFdNuUd58Wq7VLjsEqecFR",
  "key10": "2AagtDwoqdfFciNG9dE9bKUBFvwyokNXhoGbihBrXjHw324ZZZKhHNiWRbN5ngo2641V8iw5mVgqR33AgyLnewGJ",
  "key11": "4tcWHv3fT5u87X8APmdgHRcb1YZHte9VMrZb792WdFBL5if1c2LXaiVNjwh6y6tFT2YZ1WkpGPQxM2AyeVCMPK43",
  "key12": "2WE2d8uYrYZzPxGe1C6wZyHGdC5CYQs4hHMZXgnoTbJCvgvxwaJZoDgRDjdVTavuR5JMs8DKVZ1HK2fWvoogzynf",
  "key13": "4kKCVLcgb66tGVLJtuLfvWPD4tPtCP89Dhyiew9eo5gYuWv2yKYDcx7B4TYF81C38JcvDfYXJx2XGexcV8oE8WNT",
  "key14": "4Dudd3mZ1a5VbcvBpU2VzKWUrtSJz4HUC4du97nMJav7xSG7aJpVfFFngwX2BT4e61y6Z5CXtAUosGLnTv6vKg3a",
  "key15": "3xtsHa5YaLCsapUacFuAFxbA8giaCPHg8saTwzDPKddKhkKQQbS3BEeQXgDumnCwfH1bekxx5wRNiaShLaZB91sR",
  "key16": "4gnFj8rgDdTkKora1fvBgm6WK22KE9Ef5SpcASVSHdXkGW3RP1PbArebZY3iUzTtBbHKHQPGGhFGYx1V1ee39LMy",
  "key17": "2yFWZ9mxGPeMyq8f7TksTWgrxRH7hxm3HMQQT3ZT6xPkFk1stvHe5rND4vWLuBXbdVA84Dkk2fArjUU6oHpfwrMt",
  "key18": "4jnfncboaADj7Runs7KiZ15bxg9Y61pnyWPjDgiemmBPPpye5uuA3FQA3sN4oZkiXdWPfaFhEgieVU3VLwW8XTmg",
  "key19": "44ZBY236bb2Bu8ZuzYbg9ekjBc7tqe1BcSCsU9UvB879Bzrmdy5AFjqFVLDmdpiYvjzVH4Zwhey84QrF98b8oa3k",
  "key20": "7K6KNgNynTQyt8SYF8cbo6ZqCxKGs5cW3qXsQZ7m35TkcX6dBGpGWjEdNz8qxJcA3gmvNH9aamgXYLhyK1Mb71C",
  "key21": "4PBQ3ZyEo7gtT6jTstu6JQm9JgsrS8JQbqNECJo1w8TLBBNG7YPdrYyz1HXJigCExAnUf3nN1fL6BeC1ybCE6Ce5",
  "key22": "64hrjEkoW44vXd2weYgac8sdyHTYfzf3psLK3LLD2VJgDAJR3tfc2MBiqU7fRygtt5tGtjfL4kemvrGmAoqZC9ag",
  "key23": "43tp9h4tJikUzTwLwv9KfeR9Y3sYKgSUj3dH8HVeX1UP8Q2UNe3TKAUfX5sXpYQ2q62rnvo2o3diWYWxDx28MeQq",
  "key24": "23uWoMbznRRf1fDtYqo3dry8A93iQcMmJSBdpBnmd2ZC7Wv288mLrpxEpN5HaJyebhEMA1B5hrTyNvLjXBxCj11H",
  "key25": "2LX6nt5VH9GywakHDvCxpW97xQT5P5mzhaMeYfWeBW6TocEn9SaeTL7wxFWpXoxLYwUzwf1WHYqyVt9RwqLe2cAF"
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
