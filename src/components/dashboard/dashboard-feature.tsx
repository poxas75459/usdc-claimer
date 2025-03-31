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
    "2Z1zmYJNjwo7dYCgyLAFzuDyJK3DXn2HNMKfSBy1MGirsuUA8MAioQ9F3jJzbkSrfzJhuhHpmQsuXx696SuFxRgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TW6MtZmT4yg1b1pm7uCqcHwRMpsz9F1BwUPMyjFyKyG7vESm5JjefuEi2GYvLwLwWiSw2kHL9JKUoey6fogVYry",
  "key1": "JZtJ3Cyk4bz9RXWSRTz9VAzCidByPkB7CqVjkhdWYncD9qE7Y1t9mPVcGGPkf2tAwDgCXrgxJNauDcqhucNSA63",
  "key2": "5iZ8rckJxAUmjXmH1pNj1hq5DhA3rApCBFhs3BpdfAcPmiqC6peukoPxkCriAe5yz8HpS6R5uehit7FxuJkg6MiM",
  "key3": "419jV8VYxMN9Xepv2db4fBXEzqQtEwdjH1S8CHTDFzqNatDUfhKCvvHatsKU3p88Bjgg9bsY7acnfnNyRiqZxYzW",
  "key4": "4HpK7kHDbL9rUa4eAkHbiTMxH7kD1jHgkZr512U4xVequSPzyuTDbE8yq2qGAXLup9FdBbtBAFAuqphXLQUYTx6m",
  "key5": "28M1VMcY1h19p7CaDYQaJnYwUBvx13eHUAnhz2vGZ1w4HbFz9gxVJDxhaBNbVEF4VSuWmtiicpoXYKTLHvKewibT",
  "key6": "21RybbQKHYTP5zgAYRBBfKpMwV2XpG9Qkneew4zweAtfziMam9cPoJgyhFL5o3VkcACxrTG7vyjEfYkUWoRP6m3s",
  "key7": "3yyRZU8FZsh4zksVr5g1ScBfj4ajYA4naXyeG3jJouNCJKWpZLEkJiN7UE3h1cfugBEyKUf6DV6xzefSpeDvxQ92",
  "key8": "4nkHntv3G5yWPnwQPq3varJfrvZNCaJSMEF65NUw3mVyict3yF7kzkpmgqsYNsym6znB3XghzyNXfHkLyYfExi3s",
  "key9": "4LSexYo3wz2kxEgZA6m5qFvijzefYZvUMA6eexPjrikGt47xmjgTGnhXh6E4Uu2ZYYKBNxFC85WJy5Hs8t7zBDRc",
  "key10": "5eectptApn24Qz11GV31jVSV1KyYFjmH1JPfW41keyjrqMbL1W9cREfoA1ssEGwhrz8Q7cmh9zAwiQ6qhWdU2SLB",
  "key11": "KfM9qKcUBKUP3XyXmB7vAYQypqkeC4FGNX1uYYfYPScaCk5nwTi5KbYWSW8NdszLoLDyAr5jXFhcD3dFma3feYm",
  "key12": "37iuhMz9XBVUo2PqnUWi6N5NfbAHPiV9CffitUMnuoXwxcuM56xn9XEYw2DKj6fWs8pYJcYF2bdpkTk15fBWfh6Y",
  "key13": "xdLooBzHFfxzxcAZWqq9cgVyAyrELHYW8kui1cg6YCEszKe6AbKbE3BH2Yht2dFuVFxhBcgphw1k2DYSGQWn2qC",
  "key14": "4Su7Afz2Tmwrq6T1bQy6CC1ueNFynqTTxK196bcFmRRvnbMcjB4f9K1LGRKRhmvps8yNbszuuUSKkgDVsuDLrpPJ",
  "key15": "4uZAfkBs9jVMSxYNJjZw6nC4k2eyxewTPaHCfyGocs3s3CHAzGpqNBVeECTyPwvHQtyai1jopxKuuoqorLfXqgL2",
  "key16": "3JtXxTjbi9LmzRsD3bxDubU2CvV23vmyD1XyeoPGUtAvN7FqHHYpx3NZ43dpgFK6HSU3MwhP5avfRQPFndsuSrzc",
  "key17": "5wSQXCogFGRGjnwo94NmdtHi9ayzndwAkWU7jfSyZv5cqwk59LLNasS81i7FNwDhjuX3ZprYAsfKW5GV85JtVYBT",
  "key18": "54rKR9ocDVbN2cavq7Yj5Sj7DKNTorH7MsqKjvyVZsNaKRW1eoS6fwc3brJz3eYgtEwx46nLFXJUhNwtAM2ruhvK",
  "key19": "2cWCsR7pyfTcduxMU9ij9pu6i3pwwUki7aCEB8SJDDEa9aFxHTNv5Q2dpukNwDstVef2Rqr9RCioCA2XfE5L3Kf6",
  "key20": "pbwwyJMpBWWgaWytifb6KnCMHgiZQHZuzH59f2YY19f2DJnU4FA2JSgHWXsbSUZhSaMAgpWoxzzi6jMATwe6Scz",
  "key21": "3oZ3pbE6Pj7iE1L5gzNCL4WsD8AXpPKHre4rxQ1Gnj3KuVKxQfJ4EyNDZVr49ACpJigZyW1BvHFGBsj6GJzDFciX",
  "key22": "4BVk6ztrPVNkv6o9dSnCvtHqFCUxKGa6i1wvRodyX31iHQpnUyzocHWd7RryyriNsMjhG3tUaKvwXmksaxGVRtsc",
  "key23": "5TCKbW7n57TR2jWFCjEhTEWTMHyEjjosxDjULEJjvWR2j2sGDbVwK8tUbR8dSx5iB3UPwKoi3rd31tzBXTuchAMc",
  "key24": "5gxuTq9u8G3w8N8xjD48gTRmReymowPQGyTaXvxnVus8V33jF6rercrHY1CZMFTPLWtDAg85UjcbxCXYBNJnTHwP",
  "key25": "3F1fEuK5PjzuZ4bLmsc4WEAfKVQ5G7QyYhL9c6BZr9GFRps4S7JkNc216Cfr3TqARzGXtZ13Zth4PUwJ4TfxiWvd",
  "key26": "4FmpssaqNRn7K5B3QrcHRYUsKq9kDD9oSZSkygYXYQt7ggvRKXKaP7hKxSEpqM2NFSkxchUvKQnKUHFoCSv3MVmv",
  "key27": "2yUHcrPHU1MovUc8gJyj9WPBtMy2rc9gW4rbMAZyML4yCrenNxwxQykrFm2yP3jkxx1Y6GSviEYb9AXhDjdkz5CU",
  "key28": "5AsKvq9quaJbExtx2ZwNzQQYiaSN5bRNZdDH6HyajF4AJ9rhDHNiyG8WTT7ktopky9u7YXuMjKGNZhCRfhbXnhoC",
  "key29": "WDAg33HibRyDZhMNdZkRRGMPsjNXutguLjkdVyyKifPR6WoQwT28CT65dfKCyVq2pPCLCuwmmHdkMtq16nixPnM",
  "key30": "4CE4oUaRcnQzfgCAaYZWFudCYV65WvzswYs7gjnxi4mCXp1YeU9taGmvo98J1i2uvNsy2vLxf2ymFoCkftkJeHHy",
  "key31": "gr1BdJD5bMGVAGDCfZ6GDdMsXbqLbdwytC1FwMQdc9HAhhwbsp6cdRP7wxYkKZZxxWCsDMqz6cUsmTqyFXqE8CC",
  "key32": "4RZ2X5ANF6EWRCrk6yR9ER2Tez92GjuMYy56KJa3vMBG9YwVJU8zWSbwRq3dfmccksvERaJ9BQzYZyAJLVHrDGNj",
  "key33": "5RDg3AtjmCgHqFd5stGiyCaizQH9XdEi2KZW7xG3Ucz2HpVYiDmGVp2ZWoy7z83jgDdUPc1DNEFUcrbSX5GPdazB",
  "key34": "3PCfZAy7JeWCJJX5BViPUYsnHZyGCzb45vQxsepwjL5iEEa3P1Mqwi3gibWJxuPq7JzJht6gHrAinRee4DuUQBbW",
  "key35": "4udUicmSFfyrnf8QoVdp5ungjHUkEosax27JAf8ALKUUVYXpRhWVGQwEuSJZD8TiZyVsXEFBPnUaKqUQ8cFUbysW",
  "key36": "2xV1LGPwUAEmjfbtBViuVbSYiwmioEnvfRi6PSXnWW6P73RR7zdF78KtoyxmsoCTP27pYj9JqJoCXPbz9dP3JKRV",
  "key37": "65YhjzDYRMhndfDxTerYP2itRYiEG2inqsBHFB27tAf9hYiEAQBm42wMNARj1x4RWzmAuDjeZxJ56EFTrLW9i3db",
  "key38": "5ZRxiFgfRSpGe4vE8yrMJdLJCW6BQWknPtd4doKAtPSuqnWq8swaF8FfbG2zcT4madm5xEMBJjQsqY6RUpx8YXQj",
  "key39": "5XMojApUcTQCNXhRqBi4qYT9hx6z3KXXdvGxrBM9X7xHTRHgkFL8mCCjAxfikmLjozQyjudXU4E7vg5SDQZcGL8Z",
  "key40": "4L9gismuRhQVnvm794fJeSCUt6HdecY8meyAGeMhurVjiZ4Th58hjjePmJ2cdmwfM9iWWaYNH6cbm85ziYDhHRCx",
  "key41": "2whf6LnxU1hSCiTKRowickaWLc1xuW1JsK31uXR1YSDSzkswCn9PzaTFm2RNJTYkYg41ypFYRDaBwdNhzYuH8wwr",
  "key42": "5HZFAV29QXUH5F4mzDDXNaCGQwW7joL9T5LidLxgPNMD25wiQ9HMp7jTUZAXU6C4AUoDEeny7p5P2fvcVXJY4Jya",
  "key43": "4DNhQRhnfAMi3RzHHstS7E28YGnPA2nvuoFCeyj5mhgtLDGQjH1r9rBpuyKJdAfAe6bBGhoHwFhJiYwDWafdyKwu",
  "key44": "5LJYQ6nCPMtx9UWLbNoZ1dpRcKVdT8KBKWzjJDJiexnr2WMJAhpqPjNhwVBpEW4hzaga4VEW8wy211z9V182trJN"
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
