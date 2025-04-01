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
    "39V1uS16J7n2dpvkYNiV8iSdHY7iFsuAbm7r1DXae28BmMDdAutYCJVmyBMHCrvZtneXbgHq4z6tSbR62zbWNBQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59jsiZZMfCJvYcGKUYFzFwh3vFFgz7LPxR96MKmtPYZq4E7i4owGRSNQW17HKysYdF7ihKYpiJKMxx6FpR2tNSsM",
  "key1": "5YuvFAobPX5pK2DexkCZcrRL78CHMPMPQvoNgf1QyBLSoqZYFXcQ36zb7gd2yVvHum6hZCQJh8GoyMpjPToSRy13",
  "key2": "4cppeAGEBB9TCs88gSB6WNc55LkPEBUVLri3YUBWpH9s7sUdstdQtHGbMjaYUN27T6YgRtVdKY4mhDZE2LHBh55X",
  "key3": "4cc3b5XGgBDsuerqR21UbPmvdViWLwV4VUSQLBeCT4zjxJXStaXJhYDKfPkmRHoeE4pRp3jK6W9LKMQL2meQnsqz",
  "key4": "9pHbUevGCZujAHHUWxXYkhuFR7HpukvCzmpQ3P69nnekYjPocHEHz62A61aghsWJ2SWNNwYXQ8G9k1jQCo5xeFU",
  "key5": "ACkdSkcQsD9zVnACnioQKWTsjqV72pitq8WRTqkGhCv2jXNsbhRDFtRgNgJp3m5gVx9KTrNadiuZK14ydcvzGcy",
  "key6": "fCftHwCwybsW7raYcfKcmVpsSnUr1S9w4K4oKjToaWTwm2SeoRBFhRPBQ8wnvgqqN2ygi1TknLkhpkK7bwwtmWN",
  "key7": "2Uyt4QX81s1cHGrnqkxFWCDa9U7pDRekVNq922M1RymW1vkef5c9vrK8PxmkhoYDmkkTDyQnZ5HVojpPzhUyAyLi",
  "key8": "3mprWRbjPZXKkjRtDMbntBefjijVVc5dXeuKM29dWyq1a3WG9jPBqe7fWakET7Fi8EsR3XkhMMsoGc89JHMB7dge",
  "key9": "5bkeHgfg9HbRgYfSEiV5YzVM2YDL7pogEySKxwNM5jMVxvgkgMs93Q91URQXZx3ytoYhU98884ySF443mK4AvrGh",
  "key10": "4JckmXF5UKp2exKkco2bmkpms3phqtNtuuG8qVsb6BT6kQdecu3d3uBUPTcUXrhB5FH4pqxk3JshBKP3xXdcr2cs",
  "key11": "4sH3sJcFaD5Rspm1enYT9EGgUbDYffVBiThnUSot7LpEDpMDyLP8WyGKeZq4pzje2qfeu7mncfmSC8STRJ7hM5yE",
  "key12": "2fmGh7ujLdDCYPWcBw23xbUyMFhq5Ktjs82No5keDCLswmhSqV2hkWVvfoJVXRXecehjM8diFtYkZm8JoGFjswGy",
  "key13": "2DUom9rAMTEs18m6q83BKARWWerrkByVgFX733HiEAetCkNZhUUeHXWcDx2Xib1NNKfuvNAgQh6x1aGZwTHchSQS",
  "key14": "4z8YhZkxWDnfoEHFea4pBPGfBtPWtHLM89p76jZbvVzVUR8cTF9jfAtgXd12Mtg6bvAB7hhf1rewVCd4VjJgTvB7",
  "key15": "5V3RCMHVCKcdGKYm3zpXTJguo4pYX1wVuTDT5vqnxRZWZhh6Evj2BgBeoqaRoVkscBm4VWfJQkFaV5zBpeL2w6GW",
  "key16": "3G7G8352dhNKSuYZ9vZjhav2Xv6W6YrKqjnXEQ6iL8tqdhTZALzUMcSMUHhKARLNcqCmZBphUb19HF7TPUgoH9Va",
  "key17": "Gr1yh3N1SZADax6PMJ6io1rtmv9GtrADdBrAjf7i2WH5eUeVpkTYTwPfhYVPohiCdX1JkjuHKk3BM59SwtoRrF9",
  "key18": "2UnvUmjHkHRGrd6pJL8yU2AjsCQrXQrz58awGD6VNnUu4H9aG7mcTX9fgxJfGS2EtWNuiAxnQeti2yc5vrdJCLaD",
  "key19": "4mQBACeHpUEJUY7aEWTD4ziCGQk3q3gxpGPp98nwHZSoHy3zc5akMNyUyHbwhw6bHh5jAkj3Rg5S67XJdsKtr8R6",
  "key20": "3HPkmpksAJdo2C53nfo5JwhD79hu5Pdjm5zVmAdH3Jq5mrWYxNoBr41sSTs3nFShdNrdbuQFiam8dhfWMVtZTp7",
  "key21": "2ZDYNCPuanCtxGPQggwPCtbEZ6EVLU29VbPoVbD6NK1VGveN819Hxi6rbVQzzyvngNVrLp5oftYu2muZ71awA3eP",
  "key22": "2ThLFiUFW81MpsQvw5Y6kAroMHwnH1wWA2i3j3YPNxsvmdKUjrCRYgR55udjZ6o9k2PUjdzLDMyxSF1Js3i1uvci",
  "key23": "k8PWXKdSXqMZQWkhDBmhsf9mYw151y4SkY9Fvkjp3sr2gqKaAZFi2JJRC2QV4ZjSVkHNTK7zLUqSbTby2mmTmgB",
  "key24": "m91YLzQNaFiFwtnzHjNLCYy3FTBqGnp2TxVma8z4iThum7nDpuzTbb5ob9NKeGyuzr6uZRrfs2xfXb4BCrc4eeC",
  "key25": "3K6kYtaT7ynXte7rPsofojSazBoBeduK83FHJALxkEtwHH99KtZWouFJCvTskyzNTLSwkKMz4RE9vRLnK8Ka6mDH",
  "key26": "4PHD4UmczNSQ5aBTqkqCVXwDnK24xSvSv7Lhho5cxFKs1N4a7CeFC9gWJzFSGDFn7uJBCN2WqbJ1VidVKQSKLQQ5",
  "key27": "3qbKGeyhvp6HU2J2csQaa35T2VvAg22azs2jLS1JCu5hScYstH6bzKbFwMsXMdJrAGXmxPxd6xe6aw328yDXiwMn",
  "key28": "4WXTwDDPPFzjq5XUNVPtDayD9ppYkkHVYZFLYR3TVR6SGCu4kbpW7UsXm183YhH6LA5qwLu99Qra92E432NBwpq9",
  "key29": "2de2UvTwrfbL7vhumY7Z3DRBrZi7Y49gkD3EuPLQQBrhawPddjoKzBFePgHu7aXSZfTLMU8XdqXHCKep9QK5cx6p",
  "key30": "2BHjKBTdWzWpVaGRGTQgZxc4HpShpuq7EzPitm4qsStzV18cW1h4rwh9Baz8Xu2EyHFJiuh2DUzhNLr4SX3vcenB"
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
