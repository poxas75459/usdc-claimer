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
    "3Pxkj7pZUbQh9NsWZR3825eVsHJh4kv6UfYYvK3arfCa1mWyJYuzwfo2r9SmomroPG64nMRvqeH5CzAME8z1pHfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KizM7a4MCt8NS6mhxTevj6nfodW9Sqy7jitfxhcJax5kKpAfocoW9DoJJiCmvwSfnTGYZU5HCncWLbsUihLN56g",
  "key1": "2WMoMDACNVh1oEWG18AGtG6ajAXa6Xo6J83xRLhpnFH6upR7AryB3wJEV73BwnFdiS1KuGXwcKDGkkWN6SVHgafp",
  "key2": "SxSFG5SjDC5Te37cjEKwyPbMbgbEzeUhubpVUamn3iMf19dvHccEidiPXcmSobLbZYYqGMmPwZuB7CRKF4ZYTpa",
  "key3": "2vRTro7RNFk8ewruBkQDiu3WcaaAKmtRhyhkKwgp3d3tFHrFFzDFRZsK4wL4dozCkkuTg6mNrj3ohm74jBsLRXoV",
  "key4": "yXsGF1w9u5NYkKmBJgis4BFfrhNuBcTeWtpaL8Q9xJ4buW2QRjWuwWJEDdT8k8QnmFNsBrSUcHsjrL9yMkfJMGy",
  "key5": "4WTvu1kHgwy8tsCuzfFc7aG9LvhLt2v37qcSP89w1HngM28h1J9izDpsAH3UYyeboYF3GC6crXxHrZUP1x4mnKiQ",
  "key6": "4dVCSHAJENxuDiPywXiUzAJd2rtDAEdb5SB1CZ7zFNcuFYfChorJ9v9BPJNMJsTy6rqsP2KzuCaRAVamgbaivihf",
  "key7": "3wtroRE1TAmcy2jFaoVLdGtVSDvfw5AqdBrVcoeGRtEws26A5sr4FrJXSb23geTHtJWw1oAsb5KGmreJcspX47Mz",
  "key8": "48c4qw2bzKVe1GNT73qfkPsFp9ARxWUsMNwksVCx3dCkxxtUtJqpA4gsfLA1Ahc2QCmHLGqPYn9YMYBjHiDngndp",
  "key9": "64JKiDS1JC7TiC2cTY6fnciXjUgEAXJeSojWVS4T6DWzbxe5Yhmj5fK4m4xEDmEUHmsWDjDU9GzpjAZGAvfnEqh1",
  "key10": "4t5ir5fjWby6ySFFcGedhpABWRDmQ2RNAvxJeSRbcXoncviyAumS5R1aA5RyhBBemSj1dDxsWgekS6LcbkBxNaAo",
  "key11": "35f3Vas2GFTUXMhFzQbMWFnjpbkgP2ZfKkvwS47kFa3Eae5abY8bKgBpWKRsX2Yb5DWvXJcdYYbLa2v2tQ252PpF",
  "key12": "4S64ordtLn4tFfnRk1XgTRuSnfDUy8HaH8gdfkbT23AEXLeqXt3p1xHricaoFN27py782g5cH5dqAjgcKgAxoRSV",
  "key13": "JroHSxJBuvRs5KCsCHJNQP7CmR3MYC13mGe2g44VRmvkGra8q6Yuf2NeQQ9QMhGxJmLP6q4HS3ThGEUSVwrXNTW",
  "key14": "5EWuVYNJkwg9VzvipcVtzeLFrvpUhLFLAnfVAwsWPLZWopzgLyaeyFcxmiDuGwxYzbVna3uwiMJXcXEZdyj8k38K",
  "key15": "3AVBu5fQPHWGkCvDHTv5gkHGHwk9VrSKFqu5pnJcpWU1qnYcgrURhVkV29sA9R27R8chhwJ2aCqYsMwHHKB2HFBF",
  "key16": "3eMW4UzfzxUCP3Coqps9KEzQ84vh2Bqityd8EjUsCModYCUCez3k8oLVapewypX8u8YeYhE9z4cyHer6GzyXAGfc",
  "key17": "RnihLeetPa67tjvpgUqVsEe64su2g8LS8hNVLyh2hRjUUxCE4TXFyMr1HS9t2APS45Hdcv5knJbpoeGB3uBqMy6",
  "key18": "4tJwJ5h93yprrsEZJDuxANstsS6MioCVW7LTP8kNqUxcvCkjXF3Xokvq4rwcTAPkarmDZuiTkoW6aBc8wd3qDfiu",
  "key19": "4r5ryPt9CrCcmwZvtsHMa8p4Cth4D5BR3Yb42CGJVKHeQPJssjrvY4Qmb5HzgATY7muvLbycPPf6rvGkC3CcZ8b6",
  "key20": "Fg7TyQFDfvgPFFYNJCHiU4AW6n4kMn7VbUbtFM8rcQifKCcYrhTS4jXzQaVzemXqoXVxrjzyymSK2RdZwfFBpGX",
  "key21": "5TSDzp97Sv8BRfKPxQkzTGZqUAAKacW2Lrctuh5xagKMhSaemenR3Rn12fTSbPoZW4HaR8hUpJ2PoSc7UrdPVVZp",
  "key22": "5iTF48cvyQx66uqcgy1S5997Xo3RTcGs1SAWytvpyAJuNVGyYQwnzC8YynuMXoZzXermE8zqaih4ncovNXR3aPWA",
  "key23": "3KKaThuuUyhDqZP4DET9RSFeNWShTTxxRy2Mxadp2thrCDniazQajJBaUyj8MFQVLHKRpaS5x4VbeZtCHjNmqoKd",
  "key24": "2Rz4nSrGMf1NH4J9NPSiHbY6anobweBmEYhCtdnwnrg6Aiscjw7Pm19bwFupw7nFUBsCSnQiLUdcob1wPd6cwn8q",
  "key25": "3eTdKeKPkQbi2m1wjKC71fPWYkC3AYF626iBENPmYUUEoegFuKwEbbKCM8Upp3YBPF88yT7JzKyySwCQVDxhSwqc",
  "key26": "61SjTQsagwmdWTuFf1XTvPsAyjqZwJirCfQgK5zhLCCRPsrweqiFuPfmrqjJ3heeoEzmiTPXNmdxhm3K1UEkuEuM",
  "key27": "2UU6r61UDMSKRoRhTzB7Hpa1FsEVKoneg2oBjUf7WhjXazGKLQdWfZp7immZZ1GAJsWbKWVux4ZcFW2rfH3WoQoT",
  "key28": "3utAZcyYZejz2p33Gmmvg14HqKFr1R8HdnE6BN9HggYw6MvqUi3bNiCwSVSuzLwUrTyycKSgqooyKhtd6haCwu5V",
  "key29": "38NyKPRT84eQGifqpcFrUgwhDDRbFVxrRS7f8WsevT9fFCY1SU86V1QeBppFDUMqEAvnWT3mdb2sv3NXoruRmWjm",
  "key30": "B8Y8tfEgR27ArRrPMwznDe7111vn1nPjUbttEfdqLHja2jNX4717CkXhctDE34XmKJuhUqFnJvY1gnCdchznsf8",
  "key31": "3FuZW7juxx9Rc8AYaA9Wv1Z3EBA7DBMFsRiWcU5B5sbdWPrjyte4Vr8FP9XfWRtY4XYmRJ1eEo54Dt2aqxC6MtTe",
  "key32": "5E12jN1tr8hSuktqdVjDj58bpkY77FmY4VMTRLD7x9FHxjMS1wzQrLgwGMFQ2HCmLJ4F6ZdhKsTUZq7VEogoZtuB",
  "key33": "2h8KRJdnP56ePmWvF2AM7LuUwoUB6HStLofThgdAnwAqdqYtdAX6Jfckx7sbN9UELU6irusFugZEwTonGC9TfwNN",
  "key34": "5HZnHc4ffkZ6qvqEjVwngqLmNNiJD9Fok1etgggsezDVXjcWWF9g59JLUo9GwyNQ8YsLJKAR899VrnFwTxCpYM2Z",
  "key35": "5A5EyLsFN4uAMgH3R3etaQ8U9rbf7xQnLE7EReX9RdGQLfqy6bGfukG3Ad3Zw3mcnebwv1SoE31hzopo9YSYiRbX",
  "key36": "td4BiKPfvEnwu6jUo4fhaULzzBn5Dt8t8Y9FmcYaepDmDt99nTENgDwQxRbbtGAWRj2QDUWAKuCYBXPJHokGw2M",
  "key37": "3qjATMUabAqBWH8LwoNs1eBmtswaPNiRS3xmAV4J7jSof2zeVik4QLw3dAPXSwdDFNkBgC3nJxrLLs5gXs857JTn",
  "key38": "5LXm9emo6uLGqa8h8Mqn3C5q1XViWj8b2GtBdyAi4KPdVaXojGEnEKkKipRWJDBRLRp1cjZg5bnf9NfYLsXrpvJM",
  "key39": "xSdzbmyFWLTRrAYdra2L6B6zjUSQaSzmgvBwyeEtGoVSt5oK9hGtq9Av9aAybnjYYaW2zWPRP8rrsvigoN8zjCx",
  "key40": "5stf5Rf5CaGp6GY6KU9b1CoSZHGSixc7d8tFQ8TkXt1DrTVYDsfU2LBR2kKVT1qTiHEkztw31aFw37MRP3qeV1tf",
  "key41": "5RgJF87M7MpZBR6hBcaNZALbqGX9ujQq5jQikcdTEtqWfczAK2RrUW23iwDngeB43R8jxF4WLeUx87aythhuuwYW",
  "key42": "5wyshtxLy6FemP6rDy8YojU3kCkCxjT9fjE6aqMMTBFTQozSx3Mzgg5n5FnKeTLk9QJDi4JFJ1hv1tGhbXFTc1Rg",
  "key43": "4orvDtTiFfZk14iyaWgrUZNsHsQZQezrDsKXrSjTefb9JfXxucc3f6AezD14JJvwVrpLNQd3WzcaYR4QyiKZ1jcQ",
  "key44": "5LhopzPuLfv6c7BYU3dTREfZKW2cSnFG4mJML2YTHwVqZXW21Yq8HcNJmFusjjVH8xvaTcasp8zH56NpwkESVBXj",
  "key45": "5dr2mT7ivNK3iVtJbpjLf3FAHbm9NxrjKnHBWXsyeMoCNCpTkEj5CMDv54crQf5YTmLz6NaA68jvD8Ng3YmDAT35",
  "key46": "RbeygSZbwvVvKo9FQ6xDTjcvuAboiQ9uWaqowTyYpWzLJ9BtvK19yZ5RymoBhoy6KaAKnnDU7HPxkgc6pXo4fhF",
  "key47": "2uQPERNVHSAKyUheVpvCLf7m1ZQdxgXQ5n5bjxm9bdaqp6EbytgDEaVxJ8TZiYkpGHcGKqyqoFGDY1FbVgNNNL2a",
  "key48": "5eBA2fdqQVs4HAccr6DnCZBN4DrTHWpNttaqCHC91Sw4pGyHRkqBftcGxKLB3HN6CcDNh3zUfiNWVR1DWRUVbWCB"
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
