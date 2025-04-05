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
    "5cv483jAqxSJ2eCojQQhrAiRT6s3FKHibyX3f5ub4uRzustJi1QFnERb9enBWQLgFPPXca2mgDpcak5RgJLuZRmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KYjMwiYP92Xi4DBuCkAf7Gx8ZWwUWCejFgJyvG1oQMPMHfmesVeC38m8RBbRDCkwJnUdtgZLBwNizFa8c2qK4aN",
  "key1": "2GNYnq9Y2RFKxCxC9LcCHhU6N1vE3iMEHGreSPuxTnzb92JFqqwhPyzhweCBrCEWvz4kNaP4xcDeEsT6M2tr5UtG",
  "key2": "46ZdcKfnZe4NWYzvMABoUQ92sTdopXo3hUzogtdKNNMdHNZHFs9WAr7HqQ5anZLwrNntKXAbqquNBhNyshT91WVU",
  "key3": "613VnU9y27FyiAfLqbTVJwpJ6jt6y7mbbQW8TpEtwcyRh3XXPigTF9cgey5eSbHJwBNrVttcyFBZiL6zDw4FswQB",
  "key4": "5eiQ8Vw8f8jJBDk5hWdctjooiPyd3237uVGHLsraULgNboHvrtbLSf5ZqdmPuwkK9AD5aLwKf6QcQ2PjNDsJ5BYN",
  "key5": "56fzF9eWVLGnmkXF564uxhSRN3rrkX8nR4ywFbAAyzF7iUCddVeoKZUCEQFsSow4Fuyja182jCDrPeJA4UhfXTKd",
  "key6": "h8sSJbbCyzVik7uPkHZHPjUbVUXNHo6gFFu8VZ3VfwDz3q9wGHQbhGQ8dMszdfx9vSSS1gdwWUAZ7jPCc7bk6sY",
  "key7": "5Zy5tTW4WDkMP4Z7ycvpBsrPegNcSJEmnRb35cLNJcH63AApL4Nt7WLewDQNkrY8mfABB2FUoLqGrr6hfpPv26az",
  "key8": "4da7Tx7ZWcLhQ5uXHoFsr6Keic3cq5uAzdKNT5NhzCTt6RWqrj2XrybuVD7Q6oAaK6p5nit5kV16kWfgSRbmySKR",
  "key9": "5a46CQ4zJM1EP37N3J2GMmoQd9o3UAvur6mPgGeFWcoZ1xQpUdbQcV2EEPNFKePwqDxpbsgGhgxfmA3HjKABYcLx",
  "key10": "3B9eG4kinXJsURKwLBYxYEDNzAFNyDCFUDuVE9gai5jTVaa3LZ36XCziY3kJvDHytjyUbTDth31jfPkdJhbFV8hm",
  "key11": "7B4SSTMjQtA3RLxiqfoymH4cvBc1bab41j9hMmvCcMVyGeCfspTCecQKpZzcuMUKBwVBR2EojqsZoHBw4LmSWLh",
  "key12": "3Da8nfQJtoYYzACBxDJFF5KgX5oLuL3eGcvYaUSJDrpKoDCGp3mGxYoGhd7etwWZirMrCNJtMEhtEjmmpoF2tCMH",
  "key13": "2wpbx834Xh4gCfprbNEAwc7i2AjcKyYjYCshpD4LC6kMv5WuBqsYhmExiMsxTdXmVT9Thap9Qngxuo9mumJHH73r",
  "key14": "4THGRqKWvZhFA8jM8hNbceX9Jib8DM1E1zf6BVFS3SnDFPbL2yDnizkH3mrUBnvpc4VKvaRm4jfYBQPTbjFyDxx6",
  "key15": "59Ex8h8r24bjDAXbPDvftNk9rb2BdW2C6hYCD9zwfo6uVZw2qQ31vGcdPfWunuAuruLBSkgSqFTiasYNQDoCKzi",
  "key16": "3SPARS7hshWXa8rgPFUbaLKoqZdvuzrqcYpvd9bkAuNXoz7c2r8nDmowAaNEyhGMhmhoy1QeDzQxb7xLxu8GcXDQ",
  "key17": "bJGzvZHb3ikSq9iMAoz7SevTLEzY1iUJWB6KgZVwuFFsC2HrHwQzz8amBvjL3foDSwgBRRfdQDRXKVjUeJEfT81",
  "key18": "vZcwns3SjtXsQZw73Fa9som3FC1bEBnbWAPnr1P4up9PVKHB5Dt2Gfexxs93ppXHRvRpQDRfFL8itZajvqRz3TV",
  "key19": "52zgJRemH3q8B4h7Jbnvv7MKNGdksqkgJpYtv9zCPjVJbnD8KEK1zUrL5MDnRwuMGA2kdDXehBrttz3pXyqCKpHM",
  "key20": "5WNs1ZXQxUBgkpMvqD8FjrN9wL2KawVZYWB7q9AVz1p5buLcNAnWdunp1GdzBeVouWz99MDqT5qwZMt4GjamLLia",
  "key21": "3mhCu3Rwu2xdQVAa5PteRiBYKS6zuTJpUfRjJwHiYSbHNhXiMLS2B2Qwie58L4Kgv4mLPHkGfVGUv2qTodehrijD",
  "key22": "4YhMaahBmFmmzntv4qu7kfYuVBCMKmyRHnwX6gJBrWo4CCEhZLNmUkNEmQzWKc95FXscjFrY6RMyiuqvC8StaYz3",
  "key23": "3dDvuyTAdxNmckaH3Yfr6GgtxffKUV5nNX9bfQjSV6JnFxMMZqPgiwTAipJkaUTn14WbqdK2xvxqtkWBkxSXvbgy",
  "key24": "4jYdtx77qYGrzpt1ST4mgoUqfu3y21nmUQAnJJ9JJexn1iWeCG6bi3aUUuQCDPEkKPUvc9cP6Fzv1RQvJQ142M8r",
  "key25": "2pVCESEtUnJWqtCztWtqUEysekkjMEiyB7u46gdCKKnQw91yHGDcCqriSFtw5rMwEZWYQWobzLpr3QnXJ6ALzS32",
  "key26": "3eXWb3F2s1XsSzKyPnYxzHVShUNdcP3zU772w3mzDo9HGCQ6AExqs8CSqFWXKDZpbX6HD96tv1bzZNxEk9Y5qnmV",
  "key27": "5GhGJNEpMqDkuMK1LsFv78HSVh6aWNrb72zHzd7YHwsTdCottZjRpgyCPNt3mPN6dGHHFrhVGzbjG7nse9jLyHXG",
  "key28": "3PxabGp4hyAp5nJYem4MBbzEAnRxKnPk5HCEdfAt14NHG4wEdprMekwVfjSKjF9QGGa2GTuAqeB9MV55ddv2t17d"
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
