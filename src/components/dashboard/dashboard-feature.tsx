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
    "5QHzuXjRcvjZTz562bSLcwy7H6gyHehK84hhQa4jJfSUApuHvFRR8aXesHCQNuQN2VFvuuiLt184XwbmvyGKYqeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TUyfj1VsJV4ibuGcnAajMBT1p3u8VnUwxm7ovF4TQRfdF9tSSxQyWyg1cy5F52NDhvbAfigKcBqtbQbfrVjuatc",
  "key1": "2mAHf86MxJ5DphgX6PgGdR4iGayDLzBGz1YJrfQLvaYMUhNGzcRxJ9ZbatoUERhAFqrBGuCPh75bXDStWGqRC5Rc",
  "key2": "dqVQPfcnjuVwTpgDUoPBeG11m2PiLz6SrW7cuEjSmSpvDf87T158nCxsrTa4ApU8pXzWBai7qtdSJQ1R8qLx9dn",
  "key3": "G7DD2d6aLBNn3NEURWsfwU1xDXP65qQ6DentrdducgMNGY9RTAvRS2h3aqRFPbEr1rbcWwAy2Xhc4uBo6HHaZXW",
  "key4": "5143zKLbGwdcMeWt6nPKQPxzvcnocoYcoC1tMNS8PRy4oZ5s1EYbS8bgFxK7mSEdSicxqkTvvncax9e5YAxNdHKm",
  "key5": "2oYbG6C1zeUYV93u7DxEkXY8K84WN9reBPoiwZNWJpmD41dsKJQbauDxmpPJXXcrzRDg2U85ttuWNmtZuCXs618A",
  "key6": "4uFnsuTqaNomz5NJGGkzWUCutKWynNnpXSR7vF8wGVQxc1JG6YRHPNgMEEcNkfkyDC7F3soRVsV6s8rBecnobBgQ",
  "key7": "2biVyUEaKpVR3KbB36S5az51T99jsGberUBttx8fyPjTuCS5U1Egk231XM8PgU5maLyjahQaTxdUpRkL2MNUVHCX",
  "key8": "3AVbA5aHVh6aWfdN8KwzuibQdkaPp2jbGteCU4HeJVePyAj6Gy1YJbSmzeHBoFm666NYLdPRUc7MWGkf2wqXKHSE",
  "key9": "5XoWf5T2gvx6Svr5wo8a5ofULRu9hRhy7rtJax2btebxpRcUMBYhKKuLHkfiTaswhD56szLTvZnTeetF4N4H6G6",
  "key10": "3NYhGAbRxC1Y3MwMrREAP8QHhyomtfCL4tUQKf42aKyr5msvNDsqWW3P16GX2nWAgsDHR9JLuGwPgDN4Mwp34pJu",
  "key11": "4n8v8rasv4NV5ozSXo8SMcZyqCx1LrcTPymX3ejKgen4fkLctz9f13tFtWfSJ76uTpiPZAQQScwWM7HxaALjye5U",
  "key12": "2bSVEPj5AMz7gPsqXaz46rAsK7Wm9m78KpRU3tes7dtJiSv2WKJ8rvAD7URCLgdKCwe5pcbzt5jyeP747Pvb41s4",
  "key13": "J5swaH3kjj3q1iQds24KuoPNUMUMi8jjV8khvupjRKJ6Dzdhvy6TWtntfSwpAZv8vUyE1b2emyoLjuhA42m1ejS",
  "key14": "81WGWP8gRE6xpgZajpKpsbExLVa1LpWauSfVje4CvJTng3zRubXgCd6tUtQZUMRWd6L22EaZgRBbYMBTSBZ8RWt",
  "key15": "5Z2pXYX9yvmgg82E5ZNaXDkVJqxFh7bjZdD3j5TKA77NYF7jLmFkNWNcwoPGMF1WgPTCqLffjVj3oVc95zc8sZuJ",
  "key16": "4V7TzoT5ZWyFzCy6hgUnno34RyYmGRfBfVPQMJPtGfP7hT4LDZrkuvf2bijVCg7BCvSjg3gBNWJNPi88RbYUK4sW",
  "key17": "2j1CNy2bKm37S19tbxN18XCDF8pu3VARm14pmQz5UUSKhY7QjKMwAFHoFpykjcJ5Asrw4yYgA4iTzRaptGhjMSrC",
  "key18": "4aWSSsUHkL1Us6KHLvFttb6fdj22H2gj4LGjg7KWrFenqQJtAY7PbYe14oesmL9oAGhmfnFAq11mp97VTXfLWGhu",
  "key19": "3XBv4CuZ9EvE1Nyc15SD2GHdwjudpX8B8EoSyrtByaHQKy3CbRsZ8g6ApGq3LhARUAEpUg2bFq5uZba1mrEvaabH",
  "key20": "3958hG3STUqFFZne2HuRepdxnvSUkHYKLSb1hGVz375SKYK6EXvHut4kHB4oTfCDYSMsFiw9AaTBKVqKzGzjdw2r",
  "key21": "R62NV3aEjaVVYr4KNLohBCDQrnJWcXvBZtyPfSGwqnQ9gCHK9YJw1Sge9bNDEPWgqd8QYVLhduR2stTNggrDgnz",
  "key22": "2Y4Mjgb8hzWotS6P3UKRkdwnqw3drwBinvi3Hv1CqYaXD353B1wHwT4ko76tNnUXBrAwu2GVPSubckjUxe1UDa28",
  "key23": "NSjrjHapc5h1DdkLCASiajRj3bZHRx7WWTwbkXZPm9v991cfQeyF9jyo4ejKTzzJf5H9TKvwNzfprnA1WL4CUGM",
  "key24": "2yLzMTiXUVrZx33e7waSohkCeZZBsEK7a4HCGobh2ZaJyqMdjy2R126BLRUSXrjuzPxH1MpmpR1vhsHYRwrW3K3G"
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
