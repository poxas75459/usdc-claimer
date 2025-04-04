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
    "2b2qJvCDZ8YRmCsYCvVVZtdqas1HvoB7zSffC5Ju2Q2gFeKgrPinwDVgTfxPmKyJab3pz1TznpqFDmQRMELYsH4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3adQZ3DBJR66mgnpA4WZNnM3sEr4X2qvb8LVwTx86dPAj7Em5dWt2xC9rvzXygjYgNsfCrwKbPZR3vrMm3P4dr8p",
  "key1": "zWkhK99NfBzyHctmFYsgTBLdCFd4wSir1ymjJtNSxdhLTBEv8pGDiENTNVjaoZXY9ae9uEqATaRBv4ARCo36cnu",
  "key2": "4SCdgPwazzkwWWjfKMjvQJP9id6LKtpz2vQk7hu4pd39WEgmF1wggNxn1D55c6DkmaKBhAymScNmQgTLaX1AjZAJ",
  "key3": "2ZRT9Lz2Vzfpe8i1yj2HJ2Q3FQe9AKL8rpBSQimR5fQhFeRAHk5iyhG4Z4LzLsDsT2veJwLDHnSHDn4qPjQAR5HR",
  "key4": "37sW244aHogPCznm484PeXiEqeeRkPaa7aykSbUVYpFFL2WzaCXgoidDPBN1Li2tXCbwzkWnvYqdoT97NmboWPc",
  "key5": "2osKgLSZt7GJoaW5cq8cQxDKV9PafEtSGRZquUVXG5BpQ7HQBU1QdiL59Y9p7McvRjkHsqYGU1ZqCyWFvTYumxL8",
  "key6": "3eAdpZpMicPo21w3yLwnHuXJF63BKsubM3HrSzEncFg6yCtaT97Ke7AqhY7YBTsUMsMZsDXXibU1VNoTkTeVJKqc",
  "key7": "5xc7NNvTVhxHXToGe83z5b5a59iFJ3Y4uKYhWNJwdxftK8rZUEsxo5T2rgQmK6xFpueM5LthboazmJ4y9mtbkzQg",
  "key8": "4guFkp7Pn9DRWjAcFcgqiHGyTWQzBpgLTaZQ7yoEteRG8MdoPjTBMaDKLQFSi3qzauVNjHFcJgiYKsYnkUh1N82b",
  "key9": "2U7gPABi9keVYSXXVBk3yv6t7eYc5NxLMuDTAupSTN3W8x3VAWC5dqvK6EDQhRPYUwaRvrwxJN2MEqJRR1jwmdYK",
  "key10": "3SyAyjr6DJp8dtb2CMnPAUFZevEih87W4VK6rhU8BXYfwVa8QyDEHoVLxttCrxapjPCfzx7xZNq3db6f63rWLLEJ",
  "key11": "2UBdtN6JR5jHvbNEfM18Yza8EG74PCKsczscGuuNeAiAkQP7e4eL6SecdvgprECRsE6P28hvjwWHbBWKttBNfux9",
  "key12": "4FBbgumXYxKHD6B3C57vjWi3mpbJtbFvAu8ZcCN4ifvct6cpXgJytwkMQBvb9TXyrao5ccDsjQPm1zNcJBLeqqaW",
  "key13": "5VmoPfEYzFZudjJM6ffFBH92WLqY6j96B9siGkCLgm8sMjWrVkVo4rcd19JwX7NCKT7LpLyLZUx56yWLUEYddDZK",
  "key14": "28Wsun4qub8GRbZZZ3tc4Sh9ZnL4omFTcr5FHTYb56K9cRgh7WWoNZaEjseCHHRMYGbvjoyos6axUsK45h1rkdUm",
  "key15": "45nnf59Mk6x83zhZ4f4e5TWNvzd82JNnVcyW9sexfBpezsNwX2hx2sM7ka98BRuPffaodxkoSKmsH25qtNde3o8f",
  "key16": "362eLbD6EVd5DYqu2B9GkZZ5HnvNknp5o1wr31BpHw6TUEjDcVea7zL5hbyoVH4k9ZCaLsZfxHzHFCJnqjE1AaTQ",
  "key17": "PCxE4irmZtqnh1z6rEPmvnf6daAGDGUGJ9weSzPLRrvjkWyL9rSu52dD99FbEvjk3s71opSFhGhmivzXfDJsDmd",
  "key18": "5dMqep3Dn8xQ53yknwCLWZRtptuYv6dD88YSbSguDY9vRq7oWuZrh5E1tdYqc96gfr7hCcAueT8CCCWsWA2Bmjyw",
  "key19": "22gLsP6kLNo7TiXV7N5RbKeoiA8vQeviTpCoyYB2ZV8EpqfXrJBro8RQqwNpW5PovVQf6Z3axvQcNoGGAvnbF31N",
  "key20": "2KoWGnWDvtsUGayEWQod222Z7YovscnRj1PxXwt4D5bZs1Y8uTcD2YtwNZ6Fg9nfRDhspRdPfApmHrVrYxGV8McZ",
  "key21": "2vHFHm57Qusrg2yB4stRxDH29XuhL4YhqHqNk4rYMFfaTcQvSy4hYwKVCoWyxrJ4Dfu6mi7GiTgZD2GEH8bmdutR",
  "key22": "8dnsT5BCB2K6eXDZpKbVzPx44ULRkTZY5xoYwP7SF76AySFMDwUSsEbghxGMo6mWyGWSHnPAdght9bB3fALWJmm",
  "key23": "SLJHUM936eEqkz95M77FUHo2y5jVhQchVXixSX2uPWNJLrXjrJQxeTnJYnBeixfEQ2P44TGqCjqCTAMZoKcPoza",
  "key24": "VUKWSswb7DbyuQ4G7C23whe3up7g21HuDWcTHcenLYuRhVbhyksnErvchJrZWV99DCkEsHxsyGQEVAxyBEr9vEP",
  "key25": "3QkqvuRnresNrFBcM4Mfcg5hn3qLDUPzWXDWFQYGiYit4tY8WnQzYbRWof5o4QHW6LtnHW7c2s3KndroxB7KFitP",
  "key26": "48dmcBFgr8Ew6MaRALGBa8Pezta4ju5e4Ena9v6sQqQScrrtu6j9NWLk91AqWwuDssVhRKrN217SDHz7PUiHkfF6",
  "key27": "4agEngG75mxZ4rF4BPdTQH521iRXmufMDyTFm5dyCop8BqbWADBVwrzo51ptTx5bUXtUWDyysZ4XzHBqg1y3eyvq",
  "key28": "4ENAULoxuQ1hRH6VGsKABNf4A3FVj5WnGEVBTzEPGUGfuA8JX89fn3SN3246YLyVu4B9tBiZ2pXwVtdsjDmFy1En",
  "key29": "ErJTQZUDsA3uMpDZdKcP2T8sfYwFDtziouep4iLY67jRcNdWF2tqwPmc3842bzqNXpaAKDwFbfhHj6jGKZDNg9V",
  "key30": "RnNSewJk6fBYcGi3j7EKV1Gm6M4Y8ZfesBRqyAWTteNbnisGSJyrraVSTvvrRSSnTNpw5VLA2MPUwjxuehfjixN",
  "key31": "4uYGMUpRrnjQEsc5gVvmdgU4dN4YYXsivRXBZTyTcZQ4URnTPc55RYegyVH3XnsoAjrLdnU71pQqoPAmJqiFgYnn",
  "key32": "3wrxj6SWGWoeDLFTBW4x7eux38Nb4LL5FVokQB48gPqaiYjnavcG5t85qGfFsuWB6EE48oAc49HHubiak2qD6sxy",
  "key33": "4GGqu1RBLkpT9kHtQnEybWT3tQf8Hb5Pn7H7nF3hC7Gxa9Xd6sQnxqhBtzDeVUcdxovr2azm2SPo2dgAm3k343XN",
  "key34": "77bkrWsV2sUZvDS5oQcfG5xDA7MUyxpMkiwHrVxYxwEj1DroWhLnd2wFL2uNDzKyn1a4rg6TH8csnj6LUJtjCc6"
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
