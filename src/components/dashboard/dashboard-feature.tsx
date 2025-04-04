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
    "H6LiVSrXk76sbdGfvCk2F24JjHFJjhHwR6sgqBL8ECCpXb42apSnCLx94dU1HoQR7NtfsdywKC17Tk7hust3gYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Ata5cAnUhCeK58TecuJ7E6U4kKpqfh6SmcDwLuHeR2x5vi6rhBRxV6gFMY8G9dCJFuc1KEZYAiaokSMz6ghhP6",
  "key1": "4AaL2cmG1FzGjG3tagWN49GUJfLjZTgHX5C7sCXtqfR3i216c3qQjmka4QXqBhftM2u1ZZhJoLxPhQuKDZPaXCAs",
  "key2": "4h84EQ3NBxZoCUJU8sUw3VJseMn3jZpzBeCyqgxj8YH9zR1SxBifeNyyJ77W9jfUJLycnstig6oEgLaWfhonyz3S",
  "key3": "5dQuM6M3en18wstXgtSDL45aH27TVRDwFSzead6bNndY26b5Wkg1uoYCNBatMpXUv2TUYSA6VfwVB2DDDnTZxDdp",
  "key4": "5VR7rozLGpkK5ZbpCUrQHRqx2iuKUiKbmqRT9deRgPw8Wq7aGprpAN816WrPFFKikvibmVFg8qTvXNb5VW59RUhk",
  "key5": "2dLD3GqB5AUMruriep2wa94uXVAVKwFuqsEaixyuR1LRNGJfRzx7jaobYcPM5FPUFiBwdVMtdDnkQBa3v5vXkaV2",
  "key6": "4TWmoPQgGwd3uUdL96fxaVKCq1UqJJLdRKRgYa7mEZDo9obJrfVRkkyr7hcEAkcReteTLAkDphbpyd1jrrattKSQ",
  "key7": "4uY4EXuSDANCJ17nU1jcRQKsCXJFH22rE2dkqHDgKTz1wiHhP3HRtdV2WxkKAmejcm5y1DQcE1EdqhFWbjSk2woE",
  "key8": "4xGi4EvV1dcL7burc6q8BpJ8ML839EP12kCrq12LMtquaUbocccH4JPvXDvcSbsY1xVw7ZuqbbAbkXMeSu8hYS5C",
  "key9": "65J6EdNxBooH1G1iC7frL2sHJoGKuJacp7G3NigubR8uSEYvX5wGxY3sFdcyrsx965CstbMRvxLyehYJThCfGWqq",
  "key10": "3KqKfB89VakaamioG7cG67GLJQfQ7WZgA86wDEfrsrCqRc985VNpKFza1df5hHU6H6zS62gKWXGqUHKrqPMGCWf7",
  "key11": "4FasKegE163yP5sHSe8dzY3pvhARr5aG8c6WouPHZHr6696yAcu8xPsV8X2q7SyKokU8YWP2cVd7ZKGqeaTBQyo7",
  "key12": "9M52guCbmgNKhsyfuZzxUMABs9K9tRMxFfhsxXyDZa8rSctKmpVFaXVZ8xFoJTz58XnKeeYV9AH6LsxUzyXtxEs",
  "key13": "MmGPg46XdhTqEqMwENsUPKoutwsRTEsGVRAGZNfnqQK26AcK89QPUQrSR1kco6Kd9hoNeL5hN6DgvvZUUPioz4w",
  "key14": "61RMp26miCSxYnsW5WWPn12U26WDuEEKBxsaVAA7omg6NXXqKNRYovhaviFSBWpdGPrZgbyrvFwZSet9EtBAjcM8",
  "key15": "2iUddkypzTYKQZMNum4WUGwkKgathv7nQSfinjHKuT6hKuHxqgpzLnmZHBPx4dAX7Z8zVQu2JD8WvqQ9VHLinGKA",
  "key16": "5NjrA9drNmk8kEkNcW6iZBy1xfGeLkEirHSyhTA7sAbozmRteAWYdK4Dy1N7yC6zbPE1aYZ3DYVouBBi3cv1eFg3",
  "key17": "3vX8kYV1w8mLLTdHSt2Muo8WjdrrNrvXPMm25xcCZpvF6n2tjsaevyRLXA8z9XKe5nfLagKf746xCX3y6yupuEgE",
  "key18": "4xEBfqzLE4HJTyedEnUL6XyuLP4yzvTWxLMih7Ea9urwtcB5P4Ah1RUZ8A7JXWKjFyWzTF9WTBrY6WntTcfi8wNV",
  "key19": "5VfwbdsJbEDjomeMyq8XoPSswa3XPMot8prSHy5Mf7aJ9LipnLkxFX714PTpK4NHcTVLCy4muQAY5JSmz3hq85RS",
  "key20": "5NrFRqztCkK1jPUSwUKc2WqLgaPURdsrQkEz7JedvGRZ8A4aFBk76g5gXo1qSqffFc8UfjZQ5aNaCVyme1necGY4",
  "key21": "4Wg3ydKuRjtM6hwqPsTgsZoUwGguYDjuWgnmqyJfUpii6aBJYMTv8bQW4SgmyjDDMf39K1og9QBarAdDmuqtC37h",
  "key22": "2VoeCXyFbQMVBEAFMjS6e2uPQJueriEaD8FgRUFdNo4dHDkQbQdUjL79aJqeH7MTzh2uZPp7WLqNiXEwUgNALm64",
  "key23": "5iSjSE36abjV7YkzTsfEcJtviTLsFEyqR8xzMnqM3qTGVyPsB7oGyNXJXJrbY7SAr2Wmc4ZA2PKXGk6uZhcPRyuU",
  "key24": "ghb15BFufSHordHc6isXtSd8SptnqQWtSht6BmM9BewAq8xsPP7NxYmfcGBzWmhHpf6ypYgpU5RQHYBCkvA6wdo",
  "key25": "wQqeF4rmmwXtR5agXLzXePMFybp99nxhSgmnEuXzGRfqbRCnasJJ4MDT9QRvNxGpSBJQ9SnYTVHPdH8RNkWCPnM",
  "key26": "4RoPhBYDxEhNpLKRFL8A11KKPr63AqfRdBu9DFb6htNNVY1NuBmFRSWEZ1QHnQrZRwGGEU1jvDLMib96esd3ESx",
  "key27": "3cdRgZDso1jo4MzT7D9TCQ7S2yVKEpsFAGrMgugE2RuUC4gAtigeBwnM7WS9UM3jRajT78C2GJzfMFspVFKC5d65"
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
