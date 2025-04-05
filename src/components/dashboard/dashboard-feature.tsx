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
    "5Sr6KP2bxwFCvkqnU2K7E15mzUUjrYxgKGh2NF3oKoHHenNoVbJqTocUo2FLrsLuUSE1buhz3CVuP7ogEbvV92So"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NwGH5uJ6gNwvYv9kAizuFvtuReFajYqgzBkfxZjBXRLfZHKZ7b4QbX5AhSgC2FUpyQczkW1ipbcDSH2HxgPV25",
  "key1": "2zK6pcAJo5hMpjFitLBYd2xqZHFwdEcbVzZVrU1UtiDqh1LP5RfLmiUvbqnPnBwg9cNSnmomMrJUeELhkHeLYtu9",
  "key2": "28rbK7XpJmGMNwmJuhUgZ4aygqibt9H6bFgtdEfePtY2iHoVj7C8u5WjxJ2A78bkVvpn76yvgnwQ5vkk7a8BVSAZ",
  "key3": "3JC8PLd71wnCgfcrLW7MtYCXDpSL2YyKBqfEPVV7VtRLrGU2hcgr1ZksCBTT7fREbsHNFk1vMsyzi2cQCt9zZNzY",
  "key4": "3ew8d9TMejw9onjhEFDoioHRPM5JyfDjTQBc7TwSrHxzy2wf1i3x25HmsjMsCTQ9myjBkEREWYq99qbva2m4t2Nn",
  "key5": "Tf8gQuR9sK6m7sctChNd6Ttt3hY1Feg6p5Scbq6ZAzcdfazdv3AQHSyrXBFjCyboumpJrUaJrsmuzWxqwNNzX2Z",
  "key6": "4LtAczZzXm1S9YQWiQXkNEXWCfJUJdeGDerz2KfcCfXEdXcbUTcKwDu46zwrTnUYDQr8VnbwbLfFkqGXN9y9FGP1",
  "key7": "3Po45b35tz1cJwPod4kRuzH3hZk82wfo5hVcU9rRKdME5JBjpkwsrTRYRNrBctT81Rim3HaKwTz7pXtLuWVCqGWP",
  "key8": "5BmaW5qapgAUdxtjDsrnEQdoWKkRYtakVEo8DS2UfBPRMdrdSZwd41orDu4d2vSepuSPAptYV9s3jVkcLnKQa7zF",
  "key9": "a6agogMQRFhEVv1ioVC87Qe57w7Tb8U9Uo9FDjZHkHV6UnbEPSuGs8zCRHzr16iVESFJQLLLBZNG9R9h6eNMxzi",
  "key10": "NzAuwXKCMTX2bBcVqTHYYeS38t3dKMkmbYUU2jEQ55EdFGh34kAaFbhKu1YybzNv6gHaDLwj5WatyREjbzgse62",
  "key11": "PCqnwbmNQ6iLVLshqxoGxtcp6CMdWNmTgFpW1UFk8U4nsCWiJDtRdUUX3JkZWxjUVCKPQdvrDd8AXX89cUee9BN",
  "key12": "DpNGkidYfT9CGp7NWxnwcJYwMRcRiM3o8yT4cnjKyTZKCuvDv8bXKY7G4FcMtpYUKLtjUswCCjASunfxVMT4FkG",
  "key13": "4NRLnEsnFzKMCHb815PQ8RdjNvg8grnStRaQPdqwNcXTDwJSVGb1m7rgdNTKxCQodQQo6J3ETZMEtY35YNwX31pv",
  "key14": "ipyXUor7tiJRNSH3W1Q3v9EYp9AGUkKyb6oo1Ah7ertsBHvUAups7g5vyi53He8nGnympCLaLY6jyARPgaFcsbm",
  "key15": "49RnB69pmEzySHR76j6KZzDVDq2m3dm1juepjtLk8gVk1VrPrnt68KMtHXNxbLzo7MM3AAT9QhE9iPA3JntHQw5y",
  "key16": "4aSmz4FBqurAVJW34CfJHfRcX6Ne7oL5HTFQwsEmcrDay6kpxj2cG5bofP5b2XEzR3rHRYhGUsFhZrAzyFs6UynV",
  "key17": "Mkt248JuqPThQ97eYWousW2smrkGBkCEZT6Z9gUCtDqRmFVEy1LuGujTT7ohcnXV4yQv7ncK7TR1zzp89s1hVf1",
  "key18": "64waNGfnpHrCE5yy1Uaxs9TCiJk9dv6L1ESUB6J5nrg4g2X4a8TbTyG17aPJPAcQ48MFvJ2wh9V2RZ43kNBxtdop",
  "key19": "4CCFxgd3xcgcBVb4JDJp2XTpMpmorNqW4u1YtVmvcvFBi35ocebaHxkeptGikcU7DwoENpqsycGDSL5RAjtvHDJB",
  "key20": "2UpQ2sGGx4Gez7N4x1tfN9RZg9zE59Vf7D5Y4nuwmwLrk8rAm11Ykd9AxHuQst38J8Td3JhK18iSzdJsT1xJTbDm",
  "key21": "4UYRPgJYHMAPp996tFQGTmauAjLFXnHsFkQi98j5A76X9QbzgMwMgPyhy8dZUmaQWcRdzdHbk1v6hUzkNdMrafeV",
  "key22": "18KNKnAuNLnDWtUAn5XWJHCk8dGTEvpaVsttswwAAFS5KC72obhSsMoh63eMkToNKC9GPCuqZJ3JWuTinivZFkN",
  "key23": "4d12dsD8p3AknKr4Ar1bPkfEZk6yLTozt2mTBwRGwskASHB8opjB2vWekd48RTwBDnTX9GzrYiB6CgPpgieqBnn6",
  "key24": "5XVtbtEn5zE5R3kwEkPSjzZ8kZavmgqJKwxSSS3CbhT85CQLBKoDoqt4dGNGPkRgAbcuhmy52VsBCk7jyBaauTVg",
  "key25": "3HzKJxm7vLHSx27Jiu1xsnHnQ4rntekRrVTYwc186b5E16xUra8b8NFWbneS2FD1o2KUAfvK4bwQMWPX1G7AqyFm",
  "key26": "2qoPCAot3uUcH53QoWmGGqC4b3XGtKVsWZPAen6wLxKc5AgvVpN4xT9KVegwvqK2QoQnTyezwjvsd7SKAE1aM7Sj",
  "key27": "5Qi4HBhLiN6cnUxKxSMUA8XcWY28CH8SKJoeGjr2cw3MANYqrnfqhkgDZxXN5hmyBHLRzsZ2YLKBHDLENjmEsWdL",
  "key28": "4cxvFmhoj1QFSqXGpK4BgYipZBhXzDsFYjygJzPGxjxQEUitLJZ6J4k1bAGaHXtpPHyWsZu5SRRuf7xNNui6MTzP",
  "key29": "54Xi5q5MV6ZHuE8dag8nwfL8EkzxyNjwZBfeQ22m8gaD1UHjpwK7RiNDNa7DU6tsZTV67E9DYwkXCTh3rkuzRtLZ",
  "key30": "251ojM9oURTfjPSBSkv9gDp13UnC1uRSrXQ7MZ2BqqudvnyDdE37Kyure2RzJ455UhzZ3qErg781e1FaevCSFjaA",
  "key31": "3dxtqtK9CGeBCxBLzqDZMXumkoAUx4zJSf1J9stVFFWJKC84oJwQKznUMpWfCLgKUkwamFoc9udfjBjfbbBPtwC3",
  "key32": "659eoegdY8bV22URQb6H8nq35bY64aEpG7TEk6suzfkcgo8sC8AVj86uAsJyA9MwZkt2rz2pMp9zA4a8qfnBZNfB",
  "key33": "51Ub8uPccf9Z69bLuLfqMWjnV1CSCWRgpgp4rcXgiw7RYSmgkRWRpjsTWJMsPGZDE15yLAYSynerPJotW5PCsyMr",
  "key34": "5FBpdWppCL1Y3TBfetjEGiJvJVmqM7bAACiADafxLSvJvmQto8rkwq9Wm5R2fg2WbyvrkfGgzDXbxYt3vxwaB9yB",
  "key35": "52zBaf6r7mMhhniVrd67RDLnku5ShhjeFN1QBYShj1t1PpFWuAZM2yiudG3L7DF9aSXazuE71VzDkA2EAKJX8EZx",
  "key36": "51a7g9aXkjVS15hEUDHkdAii9AiHnVZd3iyj4sbfP8SeVtCjS3eVkQAHo2o6qht9KyrB2NjJDinwysrjAM4Kmtx1",
  "key37": "3JAKaX9H3CE7L2jDvSdQCbxVPtKnEDxNwZZR5FzsLUBr3ukc6gcc6EPTCPBsNhtp3CKt8mYhz6MvVr5ZrJ3Ask1N",
  "key38": "2YWMdBtuMmxZ75hq8brHqyYK9s2EnAhvNZgD8TtQEPyqbMQh7zXNG38uaCtwYBGbjQWBr9zGxUqPs5AAbSnEoVpi",
  "key39": "2KJgadY7rSC38fQuNMjdJ9Y7i4eXjUcnq5zQhhTkqvxhicY5Ygg6a6sR6LvUCrmk4C4sn9DQbHewC7T9ckSSmajL",
  "key40": "wdoLTZi9Lpq6JFqieW5WSoDpaZBDaHThCGvzhyBhzfPtj426kxSw5ou8Quk8FTpAu1XpmPst2NjA8zCLMoKTxM8",
  "key41": "4pddmExcwA2io7k3sLqDkcXjQWtY4MtRu6Zdt9mjLTnRUP7t2nLRRH3ofzvjnYMkmEysWauy3bzNDTnY4anYpEfc",
  "key42": "DT2hGuxMVTSnWRFtj9P2DUcXM4FSHBL88sd6yK74zKBk6pP6ueqkCXVuy17DthYWHgdzPZcqKxYb2XCmbRbV8EV",
  "key43": "XYUcCL8Qn9nFBechoKGN8cu6njZ7G3tNcMdKczQkUPp45cAZMtwtrWuojKsfWPvvewbEmvDv2E6jwVcnguDmqWK",
  "key44": "24vBnyB9yCv3mNar3BpUYVD8g2rnSrf3DTcP9AAA698oQoEukMAMkDwP7A7q19k9HySWySTmWsLv2AttjVe2Y2Qm",
  "key45": "2jSRjerzN1TZqMEw1LTMMCjbxz5pBsmaqKSHZDosYmSk6i1jfaxtf1xsd6XuuwxBbgeYsfD6z4myVApBuvmhKct5",
  "key46": "63x822oGLf61mSsTLQ468MPQVPtU3kFLdwHdDugV1yzrspJzCrZje6NHQpPeQsuExi3sVSvaWgTcFYSp4QaoizMS",
  "key47": "2yvtvVbyxdah8ymwUnSd19C8mDf6VL9XRCjucb1yTC2GShogUByEiV9R8gkPrMTetHvhbGEW4wZXFfDgHT5aFXSE"
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
