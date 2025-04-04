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
    "2uBnEBoAfZ4ofeoUnsZ1ZqHLCwxtPGjEfaDbo4ARFd2488BGhhkfTu5fLhrttr8qRQRYPY1Hxh73XCXbEUfxNQdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qDg59pokTQmTAytJfSKS6Uky1t5DKczp41XmZBdh7v1tAgKasgw2iZ6Mce6cehKymoFi4XwF6ciUbtu1pSbQRC",
  "key1": "3vD9unQ2UApZ6xfEnaq6cWa5RN3NBYwZYoHtueNBBuos8L3saAwWq77UDvXZeeLsWXU7mc6P6p9FXDkpJGjQ6v48",
  "key2": "4xT3zRdTwDWEFwRendtS9sePAZo2XM3e3QQDfoNNknUKy1gFNKm7gAuuNTpkw3h2TFHuT4BdY1rmsL2RyFtuwP61",
  "key3": "2183d7nuSJjL4e8rbzXRS95Z5A2XC9vye4ESPQGS6jVLQrRK37Wnhjk4Gp2KwyZbdjt93zXz92GNadxG1NZ2x3uU",
  "key4": "TZm7ToFQV8vVLfFyCsJbA45PHRrHchGGWUP4j81eZmpcdA8LSsfAWWn9idB8JeqaDT3HQsZAtT2oNBNUVZbi5t8",
  "key5": "jwaR32HxeMRHUwg5nyztYPutw57Rm5AYkucbygcUv1vFbQVZuW5XW8HZmXGoBtRTPk23qQUHVeBbCSTUof4Bssr",
  "key6": "BBekDm47BhTGWDxuDyrL7RX9JSAvcgSK67oZtsXAXP5bE7wjeFvuZYfLzSR6cjWzRbeVhn4qSsVTBAEQwMRdojM",
  "key7": "3SSrJiuPKEjAa7mFiH1pJhbKEr432EgPHuPL7AiDTr31NHGKfmNZ38iMuBbMzND5ggeD7DptPC44d7hoEMrLSSKd",
  "key8": "2HBcdYSMWCnFjM5PY8khRCCDYjdtvvDHxQS7e6GhsBnJiSKPKsFM48DRV4tJuCU2mf5T2L6GeT48VNEaCEu4ikpp",
  "key9": "5BUioLTyU1QCUcNgjmheYKRMTDEea5KJBQw82zpRXQAUh1BwecJmivML5VDdfwuwZdRuZGTXEEovW63ViNBwszWw",
  "key10": "2RSNPtEdP188jL69wf2yoczuhmy3NGEDgy6FTAxZjTtTxHSw9qbNVZzEMJNDnUKxdzNtDDdJ2fhLZC3qpDKYEcjj",
  "key11": "Yu7tGDRDhG1vFpWK626xhz7Gik76C75saojDP9QrR5T3YDfSyrs2NPauGAQS1GivBa3oTuxN1nMHhGHGn7Rqxhe",
  "key12": "4njnj13ZQzZM6Aucy2e8h3rAYanMUYhPKG4SWBz21DE5gggxTWLgRPvgMriS86Vkxzc1m5aHZtFGwq54ZcRWSmrC",
  "key13": "21u3TpTYzYjcAkhkZAJEVT9Hu9Nqwmmrv1a9oyfGQ7Te8KVrqoeqmGkcUuJWXivRoHanebojQFEK7VX3VJePJZXx",
  "key14": "4uriKkVXFtU1jLhK19eYq9MNbY74H1KTJuopEeZam6Ei9efr68w48tjUjt3RShosTExErmZwcLhSywEfj33msPFx",
  "key15": "4GcYjpterqWYEN1URt9GyzWkRdReQ6CTsKf8vyMqx9WnfJRc2ALYx9HmAsa5jTXNCmoQEfcr6KiAJUbJXJhSH7Ro",
  "key16": "3BY7rkpkfXLyfX1CdSuqq8R8WaKsbtMdymHRvF9EVLLLzhZW7kRa2xYdTehFucvTBJNmLf3yocew2bZShW62aRSF",
  "key17": "5HLtKm2QJpehp63q92wxXVw8Fa1VdxjHYQc2RTH8hdB6qRYbyxYrddKZ3kyAxsDHrcZDSwSkpBBPHpqSwLFMHNhG",
  "key18": "2BhrZU1KqFJ45BpaP6HkThkjreXL5qgZXFfbbKGnn2XG6rTBpozsifpwmoucghVFMZjaUZ1dwyNfhhqovxjPJ5ov",
  "key19": "3auhzZrgYXAu7XnyLcYP4qWwVL861NQHQyZg3ozgJFfwEQnZNFD7tKRKDDN4tLqi1dkMot4JJB69QjrgUo3PHMns",
  "key20": "2x1qGd1db6h94PjdG6Bug1jT9VFoiZiuVnN9DX46ybWRR5ZehCKmJ3wLNCAo4fATFt5U5q7eM279tDVx6QtqGM8e",
  "key21": "5oypn8vVXRDwe2L3SQ1YfpLpk32aqVAast4ERq7Z73N4h3WrUTW4Hbydh2JVzQ38BuDDpE6xtBgbDhqX1jHxpCBf",
  "key22": "2yC6S6npaDdJcCE7khVNoUeVub9Pzsojc9Socnk3Zz4eUFk2Lfavmrdt1tGTDMwR4nLG49eGoBKaaW4VPe72SuTW",
  "key23": "WYMnYds58S39k2dRSCDSDCLmXiXMGaMM5JZFTJpwLthNvCvUekkaTyJZ1tfd1Qwsw1vSBM7zZycPtTQtAdoWE74",
  "key24": "5E6pZYgtc5y4Uy6X5gVZvjfsMYPyqRsc2LK2qZuLRotqRxWPmFYpdCjT5CSvPuE7XYgDdvhksji236gw9LV67cxh",
  "key25": "38LvK2c9sge1YWxhPyYJ4iibrVedyYmusibfyCMSiD6ihaoyKGxfWtkEti9qGiJ6n4Na9RTckdyBSFaZWT3ZM2zH",
  "key26": "53e5388P3ErbHuEHKhYqSVzPANHTVQWAxCZ5BAtCERK1dE81FXVQ6qSP7ULwWgLc4wEGRQg7RpmS8vX5jZWcNvpn",
  "key27": "5ZVEv63FvsqSt4RT3m8e8auUK8U9ywR2uhJNWssJnawmnszSqL9GV34xmEUkbEiBmobn15EoTFViYdNVS2RSCoHH",
  "key28": "3AeNY5EJLoqKcGxTvXPMgL2PZfwsMNxPtyBmCcxxa2vdSKsjfx7adaDE7RqY68MXZJNm7P59JheJAmTKEeCxC1ui",
  "key29": "677PJwG938y3TPTYyKrfzV5LkWoJfrka2QaDX5zyKVxaVbZMemCqWu4jn9KqBVp2yJYS4D6pRDxEB8uKRDzWbpur",
  "key30": "2rYBzMKWZkKrZFJKryZQKJEw67JhmmkDBQHPAqgQXQuPLDBQtG1bCm4z6jBuSxeRk2N2uprDhoyhDtCiXkq6kmze",
  "key31": "2kHUvafdiFUYjTneCjqCcU3F1i1eAcCK4kssC6KuZdS97tWbvYPttXY6Z9sJAfaTazLUH3MujU8V4h8PPkeVWorS",
  "key32": "61Hiok61o4yCH2NV4NP388x1Z7J498JJPFAaD4zXycK34uJedkbo6zbJ6acs3N1ntNPGwhd3WiqkMsQVqSUZ81iJ",
  "key33": "5RC59Ctt8DqJnnHXbkkdKkQLz7Pd4dixnEXXb2GrRuVFFj7XFpYRHjECRwM6o8txMRoULPWt8jZEb3w1THJyckmk"
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
