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
    "56PEgvoNEPLxBR6QuCDewKGfEm8SX3VUpzmPACY4EsTWaRnwHg99iSdmm97qUJysMXRfX9u2dUbZitWGn7aonwLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YtUpkDc92woWdhL44xGFFQCTeaKBj58sSmS93fAskpmeWqJwo7mvrx4eU8j2MGQsxHUrgdaMciv56yLPV38Wpi1",
  "key1": "NZRwuGNaxcTqAhBvWXWSm9itgYhN9qKVvrSRfJyTw5cyRYK1dLc7QwYyDaB3XQ1gpULrKC134VJDY1WpqdSLQ7b",
  "key2": "5jvhDGBySJp51GS566bThU24t8vobvAfA7tWWLGTpwEWDuJzWut79nEd67qAd1hCGtj1nXk8KrNRmjBCzy26QusQ",
  "key3": "2sPa4ctAj346mrF1mSUDtKytvg8rwxuhvN3wtXNed3C9br5joD69RRMKVHgfp8ZjhRWPZ2dcrj7RK1tFZFtqUMKg",
  "key4": "63ajAFB6pPPdcnyoaYhN8JEgsNBNg2cxQ1d3xNh3gCgKJSewWjvRnmYkgj6ACcWjhNn7sfzYoJhLZCAHMNgSsFWZ",
  "key5": "3aAEsJqyC3m5GbEj117gw2bzKav6vb8C52XszDRuBvCcUcdDuJuu3PyRn9MdPY4xfGXwjZaM9oM4DXuLZJVS5Z6h",
  "key6": "3YobC8Z1MWRk2PHUwirUpwjriokgePcuoXWZhFboSDFnAwYRMfm4fXt6TGbkkmPWtNXvtKDnLT49oxMUvC3qFsdM",
  "key7": "3MEZ6ATtwVpT3rpfidbW99C4jLjtUkMi4xJ7HEsKpifP1zwMEvj7ZuAbzfFqK8w1Yht2JdTsxBzMzichYvQTQc7x",
  "key8": "4DKfnyyKpWhCSsQzq4m6KxQgBM149NuMw8419abT2R5DpDtjgDraytqMGuhXCorFpteJdE1C3CoKmwT24Bq2kJw2",
  "key9": "3wCkkTkw3oqh3xfTZ98jjCrFNLbrXRt63GSkf75KmJ7SK9ng2HwTSGgRaWhbX3cAvEf5YPztUq3SopLsF9TKGLyt",
  "key10": "2tgAQ5Vb1fjNBAikmZjCYSwPeKtGxNteiDWJ3bo7uWVKDCGCtqobkVraSXkBRA8QRBsdJjjvbZ3wLX8QeeqBYezk",
  "key11": "2UYzioMBUMz6CLzww14QSZjxdhhHpHurCuh1bQJSDTDGjrCL2GzhiPiuXogB6EvWw4oF4cpU1iJ9k68qPbrQNVAm",
  "key12": "5SPyXF1dgFjdPBPuVJDy6v1XQWhnJayzcz6ZubfS5f15tbiAzerCueK5jE37SVK8BusqPJsF6XMMgbz5Q1nVU5uV",
  "key13": "46XHwtEFy4QfbzW8aCrtk1eT5a14NpjLJBqAnE3KhroPpjAvBzzBkBW8CtWoEWu6DsysTqLx8AnV2rh19a7Hxeem",
  "key14": "nCPieR8PUTMfQzNZGqm82NL1YD75bFbNptffytUnC3xUHUx89ZDrkEWu482FT2E4VBLcgZqw6rZFvHMs1jK7CbJ",
  "key15": "25h4NYv7zcsC1Wf3LrAMbUZiZrbdNHpcM1iwB8phgo4bH349YqpGS3tqAUwpTLbuw1bgZKau28pYVDiUYJ1Ri5XA",
  "key16": "4aopiX7tkzDpfwkAKVf1p87Vw7496kVHbQvDjnrmZpFikXjCbHus2B66oN4Wup1NdiVjcbNyNFkuceXhWsysdWgC",
  "key17": "2jQhkUB7pqzKXxLW64EFrfcwDbvkiAvb29HGXCxmLZYKBa1MCKVDksyQvTxRpz3Xw4qfz8k6S29A9EACPhsCTLmF",
  "key18": "2wsQGbkfZCz8MB4WMZiFaJqnSqh5DkpeqBF2qjpnccUEt3DzEQPBMqYYTGeTRD8VZfyxmWh4b5LouHPbMX1yiHLL",
  "key19": "2p2hRVmLfGtezvY4BeK7zQi9doUekQGrvRBsucdS64rH9aSkMMcdsosBmAmE49mGCurxwCJ1MUtwd6EeYqpKSATs",
  "key20": "4dunuY21sFKscebqj2ZwwxzMgUwaxTKfPsBo11X1p25sPCLvvNCniRFzkkW8iYJ9SMHKowmtEs9yRN9xbBAub29U",
  "key21": "nfZMSmS463EyR4PLsS7aYj2RUQoKqZyCXLX2bBZwE8SytBLCkxxWF9GLmAnYASzuzeQSe5rWYvms9fpR6E7rp6L",
  "key22": "3fgcYwgSTV9QbpEnREKKFpDVF7RNYWrrRe7B29LctJuuvmuxBe18G25HyoaGySBcS2mMFrGeNCwxzbERU1Jm6aNK",
  "key23": "Eke1SSGCdrdq22dwNCF9boTd3Zyk855b5anMH9LeA9ujYf98Rp5Shd7b9omnS15zCpXst4UbpsoPiAkxh9x91m4",
  "key24": "3oVoRV6Vqph6w3WAgTjynTe4S142NLVsSti6PuvoYyAqaH1zQrTqN1HXUFj3Ak25kESSBEo58DHBLnyZ57uXjjeY",
  "key25": "i3JoeqbMMRZ9wGQSvn9qGY8wuE1hHsQcHwR2pi7A8Cnot56e1KKAVg2vkgC5bg8Zh6WMGJQ4deFCxDvuyjEmb6K",
  "key26": "2KMa38qmumiUJin1Z96EyAK939cjNsgLPpoSJyzk4PX3xXQ7eYTYvoWpZJg6t7haTgpAYM9ekAUHMYGGfxujCAn1",
  "key27": "5cJctwn93NMvdF93XPYxZeDGBteKjypBKU2bfENqEsWTFX18bMPAXgJzMkDrw3LGrM29HsMLYqNUytDQDBETPwQm",
  "key28": "3SB8xZMWH5MyaQbX5bx6xkWy1UWuW5DaHAytr1M3fjg7hdX92VcYfgs1kc1qqmQP9FakJtK2z2cRQVeZdN5Hfqx7",
  "key29": "5hXDz8HFtwSy52MWmnsvp44X3urEPNqnrQtBMYcZp6yj2mz8ZqvDfv1HujhBtTfnAM73nvYAPfSW7fpiJxjauXsp",
  "key30": "5QU6wC28SYaP4aGfU4FKS1o9JkpQJMgxD8XF1AtRrNJ9p6FXS5Bgj5RExnZee4TmgSQ52dNi16XK1qPsXH9RokXH",
  "key31": "5chBQDtYaNbyg7sJVjQqZ1KfCZDEbqr4nhpBWLJ7h6ZMjPuRrJhWXNmkze2GPnx6aL2gsnmTsuuN29xHf77UDZEG",
  "key32": "YJbgUSKNbe5ZzW58SxNtd76BLG1nZNZGpM5DfeHos6SqkcM8hQBNu4HNqaozm1f9mNiX2xadu6oct4HCK8TxJ6E",
  "key33": "5G66Ns28pUHetTNvvTWSRRmTJpCa3sNsvCm2yCTSWPnscNibFRjhNMr8pepK33nrfEndyrCW1Ld1VekmUJVfk6uN",
  "key34": "33uWUGfZEU6XR6mjcurqhXfLsotsKjdRhdHP1AzK6hd8V2deTaYU2S7W9MLRjjCEqCPrkkWQWHNzomhNWLDuzBBL",
  "key35": "NRhALM12vBturHXtfvaqGKEcYAPBWgw77zbbJa3QUGbn5qz7CuTgQoieet2W9r8uTBoJ1kZbZVW8nzXdok7vbG2"
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
