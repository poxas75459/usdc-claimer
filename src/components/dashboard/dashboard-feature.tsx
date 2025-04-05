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
    "3M4Dd8SnmfdeZXcd5hFNMTeKjVvL4AHwLsjwjao2XPgsAfez4djHjaze9UsrkrMGqBBMpfueShmskz5d81qxGuDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pat4ixuh2voRtim28umGHU4QVPgtVm4aZci2uPd9fSP9C8Fr61xru1F75RPjed4H9m59iy8dLKcTZmtzQmEneyC",
  "key1": "GUf6HjzS2GoYFLbUAqYapEhvRAuqCCMXUJYRSuMZi6ua4EEwxJwy4SQ8L2v6MzaJJXNZRDVnUvTWveW2XypDGWo",
  "key2": "2gqdeUzKxkLU7d7M9hM5pqEpaCw8mVD12P9UaZMgWw52L8ZK4ZDzojd1uwwRGuikxCyBa5QiAPKem6a5Tc2McpfF",
  "key3": "4kLQkF1K5NvaEs6dzgfaT8DEoVuaR2VPV1jpYUEPwpBD9Xd1Xefa9FsbBNzdzRypGS7i19rwLtVt3QQtc3zea8vC",
  "key4": "hSC8KBEZ3ZRQuEJnX9VJJd6oqAhe9ZZYMTdNFfBw2YsszmFDr5sPEi77RZkNa89CYi1egw8mxN8rv9mH26dfdcw",
  "key5": "4oJT3XFqb29Y1HW3k4e3QQH4YhLR1fqACR3UPh9mxU27rMi4hKGdsP5fWT4d2xfAuu6qpZQBRtFj9EDd9qxjV1Gj",
  "key6": "5vgYbPN9DL2NSGKZLYzeAf6RXqudeMgRi73daAVX5ngoHUguWjEUWQ4ytDxDa8PPozQnXoyqk8oRRge6dJzb25jg",
  "key7": "56VPr7edrAjFiFVQTwYvgNYSbDUjNnXc6BcWinFUr1tNGe2rjxoyXQf7vnRzdqJBAMiFbSKTPNbU1jfkRfsjYeLL",
  "key8": "4rioCYZU8cpGWjuHC61g5ppvw4r6ptY14dSvwcyqcAkTWhjSXFWv61yCoaVyWShawgsbsTJ1Cy2JiBVk6aoJz9E4",
  "key9": "m6Uu9jDd6T85CEzyaCVeRPpQ2P52qiXJrJd3zGtoMUkp2o2FiPeAiDwKyTm4bMR2EW9feBLQhEe7CcfyQFe3avd",
  "key10": "55jEFDZvaT3SrTu2HkuwrSieNaTnb1y9zxXkzZGzeVeVvB5g7rFHBBvnXcwsQTNjGY34MEWYVBB7x3Ndmf5oPC5A",
  "key11": "5r1brnoUBeiGGkrxxMnhoAZVa4NcdHmd4tqJuPYeewX3DEnXi2jJGFAGe6DdVHYWm7vjLjgvYSjRGaq4iDrpf7fL",
  "key12": "K4U4pJ7FjGhDBDxyMg76nthgN4ZL7vwmsxe6wdECTiV6Eqa5iDjKFP9TPCi8ef1RQCHTUU5RDyWteGYjhHGgFN2",
  "key13": "46opa8CCy1qMXrkfM8gNy29mY5bPt1Wrjfk5P6vygaxfhnY7wLzFB5X2Wdzoi2HEExJ4e86Nxx4y91yCdHYois6a",
  "key14": "2cVVWCaTKdBML1GFz44Vv5jkDiDopkTELsmj6ekAfqTTsgcjms7xY2hrAzwRVvYuXQi9jheFQtwBP3uEqhQs9NAg",
  "key15": "3YiFJrSk6DaBRo8kgzmWpLm2kTdZ8odcvSvcmxGoikp7xEg1VnL4jQyqPochS4JseiXz7TMTviw2AnebXRAwwEEK",
  "key16": "4STwyVoTYXRSzamQhGWvPhEiEyR2dkYXwkECedhFiy3jC5m3Dp1Xgtp7QYv27Lo1xCXjjv7vACeXRjx6ecUaQLuX",
  "key17": "4ebVCvTnuTNRbi9xHH2MNA66PvgNp3XAZodR4c1FgDiyhhYLhmtzbYgm7XVFdDD55P1Xr3DCkQdpCqS8k2xScEvt",
  "key18": "44PZKjsi9LnRwS1GZc3ipYeiDQBxgxKFaUMwqbnBrwKsbibBWYHY1f9SgQjpBUwWGrtwxmi2mbVbXDgt31CV4JXJ",
  "key19": "5oPopf4DV5eCbeLGBNojz59TtBnWTymHQvDuLwJutRmmTrXQs67YsDq8WBSRHdArRZBiiZRdfyCbwedWttiS7CEz",
  "key20": "3t34wnWcShvVs1LA2HHfaPGPDLABsTgfUqZZxkrtBYXoPJg5gFpTEdnRQD2nJ2616iSDvfEcehFxeNLYPfL1gKEQ",
  "key21": "5nw5G8RRv9sbacVjdMEL8me4tGj8HtpoMRAeGQREEG3c4inv66ER7beQa2EPXxgoti5x8XUqgkQvkp2R5hLwuu3b",
  "key22": "4oNcX6ZG7771cYZcNvkkYoGkemb8tHXyuvxKMAGPfermwzub3Coyqf9iEUsGrgBZWD9eRpGY5mdmz796YHs8vsxj",
  "key23": "YBa1nTyPF2P9P1S4CnfyTRGvvDtaaTtP8cY34gaf1tu3MwXUQfxgWCnhSLJotr2JVLwotjo4bHkfZgTEhBDEVjr",
  "key24": "5BxATkTS8VbfZSFEywmobNm8ukjpvnLwxsdgRd2vdvE3E4xLsSQHcbr8PXMy8GTYfZpAwHmyKsFbaF4dkPUr8BUp",
  "key25": "79GvG8rPauGKR3NG6T77thzRhaaZSWCeb1kxFejPS826WX9MUqTYMrEYuB1Za9wpmJG2wqoTA898xzJYeohiUjA",
  "key26": "5MNfUPAMycXe2BMmozA9kjgiqrNye3JByf8Nzwrio26UkPH65rqxfJSXigMrUvtDMfy67z5EXPuZuQBJa67vF6rW",
  "key27": "5pCwkXvy42kfrB1k5HJinHeptq8FTkkQTkpYupcaZVaKGiCuBYNR4LycFnLH2UqTZ6iEhv25HGAkS7nqWfn2YV3z",
  "key28": "2TRQgtJBeoE8FnGh2GwoHFHiCSTJbraNZv9LbGyyZHJJjyXPxcCeQ2Zvyre6rnpM79VhHcXZHftvfxfKF5hshBwd",
  "key29": "5KudQWfjQymgXe5Q4rYEZLm2GwmMaQKcGFkM68WYYwxYZM7BK61BRwFweZqeZTa8mze3cfBGh5YcKhbpNxRiieVS",
  "key30": "2M9bSh2aVoT6XcLdefEKFNTAVLNgh8egoUERqrBazpKyqBc1oRtLdmSFnvav3xi2tvAnDufb8QhUMWJUYzozkmnx",
  "key31": "4RCDfUHkmBgZPKiHEzTS5rUTcVAx95QrRTcNLSN8wRA4weqafRWiP5vXkQ6LkPC9BBf4b9fGZotqQrWppd4XxMcB",
  "key32": "fEdvdt3VyQSDtFTQa7VTBeJFSn2ohj53kEXv8yWW13y7RKCGWL6c2f9YZko7LkEtUnKkDs3sqEhzQx1bp9ez6n2",
  "key33": "32xhWbCvvyKAGVC28CGbisJzjDjmEJavRqWVUN1GahWCYLnhZDthozuTGuoXKxEBTyKXPuT2szWhtqgvkdn6A1JS",
  "key34": "2quX8r2GMKEdiccyNTJa1aqdZQATabkJrvprhHo8MixKfVh9sGPLb5HM9VppWXdwCsG4TsUHZUxmR6u4xKu9jgpV",
  "key35": "5Fg5KhkZV6Htkwyx9X7VuKtH94mLsrXZrrhPHqfGeqTAzb9vGr1pksWnJqQyZKqAcnDqHieR6js1gnVzJ6z8wbHm",
  "key36": "5vN6pamWqvNS91gAE2yLGeEdETCi4h62CJS6RFd8rsSRfkviz2dNbnVm8cfZb3NdeypFMjhkWHRhemE99Cp2qANX",
  "key37": "435w6YfX59sxwCaifnJN1YRYBTrXZcm7vsEDgUBEUvNM9C6qLTyYadkpUyL3ChMAxxCvA9HeyTwj8nDfHnjN4KiQ",
  "key38": "3r4R7s2m5Vb9EgCNfxnQ6EKHXtW6QYeMY7KS7QGtukVmMxa3aNuYZazmoKtkZKMv2jxXWNgu8bTV7MEE4gz5gpzL",
  "key39": "4G88CCUkx1Ubn57tdt86Epzqa9eNT7YKxqL6myL4S652YhLKs1rKmr6ZSDKJzFpAyn1wQMZNYttRfqCJrSUoW1T",
  "key40": "ANyNuiSDk4SvjLZiHjcC83MxJP2Xobi3oeZZrvWaA3ds5RxgPLQYf1VSZroxx2dS7TwKXKQGQKv6NHyd5827FM9",
  "key41": "2zr6KujvZGZcLRCmcMSGwvNMSxggXeyZi1SNNKsBJLhC7dYPriYaQ8rVB1n5vd9yyzNdiaRx4YuYmupedx55p1CS",
  "key42": "65W7Etenk9jTtoCqknKgnm53jWfMLomKUWNuW6jG1ETKJPN4ugVLKMjnv2LkiZ2uirmt25qJSAr2uaTKHby7hux1",
  "key43": "2jagsb9nKHhAmfXDhPjaaGqMC1xduFJFe3Hyv1oYusQi11h7PMG1PsvHcLeVvbPviqhS6CyJvpdfWYcoDGXyZ4QU",
  "key44": "3Au1hgVifyDVAGEw3WJqz2iAeoJZedh9Wqk3211iVbwQ9PHYfoNvKDur7K5fdfCGHoBuUvcLTfBQTD1oZKA2NYFQ",
  "key45": "3AgnHCtkFxiiSg9k7eYzK5jLGrQ2pwmA2L3aiPmc7veAfJ8V1j66k6asfBDg2dHEmDJQo3eJUj7Q7u1eZDaW5fZp"
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
