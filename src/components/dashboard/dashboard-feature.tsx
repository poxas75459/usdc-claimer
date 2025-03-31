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
    "2JbZ1U5f2m7WyGiy5NjG9FWiUf6NJ1yYNg3a3bNxeMFJRxPaJ1DZcTkC3VZTZxcf5cpZ3RixFXwLyq3brWgE5PZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wWKVjbV5fs8S67sHRvuTdz2pomzv3UvJfmJdG7fCxQ4oiSR6uhdS2ZMz5j83zepoDV2ZH1zztdP1faF9BRDuH2p",
  "key1": "2WW8g6QVExHDSAWmV54D63p6UB4SZtcoq5ay9tLJDFit7P9KPCpQR4mCwRpdWs23NB94Em8SRMzSw1KyCkKh5NUN",
  "key2": "5vYAq5gZadr5p9yKf4dmmHWr6DLXEyrCpgSfaTXkuRPQWsLGd1f4WsZ17tvqgLGBQU3hhQwPDkUqLDKV6TicyTE2",
  "key3": "3kanWLDKXSJrbHbxTAQ6UWNifW4jCgvbk5AyaWDgLZ5v27N9gorp5nrsaCqZFoHjMQf3yJWHpmxKJhTBu6JBhZYX",
  "key4": "3eUDnGvfNjZ7rcKEPw3D79MrRZASoft7hJBwpz38b5s222PEbBkMKrZKtEoC5wiEArq9SCet7wpUCBWaRrtfKVJw",
  "key5": "4ZXcdFUuVPq8DmqoDeXywYeSkPqqmY7mub1cUz7q9QRTh32tnRabpFL9A3CX7tJUD4beW1PsQ1o8crU7iB9qnhP4",
  "key6": "3CVNtiXHVrVQaoTqd5NCj9D1Xh594aHXWZRe96s9VgMckMa2vLh9ycWwpu6rENRkRp1aMqPaqzHrfHX5mngUp9kU",
  "key7": "2SvRdqveA5djz9bkapUri1XrpNA56PweRN5sz6rknJTnoqhfEfTsKscG1uFYEiUcNjZtEmiHX2yLCc5ZfVuMTPvH",
  "key8": "4rrT4kZ9PzD6Z2pfe7mZvXVeLkc6tAywMA1Z5hADTFjrAzhLWiqARH496BYvEGWRWriHVG61kvN34GpjtHp9R5gu",
  "key9": "5rcLJsgjV7B4tXDjeX2Phum2icx5UErWC6miZgi9wKbByUwkSLfammTqznetiMg1aWzLm7xRYC83cwrF33CX3c6R",
  "key10": "4bvdWGbign42LbF3eHnrtFHxmAJ29SJs2CYEWbRQaLrgV5Wv7Z8WAJ1XJBEfQQACcn1hgjiDcTH2JvoC9bynCN8V",
  "key11": "91siTMuqgyBMVW7bKvhhCcK4heoEMCUUAMTCZwHz4QmbMbHhZR479bd4zTfUB7WzJ9tM1vzRukACA4RjHRVxnQ2",
  "key12": "2qQUWbHpQjPS4R2ttohNg4p6JJ6dtsQUfEYvqkyAAdgW76KyB3LBvbDizH9VXZKhUQRE1QJXAiv4nmKp4Z2NBNcs",
  "key13": "51HeXgx6HB51tS2UNEMv3CffizamuPNR195imTGEsU35ozW2NPF1qYVDDWNcgXUHULZw4naQyKiMwc1xytfzo4nh",
  "key14": "2zhEVm2ae7atv1NtGtn7c7A18iQMdXG4gUWqKmp8Nuy5GW4vuwRfx82pPKZMyf7kKPJc2funxt5xP45c78zXZQYQ",
  "key15": "3VS9rV8yhu9R4uLsRCqFKvjRpiUwA42MQVXBZMABhzVikWzcJeRFB5WeNH7ZEQoyo7iiWAmC4YFb4V2b5ef26gne",
  "key16": "3bxif3w5vbWHvDYP989A4wyncY1nwYo79CydyMxChj2PzqboehMDMSHba1RSkj1MGP159P9QWxbzVw2MYxofJJ42",
  "key17": "2pMpGuDocWaQ2v9uHJiWRe5dneSRFDsaKbwprhXWw8Ar1MpVTsnmDu5LwSYLEtVA5J1j2Hj1uMVV4j8GvoZMhytC",
  "key18": "31JGeiujsshuToW9ewR68UzfehM84crhCdymCwRWWZmCAY3c3fEsBwGum2JAHpzjFjYPe4cieFVFupxgEkYnR6W5",
  "key19": "3VQEA9B986jqWirgTM9NbWZqiHvqvgv8uvxHsN5saBtukG9oidMJV1XuAb2GDqPXKrCX81dGSAtbhF635i2AmMqK",
  "key20": "5Gi6oW9ytbPJAWeyudrWjVJMJn112y6vvYkN1WtudyovoJhMB9eyoBYMix7WNsKvd7f4GZV51v8V1Yy2yEC7zm3E",
  "key21": "373WsUQx1TQGc5ohWq6YmbMJrbv6hgbGaFL5VjkNiGJ9f9idKBzAPp7sfnLSns5fpGAf84zTE9Gxw9axzxFu8pTd",
  "key22": "4sFEozeJBReJiy4PeFfz7adGmXqfy1GEqoA9NwVWUiUL5iXjyyCbv6PzpjCkY8BKkyhk5hRB5REHoad3ZKxdMana",
  "key23": "4zLnPfHERgDmQnBVk6r7kLwyitq6QPR2hvVF3zr3AuqYt6qZNBXrL6FprC1SNrLMhczgpuuvKgAXkHDCpbNjrt5A",
  "key24": "2rgxjzTmZFYpLwxCiRT7gTURUkJAMcmxRcoPaCgwzmjbJGunLiFNz9y8Vjh13hfHXf5aVAa9Z98yRr757wr21CAw",
  "key25": "2GXirXLtZpRqsWhHBZqayVR3ugGUpZ4ktDJuneDu9xL3cQz6VbZJnSSWPgA7cDiAtb8BnoeP4YwRqKWMda4q4qJt",
  "key26": "2GeZG1cHvGTHWPFdGgzsVyy9hnP1aqhRtWvSfACfQW5JmJv4F5EwxjGnbcJRWLQjL7NvbnQSRhLa5m939bKX9mJa",
  "key27": "g5uRBNhsQVdLRKGuodahBZPffeZsp1ZF2xCKMiQ6StTV95A9myuGKKan5Co8fbUdSXeNkKuQ8UMWEPQHmJ9WaMK",
  "key28": "Cpxoq8AJZqriE1p5ibWK347oegsw8jWUcjLyu4Y3aEfhYkMzpQRg9FgcExVA4AodWnkPSKp1gHRjAKpaBTJF8hw",
  "key29": "RFuso8wrbPR6mabBkm2mHEx724mds3uqhFGZegPiZkUALRBRSLDosEWSVoqwAwAQv6v8DqhnhM8U1B6eZz3xMnp",
  "key30": "DQkCTVwZRBo4aTQFyeANcDFUdxzewgaWzDD3JBPqay8Stobm8RwULSoFseQ6242Ymqkhn6prAb1RmcchUBAMSrx"
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
