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
    "5eM4UTtpEVPuZqquYrnMLtp4qti4gC8UqGbX4tVxevYB54N4rSrxuEtptKWozWcGnqD9gqru7Vch9PMq89tcRfvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fwGwVPx92DpQ5TXPGz5v2ouLFC7FZXANF5mYMTF8QB6XL95PNpB7FvyonMHCrBGXBf9qeQoFmQkEAGAkFJZT82h",
  "key1": "2KaB4e75btPnzL7evB4dvLfHJhdNUNasGMg7FyJnoVYH4fs7xnjh95QUZRH9T1cbMFpxxixXLYH3hKnkQ76iu79w",
  "key2": "2nfHcrxHx8BwXgaX6Da1aW6R5fS24SnpNgV6SYruYRjetTNZFUX1zfQZTxd9rFUwdLUKQZd3WF2UXHYrE8ZfcAMo",
  "key3": "3MSnBQThgYwT9J8rR1Lee4aD1HPFjBMR2rcGG1Xs8eVqofdbvEhysK3iYHfjzgoMoaQhLFywRpm6rK9tLzcMTRDt",
  "key4": "2AQJmE2Seue6Gj91weeGz8n6b6u5JyK4zGPcx7hJjcBHjivjw9gqKGnw4fEPf4GuAZZrYue19PqRMYbffDELzqu2",
  "key5": "3RuRKmemgrvuNEdZDFz7PRTm1BaEzkN25Aa1BkXfAR1rLTWZDXE5LDWSPUaDef2CFPruh6MbCuPmTKPpcmaTYWn6",
  "key6": "9VmR1wfQ2JURzaNNRGX5JxD4TS7c3CyD4wbZHFREpTYR8vM2uPvtVyRsX65UHzAmQyCuve1sdR5XT51BprjBcdZ",
  "key7": "5KEKTFgYbFihkk5vDRo6WLyfq4wQsiAPTdGasawS127xKdd3LSGmuE497UTLhF66VNmyRUqjm6iwPMuzPPnUNPkN",
  "key8": "2L3J84ECZLU7gcuvQqadm6rx283XeBRvWGXKnMsVf2PjtjkzoSWPjPXpXE5UEV3ywS1J87AvCp3kckysZ4KHf5yr",
  "key9": "2Sh3fDzHzjq9Xx72b42q1thsKm197BwXTfuZ6yj1teuuuMFCb4btCWjABn6fTS8bg2tAvx2qcbWg4w6DecYPeZ8M",
  "key10": "2Sc1Tk1whCPZ6HyWFPLqV7NFcqjDwsinmWZugqoygEJKB1Uk91w2auK3sH3rA1KtrwS7V8fJi9n8jZkBVmRvbyJW",
  "key11": "2QxhrCzoSumezXH5as2JvuHtgmajskfubwvipwEqBho4D9C4y2GqCxugNG2UPTWsvidWAGTpHhvoFqYgorHUQb7X",
  "key12": "2Z2AbC1gu2yXTkRnodgukMsGjtU3iNngo2zSGj17MCsMN13udnNUHFvp1Lpa5sHRt8fjmpJAx4yn8Mv8UG5Qja16",
  "key13": "3fiJ4tNjLjuqN5rHo6GL4oX8WRBgVAHZDfmvrUQ9PaMaCLL9c1r1nrEVXP5UdCzG78PtxyXCGNzN8a77tCtsQPhW",
  "key14": "6bt5ivMi4FTUPMyVQuLT9hS6DRPRECa39zyMUTHKBfoHH9L2ha4AkWYRjPBJYFEVpWyfsXFDzmzTMRrHEzfPY4D",
  "key15": "4KCStMeEwb2oCwY97iMdKre3CxeAX3LomfPBPTJqQtEGFkwFf3cHrtwNc5YLGDZpdq4uNDEG7PVBd5fB36dKG62c",
  "key16": "RYV1fzbBbGdkMQn8wqGC14baQTHZZ7AYQt8Y969NpFA3VuC5iYXtts7DUAQgkf5GjbEkD9xHHaAPEtL4NHF4YFf",
  "key17": "5qGDWqmWsrMzjaTVEYJypxLcviYiZfjiUnyWvuTL2xt6MGLoonYF2hVWqLodoxvkqUZ2nNnpL4secKLx7e8JwT3c",
  "key18": "4GoviDc4z6dadbmfqjW7hjvscWuyu5j7zGeq8ornfkcGRtzYeWN96eBfupCtGLiViTGYnF8KeUEHvNZgfzvxq7fB",
  "key19": "3fSCB7gnq3A6sE5R9AzV639fyrZJkvvarDkoeM6WXWhMjXQZkWB7iPaigJ4TpUw5PNSuZoLgsN8ZWhDkifCTVvhL",
  "key20": "3duX2dG7AFnv732y9ESeXJxsJy7YpFbDUVpk1jGoaReRyN1t8bc6pTZUXX9KzPDp1UvoW1oAXWgwsr8VVDPZ1aoY",
  "key21": "4PDv7vuyGz1UPb3GKQkbRAMjmY3gCW6Bcu4PaFwGaEUFeb5iM9jKxPni9DSUfCvWsat9yQrkvswiVSZi38oQH6Tp",
  "key22": "2LfriLMAw9PWHtxPtGX4fLbyAYxACNEb8imf1MAZH8cdJAr4RZxUswTLDkMBmfst4eoHX3Eh7yS9o5fybkJjuwMH",
  "key23": "23gZXPVWH1eaHx1QqkkjUZRgnUcZXapWDWFonuLZVDg8SRAcnYzUJFQtsP3QQWF17xV3MAgq24dUE1VDyDp9guje",
  "key24": "52ny6nrZDSNkxKLgF9YAoM2yibRCQoBWTNfyT9WN6sEcatw6LDEbHm9SDZnDivQxgCP7gmfKQuqv5f3TbBW1nVJG",
  "key25": "h9hUQTzQ4KACuSSWUzu6cDX849HbiPAB6pSqyAfgi5tkAfJaynojhsiPoyggoFbUZ3q4PfhS2pAkw1zUHLM95AK"
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
