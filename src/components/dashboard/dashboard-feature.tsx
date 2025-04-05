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
    "2NpRcyvMVveRejXtUi9CF9qpvU916kd9a2vBpQJDqeqi6cA4JEhe9qj6GLvJriUJebuuYysXmrMQiNCGZCb1id3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Spg9MU6EthcRYkBSSDMjgdTMYjYm4xUtDPV2JHYL59j1XWJArEyVnrSVyJtepKFyeMkA36qHg2tA3L8p1S8kyP5",
  "key1": "3b3X93xFbDKHTYGJtzm5qUUea9x4vTg8oQgVNLTRTgKv4ERSWKN8XVqHMWYMzBoqifbQTmc2p9cqyFfac2crfacg",
  "key2": "3epSvK2WXryfs1H1vfhmEWCUtQ8Ys3CwLTFcHZy276t5uKXquFeY2igeC4QWHgg422FNtFhXCg9BQsAC2HvvDFNu",
  "key3": "4JQQJ9gXZckaCSQpopXj68GVBLaBPWPHbaQh5new7yRVdmtyWasouASLKJ4oSwiXVrCHgc1KKWzn76CMELsxVjjn",
  "key4": "4KsNxjuj3btmZXo4udKwTKvPh1je4R6zKvkuRi63YVSLR17ZWoYivoGiHGu1B897UKVsQy6joosHqQUTn48KdRy2",
  "key5": "3YdTwoffrSu3enmoYvkJR3FLH3UHarFgEQ5HQ2FHJYivJzqpbAewvmwvkDH64azmBmD6rpBKRkzEspmy4dPaih5o",
  "key6": "52qME5FsoiFoBGg3CNez5ocYYuM7vSh7tU3bFx6yE5iWwBBojTh8UtZ7MKDYN1Rd8wWdx5Y6yi7SDffFcJFv87hX",
  "key7": "2swv1avUXtpHnXesTEVrQQgzbcmCrwWgwhF5JkPRKuyQ1QU5eAbQRFJG7Wr2iL2yPMuho1YdUDuvmXZFTZuGGrUm",
  "key8": "4BiGfH7pXGCeTvFM4wauDHciN1nifMoDkKQ8vnT3riTsVik4iZCbn1jgCPY1dyfvPJT26eSHxct6D3pEPrABK9aj",
  "key9": "4YNUNYJjnYrxxa6zvDFBsuchnU3sySz6Uv5bBH7CvJDdAwJsAfHptTXDVtdnBmowiUp11pQUd83dVjMW3zBcHxkp",
  "key10": "4WN7BaJxxvywRh9t9BYdE3f9XNRaUpi36Ad3jtDwnfkFykzSBZT2mMtQKpTrGH4hpwTYJfRuUDPv4CwniRLebdP5",
  "key11": "24NAb3pByM35ZUQf14NtUYscdExaqerZvAnenc8XPcUbsm4uv7zZUm62MfA47H18AHgbPyXfGsdZ4GLgspjWvyUH",
  "key12": "4N1LJJm6tYign8fjXkWkGpJaRJr8cqBE7i9C4VQ2oCuFs7QBep6oJZKB3YbPcVgCQg2uR68eBBYhRPWe4K9EGKfD",
  "key13": "2P1MBZDe6azBnru3gSrMCjiqujPpVq4ACzpq2HEQwpeAaz69YV6UtJvRXnzNfcEUFekqpwFWd2JSondSedAgccn6",
  "key14": "42tmncLvC34gZ6CoKT21N3niH7mJh5khCocCUZLyFzeoMkKrk7QAPr9Um4sCzFdFztuHkt8aUSGFZKyYbCCY5JMp",
  "key15": "agxz1BeEY93RrpNLS2VZkQrPTuyAAEkv54k9oyo7T6xpGLBX9DyBLFefcYSfLAsd7bxbQyuvqGwc7JAxQKakNKe",
  "key16": "4dEMB2h9Kfrvs68NaFiuCx3eWWiqLonjJBJfPr1bmyB7xQeXyVk1uoB3MwgmJ2KeF3niRnsY5XsUP6pRFyzRmqtH",
  "key17": "4PzMiCWCWm3Cqr6EwV7nPXWdpEsAXX5nmuPKVrwspKQXTMLye9aPbeUPFi8Yg3QoGtum6HXdBtwegrey9LKFytz3",
  "key18": "4m6BScMv4j23TbrBeYpM6aBDQhogMzeiWGjzQh8FVRs6LZWtnPjF7oKvptspXJmdzVMZxByq4ThKKF5mMzDCLxZ7",
  "key19": "5giDAfQdeA1q75PidTHAG5oun2suPsoUGA1DKqig8cv2DjpU2pyA2fR51Rac838kYe1ukD9JoJSZcP4BrHPZPtXd",
  "key20": "4Z2WXdGYUR1ScrgG97nzG7w25j7dKaxRS56ojk19nWVtr3u4PhttkSEFZfwuJnEgNv2Tzco1mZbNizR4Vnjw839k",
  "key21": "5gbDKb4YQfmxqPQ7Yd3DikBy1ibJZHobcFxHNS88XZwLm4SXUsjDPJ4sdbQpGe9tGewMnktZrG7Pc7srC2sBWr98",
  "key22": "4YTmuhtavQPBDYLu6vAKjt5Eog5GCi2nf89Pk3raci6X4Dxttr1WXJNwZtXLQmWcVqG9khGX2Zm1nKxHtLZhn5ZZ",
  "key23": "3CT9a6Ktu5e7yJrCKoBwCiyBcg95rPMinwW7SJG88q4QTot2NvjtSLLJ7nK8NDnsfP5kcJKqc67GubvHRHj5FKMu",
  "key24": "3SvG4Amb5Sv5JPw4UfFRafZzwESCrJu8tknVjh4LWcpaYxY4d5Rqpu1k7nsLD8bSL2rkLWUcWZxnzjVMBEYnzrLP",
  "key25": "2c2irXMSfynFacqESqBB3QVn2cDcc2DoxEQsYZvvALnULtgFg2hLcmFYxeLnV5648YfXBhH78x7nBctWoN8SovyY",
  "key26": "3d6n9DNwK7E5kiUWPLGG5UGscSJZnfCxgwkRsR23XHxhpvziYhJkcLoU78cszEoiMbCNF9F5y84ZD29daJpvUQJU",
  "key27": "62CNJKrG6hUazJdY7ybLY7gQANnoaFkU1TpjXpT7yRGecFSXUs1haZB5nnbfuWTYK96Nfsju5qaPCsjRrn4Prk6Y",
  "key28": "4yLfrZb7tTaPwRzPGmeHJqM1ox1jYLrbnwChvanjZbb3eTF47rkvrsQHSUKc3363t893yb2s1QUxc22SiFvo1j3T",
  "key29": "9Xp85a6GgTNV1yEpb4qEDQJ9n8zeqpkiC3ZVP98TSp4bHEBy44akFUfDpfimhp6zCFZcCdECd875n5BeNrmfo6W",
  "key30": "ggiK26KPsqxKmoWYmJWXEBjqsRMbQ9NNF8CjF7FFfgX8c7Lvm73BpHCsMjRh83b7gvu4CZ3xQRkhFWqNfFrnXJP",
  "key31": "4DQEYg13SPojfobgFErFgDGMXeFDTWK2wi7cWVgSHKU6wUXitpAzYTMFH91Z35D78Q9VpiChJg3V7CYuPqrgcrnK",
  "key32": "3oGh9MDXcHkn8ypW47B6kD1PCM3QuHgzPAFXSustGXkXwYbkTKzFBFEtKBzkAmcNH93BWeX6KsgC8ZhUFkRFVbNs",
  "key33": "qLYC9UKGMTpnGBQwPE8SScsFQz7kMCAVvwfbHktQaDbsCRV2VKunYuym5DcWhPpsXAmAKSUog8dxxy1cU4dbjSi",
  "key34": "5VkvuN3rcqEvXCcPVGUA2GGM22FM4ssAenpgzVeNKJZXXm78ovuzkGNh8CZZ51MjDNJattvjWtxMUcJvi7GES6of",
  "key35": "5dj9bcgnYxmsnYWi8YBFH24wFGPV7aT2rNeSQ1p9rBPBk5S4ijdbiVzE9ttX9CXX2TdC9xye2E9g3dA2eyX6Q1bq",
  "key36": "2LqxDtxx9J3rcNvbd11HkKQsRwZqwg16VZyuq64NsMzyrzDEUcTVEWHjLHMqCZvMXmjpgNXJuLWxY8ZiLRLrLsHe",
  "key37": "YvRYqWtLg5PhmrHwuEMhSQQ38GimHAsi4fn4n4X2iHpYjuhpJ8BLD3MVtNq8EmBEDe87joL8ZDedKCPUDQYzUq1",
  "key38": "Q32rmTCUxfLnMdqaDcdcm6fc1UUiTSGjiZ3CrmV1HZiNQFkyB8FnLBnFesZ2DfgntxcLggVM2GphmVHKD7bqSDw"
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
