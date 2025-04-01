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
    "5thPqG2GfDcVVE9t1ivfLb1EQSCGfwjaA14pA52NkmYNaaZCc69Ei1AGH7TDvXoxdxTh272LwWPrX7Bb8JcJD65V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3scY3MNakqQXEJ9xepUc8ZmT5DEWoaWggj8pwFnZN15MQKcL3vXMoRkCEyFFFa1pqyA2csrgrzN8KHhvZjBMct85",
  "key1": "3ThRcS7EF875NPv6X7t3cCCrdJFKkpuUUsJH6NwsF3wjbKexSEJVpakYx8BNbHG7wi46MQJjDce6rUiiLv2MKD7N",
  "key2": "2sT6Cd4mJQf1katVDSZGgfaxkSqJQST4X7en1sqa96hB9MK3bBbcDJEnXToaJGcyfYN2SV3vv9Szyb9LSsDgt6jh",
  "key3": "3LYUQW4817ArZpetwxgu7oTV7wYch4gg8AtgxrN8jEdJ1L2RRTYgPQDaQufvdGM4YAHG85LhC94iAJRT38JBqMpb",
  "key4": "m66HPH1C9xF7LPe7i7AfkZVA3TmTa2mRVq1mg6iBa2jAerroVoWjWBCrprgchCPxddd1Ysk29S2efbdQ7bQ4S3Z",
  "key5": "3f9YtXHp52x39DecdK7QqfhhmKUfRDtUJSg8HWCCrPEf6D4TcrkSmJfGZgvMSV4BZYyGzAFKsPsyJDynp39SZJ4E",
  "key6": "3KycS4rVB3qDASHrwna4qjxTd9U2r1E46cAHUBgYv316xXCSH6eg7hwk8tMcx9ezL9gwFXTbjEiY6b2K2YvW5GNb",
  "key7": "23SQ5n14vE5ChzfvpAnCE28a9bwcTvdCqX4j6QhhS3vw54vd8vFUeDQ3a5my9Xrk1mD9bV3FawVHM1wjRyPtQoeB",
  "key8": "3bUaLvALvWV6pskncNwjs4rHuseYxobomfj7KP8xV8BtwMWoR77rWRkENgc4TaZiTmzRDzdgY3VrBGStXZ6RgeG9",
  "key9": "5ytw28zDACenx9zTnKQeWc7nt64T61YiiTP6F13mgs1wtDMx2NfDbSX1qiJmNUncHax86TDetRmh3gewoCBpFVzm",
  "key10": "3efcwtGXjkq8seu98GimaRf41x82fcp8CgdaJhLnx66ttSb7NbptYTKiNiESkeYtFDnCJXsB3K4WQRyLa252p1tF",
  "key11": "4nDCCsCa3ieivDHexSiPZwQFUqF3pT57Wyb2BkeVCLXRsK4g4ebDo73DWXVSp2b4oq8CxkqHAcFBfbiEKd16TUy4",
  "key12": "3prPkzAxhwzy29qTGxvuc8qUzfyde7zEqofn4pF7JJFfMghwJMKio362ww89skfDmj6uJ13JMiEcVC28vYXtNJpj",
  "key13": "4oDBq2Q1YeQTCuXCr69pgyt12BJYaQBEfqxupEQYELcad2iWmS1ZqVXpFFPxKwPpi2NFA2CyQr5AUD9J62GLFN6",
  "key14": "3CcGrWQi2Fhk5jBQ2eSvKNUVffsvq7T2i87jSNkJ5uMjfTJd3biDPdoQ3KoZ6yu5eLW9rVBz48sajkUC2LpTD9UH",
  "key15": "3SNwmxW6Hx68nTspUcR5Kx7hiYw98iVgUnsUXJ4XkWWsf6YGaEnFJQTYmRDG2wDXKdRbw9b8B95KXLuSNpjAEt4N",
  "key16": "2KBTPapKTbv1dc8DjYbpqZjCzySeXFRUZYedYbRkmZF4q8opVGshcBXV2rvqxz5L7tMgSCejj2Pk2wGyeFmt38dp",
  "key17": "5e83Kxi73RRkFu5x19i5B5xx7Qm8b4V7TMG8xQWZSeWcw1Zv3qRAJHtaVnJFmb7perv66sYFbJxqrEjw3ohuGBy8",
  "key18": "dnAJVKCchKoyV399UewKFrwCcXpxcjJDPCMBbSP6jEhQML23qABiSu1Jpw1AJEDaLFeYwUqWHLoVP9uo6qhYsGQ",
  "key19": "LADrdSrT1N9TqUSbPMSeMEpjFakYQPTQ6GTdVgYVSggReVSSkT6W1jXTNPWz4Pb4CKRJTUy2rjT4MsGcs76YpRS",
  "key20": "44QoTuejLqT5iWJJvEZeyFLX6zqoCVcACksDfHtYAdgWueBEcqf2jZum9c6U6nQEr3RYmodHECK7dKF471fejmM9",
  "key21": "5mxP11C6zSeKEmVvSUQAaayeDU72VDEThWqkhqSBDWcA9Ln2z3RMudiWrpqhooqaqHe8ahLYKwnkgYyfL2ZfQ2ai",
  "key22": "4gYMRGuHEDaqeU4iMx8wwce8ERVnzwf9DXcMQH7ccaFfYNmvNddZXMsZJhGs1vxTvq3BdU9LWr9enVbxQrLDG4nk",
  "key23": "2wqsEScbGk36uu8qKNGj92FBmUTjzUB4LKohX8tFt8rJuuUopxpmWZWofp5gHmXCFCtKnj7X9CUYZCTPDSXZzs4E",
  "key24": "31AQDhnDnyhpJnsbmeAL2gNgwXNMUGjfqVApSkDCZ4Yho6qyKdDd59z6buzYbHcpHZ4YEZBsWitbmjjHUSPghSr8",
  "key25": "3vKX5N2kZVVvzwBnpwv2XqTF6W2XEYmeBm5sjJFTfT2gLxGkUrahf5JtCAhsprUEQCBjpEekn93vVFNFGdgkwUAQ",
  "key26": "4mqb3F8JTyaWgDbLPuDMTNBY7yS4MDGnC1xaV4Ju9qb3Cj1L2zuGNvKm9iwbxRw3hfZjJHLYrTzNmajusP8skBfk",
  "key27": "67MzC4Be2FU23hFKXactDUq9K7xPPChgVYzo4wjhLBBBNqVkwrcB7tE3XFCgtwBzK8NuWGehzNG8mxWGT6re5htE",
  "key28": "5YssWHTaE8tE8PukePxuwZXzvwHQ3uxuwHrNoFWkMrgHKw4JyszhC7L4N83XhjLWqiWF6hBzEUSK3HTPfqvUkfPU",
  "key29": "2BHFnkxYk6wom61BHGpmXUN6iu1CasZySbU96iL5kgoseFWVgwNMcBEcWbawxxQBagMz2JQX5oowRiGzTdtAhcx6",
  "key30": "KywqXP88ukAZL9YeKzCuo8Rit3QwzLybjmtXt57ugvbVqQCjDbTebxgcMPDomLyx4yr1RYCG22UQAMeWJEMjcfj",
  "key31": "2cfivGDTjxQQ4GXQ6rmPn1pYwquWdAbfgccc7pXdSoCtVByvUuchisqRU5ZxDMPQZcpMipXZiBKN55nDFXb2u3PA",
  "key32": "5WacXFvPH7KoqL3FQnPxSBD5Th64G51uNb3aMPMigsJU4yYahQLH9ahqujHYFyy7rgiW5JMN7uJttXp95Dn8hLjP",
  "key33": "3NGShCfVVSCWJUwhFt4a1cDsbCEK2NU9p41g1NqX9FJN4nmZWhAQgj4bf5usTmkVgeYwFMEjLQcUuuD4wRo86Rg4",
  "key34": "eznNSL3Qmu6bFjEb49F9Y24Qrxzq6qU5Ho2BKqPyRmodSKA5xFbA3NwYHVGTmPMpF3g7t9cYQc5HBYUkde3p5v8",
  "key35": "fsmPLk96kTJaYu111K7emUzp5MyXXdbZt844taUaEe2xRhLQtZ5BKeYa4YR2QkAnCBzSc5xXmB1B7mCGyBErs4f",
  "key36": "2T4d99Gc8UqkqEPJNnjRYzALrQN8g2isrDHo73Q2ZrzzLNDYxqkoToyEBSV48GyYFox1xfuPXJC69ZzJds6iqRg1",
  "key37": "nVZfufxzU6vvtPi9SUDKYk8VpRrbaRDbqbqWfPKuokHdkeWi4dzVchswkBd9B7ehApeLGVmumqaTn7NevbmyjbN",
  "key38": "5CPZ7nJCjDbfkPqm3HeFyi2bX6sCWpH5GFFsb7Mku1ZiZYJur4cL8gytC3pGJE22QyUeD5KSUFfBhn31PZKouTJb",
  "key39": "2SmkbwcHAbTkxKWMVnXRv3MzaPzF3oC6nD6hgvvhL1qByGRBYLybdZdxfC19zJcPycSCqfKbq6iqTz2TQiE2WK8b",
  "key40": "4ymY46CVRpQLyqFWtizMU5Q4XgvF7aMGzJVXxkVTKVPVJthYHUkBQcY6wihpSPitgFtU638hWgXidxQuuXVc8gSc",
  "key41": "3hL6Gqk8H5AZNjHFkNggJTCBSRSffca36kFAPRnRkhSZyUbR4hmCwBGVbpjMEcfb2rBARMyxfociMds5dtRLQpiJ",
  "key42": "b8ibYrdKCfFukYpt4zB2MehnE1aVrjknp6mACVWvqobCyS4rWADZxmqmt8FPkCMzkFH3zCEoLchknVuKk2Hu3dN",
  "key43": "128NNaKDnUqseRciUcknPwaRsNCQDcwQmUVDSW8zXhDZGwu1dvT2U89dGh2ZymTiCY1htxuAsDvvr7nuwNqDT6Gy"
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
