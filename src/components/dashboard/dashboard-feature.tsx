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
    "42qzJUqysSD2k1e6negxQ1Tp7oTZtmQt9pFURUYeyUEGKgVrb8QB5F6d61u5QxMdH55PUabMdZmVpZ9eGqZg6Ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8fKGqKzE4fLGPvp3s8LsRdqdFoynchZpr6gWN3N2y1hZ3tm6QejzSeFMLV4v8rk7CVjWKxToWR8RsqKsMNhWaGT",
  "key1": "4PxiC1qFTgS6tBNiQzgvfDh1HgpU677SMuLTGNfzHgSo7cTnEDoFySGNeUDJx3y2iKnDREokZK8dfwzqgoCvzTMy",
  "key2": "2eaoCy98HoSPCE1S7xxLdhTHcQTXrqxe4ZrSjSQ7qJ2qQ6DBLs9ZitxyarDK2fRUTpBwGuD2TjKfqm2r24EUC7CS",
  "key3": "3P75FUehycrgUKYtqvLjoHTagNq3N7gfwSLSQNKQAhaypWCnNwCvC3ULhPFL8cdgxaZawAequB8LrEJZLBbagPYC",
  "key4": "34uNQV5GEuCXerdvfHBQRBSKCU6RDGvB3tqbpoMr4ZSe5im6QXaWrWr758ChhHimZGMWyinTMv9wMM1tuMwLrpWo",
  "key5": "2dNSNk3ynL4kgjfsVBeiFyc6yCaFqTW3xi13PqNvyeQJ7Dgez85Cb9XWbhHiX9rLGjdEKrojjmJbefgPnZAApkHz",
  "key6": "3Wgcyi8Z2zs2o88Goh4UVzPSkFXbS8HTVGuDbVDTvZohuS6PKLeihVvJkknbKfKytToVWtwPAQnPW3U5217i1q6Y",
  "key7": "2XUoncHcsGThKaHhKRSYuU8JcAtwxHfWqTCoCzH6aJf88iiypvuPvipQkwehDgYCd3NZgVutoVzhKR9MeSRPMRks",
  "key8": "2SzWgQMZRGApf5C94sV6v3RYCxPYec5PFp5rYrurDaEoHenXQC8ydDzRrSVb3Rm6T5t6A82bg7FfJS5BYGKbAfn5",
  "key9": "3oF4Eef5z1NAihTXAH1C7gxbo7rYEo2Rq95ZvyUTCdNcnyA6quRBdheZaAZzntnsZcCXF8tiS1Ef4JLRgyUKrqBv",
  "key10": "2GrkxhCp5Gr7g1CknpwN6sRqQcKn9eSrVrbwpLD8WSPypkrtGLMSoYBxKkwsGbtoCD7q6upiAU1NEw7oDVKrPk58",
  "key11": "2beiEc52NU68NFxzrVnB4ekJtzJh2jP3YRVBVidCpBmDvqaDNwje3gFfDthHVASNhgBndWKHHqJrWTLQmLxZ26nX",
  "key12": "3Fif1DuazyoECj4HkPuqNKxxxedLbhStG2VmwgWvzvqX2SNxiuaG6Ly1sGsCEfrC2QiA2m9L5ohLMTiBdfH2BEAp",
  "key13": "56WyGaa2r68GedbrSCbCZnL2VCW9TTSKezwrYRd54n57WCRt91441convG1rVjH2MJqUZt1sZJ2HNzB68QEojvzH",
  "key14": "3KPbUpB1dRztqbcMRLJQNXLsxJkktZT7aEN3RuwQ9FJjGenFA47pj2mPcDhyS27NfZG9KL9J4PYjURPUkwoCpeFo",
  "key15": "39Lf9uodbd3Kq3qcny9rfrgweJKeMyRBLGXj4XG1HBUMcz79AqXBwp5X52VeKg6uPzHfYgtZ9SCfTC9Fn9uqveUc",
  "key16": "2QdjcM1YsRgxsFsuhmDnyF1RWcmvoC3UJWKXXZmfGKANqgYyJYJ6SWuLjBcPwGs3yCrkS43aQssJRCvokTvCtFvx",
  "key17": "3gcWGoGbse22NJxoisDSCSi9YYByHnKXncrTvd1VyVBPDAkWTeqB67UhU8iewChRGnTQLNdzai5pYs7JR3SYrbYx",
  "key18": "4nY4j3FFUzqGA7m7BAwcdCqTm65n5Khqq73Aszd4WFQcGHNwjVHeJWoxWYNqXm5g3SPqVgC3dQYSvjnTSMfKMN94",
  "key19": "21feniGUgGyTkEwor3mFCqxvLJ9DAQkF6fXUY5pN69MEYySgrQYnB5DiGpm5vccKtNBMQr9e9yryvjK9c8xzCVTS",
  "key20": "2JhCgUEH5TGdDuzFAW6mAe9c71XXmzXFJy8B4bCThKgXRwv51pnv2byiG4jwZGSEvyPxPNiiGonpUXDDBx3st7qb",
  "key21": "mvcbeNM1FeVMkxSxzv3tGfGiyzKTnvZ2MN6qD4611d5g7QEGhKnsMy1mHPzgftqDfWQX1TWKJNW8Avtf6ieiKcM",
  "key22": "47bQ2w97MuZFiRTfQUSVfKWRreH15BYZynNEZmCK9f2xdbtsqkh58Qv284Y1JfiPfGWudxskNT1CizkVHBHFGY2x",
  "key23": "4qrTacAs9MQiz4eJeApdom2SYQqF48gGkvhDeRChGZWcav2Xf3WFtxuatdSTN3K5BePzEXshJHJjHWrGckhkkz6z",
  "key24": "4hoAT9jPjRK7cWhBvJvJtTgm7tj3J6UhbUeGKax8aeQAXi5zRhimHyaMn7MCCcnwcW6Gu1NsTTmZswAL5mxvdW1a",
  "key25": "5rwqJfU369F7i6X181H3TmHf5T5rk2kH4UBLHAf12BYuFj3HLh4F6aQFXYXjytx7UzH2Y5yaFRCxXM53faNvkVpK",
  "key26": "2VNiB4yMAQwkNqaehyyf8eayEzetDnowjWbPSyVHChC43TH4449aJD9LjBAfvTecRqLs7QFmzJVadJajL5RdFbqd",
  "key27": "E6H5EakUuMcNETrkQQmp1hTS1FBJcDrun5sHiX34iQJmvHXhgwa94o9m7TcBNNxD8S2Dc16Fs82YrMVppBcKUxD"
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
