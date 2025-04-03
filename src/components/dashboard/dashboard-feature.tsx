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
    "4yCcbuvNciLV1qYrn9sUh4PEYHRDDjfzaaaoJ19GZAKPriRJm1KjJdRVsFHJwVk8shXoPZePpUuabPurRiLPQTAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U5ZdP1A1dtUfeG86QxmWYAzVMmZx2GyUtruGqr7GA7a4pac4BqtMrj2WV2eh5MWauUcnCgrXBkDSSuknYuqKkMB",
  "key1": "FZwBVb5dX6UFBZHaNTZHSPFYbZUEvri4NTYvftr37bFDLM3bx8QarMqzLgNLXtVAhpUkpmC3T9TSkmFnmDUFaVi",
  "key2": "4cYKoKnhbYdp9R99NGc8R6NqjhH4a6ZMGoWfpLNnvjFLfzkf2oHPNcxyyien883KKCqieDJ8D7Hs4VD4xEhPoErt",
  "key3": "3ffavhnHnvgXXew7EdcKeN8F4sCnFDHiiNZxYujWYk68qtbmC1XBJUBqt6b2Cc5sefHuWwCr2CdW9XFNrzCqRWR4",
  "key4": "5cGiQWbqBFL5XUSnWrsrQY8LGoBjQYPzTUeMxtWL9y3jT9Nij5LsFhHRGwW4vMiomtERPKidauyXHJhGyUXYVjSD",
  "key5": "31Dwx7xeC7qsYuA7VTZ7p5F6nWupEnSsjKG6acDH5rtqisPCwHMTNEj47RhP83QpCCsmpSNL2YoMLMNz93McauyK",
  "key6": "3ufXcARfHyCZNamTpS2hhCZN6Sxe5Pej5kZsr3SAAHRTqvZaeHrzoszeF6LQ6bNCGvmGGzw5mAAqEzh4tUDPJ8db",
  "key7": "5SJfdnH9s6YPHK3sjjNHi3VtmJfYtAjpRrRUffpmgCgXczMgvK39Ydfw1CAE2oJV9dVej4Pk7ZUEmCrd2FfbWYHx",
  "key8": "Nxqu8w1srYeGVjKT94L1ZUv5hJLLj8uoQMun7XyQf8MrKRCCUvSfzL7LSEp1Ghn8mR2q68KexPYJgYEn2Zjdbmr",
  "key9": "3uBXJbUb9H2AqmWHC397kKupgjhYhacCj9wxQBdoaL59JPt8b5ZHtm3Lnu3xiuiaZnR4uoMNLDDrwJao2h7QWCAr",
  "key10": "4apdoxyAcXBBCsdrq2SBjwRPcSBNMyYPBX8HdNLUuS7LRhdaSYrN8ii5UgVKoxrFuVdv8VSWmbaPMdTeLrpbu5Za",
  "key11": "2TQBu65ppDv6CvVkiAsj6TMcqbyuqnM8W5bUg1TpB4isVP14ERp6AhwuWEX7GwW6JRHv25H1J6CfDgL6S9TTs8g7",
  "key12": "3tAxnCttM8mYw5g7BZjve9PXJpfBBJMA9Va77xecZnDLS5P4epWxPe5VV2GC1GUMWdSDLhrwVCRYH9p3pVo3oqzF",
  "key13": "5yhmKCGy5ALA2HWL9cDfLnAntktt8jKCP7ApafsSrhxyUEXzmqb3XTrSLpZhxFCAwfHBivfn6P83tzHEuD8b7p73",
  "key14": "3WW4rS9LvE72TzYFKuJondkFeTfKR2etvtH2UVEAKDa7kwuUMU3LBkhdYjB6UJubpP6UcrJXpxZ1c2HF3w3oVF9V",
  "key15": "5mmFLGXshCG7m5qJya7EbGps4X11gJRKgTRdXCyqbmMaC4qvv6wsTfTvCV5KH6HZmkvr3jW3pvcjE7NN6CC1dR8D",
  "key16": "5nCMQv54oCvSLNkV9JjBrvhx9SaDwYHjWVTRFgNcWUjQ5iuw7J4Hrigod2ywFnUXTrmA2PdZtkPtFnYiPv6XhaJx",
  "key17": "3Y27bUBz2abj3hyKLKw3d8rdahLBaJjnrVnRWcGyECqe3pGCwaAaHM9bEK4MMeJ5XN6SRSKxddQnNFCxzAVuNReL",
  "key18": "Rh8o248BjjjvckBtA7tPZ6j5wXyLgKvsaRLZinpbHWtuVCh4qEMNZ9fTuskGh5W1enipix2XJgtYDEDG2pEHTGk",
  "key19": "XZyssz7VorjnUpY5psS8T2eRNYLgHCKG77sNEksi8gazjwap3t8SoLJYYzXPQE6Qgx96JdsUf7acPfFUxxL2SP1",
  "key20": "5GuGfnimDt2qabAyCn5ufxDnPaFWuenn5V3XGmr3weqq8cMUu1poWFXQzsBcFmWgYP5uTbnci164To5vMQM4WH5e",
  "key21": "yF8seAmhe2ByN1FJh6Fb1zMM5RKh6wEy95bo9PijHS185wCXuHcBuZNsqHidemM4yhWoQwhU3KQRfv3P4knBjkC",
  "key22": "2R2XTAdcnfRCxkTWi58AwBKfcdg1Ajw9hid8GCEP5dGP9F2EtJG9LQtW6CKm7hSe9NrHcKaYdduvjbvoDZTS4UuH",
  "key23": "4MEMxtJvKkPkp4MpVh9oChukLCjgr3wBdTXqhnGDU9HdiRBqsRNY5LHEq8SoA5APETfvNGWiKDmzwJr8HPKzDqsm",
  "key24": "3ngbZcEBDUarzK1BopoFQ9KVcbQiyuJ2AbePNuWjKFjJoC6QfMPv4NPSXGLhQSvgpF2ZSXfLPNNqBg7vGAjJT5u4",
  "key25": "2xevyLmZeH883XgePBer4fiCj9ezULiy2BECJ76WkqJ8sfh3dBsPAzE4TPs6AkRqs9EmsjnS8sbkUWFBXcpbMeoq",
  "key26": "aBq5sktatcUsGzc9bKzH8EGTEFzAL7v14shLZAArmvac4x5t7GZr6zrrdirU5Rj2817raXRrZ53GCnrzNLtyMgt",
  "key27": "4mAKKsaLJSUaRnW4me3PqXuXv4NLvn7DbSLLexvo382U3UqzSearMfTUZevENksFVsW3C3ojNhtn9tWuQrmF9M1y",
  "key28": "2yV798DhqT5Z8fccW3Ji1um7Mg8rsHZDobNPuKaHTqKsTwuQ1cBBLJDt8AQmpHHQ3gvA4hYCZradcxpdcxsqMBEq",
  "key29": "5p4kgpQpriWf9TGGdJbNs557Nv114wdzXRhmsV6f31nsdYFFgZBKaUuumXivZcbZVL2xrsysv3yRBardARe6QY5T",
  "key30": "5J4EGzjTdAwsPjeuyZLFbQG6VXqmtBAFoBvm3fKJWXu7oKYP7i5pdRnKdqpkmx2TG7o8WLhy5xPhfbCcc1fJ2why",
  "key31": "61Xj99hgCWRvzJQsRCwcsrTEgHrTehd3Jc4wSC9NjhcMahsb7xCCDyw3mhi7WEb8oALWkMACMKV65LnnhRtdU5zD",
  "key32": "2Pou8XZwnx5aDuCgBMbmhvbBkVBXL6Q8vWRNWSwnW6XGzTTC9EocWHbdGpGyqGFXkJgJeVdjZCCiVnjCYAmUYHNV",
  "key33": "6368KhC8bJcDYFsbp8q5rwHCaVWQmvvdwVxo5oa7tybxB6dAbrgCjvruJAToseh92JvNMLUFtKwwEmNgBFYHjL5U",
  "key34": "3B58ukCyMoKU8BNAXD3sCbEnoZpqA9SkQgQQhZogm1xcNSqkK9UtfHLdvqJECiyvVkcxxSNkuHVuWdb9TzB3pBka",
  "key35": "3LjvfbeU4zraJwdbmqyMDmh6npp3LnDA7SrBLGHGkJeFJuf3huyHjWNUcfjEPcHXJesJRzaMUDvtdRJeRp68LXep",
  "key36": "Tgt1LHQGcayeCoqjvpHHdTSJ532cmnS8Hixge8bWdVQ6P1ssu5BBt6gZXpGHpVvZKFtE39pwymonYbdqyQm2psB",
  "key37": "3rHhsbtwb9QNakFXc7f6B13czEnFjBDWnc3qtgSmvrZat5kwPvkrAd6dzxbAWR7wWPvJhLcahpewYFGeeBSrfMah",
  "key38": "2eqqyQBY6RQYiyBZcA3Lk7zxpkUGkFNTHZqTmEqrEDaWqi7cnV5R3X7iiVYZ2azZ4wsAfzHE2xaoBDL1W95QoBQi"
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
