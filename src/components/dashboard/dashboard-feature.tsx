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
    "4fefaMUy69qr38oxUihQRJP3nKAHPcyBG4sbdgph1mpvW1ohX71oGHVPn4oS12FHJjtke1wrPMHDLsd74q2Tfdh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rE4FHYo3wksfVoR3kh8ku3b4XwHCP9h8DbTy7cpMU6H6SYDmLgaycgdFX32fbSqMpkwEwgczWAiWsRTbQ1WMkzQ",
  "key1": "Q4LnVsPpg26eJuhkHQLDnEDht5mQms3h8Wrj2ZSva8yuUwJhYyUXc3TWyt7vezwnH88dnY4dr5e6rQmDWU6A52s",
  "key2": "5M79ZpG7VTkMmMNUPt5oT9j3m39oTk3JmYEjTA8u5Bpq5qeupGjmVZsHuEE9oXRgKoYYeqagQKmbxipvFRX87qYm",
  "key3": "2PjxutaVnKxr5gDECGfP2KPt1ixoLkr21XD6EbBeCD7dJP2XAgXEF3sy7ancB82pXcFcChBSDCYrCXmBch4joHF2",
  "key4": "6zoCvwgrvp4neqmqQ3pMZdpSD8x4j97rgs2sdnUXKD7E6s2HehW8ufRMmPfTg16RCQHG1Vf9hPPmhP9drfsviwT",
  "key5": "2trLBkYtioEwwhkWj8fmqPfRZz9ep2DKSRVndd6W11VFdJKBpSVqMCobth8QSCdrkd2UVYFiPR7SeugqjgsVFb1X",
  "key6": "59JvsJBv5guJi8UbieBhMQsBiG9W53Pbbe9FETjWrEnoS2VLyEANHvvi78zVokAUygLnZy3H23bEfBhvh7U5dRbb",
  "key7": "2jskAHN7vfrRpouscUoobbGnC6NpbyyUYmTAfNoCrPkNFES4KajYm1yNg3wnGVgqpBVmaKURfoadFZ6FVg4zGXHw",
  "key8": "2nSyiBHYeDjwTFWRYiVHdzQhTK8h9Cra5mWsh95eVXb6quXiF7efRMF7Ry2B7tyc3A5TobqYaKoB7ZwSudCa6Gy8",
  "key9": "Z88owjaoTbLnjCJ9DbtqFRY1PF6ikrtLiQTwpKY7adUYYeNxdqpmayC9Px5ajAUNy2juFygwAZ6vdsmaiu6dgHH",
  "key10": "2Q7kVgkE9eyg2np2H1ZtFwSUpGdRTHuZ5VNWT17FUPcddTUVba5g2sTFwWeadnbCYZbkA4w8R5JuwZfTVSi3RLU",
  "key11": "FstFrbNfcSVNDxR2KbNyGdprhmhU15ofSEo3QKwLgCwS6dMFfyVvFraWRCmZjRSakZ4dipsb3Ay4h5wSkQ5b4L9",
  "key12": "3i6eu7hLQEm6Y2mj4qkPKoecvD18W33uD6ZDBAL3sRb2Squcq8CQr2ZRW6A5YUWMFLTKboxGJ75GzERNvqaVxDc9",
  "key13": "61r7DkJdSC6tt3qp4AYRwiSGGgXQ6gXHnw2jkXsSe3bdN4QmNBfjZtLFZf3wFKJYiLfcxBy3RK4dRJ3y7GMs3deL",
  "key14": "35SQBpaSUDV7d6wP1y8tm8UXpoqBsWyAL77Kvx5EpXE25Sn1czwjS2rfR8r8YJftToW74XwM21UgoyjxW5FVxPYj",
  "key15": "52TSXzWq1wMqtFrsXYEzUP1aHaupNXk2LrV84DRPKLCX1R5UWaKSxJ9NKunHZLmcQEtYCzsXLLmZLfbMKFdbki4S",
  "key16": "2RwrQwUdiLCgrPohJ5w4KwQbBdmezBejRkLZTCPkxCwZ3536WoiQRe3GRhGuAr9Z5n6YRfi3WczGMJWpCRuoazRm",
  "key17": "5RJtQx2WtuFoPe6xMtZVC6hP9xLn4p8YvcRKxfj6zwvDCiSP91qqpzsGLEVu8t4rBw7Fbi2zQpXJvWbw3TgQgBv6",
  "key18": "4A2E5iTtaMeZNzWc5VBTMK3r4eEuV3oez9bjrUsXBB66F61ZZbany3nwPXt1SmMapHujNWxkoePRtTka5n5EUo71",
  "key19": "2Rki4hG7Cp34a1NVJSiG5JbV2VhzJJPRshCqyYdYR1hvoqRMnq4o6zi6DsPTFPnuRd7hR9SMMPndz9hMEn7MscXJ",
  "key20": "3oJQN4A98t617HTyV8ieAahZam6h4UHewV982w75QzQLcPLkfPRkrVtgjmPAfEEVhu18km3NEU1oxuea9HaKEJxA",
  "key21": "3779J6niyWfrjRdXQbJ9Xte7mDaEUPWVR761MEPQhPZW5EE6Pij8jxVfxPwDx1BzMwNJEGrLVPpypP6kJnJzY5Fq",
  "key22": "5zCuwmCM1uCfnwY28jWuAHAfCNuZyrsh7C9tnHsxfeAdhixfA2eqdJ5bfe6t4powtHM3faY2FaPBp5SD8UCNmVuB",
  "key23": "4Hpzq5wMNqoPz3WicDzyGKnTBLNcs5DtEKaim7Rc3xbLgHhYDvb159oeP1sUme17v1Nt9nxPG82678jbmn5iaksL",
  "key24": "2KvE2yT6s7azS6UZhE6oTgy3bBjV2gxSvcXVF2AUAEPfUQ7ssfwnr6DPQSyWn7iQVQLGd2LSu3tVLdWEvEz2uBFZ",
  "key25": "2g1kyP43W1BgFgyBCaUMpnyhwdDk2UeRoKokDkRv52WgNdxQLDQyhYMyT3pCpeCkMk9p4NUSScUnGDANVq7aEK3P",
  "key26": "33XuiX7wCQkYYePFgEf1w8Wx9EvJ2PyhX6aq3J6bf7RRJaFCHeDSyYBALBYkxjD84kmQVWGHMMQ9RkdUv4ocFJtg",
  "key27": "2LDtoYTAcTXS6rcjXQ9MvByoDYxiEmgJBi6xkY8x73bcxnYqmhHsDS6vxa2oG7ozymUubBABQtKUu3NkA5rRirp1",
  "key28": "4b9horZzV6PKwWGKgMmQsxR4QvFMG2YemmgY2ehBii4Zfz6UqDkGZXPjehk7sYmr4ELdcrVBTkSzrv8yDFvjwdm5",
  "key29": "5B2BdJ8UdwTCGbQySFNMzP3Yw52Pr7fnQXn5NrJRyBcRYGmKQ3KjXNjoW2B7Mmg4rLnJQT6faQotP3kZPNDgfY1d",
  "key30": "5jkWdD1fAHLdsKU6Kgef7iNC7BTKvTRiAPy9AEtdFTKW41Bo5KmdwGLpuKVVTWn65PRqNS46hbqFkeno6BWDhUKg",
  "key31": "3GtgkTSJBNqT9LdhpsNkYFybEWZCNSsVs8rqMiEVeAJtdiYhgM3vZedrJP6bx8tXhJBLi7bbmgDPeKXaVmvePmMM",
  "key32": "2LQyUCiqWCwaBCVwBYgohDvqBLckS57eQV9e8naoPNtynm1qaSf5GSLmU9ixXB6DRTm3z9y4ft8tTz11etfmn3LP",
  "key33": "5tJzqxxoEx3Shv3VtknTGqseW3XNkGeUhE53swtmsNSbnnLjguGKwqzcJUBmVAssmtYwxodE6mpK5UYPgum9RFuL",
  "key34": "2j9ajtCgTWjaLsrjYs41yH3sBTtdZPxC1ZosQDJazZqu1ovsBx5k6WwY8tyCCnbMcYwnihwBb4HrvZ4cM2rcNgBy",
  "key35": "KDrAd7nsyGHZtjjsSPVnFirWW1ncJ5NdoCtVbp2Pe5aDjCHrsPvh5u43a2D2TqiQfTjrnbvBg1xUKK7vP15GYvf",
  "key36": "2VmDnqMk61KFx9DLLjyUrXrS6Yoc4M8AFXAXmqntxyQ85B8J4cSCRMphQzrELoXT8V9rQWuP8XjLt3Q23dQRRNs3",
  "key37": "3oYsze9ozmfn7SdjL3cNnkcqaoUKzGYevTy7Hj6b7gmNyGwhMM4N7rwinHgTK4K9xdqdp9UQRN91gzP2M5QV3U89",
  "key38": "bsbdg8gKAocGKoZvqfwfH9YFM4gnHxxEAwtpQWrARuUog9vw5s3sUDQEEnn9U1ir2p2Cohc2zEFCTLFXVkT69RH",
  "key39": "3VdpTUKdYup5ZLT9asF4vpRBsMBJFKTQU1S74o6qy8zf7gT2bpZrWyskH5sz9PXjTcAhNvz5Vh1YwaM5Xc1JcwzR"
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
