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
    "5kgcm4WgqKb16mCkAAct2ibMpvdMa69CNS2hv3kL4PKQKGLA6CjSGJK5TK278p8nZKeDmoZ8Mkw4TbThx4kC5yic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4caMErC8dN2HoSwoNnrYz6V62risz8NFKuim9aM8u1ucCuPHoad2s2Rs9CeZTLGpdgSfnf8iCABbYe7mxtbVZEiK",
  "key1": "48g5CuDZ7r9ew4vXswmu42Eud4LE9hpEPWTDpTHgJFbo1zLscgJgBEm8rqEEr928c6hpnEHDLofTzRJPGaudpeNy",
  "key2": "3mbum2WG4qrQHn1Ead85hfrZ2MQHTXV51iST81KC1EoGvkJsveXWNhm3bXKQA2winK5pFyBU3HD7TX5UWMhPZbAn",
  "key3": "3L4SyBtA8Br79Nsqx7pqF9tcjY9MwQMD9HNUwLgsYk5uXjqYsfVGFBGQhH9nSfAYyZTk7HypUQRn7EKMEsutVrmq",
  "key4": "4FabJ8nr9QHjiqUMfbXVT8pFD2XdMQmAmhbWMFLUt87DBAd6ufb5Lezqg8BgCMNodyBKNEcA9D58ZPFmEFTud5Gy",
  "key5": "3RsDLqw526vNNDNytFyEciYyHG5XkbnigqvEswdSNtwHhbZgr3dxoQBKso18aNs1hxe8i4BJwmpcNcuUqvAD9D32",
  "key6": "2saqq3quxVjbRcY4hFErhWyqrT6ruYkiAkT87b5QHYyjGXimHby2TM8rPv2kjBmhQ76ZZjD8ZGqJbfnv7Lemmoyx",
  "key7": "5MvnMNr434pybi6xHUMaH5tvdN3aRS2XNXbPAuMSkkqzJzU3jc58BZSs41navDJ49a9qZpKT2AeBKybfT5FtXwu8",
  "key8": "gBopftACt7U7oxCJ7BKQzSG4GdLGojEHXPHiCUonLMb5JKEnZ6mU9PkKg84ykA8NnTqmAmbxFtXGBnvX8Hi7yrv",
  "key9": "4AttV5PzjNNEcaZdDfWmYbqtq69z8AkHVcSjjKKvvciWuof6WWMCjqtpLsFQ1TCAjMa4rX7kdz4Zd11SkkhofPeZ",
  "key10": "5iQ4MzCUrYSASEKsTveyEYG4iiTQgNsxiKzDMfyuEos6XiFNdDeAHtjezKffnFoHSM8cDoDU1fV53L9i5zga66Wf",
  "key11": "4mWEPYscopN2EKaN9Dsghj9fjfPhFdnVbsDy26FGsBjoaWvnctF25ri2KcZB4bGrdXprvb6Hs5UPzqd72U7mC1Z1",
  "key12": "2vCCyjeiSLcTtcZ69E5PD68j6L2hAMmDaj7uyiJgu8ggHAmRb5G34utsNSY1u7MUHBWbU1ou2SLPuWQVtwz3QAxm",
  "key13": "JMTyQiQh952VuzrgLMdvj1NmTdFCvJKRdaLWaDABtQ7LZ7YWtgWLESyewARW1TrX13iJRdogb5HzAhhGcn8Ee3Y",
  "key14": "3uW8BUo2VHCKPUwwGk5yDz1yPTGZM14hER945oDDZATupN78Ayygj9Qf5dtge4JmbkN1WGQhJjTvzJcKDWhP4RKo",
  "key15": "3Se8T5AeynzZXzmQn2R2bzZ32vwBjTzS4eE3kogkB8znAcbVUpWW6kGvQ8humVndLhXmdoiuFnmHeguC2ZP8UXNK",
  "key16": "4V5o8TYuAHo3CSn1bwCeVzxAduS1smcVSu7dudKQHMGw73cuDEASo7zzM6XeYjCDEBnCHjKTyDXE1iqWgsX3Qjbc",
  "key17": "5iWwRpqyhTFba4t4Gas97GWVx3RsKASaf8bY9LiJesXJn9bougCwv4ruK7FikYAupLMUAveziCRZ4orSSoVFuYbE",
  "key18": "inssTR5egoTpCVWnsJBZ6Pj4kKtnY3ym73y7knX2Y4kFc2WMcS5fcPNZ9MTBL7d4jzcqMhB2wDYSsR2bvGLFAL6",
  "key19": "sVWihK8AeDMhRGLLqErpaQZUaGzKLH7LcEA1kDaJ7k4RpZz6ZaXBi3Dxp5q48Ysjhihfxrmmobx1HsicWwgxbez",
  "key20": "5Rxio8L9Ps7P7aPE3L2jY6YiZG1QTbKJX5MPe7ceD7nvJZo6E9yLRvwBnQtN5ozC88X8N48xGQE625kSbz4ow23V",
  "key21": "4GKXmM8GQMPmVnN7Do3zR9WhQ3xYYEiXrWhrbTP5RQTpMSFaqYFbh5LParSShzz7xFJqBgm8AtoCzUGVUnScoHaL",
  "key22": "3Mz3Src7jL47zFB9kPDS26MB6y4anzgVDiNWMamdQjE7sH7tM4fHTG8NTVTk2QC3zaNVAsvdQQBNyVmzXD4Ukupg",
  "key23": "4BdyVw2zWi5p1drCSKMvbVbu7KG4vED7EKapR9Sc2adgpCVCNVhT6gVkLCNzLRSeeZCDunK4KGJDyCdaRm2MXyR2",
  "key24": "57GizaD5aWZ3Xh1L9pCLHaTyzgqxtR9Wg4cEG888o9LcV2hySSMhz6BN6AhKggQs646B2BvqosncQspJmTjNJzRy",
  "key25": "4WG3XKmgpZTWqc8YAyReUZ9HhmG5pnfmhKHGZybEbEDhu2Y4RXmtgMFMPxxW6V8AwEiAQQPuRt1kxzeawefZVvCN",
  "key26": "89E5Ak3uVciroSusmbZM9V6fJH9Uz34Gj19m7ed66piNDfegoF58Fy4MQJ7SvrhRCjW7EiGj71kqmQXyiLto83E"
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
