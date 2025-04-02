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
    "5NVrVwwpXA7UNJLVM5h1wx3aaUouALb4nZ4pRg5GkbiRRqwLBgn19QpT2gFG3e3vXPMZeE12Bghsv7SpVGnXXac3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ty32684ZCVhiiwecbuX82huXh1TYUSxdvJJgGy1Ru523DSTycBW8mhk2WCkAHZutNQUGVzuxvSZDip5JQYVMMQU",
  "key1": "5Lf38krdh5KCUvCrsxY7ZRs2mJVfhBipSSBr78UXGdiUfarLBQqJanVSTeRMWvCxDdGgDBPFEdVptGwxr5kd6rTS",
  "key2": "2B4eozDvSXUSzh8hGDUs6RaumgxifrE73j72p28W4mGSPPFtcnyy4cXRjGX9MnLnRWZVY2pCU9Chhq29pPCrEFLF",
  "key3": "4Th9kjCqkbeME9DwhQoQNfxnKq8SDH1exy2R4EsCxtGQZagsPNPavUTv4CPQrEftjBXBhQdWustvvXBzzhM8ocjz",
  "key4": "5opqU2xPqXMEJ9zFb8L8VfhqRxqPhyaP3i8fSpQRBpMz2MdJ2waeRSbhCMeW5V5DoU2PzK616m5qbohkDGzgxmVT",
  "key5": "2quifRueHFw3XuejtVgi1D6f34SF1h61yy5UsvKdwyJfARHaKc7FZZvkhHuVmDQeZby8L7KQ591MfaKBjTK6jRE4",
  "key6": "4fiCwZDRfUNHS8F285QPVDejju9w7KxydmsPRT1BUq1X1yQuTJNSsC8Y59URD29NNSXZ1Gmsh48hHPJc4ZVfFypC",
  "key7": "5BwwZtjkAYddrn9thDm4jf4KSRsJWtSPaenjjMEeTFxatmav7CUBDvR5P1j1QY3TcsYSaW4LCfHgEt4fVQTjntNn",
  "key8": "2bssF6FoCtnXXeKeUVhTzQo9NPfXKF6EY6hu4ejWWVDEiccRPuBkzs3M4NK4AjeG451ztKLitiQbpyK9p449bfnP",
  "key9": "5ZVqeY7nbPTCgYZRuDR9mAY1rTkGy7sAUMZkGnCHhAnstyA7ukgpLsPkbK2rAjgb71H29fVqnrscyHWMmhXRr636",
  "key10": "4BqF6JLg2dPLGQHHCeeaFUainP3NwDTFcCE9MyGUJLU9w9CAr1CYncfn1nX3FSxRbAHpjDa8iDW73UE3dfQN4U2W",
  "key11": "2kF94FdGNQY2zkhVD6YjqaQaTcrYW8knLHUCMtGQoskB1HJ4onP6RfnnDQFCDbbXfSXeL5cU9RGnRnfzPxy3s3LS",
  "key12": "3b5VQF3EADFMSkySniWe66BxAzpqWFuN6dF5a67FEYgNkC7LyF2DxfAz8DQHyo9HA5jnnGYCVqpCPvuuZ2oXYcXa",
  "key13": "2v1yfNo9nbvSZyh5nhcvYP3Tb6GZXnC9uTm72cxNqQgimKupoQGqKgfw16zfLv19mnhRQXKDSTZVRsYXmaVZR8Zs",
  "key14": "5bsbjSQR99wVhKQUtaeWmJz5Uy8soW8XpDYkaEwDt7zDc5gFCg6cv19FiEZQKxDFwCSenbEyeh1AJ3dvDZkJvGya",
  "key15": "5KDUg86Qcq1kD7Y8CUNHYPy42GW9a4wsjuNSrMQbCK8MQMj1e7fTiqRR6hvpL6GChjvwA57hy4DLMJWDGm9KGB3T",
  "key16": "2kvpgvN9DUoUcsMD95vtUgiENw9YZCji8dyfrxmMdJyTZxbXEb3A9DCenRcAkZjLhbeqV6WPy5BKpxtsmyU5nHsg",
  "key17": "5CExQa9vUrvZHR66qKd7br3bUHp69Y848v67D3VsRvRdJGEpzfefAbEXXJcSXDwYHgTnYjpobobaVQmHcZx5A5g1",
  "key18": "23RFhuTykPagKQmFZhVSJR63hGVVtUs6isiBoqQQUHp1LKyDjpMvW5Vzy6tVy6boJsUjuk6AUxCMAiMz3BzWiNuY",
  "key19": "4hMibgh4FT1fmr6X7UnEmBbcZ5e5NfhiYYpLhnzEfrUMtoYuu7117esbWwft4T3C3Xmaxgu5n8TC7XtoYrviYRYM",
  "key20": "5NhzRcBALim9ct1UaMhkfcLSon8EQD6uZ2QkuAsDCWUKj5dYkCgeTrFBeunZSzxHYJqPAHChfk9Xmme8WVfUfSto",
  "key21": "4FbFX4ViVnDcEXDJEMp9wTXjDP4Tu3oagzxukmcMu2gMGxh6CYAsx64G6HqrbjLdijZ728vepACa3d2EKHZ6ch77",
  "key22": "4fK2cpSuz6NNBfsdri5jpqUaS5hyxovLS2ZcbUiPi68dxrgzdR8fXB5DHUCEvsGbxf3FxYLVTUvLxwYLMQadr22h",
  "key23": "44R1tGhdQBfaYoP4VYrgT94MZea6Xco5UvWy2AwSjaVXGZYKqdXYij1thPHKya33izLiEQATN22QQkqrYYrHYYHq",
  "key24": "3y97uEAmtQ4i55YLraTXAo2WgfAwkoosGCLBp4wQ54Eiw4d8qjmKKzSKRuGjo6ukivX6iWnq1ppWT8zram5Mx7q9",
  "key25": "3pb1FQUoZhNY2oncsaXZABko1Pm9LYFP4v6Hfnat9Yz3oYqwaY9ait4zTJumgTzjo3DxE2FrHQd1nWtpnuFj8Q7o",
  "key26": "5WtcdpaRkdLMXmDoHCPjSXYBQacojB8dKSKaTdEaiBWQ4RZWZ41NTrFLGZngdRDUmV6NWWWxcG3XrKWT9jbVB9jh",
  "key27": "5qhUX6zbbX3novNw7QbC8FNB7qCDGEsSBVaAHqgbqoB3QFz5b2M8s1mfxbLLgXdouVKyR4ThLfQCWP4DVgnyTLev",
  "key28": "2Xb8UKErjhMr7vxRhJAPEV2a4zF3CU4aKhA45aMg13trgQjVdTcbkCLRH2LuambvKpgP91WHrzCxrSVeHFXjTuKe",
  "key29": "3u4M7CTWMc9G7YMmECco14hF9evr3QG2wjgwFczkZifaNqZwQwbAT5sLJrMu65EZ7fLLzxSWANMrR8G9aS3FBNsc",
  "key30": "3i3K1N83NKYPBFbZhPFtJs36jUXTJScQDTgS5xWXvR97PpXwk4XJTibb73kxooLDBoqLz6iznqAvDNa5R9EcdkVv",
  "key31": "5zdWC96HZQED9SDhBUEVJnyDD1vHDiGmrzga5RwThfNCv5B9MShbbrDrpCSzeMm7G1zAiThWCKfB53GQzWkMaAP",
  "key32": "2uDm9a1pkruHo8rvhsiMKkM9SfKc3B93g7f2bRoYjZQziTV6tobNXyz6Xur8KjbA3jPcZ3cLvbUY9CBoC6bSiUYv",
  "key33": "5VHaXBqiPdkxjyWX3yZss8Qg5o8bQgLgVR4hDH9BcSBeZaa1EGDs9zjnKbU4BoXhU7TZu7otSBjGbDoqoC2q4ikb",
  "key34": "5JEfrAmdxHbcM5Bw6bfsF3oBPs2k3i4xsPkbFEtwmLdMLX17B2kMGouqBTQmw4Yvbt6VCu9Q2qEYCZLueg31WwU1",
  "key35": "UuvfAih3xLtkwhFjLAqJYjavzRrFEq2oYffVRnWR8ZjoWEvfw8d511hziqb2chVoRqsYj2gjsqqgehnKAu6Uw3E",
  "key36": "ivUcWjUjAeQSqFKX6EaJMpbEc2zV6rAPpgpU7gvXttrH87pWGcr7AcVnEe2qaDe1NGdZbX96Mp3N8KNCfQTUQM7",
  "key37": "1FVeWNA1UY83FpTMMre2VyQDaiUciyxNZN15JZredY7kdhD6HPf88LsFfLfFnM91UVnMwrLDESSyrzQ9s5pbWMP",
  "key38": "4wr5tAr6NUJp5NoLpSYs2bvdbSsQtcMVDfv9xHDikNLwEb386ErAxiTLpGSzM3Xaju7iZZJejnfzCGe61mUyetBx",
  "key39": "3zbJ3St5iXX1Bkm9Netu7XDzuRChPbUQxQRRc462NmngoQXPzzeLAKibUpCZJ1q4oK5KkN9SbYYkQGQeRaYXZFsx",
  "key40": "aiVmphmKbhp2aqTzvTGNgVyCFLMWEv3bP3Ms8RMNqvh4FyETeppSH59VRWSbZ8SYbfNv4h4UxuqAc8kRJnmhWqy",
  "key41": "2zwhjYA4ankcxEm3orSeza9dwu5EMJXKs3WmiumWpKVWDHtqci7P5RNt2bCQiNhDEKR1ijXYK8ziPDKpGiNpSDQB"
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
