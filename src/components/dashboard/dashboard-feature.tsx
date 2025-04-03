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
    "3ibDuXaHkkEpawnNntyDh6QzbyrEz95ymXZ4DMEzGZnHSNZSo8U9ecXZVnN71TPzJ7Tpai63FP3pJKhC1sYCWcn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZNuvy87dt5NumV822gUMjNRmCYAfnerMHt1f7TzqJCsaUCAx8t1WLAoQSTaadM8PVXSGQRgypDWBrrxvU7GzGQm",
  "key1": "4M9stehbZ9e9DVSXnr3HzfAPHQ5qk5wHkW7KRgRwzP4SF7WPtNoaM1yEoaUFcEriFKxMRxB1aUy11LG8Km5UDLNz",
  "key2": "52XxvJHdduzfrLi47ixWab7HtYDYEK2CqUgZAKi72wDxQTazX7euqrEQVCb3CpTjKjD2eBYeFrBWPvgjeeX3Ry5k",
  "key3": "4pCugnwczVzPqLkTL61ZyfiSzsB7bc3EsivsvLbxHzCJJwonqeXsUaGjDTzf4WiPNDxfjLvherf88HPXNpfFJMuK",
  "key4": "5JZZdaJ9P4Q49akFGi1AmaWEa49v3i7nMj8wijHem9bSoH2bSd7xV197qMyFtPXZjtb7tRdqg7WkmeL4x3NKVnQ",
  "key5": "4Adij1KePJky1naEfDK1keTY1q4QaEeS3migoijudGJt5eFmzLxLz4iuCHNe4ST7z8fNFwZ2hMRWtTx9vTynTgPV",
  "key6": "kCtwnFAHxcCxN879MNZGebmwTUhzKvhjMKWGF1QGGbFmdEHkWdhBdyf2HYHxYAfQL2C2ndNRDithCJShR49A6Bv",
  "key7": "2uQu4wu7V4CgGwn5LZS4Fa2Xv9GyKbFXfGYvawKkuX4WnhRiW25KbFE7DEP9FssrZY6ywFhjadqpug3LVA5yY8Uc",
  "key8": "5eR4ZDhpboeimujX6jM6fQ4Qb22sd8Wc6BF7d5Gck3iWbPbh1SrYHb6dWUquareazuTbUY5erVGE1fSCEMPHCvpW",
  "key9": "3S25UDBY7ASRNwxtiQGGYHCn9HJnt1Jm6y9b34Eup6kA9yDmPXwT7qUwq6VMgggLXhz5syw9n6mRMs81afocLwtk",
  "key10": "5GvCB6ETx7aQmEPEwoHArGKhjYcHGC3Y4R17F69qrfGc61g6knjnV3S49BZKWNuvokQkFWXHUNkJ87q3K7komEgq",
  "key11": "2oCGjPwimQEZ2CuFKsQcr7vGZSjVnpx418CoepBDySoqyh3PMpdJER36jbBYjnQPTXctkdY3GpQBziwwxPTbnX8D",
  "key12": "3VY4ySMtb3jQLA8RNQbKfxBesvT68Riar8UkM3RNdRAHJNoeoSzdywJjpHg6v1JZCmqsTBTJTkCDTNSqTJ3YhBYU",
  "key13": "587AN8KEZ6zsD9chAQdPY5dYznz4yKCcq84GzHCGuY8KS7gGJgLoJvoyKXHu8cb59Vfvq8ZRQ6uSdXwsan6rceLt",
  "key14": "2XohQNssSTWFS6ihinDVKAhU3WRHarjuZLhjuPPRavDG6jtXy9eZ3HDCYnL6btVmYNY2CnDRxQ7W2ZfwzuzZzWF2",
  "key15": "66dUEaBgg5VVnvx9B8C9VvGd9boBc8k7fuoAF8PSD1CeTobzBgVwgbzWegQiReNPDiPRcpWo9n7MRjLkfUR26qFo",
  "key16": "5sAM4tT9kXaMfidLTom4aU3UZjJ7ADnVf3YaqfpEfD83ENCUnJwsCYdPMdXtKZtSMxrqmp11qDjTacTcSg5ytbCY",
  "key17": "25jDANRUUTUqNfqungXwjb4GVJPkBkp8sHq9YKTwWjhPkEbZYLLwWbxL4qWr6795RSCfbBsnbJhi4ziu6P1GREUq",
  "key18": "64x9mwjV3JmiQLt74ogbzbyYZLn2YicxhHSJ7UMxP9R8LiBiqWkKJDwffBbMRA4Yz3NoNKn9d3qfh9ueavBigK99",
  "key19": "2jW13bGGN666XxeB3BPzmHNSwVELc5GmvDRBwM1SASam7qHUsZPQPA8EDTzbRKPtsNU7CwguNEKpXJqAuo5r7tc1",
  "key20": "2uu8G1PHyPhfQekgLkPNiSAqH2vEWg6n45scoTMfetVMXugLgZLdSxnhKjKE253tTCKNnmXhGJtBHxk9LGwhBD2X",
  "key21": "2NiyuJe2rzBL8jdUz5wnymNQ6PmEgtqyDAzu9RTiSZqAjEFrg8Pdu2AgySWpJbDEg8Q3MPGdP4kAYPji6LqrL7Uu",
  "key22": "5fNx7Rkjpmt76er4oS7sooneS57DaQzJ2LbNckxRe5UiEUDJyeXP9rv7d5ZNLzPJ1DDxr2o13eA12xPsnKbsJuFZ",
  "key23": "5LFGWzTBwLoUwsubUCNRvLNtk9MmunE8vkeJXQr7s481CDp4L2iaHtEvY4pVFWCkuT6F4noJiW21buTU8yso1Egd",
  "key24": "5S3h1kNpCSZS2q21aFUfSAQJtsfxMeBfRfY7LMsmPJw5HzrmkrPrSx2p8T9KSyz7XNqs9sXTe9613yGiRR6LF7ZP"
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
