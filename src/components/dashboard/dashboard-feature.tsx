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
    "3YVBnVHaaKzbDx3ovP1JfcMb24134G3oMhELfs5uEMWuB1vmXu4TNkMkt27VWhUq2zT7Zqd1Tmvac9MreB7c9wsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ug51tATUDEBoYZSEy16zXWt99FMy1u3jMv1AVMU7wAn7Lh5ktr27JyXaveB9tafYCsjEp28HyjfRy5UoFci8no",
  "key1": "N1LB4AegcMawJ1BaunSSx6b8qLGYvXiMDTxYnoPCTyRdJ3dkVYmjqFiAVLtyYELmTtZuj8gaLUTw932PZQCiVKf",
  "key2": "75dGsKsioEgzjAPFp3gEMhf4i4nY3Ppp3XaenZ8rH7MtzMJXpAAv374R4ctsbQj6ppioDKrEyFdAGFwY5YqfJKf",
  "key3": "Rdz8qwyybTt5NUbUstJiieoWDnknPnmHVWdjqutVwM8CH9CFXc7kxVPbQnDV6BC3enfQvz6CchUhN9ZpSqYbDVx",
  "key4": "P8Xf1a6LqqGa1MkeN5rJ82GzZV2ERBDzneuyZmoy42FqzKiCW8jZC6UwyXWQc9rZjHFY4BrkAc8YTd9WdxpEyxo",
  "key5": "5bjb3s8hUcBY9TMjSZxmvf8Q1LTnYx5xUaSSH1umEB5DF4Tb6xNMB1fhcaLeUucFgbdqz4SgJaQqQkG3sMRGLZkq",
  "key6": "55iVHdy3KgoWf6LDqx1YN8AKpnGCx5r4ahk22RY4Bvrcuqp92c3W78LnfycVnXLDbRj3EQzrmq2TceBiNGMBF6Wd",
  "key7": "3GwwXassKNBwSoUvfBLcELvUbwUor3trQSaZRrxyGp2B95Nrea12sRzRexezgoHvrXjnjPunZeT67Tm9sAZLjimZ",
  "key8": "5Z8BGD2p6c8NBhmbkCyMLsk89vLndFysuBqHKAhSEYietkQ9pHeQ2mCwi4N5x64wTathSYzmH2Wm954amci6GgqH",
  "key9": "53yHZxzhuXgy9bQBSkevpcdQ7zGLwmWYvM3UxDwJ1ZDfEBRXbxETnA4Sn75CT1Kf3XNd9KdE1QFcxanK5HVLZGCf",
  "key10": "5qcjcRkwwCsRiemaFwrndth77sUM8KPdEMu4y7dRajbEVieb6WJ1gsP2T2PXsLTXQVxYrGDkwt92YnbMW2qr4dEP",
  "key11": "Wg9f99avTc3dg4LYPeZZfZtxvV7pjCt8nWfxeP7DbUPs2oYnhDgEaQexE4ZABU3bx6DtiEz1UDiWAMDzmTuh4oF",
  "key12": "491k7kSvB2aYbrWYHr2j1CKx2xoHf1XhDMFaSqbBdJyRbca225956pi1TLZw28dqxh6853zTXSqCFz6FayRJu45K",
  "key13": "5i2MRrLeXuoMQXtTWYKxZMtBcM6dFLmqHHCG8jcNxgBfM5w1bWHswW5iyYcq5Wity1CRiVY1NsdSdScgcLGG83jQ",
  "key14": "2gB4F7g1sXW2igtqZ5t8bKU3M77G3bFMkoA9CrceQFBgp2QFK5MAx4KmBSreHMV4sRmczzUGPFZLWUpqxPM5ZkyZ",
  "key15": "K29J6QzfjW2bu4CeZv6ggX65akHWxZ8MbiJC8GVw4WoS9zQG4wG6EeVeHviH3saeuyNmCfZE4aYz1j8Yo4xC96j",
  "key16": "3sjm54uZUdhLwU9fuZjCHbpbYSGPxUAF3mD57cqwJpQnVVNNwMgPrnfzFBbnMsKCwRPKT8RV57xzkZRjoDmvy35b",
  "key17": "3W6jZCgfkgP1LA6GChiWFQHSRqzcL5F4vGWjTBvTVL1ZrJKyjirzA5D4BAvL3AU4P82ygnvK9S3CQVDyTmdWV1AB",
  "key18": "3QiUEzzSgkwdptv644UXmXVx8dneipQAsRM8dDo947uuyKQJCovj7g6zVX8f8KuxdGknPrbkub2UAqcK2Et5SpEf",
  "key19": "22NoMLZaah68LZ4VX31TqkZzmAwmZErPAg8TxV8UJrTb4z1bETBc39xJod2nDmcYCR64Br3k7sGss9vqCBf3Gk77",
  "key20": "2HQ3QHq6ZfWZNgerXpPaaFTEu8W76YmmbaLtWkRV9fAr7ETzLcvkFDVpdpjmaBYSqNqZmFhJ1VV541BZU2J7w9KP",
  "key21": "EEyYHdmdiGsjQei1XF1Z5NBa8N8n7abKL25BkCEqmAdv1N548mdmC3mm183GdBdACwsJhXax47Kiqz67WNTcQfy",
  "key22": "4FmkDUjs2YCG9rvybPPiBeDkKWxWurQGCTAZh6U8U6BLXtKzMyCarcdqeKX2eCEyjDvFe41jEwQ7PpJSX3uG2bCc",
  "key23": "4SLNPq5QJELvfSrfVSeMMeziz88Li7NXVBMNpt5VJ5wKPczUf5yjUik1YM8g85JoGnKmGHAjp2qZy6EAsu3FjgBM",
  "key24": "WryeFXECCjrHtkC2i86JebwWsK6o6yoXfWbLWMg4BQzRj9rA268CYzZmmSdovQ9KWCDBdEC124F9cyxtp237Vt8",
  "key25": "3WiimTbnbSZUQqSTjuW9RKZeWQviUsSd1Hpf7ZMJJpgt6eg1tAY6wx8XDGc3pgataBue5wWdkvXcjot8zBbJfvEB",
  "key26": "5pyaWVJ7Pax6TKEkEovqgbBmqTTixVS5B4AjNgEDAmhExNbe6WCrdGdz4MiN26RYXcY34EBvWMH4imAJzkzkdAng",
  "key27": "32Gmwoi3MXjr2zG5yoXV2iDqCBGKnQW6VF5zRRfHvN7pY3ttdC1uhyJrabRjgR9wzN2wyX3uJ6dKYr6vjmZuUoo3",
  "key28": "3J3Mak6WVoZV9hguRgRSgGqVwwwQ5aiLR21PbkeQDFec2DEMrFegdjyENMCf1KWYHS1M8WADhtjbAiSCdZSNPk17",
  "key29": "eZ2ZafvURGLGkRMaV9oYy9EyUzMABoDJWYveE5U4XJzVc1eyXoT98v2LLj9vLDLmXGQdBqSqZBzzhqZe6mw1Dta",
  "key30": "3UvJBqBXx5BbdGoMNV5vnEv111Ryaq6tBseJTtbxR2TvA8x6Z8D72JfDxYJjwYyDWqZzmYsefABJYsKozvKmKfGi",
  "key31": "2r1BX5we4JbgAHZ8eyLSnq8ZTrWrziFG5TwbNFaikBpDN2oGQ3oaKhKsVXx98jFWf9CPYYd6oLWz42xVBEVksnsb",
  "key32": "jJMeeQmV9MFbB3hxW27gftqUY2wX47JzyW1fTKXGHkNisKBXs3Cz8hEhR383aActg9e9KY1L8bh2tUyc3FmQoaP",
  "key33": "4Xf1hAbdizho9wTCpAj3AkEU6GQXfRJVPZLiL1KCv61wApugDGzhp36hX9r3GjyXZwXx5k7x2QN8UUq26oviy44c",
  "key34": "s2dgjdqbDnHtFMrXAdRXKPiSTiWH48AgPVuD7bMmrCHRMR7A8hWyAvQLfKZfQmqiiZywhbygVC28z6dZtvEQPzT",
  "key35": "TFzH2hKaYEPr8pTpr1aNFHn2TEDk1chF2KRPVxbkJoEARc7Mu8pm9nWAZUmsma5m9tn5KeD2CaPfchXQKaGVMFG",
  "key36": "yXghAmTXWcsAtCnCbHk86cShuSvGoPzGSpHUu3qtCdPthtdpQnSNCqMxGftYUCvbRATV8yBpZ2kbbYCoFyqR7sM",
  "key37": "3PC8cL8Ex9y3SyHCRb2aBQqZyvstekhANJq8qzhepWSJqjztz8xcpfU9wsBbBBCUeecDUfW3iEX2XxUs1pv3iU9P",
  "key38": "2mmU58HYkiWeUcaVzfDg9n3Ls9SEpewMPxYUsBhvELs78obX5g26q1C4kbUnWoWm38AK2ERzJbJwQjx1Pqp6Nj1s"
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
