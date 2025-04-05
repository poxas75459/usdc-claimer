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
    "2Ey74dpxMtjQsB7v2WKjaF84SsH8KFUXbHXPpQN2WtmSAwBzJ7BNvSm8mTwSwzmHaGtKXPb3HNRc1tKw6Hi1FPRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6us8HuWCVXAZjYWjiRsik22FcQ2wxpoyzjFszKmia4duDvWQx359JKrUJfATqd7fGvDtR9YVRB68VzhzymYeUoB",
  "key1": "4zhuMddpqivFjPT63oLzU5Ebty4mQV6NMkuY9CkByecmNzFBVLVpSKgddB49p1Kn4revRgZVa6R6DWtaybU4LA7K",
  "key2": "33QN7ZhQPMWiEuwkkEGafEX8VgQKvFhjmNy5ZSe8WuqHvq6FCbn2LifGh41ktPXwaiodo5HChjx3yciy7NLJ2UfB",
  "key3": "5ie8EiCVijnrq48Fzhszkza5AFmjuvBiED9MMGZ4cZDny9ax5VhJCpBziFVBQAhMzzTxfgqb1Z6ResQHWB7VXAaa",
  "key4": "5nMWu6hViN5j5H8iLVTm8eSKwBVdgsf2ybFXoYZqU5BhCeMHA6XVwnzp8Q9tEAPSEZAF42GaSYZEGcVgAb6FuvQU",
  "key5": "3brpwqaqzfeMpsRJSMRm7UuDrCEdCXrKM1Ai7pzHueyxqHy5BhUrDq8qgq3qN2aB9RsSBDy1dYhqk5YofZhZdJ2b",
  "key6": "5dS5hzvkBa46bbzj8pjdf1Mk62x9VY9wGmYbPveVddKbwW2LjmaVN5YvebtMLeLQvp5pn3rGLRwgUBSQpKzuQK9i",
  "key7": "wT924BX7CRFxGKymaMsiNgXsbkkE58Zk86YZeiJ7ch2N9XB5jnDbmXNMnjgfPqcfJZthTq8uj4GcUBWvPduxdgS",
  "key8": "54KCg9yXZQcbJYEcCU2hTpht4URezuYkX8ZZohTxYPNncXmMzC8h1jVfzFqdAwUHUyqWv7GrHxmAYvH7mCoQUmMA",
  "key9": "4P8i56QNUi1X7iNoMRs55kd95v8TaEsZ5hZfgqwryp8sLXNcoSVz1oSTaRSMMj9aHGKNEvKHJUqnEk7Y6UrPX4cU",
  "key10": "22NTDetyMYz2NWpjFjcNHvwJZMLvs9b7xuagFA3vJyRWEdadY7m5XRjNqsM3wWQWx5ATAjXsEA91WtbkKRFMgngt",
  "key11": "24Vj8xy1ndM55GViHWj3c8PLMxW8Gws8tC1SbgxpMcciSme79ir4DHyqkpMcxEEcM9EEDkMhPkAKekhsPXNhs2NP",
  "key12": "xTveiFFXdapRWuGiaN8QARte6xxuQch4YNPdmEjTKz6uXdzAhryZSs8TWC1cQRB1toQJKpG6nyB3sHtJUz4kzqY",
  "key13": "5CWkzSk5xEEZucYPjMFgMVNHxLoRN9ASJDTecS1MqyUH8kydP2zZKbAU51HPuocUtuHPUTFxVdD9kYDB3KsoiA4E",
  "key14": "1gaZJHrCtJh9jH7pB5ayyhLt4Hbcjkfxktx3k8yrAYTTcXgbjJb3WRHVx19G6L953sreMwdfHnFWcKPACqPcuGK",
  "key15": "A2UPNtsoQgvjarmyAU39DgE3FxpseSM6fnY5VxVfEFkc4VihWe9Ce5ZHrxdgc7RCiYH2hWHt8E3rm3j62WNobBK",
  "key16": "4TGLMNBJwJ2Gp4F8cFBcuyf56muNWqkFY51axKGeR8FS1Dd5wKse2dRnTGows9gQD1gdTBoXLiQ4aZeBAmeYcYLb",
  "key17": "4BrCXVkqSav3Dm26c2evEFLFyVia29UxHz2LaYTJp9dDPHuBTu1dea41mwBg6YLZG3cZMSX6HJfnyXqExyk8mo5z",
  "key18": "2bbKtmAuq26nkQ1Xbq8T7xW9ykwFwf2UvThhbc196JR6wvqrbj8xeZgX7ANosdzvGTiyvinGtJwhiTVJjyd8RJJD",
  "key19": "5vXDMxUhjP9jdu9pzJvmMNSqd14Z52JwdhUeR6pXVQ4viqiRhCK9LwvdkxzyqhZAp3BWtjg73XA23FD3USPUo4mC",
  "key20": "5hsvoFpBpvKxeJsdBg4BEZToh2DY26opTMfr3KjwNfUDadhNjNqnPFaQXzVXUxmbyn4xr2pZ33XpPJJU5G2W3dP1",
  "key21": "3r3w7vrW2hvVF9SzXcANX4RQ17w3rdoVRFenbgeBFsSE8RZ5KdWhoLKvtbn9zEeMPnFUAJkWS3yjjAqWAY1ozrko",
  "key22": "A1oG1qw61KrvYAU3d2xjbFpQiuHVis3GycCEAyP43N74PDx29yQPH3sDkQ444BG5JJ7GNW3PxPzWkweeDrVTJN9",
  "key23": "2SAEL5c8oGrVGMmSMPHdJzhbut2wayvCvVseQ9FZntemDwas9TWzhnB27LQ1zez7AGzWuNHw572cTSyua16Q3NR6",
  "key24": "4PdzaPCtvN1MK9rnUiVMLF5sp8ESx4uuwRuDpqdrZhKGfMLg3EzT8cpW5rtQPVRZNG3Yq7aNHxrYqiUs9hHBSNaP",
  "key25": "2G56kfyYHbMeWhwekRHRgq1MVWkRGYL8grwGBTNBd6Gi7JKkxgYK3oxoSQkQyGPSDnJH3me8PYpboqKevTG12162",
  "key26": "4BrN3DcTg81YKmigUs5r28DNaoSs1nYAbfMPs3LsAo869g7GrRy7kxvNqp7miKo33aFZzoUPToYpsx5DovS7n4pU",
  "key27": "4JPn6UmD894qc2AcTftzRc58pwhpgtrX4WQKkre3BuVUMPZXygD4d2vSqh3sUuGxWG88guSJT8TprcnwXP4cy7K9",
  "key28": "31BhawL5Hj2ptQ4q2Z6fuMLxv6JVetxv5XYWRrMMrpV3snCSoNnPG9thUhr9dgeaU7Mp2cXwsBF5cqhjojEVb4AS",
  "key29": "4f5gYPXj4RkfxE8bHNDCRmiaMYnabN6PrrXayxbepBrijyNZzexVQM6NHArbVeUP3EmDDcVRJdbdxfgWewbUcGvw",
  "key30": "5nJA1tE7DxomiQPaAhsw5WBPTjBwcFmvDEJdbBxRPLqHsQSfFQE1MbmJMfoqJtPBfvD75y4jwGrnvRhmQ8uvD9yz",
  "key31": "2RFTSLgyKyzfRAp86obK6E4QJa1sAC5mVZJ5mHUEUr3j24qauKoSSAvH7TymUzH96uFt9uJ6nb2kptcMmazBE3JV",
  "key32": "4vDMdv8nqNFzwyvKHnHBZZoV26ePmH7vZavuZWKYYiSL513mDYbmSSiPmaLFbmMXs237vh9md3fdG9GijuQM1TgF",
  "key33": "2mNTGXzpPSQV7p94LvXAYB3obDDEnZAvTxthGgBxCgLqDipVweiSxCnMtrJ9WAw1jNN5KBYjUPBU8swxkjnW56hX",
  "key34": "51ZtvufU9k55SWruLan7txymPrJ4dZXshUaWpKeWfH1kib8Sc7PsrCa1TyS7oyEfs7zTm3YacCBx56LfzkynWSKG",
  "key35": "5TP5qWDTzYpUkAp9JLEz55sYgqgPiYVAn1pjUF4s2jaB2qePztJ5Gu788WVBTfJuqnjN3uSbrmQ6744sLGJW2Dvs",
  "key36": "uqXNzD6d4o8hnZ1iHJe9YKtZCT18WQjrJoWqPy8ytgxRVuYcts3SnyGhGZeryrevYzbZdeaRFRUVsAvfMs8db9W",
  "key37": "3p81FHJJWMfktdj5ZRzZYzWmgfQY4oAQeCDxjqPF2DefkLFxWT7uyZaBiNP8i9ru84hPjV4ZXv51Lz6Gda4VTk66",
  "key38": "4Kbm5dLniDXnCd2M8jBmQjixQ8EnSsrxCz4P1CeCpELddP743sCssuX9rbQFmUfiBfCG5kVCDY3imgvmkurFS6qG",
  "key39": "4Xdxem5QtaucXheJ7JwyrEd67ZeYRTHkMh7SeyEUhYL9szMZkeAq5ub82PAUzd7gejRTERty4HYUkY9mDQBfQQvP",
  "key40": "UGxbB5aRDNbFHWGNiHUGHuUo97jFAfTn22PfZEvvfuz31QNWbf7kaPuH1guTuknR3esETTFNmv72ode6e7DABoM",
  "key41": "32H5w9fHhJYqmexCxJjwKya6TrF3yWQQpFJA1gkw5rHd1nKRuKKnLLCK6TRTHm4QS9rEWtDPyYRj7ueTuTLDtkgh",
  "key42": "Mf2ydiCRpCzDz68LwSfqSkNtVcaPLTfEBDfAyGt72dz1cvKyLAvJ2w4tby6AQUE3XVrEEvD62U6ATWeK55vSKBm"
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
