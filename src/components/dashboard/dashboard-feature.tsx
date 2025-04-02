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
    "kGqwmWeQ8hcR9mNzKxgPAfnzNZtxiKbfcMCAigbqZ5jSR6Xqa5uS2G9eci3EpPEF9W5pWfQaTtD3Hb1ezPSdXwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LmLXbs1GqkGrbPZCbfEQk8x46S7E4vTvz6AhpGcGEhEuP9WCzgtwSswc2xHvjUU892Fwhd2Aop3KZwFCLpv7Gze",
  "key1": "5yfFaA6fuqgc3smid7DhZufEkz4CPoeyGmS3o2hT6xshTt8xeJXLABAgLbUArFffnFZcuswvkgE1Ua61XUB8PVpb",
  "key2": "N7x56T6TvHR7WC1aKDNbyzNR7MajQfY8fuSon3zmnrq9hEPsbBacVEw5nrZ6TdzWGrvpDrnufcxPJRupsVqrXem",
  "key3": "2SA7pT9yQho3WmoWCzpCy2St9NJHnoXezNNuQe8hmeKpwnvZxhmLEc7X9bvYR3eg2c7MwQ5yBPPfjjrgg5BN7aa6",
  "key4": "3NJVFfN1wjCUnkRCVXyF35PqnbMdebWLSsHqch5UM1LsLCeEgGoMYYwdPyBCuiN9RRGsycoVyf7fuXoAzCj6Ug91",
  "key5": "5sgHUmTTEVyhM5xodrT4nLTAmxCASQCmJ94SgtGXUPDAXh5nEfRGAeHotXvL7GWBZJWZrrnWQ256Gs15xugZEm4D",
  "key6": "37S4Bo1wN8ryfinBnUrmpbzWSuKh323aFNsrfr1M2wV419mFBgrB5GAecPjempnH68W7tpLkL7iLRqKedGFsRkKp",
  "key7": "3Y9opbjaAcnyxpRarkgzAfvRQ87k37Gn8R5iGRWZTzWH8Yb58KSwjYy1racHeVeVkNpgwnmCGbfc7BgoMmmWBWfL",
  "key8": "5AyYusM2xFUhte22T39oLn6ftTViuFadnUSgKyEkR2NjKWVyemC4dZyBcSn6NuE4jqpC4ijELoj3CohJQ8sjDEhn",
  "key9": "5tTMNxwGk5w9EnmSaeb6ByTZ415qekK64SC1nxyyjUhsFizjFNZ9AifwABYamF4FWJ23W53HZEiZ7Mv5QXRgC2nt",
  "key10": "2XGDPnqdQXYrForwPX92AtG2FDJT4ztUh9b2VMvCVxvfK9i2i2754j8zGwYjqLydKBTwc7qNNt9tFa5Cvx4BtThK",
  "key11": "5z1DkAGjcH6Uf3tCMfMzNdbhkqnAQLu9Bs4Zjzdnr3XmzowtgH1LvJsxJsXdj4KF5YGtEonAsadv14Uk7qzfF1mP",
  "key12": "2jEyrEy5qxuULu2yyiDG4Uh1VoBzGJJdeYfUNoJpzF7mXLFYSVuaNfT6hC3UY7CWTM3UH1AEuQPQvqjQhFUrRhL9",
  "key13": "3449pnxRUJDWuAZ7nw5q2rf6oSxXj9XUFrcULcdRxF5zKhHqmT992EoFQZjEMChx9otTt2AYCUioXWCxxZabxcDY",
  "key14": "252p7PNjKTQWuHuDN1xUKyGA71EcQpJ1nRTQBmc5jPVtFB4cVo8SqM6NL21ivua1CARdTATukVPn5zMKTTXh1ih8",
  "key15": "mKCUqfbEv2XWpfsBoHkaxAsbr2th2ekjTQL9jmFTjHacTsSsJdP1W7wwzkVb1QpGq5t8g9i4AW3SQdAunuDkGHJ",
  "key16": "31RyMnWGRuiKDd9Bu9FQCzmEFGBwkAHfQDT5aeV9Z7Woat7mHY8HekWroup29kq1prTphdb8f8hYrmEgj8KPYhW4",
  "key17": "2P65vhoQFkWqPJwKcitboA25mfbq7aaquFNQpmrGEGsHuQtJTFnbgLQqmJeL9SDR1dxPSy1LNa7xJpspqukurJ2Z",
  "key18": "XtQDWJcHQt7EVeopVVkUkLVqEaiq71tTxqCNDamAQ8jiocaUXZg9gcJ8sJbKaDGfQCRoAGmd25PUG23BDcX9AU3",
  "key19": "3ktYFDBehcdngPmqastSUBKjcE2upJJ1hkgxSHoSYBuVtmEdaHZSoUNiEZuoy1Vo1EcXUSWw32Mvif6MrkQEt8uo",
  "key20": "2K48xBKKDX7Ke6VMMSL4bfL1nULYait6xcD9e6Ckik6awG8MEhmhKh73Qf1w2yEZ6TyNVjEjPaoM1Q8fd6j7mzAj",
  "key21": "61gq9SGBsxMapu5E9ks4JYvGN7HehGvKHk7LBfnR18JA45bbiYRw1TFd7eJujLm6rniHRAmHNUv7dgEmo184wdSu",
  "key22": "4i4KznSmuHg5yssNp8sAjBgcWHuLE6tWYFce5EpePL1TneZGAwBr2GMtpCLusqHU5QLSJpxpd6uDrJzHUYeMKM2x",
  "key23": "4CH8byTprZxu3vrQLQTM72hmeSghvZ4ZPKFJcZp4zJkYehGgPx4Hz2kYnNZJLJXEGfdiRQTWXbG6GYEFTAo3jJ1F",
  "key24": "2dpL6SKB36fTszwxdp1gBQ5VEFybKkjBwmvtFYNrZNDFWRFU1kSHTE3S4XuRMg88mhkcJC9aBv7LF8s2YYCYYx6p",
  "key25": "2W9qqxfdBaUsDsXnsqfRiqLxjKscRDquSb8dZomu9qaHh45Wrva1VuT4g7Qf3tNVTEJa1hv1GiDckCTtLdPMdJjA",
  "key26": "31t7Xn6N6MYKkLWgZZn2JeTKKYNkqdusLpKoAtZS81hamfiSu3jWFA4rcMA1NayZJZJaWfEgmheAEiRed7EBnUw3",
  "key27": "3f8DvQaMT9PVhNwpNkPQUbnCmQtHttRppXHjiajPCj7hqzVJJYCynN9UDfnUnFDquJUmiSarmZddboYcubx2mBf7",
  "key28": "N1qVuo2RAUUi9tAFyk9j1ge1kU5ptFBd2GEvMCzSinNzWoF8hyHnRe64iPAE999saDaNtW7u4T8w8bdkcbSmxLB",
  "key29": "5EYdsrpeRByQrXEe9tbVozjiQWsvHtysUAN9RGLaVe9weoLmNhUwp62D1fcMWFVpbrKa6zt23A8gEaFxqtzkhPEK",
  "key30": "4sXP7JevVSJUa1MZHk2ZHvdHrXqok6oJ6QMKbXxDcxRzbBeTDHV2cdxsekgMJYKBqG5Yj9e7WVtRZ1fHjscTtMdB",
  "key31": "4xwagvwQVqdoZWkwSq1LQ3cJETF6JMRLJvs9ufPKGLJpHT9vbp7fVEkbnoBY7jdUKU7CuK4WJEt67yYRQ2Qbrj4g",
  "key32": "2WBYTyUqq3jiKCj4MnSBaHxYsbCLDhfmyV3JMBhJKUioUWcHtDdw67yJRgNwxaYJFUHG4QfWCnTof9FsChcWnwC9",
  "key33": "3KioT6DiVoiW7EFBQyYGFqgDm6wb4gsqiThGfTX4bQh5viu45ZFjpBoy9wA62UsnehGpMj8DqgtqkyUAiQ2f2Afe",
  "key34": "23Jh18QSCjSF1hUCficcAoTZQ1BTTRMMWSdXxhMT3ebqn9vTBobqGoDp78ja3kFSjDeqEJAxZyvi6C87eLqanjHM",
  "key35": "2grHwu31m8HA3bPPWFPGEMKep6WJxZajCpdt7iQb9GXzmraiZd6ovq4phNoMHRhFr2YwLW8x8N2CMVhN1iv5KTqV",
  "key36": "g9StNAm6PSDGwU9GWnvfwEvF5LdVLt7CoHtoMPxzJeZcLJHS3rZrbDaoEFFW2S1YFRVGSbpkoZedqyqzjwvXV1Y",
  "key37": "4Bk56FqsmUVZQmPc9sAaJNvRNd9dzrvAUXW3RVC4YveQA3YHsEDuQnvSp1Qg52Hg2LURV2gFMbxKPqTivLt12jn2",
  "key38": "3ZW9GbSRVAgd5ATVxpNS38HFZdkuJQLiwxJe5JNjideAwS6ogJEbBScBNRXpkUoZMhqDmHvsEmBySQftLySSXiNY"
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
