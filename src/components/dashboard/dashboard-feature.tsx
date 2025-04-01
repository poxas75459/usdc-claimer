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
    "f6KxrVmTujLPaRMjXbNcm4it1Xm8X1fYzHgast5iEb9nyQghtBnUusSKeAVjMux1yod5fkZZouLrUWXkf4bmPCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BCjCdYGDLwrozkUToU1qUuc4nGEahoqiUQWd7piCHsSW9BjQ8KcXHyxWfBtem3MSE634C9s4LGdUBQBFwJUcHgZ",
  "key1": "pm9KgpiyH4rD4QPxznH1MSNDLgNifqYm7J5YN21T6krdJvLgF1TSWEDizh6uQGbZRAcJ8KaK1XFncKfY8LzSiTW",
  "key2": "4u5eF494bZeoYFhYKyxJP8eXyRwdQqa5JatddVPMA5auyfCxwWT6rvZCYRWJSg8xE9iu1QHmp3Vioedpsxo7G6qc",
  "key3": "3s3mp7TfsxswT4mRfSURWjp7ELdq3KWhHYxA626aNjLgc4bBYrwNfoWy4hYDREuqhde3czrcFRLfNenfnn1hDFge",
  "key4": "47d2Q3Q5ieX77bkbc46V8YdKuQL5MMmDzoVxjuJoJZcdQgw86EYXScN8fGAg1TixcghmJXgduHHY8kdez4ckvLvj",
  "key5": "5dbgFcrQKPjwwk3oTHTs4jEimMvRhRyXsbSAPZyw6a3WQMrekWc5PPb4To9M71DRppC176Xfzm6pFCfYCNtnjbPM",
  "key6": "LMf5yGsUKs1H2s2z576jAwQajNpDLxETULUneSpf52NsrZk1feZJvFm2iGTfXNWEESCCLJK4Zp5KBfULuWPce9r",
  "key7": "TbEmVkNgGxUqUzvgskGNPs4u5BLRXNLC66wc29hDrafNKwKUSo3QE7eKziuCxjFAWph8WXRRxL6rhu9iPG2Ay9E",
  "key8": "4qNwTTHQCE2sfojFFWRN7sEC4bfZANbcYAb4r4t8jRQGYg8mkofvvTCeV9t1hojua8DDsEbqfog4XTWoTurAEgKJ",
  "key9": "4JD3ircUEsaHp1XU3aKMVmXZM5w5Lr8mnToyk8U7TyBLjUWMW9rjU13fAHXmAJUwSh7qFGZG4Lh8gZ6STpkgKmV3",
  "key10": "Rq3Xi9qStaRLj1Ja3Vfa3AGBLLPQ2fAy5vqDPDd8Ds6qgWGiNnDCwUrbGVZNWwStGfhkwV2WPbD5hZViDDPqGVa",
  "key11": "jW7xZZSrhYhYDfjTKZWPjAug6ZU4fdRUhZJwMomGKSVz3zTYC47WUVLdZpxfHFHmbFHcZy6xCUwsZnzADEGH91L",
  "key12": "5v958R52Vy1dXXVuRyMJdm3KKKidpmd5EtFHJxRcvdDFumD19mhMoCzd7PDK7TJvakr6nq4pSY3Uk7uHs7rEKea4",
  "key13": "5igSXkRNr2erX9UuddedWPGCJQ2oQBzZhZ5dPchbj6T2eZyouwVEdJcGDEKBfzjU8rN4yiDAgFDRQWtAZ7MpJBpC",
  "key14": "NAbxoWhaJhogQ7BDTAN8FRhj1MPkdt7Csp1WwkAMBpjr1pz5kwLkweYpBEx7yy8VLhKvbv9mQwiVXkN8M3A5Lxh",
  "key15": "gfFRJeGdQuvLrAqMJbodsBRtL8JeJ6kqxd2T2jabK9WmpT54DLF6hdHtjB8dxR385U8yeP5An8S2d1qddHDUgdv",
  "key16": "fDQ1ADDbVWqVcuhRB1tAwk2TXKs3a85MhVsrDt9JZm6BboM7gfhfB2pACSu4SzeKnAYedoVVhNJeSrahVfsPK3G",
  "key17": "5hYnwwyauAkofyqfCu1N3DBEVspgk4w8rJ5peCkdSyQGCt3ivUkpe4b92qbyRJTVjC5Qe8m76SEaxeqehDmPxpvn",
  "key18": "3jtQnx1HPnL5ZjQAyKuLKrbfj2cmB9BLuns3zmVRQxpKzDVkMJQCcjTPaxTb9fx7YUi66tcQTXFHt5qMMXWDzKNZ",
  "key19": "2tyidEmGYEeHFKcEcVB3478XhjMLDzy3DSN9FyM1VD4Z23UWxnbdM2cBEhfXhZnpJAPmjXbHWZS7qKZNQrZNVxK",
  "key20": "3tdH8Bvr1mGHZUyp9TsGNQwHnGzSMNQwwVHeWY6jGgyRvkxotp4VdZdayJGoDDSAU3umGLUmEGz1eTjGVtMwF9k5",
  "key21": "2UTJH1wB5caPP77zs7fEuRBE6vXMhf2kZg7rPrm6Dy4q1JVQ3NYWEMfFpTQfgCJMpiSM2tgZzLwde7zaPByuneAJ",
  "key22": "55q6cgy6zKXys43JgiJQ7kzQYu9DUB3ZcFnbPnsz8YLxA26rCA2XhGmV6GU4KHVHkmPXDXBonEt5xJYCFtsN4ADH",
  "key23": "3XzcRJ8XrGHecnPev8BSDgvmzNdUPzG978reK6ME2RHMmHvsD5fLvgCg9YMLioRKTAcQhX76SNT1McThTi3w7kPA",
  "key24": "2zXpnr15fPQu2uatJU4ubSV9Qh9mq6PevQ9XvpBTkDyiCeKeGQfzJfTh8r6RH9wBRuD2G9WDsAqoki6r6PoSq7KK",
  "key25": "4aML8oGZVmmZc2E62eLqd2Bit66h2UFJjgEbNFgYFQ8qb7Uzx8cRAtEpW6i97zkGoevMU8FRvg9Pw2JfHdXRxbuP"
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
