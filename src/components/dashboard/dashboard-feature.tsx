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
    "4ocqjpQmL8eAZvYuj3fumot8vTdw2uSP8hEEajuVzs3p2rgpdvDE3RKxBYY6uHik8QTLw5bvssBAzqYwQ38A6XPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vcU7r4A6E3FmFKxW64FJWeT5kRJ718BotUjtLuiTJLEbJDbeqwpY1VtbjFEtU6kVqVLdBas69Y14bDrUgQb1v9t",
  "key1": "4LdzhDKWGHWt4Ret5A7Kf1njq46rmKGFfoXyDetB8taAsmAJCxgRh5LWmgmgnLdLhFZi9QvaTpZhma8Ncdsfqm9b",
  "key2": "4fzxq1kKafhHRUu7gXQf4TvZTghKAbyZBzSPw1rqCrtCzvhb2RZScPmGDHAMp59yQoNXzy42yqHET4rZAgbVbFn",
  "key3": "5kxsczBzx26GvCkvCsWAJPJCTGPkYzqAik9FhqbBnjoqz6KU2byKnMmLri7BWb1ps2afeYyN7Y7SJWpyTe4rVzru",
  "key4": "2jHApycjQsxY7r8YwjfYMces75aDYgw41wwKkWX1U87bwVWiUAJeaKiemwDwFxZQ7PZUYB2fkR2zc8VeD3sr5GY3",
  "key5": "49Q3pPn1ixT1UbsD87HAMP331mpfRFVN5KCpzaxzDsFVydnsncWD45qL3F3Sfj5HkSuHycMqnArnXm9eDfek4jLv",
  "key6": "tiVSL3RbaygqtHgvZL7RL6nZu7VDhwjWcX4D69CvQLojvmvZRRCJ2pGFqBSu9AvchETvi7d1ymxyhV5M5QckgGM",
  "key7": "3KCyjbZLJx3kyZALYmCsgpgV7751jx1dnNxq2tkBYVfJv14DuXQWT4TjTZUgY9VECvEzm1kLyY1xRPLNPrSC7jPt",
  "key8": "2S6C1cxXC61aCAdHGhqYour9UAHZKAK8ruoDBYcZynmmPiPCm5N6nLuCYfkqoekfVnJBGi3YNpuvAjGMYtRWQmMD",
  "key9": "T65Npv6B4aGgswcXRmgwMBDSezwp2Lkzoug72JF1v4CtLa56spspUib4Qr6u6NAALW3bEHD3ZsS97gEdRT1wMFh",
  "key10": "2wkQg57KFjVQDLTVd7PgcNTQ7nNAhAbptEHpLzNkEiNXePUMZ919tRo2mWTHdust1eMN9pYbtoFHGRudyzYmpJns",
  "key11": "5NVBPf5FBQWe7A7srEew77DjadCnknL3N8FqTU7dDCcY1FXz1ekN8HyYPWLVvfzsTSJ298HE6oRY2udCtbAChPdu",
  "key12": "ZZQyNrA683fD7TwKLLMrohsYWLQRMHRBSTmf5cM76rvEfSGxxTi7m2hFPaLXr9CSLHkTtKiDK6LiojTR7L7rXfA",
  "key13": "2MV8YYgz59XkUK57tqdFkwpGMFXyXa2ny9MhgEjDiH9fWkZTRfEFCBRRTYAoVrU8CZDzH5KvPvUQ7acNZ36pNgi8",
  "key14": "MogrNSZ42v9wnD257v6qwPGLB26xYzYnhGA7j9iPcriaZd4r1gzxts2JKi9XX22k74AiVfj4gawdYBqNCN4rUNT",
  "key15": "3JqmKEHTe43xF4nPHG54e76DGEDUiRjnMoYYueQdnCBJVmkBUyzMmEi1DU1aaugckUR1cWj1yUqzyp2s92wMWF6",
  "key16": "54mZXqwhhLG3HPnhzsmKHrxjAKUezPpzRCCTnSf1rr7LMVd3W9ddjsKJeKAFtpDcc5wMqpbSw3a1Bsa2Gjqpbngc",
  "key17": "2nQBEu3EeSYJXGbTQcV13Tk27b8ApUTQekbafhHFrpiYTNdLab7osia872mydz4hAbLu4s49Mo1HiuhyQGnVd3jm",
  "key18": "3ay1Hre1zpaLBo81tVLHoawL9sGuJ5HNZ4ETR7gJ2H3QhXipF9L6nL7orfh3s3uQbitQrnLLFg1quzQkBqE9LKy6",
  "key19": "5sgR1qYPnfieT3jwtXx5wUSXPtTFpCYwCGQucbPZ5nMg2G2MmiAejT3x1VRs9zVEQJS3VzpNuMnKPZAADAEZoKb4",
  "key20": "4qjPMZjNCw3Z1qQWvvQnqsDQgpzF2mGhvdJjSPVW4soFC8uphbQCcwrQCgyxvLWNjioKkSSoVMaDxjrfHB7Tu8Ho",
  "key21": "3iqs47bKW2yLSMfnE1P1htucWaMwHrsNFyzWXCSS44D1dLdR3cGXFgcfaHLyGsJUuJR1s7SR1LBzC48bEeSMbwTe",
  "key22": "5ckArGPag8b7VGwFVV3G81bbazHdfmP9ys8pw2pLi4c89VaGM57fVLEQwaRDBHmWHMhmsEaQaT7BGVJ8s4wiQo3E",
  "key23": "3RMyHGZmoiPHGAVe7nKkxbWEnK1Evm5Uhf4PiiWVQiE4GCQXboAS7HS1ubcmfoWdeFQuYdCS4GAoqMCFAjs3wKnh",
  "key24": "3rb5J2zHphh2a6FF8BPgvDKMm2uVNznn5huudhtA216DA7zXUp8CuziZr5nqzoPtkfb7SHhyNb9zHxRV5DHorWz1",
  "key25": "3prPoijQkeEB2pNCqDZmKnmFdTRkGhUHW87wsxge8BCndsaA3V8GcxwX18o8NmYGCstRsP4oDLM5TJ6dLQXhPvUd",
  "key26": "2nzLAt6mucXg1yuwW5JAajc5wR8MCiRuwAgcXindB863tDCiBvGxVLeNMCGw5WRZfTe7nNwV7zx9FVTLnmrUJzUs",
  "key27": "kTxf4m61jYve9xrwRmPaaLECRwJ9D8BQbCYGyTFBToj7sq9pT9qGmxWL392DtznVYjpUfr7UPDusAqscYQCgCnQ",
  "key28": "2cmrdw61J7xfwdNMrCPkDDxQqHJB3u6EtwX66wKf56A5k3PHVjHdzNLwBeXSvX82Q73k1pqmPyd95W3Si7ANRypU",
  "key29": "5JZH4hYzugDEqCvNkEbcgX19Du8fiGsgdTr9C666wLwPXkT4cHjAVxAQmghZniJYPzFv6yYqtthC6Dn4a4L8e4yy",
  "key30": "5HxcntCpY5sJ386hC9ErAvcawyrQrqeKrkbbDdpQiaTH8eS3AUrYKkaw2W3NVMuXriAV3zNx2pQ84CD41ksBHZNu",
  "key31": "4TEzQ4fSWWYY6mJSe5mR6EunAJHbVHoM7Lo6bjwwjSY9FYkBHRY2oJ6mdpRyrNzR8sL93fVRHhM7N1HxeqSTBQAJ",
  "key32": "BDHjexhGqL1y5w6ptq6SXz2oxt97s1SJRp1n6m34pSKyUexrUMwDiwEazyjhqnvhacD7V86WaSMKM3KdvgRMjWu",
  "key33": "qpYBTmERTAHg1Hq8S87BKQQSjtsuYGtEqVuXpJKQeBsZc4whSYR8pwnsW7GducWdoSyd4jDQhHdasEoqbez232C",
  "key34": "4D1dZX2ecBFWbShFG4bqB3wqkq87skFE2PXH95Xt5eCuNtQkbbjEzShPnpFM44QnNe2rQxSwe259X8W2CjfxgeP6",
  "key35": "qZQaHqLB9UE1XAgVDQodQxxSE5FeCTuZQ6PcFpHfBgXvkpcUadHet2y4Na96pEydy4iEpoi42KuYjguwREpAMqF",
  "key36": "2E3eXUnie1yEFBLmxCpBKJEaujPrPZrgahFoVgNGMpN4q1657aghvCHzkyDwpG255LLoKJp7NDahifUG4zvKnbnJ",
  "key37": "p76eWgQAJgPBZHx4DwAcsTHV6xHCXk5fiKNY7DLZTWVTyvByrERBDX3yqLpxvcF3gBxYbvDCBwN6YhxQXDS1hr6",
  "key38": "55fpZ2MPvv4VqD71VNXusbRQDxSdLueLpkp5RPgxQspdyWFJM3avzzu7Cn3tgsAjZtVfLN3mCjshLrx4UBWcYkwu"
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
