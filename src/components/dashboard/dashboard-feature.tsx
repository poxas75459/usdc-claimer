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
    "2BqXJntFP7hf9JRzoLe3swumzAYuuVhcXKPVZEWmEzpKY8zVw1N7k9PwJZhCc9p2RytWWZifJJsNGuYsevK9SzAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4joGqjydBy36P3zaJMXRwFTCQnNWULmfXEa2YMPWdhDwY8k5dduats5VYfKx17fPtJZYWaFK18NDDMaG9qWCphhB",
  "key1": "3awUXqA392LQVeEfiJBoaVimVGeHzf1Lk9j6KxJq8UGALsx7MtGgh56JKVBohqXkXScPcwJGynvNY7B1kgaoukyT",
  "key2": "cpRiahc3xJsYX6m7PdX6QD6T85zgVyAQPLvSzzpQzGFuwtqNKwccDRbAY7vTzb3t7jQHXRLsKUBDV9mNivTYUHx",
  "key3": "5uCmLmZeagc8PTKggn6BTCv2A9yjccdxKgvG6nhZDmHtoa8kw3zvDgiJ9KrpA1ddNV9EACEiXEoBCrKgJNySMLCm",
  "key4": "5MFJvvVWXfBC5qqqJczBS6CswNo1gGZziykupX55F1HF3k3Cw1Djpf9T9opEBqoLUad1uqmW1ok5pPyC7w5osit9",
  "key5": "224oAM7o7Tp2rtRCh54wYLE4mZDmfMFZ4VMgSUDZT6TCaSfDAQGEMN9pFzdpiJRYyZdQ1tzXhczTwu2SA5SU7WtV",
  "key6": "45BvXv4XeBFEoWAqX3pyqqLeX6krGfEZ4G8qEAq8AXRgBkEfhAbrGJYvgUSGUR49qrPmaonXLEyUdQvQ6VRxhGb7",
  "key7": "4Epb2CJHHkBFaRWqjVocbmbhe1rr566MHhQxbqWVnokoXT479oRUcgjZjpvo1QZXhqgRy8XSAcSDpa4KjggM3hhE",
  "key8": "4vCKmeXWNxe5ex1kEWT5YRAx9VEesRu6PwDJi6yLm7qurCEfAu7nFtRc4EtcojzGKHtxqYXDjZu8PERfKPzuFrt4",
  "key9": "4cvw8MiazU4G3mUQsLV6S8Rb4ZwarCCP1HJSkEz8vYiKyyRkMFjBGhU8m1NNbiQNUtZrXWLi4hWmpNxroDMXBcVw",
  "key10": "5fqDrmKgBU735N4bEtF7PnsuzgicZvHfCyxZ3je4VLcJ7gRHSkvWkeBiACKH89CcjAxkbG7q512YAMHJjmdWfeLe",
  "key11": "5y6btp91vB4hjXSgrA6aipgNHLBRyEbQQ5QTU9hmcVxTZsAMwngyubsZt1Bt3aTyRQYCaYU5gAgGA46abJjqrc1F",
  "key12": "2UDoJkwbwbEe4a1RtE4R7UUo37xqtf9Gjoh2twPZ4viWyBcfHPpezPNs9SacW4PoZ6HwMD1QXdeUWK63adavgzN",
  "key13": "63SDwDq9WvqCb31H1uvH75J5Zy9qbpSc1LkfqNiCpzSgGEjKsU7pjHXVux6wSrSpREkUPMuwVJaRnu5MBAy9yMqM",
  "key14": "3g1zNFUgzoga39spQgXGpVRrCpoLcWACDqkCYo41ygw9C42UNHhDXRHKgG3ogcCyK8s5r8wabS8ycBkqYHpXpnsx",
  "key15": "2rPtCb3RECmVj293WmChLPTTwnc8XVk4fnBumh9bQKxQvYPrfmuBngRiyZwxhb43vd4wmNE1q2NiagGeqvmL2dNP",
  "key16": "4V6Pq8JPqJqatuus6SpDZNkUUL2tVkSL7tmX1q1DhrBVgAnfP1edTvvfUzUCrxWUKFZwn7LSx1zDCt6SqFC6vVYH",
  "key17": "3C4y5gqrTEsStDPKv3RRCAk2ArgTJFCVqBW1yQJd2CAcuqotjHMEZn7z47Fi1Mj4fNWX82GWCSAkFygY71YdugGE",
  "key18": "2484qpmrkKWw9z8Mju7XcUiyLA2zBcCQM2hfRBApP5ZFHKdgZMjrEczHNfQkfWshz9ego9ULDTba159v4LgyEuWp",
  "key19": "3D58JQ3qvvALjamqYYV1sFoKZDjx8sWKVUrXA2Mh3GLh7uva6ih1wufZYNQQUUv9jG5akCJNwdr58gV6wPoQT6eV",
  "key20": "bc2KLcUHyN1izB11nd3Je3XLuNKzRWwj4oCovfUUeyhvnL7YWmcBPLNZqa1gm7PkSPktXJk3NaqGjx5WmfUaUqV",
  "key21": "WydBaJanYLaTTMHvURWqK8913op88zxDQhfLCx2xvFE3wqTMxRkVSX1w8S3LcgshNqsawkXXFvRP9DJ4bY1LYBq",
  "key22": "23ktEb1DnxLe4PdyAJKWuWeCRgRHvXMY7eUUUyqWRQJ5AM48PruiHPfqe5cSmEs4SeBUBDwVYSLfMVc1Eo8j5gYt",
  "key23": "VKwT7eKaD4ETncTvKbGbD87DwKaZ3mr3t44UywqBa9UH7FsmBrNFTKNcwxwaSSgMB4qqaKyswuCDn4qcAuuMeK3",
  "key24": "oyzSz41T3vpQvdyGZtyq8MSZkuktxFq4DbktGLkav9qFJ6WF7UiRXtKMkJQattDGegkv54Aqa4LA835m6szabzc",
  "key25": "2DXTNL7LtjxCf9QYJoexCEdePWmUP1DYfYWc9TxWD9johaV41qb5ahLkWyozwupAEeQhHiFkegPoS5EbiwxyD32S",
  "key26": "5TzGmewFjtcNEWqHDzBaNZtGd6ruT8AXq1XXBxhei2LQu9LM2gY1RyCL8p2bj5BXJDs33cvyKvGU2UMHiU2WhF4",
  "key27": "XKPunC2pKLq4eGkfKVo3G7CHvsvzjvWA2fpUUPSs49TQ3DA2xaVm5JP3eM5P3TSddHC8HZKR2Xy7hWfBPXGKQjt",
  "key28": "5xFy5TraZ3iZZ2zEd4M8Tr9yqCcnWvXwUEhVtWmWYvJGtkS8dunA9KsPULdoYiB8JwGKoao454obpAfgL3XZQL5H"
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
