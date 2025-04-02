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
    "3YKjoHXdNqPput6qGuSCtXgMbJFaxT6bsgKrxJKh6QBFd4gBLfoD9rJCCSWNaAahKGNTtQjTd5CT2vQkAfJLqMAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F9CJaFv5VBrxcR7xW81mNPxhx4J7Q4z3MAqMLEkYpBSA3KWJ8S4v9hSnKXGMpwUK2t8i7wB8L4sXSzsTBZFSkTz",
  "key1": "5zv1TmDnQ3hghfaDYGhGKV1uymn7w4duiPmNxYdXivoja2GJF1qeB8bJXZNGqgN8XbJAYf4UuuN6exhY3fKFC8vt",
  "key2": "4prke3sNyLVHHFHNSfhAxzh4gCq1vYzazMZHdSv5drjASzJ3N5fzMMiisE9u54drPdRYBBuD4YBMQGtPKeJVvq8V",
  "key3": "4r5pyGwkwrC9txwVi97w6CQwyBMAzTuXL2Fksu2p21cvKw6anzwDgPHN7oFN9UZUDCWvA7eruRMGwcfhSHUdgD4V",
  "key4": "5jb9N7qLgz9HrCug16DAHYFDeDbjTVBRCFNRSQNgFQdK8VBwwWwj72bywibeBjNjMtrSVi1CjqSzdvshaXsVADSA",
  "key5": "4SK1rkrPrQNYNKKevdF7BttiCq1FP5URtEhWdU7vGVjRnDTeeYaDnXTXTZL8tPyMpC1fW7BSTgAaWNLFMzHndCEk",
  "key6": "2JgKKjJuCAbg4LuEnvHT9DMoYNQS4gRniLNkdwjmNS7Kq3ThifCjSsvYUjGjytar4CtQxvZhdFycH4dbSHQ95AXH",
  "key7": "23nrvpB542tcUKmit7JsGLm2ucQFjJyocUbZnNmVPDYXqftuGJZqmcoA3dG6xW2tVMKBkBTG4RN7TxWRMMiWMuVS",
  "key8": "4ghwMTZFdJF5dybPmJbpPXpd77t1jjBx2ojxrjnEktdNE1axQ35tFsgxfq2ssbRuGrWBfrJJav9A2yjcpRKSHcDd",
  "key9": "2oD7jUm1UccH3kAc6KJVkoevidDAT1LReXxKswQdEQ5Q3dfRQQXgHARGP5HrJx5HP6AHfdpWEjLd8VgfCGSS7t9Q",
  "key10": "4vJRjdo7mT9nC3xPFWPhC2jWcsZc6mvpbNTVSdU2UsUiGtodjQs8gAitbkXoGw5FkPz1GWWZoTEtQYhtvuC15hGJ",
  "key11": "4f8PkbpG8veV2FK1Gu54WQ8Xc579PS113Je8dtp8FUBVQAfZPsSiw2JHw6JtYU8K5nMhZTYEzzzVZAZ84QZpApx5",
  "key12": "eQPkb1Tx1QMkJc5kqjQSUxXVRRc1QBEPMVKZAUwfhzYQPXBpMBxto8oKLicMkPLmsZdzAbrWRZHL5YXCCCgbAWg",
  "key13": "42n4nCi8ZDfdXaQk9SATikmqFKqPZd17mr914FbKQxmm6NgTfMKrMwbaLraeG38tfeQVELSqrEedjRX4CnZpKtSK",
  "key14": "391jjpgz4CFAA9QwAQKz7JgXMCPmfSFpygBAWhZMtYJzyWXM3ph15BUqmNu6rZyWxejNSwGt3SNa8MQC1aKZpCHV",
  "key15": "25ZfkaCZbb6TyibQADKLpkDxFmdwJMhxC7Ri9q5N6whxcQ9ebsrpo74uCZCN4KMqwTPKuwbZMN1NbHiAmvLbRdDb",
  "key16": "3pka6za1recadKXReCSKvx1KJLefwzwKCd1C9FXvEp4FzhC5qfFFQhLk7T3Kuxn7wvBb5HmZGy1mNtbfJrgjvSus",
  "key17": "3sHFXucquRHSLok4RHJGFcRPCjnCk8MPBpagNfDRrpxw9aEiMs8y8yESh5e2aEWNcN1qoZEmvPRkF8RJLSugj65q",
  "key18": "5ePk4cnP74AXXZ9c98Ydqck9zyU4sZD35cVCjhQD6gtxbE3QimKdhoSHzMw1EmFpcWoMfrYinkCBicxthKoa2u16",
  "key19": "3mSabNa7kbuozQbdJTZe66yo55ZmtmbWc98uXQhWf5uD9U4KrZgiRVJY33W7MrYBRxUUHHKVwowoJMKM8tQ9tWJQ",
  "key20": "65MUkYG1zdX8KBuJtLjeKyJdK5uChgsksGP1AuXXmnDezV4Xni4ERYA43YPxSGT3VqzopDYAJ6nqR4NJKEvsJHPL",
  "key21": "5WyHHk5YYQLPRXhSLfAzwuWcYorMzFPfj6hWWPzv4VdTwd5NUwWBnNLRpwNXiGX5JQhcQAyqdYQAH6FvFXba7j98",
  "key22": "64kW1KY1E2nTq2K4PYQz2yjY8cwNgxVrtrH8REcs8AaGPs1z1EJzwNwmAiDzhfCHEdu6AMvBh8NuUJn9PwgCqofK",
  "key23": "41vhfvFuzZD2j51tdjkyQuvRGsoqMn7GFfSpnpDFj9h7en2C6RwHX9ca3i8X2LyfMynvLVJYCK9LTbPscFbac2uE",
  "key24": "4Zje6RWtdsmsaDVJzFPJpyDT7hYWPLftMMkqXdp9j5ZYh8PMetNuqQCfJixZGf4xZqU8CsyUe5Hh4mL4ixxnoPvX",
  "key25": "4zu79QdAXk8i54tNfAQBe7NTimCGyJx5GTZcZj67iFo3STUCyZHybbPWGWYpf5LscGnF1HPS8x6JMz5j5z2zJQMg",
  "key26": "3FXBZRJ4KJEpvpEvNVCbEZRtEsCbQ7uDdUb38gZGviqJ6xTwKmkEvj6AtJPRT78ptbrKkWXujtaZQ6TzUNTY4dUn",
  "key27": "28tmgjvGy7zL2wrV148EbHbDTXo9BubgmDD1amUnAsdSDzzEbLjHwsM9JPkgYgBgdBE5XdUQRNUiaqvkSG2WYhwo",
  "key28": "2Mjs8fqv3trEewczrAr3bnV5aoHADMEpVXT1ekGNTw8AxT5WuoKvnDJBDvcencVfrXoSvK4Pzc3DbWKDyeXuqbMG",
  "key29": "5XhXnaMr2s69c1nPLozhzdDsnLXrQzKNy2EntmcqFS7wPTLXzHiXC8gq9P5rrbHyry9cnLCXAPSMYWYAFTyqycVP",
  "key30": "39xboHPJP2aJMpt5XjrsXzznJNgXkvvCL3pRYBFj6ZdDS3YZFdz3WVeyAerTsUfCqgWRtTqrey3TLoXdraPqgRkH",
  "key31": "5AwqQKVUY6sTskRvUM168Jx7t76MVzdXCuEhJFEMheuoU2zMwh1BKs74RpmpoSwACoqfsAwVBLidDbXnc2sFHA1o",
  "key32": "25WBVY9GF8Nhr6qaozREW5BfBHnkTKjDaE2bG3rJMFHwEH2LpE9S4FSXfwv7hXzD7oK77ctYMrLvCZ63QNr7h5Jn",
  "key33": "3r7YKgTeabqCLa4fwnguUgeaV1wmTFY25ZWqCN1S3jVL2TTEzkHZ5WjHMRnbYudHCikqYAco5VPhc3UjvSm4Q4mF",
  "key34": "5SB734ge1tKbXkWSbVuCm8bzuf5rvx3VpnqjmeYGbzKQxQMcCuDJVampCBX6uhsKGTMurZAUtKjB1vPjCy5wMaf9",
  "key35": "2gm6poHGMvfiPhrLHuHSKhzVdL9EBM1kTQREuBJAMx5oejEkJQah135ytrUQYivGEjFSKPU66hUpKGkReH8KPp9K",
  "key36": "2qb4txg4SuYVb3DPERRhRADcKqsbT3Un5SGfqxRdFKnmjAKf3umDYQMwuCNUhS1rsEJ3Gk7MLSWWHussqiJ64fUk",
  "key37": "63egJbTseWAM6pd4yPA6mjr42vusv2yVrrR3FWmN1JgUpnqVTNYdZtqC4cycSLmxeUboew9hrCpGNsZzJ4ZqkHrT",
  "key38": "2j6TwaQR73bSW5HtSVRMqW7AEevGmHBbynSyRMP1BrDavQYJCEq3iDuA3r7bhMH2qDX2YsyE9YxD1KBGCWzSHzAb",
  "key39": "2jDU1K1YAvaubakrEu29kDAWWf4bwwpJf9nxAptsTqgnnBZS3iTLcGcvgfoon5KwmqoL86Xh5pZRobv6fKDdZCh9"
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
