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
    "5PAKvzTFqUGMU626K9dhTtEenjY67UKRWhF5D43g86SZYZp7qJK1SiPtNzB8X1X8RDo2nbbbaiY6y2FEQtYKAmW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qRZepV1sTFvvgt8gjr9ZG1Y8BnW5FzUjy7NRvGeA6769a6a11wokw5MwFrjPrjoNcism1oZW4CUagkYq9PVpesd",
  "key1": "5XD9a9krfQ7P6XWEaP4JiRfCX7hsESxbyuUFGS4DpNzMJzHs3v5hQeJEw86De9wSoNRdXUG6D77MQVxFY5EpPtR2",
  "key2": "4Tg3PPGseBwqkKTP4umzoXYbDoZLMvLWyydCtBMJpWRddW6wBS2hqndNouCMYLppCTDcmrG6sQz4W9xXfLxF9KCV",
  "key3": "2HeYyXKNUzsTbCxSrz1Dvvgv2GFjjYipf693XXAbNhV9r6WbuY5iFXQovbYNKcdePeBLDWeLDHgAn7XFDfr3dYtQ",
  "key4": "54JxEsZRU4yTmkXkx2YLaM1FYjJCSWp2buyRYRU3mNnmrkZcMHL78FsNDByRCa4VdPrd6RU42zr4FGPmVzyCnwfU",
  "key5": "4h9PEojVnFfMez49Bti8rk6VJN9CKS9bwvhPprTm3oDHCjTE25jW4GK9Zwfmcz195WKgCwkmynhKfAMLZAYTDvKT",
  "key6": "4pdNivaUVY52FGwp2Y1CqNi1KVm9P3ssTx72zMybwLPfgo6JxgMAJvxZjvWCN5QGS2DQ9dDfvHRSkov6H7ghsc96",
  "key7": "2vxX1M6dBF3PaK57Fx5rXSgaqvmtD4Utted2j74r8KvGKXtpaXVCss6AZW4XSwqAXfv8vJbsbVfMdDgubvinA2Yn",
  "key8": "3zU6mpaPH4qEKxdz7HyPmKwqXW3xy9NmzvSKa5rM39EJBFNCECF257i2ZakLGAZ8252FNH75BVYLTxBSthZCKvf4",
  "key9": "2748VHSM5KP13qrYQ79yNSftbBSuQ7dpLgGQ2AYLjhP6JjsN2GNgfGKBdiTm1ev2xxSRSnrGSPsghRTMALwXtWv7",
  "key10": "2HSdsdBWZ5UP1ubbU8CwSU4xENxHAT1LpsYVJTRwDomojp6MkkahpymnM7KXoiECwhzcN9mrm4Da6LSBZg8hV8qw",
  "key11": "48kDfKdQvEdmwHejyMRwTg3jyYFUJNBP4xWTgVPkUq9nJCi1FvBZ2M5g5RE7TweFJ2r65P8qRZzgu3VRbZjxjDxZ",
  "key12": "2QY4z5YWqKFWCdMX6vstoCdWPkzemnLX7ZNht2sGzjMZaqJMbSMnHkjeZnYgAgv7Lpq81UeQCyhESpwmWt9593hD",
  "key13": "2Rm1cEwkupXtWQ5ATpsBPoCzRUMbLZLpeBG2pX4ZZNecy4PPxMznBRrcGaqgqXPjQFkXvytoWzAVZHDKcu6M2B9m",
  "key14": "4Ejaih5AmvHXJ4xZA2bLGByAECcKmhFCJaKJuM2xidS5k1ECxKBViZrHupmvwM2kAWh7bf5QksnDX5kmNSyXUjqk",
  "key15": "udj6CGNdfMTkwmv9qkhg55ZQM2TiRpqzxWkhKFjP7Cq1K5yVXg3mnjsonea46AG3ccWNnAbQUzsUd3XL9GK4yAG",
  "key16": "2jVJahWUXQrjPSfS9veENnrbNpfD2kzS111y3JfSHtdtm2yAfeRAezf7Bqj6egYcHRU4koJMZDsmR7wn8fkNQHe5",
  "key17": "47zMpsXjDWVPP7EC3BDbzjWLibEQ4BUJUsnQES11YBsqopiw9cN17ofuWDCsgVkSoVumq3nYDuLrVcNf6HUUq15X",
  "key18": "4J7BZQ1NG8TTXwwfNddVciZYfJTYaQUjQfQSR8bywRbLVf9SDWuz624QQobHMnFn7PdRyA9miAcLTKPja8rFxkRp",
  "key19": "3LD5Bk2qm3D2De496hEyzck98tQWDw4GESvKe84vhZzyoNEEqGdTSYhfTC2wUXE6a4TBFXtvfeEgAeKLLrgn5FGc",
  "key20": "2dY1R5u36q2SH9QtmWa3Mv1PPJ42YQYu41fHtmfU5QcoRhrERtpYRP75i2W2NymDLSborTfkk1o8gYxdcQ1gJHvM",
  "key21": "hBJpVqB58zJmCu4Y5TUErARjTU8Uue5tQhyZdTVfaYkCzfjxc4ftsdHK7vjFWL3b7XBNtecnMxpmZYS6m9ux7ot",
  "key22": "49MjtysN9iQfQEwc51QtDRYaYvYVJBA5hWBzfndTAqGfEFwsEPLCbW26B9f4LchSmgGAuBz78GuW6gEAAGGUYHzw",
  "key23": "4C3L58m2BCTWN2bEJtJ4i9bvK2Bdk8RpQeJAF8ZbpQALy868QYBMfuMFJNS9ys28dU82oNzW7ZB9YkMwMTVyoQxA",
  "key24": "3orHq1W55kMkeJURJp9Li9wpnRxv7Ltm4NrgRHmCMTFxVUod5Gd8cg7WXwxLwUtH2d3w5t5jZLKTmtc3XDm9UuA4",
  "key25": "MVWG4THuqtfFHkpbnRTzuWKYmUoDyF3pJwwN2gSyUuWy3eqKhe6VJhhj2XkQXUKK6swnNF4ccn1UAziHTG5X5DC",
  "key26": "2K6Yh64DBJZeV4SWWYw1jyKfyJkNxvAHa8kjUqg4Ar87Po8qgPVSho8qRn8N6AAxwyvYbkH5GurXairiinwPN7Sr",
  "key27": "Ru9UxtwqHTdZotL2yfghYoQzrmbuLKLdP5z3GwAuKydwQyoL9DuYKGX5H1e6hSTuKncwbe1ZgmGvUPQ8qXfvi4d",
  "key28": "2JW6ZZQthK5P3qgmYnktuwpwChW8r1N5Sye1X6XUteL5rv3sWnGdGf7CCdviokRhRw99W2etS5Y4xLhnWy3esarh",
  "key29": "4cLbjwsauCsAHpJoawmVpefPz4AczadAXDWQSNsuDnpK6aqCnFitseYCBsvz8pXp5gBtbXZC8JA7JgwLr8y1uhrE",
  "key30": "2eHAm5JLsAuW1CH5sutAFDRq8dFddrLU5mNJZxxDbnJEGu9Ykdt8smyTJSnJ4V6rDrfgWmcRFHp5vpWw9BAcYCtm",
  "key31": "2W4T4dFXyzaGaoCDPDRrVtpgtdgk4Vtqg24Pxy9s1qqNLCoR2pfSiMh35Zo5H93CaMfWbUcXnsRKVfnmZskfE1zL",
  "key32": "4RioTsptEx7JmHs6du3eC2sx8LdAXCes7EsUW1w71AL2vzsHcDg8WVyuG6ZpeHAmA4bPcJMWXmtbiyrbYNLFKA5u",
  "key33": "4ae6VLAg3wP4AvbS2UFVoWaPG27HUm75wLTpR6MVfU5YTRF4JksqfifGQ1f4tQfT9eqBuDW4k3Mkte6J2M1oQwCC"
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
