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
    "5MDU3P5bQM63XBmvEJvRbuZFS4dxGqMNSVeP5mWPhmJq3bkEK1Dsq2unu19gL5kc2Y9Aft4TXX45kdaWjZbNg5QF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jpwi7dTbXVpjgVmfWfvwvVdQuYQhDzd4hWsipr8nawaeRWngbxhWFyww2NnfwRbRLQQbqZKGiHz2Gk2tWujH6tS",
  "key1": "4LkRqWULCj7enUUei8Z2dh3g42tXVNDm6Mdz77sgmBCv2tWRTXqhGcgAPLdt84M65nQyobhWUwPA5gpbxSYzMWso",
  "key2": "5o7Nwqz3wFZ21btxr4eACMLbtwVctEj3DeevurfgzoPAknAMiKJY88cm43DhNUmKCWRKtEBUqWhCtNDMwUQ5jyQ",
  "key3": "3JcSFRU4vNfEpXpMCQa5o5tCeiJLFeGwzrpAJ4Ub57Yr4TqZyuSKjP51v8z3GeGhKV5oW1sitn6RoPSGzocT9LEF",
  "key4": "4j7b5amaCr3SVETTfSnr7sg6gmq6zQfJJNakoibQgCQYvHrFR6ZLSFAcoQH1gEBzfzkjh5WzQoTE4KicvSrWe4PW",
  "key5": "4uhoR8MFNRgzJ316Q6XkvJT5yZEDQBq8ZvwAx6nRwPQbPgXtnJeD8C1F25t3TQmqegACPuWfxfboyLhpKEzHEWtZ",
  "key6": "3aNLf9ZR6zuoZ56jjdzMPPpy8n4yFyi3pdsLZFBAxXbh7EHJkjBjxnfLK1sKKb179ec6haYXZnQrMPV4xYCiA4Vw",
  "key7": "RKfyEiV9qmZzhRTAT1vHcrx2zi5cwW2jbtE1wvsCDh7zu3trW8T1TdvxJg3GN1ZL4QRqnWdFw8om5HwJRqCvUzh",
  "key8": "4nfnSTtU3UpRSmyiBhmgh5sBGxNpjngDHx8WFPWqcy4vNok3aPoVqh6TAVykPi5yZLXdeXazEW32jgtzNynbCR9N",
  "key9": "3fjVMmJW565EkCQ3UDkVyg1Y3wtSXhphZcyrCTdjwU1Dfm2ZU62545RFnrKbkq99nZcR4spEX2BJ8fDRH9VDHVEA",
  "key10": "28WGeqH9T4Y7FZenhFLn36NTJVELvb4fnMHsWcAVV1ofeyopgpqJnrvGzyKs3hnLtLN97MdismHNDFRn6QdpZAUp",
  "key11": "4vzcXNm7Pyh2oDgg4K1rsLjknvwzXMrpL1NeE9KBVxLAZvtMZjNDVsEepSEzSop28so9krmFAstNjZG4TEPBaduY",
  "key12": "44oNhdjCjnFbQEiM29srHa33r3qLhnw9QprrwDbV2DRayLarpJjbi8vCpMXnGrSR7PBSCEAkJQoLGzJsgMQ2eoov",
  "key13": "2Zrhj82wY6hc52zUohvX2jdCHbWvv7HRAGwj6aoWWmds5UFAVNFPynrahhrhnsLS5Picr7DF4brHMYyjUPK2cxXk",
  "key14": "374tS8tJmGC1Qz5zn3CxgvJ7yrupjAo96ZaHA9iuY35UuzJDF6Th9HqDnmb83wXm7nexNuPKSqLG2EYBYQkKoheG",
  "key15": "5mDMNQRuihLry3UvUTYDxYib3V2zx6kbuMqZrnBpZNkfQSe6K6xbVtzZa5nhZFGruCSv3pnjkcBHtNPEaMAmARV7",
  "key16": "2invp7LUggtTUpfm116n6t9vEuKZXGhSUKDFviCu8xLcUfmLBz8upwMwHMGcydSsLEYmsDoX6J41NWWHb7BpCi3E",
  "key17": "5YRaPjb7HQN1QcGTDmGqMwz1uMEWvQXaPKpw3SzbLcsgdEEFE3xKLXfvPDGywm7yVtY4mQx8rBHTEKSrJhQRy32w",
  "key18": "4ksKKwoiM4vNaCr4Nr5ZVLvkwvC9skqCZbmPtKdap1GPyADF2rgAu21e4TNM8FL18y8ov3zQCd4CSYpcnQpopKjn",
  "key19": "5DJMwAJdsggYZcVn1bFCc3pDZSWf2n2EtRKRyQoSYoXA9L6KJAsZwAmXByF7J7V5YFcBEwzgj8YYqfza1bUFte7p",
  "key20": "38ih1XkaNk1w9LxT5dp8X2U6BRmA9E94DfWnKQk9FZPzojtsSspn9eWmhN6iaDjuFphA92XHczswuePF25Ph6Csz",
  "key21": "4Eyqt3fLUqfF6nrNpgZF6jPSsEkSy4kEGytfYqf6NgRPTcyY6M2jUJKmkFKbxs3JiXZFXoixX7rTgKXmsEB8tFp9",
  "key22": "4QfzXyXkgtXoP8jPuCuPtjFbZH12iSPHcsWJf22tqN8qepjbJby6dMyFopFNzvYmjnP3yUfpmHY922dLaoBjNBs1",
  "key23": "NbmRfzVrSnurPY1f9orLG5rvwKUnsvhLDWW1kaWuU4ySRUhu1mqyAy5r83QS7KxLwFj1UGqgttBmeiBt5ZXkqdW",
  "key24": "5VXmxmxD5zNkdyVxi2WMaKVmAWWxym5GfA4Mzn6URn2rJREa13bwoAZn7Vu1o5WLpVg9yrYTHaUwMRwLmG7GaQGq",
  "key25": "4m11UFjoVFVxDxo1DXgWCDbdN4M3y2SyLufFjD1ikRKukLUXy4ux4jXixh6ymWyPiK6FwWUCyfhNaLf8swqLZFVx"
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
