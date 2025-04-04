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
    "477Ha2en94GwfN3YW1kBMoRevBovwtwTwzsfRN33PBipu5iz277bTNK1RFvkdb1ViMXTKUzHgwGnTd7sd8D61ugs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46dPjeBxXNhe7MQZ5sHenRkm2Wjn5hZgLCH3Nsrp3wtwjXYvwR8HvC8dtQp9tg6jc2bGHEqnBcWSjgdzdUX9bUSa",
  "key1": "AjA4UeHf72znPjrizneNb8f4jEMbeTryytjTqPdeKTmgQEavDPhm7MKtB4y2gghJ8Z2e7mqHCzuTTqKbEbe9LTs",
  "key2": "5FJwHWADMwsESZgXcrgo31kDrsutw5ncvfJifoLJxZPfVX5Mc5BFnHGT4cyWbYqoZ7CiBakwi3a3Q6xjrheNGafP",
  "key3": "4Mqyojbp41fF6DvhAYVESy2jY73uwqBUPHd1ZtxQgKM7g5FyLtSacc6xo98RXz3t5nGXciuptqbpdxhH4BHsn1Je",
  "key4": "5YfkH9KjM2LamouWAS8PaeZzsA2iEjd3soRaHwJFUa1qV6YY3G4Dut6oNHkRB8rfc9AFSPpFEQyd18HcvCzqmdD3",
  "key5": "4LZqYfXZEkYRXtmWTSL7XrJy1HFT3F5W3bxnBG8SJhsEvy3G96XgVM72PBvzWLznLWJjE5BMEZtoSwSsuuvX4i5T",
  "key6": "3rgRv6MkcVpeVAQcsQc8CXE5VsBceHDSWKcEfBfL84NY4XPjnctuRwuBHqS2iXaUVautAWsMVXw4HazpKfqXMSCc",
  "key7": "fiBdbsd95F5mezBodsYtyqujLQa6gg496jy5WQYBmndztQHrVvsJSxxH9XHbBucRCoZP56kVB9E1MYwG7yqLH2i",
  "key8": "3tnZFX3xKGLpQMd9WxxXVnwHv2MnZucWARa2a2R9TWTYTYK3wnUTH7KUezuj3m2b2Y95V1DCsaFrBC5guvQhrqa9",
  "key9": "2AoHN1PFoJ5Wz94Nb7Huijnk2teMZPthYSKncVBnhwBF7HgBsFFmn5Z3nLYPsC9XFcoj76oDUjmXSNRULLhp2ptb",
  "key10": "2xLCrskTyWLckXhYDTv3JNZffpr8DsdG3MzbVm98PwvkEaJyckJY5fyBR5Hs8NYamizEWgBDGx4YH1rEiuGVkjaq",
  "key11": "2uZn5D71r7xLyrD4VeoAYE99gu8uPgDAdJX1NKK4eR1CM9q8VDGMcnvjDFe4MszCJbe9ZRCmpf4mKisUD9jVV9Sz",
  "key12": "5QuYn4JCyT2XwHT8XtN223tkPCGXTX4m5eKAbWFMubgP345kFpbdBj6TArFU7KzCWHmb7oGMfMRCj89neo8a4tSb",
  "key13": "58kHVBbK5KF8cuSVKq9gQ9KRiQMDrjF9D1ekQWCpxPY1dcrYFM8C7BvwT7YVUqtFsE19N9oqfvoDu1794g3hGVuK",
  "key14": "3svxM6yTbA2JaaKyhauuKC7LH73PMjgVx1FN7qYozawxgw668nQakeDq1tbXmN9bAeHSttJtJgWmyNoMLYTb87G6",
  "key15": "5fA4ZJqvvAc2CXpCKXfhxgeaaz1D7mz6W5pQQRtPvtyw9JCQyV44JFqffwhv7jToFuKH9B19yRwGszdrWQWDii9n",
  "key16": "4Dj4DCY3gqLS6VGgK6xS7DcsxQxE5Xh5a9rfBRdNr6eiotGVEkP7rcT4VPd6jZx7BiybcR9HhotZvR8QPzmpYEqq",
  "key17": "5Pm66bXoWhEPXeBYindLGjnNXmsRrG9UPKmFx2Wiv5PB9iCF5Tzdc1yshwMKz4BGPCf9Yp4aPZ7yyxrK67EW5r4Z",
  "key18": "5KsAZnACUhgGUroDLnvfYP1zEopgJydx8QsPafaJeXNxzfEtT2YNsnvosxwr3cBx4Xvi1rPHZy8RWSxLx2CK25wg",
  "key19": "4huUszoKkDbAUj6J4MAka4seKxxTBUaVgUFzAHBt9ng1KdHJY4F31F5FXb3jP8HwmdkoVhom1Mqe1rqTjb26zb8Q",
  "key20": "Yuez4k9rNZ5sxv4cZmvbbzYss9qiV8o7TNRkJGkW9v5EuLpfQNGYGoSbTWrHtic65WtDx2Td5mkXmjdFDkNP3HT",
  "key21": "CJUTbMCJL3xKsFWT2BmywSPEBdhmgsidqJ1jXpmK2WVVoCF62hqw1VNMC22YTFaHaRa5rbtnCm2vxpgPKiZc8zA",
  "key22": "2KX3j8uNvmV5mzj91RooEJftB5nTHL6ToVkSc7XK7eqbYJQrVQegtiwHLn9mrkkqHeRYFcdhsWhHsFgpTWZmau2U",
  "key23": "4hCiRB4KgcE8ZKi1nEaBqR2kCwDZtCNdLVCfXyr7E7SecM9F8TaLRQgDNDgywJqvgPhQa5gjqRkpoV9UGTXEtReF",
  "key24": "5CHMqg7YwTx11EGksGWdEMyRW5osamqKMo45NrWSgBhUWHB8njzmckAsT2eU4wK3rYspxzJMc77YsYUVQsNep8BN",
  "key25": "5MMAPg1nDFxkxuef5fZVrXsXcJr97KQYT9gEjn4W4VBpp7HwHYdiC9n2ordBjQGjT9P7kPeHtYmiN6rzZgjKvRHX",
  "key26": "5E1MKtkNH4JQz1aPCWxMSTRqah5Wpu8JzUcwzLLgBkoAsYP5sgRFCqdq3dqipFYzUkudx4UXchDqyvyYxXBLQD5M",
  "key27": "4xHxSKJrzFRtrF5n2divZtsiWtWZLVNhC13T6NniHHcb3ud1BdEXkcPALENe8A9U8Zn5S13PGZA7hFdZwCgh79L6",
  "key28": "5eX8eGYvqrigWB4XJPPH9AmVk9gkAHrqF1zNY2AUKtcjqzs6C6e5Dy3Qakjvsa9wxFZMnxv7fMkftswzUXBNXDak"
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
