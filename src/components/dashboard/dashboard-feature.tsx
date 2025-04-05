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
    "4wwuPjUpPH7yb4jiQs2wrzDBSD69Jq7WLYSvH9SezXqCYGyPLnsPSWiiX5JGuK5HBLM8STHfHUgta6JDjsPqKNiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26SnjPBFaji961LbJkvz3HnjtSKEm1JB8nb3HqnrTtuAA4VvrPnMPpmczoqNpbnzCYZSpUUhrqwQ6nr1tTS6kgde",
  "key1": "5tGzzVPaEn3VBa3YZn18aA9RP7rTRiDNPAhY6gpL2hhyHfgtBeY58rSxL5SMADkDLiahaPhuJbmHGwExYkLBP4Lq",
  "key2": "3Fzvhf2M3kB4QqiebcGGGNKRKAGDgnVidS66Ur3q7a1J8qaMjKrCGZZKVBmVUgMyb7VJCHAYSqUrwan5RSppsnyQ",
  "key3": "2EMYbDKVTQ1LoRJ4VSzY9aLJuRZ5dYvADAiBgSgAsbTvSp86yNgoWAC76gXUy2jyHB6ejUL31cdMtobJYaAEAnSX",
  "key4": "3FGSjQYtyTvXfiCA14tUixf4kvzhiRdBFuQEHmXJBbRcMY9oEZoUdTnDJ7ut1FAEosMaMhnNrkYWjrVL7wHXo5tn",
  "key5": "59SShoc5YgP3TAgmK69UiR1Pgtb4mRxfyAMMSfAJdCQ86c4XKkDwKHq4YpyGX2Sgm1qzgTBFjN91PYDKGAu5G6Nq",
  "key6": "4TqFgaAgqQrSAiWLUgbjE96NdbNYs28xAyGSMXCagrMTddqRJronSgLe9WFar1i6kTJr5baeFwGvf42Ei3hzbC4b",
  "key7": "JcqpExGpoxKhvCyJN1eP8eEiXT7j6MemZwpEWM9PL9jStYFu45HxX2HqCriroNTzqvruvxM4WjYQmxpAy9isPwy",
  "key8": "8hncJJuUvhL1ReFg2sQF1jJuf91Ay1FqUVL7BAz4cjw1LRWdMQ4rVA5XjNmR11QrJNi4G4R9eQ6WZr1P3VYuZop",
  "key9": "45PYAAS95JiCpE8PxzQHRAnpeHgKkQp9dPeKxRhJy3D9kUbRTDwtoo7bjU7qdsUSeReXNHJWjDZNx681nmuueqmq",
  "key10": "4L3QZzv6Tgc8hdwgVdynWvBGq6RgEWD8QCbkq9x4owPt8xbroD5NqHq4GiPbrwkBFXcxY6FyM2tRntpyL1QvGwC9",
  "key11": "MmmGEuqnrrDoo91JE4cCA4qsKXYUSZzmg5AZJso4z42ptQyiqSymiAyW9VkwrXehwW8WvvufsHs2x9QAzPfPdxF",
  "key12": "4mwqv4Ycwaf47PYpjbBbmTLtGkibUUusVNxMviqcBi2Lp2H4WriSkuA48B5zqYynTnC883Uq6EfbCv5ivR8iEtRG",
  "key13": "2kqg1avmCvEDpxj3Zs7DdgEF2gaYTE8KRuDwc9U94JZuBwg7qimWMB63wSjEjJGWtBz4S8hLtaH8PXjggJFGxWwn",
  "key14": "39VYFqxvroRY3xDNfwkm9699eDusc6t3BGSkcenVaG4kkWkowBmf4VXmra3JByuYvMPhKxZBoRSuWtk5EsJXpwTt",
  "key15": "SoDAFv5SijJsesCqwbmzM7YsepR15LjjYPUpN426DmyP9Q9ZJ7vyCqpJPbn4JhNPXqqgUxMNvWpppNghH1ez3Ap",
  "key16": "3VJJRAe3BgXB3YW8a4jknENSw8GJYJQTHfHnw1WBgWHq8TssnPftHtsApZNX494jKpUPTFSF3jctdW1w9xdbkfEY",
  "key17": "4iXw73akpdcJKi5kjXQK8Pz98VBrDrnfgxAx6ages7FRZtgeDZa3m9rvrkaeSBVGvsmtQhxnpb85PneQRrW9YB7q",
  "key18": "2DyZFuRd2A7suWwTTxxpPFwdWxW2PrPDm5S6p4eL5SeEerebMSJ9qUNVCAHb3Wd6b5wVSj5dHFwJHkmKA5T3vFCB",
  "key19": "2zqKtqBTojDQUVX4cksnksCqRtjJiYbPiVuW2zPmGWbESu5DkvfbExH1vpmwKZ4EtF97MFqiYFGihaEhHB3ZC56M",
  "key20": "C9L3X2dvCpBL1BfT4weBJrvKpGdZNJefhYb7ru7fMNRMHyBGXvCCBTDWMdUPRojhWj9nSMkeyWDeW4jjK66pYUg",
  "key21": "21pXovdG5neTx7b9TcQwhvYYwFsJnjEnpSw8psFt5hLyhZ3dVxMLhJbxiwCcbXm52eQ1FJerN1RH4m3U4XZjmWWW",
  "key22": "2uLFmS4yXjS5Y6UMT1v35B9T6yDickbFZoD28UbdYdviQkFx1qeMptB3aNvyYfRA3KrqRye53uAvbKTn3xK8dG9B",
  "key23": "5ALDKfupmFveXrr7GgwuDEwTUF1qtqMjYV33dKtn64xU2SUHbqZCkBp5J7dwNWHy6ESgETAviJvcjbGELFkCtWdF",
  "key24": "25mw2Lz69fKsFFeKr6xcAnBuXvu3Mjs5R45ETARb7BSBjd982vVam62aR8GmnKwixJ35Yg1VxTgfaDS5JsuoSCHt",
  "key25": "vVWhw5x4ZmiqPNCCaVA6XdgpR886eZCT1zr8npvjpW6CrfNJyF6ESmmm6NBc9PBYoefW7uMtEiiUqJssX8g8Lqt",
  "key26": "4dZcq4Y8Wtxtbzw6BiPTZq2ZQqy2pTwSQc8YWLkwWrPTsNNeR9xM56e8fFNkcEGvkwxGRe4vGwC4NaruqZ7ABd9C",
  "key27": "2WeJ2KD1EnZuAMZe55LREJ1BBj6FuThutS2uttztB9NpnXK54X7WN5whBv48f9fweLQ7Mjeib6QpBF9d54Ec72qf",
  "key28": "56dNLC6j4p4E7MkNCvLSeo9jrCpedpgxs3DCXGridpbDykcNHqERTbbqCBPb7GCEbsgQeBe1oG9mk2tdoFTDtDB3",
  "key29": "3BYrTxj5Y8Hz5E7bqJtF4vCkSoogVSLnPpL3nHWvQjcfuANEGfrdRJwYrkQAKmFDqJ3ybRzupGpxEYKXGZ6pyrPB",
  "key30": "3nZgdBMZd68TyiqKSZ33PwuBcanpgE5fMqCC8F1695uBtZxZJ7ymQrGWLoxgk4A14DrAQgpWM5UHFKDXmGzKf682",
  "key31": "3yJciK8bUqwvVAZpkWfEF9u6QC7TyveXJZ2Bx7EkVwiKpX9vJriZqDNrTsKL8NoeJ2oRtR3zEKgxk9pUXoK3V68w",
  "key32": "5XtxJf7zS6ozUb24NKMWduhD2rWUyfs8sChctrsAD2LhwKU4j6ZnvbswWk5H8Vf2F5HVnYFZ3jt4GUbKyTXtMMVt",
  "key33": "4wizCU9DLN5aqbPvVVcbhop4TaxPLNEVvJGPJWNxDyaBWrex6ZtUAETHHmJkdyqPcnnmWyp2QYmWhHXcwLLZ6MVk",
  "key34": "2dofi1zV3wcf8vg2nHtEjjJnfixKzL3kaBVUXevvyiWiNqtS47uJhQcRsF5kpygG1PmGR18B9pDDTHEtEvrSnfhT",
  "key35": "5FRG6HwsrY8woW4NrEwXojHwAMdhJhdLFs4FjqBJ7Q6rSxWz8vfARAG52AqqWSrxJ3k2RSpgGTz9mJCJMr4rLWb6",
  "key36": "47diphuz3xaf3k94yWAcZQnTQcugxkNmW9FWGqHhPjZaStWAfvkhfhxNN9NuMzW7KtE9DHKv4LiEzEPFTHTCmSRm",
  "key37": "2xidBJMSEEjrwinQMHHk22WW7pyX1TxnmGpNC9u2cqA5Qw1Rp2qjtSVkkgBezRdRDdrZNjWU1BCy846fMrPiY2Ua",
  "key38": "5cMRaQ45Jar5FhNMAiBPvzaigRudbh7WZUVvRxeHdVoSM8RQreJcHryT8b9iefgrQnRYy88asJTx22WoFfh8mvmq",
  "key39": "2gSt3aVnhiQdmaR8GVJ15VBsxj7PKiZ4fLVV7WNStEDcJtn7RK881ccqnSLL1PCncYcm1GXarsHTHCWSe2z48qF2",
  "key40": "3bejuPYUFHWSPCQhPfYx2uBvXV8m8JkxehsLDQwhtUsQmm3Sa7Mn1asDVZfcQqvqsEGGACie8UkNyxKDa5RGLXJr",
  "key41": "v3cbR3mucVdJYcRx54XZHcZBpQZN9PeCSpGWKSDNMDnhxhxP5PKNZbd3nWU1jFUdTZtT5M3NTgV7cdM4g1FEdzq",
  "key42": "4gj8Moe36xHuUx9FQdKqsTALFf49pU7dAPVkzutgKpnhRTakEBP9zw3iyTtq4RA61AYZq1WPNwKzkyKnU8UupvM1",
  "key43": "4xa1SoVHedxD92HUtbqimpFN8FJ4BAUC6XuTMwLYNCLXdyTaQFHrVHxg8eNfF9fe6GW8zFUyTmVq9eaPUj18fu3S"
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
