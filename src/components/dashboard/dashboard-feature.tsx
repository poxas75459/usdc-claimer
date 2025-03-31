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
    "4mZSXZw1CDgXuZZ1bR3JLWo2LDk2J3VR1n9QKcLMqFBXez8Wb72yBp8gJDYRiHrB4aVZPJA9K6Rk5vK1qGiQRkGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bVHsYCDMymZCsmJkfApSCJc7kzFi1FKwNAPMyWrcrRnrbyEHVPncSH4vsPTt553voG6fAo59icx7U7BdAU44oxb",
  "key1": "3QYpHJ9DYHjVQyXzefbFezWgMdAY9p6F3wr4bksWtWicPcuhiFmomTj4hAym69dkf311dhsNBjViyAaXnoHnC8Pe",
  "key2": "t3UuGKJXPmJBkQdAgXBidPayWACu51aReCoRUyKLHeohGydwMEiuDjpkTseUyBh6N4mquoA6H2Z9ku8b7G2A5Jn",
  "key3": "3XWnyGNBDy2DH7ZcZ6jNdpcT6qLeJEeAay1r9Nzvmo3iudyTdpKcdjhymqwY7t6zvHPDmWcY7QeU4P1FvW1kXipo",
  "key4": "51JRNSeNFaWQof8Zsx1WnFDPuY3rSqkPPdChMqfYH4KaCoZqtLszhYTvJrFszAsdrB9hkA1FXH6k6z27iwnU3B8e",
  "key5": "55jsZhzhLsC7S17XhwuhMb75Lo5t1TWAxxbUhjE6DXntiTFQVbTR6KAoeXafK74XQ6WujbJTEVXiuMmXxJKZCWwF",
  "key6": "Am3BVSbSmxQB1uvSVyh18APtranZKwvgFuUtDp4p4L3jb6AtQDW18t7MSJTQMSddb11iHgMEx7vFpbHzuz2XpCx",
  "key7": "dCsv4nMQ9sXXzkvn25343DDkAyk1asdADrUr27tAdvF6x87hdm2R5tHCUSY4RErtj6xo7eYDMkpBUPbMXMqM2BR",
  "key8": "5YS4TFFUnKx2sXRyLy28JqXJ5fmZyq2XftZuNMxbAwrTmE6zqfPMatWCxrYLGfABGPmdJcUCLVS7MLuDqJKchqZX",
  "key9": "2xQTJe95gYPukyn2Jc8Ji9Nf1awZTRsgccsdZLgmmuPSS5bcgy4oczZjuyXATPf1vL9aEuiWTkz7fahS9vmrip47",
  "key10": "2jLov2yrnRA6n4KDuU6Nr4pRGh2UwAvbWJLtBq71vuX9GgUusRWZyezdC2vETtpNWbKzDkDi7nx2uPYmAE9ADnba",
  "key11": "224ogt7JrKpHWuzXjTKUAAEYPWBAiaqAL7XEBemxVCPnwC3mrTm1RocLVo5huBjreaq9oAQsxAcJwoqzSpYpLADE",
  "key12": "48krXdJTfUKDkyHNBWw51pYtUmjuRquPZpMmPku2kxB5oECKSoTqUzkfYUN5KqDLQRQ2gFbtuANJymcyCfeyKGnn",
  "key13": "RKvRShoo7Xr2RohbHdEWb9D4q1Lzsg16UrGdH8oEiMUL4z224LsmiPZNWVbpuXWkFDsS9eppjK8yH7fBigQDrrC",
  "key14": "3LXfyxjGZdx7pAqxd4B2TzituYoKkSdxw1B3YZwrqnyVZqtUSh57iggxdHqJ8A9CkYkGkkM4y65FyDcgGg4JpL6P",
  "key15": "3Lon5VhDf9mqq2B9s83pAgUNjpabmmyrqwakGXpQHehKyhk5tpc758HRvgrPVGBEjfbGFrFm9at6itVL8L7pSnP5",
  "key16": "nLRuSYpobaZ7U3QUGPsNNq5XtvfbrrrxiEoqM85EiaqSSNY1sQwqmSs1gYKcJBtgWB4bpFQ6dpDjPqCKme9rMxL",
  "key17": "3Jc3yMxJjRqoHWRYcZh1q9wB3vbkuyT6PBhV5YFRhLNdB9qm8sqdcjuQ9pbhSPeGYF4doqf19ETrgms6h1pSkLMy",
  "key18": "2Esuf9xW6RERGE4jV7g6crQq9B8nMNNBf88xMbrQ4YsN37svjXBLchJp3mnQ54N1ZVhp3zdGNXUoaTPaGRRrfBAT",
  "key19": "Sb1E8hWCnhowtX8RA5T1swceYhp5NJ725RULXxfZJQJr5HWpJDUnkJkopYyMQkquKiJLSuZ78N8Ynez7EM2a8P2",
  "key20": "FLmHLaeGwLyt6F2vC9KuNJBMtZPugMjDVnNqMrsX3QYkCSA62LM3a5gtjSWp7h9Vj35JRJTiu2gLvC8vySYb8uy",
  "key21": "5V2QX6veUSVbshvC5ugvWKTjaN2rwndhBk7tS2Sthr6rMExhMp4xYqHvSxv2xLUo4VfwpJq1hgrUJN1BaR98M4CF",
  "key22": "5VtXkXiA26kqspsb8P8LTKAi6oXVxyjtC1pz11jhktWqzwuFvF8nkVPZAsHNywWAhfwSj642hef4wgPGzBpRYmRV",
  "key23": "2oRRzJCeEyc3SQj4h8wUAoVD6SsGt3ZTdXXm5jB6J956HgaFcbdEj75MwCkQaGDVJjKcEc9zkGPekL7GMK7bAmE3",
  "key24": "2qF2ZLtSnoYoS9KzDPRNhjSt8oe9E8gy7eMezBn4KJyXADDEqb1s5MiFmshLu1zJAVrySN9CiiMSdGQm5J9GtE3X",
  "key25": "scsQ52T1Ace2Z6wAZVyEVwxed9m5sRa2ELGtn58AokhqXibCdvj5qTA8uDgE98pavkQLgLHsdrqVNwwjtGvevEP",
  "key26": "5AzpwqizMduTRKTnrPjFTVWGEy6j8BoQijVszWwR4x5TdnzLAiJ7PbjFYocjHfN1Dt5LfykrWnYFWVcYRTDbCcWU",
  "key27": "5PMXbFm5EMR1DMDvSoyVXeEA8psBUqvLpXhVMzuN5PMdshs5w58SxBYGw7QwmQphi5Au849wrvTnCpEHiRg4xvvN"
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
