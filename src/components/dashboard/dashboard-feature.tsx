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
    "nF3P55F1JCzk3yJv9xPHYUEyne1JoV7C4zECR8e64BJpds7BC59SCEDhhiJpszjm9374Tn9CACvjiCEMLDbdCKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42P1vMgB5pU6hYG8Ht1SFsVgTBcyKgVX5KWGda68ShyTNW4GrRdb5LHDKBE8To7WrQ1MnqdTGCNqLtcXtFHwrV2N",
  "key1": "4sk1MrQMM3SbMtosTquLReQtKrLKcXpsz1R4PxTEqvTgJXRFdt923QK567m6Bq8ErqVL38t6iAcQzWfXHm8qtQuu",
  "key2": "5n17W4ghpwZR6xLcVJXptpTnVTW6ZXgGwvdMfpx8BRMmwo6nw7DtpndKFFidNhsddoaX8xiCvscMLDZop89kUJni",
  "key3": "2Sm8xNoB3M34WCXNL49uNcEnXDoXGYYMiD3vwaLvLQb2ichrEHczncMLZR14m6ZUcgRAtUJFmg7ZKLhMHRV4bofw",
  "key4": "5JyedzGDwLFuuHueYfRNaUfXU5nEfvU4DUwmfpRMF8s8f8NsRv2cJ6QkNN8xnEeckd9rEBw15SRbWRvNeonxAQES",
  "key5": "5YsaZg5XRZFR5JUJ2f47QoLppK29f7kfMrY3uKUPC6BtvUTaX3WRytgF1zVto6vyMxHkznURSbzjjLbiatSeQPkj",
  "key6": "5NMGKdcu27Q6Bu4CJece8phMpjn75TkVSgZvVrjeJrYVEEsphjAkQfgTy18fo1NdZDKrgrBHhEJYWkNgcEgDJ4qA",
  "key7": "oWWGBgg24qjjyWBJTzCj6jrxPPWidAXF6wKeq9jooUxTpCw6pDjeLMxcWBtF66gHh3oikNiGPitHZgoAyfjq2Sb",
  "key8": "3tmcaJhNKtjZsHYCgciqkH5mcnnTPHEpDbFjfhSVAKnrHF6EbN1VhKFNH32RuMfx8V81LxDCyuGqxfgGygaSXK1R",
  "key9": "3CBuvNF2r3cWxuNtpzayirS4EBkb7iTocEzwMrY9MNk9G33FKrXmzdA2gNvRPfwoKmo5sgJ8B2VGQoFYfpzDupZn",
  "key10": "3aRyG6bVX6nKYn4AjdeyCErHYsb1NsuLbTEZ2NuAx4Sn6nScocz8QGDfTzJDwnnAfzSWE9Djgmd4SpPMrCW3HBhV",
  "key11": "6324m9d6ox4vXWLcLpr9Gq5FfwCicdHaTRBmX8aE7S6kVZgvgF5xSs5Ak6Hfka2Uy8biESHrT47EXUNXHvJn8xQy",
  "key12": "527jXmhchnDNCkBbf4M3Sf7gXf8FR3BtVKgbQGPMbrqbztCty1gPuBPL6h9ZU1UtpTuPLsCu894ozd8hv1fJfDpC",
  "key13": "2JgQso2ACypwC9X5bgst4YjsYFbJoYz7W4Grfj9mC7ZKh6McM2aaMoeYv9hWk8NpNDB2vUcCxsmeGtSaLeE76uHN",
  "key14": "3C33dur1uDVoykHCXMQmsFkvuesRt4bs2oBtbnEfbvnUBVZcujLk3mT6qh5oUF7hBPFAXQo3kiB3gbX7Sb6rgVkR",
  "key15": "4NCBdqusfUBFJmnzrUqezzh9ShjWnLumt8ddf5Mcc4xjsHw7WGg53oEMzYRurMGCf9KNuzLdVuKE4jtzrHZrTCFY",
  "key16": "p5Kn8PjqXCCs8JDB1ehAzm6wKmHgdtwwycp3VpmxG27h5wVARawqDi3x8DxCxr1cRtdgQHbhngZsr6qaUnGyuiQ",
  "key17": "4iAtiNtVn4q2oodrCqgxmUVsCXNc4v5SwV1NevmeKTfHseuUa4X4AwCbmzZobfDrtDarthYK9M61bQ7PFhjSz87W",
  "key18": "2wzbiBQLUNTYLgMGJFw4fPaL6EtoXzhoS2WHUb4iLJABZb6sJB835Ppow2YdBeEvqSwcbNczMNEsWE4MGLomwrdm",
  "key19": "5MzSLXAUWDqJ6cviLa4nBEtiAiQPzgxvx9NoHQtwmrhpRrcxeeqbajTt3CppkMzdutg8SNhFzGbPAmHaxEmgkrYB",
  "key20": "43PkAjoWwKuWQuTvRmMvhw3Prc1YEsPfiVRaW25mYasUVCBH3hcjLY3YGNPvWt3NBPR1jTdZJqbehaisfNoKnQJf",
  "key21": "U7gUqjkmiiUXSekX9nAVEjXpYStYJe8z11Fk2nqWnu9ywmWZkbDjYwfjKwSYx1JrStm5cyrkVXTMpZVSQaWeZqa",
  "key22": "3aihrypGv5ckqWvkekAcck367osLGY9YmvbCprmTqjxV22wLpZ3wDNMSsNE914JTJ6ye6gBKnKLkC2Kv5BNn8QkG",
  "key23": "5weeCzTjhki9SyxQmeUpGw28FhyUZuHZC7WyrGqNsNZ89AzAqDSh4fpmE8HywGJKGCzvDQD335dabofTtqJDnvin",
  "key24": "3L6r8Wutc4puUHenLHGkQKjZCkpAoYeJvLRZ6M3oU3QUD5Xucnz6RcDUEP1kFetsz7AiB6mP7XHyWouncUmQbvnB",
  "key25": "4K8uN58xw2kqvghZJcxvFCCgpyrkHk1sPXRY7x5xkYYL1k1AUAVfM7BRHtzmYh4as6pHEjvh85mioe6Vy3LVDBoq",
  "key26": "3U1b9puFBJxMvypEftkVwU2ESbArHnDeGFc49Qo1vy8QsvoaPAcdFmLUvxjWFJQFVUzsru6JozPSfi9UCwYE7RYk",
  "key27": "3GwSc5fDiaqpsKMftiZtf3Wh8tnAYRuAHuwJNvg5rTJ6Ntyj6HKCmaxERTWpmvqx6cBU1r9UZEKtAiEwKRiB5qS",
  "key28": "EwEcpcJ61q39JwSeFgXnUNhDwLd7WgnPvuyCTJ6tJzcr6qoRC3tTerYWCfFoC8UeDyweTBmud8RBzbu6iG1MsVa",
  "key29": "2WU5Ssho6nVCrA2dszENsTxNpcsvSSBN2Tuk1bcj6Ve4qqFhD6ketTELFxDMggGN55EDUZkuBzejAYmiP8qNJjui",
  "key30": "vXtP61PfKt7qAQe1NNTqCiqFWTWXU6sqQPh7TkHiRsGaVsjdZsnHmgkfcGRarFQCDQRwXWygkM6EMwvGjrotejY",
  "key31": "2L8QqGDFcmtn5xsYnk2fVuXzESYJCmcegeRpFH6mfwEcUr6XstpRGpSEv1V8Zo23sj8LCYeMiwBT48zub19rtFPv",
  "key32": "KrwisojmGSxrGPaPrqbdwBGftFsjyXALGMfHYuz1oqZurd5HX6MYcVFj1r4St13eoJPjwodte4rcvjxJQ9XoKc2",
  "key33": "4RcrAUpSSxfvkvN9SmSpPrQudfQxPQbbtffSd4yNSJf3gjk7hTGfUJiR49qCdi13HRFJEQbHrpLm1UbhZfPb2hHA",
  "key34": "39hnvrSzL7RLv4nh8iN2X7ieE9GzJeniFZTQZh9oGve5RxRaaykxMNsnmDeFgUqqB2fhkiGUtPKLQYvkBrz8Fwiz",
  "key35": "x1LA6961hkZxD2m3fCqmGmdLSdk6GhuDwjtbFAXun4S4ojCArjRXdTdBoBAEHysNtmVt3hymipgkaPJcqkfEE5U",
  "key36": "3ZkU2hZnPeVZtBvCHmenNJwizintuEBQWcJMEcNMksLzdSL4xTTxrQsC55bu8sQTFHyc8RPTuFJqVKSYXD1GpjAJ",
  "key37": "5BQWPsvkXLwThLYNVUfCnF54hzDeZP1S8gHxkD7npWMQbsQnXpCaqkAqsWrA438pZL9eHcYm4a9qz3TNqeWqeUqy",
  "key38": "2XtWYihF7ZycVAwWrMnMNmJNobKbf5q4yqRppUsy2JXiSsSXhN2hFbra27nS7TtwG5bwLBwWnDyKckUXSGjGso4Y",
  "key39": "4z2rsq85pdZnTMJPmP8StAo7QfmDECUKWNWMgL1nPaKC8A6CusWU75TA8UzVvqsofCoeAd4EHiZxmm8GU96NiVuy"
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
