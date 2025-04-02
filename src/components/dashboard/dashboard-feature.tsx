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
    "4PA1ZVPuBY3iwhhZUTSrKCytYwtvqRd82JTcL8maPtAFHei69225k6wfu6e9jHDJkzr3uv9fCPxUpJGdYNGptKV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qWk3CEqUrmmT9vaa1gD3MRe4VMTNHiRNkCYsoKztAweYHBQRPTXSBAsgpZDXGSCuZm1LCfZqKEysyRAV8WMYDLa",
  "key1": "4EppSDXdSLnXrzw6hML7sBDvknHq46w9WtmKUNjuMu9UUNMxXfFypoqnGFcPVbjZiQ8MrqDwTTP6iwhoUPSR5QRU",
  "key2": "2656m5QULaKgPCAjjzTAXpRGVKFJnktiyGEBRspLkszCVictvr2A29CMd9vN8t6VH4BqGnS4gbVRYWmVAj3JmFwt",
  "key3": "3mrsxEBpFcD7k32LihZZrTMDXTEj1TTXmKmmph6dEfLSCAtraf1AnbUVYnFkgbUMdm52wVJwivapF3iXzZLpitUq",
  "key4": "5dpWhAhM7FMBthG95zJEQ8RcdHU5eiVDEtRVXUGJuUpT1Vd4UXoxGSjdBe5oymnV95TdprTehoj1j9fYHijH5ivQ",
  "key5": "2q1AMhVJXMCpjw7N3mGNB1EpLs5jmUGW1xEfMqqN9m4pwKRKVrNn1G9aNiYHY3jzFN2JWfrHKnqF7W6NDQBxa1BN",
  "key6": "4S9fPYyQHMos5Thd26ewL6G4LiFtuHLdfMkXid2YE93cc1q638NVv2ngPX6qJ5MzMEFS9zZRtrJgYxAta5QAvfK8",
  "key7": "DxrJZAqFiWMbeNHWbJMGQswrDxm2Kfcfjmyi3rJ7iZDrjb96YG9gfJiSYAKGK1CudF1MKd1CxsouiWLtva1hmre",
  "key8": "3EfEnWb9uN6nUu3EkiioGEJ8iY7ohRCSGNPCKZvwZ4hN1psYo3MX6QjWC1zgTVne3epDHnMWJUnTiTksrFsTXRBf",
  "key9": "sQWNceZqtMPev3bDyGD6YufSyQAiE6AbwqjuRJwHCY7HseVjFUyRoCq8ALUAYEwfQxM16tCdjaJ9gGBi5QgdN8c",
  "key10": "62Z3RR4uJUGvf1Mcp9ZXX6r79ogsm9J4jcVwGKuPcANy6ijwMjaz6x4ELA4uYV7G3pix1R5HY3u9DvKcvk9VEnXb",
  "key11": "35Q1bANywR7r5YBw7nhvNeriFsgSdCXFVCqV9WiFPzsFcqwLPa2h4jAeHaGeaS1YnRY3ABZ7YhLnwTR6LE9tsVb9",
  "key12": "3ibnqsK9xRhR8xpwYpdadoGzPw1JkrXBxjXvbzA4yyNwbQFrGG7mbY1qHW5d5ZwFoh6SZKZkQRZgMcjk4uZWHCpk",
  "key13": "5p1e6zQoPJbLBYyMG6pCvWVmWgCDN68ato3MKwAkaJt7b34qPWiswgPabC52jFL9BT9V88Hdjh1gvkgdM4QkPUAi",
  "key14": "3hNXZfDrEdKy5JEvx3iLZrsyNyhb74Cbd6ueAEoFkt88v7VkfzRnDaTWjAsRwvjmtAJfgLzv3Kb84mkBqMC2VHzM",
  "key15": "2u7U8ZucwjJP1HFbGPcP52f5pJ9PhmavymeuwFPtWGzzhJUKJjx47PearwobiceQvnRvC9hcD1hdMPwv6pyffkgy",
  "key16": "21HnRkp1QXbSHfggmd9n3jnywYWuDMWD91Jz539n3QrRyUPvLu13azBaNQ2JytndGBZbYZNDHd2cy5p7XCG2NrjT",
  "key17": "HzwSy9mGUjzSnRHDumSqYHyx3pPaFTktcEr15TNcrCQMVowRrD4ZgJEcAyUxBxmHDpBnsFtX5VRFbgEmfngE5BD",
  "key18": "QRTSq1o1bYemRX1YK6Q8qsaiKMNzpMr9Sro9G4K1F5g2LuZndosPdxQtfU5jPPS51yDYyNvXF5ZjiTyfirapQcs",
  "key19": "2HKuNc5wyDju7wpXvhNXfQjFAQtKjruLQHpbuR1aDKiBz45NxFRgiffrmmvTAZQQLkLsQfnkTgBdUkXyUVmBZjpG",
  "key20": "EwZGEpDkdNze65YNLTUi4TfM6Xdt1N283MyQM6BMaK5WLC1bkPsGhR5CPA4FbZcJSRQLhfWKueFt665nY1xvGXb",
  "key21": "4obukC3UrwfPqYmPB2L9jJP3UWFY6SRdAke62FjSwnDrSjPaas8xAt3RLkd37TUKL84RPmQiaTZUvhtoQSdZ8srb",
  "key22": "54rjbmvUhTpaP76QsdnWfDXkNXVMtGCwrtXWRReFJ1yoAMAnDLmSvdujs5LhZ85NMRkN5tTMVshqTtxbKbTJv7HL",
  "key23": "3MtUoUQCogC32UPgoHaBojLYd4iKwwKsnG8btVFePxt2XhZvBMuXYdHUG9Muw2xECxbx49eRuFUmVPuUDRoji82p",
  "key24": "3W6AJffZZ91x9rjC3UEXfcWoH4Lr6oPmoRzganbJzKjDKPsb7nJ93UVrMo9ZrWM1ErKCuhLCyWHygQwh6oBVkeqF",
  "key25": "2MjHDtBy6hHrVx9TwW6S1dgEFiGsVo7TRVZFe8HV4rrqcH2RDt9cKmRB5Ht4SfCuu66UN8smKQo9WFhNcBUUSX5G",
  "key26": "4Aghf49XbpF3HmRdGc7A95YrL5hcYc2G5s6jE9SUUe4P2w6XwyQc59UrVdnHTshwmwHzKvV59cggn5GCgjZLeAot",
  "key27": "4Ej1wYQmzmDD1yczDNqe9QcMazhkTXoAHy8tTvDKS9Ayp1HcPHuugRB5uwGX5RX6jRoeWTErTr57Y9YxBn82Tri5",
  "key28": "67R7FWsfjWN4HqVkYLWx9rrStJRy1TGGgp9zf2xkf4qmmoP29DKyTYnxrgq2cFD83wXxh8VM3Rp2ej9WCt5XzeYj",
  "key29": "4TjW3UKvF7ygeJqcjqgLxk5dsZuJc6vMpoLwQ2Y2NDVnWorvbeeMJyogKJmn4d2BZFacq3EjsfQwCZ3wUow5PkoP",
  "key30": "2BEPSxBYxBiReKC2Rc4eRrejQxYz8VYX1HCAsFjyYCqydYF2x7aAiPJ2NvKjj2pMGDqkB8sBB1pyoznWDPNS6Uho",
  "key31": "2SjNNnPSWP4kX8urs6CFhPNwWkfqaEQpGMsAmhKckch33pohUFEJp338bped4p1php5efqVfzUmUHamu4zx3Uneg",
  "key32": "3RyRZCYvo87ZxBKnH45e9FCNVfJZ3KGUw52FmoNaeMTcwVzPQy4H7PaXARjJ6Lqv77w3DibtHDQNH7r9wVSy4R8t",
  "key33": "dUqfGUEiMQK4xqbZoDPVajwGuWHoyJG8hHd5SFNVWTCJW34o2iiGawjCgY3AZ9tJjEv5LfFqsd3cEWDYgs51SNo"
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
