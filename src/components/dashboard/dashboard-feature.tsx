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
    "2q62oev7pg3Z48LbWyCJxMZJaRSb6GVQuspkp3sS5bCpiPRFSvUZFyQuWnKA3QGgzVtoZUfd97XJxTLUbmVpq42i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACD3HdXqMgE49vjN47ueK99YqpQ7h2HxS3najPFr29x9fT3NopASamkMK74MpWtMiPJ2dYbvDjwcsoA6s5A2eq7",
  "key1": "mwXaXWqtM5mnG9jrMuZvAkquLjduw7gXSmpCdo1wWBWTvdnoT44acaEqnhUwvV8mp7DpPFQ9L54etRUpLittsTm",
  "key2": "2anD3CQkAV9cranKcbHY5hnAn9juWZu3rugA2CKUXaHJ6GbWHVWSYgTMkjRmCU1YL4cB653TBHq4EwF3M7Ep9wqw",
  "key3": "4Kb7TbZJQsxK9FJiaoBswWGV9P7KNVYDQ5vC9DG2AAaK2idjTwm3Bap3ghwuQGhZXpJYsu3CgpJYrtVA1zQJsLhe",
  "key4": "2Fy7exm8BaK44ooEHtDLuDofRVg1P4Ds9yYQS33Df7zKvBrcy1H63r3U1bnWgDnwUGowbrHiVyrFtSa5dRWVv52A",
  "key5": "5wNf9S3JGMF9XkhoRv8eAx57YUQZWatshbfvHP9YnZgNpQTievWasNmiTyzsHwcG3NXxwQGvbrnVZYV6VRdTuKiZ",
  "key6": "5Z2t6wgUG5qJeXq9bkacELqP1wNTo8MKBmrKS1KkxK2zAYRCyTLSSy59mqxg2HxWtHoAPipEDfQqRBQrgU1n4io8",
  "key7": "3rsGPGe8xkKvQBwPJUsEMAuNzAYGAXZpYqFDHVNND6o95pdhzfqNFKteEeZ1uG82AgvfPnp7uM52mR4GsaTkZTKm",
  "key8": "3XVnV1oPhtQvi8rtPqdtNg2PvS7bjLDoiqJ1m6TS9XGSqGr4q4euNyS9eMzBk26jsVhyN29eJxvMFgiMnHJTd9ZR",
  "key9": "3ttZErH2v93zDDaa4yqHfSGvHHyiKaLn5io84SdqpE6UkddJkYyy9obNSHR2MDCWKw6E5nfJidpo8Cpm8bXdoZi9",
  "key10": "mnf28PSzP5XZtbpu2jB9cfoayeRZLd4jUcCAtuwAgKaX3C1VygWAjMhhwa8ciFW75CQMxU3Fkz3boqwdGQ4CeH9",
  "key11": "4T5aoy4wAyMYDN8vbRYT6RYhLBuXZ1BveJji1UMiriF3ounCxGFQrLndn4vvQdxiYLNRMapmkU9LAA7nhoNTcLhY",
  "key12": "4w7k4htYVjUUq8gm81pYvjvad5jdUiVNcY9nyDQjAUDXn38deTcSZ6oqxNx4CVCas3NksobG5puXosUBDUdePTFv",
  "key13": "h68HFk5LryygeRTrHkstyLJrWE3FniqiMQzYVuXcV4wXpuKZwrXzcTnYMBWsx2iNWCRnqqy2aAVpQpnSQqWjwP5",
  "key14": "PCL3GNCyc1pbnAQ7TDT6WHjSfVpnUyVCBMxLDFNrB8Z3zbKxXBxC9c8Jr5LUardqVcyQnF9aoXccwfM2mMftNQ2",
  "key15": "EjG9U39ZBf3mvhazmFNKLmkMti9CdUn8zkJXqczJb83AD77Agt4fSwHQbEEmqcu7oQGVfi7mvQURTJsjqKqeRnk",
  "key16": "61RB922feRjbk5Lhb37bXeQctZuoS9kJqRokRDnVSYGgfVhftxBQo7ybvurMHr3dKboxjezXbvJr61PHMh8KYRxQ",
  "key17": "4CJEaJiqh12K8rYNAkb37Ce4RrWPmew2GFCrozmRVE6UmywpVqHyuMiLdWGRsSdqCDykEQvUeqjLsqUDAS6qzsAx",
  "key18": "33ykr7yWz47TfaFF77P9gcvSfHenDD9mKUuRKqw9iEWBiZPpZNFubGLMzunMuURWDcw2PJEXAdxSCJpNZMsm849c",
  "key19": "5jXNNsSfbo7v1Rpc38whATdW5QSLLvX28LBwWzndEEDUdM2dVQiuZU1sfyPSebKBJ47Vjqqo28wRfE1rxKH3GwDW",
  "key20": "5iBcnj2QNcxvJgd5t6X3cLQvHLJdBYYQ1y11TqrKC5xKSPNnyqSWXZ2x1rDgCpj7dvQqAqnQQLsGiEqwvNSqKGRK",
  "key21": "25Yq9XHaqE3j8WHcfKnaExW39R1ihmZjRy95X2cS3EHdowdDDsUqNJsSL6b9ytiZY535secyceJqUi4ULBrRoeCR",
  "key22": "FJ4QvfHBeFZo65UPdhpVU2hzqgutP1daXeBqhHesh2CMwyx5qHT8JmNEXrDR62EtM1nWLK8Tj8NZ3qWq5fRr7WN",
  "key23": "3HhoYdNK21k4aPEHbNNjSuEfKivjdNdTZDTVJasqqLh6EymoGuwpA5Cdcqzdn1wpZ49vdUtus2LoTqdsMSqY4tm1",
  "key24": "4i7QocaDsYy5LY6xFdE96iJ6VGvcuWnj6NjCxsbQAuYNPexgkrn52A9k7aw9ZUsNR3cuKZxiyLJxiHQ7aQKErSLX",
  "key25": "2QBthC9Z31ST7a4HaMGNF8ZuKU2eP8tjmHC1i8LpAWMUH4oNxaPinuGyg1fuEpVAXjNL7gsEZwSAZgp98tvtsQ8Q",
  "key26": "5cu9qPtrFGrtBWH2qZSCExBXnkNHdSwvuWuFm6UbSDNcLKaQSfSJLtGVgTzmQNhte6sbmxyESQhPrQYEHHQ9K3hc",
  "key27": "ZYa5JMtTs7ZYH7TZ8HkFiRLucdQ9KqVt4YWaN4zYRktdZzTyADBt9FZT4F4gprM7ajQmsJCb7zmhsfw7WFsV3Es",
  "key28": "HEftSzVy6v9ZG8hbFEYjiPTSDEbPsrkeBgZKjZAkYkir2gBG1woT5toghGrAYqG2UkjCaAxV5Cs7crXwWcizCcv",
  "key29": "3iy87gz3n6HB7bbQP4CNDuwp2SE46rVRAGqZrd5jk9dwKJ8YCU7nVLRxYjwGEbhpLw1fNw1TnohX66cHeb3ATd9G",
  "key30": "tCcVPGJJAET6ujdvmMXbkAZPpHCKpGQ5gs2dxPSwHho4LNCAUFJFxBqZL3EyG5FyhougGQ9XYGmErQ3NofwF7pS"
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
