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
    "4qo228Uo4AU7V1J65WmmepiMW53BjkNgRghDMZHomUfb2vPXDoCqyvGaFSjSamDzjcEk7xLeoMisXUoHgfNWBZbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CUpbzQw3F2F5y73dKeu3k69y8jMhrRj5mE7fs5N8RntPJRdrEWfy6FqBLghDJ1ncWbcpwdL2R9StLdfRQQbkn8H",
  "key1": "3bYufsxAEwnC2zbG3oTBt8EqzRFiTTNmCRJCcBtKr9xpAoCbyDhm2jwMaZwbZdAP56TscPe3YY5McoZXXBoTZ1mM",
  "key2": "3bSHkNizbVzR8LirVzUfmMUULSYc5fB1ptQwspKS2ejDG5eb8H3Cxg7TFe9BXt5dNBfTyNHe1JeKpZMoFHJVLs6S",
  "key3": "4M1frCzy4JfUCJbHYNQTirT4kkSxJmmuqQ8BeccNpGY4fcjpi2vdGH8pXxkMi9aXYambiw6qNgepLmYW4S3dtQxo",
  "key4": "374UtGV49J5sWSHaUgG5P3p8urcPdwWnC73aJ73BiWFDtxUjm4RMjwCUcrMZUvA1VsviRx4QDEX7JgVKe9eoTfmr",
  "key5": "3CbfYhADjpVik1sHdpvnu4esYd8nCdmAPA6Xs1dJTuzN5GUYSbaFJEF4qyWAV3tU4B4CEQH4QH8NS3rYynrLNsum",
  "key6": "27qSvPxSNQwUbkD1FSwWsHcS3a74AA64LxRhNByvPgQMaB6g8NZc6GkLEa7EeooC3FANF15DuS7NGrWaEVTZQgSL",
  "key7": "4QFJvfYSxPoaD3ejRBcJ1wXGziFa8XWnaFHgUiWbx7jSNbWKWvprehHWQR5AJMrMTBTohFxvgrfa7pFmZCjLsarL",
  "key8": "2ntk3FAMTWZdqgBn2EbMY7Hmrbag2UJBeEJNWMhHcv2G7qE7fcf1csTgsETsm74iknujDg76oN4PP5rQ8mFGibeB",
  "key9": "4kPfd4uxaait6TR4KsNsgkDkaxwdzT61d4wxTRAka6zTdEUQVfbRB9s7zqtN1gpuraUCnmhhK9hTv3UsFPgidok8",
  "key10": "1bLjhx61wSohv1cBFkw7FRRQUK3G5nBbxoAsyJTakHT6aCa2Wn22Dzj2cC8NN2tELrFAwRx8fvpV3fxuHPb4wjd",
  "key11": "3ru9HffpjatAL2A1umWmM4Rxb6htcCcz6ipLE8UVfCWReytYnbSdT9RfLfqBWM4w9zTecXn3VoypnYJRNa4gWnrQ",
  "key12": "4WJLy9fD9f2UjUZodwwMJ63bmTvtuUD8xpw3MUsq5d9zaShg1ACag8tobkxZh6Txj1aKtz9UupKQ7kBgbimzSFk3",
  "key13": "4ZXim3gpYho1dRRR9StszpxWp856VXdP5utXUCKCxLcg35XSqhDt1PBbWbTAimfLjhqSRoBraVmJsWzvBknvgAV5",
  "key14": "5S2Sd8XdaxSnxw2Q8be9zD6kMinuXTkdPYyWdmJZZdLGUmj6Xshv57NsnG5Ceqajp8N1aXgXym4NXAypErGSqssq",
  "key15": "631v6GeKM4rqgirDzxBUVau4PdPxiMeCgdb6vjsYQR9tFFB375Wx2QLj2uMEMNDyRpieeCQ3XPvBfFWSeCpaaZVm",
  "key16": "nZGpMbsCE5GfYaAxVu7MPZMFCBmXYkxytQeCg7y39ee2bUrpawYHRDC5SntTBimkExtYoKrhx5oeDLcji4xysAB",
  "key17": "3ejEx4JDBxG4eFKPXKibNsBwEcAku5tmFAGCpnwCuAZu1A87M2nhPiU195QUMzhyxF1Btv9VjLdpCKrs57K4t43V",
  "key18": "2TgNvnB2R2r3kxJrY3NUYU2aD21eSNiG1J1yJGpNDVPWf66Y5kahZ4v6KJzgAVTDEuNnNom39t61rqgXFVGXTuEe",
  "key19": "kJnTLgbA98dsaPiiDyMgGX32ba81ThH6zdUWdqtbcSHRTyRooF2bPDfeAAay9UigxPXDcBJHpSMbdZV4i6NKffH",
  "key20": "2uakXpbE3Rz9XucKGXDBT5iwP7GVjNJokf2ZPvDUi24X9P4uC7fn1uwUupSavhzmxsT52tzykTxSXqVtC5uRA1aZ",
  "key21": "5NBw2p9jn7B1vmdLTh3ndDB9yJMG422sxNAowpiypw1XAXrFVELHsLS4AD56KYsBn6cLT4Avw2vbnhwe2YmxRKyh",
  "key22": "Wbs8WFkPcU7hKR29ub9vVRgjSycwmh7tCk93nqMW4qmAawLnKDjEimWPSZzEbaBNaKUQf8uvr9CeiVNHEZUev81",
  "key23": "2vQA4zisTZQHryo6cKRrctRGis8rByhuSe1LB83naTeBFNoPYogREKg9uustLZBveb5tjQCzT3rpL3mCMZB5HRxe",
  "key24": "4FKF6k3XXtA3SPrFeF1RWVMjERTrzREGXjsr7Jpby1oMFDEUBWi2uLRvZkDfjFdmRWYvy1v9XKsmkqyi8f2oYxGH",
  "key25": "3fGPhpA8c3oCrs3g71g7fDBou7iopKRKrXXiTGpnrSzgJigsyCvGYeVrZeLVx7CXuTcewH8jiEoZWFhg9NTzyV98",
  "key26": "44hXNJrYDepJWSsnAsQ5weFBZMTHfUZGg8CyijjUhr22k3SoLWvTJUr569pKwCTj6qPXJCue5KwX1JwBMchWwAfN",
  "key27": "3DehN9S8kciccser8eVAXsJtoSVq8T8Nz83rKgDc1bVMdipmFdVQboeQNEfveKbAYwzwqpeTCKpszxHfjn8kKLgs",
  "key28": "2WMV3D1FsQkkfbYMPVRWaKQeoQ345FsbD74LPNY59wScryDdL5GMHgR52xVaCyAjv12dD4HHaVu3rXTL7LAfcFCL",
  "key29": "RbuW1BABUJj8e8Nn4jzuGfzi2L2FocRAgqGbZ7rXTBG2sazc74c54CNym8mdrHLf8bW11WzCdd8JaprLRfC5RyT",
  "key30": "wkudNfXntVnMLYVrWPNuhoNry6et1d3PoZmRofTxFHKJjV3mxQMU9p7AR7URD8evenzyP3iMzKaRMbjC9F5KM4P",
  "key31": "3nHEYYcBBcD2ESKLNQXm6YhcDtxSuipSf5ueZDDdLYn1hbefnqjCMYVQeAnhVwpHJSVUKHM4UH7KZw57T29Dd91x",
  "key32": "2tFHpkaKiM6Uwe7JuPSBsorxhk8A3wNTEP7dW5tC8w7MiLHSbruERHCYovZquYzT4nBfaSAPxDWr6FHk3MUDt25x",
  "key33": "3X2yi4oF658K6b497hNiPYZ54HCVJdGqK52q42ctLYxZHjdLaanp81azpaRdWrpZJyQ5XPikbw5Z8M5uFkbUU8Ru",
  "key34": "4sbVbhk47peU1GVkZXYgkMFMxNdj58d7wGCeRWEWeTXQnfteNx6HCmLyjkLAUypY4PCp5wQ5AehrrYyLqgpAgV7Z",
  "key35": "3qt5jdw72v7edxdAkqDeZqu6m97LjQXHvetChUWUS8PkHWcKz9psc4HUNU8qKb6CRUqzPAtyPC5b5XKp2CgEtPMx",
  "key36": "sL77uygopbCz9dR4EpbsXLat1DU7HsZEoWVTPdQWWmxWpPLpXgKQymoAF2mxiKRPQGqbKnoAvJxCTYZffETQxvD",
  "key37": "4i6e6xLBTuCvjWCbgRdnzzKVa9SFGkuzVAUCxVYajjzyyiUhNwQ3P9vvRUEC6STvKEzokv9ockAPwb878NRZz3ZK",
  "key38": "4mrbJXLXsdyGqQ2ud1FEHD79B12W5kfnABY2jdPMpKZWLxgaZc3wR3vJdqpK9W3V2UGq4KHyTmEwicpa1aC9af2S",
  "key39": "3VGhUZeF9WbQQyuyNuszejfpkWxWVYeDxBaRv8gfPhqcLbj43iRa35R2Lusjf41hcgmbcCPZC32ftsB445HhfLAa",
  "key40": "5nEuPE3nS3znzYFWfsT34d2ZtUUEJRf7ZGJRmBXic6N3gZ4jTj6iHyvsrQ63aSJb92G1R9ihkc7aMcrNFKN5z1Fj"
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
