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
    "EJaPvgZnGsSaZxZeGBKSTLbyQGLaPTHW49wcQJsGbxRGzn6tUi3V7fHEbiRCVC7yzFGwbuM6gGcHAQ4uFugNdiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wdzTcyaoUbMbzprvhVEQ13q3GZPRUWRygjdYXEokjnPijzoew4izsx8yhwztQtCxD2jroCkRzpANHYB3jYRRmtS",
  "key1": "4RW4AEY7xy2GGT3QfUACo1nSpeP6u5C5wGM8RnsUtr5fRYBGKE7BV5fzMPkN3nGTi4mTwWG7Ek8a3T8tpE43fXVJ",
  "key2": "fY24hLd73ZrTxdfyjJXAYe1rPstNT7g6wYt6onXveXAgEp72AANNWKrQj6Jqx5P7aAk2x6HkzPcQhMddZhTge8h",
  "key3": "5yLAApYPJCtxZsdDKRrXqnHgVqaHGCK9fGke8CrWDSdN9HV72dPFuMLUuWchR1XtYVhFB39DTpxSssjaAk14gL9K",
  "key4": "66qUqdy8LxkYzJyUPjLpCVNeq4faZfkN3MBMZ5QNgoj6RMMTdMNPCQBtEDz8wkwJSq2JEpzE3PUWLtJtVkHyBc1",
  "key5": "4naSDupYeX3RjWAis5tf2xbQGCTr8T6bepP3FyzKwwqKUBZuPsTECjP64EkU2azDxsgnUTHu85JEj8p2npSUdgM",
  "key6": "5nxjqvak8j7Yk7R1z6eMb8xRX11xfkwHiBqEwfTP5eaGCBnGcCGp5tBT2tk1vDEKDWQou4imcdn9GkAHpSD1LEns",
  "key7": "29mcjGovawVPk8xJkppW6GqJMSVaMtHBUrgrFkAGViZgcSWAL1HK531KWMiHKWzsgrm83U5wJkzWaxjboNoVheT2",
  "key8": "2rwwybEPwbjNiNKZvTpZb1f9NqNkZKj21wTCLEjcbxoR3rENTWiSEGJAy87LPVWASPT2BPgVc1ezke4yqWpopGjm",
  "key9": "2ZMkHsxZSfUnE3aHeVk1XjiNGtNsX2GeqoUTvmAUBLHx6rpgTdqDQ1uFNhq3kh1THCbS1siwnUJEPFyuCCGnqXU4",
  "key10": "vUKUZLbhgVd78T4orV6MG9ZKCGtd4X9ghLjd4BueL7cHN197v29HWAHGFWJYNHhJ36wKpjyEMwFgt4o2oVk3SeG",
  "key11": "5wFg16x3nh6W2rXfEd1mohHLkTVU1MgSkZCivM19qS1TggPV5H6y8g6aVewU5FMuXEen94PCEmEKNFqc52tU4EJW",
  "key12": "427taJGTQP3tSdtAmFJE9oC3r8GnmM4kio5SsC2upX53nQoema9uDBQxbrMvagYa23bqTZM8rDXuyeTB7Y3wpnBH",
  "key13": "2VzYK3kWteZNWjKGmHGQiHecX1LCZXG3aUPXx5NP5qGj3vY6kgXPSK6XBMpsUZnDz2BpKnHcm1D9SZz6TPkNFAcW",
  "key14": "5DwjgbZt4NzRpPLhMZDvLjqDcNxk2x2f2WGzRbaVk5gc9suykHBQV8hvMK7tNg1uZ5zg79fqePSkybrdFWX9g3Hh",
  "key15": "4gUHKZW5akMvN3gSmuNcCKiP4iL77r1TRK1vvNn6tEAPzC5FqPqXseQ9CYeqNXr6dLiwBT2NMqmSrJ4R6twiknBK",
  "key16": "3aiNhQLfzhPP58jSciXJ2aJf5r2AsK8MuzqcB6Ygk65hCXGCPnvcnGJFABW2pmknaHELQcWDtmZKuK37DjATWxyf",
  "key17": "2aU5f9hKNtdcqcGzFVp1Sz1uiCZuAUjRFbKBwEKQtQFBEBdGobQ66yndoNubs4tf7roGzqrjrTPyE8SJJNMfG9SG",
  "key18": "2xGor68ekMem3ZcueUMEhySZAAGg14dycEnzDkvtUJvZ8thDhoxeRJQCpxfbMMxqZtA74MHe6eFG13y6Qm1H8hd8",
  "key19": "5QiMyoBEumpa6a4UzQzzuDJuhDpCxwwxrG2bosiRQAtEnTNCRzxNEVuFcnXVCza4oR7yjq7Hb4sw1C7CpFfBSUTh",
  "key20": "4RDoSB9G8saFUMFkVtenk3Vw8gYzMCXcEGBZvFegwMsMHucUeKraz3BaYLQXFiiJY1T9QNwrwTDppDjbUEFjo3H7",
  "key21": "67ReZnJXuASWufE7K7V1VGxKWLWn3Eh68nibkkz1Nf4qco9cfG76tR2ZxBf3TzqihyJvH2BwCvziPGaotVziRmjx",
  "key22": "EJ2oXX7TiJqbMuVjUBkbPd3kZxzFo4g2uKYmzB8AnSnAnXrY1s4BLdSNwTDeGEi4GLvfEj85SN8skfToZeCkDDQ",
  "key23": "4mZLaqkYwsRCEFR4fbiA7EhzLqUGuuTxQCggTHSxF4pzXsWakvRaHGYCh5xqar2enazoVDYoryjrfuJMqzezFc6c",
  "key24": "57R8MnNBpc6JiowwqGsXLoN1yL7MrDhSuRneXk3an8peVMdLrPgvKtF4fzkmxCmc1bGye2dz1gpDHFMyq4vS4GGJ",
  "key25": "61CET6JFy47AyWzCuw8BWfZcn96fqkF1Z2T7pZaYaLHoftEcnsUENuJUQveBkhMGF55XG5YyoVQ5H7AT9YrMfFac",
  "key26": "4Eu5wpd6MuJmeUYjm71BStvDaXf8HDePrd3jwmC9Q2G2oVHNzRQ27JCgoEPiNxosnGntWd4b6UaWvmk8w8kpsgLu",
  "key27": "37zBWhQVoSNNAzYarnHJgjSFuEL69sVpRk3Tf1Jd8KkXEUu2Ydu2qDdqAxQKR7Tv3EsAaEDcJViKqSEZzSxc6j3A",
  "key28": "2kX8jGkjK5bKyAVDiq3YBAPJQNLrAq7YZA7XNng4nnc3xR6ZKyWfERbPujq6EA1n1UNqQKxj15xJbqoxsr26Tc9Y",
  "key29": "5m3ZXWMcct5SeQYrw26qoZtyXEvjz4Eyguda6PPN5DfVAeFq8Q9yVGXtVDiqypppVR6hnhxmdFCdruh3Ptq6GLJJ",
  "key30": "ZZqCnCuMayJwuRcPJzo6BKHZ4oAJjFBTCCBp5gW9FbepQjxXnBvvNaZycyEMZhiVUenUB8VJehh4yMHKCuddQ26",
  "key31": "4Bz82SzmJDG6JKop2Qi1TxKgKD66JvEgQ5mCdF6cUcp3qGauvo3ooK2MLNmnU4ZkCXqk2Tsk1zW5M2hPR8pZy4vC"
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
