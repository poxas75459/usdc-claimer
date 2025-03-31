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
    "2Y8f4E2B2bJ86qdReiMeRGJae8YYgAgzF48fXGoHSFhTaTtnkzCxTgKdHk5ANToVGffKMWEXJufatYe3hdws9Rnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fASoT5h6F7Gt5Ym7XmwLnkR19zFMgcf8JM1qV5iUcrpg1oaH5yrNw8LJ8RN3FrfzsjDikgUt3dVpqnMpSYnWTDz",
  "key1": "3B6VJKpaANU4ZjZbB4oifbF1bFix2E3pCA7oxmPCnACkfQrjZsyHr8h7PoqLpgCh8dPF89z42fB4DFjjCxyh5m82",
  "key2": "2vV8BE9RtS8zoEfMbT1A6MNVGZniPfCrMwqUjr84x36RBa67s5VhtRXZtHK8qK58Rs9A5f9aMfDfCi8ocNMvWLXr",
  "key3": "3jteb9s9eYi6rozKEi3CnQVpx5wQDKH8tZ6JpkUtyrXQW659t97fxSA8GS25J5JhbJ7kTHCjYPoHrAfqaBMZM22F",
  "key4": "5FRb8RsAwjeehSuB9Lgmc36Wpciwzyen1pzAM4w4Pua7iuuG4BEd5KFEsZduoWQRELQACwYQTtGnyNwrWf6pk4Aa",
  "key5": "3NtTEnnXFpiFUokXTXKpfnsnaToEX2jqMZKVGuZTkozzEUdADfcGmKCoAqYBhQuDYD995DEYAucSaNdVMh3PEgvp",
  "key6": "mm7Hs9c6Sv4DXx33xCfbjQzw4b8PES6NcoE5Bu9UXLFLtLdk2g5bJoVpwSkprT2gKoFAUNwpUJ7EB4ABehL2po5",
  "key7": "2KXRHPvGaZqQqxBAQPaWk2HRKxfKjz5wmQCww8zKPEvZyfXZooLAunvjf3vrYdgssBZWAq2k7PuksYTExbJp157i",
  "key8": "5gLFP8zsVTkn1WANMkKDjKVqEhxeGHGdJEHKqASqiR2nPARpbM8JQN8VChsXhP9S4zvJR8VsFiapStw943VGjq5U",
  "key9": "38JmpfCJtFxQDfXdwuehe3dPF6uXZyrQWr4ZzZrjJGWJ665ceGKnfrKvpNyAHfoe3gQ3Ei4Eq9ncMJKg7g77dc9E",
  "key10": "yuEkEJ6sTjecFrQTGFKFJFwV8tpQQ5YFjBYgsNDKYumVvAbxP6zXeg767qE9fR7VEeNyn9wu4QhMecDddXENDxc",
  "key11": "4o3U8b4G4GBKZQowAzaQJBxDjviH5bPAZ1riCpD1Es1VrpUALDZ21THEcxs6rALfXKV48Qer1tJ6WKcg1PZbHpfH",
  "key12": "v9ZuMDab2opY7dEJjcp6pVDNRq3XAXMjBvFJML8ecFTmvbfEBBNHxFzRPSJx8LpUzVhoc34gctwsy9TLQEy4Y2x",
  "key13": "pf9BZ63BWhVjUDmFwntAam6U35BE8VViyjy7oo9VkbPa21mnbCygMA3tct2dbz1XTf2hvwPCTpATsHaGeGegBCU",
  "key14": "3jgN1oGSzcnZt61Yd6UWyAnE83ycukCJ6JXnjWYDqhhXGqXEEhd6Sx6wfcZUGCvimAyda79AQtDiBV7nBT4S9y9e",
  "key15": "2nqkpUQjMxHbyPrYpQoT8PHtfo3TCBtJM9dPeskkdnjXJCFVi9dfyRzrQNd4h5ZzuhX6HCkvQfUVEAp3HixAWiMC",
  "key16": "4meGHrdTFbiveP5VFiN67C81QTTernPjoeBxb5RUthvdews9Hs47Lt62AjxSj1QCCPyQt7rRhty1J9e8rMdjeZ5v",
  "key17": "3bVuyoAJyVnwsrovS9ER9KtYGFpuGZCwH3Jh2u2ssmtd9ci6PNqHNG6c4eDXMRR2ughyAe2XCTLPZ2f3gEYgia3Y",
  "key18": "3MgRbDGfoz8Qs8uXyAcmLqRfHGSBn4yF4hhiSnN3GZPuQk4WPkc5tW2DnWWYBbX7xv8mSCuynXsDdmrcs2HePvnv",
  "key19": "4zcyd2ZgThf93reYHHuph1Lp79DdJ2ZzgWBiDw1YZVC7i4AznXbmcux8Z6EsN2GycALgwFaEf9H4HRs7YbDzXxn4",
  "key20": "2AcTs3CntmbwPSrFHiG7eFAZz6UNkvjCB2ZfDHazzdz5CZeWHHEBd1RXBcGGKHecH6mJtvbKWH3zRwme3TFGDmsc",
  "key21": "4ufxExX63hAoEv8s7BBPQqXy7iNiNWdEfngSz8M8c8GiMhV1VcedwdG41KPRorPUML34m9zERKnS4LqPDexRtjbz",
  "key22": "3LsXxxhMhmKr55a3B5K5iUpAQGfH4T1LMsdvnvuipHDLbaRmbfh2xhGETUSSjppWEaSMC7skZ1bwPXSMPmb1CaVS",
  "key23": "HBBUAuH1xzFNM4ZuXCS47YKhoyMnQrpaESS9WAfZfVuamPeMSnRwqu5G3Wc4kgmdxFrrZBP7yDJUi7ncQsYnCmL",
  "key24": "4NdL9WcodeExTBfdQZBvnBeq9BDrDZocrNvMcFMiJFJorQ5s9XftG8PiFY9MXVW49wmWBmxWf7hXPKPgwoTs2Zrn",
  "key25": "3u49Fi4eQ1FMnnPLThjn5zY7o54ydxRLZnxMXon4xFiPco1ANgwTuJvqx5CfdGGMaYVPHXuczuvMw9PCxCRdLL1M",
  "key26": "Lu9ugRNiBZa2JkDenNTvLonC1Qxt9gqo7YRf7NdJBUTDvX7w8qCQzPBQF2GSNUefytZL2YHLJtKit4pnXce3hwi",
  "key27": "61qVRodKvyELN5NgTpAf7M5wd6usaajhgmwENjJ1S7nXCS26BGg2ysFcjbZiHjAMuxMwqLjVwoswe6SBbeGqKjad",
  "key28": "3eCHwoVJtYXtKy3SxWFH9YEzwS4jvQYuEuTCL5jEd52Zv1rwtXUBzcsGynyJ8Y171fUMvTBJUpYuULG9cLJBu3Le",
  "key29": "DVKChUED4uQwGbdqxyj9Y6ZgY4JhRvLtgShcJrf5CLzp8VHyzg9ewShX1xLfUA5YfwxMsTpfj6XHnCZLbkrQuf2",
  "key30": "2MMF7EWtpBz2URqQRSoFEw2SPrP2A7DgX99r7i4bsRtPrqA1vpPQn39Aht82pcWrP6CP1cdZ5STc3Cta4hzQDcjR",
  "key31": "5D66TwWYhPoqx7U1TQ34Gk9Vz2fAYGmdDWX8Yu53MgB1GCw3RTjREV767SNGzrj5y4W1PzF3LscYuoD7UmvxX9ch",
  "key32": "5bK68UEhXvb1fwJ2vTYC1feaovX4YsZgJUML4WqCYuLZs97NNuKhxRKTsz1AXcz9b76cY6rHkHeeVEuvRd2taot8",
  "key33": "JQHp5rvyuDoBM4eAfGyKvVZ7tw4m16zAXb2GkHojqzjcgeVZhp1SfUoKbDJC74Y6XQuyYZMivhJ3Vb8yXxi2hEp",
  "key34": "32ZHKtwd3pfJxsm1AnN32P9hCe5Z4VUg8BBHyN2aH8Grj8YJAEW4Lh2GHAELbaRpuZpHYNVrdBb9JNK8CHGuLAnj",
  "key35": "5ysgwCJ18RXiVzwwaextJ1uxkyGjiQBLGXmhWvBQoGhwfGRkS8yto2FjpC9RXhgJ5FJBS3aHEMtYKzniYURLESdD",
  "key36": "4DDxJQsvBvtNWs6bCU4BHitkRRjmWryyyELkmgGbS7EhEwFeNc6Zudi3ykSk9jWDjhAQWaxpaZg9Dbsgy3K6i96e",
  "key37": "5CDp1RBS1YBG8T1hhjP2ZZRbLMjW4x5edUBnL5mRa4NbSuuxq5kNifrNtxYN4HAwvscqu6P3nBceijt7sbFLdrMf"
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
