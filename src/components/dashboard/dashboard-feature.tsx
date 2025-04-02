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
    "5Ng2z1W332RTP5zQBfvTgw2BNiPTgcJ1dG9VjxvcxQZzQYXEDDLaFYJMVJ6QjCYgze4xDqnVsWpMNJrFDShy2eD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uLot3Q2doUZ5CWtZZqjKcWQ4GJUFtej4cX6zu6nkB2Cc8gX2Gx8eJkXPZoAo7Fkrviv8vTyoLeox7cbfqmDb564",
  "key1": "4nQmkBi3CKHGX3bm6U9YFdirPSWhURhkepYQCCEdTrcu8Hx1bavqPGcmN2aXkm3675miChK7bGbo3roYhZCmWhbz",
  "key2": "4WUem2UeZfGYbyc27ytmsQSFqbj4qr6h3h15Xoq5FN2o763Hjn22mRobMwNDB6cmEHWbnm5WV1j7U42SKsWQXWhx",
  "key3": "h5us9HnqwrxovzPszr5WJhb5htJKLXdqb8xVYNRYZBj2ZptVRJ7htbQYSkUjXf5uPNHiy66KYWh91eFpM5iGUr6",
  "key4": "27xMrKruMqmGrHhdTcsn8XxmiHXBS8aUoZH4ehEKcbPCjXr2bhFL7KepUKKYQdemWPPzsRfoRrJPZTanWYdQnmRj",
  "key5": "1uwz1Xs9ggEasjpGjvzDMpFacU9iRCPpkAxcJY8F6gtmqBc3raacZMfhWNeZedCLANGSFQSLmSjgembt2L8c4FU",
  "key6": "3n34ui6XynccoTtKEEJvM3tFJTvyS2y6Xhgno4NdCm8MqTQYa9qC3BEzozLGZQwc8WzTmAc1stF7zFAYk2iznhFx",
  "key7": "53TLjcaNZTSPTLYuT3JnsjWH2f8a5QTTAwtJMbxiytnvMUoANVHxgWLANosXxGdsuFx1J6D4tVD18Z5yUJk2Y9ZU",
  "key8": "4haAFsjPPFzEHNtBxx1qRJTCmGvz6NTX6vwF3vmVSSp7E7y9GA58x14EJhzvqmHqb8qfZCcFzyVmnfmnjya6co8f",
  "key9": "41nGwhszdWN7ueXbvHbdWCogQ9Cq8EMzbM6QyLwMsp4aGvQ9usZf4WkpzCEHVZ2gSPR5P1P1JqoVJz2X61c98bus",
  "key10": "4Pc75texpsHXpkt7FXfcvf5XfHpJ1ceAQfvf8g5b3c5FG6qeUixNZwqoADgrdjtaB88o6hZGpEbbNMWbbJxw98ib",
  "key11": "5rFGkHqY3Jn9YKU7DfXwgXDpg4i3LmAaMcaz6ZhoZod7G85SJ4XQpqStSsrF9JYcpTEeNNJD3eUf43M7PYASEhy5",
  "key12": "5zGWmt8p4sQjYvxxCRwALEThSxVfAezatyHHLK9D9GWMgZaj4564UkFQzv68EYdGW2Arjp96vVtCyw2wp4K8bS77",
  "key13": "4qfpQCvVBkuiXG3SnWjXfaJTcvVwF1F9shE9ws2LJPDhbFwoZWRJGpTrm9iFvWY3psDGjrwnGoiYmUmFVj6MyYj9",
  "key14": "4AJHLJuUy9WP8cj9rx8K6GkgLC4dDrpKyRauo7vqktJxLbQ9iSk9J2CGVoC7jqtny7PLXDqfmnzSoT5vb56EDj37",
  "key15": "2oeBM4hsuZ47RZjm28weZ6UHDyi4MnGdP8hxzEL1sTqNQSH97rgrgPoRZtAuA2Hogbm8gUixtNKUskrFmZtfZLBd",
  "key16": "42dRwvdUqCRrXhwWNTTBgCxbZVJKRzw8HH9iDUsJn5UpjzjkaUUkVPVbbhiDgzWTLTQBQYHVpWpKLEzHKWYXujHy",
  "key17": "bQzTRAAkXH1xS9akPWugX5uHC8JfhuxY76qxAAVJ62JBnQ7SdydGpnxRLmuCMCDsygELw7r8XEpupH4st1ir1pT",
  "key18": "5mUGdnNLyF1nVugjrLTnrf1aHFXzPXxiquh1ygBzTJBDBTAKm72aH4FxfCcEAKb3ktWP6jjr43rnxjVusDTs95fo",
  "key19": "33hTBiuDk9icpcuqrB9PSos7zMeYu25LLo9qoyz3NdeLaErTvmJd28QDfj8NC3Lm6x2eaVqBSE5c2JEmrWqRS1uG",
  "key20": "5fFUxRZweKS2WKELjh44UW4U6mSrfCQiqWYwLtUBtGdKCbGr82Z7Hy9A6HytQFMBvB4WZkaTya7CMAv9qXwbmYL",
  "key21": "44xD4Rb7MzZfz2ECyZnFZ3N5HJAWxTgthybEAoWVK1KrtuojdM8ncMzTLHhbVx6UsiprHx9qseNjuiEt4ACSYeBG",
  "key22": "4LsipmcXesU7RuXBx1dGGczEKP1b8h4JuMqijz5EQ4wmfh34rb6ZKBUK5YTTtsjAjeNtFGe1LtEs8Rh9jwSxdqUv",
  "key23": "21CGcqMCAL4hRZ2eFWWA8SjtB2hBCKryFQzBRZiSNxGAxEoHM5tYucBTWqzYzTVMTmA3L4DThdx1opSCTytSA35e",
  "key24": "5iATpqttz9wkUFkTmd4ma6ueS27MyKSyqsduSryzNGhNfkpEHsLQ4CGaxJMJsmdqbYwu3gmhfaD4ZE7VdKcuixhD",
  "key25": "5YGyuQRKUqYFyNKWMC3XttBqtSbWuWfUCXQi5BqXeTJJybP6WWg6VorB48SAR6vMeLzzx7g833wqfPouYrpXEoCn",
  "key26": "cK4aPjGnDKq1JdiG15G4psUcMohmpT7nu3KQdqrvSektTAEGx7rhCNqH6qqPGDd2rLDb4pSsLsDX4cTp2HsHR1C",
  "key27": "5boCtHAWb3YD8DAd1D83VzBwzFBeXw97c2EVdpqeFMiPvCtaJxQykYVyGQeHoV1k77STaatpgSoKsnUowsmW2gS1",
  "key28": "Fu1JwHBTmZ2sqU8a9CqQBAJdVzqxH5Aizxc4m5rVVL98mNc5RGtDSQk4pfjaWBXw9kMFjyocwnCVjaZ4fRorWhU",
  "key29": "4YatPUGixj2i3DtqBNh2oAzHEAzBa63LJqR81kvhCWhwwdH4HiGB8JWyTG2Go1exAgdte7rAxHZ8ufpANQ3NbSt5",
  "key30": "5G6fvsCRRSaPBNMt2qQ4wWGuZWkWX5CbFcWmDEVN5CK5TYwEqicbVRQBU8cHLrDx1zVSSoR8Ne9doDbpYSV4e4LU",
  "key31": "13KdA6GCKb4Htu4nETzWSx3M1jcPScGdbgZqjrvULtETaZxm6axanQcYaJ69ZDE8H5ycioDGT3BmF4adL9mmGcb",
  "key32": "yhMEZiHAFGTsKcPGVTVRw3Dwfmzbq8mUBUCCcrBQsg3Zzpu8EbLwmoQBgGn8RRZkiFzYEHyWrFQPQRFG9ufuSdi"
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
