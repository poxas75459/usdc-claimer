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
    "4Y3fhr1w1mRPNN31C1U7tXf5GGeXTVCSNCRci7BYKwcRweEaEYn1TJY5vPXqvdrNGzsF1pQ3JNW3dXAfCviNB3pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GwYXXziT6yqDapEc3M5eF21VMW7x9aJq5P9REAdBBV8kFhcRVCa1hauLtb35PXdzUhzqiPeNrDqJXrzkxeeKJMw",
  "key1": "pSFXMaB9De5Z7A4A1Shi6RuSNMiw7ybU3VwHkKRmA1osman3ivWmuvyNzyMKiJ2H8oUBhKQsF4moczht8evHX9k",
  "key2": "moTSw6V6N9m1dq8DdfoofWQBvYKHGzUE7sLF5SVnBdpTQniTXktXN5qj2FDrwSyx71McWHm7MdEKikyAHSTEGVy",
  "key3": "3FVuh33Qaa8PnxSvg6bHq8k7V8eWsx2UGJV51XNT2pT4Nx4cJFGxonvdJVT54fHjo2Ckggd1Dr2Z6VLex2agq5Zu",
  "key4": "5WRsS8zBsSGArQjDQbgDqEyFRHbF3yRmtv3oNgCzd682GFumtzCTwFVM2dMuJMtkAtjWDCFXaYnqR7hvZ5uXVw4y",
  "key5": "2dQ16o2LGLznC4TFkuMvBSyTnAK71Z9xiVjZPNLUzKJ2jP7ZCtHkTH2PrroVZGZ9ttHoLAbXD7iTs9iV2kaj49AE",
  "key6": "2qmct8MXwgHN3Vkty6VwPBSbvww5MSrZMLzskSMnv4sUdPYLd2wjeADpM8Tzd6LXUdGNpCRzAMRyL9X1DBpn9JY2",
  "key7": "hRB4LZhtTypoQEwgYck1bLm1oLi64pKZsM9vcz5RgN4hf65REDN6pUskQGVbfJ1u3KF4MtvAtUfXeTKFaiNmS4c",
  "key8": "2CqUTwqakU3jhExYVWqskRq9FRFYXiCgCFfPTZP4GKQUW66XLS3V2hCaT3st5nTDUjGDaBmva5rizdJETUF1JMBX",
  "key9": "42zoU91NvcxWC9nFNgMxyT6nPcMiEkBs5AqtRbnCXnRPD9HnDRDx81JMoReimRX52zpwohDgrSRXGy2UkiFMRvPB",
  "key10": "3LMWA9iSggP3zxeXdrKgvBeg1d5nNCGu1wDxfP4DtfSuBGfmdMBFwLd93tFAYFsyXGr1X4eAuz2iRWmJGdJTsN1x",
  "key11": "3L8WSRTgrMQ7KCX1T8rZv1YTaDhAJBTR9zqhHDUBLrab4Q2WKUU8ALaRRctkhqaEudzcMqR1s3h8dhbjW42uZ1cB",
  "key12": "58NGVJddBAeHK7e1P4oF5UaVeBdAXre9zRsSDEJKfVWU6mPPdC5Z1DCaAVALiPWq8ZBXC9Vbez4XAri2De1L9Wpc",
  "key13": "3kgvG852bU6y5BrtjH5tForuuxRHXi69UKqpNuZoTXG2uocTYuX83HhJmVVspp5qhA3ALDyktEXs1e8HjGiVETpm",
  "key14": "3EuuiFoPqusB88sXPLaH916S3KTktuvYW1oGZHcCyQJiNBv5JQFKs23Z9vVuPmcbqBh7zWCKfdJmQrjGgmJoeJQZ",
  "key15": "4Q1iZDV2yxf8vf9vQngbXUGB6VeAnwkoMfnQdUCNPwjQMLe35Kh2Ca9i56aN77kyqqgk7qAQiYThe9bYXhpecQrD",
  "key16": "5bnkctiBfn53t5bYZV7fceUwEJvAoobch5twZpF9Hk7G7hb3t1Utxe7YKACYD2LAxzgZVoA7kURP8kLtjDwp8wdQ",
  "key17": "34kH3rzEC7mZYcssNRiam5nobkC3J44umqugQevBXeX9h3AwAeZi3m4HjiAu92Sv1EnnpLWVLvnp4CDZAMSyZnHx",
  "key18": "35JdtfZMwY7ZqQwpNURtXCYcTt4sR1VDPWbGJqj6etAJFRbXpmxcacxFLjSjUzWb4oVNFiTWZrsmq1i9LSWrmSGo",
  "key19": "2Ynqes1zqhev5VUnzxuLVwme3W2yD2P9CnqS6bVy6WMwkxR8vZXsTfQSdCBj3NnCe8H5am53EoxPyS3EHqFEuUNc",
  "key20": "ogqreH8jgi3Ncr2Lmkj4mL67MifQXnsYV8GsVspdivBWkQhjFnVCG6Gw4a1hQ6gGzfMAdHLXmLcdhDsCYDehAwp",
  "key21": "2ZjKBTQL1MxF6J2Pk58fYqXVvDYN7FTVxFT2LgFYaCU5JarC5mFhaZqSc3TVCDsTMXypbX8C2CodrnhBEUhpZvt2",
  "key22": "3XZ29YhLi6uiWNcV3YuyAv6zoffYChJ3ViMFDvvoLYYcJ6wW6arHTKV5cuETRRLSc7pif6rkZMkp9s15e18sdJPF",
  "key23": "QvTELPN9TKmLvd9j5yo6xjx7wZut2Gv1DRsxurto5Re9Ef8MhaJfyyPbapGmu5y5V9V1isWQJMLVr63AfkEsoyE",
  "key24": "42nM3Q4xxjG752pwrEs5Hso7E2Bajm7KJDXcWSSHDh9yxYFSFa98bm1Gkr66Cor9b7J3rMtN7p2RSd5ekwKaZdMp",
  "key25": "hKRhQSYEVMRgSmQLPH1dQ35vbYmLFB7vkdkZ8T2XHL9QUnTeVMhWGf6Xz2d4kMNcrzi7sXDz2QWkArLFoHsavMp",
  "key26": "5eXnwaCi4tfpdyir5CGEesPDvn7dz9yXZ3tMj1EMEXDy1ysgvUiTptSPwzqezW7cvM1vFhnEwwWG7AuywxmMuJSR",
  "key27": "xE6ETUPue36KmzYwaQDGfCJXqmRS3wNcpe6doyKB4LpW6QLxLNfVyMPzYKCJCx2Zyidv5CdALrK6jYMs1TBRSPq",
  "key28": "HNXpGDRvoqYcdTjXxWVy1QsCX8WNFrhphyvw19scefpDJ8GPRsKvx592onDyzSKBwutfJzBZAe37eGCrJgXAaZy",
  "key29": "61NwvsKEqsQFKurJLgzTaXt1rnATw7Aco7uwK3qVGWAbqynTS1Pfcd33FrqhZx3gPXY1tCpGZ5g9R9yNe6TaumRE",
  "key30": "2Fystaf3LbG9FTr2fLV4Ud5M23VANrwLnezQ4zRgAeE8Z387qvEkzff5pXj32YsXrZ2hatgdV2BDgM9PQQwZJQmp",
  "key31": "4MiHk98NZa12UQXsEKWpGsmhUSmLNa1Jii6GfWr3tqwDAExTyhi9zS2fNvrHGqXm32gyzr1TGu7a2Jg6az8ptouJ",
  "key32": "1289uNtv58n8geEKbzGedMQDCnkz3UdMzE9CT4UyjCJucSLKDC1u2dAEUQVBU9MzsjxSohg3i7sCLFPvFfRKYvkq",
  "key33": "eeuuaHqyuMvA9hxfeYan6QPMa5qHnMaEeeTdhukuTM7P4AFUC6JEHX1o8Yj91Ae4ENd9GepbTLrF4tYVPr3gvZM",
  "key34": "3Eo7ovXwCqPtVQrd6UT3LEhSKKpofKmGnECMuFv76aAZKv6kKKdWtnZY6T5uv7T44yD3CiT2Qu77xs1PeoAEaeuH",
  "key35": "59XMYZh85exPQvpdNdwCDzyEgPQnsjZyHXc82jztnjPfB2dw6rrHAzS6vabmhooF4brBSUcB3NKCQ1Yhjr911c1M",
  "key36": "ewm8s2SqJxjh7E7siEYCPgiLUENYn9m8ceTUNXv6TXjYKuZJvTpn6iPpjVUUN1MoU6WwoN1jL3j1hTs8NmpS8rP",
  "key37": "3Ntf62UXPqeMo5x1Pe24oUt1hiA8UmA4JmZ62KqU8SJa5MY2Nzb9hvfBZbgnJfQa4YWWjW2sfufdxDGfhrUo9btw",
  "key38": "4ST1ucNxKXGjQTnH2MJ6Qt3vAJDbFiAqenrKwXpxZt8AvJpPQBw2FY6eWj2E6tAGfvcZk8xhDULHBk8BJKqDELmE",
  "key39": "3Q7mQGdTymjEJNscUxbp99kFhkLx9dUSab4iGnGGy3hoYFJr2cRJ1z28VMPyiGPqhQcvZPa7hSxHpg3422wkxPTA",
  "key40": "65dDuaSXKFEfx8WkEGPvqAE8Ga4y3RrjrcWH5yTV3aDaaQ5hdxmZ1RhuZrXeEvWEmrNmGupHtVBFGN7sGjX38Knf",
  "key41": "t1dzqV7pLMCxi4jfYJcKZ2kSJJtvN4Jo6B4yEgq8rkMD6rbzSAPis5zvhmxc7rimmqWnPco9FPptP8MR1KNqozf",
  "key42": "5MoB79C1yLhN4boyNczkuSKYDQUFXUc9NqeWNP8hKd6CV1Js3F5yXRMaqrVHsvCrsPDDm86vWExYxxqpLip6K9oF",
  "key43": "5EqTmruB8W9d7CDbH5EpFEeXC6cZfNcQNiFf6he7hdZkLAN39G2NWvW9KeY7EqHre3S2uKTVUTBezpd9EjvwhWWM",
  "key44": "634Hdv7ZGHSSTJCf4QijBmr7YtusVm5bwdaaCCnnnKg5FUk8UUeeJ2AtwYuP8RWgtKjm5A7c6JZmu8oLRiFmViPm",
  "key45": "2B6QHVqgXmfYBrrLvKSk2mF437huGdPioV7Xgnj4Y2mppT7KXqhsbTHwQwEjNpjvv187i8gjskfkmejXYiLhCYBb"
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
