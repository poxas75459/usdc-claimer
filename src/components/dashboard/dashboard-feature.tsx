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
    "5PqKfcSoRmRyLy882aUqk5ZUfCGbD1t3NUs1qFu55Fuw9Efz3Z8Y8bA6dGew5DKgd4oTP7eMtsCPWiLgqyGhuBHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37goP945XL1Hy38uN1ZuuX2zqzX6ao4vHFS76Kwe7V677uyt5WFb8QMHTsT9S2wAWoY74DUmCxUgRnhYXMiruFUi",
  "key1": "27yizBHpdXo5JCnKLnviPXvmXduyHw87HKG5t4RGgGwhQLGt8Nnk9JNcm1ARMp9KcEtvRW4RiTq5v5gAGnp8qFed",
  "key2": "3RWmZvy4visSrHCgA8Cn87keKB2CwAvLPRJi1MLW3GXd1a8UBw3mg1L26REFQeBdkbvsyoLcb46B9EphkmSqZkf4",
  "key3": "kMeSEsedNCbFa7QLJB1qb9XLyL9DLKRvwGN1Y1vVAjSYQU7b9L4hzapjpgeBDP6967YhNApwJkyQGVGPpGuHT3k",
  "key4": "4VuiKVx1CH6dRYTyfwPkr6wnLAAw4xqH2eAeT3S5rayk995G1DhucWJMa3SKdTTUfVDyoYFWANy2taJNJdSHHhLS",
  "key5": "43s77vxarx4DkBrJoui6xF1Sp9weABc3qLRrqK7vyyCEJAuKNqC4xksr7Td1gqy1u6Ro2NvqRPRs8mziuZf46XX6",
  "key6": "5G8aMsEGfwMwv7WyE9VHALxYGwH8vPNBjpjXimFVbMK9tKMsHdCk4kcGkg136mcqRxfaW4zhph2ms1Hn51vdaed3",
  "key7": "3LBbuH75RMfqkKrs9bJf25h9nM4SJz99E2iASDtVVHBMG31H1xk81kEnsMuHV7vSb7t5sJSjxdFFpH27F2hMhnGk",
  "key8": "2wa6joTm1zyesGBxPGp3LsXR5EXBfV7d7FBeVQJ8NdwKuZxDWCdEXGSg8u8fzxZri7RgWunp12eHvQv2dXcjoq2g",
  "key9": "4U9J2ipNWVp43aHgM34DfYric1mt6fyDNq394HquDkLNjY1xZkMhkbZbkRDASvxpgPrfBBNZULha3GQ4P1njp6LF",
  "key10": "33RmyxVSwccobAhsK7pgTUhhpQKag33YX6gret3RjtsSXYiTkYRqWpWpETURjKuYgjn6MgETCiE8PrhwnTb4KKX6",
  "key11": "fffY7rwtidLuBTXuzLKUq3wnsczRKktMmthg4KRBzUmbJiAjgJYQDTz8CfKmQXGkNmn8EckWkJ2tzGmynuVngFZ",
  "key12": "2qpwF2oY1JJPigGAXxpD9MxxneDjvzs1PNEwCCLp3CgyseuVNCXBJgt1njFkxnAvwVo4mqaqoj1v7PGJZdLAg2hi",
  "key13": "tgrGDwEv9Vw5HLjcmQrNn7xwtTytKdwsLoshKfm1WbqrDTW8FZuxH5uFW4qDXegPuqb8pw13WkBXpTkjTSA6QfB",
  "key14": "3vzAntM6ruJjWPmRUYqoFjAefbENjGsE66hqSkQvZhhUMerTGjmzENZb4np1W9sfkaBFP4FLPM7U756HbzL4vkpX",
  "key15": "2R7FHWPieYG4rMxSHrVcUebSvkv7Jv4XVhFqwLmDmAkhQTWRcmMeFXH68WYVTNvdvJSBfNrtVy21b1wptpTEcveE",
  "key16": "5wP6D485oZiqZuaLEMq1AszgCfJZz3qchqmU8cacEK2KgWhA8AzsaR1oPqBTG1jkPjghwLrNGoYQTxCTQF2i9adv",
  "key17": "43VHrX8KYayDoKo93mJu6qDrh43ijWmPUwRU6z9eUr32A1BZCuEbrPi73fCHfvh31kt8foCR3SZnzqY8m83aUToK",
  "key18": "4sK15bz7g2rgAZkkjy7cHrRuTRGKN5z9exsTqk2iUqgYyRYTRZQYoPGvJqP4YQfojZQmWMGNzDfZzVGWy8kRUgaL",
  "key19": "V1nXkgaH3UKwb5XvYmxWSXJ6bcvRC3Tb8zRhs3bMGAGJ7Jy2nSRgx7tMV4TzSAkGuqRZXaQJqxGdPk6RzM9yF69",
  "key20": "4Zg9xocsCZMauAiNNX7oscJfrMkNtortDQQNP8Nxky8hdnRb8hG1KcfvS4Tp2kSESD6h4k9cMrCRSSWMsfFis7X7",
  "key21": "5WLA28tWgmtiPVXo8edB8jJLJpLx8tD2Seh9U2xdB45J7T6k8TrwWg7wX4S4wVqtvLMD8jYdavoCLcc4EMQwaAD7",
  "key22": "Bds7Z4RodTvThk4aYbdkogTAWrCFXEzf5dRvEupjp5e4TJFMkQcqiC96zdK3MVoU9zvuc93VQFZnriuo8VqyaTR",
  "key23": "qAnd49MdjqSa1nybbAreTsV9rJisa7bVnAnm64RQ5R918nEZp24GvbMMhoqHvBjQTmb9bjAJygyXDCFSyPFMY2A",
  "key24": "4VLJ6eKzjAtzWvZNqHjxyeFCScZfcaQZAbWzw8n1BEoosNYHnLB8ktRwFAbKSmYwP28bD32Qb6SwN4eTL6GWqFWM",
  "key25": "2ycG5RpQvKP5zjNjAGcn6o9P6PTqRZXbcxcmBCHuh8tRWFkFQfg2hCiWqhcbaNQHvMELwPVYovu4JP2QNjMXtxcX",
  "key26": "2b8v3sqXDgjYd6SjpW5TJXANtstNb8J7g39mWKbEqDCVjWeq29aQPTLMzdUueG6tmW7YkzxpstibbWjxffV8hodQ",
  "key27": "4zRWhtrzeqWBSjray7rRBsiqAATjBD57whHBSTNsiaXLQTK1FPp522ENiHKzq1tNzS6jxk4yNZf2MPfYPatt3mfA",
  "key28": "5j5EE87hvmwJHDZi5rgvsATAzYp47dAEDonhWn3osvBye5nNC7n6z6eWExktgGqWePf2NPXwZjTou4c62FMXRwLR",
  "key29": "66ma7SXHm1SGcPpnM682pFzpdvhyYpeaCQzG3BHPed34xkfU1PhnnQckvERN9f9LKMCMkoe3VTCoLHbx5ShQs3Xx",
  "key30": "4aUj6D9NUstGnGkucWbYGuPUA9FRoBmrmUS7FKXNXsuao4osEcsVSGvsyFmJSRK6wq2Y4HYKbvqFvfB2a3eXho4B",
  "key31": "3SJCSVRbhgCyx66ZJ3yYAoWWgvM2vTsM4NNcaanGpq11CzJucfKcV5Ju3fpmEUAa3iGDte4jUb7gm6zt2sFFPZHe",
  "key32": "5yPC49RF8mWGHSVxSr2N4KC9kCFPF3TKx5whALdT9eKy6vVfT7rnM25odJcfSHUG9dbg1hyp9ADhg6mckY3o3cDf",
  "key33": "RFZLa7eiXfXLQDjWUq12KnJZj2v8np3p1WQG5UfXa6c1mQ4UapD1ChyGyp8kEHKXgMPpYKqCtBR3DNFcZHhXJMY",
  "key34": "5Wa5iheo6JDwG9xHaXPZWwXuJ99KJA7gYiHseQwM4MaYqK2VtoDdkJ5ycukpos7JaYUsC1tYCfxNVhJPqNpf22H6"
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
