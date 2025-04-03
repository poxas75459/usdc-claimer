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
    "A1sLKGb3jiSExMjmbrWTkJx6Lyp2E2wWAaNQ3saQz4LvqLGadQHxNZ2YgwWgitFA3KxnjqsZac99x1PSfUpiqb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nxrU2tu1yJfagT73PaNWzUcrJ9YQnZK48rL6CiZAg5ARtSjEYKYdxJ55Hv6Exnu7FUKtiV72oM9VcketGG8FdH4",
  "key1": "4Gu6mmkYwe2BjWP5RGdtpdBfgkGEkb5zqoyfgXHBtHPoxtxgbsMPqQ8otdCR3RdPheYZ3mZSUKkhYmcYi91C6dJT",
  "key2": "2YKWEjwQkg9hMEJnnmJsMoHsnnRKgxdkGeLCcQWYY81mSktaRyrxgw6JbBoFAqXedKdujArPStQ8VtmJDcFLaByh",
  "key3": "41obdp2HwhBMVQtszfEibTeDFL7RHF9s9SDJqoSxS2CX9w3ja2z8uDFgX3gSVdP8T3jq7GCSKJsXAHFkA8VuHLh7",
  "key4": "21xntRYzuVmpw1p3ocpVVaf8dnTQHX9q9bChaFz18xUYasTeHhGTWcufC41wJzKBGPNgSRKaMD75vwZfA8mu7b3M",
  "key5": "wxn7tidz2pcE1aGcCPTQjrZyvBvWZhhN3V7ccjE6WQWrDoYqAhmu69rrZLdHSmt2fPsKVnBRZXW8WAwm3FHiRiL",
  "key6": "376U1xMPA5U3bfL8C32EFeMnPnLypLcbyGdEe2EXD9G9tusm25iRFFvjMKL2noscHnh7ZUy19csvCvo4py5ScdzE",
  "key7": "2vQ1VhRAWvZAhNb67qhFjJFTAiMLeJygGYhNNv6VdzLxEYyr8uZrCFqspwBqBwwagaQHJTfRBwmKVjAnydMUW4ce",
  "key8": "4kefkmR6TwUGfryeUunvGYKL1ErAmtdQoHxpxxFpBRXsRUifHtWQy9aTpYWuzBGyHk3kGBAEUEnHcWo9hh5Uzm3g",
  "key9": "zEK18yLtQKb9gcLA8HBMgbocTYH8PrQY3UuuHgik8Yc4zGNvWhxFAntvLtReKPNvZhB9pbzSjopDEKUSw9hXquV",
  "key10": "2FNVDP3iXCCmY8BNT66zDLw6vbZps5asLC9cejhGtnoZ8EyJwuNtd6yfcpNczTREBbysnWJFDjo2vzKxJ12zP43e",
  "key11": "5a7iocgWSunpM9FBPCkFXUnzxVygihUGUCWyDvcgWPLBzuHb1WPxnET92tez8kpeLpQ8eNbKUHkjmdFSoREfBvYZ",
  "key12": "32T4fpmJLtaum3sUMvFApC8av5cKqmPaV8VprRvZPYF9ukN1g8w9PHbjuDADjFrHhpsxDDFNP1N6LwwLM4beULwh",
  "key13": "3k7q5QJnr4Ga5QrfEozKGvuBG3JdJdqJgy95u2jvjxPL4arZH9oModZ41Jb2xakeYKmgNeyzDZ78yTxtvG9MD5sZ",
  "key14": "2x1SVSCR1ahnVZjD7kXrs2iVwJZHy8Maaqq2TpvwJDavEiAMb4kqwhuHJrB2LgeJ1uBKsokbLRRbiW68oqBbf9ub",
  "key15": "3qZq6DGdbfFC6NGAfSPR1ysMMgCHcMcqRoAQSVQ5fPSJem8YVMqwd7RyjBxTBDpfhSfq8H4YtPHzJrJs49CiZqZ4",
  "key16": "31H1XNugpmoC6uaitjgvRYwuMjmfsW9VzbMJ3WCrrvLnPgvDTobLKPgvZwg1bGoDtJqEM2EbpyBYdNVpvSrMzDcy",
  "key17": "FFjzyG86DJnRnkmgP3W31PXw2ukw6pQDYRn2LeXXEfaXbqf3ZPv9dcn7d4wx8KdohhXjbVtaN6imjo8k5vPqjaH",
  "key18": "3zrcGpbsZSiagN2vnJwTtiNZKbYmRsQ5p7HdDXGSoEfRoRYFS6Z2fLu11NfhWboxubWHbNMC6ax1y2kjyrxcZAM7",
  "key19": "3rX3yH6JN5b9Q82WosgWoqE13FBhaiAfDeUzEJmPJYStk95YtnLjtkStmcSL5BaLfm9YPX3euoedWMYdf28JTnZy",
  "key20": "2cykMX7CtjxA8Cg53AqKGgg7v1PMc7g9YQSuXH2uDAeiV4XWCx6tCR8XHNzk19id3zBNdCr2eFgG2FLhEs73cNsQ",
  "key21": "v1xQRyqYRVxpcKi3QFQfwt9DiL6VdzyRXPip5actevTU9MZoohyrf4ywtXE2mvQaMgSZmqk9RmuQbNwXKwdKwAj",
  "key22": "4J2Csq3CjX7tPk4CeudkeCHYxh9YXazTi4uBgf5rAWeYBt7CurWiaQ1HTV8EMQHCJwMYV2XfHwFV2qco19guLYtU",
  "key23": "5U21Z7WumbW4YX518Qb5TPduzioJgAbkhgwbZjX3AU4v9pdUs6s1Khs1TWaaSKuhw6BWAdoDEHAdgojiToTsPHb",
  "key24": "qUryDXKLppe1Q4mw1J5NtbmDXSznXbVH7CipBpp8bKiyNeaKtnc5EHjvkGVhu1QZvh4QGNiLg5GgYGkj334edeo",
  "key25": "4EFwMwexmXhyZ4Uve8PA3fhkXd8FoNHPR24XgE9sg8AR6B1HSgtahDrNZifcx1szc3JxtvJYpdV4McCkYYZBWJLn",
  "key26": "4kXc3R47ZpVdmJuW8qpSpLdb2anc7kRWbSVdAHMK7YZ8i19J9WfVb9QahjRFoLKMGPWbpXwtKpVQUMDmu8T6zK5B",
  "key27": "3f8PhMzSyAfKfGxBwh4AYhV4HebQHmSv36Mqk2HPReubyDG62fpcPd68rXo9TG8HUmTa3HWokbEypbefFiNCMUqw",
  "key28": "rCpMfvcmecttiK2RQaQmPWnwvfFWKz612w1aQE8UKsc1WkvMZ1jwXSbRoZBsiFSoTibWnFQfGvaTAUjEYDmZkon",
  "key29": "2eESBasNkmVAzy5jTE3Hi445tjCpjrSp2eQKQPVNUh27RrTQhTjav2YyANeFr834bcgXVLkscgK1WBpJJVxnqofL",
  "key30": "2yi9bbefsVekDWXLpQHb1gctuqP8iGywEnCaPJ6QcjfFThyjFFQnrEciw3HKxu8R8GDmy5qNnJEBt1rF7VaCvj3C",
  "key31": "4iUSC67DCYu9g8KSCd5rMSNRbxajtqfYtP5u4Xm7xGy3B5CsyeLvb6PMHxGKRhRdMVCGVueiQgsk2YkDUR88fFvd",
  "key32": "2JHwiNP2sD2VNTqeda5TpBstxfVH6K35fBnYHtHEWeP2hCNFfUUdAib14xzhJjQurAstWVHB8bd5RnizqELMJXGX",
  "key33": "7oBZ8rMGUzhAYMhNwTTw6GViVx8UmSTww3eHv2eUrCtQKMJ19ZmjjtK94zXt3NVSUof3e9tPGsn8GNMuKS4mJaS"
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
