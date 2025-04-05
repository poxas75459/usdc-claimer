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
    "LXVemqv92jEWHuxe7DCus4LQ5vaRnVsGuCW6gm3oJN7AQyd7AipYrNQGwab1jfreVVBwZgxy1fMCwBhWBjCv3bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yKoKgpwukFv1fg6RfGZ4PxatSWEVsB1TPFz6SKTVzFeTqNRwtFwvd8n1XUBLReKutEwxconn2rBT7BtBRiaTLMz",
  "key1": "4NStPAFmaNyhAEmNoJ9HhfpTvNgFTC9Yc2BFrMwDPvGJrV6pHDxgd94ZVUJzEgonyYSfWvmoqcQRm99RTToCVdFp",
  "key2": "3xCt3Qfdn7vzy4msqahgFxxPGDKv8fofRpq9bKfoiTutoV1AcqZNdRL8rynP6ZPYyb4s4JNQ8nG78kdzV5ccTk8L",
  "key3": "3hJnQ1Nse1WdTWxoghwajkr3hSMPMPoupADmMqwfFTb9kgBrAtfsgDnW2yzhX2FREjUnEt35xk85QigMVmrpNEG2",
  "key4": "4X2WMccgUiTZHGisuP44k9C7RaUBGAdHrLdn2Nn9bcjxi8aCQ33Cq5cFUnCeRoyHpP6Kesse8ctDhfKM44BAPSYe",
  "key5": "pfZ7V12U74tUgcUUCEiTECDxM9oyXt87yY5eqHfBn28fom6pdnr3ZWwpX4ZHqowbSoyBBziB8LG9Zz1yZAFUeU4",
  "key6": "GQVZttV8NHssSxFBhaFymbVgwf1Tz2m6rZ3Q9fAznJvNruAowoxLKWhW4WK85jSRdKYgMoXFGwczNnA7qVpjWUj",
  "key7": "3jL2934Yqw1kSG4PGQSRJ6widPpvW1YhC4LVQ4CKeX9ETUzwhf63t7xxq6YJq1TW7MYBZq3TTV3irqG2p8Hmw672",
  "key8": "5cLt4Cx82siiA9yNKhBeLUBzi5WxL7fd84y18UeAeGahmE99BFNiYifRFh6voZ4MyLJYH8nY262n6jZ1dfNCypzf",
  "key9": "4SdExqjoLnKPWWWaqEYq2vi6LvEPomB9TLccSaq2VJKCoVhzxz8EGtkvs7NPMexbAMvit8nK8xPUwGyiGfgHtLX1",
  "key10": "CtAtcESmJwLwdCHGFsBnHpyor23JQnzoYiiHQ2e6D1AGdqtK5vd8XGRJdsSUXiL79gM1NuUfAF9Ea6wpQRrcyQA",
  "key11": "51THzt5YgkYQvKQgbmBZ4guwQouhxJFzx9ppCpTvFXzk4VLsgpBd51xtXwjQVQvt9guTEW9g57T9RJPZdahBhvjW",
  "key12": "49i4KNt97yna9o86K4MVLvkU6g8C2hoEL8Hm3SnTUJfPcgfQ1z7aopHQYPDHuwNu9EuNYcLPuC1URn3LJQAiXw3c",
  "key13": "5fRMgLGWLBvVnaSNQLH5iYTxgjPAP4JeobqgNFe9KJJ1WQqsut1HNvPM6swdy3WHv3xtcm4oq27sm3S9CFYnYpVM",
  "key14": "4s9rRr2BHNYWpxtWZ6DNxaqfDx6xrHw9425EpaG8rKYWuCFC8ny2wD1KUdnn64tqrM1jC33H25iSTeiwaDh8WnxC",
  "key15": "2n6VgTNc1CSQsAhFb81mHDaLMkStnGzTXAiKmoBNztuxRdpZVnwbAgQpU5b66w2xsUmSqXnTYYMNmnubSBmVpoL6",
  "key16": "5ZwK2njBYARUhNmKcZgyznwr8wY3noVdQwuDSzvAWBytnvMs3iV9UJiSStxR2TZ1jQBHrzCc1QnMuFTJVSMspEWV",
  "key17": "4XggJJA4pevoTe74xWW1pLo9HY7x4DzTq4dYZ2s5WHv2pqPQa5jQZcVWFqDX9fFcrHjJbEnhi2Ap8dxkyBqomutH",
  "key18": "4jidvJ5JjPLqNoRGzFjN1CriSTzmJRfYcBKDVXdgtyRE8LNUFFWUPMF4X8XvR9AcRpkBYbndN8Hrbj9RirL53H6w",
  "key19": "457yQKKouNWBMSCqSizTtMHWiqAJeS96JtJQMFCKoy1kHFuYrgM97cBFobGWWroUPF57aRS9YoSKeTomPTN2u6ST",
  "key20": "2bfzcNvjgv3iCRCndPsofbPppWVcvFj3XQYJh21vRgdhRGnBiqSpisniJmKgY4qpJMkxz1WF6QApP7TYXvUqKhJf",
  "key21": "2kEFUnk3S6XyTh4hVLLuTaDoejvRciaQpa1Ki5Sshcs1Nr9ump2k9pPaKqNELbbZ3g2AST1hA8NoFTTUpHHXRbcZ",
  "key22": "XJ1aAu3g7JNwW84sm3zyMwxi4q7R3yQtXhnpaUummHXqPpEtQe7piYB1gwGfvYpizcSatZNYXEQZo5rJfwTDCnJ",
  "key23": "21AiWKjz2SjUwd3G4u2NEEixZeK56Nn1MS2m2SGBWMFYmynnnHdUQCnwaHnXuhLyCzF78zNYW75NT7EF5uJmDuF4",
  "key24": "YHgg2NvAFjuS8URCekLYNyrtsWsPmokYhgt7WgwScXCwYr2ypoJkp6dnWc1aULyNKqQbqFUdexyH6mUu8UvvZ9R",
  "key25": "3oTm58pyK67ABHqKobF7TWnQcrAxGSAFET4xKC3UQWrZS1AhkHMHBpd19daoT3uqbfaNPVwH7FsjScvo1GE3Mt1B",
  "key26": "4xcLQodpdrGUbGK64HJt6M396ps72WVbUL1nuLSMzy5Q6xxgiDrmzMx8gkgKfxGAqwreqNqdZHW2dCCTjeVeXKjW",
  "key27": "2MdS8H8dBAgn8fCC19fqp3cDm5A9FG4AGT2qNVzV9VcLG5jWRYnN3NjYev8caGNTadMJA3qgmvLdsMAFMzihzkUD",
  "key28": "3o5AmTKknmhkEV9rAcTvPRWj6t7ZuvgGGvKtHzEHpVBNRJrThJ4CVNqYS2vEHLdkaAns1WjEov11XiBe2AJueX6E",
  "key29": "3vu4YLAJVXL1AhnfETyC2xp1e7ianC2WZmaa4yi29s72hGjUjedRRjUx4DhDoohXxFLf9SPKSfxpbYmsjfGvfBYR"
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
