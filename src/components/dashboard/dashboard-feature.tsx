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
    "4T2x9J4HQ2RAHRYzL3zGki7auQ2TmAzWTpnH6ot3nCy57TsfTsJHAw7gPHcngzJZ28NKaT8Yodh1ffYZE2zH2tVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VY6AtTbnxFkAQdUp4jufCBdLRt87ZWFeXwuZSbenqGt3V3Qkr3BDEZzgDLgBkcawQc2PRULQ2U7dNVNEFF7xtZk",
  "key1": "2XgZjzAn2wZ4hZ4tF1XSHM215RwwNLaGvZqKGwZFB3STaJwmQPQaKiBrV9VpeuXktL7wp1gdLCHBTfqEPS71ucaz",
  "key2": "4Lj15v6DbbJvdgdoqdxY6seV7a91PfrBPXWjUFabAQXQeZekUMDbcfwyh2VYrW1nbuZ2VDbAzuXGf45MN8NS3bPh",
  "key3": "yzF3dRaNyEBJt9FinFkNCTWznrEURMCTzR4iqbf54wX8KfZv3M8zB52PBCq2h12GVGzetUdgbL9QeUWLDM1PkwK",
  "key4": "42iEaB4PEX6DBbEjNhTuic7Tg7CEeuXKEAZZWfU5Kg5H9XfEoa8mm7X1ZsqpFF1mGvWh9A6CTGzResT4nJ5nR8R3",
  "key5": "3gz1Sfy8pPT9w3oNoGQEMRvEGUc1KYe2auxzKAJSrJdUUHbrbaFe577gBVDzA8t2q3biSyumNXEtNXoxncZp2s78",
  "key6": "5p1JSLHDQ6MqHaPtdmBHMfmxSrtPgDsn7dGMerTDQ43UgW74a7N4WKZ2FKGo4cqaWU46riwaxNDG7LMsZV5sb7W1",
  "key7": "srmGhH3ooQRqUHtxr3mgjCLLt1WhkET44spihiHLR3oUhikg6j5mMAkE76hUfEW2FDkn4WsDrLJDfzneKXEMsHr",
  "key8": "WaY9iFHcsAHeq6WVHWi8BYRGGaa7byeuFb6v9bLetFcAcp6JZVVNYuKT9Vwk41FBN3yPdfCfEFarN6eoRDixU9U",
  "key9": "4tX1M3xQwy6N5ErmuMZa3DxTQp3G8R4qGYtbHW3eXAuZuoPWU9cMvetEu84qgnkkxLMrhHLHct33D2MJ4iLsocPW",
  "key10": "jABrtReNTszAM6C1c73nEZ2A1cxzmqrzjQL7DCHsfDqqHFHvJFFMd1sr5TnURFx1XFLjBqMsu2132SAWZ2nzcbg",
  "key11": "2oyCrmiVsKnjsAJPJrjkHt3gbz9PNMt5Y8JPbcbaBYs3Fb8W4ExdidhVpNhvgLajZPY67irs62Z4oQvFjJvyaoxY",
  "key12": "2tBbfmSWYiofX9EXoWAKdZZ7MZiAQDuiPwxTLV19CC6zLkkNRJyqD9AfZP8TjAJfi7HfjprwDgHnaBhpanAh2TTe",
  "key13": "5JzAFkL9MteuQF2wLi9u4Ac1NixvNHmDDfkjTa2y9XzECpmTmNGtFQqhvzF8RxWzkkQWcPRqKjL42BCiuzJEzUbX",
  "key14": "4y6MYp7doLGd55eEKQpGe1X9P77vE5ronmZqFaZ1tCAShUpNuu3oNYHodJkGf1HzZuxnP1hqiJSqV9c3QPVKENmF",
  "key15": "5tGMEf5NFzaigQhrZ7xtbStFrGA52BsyZdZNm8HANmoJ1ud8KWA7Ci8gTekKb1tKCvZ83VBhiMRudzvEzyuqAHPX",
  "key16": "4oTQQHnwwg1jdzo6KJwys5hFWPb5ZcEf83QnS3s4rohYk2G8MZyMKAeRD4d3x1cUjAxXPay7bKU8MkeKowQ53SmQ",
  "key17": "4wtiMvE13gW3GfG4WwL3P5NWBz2Uj5L1tXXgBXGDjYBr5RUYtGbELJ72FSBN7raiKWDZzRUPEEuKs8DAcafFKDZ5",
  "key18": "298MWoQetBtKkKFgLan5xe5nY8jtii3VN5kCShVzgvwssFd7wtjBaeEnEibNZzKZTpUdwCDFcWKHUU5fkCs2afPj",
  "key19": "37FXHW7UivMFFtmsXWvGJFLUhCaMKPNTdEydS9Ru93ev5Jk1td5iuJiKKRKNXeKBx6LqZZfcaLp28tAYKAiJUpUK",
  "key20": "55oxyWm5VGSZPmjA3sZQPj2SFScvDS9vbXStvEQMZ1fcTJvHzAKLPCZFR4RG6tR1bcpihLGPTN6gCQTS29UU93JB",
  "key21": "B366DeBiRFF4nmVc9BmFVtRfJQiGN3QGhxd9B3NTEiGxNaAaMQWk63htZqPWzMcXiLqtNQTRLd5ttckYFjAowtR",
  "key22": "5Skgj5wo6JyvU69zaFPKNGqpxY5AFvkDq1K6N9ex5SJtYYXZsNSmzVXRjDpNXhoPdPC2s27XaosnWQ9mVfEgqY5g",
  "key23": "3zaX6ouBXmQcHtxFUdug1UvPd3t68uPbBA2UX2TEukN3QDh1McFWVa6Hen3J3xbXpCuxACAsaEPMg8716iBuhnBq",
  "key24": "4YdD5gGMCSBwZVKZqWPouNFhCBvUpcp4o3WXMKduWw59QbnxFP1RyKEkqf7zSpu6Hyyo2rF6xfxrT4sVT1Sfvuue",
  "key25": "2zRcBASVUHi7K4jFVAakZG7DuukGz1o7h8L1yTNPX4kLqh7jdPpRUCTgJHt9cBRpo2wkft9cqWvsG99L6Xxfkajr",
  "key26": "dpMjfWEJNfeBK3FETynxeUQGb8bjk1mTbxfgdvFW8GVFguVLKhk6jDEPAV2utv1ur8i5YDghJoKjJJ2fichouHd",
  "key27": "3QdJY3bJwyEyofKEJQa1xcYq4KXkJhdK1FRD5oHVwymiHop8mL9o6agnxNcrct1C8xvn1T4xDeecCQNGkAEqtrfj",
  "key28": "dmUT9yj7evgXmcE2bBSQbEw8B9q3ckDdx1oyxQFcYa8QT2E72SgoRRVNC1ydyrtS1Yw3vDa57C5JdP5VNATagtd",
  "key29": "3X2pSqhiWbfWtMnKD7RsXVjAJyManRogqsj5YqpFu4SWxWKWDHA1vh8V9Pjb4tj39XfgzeMXD2u49GwbTxGJxYWT",
  "key30": "tkprgpi9p3csvG3uAJiqU5r9zxDaDFiZPSA1WxqBk6CJNsZ6q5msixtPadv6VdfpoaXyAidt4ZoivZrLfM87Cqm",
  "key31": "5jdKuHAYyB83u3afWCqvyubDoNwmzbjkW4DY575UzDm39pXMoJD8NeqodN2pu3oHndy43YjqCJwAya4NfUoxYw6b",
  "key32": "5pT9xjhtEjXtGgTYA9SXYNMW4q7PP4XWHvBecLbSomUxcEzaYfJsWyXkJf5mT88PV2vbjNvfghSs99hFzabCDLwg",
  "key33": "2eqxoCErPNZwwmyJieTb2rWVyUEWvbzayuhtvVFs19gojRgHwV8kyi9vcFAGLqBu7m1DQX6Vru6piFouhaLzu7BD",
  "key34": "4e6UyodyEzB9HA3WdYgNjiQ6PyygPHfju7dhzRHR9zqK8XpRZV8GArABBT4CZCp3osCw3AwRp4JaY3fJRKdCiVV2",
  "key35": "47PA8Few8gYm7ugg51ugd6cgFLHpBq78KLFxAB8tJN1dExzXYwwb1ZNLrJeiNFEuZSxBDYSkPspG1yf5i1LjGa9N"
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
