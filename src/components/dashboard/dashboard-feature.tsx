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
    "4cGCYwskhnBAKyQgnjBhjvwmmnhhSTnV1foL5tgqbq3D8CW3HTZ1FhLe56rknTbpLM86EePX7zAnDJdisW7isdxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MhvpfYgewXWBbBeBsMHJbQbRrjjyLqcu7mAttxdAHtW4C4hmT11zYBrrkC4C7AcSHYsGpFyLvwz72eibCezYoW5",
  "key1": "44HHQ4joT2sw9MQBdB7z28MTKp8jBMf5MaurfajSAcRjVXvBSeLPQvJoUe8SMcXntLayZTEHQUezaqQfHFXF7Jpu",
  "key2": "2JKYZpsoxRJH6LkMZj6tFq7NkvQD2PAHSNCuUD1SYrp5fPT6QUBJHwc6mUocj9ZYSw4WiinVNBwNJpNUuFdTB7Pn",
  "key3": "4k6cQL8Dsvr3q8YtSGRStz25L2GjsRLwhqCQvRyYK2MWCUh8B472VjRTSe95D91WSqRhwACXMJpFkqcHYSqMpnwo",
  "key4": "4StKNWJvJpqFm8Rg6Fmg5pir7GkZjgwBwXLEANdg7NfTxtq5QRe1d8RaGY4GhRWdYu9T9umBumpXkG5C692qkJPR",
  "key5": "4fv6zYPoLMiJWo33Ut6MFZp6PCnjjmTVCiVTP7Q3cgrUWWioxDSejupgePRc3jZuhHnmot4drAFeTJqYJHQcZEW8",
  "key6": "2MkMmfLWmJ3cNgCxqf3XdMphQ5oTm4ktrvQRi3HNc5Y2dGTYFBa9PvpUsmcVvGpH6fYWjGihzTa8f1wBSCEN7gYC",
  "key7": "5kHtr9YhNVR8RsnoAVSCHe6VXzE1a9K6DNexTXQXwrXCvMJRFv6fGiHvhspiu97BuoceYSVoedLc6zcYCwxJeLZe",
  "key8": "4U1vPJegmhcWg3AFDAUPCMVv9P3naY7hMqCEDaxjWJzfCPNNjczDq2Zoxp4manXA5SQWvUzGpotVtzmbASXdXfs6",
  "key9": "4ah1r4JgWjDbUL8YFU6abrssEBopGQR6auttWSXmSW52uTzGbCA3BDF4cbwKNSbkkgC9DHndrn756oTrYZBy2qf3",
  "key10": "5zFAPijszgyPLg9PH6NZ3dHtzGkfE1mPqVnks4fSAzfMEFM28hdxjejm77V156bdZoMkYPXhyE2VaG8CWNrf9ua9",
  "key11": "457eAH7Jk2hWmCZ7zbA4jTyYV2ErbV9LVk7tZoraMRG9aZKdgTmzMyJHGxWRahyY2YTH3EgBGZvbPTLzw4MaYYEi",
  "key12": "4QqQLSDoieRhCKPRSHyQ9PkP7f9cNY16eaQr4oRWjxeXqGgab2WQa4oSYZfS4tHEVwmiADkkMNBdgPFds2JBqKWU",
  "key13": "52faEzsSGqbuh5qRuq9ZJUViJTcuMsEZqzJfaZZW1KYd2D4BW51L2J1u3BMLAX6uA7GahqczpQLdLXBVQ2EAPsA6",
  "key14": "3BB2nRianH4Zb86fnc3wwViziNtnAspysssQSbbr6xfwCzUzYuHg6YoqRiVQjy5uXrHfsfx3poYyE7Qsu63CepUQ",
  "key15": "3LqyirBC2GMidc88ohfYntHNU9S5B9RX96XHWfheYLpXv3U39xEn6RzzKmkj1qTxXQhfbnQPpyY3TksZU9n7NZy9",
  "key16": "mXJJtdwkVMcsXHeDSBMYqf5pLrZrBn2uPoHHpj7Y6tihH9B7zsXHvBRM6GEEtm3FJrhGCKvYFmRSAxtnm64xRLz",
  "key17": "2Nw1sFmSj1QyzCYhFuc7bJcyYSZBw55e9ApG3Q1mS6UJAfcxp7tUhTaLDPVimhVgPsWMx2UjMzmBeyY7eJeSsTLS",
  "key18": "4tRzU7kRgfVDb2viQQ3ABoK2d1oX5adNUC5mjWvyLGHC2Q7VTP336DEtHzJgzoDbHybQkr3nF2vCAszNvUmPSYFw",
  "key19": "3th3rDBx4hmSuF4qJfpDRarsR4MCzAnCiRcMfZfzp76ndnLKxxsWQp2WzDp4zJNefm4ePWeUiAS5irrFvd6jCdka",
  "key20": "3EKdx41xRxjf54gZepKxr5b2Ch4P6Nce7Uujyx7JJBq8g1xRv2tRq38irrxQzv7xC4x7GVTp35wW8RXZsb88sR42",
  "key21": "5vBD7tktAbrT5WRVrQwix9f9aCsZQ3Wpi8TzsfhG2HAwX7F7AceDZytjqJ6PsAThJ1H2Co9R5dPsSGxKBQjkHmFg",
  "key22": "WW8kcMpEGL4o5HwcY1RgaF8benDuNy3Go8nz5Sd5BywxzJECpq7evdoqtWXQbtRZcdnjukkAXge4d8bdotRUJLn",
  "key23": "kjpgJHYtJvTGuYiekUquV76jKPf4K5mM2P2WVd3QfnTPKXwh6LusaRZ5tnHooCpKGAffdpxd1hzEhHQvk8fLcfb",
  "key24": "5Ws1Q2ZKQgUHttHQYreLvhYR52epXmgA4fFuEP6wEMkuA7a9QH6dGXMnPeN8syV8xnsLoc5VT1G2zkmfqc6KZ2Dj",
  "key25": "DSi8JExooVaiUMjfMPtDNqHDUs2NqGBbzdMPbdMnZGtCZbiA3vLZxqgTeiSQVxeLWWzkGC6X2oFdLN8egtvLJHs",
  "key26": "3XC47tiDRmtt1JgeHtyyA1XFvhmXuokzhhWzSf2M2o7MJr8NFg71DBbNftkDAABTgHbp49bY7mH4TxCiW34yDr8g",
  "key27": "5UEYPSnM2asWwZ3aeZ2CX7mwEjorAeT9gsM2u9FC5CsZ4A79Z5dwSvGtpf1G4T7CGetSmCx6RybLEPcshixng5gC",
  "key28": "2tu8DVTNrqFYo8CvspSa1irE4oFWiBfDLmqN79nng3TmsJio4eHVoGU4P13QeE2Qwu5JepsUnidBgUnRmCJahTET",
  "key29": "3oDT5U3oZteDxsYVcWebhCw8LxuFGbbh5UwqSgcxQe1wZnkjRqLrN8iVyDLTHGXeNBjKxev69aEQgZ2dodD7DHv5",
  "key30": "3jMPXTk8Dc9Xx2Kph9fWBLvsSZFi6j12oxyXcW7UVe42UvVWB1fARbCJFrANBD79mKR5ZNdLggu9Pk7QDEdjH2qg",
  "key31": "5Nt642p62Resk8aFNnsYMh9M4v6engmeUBDhpUbNkVbCnEu59zUz2QH3mTUqqpPjdTvkVr3AKrJrGgpKBY3cdkeD",
  "key32": "3RdAbtva2nQJahcrbRtwh8WAJyYDWe6EqpEv6PwqnnrFAgBEMRuVrmrfRcXjCv6oH3ZkZotxeTNz7c9QYKUg1JR7",
  "key33": "22dywXsdnxDWGw8VJymyr7eEoZrUarr3LshfpVG2cHZ6mHzJ1YcNZYFskQYd8LM4CWsi12QhvBQEfYinkpdJgoCC",
  "key34": "pdVpXa6nQXiEVfCvW7bEk6UdRDXAFHe1F8SGtpdTMjLVbJA2ZjAauNqRDRJxEHN338nyYpQ57yUBMZ4FzKr9vh6",
  "key35": "4U6pMP83RcZDfCSpP53VNqMzjc84o1kJhjorpnFYtNN1PCiZZscwMkan4DPCkd3TbG9t3vFG2ExqykHdu2EFLzW2",
  "key36": "2KAS4pUqLdHnLGAtAZyDHsWFmJXQ58ctvtQADzvmwyusZii7iShETUWZ2LN1Sqdas4X8MNiHJPXh438ADkVFiEgs",
  "key37": "47Yjy1ZwjyuxYKB8dVr4p185GwByVNstS77uG6557uabrBMTnUDGsLoL3MPob49nA864fC5sx8THsSMJLkqpyuwR",
  "key38": "aRJU7qeEKomfz2T6MyeekkZFXearTB695vipEavTbqN2ydJkVX7uEZ2mjkrKnK4LAbrKb1K9Fq8RtJzhXnuh6Cu",
  "key39": "4Ad4sfd4SPVVj3akaGDCbGPL16ajr6FuasmufAkHjQjQAmU4P7sJxeNkwR1FuZDJTSVapQ5e4QVC7smSZiVJj9gJ",
  "key40": "3rBufX9iRZAYCAMwcuSEkpkUXeEaM4CBaUgfNMYP4Z9CoTPpPLboRPYe6svi68MLf37rdogqE6LpmncbM91PUrTd",
  "key41": "5msiL4rkFDbgMhuzPfRf6zWzmvzbpMGW6aRnXpQpYwgx1eBPrrbp6zE6Zg6NtsmtJ8dg6prW8F4Nnn2pRnwpyYM6",
  "key42": "3byXLrWyU5id247qm4cdwkFnsJyQ6QueyYKPtSNXbHrUvwvaJWp6gJ7Am3nWK2cFMqAJSV4goRu7iVQSVDGcomS5",
  "key43": "5ZzyH9QvTkykhxvMMi9aPK6RzXWrwUPp5CvfL6EFPYpi8fMs5qwKAuTkpFadrP9A7dpgJ1hZ6Xae6WoCUXRAfHqn"
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
