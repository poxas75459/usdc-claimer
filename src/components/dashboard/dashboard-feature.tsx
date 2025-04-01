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
    "2erVh2zDAAAmkDZb9WKofDC335suHFzKWvSEPT1mYc8sTtSn3Gi3rAdQ5v5J9CMEmTLcmmsZi6NyFswCsdwN7obo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DZXwhB9TFPetVBqt6xJttYKrz2pwxigk5YzPDACJiXzMmbQayAQRfzQatXh3awRnC4oEq5XjsLJWUcmLUE8yH7R",
  "key1": "5Ydgqm3Ys93Bvc3mNF1Hbg8U53bKU55s5pHZQxuiTZbveh7Uyec2p1DzLX2tziqLgMEWsJwbkjoaHGxbHSvfTpjy",
  "key2": "4kCbK5QSJDhdAhdpuPp2jrxq2NywQXUYKS6mbpx2w157NsdiBcFCqtJQQ9JJgtf9W9sEiNhJGKuvPmRCSQSjQgh8",
  "key3": "9q1WF7Y1DbhTnRe8iHg4HyhvyMNUTJjAnncMEpcLvHF6qUN4Xfw8acH8BLq8tPka1RD7FQ4y2LjzbsbKFdDhGpJ",
  "key4": "2PspTvBizhyAAe3arqaCkYXQXu8fxfTw1J8rSQUGjU9VRRwUDKiwXg4ReL4BQKDEVcGWD2LCAyyHgnP1AGE8QYzk",
  "key5": "3NAs1kVqeyo18znDkp1XmoJrWgZohpncMKoFCp9EDrdnuwV7f95mAYi66m5NUykj5ptEG74iBCsCccGSZLwJN6qi",
  "key6": "5UAXSBipEYnq14T12icUSLnXnnNzQ3eCTzqA42WFEWDKDFM3y9QwhBDBHBZKuyYJDaW4xCwNVs3v1of7SLLxuatA",
  "key7": "Gp9BTZqpp9mbxbCHyCZj2Tkw4F3Kbk4b12ZStvxeuP1yW8vaS6yraeMW3N52DrmEPm6QJEXnX2HJtQrSMEEifbC",
  "key8": "3Ph3fmLpWGL6Wis6gaLUHkew7HVqQam2mGF1ykuCsQyq2kr78wwJmrYp3gbsXH8c4S9m4m3otHsU6c6koSqXVioq",
  "key9": "2mMaESvHtVBEuNeZ3WdCpbStrQuhfp8VBRc4XvMT9T2QCZKk49ecJvuRc3sZvkd9qcMqZMEfzGqqcKbk4WAWHASZ",
  "key10": "47hpKjHE6KZRQ8ynkWVZCkLSBUBpEhFJZHdN5ijaW8YpD5HRUwE8QgK1pMDcS6iJLEi2rh47gcCLjBzooLtyjGQb",
  "key11": "5app8SAwg5QAiWiDCFx7zWxA145tTMeY8MkfAX5aYaZNzSL8QMFkjAm3am4H7W1ijwsG85wrookLqETLCTCxvLRi",
  "key12": "5dYPM2e8SrqUDdsC1dMGZarpmCYjAxf3s7CpqMsKHQubHZtuXyKiCSciMR8m5fZvGxmWqhXnJQtUyf5wyGUcsZ2y",
  "key13": "2aEjHKRvWyTtR8rJw4PT5YXhW5ygHd9i4ZqoHxH9pdYpdhBXdGELDdx5SC85rwcpS66Uhz6CsggSJ5WdbEuWTrH1",
  "key14": "2eT1LFKj6d1YNgYbSmXRXGtokXJepbiiTnJptwzoQjb6d3inKFt85sr5QofKcXxxQV9DYZPQ6ggdCKBHySK4Cy45",
  "key15": "4v51PSF1WjKdwVuq1dCjz6TRKQ7tmsUKKDNrXBAALxdrDLvkKCdk9UwTvf9xWrpyaAXZtLqKgMTmpXpJV7fwSHjU",
  "key16": "4oNSfUzpYoZq65Lvzd1csegm9FvssHrN7oV8FcMuvqYKzdF1mPWWp6KHhUpJxKWRdWargcBzbDCaw6dsgb7Cz3Ud",
  "key17": "24uXVc7BxBf8AbepivKcbmxwRiiL6nPUBWi7yRMg3ZXsx3khz73gvLVVAxbvDeZPU3MzFTAcXGx9cZUZLsCpuJWB",
  "key18": "3aTao2GjEaiNyNMCb2oovsNvqT3HG29dvZ8zEc6ja4hLFtH5QmzJr8g7hLKKiXTmHjb2DyWqc2xfbAKnxbUPQT4o",
  "key19": "3yhtCSd3s8JuCHvf6NqkHswThhuzcxz1rgm8kJMZyDPhynQXrv4ZQsXQ1WkiezASKwyTFwwLUhSjKSdfMTrsCcUx",
  "key20": "2z35CcszaUCCjvBWjsKHfCnnFdoknz43mbJvbpXz2RvW8SmB2jPTpKpkEeSVxGUc1RKUwauBgTdX6AiDVbJ5h9Sp",
  "key21": "8Z74WU4pWRGvbkLWQSs4fZA12SGcYfT1tQbJJgr3HMfH9XhmondTAJhT8xVmPkPorb4Z3EtCySStZuo1qf1UqGn",
  "key22": "4RtsJ2zcaHCinaf3vyA2CS1KMdu9LFnvzt5XvKqQjiCwrnXvUW7M4gdKsBLEY3cfZ212zagNF2PfMQ8DSAREV61f",
  "key23": "4MvcVuaiwoD53FDkzTYzjMA8cz4eHW4pnwbno53i4qSawbYDpWg5swxV7hSo9NXCwB5R4gC8jKYcnoKTwgVKBdN6",
  "key24": "2f7yFaXA87aEJgofSpj1x6869Yh2iwjUo1movhtzbCT1xdcjRaPwmh3NCyLF7xHjHvAjXCd4U9Mj6XBAtBdfBQZ",
  "key25": "4vs8KsKRrL1Ru7WDPv3bqdLcifqYngGPk7NtYuFDvdtVHD5jPjZKMoW1yqP539NPf4VEviGnWeuBUa1Ls3o6AQis",
  "key26": "5kAsjNVXubWNHxA7Mk9HDHsQpDaXVPRLWFTCeow8Uz5C7xNZ7bwH2eDxMqMhgUuAvspcJFtLF2ffEbgoMZkt7Feq",
  "key27": "FUQ9hozSxm5dULXBtnGrXsnhNLMDHAcdfLF39YXcyJX3MKogXyFmKruQW76k3XMwqekeHxHFt57ZSqfqssRVDcm",
  "key28": "3a5bpcbXq4gm5EVDSQiJnVjTiLZxJ2Hh2ArhTJ28hnz9rRZkJAhUy4whYNZz8p1ewgjRUc43aoSLVwTVxKtt9Qur",
  "key29": "34hL2FmsABQaPbg17heWwLndneBCG9ZkF53SvBZaH1icSC5XWiiSRmqiyAkMzLJ9NYntQRPXpNZmSoAnb9ZpK1wW",
  "key30": "5o3PaXjzNyNM7kJxi9jdgU4Jv1Xmdsb2qTMco7Scz4xWxbQMCWJTKvtcmfTXf8hevDqJYjyJFzFRy7KXcZTxMj6h",
  "key31": "4zrLmdZDixrTkw9LPGMA2FSCjaGDN3BXLARKUhgW1E95mS9CQXQ4MRS7Jr6oGqVYd8P73N1KqXKFQgfvM3gYacDh",
  "key32": "3uTNErDbcMadFr5GWkwK65mnNP8ZcnCvZGDixHJfJbMw7ssQFZMXeLbSPX7Xm5bcjFfb3yMm2cTAUCwXUNEbqPYm",
  "key33": "677jN1Smdizbqpqz5AQnTBi4ZPirKX8b1JymN5sBwgTMKZAqhwkbYz8JhVe58SVAFxnRrHfh16NRnmbhQ98fybLs",
  "key34": "2kMfmTCBMDJMm4u36EKp7o8YUswAB2SjXaxYR3hSd1TFxKE2eTxWGu5pAhfDCH5KqbZG3zSt9iDDutndbLFqZ9LU",
  "key35": "61W1ysYx2EWVBxzzC2Ey6vAEcHFiyYnoWLLPcUjJreNWn1AFX3QmiBgnTfqDy2htfKfNW5cz3XKAP1hnewShEkW5",
  "key36": "48JMrwryLVpiKa3RstNyXVk9Jwzu3j64rwCfC7yAXr5rnTQQ7tpJbCFPWTJ744pDPDyo1AiSRk1cm1sG2ig2WJNa",
  "key37": "joiP8urJrtDEtUKgKsFR4YBj3QQgdsoehzDduPcXcFahYrhmwU8ekhXcLhvEWYMk7kpj3yBb99Wntf64SJ2KCBR",
  "key38": "LFfPm4BLke3kzJ77ZZ7hB96fcAoqQ4iWD1mSJoe5ddAsH2frsohbNo2nfypiXgsscKGMTrNx5f69MVkeEXkDUhz",
  "key39": "2Mq9wrqDAdCPYocc5rG3FNfe5wYSMEZkgcGgMDJZ73bW541exJM1d9hdkaUEwvwW7j4sFNgzPno3KzQo1UtMfpat",
  "key40": "53z1fzkTGYSXath7LuoinsSzZHJdnNpnW7bad7e236LQuRnPjjRfc2hmT2E8U12bqhomiDfLxg3orPtq5DYC3inE"
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
