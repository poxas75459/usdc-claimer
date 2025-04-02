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
    "pUrpFRRzeXbFS9NznZppssyxKtpNdbXjAR7hSQxdFSqC7LCWd5AK6y31vKA1SVGZiJPe6yevBiwF7gqJMntYhmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q1qt3s3n3cfNQNFfEGEUQJQFTwafghFnB9qkREM5JJ94QH4f9yX1vfBgWTV9ZsYiijhzvGpxpSXiRacV8soEfYu",
  "key1": "2AogXZmzeWkVzNrD3Y79Z6h6LuGDQJd9LdRjozYXmBD5Nwjyzc4nJC12yAHHjSxigmn7vtGpkCp6bbERvxMFKjSv",
  "key2": "5LbzsExbFnxAxd4bvc4iPcEB946nPZgszvDvzNQ8zGquPuBXvjudaKMs8bZFedZAHKiT6JFHce8HJyKdsojNEetQ",
  "key3": "4jvTYEvf2phnoXmaCdupjxn1aUvc2MDV4Nwe6Zih3TYShhp1Z9nz3QpbasZtHFbb6Yp6u4NiUfajWGhsT41o1vuS",
  "key4": "26MJTnw8CdwkL1Dt3vapUHN19qcEgbNmN4VTr17LeHPNTNzYR7u6gpgiZgoFZv2ApufeZewrjNBkVd2xrinRdWV6",
  "key5": "8azqAhxFsNF4L4jABqyQqUFy3j7XzY2oqS7m6yJJE7gmyUYJiNnNYni4KecbhTUkzRcfDvyRbMGuvYfGcT2L5dQ",
  "key6": "4jD3Ly4QsPxmr3uCouE5M7dTfaXLThr1t8qBYTZqesPxt7nZGGPAyosRWZGxSLrj8xoPBjpQPoCyiiFXF8J1XsG5",
  "key7": "64nsUNWAfpHuywHyYYFZ7Q56V4CQDNaGHtWp2sg8hgKJQdPg25LJBvnTncNUJt8Jm5aBN6EviF4nbPzKwad8Jdfj",
  "key8": "5SHimLQhy9ygZ6X4vhLc1ZmJKKjWwXEwedxfVZa8ERLeyQMgdcjqwqwvCzxVXdNNbVkXzKy1pi3vRcX48H5hBjsa",
  "key9": "2hEUoGeyWmWnuEBHQ3wnpyhZugPeGwmZQMYYJ7QudyZ5SG5zx5TB72Aq7G6rmgUp5awd1PRaw53ZqfkhQQUyVLiw",
  "key10": "2jHegyfQMTLC4keRhsz3tH66Rf12VMfZtikzhyf9pqjbDdJKCgQ74eWTohmDFXXuToVZTpXGgaScJ7m6HoicrsVS",
  "key11": "3eSstCgGLfJg1wPGL7gPMJUG9LdtkqfJ3SM2gZGeDgk78CrLtCPAKsratHRtxJPtCHBAw5Styb8UwV1yWrm9e5Cp",
  "key12": "y5iW7eMJdKjJUx5x5KApVB5cgBTTYqqrFFuMmp3ZYW6C6npc9AnE2Kzwpz1YvnGLx7BbE3gXf4GGp5ES3wxDiCX",
  "key13": "3NAWhoeezMn37CmWv251LZbNcBDYQa1Jo4fQiMWs5zwqgmsyFYzKodc2XPfDiFfAmirDMqhY2WWJjX6jSsFwHGF1",
  "key14": "5PfC6fZkgE9hoNRtjfr33sPDvK2UyvtqzXUvRMFjUyTByyhxPg1K6pJg1V4JEkojoJ5PPVEx8EuFMHQbnxsbcafu",
  "key15": "2pYARgT4Yz9WDphK98449Tqpck9rwvXo4XZRv5BkmGYLQg3K5DPMBxvarHcWEVtsMwchTQm1GisWd4pepCsqhW1D",
  "key16": "2JqkQnJcX6DEqL1ipS6K6fvHugByvdrbE3rz356N7g27PdmQcu4gqkGJ6regRfBwJLxmqLZbjfcPAGK8iF3haYgM",
  "key17": "3iqkP1asEEKnsGTjNsgaNBuDoYAeXwhr5CEX2KcP3cgQf81Fi1a1tZDU9YZkATaVQMc838jbNJnUykqHjy51u3qe",
  "key18": "5v1ohhF7q839LNms4CNVFCqcZYLejyQbQy9LL5dzKeFL7aGqg6W17wxdv4wLQRExAzWfc8tQT4rGEMWBE1xeGed3",
  "key19": "TiM9t8NfYdsKmuWKcQ4EayheL5ZAcuyYvqo4VYf3doGf5TgM7JVazSXUzgx13zqCsSpbFXW6byV8FUGc6E1nANi",
  "key20": "479Nnw7eAg79BnvksQin5hhhD236jHQbG9EuqgqJ3wkbSLfPx5rD5Z8NHJ9a5ot1tNSqbQMArKxHaefKow4vo9Gh",
  "key21": "5cnb9nTJACaa3y5K1qVXHSmg2X2mGrmHWkk4yWkPmnu9i3RgSXZJ1zg6hyedkRyEG88hhSkQo7P9Fk1y97c77sEX",
  "key22": "33DDYHgKaWnnWk2s8VExWvs2pxtkbDd1uPBJKipMHxg1TN1uX1oJkr2tpahU6DKaoJjmNF73FvBGafjQSx4aNawU",
  "key23": "53gcG9Sz6txTPHMECjtcXaVSpKfdJ3PLe7oVatBBsnGx3vpSCpAqHhytCK5YsHisSA6Y8jmAJ97KyxzpNWGq9d21",
  "key24": "4YepHbZ1ByYuJWiEoJ24Y2h52szUaRtwbxmQsWuq2Kg632GFMVR4RTYGVikWMDR4NwrTtbycANLwDjW6b1FZfkEx",
  "key25": "VizCqf4GL8pmBu8CVW11trEyDo3joGY3iFDGzkmhpn3nBYWqFjQy7qbiUhGLjajk2ZY7zZodqWc86FHaCgV5V5V",
  "key26": "rGYfmhQJDNBZUrj3BqAk9vvetj4VzpTb8YxD8RjYt9mFuJtPdzxA9etvRfK7BhavHBVVpw6xxdXh5qNjycUYWft",
  "key27": "4DZxMumBpJMf1u8xtECjBBBQb2hDL6WFGngXV4HUanJ1dUayxKwE1DSNQXCJSpdmr7mmtXBkbD9KYZJSpYeVHrxn",
  "key28": "3a8gUtwvGe4auUX6GVAQesvyn5P5iZgHuAuno4QeEMt7BKxoHvzgTimFx1znJrfiF4mhfcwAwSkZKHPrqvS5JpQB",
  "key29": "q2LMifrPEFNCBJw7wzSC6HDRrBDoLNYWwd8A6HGXoznL9eapaagKVFnXLAyAhqYLqsBzL25H7ZUg9eTt6k8wbte",
  "key30": "hF1MPDBJCUBnebVhU7zuRvTLYEPFWtyGo91acqkNU7qq3qjkQLuaxMLs1SHZUkFMxZpA2udfAH5dmYXnfH1mN2n",
  "key31": "2z5xiKbt4xoTZCrpqKnEWhbabfkUjBHub6JwiKCaUyKfuSTLK8sZSNaG8PAAs68XM9vxHRQhW48bvSEjbThUhauZ",
  "key32": "2u2RMHCd7nVEAz5HoG1KHBJBAX8gZBurKiYkahfESNPyyPwAgBJ1vwhoEv5wHrvKBhXejcsHXfXPfoNAwDpm7qb5",
  "key33": "5UqVaxThtbLXbqJQr26crfFD1uXZafJdwxEy2fmx1rTMNh8f3WK9m1SLQALApgLNDR3aHFZAqoFRw2pyRbUYaoiB",
  "key34": "4UozXfCCE8SSpMBvg5sJhfkrDHmWGzgPW6cvjQbkHigWwVseBE8cu8ezSDabAQNPvaU1mMVU2dJatz3ckXHRVXZx",
  "key35": "4CY2yrhDXGswu8QA6UDZkVQWJubnWBF7MVmQGvkCEd7apQCqk7bjNa2zDMNvLzznY1GtoB4QcRZgtukxmApdZ6DZ"
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
