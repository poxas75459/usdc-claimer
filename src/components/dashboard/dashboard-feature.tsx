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
    "58Krh5niVbXTwX2ushyg3aBwFxWR8RRcCQi77rpW38V6UeVndXRAmp11LTdM3UwW33FioYv8paFXdNQYe838AdSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UmrBFhjT7r6E2mRb78sQyocQQvAGTBkdzC7b2zoGxXDA7CqMAEYkYu8zjehDH7nUeu2MGpHUWAEd5XgQKKkzT4f",
  "key1": "4wXZJWYFfJSXufLK5ZYc4mGEwBSri2gntbL4tGZuyigLdJHDWz8GwcGV7ZxSnoo3nNXLQfBTg2fg2M7jgrwjr2fu",
  "key2": "2GY6Rc7rhnHxJmow4ptPtk5BTn3eN35pfEG4rFmhHHTAjTqCs5JfMyQPKjkDjsYTigkT6p8Wvbsm2x4NzZ4BCb3u",
  "key3": "jmvN3yu8nmHC6VFjZyeeJu6FwQty46LqM4cSkQq5HH7hxNSeopzMH24Rt98VWZAQv83Sq8Wm5nPCRVGP9wEHwzX",
  "key4": "27cwSpxqjx8qPmShdKNEzdnpvzVLWXaXpBpDdaw5xXCJ9fGqvzb5SFnZU7f1tfUZHhHpGHfSnxDwxtZcEbcZkvwb",
  "key5": "5A79nBNM7p3x93ZQoZfe1cHpzrJRNmU8Q7411LQ6yMWoBQ5Q8S2P1sd5N2k9iRZ1dwzMz8jsdDoUxrQzenpoaqYf",
  "key6": "4KaceT1RbzFEn8g1C6QEko7U5wkdx4vVp2WDPtXhjt6EwbA3JsZiftQZNRtdMr6z5gEtHVP6R8Tx71UKjJZVqPWX",
  "key7": "3fqswrt8wP12ncMEuSkLUxLjt3TJbLJHBqtWipBmuGs7Km4joaiN1NQBV3fyJ8v64aBBwDWqVkVJjr425G3dHaCc",
  "key8": "5E5cSKHkpT7RTWt313LWWMgEg1T1jt7pnjuQvgoVkMATsSNhKQJKQX9DVBxwQgM1q97vMHZbj71mpKpwnwLmMdjy",
  "key9": "5nbbiYi7RuuiZxMRPebudQpHNKyCwsvbRACY4UKrENDNsuQuEhH3L9e57CEMRG9qKh2spu5FPwYLqnkJHtsMLGbh",
  "key10": "5epEqykH1pTTHshUP6HNj7d5h97mFjLSdUweZ6Uaofg82VPS6t5xwmNhEdpAXfbHx6njY3juBjRBU6EUhMeiEGfH",
  "key11": "4e1yYmV7YkryFuyehTgV6XECeVrjiEgCrnYUP4Dfdpobgqo3x51XM2YPkqHv1e9KdUwFKHc2ZwB1YSXnjQWJSauA",
  "key12": "44gYRucYz6AxtRbSiNr3UyvwZKppPno9oJsU2DDgxUwTEmfVWqLec5FVfUkMMhPCDPpnLiywyJaexS66mbZqto5K",
  "key13": "39n8qbY11d7qPCxtMvkLbQNvBzbGTDgPxQCLGZizmKCEGQcJQhPGFaryHMEwABXfE8noxjKesgeV3W4CuC5evpSr",
  "key14": "5yAiR8vGc8pUA2uMhRDoRFQxuJLPGdW97DhNtJfQEopZQBNEgBRYkczGc4SzLZz8yApd2DG1McPkkBQdmGQQhvkm",
  "key15": "3Ca69vwHRF27VBrM3Arfdh6EZiRKiQQ1Gxu6PME472R3FiT9HawXRUqxYRecYUoK3JktPTRRSiYPShadV8k8DYn2",
  "key16": "KRuj5WNishjrqvDajQFpydaYUez2jQ8Qkcc1bs3K8j3XagWvBoMxaDeuH9FbWJSYLKFxs4fjJjXGvMLUhFqjM4k",
  "key17": "55EmB3YdFurSwMuJzMvHpc8LWJiRMdTFSaFzrsEipgYhqRZdxeYgDPxdYxC8Hy6TV1ppJbaTc74A62hHRH44Dy9s",
  "key18": "sQxfvvEk8VFN4kywZbnaNDpwfpR86roLz7QkQc9wHMTsNXR6TfnyQmvkwv8QeU3JfoobFezczhYaCwaagTBfxUQ",
  "key19": "5E6q4yAGpsWKR1ZTrSPy5ajnTCt4twap8gFxTcAQyHDDCAyxugDKdtUJDxr1ME9ASDh4CL5zEPvQc67CWJq4G1Lx",
  "key20": "3RJsxbsKrsESjgeLcm1hGRNSueF13SwZmEss8dAceRodn7Dw5pnbkoZ8TysFZi5eXSuQWvFz9ykuNY4x4uCLpV96",
  "key21": "2WN78isJKoJ2mWZEBux8srXM3YeCRnFPi2KnJuyKZXv1y7pqCqTMSWhJsncFKh41MzGUcQEj7u9o2ooQNiyzrnwC",
  "key22": "3gBYBdiqkUGKAJgzn6KobHQBcX8wFFimpoL5JPNrkUsNErHLwEWCMrHvUttpMLA2koAybbMRzfbN9t5tsAVFqqWq",
  "key23": "3g8PwG4hddCthFnBi7XUCUGzEU4jHjnchkTWGZpVNPJkFkqUknsqSjr3xDsGH75uEPWPN8e6ErgjMvfaQED4aGTV",
  "key24": "5UpSrZnhXbEorLj3uCNkUxFDNRefgSxvggEkEPNARHgPirdYzjUFU8dn5Md2hpRkJSp3XPd6UfKunurBsfEH11iv",
  "key25": "5HhH5eFAgjy9BYeaaQ6AEgKgLVRd2F5mA45eouuGeKWjtQdqk8GYs49Qs8E3GpJkLV5Q25cdTsjLZ9er4C9hMNhR",
  "key26": "5mjdjx6N6uS48rjc3cjekh5ESavpxnPXfDBvqdcJrisE5eU2p9MkVVBFg4ac3sNXJUsHouJRZR7m9Y23KXSxVSC4",
  "key27": "3BBvzmoA782EHAF8CnLX5TWKTBgSB7CEpQEWrD9YARz9HWrfWmsMwDhrsWBUemUTT2FGMNDJa1vmgjt7LhDkBrA6",
  "key28": "4NNs96LMXUjdMN8DMMGvdoorodPWEq1N5bqZb1GTPbxVx62ymav6w2Zr1rrf5w3vLixjd5opepzCTa2ekKm7pucs",
  "key29": "k9vHRqTnZGZ2tSHoSJ8bC4VhvAJ8HdATLcGfEqdFePCzJeRfqmvB4fUm6L6ZUGtNdSokTMwqZijydBCwHyHrnAs",
  "key30": "58NWnAHm2RunVRDBWM2aHeorq34599MBuyDAGauuqYpzgzCh81Szq5PHrEhGEyHtuS9QfqHUijzo67gqVv52g2J3",
  "key31": "3zSSULgbBteqcEL9GUnEG9FduwqP2SWb7N7X2RB4XnakKwZ3RgUShzcwxWWDMzMnkTdEGn4cfGJJmrHsJvjgamxx"
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
