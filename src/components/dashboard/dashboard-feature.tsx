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
    "MPQBLDeGqdkog5gjRc9ndeKQRh7SiJwDjhToVZbAwN7rvkyeNdwBV1j7XuRRHTKNWPsGNQYCuN1Pzf4GLXwoCd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HDPQtqX1a8aJtPX1Bpg8BUeVgFejUb4FJhMqCCgzWbyVeQrYmeuaisCkRvMtbHRGQdhHwPHsnakEcNyA17xXRWR",
  "key1": "4TkEqdfkZMVKUbCXeZsbq49vXEQYjBLUwrPwcgyrKiVLzoJsaEJNsS5wz7gU9p2g6soN2cXvvmmc12CGKVXVpUGa",
  "key2": "VYeio98ewgavFH6D9QK11gYWuvZX2rcvtFtRXQNVU2yJQKH2WtNJxWtsCdTqUJgLPcvDezDV4zyPp9q7xLQUXgE",
  "key3": "CPDmqgMnjKxbhZ4joYk7SasoUkA2dSYsqJTX6Ysa8hPq1kqhgvvsynRJ3M9mrNZLBLD9GNfYFoiP1dBVjW5ey81",
  "key4": "2CPsxkH3v81iRgydjzShtStnXUX6ev8GwA4fmqyzjrp99L3vYmTw7xWESjzBLqWx8RoretuDx2hjFga6utLk5gQ9",
  "key5": "o8FMKgdxq5pzeMbn8tzhdM6dWpAh3fWw8ZirpR62J7bTrk194YQYVLi883kG1ZmT97JdgMZzEztmEn2jFNEhyew",
  "key6": "2asM2o4VGv9DwEF67NtuXzuDWgiKTHFmfVuNW4xbEZghsM34Uq67TAxNgu6CYzPuuYvRMBqrETow5sjvs2YD6syy",
  "key7": "3JpZUiUxk3jUuLd5H7vdFcbsdbERDyWBE8CycDE98pS6AWnQNELm2AVzCJeHFbWLJEgk97dBbzBpH2JSecZsJKNu",
  "key8": "49qLVNYi45dob1KKyix5uHVwAcDbrwXzaVnn9tq4YWkB9X2e5946kd73AH9M2VgzdVCc4BftfD7FBfDJnXKm2VPe",
  "key9": "5FDzHEvzENmgmgguBw6F5BdFLizcvKYBqvbgj63ke2WDreaGDDBSbPS1ECUf2WDypzG3UAmKoeZswBMQxEByuNqY",
  "key10": "AZoR45NKgv1FFSqJRWMqrtARoswQ5Ekpcaq2JuH5dp6onZFXLM9imKNZobzqgWYcc2QxPgsG4MzV3j3S11mjVvz",
  "key11": "2hVfLqyb21pQJ28sTYeA5suCh8Zy55ekpxsDsYMumFBi1VEF1dYRh7X1jAgPo4fPeKUw5FLiuYNj9NXhZgN7k3sq",
  "key12": "XHAJbYzZ7q4ucHvjZZgN9Uq7dQ2R4D1AZgWZo7Jkd1diXmkNnjj6Gjh7wznjBGnf7qkxFMwzCeSbXfi1SxKoZ8J",
  "key13": "BikwAeeCDG8PfUU2WKfttrVjpx7bucJzH9Wk3ZLT8Pe5c9RnAWxgQkdjTHqd5CXqJcGYWaKZEo3gZgARrewm13Z",
  "key14": "3uFN5sKxTCbFY7bJJL1vZ3SvBUs3MtifutUfqsYrDohWjn1NP7S8VCaVrFwTH98ZZrRtKK4THZ2TZ5eesAEcPt7e",
  "key15": "49wzJbgFprGKoumYKPVDvdTHxnFcBKFLfZdryV1yz5NPNqMTfMYZaQoeyTs4yM13dMNrxdDULuCaqQiJqjwAtwrR",
  "key16": "NGz1EYBxiNUiLfwznZHBLxeaKSWdfJvgc39UaTXbarHqudM1hqxrCJ2R7TmJtMb5Qz2Tw4Wg9EGunmmh9uyrWFw",
  "key17": "213HhbSchXW6DQtqVerN4u453BVWCTrF5LfYbxYABL3YFzuFZsQ7deupjeBNa3rbeHfHEEsQLweSt2D8BtHw6Eiw",
  "key18": "2nvhGbikxuMH5pchBajCsLjPfxeRpiE1ogFKdUPYL5YZTvB55db7JJug9StrTEbG4vWoWCuRmoczuKrRpzhZhQfh",
  "key19": "aJLcBaUZkaaNo1jz2HNLngtJT3vqtQLLqd2wvnUvj5U5EMRT28AcfN9VrYqi62qLntQiPkMK5piBUTin1Etbado",
  "key20": "5CBPgae1kX5qev2NBc6wbidkSsCAHdAH9gFs88EZGDaxoXEdRac9uy5qdRH9upz2MLVGyRRCPg1diS1cz2MhWgTB",
  "key21": "2hqg9gcND9tH4fK8VKC9Q2HNK56Sbs2SxwdcUbfsLyBRwCqVfuzz4JHFQYPsuARxB8g39ZvdVwWbYiRkmM5jxJpb",
  "key22": "5G1FedDHfbkwEBXCniwFEDsiJvGNv9gCw2fBVabYh18zbrpJKfSKgWpLm2r2ohzUzN5ZrNnbNWYvmyaNxNn2sZGh",
  "key23": "59V53pjifELBGg6UrJDHxCftTpUGXFpTpKRnJNYZThnHxerpmscBn1kvaBgSZN5b3DYyA33K7EaBRBV4MFrcQBTd",
  "key24": "63Y952dUjupgAFPuWufuAKeLiRs1ZUawYf8FZFQgMiYRyxHWD1XAfv4eHyPsBpspwD4x9uVBPxKPowMzfVQnyyuR",
  "key25": "4NAWr651ScCu258EYudLAYbdD8UvBHebAQcQqXkKTwcYY84H4rLp8kMnX3SaXW4SfXXoEZyhaB7X934FNUvSkBki",
  "key26": "yjY6cnpaRwwTqM6wmTkcSBQjSs3RVzS7pZjabXn88uH5FqPaL7DV7XitCV1Mnujq1JiKSkA6H1uh71xS9Y2GpNC",
  "key27": "D32UvoUbJxjWmAN3bZ1MDca1qx6vwG4Hdk482HHLDQHCQCjWqkQL2aJ5Kg7YgxcCZ2sYr87uyPommd4d4Mh2cn8",
  "key28": "2NXmmA6BbB8q7wtzsrvfr56WaV2stHmL7SfG6WzTnXkbwDvXcUDeZqzL3dCjhezrfhcLw3U3RknZd4USme4RY38c",
  "key29": "4o7eu6839BkVFcADsE7vz6w9CicnypLGaLKLYMCGjgJTFMChVhvs4XLmvUvBK3jvZVttci1CcLnV2Sh1LUnuRbzC",
  "key30": "EecZ4hp5KYwut9JVjuS13TrRbcVE8cHKjuVqYFzpjTmHHfXY1iEvQ5K8pgpVtgUcypt8hMj5dVDJBj8h8jsT12s",
  "key31": "4FXyJ9bPTuHRMKPADTF416Dk5nWhw6H3rLTp2Jv1UgLMEMaMYv6ifvo7utKsSisK5nr7MW28v1B4egvVY118RYjS"
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
