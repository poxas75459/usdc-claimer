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
    "JaUinUMyR91Pk9CqV8WBeAJiSZn5J34KWNGwjhwSqQ9Go5qX7F34wQiHnU1MpEVqD873oKaMbhWSAv6U8jdpn7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZZUsDKsTgvpEdRJMchTds28dNCE4HfUMdJCz8QDH4kQ693Q5NWob1qZT6Mqz1kx6uuB6jJNqJzKrtZMzBWPLGFr",
  "key1": "3DVCpEKXRCfkzLoCV9orcEsvrWLiBVVQyCgJjEWJrdAjhwkun76Hbnujg5ZUWStfBJVqgpgHevXaNjLGU5y3g3QA",
  "key2": "5szap8ZWkFYWW1K7nYomftADnNESFADAVha2LmLwnNAWftSPmv6aACaHqsjMctCSHfpnWc9G83WAAXMRemSd2Y6g",
  "key3": "2GE2RS85hTAmreTVSTvFthMYBjmwoT3q9vAq51JPtoSnSZiFcuUoysonNaWBE6Xv4gBYBFZhag5owqPngKTg7T1S",
  "key4": "5GJodKvgE1JSobaY8cdYd83uNkgBx4Yx6K7Ai8CLzTDoKkoak1dKB6nKgDEMJCeFA94DkGM9jUDz4Bsm2PrrmV7o",
  "key5": "8zS4HDSXMzx98T42Tgy5xTTWD2k65NymRPAPqQeG5CGREs4DmcujEyAAqLsoKamaiKsNmm7yeE1qMeiwEAwjsKx",
  "key6": "y995856U1g1XdBoUuVUXK9HShdQpHdHyxAdcr1VKcHMXU61o3tsawTxGP2GVjZWof3oS3Ap56xb1Wm6p1oiSSSc",
  "key7": "D9NJ73WqbsTy2xNdA1v8EPVorxweuAzUg4p9WLoyuFALQindGtBzxgHaNH6y9AY2SAgHY41WaUQR9kKUV2H3jzJ",
  "key8": "4Hck9NvEg8G8caCR3XYtaxw1ZdtcD434N7GBHTnFtntPd1fdvJL6sDPytjxtCQzWTBNtXAM8zaMV28Vhg9zL4xQM",
  "key9": "UrsSryuNVK7ciCSxdrCPzL3zY9p5eimmWTvF5xK4j8cpf1MHGraHPkbXBX152ud5DnKZxcJqsR6UeBJqs8U8UhW",
  "key10": "7uv6XLELEw5g24SgB5XUgY19v7yRjQw8H9vHnvwQEXe7aA6XuzkULTC1Dzpj4vY4mZTj2eG5Nd6Kf276ozZk7ch",
  "key11": "5g9Ckj9uGFuNieKpmEgKYmsZY1oQPGBzjgs31tbsceH4YqNdqfFZXFj97o8JC7pdTgKKzT1sDRUbCWTvMqYY7s9J",
  "key12": "2T487eDQWNMX7A9ztv1KPwy9BWZwPtkDosrkEooBZQTQvUNwSPQuPBjXxAaRfGYf6pi4nLRxL5hsnuNFPatc34aE",
  "key13": "qEtAAzYZqFvUdzkE8buCHf6wwtgBh6koXeCX7eMGUELZEUVYU5MdJWhM5oQmZVo3nsAR9ro9BoWu8abuhESaFQT",
  "key14": "2dZPmQB6MjQedP8Tuwk95TUvMiGBPmZdUqPQ4sDmMsH4Qp9KcB28k2vhEmWtyKaLmubf2o53KUXg3W5sKaRpSxUe",
  "key15": "5uFkQ7FvmhaGDLWnFWhB2HWTfb2nZFhshpz9Pg1SmqikXdWqjNCKCxQwyi4NRBRrBGEKnxnVMpAzetMTchJeVSsU",
  "key16": "5DbxcHBCz5xtXz5Cip14R3HyyddSKKV4KHvaS4ZpdcUtaftDvqkWStcKDAANjuNpN9SnvpJ6LtR17EEjouBB2Kfj",
  "key17": "5cwqEfSfT9xXhvibjrzVTqV3ZqHVY3a69fBdTy8TGjj352Qgr5PAGys9QRRxR6rHHARbxLbeVvkjTuuhqQes6Am6",
  "key18": "4UHTq5LzR8Tu7fuhiS7CoGZwCNHtCn15CdQD2AcoFj2HphrkskBcnwC4mJQpbrqNZnhBMGga6wP6CESYqgNt4nSa",
  "key19": "2MR6Qomz6Pp5Pyhp2ngXLeQpQX2Xp6N8bZcNiMBBbfnhApzdHYPCg5gZuUQeY94epNd6N26qb5Zg741dZ8SCjYTK",
  "key20": "WRDErpa4Q5gNdAKCGNiL8i7eGBToLTR4ewsoCGTMgHjgyLd5mC87aAQfAUzdxExrwJ25UvXiWiy4xWRpvnD3uwp",
  "key21": "3n7cc7BaMBqUSCmGhkKvUzNN6FXpPPtKtkug665htyG2EHsausGvn22SLCKcobeXHP6DTEFWVJkyu5WpDBemYp49",
  "key22": "GGR8qykuSzH6DGLHsm19YMbeMTgVxRBm9WNMg4rf66uXsuXqfx4frHYnbSkGrYcRvajTwzJkTY5Gd2nXRuY91hu",
  "key23": "5aPRAVK7Ez9wD3YQUvwaCE9xQTXD2LxcZ9f71BpWJDPZjPRo76uFpTuLZ7R9psWWGMqTwwKxCWLehM9eKXVAW7oG",
  "key24": "4sMQYBmbwjaP76A789RhraJvoTmn81iakU1jZ1ZGHeMK4WsHrW59MrRnszSmLBfZMeriACgDUNgwTAyeCTmh8Tfn",
  "key25": "MP3aSKDrz4edvWdLyQanHTbwT42bK8oC2es5Qyiqo5Fc9v7aqC7DeUEoayLVmrdGrYTguY5tGQaLrEGmVCGrFS3",
  "key26": "5XafeZGMQNHLXrpyPot56SZf4Ek9EFmp9Aa2aDoKTDS8LbJtW6nisQtMyaT8oxiCX6vQ8eso9Xy65K5r91mNvq95",
  "key27": "K6EBu4biTja5wWzzwU4tGGXznzMBwAWRnWGbj83ikhcHDg4XH9ZCyCDXKbiFDsKUHvhR2WRJnYhg66vKdPCq1KF",
  "key28": "2jiBG6xwy5vHRSD8vCvp7wb6RHMogd25Jmvu5JDF4q6X7r8UdXxmGPrn2koKFr6dESKy15HYYnTcmANHwEEmDEtN",
  "key29": "61gorH8HmirJvYz81P6KhPTehn1PAuwqeKY9Ed5mJPAnzUoPDMBJRaBkm9zwjk9cyLWjwaYjLvWFwRs7WZnV5iEc",
  "key30": "4hAQuDxNUqYiK7RyRK4HyZqvbSCE8wdUiPU78KQozAs1XWUp8sUHAxfb47EA6GYGVRr2JDDp2MiCHsojDWnBhwGy",
  "key31": "57FGkfgTRQg9NTU3fBN3KX3kfX5rPcncxbVJ3g5oe5g4TUabvUnRA7eFQfYN76DUUitVHNghzXJWN8cNKcJvTRqe"
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
