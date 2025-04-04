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
    "ZxUBpJN3THDPLyJ1dE9tSja7aeRawKrhMkFi5hBpMDYD3mxR3jzVihDK5RXpiFj4jZSyX2jr5ENaWHxxicBonam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BE7D3ibVo1T1D5ujQxDGrnmAJr3PQQCwuRjfQ6rx7ngnBe9DgMNnXQ7ahW57MZT9n89GCCFtBTKpLKyxXeuDf9y",
  "key1": "4ucGC1H6D1xJoE8ktikrrXYnenEq8XCTBR1UDnnHZbxpUwrqGQgLasKjxeBcsc2KHjYsRtWNU3YJdinGDUf56Vix",
  "key2": "4a81CyGiXo3KVcYk4GBGTxFTRctMwqdJD8T3xE5j13JTqcVpoKUHnXZAsK2b52W1DiXfbUzD5mNa97fW4mhA9bbB",
  "key3": "4TWFTZm3fbacV9vuqtW28cGthy2zk9rednXWeppybyWZE7X4QWT99EdWmayS1JWdfCL3d5SvYaSNH8RQq5Xi1umQ",
  "key4": "2e6nkix2FwqGowkgH4ZX4vB7uJ7MAtYnsBk9dVSF3b4ZCR5vtA3kT5aq7ZNJcp3KTyVgF9PHHUpAqWPo6F8sDRR8",
  "key5": "3q1G41xi1C7bAj1ii3pCU1eVHG7aGqq2uAEdeTxZXAbv1x1QgjKgu3UYWdsfAuZjnKmJwPjP26STjRNhKyyZfhz2",
  "key6": "3GxDAUTbkwzUbVC6cBeSKQS25uDiKwdGoRZqBRNHeN3wWtdeMB6SaX3bNABWg4P7tDWxSULqLkv4NuovTMRSxpci",
  "key7": "2rDUKdj7RiCodvKmxvWX221wcpi1Sn7JmZ2xCVrwtQCVWX7dBh91vSd6iV2eYyRsZUdNPcvravpyCeGUpZUwvQqG",
  "key8": "2GNdPcd1mCUm8HXMd3nN4JQuRHxqAjeVBvio691MzHHizEMbcNpA6SBZHT3zerWK43FCgZf4zJ5NtjDaDftCDvFz",
  "key9": "2oBiSzL5kuS5kcWi1wHygXmv2tidzdmK8kFPtofsCdiNchCE4ybvn8gj1FEfdprYEZy4jmH93MxLAki93WHw4e76",
  "key10": "4MhhJzuGGQ58wXNAfUaFcNw59nPwDZ3phokybRFdwB4hwVHAQWyMjWcQ7d8teboPrzQGsirwvagyvgaU5rDNREfb",
  "key11": "3LhmBxbnTZeqrjfnB6ecb7T2yBb1x6oopmNxPm5AJRapz6qdiH75rV6o16ydDprgmTkfmuYjJWHEp1BuREiayb75",
  "key12": "3Qa9pwPdtjx6ffEgCnvkJ9eDxtdPDiunn2FRV3Kyxhx9MJBbCvYH1on964LJJRgJcuyaLh12arzJtthMvrz2q8kN",
  "key13": "3NaMg5jo4qDzyECtfzzgeiJD9oTn9AE7eYnZZ19wDKYAUgtzv5yNiPMMCCmwZDUQFLqVzsjUp1iqV7AEUeJPk993",
  "key14": "5GFhRRbVnt9AGrEEp8pGmY5vdnBjLSxmSVjJavZnTt8ijYRfgvmdDuGxYjfndLpNhHK2QMf44BwV4ysxa1yGCFQE",
  "key15": "y53CjEjx9KRBmdBjtSAiRga3BCtt8tUsBUd4fsCcSNBys1PQg2VBgxpqs7z9eCeszLsQKbJT1kYBvpYaepRxk7A",
  "key16": "hJ8HUPbwoBwzYjQkqx4UTj8mwmoUoh4s9ZeZea2GxJGoGE88Z9uahrN5uxnQ7tUMmwhTfX7aNrzmtcA6LsLASLo",
  "key17": "JjPyVsJk2ZysEyBc3WokWXCrgG4ktgh76irKDmUCR3D4N2SXs6NUctCGwTDbRHLcvY4iUbyE4QKkouwdgNmriuw",
  "key18": "365MWGTZrXJNFfuxhNKYYDVs1RwZ2mKmviMJSiQ4sPj8pZQrTBnyZWLYceLCPgsQBGgRRzzj3zUmUZRdbnBu2qGf",
  "key19": "3xc1uKcvjbRTnFaJR33rB18upzKCG5kD89qBFr4dNG7zDVZJu4mbtXKKj4UD4XyJuswzqkMQNkt2xrrGkw8QSLnB",
  "key20": "5YB7NHgQQjHJgEyz9Nc8i3crP3XXSFdumQ21Hp4z1fYszB1xaBvAj9YuKHYf7qBZiuw7zgHvdpfoMLLaxKLs8Ku2",
  "key21": "5aehvyevd13W4T61vfdug2DrCSJabF3iPmkpUkUbn9oowUrATUUhTfffNHCQtantFF6kPt9pkDsNmowhebL52T1n",
  "key22": "FUAmuSpNA4LqAXQVrqJXEXsEvyJCsWAgN1gDF1QuUqZAVP8bsaHbGriNYTCAVxLURLrygP3sco86RhTaiPGLwBB",
  "key23": "kn16RdLq1cANP4adqBc8EqdYBS2xTrCrmaEg4rUmFuKnk7HHd93JuRCRnd5f7bM4QC8C9QgUqBouAEVA7EVkQTC",
  "key24": "2MbHhscTUQrJ2vBqBcuxPahktgqQTEmmpsvksQemvZKw64Kc4WJy3DSDgzdZKyZiLVbnuApp2bBQsehJtkuXwz1A",
  "key25": "3943hAaacd8ZtysnX8mDDrMMo8EuwugWEgj7q2x58mwkSswNsDpdB435hQztM4cdvBFdyuqaxRRFNJJ6LCVUQdjg",
  "key26": "3pxQ6WoRkZmzAkbnCEms9pHRycfTw6HLko9547pb6uoCQBBRg1pTESZnbBPX7weK93gB4cGXeak9jVnSaCo99hqM",
  "key27": "3xB3gghTK1cf4wqCJ8qFYbCpqWccFgc4HDpL93mZy2G3rbrSmk9YUbM3SuDoQ13rZveqkBR8VQpK7gS8ePk3Z44E",
  "key28": "2wWXdGZdrAtuAAGXHnj5d7vAQmFywzbJ73JTdUvxQ7DP7tUYgmWX4XUcpoh5ydXwX11soAbXKDQjLpAeTFp7ti5n",
  "key29": "89Gsw5tcc1TkpV9eHw3t2gXengpUXDYi2Hgx3kGq5x3KQi4PW4kvq1Ph52So2vWZcJN8sbWHRi1VK7X1Fn6CkzJ",
  "key30": "2nfWJu9ri9B4bGgAz3qoi2DBVoFXE2pvW25DtEK3uQnXLH1j2qx8Urw5mn6Qdu8u6998ZH4dNDdeA2pSL6MoHDe4",
  "key31": "2K5fbzfxtYHhE7h2fUYQ9dpTqfVyDcU4x89VVMk2oEGqYad9vZSHJ4GvcNUfMSFb1stmzyiMFhpCqwWPHuJKpaQ",
  "key32": "3kf1g8gXEWAktMAdVk1SaDvAWdpy1boQM86D6S78a5SZsyHJENadeAUU4aR73SmceraSAJxbQeWNoAJBWLHQBRrt",
  "key33": "h8btXDcboWfHeagsNvk4VNqJMzjcYgN3GYDjUWffS37T1x3xPf7NQsVMVC6Yc2kZnJX1gW1oyufjdA754F5Swt9",
  "key34": "46sSMKgzgZq69SpCksvPvdPRp6kh7egBJjWrx9HdfG7T4zo5MkJrVg9uFXwFJXrUZaws1ATGgy7zwAoT9YwU3pJq",
  "key35": "3yCzPXpUwQcHDWrip3UbwTasnJRPJq9S4coGEBP94umvbCY4VRB3CB1kov5MwAtc9s2k5pYengB5whzrp4MQNJEG",
  "key36": "4RooHwmFZ5Yg8ovBR76i3YtopzWsYEGn9i7zwpA6QpAuEpax7gJQyN2ey3xmgjpoBbdsVH4FMmQeLo9U9fQJfwQZ"
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
