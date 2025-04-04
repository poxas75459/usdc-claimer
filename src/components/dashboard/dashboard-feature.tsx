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
    "3nBsW5NarDQErmjrW1QUYiLMsekmD3XQqfSNwJ2wEZk3VBwoPtHkEyZA2ptWKQWakz8HgmCbTidyZRbhXomhu7iP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J66ReSf8fADgSx3AfSt8WVZYWTHHzdDkRA6MqUnebhvVNGuR5JdEsvcLUwXu3pcaT3JBhVFJhcJGCVewLdrdyKm",
  "key1": "4rh7ii5SVciu64jbb7UdNBcM68Gf6veFzhHQGTozDdVtnTUVz3MU4hSyi4dTskNqXJ9Ck74WWiRkJRzLByvA4j8Y",
  "key2": "39ZmFwjBPyH9Vk85yrHqxYNj8iW3fzWAx2e2ZBLPVzmEtRSdRshmojqBwzi6zaoAiY9R3eu221cUFyWPVne2T1B7",
  "key3": "4HJdm4yGFyNdP7onBquq1rHHEeQMFveknxozYJo8ExUc8v3v7fmUaC3dRXEk5vtAKK65eb4LsULtg9LhK6fB9YWx",
  "key4": "67FPv4TGxTRZ3H1bkyCGx1sQxZLzNGnobJ2QZdw4Ks3PQPSPDUGgv5dnNqswYzNst276FAH5d8JzWHSddMFC6kxx",
  "key5": "r77Uoq2aQcCJXf7sUqLxfYpVBTCZ8oUhHtRweC1iK2Z6iUJbfC46QBSNAQJiQdzCU3VoYvD46RpvpXRykTTehmA",
  "key6": "2Xv2xqnsgZV9fLGn7ZZouVJPaxLKJAAYCBz7uBsVcCSsHmAtkw6Ge4bRNrpvVmoiAesh4JLreAzTCnx249kjAKFY",
  "key7": "gEFoajQcQjEBkc6tg5c7pM4ifYu94p5foy82yFi1mGD7DNTohmPvWgu7AUaK8mb5AE9tidgNfYbr5G2UA3XXC1t",
  "key8": "Q75fReAg4zxmSv77aCWf4JqHJuY9VecN9CmZiUjteqsCp83Cf7chr7d4bqKzn3jM8jsTwQeFJG9EZ8ZBsvusDhF",
  "key9": "3fUqMVS86eaRAknqrAg1rmhhnkzEdMm7mvRAZEeb9xCcYg21Z7bxg6CX7PXsx1FyMqqJhtbxX7gJGshZ93EtEfmf",
  "key10": "LycXSrDL8ECFCTbALo7vqdyuL1Ki5sprgFnwGamrLxAXELnb6XB8KrsqXC7BcsKJxyvbBQJx4kYVpkEHQfkUcEG",
  "key11": "3DH2zLohcn6DtYiF6SLwxUAcraVZSmBzaAFDU7GBgWFTfN3HXpDR7JmVWsmFivSFfKTDebBVi8tvrAjLZcEEFHYa",
  "key12": "4k2EHzmzt8qWki4DERw2sC7GPgWSxS21YEL7cmiKYo6dufcvEhXYMb3q43KyjkmxYTdqtm2SCb68rCZ2BXbinpWS",
  "key13": "47rTVvPmnsPbbXas35zTFQKqdnFCFhtmqV9NnHgs2WBTbYR1D2J8QgFyhDVbPJSveMW9pbZ5QfbH5GESSvpC6PBv",
  "key14": "2SHdZMTG5nfnioi9KHxp9gYKVyVosSkmBJsxdaMU4dKWqFQq1fWF9jzsfpvA3vGXrmurstVFs6WfqLJVd2S4pozM",
  "key15": "4jG2woXU82czYL2zStA8CkoLAXVxXG5qWjNyPxusjHRixf2Nio9woF6bc9zvmXMrGcV9ksqMo9XUWkFFbs6H7SGb",
  "key16": "4BhRFZPmxaeRkiCA9MTNsG5W7YmkBHNf32iPMTsQ2BjWBjhWVyLErgi4B9jn2CRYMrwPTXptPAVYYYFqYCJfuMfX",
  "key17": "5epcrdcE7FDnoNfY6aLCrBPCMupTjx4AH5svncKURimdXgdW1RDHKn3mEC8bDnfJRdJaG23pfYyAtXFKRGgHy9uv",
  "key18": "2C34F8rSSUhYQnpzpr5esQQ2tnRB4NXkzs7RRtaofU4vLwk8wAy5Y5MNhpPD6szAUtMn6pYuK1VerzdAxjCEzszT",
  "key19": "x8FPXJFAvKmUs1nXuzxqJyDWAyaV2VZkdvWq4Vhd265BuFXiV4tU4tDvUq9SDqUbBg1zoNfhuhnobEwcGTSNJXk",
  "key20": "3LdPtcripmP6Ykva76hznEEyM4SDKjz8YuGxb37FrPzjnx8vmhz5wZDvoEK8P795R7tM6RuYCD8PPsSxHKksUDhD",
  "key21": "Y5y4yEhwErqKUqQgxQEHZsVmz1xCJiYiGfT2QzrPPh6wLqypEGPGC3iZomESraq9r7DZxM1HRKwr2ZtDQtKZQPS",
  "key22": "2XorxBL7fdAccg8gvPsSbQGetdRRjVDfkJejuhhc4Cc6teJiWoVuWiThMA2EUPN22G774LZTEnGmdE6v8XizTMKq",
  "key23": "nwRwgNkCM66qXCbBDFY7upQ7Y5xasSeJnog8qz6BV6SZKoKx9Qgi8xrxRfTMvJCzzBFZG21GfLPPHmGiRz3DpNZ",
  "key24": "eT9Ci3hV1TS1kTck6dJhQF68RoREe88c8pBWrCqmxGZp6fMM4DdNRVAJWu2r6Hj9pTJvPd2WF77SL9sK8XoDb1M"
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
