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
    "2xmj7rtuaQyasQtcKraAvck7z1MWwuVrMLJTHjK1QrDfPiS8A36znSz5KyxHNMsso3ubKQXz17KPAexYcX1gbp3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3anwATMonrQSaxuWAu3vtPk3ABBfHM7TJBqcBCv4bmRS8Gbnqgha4yRM8LMWKinBFJtUpMSHKMjBNURuYTefeA3k",
  "key1": "32qJtxeiEzSGMTiGRxVMWxUgSH73xhPmeDDbRq6aELrTa8jisFkv85nkLGNHF23mspFDovu3ihLttWHb1jrAKYD7",
  "key2": "4SPKDgF71FTiCZeByXpGnwEnLBpShuQmT7q8NgkQ9rMCtX9vY1HNhQD2A1SxPCHcU8iBs6NaQqM7xmMLDGSuFqno",
  "key3": "53fqYNirf4s8fmxRDdvEg4HBkpXuG82bRNrZvs19M7vCRcfnc2LozJ8x2oY5qRBSJ5cQdK6e7fBgYUK3FYHFe1Bw",
  "key4": "64e3jCZXdMktRa4HEaVjhwHGYcANjihz1uA73NiW4kAXkjzho5qfjL9k3WrS4rG87pzCRmzUtGt9bvVjNqjTUQQf",
  "key5": "41Wm5yEvNv6wEEZiwsUBdFMBihoy6Pr6TKvAxoRiuEJCycmrv6Gd7nbciaS7XpT3bj6nKabii2yyBiXvXFHbNcZM",
  "key6": "QthwASmSh9Q6NGVFry4RunwZVYS8c29sFctWL4ZGnNZ2PPBAsu5Zbtrj46FVFSQALTfNV4VNkYgx8rCB2bRv686",
  "key7": "5M5KzQLWnXg44oeNh1oN8ToPkuXbx74V2tTpgqSGottoZruiZiW98zCypxFteFwtdppY459WzSu5UJVfKjPpPyJG",
  "key8": "5KufhfmpNn7vT5o8QVqkpHz4gFRjyKCdZYiEJuq4poXNEWiP6ZBgNDZ86hpHU6ph6w71oA7amCodq2Nj5sDEFmio",
  "key9": "7vodiLWw1Rmpkykj975ogWJr2chakX6emJhsnRJmKW5Xkk1pmv33vGsQXj6bfLsjzihq5eVLJkWxVHdE45ByV1U",
  "key10": "oBsW5yBQ8doQ6SP58huTCEN32qoaMrYBRR2AK82W2DTDjgvxp563QdCy9vnUBRCF9eYrzRJLJQoqKmBtHC39ciX",
  "key11": "5SZgU9f4d5XCdb9rQDQ8NUH2CU9aXPjxuJ2H4EWrGB5E9ijXX3LYcEzxrMkMq4L6m6oXjqAATkcFUJKxXGyTYr2N",
  "key12": "5Rbkth8RGisP5MJj98i3Kdut1GP5oDJhiiwuAvzURFfK4mcxNKBEPHGWBn9iEHQYk1YxeZ5snRugpnBCYJXh61J7",
  "key13": "4uA8iUABSbjzf3rP6WjXUUNpV1HEu85vx8ZAkPyKJsy1hzBRZ4ZzbPhpmNmAdy65RL8B23mmwSLryasrpDeFbPCj",
  "key14": "4MtMgzTuVWvdfygGfFHFD5JMHuiQWYhJXrwr2Tq4A4R6CaJBAMuMGASKundJ4uc7g6zpPAgpMjnbVjpbkVNU9RkL",
  "key15": "4KoC5tW8i5ikiWFufzEEDpJ5BQDtkWDxgWLSxmzPg6636oYeC7JKsFT3jtaFMbsJxya8CURit6k74bgv9Xj7Fkwy",
  "key16": "4c358g15C3hr6zPiGqW3uryj2rkTxrVJLYCBzZhGjYtxANstib4xRDC3iMGsXUap8dKZevSEqdPzaqEPRJyvaYHj",
  "key17": "62bHD7tjG1S1SeNrJbeqbE2kHS1KSnS8m2g1n5sxqWcHq2WDLK3MWga92k9iwKECJHUi2wn5X1aoNo5PYeMUecX",
  "key18": "5fJwYpxVUqqEAbdjHFhneRNEbZVwTUPKjnqkQvQUBDLtYqxuRMnmEJAoNs29jcFJKrWDNeAVPFsNQYfSWyR5HJGw",
  "key19": "5LNATsds3K1Ne8VkL8e11hFAmF5jQaAqQah2JQ2XWfvYpRs7JkRNsSWjYz7Yi3ZwfpUxwg6of81nD7ZJqRp52EoC",
  "key20": "kvcqDwrqAxoEmkpN8EX7DewAk16K3drTox2cPt7fZytpNLiY6CWeHotv5aUwTRS97VXgwYYU4MYCLgfxnAB94t4",
  "key21": "5bakrWhwRD7UFL6CPPfzbTXRf76sX4chL7EnW3xB4VX8SnH8ceWX6KjzufcUdPuhLKqzmxUA77WJzkz5WkAeScpW",
  "key22": "2XD7hncnDP3LHdhMF7nT9TUtGzCZpbkD6XFtokiNasbsXMkKeHbyfWbndqcCXCcE9dvfDh7RU6xnAAEmE3oNc1BE",
  "key23": "27M6br5rLrFNcvTYSo8hyUbgiozjgssAiS6ebYTNdTUo6CSGNN8Bu2etC7oFZ3sUYBhkZwimqXwK75numHBF4Z9R",
  "key24": "41o4XPdsYDKfwrxijy6UXSPaEhTcqj3T58H9MUmAp3Tcex9tZfaoW5WPTdE1BQmqEf1Wt5qQ3zUkW7Zz5ssnhJBE",
  "key25": "4iS6KSMfzHshQrVLwC5F2azn7ZDKBeH1rf7UqcWdmdqovqFjs2D1Aq8Qk4my5oeFc5EppJEnsidfiQXgY7RoeNNz"
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
