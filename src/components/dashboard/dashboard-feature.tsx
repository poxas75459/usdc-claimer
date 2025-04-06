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
    "E6z8goMbcN2XScyXP4pcQhUnKcWGuRmwCvGeJADovxWQ23LC2LKj1amyRMqL7YULRkBWB4D6JmTS6RC3sReCbpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ntJfHZyXgcUK35oFpQyiE6eQQJqFWZK1hNqcNDZdH9BSZzcyTpEJGb9mguo2rzpPushGvE4CFoLjmdBKvErRb9a",
  "key1": "4KubrVSqH1RfNFozgoxb5DrTxzKsVWxeWta3GhsrNGBA9MmKQ2RawMGrvne743yzsmizmijfvQBGDDfr8L1Sj4H1",
  "key2": "3t9rSuUd5qxjVazTMbPmLhLQ7qMaqhcVX7LQNGKCQo6MPgzXv2AAVjW6TMsiAAVQoBrT7yTPARxvHu1S9YuzC6KC",
  "key3": "3c2icdt3Pk1NpudYgo9yaXiKpgCZzGpnqh1D8C2bjZLF43awRoZ4yFMCZHJcgS6vLKah6hXEPUPM1VAUaTTx5ehE",
  "key4": "5Gi7LfnEMTsGAgEAUKxxMDP5T4WCWFkpvBLReQJo3E4F441TXoyMN6SC6kheEnEb1Ucda2RuaJSjc94GNiZi4ieg",
  "key5": "2mfC1FwhDuvF5xskkEf8L7pcajSi9XuWCzbC2ie3G1cmAgUM8w61pZBfiWQMPW4D17acojo2uydL9LAhmAPiEtzK",
  "key6": "2NKBNcCAjhRykWD2xcezkmJf31PRAX8darF7NEYXvebnmSHS5BkD3sN4SFv49fZyz9Hm9r9KDNN9Y1GZQm5e5jja",
  "key7": "66PBewAv9wfKiAstWkBELY5G3aSfTnGcYDMH43aFV1Me9jTUWuDngS2AABkEtYuXsukeBb3PB3kWNxD4gEC7pTSs",
  "key8": "5t2rjDrD6hYWhdbEBeWU7JB26pq1BUjApXwyz2kdSwXFZgypfYGWRFox3dYouVMfPLZ7PLzmNArNuWpU72JLYjtu",
  "key9": "2vr2cAZhy31KkdX2KQTGs1pqB33Q3mLu4NJidgZnxEG8c3ZHWitxYcWXvHtTrHhiEzWrmrPa1ygBX5kJCJg4kRX4",
  "key10": "24LxFC2T4ZwmbxR5BWazbDbU4JdgaYTD4zYXhFRC74KogKjUFrCUiyQBXf2sZ7iedME3LCdycHR25RiDHbL7bcjj",
  "key11": "xZVgMPynqiM4hGi7C9GG6EjKstL8Xx88zSV1rsLPR6xF7SZ9HfWc1LYPBtLY9SpMQ9QhnQCpnUZYjh37KTyr9V4",
  "key12": "2CU7eHCMbJdQLSSToccFEpWSh3QVVcLk3Lhn5KRDjQxtpXkzXYAQC4iuQumMg8amJ1qtS2KEXEj4t8MbrNcBo3yY",
  "key13": "2hA7pJQu2GNw9dG8NxZv3KJ26o19iWzk2BVm688KP1YdpQPRqP3zWhzjYsAWeSvQE2N7Taotv6Q4PJPFwayoskm3",
  "key14": "44fJybabJvVVELN7oFGPE24D1AkC2i4JCuQcdPNfsxaiVfTZCdEbmW3ybTgfvgKu59Rg6xpnhbf41ek8EpKxzApa",
  "key15": "5zjuTta13Xsa73zSTXQ79s5fMGtY1zFP4qgLKUEHpUTCUEPwNvttTpvCEwHY8CbVwgYX5vcuCKRT48EXNkcWKCNT",
  "key16": "35wRpoEh2q51sxgEdJ4hcdDwENLKZecVkyfRW19hUdigAy2uDgEQNmMnZPA4gZRddUS9BmscUSvwr3PT2j1R3Yu8",
  "key17": "5KhFqQx44aSEwabYxdxLU7ba5pzVsGHG3ePPi18KvWcEacCZbdubJqzuoewaP383FkgXRhR6Hfter9SP14bkZHpQ",
  "key18": "5dDA4oK41wtZLhDQjNGeJhHgeLbDDKb5k2gkHMUiV918Pv5mbDAtWNMW3TKyNmhytCiEptW6N4cVGMjmDM9iMTSk",
  "key19": "5ZaHhhtbs77eSK88tG92iz6yHthRBHSyhp4PZhNnKz7o6vsbWUapKYBXztuZqxJpErBnSEpLSEWPiVqvBZrHEex8",
  "key20": "4DfwKDJMrnBshNpoEQ5bDGKQ6RTUmk2yQ5yQe7gygjyFQwnNhQptCKEUkDVAavGnRGmDAshpxTUU6hdTKjMfR3bE",
  "key21": "Yf5PzoCZRN44ZFCed4zTx22FDKTjJhuMztKUk2pKmsdyz6JJvoSehmSVjvJjeb57QBiStPcZmsqPxsZyS4DcrRz",
  "key22": "26P32YfwucdnxM1JgDwfNu79rFTzfLpK7CZnrqKg6Ynhyi1ALqfU6eeoU9ME3VzsiKocCTKirA27qx7r15gZixg2",
  "key23": "27sSw4xJdJV3HEx2PA3QxogY52R84ZEVMzD1wTEGfy9RuExcWtChkYGPSFzwDLATx4uDPZYT6J7McmghPC6mDSKd",
  "key24": "4nr7pgmQw2Y9NUhTWBgS4FRfrxPt92iNVS9MzWHxXDwarKvBAi4ARfZQ2cTX5ZBQGiu8y2eW9MrsJgwJUK1WXEJK",
  "key25": "4x692vjhGtFYcUyVcEhtgKJoZnj5JRGyxNgfJ3HE9ofEPCKDsvogRfzh2BZSZGz9qjZ7rRJkzykJKFud3U5oBNDC"
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
