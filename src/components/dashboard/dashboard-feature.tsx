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
    "STS96AE7wKv5x177cxhfZN8TAH3hY436mPfS4GyzGuEVTizyNW2uCwcBgf8eQSXDKA4guFnbXVs8rRyw5CC1kvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aYWhYvmg4tX3p2M2t2Jdro6RSCsgofKMaqpNEo3DV71YK1bRxmYJnCL1j76Z1JyYHfzwLvSDY6hJnnUUFGUeWET",
  "key1": "2WyD6TshWQpgDpV8GprYv5vTvn57FzyCar43ijLaFX7mkAzKkeThAimvSvHzJUt1tWG9q2eGTbxZbpd4xgcLdBnb",
  "key2": "3u5p7jFS6fAk994cxcFK6G9XPjBVM9DWfcTMwDaEJKps6ksZGQSpNuxJhfcu2ZTV6XhAFmuek4czNuFvrfeXnLs4",
  "key3": "22bL63u5gW4L7qt1SRQMNReSkopu6rL3uxxH2CCRAyybRnxhU6aysPsQhQfQPP3cs375D8zaVNXgtkRL2XbvL9A7",
  "key4": "26XsoBC8gch3eAqfZGRYLpGaGwLwvXC59WCz97VEnNsT2mDrVWVwQaKasSvTxZhiN7yBfqWa2L2seZddnWgrTtR9",
  "key5": "3gpM9mpEEh1ZenMeULuWUoczKWhXUG3EAvyDWuWnC1cz9fPSejhfq6di8thsmLCczWzTyTrPgtEPBRbwxK8PGMyQ",
  "key6": "MVAQSiPyDdk9m81Asp5JvUwz72Q7VuByQXPgEp8as2fPXozC7D4NT4NSESmf5zrWZGyTqnWdtwh9ryyWzu87dyG",
  "key7": "456EBKhbFL6YPzgAiGRqb3ErVpyipgPcuCjtyxSsiMBej851QxkpejQzaFzLpM8GNNjRqmJERcWhWhqADryj8Bnf",
  "key8": "tQ21gb7mSpVSkmLhudnAzoTrMKfzYddr1nFLVAbK15ZJQzFY6tAUKPrszTeZeTJrHqinYG6Nvo11WYNi9SAnhDr",
  "key9": "5YF1CvD5Zqfwq8H3PJod6GW4EQYTuMjuGi2Upe9waD8WAQRAF2w8t2xtArcMNdofLw4oJ2Jcu4K198dtpbDdQfDU",
  "key10": "QGhRpGNFVBZM7NecqqTxt3UEQbob1jqt1BrGUcH58fVc93YDTGhGW5ZSesNvYDG99YdRD82ZjhuktpXGpXQtrdj",
  "key11": "4XZHasqjf5j3XgSbHwBrNyHW877sw5yHCe2YnWJYJGjLEe4Ctu6Df8eScUAah5HbcnAs54TcU4CvRYK8XRvsKX8S",
  "key12": "33t2D9L93nWczfCA6bECRHFkpoyXzBv6MXx397xkDZCMYM1ZP8ChRjcrPi4rm6LD3VspCWFbyCR9gTwCDEMbuhmS",
  "key13": "5pkceQysZCFpf71CvkCzNunhWSH6rHnFPphUoD81JCCs1YeU1yNcW8iH9ryUJD4xaDmptXoFqXPA2dmHerb7xTp2",
  "key14": "3HcAYHawe4ESqbc7LdEHR5MtfrF5DuJCLeUH1yncsP4aW6oWZa67gmTRStXwH74NRZYe9uBRvnSQdR7Sy9AUdkrf",
  "key15": "4yAt8cdgkC6yyhbmfSiQ64k1fCyRNG7qiyVZCJAHEo6zMrzXcDK3z1RyNrk4LzHZA1H89htq7ZuLBQD5aF5GdECa",
  "key16": "VM6RAmeYfJksghWJw12fzQzfc1ZN8dkW1yRwya6WL55frWoyAqtogg2u2APj2JjJME5oSGG2hVnTWBeMWt4RPgK",
  "key17": "LFcNh6YE3xezLkSJisxtGFaTRNjwivquRVJfxqWggUxzNRjWs6vwmtZQWMXD2P9zfQCEeDpN4uSc194j9dinNwd",
  "key18": "2QFKZ7neUHYgZ6CpMRkViLN1XrdNS36SBzL9f8AoQgnMtotJbW6C6zTrdQd6crYKtN2H5qkFXDxkkgMqsDsxZVwp",
  "key19": "3TwfhFdSisDbsjnEqtdxgJJuoQw3s3UTsxBXvGPiQnbkzfeNrpDR9cNiZtpZapBhtDq99ChTdy3x97BGEwqALLiw",
  "key20": "534fVpVzEm5J1QbKj2iZsbh34uMqMeNbRGRGXitaJByZsXYULpKTnyGu7gfY7Y8fi5iS7hK7mZ1kAKKhjsGsWEh4",
  "key21": "38cVjD8M9emreVZhBbkUMEhaCQuTegh7DALiAyNweU4zWNNodqPAeChUWUCVwCZ4hxgQC2BtF8NTpEvCa8YhU5rE",
  "key22": "5WZ2UY4kPuMcrHriH3RtuzSGw5mrthCrx3sS88XU7pZTfmkWRP3pHg2eZvd222H9hdLXXigkjEayXix7HV6L9rqe",
  "key23": "2EpyYUNQa2dMt5q4gKfXVErfijHF3y9ZPzaqEkzhHK4s7RH2QugkJNF49whRt6jmkfqzKSMiMZo2E62S8caN5CUF",
  "key24": "2twv4tsfvcKZVgKCkYmtJ1MPExziXhK2z4HwRrsMmHbisVE9zccK1NXrgmaXtkMp7fUMUbbcwcPswWuhB7166QtH"
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
