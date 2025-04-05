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
    "3eFxYSGze3GUVncxz18oswDjov7oJH1zYSDdFCBBN3gSYsHnKQ9JajCiFvhf1BwUbxWPETAxUacEwPn88ZqrxRYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PdhqGJecfjFqYe4QxfpaYYAwu8FguvDnCyRG9XzC1bvUwJffPtKSaEt95HeJSKmFQMEqhVkbyAh4Q47i9w6p2Na",
  "key1": "2sA89fZu9Gp6bCMRSucADBCyE6Hqz3nqcyWPW5Gci4cwkiX6rvpNXzPuquNXs8usA26C8LX3pVngCyru1p7wJ3Ln",
  "key2": "4pdyDFC7u4we3xQ2wrxb4BSr88Luxz8rivZ3a7iLdVTnqV5xBVqoQ2YFmTSCkiKLAooh3hFhjEY6DSZk9Y1Sv51u",
  "key3": "4C2utZb27Szo2LG1ekJ9Fc9n2vjuNBHxqbBukojDZytMwzfv73Yxz1527uyspmp5kC7eGFdN9Dx7sSq9GAxms32f",
  "key4": "KjrtZY2x6HkbdxkeuTLT8BxjPAvutykTS9rzEsCNSExjJpZUdBfFf3ifP9i2w5mS3TLAyEhwqKXCFhTZLQPPf9F",
  "key5": "5zd4xbi9gQwCECHoHZ93f4WeiTK1WG87pvmwysmxG2QJC7ZxYYABLBBWXfgoeHtKN8ACWhf7M1o1iAfMuraZ72Vh",
  "key6": "4uS4sRLBoLyfb6SUUcs4mkkDjr6E1M1SppQkauZg7rHksG4qA5gfyrkTyHwkzuydhA9EVXmGZ9ViqmtxDuHuU8mt",
  "key7": "2degN24sPyBp8DcJ8xQMfEM84Q8zghLBZp46uyRB1jm6Tzo1HcYDSYBZLZEhCo99xrkwdhrPic1t7ZrxnGv8rGE6",
  "key8": "62dRi3kgx1hJrVPPXGBD4YXDgo1jWL6Uyh6a1jfMuLqCgg3NA9kUCdpdRCkePezNwYyguqoePwYEFNyayiKy5nqc",
  "key9": "5bwEE7HyehFjHcLphsMAdRySbJkS5G23KAhRQHjLZ3LNWenr1xzxqxzhajEU9oy5koah47rHwTeodqaatADbyJma",
  "key10": "27B3b2kDDH6F88g492bhVzB3EpuVMWea4q3KeVbadYA9eDafe4KEmJjf5TA5X7WnT4u37U5qewTWgnmpkDrfZYCy",
  "key11": "HTrz7CekqRcakzhZTTaEE7cvZFUGpx6y18Shst9EXMru7x3UfX94jpBpFV7YVKkMgzUVD5uPg1Mz6kxqP6PGKmG",
  "key12": "236fi3thx7MaEvUqvujzsBAgNazom4y1zjNTtDwhTfi47jh5Xf7JUrWenjutjPCDc9GKefHCvHhBad8wjAwBrPZm",
  "key13": "4Qnm2xxfgQGXEpdyMJVXyvWhRopmtod89D7c5ZLhpq8PP6bEKEZpEesudDDdDG1b9e4gNKPSixY2SSR9re9Pz7hy",
  "key14": "5koVNS9CEqq4TQoa78SHEbCY8b7BDeUzyWSqsNYKvnoWvKJ9bBTfAZfnw8QwHwnNxnnt5sZTiWaDmG3eYWUf1w7V",
  "key15": "5HmbZ2CXR7tQKNDTMLBE52qukUAP5kAk9JxhegVPHQAqgWvAKWGWqA2EsS4mKsgbnXzHQJrHzdFLLL3vM6Tg9pKS",
  "key16": "5wo5UhqCZVfFAnGtgWL31Zy9M3CMMUrPz9eWBTSjnec5JByWX29KBiRjCdUUBSUJvcG11ahZwy94GC2LJGwC575U",
  "key17": "3mnCuoKY9p1WzRaEjTWXRFQHey2w96oyjC37VBKSy5R5SPG3QDZsJvKZeGKtDTasrXPxeJT9rnmYDFj2e7DDDi8Q",
  "key18": "62W5EMZP86v2eSLiyGdnoDUmHoAukhUABH7q4Cbu6sm7pLsgso99fKmPVtQGsGJbogiYEFJMoH1sPyY8dbRYfgBp",
  "key19": "vbJjNnCt4K2NZs3pboaRmJCt2TFjELDNQdrH9wUWFzPXKTRJxJyBcQAzo9E9c1kgd9fucxxfwy2qXtNbvaAKEpQ",
  "key20": "2Th7tsmytYpycwthuqRd5T8YoM3kYKCFCq4akHJ33x9XMSEzyGr2HqZwZ3x3WHTQm1uY21nmgyoLqfppxMorj2ZQ",
  "key21": "5rLk4NsHidVbfRRWaXmc13kXjBLrgsLmUDRuxZCqMPV6iJRskEycxCRcM3s7MJHPxXLnRpYg38urgSAWfN6UYgQr",
  "key22": "3PfPYFp3aqLi1fidpN9sAiYJA4ZU3vDwZwpqioZfrJe6d3sTifL6DWkLgW3MU59LxWsnB28PzGV1dQRB71Ya3MNa",
  "key23": "4q1Ku1uCouSNZo7PzGdGg8AzF8DwiM9nTzBTYAfp48wMXm7BHj3XeE5h6uLokz9bZGdrCwLWVLK86BuKrqL3dtGs",
  "key24": "uvQjUqJnBCTHWr2REqgwJLmYZGqCwPtqXJHTBtM2u9APvF7hBgPMxrDw8ctxhCLJTtLCheRQwP29R9nt27FZFHH",
  "key25": "ULp64oK1AVMi8w8NFStP8o4Ek9zpoGLV2ynaUJX5c5LJakyxdBMLJhVssc2tkGg3pLhro8KUbgmpt5r2Zu98B2N",
  "key26": "EahN9V6pUvAGurPhnukKexyGGgHS4LtTH6bVbcGW6KH3kBR75BehUtRZ3MrnSsdFBMMKhwXmzVP2B3tu45CT6rz",
  "key27": "4J9Vwb9a9JvsgFvqMm4zy8d5bAK6BKXs8atFHJEP638Zq4StDYHcxR7R6o4Gpm9A57tyuz5xvrrLnVAEyDUFuX25",
  "key28": "52TUP8hA7SGmL6tymDNTAvErMj4eP87kQcK4EUvovtBWeDRYtx14bvAgWzoZ1AAwGJNrF9X9Upff6zMfgQZB8TtC",
  "key29": "h4mhR4R17PrSojYm3ng1um7xoiqt1znngNk9WbtTrhR17ztAezn9B3MRx1ANRc5ZbnJ7iDynKk9XJ95gEZif4pF",
  "key30": "54qiYAZrgzJBqx2bo9q129cHLfQ4aRizevcsX8XzfppaobMM5BHZXuqdp32Hc6N5HVDjbxmvSWXMA7RiesGebtkF",
  "key31": "2JiCewjjtJruJ5RwGF6y8regacgZyQJh7UfQXWzaxA4XFAiJ47gcVsrGJTVY5jHjoQkG4nvavjgLD1PhtBeKs7yc",
  "key32": "65DSTKZ8i9kTTShN2csPidxEKvzqoFiPNDdPVg1tgzoLo2Eec1dFxnjLupo2N8VEZQqjKKyompa8FniBq5XnWCFe",
  "key33": "4N8sw5SsyyrVspd5yAgnSeL66FVT8zppntGnMeiwwHZUsqm8ipugSfeAmhYwYWjoDWxpJRi4ZPTfwPkps4P8fsmS",
  "key34": "5ip1dCzZXdfu3QKXLeTCqbPaL5oZeJjKf1GqR9CfbyQQeWaVQLcF8vLLWGaEZtVeJLgvze91CVGQPdy93DM6mW2M",
  "key35": "55LDHNfQeG27E2pDMV7UdYd8H5zsrcnffAMRRPEzyeSQ8JZ3k1tGTL6jSwUoFiYdmx8oLiWhKAQH57v8qtUhACy",
  "key36": "aHQqsDjvy5NefGa26VQWAus9AZrtgUUUET1MCQ9WoxDvCWWyEqroTaB5DkMbABMBN748JSXfbtY3mNrCcEx3pAE",
  "key37": "21shUZWhzJsdZJ7LAiuoCY6VtpkHBgx1h4MqaepFiFGLvgYqKfP9mevTdKVwWs7BhK5cA6WkftUKYixcTNeonGYy",
  "key38": "2jbcSzv1y9x5K4Pq71JeYjLcgvduDviLWmuyYxeEPYY5uWcMUw4Sf18gbiuAzp9mfzz2r41mvxwDW8mTQBV5y54D"
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
