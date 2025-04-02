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
    "2SPk1CVKFUAmpmnvDj1ffZ1RXuN54X9i41JgVvTqUYjL3raSmTiatmLJsUjoWFV2Ru1QgBvUJKaKVknVuZKYmDu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVcfpTZCkTqNdtszajsvwmSTL7kMK4sq4k42PLHDSbNf2addNXYT4Nb7APYaNAovYVJjoWDZKv6jcftp9sdyA65",
  "key1": "3fU3rySrUBZTCszud3bVX7tgCm3Ha9PWgEBNj8UTTdNUw58Zt7j25AiuL27s9kbathREyawFZSnLwRaMdChsitex",
  "key2": "62SqKQmZxfccAAheQvNcVtzj3YvSGfvCZVYrLgmgpRRxELhbNpsyu6VPDUb9j7dS8Y3zYEb7PqwrJYy8eYNjXt83",
  "key3": "3JGieJaL2TMY2oqSSVy3TQ3kp9Q2ZSLepqduuLcthui83XH8wFXt9xhCsxRn7uf4nTwpUdksXfCyZ635pcZmgJg9",
  "key4": "5PF9uKZsyMxKrgJaspSEp7p3RAAzcomVifzqaCpeAb18eD9d6u8zJVKDK6VDkpr64XtPXqFqPjARtTc7AjMtEoqd",
  "key5": "3pURRBzHqJJyuafSZgJV5b5D1eu8cFfZhNARbCeCDmonNfwxRNkSmtg1Nv2sbJ7UkjiUyLx2B7Km9kDEcofhJGTo",
  "key6": "2eWqQihCpq4i68C8k6a2WzJA8xfiMaB1MoaMiKUmXwsKC6p21d37dCpJtKKaiccUTWp6noB4wcr79b8C3iwoH7b9",
  "key7": "2dbKkaGjLhWpoRqgnA19zr64LADpJBN5M7YGXkQ6vpsQ6QBak6caeGVw63hmjwg7qkdZTknsYhLrQLuiEWc7WiWo",
  "key8": "5cwfRbf9vGcLyH8mjmpZjZkUTEkc2EaQShfFybvDoMUQ4FVKb1t5QBk6j1hXQjXmLRSxECB2QvN8NSWvutQkeJyL",
  "key9": "xWwxhfnnyDgrnqXP4Xd26U7qzEg3ojiMGriMYCnatHqBDPVVGWdPQQdiC22n7jKCyNR1ctNEAV6fGEeywmur4zT",
  "key10": "3tS6w9FWWNdip5vQuteCSgMbXU9Jar9ivNsEGhBfT9WTcNGASWCW75xkVL85YPiRo55EHG8Q9EhyPuGvYBPC6Ngx",
  "key11": "4yCn8G74pZkXDEkkZ5V6WD1xGeMBzotELvYDpx1uG3Lto5M81y1PFUGVHN3ue5pim6PRMc9iJBfGm2HrMLekH7D1",
  "key12": "fcNEUsb3gCt3sB2Ck2P2L7mkNiUbPyF25LH5Q8CAYyVxtoc8WV4K4L2CYExzQBS32EiweVbQhs3YbgiC9DMEAsE",
  "key13": "2NdDBQ4xL5pV63Bort7oNtNU9kWToENzKPjCsbrZLUso46mEv7y8LAxyPSoCwY48ekkkavpYXmXZwMdn5atVCEZN",
  "key14": "5in4EozZGgfB7742zZsm7URfnfhcz67GWiBbbGPjLCf2qvwiFkA5xojPZoSPFi3rZ3io5GYDQ73bMoMbMjTb6ZPY",
  "key15": "2k3GS142A1yCDPqQ3o7rnLaPBHAULP2ppS7ZQqp55Xn5qPgz6WL3ZnJzgaAsCxgS9sj3uS6i7kgjqypEUo5Dj1gK",
  "key16": "BnfCjh3fvm6wqeaxZRXu6ASMouzfJrW4jzesfVeaUmhg43u18PWpgBZpL8gquqa4DcnTb688PgeZV9Dp1YfKegF",
  "key17": "GhWMJzc48xvrDtjy2WiqgJTDHAMwKxM6cCHmKgsWeY2wHL562Uyhu85vjRD1WvmNb8bdPjfCDFrznTUiHdV5a1g",
  "key18": "2ExkBDHLxpKeXq9ugpfZNT5AZgVZygJddct4qEVCAL5XESYHkAcPcxLUggNyEDhgxCgZR4dxBie4nbRX2NTTKU2b",
  "key19": "sw3JqV2jvXch384pGJpqNrEiPqguUc7QernoGApYh1JFc7zW5hnrTdWvtDTSmzEYHaQZuVM3SqHXU6oQyewgCD1",
  "key20": "67b5UW5WEiyU7Hr6eYaHcsibSGKeeauzEemqKP9TPzxCpNAc1VyS3ueh6LQ1QWRVfLcsvvF7fVjANDt468dUYSvf",
  "key21": "gpF7aESovpWxPWz2HfpbxL3YaUaKwvdM4uWmLTa7NkTwwbGokLV7BW1F1fgy7VdE4acmpy3ZBCA12LiPvCNJg8d",
  "key22": "cPYmzZHHF23kpmdF8WYkJsYaQKrHvpEC6W3bBvyTihCUR3DCru9Rh9sJVMNnt1wHeLviZcg25rkJ675a6sH92vQ",
  "key23": "5FEs2EKnfr6dUe55Z7ztPNEucKhWMSUFLrmtbqLWBRFqE8dUaiP4mwBvseXyC4bAwstJGE7VD15F1cmc9X2Rw8YZ",
  "key24": "5nstLcSSpkbGX2YaLtiSJynktRfR5LU5mwoCLnqZAdXCmfEEMSLhoJKXGp5xVb7stzF68tvN4xc3b86xqvFroNdz",
  "key25": "2Y8PJPWNfcVzFaAa19LiiBkJgWj5GcrGuZU4aMSvrAryzNvTCGawmZepDeXpndCLBSKg6KXduasGC8kDaX5Umg6A",
  "key26": "3H31Wk8P5LLrdyUwwCtMkXkTt2TuxDoWUs5tHsAKXDhwU6Awbb9KUzhAwv1BabUY3Ee9srhtwT4TfTZ4YdZfgbLz"
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
