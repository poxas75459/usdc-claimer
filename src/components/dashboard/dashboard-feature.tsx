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
    "5nVtYYDcLyaQRayPxwmcCZNhmf5SncCzqLp67uVpq6WMq7VeuS8rb9WzmZY8GsVry9f9nzDhDFdDHWHC47kXP4aP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SwAvuP6Dv3AJhXLw9a82sAubZV5BAdwu98sZqo8s9JgdMsKKUEku5Z6NnE8wNZ6cxNHs1Zu2TiqFEbSFJFpKvzR",
  "key1": "627wZRWvaTa85SygJpyXerXYVeFX1Y7rt5smJy68SJ9od7jgmwLK3KV8FfAqPodJ5EMCBeeQhATor5pFubArSPUP",
  "key2": "3qtpKGtsWcntrjxnDLwXkxUiH5N2DtEsnvvfoPWbr1SsKGYQwmFR3tJGZZY27SfsvRsj8CMRwdq25CixNpe3CG7y",
  "key3": "Y25Pb9SpVA3PzksxRKHEDAn2XPV5tJoSurav76AZtzV8WDM6Ex1CPAhT6wP2tD6KBmBEjrhiAnsHjqAgvzVQGKM",
  "key4": "3HbUtZn5fzuNh8k4GQxcvWNW5cJeFDYmNgYVXi6kvxEUGT5E5TwmxTAPgog9YhiLNWnMeyxj3kT7xmkxkX2DRmSt",
  "key5": "4ft9MmyMM1j1HUHDQRqF47EeuSPDQn6zn36pBEBsQQf8qUyuUPV514V3vvN2qBwnHVisiFU3j7B9CcbqRdVPgR7p",
  "key6": "5Ly1GEivbA55KkDpHojThessxs7jtuCxcmnJ1iYykQKSqeFaCSMNo5baLHxoghqL3zWXBrsHSbdARzjWHYkqbiZC",
  "key7": "53CkGz68wGSDMXLYSfyjbBr7vuUnMHfHr4Zv95qwFcAhSL21X731nrAZewF3b3zpDGdYk7x7gu1L5G8nmSY1B4wW",
  "key8": "2TGigotBhWmF2eeQZnafa4QdUEZvN7So4Lo7dt9YyjWHr8rkPN4LnzmqsjJx5fNFoR63Umku9JFsVj2zq63nN7HZ",
  "key9": "5WUAutVFo9pNDCNYKhLyBkY3gqvcLM2gU8hdPozGpxtmK5Bsar2TokHeG4n62xpnF6BU7Qtw9Ncyo39zP5DA2MwB",
  "key10": "2vpqSSMHdhwaat2DuaxZE7EcAiUDEnmif4pDXEvPoQySk8vkisqNUzC5NTMeEm2hhb3kAcKQwU8ChN6SmEnLKoPj",
  "key11": "3LaZByncib5aESqMd4yfEbQ97eWjsxHrnFtkjYWyzkiyJELNH7m871QtD7s7fTnTiDsjeQ7Gg3za6TfX3BxGjmam",
  "key12": "3eUnvBHaWkWcdZ1JZEFfEDGbBhdaBugLtHQutenfaDZ1gNij68P7RjRAUr6We11QfiokafGoY8mqorLxgNnKiuhZ",
  "key13": "5gJoW6AsnkHdiTwvZz5bFsPCSdmV5q4MJJ9yaBSuvxRzC3r7CdpK5eH3pYwZE8N5F2xepKf3SsQMmyy2Ad8M7CzE",
  "key14": "3ctV4G6cg39FxuSHscZM7hvnnG8x7x1c533TWegp2kyvzk8Qao2siNWLSJT6je31QRV8LxRSaRQrPXAG8QSmyBzg",
  "key15": "5NcQz1c3sfHdeBgjMcwXMmovWXWHVjWWvrqXnWXfNZaS24xbaJ44BwCUQPcVNrfhfeQqnGXSP1QmPKPGkaMFMjW5",
  "key16": "28oXKZynbAaU6nQc37vLFVNVVzAfzM4EPh3Z6fmLtm5hGr3qFYKAHk7bruLC6YdYPAj9hfVhkqvZgr6cJqB6Ne9S",
  "key17": "3N6Esf6ghGQhWSC8fNuxVUwgQuCojHZqRNNNwZ9MkpHYrmfjghFTL7JbcAvHnpNrSsvK6ugsikDXgEB2dniyHxJ2",
  "key18": "3fpJL18YSDuNmAzRBDpdZd5emWYdrGFWwv6XX3Cqam5iuK7m5j7n1NmYjvV9eYbYmJKtN7hHhw8pqD2oytsb1e8q",
  "key19": "JThfJ8PJmvexpHCdrVQRrQpE8b2H3AQZkRp5vMVnNezsaUe4hyUr737EBiBP8PDc9FgrdwAUsRZH4bKCTDJZssg",
  "key20": "3WBHWkYDAX2ot5zsa53xEajsETdN6pk4XkYVPJneb8LCL1bCD4r4bUuewizNXKg4vpx9qxqtEEiZpQmEvsg9eMZm",
  "key21": "3TYQ6nY5urberZV6adXKfRB3wLrpwhqdfGb93LTtg36KASAnjYZcFLpMoMdKr8taGdy2uWmBweR19ibZE4JRDhvt",
  "key22": "4ag29AMzFH797Pon6YSvGTNjcRMx7Qsb6pDQMKRwGCRnguW1EZrE3LoVEuvxrZ29zZnTmHJag7sWufwXFTuQUYm",
  "key23": "2vC7Fg5DvC6RsXgWDZQe4BzY6k7KbpLZF2J9rGo7cATMaaWTzueJaGCELNUNuJdue7ktD6D97j9HYBg1TNG8jAnM",
  "key24": "3JTQFviSbWyQ3Rk1picAqJCHV6m7eZQVeqfYeEV2uLfe73w8myprvhjzBfvSY6ufGe7zrTYX3ievWVvHX749QPKi",
  "key25": "2casMCCm8UovPowvAuSsdfrn1E95nwnoJ3En3sbKSacrQnmneoRFkjAkE7uaeiCoKZ9NKY8TwQTSnCNkTuNk46xS",
  "key26": "3StUw1NMT41bZdfV8ubko7RxL6LEnFZoAhbgemCKoaZnUvUJV6N3NkwfZtDaQK4ENGurw3n5YiVhkhpMax7VsL6R",
  "key27": "4RZxCV2fwmtU6uh6GkpVH1UiLNc27312fnEpDipCsSHZ77npYzQWAQF8tvaSrqG1SascobW1DuM61LMvjxWw6KuV",
  "key28": "5WQKTb6MVS8qHJ3S6Pq14eDJrNrN5bGtQLc5LpHjFPGfcfdRfURJDhCdU1hrinLea5GPzTMfipbTbN8XbFzf4bWP",
  "key29": "47ptq1axpBvnW3ysNGA9SogqgRxHiUYy4i1s5QuUwjVkf3AqxVFbWuhLYQxu1tvQza5vFKYk8SkUPf9VG6xhD4vt"
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
