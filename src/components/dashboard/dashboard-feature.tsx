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
    "SsAsUnpNLLzNhK5u2TCsdkqQDwHc6oAzr9mmwMm1yhBHwtMwmWKz1e9zLNmnEMHcMi6QgDTBsqzP968skCMU3mJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DmYjCFCjRGRytQ5oX14d9ULe48YVQyvRFWECeUth4BRREBdUJnEUjdyv2zpdRP1xCnTe62kXfRGQgAZzrXnoPwg",
  "key1": "2bQBk34MNYhDFRNCahyHuFsKeimKkZES2p1KeJaFNofVycTLz5kq6YmYRDDPCm6EkAcgAZwBShooQHqrfR5AFK8a",
  "key2": "3gag5rUDHU4jJghL4DVNXjB6NGCbzP6hspGBcjLgKJVk4MmxJcFwepmB4tecFRcHPoKXk3TxLjEceR287b5b9LuZ",
  "key3": "49QeddBHm6tLj3TmNB2nsSoYmn7gDinJsFfecWPGvaF23K5N1mUhJuA8GGkzsumsKhmeFS1S3sYAQ8ZXfNsPQsUL",
  "key4": "tDudVHHkYGr61Waes32UhyQxXiXqL12k2M2e5mvBU8t7AccvLj8GTph2YPqTbAcAc6tX87HK8QJ8GVBpduq7B2P",
  "key5": "3HeTxgymw9t5bdGYw5AchxkHp6GrC4zo5ngr9qsP5JJh4apTLGTrqJhUfCh2AhMnJnoBZqK2LaZrza1jSg2JoCfd",
  "key6": "2yWVdfo1KTTpR235Ve6uFNB8PdgMeJhFqAVCjCAYXPrce6fUydPQj4h6mNYHqc4QS6yf7FSiLUdQAMK6mGRAwLQA",
  "key7": "5TFVKaNr45Hcff3rgVVrfpHaumN7TA4fFc5vZLjDdsaGNQoGWMtty2Yu5VX5d28f4ZXKwULSick17uafBZvYRv5W",
  "key8": "HGnT4tbfUHntQ6nTVNfxLEd5cRpdFMMZA4ErDCyCUKGT568vaYr4ygznjPgZX9mj2G8m7tBufhiHMqdtwfD9nLG",
  "key9": "3nArcp9po4R439QH36N3pr4VL8BKFHcuwXZTNL6zex8Xey8mgQW69QStFBAMmtAycdncVS4JBuGxkTem4Zf6vcoP",
  "key10": "2ia9zbHAB75eii5LWphgnzaKkz46NBQ2DNy8Wd2QZDEmCooWUb2GfNEEQRdP1V5xnVpD6Lz4ooeeL19tqX65MwcS",
  "key11": "318so5UcM9WyRis3xaoV3mvXZgbpj9hKUJzgGgD2FZudbYTHKc5B9jdAzMehntPnxunvNvWd6eWYnBP76pd63Khm",
  "key12": "2KDJN8mKsqMmj2eWPB1LJARQaqYxc4wR51PvNj5nyvaG9jqxbbsDzPLpy7eEXHZ4gmSXRDmGCUWFwfDiErqQMydJ",
  "key13": "5tYPBopPwVE6prH2E7j4oQ4cD6sZ4qAScNZyDH6i6RKjyfX2NwWcYAVUGkvgbjZuR5v3ha5aVwfZcpcpaHbgzraz",
  "key14": "5iJ45PvtcsySrtadFJ66NmLsZYWdMJn1XjbxH5fdta7oep1PPErRXBUowCJKrQYVGeKri5LCxWS19eEfdMkaJ4zH",
  "key15": "3pB4GCP3Wj2UA4rKMmPUK6RESBM2HcLjVeDsMvLrbRW5UQsQXh7TzdHx1K4DWDGnd7yDLdzsnrULmHFZ2Hz4GYz1",
  "key16": "CPxbyBNSdjFpRsNLdcL2kvmkePSTzgMZzJ9J5rjaec7Vhwr355fZjiKVkiPNFbyfR12n6R9WkdK3zfcUJfq7LXk",
  "key17": "WogmGva7QVXHevs2hfV1HswZsND7U1d4JWSNSrRS5q6EkjUaUcWMDrARzM28XbjCbdoUdTgmSKphEP9ogRkVhd6",
  "key18": "5RaWoiv3pkcGj8G29ad8Y31Kem71BdiAAyEcqpBYgM1Nafpr4nVyCTJbrUjBkjTMWSYE3kk2unmsqoFZ9sfxcykq",
  "key19": "3VNep7SgREddaRbCzUquXsjoccHQqEF7boxAEjw1kT4CnTDqJPc3XCi9Fz4Xy1YQFX88D1RMvoHxGiY31ZGkQBVt",
  "key20": "2cijVKwaiWSLRd5dqnV5o7XkNW9NrYEf6D4edxQj2LprVRGCoffUkEr1TwPvuucbHZcLdrLDohCJwQvmjr7Fm8JQ",
  "key21": "a9rwdQTDgM57HMcuMM2Ps5xexLjBtUo1eTU82douDABEnNcF3NvrKpD1stx1mGCbuuFaYn21Zvji1s1o3YXwA2X",
  "key22": "5Z7ucBtLLsGQGHvVqpQKKwTcwCyPMhbxE9aD3bCw1iXybVJc5x9sQS1uW5u75S5bsVs4iz2EJfjpYKChDaMPwcmX",
  "key23": "5H4KnoNUKApYM8NSVyCEurtXJyRLdp6KqU2geBBGoGGGbjiMRrZ2cFPHs8GqkFGyyYTz7SaSjg29BRGfnDsjysFw",
  "key24": "37f6P6QnK2G4fQ2QzCGQUmqcV5q56thTvZeCquAiAN6ZZPcjH793cCAQ3pwwJJVvVafZ6z4DW8NqixcuPjCCGRQa",
  "key25": "2RSHvPEuUKuq22AXRt3x62CrQHuPJjzZryko2j2gMyrA8Ubg6zeKwZC9sGaV6Ypk525SFTDbWYwkNiurL1K1bBFV",
  "key26": "2bs7wjVmv8wE6C9UjS9ujzip95J5b668KQxbgqTfK5BR7CV2dcsepd1UTdmX7DmRjaidCVrhwogBspELKFzWbJHW",
  "key27": "3KWaEZVqeez63RqXvEtAnkP3NmVjEtbUmtxqMPPBo7mNuV7yFDQdGx2zgrj7ktN5FPf2Hx7CNkHxkqs2tmwXMMwt"
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
