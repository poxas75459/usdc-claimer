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
    "5Wb2GDWkoNdMagHUNcLi8kCLEUddWx7zA6Ma4qkPQHCEtP6EufwMcopphBJVt3tJ5wmSsxeLHH8n3jc1sKrJuXvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bmy1ygbKLfFL9HDGcfiYtkrhvtK2JLoQMPE3iRWPRUWzDfQjXiJrPuXEmZqgeDhNJsMAwdFbv6QcMZeKAgYCgWQ",
  "key1": "5JX2hkkjsuwgbTEdAYoCU1nPiFBDmFJq6juACkmXg2pBFLfdGg7gQUkrAvExg5DBvAn6V6KrS8jzV9ARwvhM6U7x",
  "key2": "5AHEduzCh97tMkRmQbN1dZuYnr9ZjC8PdFYP2kHhCF4Cf7n6gRW8ynxzVEpEqbk7uRPk5RdmLQnzHQMiQSUda6gA",
  "key3": "5MMkx66Qw6nna2WsTHvuuDV9EwbqKafQdrpKAMVZUyioBS2amTiuAv2t97ZiuCzj9RpqbS5KwS7D7hTFtcdRTbyB",
  "key4": "5Er8d1WknrR1vyKDJYSCoYtjdwAgQFKfk8zV1YXyR4vt5s26WCbrrjc3Lar6sZ26tW9xTyS6sqgCewAcMSHboMtp",
  "key5": "2gyDNVDj4y8g6N2Skpybi4bx1Gjo436bCVuqhkELPu1UZEkc6TnuyG24Wg9QZQdmhCPrzjf9LSEGYi2AxUNcb8Tm",
  "key6": "2NVJ79pHdHdS6wE4jWtWoDbqG159386TR1vEzVYHEmxV1RRnKUpviW34mewW9UF4thMd6J1rishFWrw2nVvwW4Sd",
  "key7": "4P5M4DTvYC2US9gVpNqG54o8tyVd5i9DGmsZcNYLLdj6iPi8a3s3LjBgNGy4yPQKBppYg3vfVMrq5MpWnTXxNsHy",
  "key8": "9sonR5Ecvawd1uoLZ8yAcxAz9RyySisRpwdbrTuR4myU9Y6ZoeD7MVux7AtXKWHt2LYvcGiRz5n9Gh7K9Hak7Uu",
  "key9": "MMXR18RY6jwRBfG9ezZvZdfmGdAox6ihuwRKTkQYTDbdxYmP8zFF9w81btuenKTR1ZRA9Ta72omwyKBmwb9Lpsa",
  "key10": "3r89WwtHYN9cY25tYUEUkjZzD9gneg8Etuas2JX29yiPJktTPDuLE5HY85EaRente7nHK4qMrUgC9xPfp1sztjZS",
  "key11": "2yLeU9hdmi5kymaAvHxBPgX9KGZxcdoC4QkV1KJYQdoDKZJ5PJfEg1dxTDZg3M2G1cSnrZn9yDs6SkBmLC7WwWz8",
  "key12": "5t7kzpWByyc7BY4Dr15SE23EFJoGEm9TfDRqnUjX2CKjANcVujiBjaj3Y2e3d6akhtqcqZ8AvRm99oFZtcN6VXCq",
  "key13": "2Q519ZPeYfe7VEGBpKGqLmcpLYKXe4uTiDt4X35Mntd85u9UTa9j7XxgoLt2dByqTRpQwUjQVTrhGpCtPCqdbRe1",
  "key14": "21ijz8Lfg7Wed6EkvZr3ViEstMRYN3skDYkhLLzaCEe3ag7jtSWXGXXcRdH2VYhoikoWPEtGHUYe4FiuEXAa8LGc",
  "key15": "21YbukMB5xfdTHEnA6TVEE3nScVw8iT727pWtG322UNpWNjVtQwtUcAy4VH7mkCGtkg97eduyEZzMiWYTAy6Qz6n",
  "key16": "5rte4zn3qekfZw9b4MKGLr5v2Q7Wry3pcfwNTDWsYU6xFqotuWD1WzUWh29yA3zNFGxHNdxRWyAbYEMvND3usKfM",
  "key17": "5RZpUiykCb35iavGTsRzKap9jeeUcuDYH7XzL9K4BYPHxEZi2E7Hcw6dmQydi47Ejj3Lu3hkWCKUB1rm5mq2Vud3",
  "key18": "3MmjkKyBQWyUf8K3jqvksGHkvS7QF2Nymuia4VXMqQqzJhdma5XY1SDifib8bSrrRMNuRtgFq9bxc69hZrQKG6Dz",
  "key19": "26d6Bp7weHL3422FzRsBu1SD2GJK18QoxHgGWo95oKhLgoSynKNhpQkLwQxCBR9yuS3yMLFsBrhdaDhCPbD5aJxD",
  "key20": "5FnJXJPBSTgKNvVKHcsTUUzhnm47wAsgWSMqwe1iZxQs4hBSibf8tFqUFPrRcjKRD7c5b7FTV9nPA6TXzcwxafqD",
  "key21": "2h5my7VsttKtWKiV1GDU3R2SrjGa7qmK1B9U7wJXNfRT3AaP2g3dK8qnL3BRKnRB2i21JL3AeCSggqZMixBkBKd8",
  "key22": "5rqUPypbMqc4wtKbxT6ui6kD1inZtw86jnUqp8U4LJZd9zRChZ1ZHfq32whnJdscEqWwhvNbXj4oDRW5sXQT98sd",
  "key23": "3ADzTgiqCcfyHz6wxzCUasyUeWdZgFoKhh2BFTm1v9wCpFmzd6NfP1kdeSrqFCzD8BfMaQ2RbtjsvCuzPJzF29X4",
  "key24": "4qHhJXFMxH9s9jQeaEfS6PEWkLqejEacuLcubJdkJUdt2QVbYXbWpsj9oX7kqW2W8WBkXZKhmfYSJwaRTzeC4wM6",
  "key25": "4rF6kMSo1yGkNe1VjVwGZwdWwVuZ7KKyrWLCWnbDeEdkHb5zUsCMtvHfm8scgwMoka6mh3ChCD68TiMZG6jwKYQq",
  "key26": "2BJjvwmSB2yqgJgPwHBEg448GnrVRe7CeS5uRNKk45FJYRZRyCkzeHRyp4vYiLPVk5s8WoZqprApfLkuqwtKs1Qp",
  "key27": "5fi2YNaY93gPXVvrYRv9bkSmrim3v5guwNiQUyNiGcf3upC5H3SfLrqZLsbas7NPjPXFfVEcayBTfXLKc2kh621g",
  "key28": "27EdaY4gos3oRNtGV9BqD7jNnHbMigkNjAmg9xGBRViydJ8aCrRqn8iRbereW77v3zP6iXPAeScdvzAabvD3uhe3",
  "key29": "4drRLgzC2hDmp6RZUWPodnZvpWABsiWVw1drfUBzc1HRit97yKrsRFo6FViwAmC618dhhAbSPAydhPkmhQd71jkH",
  "key30": "5rRZRv3k4jcjTFmDn91gZfQRbEmryCVpzZtATM7YPxUatECa8VhtCF7kFi7sDNHBzjJjMdbK3SUUrFNVtawijjvN",
  "key31": "2ifpwLGD9viq4JniwS8ZuyZoJmL5mgptR4cXeo1mdKbRpnEn8RLiJwi1M3Sbq1PkFCSWXGRiRA3TuvC5qAowUSv8"
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
