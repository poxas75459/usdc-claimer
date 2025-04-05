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
    "4PsF1o8CUvpaGJXeTovYVG6LLrgShZEmoTpiZsg8cAXrkRQR2QNwYzAYJaaAr6Yf4bHrGE1D1rRFo2cdoeUxPj9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pSiW7NjMngFdoCrJzVynjoexDp63xqKF3dwt3Hh5vUushnG63fLaLHosk4LU7AWhBCvcWCvcdj72RBXncDVoZxx",
  "key1": "2pd6bmeZ78X7yCyRbznfHWWeMnyaMThGDYGFXnERVq8j6vomoFeko4CfVPji8UDVepmNkaHNxwac5o3HvPshc73A",
  "key2": "5CjtL6tbZKt5YsjSNeeF3o4BgbwjSjGjfPbmVob96sFYbZGfrakcHxighv7PEz6GHyK4GC98F79KRap7w1udPbnW",
  "key3": "7RhAoNPNQLvDeCKJvqnKLAgftc9Gh2fL3mAJsGSrvXyxgW1h15RobScPZnpXr5ZTWAdYsVTrahGdm2VNKcQ2sqJ",
  "key4": "3VdXdoAY3HELfxPqZatS1hgh1ddwVgqrMdR7irqwgUFVLbeJP2CuC2pJUSMs2DJGwTFtddWwK54RjC7qZwWdPGCW",
  "key5": "42Bz1LKm8xEYQSmY7q4G2mCNMhSajr2E26zYVbnisdE8T4fJLDoydnzvu65NzSGMeLjVmSdk3N9QHzPgKqFXAD6c",
  "key6": "3dNxq1dCggVJWxB3PU3pSVbbdkZbGFVAZq6x9hezYCR3E1yb74bXvuU5q8UPTkqRjXCZBz3rJbfKCRinjj8akWmF",
  "key7": "65LwuSMfyZSHUupt7DQnKWVUxh3ZWduBUKKk7nSYYuohkxSFNbXUea7EAgzsqSsdNvsnRDRreSwtmgHH4KZMZYbW",
  "key8": "4i5bkWayVepCZbmFQ9geHHXpDZdQgPyEEZZDoZRcPvm9e4RUX6Wi46ZzZCLSjwK1g5iVdEPp3UbiQsjwF1JesJzd",
  "key9": "4goMSpePDjFKW419rTSypJsJ4sFMMp9oNj7pVQQDmPzqw1Aw8FUTbiB1pZYA6stVsYbzuhJ3akgAagcohSLiSz5X",
  "key10": "38fimFTPSUw1xz4fXSoUc4hc3HFKd1ChXSV3wiZ4ayYEZ8ngF4KvptLqRpv4KaN3BuEf8N8u6AXZgkMrgA54e3Vb",
  "key11": "2UucMACJ4wS7i9AcLBFkFRKzpJMjF22kdFgbN2ckdZnUE68E31aFhUJAtYUhfPpcmf92vY7FaA2uFZTjivQ4FRQC",
  "key12": "3V44s4JAHeC75F6rtVcuvs2rkMGKNSwpSvqbXXXcWAXqQNXiM281cqJwSxfXLipUA248F8xEQbu4bscGRHRtRNHo",
  "key13": "2DzKqyuf9XEe9h2DxEbWcyue9F3dXxmd3j93HxwmPTo92KNjHou4785CUZosrogomfiFV26N3YiwsqX9x1EC7iXT",
  "key14": "38vxYtj7TGuDJxSSxKRMjA2va2BZupBoCAd9To58Lp72H3QcMNeg48kg7cHuPpXH6rDyiGQWhxLdLL2qLsfgz1va",
  "key15": "2yF5q28jryjtz8uHwaCf5mGorwaSzWY8fNGCpk4fhqdBTPFo2Rz9ax4xS2qTdB2paVvKViPxP49rmpje6v8vWkWP",
  "key16": "5Lfrg3RcMpWQ9Us4J5DxEyQsPYmqRCsfar7YNu4MwoKMt7aBq9D6KTMtkTpuPQEH2GGFJp8RoT97GkPwfDJKsBoa",
  "key17": "3QcMJxsxPnKZbJ5Uu3f5rtGuFT3tCvo6sUygf4Q5YgjJxwKvqV5VUNZiP8kmiVKt3htdRp2J9XsAE2NbLMGo85uj",
  "key18": "3sr9ggXsrxXho2wNFCfdDGpXVy3Pz4vPUkshEXMaEzT4XXkNZRiw5kQ9x4ZeQGNuo3TdQrjc6pMfg1XNxQgoRrQ5",
  "key19": "5ra36ekwnn4U89RZwoRimAgMD1GPLueYPofcRt9R5tkX6VCUU1uSdML2DUqn7m29NkQWuZYSrfmm7J8ySYNFTy4h",
  "key20": "5Y81gcRDEB6VoLkPgLin8FcDzdXnFnVMUjTcA68MahGP2HegiC9NgJpmaKSjyLvqpt1Pw7bBZQwpyB5Y9PX4Qcy",
  "key21": "pYXfaVCm63kqrost95cQr6w7QAwEYPUqRcVhuqoHM88UFH4H7hb7b95ZaREre3EUX8kepjW3ssaznYkbcvZ8PBL",
  "key22": "LheChkf5g3cUhXvurPCCxqf7cdBkuGLAmTAzQsTKf9QgG3aUwRX18w91kzUkKrA39UfNp9P7yWX5PVVMAwdmnbH",
  "key23": "5s1BzUZ7PLRYnma7xuEj7CjXu981hCbXDnByiKp54CTk7ojcHw2jmAi2NYoKt84iNUoJycx3zoudSPGabvANm63Y",
  "key24": "5R8qTnmV8uxyhu6aMB1aNLaCENVktQ4C5BhsCjHeK964BD7xiRjsWfXhDbUyGQvxApBCaqQgkER2NTGJhRU7aXTv",
  "key25": "3sZu6stYKm1Zz5LwKvjNCxHCE44LwwynwTxdPFPyZSSKcUfj5HpjVsPEM9tH3TBaFaY1QNX1PFR87DEQW8LbAdAP",
  "key26": "4akDXuapYddEsNQUq3zYNpBV7reJgLAGpCrXz5pmHw9MAxDKZH1qHNaqjAjqmBZT6hM85ZgEiVWcv6Genhn3FymB",
  "key27": "2Ys45Frp3zFU9SfAGSnk6Mo9F3idQzwg536mXNohYXHxVXk6nVfPp31PEiMPUhhremWYzgjTb8zY3AThZ44qzWzK",
  "key28": "5EyFUt5HGB3awBZv5TvM4MMAXxjTpJjQnHSdSGtW5SuUah7oFiPNALWLy56FtqzAxJis6vBs8YS1f11PupuvaJqS",
  "key29": "53Cf2bNUSVGtbBMj6yDda8S7ZdyDUjyUxe2Gm1o7EBWt5iNikJ2A3CCswPLCyn3Ri3rwMQPLPZqfCuA6V4SWA1Uf",
  "key30": "4snFvAKaYThZDkawxUwBtJWZzyqUWpCDC2tqkFsdMUV8TJ3QnrQDnLwy3zy49Q3Y8ik3T7SRAiHh6zhEn6RipEn5",
  "key31": "4rCGAHFsFTobTB5qmfQdFRTiqZ2oLcs2cTvoKiKcFa3gvZYGaHZnr1KKE4eSwptGrSFyb3c5WpkHsgUmqhuyDEA3",
  "key32": "35w4wYWxpvLRdcPG4YCVC1WiA4Z9Xrr5aDqRMQoMKTdJVt8v1FZJVPy5pEhH1WtdZRfbp9RwXMA9mWDbvSijZZ2Z"
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
