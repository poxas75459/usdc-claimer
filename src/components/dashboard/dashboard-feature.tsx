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
    "2LpAQGKX92zbriMadKKphnVivRWyfZac6WXnrebXbHh4ccSgjjH5ZPknJiqbVBCYdQDydZutYdXU24NDJKJ4N8Q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f5Y4VK52BkesTgqLzwf464rCtCZTumB9xSyrJTnDCL3aaCxWjYdxQfAVMMRviorMG7HZ8aKGEMZpKLby9DAdRnX",
  "key1": "3RbvhdqbDRi9Ky4fVp3FYFvveBYMErBHSNMQVCQjnV2pKLA1TkBk9n5ZJA7iX6RQQEHJsHTNUgZmNjxBbtL3p31d",
  "key2": "2JYZdjbmJ6AonhrfzkxYary84EPaYLA9hQNKy8NJUFvVpHyVQeUw4psS3Pae98mKFqh9khSnQSixUtFQoiL5GtFf",
  "key3": "2SaEbR9b8CMGWAqPfSMA59KDjQftkkacpXNpTCbSB1rjK6f72EsV6W4LpS5BPSFHjqR6r2AUcCQ82wj7FjBjhHou",
  "key4": "2ahwuAaEFN7xXbnbwyHUHXKksecW3SQBVdBg5yGsLpKk4Pwaf3Zd7Eu8cXjiSJeA8H3TU2d9BSTuaiDJpmGBZPN1",
  "key5": "3wYk3YQFFPhJ5yRg9qSenmWqk3NRmTYq2Jfe2iW3ECUBHwCQUooUnDCLXiDBhndfKfJcsVYHeP3EGaxwhrBwGhdB",
  "key6": "2yCsXzdFLUHVGtQ1QujACWedAQ8JrvG3mXuBy4ddqmenBNk2Ah7kUxaw4sKqjP3GEJUxiCevS7PPrAGQVBbbUDxB",
  "key7": "4NH211b68WdhJuFsdkejL7T3i4686gGpWisGWfX8Dk8imgqVJAuSMqdRih7gS4FxwuB4a5WW7ehuD5Z9tB7LY6ys",
  "key8": "4qs3EqCUfAuM3nVhLLSrKXR4BJs39nFkyRn37xAxFdSsNRmwXWUC7yh5nTi3CPQ6Kq7NYmDfuvawK8LyWLmmRykm",
  "key9": "4qMohJFwX57sPPvR5n2GNzKV4qx8bqWhRZdMaaF7HyFJhHy3zU6aoxLcYdqQkJP3Xm29HpnKMQrtQ1zaHpEhgxP5",
  "key10": "3zZkd54qDjXwj8VsZYffpQtYUUzfG6DbEz2W3hQoKNzjmqW3RgehKdew6fKxq2cjHTdLby2DfLuLfRbusC4hy5iJ",
  "key11": "2e8eaAYVFYNCh7TeUgXRSzCyMtEAjR8PL5xv4TWzZQaNes9ZUEYznNQhmV6Ut8bZH5UuoEbBNpD7KPkxnDhgrkdu",
  "key12": "2cj6N7JhHGkSjHRPpwKZFqM536Cvy9Mq3ypnqSQ5TgmwgYUd3apwPs6Gy1yKUNTKCxiSfotAdADG2u83XjutCViH",
  "key13": "4SQLD9MPEBWXrg5f8w5jkikwfXYFGzJYevL9ZB6iQV7azCpCRQanNafb6uJVKEDz9qwn9unB9bZ4Do7YejE5MSR5",
  "key14": "4xCwaSEpDP13KcuqPmW5KhK8b5ui3tMP1gZqNq8q4xCQzSnc2NpcQgoXki4eUWm2ZXqWhGQZRb4nzK8ZSuNZget8",
  "key15": "4CUq4Yo832QkGeNqoJfx7R9QSTfpPtZa5RNwA3gVX25mLxnnpnCVYu1gvcwU7vVUoHdV48eJ9mg9GmhQXsQ2vXJE",
  "key16": "5djdpZernWrfAdVbMJ9WCG1mQkGdgztcCEbArjfge41ZjS98uHZRW43YE5cisnh5cqaWxA8cBhSGEQXZEEE5aksu",
  "key17": "2RQgjwGabKLj987URemUgoLmtpRGxeKaihMaSjGR3s62PPQy8MUQBMYY91bzPKWo836QTJ18Kd72WkrbYvGqpCrz",
  "key18": "4AP71E9niXDDanDEj8FZTHFWS4Qk2ZWAastG8H58DaYyKWe5vvaJtx4Zhv8hffWgb4TQUXKQD8doANDA19cj4KTr",
  "key19": "b8vwfGzH23qnCLKoYj3EWSpPXXMgS4HnAmjBWnTekD6tosCXsKhnbLMZJDC1VjUMi3qNdF6LSUC8JQrGPFDNe7N",
  "key20": "46TAaPpudvJLzKAZXCFykrqQqBMgBTuRoWgGMrQV3y61TmqTBD7BeXWVn8VzebUkeRwag75PhqrXt6Z56H1xTHdc",
  "key21": "4Psv6xhXSCmoFaGU9P8EJiZSVCstbxMGJA7Gw1CG1xmn3bk7MTGCudh7bMDz6B33oRvcUXy4ELbqzxVAD4ZeGayb",
  "key22": "2knvyT9irgxcduDjj58dcRCYD3k4pDX4pLBs7RJB3VgPxKAGFmbVXftSxEHmLA3S467c6TGSEK3oQZ4HuWbcWkPP",
  "key23": "3xgLSqdBHPRSNeKdhn4KydDC1E78FBrcUNNCQNdvRfkuBU5JkRmronHzhVC9YdupkFMhmg9LbVhwVeEjqLnUnsys",
  "key24": "4iGNMKvzEjLoPDW8kWpBgsbUvR9wHgPEZ3zRXmp7SKjnn9sckxNWZUqcmcWAM1Diggp3ZL3hHoJAZst6uvAgzLU3",
  "key25": "3o9YWWgUqr3NDdc15qynWmAWnGrbhJJyftKiB9WrAcPExb5xuSj1gsX4rDY7SmTjKLpuaf1annwvPvsQ2WWFXFHA",
  "key26": "2jaTLQYuRjecM1sz5Zo5LJ6jct2ECibFHUkh6MD91L13xLX5vA8ftrktCKvsRVS7nPyG6Ccx8VswhhkTGBiEzaQj",
  "key27": "5VxXUkkRr99nP9Q9znYX6Lr61HoqAbRa1W9g2CX2dLnWgGtti3LjZWBXceb2gdMAvNxMstkt9BP1qt8AArPZiJtd",
  "key28": "37ipYPs7815XZWY1Jne7joxbuvPPhzSQmeYtkKUYaFbXxHXizrfuMG2PqNhGVaKxwTb48C6E2iy3zqb587dgoggy",
  "key29": "PqwdCbrMSaF1V5usbsoAcXwWYCqNZJ2R8bsARPNWgtodMfjbtgvS38m7KMQ2tZ5SoYpReX7sEjnimEfQF9Vq67K",
  "key30": "2SqX855aoFwBZdiFFEx3Mi2A2tjPiVeyQDLUY3sCTRUdivQB1s4x917EfxPEQawumVjo86nPYEH9tQ2WF9uAf4NK",
  "key31": "2Sy7at6xpDgwEibKieq23tZYRy3h1tApreU2isPuknq7GkmSREPjB936XsVnUVBTeEjnkiRZ7d4u63gKHKsEi6iH",
  "key32": "4ihtJM7Ardc7G4nUNfZVQ7vVj8YwX1aRtiXcDS43eARkg3WuKUryX629d1EftV9tLGZtEDjxLWX1yp6dGDB7s9xe",
  "key33": "5cQASN22WMqn4BXcrgp2433V8cHc42QDiXRV6hyxv5FqFJChyy71QXMPkdTEf3ks3MWL1976E2pUKrT66Goj2pUh",
  "key34": "51QXY5MueLiWiwGRdzZKsq9NC3FBKvXCVjPtfSB1BCLGt5dTmtzQHHz2XWmVErHU5QfWaVq93eModusB48qmGadD"
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
