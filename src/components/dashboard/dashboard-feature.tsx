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
    "3VwKFFAUzovTUJasaANRQxyScXQxU3vz1zEHQsKnSduVZXoSXXWZ3S2Da9yJc1bcRRERcWqJSphvJcZnkrZqFQnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EfiFX3nn8FpHnMxcMcnrpuqw5xHbPA6kwP7XLaYajUdbeiZkEdfibw4ThKCKczwXueKsfHFpYgEnT4MaCv8gtpV",
  "key1": "2YFUNmi3dj3rrWgEPiv1MQTNhRfNVuJ7Tkn2edzccqZv83sa7p19wT2EYBRde92JoDnSLdtNjoYEH5WnESuhu2ed",
  "key2": "5i1hEkx2gCEh2haVgVC8V3kEd7E6g98ugwkGx84D3YpZDNkC9ctztr6yHaYYJD8nDRB4N9naw1Mrb8MzWWshirmi",
  "key3": "ZJWrm9nhyNZhek7XSVJxXGVQr2j4yadHcLza44ujgTcRxuuzK7J5iUHEa2ixtvfqtj41xs2aSxyGJcy2MhEGDCy",
  "key4": "2k6heJujsxTxqE6wcYE5RMPjAd9XBpSem2FmMCTbe8Db99qKTXzBdAaBoevz5WNz8iWN3ZEzAPscQc4TFNsemRa9",
  "key5": "LrmsP6cJFThx8S86rtm6vAYVzw39k18Tatv7z554NQtyXRF5kGmBtjvSCWfDhfr8ojiY7k7LXPmZq5GRauDkgdF",
  "key6": "2XYbR4GCP1DuFffCGW2WKgwYM4Pmgq28ZqdNZufFWc7Wi4BAwGjFkkpCeibR4XqYsEP2HquXQ3pLEDT1qhT9zkEZ",
  "key7": "2X1spBM5xWFsLD6vXMoFupDTNr2sowkcitYaVXxPRxfhdU6tTZvt2G9rQh9dKYsjHMM8gqxsZH8tcqhLEPw7JDBU",
  "key8": "4fj6pL1nbkUnkpx1gXusCnmhJKPkK2zRXEubM7PPajfXvyp9jBtapSPKYzsSUD9nmaTmimwb9FmS9ej9hpPMEYRP",
  "key9": "4Kn42qQaX5pqGJf13yncpcYjNYs4sBoYfEjUiNtsLdRinsSmtgLydxk8bsfxf2wAuptTmYsv2syvgNEGktMG1jrz",
  "key10": "ACdxr2VaAXhLxLtqtk7JzR61pH1s1CEmd2HDa5SfJBXb6X3r9VRF5zBPpbwEYXrVv7vC4uxFWqdfcDTr6EhAeo9",
  "key11": "3aipAT3dsq8AxmB1fEZT4XLQBRhjJL6RXcR9hXeKrvfX386qQ7z6KzjaXWrGHMi15ELhTQvKf1CnFLqT2mFj6opx",
  "key12": "4F4mteGMaK1gPdLWCys5NPL1QAFi7tma7zGvJm7nzKhEEyqYmpR8xNzmVYt82qE7FjyDhtvadfVgmeSng1ubaHd",
  "key13": "48FrnJn4YtfJbfiKaoT4u8kD5zgS3CxTZVzheKcDrvQkp4D73atLUBFaVszpLSQfgWMHEUdC8nG1ssS8AHSrGnrv",
  "key14": "36qhJhaQnfm1pc3midAesHEDUYM5YsYnAGod1kKE5CQAy456rWX1JFKk85o9g5Td14rszVKbV1FpDNZGMX2j8Br8",
  "key15": "2XQfts5LuBvqBZGLAZBECDAQa7RkPu6j1j4WqRHsDUntZAHeMwC6BysjZQEwm5qtvk1FQ7pqmf4iYC1KN6ArvQ9R",
  "key16": "5wTNCovLGw2mm3QkhdbyfkfrdJPA5jUHitAWiHYh52txRVeiRntPGJKb2mk5sngrADHMxZi729xsHBVKpEBzJVpe",
  "key17": "63mZcdidDW3EWnrMDMk66dNQmSupBZtfJogDZrqnE6Xw5v4jvLrw4dCJUdFE3V3uoqqTbENR5mRn4P4JKbPGSDof",
  "key18": "5yC3NNccyibz6yRiBVZJAyknfAXBaq1ucCz4D9HBf9pU5Ciz48bDSEXw7kuRzWU2im8nMsdwezrKuKsgPicJSGRF",
  "key19": "YnYdu5jU7CzPRGPC9RhybpZf13W8UiiGMFPhje8J6QPkgnahQPBwu1nA1prgegQ9ue4DZqz6veYEfCSKsH5WZEB",
  "key20": "NhKauqZHng9vxo3iZtBFuQiEbgqkF3NwzHo1n75FL3CDuBekxHf8i4dADHbCExN1vBRR9QiT1R5tWG1dL5CATSv",
  "key21": "2kAcDE925to9iLvjUAbdwQqZkxXyM2neD1kDfGytSeQcXohh5rJqeCm6mpzo5VPwtRh2QKHxJGrtF8iaTEX1ubyx",
  "key22": "4W6bS4LhWscxVRo2bjFEpkgxNxJGniamWNcaXq37nVDVJH7FD5dHVPu3z3WhA7SdCMT9RwsHok5G3DY5P9ewerzn",
  "key23": "2d4Jqn4CnGgLUzTaC8e63GC2kGDLvUrNj3CuuDsaEtn7n5ZE9nDddrh4wtb8YeCY26E5HUXLQDDckDfhnz12y9M4",
  "key24": "3k7TFjS6F4cJzGfgvALoq7un78qfDcrwW9EqufgBjRxMM7YrWoMziJJCnudjXacxEdaMBmJtirShE1twT4X84Hri",
  "key25": "2v2FWjsnEjxs98MTVyUByCQmnFqGm4Em6tsqjtu8iWPndVDkjVJRfWGGpj32xWLBCqQEEetDFtHPq1BYtV6tRhgn",
  "key26": "3K7gi2cCYKMwFsA45u44vVnNY43Z8HK6FZGeUSfkDppVUgURDEjmFhANU28nhQ2Qmyok4RqKWiH8i87Ft12o1baD",
  "key27": "3NtfkhYjsRhLBarr6WkPQDqpao5qXHGBKKebHpsZRi7Mw9nXVh7vz6kM5kqbfX7UuJVUZqvixzmwvG2pJfrQDkDy",
  "key28": "3TLHTPWCNDmLbsvHZtmBUwqEQf1NE4xBgmnW1pdM4hX6rKsgWFFCzW3HsPYCLVhTaUf55x8vCsRaLACJti4wbDEv",
  "key29": "2FyM8keu6hU31ZuVzK6usgnpgFpwMG8APo83MBPH57XVW4QaUQzFW534uXHYArSt7uvbNt9JFzaWVPH2KLgKV5Dy"
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
