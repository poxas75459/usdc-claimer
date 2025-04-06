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
    "4u2WZ2tQsvEoTh7LETgMQJMrVma6cPyLA2QXFa2YXD2s1ATssBLqVbm3UfzjhvRWNtV1428BB5rimxgDTHNYAdai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Prv4nt45565D28U6quxKvaN9EkmpGVLpffWKMajrVhY4xT1bvWUYHTN3pVT3gb3ZP7WFoNr5jiU4NYwQr5RuktY",
  "key1": "H1pMhSzdueq3PPtVezVMgW2r5PoLA9vSwfgQjibpqv8vWBmc4UBrV7UwJMBLte2hCQXJKbRubFXtceASrGrtqGk",
  "key2": "2voh3i8vCCYhe9RrCZEZbDfwNvuBcXy5vz9syWp8euGvjyTiEWgy1QYq8qK9gRquuph1t2hSTCn2rmHwXzdZtcgH",
  "key3": "4ANGvKRnyVaFHimPvWUaZ855JuUbuf3eizj88f1c1DHkkubbCv2SagUjFmeZ663813jKuTLALmMxyvszMUaBu3Rb",
  "key4": "TX4Kwzx6kcU4orb5242mBbLNvoZxUkQV7vcwxFC4LHdFTxsSutsJKMEv4mTdVZccCF7uZDpQH4ydjPmwG3bCuzM",
  "key5": "jbFBgdrCKzzepjbkNL5JHbY8TaGLuQUeXQxNhRjjyAitw89v5Rg8WjjAXPDcTuQ5Xtsrh2QBDT1oc8sNJvyiuwi",
  "key6": "7jSyrbTYBdCGZwpHtpkRavx1261tL8fGNLEtuNE6JZ43Eh1yoEHqDWVZ6ahudysFF8daa4G3MUZvzjQ3e3K7NSQ",
  "key7": "43DNHw5Ckqfkfaw7LfpPzib7hGyuP1VBAJbWNAoNdxTJzVJiEnu5FEkPuKtQkW8BifEsWGbdddZFKvxQCE8fuuFJ",
  "key8": "254663EYncM7F81Bxj8pKQGmZRo6ip3jYznLAwLdrJLBo8Syn2XEvWnW7ZNaspPDvKqoGRBswvDZnVASoiVU9Zod",
  "key9": "4MHSRLxzdA4LdUTyUrvgZzMRuDAMm3X3wxRSqWChHpkeDbQ9rta91p6ZcP45BQExASzN5dMPUK5evg6YDLHKkx12",
  "key10": "5YVGeQjycJXvzcMwzNH7RWLnu2ou9XWAEhiYTBqmebDiDQ7zXExSaRs82fXv7t2GTPGrwRJta3RgdazgVxYomCSE",
  "key11": "4zk6EpoHrQ2BEExxBcJKWynAvwmZB97YJ2XsiHoApRLUTg87n9uakmKWGPeDXjBmykjciw4wGjqe7ydk838k4Fa5",
  "key12": "2mykvqsekZBhDZDNeaBc24kYbD9f8896jdMmKvNsCJ4Ld5cUbQibf35ijG2uzyuqmgNc9Js5orRv2YohyLVBqYo8",
  "key13": "4eWBXrWKq1Y64Hxb8g1uHR1GLjbwiNhxZ9zR5MaHEtrkrswQKrCbLiDvikXPgdDwjc5ZPNw8JjEDkYRtbezF8daP",
  "key14": "4rHCNHgR3kvFZCaCCovckCvhtd1XxMjsocmCjJDEorWnUH8oa7niKjtKjU4kkdizwGHAEAsEj9fMuGfLaikqydCB",
  "key15": "4dSaAdufcKkBRiw2spbj6zgUfyqTSPiUThS3k1YEGL6mtcLUQLaaZWxEpapxXU27qNtwSFupvfk6M6iQKFb4yWBR",
  "key16": "4Ujbpbf1he9HrQK7283ANMSk2qHmKhwNDicyw1gLeuWeS8vqu3AVHZSmiP9Qbbovt1e48aMWskTKbwnSLV1zypci",
  "key17": "4ifWPRa94K56eVmrHstPwFxQuQSVPFQcdpDE3RrK4usQwpVZaV78wbZKx7EzwgZFubUex1EpY58JUKEBpgfPqXhp",
  "key18": "4NAnxGgkLQB1X8AcGuYpL97p2usgLWaGcGrWwaAxyJ4viLAfxZuu8bHGH6GM6P1fEPjj46vbBCbSi9kNjxnUJi6T",
  "key19": "2Pq4S5ZqFxzozrqq1XfEREwtPeKw7y5sDNQRisPax34esT8YYFBLGGZtc1EXfjKewYawyAXsvmZu265YyA9bz3RD",
  "key20": "nw3NVVGqik2MzMajYE42dE3PX6P4wRQCi5YdTQVxNLPaNFyYvyY6sAgprKdVqig8e2BwVD9oLdPExXqiR6t6Zbx",
  "key21": "5VussHaRcnQ8iadRH9AScyHFXry9rgxf13X6yNEcQcHh6rGk8t4kmekNjKj3JVv5LS8mozVAVnjsFaCvsLGGN7nv",
  "key22": "3LgRjwHWAqK2W1ZU78Mm4porWT69HtMRU3LGpjuLiN5hBQubb6Wmt6P5Sjd69qj9j75hwxmQs2NbkuPvgiNHME8E",
  "key23": "28ooA91N8YNYmhXETznG6z83cggiEXxaEUdb5gEp6ffeK1mYXC8Nb7Bm4sCui2huVLA3RDgtLsKG15sgS79eTm1a",
  "key24": "2n1qMcqCQTD1R19R9erZs6RoDtjzwBjEX5nYbcULeR8yTcQxyC6JS4z8KToZ92LSsunfPy23ys6GPbDm8kkE4AkW",
  "key25": "37pFKW441mHzZkgg8rB69UKpJNt9KzT1U5tYdfPqiWPchi6PkPbsybFQRpnvasgfNEJTfoyAXdaG39k3zQpne8zu",
  "key26": "5tdyR71hEESzi7DFDRyCB9gUhxzD2hS78ySsNFKJLMM9UHriYY5Kja4nS4NEgWy6zC37dJHTFeqxwCEGc3Ecjwq8",
  "key27": "X5z5ncoyEdEMayUnEENrfBw19Dy5ZLKHC8wL4iMStWkmrP4EDeNFqXVcW8d8R6TdHeoNZQAoq5CNXNY93wZFDiS",
  "key28": "3q9W1fasapqfr3Y47x7aAGTWy5JnQnukNLfdQS2cDyUbFDS9x5vZ3iAxmx2eSxBk2nDVNeLGhjcr96ZoH9p1gTKf",
  "key29": "yrNfHzq5sDeqGnYUCXWE8rMKk5etBZ7Dc86UhcH3tJWxuJvmWtzMqrX57NkCUJYhG5LwUmuxosKm6LqyZL1EQ7v",
  "key30": "u2WQJMNmbvCKGjnm9dWQTwzfcKVgmprHEtJrVbMw13cZKPMsQeEPemr2JvEmvRE6t29cTtyikKk2vYjGnYifebq",
  "key31": "4TkwrR7cH7imqbZcf7zphofy2ASefWLccSSxfB4rjhdmtmAv5xZWBEXZwV3QCBru7UfHomMdM5t3wxNNJwZGzviN",
  "key32": "46QxJ1eTCi6j683cyQTZTbpigQSZkFijVrDibRT6Hwds3K3SbkrzDqLAuuRabsxWt9AJorQ6cpDP1Ln8DXu4Vx6",
  "key33": "3KUGACno1hbqyz5M8cmRZxJfph2gCk3EKQYGv1mWwq8ft1xvArghuZvEa35hRguJZbYUUbcaqepDF8q37fLqUBbV"
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
