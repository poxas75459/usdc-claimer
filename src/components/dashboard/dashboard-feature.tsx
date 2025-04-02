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
    "5ZJcrhuyCtZonkpZFpCvbNtw83dXiaTsFwQVXkr2Ckn8ZxTx5ADzmCoGfEffdrvpdTp1gFprx9KYkw8bgnw12HXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FKTTrJTD9rp1fxdoLSvSAqPmYtZ2Ne1Edr2rauzEKDqA9gyYJqZK5MAP2FaBuoXSdmK2D9b8Hj4H7nXP5rrKpH2",
  "key1": "2r4pXro7TdyLmCPBGA1rV1T815JyaVpUzfkQs3dFFPLqK6uwf71L3rwkk3YNUL41vd4g5eRpwi5X59zakYR9aoEe",
  "key2": "2RzuAwQcY5oehKAncnEUKseXGiCTnyo65tuaafn1mNXDDRcypsg2PZ4royZyTJs8DVNcE9Ffnw1n8GLwHRj1gdnM",
  "key3": "3tDevfvAnKvTY1gT6T85KX4c3esD5aXwJTpxTakYMd1gs2T7dWL7XdywrfSevBjzpvyX5eEuK3o25KQ35XrpzvGG",
  "key4": "43DepYY6KgK2c4cqzF61utKCGAgyfBF7yKBDuJj547uRT9YGydFvt2eSk99GhYQyBfYLpHLeNjAQ3hjENRZquib5",
  "key5": "365ErW3KWQ2EpNDPfwkhJPZSed6uj4s4kD6yimHbJxeDFcbqCCLMv3PNA1oyuodPMWAJxXUy2XBtWEyWcguaaw1P",
  "key6": "4RUsptSNjmwa6r37LR6ACKHjmbgKy1SPhyKfRewgpdivaGz39D5C36kGpyKahptTSdi9MfzRuWrXQHb9emazBrYT",
  "key7": "48wqekc68WXXkKCAzmUviXrpBquYQHMt2cfqjrbXT7qxD5bk81HEP6m1Ny8D76Vjv8PUbbS19PzWNK3RukB9fgBJ",
  "key8": "4uE9onZXSaucZobYspiExDpqEs7U2aGVHwzxGA6w4Yin3RhiwnuGHxLvV7RqiH1mpoyqTNsywgqjCp5TufYmwY9C",
  "key9": "5rj81M6cXuqeajajUZiMfpMPQST8H1UpzHZH4D2wui25xpPzx37PF8VF9x2gChBAa9kvnNB9pUNQFGx8T1EncdHa",
  "key10": "Tvt2exzMr31P75pBFKPv9EcyziiiTsmHP3mFbsaPjcw8AVK6it8UcXfq12YQuojYuUyrPWmASRa7UKZ6CxX7GJ6",
  "key11": "5M1hgtznoQL5b6k2PgcEmBSgzD7X1G8nRX8YgU67UcGM8sAaNnVgkWvakHeyHDUwyYfwthEoTjKyeXZEiDT2c8rP",
  "key12": "5id1occQrX7JBdqqV73sUKYyZ1kPwt4g3Wh6pGkpd8xjQXUhhx9tNoPJGWTRkbiF69d83QbBfaGSXMxNXNDCDCTw",
  "key13": "4X3FDwCToMuFLPGN7wCGMUR853XXVbXv8WsV6Zfb3jaZhWQMR1Ry5GEufEmfyjRdcLWm5HEqnqm5x4bqBvdMuui1",
  "key14": "t1BbLjc2gxuzS29THEQjhmZeWxYUT8p5rBbULwARwguBKt78D13WSwAzaBUpheMDPiqtXjznyVgNckeTKKPmtBg",
  "key15": "RWGLf4eAHhvhDEfRo97JeXqSnvcVdwkbX3b8XN2bP6fqfS3eXN5NSBCCyDSZyMoEqhh5gt8wwVLbVjuPmiQSHSC",
  "key16": "67E2N9eaTQ3B77Nc4Ezs5yYp7g6URN648p7EK32PPyLZdPzZsk35oPafmRbbtnxPgwACiNR9mpny2z1Axe3s2Vf3",
  "key17": "5njUPU2TtK7P7hTj6QuArXvVJbpvrY1YNV3kAuVwVbrcgQqdHPic3EHDj1RZzWU1pHcEfmtD5vpLr3cXgDSq8r6X",
  "key18": "3N2ssnBDz4UXZWfqupN5sBDhyRR8tAaCmA5Ba5jFKPjKyJBUBzhRYESe3sDaa8d1SRBzN3FZtx3ZRck3yxf6u18F",
  "key19": "4pJt1jHfDULKP34BRvE1BrfENgUYnJYPs8RFJDBiNvJwRe9wDmfkSSJJGCtgwKA7ELrkngbAQqkMbVw6PCf8GKrQ",
  "key20": "47h1DxTMzudi26MRTaoM1Rb8MvuLjiKobmtNudsvefZvT51VdbB2N7G5ZMXUoShveoCaKpjkpN6Q9o1vtNQh5uNh",
  "key21": "3jvaHHFxEpBnj4wDarAwpQeXn84Gdq1pygFG1vFRKbzDAmPfyjeagFierrcUG8hRdwQzShRu4yWX8HrvWWfDW3Yh",
  "key22": "ktKMFCpYnnm2KuSERcBtGMUm2XYHoGG8diwofa5TrrdQ2XHyyA5HiDhkCzW4NdXmDrQLaCshqEbeAtof5j1kDgn",
  "key23": "2JX3dKRrXza6K6bwGAXaFvcojChoZfjQE7LTLA14tc3qsaHUq9TZLZNBxMejvYTH6NndUvcaufrh8qua7xZtYC2K",
  "key24": "27M9a7UVqXmkm4QSM8qyCAKVdJPtqEA1ADTHd944HmPj3K1WhdYLuNEvZeFbTsBD6PrDWMFmpY4TWhM7pzCVf171",
  "key25": "gh12EbvBCXaNswjR6e4HkTmEZ7WZbyVNndNHcLite4e8utuvJMuLtDzsH7CKgtLumRWAEdAUNcCQVwXTcdKuomG",
  "key26": "FjoKvutwgh9Lmqp5QqH4Z7cvkEbpCYjVDjsF98WqxZAsy2W68USFW7xsudKujBND5KVt4DpgXA6AuWZkMJVa7cj",
  "key27": "4VJeTRaPKQMgVee7GrzA86pJPMXwX3i6ZVXjHD3kzGawN1hv4f1ruGKWkgXYhDLwnq6vCT8YhKrngKytBKR4MLqQ",
  "key28": "oZDgmeh8nzH41B9uZ7bYrEZh5hqvNNj5HbdSJVAXL5KQk7219w9B8iWESzpheWLKAULpAYS3YHHyh95m6mxgusj",
  "key29": "ZgtPFvRsWxjRto19Q7u34eBRR8kRamReZeXXkxKZszpvB4h4GipbgWtkEEFWf8JXHoek8qP6NT4AppGydmhCMv1",
  "key30": "5GDDzyVQoa9GwWq3Pk4R6B4gGRmurGgRQPEbA8A3cvzLCXLx6hb2x1XVtfhj45zzMVCkcd5kWutraH3njgEXZ78m"
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
