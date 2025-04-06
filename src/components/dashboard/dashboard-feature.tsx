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
    "4MyX7VoMJCGXp3bs7jrmFiqajcfd3oPk5hULDEiPNjwWmXwUUp6S9rfQQVCqDkhU2z4eLkcGLMP3cNZM2vwnjcDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XuvpZnLaJvSEJQkpFJN8iGbWPXPSovE2pgdu89BgndLnn4MfgTiiAgD42jqtiRpF11CYiuZuyUxGnw6RpFrEcmm",
  "key1": "2LBVoP3x8CvZeavA5sXUuhZ8oLR7xLy2M6tVRZgm3z6WggYupNJA2PT9WY2ZQbekcCNdTpHhogafQfW3rYT9Gpam",
  "key2": "5t8p2QPFw6UHpGtGKe3GDyzNRxKjkDf692g4LQL7SgTCMMRxX9ofLAWps8qrJNu2QvL5PtLq14vSotZLXhew8SaL",
  "key3": "22FLtbXKYbUNi2ojbNnmtaa4bCBZFPLRwRr366rgTZRrEcBHv444DjtuDzppN14aWPcQMYmVu58jRjbQNVD2bv2j",
  "key4": "2yMqJuf6Jn5KbN5NbjzZcT9BiTt8W9dgWCEh8Qn9xpcHoRNrAFvNUbCgjmicSeA2fDbRt7cxDpq2rfDg4wv7ABex",
  "key5": "7gtYcGn5XCJMjQW9f3cTYZamMmmQs7VaFrg8nxGPar4SDAHUk2Zbahdi6Uaj8CfBqC1z5R4AEy6gviHg6ajscNS",
  "key6": "5zuZT3hBpo88ax7fma1d7tZz8wKe1rv7PRZFMgx13Ai5LTit8ijHTZJBXvAagmz3Xp2jJE3tXfnbc5Ed3AVC3m8C",
  "key7": "3XTN3BgPy48tVJcqAJibrEdk4NwqfsjtHtRKGhSrvTwNSECG1x7sZcAx5tT5Rpr6ppcEXK6Nr5VRtrVKC1p6b3Dj",
  "key8": "59DnMnhmSvz1zYWtRxBJUojJyN92irhWuJPms4eeHgvM8UwZUEXmDAkSq49RoLF6TJV7yW9A7bYRT7YQ5eg7t78o",
  "key9": "gUZRMHQ9QqzdBAuniTwAWWS6hMxcbMM23Z6hsJx5CJVEB46gH7YdCBWXFM2iC7ajzboskbh9gwBtpzTKgF3mqRg",
  "key10": "2cEwJ1PwH6ZZnQStxznkGqSkfgU8seabf1r9JGpaseEitRgVJEiYEMDugfYxH1hfUGoMYFM4Q5p8D2HLyyZqx8gC",
  "key11": "5bpiWxSRKDLd9KnAcNjNGgnQEzNCtWKgbPRobh9QDYCcLCQzjzpqfj13HuVYUxcrcRbk5QiF9bjqKq3xuXfsxo8T",
  "key12": "2WoKKVXLHZCWPsGgQgnu4ZajnegVUi6n4Cry91toQwfY5hE6qXJFR7MjwJwxFxcDVxcpXUm1azpM834yaKzQMBte",
  "key13": "5w9vrxcc7yhuPdyUboLnf5L4asQXKqVFRZGVontDu8wQP1Zq5V5YHV1XE6hpDPBzVyAikkSxPXtpK65u6SLWsASG",
  "key14": "44uGNFh8NMKpUqciCmAWtbife5yFPEHrFUe4YYQcesZmCipwkk7j9z1uJ8bmWPGC4NEru6WUGosAkAdYNDv84r1q",
  "key15": "2xaKbmxx5LMgk3kPybc4cYLrqBzszPPbrBJZhkPyefuFZHazSuiUSgidEhjxVtBtdR7HQhp4aw8Zi37AVGazAeHA",
  "key16": "24AemnhqdfRFKRFiueukK4wnNKbFHPQHvtHRVgq7BCK9NVkT7VuyWbtERhZEz7P9nHo3Sx53YWtGBjCNK9F4hFHv",
  "key17": "CXXuzVkVbTFFJLWkaV5zSuPYdYaYQFxgEpTeRfCxXz7LPUsu5H35nqhFGvZanm39hUyJ74WMjyYm61YjqCz5YNs",
  "key18": "2TkCAsqG32b2uXqX4fYfa7qdHaDCToF1wzmitHJJPMotrVKHisBnTLwbRbkWi8h9tqpGrZcdVz9avCcUhytx6Ug",
  "key19": "fX1ju3DTKDdhhBan2DQGboZmn7eLhFFuxwnyhToQr6RtisZGjzH4oSqo5DjvaXNKp4a3SgMxpjL2qytpghWPwzt",
  "key20": "5gowwBGjLae9e3EH4UPCmzUxCMnttm11UvNNoFbXoAZ32oCDoJhjy4Mf6JhzsSxS3mTkZu6McJXanw5w4VtjmkbS",
  "key21": "5zAJ12nMkBcphxt1qdsRt78vGQ8mDm3vfc7tvefPjZGMnvefV7FZK9pqCtiVSUP2TJb6gJas7gRQ7bjFc6Gr8gYJ",
  "key22": "5Q2JkQpzCYXpPFvR88teRKssjZy8mfR1ubt3S5jbmYoXkFCBfDK8G3gsSoLrkzDPrP6iuxcnS6ovGBnQ7pC2c2fS",
  "key23": "3R5T1CDxpobyvG93DeNH8BLqKV5Wx5Fy8yEr5hhbZHrczuygGme9DqVDk1gP17roZPor2uTKNM8UjWq3i7XYAAoP",
  "key24": "3rZDfGcSvWHta6evLtecc2tzRNntMhz5f3mz3eAYkWXwC9HHPRu8aa4fJc2VUCyh5atQz9zyLD5YfRuGXWTJvGZ",
  "key25": "2hhHduuhhPDFeb77E5LfmoEGKWbNobZy1GS9HCzRoZqAAAU1AKBrXVhtzJmbT8dizfYYvVQH2ViDvTqYfyz1841A",
  "key26": "3LnrTu98NsPfKCccjKVGG7xPXiKanN26h6U1NaV6ziD9Y3G4871pkezVkqApL44dfYfQQYn5zrMutKxLrj8Jxz1j",
  "key27": "3sLEHSWLJ31VRehxnntss5Crtaa1NfWNiwpcyfciux4xaUv5Wavj5UG6iGc4HxKYS4YSR8oRQButK1eAuRkkDSxY",
  "key28": "3JXQ6PYzQTNkTzXVEJGSNrrke3NjhprvY8MNR2JPdPu7TV2gVoUjoLecdN6fFCyskxRHh11aEwLMECT4ujtxxsJD",
  "key29": "621udDDn3wwiaFv8bT99vi2N21F74Evp9W2fnZgUCQPNHXbUwCtFbnj5QU9BFZiCCjXQ2LuAkR1eEqdUe3booFC2",
  "key30": "sNYraMyed9bURHC4CGAATwzSCXz9k56caai3F4mDffhjcrCMd8j5JpViyRM3kvfQQDRbfTkCgfiWcxsyADgEQRB",
  "key31": "2MCD8Uo4kCqqF6iGdf3EqKK6dbKNP9UQJbvyqhw9ZnMLDEQUmQk1r9FnQdbKN8VrL6i8xZ7W4SiWsmrd8dqDnTH5",
  "key32": "4jDHi9FJceLVU32wahPmq4gHJKdX444m6p18watshVSYgHANNTBpYvC4rKF1ZGBR18DEYD2yEH9RQZXwg8m9YyfG",
  "key33": "aFLPgoAbaN1RyL2NTEDvcpbgS5LwdQogjrkmVHJPUGXEuBReHGW1d5b6UdHrweJTbXsCAq3FVNL3HPL2Zc66oqN",
  "key34": "5LM2V1PZQUshRcTgzS6y6TQ6fSTBzhJ3k88xADhENXZhEZgDCwUb7mRtH8ZGzm7v4Jagmk3Z1MSCUdGBLsJy4mK7",
  "key35": "5VX6A7ccoYjUrfXS9i5CvC96ZSZ9EBU8qWtdW75YNe9NbQobPFSEnRjQSC9biM3e2DB6ti8Gncr4hMxJBrKWRzt6",
  "key36": "4oFYDb6dYxvzaYkYiX3i4pUsPnn12cuKGpzNntfcUbpovEiToVXZpZiZwSb777e2A8dD5zuSiuAvgimWhV4do4yN",
  "key37": "EWDNfjAH9K6Yjv5UKJPeUC42Zvv2B8iQ7JWfMgSnrNcX96kU6PGeEMgVfVffPLqdebNP44vmm1APUF4hDrN4oLA"
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
