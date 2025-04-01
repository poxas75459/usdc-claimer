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
    "5QKa6rwKBsSsWNmuXmmg4zepy4W9dmPS6cazLqqoCLAhjVkHcUcsJpN55YfdiGbXVuPzVegshXYw9ncD6Wmx1TCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64n22hYXrhX9ZDv45Fv1A2XCDnEmGW16ckQxAeCiJAqDyyTVkCbbFF1z3HJmwDv5msAY28S9wYnf7BJyK6CuQdxF",
  "key1": "47RiB4Cq2kvLGDtACrE3AyYq3U66tiVSJwU6gmZKrCqkNok1aoCgHpjutbf73JxxyPJDSGVVB42ePCAun9GX52wU",
  "key2": "43ZSzELgFbd7TmaTeiN1rAaeBknRaFaMtHk13AQHMgZh2HK14fnVqRrauuiHGhE3pQs5TWD6NAYM1xVPXcYCLc9k",
  "key3": "5UCQkZjWyoWp3WiLFVxACdgpJTwWnMYv3XUKgwWt3Sk4eaYa9WbmzAFDKZyqGUbRq3pEWTgvW58FoQPusvQf5wHT",
  "key4": "3J5Tf7ncRL2ogxusdj6RFStJtuSmuuQE8rsWMdJEYfu3DxuQkim2U8YcaL95fa77spcmF3TzhiRHzjWkhBG1Lz9Y",
  "key5": "9zEoiMyFbfafcRJU3qCeL97maxQ1vnPooSGzWmozyrP7iZSsNJP2LYzs4PuH52BzDGppq3azdnubDzK978PbkG9",
  "key6": "36yZ4WwvFNeKja7h1CrGK2PcKjztiLcmVSutNzBtsrPGLACJ3Ln3GxhhnanUqYTeXivcoYpi11Z3Q8ef8zd8W9fW",
  "key7": "4yK3NjmJLSNMxQpeFhHmb22yfXEP4Q2MRFVr1axj16PTrXtiAb3K4ZkEgh67yPknRquTzzmqpmiSn3ETwX9PSGHS",
  "key8": "51D3beX9f6k4M1AShoh8G1mr5PCakUzZLzPJsPLDSd8RQXSC1j8WkqoRtmyCr72djyfooKe78KvKZFzWrPobjJyN",
  "key9": "51cSsePFxV1fWZmiWYp1k9vzEaRp1FppEJTRhNZTXyKAzvcRwwKDb4BGEe6Zb3ep8FVDgUUHSBWMcLkD1YfQ4fbq",
  "key10": "HDVK4xoQhFm8myMvWugYyGFNSEYDkZVRDUyy9w7ssoHHNuQFSWQhF8GfaoSV4m52BPBMSPAz7fDJbCwpfqWyLNA",
  "key11": "27VwCppKyb1kpnzGVzyAiafN56k7CdisqwHnbmMRfSz7CXxy7o3u6QZPQh5UFgs9m2CRkFbaJhjnX6orUTVAkic6",
  "key12": "5pXgNJz7d3XaVskuw8FicPK8AD9oUkEWD9T5t9Z7V77dNFtAgHpVDVcY14DrUJmNSRM9DXLh32E9ASUuq9PcBa9a",
  "key13": "3yverk8sTzwdrpzJbimQqnFuC2bQY1fxv3zzQ26jG58KrWgUGxpE43GY7YPVB3bsCRe6LpEqAkpFdE6qqSzbNsnd",
  "key14": "GpHJXwzYrrQjYWQqmvQ4KL3ECRoR7Nm3M19uhyhFWcFhQjgwXLMj5ejhWZeZgFxzku8i8DRU6UqFgsrWVRU1re7",
  "key15": "2ANzyhspjtZyFocBXqrxKey3w7KEJzsLjibXoPFp48p4ynQ7Bte4RhW1GiArhZBLW9iGf9DoGdQuCefJ6sVud7DD",
  "key16": "2SUcdz2BnpnAQSeNxHJH1uJ8VmQDN3Be63SHRzyRFXDGZ6B84maFybbViyMyvrZNXWwcJ7aViWa7xA4d7XaDKcHZ",
  "key17": "5AQBjVyNSawUheTYMh8jrAkc4g7yYCUeDLmrq9tW6XcVY8XMEDW9qca6X9t2CzNTFK7M6MieFsi81koDvBD8Mr4n",
  "key18": "3GHuUvYvWsv1EBbD1cBw6Q4ujqYKJPoUhroRSrconfds9pv7wA28qpaLVqHH2NwZ3fAoTEnQR7VHyU2NP1cNbePN",
  "key19": "4KEwJXEee8UmHbRwThkDDcZUpUbWgHBvagzKZfWmY9Kv9zXNu5twsy3bV4o82MGdQusvVCCU3RekEEbpvh46Xk4n",
  "key20": "SUc8gyZcdsehFHK4c5MnLxhyqxch3TZGa5DPP1vnk1w5QdB5jLLnhrwfAjE4P89FresVSJeharsqnHuiJcP4mBr",
  "key21": "2hAeEcRGBVZkHdpvx6KSuCCjNP2WzfjYP7byr9o46hRe3ntBw5fKFbzoi2F64qizfn3ak1LuosFJJD5gFHA3c6k5",
  "key22": "59dfJJGxt7toLJuiPwx9cQ1LgKWBXeeyM1gWaLtXKamk6iKSJET86raSLxdc6HwmwBcqJPRqnD9sPQskCACiCfAM",
  "key23": "5MFTd6ufxbij4rXbxaJq1Ttax9LgxZWWqi5DiGCHW5fwY8ssKbBDma3d78KM9yW3jhT3cuz8UbJ7XJPKQRXJHeS5",
  "key24": "3GKz5j8AnSvAWu74eHL1FtLhGtoG2LD9s9AJftkfuGPfbiFqcVEuS7Rwwttbo8wDsjXqy7wpWzuyPuuptGrX9HuB",
  "key25": "59QYrzK3jRzzZPiNoJy8ci9oidoDYeMKUHrEWLKgERGNxhrPHsKFhTiHeoCUz8jK2tHe9vpTFkuneyULUGUpZ81d",
  "key26": "3DAN2LqZpbx5giJc3cMQSbcnetvYSbBXy5rkLTmVUWCAN2gFWJuRnqiT3oRU3S8wGbnmPFzYdehnsM5efyRdafNn",
  "key27": "4xx1PAL9h2PWVN9c7F4QLUCLHECrqz7UnYRkYziut5dqiwPQ3owD24Fu7YYVQVwVQKhfS5hL1MugcEUpxMCg1gLf",
  "key28": "3xmN7oB9NmUrmaCPbKUU8GGDG2JDoMRqk6eokGD1Py3iBAZUxiiLLERQViW6Q2hiHuw2xfHDvMc8RYY9ppTCpZFx",
  "key29": "5BbAC2PnPsK8fpoaxpaHZ2BZJ59VnCFjViKwnvCWXDBBuVtKBwv7Q6nBpR3rAemmzTtRVtPuaQNWwdwZA26GrCmU",
  "key30": "3ZPs8R6yTvRaSBrpS7JJ9283kG74yqPmJoXTFnPHPtFw5ma27sDEHZjHAQo9fizqqwtKkrPcA4Ju8U558krScnhh",
  "key31": "rDje4EpnnXZ4F3mn2y19mKy7fbd9nTk1d9hvTwQKuz4jwfBef57YUdW3dsrC9Xn6m1FVqKzPBSxHsxY2Xx7Leok",
  "key32": "hhdY9DQwbK7iLL6tRZbUUuo78HX26Vmn4Np8eFqZqtVP3N2u87fU6m6T9JqeFiEY9wBUaq4Zzgggatbn3c49Zko",
  "key33": "2toJ3C7n94n8q7e2jubm5nve38Vdt3RyiotrRyUqMYVPPv5NycLBvCxrCUhQv4vAgbwVheg45j7BVPafFXdorUX4",
  "key34": "32U9JFtiW749so9yp3xaqbpqB5ng1GDnnDMEesXtE8BoneQbpmvTga2QvXtS3zGw33Di2HLQvivpFQY6t4gZZMsf",
  "key35": "65aR5Y4cvECrKHgehFGjwUP3HmXsQpsPwkjYr7ePro4xP8S3VHkiyjKWVQ77pDVQuMcL9Y3EGsyMH7sT58QWjxuj",
  "key36": "2YSF23G72SRyUTiPSzyQdkAwFVrMj9EdBieqQ9qCU1r955MuveKAC3W7vYQdDETHrYXk6fTorP9eaSToDGFsmFKS",
  "key37": "4tmvByFsyeMnPuVTf2GKuYrMq93x96YKtCZqUmZdHzWPsN6rf7Vv1qy4Wr12V9aswtpocUbYpzMdb6UkEgLkNGNT",
  "key38": "YPrLzPr4SGavJ3L2uoUGzxvadaVaVHFkf8ctALYYvpZyswQxDNcsfrq9w5LyzvpEHC5SLjR8fMuhvi6AWGti7F5",
  "key39": "5JKfPBBJAtmWy2TQ9qhWYjQkbTyC5Nr2tBbhnTVKSTr3t2Df65nWU37eQ3n99fqbaBbYaHYF3yzoWaAACcsXPxk7",
  "key40": "56oqVQa4djptJcmYjNP5kHBriP4eyfUQampow1EFiAEiVPVYbch1JuSY6xs974gEatfnW8JjqaPX2pmyG6p9Ny5Q",
  "key41": "56ZPpzBTtLzmLCnyZAjyntcyRUgBoywGQopcwwiDNNgs3Sd9ZYjTZBNxm5KB7KW5SPH1TuDJ5Kp38VTVTs9Qa5FE",
  "key42": "5VQDkjtwV7Q2GBMjKQuxeCUBoWDxUEjgv2YnMe7X6dzF7eGC7Vk4JPCg2sk8VzEdaXArFLpq9TtWSCNrD5oSFAWe",
  "key43": "4qbVA7UAkABC3Ybxu73Pow6PvMVNLZrU9C6CZJFZZREWLGSwnRhnP4X4FruVoCdjZs5VtVmrgy4n1b7iUtqGLPTr",
  "key44": "33KTMkVbDLDNUznZgfoiANv1FqXnNiFkY4DHTxXymiL2Qd4ASZW6KF7Bbfkm2G2wSfdM9Q9DnrMFic2e5wvUBfpd",
  "key45": "4RUjK35nihHfVuVSgEEBdoWyR2b69ps5ux2DGDodpgH2TWgN3N2tHTTA3PHqVTMfqKs9EspbAsyR5rVdGKjPxjNH"
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
