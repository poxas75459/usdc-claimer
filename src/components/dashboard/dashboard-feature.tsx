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
    "3Ams1HvawJjwCQCZCxWfNJinWD4LaLcJkV2Zdh8s2amqrqgozEDqBtjXTi1rWuqy3k7N5AELJPGBxpbCeVSCuv4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dHkZUXqYMPxWjzxXpxYyMBqf5QRLMcbc9861SqXz7EpKfgeESBLQnZDX8SLuPVyiMZdqhU8uycEWtHHCsqKhL2x",
  "key1": "4cdvLjysn1XFXHCkrmAzxfz5V2T8im7TxSbmEg6LLfGPXKZv9AnXHqS41qFwVU5UD1WZdntNZSY693wAVdNM24hf",
  "key2": "3Nqua2GjGSCMFfUMRH1N8MMk7YZdBUcYBYN3ozANmnVt5fpSyazh9odPyz1Pee6Rcbg8KaExQGwpU3Aj1vA2nx8i",
  "key3": "4kPHHLkN48LeTc2pdQcp43AXqZiPFSNRyM5wUJRiLnUhNxYJ2P4n3TrUDMdBg85nWTHbbNubT8fTBoHnm1wKvh25",
  "key4": "5phU6a6iLbUFwp4jQ4guwv3FzVFhwAinkgebzsKDTmrYBUCBLNGjiRqu4Q5FhANS26kCg6sD33n3LCMd3b9bEwfq",
  "key5": "2sxGedZd8FASwxj736HburjqwpZfR3r5e4cJfWNs4ywqZYTJAqJRWxDJy78N8cmBPYgZzNrPStVbGZa8PbvjTE3c",
  "key6": "5eoqfaLsMkDrK3nTYoQg3852rWt6sJcshaN7sFY6tGCypzJRF1s8FUAARmQXGCQKH1KSqh6NW8H1Mm34Th66GCRZ",
  "key7": "2kbqVXeD1njwFYQsg38QSfTjP5zvM7Jm6ACWWjdJ6ipPWrzCJ7TvRr8zj3UWVdMGuMMtsR4J6sPBjhqQ6FR98VW2",
  "key8": "475UTEt71H6GkbMkiQREQ51qTbXeavqb4p7GXraSshFNrzmczPRkytyoVMqi7r55WyHJ4dm7LVuCocw5tgsx7urG",
  "key9": "67WiLQAgfJ3dEF8hNmso3g4EgiNHCZ1qViNhjDjsLmaycCQVq1Cwunyt67NsF9PxeAX78Dmd3VyL7mQ89ED1YeZK",
  "key10": "4b7rGJcxKgKWjXLm31x7R8G2rkJvuSRFgSbM1Y7Jkh3PwDm2Zxd4RePaKR3HyuBpyk4Wv2vZJWyExGs4weU8zFjB",
  "key11": "AVKzvpyA9ffsUNbrAPp9hsfs5U93QCL6pRV214ce1Jv8veQ8xrS4sihjNrbyMMnrsNkdVnChyPMveyJS9hxBuxq",
  "key12": "P55GNAEnMrEHjwEW7LLoQYFfDhpiAufjvxQ7LGewHPeVdqNR2fvNe3Z3shB4LqdqEf2eLd8o69L6QJrk6Mc8Eqc",
  "key13": "3tZvkWFeG8dH4JLSnrsuSDvoTThqHcbPsY21SVHg5JkmeMkvpuxBMNUjhYwdjVEnqiwNm4jBtcTsuhjDAugYfjQQ",
  "key14": "2VjRWmDTpCxmcup4pVoFsLQuiuoc456HGUVjDNEraq85ucHNRGcmropWmuxvgGJnCnkTe5UN6ubzc2zCfKaePawS",
  "key15": "2vNBgSrJDbK3bekebn3yCcEF5CLzRrZHmfuYzbmZ5WqvTuiCnupBJ6utYD6fty13cd8UQFSsKEdG38rbqhPf9qVr",
  "key16": "3Sxn6rkiG68NEhZRb5wA61xvLWC46JYSqB9nXAVfU5GnbPRYTSwpRhTwfTMqUxbL2cWfYxAvg4tyN1NBbC5fRSTH",
  "key17": "5BXB2x6fbN1SFZ9sXsvpoH9wDpCkmu1wKcdCBX6qnkPEGP9r38JGSe5zvckkSrrUnXKzwaqEQz6m95FceBBK2Ro2",
  "key18": "5g3YdDqVxY3AvrACbkZDzHPpe4KSyHEUa121XbhtQTqjJGxtWh5nUpQpEuLQbT7Bhoag3Q3XuZAShJ8uBC3X9cnf",
  "key19": "2ETAr4ko4b1nBAsbmDFC6Qmw2AQAxHA9AH1vNRcKwkz3YvG1EPBJp3nd71RzJaymqh86Mf8QoBsguRZ5DAnHXkZB",
  "key20": "65hJ5P3qkCUy1V4WqdYwsm1dtMUjBTtLQWpaATXkGWHTCq8GdTD9uSai4puB4VcssTSwKwN9ra5p15A6pHMMjdAm",
  "key21": "3yorssCrFJPp78qSFJgLDvMBwkzKmDVHxkXTCpGjuKMvM3nMhFSjZqwjbdZsJaz57iuxvJfpYwWeNYvaepNRusXi",
  "key22": "A9tWtWt1eisk7kh6cYYbZpKZyVoAgugz9wQCDMy1of3oXWPVHdemADFDYyUV3oiKZupqX4FdekjyyASYUw9jWiU",
  "key23": "oHSzfaphC2gTUtYSbrFfxnc6K1YfhLNXP27w1XnqzcBeLk8DtmTfwDXrKaK2jpaxnaawjotay73KHu4FgmXB8Bp",
  "key24": "4i8Nt18xQrbs5vc54dH8SYHebtgr4AWiLuyuTwACkbVYZZzh1t7SrfLjyMu8f76Z8f3MAXDib22HTWPb8Bku9xeM",
  "key25": "2dUpd8aucYWguC4WVZGa29yeQgr7kM5DGhXyEVm2DWDs9jnUgnyJh5kFXEPrUpNEF2ACwfjM5RMZm5T4mwTn5Tef",
  "key26": "2dW462UTpL3mXsiSPQvzCBhoxRjncHgUZDeJ3G3rk8mULMRvy8XjApHFiZf7aBKoEptu5ZUhREChqeTzJM8YPBq6"
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
