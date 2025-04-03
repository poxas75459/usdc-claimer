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
    "3XQimzbCX93Zbd8aj5xsyFaH5gfLMNi3zBdonsTShfJPnyGcgpkU7GVYCR6YcRL4Q9YpKfLNSG3kxBia7JsMYdF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lronm3FdsmP5j4zMZJmNfaHuFa6mrboxk1fipHh8Y8tWQuXgL4DJM4onUa7TAvDKXKXs7whKpv4cQzyVrNrQkpA",
  "key1": "ksUivuUPWNqzn2pUYqssn5eDpxU8KRjMHdqW348WF3ktJeDEfuTcE5dg5kWVZgRhZ8cAvk56tiaoxKLiJQq9pCk",
  "key2": "xN23qdgL7CRwfSSc7UtrTpuy2jHx9wzvFismt8K4TbezL2YYMPDxgXVBU9c2NnSwfrKg3tKUaQgQKA4NG7zMm6h",
  "key3": "2ewRUXnzKudQ69vT2bzPGyoDrKvY4LTq9LsTGckuahUXyU3LdSyKohimsjwgXoeMHsx7DVZod67q339axpZKDa4L",
  "key4": "4Sz31MvhFDnZzSPtXuhfPGM4DBZRvFzMT7qDb5q2vzTgfUcxJjqAb9kicU8NCPeuQnZT3AAiVNG3h4hRneUGAaFG",
  "key5": "4TJ1scEcagBFZacUSiwStYAkP9G5N2j8QkBHDxjxMyrHVBCF97NHyQud9YjJ1d72BmXKFGS5hHzNHzrNLiVWMw5Y",
  "key6": "4RYpcuyEeKi9JiFKEar7JYwdK5q8kvVm3B7QmMpDkbWxe5ks3Bf1sVNaHUrNgETQNkPGfgwC73EKcE5CZqodZR7X",
  "key7": "3yRPNchSScg6UREEwgQnZCiNu6zuthANWTSsTPfZCffWubAQLX5oVxiXBeF2dUGAZtdFrEd89wJHXmDWKkhgmQyx",
  "key8": "4Vwrq6WC3N6xarTU8cNwDhXUXjP88AQiKMePZQzZFwNHzVmGqYevSY6xKdzQY24HcEHKW9XACyUXxsg5pYN363tp",
  "key9": "4t4gEDEXmNM3bXsrzUwraPhdK93Fxw6BAhrjGi3tDG3paxEsASSnePHKpJcEotW3v7akaQRStna8VsNM5EFKmvBn",
  "key10": "5iFS5DzJa112rgtfpqouccT3tiCivt7AiboGr4222q1NdqJi5KrZz2iVN5tieB6ouBuNDpf8cwMuTjeKdJQjfzib",
  "key11": "2iBFZMLzvRBSgVoUbg3gnvXpYqUf7cNYVJDUTXGLim5AJaVcKKadg3Cgh8Tzmnn7Ejrz5aeNsBaVEUrRK8LAMURw",
  "key12": "4UimWBfUc3awp7uMRAWLWbNUnS5tkQhRjEWKmKBjT3DEts3ABXhcmJ5QL29fKyHjdb5gw8KiFjZ1GrYuWCQy2kfc",
  "key13": "2hbM9W89yn1ET8ryTtarBzpH4QTuJRCjWE4nPyADN2H5Au8KQdhwDiJYpibCSgjcrg6kXs2aaJtAXZqHoYapQKf2",
  "key14": "5Ft6Qz4ScxnAjRJz1M8JkWVnNRem8D3KUoQ5EodhqDLGaomYcWyta2tnKDJXUH8QBGfV6VP1ubzWBStziZf2BJSC",
  "key15": "5YTAkrxbP6q2eydYeUMmcpD85QJdSNLxvmW2WpfLiewjfRHWciRsFWrJjqVXVYKWLNsccFE6yTH2GaSUc2ccwDx4",
  "key16": "27Upr8aMmPTPY9FV9W3smyBtZV7RTiEGt24haktantnok3vwf7pKQVi4eeqU5Bu3x48Pf7mXrjLB1aNLyoJzNncb",
  "key17": "4eg5HoNBwLvdUPYWGJ7UsgyTWTrMMj5srvjffV5GhPFq1TnNm3QxpteFQQdTWE1fGWWYRTLaUmMnhGhciCLqFK1D",
  "key18": "4nr2C4d8ZNbGydy7AL2fMNnQmVwf8EstPyiAkyASBwKQAvftubSrugTxxmfrZ7sWzJFRsfL5s5ap4U6DGJdANtix",
  "key19": "iD8GMUySJRsVJRg8wJny6S2rzkTX9a1U7KUf6eRNEk3GB9SuLfwe19fhQNK7rXyoby3gDAFhf98HrHxFBfRpA2U",
  "key20": "t6jQkm5pbNuVXKZZnHpvu8ArKxJevg4FaTda8UKXt5vmEb5XL2bdXhV7NuuhiwSfDL4Cp5dCwLXtL8T47Urqh3A",
  "key21": "5sBPNnTQJxovYsrpNZmZb3GG2haEqPLtkxC6LRVAqAcijAbwLuAfAWTZg4V7NaFk2Zu2u6RxkN1jtXrWS3aSvfN5",
  "key22": "5fkQZLvNP3UsHmtTSGTwAbzNe38rqg7Bk1Aru6nKTWeSMEhqdUNtnHbL2SKGwCqyYfnDEPx3oWhCY5AEK3AFjJjo",
  "key23": "219s9AhJDgtLy9DLjdJeF66iJMyMoh78SEFebNKi5fhQUT9ZVGvbZwDKpLoDmghCgWxpJgV3DtaFBwt33THbjDEJ",
  "key24": "2wqnr9zTEaVFmHjDjsey5tqTEd2wwg6RayQwV6UJbqMHXgAgf1fuTrNJQ8NZcNbsR9Jr2yffVAN7Z6cyNTwRmpqh",
  "key25": "2ZtjJaDyvPn322PissZurSPsUrYKuSnAs7ik13obJtWrfzYZN7TRDLCxcKWAk1Z7ufjcEDUDF6BcnAPE35gP6LEf"
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
