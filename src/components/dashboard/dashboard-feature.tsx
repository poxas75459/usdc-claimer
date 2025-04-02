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
    "4mintm737iXqFniVgvEhVHfWfipf1JrkMHLKkVFbj63bq5iZLU4qSfBo4JfpCbE7KHMVKjAiY5zNknayuxeR9593"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wii89Ky7irTjWLyZu8tVfH3subEoD82wD2yYZAX1q9hQSZLnKKbCmYP5iQ5HtxkU9tKvxTZpSEduyqjzJ8tFWV6",
  "key1": "4HHbyvcsPHmZWSqoStMTfVo6Fxsbf4F1PmqM7nxqXq9NzGCv4PzCgaYWrofdhRLENyM2Yb7ENLuPzCtH41LxLCDa",
  "key2": "GnCz1a3N5G4WberjCJh352D5j5dckPYk96dTgSFFZ895t7azGX3BTUfh1shaaVTNiZLacGxGkrug53ayR2Vqatg",
  "key3": "48UKSxfvnfsUEoHjhquJhfDc9T8BBPV8mfwWhunQf3F78kFJBwP6xeNew2383odenxPV178brPVBN3M1BrUVkfXJ",
  "key4": "22DhrxQzCrAHW2yveSc6CUKFL8iMzUuNSnW97U7DErqmTRfM7k4X8nuZ7xu88gVtMNJsvRUhHXkeBft6gBM8XuHK",
  "key5": "5cU2knW6NLzMTmk1ycQs3t9LaELv771fBLHkP8hJqQTq6Dvj9AaTFJLJ2uh5DdMakd6NJdgrjSfzYnrG4Q77sxsx",
  "key6": "2EP29wxJiCFhmSo47S3keDKSJ7WnYSbrwoUNT4ngvKton86azPDrrkJDoQunAHpFZpihnFTUoRELjhuvwRPDhdhY",
  "key7": "Y9rmkttakG44uqhc9k2MyJGajuj576s4zrLUKQWw2quCoyNnFNa7npX4Ng7tgQAC8csi6kNFTRgyV1uTWjuDC7H",
  "key8": "5V1H9zUFBAT1Yjwfv5UNbm5bDXLNJh1ygvpe3ZxP7AmQa685DkcBMjYox9pvQvHdhYmxSRiyDXmSrtnmZeHmz1YQ",
  "key9": "5CgENMC79sKkPJaaWPCM22BLMfi7tnHgv6GwynYqrBkme5oPR5vwGWQUT2epESPUVBN7H6qXEqioBvi6ZDKqkxGj",
  "key10": "3hqQtnx49kB6bSmoMby3yH8jNBjPZDkn83yt3KSZ4FTrC2Bn13bkyniLdJqmQXLB6E39cFKPYT8XEysc7ZfnVTrv",
  "key11": "3BHjbyGwewppefamshWYBGRFm7CXAtKwsF22gXwW6G1bLAxV5qdhpGJtRD4ksrRwhfs5vJ5vCnP8jc7Mhy97Hrmy",
  "key12": "5zK3Sny65doWh1pwDphDHABEaiX1w45FagWtwxKE1o6dUGabRqTnNt9XLYSVUq2mqg19iQ8ZeL7LHEBZwt2QhhpN",
  "key13": "2tLZGLWfxsEGzNqp7d3sCQRRNfbxRhbE6QaWZQVYBPoc2JCnYdFwiUJTuL9EdfZE4wvMwUV2SRmU2rZutQBEYUG7",
  "key14": "2H6j7WAeTc4dJTLd5WdaKK9fr98DAdm5s3ggi7zsWX8whhRhNUZAca8uYkkj7FL7LYXzaNpYZxwjHjfTv8kgFU6E",
  "key15": "2oWMfYe2ySjhngZvKYDoJsms12mqJc7t95TwJGocp3mxZrW5f6xQS2D2C7BUdrSshhngCE3z6F3JXZsVCAnEv4Eh",
  "key16": "67omom5szUVLwvWTjomtPyZzYA57YuatLrX3WGDLKiY5vpsQG8M4ggZoumfeNnrACyuvf1MQx44SPykS5ytnCyTZ",
  "key17": "RihHihxNNQF9y3xc8ygK53UAfi16TMJYn6Uege2e9EJfLRPqwvR2pUBhG9PRP6xuNtRAYDGmMdEx7fZnM1gNQzn",
  "key18": "2YEkEj31ePjk4N6crCiXMGQcBqfCA529zTLk8gKZaMQo5eCkkeeCTBGKQgJY5kA5CtYXnnHcwYyGM25h7LCJdb7G",
  "key19": "3qz6fsdfJRwJYxyYUVuoRhkQBUxHykZyT1oueLcGuUd91t6bQJojrgJqGBBumVdMyz8Ph6FfYTYkzvz4YzvvWZjU",
  "key20": "3z2HnXTmu3tgVD2C7VGgJBmrPERnriMWvjJnGCJQeT9kYm9b4xPojNzvbD9SdsCTcUiaG7DcssmL2mZ2JsPxtrYf",
  "key21": "5hh8YfJBFnTPpJ6HdbAX6RJqL5LHCwWACDsVvfsVuvrW2CP1mc34iEdMs3nkYQuyRbMxa4akk2bkPkLbeVpChySS",
  "key22": "5BpJ13yRJNDNc9fsv6fBkbTuX7B8BHvsgHMeuJk4kBCvJsmb877yv5XDvUHfrfkZ9Pia5zJKYX2gSSxfn5Pr3e1m",
  "key23": "2Md6e3x6maveW9LAtMTCqmFWbAoehMT1GeXt7xTFa7Uh661mW1MoTBJZwB1o1EEvqo9ho8KXmGwNMhqL9Qkjo5ub",
  "key24": "3jPjwje8wEQNhXVQnYHBJFgydezFhdCssJgaYZTiYv5bmCBRwGJdMSZz5CS1bruY7JTbVkTf1ihHTsGanSWRmAcw",
  "key25": "4LwWnH7fitWfXixQWRm3mARbDywQ2aTVgYBQrhyiyJDJep8dgcJPJTUBYECFsBV6rDGntXLC7nfZestDydrF2ZUa",
  "key26": "4RvP7T8jaDJoZPBrQSFZDDWtiWB6vYKP8CxyrZW7ntaMJo8pHRVHZdECDFoVZjLUB28LyxqE52igiK6uBptDRLY",
  "key27": "5EdGeMtdFeBv3pk7RP8ASK2v5BLqK5UYbhF61PfkrBUkxAk1xNYTcJoYuTkKaFf8DGBa8bsTNmhJwtTL46zjVjqf",
  "key28": "4wV8NFRHjPYbCZ1ZsE639evZKb8NtwF5hoFzYt29mdzzhe1Q2UbaW4yWRb5FdUzwH9nHAXKsguWNAseKE3z5wNf2",
  "key29": "2KgaBw9CCs4drDVUHYwV6ufRMTcjpPhKThsLas9qzkuxM3Zgf7ysxzhe2yLTG4bp4M3jd9ku3xANAJi8i8k5ZXpM"
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
