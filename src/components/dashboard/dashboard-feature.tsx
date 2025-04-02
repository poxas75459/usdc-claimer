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
    "2J7o1tXC499RiAXVkAJnM9Pze2Sxp3ZWbNvK9wwerfqeMSMx7m2XPTL2QQi8yMVHtNbmkTioY5HtzrZy58fFx6ZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3daQdLaVPvpjqx5JEmmPK8oHHSqThMkSg9crtEUhU5TNpAnkPKg53TpjwzX6F7er9GoULd6sYSozWR2qESFw23Co",
  "key1": "4vnu6NqpnC4KCzda6GDSzxMv68HvGjbX9FUfpyam4k7Hn8rgiHP8YpvW9XBChKjQ1tpyuVMGUs5uWTMpQCzp32us",
  "key2": "3FgcjhkxeyU5kuZxrv9LobzcU2wbYr6KkBwZr2ExztBVN7nEH8SHigzUJzG69aBto6Qy8ynY1WzknksQQrpkBHkw",
  "key3": "3hcQgkuKTeFCKcCagxjLso2p966A1z3oWDKqoZcgMN959BkXbdfJ6mMReGaCq1USyFDirG1zkjjsshbL66Vke99P",
  "key4": "5ARN82GPJYgyGDnjcoJLnhmc59DqYgzPDCwmkUkAHuRfxWxrtsJHVoFeFBTMS9wy1KmzxKbTY38A4KUSE7Qppuvz",
  "key5": "2vbSwEcyrYnFeJNj7MYku5yuvLxdS6Gd38dE7ffBWvf8GPJg9ZpMB6h88P2ZEyWYpkJnDREgkbfcdS8R1HCLDDFF",
  "key6": "qoeoAj2FkM2AJRj7F4yBTs5bnQUMu4GYbALNoy5jELLodoEKKihxQzYkUgn8FoZDZvEVV48GD3Tk5dwPPHZzaUw",
  "key7": "FTqDCmcbeXsAadogewRRckUsMDzJJMq8eHg8jFAk8yvoFjLWnh7bxRteui6BWMoKZpnfFmy1633mqF9aFhBZ56q",
  "key8": "3UHa94RiCwwnhcaQTKK3fMWswXCLiPPFECKLip5xxVKXW398PvJWEPRu4SP5HGN8mE58xi828kxzgmVL3bDdLhej",
  "key9": "4Cz9Wi5c8qNLUMZPDXDKrcMHYhUMCRqjrDJQBYPGkVMYTEqHcu2ReiDRUX1AKQ2oAcVa7D12KdEnd5LWuYCL6BtT",
  "key10": "357UZyNqzEn9C2yMoFumeKnzgmyr7zScLtMBP5a3obj6r9GFpZSu5CD3P193PxVcmfhKLUQsg1qjQV3aYUx1u7j7",
  "key11": "4yWiYJzxC8GThxKBu5T6c5vBrQ4QtbQE3SCsvKRp6W58eUcLrYBuH2Y6Mg8K5u5nyXcAJbmX5roRUsXhepLUoFrY",
  "key12": "5saP8ict2AetyabqsAMG1pvNShyby3YynSe73VxHFjcrb99TZrKxBf4kAkeUNKthgtohvJHXq9Yr1Vmtyw8gNw2m",
  "key13": "2hPawwEY9oCJ4DmLEeLLrJy2cHW6vDJqUg8dCmcoiMjoYw8b9V5KnXyjAnAosnU3wX5jxVfU4Qoj1Gy1RYbHS8RA",
  "key14": "37HGYRTSnRvsTsFTKS4xy5nWGJDCieH2XwLLCujmhp2dMQe3Cemh1qbgYxg7a45ddyfJ6WWXuXxCaqzRrpgfXBXW",
  "key15": "5NjJNpfw3Qn1jqoqAMWFGANXiCtSjuKMJnsMVoE72dmjsxryWpKKZUSqiRYppMPJu8sKESXRPmxyEHdxDRkroCzk",
  "key16": "3esadYtybFuiVkXHiFpTgg4ZYVQ5TxW3MuJjEfXkcaQGQjdCHd58TjmoiNLH4mnuozmP6P9p2PFmWDBaf89u1PRF",
  "key17": "jvLBYinjobuKNCo91qWSpgG8HLq4UQrM6jS21LqD6fPju4RUPUdxk16ynhM9dUXhzDwgyLFN1rU5vstF3UN5mM7",
  "key18": "5PHVyXi5wQrpWhU83SX696D3WTon5FnanfxghUv8tn5GP5ZNMksysmihMqK3HRS2symiWbDjv2GXD6BJZhh4D98F",
  "key19": "26iWPR6T79ejGmbeSqEb2WgWo8kAExjixPygswzuRJc19192RUDQSuRV5TwH8Xry1duyk3QvjBmot8nt2LnwFTKs",
  "key20": "21jR3K1gXw9yCpc6MGHZU2gbjbTTtRAtSS7siue7PTyzGpEmdestbNYEdHUZ6Yb39jfY6TivfaQzxrfEk1utNQL4",
  "key21": "2NgCmSbTiP1dwRRiu5SuDB7NJERTh84xAykj5bDTJyLnpRM9ga1LNxiAzgevJMEiXSaatpnQ5jswG65FEUfRssnA",
  "key22": "4qgB6svnUEZP6qsHPYiThJT2RYpTYsLvXQ9448TbYYH4LWZzByc8XfDcjJtabJgwmRT8bdyDnvDw85ieVZGn8mmi",
  "key23": "3hTsPQwhoBgcZuYdQsSCEWhD993rTcMEvJH3fwhmnj5siFTpNTcjEcJncWdbJbpwSjvCL3aT6cmYsppo9P2QtUP8",
  "key24": "53fk93FicXMrirmvTf6pEzuXSAYqYwyfjtQMEpbUBScFPArf2YGjncUzb3yLakKZqRuhj3yHGx9t9iEHH7YYK7Cf",
  "key25": "38SL1iUgXUxYES4N6n1eYHEmsz3kJ7XrPALmj3frWRwt1p6dn5pZudKtD8TtCwS3Bmr6LgLc6UinYPGdH67JEo6v",
  "key26": "5sB68ZLEWMCFX3R4d13wA62YS39X4jLwkFVu2HvLSwSA3Xfzq3ShgENDb2gMot1rYGKxkT8S94KUL5feQSvcNNhY",
  "key27": "PaJYqX5xM67pcvLGLQZQvSTcTzrXpLBJedVKZ7JW8vbA49ssbqV2bqhSQwB8nJcXUQZy2j94EDz6sdxYEZSxqSS",
  "key28": "5xGykYjqDAJEgcM1aZhMUWUuWa5y6aH6quUY5dyBHMR5iPE14sRwPbycFnAX5KmWxwZAuYKib8Dn3R2Y9723r8R",
  "key29": "26HCiEpqvuCkvoDUBrLxLjMvupncK9YCWGZrosdMzDvhHafTpheLgveZ6vqiHd611nDXb34DYmUtcvUz8r9Wpg4X",
  "key30": "3a63BSxLGbF8u6nPqkU3Qq34UsMZ9HH4HsYNo6qZtmYwpRzn9xbeVcpjL9CS3WrPYAGvPMTCZDzxzbEfcNk58syu"
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
