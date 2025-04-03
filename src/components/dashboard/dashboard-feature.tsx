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
    "5e8aqRMYMsDjQHJMFH9QrhrVLSeUkx4W5B5NsPViook9A6KV5Q4WNstUL2rEGC4E9uoHcurNzm7MsnxsfeCbHXWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34nRMVnYWXP3Je6zmPe6q3f9fQt51Wi1M8T2AdPpCsnryERRDn6DdPPQRM22NHVDXeZ1R1k3aXYpuKm5L6WNVUst",
  "key1": "5tHic3oZUcMdidRprXv1QE8jS3VsqpATwuXMAqdgnyXuecXq891rcTS7VGHiesw2TtmEZc2MbMag3EmYeAnGUNan",
  "key2": "3Lnx3bh4pfmcioS482872SQuiv1NPFuwK4q6M3HT81FhWupWZaM6GzNrKyx7TrbqCyZCCoAABN45qufadAhTXrJB",
  "key3": "JLP1Edtm3jeD62aq9nsirHmry5N3o1UJmrscuMB8YVuQaj5gRnVnNbjm95dpJPMkmupiRdyhxXczjC8F1JAwPRc",
  "key4": "3rJW8iJyzNn82f6Djb8CvtTNmSaLqEHoStJ2qy3ss6atFCTQNsEH44FXYsC8gRawJZ6XDy83XvWiumbPidhfutwc",
  "key5": "29xHGEVnNfDe4uVPK8HJ6hbXybTpdu9h5kS3jKJA9HFAU63cxoMW72bg12En1bYJSHy9ZiHegYQmFXDXFmJGakKE",
  "key6": "4CmNjoN3fJTYj3LsYGZ1CjQ8K9bBtcgb9pLMPHRFDUgcKb1SSjW5MXTEuEbz6Kmp7tnshm9EavANmGirMetW3vE7",
  "key7": "4dhABhiKQk3he3Ly894iUMSpqKE4j7tjTagqRdsYvworL3TGJFmGsL5mzSjNa9Qgf8WAcd7j65CQZv1JdTHk8e2G",
  "key8": "KxxS5mmXWvSw2PikqKaTgJpz42Hhwv766tCKk7fTt5G1fmqnMNSGARqGDoAQ8FfHD35JE6e898kG9SoJb7cCWgz",
  "key9": "Qag3egV9cNSsFYPebgDdRL4ZQSWMgGnB33grkMcpxro8YcJdGtbhDz6HTwPYZUhpLaavVc63J2qHqy2f4vR75a9",
  "key10": "28SCVegEcM2Fk3M8xhcaLfd1yHCATS9oi8pZuHQPkQAdWHYPyqeSbTaVBarEyWK3x5ZUHhToz4rDfNyURxDkyP63",
  "key11": "49f8vSSk9rRgjX9sWeasLoLkvLW9iXYzQ2y5Eh8pZzvZQREYNJMLYae8hNdfSKtGPtWvcWEajZ3TbS5zi4yWnoit",
  "key12": "5znCeDTPTsRtB7Syf7yFLi2mMTxjVBFvoUthm278CdKD2svXMXBDVSAVHiNb4dWFRtrs2cVutKs31vgD5cRdrd1f",
  "key13": "5AFWZMoWmbfVXNyNmv27oQbfWUauGV9kXRhfqYVTPAM6rggK6UTChMaYR63WoWcxNaRxY2K83Di7CxLtaBPefAky",
  "key14": "2S6PA9rW2rkPyUJgya7TPTpQP8MZq6pCqjjfyfp913n5JWcnWFYiAtxEyvMmaJyajckZscgm53Zh1p5RG3sjNTxQ",
  "key15": "5Nut64fAJU1vkXnMsthFexqHdFvRT22t2c6yfYwYUCGjbdxdDNVRJtfnaLD5v1cGifgp2EEbmaJ78dDmPD6bPfzF",
  "key16": "3Fi4uBRBgG5UdiQVaZGgm1gPFDLQbVLJCP6UV5gStA9m4VDcqDkKWZTEnq536CJWRruJU2g7y7mUvrEnunL3KVKg",
  "key17": "2CPobhv3cX4QyizE3nsZKi6re47H5kGpyiCmY9kZ9C1JXmJzr8bUT9jf4cBWW84TGQhzQ877uWzTg6VFMZ4VK3vP",
  "key18": "2EuPa3SrT14zYySnjr88XWPu8PddyUERACiFa85ynV6v46Wb3DJo9uiHwG8SWeYjaLBENEuWgwzrbjP3Vo28jj2H",
  "key19": "bXd6KbWCn8xgXP4vwxm7Q5YAhnsSfqvvEZQKd3AKrgDpnMtu4vuCqMwGwsm9bAAsmxmvVEp3ANDv4j7S4ZifUsN",
  "key20": "364vVfZ9R19PMj12zDG5JpGedp2m67afTD4rcBn8DBr7ZgYTchpLctrrHSJQDFNkbrbEHPygcqtEcFDRBy4SXZB",
  "key21": "3STDm8uyk1LY1F1h6BJZsytZrssgPkbuXwr863dxvyyTKkfyTnB6WrA6vWRAJHpscpPJPXkQNTE8ym1mnuWXCHXX",
  "key22": "5ZvDTmERHuC7kBGgxFZ2Hqm271iyhPRPh5em6PiugrdZFwoAJJQdwDZzhVeJNPQAnFzAxmUChp6BY4CiFnnMJFAn",
  "key23": "2tHMDRs5aThXM8L5PrNnpek3r2bVWrVc4YNBoHUDso9wkgaeFfA3ceD7j25dXhhE2DV1KdyKuU3xoHVWciw4Sh2e",
  "key24": "2GMECu3piL7x5Lfwd7kVxFVu99cCgnPTXRi2UHmJcH9MniCUT2uYS7CTxprQWfp2Cysr5XUvVea6SZTwPuk5LEjr",
  "key25": "92aCgC9UbZ5YpavSY57WWw1nVqTSyuvFZuCsa557LguvUKyYN1bFSC4VfsXFnmcL3SE2FMozkYp4jtMaci8orMx",
  "key26": "4eJ4rP4r379Y2kBUwkuJFY8YpM9apSLFn7qXvDyraysufSLSszb6DWkmFfwQ42TiJqWidsk5t4smGt85u63j9VjV",
  "key27": "4UFftmUwBYbysyp1PLxRif5HbjkzRUBwHCnD3VJJshHecvpfeHo88Upiay5vf5MFkXuSUt9ThPPNL9sHYw3FFAzu",
  "key28": "2xG89TBEBQRDgwtZFbpPGi2xjc9hmR7fiaeTjJJ5oCCUzPNq672rzyM8R4NHVzXdYh76SgGSqffMip5kQgaopCbi",
  "key29": "fhkQRAMsQhJzUzVsMnH8HYPF22PYgpqXdP5ihcAxr8818dMg4obbXWcCrhqii3RczbuRamYfzVyhdby6tCe1zLw",
  "key30": "vMCnxBZztuib5NU638wd4V1Y8fD5EMDR9EiMovSB4NrPRLfdAo3G3Lz73qMJbKJtNzcobgJL1j1G2Uy9XgKfTrB",
  "key31": "77XB5Qxkk8hFKCu52ZiT1HPxiBwyuJDMgiBwyStXKWHAskCzKgQkDAzdSXUHp636dScnyDoEHpbPzHVzbJSUJwv",
  "key32": "3CcJjSZLCq5nV9bSCgBKm82URJzTMdmJJQ412wG6z16MCAt5M8B9zB94JEFkPsCLj7cVA5f99YNLiboASxtjo5Fs",
  "key33": "2qLUpn9iVMqexKQe5oCPaneukR6pZkLLZQR7RK5nxBgJ3GYpafEtLTcyZUDXBQKgi8Y3yzg2APauJUWNPfvFsu6S",
  "key34": "3PdQagd5eifu7nDJfBhWUQrzHupT1FwbNyvgzHrLaNFxQewsrsxSA3FHpJZGHc9DspbW62xL8MZfdjdA8ChdsMqZ"
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
