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
    "2bkERVFAuCtjtVa5RqxSEsUeFP2NMgFyeZBvcb6XwaAxQjtoy3xNjKE5df2zG6KVZsJTaw3db7T87tPbQKE2ETYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yEebAd3bpAkVJXDkEViDWUYFNcxTAPtbiJKm7QN166Gnn7Rs5gsYFV9PAiqWLzfqvCehM68UN8B2Tmsiw2vFrN1",
  "key1": "3io5bzDXpqiwmyqkZGLJZF5cSTX5BzQna6xkdGCsWCpjZFLnf1WAzpaL1HNRAXrpVjEMuzFqASAGqk7Y5xLdYdgW",
  "key2": "2dwQT9ZBDFzaS4UTUx1UithESz5xetdHPAMQQTHEXraRZBki5gVxvT6zW4uj3WohtFuo57zhfwW1H6crBuKi88j2",
  "key3": "4E16e46x56RdmNBU4CtxkgeWrPzNZhJaG6HbrAwynk31dKCrrRfMgCbpJfet3odLTAR5UVLoguasok9EXGguCmde",
  "key4": "5gRPc2Q9qcyV1vodQnpAX6iGDiRGDDAJiFd7BhY9uUqqtRt7zRkqHMmL3oKvyM18Ywb9i5cpxxjvfiwdVuNN4RiH",
  "key5": "3uPYjozf3Q9H2iuLeNwfMrVgGJoQoDZYziL99tqbD1V3hJRCxrSYCak4jv3jymsEU1qBbFLWDjwXHM8AeYdGkvfN",
  "key6": "Q2BsgwxLwggA2HEYSrPpr1grR3no7TtnhsMUyJX1P2jDQ1724jdvKrxbveTWDMRev26LcjTDBJMMKKRrEUvjxDV",
  "key7": "3ozZNwKAc5syEScKgiiV2SDFCCLGEMjBTP39iLhmsfgyjcVmay55q2Ldg8k8j9XvyLacJAS2Njx8UpxxQnRALdM2",
  "key8": "56UT231vM34csJwFZj73hMMXq1frbaLSX5t1bSYD4qeRaU3kBjBV16miQDi9Dx6PDbQSaGiPYSe9FeQhSddP1oN1",
  "key9": "UUHNP9x2CT7wsns6THDwcDZdyS1tr1oyfbDgrY2Sf15sV4tNv8MT3gvqFubjJ2tTWX5Hwqk4Pms8sYMWKrkoSbT",
  "key10": "5ucB7mvS5omL4ovoAckJRjzBxSAurTqp9znKn2cJqSVkVJuZGJM8v7ntyANBPH71j3NUp7EzeKDJANfUEqAi6qmC",
  "key11": "5mEZDkE57tBjdbcctJCBhkNQuxCwy4Mw7Se7ydWurcRVA7dN1ZkMEjL6o46AhFBxHkHSdUPmisS4DCmH46qPVLVM",
  "key12": "3QQRsF67vhbUYptKFbdTEFfPt8zttt6qWTqBhFTmBvX6s91wZANzPMaUvsq49ysNhaSwBJ9NMAD7Yjg98Z29Msf5",
  "key13": "5BU1dD7Uz9PeDtc4hW3j8bzwPief6D9Tk9Cx3aS85CaW6VYpeymw5uQHk9ywnc2x21baEFS6rHYcufHEeasN9oPd",
  "key14": "3ieEfhyZf48TE6oYPbVRKW5PQYwML8AkRvkZeCJMff6tFevTUWwcNRwjM5HKXhW8m4EsU89u2XMDQttMveVSw3QD",
  "key15": "4fvKiQut3ffPXU5aE7xU8Dz545Dq3mwrRmTx7NHREiu4DzGG8QKv6ysBEHMeNe7njuDU1P5Nzu5CF3fRw8N5Hkmm",
  "key16": "38qHLQFYJEyb5KKZHSQ44B8fTKNXa6DScZxWsu42Lcimmqxnng67N66FzrsVHS6TeWPCmZwHVW5nRoRQnSm5ZjfB",
  "key17": "5CWn1fJqkhk43pcS8LGVm8a3ESh8q2ptJMTQnA5Zu5HcvJbM3KvXXRXCiGMeAqWW4Pjk7WshsFUhDW5x4JsUM91P",
  "key18": "3s1JvS3a6is2uTDCuzDULxW26qzjG95WXnnrwa8qPQiagtmBMWcaMCiavukpos9Ro8PfoQQokFrZGVNWZtPT2Cyy",
  "key19": "2Y2uF1pDC1XvNy3KYMd8cfCDJ8YDkLzZJaA2EbUtagZgEbLjFmWFJwDQrHwhNDUCQdKq8bS5iUz9mio6gzkDiGRM",
  "key20": "4EFq2dv4eKyaXoT5yr1kTGH5XQXXr9q5wn3pESDqDQrvLMVGFXxRDyXRy1KiGGGVQ7x7AHg3AcTMK4gC3rmXmqiJ",
  "key21": "SnnFGHdhQNkXxqKLaoEHZqVj6FCJpewfEUGWFpyFULfBxXYnJQhjCm3B4Bs6sy7K6jAypVWEagRkUa98kFoeWNk",
  "key22": "34x96kGnZauxtYKWY3W5FhKm7KvQo9FcjHPQ74PkueG86HXw2qsc5y4LeDqdP9Rr96st1WozfCXPbw5E1zewFV6B",
  "key23": "2XGypERV2cfcdBs77wJTpoN9VSHbh2Q53r3fhh21jcxKuVvfEZRAEmRnWLd7fg9gDTxDVexo7rVivoh65EYWgGAn",
  "key24": "3ymS8YXFoCQ3U87vq5xSnYNHPJe5Ahpwg645VQmdMkACGaPGJWtv2gFQGcjuW69zwbx2oGwavRgWqvFpUmKtEVR7",
  "key25": "4woPMcSBeNDSJNzsX9disRRraiqe23kHHiRJphGMNRgMu88mdTgr5a913BqHuwo3b3LBfkWi3C61gvJ6vM5CsVgP",
  "key26": "4qyZgeRaJ6g3kKQGkU2Tt97covye5P4x7oLX1jhkWiqgL6hS1tYvp3eYf2X1ThYZeqCEyKoRyP8a6FtsC6z8Vqnt",
  "key27": "2XDikyPnB5YGR3CGxyvi8irJA6yEjppFczDBqnxDtjtTSiC7VFAWWTehNq2pNgVf4XRp1FbNjLj8erfrKUtLeAri",
  "key28": "5r7Bfetw9jsXrnD1mCymuJYPLAgGUPm3Xa1p73LzjcZT5yQrPZUPjg53k16dSDtGuYuB7GXcbo79pEBJVCDsCpBZ",
  "key29": "2sEp81fXZFPvXJyigURtTAKDFAZr2k7gD8foaEFHA78qgZTpQBpWkCjqBLkn7iWJ3XtugL6CQvcjESeE1Bxw8mQn",
  "key30": "Bahiez1xEQtUhoao1jFue3BDMx1V6rNfDrEaSkctdNYJbp3bnmntTe7j9dDjMyPBMqcGZ9n8bADGnDuHrA5Lac8",
  "key31": "4fCyyb5aVhuu1wG84yfhBbnawCH7bSYCVujkkwYMmXqucnzeumz9RhuknpQuRAGHVNRk1k1MBhttmgRgFCivwHXQ",
  "key32": "5mraTPWB6YhDCUNqzWHM1LwTg3ideAGguVCVwx7EWGEH2jb8QsgUwnGX7TtsjPBUEfoCvreEmxmPJQpj9dFv5fJX",
  "key33": "5jFKKjugppCW9RcHfXofLvRWknh6xxPbevNTzFaCKWaBseGxP2E3S9tbsqh98LbyLm1S7SPJbn3PTpVbkE8kTEp4",
  "key34": "2Y4RmmjrT46VWLFmRCM7QwewoWCa38KxdJG43xWtJNuBzmk4ivJnHVPXPrkqVJuM4EAhjGdJn5gncVU2avvGjFQ9",
  "key35": "2h7EakB6bPcJNWQwGFirfDKVxjh66BRfADyRnjS6bsCjVFdR1Vjij5BGkvdhvxGKq2yyuD9ewmNigf3WifhUeRPa",
  "key36": "5557KGWuaf1t38Ttr5Z4H9wxESswCY2uNNwutmvuRACDCsNEp2JoEHQG536b73fewtbW6GqffQd7s81EwKwgtuLd",
  "key37": "53KayBv14d1PyRvmkbkgeQHHMHXauRyGqtPPpVC24BEcY3nKyLcADiXFw8vMcNVwwYjUngGw1Q378HH8rxg2rdnP",
  "key38": "kdh9YGkhnCpwYbLhQeMBoVqUVLDx5cWwmd965qfxEw37WQLHpQtRRH2env3BNNP2oghbuG92L2MkwHJkpNRhgjZ",
  "key39": "33stb4GP6Ng2DY4KZpeJbCHfU5GFXa1rsmFiJt8rjhFjQYvifhpWxkApdQYgbrieSeAMB9si5bLK6qhAQHzhTZbk",
  "key40": "63bMjvXydywXQf3y9nMiyDCFgn4cSJxBYgv6c7pV7QaPNExBu9hJerpGSGkRsgXKdZAwFobJgPoCSssDByH3TAvV",
  "key41": "5BUy4fvhrB9SNyCL2caQ9t46JH28iAvN7srG18YBjNo7snJY54axF6mmTdhYzWf3b1P17bPf7ixg37tW7PLBehGV",
  "key42": "5JZajdZo1PAEmGJwCSNABbmfwEiYWf9ahq4WhbDzp6Ay9TrjvpH77ZhMUSJrKCrwnLBKrxDeUNMxsPfwY4wcXbRg",
  "key43": "4pRfjjBZt8cKnZBM7eV5KwLTrrjXVXxAC92QPNoeHSGUoSsfW47r8KMEiGhAvAkPn96WTGkxbB2sx4USmCPAPXuE",
  "key44": "gP5hknowRLUvnAZ9haNXs8NAi4H9ZCRjmGz5UBfB3A7zqbzh6ZwYaFJvSEBzE6zeZ91BpvzHXVGegotQKhJx4oU",
  "key45": "5P8P1xBd4EwX4d8SQ2wo9EZwGb7TLk5z6fSRkWHz6bgtVnhF3dVxyp5gBpz78YnFAvHsAA6LyTsYj5oeKXREMDvw",
  "key46": "38XQCK6krY2CGc2hk1yLBdtiuiXxZ3MgRi5jGpKTXbMykqsEsaRVrdR56dYdC773qmFuMmnsKAbqZo1sBT8Gu3LQ",
  "key47": "43DFEmUrSJDG1vhbQVgtEiRLs5WvEQ7xCAh7jKV8TJUTioRBfn8Ljau4FqyFBrxgSQrycsZX83koQnTmgRLojgGN",
  "key48": "2kZHo3Yohq5zQp7QMKoZicytZib2qPwAG49e3Ybn3Eskeziefa4Dx93ydFE4LCeRT5kbX8NxGY4zh91MtPh5xrFZ"
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
