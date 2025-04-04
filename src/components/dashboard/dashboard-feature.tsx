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
    "3pwQYaTiG5meKyhuNVFtM8wBtpYSxdEXSVedYSrZp1Yq9VJTadEK5nem4divNDUwdfHSZDtfJgjefCfrG8adKpVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dkqkZVNqdXxpTdYQg7P85iq6z3hu8QLzUKYoe6yDy9Fsjko33ApWg3pQ5FN8DfVH5TS3JztMywRad2i5syTczai",
  "key1": "48vz7HSMWCYkyY3HmCvE4fVv2FNkmvJ9JT7AqVkkmzkkDv1uxz8cnSzwBV8SQJboutdjWAZ9n4po4VAmUpUx3NxH",
  "key2": "NPQ4uaUWZG3TY1Y6YxuncJFykAwRPzHuTDGNTPVgmkXGQfuLhu82xCU1icyjmQeMjkTn5CwbbcgK154bbD1gtth",
  "key3": "3EEU1ouRUXR6cw9abP47dRytLt4umCidqvYBn1NPe8anx3qKPs6SimBvdxhZ2bLrwUeVd1N1S5LkNdYZ3TvyqN3B",
  "key4": "2cPy8CY572tSDVchimE7kY1uc6FpBPePwvKQwW41us5a1J1YQjQzwXQKP7i4BJYhtUWhFWMs3US37VZXdg5TaW11",
  "key5": "4JKk4ss6c9jzjSLZeSTdnFJUumFa6HUWFNx539Y2YzeRUQK2wwh9RGb1i4GZVBY2BqqNsBcJW688T9G18w1f5pQM",
  "key6": "32c47jUx1q93o2E4uXafbGpoGQhSEH5kgFJVLuA57DxaahC4zwyB2x8PDD34ttoU29Zq2fk7SptUmC4qdyy4jwc7",
  "key7": "24nPaNNYojDyTSHWr9XcXmx4aLUtNPTewBQS4DGtmJQhRBkh18FH1sEtptshz6fpzVdMzG2TnuiyZWk9tSGhA3B8",
  "key8": "4gCn2bKz9mK9GYinKoLhrGE2pQ8A6RQvHLEQctwds9YFChivA5wNJTyi5DyMT1RNsCkuekkaCnNPrAiRj4VFQCc2",
  "key9": "2qAb61Usczym1f3t1AJwrxTwDV6J23sdhCpPb69VnvnRTeeoMMvFMhhkRDvjJDb7AEqZPS1uBH8cadn6RZWWwQob",
  "key10": "3eHYvJ6BQY8Fmg8qWr3thSZaST2GJLCp8efhmwrxLWDPPcwSa1pQhSUADNAKdBFqDbugbtkvGxgmmGit8Frk7CRH",
  "key11": "5i3N83kLW7u3FoT3kYsYff8nzsqwH5RJMWRe1ENXWLYxJ8x1aAvd7KmfD2TK8xjmCM2JBr8AMV1uFvd4mybvJjBb",
  "key12": "Nd5Z5p5vLicxZrnxpCzBjYrFTWUg8U8r8wPGJBvTY4PQeXJtYKFmKitnGRySwAAdube6wQGro9yidkqHqFEzgXX",
  "key13": "5C3DcLTg2MrLpekuyFwgAEcc9uqWPATqzkyBx2P8YRwCbzYGQDrMMtvyfNt5NddUd3NhtmF3pqJkAWakFF3XBxwT",
  "key14": "473LMBMJ5YfNGUaHuBnzqrXEkceKAeGxAGpBKpRtiJXavcakxCsZ1RjgForLAf3pSbRiX9QF8UMjLDXjdKkui723",
  "key15": "5A2cwjP5EYMySkSJUz2SDfu7ypFAwUfza917UAzpuqHRAKXsbkTSsG5CX4k89agsspyUzezsSYXLJ1nD89jBnxUL",
  "key16": "3Euxw5qKVW4BSt1QDdxtmzFdPFNvuquqZRo1pQxXAg5WRwqDqMxxt4UhKBGhgnY8Ds6Yn3antcRaGwUKe42X2jSw",
  "key17": "ymGp9S2aTKJJDHMhyyoTYH2ZzoUQK92Znf2rh1QG11mveZYJDEGiutPwQPnj63tJfQUa8xJX4Etcp9SjUaCZrYW",
  "key18": "2jsdarwPAF8ztWAsJ7o4aigPLafnh5AqyftyLpYtzMR1BjtQFcFgKg4uZAj5du5qDENsDWyyktUHoWEXqb5fZLhw",
  "key19": "4AfJgN1z1kyqP3QprujhmustJDS49k6my2xp3hcGNJ5g6RFTSa7edBvmKfh2KrAcw44b4smPEENyWXZAYFWgLcEx",
  "key20": "4nPW4LaQUuz1ZUL8pF4D3TVKJYDNRvfAN47ufGPz5qy1UTPua1mLtCc1xkmXPnsH2h94hqRUKPHM6FcXPJZBZDNB",
  "key21": "3hh4vvHBxVMmcZrEoXJ1HprqYVJRLKeamKhwGULhmU4oeiiNr5LrNuygqVNQoa89sZQGq7dsqHvHEzni7XuCcezY",
  "key22": "z1Hx375d3W6n8YL66g9MBSAPZ7PgvaCX27a1vDiFwGExxQafSgg3dFc4eRRsEVJpEM18Uz2sGkyWV1CnRUiAQKz",
  "key23": "2GgESa7reekb4w3SQHQZQ8vwouEcZpe6ZnC1Nb21B8ogLezHgmF3EYap4jduXjJZ2DxwpZV4oS1FL7PcGiBztPhJ",
  "key24": "2XYhxMZcyyJQQLRAKryP6SsAShz1Jfx39MsKA3g55mrCpFd6F1fWKq83U9jnZwg4tvVFUL5vqpz8PpPh6ay69LVH",
  "key25": "7zfFhEJZGbJpUH8EBWxg83ZWN1oXVpajmr8JVVcjm1oeDAaDvXSuGgN3oV92Qc2Etwhvxefr8yEV5Eb2asiF5JR",
  "key26": "61m9CMfMUXeuHjHg2UpUrwsj8UXywFAhjYmnnNuRXC5NambNCpgn5482PJ8bDhcSAvGCubuprvqAJCGvts4cjgR4",
  "key27": "5SrkyffHpjKUMcf6u6g3wSnz5KrbUQjGttX8VV6eFPhX7YS2NsWZkmd1DhaihTeHhyZcthkYt7LatHiL2MFyC9nV",
  "key28": "3eaShgjkn8BhJJraQEuemFfjdDHmKgXgX7PEz6KvAZmwDc25UMDRG56cCTYve4ub1sKbWLc4yXEsa69DcccwgimT",
  "key29": "3zRjr2cDxJshk2YYbCKiruappUii3N4qNxCiupc46kyYbbokQyqc82PdpuUkFbmveeG1bR9Aj7ZeYT7JpJU5D7tY"
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
