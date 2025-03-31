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
    "5irpNKa87JESbB1sewoG3L4CjNMzATiPE6er7qpVAc2939zF3XCMpbFiNyAVUKvSCPbfAVe1iUmGaLMk2wgFcKNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yTXFQk6e24GCDU3xFxrQF6FDBDnePuQdCH1AVuyquhCsaZuH7a4a27f72KVqSS7VEJ1mHKX3YunVQUhCjtoQ94b",
  "key1": "4mLdyXcdgpK2EASKbWKfau7BfAZw2ps2LsWn51DFSBQYhqCLxiq6nCNKwLeyBD981FBzHMep73d9yZDqcPfusjtA",
  "key2": "61EEpCEKcHtFeyZpDCZGC9hD5K2qDb9uxCeD6vkNtsnQe1eB932QAJgDjyaNW3fhzRKPE3sEsCJUtyAr1u6R8cCg",
  "key3": "4CPRgEQRforb4iyZLc4PgxGe5eFJUckDcWdbs7G4sZ9moKgna6Xe1VBV3SLP7Jwvur4hJdx2kcSdU9VSMc2zhoHL",
  "key4": "55roSTRrEqAV5Npm9LbWaEQkDcKrsahuZVNcfuxKme9ZQdjNEmWRGpMGrNe1dv8ss8PGYQWTcPi4MAV9Ed8giirG",
  "key5": "2CAy48TZ7zNTLmnG6pXourjAbEfcjSszXaEnUfv5wtg3Zm23asducWJyV76jSzYodLLa8V4CQvA17a96qGLL6gHV",
  "key6": "4irD1DTNVSW8xWWo7pb9gZojx9SmUCZGHWc8bN3iRTEiLGKJFyfZJBiXh38K4wLJZbRc4GUCdiGzyvqaSMmH78fk",
  "key7": "43f5aowm3GCUnPLnP2QUT6Fh8y3iNL3UrpXmc4U6ZrzrvgYBH2gYerZqHJqcoHuqCjqwdeCXMJaPdeGyMD8YnWYV",
  "key8": "5XQYwTpCPyEXKRo7kZ6gyTbva51Rg4Fx9vujCgVzfotjwQKRyetDkTbEWUoTQhHXyritf5bRrFYxnN7NdEGU1u8f",
  "key9": "3hrH7zoDk4eSYt34tQN5FX8AAuTDUqHZmD4S3sDqhEYCQAvb7tnLU7dEsJeNKmeH9sHASNrQaq4HqHz3vhTJHWDP",
  "key10": "24HznDWDZMxgCEHNjGQ28Q18TBvAbj17NM3gArRhXEerLvZmKM4PZdE5MwPHkpfiZguFzL7VwyFm6KnfFBJnX9TD",
  "key11": "3Eodecpu945J5PJ1ir36Q4f8pAhxUDbvfYSmfN8RrRyWiLsFN6UoJDCVWeLgS3FdrZ1aZgfbjxeeSgJbvtiXoX8E",
  "key12": "3FvBfx11LexGrgTpbfLkCA52zNgVuenT9ryXgsAeZNcCEXdDCme6ijACxDVaFj5VnhZT6hu2qXgq6N4ejakQSXq2",
  "key13": "a2UpvoazWA6QL6jH5qFZLHuBo9sRNiZY8BnymFbEnbGPpkrwYyuvLMEeEbEvZJNnayMR1Pj3LjijLiiMH3vjHsZ",
  "key14": "4fw4MLLVySiy6PNUJQUwJTquFE68Br9SxtPUrsyVKWCTGkjfTmkgBkQsK52kAU9VyEW5BSv3LiiEu8M6TqN6mcGD",
  "key15": "4mmPS7BEx2qb5CNKt5baRNtzxGtH8i3mHMCqafPhD669qQChzyGgaXfGRHX25yqXkzP7VEsEyAixQj4WzgACfFCq",
  "key16": "3VzTnQaRWiBGQaoyP41RbG6ZcMf6SRDuE3HFq6kv6yNMvrNsSWu7Givijjm7PGFTkW5GgABYph1j9u2RUDRY171W",
  "key17": "3uvS6UXHssJGwgxvYKFPFrFFjPTcs4gKXSFFsiDyf1hLsmwK7z5diBy8vwDpBZXxLPbFvgEfw9APxSVu6hYozc6o",
  "key18": "2AcE15ysp1opc7vCv3gNRyvdQiXXr8GCxVbR32wk4jGXLMQ9faGVfrCuSFKm9v2Gi1zpubgo8ZdXxAkNivrPtfRK",
  "key19": "co2eejFxhs96WV6kkbqmRreYQFEajjT29yXbmjhC85PLAx1SsrrGvT3hDDhVazv6smrLY49yPDpwum9tUYkmWou",
  "key20": "8EZbigMf1Lpp9WzphokSfFXx1kTVQdX6FjAngpUTn7HYWTvsiDQDo4tMzxp3oeajKB6oBB5i6LrzhH6XtTqQJ3y",
  "key21": "3Qhtb34Ngu17ih8qRB5FMDFcvw3ZDVwRtzJg5pxC7vAH1nyxYiDUu4k53QSmgPNtj4UyjJ31FAUhRHV2eRNDLsB7",
  "key22": "4JPshowuqvqSYNnbkuReqFdRzfGAPuyybkkaKHpYz5nmTuvZJj5G8YmRNq9RKbR4So7JVQPeeB3gHLJ5DGgpysAb",
  "key23": "593NjMBkXokCgGvPvw1SEWBACsmVbXit2q6wzzaDt9kLEUuM71MzFnznubCfUWhQnBEpXzZ1yXe2WM45zkubcKB5",
  "key24": "3FaWJsgVKgaHS9VjYQ44sHMYtbGAiXqDDGE5NMWmk3U9FUyfmPjjxGrmViUnmGHdFLziAub6dPYMxGxYFX5RufUS",
  "key25": "XRgY23NVcRVsEx2AmpKGwdCH8oRhDn33HTpoFwjXJf8dRGxsUkt5q3CLNAeTYPDfzKECppmz2yBBamDPJfcRuBP",
  "key26": "5xrjFzRn2N23yQpKViTS3aSQvracwEKCxSt2F9B5mycqf13nb6SPAZsjtiRqmVAN2F2HnVuyN2ZoaNATmocEEq6L",
  "key27": "2qQNsDVPmNduGqKSd4vpamykMvUA9prSY6WngqLcyHVMwWZ9DmkYafVV21gH5s5Ei1fnUww8J51thBf12G9Bqvjs",
  "key28": "4rPNptjzdGSNsaqadJQPd9Y1MaBJwsLbSw5cQuMT6tnTkPSy84bLpRzWtwEuFNVddAXoAgQJodbqFRydWVT6KGmB",
  "key29": "wWXoi5Lj1rWs3aYyUyRuLSFEfkTGQYVRkV9qBrMV4jj2B1xskwre1UuVEJ5zBDsUytDe4tFGEbXwVMSp8XPwjBC",
  "key30": "4djsU3wfNALVSeUqQuDK6LNdBknGp1CzRSV2yvidQw5iK7K2mH9bzwhxtk6EZqhHCHSC2q2XFBik2t8z5yEfx4GK",
  "key31": "5rHEUiAdcyhRyHFLqFBEtgKoiCM4zNBbbdJskrYkavsiRyMgQ8wYfwQETokuASpNSja56Kd6UzEiydYNmfxBeNF8",
  "key32": "8mA346PZknPfCyjgL8MfagXjxjq4Xx7HQjQMVTApkzbyWtDYoLB2nyggmEWoAAETDs3YTzbmKkrGkXfoQQMGnPU",
  "key33": "5nRoXAfPUqA9osiZ3znSdYxua2LUeceogNrjdAvMyZqG3KgHKr34x13KYrLYGMVCam7UfdYz438VQE8d9xoeCydX"
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
