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
    "Zm3LLzuWMRcSVLNdLAcc6zaH2tkStqEMtax1awzSev5ZdWcymAYXe6UAyzAfPA9iN9wjYNNDcWMpTWP39fLLGMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ivDcnf2GmGPw8eS1w1YKxKmZT3cV8LmteucWDakuKZnpMjgXaUBBvTQDg8P9zZDivVkBsb39GHRzyaFSQTVjdq",
  "key1": "32UbEXVphT2rPk6HW1eaLiSDpXMFF9gTtnq36yJ4YGatbw61K1YJjmRdYqMGVy4UzCqun5zj2VP9WCvB9CsK6myR",
  "key2": "4kftkYRVuyU28gx8jhLpA1nrppaqLs9nQ4jEiYPUCbwEnw6ukp2iQ2eiPxyPhUSy67eWL7W8AEJiN9q5H3DiabsU",
  "key3": "3PzLc34nLXPSTUuFQaC5XgvwkBfru1E79xW5gohmaou29C9XrYUx2rcTcZwEhjSYw1tzasD2eBoM3JXV2JqowUHG",
  "key4": "345eV98dG3VWa11uZcZkePot811tJGatxEQm2cJWSZPfvEczwiXLzeWeGrnNMuFjHARMkkpmFp3uCsgm8he1Acag",
  "key5": "4712yaRBJLwqfMkdRH3DJNjUm8rrVXVhb9LzpeR14Y9U42aRE7VyAwHxf7nf68QXJtaxF3XjHCpkJyrB41UwKBUt",
  "key6": "5sykxHYuMZssKDPvqiH13JbQP1ehtDaxeKUhneHDepepv56mdwUa26zkXb1fsqAsNJXxP9ezNBGG6cvdsQ6TvUJS",
  "key7": "3TyBwjak4x66BAjHQkMkz4s47DUmo8LCiqxzw1ggUNYe2WxFpW5Pk3zjxTYF2nX6aqjF2vmpusCLfycn8buj6zKV",
  "key8": "bePD1XkUNXSaRK8Fmr51FTFLwCqoMe66LQ8EofyWUVuGstNEac4t9UFjPsMwF9MeGMyM8qwi7bTYkv47JZCfsHQ",
  "key9": "2ocNd2VCLQTWXqK9GpGQNFtJxW1TsjR3AUUqCBXBjr1gXNdjLo3KZf98DFaFxxwuxqhMYPhWUiLtxFeXPkncU4Xv",
  "key10": "5iLjv9HgJkE6EZJ57UXKxvuSzmv1d8VzLSUSx98G5KTa75gqMzYxNjc3K5DM1XLz97qPtLz6nkW4t7514TNy4M4u",
  "key11": "3zRg9AATTkUtf9vJk1Vg6PHTFUnewUF3njjZDvQKbkMAq7BMcbsUJ2HPgfWYxF3pGZW9Jfk1WCDyw5X62mym9ct2",
  "key12": "2g75VmnatJCQzQseRPGh92HbBsnNtwutEf8qHtApBQ8RrCnPgGQprUC8kdoFx9Ed6EonyojtYg8pUiZbcGrwfxgA",
  "key13": "4JrJPbn474yy5XbGuUhmuLCwsk4BRvx8iXimScRvnd6hNJvP79u6ALJoseK4395WwjEp6EtMPTkb7cdutijBY4su",
  "key14": "54dNn8LidfqyqcfSCvarTtNQkxRFMBqbjBrZk1zh11uxaUqdx4iET6VeS7wzQMQHgnTmbZYBCz6ZS95gZs9krRxA",
  "key15": "5gWRdEYdWCmirAN1W2HxGn84djuJbvBRTNmWEmFQ4CYJS5e3bbZg5wmLmq4V4WsFr5WQbetufHpTWBPzTG87sUgL",
  "key16": "4ZEhFC7bqxtvhtx5VUB3J7PiZucbYMHyH3Zg3wXjLFExNmkeuS4TkEXGtJeHaBfupRJADicapJSnb2JzMPTCVTT2",
  "key17": "2ce1BTLFLhhUPYcpYBqZjas8wuvTiuJo5mDLXRySsn5yHqq614gMata2m6vM9rr9usVLZuzd5LPBP3GJzwdYPvxp",
  "key18": "1Rkxq7w7p4kFBR64Bb93uWyWghjCFMw27Tx5t9dyueDsRgT95jN3fZHsZPTsSZD4RzP9BTmgTkRuoJn8F6H8mpp",
  "key19": "5vgX4aCpS2XQQPn3haKmU7h17WDBLkfQa3GBWNYcH3TgQHVwX6SCF7Z2DjUHEGFLBvz6ycWnS6pNVei2B4TZk3kY",
  "key20": "5Xp42utcvnkzPnwNT381YJ2wDDFKWfBjeQZo5HgiN7HnnLkR8AVVD7ABrJECosoxZXaexxbVh1vAsRDpD3LJNVSA",
  "key21": "2rBktyCHNnwJS6y3jAm3H4LuR5ecSFPkZbKcHuaMNiB4nBu5gavCfQaFUN52DUesPibvX5XgVn5KHcENzVNdKrNm",
  "key22": "5znZryNQd7G5q1WExmsH6VpXoREvgkekvfQT7ophJZvLY3ebVFfATKc22TKrfNsySN2BBV28No4pphKpeNRiEST1",
  "key23": "5zSW9uZiQ1HzLdMrceuQ6PsF6N7SvCM5YxeEmMubPqpyGp2nvDJWLjthE9jzLuuxkptRzL7VpMtFRJ1pveMmFEyS",
  "key24": "ux7Cdpo4MKvGUfwgvhHVyeMaeJqQiTGNLPXPTm2w7mFWvoJ7QCAUau2q9G41uyYJUDYiCwbdA6YVjh2rKWwGQo6",
  "key25": "3RTL6K7jDsWsAev424aSzNwtRmcEZA7ZJDBGWzgGGuv9u8xsPMvPSDGNVFTyaTNeqLixJtxzbzcEnyL6httbpciL"
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
