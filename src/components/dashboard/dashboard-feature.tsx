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
    "2p5mYJGWbjRBJhP9qKsLX22aPUQYy2WbBJ1PHG5EY9cTjipmEK6LRQ8oZpkjYKv9AZC6rfX5bnokwiEVADUXdw2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y6pCVx84CwTQpa7cdMxio1ndWcMjgMA6ByD6qpz4qfgwcd8xjXqrfjsQTD3SL6c85GxbdyuNaGn4PLYe2zEPG8n",
  "key1": "4Uasb2GpY3kLBJKmPBsbKdkibM5ZYXJ5Jhk1kshzUaQgDifL8Vin8i2b5P7Sryf4AYYiQCewyVU58JWQrBQhKQYf",
  "key2": "5z6kbWR5nH2vMxjDEy9YUeKXSkCM6KnA517Ls4F4Kd6ij14n3aGWPJZVadP6EgwwWEtLUwVQSqUkxjLV3mnSbosP",
  "key3": "49yU1Lm4hwM6xLCZgwepUnd9aUEeRbPjLjwMzvDSJHoHjb1jyLBBYaG2dpMHtwpiz6cPgisy44zEijqM1HfaLaTG",
  "key4": "23j1LpprLHVTMhUmHJ6mD8PPNZoRJxBAaT9LzXTKryeqAbYJjBg5cbVo7J32KPGnBzb9Xch6vQZr7x1p9zxU3Bc7",
  "key5": "3Ee3148WUhmdfrzCfX9bFTH75uK4YYjyLYFtrcpJxybuzTeryVuCL17ETggPWQCpa18ixeJaj8cS81o211f1pTva",
  "key6": "4vSBG2pe4XLsJHrRzeRHEXcL821ikspPiUPtRKKWB4Snm5yBtG2dSbTBs5Fqxa9gBJq7RHCX9bTKdLiGjn7E5fp9",
  "key7": "3gzo69YNBqHvvPQEYJsWmXtSRwR1yauQKFJSGXDMzVtJriLmvWir4YrGoVDQfJPb4wUuAcvjFDzvMQXYttcv7uxK",
  "key8": "5EDS2gtyoibiUs3S1tW9XoEaStZS1yKgHJ1zQFsLKkZN8boT1AwUdTD69yP9HJ8m8wubtsKyz2mwnpFXkYsYVbyP",
  "key9": "33VwLjNGfzXmT1uAWs6T3UV43JVM7FB64cdWEDuf2XFiRAWye7Nn7jt9trifZJqSPFTsbjpkXAjFSgv1pG7CixT9",
  "key10": "vRPHUTPcy5CStnw4bKgTcVKHjEdkRFArf5WR9fhZu5U58CnFbFKujfTmWHNk3i45W4DPQojt1Mtfr15Xqyi61Dv",
  "key11": "wLNwq3YkkFo2u4Nwqsk2jZrDuL9XQQ4kZ8q8rpQ8n1VMSDJXcyEWs316w6QJFBCTLrt9yxZux4GvvsFCRKa77Sn",
  "key12": "59gn5Z3UqYzKPV8mBjBZNb82DgMBXNfFhNSvwzjGqUrxXHHLwbYXC9nCoqb2Jgz3QwAdiqGG71Pk14ND46Goearx",
  "key13": "3ZsLwDnhZAbGkmy2bMeo7wNv5SLqsvC5AmNCymF5QG9Fc9f9FCFKGNQjR6qQz3fD9u9GtBrbDu3gabjSDoFnBTFZ",
  "key14": "4SaPy2t6t36sj5VZkhtEgBnkwAapNSvymiM8Rg2a8zKiZCpK2FwyJnX22FLUk5AnAqfwN56qyHXQzAJMjj3vdkLU",
  "key15": "2KpT5VkLjgBjgLn8pZ5Xtwp3xmkyXaQeH2DUz5cJqT5BFhnri1XRZpbwpmVjkHmovo9BMEdSUd4ScyHVwiFAGKoW",
  "key16": "5g99MEnkWQweuHM8m5xDnD1EW9EjmYZJJTdSPGkjRxM3h4V8AAELJKLeBsshWNnBCfVYFtvwV5b15eRPn7AAdsjx",
  "key17": "3c8D3vABUwCF6awcSNABkuNzVrxc3jqHrYLUWaLE9qb6t9PhFy73GdymMe1GQjwzRy1V8K6p2z7D8ZKF9Y64Xc7F",
  "key18": "2gvCi218Ri4P8LNgdRKubj8QyPXrVcndTa9U17pcEf1m7G2EN2DJRo3c85wrujpS93AqcAn2UBNBgbbzzY8Dmim9",
  "key19": "2uNQQHU3HGZdHKHeS5njbnRDcGvBu7f21johBn3GafjLgcvmfDwmfcFnGBtTGPTtj98ubWMjeLJuHGBVJb7x2B3u",
  "key20": "2UfKn3D96tVSpQxdYeUPbpaFhjns3FeXbC6bHWPMyP7PFf1vx9FfeAn1kh8X1UTjif9XS9K9VvtVqcwB7UKH8Abo",
  "key21": "5iAdDVFuputsn4YgcgjcEAypUEicZu9fXbzLTYoMW2prUPW6BbbjRTVDyaYPG8BSZK8FAk6wQJfCG6VpSkojdY8q",
  "key22": "22MmtwK5z4Kz7tNMNsvn2RCgbqyHT4jUrv9593SPUxBNwvLiT1ByZ2hK67TuPHQKSMFEKH6drsks45xdeEJ1NCaD",
  "key23": "5QPLhHJeBHrf4z5zykg7LmV6EUmEq8SEw9zy8cpbNuceE3dyH9jUyHdYzzwKZUpZtMAyk2MzGm2qoetqxikCThfw",
  "key24": "2LQeHS56MNWQKbTnXeBxNzvJ68KxxtC8xpr8mb2jUiYhriBt857LWHKYC8FVbVeu15SWdKKpCCMYQER5rr52KFMf",
  "key25": "5ubsxkDc4D6zix56jug64KxfkhVJNBT6dwbJwrTaSZ3TUL5Riqwh4NXTMnbbpT8MhW99yxoMY4aKRSNSYSncztCJ",
  "key26": "3irD8UiTCuoakwmnBd7BLcjJLbVTaohr6xiKQfMtj9zyKSXG111H5kmezLU7LBy7FSQ2NThdM2xsSrmQDLAwJiGG",
  "key27": "2gHn6zzXQMCsQpkbsogU3eCRwbHejQf7rgJhnr4aoKXv3vDFMqEx75FmGe21BTw54uCTbLvANago2fYsiK27esTB",
  "key28": "5evFHKZYS19i5aTogMusjDshV5tiwMFNpnV5kfEzQ6fFecTESNQW6DqFmYkrrE13sT1C3JjRg3uob9qSRbVSQtVh",
  "key29": "4sWrMPiY6s9Mvvfjx8D3H8RCS3f2hsRUVnkgFXueP4Y7LsNsRd9NwCvJKRsCHiDdDnXuddf42SjHXmCVxPxdtG4x",
  "key30": "4MKiYKqngugBKMMj8LPCjUYzy9QV3wtKwpFLsnU3ed6ozm77uN6FopNDmmNvp9Z4gxamAj6yDzJJ22eYAwH7FMaG",
  "key31": "5rQvRVGJkT5HmyyU4MUSi9dn8oWq7Vvc86szYL7a8kEntmxugRRTgfiho2jXixWNMUumW8dbiszE6xMScnEDeVko",
  "key32": "3QaH4cocckARuMKM6PQFu2XaNhCwYiSQbHuAawkqWBx77SeZreGbyHdjxvpj5wFkG4nrcbTD1vDV1Yyh9j4KbTed",
  "key33": "1q6KcGmRcseiW4v1fkZ3CtpThYDswZ2efEer1wPFRiQfSBmHRD757pYn2yjgc41BtrCieK5QFLMHaHTNkBKprNd",
  "key34": "4uAA9E7K2T4f9xYDD7KJLp2by37CRrX9dL72643s5Kg2Utet7oHV9Pp5wkzPisqyB7XmLTVKAztYRMb3hptS9QRb",
  "key35": "5KDev8kAnYonuMz3ZV8mm8Z3Fg2KZ2F2J3rfpKJvMMgC479mKZ8zrEZVSGTAZUnAoL6GZZvtmYvXYTmh7bgSVqPY",
  "key36": "5aPSiKxp737G4aVQTHhmU58NovpFeqRakzwpz8Sd1ZFbYDF6JU1cYDxoAuFJxrViusJ8y2FTujMvaMQpvMmWaamz",
  "key37": "BYM6REUtn3dcV5dpRw2sFiw8SVoLrYbjUmDKda5EAZmsdhwE29wRNcjYP22XCNecY69DPvRyZ6oMMeW9WbBbuz8",
  "key38": "2xyY2qMmCUDDxsVX5bURk7QVKLqa7fz1PYbpWeWXYiECasTcEmQNebKoFpPumn4WpwasPT5A8enrn6psjS7Bs3TT",
  "key39": "2RWkwarhWZQwRKPGE42TtpCxBpSRxkf5ndCmaWnrNkixo3J6QZDiXRMgwMeR2gqnLRgQZ2XWMT4vb6KGS38xDRn9",
  "key40": "2NBBLmLfqimNpnNAUmvw4iafF5E6hAQrx8ChgkpmD62kCMebrxtuKUUet4H5NP4Yg4fb4rzvCe56PhnFFWjPUQFF",
  "key41": "4Yx9n6cfsbaENEM9zCHVhYDkuuTcmRXCGZ1xKwNiswVbR8wiAGbaiGErrXiBWdMTCrQfZWVKZ8Ux6uwiRauJQKNu",
  "key42": "45MScVxknAbvZU9iDveVCn3BduPzWVPbAzBb5HJ7hKZaxuxAAL7u3yaonbfehDis5vcpbqLuU61Sg8Vexanr9kev",
  "key43": "efxuPzqPNbpuRVimD4y1NpiFJp9SnjdNQ6iEZbM2P6mHngPRMJeX4y5RApmpfcdNYo6i487AcvANzQYnEzxJqt5",
  "key44": "5xK7LRPKE7m3rB9k3pUMJPWujyoB2RDUKVjL5fs6UUjf5YcceaMmpZR3TzbS4Mx5Vs2RUaRkhwL7Jf3j5vVWe1ad",
  "key45": "384ske4JqcHRpVBybRgngtdPC1mmK8HE1MZduFgVbAmcxtkR3xaUDNNVw73PRdKFW45ge3MAmxn5cBrzuqHbmGd5",
  "key46": "48zoQ2ZpkC6KNHTMEdnYMHTs8khnr3MkupjZHpjK1ffE3xcV1dMoH1sFK48GTMebfcfYpxPhhZJKmHyGqD1RuUky",
  "key47": "rXQc4U2ibMRZW2nA83VwK7XM12jbT2MsHfQdqXJQyFFKKNj39LVPQwhyH5jjqnmGDNWEGLFG1XrcZckBg2mbRyp",
  "key48": "4JDu3yWgaDBssfHyDECzEWRnPD8nEJ487DptU5Y4sP17LU9NvYnqspepZvvSq3GpDbBvHrHgYUziWjccZ85y7gRE",
  "key49": "em1VVeTdYXkEgXsndLDRBGXbPBGKS7Q8yWknorscYRMaXQiqsEwkWNmp9CMA8b6e4h7kF8HJPVhzwVzHST6kp9y"
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
