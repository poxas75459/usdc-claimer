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
    "646R7MVHw8H97zPE6ag2auEzPdgmU84pFp2LUQ9ASuKMAUEHvveqELGMfQyPamoE1Fd9Kod6GnvrXrDurL1aGDbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JS8fJ7seHFygzDBe6N7vxgZzNs5ibC2ZWBXFrgkkjfwwqX4ApSnTC8akjc1JZBaSWpSEiUxX3aMwpUS4j42zpPF",
  "key1": "2shntrX2nxWJ7Csyy9wScpK7cZpqDCWhyo6h7yn89cAEx55hLs5qdvuxmwZaSinMb6kYecHart9WG5avCE9mwEbk",
  "key2": "wfKyPEJ4amuFAJSVhTKk1pEFUNSaW9jhhSDQ5H3rfCzRYS54CDQhRNRngdYYahM2PTBAJ9h2174wmY7t2xYNrNP",
  "key3": "2fNDNwzDNLApbdf6XC8ubN7LoWiMH6UY4zWjq1snYBucgZtZ38XsAb2o3MFuz9s6YsycQt74Xq6KvgEArafDPguU",
  "key4": "5WT34dNzuqm7pGGCSxzNoNtRxiug781TaNUZdiuqe63rNpRM7DBdMqGjELZ2XsYhh7GyhVwXShkUGdpnTLSs2frk",
  "key5": "7FU7e7VoGv8wug5rGWJiS9oxa2pa4NVAXU7FGKNUcuEPWd2qrNociJLRg4mpeBt8mnbgLMWKL6fses1zmo5Z2DJ",
  "key6": "3Y1s3QihzQAJakVr1yebt375haMSyWaVZ5t5YbBzUKRDSfEuzsvLry741LXzEGSKPzm7aKdkgea9FqwEA2wYioiL",
  "key7": "Mn9RaGFqhSN8GoJjKAFDRjy9Mn4xKrnUoyCCiiBQbHrCkuRyM3ExRcZ9BYjLhiC9XZN7fGpFifPHSCNs5mzDtMp",
  "key8": "rikaSJ1mfXxJz7vBhL51ZL7MT4GhkiMaA6RQU8mdNDXiZ1ugV5EYon9ZjVxDSsY1ruEBtR5wUXnrGtgz9Qgsu5R",
  "key9": "2ZvXEVJCFQGJMx4o7DV4YWgz9Wng7YcFn8te4XADebZ7Gn5bbNntEdCtdz3QeqMsRzWNtNQPtr7Hq8cbBYnitpwz",
  "key10": "4KCfhPgAanTpaA2NWfgH2MxqvJsfByqwkNPfmeaCzBhgum7JgpnsZNHgRRkufLHSXQSuv3t1F5PnBLWEF9acZmQX",
  "key11": "3iC7mqkWnGhdWRZQ6ggfebYF9pcM7Ttgphd6QzxAHGZc7PrjJs8iANYEZFxwcN7j2VkZt1HPzLLUB9VHJQ4TDuJV",
  "key12": "2WAJSfZjDhKf5cYjidWDRtbPNLqZx8SfjGtLCRhEM8caeH21kDAewoMGY5puTKPbAXVdU3e33MppBUXK9Ff8GpsP",
  "key13": "5kRotrUgKRGbMUnCTgXycck4Hp15uzphYsFz8J1oDDHzaZvVMp3kvb6kd59Bu21Ra3HqNBYcVgZLEEehBjgtp8FH",
  "key14": "2eevV6NLFCt2RYM2j2MVHuFmHaSopvPHe4YGzL2Yf62fh8CxDwhWGhbgSXQxGyTW3UD6z4WWAzjQqE7Pum68bztf",
  "key15": "JqB6mXjviaVmFBhiYaZCjJPxNkTm5stxYYGUFiqbogkszvJmgCiHaXUbKkDXcwodxpQJKKP9HcFTXBPjUck5GF5",
  "key16": "2yJFJfjSi51aL8MNJyx8LjudCJWkWntD3kMoaSX4VmejEjsSdUTHTPXEBEEJKeRHYPbQEaxb9VC2AXeSADPNwWAF",
  "key17": "3jrZbGD5ghu9tpvKmdHV1o9Z5y5DSYPkaMPeE8YbjAg25jzVacEZipx781D5SCKvDR3KULs3RdribDtnxme3Thb1",
  "key18": "37t1YjaiVxJucj51sZ2mZB6ZopiMV1zXKiFshYK8njjkra1h8yv5zZHjcYLE2sRfTyXsy7oRPWSwSZtsUMdQXan2",
  "key19": "2jKwAacunqoGKUXt6vg7g3YmAvevev1PHxnmf23qZZ5Q5FnfBx7m4t3x1XW5kJM5tPRTffnQ7Vur7biNbpD7j5Rf",
  "key20": "5bMKKnn8pHX6VDXcP2zSarCRAL2wT46qfvH9Pc5CpAzQQfSPjzZkXGSVodnB5MXvEAYgRPkPBCgSeak35JcZq9Ve",
  "key21": "5Z3QyhJ9j4aSAfzMtrgQ2iubeXv8RrXxFWMXATS7Vto8RLJprMd5WZSB9DXtrKBAZtaPdX5cw8y8o4n1BRCigwi1",
  "key22": "Q35nZucnaFJre9wMNxcZ1wKJcZtKDzVGzfWoN9Wvrw8b33WNGjW7rG7qYWfoKa4U5X66CJ3bZDWSF8PiTqnkqo2",
  "key23": "4GpYKdPvFBJDS3j21ZNuhwD49woycqFbkxXwmSn2nhB6gocPErHsJMJho6Ld6eVtTaL6u87KqiEcPvPeNnG7gcYK",
  "key24": "W384wqrvsic4tjv5Ft6RJoxSUV4msE7A9z9Mmn8f9cbdhJ1KmTGwJN1G6iVYoBVA8rNZGX9Ep6hf8gyKZXUJPaD",
  "key25": "YEiCMrfXfSA7Dv1iw4qdqYowF91gYbGA8dqBAxNjRDMtE25sgTNBEJh5WRpskXTJLxX78uVBgrdGQe4anooxMQB",
  "key26": "44hgvz6dv9nQCY3x9fLsDb53fjjmNrzqRABFmX6F4LxqFV4fwNQNiowCzw2ma8qNHycuUj5P9iWgLxhmzVfF194n",
  "key27": "3MhjzTHVCK8nNAsxAQrPpqfGCCk88jBB8hQcnMjBS8xzPVcdXaz2UMyiikRkPv4GSXhZLfrbLLgUrpAE6FjSTrJ6",
  "key28": "RFK7XptMqMEn6VUMgBTKJGeY75uFU1M84Fpkkg2vfp7ooAoVDm6LUmcBA4om2g9CyqCeqU6emjASHCRJVcofeZA",
  "key29": "3D6iYYtmr3tQrneM7KaVBHTXa4Bb8aNn9b1EDw2KRVfppRa6ikTCHt2NLgzkcVaZoB5kEy5x9ZGH1ZM4kZoHTjZw",
  "key30": "4unZhdnr5GScdCN212EjqSALoqr6sfmuqjoPpscA1Y3W4Nznhrm4zANsTcrh46Vwh6RfsCnN76u79VHsnCDiHTWS",
  "key31": "571NqR9CcR9MGayaNqt6iy4mwb13rf4LkP4m35LbtsuFTbDFBNMZqZo1taWPqLwfH1zJosEDJR9a6QHKhCC9HmNq",
  "key32": "UYHkDKQ5Lvjptyq1zFaBVzBjXmcdjbbqcbeQBMgMpf6Vb33xSPdbVnbm3ugXXEDt3SLNkzPZkfA9z5cEQEcng9z",
  "key33": "4KeXRXkvmdmxazuzxc3uXqzkFZLSmtPpprTq43C95U5mqA3B2NgzkJ6EQ7VRx57s7GnXnA6hXfHYj9Lqf5qxQ1oP",
  "key34": "2nu22cdcvDQMqqdrLdrAo8vFZyzFW5iGe9NxSkHo6nvTR1phb9xKGKJ42Ro7SksneAi3dRGLp4W6NhRwGCWHzpGh",
  "key35": "35whobWALnuk4exEDve8iC7ws7854YjwYhW8BMjU75dmNZ4jTU98gf4dCmvAEFJxwykenNyfSCTuRMp5ZzFeC7Rq",
  "key36": "665EBkLncku8eMEYQYd4nnXsS8F3b5aDJrf4AxisHdZxrNv5eo3HdUPNmtCo9DbmfbZi1MKooiJ49R9x7XkHVMhR"
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
