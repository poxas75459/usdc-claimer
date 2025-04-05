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
    "583G6Zspq8BvpTDJBvgUJkAraADcYV4o6FTrGHKgNfhiKauThUMmXP4pMcXbR19gxYNsm6Net7bhmMXnCdGfQ5Vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Avm5EGWayE85sp34Z5CyXx4BGeNoz3sK7cpFVX67ohTbJXpiHXvRifGF1baeepEDMKk68oy5GZRujy9p7xfi1q9",
  "key1": "2xT3pm3LM2XoEJf16YwjEnUQfcSGKLUQsfwaJFfncpNsKYvDtgWZmt5aKtNYeHKADhZjTTNLT8ATGwusRkddfnQC",
  "key2": "4kiukK6dgrY45abQBAMgKoUC4sJcTeMh5W3cmmhcNd2wNaawQBcJHtCFMKVPiBH8tU8xnTpDuNQBdSzpqj9Vhmj3",
  "key3": "5esb4p7ZR1nGAzfnBDgfrJwbuqiJoTGkFYmDSgEBUdqxPZLW6UKqRjxbhEeFaqghx1XwQTiuStKjUn6NK6uuwbLy",
  "key4": "4jUPTU4tck5a3EgvNqw6u76cTnCVq3nSRpHVAhde5BEzD7yQXpgLHigaDkHF5myBPkogCrZA8seCdsyCPAY7v41t",
  "key5": "34ipcBr7bmfvdt5J7GG2Yi3d9KdnAVv76sbXBmT2szKM86TyrCrWE4vGDSi3wR3VKJLmotRiVNHPnRa2VhpDNetR",
  "key6": "2Cc65GtrmeGGy6XXfwi3dNQUCzaS25qoATdha4W5DSZuKdCR8fobMD2Fx3ACZBfzFSP3xRn3qBUu7NYQYbsH3hTA",
  "key7": "EXJjrE6SUX6ycLCBtwFgUHq21ffj26ErqLWp3GfHYi9VfKnD9Gej4CN9VUWUUoKds3xSF21u6F93hVsc9KmNzLK",
  "key8": "4cS1X1Us4aoJQSaZ3ssCbZ29i14sGwtDEHjQfjg59ZDQFEmFrS1Ho41Nf6vS18yiTzcFZ6NGax6DRmabxMh9Cyf",
  "key9": "3ZtbAup6GTH8aBHuy1nWrFhKvukBocj5qfTZod8YrBdkespgWQUpEjkvQ49KN9At9mytWuscQtwtaQ2u94eWMT5s",
  "key10": "4mQrP8bT8oyVHiy4UCToHpeuwvutizxF9FxCKjf289b2dA5vowM7oBqt1MPiJ596CYAWokhD8v6Fmx6qtTgjGkWa",
  "key11": "tZCVkzyvyGbyvfrPv4A8AuUoXjNt6DQazvrSFnYVu58t4ewPeu3yDVgu3UoFf62Q2pzoAhyyV5EDQ7UrLpqnmLm",
  "key12": "5qsAHRJM4CHYXQ9oj8CYfiRhdKkAdVRjcrQtXTCoJKAnYTVUjfYcAiyBk7JJqoi5k8434htZyuHt5X5TgSZRkHSr",
  "key13": "4k81QVTC1PGtKbhJAAFcxsddxadxD3KDgTgZ3gpNv654grraub8P5T9d83NmA2zZT58myqJiUmKtj9gsq839Xjn5",
  "key14": "2qYLteX5pZMPopFgANkU4S9CLY49npgruGALwEkT486F5RtH8A8iZUpj8wJdYYUL6Wfm93dSxShY3MeCmMyPU5sm",
  "key15": "2T7FWNHEbUvLGcaEP8oFfiCyf8DxomwxMGgWZRZaYBsrooMksdpJRqdyYtK3n5unvaCuNBoReHtHRRWL9qB19o3o",
  "key16": "3L5QMFnuLabXwDQ44C6ZdmcmLMbpMS4Ln7mT7gbUvB5tSAEt8EsUW7pELA8RR2W8xrD1yH2W8UF4X1rSqro8mkAD",
  "key17": "2wBsCXhq4zwHLJ5a9WUxptzu37YgUU1EpZ6E93U6gcXc16FmhCiG7yiAjSxzEUSETTedC6sK68sA7RD8rPJonwwj",
  "key18": "2zgciTVxXbAkvTEFfWS5nb9PQ8gvxKsNtj74z82yLM1KAvWHZKsv3s6yGhzZccDRiMNaaS1Rp8TzHr4cxVSWuB8R",
  "key19": "4XQD9FVQTdggxhFntXDHehGkDQ9P8SdaUzwmdSMuoQBJE6hbP33fCFeabDq6oToR14mecsgpGf9LxPNKczcy5bVx",
  "key20": "bkKVP3wF6yxMTcwzwQMaxnQEQjeVue87UQv8M8yz2DZ2T2qYZdcFqmymrf21UmCQcPqjrSz4V2NoEz3FU6nQVfP",
  "key21": "3CaH6AFBNsUJ4roWaCHnLQwcRBgg5BeMxhXWsrFRanKQ8yVhVw6TLpvBHDawx61zMLsEAxDy3UtNbdfgRYsGDBVs",
  "key22": "5ENyUxjsvcy1cTgFp1iwdHEgkTJV5r7BWNhPGfgDNS8ujNEmdTyJXjqoaPD42qxZzZ1maeGJQJLKJLwd3FyCQNTZ",
  "key23": "2UfyhtoniGzwXvKwhggbQ4k18L6GGjU5GedVX26Kmt5U1nwTwPcCtYH9GUN6z93SF25Mwv4Y6h7ckQ4jHk13hxeq",
  "key24": "5RDXMuqUkTsh4RPUmuev2nmEohvF84KLTVeALRxv2CKagkgPswpRBDBCXHdPJqsaTfdtkVSPTNDvQYJyUuLe5VMy",
  "key25": "5AwdHPa6dB5wiV8y3F4xkJGy2s3JeS3tw4t53ubB2vdcUxrtqJM7BbErqcGwuZiRi9tKgJZrh9UUAFyHAxxL2jgv",
  "key26": "2STiVZx48GDbq79u6vEtavdFg6cyoyx2NJ8842fAzoPUXkcAoyqU5gzKN7J85QFghnNco4rkZXjhz4SYygiGBZVW",
  "key27": "3LbhrkmfA2nsFZ9ACxMqdejWh7yxbP1Uzbojx9SA6Yravcrs27L8zcegvphZBjYxyhpvPC56bxeoUmGHAa3V2iQW",
  "key28": "aMHruJ5oq8n9YDE5Si4Xx8RkB5a5MLQdaDX6ZcmY4whtvUbSZC1kgRXnfRyPSMDJM8387wPi8fDKWNsbrCZ25r9",
  "key29": "3PFnPWoTSMtuD3qpfRBXPTkf8HZvZCr4jwTSU4Rp43yCAW7anzdp65ZVadAWZYXjsynPFN7bG13HVang1RfR4gpe",
  "key30": "5J9PCmdvewCf43MUZiNfhhUMzawHeCmPtBnNiLPT8kZnmcwgrdVQCFz4rrNvarQfMfyBKPme9ME9peFQqxD8jr5L",
  "key31": "29fashhpavx9daHjCkFLVDesyTvaHw2eeSXpiGUnm1SctZ3GDEZe2F1rAiC5hbrwaZD22gfn7yGBnS9QMtSiHt5V",
  "key32": "4widYEF6GiXU6Ys8Nj72iXd61qst8eC97htrwQSDHhEEsVX354eSR9SPGktXwFoFkoLNifS73traRiPB5hTB4fRR",
  "key33": "2Up4RSKoe3FWK3ph1zSFCqaBcQZcTM93QYQbYPgGqJgc76gjaDsG5oJ7bBMomNYNd4rBZ2NfnyiRDj4hsEzp8GWm"
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
