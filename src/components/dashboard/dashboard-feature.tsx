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
    "n3bHfcJEmx85aQKNPnALBtn7bEdgokxoUZzWzMrAnzqubDunTY3ECDjqKKFDHLNBrzUKhq5UbB7XmYsPgaaGyuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1vAG3E2RNW73nZxbtRuqiba9ubcXkc6BWu91K2VrK2gw7UWdGQxM7DSkyckmCQSQHGCnSgXhoJGRFAPSVhdtYUv",
  "key1": "4viwheMjb5FEdn5kB2r5W3tkL54P46DFpFKWAmX6cUVWQ1cnvDnCNjaY9aUfzB28EThGxSNL1qEESReizZy7K5Sd",
  "key2": "4Cq2UL5v6y6c3PzWMGjVg4G2Wx7XVrhKBsXt8xWphgti1TRukjpuFLJ69yZs4pPRkdGe4EKWPSAth9ri4RaV9zt8",
  "key3": "ctNbU92a3euhhXZXLQWDkTe6rvxxqFNjYjfpHjehcFkSFsVJmCLHfUkqtEus6nNrvRUqeVEEHfzxPMBdYHPtWfo",
  "key4": "5W6jfZHV9dokGbLDUEAta6Asntef1XDvRtRVZjNQ4sxsYvpetaNDBWr97Mm4Gy6iMeoYrzdPVVJu3KNdJ27NaDKF",
  "key5": "5k549ug5K7CY2kAFeQpZHyadffwKcFz7gW8s7ySZWtswKCcMkzQPNWePYhpLfTekwtZjQBSbgG9rFwyHGXBF6nPC",
  "key6": "2QvubdbRqNaTuvX398FkXVpEj4J6PSJZ8dCgBY5vGnGZDv6HBjBMKJWNcjCFcLRLsr951NxWh9KKSB4Wn28XaSL1",
  "key7": "4YaXSsJNF7fVNnFtrGBosRk8EgMmfGCSYW3MiLUJh2VwnTNJBeBPP5o7vp39zEz73BcRsEGALKpshe24f2TkkVYQ",
  "key8": "nBEaQLpHy3t6MfuY9p3p9U8T8xeEHH9z4NZ7YMk4fnTtzcjYRG4ELaB6cx9oWmxGoPfGFYbtihRjyLubihYbZJF",
  "key9": "pSKeD1BnCev2fjmTFmQv61adrUmEwAkT8L9Wwk1oDUgDFReDuBC35PCozERS5qWSw16SXATeb53TKNi4PwQXEeM",
  "key10": "3eJbr29uQwz1F8cUjZsNBCqrtRcRWy72ngwWhpa29U1ccWYzh567yurqdohxZ8iaiuBZNWbbEtm2fFGUNvdqhnuJ",
  "key11": "3FDWFjntVa7KqnAudPrPZf72Nx1SvNU3Pbd2Jj8TwpTTe91sW461p3r9QwKCYK56xEP2H4tQXNpWUd1foj5B5L3g",
  "key12": "3a2TB8ptF6os3w3xVtrA4cfSm9zJdSJBVESx1BoKSDFUXP2KxvviTWzzpe4akWpDTPb9j4qL7aspAa84rTKUkRfy",
  "key13": "47VXAiY3S2z9HE8nk3jYqQAj6zVbaG3Jja2YPHeEYngSBifCAgtr91fc1yKuR2Y8XRtN4ipHXePA9Z53ZkYcitso",
  "key14": "UZFbkybJdvpzfyW5ps51F3dLbnqTkjaGvxrFVYSLNs8snqUQyGc4TJPGU6mszwCDEQMgPsFcaxe4biE4EVU6wn8",
  "key15": "2jqwiper2ouzy2XwZ9CTgJ3TDHMRrimscnE7DRRdzkRzqoNZ6B4rgP1Cg3XSVPCNg3jRZjXqdXJ2GDGEeoPD6P1e",
  "key16": "3KUYBW5gkNWyQWSN5ifX3o6TZBNiqDhEuWBspTJgt11nwdmZf2oav63C5SgASPUwkcoBzx8YcdPWgofWRvJSEHgb",
  "key17": "2KfsaVJKh86xqTuFf8nnp2vUGtUsZA6FHGZHnLswC13u7FLiSURBdhu6J7soEHY2dvEPG2352tGNed49EEYknQjT",
  "key18": "2Y155CvHjU3pNXDnJDwgxXvLJb4TJfeTfJfDUsZkunuYHTdB5v3k9kQK3wjfzA1C3uuvSj9XRYqPvouZDb2T4Htu",
  "key19": "4WTUupemJE8TD8XuHdZ62AABX8mKUnqtkKy8Xy9s3V9DThMSJB2tAQ1yi6CSQaNrbg6ww9kyAjsv6KHcj81i383h",
  "key20": "3WyUJtFun5FjharroeC8rxyxmBdkbrbt9bvDw8njvBGsXHvYWjfLDaHkkZHxknuP2wjt3yBvQGYE87tiQabUN1C",
  "key21": "7bv7xN8eQXj39eJJtv511RDNZkQ4yFjTWjS1doEnRPXFhihDCRDxNjTVEGzf14ngtdLsLr5b2ajenjfpDDdjpBw",
  "key22": "3Ni3kUnyZG9wry8byYw8hMjyHdn2bUP7dxYPzkC3uiAdnTxPdqgQbs1MFqpgGzb2w4prSWKysz9vZy1zkRyQATBk",
  "key23": "twTEqZHH96KNGX4YxFZSYudbiQ1jSZbk9ia34F6QMhNoW56wMjSvfsfYpX4jiooWdPPP8xw7jsxwMMnswGAi8B3",
  "key24": "77kmCxBgUiJthk23Y1iHKR14pMMABn262mYzYgxYZkgfJ9jKFKsu7cHttBUsgwB28TUnA9Q1vbtvf7zxthQjwKr",
  "key25": "55QJHdtumYVm7aquvPxoabu512BHf4sryKJKjMU2Reim3KiCzXWBMKvzpftg3hJMTaspZ58vKy3rDFpMoXQvyAoq",
  "key26": "2m6x1iu7ZuRFXeqW7xYw43zNpD1gEF5NbrwkBtgu6U3Fwde4uFZUyvZQrTrYYYNtDXkmFgyXzsRkMCeqRPCCtCK7",
  "key27": "USRsF4wxV9xX6D1NPXgytAqFixEcKPmEz4UHwRaqN8y4S4Z7PijBpaCzQzYMJYgWPe8PUMMRpBKE3cULLNPG5ms",
  "key28": "5UB7JGVyLPwqtPPNv6vGWEVv3nNYRVpZUpyLgPbhsKPJXkwxbRNHLQ3mXkZEVmKLVNU2ZejCFJz1RuzduYTsSiAw",
  "key29": "q7TMBPVdzzkWTM2m3uwPHKRfmzAdd6Neg6pV3UK6muyHQwEtVT6zWJ7BM9qt1QpNfUsxoeqf9rizm2qeCVTfGij",
  "key30": "tQYPUMSH5yjon8puSCd2iQxwhPNP3B2WXd1PXCrVWVTbUEw7JUXxhRcU85qhGsYC7mC44coPKYvht5fz2GYJJVT",
  "key31": "3wztDDGAnKhFbvF8a8TnkUFtr1fK2e7bV7JWyxJdRYRmxmo4of2CcstYKjWRbxrsjuFQaocERBYvwx5QsUhYSdXj",
  "key32": "5TGD7zHDtqcuVT3rGELAh6WiY6dyRoY9mTFFBPuQRSGryAS4TNtSg5yGcjraX1jE1LFn9ntvnQL6zxmkj1b96PGe"
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
