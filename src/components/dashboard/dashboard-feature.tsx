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
    "3d23ZyyCxtriSfpn8uYgJaWT48GzUrfj1bGLMchMJk4JkU29nM62tAydrB51c7Nkjiq7A7bxnd6LEwmBATqhK72F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cp8kEo6PLsLjMYWECLfQ4YaJKvtZGonTQB9HRVa6spk1FEadfwiXk2kME3pDa13oqmvvd1W7opJfeu2EL8WCFkt",
  "key1": "jbKu4F33Wiq4JbqSNjEMr33pK1LtM5Q5bsLczE4n4Q7HbDqmQtnEsJ2qppYvWRqzqaAhVkAuhjQChHBUkNGBSxm",
  "key2": "62unjPcLnAXHPYu7WcZreYhPcCDqzvEdoqmK5DZyARkQiyYz7jA84QHdWrFYS7wu5wxTUMr7iQGcNSJdSMwdW6VZ",
  "key3": "h5G56gv9Dh8AZK5Boep73ueqnS4fMjUYqmLLt8333QtDxv8HrqGvLEnRoeqebGidG2QGtu9LYsZNRJVbSkuNs4P",
  "key4": "378TBxwfofy1vHi75Whk3Fx2DbPwzqmoKcXSJCBdiywWJE16511Yx6bdSjqxn58PJszzzxph4MXzXYeuZVkCxspQ",
  "key5": "LMcDkk3717PPSHa7JzEV5wNTbbJ8PjHKzLaXYn4Fggn8RHLnmhkCGcPSobNvB1rKrUez3sXBShNi2s8jrJ4PvmK",
  "key6": "NTV2qaturf24h1pvqifW1sHD7A8aPt8RMx1xbWnRg4scvBHtRMWjXQZqJQnnJ9ssKRzYqSwFeG1aSu3VnLtwMyH",
  "key7": "26j4oDYnkdDpye6i8xQwjejBFKNsHN57Ma5d9W8cYW24kEF9ZMF7ykSAZ1SaYBNWm71tGRCGDJonEhqUuAUNDxDr",
  "key8": "59zqZVLJpkgZGhnAx7edz8VBQSkaYoeuaRiXn9C5yV9BzAuQes3QUZPnV2KBjnnZW7cqzp43motCfH7NyGjTx8Rt",
  "key9": "rf6kS5X7paKGVz1Ytkom4RUh1LP8noi46Nz1uP8CPoRg879wQsMWsvVr7jAyHrUGKRVBrh12C8rk44xXT4DLBxk",
  "key10": "4SVt5KQXoN1y3XfCk2jJgMZ7iKH9HBYAfJB7WW8bx2K1qvotSrVU7CMHjMEgwQYPnDZRo7p1bKXcftcqZTFnV8uC",
  "key11": "39YnzvVzemeYnNwEn59jmTSm8D28gjppdGVEz9rEn4xU7t6CxJVpXCNj4nXSosUfPejPTXJg9J5AGL64jfCf5SZg",
  "key12": "53TpGW1grqxcLtPFx6uSaYqF3yUtpBgmaYusw7gZJk7177NCJyD2okPGKSpkdpsvZiv9SNv6WctYXuFEAtmf5rtz",
  "key13": "2dJeq5ecBF2ZujTg1nUd4S58GkKNySSFGcqTApNLdhuyYW8hdXzubd1KwHFPaEAdyNGb46VsB34Pi7mnvhHGGB6j",
  "key14": "396VS9HKGpd7GnauhML3H3gDwaVdLAxPvK4JPUHbp7hiFzYANcxm7hb3ka1Vfdi7mbAMvoqBM1NAh2PJqWuHN6pW",
  "key15": "2bxWirfnvu72qN2F1iKuaDcSCKiecJwdwxnVm34qxJNCevvkxS7JJRbjPgGAEYzzVH6uADRgDWrxH7Tr7caLBJv5",
  "key16": "2ECHpkY5G2YKiRwBU7pXL4bCCjd7Q9KbrsYkx1geVbE8DKGTaHP54dqjf7AHHeMyNLveJ3n3nYDT2AzEV7MotFke",
  "key17": "qYg2bhAe7B2SwAWiiAnuBa6e3BZRuKZzyYrMNUq7GH5toHvGniCNoYGvNNYMs3MeNLG9hzGbcKc7QVBLhWWgj3J",
  "key18": "2LExnLWNzjbhaG3d6tTRkFB9dFpW5jq3VLjkAXrYydTGQ2GMdSAVUWhYeheym6Nm3jdUNfV9Gqh82gTsZdsVNPET",
  "key19": "5H2GL1obFigkceuQf2fiFVtBDFoDzpiSPer6WMfd1ZGJcH5pQWRRVACwz1i4hm13ZMG9zNWwKA4cqMpygEoak9SE",
  "key20": "4Q6axxXZ1vi5WYxkPL7vbt4YEKkj2ya9Y1nntNfwsWWCij3RtDQtRPWTgFzgdtX7YWvKbDcpgUB9nSzWkFrxMycq",
  "key21": "3qiJTAobx1FsnSnX9CJP6KtQBEndbVSUcvZymbPGgg6xRXcU9RwAvs9cxQV68hrxiuNozPeZeCELHYoyDpbYci4f",
  "key22": "rqiNXM9xLjb8TbjyCkayk2uZDxXr2egXckRV3Lsv45kbPGFMz9yeifWWxwWM2PDhCnFhnFnBLNcHoVKooqF4j42",
  "key23": "3dggsiSMSZUa6v9wxH6mhL2cBv6MEteheCTPhert7sXPX2BeiurkkJHS7WrkpNiqbDDjJXsVn18dorzPtRc7e2GK",
  "key24": "hpShZxdweLBfUCcuYVCMKKQUvFVcLnQueiDoi3X5cGoc6i6vHEpj11isjBbqfzbDd5gmCpMmU4xaCQnGETxejwE",
  "key25": "3cjDCj8b6sUAnQsHuAJHUmst35vFCKhF3edhroMfWj3n8dowSBhnim2dBNECVivovjG6aupcP9mMQf3uDNpQTekU",
  "key26": "3M63qL63sfkgZr1HUXCUsVQ6QKExwe32XSxQeLGHZ5xburorgpUTPHT8gDEshiuF5QZrBFWNSbY4cAPRUT7o3cVX"
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
