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
    "54tnhhxdAKzeewdLUFEn2RGt6KeeHHkMXkX4swSqqUX3SUfUvUxVMht4QqhsLyLpL7Y5sTLa5u9h6p7oxnVSDUAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N4nsbFCsgj9xCTopigSaMWdcFQRnVS4Tw5UbgRR3JTmLzZn5jrqqqhR418ACAZfPhWv4ESoQaPGZWv3yVDGUP1L",
  "key1": "2ZvudHXRwr7uYPS3FdQTgcQs898gRNyKVAcEJ6ZrRNuan6QbPhDNXf7vTWcY8tTkRcq21rCAMv4NasmT5zMyDs9r",
  "key2": "3j2M4smMmjx8Fo17Ubat1jwsuJezkCwMqi1hWEJFqyG8JGkm8sMibaDexmZURFYZMRhDmEaqtuKkxdc4e2ebdmQx",
  "key3": "5kEubiMCzcW8QtiH8JewiZU7wzDwAg1qZ27t8JRdT3xWEzavfgoYLcvJqEhEV5Q58rmuaDxFrTBfUj293DZz45Rn",
  "key4": "4jRYQGxYjcERRzBrHay2oQ8rYGbQSousnWQL3iCDivyMNigChEi2WdX4RurgEe7oxr193QDhKMk1qncJVFAM7ysb",
  "key5": "3JKbqRQLoXtX9wjY5fs3dq5khKddofdskBTzhuzjRFSgEVpwB1PGS1Eq2n6jVVNuiKTszbisFXbN7PSTqGYmhfAE",
  "key6": "4CxjtR9ZVMmy1sx2UKebPcshw7BFNuQHr861S3Ua7veSgzo9AidLRjj5KK9TWEZaZ8U8t6PKAKqyFYux5KnZEGrw",
  "key7": "4eWXjXaeg3NnjP2YWJV9QKpsa1yVzBm2BTZKiF54C9PYba3MwZHMrpTn2qrDSwFSNJWeRbCiAj4Z2h69EsoqTxDx",
  "key8": "5nmPDgXTZrfQ8Raf6JRcvC9W6mcy6btQ6Nqi4a82TEB2JhchmyLhGBatbFRCDESK8i4ahFN5v1b9DdRu71mgsxdj",
  "key9": "4eFyFYRo8S6ZWzQuE3MjxDgZM7La7dtxhMhYoD3JMjqGHdQg1JUEtBsU6iwpwM2aZBXGs7BnA5iMT31cCaKUGzZi",
  "key10": "hSbUTCPoNztVBoE1gdEgs4B6kfBGofPAotkEjV64oSghAmscVr8YZgcuyF1Jvq9LZUTKj1ytYTJzNoFD4xxX8oQ",
  "key11": "4tPaFjE24NJhtuGudUSmBpzBzWU2t15AcH6t9cSkqVXAhuCDJgT9Xmrv15crDKX3KXDSHQSA5hWGGkymgoyMbPUV",
  "key12": "JjjZrE5gk3V2UnNj4NhCM9Thjs3DyxJT4nUubpxmNbwgSjFz2ejA37qXc7zTtmXt7L2NeHxNU7t8JHdnnE4HebF",
  "key13": "5ZkXp7pud72X4333iDEVggbAixg7eMi2zMMVwebvvxsZAFyPyryNRuUwQpGnJSXBeUntWYs1dYCz2YqHcCaE3wD",
  "key14": "36WHiACYyUM6kJCXkku7FFbJqmRb9wX7N1isQmRNFcweLub9SWVaDuoQLzXcrMP2pwpuXXiyvQtgziL4TexGddhc",
  "key15": "2JusDmbpdx6sPCKJaYkQBhK7i7fmWj1GaaxFkmsHvGdxSEtxGu2wEKGgeEEts2ftbRTLFjhePUF1NBdPLmH1aRdq",
  "key16": "3ASY7SUWJ8FJxtZdGAk4uMbVQ8a4MQ17PWKFZf7WYP7ho4ZAjoxByjVqJyHHrXayAEdDR7hV2c2bxKV6uDt7H2De",
  "key17": "KYq3KC7xqtEhzyPiWiAiGhL5hPhTvRZSa7YeXqxHrfYQnBrEybq8WqXPuyX4H8SjgXvURGyqga1bvmHWJCRTiFV",
  "key18": "2z6VfRH4y3aiLmTDzfCnT3pd9hz2KA1Uo41ZTjJbcKAXK6TGopF4X5cAWrB2kQf3AZGhxxWqxMFLTZ4qYcKLEQgi",
  "key19": "5SoTQ5rGnjMhy8oPtCSpqznp6Zyj2hgW3sRaAd15shrcbwSGvY2g8L5sTQ5p9G1jM7MfLG4irZ46GQyEcwRXuTpC",
  "key20": "aMXBzC3882YGQiJFWFKFcddvZyF8512yTSvoMumtpPH1zAYK1xuV5i8NYRZbwR3Jj4iEtBhBM66uyfdJeSkNpeG",
  "key21": "5fZDqpFk1LpZf2TQbZwTUqBEU5RyzkjhuCnCFLcTTyr7h4j5rwUZ82aKRmUH9QPt86svYiCrmrLF2KbR17ZbZGeP",
  "key22": "4PVRE1s7zYCTyqsS6Y7h6LqHP1L4KKqKrWJha4ofSC59RmmhbiioyDXgGrnWjmQRTEsigJN7kMm6UFFsrVbcQcBs",
  "key23": "3cLqG4Qb1nxFgVjJEuGt9pS2Qya364mLmxwCwg3aV24v6KekvGxPShdnyUrzY5JQbZasRnroeYxzePcD5SN9qhLd",
  "key24": "2z1GmUDKY79k2yru8kfXmrFqTJMiuvrUfREonRvmiAKSXR9Zz2Y51RVMuigDxMVm2hM5YJ9n9AbFYM1fq3g74Qdg",
  "key25": "3Ms58H6g6gzLQFe45DW4NAdiq7LDPjgGA8DcyEymsb3JteZySDwGQqjqJRyqZpiZG45FHuGLzmcD89Q3s97vjHZX",
  "key26": "3ELLhLqXsk4dajEQAv8FxLdzTgZLbi3YRpspn5eFoH4FJmyAG5BbsoSBbzSwfucV1FJAwekDdMe1xEzFynLAvSeB"
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
