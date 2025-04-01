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
    "3wrbW6TQwWaaeMxsC1jiVMmYU16sU81oyncava6YqEtFVhPb1RWHrVt1xePVWEAmiawbTv3hoACXd9VsTQUPFMDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1WBU8xUeyTDHchNk7hTqpGR3kzLYYWBq4nhzLk6JjgZ7wTMWYgTMsGFhXnPfZqa2BchaaUf5Hke2dDjR8W7dDVG",
  "key1": "5sG75f9NLB1XZ4Q3XvUgG4XJ2C3985w3KfEVduxyPwFiyHMQS2kvMXk5uxTNouqCrC2b6Gyq2bFRtE44n9o4rmnQ",
  "key2": "3GCWC2jBpLR29Z3Ne1mXGaTSc85zgaPwLNmn8EXKRTZLLr7SzxE3sxAmUxV1gkuZU1JJ5h1ABF2TpJ8p2Wc1JLC1",
  "key3": "3Awy9HrQNbg3JdG5cfWASh51rw4MmLU2BLpkBM1TMH9v61WEW4XHd7nKvYu78XUty3f3ugEBgrCNStXnyLQVjdvn",
  "key4": "4PjvfAzvSUjwCRiXtEoVjzJQvTVUsTsxd2t1BeYWUcmYwhjeQ7AoRsAmhpjBD68CnpXpugTWmWk9jjiE5GwqC4XX",
  "key5": "23vYUgBGgYFuzztboGamXLynbdELDSQmbiSVrVftU3d7iLW7KUTs4pHj2e4mC7MEcip9LsKsg98cs5Fv9cv7k25S",
  "key6": "3UwQhNsvV61GaBG3jmrJkUCLE1Yn3Ce9zQXPyTEnm74DGNVKg5JtiyjVbNaWTHsoP1KSGUC9aezNspgNMuECS7mY",
  "key7": "4kTrS9kUYL2h1XpYdMMcv8DCAyovdNmqNp5G8kDpEpfb3dsZ2fdjMAkJVKJo8Td7QcmgeDcmtHEEogmUNvGx6kEs",
  "key8": "5HojsEuiH7W9VexKJtFczBAXi7ksRxk6nHza8Z64Q1K3JzGLt5EhkUwsEz1QEJ82NZmTwEd1ks3tRYtYLzfLYTbE",
  "key9": "4hqnbnLGLi9WKiYMQ6eFdREXZAZzHpxLmSrnU3rbE9aScV7pLa7Nu3nvri4QFVHsyCndxokL17Ufh3ceAaBr6H7z",
  "key10": "4WQZbPDVDQWfrViNW4ZguHfr3YVF3HPGAZ3kbE7AAP1oTbSAVCawTUS9a5L4UtL8dcB643pAFR28o4muJEtmbxcp",
  "key11": "zhTSWZ6DoZXpiCt2y9Z6V9KgMzi2yYhnKEomEu8eqzqWHgRGdRRQeroY3u7EQrgjbevZN3KxXQ8VyM9C9xbL8Xh",
  "key12": "4hnfunyYhqLqmXCnUVYeQvw3VyxhkwkgQXXCeo9BNcUWa2PNaXqZx6mXyrwGFGpfDpkv569z3d3HsU7ediYBLCbK",
  "key13": "2LjmZgdWbanRoCvnDBJMZdFJaCgz8yZ7FNg4AZUjfbx9SjeKxGsF98n2ijuNE7shDsHSeUHqpdq1mujJKUXfkQq1",
  "key14": "5cn1BQApABVAYpgpTd9o9pDn57x3DGMSyV1ALrZu1oSvbd7zqRXeP1sQezrPnqF9Vjay13ZbYbmBe3WJ5vvGX5jb",
  "key15": "2rzEmP1BGhRLKbQJExvsqnSg173LJ1uaLB8XbUvemqCVerqnz63pUkEBUBsBShEzUgLBngx4GWJMeBLcSUFHjHge",
  "key16": "31nKaaJgMCfLBSwZNXPSmqMoLrabxFjtnrYEvq8GbAfeCS4fXzWUs2cVp5DVMqBR7Mqig7vtAw78PaVhur4oPiLk",
  "key17": "4JZuPzdpZyZ9GagLd9wX9YqpeL4pKsErFcFL2NRvokcK2gdayTyw2pegADprZDAMwazBiyzFs56BJGHr21AzE1LA",
  "key18": "ajhTVe8i3eTG8sYuizAJfPpip6tTnvVhz3YoZ7CfgT64xmPB96ybSo99pTzhPDAFGFuS4f2dW5BZEBY9ocgEUUR",
  "key19": "4hJDuqsEHe3rQGp9jH9yizWUisZizdDvMdjhP97CbWjSq9qzE4pJY3nvpsgHMoMqas8A2v6MmGq8QPaCJ3DTcNFP",
  "key20": "3WBZTbQMx1ceCpzvobdXDoTG7C6DA6CRJKyQ5RQDDPyphsY8MUGdEqZ1CMkH4jQAHnL2kAPGhHfVK6wKYQ5sArWv",
  "key21": "2SXkZAaH5v7VCfVZ5r3G1HCGkbnFeAAhYJZtqXZ1JgbDtmXntcTutH7S7afP5g24LJXenevQq6pSLpMAHtHwtWya",
  "key22": "3ERsczuojRKoPWuJCy5K9sPp7bnKFPdas2BNhUL8otnifzo9CDvktoRzMdUBpYNcdkjbXqkbY4tK7fmtpud3ogSz",
  "key23": "9S6NpABXYumVY99tRq1nK7i6xGqE9ZJaG4Xh3A6DHhX7wKYyBtCEDT1t3EhuHgAZQUvCwGDiRC4RtWAzZQQG5KX",
  "key24": "5vmXCVpcxW7sDgEN7s3yw5yh2Mp56XSNJ9qHVy3EuWqjkSMDPT6kCr17zsajaUFEK1bWH33Wwmf1Eij1v4EHqwrK",
  "key25": "3DJ1mYHZWLpvXK4nxE9kJMeB6E9HedMWQNVWKtouZGivzUivWrwHHwM3StPUxqfYySQTn8JHrGueojApYLDGtUrC",
  "key26": "38PGXEkPatYpCe3ZZwwYeLDKL9d9fkZ8rrxnxnrE1rFYEHqCX35kvkpoNGNtnBjjKvZxPSUZuCgmAjUn2dHdH2je",
  "key27": "3mchZCqcntwdS2qKUvVYxAYx6BX4ner3LMCzRATE7WV8yznKZGtMKCGaA1E6wPdNt6whgvGn8JiXjbwE8RhEVjqv",
  "key28": "65USYt7k5MidQsRcQWifrErfwX8sX2GVigwWwbL2XTAjJbwpdfs46CHrTog8GJnSwK2YDVFTyWCwxZ7pHEEs9Psm",
  "key29": "3yWsrc5oqZFWtj97GpsAa9b3zmxHWtg9MCLzgM2nnMqjnT7ktrK9UTdPZ25PbzZ3mPghQCn598grhvDjCoUY2Ei8",
  "key30": "3gnVK1x2QZiPY5XHaoAfMmmczpPx1sreq2noANSs4qws5J2hT1S13MYRs4YWhRG4VqLKL61hiSKgvjGZuTzBwKcz",
  "key31": "2sNKqFTeFv4YesMncCqCpDU4MbPRCFgoesoHzEXkLZbx6kGj5AqwRKbTS8jteNtFsj1Vqu4VF2eeKC9m6GATy8uY",
  "key32": "2m3UftWGHcqQLKGAK34jvu4V4Vw5SYCqbWko9DkDW3hVBgnKNyEh6KPuX9JgQjJ4MuxXHZJgkGSqj5ekbExmAr99",
  "key33": "3Kc4s7c7qMfi5MPxTXa19rYhgAW66SsTQqnHaTpEviSFe62PWJg2jbiM5cXWyFaF87mQzoQwdQHTQTDvKT5TGDVN",
  "key34": "59qBNXdm8DEddxjZqpdmBCibo7xNiMEk2aXZFiH2gS7B8svdg3AcJSw7aozdjoTFfRhU8E6JS9LDwVuMriDUZWxS",
  "key35": "4mP2rr7nq7kDRioMNqioSvqdjskxvDf7tHPspBB29uamw1JM26JsTah9zkmWqPkxfBuxp5ciSe2VLF495DoeUZN2",
  "key36": "NGdahDaM59QauNyptEVwdnr421VUf6vpRirgTkpfT4pk17FLEy5rQxE1EEA8x44dGG5skEYq5XL2cmuGLM4w8GL"
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
