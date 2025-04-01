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
    "5c7FCr8J64A3frkyzSFUrR921sEWXZ8ZCcWUvsNy5Qct3mjM1eTAVPEtpzXU3gHsfhUoDysFqtwT4AQC5Wr4BYce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XuzhoMhqDLYnLRxerdpC3vZL6BrtAPzu8apptYC1t5t6vVpJ4nxzdi4HXjdJwRYjFaDxQjY2ZupE8uw43zDDTaf",
  "key1": "3wVee8RLup856yAyJGSntVh4xT1xX2SZ6hc7vMF1x9agMLjYnnMDSVA3hZeUjKJ9777tuPskPNW5HWCP2gjDEcRo",
  "key2": "5cYECruBEwcLVZJvrYN9RzjjwLBecLYx7ByhvSgnq15BfdWQD1T2FEMbQSbga42ojzS1jAnzJha1nMBbW5WrzRM2",
  "key3": "3AXTk7opL4zgrLEBUQqrHCh5v7cYY8tneVw5q3CtrKn9jC4mtRX74UHx1tDhDGFEmghEwHNv2aapzcF2cJCGcdK6",
  "key4": "28zogcyoEoJgPBRX19DN9FBoZYEtUFRjP7eweTYzHS6yCDwyhmZXz91trCS7qZoo2enx4zgNjMFTrt57A4CjAucV",
  "key5": "3jxZDyv4bXzRVKZsHaonjJrNSnDd3erTUYBemRsY1yLMzKKV8hkwS8jhBHaxox767LyaogRwzzpyLUcCTcnSHRdP",
  "key6": "4rXBwwyMdxpavsyV9vrxCY7QYPFPJkZSvgbkCAhGX7xKy8NWVgtkxgENFPaURtYyxJ7GRMrEhjefU9v6arRJcMff",
  "key7": "4CRJEMS122CxtXJBLFUEHiGUQwhdrux8dZzWBVwtkJHKTmx3rXRzMSdx3D2HTi6AuXgjcXzvGrYRSR2r5jedJzA3",
  "key8": "3vNT9XPUy7mJvb6qaLQo13e91mWWRtAwat4AxrWfJnF6kjmErrMU3Nz6ZiffPATi7DwCB5ig8vJr4euacBCuXfQ3",
  "key9": "48KF21RgMptqAvp6BR9X238Rs5WXPH4rCTc22MsZBPVetKpcC3qouCUtSAeZzVHUz3Bg5a84zLc97qzQfxYnYQDD",
  "key10": "3qa3tFZHUW7RJhLJbRit2t63gr9mVsHKvAKMJs3LzJHbL2X4AEdgwtNaz4XuYb4gbDmfFwWCQWRXj36gmBgBZoQL",
  "key11": "5GviXCRWHM4tuGnH8fAWyDrQCyRSfci5FSLs1WPJB5fAjpb1iWfb5GAc4PH65Qgd5QkRJtpuDJoDvfGMfFVFxYHo",
  "key12": "5AL4S9qeYRopXFPZfZNkGTJvF6UuXgFBj66iW5tNzBZcaZjqFNKCMbpAf4gnvxcqMjNaat34o4qFs9jTybp9cbig",
  "key13": "3ttESFYY4C8GpVKdSap8z73GxmBx5txJfMpXWqqbkdVhnPk9HgK9Ms926Wzj4qvt9xRa4D9MxnWWYAV6j63nYA3Q",
  "key14": "pRwiSWqgGRWQQqFjU7DVoeuJyUif1Q4qLD2rF3ZymsgnSWqiHx8vs8Byr3A42KdKwVDPouuvhwqNQaiJyyEzi4u",
  "key15": "q4F72hcHL9G373CH5yrVCGnrWpDbFcjyk8i1pgTvAQxyjnzkw7TsSLqZBf6tFS2JzMWABERzd2DY52B1Spt9dH8",
  "key16": "6RQAKD4QmaF1nKotpNywFF8hfMGkjG3zJA7x9MB95rjPBKgqXfLuufcLf2kE97Xqa8kCmUXfucAjSPXTTtwTFW2",
  "key17": "3k6X15rgVbjQSPL12Kb5RQkdSVwd8BeUKZCMpnqZeZKtc3k7Hu6zNwEBkXAQ4BmSgppNNotn3LyMZ8NxNV6Kwdt4",
  "key18": "2yAoHhpNB364xspyr6hdwjcS6gD4Fju9SzKUAbntugqm2f67sQYEkcmSArADNsUS9Aa785JHBCXQC68GMbTfrqBn",
  "key19": "2UXqgwpTvJ3NcFmX9sVCF2gsNpWfrWLdyMoDq4BoiqhJT6RVDbi9De2v2YXmsREcznAKrm5BumzTL37VEfArYfRn",
  "key20": "4ftPioL1vtRrm3fV7jhUGfswyPSeN94mYBnFzdU4y5jc2Wjypq8G4zim2U1a2Duq1LK4TXgNCtZsbyUwgeccdMD",
  "key21": "N9Z2AZUTTAn5gC8YJiXG1gk7wQoeq5qUTR5gMDz2Ecf5cxLWVq5UxXxTBkpmv68UYpgYiUz9ThiFKFZnWWifaS5",
  "key22": "4M5GhkBGzsHdNFEz2XJYBLGkGe93rtQCdvDnuHeN2nFFdTVfKG6kn14aqfkiCTyFXtnXBySzj3KsEydbnccqNSBD",
  "key23": "2NDBrAiP4cKoZzWCvyyQqEsgartLHh4H1ZRUT28g1MrZEKWLPw76nB7JNLtHBicFPDuJuEeewNtcZsAueBRvAq3J",
  "key24": "47idfHWfuPc1B6L6KJgJuZ3m37qBsrNdaBwduzgCa45GfK8Y9BryUYbpzCk9P2GuBYURpwfhVkgdtJwWKHyvw7Gf",
  "key25": "2YdbeULwtr9S5Gxrp3qukCcgfYYo8D28u46YMwZxHitu1eUStAy9DDbgRa9mFzoFWRMTg8c2gw1KTXPS4VSiMYJy",
  "key26": "4HCQc1cnQ7Dd8XQB3g2rq15oYmdJvD8DgyPGUH6RY563B97tLYucL11iaWCfrfVUNtisn9WtGc6ueuPXExrunzXc",
  "key27": "2JBDHTRadfgq1sfVJ4C25BQqMxFxXQhKUV9zH63HE1NXFBhfK8EnXxvfqNYVVkpDa74onNqa2aKQDW9nuG8Bjmwh",
  "key28": "5h6xMw87MiYfVg9xS3FQ6KL3VbmunZmPBLLqTX412a49Z3MD7eLg4Pmzh4CrspJ7rswDtYhZh8FoALbRZNUvkgcx"
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
