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
    "3YE5YHNDJStJfWVPoMPqUHroxFSZhNeo4foastsjXqdeiD2w2Gmj1tjhUQGXm5po78hNhhsvVKGxMbs5s8JrFdMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rjWueRLkp1UBUzj7MRtekLnk2B2gy9xkmKCPxj7fUdZHNLzSNGkgS4VThB7JALgNkxenoYo2KhUTWx3ApwjYRXu",
  "key1": "59K8e7wkTqSX3EMn64BH9SfhVoqyL3ihrpTRWRy1Xnw1wC1HxRcSJAqAKRNxy5H2Yw4U1Z5X3fvh8SVGrjzWKLR1",
  "key2": "65UzRp1qYBnkWZpkKBLHGcZpurbAmYq3J39EHFpvCPb3hKGyorU9M6abkNhbeZzs1Ds6hGKGP2E2xQyZDv3bgHw",
  "key3": "3WJCu8FcUqtaSqJFThiKrWoJ8FGHnr2BX7C2cobGq7GHVvvNa9ikfMir1rKQRN2u1PzvGTsaZQkpXA8GLAjhYhAc",
  "key4": "4ChnG2KqM43SFf6FTVrJVasSmnfmk88NfrTnEaPXzYLtTwXq2vBfPcVCEA8asRcHtYKEvtn7LGGL2e9yj5NrFYfU",
  "key5": "5Ljw7kKt8QwEtfDeJH9TPB4YehKvAytdXtenaoQvmmCPb8CK9EZNFAnB2CBdFUNUHR9biDCb34GNFmCoyTPzghPp",
  "key6": "2prm1K15F7JugP87uBPFBoge6v4LGUCRa6y8fRU3QxjwsqoDJRVFpWJS1pEDwN3CUyRJeowTJH9G6vMvjoigSoD1",
  "key7": "2VsNJLZLhtZbNw7TFSEpghkNGKu1MBf7hZsh6pJBbp7aA7uZLV2SFmwUpmjoHBCbqyyJxvRhESo8HyXfPv8iHAqE",
  "key8": "5TqTKS4yS5vZ7jV6k3Qq2YwWDCa8Te6kM89SYKRpoLBcs1gRkBkXbqfYMkW9bTxe14HmCSrV2YPGBb9Yv6Mmjjpg",
  "key9": "5jKj6LLDXHKjy3UnxNyzvcsR7ttCssrXBHG3aucuaUrUMFmBBPyCiifr9g9eGFAVHTPQsinApzrnzEqoJSmisLPB",
  "key10": "3aKTDdKYLHEooWFhYD5rRH4pHGezYMWZVvELSQ9Z8d2MefeDwp425e31iX2m5QCBRcFWnLjbJzH6ns6s4H19f5E",
  "key11": "ksT2pQeGvt4g8BuuApp22Wufbnfdn8AqtfVkz7ckhdFvgHvcEB6SxzE4e8qwYLY85cnoLRf3GhSCoRYedAQ2Uv1",
  "key12": "4BW8i3ewm12ShN83g1Hz8CmTDSznbZuXUwJwRGPhTgyj4ZXaNv5C6meCdTCQMwUw67uo2quxa8W7EQzLW5UJBu6o",
  "key13": "4zG2WvUux9bbURRb2Bki6Mx1gdhQMkTtNDUwchPqfLLDw4hUNiR5p3T1v4V3rGogMQPxotrSTcEyE3Z5puSF3Foh",
  "key14": "1WbZc9KaXCEYZ8NigCq6o26fHJkiDTsc9VbnyZbpNBtDjprkGiebrASo78fq3oR18zjbsRJBrZ5L1PFtMYKeAi4",
  "key15": "3bqu8onbzcyHeks8Sk4EAvCTaNvaBZKtru8BagAaBmt253pfynhst1gfLCLbTz1BzhsJPVf1EsYfCZQZWtH6osXs",
  "key16": "4XiMNvT6HQepZy1zpmjh26A3L5mygMcnnnofxmgbo6ZN3dgHHhLdaqu4syTmDeJpXwMBYppRBjkUXTWSA2eXxK26",
  "key17": "2ddWamoQqFWwpKruRgNhVwmNfcg4x3mQKDGXAr6GdrRfUEHjxr9vcZQf11iSdKAWyczvKWhKbkdhaG7eRNRWCCtw",
  "key18": "3HYkomvuUMHLHkw68NtPRQ2edNXc3bdC7SKihxbcbTLszVUC62D9b2kXPyYM1Vr4GaoHEyryD6oQu8WyJxLcgfQA",
  "key19": "3Cgui5DArk2bVQX7V2RFTPgNMMAJ1umAj7J8zFkRF1tFxfoJyX9Yj68cnR1Q52AKtpywi4VwgrDGhMPVz5KZfMH3",
  "key20": "rqE96HjpVzxMa5ym8BBs7tqhHjUvhqEpKMR97vZFmg3oioCueh3SjBaDkF9HfrjvPhcF8qKB2WFTTds4vFRnzbW",
  "key21": "3pdPnNXJnUFD3qnJMjEVrkZvkcu3vKPoieQedcyrvBpBSGHSc9JbtXLaMkSr47PFFgCG7QQ8gF6U8yRxkkAamxdK",
  "key22": "35QfbZeNbYisJRZ3HFnxvVHLajhtCaZZ7aF4kKKAK73XFosgb6pB6HhX8VmcMT3L7KYdLaaaZ8bJKasiEKsU9F2x",
  "key23": "XNdkXCUMTpdGtnpp3Wg63XpVJFRaKasrugRgTu9Qxs7uMXnQugpxLgnDUoEcmWwsmQLQ8841iZpRrtoGvmfoQ9k",
  "key24": "3sxbimCbLSzPVHMxDD9SUC1wtQLqmrVkYcWBNurCVtbJ2NsBTYVNereEvwZEqhrhJLsUDp9NRFnoKr2tSF2t5bso",
  "key25": "iJsnp4xLkdP5s4B86GgjV443vgFBh1hyAE8YM4Kb9vGoVSAqcANGj5D1KLsnwUtPFs33jrVLA1PtVSdXNWmSdu1",
  "key26": "4FBzqs7h9e8utTcDL4k4aq1uzJz1hs6K4L1G5mMwWvftEQcEfqBedRUkjndQYGeoGxQooMiPdRN39dqega15BEWC",
  "key27": "21SfhfiDD9YR8pWgg88foturzA47JvjV7VXEXNo7HkfNYC4NAEzYE3Ky8hLxrFhWgWRPtEtC24kRaiy9Ec7X15og",
  "key28": "49dLQDVJmvAu2vpKikRp1jerSJjyWNq3PNhcWb6x7tWBK1dpTAkqEMdvQm6HQeVnARqNNX3H36madnEvPFnJHewC"
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
