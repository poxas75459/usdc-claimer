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
    "4o9D9rwfSNYetWvNaLbDMF3hrtTPj494EJzD4BMSyRGwmDyteGxfvvJAsjBSLP2zKpg9ys88uPpqgfkHDLzJMnn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FG8qexEHqB7d4yhAYx6am6AbS79utpZ6JjFFGzhGN3fJJh99TqSkwnekcSC9JgN1GZ1HV3LnK8KM2s7ZAifs8qP",
  "key1": "Vdb3YCoUx4eZctt2RP59DkwwbmupmqZfCv5FMtjnkCYHWXvAZChJdw3jiGQdz52cTf6bWd1BupWUqhBfiKhwQC2",
  "key2": "5e7gYhC65aRBXPYHvKPTVm9w6v3PNjTKD3r1S3JcNqCeG9FAmHAFh2Tr7uA2apxdEHdfBAQiaNWKBAYxsRDVToj4",
  "key3": "3n7Lkeo2mFRC38qtHQfcwHrBEe1TGGKTogw89n1PAqagYaRCJpjDsR5WRXWPW6EnjXd5yCLpY3oc172TQRtPm4xV",
  "key4": "m5e2pthzAxLb4frnNjS93UbihVZ1kN59Nz9C1GCQZy7r1QQALarMkcLWDyQvCqgpYhphZnpR7gf2V8YZ37eggtY",
  "key5": "5xuWMyNHSrHULbnaajeBLsyDfZaSaQwkswSfXYU67iBZ5vJMqZH9Ubm8XajZDrocYxpdXoBGFh6ijRrh2sgwfyDX",
  "key6": "2aJ8Kg3vUe9cwMTayJdoYUgbo5hZU5R62tQKTCodnohVn2efESFFyHiMWqxcpdyYdnTWh3yxXxPC5btMUfjUkXi9",
  "key7": "7ePh7hMdvVXRPQraUQzS18CgsLYzfpM5xikaePeRTqkutqUBEfHFWSMcSbhMoDg7aGZm7QUgqK9z1sVc5rbGWSD",
  "key8": "Wtya1S6QA1grCBoKBH8AxEHUFriijsaTK5q87SPC2CmXzoC6ip669nzSwKaPSVAdcrumby4kCbyV9Z2Pp1n33Tm",
  "key9": "4dvVX756L9JHQpjaKeVBkSBTvgKr81sMfJTioAnAsLSrjV1ivZYDaNBrLTSk9sX6gBR1hYp6mDg6anWrfAs1YGyD",
  "key10": "28K6r4j5yExyhDEVmPU1ZnfLPQcSRLeYQupcEriN4VvzHk4pEiSwciSfjR5dAMh3rViCZpQ9BSRsbPiUwoAYsGZd",
  "key11": "gk6ngBLZNzs1ZYFjfWnHVX5idx3E74heMMyQDGDvyNASSLTcCsJXz69mtyTU8m5rgj9q8gK5EosywvkKrXxRSHf",
  "key12": "3yvThWMpZtEMTQzdN4Pqxz3cu3rZxF9yK2BYsSD8gH7ZsVCkxssaP9DrKwZVoxEUT3r8i37VQSZb6htnrCm8bGtV",
  "key13": "2cWHB2c4c3sCHCfAwiS5HBF47KhBnD4xK7mQL8jUwKx1GdxqjSVfYVBrzVwpRQUD3kLxRxdfcJyqoDjkoKr8AJ2y",
  "key14": "21gpe9csU6jnC7yGy9d3s6uDgxDvH5S87HH8HkrkVkfALae6qVq3PU3Wk9gaEJNTuLuq83r2ys1DYxFUHN1yPw2z",
  "key15": "4iM65HX4jfmSxDvd52UP3va3vXGCkDERpMT4mZAubT5BQRNVXTdyMFZMxFSWeLnJWPPD2u5z3rpw1scCDmwAUhJg",
  "key16": "5uJbzN3nitEmmzW4RUDaDjYnCyuH4P5XmLTaiFa1wg8fk14xMpFoykmbMLeMmiHz9jyV9XgQDz3hiPkg2551NYMR",
  "key17": "8NcPcMQbWL576CkJudifVSxkWxorjrCcBRemu41f6t9LbSZJRf9SpU1ULrQaQVt1Mxh1f7MHkDyTEEvWcYwe7AZ",
  "key18": "4t43B5gTLHPaG1ubdZav56cc5mFPRdojF2jSUBb2NCYLX18aVzGuMKcdBtACm1hVQWzQPVNJ4bZsieH6VTttU2q1",
  "key19": "nacUjTi3bUSxtMFkE8nv97teYJ4jvwsCwvuamB6mZ3htkuXAwT211kABY5ZQPBnHZcLHE7Kkj1aBmakY4AyQ1Po",
  "key20": "67f5XRQ2gJR7BPyBe7dxjpHEWuAsRoikKNqjPwg53CPrVau2ZnFcDG1edvsBf4JYuwoxVnERF84Jt42KNS3Cup4R",
  "key21": "2z1dwEo2rMeAZCiR529yyF29YTdHUufGGuy81fNG6e2cmczLfdJKT69GHhqAuurcHrcdCkNTrXUitNoniZjXypnP",
  "key22": "5xeLHKeMXL3UsXZ6BDNj7yNtfqP17D7SmLqFhD2xhNzL9DuxcVmWaKHMDX8Nop8ZnjWhjGTsw1iZ1DfUKZRYKByM",
  "key23": "5ie9x1p2RscDcCMd4Ezdv3HsGXzrvFpBr3iwk3bzCKoWbF7mXSqhPtGXDb4j8ow33nCvnX2SiMpmU9fZD6vRmLGg",
  "key24": "4WNn6G5R5aC5UitJgU73mN5vS8wy7Ree6qy4EoGcGYcZFwHzrUCx4M2SqLg3aqXR7KMs3W3pAm9CeCk4WJfzTuyN",
  "key25": "3BBj4Pr65cgf4UP3QJh6w3kVPwXRGFonhZtHxN7QxQGTgPLDL1cymFB4CsZTHgtrmV2F6KC6mz34W9ADTobuPoLf",
  "key26": "PtcgyQQVdsxpnbGjfiHJcHcRAgahU1Fm22LQqSvH3GpT7YYMZhBc8Ri7vyugWR4eaSbkggyyLQ7SC4hoK6NYtHw",
  "key27": "3D3uzVZDK31ZcUgLtXE7rmz1nwRS6MUNyJSigtwsQa9Af2gruPsL4WMQA7KE4TzRL28RzfP3SfGbMNW3PUrW4jsX",
  "key28": "5D2x7ah75yhtCPhoeYpxQyMfueWYjWiLokzZhzNRkyGxX8imj9thq3L4xkoLZrpSv6isYqXfpCTsgShpk8bTZzob",
  "key29": "29pSKfyUR3XZbbHtJoBWjTpXJoH4gLRXW25sNdcYDjqdTMFvSHbTagAp123HCMwma2TMq14TGwrALq2H6fNV4AUe",
  "key30": "4NPk8gYxSMj4SyJABSgJUTFWad49YHaEPSa9M6yP52YE8gBvHrrtYBAcS3D2nL3hprwoaW6i3XsUqMUEsVjmTHJw",
  "key31": "5J7qRgvsHB9LewiMsD1iA9vvSBZUDGC2SCd4yA8mFJXWSSEcg414CdnUFVPP4hkiUbRsENgYQrdFkLmRnNUyJkqt",
  "key32": "5jWBS9kcugV3G1AbzneKCTGYLdPTDzxWF8ptw8ViRcyn2cf2RJzTnukCuuBECbgJKXvPuqXs9UXAvpP1kphzazFr",
  "key33": "TfPMkdgmfhdxcY77An6poATLqTv19amqfSgmZ3sqG1TX1Y9Kvgt9mTpj6U9jVgrJbDBtqTDFeWpYds5JsKddSK4",
  "key34": "3HnPGJZNWh6u55mjRfAnTrxq4EhuJDVTuXCVCqe8jXjKvMCPCcZS4DYFgjvkQGyh74ybBmTdW1w8SPpmLkB68Cwf",
  "key35": "5zAxDeJbidELV13tNEX14EuijPyJCbdAZW6n6c9YtjNGhRafgdjd1mBdCwrDodKmPg5vLrtdSH3gsXtUP6CnZVSV",
  "key36": "3X5fjyWYKXuaKSq7i3SgJEfAjNtsP3WZNFRCASjgoqyLLMZ7Ff5NWsaRH5EWSdqrWyWHnUvDXF8R3zpPZknV9k9N",
  "key37": "3zRLp9PoNBraSD3w8LA2iGWRgc45BdijAiHWFy3ujRTLa5f96gLYaVj4ZjyuJSfG2fPcLEo4SUkNhYw9ttBQzvLS",
  "key38": "3T6ho3TjNbfy7eesRuBKTJaMWmAWCTgsbxgAcNRuCM4dhWEHR7VXEL2hqoc5vXsvvcbqmVEVMTDqrYTkH6a6tfUe",
  "key39": "4qGDdTfNm4pPMy3BqaasJr2iAWRa4PNpZ4JxzWr89dh6aHqjZXbL3JPnQSJz4pbf7HoDE3GkGPziRZ7LgguYpF5",
  "key40": "WgGQXob7WSXJgJGwUAVPEkbG28ijU6wUSXpbPqKY9yP7wzPn3obXoKexeT5K4abeDpYJgRi4VLuVCbJu25wzmqS",
  "key41": "3eRybPasskmgreXPxzdL4NJxxjs91cWxXs38Fq7R6ehzvrwJKxN2X8SmjpG98asqq1cuf6KpUTFNWPcoR44MykkU",
  "key42": "4r5xLWgq7WW6U3ccLcvwDVFXJ9iRcoUACU9ycWbDuSKAB989iXoAW3JbbnzuS8kk2yVZA43ce16Mr9MbS4BCcc54",
  "key43": "2hpAoTtLybWDhZP6bFwjHsAHiKgu6d3k9pJ5iKTrbP4eNjdjVS9hgR5oGWxVCxJfjRGb93cQH6cXsZXPkbfrHtLf",
  "key44": "NoDsVZ2mhD6wPwc1VrcS43s9xXJUnqf6ksqDEE724s8wRHYRoYdZxBizDwSbiog5jw3e1afkF2FCDCaZmmkrvhN"
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
