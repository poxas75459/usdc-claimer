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
    "4kgrfJqLhzXiBPtAZEPassWV4J4KyspJc9JSgsS7VPQuvW8NopwdK7MLwakXouDq1B5oB2hg5e4rbUNGv1GxiX3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZJGfEm6g3uT2gM6LhJMfpFUDvH8Ew2iqQ8Q8X9hBkaTEQhSsw5NY4yJnx2BXPoHs6oj8V8B1sMBdhqRVoDshkFy",
  "key1": "2dUY7sWGvU7WzEiWEzJdyvTBav7aurufwxasSTH3AcgL9GC1EgbRJB8h15ukLH3JMzWU71DDdd5kVmiAWLMkXUeB",
  "key2": "3uBmFHtNcVWsUCQhNAqJuscLNrw4H77jPxeXzbTpfp5CCgMhKhU1oKDr3pKKMiL5N19r6FGzqbuQEfW2Yv5MESXj",
  "key3": "g11Qqc63M2f3oTnv9T9DbFhoxuxnPk4f8sGpeeNozatFgyMf4dNsXWXjLfDDQePxebzVRABHxM21t1kAQt9fENa",
  "key4": "5GZisMkSu4JPj6UYfWjc7681EpwCQ4k4QDJ32DWraD2eYfcbWHbzdQwGqccW63ZKenKtwvEvWnEwsC4cMHXutWBm",
  "key5": "2uQFz5Kk7y8YWbg29KPDdAjNx1rLYvX9mHq7BMtSpq48kXYr1xc9yuHeip8JSE6akekR8myUCkXsGbYzqAC87ETx",
  "key6": "36N3FwexMVxe9CLBKtbBvVLKsaarLWEZEApntkjAJirUkzkyb2xL7vq8mF1nuRutGWJQpvbBCfCnj2bbyifSRYgd",
  "key7": "3tdzvAcZ2hDsyED38aqPaWgWmJwL9ZYERZDQL5zMnKHuhG9EXFe6vduTWK4qcNfyNGj147vkvZKs6smHwug9uN49",
  "key8": "4Wjd9QZFRRBTL1zEdRZAQyvP4rfesvNA5w4ckyJzXerXXKpJqcsrkCnFwHK6PQxxLz76YGQAW6YbhMQKjkPS2mBP",
  "key9": "3DaUwub9cboyTyDiQTZGC3LBdgU8c4VkPsxUKPrmi5WQAxMn3jCiDb6MKdK9YRgq1bbbaaZM7GCRMB66G5XmP4FH",
  "key10": "KtVq2wYrXyGHJahmVrM6QT1jSiPEWMNUj94eCaN8dyfXcUjZ6wvin17zt1a22vKoKHCDRTtRJTZWpR1YnDwVU8o",
  "key11": "k3jUt777zKmci7Z8SkjPZsdz378GaKaLetM5RkUWrjFLUD99pfLdo61Z5LUcsdmnk5nBcqxXbjg4SPy6j4KoAVg",
  "key12": "5DVdTC3vGumxdfmhVXuPLZDPwWuGoCapsmDk7PMgHZScT5EptxaYsKBun54NvWUXGATR4YAqGKMn8syze8EiZLhd",
  "key13": "3VKoKH9uyqJQKrSMedCfVWuNLjmoXZGPTBue5y9i5sygNXn1XBoWkwKPiRH8EqysgpmzTTWoV48kTr3mtQcDVMv9",
  "key14": "4xkUCdUsXKhoZoUQnfVHk3saheZ2gduuxP7BbzoDJjnuummx4YVpGN5Qc7pa1jiXceKWjoeiBPfEr1nMjbFeQAh1",
  "key15": "3tKfTBwe7p9tZEXPSfie8VbJDf9qVBo8gyibnR15fABfwLCdEWNWUovjMhCoJ71M2F8ji2aTA6T27TXZFsxBMwcL",
  "key16": "2cQLLKRsjEjhJNF8tjMpXD3QRdNcyAJUUvrGwJnJqBjfn3w5kvHsWJfMQur5vNDJceKyoRUJJWTSLeotGW3yD6xg",
  "key17": "5MHBJFodWYuKmvH6ads2xkZWnweET7M1HZe4i9obtCAuXDUS3iiEmnPcriwWRpqBWVmpWZJ5hmVaKNxdJBeCiict",
  "key18": "4zP9bBZA8NYV414YFb1FsZUKhQq1gtSyFra8CZCwLVEi1TKJv2ztbLPxHeKeMBDvD2xGDZhqYyUyixVy1tZYnNBw",
  "key19": "Hi4dhT3Dowfgi22VS56j3WHnke97LRvsHRewMjhG889wR2be91nhCYKsn7mpVuFeK8CvZ4HQMMGFMipJybPgwX1",
  "key20": "64354huySCbNCeH1j4SgSwZCGfs9E29usnho613PfGNNhL3gCgQZYwtwQfRhvosz7keX3Kvyh5bt8hjPiXwznzxk",
  "key21": "4xtFoYjy23iha9s6ZhcDcoDu7FAKPw7CTnWpD5NQwkUDv1yYQKLGNXu7jJXmQ4wTYAMPS5bXG1uM3XYy7SaPGc6s",
  "key22": "4eFJNP3aYhQoQ4oGoKU6UzgvzU26VdRkdTWxaUenWEF82L4HDXh4jnkLdrjk33FSQxUPBxCLXsKpFXFjuNwPdi1Y",
  "key23": "5xPEphGJdWNTGj6UaCdbTPTFN36h3y6kuahx3BgJY4F5wvcxrzBEyHye5ZBDrt8mVwSDZaDdxnTBVNpghP8jp8dg",
  "key24": "22KHy8HeDuURw5ffBKHjvYy5BVuPeUaTa5Lgg8gZgF6UkiJkKgWathj2BQfNQUoy9tsJjuZZG1pfMKmAT5goPKoM",
  "key25": "3L4DxEToj8JFKeW6f8vpsGirsvF2JmxCJz2VMZcwZoNNfmxbumj7PB7JrfLpszKQKBGP8EhtEte5zD7ocazXwCd",
  "key26": "575G1Xtm2HHEwjW6i8Pbmj9EgFoZWjybG9d6AFto6Cbtcju7ASn3tGvaXFgnstg3yKyweBWV7jqJibwCgtCRcpq8",
  "key27": "5at5itYmt9WCnKLjvbyA7Er54N5CjH3fCmYQ5ENN2BcefiejdMBkRqgmFjCwCPxBSpHi7GdbMPd2wU7GGT1W3dwi",
  "key28": "4A3Yfp7qjErXqcatpnKSBSjR18vd8gwkRDo2tGiARTuJZPiCRTHr9AyEqYCZ2vrvWWW6KLSdPbVZKAZoxyW8cc7B"
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
