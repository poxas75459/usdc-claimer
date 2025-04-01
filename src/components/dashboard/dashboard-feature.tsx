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
    "5rBpmtVpYmJsHoF1dWtKNvnAwxeFXjbqhtrNwGrXcVvtG7XaGEzWdf7KbP8xy8aYibvD3rCd5RKTHMx2aqwWYSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "veBZkdVG4HV3pJadd4NQ6rXrnZwqNfMuCWaLHxuJdpiFGYqKJveuq8VEy2NQiCXmqvYjAkh5RTUgxFkzEMvRCGn",
  "key1": "4GMcP39bxjsDMCbxoiNRh3TZtrVBXrHtYx5CJvZMEoYaqZpSG9CqkwYkQYkt2BPftxQcvccmxuFMDwDb3w5Wmd4w",
  "key2": "65eV6Q2UZccrkZdDEfnQdGMjaEQ7c6jYGAQdEP3KypEgAL6Qpm9iHS35jLEMcThsmDFVBGh3FCzzUxTYZ2vJxYNC",
  "key3": "3ZaiaMhkAXadDMhscrQoUMUoF84SpKv2F6iCCc8SxknFxgxquMe4ZJU6JBvf7toLDqX8drdLJK68PdLaw5jubnnE",
  "key4": "52fg7CKbsWgfUoxLRGTtGirjUdnXB5Lj32iidqaHjw54WugRGDmQ32frbBddB4A1mBxuamxkofQUE3GTmv8nxqAm",
  "key5": "4eVXwzc1xHMHbePo7ccsYeYTzGvTQEo9pJctAeSNQGXi9xv5SSj4p2UuWxarBckf7PQUeA71pm3Z5m1fSpQwp91f",
  "key6": "65AxuCiERGnfGugHynsSe81TGYF6cAkUL5sbgs2afLLxiFPYpfivUr7WACo1SSzdJpSrQeezUUmefjDzMvYoPkP5",
  "key7": "22E5MaBmQPvPTodpj69RNFCTkN2Kpydcvj9q5coQLtyXbicTamXyiWUPgX2B8vjSQ9km5vFxDWwm9TwfAeDYD617",
  "key8": "3iANbGmGg6y3HfeHsHaXEpheSYbZSajPCMCkjg5Da9NftMhoPWavSeQR6sMFaoYEiPrd5R9SNsJGzaJmuebFmtjd",
  "key9": "atsyPhRqUhqdq64ZKD1s8nuiR3Jc38ExTiq4ZsdpoCfkACWBYrUPx1nMhkkX4gFn37XFDVrf4YQaSjKHVyqGqxi",
  "key10": "32rXKstuuffhNWrDFKao2ZkmkBCZmXucezSVMVKbo94fdRiCjz316tVgL25uGERDPKZoZhe7e2bkrRJLXqzTqzLD",
  "key11": "5KWx1DEGn7LDLmzMCeMm1TuwcYmaMrt4NYVTPEhCjTXKNBmxJZ375sUAqHvj1Jz3v2RG4R7ezyEfwYZXrJtUqLcW",
  "key12": "4fBXLCZXa4eMWdoCdTBn4VWn2gJc1DEZmtmSrDLgCNz5ojwRkRfj5CUcNnHqCfmYrBLLiGewmKYJDkZSTtoMu9AV",
  "key13": "Rz3wfM8hCWRdNTqdvK9aoZZVfh3PCezbJbMhNUpHWHgQmSWybvBAP95Exkzhoj32v7t21ZGbm4aVMCeZuWoYVD5",
  "key14": "32zuXiXFecvc9VGSciLGFPiYFKsStTGTL5jSLq7pYAJSza1BEymC6WqxEQcdmNYA2n1UGwYLFJoogEzPWZud4CYX",
  "key15": "41J9nDvRwSV7nkbDe9fWVQnhKiGZvJN8zWWYPE7f4vZefZJtMRFzvwgcouieEszvk9MxDYs6Nso4ACeSqesATD3C",
  "key16": "AZCrrsp6hXeNkTUxyAnt626m8vrUdC88NpFUPLEf4m9c1GuGyb5qsUgZFaG7kKVdQ7vLTp7apMTSbaB7nJTnpuN",
  "key17": "pw6kaHV2v4iUx8ASV2ho7Wv343PHw71fpyzy6kRiAbgHzTMTKHSz8LkEUSQu5ufTLi3XdnLm7DJmLZ2K8YaK1Wd",
  "key18": "3Tf81jWZmj1rDq8MUQx9SeADn3Nziq468sLyVccpSjkbb8nDddDJrQZK9riwytmbbCybKe3xfC2KvRNm6x6hyCdx",
  "key19": "4hBPntWDjmvVnBvVYdejKnjYsUTxSo3hLAfwvKU4ma1C2XFqo8mkzJ4NSyGNLomgZkKbpBGbn9gPx786ZnNMNfCx",
  "key20": "3nUp2kABhyTTVRMdw8jtfYZgv1RNGNM7FhEKxfuME1EGBvCRYksbs83vsegt6s3QmofwcUJyu8MUoVX9V4xiCC9c",
  "key21": "2VEUvPXyptwoNFrs7HDfwdi9HLcSYxaEqJ1fSx5j6CwhUmypG5qLHC1ccMJq5gQof53cAmruYzdkzrhuZxYJKSz7",
  "key22": "5MYER2sXEybCQJfRDvkoojwFphXSxa9q4teoBXojbk9LZuWZaXbEm8DyHyQoFR2wUcTZL71LwPozXbKzhpgSXisU",
  "key23": "2YBTcTU7TjpkXejvKWdi5YJeuJ8gTCbJzQ3m1uFUFaimUsZwXqRaTCRfRSshQG9Em2j4E3VchvGu2x1jmRVUX27A",
  "key24": "4wShQy2rZ6tLojiSihViBv7k62Jko2Vhz4f6f2z4v7Zi6qSH6ZEk2tzZE88yNVtRjXRWatsd7xsAQaGi9sST9bWx",
  "key25": "5Bxte6JszQ6RQJVVNV6GhLvdtCfnwncKqHUwJdNGWzc4VnisdLx3K2X4XtqeivnJnP5LW2vD4vLGsnrffxoY1vZA",
  "key26": "35gUjicTgGJBUsz7jbHi8snMpxDLAHo1bco25LGVZ4XyYLnHKqSKmGEazaYGqdiLmpae6xdq8sbiBigcKRxDkeE3",
  "key27": "581xmfB4QSYgimogTBcdz8RXj1y4gDVt3GAWHnmHo4ULKmR6nfRb2wA3o5v56e24zsBhHJLUikTL9hjQaxh9XQRk",
  "key28": "4pS5qMhzFu4X9Fk2tuSZf5Uv3RBdW81c7zSXVMgZsNJ5rRj4U6ypBtgAdmFh96wAYPG6LEdR9xKDC7Trtsgb1UCK",
  "key29": "k8PQnfit47xgFeU9CSTZ9QqNX18AzaKABNpb1iV1HtJGxY9eCsq9qK38wSbjmW6piuVz71B5bZG48eNKmd7VnqC",
  "key30": "3ub8FefP6RoRpWE7mRw2h6sEGb7xxjTBdNXfHKLqTWQ8eYVKSPU6WDXYtppqqi9mqM35xo1Z7noUSZhuSUp93ZaW"
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
