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
    "HSudC4LKiXbQBXQbr2Qa6V2LZ1SZmCeXW4mJnhP4uz8BQRxitTmRW4wNFno3tJ6Y4UhrvFkW2YRvjZekx7BZrGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uVutL7a9ffgPoZEGs8LRVQ4SitPewdvGpnpGp9K5TvZbNckAQLExzoegweTv4Ai7MfCXcbdkkyatHwbho3W6P4b",
  "key1": "3VTmzj5Wj9j8TCvq3vWGaVzPoPbWZvsRmgLCHdtweHunuhdg9EhimrCVEjkHbGE1B7NQUAUKkM5rthTXQzYYMYLL",
  "key2": "2maCQTANNn6a9RRq8D8Xepv58e7fgZgBm3BnpBte64k66GGRYBXRUMP7vjH8tDDb22XmoGyeLANcVNgx9ixEuiML",
  "key3": "4jDi2YbX4vwQYiVGMcctudZHuf2Y3vs2nnUq7V6HLzZAFKSC2GygRrcdrXUYExyBNMXja1LXB8G8wr1zLbJJR8GJ",
  "key4": "qGpRkcGZFs5oPTa8BiKtcKPZFmBeNqZyaPyfKhUpkS8nf4AWYp1cJu39YDbQghQMnTg2UMdgiq23fYpjQPfvxkB",
  "key5": "51DjmBWFwHnmFd2VbAKqbTEjVyUjReR2hz1Fy5E9d9RG7ZoN4FZqXGVWJcufGuCwV8YtJdg267TrMha6umjhBeJq",
  "key6": "41VUHQBCob2nTEun4PSuSP5dXmuNkCC9AnYyi7odZ1ZVTu8PAxWsTBv4dQbvqYPgjWcb6GCGDT8NQ4fKpoHuohiv",
  "key7": "3sC1z487YtAuarWiPPFR1JDAvyyJPFBjhUuXYvprp1hFfhpEEE4u1mw2popd6cJwzJbcwDfkHRfta6LhVU4yUwTF",
  "key8": "3XDCf3fvd8L3Y5kqay1PagmT53AuwasyAXN7pJvf7SVw7PJxeUM7e4AgdKFjNuVEG5KQjg8pUkmJvmY8rabgxYk5",
  "key9": "2eAoeR1EHpT6Ze672nhbWVvp4TWPj2LoygmuwKL5iL5NCnAVKQDQVabnMv8B1YKTNs69JbkWg1Gn8Rx13VZCtDjZ",
  "key10": "462EnT1F9tBd3Dpvc2pXk6aXJgq7FcByfDSEz6TeFuZ3Gz2JGweMvFdTBnB8BMbUgbSXYmzJd2dLDWneDEUShprT",
  "key11": "5VFSryyBUxwK6H9q5rmnG1MsqR47vxFtnBpcj7UFHPXD57jCGBRwrKMn1Wkh6A1thQnffxh6j7JTMcxqSoTwGNX8",
  "key12": "2bZmuDQRxy6ZG5Tu2Fq921R75ndAYBtUBbGyvW3zPz74JaCjBF9hfJdvEPLztJ7dJJNrbztAKdVNAQoTN8zKyvGa",
  "key13": "5ds732R9N8yxsJnRyLLJsqHWhyuFA36caNhdvsKPFcC5sjhhRqZqQcNoYLDgJGM5HR5mDDsxECrmN9mE72NJNLZK",
  "key14": "4r52epeCLHnHsgkTw7t5nhhC5RMBYq7bwsCkERzNSFQquhKpPFdUSkjXxMBGM83LcLZGhnfAWYuCG3iBtXZBePPe",
  "key15": "21ck68qWUgFidnwHYcLzV4yxP4vhurgweno5nfeJFtGqpB9fCon9bCjP18uhiRAtQrPv3pi89q7hMs3zpaRcg7Mn",
  "key16": "HKkjg3iJVNH4BEZYWVAXisbg5ZVgFmAjnRwjvwjm6ZxUmZWQCv8BZf4ez6UEEoWbY5UvQmfxhEFW31BowAF1QLX",
  "key17": "5xz8o1AG7Wyyz7gKJs24fHF7vddTaEqSzwLnqLSXfazgXPpszMUsck4rmRAfSSG1PbvfppWt46oECz4kYPHqHBd6",
  "key18": "NL4N5doapHqRGpdwJ3K2rkrjyC2hVsSyT6j8KwPrwgwpwhsxymgvK27BM9tqoSed2UqMYhJ23KGLqoThKPUNLBN",
  "key19": "5edGQjPTBbMCdXd8J84C5FqkLSS1UNQjLqUpoV4EfUZ5FyVQmkBufVYjRAzgF5Cn96GtfEHhRw6owg4gRRyUBUdw",
  "key20": "3MZtzdESHqb541D5J8d6yTqS3bGp3wxb2iT73r4SFMtmNRQ56hJbhKWbpsj9Y828kztSiLRSrEHBBVJzGDccnA2W",
  "key21": "1gqjbJTBJbH6qs3WBexpWetbRf8xNjn4MnREWXVGWHyfXwvzz2ct9xebGLB7YR5vVHWsr7BFTuiwC8RymbBqboH",
  "key22": "5y1Jqt2PwUakYmiG9R7BCFjKobYERYA6Rfpv7fSXfifF4UdYamedn2AmPX3pdgGR4mZocZmDAKC3He8weY7RVMyz",
  "key23": "caoMTiADopm9FXd2VUtYfcAcsTGEucM4VaZ8c3Sp74SDjZ6QjMUW3g4c6aZxT6ML5iz2o7NYwZrMCbyxKE1v5bf",
  "key24": "5gqG4iC4r4FDZB3LfNqfKXoodL65gPtRxWg8h4copTxnFF45qN36mdB4aLzkT3zkPVCLxbGss42JmNEZahwfzkZQ",
  "key25": "3XcnoueRwa32sqDQtC257rpRg8nP5FD7M9m1gDKSBVSbEs8o5vgpUkWzUTqFir6XhsnrCagmWvudvdd14fejVF8q",
  "key26": "2cv2UdESNZuyhcsffUJVZtqfKYoyteNyZNAuLavkvHamWPuA1wfAMirhAj6wk3ijgCyo1tRyNm2atkL5PgaE5wAn",
  "key27": "JL9paKCDtRQw1NYLYkzqpJLPJA32wA5jEBgZjtXmA18XeGacg3YdnhPtoPTTprqWbnpRRyuN8diwB5eRugPqxUG",
  "key28": "4nNPVZxs9ZnAuxebViJS6Xts8L6yADWmSCH1Nrd6rdEKoWDbmFemRs96c8TtFuUTQG1T7DCs51rRis8ckQbToY8W",
  "key29": "doZW6M2jr1PhWM1fg6yRiPbEw37Qi6YmEnuTLrPRe8rRJ6XNGEv53BAYc7rLCHAYch4GFBULoGLSUA6aUsy9Q1R",
  "key30": "aDFDAGw5kMaxSeGCeuMF6HehwggkHRaXMN5SeV5PYMzXfpGViB551AaeuVyqd8nSGCW5565J5p2yj7Pct8xpefM",
  "key31": "4dTDiYT3zUwAUvFsn8vsfPe9zMJuMC4KdKtxj2Rs6PAjrAngXqprSEZPrJEtHxSpinpHRXhoHnQEJbwzy6Njn4iN",
  "key32": "3huVEhvV29UfeyEGiSoiLD6UFDJCRCQeAgjsuqzbj9W1MVd4ywzQoXyzbQuaTXtVvhdVb21cBfHr33hHsjx8iBTe",
  "key33": "5pPLfowersJCnQhQakFTCYmN4o5AFMpuYZjsUaPHNTvXAPKsdxtzjndpiCWa7Dq1Sd8tiWWN2jesg4qs2Wfct4aG",
  "key34": "3PjmTxuFAyS1ZT1sHikuhHhVZXUs4QM5dwaTtamqjWAdshRwFd4W97Fxcku5nb6isUT3HMkc7wmSKyMfp9X3vdfT",
  "key35": "ymHftDh8cJ5di9e4PdJRy9huqDmNAux6JN5yQsFFzxYbgWtvBb8d8of2W9rBuUitMhfPoRuVLxwXv47g4AwSA66",
  "key36": "zjrCa1YyWUuHkWzXkwbdE19ckdTGKEEZTWxWcUcdDEJjjnbAaVfnddrnhn1oPRRpCPKAvANeeUZKsEUW8UWxtC4",
  "key37": "3oGpaYL2bNGDPh5pMrxAFBh7XycTYZwSDHZKKvjV2Qj8HdCXmQcPGaG4zbKDvuCjRvw33wqdsSyhCb5Ger5dxwWg",
  "key38": "22aRLCwyUVUyCE2WPwpo2yNUKbxFC4s83gJpvNm9v12xyzf8rfS8PEnfBcLjWqztY3HQDVj6qfa8TuvKaZS71y8T",
  "key39": "XZ4UUqWto8CLNvbwS3nxFxGfkn1gXWkZbMbFX45thZvdJTvZqdghVJTZMSo6vpHHk491ePZzbgkTxLLeBunsaTe",
  "key40": "4mqdnDkiANb4QhFakyyMVLcMLeuSZoPNqdgVtv8ifrVQaBDwX9P1b54SRYYFVzV6Gy87iykQgm7bg4eE5mazLJtn",
  "key41": "p4YgKUBebT8Z8FsJP5G8NhuFF1KzMaQhRXNE8eWsdh6W1c7g4SZJtHGar66iTfwFC8tnwU8z1FKgnoBAtUeJjT2",
  "key42": "37os5RWzJ34FUBnsUw5cAZMCoTuykppURJzVDcBnkKQvhos56nQpCdFiWLWKH2Za5kCRjzr1G1TETrRDye6rT9k9",
  "key43": "5ms5CKBVZCxx6by5F9FQtq3HXiyVKU7sUwg4UTFJGkT9wPXbX1tFAMACyZyx3DkVVhkEn1ySKEehXMe1EuNwG2AC",
  "key44": "kPYmEEnsAbLYPo3pJEgRfHwaQJC7hWVvpwzNeaWiuYQ2tYmuba3YupdwVDduLkU2kt4Mp4a5pkBjyaJMcmrpB9R",
  "key45": "3pqJUBZgVwQcENx3kdShoswEaXTfpPYbBgiZdNkMPUGYbfo2ZzXYBxSyGXaNWaEHHV41j1jgkvBoBMhZz45F4qH"
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
