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
    "4yPcNkE1GrHkUrJ7KL1UQ4XPYqL5CESq9bbBhc9jj3iWsHm2FgDpgSwuHtNSkK5xtC4enVt5KkusgKAjz7fYKx9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uFzRvZAz3kDwsmCgCt3UsbBXifZaVdnYoBYk2PtD2R4XRmXD3w3pxWFY6VyFqNGoTMJr3MtHRXeeCPB9HFeSTrP",
  "key1": "5RmyVnBWRAu3AoPps2hjBdUrMtYYun8z6Y4QL23jXxohdMGxyTTz2mhU5Ti7L7QrdjmmWqC55jcn36EatWKKf1Fb",
  "key2": "5kMPT5f9MotdfJVmMHuUN6TidtcZciRM7BuBKt5H2zgQXhdinAMbUhy2CmemerY1h2WooPjwfF8J5SoWj4HQJ6qu",
  "key3": "66PuyGAwZWifF1evApUrD27HSUv3mPDsPDWmnsX7MPGqJawdnPStHRffH5oXXQUpJ556qhEhjcCJet5WvoHuKPxr",
  "key4": "5iyXiZX3dpJAHpeqyg6xmyAKS2h5iPpwCTCM5Kb49WHRkhbbLW8Wm9SxMNGuGnN4ZwjbRCMDZN1nwKGFfiW1vi6c",
  "key5": "qcRjr5s9Wgj1mJQFRbbMFF2NUrJFKFzJuQ5b4DX4rBRZD78dEpmJxXHR1oUcnL9H3a6TB4buNF5iG5gHPBRsAh9",
  "key6": "3tdNmGj8ENd8sN8SDsyYbiLeciZ6DiHhmkB9CuroY6XJvcTQWZEVseTXpEdsJiC2KaRn9SQ78xn7SDgh3uWmSHHz",
  "key7": "4htZb7Tv7NSF3tkL8mShd2TWzYhXa3Z6aXMd9RSfAWRNwDrDAvnje4oAyHpvYhaoHEgxdxavRTP3iUT5AKoBMGfz",
  "key8": "3T29FaSbcBd4pcV1J6osQBDhLFsmD31EFU2X6N5wSaSNadCk8zLjhBTTGSX6AXtb84idPtvaxprfC7s9burtE6zW",
  "key9": "327XxGH4DhxkwhHTvQy9cQCJFCHZJDZXX9ioAwHxpF3mfU4MLFFhSSwugYWAqKogQmFyb45szTenSBF8AUr66MXU",
  "key10": "67Hz2hDMitwQR6KR3u3fQw3VtABnQwgEQWLss15jfMiV6Y3uoyKWeC6A8GfDvDFfcRu8qidEJ2fJdxM3i6ASKYHr",
  "key11": "4do5Na5cQgcrd2E7vUMwe1tWFkom6DP7HnJLjbpUc9dTSniTbRrfx7odokVPZcwnKy42tJ7rrZZkkakfjRbi2wWN",
  "key12": "5vN5y8Xc7XRUcyeL3kBp9CPZkzRmMqQQMWKHhkTQpVvoHHQpiKxohtqzASrGFrwie6EjHgxuD2NYW75rnWZZ54K4",
  "key13": "iLDGW392P5urdPGshUGx3WUb2FTcCiDQZ29tsgVeGtrHiTs4GhZeoR3tBWHmTPg8Gzivbu3wc8i6bJUBWEc8p1Q",
  "key14": "4dt2ZxSMdkkoXdB9d26NgVLo2v3e9bcrkX13cTahtGceAtyzDsDLGFaHz2NXeTbt22poDo1WuR71qDU5L4qvpBhX",
  "key15": "3nYKkVRq3QRR12UNTdePFfntt1B9yH4VktnVhqvx95ChncaRpBhBugdR1oHNAsfcQr5G16fLd1H96ujXK2eL2Ne9",
  "key16": "NEmjfnrFshTLoDKZcHu6KTbP6bVG11GBLEjheZhn7WCBpBsBRdERuEtgVbSK3aTRwpHDFa94QxiJUKwXroGnY5q",
  "key17": "4Bcru3jPa4jGLWzL9opJrf1aUoVQAQyHmVC1aB6fpdpFGhwV43x7ud974o3tMMKhQ59L4if9LPYBPT1Mpma2MDHA",
  "key18": "VKxAGfq3jtsr18jyAzD1NhbsSGVgHZE9DtPCjbMvLM8NtNhaJXMB12vmGRYz5ZK1Z26btkbCDMYAgBdKjE7bmvU",
  "key19": "yPMmFvrNt6EE3aTMP7tgR8srA6kHysS3i67jYBijdpyCXBrqjgxwTYsLk9apkGzi5iVR81zVt9haZDTkxL7s7Lx",
  "key20": "5QA2cF5dTcSs7r6rRAX4qr7MCdzitPvq2HMgMDYAugCT2YMe7n2MGFATwxjAHocKJopKicdsJg1FvEqm3yb2EBRx",
  "key21": "2g6NU3kcNiciDgb2xesmQmohESUi7eanauvP2ctLwrqotxF2f224kVsvy2N7sv3Cf5zUDy1R9NzyjLrAXhDueXBq",
  "key22": "3KbhR8hPmut6JAh2ZtYNXouU5uTAenCB3Kt9J6egWNd5KDdcoYZJGDXhYiqwCx5Tfgzphbiu5WdyXDKCJ5cz6xKN",
  "key23": "4YkDAsSzvpjcXjKagvZ9sNnwGtgzbHyUDyqvPYSnQy2XR9gnVrmkzAUqrXVyKe1KsJbH5VQvUMmfGcwuLjrxiktq",
  "key24": "21ghm1jNAiatbrAXX5pwr3t1Gi6s9CNesmRKxqBkiYaDZMxZvVQD2hWGwLVoPhoSLWA96gJYufWxuRuEGiwvFoiM",
  "key25": "2g383fMK4JE8fZJEN9BhLiErWFTweXNfahXvmcVPehq4pH4R3bqm3sHhqFsswh4BnzcMnxL4HPiXCALQERXcJRjF",
  "key26": "4X4M2JPNf8P1eKVjPxF3HEZLL6n9YhNz6KoPymzcqEjK1BEo4sPrtrA815MuHGkGHHkws7J7eCfv273HVg4heJWq",
  "key27": "5xazcByKeQgHP5bp9F6gKiZYaMfbTVWhVQFB7GR8Jvpvs95ocpEd4Jtshz5qqn7B8NJT4QJ9Eabs4oNrnqZ3nVi",
  "key28": "31v3jSfeQsvL4Gfn5EyvoKcUj52canaXqmWL6CdGREqSdoPtxoYXXSevxVhUwkSrFgr5J1qHsy89TibprjfgnhRP",
  "key29": "4iBNr3Eaid27P36eSfi1emd9fFubMjReoZhzit4NVDgYBfiVhBz6wpt5z2QT9Ugf3ZTF7LhSPyxGZ67XNK9T7A78",
  "key30": "2yDNQw6y7cqsu1qD4vd12pVaV6Df17iuaLY4Ljg4dNn7fjETVk3UHCt9Afxf6tALpnq6Si4XxNFg4r43TiLDisQt",
  "key31": "3xmua5xZWrqDCjKUAmD6WNkUMvfLqxbu5q52HUjt7h9kufuLmVkZM1nr7g7wj3yPGEoEHH7KsaDthKhp5isDytB6",
  "key32": "5k2nT3si1bzSgqFFK3EmT9YqnNjkcYwnQ82drZVccsnCErynhYqJWN2dYgVCsj8ng2jYrsqbTeNwqkUzYKMJb8at",
  "key33": "3FaHFtkppFQqi92ZCsZg9uXocoLj2DHf43hZQ8jBGzQLZJNhSx46agF9QWoAHLP7djxmUSRbpWQKKNtuHEuLXRvf",
  "key34": "2iB47SLDSW3o5CNCM9pwCAuoK8W63SYMZRN5Y6EMHxDVFaawE8fPGhTzMs8bNHpvhTpKUrxm3wBtMg5GTQmGTxPR",
  "key35": "5znCikQuZLUZT3vtNwhYoMt9Y5FQEecswyC68Ngh58SwPMF6qLS7PJrkRu5UZ45mJsFN8VaZnwBjTp8TEhqwmAoS",
  "key36": "4aMoV2Y21W59s1WvgjgbkDqRJU2CTeiLmWwqUygqHa6M3mbrpR71PwJeJNm4xeRnBDygfpxWPxbNiy19y8NonNhG",
  "key37": "5Fmrf3U6rEDmKXge5peCjwPf7oyyY6fSAhk9Jns7LqHVpAjasGbBCrR1zkQLFqS1jiu7ddLE4AteXVU7pTbk6zQX",
  "key38": "4KFmNKmv6mYEXWo8r3oPd3vtpjCkBFMLwriGykchjUfnDLx12bttiCjFGP8cgUiUuWEqYciaZPBNPaEwuXa31mFB",
  "key39": "5664cxsApr6Qou4Vtq68sXgbMk8xJoNZe1U1gx1xcm4U9KVw6eYt64gesjMJJsu67bsC6pfiY68sw3w61U5zbDWd",
  "key40": "33Ry3d841tjpbQeS8T4SWLjoK1UXHdGH314GAjNFn9AKhUZGSHkKY52WcibbBEbiBuLqqetZPcRbjCRyC5Kj9xYV",
  "key41": "3YkUgqJknWbLTgQ9ugyj9LRFT9aPkQwE2UtVbx2BTMkNvV1dsUdZS6UGqaTFeqH2FccKnW8pi5o8embFkosZVFxT",
  "key42": "2wQB9AkJcbyXEfyMx5AQj3zAPNyqVkEFg7g61UJ23gyFAoKvN5e5PL1UrJWJkE31xPxbkM1LGark7EXRx1tb3TMN",
  "key43": "7G3pnYnM7rfyQLrmGwJKj3dBY9TzBvHcM6R9otbG4h2ysNQhXveWbMA3j2BCKLuiQfoFtkWGn5eqTzZQZucvCVe",
  "key44": "2LsCyFAN1Wpi3QRtyky7rfMP1vqpkJZ7dAUsLPZCDb5gP6SZ32zdUR25Z8dXeuULpfferopSu8KdNbVVqD4SnjgL",
  "key45": "62iV8XsFeLTdm1JWt75QFnSsS7bW98U7DrcwbnKbqxyMgh54d7HW7bsAdDMJD2SgMWXeYaYE488yuUCqaoTGPsaf"
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
