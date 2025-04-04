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
    "2nyzMSiTgj8s7ar7zm4EjbJskqX395qsGfA3LDvtYLk4pZj5CYbqYy3e74Cqxkyw4AJbUnzYH1eRAAcZ3pFCTu9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLntwGd98C68mvvbzbanW46o1eqTDk4mqozComvVPbrDX8Qjkji9HwoK8t6jUUACiD1bEgySqqnyFzKPdyTCzMt",
  "key1": "4Gd7C4wofoDxwTcw2PHZ4EFYqy3oG1Lym3LZ5M92hLD71PrjzK8JpYPcHTpNYzGy4YEVG25GD2Y3FtF9xxd8S3kq",
  "key2": "2nSN43oPAcFnEwfDRDbR4SfpHsEmV2SRwCvUpMjRQ8BNXsr2XMAFPDprdLZW1dr8N25Uv83tTg8UGngoaNibbr6q",
  "key3": "2REoUQg5B7NE6GFc6aaeLbARHKj46bUc5Gqat6ngqAXPPJX226zcMdVpcERvx7rov9dQmhhhgvNKwuJrzaF1jZTL",
  "key4": "4epuSyX5jwaR8DyiVo5Z9kSrqWqegkGsRoBxSVXUFBawUZSsDhBnmYNukT9u4TuuSgmCPSbQWq3rQ9B5Uj1VB17k",
  "key5": "48i6RpoMkCf3ecRiGhqZ9CTS6UhEyi47rDfkgg4VqHe1FGvWKoiHF6nwuJ4fvYc3XKk54bJrfLBA3MR8i9AmoT9k",
  "key6": "3VxeKwmiZNp3uJtLedyq9ecq1RBhBeV1ABbFxAfGVkBm8knNqsTGCKPFxfs1ifEHYWfgvErF9Ubb3zyJTx66eb7j",
  "key7": "5uXtX59MsJytD8Eb7HJsixk2UKKL8e4sBiLVhJUXecUMPHA3MMtv3UnaM6zDZSo55KZy2bebQ4x6fyZV7qTwJY6d",
  "key8": "21SyvuCbngaVTu4kgM3923SaujogDnWm6C6ts9QSDPqycUfeJysV4BG7WmhJKYAWPD2HNGf9YS6eJFXbuTQFatsM",
  "key9": "4diCnNSeGNsqUH8y31VArmpfzmqXhVBSdYfeBD1J3ThPiuPoaYVCPtUnyBxWFVK1qdK2YoasZXmq3ieiHJs2J6Cm",
  "key10": "oBXYPQzvCRVZWsaEk8MmvAMrVhQPJLsQiff6Hjg3W7zbXSvoyo66ptDKQbXiKReTT3q5iv3WdSs9znsgyVVF49p",
  "key11": "2dBaPR3bggdaLmhyZyrhiVMyL35AUoTQEKdFd9jBSWjKmatJPBbzbvzSmvA3weBJBy3NpBFEwekzCLzWxRg9ao28",
  "key12": "HpXyeSjrTAtMN8DyiXcUR3Fcgq168kweApcDxY6NfUxEXsNvzEB1iHECmbLnbnMRDoNqcd9xCp5qBPbh9kmKB5a",
  "key13": "5LjHzbrcDJSRDF96xGgrKj4mYP86hduw4zAThVqu1VTvsEJyxAJYXg8ZEYcv1cUqExaPaZRyewLd8juFiee6ZiTb",
  "key14": "VTR4woqxJSPg6wrH7cbkBDJcJn3uK6AghbS3xB9fAwDzgovpYf1R7tvquK9AGhxDvw7awBDXwu7btVxEC682F2w",
  "key15": "2qJmKVFPYXBfFc9ApnHorDopUgqMQbxFc4bRxFqMnbGVffZwBHgJM1d57QqpGacpcMyetdbP4WTbKS9BCSMV7Njd",
  "key16": "1LhR8odkWunrabh2q4E185PCk526wEBxUykthYhbSThrt24vWVZ19rHnreZMkHM8ymiQEcCUmzc3ZwRcWEzjTUH",
  "key17": "xNt3SWJkoEME39AnpkJ8HnRqA8BURG237NJkQr6kkKVWpdAJiWoT4vRL7sFn2zxns75vM5N1VTp3ibdqYCPC57z",
  "key18": "2QBhnoKRqjt3yLkPFbrMPfYPVdyA8e9NcpLSXASHSgAAFWyG264Ux5RttWitHRzwAtkCBYBEzWrR7KiUCDVPEZEi",
  "key19": "44xpQ285Dj9zR3uzp3jWxcMP2Vw5Y9NZhLv4JhKFAPUSPh8QMabiyNQfumYojJYbZkYpdAsq6qAh3QWxRy9LmWtF",
  "key20": "65w5xUVD6QEaeepQWxWSasoaEZokn1V3Q951mjQnkCg2VHnNGo66xsFUhWBWddjSYS3nnqTMCiETSQsS75Mmv5st",
  "key21": "5s2x2ynsD6GGhBoBcgPxAYzwUVm2NKXGpioRY4Sk31xLpHBKasN9DWCDhVGNFiq6gQFDB9Q2K1VN6YVtkXC7VrHK",
  "key22": "26KZzdDzRjPdF1TtVJfoUZWtvzX7e65b5nCCfzSu96syFVPEubaCJgdBGiBhJQWLobbVzPzQZHaJgJuhAMZHR76V",
  "key23": "4yFzG75HPFudH2HYbgPwD7aSmkzngwUoNnYzw1Kw9Po7EqA55MSuenAzuwdGXuXHovwDJDTdonapdzJWoGqHLW6L",
  "key24": "meGibXw4u9BQV6cTQokoMFADP6Ln6vTqZygndJsqPDCkfQpRaEyvKRCA6Dicyi3TNLtTqnz63CT8dxFxkiv8uK3",
  "key25": "3n2FxJdZ3eEBWXQ21aNSatbSNprcxcmR6DmSNm8TvF79amMNBbATGfEGswTgyJNcHv1RRrLcPPPHodxkm13TezVr",
  "key26": "2xjsF6bw8fFTxuSXNT283c9wH5dZ3qCFdVYoMk93YMEiNm8KP9kVBaUrPXZWYgvGiaRJtbEuEn1dKJLSFGyBG9Pg",
  "key27": "22jeQkEoWwg9bwmSwToiCB5xzWveHMS9fbfwDx1NtWwT2CxdeahbH9vHd1eTuv3jhiYG72igE2FsoQcLLtVH3vgp",
  "key28": "4WqCaPcTagwcefaiLnFN17hassskXRHMQDkPn5v9BkTZ6eucYtdT2jiWTHSWBz5yPnbfuZM7PxgoTomFQpMJZDis"
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
