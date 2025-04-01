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
    "3sm7WgmffrviZ2A7u8YK54RJXuqeZJ4rsLjFJ2esEMrnJgzuTq8wpSB4bjDvZnYJTtKF6dFPoAaM7vtjSxKymGDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wqMFfwk9PjQhtdUGeQpuJYpDorkcsqA8ME3gGeEtj2QEjyVxCMW7ZXTzrcRHeYQ8dnU3sgtnXxfKWQzSJX4uPGu",
  "key1": "5g63Q1u3758FPUXjDX3WGr4aYh43HqZ53bTHfGpx3iRxbiYQAHahueDTdAu2vZE1zWrKvn1N15MTo6dTXzR7YeZD",
  "key2": "5N3xsTC2mw923ZUH28Q27tJW88KbirMwa2h4JLE9Z9i7qUUi8Xwf2TvRtFhxttxnXSXP85aBUcDFD59jnCUtWBNY",
  "key3": "3RDmoJaD1s7q4MG7CikSoWPNSJv5t7BVJtjneAzcvJx9AFA8RoghV4DkTySSJM3hCHPhHzUNmJeu6ZwuNR6jjtPf",
  "key4": "3AWB6Yz61KXx14UE6J613hdf1cC4ZRkvbBDA3oyEsqi6DkJxVfzfo6YtwcHtvsGJKUvrKoA8A75xcWiVXBf9Xi3q",
  "key5": "4g4pqx3EUg4uy8oFfhdxF99eo16wHxSTSX9NKYsSo1A7nkc48wJKegdXM4qB5BoetX19S5zeQx8MMAuhv7PA1DXo",
  "key6": "35UY7PMyt4xjBQBXu91bxALpu6Jxb2PPHZqhZhVyZSguDv921uwsQ8aGMw4vnabfnRTmvSYYDxM6t86RYLc9LYFk",
  "key7": "4CJtZowaSviRkoRhq6DwCcXztjLtWKrPD7bUhBux6xvWcKUpsfJRivb57QG54zfRgDq3qQbzhmwgXcK2Nj2zajtt",
  "key8": "4wvJYwWEHhUbn1MKeTWU4L2tjpRgEEjMsLgYj4eP7VvvnTYDwUbfyAgG2zPK7YvX39UynYzCWPEEAEAZ6YW8EPJU",
  "key9": "4qbRuoZaEgEqAAX513AuEQUZjCmaeYWyQRLdCmFCU5UxU6UgHSE3bXynQ1Kh1xzntJF7cJ9FXoZKdsEumSMoYQHy",
  "key10": "2bzC5oRjDWuLUDhxWcgy8CQGKg2QQHHCpbF3xcKLti1oj9B8eHeRby2VHWachiYy6mmUhWVFtqQUu44f4z7tUTZ7",
  "key11": "236z4ZAaG28b26YoNfs7HWeG1ngyxHGFYXTzvmQ3VMGefc91m1agGqaKCdXVzFTQG5ufrD3LQhsRPJLxnWYiHdN5",
  "key12": "4RYwRyoGiRJzWHzuHy5yecEuidkJECApaNTtwAA8GFQ4U4QjgsenbUQ3Ckve7s8qNRZyfkuMxzfRBUQrc5WLoBZU",
  "key13": "8GMfk8foxJWzTDYzNKbd7hrbDrGyVtUgNZ7artNa8W7LS9uJwrnL82HsQPRFwPTCe44m3QpbB1FhkiRR2keuBY7",
  "key14": "3WcnRzntCyCXkxypRdVePdMU7oBR6Ghmwnzzi8uVPhhyh4u24ZhUpbJpL8t58h898cEX4V3DZLm4zTvirZcoKFRD",
  "key15": "5v1oG5MK3bhj5JTqdgztCW7CNTmEDTQ2QAJPPwuQ2NSKQJiczgrTGv5pU9KgWduJWpPfjdbG4ByTJ5xCWPVopsyL",
  "key16": "GJkjPB7puwPbNUdiMtQ6tPcUXLzXTCa91kAQTo7QCmfitJU5QLY2N5sJG69a94HBkE3X2dpU8eLFnDZJkCJ2xvb",
  "key17": "4Fb51osHzdCJS6KYUve7MU6eLgBjRNfKMwEJWUtJCb51uuw6EZuTa8q1W6PGcGLVPt6H8AcLC17Xj1pne8PJYWiw",
  "key18": "5xygwF1YVtKSMGTEhpjD4QKg4oDiqT4qwuREccYXX8V7Bj4ak8QZvtRGmPokMeGn3EzmmbQksFM7GbhkQvCG2VdC",
  "key19": "5EcMZCZ99CNpFb94UtUPxLbHab2atKXjyjCQSeRHMFrBaCQVSCGvtfxmNVunTr76LF8Du2c4W4DGLpwfgLbXBqyp",
  "key20": "26ooeNcVqhLxrm1uDGrQsqDpxuD1AKxdhXp7AMeADfHpbRop4bnNKf4nUPnXrpaXX72VwiWbs7dyU8N5ec45QHHo",
  "key21": "3SoCyB7jmLgfAkXTa6ek9P9AGPLLVTMvAUueVLrQMmWj5EMxpJ1RWorefgavkxjc3Yz8XVYaUs71BkjMBzz9hcLL",
  "key22": "UPUHjoYZioEmzKquqkyfnFCntA8Ki7k8TsvKgD2WTP4smrDVHT3nU3KBWYU9apfoFTBsypzRZi4vJPDw6hHxRLj",
  "key23": "2Cujuoxy8AkQAM6gdD7yGw9X5s9Nan9E6uWjAQNzuB5fSisnAQuzSqWc7haJo9xToEU3WTR5qfu8t1F5Bc8QgSZx",
  "key24": "SFeTCa3P2ECikvNGGabWEAZWyWLtMzqciaYChzGX7YrmoLpZPMUuxiFt1zeKbQpXBQQxjTBSkzv1HwQJUd9jKtp",
  "key25": "4omn33ydZBcxnPcEfmwyKWym3hC4BxSxu9g3WytsHGBrFHgfDXbSfRrHGF4uc5rhZ2YgTvicSWDi7X2u4xJQo1kT",
  "key26": "2rfsyHeTETGkDW6uwSXhovW54TcJnTL5SQHjC2tWzYx7D9iuPWsj5jSMg3GPQoprHhNdkHYdsi3G2rz7538Rihyt",
  "key27": "2vPA6Cj2wxWWdjTKg3DMcJsbQeiAx2xD9W7STZBsmgqMQeSVn9do8r3VRr4km5Sd8o5rHj2NcXy65krGds6pNDZT",
  "key28": "3H5QJXCgGeEFFFGmeBu7jHra3cPBejP8nhqn9dnqqvTKAk4TfYfGTFHLCVCxa5LjrrFHfDiu3awoejPV8UeNFuuM",
  "key29": "5zvVdhXR1XP1zuxFQqqGxbaN85iWyrnJU9duCypDy3ZbwaK9WnbDiPozNFSuqRLgrTbmMRKDsWPHKZmedCwfCbSQ",
  "key30": "5yiB3BMBV51QPVJNhU4cKVfncYcUJk1uPcrdmDnWfy2h5aYjdbJVkuQ1m9rZ42f21Ug2jCKHSpVcSFhx78dXFdWb",
  "key31": "2Z3ry61XPMFeVcqiobHiM1KSc6weHMZy8VU3G61G8kUn3Vf6YMRyRDqkyfvu6X35FXrjF6YJAywKXcQmgzX8otbk",
  "key32": "2KtJdojCNonTQsX57tZn8Dbm6ark2wgm8idmJnXtSyqDKxM4ZhJTZL29eWjHAGWLavkPBxFWiaq3Hgb1Q4NUcAuw",
  "key33": "59Mqt9avr5KpAGFbfjhjdBkQWnJNoMCUhGk7WeAiHGc199c8Rz9vzuZpVTrmJQvN2oqahfKX957nsfd3KJmapw7P",
  "key34": "1QHAPpEcASmZcGLCeCGdC7KQVYRLqSt89qirBtYTGNGsZhXvVNKAz2U4Jfdw79wERF6snkxPjV7mRvtfWtosfPf",
  "key35": "32vTZWSknmqGqWaqTZccF8cvGzyzk2iTT1ZwjCdjcQnwPaw4buWqL4KV24M6PtjC67jod8Vh8Jb9sKsZR7KroJNe",
  "key36": "5uraF4j6rJnY6Eeeki47qrDu5URoN5uRuJk6EFYxCjw6VYy7mxbbQirgdhPbEXMwKM814NCc3oFUbbLwJaFbMTK7",
  "key37": "F5AZhvvPxVRNY2T4GSEWiv5CwTcdmvXviiCVTzzvycRL3SER5NCtopDSgqquc7sdKFxZirAiYsiNKQhV1Zyjb3U",
  "key38": "4gLmUMZTYbEYpsdr9cNxAKSJVNmtYksnCvu82eHkHbELuNVaeift59Z5Uq2fwuq12T8ENF3eb5fJ4D1yo4Gmx7EL",
  "key39": "2gPAPsaLdJvVvJQJgYT6eekzS4mxwngcuuVGfaZYt2ViGx85eq1s6hpDvgZSmAjBF8tKw9HixsxmGDsLPFKEWZw3",
  "key40": "4ejLxqAveLTdVQFRCbq3gja4NLidckyQEZStnMfm1JargyMcoNQpfWzTNgDjTgkxRJuDYgRWK6GRwMZHHAi2AXdk",
  "key41": "52QnzpX9PrQJ3a5EeLwi4XnUwReTrnStPeYW5crtmBXviRbpV3SekApcgWmZvZyFApHeznkg7XzRAq6ZsHLpXWSA"
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
