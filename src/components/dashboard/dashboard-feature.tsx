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
    "3GpAxx5fCEAoUdRDVb7QsFPH4MmqJT4FKxiXDg3NWU4ZpzN3jxq8T1jxE8ynoJRzHy8WkAFt2FnnaPBVByvqdzdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E4asp94ERD3pt2BE85uGndDVbocq8yUc1jUV1j2YsTzuvrbtgMxWSMjAPPnUSKDSeucVdTUSuvdTwRn8VAenzg5",
  "key1": "3yT9CErQZFQxchSdMfC3KAmsCqcJ7XdVgHyhXy5BgKUCPgom9j9St2yr7BR5YbEn9gf8UaZGHnMsusCB4PMGVcds",
  "key2": "4PpSPbBBP65NdHnVuwUB9M4ue4Emv8DZ8pMCgRS73RydBztSiM8W8sD7gCLMBrpP9BsEtvdSoTQ1zicogdTCj5C8",
  "key3": "47wjpWGzWsjJQ9SX5VrMGyuWzwYrKG4WZxUJf2w24VgQMqnh8JPCs5QQfALuxEg4rHZz95NxNKsNuATCtiKwKD5t",
  "key4": "5VxJHQddvCTvf1WZBLCCiJnoWCftTBeJ9HfBretDJWsMbKbbcNr3QSXDycvtjjSwd4LsUSFv313gSbELt8HYiBQt",
  "key5": "5YqeUY4hE9et7UNEeLqDouCnQ9sQNQ5nSE3HaYQYHp8xN2Tnnw4JyXQDh2XshNL43jmdixtLn1qB7LuUrW6D6GrL",
  "key6": "4QfLRYiLfBie7u174DJtoRk6eFSkbpkqyWVoqPCMGzAsjyFjBwwK2Vr4Z5h6zRoC9YpKd3eiaM2ZRUMqrLY4nZcz",
  "key7": "4mmJZsLM4mZWh6xewbUrxTo4Ubce8SqdZMJeL1MzjeJV8LDmZdDqmdAfHyfezp9LUVGvQ548xXHw61YXUEPNzENA",
  "key8": "2hsRHLNfKTLNHaMgZhyvaVuXpZXgAHsxKU5KGYWcoiqnoum6jS31PFY7vfPy2j63eP4pm8ZzT2MCAYKrZHc6MP5S",
  "key9": "2uGPb5qfNZ2ih1VRPtRjVx4mijiKVa1KgShQ25SGwkeyDbx5fhPFEeaHEMwjNWfdrgDzKNtJ3Q93mCYD5xiYeF8b",
  "key10": "3tHKYEMKHxHRSzKMJ3YCMMprp3sg6BTPPMPrDnV2wF3ufnL1hrVpdxGsa6oV2k7DN825BW4juZDXyhHvy45okbpN",
  "key11": "J3LBGnMHDDKZKHXtNGzWaAcnMqAXd9gk6YRDkHZnGuGvCHWrdoAyZZoLRsEf1FcBksMWcKi88mdGpEd6SwcwebG",
  "key12": "RvRMcre7NqumjTA8z5PaJCbxAk5kQUHMrDzi85WqWotb5TcYiR9XCkFhEGJxqmB7vuGssjteGcwYg89JQdv4xCX",
  "key13": "2YtkjMkiVkdE6uBeKE1UTxcsEfXk3JE3bnab3FwB7utvYU72oFmtbLAYu8Eb4y7ryKJ8iorkYChMqfe4nrWpNij9",
  "key14": "5fvrJwfGvvWiTuoEujs2q7rvBSLNictRGd9CUdoVNMsYK2aVoefGxqvXRe57sj25y395Ap1UiA63GQXugdgSgDQW",
  "key15": "3zkaggVg7pDMpt4upfaKRZzUnrYDRQuiyt1Q6wKJVeDaQ2yFWLC3swffQbhMnfXg5S3p7Gf5ip9TwkEsRVQeoHww",
  "key16": "3Ejuj74QoXHDpTVEdFVCTPxeedcBwxnktfpPPL1npqUpH3odZT5m5NM5x7wBbTRVznZEmQYHZgTYCYYucBa2y8LH",
  "key17": "2EYF4MLp9YouiZtjSxWSzi5hyfkG1F5q4BmiVe3FQyHGAnMEKf1iKPzWnYaRWqn6qq722mG2xg2MJA7mEdXA1M9j",
  "key18": "3pSXzu6kifJ55XDayZ1btSghkW6tdEppNNS9fc8CvD2Piqqt7PzaW7cSeATbNCwucUunEfcz9k3kQbFfFbQvuwLh",
  "key19": "34KMrBXPEhodRV9Er7S6gavQJeYVUiwdqWU9Du2R4LCioxdmd4KyBQtJvQE6xGrQ8XqrpniiyyrTDtFVL7h92Xjq",
  "key20": "2QWC69fkRRzFxfMRLYk2f2Ey1M3HHqbnoEMPChTXabi2iMitV2VyDqadjVxD68RaJi5hYV6kGVjM95mPVGGJdxXH",
  "key21": "QCQe9p5UMxbovAXoWQE1cJ9vpJ72ZDZVs4Bgh3oUSw423zd4MxvZKP5F4GeSAy7WucDmzmiijynsuAsGhX7TXfk",
  "key22": "3Bq7hV4YkTzLypbVFNSTL8LWzFyCtQ9sn7YWW8oXawo9RPak8t2hWuB714xghTMTcrnhDsp84tEw15kixtk1yEP1",
  "key23": "2xcq4bCRuhJ595UWwb4vWx89Cpw575WqN3PKa3dNU3YaCrsE3MdKedArE796h44Tjo6Fa2Cr6WCTWvZgtTaFPLSE",
  "key24": "3Rnyb1sbs6ZNMX2Jpez9w9JnH93FxxS57xMrWYXmg9b8xCujKiepGtgCP3isXzMs3fypBNJqNtBjvegV8b7V3Qyx",
  "key25": "4bBTNhEUZmaiJDtPzWwRpZ6SsbXsPzy14zb9G3PBXg6AReKEeyM2vgC4GBRaW98ZTiW8RrhpuMj1TXD9rjtWkaM4",
  "key26": "5Kkww8VSaVJ6eLryKaK6KXthoDgxxusQh8PDaWsUmjwvax3snTKDPjPeBJ5naTRz64gd4xx47wL8MFLQbTqw6qxi",
  "key27": "4hnmVSe1LAYNcKKFdrrXYrG8vNt6nLeoDFR3vrEbmzvKLtmDDtJh8V4MDtLudjCNwSS87CwdCEspqjLgoFU8jwVU",
  "key28": "5yJXmhmVH6F8LKxxZEuXYodkNnH9JSRJ9pQtuGeB5FzmUxNJrjoxaUe59k7ikQfjjRSSwss4fzFzpnyRG3LwBoU",
  "key29": "49JQhEZmHzE5dnteavsBDPg1r6M1cDnoL7u9a2VVj9J38MyQrtahvm4tspc8f3y7DXZrho4SQdb38UbzQBWCXEuk",
  "key30": "3mxYHHmXfr8rFVUaVnBDzBYQiZaBx6mWrAmFMbpaktmt7tK19FJErh77uCAzhwziEFv21f5mizpXuHzJEUzPmPpe",
  "key31": "5T8XzLMBp2dm6Cy6pqdEUfnmpBk9sSL6EUeNfFtkcUVt1bL2kVkLKpEFVf44VBWmKZmiS9gjeBaEUfxbawiWGf6y",
  "key32": "5a5CJ1u5gQVAbWafhEerwQvVz6dnzYAvLvPHuNP1GZXtKy1NRaCdr1nPzSEVjt7JUCDpc3fZuAzyWENG8NCZHquJ",
  "key33": "2sUs2LHxu4n6ydV7hDYbvCidcP6L6ijQmyR4rh8xmzEqMin2u8Hmxzy3ESVQmCPg9BvmQEiioeRRk5HT9sCzhFVK",
  "key34": "UjDSyK2UYDfxTcoSyeSsW7URYEtGLMbe5gPUn5vg9WcooUm9d3e6PrBZo9R75XAZdhRvdLjfAJyB4hx2xkMwUkK",
  "key35": "3N69H7dQfDDD8SZeTtqcP3qzeLSMV85oAoxdPcJx2MejhqKXiHUnb62msvHmpsSGJiWbipDLyz9UqPhM2f1d5tm7",
  "key36": "DkagxvyMtoDmVkPx3VYhXT8cJLUoP6gNrrTGQYf8fbTKZS42J72wYPnXKjoKzBk9jNUUvuqFbi9rYjVDYSTzGnn"
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
