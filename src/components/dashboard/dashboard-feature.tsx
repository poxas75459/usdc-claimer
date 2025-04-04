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
    "52Y1NLoc6Ns8HWoLFkuhH3KZLsz9rX3wMLQ8E7oADNYJXC786eiiVDuypMR5HKfWjobgqwszSKbA455wb9NVnsy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "533R9trhRF5Ds35ZuzK6F1NpXNmP6UkfqDQkYSCccH3BJwW2xhxs9TCrvZujEukMefXvkvj3Gn66541e1ZFazTTM",
  "key1": "2ofWbw63E8764jPmqK2dJXecAoVh9AbT1EZA36ZRAAGYLniRFWtkHaFM5KFQyjvU21srhXHmvo9HarmvqJ1aUMyz",
  "key2": "Fyc1roWRscv8MJNoDyGREeNaj3fgjF32yLjmX2szzvVJqUVVQ7Aug3gfPgi6uAiVBaMqzaHcbpt1zAuJ2ERtKuh",
  "key3": "33Ko4iYdtSkzfmoZHYd3yxD29CNPnKeNnFTR5dGCb3W9Qd9zP82hUKxDnwhkwkGSC825jzHz2v3gn8nazbp6Avst",
  "key4": "395RmUifYA9DKMX1NAGNZS5HDVkPD9xa65JNGmZQyDmpbXaswu8D9xUBxt9vJo7BFpiPWJgUUVANa3sVBoLwgU4a",
  "key5": "4Gbn7dPWCt6t2SW5rvSnQHykA3NB4UvzQZikkXrALFBWDBJEyGWgMzp2fBoaDFvgEgBbSaLAsCTpuJ49a2bbvPDL",
  "key6": "4qQzcH5NN5xfGLYw4gomw6Qrz4iKMZaFWDqUYowEmUyq8g2yQXuJ8duujxYit8dSMYK7jLAvp8qu3y6v61Ci1Q1N",
  "key7": "2XXoMxxdKEyD9qNY9vCJCz8onwmkfauYc6wGUMcVLEyDzi9LoLzXkKBMunH9U9xTkmdMPdKb45LVU4wqMZGtsEZr",
  "key8": "4KT8q8GsMVeYGRpHhwhdfVNtMhPqiuSQjPwXZckzcGA4uMAoWdA7Dn7YKzNsR1Y2V3VCXE6aAaxGykd5kd3R1bCX",
  "key9": "3WdLBtnhrzpvAwLduXydSZenaiNUf8WVrSVj3uxZcfwMCbfuPrU8WUzAkQBFfoCu1eLgxDz5VJW47Py3nfJ5xAMR",
  "key10": "22DsGxaw9QjqJtdh43C1qAcfSXSu8Xf1Vj6uD7cT2dgbTivBiwFr88YHGpxJ6NhNd1nqPnrPmuETNFLKPjzeg62u",
  "key11": "3MwaijbZuxzJabvrjbV7fxczWJccnrRxAc4NvvqV3brXaBCdEEspTBUef9XCsC3UqrjK934GhM3zKrA8zEcT3Hjj",
  "key12": "4UJ6HXDwRpeaoMReUdT2TyhXPQcbZo3LdNK1UHaYNCXwLyM6WpRg3UyxTJhvZkSA5L9tuKGKMLWkGEqxhoXcRATM",
  "key13": "2YT9oZPjexWQvTeRVHfHoGbcyM3ppTKe8XYFGFdrvMdd4LqGoEE2PjtQkZXWChgrKTbbgsPryYdmRd44QDTXpg1G",
  "key14": "5k8z9icvgp6dMp3p1bQGEbQ26f3346HtJwTdv4wXqa3eMesPA4wrTXD7M3qrUjwrzAtGbacaW27cp4Jvm96cv7aD",
  "key15": "4kHNBrhTkU8qK7DrNwcGAB9o34EzoANpog9XBStEd2vB21jvxNN3rVBCSsf3NnfeRteozYtb3PdMbC1UQeUoYFcL",
  "key16": "2EvAB45NSsKeA97b83w3T4A4Ez57AXH6DqvZXN4dpP2Jfd4CY2kKj8Z77BU5dYWtNNbm2Wd1sgPVMz6pjyAWe2MK",
  "key17": "2ib5FsgvWCYaPA8oC8dP2xSfEHVKvViHjooptwq9yiYxSjAmKzrhiEx155UtPe3fZQrKBraP9Lz6XKfxwoqeZB6P",
  "key18": "CaYxTFCizj2ydi6ze4hv9BE3FytfiYHkZ59r4hFAZJcqz8JYfrR9dLiBZ2gdTuG8PVdqAHHWqPpTtjEcUaSvFvh",
  "key19": "2cHjXoCAmHidU3PW7ve9SyxfuuRTWXmTm6r2aUy5zSA8nMBEniTW4E48FvkLLUYqyMXWmPfxayAre8NUkmAVHXTU",
  "key20": "4XTBsjAMei8hnGfC7GrAkxjgsVSq8Qi8fSoJnF1ZsVT399Uq1E6R9aassW8KbhWjGiRM3pTqXJTqEeEdfDGmpe8F",
  "key21": "5dRTVW3SFPc3jgo1269SCtELR1CA7GzTG5UCG6E7weazQ8jHCTmYmYLBdgzGEZgMZ9tthsh7x9UQkKJmtr8t4fsZ",
  "key22": "38NZ6fZEA8KjQ2zaCCL2vs2eA3zMSoToPXp6EHKbNAwfLLNM9wrfDk8YhRoWr8YiAz4pk7TWqZk2TS6fGkqPUyt6",
  "key23": "wgwFkKQddjGX5zi5zCLM5ZzRGphcj28Hqa1NYe8nUSKgypPEKMZWaHMHBbkq752PuuDN758y4f5hVpag7nLDNgE",
  "key24": "4Fgn5W28avPxXqJduSHw46zfw84wEEgEZ5cSYQdVkDgTExc5RNsUeiWHKMkLPU9gcoNmZpWpp2Bf5PwJpdT7hCzK",
  "key25": "39L5DuWXrk6ftPmc4P1M2RQfquWDjNBuAi4CcMe7UgbAZCsYKuNQHNGHppKxWDjx8tE2ULSc5mn2La2L1bThFSD6",
  "key26": "21AZqKL8K6V5JAvvLbSbSuqcCNoUZ2oFnu4msoTh26FyEXf6Hq7hzL7Swh2KHaWFBpwwdDkTxncACKCQb9DJY5Tm",
  "key27": "4gE4f9g9mGbR2WnkypGxP8hov6xSvJrgHBoPNqYxEo116agpWkoAuUS7QbqirZaqNp3uf7qHhUTBPawbV1KVob8r",
  "key28": "3gTLN7GRjwV8tfn1dfYzvD8B4ZtWjanCnnynoZ5X3PjfKoP4C551kppoq6Pys6ypkA6Ne9u9QTkxT4cMg4evazAw",
  "key29": "4NyBaSMQhguQJPtSrLPyTpzYk5vBTZreXrR7g21uhPKZNwAwFCSZuRvu7Vsw8LWyvQoHj8pfcuHJYdtsTcTWFPGP",
  "key30": "4grt7xTGaPJjNRk9cy2sY82jXqHizam4C7kAd7xa3dgnoKdpNdmabMPDPJKYoTpAsb6RN3izwjZvPWuCWhAU7gQe",
  "key31": "2MeMTeJCqTkNy6bu2xb45Z7RFujMJVCcSM7tVJY4X3d5TRaWm74okUzcRMGoph7gXn9qeLqEdKsuVpu7WuH5QBh3",
  "key32": "2kpwAdJB3PMJZSLMkus9JvtNTSo8BnUAWCHpci5eif94FnyW1Mc8YFBAnLyz6jjohY6W4JvUUtjYQF5KQEKSK6MZ",
  "key33": "53QdhyzFgVftyFBonbN39PV9weMTqyadxYq4qRxbyvLhtcTXgVd3VDAyrruPxmYDo4gqoZFryoUxt6v3V7jhAfvQ",
  "key34": "2nyYVFurRZXV33Gehy3oaWdE7LZev7v2Mnd9Ewa83vJXxC8662gzW583N7ovrQQ6nYoVxa31REHzfxhg1REtS772",
  "key35": "64zcf5WPFn4G18s6G2SspJJ5fiUghMQkj5ZHBc3Erg8N4trnGL9jN2diKuMvvj9G2whWvcuWM9vtHtKYwuoNKbYb",
  "key36": "41CbMXKc4AqG3uM24cVRctfaH6cfdGXDQgTTtoJJ8M5Q7nYZBTU9Xe3dExGQdr45gtXXJxaZRsPBaqndBVTnKBq3",
  "key37": "5G8Tsc2qNoeiWPtCdM9iBthZm6WAEDnWo4pAHSfa6VFaF1q26etig5c2tTwJyGLgfUWSS5qYq2FQk2dtKvxukg5f",
  "key38": "3z5kJ8jJZK8ps2gf7ho5QaGLS5EKABfGHxsDjpZGUAVvngoYRdX3vfGN7tXnqBjpJsL2Wmu5xAWPM6zJHUKUMxUt",
  "key39": "5P2q7XLBaUQd1zxoUuq9M4mWCKpyqfbLMRtnEZWJU6DmCwdkw2us8PfeQnCM8ybiMW5rsfjEtsQFg2ob8GGxA5NM",
  "key40": "3Ugdudyo6stCDngCG2F98xjbFR6YutQaXsGrfLoCftNMtmdc5jG8NSAmDhCVgCUmeqd212SW3h9Qrvuu7WBDS5ac",
  "key41": "2nGVqYeVotZrkwFr4W2mxXacSNrd65QLpXD4xqTxfrbCo7AqiZ9oUxj85hS3RUKR6hfdasnDCwRcFzUe7zt1twmj",
  "key42": "jCAmqNFwHZMqn8xkCERzojeEneUtbq1ocqi7pSTQ3j8YD2s3NDE3XaVSB3jigYVWMvc17QykVKn7R6JxKQ2Sjb6",
  "key43": "56d5BPma2FjpU3ZjtqCBjTgnVdTq4TKjQqL2NfLnCNCjQ22mHCjFBwpfiHC4x39Upi7w43hZSdvxsLKdnVJSLeDC",
  "key44": "21o1jsSySq4N6eg91VTSxQnRHsBf9d3ubfBAuxCqFnogHFbsigV1Fcw7h8GNWhZTn8jYNYQj72vw88UdbdwRLMiZ"
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
