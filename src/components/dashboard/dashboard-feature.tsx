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
    "5ex1ttjcvhEFgFaGhNaHi5EGYMQfwEzrbaw2Hybid55B5E8EVGawytoJ9kqXD5uLbnpSXERx6TApufWfDJXrpmYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GDrA1pdnXJqk1amCLXbrEQtESNnGAiNPMWZSmXe43oNpDJRthshUEFUingLhXuDFGDa8E6U26jLB7bmmoWeYAnh",
  "key1": "5WHRbvCiLk78sdkhndMZ1E17ZVNuP13cJb8K5XegapeimMhqubmp8VrGqVj98de3wdSASXo6zL3r6m2tyv9J6FZk",
  "key2": "2UsVrtFbiwfvf5Z5NYND1BLQX22FTXvVJdS8NMGuwbXpHTaNYwd1dGCfic5V54NMnaeJjx7S554CdGPZDM41eURK",
  "key3": "QeAW3es5nVaDg2J2XCFuUdyyh5Pz2UwAgp5QhgKJ1ZvhhJKc3Umkw2Fwa8jKtHJnBF4thGuqvUprcDypaaSrxXd",
  "key4": "2qy6oiRATjW6nhWrnoojX6ZWhAk79LaEYgHxtAMCJtDHMW4KZy5cHThH2R3frRUu83C6pjyNu7YT9bgUspSL2C2B",
  "key5": "3nYo48pedDZ93qwmX6v2cKjVVNXVBsG44xgVgAWrbsHPtRn8QHYRV8BG3kDYCAVmcRUJWVRPVzUqAU1zFeTQzq86",
  "key6": "3cLppMrS9e5eS8GJUtiEcWmJxWVCJr2qq87n1AJZg1Fxd4rbdhrtzKC6WauvtQPDrZpRCzFMj3qJs7KLyKwAH5Fb",
  "key7": "2zZXMKWemEycAKdkRscv43zEeBiYnhzmNggsgLUgiNjAeV8Rfmrcru7mUonobNze7tPG6SsydoYFufojSeLEmh9v",
  "key8": "4r1up8QPbw1QWuugimGmTBnk3oMyCTiZAW6XEMzDnN6te4KDA1T2q1CuRjENK1b62pLG1n2FTZoanzSfpkh7CQtx",
  "key9": "2UBq6aaoYB5ir661BVSF5SNCgv8nSy4N5ceUQ59y4fLJF5TR98ZpaWMP7Ze34ma4ST3dacAkmSzMer3SSUoTwGK7",
  "key10": "61GhXGXTCNAmW3irQSsmCvaFVCJYes4uSe1G6U6JXdnas7yiSiPpNP9RpLeyfupccP36sFdDQkVfjAU8xh52scLg",
  "key11": "Vii2CNts4D2entfw7qHJX1tZb8iejMh52pFHTaB53uf51RhDapqgtF3433uVothgP3piVLPvxWkoyBHo1Du71h9",
  "key12": "Uq4Fy4PSTrS9pBWEdLTouMjpA2FdP8NDkVTEx9EnAh9QgeKwzmtD8JjMBEgNjgEDFNPWBcDR6o9JLJ4kF2PmCRd",
  "key13": "zikQvzbRSW4SjE9Wnfs5v9r6ciManNA9bG4GjdL1zkByKD79qbYJsSqneYFWA4v4mo76FFNjr2tJEPmgDkdA1Qy",
  "key14": "rHw4f23rCoUJmRwXL5jDdsxEDB68dqPNnZSg4Vf3GDqpsnbLH3uUEYpFy5c769haMSb88W73Libd2AgAvWL71rg",
  "key15": "4fY2czin7ZRJ473RKyPVAFDXFHYhMcDtmVYkm3TLVyzr6Td959HvR3tuJ1V1GZspP1wuAW89j21FxWu7YhqncUW1",
  "key16": "2pbPSCSC4q3RSbgXjA4Qz4oJnKY6S9eQHoeJA6oE2emFw6ujpMU4aPHGbK4ASPxfRJkw2eSHow8ptPvmpkntsRcV",
  "key17": "22v11quUmaWnhNMQvw5dTeUh8GwKAdQgkDq5ECmCe9A7PtD9Pe8udLTrUoyQJzpaoPF29eqPEPUisZycCim22teB",
  "key18": "5nFrUn2ygFbWn9RSUND1sMPhjhaLoDZqxKfsRc2cEn7rBgL3oZ58Gy3St4UCaAdzfwfymAvN64i9R9G8pE9BBiTh",
  "key19": "2Nvo212LuQAkQzJUatx3smx4d1tdBma65AsvDR7uvSyUeVVNg8hhagR8Bdm9NPXtzKXryM5MribiMTTVTiip86wK",
  "key20": "3qLrEKhdWcUYFxcp9Q43XTg41Bc1cLvsmNGwZFdGThjLX7feYscyzmrNMJxkZvUfq8XkVA37uhkJJq4S2ZfMA7mB",
  "key21": "5htvwq83G8r2fFKfrUSMFxZ5fEyiw3Y5gS6BK3iTmLnHaiDG24g5NhKGVeq1BrxZwgRwbo5V2KhdgZLw7YyAxZbr",
  "key22": "4pCbFjDNNXzXyrZsbUNvTnJ1MSSaFtt6PZFt2qri4amS4qNadFrmWHFGJZ41N9DZdzvpEjgxvQP5zmqvGgAYRf44",
  "key23": "3SucbsfSj8wTDmJgUBvLCZwunrN4p2PPNQ7CgbCLFqrWnrLtB6gcPK2N3ogmLNznuVEFzuqCjjjUSpDuB6x2LtcP",
  "key24": "qZLkKYzoGrJRKE8uNGYKTpipz6aLcZQjHFB22YDc5fhqtFFkWjL7uKoKG4tsW4PfnXkn7zbJXRShiJHRo1Afo5X",
  "key25": "ZfHt63jVhnoQgpQrX67KfcS4yrLyoAv9195kymrDssmr1qq2tsXcPdC2CJnJiWkG5pBtC66E9TK6vh1nMdjM5cM",
  "key26": "3wLVoB5k3DwmGmjqWoXud84oK23EgwkJB7fJPaXPnZW9539UGLLgdbtgqoCpnL3UyCBT7Hp9HuNXRQbQ5kibvh5R",
  "key27": "2jujmYKr6eFd6Wm362xQ6gDh11W9V9G6iRWX4Pr4LZ9fmqSBYAk4YWTNS9N9938RQJ6sCHzTiJWiiVU3ue5eQUjJ",
  "key28": "56FNZ6xAwQqnLhdEeaut5tgXLV6Mg1qNovVGMzcamX37fCjagCCwUsK93fhgzhdGZcswy2x73q3HkqGxk2FFd9sw",
  "key29": "3f9m64wmXChPMnUSgiyXN2rf9KNcn8kTJZktQgK99yJmc9dcnGq8T66tBh6pVGCZ3cATMND3pZC7rdCfwGs7NeJt",
  "key30": "4jjA8Bm7zKmnAgCbMUyMg7YpV71zktL77TFQUs9JnCC7Sa4m3Gg7BEqEpB25ejrunm9EeJKjyhbQwRrKajkRjAwa",
  "key31": "4KgG8xs6ojRyJ3kFbHbXXzikV4i4MFk5R4LHgk1thQcWMaUgGqh3GTVKrKgmzCUe7X1grBH6EsgyrYSs9ofdgqkb",
  "key32": "4hZxM6dzoWNz1DXkZCuSU6rT2admWTvdWjCoxt4mU3GxwXRorm6E77HxQE4NdZc5g37jQ8Ra8Lj9hPGoFNTxMmMR",
  "key33": "2vamKF3WjdCWXv1eR2VM6ie2YCGemV7GjuETc87Byoc9ArSUQgxGCyNpdr2ocUYSruPznFwGRFvkQMq14nFsTmHf",
  "key34": "42ES2bkhKmxRUjAx5kdnaNmhFHVBVqAF32ENJZm9jy5D9eCrxFxgT4Adu9JLx7HUSb4sBQucvUT5JsfdLDSbNvFL",
  "key35": "34k1LNBMF7smcjfsvtGPZT4RyhDEQa5VGtp4AcWpAz9Yg1aasoCJW9AKJBeZNkkxqVL7jY6omoF3HvnMdXMYim1n",
  "key36": "148KY7RfLYCEs5uZr5KVGoPzWvfa9nT4n4TvyZVhMY44nvbxENHaKgvkdBXYdWHQJdhVgdufLGHtgXGNw8tnKR5",
  "key37": "5ktzGYPRE6QB2aFoEpqTKoEUsEFZfGQn8Zhaa95Qytx7XgTmo952SrbeAB7cokafK29662gA495LNFgeuVFMzVtE",
  "key38": "4WnTeGd3ezAKmiL3SRMSVaaoKHqoBVPUECH972ktDvuwGJvEQSUuCpwpUuqYFQnGseZi4krfpZ28zK2ZKVQoUUuE",
  "key39": "nLpJL8Q7SYjCABdWx5zotiNxqvuvjFHoRqLFP4ZWrVTdkdNtiJALq3uqhYZc7WhKcTLC3wWy4e5Dav98BypaZDe",
  "key40": "5RCHbNR4yjeQwPCkByWij6Z6XJc34GD4MckhBbzgHdQBwz1QNQzgzh4nXDPJEja3Y3m9jqrLbMQNkYcedUjme83B",
  "key41": "5NbpHBtFUzPKhHSXgScjCLapHZhP6u5JLkZxTdY3UXZKwq7Yv5MZR8NUm1jm9P7mQ7kyhuUXXj9ezGuvAY9DDaYR",
  "key42": "5gveD9WGs6johEhfyB3fDvWNs3a8qds9AkWLNLe8TxdHgsJ7J4m5raSDAsRZbjqxCjvd5WZzpmwciy47whrAZdiE",
  "key43": "2nsAN4LfnF6YZnEMskFzU5UfgZvY9nsX77Ciig1nvq5LMKp5y3ZVkmAAaEVGN7NRyD9eJruMwH8aPH8QvXp4V9YW"
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
