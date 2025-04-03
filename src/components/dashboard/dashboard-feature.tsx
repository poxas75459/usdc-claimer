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
    "nwRQwtCuwWUmLHzENQRvVH1pKzqSFFvVbWWstpAtjQJVxWaQn7MCktwYUnJhZ9tYqczSp12AurDKyNmHudGdUzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ALxbLQD1xjFbEjKnZsGSAmRnKsq3QfA1KcsXpQDTDqz8Q6NNhT9XZQJhrPpsWoUo6MmYXkFM74VZkZjBBKWaLmQ",
  "key1": "3VVfQYVocmNhh3FAhnd9evVfjJheUNGc9aGWyL2E52pUk8UtwYRnusubqwCANjD7aV9C2di1Tz9WvK93aYadrU2W",
  "key2": "R9Fhog5KJQAkmtHtNESU5TEmSb7ugKo1pBNVDkthhTnLAS2QPhBUyK9QMwV4NgR5HHFb1kxkvup5ngt9ifE6mSZ",
  "key3": "5U9y6YV6QUAVSDEgcDpefabqcQxuERWARcCdrWCpqQz7b3wZVRgBinfUuQvehe6qSr1NvcYL8p2BMHnz3jwxSeBB",
  "key4": "4jJufe8Gi6LyqriD65WPGnGVmEdTZCDXubWVTmuJzzW7q9UmJaR44fE3i7NFjyanSnQCnpjbc7EMsWHZ6jKtyoHW",
  "key5": "4vszibpQ15TuakHko8h3h75taHupYwC7uzL4qR1jUptFwnk7cReCKJwG8omF8eEE4iYA2i9JdNqQFDi3A94VLQJJ",
  "key6": "4CeWYfEv1GbjSGBcVGHXhPnmikHse2T9k3CkVMk6V8Tn6vzJT3NduqkRdUQvA1Nf8pPBW7q9hYhivGuLFLzQoKer",
  "key7": "5NVwPHDqyCtedenu6CszeBVSm2er3N8RmAnAaXSzTm5FMeKoFuRzhJnmq6nH34YRFFNouriyW8D1b8kYvV1o9kym",
  "key8": "37cVQwBNefoxskHCuaCJWTZDHhH2XLpXXb7eEb2KqWoZsSbQbsV8dH46E43Sep6PezWSPCsoLQKHs3oyJhsBNLJU",
  "key9": "2jiKcXtDuMjZJPjTpdJhaT87C6FodJ5utsTyATv4NT2VMLM6THfcPqQ6fi2EvFUsS266XBza3EVtTcjFqfJuSbgw",
  "key10": "ShQkpHBSVq4sAysjsWbkisrCY7qgFALHXWQTu1XhF48LJ29mkzzpy9ii7rSq7rTjytuLTWUzCyLo5a7H3ZgLFcc",
  "key11": "3L9tTH5rqCuqHmiXwU18FTejs8i9WiS8T5JQxokpA5tNtbazD9k7XoH6B3QV3yoEkfHpEJwGaWyFyYjmfEEfzUzv",
  "key12": "3u99JiTTafvnNfb25MrYTBhZ4kotWUt3rXECvYW6V7YuA6YexmqZTnBGAMc9oCfUAUWCBDzmcmjrRiQV3qfe97qP",
  "key13": "AJUhQNduqYTfjdHfJcUJqCxyrvquzG381kdRLsEQiEC37yqUobP5mQeKAnC8casujY7JAwTNw46Uy6dnP8Xdv2h",
  "key14": "3PnK7QZNeL5uiDmw5roRua9jhucMgVzGCBnakiwY5vdPjd2BcgHi4pZKfEA9rvUVN9Zvyr6DCiGiMVjXA6LSi3WD",
  "key15": "3RWBJAjz9SvDRFTrmSrdWKcZRUewFwEbwRELSjJqsbzjCJQGJVrDNYTDqYzYH35Nbpn1WjKP9UZSjS6WcjbnYXcf",
  "key16": "39LnRUF8tMVxvKbUTRCvQUzKFVFNfyQRNhXWgk4jDHvvSwVJb1BXKsiHVxC7YaCoGMStichjzDwXQK3EM1KhdFWP",
  "key17": "iSfUV7k3UsLZA1be6459W5SvSTG7UyocQf77gN71CTVwRx1nQ7iFtDakaKjmRCbnHxB5LtWwpJV67QZvb2LnrAP",
  "key18": "4kEDkm3muG7brXBTN3UobP8T4zdN8G15GpzBaCKfsEhdMNabtp49mn6ovHpJL4LPWcaKauBikuqShgX6B6gFnr3u",
  "key19": "611Noqrvcdt3jT98AUmEcp9jhFJcsWEkWLAqXvyHLnwkkpYEsX5yMQnqurdmJ8XwxjBToB4EHkhBXsPqsEYqYwjB",
  "key20": "3iFaF6SrftELoZ7Stv2nZqt3jSifqt3sBi7f4nDxijXPDEHCxNgP66iJoJSVGwFRBNbNCEs9JjE7iZHuuJWPNkZp",
  "key21": "5wkYxt49Cx7pgVDSjRRQTiNTmNxW6USNC4YRchc9DA4ZB44XXGqzrD6DUjrSrZeDsw1QdCfEaUrneWroQ9zLav2",
  "key22": "3sdWLrSUwxbDhHVutJTDujhkMjcC5PRk4F5bmMotQJgCKSJgxv1v1M22MygsFGfbYJw4kbvADiLU7R6H7W8mXsSZ",
  "key23": "5nYCdTSzCJSVXaR1maAne516fvhUG4Ro59f3MB4ejhaVfVeXJ9zuGK8fN1EiYwZemH3ecNkv88t5uTETdkpeYNhG",
  "key24": "4bpVtym2mLovTms5DHaDYrzUMdxsy58VntiAqQfJMrSXtSDLiUm5Jie1CYmtEkHsJdeuGfycwqfNPZHYN6fBh1dU",
  "key25": "TQxqDnVpXwxDEUP2rPp3yxE3FZyrcufMSDAoj43K4zENp7Xo1qDFA8pdBnmNpuJNsmA4NUognUKGLS3u39U5bPo",
  "key26": "4yhb19z5AFK4xUEVmJTv4zXUyxrwP1kv2KBFL5WCFydtMdVY6ApH4e7CDiqhgyUG3ohK6349ZTEV525nCx53dx8A",
  "key27": "iQjLWTQcdPoZp3dU1Knn7dHwydyS8N4N4DqAU7UXidb3vioKJ1hMSmAk4okNTWzc4C87q7nAqtcXksdF6mpeNAh",
  "key28": "4poVi1koiGdyvVPHbAiJv2cCzBf198MyoopByWC89CHEsucEWkwgrgmaBCQEYxxC2w3maUUVZTjYG4ptpg6SSYhF",
  "key29": "GGJq1gsA6VqGeMCRzKExBEUomZV7v9wD5oUkkaM3YFq8PCs4VSR9sHTj1xHf5E3P95nkd3tAgpNRY9aCMpNY4SN",
  "key30": "8amHxzhJm1scTiufUsEJEv6hNjsRzmkCRwAod4jguawuHLNszyNMnnBnoGPi2UYhZMUyUM6mkTgM2XwzcQRaL7u",
  "key31": "41D37fXcTqnrzoWywNMgnsad3KSQKmZ34aFhgiWNuQQvVFgSWGtaAfWBVwdg5BNk1WztiniDtCGGNwEFjWCXNYFK",
  "key32": "fCqFD5b762gbU4SVF9aKQXrbGJ2wf99qZYaAYBbcasZCsKi6DphKBdBQCnpVrcJeydHebi65mCFDDSKJASHnFit",
  "key33": "4u3nzpUULKcZg8v8dBhem4EdRZymPeyK9DmNJPG4eYXiWV2ZNXao5Ki7qNSHbqbcfTwESa4giKUhBz89TQmpUUXE",
  "key34": "Cq5bRFWgsJzmgDevvVbnLbhuGRnrJNCT4KD1VMNGQ5eupfeTzfJCqT7R92zipYzcL4piCEkYVH4svjBr7aduUjc",
  "key35": "2NAaT1owDUp5t5LNYxe2nUBJze71nTwX95L7zGZYTPNxi1TBBFQBKV1k7XecCFWyuGBQ7et8gX9apSKDPt8A3Q7p",
  "key36": "3GFEXQnR482NeBrKv74yJ3om4zgKY23JMGCgXQeX8SeyvxeAZHmZci5chFrxnbZptNQQCqMJio5rZU8GpgFegC33",
  "key37": "1xhNH8qMrm8xmwtArbRFD7CvgkYnife6ZRLwNescrLGjrrLaa5NS9z5tXrczZZZX652Zxn5oEdiUbZNs9TmoAks",
  "key38": "6516MdUd3MVLxcECQxrWwyhy8ETQDcuWx4hR5ByMN2STUuSxLn24z1pekoNzV38iHfwux6cz7kixA5worXhRKRi",
  "key39": "4f8oVmjArjMZXnqdWPgAs1Sh46aHXg8bagfACT7iygGcsNkS1bqLvryBbtZbmCay8HtUm744FKLYnTUnNUy9s1uq",
  "key40": "2XkgQNEpKBUiu6iqZykUYq9qzQ86A69wNCTYx66WH4P8fRQiekKW3wwquE611gNHcysivDTPesQPmAi41VGWFJfk"
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
