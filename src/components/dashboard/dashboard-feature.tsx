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
    "2nc6gSxAazLQyL8GcP7Tb6a6EMRFQGygQUBMfaa1xQvUzfommmdWTcW3LzVA9P1wiX56bgbprZfATEEjEVJ4234f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HJy9DRoyXuEiit7cqnAC8eHagwoiVZ3gBorJL2q57oATVG8p7QxkiNGR3fB35wiTQG5nF6952S1H6353mmyj6i",
  "key1": "3rkvF3idQwv2A6YEpgJihNXyMLvo8p1dGMJryWNSogJMrw9sdShZtFafT93xmvTXYHbqFh4LweVsB3nPBxkfgsDL",
  "key2": "4c52CU6jywBTrCPT32uQbZQG9K7ANvhWhT2u6RPu1rtmkfRHBjK5YJPm3mrXzJKnaB3ahQLuwUSU9goqRyKe6jid",
  "key3": "2J4wtTR78AQ1fZFXAouLgS6scdKuTcLit9qc1zopX2s7MFRMVRNuQedk79VumPBZdu27X5XNsN56yEXLoWdWtEDz",
  "key4": "QgtxiWUhqwAZGvfkjRLXk3RGC95PfFoXuLUtb4m8RqRo9n2paeVDSmHDH7vPgUkBwHXvQ7UW3XCoUPDb5h64qvM",
  "key5": "5b12yxRDTYnuanZemDe6cgLWpeAvsoNDdjLwdb5di6qmV3NUBMktLGnHNS5wRch1cRC9ZQwwt6CS87jdGPVpJjst",
  "key6": "DwaKfPysMmBEUPfkjm9yWH1qpCwwrUi2ndsNvzkdMiYGyJW1MTccGv9cKY2Je7JBoRfJbQtwY3YGFKPti1aWTjA",
  "key7": "5HZGiUC1F43ETC4FCiAa3ZQ8WeKeKQ5xdm3F9ZTuXZS1nSvRwBPhMfdoiLqmzRM7uyq7vfk64Y1uA1BPfiCpGNWs",
  "key8": "627WUqrJC87HRachUFASo9f1aZowQt9Aw8zhkh3ND6TC5DJAiJDy3jFW9QHBtvyKz3Ua61L52ya8qwJh435z1WA3",
  "key9": "34kKS985dxNjzM5db7wLuDA38kWXfuMYCyb6scptsscV5swWmbsMt3NSW1dmQoVE1qi7u9K33sUvQLZ6CDBV16s3",
  "key10": "XZf1u3Segd9SfgwwyWZSqP3VrMH7RMgGmKcbFUbX7SJpy9YsLGdaC9JEQGe64zypcYs9f6gseXe8cFdZTrh1fv2",
  "key11": "3uQ9k8aHXBSW1Fa8hJ7aFKjx3wiuSs2BZwubWYpPkJo7phxpvytK66xeMYAbiDV4izUtp9Q2q6sgnFQKDw66Dtr2",
  "key12": "4ygP7TvDcfaFg4FqAnHU3DmVSNzJE1uRPHFrqKWz7pSJtBx7Xn3dEDPFebvadNjdggGF3WMKEfky1Dc4tzYDFqff",
  "key13": "4YUiGJwHMbnzkkt9YmDuQJueT964K7HGG8jVpi6ZxtYsZ6GRzYTGvKMPRVmikvNjBGgbYafHYRQxp4gzJEZkk2FD",
  "key14": "3SKsEYAxsUZWjSFDZyLJrzkaL2kPEJNVWTrpMqJh2do6BjMGqGvgoMJkzfPb8q59WFZ6kTQjdNYHmeC4YKZfQpVa",
  "key15": "24DaTjaiY8y4kij5QZVJbFuww9Tkb4i6C1PrzddjoXrRDzenE5M359RSufUzbHdHHyY4yPGcETcqMezmBhe6fbAT",
  "key16": "5ELdVZKhSiLBjVza1ybQWNgisVj96hvUaMMhJ7p9icyPi8QUxQMF2JZLam7Ssvdcyyw8zMyjZfSiTNXANys4ZE2v",
  "key17": "63dNkJt5bGdzyd2gGxQ6N93P8cgxoDABEdpJnfFVQ2HQXLt1z631b6hbrgdcz7yUEtYFkFeSEMjBVmPdcoM5xaFS",
  "key18": "5XCu4bcv2TgNPjzKAXppat9dnKYVeF6UcpBX3s2qJ7VuZXbKwMzDuEP6vfChYbSmKyhPJuafBmXDskvnJRaYkERg",
  "key19": "544MVQNpQrFM5bcJMYK9wCDfuCX3QsGqkyav4aocMH76ceGVBnhTAnzi11Zx1vZWGEbTuvd9Vwbvnd6siHpJKvde",
  "key20": "526QSEiLfcSvrGrJRvTHbbYb1kqBEaBtgbbxh8y1KVimdMB26F4zdwMLKVMDMmF5zqBJnf1p2vhimE8X47JqJJKf",
  "key21": "ERpQPaWAS1xEVfSaCcPop9eNd5etZHngDt9v52EyGMgVjK96UsAYF24NakrRA8DtpSH8kUgtJnwMcbZoRBioTZU",
  "key22": "4shHZfwnpahEdWt5FVyk5ck1GRP3BahuutT9db45moBMkjV1fJZbJxLRkDbNs73SFo7Cx2m4LvWY2b38YgcSzqDF",
  "key23": "BaVxns79rsrtny7Wgg8nhy6DvKCBnchjh2bKxb4SUPsEJ86sJaRRpgdT4GuXfKtKKZupgj8EXGXZR2LevDGtKjY",
  "key24": "5cSzNuMcK3wsuTFuuwfYCy9Aeq9UQ7g8MPuPCZY299y9csaZjRjnbs7in7RZT5tUyzmiPmtYrp39aRZ9aB39nBaA",
  "key25": "3AHCy47UERaRPsddEQvMjWczTTAG3k7K3guGEqF9xX5VZiwxt1caNoKmFtLomnmfSQP6oTh4sTLc7mA7TxrhUbuM",
  "key26": "2gUujhipfpQXfGmKM9M8thqpPWcNJeapjfAX5ReCGQq17buEBowJwxXdSts6kzYBdzqmdmxduT8TaAgszbG4rZtW",
  "key27": "21nGQUstkQPDqTCAmETarzvBTw93zfBY4EzziQtmkzbuofWebdpQBYN6ZMzUBTcoNHmuSRsNuxsq6wgWy3fWZpvj",
  "key28": "2AbKfzC4P1qy15vtwhCf9t5VtnaKGZNJyCD3uq2K1iWpNEkz1JamNFEEQCbZc4RSmDwugVmH89YJW1fwLyURaoo5",
  "key29": "3rCP9fHKtqif37rUnRrgjX3CxesnbjbDMXyGWS6X7ib6NoQiDJfQ4BdEpPUQMRLhS7ntNPUBDbraz12X6THaXqgx",
  "key30": "3Gyt15QF9yt1pSZJTbwsXmeQ8aY8HCm3W5YcrQGsqJ75vT6kbYLkxwA92ADSJzM2W46cEhFRgNUbGmWnQeEGumuL",
  "key31": "27Zy7odPAP7KZUg6ZjHdxne39JWHjjkYgbSHYH7poZ7agjXYtacPSuK6g37AKbFJckbpdcyVhhV9WDGmRK6WUTdV",
  "key32": "65wUNfSqRaWJLsZsbUXFwSpYpvefUvSFPYqriku5c5UErZwFaExrFsAHytyt4VigStZ1bPKRF9yhCt7BfREbS7q9",
  "key33": "5RiEr9UJA976nvfMhn9K37GGsRCSNqLNz7ZEp76KDUf6upAaZDpKuxjsTKrrGnntRNNJGAkaqF8HESYryvjFM2YX",
  "key34": "4mbSnRrs6apnnhcgggnVQb24PeZkvLwvrpkjf4DMFLniWTPy9LbLkxS9JcEBCdNkAMaXmdUCCpLLMcobDVS2K9TE",
  "key35": "3FHA5DapZHbbG5ofY6LUsHLE4TdadNmPRC1spSw2FogyNiGiAcyNhtsjMNPGKfr3a6pCBMwdcWA3GyvAuw9i9J3U",
  "key36": "3cQjApG2i8zY2aFEycYt9vFxkAMGeDtb8rWj6NmDVSxSgBT8w672kMSYgZpxFxZmy75BK46JVHa38U3V3sHhV6Ti",
  "key37": "4iBAUVgW7wL8qwb2f3NUMfdT1JDwouitCHABWK15FxpaWfie9iaFZwbz4DfAB3VABDpHzBrUiSDGFJLWt9QkhwWB",
  "key38": "89uMytZxZRXmp2amGa7QX67dAwKNkBGxH4ES7mheGLnNttN29u4xadD74t4xvaj7hksHQSgPHg1ghkm3ki7DF3P",
  "key39": "213QbS7qD3Sb2erdzjrLJNReAwcLJkyyx9JbavBdXfwU4DobGTAL9DT5y2VMKv9F1AraAojCf7dKbRhyWPEdZwxs",
  "key40": "cPrX65PdLBWSm5bsASL4xtczVKZ3EQTYbjHM4DXPvcPb2Dt6xgRPr1gUFTYG3gsCvkwLjiNpLgegMcieRb5iagD",
  "key41": "4pkWk8xYurs54Swf7N5voKiZp7tWR4bYXhQ1KiRPzf73Af4FozyY77CQNTRUSEnXL3erSdEtWuqh15d4SPLBK8Uk",
  "key42": "NfA7tkPKB1WkregRQz3EfabEQhjefygyecFoC2Vm3gFjpACjMJ8Ndj3aAmfBPxonzFmYTYguzfwjC8Mh1Q3L1kP",
  "key43": "4QQLFJf9cW3wuuxq3DUqo2gdYbJadyZ1rmHN5pgJFwbW9r3kY7XSpJTjx57nt5nmWMSRbvkGMpw4wNzQ2U5VzgB2",
  "key44": "pktsmJ18hs7ZR4toyNLQ5s41koQZkH2XNmjibtH5XsemWsL5GPpjXkTMFZasPTyVDg9hyn4sEzemch5PeQNDo5L"
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
