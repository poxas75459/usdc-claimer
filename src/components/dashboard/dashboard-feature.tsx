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
    "5Ef1XpH2fudGeEyEPJ5zkR3Btu7ve6TRHiS3L2q9X3b7dc6H6uMrrxghjx1YcAHuG4C7vFJJeXqPNYwzsyy2mBiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j2xfrKsnyVgjB7RMvQ7GRD13KF3QzdBSLM3DZANNEqReDe3A39ZpVmFTH8MgmLCFKTmtgxEWqT8KHkoJQjDHh4k",
  "key1": "3KXb18vQ8xvE6TWoXTCarbEPytUGuCtBJd7oNqSnuCvGZrYsXQjeKTB9RvKcJmtcTCdjg32xcMjLuC874hmvjTVX",
  "key2": "f14qjHTa4enEP4Tkj3WCKv9jpYu5USCk3on3p6U9VArBHQsaDckHRnhvZWNeywZZHxN8wnGADgFoqv7MWNNkYna",
  "key3": "5eEmmZgHeyqkuQLQkmBVji3pEi4Wnk7UMLGb9pTX3wr4VoXRCik3FqkrBi6EGGfui4NMiaTVevhf8ZwNQyh9EDLs",
  "key4": "44UPimsgbUoEPA27kKKs483uS1ePxve6XeCXHzd34a8CdiTnun79Vbe5dNwDg2AhsQU9hRXKR4LPoA1Vu7STBoMx",
  "key5": "4zq7zSspLRSXQWRixJ5aeBNLPBPGtkqwpJVzwFLq4tbfEev3maUmAswmhQaTZVYvvVKw9zRo9ijNg8ixYbPzNkxy",
  "key6": "K8uQYdKzsPpXjYdvCrzsqdsyhTePeGHGJbBRzTTpmMm3ieTs4Rm3obGgCZFSQK4CgAEGXpwnSYhSFDntmre7Lh4",
  "key7": "3SVe1wR2k5NttQsuTAMN13TpoeAAHLVQnDTEfRdB4sWRt7uCpeFkUxHsnVwecoFz3fWrLTNpA2iZFMXLPWv3BDQr",
  "key8": "2opznKN9Fb8nt7newco7L5bsgJmQj6aZFKscje89zc1fqyujjJTBajAe6dYnFSng9CtyCx3Y4RJ47phsBDbnnjCP",
  "key9": "3mrzh3sBK6ujDAJLZT58MfyUBvdtxvq4RByjNNA5ryUqbvfZPQZvVSL1crwFc4VASbJSJ1osEr6EBUj5QfHZRYpD",
  "key10": "qkfFLm5ePBQ9wP6DKCxoTi2342mmpVwXrtaU96novCvbRzKKDqVBg5rR4ixGQ5aCjQLwiD1v4TspCr8VGL87eZK",
  "key11": "3xrp3JmJNtEodpfpQuaCAqmCnCvEPf1cMKmfN6BYRtUjHUjgAPBRRzZWRV4E6hbVA7Kk5pJz8Mo1sjgwsGtevEdo",
  "key12": "4WfXcd9WYru636qHCU9T1oHMu8qR8Dx7HoSkDvGSqEbqYQyV5MX31P443T81WiFrHoQJwU6tNu2GoVidPrqXYGMo",
  "key13": "5SXX1sF2iKeQJqKBoeAyQXVqtRZ7kcBovWgLGnaQKQSgdynCZBuQ1fgHmKKcjVmxFw6MKFzbCk3BfVXoHud9KCtJ",
  "key14": "4jyE8onC7eh84uihvPgDzABoraHG5CFgTeJuDUt2W85bKsHN7SzkvVr3DwUeLgvYx4MG9kG4jRKwiv748iEzNp5b",
  "key15": "3Go13KzKL5LqS6UpXPM3QnhFkTE9Mv1zRwdh6F65V7MdsqDhRTpKgtb4vMPiAritVatqHjuiNnPDc2aZdHiyq4K4",
  "key16": "6735qGrvozqgChDowFxaGDMuqM4Jj1XZLKxvBqrJvQHtc5R7TSS4YsmKnyjAyRN557KUj5wJFssCtXVMP2bvRHzq",
  "key17": "2AvcBvGj2PaTxt3hnMH5JehQHVdD9LV6Jz9Ya2VHD6CEB1n74Hp13GepwjZAJSmRcZNWqVMHeWfRLELtv1rLbL7D",
  "key18": "4WBTZxsPkqW3VLbWNRqZnBFYkcrndnpq7KaVZJmVy4qk29CjA3kHDp2GtGkJCeaNzVAihetrQeFfgvXRq9pd6jni",
  "key19": "53m22cSweGJZ8fFqLX7YVerh3rg48G7aG5Qnnvx6WuvzBKPA86v7jAs1XXUVjViLdjs3exfCHrzZZJfRwfyo8r1s",
  "key20": "33gH2eQ7bz9tGzjFjR1pM4dVyrG56tYpyHmc9fEQUgxXMAPYXr7QLGWE7AmftCXc6J4bJLV3v2bnzurZSFCEA8Vi",
  "key21": "5ww1mb84aeYyYbypCBPBUUwaeGUJXhz9BHm5qoXLdRLPqyKaC8ZfCXv4bBct75k7cE6D8LMeif1tqFCEEfyd5Pfd",
  "key22": "4NXVRvwmYg5GU6H32Hmre8ADQmgLBLb7YeraxEe9q8BiLUcaLAcipvVgvVMGJTcBKdQ9J9ziorgeriZfpNR2ka1",
  "key23": "3tVrzztrfMHYPtynFiza6XK9DdX5yEsF4xGFUFnw1ps75S8HyMifj73o2ib5ypALVQqe9bhmM1d5RBLugPZYe7QN",
  "key24": "5dFEYYpJHw9iTALRTSwLPN2Y6q8XdPUchTFfufrTrGW38HiCBBNzRy5657jcd3grYKetCKgjyyh8r9RhU7sGh4Hp",
  "key25": "3bWuZaFTq9jm5p7cDK5TzcFAECkRx5M6ExJXD7Vv6yGNk45MAsYiaY3em1CbKASRua251aGc5vQaA7jRrfPqDuEk",
  "key26": "4xVQA3Rz7qbhjcLPqhw9JehAHpRqThGiyKYFvd9saHyiS5LunBBAaNnoMTQEgW2CwNcVJjq6h2FzsH9ioVpfwESF",
  "key27": "4GFkYiykEpCWsYtQRK4PpMrcgf8UdapgYeo2Va557BEkxcAbWjCc4YFRR7a1CMG7x44oKAJ5ze9AxaqAtNthJhDA",
  "key28": "2zW1yRhA2ycMic4LcWxVGNXDNxb1hFWECtHyNshgQeeNTg9HQDir92icV499TjiiCPkmJo7F9nS6Vu5nDusp5aLw"
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
