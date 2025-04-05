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
    "2PYTZFm3cH9r39gk6WSVofFyYqVCrM8dR7dkPG8GPh8TjrjEEsbSjy7RdQzT6XLVZQ39HJS5kdd6ZTZDSVH3B4ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32JWwLrnMYcP7oWACdpnRPsA8GM4hnbgkGSZiqswiWigShbCcLXSDXvVo96mQJ4ZcnMjV2WLDYcPeTWmudFd9umN",
  "key1": "oRGYxN7KgkyUwKeZfcTtX7ugLUiLdQ9eu491nM2ev8ySDPAyJJfMs8PTVuyvx7P3muLf2Wsyn7Sqc469Y6yC2hq",
  "key2": "5qbRnJeyioXnQdfEjHyJgWKvDJN7PQGzy7g5e8GF4LmXrvGTEqdHmkb27cg2JqtU29gbUEVCEiEmKwjna2McraWG",
  "key3": "2XbpZMgtGvbSSchDJdoYmZDyH3Rvd6oxNSPuBBipzeU7CCeakhfR2LHYdKvmtBDrguqv38yxRKXcyhFfFsM8RdnZ",
  "key4": "6EunkbL8ckrPbrMeqN9QJ7wCzDRi9tTQG7r754Kt8rWXeaf9ms4eju9YVXxvL2Awub1gJHMb57anaa5wzpbcGEZ",
  "key5": "ePGwrZnbXk1xy2dBcccJkuuFXZZeXX98rZ7BEGxZiH5E66eqN72yY4ch5QbC9btWsfsguvdC3UVb81vcshd4vJf",
  "key6": "2hXEH1g3yPRHYUK6TPG3C8SUH8NJkUmDvPZf1iKigMkVv9NVjJyRUZ7HFXBK83dYAfm4jsQwuXcGbeWsnD7RhUSZ",
  "key7": "2WtMoXkpdTyxQFmp2QAqevupsiKJnipSaBvsPeck3Kjhcp2iV6JzecuFT4p1g1MShFUfqYmqd3sV4vpv3seYFcSp",
  "key8": "3EFVuqU7w79WVytLLUgxGgNNzW3y3EyvLLPSsarbDxk8cRxgZ2PwZpJ7CNHnRaoLxnJ9FyBeTPiZayBcBru57dPb",
  "key9": "4mfroUGm2vTYzAa4KLyypdx2nwo472V6YkeCgC8ipFhzyk3ytDTHkcL7XzPmG775t4J5jJ44tg5EG1j6uon5mdps",
  "key10": "27U1mBDzTTSgxAjYs8wBvvKk8YhE7csgVhVD41VW9oaNEc52D482mCEuRg6diExSaYHxUJUDXLd2tQ5NPKG86Hyb",
  "key11": "3vKpq57JZGTCUkUHWcaxGV3F7RBbV57qHro2rcS4jVfFGoCeCtQmDjFXeJ9xxNicXDhchVwgBhv84596Z3NRcFSR",
  "key12": "2ypATL5MNfjaPWWRBKaFDwhVDhyouHo6uUAsmJxs3ZUrwMSwEGuckn2S4JSQC9LbPGZCvntpdNhUSKjKb1fg8i61",
  "key13": "sThexLsDs9ijXgQEV2rFYSiqEEUoRUXVoYxKpXmS6HqrYtM72qAMc5NQmuAmErhKStjN212vpUGBE4483RcEhfo",
  "key14": "3HQ5dAFxXPRgMngPTJNsAqaLtLWK88rpxAFNY9mAYLiGUgFVgssKyY6Q9zWs7q2GvTGdmj6ZmF3i7J77UGKRH2eG",
  "key15": "3DfvyGyQXpUjnaBus5qwU21wqRmLApXGFRriDfDoqmYHm8rXuoZT9jneXWZkoCKhyxGEQ9rY3CAp3TzUbahkx3tA",
  "key16": "2mkZ4WNbxGPM2h45SEVAMURsP3XKwFAWkFAgo4yxrcqgX6kWJDoFvZgPpoMpgXrufRX75v95mCRdR3igpoaPUVxq",
  "key17": "2VR8KvncS8rD5uLTiZaorpaXJQfurTdLHy7sgcW925XBtmuopVwaSpWZsyvwrhXZtD1BiJ19jozM57RMZJsCsT2o",
  "key18": "5uEeu1qeUamVQvD8ut2NwquVzpYCs3DKFFuQordpyx6Q8d1VwQ8upuVs1TTKAq9gJz5mQ3Hv62Hg2kobGPip4ZTN",
  "key19": "28Cx9f7xxm8M3sVqDaJgiEnP9fKGb9QsLeUbKPwsi3KGTQ54jRStS2WKCfnyXUUhaQfddZATAR51k6rrvck2SV5x",
  "key20": "3xzWz1hnncG4t9Ea6d5MwTFK3inCy1Z7Fe6EBjEStsUYBBSonusEN2d18mpXVDjpJ5gV6apm9uxWtBY2DR3VLXAH",
  "key21": "zWbtPXFSNEqxWcV6QXDXLt7uCvuP2sTooWQmxHHmWfvxWAEg5aNnCNqi49Ko15hNnyBbcn4cqqx1RTJ8UiE6kaf",
  "key22": "SrgxCiBoKDEX1u8EumGA4pJYLLuuKb4DXun2Hguns2k8QRc1FRGVzG9QfmHToUYkFNVJC3tQsgDZUs77B6XnrNZ",
  "key23": "TTdenQFxFs4ykKtZmuVoZxKLpSt2DXbPBnBJ89Fdfe9aMUqAK7mqhftKK3zpAGzVSzGMrg2QnnAYmdWTBg2vzeS",
  "key24": "5iFD8z4QEzw8dML5DjFzSUfcV3Qw7fTdvK8EKAiaEZprqj51LomcraTnRTW9gFwfLYQtynVu895C1e7Z5bjkanCV",
  "key25": "emrYqfcG7Xy2H41HGKHxpUcJvcD8pVvxPqeDP3MYHw6fqUGdGNrKmoPJLrCrjCZeBjULKiXaL2hsHTgYWwJV3P2",
  "key26": "3dFxWGWpPRcFPfgmfAij6VBDAGHk52vE14sNTiWwgVw6yf6YCCx4TzGoR86EBeAKQ49AUuY9Gz2kFvZtFUGBX3ER",
  "key27": "TECwPmLya3cS4YB7VUKJKuZnULnvYPgKma6ovYAqNcGrAWNKePKNZ1ZXtV2DCKTNX9ccoSojcD1hJXyBUH29ZAL",
  "key28": "2ZwHqdFaM9yawGrFYr9Edfpc9HTa5tcuqxm1qx6HcR8K3ohAFQXfVZ23Spf5XyJBoviPuPfViSYRXnFULMFVUHHA",
  "key29": "2N2Y6sBXhbZrvS682cYf6BDJFDwm3dc1mF9ncT88hbsdrovXUU4MJoQvtiqXpgng49HV3UdRa2wbkn6Sh7EG454D",
  "key30": "3iS6MxSoKSLLhVjB6TMcjYcu2gUNHyHjiaLLypcT92TDSde9t51uHP869gsqJSMEA9WRBx5VJDKgWLxrJhEY6JsP",
  "key31": "2Lq3LvnBS5zP7XiNEDQMRkRgPBfKdYRTsXeZ6USak7w8bxLUXy5LErk7xeTAPEbeNM6VNprm6rHUoGeXrz26q5RE",
  "key32": "2vorRs5tDXPwfdwMm9SKa1T8RYUWZdUTKAT91CnjHuUj7rArTCyoL5ckdtUBGbCb2JmfzBhp3S9rzJEAeHbEUp33",
  "key33": "2qyHpfjNURwrAUQoGDQLJUuYgCciPMoX7tMRYndj2iZvb4JXf5ZbxJpVfdeLMTHQRCqSf41qgMwRrEqo9CwgbVyX",
  "key34": "3cUTtAoZAvaSFrbpAW5XfuH1EKjRvoMPtEvgZqAsLnWBfbB44rQcVHPSeWtRpL6ALWRqVWtag8qFgy1JPwXKsYzh",
  "key35": "5QYL7nZqFm1Y4eBa2uDJFoXT2jbLmSMGkuwCmxk2g4ortzq4Cmj7nBJLHcFX5KFNF1hzPNZJTMLexYeu6seWQfHa"
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
