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
    "4Bc7D4zp5pTiyA7M4rwrEjKY9D9Wmd965Nm42PaZfn814n37HnPAMPkUhXy6H6AojpYGHCzox2FPkeQnaMQ56Yv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s9dC5b7H71pvKENxidLQKUQHeDFdMJLTPkRht6nNdoL3twR2T2g9EdZY2T5rGSqDrre3xdmigRhTggKxaByAznX",
  "key1": "C1iCfQdtWCD52D4MZJcb2upmnqdzFPZ51bJjHGLF5p3hzAfgtaqM7EAEsAJedYwBXGs4ujWNx9gya3oseMbbdZz",
  "key2": "mJDrBNNHaHLEkSaJVXWoiXg5D75PaJiWiRYCu65KqLZkMjzuaVoXTfJk5b474wJ9UvRysXm2S9Wihu9aYa961pH",
  "key3": "2wt8ZWYfG7VJYy9yL1uLtAmhbqNkhF2KjGpopqC9ryXNZw8nyFBoRobe5sgyffcMyZ5v7mVKefFZ71XPMZn7i4aN",
  "key4": "3E9hghq8Fp4HYb1oog3sLVVeQkJXjYhReNphKDzwX67k2vSNirR7QEKLR5e2vsB1XaBa38Dx6EFXREokxeW8bTmB",
  "key5": "4CfFNtQcVrt2RVJQTrwiCvJfGncKtp2ytuTCWDSzLMp39UPse8dFudQP61rCN3BcyXCrEgNeRXRAz5yjWxvYoP2R",
  "key6": "5fwGXfxRqfNHz2QrvWhuoTvh6rZMhDVf42CpLrwK8Dacae4zeSr4mgpA2AMbRuYvBtjixGYc5TYKe642t6ZATnk5",
  "key7": "4iFPFf77jn9ycLKeDHGazCNWxGUbUN4sTMCGKSWeUTPkKixCspLioQM6CV9HPAWwHD73vp1NPZfn1n8dFS3NZHqp",
  "key8": "2F8RbbFm7GEZqQsrjttq6iqNSAdit4Q8xDbtaAUCiPPSt2VnFBLgxXGrUVyjZWCEtmgzpfKBrbAnLH2TQfB5knXK",
  "key9": "43jR51pKZg4inSfdCcY514caDyi2sGXCt2DEj2ZaZVHxnzx82E8oXi3cgzfacWnPALKFQRNscqnLmtzgrTgYdmj",
  "key10": "378GwHJ9rmvBeQ3pxrGvYYDS2eSKP3sMfYc1bFYWe4hcEDm8kFMKAEPggeKo1oR2SV9Xj9c3Pwip8dgo5fKdygAU",
  "key11": "4ZaBCy3n4ReJDykxpW9vffR2dxsqGyZwtJfwP55UKMV8YpPA8L1EcbivwzdqwKi6LJcziHSJTX11bAqy7ASg1jG3",
  "key12": "2Hi4z8R6PNTVUCfV21jGHHqZ7mmfakHo7w2ruSJbn3AcYjZGxRMnn2DLhVXFBeSnhABW6G3vJ235Y6SsN8xSuqU6",
  "key13": "3ZeVDs6hG6cfUz3rJwVqkGGDkdABDsrtkfhbHA9ePidzV7gvGa6R219UCRjLditWNETErg3k7quvzkjg7yuc5ZcU",
  "key14": "3WgbiQAFLdTZNH8rafydTtdNFDaL87tX5oEH93ZLwdNg19SUuMwH8eoShHxPpNkUijgJ2Faa1qz5uBmjcbMyFuB1",
  "key15": "3Ydq47gPV8bKuE53iJqitWLAA4vbGHFdLam6xz3ASUhQGpnYm3yFHYwAh9DTctmz3xJS9zWuF3RCYsucnMdsHP1y",
  "key16": "33mqPfqENsCWGf5H6Y2XoV8zSTC5cwBAxbAWgYv2N73Fx6s4ntQRf4C1VDvvjKKLqAR2SLfUFh2Y3AKYxjqikNqL",
  "key17": "5jfdmirXzokY4fn2gXvCcggA9kMP3q9mrQYuB5QiMAbfmKqDfKFinjSSmFP9GUwcJmU8wb6w6f4SohG25dDSFuZY",
  "key18": "4kAfUTPo9G2EcqXTyPtm7BykLPcQDoNqPQKA196yJ7SBLbqPEDmMQBqKU6ztoAwSMi7pDDBz8zWZgFNJbLXpjd7e",
  "key19": "53peDZum7eahSEwwXs4oUayjezZE6Zfg3FdqhW9zEgn7whXdbVqeb3zeagMF1Y79JViyhZEPaRXUVmynuHNV8fum",
  "key20": "ptVbSrFKeEmkT9LJ3QWXnErsYhgynvZjTMNnXASqTjMW72twVkBQ2F7UGQFnShD4SmHDJqPsPs1qVYvn8CggQQ5",
  "key21": "4jdcc7hM7DNFuQvLofPJye2zu2guenMjFKxDUksEi87VW4G7j6nzNBwSk1yyscRcc2YJqMksADQZd6PSyUS6dUks",
  "key22": "4Ehd5PpZBKtCtzth9qzmStA45ijDFZb8hygjFh8aokRTeaBPtz56qwXJm6W1ZJ3PaNAEPdzbuuzeXACDEkpL6ZPs",
  "key23": "dp2YEfA3KaCFGqBZRnt4WQdcngsDmvt6ASigwUzFgvpNUL2Pvgahck4MdXW7RMVVpFD2Mfs3HSQzQFtguEmqz5J",
  "key24": "2w7N61mbJfXJWwqTnebnkgcHQ1rMRn4ts2fP2SxEw96fte13tQr2tewJbGu993obtT3sLaGbLrSiGAJL8TdPSHrw",
  "key25": "2icFGFjVeHfELziwQysbYuGz4rtuKdmb2t6667cYhfmzyGZKaKpSxW5PniFb1QuLE7SXJpUcpWYhmt5KmUgzZ229",
  "key26": "5tYBknhFgG5KvRakw8ecByDrPaFzGkq1RXDtPWNPhe27N1aJhJs151nm3wGuXjXEth5KihPWrLUNgtumerormjoX",
  "key27": "5P1S2vU3poQ1977B9HiAWEDmSZ1b2h2Dd5g47TzaBsaKYCvuwRTomGesVgqhTQuqvjqNCdeAAYQRSyZTthVfJY2u",
  "key28": "3aJmtrfzC79uhhdYxebzcAENhX9aHdFmjDU9H92xSvgsGo4R1g9HLq6Y4wByvQog8t1QvJooNxiCyvmdhtdAYHur",
  "key29": "2DLWByv7KUakLs6jVyYoUkw4P7jfboBDgtws9wve3sPFbK6q1sG3ASMVPZZiTZe8eRowfV4vMVR8sHJvW6JNVKNx"
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
