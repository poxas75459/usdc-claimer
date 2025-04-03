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
    "9KUfijCjiVZjn5idMCPeFUvpAJDZ7oVMWZBJQawsz4fQKuZH6SaYBLsikzENo7fyJL5Jz8pwMynWbY2DoM3rDDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ZwUiWnhkRZ6kDsVwDMopk3frZDv12qq5cn1QXZzy1km7uviM9EVzv1sWtErbFLk2Tp1LZa8ig7df6ySTK367kp",
  "key1": "4ZED3fF3aDsyBCE9JSFK8AeYXvhVb2MSfhRWZ9RJaE6DzPz2Pb3YBdgqBdXoDiwfvQ41Cn5p4LB53BJq2LtYNbHb",
  "key2": "22QN9iGUNAzwSp8RQxVaJpjGbpD2sNP1Cjn89zWg4Pgw9j4Wsnpeu2E7SNUKrVZhHqQM77U6zHLswFTkztniczmW",
  "key3": "3sX2XQem9rAPg76qXsc17QMFMEzfaxjXbEzcYvvqHJwFd4MhrL7WjRbXGHepw7vYu9swG2uzrzioMruJUsShnswM",
  "key4": "4ofpj9p9k92FuXL8ehJc4BYxggaYDHmdHLK4crTVqN7tvefqoFdvBZPLfmwEcCsJSdE2XtU2yKxCFVBmZvC2yLTX",
  "key5": "3KUZGgBdECd9ZRpGaGgoGei1txCKrMjsAnf8wgr9McSaxqHkRkznauftXCJeMdhG7bSnzbjDR6i99aFJZU1x8p37",
  "key6": "3qB4cgWcJTNEcXZ9bvFWKSQHNvZ2bQBSEtTR2GajXcWpXrkT3w9VkBeR4fom3iCmjgez2ZcbmMdPXeEhaX1MmjMJ",
  "key7": "2oRoFjwBo18e4MAPHGxeZWtLBSkFHPfy2u2e8XByQ5a8HKFBTQ3cqyA8UNsBVo3PffAkEmP59AqhP3tC2gBYAxjx",
  "key8": "34tYSUwi7iYGyNw36ujT7hsLVngHPBpQKiTj7eAbQsf5UcMstC46Weog3u4Jdkw2w5BwaKHEextLGbUubxeekaPw",
  "key9": "3hRYvkwsa13tcDVgR5b7V73GTBu9iUriFXxQzBGCXPFpVaKmoyDtEedyeaacB9DpHchixX7LQUuS6SKnXLAFhP7E",
  "key10": "32HHShw8UhjSrwVkv6u4HXojpXwbTebMCFXvGRzyLKbrBLECU5epQPsjkdAzX3o2hC2XTyNNjuRnvkDKQHJPAxUg",
  "key11": "2CYuXiRzGWDP3e2mrJtM5RZW6y7Zj2dGURBXfvC4jd4LRuhUGNuCvZSg5uwp71LoeuD7unMZFZU4J8QymYnmDSVE",
  "key12": "2G3JZFS5s9NXRKHChRDuobH5z5veAB8e8DA5VRTi7YedV2ZQETNBcEuQQs73zfSqosgnv7cJF8C2eyJFMQGNbqX4",
  "key13": "3hFc6qmTSs9bNcDArrYT1xshzVnybHJ1FN1XvTT49KPX7JfSU9VZhrNmwzHVsWAhmwScDudkKeDwV2koLBhng5DM",
  "key14": "5iHsDMmwJWmKmnSCGzyDEB9LjxRFBULxuXEeJb9cPPwmaFoTa15qUW7thKKZSAV8AYTSesn8P1oJzSQknCVjYNgv",
  "key15": "4psqKqYFVHwuNX5tsvBPxSD8LySpPYaz9WVeyZj1BR1Pvf5TgRYVsQ4s1DMMZiUvkDeZcW8sNCDrFd2H4ZMwJ8py",
  "key16": "4y5Sst4XMTCP3F9XyscMsybrzmkeJDch7YdoZ2xiBD1hxcGCxKti9m9WrZx3HbxCuSV6GUgB5mgCyX1TwouUHZSR",
  "key17": "3zvFNwFvYs6NZM42ZWmRHSGjdeDEYy9cM7xVKzMJKrMmP6hNdp8QXMacMQpmE6PJJoT5cWmbUkrvJceMVid1jocw",
  "key18": "4LGS1DHUeG9hqmsVnyU1Mgct6J1CARs5TtEVdLM7dQRiCwXqvHt2XV97k61FhJZkqoFZNVJncHjBjZ93sJExdwDN",
  "key19": "61TXYGkNzRCYP67jDSBUV6XjP38KsLSKPNpRjHcwJZEPKe61rsKWun7JajXCADBo4kmsncJwrHimSbdshaY7Syam",
  "key20": "3VBCdhndaxG4r6WssX7wfmtaLXXvpNWvnEfBnzFQkiGgTmTo7akewyN8KAhxLBenXor4dpbX5AGJdj7PLFAph7or",
  "key21": "2gTGfVrJecye4rccePQ9os2ji4dG31q8Fne1P4hk8Gjg1pR3p3uLJnP9o6NFeHQM968D49oTYNSsU71iWnDJaBY4",
  "key22": "5ssfY8pMF3os2L2m7jqot96bXah179Y1px4nGuHzaRwYkhgNbfWVWAyn1QpAD1EvAprvTwL1TCMxPh3JSFLxPiZe",
  "key23": "5WM2EWBScTB1PtjgtxWZ9eUTroj7p9GTBLxLZGZszG8hqNiNGCk5No3HjozeWZ1rE8XZpvq3jiGtKqEdWxuKCKUv",
  "key24": "3QuqfxCJfewQvVrPwmBabzwbHPB3KtEz1Kdnb9H55c8NTWdtx7Uumnoarjg6D14Yvwae989uQmzbjUER1QterBfG",
  "key25": "3WbXeoxUXK6gi3gAwjyBFtcubdFkiCNu4EnxDsHJyMVk4ULQDJoSihnG24QFwCP8NLZE3tN3GFNyo7ygFCL4TDzA",
  "key26": "WGsNf83fYh2emLaZm6rNz3s3xCHVsFa8xvm4837SuLkXrMxMXHRroquj49Z4joe1xBhiPkWNa962RmFH5rSDB3d",
  "key27": "AVxWVfEJgkVTZBhPAw44cNS18JPMkftBVb9RcbkA2m5yp5AQrwCtJDfEJuLR7EQLX2ScHSedQtqxNoZdok4ridS",
  "key28": "5hhk8pt7i3E243A7Y39awcXHFDxoC71tdpa9WWuzNmC7fJc98AhaqAQX73Ed5ehn1uuccCv89jVSoca6fk6PcuFc",
  "key29": "2sdLCYJpBaNUTgZ5EZc1G4nK9NHoX1baVTFxVtARTTCUHyUA9dqB67afejn2KCwdaKZwwB5BoUSzzz9SLVFKjp9v",
  "key30": "2GvHLPmj5HxwcVE6p2LsNA9K2w7wU5dgMJzwEuA42u5CJu2h9sLeSGM1LT3ahC6najJ8XoMy9T2rRQuVtJU8DLda",
  "key31": "2ZVD995rKRrCK5K4AVM1HMJ23rYCveNT9UNMMJauubb8PCFnrXfqAgvtMvbeN4jVaRndcm9E7eE7pVfSjePWzaEj",
  "key32": "nFdqFHuR23MHrdjAsuUU7p2EKViYLJfKgfsG3Y937XZ179W71j4DBwmBy3tS5q1YFjZXQ39wrCiZeXDJKcMikFF",
  "key33": "4BEfW29Y1ouhAkPXS7mbGJG2b1DE67kFNJsoRWWvAwgT8c29h93zYoPZ9e44nTAfUv5g4vUFptkAMMEFzb5iPVnf",
  "key34": "2vCLGdzWtpVQRJiNPF8kf6Mn7sGATaT32dt6bMpuZANDtaxK2Vad28jedhpGFCP2iP6n3q9u1VywvJGNFcHi2sto",
  "key35": "2uqeHrfGtuFUTcdz85k2qpLNvKYCDRN3CSc9xXxurbofXhfcUPdrA2azkeMt9SNxNpoKLhLLs9qyse3ZdwHNF3iq",
  "key36": "5fuCmWgFRhDe4mDjPnL1SUzgfs4FCn9otoL7q9abN3aaLtwVmzcXPms6U92mEif22CKgCjjy2pTJsGoKjgYmTy1K",
  "key37": "2MSo8mXDcMpPJSxkuWzusAeRPNc6kdQ2s73J33FyYYQUdp3eskXk7cGcsXGtjVhhRjKHfcQH4X8uYM735vir5hiK",
  "key38": "Q1ViRnb3VApPdhmaiqds1KsFcYFppBTNY2qSF3h8LtP1TnvYTG7ssabt97j6Yrc6LVVJC7EYQRxHA5zZbJn3Prh",
  "key39": "7vicehnX19HACVDe3zuX6ceHKLqfUVx61AmHf4EdxQUbScUMxXXdKYYs1i7BkHBLBYmr5jyLySFHTrsZ6uRudQY",
  "key40": "4qwkNdEY7o2MLSkFtz7gv9qi3zUvUCVLu8Pyg7fqLYGnnAaFCCV31z28hDJP2ZfyRZGG5y9ASHXcFGo5tehGxYwv",
  "key41": "3HQM6BxkBgxZAtg8aDcXvBwu35rvBkuarUEs2np6njFU71G7xrbshsLgryJcyzsd442H9KP44G4NX1eq7BV5sJ8q"
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
