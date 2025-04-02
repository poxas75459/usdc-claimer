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
    "51JL4yPWFt5YCskAM9vRwDQPZgA3X1EWrYpZHZSkypJaV4kxgZEuopkfcvT4Uimpzrkk6ucDsWfLUAjjdTMwmWUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qbUYi4FCRrFHDPHRoKwRmu4CxpJr4W8rXX6drekipEWKGE5zJzeS3VEpBQSJZ2XVUFww6tBu9mRFtihCJu1eP2A",
  "key1": "2d7YjKDXjsgyHJdbJWhYWZ1UXsG3tW8f32dMZBxK26NrsqqEpe3R5WQ33AHGR9gBN3GnJrA7RRq1YAsZguBie4wf",
  "key2": "4Y9U8wthow9rZXRS57qRVTKjK2CQTyGXqxYprUMi3TRKD3yT4BV4TNhVx1Q4UzZL2LVuLQmkPrgALg8mwZgW5huL",
  "key3": "4jbfP5q3qq5zj5Fjq4M5jEeEPXXNTXPdGZHYoqetCeakxMueUbnU9WXLHroS1qNVgm1HtMECVHRKrdKrYrYy4y1Q",
  "key4": "5QP2fpiuELJyzwx9uNjaSgdzKwjgRRF1oJqkv6tPi1dtnDSTZqq82ADiFoYuwtXNnTivK4webkyWQ8tbPTJXfQB6",
  "key5": "3jnLSTypCoecTpCmPPzT8pbuSycnur73NSLMt5nbjNDy4Xxx8FiBdm2spfJsyXEZYGZg6RCFcLgeWsbc1eqVYiJq",
  "key6": "2V9K5R7seKbDvtUMCDjojtJ6WgRZqQS9cwN3a6gSTFipuUk2zCLwsPKJ7RNBKW3fbeRMNvnzs8NzRpMbGT9qpxS",
  "key7": "CcA1hRyEaKuih5SyfkvAPDr6FJRQGesaWSMziiowfd5XrWMwuFNniAPMbMvVWKirhAPA6TxhYmJdcbFCeEFiTgF",
  "key8": "4abtkE8Ytk4AHVeVxdtNFqYxZm4pduwHztT1PhYi9nBXk34uBGDscQmHCAuQ2n2BtQjSTV8LoJNgnGDHwAbMZLSV",
  "key9": "3sfE9fuU4iBUGpaHKQ8oHN9y9VPTE6WhpeuDwPnBqzsrJEJrmz9GFEno62MvcYEGbuNFto8pKYpFriAMeFNkheh8",
  "key10": "3Z8LVDZcmiQtUmsi17h6piHBpn6zSghGin7p3nXznDYeR24bAmFDMEx5Rygmu6PH9vGbGCDvpfmue58adaMjyFub",
  "key11": "59StCQY3zPJtLuwaCAUSJcmAeM7W4prC3edh2CZ7NbG57iw3GuDCNEMXvCsNnuvy4jKd3Dix4He4jb3QWM6jgUH1",
  "key12": "4sudH8AFSMtc6g7F3xqedjZckV21SXCfdi3yy7ADo4XZ8Ue8G5AQgJpDVxZEdfmcDcWbLvydaY7FXE9KcgTwT9TE",
  "key13": "4vxqPqZr21c3pkQ5x4K4gkSPeEqf9r9mqwZKhfJ8gcwXwLuoCRJbRH9s6Qz11njvyqTEoEsYR4hn2RbDJzYRnqBm",
  "key14": "UnwUSCwhjzYwnFHhjJrKmCJbwiWEkrjPsFfChjHN9eJudcPLG2mgMYDoTtNBs7tRPru6Zt8iXLyVCfL1oDeFoUa",
  "key15": "fXWCBuiJY7PQ2GvfqVMmkWbFPkKPcGhCZqn7U7iAi3hxE2LLbivsxz62toR4zwj8fxNAzytaFaXhfwWRRJobpW5",
  "key16": "2feUT4ovHc5c1Q7n1WXT2Eguj3guc7dKJi9221UZse1o6n4UKnpVM8oChgJW8EmaUMdzHfXTxeNcNtvqzSH53d8c",
  "key17": "4Hg4rKJnoagrJoWX3xfb8TpRFbGZJELx6rCkVAKRbgG8Qgs71vSXmbjo8hothVngorxyjBbFKmuHkutxAA45LXSS",
  "key18": "6429yJPFtwnZaHebSqGhSaKVu3eGM76prsMYn7NFPzCJZUyb7SoS6dcQ3HuWr1prk9DLore3Ncfj62kYJxmJgMRx",
  "key19": "WhaxLbtWZU1j1UBmkGzMMvfaBUa7DJMVzvtoVdRhgAQ5KNCwVXCtsMBeg1uwBmXzsMGL9RrziDUVYXQ2hhTmR3r",
  "key20": "41nd9o3bMHVf9unohXJcJrLpcdqTRvLGi1p6WvrpwuaC5ZLmPX5oxPxQ6SMBYL17Uq7FFBbQW7Dqbk8p516gbmT1",
  "key21": "5MLpcECd4sRj2JHXqGXT3zggaBDVEVDJBffJPp6DBv1pKZStiNKhUoduiA5SGewmmpay2PsTUHb6ePanFFYDwezp",
  "key22": "51zqjsYSXZcSXWG9zFo8MQ68A57wMRywxTMsWH9ZWuNi8Hkb2ByHSkhLzg6BVZowx2NCjLkTj8ZZhA54CyPLDULf",
  "key23": "3GRq6Y4PfcH6J3sNZZVehexnGHnCBpFRn9BPEhvz4ZL1M6A2PUEEzMYaLjbSakybDx1LYzVkHywoc6DE9byVANgr",
  "key24": "2EdP7RpPbGT5y1K8AWtJHVAS6aSAoMeCZceuQ7NsbNFavevMRLBwYB9JEktCcxeFL4saKo9T3UJEPDbBuLF6g4xT",
  "key25": "3HhjafWVo5A4Y87evC69i1mGh49cdmoGzseMxqH9fvkx7gzD8BkjWtr8gcvAR6gBGWUEQUk8N4QN6V5trdrTkHRC",
  "key26": "3vc2PXBgNm5Ccfn5cUxs3Qt1SkbAnZP5EbTXLiLFd4D8vztgyZqkaAvvhzMZAJTLqArXVv82i5ibJmybvgrxgvCm",
  "key27": "3C96VubK5uTiYfmHbCwXVUfJXKQHxxZuqAUnquVsqzHvtQ5Rk2f3yxZBDjzPAbKnKswUnn2tpcfKjYg462rD8Nd1",
  "key28": "2cerjXFouLxSsjTye3WV7F6PrDVshVPzKgwcUgxmVEZN2kbb31RMZiVBAoBBNhAWePuVdjaQ1K7Qc57UbMu7JZ7Z",
  "key29": "2SJqWL43U2pQZVUDhmvGYpZ3EYKJMpcuNP7998WnvgUjK3kfkXKTmPUHpJyRjUJb8BCdUjFNKEpovQZfQQYwr8QT",
  "key30": "Nf4U6x5e74hge6GBg1K5Xw3cqYvxQo9KQ33m5RkXAx7dBwgCDU4sNo6gWMfhog1wnSDMNStdad2BazfXFQmAyNT",
  "key31": "56DSc4ksCxRbKkpqDp45Spk5wZzVPHmvgn7ExU4FzS25oX36DZQsoabwSV5yANf8dfpPPwXF38mKvu5GsaQjXbMU",
  "key32": "2hkDGwDwtDFDPKKWUxsRuDJ7eDrTZxYd3vrGBz4xsFRy9dTFo4pLMjaxCh7MWptnD4QgmV9D2KnzWczLoDps5xde",
  "key33": "3GZvLkmfWzFLbhSNAeSNaYbg82rEfCymSuqKDogyUCu4PmfY4A1u9NEnZJg3wZ3NPnvkBKDa9BitjcYn7jecApzb",
  "key34": "2pdA9Jd3WQszPiAqPrsCyXqNhuBpdZBPs7DKvZJradxyRrm8Myyh79mY3QxUFJo2fLyD3tLAr5o92eZ8C5rVh6w2",
  "key35": "4sHS3s88U3c5vdcGT69te86c5BhZZP4TbLcTDKq3vP4ryn1UTdR9MRpWwMCNQyChJYgc7d2hYZDeVWVan1h8nxkW"
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
