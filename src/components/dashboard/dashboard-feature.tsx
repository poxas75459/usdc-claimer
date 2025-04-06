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
    "1ZENF1bBwvbUdB4xZdSn8PJC1cZ3sNvsMDXu93vDXW4TYZ9A3j8ta9m6watqtr4d6vnSe934615Djtzm9ps8tRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b857oLzqHCjHGgKVzDLQXWF7gmaQP3pRkoYfuom9HUa2AqeupeW4mYRLoCbw76vLLbTRhDNBmqRUTTBHPbVZd1S",
  "key1": "5fn9biihXpHZT8gbY8GfYJjuMGmH2fQkHhbX2obYQgDnCDhtUj1GpNESveMjXMG7Sxa1GhEhY4MEVXEMzBn8DsV8",
  "key2": "FyQRTbNhRGtMA1T2PePZu4TYVyqJyYqDTQaGRAmuCh4gr6vQiWhvbwMBZHECBWeyNx5CUjxASYYuPvuZswauUwY",
  "key3": "5mKU17uxgmMfv8hcZNFov6X6e42UMLj1SFtg4ctXFASnA8PyijBd614CPbUCYz2UWHZu8vuADNrxrabvUigeeKCa",
  "key4": "5uTSiCdHYHLJqH42DasHy9ZsA3PUjqDc9xru8wYLjtsdTXmPyPCqKeQZmNGz9ZZ6ZnVVSuYuzTXLfzPPcMfxDaLe",
  "key5": "4qUtyKrKiBFXgrR8nQmtL3NVUMp7qDM2cDvx3iA8Jr1ky9ZjNhUWbSuiXAtd7N12f6bie4CnYVC7a9mg6pTvFzPo",
  "key6": "YBXgidufc1BwEFa7JgQySbYn4VQDwL21N9mjpf3g7yGs93G9xAtpX6m5iRsgcB4Bn4s2szTVe7Nftu7sA9Xa1UW",
  "key7": "4bavnYquXaHPhNPbZ5TSN8xthgUCdbdsZewkdjXdNZcPev33KTrFqcib1isJiqFxJR5ERYkd6NUzwiijyuVmp1us",
  "key8": "4sxhBtc3dG8MgSQ13eG6unyX2tLon7uXRcYY1eLfNNuscm8kcUsTiw7N6xmuxiavasPMU9AYFuZLrA2jtLtxm82t",
  "key9": "JdpbSVvWN6XSbrAFLonuDzAwGeG5DoEqMhYfVQ4xjU69fvFxKSDpXjQFGkX3kaGLPDGhHChVr49tVCMtaTdFEtz",
  "key10": "2JZgXsJLTXGeyVtVVpXrFyByLW4zZEXPeFsuKyrQjfQNqU4Qb6icgHyf6SEChKBomib3vb55GFByy18fezUXuDTG",
  "key11": "5nRhZESfh3Btnz62m6uRbdWyvm7UmYbAUSN89comRZA4MVJ2jJ8qmEbW4N1TcYkpenNyNThtinJP1N4ipFqVKd5Y",
  "key12": "3yZir4xpgRNbi8hoa4DFsRv1ZSxq7nfDsi1nyDgwyuTDZEQSNSdpevunCfTjMakbTEdBr6nqxL8fqXgd4k3Wefs6",
  "key13": "53FLWv935cKbkhX5dn6vwiQQryAyP3MTr8wxxXeYm3hU7479aoQPkMskJPPn3FwS8ELkqPwbjuzwav8yj8oeQ7sN",
  "key14": "FBjdSGAKcC8bfN2jdZs5APCqEtJFS3iA6QyhvR8vnFJ2JTbt7pyMF9rW8jkTm3pmzLroYdBYzDkLWz5cvKEYsct",
  "key15": "ovnYCVZC1nFmrf4ZAYQf2gbXMPjNbWc7mNYSRrGfT1pC1UedqmpZa7XKycZhrjuA21gwKhYjr2KhaAJxqRiqVAU",
  "key16": "37W5kdEmfUzibELhzfBgsUH8s1HH8zv1SFbvTYbD29wxPD3qiBq8KHbF14YXHf12sRvEyJA9QYbX5DtRezSty3jy",
  "key17": "4X9nQJdPxzGmWsWBQscVvpSgDAswQQ8stFuM7gUAkt6E8s6DgTgEKthc7RESjZ5niAAjZ1RHjBWwtB4ZwENLqsB3",
  "key18": "CbXKQphvCPWJkWK2oYhmKBbTXRFcBuWu6CRWJ91u77NrGbHZr7yz2TWgpuFrAweUjc2HsrfeogjZm3brPSJRgPH",
  "key19": "2AzSjeK5mfQPyMDUWw6U1KDSQrSDw3HLSMroNoZtesd6bQ57nm2n5rFaXRHLzsAWSEAdn9QPZigodYAgPRuFBCpY",
  "key20": "4LunP9t3ZFuXbVqaLb6BEuWGB5qUowBC6F872UaAwU8NarFDffkni4zap26Ug1o7cLyhTGAZ9dqq1fJLSmVpp9F2",
  "key21": "2h8Wqgc9wg9JF2HP3MHFTRoj2qkyDUWiCE5znU5FS7Y5gVjWppuM1NnXQEWeYw3kZ7PnVTsYS8jw5pVXgTrU6DFR",
  "key22": "4EnKNKaCMrtu7EiZwRWScLuHSqReqmDNY4sze6woiYvFa31a1e9DKDUoHRhAttHiAkgfhLZrj9SbLAjSACgCRVcC",
  "key23": "3WD7eZhJ5VBQJiJYmRW1ve563NUcNzBpXSaAdzeaxaGNnk9y25Q64EAxaCoFqix8788SJ9jPviBvBrQD3qtdWQ2g",
  "key24": "7AZ9UnYRWXaJH2T5cZTUUR6ADsKZZR31oV67UZssaGDDEqb3cKfD2rreSHCRJQjc35mq4pSrFtA2qgVDEeMEdfh"
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
