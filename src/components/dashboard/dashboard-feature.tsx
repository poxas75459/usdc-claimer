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
    "5izdMHZgQFRAVqMttb1gYz5Hdar1igBx8Vcn6jJxfiURMCR4z4ENwY3fcosi5Lh48BfM7Wdqbr5AwpjWPDaLtuak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AY4JjgZqy7Pxug13A5LM1bKrwu3CePfy2LYHrvaaNYAhJCyUhfdSfSjYehcVtps2yyTDmGdCj8jxndwkcrNazMf",
  "key1": "5AfdyXLK1RtFcfSse2iRG6qL2HJ9Nj3MkvvXe5Zoj2QrUbBFbD4dUkVpYezCZkgFj8yieLwPLDNELXNW762nVQMm",
  "key2": "nGHKUxbTa4AQmJn1vLEXg6js8wDPDXMMyigwnMFpgXdehmkKRxTquV8PBFudmaWp7omg9EV33GxBeoU1VpoT4vb",
  "key3": "3qWBrQriNSobN2zsaVYB9bUw2j4WUqmkbpqHUDpRCZD4TRqhYfaGNnkS7xBKRMAXC2gxeEMq94iSfwnAs5BkPnF",
  "key4": "4n3YJ88hVC4LoALsCRJZ6rzmzp9tByX613p9PaWzPnWGggPMbWCJZHoKs2zdyLQJY7o4AmhrJU4HA7E2BydZwgLg",
  "key5": "2aq7gchuRJCEhFFRjXT79DzkGzZxxXQ5LoTegQajDtLy9BDua1n9RAFV56ngK8tW7eGmccT3r4CVP9F4aE5mQZin",
  "key6": "4V7rUg1BHKkLgWsCqLPtLoptM7oQiECLDXYnSN2w2MX5gWXDi5ymHnwy6iauKXJAJKNtWiumWkf5i6Xwe5iMT5FW",
  "key7": "65AB9A2NegG5YX4vu9oG1hAxPj9Ke6PyqCv8EFisEvVtLuJcuCB4KfGQRkqWs5NjyBPYBtmVcWSEtXmpq9qdJNUN",
  "key8": "2GQEno1Z7ey7mKmqd5H6FMiKzkgMBikM44nmZfKcWLbaCuQABJBQdJiHG69XzRw3hErLbGozo91cdcaCTbjem7rh",
  "key9": "4qgaVDcTj9Uz1bDEczuh3zqyVJtH2JWJURW5VfqNFyaQdEG4yECm83wUxaoQ9BuysPtFVhdo31bSrrGNyj4KrHog",
  "key10": "5g7EXrtfMDSKHSGr9Vf8X8QvCHXsJ55gk2Xg1rVXuW2YnE7tEY3CZqxW2Wbf3RXoU51yoBRaKEN1Jkbv1R3DUmnu",
  "key11": "xShJ7wEdyRqR8m6QcaPp69g49C3Kqr2X4JURVME4gPXq3sRWr5pNnBuDXY9dRkjCc4WJnFTWLjDxrKGTbGGWeUU",
  "key12": "SGXjCoTCgyWbuNKneqDxdAtmwESLjTCycnDcJhTsct12hTExUAtdpRSGFeFh4NUmZXvPmkawquPWxTo2YMyeBif",
  "key13": "7VsA3x4ktbZeJ29LdWz29vKZbNtxCmzqRZmkPHzgRMZztfHkeeks4gjJtmnDM34JKtX6X6ATDqHVeBitmpXBFBy",
  "key14": "23nsFWd9ghTj5rotRs6DXQaKvpyBCDDU7ZRqLvwzPcb6wL6mnna1WgwdVb42RDdbKqfqdQc2A5m1mPTsJaYM9VgY",
  "key15": "jJfHxZ9Z9RYcxojEF9qbgwmm7JMCBBa9WpYHJT8jP3gVgHfiZFcx6sEB8cG54gybkPKa27uZa47PjzNojrQCits",
  "key16": "3hAQgiuMhjufa67b6t8HRjv3aSjfFoKs8P3PCaHgn3L8eXyinHAuxxXMCrbpQYA2Bm2KrdvkmgGzPChDk9m9oxc5",
  "key17": "23ppAARXmnzJ2Fgbma4fCaFswjoS4EewaUn2Su4ZPGpWWiFh3mD5PkpKAx124Kjkj5UVR24MR5UMhswYHWb5KtAA",
  "key18": "4HocwJGyD6FtZmwQKPzSpbDaYpLHrnjrynsqJRyUmTEh4Gf7g51zDj5gsAqP2TVcP9XWyAnnbDTxdd3VfojVz9D5",
  "key19": "2iXftZ1fnVm47nKnWZg3ubJuYeZEYmZBioxQKA6RWVxfb5JBTBnwTcmCwNAjuarCbzEfjJJEb6rDxYNxRzu6WS8U",
  "key20": "4C6NvLXBzMq49sRj5pQX74vkvf1E5CD3gDWhVjpBH1VkjpWzZwLsX1pEcXWUqGNgziRD3esECdzjudnYax6JzcaD",
  "key21": "2XnFBSAkhzf4YB3XktaG3n9ELGWNiumpJ2hYJEL6B2WpUvQpbzED5fcUqmpUmATKjGMM2Tczpe7Z1VC5UhzMbh1c",
  "key22": "5FCFvVnhvvdXbrtxkjpgj9sxz4zzZNXxxrLoYXCFCXeT42pnN6acLWH2Bt5XY3r7fZHpVprHY9KZ9SYqX4NDTd8b",
  "key23": "aBgvanGVDAM5udwRnYitBbb7YkFJpdti8r1FtdKoZYDfjzDdNdKvhLwkiyyKfbbpF4zitgKiRxnFShY9bmBVQck",
  "key24": "2E2PJmrs6j46a7FT56fUQwJG6QsUc8vEVXCJVantMtzftZ1sYvXtanA4ATwFeBtnLnU8WPDiGHPAsKyrGrRs2vce",
  "key25": "3nK272RQ2sQb4n1FGp98Ttiy19dq3rgeksQzb9Rqitrie6QC4b6MVuNYNMV9sHLX41wSUMBSKEkzmMT8yNspJVeP",
  "key26": "56f5mTJpMiaGyg8MXuixXmCuB2WfaMzQFBDZxMZbPKYSCZh8ySzbJ7S2DuUkBiUaPnkRMjbcWy5BG9TBESMrNQC5",
  "key27": "24XqQD24ufecRUHx4M5c5wkEUPA3P51pxBWgBn7L8ECx5eSAuLn6y3V8YMqfqLDhx1UCDXPFx9LLTm1YLQq1yGoM"
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
