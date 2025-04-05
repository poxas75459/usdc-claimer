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
    "5NCkQa83DN1NL8GQvrsWpd7XQqZ8ETxdmLHjzQnnrw6PJ6x5ktcKTYSYWJ7UXMqonQALD3acNqPzeXuRLhb1maMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VVRA8HD8B3qANE1Kyoj6dGpKeCWykp3jbQyvRJw9cGyFWKSsdtAfHN5pyDwdSbFqoauYJEWesWxNZNefSqpvATy",
  "key1": "3WYuWEp24PLv4JVJQNJKreEh2ftzERDiacicqsrj9iuTErziQaWk8ekgURrhmffnai591y32X9i7FcrVmky7kbHS",
  "key2": "2cW6ZHMNMVacrcUSEyJb7PS1pVWHdcqUz412CCwtfQqkoiFwQu4taiE53RT2y7BM7zc9ZcAaUyd7sdP5eE7swhuo",
  "key3": "5iaGHEPssZ853KeyjFzVRrNdd5K93ruZGJN52jxVPoU4zwuwDR8pJAFbgLe6zrhhrtdB2Zaw1wPARpGF8Q7fBQ9C",
  "key4": "4FMD6tn2k1e9NEEyzBNFoXFZ9hw4cMW865hbPi7uRE6G91tSnWMMuGDmgLxihR7nrJGCcsCXYdQHvDLpqvc66PoX",
  "key5": "62QUGMUMMkEQHLn89R6S5QUZcL8ireShDfNjr5Y5u36fXm96n8e8hw4WtU1XpqMAL5o4wopdc9ur8mKxqTHkz5jx",
  "key6": "45JUCUzVHJuKWjyMCf83EPJQARU6EowP3QHhCpMHch9QF15MzB4PBo2CAgjvUaBRoyhCjgeFnGsQViM2xuVMdYZ7",
  "key7": "421xVpesSnpMcrMnK2mY9F3JEghnQJzrMP98jwGtfLiFtwvQAT1R6fiU9b6R5ncfwVk6rDJioeDCufEf5XYWTUcG",
  "key8": "4umTdqZ5gEwQitgTq6D7VJSyZ6Vwz83Fm7pThA5DbT8R6Ddivy98xrJnTKTvvj6sZrev7oAUzAXgzovYyo28djBz",
  "key9": "66ubfLdicYHmUm38ZS5K5B2cgUKPx52SrhHRbcTG7tiEfA1X77K8CCNRR6dkUhdEYZAkYk9Mp7EFmoYRrGSoGW8h",
  "key10": "3hoQAQU9Z6Mo4AvjWJdPXg8G881UmHYrK85DzuyRcKEtRgw7MBVzVHB7Hjpj4ihf9Mm7kG2x8vcQWMHW4b7zHCg4",
  "key11": "4W4RzLQJJr3YLrQoZHcCUZqR5yAryBvww7aaC66HrNCr1TEspwLbGEktiLKmBofuMRix1pMnK4Bx2tyUzQjw4qKk",
  "key12": "FDFQjxrPts7XZJQrDUMaPsNPtyYNNbnHL88XLxtHksuULtB4KZmQ7jKP8i5KQraataoEp2m9v7HjzQxbEjPoN4g",
  "key13": "57bPmzr2u2YYBWfdBLRUTWcZpm3z4yDSRwyDAHX1TmtRi5ixaBtFB3pey3FhgMpcZY9rHHd56Vm3tPVDRhozMDDf",
  "key14": "2MPos3nN31Xsv1yW83Jh1wEKAhTFf6C8pwF6CFWAgquXCy8GNqwPw9gCD4znhpebRbXXPa1gQi2oUqTokof9gXoq",
  "key15": "5iCNGDwvkXgXM3GdEJpPAgGrGTBfLkoYBL2kwdEFhRpqLiyA9rWewMUzzWftnHru4gFW2JFhKtxvaWRsfKCBkB7F",
  "key16": "3YEWeAVT2Dr9j7rMm9P1U5bEp4V3AdeeMESWN5gaxY9oxzjYCWB19cgigAWUL1CUQQuYCcdpWGTyCgmB4RG9Njjw",
  "key17": "2G6MUvn8WHSLvkP74FXq1jgo5BAxCDVw6WAuQCMXWpa9RpuP2BnWJ3qbwGPAciH8xfAyk61r1P6cQ6n6XhZo5dei",
  "key18": "27DHu8616qfHaFW69URkjTo6fpNswHLb2rdTwV3fbdxAJqVfQLwdYgXT5aEKjz8k6yf9Kknjcrt4Qz7uVcSsvEvu",
  "key19": "tGRM9W8yx9uxd4yr4mRAE6u2tYnko1rkG4B1y1eNVh2wEKoCsuLXkcDmEdkn28XG6RVyCGEAJEvo41CD7DDC7Vh",
  "key20": "3PywwNLc7JKb1xe37XqVRHVMhBgVMPrAT79j7oXWfr4Go6sbfCCzVYuPZpgZLCiB7RirRdZndEa1gNSxDjMy7atb",
  "key21": "46M4euAXcxRVugEwKjjLCbX1YEjWmKygJqm2iELrW4tPbG3B1h2DBvCSF2vLCRiceCkNNvGWWhH8zEfoTCe3QV6A",
  "key22": "2QusxktJpio7dHpcRURYNrWrM18RECQVrahNqSE7CXkjZmd35AN83W2Wrfhcqw31BPs6LodEkSBemGAuyDhCLtVF",
  "key23": "3HdPSnTBM9f3kUHJH694EZqt3NJ2t6N698XrUT91LkfnnVdgC5NPvsjupMR2QCHdBKofiV99AaRkcb7rY2cD3kNK",
  "key24": "34oxV4ogBWthVTxDPSFTkpVvsoR1AUQemRX9t8fqfzBFPtYjPNTfrDCxRuEeBwGYYQBzUTHWHiG1BiL5QeGnhsAz",
  "key25": "LhMG1c2Rr159XfC3NQ5ZzT4x4XLTwSHDqc8bwFRBfTz6XmUWA7udVvYYShEFwfRhqyunaBUrsSMtbwLBCdxSeRU",
  "key26": "66tQUbsGU6eaYdNBskruGKAYrRaoFC33yCxKpvCu8wGBLtHh21Ng69bTppA4etCkt7q3jcxk5ax3gkix4Bv3nKi3",
  "key27": "5uCiSLskB7gbfkA7iqqFzZrj5NfuLCA9EiXXAmFAtZPshGxvGZFNTwCSviUV9njSoFbQyTkTqJW4uaQDxRWjPvYL",
  "key28": "5Ne2C5NGMQQ7qtUv3VV6cUNJNvaY5ADtn5sc2Uia5QGVTQBpknnSHuWnb39QR66Cd4eKbAZfUqTjKaFqqWsFPkX2",
  "key29": "fpUJw5yZDg9nw3aCMqim1gF1iwhvbcGQ3NngauMXB1Jge3JcK75VE5odMsHeLMW69kWMQ5MgNzD7F4PgakGWTRQ",
  "key30": "2QUjWDchAv9LvHmG126eQbyTptNJcQ6HNDb1NrCtrWVKW93V9D1Tqb9Hj5bhJZgC7ajXbvhxbx6tT2mNn9QTBRx",
  "key31": "5FoyctHgDFKEGF9tnGuvBHfH3DaKGAZqVCTk7Guok7gsGFMb5gmR8ARm1XJbQEh5M77MxPEfAVx6fjWaXrRVpbHE",
  "key32": "26SX2ubpWz7qU5CPLCvZ2jmUaFxnN5p5CifyZfq2itErV2WmGYUsg4TRy9CCEYt3KJbwQiLPE5t2JBwdYEthvmCj",
  "key33": "3nhEg2bc5EW76AohqoNV8bdaRWQhPkXsUwwDxUtkNY9ULhUM93ExUCmm9HkNG4dNznF9jm3NuFcptcoPFUgKpKJs",
  "key34": "4nL6Q82ocGasUY7Zof5XhWs7RsUzGtuMN8yAwjkzNxbkuAzWZLiGEK7swxk8e8gb1Lxy1X9x61DjygdFbgEbBoVR",
  "key35": "3zSv8EjX7pSwwgFVWTHRnZUaMq9MXRuWiWD195yJVjRXaUBB3RaJKVp18Z1GTBZnouPr4wQVZQ8ByEQdPkhBw5zq",
  "key36": "4zzrY4m7f6KwwNrUNvz8cS4gW4PBsb9MasUoBPj3LWN7uY5qAnhzFzB9Lf3UYjrLfpnEUcTgyrbK9U63cg37H92J",
  "key37": "4t3dE91qhSG22HDi3dMubASNR2hQQkALWyd8o75qyYQCPTrysorjjuL6PqLazdLZ6TL3rtzSHgRcyMowXTMFxGEf",
  "key38": "yHyLq4Fkjq3SWx4jDsCRFkbyDfj8J9dUNmRLZYrGDi3BQpf46ddBV5XuxDe7TeMnGo1paCV7UE6gxyPz2ZveD1i",
  "key39": "4h8XUg35cvpkHfmwNG4kY1Nm2ifncfdPUiAzNjqi1Qj3FPmmncm7R9pgho3F8iMiyV34F2VV7Hw4FnoCSYJx6tQ9",
  "key40": "5cYPopAwJiWc2Wm4tKESNK3hgLdJQikDupMMpY9hnf6W99zZgt54Gzs1Ro95AVKzy9a6NPH9pXf8NaTSUf3zVtzj",
  "key41": "3AJbKYzKkwYVmVRucNXtZyVVZXnMUD2zNJTRtVX3RJSdmvw2berL6GPuYnGSyHgzLxi9aodfQQBCSneC5qc33gFh",
  "key42": "4zPiGziuDfNBSANxyHZhRgvJjCshJT92pG6Ay6hgmRtt2CkzM2P5UaJzJbZDoewBpjeHfD7USqAHMsbThbQaQQJt",
  "key43": "pbadumk8LNKXLpA5FMmh56aZDhEVHVCJfXwtCvc5BShBJeuXq9UQPwef1BntVbno45do64dF9rHx2mJsdeWwbSc",
  "key44": "2EnKTirGJqm3DK9gf3SXR5QxQgLaDsxahvhocrQtnbfW8cPYyL123rtZKWiqjeJ1EPGAWH7w5nd8fAG4RtVK48y6",
  "key45": "QENh6nJ896Y7PEjU1NDsoqzYrhuYU8tFTLWz3begAbMarnz1oSSwoGwPu23QyqceBhWnvp6RTTNDH7mpppfatzz",
  "key46": "sF1rCS43mrN5bto4eGmDTEZmkDrtHbMiVV4w8ycptaBmpSbGEFS3KDWWco3ebFXjxRLBUj2DMv6H6aVDdd6e7Dp",
  "key47": "VTtGQoQftt1nDiUDghRL4FnzkXCnCFNqGk2tLpntkqemmXG7qwskQAJWuyUAfL5Nw3mayZEjoxDYbp5nYmZdupu",
  "key48": "48uwVKEA9DhpwxkT9yEihE9y1NEDHnSsTD912z2DtfcgxWfCqVEwSxfoxX9Z7hBfCozLYu4faq8SdaDCDq15hVRK",
  "key49": "4TSvKEfZzB7USNDUp4FGXX1ZnmcfehZYv19ECHstM8JNJU4TYB7L47dXzCShro3CuZH9zC2UqG8sG7m7oCC8YgBp"
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
