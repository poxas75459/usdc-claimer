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
    "36PiJrfEscArjHNnWciAb5twLBBSyZhPBejoRxEiGehMx4f2kP8ZzgueWtNafMc4nogDfK55ecGzvqWRv6pz5DDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uWusztCyh4qroEHCLPQ8uvF3cv3vSYvSY9xhaCrMpE6jJHq8p2czTzTKRJ5hN2WavV1Yjn8K2CLKgwyNFymXWAm",
  "key1": "38z8KXAzAXjUCePdDuNPVrmviYCdTuPpdAB3Ed1UEpSbAgxHiSZcn9jKajEkWRZxUrSQ9Rq3p2z7mVJ3ubv8EYKW",
  "key2": "2iKzXTLUCvLfSgLfpJDdqN2fumYgBqBdoDtBJHS16CJBodcr1gYgUeV5MGCyg7kLyTkcAftQ2sWguDGoXd4w9dD2",
  "key3": "5Ubfr3V1FPnGBhcCLKNqcz16hJuVJPPUMRcd4ZKroBBCBMM8TwcLXKYFACPgvgkSh8CnS2ejs3acfCcitsRH99Mi",
  "key4": "3z6BkqrkyzCztk5mbCoQDE1hMP1FbbzMCM92Lo2r4gSNqpNjkdMtq1xCd5YNdv5bdrvbCoutdtFagD9uC516HDYa",
  "key5": "273yYepN1JMVDGvV4WHmkWFUd6miHRv1QpPrzZUuQ1hWnpB75JjRWR92Syrb75QpZsvJPQqGJLXhH7NterMaFW9y",
  "key6": "4HqDYFtpM59N5MYhC67adc74P6TiPJVnQuEQXDzvrDxpez9Vgx8NoNMfPAJKh31NQxv1rY76LSgwodDzYePTXkUh",
  "key7": "5rUDqrZiYPTHnoV2go4Bc92ijPJLbXd5Tp5vQvcPZ4hBop1c76uXNKoDrht3a8H5NyQDtARv5B1GkqQUDDPRnLFh",
  "key8": "5iEvZSBTc3GB9otA2CC9HQ1oiFhMofTVgqLkdJAnUEsGDGVbBU9Hbi7dLXik9mRSKwSsfpEcFFaW7GgBkLJCHsd4",
  "key9": "2rGpdji8ZvaBQ24qFiyK3zqMyjbgFGVAtBTP89nzvPmzYKMqkCWtf8GqjDPWRGzWWrKL3ZXdNFpCs7P91rNhQQrg",
  "key10": "4GwL5tfg7eXx4VVSSGXKrShU9ndLQ3k7gWsvXL7X5UnSyYUGLAtsef24AcaZCgySnJdfBK1xNWUHqoKguyALAh8Q",
  "key11": "VzMSjQ3Hxy83K6icvAMz5t3s2fwhd9nwURmw4V9eq4iHrh9EZCe8zrskEf4UQtLDM5n5ujeeGhjwSdiFZaBrJLs",
  "key12": "3EzTU3Aug5ZFt9XsgEYm26fs1cUsF9jVASiDcUu6XR5UBeskUZ3ZgTYjuZf14Bw2PkFuBQJo7XYBF2LFLiM9Ett1",
  "key13": "51dNfWM7MZteE7r3f4ywz4jEJHUDm6FnzDacawpbgmrEg8muJqZ3ZC2UFLjYTG611mYNxG25ny6a37cScnZb3E1a",
  "key14": "nzQJUhy4pstNAdmKJeoXfQTzM1h62CUnShZeayUnKEqLEjqATebqsPcLpW2tAzi6QXJLDD39fCt4GCRrDfoyW63",
  "key15": "4kEAQedpuYE6PWwJZAeKyTM1K5VFNqH5vjftdDTjAGryttG38WwAVzugf6T4AXTk7pnJbGoTwGaw7hJm9uYWuoJ7",
  "key16": "AS7FWN74EEAb4L1afKWXC247wsabwAWWkb6z44FUMpEMQL8o7ekLj86QDv68ZMuagiUZb3XHg5XXpibzaFbDixG",
  "key17": "2T3Jj3Rz7Dda41dsDmozDXRduhdRAbN5UrBxhxJRBmHte5rNRBMtBPjZ7fRKpaiBNNmxK5D3eSJQF91mK9MLDwUC",
  "key18": "4R61pWLSPwhwayJcE5BsXWHn9UehoAYBEf8NbCxknrS2Dhc9RLrggxFpQgy8iv8vefueNAfpWpKGiR4v9uQU4wx7",
  "key19": "5L6Rcmh33KVYgSNaQk6kLwnKrLAsbFSHZgjC679Xrjjszp9uHijfNUQc1ShXQdGG2FoVtDztwuZy3LXhQoYEkcqn",
  "key20": "5Qa61Vu3HdGZMgFe9Dm12dunUpUGcUxvUZFGrJXtWFUFg8iY3QxxWMpxAo4LVutADDgmKs6VwgfpiHpXyEztioSH",
  "key21": "25s2CKRZwZed1cbvXQoWMDEnQA3z5uhVfwf57aFQTMXsA9DNGW8ZDsQYHJ9NSFZhsWbVR476eNPZLjPQBFskmaH1",
  "key22": "5PeZW5WN8JTDG4hUVJKCckGuzuKPHudyw6a9VZuqf4TAAFZzpaRZZxErKH2LjV5fA3ytM1P9nfyvo9bCsYMuYrh9",
  "key23": "h89j7pRkYN1Yxzf2tLZdZuhFWGFJbGWtP126kqymUPHA3Z8TemK6Qz9REYdigkB2W3BUcZAsyFtes8zWwxxfVTc",
  "key24": "3Q5bJ8WFYZ6kfun8hFhHY2ux7rroSNdn9AnUezThh6hzLpztY22WJvfyv7Ey9veJp1rkfxH375r3QsTVvzS7nyF9",
  "key25": "5737ymH1DoD2u9x8E4hmR5NeCwNsax2ZzzRypdemymHSJPpRtyvKBt217XtThRBNMZXx34bBHaHBYjNrSfDM5PEK",
  "key26": "gG48q7gWpP9DriwGZY5W7TWsdGXCZCnnALSyfD1XEHN3h6jnjypB9fy5tZKU3vZuLN2jsELDxoMvA7qjBywtz2x",
  "key27": "4SmyXVhfiaSzWTGMcVq9f8WQUTHzNHigUan5vTst4zo7LvQ1TNbuPJZ5qsVomUmDX8v2QhWQQVnyhoh6vJV2CWA8",
  "key28": "3VNpzEpXT1sREpMp3eBFGve1H73SyLJSp7uendsCDf8KyRSDDxU6B42M8JtPwiSZktA8xAdeMhWX24qUHNz3NJRp",
  "key29": "3GA827i8EvhKMuBNrSWwj8JJCALJ5Xa23DXnJhUWHi9Ljci1khMATdJWpsEoP6y8TXyd6gKWnDDjqECE51dBzwFA",
  "key30": "5reVMTNyyuaWUE1UhkxdEpLF61MHQBkiBEzdz6eFAKfWMyr6XqgKv5ySNH56A3wATno69rSXSX7hir5yhYmPmJHk",
  "key31": "CkUJezaPs21LdAsXqzEXcj3N5ePVR6BRNLDF6a5zGT99AqDDCxzjsvpDux3RkUWLxBACNabzZRvqMLdZwpimJSu",
  "key32": "2mfXTPiwhkmDm6EjPW4KkyGuNsy7g3ncNFQS4A7kCXDBrF2R1fnLA7VkPCx4ue34VeiPDHFhcFTwAY5tTU9GayYm",
  "key33": "57NjHqJPbLWFxZFW96Z6WZuRoG41V4o9WrJNxw1Q74AgBK55fuag5FJ7ShVzzenVf7bJpB1y8GxVUTsHfkHo7Lw7",
  "key34": "3iPYPTr8yr4VboZHzRbbTsy914aBs7j1EriEkTRv8snpPz5eu9JEnzc2Fg74VcHYe9SgCNw39ctJPChExJjNkaqn",
  "key35": "2EkRjc8EVTFnhNiPtMZhjtg4ZLL285Eyp9Re8iBXq9Dxj8jyc7eijiJNe9hvQbNB4dyQ4Uurv8idpiw3R1E5U5x8",
  "key36": "3nHk9YHKwZBA52MnKHj8RPazsKUDwHoW6df3ASGZUmc7CJSuK6VGHkYMgrnw81atstVxpnxXFLyQjYm5KsJEpDhR",
  "key37": "56aD9dKJCEfz1EjgGGRfo1TYahrCfwddB6xnPDj7zcX5xVjR4svx75nHmtmnPGDvooSh6B47RNP8djfahe3vjdp2",
  "key38": "2ttBd73y3cNn5PGKkAuwbX1Piqmzt5wNG6k1N4ZQ8GC4yiB3mcWB79D4qwVkFHoq4b1tSX1ZRRC7vBUzK9cnrsk8"
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
