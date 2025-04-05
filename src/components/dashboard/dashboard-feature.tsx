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
    "3SVbZCbYpR7Ap16sHoXbf6axzDxx5THht7FQbfJNp24XftMsYB2cpms5AdfxUNXY99yHzqSokUJLobLThwosVZ8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MTtPBRiwY7xs56TqQYLM2pPDLj115o4CB8eZSi9PC3vpn1RKjvz8xZ2BHMogN5cSi8QeyZKA7UKMx8vPkswKocn",
  "key1": "5LwcwuBmMN4NYnfvCnSyVkqYqLXULne7LYUSyPxnK38GAM2E6wBcFwzF6iX5SvxUVe84HU4F2rZgP361DKkc4Mk3",
  "key2": "2s4UCsHMoTtmDFiaip1Ue1LypjFLnA9Qnyrk1qgrJhXUfuLVTCyoDnFFsLQaAZvLJrpw6nkXCdPjnaUkwXECagWp",
  "key3": "53NNPF4Gv3NPHeoAmLZ7bFVUxSS87tTt67eawPrhXMagmdJQJGd1vdsUx1xNNhFhVhtW8HUc9RdWcsmc6oRfYiBV",
  "key4": "2Jm57kSHED6v4vUMaxkU2KQcwWiV4PXXn1ei99TnAwzQQcis4kGnbyN3hHppQCDSBjZ7TBGzgJLckvwepHdX2P3Z",
  "key5": "4GbDWo5ZWTfWGUvnuunqsvQww8pB6RTcURJynP45VY2kuMyrJ73xQ3bBmXfVbRjwHDioXrVdQHy8D7rX5JGv5DYT",
  "key6": "LY5bSrJ4bqmodyiH5DUTo8L7YgfHwEzKn3FUs6kAXa8tTLypgcZ127bpinJoL3kHgY26VD4gyTLgHn48ZhP1ZYQ",
  "key7": "2abKUWiZfZ3JN9bwgy1BoHc92hx6dWgvbBdhSMP4oTgA8nRfoMiWjot7kUkFRDT69SFP3DiDXnSSCzxrUcu4eo2E",
  "key8": "55BCGEZApPgtvYtc1gWdJoDNtFjku7ayznRqmVrESP1oC2Fu1FcaMf1WmcjFHmRBNdEDHUioFh2LWBSjBf368SoD",
  "key9": "5E51DKuZKD732erRWmhRx5s5wfiEQ93anQWiAFJHqEBSNJZnip9qo6hbmiGWyueDGSJn3RUUKcj6TqC7QZzm9YC5",
  "key10": "2SN7JfxX2HkyhxmT9KtvyRPx44Sfiz1F1gGM77mdhn57hhT6jwKFamEUtQJgwBM8PfVRpNzbTbZ6aStfZiNV7w8d",
  "key11": "Tn2eRKG3z7n1vthFbPmHY8vtEPSQDzDeXSEYHKcrKvQCtEH6xjU3jDV729ehmhm9RB7aPMAc3Kogfv6MpggHgHM",
  "key12": "3qDS8U98skg537vRkjHVsAbDNBkmp7adPbf1J636RfYB9eZWpM3Ga7oUQgrRR8YUcCew1jqTtmbATjfX9REz6Hvw",
  "key13": "2UGEBr54BG2yvUW5K6HeXopW9rem9tAeoPVjGa2Fb5z2AFb7FPFJVuWF4cVpCrbMvBQd5jRKKjwLT3b6B2Qt6oAM",
  "key14": "2h8UdKjeFPhvUaFXRukrW1vtyvTEi7cESgHb4joXF3kKEJHGuQs1B8v3roKqZQvwUxwi1C95NoADuXUhZ3KpNtmn",
  "key15": "a6wXtdAA8uuMYo1JYwsarDeYBxkD1md1a4r9HtxEXoUFrpsUomV2kpZ3eeKpw2eFfqyyes2PdDThPGNvMM7gczr",
  "key16": "3CwahAWdibFPLKfJ8LV9puUpzZEHprSrRRFvjRQ66ckLSV2JNE3ZYTiroobGDoVvobCjdtizYiDcD4qxp4MFtHzP",
  "key17": "2PbWKub42YudPnEY8ktmCKZ15f8CiJnxKqdVL1VFrgL7noQ8YZ72nkR1HiKspthxYLm3WPQRXt6PjEfnxNMJL2QP",
  "key18": "3aiM56KYZuC5t2Teb6N3mBpf5vcVbnCr5eHiXmEGkkCumKdgZx3MfAQHoJD2GWt1Se3tfoJh4nRdQAurDCkX6s5U",
  "key19": "4LS2H3HzgwUmRv21Fg45Jws9YPzAt8mpHKX4sdt2qgKSNPR945QSWyGxstg6iS17s2KjmoayW6SKqC5WQ1Y9vv5q",
  "key20": "3zSNmwM7hfvHDHMyCEWs4chgxtMtwWwVm4Muaqh1bA7E1MMb6SGjrX2UqcmeaZPCkFGuaAipDqFRDppzG1zLoFbL",
  "key21": "2vEBUFXVaC6RLWkDFXpPoRRWcLq3FD5tVfRTC8PiwsQPkXk3Fcq3udc2qCLw1AK5x5TeXjNyWE5TujPmRJKQv2XB",
  "key22": "4fPGnAW7NTCajCyRWd6t2yFWKbkHwWmzsTAccmx8FJD6Npxg8HW5TizvfUqpdM1veUw6JWPtUvkaLmLKKnqSgE2P",
  "key23": "2ZEyWphmCHZ7uzpfQTthsfW7K5prxZoHCgKENhKoRtgDwvkhvT6juZg3kSiyc7ZyYgye9XZeRHn9KjXXH232fYCy",
  "key24": "5Pb34W8dMAqxmnn6bhAmdZcD8UTZK4XDFuXpwYuMabrzAtW4WQhmLfVq35k7UUmEBqa3yZNFghvHf9putuBubE95",
  "key25": "4NkBpJs5BqtATf8TMG6q4Qswqa6xPRf8cg1XMiDygGJsyZWSyt1jpyMuQB7AxpFgjiDfQsiVcAtFuBywxoacGBWP",
  "key26": "2XVLRUf1zN59HSYPuAEhXiS9tqQG5FumJKomAkKGk3vqmtHjdiGkqF7iAZ2KsMf3JnDR4qjHff2ytuS5YMJp21HX",
  "key27": "3SsbFpsD1ejGUYNbWShCtrp2vVQvyVhHy8dKAcQ3oRjfAQFr29aSqMyUtuRLfB7i9YPnD7fCQSYNxuhd3ugKZAJZ",
  "key28": "4fn8DexV4fy54cqdivP3fpbbE3QZbqNYC2P5tPn2nCsERePt6yZz6EryxjjgTEKCC7pawZWiL3j8mvD9TWumt7uj",
  "key29": "5bdD5aF6wct2dWh1wvRJZVpY7QZZMTL13Zptm1zLezEfLQhfjph5kz4accYfXTMN78JrwEiVrsnvLqh9z5f434Vy",
  "key30": "4ffpQtyPkUmEWXYPRJ1NSUEacc2foUTqYiNDti6NiDtmhETdUkVqfWFVY92gFtXXfEru3ULFQRLcJMLU8LyT2zFD",
  "key31": "2vrnEnGbcipYbu36QmPnZEXU1QRsXzV12pUc6aqK3krPe2mN6dXwY46tNt8i2BwnCkXHSE7ZBZZF7KwTpgpRvhqb",
  "key32": "C8gLdAMK72EuZPfmvPLb7GGJtdUojevhBPWfVGBUZB6Mfd3okNWdLTDoVwg6JQ93TRgdRPmsqkGyNtERH8TwpiF"
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
