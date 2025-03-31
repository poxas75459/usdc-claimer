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
    "3uz7HSKbgxqA4PmuqRbajbBCMdE8smV41YvGW9amwRgaEtAFmaei2D2H3zRYKctwEkEbJ9Nvg33vn7iYmioPmS2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VygxapbB2PVGhWxGu1yu9Ar4oHiHDjyXa16GVcnqTRcMURE4ivBnVmFfZgbv3x5gS7sHkJdqnKv5Wsqehkm3XuM",
  "key1": "618Pz2JXBhiiDH3x2eSChQDneHHCLyr5V9JrjV2f46gAqw3djo69XMVEXZb1tU5RwvqkZcmsgpnb7ym55wppGffW",
  "key2": "eXDbmLtWB2N99uTQ2WVxz24jBfGpru5bGXKTUPxRBaGD6PEzErqu7qXCHbGS9hkwv2BQZg2empQ3F1EhCgTffHT",
  "key3": "AoD7uxvkjDCiFy24CtqWLLb2VwzBbn5Y1Zx9SEXRMkGsnT1xMhwa5EN3pKrJ1nvB4cM7sJZUeZkKzV4kWexfYM9",
  "key4": "3jzPd4dFYNaXBnXuoZkxBNhAhYnyQK8ntD6fA4o5T5FRt1hN7Bqiucu2AXorauUJZm3yTQH48yJ9TBuQyTrv8D9x",
  "key5": "5Er7zKv1NcVaHNCWwb3nHzS2L2iTqyi6DHmg3cDcn7H8JcTrVQF7B5sBERECtpGF1k3xtSzTJ5jsQ8EfRubm69v2",
  "key6": "f2EU1uQGoCSgvuzB7u1EPCRFroqCxAQDGiqAZd1U4qJpuYNYE6PGVWSxA3ag1zEzGVhQPnDqNu74UtSupdFQBYv",
  "key7": "3thAs364SABQihBRdmqSLRxxZsiNBuwQorgpKdAD5MBCGEdRZX4193B4yFic1KXJVxQSet72g5sCdtWZoR6aa9SC",
  "key8": "LHacsGHXU3Prr6rJUQi4VafqQojbzWMQ1zF88DRKPkvGLxGPHjGze1XV8mHfjtFH6dbFn2Ta8rHXBY6LsKeEqfN",
  "key9": "2jEgfLq7fnrahN45xkir59JGBc9E826JvafHmpyS3Xt7qxhrXeypukEWMy3FCsc6ZF4pBd6fvrLdxPMTUScctoPL",
  "key10": "2zKhhRYXf9ci2iNvrUWME24gyvS58nQSRez9GoGDFC3vBXDippZ5uxaREn33JCw4ZcFAEpz5WLddwNoxYg4iRTtF",
  "key11": "5CcK7wnszutH3ayK6dXtF87K8u32JrqCD1CE6ncucfvbaarEywvAr6xcCJAvcwyBGTQihfeDB9ZzaNaD8UpfJkbs",
  "key12": "VJipZmkicdRUNFt9yqgKuNMNeuniqpP3Yg8TjsfemwqVJfRL7ePD91PHnqhLAWxSx8zVNBGTkNsW6TaXxTTPkeJ",
  "key13": "5ha76ZHQr9TKPwsDFQtGpGBJk8C5m6wNpCNGQmjYwkKuuy4pMaDRrzThfzkeqQGEhUYh5Ty5WzNyV5cseDmhYUaN",
  "key14": "3T2LTTVVoPpMoHS6piwARkyeeiBEvvHZGA5sk6GVuuvRx9rsHUgg5ncr8G2RjR5nZb4nvPumsi2PyoB9UqUeRhWH",
  "key15": "2HodVuncwheLZXUYNXXHMJSzzWapFArJTNUnkJH4DuKxsZfFSBDYXKd67WLF1kicihvJyKpT7HgWtZ5tEMXR29T9",
  "key16": "3nBhPLHEPh8thLGnEYYeXJQrCdvQRPvS4pjthZ3rHH92ZNQb7NARFywCMiDjLGy1EyUvvhYYqAZi5UcoHwamQA3P",
  "key17": "25rDk3n6Cs1QdnodEkowti9mS3PDJQsgTqgsc3WKixEqMZ9rJ3foQwB9c5JqLSWqh7x3oaU9kpLsWXvjktpsEWVj",
  "key18": "5jksBPbKdFDMRZxPNxrjsgPdEseBeQfZWSMpJYpnTBJwGw2eNJvwJVugxRqi1tYzCwf5n9Rxceub3Wr8BaNBSizy",
  "key19": "23H5xp7F5oaCm21H3Gvq46ooByXaf6yAQv1o7f9YsBWdm5r2aFaYF3Z9rNU8nCQENPbXvuNjWuosGUyYy1Cz9EGg",
  "key20": "3jhGovw4pWr29cM7PavjQiCurP14VUE8gc4YmVdmPSfyi2i3M6h3fG4MuaRcV1ywg6yGbs4e8mdittFmZLSSGALd",
  "key21": "57NrbRMchM11ickF46r16xxWZCfK9KBj2ay8DrJsS33psYRnXmcQm7aQYc1Jjojqdw9NwjWR7q3UCfSCXKr9rJ5g",
  "key22": "4LdGpRgSgGiQXt1BySJwBTWhvjnnc4DZ7WD1jfnhKSNNJXXsZhtt5SKUYNwT6YdAcg3HofkVzLL1HKX8hwan6YKi",
  "key23": "5B9kGUyUjAnU1fsp49euGahEMMq8WPhkfuN6rUu1rChuMchBTrrWPmLvsDYfWzKAy4mBG5AbQ3yAM2WsAEzBHQuH",
  "key24": "4dW6Sv2GkWCGWqAXP6kfcEaREhr2oQsiqjoUHZihrcXikAxuqQs85Zfk7ki84FhEh2PWHKpoDXmP8JqUJUrwVkax",
  "key25": "3HUrTXmBktt3cGTTNiTnEP1xwA1vvTJnqJewKWxPUjHD86RoF3CrDAHAjNLigmQYDnx8hUwbfNv1RJih76nbY8PK",
  "key26": "4XEjKc4LfHawdLYBnf26ZkXPKyCkv14qMm1E1q69A1DsuskQJgVi8mBUpv4v9v5tGghuWC4z8s6AZQGdz5ioLwcZ",
  "key27": "4hdQmMvm9p7hpTXtJCpQGnkjCXLr8wjTzbP4NUUL332QnDoi7JEhq9pVPJzNrU2xRxLUrXGo4xRNcVXQ34Q8Gnhr",
  "key28": "mNN5zqA6m9ZkJtygpmGbDo5MKzekTpgUHsDi4PEVoZ5C3sKjSrUNr1GD3r3p13DnXWBA3mXpvYxFksaR7GchK6L",
  "key29": "3uQKVoZGPG8fAM8xtYpUTmkv6HpyHWxRpEMb8AV9PPfrSgLc65WCcN42emT1HG1EWCEGGU3e478hN5fEo8qmU14N",
  "key30": "3RP7YgJaSfBDwuU123yZkEpJR6j7BhXagcXo2Bk38tU1F4MMsQt2PL6ptMaQchuB8aNtCofqeYJkbMoKrJ8u3Bxj",
  "key31": "4ibUmHEjkZJVcpGsU171o5ivhe5DiZEnrvP2EqRtTAEtdgwDYJW9Fbw7iDauF8oU3yqwuwmBQtcZHV6jY4Fad8de",
  "key32": "uKWznFKevAJXYDaj7W1a1iA7u2xtczyXd3gD1UWyMZAyy7p5MSrjE4ZPaQGicDGFB7zphGqLTkKk9HyKdb3r2pc",
  "key33": "53QxvgMb91eixjSfvmvNbwjVkeqAEHvZ7HvpaqCrSPorLCFSoAfAUS7c4dDWtVH8jUCSGjXRA3ecnrrkMpgpCs1f",
  "key34": "HdqhQnHDZfPfkTkkgcm5PBdjU9UUZ61hLrzhugf6FcVrSFXwF195usxXxtVzNScV76HXj5FqgV93yNsC9snraBU",
  "key35": "3HNNqe4gcqZi5HVtuxzQ3xLLd7B7bgmcvFNh7piav4fpqKkZUmUoUiCTBPbcAjaFsjeRXHQc5EJKrvms7BcXN6vT",
  "key36": "SVLo6yas7AMosR44R2APxWFHBi3Gw5nDxZ1DiLbHiMvVscP5T6UDtCvTDzywX1biJNhNyiczapF1rZjqfduRBQc",
  "key37": "3J16tPpVCP4iFLPCfYxTXkqa3PepVf2Br5d1F9WkJsSFQbHmSe8M63TEq3HwZ7F9fy8dCWrfPaeSodu3Whv3LG8k",
  "key38": "4RYffEcAUtAte1c7sSdKFmjw4WA6XZAFK7pRnbuZW5k1WKJ1q7zYU5iR3YvoeajHKsT3Fsb5K8y8jGfLYZoggUSH"
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
