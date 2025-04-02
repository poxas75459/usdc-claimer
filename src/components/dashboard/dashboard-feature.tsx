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
    "2Cdxq15T415qq2utComhKgWNBCgYVzSY8gBuSJ9wWTapDg7vUiAsXgJp2hABRZrrE4WjtbXQvnjezoGLxj8DQxyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F5QBRR4y1WNkaZXYpMu7wLQqwKkwCYJjUFpxcLUTWcxjui11o7BHoU3Bv33U3sjUyYJTYWNT4bFr2W4JnhHrDu7",
  "key1": "5Vdc6VcKUbAASFgUySgQupF5FtBzpP3cSztYrizZoFUQsXurpQ2NFywvCF8DSiggm5A9C3Ta4EBkVMTJz1sYMPf9",
  "key2": "2XRoDBPMN9EwCybgbnu7NRUhTgZtuGZicL14XTiccSCFGvvdKVK3p5WYvc2kpuzRdyr38B1SHLawLw8bykRxcu31",
  "key3": "2Uc8XuYxh1yu8j2ayJuTeezwz2MdrMVxhhsyy7K31skntK5mgdG6e9f51tqvG5nnQofGfPFajTBAfqK3Y8FdtZnt",
  "key4": "4oqHCpHkpZMyn5N3cvw3zEw5XDuRhMW2XAyVPwtaTitEPGfzG4cxtp4gwCeh4GUuDWvdffcu266LPTsP6R5GSoJS",
  "key5": "3A98tvjMWX26xM7gpGBAknu4kHBzfgxqS2H3QasfwWW6A546TLYqYpvyJgB2N2vobhr833dvaAxjY59LMMYPBadv",
  "key6": "2V1SjGSWFaVXWZeEuJpgYiqSvHEFENr9wZvSCwC8GULJUBsSo8Ts4cWsny3ENfmA1znFfSL42RoieerAmuM3ageM",
  "key7": "4G3SZRSgYDorxLyZPpUuNqESjMDWF17kUEpcExrnwtCFGCXjvMunugrR1P6pjhYz6xVh2bZKtAAkPQHjtA71PH9M",
  "key8": "2oUumoJQ1Ye6FResN6q78Cxx7shptEfoXKXttrbSoY5LXfLdeqoBMhVcpFtqnj8srcSeKsQmPUXzAUfPXGACB6qS",
  "key9": "45SKsxUhoivKCD6JnMo6twEh7G9FhKKJrmM9ELQuxACzi9s6ZTetB4LMDGsXaK9ieqPhYo3jGNb4HXm6EjNqWXoN",
  "key10": "2pJn7fHu7aQSb9gC5Acr1jTtnKTu6duh7xSiYBC5Dsm2KWPBsXC9afjg17cuzo7xj2ySpbRhbc9B2imXR9Xck6Vm",
  "key11": "o6BS1X9s7wzNy6SNc9wEyHYU7nRWzx6muin5StjAv9podjiE5Z6kfKQfFzjJzHAPXR4DKzBDaLEdz3bsiFyUqir",
  "key12": "qHCVPVs4StMFPUJ5jk549tqrv7NJyGvVDnuPM7r93px3PCCd85wzhUyTQt2e6N44k4VqnhFtaYWDGB9N7U4wFaG",
  "key13": "5B95PxnQqWMKnwbMo5y3aXGbjaouk6RQrttrMiLiTLhGjPguEx3m7G97frocnwRpAu7eUPfbYys3JWF9143dvPGx",
  "key14": "4UjbNSSDpKurdXTZvzwdENg5q2oUQdaBwrzTAjnxC9vZAHmZr7aTqWG3WLekQLrrfaprWmB6nFJ78JrhgdidFtmE",
  "key15": "2QiYVtGCvqTrHATW7FibTrThyR3oSc5517tacZcKhPWTL4ugweMxKCytYmpcgWAWJQdSN1jKyQeWMZCY1pEr6AA1",
  "key16": "2u7d57RLW88bZDgcoyNQZRckAAZ48FhmXZNxthiVUs5wXL3esTTEo9TLS1yigDTQYqDBSnPzLciC6EZhjnCYRJPM",
  "key17": "4CujpzGDToqri7vmdAChvcCyPDmPZu4hBqbVsNV3MZnxjUFvknWAREaJkio7f3hK2MTETacn1XVJaeioSnoJww1j",
  "key18": "2j1ohMNj6o3eQcNBSfNwzuMisB6SBdsfzzL9bGAPVhcjHpBsoHeSj1JydqcfQwPq4L4c5jzM5BDhrpMm1j52eJ7q",
  "key19": "5d6ANKrvsVua8eGir9Mo9kQNCBSaQc48p4Pkawux7riYNpnK8vLqxffGukTHztHyN7UzqiumasgerTkuqexkk3mJ",
  "key20": "5kE7z1nMgTfe1FhuJZq8TYFXqq4nhJEH7tzeP9D1Tfrumru31VcgapvMiLDWCP6bF97bwRooMsXmV3jCbERsWT9Q",
  "key21": "5zmCS2P4Wypz18JFcFYQPxobstr57goFnu1YBUYGM5qxqsSyEPCNjT5QA9njS4jHSNLprrpScjYLXodyYTB8KbaT",
  "key22": "XEKvKkKJzxNexxfrBwjpiNGtPSLjAHHDtCnQXbnyUAodk6kv2NZwpfxnSXdEuC7APr1xcoimnMNHWvw8gWn8txT",
  "key23": "5MjNfdD3PXCex63cbLdnNSTN6xTd9AxXnHLY1AtX5VmoU9QcAD1V3URPu8AGg7CXdHnsYNj81w7RBpZkxRBpS2iv",
  "key24": "9aG4raB5iHx7TkRoukso9h2egYx3TQLBsZ87sCFEjP3HirDx3ipsrk7ydkVYzfmbBPtfq4UvbdZR4B1WvJMft1D",
  "key25": "4Yk7MdiCZrLDRbfBPcpPf5jstjBtjD5L2W2BDX4PNYTyjwDr4iQiior9hQQeKQCgMi4A5tKnaMihA7fy5yAZc1HD",
  "key26": "4Xt74qJdfaLgGYp8VFC5X8KtrgTSc7b9UG1Zris8SvF1bkqXayZ2j5gjFcG4HQzxBuiDV8Nzz3WevYFN2S17uh2Q",
  "key27": "3uqsq7HcykTPcTQMVdMnHEHWXYHWe8Jiq1wFJdxMUvnrP36mbs5QDcfi4zMQXxUFizhLqiZeEh3CmTddKWwh22TG",
  "key28": "332bW7jwgibESFAYhRDBHxNijPvnw5ZYnGzJcegPPPhVy6g8AgPGr4sjhxNKFX4KrhX18Tiny2Jz1mdsWQaXen8r",
  "key29": "ZsSWysw1bx7WyKCyFE2gDVCFPuenrK69zsTNdGBrexDY4uPuMenRGcS5rvqGajfC479iEdtK98jhCh21WtsDftD",
  "key30": "3Ra9hUtGWmZK7eHyVDyWciiTasALgDhT2gizmcqLkjo8Twm4jfEqqfY8CCsJxZqYrpbU9jrrENn5Sw2RDTiZvL1C",
  "key31": "3ErBRZbr19nqPcvHizh27vsf9ZYDiNT7dck9xJbmw5vbRkePZZnjLSojHuoWjCEjhzva2cNajx8qzJGmTR2A1AYJ",
  "key32": "279iveZcfWhjvsz8dEY6o6AcJ4skCULBDe27nUefuuahmoqNr8UH2jB6VoU8cymbjb6tktxyCNJCfwHusre8qQ7A",
  "key33": "4QDErquB8ufLnXK8QEyGnAVAwtbYE4UWZ2SZDrhFCpdhKvVv9memVVHMUEyZRq2oT5XWuUYNZ5WUJC85AtfJZe18",
  "key34": "5fB1Lprrb3aE1sV7eViQipDM6BE9NCnyQyGwW2mg16zZB9zZ6VdsQc5S5akLwWY1YNvRe6FqTGycbZcwiyuSB6xG",
  "key35": "2nk9jBeK1GbqAJSTmGcrKUQuCTUMDmu1L8RvRF5sMNBxxBAdKKY9FnhKBbknFih1obM6sWCNXK9GQ9jfeYefjZ45",
  "key36": "5EjFq39UGTjz9ZToLfUAYi6JQaxeuposLmdiBmJpbZX4PYfLVj8KpWvSkc9bZgoUjVx7rNv7F5g3ZNzxLEoGyyae",
  "key37": "AbrxaWyWWNjQkcmDzDTxF7RY3rN992DMA5Gxmfh4np3ieeEtdUGQUtMVsNQHmVqWHPteMe72PeRKADna2KgyWn2",
  "key38": "4j3LfxXzySsuQBHJGpSJ6ZqfPgRwasvc5wmjfNjKcR8A8KjWqqV2qo2fpRr9X2ebVZQPCEbMuwNdghF6E198hqfs",
  "key39": "5YfrScxdJiTx56bxTYEia7Xk7YugfpnLdHt8xEY4pZzpDAFFvzrtZXE3NSnHhrKJ4eruhKRHTQUvtvghM947K7fT"
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
