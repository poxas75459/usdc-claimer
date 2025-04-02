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
    "rnZvHisTLkLrvrRYVks8uZ3V9fj2dbu7W6fBuWRjfLzUPUvBQ6rsAMVavLbRJomHWdPZsYvrLdr7dFot5sLRnQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31P1bRLMHyebs8UoQwYh75DcteNVKC3sbCdizU5bhmdhxbfdF9fgmvdsCjBgf6EK3eNK6Ysf63RUKndgct87cexM",
  "key1": "i2SaftDJVHxthiym9ai5So9KbiLrmWZXEM6EBKHJpkVNKpezXZbfanZssHyw7wExgVD2hyFBP5MyZYWUw7L2YqS",
  "key2": "64qZUgFXfjrKTwJXrcpgtNF55dmVUrCyA7ugeL9c5bpVnduLix9Wy1HL84YofEFKGsbzVkMEqcnES9YKgvZVpm6a",
  "key3": "55upBhwRxxgJ6j9QsYuru7DrUDaugW1T5CtZhP1J1BCo9ScC53cxaoJv3qABapUbAiXA9GeAy2uEKQpKc2crDcTq",
  "key4": "2cuRGfkaFwYLLB8PH6WTe8H3KjVyZkRLjgjafTQPCHRVwX8rK78f9hCUXFbcsmAamN2PcBTFPbPcu7AG5EdHvC9Y",
  "key5": "4s6LdtayFjDBv7JPtyaHmxyTp1twJARUmSSyDbBrEEJXpMPAM6r2HXM9nBewS65N3ytd2hrtfq2jxn28gdz6Xqrf",
  "key6": "3wWxKYA8HVu7XLsXA6MC8yP7nCxkgt7fZtTzcBmHVCE4cGw4BAYfw4ywReeSWAhRqfhTSx1DbuvRjqx82gaHyzv2",
  "key7": "3zhy8G6tFfEzpwsxd85Z3MGKStbCGhNCtqwD7J5QJN1oMJiJEj6782N2AAAzYyRT9gAi5YT4ccwW9WBupGPPkF9s",
  "key8": "2S8pRosdhgdB3purBS3RnnP95ZDELDjSzVdSr9CUqejZ3o7DPXGJf9e5pegLgs8S6rFhMQPxQrthGTp6gy3E2PX1",
  "key9": "5yR9NgALmebnS6MCnarohrEJ6CYKvHcpsUeHNms4v3z3CeD5P9ZXx3QvyoqxHpCjUDtSKAPUQesRnBW2WLutaPNY",
  "key10": "2KFY7LPoM66qrrt8Fg2ZHCqqjxo5hfdSr5H2PntE3SwM6Y85jrz5jy9RVFJNZ31U1W7mBh5yh2SZGwQ6r4gnqCPd",
  "key11": "4N6S3NwKR76zH4ZYXxjtZ1Wawp28ogrbpJZk2uwQKaQ7nyGpFShXR4oMaaaLknnLATbksVGocWZQ4xnpQqXfhvNP",
  "key12": "271MTJ5k4GGF4rpb5Xkks4KybKhbgRYuia5tcBTPsNZzbiHsHYCbcvdtsCyycBk58nQKMfySo3E5anUvJKd8noKG",
  "key13": "46a8goS6u47wN6Yr9AXc4rfgfbe749XMkkb3j9vWmiHRrBChjJqxaxYzaCZCkXnDkxJUENK3ekFNstVg256Ddv3m",
  "key14": "2YSXBVb4PPCRHXeYh9oLk1g6p5w99g1uYW17J2H3tEPx7ADsh73FG3oN6FrZea8BYDG9zLXG3agVWCxxDgfRyJTV",
  "key15": "49bPoP9b7qBpK5vfapDTCmNFtv8LrRkNDgLcB5MXpRyPCoCu58GJjnzTqK6fKuigkZis9VFXoFPCZaQsr9nV5oDz",
  "key16": "4njjLyYXqc8dmbCAySFjei1MDqAtT7aQo4mk1H824zSjw4nwu8xDz1FxZ5BsyPMj7XLk1jy3ioXrxjyfSq1vqdBX",
  "key17": "5RVTysRoYeYnSEq6kEJjKN1ABK32G4wPKfHastvMdwKM6WEEufGjNFm6Vzwcj5vD4QZ7fxP4jg9VPRXsw5LVooAC",
  "key18": "3Ca2eo5mP7W4TizshjX5fPXyPP4Rfkq7XtEs8V9qWXcsE16QFbEmLohwsPPGt3coQFEM4xxhc8j5Lo1QjToMWdZX",
  "key19": "5wnYHhEbPeP2itb3XEgLxmW8WBu7G2zCuZoiZrdC7KVVTZvCwuyzj3gj7BPozfkKqQJuWCxSgLrAuUNmz8wfjwsa",
  "key20": "3MExZQBeGbPFDAfzXLXMYZ2WW2kixhRUbNPJ1bZ3Hcf1eomgj7CBJ6BXWPnZysgwtG2Lh4BLVCag8GcjJ8U4oDtM",
  "key21": "61nh39CC52ZH3rVFoRfWFX3XdgqGpjkFtsLJvmxrw7pNfx67LLTDXoeCypw5vxrXnZZnSRcXeC9En8E8FED88w8x",
  "key22": "2CM4FaMneX6MYgxKJjZK4AWcj4vXxHqbAW1DJeng3FPmYiKj5WNveuSVG7CySGVwnkwcwGAmobNJm8sNDx2moTh6",
  "key23": "5t3YybdF7D7zUgyKtVGAuGENyZNqdYReGKG3VGPss1JNyxRC9CMHnAEPGW5wbHTs2wsHp7k9xUpCubYPzFMovAap",
  "key24": "5MQaP9fvPDdgisoAjcuGrZ8c2yfakUFxQfqLjTPkdYXB7iZjvSzsrYG1HufrCyPsZcMkaP3tVSbUfqesfbShFu5r",
  "key25": "5gCiCvVjfXqRnZPPtEcMTXHwFqopuQzZPJXfe5xmxCWVQzGF2XUshnVGTYDcQkpoBMzAvaRFkYzMVtmeFe8rg1UD",
  "key26": "Lw6U6mAKbhNUi2NDybTNXgUCvcZNr5Msatp6D2pqBWWyksu7rTAu24QakXfCLzhPjYRSKstpgZeR6kzxTgwLwFg",
  "key27": "3A5QF97igRzzWGZWU9PYNfCZemguTafN8pkpnuV64XzJ87eDXD6F84HxTHMCt5QsxNcVkW1mPRDRSZYJ9qATXXBC",
  "key28": "45MHveyHSCH277x93PihJVJtWnzuHLMGyURzgEuB9LTQFZVGPw7Bg54jVbYYMSQ22RrBmyE22YdFWLxhcqp7ARLd",
  "key29": "4YFK6e7sMStM1xheQjycYcPnm9rLSjtt3pnZyBChjCqxjA4npdL9ENcFDFB62CSXQnDFTArAVzQybTbmuiyTKPrj",
  "key30": "2qCgdnKjVTioD8L8bAbMqRFNsURMRNFWuShZEP9y5r4iiAysWtBDY7GB3Chyjk5VKK1HgviXduyt6JChusmYiLqC"
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
