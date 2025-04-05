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
    "3GEBQv3CDZYbHSHawK9XeERtGG8Q5v8irK9aVdJ4P4rJERDaSv5EhgMwFVqfSrRCwqAwWpiRTYQvA1wZcR3QMzVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H28un4GSSW9m1UgxAefeY3mqDiUPFC6zc8cPDvBr63Ups68XhCzq2wF5duDVeCWZK3Kt19Yrg8SQAYg7qYBMg4N",
  "key1": "j2jxJ76KZ54tTn8AK93UdD2bbzj1bCrTsiKdrB3j7dgdZ84p2nwgzvWEJ2GHkZGh28SofqUCAxz8oPSbqmd3Pmq",
  "key2": "2TptPEdMQzFbe3nTCu8mQBNbDQfqBGrk5A3JSUC9Q9KCDW5kioVGViMgBG2oe1qg6btEyjYa6UpnrcNaz5qGyuAY",
  "key3": "d1A7C9VKB4SKyk4f13fyB8YeFNFvw7m2E4tmJdMgoanrEnQMnLEyTiHtaw3YNTrkjGKFpZ5jrFS9Hqxm1Ru8FGj",
  "key4": "24SDfxW9rpsdiheaxeqZVPb6YbsExZmsJTrmu6ncKvUDV1WbDMsAExV7shTsKrq6RUnUPCrZn7xG67mpfJwxnmZ1",
  "key5": "4PuUCZHqeF9MoHNqwKNEqyEcAtRYGL8ToJ6nG2vihD93cGAuKePvxotJzXV6HRNctD2pXgwy1M7fufZAfngvuMNW",
  "key6": "4eFg3sMhQCsUeY9RDLjfrDxy4PKDKp8sSPouHDj2Qy6ZMK6yk584YLXoTMsYfEBiNt2frFrpMctzVKruT9x6Ldh4",
  "key7": "4MCyvw4bzVVmSp6tcSzFcWciYpjc9nLGh2oycV7pRvCX4aJmkjbU5sizhKnXbzGCcHB9turcBTTkomkf4GEPstNd",
  "key8": "4xBuWJrgJMcB9CL1zYd5jrejbig4VFXdwuMsvyvYGbPSKtwx7xyZg8tU2JVgbwpGXUTfE7KYhUHVWAt1SEX6Tt23",
  "key9": "5pgxud5nrvHizGxQ6GYfAh9CrBaRY7N6u2E8afTGnP4X8ycyneJSpGqpTvYBXUAAhZS79PYqRuwPHTwMTqqaHaig",
  "key10": "2unyL2S56xmAAVEUfJp1tPQxHR9S5PVrrUANC1SRicDxxakyCSpsvrigLtQ4Gzse5B9nEL3JSfoUyVGzyZqTh2Zd",
  "key11": "273bWJnrukEqz2Tas36JEFbynDSmaQ9eRwRhZeaHJw9H7ncpdE7o1qGkc64NcBXZjaYNar9ZHydSLhTKbntUpYPH",
  "key12": "2cvTFwpSWw4zwM8V6vJshk4re3SF5vePUQPGs3xYV6boeBWQyR9E3E2uUMp9up3ufg7XuSs2sn6kyNdXRMPp1XCE",
  "key13": "41JNN7wtdDZXbPGzL8dgtoNGXprdJzw6mQc9Wr4GwqmMhEW2fbsqViWGNXashunmTyoD33vGwRKHNSjHcgn86WoV",
  "key14": "MAEhGWWxEgrA9fMfsMHnkFTh29YLXSwFA7xCyk5eQEMg7RYxCyTDvmrecAFas4RqUQAWtif3ovHuaJ9hcgtL1XH",
  "key15": "god4xYPJiRkpy6yPyGaVB9R71QSAqQm9XgPeP8TPkBLvL8TxjXQxrPSV42VGKe5hxJAEwioyKZhuzo1CntA9Go8",
  "key16": "5YTzryepPzXFKMesqcUL7ztEQqAxFrU6rdB1GzXFxPBEYDMr3DJo2WnyyE2LzP8x25z37pex2AW52xFuzvvHNqV3",
  "key17": "2ZBMFWTfC5Po2fWZvRxy4ZEEgnqgSyX34aoBFktTNipwrWKcGU4M7jBKSrDE82PTaDLd845x5AQRELFdXrZpJY1q",
  "key18": "5kiURp7EUXiY7nFFRGx7d2xMho5F8bHjaiS27g2w1cVkZVsxqByhmeyPFomF7DBUWoDT7qAUEHfym6RLdG1gtZsE",
  "key19": "2kSnbArN69HxuMNiAL4wY8Nvqn6BD7VcYFrMYd173c3pYy4EnZfwiN2VzvkoVnzVNJUBfNWrgV4iysE5Mrb7u1SC",
  "key20": "4o5nw76jd3EsfBujkmpMg1bErKbDb7VoqfWFShUKw3YA8HxdeVs6QLjpGDQ5kcnYpL7Axb7oFLokHxarTNamuNfx",
  "key21": "5JBTFuLBeBWwSvYPosEqRPekQpTmMDhVEwhQu1zvbUDtXVpKMkHy6wWzErkxzeDuvm8ncUQ325qnMxw2Jn4yzXC6",
  "key22": "3JaL9KZ3nkfcG52BSkQkVnE2uQte6ZTYLLEaf7j3Fy8nw7GkYry7i48y5KB1jks2BXdW8UQZrMoF9xeyqeLcobAk",
  "key23": "2q3JG2zLisWVPa2Pmeozi3gLpVN6ZkFYe8FLyeYbDGKDqMeVLBH9myKHXCY5Tw5yEetmtekkyDtg3pdBJeemSSzJ",
  "key24": "5oKwjrBVSUPYhjMAbR1KBwBMPr2aMWJq8pg8ofTrycco88wRpLMoiPNj81J2J1qXnCmf85HWou7sF2BRukPMmKgA",
  "key25": "2BCZcij7XUM7mzumAjDrqddLvqEqhAxEJn5jwJqUzPttc4qSu1NVANayffwx8dNMBVNwYry8VaKSgHyLqSZ4guMq",
  "key26": "2VSrRRT7mJntGQec6p9T6Ac9AkzTLqehP6dEpeQ22BaA5BgpVfnkJdZjsBS4svoezFFD3JLXxLcUA2hyBeBTuArh",
  "key27": "afGQ8HAh54AwUMntwbvNRAbApheGGfp5eMwLx4BRUvXvbKMLuuerUSGGKTh4vJfzAfC85WAbsZh6RBgeSDAoFsQ",
  "key28": "d9heZpob2xT7d3nN5jqVq31jKXN8Rj6fGJVLkvz5AAEyae4gANUAvT7PGVVVY34aJmo642rEEU9upp3vYCp5GTR",
  "key29": "62fCGfEHDnfYwZeGbYzRGuJeBxrArkDAPpAucNxLLMfhdk4zcc8jzZbpAvFfLqjF2pj3nzDnHWedwG6S4BCb2odg",
  "key30": "4NEHQtFQaz5mhkCvPvBMVT9w64k3VU99NyDT4Je4PbL8rtXeSaKX1EYJ4JWg7xHYXkJ3Ge1iJ72EnSrHiKssEMgg",
  "key31": "5fxT3AKLdJq6mvDQDidvckerWPpCShUCDkAHNSQX6syUswV8qmR8iDa76sAciYJFLgNyWFrw8dxymwgqym8VG6nj",
  "key32": "5DGJgXbrGV9tvWLhUoyMKr2LaZoWnC82TCDHzAKN1tc2Qsv7Qokmb7aMQ2ZQLGRWvQ4RxTrxH1RfCmGSLbNuXXWH",
  "key33": "2BsJ7GH6aZQ68rcRs25954zjkcuNuEz6beBcHdeZLyCey6YUaun7bokxoaTAxPMcvHZKu7cTQ2XADhi3JPURFM3h"
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
