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
    "8HP1D7xb1WcCwLSFMKNvps3QUnPoY8ujBTBfGJcciSd5WSFdLmhLpYv2FW4W47ZXH4ozYSmX1iAFui8Vzg9872B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QKeUfRDwsmMXLbyshigt4HpsN8YiH6ANpsAsgJ7gii1dCMzWEnsGRyJBKVAqUb89MPYHW428jHcec7rpaDixJp8",
  "key1": "3y6uTNYiLGBehGGRMnAWrz2g367CTbECxY1p6t62jXXrSzdBUa89hnKiTHGiZFd9XKNXETdp55ciGfmyx3tToFVp",
  "key2": "58bdMvyCgzPGT63Rn3gsrZH3x1b6Ki88vQz6uAtQgDm9s6GHVoms43mA3MPQa6rQsvZTa6Y81fD37MyAqDZJompM",
  "key3": "yfJsmXXcvKj2JGsnk71cnWNw6VKApBLVUtyqgkRb6K9KCUEyQZ1y5p3B2QTtgMYuws8MznHxUw8K9Lpe8SUXDm7",
  "key4": "k7TUYh1o6ktV6S1ZBGeivVjsN5yiZVP1CL94ZhgmHiyLCK4oGFw2DUeDq9paCUD9EQBft5pPUPGipdudhj86MxJ",
  "key5": "4fmZLfyr5Fsu23cJu7tbmWsUmYT62RjhGcD6pSj4JkQxvzNZVPrMRGejv8dh9r4Vk2Fc36c1VnaFqmGqmysGDpiH",
  "key6": "CCDEfGCFCiemGhZKAA9MU15xCH8SkMt21R963HxwvM5N1qdRS6XW81VZ2Mo8TbdojLgCDWAFbDYyNst8VuDuMkk",
  "key7": "48QrUBDckGzQ7GEmqxZ5soBhBJ1Xma5Lr5BhTweocub82MPWMCWqvHULL4QWZdhq4qSVrkW4jbvxsP9PbG8HZhEj",
  "key8": "3yQwAGr666yfrkqk86P7eitCXfJbUWHUe7pemtbXnqqargwdGoTLXXHYhvR1sEG194BTiyrhragTDF1TZprieQwn",
  "key9": "5JMnSaLjj8RZ4eViWTJjeTJpbjHLm7HqwmupnxouqUof8gjZNSLDR6y1irs41q8ELDdtmg6ridd9CkMPRafKHcPK",
  "key10": "2A3ewWaVMzHbL5fuRCdkiYFQj7ZgBNAEJVm2u9XwJ5HUXgthTp7qy5GUF2jBteY5ocC1TmBEX8DJZWkLCvinohH2",
  "key11": "3rmYeFAB9ZVCK2ji8y3ASZU2wyE3dS8ug4Bb2z7YuWNfLi4d3C5kwVk69SbmxDSUU65DHa5Cp3K3d3PAY4kpie5j",
  "key12": "2AKrWfzNnT44KUkbuXJeJTJ2LyWVyU6AG4yAcrBoz7AL5D3YRYo4xTYjV19xjYjZ7Phqw5CBudHV5E5X1BA8MioW",
  "key13": "4aDy72fYqWMGaEdHufYE7oGN1ea8TCB2BRq78cJX4Nbenwm6ZPLqkrcg3c3EtcM5zXxbtcC65KT4fX6PZUadXmru",
  "key14": "4FFjKpQ14tcJdBkcAFfdZFAnthkjGda6gTHx824NE5ZYNV3bprKPDf5JnrTP8Bika7TFvqPPzdqS3TGDumTSMfKE",
  "key15": "5i2XWRU9Mfrzrqkm9Ee2mPYbXEaxnXJFAnTSRVKz9ATYBscMNKzAHS6KT44EUrkpcPFB8t29o5pNbGzAvzzEo8nr",
  "key16": "5mVQyu6z2DPeA6hr5HQZ6AcXUgRtfQCze8EEKFDQkyfAeo9beJMsWh6Y6CNKD2GXXU3xRzUAgSjZwZzYc1UKS6FQ",
  "key17": "CqPsQJzpWKz9ECTznmYoJ1toAnLmuFfUiXkP3CzQqwhyLMNLjwNEYqQ3wbwv9j4yVPZpcmAaER2nUHDkBgYuoSg",
  "key18": "5BqzvACtHR6jeejD9HQ5N9toFjgSuuf5yNjTnD91PPL6Yqzi5g4frgj9zmbDFZhhyZpQ3D915aMqnqNyszNgFgtG",
  "key19": "3HDCYeM1YypRFkBSrgTY7SGmgVThYzszMbfoEoZZkwASnv9Yr6CUm6BSkApNEWKqR4NLJzeZKpafbNRBzWw3QXU4",
  "key20": "VLqaHmQtA1dpHqBnfGeD1GxdXSoqKJypjKxf7QsqJUTez6HKogMiF3MeYQ8GxVxBYbkQgdSzLRGwy7u6eMraQmH",
  "key21": "3KjJjjVqPyFRhVnEW2C2RJzGgmDmXZj6ktGDwGjW3BEZ6itska9cBZHfLaq48sydC5LLNG3zHW8tGjo5qYKSxQkz",
  "key22": "2nYKN5K4pRkpTNrSCKQvcV6T1jZBLqZqpRdRTWirNrVbnreXRuSz69sAoxB7xAbCC8VC8Mr7ZhtXuqQKDb6VG24T",
  "key23": "5GYtYAJprj6mWALLR2NtuZHyQZ5BRZVqGG68afmnPCgdtHGzJ3kbKrMgLbHQGJEEtYXEf6cucXiMeArwksMG9Ysj",
  "key24": "2UmeH7ZM4sfgPN8DsrksHiQtY7jNxLXeeA8gMwgJUHat8e4LyjmBvfsYXk1uKVrRKruZiVcUt4fmt1vqsNBG9K21",
  "key25": "4U7ymmDyxRvkgNmM79xAg18qpHbd5H9vQEroHPSsE9LKKeTaWDieB4Ys32mH6HUWJU34cahGECFDgEVtPq7F5chq",
  "key26": "5Lp1suS3a4JhyLkdtc6u6dVCQAu9TqyNU5aXy3QXYAaVSqj3U26fybWXWeBhdcH5w6CiCF4fCNhMp2AnWBnuY5ki",
  "key27": "4Ygw3N4AaMCwn46MdpkvzJFhfmRXwLnjrXRqubBMTXhxgB2s2jZGeFJhwzuuRbxCWLgZCWx54F2AmxHPz2z9Ria9",
  "key28": "4RLhCRuM1TrQ9c8nMPJYFx83DMzS8xdnCyuLYXyXLmyxsN5NmLmQJdyBEnCLGgsoc2UVG6fpnQkFyVPmBxNwmchf",
  "key29": "5X3iZadUTJp8UFYLcFqe5c8QbaE2GoJtZavNH4mofvrPM9ar2hgEguCeBEcyZAH73P6tL1aGK5xx7W9ZCJPmrEMN",
  "key30": "47gQd7h2L8wnTCkggre9WJKcUJHW2w1MtqoSVhHnrbD8aRcg3mpDbo82CPb7XULrEonEpDiPxRKcGm5T7HTmp28S",
  "key31": "4Jbe2ZsZ3Mfbv1EUPgAoSARqo3Xk1E7vuRAS1rdCqniSq4uM5xBvgXSEBAnbW7e3SX49efzPjkyTe5WL5LhiL3TC",
  "key32": "4BxGs1PxoXV1DUVt8iJhcnTad7dv9rfXwTPj5bwDTYW1nyxtMYxyTLCKVCDsKUsAMAKrn5htmoDXXGsYpgJSBNPR",
  "key33": "yknXJeZxWB5QiS6T4UyfqZypLYq9nsiXqYXn9wyuTzSaWCPNCDGoU2Z75bLKcdP6bwFB3x6j1BZfFsTRa9jSZfz",
  "key34": "BuusderCXdjeCgnoKKr3Nc44k2AcDEYr3TAvj2YeSrGkFwAtJG29SGbur2XTjQ4CYiY9H37j42gAHbDicnHSrkX",
  "key35": "3kpQo77JBVVokGoVTrUsCTJDjnjzWKDSdvzmyeYm2sKKkd12pNvyNfHnkNzjcJHzHCgm5AyWkDU3dFgGkhTTdXfo",
  "key36": "2V9MGWt4eNqb6ASKEGCFe4jY8VdJphNnnyf7djdTrn8jnrH4EfiJf1kRvmk7fgReCKEE4RBrxB12794uXLFMd4TS",
  "key37": "28mKtpJxNoVnryXnaymkDrdvFRH8aZkZRdQgAvu1rAxtEnhwSN15R8swUsDi7LGghE2XvBYtnyr1cvAytTgRRzz2",
  "key38": "4AhBmcRyphdJgvKzyvH61SZUYuYMThZhSrmiZ1xUGbVcbtQy4TAEP4SJqwT99PZgbh9jyHEBiUha3KnB3QF7wYEZ",
  "key39": "5zpaLzW3Euasify4NDgzhYhnZZ3K2MqBK9CjDPVShZ3vJWBPu6EM3N21zs3EzC3xBCPrjPFw8RYUmRts7GTFQRBc",
  "key40": "3YMyxtsTMUerPhgEktcRt81kDWswyyEFhERJQoM1NH3KWZikhESsUru3E4YaPwmJGrAdqsGBZ4yp6bYtekBRH4ib",
  "key41": "DfAcu7x23hwWbrNNbsAfaEkTUny6ApdqjbAPraewuajegWSLwWsNT6YZGCWrqENRB4wPsxfuPrpu7Nw7JwV9v6e",
  "key42": "4RQTAPGnEU7knWr6b2ChUy65uirRiNS5pv7NZHLnDxjXPJzUQUbHmKF4qEZMz3pUn133tWQoNrgi1yj3TD5fYoGT",
  "key43": "3p96ZXWq9coRP4ChnHAhcXhT4UAXg8iPyqsgh7C24TRhEhqq4W9DQ5LMAKZPJs9FS2d6BVjF22EC8L9owxKyyMjc"
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
