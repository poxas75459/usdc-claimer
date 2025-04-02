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
    "4Hb2vQVnG1n2sSQsy3zYpiYogk8WH4vugngCFLNrHEiZGdJK64kCnRRYfGnJhcehH6x3FZUy66wRFPVhGykN6rHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47HLWqFr9VXa2qvsTvQjM19cfX342rEEcJy1Y123KkaqmGdS8CfFEmvTxX2dpFTfmrgeprsnxAgkGoDhGmczMDVM",
  "key1": "3YeBYVJt2r66CRrCvFCsrFE6QArC4koovernMczTyicxk2CdxhyMfeDX5f1ZUN8W2BVjMCFrfuE2DHhvkmASWre8",
  "key2": "4BGenTkZXDry1Rotxu7SDBCCgnmN8w2bk6guUYFNzfTUVriw3zG3GsvG6JofhTD6wdmsDm7nAv3qCX3HSzhU8cCH",
  "key3": "4B2oBATkzX2uDrSFYo3dwfjq48nHB6AmQYb93TNXzKkvtTwwarebszL9Zp72sxeWNXrFKwkkPiPG21BBog4ZtfGu",
  "key4": "pDBszhnKh9RxUrrvnnFjbhYbuvQm47icbdy7dyhARoTXQicu1RS92iuAsdsR7n8EQTwCWiuaNDoFfb6vjBNxphj",
  "key5": "3VzbpDspuYs5uQY7C3XGuPrXeMuD96F9qBt24FyYUzRfDruYc75fZ1Dq1GX7QUixsYcSQMWhdE9eSCWc6msdn3Do",
  "key6": "ib6jBbZd48Fy5oA3e5eHsojF6QdQTkBYPcneru37y5Q2P7GGfAZrGYjp5JxZ4Mo7rCciSJyz5M9hkvd42zGdY5S",
  "key7": "5bZfxatCpUAUpArsiPsodWiVrQdZAxM8und9mwDJchAJ6FeV4xt2TjbH8KGweac85oKMUCKyQxHSqJ4W3ZUQ7gjy",
  "key8": "44EFLHh7AJhPyogmHhkaeUDYRJNSkpNCafyZVYb5B8pEJUsc1HZNHsruGheB84q8h99FqQX7r7gd1J9WjmsyE67f",
  "key9": "ivqM6YnL38xohGMERCcrXLaBo8r7QbCGLKzMVBPULhw9dbjGUZ3yrY8vu8ZtRwuCwZiCZNJKRptq7vbNAsYixkw",
  "key10": "2judzEXL1WqDbf7xBBVCjs3AjiUwcFMfnvaVCnVLEA6bCsnzUMTtTEyhk3J4LBcfZWnbgq6SKuFbYnz5j2ixjLjP",
  "key11": "5a6QEFn8SqepBaVzNwVQXfBVdNU9z68thqAbgzvXNPLf9fmNYWxjoSWAocK6yLwESyxUXyDNnRVofEDpWSTqU5d4",
  "key12": "381xsShccMZZzK7ZZHpahf75oP9kuGbLB5GqqqLVMk7yfsbP2ALZ8ckv34uBNoqLBQh5eDaKc4ECPpKMbPBrtGjw",
  "key13": "3DxZxRZWgXQ2uZCdEyUgERD1hhU9nkKvjFodrj4Mbd7D5xbETVMSR1YMdQnsFrU1WN24ieXGpDFZHGkhfgPSmxRV",
  "key14": "23m8jVuZKn3ZbcLs1CnGpaPcFpEddnPp4qhop3dCneYzirSiCmdbQB5QnvJUguGojeniEdyXCLEstgAir7YaQ2SJ",
  "key15": "223ktneuRQwo4CEkPd3wWeE6yBsiuyJCKH5ekmHvfWJ8XVu7LgxJxfS5ZzAZxd2fks2r1botVVhZkdczsavqXpmx",
  "key16": "2a3SR7ZMMWMcD5UYXhDTAiBbhKHqRizjcRpdRdxsseLpifbrMmEc6D1h741a6nxhLN21WMKwoF3EvFZFAwuAvv5P",
  "key17": "cgyC4H8kLDxg4jin7yKohPebsadngGWqxuBQDXQ5dpYTek4CkKkCAKDGcQhELVWcYiqQcHjCSouikoE4h7MKkVs",
  "key18": "21pzoEVZZmm6FbcNPsxVKfBMyBF1PFqJFXLuJMnaEWihiM24zYfk4mUYrYWjLBbQ6mktK5vrEQw9AcQprUChinAD",
  "key19": "2adRq4wtx83xXgaWius1k3HDadpQoPfkATyMvzQtdgLDdwJwQ1ohbUWaeVA4Q7NKVSdm8ah8fZUrRrUaGoTcv63G",
  "key20": "27RdrEiuKf6NvYWmtfNdqAAR81X2UioqS7RqoUf26u9s95FS8Qo82AMC14FiUEkvHpEvyKhJdEtvN9C9UtHZkyWi",
  "key21": "dCfDJdW4mUmm2hKeiYBFiqM6z8bFJtuHbugezC4hCoyN2nBruo47nUvYq91o9KfGR5GN3ZcqJTFtEZzt6qjKw4Y",
  "key22": "28MVjLNYbms1kZZH84H8HCmBYL98sfQVNhRGmeUTiFMgxsa7MHpGP87ToANEwqbQHuetYcerDobV4yKdU8LqyZ9Q",
  "key23": "5m5cbPoFThrjMDvVg9j2EpsfXiHv7oWBvRdQpfouK79N6atPSezUPAuHPpV6gLpkRJz1HaEbHSpLNcYy6qrdpBJj",
  "key24": "CFhDKuQe9Qaz4sq9gEsWnLaA1SnBfjsfUVTn2xVaMQMy9xs4comsHZg8gzHquT4k1PFWUJdKj4nuqcKAPd2Cgv3",
  "key25": "4khgUmtbvQh3pw54hjHE86GnSjA9hJFThNF5tDfHkBnc1oPYjTaHsoj8vsRjS4MEo5LKJAuVhkBQj6cfdJku561v",
  "key26": "5dH16SKz4z5RctY5xnraJGYZKZnbtw9tsgmutsqwfmTPV3sY1RE416pFSRzuNf8NJHPsso4Vk8qCv7yntudhE5Zg",
  "key27": "4oTW7NqsSe1QGVWeXWn37DP6HmQjW48YNNTq5Z3ZZ1fdy3Ne3pyx59gJy887yzAGBiwCrwcAd5QA6Te32fPe2ANU",
  "key28": "5M1pS3aa9EBJDXWMP82oMtjMpeThEy2sPfQ4cCK8e8TyiCfMx6kKtKbgeAYQM56XbS1nAUMhgE9dicHRuGNVtQJj",
  "key29": "2YUgSq8A1ReJE3D77HiVRbM4NGE1k5upmpjqzzVPeeh25chmwnzz4Pm7EpFcFXjUXr6aQhP7yBJRzU3n7WQXKKYw",
  "key30": "5HGSnNfu6RCm8oYkDwbFSYMRuGL5iW65KdQUtfvQqGHFwxujDgifx69FyTN9XFJcmvknrLAF8PQVScCA8ZUFkA4E"
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
