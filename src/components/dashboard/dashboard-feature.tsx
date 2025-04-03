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
    "2ktiqttbb1qtSfS6Lh5ByoJNLrz9a8n5BytGNRsoVfcJKpWdd5mHgqd3MugHuiNogqNnJGGeSYVqm7988km5vtnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JwbpKzCSY3dKvZcimoVarV5exrVknuNSw1N2Zr6FUCzQ91FChQUr4nkdLzirjDXiaQYwQC5djcfX5orzcW3LaXu",
  "key1": "7PRqWjpGYaohvNwR1rBHWW1vjLdCTQruWXg9oyx8MRgFnVZZSjYDEn3fU6z2nUKsUj51u3AjNRzHFhsGMxcfGyK",
  "key2": "455bynThcQfFyszAcFoDH9nSc31j9avHP9zCU2UEu5fzchbw1bf7kMQTYPnZxx9SuHkvG5xzbMEufcoNV5cqPgDx",
  "key3": "4ZwCnav9VaSqYoD1qDeRFtiWQ5m3mD46YATGpumev7t1MwZ4AKN2E1pJa8hGza8JH9Rj9jhiSEsiwaSoJi85aP2y",
  "key4": "43vNRzUaV2RsUkda5NGozEZT7peywpQZNAQcGVv3EZbbgwUWMjcHNLMkJp3W2koBhvMTyzw5abK4oqmco9hv6ct5",
  "key5": "5x8iUsbv5cJtjgfnNAzoyJQBF8XVwB5onfB9gHDoxvkRo6ngWGfHBHqQ4XwA5BMEfcWWjkfp7Z42UbsoVFDFoPmH",
  "key6": "5CYZQoJMLS7K77dRvE7iwqb5T5kFXDkaPa8vPQgs4CyrUHnwbSK5E4QNvgxU56SS2FpYzU8Lg1Sh6mXnYWhVhgq5",
  "key7": "5kZnGZ74RbDacTuK6mPyQYKTUFr3Ffo3aJg88jFiVDbaNeFazeEwQZGyUM16nMnfipmEsfaKRDUrobioHzN5aoao",
  "key8": "5TtmtS2ng3UrPFVZp5DD68eNaK9CAcETZN6jy5hpVZ2VhG4PAZvNDiid84wkgmobB4T6KbWwLaF186kBJ1mak3a2",
  "key9": "mDEwgFMVpk9MSCT8FSGRNGji79Qo4Xz1hEbUF8CqPW9b7hhbrYKmGjfvvZiKjDmZ8dHrar8ghdeXG3UEyjFKmnW",
  "key10": "38MJjgT3zrKnGcJ8Z5TFLPnEGWGxEX7Pb546uqRY5NS4YZK1r196B5BwZRh7Xu7PompC8ArZoX3UAwDx9Ee3GCH8",
  "key11": "4tyEsWPRXTsqxMQdSMEWpGqYUJbET7AdGHvqf3J6gYcMGGiLvYo7P17XgKfyZF5nEgYK482kDErk2jwr7U76jQgE",
  "key12": "3BDLicm7TwDwR1sK4TYT4yLM38w6pWRGpUfLfC32jqnwNzPvuNwKFfCaDevPpnb2BvPs9Tez9JwpyJ7RASratNCB",
  "key13": "375hxto9SxS4po8n75yUi3YMKHRZ3b8h8BAinwbkXuuPdr6Zo9gzdQCoRzXnfrqyu2Byk9p8bwQYmcKvyuHiJqhc",
  "key14": "2ZHzZcrrZiDpr8v7m7FM9BTa4ZeZdAKbrWfp7EdLDY9rLFtBV1FfWRmtNkZJiJFo6rNDuo6S7H3kZPCUVa6MvhUs",
  "key15": "2HJkjTGAUka4aGNFdSqzxXfFQCTCSuP7XUX8K2gkjHNazrSYUe55UH1LN4WMDewzAckmKRBQ9ULhqNGqnrx7mCeL",
  "key16": "5wS1vHWHuERzCQ8ok1fyKEi87KcRyAqEEkNihCtUsmX9NmRZSz4siWoRYQtYzhpZd2HeiKD6m9dUYfvJEPLgjFVN",
  "key17": "3rgaL1R6kwRUaCtELaVY7b6VG5eZPaQFQegTmoZ7TEPu3SFM8oEG12NKW9CJiNAhGozHemoP4cNZvJ9VS12ujgQw",
  "key18": "45LXMUdjrJQXzLbLUPA231Sa5itTfRfq6CATdsrn8ejpcuaXcGV5LGNTRbegFTbY92ggDkQkKYVjPQSq7ZvLsLi5",
  "key19": "3xjsuc82ByFzJSeen6mmFanNRNEA4uaPMfRn9uEr3oKDqbZzPY9dosWztodpYcb5hcLhMYk7R9C2KYqQVUtxHSEM",
  "key20": "2iC7eNcqyV46VYQduMV1ieb3BLEw7FrMEyVewCby4sgBfG7QBwy4EtiEkXrq2KeiQsVebx1yhj5Jbc8BHk4X4X33",
  "key21": "Kgi3PLCQdz1sKxTBHivEQqyS2wfQ7kYvqx5DCKP7Z8ddurngPENP1PAhZ6skdvfdgqL6qtemZcaxQ5mi7i6zPn9",
  "key22": "4HxoPfkpPJP5XLWZyNf9y9EpXoR8PsMRHw2Hj6dsrJr3Enr5cpypepUvp544DH6Vzji5uTaNB8bUpv1hhbzxEgMC",
  "key23": "SuuxS3euC8tw46zc6E9J4BkqTCJL357Qj75194MjmWfbcK18JGSzbsBfHZgxcdEsKdkhcNhfUUhJP7De5D9u9n4",
  "key24": "6HkNfWnkQ1PfidcSLyqXNtU82ycgxb6n8JCVxS9MXCrZak2qowLTDP8tdGeQsTdZmCHuKS4BjEjSU3TaRidKw68",
  "key25": "5dj7SHXUFFAjwvpSdi16eX68FTnqpkuTbxLrkitookqP1BaZs77unQWCGfLnVBe2MAXW4T1YidT34ttnPLxRpLeQ",
  "key26": "4dxbF3kitWZ86Kec9m2yipNfRXJzuEeCfjaLYrp3tdK5FgkX3D6fPjyRNGRZGyM7irDdBr8RP6NqSm1vL5vJ7PxX",
  "key27": "568NJFyxeQHTa2ocsGnSBibU3JU1SSN3nHBfq3k47TiUuterZAmFdL9AqX9mJ3FtoQVHBCzhApErkNwJ8ZeuqbC1"
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
