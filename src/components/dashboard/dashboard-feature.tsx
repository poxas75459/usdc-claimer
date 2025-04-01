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
    "2M6KoFHgJwZ7cbL5bWXsbqSMDeY4HsevWx4N87uf4y3FXhHaYv46Dnk2Yb69vnci8bJN1o671ewHiWL1JNbS1kmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zYSFYBMLWrQjmkdwDXgUHCgTDoYyrKNisCz3EbQ9HEkkneibMG43ryAgMFJzGqVop3VeUYGouyLARi5K2PsEzuw",
  "key1": "3gNMpgetZNZVoaTUUcKF25r2f1Q3uPTS4koRHchC4hispzRZeVJVyL4Xa1WcyjMBWtXyGo3uSQaMihorbebXqwKZ",
  "key2": "3q5pWTeeF814fkhqYXhun26fnzs3BSHKVqRavb7B1f4Q1vbxMMLMhnV1Mtq5e5zJZrN77i87jYNQDnRE3cGCagyn",
  "key3": "5TpRhdyhc9tCbVEGL8nsxrngfpn5CUF2qRUXB7LzDWKWDUV48hBCh5bbueeC4KebmxstyYMj5Lt2cPGpJYwStNM",
  "key4": "5AZWesUVJUa4rv3c48CEZF9psxRwW8r91v4Q3Z7iGCeUESdhufcnzaH2aYmWkuxWkyUv6fAvaZ3in4ZUSD6GRRgr",
  "key5": "244xFpSJRoj1R1TztrJDk4QoJ13uXagD69894mTtZAMBFHccqAcNQrF1cT1zUbwiXHDJWF97TmeLqYx7jKaY2EeV",
  "key6": "2HpwfS641f4vfYzmBexmqkYtDj9Fk92Ajmd1epitYYy6rtfheLqmRtuGeqbmmBN2rxxKgf22dRmtRgzXJZtGydDB",
  "key7": "4NRFyXhhxp1Zpy9zJMTptHXxUVvwYBZHaBesJ7CjFLeakWw6hzY2vvyF1wf6qzGdcpFK1J7wCMUCjk3DNXbv91yR",
  "key8": "3mTs8dQTFedqzxsLNgiLB62tQNLCZuBqGAAz5rVMsghx93K1ZAaLNUX88Prqie8V69RiCThqPnEVkMzxqdNKkvcG",
  "key9": "4NRAkLiSYbTGNg9ZNQN4gMsMUZ8ELftu8PHkuPruLoCqaKH1mir1a2t6Axpzew2TAS5g2DTBtV71hdm2iLmTtWGF",
  "key10": "2qvFxrJ4YoyHypuYjz8MAFzLDm5ojkMmVRMY8g1ixYM3hcebWs5BahRnJAmreY9V9iKgt2EWJd4BhaTzD8hmJckY",
  "key11": "7khwoSknAtDjhpQFfYiZ9hQEPhFQeufTsP6tDHVM1sRfCoH8PPhPenuyYy27Rtk6QkZvKrsugHLxCN5WfNkjVzS",
  "key12": "ZJKWr8TWv4Qnzq2CLxk4Bd1ho8UzG3w38gZDLZC1bPzL1y4anmMr1FgNh5HLGyhkAPsY6CzCvrvPyNcjgHEdfe6",
  "key13": "3usccCoX3Fnbb2PnrzETV1eQZBzqFhGTQdN3usXFZQRE7RNNMtx63kMUd1TDvwXGbKhQaEou9DSV8XYNYJMTQZmx",
  "key14": "2jio5k5kp1zuVJMPpeSx7sGHBBh1tG6mAExWtYV1Ve6CL4AwwHmCT1KyS78gW2GRYQcCQBEbsA6k6JW3RUNDDzXE",
  "key15": "542Fabun9SuTgEqVb3ATLUdWSMVuMbyyhPrDRZWNCtKUXRD2b2SciMW22Lg7oxQRV1RzR4VvEkuuVhAzzJzQPZja",
  "key16": "4MLT5jbFgJa4gWPJVKSBmVrGmsjsKUUpyJp6BdJkv4Trge7n8WAcf8u4SzS6tKNz8rYrd1iDT7wzbXtnacmgZ3p1",
  "key17": "2Wc33ZdG93emRQgdCeJUnCA7FCGnBERA8zDy5AQHRJBc1N2Hh5p8JrdSDAmfLzLYzbqZjcZjEeTvnTrACL1D4QZW",
  "key18": "4cNsE55y7pfXEybeVqybB46DAX5g2Hv7Z5zt7W3FLV5EuPK7rj3uM2NSViht4PYdyadTGZDmZUqvJXNY91XWDfKC",
  "key19": "3jpQ1dG2UX33dPx8cegiLWghjRBGnCrnebaLspZTAFA8seSgVUdqnTaWpQFApWBxucVPNjzk2DLT2Pfo92Aw7t2g",
  "key20": "5uCoZwJ1ke6VDyPA7K6Twuc1M8mZRJbWuUQ4o4bj5z4XB6uqM7e4LSpZcCUEfGshfATk3AmTpo39HJrHPof7ssWd",
  "key21": "3wA5ZiuMwZdN4NTkRCDWU2WeMSaSTJeaLNDtqQYpmUSHb21AaEsJ6WN1NfvYjza8qHkYqWsmx8jRbe9fy4suUUsQ",
  "key22": "2nFZXX9WvpQTVE7ba3YTFco8pniuzt2oc8GfEz5ZaLZX9mHQovYxZxcRBkDYnqMTg9R7Az9H11mdUWV3eid4cC7N",
  "key23": "645issAbVT19qHJKN5R1TkrshAuCEHSA443Dd24q7d6dFuDngosLjiPKJAN3WXLG5pX1HFCFt1xqiequUPVQc1Ye",
  "key24": "5MYx5WZ9TGVPQh9dh9o7PSLLRdHZfrYNGhyRs6NgadrpK4owzCPgU6zkYrchze7PxPq9kokLMqJP4yvcuYEAp8yU",
  "key25": "2e8M7bGvw3hUQmJnxWsftTpnKyVXZb5HHF5edbxhVMe2NKVhBhGQWYqFLEzJu2wJsp8yN72cThGSZQ2D2ZSPX6QG",
  "key26": "5rLs3T3MrVwtzysLD9yKw8eXNg9NXSFMnyZxJeV6FoTEVPXy7uJ5Gm6NKbt4QME7Drj678bYBLA7ZaLTgueVwpt7",
  "key27": "3uGNAxYzC4D1Bo5Uh5R5kY8q6BiYSoiP83HHTtkrbRZzg1z51yenhdC3R5JyekBJzko7dGrSkHGFMH8ihwJYX1X6",
  "key28": "2LaVhD7EbfrGsMRkwgQTg5bMWswEiXaxJGoYyy1P4HGFJrDU2NXfZeZNCs7ugt4KeRLKxZV9t76DLeSY7abm1MkU",
  "key29": "ahoUqBEnBRdGi26wWqmUt5DP92NAhgyPjMwp3KXfGvFbMXya8ZuEtbcTJAKoiXnVAcQsfhvAgKrT1pq9hW86bRR",
  "key30": "3sbkWHjmEa7ddZX1fDE3k8GqFX5Pbw7eQSf9UK9FT9ggcmyytTrEFkwPfGdzsnxduBbkswq1LZQZ8NHHtiR96FtA",
  "key31": "4rqsdhMYSuUUKqMcNkWpjfeHgP1FuDLkd1puDHpvYtFTuYLDBq9dPEMeQ64z8rAJUFetBLphye36tREmjEKQNxCF",
  "key32": "5pftbkveJa3i3K1AYmrjteeZWsjrTz5rxN56zENnmMBz7rGo66nVnYnJGJQ5qbZ7WUv1h9q4qH6odPxxR3vRRKbu",
  "key33": "4E4xiBGcDf6BNGoNZLVVZpX1G4CZE77mTwmt6ZeA5hibLuVDTTdUXwRbAnN2ErA6inFmDs5ZHz2nRdMWAG2chesW",
  "key34": "2Mc7x2WsFhJjRTekPHQKeLxJMiyyiDzyTr93bRC5vTSECkDFuXx4D6KwuJSSYpKH7rhHhe61V5x4xt7i5C88A9vA",
  "key35": "HKjGS1sLsNNQvscf2CP46zyh4hSUgziHt3vP5ektL3meU8Ztmth1K9yJUcuuBcSdcvWh1kYWx9vZDgBPeYZRTqD",
  "key36": "23ZHdVM9HH9AaKMMhXAVdVVgRhmEGEUFRuphRchnsQJFMitgwnyjx7RBWJjRoF3EYXH6UMWrNCG8DoS3tNNAo4ac",
  "key37": "UoZRTtRuEqiJ6MVyy532iur2wgUv9WFjDXg9ahq7PHGPmZbwvP5FuooJ9UQo8o7x8FQPvF4bBqRsEefCKhVxRx9",
  "key38": "5Ne2c7inhRujsHmbRYWf3R8NCtBe5C5K84eULDr8VtNa5VLMPq4wu5GwiNKTtuMB3545vEDouYdG4QcqFMoQpoBf",
  "key39": "4f4F3iPTErJiW6HBx2RszRSQuGdVg45uzngu7bd9SbWywDMhcLpgNNf2vPY3mv1mgNWruUmF8k2Jd7udyZ4sXrHH",
  "key40": "CLhBasVsyrmWck13uK6uPsDwY7tJeTY1ZoT9DJzheC7RXG5o159ZtX6mjdFvVNgjv1R8LmCkKQiz1kpTMVJanp6",
  "key41": "4jHeCdyMFPegYxL7vyA8nZzPFCSrJn4dcFcMsNpUTPLJmtgx48WV4LycVjMVoPVsoocJeGraZtjkRPrgsGoyxbfo",
  "key42": "499fSnSsGyNAw7jrak3yfDuEef6Px12UqNxPtvVe5cBRLUWGWX46ef5se5Vv3jqHgQdmtXzdzgQVt9tSi13wwTmy"
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
