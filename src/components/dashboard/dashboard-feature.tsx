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
    "F9EdveGbTorA2oUnnQ7HmbjDxXyxDj9K9NaL3gooSmeut5qCSsm7sEDror87Gy4ouwWvYiL6qK3wDxukRESHh9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62oBw64EkDgaohfm9p9SedPfowTnKtECFxsSsW77cbfQGZx1NKoh7fe4MsgynnPR2xMfKpFkfeYQ9MoRGKSCB5Gw",
  "key1": "28bqR32GQ5Xgiur6zYrL6yvZppVFX5MtF4iHDpUfWT5nFfBhVGPEsKHTc7uFcX3wMwCc5KeJMqHCvGvVSf44yojT",
  "key2": "25au6UTb3v8TeVULiSYUZbwCadKXq2WURdoB5BG17FDNwxXnPYPsry3NGT8YrpU9uodfUGApC2ttjZRWGZNJ47Uq",
  "key3": "3hCYweJ29pQ6RY93GxhB1bzgMgSii3P7d9ZdVH7qGD5X9fHG17FBmTCx4kB7GKWpzefJCoeLYcmxNB7pHLBFHXf9",
  "key4": "4b1FeahkbmuDqLPpooMy1ZoptitBPgC9piN1gWZgsAkcAZxywtPqWUnN1Zc3SRmZqAHPjYXbbTBoxHMdtNbJmv7V",
  "key5": "28kGcPrH1kUdiSo4iqSq5s8DMq6JgFKShxbycsrXt2Yog5idq6zj37WHijF9fNYWDmFNzW26cZGCoSHSVwubEXuM",
  "key6": "4yoEb7TN3oPRHPH65EeFa6qFWDT1RStUJWEb9JUL1Sb3e5LFctPxAVsukciBVJdtXUCX8WqqCXVGirXRFvjN6b9q",
  "key7": "3Ffrz41kYQoJmMswuoRbEUib95XhGcQfubMxUiWAHys4PHiU3K5faB1LKQoWNcziBHyUt6RQiSjBzhRR6DfUHSFk",
  "key8": "2TiNCY2hzR9fwjGZWbpkeG9nRptYjtTjTJuA53gBDRko3DuKCJFiLja7pZksUTWYCJDeJU9kupVgRmjr4jK5FeZv",
  "key9": "4mEUCNsdCvZTAouDywCmwba7VtCtsg1d56zBRGL9QsrgCDUwk9nddDkezxtqxV88Yx9ZWwaWcdeb4C6qWcXJz9Z4",
  "key10": "4upkVtZCRwUFH21E7sn8QKTQBjToYmLosXLamYeBpfGF9vkzKZnSeVTfysHPhMwu9B4FL4D15QZmH82oi1NYQWzg",
  "key11": "SgBT8qbUy7wyYtXP6SGZSMKRThnL7N1McdFYzqtsqKDfAoc9diuffroEJJATK1oUA3PaVte3jHfzugUK21VUDW4",
  "key12": "5RtCWnTaVH1dB4GQdjTffpkbuQX2aAAzLkHhLfopfSmmkWqB5Vrj6HKCHu5AJqMrU8GBWMPsoBhUMh8ygmysCCm3",
  "key13": "532ceusCyKUzcQAqbQU3FK5PUPfuuCjy4UwaAkAeTeePSetDHfEovaqqfVaMFmNgyxkv1EjEEVYMdxn4FLobp6vE",
  "key14": "5se8ufBUx4GTgkFsmenvdjnWQD5pvRcmFj57dxb3wGMEmp8CJnKY7wzGynzhgiTGk7sq95wxsSLWRQth3zqjXUVr",
  "key15": "ZaegaaAyWsqUCRQDxaox7L81MT8ehxBsSjpUsCmhSVr68eGR5MHveawS2Kd4bQcZkgvVYXbKWWEGUCGDJkDRz65",
  "key16": "3wvNGmyKaxNV81M5JykmZnsGVtFiggA6zK3Pq3RjMpCtVSpdaf2wLEeW5eaKS7Hw5kyFKW9qaM5xpvA7KsVSwNyp",
  "key17": "eqax8uz6g6bPoA6TWuJCdgL8ZuUF7na5p4d3sg6UKE3HQTsaxMd8gzd432H2BKKjmQiHmSsTZ6Q9KbUBkxx9AqB",
  "key18": "2DF98arjpXftaDtR8zoEjp6seV7CCmREuSRXF5DmR2zrYQ5XohV5ymHTs9GQx7ciBFV7sfyJeXXiJaiChm6Tdg9u",
  "key19": "94vQMRFCqyqvWwJTRbAH4YN4ZDZCw8Cvx75xccpyGLqNeCLcNpqSTTRqQZYQdE3SCaC8Z15Bdzu8hjkhxj7P1VA",
  "key20": "2FfEAZSXLJ1McLECop9nRjdzkrRJPeq7GJpxN3hbGCq3J6avpXuKq9RKJnPhqrigKQ5PgciF7gMhLrAM3LsUUUXe",
  "key21": "3LqR8opqHMaKHsUGetUe9nfHkZi7VPo6LNTauHQmj9vCrm26sTuBePggkhC6VPpbSDeXZ1TtgSU4aWQRBQ8ugmpE",
  "key22": "46XGAebAMrqUSD2oM5YoWs9drf5u6PAc1sJ6ndPeoE4iAcXLoqp67oLR9mSAz3g2dE4n7ydKPSm4LC8by3vppVrR",
  "key23": "3QakuG5vLxFYJM1UEeP8QChrsdaoEfzCjMWA3jMDh4uc5GCGN67PjRUEHamnwoxTNiGdS2m2K6AMRoWGsQjYxubc",
  "key24": "25EWHiDYueV45nt9twZdVhfyaTFkUQqomMWf2AMrjDXeAaLtX4xvipxaySTv6f43PksaKj6y6jVyQGnwpFkSEouW",
  "key25": "2zSUTUiaXj3t9BmTR4CAMFZUKTekATxGxy8iuQhtk649yx82WPtHju5u9ZnExqqEAgC2kbV9kF65v5GAeWigKhcs",
  "key26": "4gN8U8ytUP4VVqTsp3qfaf5wBwS6RcaH5QDtucKMWe8oMWn4nFeAMYdJRE9ghn9JPpxrgABtTgy3vbGutFZZYfzH",
  "key27": "qV6D9RLX497Tn82Yyc48s3ngzymrSCfyEeqNUHpS8L69BtXKEzkSzL1JGRGobb7R1MdcHu3BSCNysbRX7iTYgsv",
  "key28": "28UUfbdGe8Tr3QMgK1izoqqdgKGRhw4jyE9eVMpFpvZQBAnsF7ayxcRcPXYL5mGbztEVUgotbzCGfVXGGQgW3fuV",
  "key29": "3jBsxtLrRvnG4r5SBPzjQWia2C8NqMvYhGjvu4uRSQAyBA6k5Geo66ZnHdGs1AgbgKWGfK9GqzH4XhEcmecnHQwG",
  "key30": "hNgc6qxLaSyRA4oDrFLDpU4qnSeWNLMKMr3UkdpqVuZFgjc5udquuREKFXsC7KUXsXWt1C5PKgm8n6Uriobmqn1",
  "key31": "2B5xrkHV9cRrfmJ2p9XapeMfeeBxEQPKtZ7oCpeWpNcfNPv92BbAywd7dp1gMuXiPcsJthMFG3NFXQHEBk7SKmkb",
  "key32": "23ynt4ZDriVc7pHuwMgWMhJSs3KqwEVcJgGasVVxWV49Sexu5z4CWYTZ2yisgZWb6yVaVmMLTZKfNCGw7GMCHry3",
  "key33": "2UpBwBdBudpxEkw5684xd3KW5x5pEEpkfeqCmstdoYYB54EJecu18t52KbXYLPvUqQtiY6KGJ3WrhHsBo7Fd9JyK",
  "key34": "3NKc1eqRopJdv2paVC4fwxsDTHvSKA3cUbgM9aJz35PmUBFD8ATSRm53DXAENCpvnCWR4SbVCb6i3T4WKgF4CTQY",
  "key35": "392u9L5LMKjiz9uL2YBdfVgBM6nrsFtrK2G67oLNgKLeZCNKBWXoCa2r23Zo8s811GDXQ45kxfACkEPShM8SCyiY",
  "key36": "3sQwt6eiXEfG6pYTtFhJxbhiGLpMLtnD5dJcEyJfd9zZpCb3bTS4XtTVYSf6dKHf6NkLz8KdfghYxJHoki4E2aLR",
  "key37": "4VFHQ5HKz3NRpsKo3HFfCwujEFKTGew7uhD4UcCoYwqnuNWkWsFs4LjPnJQwYardRGkPEHthu3PZjWW9ZVcZnqoA",
  "key38": "4DW1uQWoATuKEhuZmjf5uPWYa53uLuKrqH1NNfMKLjXHCkbpwERJB63BiUoYA8e2WCUWxkmC5Bujqn8awqefQJ9P",
  "key39": "4JoEuEnCJj9MpyYPXCWf51JK7PT6Y6BQpSCrMtKQVoPBgKtHk6i5uPUQTv9kf1ftquspCTrMDQVeJZ1siYBrJm3J",
  "key40": "PdsYQ2ntR4z2Zkp45mRKeaV18RgMxS2yK9UYnGDmcvcT1Kmd8SM27e3N3VbbywdpMDMAJEKVobSteJxBrHcQ8UD",
  "key41": "1R32B3JJTf1FvLAF2q8vm5i7SEWD5aeK4TV71RiwePkRDC3ezq8aMVeYa7fJRy5ikUfPkUK6aH7kp9VgTNUDKtT"
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
