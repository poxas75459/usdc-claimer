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
    "3sBQVPFL36EjrBhrb5PoAEBvpt4Fv4DEKr4DqUZBTXe4zGmKF6S6qdQ5ZdsBY9NvrcTb8q4hRevUiNnSzmDXt9ZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZMxEqM8bLA6fUUx4fSD2KgGWTBZumJn53bMsVUdpG9vGEfr8WamyRnndF2DKdEr51JvQmarDu3dCpgWNb36s4Q9",
  "key1": "3wP4WTXSxJYYQza8ADeWwe3VMxjMA1ioPG3Cw8ECvuwGQ6pu7Mh8hEuNkMKEda7ZSM218VPTdjugCj1kmPTbSgjV",
  "key2": "4bGzajbHSYc5XKevf2AuPeHX7HX5k9QaHNh2w7Bt89W2AWY2EovAuwtY9NBaGDWWijWbZjwASMuXU3KnaB8hFrTD",
  "key3": "2dvX3DFNSxSM8ZC1GJSP2ZvNaWe8rwXCqEwHx1fgGxuCy9YXagVQcSPGsYAYgzfzAavDZ7xLvKETbAptLTVwM7de",
  "key4": "2QCEnbHk898NVYToH1zUfaQMX17s9yNJ36Erm9Ad2ZMpiqds1F8ZfteW9oikM4vJ6r2nD2AHd8XSv4YxMmeVqBp7",
  "key5": "ZiyhvXm9CeiMsNTTY94ntiqVBPX5dbsztzFfc3kYjDjYocnRxLNMKj5yKcuQryTYTLh8tf1zpuXCb3uR6mmpFiA",
  "key6": "uhzVwTTY1xLPr9zH9JtwPjhn1SKWHviXiRpG9SdC2QPPjjx4BRitwYkaJFGE73yjDJTzxoaWX3VR3ajK6WPajr6",
  "key7": "64Pk9RK3VU3DerFWQkhgXJytuyodvWtt3fZTtioTM8VFBp3y8jgJEjBh3v3BG6ShJFC6Y8DrdfVZAUfEq3WCYUY2",
  "key8": "mbegNyViYzKqwfw9NAMoVFDRy4iQms5vacV2m314CkB7nP6fud81ZDtT5wwSQrdNg9mK3LupSJBt6ySYxZVfawy",
  "key9": "5Cc9T4kr6hj3VBfJ9f7gycjSaPRja4XWFsi5qzcjyF23c3iVyT6r3ENvNaU18yMfV5ykPLY8yWFrk1sXtJDzQWbQ",
  "key10": "2ZFSEvvGkhhhiYaQ6ZFhNjwoxaWc324NoedBLXs3XXpeGu4PQ9RwVrsuiMkiRCFrNMadZsGVCftWw1Nw24k7Yfmr",
  "key11": "h6yUtCdBcw3t8YwRG7ifz5HvqjWkbeVtgktoL1SEk3zzt386HUHcNKEvJR7iT1YGXhtKkg8D9uqy6w99zLRx7ME",
  "key12": "2WDTSHt68um67ZpNhJ9KJJGC9DUt4AsKCFFG5TKoB1n6hBPy7fXJprXM7sjtwcXs67WrdVGyPexWPwpFpaLaBjJt",
  "key13": "o86noLhG73h4TaFh9ecRsX5JBskRS7DsyXzS4EeWVjhQyu1RtDHhgYdrtnH1T19h5BXwvFBGGtanvRZARYb25B2",
  "key14": "2XYU6VgfZEBhEpRo4fFFQGmMLNb1YKB9yfrNs4XcyZaC69C6WTpi48hnWbpwDEvmkTTDBPajV7WCv3Bongds8DP2",
  "key15": "4FQQEQmsqbvrCfScyEoEYJiHbacV4rXfi7ZTvfhzskZ7f1orMYetQMWo2CWV6XWb4ff622ESer1pEpXpUn52cDFZ",
  "key16": "3Me51QizW1gLykNcNvcZbJc2HdjNNRbRyZaAfxQdQoE3YS2WMGHXpiiZDsFAEK2wMKJCxD2DuSHgFtmV2MLB5Xnt",
  "key17": "3V8TtHRFRxPAhUQfoUXRZXKur9pFKUZWJLb7J4cZjVBmuD5EBgVVNu8aRu8yizY3sdaFhzj176U9NMrvXLjqt7iX",
  "key18": "4GyBVUjSkmiz6TQ7gqZiPRpdsrgnSEXK84jpc2Z12wwNAC8SaXmY3AkuMMC3QBBQ3ECTuUkijgLR6Triq2v8RtMU",
  "key19": "2DvFPCJACgjC9QxPvLympCSQtZQWzx4pfqL4ZuChd6LLjqq7btEQeWDPQ6iYKvcK5b54SMZzfeYe1bcnodNBq3GY",
  "key20": "LxErppAADpN4ofketGNRs7JEGRPi3xUh4RmBHTbrxTEwjzsAkb3SfwfwhfZ75ZF1hiAkQfzegFrRmyerfHnPhvp",
  "key21": "4xfhaKnvk2vs3m1zX4QWWNRgX7NSnULazDqx7SYQFWtbf7DMk1qtgYxq4oZuHU2UPVz5rYCgiwqqQtRtGLySkbiw",
  "key22": "5n2oExQKmtVxKet2HRkp9z7JL72u1RXc9unHuw2bgVUNZgMy2gRa3hv9bwuUkkMRLHxgNS36B1zktTSe8GZTzoyp",
  "key23": "2wZRmuBB1czwyU3pAPeZANXXjRjxxtoGjP55SeNiWDjdMUqUE8CMVN8XLwYGL7HvW4YE7kp5zek6vwEBFWEuCJop",
  "key24": "679H4BTStAjGm5ysyR9t7TFBW86gRtcjQhSwoktRaXSffbu2e6qxEqmQFL7W6rhHwjD9Jp2NRtFXV2ad9NoUBfkd",
  "key25": "2MVJQgxQ5u4YiczNYyNrYC1WihRQmwi9ryZRSfGYSfmuB8qJg7qWqdYmj258PNSyNkhHWNY3ajhm12Pb87xebLbQ",
  "key26": "5amLqMU2Yvo1exJf3tahpYa5UbdoiS9iuJT3BQVBAz5pFcUNEvbjvUW8zki91my98QpkYLsUPT1sfiEgfiULan5E",
  "key27": "5SVTGMJvhbxZ9nKENUDQhz9A3EykzdGpR9MKaX5C4PM7ashofjNzZ3DExeTcKETnJBRHFRq71zDpfqNzuaTSoiGJ",
  "key28": "24qb2GE7CqvdtApxf4Fr4gc1sq835zYScHRC555Ey6JhY9sUyHVYsukJfmjtK1nJW6prfb4mphfk7pa7eqVsHjS2",
  "key29": "3rrkT7tJvuAuZg6AoFvzEkjnM6ZC3kWdeencfk3JVKsCBKvEyAM7tuh2vkAvBDNzZLqn1jKvhWMKJScgJWmtj8ja",
  "key30": "3oMjvyx2iQ4E2GZpu19uVvndcHZDj5tAQKP3HYrsUS196AYL8U2D8pQWjsJVHd2JQpT5AFpRpAB5Hd5NtWLxMN3E",
  "key31": "tc26W2bsgziGdsYxdT3obMJ78EnpiidxR2z8HEu2Wus7Kzq413vu1aPN848i3B9c56roUnH6VoDiv9xsBhKtxAH",
  "key32": "4JR3jPg5fMNAea3MnLc3yCzcAwjar7d3z312VZ8uHEhCjNjTa97ji5WgWhcneKWFzxvDBrGt9oing8f11q8Zjuep",
  "key33": "3KT7nCfS6Xn9oCShPTkNQS2qJZMgHTBQdYUVnx91uuQjf45rK3Pe2r6efXihxyg8gpT9KJaDe2fTMsjPiL2rYsL8",
  "key34": "2QRcBWpRKq5ZJk2BG2qHA8tcwEMqA7sckcnM5N66u9GgJk6EThGXra2HDsd3wywdeCuYp9vissY1WjgLwH45kKpK",
  "key35": "44Vt5gsB9Msz5jwzUAzXsQZuWRLoTz6W4fiedY6pk27XG5JH9s7LxLhvcoWgTjjDppA9duWQYA51oEAPJHaXupr3"
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
