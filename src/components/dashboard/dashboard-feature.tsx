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
    "4zz4WAbfrkibeo2MBx8qfWWsTQEckWvck1EEmftRFCY7hxpbKpUKYdfpkn6DRFnc1HmgW8dMGYBJgTiiC4gDPpmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kk6rCaLoq6wa3BLtR2vJa8ygq6cy8RWAsYVhnSwvz6UizRVnNmep8onYXyqowASCWJPcw33zh3cjcxH6MgL3m4f",
  "key1": "371LjFcGuMHqhj4pZdtzYH92jpXUkDfR7by5ywcvWijgF35SLVzZvPq9DLb8Qj8YaEysAjXmX89jnyWfcs9ZjQ6N",
  "key2": "2MsbPW9TNHH2gcby5KbHL7ooi86cNPhgFLhJ5Zu5ket1FMk76stC33dKSNkyH1fikC1d16DDDLaRyiarsa5ZHUCh",
  "key3": "DhDzA3T8kReNuAvK25pHkJnav1LFonUmEVnZuisV8fi9HmcnHYw2Tk2g31GQTSkDSzJByZuY5523eTsoyqoDzq7",
  "key4": "2wgZpWgBRMJA7pGicRGi82wWoNdwipPAca3srJfD9wzass8ENt1EpALbkoT6kDYKPbj8uYkEfDqjTm6X3hcDhdXc",
  "key5": "4Mvpfc6PZ9BkEtPRskmnWuuvArJuBKtQQTTps2PfBfY6cMe4uCWLwZM3XRmRtwRnRyJTmXSjsNchCheBWnwB8nTV",
  "key6": "2Z4QGVA4wPdB1VpQkn79rrTK69sn3bvEHCmcahfZzbA5WUifPqZRVzEF7AL32X9Ab7ifMwujNbqKQ4c4NVnh2v29",
  "key7": "4ATza6EHALdVMuHncvdKtTP4EuFD7QjwySDgCrte3EYPs8SnPseWTk1bMmNQYYYA7FRhtW4kuvonMUCy3o6q3UJb",
  "key8": "3Z1DAAM4EGj2AGC75nc8Y95EqLM7FTKjGaHQRDrgGw6oJ22WSnBQBT7cFUb1GHEMywDaeJBcQfRbgFKptpp3a7rv",
  "key9": "2PCM6LG84VUuTCAGurELnGHbBbHdyB1nBpEq6PHYQHEoeajv4MwyHVMVEXeYa8ztVyrXpmYvyDCGnpkPPB9hYUH6",
  "key10": "5t4RHPyXtk2q3mr8wa14XY444PNavyM5zwBAcebt8Q8gFcpZ19ZWkjWWG3c5XueaGk8q6b1im7FSzrbKKVeVnWTo",
  "key11": "4ZY7Nyr3WHqTi7B9xDr5Dx2xTRKuK6UF2JQSS6peVQnsR29455JjrinTgVMzYYDLkFaVvDJMtYe6oemyJQrUKAKr",
  "key12": "3o4ekJdUC8SSDMr57NrmHjBQUiMyzPZCvzs22FXhcPFD7NSFzeaDLKWs8g5rrdCwqghxGEZrcdgMsZqgoghmuyea",
  "key13": "4b3L5EQprcrYFRYTwd8YDtuEM6qti8KfymPGaFUWPg85UFfFrHeiycUjTXEBdHe5EyJDWU7vdLQXJXYweHwnLbaf",
  "key14": "5wsKwEgDjK7fFzfBSxSpbTgN32ZZ6FfQEBTtXRjPUED9tgXxqnXARWt4hndowcRke4FJZUQTaTYh3G78ovyBqKRJ",
  "key15": "dCAGSZgSx5eGxgoWX3V3vyr5Jjx2MXLLRyhbJMdCQcsXiQ8Ci4a7VYXFFf8T4nmwycCKGHfnsxJkL9UCiT3M7Rw",
  "key16": "5qrZraEhteWwJJzyS59BtB6NRSBk4zoqeFHBbxmTB6Kem7j6faXKbydSkSorT5hfhAbsmQ69eEKm42yys2eXYaKU",
  "key17": "oLN2oyKwp1a23TQ4C9do1aTVyUDLRFFZktKKasKvvHJVQTZfLtuJneqeszgriWgZQqQ5JU8jwDNMoZnhgVuH4GP",
  "key18": "4R652ADDgR4FLoTTP7xWZujtVoX3uC32b5x1vibuQxodpyFbt8dTxzSVLtu7eo6Yy2VTwGwiCQPqzcCvp7w4eqzR",
  "key19": "3oL4sPdmNTMCSWVWnJMV4Pp7mGPs42qjaV4TfXtHNiQWHpXTEmWtanEnAArZG3DSEbHwLCzARiqKfmMLFBrTHVE9",
  "key20": "5nYtsyfofBXdsVZU8YfppaqZBSQPtHZ84SMiMTTqVrevrjL1EgMUpdBnJmAQQKxWPMTybcGAJBtLYzLmxPfnCE5M",
  "key21": "nS5xfusBvYZqTpsyjPPvrCmftzyivMaucyjg3D4yTvLMzGxS8s6o4JoCNcxwx5eMRjeoahGJ28ZrXJkn37syhRV",
  "key22": "5JwcopCCQUinc6eMDUQQbtC85QQNhWJMQ4EjH22YJijr9sgPZLG13Ajn4V8S8qcMpYDWR8SiygRFK3t9zQEShxcD",
  "key23": "2axdLrS9jkRUibTsxW6LyFJLhgTUYewyhrYAFo2qanHBGyQuSTBNsPngMfMzV9XxZUAHvGizL1DB9ScokodB6wwV",
  "key24": "1uUQMz8g7MwaH31eSGjkZoALAgYMoTYq8oCNUQE6JMa2MkRUzeKUAVNmYUV8Kz9hKmsgovK9G53PpRb4Z18zHJj",
  "key25": "5NLTwXkdbXFbKHssCgsfE43bMkhZLEJ2J9pavr2AV1equSaEPpE6sEQhgqBLYL2jSD2fhB21rLM8oQpdKMNXRxAU",
  "key26": "2nomqMDYVbyH1vnM5Cot26v8dtqTqdpW1GpxRK9v3pmByfVQ9PJ9HoUP5KeSSa3Gj6Do1hpXnPYXHfWx4KtzTr3H",
  "key27": "4TkG9CgQfKerZyQwhBBFoALPJgXQuYAcRM6jRYSCQ5xNwkMeRqRGtZfG3XSEy7pFkzWDXR3WnQQAJkMGc3EraS61",
  "key28": "2Pq5cTH8yjHCUXNDXCvVdLSBNFjsSNfuMWdjP7vtRy24DYyDPeP4ZidxSWh7i3Ppqt1L1fBugMkYjPNjZPRMEu2x",
  "key29": "5Jv9qKveWDbhQEHki8Fp1AuAM8Z8Bw8y6NkoQtrXBV2GTdvec9y2g7jrEVQFZrZsCrUM5JNqAdPUhEkUzaedX5rQ",
  "key30": "4gmb8Q4xdGmyPzQ9J4PyJ7y1dqKkkYxDDfbYcSj1uq7dDcBwg8q58pHPpD7tiCYjuFw8xyNoZhiE37AUFYWvNBw7"
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
