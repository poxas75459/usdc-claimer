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
    "3err2qojPBYzZxe1zGxbookJgmV7GmQdkMrd6u8AhHxZGCaSUUkQuowvzNKLiiqs6vq7YMNURHSSraQRZmwiQ6eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47daaui8LAZhtboeTd2nc22CgtpF3ghMedGT2rebm5ze4r2GPtCjbAbsre7svdao3AVDmwobuDShXRYJxoGFJ6Tj",
  "key1": "5TeA6QepYNKu5SttivYa5r7SPoXmAtFE5iYQAgk9X4oYZw3fiFXHr5Q7nRxENCpY79VsvvxnqwXe4mTMxfS8gcQh",
  "key2": "4ipCKLnWkkY1J2WtWsA9pMWUU5GvHKN4zgxsn83Js973HgEuJLt5ZHY8XpuXxK5L2RW2vHiS1pdz6JAXX84LKaFU",
  "key3": "5zjp8NbxZio9PYLweEg8MbcLkGC5ChmhWPgari97J71NKUtA3zxUxUWAkWJDGKR6nfkrvxEnsaBKsSUDccGaKTe7",
  "key4": "5TdEuef5sJugEfzGLCW7TjzxcbrvgGg9vfxZJsikBGjJzScfWYdf5sftmNxpTVs5xDiTR2Vr82RKP7A8cxXBB2Xt",
  "key5": "4FutEqZWvd8w8xBuZojwaz6TjSpXHMvBHxrTMc5jKTLwuFQzrQZVJz5RQhUai8Tm4uckm93LamqjYU8GYHsEkxBt",
  "key6": "2s2ejt1S6J9WspRDQzQvLBjq4Nkns8BaSw5DKc99SV2JZY9zd5UjZTuzgwjLUZB58JLHkGyo3RmAjpLkoatQmisM",
  "key7": "3QJFSAJYUYXhTH9sr2hWwpwLD9muNX4ANaq7TzXTvHxCJMieT6nRM2QRAdqjSKXEe693razDbCr6wJMAny47aoka",
  "key8": "37JKGobJr4jVQWBB4SuPNuYg7Eq3MfL52BxRaFhqt9AKQz3XXjVbTZHR4NexFagv3WdVeXzDrVPTEZvqgSZoTjKN",
  "key9": "QBUGXKyj1BSF8eKLTzGF8jjTa3JRTyrLReCiYxwASNwoZ3fBBUJKdhkv1yaVMwgjfyWgQmYPtHWgzYQhQpWnexx",
  "key10": "3dGPdVGXDguqis8dQhL2fo4EYxbVx6iez6XtuyTGQTzuqVnexxvLmHN8frB8YA3ofJMobmtvms4N59a7rN4wXwjs",
  "key11": "5TGkZDww7hWZhctpZiBC3YDmLqfWb1U3Dup7pSKpy8F7cb9g6kVzXCAGKigV7893f3ASJ9SpGzL5S3MjzQ7Z5ReZ",
  "key12": "2o65QnpfRxa8bpcjHuUwXYANuZ4GTVbokHdFHASKr8Ux3KfZra5a9y4yW3ARfiXPNxkXMhyYSVPPSQinxruyr7Yg",
  "key13": "64bpru5F1z8WyQCruubArcWecvFtbWGxa6UYWfjP1G57vngTCnyMKrpqawQowJAGHcDAHRTDHmUWrXSiBiKXt7eR",
  "key14": "dqHkjeEkBzJhgHS44x5mNkF6xa8XEBZkS5NJsi5wiSy7uwv41CNkoB8CpiSeJ3hQs5gjag6LGef7qKWkt2G25vY",
  "key15": "2gQzG7Xb4ku262aSzRUj6tWkNE3UNrUCAKfsYC3CUnyp8kQigjuEwzoVSjhcrwMmNRLkSnejgB5Ux75b6pV2zPRx",
  "key16": "4aFgQmcVNdhWJfXE2KoA1nDiKaCmqnNuE5XxdPB8GeUEA3HZBcvCk9WEoGGrxyx7ZATLLNEty8PUCu5Rp4Cpq95w",
  "key17": "4dRAt3kpBJeKXMzsqp7aeDdJYttpJ3hLzTibY4E4fv3jZY8DGZKigKLzGWKQ86zCyLdiANsfwG5GZhn98z8KYB5Z",
  "key18": "2PEUibLc1Hdr2H5Hq7STfcxBHTcnpgoJN1N9pb6w8w3vjXYhSGykDKwJajnFUYcnDDGKcP3C41pQXEttJC78gZog",
  "key19": "5UJuE2C8k4yW9Ex5FRjwzReoJs1EXhffXUmTJAicexUFhEj9RkxhVvmvkRNNvo1SsS2MAr9K29VRhHSeU9f6jkUm",
  "key20": "VvWE6H8Y1JoQExRskgcNutQdnd3jnk1VKTK7UK3kZyAcbJpMbtmNqYX4mTwXzjRkAs976wkWthvQdfNKYnvAtmZ",
  "key21": "2J7A6DozYEV61TVM4gwFYBwnn8xwJeztCcmMDapcHq5X86qVNWivfzWPd6akcyK5HHpYSXpL3DRwd57HQcz8Miuh",
  "key22": "34NatZcQC2DuoZh3GNkm6JiuFuF3yMvJ2HpvmoKxgSjQV4UtbvG2anM17KcVEuo5A6QittABRyFcPqsAztYaV5bd",
  "key23": "5iJPYYqoQ5XrTUSwBvo2a2cxwnC4NScftJZ9zSrqG9pcQGDUrSkkkZULiebwnJvGPxiCnGiCPY4ckaiJVRVpnJyD",
  "key24": "QfdaD2cGWtYwTfbXF5ieTbiFLfHxnE312B81Dn6ecwoVqSigWVccwajBGZecd7jBUqh6v6DeoXUigcffkRDEGH3"
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
