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
    "2WUAnrbhxhxNNA3VKYisMXhjyXzKLSnNP8gjvwQQ9AVsLHiMet9MqHrnjHFMnKqyPk3G6xcadiKx2REyx7L781Ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66sr92MHAyRsrXPmBBMJSVPt8yNaMKP68igPZJkWtNsfmgJ8iRscEV3sQ7hZjFaFg4ZKHd6FNem5aHUq7mQ3qWCF",
  "key1": "48mBuNdpCWibMQg9hiM3BXfhPN3N5ynmpPTCW4xHBYZWLjgx5BPKx5FYBon38EuevopzMU7fTc7NUPX6JbZgb92",
  "key2": "3CKPC7gFBzeSJytcDsoS6uukQkkzNcqNJRweNH8fPbBAaq43qg5FrqZPnjT4D4ZEQcUdSfTQEcWXEFFQCZdB93f4",
  "key3": "2uQ4UXb1fo4Yoh4TkrvZqCCdiU17ENTiiJHtJuVqfxhqrVYXaccja2oGREySECMVyyUPULjhaHN2PwtnXnNnbYbG",
  "key4": "3Tx7kusRURscTS6MFCX4VZeWE9xSuMv1Xt2Ei1N45htvJ6PRg1NhjS8evtgy3M5gyguKoHsDfBZSzAjsXsnmDhxG",
  "key5": "2155HSnMBvxbYTojwpQ4nfzKEZwgK4wc67F7kBURCiTcCJNm7zkYAJ3EuQnWstUMPDh1WhdeGwuEqeL6USfGyyGh",
  "key6": "GqzcKqUQL4L5qVHDQvu2hq3dYYQ1VHmqLunADGYNwXwP45zcVxsWYkSQzYX5L1P5LDDDZ9Rp2zctgpwNiePEZxM",
  "key7": "2z2WcGaBja9No3D337KQCJJTSTsPVUmn8Ubpn5VhiP99nWA2qfxN13PBNpDpc5NyvXCAgjwV2tkAgsUD3j4aMSRu",
  "key8": "38cfTGhJXjhpgAYtcb3egN8MLNwdV679K9nMtnpwkZnMFmbAPYrvYaLJ49vMPKkT4U8ji7pMQwgDW9bXwY32dECz",
  "key9": "42z7ayJnSpfyDbQnP9vTCAQ7Keh7WDrUcCCq8dmpVSDzyb5Q9ph4uUSNxk5dM1q6ua7BwvAyL9NQr9f4rxsv6zZj",
  "key10": "48RG9ECwPjUasipoLs3YheTmGGcEJJyWpjXnyJ8J93Bb78DFk21hf31s9J5Lo5QL3hSGvj87RoMU3a8iZ21K48UY",
  "key11": "5QyHcVjFFWzJyUuucdgzPUDr1xzxrnNVWA2Cnh9G5NR3pvm4pd1GDZnR8ckjbkCCE8uhiNxgW6zGWZhwuaYr4Eid",
  "key12": "24qR7b7pa4RK84V6qSyx7tkpYMdcJkL8azjyDEkVe6YqeoVddvU4v7ksHVsLdrM6fkZPMAgxiBdKHSX6Lt6HEcjF",
  "key13": "nrAD2jeSBkFVkMU8c3U9BNEsSkga8mtq2Rtrukj8pzzHEbxPwitrqE8KVBKkhdncqmB6rVUHdu6TTZRxFe4CL9Z",
  "key14": "4d95bWqsJPPKPUEE1sD4USrusSYFeNTHiRCNTCSqoMbHJySuRivbtSEiEHGsyNEwe2UNP1vJJpZWQZ7LNjLiyzNn",
  "key15": "29oLUn8XV3PZtZMgLVgfXWs1GsePac2S4UL5VKERktmn62jkTfKUHx2kLSmkLavDUAnYbh4EL1d1dzYbYWGudgdy",
  "key16": "Uf3X12ATdk68yHgVpmFJR9X5WaZJBWn6JmCes5nWr4yk3v46qVMFMhEBW1VXAAjECfiaKLQ5dn5FCXpkyWXmQo6",
  "key17": "2GWKejMK1KvMjadvm6kVUNsXc7mvTzAw822XC6nYetKbYVp5A2HZ9GCmwSCEjoXBm6aZSS3tNg4vvLgAKYyMZq6b",
  "key18": "3zw6Ki7v7qL9Vv1Ce4XG1tpPhCXgnKCB6gBnR4bcvkCALiz1zEPkMBnSL3jdqwNCLcTYLJezP87GhaNck5TnBkzk",
  "key19": "5KzmTQ8VxXoh1Rg3EA6vyu22fPYemWfD92QskEAcT6E5CujeNFBuPxre8dYHZ1jeKhQJHBYsuHLs11jzWFpiWZot",
  "key20": "24EZeEertPV7xdTheqJmd4WcANUXZDrCFjXTGfE8BZPV4ir4uteoSRLccG5GXiNzyecf3E5WpS75qwVmTwCN3DXF",
  "key21": "SkZ4ZKS4jCRBmM2WkqJaQApJ142qThj73L8SZLNQv8Eq4gY45JHNxiDVeH3vmHUZXCGA87W3ephsjJ4d5Q9EUKy",
  "key22": "45VYrGZCsE41SJk2DZEBiktWSf12PRnKWTtCv8UZH5QDg1YuJj37bQ7U86zgYsfHqKq6SbAdHdVQW7ixf6wRuSYW",
  "key23": "2sDfFTxQUW41fq1N45bKqF1rnRrtG1Sfo281GuYSxjoDjfq1gXWRpBxi4tFKQq4aEkRrxnN2vwBWbnR6H4ajbKqM",
  "key24": "4UzWdEG3sR52smUC6gWZHT7tatKfrNUfLvMUQQuFYCWij4KAE587XpLHsxefAtymexHrcH5MaLHXugrvmbyH6pNN"
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
