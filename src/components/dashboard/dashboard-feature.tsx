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
    "SYSST7F8ZJPfPvRRYLEkKYsoLHu5PecTZhYffEPxrsooRA6emb5borNVBg8uKxSVnrdf1z3i9rz9C7JHFPFAnCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rA92MXYMQ13acHMcRbrGFYbts9d5LPFqS8mExfCVzRjL11z7Gyp8FnxiBA1xJGJUAUUJwqHQQE91WAEcQPubmUF",
  "key1": "2qWUpDMZwMiZH5GMYxisiVRQ4bKaKkc91pXsdNkgQGZxVNDgbHqx64aLZUtbrmC47LxS5ifZmQ5gRmd62XQUSQTR",
  "key2": "miW57ffUrStoJTrf8Vi8GfTFmmVFMxYu3dvWLX9ZymSQKE6wSG3hVK7yeQjvLC7BWQCMjZtkQ7bAHuWDiDDSbbD",
  "key3": "Bi1tCPbTysxkAvvAiMy9XtxYCdw2bYPrdKySRBYYUc9cEj36xLfaruQjsdWMRkEGmVtVVq83XWpDpyQoRTrBg9E",
  "key4": "zcnHrV8R9jbJ3haAGNk3xk2Sg84RYLkBiAzrAmNsDsX2gw53jMyEJCoC6Vc2ePX7t6zaaZRV5UgDN9gQ6BddMWr",
  "key5": "2pVFGusoi5RA73Fme1sXsc5GBvK3iCT5V5zWRj9NrEMitVSwcw9B2XhwPkfePEXexBBfTmZuFwaTJPVpwTj2eqYT",
  "key6": "4auxJ4HEENh2YocieRDx3g5LTathiGJHCLcJQhbPZgZVMcA8yX3wZ4uhwbkA2nFKTruKCKhs7jh32h2bfXidygZS",
  "key7": "2NEaiU12seSZwMviJfn9jcditCqTMieoeU9YjwecvzsCJrRGL4VmTx1uXaz3VetArqYGPB61e4qcEJx1xeoBM8CX",
  "key8": "5rngnxAadaH1ZTK7v4SsMhw5YAt6eu1S1jEoD1ii2hrj7fjfX6tH7iMgDYLtTaTqM1DgLzqyKBwpbDRaJckks1ci",
  "key9": "56VL45MHNuJi5NeJBPeRRnncEr1m9GUrZpxJeLSztoNxyLzSB8Xqk6ErnaZxDyWHJ6tBPbep51GAxwAk9xLxFMLh",
  "key10": "MKotfyxtdKcLT21g34Nv7VYbQXJmFE5YyDG7QMWGA9sdNP3jYKAP7kTAz4G5ortjXPcXRW9hqBV6gW4qou6SXKD",
  "key11": "4xp45rwpY5CcSAGHPWtUeHAsTrwvpvu6W3EtZ7bFqD45K9JvL9p8PpLmXSBQz89ALxMqCmCF9PFb5beiFxrfZ1hL",
  "key12": "4Bwvw2s62PYfuXQfQgr4G5UVmZnVoyJpxpWitXphM946toj3yXcc3HNBWYSYcR8DwacPbJf7HgQvVTdFjJMgWy7c",
  "key13": "26z67NcQR4nex4hixefa2DDaB1SMaruiAVKoyHx2ZwTrRgfjCRJ6AcHTFpigQNFygegdu3GthKwpbPKMqeFPy6yJ",
  "key14": "5jMr6dySF5FZ9SeKwpT3dkXpQJgWDp5mugxDqZ4ZoN9f3Zd5hErxJY5RNRLzwmhS4tjCJegBKrvpReV5JxTBK1HN",
  "key15": "3FoAQHYAyP2oftR6pDeU4eRRg2rzhKaTr67xV21M1KQ7Nwv4zJMUjeX67YHVrGgHCcesBUdJsmXjh79CXuUWwBq8",
  "key16": "4K8E9koe7fKc124zjc6i9DvuynAqa3WDSHL6EuQ5U1ZCg6xeYR8b5KoskM1sAmPUo62gCmMPbxw6yHMN3B6j8Pfv",
  "key17": "4QeX7Fdki8V5FqWALPR3Xx6AkhxMjFr3if2mGpEGwJxjWAh5m9m2fxPk6keh4TNoPSaSSZLYcasGK9Vv7nWidD6g",
  "key18": "26Dqi38nb8WvnS6NaYoNHEyUQY8ejzdgkgYKo4nvoejQLZjkax6etPpn1qsEBK69XrzQt5iVNNqhVBp78UxXN1Xp",
  "key19": "5ZGKYhruKWaYhQ7Az4e9gXAmLQ1GEtKkbP7mxCjpDzkr6poixo6m7MUsH1hqAaaWwuTcNL5qnnxAGuxkVZPurMSk",
  "key20": "4TBBbLcjtLfz7HX2JVK19qtkdrJW835ihZDm8xjuvp9ffa7QoPzarPMMGN922FmLwYxs5KSsMjtjpZwnK4KEC6fD",
  "key21": "3CmE7hU4EpaJ7ZAX6ePCx8Q6K9PD8GjPZq7gKKqFo5N1igGyqaX8Yyw12DjWPffgwzdwEirRrDjerNENLQNRrHEZ",
  "key22": "xsA9cZbh1niPD1t6dd8RuYoR2ZPR8icr8bC8SzyYoPBztjhvHFfwMNdpBpd8ov8pQCUHYMUg1sA9YgZyWxcstFo",
  "key23": "hM4FeUuGfop7hszx3T5dYeVHmcipGytx8T3WVgoGro6eqRWJ5Q7vWpjYWr4u4gcU1Lh3p8CEauVuq1s2tuCWBYb",
  "key24": "mrRaVB2M6jbMbN9YA9YWwf685kztgvhapFwpqrpGSE2sziwBpEznwjf1qzV2KPig7wzih7Bsfwg8aLyMV1BUjLv",
  "key25": "2F2uU8j9zPGcZhZJW9BjzDKAxHJG4r5pVmG57DTAg5NRpi9vsobawMjj2UAQiwtEybUT66Ls2oK6Hhu9YU4n53Vt",
  "key26": "3B5UJaVZLLJa6A5Jp7bcvx6gkVEQmzf4ZLqqZ7g1CMpkvC4xWJKuiSaMfKFBD2AdS5DkYXPi4C1XHwbthZa8We1c",
  "key27": "6F4eeAMAP1yJWjZEmzdnJQCsZsjmuojN5W5Gr4eTyrEf2uN8ytVAUhMkNXUvwwZpMmscGbHejbAdU8SGg7ziToz",
  "key28": "3C2ep22YGVvHc1tdijomCCoNN4qqrA6TSNMziiCbFZsc5RQyxM8NT2SwqYzC9KokJ6jtnTkiiQVKHxDEgfcTsknF",
  "key29": "2zxddJyqBzQdAqjZzKd7LBs5dLjta68TCYf9uirTNijzR8rhPjEzBizfPe2QqFw3rzMsinCfMucp8vxhPJyKrv7Y",
  "key30": "2K9i93DFMzvrz7DeExA6ELcSQ2caB8h8SQMstX8p6tAzt2tTS9K3G66X1BNoMLHVNAiNC8Bacc2QYMMK6S2YEuEK",
  "key31": "j7f4zM8szwuhP3KFHwCr3GyzD8DSHw9W9fsC5CTAZNwhN7V7kZUSoSQTAuHHzDWjHJZfg61ySuNNhqeLSb77KE2",
  "key32": "3SpUTsELHC3UaxXY51qB1xDQcPZmW9ZsmdW1retzTWbmmm9ti2TfcLNjRhtS2Ci4AbXC36XGj3fipoQPMv7Ctpz2",
  "key33": "234apmovLTGATdYMFqojdnLzochPj8L1sS2kzZMJuYqL2ermc39ht5b7Ws4jn4YzuF6dupzy6R6rkPvdFKUJ29gn",
  "key34": "Mj1iQzqzUQkjA1UAg57VXJANZzGueJW9c5FTW3kG51tNDKXDD7BRirv6sJvAgZxUX3bZCqMCHASfjCrQ14XQsJa",
  "key35": "3BwQF2YaZkViPxHvk9H3pvmkQ3Vab9g1pxjihCoXVKVoqFoox5kaa5eWfB6xnPo7MmA71NBzSrHq1oYtyL6UpiHF",
  "key36": "4k8jSG8gZJi5bAPXG1xhVJUS7XeCkxT1wyj8KCfecRxnta7bq1LZygokhRqWRWf2aN9NP2zi4SEnQaRQsw4fvQiS",
  "key37": "2kL5Y8Yyjn6XA2N5LbYJYyXQbhoNjrpnsM7juUukir7MVdp4L78aFQutntzGsyJbVwoq1r8o7ETfnfWYMESPtyK4",
  "key38": "4frqQgJMfUXjL5Bcza6VEf53AfSuC843YRxn7kbV2Kv4PWq76T5sZfv7R8syF9mcApQtf5tZ68MJ3LPWxCwv7Q64",
  "key39": "2PgsVDqNbULLtuuRcVXEdC7dRRWBtDPMkX34hM7B58DcrNrurftHhnzhwDif1EExhZcmZK26BwMHifWd5HZmWK3x",
  "key40": "QBJG8p68X4mjjsUdKYCqpHmXfQNPAJHs9ryffVosWGbwji4f4jcCo4QX6sEEwCX5q8CbpV3VDzpMkvJDKZx9dZu",
  "key41": "5Q63v5LgNkFtc8XE8oUBxz3SjwgghqqHn9ASsr8cPVGSgCuisMvbxueQXdnkqrm2FvL3aeWZgT9ZKY1RTy6UFDuR"
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
