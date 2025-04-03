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
    "218hAFLPpG5p7vo2XjzNAXM47M9GeXD8n1sL4cQjNHj6veqRs5LTygyXFo7J9YyCdRwJhpHSt5AM81zcEZFXmvqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "418G1yGmdVCnb9DXwQNirNfagxFWp7HnFyoY7qUiTbzPYqFoLqjAxEEKLbjCkkWCjgDK7bdz853wA9ncLj56hHVD",
  "key1": "2wuZz4bxMPr2B1GVHw2tWGjQkyysnHgwx8SgfPpL9HjN8aBivjRtfBrz49RHMB6thjtAStN5cmwjPbLCCpwvsN2v",
  "key2": "2J86MtqRyq33Ehut9KC54P78j54FRmm8sKn3GPewd922gFWbcS3K8oss74pUcRWHNNR4vLKFL34QcE9g9Uxh2dkX",
  "key3": "2jmNc4CPsEE9zikA6Z37BLis9rzMeZqJtHvaKLN6tXheh8zAAqFUbWsMQ27wXUHDM8QkpTjNtG2MN2WyfiDUTNRS",
  "key4": "3RxsRPw4D3jrYroogVB9wxdHdW9LY5rTNPsJFp7p4jrYcRXB7yxsno3SCuVZEubEHsv6buMYUhqLJMhz9SJPssmA",
  "key5": "4pVNHqeHk9jUrSmP8ii1PWnGiAFdndZRiQLHbnbV6XdoC8NNAeypdt3kh778dbnHLpNBgr7LFvVAixJ9itWWkz3z",
  "key6": "DxgiMJf8PmPzmeBsiFFxxcAfwBirhk9Ypf4FahWk3xMQ9SW27edcn9TefLJG3JgF6E9VCgfdrChAPQxyaFB8PjV",
  "key7": "4VD1jiQs7KTDpXrGtG4Ss3KWS9DhoxccJNVZtMHGRmkUfpFfzkcArYtjgWGW4Fd4HSjznJgaWRzNSSNzZr3PeSjB",
  "key8": "uZNePKAZJ6iac7gPfcx7o4aYLXqC6g1Wz6AZUimkx4QjCpM2Kscb8FA2aWWrAHo3ySkxuk8hT3pzMtd9A13eMDA",
  "key9": "4WZfA9BkbPkuwJ812p8CTgX3jbKim2WjN1WQ6pij7Y6oAUFPKkRBkemQ2o3wh1RPzpK8E9xz4GJtKh25hF8eewwj",
  "key10": "355GwkiXzrfzU6jhZByJnubcTCk9gM1gGBHwKDmhkGLnKfyxcWmyTaSfd37HwfmYw3nrco2pok2bAvy1YCLhjQhE",
  "key11": "43TA36orhtTFag1dqs6fYAMZtBE1A1B45YaqXJixso3RPbMAu7vsBnpvPT6snX3rfgXLkSSzqCjBG2MatsgqJ21n",
  "key12": "5GoTGXsjLTVauBxsW9TFpGQrdnGW52S5RTmur3KYtPGBEvRi2WPzWYFKkfkVJkDeem6wAGb7vJAozVWPuLmjuuvn",
  "key13": "w8uKjiDDYsGLGEfg4uqyELWcpVWRW2V19g7k56uo3k6WHB1jgr3eSuzBfgwo89mAVxpTnxigSSbRshZQ2UiCnm1",
  "key14": "5Ehja2vu4MgHynL8io6MvwUZe6qJjZ5PT1StMeoukHaw1nZXSxhwMAd8KHQJaUY3T8KEtMjvPS2Qbzpkn2AZ3mpT",
  "key15": "39RAHwnLjK9iVsCdcZAsgb9JjEuSGUvHacbssddoawaXogwgAFKnxtTvSmM63atmikN9mE2vuB1k4Jvna5avd3Kt",
  "key16": "2XCQA4MUnjiCzAdwfyjgEk1CuKNdtv2Pf5YrLqKyYwsC9YuK1puQxitYo8zx6wqZjLLjGknB4TDgMHU5B6HnGW9c",
  "key17": "47Qken9cP6yu5aAbe5ABF9rtL1ygigjc5fSKQQfvT6PqtHRhCNJUBMKnEEQmPkmQepVuL5kCkCLkytzM8xHsXPvP",
  "key18": "R2SPpeBMTDXpPBaqNkxSRRn5oLms5c7H5YGNuC9HxSgL9wXHYX1KZkFy5at5uFRAWt7xohCBMYvZcKtykLZLYFh",
  "key19": "2gnWGNkZHRdAP4WDSCm5SeaqZjUxNJ3dEuhWuxrvm4KjBj51PbumKphRvmRZt9fkbUYvSokySyLmbcqs7hxbP1Rh",
  "key20": "3j7gSBdmWYsiUt5bgDV3fhEANc6PEnYYh2qVdcyZNKEzTL6onoQRaM5S4s3ssS9jReuDUd3mrVxCL2wW2UwDKsPD",
  "key21": "2e3qa1QJwbD3BBiPpQUedcBRoScVEDgAh4GL6WGPptETwmHZdS3DMqXNqZsn3c57UHdx83K8SxRvvrYTtkxKq2SN",
  "key22": "GFo4jMTzMKsdcWRoamsGBdemdUC8wGWoKqYRsHL5Z1FJHm6ejqy5mZSrevDTzp5Rrvp6Vp4KcFkuPZF9b1mENMv",
  "key23": "5fz2o71qpTRbdLVTHP2irde7AQA7v2YnbCvTm4YB8jmD8hR34jVJVXkCVgHgRuc5P7CWntWHYfwrBTFvCE7W32CL",
  "key24": "4or3KzwtYZUhJih5qhuHd4yhKd2NoGCQh4aPCgNugcvJzX93WrZQbiGWw1WvHBXEbnJVvWcuZhxJTyjQCcpgno4S",
  "key25": "5GsMrfNobSiRZR7hSrpEq9ge6GtD4fXNw1yFnpek3kPBt9pjzWttPKL9JqVLxewtucANS2j2CWGUfxyPJ8vWGYLB",
  "key26": "4x56qFFxDKDd1gFQS2ax25w2yLg8iRhFqG2VvxUQwYSC7H7KyjhTYEHNmhDk21i62aU6yv3d9qt7LTrgpCkNGz7z",
  "key27": "5nEoYzfiXRDAEsDgunV1NJCGCqPziRBUHP7qX8d5XpireogxU3y49m17nR4tiAByYDMvcXttXb6BX4vq4aaedePd",
  "key28": "32fFpaAJT112tTz522z5J6BurvcAjVEVNZByW37w7M54h8Knw76LRdnhoQ4gB7DF3BjUJiAqY7V6mEgLcaHL5Wu4",
  "key29": "ZCBa8eDTVCsyCryB3XadvtEbyCnFZn5xdwvWDhjGH5joxhgRK9Z8UaTgmGh2ZvRSyFuctPg7m16NSQsHSLsWk16",
  "key30": "4aGHYn7gZjjaf2bqpbG2sDdL6iwuSY5Y7xrTaGhpdF1AyfTRbr2Ux1LowbcUm8MPd7sZJVfdbXz5BKQuGg4t5eg1",
  "key31": "4ZiXVZzNeP85aqtQtd91JvYe7E6gK5bkv8WfbawhgXXkAKumt7f7CxNYqRyTZYAnpz8Fa5g2yMK788vDGHrM24r",
  "key32": "38g4qz8iYHVXoyipMegrqcc8umcqJRkyGYyroEASRRPLBZVr9Fc3a8u7zJSf2njvnipWaTXPLqcE35yw74pAK3yA",
  "key33": "44A77yR7NRyV2QCimDm5SvzVprUefQ89Spcajx9MFRGdA5T9rjzmMT9yQfSTWCU4eafWDVWK7abTAH16hjzGUp2C",
  "key34": "459FDEpYiDoC1ZZ3nk2XVTsid89RKtZKRngCb2K7rbZh7vFYzaCDefw3xt8DZUYUGek8YebZUCEHg1EJEYBX3wV2",
  "key35": "Tuz2wQk1q36GDTjt9baCsUFvyJD5VJAQryrgEk2JCzh3hkMrgju4pApFgqz7D8CsjRXk6mBVvsW1d9QkRD4R9AC",
  "key36": "4mEe1ifvbxE6nyNsWZea2g9XeRt8d3qUdnDBCde6hwdjwYqYVcVYryfJLFzRaUGdQRVhagvmwkbMEFAoC69uEagU"
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
