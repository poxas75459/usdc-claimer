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
    "2AeeoybbYqtT7FqJKDV34NN1xaCkMCwzqCcvECG9tQ5P7m7naiSHi37VoovKLriJYA3ZP9HDiLzCRW792w1WCTwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YZgFpxcuEWgYPzUv5cWUkS5bQsTakLfevowKQL95Dzy1ccd1Fzi6dszndnacbmE1k6oqf2sfE2AJu6i5Wrtxhic",
  "key1": "5N8C3HKkFz3Hkh5mov8wReZVjHg4xQutmFQC3tVSB6Qi8tXxLwTtBgyYjqXwF3N3ThuCSn6TcWizWpMCqhEiwdUr",
  "key2": "3PMb4c2PTZoG9uLea7yt6ZegwkmUsJEeKrhBvWhB4Rq8nKMHUUejiCEFyFLLDqDPvXdaGKknyWgT7d6ruW8ofAPN",
  "key3": "fLbqaoAFTQC8rd6CJ44uLn2LaNis38SPaMTtqBehDT6D7RXD1xoZutZm94rhXXw3FJSsyHUrnr9njHs65Qzg3SC",
  "key4": "34jxWjhdXe73vw24tpiWpvT6CagH8BXXTyatXPV2Sk1cXqemciUa9ZvWH1ktwchwFKptoV9o1kddbVErcpQMsLSm",
  "key5": "2nSfY8wPxocVbY967SYqJJTyppYQxa5Zt8XaXNgHNDFnC7eYzqyYJ5Fe7tfuX9N9eSqjX9BHDA7s8obcc8aUko8D",
  "key6": "4c42odci7jRZLG7Y5u49ouuXXcgB6dxj1hbhrJidsNrWZUH97fazacuBqd5PNWmdEbGGeTtLgAXjJQyf4HVBgMCX",
  "key7": "3ThaDBtZSAk1vNicp8ATczrF5bUcNB8FpTg3F3aLH1YqQaPk6qsNg2wrwzJFHnD4TcuHkW7R3mJSTACwns6Dt7t6",
  "key8": "gno5x6XgE5Q8HHmKCYvuriRwunmmcx6kT63mrBgCpK5KaiA27UP3uHwGvvt7uw1dQH1jtJ2hsoFNy7E37A2TmWj",
  "key9": "4iucjq3G5T42fUo8JjPsrMvL6CCmLXYmSPkcc7D2hzbvQAjgDTB5s9BojgV68udRdvSuofd9Zirq7ttckCqvoVgG",
  "key10": "2v1TezUSRcT7rWGCPL7HnY7DgARAqUMTaZMU5cVLFfDvCrFJEoZGiCdeFpqTAab8yXLz2gSdvPpRJTPoUwM3RgvZ",
  "key11": "5G3nvFqvZTfDqXnBRsgpYxxkzvYGdQL9wiUvpdLczftDokW9JZZg78FiHZAUzF2QN8RYdCUgFcPN9Aiax7qrfuuX",
  "key12": "4kBrvhS8Jo7e3JzpumMF5yB86JNnCgAQwUBhYnV56Y6x6j3nzAJMmt61yoxgwR7fqd8Y5FfionjrxKpXg7fX2rDZ",
  "key13": "5mTpN3pLYtQCasp7LhsF98tu8r6Ur9zdpEdzpQ7B86vVnh7DWSHkJ4F2cwhsG5NAgqNrrGjKimHMiYJsPUm7RKte",
  "key14": "PtNELtgvmFzYyFdXNyHTUkBjmFmb6LEpvJqAWjGvnkxew2W2tb3eg5bTzB1dSPw64eGZQFRBy7C1H5ThcugPViy",
  "key15": "ReJV6JASzuPt3ojXFavJ4TktiQC7r5ByN3NcUzzosGT7jZu4mzRxC7GP3nxL6Bhi17iRpzE4SDBJukkbWkDWNi1",
  "key16": "KGSJBwfDUrqBhbMZ5Sf1irkgKsz161MAGfXqgSrsD6GTEV4yQ7cq5zxGJNiva88eyXUbrnjozWZNm3SDHc7aaB2",
  "key17": "36RTnuFGpUH4avbghYkXHpeQReg2ADnDcvsZroewnjZNiFEC8fqE6nzYCfbWSDmUVMxCCmk6Ry1NeJuBRS5sDwjs",
  "key18": "gUvm4c6FHjBH4gFAgZ6duQMnhxEo1FR85J7gRLP5uJygC7Vn2QDwJAT8sPrfgLvSyUEYBA4JzGddjKa56CjxLJo",
  "key19": "3Fhhh27rQ8q1vyuM9bCTozgtKw75sn5wn2yzfy1FK6XprzRb1Zt8hPUc4MRNpfZUPpnm8GQTdf3CgTmt16oGzDjQ",
  "key20": "5yKL5RqEYpcqjGktbK2mpqtwhDNA6ZUcwttuG3D5Ey7JsvGnMpEuoFCsKeHSmmABdmK9S2GuVvYtEgFRY7bXJMrN",
  "key21": "5dtQmcvsxMPfuoatwDbdQvYdWwb9Awmc8EXpJURhxUHHsr3sMzKB3s5qLNpTkt4Fk7XZZn43A7svvYVN3sJuTGG8",
  "key22": "54X1noaZxKSrNTFvwYLbLDZZunUwxQgaKBt6GMUSQrMMzc13t14QEVUBXVtSdFin5pLd38fGjeBdVxgPTXCWq7fh",
  "key23": "5VF6f1No9GtuYe5sn54VEQbSjerr69wTqaQ3UZsBmc41hmp8pcz2t7Jyyx1nFtMyNwrDPJ1mHnyQaHHPqiMs3aSg",
  "key24": "4ZaMBp55vQ9ZZhq2kcQg44ULzbWickwAmTaSc4DcFzgDrYV7YjA6o7kLe9UecK22ZPDAYEZkhBJeZbcuiofnYAR7",
  "key25": "2qWNyYJGWzCXZQeSuKAMT2QGM2434KU8GNe9YxkFwaNdcP5aFpqgYX2yjChqbi6fQSGccWQ91H1nqErRR2sXzMvf",
  "key26": "5zWv4LPUvQnavNu3EMV7jY4dCkCwiHZ1Srvmr84C1Epj2ireDhmcDTWS6hpSySd1pgC64q8d5kAB9qKB1iDom1L5",
  "key27": "4s1unVPYPC7f7vD2mDPA5ryAXKU84xaY9MVazTNXgB44Lt1BKykTntACTE3yCVcgG8gQMTP7mBGCbQ2t5q86CG83",
  "key28": "25WxH7hmMxG3J9C4HKTzz3FrkGDGDgCgsqhjSszKpRwXemwAko5ZoiZRF33m52cjQQHakve95io97Fg4ttMqNL8z"
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
