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
    "5PkK8sVNSsMXghXGcwDpqNfbkFGgSpXbc38QCg9FcvbmVd96H7vepPHEwndyzy6jYAQhtnz7adStv9k2Mb1nTZCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwzkGyYDUtgpZeSxTc7YAKdnEEnLz9EtU4V2eHMhQ6s4DkKhWPyogguQ1zpoekgi3FqHoabbforXqxZhWmnF2h",
  "key1": "3Ma9L7idCefRcM59qbgb93vz3udFzzgJHrSbP7u9U9tnMDwe2rh4j7inhQK2gJkiChv6SoVaoMA8eJ2hErJrvFyh",
  "key2": "5Tb32WNTjKkYP8tDRNThxSqGXYJXHRDvost5FGwD8tQ8CYML4yp6qSmhgGAcWUMUPbY6rNWnBGhAfsDPeXMgyiJv",
  "key3": "4hfFPfgKrMMxKJAfK3Qeijb7skr2NseD7PDYtaGpFWXSAFucEgdTvy1D1A18cdUPGaMddaEEtbdn2YyEe2oFZBKH",
  "key4": "3UMF7ACMXFNgFLcmBFUVDeDGYbLiECfGvWwW3FdFRwBF26HFhMHERyonpEmKqaexbjpvjqx83PNaeEgebEvE2pfC",
  "key5": "4ErfytuyRW5GqDhhQxtSSDBHzcaczRNJMYRbpTxpHUPMSdfcmqsuL36dEu7QsPd6428Us8g7157oCotegDrXTZqo",
  "key6": "3DcrtQ3HV6cDV7wkgLQt4LrDsRN2GURLk348u6eA19dstxpT9aL679iUGhwK9gKjQVaUALxyM7o29j93U9xKfkhh",
  "key7": "23DZc7cF5mmpjA4tTBr84vkkXh6aHNMLNxX6gcwjbWA3hrL4epjUEf7H8d5x4aoPMdDfwhSBXo9RWPKYAhPfU1MP",
  "key8": "gqenR3vW1TnN4ruueH7kSC31Kph9xaTFxvqR6jRre55nbdE99d5Ej4kjvWYVcU5UtMziVbATRAv4wWJHjCZRfBe",
  "key9": "5ss1XszxG3AYYTg9ELobT32WaKevg33YTvNdfgSSkX3h5vh8fc4hMLiGybcPjYNPpEDtzwZR2vKbR6tDDNdQJsN1",
  "key10": "MHZaNrDomBWqmvnv1eE1BdwNzXoUhr5HuvevaqvSzja18csQmPHPnFHLJuGpE3jY2zdFNtk91KTU53qv1aSfGSF",
  "key11": "2HYUbyTCRCmHQbpkCyT5pBCEK5uLsxy3oH6MsqStwDHAZZ2YMKb1uHwmBVVtkcEtbYkNS5epCPXWDzK221gDx96t",
  "key12": "4ER1scn3KTZJtUQWNHeqLBtWCrUeAw8XNGchwqPe5662Bd4pdQUwXNRsyeeKkWwGSxc5RYwrRiyGFKwpFquGtwia",
  "key13": "3gsQbQjJ2FY2kFJbn4fvbibjtyygR1Hhw1fh8MbD8nfX5dNMCKcQnj6hkKAfi5W1qjjVetFYo5VyLwMaM14kX5uQ",
  "key14": "ES97vCt4u2TnnpEVRBTumfHUY569bG1itQWUWEd1FsNUozMTTQN46E2VDAcB2zM7pBS53MB7XxznsHZULKf2Yo5",
  "key15": "eyUYMSWChXBr2rWmgBM2rze1c2SieFEESBZLj3pBzjibm3P1dWPFXDMXHnRETWkLj7NL6qgsm4YGCSbTokJttS4",
  "key16": "4WVcXzqw3pwKufFaw75nTwsoubV6qzSm3otyPdxeSBPgKAuGkLauNSPhwsFo4sEJb4Q4wvUPH8upqfAueuQkdSrs",
  "key17": "4FpzzxYBM1rbipjsiGBWT7So3Doqaukk8gPkY5hmUJKUeomKcD4SzkeNqfrxKb5q71dmm31UGZncDjLSK5qgfcRy",
  "key18": "4ZxhTb12AsjMc7rvvDjgDvSbcMDiCS7dXhpYBgRcv4z5C4hCFQTMHUKuF7usFybMMhvdSrgWtVSCTkFEpkqN1xwn",
  "key19": "zazwXvUqkWTknZNpR7JGDAhh3xKT2ajxrBN8SqZSg2a8ymFjgnwPNk2ehc1zaSADDqQrgDvaqEcH7C99kURhHGA",
  "key20": "3MXob8xFT7cfskgyMoWwdxr8s2H6isPTNz6QBA8grRz5w2eeRYsJk8FNfaZga32AUxXV53iZ6Qpqz3NiQRb2CZNW",
  "key21": "3gSCMMqDZEugrSFXwTK2HTGLuq2X6pWZnn7hCzxYDNwt38Yhp1pqxYX1Nv5MWopPhZ6dbNrRzvANz3n4e2NgZo6P",
  "key22": "3dwLN15h5CzRP8vzY5KA2fAxLhjQ7kgjmxj7RacZwxLkYWEFMEyPb8WHJb2HoyTCvHUiKdxoJ9aSoJCJ9tSyPhju",
  "key23": "5RnoiVsfjMPYAAHo6Urwyhhx4gNbRpvkmGNuYMjkuSCUEqQUfgA7911h1Uzp3kgRS3WdYZDTzRurip1a1j4Y7ido",
  "key24": "5S3rQ5DhbGeRSfVq5jobPdPNaaufsm7yGVd2uR9W3veJ2bArrJgCi5aPUbJSesM8GyCNjveapiwd3UNZ2YDLAQQW",
  "key25": "41wwHZG8SSidQcZRFSusqM5eYUzzb5ELfx15vy6bjn3GJdae6PoDM4LHnkftEFxVErwbTusjD84q76RLoZ4S419W",
  "key26": "622wwKTfXCiTmv4DfZ4y6AA1Y42mfgLTBkXj8sfiNHQ2iFS9htCKyVjtHWp9LPHWfhu2BuTw4n7ZFEp9bXAQiQMW",
  "key27": "3uVwp4JKAKw5mK6xWMN7fEnC3mANki91bWeaBSbtEFevMaArkDB9Swu8VnyrEttnumb2k8yQeNArCQXhd4Uf7fb1",
  "key28": "eQYym59PbUrDn3W4duoKQtEiDwiBvRi6wPHnwo8QEwLrzLHqCr3FBTQwhedXPb3nDF8XQuFB2Z6cQUZv9C5gT19",
  "key29": "3HWPdq8fNMK7NqzxNXd6JsWdJH4RVssi58vRQqZkumNaks6ShJ1G3ogUcT4H6429vg4VSkWdX25Zx41wXU9yzNRR",
  "key30": "4sp5rTKUWavmJxRRRXrGSfbxYqfed2JCxs8TvxviwF8gTadYgmFkuf2G9SBZ5eZRvyjNn3NDMbKC7CCab16dQAoc",
  "key31": "2TaouzzfrceuuXS9NPV6K2VqHnFPEqy3r8tSL3UafCpJpxbGGjsALxiH8aHavEGQEFSQYoDf5HqvFCkMNCbJLqKV",
  "key32": "2hwBUpGVRqPgaR5NYY7Bn7ibTo3ebykSwHxtin1PV1cLS11usKP3AZQcyt3MrU3hkKqbBM9T7CoKXicNNJnGDcKR",
  "key33": "iSwwHyWHMgFJSBFfQMmZdvqteptmnxWZh76Bxc4MSFmJvDNZjBNf3w5JT77UnanGK3PJx3DBEJhCHpWrPXy8jsv",
  "key34": "2mKGWLutxEkp9YPhgcvzc5A3QZQruvbMoAFfuX4xSjhcS22wprUpPgvxfD9iQqVwdk9oeUAu2NUFhSsmwa6tjNAz",
  "key35": "5D3Y7dZxQQi3x7R32uCpfCsyznVqtN8VrUgoEz41LisPVMTt2Lu3C3bXdLRqCrnsEyhRnXX7DXnneT9Kycp2W4tL",
  "key36": "5CXRfGj9GNivbY8uWpw4hsCBRAhrFjoTyu8PkfqgWrhTNgX5Gmxwg45ksVEnhHmPHAURbb4xVqLSXL3u4VVueNaE",
  "key37": "2WiNY3E2bNZwx6Jtzcb5eBKeJcuXX2wtgdtTw71KDSfwuuMMS9myVb8UvjaFY23piM84uwoQU2ERcv4EfSWsmuUP",
  "key38": "34s4wpyB3vu3SucbWWfjonX3BLNDqdy3KhZXTyUXCdFhgYZ33zWqpyjmrELum1F426if7BXr7qntkZd94USY3Lnz",
  "key39": "3Ujtno43JamgGMV1j5PomTmFh1h9B7KQBwYX1cf4izUL8iPLxTeKf2HtR6EKcxmFSF5VUVN7UkFRmCCcDQxCFyGY",
  "key40": "4KXkkXpjKD1uV7Y57o11wz6bF362dZmM9PD38AG8joHYqFMayP33TEoJeUX2bsSyKXdQ9dokHbiBGapTPqjktZha",
  "key41": "3fgvWpxvwR4onDFFyc362K3s2TzXSLZfqFSFhHFdVuemmWKWYJudQwj3syatkgYVdLeJYxXZ3k34ac6dHVzU1VQ7",
  "key42": "3tEGaS1jziYEtRLzzn9rPBBch8JN3U9hUu4yDrGmQvkHbMDKw9m4TEQGQ7qnBWtPftxG5u9NtJo5Py6JXkBJphuR",
  "key43": "2BVcauYUXShdUcWfunYphZ4F8r3xff6aX86XzEKymjb9gCvFrau1yypa6EAAKjjSRJnHKhjbqbe7J9DpEdshZ3Tb"
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
