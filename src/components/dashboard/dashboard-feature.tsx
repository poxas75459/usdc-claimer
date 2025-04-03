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
    "3YN7MM3qv9gQEnWAV4jc9Li7Y8xqvttJC2kdvPt4w3pvzNU6K7ykdc1Fyxy4tKnQ7P2XX6QQ7389iFnr9Mdes7ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HCMjxvVrPEkhiemC3TbWExamXawaWBcAGxNif3F2g9PNBsc15ncLnzNm9qQWfs2MzeHwdGD26DgU7ehu6Ps9nnX",
  "key1": "5bt9sbCbyXBfBDzHaWh5oiPPGD9eLoLUC8poq7Q3N18mQ8BbX3mCZoA5pM2qEy1cFsBTypURwWwMVhKeSXuKmRwS",
  "key2": "8fXCVtNiJQCdGJ8D33o3uR3nwhUSThCd13bdmTuQq2HQKANxghX8y9XrxNjASP7ufxzHgZfDWuVXK2ceubVmrjC",
  "key3": "45ZbqXLERbYQzNPTwzWdfW114oS1ivB4rwokhAMzmwahm4jXLknVtRBRDa92VJozNevJur7kz4kLaGj7LWGBwerZ",
  "key4": "3GcNhKCw6owGZUD7j5ZTvG3VLSQc9mCL2Emj8wSq8QmsmPMBYJhkGxfX5rthZeTvLFi4xVWc2KHAb1s5DSMw8Jww",
  "key5": "23Vk9uWw3EZRRCb9F6hNnpjpckt727pjuVtY39sNsLCwArAkqYzw28nuKumNhdCcjaZ8oRt4Jcqk79yv5Y4EfGur",
  "key6": "3M5Cx4hJuAeT3R2VYqmjw1BX5noFoRFLwQmmbsxgERxeXTKavKSTfJUuirkTT8m4ta7WA9gNZ5ZjZzeLB22rF4Ax",
  "key7": "5uEg1eYSu8gbFvmYaeouXSXevNBX1UiH6pySY6d58WTVqSwqXurfLUSzX5wuPxynLA8P64WtxoeGHVC7pPe2HNQH",
  "key8": "5bF16uguwSTW8tc9nPQHv5Z2G2G8JAgGza9j6eWVZ5cELq49biSkdbF2oB6gLcnFqz1hFsUXMEgoZFsXBqTmw736",
  "key9": "Yzt3kGtuTyaxuJaUoMciRT1t4igCXnYTeXTeyZEwzwMLNcXZbP857s6xKCR7mWkLyxmSeRY8QzmkZDZRhqb7sXW",
  "key10": "2wHytQAr1xpz3wjcoz2bSjTPUdT545yu6B8N2fWVi2r5tMXeRMXDghQazPgCYBL7VuLEV2NUrpGvdv3L5vLpJX9U",
  "key11": "5N6uR37Jej2MUg9Duw74E2AkXK1ikTC2JCcvpvDYTpxxV95YNepfjMQwX9Z2pr4synoKNyBteMs6EotwHXA7AaTM",
  "key12": "3zEeRDmEUnV1fUA7JwGZiAriDCkfGZVmjwLSRVvR3ZGS7Mb9MXP3zdmvD7RtKhybBkukftQumc58rY5RGxKnAtVm",
  "key13": "2ceKLiH7DKRyidbeN6mkHVw2gGWVnYfCZZBYEt1G9yWJV78jx2eu4MVKTMFsZCbhs7gTaCY2iMhog1S7NHBT3Ke3",
  "key14": "2M1i5rQegkEVDmRxFQ7FvMvqRWYfke4Yk1g21SJ8uL15CSWPV6QxZCXu3S6TdiWcB8CmxxyXaSRs5aNdu4A6RYJC",
  "key15": "4oykftZafuRM5nj5sXxTrSozfpgwrma6fwRtrJPbuGekwPRozMudVat4SmEKbMKyQtwK5EdTg6FsEyWK9BurASQy",
  "key16": "5zTpCgSjiw1xQXMhyqjdveYUbHe5Kd2cHyWu3aEh5soPqgf4NtMVZWjizxiC1qQWZ2HriQky7SMZMGwdUUMgBiAD",
  "key17": "N1fa4e7mR1xF5rZW3Xx1mQWxDPpqBbuQNPhMhJ3LA8WHA6MiMmKwkqwk82NzyAK4eSdMdfyz5VSzc4Sz4pHDtJt",
  "key18": "2o1UuETmCMQUJd3iRdx6tqXdDyKTKx8kwTHKCBsJytZQ9guz6BnK24nB5hkukCeeBG3WLcemWw4Q9k2uKJ3tjNnp",
  "key19": "2jGPUWQu57Q1ofE67q3QzupeRiuZCw2zhse86SowMRcce3FTenDArfxL4CcqkAcf9x9CrmwBke94hJUSdU1zVcRi",
  "key20": "gYKTKXewDVgnaWt3bmrdyGvA5syhww1UHumQPRqW1ZkeJSf2P9UTa9kjapSejH8267nDCBg37YXeSSZ1nS5zeSg",
  "key21": "eygs9R8cGrNfWTa8uBZNrzB7neywPB6KaMEfTfhpnJNUzCrQVniGn6kUZusKZ7EeT6PcwirEk8dzUYiXYjhPPZy",
  "key22": "BCgx298VHogtieRGH7QusD5Vo9x3RiNtat42E7B54CWhrjJWtWQ9vbneTXTm4NAMNt25pAz5EteimxY7hrLR1wE",
  "key23": "5zKozxbaDRVgnG6wVTUM76kZ5XK8Sniwkq8qtCrD31MVSYwzRrFyxaQDsevpc2BXpFgSMGochJA8TBkahYhSMrGL",
  "key24": "5jMafjcj7kJK4DK1jwHpZL2kDuVRNzM3TxeoeMZd4WmsoBPL8xy7GxW8Ap7u5QKgW83ZfUWic5GdWEdwAfZ94xek",
  "key25": "2moGpyMSboWm8cFcNDc9YUyw1jSPbRsG584VjEj8socqc5But5cC316xott1EdFC8GZAcb2N12hx5iBBXf65J8ut",
  "key26": "4N2Mi41xTnafzG7JTkkG1RreFuG9pUr2ewZHRo1raVCeMzR7kzHSACiSqVcJX6VnAw1F3fY8MXuh9fdtsnwNpdU9",
  "key27": "3EH9grMMXyfftsThA6iyjsnNKGAqvN1qSAh4mJzNKFBhM114trzfZMQ97BmRfb8ukEt7qBvBgr47eyyUhZH6q2hw",
  "key28": "4kmErJyALNrw19MEETWPaaBPE4oXamYPoto2qoGG3fD38T6SS8MdU516Xmt2GURsmX7KXZSwqCrSifVDdP8zyKAe"
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
