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
    "4RALmyy9y5YjmR1pgUecGa2pUDAuzX58btzTCdtPZfNxM6sMUzbKuZp2GEmVmnCStZXbf2XMKk8oTfpqsVmt3YWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wfVTQWRXiPWrkjYSLQ42vQCSuacwHNkrL4tubJwhmzNVnh8CmoKDhCG45hS8Dy9rubP4Q32LncyMuGCJPQbp3cW",
  "key1": "5FPkD6FdtJaoFBrP2ZhsZ18o94jpb7xAE7nz4xKhELD55oSEpxPCAv5ruVU4MPCPfoicVqemRjr9YoyiFTqq9qWN",
  "key2": "yXJBVTYV4jaMM81bZqGmKJet5RanfKgxMLiDuogQbLLqdVZs9jbvjkDYmb2XxtkSpsMyd87Kyyn4qPrHDpofpXE",
  "key3": "2wVpEXsSgRyWapGN5hxcQV35FnxDWaPmxQxbbRnGEKtU4sYPDh4qwnTsdLEBLT57Lw2bFnKzMZ7u5RoGRMCss7zA",
  "key4": "4PWvaVa5oZMbFbm5P7qAqmPFHherLqMyy3LD7mhhJ2vTXWbhQCnc958EJEZdUXW7AZr35iCv1NgLwwczSjaKuXCU",
  "key5": "3PgVVErvu2VCHvdPTtfMnei8duFCHi3WQkwFs1dfkbpwCJUTb8Pm2qKnarvMfTawJnfuyLCq145d4NCeQExsGqiz",
  "key6": "5i4HZuKan6uX5s9gCAc56h26UEN3dnN27jGPDCELDRxVngRQ9MaezkrxdDSuzeMKXdSCnNznQosaXGZfSwoJvtcW",
  "key7": "45BGHbdw8TtCZqnNKv2Wh3JHzdkjvrK9ACA5A5g3dFvfSxwCjwQRk6aq3kue2cNFA81WhfDBJWX67YKr8vq3Qd7p",
  "key8": "TQjHT9Co7PAm2xYj7fUdvgxi7jj5PLuukCcdyeHSBE4pcyAp7tAFXVAiYRK9EaNLZ8otEzEipggqbCZWyFckn5k",
  "key9": "ZV1HQvG1V6WRbydLXKy2ZXVpN9vb2fuMoUvorzWNaDNeDtB33sEyFh3mF5bwqwJw4SNSibubTNgscFGs5B53YRU",
  "key10": "5EHcy31K7VCvkripQV3NtxdPCaavZgLrYPgqDsPdmXjpDhKaXp5S9RXT8DoswfN1Nrm6dWZpyVW56YnfDZfAa5sB",
  "key11": "3AU9azgnJ7kU6X654AbxnuMCmmUVxuAkphtz27pwXA21SpKj2kD9ZQHEVTy1fkzfS4TAMjA1DgW9Q698g6d7bJbT",
  "key12": "3UDGCknbPHJ3cSFPmT9k13GMv34QfWJQXQxctDHgArRhhRL1KnGKJ5sZgJXyap5bJqm92jnbDPm9ghHyLwmmVgR",
  "key13": "n9svBeN4G4qkxYqp1EAsjLnPpPWEAzb3HzhhZhb2AQMvkiGFhLCYmS1ZGU6DrRTEGbvpPfbUi3mBzpkKot23qKz",
  "key14": "2VapLmvcQksRaNp6WZvLfo1TUgoX27dmsQnbx4tKNeuBFTDRbEpqtZqvFHGSsGr79Db9iXFXq9MyajsR1NPT6mCR",
  "key15": "NfVUL5R8gTXqHCNuLQQPXUaRieJL1REiogao7QiS2mcUue4a7M7666YfoXkjxbBb7HZCttD7aKaU2Tv9HAsWBWu",
  "key16": "dYJWU6XwveA71Yk31CLVVGvyK5UqtrEvMRvdmFnWS5Wrg4SER3vXWfj1xiUTzAArXKLSqMgVunwyALPNyfXj5os",
  "key17": "PwjgH7vqvrQ4UAVDNHWsC1Vs77pXeny12uAaPPLyecfNW3T3KpooojbtbKKfVUN9ApD65eXLB5cBKwafSpUuVoB",
  "key18": "2nj1iaa6htZaRS6w4tWsmxw2vZMyzSLTSyhboEE36szg4zJ4XJ4tykcPFzrbzAU8zaf5uH3YeBWhjyWb99XAquwe",
  "key19": "5tvMUDFzPStmyNQrFxpq5Weds5iCnDBEKT114h4tmig167jzLjgF6xgMbSATqUeJWntTroSzZVzf9MnUDrQAPhyu",
  "key20": "YZEzbuqHBY1pcfnjgBjixTBNd2jxxKtTTaPVnuJFyo7n7SktrsdvBhLgomuuYxhWwtpwKoFAW7po7Bnkff9KqeK",
  "key21": "4Bkjzegdd1U2Xk19odpnksomxXoN61oNBJww1ZH1UKVoTJSPXVuzBRBFwFUsFYbWAZzDYLv18UBPN3W8yzVBqpQR",
  "key22": "53KzRLq7WzSy5T4bkzhaPNq4gmkFNJi5Mq7ao7AWsqgFKuy42hPjsxe8bwWz7XsWFpq44NUUJtbRDBimFu22ChWi",
  "key23": "2HXyRv7Lmp8SLmrWDdyYahNaaxqzdosbQ3XkFY8JrWA2RacYRnqmRczA7oQHi27nTiEDCjDiBNDuTcJvDA6QeQo7",
  "key24": "323U91B2ufgEScj3nh6oZQnPjRMRSonn5PNCMA7fqEGztGPjosPwYmWXpSQnFHvmPgc3jq6RYK3kmkELws6HK1cb",
  "key25": "3bKNjqDZwfrmDc3d7pAb5vMd2dJLhkKsUPLTEzjqcaL2xwzWYVdCR9dtdkK7DAP48WPFKmtuGfAXkHC9QXFGdYWL",
  "key26": "4zxs24RfppgUAkQuCYEPmapeMNFJ6MkqbXqEfJp2mnZt2yEbMfJUCKZo9rGm7EuHaKQPYv6KLhCwXyaVfPrq9mez",
  "key27": "u84MS47CCRrLki2X1s6ZU92i1VqAv5ntCW3pKyEzuMyDyfTCrwHwthdfR1mmGKi4xKPuPLprCD94Pkt8o6kvYNt",
  "key28": "2qSCeoCmzqkaeUtMMSfRAuZVcoFTzg1kbQR5eeAo8wEsiF84cqd2ggFZ3Vw4Wujhttk2gYpBhXXh4v151eup87MY",
  "key29": "3CStAwq3MJs8D86JoWCQjRqANgTn7U1eFSzEQz85gRxFbL7eLpJBKEwFzJRGAn2LcyhQ8iEhUBvci178Pm9Q4YhK",
  "key30": "LvcV13ngRZtajYgZZ2hrQempsKimf6279ewfrjrYSxaPcy42ubDZ6NP1M7VxnyqkpDgx5xFoss3yFXvUinQ213N",
  "key31": "2s8dsMfipUpvD1CsfZ49GA8ZP35VnTxSbEvQa5JmY8UW9DPdW6UPczPVehYz1hEMQhihst9eBRJZ3sxXpQfuJzCp",
  "key32": "p8dfHu5ydihxSZB3h1vVZJkHPdGHqdjyb2MYEtmmrq8BHUrBPMAaDecYcMUp8LEUzz39jqg9U7JRFaKQ9JHnnmL",
  "key33": "5rh2915ibacaB9wb9DyKPTZr6veHkEHBWztHsk3sxkc8GPwCughqVEkyx4WQj2yZdT8A2UWfTzjcZisvghdDoQFf",
  "key34": "5pBuQShNSVua221whVu6KE9HFwcPuEbcxfZVeiDrVgJFpCycz3aLmNSuMS3zPXUqLXZZkN7VGvhfJggcwBEeYQdp",
  "key35": "YA2ndiEf3t9YkygEPYzrsnjBkRd8tEuNqJpdkvJpSEPQSxT5Hpkusib7Kzwkv23n7DA1mFpzWw2E39hERxSsKHv",
  "key36": "3tf16Zo5me7cwtVyFVab8Pb8Jcom8hzwRFfDHMfQgUjSRZEJgJKn75DvQCCydHKyXthjfU1tYwAArppzqT3rm4Pm",
  "key37": "4V33SmU6m3i4bDgReyDutpxamb62JWukAYbRNvBCPTQYPinaJijHGPxTiCHTTLAQaJkXsXZHA9vzp7CX4vpLzHQJ",
  "key38": "4uohvqLgFfNhDrX4bKBo5Di6k1bfEa83Po1pzi4rgJHbr9n5rE1HxrGTBb3xgThSPSvCYy5uruTn8aQqtGwAquUB"
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
