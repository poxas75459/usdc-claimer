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
    "29j7yMChB8mYtD6mDxxTYuXVqhVgePFdrRTUx96Zbsa5btjeGz1Xn8PXNDWyRFVSgK9BAioLubDCVKAqP1cgkj6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yggEZQFBVTF9mYygZC77FvEJHkgTxopPkvkeoFeUmXyhTFbhvdj5CHigMMw87DBYj32rQSxKEjXQAE1irqUkPux",
  "key1": "654pWNphFYYsgkkYAZFfNPsUA2tLE1Y4CdZ5HdGSQHccHF4S23nrJaHdRRPSpsQZ4XTUUTFGMtB7CNCaGYYxfRDs",
  "key2": "5aSkzK3AQKfhSozAPtTuf6AemPq5H4N7W6ArZXQEf6zJ413eKMpfP3SHBHWWWqeJT3NaXNVLLKYUnvGXtgKUU15L",
  "key3": "57taezCG87ySsTgJfoAkmff5FmmhG9hbTXJYPW7zaP29BXeRft75xroagk5duwqBzfgsaAwS3g1eT3RuqhWwPDng",
  "key4": "3emcQRrRNn5K2YfWAyBFn4zp2FGkrp4h8DTLAXSNW1YuJ8UCm4YUnzBz1uYm4pHq4Ygdy5aZ76nTaJXSY1kQLBDM",
  "key5": "5nqPopBAAmhgzw3Uxx8oHQDRjZQxWNNC9FPNZmAJWfRVUEFP7cU79ucw5hm9Zus3YshRUEDN8BfukHqfAJRW4TrT",
  "key6": "64s9bFgxDcK4pvNoiTNoCezMKXnKRpcPocHsmi9dfpij5fUFx2MmXYRE7ehSemkeJSKzcHs9hK96YM8QQhrSxyV8",
  "key7": "2Bw15LVtnxuM6PHB6hn5iXQxtZxZGp65XsdBSLvAwcUaVujENUAFS9qucKBxrmP5LVRA63jBRzepmo1w8cpctxbn",
  "key8": "2AfJhWJb8fpxQgJSpK19dbeeHvVZ1WNx2mAUaFyTWhnGHQXNhhEgSV8oV4thdDp1skHzgTbYzmfz4ak5JGsScpJP",
  "key9": "5ZC2FccEgPtQN4kjw7TBawepVW21muG4AC9UNKemj1zXScWL5nA1t5n9AY9FUobCjRPo1gJXE4dGvVhF5A3yi3XX",
  "key10": "VkNgwU5jKaY5Vd5cMEj3FKU9UaAasMzVTdgzU64kyw89fh2NLdxcvGGhHnBDvSBjaVzmvJVnzXo1jDV8G8MnHWf",
  "key11": "PgfQ576BGUFo4FJ6h7sudtrZ6hijhdsKZsStavKHsRQMeG6v93SF4uBRmiEgdMsrfJNydrKgGxT2Jq8c4yQhjrv",
  "key12": "4phK1qAoLRrdhLCaLo7s4h7wJqQcZnmVq7GEx7AXPKg6HndfkaCT5cGqYzpf7C73ZWDisR1Sy5ztqCHMkRrCdfBm",
  "key13": "sJWqi9e3dn8Kd69UkrJ5RB43bZrhWDvhDTQFvtYwTJX4ofp8WG8KT3wFXggdCFuQhte8wEY2xWmVDuL6snSiW4S",
  "key14": "2xcrouVYrPaoe81JJFh7GiCpje7TKKsuptKp5k8CX4dVPncjnqiU2jg6N5LbGmj7PXf7R5MEKhzFMkUeSnPXBbY8",
  "key15": "4JB4mqgo7vPyfR2RMNefuGPs37ZFT8y9eNpM9YyVWR9BP1WV1heBxJe15VtJSNaS7tVktZPL2vKtFDGeLo5tKFfC",
  "key16": "pETnQ3PZJuwCCmqV2HL5b6HMCayxFLNaEudhqVXFDhbKympcvDTaSa3APMv6zTE9QfmshtK2mbBMBJHcLCNRN8U",
  "key17": "61KgVU1EkA3n9p2VWnrXhtjJurc3rCsxS77UJek2dKvByeG3m6QACrG7Urq3cbzm9p67rZ31yGdoikcwqctgGWtf",
  "key18": "2KVe6XLJCvD2qdfVxoFerUrwRLR8SUS8L2wKRRAyT35Q6txhWC3BuQibfNtdhzLB6VVhe2on2TKUr4JQfcRDbJoi",
  "key19": "ZnC545Fm2DWZckDPqbQ7rTS5FbZqwYfdPxRSHoSfn63GNJHaLNrv9K7bopw84ziQZDhC1jGCrPYkiVEb4EcJv6K",
  "key20": "3YSvuGjC6NtWtk1J72shVDAfCfj9LjM5Egb693nmZ8i4DjpKyoHthgGs3Swg6C7rjgdDeoCFYMwfEbFQ6nAMB2qK",
  "key21": "7tk8ghn9Uait8ACwNeTyzaZJjjR98bnqXaftadabrGyozwUMWwtX3q2U3sKLK7Q45zrJYgDprwnPx2D6kQzeq1n",
  "key22": "24YePzugKrPbueM7o535nCLXky4B64PESTeePVatUhC1XFtZEDFj8pVZnPJSwETSwa7mUatK2HQBDsBoWPfJvPQq",
  "key23": "3E3ZbjfESM4iPATstVRwAtT4HN7aqBAjA17g87pfcP7TkeN3BcGxcBLhfkALviCynuYmoM1udU6iUYQE7W7oQsUg",
  "key24": "4ZFuo8sGvzrds5BnVoi3BCw8A65pVcW6MR9BxhHvDvp4kW86eowR5pnXmK4V27bHiXQDCzmi8H9Msv1cjQdhP8xC",
  "key25": "ZiusYWGsmojt5CMKTkoSiEsXAqUSLCJHCN3prFttAxuaGVijhbjSr1ZrSUvDsGs3vGsFbSn9LMWqURox8u8h8C6",
  "key26": "3nzzyFAmWFkAZmFPfKneKHM2XQ3FPBRKVXRKCXx3xjFAby9ZkqfdjzFL4G8R4yVbC36PTqanp1s8di8QV2zwkHym",
  "key27": "4Js66Ue4csmdUDkZJ7s2bL5eM6EYGsFeqXvpkAch11EDaoyDJohBmg1LQTXtiCwK36Wxv8Dru8ThLJoaYQ17s9cZ"
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
