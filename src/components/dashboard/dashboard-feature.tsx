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
    "3BP3tgffebLad2kSEdpkivXYgVy8rqXCgs8DRHgkATf8aNrcTq8V9miweMPrJA5bgXm2yN1LmQWASC1W6WpmYB1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fuKHgeuXHVhpaeGYsjd7JJjyXg6RnhLy8M3ek8w11unxeTwXJ8vY7iWKQpasimcDbYfZRtRSY8zSfz5L6cTve1B",
  "key1": "4CV8QLXLgbxcXdGFAz3bMyjLTwFiddbiDQvStKbFPphKo3qapAupKZmiZjX3dnaZbfewhdZdFviJUgLrTNMG48jm",
  "key2": "5cJnSg99oMShjPLKvuVDbdhMKHDDqepyc7fbDN5PCG79nf7dz4a25v2CyPj571puJCdERu1jUkJ1DYWy8Bo6WM7e",
  "key3": "cUnNrX2PU1cvMXeAKVviWbnCooCLkPzY8EszJo6HqkorCTr3kG95NqBVq5kziVinPHcEvE6pgXeqLucZ3HiL7Qk",
  "key4": "4SSFZY9TSXjkcGyTDRjMjZGk2RQSdU5MGjDCuU8n9VFBuqqhZp6aWQNK8JtXhrnrsLwDkeynHzFi8QPY1u9BYswE",
  "key5": "5xJzwBZ9St82tpNxxGdCwzN2cPBuGmwyuyWQGHURiRzDTM2o6Ju6KbHDSMYLJWPNPo4GhDZteSu9WtJUjwVDPW8m",
  "key6": "2vSiFZzokLMMAXdUu587Zvs1mZjDoWKyxDTMy6pDjFqQvyaExwebavKuvB4hATX9eNiwyuSKx9aYYt8tgXBW3ktv",
  "key7": "3s6XcYSjVSFXUB3v5pgoiqDDCGiNfxHh6mz27jGzUtV3vnvCVbtgvRJmsMGtArPGQcXhLUWgBVeMFi38Veti822M",
  "key8": "3FGTVNPE7tHb6hS9c7GZF6Xzu15azogKrpi89dLjidwx3Y7hiDwq3f96fFBshEc36s3cCpsemEYE2hrCEGMNgFnB",
  "key9": "NYx34YM7oUCjWPQsFPvQTcokT8jVMehfaSb17PbVUBFAmW4knfuH1HTbjrptC3DRZGYAspjRFQ3uGiusqne78KX",
  "key10": "UihExQ3hdL8eJf9V4NrvsRirvcmsrBfxK2MGbNRovDDyyXdrgw5wyQovojmeCBs1nhxR8pV96gq6cm537tjXo2C",
  "key11": "4MXe6swcr5MwcD6VZ5KGx1cMsU31ybw6xido5P19HZkn53FQt7A1K54Y9QoEkYwDz3qkmaZ9dhx4EmtPPAP7TNsr",
  "key12": "5XdgaQ8c3AjixxxTVaYZ6GvAZo9pT1Ry3uiTxCEoNQvxzHBdK2s5BVu7V1X7g8myn54Q44x11YY7p2GynQ3yJCVR",
  "key13": "3dwiagpTq2e7J5iv6fVTHcS8z6SrnsAuAqw26j1gdKhsPxpZpZPcJLZqZjpVg35S8zbqKpKiLMLsG2YoibTXciwH",
  "key14": "4TcVcVUBbdPbCH7dfwP9uyYm4JPk7HFgv4Vw1PXMiZXHXxXk1Nu75EoYmsdEggHT8bgDNYnE5uwwhfBGiCyGYiRK",
  "key15": "m5wSgoPW8QD1QnRjNvMPfY6vBJms4fyw8noBQdDfqHQzbGqWpnY3Sn8hPhxEJXN6GJnNiQ2d7pQcSsHPtmAjnBP",
  "key16": "4VKf7nU2f4xbsSZjUuUSFumBJq8tdVLDL7b9RBHiUm6LydUu2o1V6Docw5ES3y8SF91CuvWMecncSd4AoipMXQ6F",
  "key17": "4bVem82CWdBMPVhrVGyCAs4Rau7S8srLPEQRuBzyCWDDb661C5KCVC3nnyNjf8NQ6gHisWSPUD5TUSm8vohyQLeN",
  "key18": "3CtWEumWJJbxYfBHqouAqTjCtNtPsRF18T5YZ5JFi4HC29CWVYdSAYPdCSBkDKqX3sKZNrzw9XPe83n4CXrF31AY",
  "key19": "3aojuVin4rKuLr8PxQuXXemviDcNThRMFFVHZKyH9Rbn1yFFW1pHnwDv4j82H2PcQWEwvzbWkeVRwRh57CyfkQAq",
  "key20": "5UttU6TMaayqGPxpXxuLt5cTEzAz32mnTuCCbQQyLLLwHkKRqceKp2gcSsN1bn9pxBtJ1P2N1QxbHqjVz4meyxWE",
  "key21": "jAMU7tNTcvAieHsMe3qzD2ojLy8d1zJc4E3oRsTQhvgPyXAyawAUsJuZAMCB7gqgi8bHjHa9TWLgV44qEDf8yZF",
  "key22": "3m7quXEcqZCJHX1QcSaqckxmqG7rrNiuYy9bxWzKMhs93gcovEWCR72K1UPBRx4KK7cCyaxVwg6PU19SxmJNPY4t",
  "key23": "2PZHTnkNEoNpYMU1Cedx7oYoDzb4dAngVp9KT7wiXqzZJvLPUAQrL4K1YBAyFeaVyEWxZKM3Vj45eWrD7Nv5nYGf",
  "key24": "2YM2MsM1zvy7ozQRkWM28u7ZwY8gB6e9o9NjfwQW3Z86iTMVtcV8uunFwQMugFTmytEEwGJPiNpxw4iH6HJHzJeM",
  "key25": "3w9x4tDKqyQtszmC4Hi4CjkjdpWhD4fqynmjzwgRw8LSBqZWdxMGpwdjNogpQtvKhJ7tVGgKpgvtbcKM7ZCRe4Zj",
  "key26": "211m4XUy3hMP4FZzaTe9ztKRADZvyhPYkCw91TPqRWQyrKFmUsB1vKGfeFf2qMcu8WwfaaCLYukJQDL5dRhAMf9b"
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
