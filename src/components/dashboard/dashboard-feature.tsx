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
    "5Sd2hQo3pSr6aFjim4ycKpXzLtZiZkuysjg4qSqyPWfNeQ8ovccgDai8vtVuipT5DELm8VaYk2NXCbCTNuTwzX9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NedP4ebFypcaypQL5ESq84ch3nMYLNsHkEdeu1wLYX7ocMcUoYcVTuSEHykfAfKzk6ZBxsL7Pa2bQFf3ZEyNLr9",
  "key1": "8emKRqtUFG5Y2aNK7Spqi8DfZYaZy5qfkLRPzVai6CjfVAA93wp9NZNBdu8d3x4vZu7GuX2wCoLWrqwTFX3hcRc",
  "key2": "4r6BiWbLSXGAkZnt3Sx4Up7hzGbWUCDCm1WSGVjyCo5PbiWMgMse85q6aXND9vsySpQNgDZF89HcyayRHzdEXXDm",
  "key3": "64vjDUF7uDTi8egYpRiZy4Hdvx6cSPXHUyFyAgvcW1e4nhDpvABgyWNwEvVsZVT2EoqaciSDA62HVfiPQPUhXKDx",
  "key4": "3bYRcWd868q3tpkR5bgxnEh1VUrKGLbsfhFjnA8SNA4A2tnZGCLwDNTmF5xibL1pogCZ14ds2VecRFwb9KVQH6hJ",
  "key5": "WbeVzz6BbF3f67Hkf9PuVkykxnjsrDX6271EyAXA7rkDZS22FqmvBha1tkMgvaXEEeR1uY5dZxH8iTogPnXbbn6",
  "key6": "2kZp5koHwDoSEjgh8nRq4RWxwAWYhfz1dzAFMCcR2wSk19vKFnE1SWjEzPKomRwiR6ESiHY5BnVwfbP7QMtTHgNF",
  "key7": "2EjT4ifMh3cpGUnvVffeNEfBQG5eYj1S2v6kNnQojyhGKh3pXDXXFpMEYyRAbcv57fP4omQGrULCK5pnb7CyzTLU",
  "key8": "2Fs5uN6ZQaZNyqCyVrMU3HvJf8KgHS44mnzEq3ixQWm4LYov9pozHgCUBwnGmtKvU4pHAkaxx9mmcYg8QQcaFm47",
  "key9": "wWv7QDWS85ii5Qvf7Hdu2zv4vpczn3Y4Fmota8Mf1WExxvgmL6fKqzLZCQ4UfKQDH5afvYMRHQW6aizBdB2GpGq",
  "key10": "1hnuMeYytijMZLoHzYwpeiN8phxK9oYv7ENbts8wCw68yj855SbCh1vBvzCo41iMu2tSpuL2kvT2k9GY62zUBcx",
  "key11": "34nf6x5z7Vv5WyXVFqn59gaDmq2qJwFxWdvenLJUcmBpbfh5zgr4w33CBMoY9Sf4BhStnCZjjijwPqY76YVzvhzN",
  "key12": "g295GwAh8Cc3cvzsPn928H8ZKW7aaGRE3HajkLjtiwvmKJV2Q3TijahXFa2727y2zpzic82rpLbZjV2fG89i7QU",
  "key13": "4r6SjCjktijGYqbYQw5bM5QhQNZchgXYxJ6r73w6yHG65tG7Y39UCtyWp3uoHo2RGdSzp64S7FpFTxKxczaGGMLu",
  "key14": "5GsWGAMTHnfrTVmaP3useLNgT882TAMTp3fGfEYxFvxwmrfiRWpMNowvGpFFh7EBZZ5smoExNRBPHGMwgCvWXWGS",
  "key15": "3cUr5tdpCUL12WnAy44xkXdxehNGSFqqUWVQN4Ch1qoSqGZ3yPZVEKRpHnSQEBURWerT2BGwTj57HRw4NmNA5bc5",
  "key16": "2yPysfUAnw3eGz3FED4smkCR7bSTaFgqKS5W6rHbKrtre81DdwqvCWrEdndd4GSz5GCzC7fQryf3FBd26LDnBYY2",
  "key17": "2mqG5ciyEz9QJJQhb6L2S1koHaiXidhX1UTdz5wTHczdWAKZay73jvwRbMbPNCXURwbQDLSHnxkgkobAUWGCB7iJ",
  "key18": "5kTbWzeCywXighGaP8GnkAFXpRUuMxGYUosjtoCp4zWs2g1vEVXiA9tsCR5zzLzYhTy4RwTcNrmqgaS7R9q2MmcW",
  "key19": "2WJ4ZcKqguCXbrWn2GFDXfAin6KmvKGjgd46LenxaAtNBgxbmwiVZo64ePe7zfNd4dYe1oV5cCReVYgXpHTvEas1",
  "key20": "2vdPTe81ZVHhJPSQb11BHP7awQLJwpkHCPXJgMMhkqtwR5w4m7WQw4syQ6pvwV3fyHUTfVBv5H7WPcGeCGfSpCgM",
  "key21": "3CAHcSjNtyC1bgGWSpA29bn6J9SFLKhWHV8ENAN2GPGmJRvLKx19wnBUhPkqWiueqDujWT3TVwMqjjKiCXGZBYki",
  "key22": "4HXCE9dpYkyxiEVRUaLoRNGG14Qh4Ei1mc7fP1xBDLd8GeXsDVDpwJPaDzfR4PbJ8d1uB9K2adj4aqy5XrDA4Enm",
  "key23": "2EXWrxephrB2vfZVAvqAuk2erUZzSKCtourWzPaJ428CnNj7UNdF2WYaxMjKRoJHTUrJPjbFG9sRgm86qwJQJCwR",
  "key24": "3S83dczS2idz3PBGXgCe5Stn1sgcMxytftNjwt3dKamF1ozrtm4y2mFAwARhBTb78mTKe55er2PG6qBXh3BFNvHg",
  "key25": "5dmS5yafs2vL7BZbGdWhoXQnULAyc7AfnLDkWiPJyXbzhTtbxhUkHpgqkFhYpVvJrqKTpihqx51xu47RZ7MaWpA1",
  "key26": "5FmTuBSmAArof4bhmTphtUEJBmipv862En9HanNNGfFYKKaioKe9wqnofZ6XtuxiXdyqmNJ3DRdgTfdpFVZgwEUK",
  "key27": "2DoKKuiE7QNX25Jjsn61CprHUw1aug6xGppKNY2jb33PZGHAd6gRHgYTFfhVpBZ8iMWDkYEYovPMop93ErvYtzuh",
  "key28": "3kxWBhCT9sdLvuHCFz5hggs4WD3PFxnGH69gdZTWpbHcQj8FjfXuyFj4QjKPyBAJQLFJ5C91VPm36BJEhELkevxC",
  "key29": "4gjMSKFRgrw1DJ7Pyjvekfyuk3Av8UTP7bpy9yrNuvZDPZrgS2FLuL8xQSF1XR3v9a27TUpdUfEcaXeAD6Ekj1vf",
  "key30": "33hZXd7nYvF2YgsZCDDEBnuje794QM3rZHsABoSgtA3ZnCumYfzG5eJZxrdCiEmsjWmH6RuyUozkqZxRz4ofbVFm",
  "key31": "3rp3BpiPKAERzbPkdbCGp7LJ224G3YgF7z6x8c1XpVx9DpDnqHmoWgyTRQK2Ai9i6gTFiypD9g5TzoS6PoRBktsv",
  "key32": "RBB9TkF8tkY3AotvhxLKaTk3jMRvRf5inxk5agPYxK4Ycs9QMn2Y761LU5jysFVjhLrxg5xzZuiGn9CHfp2LUWh",
  "key33": "4d5iEnZ4PXZ8w4usi3YtVEwftJb9CxDkrb4h3aSbuqm9u63oDGp5M7f7SVEUoFiRyFJ5ZBR597W3qMFTU314EpmV"
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
