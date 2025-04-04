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
    "4juKQqK9oohEB4eMhPN2PuZ9KTDwp5usSHuwZYQb4XvYD2UcHDAu9rcjWCvvkybyDsJzHUXYHcmNrVXBzPEdUq4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xBoU5fZdecgbbaZFbHnr4mwYRfUrn6kTjn5EyDoZJXu2cSyX2v9KybCEZFzmSVDGSCJxQodvDbhuazkwSbKjRWy",
  "key1": "4ByAM82hPtiK3ekryF2QXaN71axgmwzsyhVCLW5ziTivq95C1ywJx2opQqvrFogNVkn9CVsRhxd6Mdv9wDcTKHpS",
  "key2": "57Bq5NjJXvajmtyRjoXa4gw6goKgQiX1umNGRG6kfnpmyYRW5UDehfiEHeBCBCSL6AkkcLE28eKGjGzncXdiUEPe",
  "key3": "5ZVo5eyp1Xak3y81sGF1sauUSg5Rm5doWG2CmRmVfds6fTLyuQy7tKSpZwAKreocck7LZKTTBP8m8cYpxn3hmLm8",
  "key4": "64ttJVKjitKeMx7usiLqoTdnn9yXrMStQuAF4fSsrGcgii7SUTP8ZkQf1G8tBYNwCexN3XfSYKXganuSQyAYt8dc",
  "key5": "4pXHUp4Q2mcnjANMycQYzDibAXUzovuT3ZTiYJLesN76c6BJnx4ejfKJoHvXamCwFfNebcGwuY3Ach1K5egvJ3Br",
  "key6": "39W6L9Mo4pZboHxEBvxS9kGZHMKnN1zMDdRT2ubpQaFK7v9ahbJ7fYU9c7y4c3kmfCiucEr28P4BUn8D8DJ6Pg5Z",
  "key7": "3SFdMjVuVKwWtLLDMx4pWTGhmbpowAQYbrP7K1C5bvsxPraQD1mX1XSVHJLJFBSQv5dKYtAqsPg5M5XwyQuDA17e",
  "key8": "5dVgxdFqepamZnQ5unyQE4Nb5Dekc1DML8y5vr3JuvuSDTAbc68MNfb6NzpQQEL8pASPRtiS6Z37G8kGBGzTRQHf",
  "key9": "4FjQEFBXK2EroJR7WAVbcYbra3tEdowqEAQX9R8GU6Yp8hokTCvCxtnLWjJMGEWKFDY1WUDEs8NKBXBeB53psyHj",
  "key10": "wgxykYspowyaokYX9bWn1mcg3ttNnN8pS9jgPxRkFQKxxeEF8SBZADsxc3R9BX1dYhgK8VCPPhVT8dW2kUEXUSu",
  "key11": "5Z2iHRKNGQAJPvumnGb736KhZnvvjDh2e1QcXqpGRhBpTb8sQavDBdLpzzenXfg7YFAG8Kv9xRyZTNZa4kGbg9vv",
  "key12": "25iCxJBkZNa2HYJEYKGgYGCeUvUR54xkMni11MqXnHAHLVAmdRw2KnjrCEngh3UYdZD8dbSkZmjZi3iwksARNtSD",
  "key13": "pfc3BMJ64KCmpFYb81igyv6vzkT7wY23B7dHebkCsFdaAWYxvVFbLexWY13KuLTo9hSD7xAc68fGmxdynCxSaGF",
  "key14": "3q7GE5DEhc3VjmEicboSSQ9hqndKE4NN7uRdJEk3Nyi1q8HuUwguiYzKozWabWkxdQenmjbZQ1haYPYZacUn2csF",
  "key15": "2no9D89AEvrP5vwvFqRrnw3v55oZ7gPWjdGGWpiaDRxvaMezjMKN7oKTX9VM7QB7g7E8HHAyxy9H1suVEDc6s9un",
  "key16": "4LsjwR6JFBDCqBTuixnQPaZr3vebpeN7atopY4zH8CUoXGiMQ1mJea9mXdUNnRb6JNiWFtzCfH4144KSXdH1qA5m",
  "key17": "xAURcPhcPLh8sXPBW41tSHsc3J5n2ac6A4xMHkLJbofWqTDPeNm2XNb81oqyssgAYxAshMQYj5Am4QaKkS7gqoa",
  "key18": "4MMH39GX738ArPw4zJKuPQZSNEmhKATZGgckBXVqy9Pxv6Y1vHKaj5M26wrVVr2K9gLK92p1k2c5cYw93s8xZRsE",
  "key19": "2Y44NAYFCskKz96Jo6JcXpfsPEm3dC3i4b1oEwAcYkqeKMMXyz3vF33DUrGUYWTym1Eq2bsZ9v1Bf5A5fxTm9FRw",
  "key20": "vfqynd3v3fU12rZA7Ry6i9ocadJLHLZXm1vVGjSKfbgVszSz5RpoZBawf9ahqS9yU6pNagsrcZYfnEnFWfCAd6f",
  "key21": "4V8GYW2osxfZduiHjUyVdkoaRyEe6CdPg2zsBqjF8bWMY96fU6uhujREqWN5dXKeNoCUyVkE2iuZmyVqZ91njNky",
  "key22": "2Rb4YR48g2o58GCKFzkEZ6GZEKbgJV3JDBcq3ZyPkHhHQE5LWbgiM2H7vJPFTwT21twapjzU5c9m4M5zKGCNJq1k",
  "key23": "p1bo2JYYSKu81KEznG4KbMvfzjT24NBGExJhPAKw39B6PWrSeJ2uApcG5wFJRoDFA5GBF3GUQjM5kwTZwQf2zrL",
  "key24": "nwJWZBnto4ofFN45ETz2Cks6kt3EdqjReYtyoGyJLPxDRXNevRoyzZvjU6hUqqKAUyqW3gbrx83gGWGULtACB4s",
  "key25": "33crnREafvxMrfiFx7ccdK9Sy9wrc5Nc1Y9hAQe3X5yPaJhyFGKzkB3qUwe4tKYj9wzdEFi9xRgAH2LVriGi2Z5h",
  "key26": "2F9XfNVY7gzzehuEv2dxXMg1RHYrC3CjGR3Fdgs7sE1e6DiFLtZL22xBd828ui5PtMRwC1JWZTkrH3uHCGNfnWyB",
  "key27": "3DqHyQWedGf9C8f6XqpjRTv3LXAqy7CWvVFJoLyVQcAdtYkGhs6DRbEtNFrnKyQpJWi64sUzHD8nA7V7eJMxCeoy",
  "key28": "HjWTw3hNEH9ZQQLdReFSqoXhYXq5ydzcS5HrySrQtgpc1xcwaXJiBhKirZTjiorc1UgD6FgFieinZYFkgDbDpH6",
  "key29": "4k6Rp6SdfxHVNbLbUvknr9y3XrXUyJPACUc2CjZ2YfiD7VxV7eR86yTYD1tPBUrGkSEKCGLBkZMQ84HMKtku2MgM"
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
