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
    "53xwr3wEpVh8Nc8rgca2gDcUnF7AoyrmyZdQSyHoZT3MFvc5HnmHpwCJYTBq1D2vG7zcgitp3V6Kczb64cLZJ6DA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kKHBnESNCXeAQVWMxQ3Ptsw36sQwfsmqTSHA5m76JRFhTgfQVMPid2oMKe8arJLPZ36XTiL6e1H474brS9p1bda",
  "key1": "5V15tkCZL9HHgpVh4gyJjksWwXj6psR2fuSJZQj19GsXVp6XZ374naLB79v8p3hFabM3oS6pbJFgDDWcmd658dmF",
  "key2": "hkTfwA7Zcyp1zyQZUpC8KTsMa86n1azUnUHZBN73NrLomNdKQow1Gx99moyeNVjVnQouB5tE2mUnoVqV7d8wKuY",
  "key3": "hrBESxBAKMCAENro76DWFhasEpadr3UCrY4mFZHLvkdLWSWYwfGbm36Nvg2o3R4ce3V7t25TmGDkCCRRGAW1y3s",
  "key4": "2LHNWTPRg9WdBYugv8RvmPCPArRzXpaZttxjJyMfF1TG2CHBesMaFxc9qG6qpUWWeDGcidnKQ3vsji1pLeuEe6ZJ",
  "key5": "5xGBNiUcxZmRfQukf4AkZVANrQgevzm52soxjubEALi5LghPQydFnGNG1FQzsbaWCSyhQGKdtmJtnh4Rmihj79DH",
  "key6": "2rYVKStqsYfdf2T945XNX7wKXKrzeaRwmYN7mAuraLTwcBhYqD173pER9aLkT51jJpxXrMQ9hoJyfoSpkWrQf8PU",
  "key7": "4KVFx9UoNV5hRXLsCAtb9VCoAZ7RXPDDq3f72FfVN7M1DSYioNbeEARabZnKR4wfwVkjQeo1vCaLXpKbKAiJHyXD",
  "key8": "4zGSgLG7DJoLvpEpXTGiZopGpUyQKa1u8yDqKJ4V1MDu8uDNwi2moMCbFQyrg5cyPtVLmfnHkUXBNtLnU9y6tX4",
  "key9": "5rnK77iQHjPSs7BbfcPLBtgYutEcUYpPgWrNtM2u7vW5ShEFqH5wSAWUu1H4D5RwnfHoqTaz7iRzD42H6BM6wUnw",
  "key10": "5uwK2YHiT2ZyXdWJ7dLM9ZdwbEMCaXaoLGxpdDstVZJxuwCMtPf4vs3UoZpfEbQ4RZYkeiMGV4riY73GfRJtKUhk",
  "key11": "wg313BMuNjK7wEYEqfPw243JNqUTLS3cGkkdg46AcXnZCoMTosvB9DNRynU46NuY43y5snhrhnU2QGGLNGot1vn",
  "key12": "24ANrLAcExzb9KRwN4j6ANsrJz8jutjCHpuA3mBHJo4e1MQaPj4yKedzrJdgha69q7BmENdZkgSyAJMPQJpVR4yN",
  "key13": "5DkKdRF9Yr61f9yzHKyhtbZafk8B7VsngbQwpmoEvCzaZQ383VF9otve4jnzeDMaufw5hp3meqwrh55bf8fdEQMZ",
  "key14": "5qRZzwYHfSHYapXmupyUAfXLBPBmuL6BrrLjUpehZggmSmfkgM3haCkRtKkU8MpUAmPb2AE8vgqbaTHdN6LTHeKH",
  "key15": "5sxB2ichpKGxJJoKWnxyhu4AbrkWn9QD6gFxiFJ4xku6nJaQoDX9sPG3vf83F16dtMmtBsHVm2qNuD8X78tufSPS",
  "key16": "5786dN6dVNCcE1bu2RZ83B5mhkjiKic1uCp3oiyCAgKw7jDxu11WGaWEjZs9mSzhm5Mw578ixJAeWnAgT1z9cfZ7",
  "key17": "5PkXSjPutQMV7xqVc6SJoSbC7WUaEdceh2SsdFHTmEMy5nVxmC3MNKSjnKbWMoufMKX5NoSdUtXjtbD42eVA1chp",
  "key18": "cAzSVsJsiwHg5u2yHKPkuAjQtVKeaFP28aWGW3chzJ5VYTC4KtVV9hbipMjaUdvRSqVLH5Re2zAuGQXKN1A54W1",
  "key19": "6PkcwyDy1ZDAaxFEu8yjLqh2z97B7CakR4AJnGKnUj3LetFTjDFaWDHcwVB7jxAUBEKS2p3ZFUZkN6YCjmg7kEG",
  "key20": "4MM9xhX8DA7S3xZLmCnhnsCsMGr2z5dwGXuZ576a5n9WXBxuf41P1w592PMTydcp3ucRA2MPZbdEoGLQ9MLfZJM5",
  "key21": "3cGk3Gwi6Q4gPsQ8fyHAF6mKAFpwMmKasXHuCqc44vEP1xgXGdGouAE5xdwR5U7RVUxBBvcoNnSvpoP8XJbteFZX",
  "key22": "yPqPZENvAmPpLpKCSehRw2QiD1KFUJmd5qnwyk6tDQ6S8EGtYL2nj9AnTszyshU4Lm2bjb2ytv6mwWBBAT741iU",
  "key23": "3xTq6Rr8qBsGpRhhPzi8MudRznx73xdgqyCBgFYrLJU6q9RuW7SqkkGDiXSgBL8uQp4hgzkQHDJdxGxw2CRdArP9",
  "key24": "5gEM5EcvcHM8MVa1VeeSu6pZ4RfcQGCKkJDCuDMvYEfx5daPGKJXXWjCX2ENqDJBWBMKVUf7YBRh3vmZhSkHPtuE",
  "key25": "2LtRQG2VNgYQhDCEpttArzCnsFmqpH2igh79obmUfJSNjMmeyVYEHvZFVknePVb2tQ69ijGarnHvZ1M6izBfjyeP",
  "key26": "458JdsL8hZWX2eqqUCdVTp3uhFrA9Tyxgpu5Utobnov5QVc5Px5enT9Yd8Ys5hi6q8d8bo5Q5c72UvR1aw7RQitp",
  "key27": "4UMwEcU9BjGUmFF3BMhPTtzjjmrniaqVEuodFrcw9nCBBCXopZVGHwMfpDa1univJgUsSXWdkNbyyxcBK3skZEB7",
  "key28": "45YYAnKQkNXTMnkvZLJshTVxgHPui2h7KZzA67Rx3KEhHCwTheAGmJJygwrdqC1r5S7qnvsUMLV3v5FhLTQ7E582",
  "key29": "zYZtEFkVH4hV9NXNBVBofMMwGjnj6LKrVvHiv8XyoccEPZqtXd6o2h5BEDMxkWMWv9fTK1em7pyyAXBuUWvDFGM",
  "key30": "5dhr6smM8BdGAn6fbeVE5K91pSTc4GAFAFvtcn9Lmdw8ftW719Fgmu5XD7C5SRE5zJ5x9Jq99x6cFP9j92VA4nVm",
  "key31": "2AEeM9oijEtffYqEK22vKBqQ8XADJGy5uz2nMnpmpQErP5i1k58KNtagdknxmXMDs77R5fZY2MuxLe2iTLkfEHpi",
  "key32": "4Rm1Ra19xXirLK2Z7MQp7ooUYmhVqshygdejcaDDf7J1xTDWhfpTy6JGeDNzcGRPY38RsgeU7jZkyf2sFmHkMtVY",
  "key33": "3yKFWc6cRy5W2Yz1L27utf1YpKGrzVdSqQBjhR6YUgmUvQCdNiCLDkESzeLvoUK8eDXAunrt2yCaKBnaHzVPZqmr",
  "key34": "5d88jWvASehD6Pb25J7Jp8jTJRPu5Ja5nSUBRJYyiBUk5ESjVGpRzryL95Uy6MAU8BXB8yPzqdNXjUqnvswm9EKh",
  "key35": "2TRTFtCNcbrrcP1zNs2wYmxRbEBeUh8GtvZVxVobigZihX4tVUGaUMaQd7ZCMfMAFaVNXx6U1EFsD72YtibVzE2d",
  "key36": "4iRfryBEKHrNKrNiXxEdVNWsjREE6rLLkJ5tLj5ucrqw57ABXpRkUQVoehEKWZZ823vy3ccgPbLARWG2vhqBG9RM",
  "key37": "21X1pvx9wVzWyR9uVt7vCmg6wKskanYgrmRXPRFUJkoXiPoFPeGk45uo9GT1LwLr9s1duLzo6hhFPo9sbxDgNnXr",
  "key38": "25b8vjV37arzAG7LcNe7Zeksej3DYS9ufTF58SotrHhh1TjQBSGw3D7Kpm6sX7f8B91994V3phmK5S3xTycmo5n2",
  "key39": "4Eh9Vx4PtBTv1Tu6bkRsZVs3nJQuxSEuYvs3H2TkmGZ9P8s9B86npCQrvFSQH7U5rkWumdqiX5PUsmgGzUdUwmWJ",
  "key40": "5U34zo1mR4ZfNCjC3DZsSWh3fypoX85dBEgw2xCSiq3ywkZcqbvTAuuAuzTz3HLpsj3rWemueS2HX4MNhboWcGhM",
  "key41": "3rHmbdrtidHP5KtKin6XxMTwfzK5AdTrWzTd1DdRkXENCKgVypzrvgp64f8LKjzhV3NdViL2JZFFxePy4SUTHw3A",
  "key42": "4URFHVapmEuxsvL16idKDMpih4SzLXNQ49meC3sQKMterVkYmb5CLRgYiYo9D6GgVG717nHvHkdSXzQCtK7gP5KX",
  "key43": "5LuTgT3sSSsD4JVihtfHJwTZcQERsvKWdFzTXZmnTVmjbPXdTk72f6zAExENtWpyWuKcU2m8jygQJ987Rj6HBABN"
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
