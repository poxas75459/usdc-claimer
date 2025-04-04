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
    "3RPuxEwuVY8THqpN7Y1fyf5wqKdgD9mZSxGDSs7Up3WcV8NpeoS6dEJQRzpMxLuiCWAAZNe8pmVxLtcWtasEcnoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vq7zZENoEugsr9UiUE4U3nY78AhhQz9FP3wgRAEAux5qTKKeg7aMiAyCfC59qRtX1X1kNPtsZk7ecrcrMkJCLwW",
  "key1": "3Dv5tHVRGPnLCuSVv5fva8Db4BQ39n7WNB57EQVMAXNpxFeEkCrKLZW5Acoy6bYC8sxW3Suo89VtUUyG3CWaGgcp",
  "key2": "4uGtAp5hh7QWhkHvRB87pPMWLdLA8Cy8LwysBS4z7jMh5g2RkCUYNi9S6LhTK3dcPAsRxYpZNfkDZvYiJBRWVXLm",
  "key3": "5BSQq2GzSfhnx2zbSHY3FQ3pph5zFJTDA68nsW8g7Az2WpE8qZao91CVQU8Xh4A8sZuxfioZsEAi9dpRZGBipEpV",
  "key4": "5GYAmSAeSpzuf76GZ2Nv3JXYXqY7xBifH1tDTGxmCA4AXhzMuBPy9sMRvBBoWEm3VeMV8UvLCs9HUN2enQdFHBnc",
  "key5": "2UuVPEHhorx3AVysqX84gJxn981ASa6fNecgURwc6JrmmZ7jwYrkRQrqgWx8kudUCPMp2RZueBmuoHJW9Dzq2KUY",
  "key6": "4s5EpjHFmsMaqEcQiSgKzkNgzrhn4kfdmR4RzLU8s1FuHQYjD12CoTqQHJBVNxvDP6pEFXvAFdjTXRcXBvBTDjLR",
  "key7": "493S5Avz4YrQEybNFbLnFZPGFn4utqRxjaDpmNKLnz2yi3AderqwkxrRSxLvVLaZkn4cYoxEDLwhrGsAUdrdvzUZ",
  "key8": "2aWcbE27ZTXJmg1m7JGGN7hMqL7p9aMsy49iZzbS1sGJQVJVDMC5GAC8w1yAg7brd3mRR4DMm946Hd7qNUq6FQHC",
  "key9": "A3ekpEJJcLvxVRDNQzEoejQdyM517oJeMjYo3geHeVvDM9kppKS6aZ54iaaTTANDufmNsSvSLSjwvNyRGc9wUWe",
  "key10": "rUN5viTLE7isw54NwAwM9iFQitfxwHg1VCjrykZfu1KJ4XwKGyw3z3d4Ciup8FNbf3BJSqiyuVvX1gUE6n9yveD",
  "key11": "3SH3b48YCgVPrJSA16vB4XozaHU6FZDYJ1pqLTKuAksknTyBKAiYwcCmGBY9yK7BG1abH1G9NP4kXeCPnVtWPo45",
  "key12": "5BbCSxeWJhtx88nUutfugpep4G4Br85f3zTKg7ahW1CPKy7Hdd8TPUQ2WpkQ1NzrRkQEWoYjFhr2vooWJyp5CHD9",
  "key13": "4T9vXNrQjRbb9bEgXmSJbhhyChib8VKN5dMuHCKkyoZ5EYM8niQRpojLzjSZJBJ3vGtJh4d245LpFx9348xJabXH",
  "key14": "m4SaNRFNnhKTe5J7CZrtErEE2cA7UcW8C35TMHmmy6mER5uqJS8o44a7fbkvf5nUEcLsNrG4WVSMZnQ6P6Qtw8S",
  "key15": "5KGuHuhj11Seu91xr5ZzMCMUrETt3FtS34x1Mt8BMCUVrRKSSrvg2ZGCSfFi1YpG7VCTzW9rPbpDqAXYvQ5W4wN8",
  "key16": "2SRXzHj7QCHKBsNu5CB9GhFz7LZiX7eFihvv3s1nYNeykcehZFKCr9shuKXWHHMtAnh1WbLtXfs4dzPpGAU23Wx7",
  "key17": "ebUi5NUs1YrktWavPbfRvAzbVHxgRAwa8EpGv6x81vVseh8hNHkFhp5ig1edAbbX2wxEaKN7hnhc79BJaEDPMej",
  "key18": "5Wxoi1udksJtTe48irnu7tUzXJz8iw6mBQmhByKcmQK9C5Tkv5aB7efzQjLjbSYGLbZsQmRLkoubZRo4aHdPP8h4",
  "key19": "5GnGLmjsykQWgmpUmTUMB8Z8XK8xEUyGDu4ocA2j45ey6XWDPXvsT9P9ANjniL8oBApHrP3HCbFU2fHWCeX9WCun",
  "key20": "4PANWj8RLhcjmftQafiiPvu3aCBEfeKPKQEPQ7hpgEb6uhM2paWM7j3FkqavwZe4b9C8Nd67ZKyspca5uDhzPsXV",
  "key21": "5ST3oMKFSuwMHLDcGx3f4fL1H68VjHoPorkVWiQR4WEfc6yHgkVnE8E1UA3GfjQrEhxP8cwzEbRYX9TG9kUL4ZhM",
  "key22": "3z6kUNJ12xadZwg1czxWXZPtYu5JQea7kHXXs2p3WBPb2EjH4Hqm9FdCcEAizaossXHAaUzq5fR8VX8HV3nJ6QGU",
  "key23": "3sqFCQW5Siz2qaB8ptkpVZmnJGpFnrXjLnvKgxH2pa9dHweFezuvwj2JZh46k5nDpM93Fapuwk1gSXZMSky5iv7",
  "key24": "5z2SwJcAarmFFZV9CCZmLrr8xU1JF4NeLkgTDgrYG7hDRSDuG1FuiTSWgCesPif48k6rzmKb2btkG4JDcp9tJG7K",
  "key25": "5bnQ9n5H5PNdpUAgG4mHWuS9be44rn18AWGRWWkFcRoKKcRdLkbT9RQ5dX7P5t8zA36tsiC5dHedaJ9SW3dNbCtV",
  "key26": "63HG3EQeeuURvCGrdLcFgN61B6P8tz2ZTj2at8ZjJn38QiEgm1rrXR8QzWY3ewuPPeYLVXzYKDNxqvnyCZrCsg1A",
  "key27": "66WqukfnRuv76PY3oj6mgrVHZuFCr83q62kXLEZ2kTJPgRPXgBaoChmamxPr3F4k8kfftLzdYxeEPVb4YwF8MqMr",
  "key28": "4XebPVX1qe2FJu4zjszTWacjRZavJUAgTouxBJDTspriuyzQqt7A8t8V8oZBaPRDq6HFVkaPvwVN1o2jdyz8Aok2",
  "key29": "2VD97r4cp58XCMhdhFowZbD8ECVF1ATw5JshHx9zBgcvJQ4vEvKsHntZg8RVgKTmY3DPqZHfreoHXoYjPaU4id9B",
  "key30": "Ss8yQkqBqu44aJk15FLuMNkDcxNTxBVWJ45uBfni32GvAMz49HFckRGJcBe8KmACJvXfrtSNQthvpMymC6dFpEX",
  "key31": "4Fhkak4HCwjyFu4RYrSQiRNArvphiHvj4kDXbiaNZGmmz1EZ7CUr2MuttpeNryYawib1LAMADDqdUQPm1JADuoe6",
  "key32": "4aVN41BPLtTWxrWayazTh3JWpSnNyXXYfkHK9XJ3eDSGNWjojJBdbnN5D6a7789byTY2UZGMvj5qS8GK9T1SYmhT",
  "key33": "YYJAXT9wUT4yDv7D6zNqjnktLNzQq5UdzPpyTkg5aa4mQ8hsL5Pz71ZDgxDuLo5edK7LQCotMcuQWUVdkzWtBjR"
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
