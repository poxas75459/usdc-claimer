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
    "4Xskb1t9RkzJ76UD8WiV4K91vmTQAAGstqQ2NMTGU7xv99ir2SV4Xie1m34tdkkesKhhjN7dmXmb8eGSU3vmbGAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LKJJWXScUZmSR23sCHELragVgp8FaVNUcVB49Q2c2gjgmsFnrv51tadJmfBF1Z1QTiYbEpi1vQNr4LoEjHFBh3F",
  "key1": "3xjLW7qiyWMzW4MDASo5ZCXXvqxEaUcndU9SJUkFKiayT3o4QJ3kPCViDsjTFEktjAeqVkThkRCyWf2HJB81RPrF",
  "key2": "4rfCLXWWn9qVVbqhkDcmZTrgiPhxM1anAPfaWrZbgewzQQqzuEbSLJptRU5W11ihFEtPFwybCS8sfuA4xY3gxrXW",
  "key3": "2KfqYdWo6onZA1nQcLp5ybKHTJEMVgXG2F345jnnfC6Nv38XZYryQPmU5vp6wNbWXmuJdysQzUKsLdJh6SUAnWSJ",
  "key4": "iZTDHzBstiiqaHpRDYwMkjenurC9EnTPpvTnR51dFBQiB78p8tc8vc3pev68c9Tj7r5VisR1tnBuPJLZAoZKpSf",
  "key5": "5ciFV7MspuXTeRRMmfsn59joJt5RTy3T13tRVQQq6BbzpzMbbsL2KFgKFDMg9FJsAz6zwSwEap3wLmQLxkv7oZ3k",
  "key6": "56dtdYxACoMQ1dnvTpBwMFhqx3abtbcjoRfmVapRBmgYDExN9uvxLj9XscrzzRp6mKvfoTw93C9nyCHHxbTuXo4L",
  "key7": "4hwUufzrJfPLrScH3aNwTT3QEK1D8BB6e9dajpPL4zZ1o2caPAY6NM8kfiKcxPh4bfxZmmE8EpfjuN79vQTWS5t3",
  "key8": "3NgN3P8gLYgrhedK64CX3tVcP6suSLdiBmQfpX6B3aNRKoQfw4boRqVbXqUFL9v5ZZfXErpBQb6XwNtFsvZdntFB",
  "key9": "5Jmmv25ogP9vgXrNbsTiAt9zm3PKgUCRU9rvtDhyotbG61HVDKxTqdpSi2uJhN6JKefS4SBU3r4ZjDNmUB13Xmek",
  "key10": "2EH3PX5KyPg8NAc76oX3ExWemxd84BhGUwJdoYDSX4Fdv1Ab9pEd6oq64qbERHonyBJe5mKteGDBtJVGaUi2vJ5Q",
  "key11": "5EQgQZga7wp4B36PPw1GEuBzyDvK9Q2Zej7jFRLDyLkdNAmmSqFipPxRrZ4n3tuCH2YNTecyftWkyMmu38SnWWJr",
  "key12": "45mt2gpYXwQnS3YtTF5xN5i7RNnrj2TZxd6WKqrJj5Gbso1HQBVXNSvDqtUbhaRX5GA6dj2TziuSbVkkgYy5nUYt",
  "key13": "3nTfimg7Cz2yNaysgKXFj4R9FT9G27dUxAZnKc5gnX2vKqQJ1Dzo5AYfEjHUaR31vZWUb6SyjzFeWMMW81MqTDq8",
  "key14": "4ToFxFRiqHj7sDVTzxcwSkYVJmxJemZVJDYUoeVJy4L7SPioCXrru4z8DN4Pmu1c4V4yishBjAJqnQ6zYyLpQHZP",
  "key15": "5YS6UwYrxb5oQoH6yozNvErD4Yi8ecDKZnxPRMn2YBjPizEQtRuvtKaSC1iG7MJg4wMMuZynC4QQH1TsiHprPyo2",
  "key16": "2e1NW1E6DK9DjExMA8JiU9je8TEjpBNqdFevQcWjh1zzjHiLGkkR8dzZNMSoi1UbnkwwYZACzQt46PNiDKiVixZ8",
  "key17": "2XXQyBHCtdyUA4Vnqywkesd2znukR9Lt38TJjt5WFeQg7zJ64xCRio5AvtuvAmg5seBQ3K2tE6SsxMYATW6LNJer",
  "key18": "UbspDNBA5eDkr282ZGa86MbBWQ1b4iWtue35Z4MzG2ZeZhG2PuxD66sbbMayXSUZQrXhAiFbMvX5sF9KKw1kWLq",
  "key19": "P2gDj73Q81veixcK3ALcg3uueAhaPiU3q8A5zFWV2M4JVS2CREC49ubFMR6AJ5reC5pBAWHTg8dEvrZRsBH6N9S",
  "key20": "aPhvbxE1VuM7F9J9H2vBbPVTPhDpoTot9Fhx2huDLTpMPbeWb5fQgnPMcJomDHdS6FZZ9WejGFpLDdUz8BYNMJJ",
  "key21": "godmiYnVRXn4uonhNfqvcboZN34EbBhMtCzPaSRCkqq5Bn9PfeUHVETcnfZ1ZvdmfE9XSF1AGqe4viUtZVLobA7",
  "key22": "4zhWbTKp2LcR42DXkYVbtHtvFWgxbZwUy2Ex6Rg3p5iK47Ys8oV2Qp9WGuZ2tnzcfrCotR4KPdXqRd7d3nVXCeXJ",
  "key23": "2n2sXYUYU7cHcb1ub5yLHKKsYWaMR6WfQgwkVawtpHvw5zG2tHxbcth75dz76bVMeq1RBawCejKcG4nLh3Qk5q7s",
  "key24": "3nbiEHEkCHw6tvRq1GGMbhL2C7uobDXTk49Sorn5BZzjBTR1ZK3eDn3MRMsBT6Fp73CLxZR15ohThQer52Wd25dP",
  "key25": "39Atsep39vEGBQ3hTdCwLzkWh6PoAuJ9rVYwhtxh8zMz5t3jYs6jWiACoywGLCDqiXVp347BXtCcWnmKyAfGSrCc"
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
