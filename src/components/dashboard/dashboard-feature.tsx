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
    "2TjbFLhA6LnudAhUGNHqQ3E6Mi1RQwKu1vYdYcsEUZYfsPCGQZSLUdQ2dprdBvpbACM8q1yAdxXY533oivqdouFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49RJQzNyApKzt1Aq1GqEFMJaV1GEK36TgLmHcnvD4ek2Ur3cZayEAmCGZ87rofXF57B29GfgARdr5Mrwz8Y8E7Hv",
  "key1": "37X6q1ELaeKHhVKVQiRCZk2kLe1Y7DbSUkxmK3dFeXKYCXhNifR4fZempoYgee7293vWYPGwyHJyna5SGkUP1oAa",
  "key2": "2NznZRN9uyeKmrbek7HsDcFJe8fr5cPfoEP3snkZpMGXcq4bSbPGV6C8LdSsPoeX2DQWcwKo6VzwFjXdXWeMciMP",
  "key3": "5s7VRxd8Dyy2GieUb2zeNWkAKywWyAQ2Qq1FJKEjKrcagrLrviFhmdQKMAKxYiFHUEUvuqk3VDDWwXGz6b6s9mEY",
  "key4": "5uVwWLL5hF5pg6nPSAydPS2cbkrDFG8oz1EojSDjdQDo9ws9NSWWSbTXobxkfn8GapDSWHDv177ew6EMh8HYcd27",
  "key5": "2DX5fGnMa4y4gNYTUvZh8RWpPxSs6S382is4FkSBaUWUb8PAGQkQ3sznvdqjpACyUxBqZwkunpM9RP5qTDLgtS8q",
  "key6": "3Yy9oKqdBFuBuWay5ozfiJ3h8fMYUyVytQzYpYDPLGXLSS6rmZ3FSErpxq7u1AjcihqLyC8tSd3hSSSzyBBbi7kA",
  "key7": "5BpQZa2rroBGbSr2ZpGCpU1uQdPLRmDEibNQHCHWcTRKydphEekub23yfUTRjnsrUBaRow5LtB4bLEP9MLyfneAr",
  "key8": "32CpMq3xUmQ3qFvp4rfYre45VdcSQsG2d8Xd4Q5gNeHLCvoLEwEiBG9t48QEynjXorXnXRcQew375BzpvzXxYAwu",
  "key9": "3gix4yNRcsbW78Sxbu42gpdCLgbpWyQvrRXibT1Aq8bWeXjaWYgBmKBhJM2GpJtzPKHWYgTVkSRcFZ5PVPfWEgu1",
  "key10": "aokH1oqTtzXSfYz3PBFy4hvPQr1uSoww5xoU9nNiJ4UMpUs1q6kqDaGR3kLvMbY4bUuYqjR3CAehyj6jC9Dr29Q",
  "key11": "5JQeDNhURBoG85VRdA5ycCyRhHCG73xH2f9T8z5HoiemSCku1H2jPHCFKLy6Qqnrcumv8EkBVCDDQ6BerXCLU2kh",
  "key12": "3LyDDXXh1KSAYUNSvUGvneiVje7Hr3Yfiu2zJAvBTdTWFJFJwYvJ2RPjtKtKyujMSZigBJd7KgM4aojAiNzyp5GB",
  "key13": "3FTG7UCATAtKh8mKHVGongKjjnFP6Sf6gBThw26DkWMQfUk93bCftN7zfmkKD1JXuYFVGcf8Dnde97GhFHRfBcvv",
  "key14": "3BE2BRyWSjN35XzCXiCicLG9i1AxAEThN8hvD86XZjfJ1zsC6ukZKXEkWpmK9evpPLbcRo6paPbEpvxA4hV3e9Hg",
  "key15": "btaUT2jyyb6bBaq1B2nkLamaqy6cjCkN6vDXqWsgJZoVEGfmaRRsr6f7ZH8BefkLuB5QaNDwoYFuTKkWNbUro7c",
  "key16": "5BBVTwPUtkixZWiFbibkSG2fipboexXtfsP1jHxvCLodgCkj14hS7J39PTQhBumEXg5RUYndkqaFv566kw5b4y5f",
  "key17": "4jvPAGrfe2xznrA6xmxwaaC4s8TMiFag8PLptYn4EQQKQWi7mx9PWQM7LFPsj97skMhrRq4cUXaB8qzT65MvLzvQ",
  "key18": "51iEMKyqxK3YmZRvTVNXchYDFRLVgeaaQehC2vdyVBSk6ZsLvo4gwBihNHc5zfJisvhvPQz3yXxTT6oBwghcPJg",
  "key19": "3jYDoTYVh75KFnPaCngAhSa8kPr7qDDXARnXTaRCr7LEdX1XH52bPq8pDAzhHJesdUHq9DjG3bRcsGegHSfu8EYu",
  "key20": "4yjc5EtNDGtxCGAJd2jcucCfnpy9hQpiE6NudcqJpEUxr4jcfMbQn1c8gWUKTzT6jxeaRLpFEonXWVq3wkXNthJy",
  "key21": "D12tgvmBLvpTF4W77KZxsfgmWmLYEHjhL25Ym7RS6NKkLqzPQaZQU6JZkGksZRea68wHnKXFGJtd58C7XJ2Vjcr",
  "key22": "qCxLBG7W1RzLWj1dWxAZW2GYXuDN7biYWG2TR72u3UGw36apmn8vNXR41pnKGkThX43jAHfARa72njigm6zHPhx",
  "key23": "5xu8SVbeVWYihiwfZREkWWGZMBYUnhcmSCd2DSAJLYzRU1WoKfHsUTNS8D5WFCK8rdRBDeVcLgpNMxxhGdtZ6mWu",
  "key24": "3t5k7SYVd2UmBVKeE8Fw24pQq3fmJfLQApXUsJbSmhfahEeHey7iaybvPehBr2zcKt61ABTQ3iz8L3BXXZYduNoZ",
  "key25": "3XHzjTX4iTDuiA6nbcwCet66UAfmcphci4n3H3YkSXtKXwpW8xxoh6cRV2B3ermWin5pbzcR44jt1MundKoq8xeE",
  "key26": "4gdCav7Ji9mqqF6oH6SnEKSwbZyEFEAYJnaQ87kba4yL5wgtMWAFHkAXcLiQwui6qZWcoZrEiNaGzXM4Yw3tvFL4",
  "key27": "5yBdjeLzF2A3ydz9SHqQ4hM7Y5R3ASHs1sZ98TcPG6rczUo7DBv8WvFchk9sb49diV8kpzN2KDycSrVGaw89PJzu",
  "key28": "3iCPmFzVLuRMtetS7SfTHHQt7BLsyYxW3DRSMmi9AV1vZusqEcuyzpm4hYG155qD2A9na2UiP5rFVHjfSv1hzNKZ",
  "key29": "5tWWzVc8Yj6qUb38gL45r18zj7A3GpCJu9QkxwSiYugJGoDwmBPNTW2Yv6AjRA1qzkhh4DtUFY9KjDRcB5CBbyqt",
  "key30": "75xRJAMA5aiRFmmk6HyJwkHTYf1kx5TG9h1Z3KA1zV1F5pCmmvZqf3UFX8a4NbQeZGpmHUFmsM2nn1rvPzQ9kzp",
  "key31": "3LuefhAFKuex6YD47YnVGohQLFNeTeHLJB6VngCkmobBtNC5cZYgpXehutXpQRvAbk7hNawhwZLjfxGGRXKHqkVL",
  "key32": "4JcQdP2Aoz1wkDqtdZLHN1CGKqtiDviLVa5Y56Lw5jNRywUxQip85UWtKYpGb7SVonnosCaa1obbWY7dJGuQdkNu",
  "key33": "4iAcUatcmCcrqArJxvhKhvZEr7MxiMrfcpA7gNWG52LMTBhPgybQRSueUCK7kzaNg7CtquLRnZkd1za2La9LyCNB",
  "key34": "3R6NavnJ7qojkqPygi884pdqW7R9o9KVBhs9o988MW8ncoUPyZ4hC7ZF1CEjGR8xiLwNR9t8dhPrQ4vzAwe2Tbam",
  "key35": "QLciJY8aHt5yGsmufaeFBTAZHUv1icPzwEmub7Po89LTQeAPzvAdb5EgduwFa2orWqeZG2gXbLoH4KwFQR4kBda",
  "key36": "4Bf9GCu2u5sKEugVHZpbUnzoY3K12JGm61ESPjPiYgbAviEjMZhjdsfZnnw26NKF8HR95r2kRofq4yoZtdVabBRW",
  "key37": "5fzgZtEeHXxDvsaLMsbMueAH3YGHu51xwM4AMmHYJNkm2MdeUzQvWfz7mcrKNVTiwzXmi1swnvDW6c7pnMA5Q4W5",
  "key38": "S3gytr9Pukkx2PaUXEUd71AnYtJsKUiqSLUbfj3ryJH7Z6tYZtLUrVXWrSHZ5q6j7jGd7Yj8C7SeQ9HxaitedAt",
  "key39": "4QQ42V5v16CvfBBnQvx34z9RhJ5zdnC4AnauHt8BgMT4TMBMZCgS1hHwVzQb62sGgos3rknrfr1ZaJxpBRjFg6fF",
  "key40": "47n4fNAtUqGtWwrnJsWfXuujYm57shiNtCkV9gVyVoNwCFfSHg6dRyp7EaxehcsL4ZTH8LreG7BSW9564ricBYJx",
  "key41": "3CkwzWvsKp89XpLTURzpYjTnCLcvs3yGna4rUEBbj95sKBVQ2Fec4pkBoxx8J9ZkKiFj7F25s1EwUgsi3wq8xvu2",
  "key42": "2Q1sXbuuws9nPqEZc8bPNm6u7RkoLWcGTjQ5xtHX5XAn8Ffes3wxFWM3MV6VSZGp8JnwCQQyf92GapbwX42fob3v",
  "key43": "4SNYHMTHdMXcwQufUZaMZKTU8NbNpJ4GoDENSc4UnZTeHAUwvZMQLZuMz7t8uRnTv5rqbwPYcXPPi9BoRADoFCfQ",
  "key44": "26W3aLXFz6cHQHszQa6h96X7HwkNVxoAr5CS98W7Zn44wHWxYroxj7JB5gA95C9fDtEN9kGGygj2iDVUbYokCWzo",
  "key45": "JrUQNGnxKR2pSNBQQcBYgnqryTL2Cc7ZR6ouG3r4FTi7pNHdKURSuizVKr6HvVCYUQJYadp5VnCu5CWNQumWzyk"
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
