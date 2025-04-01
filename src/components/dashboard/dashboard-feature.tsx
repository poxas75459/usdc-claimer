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
    "2dUByjnWNjPg3AEXmhb9dWoActJQTodxa5KF6hz5bavJzmQZmMXGkVYkFpGW1hQzwKeNs5DjoMBGMcQ9U8wmwmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MLLeU7wdwJPxVpFWb8nwSaTMPWcLyGTZmrPfHdyfEs5K8pwVw1AGeys3xJbM2q74to4JYhPimT53DS8fbFNZfUa",
  "key1": "3mCN23jkDgxQVpRF3FkyXR6NkcTwZd9knri57KvgU4BSY6RdbQq6mktvCryHA9eDF4t16GR9UXkLfoeUEApzEKAf",
  "key2": "1oWk3gZN9eNBQaEZDbY3s236rLCG2TqAF4y4u6XEYqqjiknyfjFyvAugKHq2CguYwwB5bRJfdMhSsL4VArYkXEc",
  "key3": "4Vyuz2TQ93tiRqtk24Jq5MQR2pXWLkwExB3DQbGbXCJkuBNPSRFdmCZ7Ae7SJfeg1NnYxLyYATyfRsUwVeugT36d",
  "key4": "5KtBLjchAzFPPcXymbYJpLFg3metikWi972wGu5TcS9LxvDqyv56CE1m4AQenrKiG2CHj58UBWwiwQBmsdWo8YGA",
  "key5": "4tJQfQRpzqs6euA1UotBf2AbETWk81w36Jj7rFn7ELPzVhvAhpNHqppjxqVH8v3838cMjmESek65YmRAjkkiytNG",
  "key6": "2v6ZbKvQadKTGG8JMzHgPDr6CMmXFJWDh1H1LXG1sjZTcwEaiNU2AUX3a9JTmaVYNhdtkPzg6mLBJbJWN8qUA8Cp",
  "key7": "5zkwbbsQZDpRox69nUi26UampcTAYX1tuwkaEVT5yzoSr2x4XPGHY4KgQ8JuGTmETWRCppcKCuKvjG16mub1GKCY",
  "key8": "5n4Mh62Shc1JMpHLLQQ1XRS1citRtxk7BZxdoHLCmPfV7CjMMQ24YE5seRE11bZjX7bVUVMtDo95tVzwnRw2xD13",
  "key9": "51LhNCmPpvZtCGT5gpBKjxqZbWQohJQJ4Rg71uJcXfv4fQG2KGxtSL1RdyCnWFoFczPBqyF4KuBBQutLPrBgGvbr",
  "key10": "2uN61Y7XbGHv4AahaH7ynZUUeT3ZXGw2po1mLSJJ1KvhHZsAMBCULTNvdFwspxX197zgXrCVdi8mHGG8D5cvEC6R",
  "key11": "3Jj2NMEUgTDCdAQENsVDxE4wVS9Z3KtyGaMPHZdkmKXzzoFcDHTx4Le2jSSTSz5T4ATUUKrNqVsXSKZUkY2sAbeT",
  "key12": "2WQHud6AYCKpZCzZFtDY7JvqSDJCNyePnk6pJKF2ayn4q8z9LbFuy2YSQ26MgbzZu2MvQwVRgN3V74aZJKevoDUM",
  "key13": "4mHnhK5fHie5JwigQVWpto5NGSf7uUaVXJ6K26oHyz9w9ZN8rjeGa96eexkVnGzmvR8ZYpmSC2p2haW2VxW7uvzW",
  "key14": "2w77eJUS39TBBAU3GuDewx7idXLKSSDw2qHpnPz5YzCaqs2W9q9Baw9iTwzJZzXJTcnwndtG78UNnWq4kmk9AcY9",
  "key15": "322Fgznoky6brh3GZ21dwBoturGZ9dx9wTQP8gtEv1E4LESVGQyTQARaWEVbrWPFUj6tEskUK2oa2d3GWoWe1qub",
  "key16": "4MdsBE9wYcrismbLcWXo2E4VfED641K3jqBjkFMhC4bPvPZZ7mjfpiaJJxAy4VcH4EXZ3AX1ooiNacDx5rnZUbrb",
  "key17": "qtY99hm2d5iozq9R4QfsELGJFw11Xm5cu5dKQAFU7mmiUNy8JGkkAFqhUSUYpmrkirCvPuzarDYpUgKD4hZB17D",
  "key18": "5RPz7m9j4QHxgbCVxaxd1V6UUGTm9Bkm8kD663HdQ7rUxqNnvSZdobms1S6nxzYc2ViFp5EkeBJwt78qUf6AonhF",
  "key19": "WVhNWA5sqavfFkicEVCDsRUnK5P7MEPi12wxVsighe86suRx1oegQZrCAiQJm9fCJWVtxERm64e6w7RyTxHYoCY",
  "key20": "2Ehxgez5VnKo1GZ2NPwZGeVeEA39QeuGj75Zac2XmS2iQcSy8zQ2oHGiD2GySrinWrirHQWW6jX9TsEpg1pqVmQn",
  "key21": "5eAAGXqTxWXH6Up2SWefPTMFHpUs1exkYLqoHjGfVvvvQCgkPE1oW9RYWGvQTiWLe3WTtfLUMuwRnnpdUU49EYFM",
  "key22": "dvgyTLN1FGsifiNjqjsLosDoRgerpAQkLwCEf5s9aEuhRhENyUgWpJYU6cfkqwgTupqvbsrCrSZRv55DmbxmR9n",
  "key23": "2ugdP3FquhanbV5P7aBPNqJXXc3BLSkEhwg7MXn8esokmUxc7juK3b5xCdsErTu2b4msXgZa6WLja1o8AkLhxPj7",
  "key24": "wycZ81Dz6A9y5nynb4sjuA5w2gYmnv7WuBNEiLw5Hg4CLjSg8QAFNojgKidKJGL92UpPqgC3tf2M9jMsixCC4ec",
  "key25": "3d9uMJs1byao5H4JPEXukjM86zM1TSNVjJEANeAcYicQNsV13RPMoYknGm3cTBFDn1sFF9JWRQYeETFwb1yfUfTH",
  "key26": "4YYDPsjzEqMZG1mEgGekNvmhw2d1TdBqQFKvHCfUT6g6NX4ykMLSwBxndrFW8AiJFrJ6Nq3r1mxdW8zAoFNCZC24",
  "key27": "24jXtE6rKzGa3wSRQKufbtJ5Yg3P2rfQqvejZw6Qc8qjoBYXsuiuiGrdxWvDVnPEdj7iVEnFRnJY7EDHP1diiG2y",
  "key28": "TsFGhWauANzvuuEGChcRqKYKtbdy1qbRQr3Ux9nRMW9zTVwTv4JubyvLbVrVDdKD9nNNv6iWgcyLZbUFXmTeMSf"
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
