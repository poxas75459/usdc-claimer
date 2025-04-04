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
    "2RAAPPJ4Lj4x3ttXNxkBYMjS8gpK6CeVgbLo273wtV1i7pmfnMGQNJfkG67izKnKhuTCZ9dZjdstEUN54AuSCMwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yypgzTQr6yDxD7ABFvUMdejnib5PT7qQypfqiA4Ec2XzpZXkimX2EgMT64zDPDfz6sH6xg4hz8EunkWrkCyTV2t",
  "key1": "JBockrGGo6bj51mnWnWT4L8xDoafqnW4fAFsaSXNWHWxYtUz1yAMe9rTmejo4Y6B4mKZXTr75uAxL924HwXx6Lm",
  "key2": "417jmULG4DQnMwQjBpEWABpSyBspK88VbhDatc1mpQb1XcsauNxAX6kPApCEQ64dSspxD797BFiewFFht9GjcVHj",
  "key3": "4vZ8a6hMTC8WJeH62L6i8WRD4Zzc5U7c959KRacHJYFGJozAuEVxUtHWV6Hyia6FfMR91EhQStxq3FVqrChhR3PQ",
  "key4": "6A82JhBV9iRToYfYqyUvN1ALwSzuvfRtDZadUtAcLaxZ6RmeoCqxgtThUYigKnPcNHTf6hn5tunsEBYho7A1m4r",
  "key5": "5sRBSW6R5LShWiuHMMcpJiG8hJHpbUACD5Df6M4ULgwgCUyBjgzfLCvxkT3TK7wpkrMNtbabK8TkUDm8W3pPUDCh",
  "key6": "7jNGS2EpnQaq5R4frMUvk5shAR3rb88shVbgUETkxWB2S21rgHu9RDhoVgvSmb1DdP16omRBF4W7DPbtPEwYpRC",
  "key7": "3CGWBXwfeDgjKn3tXP4UdiBx6L5W7jbFq8EmwqnMVd5e5KgFwR4wXAvPEKEKJsThZu16jCoK83Y122SQNL3P96Dv",
  "key8": "qn4p23fQ6SjrPbMGZcBFsNjpeX1s5G5jgSLTBSHWPUVJGZWPrvwo2mrMf73JthMFYvWUPDqNYBzzha3gmToRHUr",
  "key9": "4FTTqs7tFfTyu6R8hKgF8fXjjerL2EM7tZhnxj5zTE7fEmboL8uU5rrJfxdf4sD3Nao1SoGb99wNmvuhqk8jf7hT",
  "key10": "3G9LfgsdUH1j6H6pd9gnc7MTfNP1zkDwCqLLu1KMaK6Usggx4QRKNTDNgsPuA9eBVY6bQR7Zt4xRECkG9krRg26m",
  "key11": "VV51BhGA2SR16RqxmVVNpFUMDZjsHsz8pNLGmCJE1Fgnp8ELaXQv9BVzyz3jPXNBSKxHqgYbVFaokJV72aeoxrJ",
  "key12": "53xBPfUqiYXQtmh3v92PyCLmsHkBnMj1XT7Dprit6GCbgqVB1fEdBmb61TcCCgDfLLJjSM9r9G7tJ9KF92rJBH5Q",
  "key13": "3hps6JGmSkMyjTPKcYcW3kwbzAds8c6uyj7XtjTeQm8TWPdZ7qZPMQSFy5nBB5n6hd9bcbnYcvuCHfPhwks6aarz",
  "key14": "4AbRUBHiQiRiUTaGGmyBgqNAvi1rXBp5FvgTdas35HsmYxTdyNhKLnuBov6iXGtKQP4jpLa2rMS2iAq8faNmLovU",
  "key15": "j4BQjTn7fQCBzxYMUmnT47GcNx7bByD9ieA8QAYX6wor1s2mndhTMfVq2WTYtgzBXPoLDuV8nGFbyHAGzyYhGKK",
  "key16": "5e6cojuWxtVqpmeLUX1Y8sBTQ7kofG7sqBN2eFv2VrJNE1QWy9Nck7rZ3Gp2iRZ62SiWsXFoZm1VhwRYnUsZzffk",
  "key17": "4dUKQKTE6gbZrxYQAyGU8WemxfKHuxJfiWpfY3htG1am795fQmDhjAMimbz1ND7EnWeFcE5BysHtYhKngY7Sd39B",
  "key18": "43iXdfzD4wrn6w89sW4XjQay6cuHTJyhZTK7rSLQN4V4hBd1Kk4rsHyNKkzJenGa93hRsdEhC24KvfU33n6uFtcG",
  "key19": "2AvxnfnPeKX8pE8L9QkpG2yZ5TGUpun1evKUbjSnaZ799e2uwDpKaKhFbVwmTw34XGTNwpE89Hn53P44AZcCK5FA",
  "key20": "4B5KSHd9nxUfkC2rCusZ9FiEqszZS3MzMWiPPURQ9jz4wfq3tVGJpCv376pxCpa7YeJU6WNV2oTexNbL3dVjS5Va",
  "key21": "4Ax5v9mQAvkpQq54ZwoNxoFu8ZVjup99WQLm6H2EdcFfhL2ydxyDsAJJsg2vRTpiFBy51v4GSf9Ye726SnHPJAr8",
  "key22": "4v8gaPGXT9GSE65yTWrmwNhV2ERv7LnuukX4hcS9enw77mSwe9pJV5S2QKqcSe3Xy7i553LpT46yByXuRMANybZv",
  "key23": "2SeJNi4eG1PxLyLpNZBsBFpc289YwoHxThsUAdAno1pUKm8KWBoQngznWu7iLkyVonsnZQcPWHqN53MQvP8T14nR",
  "key24": "25aGEJ6CurCMZV98Ro6EN4eE5BKdCweaA7ee4nSs99TfSNH1NdijFbDFMdeS8m4otFqv4Gq65HAi7HYjVzMQGpYo",
  "key25": "4GrVCGnPF97Nv79XoUebktn7ZXjXEUKeJwcaxGZ2Yd1LgYuHvpX42mkbDKbVXPpGUS44QZg8by8ZUHYa16Txno2y",
  "key26": "65YiLN76LWi8xPuieJ48oqmun2XFK1gxZ3XEfnY61CJNaNrVoeFHkNQN26cNzW9QFkDsERFVHBAX8vGGSRuvAQCf",
  "key27": "6zviUb9ZCDUVgXcjKvqoeeGSzb2bDG3HKtJTWS7qUuYr6qowBMVg6F8Dj3QCzX1Se2PVpPUtduE9e3C89ufFbHG",
  "key28": "3vtdSsgPysU5FomG9psviMeQVGXuTiHYeaYgFsdeJ6VepPKkiMbCMNU7ZhckP1xTFL2wZ96BDUHi6LsGsk4LZFXw",
  "key29": "5bx77m2gjtuLJTHWd2B9WdGheyt4aMnQmTJ8dhEiSua7FNFeDS5Bp7Kcjp3TSnwR95dHWNTYw8VFBfUEKZPEUwpr",
  "key30": "25H7UiKuxeRi6DS33q6geU4Kd6vZMpHUZxq7zdsAiwjLZnaa3knApWtnLVHCzduX53gTFytan8WTm1Y3DQAftjxe",
  "key31": "3FzVxBvWfpNVaKKkX3PrU4sr4NAU5USqp42U5dVCem2d1oQD63wvsoSTDJSa1a7FZoi2nzUS4CYCozZnY31pCMDv",
  "key32": "3n1seDovjK14G49VYgbTGVxekvt9mqrQvAAwnDKZCUMJ4vofadDJ9H1XvPdp7CL9WXiebBQBsJgwbvLRqZZqb92Q",
  "key33": "513B3MDnJZ4gcjw6Lw4xaCBqhiB3WfAFYaZVCrzfDR9Z2avBLieA2jxEZHrQyPgQd2cZHG2uYdx7Rit7TND8WLHk",
  "key34": "5yUxx6Gn5FQQnxnMeMfuVRKsu62fjsTAs5v4ZcRQb7T3Fo1tE7yoiQ8tqkzVAF2YkqHgsFjP7d7bWa3WAUNqv9Tt",
  "key35": "55wRwURdeFS9bZvU7CF9zjozHN49ycodp3MNa5u9LTBJESgp92DVi7Ev3xP5sYrkGfXg25vKjg2YbEKxPNUbPuGA",
  "key36": "65gksQEWprr5wfBrTZHNKxS36wkLawGYJbrWHw5CQ1vgsEWMYuDf1Z9ATs7HddXuFVJq3pMgKjy56ZstdNcrzT5H",
  "key37": "4PveSP1kkzoCV7rvz2H8wWxsnNUmzaPpFuYsyQWFnPZNSS2MY6CqhJBsqhfgFPLoJVmaUYSp9oyGvweBU2MPfC9M",
  "key38": "2zTdqVxkAWFsaKDLAgLekmd1uvgb2CZRpnpaUpVBKd6AESybaVXbbfVo4nP7AVqv7LkGU9HrHbN3zsiwn3dEuDQW",
  "key39": "4BD5LkmVUZ2aF8pK6f3pH1aFZg94kTjmEnCzntpoQ82xvtX43fEcmjZqD7RRTvZMsQpFKtNe9iMaNKMuujWRVi62",
  "key40": "4A6hCc3c2sbhPTcpTfwgJgRdniQzKopYLPs1BgKMC84zzMD6iEtaB3TJru5DF7aopzQNzwxkkxcBQS8wq9zhsFam"
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
