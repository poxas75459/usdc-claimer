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
    "5H7cK2sZEaUtXpZgfr6zdk29bTshq6WbvHrAQmMqePE3Nm2C4mY5dDL9PdbPecxPJS4SjiVGbfWq2mCErxjciydk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qqyYbKbQTngRjNQPjJtZFJhnVBdm9xQoYi3YC8CfZB6ngrSHVq6cDsZH7eP9MYFKQN2HQoAgBvJQxvrsRfppK2e",
  "key1": "3EfZudT29mNC3Mda98qpDUe129xEX8ZRC3TyC5n23dH8e138n8n3UbEQ4juaf98dqUh2zegRG5iAJa6VHnst81Qb",
  "key2": "495dZBZ2RpKro5DQ96sPYWx1pC1vWzQJq33uiXmfGWqFAQEt2iyEDzjzHHP6GPGeK4b4TZh3FyzrUHewD8tGk3s7",
  "key3": "5ZgKmvacwkrVHUo4MjRxCfAzqMeQLP6vSuuFRaQNc7FaNLsVbC31ZkiPBQuLAD7f3x4RenFbKzioHs4HvMPA22F8",
  "key4": "5ESE8CZhYWWR7zg5bx4BVm5NANvFXCkjNVaFnBzdiaabCXdVNirf9c1BkzNGKAjJqbCydn9EoNxRNLTx2uipRSMA",
  "key5": "23sL4o5QWsx1jyD6saeCqJ1KqFY3N7QSGzciDbsq9mRewFQCdCpwgU1P86sLaBkfsERhJD1KVyoueLu5qo1DdiGo",
  "key6": "2XTDThBXWVuC4JdjrNcSxptu6bRh6oQ3Xnts9FJAJcGAiobJrHC6v2sqT9D2KyLAq3GHoxgHZPHDbKA7FhvgTMSH",
  "key7": "5gTMisKFnk6PQvWJ9aUev7w4Fnddf8phjhJUocENgfgkHzwksiP51zhLpEoX4CkBNjqmbNNDuwqGTKs9CUh96T2H",
  "key8": "2TMh7VFz5xLKC5Q6YL52PWZRkVpZ6d9ZJas8pHtfNkgCq9TATspBzfa8Dymik3aRDqAtY3nTakHPVazDyEZWtDrP",
  "key9": "GASmcSNUwnEkd9cLMXAHXpUkY8K4NeD2aawSJC5nNKL3BTEgKL5AsZ6eFfWVXbgsSnvpJomZ88Z31JpKJfw2P5a",
  "key10": "4DtsAjVdoGSUJrmEsyFBBNbq1KaodnofRTkBMxywvRmyLhA1H47AhfniHzKjCmdSD5s9QKD4S9PbPnycQMcmSGjt",
  "key11": "4wAcpxkShm3s737VnLusmgPDgDB1aQy2hYk3Q8RsMaaxQ99HQg3HnCkqJdoaoJ6oZE7fepZ3sRANoz9HGQbaE9nJ",
  "key12": "5FzzHuqTTCpAB6sQAgEjwZcbxBw1YVJBM984xZeFiQS598wsJUogb3n8iNSri4Lx98e2N4xZDYE5Rf8pbxfauoY3",
  "key13": "4YRzCEV8tZb5cQ3dUsXaVW8JsNwboGMbTHBkrrMZA9tLm2xgMwyHPfPEHCCJWupjWJGexE9qsQyCWBVt6npUvrBk",
  "key14": "3sEKWQAK3wmqa14RExQRVf9hxZ3xD5ywfiWChj9DZfU2mLzuoYXKZfiYhjQZUHS2Tet9C1TJUYLfqbyvg6J1WE6r",
  "key15": "22SPDsHFwmXUVSfnYuS53UnTNuM5ec9tNfj4p5WvchL7pdF7HLYNZVn6vTv6XYx94NJ8p3muFsANzbDQS49KfhPc",
  "key16": "4WFYKRDa8UEPZwMRoqWnRKx4fvjewG9WPFpwEDqzWCoeKAHyGhctBNMxEgGTuu3kwe98C53YC3AhwJ6ThsjRTGem",
  "key17": "3iABqXqivkuPqYyPwrufjzAMWpdysbQmfyP1B8qnFWBARVVzjaeTppCNNvJ4zjKTmfG1bQ8HcHHtricuqX5mW9pd",
  "key18": "5pAeVth9kw9MwGMbAbKzQ3RQ7S88Ay9y8bgDucb4KJY1gwpxSHGfxMfhCaWJZR6wVt2LF1K7t4e75yPQz1dfxVxn",
  "key19": "4RTjN5DHwS6R5fKrXPdTyJroeoLM3NcUphhKdhKkodkrdMs4LmVxCWthL2PJf7jtYw7Gj2dvA76qS6AmSdAFzjc4",
  "key20": "ksfCAVRvjxvwMmDpauFBLyJn4BPTuWpVojRTm3LGUC6B5kg2yfPCNG5JRGTHUPyfibYmmCGyKwKsiyYg4D2jgqv",
  "key21": "2er8cSVDUqhKEZbU57anTcWUmRxkLCgG4Cw7MEzeDC9PpHvbwk1sYd6PrSRBztr9NwRGdBQzPUtnECZGTpq485xk",
  "key22": "2b6GjfbaNyUQiUBimjxmEuErnzirZCWehjA2HH9pXaMMiWFtZu4wgegzrK4aeBUyybP85AEqtpMSUrSFABmvLLK8",
  "key23": "EnYZhqrLKCacLCH4hdRQ3QRi2PVC5fcEYX8S6SV85BYYRFvLgsrhR9LphYNUruwMqSbwikUbg2c71tsRjXD3kSR",
  "key24": "3E5FKKEQ9qDYbeuNbZkJVaru1Hkd4HM3UQD5tZbEBf6B6etTe7WxDNGPDrZETBdHfKNyDkwCyy2ntQgpVBywpTQ3",
  "key25": "42DhkBa8FAfCMHFqdHv8f8aDYWB8gLB12N412F1DQf7bRJZn9MsPVoaHdYtWa6WdtbswoBbGmWeuXRKViv8xvCQy",
  "key26": "4T7gufKdsuewKHTCSSBR4aF4Q9s1eaYAuuJ7WkT5JhfYP9qc1hcNgw8TaRsUd4MhydRLmzVgmwSwby4GqP3HVvbU",
  "key27": "5nbPsNntEYrg81xGsrrMXAUuAUp3HxB7XAAZ7pFQTe92SkdQuSvZVXL6qXxDYDd5mrdY8ZG6n4yNiXtmpUEcaTfb",
  "key28": "zPkL5TyBZNZvAxueBKrqCxW5kfuQfjN7Kdut9ra45R89wEEi2QztUcdZoFodbfBNZbcwBM7MBZFxxGEAWE4AkFV",
  "key29": "BnbUDWHVY8ieriavNaQuWXA8bYmE8S2X6seMVLKwzwVKmZK33zkqfE9wWft7sYThJagHUx2hm2XLGawGgCqTd4W",
  "key30": "2nfMCPApSwW5Q1txj3Br34RpL7C9bQk1wxdwsn4JXEQm8fjWCVhJHMbusFTFEXHwhxgKTARRwEfuBLwKygkjRiWi",
  "key31": "qXap4TZmXa9ySSAWPozKgoVu3Whi6p9ZXdZEn9dv6zrqea26p4AD1eD9t9x91tNt1YxaNi7BFjVFPBWaeL9SuwU",
  "key32": "45cGhQRdYC9kY9fN7VxgvwzMjcxXdaJ9SFY9T9Pp7DZcs1NmSphAMP1PAjt26JAos3sUCAHQMdPUSYwhGC2fbdG5",
  "key33": "5Nb5diThccNrepn7JXGcqWB4QT9488fihUPAvj7gsAhZSnNc35MfnF21KQRqdkFwkmqP8bWCEp3EUfXTXkPH8Gd9",
  "key34": "5Pe24ked4WDN5sWMCQq2Lmv2knE7DSkb6hswWzu6Wr74AUPNGyXeAz1t9y8Y2JEBxhUmAdYAZgB2tZ2sPVMTAvso",
  "key35": "3UNpXd2LQk7XHDahPsBSpD6PsLEHd4pQXzoaLS33dznMAe2p2WFVrxYJFxP2vYDBPLWhghdPsod1JwGCzuNnGwL9",
  "key36": "e2xY2XYfuLSuAxr8Vod44fjERFz5GjWiBmpEoHc9kEdtjgwSZ9jNvWqviL7ihUEcWHAhRsyuAhhot7uPEyZHsGj",
  "key37": "61EXZgGcwhiqHiT7qNJvA9ZEcXMTKvdL5afqbGD55HQaj6CMpHgkiSHwQpDi1x3rzBgBqe7uaaneivWFeCAAfQPa",
  "key38": "664BTNS6WcpEKYX2NqsrEMpJxkP1mJUebSfxxGC3EHumsZyCEd36C5JPt7WVVG6dMW8qNaBnSnPp414csamSKgnh"
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
