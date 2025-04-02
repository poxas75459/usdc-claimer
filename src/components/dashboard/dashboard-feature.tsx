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
    "5vx3BgZuPm1fu6jzvqdQJUMGzW4Y1Vsp9zfz1okT9UXdvbXTZEDUfyDgJ7ddyRCN8DfYjKq2TJe27uNdwFbdk7gq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W6qTDz2BYqX287JbDq3bTJose9AJz5DmVhMfgF25kBbobYroYwFreZ1vF7AjANPSMYRdAyREsSBKiWEX4yiEhfb",
  "key1": "2hkXxoks5zBnJV8Dbnbar2pzsZ4bSHZAaswUCJV694ZyNLf9pBuEn51zpic4stW2Cq6Rj43GFxaNNDEqdMhxCeQS",
  "key2": "4wmvns9HZbnHqyca6zL9FmjVuBc2pXAzSWJjLCP2X7ZrkUz4xyesryjkTRYB3QuUoZZyYo2CbHFP7caW7t73KJA6",
  "key3": "7C4UEEhtwuABF9zJY7x7vBQyJrGuMCJA7XdqCGpRdcBHA8a8B1TQ7cdYmU1GyDVF6C16X5wGwRWyR1rKJaJpYvx",
  "key4": "58xLA7v7iEfRh92ARCT9dBNDiPnbdhSmx5hCE2Ym8UnjtGTnkdc7QEgtAGdF1XVT7MsnhBHinx2K5KFaRmZkHdAV",
  "key5": "CksJnYZtnmdHBUvSZQu5D3VENAcYtgKurGPn85QCsHfyx6C1dSNTW7LEdokch3Xvz3DWxgR6VjP8S8nJCPshKLc",
  "key6": "2DWQEvW4bqT9mYAbCaiiouQBapn5WkDHCxZoykxDdvEfntUG31me7EhmcCDjDniLBY6xxypPR8btD3yUcF6ffTmi",
  "key7": "4aza96m42VrT2EbUnFsvs9ayKAomFFxvhESJusxUds3ShMkGyvZgnN4majpyPuCa55E7dy93XpUs2K3FTXNTASDc",
  "key8": "ETXmahzshqfYtk2euoVS8Q1gt6Jgz3iz3BqFzP4uTeavNoH55233S4CVHm6cSbC6VfB7z35SNhC61kpcuv4Zac8",
  "key9": "4M6KXBUosALAC2niPBkKLcgnP3pM29ocwuKsyJrjYLAuuknhz4oWd4kE3N4FVJVBL7k6KcwrEPxRk6hyR7HdoHXZ",
  "key10": "3r6wHnZh7SQCXSBRyuj3PyYqk2hpAGzvECzf8Zdyy3MPPtEQj1gSSVTMDboRN7MRRXaHDcMJmWHmCKHHBXpXJ7Pr",
  "key11": "4FBNNSXtRHDxTNVa7zQt7LCdspnVw9XEzXLgrtgdS95AsDm4sWB5q5P1aF3Qen3wpJCwRxJ8UFxH4CErfmqP6LZw",
  "key12": "2eBan9LJNCWCqP6xrUV6hZWPL4bCRA11tR8cfabXcztns11jV6RXYGx935ZP6Zoo2Xun1M9BxiWdrxeqTywFU2ad",
  "key13": "32X4z4aTL3U7xSHWuqgGLKTYYYdsXbUf9TK4j7aTnGSBvYbV7P5Z9PHMUB6871QfMrtwg5Vkp5JpT7GUTq2qWWxB",
  "key14": "3nCYuFtf9GaaE3vfM52CEswncb3HAZQq2ZST7GnKb5XdZCffNYMjyjJpd2XwmoELPdMZ39B3pxaPUxtXDeEiaND5",
  "key15": "5VFpxC3RqsPZ1e6aPWoCfSixKzpH2PnkcbDGb2znFpSzkpSiCj7GwfMcb3xJGG5vp5ZoznXcKJRKjTo2tVnFzfh5",
  "key16": "4xi2hgGnmEq5SLZHq4RLY6Ki22PpFz8orZkFXW9o6QDW5HNDK2qqHrxwdqgTcwLiE84M6Q7QNrUJ1u1CcttcLA49",
  "key17": "5kxHDJBgp4nz6cu8WakZ8FvrrdvyvVTT3mfXceEQqyyRqXqKtvDcNtK1X5a3gKsSKP4tuAhYMiVfcHTKmqQyL3i9",
  "key18": "2SBTT4BApxqTeFtxcqAp66nQTs7PPowfP5XUhMwyhez5Lpaaf3N61fjd4zeo7GJciHTotoYCr91Ef1rCxEM1riRR",
  "key19": "tKGX9SUocGqRormh1AMSRfe6nGb38RrQFVfe7k38zULx6Mhag4KHK3BKnudGqH6n4SPaLENG2TEUhKdseqFqp6L",
  "key20": "3tcS4iy2YatcSQKUnhQM7caLHtu7KxNjxDvDih3UXsLhq3Aj5mxP7J7wtFXfbUWu7xvSDN5u38dGmTENjQbF1xeJ",
  "key21": "4KnVQZ6gDLgKj1UoLkFrTp5ARkMbp2sZFA7MuLvN3eVqpnPgt8QQsUYW4d3bWhz8U8j6hGVu8cz8wyWVPZ2Wovcs",
  "key22": "3kz59sKEiPZqhs9TYrUuCkWWZ5kS282TbEVpngtMrVkfTtr4JFSg8o8FxBsPV6LvQ2p1udQST1VVVVL3RZ3Niv9r",
  "key23": "4zA4fvv4qpK6x3brxmreJHCxGyJnHgZS5ou2FoL5tWj5kMnzjeRSSyUxBHF8x7TuXzzvHv7hTyJb3KEyAANfNfDQ",
  "key24": "gHtLz5z56Xt2BsSM5nsyy3BByiveQu9Kn4k2ToeUmJY61v1dzfLG6oUHHoUkS4KXko2YQgSJKobDjeMYieQALnq",
  "key25": "2GYmDuUU7k1j2TYzssmPyVWuEf5uU1ngydCBb6SaQKzG7VyRETbkfnmYTY1oCy5Vezk6PshGg2o3jamUgQKDNEni",
  "key26": "2Zn458ZC8gPDi1soZZBF8Mc3pZpN7VWxU1FQqPkwSfawddyf6Duys8QKLpapTtUpMm1zPDn3GiM7TFqS7iPbgr4v",
  "key27": "5hrwfozmTjkZm1rcnvaZsxPr72WqCBbXofZjy75X9ADjTCrLHxfeczZXGrLJE5hSjU8PRGmLgsDcSyodX9ToZJ7p",
  "key28": "Bs7WSrcx1dtwp3xuDBLZGBP7DyBMzRDCgsmcjTJZBUYM4cZUPXT5rpQPN5n3CCoWPGW35GNyaVuXoUjvVcRRGc1",
  "key29": "5evpwScTWSJ3ixS5HGxBQzJPcHoDRcxVbshB1HTo3bzAaKJBs7mYgfgP5wCfYBeam2tHf2tzTo2uHew4KdaJsuhe",
  "key30": "x9cirwXN7vyYxoe4gHu3ft7Wx8d1eJS53AwCPM7p3aXDb1rX3Knr45oHZtCcEZChj3Ex3ezWRxfp2LrD566XkRc",
  "key31": "HDa1gzN6YU5C15H2Nk5J7aBPd78399JjpUTPfqsK3cYsYsjKdRXRkFydw2ySh8cfvGvYz9dHvV5JSdHiw8SknVE",
  "key32": "5TUQyGjbYxVF2hXTFLnj6pSjwUZMug7dGZLZ967u2VRm2u2xCGjZCbuXPUFz1y6fVNz5WQK31qrGnmnBNi6qdY48",
  "key33": "3MZ4vKUg9W4Vtk9bCCbXLzALCv7zP7DkDuxoixefXMa3uBMAVUvjzXP3f9dHDskvT3v7CjvF3xAeU7nW4caaQGov"
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
