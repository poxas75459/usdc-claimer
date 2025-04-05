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
    "3gc8RFEQukAZpxUCXR3BbSKTKdtXU8HZauptKpjfQAKnKKRJmRLmoGiAoX1E2cexdoS7JZK9WTAcK4MsfiHJGy5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b3kcL7E7Zn9dDrettwRgYxNqJtRFTzq8XuBvq9v8Hw9Vm8ExzUbfR5p4HWf8ce7o56XJGTCcXt1tcnifwy46jJJ",
  "key1": "rJKvwBXVNSjFNstwABepYbg2oZgaFLfY3q1g9ePHMKqpf8sJm1PL8tkPnkieGQxy3AEHvu1Cu8NBVh5thf4C4F7",
  "key2": "sJGKZLuAx2SsM3puJvZyAB595SDVkBywqfmZCanPwgYSYcE9RJ9WmWtG35NA7guEWBwJfoSYLkkKNjnM2vuL1sb",
  "key3": "4wuCu2v8UBCv2iNfg4eVZHBkFx3MCHAs48Hai7aQNCRjVYBzd4J2E21bUrF6s9dRT3whYX3PSUbVpoSjmKf71cM8",
  "key4": "5okVdmycXP7hpw3t5uUAtGBoh7RkoddxktUqbnBaV6CahDwb4njkMWP4VanQUhEXZJKErbpwk4fH1bdqWBdXYpqz",
  "key5": "2E6Yh7eT5cLB4BaoDTAhR3LQDJQ19ewsYZ9QRScN9wgZVaWum1qTDEvyLtzBFPFDGH5eGNRYTyDfQSp7ayB7xj8U",
  "key6": "Fk7VZu9BJiqTFk8rah13SqU5x2Kk1LQaDyUC8XyfExsqdVexWCDjLV6j7zBoTP77jZewDkr3RxRiSPLyZaD3RAj",
  "key7": "D6oFcXZDmmBodZVGUMSU6nxUUGAYa4HCBoWAzvm8ErnSNyXV4ZjgYuct75HRWGZAvSafH5WvE2HaVtnTnAjFLsf",
  "key8": "5gLAsMAZxXeByNHeiBSZVErQ5ZNAXp8vEE3quxfJV5pdyuE1xB99GrKpiZTVdjesfCbr9EsGW8Pxp4wt1YHQk2Ci",
  "key9": "4hMe8yT5TT1oyY5yqSZ4k1AK6UBHLbpJ7QYVoYFqBe4PwQpsVV3VnB3C8syA3cvsQd7f1PRAvVtFxJefzPDouoik",
  "key10": "4PQ1Ub64iEtgeNQN37ZiFUEihm8myKTgQwt519ZE8e55Yv9Fd887bLxYLAoL7MVZNEScC5P8wuX1UtQAcSrsn8vm",
  "key11": "5T1Y6fpfuLPx9udtmRkbr16KaGHeNJkFgrB9qy8tqvu4xhrz9KEY8cSU4pEbsSHGWABe127QLdZRGak1KPK6E9Lv",
  "key12": "dbT2nuKVUBn5fyKAbztHEuUi3tKokNsZBj35pGhTBt6M7R24LhWibAa91DzHh4uztnA5MF1Qh7seUUqsqYbCRfi",
  "key13": "4isENFAidU9CLEhNF4HBLkZJbqGxt5sXR6c337AaF9nYyt5K4VptWHBzoEg5bgFo1nFWEZZ8nXTqmpP96arJpqr5",
  "key14": "2nj8337arbCyAz5jS5epECLt5uM26EsZZgz8wfRFfCYJ8G1Zivjh7gKPSQEjaDA4uZZnXZWDK3XnbQnaeFhoeRNQ",
  "key15": "3Cbiczavg1ecFur2AMbpAaANygGLVZpfBcACRJD1Lp4gUvStvqWVosQbarPxFb26qw8BxofrSTknMnTUgu5kWqb7",
  "key16": "Fj9APKm2HJRe4UncMRRj18mbXjPmbdQn1qpTuTFvs1e8RHCbyMf8Tdr9c436L77igaPD9GznR2LLn6jChPfCGbo",
  "key17": "3rVVwMkCLQkhYJWgGjj4HumiPNFSYZCp4MhEPrT9jqW6jxfZ68Q7qymXnXRNzzyDYw7UR8B17eMps6PTTmRWD7xU",
  "key18": "4RVDGUdFJFvPgJjKzqpVhLauKFXT1yVwJ7x4x3jkiy9cfYdfY2G41N51NxH8ZvLUXZyZnmVA81Dgo4GJWzyVk3PR",
  "key19": "2C2wsgJKhyMTLNcL9QprmDuY8gkwKM37ZC14EnLsZbUmyK4ka1zea1wktHZGtbf94zukTyUYjEtCbzYGNMbVtjUP",
  "key20": "3ttQ3U9DTbQ4a81p4bbZYgRQJK2FeU5ni9t7gUKL2RDpVCJGm27KMV2TiVTeBBfXzB9mH6UTakGTews854FPPdB8",
  "key21": "gMkbRg5cr3B4UXeGwtgYfxrs2ghK8DqB7yCvUWjCV8kgiyjmskDyZmNuCoGb7CT1Sgo3CgdfoPLVfUPedxsqgpe",
  "key22": "5UaM2Zj1PJwhUWgM7ihwqkH3wFyQjq6CG4Cv1j94ph7o6KgVSh8SRJjhCXvmyEozTiG4rtV9Yppbg3ehuneZnzYK",
  "key23": "2VZB2Pc8VruS18zmQULzqU6MEqvbiJpbfyHtKdyTLdYGBNcKCD3uBRAMcX5WsM1jAtf7zACf1jysFVyYWDe4FA5q",
  "key24": "AC4fSJbyfZsrBJuNwA5WQo62qA4iHpdKJmS6pRgMyWTyxtWtDVoL5YMQZbCNsECBnQfmt27oAKJ3fqJKRwt7fRG",
  "key25": "4U7rZN6k7iDYPiLTv2ZJoVLXG5ALNYLErbdVVM9NE9xg9ZXkWLTHmSTS4FfGLsbayWmFShx7HHmwg27U58oE4wy6",
  "key26": "4baMPd6z7LfWid7Va6Tzqprhg5oFdeevitZcDvTuFbDYuJWqtavXpo8yx3VA3TMGtqELnRypbkdraJPoi87BWbZ3",
  "key27": "3Us3uA1N4ppLxJaizJxw4fAteUWB9Ndnck76GNoLynQCjiQGBp1KG2c8a3AzsBbFFnBv1dKByhy7EWMfRAQ958X",
  "key28": "2QSxD4CjEDhbH2eZP6kFijCnoKdjiPfsBEVSPJaQZ8n4Z8D8eoK2xPwDBENwq7jcbBrZctaSjhXyyXE74RMPvkNn",
  "key29": "5mgVHRkvFgLfz994JEdjbEnJfeRZitAuGJ29jfEM2iScko6X3vY6Ys3Y296TTSEXEZCwCN9TTtc1eFoFYecZDxYR",
  "key30": "2KDEiG3z7j2H7GVFDM3BjbnBn15sjuXuMUua31YTs5sxddfXM9WHgwnphMuPmoSMy2a35KQMpKx2MNs1AHmiDqe",
  "key31": "4Tgz8uN1pE3tXpLikGwRKM1TcU9tHhuRR91hYnGGmZZJYdHVvmA2eUgzdgMB53oG6iwX5zA7JnsW4W8D6SGcGJCw",
  "key32": "5MKC3nVYRoCupjz4TyrUwL94BGqLRqgFDj6UbA8K3B7AcY7GnLck6SsV8ajWmYkTAm4UxboppSWFfC8nT1J4haM5",
  "key33": "PCoLMGtNM2EjeRea8Mu6UXNiTm6R6Vixfjz93kKraQPUkmSKSH99zW2vVWt8qBMgTDxAHiyprETMEYCU1neYutT",
  "key34": "4FqcC5gNmNpYzx7U9RECiwpuoHeDWwMRjWEWmeK54cR4swfQje5ENVpYTFK8Btnh1781GvtsK6xFpSkeMJ5McGVG",
  "key35": "44CcYboMmWdDr5CMu5KdH5xuvvwohH8ZXRN5fiTjz6AEwR5cNGKaFEVLDKDugM8pToXErB6aFo6enSSb2yeyE63C",
  "key36": "4JjzpkP6zDSMvCzmuz53hykDzoKUjCj5qQMrLBnHhE7Ks4jDCdqipKNwBuud2go6xRi3bAu2LepoZhDuu1afYVec",
  "key37": "2BUcosciA2cz5FtsMmCaU4uQWU97y3Up5D2GnBatfawoYyXWeoSgUED6igDEzhe5yTny8WYspyNWcKoBnUEwP9cC",
  "key38": "2p8t1KUBFa1ZomQnJ6RAfV1orvUZSYHhMPmfR7bYDriWc2zQANNauQcuP4EUvWti4HpRNNnajbQBus8bcAHaZ2PY",
  "key39": "3LaxieVP8fsU3Qi3kt9QFeV9WX1xxkj3zC1tvYCD5Mkc85G7VinXf99pebjBjVYUFnnuF8efSJKrakb39WaqW4L",
  "key40": "3oXNru2ZVbern5xUcRP2LqCBZtLdEqUcyquiz6oq4dBd1KR5CF9StucwYwphy9wg8UUMm3n6QjL2gpcD1dXhcDLL",
  "key41": "3oPLHprKvLHxLX9enWbQ81E8DEZCVefsy71niuvHdghAMvGtrxN7kNck2b7LHPpnaBTzyxqDr65rTB8mabZMMGGH",
  "key42": "5FjkTaoNHbYyCEFP7Mi4Nm47nRZRWCxGsAiSeuYiZr7joKMUoCYYKHiprjiRcwcx4b52q4wtZKztMsHPJAuKp9Yj",
  "key43": "2JmB9D5nL5bmv9ETnRuV6YrjMMDwnLK26nyW5R6UashktopzafV2jLTosNwPBAnEu6gaGAdEgn54eYaAPeUE1WMu",
  "key44": "5UxkLU3zCYwVH4SaerLfaXSrJ9QTcEyLfEGZCQy9g85gBdpPEyaUvr4fuocoHsBXkptMGnit4Y4zTPWPH8srDYcR",
  "key45": "rcJPvbpHqg2o95xksru9Wu83jXxYob4XRQKq44hbqr5Z6LhHjyxSLgoA4P8qnb3uwjBEskMU22tLRkEQk6AvGtm",
  "key46": "3MEmNEaBwbHwbkuUUv3kujsRNXKtFteKc6PySmMtuG4K1fZeUsrpYqLzLLEetnKiysGbZKo4jf95xHRxJj749xRG",
  "key47": "32YNe5LFmmDWEKf3ffp1ue9KnRvw6ZPDcnyqYuUULxfBgkvkYwihMhcTdhmPWY7CNiCQdpSEz8HH1NTvXiSowWfu"
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
