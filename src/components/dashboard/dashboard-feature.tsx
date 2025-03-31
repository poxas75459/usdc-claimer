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
    "2svDTttMn6j9quRSb8uAjWbAiTGKJqzPwYrWL2rFQhvYA44yzespTeWDiGV6S1qRgv5dgBwZUnmKWhJu7PLrbheD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "662S6ye4caJE5GXxMC5sc6yZ1qQyrn3sXmZq532Kty4bhBJXzPHkXX2b3ohHaqv4osHfPy5E2RsvMAZXVuCmFB4L",
  "key1": "7vkjVnQkhTCfhyEgEXdTA7EBcG9aT1ZnkPWCBpAUPWAkKLx7kbWDkyCkYxQN24VYH7v1tXRVrZSeB6qFVqivwgx",
  "key2": "5eb59UUJMnHJktJFtFaySTAL75HuF5oTc7JJZwgKhMvuv7GuEXkF4ErLTYVTmwProgHKL5oz1pXhwRLZL6ejGAg8",
  "key3": "o4rC6WeSRUPXhXZD3EgK7nxiuW8GxWbrjxg1hP1rgZvn2Sbc5usPiHUiUXRFg4UGQ9ocv2VBjowGq5rFo8CNf7k",
  "key4": "4GLtsBgUt7YRTesMsWCtzA2ou3zBcdJYPnU8H8mBk9UyAhUCaiqEJhEypsG7knbsNMvrFi7JKb3ciiEztcpHLFFV",
  "key5": "2XLuL987LsNeHpP3tDWttsoRwaTquCo38cyXdDPv8eV8bCekBhnTSSWQorRbxgYtWH8ghfMmnpCrtafdQrnqt9Ep",
  "key6": "2Yux79yBzSPjpo3vWd5E7bDX1w9J4XAe3uRjwZeQPxk7pMQLDp8RPcLjx5XdnVCApqfjrE2NX9DH2diGF6RbHgdZ",
  "key7": "5u9KpChAFvxfqhbVx666JAKVuH7qyVKWqqxiB22iQxcYLC416bNYVFpeUcuSfbsKUEruPiC1RaZRD735Ddoc8J7j",
  "key8": "38r5fkUJzgFPx5APyezHTzwdZoHXRfLW8AFfZhk4uKkVaygwZAUo3KVCfWkiyranayzqRWtM8jGQbwd5iVAgHh6g",
  "key9": "3rFnFvwJnJrekx6DXSr8NKYrRnz69FqGHhxx2opGtzCDttfLN3jtHcuVG5eW11mWuZcySMhinjWuCgzmDGEcJMix",
  "key10": "298rSoVdBGtNUVXjjVYugS6boU3FreCxXb6kmvUtiNLSfnNF4BjWhXzMpCwd6RtsE9YX53E6FnQZjkkFkTHPzu16",
  "key11": "3PvNhWEPG5Ee2f1nENMsNV8TQhqWLdAgqMm2bTPW6aGJDRCSgSDNt3Rr1JjtnMLVy2yDGUtbynsfP8gFBwNJVMUN",
  "key12": "2UfUuh7CQUUwRtdfkZKKizKRNqegEF9hijGSrNw69cDHUQBQVJwQBaKYs1C9eWKi9eDycKoAXZjsGN7uPdzY2qRL",
  "key13": "3vRMNpgCbRYSNqS84w2hbx3PG7mwu9UiY1aw4wsX9gNdUTxyZKREW3CojMh1DF7QwGCcH1RMyNaLrunnnCGTLN58",
  "key14": "XUGZoJM4z6BTVmkeyRSY6EZvGxQnJPKrCX2H95MGcjVmwtwyVZzUZcU7rXxdBdXPgHr7c67VWanCHZi8KJCRQ9e",
  "key15": "2eq394uePVDXwP9NnnnSjATHZ1dGj5AWMGD1UXTAYntMEcK5D7M2fkTYokHdu3SSMQVLv3UhwMPwoGpYcF3h1Ug7",
  "key16": "5MKeEWxMAqfRq3S29CnvSVBUhrKoHp4vdku7i5LGC3Ux4SqwFrx6mr8KWcPnSduY4vM3YpyxBjzf6jqkY3dBmVBQ",
  "key17": "4ABmZhsgkW5Tk2Ky8KZMdXQQJ7Xr7bNGjbmDLChn5La8HL6vDqm69yN5EvzT6YeMt7CrTSYUyGeWTQ6waf2F7YEQ",
  "key18": "HqXeXkNAjuUwJ64VmybDpByv3NC78bxsSY64iAYGBLbgnVwRP6u7xFE58b35sxvYxNn5qKerAneUkkopEmY8hf7",
  "key19": "5oFqAw9EgTQ85ZZG32R5Ff9p43uTciQYxhkKvT7g5kS8PU1JSCZgntC82ZQH5wf3gjGkbNLtLEgqDgrouH2iUJDt",
  "key20": "3cGi7soqq1hnm3XLeVBWCmV8FFzw4jTpane2i7HtD9f7Cw15NbHxCuWWMNpJg1L1PP72qs9hBCg2NfqUw1zF5mUo",
  "key21": "5KyhDSsXbayLSHGLMLBpWcxZW7pZ4hPTWCrkMF62mSCkFLtDTV8Q3bT2oQQ2mmXY9ct6i1dbsMXsYQTw7co48khb",
  "key22": "3QEK7DCbhxNwqmSbv6GqWiNBuZ1Q6pUhGJ6FzT2AyLqq9uMJj3brwANEZnssm9Q3iQYc7YXMeTxytuKcDRwPFJHw",
  "key23": "5ZyHEAaBmRtiAgheMpRr5WL97QuyMz9TjdCGAuqzjqmHG68Sa6RNacyeeYJLTuabJWYFf5YJ66RrqggeUhHTby3R",
  "key24": "YTAtHbT1GvDHwNNoCBxpM3Bt6NBmRXn8wBwSC1rTVpokAUHCrZFJCyT8Peu4dVTqCNqMEjbAuM3z2rDdmXNMqCR",
  "key25": "2ycmKCCq8NmDtrbtEF5HrfD3KkThzKQcYCKiHWade3MPKqaYbUNR9yDkUVG1mwEY8YX4xekVWRj31EX4wqRaxm7w",
  "key26": "4cN78EBnu4UZdbrYfTQciDmxkdRiSzX4hyYiaqaKAWxFqYpZsWFegpB26baBSMM4m8fz3XpZoVYN3hWFfanBBKQC",
  "key27": "2dAUa1JQocTX7A7YJEzt7PdHJd4Xtk4AVV28Xb1tTXe5AbSPAUBDJ3fb94zq8xiP4N2CFddDBQpdXSach3P8ebop",
  "key28": "641Qkx3zMFvEKym1N5dxbC5T2uaWZNmmXhoPTmhWUGHBkE7BXPg4ruxGNYedRyBBvvqB9o499mriW77szSoZpngK",
  "key29": "4QPHaNNJcZQWikuzf2RYwGoZoHZgLnQWmXFykmVZFftUVr7beijm5rkWm4mP2rwSoS2xk7S99rQN3gGyruDvSYwW"
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
