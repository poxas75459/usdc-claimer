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
    "2vTwnj2GMtTdF5ioUZZn3BCfpVTTgX3HZjEtZcx2da465ti9Pke9yKYjH3CTBS4o3vQS52sb12Qsx6L87ShBbHsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CMKPMQvskdqMoBC7Nx1RRowrvwFG8TpmG7gz3Z1PYdiQWXAc132fXpwM9CC4DPVUd6ZqUEfpMyiTA2s65PV16CP",
  "key1": "2cShkSuPwgKg1AhJdQrm2e4sTFUC5N7zbNgs2QXBPcSZVfghHgSHBPUGAFjoYcCm45YMnwaPQuFaUmS15Q6BAytX",
  "key2": "57ntxvUGoVL5tsYurLtMScjzAvAq5DXyAQiRN2dt6b6hNBJqaw2fFLMY5rK5psPbJoe1MMr3Nw5YjH3BpPV22y3R",
  "key3": "5CdzmfRaR9qmZ2P9tmc3S1AdyjSX7bmJCeTVBjdvoe3z3mEuiA1LGmgFKpk5zHgCgK7JXAxG4Qz7zkg2Nk8upLox",
  "key4": "5oPa9xRqpuy35SnWTHgsSPQd941ap2t1WccnpBWw4JLsmLVRWKEoVdCYg8AQNqh4fmoRdy5P9unLFCz3ZBN7FgCA",
  "key5": "5myasNMxX2xcuNpo5Bu6fjdCtEvrDtWGssRe676MXoKETwJHU84EAQBvELZUtLpS5iP3hgG91rbkQJ3G44UD2kBb",
  "key6": "4it7arm58dKEDznJJBMsb9RXfaqVUduRxZuhwCLEdbLMdb7W71QEERELZ11WUNMgLXGqpm3fRUuC9rBVn2jq6pNU",
  "key7": "3KP8xdhdDWxEBmAF3rg6roxCQWeDhrqxkxxQb3KW2pmE5BpUmXSSXnjg3rdvCFfbf4EDxpyx8r2yDUBwdmDQoS9j",
  "key8": "4JWDwHSMtojNHRAstrc94h7YSAwwTEoSpVeh2BBqc7YJrJyZSfMK2iiPkW8zqHxydykUrTTjdkFDeEevrWXJ9HDD",
  "key9": "5Ue7pkyhNKx8xasyvSMKrtPSK9mZoEox6cJDwihjRrxvYSMne5za2aGNem4RyEAt6YkLvyiiqkjFbFTcNbLfKw1z",
  "key10": "2DXsS9MztwBxTum9G4GQXLmMpBZ73Q3G3gaMV8Mcd84ntw9rUAwbo5Q2oGUYr6S2msLpn1Fwjybxh2ZFPU25rD9m",
  "key11": "XFxYci1fvZeEAHcbigfYMyTk4YRwkswPGwJ4UtLvYPCjo8cj6XA6TxsLYVQFGj7oXXiUZpU6FhrMGcyeSTTmnSg",
  "key12": "4S5ncZUAAm3dv5e37X6tMpz7mHW1L1cRx6nBnkpuTD5gyJvFdkRZFbW7DH1ZUVdreTZ8ecbBiD975RLTwiodGhpi",
  "key13": "cSoHLCuGQHVAxwrdzZcKvSjUEDAsJJhZkDp2pYS9MHXRg98ZjMpaXv7ejXc44EapqgJHHRaVTFYtAfmy8xKdhDF",
  "key14": "2kuL8CWeSZp6JCbj6FVZaKMnafG2MRCdGBCXALQSKmGeQc9igiid7Cr4Lk3CnwJb5DrJM31W73SPR8YbFTMV8Nxr",
  "key15": "4eVpX7oV8RFMFNt9GhCHM9yREmWsJjromUdzyuq9up1PCcqT7rWvzHLu2yBQsx4oxzcZNoSRH7moiqPh3eaB1SsW",
  "key16": "4NxDD8nrR3RXfcgiT6FzoXro7ss9ACbR9ipBdMB4h6wLkzCmumxh4Tk5kGfkyzfZkp7wqLArdqvWYKyJbnPSCUsT",
  "key17": "3dduvgWMnPgPWHMNbH84B3e2HiwWgtGQnMehBdRT4ZPqMhSkcUwEMrJ61DuJh1JWgQvZag4zCqCgxzGawsjijNP4",
  "key18": "5BghbvE1br4vwpUungnYLi7osRj5rsz7tTmSgU3briAxLTRvkkqM6BG5rCvF7kP4fvJJYUjM2LPf9EF1nzHXmNzu",
  "key19": "5Aid6bUqiDzMcDzmo5X5VDsJuT6Bcmr1xamiVo4tRrhtGjvedcbpBnEwytfBXZUveTqkeTZ4MV6EoSv6eyRxmNTx",
  "key20": "28odSM7eTmiBqJ573sZT6rK3DTnmHs9KACstSP9Z5cB9zhfWgAgFCk6NE7Pd8SoZBE81rfbfT8johnHgyrCibRzY",
  "key21": "b7WqXHydUQPt7sshtwugp4vkybUZYADXM3ioYM9WdxebxATCUVEFciZZkvrFwq5kTULMZ2yK5xBeBazy1wP3fWV",
  "key22": "5BUhpvXY7jnyDdNnU1asvi6Ad4s2DuGT15J8ZYMt9HT7yvD1CwPnJq71uyvi52YceREySGHgrU9oxcdedg6wW3ed",
  "key23": "61f2ePiBSQt67VvetyzN3QS9ZV63Kpd5F1E5RSfEWw9qwYrNPZUcw8tYx27AZ4cB8ToMKRPRiAEHBkmtP9R3zigQ",
  "key24": "2yQwysyA1JXMVdBVW8FFeMMfUgMN1mDdJ37MGqNbAbQSMvPDFCaneEiHgvykgkf9E8n7szpWPid6ND3vqpsuDV6U",
  "key25": "36s7wq2vy9va5agafxFQMoVwYZNo7v11SHgK2r9HM85HLrdMuPpHyrDansppDvYzo13GCRxN3FBoDjSCjcdJ9VV2",
  "key26": "4poRKm57N6oxKx98Uncu3Y4tTsfjDf8aZBK2mX1SNt1EVB19YMEXXmRsCQs2o5NeD9EdD2GYtkq5CvXaxJb69Ndw",
  "key27": "23eBddGnonn54vMJk8j2gy4R3NiM3cq5WjgkMx6dRWStcgSiCqQYn8RZLE6kYnG4GeqLwRXzKTF8BWnJRHD4ojPC",
  "key28": "47Z6VNqd9X256a6C2HxVcJ3ECncwssGHxt8KAKLzUxeqYSoXardHXjZVz6byhanDaEAaRogESF4HxaxcuFvzmcgZ",
  "key29": "3KY6qCjXwA9h2J2jXdc2mRVyJs1N9wG3nVZhrvVK6eBN6dXcd5Jo98kByXqJwrsPMHCJkark4NJrUwsRpbNu1v3o",
  "key30": "3MsmwhkoXN6vZsb2pjCecqc57vxEHJudQZw34wJLcMMHCxmZgfNGo4suox7FDCZ9zX5CRWKoCECPSdzPF7vcd36d",
  "key31": "2GLRJX4PCBKfkGFoFhLX4en8zP5TQHeVhcXgjxHa5tKGqEvWMcpcfkcjdYT7u3mYW15Z3Q7ZmPBkw5wfcScduRUN"
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
