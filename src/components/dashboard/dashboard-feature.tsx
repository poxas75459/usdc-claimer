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
    "3LVQWJtyjSBABHpacekQM4RLwTAewJWrgizDZ7yWc9u68RAL9MNzWLQEp3WYqRL4woaVngro9YrDEvJ5zmxELmgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mLQeQRR1m2XKYYAfX5hYE9akCB7Nqw8pUh1BnkeWhPu8cv64fEZR2LFpsqBmGBTDvd9QcNfeVg539k35a1hcwaN",
  "key1": "4ZJ9XeDBoGgXrt7XA4cKoUcPRgSe3bHPX8YJDr9ivWKt3rJDRVa4t8MTKbAwab2uBDhPbz7eU39HaTGQEjdKU5Xb",
  "key2": "46VXHnQyqZkgxGTbY9HLe8i8hUP1Ce6vj5e35r4669DEpKmXjiEsWoPtd4aQXywceNwxdgPePrkdgYMkbZrXQvnb",
  "key3": "12Wjc81fXBzmVfM6YgUYQMycuxnPpsRP2hsRtx4VCNP9z8SXP3gPp16cSgvYVTbWuszxGNuUacEnbXuXZfhF13T",
  "key4": "vo6YQMuqoj1AA9AAdsiTR5GDAikn8Z9Mcek6UwT2xAPMVaS7di8iTc3xBVEWUMYYdceTdjqR8KoPW7GYM4HShza",
  "key5": "4Y4Ydx5UZAVjANu9ABXuiBm3bzovbVj4yJSSXAeeQiy1xJQaJMWWvX23jpxxG4C6sS1c6jt6GcrRAQyTjYzEUDiJ",
  "key6": "5zJt1mGajGwactvrWm86iruMbzGGongLgFm6YDbQf42potAmoykYXbeTVAaZamjdssS5in5FWDA7jP3VYqEC1qNk",
  "key7": "2Cbh8Fgh4KGytTE2wyCHUj1kMoXMUvGYc8R7LSVQ1LiVgHYf3DotUa59haPmaGVoNj9LXUcKyNkCP68bPaoR4RVH",
  "key8": "UYSuoESvMdokjidG9s8zF2REfmj3vcLDY1GCYn7VVonEHgVgmuMphoU378QiZjkf3TiKuKT5v1ANif8nkdkAdUP",
  "key9": "67eB4dU9vNaJGdkYbrzbdpZJwNRRxTMEaGvDg8Zp1sWLKuwGbPmh5kzSaRPS93b7RNTqKenvivFEWt67fCxRDhtT",
  "key10": "3XUnEcVncqBTstssgJ7pSMDN2mjfSBCzpNEymBmM7MXbP7hpkumBc3FM3ZCv5gDgaLDQBMgZXEtciED6dDKgxAbE",
  "key11": "2nBtNeXsjQaQGgucqy718kBbiYsbDsP3og2nbj5hWtpMU8FvKhfw1McmV29K8gpJSFj4CuBoF282X6X9X3QZSJGn",
  "key12": "2wz4Xom4TuQdmUCeRk3cUzDodN5DK17atcgCYmj1xWEwukTPd1yNTZB3zoLU2PTA3mT7ekt3rSmADaaCtAp7RMqx",
  "key13": "5w6YsQTcWxcMyHF4sVBy5W4mQ9aqVmvEYJF844Jk1WXikDybL5tep2xXt4wom5QHVMCqm8aTdPPExxN3CwAAx1eR",
  "key14": "56aLbj82QNxjbYJ14HbWcp2aEdM6vpfkTSMs1NYHccsS6c4BwD7RvCsNSuN8VFHNjEqvcTCcwoxyihbHBRefBtEp",
  "key15": "5kgN9fBRaDSQoXN7DjKHdcQ3ujxKM4s1w8fFhtpx95zzJuDvgjDGBFGpFB8TUGzqwXFrXiMfZWhJhcmBAMFPYjxD",
  "key16": "G9tx9DZqcDqkyk3KKEm7h2EKD7VauWP23MbfQG2SxFfJ74pPW1DxbNx6M2hRFRTg83tZsW24Lbz5qoVQxMSN5ng",
  "key17": "2qyqFQqXfyF7XKkjpj6oH4tU2gdZgGhv3XEnD6Cqrv4zzy5e5NDvaoiZHCNrGc9dkTM9zCjAeuSsmcSbxAYdmra5",
  "key18": "4fHAA13f8UDeqSaPcKGsaxd2heudfFYJNeEEYSxRXsJ5WdMHa7rvTBRFuTxC9otJZiB6B1C5d7ibYV6rHaYZAvNv",
  "key19": "4uiBviCyseQm7XSjyWXhKBaPBSidrFmDBp4gqF4MNrHfwPZpdEYxGSy2PPgBymKcwo42vSXobtgwfphwNaszno8W",
  "key20": "VahE8URTPGrGV1zmQ9sr6FtJzPbkLTWZj497K3Bav551TDX5ypUzNdJ6oYq65XseTmavtbvyzreXPHksc67JZxd",
  "key21": "THPDuRZjZKC4oEAJwBzFZmJe8ux7MM8iKJvq1tc6r9LKAFQiXfZXc5qhjvQ643YRhYLUGMYU4MUfC3wXEQ4GUwo",
  "key22": "3oJ34pJD6UmJ3rigQT6zGmFPYS9DSfUsQwhcttppdf39H7usCASsQyWTkwicqXYPR8361mjkhyAsjCBPtdvJZmPF",
  "key23": "3j4v4H6kLAjWNbpJcYNZrNL7kXYz9z92TW1hTc4C2PEqaErppc65fn8PRGbt1GoRE4xoSJYT3Wq3oeZVKg3MxQES",
  "key24": "FySviN84sRUYAs3ZuKDuQAaRDfvwNGy6cuN3qjygyegdMjmAv119vPYFbhSPruyj8WtDgwXScGM48yj4bUVfoEH",
  "key25": "4paZGkC6P39pxRbX2v4npJcnHPa4Fxv7nM8aENA4byXdtimP11eefCZyELothvawbQb86W7x1bgFYfMgwmwhKV1S",
  "key26": "aaMzGaJt7wPCwqQiBmhv35bP3TbfLyzYpzJLCExfYekdU4eohEKJ8495Cp9iye4UdhaEB9rJNWh4yH2aExQMSyW",
  "key27": "4Vi8vD5zDbBpwkVgT3qt3VnnV8LpdqvW2NkfizgMQUJsxF4JVhHMSjZcbQcgUPeRA6vNAY3wrRBFzGowc4N1VVH6",
  "key28": "2DW5TsL1eT5MHkLU6G6N5FjRq2EMM9R1XDy9Vm59TdJHmkJbQ5hLTakgJgB4UF5KkV8ibURZCpkRV2oBiFHLjXTT",
  "key29": "2HzYmwFKMD2XPiwqhZUFUuzYxvknnvrAyHsa5DFMgHcUKYDB3gMSjwmDLZJ7hE3tqC5kZpHWr1pYMn9hNNe69ya2",
  "key30": "5377bSm2474mupMLeEPof1enDQgYc6q4e8g34Dh13amR3Enz6xJsz8RhpeKzu1xCuKHbapM5z6t3BKL2rB5HmuR5",
  "key31": "uFPWDrNw9gtiyMZLkr4A9fvfuZf1PAdGgKi5QEXPXKVNxu49UNsj5ASTrcWadYV4JaiRUdvwc1MndLn1MAsmtsE",
  "key32": "4LV6xVvyC1Emim6DCupdBSbRZFcvyR99apkyQFmKHq6PriSkp7Mxt73ef2idVTiqRbiHYaWDifi4NQjTZKAgR6xY"
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
