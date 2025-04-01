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
    "4FERC4fsXYhKpZbh2cKcA5yqFuTC2FevydzLBUy16y4YrNLkVny91bKttWF5YCHqoTEYJqzRzWWzyQAsgyVADahp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41CNrRN4QCYQyvKxVoGTsu5qmvWrwfEUxFNJ9uJmpHtwK2T5iYpKoSAe24hBV8gFx8gur8Trfx2zA9T2RiJpeHH6",
  "key1": "5BeVxHjiMmK17BykMzj6d1AEL8Htqn6y4xNoPzQmWDi1Y5R12oVtCLEEMpET9Rap9oD4EDr5GLJ5TsRV11DxtcPf",
  "key2": "3Rgq1WxeQvrtb4RVd1qwddED4N5b2or3xBxL5e5VXxWKUaJpcesLBj8ihezsvtRTEZngbspBTbrC7suMpaoFdwJJ",
  "key3": "zCerAgtt97BngZxcaYNSZfdu6MxzXFJVMJ6TZwPUjXvAmpbQZW2GEtTwctCzDfRo6q4Qm3bV7E1Yti8LQZuAT7t",
  "key4": "4VStYrwfBWBBCvur351LDVpCkdw9Em7q1qy7aJ7eJsiB5VgpUGzGsaPKE8D7bt9WGyEob72ZxTj3Zeyzve58Kk4L",
  "key5": "2WjaCZLz2C5T4u2Chg9TZLvggx7B2M8zUtdRqCLM2Ms8F1ig1jrkADn9UMdF2dS1NjB6S1YMHbYRw3c3oXU46a2b",
  "key6": "ZuWGYEb4QAMPmDw91jKawUhcUv9pSUW9194XobCkaybZb5MdqnhHYU3w5C9rUh9Eor5k5qBPRQccEWpECkHuxMq",
  "key7": "3C6avKHFEM3wY4TA3yie4qN5Di36bL3KFxPgDCKAkCfoFQTDdzpSTBb4GJesfWS3doRP2gAB6ENqUxEZDZmvT9tm",
  "key8": "5BCZ5N4ULKoAtnfN3ux2T4GRAmkj7f2jR5xxJzBPt7uyEB37PyBeydf7Gmbo8J1r17tcYfgWxzn5XrjL3rEuFbBS",
  "key9": "55Yt8qiuDRNJPu5w4NNrVL7diXnEu5yF7aNwg2X5YEJPk4sDyFrqeY9biDPpEdxdwbe8yVL3TRQC4gHWJViq6Cph",
  "key10": "5LsShwv8d8nVugPdMtWpsAsdtxT35FYoLJdDARWYubgbv9c7G2HDYqWArbGCywsUJqgCqMfFAjc49Lnia3utknA1",
  "key11": "641ufUvaqT5JnQQrA2anh6Rhzt91aJJJ9MDusVLgy3ZX3FgRYBtfi2iE92xfsCrpkBW3zpZxMKv8Qv13j8uZY7sC",
  "key12": "CsZHhr3BtvW6m5uo76Nm1o3xixNnAGvv1UCxv3YGAzDrzYMSDcGry7S5ue81ys1FYRiyW9yUbFbBnWKCzDGjUb1",
  "key13": "4wssSjDGV4Q5xkT89ktaJDhfwuMysk3hKzxipwqt3hkKyGJvVSX5kZavLgn68kCTQHLukCpeqc4o2GkdbHixQi3G",
  "key14": "3pAUS46Zegf2dHjcxszd7rH27n4848uhyfEv8PYXqsEJJpEGg8m7c32FR717qRR8xpnNxcEaqL5TPk78MPKZD9Gv",
  "key15": "2J3Avic7ZAKKoznRreZwHK9UdUfrAQXEpc1RAzKAHoNLdp8NDBL86E8a956swM38ZC7g96oYyDijgxH698tR2n4t",
  "key16": "ou1GBEWpXkBP6Ei2z5dXKFMqyxaM4xjaLx5fREuYDo2hEbBAivzbKEqzYbeihPnwiPCdb4hMe5qmoJJa7YJSXuG",
  "key17": "KWSg5u1GDA5UQGHhV7eLYKmrZHrgr4y2y4Npo9QujwwZQDSZnWab9xwevZxLDfYsoX6BytD7Jfs4xpxxUWq6YEG",
  "key18": "5EJueaextLXGmJhPhCRc9AcAdECvP4TQbMGPpu4x6KFieWjEv8X9BJb8s88JSnLt5LFZur5M3pdN8FFu6VUdao2g",
  "key19": "5E2TBFrwV2tvEK4DTT18fYtT4XQX8BAWjxBGubwYcbrgXQMBYG3MXWm1P8jq8zsnKSDgoBLASnfEeaUDfkpbLxhF",
  "key20": "4Gr7PFxRsqRc5cHwr4Vjs2XTCc2xJGPazz7M6YnnMzRwQqDxFk1wqPdKgkh2sv5qiQ8KvdDgJttbzHFJqyrNMTpj",
  "key21": "5oX72XTqx8efhSSHuQFRgkFAgJTD5yMHhggJC9uRqEQa2BrSRQCPua7ZNha7FPHxEfSBt7j1KsB7kicwMv99u8fY",
  "key22": "act53QmRyZYrZN5T1ryWYx6BzWeFKZjSSTUW7FkZZMHxtrK2FWup9oZx1DNKd5ZZgNE6XCjWkP2Vh6Z1A6tD8Nj",
  "key23": "3gMefxAhSJayKuN1bCGNtHfMk3MoFRb2uVtB9ieBCrDo7tj2YVadytRzCJhd9Xubi9VetZW7DhvoPdL7hTP2quTA",
  "key24": "25JhnfFixSTAtshD1TwY1CZNaa9DEYbBwtGZ9LQuh1DBLmNBwT2UYh8yrEiDHYXcgApghus2MQjjmHCY1g82Q2vN",
  "key25": "2t6YtU3WuJ4vmuzyCmwsGsSmH3KGw68cqHS2oiyjL8gwfmRMLwLc3gypYm7pXKJ1m4FQxBgznw8ZugZXzBmf2eek",
  "key26": "6WRWQAjqCA8V3NGdgjUXEJ5Atw2r3bU14mdE2Jd6GCHUfLe4DqyWYe9nzaHBvnv4oDrKeGCcQZ8q257bDRH8cFU",
  "key27": "2rqiuBV1jBfNGScGCUDPJK34GiTTeGRxDCPY43NHWqCTTn16RfVYhnCxjvJThmHvWLSPpXyejeZLyEJdu6eHkPze",
  "key28": "4wQnWWVwqBGuEuSWk6tEZBDmsLP1rNLMcBTYAQJ8rqBiPRXqurQwyzwaw4xnYn5cjBLWGUo5hQq5e2tAD8n7aDEc",
  "key29": "acekGTFNEyfWAee2BaXCtexuUhP31Hg1cfjWXLZQkmcqxv7jY5ffqRaJq9gmbXn618X9ZdJGeyoiUJ1oxoQjqap",
  "key30": "62GrkxZhhcaATXL1EP42huJM8DCkq5GZkLeusNDKTbgrZMBC9bGy95LcG5nz2VG8B22rWcxUEtkSkh9SZ3zpqPdr",
  "key31": "5z7rPThjyyvteRTQsUiTMNKrWNB5vrXySJRexUuqKh71ZhgvLda3xmM1b5HGc8xYaPhx62KGu9iFKCrUrgyekBa4"
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
