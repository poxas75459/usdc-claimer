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
    "2zvJaGYhSwyV6wGnZH9hbRMHCReJ96Tzff4gcJ2sobYbqg4wvaqcnAwhQqxoqWRNTDCupB6wpUhJfM8k5NCHvMLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j5zQBcxa8S1QGFMF1QgzHnkAnfhwgS1HVuSQ8qMdvYCXZJybNfF13E7oxCcxeJfxrHfa8n76uwS1wyikCHxBx8m",
  "key1": "5XUX3E2zPuk6SYMhrQ7Tseoq3kY25rcp9zLQd3DwLfDvGnN4879gCEmbDct4smeTqiJbhrwfweGYoTD3X35o8Uju",
  "key2": "39GDY3Brr34PRtrD22a11boS8eYHkDLpoxJ32M8jxndCkt2JPG33FsdPtWFJjV2yQEEUFjERrg3vrdAiAHUfEirH",
  "key3": "5TRUtKLUWXkMDpJZeuhnJdwihbHgbaYSTxTYcRK21Z4VsMTGEBwZHDCZzjX75HbiHmUqP3q9NFJ1ssLFPjcVpyYw",
  "key4": "4ANBvtUZDUVd1xJkMNu6aZawTKK7aZmEQ48xGc1Qcq6pNhVjBgFzPjZEDmqfy5dgD4jkzhN5WpVmEAqvR978pmXB",
  "key5": "3V1Pu8dydoR1iNmFMcQqRFz1d1touv8kKoZtsNVCz6zeQf5GFKa2ssXkd68NBCwQbvH5t85m8zzRDXZiifmM3tuK",
  "key6": "5mAPHJy5mvqQNW1j8yS4ptF7HJX1ZjCscsXjtpPzRA2sYgPDLk3GngxwsFAPgytKoSz8jshXWzWW78qkZjwNxR7q",
  "key7": "4WAKvZYybKLHSWkvEPrhwFSWYay7s32FcCY12zzjmxqnYYrx5sV1aMpKqRRt1zZVrU2Q9nFSZrgQmMYTJbaSJMgY",
  "key8": "38Z8x1ZS2m44WXed7bekevE1Pfsx8fDLKMPKmwc8mpjwGABFmtPsr7KWcFWYjfqD5yefyPiutEjCqWLSfNbxrhGG",
  "key9": "5X5bD2KZ3pyA351apQjkQ2xPBPvoHWEjttPuDtrKz2cd8EJXHVZUAjnGMs8A5jiVQn4UL2pCE3BcyLQKVwTTmKhN",
  "key10": "5ieg82MuPSJcwBwawVKS7uEoK8DGvT7G2mHwH3PPkspiYLVCmANcMcqdNqnz6V1k7VJxVtKbgzZS5RH2z6afZbiX",
  "key11": "2kNcxSrurd4P4cKFCX6jvXr7Pos5F3B2VEFguLcXbZABjBzLj6tFrf4FW7ELR7pkFeYpVS5UbNFAsLXYff8JSpQm",
  "key12": "5SSZE7XM7iKQ33zmc9j9s9E4iHop8uzErTcW2UFphwhZvHuPNWVq83HfTNqCAs2yKWH7Zg4gAaJge32zavnaKdpa",
  "key13": "zjBcsUoUgoqhFfSPegJ8V69Q72BsWq8HS54c7vdkJoaLEQowDTJVvN9VZh92LeU4CLdxXG4JK4bQ2UuoeinM9ui",
  "key14": "orkM8VS5rLwK5onYiYrDGyz2seQTanpPJfgx3LpB7BDwgcAg3CiKEupTo25QgVxHzrnNDDNph3eG79b5yH1AvzW",
  "key15": "63FfChzHiSr9TKcJcZsSqezgZre1DeKMN9w81hF41VkthZVbZUt8ahho1fhexzRcozNGdnKWKAusRz2BguHXR2hd",
  "key16": "5AoMgVR8Lb7HyAz3jrLpqKhQ2cHHFvGo9MBGHJJ7NQdNedAf8b1TGK6hQGFjHok6ZV9DvTPMuMWvQbrBroosz7nV",
  "key17": "3jCVEaDfxMgTF9yCVkKrQ3X9pAoeb2gcHd8sJQHfwFpxTJuDEgDJedDre8Hr7Co1JksLN8pmmqYGishzEAhkGYWa",
  "key18": "h36meTgwXdoo3B2LhRJX8NCETBpxJStTyg35yzUURbgxDibRBxo3avw9ZQniWKBpKhrWe6pQF6xr2EkYah39dtv",
  "key19": "3bLbNFziXVm1ancRQt3b9jruFUxTWvtPrKS7BP4U8Eo9X35r1k9XHWfCv6paG1vPgQx55qnvEDzRcK9eiLFoe9j3",
  "key20": "5X5F26YYnsMgp6TRP7XZvJebmF9v2mD5cdbCdvCuNzDvXxMhJVtPiT8YnKTVs3HPWa2pdnvEnWdqbk6d3vRBSLZQ",
  "key21": "5nPL3e4dg4x2tWeCK4KZqEQzPZXpq7LpVL1M7oy6KmT8USfK9jT9oNy6b5JWaETiTjkveeQGyM7qzWC6iBsGWRi7",
  "key22": "yo5bdiSvPYubqVbCsiDDFY6YckKs9hNBKtu4uoEkUzJZEUrTSmxTduMSpH6AWzyUv6i4FYh5v8qAAUwi5ct2i9F",
  "key23": "53DxqxJrjPRMPopo9zt2uVm7ysTejTvqvPVy6U4pcjt1qj3V9cQAxogjgcyaxw9pPoVK1FMiLECFzAoJQB2afmvw",
  "key24": "2UjNXfAQ1beCoyC6DXqDzFVQdwM9h7T1pSwRhwH3UyZ6fj3t42qFfUaPHZhG4QcuS9HHTu28AvSYCvSZmwbik8Qq",
  "key25": "5SELi4KZZ8aJ4632FG2iGRVTPvX7AoCSSosovrM8ZirFturbPUENpbuWEYKCmzb92Y13XLTs7GevvEqGKqaMs58q",
  "key26": "3oyW6kMu5ft6wM31vEtiereP2CXp4GDdNdJBDi4KS26hMZZidusEUHmUAAvKCfe3kfXnsNyfjHvhPptm29aNRXZx",
  "key27": "3BRyH3md8FKpBoufE5ZwAqEscLwCH1pTDa67WmvHvJfyDFe4UjxB2yTiv8CUWgBXKZ5R51587pVuqc8StnibYm47",
  "key28": "5aeTMeAjBeJYhFDisjGkAWAmvh3AzpfKCFGSDXVqSmwt6Dueeybhjqm8ArDDopsiyL7YsuqPZhF2Vrdriyz2ZjGU",
  "key29": "4wLHJf3sqZLWezM9Vbg2yDQupS1xGL4KhpbLcToe8uTVm4mDmvpCGmDDffWBQTepTZCYVKLBk3WvBi4R9hB36RtL",
  "key30": "2HTMEWAYA5XEjMJifNG8YTZAwQRXVCWnd2D8K854xtYerVUAmH2F6WvYMzF2VYodVMnAVqPkd247kypB7g9VzZrx",
  "key31": "22MT7mZB8bUDYFER8No5omYGAEG7apmJxDkEpagP6NpXwbbWKp9BSfgSfsKTTGFM47pZA2eLWdTatNmebzcoV3U4",
  "key32": "2uYDaDtFhjasHBT1vG8Tw7DR7zypsEwNfA3JPk3mnL6k2cmHJiquK16GVoKmzpvG48MiRXa44Ssvwqd2B4gosGxA",
  "key33": "CqRr4ZEznw9bhHq9oocuTKmfzBEi1WQgLjznGkzSk9GKdnFcKMuDQAJ6seMihU2cUJb75RJEA4ptPEibm2zHkhh",
  "key34": "3ixhAMgGGFDa6hkLaskmy1691fpXKJYugtuPbm8ozQdhfkv6CfFmXP7iXbcecSX9PgesNwcYweytUQvSZPApSmwi",
  "key35": "5YxEKVd9AL1qbWJzsdNoRgUKRH73EGovgx9QP7cWiHKtuAq7rML3PKUMu8GdJVRfcZC4vr99hiRSfs2CTZfWJTke"
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
