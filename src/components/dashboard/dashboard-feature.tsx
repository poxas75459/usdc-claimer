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
    "4ZHQb4BGB4KL3fZdVQVDT7stBPVL7qjmdXZKYZN3umLJQpsu5EgF4yU5EbtKuTQaUqDhmoSw39j8HVXsrn3PX3Mh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ntC9mQyvHo6RUeCaZ2kNAvvYo7NqhgWL7hy1LMtg6YLef4uqVpxZWLhopPVneCQFM8gcwNX83AfutA5rMXoqiL8",
  "key1": "gJeoRu7383VMRL8grk7dGEayvYWvh7w6VoLqqAYTWi5EcYkGFTtwxP3RS9vhBp7ZeaiXwjaDBZfLqAcRkQRdUZ6",
  "key2": "2xyAPeQyebCMkLrzG6ppfATJeQnN15oLsJZWKZRgXhTCgVuNmo4bxhi1AQn784RDK8bgQy35KLvarrWZFj6Gie6k",
  "key3": "62FeWigCfiETMKmkydnPFXTtuPukKBiGSvwA3dbBV1pGBWZ6u4tKKG9SB57rHC6FbQtLSF9kqXVhDWh718E9vCec",
  "key4": "oM7kEZasoSVtN7zmxNm1EX8LwbbRA9C1dwgrCZhfi29audFcQc5KnTkc9EnLjqanGwdiBiTkq2ZMB56WSbbNWn6",
  "key5": "7AhSUH3iGvJkTYeL25dGEMhfXRNUQYii3foSmjCgVUEDKQxdhdZVrWVNJS5TnUYM1VDzcXFYMdsXquQeVe445a7",
  "key6": "2LShbQ3qWn6pWXCaQEFARkn43WJDEaFWgGKotsYgMGJFQbh6EtE78bqK9eEHhuooAU1XPmRFWmTDe57vnG1c61jN",
  "key7": "KiwFjEcRJCA6EKEkoyQPrdQc9TiZJg9a6CR2vQfQ2KmG6RpaJZxJWoHDLsa2w8MEx8fg9fCBdNpYHXpuiAPNt3T",
  "key8": "2LEJRJfB7ETqT5hQds4YQNWZwi5G4QqjTfnGyaYj6NskdFSdQU6LaPkD2HKqHvNPt8opZ7ektBF4TY5xRPRZoEF2",
  "key9": "2UVsp8bVjhuNrcmvV9Y72vCkTk4KHTbzQwUE2mXsnLubN7vHwrjTX5n2eTbutLhWJaXn8AYCYEX2XxTkVma4eVjs",
  "key10": "3iWcJf6iUxdCesoLg49WhaKJ1kVg9UqLpPn8zmMnMAkoyPudDM9f5Hn3JsGVuZdmDtbbmnrYs85dDRghWiQhdBuy",
  "key11": "4CeBZrKWAk7FdCsSSQuzuJHvpQqM4wgpreJJUBXg4HWn9hbUJsCLXpKjzApFU1wzZcVrXbSAvtwu8wBExJRjHwd7",
  "key12": "5b37yap6rLGvk3aDAXhNh8GNGf24nD8yHrug2njPJtr2Wdx4KaDC1z4AwaXAdPbUbaSJpoNLFATxCLmaf6HbRbhx",
  "key13": "4LmeRWo7W91jwLMPxJdH7axuYtY67bR7PuN75CwUGsHGsrdx2fS9BvMPsVJuY8iyvkrn362TZrLy6hFT68zRPYjW",
  "key14": "3XsJMw6SKiLSBnGxJwpaqr9qsjKKYNQxv3UG2wTqqPWuzTs9bAsQ6mRcPWD6RBMazc19wxhii8ea7WS1yYSWZeu",
  "key15": "59HqJwiPs9K7xykUSYfHwjd37zWWDQTsieQig4Dqunv1hdWdQLGCtRvn1bFSXGYrv5cVBms3uZ7pDwcV8Mb5zAEW",
  "key16": "264ecYhrr6RuYAWXigPhcXN9ZqejF7B5ULFzVytfTEhBLJjgmrAa2nDhkETEsq4ko7XGrPZGeHjmjtKsKHjhmDCk",
  "key17": "5hmZysSAzRYDhtCptChfq68yRqWxU6P7yNLtHsRUMzUJQGtzaWd1K1dgZmhG5sb7oSjenrvno4T2K4WPQEGzZVTa",
  "key18": "59DphV79aywXniEjmT3o5tsBiGUj99eX91JkrerGTWDSJ8yXTGapD2v6yD1F4sMFchbAUGQkpLxh6X55GMo42rjE",
  "key19": "5zBPfW8yPAa1vg2TBczCcR5pXeREBvRWDUVyXzic4rxoSXjz6Ycuebbk5UWCXHiCkDdYdmEoYLsPrUq6r1uFKwaH",
  "key20": "1E6EHwH3G8fgyropuoR5w4bR4ahPENDWxqZyEhzPHqJFFBuSC4Q7PsfMPHnLqGxZZs2pKnBU9eugQLnFyGpqntZ",
  "key21": "H9zQJBSQDT43VaP3ieBoiEAEdRnijXcXbbzk9nNE5HkF4cxrtHyNzaj6DH9uN9XqZxjiCLzTVc4bt6chgJN5c4W",
  "key22": "5ZT5aSje9ztfGhsnxovtTYwEzHcet6YviruyXwSwrDe6KCEru1EgJdWAuNFTK4gQegpdgATXtR9xe3Lu57ve9VSS",
  "key23": "4dmsMaZboVSRqs5413s2WKG8G4FXmdssSWx9uSRbXcRmz3xQbmEgXkPEA2cZTkDPYMnS6YrwRYN4Kwrm9QZyMwJS",
  "key24": "3ewRtNSyVKBbQ6rk5wuCoiLpjKsDwDRqrwXy9iTHvkVHSbRm1QFRGBkYiRPuwSSdwAskTWwzN2tUoqNRsn8JsjXo",
  "key25": "5ztsYYcd7R2qt4L3EHoTxmsb4547Y7QzQmh1o8NJj6Dotyek29ZoSAbp8WLK7P97mBJyJx3tZZU5L7bvGLrcSkuH",
  "key26": "4PfFgT2zqNKpfmg1BC24MRCccnGPnZYfA5ivxN685H525Q5hyq6XSitq8xstN23RtgfQUqyATpzYRHzFqkx7146k",
  "key27": "59HB8NmbN9GDnEY2V3iGbSpysVFTyXfzer1aysxhN1v4CmwYm6pcN6ydZHJgNLZhA9j3kLk9oDDjwMcLejrVCxrG",
  "key28": "hNaKWRP6JKQxhE67Z3TwnZ39nKufZppzxLNwGgDYuk2chdmLasvdQf8WWcd17BoMu2aANTY6CNgRLQjjpoHqEMT",
  "key29": "5cGwNgD61QQTrdzRkEW7bo1f23eoqWC8cWWXNHu2RamF5BsEdXpx1FkadZSzfoaytWr5vuEVbv8JEwgQJD4x9wB7",
  "key30": "5vzFTyKkFjn24aeV3zth56hUHgrXvFfwcs6QFff63AiGzTfHNa8y8BA26eeDRGhHvzWvs4CaYjGcbLtQhTPyyBEh"
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
