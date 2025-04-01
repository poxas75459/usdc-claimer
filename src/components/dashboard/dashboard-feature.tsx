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
    "3wPdKdtGcMRrifgHYRrVB1WmWfJdzHU19cxaM2eUvyTN5qihRL7VYpL3mqy91V8Jnydfs2j9txL4WfkDCmzzDX45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FA7FWGPtfRfcTKJpQSAuNbNSbxLdV5x2ZRfZkzMza22CRyc6YbSuBcQcDdyNe2efaEe3ToBbkagpF3SwWuTLGU1",
  "key1": "2LiiNEnXVNazUK48UsBeiDqbp4NFMC9wPCiyC5QbitDG1jNGFQkBBD3vyVAhvY1LyCpKWoy48WwLQknfMLDAC6AL",
  "key2": "2XzhYXyS4bxjbhCjHYhuj5PBjDodD1ahq8Huco2xG6BWK6hXpENgWY4cVTLSDooiy77XKvDHWjiadbpHKemY96G5",
  "key3": "62cNWjE8LVgDLoEaZNuGaEnyGwfNtKdybUAUTsYsdBGar5PqUU5MfjKMvBydWKU2LiPDftTLn1oQG4i3TXW8nS93",
  "key4": "255Lf82Vndzu2dHbvyaiYBqu3PFJtjFeFMuBADzmc6cbj5t1ywCRRE62vak2ATQmm8zDALsRSVcGpBe2epG54DCk",
  "key5": "a4hVJtxcMh8nxDySkA9Q7f1tCCzcM8xRuT4QprqXRJvKB8wyG48oM5xjDRxNyAA2Lh3HDqrFS7Twjrub5q7N1kJ",
  "key6": "4pCwsrXtXqPEvtgpA4F3NbYyq4p6LtirK7o4XvatDPXq4bVo9FKiFERscAhSMx6Rz66VLtfhryK6qt6ZWRMNCW66",
  "key7": "5m84cpQqtfSw8EiWTr2zmiw6iUFVWCzrsna99qCvdNauV2aoLAi54VYtCj9zMnpiRP9sz93G8HWN4N1uJ4YKZz1x",
  "key8": "2LnurMZ5hPznEerEQNbN8NQGSfnbi9BngrFudh3E91JvEjVD8R6h8dvPKrGVotbJPjNHBjHmnrC3d1ux5ZjeHXPq",
  "key9": "2AgrDsKrTGaWJh8rSdEMK4EXkJJ4AHH84ujd1nBE9837UkWEpUQ2UN7ciLUXemqiw4agvt6UiCC5f4z3K8EeYszx",
  "key10": "4oR9W5YnLi79rBsyyi9skZLwz1vkBJPXSorTcuZJVSicc78WKKU69pPQFhRfZ7kusqmhVEsgu7Eh27wCCKLzueQu",
  "key11": "a98uKrPmMzwDfvU9PqsAFJ6ReYo1mvTVvqTammAmgNCjWE6XsYwbnFF2ty6phLABy27agE9172FHTT6ELc6qyZH",
  "key12": "32weVGCctPxpRaVe194EmDLNtVKPNSEQpeHzPEHAvytPTbuHuTv4GBGiUSvaFCcMZMr8a55x5M7pzEyDjLL5XjU8",
  "key13": "41jEpeVK8oGfJzDZtvo6MWbCPBi4xNRzHBPtYaCLH3FVWaK2iBRqWv6zxX2rqvzZ87Crn6gnBhAbaGhMYd1sHwBH",
  "key14": "5ofNQmkbbCWc7hDsWVKWbDoETMjf66mSWvijEh3YAUCDx1qfDhnicZpiBmTW3k5jREZMcN9sLRiULUW9JBnih9Bw",
  "key15": "59zn5MVdw1xYL6UbbSwhdKznAB2Lw366m3GnjV8qhfdBb5RP8r8MpFPw3ceuEcWuVW6BZLNRXDEhjFdVXDGxeukt",
  "key16": "4jbhJ4YbN5jDP6MiyxcsKewXecrRnhN3pt1Cy7VKqhrhXQ4GNPRCNLuyhjYs6LULmpWsY3GvGt1uKsGBfdhVybGe",
  "key17": "FpLfKYrkqdPbr33ZuJGTbracKrXCPJ38ZKt8dRuQ1BSqqq3G9VF9Agd3J63UwQi14g1kgptJW2YkoYod6X2TNqZ",
  "key18": "2TDoQBpcW78Ty89Y3zfY4ZbzRXmacTFkJsWTbgCvftpsvh6e6Eddwd36Aya36fwbupJ8quMhpDSVzb7evQPRFMEK",
  "key19": "2sYjQBTM5rhiUpQQjCC83YeLtkpC3kM8SbwPu1XheQ11yzXeC8b1SnLkmHzYmC5UoE8Mcnvt2AySHwcdofpwjmiu",
  "key20": "3K2QDKeU7jd4rPeGj4H66w3rxtwb6TuCCsKBJ3HwKi5cphMUfhVaAaC2L8i2BMam8Ytq1UgVY55jE8k6TbvmqFD3",
  "key21": "LbGAPQdHajTWFQ8qPgexi1vKdCnmUYZYfwkjmM6JGdddkz1KRWACsoB5MKXDaofCJfkQRmLo1jSPJenL9GudJkt",
  "key22": "4sbA15cFC5tqooFpcigDRXuLayFBUeLJigtB9uhymg8tdHcYxmj4Vy4ZQnYUoJSmR7K93atdDod1eoPyMpKpSYox",
  "key23": "42CXSQpno1JMDEq1BGJNriZpjibh89RrerpzZwQCCCNAKVZsNWWMzgLo1mYYEJFFxTkkS7aDnZWCT6WxfsyfJM1n",
  "key24": "2w4PSfH9SUio54c1rgi9fz5Wa4bGYRgoqNwmW6DW6JKX3736LdD2Yic9Rg6cGsWMBxDyGWQ7LeV2Gi8uK1juGvwN",
  "key25": "3abUTW64U85xoLyGDG5EawFrZaNUtjyfCCVxkM3D2rt34pY4RB8Vbf9KUkFxwM6mNujGFEYSMPGqLVy6Jqy2TiZ4",
  "key26": "5U2efEb3wG6RXVJfcvh5H5Y5KksapgGKqRcxERMY8aKJVax7pqZuMAHBrNa64ofA3cQwxTpfNp33DAp5PvJkwwjA",
  "key27": "Hd2xKpXEjhKfAbiwiFGY5h7GTxZZ8ow5Qwju9aGJWRAWw7pm3A5V7XqS5Bg8doEsQBieipXxBVytMirG8WDcwLd",
  "key28": "2CtWomUwnfFqvcsEb9tqTgsBfXWNASDpabRdWAVcBqwDhp3faTcmRK339wZJ4xpMbemvpmGYKGHmgC1jkac8KSeb",
  "key29": "4qJ1LLknABF6788gX7baKnHPyDR5yA3ogNkX7UFZ1pKQev2d2FbvMxg6AVictNSgAiRvPDrQijU4x97SB5gZ1MM7",
  "key30": "4tMDnLkG6pNigStWKfwBFB3kB7Jn3oEHyjoFKEsMmYwdgjaaERy1ZduNxuJESNPwNqvx6drwC8kvqUymKAq8n3NA",
  "key31": "2zp6c7ESgQMaZF22Y2KJKrDHm1p94gnhT3WYS7HD1dPzwFQ7LKRSBFbwwrWaoS6ViSRNj13Qf3LT8wBtCvU6oHZ7",
  "key32": "5V8DkxP5NjUPuoW19FXTFeTtRnRttC8WiDW9JQePhDRxdej5SSCH3ohcX5c186MaHvCGC4ZEHvg1igvKUd9bLeqN"
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
