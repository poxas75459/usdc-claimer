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
    "5BYhdN5peeWdtBhh3rwkUhwmGQgk1bizs2cUR7EqAvG4Au3wvE3G5XMoijf5UjdHybNM8xwJoYLGAFHG2Qmyp9UB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35R7GwYnLfvnxsvYdBYu8bUkMjHQyXyVLqsju3YYgLz1e3XiskYsbNHgD6q2ZZh3ArhA94KtrQbaeKKrV5oV9AD5",
  "key1": "5P4eKAe9VAS9JUuxJud2xqyQ6GxoB3PakxPECeG4f6vZqqgbPeNYZTwpsGHtQR2uSnKEr6vhyEETkP4s6Q5gMRsc",
  "key2": "43m5bcHbs7VnHwYgmr4Sy8vpSKje5kGbb4PJVLgXo9ieR138My8sKWyxgqBn9F8ygeDS7gkjUunvjv2CMTWSwdJg",
  "key3": "3VZMJj9Pw9bGLjicPfctAvnNPUQdiJ7cqVLBRbom8BY9rXMnNFfDMG74vZW1gcPuqGA8STLVGscY9mz5Wd2FHh2e",
  "key4": "CMRxWfoXzXq2FGjwd2NQrigrr2bV2hAmCrwXgmu5RH9KykqxGRVdpSKBnJefLpDAzBjeqqx9JmzQ2An7ZdHdbLR",
  "key5": "22GDGQsqU6sEwJMadfi738SCanZbRUNqFYjJSNRY2tpt347xbVnsaygGc51KQkXRgc2YdqyxNprn3GZohN8rucgQ",
  "key6": "2hQxP95bxyp6Gm8J5L8K3GWXtSMhmd1XxLsKRVu4tbxRaooU1QrhG9FWR3763kRub81TBrLLR49vFBM3d22w7Guj",
  "key7": "3NmUS7fJ4GiKqbiukY2HiioqHz4yubdU3aKCRvVypPpX2XQgVoxhBtq5KdRanJjuqHNMsAARvGqxojrz3GHWa3HL",
  "key8": "5yAqZmZbVAV44BXTcNtgLf6X1RbXYRXwsUz8e7xGUf7rykzuSUMjP23RVUzXNH841be5U9yoe1T1k5v2b3LosuNX",
  "key9": "4bURvMjujJVE7dmWPq1Ce2LgCPD2wES5yWXtKm5kwbDqJhv3vGGVDDbubRpyAzY85NECHEYcHUDQgQqBujr7ur4J",
  "key10": "39nEjDKyHQ5bvQQLi65RM749yDvR8qrWws2MxZWqqpk4LKTudtQYq9kqoESij2H5ez6pVxdQ7YGKHX2ToNxNKe2g",
  "key11": "3qjrgweA6DpZyiLGH1ssq7fD91oSqtPU3Q81ZrW11KHJvjXFT64XSXbwt8Z4HeWs3pFvqHs2DYGZTmiPUamNdwvc",
  "key12": "4XjBWmGf6tWuNjZqmp75qFSMGNLudiKGmxtP9p2GsgFmmGETLd5nWHLijigQXXFTYY5fByyUhDPD4nxXnoZKZESv",
  "key13": "4q85bmcjUkAdQu2weG4W9CzJLGRiSWgfd5rLST9uJb8pfpu9vtfDf315pbBei2vRYta94UQjwt2dQngNkjTPEpat",
  "key14": "5pQihWNKTyF9jFB2fsXaQBq56cb8s8TWpvA2kss1SWCVmepWKrk5GPsXKTnwMkCtycmDbJPM436enYE7Us45yeSF",
  "key15": "AcH3tAVckYV54M9Q1bhFGcgceJpnjqGL3L8antwWLF1caPEDNA1REErVRjCNPU31khE4iNDuAEVx1t9i2S9XvMd",
  "key16": "536b7YEZbqjwVH3kB8CPL4q1EQKmTqKyoeQvTqxTknHncmYd43AT6cvLFy8PNCW3LTcXK5gMGPLSBWGtVyRDxu95",
  "key17": "4pkeW9pz4ftZiWYfsHJnbojyaurmD2JKJLPjontFv8bvDCbzcwQUPLHfWUvChrWQRwfdP4LvB9bqCAfqF88y16cY",
  "key18": "5kX5soFGuSohQmu85Zr7tJ6yLSh7wvjzeDFzQuMEDNR74jqF2Ea1ENXWkUSzX2wa1QeVszF8fpNhRdf8Nro6h9yD",
  "key19": "JThp1UCMQN1qySofzFeHwgBarPnYVDnJE7fYT4J36JX6ZtbKEeGyHuoyE7nbmXg6iYZfoToZN58WXS4LJR4NLVD",
  "key20": "4nJjjEwoumcrm8tkLrx5853dgaNegZYgfNzHM2hgP81f2wKeTctKAmA7YLwQvzC9v3cTdEyoyHkU5vFeBU92DR4Y",
  "key21": "KcAvFBCdASmtCsJpRpoxpdu8SBiCE6nMuzHvytwu9B4v6BEEQNr1Q8LAU6q4i2kiM4nkXuMHTB8XgstTzkVJ1QL",
  "key22": "3fMvVEXZkcEg35KZVJNaCeawETrbqQXAF5k5dVwQnQXVVJmAYjaBg3XbxfNrkcxGcqsE9YDhRij7rGGsmTVgF8iq",
  "key23": "4yENxMau28SShLrKvouoJv5LxDyVxp2GoUeno6jBsQECqGqtXWwR13EexJUjnQnzj6r9rbnPo9xcMtGqu578CLDw",
  "key24": "5V52YfKMRHLXXjL7DVpncdqmMYePqEqRXw4dp5AH6HnhammeQReuL2Ccu6XAaCGSLn5u8Mgkqq3J6xBkvpeqXHJz",
  "key25": "63on45efho73yMYnQSarteRP9TVAoJwuFNz1PWgb6VrVwAfMdsL6TANrUT8J68MU9hREczFZ6etZFB7NfGuENiPs",
  "key26": "TV2bkX5AmHcjUvsCPq5tQfumGnExvaRKBjyiEiisdHR6nWo6jvAu3hJVYjRagB8jCXjSr4jQ26BDEWvAdq8bfpK"
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
