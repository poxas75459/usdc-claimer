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
    "4RErnMKqondhun5TarVYN2gnYubfbVQtbog5r7bojo24PR9S8REyDyExUFP45TnjKZxAg5H5S3p4vJnjRGUYiwHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xdRnE9oyJW9oULZz3rBwHf65X43CVeRGu5bWnn3SG8Mtfk7xdDXFQ8ncPtjhcVGa5hybgwJff52HwVGsP3NhSnj",
  "key1": "4i9zSeVfbGyJHxsoY9HDxLGT5qfHWctzTXJMwqzTG1KzzH4oE4tv7on54ZjpvgmhyHg1sSsFVLfzGvBesZJTREei",
  "key2": "3dqXdfYTA64KhR9VQPWRWUT77WTyxCKFQwRnUhB33M2eXAZZGp67yG7PdK2wDh4a99RB646Wpj2C1y6s76zx5ikw",
  "key3": "67kGe5kqLfxFHiTzPqD82vCmyaxyxj3nsPM4o8fuc3m78zgmzY42touoQyfViw6rhPyNH3Gok4iPDV8rBgqtG3Q7",
  "key4": "jPyVWxssZJG38rzVCGMKPc3312dmbzZSCM7JGKt2i8pcpfZQ73znMBdHRjjo1HJoyXLBmx6fCr3WzGAMgksSXyV",
  "key5": "2BGM3cARwri7GZPx5BL2cSpjMk1mc6xosH5xfbr3jtpNLccG2iBXSW6vdeHAK6Buhqsx1kxSDM4hEjt8eiv531JY",
  "key6": "26h8kdhCv6o3ERxz1RYsdE1WFmeJ7Lz7CyRHFEBZ58ZYfhuheBusi581CFjhWxJPtnKuuhRwsrLoEU1FFSKoM3cj",
  "key7": "4EFsYaFyfHoftcime4ENiDSSDXdov9MrC69FCeZVMSWYww4Xg8R9Dfxh2eq3SLA423SgBnjpMYsGPVGijgpyU95J",
  "key8": "2Ey9fiLqmH6bCvHPmpXkWU24JFFU7gxwTmHBevLpJJFLrtm2SbtTNtiBkPPxqqoS7TYCNsGfCuF1s2U2pAwnZDr9",
  "key9": "4MSSqok2JuZVqGnw9aJZed6PvNvDcTvT6Gj9n8yCf3igxhZ51DjwiEaLupvxYFEQU1aXhqe8bgyBEmk3TF6KoJB7",
  "key10": "3kH7pjVSjudd8dbi1TEbPKbbe7m12xVLmweRbfH4b2vE9aszFuhKpamE9LkURXtuTyCo6FHLLfyBMXRfWLjtjJYt",
  "key11": "5hp4SUwGGrms3sJXeYTfpbXpTid1JKx39AyidRiPNnnuuV8u1h7otxDt55xHYwh2vmTeHevQCgkAfNs4syGyLbN5",
  "key12": "9EndQNKtfoY43wCH6PLfUu2MQd7N4FTjtoqAFPocKa3d9AjwY7Kn2Csi3NUqcYzGxD7pFLPpy6j2bHPJkqng1wc",
  "key13": "4kyVdSgRDhyapmFDgPXCJiJxZ3ddvgLbKUQtnoCKkK9nrz8R5pKzE3KgcmNZhGXPF3eBVg5YLDYHWTciWQNarg8i",
  "key14": "2BRe1gJxrSJkHvEnQdncsTfV7dDypCuezvKofWeyWvah6Ttdd42TKZ4TgCEfyLrm5ecY7ADxne5BsgMj956FZDyM",
  "key15": "HqTEu3CUznQ6g5DRYc6YzCRXTpWz2KtX5taXpyqNh8pjWGdn9S57NKGw1kiugeKejDQAYNY9UUhV9Zkm2YYKj4X",
  "key16": "2cznSYppz8kxGxfW1ErNA8SJXLCVsuckPNnQGvoP2UNvyQ8azJn7DmQvQLyHNYLnM3n4koiHuP5d6RFUpWuxEjrL",
  "key17": "3fuhhuDobtEuFdh45Mt4wnLkpGMTQazS5dZnRHbGvrybdgmLQq9x4FfR2vQpnBu8DuXSXVhEDLgLvgbW2dgeU5eR",
  "key18": "48cpL85hzfUVcFdiSxFufh3ip8sMAHbAmFbQWSHAmpLFxMQsheQxPuwyeH2a1iADWt4vXgjT8KeTc8PEZPhU7ddE",
  "key19": "22AmCV3RrBiUmpTkme1mgcuh2DgvVhJkNfzCZY3yY2jGKXr9ctwqLCm9WmXFkKCj5YUBBMKnySFjjV2DJqhSpEwk",
  "key20": "36YqwDMyQVjSg5JMPS5jtmXXtDRMGn4j1uzRwjFCKL7zEmFrMXx66yD25zsgfxZzsysgdSUWsLeUMsBWc7SVAnw4",
  "key21": "WgjLqQ5iAWKx122FjYwXzt7PZZY9kRcG6bbXkSSwmLCQXhJjubL5gtVCdAztYUnKev92JceSmYeEFzHZpN36pLp",
  "key22": "3wwCJdC7FNtgXn9gyHpAt7bmHZquca8Uq8A52wy4ZA5RwiWif4A8dL38dH9iRN7mjDrZF9xTSo9HTHzwL8VtkupA",
  "key23": "5vpLc3MDNnPNnFrVEThqVeEqdoERvQH1VWoc5pgE7FfHfttdwJV7dbsb9DvWzfaqbhqF9ikdC7VrJrXqHyrqmpXh",
  "key24": "i9jKpf4kjYFfYVvAVxvLaDYZVdPj2dxphRSimE5kM2Axn6uwR9Vho7mDf3cDr4geRmmUrvTZm2N8Lkfnbr7pypj",
  "key25": "23RFLCxfKcxvUJwmzab1rxL6JEX82SWfnQmHTF6dkyNn7drAj6xmVZfSzmhJzRAXfvY68dqYzhVAZXSwvowcMUeS",
  "key26": "7aEK6RKvSU2GdjYoucFMZQfgqFxMaqY4cE2mdUGehBvshjmFfmmULWimzjcqi1mwZQg2zqxw2EhtW23YeFnDSD7",
  "key27": "2B1CaLLrWK4E4F1B5kKyj7EXriSaTvj87zEmP2sNVdAsuaYy4nyxoHmxGN8JEh75RWWyHjLTUTu8czeTmmqoLMNk",
  "key28": "49Y5gJtg9Lbicu6g4B8ifVmjVPxnLs99LhUoCa7aXcJb3GCUzHdnbWRPiE3mYvr8LgBBi3PekJVxqBAoRhSa2B1F"
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
