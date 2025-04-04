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
    "hZpMtHJ1NdheUJPHhTGGKy5kPFh4TTPoHanP5UcPcy8qE5pYvMjg4AB4XSwy9hRkYnEE6EvjLsAy6XKsdhiJjg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9fMTqQGSsXuCPPsaVkQNjzHqHLMnPLiwkuHbFt3gCEvqfiePpT4yHcc3is71s5oJdwECdGsZrZVFBP6z8nFDzQ8",
  "key1": "H8q1zvhMkrAEtX6rtpPFyv5B1BEwFowrV1r7rcewcWxnBg1zgsx4tVeKQ7YRAxtPyqyi8WnCRxjiaA9CnxVgikx",
  "key2": "4xrQaQKSGFrHe4RBWe7F8471UG4YNebEmZyJUdfHzSFMzKwtdMuWLJtGtuWrV4tn5Hm1sTXu4DzijfNjmMBAUZiE",
  "key3": "3ga4EJwvG5D7C4vzYJweYCJWnmDPbQr3Ee86aH8d6b7NsBgQDq2MFJj6QegPba4phe4mqFr2BowHJCHLHagGYwif",
  "key4": "tNSemC2rf1UyCQFFcF6RZi7PYZKqQipCb9yrfxkUYTK3npNTNuqwEhffQs6boxfUf1SgiYBSgekD3DGnRSPWokn",
  "key5": "rpZQiUUMRNUKd8LvqYVAPtzP2edXL4REUWAsQokkp1FC2dLyynZEUUi7GWrx69dzmrXbpEMfpbGyPrTiSKUK9eV",
  "key6": "4cxbtNn1YPwHFCYACmTc8YvCH4X6wsvkpa31we9HZfinv5FQDATqA7e9K9WHPNkcC3J7t25jr8AbzBzof6TKA9VN",
  "key7": "JCA7PtSEEjennhizVhg7d8H3D5jzEZRGKQtodHadiEVMgJx53iFvxU2WA2SFyqabmBaoc2Sk5urxYG3DuwDgoAQ",
  "key8": "5NuLQiYJYZgKSEe7Ree12WtF5oGetgpquugNvm7WfGLAQHMvmWpGrPjmpmr2EvTsZzTCEgVwUdzwvxs5xX8nTu2c",
  "key9": "4wP52CFSGjAY7rG9y9mvPzxxq8r1XiDm72XmH9XcogdpC1NyxzsRdNfVAJBahjCUPqtrJWjhpWxaxpsgoNMZVEz9",
  "key10": "2aybJjp8tEgd5zvt4cKVmY3hEguxHtkjQSLksujWmRkmUFyBAiynKcn2GdHuCSfuXB16KjNvBEEAfkFYtBTsAhRY",
  "key11": "8GiMLPSCfw7f134EoY3Gy9i8uAsnhaQPA6f27Ka87v7wBkrADawSn6CyhQHFZw1p67HqfsN8R6mbfPFJ1KoL6iy",
  "key12": "2uMpoRftVpHuhgWGLQaz3xjms4qXzi8UQMe4mY8AJvuLaYmQT1MJ3xcZs8sEahfq77mGn5HfZMip7MDhCzaCTPKu",
  "key13": "5owhS639vXBQmhCsLAo7EFSVUqFsvxi6vGfwVaq1ZbZVqSNUXiw5JRJFHREZnW8xqKykABMiz2QKJ4XdEAht1rNn",
  "key14": "3w48XVjjb9DbBdRzR2Fw2J3i1orHPJxr2TrtYrhZv8m1TVHqF36XtR5dhsfM57ha4LDCARrgQWw73mGYiDPAULKQ",
  "key15": "3MqbDaqJ8ZuBM2oH4Ktfdy6mUz1FnFDP2pjXVAtYQLcBtELx8DFcBmQSD3RSWh1BjVbDfiFjXUB6U8oFLZctMqmN",
  "key16": "2AUiKzfUu5DUwjrYxpEmjtpmtyT2RueDowQid33wuLiUnGy8ZQVDYfjxb2W4wxDzNi6hNhDdYJJf71XobZf9ZtGh",
  "key17": "4A6SxFxB6RykPn7BuExkoxSsBWLYNjFo1Sq49yBkcZFrHNXuo7HFMHqVrvqHG59WzMvyqRcAYzdgo9mC1JN35qWY",
  "key18": "482dSdqufJ1ySraSpcoCWUzwMXUQfmQxJZySDKFsbdLEYJs1i4kT7irE4TSi6M6e6qTdEVhRZBwneHG4CtewiGke",
  "key19": "J7eeK13CMwFY7eUTzmzS45mtvNKok874Eoc33axE1KPfmVpV2eiiN8PMkpT1dZu8K8jfLYFocnUFqa21kyDKKoR",
  "key20": "3yCr8mroqSv69Mo7QxSD84wBcrtgUUjqgHNuUU7Yr6kAmQoVP1JmNjtpKQTtWgHQRoMb35j2af44FhCwyaRxxJk",
  "key21": "9fvLESKMyp2dQDA2Rz4s61R9yRq7JYZFVYhWetKTczUNEaqfA8nmqyu9HGwyQgNSLngFCYTKkqwr494Q1qTmYLt",
  "key22": "43krEVWfCNmGk6VFe1nwrNDCmWMnMZSp6yxA2rCLXKwnV6Xqp5zfqhrFyAqCAE5YyawVGrqvDsg1CCJFgr7NUqKT",
  "key23": "qXWuzb2injpngmtTqAkWp6zdBwqSZodi58ycTGiJVaKwv6bxcp9wgM2yJHwA9MW1sG5nph8mLhASHeyY34RdQTL",
  "key24": "NmaS6mDNn16ZmcjQqChuGE2biPdSq8yNtiwmTjQZnuN6XVCqkUueAx6mKiTivjrJGSmFG3bNLfejPVvHkQYxGwL",
  "key25": "eJMfzd2wMw9R2gPJDcBQCvT5kLBtUhK8hm3EXuGif491XQWdNqvu73aiwwo7ELK9piEmRtMTHrxp844U8vJ7DKR",
  "key26": "2kAhEhsUMryNx9km87FZW76Twhzouw3iua9tJ9pwezubkVcDmGNdEyRm28FCju7UfUzWfwqdir22zWbCT9jvicp1",
  "key27": "3SGAHfvxE2kpR4k8N4M6kx4gRqa4BwW4GedGPjYfURUmZ5vrhh2GcZbJKe38SiKVCNY51PbxTmrqoSVYGKepTbmC",
  "key28": "38RASDuDjAqNNAepbZcP5bJjFX4wUoWNnqzpR8m23wUZDJZKquZpMowYED9A8fHsvAuvgKGt7VcUKWWhgHL6gAcc",
  "key29": "4peAYbSgfhjcQZgojTQtjQhEZ4C5kNkK4fnefw83rH3vdojMzaqhifHr3K7nRtJW9XWeH8ntD2ZGJFpbvH6RRFwP",
  "key30": "3CXEy7nc9rdKcemAgUWsUiU6FST9p6HSVDRNypvcGNAjxmFMPm75Mz54r5fQQfb69K8Gfiu15SSzwaLesZmyUDY2",
  "key31": "C9J37ZbMYD1Gc3GbRVmo6zu8e8KDjwPDPkyNgocRP3K5qg9xBisuCfWn2tq3VS86KDxsM8q6HP6TLQ5e38Ro5Aw",
  "key32": "4WTG32ZsetXgZG8wZFZW2WrdF7V1WBgJWN7UiGmjZyQVDmGFzfh9vomuQEZg9jWETh11ZrNnViLGFn9spS2Jg5xD",
  "key33": "3UK4hdA7d2obQiQzHMvGgJE51QLudHR38TsNAWsDjsw86WrbDMwFYP6xe6NVvqNUckcMMFZddmeCcExmyhWfEiHg",
  "key34": "5tYEgYovpH7QgesgKiK7ZnupfRKrTpnowiT3wWFPYGJxmHtytXEPSgwxq2YpXCQhaNS4bdanemyhm15FEYUT3B5e",
  "key35": "29f469KJDaxZudya53pe5VccQpfU52Se2d7dvDyByL3ca8xqiRzSZQ8tkKGeD6VmfREbx6jvWyzffY8BEwawXbUB",
  "key36": "33EvFpwzMKYQX7YLXW2XQynQ3o88C1zzcNhqAFFGxozMMgCJkjkrbssyZ4stKShM9e7CfzyidxSjP9MjPfrxQQTh",
  "key37": "Lw9KA5RRraJLxY8GL6B2UbzEQsD5wyWWviqYjgNdNHvmCptNYrtPeZrMDRxtPvAdrgeQnKBV2pviLugAEeKCE5N"
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
