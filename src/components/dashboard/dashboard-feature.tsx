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
    "258Jza85zvJE9xnYBvgtC8QV9Gkmne4oTCPtax6Yz58V9wMuvXFoSjP9P3pd8NtwDFfav6JsQL2RmGnJshmkDuM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4StC2V5xCEr2bcYXTRPGRWwq2NNxZw1bs8KQcPgucJpm378mCzrSF4HhzDJDB7HcqRzEt8158dPKgZb3Qt7zX52P",
  "key1": "5qfH6L8hM7vWMGaVG4ZSE9HN5Qd5hjM94JaUdgeNdMbEnjR8CEqy39tRcJEHk1Q7qisf3GhqDrEm2HYCygnLN2u9",
  "key2": "4qcxhCgkNDGeqxYZ3ta5fWLgrfMQPwB3Bewrxjz9svXTLSRVF92wqH8cJRRi8rdf1KksgnoSpgKjS54Wkgossk8e",
  "key3": "4A9LGyg4M583Ckj8QquMSdfFuetAoq3MCN5nUo8jDHrcHzqsYUKoEW2gJehxngvrNMDe6u77ofw9cKxzVhDHF4RR",
  "key4": "4gcskkFGttmLH7K4AnqJwAr5UFYUgt4n6AB7rAHHxX3L7rLRdp3CCtuKXMMuwLvDEpRWU9gX1pHYnNSV97SRjvcZ",
  "key5": "2LKTNzJHGvk8S5W9S8gFUge8fJwABwDyxdE8rAmwiRMZ9tK4nofjtGZ1f4v45i5UWe94eyDKeVF7KYdiGbNUBgdD",
  "key6": "266kc6Ezpm8tDtKBC8472HpKkoN3gtTV4SgF397hoGkb9EaaRCzGHJyZfo2rSp6vkavqFJPpiJZ8FHx5QL8ZuBTS",
  "key7": "5tp5QBL2YwS2qEHmB2W94THGLqpDkCN2QHeUXJHbCLbkmXwEbJdfc9AJx1prNf6oFK1Jd2kyz6swR4LEKvBVij41",
  "key8": "5bbB8YDz9modTowH7qwfhugTApnk4L7G9eRwAew8cNtgkPhsJf2v17UrkkBjiGBtpDVU6NnefGDDL4nwo5yJPAz1",
  "key9": "4Te8dk2yX1Xme5KX8Wb8eb5mT5QwmiMjxf9SDR9UoTz3XxuF9k5yqBQbkAA1atomgJTngrRWebVLuWM3sh4JJpud",
  "key10": "rDJmrH9T2aAE6kLDUJDMELoVBZKLFwksKjuYY4CUqg2RfJvxRaFCEcbnfC8jqmqPXHX2LvEqMcHH1EHzcGRX5g5",
  "key11": "4dWsTN3gGuxCewrdVXSh5QrHGTnCVd6oDVMW1bJ4gHodKey1V3jasq3pbWyGusLuSMTpbLxDeEn1beuZjwrWhTPf",
  "key12": "35jPRNB9CLwqMZAxXczjcQbjUxqBwhne3aXUfvuS7jir5hiBt661dKUhqE9UC9r24Nb8ATi4R19WqQFKsak7johZ",
  "key13": "ssWZYQUCv5CZyZfN4XFw5Diqw1eyD4zeHuGsGemV4qnFsX8xi1UBc2LQC7y3RjuYjk1cmNjT3GDdYhtxpccSb7c",
  "key14": "4kU9g83WsM9U1fQmnA7Y2vw9gegbcFDyN8FxZGsPoVTCzwBfMRAgotk16uSv2FECQrCwstnzPSRaVyuJnFNQd1vW",
  "key15": "53JeGQfrCxowLHajPFmvhER5PouU3wPAbNatLzJZiYwVaMcue9Ft6W3m2sTyGAQfqK4nyD9rhZEizG4KYbkfbkmK",
  "key16": "5ehexD7WnFyv91akF5giNKBCW2B6nN52NQTfN2WcaVcWTjfKBcSrgFe4SkaERx76KZSbcBFnUzLrWCoRdsLjvZtG",
  "key17": "2yyMBa4B96Dc4BstRGasr9Ea2TMgVPDt3WQBnbEwSLhWipThTeWprhBFVHJaw4LAirTzz9QYoAWyAQSGY6fYaqwR",
  "key18": "Srqm4faSrUc9HnQiHr9STpGwAYQszsRbkrGHWPRws25ABRhoy6TAvvf3nqdxs5L8quMCvHSh5kdVDa9D3eM5kQ9",
  "key19": "4wYUxAyaNAasuhwHjS8ceApYR18y4rYpgxGv14sCMKxzmFVB1ERqM84bweKr6V6aPYGFokma81MSXVYpJkLJWBWA",
  "key20": "vUNB8kgtLd7PirWjkU9WMt2ChQ1H1kDb6e1jJUbzgSdSGM29JhmwcuckqNQcsgY8jxxfwMUGuRJRhUeiXAKWQuB",
  "key21": "3ds3X4qqaHAnHBWm1HofNngg16HkDJ1EaiHqs6EWSuCpD6r3hEP7dn57B4fJsgcoHFYy2zS9a7Rx5jF7ZdTHJHSo",
  "key22": "x2q6E5dAm4se9TiFmTQUNuoQEMweNHCyVEVuQsErZrY9GqFDC4s6z1NEspLGZDpKYLpmPcwodHGfujVwMHe4c1h",
  "key23": "5LGj2bAqD5RwiXLtZusPudE5uvwTRnkKGge3YB1GmNebipQYTboKANvfWhz1XTBXAJ8hwichcSBiBQUZpVvU2ped",
  "key24": "3dmuewv1cHqs1hXzuM8xLFFN4YHSDjuNuuJon1x6r19uRYFVA8RFcfhTBzKjPHxAookPfXJZJw7sBX2Tsxcev1Xt",
  "key25": "2gNngKqnKAZSk8MZ2ZPaJdTjuGLWGykaerH7UqD1eZnDMcumTnu9iGSS8w5uVgHjdAigcUbTmYiJiqkXngsRq2zW",
  "key26": "5NztDNPHrLo8YLRSLjBnEwi1wJBZPQXMyTNdNSWLBSjwjJLUqvo5TsTbDep7Cyq9A8xE7LFtnjeNd6mnjuT6CSHM",
  "key27": "4mhhB7HhTbhZcoKsvBAQnQk6ALSopZartCyfzVxWX2sByFJK1iVHgnKmRYxPmQuwmNvi8BREaPkHcp4GLRTpHmmR",
  "key28": "4r3PPn8PidNbS8oiMWmnxxgNMPRhw1b7UBMkYkKNyvnLHBcd9i7Sh4mFT9R4fYcA9rUFPigQ38TDnVcuFrTb2TDc",
  "key29": "2CiiZqaYzsviqG9TcCBF2X4DzG6bEr3wonjryf1UtGQ9ZHNu5oQQEzr9L8jkZTMYHcP6Q1XtM2GtbopoDTJBxpW8"
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
