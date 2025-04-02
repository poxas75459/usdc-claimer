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
    "2XZ4wWJHK55TxTgH15MZfaWVHggmUvJN9ee49x4eLJS2KN2MQRkv3eyAy8aSkgi94oXXExqefA4a78LXauj94YBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sT8Qoz217JBUdsfWcQ6oU34kaXN767Ts26dg14aiudKDfpnYHhFT49xRuAahhVe25koLZ2iMSiW8Y8F7uAg8fE9",
  "key1": "4sTfAQMJQ1iWvpvkiVwtYUCLjnaspyDV4jm5hKiJ9wyBZSsqvQtDHteNLqBtMxZHzmQxn8eZYQedxWBmQNCdhGKg",
  "key2": "4w5Rro3SPZGRS3hWk7rSWTMY7yRkERWEZanCs24Xdh8LzkErvu4agS8AbExZFvp24aQMauAh7FXx58fC7e2re2Fs",
  "key3": "Xn19rcypeJmJcij944G9u1L45NygfnzumYL8oniG8VY2coqnidk9Qg2WXfi5Y3Q3rbo6RxBoU2X5HdH8FovmvKS",
  "key4": "3ku1bWqXpqVNPtM1zwkFJuYS5KNdWBD8XGPxg4B24WWyJb4aKe12gjv6zEBBDrJg63eTj856yPAnwqbW61LUcBLa",
  "key5": "4sUvniyCSwLcyx2vqtgN8EqLFirB5nChXfaTB33bNAvrPc6pehUdCegK2YQY5JBwAR9hpJZZkuc2CYqKTzsWFcDa",
  "key6": "5Esw9NRCP2Pcvfrg3bwMnd7YgVGNt7z95Tjy4woDhfpeuU1LYUjRZ1VysCQbFF3FaQrdoYdfGAxWPKazsxYjfXHQ",
  "key7": "3VDk7wKLwRWbsSCozSHvJg7wmf7XEGz9MwXh9PyjgmB1StjvD2U12prr6Qr4HhVf4S2PBoN5z9H9qFYoanmDgVxL",
  "key8": "4hB4CQu4H1fhvFbjb5HEmHXLmY9FAqR1FBv2DWeRdsbP8qqT8mvJqLVXKZuGnvx528rS1kxrSxzJFG3targTD5Mx",
  "key9": "53HeDkpPpv9gfyP3fU9isn4sVK9L9hWzXF7UkfXE3pYy5P4L6xj8SQbBfmCKNvgZ3ibD8nF9F9Tk62431GnsFx7o",
  "key10": "554wXKKc21VG9jaxVqfTcSVSkrTQdk3ZxrrHwmUX6gdD9YF8YYv5kdhLxvMwzJASTxUxgkHmt1MtBXhPwHzwh2NQ",
  "key11": "5achuJKBr1YBHd8htJ7oMDEYYg6sfBRSmoGmpzLxPBFsURQGekQYi3BwVgcX8Jjby2JwLmaC5idGhSJTvTYGKdXR",
  "key12": "5zwzca92xas9aSpjrMtKZCCij3T1XNfXr8bE5J3HsXsM6qnHUEDLWsVRzZk4Qis7pskGHLmwCRKGw2LJfxc9Mgcs",
  "key13": "5BUpkL7FhVeNjLFtK1BKFtC7ruVcCSPwYPo2P3ofV7wJkdUoU3fwkLZ2eHXoDHUAWzKLcQ4uqzec1DyyqX41nqY4",
  "key14": "2m6UXhM6xo99pKEuF5F285xErDQgUg86eWMoLjhs89V3PZdUMkBmd4kBqN7pbXFU2YiRDe58zg78udRWwm1zygBq",
  "key15": "5TCYnNXCKNgjCvpqmDBo7Y9Nau8Qij47n29cMyfiuG5kp5vtQUZfMrMnVjBdfqGDPuBi2whJVaoapd3fYvwWUxfP",
  "key16": "yeEiUzYsS4KUs3ZbB5tqWYZjUYe93wvWREzFXkfnqRrcgUN2VUPE7YvQKPjL81DKJSaE8mtXwCstyGVUtWJvSWS",
  "key17": "2iJSXtSGaiXeFvz8wDbUNRtNSSCPTK3SS6cHqi1aKAte3BBfinSEnuzdAEAxvH3WtkESo2HPv4UdmdKCWok7U67u",
  "key18": "2HtbiL5mDdNjPrUSQrWcfjhcxzxFPZAduy5QrVsQJZq6m7N59qp3MJK1Pyr9QBQicZ5UwpgdVNHNdLoyzenDTyL1",
  "key19": "411jWHMcono4QmTq1KZV3psWj9x3HkpsNweerM8FVpLA27Qek98CaPUQKTekPo9rVrRs4GBVqz1NL5UwmzFFqdJu",
  "key20": "4UgNfsg21ADKL8r3kTn8YC2HkwqdEnvYbnuhFqj3BNPWKLJ8Ew7xjchkGFFVwVNznASKw5d9z9mpNrb6DTqQtPS",
  "key21": "2PiheShboZSExqXwVU1zJyVvtP3pEvu3sst2HxpfFKACFXgR6NoyNr2M3NigonE4bqf9B46TqUREgkmtBeCv9pfh",
  "key22": "wwQjMhL3QP7SD9bRq55FNyunggATRujU3qx3J5omGA4W11my7o7bp65yEMPp13irNNAsho36nYanLzjD9VY91Kh",
  "key23": "4iwC2ysrYS3AspsPWf73Q7GvVXME4jCk2Gm25etWJDxZZGx5E6AdS24MwAhYeJGg2dfP3gyFgzsNeEMxA8LJ38sK",
  "key24": "jTDZ5Mqsz72ao61oGoimiK4Z4NnpjTU85K9GW22NkDvEP9SJ4sbPFiBgo73SmjXf1U9eBVYLjgs6zeDFU7yMAti",
  "key25": "27oWGdjVjEK3jvbjvCWh5aWjeNS3UGFSvZQYSwarTiXQ2b7nsqq28F5BNbaTDhRuWxyx8Sg9d4BXK6yK5heefN75",
  "key26": "5zraHGazSNC5VeTNgNcnnnrP8JGcgdKeToVLDJnbzy4mBTMNHrP4msKVRPRN5iMVLCRMnvvvrdLFSjSjwq3vnctq",
  "key27": "SHD21ez9rHwPfKNjVeRM9NB3RSW4SgagcGkQcNWrta93ykGrfYuumVeF4szUcc3C7hQu3BG9mLznMcQ8LiqS3av",
  "key28": "3SSiL1aLhZhNTDVfponZUT13TsEwy7PFUwus1AS9oENGD96JCgTNfS4YSNfdAK9hQFn4NUQ17dpADPryPLN7ZGQa",
  "key29": "4DNNS2MX9sKi7iNxuGZjkbBgvEoo56Qsd9MSqWd67pP1efKsJCZA7aKm615A4mDi6LfqaPfmYK5rndKL91x7sgSU",
  "key30": "5DvPaJXudasZfAxYrNGuu2CmVvCfNxMGe2Adg5gy4rkGCE9oSSHBspfHQ6zgnEYxktio572oDzCgYimiE93nyyUf",
  "key31": "3HLVxfFPvQonLz6PxoTBKs72oGWUq8C1qhjj7PxP6zZhU19uit2kSW2eCK1ZSoND5qHRLvEN5fNwMgvQBqugeryf",
  "key32": "2U2kcKa1HXViZTrV2kLSvzqc8vd7BQauwJx4yvbYkRUNFnFShDTMPVv7JAeNTJAWFkitSHHizq6xEsX3UTbmNhK8",
  "key33": "5FykApXdJGosnzawkGWmfyUPSZ4yCMjS4fxBvuWBc2tXX2LnJBEhwHY1a843PW3XFsymcL4sNV4gjxqXVfqQtmy3",
  "key34": "5MdTVAGyfk9tU5XkDz7AWwA7ThGh7m2CCuuBbXvuFQ16pjmdJxmQJT2W2osp85k3u9UvAhXJ1vfGWaFx2BojqWj9",
  "key35": "3LR4XUNnhR1Re3Mbwofmmg9fBwSeY8EJVi43jDpJhDCY7FueLex95qWigBrj5P8mizxUmn5k7tfSqbbfVHFwxU5Y",
  "key36": "3DmPuXivMqYWFL1iqGY2BUcqERJx2YhfN59wtxBVN8xtsjkDVGCR1TomLuJPqcjVAKYC4QpGHC6s95PjgCmTzaKy",
  "key37": "4wERNeuVTiKCmE68bf5tGdQQVgKdELgQ3Zdb2JQXqGYZpavzuZLxCsu6QHevdsMwSMEkooYsJHFHJRFYGDf9r5Ku",
  "key38": "2wNNkfpsp1gTbY5pXgvCs83cnQsG8TAjTTiAAXXHLvJA9Er57xwFWxK9MpQjUDadQUFLchYYxF4ogz3TmLr1y2nR",
  "key39": "XLhhDBgn26uGpwS43N3KmqhYLzvvv5T2KGYGX4gGrrZidgtNkA2bxSoMmqwZqFcofYyBXmQyAQPrfRpbSCQrxG4",
  "key40": "3AH3sUJwBGTdsaLkjdxGc5q2fKTDQDcoatC6hf2q1t941umvd7t3Upkmt3hZ2joTdQFheNsALiUKpyg6ECFNsUnT"
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
