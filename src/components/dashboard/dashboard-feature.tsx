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
    "UjqadER4cUioh6S9Zakkqd4TwK3buGUrxAojvd6K3sU6q5hXUswLVGwALWNrs4vKik3wCVVTAAc1ThvkCcnpc7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kb57dwroWZ5Cq6E7xGfH9jydXR3gMuuzqL2tgWBvMhNoPaupA9WEMeUqwEu2B1DWneeGdwdjt3mLoGaEJoweby2",
  "key1": "4jQHaATvL6L345LjgT5bE5rKBAEGEXJTCQQVXBJ5qwyBHk2Gf5shtRp1cfJbYzKDDXod5kQ6vJCCXziP9MpGCDx3",
  "key2": "5HcepAyHRT6CAerHFBpAaT6TK32G9Vs4NdKx2MKh8QN7NgCqcS2FhrpNWN71n3h2srqcbegDGzTSYgjWraGd6PYH",
  "key3": "5RU4Gmvi3h6oek35zGK61PWpM67dD1LYUzXYJNhxK6Scqs9BtmAPS81mVhsoqv4kr2gC5ghGMgXFr4vjpLEUyxQc",
  "key4": "3yB2x1GsNaXXMEGySxUofZ7fHyqRfSh3CZLXJwUbLSnbv1pQXRk9kJLi7HwfwKnpjev5m24TdjnmJMt6p9qrQBZF",
  "key5": "2VJbTVZbRpVEUnYvFXTGkcVJnT5iWcnmBcxvGcUEhDSzP1THhjVync2R2BqNJx5UUACUcL5VH3Ed6J6BX2KwbsAA",
  "key6": "5D9iREwf3oxXMx6mf8ts1viSCLLeeKWoJShPsqGMh53cfecm5yi2YrkUSAmkxcJRBXbS2pnVbFm2wGcWKWne3Gyx",
  "key7": "4rixAu3e9wNSt6r3XavTf3YQgdmjAVKjEPxxKA9sN7h9Udq2vYviWcATWd6NLSpdXrzFZ2axXp7bJrgTTkraaSh3",
  "key8": "2e8ZNfwfhbrt2FaL8KgvmByMB3xLhyPX3orsLvYSUgA4q6kXWo2XwpqpweuB5oNNcV9P8Yv8ATMxFvKKAogsQ6UW",
  "key9": "2SMJkeZyYyhqrBKESEQM9ERVSU5SgfGuNAG85WWyGBoex2ZRvQAdPqCa11W2EDNrrA5CgwJCSqM8jZcQ7DG3iBEQ",
  "key10": "5WfkCGC1YDqKWiUszGTHaPCYmviG22vQ9Zx9o4QJDpjbZgpMqQshUqAgWAMzWxvUmjbVEEiLw4t2V2sLJddorgJB",
  "key11": "5Ekaf8seWW2BD8fLkw5paHYPREojyw52M5EYGjc64yJy3VMqXPFagfgfuGteFu24hnMPQxivoQpstViuS9EHaEY2",
  "key12": "2QPEVkUkchB2TRT9Jg7dEoA1w3iCdPY4jaa3BnpmGpmESQCSdQUG5VVrzKQ8onkRAZYmrb8hVPAjybpe2Rx725nA",
  "key13": "3chUAxmTmMvTDiuQT7K8iSH64sSowDJySfdnnWD9VMLLszRk9PnTCqKFDpUxktaqj23q1SSGR78Xj3xFYG56wpcZ",
  "key14": "3L2iW3qwNfxJy2rU1CMQUDwxkAYLWgqNC1DG3oC1DP4pUNKgWYxvsE4r8tfPy47nMoAT5mTCnbEHZhrL6emhdVHA",
  "key15": "5prdcn4JbuVvXzi541Nuv8T3emHyw5AJAuuZK3kzQwZiHhbhCSfdWCGDVc1Vu3ZJYY7zwg6g4mFbByVY22RR7SBG",
  "key16": "2WtQKvKiwc3HrSr44W8FZRmN3eJzrgBsWyuT5tNSZto5CamYXabeVJHKKtAUNvfcwwvphKZ7hR2HNGzLjK8dTVgf",
  "key17": "33VLroMDsJyyqNynMHK7gsja1x33myamkouEWrBtbZrDSB8jqUZs6RtSAAKtA8rbFFX3dKxMjzfj8q5q4Ac5JZgX",
  "key18": "3yRYStNMvpPZSu1e41tN1WQe8W8HCAt27ecCEUMp61x7UFd9dzcwF36a5LoebnL5ABqSdGJuBMHrbQXkmD3e9z1i",
  "key19": "sfZsgSVhftGUquurhVKxjHVrBHAgWtLHxiRYMjb4BwPfG5mw89Gx53vDTv5driFUPGgVmYF5iaMs85jLnrpsDzD",
  "key20": "5qi1joX3EXBxEbwnwS2Q45aY79WtaSNvazL1A1iw7TexdQxJGFKWnTVSkEwBKdHcWeGpq7AjJKjnwAtMQKGvaA1V",
  "key21": "57U6SCnreJFicxkZcmo2bnsaihdtak7NXtc6B7xxgvrtZHAnAkuj8bXH14KEdY3vimmd15fimrv71hocm8dwonXE",
  "key22": "dJZsdshNrYnZHBcquFkjaKq3i3ZbnQWU3ezd2inychKWBb7cSJNTz7EBAZczwbnyegcjQgVLCcj7WYet5M659y6",
  "key23": "4EtuXuafW8Nt1k81VyNiuuTNXgdsefAPsUhCisXbc75QvZyhbxP7Ys7KWZ4E2jk3YUNF2z9efcq9mfgmSicjbaTc",
  "key24": "2CVT44nBHYPnino3Jfyae9KJKFUMBuJccNTtodBC1EjScjEUXN7Z1FBhnWzuxqoWtMtHz4zMDRTEuGBwCe1PEC3u",
  "key25": "4adbQ5yvEBaMLydX7T1kx75ZHEcB5PkBYn5pqPfZmEzfPBnfz5hvbH6x3nNv6txRstksaYjcUG8DQtupq5EKhQNE",
  "key26": "yPrze7dCRwYPYYwfp6ufeap1oXLNgbuCGwBTxTgshmSvCndgy3GvVyfmXxwtShm1tXuFBDniZbps8PB4pMofuhR"
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
