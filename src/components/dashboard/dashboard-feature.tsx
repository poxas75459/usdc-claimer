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
    "5dPiFRTceyDpvQ2fK4GUPmiR7tzWHfMB8aK5GbrpVJWq2RURzsxigkALirT8X7dAYk8iUkL97VsyPMz6kfBkYsPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52LnEhTB5WGMfusWujg56TwhGu44AmBViZ7FjnetoVqGD6GmXdwHds8kNgD6zfvexZyBLZSLbc6VKg4dgHETXZgD",
  "key1": "336PSDmdpUgNFjY3RUtJ625QH824DRa3tFrYsmitCyGRqTcNfBbDLJ4AXwcaoChEuW3gM1DLhjAxGQr9KxJCBLaT",
  "key2": "2NA7tQb35zfvrERVnudHMR5XpW33tqBoKYh4svaWyFzJ2GjAfGBhvvXt8zxxbC9xznjkGhr4bj4PndWRQzQmAXcD",
  "key3": "yHMddbmmCMCX2SieBRJ8B8u8mfjwuKbaKThe3doYVn7rcVncrWGNbbRH6u9dJGPS81HgRH12MS17TfFMgf6hban",
  "key4": "3WBmfgPfSjHsbXyr2iZnKSZebkLCUZeb34BWRC4B95DYYghBNJXixJqesQ9z3xXetYhJuqzYDfzqqxnurMGSmomq",
  "key5": "3GxEVUPEGpVyhzZxgCwGMA2xdetktnikB6YMhnT3bD9xRbUryHgf2p7nENjErnWrX9bBEyuUuhXmgSRfG7k9EAmE",
  "key6": "38nGxaqbhPFvqWiDPcguinUWsgLqs9zDS31i6jwaNMX4LC6LuPv7DZ8NqhmrFhUjBQqEvcEDU5JmKzRNK1kg9Vpz",
  "key7": "2T2sKQvhyj4mRgH9jRh3xZvjVYpfpQMMFr6hJMXdEt48pfkDorWyBJoHHUGHMe1NvRVHL3TJ3iYpPTJsJwf6PAsv",
  "key8": "EyxaVMd7bZV9sytyWL2n79k1Pf85Qpw8noi6dHMcVsu9f4ppaB8hEj93iRm2ffpBJ5ihG6sM5ssa9CkUnPFT6Km",
  "key9": "3QJW5L7DEs5JcVMR4cxKRa753gJBmkEsRBBftsCsxXpDE6GLPDDmNpUJT8VnKWtH1mdJh73W8avpfhzuuookhuTF",
  "key10": "2gxxyF1ws5gcyDEDJ4kkniDSpPATKe1ijF28ueKmiLnwxK1YJFD9jTig6PZXLJqtkccJBnLMy9y6pu5Xdnze5Fjv",
  "key11": "57XJx4xyGhSozpNL9qjVGCstfFFdEdQ5xRYcp3ShH5vKP6P6bEzrMNZzysGq9yZn4ZLzjQFAp9Q7c3mVeKrm12m6",
  "key12": "49e55m1C5MVcSpRmXXNKTHVH7HF9WeirayB4kC2iMqHLnMuRxQT9jfNSwYsRWeXQQadZYbK6V4GMhd1NJ7CmuoPT",
  "key13": "4s2cyoEeR7QLxyjnHzo2S7LRj5a5iuCWXTZ8CPAvFqrVmU7adtPugLSvEJbmRVb4fjLJaCgn3nhquQTLgZaXD63i",
  "key14": "3seEDuMVbf7gc12j6VmwfReBtrHMg4sm9XjRrnK7fK4eJoCBM4V845SWx9nNzfPC2QLZDGAB9MejZB4kQSitfwpy",
  "key15": "tGFDUraBXWrkbSMwP46BGH2ucGsw5J1EBXX3HDEXKpgp3K3hWyPN9fdBy7FSRTz6DB54233wqbmu9LEXmRnE9XL",
  "key16": "xSoS75iQkYsnekpuiHj47dfyZrAu5bcff9ws7MZiuKJFKwXh9JduW83rD5KxDEUdVAT9aovaPvTLNnYefoJBZop",
  "key17": "63yq2TNmyYdjrcX9RTbhiDtetReZqhQ9M8bkThMNdSN2FnfYTuCWcmGsLe26FForgEV6oS5vRQUmQAGhWZV6xdfj",
  "key18": "3LKED6es13hEtuhqjXMGzkox4Hqds1h1eWyfsdXzzVRXAFKqFtkW21ryWFa1bZLCJTHHS9nN44sxfFU8P5nKY54n",
  "key19": "5TAiCWcV1bfvj5XtbM6vuX4tcERgbvY72aXuaeJTUJbaTjZBi3UytyTtK1b51GJcUX5nahiYnzxHVWR5SsBoGxKj",
  "key20": "4jcLnWHxbTLTSFAmDB7n9pemNofQDjuX7kieGeSgS3bqAej1BAd7vJz2GpTc2uwrJRB91rp5pRv1LA91kTtYnFRq",
  "key21": "29Zp2NL6F579ubEkjfkszLjtGuqqbZwKDufhc8XXeaPsXBK766z7XFsM2Zt2AkAKtMbe18v47hmj2zdeFwGvr9C7",
  "key22": "PMZEqygmxcp2T4sX3X8uYdh4hjubKESzAgxjA4xeYXZU9fzngto6YKA1bbC4LP1ub3qzrZpXneveSNwwujpDZcp",
  "key23": "45pYFqPDVQJWG46nZ2QyTwpAdXhbYbWKRtWq1tPGcdPN9ScYeGVwBiYYBcgkMmxEiU1eYHyXQfXkgpPE9SW1zZq2",
  "key24": "2eVQvsPNiJvefDnf6TaGrjghuKK3NWHAqg91J26PTVcp85q8FYqS7TFQbPeXK14w3mJGxS2ruYrpodDfg3CQHRVP",
  "key25": "3ZkdMJYomBiMtZKLQzZvNvpyiybMiFfN9veUPsYWuzGLXLDMCv24jVn2kPfTj729T9dzVvH7gxdwh9bnmUsfUbu",
  "key26": "5VPt3nMCzHUyS1gDGgbMnFUQbpMR9s1LwefuXgXtpPUY1tTzFX7c93p7KVbgKVvuTuZivPEftAYZqXMTRdNRykFV"
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
