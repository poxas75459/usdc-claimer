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
    "6NmpqPZV2TyCztiMLhUb9amJm4SCS8Yt7jJbo9n3miTePuMa5uMWGtznAugqqqQtTnnzfJsPV9pdN4XfXmvXtA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Wr1Pd77SZYBtZrrkEz7vgBREuS8JtoTv7uEKf7sZMvTGvd7VTHb4gdmK9ipnRcNkwrgN2pFLtzAuDG5f3hSmfJ",
  "key1": "4fdesoHZ2EXmffNcE7J5k1xRBPugDCDywe3nfL5S4m5CSkeW6mMVAhssV9MHbkCkSPyva5wuwey1qoGNcDyxHw2k",
  "key2": "WbLyVT9skzB4pgou4NHtQ1TVKBaDSacBNodeFD7QcfRZz1HvDvDke4jTDZyrS1aNv8yXqfwuvb2cuDRNtxtSF61",
  "key3": "3NyuQTmy35BBfHtvdRH7AU1TJSQzjhCUkD6v3NqD33v1PQqFZPVWHEvMSiArSzH54Xs2RnArBYYTzqG5wF1xmhbg",
  "key4": "4YueqJjxviAnRG8vCzWG3xc1qVR4EFLcgHzygdBGwdENT74L1gW63JTWtmNeFzM1Rg66StbSLsPYiv5CrxR7wotG",
  "key5": "3zEo4pLKi5KqvbFdNToRgh1H2fkdWeSTuhFoyT5vpKdeQrJ4Fh5b55AY6V2nKDexjTAo6uq1GHLrLw58sDFAiSQA",
  "key6": "4MBdap1Tud3NJUp3wxWWHQLWo14qmBXjg3HH7kYK8oH6vK5PrvFXUx9CWDxwsh1jeFoTRy2NE75FCHFfgAByshaR",
  "key7": "4NocavSUWW7cf7WpkMc6ykCqkycoHn7xxxuQXhv25yg5vzRybQbvxcLEJP98WfJW2j9J8BwSiYxMHdxuBgcqMmCz",
  "key8": "35n2ZQmLCxZfXZ9FxWUTBTkAMAwzY2pesx92j2vBQHrb8otkKgnqH73wSd5zb5HTi2MsHURJRkXD5g1CQULt6Pz",
  "key9": "5QyKZcifdjrZQNs1bfrqxGYCKXStk6B6zqYBnhyHNWVXphPbcRr7B1uiuAu9t2GZd7CzwzZZcVqY6CCsJZNzG5sA",
  "key10": "4j89v5X74RD33xNvQHR1hBPK7TZu2LoQEcYvg28iTAxjHE8SuinamTByJYaxfqePLoW1s9mneoZuv1Ufu6bdzjgQ",
  "key11": "3bx5KXqbhG9n7FtMHeywFJ98fBEUGEiSwcqvRVahzudMW2CuUwPYBwrQbmgGf6QYu9Q2rpDQiD1PEr4aFXy4tnXC",
  "key12": "59UeAY7HcoTeYn9qeQa1Xs8J9d28uYH1zwf2Dzvd1gaKeZUMhS12k63pdyx3JnhiSYF3wVdgf16TSL4A9L4PnaGt",
  "key13": "5y1Jxt4rRfZr8mPDmHtz9MuiAt3ARnVit7NqXqmDDYubLif71Jxrwf8yoax8wmMr3x1edPWhyb9sRy4GeivjaPSy",
  "key14": "4auGjCyF3vchNkCbem6gtJiJ923yqXvtXUmCCghrSQbV9XBHYwNDXwuVHvpnJde6KPV1KMCfPa7XfA7sNs8N8MT3",
  "key15": "5a18LLeDa6eUwiieaE2h4GSFjsk8khrytUFqPGevpn3Fm1ZgrYKDNRkjt2NmVcXxrowNk7D9QQPRcRxp7NR4FFDR",
  "key16": "46wng1WQb6BHMguMugTRy12J3YNP9pr5qZ49NCRHJb23BrGodVn6ETpA5uj9uBQ3Lv4wK9Zf5LQ29tCTmSPVTRzS",
  "key17": "i4rYZb2kDyXjWYdqYmRhQH97wrEiiWFHN8VxM5QqMfZTMmBNBZrn77MSfreNDEgj4djoZnL4TeEGihveqd6FHyC",
  "key18": "49tUK3z1A6S29eu9RBvvtRcDEDcs4ns2wR8ML6QsBkphbsmTUmzUC2rMCxUCn2KcpumUpgZ7ABQP4AjJWz4kEJJK",
  "key19": "4NPP2PjWoYWDrskGhxzBXQLsZtpWDofLcWYvz2eZFK8gRrGzvSvrF3kz1nCx6kgZWKVPaefSUyozS7pfMdzCYqR3",
  "key20": "42tP26L2KJYuDLLH7nX8zbPq4FjBZZa46BAScPrgTUD1hbVv8cpTqriCpX4fvqTiGwEkgCcp91MHfjtBShZk7VGp",
  "key21": "99NkycxxtRMk6V5at33XtR6UMMrWFp25ntkmjpbHngvvspy965pYANg4xLnFZ8ri33bKu3TyRRVyumvxHEaB7qP",
  "key22": "2cFrUnVNQ9hRkb9bWBbs4QNvj9oMU8sfbbU1teUnjqciUX2SnsY4CvRycPTtfq1ChQEA5wcnHyq6xB3DcxsHru39",
  "key23": "44fkoBSmbjq9pQFHhnVaeWU1WhR7CRGTaVK532bqzymbHssXjpvkJMV1GiVTvQdk7CNAGzbPzbKKZeJuaxJjGi5y",
  "key24": "5Pciwa3Yf44Ut4T1EUFbvVtnzBgjVoquYx11Rfzqq45yLPHLLRv3jL1m3iE7rjedhgKo6Mu5Hh1jMP4CD5KZZXtg",
  "key25": "2tyuBU4jgSfbygUcNPyeqgtgPYBkAJ726Hub8wuwevYiK2Z1vmyy9raNhFYBoigifVUmDxGv8mPogZZHtj7xkLse",
  "key26": "2tcavXRk8RRrKe168chphVeSrnKcx9srgVaAHjXbGVbfdJfWT7TsEtqXxvT5z4QsZ8Vjn3v5LCPchbhpWUy5gnqd",
  "key27": "4pMJpGWhhrQZYryrwhbgFYdhuwiMHKEmk8mxi9PYwRobPwcMAbiw3yBkyP5ZUrdoqbV2JYEdhdPehbdrc5tWRsea",
  "key28": "237JKybyr4zCsDcxGmXd3v9efVwEKWaCtXBd7s1CTny7F5e6Z669yT7db7p9hJNmNyfWotU9rsLgLM9ksRpajbsi",
  "key29": "48sV4ADaRYwKZmZBkwEA9JNCCrMn4SChH2THWrjGk4z9VXorSuBQbWtTYscxTP8CpuZyq4az5w7WLrhHF12w9fTo",
  "key30": "3qvuQa1a3abbmymckarEQwo6towt1i6CSimFAWpfLT5cYV34wSgMAYDqMUkUBMR72oxPbRDqLgKfaTLHwux7EAtA"
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
