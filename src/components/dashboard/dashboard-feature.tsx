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
    "647BQRMtdbFQDg16vd8eQjAkkVTGbNaXvGeDhynFqdzWeZy78vdtamFJaCs7bhKcHkgbFTZPvZdGeCcQwpkFeQbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hi68QZR2LWPU8DoAfyG5CthPehJSzjQYtKJ9fnpc3usSbPv85oa7W7vhFhMdr87urcQJYR9JN8eLpNDXAuutmAv",
  "key1": "3dhFGofmNn3AacnErLnU9TYEo1REoBcekMEfX8jAzhBVqXERSxWY1tQNiXk6BWerMTgredsQSXvJk1PKqBgWZQZ8",
  "key2": "51kwNkNU7zSyRJtjDUjahfnT8UhCbwNekCnyx1HL2BwAd7HpvHKwu3LjTrzYonWVNLvZCfY9578FNFKxaXbPbcJP",
  "key3": "4pQWhyJd8cDXkkxukMQ7JppdehjUyY2J5Hjk6Uq74rUedkiwWckqLF5VbJKuEixr2Psd9HXhVBtjqKFU17MFkeo7",
  "key4": "2RczJ82VakpV7FxThTfEyUyh7NLCrf1dnRkd3W6VGd35NwcL34NewtfwA1fPx7sDi6tmpku78wNaDtojHU5geQ1X",
  "key5": "5AiQwbFJKi7ZucJ51qMXrCqSpEf2XQ3iGcD4gYLsb8LBXQe5fgcuVhe9gMmhhh8cc4SmFiLXXM6HDyTo6gD7UpS5",
  "key6": "3vfDwM3jjfDHQ18H8uGnBcBREWLsAdtMo9GYcfj46XCb5zgJHzrDXDgFXWomJaTUqmfhmpE2Vth7yDeREhBu6rec",
  "key7": "4oBuMHxnuiUfpNZFDE1JEP8vpjH5GyYXz6DzJubHnAq9QzZ5sZRwRDpkDm57kPbhE74WEG3it9R9gi1B2B81GJG1",
  "key8": "4RCcnzb7pD3M6H37i6XTQEN8pDjqfZRmGAAvDpk8vXQHLW2AXCwUpv3yu34pDk7t5tRstgCRn97RgZXDap8R6vXA",
  "key9": "3GBEStVuoFWb7cp4GoqDdmgaGozSGy9Ygrm3G7Qqy59b6efhWeitBo19vwL25fsz1q8REZAua1HNskBydLJPhzaU",
  "key10": "2hRtoKAzmjDfLwjenPhmaiNAXF5wWWvUNPyeDm4rTPYJZXXRcREQDU8otvyhbPFc5PB18ATJZnqxyvVnauuGKyz6",
  "key11": "4wzcsmzJ3sjURtWQhTkCeW7n4txbLzwDvNJziYsF5YMTsk9KbVZmVtK4fR2TSCtD4e52dx38HpxxXSnrjVyWkj1g",
  "key12": "28KBJTSk7sEr7C56h76JcppdDo8rbcEZZczAoBf3uJyQiwbrEaxFx2HymRKxm3wjhXki6bCrccShPk3yLzCPbHjD",
  "key13": "2qFKEyUhpibsrKLqxFbkVE93ekKbU6eFsgCVKCjLLhZMmcdrwNQm9LbUBNu7bG8LVJvXcgckDumi3EF72fathS5c",
  "key14": "4XMNeybwZiGfNK5Q9gHs982DpXeyaefDoSfRGmU4Jxm1Hf3jLGpw7ZLg7RQ5hud1WKGRSvWixxySom1joZnQRjz6",
  "key15": "3LwncCWmZtHxiNBCsQxfxWAwSv8EV14QpQTQEAgWK79A1GQhc5rCpR4yfFeqM6Zz9eHwAkdoFVufTWhSimoSaysB",
  "key16": "4X2tNiqVzSHb54kTsqB5vnT9RMwe8SuEw1UAWc8UD5xH1kYNwpXEAQM4h1iJZK5Fexag6WYdKWbM5z3HXZCrCRzn",
  "key17": "qkQmrWdiN2xgxQ1GD8vDU53BRNSeATH4iwx9VoGgsdaGsjvTKyQPmjWbPVTsrHgXAXcDttpVTvQVLHNdZXP3i4M",
  "key18": "3XomaSeTPMKmJQA1k8wCaFemEFrbne9CEprrSd8kyQit1hfgQWusJw53ungrh3qq5vtW9RCVd9T8Wcg8yWBY47uV",
  "key19": "2LQzh5aTJnAJrpadscvnhW2kDt9cYSbs5aqB7enMuA3TMXwHTXsQ8Y4tNE88DebHD9dnaA5gkRA4WLaaBdcymMne",
  "key20": "2Nm41g4qQHLJHrkHG96sBE46KUah1E3mG3amZhymFpEN2VYGKXU8PdnQwHEAQN2vbN8y4Y7mpWrFBYJGZri17euz",
  "key21": "2pSAX16cgB8xPec34Dq3H2uFLPBSa51h2SA2Zk71ZMzWKSFnRdU2nr17BoTUgBjRLcKeZEwQGXVjk22ZoutLwFBJ",
  "key22": "626AafzqwrRvgiPa9Cf6jrR5xmLQQN6AXCK8dfKMus7ABbYdwffeF9mtD4hG7rHtT1SnGkSqusQMpG5BJwS6UhCw",
  "key23": "4iqZz1ANWBp1pvMe5RpvQq4ybcJvLdXsJVbdabbH6z11SzmLQ2VeAxzAmJRVNsbHxJEJR7ic55GJyjWYXVAAQbEc",
  "key24": "QbLptWmdsLbb8NdDFctX92swGBkLGa8DboV68P7zbKHC45pfK5hcybPoYsfUM33zpFRdqs8LCx56pz2yVAhTDKR",
  "key25": "59tR3x8qbYsHyuKrGC4mooNRMrgHfVm2nFYPbyKbcWiXAQHuFyBA4gRngowenS6jLxbjJvAPgoxw8avWHRhzCRDm",
  "key26": "5Wry3MmCYAfqzJQDCBoAXHmi9e562LzZXDt58eUXYEbb1VX4LQKZsWadipdLnivx8Syc78xjtuNuMYQfuzj4XeiA",
  "key27": "JddQQWC5zRCxFqBDvb8tf8AhUXZ1eUNp7ipocmTcLhAci3rvVCGzE2HvXYcMaDRNvn4G6mEBsSb9rEaP8T9ZGNy",
  "key28": "2iyC6bULoroEMH1gK7S1ziKHXDrQkd9zKEZAnJno6dJq2A9Wf8UipWmNQExwPK22TgWTS8d3jUS7vWk4ogigr2rF",
  "key29": "64kWNDCJWu3c2qqd3kBhP4MkDTg5koh29XcCeQa5yYX2rFJPHdshbEFxcDERwEGmrP6VyeXtkU9JCUWebqHRvSdN",
  "key30": "38JnfZiL6tRUZrZuxCHko5bEVWnzxgAZzBshqZGQEKafF7ToUGVMmWutCRzfCCgBoYX92QBXhWGfbAPnWu1EJthq",
  "key31": "3XiAX3JweJu8mpxRqVvGL1CaXYxq6nkyeWmCM89DNo5Jhf9Ku4ArmKFKz5QiZq6HaXfHzRSMsnSSsa8ixxNNp6Xq",
  "key32": "5aJ39bSR1GfABFCV9aGc4Mj7CXPkK7Wcu1yhv9DziZwFBJrULyGWs6meQDXSVauFrmmTRzLe5JEodsTfNy4RdGAG",
  "key33": "jHxfUVrjcRQST4cfq2DmueygrmwzDKs4TQ2EfA8kJZHPufwa14f51uJXk7JJoa9T83aiBiT5gk8pMiRHWCozsSf",
  "key34": "oNFCJvAvWmoMNB3c9D4MSh2Uf5yozu7ZyEt67AbJgpYQor5UHrbgH7JSCSWPWo3xny39tXN9V6zfyXBR9UZ5H6X",
  "key35": "5rn4xhyGPxubGHo4STukmKe1vs7aCymqzDo6w6zyfAniEdn8t2Z6yvxzYecbMSmAQVRhjpT3t8B8MBEfWJRYU2UN",
  "key36": "3fPzrqtS772Yab4tG6uNg137pM9GtjcFvC8AqfByveBN4nqvMjrNfQj1S18aznR9meEEPMNJCET4ZdR7zpdKtw56",
  "key37": "3be6zcsZpSfrRgT6hHMJBqQkYVa2rcf8AG3UP5XcuVcZAdsQo82yb3muR8pQhvA4htaJu6Jc79fY5q4ddh8d5P1n",
  "key38": "3ZTyJjr1bKui6nmfRDVPGwkW5dTbjb5SapJqAUUyvJr9w1YqMroBo3CUKTFvRjevEkeviBFj6A9VhWABdQbKj9pm",
  "key39": "4eS9WZdisQkZy6Rsbc4zk4CQCRk4cqXReBu67jQyoqWSD53U2pAH3PGvrkwJLKXMnK7dQ55j2FyMR33CkqoyfFCt",
  "key40": "3tk6CNyJFPkKfo927B2VmrPWBin9DkEkmYKrqgoNtu4J4jRCA8Cy2eQMV5xASTDtJ9W5Qakrim5BUbRppttNdpPi",
  "key41": "38wpVHdiWWPiB733C9hwAMnpofM5tBGbWTUKsrpaHV35LbjHDJsWFJjDbXrQrVNsGT1SpwFxQ6DShmAgPmQVgcvM"
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
