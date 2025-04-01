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
    "4jqc2gTZyE62D5GzHTV5jRM9YDm9izengV2nfLpBEKkZTF8HkDfE52PwPdEp1B8imrA4VzsWyihrhiYgKgqJUExS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e53sjZ3GyeHK1jhrMdfxSmb9jzFPnkoPap413YkWrTZyjRnfkay5DqwvcaopneeDQSVLHcxjhx8UhJ6KyhkYwp9",
  "key1": "5ZePxvKv89axnDFS6C7Jt4J1eUyviMHy1YzpjnTaeidp5Se4dhiHNi8yvrvfpaMoKADmPaeSMY9638pX7EmDAisi",
  "key2": "52K8oYzbuQjRNmmgqo7yHi5bYyUJq68VG6xrtyAh14tYTpHTxgfGysfwhNfDA7UTcv3zgywJPhVM1Fhu63zcVtfs",
  "key3": "NzwyVnE6whekPfoCdea56GgZLWTyUaxVXtfiNKBZBYkfyjMPxKopzjYet8EQcC6U7Ui9qPrCzKVoh6PRCnZVFtW",
  "key4": "3Gydi6xkqghenqXBAGHUYVDYERmDH1FcJsRj3FtrX9Zviaz8HaDv41a9TT63AgSxyhXrGNsBQc4MRgmrAy6crgcu",
  "key5": "5jMdHEyP3NML6E6K85ojg9wPBtFrMT6ozfFjcSVHdkRHmXQKekEz6B8BwxdPpK2nXH7u7B6AUe8JsWRDzLYBi1uX",
  "key6": "4bdGkkjcmwvooe6CSDCrXZzTvtSwhChcuWhGRoupMRg5s3fBHJAYDkEe34GeB2nmNS9i4dTxiTxRgKjudu35iujx",
  "key7": "4V3Pq2ZNPPZ7Y9azVyN1TFMhNwrpSqgSd21nW5ZiUsDzLWtBq5Ad3EuLwgdfUcKBHmYkLHAAJPzLhAKiWLqJ9jcA",
  "key8": "d2UwCVCyttjah1NvSfV4ny8wPhocVtxDgqr8jVduuyu8XHfgELKGQVvTTnSwbDm49RWJoFWfj53qP9kcmuxq9RN",
  "key9": "4GhPJcfPWpuDF6cj6Q8E92tnfK9JKjKU7eh1aqC9RYbCBqWLgajm6B4Hkan54K9o4o3ioJbnSwbbfaxauALedfxf",
  "key10": "4bgiv9JVrSHqRSwWhJGY6ZVRWU43zyBmypLNbq388RUrzpmYUZ1hugiXkryn1tUYuaq96xZUB6w8DZNpQ3LunoLm",
  "key11": "QrUWp86EFHESJ6uoBycd7vnSz3StyHNT1EtqbBGQ6qPE3U7YMatis3gRL5uqayoKLHomam7tzzgn6cD6G1rtuYw",
  "key12": "2iYGTWNrSMdrwMV9JJtoY9VzVt8Hp2CWhJihpAtDVfLPz7dpER9Q8HERFuAMqrTPnd4HVEesddTJhxy7DpCWuWP",
  "key13": "4c3KCfgWdMzfNbYjcMNhxNnq8H4tJqqDTrRXX6gsKZo3xSyaAavggSgoZcDyHUahvbT8b91Cq1pfuShC5cgHcZpT",
  "key14": "3s2eCteuBx1butBSTCsAxM18U6j5MHfoicWANsYYwAXLeAo63rpWhfZ6wPpNJ1VafqcHFMyj2mcivCn2Noowcknc",
  "key15": "4fF8S3tKPE3RwWUhkKeKXgxEyB9HMKjxuf4BEc9xbwbr7qMY8jZpXHd2nLTYTywF3MYgpirfmbAzR5NTAkCNqxHY",
  "key16": "mzvNUmpQoLwVsLjorBtLh9XEZs1HZZKA5CdnMi9FBva6St9ejoemuAiaLtr54thSKuxH1vUTVkMnq1sLbUnimMH",
  "key17": "5WjPCs3SFT2VEqhv5WTGP1MMg8L7hPufbxFaySq1G7ZLhE5kBBNKm2fMttbAZ2s6iKYANAnB1fpQ9L66RgBwp7hU",
  "key18": "42rEhWLtd1cqyxHWicVDzXzwDksi68QR8AebgdymoTCfgiJvKyeQe8Di8g8fbrDRzDQ2SctFJAXc9bXaGHBxW1FX",
  "key19": "41voCuoUwqKESVVNR7d4xyupaqMJVJkvxyVJ3jZ1Lg3VxBCYCmkAo9nujWTj2VBu9FkKhNR25Zgqqo16RST9cBt",
  "key20": "wPRwjGnNF6JJxYByzvnME3aFZcVo1QKEBUMtPf7Enk7STPbAyNASgo7QTu1nAtXuym7JUBSVN2MQJGBcXGRu89n",
  "key21": "63RCKNFLQYBqC8YR8yqo4g5TZErTemjbqnmra1jZy7QioHfGgki6iyCp9uAPs9f6mZLRST6MGHXm9nDKiX2tJPqZ",
  "key22": "31URq3rpDChu81gM8AwoXL669kHbBtB8bWxKu76hYKt2CN45c9deznCChthPaodzwKzay9oEA776wU4zUMAGUSyw",
  "key23": "51txeEaVWcY1gf6nbnYp5gyZNFn1yNXuGWz9Zuhsu1XdcPuJ8GBfkSLkaCQocnu5xH1PEoTRfwo1reNtLffrp3Uj",
  "key24": "4BaYr5jenkd1vCpbdMnDSkuaQKCMV24mjJBD4i1dVpDvQkXDZSXcAtBmc2RnGEBEowA1fEEzgV2iKrQNUcFEJJpv",
  "key25": "4ZMhXm36QHb5YYwoSgE9TcQVirWpwVCmcrrn5XzU4qYC6VsXUDK6nJ8oe8Ntt2mg3EPC66f4ea7UVnPUwuoY5sj8",
  "key26": "21wiHVY7tvqA3nXQaV66RWBxumSuJiuD3gaWvS1xGzrDixqn2C8r9rng7S4UEDv8AKnzPMnaSp6P3w8SsJaDA6oE",
  "key27": "5matFwwNTkPU2X33mGZ99giEYAHqmA2UEpXjW8KtcCdtisp2t37NiJKHf9aGNwis1vMHJYfr5fJAm8WEXdPQmxeB",
  "key28": "3rhu9ySsaem562edEuZmC8jdrMh126M8w7QtLM67gsKQwVBAc4imcQWkNcBvaRBDEWruFgFVppqcZVThgGKYqC3m",
  "key29": "39kggXs7A6gmzxoSXt3ewMasmSjQCBQnsjZB5BrMvakmAKVfRyUUb2q9whkkf5Gb4YCkjKCVGS5W8o8Z9SbS2hro",
  "key30": "4Jw7xhvmAsSid1YfdpkTkTNy4Mn2HiakwwbDzCoXEncZ6Njh29wa643bMtDRMM3UoLa2JmqE8girSBrbVLnBnsQH",
  "key31": "e25WeYBUSdf4bMZG3wcHCM6yMQLFSnrNjV4rZL2J6DuQtpyyda6N2ccawPS1v8PTB16FpZUfNwWmssbh6fkANnZ",
  "key32": "3qZtLqS9yuWNSA2wByGSHaia3q7pdDDELsKYeu9rXsE3vMgvmf1PyqNV2GjfyqViYFiAcZAqgZ5r3LAwbR93inUu",
  "key33": "RMFSbyDNSi9BeGAS2Sjn8SWNkw2JKe1PVBjKnTpevPheF7gc9dxCENrzghQDYSDY2rgovbj9gmfnCf2A4DbrZr3",
  "key34": "5GqM77BGCZs1oYtFXsjtbR54JNbftVF9qm1WBjXpuXS846rRMzRMiW7HmAQXMWcFHcNmXokewE3TnCu483MFTQcP",
  "key35": "3wxudyTySmpK68hPHoQZsrEs9Dv9pygVcjmTHZk4CP1Nao7nuvJrGVt7hEmedeZyuvtN2cffeMsg94L5XzDYQg5Y",
  "key36": "3uY8JNPBrrL3Sa3nNKA8jdv4nr6r6cFgMC9rRR2uTvJpwpsnHREmUyQWtKEXus9VDDt49qhZ5ryShqvmj7wATGpw",
  "key37": "67Q4arnp7MwmhC9gbaAee84KBEM9gFb7VSHyKs3TcXaRUnVn2z6gVUu4BUJ4Sa73RpJt5ddvpM5NHqVBrUpKBT6e",
  "key38": "LZ5y29HouEvzyH6yXpTEaahgrmK2fRtrvcfyuYXm43AGW6zgEpGYX1qj7JtaABmorhomiscHG1rLsD6MPZ5K54e",
  "key39": "5iR2XcJYC8ZpREAMx6oA4B1j4w8V6oYad1nPt3WcGcSvuj4LayFLTs34GVP7BtDYjBXxksQBBKFKfe9JLY5rc4ba",
  "key40": "3iSa5bpzvKuExbnPX4GBSjQhEBA9jCzBKCzgp2Hah1uj3do7ezWnQU7uLDuJDR92apz6sfTyYGDgGchUNpSuxsMN",
  "key41": "5tjKu9y5DFEYZLsoXF6iTkEbSGYZF6eutNbiMWEWUf38s7YHatPKggPcCncFrcEF5LR8Mbb7crRBdjBH4daz5B1Y",
  "key42": "2w4PNqA2k2P8ht8XWeJzHzS2anvkxwkBQfDGdM7abS9ZXyhe3XNWX87hR68XXJRG1t2dAQVA5noMJWtwrpB4zpjB"
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
