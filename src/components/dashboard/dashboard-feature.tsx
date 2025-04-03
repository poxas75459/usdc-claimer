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
    "3TZcoRyMNEnwr1PUKtV9dty1yMCjWixT9ZJsqsthYXZ1bqP7cZMtjz3swtpKcxNH4D8VmpBoqEUB9RjiamfN8LRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24vgBp8h4djMQaaKXc9qXHooMnyQDKbfcNtnK4YmKwz1jGC2wxxXiixa4irHvuGXThjwYt6oJapB1iuNBCkXUEFn",
  "key1": "5s1D5E2wdSBXp7V67dukDxpJ74Kzke6b8kjok7Y7Qeu9cf3SA4fHkGw2K96s8RkLEVBoD2w3jQRWXge4wR7pMMmf",
  "key2": "35jWdMeDex8o9TeEZjgqcf1F4GPfs5hPw2LNcJuQBQcatEUU1QLzoVSdsSv5geTiHYJwJM4XxY4tkuKt5Y6E5nty",
  "key3": "42eeWbh1ZMnaWH1izNKK9LmCq6kskBRJGDMJoAJs4nm4jNMk2EcNZy4jdYp5z1vNJCFXcJhXRXZdJSjvAK332G1V",
  "key4": "4PsKUvjZJki9pmSVEeFdfCAq7JeeJMrtt159uCXY2pcSSyVYgaEdfyFmBjHRcQPtvfeeuuUN3LgScDegsUnwADjc",
  "key5": "3rEW1fx1AmnYh7PEmPgPAxtEvxDgZ5YK1sy5xAgRbWtXNJisqaXvTGfdcwY13bz1XKBUHNkDcFzFeoy7Aexy9iGn",
  "key6": "3S5pYRqCdw6RjM7MAgcr5a8LKsPwkFpMrQEqP44buxDLw4bL3nMNbHkvGCkfwB6V9n5vumNmo8V3WjHjNqGSMNBz",
  "key7": "48r1ueKUfRsWfKkecmm6XGG4VzW5YFnxouCbugFfDPyeDnU7mRoeTDZWz6H24e2FFLSZt3BGG7J7uQgvtpXhCpEG",
  "key8": "TuUVizZD9YxeM1exiLhzTRhCpZvGYtTjth9SjGznHNq5wm5AFPBQVRsTgvVDULjyScABAGKjyrwVe7W8XJSAe24",
  "key9": "2a1SZALY9dkPCsvgCBvMfwnTvLx3gnSLrtZnuHS7QGWXxUGsXWWgpi3hAGn6578EJZ4x3L3cvzfVq73BrhaDbi9v",
  "key10": "329BVmCBu7Gbe72NiGKZ3F6QoVHArar9BtZHYVTMfGP8Cn8pHnqihcWmmf5VtzEAEM6DYs9BEnYpZPuSwBBJUTSB",
  "key11": "Xzz8jaxuhWbMW7DEdf538JoCT1u3rBj76oobVRZ4U4FSQvnepR4whzGrRF5g4xXmuhUGo1JyrZmfKQvA4neoooF",
  "key12": "2gHhNnyxqLJcC3os2wWyrsSQARbYEwJZVZZVN4WcftfEV6Qzr48qk7Y3ud8jMFw6daRBMfq9zzzQQ1hYJhCgvy4V",
  "key13": "2doJBp1RJruz8bvgbgDLYe8QtYknV6mR3JgtyCvZofmU3BGkuquKoZdLqDss7TvswX2KUjMAF4hqYhkYu1osM2oV",
  "key14": "knKHkab4xzYE23JDZPyyYMSqNgiGtSEvA5sjjPZ4Vrq78par2iWRJTGSyauuqo2wKJgtroyaScvgM32tkbvk48A",
  "key15": "CPGuUNdZD98dY5c37Nnj6AUfqEn6Qb63VdWtjFQvHiA4qzx7pctDWBNFi4D95mmJnSgygNturdnTpWqzoSoTJA1",
  "key16": "4SqPSkocM88NHQW4k28S7xbqtiAhyNhQVMh2ZPcrbpPVpPsbGjdJYnPPmPmxTmfWg1ZumWSoTvMysVQ5uturAx9S",
  "key17": "ekbyUB1yeqHAtz8h9595gZQ5vEWab1SeDcnitqcmkpAUGqetZp4dbmAAiTZ4mP7psjWAUhJ6XxEJXsKtPH3ERoo",
  "key18": "29y8wTB3a25HU5keVPxQRWhbaQaeDL1G5e4wAaYBNhr7csd7HCBaQ8Hm4FRpLy8Y6yN9GAmFJTsUuYa4emC76xNp",
  "key19": "5iqcUHnHxoXUXpsYcrsDAa7mTtQQWiiq6L8P7MA9XovAh8tk4WTRdtbZA2VDAK4ddQg1icRudHifYpuQrMkqUuRa",
  "key20": "3rctEG4xEXfEVTYdJGRMWYcJtK77p3uTBjqZc8NyP1B5SSGTLzXeCTUaDExsSHeuWsEDF7GkRbmRZV3GCZAGi63t",
  "key21": "442fyL2nnBSJyLDivy6d18mRSygU24pQTxZwQ8rCCRgC89AVfLcyp1QBkH6qgs5fiwh4GZByWSnnxqKTQ95oqTEs",
  "key22": "43eiKjq4wMJMz6NmJEGK1MMVrR52kXKGJX4WJQJCg7A1sbFa7btJhUC1co6HFkU48RxG1d12RyBRjHVRch9foKs1",
  "key23": "5SDTFVsEVpEbQTBmYJUAUUZtDpj5PZhh2xQvk98ctZDc3hdt9B6c7x5AsXShschM2ySLn2qmappp6N8BAgtWwEjf",
  "key24": "2AwDvfQL3wPXtBNJxVa9TebfCezmYVjMT6pK8hsnCJ4qPMxXfUjepXgEZwipeM6i35G4EQwcr7oVG9Mg6FRs6wt7",
  "key25": "2VrrdkAfxKWdhUwA9AQgGoRbNh8W6tRSX98DfBokwEjqFwrLz63xcJdKwm8GHjgTe7dUUNr9n7BFhMft1BFuDR9v",
  "key26": "35LLrw7yrNP6iFyR2tjj4N4SgB2HTzYUhUvtQAm4YjmyEizgkNPnFHZsLCWrm4AyhejiNY8qxpG337ZTXayWycdP",
  "key27": "38AXyqebhAq58oYX9nJuYUECYwoGijeeQwLHFCVmJm4AuC5GynCDhXWS9BFzHDo1CLUYS4oRekqRSuEygTvf6XZn",
  "key28": "5xzzhBcbSCZb9rfB2DfcJSLYqY5vcg3z4NNVS6i45Ja4c3VQoFSHmM1tVDwUpc1FrYWNhxtGZQBxLo3L7nK6M3qN",
  "key29": "2rMoMebDzn5PkQZfwVAYe9JbtMxoGDWVVWAe7mw7vFezCMVmoBUvjHWKEcprpv4eLdzszjwGBovs3TuwgP34k4My"
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
