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
    "3SMtkgtDuxe6bjH52BNGFSF8rCpdyvPSiFpACf4EZwuushmV8UABJYQz9WhPjSu7EYNcx9Vfx2JqLSiPHEwgVbEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFA4AW43tRy461G8wKVyeX3Rar1j68xVeVsdzaeBuFJginbvAvUdxv7RGN5mpEoBc8BQmoxULs3JhwbkbBJZDig",
  "key1": "49xL4pdDvg4uVTcmsPUfjd5itbJv3pDXRkDsuKcyfRZYRCGqXHSaRvkAL5EXbBPSxsSovG8eovMv6ZJk2wLGap6m",
  "key2": "58PgkFVcsfWDYxeHLAEWBKV19xgomZTQfFtndwUFxgehcWPzyE6qKE4eVi2XxS1fMmrYrZ4r8m7FZmLgrs66wNZb",
  "key3": "3ij26qbSueLSa1q6ypgZFAD9xHePxy5EKgqqHTBMPw1nBCXfVgCPqwwLPuKBPdTxgQDysmpP4PKTai2xRPZrN4bN",
  "key4": "2kVyQmkYh36JQFycHbSB13Zjz1ieJDQdueNKdDiLcDkjx8msM1WvZDYtsiJVNa6fQw98gA6cfLTAV9eWUTm4ggat",
  "key5": "5mkxfVd6avoHoRdv77bH35Bo3wfJtksCAg5URbRpJEpDrdoKfksLHsqFDEeHSDJwoXNNMNkMb5AKFF4MxB3Q1NzW",
  "key6": "5EY3QCtUSYkmq23ZU8SJeXSvGmMXdz9vw9ec8KqM2fqxjNmLavdg4BTgoEVyxfcTF9DXhMbSweUn7amGXDWjBv84",
  "key7": "4qJ3ZFM17e2X6cpodat2qYou5SPvvAZBdetDUy2Xm68vQR7SP3NUNjL5yMKJFxm5hddbKYqfGtwCaMHSo1Xk84ss",
  "key8": "5DuUQyf8dmMbqvYWQFxenLgCSVjyXTYSyWTZLKGCcNkqptfzu5VrC5BimjLpxREt6uXrSdZ6d4YsF81hZfZ71Yf9",
  "key9": "CvHT8wqWFLXaEuKtZxFD8VHK9EwAdt9uJBrQoKzd1SBaJnJXVQrL2BA6gzhmTXAKAyvNSQ7dqWtcHHCmQF77dn5",
  "key10": "64pdE1rMqwAuHZ8a9hU4NgRtv9Q3Vve1TU6pF4XproEKCVbTWbKkcHVHkCCGbqMo8ifPb4KtxbwuzrWUQXeSgwtv",
  "key11": "2HQDZyfvuyVd72Geomm3a9U7ciBt78QcJkgvDbGE8sGZsU7Cwi6KN5ixdrKCHvZnAa79MMxzEiTTj2g5MiHUTups",
  "key12": "59XERQEUBRHfaY7YncRqfLzvCTQs8hkzMNEnwC9vapNEJPd5speDKiqbquEKirMXg4F9JWPHFjQAx8tZoKDwC6rq",
  "key13": "2HDY1Rnv6GjsaH8KEUyXpovpaW3dDQTp1q1Rb8YiGF3bvB2Ya7bsB84BE6QdQXkWTLTDsYiKbMiJBdBDUJtyx58s",
  "key14": "54KDPxWnNzQXJTYd2XwfgPEqeQfR2NgpW5oA5CsWgrc7uaB3cmcHYLtjN55CoJrBWQuLXgu4c8yQvMTB4eUBkzRj",
  "key15": "Z2jcXsLhqao6utfoed761argcqFwiQPp9quPg6FcS6ZYvrNpwq2tyQCZCkyZTJYChfz7L99mMkAe15KjuCJuTL6",
  "key16": "2abWnaVMQ8fFf3aEiL3N7jQ3kFrHDgW7y83zEpnzuVUMZmmNEqq5oE9e9etkWpirhpDBNj5ZanJ8YVcEzBB41deA",
  "key17": "54g4qvroKVrikATRGvhhX49R8GUR5n2LeC8oyunuT67pyQW7EmVQ3sMbZ5msXhfMHLA65MKynU9ZEDaz1FiG9zq2",
  "key18": "VacTaPEHBSi3paR4e7GxZS5V4K39Duh2BCu4QJz1AmoYxDiJKxTEGWj3evtQZTMvtTToorq7ypSWLLZLfxUCMWN",
  "key19": "3G9TGdySoWnbccVqJs1a7GyPzDeLseUyqYBwWdreFcmJhWhjfTbX9PFcTBAiVbyfwkcXnvD45iJYS5E5UeCcP4RM",
  "key20": "2ZGKSJMe1TzLF8WnBcFibLzritqATNVVuVAb4k8EQJ12NhqARAswwi15HH3MDT2wKAGCAyXMtWxa2tfvL6r1JjdH",
  "key21": "2m3mmf3Q94ut5ZsfBqTcdP71ZFBA1uqs718CrbUgvR6JTCvyJy6AoukE2hixJCHTFt7HXHMUQNneoaJmVsLbQ7SV",
  "key22": "46X4UDqGHNpAbqwZTDvzoTmpxwxkLKyF6ZefwsKC6G3FudYqoBqVaRPbpbxEdjJDaRrmKQYCBfA2eRHtGygecmvp",
  "key23": "2KodSoT9rnWP1wwFuR87vXByoL9Wwk59jbkJoWM1pvVTB6qccjhqqhAxcJPm8tFbiWpvUyapBXT2g1AvuFA23Abh",
  "key24": "2wtkQXeF6kTMM53bQFhm861wTLpd6TorCbrJ4yKVKMQxDzNmmyRugc7VtBf1VAJ2cKjjHVyN7zPdaKzS6RurokbJ"
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
