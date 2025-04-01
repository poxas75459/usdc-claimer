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
    "3SPTnbyhELf3EuCEu98HxJQAXazzCrWx2HsMnffW1zUNJgL67EjB8UYKXQRBgtjeJBi9SdsWN2GsNDdzKufC22t3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wCgMyG9wBC1nPJ9hejEYMBiZMDhhD5e2ZDveRUQuh1TzF6RuQsd7uMDJwghbbKMJRo8cUtQdsbnZ4Assc4QUFXU",
  "key1": "5eAGRWhTAtxbwAxWMRRsoe7ahhA1QvKcobUmKiMbisEzM51BLisM3xGGYLRcmkPSRaKCcomYLFQgqN1nRyXKB4rX",
  "key2": "5BboF8bDsa1US2rfu68xZX4abzmMiiXT8Dj25zCDBMuwBkKSfXCqn15BEfk4K4Piq8KQosoYHAx4gryYWTHaLciV",
  "key3": "29zimoBeqrLz4VGNVJAZkRpbUGdA7oN7QYQX8N46jdCyWvMzogTxnfxgpnAMDcPyN3aQx3bNYJCKWZhDnmYzjgKn",
  "key4": "3KLx6935EMtUiucFSewAirwnwEhwru8K6UNZ31NfQRrEMdQqscvtfMm35aTPqaSCR3ugvtZoh6SnJH4VDNTe1hqv",
  "key5": "3Uf9L9oVT94PUnMTq4CPLTcJgTbRmiEKXfPiQQxqMJVjAHd6ckoUz2um2tn9HiFKjteR1YynQx8BJVyUMqycdh5e",
  "key6": "489n6j1gZQGFRUmUcifLNpHQGko1rDVMyxUhxyWZiXPVR6KMX8eyin3trpKUWL6SmcjFQvtzaSWvJqzWGpeaHKxY",
  "key7": "56Hv6HFwNJHDuo6fQ5wCKjZGjox6WkFnwSbpVcsbLQJ53FBh4MVcCodyFf493vdcS9V1xMUg9w6M8pWeeUrys8PE",
  "key8": "5xn1jSoDDhfZydXwMJLRoj3cC4iQ7hV8Hweq34Zo4tngk8MEw3UXHWDbQqiHfJxqE8GJCoiyZwcEMovWVdpSCoja",
  "key9": "5NF2Lmt3kBpze5GzaMRYMGEqogsFHrqAc9L8TXDwvikH9QwnTDRnjCJ3GH4dmT6trw5NUmTF5LHAp4jFiBHszfq6",
  "key10": "4ckygjXcYWdsLkAuUzgVygY4zGUvagvKVqDjbSvy9YgZHSx9rtJbz6FThDxbouo1sTe5TyZgDVZ3dm5Fd7hTycmw",
  "key11": "2TqAgDZwRbcoEDb1pCmSy7hsuZjTTu12M2E5AwQZFvkUakFFkeDgfdiLfh4yb9eeYhdAHtRdhfcJNhZXSnmn9Yag",
  "key12": "4hbp3AdWoMUJULJCaxxm2Nf6u3xp4Co66Nqji1LNVMRkVRBqCo6cSYUabKDcXgwartE6avprNZMhimi3E7U9nRYU",
  "key13": "4CbEY8YYPXpRq8JLS8C7FPgMsgJth5wCTLjyi1ymqkSPPrGVtWadtHeGrCxLuGf9diZ6eW6viefxQwBmwRDmCGLq",
  "key14": "2SwfS942TDDPcWbJ5CJnUPPFnmM2AhbjMFCvBXfE9bESDxWRzZHnuikA5vNMz6J2rssYFDPJANUd86WLHdSHm2Ai",
  "key15": "4hnhmr4iCv7Ff42PmuE7dZdMD7Y9UFTmpxhntCngnUeHmYUSCDbSDtbK3A4GHnEEMHnNN2sz2E9Q82WBxMVE9R1H",
  "key16": "1psdnuWv2EcaQeKueqJWrCfBaU2pXU177ktP6xeh1WzXt1gnY1No91ocXjMcQjEZWackmHr1MTicTtC9ynM6HHq",
  "key17": "4r5PFAQGF18PfJgyPzuM2SDRxm9mxYQ43XAmS1yRDygb53MEH3AqrYkS767Y8CsEqCKX2icof4xfnPiAFvpd3wC6",
  "key18": "5LEjFEKYjhkG8hPFFmiVriz3qDFCHjDNsNchiuvhkZQzMBDTH6DVCkJVXUxQGczeQhGuWY7R9nKdbczVqNgshkx3",
  "key19": "3jammDDRdmtww7JjrFeDptmJrVoUCjm7E4ZXpgs88GnvijCXP7ZMLsL6cUHkt8aKK4A39ArgXa13a8kqEq9wJ2J8",
  "key20": "4DfhMPYGW9UCrJfP5PemdCiMKB9DEYry7V494j939ZSUCQ29BW6cpkYd8tmVdqApMPDkzoSk3mbZz1VcYBkY7DxJ",
  "key21": "4hzr4nPME2Q172uxp6r8rmsGvtPZz8XP4HmTrQ4xdg9FmFKXpmdJZ9Ty1WyuV1NvRe3brSGNUVaxW3kRNSMJh5Fi",
  "key22": "2jmcHEqi7yhpK9XoeMd33ut8zXSDubVmW9WDwfPbqQyhtFu1RfLtgQFSVD8PeUtftjhzpgc7M7PT92PYMuduYr8o",
  "key23": "3heWSooEzvJseCTYsmgzroPDQcNbMNVrg3swCSd911EWfuZzzM9EX5vnFJPuRHQsgsJsfDDjbjdtEViww6fm6u16",
  "key24": "3roGiUR13WyBXGw2ks1tuUpX3XXdByfsSL8Wh9F5GCWXVhQRVKXQ2j1nQd3skiAij58hHTzsrzC8XBH7KQeJcfY6",
  "key25": "219afCmCVMjE3tqTfBzvXGfGkk5bJkEFTQ3YrxD6LfFBLMX75gxKNK9AHVjNHHKSmpuHhQB4rzCpvSvJHpneXarW",
  "key26": "4eV5dNcapJcvV8xF1NcmQo9QZY9nQHPadu5hmHbfefa5YE24qJuQ3a4b3oyLgGiSpYALuxhpp7cBmDihfqyuV59M",
  "key27": "2XkQaCRPsrZcWy4Twg2iJK4o1ENv96848QKtENHq3Wcjkbu4WWp2GG9qwMNRQ4HTs5mNb5YJTHQhAE4YfzfUa6qA",
  "key28": "2Z5ScBguEtMeQaUvAsKAnFUdpSKRnWzD6YdKghXGsj5tZKjmNeXiFkKheRLLYVSRUA8wA95368i9nftiNmJx9wzs",
  "key29": "2EZZcLcwzE6ZektFwvSAkjKCWsHgTNYXg7cCaEgYQQ4VjHy6TBq6xnXEQSRxdkjv4dJCzVhmoUTjxABsPbTuVZDG",
  "key30": "hTR2BYsHjR3aWz6bAMUwBNK7euKD6Xbpjdx8Na6gNoDSgzpbD5yKy2mXj2D5A7KxhN1HXwbwXUFpawXomEzET4X",
  "key31": "3P3XhZcrU6WniM58GeDmQYywZHsQyv9kz3XTrDb3rH4BwHFFCHXAutm4JD92REk27UmjSaz6S1RhfT3x1Fbi2F4M",
  "key32": "5kxv5iDfGaw6fxURjHTMj56AnVHhWDBmRrneXZF3tZDTJi6VzCXnV2MkTrMgxfcgt9mYZhQmm474iiwWmbBnTndF",
  "key33": "3EcqsYabmRtMLcKUL9cDopfpdGLDYgCWsfJso8LFTprCc5JKyJwxj3851XJ6E8vEHxFdaEJz8yX6jNiCpQjG9VKd",
  "key34": "4ceDSmsK3VaibxwYWR5raKzNa8CdfjgtB914FEuF5bfDwy6y7NCGYgHNpgqo2FcJPKYFQrFbu3JgheaNHQgrDRTk",
  "key35": "3qSPMbPqUDMK7kxuYtKTyHTY2FZpiUnjBtbZtawySPDFsG5uK7JKk3nJCEqL7qUGsj4fdiXdKeiM5N9m8N14v4SA",
  "key36": "oTDxENzHcypds9hLHALyRi9UBEW9UT1znqx8zW3PKJyWsayZ183EbMRS1oFHeXPYJZ3DUjJtQi5xb1sHACshztb",
  "key37": "2TawCfHuHUJmKW7KQ3HbT5WvT2fsPbcWPPTpEgRgRtyiyi6f9AWEwNN6uRWrfr2ZRxp3nyHXEgDLiKZdYDQnNvA9",
  "key38": "TXxW6yTuXRE5KAmKj7TixzUV1M8EDQjD2iLdpk1jnQsyWmdFby15eoQbgTs2N1Um4929YHe2mnwFDQJL2xiocwY",
  "key39": "2YKrfS8zPFq6mC2rALnXbATo46jqEAB1tUtwgcz14fH3vN96CH9PQz1LR1RiCSPsDcm3QsKbjN1DzyJhYPj4gmy5",
  "key40": "5NcfEEqvFPpVjG5WCg8THMZ2Ksx3CnPLjx3sgwmQX5w5rjD1zV5fZ8iPs2K3zMyhZ2mjxtrPvUdSzu5otwqVrLPD",
  "key41": "47sWPPJgSaN45RLLYTa2gA4MbFiJa4btrUWWcxdzvhB9jFyeNELZ3pDNscLksw3drQfj7YL9R96oxg6L6ZVV5F9c",
  "key42": "31Y97o8NCb7dHZwjmd1h54fqbcupxZocueJuBGZ1XvsD8r6dkKxw5FaNzpKcZPCBwNE9h7hkW2ssqDvpAkQdsP8q",
  "key43": "3GpJX9P5kkJXkJrQwNwmVYwgVzKFKzyC3hTj8REtETZV3kJLuCodZGeutsZ75FeMqiF744q14p8fvFbwF4hjFtkw",
  "key44": "5knr5ikfWQDnVJx8MjqHfsXCe2qkLTpdbtA3TMkgjPs2jBxx6q7izHxDXgDVAKyT5D1sFACZBNCNPpwqTvckJ3to",
  "key45": "2u9pGdKwRhPrMgirbQ2HFGv3zBAVzw84ENoAp4DaDgQupiL1pMR1BymjmqyvLAedEcDMgbWypbAZ68eoq7iqqgau",
  "key46": "3eMY4PxzyQd85g4hjqitzRtNQzKyfQxoXp14KhdHf68F7uHW3iipbgkKLFdnJaWSEFSsm7vFX8HFkn4T1eabLCQf"
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
