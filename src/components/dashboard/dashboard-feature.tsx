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
    "od7YhdYcETxDjECZKK5wCp4uFfjZKaFdHtDNfigeQJcXpQjRpzbRxoiAgRYTc5LPS8AASZPEWAH8dU393bTvuBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GvxTUi8qcGH23EMWEZJv9q69KUsKYcr8gyGm9fU4pzqCTyYBy45BsEe6aJgX3L4kxuQ5wGA6HokVAByF2Mhqk5y",
  "key1": "6WJNZZvaezr6LiPvK7mV4tkMKToUKgQ8jE8CJS5BBNwGG5gQawii1ZxpJEJJNGh6Nrs3ioKhcsRYEZG7R2yp9ZL",
  "key2": "4DsBXfmcYUidEGhy882U2hxB8uS1bJxcLy4jJFGrnvMFrpb9cDcgya14Cpq3AHx9H9MVdBMoTtc4QcijxyooHM1n",
  "key3": "25D9em67pYo4Ljhzu4MsCwgTFpfQcCrPQHeAqPoodbM3rXdspLf9Adpq1yWsVvFNX7bBis48tKEm92davxpgXVyg",
  "key4": "2f8t1ZJfFR3aTsG5cT9CrGWV1b7gbgH6NaPMX7CiMG8mrpGYuGrJgzmwZyM2FVTnvNP8KSzFo4Qg6B71s4WePmeH",
  "key5": "3ntwjy9DzaScUEbDTLPLYFXqRzirwrL9kfyLA36Lu762zGwXqXb8E2PyV2SkJsEPGfDnDWyBNpbDW2ZWVyqgDjv6",
  "key6": "4sjZLw6GBazkM4s7iEgwedmTfS1hz2eNqRPASwTXZeQB9P4sydSjXXQ8aP9P5qUaQhH2Df2ceEkG2RMXWp5H6Bi1",
  "key7": "1TvQm5KDGcqJoMshgrThvYgcHLVKtgWjkcUWqv4PWa4hqkhVATQF1UF5uStw2WdduV8MV6EbTvvu8W5Ek4krnvZ",
  "key8": "iscCuyRAy9Wg5ftex23hqP7oEnxef8cEHfnHCLHMDTxoo8ibWH2N22zXCNFcspiTpJwhNqibCWNxdBn28SKGb4P",
  "key9": "5MN6if4gC1Eeu9rjwXYVBt61n3YhygwvfnssCME3SVJhAnqBG1EJufVKEDUsQ5WSpZHFK5HWAbSdWCZWjsAc846D",
  "key10": "2PEGMW9ASY1CZK6znQ4DULrq7fS4nLN9yvFEHL39AyatYwozD7dazzf7VYKNJBxb3vgyUsLz4MyPhUhcRL9xS1UG",
  "key11": "4cd7aVN6qk5B2uZBYmp7TTFvKeiLAzWbgT2ZwWkaMoE4VMYkrArj5bobgWdNtzhZoCE9Ep1mYgDNiVwgx8nk7c9U",
  "key12": "38kqoSKuZ8C5oPEHKPLweZTggnXp2Mo4iA4ca1FZSvzFPzTH1zp5DXxRwe9KViFEWG1d6HDhH9699yitTmrPgLHz",
  "key13": "5cSh1pE2ngc83bUTJv7DPYEkzfZUdSBWQ1BTqeCgUEEtRUgx5jt3oYcCdiHxqSN6nh9B6BtDpzoFQWddavZQLYDv",
  "key14": "iaxiX6CqQqs6WBS7GNL3jDHmGkTgqaEd8hTCjazBWw6sJJz8doTNNwAQSjt4zRqzvMHyUuonnYYtiiboQdunAUe",
  "key15": "2P4NVTkLHEGByDm884AzvAZo4pPQvMc2uofauWGneXsZ6qLr4ZKW3afvUkeTkT64ij8LYsM6u1YDfqq2gw4Qhnxg",
  "key16": "65rudAipatJMXPYKMzQCQ6LWgh8WkJT6bmzB9nZYukcag2AaEFVW4vSHbBt9rvf89E2M9oEZFiu5g3HawMxCREW9",
  "key17": "3wY4vfmgh3XZmKqBr5S287HyRQjW8u41iSMyXfeqsm2FyhXaadxmHMDWxQNFmnaWQk1Mag1f4Ab4z28o9rF7Hr89",
  "key18": "4zQWKNJhYSxGfB4HjgcwaCUkw62Xg5i6MF2H3SNYUUhd1FUzwn58o8UwjjDsU96TGRqZDJW1Hjeh4dj4hLuAdvG4",
  "key19": "4feiQWazmvqvKFag3vZ5d5BZUMZoHpZt8T5MEqrbiQrtZYqA3kRT7Jgsrq9qUzYt8KYBv5Q4n7PeXLwKaHSkF3QH",
  "key20": "FiCwbnzxxfpNdw2NQs5YvX6HD6urfbUxNZG89ehtd4WzEHGd3z8S1wA99fkWdxp2bE7NXQZSYj6uuxtJ7inPVnu",
  "key21": "4f6rn9ySJKefeqMwBeNyyF9jjpU9ZvXrP5evtpzpDi2mn44xERebw3bc77YxyXggczt9qLsBM5YkoYxq4HpNsCwG",
  "key22": "48VQUpmHPq97qSh7sVS4zZ5LzS32cPLD8EVPdUmLgYMYaFfkokcmKPGPUkEEKxf12Kie5fgk2J9CfJztWxWkAsbJ",
  "key23": "Gij85XuFAHBB19tNzUtBpokaVQuwVMFmBevx8H334CParwH1Bi4C6xwWn95Q4cozacJHkDiZRm9hH6eefACKxJR",
  "key24": "4141moSmhHqjRX7KTjMitwMTmRi5ccuTSoBSwjjUpocMphM53SG8sJFNGbbsgkgFZtN4nCggxTsaSc2o4wWQS88m",
  "key25": "5vvN19A2pQYpr1ssw5WHuVJpcAwYg22aBEbc7f31DPCdVhyJCDizyi5vM7yk8pc1xrPu4e8UTeiTCT4oTVPj1Zz9",
  "key26": "27qSMsayvwxBrU5xHutTEBaChi5Xy8R9HSkUxAMa61p48xmdBs6TcJqLEaB2jT9BFdfvG6dspZBX4en7b96VmAi9"
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
