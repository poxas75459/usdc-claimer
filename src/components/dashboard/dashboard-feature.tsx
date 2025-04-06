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
    "39Rsnwbgcku5VSRyd7etFamw51hKSwhcBGVYMbC5U6UxZyUoT5SUApecRF4aNw8rS94uQ19FHaUM3sEDsD3uqFXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "253LePDjAdvgSpgfgRrTDN5u1fUEjgc6t3TVkrVC3GjkV5GRut3arnpqUrk88zyxDTxzYatGj6zskkjaBgRD2She",
  "key1": "n1LWFfHpf7rS35VT2evieERBAxK8QUt3szB5HNUAVHoGBUT4MxvyhKigwW1Jqq2DqVzNXACgkXYMxcTFbuKDfv4",
  "key2": "5BhqWLfcUXgoWY4Q73T4VkwMPBs4L8GXZ3uxEkwBeaKfq7aAh5APHvvbYEAQ1mrfBZwYzuLMmH5eFMFK9LmJ8Xqf",
  "key3": "3NvcvXFTdUpC3heEPGmknL9LSNnFaoDBUckMXyKAGNw3nriCttynsFhFBJTWoJo8kYQ15UTcZGMVBqcTqhduCcHb",
  "key4": "htLteso98HgcuGwV2rvEfCUgaSjmrxJVbxN7aVf2tqB4Qv4zNaBfnQ31BpZVi44v7qLatsSqvSfc6hmYTmueb3Q",
  "key5": "Ug2ucZHx97U6oaUrLgs29z5X5C6jjue5g6p5QKMyg8X24MhXXDM1VjfErwivXasz218RHXgnKX1pHehuqoGiPa6",
  "key6": "U184JC1qAp3nzCu4zVBt2zQGMSGZr7djnfjZ46hUZtLQhsNCiHiotdw2SRiWHbnwa8Vt4N4aPRd26NqPBAt8SDL",
  "key7": "5XggA8V7n5JvY4f3QmZ9Qs6R81PhLpZh25KBvtFdMShTiL1XhBxtnWQaQiC9H4Q47Tv9pHdS3o7FR9kf7XbDUhh2",
  "key8": "39Za2hD1TyBWVEtaMwfskwy62yfBJmB8K7XeF8Zz34gkZTsmuoiUUpy13LRHNJSHxhZNGvs5xNPxfUSjUniBcyxy",
  "key9": "4qVCfHXKVvaG78Ct1jbWNvrxr1mMNCqfwyBwNNnyLd54ArUenC2ZiR3ugVrrzX2mByWzA73rRrvRMGHN2EzBtfNQ",
  "key10": "4AeWMBthfJNYgWrnZuT8DgP7avKqRXGUoAdD5zniUPuGRvLELY3WiDu8TZtUfRMTQBEvXatZaSoWKiR5VG11Hmr3",
  "key11": "3qLoyywZBtPATpRNbtbQJ6kQZ3TpDf5gjd4KjJJZ1MxHAwbVhnWTSWLmj4v6646ShE3b6FTxYUe2dTR2DjKaX6p",
  "key12": "3Aa2N3nianXztjCtJ6NNGc1PznmSJ9VAeRKSbdGSgDYtzrWdbmTy3rGPVCvZ4wq6TsxCbYgdUw4NwFrPEYSpB3xL",
  "key13": "67db5DcvKycdzDarZ6pLnkZqhHRPUwT1GcqW9v4tk25hnfbEZECMdTjpEAs5j4FFJoxQAQ8EuMycrWhtYDJQW36N",
  "key14": "2ryabbRRXVLDnYgUGh925ZexVshNVH4WGrhfXQd2Z53U1zmwUfiX8yVN2yT9ujf1nFXv4HZqiLwj69ooS3upgED8",
  "key15": "5cT6zpfo73JCe8UyBuA5M41k1RvqjeMUXrKEW3jZzD1xNkDLRvbYuvnMPz3XyUzvEEvDECpeGMufWCDLHwofrYVf",
  "key16": "xvHL7CgNaHqCrDixigcxcwVo2d8PQqm29SmNYheuYHh17oyrrww4mwrC4f6Q1ZSv79TjFkPhZaBh9PK6u3zGLQC",
  "key17": "2RW1MmE1dZQqJYaV6xLKk7JDvG2yz8nVcmb6zYi5eHLzQHJLWCsPFrF2SsAj8ATBU5yYxRqcV3N96fB1V4qPozqB",
  "key18": "5WHNy1RsGsrUftJFjNctxPpiwKuykaaPnh4GrRX1K3DQAPADbLSPWrWxVoi8LSck9dLnKZVit49k8nRfpRzg2PMa",
  "key19": "4yiKQrPwSnNaFg5ZDvoFzcAk62jfKgCRreg1Mxeet79hbgmrRkjrKadVzYfQrixzwt5Rv6cjgrBZog4WdMT5yCCq",
  "key20": "4KkBvGHBdLFhEivZwAcozRHAFo1YWstcBudoCGtY632AUMFZF8iTh3ByWj8La4oZ7AEvypkNPRn4KkN8U5iRiGDZ",
  "key21": "3DYWKJiA7u3sfGvFpkevMQF1keD81XUYNPyWcgfURMsCVEk7jzRrGcdWJndbbdbNfCVAAxtJRPaKUupvBrMiEs6m",
  "key22": "5XuGaRRhnouFbGx8vuJtfkrXdCTag3DzjJ6LTdxQDP4vBXgAnu9k1u2F6ZB7KEFhutTyC3Nea7seadVAVik56LGN",
  "key23": "2BP2h7yGAx5Lx5hpWocsComabT5pCUYiYM5Y1rpi84LvcK8kjgG8L5R9qrB1z9QEj6L9m9H7F3c18eAcFpBNQVdd",
  "key24": "rdiy3BSJ1K6276HsQ6nyJFJNEHdDKj1VMpcjY3nEjrNrEoiTjmb9gTPtCKv4K54eA3Gkw6EyG8RQjZkvS3PFbKB",
  "key25": "5TchLWWmLHmgJCZgoEoiXpKZQutyxBAgLzKjzCN3357PjdcV7Fi5CbcvWc3EV7MQJVT6Hg1J3nSt73QwEgnbKTDJ",
  "key26": "3S98U7o1gXZKf95JtPtxkPQx4PPzdSNQTMuX2rANTYEJDnQMPBaR9ir2Ls8bmJZy9DmibZLBe7kPfV8TBF9cQFjy",
  "key27": "4fMY9FhNVSoNZP8JZS9m6nNgm2CN9Rat6VvNWCR7wVfFTtzEVgRHq49kMpjGTZiHqWUUSMUD6VWnrWPPjQxgGBjm",
  "key28": "29RdgrLezwCY7PuktSd5LdyRxTg9Xd23KGX2eCREbnaVREup6CfshTr64iuiDvGiAShggaG4z9jEUQQwE73bNyjT",
  "key29": "kMz5SPAXiReUQnDWdwdfxooUL5GjfHSk9pLLig7wGP66BXtXu8vWCA4PXz2GM8evzFKKF82SLddgZEnE1ddPUvD",
  "key30": "4ZGwPY9RCsGUgtU1DzDiZFvtyEw3Q3aLPfabJc1hRteKrZgZyNkaWaKactotY6y6tCo4uwrZ8kB5bFbtbCtEvr79",
  "key31": "4eBA1ThafSQojnJw3ShhNpLpWEBSJegxi19zVMf71JaGndE9ynhf1Qbjsn5YTJ8zGE5LjFHjkz3doCJzQJHk4B1E",
  "key32": "45uNcG6kfWA18kZHj28A57RTp4VTvf7ggpF8fAi8wXS6ua4EGNFjHFVLtXpzhnfTcpAuMN1e7Lc8mwyeFooNC9f9",
  "key33": "63gTcaV1itmMsbqiZgWvFVKD8ZYMFPHKELu6PCjW3biXktWtnKebR7ajnCCSSE2oDUoMm9qcsG9Mjmtjr4LXYwdk",
  "key34": "5pRTMr2v4FSpS51fzxr3RJ9bmX13BZ8GQ5N1hsELYNBpoB7Sx3cnjq8xiKQ47G6Uv3zrXCRP1UszFzZ6PzTRMLSr",
  "key35": "3rRNvFwHjV9Z391e4bjeR3a7RFRaK28Ck4kVBg3uiZqE4zu9PDujWWazjkwng9t4Zd8C31xqkzwtpFgmYfcNYPJF",
  "key36": "3rRAjD7vAX43Rbqho8Dx6zbwoHXGWBgZrPgNTzeA4oL2pnJsS6GaQ6ckZqi3SonunTnwgtakDB6LBnKTgd6986x8",
  "key37": "4gtB43z6cvFCTEDK2Qisi2Zw2EKJeMQ3zSdJo833mA1RetPrccEm6Wk9po8BS3gFt1Dig54CLmfrYdttWGE7uJaV"
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
