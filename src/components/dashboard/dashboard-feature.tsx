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
    "5DDuCiW2FWD2DxJszujUPCQ1krh9577sDvGun5kbGXtYFvg19M6sDpBq7osPwJXjjJeAhiXZeuyjvkFDx41bVYKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XfrVJ5m31pU7Sq83HHJKgpGeu4uQGavvjpWo4ZJGcVKmGytwCbjUyxbik2KaLtce2pj1DrafemCRhds5bizsCYa",
  "key1": "38S593qARnXvokJTiVVDepTQJGvWiP5KTMhR6vuo6BKYZF3azxmAhLW9hqEdfySN58C6vZSQr7YYQobniEWnd6gQ",
  "key2": "QFKSbRDL1hGgBR1CgiYauCTTRmeSEDbohsZVyMBeLz4QhP5B2s3QvagoVPDpWaUHkCUob84X5MMiNHYFxVrFLib",
  "key3": "5Y36ph9CBtKgmmtTaFa4Jwk3mkEtkKuRz4FvDhvKAfrMF1Pzgyz1QzbWVuuPrFnrDBzvtGTnDNxa8S57edohqX8K",
  "key4": "5C8NgAnB2RVZvNBUwC6DnaiRFXShWcyogKJTkHRVL4R8tv9KW1DyGxwEq5nPEAs9rTVueY2gHyN8tgMsrhRsDVwP",
  "key5": "5rzszxSNM1GT4M6pSuRg8wjTi94VGKJdH73ypoeskhN3yu5t96nq8Wm3QC2D3RXTvAQURatfGKYf7nsQmvUDEZCy",
  "key6": "4U1GagcboCRCAPFrN7wGHaVpm5DpHKv3TCbZmEcsUsg1X2FJtW1zz8XBLgZrSUHHBnRozeFrdLXsCGm34JhndQE2",
  "key7": "52DutbWCzN61Q3KEHTFCkAQNect1cJtZpyABuc8mRNqbWsR8Wu6Kje2KjAYiq99Fp7okZXfGjwYfwzyk6BczKR2K",
  "key8": "5yng16pcZiZ4DLC4anNZckwJwzw6YNnGMfHbQQ3fQWxpEd77MPpfYtsfaf6m8BWbMYPsoZuoZmp5NjFyNDuywhhp",
  "key9": "5twtfqe2MKFJU3PYpAjbneNKeCt8LDjXwqycu6WK8E8HQWbBMFHrDriDt3tk3unov1wVekAqsD9mqJc6hmc2jeE1",
  "key10": "4ADmhdjkB3KWErEvVdwin6t7MAGmb9EdTxaQtqSYH93ekkfimdKFnjyF4Zx5Yitfy6N5m6B8inPVkLhBsvv6XEqo",
  "key11": "2Hdt93Y6HCZhjw4jB8KbV15YVcMjJgNC9eFHdWDYDyUiWTL3V4x2hB3PeEV48jspVNTGmHaWiC1ye8W56AZmauem",
  "key12": "5AGRCYeTdNaj1YnmEVixshXLEri1RVH7U59Kv7VWT6SZTm2gcRSQTYyk6J5TiLopWtJe6LJv5Xwtn8SBzoWJ9gcm",
  "key13": "3Go3QKa2o4ZzGiamgEKAFwYT3Tpfzo4CC9Scxz6UypsiAF5xj1g43FiWLFUFtXnhJJ2cZsFT4wBYgyK411RqtGV3",
  "key14": "4A9AaBfFY2NqcDaUMEQQiwSnb7bq6FfCKSJk7us65GvnwSRQBbat8LjTMx6RZoK4PVYREFoxoSXvZDgHeyyb4okQ",
  "key15": "466YkKJr6er2JvyZY3dv6XLynoepumXBVt2oqwPqv8BUnCxKRTXLfdEfpddJJYKwpVwuUd7nXbAfkmNSnWizjn3z",
  "key16": "47MzZ1QUMgazJ2aEKdrDKPGa1eawcPvVnPM2MBp8yxWJ4w4vAPzxzvUtyncqaaPLSr2TvNbqn4ud1jSDJdyCLXZh",
  "key17": "2WsmPdhEnDvzYCqiQhvh1WH7JHUJKWqajYSNTy9NmEM3ERvcCtPxX3tmQnaru2hTwTyxBmjvgS5tBBdqB66SbvZP",
  "key18": "3UAEgZnt6EqPssHHEAuHMZakXWwbbp5SrFTSS1JoXuRBxbqn9EcaKmPCJgCct7u7Gm2LYh4orMC7kaz6zieC4nWA",
  "key19": "Qqdgrjc2BYAhrMQKokZMQLNQMsDyGeRG4gsxFYTYtGX1WeFCMxiHHASsdMnfekhJMo8PDqqbAqJ1pF3ZnZrteTa",
  "key20": "xHXx5dEDJmh9mSJJ7KWHPE1m3msJ73DY7k3wh13oXQHDvS3XFpfGKJhmJ7Fg7Kvf5piyVfGS4r9orDQh12P9zvd",
  "key21": "5whj2NTY6grYPN6NVGuCjW6d8xrgAijgZnr425GAJpNoDv9e2sQdaw8kKQ7CPfkz9mFxKwSMMi5xRK7mmoPpP2Nn",
  "key22": "64zh4epHTzCrW52qvj2pTxG8H8CgJv6sjq7ipkYEEGnexU2m63VyCoXeNRrZBFhWShW3ub6oi3J6WSVv8SHH7vw1",
  "key23": "2hgLPyNYeeAFF2m7yjuVFrH7HWBJm9LcRHn5XR27Y13GWVHMHvJNaKuM5FYXmPQgaQdNKfuL7MKj3GyJzpqxpEqz",
  "key24": "3M1w2XLCL34stg6bts58e4fuoTjmhyvDS8gzcdaX751anrcvfa4PnYTcmg6M8NXmZSNMCzfMv7cjh1gu1g7FHeXV",
  "key25": "289Zu3nFXzAc5CSiEppmcih4cLxoyrB3Q3CAc2HEgkuMmg8MrWfKP7bFDCX548v2KPsBzCkLqsfa4ywVoaiqbCkn",
  "key26": "4ph9UmCtroLunGzCihGrRVACrEZfbY6MFGqReHoqfjFLh9o7VdsXGFuxQ6Z6KwQ4ryYmRYLEPBJbEtcmgfA2rvYP",
  "key27": "5yCkaB9qXC6Q61adBD5XzqwevBZ7E2pAqDiBrJg3hb2m3VPKKUfcxHAUCTLyLnLRRJyjV11rfCHDBTJkmT2suhPe",
  "key28": "2U4xb7BS3fUHFJQ7ANQGKdeCqyjwK5zkY8WD4XEHsaAUR8ptaapmxp5Thy41Txo3bgnGrgYP1hWkRShCht9Uhq3M",
  "key29": "5GJJMvL3gEJT5WTcUnzQHh5BR8JFgZUabUnySPKvKr3aXhaLPVZnYRkXuEoHoYPsjkcg85JKwEqC7Utvw5QWwDiN",
  "key30": "4i4WWsmFE3B99idDW5GWGXpTEidw3nGtjDzhPzMBVn5SJzPRWpt56oEJ4j4qhshs593ppTSzCw6uoDboY3R9RJ63",
  "key31": "4Pz45wsaBM6Quy1phERsqpSpCMBTXihgwVttFFYTQDXHBnzgh5CGgGGzLYycS3MmQokKhBrMKDLLA8meARZuNYfu",
  "key32": "5FXrpnqhKCNLnNUKuBPECGHQniRHsKxaAMKzJ2f7AgJrsaA1mMMc5wdNjHHfkEPo1DpanDsgF6H6RmcqMZPkkuvn",
  "key33": "2p1gYb7gpbQsotQYQYqrx1qDWtMwix4QShNvhMG8uP4gpG3zyyWMzYKDi6oxA9XFmnnqEpCHFE2NNiT8PL9nU3g1",
  "key34": "57w4VkntEAooFmxuY79xiRX9y44DpombaBA7uY5eJFwG51gLBZtopq7GEeS9MittWHvBAf7cQPSjm1ydDeMTns7q",
  "key35": "VuLS9ksFiK1gq3az3Xv1dLBYzGdRRvxa2Er8ZvR7fRiD1kR7x5wHaVtpgP47t4bp9Yq1owxJZ1R7QX7fegTXrZK",
  "key36": "3ZX5ry2QTnNJXNUyHQB1RinGWN83WseB8Msa97s2DunUxKe5crR4p6QCeGB5fa8Y4jd5JF237MCCWynCkfbGPriD",
  "key37": "28XxxbrE23A7YNK6S3enn29M443iuSAVwCA2zdT7Qbbqi1H4m6CSkuqdypMMjCfnkjrbN6BHRQGGKp3o8a4cvkyG",
  "key38": "25eD2ty8FdsfXzEKSQ2EwaWkwtDKwHNKqSQT3rgT3xYBuZwSQY7TDCPMqq7tWxQuVAUHPBXpTMHgNUoCXijdj8wo",
  "key39": "V1b2Ja1wTWN64xH1mwyHqp16jJjwjDh5emveA3gJ9FCb5umeL2UQ7DvzwoLVhkKMVP3cxM1rDQ3QuuX1Zg4uwCs",
  "key40": "56RUc8LJBVYQobJMk8sNAzSPy9NsCFGrYWdaWzyuYFdrZu9w9mVtYSDhNfFqeT6zouqAf6ofMquczh7Jr4htixsm"
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
