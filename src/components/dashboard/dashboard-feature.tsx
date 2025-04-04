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
    "dCnHmow1jf962YwZKsfM2DmWiGmiAJtkZrA8Ekr9PbGyUDWG2EW6cNUppR9k46LZZqVuW1YjUaAd8vMp8teSV67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VPbTSBwLc4rhhL9LoDdaHggzkU9DZjc7RjNAdEzydYB6JLDrpXPQHQ8C4uchTLvBCy7Bq1FMBbt51npDk7mysaq",
  "key1": "3KeamxsL6pbesV36yhqqa3zh3zAxjqsC9JZ6oRG8qYfERASbetdqjj4znwp3kvcVWgETCjXqcp94cNiYBWDaNusb",
  "key2": "5ssEfgFAosm9Fn4VxQkqNkjRArsmZgsqDiGNmtpBvx1Z9rXrfxXV6m1P7iEeWzBWPjUbyuG5SLNTFgusdWZ5UKzb",
  "key3": "KFHjwVVXdUX8y4eMvroor2S5bHxohf5Q83cWybBhJN7U15D49bxe1cD6AjxJMBVHZKBFpQDAVuQKwsHTkjJfDtx",
  "key4": "4BgQUUVfh521xEAS3giAEtRms11nhGZnfmLCk9KPy9sfQbxJhLXGfrvjGy7Nb2esnjHtBH7EJWk23Ma4tUSFtxxz",
  "key5": "sbgNN6jW42mUPp7L5gypqXMZvFTsHTgeEC6yviFesK355zY2hEEAiFi12M3VRJ4HdhXo5PzWXDWPLVJNL1qhP9p",
  "key6": "4t46N54Afpw4764wxebkPGEo62mGAxG3ENSEbUuDuiJQKgRJeJ65sG9pxFNw5wAsoa3SBm8hq4ifWapiKkxnu8PK",
  "key7": "32bfasjiCH4cG6a4Pf1uvsCZbxAPwuVhkXqyQ4mRokiYA55x6XgnTzQRfC4Vzq5Nn4xLvUSyDE4dLJVdiF4CyaiQ",
  "key8": "5sB1RKwVMhtUfTo4EBdEs8GRTXNAUM3NPCM4z8SEhLkzRypZZr1zce4eRxsnwoTba7jHKeGA2Stz68GMMLWMf3X2",
  "key9": "5BGM7fEzuWUvFfMjmBJMYWDZyjFGGcFGpCzzmHVszhhaHgLU5TbwBGwhByKkT3ZdDCJaZFKChtwk1MFJWtL4nTnB",
  "key10": "4SurXfMkTm3hg2tdMTHBrVtG6y3P7iHgwQcfW7fVB7hD9gwWjMqdyrDMXC3AXJxE7zDijkxqriY9qevUijfVLg32",
  "key11": "291cbWHrjUTEBaD5qboT9eaTRqJk4YhxypVSpyf5fFoa3uD3cGADikvNtmwbxubKqaopf35DAdZMsTYEbFkZG5eM",
  "key12": "5zGncnsosjuVFux7FgfP9fpzLvHHWyEtgsjgZF1sVvqQTeThFd2P4uAc33bb8Y4HttnDCqJSv6xJ6pXZ82xh2g5W",
  "key13": "AUXhHigv4KzN2LxcXNVcnondwY7FKrrzaT5ov5m41s6midADpvMLtnfHYv9XL8NKgJnP3F6c7jsH7fjqEvYpYME",
  "key14": "z76FjSDiDo99EdD6mwN1XzgHZugcjSUigEdUFY9nXUm3L3goFvTGPrw1MZa26cjRY7DwzUzCwTPzCUNuXkPnPZR",
  "key15": "5CP817xveVrX799UbFCLAtryFBj5dPtYvup8866JECTKCbBC686KEzkbNJiKHrgSAC6TuDUBeXjNmYUTL2u9mR97",
  "key16": "28yt5aPsHfQAnjuRYqZhQqMckdBCTQqCau1zsxuUtYsBe6iVDsJskUbZE1Api9bWjiLF3Tsqo5CxTDSadqbTyv8X",
  "key17": "Y1SchWLr21nu739VyNfy3SPXvzJH5mkynViDbrwkDfDLyR3GvGY32tm6YxchVXK72v26F7JXVFRK7gtJSChuGJp",
  "key18": "5xMbv2sSEzugAVgRef2BJzsPMUiXiW5EqFseZnFoxdiKaqK3pb9pMaWQ3GTuaMzKnM4gTvCQK6LZQbtGFhE3oQPn",
  "key19": "3xpdv7J9CH7agUVjmff3CiKRMZ5howsZA3u3fxWt3xmBCGYG6DSTdMRfXPbkD6312zDpDwU8Ypd96CGXMRmvNngw",
  "key20": "3ooDZLwYZoRoaJqQ4itc6b9xzMFk4oMVXqFL9no26mPUMoMTZmR6AadiaqHsftogqFr1MjxXWrEjVMh6LeNJa4mN",
  "key21": "5PCREdgAV9KekiJpvr6Kw35zvSxmr8keCnYTBbf2ngZ4bFTMqFEytFLXvno2kfU2F5k7FbicZeajPohGwSarYmhm",
  "key22": "5n9UAjNBJb99pRVehCSS4gLKTSs94etZwAeByp2yzyjuuSKJhsQPujCphezUX3b6m6jvR3icPNV7B1T7CPaiP5h8",
  "key23": "5UweoHZWPTcfMk2EvMZfEKVCNZbPb65ZLxDXJRpBYHxpJK9vLzoxus7K9Uo96MBd6AXYCjLF4mWZU8FCkQhpxAax",
  "key24": "ozp22ougaBYQq6exBCR1D7yNdivAHAdsVpCv52HJw2VsNezP4bVrKBGc9m1mZ4RMiH85raPY88VLFG94E72d48T",
  "key25": "23dzeuSnEaHqGvRWgfHDyEzCsN3ffMhVFrczkDr4M5rgL1RaQDNBxr3uJGNcb8tBjPv8Vh4dqYRT44W1MMEdSJa9",
  "key26": "2qHUtgAYJn1fBDDJn7rsm3nqktLkAufTSsXNqN6wD6x6FoothasGpKG8mci84X9kiuHm1Rg5ppyvWuTSd51DgzXH",
  "key27": "3dKdTVHcfhQeKmtM3wijDEckFPcomGARcrywmAqJrqyt8YrJbeJjsFKFeRwG7s9edQokWJX4VGXkkK9NPt6XUHJ3",
  "key28": "6616m31wztsQSjwfEn9gFPjsw56RtwhDPpahGWS6Ebm4H4t5bVDEHRuvieSwZZQsCco7dVfi6iGBrwvtmdQ3q1SH",
  "key29": "5m32UTyAa1FzUiyk5DC3bdYJt67rTR1jM3V7y9U5mt44Xv41piZdYrTNF1ZpKHnYCMDdAkVv6JEVShGrDJxAnWCk",
  "key30": "2x3i5KPHsZ4KvAH6qknSzqPUhu276ghcHVPzb6idH1Q7UArVrDgA9uY2HuEUNuB3qBaptkrrdsgQFcakU582R3Us",
  "key31": "4WCb7AKGgbZKYbW7z9bcojVdFSAUuUFYUKLmDgQ1opimUNjf9PJchiD6DgQQfues35MdVFNVov7t8eMwzGPYir7Z",
  "key32": "5H9eJckkMf1xnmSDMbfXsVa428JZvL9nHK1gYMcDxmR3bdHzvWqMUGEFThSkKKchZvV47eEt6NRZLDcJGuQ43Evn",
  "key33": "4Pn9WP8uoH8FVRv3TsesAqrSoZfB2HW8SbzQydEDGNpfL5M9W111xxNmtvRm9CmuiHSxiJDrf7e2pXQfErh27rJm",
  "key34": "4VVA3xypd8imATRi2SKinQYQebdqLMM588QgMBKaqd4DJxh9WzUh22vp7KrP4a7r7hX6bbcp9sM8far6KiNUb419",
  "key35": "5BCyPk8rFqDiWTpCXgHAoZ7dYfjjTzwLmdwdhK87fYm1CggiUDXcGrgqi6HRUtY5236cZfQ6unBFGhjpeBMK6H4y",
  "key36": "2qsdWBLECCe3Y3JNUDGRnMYoq3iKurptY1dE5pt66DRFAouCB7YiKYJpgncJ1fCxcFS3WuPBLzbMWTdyAi6hmNxY",
  "key37": "2Xjh3yo1FJHtWRPNFkKi1gKuF26kj1aUPF5vnk2YfscMrWFwqiVbrH5xsMojuUrWDcAs7LuArrzcSZpN67CCGjqA",
  "key38": "5PtkMPM9PVZj9fM4hp4svXQGE8bcdp3LU7nTzjUaZfU6Myznmexnv3CkMVA6SuohXzY1XTYbLQQwgS9eCkZy9Jvi",
  "key39": "44454JSKCMGckeZStSv2g4D3gzoyBNkhfnAvq13cys9skRWi3JJ7fDafFp7y7SsvpLRvHzfVTk7pA7piEZA7zr9G",
  "key40": "3WfBmRfWYpqZacQXythXoxEBNF3L2U9Yyu9Mv8Ce4A8r9NbG72AszTSrr5jCi4iqG4L6FNfjU66ZVNyXvyGpNnVs",
  "key41": "p6qsLPcPNVetQw1bDM9Fhpj3KgCmYUSMNSJJM8yVSMiGxXqtTFdprEQQh8M8KokSGCBVZGf3krpiGRqyvRMqnUj",
  "key42": "5rtRwPhcDunMQpynUf8g6tbzgfn4LY9nDThwQwxyYHzEJ9f4MdajKi2rLyvaeaWX4NQW3v4zwQD9BpmtrQiLdutW",
  "key43": "66a2rzcMa9bDNNByWxLKqoCXhRbRaZrigshdfEHUbViPU32SNVGraSzKhQobrJnFmvRadgFBAwPuoXwQH1vDye4T",
  "key44": "4RYqgzpdP62PT2k9TTJUYe1XNuoEmYpqxc6ScrLbY13viwLdtMDjqMNvYVRAdp8W8B5KPbjz7ysC3scvVioQPdbB"
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
