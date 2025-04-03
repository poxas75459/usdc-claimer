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
    "26wC65zXT4r3Fnni8iPuiP6VMWWzs2xRyzeudQaGWAm9i5JZT3WsEuUqpa6eEgeLrBcSg3dsoaJW4uvaeMBRQ5CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iN5dREnprrK2Vc4uCDty7pTwT1P1BoMjqbhEM8R81xVJs9XVDzsPeNAZR7RHmdbEfKNLae8rWCjWSqR7dt3263N",
  "key1": "2fFY3B2jJAuNhTmcCneQ3yA2xCajxk9T36rBYdC9WL2EqLvubwbiJddoSSM8kPxUyYJZpuVuPFLrWKWSXLEKv4Y8",
  "key2": "p3JxYnnHcrFaC7P13NRRpShQqELtMbif5rNT6QUV6LtKvmaPysyZJBYLxrNChoh6Go3coCq61EBaCCZrnENgN4x",
  "key3": "4PGgB4zWSZH2NapSm26WrVHcWwRm4KygZL97szxDwzec24HRR4G1yygUatc4bJAaAxRncpaqxkWqapqp5Qj8BJhq",
  "key4": "4nRYK6ho8uuV6WAiDVZtm4a5VdPxEiDqgBfC7AVhCte2c84LVNeyX7bZQPaUBFZJkaVGfkmqFhAMXTsGHrRDYHDB",
  "key5": "66iVJopkYKd1aQPkZ5YeyaaHEYapz5dCD1g38Sa9kwHYwNrq6xmHyy8fTr8SpD1G48iMcW121NPMaCZSwSaBE8ib",
  "key6": "625AtWb4TyxXWThbggEu2t3efUYdzffffnS3YWt4av3uFVxQ5CLapLoxH5PMF1B4SpEH6EuNcb87Chuwa2ymgnkT",
  "key7": "49qdSQvQemV9cq7BES8hNQEQiiaqiJRwTiksBUHsQmGzJcdBA6dWN3kvWwZiWgLjSHaUQ7rMjLujJAfLPAxdR6HM",
  "key8": "KV9w2EJmGMKTNRk2zNtVaqE8Srr89fWv8pRFhE25FuLenUKUv67ZZ8TNZkvJF2PqZoPBtD8G5jGBbKVf7ZYLZdf",
  "key9": "3UAoRcDMGrDonAJ83mhkwKLBBMGU5Pisgp8rmqS21bkH1dPYsSuvdWPxDau1fRMByDBbAochAetiMXs3qQxLEh2i",
  "key10": "4oePTNqug3iruvUp5P8cuuWS1fg8AUSuK6KzRxtkCZuBYofT8JhhowX4HTyUHwGqxEAKxhVDgUSiUKjecmbQfnn3",
  "key11": "3w6RuHoZR7wE6uE9hfDnPFaMcyDaXiNHt4A93PjPoh8xfcaRLyFkcEx8iWPU9MAXWxfZbrhA8psYy5UQKpW4n9iW",
  "key12": "4t7kHUZ9CNJzJteZrYCi3hvgJiWdM9yChJmTkRsyawKw29rMHF1pboS8RjvTSMmgPVSKveQBVWzhR5sfuG1q5wDo",
  "key13": "3JMw6rH7qfCYP5XQ2aBaLXe8tYSVo2jMyqXCEu4hUGTzudt3RWDSc8FmwvccMPe1d2oBL3KYqJG2iqokrBwMot8v",
  "key14": "4NqWhdszNavbtu4o9M1aXDNdvq4FNa66e1rY5K5dKEBCiTXMu5VyPDwWcYdbQCFpFYccVnLq5Z93yjtxQHggakMq",
  "key15": "3aTq8XXWqqbWTd3uom6RiysEt4XwNnjRZwCdGhtK95xH8bz6E9URvNTXpqxTNkX6SG5UWArT8ankNB9P1XSRWtTc",
  "key16": "5Tf99RR4NJmFuakZwwh9bGf7iFZCuX7qqNpXJUykFgJVnzcEtDAcF1LfhHPVCe8HGret2nZ7BV525kNzxBion75v",
  "key17": "dJ5D61DMx8ccjKh7T3epJbP6ztbQ38nHaJJ9fri1zqYCTKYgREJxyBNiL8Qd3JXF7x8s4DPPA3qo52VLL93fgKW",
  "key18": "cWtLAJoV5FG7ymzjcx2Je8LMnaP2suCpS6eTfXzE2WvSFHCWZpCypjMUpDKXEzF8gqzn6JBmwTnf9R6EitgUnpy",
  "key19": "4b2RwmBkwRgDcrbcWXyNtBDEXzfhcNR2UiMuNwUtfitFcEJoS4SmTyQvTnQAvkqXCqgF6WShv3PGdUUq4zuA3Uwx",
  "key20": "5ruwoeDGVKghhF9zabibEq5wBS3kN82ck2HjpkLUCUYzs3661xE6xkoiAkWumCUrxDJN1v69HB4osAox6RW2jFjn",
  "key21": "5uyBfphc5mbPMr6Nbm36L6FCjA1saqDL3ZGkCwZjnG9y3yPutR7Cpou1UNJpeYJRzYxznfS1vTQUz7QjY2nbuGe5",
  "key22": "2WwxtH1oYQ4hywvne2mhXrYXdf9fELjfQk3aWkt7vpaJKdU5KzPvY1N1RoV2KzuR4ENzPvU9dmMQ4PJAj6zE8LGa",
  "key23": "355CjPtwGeAg5cuU1GvPLu8AmxRjnHnhQeuKLbLVAusU37Mrj6sXD2QVejjSPggT77Yyqqj33ppyDpgXFugqRo5Q",
  "key24": "kDQj5dUAoRDv3U9NQuhiFgPuqSsXGy8wdKzZBPGoUadUT4RxeqraxFHRgUkMznWWhc1y8Xaf6gHXciGJftxbavW",
  "key25": "4fregNs1794FnEwQFes9mnmCH62oeV2fe6DwXsxaQKZyhoedmf8HfKuUfHs7veFcBzFcErpUqU9q9q1BnMyAVrab",
  "key26": "hNPdHgg3WTppYRUqR4m4QoWT7yFAv932TeyoPxD6b7xCwjiaW9Ru22FaJWzNBsiLy5Yyz9t3EUrFDgYbbpMxtRk",
  "key27": "5vuaHncTtakvUXowD8wAfVcLjUSep17mnT7oXUT6dFa1AXHftLkG4FBQZFubgVN7U7bsRThjvVeibyhFXMKEZSXr",
  "key28": "3SfU3Y4imkvpXqMjujTVvCEN8NrzPP9Eea4164dVDHRCj6b12DWw5LEoz3WfyJdMxEpqyPgEvAMLhgMcAxBXJv2c",
  "key29": "3iVdGcYP4HdEwi34NiVZiCE5yYbcj8bMwrzE3U7tWREmshwGLCiKWHMzs2LcXgLh2zSDLxkWHb5SZWqJXmCSYCCR",
  "key30": "3FY5Vci1YUywfCJaJEBpVFpqaywmGRzzw9saqhNMz1Bw6FUhhqtXT8YPEfzXzWGBjweUmxNenzEFfuWtFMze2JxV",
  "key31": "5Upmbh7PFcubVZkgJh6iYNgEMYygioWxLi3WyHVXfUcQZk35BST58KbLaspNfxdSVxfknHKmZgAYFL4at9HDVsE1"
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
