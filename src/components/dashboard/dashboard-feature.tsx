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
    "3548PA757tB5a5ikVQ8wJdPJyjKsPf9RHXDe9GZfP2Z9f5yyGdaEAjvuutoDibJXdegJ7PDALHFD8vsrC5CLfk6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KWtpjyrBqyMtYe9CMxhDRAejG2JoCmatW4MrBdNSF6oehqE8djP1TQwDncTANNDfa3rWysg3gBcX8tR4Cz4AGfb",
  "key1": "qamxL86CNxL8HaV2co3MecPKzzHuLNfmEKnqAPN1QscJRPXgkanhqnXECQLrGbkaVto3JDnc8ZUpH9W4kYMzWc5",
  "key2": "9SC3QaYYpakSCqfapgFnnW8arMe6bzzWKaTTBr1nvmLqWM5dbnW3SV5dLn9npijdso9Zn2WTGNXTxiExqm34esE",
  "key3": "4dL45UgGfCdQKLL2XEuPxMEcxR7vHQm7aEwdU5JXWX6FxrnuZWno86ZkEitw6qoL4FtLrgYyYdt8sEUedpRhh9Pq",
  "key4": "3NkEDfMJjraH8jNzoQYBK29B3Bbzuw2XSs9CPzzCq8xshteQNU72AhBGhFLH7cbw1327ZujVALP1bgsTcfvfpHCv",
  "key5": "2Bh4b56rwaCDevGSEjxPuNrAVAkiXGWU6VF4WLsfrzGEBwb8pqLXdktFH7vrW9D12PQ3CXcLNDqmDb3ueb1offeu",
  "key6": "5y2qfnbz95z9wnxf5DVzpvzjsC5EGgTVhRuV7kFhgAeH6zv7fhrrinj6bi3yTSGtenewEn5AdyYtwahe5ELEn9zC",
  "key7": "krEvAidYtHchtMmR5Tp9BFvWc6o5t5pymXrcaTDj3d8RXMLJJ9U14Qu5wZa6iVDhYsepkwQguDD6eUNYWoC2s7Q",
  "key8": "4TwyfgESxzVn7UVY6erNRhJFnE9dhJvWCEV77WsakHbaBZFzFhBHFfXJ4HEeqf1Xo38SeQKgRvo5YSF2AHJHXnWn",
  "key9": "4c65PRF4dkpaMMAwmEWPTSGURWXRMixTRjkQhuPqkGhmzwD1iojHptXVvCzoWtTdu1f8McqzWmngsUGJfvM6gzen",
  "key10": "Zuypk9jJAfszx3m5U7TMKYJYXXZTpq5opwg4aTdWPjZ69HZ3pVW4dpQ3u2jqVELc4ECA3AHoiCrLddN6GyFh46g",
  "key11": "23BcSGn6fDH8u95igEViXktRHYFBh1r7KJhe97xBRTYGw2XvbFJY7bkX2UxKUbrPNszQeqhkRjrGJUPQ8ZQJTkQr",
  "key12": "CkUVbopvrxXZCitbE7d7qHgM1KuUVftx4P9umyBeAdP1sr6QFUWuut77oHL1gZaYv8RwTMMvuRuU5jqeiwYAd7d",
  "key13": "4StPhUak3m33Dm1KVn3TNHA1pJdFY2c6jisgZvtFupzfAMvVqEpwciqRGXSMjp48kNAt6ytBrhy2gDzuFKKYQPDT",
  "key14": "4Yn3MirZU8HiBN4fKoZr3nHgjBNofheFrvdXvg4eNctP8rnxcEGvrABUsqLkx9Fb67JGzW2niDY5ZRT7w5svkz3r",
  "key15": "5qHMge9kCp14ioGQQGcnbtrKrthQ2c63unWQm9GK1NHDWUpD8WC8JCQd1CpPxtDND3b4L8cuthssh4kTCP3Jzmjx",
  "key16": "gMMA2qaYS57iU6o2nvJgdBXZ2uVSCD3aBa7XS1z3z4kWb4mpXesvohRBdyyuPnqJvCThfBVK5w8XubNKp2tSZnE",
  "key17": "3nU7Zja9yvBUJSMBAyRdCrrTgFbnsDGCtzERgmVfCnG8Z6axkHcYoKk7T1B4kNT7qvKYxb64Vtui2UiY4DdTHgGb",
  "key18": "4seYXvXZHdvne9UvRHEy3PY9Cyiyqh5hhRi6pHsvSmUWmqm5Da3r8cxvzB35UfSfLidTKCgmCN7fLezwsBgbKj73",
  "key19": "5cKAjjHEjms4MkxcGQkTPbjdiXPD7JqDa7Bm4ZgqWrwyjckvMt2JKSfDdGbMWapkrtFTaw9WXBZV9ddRECZ4XtG6",
  "key20": "E3dBX56P3v6n36aNwY2o7z9XyAgiLX7EAdEFsBG9bRos8i74K2oUYzwEgZFyNs7fFtZZeMVwwEGp1JnBU3pLfEQ",
  "key21": "2gJdYEFyJV2hs4WX5SNTLDGMPwWsr7hrfZwtQ7E88Dt1P1HJURP4fvSYoVbSuJYgj6cJbHNDbSEsVZWSXrejGnBB",
  "key22": "2oxQbT7y7BUFWHcqbHgDjyXZU226zBtXfqBm8nhPSWBmmQqQ15UCNtvxKUHMBZfA5ZHCAYsHieSjnDv5hkmcdoWe",
  "key23": "5J6j2RGZRaoPDf3aKkJQC82Dpdy68Hca3MPE6LACyAAan1XeMvbZJ8bsKbr5b7bwiNmbx7QW7sVeUVwA6NmaMVhD",
  "key24": "27XygCwsFSSMzuvqsyjX83Lj8VkS1yfwRsV7bDLCgwqWqQXmbMfxq6cHs3VUzttKP913nHybCxExL1sdVEDtozan",
  "key25": "4AxtrugLZTpuVE5mLtGzTCzm8711mruF54nJkSJb3xnbf5yE6ddaTP2ZoxBbD3K8yX6vTMB72mXrJnbvZaBhwS5p",
  "key26": "5DumuMpPGXtSZXRtfxuWMVUFyehtzCzJxdp3SZf66W9JdgLoZZAVdePNQcnRv78WNG83oB3xBZP2j2BWHD2xtt5g",
  "key27": "3c9xcqVXh4Qh2jmcC1GZwRa9QSGLVetSJiF2NS3W28QrVn49AtifA3WCpPFMkhA85nEEjnMR555w3n12sG83Nsbs",
  "key28": "ZWaebgEM3gY78RCb73ZHFJaaHw7gCCzZAP5oc4RGbGwvky1MN2NW8k5m3TQyPNeAWLVRmiDzZUeciYkCch1DdRA",
  "key29": "4Qikb8eAc6mKfX6pGr1GW1HVmGFpnxLNTJUhxSkPB5ygk6E3Xdr3BaPr4ii4mRx2W18yDjbkeWNBgGLUemeWjhxt",
  "key30": "3jvtBoL2jsLw3MpmMmsPYz8Lb143CePFzpGY3CHjWNVw3h1HddJbMgVor8dALNbG3nSe7wjEmnSU4v6Z5r9m4MYK",
  "key31": "2zaSuo5bdxauUGPd7Ye1yJ3cqAhx2kXSPZXtRtGnqQCq27R4Dz2fz2SxgveKsAwnoDETjxAPyeZQJfyJkqAsRP99",
  "key32": "sSTvkBX4Wk6JvTuSr51mNEfsfs3gbhxi53wArKejuJ9TQsn75Yk79N3yuA27jLT9fkTJ6Z6jYSKeMsEuhZg5zSs"
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
