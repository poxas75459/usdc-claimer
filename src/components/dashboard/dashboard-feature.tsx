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
    "2dRQRWC9ofcM4U9ML6J2Mt8peQ7ipLnw1x58zdTXFT8TqZadz3xptmmdAW2B9BHeCApu2q5tMdo8NTSpn5jFCZg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZFGyrzsDhbNdXAHGFxsokvCqpaeVe1NuZPE3RV9LCCq96qyj6ciMsLz8rKGxMAmUv2RuyHCcAtVjzmPT3Erfw",
  "key1": "cDPv7LNpC7DhguH3fj1BBDdMGit5sbq4G8fNu8sJp9aaqGhQBUoUJSD645mqfKLWZRXzDvydp4DWhKsoR64L2vp",
  "key2": "2E7dH2Ut34jbjuUSg1sAYgN2xhaVdv5Tvzcc16Bszg2mzQXGQYQcuAmsD3w53CFBVvWJ4ReZvkCrNHWEHutAaLKC",
  "key3": "5sMy6Y5eSP8yQL4nT82BmV2EmZj2m8cJ64FMWHMY5mQvQUnge2EBWE5AKp3Uv5h55WbmzBoavRnBnd64eGQRxjUr",
  "key4": "2zbEGzVZiCBuEkZfUGsogtuEL1VS9zQAaw1WunkeQCj4bSGfoWnbUXyQnKfCc4dKEV5mGrQCueLi2h5Xxe8HHh45",
  "key5": "obKHjcC1jGbKtYu8A3spsrcWdksHxbBQDzHUEzNAV4J3k4uMCQENVFbpMDeggpUiFkhFKQkrFkuUPYAy31wTpCf",
  "key6": "4upAriKWsL93CEr2Ey6VsfJucLv4kX1sswEUpzE6G6rrYsDoyVezRqvEYbeVnJ2aD6AqR2AmRFFNw8wbqnxgc3Mj",
  "key7": "5KXLJuqdxvA2bM2LsFEvtz34w4cTNMKyvndNaQqigN634qfFWiDwhEmu251sq576fJBRqGFHupQ7Jbvj4aYkcNLG",
  "key8": "3N3t82gih5qhhDCv2S9hSnCuYccu2ibugYj94PPmvSYi6NJnBj6NpKAHRfyYjMDaSKQe7AfMg8zuDbc6wSFZwSXV",
  "key9": "3RhPWdFzZ9qPiqzeNNFuaHRgL342Udc93sq5BFwNgkM8uSgQNVjzVpwNptMTggrmNoCBNcs9X3pyrvSr6tRAkXjY",
  "key10": "4ZSGjqgH9DmGGNJN8BJk57tAv4HWxR7uwg8y7GLatqSe6UkTF55akDHjfH5jY8quSZZTXHnpdydUaGtVh8SyWjRE",
  "key11": "3YjemQHsxnQZNohibdCmojsZ71tppx3birpYH1Cfei4As9iv2VHb9SwJQde8ZEnii2rYmMtjmLXPnMszUdKDhiJd",
  "key12": "5ErsRFEiDQun8qFV1hV8hfLTkSEyNRdDVtvoRyA34yXZWYB8piQdq2WquFuGfk3qitSBtEbFgZiCmkoBfTBFSGRw",
  "key13": "3F8au2AEmMzqzMfpTivSJc8yqVq6F8qj2mD4vMTDHN5Le8cw7ap58STZV8cA2AqtDdaLscH8fV1rHmnm41qYg7Cz",
  "key14": "4RBxNQL5mohZnTQmTADt5Wr6a8Ve2xZ8ffdXPW3Xhd1KNVujVjZ7og4XdJfMwiyxtowUjAS6pi57tKVFyNSrt33D",
  "key15": "4mydWh8BDm59HkRQrqnqcPbbT6Wzf4EwHtMvTCYkqDuof5ExUs8BztFGXagCraqAzQpmEQ9qL2kzYQ7KD67fKK4S",
  "key16": "5c6KsQG2tY6LE28TpSaceivYNPL4iDQiUhXt4RFJSLpMAu6ZpE7G6MwFTEsKVa5NpqR3qS1Ry2huDGjUfmqUVAhP",
  "key17": "37tX24QHZx5VW6cYJsAkXK4shxXN36n4tjnFHcS5yn6bA4uoGZymQGtzSDfRmCDFWmifdb6R8fAWuQxVLn4h2erv",
  "key18": "bbKbceMP1Y7Wg6Nnre3vLgUdMKV844e5Sjs8cXgHUVw5VTgysTM1XdmKeEpZp2itU8b4kwsruztgBWctSAGfEXu",
  "key19": "CMMgovmUU1a29rXQfeCCmoCRFEPMWencBDktCctRNekFL96fhtgHzCbXYxKtFLNNrb8e1fgvfqAjJiUKkeWbkGP",
  "key20": "2Sr4gCMfMqaxabG6YromatndbqzHpyungEEcX9p1ShdfdpEesN9dNfUGAX3nwkbVbnCnSmA6ScG9ombSPVbyTHNY",
  "key21": "3FQWRNRdZbFLbFySXnHAE1S5U7t8q4K1qfWMeCkp2gJPvUb1pzJYQqAv4YVzQeJuFBJ8KfFTdKypaAuvtW4N3rqF",
  "key22": "4u4RHgY6gjvTbyL8ih3sGXWZc9LE65tMp7JRvoqEtdUeVBoxCFBFTpuiVdW9jT9xvXafUw1hhKSzPZxLJ9qwM5aU",
  "key23": "3LX5v6rvqE3QxfxsFThq4msogwPEkKJzKpVUSES3ggZuis7xtdhjTVV5nuDhYYaevRviY9jJru1FAMV6SxmY9gXn",
  "key24": "2nP9yrMA4JoAVS5r1Giy4d9we32HaSXieSA8BRaRFK4eAFLyN6pzutAMtrz2DtYzayoJ9jRhWggcUsdF2fqVQMvd",
  "key25": "3yJDne6RuTkiNDFWyqfeD2s9ndK2rdfzKBmAsQaSuMCuaNfft6Nr2qDYYuUCcHitM6PnbGigBizE7N9R8TbSbaKH",
  "key26": "566bBcpLPE4hEUfANzT9mmMZHGDMDUaNX4PzTRC67BXkd5x7Zc7Wvrcv9KRjv4vgigfHnmS8w8BWSTWkX5N4SXwx",
  "key27": "3pNUVg4gwqhsLfNRD5H7nidgnC5ozKzs6x64DfxmJuGy9PFoCp6FCtG7dUgYtnYq44gRxiBEoVuh44Stm6QjR572",
  "key28": "679ASeYPnZFNXxrDTVgjT5P767ncYGycYwD1SbiX4kVBerATDfFU7LYbAQWS9f21e3eUDpYEEgBZ9yKGfTPt2Uy3",
  "key29": "2CeX14QcJSuGeNa2nFJ4fwtoDPeR5TBpcsjdUybQ4rRQEGdsHUusFKq8GMVHTBuvN2TMUn9njnaa3s1fY8x8BXp1",
  "key30": "8wxwKYukWjuVH8aAfeaDRjFtn4863pfNS3vuhhRvx8mZLpekByNDqNZuHSd9HLZU4iFqxXVdmrzMa7pqaWTGf9x",
  "key31": "5wck7R1Fpu47ggaKKxdcMicuH3GkxYUySsaWfK6K7xEhpwAWC62MZrKUQuQMStQUWiLFicKqjFoArUP6CcaTgFBn"
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
