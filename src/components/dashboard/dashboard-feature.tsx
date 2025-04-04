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
    "3uy1ciC3upgNhPHW7rgJUH2Fe9NyMXZ7xqnVFXZxAdiv2h9D2u4pzGo7axPxnZCseic5yVsQXk5NcrLraAeyLEJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y9tNti93AMVWxzRbneUU9KUFRY8meNqvr5Kc4kYxdxUuqLieNq3SCXtm6cL1LTg3rrwxERzPLPm5ge8dC9TsxRR",
  "key1": "4CPwKpvkENpcUJyM1bYnyUxvFAoe6ujxbrAG3hEqgxQY7rrMbFXjLW4iGzrZnXod6nMT2jvesAcWnXTveFFJWJ56",
  "key2": "vS8paAgYDPDDjqttLdLfzMuUGDhB6dNMQxCwFdMmTA3cxzSNj2kZsvTTogjsUpJ7Uh9KiPew2zCDuPk157dCnTK",
  "key3": "3qKngED2PN7yNnrJVGZGkhHzHUtPXrXs3YqnaKNQCPBNc9cpe7c9UuHSVg7RVeACtXcrtZXrDeNxrRMGVnC5Ws6p",
  "key4": "4NLBPkwFVw8bjsYqNm3922VfeAnVKnqbWXHHUsv96SkYuGYrad4o89B5ELiBAh7HAFkCJC9nq6UdLxY6xavH5VMg",
  "key5": "4MTETjer6JjwZkgdhF1XGVbuEbNQaKmBmHKHS73RdKgaR7YCoAgkF9bzsmRSxFkraAYrLrG7RHJp4zuEakkd7Mbg",
  "key6": "2v7SCveQiki9Q9ZFxXtrQnYqbHFBzxX2wy5SZBnzWFqDwLcUcgQCEz8qaFanmbHfdfqkSjTuRfdri6oJnCX6pzZa",
  "key7": "4Rh6a16aYaSBCDcDPxUmcMtT3QMmxWYfFUNwQoBeMvdQTioieZdRoqurjqgLjhaP6g93t37QmPZs7ZxvdXPkD4po",
  "key8": "5RjMseMPSoTFWtoakGmRVQFikiyvSsFxmL5vx4aTB8mkPzQ67MwrjFkRhF2NtHCQ4xB757jQzw6wsUhbWr264DbH",
  "key9": "33kPfWmAcXxP7LuPnAU4CB88MTudjtj97fQwhX1m9EfdnqSKYNvarnwBa8jbVoumPsyjiMXkjt6WvH6xvGYtLZ7U",
  "key10": "2TpN9XWAfSYDDxX1jcJHv5orzpvPhN4Rrw1uK5Rky6QSsxnzDqanikL3DCRjduBfB7CxaCvCF1LofavE4An8GtSe",
  "key11": "2bZHou6UFAWJTPS2NotrQW7VqoacXwUH3R1pAfDCpRdj9Qo9VzQKUaLiDKGPWWRUrGEyUmeCJK7o7Cnbd6cDWqGw",
  "key12": "4FzE5NWjvVtfAXke5uNc6xxWjyVqMMPrgSuajQUrnXki91u7XF6aB46krPs2XMJjAd8mU2jJZXrvapHLHaMpNLLV",
  "key13": "23GUgif9JMhzLuGpwHVJQsM2Dn4ZGuqvW3zqMrbGwKwZ7Jzj7NerDU5szwfPyZbuGxRKhEkW7zeQzKLoP28wDtxp",
  "key14": "5Ha4Ha6bRcC93dVwhUkmoMRiR7nhQ4HDRTkv1a6gQXF1k5HgAaEP6r9JSt4ddUR99jPo97GW7ZbHZCytGstaC6Kn",
  "key15": "3avhdi3gzfiSACG5Tdsxqai1TymHY9mXEwDx5U5cg2syS25Z7vsQNSMWMvpMbcKzEFYXy9V8gqQMhvpJynXEr2e7",
  "key16": "tVtPWwY7JEx9KFU4XvhgVJbNeWRk1MB8JHh1BsGUCGtTZZ8DCD4gCjCu8TaFyLqA7nCvbHHjj1ctUNcT8xrKrRR",
  "key17": "3Pt4TSaDFRQ5EKtmtbfmdTHBsVeuQXD5ZCqaSMmR6Mq5eSfN2yY75jor2KAZnK4fme95j1NuSpVfT9SbAvx4HcBx",
  "key18": "2XwEHm1oJHVAFatATonmshR91EoVvacujnfzJCFa1Mm5TXd1JpLt6QGecD2uARb6HvQZAJnK7xX9Tyjk5YDR5MAh",
  "key19": "4DLqwBLpKXXtioSndZpEQJGXA96WzSCVgjMhmjT8dthxGYhxLpcX1Rzqdvnvqy59JjTkMBxjyveCC1Nn72ezLHE3",
  "key20": "5zeVDYph3SgbtxXSD214ifon8J81QZdbgHsToisEf6QZTUvgE7ibnxajoNHjgq8YHnqBCgNB57oBjrXNE9io8dic",
  "key21": "2ddAa67oPFz4W6DpVKqwA1rzxrEG4nCqs7KAcSQXbkNNgXwiCNP9qtLB5vD8NNAxMiv4EYS7Vnmhe2SC92QhxQ91",
  "key22": "25EBPVWf9QCPZvhNjrcPFPf7M4M7wtqx855kSkxL7XaPSgsuDfAK2qaorjF9gCkrFCARrpV1CBUW8AMMRNerEbMX",
  "key23": "5P95GAgdZ7UH82ogE3ocgJQfkZ4BwXFa7Ao9SV42cvH6LVaQX466ee9FmS7NLrDtQZgoAgdkEX14fm4qNVQ1nQeP",
  "key24": "3ZrBa7E9xX3hsNcsWVAa5LdtiwBJfCCvYvAskiDiU6VeLC9e5h3EKp8vMXhvwL2zPv9mBbnMUNUsd7wWsr3RbCry",
  "key25": "4f2njGct5t1je3g216BUFsQ1aaTBhLm7fkWicNvU5LmzhF9GyZPaL9mafyL7yQzLKowbDpavMok5AjXDviUgRr4D",
  "key26": "Zeufi4GyiY146YsgqoahJrXpHRHNiLZfGJNnnpnbkapKd8jY5z6wmvWFuUfmauFXi5PYep8X3nDqb6hgYbqz5mu",
  "key27": "DvbvtkdeemDANPg8GTUMeouftdbEe2tuEDv9L8tRYH8c3Qzyf4A3scqSPXWyQuwmBsCc3MB91MnpJ8MRENvxrdo",
  "key28": "5LEm4qG5oEP5VeJDEg4CLn4Ff6UJipdhpKJDF8GP39iDDK2GNU1r4FCtz6jYWWNWmfrYrAked3jTZfxvoTPkT8X6",
  "key29": "3qXoihF6ADXuWMMNuXmcMQcFYCex7YhFgy4Q2h8XEfrWerHteGrgkybqChqV8xtEVAc7SXyZCrQJbXPMXJPJQBhD",
  "key30": "3Ttpb5aNiRaH7pjamDg6MFeLrwCk5WmEd2bYnst6H2LinKZUoEqJbBbhSJobpfuswcuH1ZeCBnnkENZoVNon79ZG"
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
