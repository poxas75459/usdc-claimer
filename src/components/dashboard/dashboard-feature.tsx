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
    "5G7ZanyisV7n2SFZ19ZrmKX3itKtCxQUiYqezPymvKL8dfRo8ke5RTDq1EyCCP25sNb3oQCJKQC2bMphmKrifqEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AJWa1HS5zPTyLXcN5VLaExAeHHmtppWGVXSFTxYU1mghCzVCV6DqgiQMNohsnAqZtaTmsvWFRtoAyXKRo67omXn",
  "key1": "36m2ojw6UtHVjr7mkJfm3braREcdej5kLnPZrDvajr995ncmCLKuz8g9BnfPbTtA4Dwiw8WBRUVsytAntxg5uPLP",
  "key2": "35VcK84v9PZMpeHd2catQTPtFKzakwqWGPxu5Nr4smyK3EKWwnpZePbcPoP118b8mJLCsrWbGpSzMaLHKwGMjTs5",
  "key3": "4KpLAhbrkHnucCUbj2dpU113PnNxhXKdSNHftuAUZbd6hZjv2fbA85cTV97Rw9g4MVoturoVnbZ5z31pXAZyDnda",
  "key4": "2yipwNorRaGwXBWt9xAKAY3hTXk3cUeGw7PowHfwjuSQrXrPj3KGDyKKPoXXArQvjvYNQfWt3c5adZFR6iox54GM",
  "key5": "5E8nLJ6fHwGatzm1DS1K3rpj2PWBFUsgoxbCSx42AvARUWM6nYeu4zgopuQB6JaQA9pFmQuLsb3EewN1GEmsdG9H",
  "key6": "63LTdSW8FHfnEJReEL3Xam18opv3VEmTMcqRB46PyDuKAVEsXDeKk42QnQhxzCz31Bo1aeEBqyzeLdqoENWqkjyh",
  "key7": "3Nk8o626QqUYPURXuUocVxmT1aDv3dDGk7hkx3eeHLaHBHDWNcwEAKHaXttuBz9DDcxnmCs4Tn1QGw1sJmdkfdTw",
  "key8": "4tHJExSgK5gJA5RAEekoKVNVJXvakmJuG5nQcPXsD7Q99jdRNATMRBwEfg5CzZMUNSZr6NzuEP43kTXS7ejg13xW",
  "key9": "3eqhdjSsmHehkJQdF1piFK6g5tWk4Ek9612DKcBZEGuaapBNaLGQZAe2HnsG7TsCNh6ZaGforzhzsDRMUVdkqfNq",
  "key10": "2CMhHoQDGwEz7GMad3mnu6Niye8qRFV5kQZniP5prEpqfpsaaFWgrbvaeCSVS9ghaUBZ42RResSHE9WHK6pipk7q",
  "key11": "5poeugYwFU4aTmzm4oUne5KKAqvNeC2n4jCacRhQJCutujpnfVVfKx7TiTqBiCK1cNdPbjVpej7TK23MUtEuM98Z",
  "key12": "4EKkyL7nAsadecpxaqzb4hW3tmrMcvZoX5PfExeJ2mARYtUoDn58aaxBvdNCdQrfR7XckB69WPLNqun2oy1mFuMd",
  "key13": "HBPcALUbMoULXgCVZpURr6Mh52Lcn8SWXa2EozGk6a3J7QfdvsytqbubUZ7HcYVR9vACBTYqXsPVQbTYCeaM7cP",
  "key14": "mrNz325xEFSCJ2iGnEAo1voCw8mCxaGWXED793818zhoYGY3T57nkwmx3hj82yMowSCwEmMaWBbhNv5JAhDaLds",
  "key15": "JFavaTCEWRNrjoYZmyV3FST5VKtYiLV83CevCva5eEcuWQUqJQxTr9HSHLnkxdB77qVvAbtxnHmZweu8vgR9TZ6",
  "key16": "3JrfcJqrKchyuLSLVtQrB5FDZFj3FiVtKzhqsrmBQCTnmkn8pGrG1ZDe2h8MuZ8N5PkhueNhDEWcge4P7LbdXwmU",
  "key17": "3SDYhKfpZhJpzdGid52S7pK56rThQC2vVCXRMEdbEraijpCkBJjbRUeFQhATNpeMqA3Yr6VyGu2R8i53ZaG3Aif",
  "key18": "3YoSfrVKx91TmwLLUFmPtQN1vDefvtwwvFNZTaQfNWai9gEro7xvnfidi8kbtu9Ah7FX86wdjQPsuGMtvkN2p93t",
  "key19": "46yhqHHowoJkkp6WkTaBAGDVCorN2LwGgysUNZyZwPyijJWJCemAx8JEv2Y97dvBtsxennePDToxFWtGELFTkgCw",
  "key20": "4iKxjhJTi1NvEwzCNXdahFhRt34NTyVjfXBJzwHfrFkpZXEq1ZKcHLFBrBsDFuVp4NVy3YZnFx7taPp5uWy9u7b2",
  "key21": "3o2vTwBi5x1aEV5NQ3SZkprYBMDqR9ZtjkEqhKXMLKi4SexuPeeietSdSK2UhT3T3RZVZUnemRTg5dJxpq3oFKKK",
  "key22": "5CpD4KpJdckQJwdYNPTtLVdeQCcGEMWzS7w3fZWKhF4N6jTq6FPyy1DW15xdeV3jgLDNnHYCJtnaDrnYDSBi8Fc7",
  "key23": "5FJw5rjq8PuP8RfQDZytozU6SFYeW19nxU5jMSFUe9bgi4hjbpPHSSAKGkzGZhSVcqiJMm7VvmFhJcPuqy7oM4E6",
  "key24": "4J1SttEHverTQrJTiUvjiNbk3zCNHBbJFk5BS3aC3d86XqoqyXrNHqnqMjzx8peBYbDpmjzCL69MRkEygTqbiL71",
  "key25": "zx7xbDQpJtY1cLiCVdhwe9AQ5WbQxwJhbjRqKT7jtz2UJZRVTdnnwbMAYzGf55ekFEB6L7jkuYF3KVEd5urqo72",
  "key26": "4qZcNbfUXoR8h3GSqfimmfkqKKCvsYHrm4td1QrNghB9DRufww4PRKLHtQ3nugDL3AnEPtaSyvAf2gZaKyBwDd9z",
  "key27": "m732no13C71AsSweCgaRswCj9dqdHFXsS6MBWQBYe7oAEt6CDmEWmLXV1mWCSw1AT13oHyPcQLKeXbfjvbT1oWx",
  "key28": "637bctBPW563MmWqtRJ6BpjEWL4vuETLHfgHqHS3g4x1B9eCUjHmncUBhAzzdxoZMXUyeYiKyQnFXjrjREb4QGEm",
  "key29": "5XDhgYLKB53d2eBwXV3kmVivBB4iRzDUKCqzTdYK6jnYJFAxCmGnfg4gq5eiG23qusP7QR8CmjAQaPv1Bve7Qcxu"
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
