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
    "5cyG9FNRxbE1zJhirry2wrMWoNDPSLFgK72nQtsoJjjhvLu9HayEcuxbRHjTfe1v2fqoxnNbje7fmXnseMouW7cQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cVDZ7Sws7CuhWZD28w2VNkgLunFYSy8S1FgDkzBxSc1AiZdVStcPoEc6bJMEzoxKhVuxXk2kSg3WkXJK5hEYtey",
  "key1": "2ecYUYxUjLVY8rnvPEsN3hkHgFWQBkVXio3xtqo5KWwpzuqh5qRVZrCKTA8LpFz9jkQBjUmsdCuuhHG8UfZJoyxz",
  "key2": "3vHo16ZJEoTc1tdDJwkRC4KXvcButPvKiuDYYyxaGfCkTUfGrrTMpUZucoFbwuk43NhXFa9Srm4dx1FsAk1eTHzX",
  "key3": "2dzrB24onQNkoyr372S7Njb84uo2yTLZxcKbwT8fcqHSAckvrT3ehoSweSaUmqZXQ431JL6KgVMYmxjSSzV6VooB",
  "key4": "64h2DgN8JxFJ68QrN8JrdBU8RTFKWaJhY3qxoZQ8gghEwny1Ebtka5yqKxYXRF5nJWT2LJAzpY41ACYaG4wXf6ix",
  "key5": "5RC4JfRdbWXpaegGzn4pDZrCv2gdNammrsCKjmyHgaQaBZjWw18Q9DABdurTB1jRu41C4RkQAbQwci5poHtjPeNa",
  "key6": "5bUP2uar2JUetiTd5FpBdTYy67vAMf6xYa9fj3hYXJptKvzpRyqncWXcBRiTBP1mjqHbRihPWQk4YZnRe5QDwuQi",
  "key7": "4TJYQcY3MiobPsBCGp9gzsc6VF4ZTZQQVMxjvbQG52Us7RBGhUF2b6PyBYKoChsY9qyU1EmQ5HbfMdNFVTzwj4Uq",
  "key8": "3nyTExxag1zkTrmJ47McZPtrbPzE3NunfAnqRpFSxeMTHcbv3eLCEhQbaNHjRZhtXWsaH2SWBX8Kput1E3CCyf7m",
  "key9": "61QkyyiE8Er4HnTiiYViezd84AgxbsfdqPK5LGX9PiFfKxE4yrg3snVxtkN8KH7fjxakUAqN48fTULhUiVnBnHUe",
  "key10": "44ZefMAZruiRa7A7mjVQpTGRKeQpiPEMkpe8X5uvmiAh6vyYwnAPVVijMnb5LFjSzSCYvU51bTX9N62RrRBaWqEw",
  "key11": "cUFnKsh58cyGr2BrwDebHn2N53eTpPgQ2rdxRHjhx6Z14RTr6aSk9TSHWKYtbo3vFE2kLMFZ7t7kqsHtf32wep6",
  "key12": "2cmnknMghLxAzpt9DQg9mYBLCY1T2Gj4aCKrzjefRKWkF8X3XrPHxPbNvQb12zT62Y2hs81nC7VkVx4kYkUhq2X1",
  "key13": "5ZgxFNCiwWYHJB4m7ShKxQAZHAz7hQ4Eu5iWpj1KhBdhQQnmF6pGC9gZyhXPh4cq1x3FDqCaRfyz8ozjztTKTCCG",
  "key14": "xHzQBU9jTfXiDhcMPf6ojLugQjWJvXyWZiYi2fVadVrH1Pxm4zfweuyc6comS7YPcZd7LAMDjQtuzM5TsvEx9Wh",
  "key15": "4yUbVWopcitUBzMeUseW7Lz1DuBbSk4TrvdxpNebVX3RXcnawcGrrweD5kHYR75HqwYzSBH7n7UJCSJPdBhofecK",
  "key16": "5DFc5Zau5JaU2tzz5z6LGwkWwP6c4vqWwD6GHb5o1SqQiByg8aEz4VaPGZxKKJ2af7pVXWb7VWvZjjBPUdASpKy",
  "key17": "4ST8ZoSUKiQJkPXd1qHkHEuNayZWTi6U5cF2iuwGjKZpQxTb9Xa9QFSA2v4HKjnf1v1kGSkLN98TW5U5deNDc87P",
  "key18": "3m3Nt5BTaF8NbrzTct45uVYXenSDXJz9u8TWTBvZfR753muJwKtZMDw1GuQYrFDHoykJpEU6qkVaNZHBhhYiju3Z",
  "key19": "eciEJJK61U7BfsAijYgbdft32rgrq445AcLWdiLeen6nf8UXNcCFcgjJdjZzb36v4bqvM7MPEeWje7GvDLABj3e",
  "key20": "3bUiNXcM51qDYYam8dLC9pauetR3Zs9KRWEfdV7r5J6DpVaMqNQheNF7VBMMvygL23KRAsb4Lpw337ZXz4Ssjbqx",
  "key21": "52EZSuXyVxxRTgGnWp3MjgoswycoJnYxcXCosL774pMQt1e8NHVFhXcaSJmwZ4JMwAwu5VHWG6kGKH5R3v2p4Yz1",
  "key22": "cfGVLMSBrFUdYRnNK9CWyFZNkuYamvKriY8Vw3PV3oYqC7GbeGSfX8k2U9y2cYqiahyygdR4M7UbHjPDVGYeXBd",
  "key23": "67En9XKLadmXi2D9wTfwgiNoS3FSUTxXF8tjb7iyaYd1ff3UK9qJrog1NRVauDNoZd6rjQQLuygPLqx38TNT8P7s",
  "key24": "45P9maNKu7mw3BbXFPgKXGfNYZq7g1e7FrSzFJQ9oxcsmSm25797ivm9Hrd3vtpkXx7Cc3QbcXzLedZpzML18B9Q",
  "key25": "4m8jwg8iZHFdK68K5yMFWAWqTMQozwTMfpgzmQhf8Mv8pdw2XPXf4bNyqevEYphhb5XR8BfqHW6ws4xtJb1PP9ZJ",
  "key26": "5ENCRfXkgGrCNG34JkFwjgtpECq2Bnh3Rv2WFZHr9Yv7s5zWSJtNwmkMK1exM1JrRorzUhKxyTT5KEbDygBK7CJA",
  "key27": "2inNf4iMc984Ja44F7cA8bbraDUM7ujJSM1KgXRKiqxxocKYQbdpf6zo2MFsGgkqdAgRCoVn7xseWH2HRbTVnBfv",
  "key28": "5hNbtbP29gpUMGW8NWPi3ko2QkGNcDDRcTonVAZNoZWL51TZfZjA6GV16iLmK7gCXT2RdUhzfNfeAxaF46w7KxmF",
  "key29": "2FFk1yxa7XinsFAAJfZYsAmyatziVJfPJtfeRKCfbKjgjRLR9dD9rmYdD4buGi5SzfSWkYmbE2Sbd6nd7ciScgLy",
  "key30": "5fbBRtNGFtqECye6e8Ymjb1SJfLzqALubJ1LnrRo428Sy49viTtYvGrnQrVRtWXA1DLkatxtoTB22XsqrANEcB8x",
  "key31": "t4ZsjN4hVSXVMV5s4LV8PXTjX7xkfRtasRr59sVfn46zLsDvSWZmAeSfhBteGgSuh88VqqnTqDnTwk5ZMHEeCai",
  "key32": "gsWNVytW5xb5C3KWXbwUbgRCPY2bA5BFDosDEDdtwY6a3bCD5eW4XC2tYz9xHDR2PVDEAN88rmT2H9cwLbjtNdV",
  "key33": "64vLtMoV1BNaah8LkHQYiW6NHsCPWpHdWnqo2vRutQy1PTwgM4KyPRKu3WWUKH2aHgwNThBPKTuzPXkgkEsgHZeR",
  "key34": "3gp8Yz6PegUwLyaaSRPvgTsvAUKrowX6X22a9fafZd3UrLAC9Yijx33VEoB3sMyEPW3gWtUXQmFF1HN161WN4VwU",
  "key35": "4ZqVGpphzzFESQphFeuG3xkFyXaU3Y5YqaSQZDTQU4s84CmvLXCFUr9bNSBC3B1uauiqwy7X15Wjg95TACzifjPL"
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
