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
    "ksku7VFEDwkxhstsGQL1jBKvNqZzVgwLX9mWJZYKWfDzXvgYQKcWZS5SARrBvLXQGypzFgsvzi1HVCMoWbf1UFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VXD3XfwzK7ZAj2TwGrjX49VaiqMVi59zVa2YKvMz9oq1pVZJ9zP8xZqZWHbdzd7BXBxQTLrrF3GxL7vJyktU5qh",
  "key1": "fyuMmNAACi6Mjx3dKKwuEUqgrbF3GmYhERKJUcYtgF8a4yb9LJs1vg9uDd777qw1jMiEta39EuQTaYrpTHNnaev",
  "key2": "3TuTfEFM2AF4bGd5bDrtP7EdmrqsXvN638tis3q9GoSnmmEZ91x4zaL6tbY33BVuBDwbpbcLqFSEYsx1qHUFeBig",
  "key3": "QckjmdEAPESaR6EHopeKY4yKeRfoZYs8jvfUDjV7snnh2EZ7nxvxdWc8QHFXL3T6SziGkwMEvB2o9jo8y59wSSC",
  "key4": "3RBjWNWcne9f5JH9MHTx2fh3yPs1d2kX1CHkXzEh35PQivsxh3xokr63oYXuxKcVN3nXzbNM2KrK3dDDxszkt157",
  "key5": "3dV1EJNHHe9aJdkmk8rjcR19ruTkpDmCSrF5GrrFNPHotCgwZ72TL8DAkTtccY2yKkrnVG67H2GmYCAmcdkrrmDo",
  "key6": "xa7uYe7aRh5Vyt3uvS3RVA6JPV8MS2wuKsjiBHhKgnu8ZnJ4hEopbRCc86mrQzbKDm3QY9DRmzpaRDKhgs6Cuai",
  "key7": "2zRghzFqsmzGDsJBDtkrupLFk8M4Ewrkz7N9sSQpWypCX6mCqfQFzr1Ng3CRQGvqgsh9JtGf6D7PU7Gb7my13tAe",
  "key8": "4V5g3YyrKnrakEpHt757RtyvfQNLKBYM9ADCmRdxjH8NTjtS7ZSP3Mm6EJBFuzT8T5h2o4vNkNrfTJAciGsGHSKT",
  "key9": "5qmQ3AbY8vVFyb5EfZk3V1mhzegFEAh448r3yT48cPgh9NvxB9ZyLFP6PW5oWT7szD8E9n5SfimhBB1XyQgCdx6s",
  "key10": "36kFhKeFh76fsSn492p8aLT2waMa74sByRdebn1mWd4Q1sr9zs69H9aH6sWGuai5xFNWswihQJ3wB6xkL76gNKh7",
  "key11": "57zZYUTLvXaXy15EQJccA2Th4MxVeiPHRHr9oDxNzXXUGe1TasrkxeEbePff8G614w2y2pA3nmE8Az3NZpaQmTLe",
  "key12": "3g7CkuAwrdJnMThowMVsznjUuWBbqrUPnLGkJjpWUHG46NaudWxKf1nf8HCF7GFxHPetUHZqfM7BBNYXDL2ffmMW",
  "key13": "3rkYsGVM97DrfPgMGNpqZocJHUNnzp1Hb3z1hc35M7jzLL9wwtv4TiXBfJUrWKoZ6EdWgRXHm6SNkrKsv9krYcs8",
  "key14": "2vUPNXk1cWitQpkqSj8ZWwLi5sxg11SCUuckn543j3sTu67rCBPjQkjM2PpcP7SP7VMkEbT6uL6QkHNcBPqeV8YS",
  "key15": "3JkbR7pwjvX8RQRQBfrTfXyqVriqZbCBpgBtEUSoqQC7vF99BMbmDJGWCC5api1qhYG5BcNrGAbJN32qV7B4Z6PH",
  "key16": "44yWVrvp7RAEMB9JXXFLdDwGkQPHqEDjfYq2QZmoVuQvVt95Bgw1ToxBCuCAE3QomsLCEgqjQJFPFGCSpjTBM9Dr",
  "key17": "5n9LHuB3c9Q2mWqZ3pxPhDTqfTUgbkw9wNDHpwkNiy2HZAd7c5KWmG5mGQPLMd7zzZA3S9xFM2KpsYUTS19o4QQi",
  "key18": "2mN8fFyoyw2K7QT8C5xTXqr1F3XRessxWDhZh1wicaQDNVb9PyGUwaJJsyQtnq8TC8hHYCaL8d9quxjmCtHrqxcQ",
  "key19": "5ZTuvhqJfuqgQJ7WXnmSdtTvnrYBTWimJebTSSSwVuHNbFcuVfPmHNeVHiSfdd1mhwhViGoYohXWaZF3Hi8aL5ZJ",
  "key20": "67mjwv6uDqiif8fWLAFqeQSmrAvRHMBn1DgeqPXrd6Ui2qPcUuRWe4XMK6xcnqWQffvNj65RSsNw3cYVsd9PnmvW",
  "key21": "531r9Avn9aHtm2o8hEYdsnPsLKwaqA6SMJyRCHgnkDDviDTVoxUz5ms68RaCFLQvERMVHhYiYAx8atYK8e9ahrL9",
  "key22": "3UUGCxuV1rm2wf2QVYDFV92Sgxw3JVG1XWFFbugaaxFNHNkx4FoYHMaTt7co2bieY8qdiv81BSC8MMc47zzYvwxA",
  "key23": "2n3stBp1KEELwTmEBbXHTKgkaAkiehAqkFAgg6mL3jNetFRRMbMg6tkmZLiaLbkThTUitWzQUrazkiyPR2yCiuaK",
  "key24": "3fPP5YJKbMHgGkEo2gFzwsSof3DpudZmhaLFyaTNmNPCh9zHdBdSnRTvJH1n2sNHPH6PpMyXmwcchYQ4wM6rs9zu",
  "key25": "mi3z4Y2TYfca56Vm7cQEAPoC1vdkQVF7jtu7UsWtmWubgYfvb961YpWPYXrBxtu9hLMqxiu4vht1Fptj7UVWcRw",
  "key26": "2CPomcZRqHGi7TQnC6mmit8yKfZ2r8JnbdZTBoLCyW3W6ww9emqqcrsXZ9DfyEnTdEbGiWgoRpBwR2pNcpDfc8H5",
  "key27": "2HiRnTejKcW8cVXTTTLQt6Wpq3WgKhe1xcQD6vrUakqQejZJi9gtrwKVtUDs1k6QSQrvaAjnfAjn46UfcD7JEJZZ"
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
