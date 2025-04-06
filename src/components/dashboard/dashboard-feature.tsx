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
    "5jevqGUvfpQ5p7hKEKNfJ9rEpEvuTrawXmwt4vRvMXt3mW1i1ztw4Mz57bmZR4HRX1atYTEBWgC76AgWgGqkzQfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dvc4R48XL7pnLGPy8MrEv9xyA2XFw4yWtUVmHnjiKWrGR64KKhexxV8Cgo1oy83PS4jVBhdbZEH6UC8JfTsw1yA",
  "key1": "3rsUF8NWdTFHftfqzLSpji1q4zfCnQ864UWLxP6HLREcLucZG9NmCVnHAfmQzb7WmSKMPzX6koSDRPRifkgpDeR2",
  "key2": "2PWE1FbsRJsabJaBXRjbGkhiiCqBH4yYiZwRLAi6FK4zMASc2yefG8zgudwD8aFa8mwyBbsxnCza5cibEcJPUVSx",
  "key3": "3tkPo4L6vUkGipbn1BderrEP7qTnNf3nPgyQdK2fKNSf2iTqG3kgH7YWgB3TT92doPTwWi3sJxBugtU2srSwcG3W",
  "key4": "5MwnZ87VJgWHWYA9PmaFY7r1mekX4KLWGaqdbWo1NEZdDqg9Q9hEDw5GmVx6mzMPPNnL9KoVou4WzJzWRqsr1ooR",
  "key5": "3gwUpbKN1t5W8aRgWxkWXoETw7DyvuKED9n8mSXdMsGwJxuA2rqS47hNfknYGmFAcjhDG18jjEsm2NfnoabZSjX9",
  "key6": "5QEkMQZAw4Pc2GDRvgWLzwonL5oKLJwugXa5yX3cfMSj6hdXJYTfkswyMqiQ62YR3hK74fV33TFcceNEc8neiidB",
  "key7": "zeKTDXFnMDQf7koPv9SkEnjp2LfwvAM24NkTF1f6hTauCEKH9pRK8hxforT7jfALYi3AqWUen54efSG1Z6C62Gm",
  "key8": "3Wj4Y5bNRmsyU9QsWnoUYcNisPAmvAEsVDACrVhHgQCkVV5pPCewe4tTukiVbuZ7EENdd1QWAnMq8uSY1urmdGuL",
  "key9": "paaN37GXqq41knczJiwjuLVKDtQQPKk4k3xmT6YW1tLKJuibsbUG7L3b44wcqwNPwtvrNFHGCPkfuhcxt7D8FAP",
  "key10": "w1J7SGeeLzvXvz8KFuK1Nv3NpneDJbM8HXyDUXAHPqW51BwDCXLjYmGxKGzfXiEYjVFGwSkrodynbVsYaEFfCKK",
  "key11": "5fsrwU8BpjW2oWvdBqnFNBBty8Dis16Aw7vjRTjBNAJUrAdHqbrZtb9YBxPLpkSLDb5Ji6GwGNaXJL6Vsup2RHWJ",
  "key12": "4NqLBov5F14Gwfyi4nPeipmowvG7pUMx5DxKPYpdmE97i6oe6nm5ChkXh1TwsWpKyk4KJeAueeriMtcihzNkHZAd",
  "key13": "61ReoweMpyKxDpkCNz3W7oL7KmdkSEvB1r6sfCcZAzQLoNGdUvyD8tfRiBkzGr6oYWtPVvvkHfTEhBBTAVmsv2fT",
  "key14": "MH9n4bmzbvK9e64QUnTWnuBf2vPDE4tpxvJyieh4LY2A9LqVbGiPMbRsCrkjvwgsK2YeE78Djzvczsi9ytVY2Zx",
  "key15": "3zRX3ocGvFvQx2XX5VYqAgbLVgoxfKM5a7i69j9qSmvWCvQQ7Jio2Y6UFbZsRDJPDU31E6p53nwbQwpY5hK9jwBZ",
  "key16": "33eJCzNH8wjqjZTyuiY1s1EB1Zgx3MTdh1iyyLGmgLy3Xv85AxVj8fhejmqxDfWkycGRcR9m6Ww2bddByt6uw7DW",
  "key17": "Km9gg66TuKxJjKsHcPcHdk5cvPYcvMyQNaEtEdg7gfoBWkMMnkRq7CWuTnr5qfHJaZQG8nFmQUUJL5CG9xrxED4",
  "key18": "3Y21Zyjafc5bahFGcgXVaHpxwuFTYSzPYAXyD7G1WjDaQ1mRTtMr7kU2ZqkuM4nfgnzDeXmxrTLJJhzrkQRDAPhh",
  "key19": "2cvJ3HpWf6LEPGvx3xiEbTRLPmko1fGXX4CsQCdtny2Xb2qSMovksUvEJPLbcxLNoiJJcdECA5fbXD4L5A7m1vrV",
  "key20": "3Mi8Jsqeve278hQYsyN6kyup6zGyJTpeEW7pvnPnnR4pd2cu42CjzSZUatXS6wWpUcaqbitPGVE95tFhNuQGBMie",
  "key21": "3dy3tSShYbS5BmUPiF78pwumeympRga4JC5nMxAbX53J3z8BYsbMZfkD28GkjvX6JF4RbY2yUR6Th4akFeYWwryb",
  "key22": "3bLYZQW9fQakMxXozpQnXfcCF6ZGVat4TnyVx3h7SdUY7pTk1c8cDWPG5N4aw8ETFL2MLJJ2XuKfMAo3RRzU9vZJ",
  "key23": "3waadUbmJUCs9DVdSJdEXaR5ha1zHsbg4fbzPbQE7HUukUBYoBNNXjhCTcSGjQtT8Zpmu2rRHi7LpxKwLgV2sVhG",
  "key24": "3TsJwLSkPCYQvUshBVg5mRKGkfrQRQeuEJSQYM7XwSgP7Hoso4JJTyDn9YfXjBwHiPufXY7xDHDeUsSbdD8jeaJn",
  "key25": "5iJQVVvYqtF7rmyxx96sr4h49TR6CqwLkKzAbZXn65neZaodQtnQnwkrZst6o7mygx2BnD8K6eXcw5myxLvdNNQC",
  "key26": "59s3SLbNjdACtE5955kAoU5jDuAG8FyvFJm5eZU2ApCHvQ3nTwEooqEsnxbihKMxwpWJKXm97q4e4a3zFpxTKcyZ",
  "key27": "27GixhceYiCgWsJM84Myc2Jq15FVY4ywARqPzBbsJ3XKRzw7VSJKNvmke8zKETwZfuge6TMcyYjGdKBjmGSn7cDy",
  "key28": "4pgCQRuk6LJ6FBJcWR1kipfzeg4Wju13zg4e9tZs1b6zainYtmZU9L9y1hYqjCGm4rQ7Ag2bTb2b96e8rRJs4G6",
  "key29": "4yxnhhJjAt9TF8KBw8GmixAb264mYgR8Jdph6fEVMVjhmL97cpcuyBgLybQQR8UKCXNNHSumv8HASfg4rujbaSrv",
  "key30": "2rqsvpisCPE759ENcApDuEu2ae2u4SyQt5qKY6sr9z3hswJwysxFi5ZKCpYMSY6ZXeAaqysqywwndPPKLbcxv57f",
  "key31": "2gdVBCCQ861z9HojGhNrRRuy816pTZtDSr7DKmtvPkRAKGdUFn1cPKi3KED7fzPfhzE8HDmvKCQjZXxnDK3Gv26m",
  "key32": "5FfbukJuWPe5m4H1kauvS8HtpzWeJevx3nZ7UCTD8kmr4NRzQomSmAFCP3wNUy4HPjimGC7bhSxwRpXzTwYqCoRp",
  "key33": "4nzAE9h7RqTWameN9LZrw3Zpk3RZuYJyyyRfhMTU7b3k7Vi5mMSE2YRWptUajzvUiqLiPRyoppwmqCRKmzh3HnrN"
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
