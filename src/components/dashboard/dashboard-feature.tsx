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
    "5VHF7q8E9GveDQmRa365tWsu4AcBtKPWiaL7aj3dSe73wgtYe8vEGaJEvE7B4pUsnCsDxc2yUbuGbq3aaMNYC8GM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AsarSHtQKaqi76U6EbWBL7SDNRxh19oBPjNKoedDB1xXG6GfDkacVz9h3s5Mk9u3e7vyACATRgAhpTCE7aTUMBu",
  "key1": "2Xg1Y4R8tX2wu6k7oQ8wkUmGnrnepftAFk3hvshbY8MsuBFzfostD3rvFW2Fn3V8ydTj6wx2WWjxHr76kqbMBA8V",
  "key2": "5mPNbNX8ZMwVpM9zTM2YsWnqmTzmDf8xD3haGQVfTXEQiww9QJxZdZH7jMCyyVstTvQXRJBuwmXJVszCExUrSWNd",
  "key3": "42mUyWqbEB1hnVAWCKRvjaHx524nQneSDpfaW8ymoiXF5dFB5u2R11RmUnLYHYePkUNraSFbxPsQ3TGYi5VKBJpC",
  "key4": "3N4s47WzMnzKNWCvbc4jsHHTBBTy4SSin2hkWgcEHxH8uj22YqVhnHohhTE8mrYJw1PMJCadh4KLYzMiQEGpXZn5",
  "key5": "5BQBifwcoBRUXEhATCR2QzCtX7p5p3xo1k5Lz91VZQ7FPArz5AG7zJUsySopUcXrQhZjHuajP2K5oVYfQ5h3m3hU",
  "key6": "2crQ94sV2an5XrDU8TTuLrrWd8XnWAgBSBniCHZND87S27os54WjJ1EEz8yWyRPHYtnDzXqNuWVPUVY3cdEehvgR",
  "key7": "4fnZvtmSAsogkRJRSZiQTpTaenzP9mz9qfZou3r5Fg6gLT2okqb3Ri4wgReipmgfyKXGDpzFUVU4JtcC1fMdH5Db",
  "key8": "29K2hKQbQyZr42QdYVovK3NYXQ5Vis4DjKHxZkWmYT4g3zJ7dgAheF2qdLS6YEtVbKqhNksJzt1se5vMxQFALyEH",
  "key9": "5oCiLaVAYWT5QpMzjBQbfLgHih4RVa5k4hGtSwvUDU8qrgimLq2XPUXcucxFwRyu3kXgzxhmcf464emciSUSsBQt",
  "key10": "3zpTfKH2YKg5KQ5vL7AuCuVxgHzcYQyHJ5pZeuy3yjmwHnW1htgjaHVXpGtPi8URq3XJ5giUXqWuVkj8ht7iaxe2",
  "key11": "4SiDgTrhpJEJNnzKPT6P7uH3WoiuTgE2bPbPD6gLdW6pKsL2fQy7XSAMM39zsp2QDaSHB1CYPWw3kvxZyhVYAqDD",
  "key12": "3AJQ9rssMcix4qXjnwNwtVnitG54oGL1MYSMCah6TfexdoSwkgaYu8k7W7aL3CWPRsjFJyoMasmn5ZEAsb6mUw4d",
  "key13": "485runzFxURgrAUUGC9xw9RmEdfGJeKMtMgfvshnhsGmWMJowZPCfXBxTEF5TPfpTw24u8vxgPAgQcRH6h7S3kLH",
  "key14": "4T7KuBpptCz94PhkGQY9xhSKzqGdtCGFR9YKFr8C84opjcPqqJbPHf8FVw3HuCnRWGYbJCgRp3wCM7zrHa3Kz9vw",
  "key15": "3hs6WYEyHmaoW5w8PAwNm9pSaDxe93Gh5EUpaqSz8NzTKZ5fL5FhJW3TrCFQfbYzerXNkThVdtTxeb8q76kPC2fd",
  "key16": "4muLacqtxDgeaZGRcBtgD2kuCMjQqdTq9i3Li9gqV5bkDuRQsiSSTqQ4wmSi5aZV3QyFayDc5SGLqsHu4McYmaQb",
  "key17": "4iMNnDw6HqQWoCo9jbNAxxP4oozcn4WjRf1aDVCF1i5iHqfWaHeVVZb7XNAzSDrK93CR8Ank7ncFGEvs1WHzYFpy",
  "key18": "469V47jsrNx4w6ywxCCamcctv2pX9goK3Zsjbr8ebY4yDyXUQXnSsi5dZjTiY2cXGdbWCRb63ZMcwsELRYcYHXa",
  "key19": "2318Yco4E8Hq7RaSexbDpjoaAahwwu1Zv5sxtm8DaRAtk6HMcdttLb9wAwDQH3eZLzGLBmCV5DHof2JxwGToiy61",
  "key20": "5fJEXrRZKd3SqXiRnQTBgHkf5y7SG6VShvB67WnjAejUxqBjPLWuFdXPH93jdEFw1V2Wv4d7uMBnsf1k5vizwgA7",
  "key21": "5xigfnZepsqu8NZo8zUhnnM1B3TABJJNimpY55DxL1d63R6oVMgEZqNMZRgzmMufhP7hpYwEq9h8YGmboWc4SuLv",
  "key22": "8BiQgAZbwmV22z5xeDwfZCsoaU4Lpgx8XsP57fhdq9h9aLK5cmLZyPgWZY2KfFxFNKmTdAi3MVmq52nQj4LCZXG",
  "key23": "cc2EVgbaxvDCDXYAiiLRjDBRDuahZR8ikzD67rPbRmiW3JD9S4xrfTjZzu5mkK1VYh6BNmuDc48W1coSRHXfX6N",
  "key24": "52dnPPgHwqFFiorfiKLHenSGpLbNVzBewoLCKp7SnrBm1wFoFc7bAL18sR7jfiY4u7PkJwfAtZEz7wAkYjfSjW9f",
  "key25": "5FCMbDvWB5PmxVwMHMgu39rnPvmWf33DsqHMq8TtM2PhtbgfNrGQJkyaeWdmrCbJtHBrDL2gM4jjtx9z4HaJJLUa",
  "key26": "ByZGZ19GhkwMbidKveeFSBTB7oCVyM9NwP5hybHJ2YLy1ykr2FfJ8u8i3czV218fuwzMp5PXcAr3bm5rfRMk9Zr",
  "key27": "49Y3XP4krMkR9EFeexgxPuVq3V3zfztuWfCWffYoBH5kj97sLkgNsXA6qqqPriZV35Fip6xbL7vHmvjjkCf4fRHt",
  "key28": "4RUvqSrrmGrQCQQXUHh7N6GCNDbzras3mEd4Mi8vyhpgbPtPpXUUWQvE1Rg6Df1C2pmufgcuib3bspoqDfzSDdPJ",
  "key29": "23RUADoZtT2QpmUzeintrgqoAApkhHLz7YpwEPxLJRaNnudpyfDKMfd2YstmYKrkZyDVdQR6cwtCZSLzMUc4C7iA",
  "key30": "6KyrufwDJVSSJFAbXLqaVH5oJ2Fm1HRSY69qsa8CuuiuejdoVti8SeJEfG27Nhgn2De6wZZg8geGiMghyYfjaQT",
  "key31": "2xA3nZogTLcQdR1Pukw4at2e4yajoMP4nkxVQkKy3jyoHvXvuZBcEVxgLAyBiH8KJMXYkrw4buMt7syViS4JnUdM",
  "key32": "2pTZC4gQibQyZGChUvabE3QkmADwY7p6Epw1bEgA7hnpuZ7kR2uVpByfDv6A5Efe2p38yYVt9Dn136RcdfoTxjRB",
  "key33": "4ZWHnqtxY3TQqMFXit6rpRh9YsLEg6sT1pCiqPegfmYVpatxiiqatEci1SGKTpLJpE3zM6p75pF6osWVubeRLXBG",
  "key34": "4inLaGkcqKKzTAhRCNKsd19VZP8Lq7nk5T9pFZjowH5PwuXjEBjjnZK65RWxRxxKkjFEbfojxmRJWcpB6y491v6o",
  "key35": "5U4bWqhFigA7EKtEBM2XYh6s4Ub8FhStGios4YEyoQEoq8kWMBLc2WmVrdSQEFiE8w1RVmPZWYpPJWuK74GEXZDr",
  "key36": "HG2FncHoRyR47W99Eoeb8k7hkBi5g1B1W5M6WDukDfqxVeZmr8Nnp7SoxP3JunWZu5MgChT1JATTXEfPhnA4C8S",
  "key37": "4efyr2dsfF6SBG2fa1X3iZ44iL1HvHozCVMqrtPNo4yWK6QRYQa9165Bb3efv9B61x1sEGZivvHgbuGFGFBL6kkq",
  "key38": "4QRc3ydHrSFSvnMa3sTXse5eRQd7uED8vRdi6JxecwkM7pM996EfTAMNTkBVxsMNCXxqgPT5ReQWsCNrdrrGqKdF",
  "key39": "3FjckquVDe9V8sFppof97qdFSrX2SjmdSXja7cpVAAEoyGfogH1Sjn4f7qJT5TQsHyE24uuxt1nfLL6mfxgaqbeN",
  "key40": "5ifp9h4fMWLpAy1NF8T58sFWGf1tjv2tuKyytKLs5aT8UANRjcKd9ADLHejgauM8ki28A7Q8cbajELLEdJuDc5pP"
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
