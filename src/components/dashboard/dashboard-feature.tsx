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
    "3nVcZkvoTBaw2jMBWpW66pyMN9wnogDzQTUmgXbroz8cpcV4Ef2eJgB71W88UyKfubcvDASi7afqkpq6cqQ7jiML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "umBGC8b9WxjEhCJhXc6X6LxtpwRVuCQ6upEBRx2ihqt1F7Jcb9w5sZJrsbhRM8ebM588D6SsSG6Ev9yG4CE3wsD",
  "key1": "2w6KpH1ikgU73mMiobyg2nt5y7xZZDhuQaedo7WaMHJNFHspXCyVWUgp6voSwtUUoUcB7LXgCLqpjDG13Xe7AGb1",
  "key2": "wuPKAUgkzMBzbUubfnzkqPpCgL5F1Ex8tNR1yMj6xWmm8JcZq8kBy95KaTdAMSXco5AwwC9xZx2na9arxUaZMKu",
  "key3": "4NhfeNvryza7yVjmcZZQZoBysvNo2U3Tr782pykpisWW3b9HY56cm5HPpBqogmuUYoXaWquYfJgF9Dve8oUVeXm9",
  "key4": "CAxnb19vXR8kdNm3oHKHBAk5vhk8kXrWVMBEjmP6oqwJypDQgoN6Cv9w3JtquytvixTaFh8REMjAF722gH8yFE8",
  "key5": "4WPeD29cHDeXDEng6avt8T73xzbawwVCgQkLJYt9cm2B46vSTLCqMr3bsTaAZK9H6WX25c3NdsjXLMWY7r3GrAA1",
  "key6": "2RjMM6gFZNvUzghXLFDpATHx1J3icrV1ZzwRTS55K9VLArdrL6wefVdyCWss47xzgvh6VychnQKTp5w9vyPM784V",
  "key7": "5fDxRdcDV28ngne9JxAU19PU1Ngi2htJoSJFxPGxnAwHJ8Q7RiQMC5mfVUZmXonf2oGvGMzqzPRpnMGakuRcVs4T",
  "key8": "2njk9nmuqkTHVqMHm2SGmBAYk1a9gdCUNdCMVtnK38fhL2v55Hs9KTs7E4cbEvU1YZKUkV2Dgh8PLfSipqXdbhyR",
  "key9": "56dDco3n59kVJeHQkCpiHcS8oeXxz4P6y6KHjsHK5TSz9omjr3GiCeDkSKpdn6iqeeKbdmbXEGhLwcH963AXzdqh",
  "key10": "4F4RVtzqvMsiqaaq1YidC4efXMWmztwYQ5kc6Tesh8TjjzxTSfWbA2xPNA4a3SveSpbeAGxaDJH7U3RFNxXqdZzE",
  "key11": "4CFNWMCZbumoxJW3VEoSMP371Q2xr1iwAXY55rTdjnkQB8wgk4KfYv4WnjjXnxRLfqokQ5VSMQb9qwY5Z8726cGx",
  "key12": "2uwkrpNkBAjGtKfwrVYVjWJaJoemDcBJQVQwSUvsZtBzPRyFvy9bU7iJ8prVgBsH5UEoLw19JAAdQc32cKTvasWK",
  "key13": "3uEcvQWH3SxRyiQPVqN4FVvWSTNSHkx8YRad1tsCsjteKkrpQjTf8dCtw7BjuSQu3iPVr7SWH9Bs7qNPXimJmDRX",
  "key14": "3WtRAe1BYf6sj1P3u8WAehDbUDANadPQTvZAUypHzz4jhnVacjhDLN2Gq68DraA7uMrCDJxLgRAMYLdmyM8kga25",
  "key15": "4XGgXR9BXXvvGa5CHdB9iw9CinnAZSBhtwo8GSeLjEoQRtqpP4mF8YT1nSU6KjzpvfTxQfWjcB6BvELBsVrAVo6L",
  "key16": "B1kKHHEynqLuoPCjStjA2cAqzRRnxRGokjKjjvbx9mQnqeUbgMMGKibDXgtHMzk2AHzQs2Hikxb5HQkn9JEUvQu",
  "key17": "5XjxmkWebnydEfsHpH8ERmejcQLoEncHMErVXZoDLsr8STuJa82nSEs6Ft42uCLjbhHyJoTC8XwfYsZG4J27GYJo",
  "key18": "55Kmhx7dS9ZDFzEs5xjDWsnDzkh1mRTvfYCdbbCpUt93jA4muwVspPHv2zcLVFg7WqV1NpYnxdQFoVb9p4TPNXW9",
  "key19": "3LHfjcoPEcLUn6ptS85xWHH6EvW8PTaBLdDSQ9ReABL698Ceka5pYpToYrRXZGsiyH5ef3cXrEqBFMpK5zpZfX61",
  "key20": "2FCjgBHDzL6KfeNVLwDRWetbTEVvTriw7etDu9WxaBfQ6WLAshkQ7VRC65Dxc91NQ8K6Tny21hc64WWYWyFBNw3r",
  "key21": "prRBMmeEbucX8WEH2Cw3tqAcceW6KPESK8JQZSD3W4M8fNtnSDQhnieZEWgaGcPjza8wj7vWgSyvtaw2rzUv4hm",
  "key22": "HTmT1r8hm6cvsLF8rXYNSi6Nii75PBFaDG3ob9QCfpjk5xyaxKVXANDuWHvZRTNo6LHAnGgZP5skQi1nrMPsLk2",
  "key23": "4M5UVKAYzNhSZdQpsB1wyyazhrkAe4t8gk3x5USsHZmB6122aaP9wy6e6WEWjtGesP5nPPwVyUwRJkF4BieTsh7J",
  "key24": "9W7awcTishWykxVN3MXmJSH3BKSsUjrsDy1uiVz7wzaXhnZ4tUD8ZFEtRtEcQxgYBhG4CvXLvxDL8jX9dddqSXU",
  "key25": "3VCUtbJ84BYy7QuL2992zAXoedzrgwNgN4ZqCFATSdA5GnV9NExFaggMQrdDEqCcxeVDnwLUbLNtu6tkT7Ynk2D4",
  "key26": "4H5FJDkessbBAD4gq9CnpNyv6ZaExK95CUtSAiBozjpVVxFZkryRgpfUTdNnYGE6ZHBinpxriVWS1o2P8mV3upvJ",
  "key27": "2cqJSW2eb6TscAYG7o73ecafgRR3eYEGKuN4GCCbKRSXWv2DJuhttEnCjMZjvvHcssWsaGS1aspapJATsvEqi9CL",
  "key28": "5buRUKQpETSkGKdzynhCefwhgEBAQ2J7EM2cgmaUbPLgf9Pkz2amtBf97PsjNZehWFMAUkysxQ5BU6hvwAzzwpbd",
  "key29": "RarpZhMT756TH9U7DnWnTBWcTo5eb9KvUKp5wKzMQnBVmyRZaUaLXXX6afymzzt6vyzZ5dBrT3HJP9URPVQMJAF",
  "key30": "Nx5Yi5K8LJm83aiyi9eZ6uXrftSZpKmKGEVUaAf4KMCNqVGe3amvv5qMF2t5Qfs5f9ymdyrwV1uLeoLkZiZW6qL",
  "key31": "32UzZ6r1cWa8dUD5yQmJ2FuHL2EfDRwu6ddk6ce5gVh31jJNAVHkKjaWKifeAc7jhVeG4K1bg3ajjZZiumpniqnK",
  "key32": "3ccVm6tgU4DaZqnJB8TYQJNbzuMhkeQ2Su9DpcoNZhxAJXhyuVphq6FjhLDeUxa7vZEsktNZnJREH4LDizsbPVLf",
  "key33": "5WH25DbqcJinMHQcv5TNTEKyUfwvqeaXB8vszU2unFjdPAf4JHpnMgpTEc8seFCuHtnn9PPb5VTBNarCD7y3FV6h",
  "key34": "iEFTgkd2qJHe3PULfy4V5NFm26S1hnc7puMGM4k829ChEXRoUUszefFLiYEhem1iBCVTaWB434JmqF4JcxvFJuQ",
  "key35": "4EdctU7vhibgwWZWgqE39eDXg8cv8vbhwwTNyNBfXz6tNGtqciz49G32j3cv5mKhdG3DxA8j9Gb62eUKNJmaeiwN",
  "key36": "47NDXLp9CAVV3wqaaxsChaQjhomgnGeLMtmZ89tmoUcMT3zFi294nDqz9Ka38xPuCeZYoALdA6LodDjy37CGxLs",
  "key37": "5SF7YJTUocFxvYcEacGgzVLtsKYTMdETqvVSeXSbB4vygt41W4aBKTdBqP6knHmAXXoFf5Hkh8fJoWcPguB6e1rU",
  "key38": "3hDCB9p9tWYTaW2ZvYi4sA38uRjtg6SPF8iFwNTFNqL31PfrAeFZEXp5uNMRg7AkqovkX2ZxvMg7xSN1eR11Bunr",
  "key39": "3hwVscX3jReJskKBfcg5nPhFcjh2Bu8Ayff86mK8tA5wWD3GSxzKstotqCCXPRGjGvJ8eigtKQLra6aTNHf8z5pa",
  "key40": "63GZDCYKHJ46NqhynnGVVR6VrRePepBrFam2gbgGLQC5fWDT47SiL9Cfbc2ApYWK5TDkq6U3MNMbQEsf5aExj1E7",
  "key41": "2KPcp8o9S291GfGtaCCxmeNAGSUdNGxzzUpwNsGCnPu4iXrw2nGbp8BZzNikVphh8qFabQNpQQZEHeL1PC17mYYL",
  "key42": "VQWdgZXrH3Fj8Vsh65GupsDFoVWmjQ6h1bAwcv1B2a5MQsvvp2FrtvUn49Gq4yC4dAK6HPWukDuJChnvXrESSiB",
  "key43": "5mnXCnPSrotjebjEsEc78j9yeLvKgiZ5uPrDbQ1nTQXt8QjRZNkHkCdUrwFWrHK93Y68uef5JbHwc3Si1JAXjkCH",
  "key44": "ymvZByPfc3w7kS2BNY9UymuC9rUTtBncFG5MST2adtpYyzAcGbjhqXAYnvd66xAzF7zUeb2qQWyavz4Syeo3Pk1",
  "key45": "4b7n2xvBaVeFdKXeqsEjnCsH3GGwcWYEDKHZPheGZhEfUvxPPaxhUaJvGV1Kaxicfi5TKaY1tq9Q9DTdAsUfN1uU"
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
