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
    "21mPFyfUMFMoj7Qzs6WqqVBJTmgoGaPoNFcn5mcDURAXEz3wjhjUCZfMkrRZByoGhwuz7DBVRxrWi4opcccbuZqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6cTJ1B3HvsHnT6EZQkezicrCc64yeH4bCtjLqTTkwzmUkqujD2hphBtJhpWF18kkYNozDfyFRTmEvtMoC34kPr",
  "key1": "po1MGtkLsm1Agg8ao4E8EVquYkATjwK1PWG3czELMg9ocMDqcb2aaJeCe82hZQue2o6qK9HWkht6YD9fws9KotR",
  "key2": "3oEJmhMtFWarnhSSRXrNtF5ewqkCWPaCpjq3fqaZt8YUemR1wETLgZE2uT6xnr4YSe8qppYRhvv3S5wEBibAWpd",
  "key3": "5ENFyezjKQuCAWxBzGfSCTZJpSMiR14NheNFY1j5XxmSeZuSPH65YuZvGT6pJrnLKLfi3PxN6WuGz24tawNkvwzp",
  "key4": "4XMf6t8PUaEHEEXJrSLQHeVEUt1Y4CfjGk9U2gyeJCXKRAC6J4qVAJGXg5JxqmtvKn3uoK5pwj5dCF7buzMBVyWV",
  "key5": "33LtYQoqGiuwcNmKNZEtzZRYVKa38vHiLbecDVKNid1ZPDfD1GWmn87Xfsfviw5azKoQWUUDotoJzWA9UVyYgEM2",
  "key6": "2TWLqHMQYc9JHGg1SACscRnCaD4Q5TAcaWwaG5QdeV6rZC2P6rS9upKH9DwakhuggpfWiDDo1ZLSGUQAt47rJCtk",
  "key7": "5xJBEA66PXJvDCXMWMBEaU7rm9uYREpbRNwcycbJYQTH3NmxXx3zZbEpDSUBqAMU2NxFGrkAWUx5eSj63eL4wjQJ",
  "key8": "McSyRzwv2MV9kurS3HY3t5a9Ji2ESFvApxWesogsRBEKMPDmMpAXBkyysWbW7NqhbWYraGVP66hwV56hjvj6CHf",
  "key9": "UWEVUFHhVnscVZPEDiogfKK6uT1a71nZos9LXLu37UNj8vitDeWMg7VBnSj6vz4J4nKAAyhyuM5d24TMF8MhitC",
  "key10": "4NYEkb3uQuu9m3Mq4JipibUBSUa2UkiPj9pzo41fvqtraErNmvgj8kaPJYCH3LYHnF33dGA5KVxJePi5xkcsX6W9",
  "key11": "64jQCCWmXyfETehMLG36NfqjXnmtxArzt3moXokTHM1WCN4kH8NdNy7NHhPyzkCfmRa5HNxE3EZydG7YyCzQCbBk",
  "key12": "4EymfC2BGSWR81KRNHeZG4RtLtrHmSjkTJgEsgVK5ZSjCokdmAmiFvHaKm9tg7c7iECihmRS81Sq7EdM55ij3WeQ",
  "key13": "35BSQuvhB4i9Tk4tXDkbh1t4pbHLdpGE4YYN6KcFX15AsYTkpMqrREHNy8P9h4f7QVtGN7poLXSBgE9VfJzX6b5b",
  "key14": "NWGSXVAkZStZaFcQ1kq7D2PQ778bcRiuW1cMEjGgcWaT8unN4PXzLbCz1veagEmbCbxij2DXrE7C3dReKpCNmgB",
  "key15": "3HrcZG7R8gn7UL9i8Y3ncrATgn7sdbYzPu58hx6szJPCyfs5pQKaz4QE3agT2FXmEfJxJQmYMV859iUdLEAevHnU",
  "key16": "Em1MyH4CJS9zTudrjHLtuChLg3wJxA7zHAodbdEY7E5AJ3CsZ3yihY6VCBXPpnhWuqyHMtY85c28WoqqQtp4S8U",
  "key17": "45ULU5MCW4y6DPbnwi4RTbMgG5KQifE9ja6t7CqfDwhCD7zvWYZn8Wz7HFcTnjwedv5SqWJiBfTpcwqH3cCrPvDg",
  "key18": "4fRjBV2zLkfj9u2pTZHc8frxiZwcKWv18P5X9jfwj96B9YQNdL3p1tHmzxfEqEtuECD4qJu5mLsx3nBvUpDLsznZ",
  "key19": "nSWyxWLbmwcxrzDXxxtkwTq7B6x7cUTEtYrRWz3YASBUX5NgRU4j6qpuNt5Kvin2iHtC5nkiiyc657fGiZChvWk",
  "key20": "5qgDp1p3iGizfnhRkjTj4SiFpkNStoQhNdq5yTVDreGXAct5AgFmPKotsVy1R9mWgze7R4gFSjLsChjTvxTpovKV",
  "key21": "5kg3tZN4LPdb5tWH19fLkjfQMyd2M6fPACeufZrLUYeQatvMvFjFgvnmUCSDnwo7xwr3LgW6MKJTpWXJPELC4Vzj",
  "key22": "3LYipANm1wChsHSGqbxbA9YadXoAfTgARY5Hon5N9bCZabu2sDUwnqtL31nv7E2qGs4rRnBprmgZQQmKCqYb7DCD",
  "key23": "63fqRTXSzw44TTSXbgyEUyFDvopbQZbqfBefyZT3xNWGvimXtJNhkwfYBNRkLivq7FztMpQY4anbTAhJYjqyNkgm",
  "key24": "5zdYdu4uKyFWfsnWy5BKUunoHF5xV8XKqKppWx9LfWbTE7GJv1Ew7orpMZ3qM9rx1Bas9iwbezKsdDvhjGJmRTFb",
  "key25": "3NvkNmM7zSjRhipgKsbenXPNk34Vy5qpV7hxsDN54xbFtSZLPF414AQ2T2Xe8WoENreUyARrcbmYEjmyaMtg3jQ",
  "key26": "M7V8GVepU2qKqk1AXbtcvQhVoahp3E15C5FdDdkSN4fSw6oHUaVa8aZ2BE2BapHGawjdVECmFf5ZrWiewMge5xN",
  "key27": "2XoxAUpLA6DpUagtBsRBdQMRK6gzTBQ1iAN4YHGzpSnfSZ7wVtnh7gRMHFnCJaQjD2DDhDdE9rp5JAfMYHS8dsvY",
  "key28": "5JxM7fCHKPZBYyPEubms2HtzbKz18BiBTs8Wpw8TvpZxpryVsR5Z5Y1zE5VyU6h1jgqvvCRf2T3kLmMgQ3H4iPSo",
  "key29": "4knLpZNHGuTwkGUCaN3LHECiQhrWXVwX5z5KRWUFMzLsopMhxeXoPNk5rH7MovGejAyEwCHoTXywuDgWr6BLPiC3",
  "key30": "5RyWBaSjLb5QgcsUbC4WERhY9vPYPMdS5dWQw7HZBipFXpyYNpVnhPjMhdcFM5FJQrmh3WLWsaendKS96Uq2DVgW",
  "key31": "2VmSgD3BpQxLMB68Yv7euXfMBYT9DGoV8FQzGLkkCW8cbumZ71nTZjRNd7LXz7hac7te2SQxhjVCjGme8xPD7jF5",
  "key32": "5NMUaz1uxQB5fnDRQXLfGtkKeSE8RR1uTDTni3XoUuS1zCRM9ptNLLPgLbqUSpNH4TYSwk28udnsGKjHNqLRoQ9b"
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
