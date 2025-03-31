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
    "27FTeMF6ymnj4V32W943XtNyX5yVxLC3F1vxqeAWxPby4WupNMmXz2GioJeABUjxKgnmtmjTwyp1A4DJziYjQxQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C914KCvUAb8THEFZ8Xwif5GXU9NaDLnhzZY3FgiRTwUWJLuoQWup5YG5LrSgvRMnL9TwGz5DTcWDtLbp4NMCoSz",
  "key1": "Fcg7mMs3terMmqvT4UbfL7EqLqBEmM3kDnbi8Go51FjUhbbouN6ofUZ1eszkNAj2EGZ9GWRzFgAdwckMhx9BKAD",
  "key2": "2JMum9mTFiiwsHST8h2YuBLR6qDWPHfjx6dZj8kTcpxaE2gCvCtwFPdHZEcNCs8FHXnjdmgu3Bbepa5FE1J9cT4x",
  "key3": "61T7sC2EXbxZfkbJFpL6k4y3enHt1cHQsfY5rFUEcRSw9tNhoeKsffrjGTyJs3NdFFwtWzutc2bMS1GHffUPbe2u",
  "key4": "2taMMhQtBjP8Kd3A19X6TqZXTJbrDfPdY2sS8yUK5BSXDcZ8rm6aC4HtLK1XBhDfy5s2WGkQcD6MFmUxdoeEzyVT",
  "key5": "5PKedQLb9yA3vVRCrt5csznABtSYZA75nn3R7M7PLSJdN74siFvvL1o3e4ZUf2p86frsd9Z3HrzQSKh5GpWtWocR",
  "key6": "26XMF3Jirobw1UW2NdCWVRh4zJWwPsVaxkBGGgedSUvgNqJGsCZHtjQR6w3N5FFnhuHyqGuzCrmVx6FK3pBe1kCM",
  "key7": "398HSiqWGDDebEu3oKTLz6V2ERxZ89ANqxVRpejV86a6NGavW2GySt2aLT4YDfXJn2aAD7ddT9McAJxGSYH6eNrM",
  "key8": "5bsVhEM4BNFzZNEoSHubwWVtAYE8jvQpnwMoWn74kVE4XDAc3puB1wKmaPcbYnMBDdxbf46FAZgaXtHiN9P2qkHd",
  "key9": "5dJyv8kH7Sx2QB8Q6VjWUP7Grpy9wzLST1EeK2whxAVgjRFHsrjX5Q9uUHCggL94CZn6MBJ13HrmPMARm7614ege",
  "key10": "3x6ezjw1zBUwYHPjnaCR5kj8MdbGvHBV3FX9DCCfWUMtR7oXAasAfJnvJMcv6iPADJccx6UgkH7pnar6nQ4mtJ1G",
  "key11": "3NucdWG57wRR5L2x9i2B67FEByt7SD8b9Uc7A5zZtPQTBbQNbZvxhqsurcEaKeoDD8GhzNCwpD2D2pxG5yHwBeLc",
  "key12": "31BSg6Z8NUGZXzGh6D5qAARNGjMJx2nsoWxAti2MpL7Jx6LvqsNqAXKZJ1K5VgVPE5kkyQ2KKsn3rekVL3BDDBpC",
  "key13": "4PMJ7XPkMeeD9ZaV783tW3jnhMpfsJZmypLYRg1X8Zj59k6wJsnvUjaJ9yRj72k8CLJjwNyyxSmSp52oC9fphLFT",
  "key14": "46kWJos5nkuPf5E8vUu7FmhEjhr1c775TgMDN6m8HaVP4U6R8h7Buqdc9YMjvJ15zZxkBottZTrCeEmfRcEhw2pa",
  "key15": "38Eq5yEEMj25iygng23RfTHQTFhFs8irRsiJTscvNpjwLdLUHG49e3Qw8V9wNcuKYuLBnTFbnpFiupbKafUZChNS",
  "key16": "5w5NbGmVMWdek9Xq7C1rGxQpBM2gzc9HBTpipbYy99EqAdG6hveV5RipZSq5DFfoyPw9hpDSwF8FSu6b42pVwv4A",
  "key17": "56XHCSybKWZfU7BwKawdn8zkkzjPYU1tNXyqF5M47uMKmthmXK64wD4Nvr7bsspuyTkeaByfKFVUkaTukJoz1i6H",
  "key18": "37jDVTCHo2hDkN6Jq3sz2Dc14aNP7etD1ZEHDqrnXK8P1tj6dyV5zrFr2o2DAH7QwLd24URoG8jAamWCTvcyVEiF",
  "key19": "35Qk9YvCrXApez19ecAAmfGJPRMM7LWPhYgHTMskymuqExXss1HUiSoArkSLP6uhRFTwHyrtTCE314EDHNiQK6WU",
  "key20": "3rY6ymmR3Pk4MEHSFvBXrFaEBBAXNNjq2M9g4N3SDQsqapbP6ArTn8GMM38TcJ7Pw3QkAeAhWhGX2T98dCxRNjAX",
  "key21": "3hCMPyqqDiXE1Vaqir6iSMRqBead38z2acWyJV2QJknk3pCrfgMUdnCMiAMBZRzLdw786PJhDQWfTZxkY9gm35cc",
  "key22": "DAidNR79DiVDJxbHn2ctBqGQdsU9MgXPpcGooHtWLcWA28FANYaxRhmM1zrr5jvCENkfJmiSN6yfKGns7f6xTXD",
  "key23": "4xTPyjY8tYHx1hmX7ayxyTTakGYchstejDo4gRDuP9LccxMr8pL7mycswAMFx8wSDuAEs7eofuVcbrAqL8XjzkMo",
  "key24": "5uLeqxtTBLMfZLvnQCoW64NsK8qqJUA2WB9Rnc7zC4bjRKcYPZZjwd6UXuVoAhGUyzMhFYtRTTrdcHFsCpzyZMFT",
  "key25": "2wwuV2TJW8oWeSrDQtAsne4jJKdcm71QxPLckxHFuHXSBJ9PsoGMbUBvxFpgn8EQmzyeECbUdGCw3EcopDmowr4m",
  "key26": "BH6qgfSnuHuhiCGFBJ9RCK2bKvLvGMj6qeFpaVqMXYedY5wkEFP6xXS9j8JXafYxNZ4k3Uuq4QUXspvfHpaNXxj",
  "key27": "L4pRMBY6VJCgSWZxyHq2xTedDUgd9Lq2cWAtG6Vs3VGxNn1cCqXBxcyEz45DakWS4xJ3Pb5URWpvTsU9MYv7GuX",
  "key28": "5EDnxx25Ae8hGtJLQzNfVrfxi7cc7bsjc9imFVrcraTzARr4KNEAJNKC8ekPQufqrFvJ5LecZMDa9c38RwBBnCto",
  "key29": "2PTFce4ipqo4vbtmWPUvBTHrZD9kyM8ViRjH9zeBoStVx3BwjHVWKViekuK4TH8RqfQ44VLJ7bBAGNB8WBX41D4h",
  "key30": "4uJDjfs1eCDsmgoEFbQDexA8GkFm2y2dtFTzBsUmt3gru9JJJLHUtJj4WgjkMYWfKJxvDNaeZUgUF1HZR4YDirYq",
  "key31": "5LqjUKZmSx6RQuN679oqnqjyzC3FwvHjCp2GWuCcKiYvxE6CpqtsWEBz5ibefX9mcW45wwRdsAagGUo44SA1tTKC",
  "key32": "gGVNt4ELwMQ7VpU24MUZUFL2K32gGeGnfSG6F3AagejrAoJpWSSN5fDdYrezyGbpefk5Bk1CVJASxJD643siaCX",
  "key33": "21kPnk2J3R7hNjCnjuENwqbijLyrPboTzMx8YQHvBt5d3C9F1yzx2TMuXncaT4BGGgUKko5JpwjHMmrZP1T8VdHz",
  "key34": "2am45AzFYkVG4iwqNNKCubcKJgeYJCATKJ1JqWdeqzL6b5oYs3j9xFbBJwqqdTYqDV9sptP5LLwtZWEZJ5HXQTnV",
  "key35": "2sQpQCA5YR37kbEZm7Z26AhDuTqhnJT71KznenffCCALCMVpNmjP5hGAnUMWsBzKeMaQgF99YpQbcR9RuCyvLT2t"
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
