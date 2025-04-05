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
    "57DSi18ZtBPDBR7cvmmkAwBMhFopvHGty94yZ3czbfRRG8xrg1KZwsGaYiMZU1UHmkxGQAkLm2W5KGvGQ7wQFu3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bTJJFCtVVvjyQWRtJc53pe1SSpVKkYg17mM4foiGhrtGsmDHrr8orXiajxmZaHfDarsv41qG9qsdhUeoKf6NC3C",
  "key1": "2GWEHehwFwX242UmNXiiQvoS81FgFJp8yCiz7NtVBdsDSpxnTz11aAT887thdjfgZVZaKKUFCkuVnMmDJWyP19zR",
  "key2": "AKRAZp8RZExpESRDFCJ8SbV7miCXwJE169Uy6ijoFcspjLXziSZ4itPMGC7DJ9bgaxygQkXsBEYeDxt6sxJfHBn",
  "key3": "4i5mmSnbyqsdsxRg3vcHtuqXQUm4TjakyaWnjsDXVf6gv9T8jT9UjFhevG7yaQwwdrtywhcbuYFvaRrH2SCx2aFu",
  "key4": "9AqhbWkCgTCKYuAPjsdBMPaY188zaNLwF3AxezgfBx1eRKTHJkzpR32x227bXjKZo1iGhh1xQTc7T27KzbBPVa7",
  "key5": "21JBwmJcgoeW5GtDnSn7ZCvtP2dUGvZo3rxZPT6H1wxeBDDur2x1CZMCr6Lkv9Q8HNKVeBrTVrhPdTHqKhVvzqqt",
  "key6": "3LzrXG5xCRRP1pURrio1cXLviCCnwVzF4LP1A8Uvzkg3nPvPYNrtNK6HEocYL4nW4a1ruD9zQvUBLcEKEX2E3N6X",
  "key7": "4LHh69wMXQuYpR5xKa1iw5DphYheYYBjfhdyQ5DX2uiPvk5PpsoxnYxmZcHZoCmRfWB87DcXqRyZ6jc1BLrybM9H",
  "key8": "2a3y9k2q364J6Q5HiKasG6892ZX3vWzAsLbMVawWdHA5zmBDeaikPkseV1AbDa4NFaA4gKCrs8NXSRnkEuUtNGvV",
  "key9": "5vdzw1FAfUp18hqyi23LmSugbqJ9c4mQHLGdz3ERpVxe3NvjUvcWYRCEbUtQdv7GBtHpKMYzzZMiV3NnumkZcpDu",
  "key10": "5ZXhcQEe9dpHi8M7eMznU7Z6ECZpguAvkQvfUudieuHGi4Tvh2u1DWNE5PFkEgBP1UuxEryZPV6rou5W3mUVMTa1",
  "key11": "3UNUhhXLjXdDm6KNcs9LDnwspBkFJWaMc1U9XrXk6qLoNSrJn2vDEpgVtmf2FZvJmHMeA8idgWRvF1YMDgHdYiqK",
  "key12": "5qseBpfimnzQjUiGftW9eFQtV9gm69LY4BszKBqo8eirK8q3Q3qjaXMVDKtz776jMQi9KuPWKNgvvTjL9MUTsKHw",
  "key13": "2wq78SqTuKXSTMDDewMdbveFAoDiK4Sx1KQZpqmHMQWDLSRqfMYcMdrmHg6LYEPTp1KdwFBHiKZCmvNCstbvUpiF",
  "key14": "5stuAQCsGaFK5XxrdnhNyxjDKBbcGSamUk4FtsmYt2MB4SFvU4uiPg1JoFYnqnZbPofFuzP9geM2EZoJ5upSQKat",
  "key15": "5WJR3fwSCu268qXm5fs6vScZ7CAH5wQUH8d4Q6C9C4uj7bsU6xtkmG4DJQ2PGtdXeN29jLNf29CEQNLpijFwdRjt",
  "key16": "326wdxSJPajTg3xz2Pb3U4eDNAGEYzHrU8mKnuKvb7fmC7bVmxmayEYihTZ4FuH6RzZcVJSbHeP715es6bZuvDA7",
  "key17": "2LMK1wggacCAcEtefXqbYbayVTZFAFWVSnweQwMgXnHszCBeqBzM41kY3Z6TFoAQUehTGaeREQ2sbhB4GfTU3xud",
  "key18": "3rr76GVshzPWwJ1P1sQRqFrJbv5XciyG9ZVGTobajFCis7tTQUmq9fjWdSUa878Gp5ny3wbuspxiBL5m9MjTDHgF",
  "key19": "2DahWjeLMLJuVTCAuQ6gfWorBvtkZ1RRP2gUoaSrMYUGU4H8bVv174BaAppYogqN6JwHx36p76qTpyVLmToLPph9",
  "key20": "4Qq1j2u1Wq6ZjP8Pf9FdHwueQa7NykEX2hrfKHV7heW8LYBrjq7GKX9pBPSHhxdxHbxLi3FQgSWKVrN44CikeJoY",
  "key21": "2snTAdahc84dTVrTtiuKBx6pq8HinVWoShe1RHmhGMtejgxbaE9veKXHT8JUuyuTqHv16XPCyxv8H2U7ce3Fvxmt",
  "key22": "4dMwHyTGYrNWyt5Y1M7MwEiauGJCW1P3ZyVCH95z95iaFxZNDBHB3exASsPTuMC6Mkb6ttVZ3N7mi2SE5Nyn6axa",
  "key23": "N8AUuUdPtkDwfNJvr9xvPhaPUsMbrBfsXEXRriRKGUtCbCC5f25XqAxLBbB6CCeJx6nHwNXHQsgfm5XJspDhHQh",
  "key24": "Z3BQgZ2eHXdPnwDBHDALgG29ZLgtA8patPKDb6yaox1LrdQKbGFN5qFEtU7EnndNq1cda7ysvVeszLTd4znQiKv",
  "key25": "2Uw3LFL1H574VWGwp86bzqgfG4DFyXaZfYASEbp9PU3M5NDgXtnn5wFTQxBSVLmg4veMC9n5oYQyqbpYSJTsoZgo",
  "key26": "SeZrcjmKD3koLJ72s2he5S4LdP61vpZ7BXE1NwgzLegEyMMyCpbscLL51wMvXmjjNhLqcBdS7a7mS4AYRy274NS",
  "key27": "4hzM5Cf8PoyhAPHW6aD2FVzZHGywNHNzmWHnz4VCngT8H9W3HSbNTYtCetSuqkCXmUFcPh7ppGcMuAy8fbogkNom",
  "key28": "2cyutGVCS8jAr6C1m4mJepZzbi9S8WPCcMoYf3Nqc7rwsnKU4kiBSh3MKhmLaJKJKtrxohb2LBkqbo6agA1qe3pv",
  "key29": "3htpMnSYVv8KEsg1jCQqV37vxjb8vs1WgmsBJwoDFZUx6KS3v1Znw7wABQuPoXZ15WDw43uZQEyTc8VVpYNwZ8br",
  "key30": "4RFFqNiLBaUA9TwgbGwps9kTBqm7Jq2FnZe4pKnmoN6YntWQHwr8VNZVUvU54dcRvFNoqicJ8fNgGa5bCm9DrgyQ",
  "key31": "3nRvU5rLf63qQeoS2qyvwPW8LmHgCWq5rTZoHh98Udapu4jpct1eVMkqTE614pQ4DMm4Km7HvvkGvxwFbmP4c1d2",
  "key32": "5Cd9uFoGUthjWVWZxqfXN21TQM2qQERAEXZj1d9Z61j6wVu2EXn7qJTHQhnQxa61SBNSjdjJgVR6FJ9PMt65Ak5w",
  "key33": "4snibuJM5Wgh3XafEnyCnxJiRWsuxuqWtD7TYAt9JxHriYdnAcAnSqfLopyM7Sx767k6vtx8f1t6uHWMUhRxXivu",
  "key34": "2KC7efidk2fU1Z2bvgcAc8mZ9tZA7i8wHvXPCAvyokmisRgc4UWp7cmL8TmbDTpHB6eugpmT5CgjpWJRJjmhZRny",
  "key35": "26ETH7pw1FuSDjHQyXSEScaN8fDr1W1C93w2nYohoqpeNoVfrLp78urxe1aPko49dhVBuUjoQPfRRzroZcBexXVt",
  "key36": "4Z1S9KPfcPnriMP9fvteQy3NtQcFkJXpbe5Zj77SFrZeDBEN79PmKTWRumsvrQmTDPCBawnkhovw84dPQZMi3s6p",
  "key37": "3wvreFPeb8spJPFE411GX9qFtP1SniLQfSN1PwnDw1z7KMbNBqQQ7Hne3f3v4fXDw1z4JK1uLrBDYB4ZGCUCk9fW",
  "key38": "4zYgFBVvyNwSktbthrTii6uLXqPvL3pADs7WiNuHzTEfqFA6osTm5By8aUv2nHQ8ttGAWqVAdka6chzHpnySXLDj",
  "key39": "ALZ7eXVruyETbkFVNofbbhDeXEE8QTpTRWCssnozuW7hetPb8UrKhnmvyW75hZwXLYC5LqiZjjFsd42yCPGAByn",
  "key40": "9iZ22zDuza2NXCSpa2AEPbTFHbhYLKpVGwxTC8ZxbmhYt3QVtoaXMAC716KfuxqaoPBvRAiCpFZXnvTmHdvQb5h",
  "key41": "4Q3gFUihSmgKUefsDcjgk7thJzZPjHmGFMPzMaFdKdPBZ5NpoGfc29aps1gN386mKkQXQG7jmBiZEAaQkqyA2isx",
  "key42": "5ZFeKGfqWPkEY2HwgqMv7EmwZ6dGmzH9v7RSswVep5u5TN5V2wEkcdvht2yR1m7XV2G3k5othzTB5Yxyh3D2Z9Dj"
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
