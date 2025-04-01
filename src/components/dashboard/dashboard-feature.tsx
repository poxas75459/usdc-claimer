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
    "yzerauNWHvDVWAUbx5FAFYCCet74K2qJVqh53QaXwa8cGnarrTeoL4cUEHKbnTo1oyGcKhUsYHeHA7zrePUcdLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mZ8hKmBvbmTCTdHMVfS34vqYDtsRUBCEEEWCTJYtpiEfiX4kWkvygpmN7k38tBSV2hA9NcBEZdBgFAAnrZmqYwn",
  "key1": "2h5Qqo7GLj3uUGZ1j6GSKMVPS2LwebDawcVj4DQL83byeU6nHQQMPP5xXL6c5juEsFLNQ617ReZQKWcMfGg8SpbQ",
  "key2": "64GM1t1UJudvbvK2BoCna63MHFWwUp4vvWtNDA7bobjSwKeooEKmMk7pJUd9pbX2Rn6MjW1JD1rumG2BEMnAtZqU",
  "key3": "286Ke8zLfihuvhH9gVFvRiLuB11adYPB1V6tyACgpAf9PWh821a3NtAq7S2Ze8a4tuNrgdtT11sH9DCjx6VfqhDr",
  "key4": "4VqNV23ZaX6SaWYEUQ42xNPgbcYC56tsiMeuNJztxHm41XGTVpRStSJxiAAMHbG1VfpFWkaYBrWWanML4xxTm4d3",
  "key5": "XDQjBLtfxmdzppfyMDy9tzr3RGKyWnDqqAverqKuiQT8txU9j419ayxnuMSrpqmocNZ27xXcdUoHDyeySvZPU2h",
  "key6": "31EUMgsUZWk7snkNR3bcV8DJzHSMbcJuqQ2z3H6hC2R61UMURTDfyqvFLJFKZo2P1EUXsbyNodVFwrUmu7QhAjr3",
  "key7": "2TLNr9sE49jjRJBogd2UcvkXAoMZsRfWo3HtRAqZgkjZ44QFy6awUrsgLzxqzEssqB1NRKow3MxY5ZC7o5tED2EG",
  "key8": "46zPWVJnmzVJBRmnXNAnYWPpnNnU2k92QgZVQJp5X79K5SrXumf6jsjUrPC9AQRohZPNZvJsRxr3JLMzAHWKrvRM",
  "key9": "3Kb4wXv8SHgEQE5vYgqBmuNtbwronn9SAQ3bKfWZ8CuuTUQqXcdkFSvoyJ2ZirqP3RLm53aJMyzQzzGTKjjBpkPj",
  "key10": "2a5qZ3WCbX4d34finLPBgHca6a6AwycwtqVKSHwmN6r1FGa3W8xSezazWRxrbgxBEURZE7r64X79TXQcS2gZdMc",
  "key11": "2amN5hJHHqjSo3eqV8qCyiLikYP1fWWvvLYNdEmEwMpkipNthRyPH8Mde7dAoNn3HnQuDWDUDXrCo3xiyyAD5C7T",
  "key12": "28pXYSYPS6JJnuTMm9EFEZz5b3KJQkHyaQVboSrVkL6HmLAS3Vr2srDt1npfNR2sohTavYxZp7pCepDSnwr9NBJW",
  "key13": "3TKo3tbVRH3DU8iWqmKMqk7RK7kuGpjKvqBopz1menWtYig55ECvJcF81QBunQvPqWHUi8SA63xqptV4h1koybpB",
  "key14": "Cf8emqPZFino1dPnSv2eHKJVUi8aozEoVGhFZwz5dbSnF3XDL4NUYXhwtojUGx2CjYFZkVPWVr3zCisYrRzT2kh",
  "key15": "5k2A3cxQ723M6fYZtyxSUSqHkS9chhpsmDEm2HXj3pBczVVuMT6fioBBJHM1Qq8nLqrKW5ak3ogVJAUz4EJCstZP",
  "key16": "4RHoiict2wtHFNSXQdfzZWysZWYdevWjThiYBvUHFGka8YvucSXp3iEfapXuAaap1XktS6WEYKhP87Ue4GLgXpWK",
  "key17": "46AcYnAj9U6MDCUGauNai1wu1jJZ7sLnZW4GaKeGrJenqM67UaPYMEmsPU9v9wdJuT2ERHrjTBpZjPUunMizJQ41",
  "key18": "3bxKUZQ9vLAh7uNZcmTSYXrKXhkEUoD5jj77o92J4V3Wa8S2d3dR6bgyeveDE8tB9A5KSPJ4Z6hcnAhb3GeEAgZP",
  "key19": "4vGwr9P6cWMBPcViZuhuCXijfn5NMCZRwMwYUaaCFoykanPmoCQV3QW6PHCreeX4wAGGVWh5dWcg6jrsr4427ddu",
  "key20": "33kLmRCMms9qh7vX2ML6S2EkCaVzmcVcGFe69ZtZyYDWE6RwMcrcRmvHXxrhBeYvEabikrpbjTm2op24s3RxJr3D",
  "key21": "2pXQ3j8Syd14q6iuMZQ2aMiT81VxTXe29jwqLsxpF8eEeHnB4nFnMSrYVi11FcZyrjz2ZCt8ke1HzzF2hCECxvmD",
  "key22": "2ZuBeGPAPLuJrysagMjaVJGGgVHUSeQxZ9F3g6vXzmnrxVxBhgFxhfoL1ZESXecTVbCnP4YPBFNwetkrDhAnz4nr",
  "key23": "vos6q3z1TEnVoQViSZiz2QUNWcSC4M5gzfyPv1Tq63jrTE4vzQxLdoqFZ8iviHhDfYEMxgw1ccdNYipKb4BRuyD",
  "key24": "HFbfraPpkU1BhJBsXMKeuNhaGJHqynN15SrbwrivjWGywFaKPpyVqv12Qqxdyvcg3VvHR91d7GdRdZwhtN47iWn",
  "key25": "5C9b1AS2PiTYQLcJF476H3Wo9S2LJp7gK3aAugQbvNYdLQXvAM4e6reEyMqcJ95etyM25pXb2pwTXaBAAXvtL7H9",
  "key26": "34W2ZHhdUtzb9z6N7wQ1WGPz8DK3D8EQxW7DifKsccJDeKx9afTDevLZiBY6gn4fpzyMWV6jWor4wkCWhuGPdGcV",
  "key27": "4pMbmCc6G87GwiVrxD4uyuaTxnW52phBQSJedYLe9WouP7YWjpLZgHt9f86d4eFniB9JAofFEzYPZDLZWt2ope42",
  "key28": "29oxPYmt7wj5n5PwYmgQgbLqRz3Vo7Nbo7hhGMFdwSJdv6NK3KYwLSXzahhdAM6zWQGjcyRruuhhoF5dz1NTqnsb",
  "key29": "3fXDcpRT1zn6c2FpcjqbtPY1fGgDVfnHga5uz6tDwkrYEi7d3NXkJccfbYQDHQYdSnzniCsnV5exNKhV1yqcUY2Y",
  "key30": "4MpozWoQT7rz2R38bmEMECiqVvtt6Nw4yCaLsFU3sTNpa9hmRAURfNveUnJLWAdZzwjwjnX6QAYzyp6yUCaWJkkj",
  "key31": "5xTNEAr1NN7ESkz81FFYsSY5de4tvDGuUfw3XGNe7wPnSs5fYrsg9pr6dNiLUnn5LdxWi5YtUSGymDq6iw1gTsZK",
  "key32": "YpgAR4t4Jdo14zfb8Re7NyaEVwc8kf7oK9eJrdWaQCXKS2kfF4swu4sPVFcdDp9DepuC1n7ypaa3Qa1vG8uey8N",
  "key33": "Q57uoDAcP4RCspsEQ9v8WTSsMUvsVCuVChmovJnJ6nQjPAmTnca42XsmJQzcYpoCFkQGjRGc16z5dvQd5fszH8E",
  "key34": "5FBFojsUTRKuPq9RbFTrnHFteuWnzzDUBTMWLqEhUGj3VHHUdkjhHSDQiV72WaCQ25hz1cAvJWfzgHWFUmatvPUj",
  "key35": "3M4qaYh1WzdxJJQXzWhNqQTJRWGYbMzaEytwpAGtHrSQuyqdnnpnjvBeqA8sRhJ52HTAygxb6LCDXn92fSebGM6t",
  "key36": "62fvLXEKX6efaERuKhH33e4UAdxq74yRnw1JupKv8W8MvMCaLKTN7cKmFhM4T6tttiPjjX9V7NUvhCRNWnicektL",
  "key37": "5TDJP2371dJH6aDFVEwEDu2GvcKnHt4FMfRC5oKiMmefAmNCFLSeW8ChQqWkcPPQYG4aMitPr5pCbfu4P47T2ChZ",
  "key38": "2iE36F1dpkvFrKh4PpZfGEWSCSkjmyBftcqGwHnWhUHEwLEmXK29rqR3Xi8jWnUM9EGbdfBYHY8RqCiKrdN5aPR1",
  "key39": "3BQhVL7uTHCMKB7unL49jJJXMNhccqnVbpoYFCEGXgqQ5aCAWSKRBmg2BUMKhGisQMWAiXhzH5EKXzESFZjz2Kp8",
  "key40": "4fsiMRCeBSwCxA631Yie8sJnn9hKRdws8gPGC7rhjFESUrQzCfNvrwFADhp2BBh6F8vV8W6CpApevjL6MPF1zzPw",
  "key41": "4byaEgf6nv99JeaDxb3EeMmFpC1x2HqRXcvsYceAhLn6QwKwtP2TGAwDVSgq7NytiFKcyWSkv9v1RuEpaE4P143",
  "key42": "4febwZKQwKu5DriU5oPGENPPq8EXFkXKunkfDz3X7hFMdupyof2XKDApGjqbLr53Kxtsjpy5qeanMRJAzwVmATQs",
  "key43": "3qxESfBg6D1xfQ6bxvwc5emkXXxXG73ezvoqBKQpNu6ToLaJaUS64KfwoXJhPqnpx83jnLUZLSjPFAnPyuCgSEQV",
  "key44": "4Jtn2iYuPuDwHKq4hiUeLpbPWfrmDXaa12n2nbGWkVbRx2nUw7azRcMY6Kzi7tLrXdgmz1btuXBZjLVwsMaPuFLd",
  "key45": "8iknzAg8JkwNgpJzkUVXNdpDDUf359btackBCvTRLSgmdgCjLxRA4XYkDbMR6TJ7wdKKQyHG1u6kFMWpMYxhNFu"
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
