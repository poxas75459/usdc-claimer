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
    "4Eb6TA8uEr5tCsPTaAxppxK2j5zSsyEGEQmQjkM2jMK2avgCTBgfcxfjPmz9RcHjoYNctG1mc6uNdHX6Bpb7iYJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xNuiaQNnP5uCydYi6tsBuRiPsepKoNNe3VJZ4UHnHoY2UWA4PJ9QxMYyArzoao8syuHF9S3UndCUnxNGTTMmpY5",
  "key1": "4gQhGXNqoqB1BvdS9zBgVxx1rMuWGUTLUwBJMAx9KZgULogpQGzMYPWfMbW75eHGXXSpFW6HaaSsKAS4A8aBarBQ",
  "key2": "29kzsjiVg3pEX68gkeURfqdnvGBh3gfpiTDHtbFnpS1QTRngsxN8uVvGg8ssGmXkLwfvKgRmYrPyw9tssF3y2BHX",
  "key3": "BfE92YNYspuJdYVecQAgtmm2P1jCzYY3M46HbMjthJKC4pAWBBBPefnzGhN327CjfYg65Jr3A7i8w7VQxQe2JNk",
  "key4": "3kcwjJTFdaj4AUpmK1LBoHY5B4cgz56Wahc1Bdxs1T46BnP9Evy7uEFJTWT2cAGBpqEG6FGs6dDoCuQ7ZopMUv5o",
  "key5": "3bpk3Vbdf8HgxgiepRrYW5FKtfQCEzjNjmqLKYGim1fcyGPRASEpUtNWKtj1hk47XLcuNpENXnVQEF7MGY1KdUmU",
  "key6": "n3rneYPNR5X97hKVhQa22hhUhvZHQFYn7KdPK3abs5qZeBS8BwNA1yDUYwHvjHYoc2kfgNYLagRq3eSHvSs7tUE",
  "key7": "2J2Pt9UG6myX3x6GbsfdYLPTS3uL2jkHU9vng2vBqNtvuiLUkKWppoNDrJyzpcXQFJh86razaa5iT2Q2pUVxXvsn",
  "key8": "4aLCJ8rmWHVLXJiGyyrzchnnyR7SLFrmWE3RNXJKx7bwFqfLmygqMhcsy4S2rYSguxJivraabrfiXQ18PVuu3ouW",
  "key9": "4N7kGUrzEpqP9M7QfXpXbgjUZrvYcdZAvQKdmsstAaJ4vBSev2epMkW1LQWbN5JwyPrphiQZfiYd8QDkKRid3jig",
  "key10": "2txb9t7p1gtbNZX1QoVpi5mJJ2C42HoPq19d3a9ez7aeSYetqZxNG87u1Vtn3WgPbabvdun9wHM931gKhQhutjTL",
  "key11": "2GRXbonNPYeaUKjtGgxFLgDcy2ypVe6V9KVoMPa9erJLT19zmxmve5FaSwgFkmS2fzkkrnhFGJSpn9Cs9wdLGUFS",
  "key12": "2yRrfA8wLbWi6f7q3spd6iBfyVFUHVz1Z41xmTh4QijyM2Tyz5ehcjavV5i3RPWsdZtbwQyYRLeT6QpPsuUSC5WP",
  "key13": "4wMN7en91p2MDBJSmforgEkiL5RNuMTAYwti5LQVSe7EwGcuZini129baD4jAukRLrHLdieBFQ6wnV2i47qrhg7M",
  "key14": "37VvzC4LerJQBNfB29Pv58eYemhE4e5mvdfTdQrCtiQ3JR2xLLjQB5zhx3YYQdGbZVQTzmVj94BS8AFmyh1okasd",
  "key15": "5F61mjZ6m9qx6ZziYri8tufutHYHrPBmDwKqb7v6CvzRihJNTYCv7B6XrMK3PrDq12VuSg2THz29nBvNg1qHBwUb",
  "key16": "3cK8PhcXUFAvdf4CzHLqP6NmU4nNFLQvJPPiuZMSPQHrH64T2fVofSDU2x8w2GFfRigso93NjUc986tyrQUFc3o9",
  "key17": "63sZmu5sKuBbXrLCe3Fcaxquj5Ht8fyHtuCegj59Q8fT1eLupT5RJ3cRdvxW5T27zgWi2o59c3LVD9wejsCCWYLJ",
  "key18": "mGBSMVgPfdymuvdYAsPYxpAa5XcT4x51i2TWVtg6rTgsfJZN8nuGEy1ttZcsgBnGzjbve8hDpvMYHBNMYkgTPHd",
  "key19": "59u562HvLi53a5q521Tbw2pBjbsN3KEFv5JEbByTPjC2DfgCxfjq1P7W1FMBet3e3VT9ywzHax21V9Ah1HcLN9PF",
  "key20": "5VuN6HvUcaqLxBv3rkYK3DmKQfoQRZaYrW9SuEHzUKBhmMG9riCzJPLah7zQiQfyNHCCZ3y18rEdNemB9VwUcuw2",
  "key21": "5Bjk5DjdUmgPkEjcwubNkr6BYKLUrhQFzas7miXhj48xwC76kS5ZdobDbQ41fbUZew7D8LepqLy9n8zKhy36GsMc",
  "key22": "2USMB2yCyvwdtMorerDAbdngQAeon1ZY7kaXfjN2bMbzeMXeoJLhBWSqx6UVEZxtYnWMUvLLfwHpwv7bTW2uUNHf",
  "key23": "5KSQZf2ZkUnnoLcTWh5P3mZrVfJtiGG8jry73ot3oQ6mNbMDmqZ7JiR7Zu6fBwTq7XfEVNqC9rbBnCrspQhHjHPq",
  "key24": "3D1ynjfSPadLjwUyjTVA2pt6Kg5ZTgmjPEd6D7VzQTk18Mox9f627kutHBwqKX4pmHrzCefcb7mEfEBkBnU6bQUx",
  "key25": "29rEVZAnx54sPdVs3r4dQobi8XynmkASpihEq6gRoBdr54CHeAvsLfB4oMPnPogYWvGiuJMqkMZ3PzeKA7ddZchG",
  "key26": "2h5yvHrSzDaMi9QffoM7AeGM3K49oPBsNQSbMXz17ytNuQ8f5wHKbjwJSpxc51uXprdx3qpWEH3tcqmaozHCq8iF",
  "key27": "4efKPHVc2vqBRDU1G6WGQ6t1FK8BYtCPx9tkmPdJELpecAsgMiB4TYhDsmrRP79Mw9jPceUhPi4mFQ3mefd9XJ5c",
  "key28": "3qHrgGiWryJoXFFEEEhkjJbc6weZ3yr7GaP9zGbjpsbEVLCG2xD1iuFd4FyJkiDb6D1N5Eo9gCsGRWr1C1WokpWY",
  "key29": "TtNDZKJt5ygKxkSZFy5Jvj6ZwGwtw5YzT6oLjFvfNyyvqBGxz4H2Xh79rhueuJiv9hpv2wEf62NPTvgAQF6yfk3",
  "key30": "5J6rYGqixGFDfQbKPyQB7KGb3AyYopgP7vtqZm3PcmVQxuQbPC7wTbDghCCT3uBdapSuY2gbZz4RxLyoyoyohQQL",
  "key31": "5UpAY5LR9yEVTKAZaQKPFxwQfcw17Q86ox5VBfRxpwWZjb8H6vWTCPcHqADdLsexrPYgqSzP1DnmMcxgh1cWr8fz",
  "key32": "61XptxkmZgWYmab8h7QZ7W2vBg29fgUXgw6PtBxxagHP5HRou8jWBf6MEfXFM2WKvAW8VEKaofJb3xb3F2SfEBQ5",
  "key33": "3heGVWEzFhhisXixmvv6QRDUw6kRwEZcwZc2rGHBoShak8erL4QCgF9HPdYETLpGvKbnuvCVZx53QBMkwp7HSCRY",
  "key34": "2tuzx5SeW4frxejFeEQ4k8b6sM6Bn3m2M3J519pHD8i3FmKnEpCg91sAbotYuk29amTL8Gu2jcRTPJV7pQ9t77Eq",
  "key35": "xaDaGiUfhiEXkdPyNHZSdZCB7ySLKgpNu987AN73HFmkqYkYaMnMsymkuok3n6vX346nkhgJa7c9r71VV1Ns3Ja",
  "key36": "3jnDp1zRuiaxGfDAYRJ4kMGQGqauCG8c9tHdKT3yW3HgDDJEErbo2DfTGUbNHbejLdhxgKj5TuWJZADY8Jbr2Eby",
  "key37": "4UmqdjapPkWahHE95CBPPLgm84ADSXE9mAeDA7RSMSqNHP5gFoe6McTvZMBo6Snga2t9KP3py6muGdRSB3yG3NCc",
  "key38": "4po4JpkQqfm66MQK4Je2pBr63Hd6ZpM6VLkfaErzvLQvJ12eHA2pWcA9EJFzTpCBToDCa8f2Cj5WeGEAxYLp9sso",
  "key39": "TrPoRoWpry9rcxJJoiJst4Nibgrk2o1aCxRJwM1BQb5HMnMFf8jbA3usXPy5P4FCgtN7kiYmRM36ADaPBGWkGdu",
  "key40": "5Rauk3dHfCdjBRit7UL4uPAJjhLKVL4VaP1k6qwT5uY14AQirjXzbPG5q2ZQiz623PoqewFhUKnZe2jbzH6ZJw8w",
  "key41": "QBoJuxKD8ebDrYvQZY1KQT8sGaAMXbGkLivFV2CE5HdHp5Utk3sKtMrsxgFsnChNPARdyxokjEikguyyq6od9Mc",
  "key42": "GKnCSSLa2GyLhXXbjPmT4RjeowAHZJJsTjsxhsAxZymmnjTrV64GrRTyJrLSvkAzvARLe8aaj8LAV5Jo596GSS9"
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
