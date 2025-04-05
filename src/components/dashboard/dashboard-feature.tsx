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
    "K3izhHmH2Qt26DrqUUE7tPgxmSiomvM3FLczyNotpFMYZr1aEQsvvrvQ213AcTZ3cqujMy6rgJvRyUcS5vEvAaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WNUtyyVCRJovxsQQRtVYCcdEj5hcsJYSPgenPifg2fiTsAquVKJXBXE8s3Af4L4gQNvGgMEuPcqu6gAzyy1AwGs",
  "key1": "45udsRPUcqST5zJMwQq1m2WembrZWv6Qv4BzpZaYtsBZUD1xFjab9S3pFzAhgCpjrKyCQtfTnPdjTyv6H8P6mVC2",
  "key2": "3CT8mCpXEL2iyFZbpHCp11VvhGS3iiv2ZxzBuv7UQGJCdLjmR4WgzxW3eYeAyj5X5PQBW335dVbcrFcCy56Qcf4A",
  "key3": "4bs8m7uBRE1MbfftjWH5mZSt82ki1tCRB947yLsBJFGoC2Vuu7ArM4u9F6JRqahBEwf18GVBdGpJuFiBBt5Vuri4",
  "key4": "3J9wMndb1xjnybo11BJGYYNpBb1wucza5nxAUWGjsMYwzSqXWdFFYpJzYwxRA6sG7rVwUmu2gEDWs78LUS4gc1Mc",
  "key5": "2kuqmjAVRUUdneYWbHp6E23WRadfHYXa9W5WxBbeH6xZnSVYAxo7Xb2EgNJSHeo9dP16GsnewXuwSeybuDKGHpBi",
  "key6": "4LwjqoLKdKPQdnFaV9wPyy5yjPBfkYbudEGiY9Rdx42NC9DvB8zh8LwPi9765G6JpcXWnVw4DKvCTUxqCCV7A59k",
  "key7": "59SV4j3pXpTzEtDJhsyfCT2XbBNvcwh7aVvK5So8Utgm7eYgtoV1Crf9p2WN6gzPNYEzYbWLDZHKLhDWcmbBKmJx",
  "key8": "4jj12vqw5xXL7xBevSAxRV6hgqfoUCT2ywvcpJzMA4HSRAqgstkXJAuvGNuRJ8JH9maeTuwuVCfC8bK6g8PAvWzB",
  "key9": "28AVNo5utSgDdk78Yu3WcHguYvmTcSPD2r6vQakrG8KRN9xJ7FP59Pwbz82YQ2poeYARuaaHqSWA7NT3TApMGkJR",
  "key10": "34WPr5yR15ZKjeBRvwiQeneZAVs3ZhXWVyuQgfPn3G4Kzb8Vvf64Zi3CiM51zfiNHJatvgHcJsxWDHakopnEdHNR",
  "key11": "2dEteszXwDpEQwBVdwqpcCaz2Tf34dj3gtJsPw8o9RHMRpzSWrJbRe1HCKZF4c5zHSpLjn6hUthzX5oS5v9sbzqw",
  "key12": "2UtPQDN6ZKgaYF6Ec3ijhxWY6oq59XwLPdXrQzW6koriTVRgiVMwPSshr9wcXyzou3Nkjmf92MEyxSiekZJZXE4w",
  "key13": "2WKoFrDJ2C6c3z1VCCo6UXyh9hsPeEGfCspAyfch9ELHUnqvtkGP2zMEic3b5iMqQB2EmLZ8gtxiLBwLiGr9PNJ3",
  "key14": "2Tkkuh1zU3dZPaw8ZobGfcAH8hPU8xH1aZHU4eMaHTEvGynwBTtXpLMzE3ZmsQrfj8aigyA47PUHSqCyApJ8u16f",
  "key15": "44SFeiTi9rc8YtfUFqsqWHTF3oLCd29xNCHCFxoxLwBh8p3fAL994TU8QJcoWuUFHs97bwTWwqXT38x8rrhijhLV",
  "key16": "3kMAR9fDMLT9gjGf68hX2Qqgs3T1SkqBcEnnZgwJFbhup5F1b9Fc7cXDBbzggdUFNzJFG2mTWYQGxZhFnhtL4Hax",
  "key17": "3aTTwrpTkSpbGepUvSgN9cTn7ytcpG7Qr4a1DXGq41cfdCciWSb319DwDfN5U1w3CGaaSaTgX2kqaZyJkgf8qAds",
  "key18": "2vzkYumFaRwNH6bXqLaXJPcDYzEqEdTfr9udc1zdVnqjVzRN37sFt4VEmV59FEGTRBRvQ8ThGY9deoruTQG4ZRgg",
  "key19": "3mh7J36h9cHbDaxjy1A9u4Ch7J7FX1LgeriCAtXifcQimarJwvWPzfQY7qsyaABBtjBSrC8grF1Zr2ALQGtfn3pY",
  "key20": "5dakcg2MZVXjBVrKFofHs8zKmZNMwbTsosKfnuphrCkM1NwQjyvGgbAFXtbckHkEsZzRunx8MMqH9RjuR3gX1e1R",
  "key21": "XEE37a6ty7JYEv2GBT8yT8DjyZv4eMb1TNG83HcLX9Q1mzAbjChEsCkr3frPN9oXHbj65nnidWqS54ePFUdARRA",
  "key22": "4xtZ1hgUKWfy4v5vUsCyaidtoXbcTjNQ4n1DNe7GRuU8DBXvvUNzZ9T3sJWLSBVF5iCnoPbZWZ2aFo3YyQfAyVzf",
  "key23": "5WHhoAdXRehviWhmXj8C2nMQm5PtwRQYq2feVpT7pfP7PzMHq7a1mdSaNSBEv1R4qrpwCPye4dvkh5LrVsGWs4g2",
  "key24": "yqQdhabTc4TZ8Uf3cKhVmjtmpqwpnepQuDUZPL4y2WuwwqjZP3VVuhR2wAmxawKGjV1YMz6rWNoVwJXt61WKzeB",
  "key25": "2Nwt4guyGuXS2QmZZaBezMBAnxocqGFica3URC2vFfjV9dBcdXhPyVsb3mkBdhARBFn6csp5dJukuEev5X98vp1P",
  "key26": "B5dqd4BpBREVRch3g89R6mL8ofdPDUgQ7aAnYMS4eycqmRCaFb2PP6s7h2QqHA2BvVwEoc8x931cW6QScdpH89t",
  "key27": "4f4XgPwSXwQipoKuRyFpqnNUve3N5Bv8xj2prq18MovmwS4fkenGuDtNEXZMNdr4WDp6Sz6xaE71TCrzcEYdz84L",
  "key28": "3XgQH3Y8S5NtPYwtcDzjpwyaNzeUCTtGKq3h9XGXvyJKHC8UmVhAUh2oSktadBPfYHNaBwKHDgbfyAiwYUoP8LMP",
  "key29": "2ivQ9DXJYnrpzC2ewxtYc1ka8QVWU3UwRrGTf5vLx8jTLBpWrG9TtTi8EcBXscLKXNUVLjCykBaGrXUGXf9k7uFC",
  "key30": "3xj5n5wFx7Td9j3KJp1bUMzicyvkRT7DFfs4Cik97KDfhhmxkkjZK6iSbKhpgisTJmeDVpxGTYEWtJB67ZrFs76J",
  "key31": "YLMmyoSPNDFsouPTGrBTzNqoNrmCYyjwz3bKvsHzbwWSNzYmgBWxbVS6cgiWRtwpa2ns8zLB79i38mFfgWsEADJ",
  "key32": "MN4NzjQnXS5TDHPYHvnu7UGPZk3wRHGzDTYqJPMJZxfNWcgXZnzdorQqNTJpLHC6A9LzP4snPFRqB6xLJW1SkkH",
  "key33": "4RsUswiWURHgftcawdurbAQ5VgqE7LUhFqxvqkX5DEqKLJi5GYtwg3RA5wd3CQkwGRVSyyNXpwVhC9f7xwdLm53e",
  "key34": "3FAZF7o9vm5Q8jsXpgZS5qoR7vboDDKD2pbt84f7cKgVLdovaeQDhWV9abnyt7Ke6zsVcQo6Nz9jroRJXodwJrnB",
  "key35": "5iMoyiYWMqCmXkjab4XC47BiXVnDv3TFprmYzZemuJaBbgscmHYFQGLmjFtkhN6PhTKKob3LjGsYnFMCDY5WW4UC",
  "key36": "awjFc2mrP4q4m2F2SZ73G7wW53PsBEULhy7HGGhtL34mFDeHGiEfBBZSQ5ugKj8dYNCDFNUbzaMwqaGD1oZpMEN"
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
