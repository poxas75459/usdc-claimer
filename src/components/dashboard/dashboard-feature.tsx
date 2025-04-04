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
    "2dduuYifoJQG5d5gKpHmw366WFTRcwcLixsbAHniJxfu35Zk9wmewwqagYYK7sv5BTvEPW9vMTgDXRX4sKM19Vmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "293oVGq8zGgk4ZB2fCTbNxbjJQL5KrdkxET1BopvxUxj1zc2ARsM44fRzn6z7T1m8zAgHVjozA2dA1EwxP3m2Zr6",
  "key1": "tkmf1HeLqBTDvSdquJAizxY5ZSiQL3MGee2evfMPM1pyeWcpvryWnUy7wDdp2CM5wAbCjRUXTGhxm4YVWEgP9BV",
  "key2": "2BgKfubLpERg4DCTf7xjvfraL8nti5BGwLicXN9SFPViWD44Tvdg1fxt8sFXqMepx8bmqaX7xBkdARB98f4ksA7V",
  "key3": "2WjH32wAcpoKSmLKiWsB6dM4PnuBsg784C9Dfkxe6HPisJaqnMaUNFBLP1SLdpMw8uavCT3YPwBLUTv7pQpagfXX",
  "key4": "3Uc1KeeLTXjsM3vVeBx1iSUbFrByArphFGeVh8NwWJYzVc9kEhL5DCehYwvkG9cTCdFxyFuEdwBDLvtrJtRBbUEm",
  "key5": "3bF2cfcB8tycuAmBWzNMMz21gibHcyd3wjbN97CZbb8xn6yEGfZFCgzFUViyjJbQJrfQiHKKPDZ1AuNFVeUbMvDD",
  "key6": "Si3c1AowAt7BWYtu3bzmSkiyqT4sBG4Rpa3MgYjhbQZJy3f8Sayfu48Y2LUwvUT5G6HaKAv1vkzrjpxBkGVRCAc",
  "key7": "2rfev63gBhYpN3P2cWSLNcVMh7WeNESyh4sS6sfr2TvyXJaHYrwSXvqpeYRsnr8nKZiiN27SjRcBPEG1M6e9gGQL",
  "key8": "45ZE3FMNZVWqwTSiF8hhyf3ApZa8jsxN2PoKfDhuBLRNdLnQr8exemKtzFTjNpon1FtjcZ99pSM6EHRL2XVRk63g",
  "key9": "kJdrqrgGTyFR4zduaL8HqppBmVdH37mYKRiYTGAF481T3BgY9TJGpPaxGsoLNwJa8TNmPwnqYT9exKvXDahxG6B",
  "key10": "676GzmB9CAmi4KqUabG3LF2akQ3rocBrrVRN76WxZKRE3ZFLiV3JYT3RBoRtR6Xnj2W1BUR8kVZAg8rNzDnH7Dr1",
  "key11": "f92qVVhzsvNnk3SqdHtTfHZnk3AEtPztjktQhz8cGndy7K7A88jBqmDwFe3UDw4CYzyWGGasmGRYxP2qm1iiUjX",
  "key12": "65FzCF62njibWWAY3C7kE7XLQvSSuJc5Drhq1hUMckzBt4vY2dAttbkwbMUr2Jb6QNzS1F6K2UhA1oYe1Wb96Eqa",
  "key13": "3UzQV87Ui3szvBbRnFV7uQfLFcJAN9vUtt45bdVNdFEHiTRxcgRMnkNR1jaWZaxkRoSKRyZBfhhFTvoVftcg3siX",
  "key14": "3fpoHgnuiyFjnJPX2Rv2Cdjucja9tEARypAoCmiBViZCSqE5mAwKtWGfeSPohF7xtVA7PVvf5nzd77DcT5h4j8L1",
  "key15": "4kM6NbdigeRiX7TUyYFkgUHRtvgK8bnoNGitQpbuhzbJzCcCoLVe7H4kVkxgGCiUa9gEwhBvGAqyHi2ugZoagBDk",
  "key16": "fZmxHX9Feokofs9bAve8VHzFqtPWnFjyFwg8ULeFeTkHW45SocPsdpBbPHJcz2UfCLkggGmtY6ipV6gyU8QdYpv",
  "key17": "2kX2x26LfLJU3BZUZ5erwGSSZeyA64t6LdkSuxKje279hxe7LWQuGASXVbcG86Ttw7TZABjNSFFqHG8hyQ8hF4vg",
  "key18": "5YofPAJtniayJNkHcrXBnKL2LGRFeJPFDcTDgLL2h7p2mrH2yLgwFRABgBRFNybXsQoaohRhpEBDjPpQut3LXU8B",
  "key19": "5A9H6EkDmCMZPKZMgnTtj36LJAtvBjhTCcNiKreaEr1cQ8zxh5oRJmpjW9zmqFqf9FwTJNLmvEo2nAeTdRyGnJbS",
  "key20": "399Mv7zfuRWF9C2ZbhEaNAdPjNzqRjDaiGn1xTvr6RqnhAZx65qeSQBEqk2csrGYUhn9Px1zfTKRpMeyZx1TkbgW",
  "key21": "3spiFQ4Bgyma9NdyyjsNUjfrkA9VePUb3RXcf6awhMu62hJpjBveh1TdrmUJD6nVoheBeiXa9eouLgP7Yqnk65uc",
  "key22": "5vjMgMitu6QHXAR61U8XcNJs6vRUwxKu4VyaWqfQNjYmnxvfnrayTcvGW6vpkpyEefBBNhCyAJVpNMSG35WdH6RM",
  "key23": "3mGLnGs86xWgEwPARsqj1X5SHqF6p4GTx4Sn9yc4gfVokxLBi6rJ7RTyikgbTwd2vpz2dvFbC7MJ2vQSNSy4YQeD",
  "key24": "6kie7R2dzST5K9EC65A4BHgkafaQXhMoPeTKXVFPMzYHK5MCoDgVin1HYWmfP5JRUouc4s4rNqJ2yAcEXtU7qVo",
  "key25": "34Gon7fqZGS54faHAQwBU6RyoP7YKZNZqJ1JPvPpYoTS8hCUDwZHjeVmoU5QxUgxKMtUKtkFx3jaX1joJSho2cwF",
  "key26": "42gYk2aRUa5C8WiKWCdLeTqdicMG7oRonwRoXbCFBUhDAEwiE6X849A1bp3GYzkaKbv9XzgyPRFA1bRHhQwQ8rt",
  "key27": "YboamH5q9qJQGTRB7rHq9eySLa7usKhbFwUtHPECsec398B53jtPak8M88Qnh652v71SqFE7paTAgN3yEgDL24n",
  "key28": "3E8pCYCAgYfFzqdE24teBNjsKf7DN79rrCkiGdwbEsDT1cruuxrDmMENovuH5iebHy56VHZpUutoM2TquQNqhcFX",
  "key29": "MpYv9QuS5ALAhXKBfy5bu9u4UESZEtLxt9KwYertJgYZm1fRnwpEPrYYdx9PLatj1TyqVq4CMb8qJgPF1etyqbs",
  "key30": "2GL1PPb4sDL9WzNfWn7mMhswYN1ZJ864su5yzUKnCFnqkKegaYtXzNFAXDYDwQhMQbive8qhbMkNmSYW7uARbrfP",
  "key31": "bWUGJGCyu5n6gm8eoGxHfSygfe8qKFXUkCwtmbNVYjUGUEU5mAWMAHv7gnnfVzccSsfXP53yY2SeFC4ib4333pR",
  "key32": "21EZATCbXE3oJ1bvLP95r2Fvypk3iQhMGw8CMvBGzJ8WfpbVXumFGPTvZBPqsVQog1JGc3XmKxATVrGr2iGUVoba",
  "key33": "14c5NBppcKgrTUBTBGYdxATDj3sxr2Z5poFPtvu2GJjCUuJB6FMHApHcQdSjGdjHUU6HfarRtn7v9326vAfZhSA",
  "key34": "3Yr9dFWJR6tgWVQgjWU8wsZ2UU2qFXAe3syhX4SqGoZSVMMuFJaXDNUMW4BMKg3Agqqa9TXxFcVBopRUaS5SXDC6",
  "key35": "3wLNWxp9TKi26B5tt8kN6qMXb9pEjCxVLDrCDz981XiWa3RaNrFY9cJQ5gNQQQpcaV3cPTjepzV3UqX5wQNPCvov",
  "key36": "2aRSGkjFUrimqxZDpMmEydHmgvBTQ8ucgAogKJNrHnZVRKNgyzN5HBx4rmjTupPJku6E8QsRAgAb8rAetEbuTSv7",
  "key37": "3PmVSqZvCh8uFoZHY18Dd1pGeZdZUyu77w8V7pQy1aPDqb6eED5MgGUur6jQHAkSXyEorxnPoRz8jAqcyi9kSdfg",
  "key38": "4x3jQPbaSC7BrsCCehH5nT9YkFDxtYgYBPZVPNGueUWkWEjMqfvaanKZPw3uZzVX685BM8xPuFM6JYRjYWNmeJZ3",
  "key39": "4BH13yqNeLx8K4ZBVvb7E6H2SX8h6u5Pe9gZ6CdqVj1PG1t21Mp9WSxPhHciyTG5swy5K571qc3Xytw1zqRms3zY",
  "key40": "MyCCDV9MCjxEQTxp5tzUyMRZnbjZB3imptmpnkjUg2bUF2yA8BLzw6crjmq2Epd3MLLGA3CPuFjR5rGjojEiEpr"
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
