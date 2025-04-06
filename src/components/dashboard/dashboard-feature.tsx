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
    "4S12pZeZTa4zfZ1QjPxH45Uv9z5As3XiWjGd2MHJ1fJPYfWCWSLhQd8zT86duPPHBpU8g6ofhreUVHfBESGMXH4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sEPWsmcQyYdKCLkhZY1159iLKhapzCiSyUktFfg79Frta6pTD9aKLTWpjiBnjnkKtMxhpiTTgUfJC1Qf1GPPi6o",
  "key1": "43gNrsQo9ZMZrhi21nRZZQkCCpvmezR4AvSgSkQ85AM9q92uhYKy9iDoz7qEUL3NJgtmBxLHAoBprKJo7MmFrfgF",
  "key2": "5Mksr9KW8TCV4vrC5RzLsL7wbsShQybD2cTBF5b5zi7ywqafw3p5Ea9Eq9na76MYXqjL58BRWykaxZgXCPLTX2jD",
  "key3": "jzxy992CogttkUUG5cxGZiGJgcXuBpTqF4pPMpoQKR3qf7TNG3RaVXPG6b5DdVD4tRYZjwWCpCCUnnoKUyEZBC4",
  "key4": "4iUWNrU12grt9B2dixgFJeQnqMdHFekYCqUw4eXdzdfrVnr8kzhP6EbhPvXQyKBksAm8N2vwLGaSi4hh9Qcdo2N4",
  "key5": "47Cwxv6S8eT4yL5VTQVHoA7hC2y8Yb6c7Aq1agBWH42BDn2w8M1rhaX1ov1DzCVLzCpYVeWqQxugELRznUt6UKpx",
  "key6": "5LyBmVjxja6YETX3fKiaqFMBppNb29jKqxjwLfbV35LaXzynSgzdp9BK2siuk7xJ7aTWAxypp9Xp4Ct7poYBYFPK",
  "key7": "4xShjaWvX67mPHChhVPEVERofpu7fjstY47jGeLCGvqCeuopteCi1LaNy2RYG2d4EnCGbsBn3dqJ3m6eSkXi1E7v",
  "key8": "UVujpo6K6M2KHwBrAtcp1VUwqTh49eRmBmaXAKVDyPFedmbChP2H1u1sjPtTXB9QSf3C1JRXg48rnxgwvZTarqW",
  "key9": "4uhqXEBuU1JmcSyPjdJw3F9RbN5DgxswuzzjuT1WdAUfHnKUAM8AwkQWKiMcBtRyN8PLrWG8uW2zYGuC7f7rNyxZ",
  "key10": "5f4iXT4kvaEaPTLtGTCwRk8iCbkbwkaamUjUViN2tuoPPM6L8AUnFkdKQZJnrkv2QKTXj94C9CGpLpaHBEAqECng",
  "key11": "2K3ivZU4zXdRYtQJ3DURsqckiSvKxa9f2Eb1Tw2yLvzg4MAWt7m3Qfh8SLRusGCaQKbbLEfExcjSbk3YUM5yQCWz",
  "key12": "4XKJ9CpTW5EhKrBi7GYHivk4mLZhxpKJZA1wkhGLvMXpuyiEkqdj2Ykd7zXohac1arCm8SfG49Y5ChZLpyHhXi1G",
  "key13": "XbXeLSCR9vod4V4YwyQDb9r42dB74iTPekbfXYeLu6ptQixz9PVWPk4mBBn7CHUBqMtJRyRBVGWxKcGKD8bgLST",
  "key14": "5uwV38GwH8iAr8y62DZ3vymTxZZDH9Yz9a4QmAJMKLQMTWoPZ3z5a2RFQuEaGgURZKVRbWTQM914xrdYA841Roeo",
  "key15": "BGAZG7TMWFDBMQRCTqxCuceSfAefxV8TxvoidWvvdRwnhDRyXFCiDZPW6bfwZb2D2n4McazchAjB97yQT2wXNAz",
  "key16": "4GoL2vH96rtdr5BxjBXu8PYgDdpNVD3znCRiBYLoUXzD4enAZbtmrB95PAuU7oFB8dcvQpxNiZSqdyQLjCeqB31G",
  "key17": "5M2XJXrdLUbcqf7kihZ3X5BKvP1oHZr72JAUiFCKcKatKRDE3QeZ27Zs1LaQ27GG3Gq49Auu6REX5rBXYehpXs1n",
  "key18": "4TmM95s9XRFs5JNiWx3y8ykWM1JvzBaLscqCPaPnB3nRB5aZrUY6YpaP5kMmfkit5xhJMUzSzyQL4YJcFt49dDfy",
  "key19": "5zaXMpV96ZSwDT96BNpfjDoxHVk2urr1cDhQ2SU4V6usQd81Y5YicuLRrKPSGnXeCPozgGPP2z4r8xka5Nc3d5D9",
  "key20": "42qUXwvQmHLP6Z6RGmkpdQ86aXpEmnAoJ5rqKVKGbCknnrYU3StrJdZzebqY1ryLyJ4N6oV8ynfrASWv6Ccy19zZ",
  "key21": "sG3sxjFCXgeRXZ5dgZTupxqYSGMkEJ7xx4seY2mEh74oDqR2fNmPSB7t8Hz6EuL5K3LDoYHNKvVj9cRyopYPde4",
  "key22": "5tQSVrG1KfPKoP85AyYf4KjmtzQWM1hJBkoVTFhPdLPtDZGApcv4N2vjbk4T2f3m4aEE6zfPe7DxoaHy2vPMcoMS",
  "key23": "5T4tf3uckiahs53pQNwV3kb9bSijgP8WdyhXRUif8jeJARfvY8L6KR21xptNB3irJmFoSFQ6jnVLRFXrJski7Cme",
  "key24": "29wz3J1xLVtEZv4D1AP2iEYDJj1nGiBEg8Xbd65w4jVVLDD6riLERgqVF4MyhqBTaU6e89aVc1UKxt56zMCHM12T",
  "key25": "3176iL9y6qznYoSP49xQb6nWpjRHK2tM3SWtrYQPCW7R3TVcru3ZXLnBjoX4ihHfTagrbnECWvCYw28aZsSWVWmF",
  "key26": "4FLqHXGc87XGxFHoc5iCpLwyNKi4B1P7S1iBmnACvuDgNzt4XYnb6AY3RrtZH3s8981Zzd6NqWuksrNUYLRnhLDD",
  "key27": "2DD1fG5rbDbfvwhQH5YKGH8SJf8s8eE1o2ZzWMz9HwnjTtH6yfqqmnzqe5eUBoNERLGgsSPf9t3oyAPR5u38zHG4",
  "key28": "33jZhdhtn1vcZDZCAfdbjwfF3EWWKpyEBJWsBLgGTMSFEL8DcpHLYj78urBoXRYD62CkHsfbx9d1P2dKCLQJfAW8"
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
