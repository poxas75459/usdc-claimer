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
    "eLmNpGmQno5FQFpXEbaBLEPhfoFNhxinnFKhoCqeoipRnGnSMoaDkRRFszJ1vtHVKMcvocvVovgFGR3dWwXycGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B4bkSR2Qgka4RoWwWjfsmsFtcZR4DvmgvmWv5c6uHEKcpe5paG93RdUS7BHW2vMctFeN7qaH1nosEDNAaMQKfDc",
  "key1": "5ehdy7fLbZauM9bUwWhnDVCsXT3BuCQFmbAADaJpKD1xXuRsnsLRfzeXpSxUAVeDthu2jhsDT73K9Z6RhwXYt1cG",
  "key2": "eeek4MWXkd6pMrx2FdTotay6x9NRPYMHG8K7UjmHqe7VYbDCiH7epr1jvTcZbDEH2S7FBQaPuKF3ygZh2qrjiGr",
  "key3": "5LcDkwADdpEmLdpBF94o5VNHEjGKj2TgA38B4nRGjDmoAdZentmqVaCVjZ66t6SgC7cmqKwcFi7epymJjWxhpwXG",
  "key4": "4WmpxJe4WupvEMYEMMaUDEEVWMAx6EVwHXiri7PPCksaYVd1JAt2NFujPgETC9pXPnd6aRPjoSiJad3vXtbT1sk1",
  "key5": "3RMikTRtWjcyauMahcabS5t5ZEc16jYRT5V4wmiWQPkmg235wKSj1yC41KZ7zBrdwT3tqELi5ZR5sFtkD9WEfWUQ",
  "key6": "4W7RUEXNKfZQ4Mi6EV4RaceQ3taKGfBUrD4guzwH4CjNgncTouE2D74EiHJfBAsQsCgtWfFbCJpGRbtDUXjCkFQk",
  "key7": "myEz2P4varhDFdBrt9uTSySNenxAqx4xvCM2ytMNXMYhDTRjywByhhsUM9ApyXAbnBC66d7oEoQMePEhdALWSEr",
  "key8": "24PcVQFdFE4YnqhnHui156SK1V8PRbw1QC1Eauv9DmQJsetTWBR9RkGF2ekSQgy9bTtrc1gb5dmz3e3QM8jLaWyq",
  "key9": "3rPSfwDk3ufYFSdj3uTE369qxSq5XvRauD41m89m6BBmPRt65Yz5Mcjms6QCneovMbtH3iqxwE3AYVgWLBJQNXoT",
  "key10": "2WdDJHF6efTgvRJoekHrHcxVg64MhUWWxnHh3eQzy22gysaNYY9PFB4JU7NAEhDt5ZHjJLteTgjLFLAvferahT1u",
  "key11": "5nFJscvEMvftFCFk4XQsCx49TyV1v6eeR1P5mJRY3ZPwBhciRrN2AGWYv97ontCWrbtqVVrbS9XzYeFEpemcp4B3",
  "key12": "wd9AbEv5PEbyjvPTY91AMqLbfrcSEm6RN1XuNscSw77ZSMErph1ppt88dXsHZE5THZrLgUT7fm2EH8Agza8QXKv",
  "key13": "5B5fgwjvBJ7gkZjxdSTU6MPZcdYGmABVqRcMorMFFUDjr2gkQtdGT3Xdr4azGMD9PBHDwLnF2e5oG8uTdAHBDi5S",
  "key14": "3jkj5bPfRc1jR8ohx36yzZduw1Z81W621d7ZxzMJFZQrL2aJ2Jbhs98DDzkJBmF1fZwPXZ8Hyz81YMWonRbdEU2V",
  "key15": "3CDg6g6gtj4BAkZra4tjvm54RMfjPjXwy7FeXJ6ofTaL1BctD98hTXFQmoqNnj9Ban6oGoVabJkKfxdqNEnAbUkt",
  "key16": "5UWNwjhCHytDjsWVai11T1tL8rP8LrpU9u4u4xTm6FB7X5SfBifLXYkRqk5rLXqCzG1ShpPvqNGA6bb21j55w2hH",
  "key17": "3uVqCFChBU5tZhig21SiJvbGU9mjqc2Wc8gaJHkrnEZNMAeWwFx53mMTvgvSfvFMMkT5pbhZBjmVT538PSzeyKMX",
  "key18": "2Gt69PdUtyy5A3pwe1Fawu1JSpmuFbcHupS2dbSZGQPHGDYPAxciCYdS1Q2aiCoQjuKHrEzM6vJhwmQ1UWVnAV2e",
  "key19": "2KYGAKqtxeQEERagkYf1dNBFXmVij1rXYUWHFnA5q7GAJHibSyaUy3hcA72vVv3reZSLqvCE7vJruF9PKRuZgjLY",
  "key20": "3cWQQBUuSHNRtwo1iJ43KcMvEhsaMzUfX81yojYiWhkijdCugi2RguJv6rgrDAsHQowgaGqcg9mAhWoQhJ1VgzXW",
  "key21": "17BVHaaSVumghKtTrUVGA5tjKG3Qa4cnkUv6qYprfPJtDYHWaKkDUc6WWuxCMhatnvoZUiim5t5pY4dhe67Q2sK",
  "key22": "22JXSiVNtyrE5HQk6WFFpY64SrzeUdKi9tARFtMgsEQCYikEpvURWS2FQWhy7v5NWLi7QDZVg99nmEicZsQfikAg",
  "key23": "2QjFKVQhYeqtAVbkoR89cMMYU4kXHcUmZjXKLD1YSUyKZC3ehTrgVt81AnzRsMsY8GyGBSn6CKxEiHmtXH1LoWj",
  "key24": "5dAEXkNs3nSZ5qfedJiTuD1dvdYyVQqAAeX6aP5Yvg1DrAscPAVh3tyDipqfoRQQBcGpVR58yWqrwKKsCY1VcPvQ",
  "key25": "3GMcp6knCACLkfTMnCtZPBsEWN69FvC4EfL8W763PESecRkJhED8qjhz5TRXDwBUBaymsxnaLGSq6Bkdsjrf2s3F",
  "key26": "64mSev96GM1XMd1Xx3MdGaohNC27cTgKNjksSNtbSi4qmKA5vswTz9xFjNmbhKuGC6ogjoyQqkxw94NWiC3o9w5P",
  "key27": "4s5kuw4zqA6tuuqpGdZKv5wXRheSkpXsTBEs2nv9wUqZtyqSoDGoiNaeHwmt3boQdLeTdQyy4s3fZVQ1YcCcs4wB"
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
