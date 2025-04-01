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
    "Ai8fpLtjtRDgguRwHZxsJZuoCJSBZjK7qH2T6ZkPr2DeYmUDrBW8o1zm3yPvNFzpawByZYEjgbKqLAB4sELjoHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SXp6ZCyoh6yrxrvHCxrDbyPH32Fe6K42oYpFHtRVq7EaqxtE6WNJDFKYmhoiBP96By7GQbfzATtEt4ZQMXEzEyu",
  "key1": "56fXdBDYtdGoWr83hN8syDB1AfoRgyGH2CdsgQTzGXSGPaH1Qjwo2E3jao5sLwNCcmyWcdQtG8WDsbQFcjv2zsRP",
  "key2": "3JbFMtst1fdiLt9g3GZYdN3kdFaUr99SXWyajDNEKtyphndh2L5qRWP9Gm822N7Pr9bU1S9eFoCVqJBBLDVg5swL",
  "key3": "4MeaoBPfRFXEE8MT3t7FuWYjpQBdTAiEbrK9gXJYA2ieSCv8KwkjcCVc2mXgqvN3DPejMiH9jgeTettM8cPbYTwf",
  "key4": "5PsH8DEyuF5h3H6djmq6yu5uVbgaLja81QRCWuM77C8wn5k4gZjrE7igFdgnAigTjWMHtNmYJvJu2hYdb82HJZni",
  "key5": "5PfPjqPwHiZbYAAgNZnN3SCkuwnicrit9EMT8657r5ipTL8XrMGeL2UUY5N5b8MmcAXYo1tpitSnTeUy952oCFEG",
  "key6": "3h9dJvNQEr7wxFq4Vac2krpA1WEzq3TxogqZQhJyU8bPgYaXoELESV6pJyYK1Pcp7ub6jpKQTFu9ohzoyQQ9UQPR",
  "key7": "2LVuMzJtEAZwkethR9BfV6PpT5g5ZPS8ofSbDyw7g6q56Unpu6CXYArUAYsUNwEhCeCLqzPxGkuZTqGE4SUmyfm9",
  "key8": "4tu6EXLUu7RwWGeBo1X2aMynSL5JDv8WGPtWo3HX4T2r6MRJBqC3K1jztoyC8Jho8URRHUTSsTRdtndeSPFXiaZZ",
  "key9": "4LSZi2WeFAhmv6igrRKsPfbu5TaEZ8UZCmUx7qt3iHM5hNVfmXBKsfoE2twCNPKF7SkxQHNYB7GiBCMG1MiNLMre",
  "key10": "8dYYCVgwfPz41sHemS3DjGZoLvnKvkwRGAPJoedtjadx7nDeWykz9r5DryPndJbCrLfQDVB6h6eLyTeuwsVrE6B",
  "key11": "4Cyz5BNFf5S9LGu26e4hUDyMJfUF2WVLvQcx5MnHB2XuV62JdBetueVM7o6sn28Y1yfdnMfbUdEXvrjoTqTRzTwx",
  "key12": "2HC57aWZCdon5e3A8zi9T91LMmRQyVV6bbhfQNGryHuJ2MJmQDHd6fp869HWmCWJkZtA6395hAML92g2gjscBVTm",
  "key13": "2SZcqgAoZs1LFDEzQNQxoVKbXQjdreA8VWZL4nRN1T1atsF4pEK5ri9rgHwUW5hFkYNv5LcNGsxALejyCEUf9tBp",
  "key14": "3BcBg6mVSqCFwthhmtHAiTWuyzF8Y4vpuA9c9TXPWC8G4E4WPmjTQZLL19fNsWwH3aoDLTutDGfT3k79JKrpQjCP",
  "key15": "5jVs1tVNZixFebxLBAvkLPWmkCb8XQtKpcnthpUnsQhbbf834PvfunaNDAxaRoQMuhEnEAY2ish8FgPJBEHZjKFp",
  "key16": "2xTEALexKf3TayGCKcqgqzvwtuspBHn5wh6XoTz4X8RSLaSVVvVqqf7dw4n9eVu2PKn7RRKLekmevGFcZg8Yb8La",
  "key17": "3kux9rgN3ug4ADXaXAAFDpEpDuxjRB2h7gyhiRyD4mnMgzRdPZXLeMxHsFuQ8Cx5Jd3VeVunZ7AdtsriU9zGmiJQ",
  "key18": "32ThLq3MybfnqDhqrkoatWdPbrtbsiVbFD3vhE6UzPbxT7JWXDYgSVsjVKBfmMncXCoWHXtx2q36wN2Qkv1HmSWr",
  "key19": "52KhXg8b7wkLXaG8wBhQvn7NEwBdUtH9HFam5cgTbh6arSqpLS9aKnqWHgnseD8Xjk14TkMM2EkeodyVpYgkhrdt",
  "key20": "2SjrPjMxqZPDySVXYXqRfYqQy6fk9WipxNVTyi4AJaFunAcvLbFc4v3j3wzToFe2yrAJUdgCJUKPwewctHyjZgrt",
  "key21": "5Ady1AQ5w18ZSfwHh5jx73ZaSc4GZehxpQVXKawHRjasWVShBh663BTkaFh66yZvoFAT4qQUGUVfnPFQNfAwSp4R",
  "key22": "5tPCy5sRpDnTivk3fm2HHxYEf9sn3MVhGAatJwEZTScaA5WstxsfWYfbKDJZQZkAtEdBFMTdFhukPYpW6Aebpx7z",
  "key23": "5Q71otnu7wbLrstmfE9nnLpC4U7SECaVXvKxkPhLFmF6BVNMz2kPQmp4EsB5sRACpVX7Zc5vZfSuwYQpheP7VVGw",
  "key24": "3oCd65burLEobXpQcvQhVWbv8aMangrsjBAgBik1edm2g9e6PVJ8zxG1JB4DxtbU3tK4PmuNqMcfgS8VQe9vmPy3",
  "key25": "jtirRsQ1frBj5nerCuTcje1sar9DDrCW2ngAjeBuKXUyaxvBxzkos418xkkM3mfTq6oRF1r2Hj2E1S1yuEzcwFU",
  "key26": "2y3wh1xQ81HCNiBsZArNkwybZCr7tTxA8wssbNuqhPb1twdaU5FBETo5FRAC8fXAo3nFxacHuFQfqo171RCYEpp6",
  "key27": "2GBW5eVMRQBWXd1Sy9e1vxXSYUcG2A1RHao9AMgpq4z66Rzn5YbV1oaKrPRn3xqfkE5XGh7qmsMXuMEJyzcD1Bu7",
  "key28": "5kRn2PiVpd83Sbod1t1qw48LPbBjGH4CzMxu1zPbiQNSEyGMBWWk3mrCw4Nsy3Jv1685vb5jfSNDhLtzGrawkoDz",
  "key29": "4dNPoZbPbXWiNTJZrtwesW4YdDnGN3CWaSasiRQwUKbFyrTNw4Vcjn8RJzhPujuPfdsBVDz1AjBz9Hks1jbKeAiq",
  "key30": "vj3o2N7vbVzU3BumF9rFdqP6osso3mUpCUjVsY4mM93EoHABopGo5oMbN99XVHiAYTtEV9yF52MWyJwyCXPt4uN",
  "key31": "5QXtJ4pbBpp7Rm3LxUbYJTWz9GbBxKVB9MzijouZcYopm9u93WSA4CUzbUG3yo4eEzk1XgbNdBnWKjEJo7hrsRdq",
  "key32": "2LfvhDGd6bR6nCWNkfiFjsRJZhhmkip2nZrk2p7BiRaoeSkcSy6jpr9KseT1rVMUYK3tqdUSgguyR8Y9TNhzcfGh",
  "key33": "5GfJRoG9VcKeGdmMdDQ5iETqcsn9YdD9UReiDx1VHUHrqj1rBuc5RBdQQbLWWTHUscA1j8RLH7oSxb2mJ5b7GxS2",
  "key34": "4BZvsQqDEs9fZ6Fdx1eC2TLNfnyY27sBVEZQNMcUGtnZ1FWd6RpkAYQyXj3nsRSgaqrZUMLsHKSgUtNdHkk8QMof",
  "key35": "5DKuBR48QQQk56t4WUfKfpNFQ52Q5W8URAmiUDrieVrq6ZVsTAm6BMBURKyUo7zxZQpUXKNUNyRkHtFStxSYsSE8"
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
