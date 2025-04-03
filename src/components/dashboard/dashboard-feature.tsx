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
    "5EvqWdectm3bzcCHVkpbjCjUtVsmRKFaH13C1bxs2d4UjEQE2s7vwh6TxVbEZnAVkzSCiBS9yVf63SwxrDTrXGHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yqYvzQ85cug9KW8hpvL9t1UsQMbZYBQKPxevtvwk2FyGGUioqvfMbEbH5PG2TuGUN1yDXBuJAHAHdveR1ZwmZQE",
  "key1": "yBebBeEbN8Z2bSGjnSDifYRb2rUjT3r3WYfKuhuMzKRNMzH7qkjq6pyfE31ize5E31X297gb9qQGgZYRNU2JVrs",
  "key2": "2kzEdEt91YxwmiJhATRLPCqK3srFMqbonFBUDza6onyT57gVpS6iheDbWdMXs2cHZVPxy3D7V7zivN3XtpjbJSZ",
  "key3": "33AUWfXUgcdWUY45o8TvwzEzXpvmJ53JAE5VV7mna8ShpSYbAW35WaErBG2XkfBKvbtL8YsH2wR3ngswjEBxiEBn",
  "key4": "43HViLk4YwxtQdkGd9AbJEvBsWm3UD3TB6Yr8BGWddhvRiK2doXmgZqFNQ9vis3W1AKMjL3GyrdZ1ev5CGdWcV6z",
  "key5": "4tfECTNvdpYhgz3ssdvzgUJ2b5oVYQRe59DYSwt1186jEPuCFLHYdz4ybgocKMcFyf1hGjk7Qn6xRM2LXiMMgPJN",
  "key6": "212R3SqgVmnoWvipMVFutwDg5jMtcqWxGGW3kYF7P2vbXekBfpyn4J7n62yAsYcJSPhoDDbMjFxbX3GQURrpHfuz",
  "key7": "5GWdC1gw96VbJjutHV1gQPQo3J2taZvBv21VWGNVpPThZfq23bL3nDextQq3owAaxQnVupwn5Z7LkkWj2g6vhWCL",
  "key8": "4bn5ukz93M1dTFGmQGBRJ436aKQsGm5gjTucA3wve5AivnrjF9BCh4NE7kxb8DGyVFC9bN5X3yWr56nasNxRLvLF",
  "key9": "66MhzE1rrXmdnHsZkDz4eEntB4tP7YJ2XGHCv59gy1E9qs8ZqEE35gJoaAgQZX7ymH5FdHoREmtSx35bLxhXopup",
  "key10": "5JCed9mDgqSsqkzwX1gtT1p3zepiaYKhYP5EjCEGzXCXmX9uANDmjNUTgXKhf8rzmLaNBHJLdee6JsKX5JpcwjzU",
  "key11": "4bigxu44o9pkWyKsXBBbGwm31fefVhkZ5oTzRYjRCYfBivzBgtEPmKR7CNkp15LERbXDcdhS5ps5CUVsSxjS4pR4",
  "key12": "3xSsLV8aovUFAz14sNE6D7TQss8AMoo4EuFpp2uprHDhE5jMxYcqih3Y8yskaWpYNzxv4wP6vbMPkG3bc4Ntcb3t",
  "key13": "4Czin7KWsigAUghWAzisMv1Xn5LjnPDTLeAF3xrB7oQrccJUf3LZgVqgSvyRYgEr68DFz9V8MadZrKCyWGtUnevc",
  "key14": "5LPdgpobY6hVXfny7Lmx5j3JHGRMyi8bCfXc6d6cadkPE2VyMyEY6uJwdKUm4S9vobVJ8DEY3svX1MULbAAvYPST",
  "key15": "4vGcHXFYnwuRjiGg1jrT4LhwhPyGjCxqvvp3h1NawbLJ2Lm4DgojdFYTgDXhhkdmBw3GsuaMjXdTy2nzZwJKtgLM",
  "key16": "5ZoF3g89yxLPN1HnM9PNCfVHEqCHMVNWA9gry2TU66Vr57PMsUQ4pNZtV3Zmgq9qdqiv6GWDHRNXEuB8cMUpuS8P",
  "key17": "4zAtJJz7iaqCiczKrphHLyZ8gP1FA7vgr7whXM5dkrbAR8EAy2BN7DxNEonKbwAtbJPovVeAXMaVYDqP519yBsif",
  "key18": "4u3xet47mDfeKJdzfqnuo3wefxUBsZraz8z79DGKf6g7zfktW7Tp6Yzbd1gqwdGiyVa4ZRYMo2k6YnJfJ8CrMnvY",
  "key19": "3YkXSz3DwHGqCKMwEkWJwpJDnSfKBvyzUJ26sQeJsBcHaTyBBTXEi1xbBZUwxhp6knWBiK7MwXBR6GHfismytB7q",
  "key20": "4ji5KLxEhQgAQvxPiM4opeymkseHmdhJXT7aESqWf5FbnjSqYdm2NprySmnNkVsXr4wgN6DSG1dWQovFKBGdvnre",
  "key21": "XzLekMMmkPKLXbuWKijaYVfVkvViLaJduBRwgLGhncfQxRRsfAUX1v3H6sYKp85xus9Po9vwNmTB46Snzm5B2aj",
  "key22": "2AbupBSmAGfafMBmkvXveHAuLojKTnbbLd8DuiVgv323oLruvx1sFuqkjjkVhUVr9rU9LMgkFTBpwSRsirk65kYG",
  "key23": "2e8dbZYtp3CNTHnJn2S9LdYLUr1eGf8xjorcnQSkqUi3nUXZT4wpT5Rm7wu3XD3EmueSU7fC4sjpARUBifv8T3Cc",
  "key24": "5rHLp5FtaF8KA35drcGiTNqxCitbnYg1EbjaY15iQL3C8XTmgCGkrGTN9vpQG5MnT2hRcsFNHMmDE7uQKzWS2LMJ",
  "key25": "216rQZyzJwH5PyHQkJJnPTs8D9uafB6Y41M3Z6fQEqALJk6MZ42sCjrJnbW7THBpLJ7cFnVNDiThihixxScFBD7N",
  "key26": "3Vvctm8zThWt7K5bJBBUyRnFKXyw9t5MdobxRBHYSs9MTzaFRhRbEH3Q2ugusCBqwY8qP9h6P1XdL9t5thg3jvjQ",
  "key27": "MRSdznZnyCFqFmxXbFxgcsUYRHhE9XTcea3vioJbamfVas3dBPxTed4s33XsmxK9Z9vAqotFHPh64K7R7qfK81j",
  "key28": "ky5RKFiPKQct8KQCyug8GwLerQeAZxLFMhFKiHCEJspvYNefymknNbhkV4VjKzVdk9s5L6cGEhPwgbfjEEHDsh3",
  "key29": "CJ5YwijT5yv7eeDvtsCCaBxD6un5tRa2GsXcGKvATzvzUxUKQoUikuYWnGdrFrbxNQEsLXqphvJcLVqdVet9MWb",
  "key30": "3BVkx7ZcMXmgH5H4D1bhk3v7FNDRwEMiQBu4LxvxvGbrGs11R3SJCPgQu9umcJFW1fpAy9Z4A3mjzfrVye49C4uG"
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
