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
    "p3f94GE8TyVFfcFwghk9eUGgSvmCZBhg3UjBWkiqeYMJMjbVJS99z3r71hPFXgBQGNEhFJr9cCW8W7PiEVgkzjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L5DhAYWGKNeHjovT8D7eEsvWipYTxvcd8jVXBgA26HSQpQbJEbUx2JmoYcF7vfQG7XpDjQscpCNEscvGAtCFqcU",
  "key1": "3Y69W1EAwkpXP2pFBJELqJb48MfCmiEiYQLnUxHVEE4wufwX9fD5nSpcET2azNsqBtCuW7dYYmR2uuQmmv7va28k",
  "key2": "rqdFAFTJhkyXxnHdvTFFRLcHALQGyFxkAzPXf87wMMcTLRcTL1hMLUWTkW9UCTxN5igRQrznuVcUwZHZhNiwD7a",
  "key3": "59HCxkHPfxLx9r8GJXSu3RehuGm6GV81o3DNWfoDGhqphbgpP4zW2rjL71fAjMeP8axxjJxwXvtNJnKGGnF2jYoS",
  "key4": "48UCAbJFBHhi8TN2AhWczU3571esQNrmzG8nWmVxeaaqAwW9UwqpNYpYUbn923qCL58P2beYCG5dKqrZ1mLTxGaV",
  "key5": "3PAHDBRZYG7twnobnox43TGUJT6tx9tEfyekNk2fiY49sDxoP2wJKeC8qQmy3pn8dRMaWNut9ofLiK7eFp2YEDoA",
  "key6": "5PZDLGdVLEtxSKqqtZSXvcMsZv8tJFK552mwXxU18EoNWBNbxRshqfooBULQy997v44uPopXVjLv5Emkdfq5v9pS",
  "key7": "3DHtz3aRHq9faSMP8bWV1RdY6urXxpTgbPGenrHYuFX6Ewe54xejiapFuCtFNmXAAwWkb3XkXKqnuSZCe6NzXLQt",
  "key8": "2UqBgdYxEHj87NRwoi6uF3fRiCBVAnrJH9HQYzg2uFYrsgnaVUDHonzxpwJWjsN4rNUUNjGDu4fcRuRC4KwnUiEV",
  "key9": "3Ra1AkcoVWL9M4HEJBesWEai9miZGF7XEbbDxZUeyJyGHe3JvgECAPBH1GmYdv7ygGw2U6eQkpCFYGnm9J2wnSKk",
  "key10": "5ue79gjeBeNB8RpBFzpXrdjXmEbopuahRRUtBjCAdyfduYoFE29gNtMqPrnmkuUJvdajFuYd6HzzXMmbjMGvgF6y",
  "key11": "5yQMiyQPMjcNpRJSMdwj3mjj1W99WAHzSAUuNyryXeDN2swLdfFT8jYWs18uNfbLsX2PnMAnrJ6MusQGddsjiARU",
  "key12": "3cvVSYe4e4D36nnoBvwgVuNAtN9EjX3kS9Aat9qbTiPyFPTXnS517NcusuGvAGnhuXQvHHYhndfssUYtb82bwRGS",
  "key13": "3nXkPuZhSrjj4bpqUw23gruVAvMmUdXTnMZnF5eN2Atinrwb2SF9vd72rKjKbUdUE2dhNc2Aywb1pnQNtiTo2XH3",
  "key14": "4sYo9YQyLDkQP78iNQQH4zRmYJwcECRCu5REoTDqr2tZYNVbVHRHch3YZa1U1QzgNxHkwJs4ZHoaaxgveKmTSXdv",
  "key15": "kk6JzWQzHkcUFNNbGP2xXi6GpWRssNqKzHHTioQSmqVcg7JomuoEXJf7Lj8aEY25eENmjyadErxqdXn1bN4fi6x",
  "key16": "yexgEFbwuGUJ4qiTjA1qGJZmrPwTX1hQc717hWoynKhDKjpy2nsu29RFoj9pL8FA7JafXqYEum1925FKfd8AUnc",
  "key17": "2Gsq29wg9RugFPdKLZaRu4FWDu6FzqKvFQnfjwMWSLSckjWVwYgQPm1FWwHeh4MwiRQYEFQFreXGhANfTDfLrFmd",
  "key18": "4AuS2Va2sRHfmkNjNDVAuzjyHWAqKdd4kYMpwNgiuFT4tY8ZBqN6peN6sgs1tJATQ1N8Frm1ji76UPbRTAvM72nh",
  "key19": "UhSe9htCx6TCRyDP6GCNrRbyuJe3C4iFpLydG97FXM64YVygf4aoXC7dhV2onGqjrJaMiDviPsUXwbjoyKRT3SN",
  "key20": "4qF4T93t5B4eZxaiLSQRqnEqiKfjw7qAxc1z9MixwcychhhY3pL5KAquYEs1yZ8vYx3wgqQkpKUUiFPPHuxn2bf6",
  "key21": "5ZiHA88YjB6mwwKRfBoXczJdse4qK1U6jispsJo7y9c25u2rDqEXAQpcsJQaVx5rRAm8fJidwJZT3mqc89WL7Xjk",
  "key22": "2tpmTidduNfLeiRXGEgYXZUgV4KcZNfJ3y5CWthooimctjucs7CeiFybzMnUK5nDyXXujyfbjArAyXRs4yF7jZ9X",
  "key23": "54dk4XBt2KGtnoAp1JJ4xQd1u3AQSWMr2A3t3ZvduivoNaPxmZdRKHtDsfk5sygqZ1rvUn9i2nT7skn5g57uxN4B",
  "key24": "2PyFUaYEusNuGxNcxDXxTJo1KXVX5jjXBGZJMJFUjGtyG7kzmT28CD48eAb4PHziaJ3tgZyoXpaxgdLJ63nC12q7",
  "key25": "666haWFcjS9v8XaFpSJnWvsXGJmkbwRQkjCo7DceCLnbjSM2JPuhzkx8H8Cnbt3psB1YHoYXjfHMZafFCvsTNHeu",
  "key26": "2LDZ1Tuawc5QGHN8hN191v1VfuWssgke8mj7H4fWnVHRUyq6WvJHqK1eM9GFouKQn95WRMFSvP1e6x8T6gL8mymi",
  "key27": "2iPDdvAyxk1qUomWhfdQz7GEEMUY6VZNPSPsGmyExbRpFqFDs2YcsqKu2AsDuGPmBptPSPPeTSEFw75mCEMKiFQ5",
  "key28": "4vvNjWgzeRP5MB3rtQw3RQFqsFYNdVYteH4BEr1VoLTtxtD3myqkKQ3xQ3QSQoDk6VWUMJRCrBxGTSCnz2RQedeQ",
  "key29": "2UgxgPHBVd8wCLHPwNJF8htrEVKWUM4aojvsrTxEL9TueNixPkwq8WiBBTqTu12FrJP7crShPEPS6acoJbvvDZd1",
  "key30": "66KnaHgf28q4YZ3XfAuyCjc9qbFFnsJozrYGxf2WTaBLdbX6Lk1iTU9R41DFDGqdM7Jgndhaequ5BzuHKeK32enC",
  "key31": "5FeoowozwvtPARYwwdViNxtw6pVBUhJS2wUcYUv3poEkAU49SjxJKT8vuMAw3x4w3BGMzqwXxPm2kNzKf9Nrkwm8"
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
