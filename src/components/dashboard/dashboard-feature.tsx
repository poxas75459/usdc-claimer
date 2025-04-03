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
    "NsQrik6BwPoJDpaaxvpEDKPhfspBsSnEAufyMzhkeJ6HphEwnQj9mXb4YZUFRDr8ckpgMTmCvF9WXy3Tf6GN8Rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qYRUy31fLQ5ZGrcpxpQAJhSRixce7ERXG3ra5jjGuEzC9B4ygwHK6kvtuXjkdqYhN3Buo6fcF7vY3bdvkR9AQp5",
  "key1": "kyRLpd9t7XaqCi6EJJq9Fox4ERyGnBibeH78N6RKCCU1Q1rxfCXcqV1RzZWD9uqWtBzAexLiMCtjko2BEc3Eb2S",
  "key2": "aWUJhNnPEdAixpb964WnFoSJAa1dwU8c3fEAqho8fAUUJextSpuTVXHF8NDVS5kAQCzWs1poPv9LnrqMyeCJVgr",
  "key3": "6hbdLMkYiN14ziyGu1KqUSEasqvUyG4HQGu7CzYjYQSsWL1reW9B5P21oARDRLcGpgcGCeQVeBC3wkUqXb2rmfH",
  "key4": "3jbn3joodKfbTwJCGn6AVpV7fsKKLwBjddEt3nsgDGzrWZS4AVBgPCMbXvtbaKbhNBPAXNTAvhYrVEggaR8xzkHa",
  "key5": "wRamAdGURAKCG4y7nC8kx8dCADZqx1DwCxMsMYFTKrcyCVYoK9vWa73Br6p3Jk4gb9sSCCd4CtwM6CpJWq3w8wj",
  "key6": "2vcZd5nCcK2jnmujx3mQVBwAD6Hiyx7vpvobsZkmGfN1uNrRaJrP1BwQu1qMyUSN9Tf6XjRX3nFoJ6zf1DK5QgFd",
  "key7": "5MUL4sfzkC2Yv5C2kmnyf4X6gWEmvRf23VifZZBzdo5HXK7oB86NrUc1t93ZzqZy6gZtRd6nnX9p9pdNx3sKF3Ar",
  "key8": "61CFewSNCSyk8KSADQ5ceeRxiMhTcnrgFdnfh8mXXY2FksuqBBHU2Jwg3UiHrACtU6y9GRXAFL1e91XWjUmS11d8",
  "key9": "59rwan1kXC58FkG3svfS4wt4ZSJxobcYCeGQPiQBR53j2EWTgWg5u4b7kEEBZjWnKZbAHtCyAnUxAEZ66Y8Jq8ZD",
  "key10": "ZqXZHs2MDjfddRj8qBYEmERPJYF6dUenREhkzz8LbJRSpnTWsNJoaSuVkgVrFJJZFRcHDxVJS7BaLe8ky1xGNAJ",
  "key11": "b7ZQ7qepJCKuQ48ZTSEfV8NDQf7zPbB7ZAHWU8egTku9iBXqcRog7bAMyTkAhbk2jEdq8PKJDy9g1U33aMphc8c",
  "key12": "2hbFQRvgi6d7jfJuNrtYj28ijvomtnHwkKvudSs48fkXmdXAAfbYzWnc9k3yoRDV79YWvZKcnnnk9suQ52Bhhuxi",
  "key13": "22HeohAPveRMc4trkuk2k58V66ZSyAvfk2GackVAJZXB5CevpSM2h4BTg2Ezkzk8SZYe54EyvDcXMrDjsXiz5YNB",
  "key14": "2TYFWd9Dc9WMbfW6qx7ohKn2jJX583xP2CjLnTqmih1od6iJDHPvYyDc7bKL9agV6iuvWrhJjvqCZmMHghAxzUCg",
  "key15": "iLza5jCcLE3Apk1PkSMXbudA1sPn9yTxG3iCaq6qaWnZaNKnxiAWyWi6ZoPuADSXV5hnanX3nJVUhj2qG42GeEE",
  "key16": "R66TMCGeHF6ZgC3UXXp5CHasHybXzvRtqGR5zvvVrvSWQe3fPR47qo4tBAxdHcdnkawqnPRCRR2yJuAgYzgruvQ",
  "key17": "4EdXQFJMW8sdbGEgrv1XooABZmsVe5NPyCmKiCDXxVfgsZtZaLxMzVvqvafNNzBrtvU2pUHmySAMg1BxfD9fHMD8",
  "key18": "3XNv6t33WoGq4YwFk4LV4GxtfFC3Xf4GvzZeRSyrHYxWtvFgMepd3HH1LxfmnWV4X3Z2U5rHvUWUM9BJZ1abQYrn",
  "key19": "3LVnVRUeui1KoizbVMk9qigciGATTdevDfiv5SzpP3app7q7aKLDPGSkTdPxz7j3VSN4BSFaAaQj2vUnVwm27dff",
  "key20": "4EFnFX5fGzMUzfWXCZDef74u3TYcu7374pAbCTFm2Whmbbk41nZHgmAEGPCMBztPijS1eTeKbVxW89fGykWrESW6",
  "key21": "2FwCDFYbggZ2aHSTTfviMQubRrpKmjMtc7QwvsUaLY2ZEcWTyMb9v2KVaCdkKVuQDeoUBBhJBdY7Z5MBCmD9qfNL",
  "key22": "5b14dEH3DrZ14uUQ5jvWGcgHc2nJiwNqQtWidxb4FqEyLe6927KigU4he1NaaH6UG3Gn5tvhKMRC7eBP2qBGq1iw",
  "key23": "2ZdLuMYUTcBjreHAFN3D3fwEUZ6foHGcJ2tyQLpEFKJ4qYHsfh4XUQz7vfeUAgSHBCBbrcyG1rksXFwNHtkpxFaD",
  "key24": "4wvBDgVevxeNP9pFk76KgzgfA9UWBMu5LpvmZmp3KYxpG3BihidzG2q5awKaSWMeGrFEddbouPGU9kCA5UH1kja5",
  "key25": "38sjNGX3EaeFjJZPbJmjz7hu42ZbJJEKm2eUg3eeqvjx86RrQpiw8iDanuAvTuQsrRvJRgLA7zSvMyVGoXTMU5Lg",
  "key26": "5QZdyutQxrwtTiZjh5Pb38MzJ3Xed21scBsvAqd3JXZCkSKkY6UbQjmQCPNWg3Z666vceRtUXdEF4FPH1hFDX4xp",
  "key27": "2DyckoAFaXuY4k11Aq1jhw9PFdwSmawkyETX5ADo349FruLZXtW85b5ahAAEqWKXDpEKoyUjKDHcj2Be4fZKAfEj",
  "key28": "61sY495cCzoXzVVLZ5BBVodgqQEyvTZXMzCKPqEjXQ5KrpsMD88BRA66QJ7cTE5cxMekStBQLkZGKo8vaYpgq186",
  "key29": "2DTdFLFSBnqk2qqHCoNizQ98YqzTAvdsQtZJQ8YWKrupUt7E5nnnLSC1ESJtph9RWdgqHSyPy25tMe7jwNZcF9Jz",
  "key30": "3iu2UhLuiKa3UW2RXi658BGjN8yEXheipw3UkUzAhoYgTF8sVr1r2vgXA4kjb2pZn2cniUy5mGhSHYzrNz6wJEZN",
  "key31": "3mRRyhs6j3yCG8pBrUQ2NYVqDDMjyTxc111e8mgG3LNuDYiwrFNkzYDUgzjzzKfHd8LrSrG7D41KKCYuLsSZUxTh"
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
