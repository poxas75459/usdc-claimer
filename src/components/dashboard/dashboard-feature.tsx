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
    "3HPobAJghCTTZGgNa2aHYxrWcee48NixhqbrsjmCobtXM3gdn1mUs22YUoXNyq6HM5BHXbrJHemcDm4mCFbT6GcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QR56tvLwSz19YGz5mVy9aaZUSw5E9T52Jn7kh1hsUiTCr1Si96WKnbmmLt5nNNo8zriHCFqfX94BQNWaoAFwJYX",
  "key1": "543NGPrVwYVGtdTfHHzPNSJE5nQgVrEz2DUFjBezFfQiUjan2qEwTCbqUn2SDRVLCvMVkMgvseDQTgMdtZPaZe8i",
  "key2": "H2aoe3FpvNn8gtfRVn4Nh6K8p9sqwspWJfAYtUH3VSY8XH1TeF3dVtbDjpEJ8ELLJhxipSJMehwAbmi7FR1vLZf",
  "key3": "4SxfXA287hrrfmfJZcZBMGoWbgR6SvtEYoqp6n1KePkRfudQKxtYFqXH3MrVD7KNJzmd8VkXZY6CwaK8nybZTWvZ",
  "key4": "5wqaDS3evnQ9KUQoFmUZpoKVnfv8CZaENiUi4LaV4m8H7aYNVib94eVz6gzyxRqq8id6jzi211h3iBjH1JzwwRWu",
  "key5": "3TSQZmjNF17irLqZz7C1oqqq4ZbJweyiCGtsNk67eNchC6EfaoN1hXJPEvCtY9AxsA7Z33rgvGLA1Fp7Abxttv9e",
  "key6": "wA7unMmWwFMMBL7x5MtmfSgAa3S1UoNGGwTnnVLhoagLGqYYn1mh4BZoQiJJU6yF2PvCjoZLej9H5Aj4bGTZFHw",
  "key7": "hq4uh6xBpWscXRgb2GgoFmPJBXW62vsdmQAhV6B6Ud8JRivqH82sw897rCz1s2ZeGW8w8t4vTNKGkSof2HqFvq1",
  "key8": "rjEK1w8Zanq49dZWXHwVjg6jYYrhhN5qPvqmHk7yUUwtybZxQv8MWah8SuE8zwiKBDTW4y2dWVfr6twopw6rQyv",
  "key9": "4TNxzMBT9fdooJpe9zBFE1gNg9BMcVZg9DvaY3or4em6bpjbmt316nssVmPsKidJipnJontmhWF1JbxwT4S8d3fX",
  "key10": "4VrPf74dGcDuxNM9DYwJBwb8tMBG7AYa8vmmTyvA3JQ4mTYVxN9GLrrQobzm217p6t9J32JgcvNcPxKq2hC8uhtC",
  "key11": "kND9VzYZfqJEnF5dGuzAKVbEna7muR9jRGJd3GxJDF5omT1cx2xUxQSpAphfaUEFwMNZYF6DGrfhce2tkSgAxHT",
  "key12": "5VN3B6bdFVMofX3iWDAKdV7UrN7mEzB26HNiYfzdXumcc4hYYisrkV1qRtkDACV6V6UrsLhXgaMjXoS354yedJwP",
  "key13": "cjjGCvnKNCVgTe24xeJRy3DihSAdvcZmqySazN5Hb58eHp8QPskRvEKsMoq9LtazZa1LJbqrB9E9xbcKTGbhbXD",
  "key14": "3q9hcdrVre7nbWEQTrL9CuUk9z3HqwyA3m4aNz2nodrbnsnfMeq9LWAsL7fmm9w68nEPcy8kARnqWofQvXmEqne6",
  "key15": "3NDPf1e8nETAaLsAizWScRfnCMjN3Hztje2DWHm5at11g1PXLBoHPYqAhdCpWpyyrZpLRGby4Qg3pmNTRQr5W9gK",
  "key16": "4ZkVDAtcDwqjPuZ2vHmoVzDa52U8RqApzZEmwZR6P2VJEa5sCqnXS9cKvygybANq9XYjFHBuGtzRMaUExc3ZyM7L",
  "key17": "SADGtvNeQCmyrcpojaZPoCdXXCa3JJSGCGHzgmmZJmhR9wfUvnVLonpce6B57rjsYh13BzX7kx6N1fDazymsuQT",
  "key18": "58wrsXW9k4xbqu7kD8jNncsGBSxvLtUdCWbiR42SsVLg1WVLeFr24CsqeFPFo8XYR481oYHZ8NZJeyYbt169PUPr",
  "key19": "eTqMMX2U25R9iA4zCiL5AqYN6ayWHC3U6brtMGryq5L2hjvh1kD6YuRcgfmForaKqyyi9yN2TNbXFozKGCerQy3",
  "key20": "34bkbQWscyJFJuBaMBSHhzTVC8eR7KQH5XadCqebTbZKKVjYhWDZk4c8VBEBkW2JMkiFirVMx9vswqgyupcqCvwD",
  "key21": "5icniTxeV5WQTYsDfc3HsXYqiXQzoM2vFMnDWr5bRYVW4HuC4XaReTy7hx74KtbCPuiTq8dcEqAVpVbE8oiogjkr",
  "key22": "4af2KJrZgYfLjBsL5oPFx8rUuEcicQkLA7kZ4zW7WtcoWhMFGXxiypsV7qFbLmuAKLgCuY7hSm9SA8YpRmdt5G9t",
  "key23": "5Us4gCdNfAuu36MKBNkcWNZa2kLANupv5x27iPRZASkaaRPKVtwBcnUXHafk5HavEjQvNFRXKySRjEsXJfEXEuFe",
  "key24": "369H6oToR8bWZsBKjgkvo71pydeVUjZQHYPXyas7EhUqPk5HigyMSTV5w7wTgbCNKFVKjuJVJPUctFDLjkG1EeKy",
  "key25": "31wMcgoAMM2TnYqeTfdjpLJyiGY345YKEoFUxjud8dzpMwnB4E1VtqCTFBpHRC9Czyhie5goGxGcCpzcdkcdUDd5",
  "key26": "33kj6u2n6D2BpSEJWVUSzDaAdRRDPP3UEHo5M1cNBcsndEVd2r1MHrimWbr2mHq9yobYog2AfBhiZ4wHfVzF5Fo3",
  "key27": "4BscXwuxXeH2adDFbUKmBUZyginRRAAsj6gWuxrL65hw3ECbLTPx78MJYqN6dCY3njca7gvjahJmqCMdChGMys99",
  "key28": "4i4451fTk32rgRtsLz5WKP1Myc9aXUxNXrMjD4LH9N6GBBwd4dRyASnDHnWpC7BFhBU8XEgDibYEdyVqC12moHbH",
  "key29": "5GXsLCipvtaEvKCHH59aGUVoNjiYLoLcp1JkRFRFSqQg9Fgs7FYuB3QiHm5AjA71S2ZXWRqiD1XQhDVoSmLPTisg",
  "key30": "4rov2arDTQzpfKBHweR63p7vT7CvJzbFv8ZTB6Pvk4AqcNgnJBrGBhHs5NxneHf5qZQXE3CzqXmL5KUNf1sqZFX5",
  "key31": "4yKUg3f48BszUwtV88VTBpPkrfZjoGUvR8JMuTruVXURSDLQSwmqETdguJrnkG7Ujsvdj9BfAeBqeVqSk4wM4C4D",
  "key32": "4nuaCMKo7auCcwPSE7ynbmNLqxF4QNn38hksRHEwihT72WGVahfUucwTrRbujSLebwpaqs6EA77VwxNmmcjJ1pVp",
  "key33": "4FFiL4myxRB9LTvwz6YKQ4cUVb7FfTR1qCTVEftsqQLY6yVZXdJ47d5rcMrbSRUriKYBf4maQFsSq8cmvHjjEzXh",
  "key34": "5tjzpZUXWacmx35mSDa5grCKkELvjCxJQjZJRUr4xFYzVLHUQwW6eBpqL6UaejEwJujNFBgqsqvgoM6v3iZvaPKd",
  "key35": "42JqX1z9qs3JVKhJmYR9Zd7d7cnz82s9yUmDbyoakz64XcNvubx59umHFQ2Bq1bjj9qZ7ERH3JuLiEW5pB1EZ1gu",
  "key36": "5DCvWCffmQ9Z4MFnGpo7DSLD4mfZAse6CvfFNVsngebCyCoXgTYernPMbW6X9BJGtngen5zvweKWAnjtcQVue321",
  "key37": "6s52QTfvDt7TvaambDvbvpMpqwDEKm7e5p7k1hV4U291oTMu19UmSMVEsG7wdQ91MGaeVv6d5fq1GbosTsDCU3G",
  "key38": "39Y44kZFiXrRBB2iLpZFY4NMY83n1Y7KzpLrLsK2Ur6dyw8LvFQSEHyuNLgYNnZFwzaEeJ8QHggDzjxXitk8LBZP",
  "key39": "4uF23jVYcxBjBU2pUNsZREbY5Aa9xpeEYdPb75Nu68QinMPHsPeSvpdjWiNveTxzNpAYsFTQ4s58SrV2A7aYDJyM",
  "key40": "1UaPNewBLib52M6UqvEZJFLWobY3Eh38ePpifLWeKbJRbRWQjXRFfWYshMAiViymwQyT1qgktybfFK1bDzwhPeM",
  "key41": "46Nfy2RjBgUZ8q6fDF2iQDL62stQxsiFT95fJcq3ozPsczfGexn9Jg52ZJc7mHyYq9AHxpCsHPy8zrXjA65QUu8x",
  "key42": "4sZLFUA6pjXPaYvtC8hyxjhtaeTQf4N8ChckcBcqz9fSguyymTrQyv8wRrNmn9q1ntSrz25dMn9A24t3Mx9hsGkV",
  "key43": "3GGTJPYENpcQoKZtrmXtjT5X9bEY5gwyEbf4hnTAQZez1s5RCwoLmZMDDxpFHiWsWMeTqkvLVhAy4hggxRmrJJMQ",
  "key44": "1bAA14XkGDiAigTdhv5ZTV31AUZWuPw2ACT1DSEmy81ryALVs2VfVmM2xzCk9mcwGCmVRRzemavwwQsAEFicWTT",
  "key45": "3LfQWRBc4aXKVwBHsdzUNvieukPsWpD1gnAAE6BHPoT4PaKPQrDUwMCqgSeqhn5g8zyyvgQbYPAzi96XSFdFHLF6",
  "key46": "3N5LQJsoytCaH8UYij4AqEeSYyTPJEL4gUwbfgfU5Ce1ABZMhJgNgxMAC4RCddjz6eXHHsvP67okiycw6eFCoZKA",
  "key47": "4s5Mu61TiAkN93Geu7QTu8757PrQMzQGGU9MeDuyFzP2huKt5RKjVJtpgqf2VuLr8GAfprvPSziUF5ZWNWK2XDPT"
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
