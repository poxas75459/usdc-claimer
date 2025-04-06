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
    "3NuXjwiKzPkW8GMvd9n2sbs5DeVi95RjE8EGwUUjJU9zb4o7m56rYxxmMfWG3ncNEXfNUgsZCSgurYks4YMJj5Jh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ytVvLmFJEgpaiGnTkRBoAA6a5QPPCsMZKhimwJ47xaD1JBqLchk6vfhZ8bawZQQGmPSB4fbTuSFovbtAANCwBMT",
  "key1": "52Tj2e8vkuHBpDzu9zM1zBqKRynb6wyKoTsCCNmptwoo2KgD2XPNeWsPi65u6ZUXKcTk2LjmDckyiwjcf9JJSWhd",
  "key2": "3ERjp6MBJFfKdBKDRMTTCdaynviBk8pbgowxRuzj8RnzBmDX5FNfyk7FKLWSz6Ur69x2FV4NDvzaw9n3QpAYEaji",
  "key3": "5bc423PjdKCkEPeaehYbBJHbL2RUdAPJ8FXGvNNtgGAUAAKoM2KS5ngMhuPNcU6RUFseeVg8SFt1Mv51KBbpXUxS",
  "key4": "3VKJeVrGzrhHeGskThPuXU2iqeBSRkJGFEmAxRsqLGVmydJMBRi85egaGwJpHKYMNCXzsCNJ2ZfVQ78BTi3AT2yi",
  "key5": "5hKNayJevc8bLkzew1MKPDy6mgX9ioMqRyDAo5uy19VbLeVgE2PgCizg3SKi7pvvbfreXoftH4hvNPqsaPNcZEeY",
  "key6": "4BvdWnAXViYMJgRpj9ER5YE4Jr45Q3NLGeEDYco83QQje8T9ZuNBM5js7s8q9aqzFehsr1LDSW1mnNSHfKPUAeU2",
  "key7": "47Zy1MEF7VWWbyzze5ZV4sEaPXsDvY124vDq5FtFAPKJ7GpvatiSq28pgXqVUSErw9yqR9u8ki7v1ugBtwDKnrE8",
  "key8": "4T9XJ7o8gsG4AfBnzSNGyFySuymQMcG4oVJZ1FJo3zX1wPa6VsdQGfMYUJrop7u9de5n9MJWQQSiWp1JTvAbUT9A",
  "key9": "41ZVPy5uUneS5knsNK2zGuAkXHnw8v12TQzsmHE9dAUFT3RPB79hJAj1ynKRe4rnLQ7BStLJFTxPKJ2waBYr2cZG",
  "key10": "3FsqZKG2U9CAcsRV1DAiug5qn8HhAvrRksdo8ekdDTcyrYAuM3D91kea166qB7QVkBiMwqvDeUv4Eump8gxxWEAu",
  "key11": "Jm22Ku7nNSsB5sEkLQSCTPozbeSU9YbgstRLoLD5AXGJW2spKqdxPnG5iHVa4GWZxPr9EByKEoYMxFYZ4rcC6xF",
  "key12": "5XtCKSq5H6tfzmrNviDYmZjm1zYs4dBB5RNwZTYXRS7MU5oLHwBYX84HH7H3TYpVrZqsT5yuEAzxtgJLQNsuQKQM",
  "key13": "3wC1KVkeKyEpxAm4jx1KT5HmWXMGPA159Sr6tnt1hEpT2iQEy48RS35L9fG2bxCodxU77eHGvPoBfqeYwLsZDBvC",
  "key14": "4cNxPQkAq2b8oi9xgaFs3dpjPPuLhezquGYfVEWDgc4W5vQmj2XdMZWyLbEjovSPVJJKXHprqoppCokCJdZjJvMi",
  "key15": "5cLEq4byXVmNXHE144qkRiht1oh8u72Qfoxt3rnpbTPdRf5AJWsXQU8NDybeJjBdBQBtvQB5S8qhmRauYGsqbJq",
  "key16": "5e4dzRztxTR7x2aD1w1BoTvtq9gq5EJb3fX5Ku6mV41zrxVfJm6cQREXTQezbhH5o3VHUeqTzCZFFJA649gQWLnA",
  "key17": "upXLBmGdCuWfFf2Bvvsw5oLh5QYeHBGMopS5gBT7HBdPN4ANdBq5LfVBCcDswsRpKczUacfzp4Yr3gkVC4JagtE",
  "key18": "3DNACEE5soZSKDRqtfed8BfgHixuxNrE4Drs2SY4LDcZmzafxEGaMqmkLfPtsRHzAKbXXH2CnLia8dcNozZRer6s",
  "key19": "2khsU6ocgqMKPLDkePkg2B2Xy7fHR5JiVSLQtJr4Z7YvCHSbAjSGb89UEVjWoKDQoHpCiEdX7cja2YHSRVcnEY3m",
  "key20": "3uuzbYyhPujFg2YsK4UpbNbACrbqhAiFnAthDKpGiDVN4ipa6WQEbtX1SXX2usXsGbDBD4vxZiCLD7s5jjdMw6Ar",
  "key21": "46jdecuSsFrts27sTaLHna3rLQ1e66RQu2NHrJyD6zq6mSuyJY5KWkmUq6qRW1rnVgyNuXQqB4V7YCsQuBW6hNr6",
  "key22": "4F5hh265gHbMWp4mrhiwbf6rBk3qJtTh21uahEKqoCxeH7jostCdbYjfUDp9Ls3wer5KjdxkPcV1iix6nbVA53XA",
  "key23": "3E5hUhZf95WWfkznmjj2c6qkLavtg4bzy55UBACAqWCusF1NtWnZndSMRB8vxjYX3t2Q4z2LxCBUzg4JLcXXCmfb",
  "key24": "3X5qE4C5Z21UXjR8hrfVy7HZrtVy6VhoEaC1hRXQ4U6C7gcsoHox1ZxqAbyypGqQS4A1WHrgx7i2EDkmDe89LFrw",
  "key25": "3fZc1BvHdogjbNtoYsUQhH1HDtnRpqpHTexK4hNJf4pbAVzUbn5buXcBuKe4wFVuso7yNHYo4ovuHtwBBpXijX7y",
  "key26": "4WinGixaJMFqZEsFGp3VaydoURLsbsZHz2L2nARcD2a5eRsfp4j4bueQVz7u99gmexT7gd6nXKnQwNYhkT6MhEX1",
  "key27": "3dST6hfU3pLmMsbUioBWCuNBsEuEqfZgEkkxu9bVgCrNdDLu2mBuxJNdhVUddqMqyQ7kuWAosLrnBSvhmHa1sUmE",
  "key28": "4kpFNMoDQCFLdTR22pcmBrrjgd9pwk2peKmjo9diYU2ikrSnwg98Kvn1s5W5TSkht6EJzvitKDS85MrxUwQwbXG2",
  "key29": "gNyjoEEb7rosAhW1vbt1UdFHGvZZqvT6rK9ExF7wunh9foMcbUxv1C3QoUHRB86e7FryxhYxdHycYjtPvbEjCMT",
  "key30": "34YJkGfnY5en3JDxB2kgmaSEb2GtMeG5TfgG7f86bf2UehvvsBbMSavYnfobjwXADNEUux1fSWKP773Zy1maUfpt",
  "key31": "apjh8dhH8enK7bwNgX3w575UBPGE2HtR8AwBhQRPohJd2NYi8JYaoCDqWvvKYDQCZMxGPDomdaTBPh8KLTFWP8z",
  "key32": "3cnDqjxxazE6u2Ve37zXrRLkJ2ns9U2NgnWaikYLp6giMWPGk1mrwiZyNvwCCHRhWXdoEutjjzSSvd6fPABT3CgM",
  "key33": "Vw5gu8vwFbhMJdJ3pBTkWALkpF9qG8A6LyuV4vCJ4LNmYoxaHjeec2TrMLuSWt9v7NF2A7fpWsjBkq4E52i6fWY",
  "key34": "62eWQe9fX3UB6QxwMJdeFkYCzFbLLNgdZVNonsvtw4m6MmFQKaXiqoE2mvV5fpTAmXQ1pWDGEd17Jr4yTk6Q11pX",
  "key35": "35xTSpLV3ai57c3MkonajGAfAMuZT8eDZVwYbZrsCGQqFXK9bYHmrs2yX3SYGAX8tnrNboS8d49vWR2g5AcuYL8g",
  "key36": "2sDD8AyenuhAGgbdm1zEqxqLAA7RoQcefgHpWPcjmMnPwARji2WTfLdG8whyv8QWoBDaHzttoqVBzPHHvRpnCYb5",
  "key37": "5nrkBfqsUH8RQSaV26r3XfZ4ZJkd8jMmopUKLDv4ucqtUDznhFNKYNdKZsCVvBUnntbTQ1hyh5ApEZVGG23tCShn",
  "key38": "2MA16EQFU9VPsQyS9ew5NvPgzC6xS8kb8GFcktAhFEVL85PL73gKfqhjV459jkcoNBkzz6Y1bDiDAfP1P4SoWt18",
  "key39": "3bcTpiugEnJMeaHM5aKE8R35FLh5pBRGMDEB6aaHHj1sEXpnbrLNp3vrG9Lh89WabpEduQMLxvnuEWrRcoJsiAQv",
  "key40": "3uZn5vZHRjvQZg3aDxVNxjiSNtVYTRRaP9dKKcTYRJVjrX4RnkqvgyLHsTRai3uFsZfHsyBzYuYtd3LS1q7vKabz",
  "key41": "2SduedKMTfZnBXLyDx8Aq126uGuMqcQYmDRf4VFPTJKrgMZKzWwfEN7sJfHwpwL1pZt1FMnE5esSFLvbRZ9RGRit",
  "key42": "KsTTXAuvnWgYDYqUVh2VF3Aw9esEWZ9y2din8zXadHhuMRyNBw2mAngbGzTTk6ZZ5UrvSQ1ZGCjUvK1jPswDLfo",
  "key43": "2bZrVbBJwikDmRuF1zcenVqZ5G92UJf7k8wmPXN7n7CjSMbzPmCpkSas8WrSmez58JwXfp6gfDs4eXohcrZwGfUd",
  "key44": "4iAZJS4WM1MUenvL3YhWDABj7xCRTpC53m7tejffujaoa8yqhPzFKutLugpB6JwicHUsPMggC7qwcFCXko24vVwF",
  "key45": "3f24XQ5xQjAucyDdFrbViUUXKzdZMzuD6QckjhqLyDeqqdP6xdBvC1i47P1oSi3THXfqDb9chAWdmFU6D8w3mgRt",
  "key46": "fu1b2KFYYNPXu5b41ZVGA92cuMiNZy7Fop8xftukyGr3JquyXHTgRYLMtwYwoAoGgWmy2abUXHHC7azL8G98T9t",
  "key47": "3ye9Xpa2pC8Po39FJeLFzdF3PJhuHYCxA6cSXB1tzd74FRMoMjJE8dCrABwm82f3Mq2fSwQu9DyBxUhjwd4nt689",
  "key48": "4fPdZW9cnaTVecYFy8VYsV9eagWWPu3cvjG9tfaHjqv3ezLkPsYiEFAFznYq2NfUoRdefQ3c1pvtetZSFvnMCCgZ",
  "key49": "nHoRbSRr33zVF1qrmHf2Xw34DHwBwusXMMCaahuK4eBxUUFCTD8aRvYBgt2kvxR6t6Gcb79iNKHzEGJ7Gr3xzck"
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
