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
    "Dh79fCqQPaqSjBCuKkZJBXbS9Z32GoeYXNi1Xg6zcLw5sypY4fDCnWgqmqeYxnmkM5nAL9RYpmTTNFdmx97XonJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f4qb2iAdM2AzvDUoYdtwC1hsvUbF3HJFiYhCYgn4uy4437tnuG8h2dsRP5ycUwc9TVao1fAztS5qep4bjvktUvp",
  "key1": "44HeNUckc85VWukaqu9RXVDHcuEeDhYm5wEsgUHUysrbr3TCYGRYbh54AYvnoxjVqZJneK3oNkKeUUSRiedLrRNT",
  "key2": "2q2WBNJfifM1zBtrZRzATPW15AZzFsTKYcNV8D3jaqGn9nkQRuF2pLEvY36Dzucrt7epLPjbS97goDtEZ5FwryA5",
  "key3": "6F4wQ9udGeg46GiTSsZGU9A1Hiygbd7WjgYAJ3GMCQF8mJXaGDC2qZGKy4vQP97VYmWo7ysaVmv3GGU2pKnRjaN",
  "key4": "5vPQUxTgzAuRuZ1yLjcuix98KkBegRShBsgTBo4GDREfG4XiFhh7AnQvjwLnr3V1eMyYX2qGJPfqHnwhrFGBtEHg",
  "key5": "VSjP865TNEnfsxf7roBaZtNGy6rX6zW5xSyoMQmYkvEjrEYpTQ36Y8U7xTfZSyA4ojWDWkvdiAZYvg1rjE9c69G",
  "key6": "21dhyEazN1pN6ckZR8tbbsS7X2BDHvufT4dLzsnkAAnRRRbc7ZfJVjhH3KqhA2oMJAcuJjdqSgmrWfExVv55vWJU",
  "key7": "5aKjof299NtGHoMKuCebcJzvELGzm1F212RX21xCg29xdZo2HLd7AiLh6tD7uQtTcLdQYcgKYg26sdKTNZSDgBSj",
  "key8": "SqEQE2NPnqvbd3TFVg7cTq8UHBATVpfHu8dovNvyZHadGhtJQSYwmUvzfiWjxAwTeTNVt8KbQ2KyyUa9PtFAjGR",
  "key9": "3aZfjsKMVNMgsSSGu1ACn7EdEbtyY8GtLqSsyLMYyvKsQETUWT2EvCSFYnBpK9A3WEzTxgt6KnSXDcT5UJiigigC",
  "key10": "24wUZwzGxajGYdtMiLwa7kT85kmMhhy6U9vUF1mFmBEQonoxsT4M7bAWst9rsNp7CvQysKKewd4UnAT2sPHHt9ve",
  "key11": "DgrZrfHhPkVW2Zyjy5zvnfHuA4KpJEnwoUHHpou5wtNmqBMSvoAc3s25FeMb1Uwb5XjLy2GaYViLBJgfLeAY3Cz",
  "key12": "4fvJnEKJ3WAk3z4WDjGhmHo5d3QYtKGsTuxjm922cY7bjz27ipZQxsd6vzsNDnJPvKwfUouSnRmU6PXe6EqVHZXV",
  "key13": "2RrswBmZHGuqJUkxLEhUc1yZoTgPpXJJGWLDDcZCgKk336SnTdTe83qBYPuej4nPYqcUGiKifnFjZiFciGHAhFaP",
  "key14": "28Rt6pa5MXjZCzsc5oDmYmurA25ZCEB7JRHCqGnaARfZBspGpvjbcwgvBSaJetPeL6FvLbPVX7ZRFkAEzrGp9YSM",
  "key15": "5ZZNCq7SjZ7cYX5npsJVYD9A67F7zsgTNdcU1e2MPmJYoMjmALm6B1ax25X7HBjv39EsJG8n1qHdSqsRVv57MrnZ",
  "key16": "2ZtkhPrrymsSg5LFNbVVsz7F9CMt1DmUPodPwkBMsiBZgAeDSKDabBEhfxR7r7Sdvc9UddefEbEs2Y297DviKnkU",
  "key17": "5ipZz7LKsENrCJgZFfDNBfsbyoDu41XZgh2LKhxuFykHj2atAv2MWh5dPo7J745SVCmH215bt5B2DWGKKMp2NXYu",
  "key18": "2nwFgQp4oPy33mmJRiRpbk6Xhyq5bvkj2CMo1zRPVn1jJE3VovYPiGC1zcZiP6rDt1QSqENtH4iPS11tuy3R5Wn6",
  "key19": "2HPyieR1vi5ZFyu2jdw1f4subfhg11fS5KRLEics9w49SuoQicfD7X2H3zk5kQBU6MXqHYfPVg8tebMyXdcXWBDN",
  "key20": "2YGYCvPt8BusJjFHUVUr4sWqDM1snG6RznxAYfvXUXUANeq4N63zPnPo5haKRyFxQ3aXPzwaPAczCbi6yQMrhbFf",
  "key21": "uz9LpohW2KA5RKJrpaH5WZBLSXByqAVtfZZrQ4xS7gDjVYnYi9jViqFCzF5BA9eh23BxS4tQAe8qS8Hm11Gu4sm",
  "key22": "3dw7eEfi4p6nZ5RACyh8zWQbBDoGZRXYygAU7y8yPcMKQK5Yh7BABapZLyNvp66GnvfEhUfSefeCvM4bi4HioMVR",
  "key23": "4ah52rgwTEa6fENu6Jw956ntd4XwBYNvh2cNphJ6HCWupdb7Ah4figYrCqg4EkjvEVYcgj2WmmQLr3ieEZR4LXDp",
  "key24": "4ZSZfSkGhavdsSZ5PDnhJrUBabH8kUYg6uCNhrwZxYeptjby52hURDHyZLe6vG79KhxaRaR8UZ1jx8jMESzTiJQ",
  "key25": "5FPbZWSYLxsVUKtTK6JDAsc7DqipGkuJfNNEpwJ42ne6fTu1wXZdzwtU6L3rr3rYRY1hZgGpELaKnJTYUeRNz7NL",
  "key26": "2CctkY6252PK6D9EC9mst8DRr7FrFhepRBER4DkJMwxDEzJpktAaeJV1nh6e5zidXCeo1uqKZwfty5BK8FvU3Vj8"
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
