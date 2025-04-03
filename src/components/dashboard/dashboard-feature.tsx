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
    "3fYJEgcWWVHkk4bYsdT564g9H36bbUKw6fKMgLmKKsxtivR2eQ3mp2J1pu4GPT2NKeoW7tCc39UXrdV4XfKWm9Y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32kYpfBk8X14ZERCc3Gn9rH5EHf4U11NFrrDdkiEQ6wYyco4qWMfgWE7VhXWbhQkX6y9AsbEuaP6q8y3PY6CkLhz",
  "key1": "XFfZDQd9Wc9VzGrB75xDhhJFnDrsxwJ5YYyd4F8SqH2zKL2R9f5y3KRYnoXmhheV8raKqL4hhuxdr7ussobvFW2",
  "key2": "5cfbSACz1rp1syqpDnHtMMqJd2KQtehbyhWspow5T6xT8wJvc7aE5os6bmNu3WbLTeX5SmJvGj3vvZXdaot3FRnK",
  "key3": "3CZgWen5LdGpTHSnGZQMp7czoWJzeRBgKHHqtf5x2Lvy7Kdv8Zb4JvtV8VicX77AVYKbs76s6Y4g4PYKNGj4eEPD",
  "key4": "2KBrMrtjdD8sDaiUYpDoWLsqTW8oFAimdJwScN6WV8wvdPGARSoE1VXR2wPpN33P2EXmCxkmHHjLtQaDE2r2PqxL",
  "key5": "5Mp6DRgvNzhq3ZBA7zqxLJFaQisqKy267Qyf2HWeTGcR52fzkVVsYsJbh5Ri8F5m5Ye3wBA9GZ1FFwJpGSBMfk9p",
  "key6": "5ta6XMjJsEm8xkmiALCzeratGfpFTbXP8ukKFy617wM8VNodD972P34CHTGCTEcWEMkjE1314Ch5jL655ntx3qVT",
  "key7": "2eZMgJ9LeegGeg2c66YuNwKxsSirTH2UtSRQ87SAit4rRwW8TyhS1QiV8mEvMc8yYNtR9DF5ZvXNxwcT98xXTVi8",
  "key8": "3mrrKYYV4j68oRKz4knMioS7GRh8QfyRy8xNbQCUWWzscr11fpgNwRT3Ng1cfWET2b6DGVkRxdd99vg5ZEMDgioV",
  "key9": "2hMQzYqxMTU5EZtmmjhutCmf8Fb18YGCWstw4uGvz3MN1Wp9nVto1ifAnr4qpMgYaJLqjEetmKEy8qGhgWoSxio2",
  "key10": "4KD1wWxBNzBhFPKJFfittTxZhkSqNG4DAGXA38TZRczFyE79FHVuiWW5VJAgebkGkhbBwvTeJb6e4mVVNTmM7FWh",
  "key11": "2L9sihi9mueFBxF2m55iJADCphiQWAEkn9ddH8Mgd55jw8MAjk4ZvLXxC2VjDTJwWQtFwSMnHGZUCuGrEnPRwEEz",
  "key12": "LYGKUpExQXvAXxkdshdkzR31Z7TabNA4RjKcfAwXhi432uGCfUighne1MrtxTrJRttjMfehxFqpzspfnFxaMMZa",
  "key13": "2nMJUNNZdNKB1DL5jTfZdBDc5oJkFcRSVJX8RHcZfQU2eBEv8oxJCQmxNkP52BiiNwSxJvFMRrF7NU43qFhgrzS3",
  "key14": "5onF7dotgLrwg73coZNw5JMWa87ssaUD3Jxoy23btPma2rT5zzJSkL4TJbaYzxpQmVMRZhyX6msGJu41s5wAqD7M",
  "key15": "57Dkh9A7B32MGKmPCxrENcL1dk87toXaEXy6AfmUMLWDrAFAPuiivN3Gx5QCvFjqbcrbLwbW6ALYpfpXmABh6Fg4",
  "key16": "byGsZHWkFPajEs9d63TXvkbYHcAAB86CvgFkZinjB9tjPZ8ti5WyGbJvtE5h7W9TFuK5mLGUqzmMDogahHQGhkC",
  "key17": "29Kctw4Z1DysMMv8hQCYLCoQ6y9Smd5pPSARfa6YWCXnjSvhgJwXxgtB7tSsXFK7pCGTHX48WUmXQDgpNi6hRc9r",
  "key18": "584BB5xz8nYEbT34RMDxxREEAuDk9vpXYyMq8oaMJaXKutJ3Pwhks6H5qwoGngs5qf6wWz7sFLwmZvD1e6476ziN",
  "key19": "2eumh2YWBprKxmrT4HBdtg2txa2dMhDeov5YdS5QknVMW9wwTKxkFz8myPTjNnZhLL6yZB1TtGoryAmA39dbCiV5",
  "key20": "3pDZ5LEUyCNBvN9sPwqmaLGssu69wUjBwSgsFYfbbvTSPRvx7vb18D1c7qz9dUg7KNZnk9oQzXRXGL4LtVJNN2xS",
  "key21": "3mKv3mBs4RhTvdHFsYfsMnNoCnR9hokKX1L7GAbvhMMNtGaRr4odEQyn5cYo4NKE8Choi1epJwQgkEnjJaG9Wa3y",
  "key22": "4B6but5WyTmMsccb5AePCDubswq1Z5E58B1c67wLnzW9bZGENRF92AEFWKHZmymZrLNfF5k5jC2FK4mYjhj4RrFS",
  "key23": "qodT5Z4uLNACFPsGCa4gXZ3UEqa37XttwwKYwddZYnuV79gXpmP1tun2jjKksrwvwXPWE3R4HfrgjTyj76veWRA",
  "key24": "vKobzgJGMHssPvU2zzU75uEEPgq64ZUps9E4CLe7f4pmVUMYKYBSVWRTtNyFA2zVpkMAHcrAQ3YoAJHAiMWpByX",
  "key25": "2PkN7A2NHdVrhogWAGUwSEsvK3gKvmpu6PLT9ryF4mTtxuvNzQxHi1koFHzjHNeFemnCnovMrKwhqjUk2E2j4dcv",
  "key26": "3jkH3C1C2azpWgjMzUgCdaNaLTx5N9epMRWTR5hYhR3qSP4t7mjqBWwqgKrFS6irWCJFJTJfA9e3sofdi2kdxnPe",
  "key27": "5R2kLhVMZE5DRppchqxeudzRuDtVARYmFYVTiGgMgDNJ7RmHAg7NScF8rKjDWVJaVS5ZJ4g17MyvdZqtRaJtPNei",
  "key28": "2bcm2pWJRRJZXMEoE6MqtwcDxmhujnBDHgZtVyGWztZYCQiHAfjVkpAdBMARDaz9MbGkufYV2Gka1uYahiwKwDYs",
  "key29": "4rFB6nyhCitQvVpBZBJT1GctuBVUkJELXyQwErH4Tto2ps7u8hSh7a5smBQCjQsWmF1F8kLYLGMk4a7o9nNpcUwr",
  "key30": "6wpX4BLKRLaNRZAUyuccMUgpgBzZfPrxpQ9BC4NNzwux5k7cjkvNEXBWsAkSTNkSGPhtjxiY1HTxL4BMfZxmQw3",
  "key31": "3P8aoN6zKqx2iLfLYZQf86baoNaJFbZTQSXEwCZbzoKhDyEEfpk1tBi76Fkha79YURQNYDan9uWUPr57oeuwByjg",
  "key32": "QB76rHKZn7Jk3neMoAQvyFxjBSw953S99TCYWfX6xET4LdKkyZWZdFfCMFknsCgnfaiip8k1yFpDPkStB6KSYBR",
  "key33": "3hoN1aihKALMAtVLXeDnZwsG2rKdEcRWtsCyPv2XXxcPascuaPK6kxUE17p7D48aN8bcEP7vYPQHK5Nypekmj1yD",
  "key34": "V2FoRWgdj9mwEX8x7KqxFduRiHyCsY37DaoLKZpSordkBkFoPUbWEAaXHnTr1r76hrWnUpWBYxVkdmZP1ExQdUn",
  "key35": "5gE7KZ68kWR6GmDL1vRNxjnqfyAC5ahFzK6xs2p8TbW3g22U4HCD1y8hXiHg1goTEMvQuoZw6PWr1pg9G128rAPD",
  "key36": "4HjY5LunBYeggZShNPghAwe2JcLX5x5jsEwimWP5uwP6V4j49f6xrGhGxESExCmWmmwFu1Y3TWPjdfXFBb3bzkZy",
  "key37": "4BreR6wSc12PVmNc6GLHbS4FDJwXX5KXxehCW2tt2f9K4jnpn2H4DMt7gA72cJwJnVeJ71KkYYvwH6MD9mQmQU5c",
  "key38": "4pG8RDkcRMun1aM8hbJGUftQedCtibwY73hia1mi8DLgfWYfL4SXvp8xDr31PJhamaw4QCFATdY9CBG6YYCXhoht",
  "key39": "53J7HjV2mhfUfTzJ2cGPoijH2QWRDMK7eNzTBvGrVup44766NxQtiFSV5rdR6t9WeoNaK7EZzgj8kqz2PtftCKdd",
  "key40": "2ykiuibhnaVwRoQuVh4foSGRQkgEwW7KP67ffcoVVbLBk2gDtChXo8w8aM3t7zLaDckK4wkBrg5EsZR5eC74JE4A",
  "key41": "2su7YrH79m7kgYvCuUp25vv4wjg4ztvwtTVUPktacBw7zJTU7T2P9542Hr282gqWqutV7nwqEF7twjbgMcEDhrDC",
  "key42": "3PNNYx1FzGdp4NU28PVrDLDhVXZYFjJLnLujjandrrVH68jnMsUhojP8Et4ERF894FCHhd9qajAmj51Q2K4Fc9L1"
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
