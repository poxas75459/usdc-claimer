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
    "2mErnu4mnjXrWGAmknUm7JncGNCBRqbGa6Wfw9RZA821NC6WV9ipGFcH6S1VcWH3XAHC5kRY4RMAtgZysbzG834N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CBHP5MJEioDpuSvUGfAF1jvczsyAAJT4obKwM2qzMvvoYRC8iwZXNngqfUL2rxNQNQqoqmRJzwNVUiZ6qGghKtc",
  "key1": "NCsMiWV7rbQcRbHWBBPVtc2KzosqKSxjatyAtpw13yELeFAZ4rkFNCDuVqH6vEdYxHKuLa7W5NrSkSYQAuxMzFT",
  "key2": "4VTnam3nxN3nD1HEpFmcwJeaNU5qNsiavkGMADK4s5yiDVqr9MaSgvFmKL3oGxMJHHpYkCRCPx4vpdT12UtNZCXP",
  "key3": "2TCjz49kjfYQRRrJUcBb3Zx9ZT1ntAB6uHQMryzLzdZjLEXrK64fSvYeienDQYNwzNPXbZ1zWBHzxVpEWWgiVRcw",
  "key4": "4UwSnt4KZQ3pfrSuWQDg51Zo3YJEKQw1kWJbbFNb8eVizY2BXRExcrg9pQTutJXNhV8zugZWP7S7vfqjzUjzk6uv",
  "key5": "3mBgmxAnEL1YNMso3Lu9n7vtJss2we3e7N39xRfJtx8YMnsSSnuew6fL7Nw7YBKpX6tKb59CJo9D9agQs3dNHYP",
  "key6": "4U4ruTZufxrazgYjHcPjSYhpoqsmG4P6ysgQhuewNTNgsaZKrdoYRYQpBApPaLi7smND8Gc5HQ8nFVR2pycyeiQ6",
  "key7": "8HWdsCBjMukDKW6SygwHNmqpUo4Lnq2woTVeCt6wPcG5XoUgoXSEodap6VGhR8W6cNaiEn2mU1TkJHWM49McZPH",
  "key8": "2hnNow5W2sEFNrDpsZa1FNDEwLAuN6uggUgbmZmXAwiMabChBZab86QxSu82XsrfSUnTC7vNWWU9qxGZu76veA1c",
  "key9": "4d9LJLixpNCpZGfoCS32L8gmDGrCVMr4sjNDeYmx7kzBakFgmFWQkfWT5QqE4wuceVRtj1v4NRwWj94sU7haz17w",
  "key10": "yA8KwxAaRFpxehp7rZzdHm3oVajSCcuvUWVXAEry3GffFwc54gftnKTTQttPvRNqg4ScxqwZA6ibXAMoQNjxJ2j",
  "key11": "4atwaBBztmqL2fYNHCjH4dhkbANc9rmQ9dUFvvMZF5LYLyo3N1BKXaKcztFWvP5kfEwJWj6w4gBJnzaB4BsPXGhA",
  "key12": "2gWLeYdxiN6dnyWj8VEjMs4LJu7qvyXKv6GuZMCWp2JWXLG9qfGaVseHLJ6dotmLqqaitRRZ6nUnR8CndNZZxVFR",
  "key13": "4ugofnN6Af4GK1cqLnTCnMtfF4DUMPA1bvewyUWKycJ1UY5TWvz9fm7kiGHNuww5XnTiTTrLrLJUDdyoD3QR1UZo",
  "key14": "2hEn1tsdZNEn1erhEA1V837sFmSJUvPxXksSFFfbBgESS7phc5uztt3SkiEFBwFeMGpjQVshNkD3U7bRrSufdAyx",
  "key15": "4buL839ttyvJejXfrmVs8g3wspURsxpUXBFuCkh51jYYnxgsBtUDELTXsCZRFtxUBC9j8XziEXM44gBL9y1ftVdS",
  "key16": "iNJGA1sYSAxN7K932k5YHBHCps4s8a4weC9uiJFQSmvneYGaSutV9ARZwyDEZq5HmjVR6HxXfPd9EoyPezQhCFu",
  "key17": "4B4fgWMD8XkX5FPob5SGhyZBUQiTMmPRab949hm38BatJVQfLfBC9DKy3zw9ziSqmfpzu9ptr1BUoA9iJ3psHqqe",
  "key18": "2vc9sksx2USnTSfKHcBuSnLCifcYcZngGf99MqvqA4mFSZd5MUVF7J7brM2cbo4RYagrgczqCYtCu2K3LXQBSove",
  "key19": "2GQE8a1Pr7EVziYUaVxT3nbBGfx5ZtMUXR5FiZffW8SvRFy7MbnVMejQZmdA1W7qWDjLoQ19DVDyqqqSXG9aopRk",
  "key20": "5ts9TFHPZrVNpDkR4JDimMisnnjvrUXFfQ9GDBEd2XRfkuixD5E3hwhaFPCFTcLezqFZX2zrviTLXZDTEAnPtix2",
  "key21": "37RadewKX4oNm6bb2triwg7BBpLQ4Ea47BAtaWuzAgNDaqbina6Ye6cGXmRwtbowT5cF9eZeVUedY7tRqTxxMhb1",
  "key22": "62Rab16rE91LAUieLH4E3KDRbGiLKeBc5V5pLd9W9Qimv986N1pYXrbxpv1MCKXuSxKMiPm8RwX6KrU36rvGg1aR",
  "key23": "3CNhqkQsKKGietoaE2hCB6bKQGc8KWwxVYmfnwwdmhXSEpLQR8Ttcx1vmiKHSWrtqfTdxtneukDLQMT161yWrd4A",
  "key24": "3LwaTj29i92CBgZ45cWghTqJwpnfy1yYTSxuj7wDNttUsuLRKq6XGLkfM3MjtkzgVZqs1uakAXMboxcyD2x1cpWr",
  "key25": "384yLWYWnAjvTLhV3wC8bWf7T2gxiSyPJ8qT5M34nM5RzTGficEh43aeQBG5CfT4jjrmTCrcMzGe12oFV1EDG1LW",
  "key26": "4XqKfPJkkkhpPv4rECSBHKnqfRaqea3DYL9MZKC6ttXCd9C2omEc6eNFcWMxzRCe8SaBrB6cQHPojh2RuSAc5H7v",
  "key27": "5MuLiXg9CapDxjP1R2QZc9eB2tRrwn61hbEABNSqLEan4SAbeXucZn7evZmCxYKd3ahVqnrAytAz15e6nBpQzUAV",
  "key28": "joBJ4YcUwDVM1db9kTkXqdhCpjtq2vSaDEN4vStE5F2PvE1bakjhwe3YQygevqccqx6BTE43W1cw2aWbYc81Nti",
  "key29": "3qrBgLHWg8MoZncgknoWr1hzs4bgtU1jzt6fExV9QP2qcD5iunwg8qs71V1iD6kYHnEQGZyBVB7gBKmmqiLmrqvg",
  "key30": "2e45ZeFkgSK4nxvQ6nQzq9hmYgPdwik3f2QbJ1Wmg85Q6NquPta6tCxEBw58YKapT2SmCma4yFaBJRG7DGg21Nuu",
  "key31": "4sJ9gb7CSABMd6NBN1i83mFaJhmzyF9DswaPhxPTgCJGpdfXUXUASh2kKDwY8m84mnbCFkoM5N864xVpDTpwyLsG",
  "key32": "47QKc1mnDKTiVwGUhfGAQZBB3FK8TNhUmxyWxwZ8ez2m7GvXvsqRDheMhmGrET9ZCM9MFba9hnr3kXXX4Ebbiz3n",
  "key33": "58AH2khWu7q1Sncr3J2M1CDhygbYLncfWd36pQFQQ89vmDT2sivK5kRj91ecAuV2H2cjvcYsgXa1yn1dcWuk4bdC",
  "key34": "3ya5B4xBXMbV3ZuBucUR34brQJVRgMKZQkDiJBpvAb4r3SqfYS4RLmPxtYd9hidndKfk3DhPuiorPuD34FAtpwbw",
  "key35": "4RYcfLMkRPGdoZm4rcR3x7x6HLZ5xvQuu9SjibLrjZi5AapFG1Qe1whEnc99WECkfUjbx3CdLph3N2WChHcU1dJr",
  "key36": "npeHacTWGeTo7TwGjhQNg8shdj7zBVvHCEy2hP7LTrgFmUTASzVWLLwLsppBmbsFKtAGUBN9T3DPz4zEgTSqxGk",
  "key37": "2HUee6FGiNiJsiDhnA9he8oS4Cmcyx57kG6NnnhSHdfMh2Q6AiiDxmbJ8Cm9ctTfu973S7xoKETLdooNzEbrqiFQ",
  "key38": "3ozfPiD6ew8bgyDZdSrx8sLutsFgdV39nG3KEYF83a2mrkwAU5sv8txMSXxt1NvSMJ8nLQ47CYdejQMNapGKUREf",
  "key39": "2Up9BTp6n71bTNgCVK5BJM1MNZGuGVDGLJQPm9ncmjsRRswfCB9iy9f1g5ewaAoGomCtYv7hWjsLXjtuBL29Wi2d",
  "key40": "4fYUGNt6om1asFGBbn6PEwiVufbAQ6ncfo7pH2UsQaGMHtha6ReMPbWwoSsdYb3NLaMbwR7eEzXoKTjS1bYMkbbM",
  "key41": "3nGUrGtvrWGDPRTStD42dRdQYr1rNepaKZrMUUMXbs2dxVJRj56U74GLTaZ8q5g75EdBayT2aPNfhSiTWyRcoqKq",
  "key42": "5jkcEXSStXTQLSxYsqjBJJmGK22SqLzToHEUiop4nJ4FEYXqRDgNawT75WTwYcuRHcaBNC1n4EhEDtVc2prn6aSi",
  "key43": "4mS6Dzq76Y6r2QjitfLAiyHT22hA9AUh5SoXu3DvJxdWh7zBTZoMGBPpGvkdNy1vuuDRF7gb7mSKUKtF6n6tpBxz",
  "key44": "4eTw44qcLGiEvUYauFUJgyo3JzagxRm69uYrA7vNnEbWE3bj7HQN7aQXV3mL6ddoTtNrWssWufh5MrzTH9RRSLTU",
  "key45": "56Vk1BxLYh55w4LdLnVM7bCdHChhMpWT1iA2xrUdU1Wy4K1RbR7SQqgfmBQLSHo3kEGAHKX9eqE7t6p46KKPgsv4",
  "key46": "5uMBMiVrCrRZjUMTbAtLUytDYHGHgj7PR5VW4tkKZhP1ohC8erJW7gP7c5utoRQhvThFaF4WDR8EEojztbu6QCcm",
  "key47": "VoQUQiNYn5i3yxWfVG56SrBCFUG8rjUs9noAXBM5za1yz5Zyb88tqyECmKr9hKH34Mr9e1AeaTvKK8N3fLUgxpN"
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
