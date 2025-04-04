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
    "yAfWqJvD1SEAShV7oPrVULwR5stvUBLamem8XSCUTwyU6UFF692PwjQkB3sEE65LdbaxSv2rw7uoxMUyxYYYYms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VAiTZvKmMqjSg5XtwUF6tD5pDeafud4PykddgToBE3t95TZuf4JnfPXHczex1qfmcDzW4wTq7K4EG7FbRivJJ9X",
  "key1": "3e3eHwUSsaRGQt4JNdDowLZdv4KH2CZAytyeik4QDKznA2jFeChSu5dGht77BMz8ETNgWhWi8xVZ8Mp2z1NKFE7",
  "key2": "3Bjz1kyPfBrEYinRHy7JvWfupW8Q2H6e3J4QsWbSvicspJcpRDGqZ5VTjmCkQfUXpX2XTxWVud3SYXkQsrygrCrh",
  "key3": "4Ex7Z1nzmSw2SjpaLQLuaTvoKtsHhydZMNSeNr87icxdN2TQsmkeKZZ6uXAdMAtAvR1DeqdCQLmp8vcLySMrZPqD",
  "key4": "5zQzfhDPVhG7BrbWD7fVqnx4LKRFK2EmVkefJvcuHBKcwxX63ZDRVmR1GxLamtuRinHZDP87BfCfzXaksG7soDiF",
  "key5": "5JwdbJheECavi9FbULD5tBFoYWkVPtS6icLsBD7QWYudGfweUspcZyhFzpNDG536mgt3ey7nshmkc9gkNaU7W6KT",
  "key6": "5mLAssP5TysseR6WDQCVdtzb2aYSRjMEmgdcsNWN6rGAmUjiuoNo353pTX6MurgkPeKUUYeCR5BzYCbGR1dGj9C8",
  "key7": "4wBUecTXG2bdJHEGDwMb5Vb6oUZhp8rrnPrhDfHworeH3taG46Ba1bHCRvpkiX7yhuAiJsmnn1W8KTVA2AXRkwNu",
  "key8": "4uXG2VLvxUKzvFjtVVYGPZFaYcu5HHsWY1fTGDmkyxRrfcEByesxVFXc9sX1wNwaQcAK3sdmF24Kmcghvnb2Ra7E",
  "key9": "hYS3n81ZSkLKgphckZAJUSC37YAgnCELJosT7cFRH5CEJ2jJ7DKHRQkF2vjsqvGBEv4e29u73xRnDitXXJaD5ZZ",
  "key10": "3dP76hBBtmCpSfvkicTfdRScQ3U1nPKoqAVijy7WC5iF4UxwnaUK7J7scmNNA5yqMJv1Tk5HePbspFByx4PJENjB",
  "key11": "gCaUcKhmE8eDyHNoU73ZbxqWmncHxuABnYRDfTWTVZLTdsBoXpsrd8aVRAw6oyDXWupg47Ew61UQhzTuhCtqmne",
  "key12": "52iRhRjjeWr9Ksg7cmeJRaUicSX9sA5P9i9a6cXMzChFAgt6aCcPxpfU4KDHCWzMjf1QmVgJrCvnLwPZcrKBXzby",
  "key13": "4RdRkgCWxMhNsbAYYcY13oVUyrEpjLkLdL1fqSA2GBsvvDvwKUcou1CXb5r3PT3nkwUvnHXmUY55vqPkFBxkQQn3",
  "key14": "4NLaM14W2V7BSgkaRCq7fz411saNffeZiMbZg8iBhQmgdEvyZLgoLaZznfcEjHENTtz1gzeznWyL2AidB3VmivRg",
  "key15": "mMHdmijSqMEkDU6eoitb4vhFr6jiVXnb831hZstxnvxwHsK8fRtN53TnfCmBuwVyqHtNfXC4q8Lzbiwo8skMmZH",
  "key16": "3k9c3gV1tQ39PVEfhQTYXC5sTwzJcShcUTEFzZHZLvtxM3AmNvYYC1ofxhjHJ3ABqZhRw8ZPHohEsZ5KigyCp9XU",
  "key17": "4EeVKYyu2b4YSiSZ3ec32vzh7BXR1VcXbgtQwpRXEPLjKYhaBRtB8BMwFANnaGs5wxSADd9BdauN6DhMNrXfsam8",
  "key18": "3e3vMGYBdGZFWgZgeZf5mjhayk2dv3XsYoe9oPJSWxAPwRNfLLanTYPr646G3wFgyCtc8D1sdK1czCT3XrLertqp",
  "key19": "4bVccmZ9SrBN4RnD3Z1aYyK1zYoaSdhYqwNFdo3ig7jpmNKV5oeg6iukTAvgkweTz9mxvtQbVBsWRfGeRAFL6WdV",
  "key20": "4n54wLznUz5PaL23ueLmRwFvCQf3eyJyJuTfmo69tcY3pTKPQyK1vQDdk6Z1qVnEw3N3YFK7WqEoMv6qxJGJ3tNG",
  "key21": "5K6aVk3xBed2eyA5TbLbv7sBPwHwrgi1DY6geTsD5sY27FGiEhApM4Y243TEbFPcjM9BHEtYfnEgM63BpLymDbFj",
  "key22": "56nS8vUNVmywvzYXmUfVKjBz1XTAGzekPPpsJsJ9wpMevm4D3q9FgBXif4Go9WD6YrLqqiET7CJAYPoJ9koYcwcq",
  "key23": "58EYRwDhEj53kTprQ3Kzq6jQtuhHCcQi4RcYUFabijL65ZkGsMzkPftxMPWY8iyn6dqR94bLZi4zwcnMXMbsnMbV",
  "key24": "5X1BGwPSaNthzKTpwzVC2ofoUQKvX6Kx1a8tbvoJUtczFxK7FN33qESDs357ov6DmvFMHg3xNYH5jaUBBEgWzD7R",
  "key25": "3gH39Wsw6mnfX6pz6ujbaWyjwbNqhGvxz8zG5bgw4mVwJS9GwDxLjNVQYtsxzdzjLqaEg5vbqTQFQd75UKs633yH",
  "key26": "5wJn5m4GyhUG6LomhvUVCwQHKFd5q1tFffTqxfLpHoyBMXRj9seAa6r4P6GvNj5ZipGHsbumcJYsMEJyKrvu926k",
  "key27": "2xSU4u4TahfxUBD23oyqcKSEeTuwS6uYH6vyayV7Z3cW26oYJW21uc2eMTqV4mayvkrBMU1ctZ4Ns32y9En9aapf"
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
