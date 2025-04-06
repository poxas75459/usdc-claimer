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
    "2QAAqf2zrTXhYE6o2f3Tuo26o9Hk5FLbL4nZBPZMjLCbnvhRf5gveRBWa7KFZnpc8eko2YeRDTNUgCZPUWt37JWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KTed9L188FHgaGosiuGUN6D2ABbtX78QXG2xwqj977cCB76WQ69bqxj8iMvcAhEHun23UKrQZjqGMXKULfAYLq8",
  "key1": "BxdGf7XuPMHEPSPoUqcaSV1sD7Qyz5PMMBthGVo6rWMFW6Zn3erQMDrmBNuRTFro8cuwjU8H8sbNx5GDcPftUM1",
  "key2": "2DFMC36JJ5QC2ydjztGMhwqWjhXfTUqBkjUs4upjX4qxAsaLkf12Mk4LiDSXqR6WaTb3Df27rB1KYdieJApbgkUB",
  "key3": "3bfHGyZs4wGrjQ7Mm4xNaXQGxEaqS8VLmi415jMLqiVbB8tpRYmfXwQLXbVyPnhQHG5g8xfyDwZ3nw7ZG541pJRW",
  "key4": "2UcTB87i87XdbY3865YWjJM68y4WxXQrS8jAefYGSnqc2aGafwHdy4h6grRK23oUR9iZVi2S6KMz9uDdGMcLMQ3a",
  "key5": "299DhJ7GymYZf3GCanyXUqNwwLswE5HDuXmJrrcDnGFoYXbCeA4G1PHF57dJ5fxKWHbKkpUFCFQDT7LC4hXA5Pgi",
  "key6": "BZTBH9RFACYyc5u7qiw83RwRieywmp43wwWz525RoACaokjBCusE5XVi47GygcoGMTn5jhvGkQ5GRrXtkdK8SuK",
  "key7": "oNkGM5vv5dh8kwcqSWS4vJc9r1n7ZNtLH7SKeEK6AS9gGcRzzJoVtvuM1zxxpbpGE1vbZx98rwBihs29DK3deY5",
  "key8": "3UYkwoJA3V7RkBozqQC55nFeqPTgnXbjRs3Lupi7vNdiTiKpFF9o4TS3BGXwDMvjYdbKPemsSYiMQWeRzYEfmiM8",
  "key9": "4XX4JvU2SYPr1cjXjKggWvjX73cMEDaVLySsbYQZTr4Hz6Z9iSD9qJSvDQ7mt4DEf6M6EXpWsEmY6mb3AbKyqxrn",
  "key10": "47WQHpScRdjSLxpRbXwB5P44bZB9ws34PyyFUHtQpJYNod28TC48EuYPnmDo1CtmgDPXZSx1KjNXmCa1yV1Xb9yy",
  "key11": "46NpuTdt7Pdx37mvs6qTLa4cTA2GH1jh5DexTFg9yDRiXReYrmhgUGK8tjJQjGtu1EubxvkK2HScKNkX98ZQitkb",
  "key12": "59hAfGksy13TokEgLcuzBvZGdDHaUBRz6RhGyZXqWkarmVjnujifSbxBX9qtjAJYFdwWKfQWM15sHdTb4sgi3mb8",
  "key13": "3x9Vr28VsM6zEnQvRC8ef72txfKpFh4dpn2AghWxusqGgSf93kZosv62EuDknmhqFS6yexvqJJzFGXUjFoAEXvNr",
  "key14": "3WSD77JEXMsS8UyW6dJzWbjp4DzHaCnrNVWqisruCvBtBUkqRxKiyVjhpZJjRxseFgKvDViX5xGgziwEwFrTBvCv",
  "key15": "3pYGKw1N96wSde37gRv7U65Ucw3tm4LZzHVPLtmiDBWYUYG4JdrSAbbvwP3jGaYou7dWNiagqEUdPVVaoNbvuNzW",
  "key16": "3iu1d1S7LZ9PL996KyYMdgUv5Z8Ztn6h9s9PM9kXYJbK8moQUD3usPwXqzgaFBepTVNzEmFpfRY6QUfb5hAb9f25",
  "key17": "4JZNvMmiaoddiatYdTPS52eD5A3r1WMCMzo93uGnuLX6bcWAK8Cxhj9BmCenRRXzRKQXXtqXppG2JdQGZ8VPH8YP",
  "key18": "5kh9opMyEEf6uYfPTE9bU9q6s5WH7ifQ5rhUNkgxpnpK9V5kwnsBknTBmxKXup5K69JeTyi8udexLf7nCnKC8Kpg",
  "key19": "4SuXrrHgz8XAeS5y1XEKyugTmrS3aAtig8pnsBNRB6ckAA3sbKRBuKJ5uyGr1WLxLp38XUhinBYw74hNDH45wSsp",
  "key20": "3caMAr2uDB4QJGzHwzaykCvGwcw9Jqd1Jo6R6FRo3KBSTKNV95XxFUHGbsHyN3LvTkuzEi5xqghnoGSSXcSdF1z6",
  "key21": "3Fcyz5jsDBZWyYhLebb7otjHDty4HEXmS4mQZGFVE9kSSxdCoyeHguSTexMMuDmRMBfqW82ehE1RHrDjo8xvTUK1",
  "key22": "383Pc2a3N2YG3xfUdQRtsumLxMTAnXoyH49ipPtz5VT7pJ4RTdWENkxaPdSfmj4Q73gFXwUzLg1GJeuZPQoFXYnM",
  "key23": "3t5AN6VvATpjqJ8g8ZV3qGSYow3d372L3HjM9ZhG5ZSToJW6uEeW6HPqrRN2B7Xzoz8aaKRJABrfFEM1fd7TgYDT",
  "key24": "2WdmbGhcKQhcyyCjgY4BeMHr87aCmRcKfjSvj4i2AstGRFqUtqJXfz7pcmhPJ6nSSxBAausBxYJWJZ8MhqFqHUuj",
  "key25": "3fWH9FTpmsK4PxtnQwS9n8jLYBDWYEXYbRTrKPrh2G3hhbYKXNyBhv45bUceRiZbfsyNmHFuq5auxBBNWFvcgKxo",
  "key26": "5WNSJAYt4JUM91d7Rwn52cB6QjqcnHTCHnJ6MMKzCoY5PC5HqWtCgYW1EK73vTchSqb7nxmtK8dwXgTjRhnwsraL",
  "key27": "i4yRiWBqj259FdbKebXM96JX8hwnMh9xPzS4EZwLchRfQzKSpos4CmvFCZ5TqKB8m1pQU1dgcdEj5gpg5mj2ruK",
  "key28": "4WP7vfP3tmNZFJfb1rH6quq6fyjTaCqodaLDq7a59bGo5kLmQkTrJt43EuzN35YAQVkGrVe2DN2PFXReiCxzfcDx",
  "key29": "2zk9WGHZutH3eZxsqTCNWZhnQYbSLjR67GhLB9Eh5KbTm4BHHorkikQqrd7XDgA9QEdgskfJC5kDecw6VAjSQpfM",
  "key30": "A6X8A7gsKspD6iyuJrEtKjApbN6R1VfqLudNiJ6Ga6Fc7rRXWxEYSR3b4yowJsgfQ54c4wRg6YvrM576gAcaJCo",
  "key31": "5otGJcRxiERqDxQU3aTpviAcufDwidYrjLvvzP3Z1WhFGFHEuGQZH2WmonWa5NPEs1MWXCvmTwzsKHcVJV3hB9ZT",
  "key32": "DrxvcivSSGpAhweftvYLf2wiwQqbqpXa6vSzJ1Wk3yqCxChJj1QSwZ7rdZywLwSE9KpntXs35z6ahNmGPof2rvs",
  "key33": "43iN2DTzQE2UBfreYLaUZ1AhNFdvR1Zw1RsdsNmReNRDdnYV51ZeebeKAGKEkEaAdGRTm3uU4dKPKzF2UbUQQND3",
  "key34": "34bBycx7R21YPDK7Xi6xwhwRmYqddFwesapH3Xd6P6h43aZBFNPBzRn1JsqQfKUbgihxKrQccEoZRqZQ77gbGfjo",
  "key35": "3m9fwoLP3AuwzDhkStbLVJh72ZZYvPmm3RkEsDvgb1fiUgPzfcQGikqzK99b7ufWSFCyjWSsKDdXZmkVowY8Wb4s",
  "key36": "5LqPReJmz3SvPuaPwZFWbRbmVaHMJzJH4aAopuQQ7YLawHVA1AjfmM3cFjHWZocdPGN9fX5Unz3G5NCKKyjDB1Gu",
  "key37": "2ubK7DttXHi188sVpdoFr1ih1W7j9PBkskc3cdWyBMHtKTQC7yEWoaKHQR6csCa5HyBivLYjBHyyFxZcXSaFs9kv",
  "key38": "MdnhvP29qNirUBA4v2DAnFjWq8WPLRKmny3f4d3Mc6rY14BvdzZCYbC3L3QwXAQfxrAcXDY7kTp1idBMrsNN9wT"
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
