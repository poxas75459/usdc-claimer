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
    "3PuwMs4wbDTfh4ykrAQiDF6yEd717DSMZCWSuhTHxnyVgEn9WXe7QzBV4aUWW8RmDC2uTtEqohhi2JQKZCQv3p3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WVG72ZyTTptExJfQWxr5iPCsyVRJoSdtkzCMPh8gzKaj8LabJob8ja3HwX7g3RF5hXjd4LCV81gddBrkzgrWrPP",
  "key1": "2xM6sqStXQbuksAbNQrpm675wTZH1SVLRph93aiUXbLxCWgwAEa9fdyphBz8qDZF6MnbCjro3n31MNnBxFFVwrZQ",
  "key2": "24ZWV1qFBJ74q225k43CxZVfsLYscQM2WiWzoYx8LmKxPjLW1qZgDADPTGQPnDgvZi5BZrSWfyfFhN5LnqenoSkA",
  "key3": "5puJapJbKgNJMAhr8efAEnJi1BexUMj4jNguifYFk5XxMBQXgYR19MwH6g7rxcQBkUFJ1XS7CvSJNy5bkrv2cjtf",
  "key4": "NadXty3gtegM5UPQUTy6gb9FYdwmhgikP72nDc9UaTsEGnMHECuZ8EU1wupky8wzvoGoGjeoGwch83yciWQ6GiX",
  "key5": "22eaiDXmeEgzu63d3MurJ1ex2hYhw4UPmJcVVBnG46JJ7cTnRfZgwDk1yynyDZrLCEczfBV9JS7KdioZ8MPq9U27",
  "key6": "678FW9RQAcMVK1NwAbeQZXye3VSuQEkmrLhBgRp5wjMqZWxjVox1EXmXennfNWXKkrKMj1Nr6MRCLRndosekKKZc",
  "key7": "3m3X4xC5ANXTiS7r1F6kem6xuaf1aHfnedfWLbhprsWTxQY8nwqVgtA2Q9mzmYHbDhkBTDrSjt1rvfRj6K8wgive",
  "key8": "4JE6Te9VAHTeXdhFRAJe1WwnQBk1ZdSAnCE68ZDAZrN3oTAiKUECMWjk62hndv7cbN7gvMRKEhEqg3u1bPdEBvYP",
  "key9": "4XiDsrLBgTk6cQFWo7fAQgmx6Y1VaWkiqMJGFLBvpijHLxA5SAdyUB9vYb253ZaTtfXr5J6d5Ji64uD1pUhYBhRV",
  "key10": "4188Uf5t5qp3WmRVvi3xsKvRR4PyS1A3k2KModoJPrp61KnhwF41RnzFs7kF4a6HShB2uLGbWqYoBx4SzZzA3QUz",
  "key11": "BWmnjaXdbwCxp5mxvGFSh5Su8tR8EMUzjebyxZEmr1z4yYfUm6vbYb5Qod8YidNnwAduh7Mrn38TtCuic1vyEfq",
  "key12": "4G5QDGjWToTiu95vY1Snmso37RQGrbepWjLQcVUAas3bAqVA9LtWptRKqqWtnjjypdvjuhJAc8tc1o5oLZn61G9y",
  "key13": "3Vpu9MiEceVUPKTpxgVN6krmNxh7FDBAcikkRVvh3F3e6SAZD4frCRYMaPqYNQ7TvmTj4yjZ9wHrD7vPmoxcVsNt",
  "key14": "3EsYtUvnaxZN8P1A1bGd9F1fa3xk9XLrkhKRAUHSMsWqCNjGBftQzc9XjNHAkT5y9MiyLAWE6TTWD8WdqGuR7ZQe",
  "key15": "3xaCrBra12r7TK8xZyRB9gXfGDxVamXo5vp2eUHW2uSEis5U6dQ1qomRFp6tq21dPLFBBU4L3uPVRVnnR1kEwPM",
  "key16": "2MWraMiZNqKHJiZzp5SM8ZUDATccgeU5dmpHkVApDyGdJ8kaK7CQwA5sUf1TFQ9Bfn8fuJFozYQEouUubGRSbukr",
  "key17": "57cguX9g6Q36i7499v6kPm6xHHBq4DcVK34Hu8xjeJoBMxdA5fWhJ43rXf16nUm6PN9itA3ohxBcb4es73dGDTAv",
  "key18": "2PQgwmF7AMiATCZZpntkFBaK9DY1LPcZLY3LcQcNfymJKhzESj7Ckd26ZV5SRuohpxHHPZzbxnQkYnRRaTN9g3yX",
  "key19": "2ft8f1j9QVdCLMZAZLRkJu8jXq2JMLM1NkHBbEBKo2nc2cVuvFvn8H7cBkookTApw1VUKQdNrYhvi5YrD3HVRDb2",
  "key20": "4WEmeqmDfmWZDfkX2TMWWDHYiAD3S4cPpLdoGFyWbbCSoGqnNnW6FWLdJpjyHaF7mAbJXgLPBEjiJHTZQuV1GPKP",
  "key21": "4ShTt54Tsv743wTMDoSFxVFxR74pxHp8ULSbXuNJqY36CV2KCodvLWi7DtjapwgrdZDFozjJVN9GHu71EPx36xS5",
  "key22": "ZLfxiKnif3igk5i8WQJ9kBhCJA1ygzsbJRVUpgWxBprjnP9NtLWNFFpza8fobMX7fNdXYCorW321DAJcvaWepGs",
  "key23": "4sGZvFrUK2Z5gWxoQFSyN2Px4bsoVMVyFfDWGYmabpSjC9Eghe9sbe4LHHmYbUp3uFaa5BLjQ5uyZu3XjWUjpzx3",
  "key24": "HzC7i5tUFBdnifivTxy47LgtL84pWDgWxqGbnZcQn8QdtSZuU9M14ZR9X6pfgUDNgSN5eAJdh5Art8gaD4jWGLt",
  "key25": "3rCHbj1zVHPrf6NSCzJj4TtCfrQNa4zZQy3ZK1G7oDPsPBeUDrHUsyTbfrDn5z8QvZ5p8pU243yFoT322CHbCzDL",
  "key26": "3LGyRyH6a6abhu8bkSNSH3noPctC6aUjBR8M7tEig8GvJggKmb96b1AWV4hXLnNCiWiUgsYEa4LDWdT5FhHMKU51",
  "key27": "4zqvLJEJY9UW8Qztw9Eytjqujbk7axep491NfEmFXzrrVuAfX2Enah8JYYCYhtPBV51NhrrbD8ADhkTxRReGXoNa",
  "key28": "3EKhpFASGadYs24AccfmuQ362BWu51kbs6heQP76PJPwAqpYAB4aH8WYNuAZ8rmv3whced3ZHtiTAy2fdjhZLAXh",
  "key29": "3Xvc5agmvt1CugY3ZwT92tDk6NzDWXBY1MW4SHiDNGjuGCgnpR2z7rniahmVkMBcyRNAGp2zfoBdFAapvxDxTaKU",
  "key30": "5AVdRvomAwya9znm6bdAyEKcR9zvGHm6cDBsfqnztbAr5MqQcnqDz68gNZ7sVhdC4G9JKBk5QgkHSi4w9sb4XF4p",
  "key31": "3KUhHJLJUCbUrPwaTAqJhwbLk7r1MXCVuW24ABcznqE8tHAsxZKJnuv8FJEV1VPNReD7JEpMu9bZ1U7rZLZ7WQnq",
  "key32": "2HmTKskw2EiKqGamAar7BUcoJjYx6zWXxm2PnxNffdyRWG1EKeVeceeMoizMyic8AcMj4GX8Fd6JREm1LpBJeACZ",
  "key33": "58XLpwuNj3KBE3VGJv8Gv6VAXmDhK6h5iohMHfiUdyAtn3i5egP5fdzKR8MRnsUrZqLhaNpGYa5T2BRmb22FsEKz",
  "key34": "4xW51EQUoEgTSzgt6gnDGriK9WcFFMpWnGkweVBxXf9smgQR4PN41Lp26zHs73NNAKDCxcvVznBGhNgUrQtgAzmv",
  "key35": "2RCiuAoLhtDfw97TPwM12L758BBYoUHCUJ82RKQXofFcj77rGeDC5SHEC1R9WTGHA4xNZzCBtWy2YyoHpSqqYEgN"
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
