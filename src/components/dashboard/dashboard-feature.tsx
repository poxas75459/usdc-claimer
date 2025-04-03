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
    "nfsaeoERTNWjSw5aCgvfGifsGCa4ddE6YbBYFg7Nd5AiRtZ8KynvCQ9CsMvrKGPU8oMmchXgWk4ASi691EFgQBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3efDCP4M2jPUbYAMqLAj2RNFPvfukePJccXHrSyzdmSceDmXwhEYfmizwtMhVN52JWfGWaKhy8CeYPmCpBW7nLM5",
  "key1": "RZTbUjy28bxzNNWjA4FWsnPtLvhpjfgB5XD6LYdYYX9N5vDo6dsASxzbWv9DeZD7gF1Ycm71TXHPUTa8Seq7hJS",
  "key2": "5VxqhA2S3CmiitNovQ1j5gdyLAsgSqB2Nq6gZUBeqxPXgrhM1vSH7GUxCgqZ1iGCV9C9K4rMPamnhAap4oYFetLC",
  "key3": "5Ef8evjWtjtGn2ZLJVvh12HA3fTGWtWB9EfJkcLcDwCVb9feeesDVbfH8DFcVnMkihgscfZQacCHWYMZ66eWehLV",
  "key4": "4Tvm3xCnujEnpNZrfMPeSiSsSuPDie2EY8Ng484uFPGdJK9WjWHBqt3UDFhPx8ZTAon5tRGfFddUmz1dLpqFX7Mz",
  "key5": "GKbPrPgaz1ZVoTt6Wn94fAEhyjrKH6og5v1XhQg6wJrEDxPU9kUNrTrw5ieCGDT6onFLAm1jo8X35zBmwtQz1PL",
  "key6": "BDsw8GKpVxU5PbJdB7LpbrVfk5PQJWksB1xaTa1g6RfyucGGsqYdSaQBqbwF66Bj2ZdSG4BJDkx6mwsXvkRPJ7w",
  "key7": "3PqHh1ebNhTvW87eTtwxp61vBbZzYDQtRgBaotUt9s3iqC7DDzfirsaXPcMDt3aYRoCoDd9318LvjoUZXAHVsuWM",
  "key8": "57FRmRjpS142aAFN2vXVyLXSg258Hb4xgmVZM9xRxEkAAmqqDz33LAYb9JjECaTCoPSeDAZhQgEEvcUZt5rg4H77",
  "key9": "5X61aUCwh8tSJPMnAPXbLWJWucMzoCmRkniDBqbMaRkYtuWeqU1ELqGj2Do1Nd72qvMkyjV636nmsBiZgdGZGSnw",
  "key10": "4rdRRUHLiRCtQW83E6vpUGc7PpJL3hNrePwrQnvC2vgk8J7bwFH8xsGXix8ke9Cf7M4xqRFtrR42UJD3adkbiiRA",
  "key11": "2FSXnQViYyKeXxshuVZEPRdUT3eornpdzfY2LoCLzvqnzhVXME8F1by6HasgSywfRR488yKn78LoWdgq3jEa63cf",
  "key12": "6yFxuFpTaS99RsTfgQ7FUz54c7MMDWwq1U6nCZv4NKgsr1z3GNRAaPHpmKyzPY2u1CoTwB2DciGJPrXDMPbiTRp",
  "key13": "5TRYiyRHe35dyD2HrbUSxboSXNd22PEZGq8aRkyDsFhrvw487UsLnTvXSwkLpkGQtRw7A3966UGUJnuGvcEm3nDZ",
  "key14": "4yjHN8tNhRrU4bTXAx8pJm5R5bSdv17DeiQAvsi3yHbRb8GLcFWGnK8uwa8J4kMh2FxXSCGfBaiGaURh6BW3YnuS",
  "key15": "5ZaZ8U7cde51GjPaCHu6xfgy2rc9NWQMYnwRn7if9RGLr8L9UMdS5KFxGLDP6R3Mj9Hf3yq86E5vMe4tdJmHzhad",
  "key16": "4jUvq1iW4Z3kGrRx2hGVEFPPn82NgQPuzVj9YC2z4AaZ5CW4Yz19PYA8tyyVEzSFiDjju6PifSsWFZxNSKGxrezu",
  "key17": "4VbxEKXk43zUbW1mfuwmHrE1rsQEYANS4GdLk9gQFY2rMLRRNNZmY8GPJdw5fHCmCuyAmu4AfCMKGiNaBqS3RwgA",
  "key18": "35cnzQggQJeXGQVemWcdJtUU4z5mbM2uJAP8tvuEKYhoSsSyuwVM84HpstYEqSeZZmsQLhe6nPEXGzfunKgjSFwB",
  "key19": "2pH2HSFr9yjSonqehPkxTqhYQz5ayiz1fofKRk6peK17GJUxwr1oSJyum18upnS94yepUooHCwSE8xto1rfcafem",
  "key20": "3GZ4iLkvFq6dcCvSpGmMY3qc4Lnzbk3xncEqC7bNmwP289XGeiTmLZnhT27s9fpqQF81WF3udAQ68QsXEbxMp4Bx",
  "key21": "4LYVUi1sqqxPLtg9TeTNQk3Lsh5M11YXFWm8gZjXqdWL4VPsAUTB65qELkTV324GTsiguHo7gwvmbe5c3Lhyg2Bj",
  "key22": "47ka4faWTnNnNENPeL36XUoEhExbvzkDiWtJ3h5dqoHmjrvvdcn4UDcHgNjQekU5oJcg9kbrkuaEK72S1UVhLJwd",
  "key23": "27FUkaZorj8er6hcF8a9m28wvoqWLrw41FTWGt4WVwcpB1MZDv5HMPgb6NmZzPQ3sacUEx8XWGU5BRbMjmxMTZG8",
  "key24": "dngtxus9bEsLPjicRjsyyjqPbs9HLCFHmoL9Q9m6cAhgkK9Nf5BqcBaEKHHcPq4RJKEESN4VGrQvn6Tdtp8TH2m",
  "key25": "2HTcNiMfixGE6YsGg1pLLBpfeaJzWB9P6cxHuQotFJBq47RjPhMH2sntaAgJxkoHd8CRgq36fLfHRPzQPMgC2f2p",
  "key26": "2cD3rPxRDxWct6gckiV4auzerGyt5rLRKbFTAc9LvFGtJ7vU6rfsX3CPYxYwMM5q5tDxZtnGfxMJThmYBJstwKHD",
  "key27": "3xNHmmmdSwXmvDbdCnB2r56PKFgDovXTb62xKgAi6GsUDw4rudbSdNfY72Hx3RPfAewSrTWf11pVbGcG1DnzeuPu",
  "key28": "g8F9VMQyNyNKBpo4ejQAB17oGFw2JcWt25oaJzFHMBfuhXk4nHaM8MHVebSqR1AsDVGXXG7zf1aX7H2oaA2MvWx",
  "key29": "4r5MzrA2ZjJmAFK6fi8mZjKBnAx5H84jJXYEDVfYhaatQHiAN8GkccQt5ZcpLNmKm5LLGztqXHwUwVvAvgs3sFdh",
  "key30": "5v6rK7848PJ8qyjq89a7yjDA3if8oYJ5xzMdezZvJrN9J6HwVBu3b3H5o2RTTiSSbziQFidpAWnyzoVjVkmBxvWc",
  "key31": "yAxDUbPKmDkSseESMcNUrWc3uU7sAaMzmPrn6hHZZtAmECyhjLTLR2U5hCQ4tpTDasKN5J8MjBf1iMvxtjKwsJj",
  "key32": "4yonwcWQTmwP4388yC6xM1bwMQe2SfwquMXk8FkrXSX1kkeyLKBqkVH4xwHs9CMUkdYvv5PoUzWofu6xZWs4vdZt",
  "key33": "4gVRbVKoUqQb22MkidjULU3k7yJXrnQjywKCLG2uk4JjhcmvSbCZh1bPWe4jdBMjWXb54n6db3kd2MZjcqWBR2y9",
  "key34": "5GiWFDvKS2bpn4dKCpiG6vh6u9C8pTPoaJMJQ3DKon92QPVhCJ2bt11SvbJtJTC5hKkJUk64xCJ92oAJ886ZvAkp",
  "key35": "4wXwFcKDV2q4ZMG2KqQbkFeQvmLesvQFzR8M1zrcjZQ5FDLTZmdoae9SYes2HT6LW8PDf6iRu8YsGDDAm6BaTc9B",
  "key36": "3FK1BvBbX19uKX3sMEk5HUHvjQ9dBP58Lu5UxwYRyZoFHGDTwiCrMFAD5qF7AD3u2Tyf5TmbkjQsJm3WpBEpLwVA",
  "key37": "5AiMr4tzU5LkVnz2YmbCWU5wC8mqkHCQe4w2dU7XuMZBKLEobm4GHzLLs1qgCVhmxWqTRhUR2bfmpmChLV6491mw",
  "key38": "53FaJEJJ5k9u1ftEMF2fezg1BygvQnyRgzqJCExP6JHcAe2UxhtHm9hnDwdHnNaVq9RcA21zaDXFTqNWJ7EHANdx",
  "key39": "5vbhpS5ziCZjyT64fEmP5kspEnBUa1yovkWNAT3pHfDLSnd3PWxTEKBcGxPdiCNUEx3njaPtBSg8J58pSEJ9qn46",
  "key40": "5XBWg8XvXfWyDPFQbfeqzYdfaAV6dL9vSHdoFvne3DRGxkT8T7841z5yGvgkgoWavsoUemksMbT2jTBfhpqfeD5v",
  "key41": "63ncmXMF8yKHwWGb2D9H87JTbxyxHA8Wx7sjw4hHJS4JBQt9Krf4LEbHnqZruSaeSr7wab76fZGDUAitR6QZgsRH",
  "key42": "4EvBVpZ7YcuMSAQ7jJRK4hma8yUrGuEaDW7R5MTestBoV9CbTXR7hgTfyMo3WuB6S7J1yiWwyNv77wAbpKJTgeNh",
  "key43": "5X6xE1bV6jRV4jBTsgQgrnGNP7GM26ZR69mrYXpiEbfrkKeNoULiy2EEfRy4PaHGF32JRpiDRospNMu5fm5w3Ydb",
  "key44": "41cpZpA5qid7vvfoMxPRmECmHsNaX2SraUNaa7zyCpcFqo6HKn8NdpojbxZYEJtJRMKHZnpqhZ6n9Vpu5n7ELdch",
  "key45": "446ArAEaMVQCZxRRYNnTnKdeLwqQ1ywLMw7JdpWuD7qVUXEnsgSPAo6dTeTyyQx9hjH29V3Wt23dYwsBDqXjpWMR",
  "key46": "45CCKrGTQefLDh8Rhtqw3aK5tLXt7Lvpu79t4agjCNtesd8LcSBgXgqKg3rmbnMttDgc9KzCnD6MyjfxWygCV8PK",
  "key47": "2wywCExunpAgPuNcDFEcoQyMaHNUSFiF6UMyBfNshcRvpoGVxcCJwmRnC5b1beduC4fohyfo6CwQi1vo9iFzaLyK",
  "key48": "4SA8rRZd34PDtPwuYJFwxz9PpTtsEXNWfaCWRtugD77Dw5aphisriUx1mDTpACmEtjncsxccFpvxpTrqzFt22JWu"
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
