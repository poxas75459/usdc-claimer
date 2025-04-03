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
    "39fHsSxbvaJrXTX1GUqy9rBK64LQpdvCjMCPwLyZRB556d48M1vUGQCArRMvganNjHXmhXcdft86E7CZ41kcbeDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DWC9L9sBunuoWFQJZhLVytZG8jMKcWxHxRpC5xzQ1KDMhwDyDaWcMnmp6ux3Nzq1HNk4ivkLJUXmMmG6C1uEfvX",
  "key1": "34ovQrRzgcB33dB47vUhH3aT7SRsE4As6eeWgPh7kWJ8sNB4HkVrdxHMjjTYDzyxC374srcq3ca4pmGb9BWPty2X",
  "key2": "2odVvjLEe2wNVxRechJ6ni3jmVP3Kz4mQvNSVg7bkribXZa6p4a52EAHZ8Gxk3hSFoXaKx6hiMJEYmsNjf5oiesy",
  "key3": "Xr1iMUz6JHyq1iGo96XANCsXqyT5zzKi5mw8wxiEV8cZ1KnZvzJqxQYhkevM8HAEp6yqsH1ecF5ASYPyStiU5vP",
  "key4": "4oZUEbNL3k5CJMBiLasZ7j9ttvv768TmdmHfQ83CfSdGLLX9WKJPo9b8MwJNAn3jCYEvRHeMwFB95zsATH5LEX5f",
  "key5": "2kRPUstFZqBKPc52BP3zDJnp7T28iqL6JECftuEaiCVppqs1EL5gtg1Cme3Ed87bNzEZPmYvdrQuueKgjPpTp4VC",
  "key6": "2WNNb2cQTDcHuvzqjhwvzEz3qj7Fg2UXiWr4D9UwXKxRmFoaV8tHYviFSiL9fshnJn4ir896oEoPAsKECsFK2U2V",
  "key7": "3KmsSmNhbeV62tcbJYDZ88xRWCpxuYzjkLAxPC5oTEJxtmQPd4XsWUVvYPppkq3kmrx2AswPFpZRWyWFoECr6Xp",
  "key8": "vm8wSE7NtSfZYh522ZqnSPQNXERiYW7JgvjHNv5txJxjNnzZ5j3vQh3Wrm55PzGy1o41noCsuat29cttyLyHn9w",
  "key9": "4H3Qe4PDGSgnRbW3NoKoWPh3XKFJ4KDg9idqhkvuGrMo6ue28KCawN7vU8Z9vurMAK6awqxN6j4phT8koSjrdD61",
  "key10": "2EvYjDhHB3BY5D9zEWFzZnQwt39o6tc6U1Nmr4G4R5vDox4mfMJQafxuMDjiiSh537Y3oUStmdZQS5Vmkp4CwqUH",
  "key11": "2Qa4gzWEaDzQ24yFA4XHdAqPwJmiWMo7XdcW1LLzA8kUjnNkizfrHXeaugir7vxmweYFr2PMFB1LwMUYjy8K9sZJ",
  "key12": "3w3guostUrqpKQpeBf9Ujg9gNjwvd91MA9wcbVHAU3gUEgqkmgxrw8dhTwSVo8ZtP7qiZHP6bgpUS8qWyc4XipbE",
  "key13": "3gEUhnfPdtTkvHgEKB73k3kaNSPdcb7cr1kLb1Zcbx88Fb99KfT1phyKqN4AGZEJXavyrbKXXRDuPemVzGB3Rdjr",
  "key14": "2oosveMCWAokbt9ekYZnzrkREUJrf5ubKymdq85yaEE7bfvUZ3FT2NbXJ64xTuZoKnpHXxPuGE7KNmz8vVzDX2sS",
  "key15": "2fZY1KfTYZEnvbULKVVpueMrgKXciktbqMfPNmroP25UPATHD55osyxutssX8m1e1TKWvVJvc2MG3ahKedzSGXYW",
  "key16": "5f79nNAARRCBMRqeTNCHYHjwwY88nsKnHigJ2RKHUWYpTJwjYpd9Yze9skDSfq7nSQ7KL4ZQbsaL6hADFhsMAJjc",
  "key17": "28cA4JHhNhAguTsnC7nf1hZ4CvsqwMsvou97PBJTFLrwb3T2Hr1aTMQXBdxS1c3dNHDhNML4Pc3XNRDRXMdwqLXQ",
  "key18": "2dSJoNv6fxh5UgQuHXi2RCEtFGoPJqMnegcVKgjH2N6jje1T5U4Xwb7juz1YVZQ3mNr3rcuU2ftLH2G5vt87GhZ7",
  "key19": "24nMw8m8PjpWe3jyRRuGoQhCe64YkWmyX8HTrya1XbQTgmFL7MVuDK4aqNnTbEvMFJxrMEmmTuZ9reAJM7SkyDUo",
  "key20": "s1FVo4jQs3mTM4Xwj98MbmFWrkoGGR5zKhZ8YZC9s8sVi5xsrSDFf2VRcrHmjJe4XESbRSrt5N8HpmX4WLYKuqo",
  "key21": "e633xxgn2QnvnKqKkJQXrNr8a7Jxw3QyjHQKMA9q7wiXbJtTERCbYN5jKasfWnZ1adr9yCnqY6oSHs8KzdcSbB1",
  "key22": "3hDyTFd2eJG1S5dhUZYnSKT22r1fv46cEqUYnFzHCjJP1Dn9WKtWbwwWHxZJHrwkpBnuxRE1yzEu2cVqBsWQ6kcV",
  "key23": "orBMSy1nhsygyaQKyPgfeVPRSTdYaNEQDghErxAPBiymWBaui1mDguT5LcankCdQHzcyxUEgzaCPz52KB7fWfd9",
  "key24": "2RUU95GxDMH848WHhxsvy2QG11kWNAYExN9fZEDjWNg3LY9VSRktqQmcS4zFdHoG7VzkscK6SKCXcnAKw5aHLzfW",
  "key25": "3yUK7iyyZ5kCFVpk4PofB5usge5kKEsjeU3ch8hVmUJHtNTfXBSobTJ3HxNm7U7ssa6nxpebw9TW2aR92mZSM5Ui",
  "key26": "52nCeRajbhUtd2SAdmJWrM1nftCe7BNqy2N6w8bH6R271bkJk84QBg8UqQxmJBMWtDuhdUYQfDZL3z2JnMZK2JmR",
  "key27": "2Gaxyh2DfnXfL8ATkzxoMKeZHeSbkHGjiNCJsNfo7Ue17Ad8wsZC3ZMjeh1dV3LvMVvmSLjyJVV3DJ6QCQsz6PKR",
  "key28": "2t44V8PoqGxRZLjQrBbxzT6ZSb3pdoPGMhTqbTXvzq6ZirTigMQkuEUhcNTt4nfB8kSJiUbd7Fxj6P6hZfbhMzPb",
  "key29": "2kGrWgJCWY6xvGyWyiaqtk87BsNzUCX6TBynZ9wRsfQzD6dMKsGkg3z5ti5kPTMoMLoVjnXe1gmZbWgPULeoVQ5U",
  "key30": "DWRTE49ibH37NULSaVFsm2qVbdGoTaQLW1ZLE473GZqhpi1urR83j9Kav4vsy4tZrGR4Y6zN7gvQYaQXNNPN3nq",
  "key31": "4cgFA58iZnW3PDRJMxgJ4RSbhWoNejQkcrg8Hjeg1sv7M6jKKNrnowahqGfQSU8AtYyfeHPP7QnwgCzzNX7puEUb",
  "key32": "4iV4R5BLorkuLS2GKvPxTg6BbB9mCUMSBX2MY1JsRUxvhfah88ZZGmMUZq9apvpryJbDBiAGdqXHH7i4YenzGaPv",
  "key33": "5MrhWUaNStQL9V7zpWcBciyi7AV9RpZ1v953eim9m3h7hhVbDFX1cxkPeMyHZEiUcEPd172N2UgAqhrTqGfbUYjJ",
  "key34": "5guKtBCLxdJLuaT6m6VcS8dJy37R2PhWvEFvEkGb3fD57Yvs7hAEeKqD84RfE5pRBXLty2fzobuf41VbCZiWYcrd",
  "key35": "3k6fYbBoxHLpGfENNP8ZcxuPNB8yAbTTWgrQ1FTx1kQYJdHatMw91oD8dFJHYXqobTfRuPAnmpxmXipJcgMizQ7j",
  "key36": "3HhyBneWnoUwfJAEK5obGSMxg9dGtoPy5kHWhEDsVW8rMHNjevBWUzfFjhZ94mgFWW5rc2Pf8uavnModkx8nzKm3",
  "key37": "2kHREVTdvkK5p9AhVLpFWrb8LRbRfX3XRvJxDJGNzHczqmd8Cdu4bT5oUGHahnTSfFxe6Jk8KALttq2DmW9pzUWG",
  "key38": "3PJHNkqAua17cAJAxevnsT6uKS33RfAGZEpcSQoJGex41tKpCHTa82onGgAthY7QAzqvjFr5H4yZVsGt69Zakpz8",
  "key39": "3oY6ym8KhZi1xCMrFf8HpokDoZCWTp4YYqLy4D6QWr9ER3YzLLhwkTt6uvLhAbA8J8cYGsQK4b2R8VELoKZPVmVU",
  "key40": "21gfryiSgYPyChFJfCipKWLtnCCGQqdPiaXitAyTkYDAhPiULgvzZXRuvZt469ihmmr5AvxG5KmZAUBRALsdA8Sm",
  "key41": "5UuxXAwqw3AMyjxsEwBBoHMvN4q3SiwSH1G5sPQis8wvkUYE4anzKGuH7LUPkehnB14Dp7tCh9Nd2gHyMhXb4iwT",
  "key42": "4pGefx2kTAHvwE364SDaz9LN6xmgVVo9agorj8LbSPx3iYN6F548AbdNfpzyToesG6ySKFaragNva6mXre99EJzF",
  "key43": "3jynNpmKPB3g8cgwrT217vwcD1oxEUnSdC9MDiJyWtH5ZsH9iApspzNUy8pZrhCJGfxaCgjp5T8wUcvZKxxrfW42",
  "key44": "3koP6ELxCjvmxmRSM3TdhLR7iTKrsqQvhR71yJ1zbnuqXq7GKq8Q1dLVEmzM4cN2TNFSduiyDtrToem2DRf9XudS",
  "key45": "3tFhApRDsJjZWzUxHXXU5gC4xeeNoHuJ9ZouahgAsA8JPcq2QeDN5a5VNbKgUMTSc4wKYqtv5uxVaHJw1inyvTCg"
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
