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
    "2MKuQoveLSKpub28fUtE38HDuVKv4K3eko5yd1YwWeeZb5CUvvsUMFD9ZdFHyEuUaUPHFz3QhyX2ThjSihJ6fKrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62vyy36mbAuWxkeuzX7EUU3jRoqci2LSx2pvjsuvbK2tF9HzF6rRwsk33eZ6aYaLntQrcDZyKsVqzC86GWXNgrSd",
  "key1": "LpvtyfqZxn5yKGYeNTccVpJ4DE4XSsfBd1UiG6iVDjohpoC6GGsoTU971iP3XqpnPgusQhVmXx5fEUMQSHqb9d3",
  "key2": "3SKVwSNVRp92UPzxcg7seeFoTLumhZ1WveKBq5LyHvvKcTbigErPAt11T7U5frveJCQRou5bd8XQ78m3V3gLK4pi",
  "key3": "b9GHG57PsJSJtUrhQddHW6VZeLibyNQD3jZMH9sy6sfXFXwSPuw81DNzUswhZe5UQUbvFBsN8HBqJxrSeZjqvdF",
  "key4": "3xBp9dAuye4Wv5FQYZWvC2yx81PBM4vAtUKzyV6yYV5AiqaG7fpoaSziS6JJmHbdV2vZZB83t7VeKfQuixZq1Pvv",
  "key5": "4sy846UoHfsu18F6eAuLDTnpKT4UVSdpaM4BKmWT5xD5bdhHEEoUALm1Y3fV1N3NQCaMsxSaFRB434p2aAthN7g4",
  "key6": "4piCf5K5ZGQY1BCkW4qcuZn5NEpGQLvspfrfRgP9UFSfUQFiRXr2YEUouNvhgr6RSv1tdAMHCPPdzRb8greCXsMN",
  "key7": "C87oHFtW3XRaMg464QsFUKZwPrguEaAZp7enhs3MDzTLgw1CUoJqS2StzrCson77KumZmMfcj75J4RZPrZaN7HM",
  "key8": "2NsTaZPZwxH4sdEvScAvDYnMbj6prB81SEiWkWu24uHvoisCHNV2rRTCSM8E4sDk8AKFSBZBniD7iuRr4wUG1qaB",
  "key9": "MWtGj9MreQ3Qwz9FET7d6buqr6mRwZHmtWdGQuBnX9CrzrXkq6AHYrUNH3ZzjXyw2G1pwun2Db4oxmnMnWaNcvD",
  "key10": "3PXvQPsbYDmGT25oVP1NzAJvVNBRfZcJVDtibHCsj63Hnwv1ECwZnNtPrHoTz5wjqBieB7GR4aMLeFrumkbMhTR",
  "key11": "2dmf3V5nAbFgtkvZvdwSXgHFYYVGSkQ249eeRaDaG4Zci9zfqkiot5gsGCcDDaYDuXXEEUEBDU6FqxSWMnFLRvs7",
  "key12": "4hXWaGT8zA2aRAfw9v7dqmXjj6PvXaYNcm8ggtAfdi9VDYMZzubjZNB66NRG7HALnFv8gFdv8s8W25uHn89vboCY",
  "key13": "3zYZt2xhKa2pNctij1PWrxdr3m88W8G15ywsAip5trNXgXUF9D9wh1GGm3HQtygzdDuKFP94HfPyoV4MEgRn1ttU",
  "key14": "HkqDQtedYamXo9rcZH6HyCN13cs9h9bg8vMrYw1stpQYvaisfqq9V1Fw7DDojvF88dGa5ZyATJgkdXmJmYoQoEu",
  "key15": "3wbX97vsoL7chPYHyDRCrJjcdHkgNrX6cLVSBZiCCrUZaoqsNZH7rKLDR6MjSxwDZceNZM3nLs9thK7HYPoWSvjN",
  "key16": "3v9m1CLJEccadYvyzgdmj6xLLH9Bm2NmoDtHv18wVsts8Xm9bcRRfU3sCBcBCgsfFLHyPLbyZAASMaiA1NUcBvdK",
  "key17": "3wevSPXPGweSHYcSfpT6jXoiL9b4V6PCwSCdYmWQ4pZ9c5VwMt4ELt1Up4FUu5FTJuJDkfnGU6Z2pZTH8hYa1sks",
  "key18": "zUvoeLcjrbSud6AXeKVhTuoS2B4rDzSLv6QJoaGUUArsueUuVoMdpskAybYNdqQg9b6QyCyMdgjgPQbwKmqsXTg",
  "key19": "4mcEqxgS6SB8dgMJkPm41iTgnBbRH2sibv8LKbGUkKWLm2gdBRzqL2m1XtVpEZh5kde3snByTEDaY5yWwsD2VK3z",
  "key20": "UY8TBEjfuJYCv7SNDnVvuQfY1Puz9Pxyszo6wJRatfPwZybbwRSNEaXQ1HChn1vnt4KRQTDC4uu2P9YQX4bXrpH",
  "key21": "euotUDFJ4AthCEnFc3pVakxRfb2JPvW4Hmk93pGonEtUFGnYvuESeGcKg6WV1ePHs7uz1ngmz8omTFDwH3V8db9",
  "key22": "4nfA9yYGiAETVQdJhtZ1VjoyjtZ6xBZVACqqB3oyptWnH6KqHTUanbeh7yYPW7zoMqgUbazYcVxgih9h7xD9nRP6",
  "key23": "3RL8GebA9J5wPStkuGtWVyKja1WEFsYsMddVkNumdJjgsb2k1XNWmTbbLfCQwHhtyxMUtVuSwP9bvu1XnZysD1ik",
  "key24": "2HsCZrzLgLVyPL74AZdqbejaLBT3RRaKZxss7vVe9d5Vj6e3Ruy7StSjU2oj6DBGU6UEQrfVsRF7wA9GY3tqJDbQ",
  "key25": "3ZTStx4s68jX5veyregR8T4X2VsfDNS5FUxFSKzTqb3VDLjqVB7CbRqb5eUzqUBY7ALDs15DtKCoEofaxCqQmTZH",
  "key26": "2R4aMnA6E32z5cuBvjjwiupKd3oJHuX2h6EM9ar6cP79FoniWpyJhjQ5GhJfYhb8wzUoTPPkDSns9T7KVdPuCcGy",
  "key27": "4AnkgyfQSdqz382Rkj9Knb84gzQkvQ3YGVwnV7LQC68cm7WpqDWp9m8Lj9z93dWZJKUFvewg3CgWesxhFwJGECuP",
  "key28": "2XDrFKG2i86DPtfPzdhycnqcuSfjq9sMCHJidTqMP2jvAhoDuhqWuaHJy8WUR28gBjY8jPhTw1PiwaHCna2esy7N",
  "key29": "W5HMPzQGNvbbXc3rgqUP4rdZqa59RRdhUQuQEXYYbjssWMEq5mvDAa6REomvBLMuVGQKhBNnXsZMjL1CNsqVVn3",
  "key30": "5QSufjxjw9TKo7z2PjU8kPK6kuTqtmVSg1wMQsBbHkaKW1N1mnoCN7DSsRSYWvzMJ9EKdwzKTkSoM9Ng4dHS8D4q"
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
