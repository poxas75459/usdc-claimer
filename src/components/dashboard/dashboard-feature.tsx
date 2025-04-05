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
    "5QiozgpA2whjZphcMaPkSAzk7kfb4MNkunFWTqkf1Z9GfgfBppSt6sdpWyJEnHNsGAQj9bkKcTJJA5yjLPH3di2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8YRBzETNrgJw9BpeZ9G8pvMDqEEJDbawoykRxJgxPnZqPnAbVp91gXgQLdahsV2L7txpGfQZLgqm6dBYjjYvnxw",
  "key1": "6Pu5xn5uQHwsuMBNHFJx86BCAA4zK2BHQqB9rxCFn1hWh14tYHtjoEAFRPHzcWqR8KiRN8LPSK2D2BuX5ciBtAi",
  "key2": "2PNnaW5SZoBu2thuV2DS1nrxBonhruKQ85Xzc1tCVGrLcfX5Nbv4EQcnWSb6i65vEGrun5gK1MHwufVzzH7f5E25",
  "key3": "35hW7VyK99TegHFNDjSVVeMydHZm4so94Ehi5GQHbLhxG16sgw6p7Vy7Znv6tG4gcmZ6dcqde5mfLAhKKbMuVqdZ",
  "key4": "5prgegJu91LNq1ssCBCtwmmcwAMpU1uAvm7bu3GCkLnvBJ3J9wD1yNxewkQj61ZYHhwFW9Ap8oofxy93gugy9YtQ",
  "key5": "3ES2r6A3bTmgAKAhCjG4uWoeH1TFMT4Z5xVgzCtAGM1aB5kKbDUWY6o7ZMr9uhLeghMfPpkzRcrkB8yyjfiixnGG",
  "key6": "97b1RJW9E5w5hgqsK6L7jeHzoaE2HM6987MVzGSqzGtEcP7kX9kBpiRH8Y79TQYi2p8thRGtL6WVn3Ua5xJqTaC",
  "key7": "4qCxMeAdBFjdMocUDcCDkKnhKcmXyw9BHXP5GdtPavfc2qj3JftCbvTDP8chAxFzB4t4mc7zSyt6oyn9GD9noHja",
  "key8": "5vVvayNVAdJbTg2FukEkVfbLHkNCMGLkQR9jBNscpEXzoVrDCUBh82EpnA5GgkAkFF3gEeB7mwdLPeuvw9375gSS",
  "key9": "55enJkN1KcD8eKznHh8vuFigoQ5p3YeG3ZreS9rbRT7mkPSUbY5MquaVgW8RzsESmt7afRGHdmcrqnV94NEGuv5x",
  "key10": "39NZS2bFmp8M7Vh5YCt8b1d3wSoTEy6MWSGzKu3Uw9MDb2amL6gxSSWQRxoaTBajdfxxu9kCux2Fx4dAjD1x3ysj",
  "key11": "M4JRbLYhaVhZE3zsjyg7N9nmuVgamyvu4pWn1D5QjDhLuLNqw6r4zLaDiuNs1EUWn67EnC7iU2XyH7oYy8HdukW",
  "key12": "9d9gkvkKYeijyhtR1YE2ifcTN6u91vd2toKhi7AeLQtMwR3GUHpLSWRgJe8DKYsig1eW1Ek9CFU8mvkqYSrD9y5",
  "key13": "4wEBEWUTwLAHaCNLeQTG2XHxdqKfi4cAPoFDBNLPNd6tSm8JxqGcjya4WgHEsCtvVM546nMC4U1ZSFPpyMNKsmEe",
  "key14": "3zjyjLSovwsRAvWW3EcoAE9WeywbChjer25YESAFAKZSnFPGWciHx9wNwjEmyiz9BHsBcGtMcqf3wMHpE1HaMrBZ",
  "key15": "54g3igQRp2Mq43CtG5DDk7zx2nvJjmNyPbshakQYkxUEy3ZTGor3Re7c9LyWAyMe56NmJ6vwCXnGVyUMLVjgMSrr",
  "key16": "4Movtd4Kx2YhzfeWfZUXcN5rpHS1vuXMmSfyiVDiAbnxu34BKTBHwvA2NekgPh7wBg1xaGxckboaAFMio6o6vEKN",
  "key17": "sCFAKCUbzaHwWLZjqZHohtUvr3yMcVBBfUb9hiSTiwFSxx4bDCyresZhDJnrDhj2HbFq5vwGeopD5uft4PDFZ4t",
  "key18": "63p83uCr7yP1P77dHL6KZyHy8cyM8J3pVA9maA7QBH5oB2HuRCmFQ6pSrpbZn89TDuji9UAdb7tKnHgnEkDpcAmg",
  "key19": "FzsKtwy2PeXC8Ca1LCfqnWk8i9wg2wQkYtHfEf5oYDuSumcsfU7JxyZAShQmDJfSr6SSQQoBWwp2m5erpDup8WV",
  "key20": "2ctqAmeEBmT9bKtozMkMHJBq6DznpXhFJXiyR2KKzbd3Sqxi5FLCBm8izrdyXYKTh2VhcWJokLr9dB8yjyd78R5F",
  "key21": "5tGU8KVVWdMVWYx1BwwL9ZHWoCfeud6Rs35Gsvax3cmm9qpo5C8jYtyNEcj1YauvMc4pFP9pa5nzLm9cM3BW6NFr",
  "key22": "U89nWT7MdHRkZ8tHrmFZvuK6RyRSVHnpayxoi3uhTVUG4xtuZ2acKBcyKKjDec3TMxzdy4bzaqZXgEMvkKHUjFU",
  "key23": "3AdUpM89HE6da6zsQWwEkNGXfPpyqq6JNU8uttTAJr8aBfk4nH7U8sF5QVQbnWKofAkENXmpgLkv6TCLiBtA5cpN",
  "key24": "4qQ8aLjuKhxxUjRpiGqEXrHPTWoUXuiCEuL8vgTdagtUK4W5kgaxnpZeVLNASba6vHuUBojYJSZdkd6iiwqoxBgy",
  "key25": "3CEK95DkQKQdMkQA66PhQSeSYqQRMXeCgozinDfKaq2Ej3jRhCs7ZZ2qNftSJGbSBZpWwadw65NvHjo7PphqYXtd",
  "key26": "4eXdbZCM92tchUNndyipVumsQpo3xhRz5JhsmgCS6ZawFpWczcmZFDJZgLw2Q3dk73oKP73Hfneo7nRLaP8712B",
  "key27": "5W9t6DXvGjomGaAmoWUzZdmrR8VoRoUn1NsqBei8A1UiEZZDwNaa2ibPQ7rPJgaZLuDLqosoSuk7uqudcb7XGBkm",
  "key28": "3Ei6f9CT6bL5GPwQQ4B5ZPt2bgvMh3T1D2oN5u9sn8MqiBWSuLEPGxwPUcQmVrHY2Si6skkj8VkkgDEVcpAZ7SPJ",
  "key29": "2kF2CqtFUsGHfzA6tgfBYU1yXtPyVx31gFHu7x5vtKcsPo8v6Xzeo3BUSrpnFJQfveYePzDM64mmyuV2vSav7em3",
  "key30": "7FDJe6VBLBLPHYdLjcuToK3ihAkb69VfPdBecAXES4rS11ZhGBrQwPuFJSfRQ8QN4fH3mRSnr4QLGjhjhu4SkmE",
  "key31": "2pAUgRspHpdCdCs49uS9jtUXNGshpQHLuvjvczSzcTyGBPQeFcwL8WUvan2octN5YNaZUVyfpqxWEHdDWuW337YA",
  "key32": "5xywvHLYX5FjiTmFKQDET4riatTeZSAGrrShLxz1EXi2J24Xg2yXonjBSRXGHordwMLKRWsbUXkZePLGky8VxBMd",
  "key33": "5C3xidE1iAY3apYEznNBBvWHgyrcNmnyqjfsGLWNo37TnxtzWWvomoTbiuq8Pyo8KhTKDvUrbJPYEjYayYHxiSUC",
  "key34": "2PqR37p6mULu7dx3YAVv1rr3CiNL4v9ZW13eBAoWScXQ18EMSWFw3J2d3u2LDXXUQ8geFRor2tjr3qeUpPkC91YX",
  "key35": "kMsSgnXAMTGWeRu6BUdW2BjvHddfTh8RnP7bnVpD81jW9UAw2tg69v7uDtHn3DbxvgPVX9XLJ1yhopi1qCYcbiw"
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
