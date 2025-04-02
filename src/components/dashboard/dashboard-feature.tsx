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
    "5hmNyeH19tuaVXrZkxyTEUBPhNymiPWrWESvfzTtLY5c9P5irBQZWEjHpZRYN8eEDHug9UHqh8Mjn1Zx6ztwSPxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vVbgrM2QLQYiVtUxAKZP23hqRaiMLSXUcrpyrBW65AHKjkgWFpWqkscuhsnvoT1jk8rrCzjkJ31LxCikwfSowwu",
  "key1": "4GKgcD9hcqWARvgavP62htPoDeLfARnF9VjmnGR1G4deyi4UFjNNTZguRqqKV7MBTYiDx2fgyQ5G9YtTVbSyUxPP",
  "key2": "3btq6Rzb6UKTUGtrHUdc8RaVzmanrtGcUp6Hc6Di79k6dS2Hg6wFsgrk7rj7ryMVBiY3ntg4roT9GdK3yHM8ddB8",
  "key3": "3PUuSFAHEHGwSv1nFKxRx7Ry1gDBv4GQEz6htvwTMTptjKCwSmnB6hpP2iDp2KZ2x2kpwPtobUetjR8xaCh6DrgG",
  "key4": "2tMaMsE5aqkqBATqobpZrrwTxL5kf4ftZLzLXKJhz5P8jBvM4mMGgqQqL49Qvb6HbJsMdhBwav1URkWMW3oH8MxW",
  "key5": "3T6ffap5xtdtXPn5ibXGA4SF7eCP58RcZR7uvfzd5uvvr4LkFc4bN5tJuKntXDeqaEZqYiK4P4RzNT4LEPgKCnpv",
  "key6": "52PSmnmrRrLfW1Er4pKRJdH3HkmhQqmjHBnJd9kZECQXQSfn4CLKNrw3JVHHvm2w9CazieWL7hTcfyKtdJ3uKQ8T",
  "key7": "5UibFituWdAK3fx8ttu6G5seUbLatFsdpWfbhUTy7K2XgoG9urftL5GsgkhPYRKWQ1mT8krz7tvwp1HZgg1UUm79",
  "key8": "4gzxfyPNAuZdE7B2vPg1zh9zZ5Wm1zBbV7N8P3wC9b2Pb9YdDtMuAgfUkCUkwLhy1WtRU4GSvwDZDbCczHosTCd6",
  "key9": "2rC2eeKgjef8JPFuBy1mpXVD528ED3hwp4MFoNSfKWqfBnkUCQdhCTNpNYW1ps6wQqo8ShdHCM8oMTgfNypVDmiW",
  "key10": "pYTmhgtediV2BL4DepAvNhvM99VHspWfV3YArCu7XH6MBcRmVgF12w5DEDLWG4yNogTgtXZTyAirSjJBhChjRhi",
  "key11": "5cJpoYu2ovttR4VuaZqtfRPqA1dYjWDZctwpZxWtTA7GwWpGYDdQCGbPJ8XD5HvSoDNXPRD1GebHqmgSx6MzTiwH",
  "key12": "4ewCXPTXiHh7PqZvXQV2Ef6cQjrPcmzngQBjG5vrRSTyLYNpSYJzwZCYPa7fG2YmZFV4VPJC7Qv6CcjzAtbin7sA",
  "key13": "39Q7w6o7csqhmAknn7P2H9GZ9ReMmCtWikYpmXpcfYipTES6i4sqm8bKVFJLMNLgCYKyW1XXFwZpXywbxHfwDxv3",
  "key14": "26SZ7m7umVqLwVjK5aDUQmS6s3dM5Mtag7We7Vm8feHKuZGVFq8eE4chqpX8sAE6nyenq4BpQ4NG5s6mYoaY2Qsz",
  "key15": "2K9fJMMMc1GPJe8Z1NczJrRey2rDoMsFy2WoNsbwejQaUSndoBVFnbQU1foZ5XJhfADStHc92NPjMgnZ2EAxfjh",
  "key16": "2tHPRXnuG195vGwCFEBS1obRoFG1zmckb6RsNErGNuhoQ9V1Qc12rNxrTMr881KBv8jfyGSe7rGQtnBDVDA5thGY",
  "key17": "5WrTCDdRCFAv2yES6DNjGGbYkcK6cWnVmsw2MF59HXNEAg1cHikcsay7SRmTXDWoY4tWgqx34UiXYAp7V3Vf93Xg",
  "key18": "AzV2DbACHhvSbwvHnjKv2T9gDhBTfRUzDVtXKDs7AuoT3QHnsRXRjNoFKFZL5mdCE3cgaD5YFjZWPGXD3JQ3bJY",
  "key19": "5PPehY5ufFVRxPQj4LdFAQUAhi1cfjb4GPywDgCc2a2255maZj8GMuh6GSEiSekBsgiajkgPLzwSEE3zfRy56B3C",
  "key20": "5SV6vBYrW7g5r5YRuWPC6QAg9QBNuPvN2GYXT8GCRzWj1jYCyMnUQfvgaCn4MbgkGnwXaNMLRgRxPJYoKhFm64JW",
  "key21": "2wZw1Q9Q4DvBQoto4ZahmX6cA2fiAxmm9k7dMGYggo271BRreK628rYMJcFqBwLpYA8X5uj2osDkjPauiAKfCurT",
  "key22": "3Fug14sa9Ne3dbo4jAteHRHbJv3ndZ6XHfgELBFewgCZFBnerZUzXZqCdsehWjJfCE1g4MipscawWvLZ8kHjWq9t",
  "key23": "urEQ1GFHukCJxDzmubmCDgJ6h4gqnW4gKcUrMvrPKchBKqPnkuzhzphxUG4kZPUu4KQDRPbW1rPNab3qGctMDmA",
  "key24": "3gPCjqHyEg7RLqjaCytujQm4vMttjEmu772EHSm9PDkFiktnGyeNWtXdjfNkszENjtswEmDRvnnvnRPNRGFFU65r"
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
