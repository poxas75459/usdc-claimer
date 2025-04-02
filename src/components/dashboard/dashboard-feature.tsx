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
    "2cZTrDb7dxT8LdnhZb1cUnjhzfnZ2r67RPaTVgtYxy8f4e4n4HaSQR1rFd6fSd8BucN7KU1BQNWvLXrWKycCRVgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "259pdF57i923kz6PC86efDSberBVVqm9HQduVXm4wDG6S9Gj6T1FLM7Cp1XTG6qVtL7Lps5afvkK2EWPb1WuuUPa",
  "key1": "2b5A6Po5miFAQX9FbBrg6Rq8Tz5sWbbK7jhCNBdcoYDZBBA9NfcwAFcEYPmGYvhXMoKmJZjEmCAJRzPCBrt7htoz",
  "key2": "31DcmXv1FY6RKqVcBWHEM4AHA7zMtJW59dx2qMpNQibnaZXt9BKwbjiEdR5TrBBiUAeyvDdjfZ8ybJsvvU6wZo4Q",
  "key3": "5SaZU9VcZQTPjWT2veoEw7hMsiEa6Lt9H41UYr74VLXEVQwLNt5Lf7R9iyTdHvcvoPrTRpA8Y8qWhZtYvzNmjrGg",
  "key4": "2E5QbN4c99iPwP5WS7swQ9W5KQWfPny5zg2JmAmHiea8u8PX6CZPe6dN4L8T51bpnvB3ktYjuQT8tQ5ivvgpkSWQ",
  "key5": "2vdxVJyMXfrxjDpgejs7eJcWh16oSLP3eheNuqKkTmPUG1wbYdg7eb7pzThBdenk4VUNkGRLXb9zktyaEX7A4pYX",
  "key6": "4wnwpL655rW1GQf2uXJHPVf4xakZEhqDsMbPX72hRJchTPGyqSBXCkH7eJgHbKfRN3XRRVTUBNTwABrTacuTwuvx",
  "key7": "5wDbk3PbodcjESNBJxG3vaQNGCorCugqtS8Bz14zd9sEhkPATzHQJ57PSeo1kc41aHKqUo5ZB3R45UMicLSexECt",
  "key8": "22o2yJ5iHEVEtwp13CPJ6XrKq4mbhJuj87JnubNGvX7JoCxPm9ckfXkg8LhGLJCk8bGvzKHJoG5PUwBKtvEiMKac",
  "key9": "FubbefkggKprwCVDBmyj26cSbjJ3FNb33fEoqVS61xDNdFK88vEiv2Jt1WhHYTomGxURCrEERfuuTmF3Jupjh7o",
  "key10": "3tYEUSaDyfJNaeqZmPbgv4jBrrAKQ2jswwmyuPgxrBJd1T86uh9zien7Z6eq7TzthXuHZMeh5rD7BQRBAx8xtuKP",
  "key11": "5aFnqPf4nCo88miN5DYbupECxYCLEPaqpDzeFKsfbECK9zH2gcnP1xoJESyNwwUZbWCcn61hb3A56tF3veRZD1am",
  "key12": "2VNBf4rEfF6jsr1nvWGM6WrhojgdS9TYQALQnVcUVjDj79Df4UwrLcrDbHtmZ49gYdnpmpBWjZdVEywWmrBKcH6c",
  "key13": "3EVHQZxZpgPS6EXYmNrqe6NkVLrX9R8CcepzYfwG2WjU8ZsymX61UjKDE47JgkA3M6V8DUBK9vwr97SJqzvUnB3V",
  "key14": "MZKFoZCKzhMKDMCcdJFp8Qp9bftDPsHnhjmFrHMHyeSPtSjfYTWVkUsSmPw5nBhCBLRggjs9qUU15hHyNTEVrWm",
  "key15": "3edHqgZVfQ8CLGfS3uvmMs6tnEsH2WUHNStfA2oQ4LqKJzugZLhzKdB8433AuwA6e2Fz2QuzNVgCtb2joBvyZp42",
  "key16": "4wATzCzELF8k76adTAAUkx4f7TvnyyiX9kGYurmvoATQekCUAVx195YmPvAUaCQxam9uo242WqAwBBFtYFMwicKc",
  "key17": "3fxTs7qwBpikG7vwmT6rjLGYzcLuf1YYRSSYL6Wp2emJoiPBBFKTVZWogUQvBSLJ9sZPbxGVFnByjEqgH4jngXXg",
  "key18": "vC5ZEAxB1RAHoNqj8rhPXEHArapP6j4GgUaKShB1gSSBDrLegpcKAcFaSp1T3fdRk6XBgp54R4e79qVJt74Dbjo",
  "key19": "QGPggDEcy1QTV98MYznMRrouAroxBfe4MRY2Rm7Hufdn9ENtLhMccaye9dATnkeVJXwpCoFeUwRXoApitcHXFN1",
  "key20": "4ba8isdvzCJE1WdP3yRhoC3LHmkY8SYqjJFVUpnMj5JCdqtNMWRPYHTPsxy31UUb8L2a43FovGFsqXfaYZSuiozn",
  "key21": "X2RzMhnMP3NS5XC1aBqcia75sMVYBwyEr9FS3zSGE1uMnDzrVa8mizQjiSQSXqKZyRbut1Dvb1JPz98V4NsXDmB",
  "key22": "4xctb4rzZKNiZQ9j13nvf5VZMivLofNAPA2GKtPDaEpPqh6w3gn9ZGExwnJToNL1uku63MQMAMaCaT9S8ZufjXfF",
  "key23": "33RBPWVWmKbeLeVLvSJ9ez7W8htWoQJnjWYN8rSMhmYDdRURtoXFhkjjg3J1WdBpNGXnWZoBTSRCkpaLyqUB8bV4",
  "key24": "2gXbJrFk6oHoxfGCXaxNBPLxhj6dUogzGUMCauBpES2E923DJEnBUS22U5y7hMkVTwe2ki65DCgdp8cgochcgJNe",
  "key25": "2SQPffUVmXSfq1hqVxH6pxxuHx3UNRqmYMLpR5XJSTDmhWHsBjHU2Con6w2CcJAuN4yh295NYjThtqoiXD9D1PLH",
  "key26": "2hiTkif9CNmYDnQXWwCiLcL7zbn3X6FvbKE6zPMyso9M6UgLCx2GaFb4QKCvW8BktHmR3Z6Fu5vj8uPTH299LQuG",
  "key27": "dbPT5uvyqJkEm625AsvJysUVVUWQLqxxGZxg3wNKAai1hq5wRs2ozU9miVB6JRnWgQckTRbGDxewscs3xfAp5me",
  "key28": "2un9znnKjYhrpm3Xh9ks295VKiRiZJVJQmAjzJteidJnKz5SAxTsN2zwJGXqBnzv4K9CPk9MZJYbeVHPGG2WucBm",
  "key29": "3trhM2XxFRstkpuQfhudzBMnqYRhHGMgmfQdWnVjjTrCFVedKeyJaqfiLnrw54eSoAjAJGUQ1Lw7SYFtnxJoKzMU"
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
