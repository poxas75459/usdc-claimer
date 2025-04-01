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
    "5jEmcQvYtnEjBdgePdghxBMk2GeFRUUhA9hbWMg9nXSUSy8nRrrYdbTXVUAGsezeFG9vn8hm8BPV4SPzKReJd23F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JuVNkgVxuVYTh2n26Ymi24NzJ6UcAy2rBvo478GUdytgeXv1WNRKHCusRtFQAY2ZvTbUYgQKj5DbESu1BmFypt1",
  "key1": "5edbxhsPCwyihYQvN7u2LRLKhPU9j3zBkQLDPb6kBYryp8JgJG2NEMQPfLnxWzFzG9rtyvWjsFKbDqfRjDJhbzsG",
  "key2": "4bX9gUeeSPi7SgKkqUMrUz7QmZtUYPveN8y3Ch5jCj2sDJQtDc79EfYBMELYz2g69ne8TjnLc8ganTgumUQZ4q6X",
  "key3": "r9htonr5oamgT5wzg2MnEoruD6zncMGM6fzsrXSKgRjdsJ7Q2pcAZhGWFZN6CLJJrdgz3JTEmq1dZphf9PcxBmp",
  "key4": "j1JcKcNfFskJDZjpBorTn9gqZ1rkuT9iT7juXuBirxAA1zjAqfVoG7fcaAXLgwYPASpUBx2zHqg45hSC8nhmWXc",
  "key5": "ER34RCMU8HtfcQW4g8RcXh9phqXttGg74mF6oqm2Zkq4482sGrcu5jWJ8TrpGbXBJP5gYQ8HCVAEYsV74XUothj",
  "key6": "4zqb2shSV772eLKVXrYZDjcssr2tTJR8BtR2m6LEddxAFL33UWJdv15pKL5uSHdkjphWTNCHm33fm2BNxNktYg6Y",
  "key7": "vczB5LtkqkaWNz9X1CUSMi5rTZeiE1WJdUGGgKqW35XcLM9TRZsg5UD6BSM6ngQmgZXZgqRKksNru3mhRJQMv6R",
  "key8": "581PiY9rCPdmvhJXi8Tq76ivgjDaSWSJ2n6K8ZrMrymjVqHHqqZbDbGPDWPmCH49NyQBqBCAUVhjh3Rmwa16HZCs",
  "key9": "difcUkbwo9U8m1UTTTU93btpdCDSdKsdktwCxfSttjyy3WVRaUtjoKNt25ucBZsHF2LjRXp7BAkNEFH4czvwBGp",
  "key10": "PFD6VhvnMj5y3sRtyjdoauuQ3LWKbTZY5EthVHrwbZxZ5jUezNCzaofq36absRnc9tfJ6EybUov6mQrQyQQ8xi7",
  "key11": "2kqdarQsNAag3yRgq5Ta35TWznCNzo4zVfwzFkCUzG6bmjRnzDrnaPvqWW2yjNehpAsgP9e65ynHfTSj1cznwN9Q",
  "key12": "4xW3U3evM95KwWWmzhF8v8u8zvSpfKkHatrhQqs5kkuCHHaasRgRQDJbUmW89b2fUBBjf3dAq1PujyxMbGTAEcCb",
  "key13": "4auGE5pTetGsZCBmH7suZYniWtEuxGuKPrN91CMmVkPNnQZrPui9h2uoVBsqZ1L4sMxQZWJGa9vKKRUH5qBM4BgZ",
  "key14": "2X7LLBEx54h4qSUr7acbfaKM8ajcTfCkszSfjPLvSTRkEqYe1YqMJAyVaoALaoAQcH6H6tEiKMwkZyFLLinNXnMF",
  "key15": "2itR54iCa7FG42UUt3qyryaqeEdhXq2883ygXWjjUFDYXRxj4MVCK8BtMyz6fbqtRcb4ksQWzWi5M8M1XXb2z4tC",
  "key16": "25UTqRecSiMtFtnmNoLtBV9g7d4Q8cfP2GiQWta2dqQhHHesBTDE5nrweDquNaKvBPWREs7C8fi63KPb6dtPrfV9",
  "key17": "b7na3sWhzoC3G8bRieGDSrVg8dVgQYFEHGMrKTuQQwKa88eZWi4n7aoZqfzC3n8B5HYyfzKrkCwDvaGYhGD4q6X",
  "key18": "5MeHFjSqHDipjNoHyUYxmGHwNk4joY6yAzTvnquSBthqvCy3gNzpXQue9ANjSLJVZuynuUvEQAVScPk5oRM4zmvX",
  "key19": "4nqGaQw34nThFQaXkQmQqkSVX3eJVX5R69sfHQWBgJyGTp29LTHE4w73BpZQxzs6Buh6mMYhLUY8ATw4U8qLY5A6",
  "key20": "5vBSaA3dK9gEypEfaVtqyfz2Qgh1dnM9uc63jSutfpPXyVcHcCVZh5J2boCW39fQpUoh12ar2sK232NVi9SgMhRy",
  "key21": "3rwFRGB6G1FbfkEzgxDWEHYia2WztD4QozQgCR5eV3Pm9C833oXH87V4PKj2EZKVg3DddJBKadw5fmbxq7yNTv91",
  "key22": "2LiSPpdoCscnhNHPXqixnqgnXKYfLaXUtg2zubAJKMgPASznHtpzEawWZtth5H5SgxDyUJknmyB5k8y8fBxTCPyP",
  "key23": "5hg3aUFeBoXaW4KsPVemD8orL3mbGb13KSczWSZShgMBw1KHnvcaVWujhkXob4GfGtp6k6qgJjPiSPCujayFzrT9",
  "key24": "RTVYH4asqKd3apdzshEvXBgDcNvrs23ABefqnqZgvFj3TbeTh6KCYqg4d9J1NHSn9VZXEgSKPB5u8Zcvv9SwogV"
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
