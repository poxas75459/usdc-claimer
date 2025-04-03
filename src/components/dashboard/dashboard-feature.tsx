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
    "whnH93g5YKCovCFPrQqf9TCQRBsd7bvvEnU2dcTr9LFdUZcTNScPhVYhbFiZn1ycauVghFYgLVfHSpKRR2NnUix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bQtmMyhJ5XzQr6Aw8vD5ZN3xQrKoFhCppqLrGoJhA8j1p47joWBZF749ibX848vmMSEKk5AocDsaJy9nMk1z9hE",
  "key1": "bn93hNXy73CDmGfJV43ttSR2S2TTutzwLtTckngV2Xg7mxbss56Py1JUynZ4UHdDevNUpEUFo6hrZrum5QeBqn7",
  "key2": "4EqQuGJsU31Jc8maWUjY3zA1z6gbJcGjfixWBcbVTS8pfJhsgcopnzNgzLbUk8TopsoG5WkpiVBzpqjrfVSzvYVM",
  "key3": "Qj8QvfxeiAeNQ5bANcnkzTuXPfEeSieBGktygYJzFZmenpa3MLrqCciY2h6c6fTnB146kvfnYxiLd2xgT9NcWrw",
  "key4": "53VNP6W7HtcCXFvtDtuZua6FYw64H1dgymbf2P2Rb2KGwismJXF9zxyf97ujLxaHEU6VJcAxX8tHxbve884rcyVz",
  "key5": "4ZtXoTgFyz8HX7i5unRPLnBEX4M63rymZWGKMfmcCje7HJJfxnn5rkgEJPYi21tdgq54jvn6XzgZirt1xX4sdYYs",
  "key6": "54WtvqN9KAg2Xu6U1YZKBET4taH124Xoge7dBPHuMPUHgANGHu7Ta2u8SDLcEYK3dGPC3Y7smpjykfMRrysb5YUx",
  "key7": "393pvxdtNpVJx8ugzaQon7989WxqLRZ7cgdze3s6bpTRvrS8pfCaqaqDYn4t32ivVeNNZSx8zQ49unMiT7qku4ji",
  "key8": "5Un9HsMvKwX6urVXtGHGp3vfXyky1fqsZjn2of2gRCoEHBYuL1TEQejyQrcKT5ja2VvVez6SqTx8We9fVaom2fzq",
  "key9": "5xNjsLFreyGWurseRXTX1F5DTH25Q2may2Z72beNcJyNytMC7MCv8JRf78Ut9XUXHPzzQLFzJgF6AxsjdAwcSyoR",
  "key10": "4X3nJUkRgzRs8BojAx99GPpxR7pzzrbwn6e3VsUStMJtZs8PwE9GELCV8vcDaw9wFLENYP5fvJ3zTDw9yq4jfXgs",
  "key11": "5prRtP8kGf4sGBmVbdfFjWs7QJMn6V9ZBZKYA3nBxyhXLvxoCnJThwvKA9t46V6SBgcqq1B8REW15osr9AfvupSw",
  "key12": "67VoVZgb98Qo6GqViyupACMLSaxp6BxMMgX4TeSjTrJvDWBqvrAQv4ZpUWT2JhSxHhet8CUz1GAtnB5nS95vDKDg",
  "key13": "p6Ly962uVStE5oDX2n6jAgjZfL4QWkDr5bENRHpbP7CUPbu9PoChfymadHzTbXSmEFL2m4ah6Q5rq9vHtHGk66g",
  "key14": "9tGNJDqcxGczoPRkLZzovsscysTidKYKYmH2KT1unq6MSRtWibbZzZRUSMxURFh3DgxvszCSWCUz9W6yKkzji5M",
  "key15": "bMLWnG8mpzbe5SEuFMRtCmc8WDACkNG8jPCHnnUwTViyuNExoqyimVLW8xAAM3HkW99uTU6jaWwsx4cAJQk4qXT",
  "key16": "2Dt5z3NbKj9kWfB63KBqZJB3jDNKmVcJtjZ7ZmizgWPiaqBu5kDpmWXGrMCAQFKMRrz7RttHBKpQnE2GKD16JA7R",
  "key17": "51UdY75bx9aZRKfc6fb6WRwURV6xARdoLXcvQrjmRVgCgiXyo7mAf4kJko9ypo2jhPBtYJ1GDU9ThdhJUicUKDR9",
  "key18": "3qZS5iJmmf7gH71BoKm9SBtmcKY7oHTYozvknAh8F3Uv1wUxMurKJCbh4DrSh4GgqQbxeGbhN6tfTkoqzXLdvZjY",
  "key19": "hM3oAfaGRSN5bg8UpnDCJJYYoqamDeGeuVKEqEMdmdUpgGcB3jXqRbbXRiYNujS5crYWr8HHrRvuMoSSXWpyA4E",
  "key20": "5xomJLgVJT3jRkFj42sGUuqfvfq3NjRmvRVRTjYuwJXXehtAxSbZDhCLkFsNJnbM3qqa3ju1rLy37vexwEVyReY4",
  "key21": "66Lhy7GSvhkpnDRs7bhBNtWbcpEJywotT6RQg6Lfhc3LRbagUxMYZF8BAyq9ZNq7JhCyUV4dMQSogNRftpxKKDaM",
  "key22": "5ohsZDUmYk1APZoJDjpff9CChYMea9HPhwVrnxjL4TXHn6xxNfdAZf7Ff7HmQpUGYSb2rXP68EHs4NFrrdjDRpz7",
  "key23": "5vQeqezKGSkynYoAnXnfNezFQXNkSxwLgsBUWU7widfZG4N5oG3DDMKBRvPUanj2LkoeQUsLADH1krYSPfzXBeCh",
  "key24": "3ijZe8ijNcG5T7MT51aaMSmhLRDLgBEvzmqPyZMCViVF8gaF9d5jjE9ETuy7fH4UBiLhYfWnmXgUSfyVqNQFwV7T",
  "key25": "2nM5cNjH68iC16wjFX12fMSngLJFuydH6JeHG2LuszosMZYvwQ4YiP4nu39SEpQpMA5RgYSQ5hWRcCumvBq3ioJV"
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
