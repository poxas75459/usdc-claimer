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
    "3uwKUN7PBcqxKiJogntCLcBwNEFqUmR8CxXNVVDrRbAux6DoDDvR6Ei7KZVV6NiaWG3M67satXLcymR5jGrB3age"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MQUR2v8tVe42FwVQbKtdcz8h2og9ufPQd7q7ewQkeKoDa9J9FXito9bFcdKBErwWkuxdWmn3aZEC6nfYxU3HYFL",
  "key1": "5MgVXGJEZZLkimCGQW3wv5XhZ5pvPcUT41fnS8uczM2mEeYeh13i9dYqUPGFCFkaUjzhUPftQnu6TM4TQddHt3vS",
  "key2": "2zJXufMsX3xEh4rNh2pEkhCVzHC2rycFW8TUH3DppRNfhiCfFPZ4u2WgBLxu6zeuzWJFbytwzDWZDf4gvSKuKypJ",
  "key3": "2ykEzGvjtEg1h8KhBNNjmyVsoCtk1n1JBkbv6XjdJwqaTM9cad6gFohCAyEvpz7TXxvBmiMCXSSNJcJWBkSrg9Gk",
  "key4": "4TfSW1mMT8H2isxh2Bzk1KL1cXRcZJwbcEPWKhmw7gnuUWeKf81jiiPghTREEyF1qK7eUkSxsieqiixKxWdqB4KF",
  "key5": "63vjnd4dHtXYtqcBVdKsSt5JcBXUwTHVBnCjboPc3A5UHCxHdvE9SLMicyq4tsxD44pAHozq8mW3KLjZKfY1uw5E",
  "key6": "5SkvdbHRuBpeSxhjkfx41QiziWY1gKVvvQxa359YWDm1jHFZQ3Y4xTjRDFbAcwCYHrRsTogbGiNZGi2P8Lg44T2K",
  "key7": "36mTm54LqChspCxNTMZsxWtBQcQ87BMbBkeUen1gW5iByAYFVtPnCqeyAZ5DBXsQnFpAFA1aaFk7rAoVdGxxLMRL",
  "key8": "4ou1YfKmvjDMnzvdHdnp9UCp5vMBpSgdwSBVtX3zWyDTRqAVgXLgNbkoprwK1HNfrKnXek2qL6sG3qvxLzwMrfkz",
  "key9": "b2sprRuoo6zgqRCGCab5L292CGTzirYoc1HcfyVeNjfKcSUca6FCtQzrh9w3TrUvX2vqjhwhuftsofbUofAL9i7",
  "key10": "TpWYAdvc5CpWeb3rDwZGxnsFYDw8THmnG84ztaEDQyVdm1ymUB3x3HCb6t4TEerWF9pdsAwZgzmGKCvpDFC9wqy",
  "key11": "3BKNtxo4zk5e8BnP8P1eJU95sQGukG4qPAX6wFXXqWdzx6wvKfuHEDhhCi4bC1ir1cJ2rN3rKVbZj4uYdg1D6tGt",
  "key12": "4effTuEzxZWeruUxW69TXa8eyAGDfgdoYsnNe6EgwG5AQmQajiWxgkf1FaQ5ASg2Ab3Kj7pBzqydGVyHLfCPNDde",
  "key13": "WiNvZgQNVHDANHpz14Rhc7Vgh8toN6ULPSkY4oRikNwk8WrBizc3LyCbHdoDmSkT4AVWuDDHpNLFsgZS9cmp7ee",
  "key14": "2cCKNnmpYdqqodqz3u8mLVAnn9szByXiPaF6wVKPyBN92iEp3eBr4n7ZsQfD3d7g3ivBNVCfSDk5kFhg4Sumkp5F",
  "key15": "61Z8oLRZYMfBGXv2ergxgjJUpufRbQmCWeGrG7dAujuq7TKmM3RtQjECyxvjbJUvHfAWpTSuAWaNhCCmkhrSYVDf",
  "key16": "3W1pcLxDqmkhRyUTvLm2BWQP6JfrspNX5Z2fC6f9FYy68SPRZ5pAmXy9tfTVVMpxr7yagGvpEbChsiPFP9hfrQMg",
  "key17": "3dy6Xnc3cQoApn5aRJv8dof8wSU4eaNMad9T6QgmikkHSnX2cKt2ubtSSQKQyqg2kvRnhTYB8Lj8ttmCZMiZxqiu",
  "key18": "4ZGurnksWFSPHCBGwyYGsy9s5QvCCcieb69wX84NQi2Trg1xiSxVhR27U3xsUQk5y635DcNNCZydqgE4nTpg1mzY",
  "key19": "3c2cYzMxBEQ6w5D4CJrGxYMMi9sEh999GeSFBUMGcgiD43DPsZogagJGU9eYzmhmU2YTbX9jsNCREsZki1V9z8LP",
  "key20": "65YEXaPdttw9xENVoCc1NEwzBWkvXjcxLhGNSFWFi6V5FVHGCcYM4PitmYdavs9kA7pspeuCtfBgzLdZJmy8fzYP",
  "key21": "aMn6EY1iaLqHT5jKYmURZracAi8FDD7bVLu3DHrUsKicnikkmtWSWDcnkqYGUDvCvCKowT1MbpMddDSfzTnsSYm",
  "key22": "WbirBS448PbMRTyN3CyPNs7C28GRBWi2P3hMXLR3YztHksmbdjjiBh64WWvXoQMXYXrtfHbeh8K6abGnoqkFNyt",
  "key23": "4H3Ka9opeiqb3wxUCss1teWz7odiFtrgnuo9wTreaWN5Rao9aHaJzY2BWG35Jniq787xsLmVHhHTwsv7zxfuLzVK",
  "key24": "33TZkp6JKfBaiFpysRsUV1aYsJVoXfZryNqHdEHwUxpGUaNPa1NYa4kL1Mhx7gC5F6q8TBjBd59ncTL6AfU7W7ft",
  "key25": "5cSyrAwTFLPUFpY7AQKggzekPu6TXscTAM2JbouQdnd77LGHvGDWCWz2FKBT565FhFR1mTDCroFaLY1rsfW1x2aJ",
  "key26": "3RmR6qh1x6JJJVsP1ENevMV3MAPR1CpmWsQFdwQmWeGHj4js2Q4wiQuTnLVW4Gp8vAw2DLzWcf68k2sSMi8QqikE",
  "key27": "nEK4WBmF8MkxohCcWVkgfE7EdgYyznvnn8nL7GJLAJmMEYwBSupxDSNR4KtA79idsPWMQReQRTEaVzNMjdPKQZi",
  "key28": "2BFuakC9CSvzzLN4AAZsTGKcLn6pps5qFeE3YNPaRazXDw7MxvwrdEqnRpHCqQWQTnYMhGA1rQMjwy3jMC8bfHMj",
  "key29": "jFJYVCZ6vkMz25AyNQEUuJPDPWani9FTwuHPWJGsfzJCj1dXYyGWhrcbV93R5UaFPUP2YwxVVVSsRAA23VrwosD",
  "key30": "3a6mA7R75s5zG8eptM3ZJXgafA7tnqKL4LjBY9nm4ceZR7czaSZhY3Xc7yj167vU7z2aVrXQzhKx88AutEn7fjSX",
  "key31": "5aUYhYxXt78nDnQKkJTT6Hsp9VhGQtJ8VNU44EUHsiYfZKsN8T9dw4WMmRu4pzuCf38o59HSF39niFuRhPgYbhhE"
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
