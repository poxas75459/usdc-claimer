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
    "4ygYSvaDVoWak9J8WnP2eARHvCNqeXT4mwRbcL9xgL1KskgQ9FCLTMFfZQcahqumUi3AaP4xfyvyFeaKwjcUaszQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b1cAnju7bB8RDma3sF7skcqev5UFy2ZfJgWz69sUn32zbDG1QHDpGMoEwd35PzENW5pcMGevQPvUAF3YTMhi1wx",
  "key1": "28i22RRacVMUcb7VDhqivzwaWJrVE98fkVoLcXupVQETFK6QjfTn5WZmmFfuvxE3dMpwxFQ89VBxjyM9asLZBR1W",
  "key2": "4YhC6i6YvVCMwWJx2A9R8juyrJUTRXqtn6DKf5Y9Ky3rvoEtg5C56hnQLESP2frhgetgLmWNTuNjZP3M1oSdAiu3",
  "key3": "2eGDD4F3jVEYec8k7ekhPNjdsFgAgRMmexPDGkyCrjGJGZMUzAAWUpPcvnxrj5E15QDy2EAbrD88aFKwKgrDDvhV",
  "key4": "5YpTgyNE1J8gtTFjxXQidwJyaqmXzzDrnNjt8tWY1gabtNRpnH3E6U3ozrzAdbFBcuivRfRuHhxdJ4R2bHqrbczj",
  "key5": "3zxfRYrqo8ZnVyxaAiUM3B2ugvG3Pk14dKuH39KQn1mKWcPaRzgjiPboPknmQoqomG54LyjQEsqhGUTVex3oFP12",
  "key6": "2WYM6aUwVq6J2HgufxD33W9F9TuexPWs2qb4aWZY2Cv7Kaw5xiHYks4keerPZxEEFVusmZNWUAhUSbYhBXDpdfzB",
  "key7": "21xnifqTrCbWXNuxTwKgzYsdpo6SjNSG7tV471eWT5NHj55m3jUo5bmdYSUVpgrxmtzCc1wrTDhxdM1jB7oWvB8z",
  "key8": "5y9bT1R8zNzFnD4KifXMVqr1gGjrMCXRj3tDgdqYZdXzNLJvBYGxB7c3y5VSpbSPZGKp3pX7KkVziphHadcrMwCe",
  "key9": "31oKqR1DgHL92GPYyJHvfjnr4TTvymUG5AerG4CWyBnRcctbcBFHTTbvfoEsk195su3zjy7PUkcjsDbSYCD7b84K",
  "key10": "2VEaX5YSGR3rzjBVq1rxn7cs2RByFYXWfU7mj3fc729yNQxhUSvNWoL26VVZ4zaoX8RuLtFTdq3ZechXCjU2pD4w",
  "key11": "4xU9k9usVfEcUzjjwKoXB3oKPRN3dxK1pUoqMTSnCXUHHiMwu6Rx23Nm89UUNWCQufVAYeu8UuW5gv8PFGX2Tnkk",
  "key12": "LS1bvsjF5G6XXFfmKMxWnyHYJd7hW4WKJUHQMvXb8uMmMc5Fi8uW8xjoVUVaUa5hKMV86ihYv34LENT4cBqbxCG",
  "key13": "5JGK8UFwus5L1cn4THtBaX6pgzR6seqKLpue35CfjTXXt4MXA7wsQSo1uWeU1Nksk3R2wq49SrdGPv5LCxTNdYRB",
  "key14": "7Nwq1cDZq4dDeTm7cXsv7GDgeNbGWE1M2kCRwCEmUhrHS1SM2esVh4UkM7EgrmN1YQkxWumj75Td4w6tXm5uxZS",
  "key15": "Cd4kw2XiatTGapKcCW47es8adevhTbNczpq3QQbi9oazsbQ4NACP3ra83gmZ2JyECbJWtBENx1yfvSPvYULF25L",
  "key16": "2GsCZixVjbQwpdJew1m8r1KE3axi2LzoALdJai3ojbUmFswAmRT62a1vNfwahHj2N43Q4PnxhsiSsU3x7uWVANuJ",
  "key17": "JPz8m8nnvVv2MiDrc8bxuyW3YmA4E3xm9WiDdX8nzpoXr8cbuUAKSqKviXJDTJk6FzGtbcUWGaVmhFq6beFvwii",
  "key18": "4thGH3yQs1x4JpbMMp9H4GPKQcCmGKJ6yK1ELchDJNEAbfwZJomhTMPgGYxHagUmZJv4BWy39bAYgxN4kWBGjv4",
  "key19": "kaXJtaAyyiizCVaeoqekPzrVLfPQTytpZWmCCKhdWuBmcXheM7F3jC4eitiTq65rTMrsLWzKVLmWLPVAm7Pr9Gv",
  "key20": "4jv4ncFTrWS6qox9BQ5UzSVQRsroKAmCWHqFpFYKvbrUeEvD2LjMsqhLHAxb6N4NaNAEk6kmwZp6LvAHr5ySJnya",
  "key21": "8LTfTNPBU6EiThKxw3K7ESaoTgzQWijCFh6TovgpgnPQRfA9NpZVViX9nVCpHuiT9KVS8G6KHXD6dhCMbXYDmjW",
  "key22": "4WDpPohz37Yg82zywER38zMhKnAGgGcCvzs6c8SQQ7UzNomWG5VJ59FVuU4AV8zgxsDb9CNH3VHc5rLmajf5PKjk",
  "key23": "4aeeEpXEf2fWZ91SFvD4DkS67AwUw1zt33fZbeirazDNqHgfuxoqbP7qKz74LHtF45yA9tQGntDigFy8fvUbvab6",
  "key24": "N2yoeCruRsAZqkugwZAgG7aajDhPnKuuC1jt3Wi3MymvM3QDv1Q72Y82BMwvVmaxTRcdvnjjcgrc7KWXjyrKcMp",
  "key25": "xZFc9pm9Keob7TdZKHzCoD5GnWWyDMBqq6fAt9LTa8ZPwhpUt81mvCJNJ9AD5zuubbgbfCAK7rx12AymxGSU5qH",
  "key26": "38PEW2VhDHbYhGCA2GMYeiKBPjCieDyZ564DZtwLsxgX9EZParkTkXMrNjEWw7URLNo38sa4ntTLe9JEd9hNu1Dz",
  "key27": "z3cHdugYY7sjPRkyuPJZ767RLvgQVkYJ6m5LfUp7WCCZUSXCvXvJXS5kuoQy5P4MxtQsZshuyEFgVp92VQXwDA9"
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
