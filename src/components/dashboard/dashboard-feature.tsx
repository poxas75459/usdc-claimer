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
    "33HcBytRLJHZHjmQy5zLmwwYznqhJjLcTYDx6inByoc6qUoZaqZ8LBajtS5qoVjhR5uMWtWixeWZttHJZmysUrbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qUqC4sitwBYoT8NCpz3aimXVvEk5stDk1xFZjeEwv2dfqY3hzfTC8dnWEWBqymAL9vzHfho7kU1mvrRTPQF86D6",
  "key1": "2EqT71dT8bKcXVyfTS9AiCeHh2oNjZ32bRWRtMbnbS4iBXU8fb1djzrFAwfriXTVBL7QR5M9SSkAcfzFCNfrEcKk",
  "key2": "1USgVtuFrSfanJ91xeo83bGhdvLZFn2gGknynJtqjbRbezd9h37MzQx56c1iuxGJ2eaE2f3aBqq3ADcE6hdvXBW",
  "key3": "3nQdY7SR6bCmdquwu387BPkfK2CPqz7uY531RPtkb996SJERL8Vd8DBWDXadZr4h4WYsKd6TZv7tSBcW1XnaxDoE",
  "key4": "3CFWyEQhMTob9ru4U7F68tuPaQNySZ5irsw48nyPNmu3iZ6kb1YsvpmquAFfxZQgzjQ211XxUgT2TevrbLKGrUfM",
  "key5": "3CdNUSZ6fhtGsSACLRPkNhyzBzHkGzmjgKHYfYrch1z13nqHov7eyKFf27Lv1ZJaHHZknZD9y8LXYQaNjbsMpYM6",
  "key6": "2oDBdVunJEQwM63ahUFUrKbL32EumEt94nGqz6wgnFXdjBBWYXELCqYMuuJK8JNmV1T9orhGKT31nxZ5oVHuqjR8",
  "key7": "2jkCbGuxbXoqstmc8LWroFfFNgZ5WTFZbHdYBtBaJi72cxA79FGysgnysNVCzDqEQdARsrKNV2MVNVDArmxgESvC",
  "key8": "4xmaY4uKYgYPYsHeJnoGY59bWuu3vF6J2de1bAE6NfYCKoZ9yZiSubXa2RAgkuvVCPAsT8Mzh64EGys3YntSDSqQ",
  "key9": "3v1ERFhQZzMXnrgUb1gRofdZafmJFdq9jsCxe4bJsES3mdcg9jjuzSSriQVqnif9pTasJZFb9STnbZHJkKANNYwE",
  "key10": "4BGjmh8drUNYPgUJU5bkD8owVBsWaz9vphbFNFXUfs2Qg6SLt6mrtQfSzhqi86NDr3z95U4DrJag3FbHnR3VKPSG",
  "key11": "2yNhmRP7rbxpQXH4AuoPyiosts4NXA9VHQTziKdyMBnS6v1TB2tXD9RhCGgRuWuyYtAso8X1Xt7vainZH4Uf4iuT",
  "key12": "Lv3Tu6hLeiWpuXAXRXdZsUBK1q8CEjVmMEUm4BKoonTaXjZRVw5SxY6VF5Kp9rHy8Ze8BdB4E8dVsTeSnGKiwDL",
  "key13": "5G4PoUsimSRqGkvr8YjARFCgcnpYPKH17Vdj2ADmYyRiVkSzYY7TuA9Xzw7f51epe4jEiGpX6wHwyWfXqV1sSwNn",
  "key14": "36CPsK2rxCAg7KzqHKz2p7aSHs3UfUHSSDm28d8EJXitmTC3MfNzSikzSDi4CY6rER3Zrz52S4AiyaGhi8PBaudW",
  "key15": "SAmp99aX9PvxyjjN8RfjDCmj6YEMDrhvZbCWQHACTAwcZETUvPVLvfro8Eadqihj9RchdnubCKoeK5Dy7nwNKWU",
  "key16": "692NgLRpuzGTkJ8MJiVGPooiX371sce5G4zYWPxtEx5ngZCoV5hYR3KTsTLneFzzNdSwHtrxNRh7N8TENFPb1Vd",
  "key17": "M3mi4xaCbdcP3evAA2GEyRNRPam27nRFCxc8BGvh4bJsMJowRbSkVs7bud4qn4GmesjQPUJcAa7WPuXed32fkoY",
  "key18": "35qMoSMkv6ejoNXKyFhNfTVJ4F1qehsN8JYwdaTQsQpni67YgtwDrCfC26VpSocvdELdGeE37KC9FTvkwTuvMrUv",
  "key19": "3ouPaNwt3tLyYaetpPTkhjtAaQwidyqKSjUnbMQqzMd4V7HgcJbVGY6SnRoLvTWfLH9Uv4Qt3civXeWksNjdPrg6",
  "key20": "hSUmTvd148EzeAARzE2qdHdMSbzPLoU6PaYdNDMrHWLo4x2sC325zPomAadkQZKirjj6knBh7C99XtzrAsjAew8",
  "key21": "4298bwhtMXBh2tSUe12f9yH9ma2A5qrvHeCR7bVS4bWYNWUUxuBZEakPUvvLSYXR5WXH6x4r3p3sqyfXxPGMsn6F",
  "key22": "2aGt5Jt9so62cjuAmtH437FCmBy75j4vTEzu68Mu5KprwtFDavk7t46Qkfnxg3bKpLSHQz2BZfrYDtP18pvYTAyr",
  "key23": "2rr7wDEgtDPztsmhbS3QWRMqvoQLYFBcWryrjJYDEtnX8mQMmyLr6rwcuE2LZbDLYHYQkBoEb7XAUkU4Ku57bXCf",
  "key24": "2vpeM3Tur8gCGgtxRX3gqtj95js93BSoyyeEUAG8jspzseDimENhrrbFWYwtYNPRns4oDHktXTzNq7DyZdpa7g1D",
  "key25": "5RMH5JkSPFxtLBmqQ3LmY1aoZpkgjPCG8rcTRWPZjpQjaCxhfTYrRdYQkgdFzJuym1JnWpQJGAQ6XoMvm2d3DeFA",
  "key26": "4kyQtg6p2Y1XToZXQph9kV4iobH5SELPNNyi8Kgkc5Fs2j5tEhbfxxkXx1TPTDsAA2S1gXwTfkhZTBXTzRjq8gnU",
  "key27": "4AcjXvqKUv5CKQubTMfjhXby5PHPidqkYqShkJEnDwLkjmZFWz2ypS4FGiyDV22SfSt1jmDozsm47GoXvjN8XZwV",
  "key28": "4Z3RmkQhJYhCD6KqdNME13b3yQeS8TRG5K8Z4Gt4mmKzCS5ho7soc6SXDW3m2bDNjWsnWvXuxg76rTFxJGd4PEHR",
  "key29": "5eJG7kr46D5NDiGovr21fwNMtRM8sR93MaUGLapXm34ZobkdVrTE8PFq6vG8y58sBvyzkcqasA8jeVX7SSj3LgZc"
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
