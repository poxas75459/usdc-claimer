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
    "213VnACgQ5SanEr4EJ8puTtoTBzkcocHHtNM3LsyWQ17hLvrGPwoMTS865NcBEjsYqvdXXofPK4Hm1SQBtKessx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dAmP5GiA9UXp5wM7bPSTo9yExx9mowoa1eRBoy2uiJPjA2iqBpbVEUwAU9UxViTjKMph2kGpKPMfNedFMuXDVqa",
  "key1": "19knKPunGbWA92q5MKqufsHTBLR85iEZjfp8cbyT5G294YWzqD52z4FjzGgJ2g8D7DFv3sNbiTEhjmwiA77WJgD",
  "key2": "3APvyiutTqnaD5BvEtXppeGso92yq6PXcFbJGzJf4vCvLNrrNXFAzbxE4KH215wrE3bYjyuc1tLKiYt6NDXHkn2Z",
  "key3": "2hV2NR533fTLkninqEvWDHaJtNNRdGzBjpvLwroVrn1pHZhCadgjkLyjZf3gtiAgFm8V1Qurddv9cSM17oc3S2hy",
  "key4": "46i6gi8Z9KoHwXzwRgsqnb4J3vanVkfWZmwm4bBxFrnYYgrfqiysRNNyJz2jB1VssHoT5y6y7a2ce4uXs6wUmyJB",
  "key5": "4BATTkhcEyNbXX1i41kxNDBGnHamvKLEmkteECyKW6bC53U6Y8yodTYn3p4qXKyrEvUTqyNDyieqa9wPt3DZPL7T",
  "key6": "Ae7a9Zm7KBsheWx1x9dzyiZiZhjq4famKQyNkMzK8T1ZcfWGs5pFJDGGUyK7ihWJYy6rE5tVtfaGnkE8NMJ7u2B",
  "key7": "8HuKgZNjQjeSzcUcH6KFNc2TFWYWzALeWCLFPj5h8uuQHb5iMYdkPMC9QYkbSAjB49QjMLA6TYVp6B4HETYhyST",
  "key8": "5rWAKvD914chfNbFiyezj53uUD92JD65J2n37uRPJxh2mTAecWdBXJvnYsEFjVU6vZtv8yhPX4MF2iuBmycVxN9P",
  "key9": "456aYRjqn5LLo1oSLUedyuTPafoyWuCo1RCGUBzbByoPeM4YkzJPuXGA21f81MbVZkQNKDHVJ34Xpjiuc9mQFsWz",
  "key10": "4KsWE9WqiXtLNVzN12cYxm3zK4VekBzcbs7ZA2Qw9zHoyn1ZbgJSSd9B6E9B9Wvwbkpji4mXi9hmyQ5WdpiCnUJE",
  "key11": "3ACDxuHs1YTkBZhSkYp1cYseThDvgqK4AeKjtS4HD7uYr8HPm6gJqoTugRXxCKaTbFuuGz84gHA2cNu1kfHxtKN1",
  "key12": "4mX4RTqnoJbzKHCPBP3HBYfGR3Sr3fqHGiGaUCJuiXpnAxLovJghtBAuY7oWSBY3LLocTUARm6vdKKNtkXq13ZUK",
  "key13": "52TdbupR3QPa7ioanTEv9XwmJLoteH7WQ4nYWXfuZ1UBc38ZF9BqnTaPU4handZNmegT1nQnD52hEVyrcEb1GqTt",
  "key14": "5aDpTaGvsEGppcLqENRjV253FLWTuX54wVDKzwvmMudxd71ezBaqx1AqKK8NDaX3YPd5nV1xCPSvpLQS7VpwyhPD",
  "key15": "2eKUSHEmq5C6UjrhYaEyJky8g62KgDP6PkLG3dFxvLFjBU922MF1MREeLDJD3oAtQGMmtGLJPhLfNfVi97HwPpSC",
  "key16": "3DS6PFhfpQg5CXWPyHorzawt32mkqTuVbvEDUS3gSLgZND6gNquV767RXZazcyBXAuJBnhE29H1wPBBK5gqGeauW",
  "key17": "3xqU1Rdaa7Nyc2r5KS4rkH6PRCZjuWsoudmE5jkrEcdMB14d2i1734eTkFDfAfPoZLHnvxmJsvDST66Nh5AdrfT3",
  "key18": "56qU5WMudr1f5rZV3tc3tMFzES7gMpwztdEZYn79EyXLPF9dtYbbQZgqQ8qeaSvDukF2MVnXDH7XPhe3im184cMd",
  "key19": "3nC6frkGJ1o42zgkqbB3tFRYvphabWQmnyeoaiERJVBiGHnMPNS2zWchpMzx3JXvRaZZryJtNDcb6h9rzAeJVeCx",
  "key20": "4qdyVehkvm9TaXzbJjBRG8zueXWXcDScnqDMLEV9kpkkzN4Qbnxv938Ci7pcSixxDp3tzYwv9AYorujGuGRYYSTW",
  "key21": "mAXHkc7LkAaP8eSpsyPEfTeARFRqs47icnkSfDaUnjWsPDTtvgMW42oMQ99kSuXWdwkeYd4RmffjqYGo6a6imp2",
  "key22": "5tAadtRxV1rgfDCtpp68B2XHvzVCGZgT814quMNGCHkjcWThvVcKH5UhRHZYGZe2yQjrBMbDo7AAhqzJnhNHvLNm",
  "key23": "JSEYbdbEvhQur8oxZ1CrhzaCrReZnCEgYGUMaYhU6AdLys7NVehBirQJ3LJ2ggKx3hnoaabxovxmejYRbsmr2Xy",
  "key24": "5Z23KX4nYWa6EAoYdJNjTqbhEJPVD9H3GFqcN3TVbbcn6rNtMkh89YrZon3mGaBJE4kDyq3rPQGn9eU36VJeciyQ",
  "key25": "5NWGzo92kzMWqeR1KyJPDiEBU9vqrDmUf8RT3RDh83er1PJRK1673Ath1uEG8tTetrXyzhPPZNLXEWxzsn6o5RNP",
  "key26": "4RMSQ93feYrdMDTWFJjvqFdrA6Yc57YC1XETowHwiKwKc7Yp9zAE7T6QJZjGvbw4x5W22Ggo5YWY5Ec87KTZHTs3",
  "key27": "5KyM8fTGbMkqUYJEvQWbycFY1RbtGSYx3NFW2zJcvQjuqWHZYTAt3oL6SfRmW9tJWwCqasXBDuUemPjyKaudVbi8",
  "key28": "4Wtzj26KTCnhzM53UXaJNKM1BWMSTnr2f7Fj5fSPL2AT9Foqk8CRfDeMbWoKn9bfnMsJLJhJnhfyL615Np3NDftA",
  "key29": "4EWDAu42tQwdffEhD2QcNbXrrzD6zuuYkBR84FTb5De2WrKnYZZPcP987Fc2VyVjDrjwknxkiBxC4fvCQzWe3XBR",
  "key30": "331LZ2jvKry4BXZzcyaLhBKkHs9n1S3GizTAN2o4JebqcxB42Y5wGWD6hkzUcd3RkHERQiQXmjk7ki7NPsQoJBCT",
  "key31": "4j5nNiWwrm71vNkBwGsGcFmE4Ch9gtsBCHZ3PfLhQJzGHkvgFB4X6kdqLFTq8fsT5zK7MFXeKJMmghoWSA21bwbN",
  "key32": "3YnYPkPSV32YJLRn4eYfiNyZUQD7B6rgRJkScXC9pxFKbiSkJ5FACtJWGaXB8pk6Gam75cdCpAjArhhv1rwGDU4j",
  "key33": "ix9cUgp2dAbCQ8e7hGsjB8yB7hzHnoVRoERChd7AHx3Eo2cqQYRTvQP54LrjhkPz797WXUUaBrjrGn99jFtHwK2",
  "key34": "2NxZgXHawwfmuAFauw61kb1QDRyRpagc5fHrzCEnPHM4b1zL8h5sASHgsgFwgo4TgBxhH2AkDPtQknQGdsywww2z"
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
