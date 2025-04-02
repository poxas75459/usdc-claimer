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
    "4Yxae8CV1jC3cE1DeicQHU7MmNutymnuuF8kYAd6va1WFmQpzhH9YYCWACmff4TP6YEgD3SeCRj87Z6EqF4BeR1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQwcRtaDqnHFhLpnKXaANTf3aF4SQKhLUekVsJ6WqAJ3K4srrx38CBY1CWpgPkmwMkwA3B1UqfBnKTkGVd1Gff8",
  "key1": "53tMzgEKTXFk6Deh62sh43yAiLNLgkhox7ZJR2KyGCu7e2hn5x69wzqJ4fhdu52wg83gG7Wk7S86TQ6azkDZtRC2",
  "key2": "2zmvqJs7sweyNverwJjkm8kpYp5pKeZA5VJwoR5otG7P4mNEw3UsGMkZ61aVpmJuAu4UFjmDV2rT1eRM3yDeatic",
  "key3": "3voTcHvzJk4bTNdxv6BUxUDUZu92AhLCYmYtifRtogDPxvA7KWw16qScuciDrcD5cvmXAXuKZQPn4HYoP4MBvi6y",
  "key4": "vmFBNkvWrFGmivYEWvMfnxjJcQm9GWXWcRbvjhNMfwRitfrr4AqhjdnMFe4i8aVU4QpNZW8ULcK8SVY9pBN4t19",
  "key5": "dKxmkDdjpcFcy72p2Bk1szsmFJUaYbjvZpHLPsQCbt4jY22Zi9TtV8UMgPPEakUazgEgtk1QVQnVdvpgr2UHa1n",
  "key6": "kYBqkK12N5Hbp9VZxsWGx3LMKzqmBEkrehN3dfXyqZLwN1pbLGAnaZNwG1CoNwee5jUvUxSXCvYFqvs9q4SjQ9x",
  "key7": "5EPLEmzU4g3rwe2nkN1ERKqoEJrfzoNfGHeWuCkMdCna72mUVHZWdUBKmvXgdVhYd96T2GNySGhVSQzPfj2HZypK",
  "key8": "2N7zPd9rikbUHZb8xfE9BvatM39vYn9NASdPJuAPSgoHEeP5YNvqa2aKTTAia5X8oav2dtEV5C319u6i3GZRyvSe",
  "key9": "5h5eGdJPmx3FPHgT1oKAJV61SY1Ri8J9pUmjKsHvnDKoEN8JHrBqv72xskeBBjsTmTUoWSaf52FB9DjpqFuFbBHH",
  "key10": "5j2k4Xy5GbQaFnGfSt5RgNFqvm2bXB3bw8t5M3ZgEoCAP3PCkUF5QWeu5suah9cnjhAvLxtHAwfSAytiGdQHMtYQ",
  "key11": "31wn7yxSFPeSB5vCiu8MAjPXGhxS335QaoDu9nc7B5zD2b9KaC5UUz8YZFBxLCkwKVYF6ppNTTm2UuTHGMb5VutP",
  "key12": "3Bne7kzFM5kAMjtV1NyDAXrH8AgihuyWwM4rzryyMRBKwoNsgZVKAc5Dp5Qfh4gKs9kDRV8QRpyLrnCH1tztNQN5",
  "key13": "3sux55vrpLePrdpB9sgGKBvVdNcZKsWbja4HYMz5NeyoFhEbRc22oXasWsUPea8NWqzQjLsRXNBZghDrjSTjdESr",
  "key14": "2597yJorFjAfDRanECQooyAWQqqakVqxYz6p6NMTuSDuG1DAxQtNEvTfPQbh9tjPmFb9v6KSCzs4Ek9sPN1obYgU",
  "key15": "2sAhWUasKe7ygMzg4ucYKbExvs8YpX3MV4NhfG28PTxnK9go3AdjbNwu8TwNKCuSXqVuhXmJtBJS1eLUy6sk1nVZ",
  "key16": "4r6C85P9KX9t3kTDuWyjLnc91KdAkMzY5nqyFUAYf1kNGn2N9vhAn6Bp6fMgCGDaFnj1hcwPC4kezF2vWeXseeDa",
  "key17": "48o3zD8kSZbo9PCLgJSJn3tSAUbQe79b2tDCCLaWpaH9pXVy4pcKCZjbSjtuCLWyG1sCRmbMbRLGrSAya9DwVM65",
  "key18": "4SdMRJvfQ22ma4tsnA2YVYUYaA3NYe7Lezd8gJffz5vYv9SgHf4M94XCF8R3BjkQM4KaVZ33DQgn4HfWUmTyvdut",
  "key19": "2mofvEiS1YqKUYVpLLUQkiikGThJ3Z44n9ZdxHstJ7VZt7qGAqmYcyceHhn2kzF5mFDnJVtLnktc4M3BgQjdi21C",
  "key20": "5BPPjxTXkd2muAQmcDDBYnMyaMwYSEboBcCQvTqMu75VbDRDcQSKDi7rvu3QSuKGxtqmW5bknJVehHSQoLc38m6L",
  "key21": "3q8tCo3zwHa9JxHxN4eqBnn2sQjGHFVgJXRQcPwm1PTyzWYreAG5sJUJq6a45QWqoLb16eC7LABzUqWEiPiH2nYV",
  "key22": "5wZt93WfqTinKwDxT3NDLDsmK7WhDB1rEhNW2k8MfXFsGR54pQmRaaxZWWN2vKrAZrt7xTNRTvSuPD81V2zDeHN4",
  "key23": "z72npJeP2YVvMf7xk2BGgGbfppPVEKcV6dmQxGE6RWQ5RZA2Qd72sZJxWTNhRLC3ANAnSqeyDtgBaac3eRNCkcB",
  "key24": "8FUNNkPsx56qAkt7bZ5CjMjoPGkcfrn3M8ma11R5mMQB75iLixLB7AXwFDbfRXtX28NHHJAuuDeyj5oV9rd7mrs",
  "key25": "4tiS2jHaGrkpuer5FXNsEzqtg6jJsMsqZNZtxJH5cgkmMTAEYGJz2aPrBGFeXxsCMh7XaDT7uX3Ete9D39Yrnawu",
  "key26": "4JHAEHHdLhXoFCje3odi2ewJpZBvu6wazompfRTHDLVaU1vqNdZd4QM1pA5m5mYQtekhLg95ixkVdr7PX8QyUY3i",
  "key27": "j9Bf4nTHHvWx9GWcSSAqgooWXxMrZwfJonMea2VSG4ygRdvPNMFvGigda94vTGTKstpTv9TRmDKgAhye5vxsKjH",
  "key28": "jze1ceJMiuYtw8Ni6Yk4tL6CqDimsu76i9k2ZoCSCXhHMshqgssxJB4FpocDWWuCrqsB9zYEPcx4TTo8sDuLvqs",
  "key29": "5JwWRBniYZp7MtzVfYjcg5G6DcwV9HmCPmdU6spkqtLAXHvrKrhEP3RdLLxVqMicZycYygGEpVw2X82JS1nkWWfj",
  "key30": "3hdeCfupc4SVrtcxMAzs1W5aCTviCNCGazD7z65w7z5VukpxkXLkULXaqGpLdZ2tcUgXSfJMW8UmhWdCaUhtUKY4"
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
