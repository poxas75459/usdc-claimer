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
    "4fCuJ6ioj1M1mGLEkwYijzRbHg3jBe7EiBKGcesqWa93WWizUNr4x5NjgaTATVieFGig7BbnjcyskXmhF3Lvk7Wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TETRi6d3ScoBytDeWKmFffAVfeFeWTdKXFWp82sKh6DM93aSBKZy2kYjiiXYa4vAGrqLDmomab3C5aKuob44TnG",
  "key1": "5edUok8SWex1qJuzVKwnrQCYbPQfP2QNmHwCSFGWMkMBV8yFjHsewMS4zMMHmft5nHzk5LXad7nKkJZQyeMpTwPV",
  "key2": "5Z1BpVogALmpuofT7e2rUiadDvghDecmAUsBPsdqe97nR6CvMgG3PoriySGt1uFK3iMRpJt6QzhHePJJ8Cj5b29D",
  "key3": "5B8PEnyhAWUZjSkMn8wZYsz4ddq4w7cSww7Nty6MED3EfDrwWiEFNpm71oouWmhqZ4frYfqo1Poyh4TjfyUjxEcF",
  "key4": "2hHY9hXWqsRZs6umpv5r7REv8vJMyRG3eyQNBUoLVDbaahZzLR6C8cL8AfmcrDEWdBUgcAQHukvNrT7XNZ8RZ849",
  "key5": "5hoj7wKB8sHoWSw9BogVZmbW6vf7oGNXzWjZSuCe2xsf111Jr57JpHfsP48qVmanwozUBB1pt6xynh5CfzdZxHbz",
  "key6": "66BNzFYJMMfbL4yKwiC4w9s7Sp5uKyqxRddoSsQ9vPDS5nARQ9YBfMRJgXAakzrAav5nsGzQ9A3Z4E57JXot7SzR",
  "key7": "437oqwoiZRCxgDkodjBswgc75yf2PbVMmmoMWQUUZPkv4ubMT6awP6dgMq7ng82ngKvEbX2DrZH1H1D6DicvsCzd",
  "key8": "56dBWptPnHaRTL1tQXHzDSKdwaND3B88p3PTm9VTMQwuN9uQ9MnnzEBCKgow7SUaP25rJFSvyfdSug3vNRtrUYcq",
  "key9": "4qvvw1teABzY7wsdFuTi22Gt3P6KTo3dvSQYwi2JeJPd3yYZo1diyp4FHRR5NDoVo49XMC4j1QuPmT4ZiLvtAL6K",
  "key10": "2vqafmx5c7J9emY4u1CHERWH49NfSVfGPY1zdZaxbKaP93wiH57QD9bJ58TL2UCApGC7itCsMNXEoYwxFGYpeu2T",
  "key11": "4mYQcasuJ6AF2J7cXEHWjx9QkZSmthDMtkBrR1s3DC2mM86T4oXohsFM8UhkcJ2P31XysAFXCWQoc2zZJ8PAd311",
  "key12": "VX6eddgk5u4XGEdsXtmB8Le2NbNsLhxAJ9mfq3BiwAK34GcfJ6p1owLJtjPDjdkBWzdRWBZqZouwNWpwsjdy5cq",
  "key13": "5KYxSGxpDsEihYv6Gos5YACUW6orXBHG3rGGUdcGAR2wZLgufE1LgWQauD1Lm4LFk4WychK45nH5oT6b75GjrVNQ",
  "key14": "2tosr3Vyu1GqiGqrALhjXXTsQhVhdAiZmaw41UKhNvq5h6wPP5VKiupcb8igwAsVSK6KV7LciLvZtq5ymu66qYFY",
  "key15": "4JdCLT18dHb2FtDXkj55vD9rVCtySyihXKhidJkuXmcVw6FNJSSVisjWzohKGYiwpL2fEK5JW8Ldi4wyuRCMWzm8",
  "key16": "539sRZkQUhxvDJjJBjhgHgs5v6aaGCeobhuyYrvNsLLgu7YE5uYVXhPMrMR3qE2fa7ZG78oCDEhWkq967K8jw7Gx",
  "key17": "3Nwt7wRPFQSS2G4SQyEEQnni1B5YwcwVjNVqh51GrS2obs8wA9wdoaxXfFPxos17QxDPupHfUXDayEfSbfPNQCzy",
  "key18": "23ZkcedUMcz5qHw4zdFTFEUVwG7LP6HhmnVQHYinuyDRMMbP5yfhvG6Y9VCRss35qVsjqm9fafoP4gty3pDC4oPD",
  "key19": "2EtKLTr3Ha78PkN9tsNzUuqttX3omsQW8m8xjGDHfqJNDAk3QZQGtuJywopPU3YXuVtqnebumyo5jGLAQSAvXCxY",
  "key20": "m7mmR3ughFHzUbNseLj7zLjikVz31TGhB2YUNrgTrsQKSTpwUWX5VWtxoPX3t9XSPxUVEEyJy9dhKAUfvviMumX",
  "key21": "2M7oDPKZuL9sjTHbrXXvigfLhnhzkKmtbHoHzGy62eoDoNuS3Uy41Uqzc7hAZw22W7rKGBTQdNrbMYzqoMizFF83",
  "key22": "EPVC1dvX7gMcjechXNnG3TSuULyVMvt83JEBGWdfCuxrYtktEBTsdhbSibVoyjTR4KDb5d9D1rRZ6KVFrphkSDr",
  "key23": "2UupfHtBoVzrNfAzKEHzwAgwxC3oyRMqZ7JxsS92pFSFCYLBM3SyhTNT94s7cJjUQUv4x91TzrPYDzNZMm6ynQf3",
  "key24": "21APtBNiaXJ5hnQM6Mb8TJBLhLTp6vMWttUF7phdhbKaD9sEpfSyQFZxKh9uZkSpXuK5Hn2R16JhweMNUnRy8CoZ",
  "key25": "5YPsyignmwvNdQUfbGySkvbpT1ncviP7Y7wDdxuj5FE8L2BX99ujbU9iX7y497VizASmsuPs4WkNfxi2xj26qfcy",
  "key26": "3jeqyCZmD1qfvmGTeZ16Dh1cEEfZdj2WmqfQ7x6B8EvWsD1kRopn8Thtw7yNAaATEvEwUatPmUYV9tgrGe1nzmpF",
  "key27": "GkJydYV5N1X387VZu1NARHX1TQ7yQwScNQ5bRy2MTTbML5U3jDi3et3yk5wwKfttxkQr12pwQBuYfw2YRcGZLwA"
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
