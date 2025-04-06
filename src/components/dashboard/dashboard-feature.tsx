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
    "417fcs4C1ZwZwPrHUd19s8y46msbDyXHFYseu5yTUYWgWDdRADTabxTg6ueiCLt3MBQsAPB46mXNMb2z8vVGrgzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P7tncQMbxHMKoNKaxp8yfuQBxDdcs9CndtNbQEKRshj379gjPz6c7ihCTwLGnGn58s9tKKWkPEM8gNVciQVcjdn",
  "key1": "2aUs69yYAeDkuKp7hEvMTHrqyRyEHJnsjMQEZCykHZbfX992zVJkF7w4r9iAMmcyHQSjpHpPb3tWwD6oN7M3Y5Xf",
  "key2": "Wav846Y1iCd5nhA3M5JQMn3qfakKGD5UMpkvM4H6nShwdD3DR87vkesfenhDWGC29TKCTLK4VspfU4HDDSx1mCX",
  "key3": "2sJRKRNqPb6vANk5t66GUdi2dQcr7BqqAUMxWBLMjZRFBa4pmPAR8RFss4xoM8MKnV2kEMshvDHdNnUgufoKLHg2",
  "key4": "3vA1s7yQK73TR6jdqEb7qd5h4zrvXPzovKeKs8zsm7bQNpC8NXHtFYobCnCm55TsKzxbrCtUSJZAC5VLd6aPmocn",
  "key5": "36b4sjTDS1tVknkEvKDXu9tcgwyWPpdK4mjtnwBZZNjPYGNp734MXFcY9NXWYhAsaErwYPwNaaUGw2p2FHdEUW23",
  "key6": "34rGDg6bgLDcnojQmy3kvTWUsWrdRjsPabHVDAouq7gWbZtxKt5zsREay1JS7ey9DMHe7T2k3nFDHqVDFo7r8PcH",
  "key7": "5WA7HdonBhX4m7gsHx7pVtMRJ4ehL8HcJXgcra1CyktAJcgpTqpVDoiy2N8ornaYC3RAYBRUUcvk49APQC3rikNo",
  "key8": "3cwvFokLDJ7cZJocHB8ZAPYMHhEi8r5ut6x524nd9apQMNrbBtrdgb8vocLdtBQWP2ZVnjvvkRKaMNEKeFTGgFjD",
  "key9": "ivTmkxBzLL1Ai9vLfax7v5xon8zuWDBWjdM1JeJ2XAqqiqbjvJNGR2Ey74Zz6XuNJhxEjhkqoHUGiFbLGrBGuTX",
  "key10": "3Ms5Rqn7SKuLJnTpJyCKwaePRTLuHCqt9Zn2jvGp9X2RU18bbaHJXr6GoYEfqYaBJGrKiSvj9p1rMko694yzLU1j",
  "key11": "5WgErgSuQvPbiqcv8z6wbSnPBkho3SxQaaF3cL7tjupPJBvT98k9MVabqdyJQnNA8S7dTdriLpGj9p6DDZVPhdYs",
  "key12": "2NiDgLm1b7d8o4ubUJWHmEaJxJkMEbZjA5ouzDMcGuSJCLXPhF1vGJDz7Agyxqxs6SGyPcrQuX2YZY3BTetqasND",
  "key13": "2B3B4RDRWJtVwE4HWLxbaXYFitz3d7gsHzZf1qvDgHqNDkuGbwfKKYB1Qyh9hJrB488ytV5VgQJhN1TYiEQ9FhsG",
  "key14": "5KdJzrMe8i1TxQo3U7k1MktVAxGnRo1gejs8Nmhg3o9rwyHTCCkqN3UFKrbb55yDfFDGEb5uDCMQFbcQGa5B5dcM",
  "key15": "3nm4pEHnY2ufbp6FYHWU69SqP47nn7M1FWqQV9bhHuUDennUHkPQFwEFaSswiDovfMseH3FeRGKighk5mvbE7qLo",
  "key16": "3JHC7fiXhwsc3R8gkRG38UzzaBisq6oGvkGJuFPcbW9iyA1RanJkHgKkDN3xNyBNbeUsLVvxnVyeidghTqKmwog1",
  "key17": "5d3LpyABfvva8ivfrznWPHADKbH25EJB6TSd3mHP7yXxDNrPbN1UTMLCBQAAWesJ6uQ6EcnfTZy5atWP91xJTj8J",
  "key18": "4wsTgTMJGEmLDberTAa5a85CLDfFDfmmoiUhPGLHtRnq5YnrQoUrZTXgoLHv4TxgCa9QSsdMPzXkJZaBTVNEm1BB",
  "key19": "6bUkyjSLN5u7moQmnwVFU9XaVRUiUaoV6fevQ7on5Po8dFbD7ftQFni5nWJpznob2Gwe3DC2i5qEdocV2dBmxek",
  "key20": "31YbWfAciSm9NU44sHqrRJTF11zGkAZfKXPQwQT3XFneEaFDvVUuvkCjTurquYR75yXwrZ9khBYHPcD5ZVdLyFZH",
  "key21": "2YvmArzfC12Bc6UksXgC7hUbDDu5QZemYZAqGsPyVBX6VpBM11zBPNaKvr9Bxj9Vgq8EHBcsCrRia7LQ1DTRwueW",
  "key22": "2SPDQwPNYDqFm5LnomaPFx3p9s1fgjZkwLK134xjeMUbPdgvf62g4WAeCe11FoDUCrZpYceEs3B9vTLBEdin98nF",
  "key23": "3nvJLw2E3byB8rjSXnnshW54wPx6bZpG7tQ6hxLz2aZkcDoGWyNEoqPrwxtTsYKvcQwEs4Gm5jyJ1Qd4Z7pQ5KLh",
  "key24": "EdZxudFDryUDMyuvnbxNAJcds3CwsrJXt9DNdHPerNy9s4Dy5s78fW3wUV7UiFQJM1FSuJouV2v9ShtxaMTVetr",
  "key25": "3rvK6X4XE84VMUUY5Fx6mdarcUdLdN3gUTHAXrPtQxVhenE33nWpS2NEpDX5xaQCWnnMrgRp7UhUfeNoju64psyc",
  "key26": "5Mb4MBc4Sg77yjGM2P7d8CHjkS4xA4qi28LYe2Ze5QnoVtBdLcaHhcjNctXowPwnDTcZL8TT2v51fBprEA4WwHmn",
  "key27": "63FFAWkRGr23KfVw1SviKtD83PWKo9g9gPBPj6GHjC43s2uHSfFgqwq5V17yJMX81jbRT1H7wfKQWR1QDfkW3TYF",
  "key28": "5qewcTWDqAdC3ti3hUzsGe4JvnEPxrWdsRyCXBmP8S8p5ApYv9BurZK78iN5XhEV5ziF166UBGeMXodvXx4SJD5L"
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
