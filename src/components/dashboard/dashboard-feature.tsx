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
    "5Ke9G8fhVEVcKDSpX9B1mgkfdAyxd9rqhrL8ViGd1uVvaN7agMNfbqgkaXjyNFkHoAXF1rQBfXEhaGvkbJosa7eV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r4F2wWWiWb98aFmDQxtUfruX7bPA9Q5YsUxrTtonoFDM8T4Gv2honTG2dQrY1Lytp7yYgwYnkES4qbdCGrxLRMj",
  "key1": "4xLCx5yt8VHAhuPtvrAdjtrU9wymHcANZPwKmWp9b5TJQj444pPgzUzB97DWjcJE4jFSsBeVvZ6Vf7KciSznYfG4",
  "key2": "4qcqaG54BeM4T5nyx4kvFVgrNN4FdD2TLgGvrLAM2LocqmS4S9sTS8mLGhWy5N8hVmHRVZJiA4JM37pUMtMnPFjq",
  "key3": "5wkuG5nZm1urABop4jF5keumMaoLN6QVxWjBEas2VyWNWMDLM2UryGUs1R4q7U6bm6ww4T5bNZ77tDpmK52j825A",
  "key4": "2D4EpTQy4E52TXccZnXtjNEEXYk6yuxehwpqpdJr4qfuQvm52n4cZ4UeKnBnPn6J8yCVuBYhPdbETum1NCX2QFQP",
  "key5": "2EvxpXvEjF1vZmaR7vumj6A1yfGo8AHeSJC4JoKrNVGGUS9Uq3XeTheWvV7hTe7mwuun79tyJG6i6vxCSgc7jvXD",
  "key6": "uKM86J46NMbND3FGjxsrU3vF3fyarynpKwKNSXMawTS9ZfDPmMKg9GNjHh5ARvAVj5zxNg3LVsYVQn4t4Wx1ugK",
  "key7": "532KeekSkzFKM22AuQtbq93SumH9NG4xVPoCoAjcf7YavjUrac342gs9gEs8x8SwBudN3PC6PyvCecCHffbBCnrH",
  "key8": "8YcbbEBy4GFR3cKUFGqzMjBFAcFm7hiNL447qjjYmWzs7Phmg4ND9ydkJbJmWhQ686GionvMKjYpvmvpP6hogGr",
  "key9": "5fR7L8dRkg9Eeb1nvDwytbNmTXwANvZ7uGqHin2y1Yrepz6NRH5jDFmH2SpwvFRjkSexKkH3yAiyMGbcMn85RX6E",
  "key10": "Cuq1CzXS5ewXJeECj3EHMMLSDkgbeLHrSU8dCyPaLM9CoFnHA7noHSPJsn4iNEquibRjqkkYDsKb16W5A71cUQH",
  "key11": "y6EtQXBU6gg2Pozw46KGJfpio2ushZVe9KKWyedJo5DTKC8N4J8cLj5USQsf5VHPqKD4zmGdEDhHjwjH6v74mdf",
  "key12": "Peiwyq6ne2yy7ouKi1jRrrV7jc2daKV1HJWXhEQz6nznf8Ddi1KHzwgV1p5YyEHQhxvfEsXMEye1bYvvRYa2Lb4",
  "key13": "32Gmb7GwmjyWEhS9Q17MRYWjPNf3Rrnjkq1Mej4kQspN2jkymNTTUKUguf5MBoMSA5Lp8rPbNe7hdhQqrwSJrtRr",
  "key14": "5VJ6tX7M3duRu9SaTdxX5kwkMAHkoeNCzjyNm4QzQSX7gVRiXJwqW4Yq7gnPsvKsfxrdAiczXY9pZLR3Q37vSYen",
  "key15": "4c2Uxsoha7kjW13RjAfBPABtVMeNFRo93uf2sAyTGbMCXkt1x1DW7u7XNcTD8ZTFdwBsFqDHUUBrWJuZLhU6VZcc",
  "key16": "351RhuHeRTJeRAXWCFsSmNfiVnYwtka98PUxFMojZhG9wQsiAJ6BhFX3iMW4bhYVho8QieDR2KF7bwKMhowy2Nd7",
  "key17": "2NY1abwJjvzKdMTATkCZNtXRXuvc4Fcx4CoibDN7rzPRprdYY4j2R9GXvvck9eaPTYpXqpmaVt4qq875wSLMsKar",
  "key18": "PLgKn3fXE54vDaY2vNKUmCZrw22NT7KVD6S8DbhsnM2iy72aMqsryzkQtpWwYKPUZfT94L6vCGfxzBzMw36pj3m",
  "key19": "2sF4SAZMhJqcQQtcyMietr8DsjaSicqLeQWwe97QQpv4dtKWskhdYKT9YZkowL5Az3vhi4HJMqbyyQtA3SXHiTGP",
  "key20": "5hTjp7jSSmfg3FwheuDS65EbE7Vo2XKBBumZZXRfSgymiquBQCq123L1AkvJa7e3KW7JZizEzy8urkc5Uutz9DUt",
  "key21": "4MNwUC5zxhfTGaxAHPQQQtYnxtgS9REJA3Z32ViMD9BsscCoAcpEni9g2cfAzwc1kgy4N3ir3VkLb1VtAD83LKo6",
  "key22": "3h75mxp52oviP6igdVD6zWZZofTe9Y7veS1MntnpfcHWbN4SBSk32cvwagCPyeRc4Z27sxDezBj7gB8LT9v2rBs3",
  "key23": "4jKZeGupcJUjedtSpj5F3VB7FBsPQBxrWJwbTPzkAMDR3bKRteziM4uYqCwCwBcuqHsivERgVWs5696oy3eb5dL8",
  "key24": "523jDR2J2TaQhzGvWhaJSDBUuj47yBQjkupZhjRqS8iiUJJscuL155tQ173zrW6UDw6AffUh4ugoLHh2KxNfCcxm",
  "key25": "3bKcJJ7xUWXuVbv1EqsbiRdZVjqbFJKo7j6tvHrr8o2wWfQyUFvFsNd14bUtXqes6go8xPJnt1aeYkDNnPGBbR42",
  "key26": "2js2rDewjD3q8n78bU5T9i1wyZhwc9GcXT7mte92TQax88rop2jWKbHtTxzWK7AzrN7Haf4rEYb3iqp4t2YHU3eE",
  "key27": "3fFteDhE71SnVA3h8ReHT56ER4G2yWbNjbVs4aRBiao4iKJ5kovMsfQkvfvUN6vcwRNPwyYiMVeZc4v4qGpPrxpo",
  "key28": "5Nt3P4zLcknvwYzjqr8YF7Ewr2TJvArzCyiFifoKb2J2ksbBChYmQCrowSyG2igcPWk4nCCJzvxqMJaViBEu1Vyy",
  "key29": "Ghf94RYbsdXVaCMiquR2WqszFLRRAFyARdRDNbnFVujDhuxjjR4cmpA3r3Y8FFE7XoMD1QHZVvqrJ7YhqHnXQvs",
  "key30": "291cMe3L2aKR5LEbGhUXLTPbWEn62zzt98a7WEjkLWkcwndkszdyDHGR7T9Sk1Sr8RJM4ge2G2UjZtTk6wH5GPfE",
  "key31": "3TmBKysgiN1iSDw9EcanwDWmuvb4XqwwGsx91ypkMHRA4CZNbBU1kM4eC8LGXMAaJuA9TipoPB9FiRXfUcFQLSee",
  "key32": "4dX53udFfD8dt5tELa4ubrGWm3g2d556CEKJQCEnsviP1Zne58PLgts2oirmYEqzR76SJTZUoym4RjK8xBtprHcC",
  "key33": "5a9a1sp3D576GtpwiTeB9coE11kj4MvptiLBwVQhvJTrKCK7YRJdvShUsFjHWqjYH9Z6pMR5R44csH1KSSS4teuD",
  "key34": "462WF9g8jZRnfnB3bBgnaRoc3J57qBZQzD4VafMg7oAH6soMsvDkQKzmputq2A2cFxVRWvyhp2mEdAwvkJLJNpk4",
  "key35": "5qU32EKrNhyJn76BrhJBv5P2d3rKYEZdctncMRLZhXpeEL6n6sTXhXQ7aQnjy7X5t8zupTysbuo9PtGSGPiQ6Mj9",
  "key36": "3whGd6LsKgfPydQpjAawVGkFuEvqgd5sgWNZBWotTNBRTAZwT2USSLa4mzhaB8uhRo3VP8CUrTA4vYoZ35o3o7AB",
  "key37": "4rAcPhdCd3cWUqFX5nvfvNr4izDdir5yx8ejPqngwEjEkdnxu6F7Lg6BSvAdv3W3sdtDqZj5gJssDodCLAFSVar2",
  "key38": "4wDoFxacFFXm6z7MAP7XL3qjDZRtVfPc9q4KoHbux5y2xojxjdgsXPMqtN37i6RoyTx8WS9MXPCGPg16eGbr4RwM",
  "key39": "rb2M6R2rMTM6fs3vWXRU7TwsvAbi3M9HZf9QUgfUCUnHV7SeXwiGtrZnSJ57MHbdMUMbRWZDXW2ScAdKqXKucEa",
  "key40": "2dWxjUhMyxR9MkiRtw1oxoXSP5E928YkwJkvPTUpp3aeC1V7hw9SPdDJZ7qhktdL6B2Pe852GhnfRPZPbHTAa55L",
  "key41": "61uAJWDz2KBB9besLVpSVQp3Qg1ZEugASRcVtF5tjuZe36BPNbduP9voSMb8bBCwgMxWZ8RJdazvJpthBbMJWdLv",
  "key42": "4k1RyzsTaziY8GiWwufireezfDT7ViwvvyytXRfEDGceM8zWvjVHQR2LXa7Cqn2CYHnkvZBD6svyCug26oFndfxE"
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
