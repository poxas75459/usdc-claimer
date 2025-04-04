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
    "5EHFRbzJXgquRcD5tWe3BQGyNnhNRz1sAyPnTQ7mayhZpUJx1v75RLGbdVyAohXSwXomSYmDqqYoGcGNeCGDXGrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uRtLZYY9izMq1JuKdPNxaAiiSwZjbW91RfRQ5hFBrpBwaAzEvUUjuRqahyMZjbJZjBwnR5GxcA14RudAP7VdfVU",
  "key1": "5LP8Sg5WPVnwkhuLwQZHrA5oGs21PyV4anRqeAtJQYfDCrsGRtXJ4Aq6Ncs5uFUWT83VdikD2z1JiUhb4FrGy21e",
  "key2": "4E15XduJYX5Wcw6kKd83e7e1NmwWoMLJzmnmKC8CihCS2TRQcinTo6xR3ubLnDDNcaKn42CPNhbhBZFJz5ZnFW8E",
  "key3": "57LVhdjrvCY4m56Jz3FfYXmCUCt1mSf3tSsf6T9thEeHiSPY2kYFC5YcobBG3wY7bUEWfqyrpsGf9F5C3bhdbn8s",
  "key4": "4CsXq9ztWGKTLVXirPBWz9Kwitay9dbqTcKyCpxxe7Q3kRaofnGbsjNn6YekDdQHK7LUFSvUrBBiAWm5Skxqxhkk",
  "key5": "3DLkhD5PJVbY1dPFV2gooHGQTsSnDtGrvuRqhwgWVBgo2CTDYtF2HdkuWMTerWznghAnPUueZqhAMw8mw3DscTXg",
  "key6": "21Mo7XMwUVWzbgMoFz3t8h1FN5dq2Wm1tN9uTuP8UGuR1f8o9MvxGwwuMZAA24zkDcft41jhEk5ZmjoCGgadBQta",
  "key7": "2j4vX8WkC5XzszK4TuCxuha37BRqXGcdUk8SiJjh8WxhC84GeesojGAGm2jaF1RC9PApgVzheWwi1UeiH2C7KPMt",
  "key8": "3Rc9HJh77BhPgazUfxodnGR4xrTJf1De6ipPnZuiKnoF8SuHTuLJRZdt9tS4hFnzdRd3eaRPM8e8XuAcAJUc6dtj",
  "key9": "2NmrzZZ7ALjxsyLz4B16JDo828mnrGU2a3NvJNKxr7EUBnVVQLGqrtkaqiwpEeo1RZKyYcP2ATN2kFiiumSQAuDy",
  "key10": "4zjz392pFXGuDSaT1L3tu2WhxVSdWRFnfZgXPzaV74Jk9WMXsqgh2e6bEyivskNPgysgqNdR6YZTbWeRqGdsD76G",
  "key11": "2oNRm3poB1KBJtKYM3n3X9RM8UtS6ojJDYu7NhGPqSTvfq8w4v6onet5kaUyHxt5P8UfzFU5YL4wSqCodtn5psq5",
  "key12": "XdgBZvF6QwnkvhZDvUM3iSuCaYciAC81SGhinqc2PtUUuwMwS3qa8YggdEstKk6CNyCn2Cy1sn2j2fzm5WXSkSa",
  "key13": "5uztrUvNJA2RGqYr24HnQZemN69pLBs4EyRMDf3SRX8AWwBMbCq4Aecs15rbZb5x78XFLB1huurpk34oHJK5Y5fS",
  "key14": "2WseJAHwiUoJDW2m1U6Snct7iqGC61xsacuD1w1AVvjsXBuSCMQXZtuo6MNQAvFSVznVBSNDASfrqYomicjooRrU",
  "key15": "3bE7NSf68i35SRaDBgyuqyW5TcpXqNWs9yzsAwBVVreXCDhg1bAxGkmfAayHQEG3wSWXKqo5pJ4VHzh6FMLXX6a2",
  "key16": "4dLH4suQZ4E8Dpq9T56Hqco34z7zU54S6RVpHEj3mkLaZRo86tf7n3NRdRchKrp3uwe2h4o2dkxAGREbzMGgRB1k",
  "key17": "4r9s5MbEcbTSDYi8rNPNoDRx1WKGGi6HQNKB8KKE7z3VEdxn7NrafqhpqQPu9YnMeTA259Re9XC8pSUxZgeke4QV",
  "key18": "5wr8A7MEU5QtiH6yNtXPSCZpaTeKKWSiJoHW7xLDu8KKtCWgC16niWX2JdQP3QTaqsmHrUBh7Ad8NZHTWSBueapH",
  "key19": "dv2a2JdBU3bgb9E835SivtxGedhriwkMNWF5B4Jhup3ZCvofPDqWeLmY1mJ12rRdv6G2tUziTBFuzjwQzcSgMjc",
  "key20": "5Eo4SCsxr7dnZXusT7MVFMx4Q3q5q4GViHGpTiqFHUV482sPqFCZQ76VHGCLRG3aiqo6HpzyU9mwQypgG2N9Lych",
  "key21": "3WNBwu3oFvjMdGiNuV1hGmSkR6MhZqshnLNJXZNGy9utc4jTay7xsHg1MTCo2tEp19KUp1sjfxbgt84JPwFkwJff",
  "key22": "4VwtKBH7P2hkZfT9y9pQmr8f7h3eMvbz4Bq2ocXYF4QJp5pixTx9QRmxjWwEgZL1jmcRFRCTgxzpMHD8jd55mU6g",
  "key23": "2nSCcxHpDw644zXtFDUJ9e36V1qaoNkw3zRVPDsGjuE76A5o51nAeLYsNAfvZenD6NDqEXpRKQqo2Kxiy5a4Q1VY",
  "key24": "eGu1BU4MFjZ3dQd6Jgkzyd8ND5z1umuKYyXLBm1XHmPXUDyZJgfNkXcUUPq7fLxBUyQGBV4ex7oyuMPW7s7798B",
  "key25": "PEKr24jxxBxyLEu1E4mziBTA4u6yt8qhjso7koPTRzSiwm4iVfUJGWpdR6KpGazKBCYzBvRuNvmAmne8aQp5zWx",
  "key26": "3YNdzN3VFC3qEP8sNQErxViTZ7KBqPTTk678Pv6E9iVC4omwN8uSCfn1ZCsFdF7GGX5HNLWbdUCwJFaDuGLaXSgT",
  "key27": "2jJqZG3KTUXbvR3unj7gGvcYMoygbyWGai9fPkg595V1PVEsfc8KLcWRZ5YQ4BHQog6oK8akYQFbjaUrS5bPmeLK",
  "key28": "5fiiPhQnkd3jEAs19FMVg5agaS4VU2NJ1hURHVhuVy1QFcrzUQdKLF1GT7AhzoX8n2zKwjfmVsUpitVoNzrGn1tk",
  "key29": "nHzsjUomPCQPBuA3WtzvQuMzSaNRXSCfsYtczUikEyEKFxAiLyfKpKsqUyymbqXrZwpy5yCBvtxxYq5mTqw7H86",
  "key30": "3mqPddS38zJ4RyNVG5ACeDZNQU9XjXUfrWz56wvXaQPrHARzpKSM7twr5YSg7Qw9iNYW5nApz6TwUQE3QHPuhd5t",
  "key31": "JpzjV4L6WMrmxwhhFamoAhw7gp8VBe26hXbyjK4CibhHdKiPynnUCztPkgjN4gjL8kKnxMzYwV1yMLPFgF4FPsi",
  "key32": "42w9G3EBEEeQAYS69kcngRbnTqCQfWFuiZsA3WvySWeqi4tnCbQUxXS7WT5ZVU4TYmoxH9vGx5aD6trb48WqwG5b",
  "key33": "36RzaJiZRN3ch2EhbBPjrweHeUKm5LkgETVzPFSYSxhtuNhHU2JrRMs9naBQbGc8ScJaeVkXy8VbS1HxNL7YKd8d",
  "key34": "NYqy9ecFbQohc5aS3MA9uF6p97bF3cxgzJSw9fH2yjT8G9S6zsz3UuveVFv3vPfHMSNdeft2wKszpnVUnUksrow",
  "key35": "4SRZtcAYH6LoatGzmsCek3Bns8pc6PFXqY2RVdf2dG86MyZFsq7DVjAB1LsRiXxsewNZeXHVTAWn34gWS4g9xnkA",
  "key36": "5zp8Y5v5Lx82Jr1cjoNXeVX7N39Xd4iwZYmdRAWFXAkovY8XVD7kpRfvMSMZtsUwqnf7AfRZoLUiWgP44C86dXh6",
  "key37": "41R7GMGaKmeEksmKD65JtrGXoznAo3X7KHePaXunoo9QyDC9kFf4knCcdVMNYJAKQqVk7HqEHCLjfzqAGmTZmxYJ",
  "key38": "3J8WkH5xvmyBAkUM7WX9rJL8jTrgWkugf3gKepaLW92Gm2G5mYytjiC5wEa8xwF6KWEeHPxE1ZxfBC9oyEUN1ncY",
  "key39": "5MVVGFrMLbd7tdhzhbckHbbfwDiLiFiQasaubJ3PcttbEkyqt3yDsriYHhLunZumDPTnASdtYLvt8wUatccfwa5J",
  "key40": "2V1349x5zS6UQvGQf3JbdjQxzcYdXm1w6WtvgKiMTjprzwf49RTLFZTDcAnSb9Ng1tBvdd3KmfskCxDJ81k3vT6F",
  "key41": "3HcC1ZRmN2yuQEwtmQntUq8U5CMRQZRz8HcmMju5btyYbsWEP95YVTSuVFeSgxhEw82DrysFdkkJwBhXBR2gUoVk",
  "key42": "UXimzf4oD8RNip5KACGoK2x1muPGkvpzwrWijN8mG4q2b5yDtEBirgTbubk2ojYbBzR9efYxp94XraZSX3XWX6j",
  "key43": "4NRTMzEHGzgBXJVmv9gt9gQGrQWuLQvn9Ei7h3NXyC71z3CmVQAxFJC59hEq46JYGwiZfSPMjDwrJLLobTUmMRxR",
  "key44": "4FzuuG52UnBFjfpFrekmdv6AnQ5VbVktUsrvYHKoMp2bumJXJM64osoxzfUvz6mtn4WsF5zinppjG6L7Nq8k7fsG",
  "key45": "3bHaifjwv7NVvMx4XgtzYyvR2cnNBFXdWEdRFynvLKRB4joqwNtkUTk7zM1N6SAsbmbTfoFxa5JaRxowpVud59Z9",
  "key46": "3rkAazQCkq3oN2zYVAdJJUFm6NU6Mngm8CJgfVmDvnfroxa1X8mwRkN9PypiWezwEV5hfeKpuZbRnnKTVxqARMjL",
  "key47": "3EHXDihQv3w97wBCjbJJUVCopF4GonvanUuUKxCeDZqCcr3GonUx7GhKH9anFfFs6x824guT1orGkhyyKuxVYrdX",
  "key48": "V1cF459gaQTk8Hdpn3dMxEbmz9wt11CL85jLk1d5CoeTJCyAxqAg9F4mwwLJMgEpP9ztQa2eSNdgnierVmKDWga",
  "key49": "T4jaxwnEu24xKx2wscMKjxhoGAow5HrKRCj6NLu1hkZm6tQy3jWmCxcrBRVVw92UpbrXPhsT5kqqfqd598Cbsav"
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
