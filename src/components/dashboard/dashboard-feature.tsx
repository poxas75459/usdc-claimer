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
    "62SHbneoD6bvMWFU5dCj8T3G4oqvnAU5szJYGUJpkaxkANgYAHutD717jyhQs7YbTEueDHzKweWUGx88CAtAEkVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JYWjZrFY2f1sksgagJEHv1aLDXcDkHmJvaVoDPQcLNtagkLVWWC4EZ1aS9tY2T3b2nGU4ortvdsX6u9rzZnP6Bv",
  "key1": "2MzY1QA12fF1yKpRa3wYA94dC15xNqY9RAdAg2RYV199vqayiQggUD879pRrvSHr8zNDqMgw1MhjYrhPPWiDyiPS",
  "key2": "3U3X26jyBda3xnecW4qVqiEtRE7zfyYJehoSLACXEG9TT6uRdPUidzEdCr3hkQU5uq8V2UTmX3dtzTbZ7u8WjW3M",
  "key3": "mxvJQcoYr4xNMv5wC3N42665ffodffF92xoFbhZpvKLDkXzMz4ANeESpfh4FtU94hBz5p1nHqdSkdB6A39Rfbgf",
  "key4": "33ivqriBtPmrgpKecV4FFFvAnJryY6xKnSr43BetuWno1Qa6ZsXyuu15N9A9KiTw3iTPjqsX5kmzbB6cYyJGwaZU",
  "key5": "3uYLUpZYmUgxSDbRDvst6M3iGDB6nfMV9PSBGzVU3fcH87cY3674hFqbsPjTXaraLzfX9w39AVatamEuynHacztK",
  "key6": "2L6ewBWDoWwDxxLHtVnZbNTm7vuWYVRZN4PWPvWRYioPyhF5nXisv9TVMVKTS85iC7rKsRdyuMmxyRXUYHZdbQo3",
  "key7": "GaDBqxYbsVFtLvb3kMiwxLxwtxXkwD5JumsYkzxGJEgvqbmNdz639cYC5rPkkWU3w8xoBgZ8k2JimGcv2w9ZGkJ",
  "key8": "5M1wYmB9g4GCtLWySCkD7kfqbrDtKM1FzjgdUE2BYuN9ubH23RrenKuTCjUWgaLrJt2bq3U99EEdW3K72p1Kvrmi",
  "key9": "3HXETYVxjczFfG3WgbubReh6XSwaQG71w3Vh2d5LbhRgnkLjahMQpdaD3cXW826qEKHdEdTiY9MkuYhUxy2XK2yF",
  "key10": "5BCBmZAb9svKrCX2BSs4s7us5yYxgdsMkBLmpFzMiSPNs8Ki1bWLFp9qrPuqQJeNxjzyknkgyDws1QpMbwWfY7zT",
  "key11": "2LkLMCNZ92mpFuUbjdsvaLcVEvBwwQDCEK1hzutS7rfYTcY45ApobfUW1fWZgiWrJUH4FaEDZduM4Vn6WEEgoPeM",
  "key12": "wxBr78YzAXjCW6srau6MiZgi6NgVRmS4u62dDJuat27CT6CnMmAj74ezY3scNDBToRDL8MmRvA9CNAc9N6aXLG5",
  "key13": "PUdNMaVa1Appgc1zerEd95ZV7ZkaNBjDPsHr8pSzXaxmYFYGFnAYd6zpx6YyondYVjdkH7u84fm2o8JJKfbDuy5",
  "key14": "3U1d8SBZWVjwYqvE82CpF1tB1V5C8xXyPnr3N6iuCrPgLSuqvfKTgRTv37Zh2KK9LU75GiNqGVeNjMkWzDS5csn",
  "key15": "2PDTvy5mbjhr2HjMTaS1RmD7h1Aewkjf3JQG28WDfCKUKoLyyxX9JYbPGgDXFWjKrjf15sdQi6PGxbGjqKG2RdYB",
  "key16": "5T1FN2hVzTUU8aHTS6VRnhEFWF8LYf7N3N8siTsiz9KRN1FmA5oCi7ov14dU3jVTewCzoFPDzxxZUJjBmVcsVzjn",
  "key17": "64XfR38PfXkuDRXwdmDaxGw8wBXRpp95aQq1aTWvcE1RgaDxFaKL26fPpG7bFhsaeo9fdRasNJvSsA3Fd9ZsAhFq",
  "key18": "3zQe8YBYUa6W6PVWgjm6QNntiVqxHomk3Z7A2HzvJwbRLDE2JBQfixtx6bb6vWRVN2RX6UWk3EQNZVhMZG2ZyNFJ",
  "key19": "QZ3NyThMHzdxYsQ1RMpu19yVAioi115iHvRJxT7GrnUjhT2ovYqsniRASNUPJQSMQG8bpkkBf9SijE8D166J4A1",
  "key20": "5FE1PS5Mi26Xt7cLh6rbTULEK8hwgKHfZFaGvsZcJJ6bUB9Mi92MzTXVGB5iAELjfBSTWGWMy4o9Bgz62TjMN7n7",
  "key21": "2UWMx5Twh4JzQQ2UUnsDijfM5vjzpkRJnJyFSqDfGvqXf1uhU8NMte97izZW89U3hDZLYabdJEPFkK1GWrwTagFn",
  "key22": "3gP2TecoMcJ6jHigTiVmEspWPtsoChJ1G7UmGQoFoy1UR8mwj5U1ChdoAnph6RRZDqJGuMqmFmfTQmk9rYQipEwh",
  "key23": "4WYyAU6d6bU41nWBEbWgpcQUW3jdv3kTSnm4McUkpnZUUs2T9Ut8JBxREQsVxoTxJRbVUSSJZxxZQ4XhiB2HDR8e",
  "key24": "4i6CmUEo3SAWzUGiH54tENcGPKqMzyR9Ewc4iXTc4zucYxNAxrDAqTmPYXpzrMACBwuVmPHK2nmkMMygsF6Xgssn",
  "key25": "mShvYNtAwTCTnbxNdghEzNu53byqeNbv944XAUaKz7AVqRwsFS1fGq8L5LLGzfGVUkkLZwvTDPkhNGNi7MqDEbf",
  "key26": "4GBsjPZuKu36xBTaaeCH864cNZuZxHCzbh7msUauz8BbhWn9dUJmV4ki8CNtRDBf6FWKqL9zmYgp58FR8GjzbXGs",
  "key27": "3byqG1nEQQfgVJvRirpW9kU8HuokDZBeU7F8Gtxe2pfLYkXubvs443ksgJdMikkHZXbXVFkde5gzxKBdkzWVjXJi",
  "key28": "wuaFbz6qwmoYdRikrUPSfWf4c3grRD8EV2vs8Vee5pmHPwzePrRc14Z4t2fo3dYyBQg6Q3TB6Hnw9d1w9TgLbXo",
  "key29": "WxDdp7zKHUis2pReQKhajumP2sbXEACXFao7vcbbHp8EUqm3Mo63zv4HHXNtdQCW17ZmTiTubAamTCoqbFTNC9E"
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
