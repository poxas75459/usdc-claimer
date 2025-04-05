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
    "5Ho5SLE8sNbXFGtwH2XRZUerWNLbvUtsEiLmTXUxNQFqLXF8wnrmYmaaJHBehXre2JaKtkniVSHUacSADSVTaDWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RQjKgJdDFibwonoLnNQxY2Czgp2AVA3qQ4HVUjPAPdJkftfSS25rdw8ixJDFGmzoNhwggcvB4nxHGDY8ThBF876",
  "key1": "3BKTdJHd4w9wTrkPRY2GPHdmir9UcN81pBfpurVFb8o1qXDw2fisuZECtDWkeTgAdAqw7amokFALtTWPimw28iLb",
  "key2": "3F3Rdm3nNMuZsXFbkRRwVJnodVirkC5BpAHkZwTEBdsKvgX1F3bCdsCjJStdsYEJdarg8pVFLS7Lrr1yNqmbHVN",
  "key3": "3xrSMuutz3QWZj7NPADeX1jM2f7qmUSrmFEwHBAwj5YFL5YAp743rsmXmJi1Le9e2dcAqbQbVASZquLZ9foZYSq9",
  "key4": "5ZXVecMbh4XM7NRxCtkCENVUryiZ6ERTuyfbpULYFa1j9KRas1uzSmapvLazfpNhwtvqfjtx3atg8ejikpZzqMfK",
  "key5": "26vsvc1nfBw5wkXBZbWMdPSQBeWZvWBHpVu6XnRUQ1kEbu9x1kDyeQ78gAgRHomwKnZp1DRhLJDKWMYqptw6dcAG",
  "key6": "641gESNX7SZLGRJqfPzN2WYUhweZqsKc5zzs8MMV5fSD1C5axaYg2mRkttnxv6fdc9Nm13khjvUasgJzvdn1HWCo",
  "key7": "2PGcAdWVVoNKrMiyxi7NbRNzbf4hCdpkbjbfqmidSzK52m5Ynni7zFzDnPHwKguDBCHaT2gpRf6qmrGqFhJPMHQa",
  "key8": "3XbN3C33Ekm7z9Zu3FYM1Vd4YkKq5MBvHGG3JVtTng5ucrPqwFqFdSVvYdrZULKY5ncz1uUyi1KJ4wNNcNiY8reF",
  "key9": "4AN8ddGKKe6D8wb5nwsbC6vyqo6P4VWsxvLTJT5DEWgH1QEvQyKQqcG8itYPEv24T9nFBj9Lef2q2MBLgrvDi6Es",
  "key10": "3jffm95NfftdCenCFVmWUtWqLGgrSzvpugwELEGA8nM4MhF2E92fxe4kprTcLjtbRfRVJBsiE1XhtaX4jaR7hP1N",
  "key11": "2dLEzFtcABofCF8yLwSK54NzSnvUEHXKScPYxKJcbUzZgwbmwi48eV2xS89fu44C46QNPMq3V7hvisLhvxBFf4up",
  "key12": "JrcT72ax9fHcoXsLeeX3rBVftnd8Azy8eUXrYFkB8xJPSrjRoShdzFEzJqTNCCtDGrCh93XcHqHqNyxQYnxd64V",
  "key13": "25BzwfJBjoYFyMYAB7rBFUawyHTuGTEGxWdpFchSc8PGvJqL6fNb85neMQhJGaqtP6JaDNZPsDCRvnyRztPriGrg",
  "key14": "4gLNS72E9JjhJouwr6yiTM3x5ierE7cSTnXAMwo3HmtQw5p4Qp8m3ckPSk2pJYr1bmu14B7R7eQn8LaYEvMFyiSN",
  "key15": "4HbagSNDqQrGDfnic8VjZZ8jwWDUdGzEdbL6jaaSrtKF6t9ehYhKi33dgSMaM5jsGc1FV94LnYuiFPTyZYo1PpMj",
  "key16": "2VcS5hk2s8xB22soTJoDS9LPj86sSEmp2ozUF9RhZq6Nqm3AQpsR21SMSUP2he47Bd9LT9JadMP65zDWYrV9aorF",
  "key17": "47bgD3oBJMHC977DfNam6m7D9XcaQiKPbCSFKrQ8FGNSpvpqotU2tyT46psG7L17adi19wWZ3mPUvTE1gvrW3emc",
  "key18": "YpLz5LHsoVG5p57969PhE8CyNuz15z5TWoubnkQ69JiDueTwDRa4vL2CcpB3P8Vw3uumet9NTsziz3kJwUxv69w",
  "key19": "5CPeBhkxRNCMfEpzV7yQHKw65WosV2Y9ARvmUby4Efj5pThCGi58bLRyzSLYJREMTE1fz3bfXshELfiS6S5togQC",
  "key20": "3YncTA7stcQ4Sygu8zJeUFu2xQRtnfedkaNiQEnffTG8eaxj95QkFogLpfYFaELVj78mgqDaA8Qq7PjRsmDVerDa",
  "key21": "5NEzTRaye414DNDrtMjaSqiFH5aBrneLQnAFKnZc65PoduN9VV2bHkqmLV3Zk9xeqSzKDNa9oZNYEoYM7Yk34DdA",
  "key22": "2k2pUjU22erSXoPv6UEmr9LyYjygQb14VsZ5DifnuoKK4tyYk1gyVFubL85n7ZeBDFcihyd7ZhZz2pVcikNL6d5C",
  "key23": "356GWuugjaiE5FYyjfwxrGUaBrWpZNcx8CbCxgYQYhrtDw5WS1cmzcKSNCeekMjEcBdqnZN4ZMF3Ev2N4vDkwcWy",
  "key24": "5bCrU5BVQAPsEScgknrVdv3RcnJsPsfbr6RfNMGEcsYgwNiawEUVxyZd1oKVPwAUr89TkJWAybLTZFYmHyzFXupc",
  "key25": "5XLZ45gufmGthm5SHRdG5Z68msnbnujLtiKkHAy5miJsk1ChKWXNCzEtKgqoAqLtz8Csp5qfbMnCwzgyvYkAUNgo",
  "key26": "2WNjNBd5sAwJzEXobBr9Ge7tzZVkBKAdkWMxeqaJnxxTCAJmBuRUFyryX5QRSikwfMtSJQj29zVq7wzviYvge6uk",
  "key27": "roDfuwtBuC4k1M7eCBqfnzxLqXBKV6WdaXTCjkMd4e9o2BnP3r7v6fAJLKgkeJGFyKYnVYygmNhZAEj9zCv668R",
  "key28": "42zsKL8SJWEJ8mFDEGtesD8XgBDVkwJfUjYmpfKS8Se9v8stMQcG2JbcFXYiEvkMS9qxQBD2LGeAKXMAwQTJCbpE",
  "key29": "5NjUPhH5zJYbJ2CkH8mQ3y8myTeDETDthJgXpnm54TozmUMbiRvf9YEYQkC8wQ5ezxGsGBWzbqvqRtn2VBuKbBTL",
  "key30": "45GAYiV3WbkdLM8UqbUSqFmLPx7njqSeKeMEE89D8fQHVGLBmpX8tT2oH1Pkhr4LwDdSg1CEVnucGUtWniom19sb",
  "key31": "4hbavym1KTk6BLLz8Nq4DiR93FqJz8cXeSnSnN3U88wSAwFcZCKBMmb2QejDEJZ5arT5fN84GabM37u88dMtibPQ",
  "key32": "61fx8chEMgrCRKyxX9SX3pRFPKipJWJd3qGgqyqxanvejqzDiT6TVtiFUriMDRnN6sQ932u7BLDbvC6dUd1m2N2T",
  "key33": "3oM3vWhwA9ma2anqzmMfs3M2i4J24yDXqVirMRzUHTSeT4Ez8U2TYkAeZa8qg1KCPY5AKMm8ZryHbT58XAw8c7Vr"
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
