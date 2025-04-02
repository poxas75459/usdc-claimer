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
    "3eFcaetpAn6cg3DV4Lpy5nuc9MBkQBn6Hbwn86LUHwfiKYS8tmwtzxq2DbYXxUxEfsHzoJ2DQiWcbx7s6rJA3ynL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62cB6exPhpH8bc9uzunpiC6yvG7k3cMgZtucz68JQxdcJmVtsa93dDe7sEya9J5LbxiEBaQgttfSyUmU3uBrajf3",
  "key1": "3PqGQG8GW5J7J93Hvf2dThBikm5Azg5R9eHf4bM5q3ao954Z5hN3jyQmYgkmcSNJ1p2VUecFz3zUMzLXUUnSfqdV",
  "key2": "3SkjQ8X1C38gRJ1gY8Y3bB8Z3foNQkd4aYKDLnbs3cwRY9w1PJmqxqurH1ujYFs3GZa1tqfcCRv7xTiHmKixyca3",
  "key3": "UAHMhPAat3NjZ4Hh1r8rU7aNUSoCWa8U9T4rAbT5ngyFrvWR6DFsJr4xNdZ7D6KRncfLf1HPMjZjgc73ksspty7",
  "key4": "5jSokUmcpxzy3PhuXMFQEBEiUY2dJkxU85sKSKv219kAY9tAyGN6fieuygMKHvWFNoFKV42pCfYbyy6nf2bbsJph",
  "key5": "5nAjb7nRvrNGpdvgV8wuaLqU1HJsfsJdVguM5NDvopazVMxACSks26nPjh4AP7GugtQ4AdvXQs23ZL7sAGxNaVmJ",
  "key6": "3qTKWz953xvc3CQqBLkpG2r1e2ARpEqUJ8TS3LDb3ZJBW3wbnSmbvbpaZ8TKDqVFnWRPBbUnFbC8GTjnyfdEqgy1",
  "key7": "5HrxrZzhWLN6noE15GPCinVJgihsi2XiP3zi9pD8KqvENpV5qyywDymsbwXg6vVHkv8ZH3qvFKapbzSJAwYiMf1q",
  "key8": "5vkt4ZcaaaQfVMXa7QMxMaEC3eSnvAtQhHwakKmE1FWV5ZYxNvDY4EDCxxRK4HxgYnn2s6uax1JEYFYGSKftN2Dv",
  "key9": "5v7ybh4xWV611T7ZTCimC2bcor4qYfHsrUuWoVTgCxENnRTgiq6cDgqKhVN7FynUFLWSbEwSb75GCCKJJkKs2XK",
  "key10": "4uT1tjDjwMpZeiNc7o1xEC9tH82Asn4MrDskD31Hfs275Wgv2EPeonqBVYE851Zmyk3rZnP8yRqFNrL58xc3wako",
  "key11": "63WBa4wZwxpNTwhqHRhmAkM93qyeFB5Az6XA9ojJNsvh8JwArSSKiVf7Fe6HqY4RGBFHswv5aHcyGVDB8MJRP6GH",
  "key12": "yr7YJM6mUciaHS1F2iP9UUNkU54Y8XiVDJqrzMZPb8ZZ3N1Q17bLQTTRSfJV95pvNGvYzzBKjP1zhe194tUsWJV",
  "key13": "Rm7KMXDE4sP644dXGNpMGRnoQBNWKDBPCGXVuADNFPHmXu8f9eaPLD3KqRDoW8MvrnDnrMnRmZtV6wSYMhdsTrS",
  "key14": "3XswKAPguYztwyM1rddH61SuaqyhnYeSEDyC9RRW4T8SMtGEEc74jaYf6dge5vMRQeCbkENMNRotjY7gnvwtomrh",
  "key15": "66yMywDwaUn2mn1VyjXnTtmcXgteeSwQVt2Yh82vzDArLyf5wMKusC12hUC1HRtT138mHbtbQ3FsWjhSx7qyfVDq",
  "key16": "2vwxYJeJt6HYmY69nXzmuzb57KgmTTmDgAcjCBoHDVbGDW9Ky9twMF4HZR4VVASEGJz9kDgh6NYBqpLqN9xuJUSL",
  "key17": "3AXb4PCR7Ka1DJqxF2wtf8t85YwgyMuBxs6uG8Tj8CNDm1RPZ2wUsPt2gJasAEDiq8SVYaSUDtBvMPUq1LjbiZo7",
  "key18": "2LZiTaS2NV1D6n9kfUGqRLbgLSXFYnDNBPECUu1a7Gut7G79H2jGLyJWR6hCtUbEHeRNauvzbtpRvYS2LPEwuR5E",
  "key19": "3xAA2uFGwrwqzNazEUmkJTcEvqwtHixKrWhhpmY1VdXich2AoXXLLikpi2aUvLidhKFPBaBifjwoXgjiABu7GAt3",
  "key20": "479njoTwSBLEXknxEtUPw11P1nmqyiAaK7BYRSmgY7yT1wScnDRPcZF6N1FDFSvfyiAjsoye7GG42Q49g1mGPPt5",
  "key21": "3rLDC6TvLa9c5hgA6uATssQrY6zVM353yX6XTtncfggV4RbM4y35rkjMpDeKYoaNDwkcoqE8fbpSUJpig499SSMf",
  "key22": "5y7pwUPxtMgwgVSRBVp2NBYxKUos2K5Rbxpu7qTe1rkgDhmCE71yxi8wZK9cm2uiWTPbkeQc9wk9Np2ssApPLVY5",
  "key23": "4XRHt4XRhWWDbCF9U8DAx7W1LrERT8uqaVCTX9w48j8oZm7AsFpiUk4JFDgm2M2sYgkhEVB8ccRQB98XaHTDmszm",
  "key24": "45zLxk3jZUHzUet2SHDSqQoSz1kbQTGyfwY283csPGVscatyvb5Xu1QjXDnGtANeeMKVLvq4kvadgRuemCtrBcG7",
  "key25": "5rjwqYLvmYCLUJB9KCJNdTv82Yob1am8JJ8cmyxmF51EJNtuVBbsz5vCV4dn3pJEZvGej3KbTX6UyH3ZiTL6RiB2",
  "key26": "4votiEwRvaGSzWL6SYxae6QajvwwC2HAsZRRTRxpaU1G6cFctCV91TVrTo1Bo3AHKxwqbyGehciYhZvrAwoba6DV",
  "key27": "2WqYFGMkxmbzERa3HBfZ3Guw4vLTpQtPWvLWj6wFA3KdxkLTk1euHwyApLSHo46znVXzh8sTU8CoMjA8qQQHR4oj",
  "key28": "hLgLbgovNugd2AUydSn9xY5VRD8Bjnxf2noa9tYh6xHHGw9EsahpQPzutZjfDABN47WLieakTjuRdc5haDZZQg8",
  "key29": "4udTjmhT7XJN7GyrYbw6XFEqAaFCsfUzFsTYSAFbSt8ReHDZ89vKKc48L1ANS8synWZrg8714sn5AMF3fvFmGcTT",
  "key30": "5oDpexkxaHzezE4GZkHfC3pUuJ1KNLdTciJX3GPpw6Me87MoDRCCRdeZj8sewFS1VrUVkT4w7JowXLQ6V27SjgT9",
  "key31": "3eqTbPDDiPKSiMRiSFUhqKUcsc8gGi6i5HvbBaupMEX3a6oE5zMRtaeR2L4BRmKDk7EWjuo6rncUMNH1CypMnew6",
  "key32": "4Bx7rvhwnKENoLW5bZUXjqYY9QJ84AHyWHyp9KCC5WnqvmU7Ckzd6CLFSSFMCePxTgBnJP1xxTd3WP8xREmFV6Uh",
  "key33": "2C7kasfLN8tEr9NMYNuy3jJswdgmB5aEJhawaicYfdeMMFfHvKxNpruHybreKdamjD442aEpWUXua7u1HHBvHwKE",
  "key34": "3zUA9wJ7gxdFWHsr9V3VBarStKbajJseHQQ6AmzbHwLRwv6yMm8kbNBq3Rw1Us2nUjFqk6aqcxzZVsEvcWhmmXqL",
  "key35": "dJyAt8jjVyFdadW1ukM15L5STAt97nUQrgzZS6BJK2E3X7pFr2aZc5YEar7zBDWuQ1R5XK1KKZaj9VSPc4c78Ms",
  "key36": "4aDhBriy6trsL71JcvjqTTATpqnwRoYVmf3McAbJt1RWpYMATmCyJea9E8toz5SQTLTrKGSYBWUEhUhgcXvkRsEk",
  "key37": "4BJh5qh1D52FxuHc2TLDpPHnwpL6cyvKPKpHWc98GJUqocjCUmCgXn6EH1zoycVGXyb9mekiaV9vD4uM1DTVcNx",
  "key38": "29FMuD67FR4Lurj2v62kZPn26rg6Xyamy1dJpNfUm7bdcoeE1UwujEGRkntDHd7w1vLghK9W33E2bzJ43WMtWLzJ"
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
