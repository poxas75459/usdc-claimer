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
    "3R3iiApUPxifZGQaPMbAHahGsv6vHXeaUWqbqHmPLVPatEFC4esBW3C3zPaKXwsW7HEcusBoEvvYax5Kx9hLj5nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Re2aanrSm7PtBKMvBko85Z21fUFijexEL7gHsCVgsmonruketzSAhmVjJrTDZjUWXQz5qe49r4bbwqnbCG6V3Eo",
  "key1": "2yStWrZE7XPuTymhXNPyQWk2Xa1LZteBq2AujVxgECeQuKg6KrzvRzb3pg2oRjtX3xM4fazYZLsTpn7MxNytNJb5",
  "key2": "2erDwo64YTh3bht5jsY4L3ohDZt15CTisFPeerjRLmNnseyj6WQMwKemjU83qfRo715Kc8eNdpKSkCpimJgsUetD",
  "key3": "2BiZRVecQZPHKXNgexT5fvwhDGR1DGbkZaRHwqiumL43zVWcvRcEwLvxRBX6ujzSgq8b2fCvJ2Q47KzyPhtC8Apo",
  "key4": "eXX68cWTJNu2JfTdoZjb8KswKHKx2HcNPQzHdGjCLmKmNdtZMGZy8PbtLMTKJBx7o5dfWXM5C7huVttHqMQim8M",
  "key5": "4GsiskxcTM5dDSBigLrvbEepAd2fV3bzQYgxUQNmxCoS3iPeZKFq7CnAfAXJTDKhkVg3P32SnTa26M5Je3o29pLQ",
  "key6": "P1ePVWWH5WrQ1CaaM8D1eCk3DmHxLVXGJuz1StLTrB9FDLjrnPRPNNmBatFbMgZBvb4XfidZt34SaoQ9uaEwjvJ",
  "key7": "3mpARnNedrM5Ctf46t7jhbKqwZtU395jMDd4nuUPYjfMnRC1VnNwc2PAuPcm3mhqLZARpJsRx7trcXyxpYWCCQS1",
  "key8": "26esrcBEAuwALdQzH81Xo6nW1vcXEDgrFVjq1kDnjVKRkPHxysAVJux6hRc6RNkyNmN3kPqoZXEt3mUYei9ppxqM",
  "key9": "5URYdWfp2NhF1qE2JWR4M5PXpZcJc9wuMkZYiPaqPek4cDzFT9k3CAspptmWHWbV2MNjFnAmU6soQHXbhZe8Mh5G",
  "key10": "3sqotxQMjDsZRi9n9SdVrH9d4DjHf6zTJENVDiZMeWnuDok33Ycdwk3NHqNGuMTBrTAtMXM5MpzbYvUt85onYZv",
  "key11": "9vwPKN6EyB5DQy5fLnQdMDftimKYUa8wvfbWFcbXgZeMGqZKreerqQSA1mnE9X4MisGovqDF8jhihkWD2qkWxzt",
  "key12": "2Fjztx5wTzaq7yuM1oxoZ8dgA4emKyWhBgVMaEnbHpCvLGnwBSTXDsBkXHDMiMwFSkiejBraCrpvZzGjJ5XtcTzy",
  "key13": "2dgaZp6J52W5tiBQCMEgvqqdTcjk6PpaKf4AZzkXFH4E22cd6GkCvjagADL4jugceLXz7nc2hTcVVUYy3kb3fPXU",
  "key14": "3K8nRC72jjidtbYYWgrBhfyHkDhvxgjcHcXHT5uD2baf7RcbPvVjPUerHpBVMHLvqo1a9XtZiM9pMnruZSJs2wun",
  "key15": "5Bwn84wLi3EpRvaMyw1AhPRi541ohb1stLsfecadHGjr9AxsYeYrs5LXQA8MQzbKAKHEk2G6X13bvNbtUGhkvuYJ",
  "key16": "29Toocef9rn25vQet4bTeVVeXeeTx7SneZjFNnuuSxzMzmGdFRzyuqncvnu7N8LZsZtdq4xcfVoRGoFmvC3jbacH",
  "key17": "4YqqsemgC8azeaftA68Ri8rVUe59eyC4THMf3dRz6pXunqMtXgq2FMuVcgqGyLfgZ2xWRSxUFFSmzgpvxb8FtKAM",
  "key18": "66KPm9DDLPqi7s4QwDpbVcgKbyNd5ZSp3UcRCTRrzsFhY1yPNLiz8txpNh7MvY9HwcRef1Es7CHwuzcecmdeUyTb",
  "key19": "3EgKFztCYL2kND3mFWGSnSwEEoi4rhGnQgkVGwoRbc8Rj6GKe5dsgdSMGTCifGDJXn7Py2iKKmBnu5vZNJ9yMfTY",
  "key20": "5Y8Lz8WPpSoTe2A1kg1eSSjMMrYbLnc1FVTPUwyGcDX5R1KnMXxKNTCvXmR6MJtMJnxsoeNHm3arNAgm9beiq7wU",
  "key21": "2qhdbas7xEyVdRmZtKbkyZ9QSJiD1AFrvSkj3QXhKiCWg7EpcW2SyhbgtmSfaztCf1S6h6EnLyesReu8ocmiTpVE",
  "key22": "5Q98bK6ELb8agrMjGepUVJnfiqukwC33mPsEBfFUnmY5gcdrqbh5SWCjvzkJ378DuVF4GRs51pjeAKjznpGEYcdV",
  "key23": "3nDriNccEugP9hkK8fQSC7VvKbeV3Z6aJVJGDNakYpVd78hvj6SkPpgSYzX719wh13FjApwHZQpaA213h3q3Qpcz",
  "key24": "2XcFpo5oieGyFowj6JWaNTArHUEGidqcAJ5wELkioqogi8NRArmYhvcaoPV9H2RhZKVCDbuAu58vdzVjkaynmUMA",
  "key25": "4iouNKDMAwN4x718en3XY2nMVV2zxZopBsiWbiSGJe2etEFtD4oMwRvZXaKxmCindap9yUGVeyAAhqWgL6oqpCjF",
  "key26": "3NnPcV3bsWvsY4Cxtdk3AsJ1ejn6MCXyr1dnV6ju1HW9b57DJhkH7hdcrSEBpkpWzeKWBzSjCgpr21E8rfKPfVB9",
  "key27": "BhxGMMo8sVafruoPaUhPJgELtHkyNv66w9nSkK9kJui3Gzdcfdvv3Tnf3Y7pxFAWd42UkzDkYHzvZwHT1tHhgYx",
  "key28": "4CpeHsXANqTuXTvQ4C44pwvwjkujAfMAPSmbATmrJSGncXbxtDL4pMvAA11isnQ7vv6ThpsqLxEGVBVW7MffEjrE",
  "key29": "3C5RAHfYrhGUfmAftcy3oetbXgRSf4ovEanBjvXZ8aFiVwgVdzDM7KGzeNLZHWqYYH26uFhnZfnqgvAvxN4rGScQ",
  "key30": "5fNYNTQxVtghC55eotWJv3Yu6HEko76FjrFa3KGECSCuSiJMGKpo49DaAppQM3EQGsxJomJvLFuS5RB1nRMpdRiS",
  "key31": "5PTyPSHXVBwoL31LCM2BJXuKwtToKnUP2X2vE4mRBbKPcukKRUTCX4jQE5nDxGtmAUWtXLYLBJSBTcpARGJtvxuS",
  "key32": "4dUoCWNBsxonJFvihmvvXiL6GyBr3ZokET6TLb6PYmLfXLGzZz2F8pYtCfzboJ128yLXwaqxCgSNdSRESmweQ1J6",
  "key33": "5L3cooXmJrZcM3KPCV4ncHLtreavb4zvVvLsyEh2Uomj59yGi6EvX8ZA9BH3XTpmgb2JxmaRWunhK6WVoQAahJKU",
  "key34": "3AeGA6BqKobgsS6dd1Ukp6A4Mqeqev1J8Kcu9xsh8T8kM21mMRkVHgDi3jrmy24C1gUm3AF3oDxN8f5SaPE9EwFA",
  "key35": "49BvdVAJHCc2KuJY23LSDWL6C5FrzKnBsuNJZhcjPYjdZemWvcw82uxWhNjaBR9kj9izfP9SiUCJiXwjsfp28N3t",
  "key36": "L6LckjuEL7AAZocUPfaCt3woCPEk4JGBzxoS5kDu35S5CUZFcmKaMfVmx6ZPJsEJrczstYcgD16Qjb2FHBNhF4a",
  "key37": "s22zVkFKEdgt8gS9pFNktjeePsWpEgMSCbRtLLtQ9TfhWvZZEe4YTLvF4TcbyExCFhwKUcwDJDmDtSmej9FFmmK",
  "key38": "5jPkMNzn6H5sfYDak1dcZKfki5Uc5m1zN3TZrFzhSPXJQvgLYGvKg1mmatKRnPy87P16YKjtbuX8CPeXtL2WeqpN",
  "key39": "26uPwGBWYazis52dKvQQ5LwejH7oK3p8Tm72RZtqK21RhKUSNYtxveFZ8fQ5oswXBhmNa1hUmswr6z4p3zitEQJv"
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
