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
    "jJjg2AF3tdEWMpkEoBDah9sC8CjiPJ3sZF2TLzpPahfsweGc9HVaqkmLoqHuERkmysbvjevYKtQPJHT7mvux7d1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GMCmZ9kZmSF3iakkfB9d4G9kyzxu4EBhbHp2PKuqqHx4TeTT68j1LBcwSTYSh2uVd5qnHjFGLA4sLXcfFUErSbo",
  "key1": "2CYwB6QXHxQwE4BRfoqwaG1BD97jeMge1wbZGkQvpPnhMNzV5D3ATSAZA684Sc9pcHi3yX5WwEeKFpEQv1e34jNJ",
  "key2": "5T2Rc76fHkC8LLWjDqHLtpJ7PNyLBZRhyJy4jhSgYx92iWbcwyVTmS1pEyR4LdBQwCYDM4zY2sWHg8uTAa8q1sc",
  "key3": "3mgrb4sHqCGxTibRq2MWsC4YKMQAi19dsPBuumov5JHY5brbHEYchAHFvFqtLAPo63qvfXrQouUzAL5wADtXc7qX",
  "key4": "j1xuCBtJYKwxTZDNWZYLf7JThfxu8FgYMxJDpVzY5G4U66j6kobDRzMqJzTEVYfMT1ugJ2jT886HeQq3FzhCXPE",
  "key5": "4AGg29gQof1iw7dfKT8kSjow4cFf6qnYXW79iaviBf2pWRbwFgPTHbaykG7MzdtGtqYSHRuP3EXbEeKCsknDjSNo",
  "key6": "4QcZtBTPXLPkAAptQ7J62kxb9KnAhqKju629nmQxPpsiCwYLVTkEcFsx3zVBLpGyPwjANyPkHUVfoPBngqdXKxur",
  "key7": "3VvbFWWhqsmhcRWQreDvkYbHKaga3RFQmFEipNNfaT6XxGqPs4THZNA5it7BfNGk57RPyFwTCW16QV7bTKav56G3",
  "key8": "3YrPbS467NDZr3wah3SdEv11f7ZNYQcK7WhgzsfcaHpWn8GpA2ezpufkShajsNL97va7vKRx7iXsy2V9BkXDae33",
  "key9": "3W4QuXGoeRbc8o8noFEWfvNKdf1Uaj1rUgMKuLgrDWSbpEDR9vvXp5vcmuENf2EyPqNipgT9P3FmhHnLKQFzBSux",
  "key10": "46jsra7QBZYrRDx4DVi6ge11TYVNsgQ5sKyj7NggPVCaLrFT8qFopp2Yj4a3SfXQp5oQQfJWDEViJUk6pP64Ar94",
  "key11": "3LNiKWTrB8cXXLdhcDm2gn2xqjZ5RzxGdahDRtaXDDeANY5eVmKz65uFhdVekqe7ZRGLatM1Tnzg23xVDRjM1MWS",
  "key12": "3dT7ru1pDTceJXGuvkUmWcja5Cx2VJaz2ShHH2bLq35Xgd6hVxxXqfBoBpKUMQ82EB5muS7GdwvnN14FbA3aPExP",
  "key13": "61cHWVmPmKRcmEubKKHzy6UG8U2xcSU9k5zWUDrSDg8iFWWm8X4EYHfLu1JiSTR18W4Uc3HEMhyBH79svN6oPpvi",
  "key14": "X6AsNFVRR9pguM4ueoD8npL5LEd2vnaPexNSvPHWEWeZz1mn4rCamUdvScDFDmGHHDT7VBSpkELZjPbabVSyUCq",
  "key15": "39kcP5bvdQFHBNVT3Ko954ozUtpGDKyecMTPsr8PUyYk1ass4ufpcWWgK52ZRojgNgt62pvWgbU12kqyYJatz8ng",
  "key16": "4fQHAkArxVk8bP716782Ra29J9BWjC9VLMSakzemkJGrbMLbADAME1fib5JvjsaMBFaFU8yhYsG2PA4ZGD6CAEV4",
  "key17": "2PehokfriuMtgZTk8CieVeksT1aWPVJrK3yPwCkNqiPev8kfi7DNEipjzvWvER54euPrkSX7phfMJn3gza5rraZh",
  "key18": "59pPK46PCvpRCfjwNq6FwdNMSDUAzvdNWZuqitUXiajEPDtoZ3GPsq8CXeSECDjVS6CPLquoE1aUFV9Pgqe28CHB",
  "key19": "gJSkJ866MgejceHgEPomfR9qThBudMCobGpJkcVEPuf2miUarV7Xb6rJWt28AVz7EEW6DfL1c5thmFCGRrZNS3r",
  "key20": "34eeu6XipWDfKr5bS26xJBAJg76ScAtN6JrvAsGwLzBqfjSjmuvRMSQDG9bZoTwbEzDfn1aD96GrYUsH93xBVriE",
  "key21": "66tvWgb7V6FtKB9auqWnBeU5vqBu9EwnEwMxVFETaboEQBWkomp5zPDLMK47RKHQNC1XcdFS42XicQDTXKzttRe",
  "key22": "3WfYE9ba7qhTDj3RawUwtjUp2MViDdbfnESUTW9MpTQQuArSqgSuY12Ky3CEfS6RxKGb2o9XPArGxB14p6iN3XaM",
  "key23": "2fiYCtfnhnGSmecFPATPm1KwaVPmpyWCZh1dMEsZriWMKP2gYYBL1U7huFkQrFu28ejLCfHZ4FH2rceWQcJKhDUx",
  "key24": "2ZdA3mgv1WnR84rvKHbguwgzDAasyvW3shr8DJphH8gEUFGHYEpEJZLqsjajZGeKKqqd7Rke1PQWgntGpjQEPnjX",
  "key25": "3n6eKzPu43edq4oeZHLEiKoEJvXcYkw458irzHRubY1CbtP1JForYJQGXQwCS4Ajryf5ysjGntnNDs399X4mDBAY",
  "key26": "w41MXQUzay8tsXpS9qBkmRLPC5i8HWE4rtmXjb7fKeYksLePSa7g4mnyeCu8WQNjXkWoPbTeoAWZS3KqNyc3JnH",
  "key27": "BkrGY6AZkoMbcHCdqukpn73QQSagqQd7V4nhsufHzrs8gSxLc5ScwoTTkF73HHR2dn4XbEUw7ocELsh37pytD7S",
  "key28": "28NRosaYg9bC4g9yNjAVG6sjcBH2GANGmxPGZZ4QV1RWq7pAdqfq2pYfTpkutyoQuSkB1jYY3iu8JcqTRrHZnV8R",
  "key29": "2scbHubU4mdNFdJAWvA2jKqUy8YFGcJ6uMLiZaXnkqJsYmhCt8KAmpNtk2SVXjucLeaitM522PpnEbjSdPrErX6J",
  "key30": "3dzACXHCHocd9SgWFYD3wseXWaG2G31HPicQyYkJ3FGj5dzk7p4MQ9VvczbHyscHaH1F1nmPY7YciHAj6VEWhLV5",
  "key31": "5SjeY8Wv9CbfCVnDPmDivjQproqGtTksmMCn9ZR5P8RjVMasqaxbEVFyVmvo6eESqDe132MuRDAt7H4TFeBeQ4mS",
  "key32": "b1ye1eyp3mSn7iditZHP6fzmciNzWtFuo6yHmkmZ1JCaYeyJtp8joVwFQrwdeudKNt4N3Kcg1SrkREKmscj4SNP",
  "key33": "34r3UkFyrXa5kUp5kFt5y8nHUf13iVR9sc8K5nPPwmmVFha9DbHV3NaFMwYjfaf81YsL5X1rYndWSWcvCjj92tBX",
  "key34": "maPs7xxRp5H6D8ihru8vgYtYrtHAuzPEJeymuWXsyVSKwwjmTC2JiHiEXsZ1aJJhisPjCHw6557Ud1k3jQE2KkW",
  "key35": "3hwZ2MaYZgKK7FoweS3s8RAiFNBzVi1xKVU2SWuWruDCC4wSCEMmgn8B6y8wNDANyAxSwPLLNH25sjdU1yAcQtTz",
  "key36": "U6MqHUvRL9869sfDq6WGWebxYRk2dAAduUexmRp1UR6wQ3XzPsfjuUuhML6N76Lz6e7r4UzjscoiuNnVsGwQ46w",
  "key37": "5JFFhGpQtxM3vvZReEopitbkCo42iuqPgiF5KoLKMLwi4dCjVZGUfwtPM9RGtGUVjb7BbJu9psV9FABAyPRbzZi8",
  "key38": "4582exwgqvt9brh92BK4F96Tdd7BFfwBVLmsuKuuVhbdC6571TSjipce9bcosSWCUGtXyMkEeZj7cZM2qzxvxJf8",
  "key39": "2SETeNQzzuGHj3GXJiZvJbFXrkKXEZknC2YftfFPdVdZ8hYy5H6fUbn5xESeqdkV3qm5pUr8jC4Cur8p4AbxnUAo",
  "key40": "4ho6uewMnFV7Pir97TCt5Djr25E7GuK5Zqv6soqhU4Ry8rWMo5b6J53BwN57u5uvpW4AN2zxZUw6dppyHBM87kDi"
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
