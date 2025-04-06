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
    "3xV7N2QJeRRxrAvtunZv1pdDhkk8RHPHKxUyApWyanmRhpoDaVHwkfjJcGCJYDbKcQsvoUXbRtR7xurb9wpNKn7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mFMC8NmfkSqqz2DBxiuWydyGYGir13zjDfmgSgmsSszTYNJNZoCWRezrWWzrpWcdnYrG3GG19Kcnv2NBbLkTMNZ",
  "key1": "3QwaNBWEVs8JDMEaZvj7Sf4GkNJtBxbNLqnjj28RyFDXL1qmyi1T6XdQSUVK4dNhnLQnszqKfQfM4AKcE7hk48ha",
  "key2": "dDCvUBihpgADRVkntAoowfH6vXwewdUKpwx5mabtj8ozdLmS8uzXhanYwFQMb2mmpDx3mo87QrwWeKz647SdW2N",
  "key3": "46UcUkqSeu5DFZqAhbdgviLLvaDGoqk7tHU7sN5L4xtw4isSX8QRzNMTwJ1H7gXFT4A9WF2KeT6zSQXy9xfUqLFC",
  "key4": "4bThmYtx83VQ4GF2tHEgk3GFYYn28sF4JQSxKk9oim5Wjadq7BLbVKXAA8fBwnU47AwqjQf1qKrBG2vSA39JSDiY",
  "key5": "58wqokSWEP1YrvFVR1SHiruRC4E5Dh2xNXYbyq6LHmsM6mxVqLxe3M8cvbFHa9cMV5P5TrukbLWzkYnMv1RdzTpq",
  "key6": "3JCHDUNU6tuaKDwDa6TtCsVUAJQeJefbxNvY1yTvSoLn6utQ4Q1xXpzeVLUda4r51PVvzjg83YrHKwjrNKmN6Bpq",
  "key7": "G4X8MsrSpZy75gJeAgdfEEzpPZ5FmYvsCjJ1G1kLW4E6bbYN31PYznWo8ed2DGbEAwKg4ry8zk9TsjgKXnXwN9A",
  "key8": "Nev5Pv2GYbTARcERqpKLjaPLGjwyJNCEqhnv9QXr5Qg8gZMe1b14J7yRAR8LhZGA5Ep5VNVHd1Yt8RVzVeFZKyi",
  "key9": "2TF3D5SMWtWQHsrefoBrpUoMTojZpH1gyJgswuTfx8N3bQMUsVdUXwks4e9ESyFxv4C9jwbH5dFGCRvq7afnef3z",
  "key10": "5zttEjM7x4AXAy4WHyueSm4QaqkWcJgQdhk66kAcgTbVrdQUjncEAn3Ddr2bf1jCFa4GgoWJ2UTY5eKWHBq1hqPM",
  "key11": "4j4sJCP8ScbGh7JwJbquMADdNERrQLjFZX3rhqafviwHSZdpeK1sQYeD8PvTQ3MQgUWecMc4E3d6wPmmMDtGk1x",
  "key12": "3opmDNMk4ryHoA8e9vnWF1XrfmAnRRw9CsdNGFdTuk6bJQDnoH8fDoaR85pBvrzaZZYW19awyThuCPgmqD1gte6c",
  "key13": "3rhrZ9a9qSJ4YaVDXPiiCbYGGb2eraDjSeSFXsdjeG1RUPPzpiYR7vs7zH5qYZ3GJAy3AAAE9N2KW9oMffsYJqkK",
  "key14": "XVrSgBv1poFFygMAYrQV96UEAskWzgWnjpw9CoTEeR5aGbLKpVPUhssexFScnS6SXg5LLLFY1GW9yUknRm9hNag",
  "key15": "44rGA6jV3KH4JbTQbFtXQro9C7CSDh9L4e8YpJ3S8UpnuWu6FrXZ3hin2wBRWYpkve1V1mw4GMbKJuVXnSjgvF2Y",
  "key16": "5BNxbsQbyi5pCd96bKkV6e4XkBjfC3SwiKJQEMrAq1kQ6RGYqPnQGyygwsJivjwE5UPdhAecNJHdk9457xbrg2YF",
  "key17": "4BM8m5QxvkF35WuuUdgjptdhgporpHqBNXL4sMrnSKZ2uSqJKp635jyhL7rvzLmiEg2PAo6u51ZwdAj3FXkSw6tC",
  "key18": "Ysn4wFnLixQLgWENQyvukdDYBFLMW9wBQ4ELV3yBhhzmgzfZb67YB6AzXWvRNoJpi91i4tCHW6vzf2Ftds2XZGc",
  "key19": "XadyGEuXM6H4K4iqgQPVDrzPAcqXQjNG9P6pDkFbGvgeJq9Yb2PkgkAZf1dtJNUF7HLwHPq37AconB4wZk2d9RT",
  "key20": "3zu6dHi8WPkfYvzCVbb5wisq1o1cKtB7v2vih3J5BNjaeo4mHYfqf8x3s91guPTBrsZFhWt4Su5xabMzM33RmdYV",
  "key21": "5T1chW8Anfxo9f1p4XwDRx2Xu5vv37TXcN4pqVCxYyKXjpzPXNG69vBjUPAcwHVM95kMuv9EM9a7792m69sU46tG",
  "key22": "3eWgcqJ1XRLGK7MyBEhSS1JXsjqNxxRKdeE2ZZ34PVbwGxtzByVpm54nT7ByhJnBr7TCXQskEu95gZVbvQRZanRd",
  "key23": "5keuNx5vVCx1qum9A2LJiRSPmvqhi6QW9UZuF5mRaYdznwyafrfpjFKXNgfXBWDjWi6FxoEuxBxfH2bBtU8XQTKL",
  "key24": "4GFQbmig6BpVvUNM73G97aaHKKULoP6xq15Jaoacr2ebRcq6jh5cCeSyjxxb7BkFt8PLm4XcjECjDhybE6SA82NS",
  "key25": "2VnQ6KFG9JFYKyWiBRJG4N6m5XSEa8W3PmcUfaSQX8WCCD6h8sHS8U6CKrfm7qrXMy7ma7QdHuJ23cLZifJ2x6dG",
  "key26": "5c9WnToLVfqo93PkA2HT56kr4BWFjE7nAbmsx8RxRYcK7nHkzaxhEmJLjgZHUF3zn52L3B43S7AjhiTEsgcVUSV1",
  "key27": "59VLkBFJsBnhUuP6KaA4y5ezZzfKGExTWwPrdKA2mLjCetiTBvsK24H4uHfoe1xWFVBkwWixstvPTAnoLQ19veCx",
  "key28": "2ptME7gdiVXuRDMogewrKMcVQGRNyBt6oS5SXP4YtREnhTrcoC9q7Jm1DqcqrfBNhcbteWevYjAJWrahiLqDVpqK",
  "key29": "4J3AeU35e5NEzBQFQKsnC2V1tyCFiMd8r3tbeGrzmpL8VFddbcNmKjZTQge2BVsJnQLMX94qx82zs78dZVoQgr5b",
  "key30": "2X9vTJNyFCmipx8BQ2ruarfZg7TLYvG6RtQiHMtJQ9EzMbExtWJgJrL57nzK1zQGLz9EU9X9XgCwsbAMmAPGpkU1",
  "key31": "51BJKqZJunkpxN1JCFsFoo1bkURbn3VdmkGkLH2gr7e1pLouC6ZGoYbDG3ZjNsnagqbbsCUzfDjqfXSHUxX6BcbX",
  "key32": "2xJ4X89b68L9m9L9k79SnfQJHthLYBvNXUd4kChsqbBeZjBccv7vyPHA8R8wUiJhWsA2VkFUAm3UhUdX7SxukzWF"
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
