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
    "4BTLFdzvH538phkvxFui3Z8x4kjt3XJGageaJrvWiwK37aZNcGNPDw9LKWKaM4bAoWD7JvbYQd8f1k17eXE8CHF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5My1GCapeAUE7w93f4R4zxKDAyRp7RsbAPzsWFBqEdAXznxaTeTPYVTgexEN3DMiP4h9q4t4GiSCNCJmyjoB2wYP",
  "key1": "4yHnP71VRfrj4kouW11rkZgdo4WQ5SgZLy6qvPsuvqEfZdjhy2XgzegdqcyEZKYbXUN5VJocTdxu3Y4cPJZGWBbF",
  "key2": "3UU2aHDsWW123Mo8Uainh2s1v8hn5qMirCAGkYZyptDjPi4BNf25x4ZBzZLDeRdc2Dk5cWeGX3hdUpsKBWn31zhB",
  "key3": "2vZqvW8SKNrJAGj65EW6DQJhG2PVGYK4dBhhCAXUANbN225kgPZmXReezPQUDKwNqrHvf4urqpePxtwB76MPaoZS",
  "key4": "4rbpEicGaiQxE13dGNneV5fpjV6hPnu6PBqjtH4yvjgKqP5dzA5M9u4xgbFN8ebEzUYW7suX6T4iHNv4ifgCNQxQ",
  "key5": "RveyLNVjEU3Qcs4xh1HJpaiHPAgDwkJWGZwQ1GQF2uuyuExLsu9JNKhi7rmQDy87SuVtKNDw1cN5DmQrDJYEyKZ",
  "key6": "5BLeRNRx1RBSevQnD1nFd9nYgv6vaZLNGxBPJVc6DbbjGvJkYrAoawAWCH4t3bz8AVqEKSYzWAXuhEboLvZ13ohi",
  "key7": "4jX6k54ein9B6XZNN5kGnVr2d2LPtfJ4Pt1NTo3hMZhjAxVwT4bYGYq2VeLgrp4raBnATXdCWTZ4J9VuF1WNepeG",
  "key8": "AgABoqDZeyfBCQFufCpEHNZ9dzxfGiXXKE4YbT4g2gNgB8nmESudhW8bPnQEM5k7By24dBsbEoMrJgxvS4ppNac",
  "key9": "4EsnaFfNAnkxy526vs7BLEhsCzq2RAqeeYpsRLqCQrAjW3VYe7rBAZLvHFPeXXVtHb9C2L3ebMSej1qV3PJ7DJuB",
  "key10": "SvEyzk1kjaKemBXq4C2Cu4gCkTFcypm96c5vafbevZ4DWWDpQBnvRxfjcgEUxuf9jzzfqYu54sEAjJAWyhhGkw1",
  "key11": "4qDc3zigvVR6gxCTh4MUs9UkMssMzVY9j8WZBampG3gwvas54Jvd7WTcGhptaKQ2yuKH41SDmWtTfrTUnKnKqrZL",
  "key12": "3FM7Yzgx8bFFKD6zQiB2UQ5CDDRqzYrpKjZ322raUCy8LYAwVzAy925zFcYBmuhNWqNFUKhvJugjjD3UofB6s2F8",
  "key13": "3JwPbPCbffxFbSYV6JKHxFni1CHgfmWSRTTWyx74rMFQULs4pAjeFpNpebYf88frMZ2kRCwXzvgKFb2y4Vzm5w8K",
  "key14": "5ZJnac2zUm6GTdgAKfTEnnNcCUw7EKWLe8xHKF7L9b6qAgKiutu3FvSMt4VrQdY3CjKny8mPuBRhrZR2dHYrGhDp",
  "key15": "4MK3oNGfk8wqb8WEDNTPEjcBUeBvj3xKdoZH6zExUrHM1MePL9pcbpRu3p9YJFdu6G3ALPwmEc3z3Fd9Dx69AK5r",
  "key16": "81NdtqMw1rPvmLhg2eNzdDnbRMGYeVNjfhKCMCE7mCeAwtCucrwQxVsY6vDV1qzw9189hX368ZGSpcjbHJo5Lxw",
  "key17": "3aNPuCGVHFSjsJcP1HXd9aC3XdNWwXvXnu2RV4rk2H2EmKkgSMmk5oMf5CbqjxnQ76UFRUAWJDX4hP4px32Jf8dP",
  "key18": "4UBZT4UKH85ztMLJzjEfyRYDuewd9JUzDdwabawmV2cjE24aueRXrH3BRK9tTJVorY3o1yCdnQo22a94YTVPtmAm",
  "key19": "7FV4KZcqpphAuJGzQQLzzGEhaGb3RNK72H262d8RQ3S1jdpNto1jVWs54gqCzpxDmkD24zeg3yXt38AJS1czB4p",
  "key20": "8miMfehNY23hP1rNr67shkbH7A1qh8g3U4EJeTp3A5E8QSWXkgEGNEnt3PRFiCasCVnnNLZ2NHw5UMQss74ccpe",
  "key21": "43YYohHg5ngYbcjaChKSaHTAFsL3W9ko44jXRyyecMHp5GtKzw7cwpFreyLxx4rG6KvfBBZXZ82F3G6xbUdFjMix",
  "key22": "3QDfUwEH4AHes9LFPpBLYU98pw6Exh8H9h915t9uvjbXhVCsPGiSco5okM2WEfbp5CaAjcMToySjgqoTyqEUdZQ5",
  "key23": "2TkC26v9CxB9PU68cgYcM5TSdVTymbrNzg3EYvvHbTYPVx3WppYt3jdUEyjRCGJ13P7cadx21dzVSLozUrPdatKV",
  "key24": "3PNoMpMjMsiJ9g1bjCQpqDMjXsxfDrVYpcTkdVjzCbyBicMbRFgo4oV5HLBvVwz4duyUZHXGKfbA1ak7w2649PKt",
  "key25": "4wcuG2PMsh3go7DAjSP1bLqAXVqL1kYW3jYBWdgzJRWJAyp5uS5o8cysBhRSRUMjCafR1oNbL4srqKrdw3prK7Y",
  "key26": "3fkjdMJVC1ENrPgykWCfqBCz5X9adLYYcD7TTSd9LUbskUUKeXiS6wktfE4uC5XpGeh8CmPbUjtb2S28iWfjR9vL",
  "key27": "3VXvPFvMH69VbGHcaJQbCbn46mdGFYdW4cbA8VfZnrWrxNk7xHWKQSWDKwjvcds6nDWEQtrtn74zewBBaeutWHSt",
  "key28": "5ZGZmgHNhu1A2HTo2V3K9xFgjFM3hfmermiT4TD9nMEGQsZ4vRWL779SVwJCbvKUk4kJ48zkg8yzfTQtyZxEJt6j",
  "key29": "4JyvFsjoutPS2qBvgCczdmjZFPuJUtaGqRw89L9G6qk5k7fBXZT6Q1QoPDkfTJkJR3sckTorCBSx2eVT2Y4tiGq6",
  "key30": "4zgitMFeiXAjznx4iQ67TToXZaTSyTefh4okWZEunCKr2dExDEVSzc1rQbcQ69KwgbzAoJ188RWJTZUME2Qvdzc3",
  "key31": "4RQtZnHMKKttHVukgahBHVNHk5FZ7QtEgckXU4NALxVjVKNckibMn3ccCYp15ef91xuRpeHqDamRzva43WoH2ZN9",
  "key32": "2qZXyhWPcpN4TzBDQAQiFJY88JW2XBtLjDdwWyJEwQ7NgJDV16W5871bh5TBUmPaU55yBTD7chaPLsY1ZNNEK4ih",
  "key33": "2o7bLTx1WmPdJyR1eP16zhpJHh3zr6V786aTRtbcWwUEDbdGYaRnvrquzJQKLP8Ugtk5uHj9kEupGrmkcekkJ4jX",
  "key34": "427S3Q6UMfQqn5XrXWg7mhFkuirRmgzfdvWQoiTm3CEjbLb5qhMn1Dm6mpHHNmb8v6bh9GHgHbnvXcgMWZr4oXua",
  "key35": "uhSjntSfiD3BKeAWb9i9rWqSaHowuLwmA2poF2m35fofxCJ1SQD7wcbgNTtNV6fLgxBCr6SYccxKY2LNrnG9xMD",
  "key36": "4T4b2pHCP3ugAUD5sP6CBRYumKB8XhaKcxpVRyeyWV8fQGqwjZyHaWcCNo9RufD2pq8DAwYysCx2E6FjHdSvGdKU",
  "key37": "4wQ2daJhPtb5UdSnAPu8mVJGTiN7ASQUMs7KV3sGjMsMtUSY1RgUVjy5QAnBRGobjXWYjcFBquXXnZHc3hHxQHxh",
  "key38": "4LDpRmZVutyfiwxi8eKja7C3XTDebcHjrBXPjvuvMJugKxQDvRQk5oh88sMibZTWJw5vS6kRU23i1wwAqfikFnUz",
  "key39": "59yWBoUXivW2GfGVY7VHc9GSFFzq5CDkKeQuU5PEG3WaXAo7PCk9nX2uW5pmZQsQdG3tH1ovrvyjc45CnUYRcUjS",
  "key40": "3ij2JpmNzXzuycoewNTUFmp1HvUwJTw66gqFrb9abuLms6K9b4zEaWCRzqFNMbW7qEpnqxucPzN5hg7VDJAS2VYr",
  "key41": "4UTayUFtzV9fQ1RPsTZZwJnvhUbKuybzL4vixHx4fhcRy92HjhTGMaJFtM2PqyPecuBXeaUCe3aT5dk8LeTf2q8n",
  "key42": "4jUERE8pJfuGpg3YZLFfHFKdM9GBzWLUZ88y9JqyG3XAXbU1DLPCr4LVptVrwJsm4wDf99DQd8mSsaA5hZr5Ccw3",
  "key43": "2e6PS5rRrJN7a2DngU7t4Wtjuc2Lxm2wpHxiSUcHpAhU6kJNaBxASb3pmofAGZic1cJspoQZo6zRcp9zJqZi2x9Z",
  "key44": "57S8V9TDbcwMK7U7PsYiTzcr8opHsnkDuvYCP1Eh5osFMbAhNBwSxoGVmvHeNko1iDbZFtPUCDvdcN6fryHcLWbh",
  "key45": "5SEz7kZaSEXSiz27V71aPtcKawAHbEbhUZZsoM4e4pdYV4ADS6vqVcpDS4esrFTi1Rv3VJB4puxHNq2M2iiq1L2D",
  "key46": "4FPVymHKUH11nv46GUdtGhktza5V9iJSb64R2cwGVyS2VR2suLbBEwHirr9QJW6S4CydNau474vDRJwLYS5Y1een",
  "key47": "5u7qHgWQagcWoejYQ87QC2hqDH7ur9VoF7MGRPSyULkCU73eYCQ4UMcQiC5XSSSoVetHNfPXmsd3GcgcC4ivSsHs"
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
