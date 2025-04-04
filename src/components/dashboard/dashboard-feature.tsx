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
    "5BWQ2LuoVxzefG5C42yK35vnrqL2h9duZ6meLMTdudSxLXBZQqFhoHzhb1S9KdBJuPaBDxHchTWhaTtueHKwcdJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "473bo3owNDUodB9982vaJTPz8mbHaA1rEUhuoFm5unABud59ibh4SHDwtnGpcLncJs2saANrZ8BEXbbNZWQHURq7",
  "key1": "2uq3PpdqmHV8aKeM1D6Pn1bZnhL2WX8AkSpWNeSo3jzvFpaH5TBmypkyMuEoyiHMvzw5rVbYgkntYJ3C5Tj62Zy4",
  "key2": "39gAerDycPi1HbzAMPzo54SLZJtNAE6eqjLYbdp9yXcrc8FQzeLF7BqXQdvgi5cn21wH6CTbre8aMV2NyuBUoa6N",
  "key3": "D4MWJ41W8RGLJaBK8iea6VG4whe4rF5womDQ4eRBuwgxsdyFRYu2FhypXSSPRgQg9489TX7VYWAQT6TCk9zwNdQ",
  "key4": "3X5rsQ2r1J7A4HBqZ95DZZw3SHsozb39dSLEQ422t4zN9orK9Kb1VRRDZgjGY6UDv9y9KnPprCCzcjxZEET9jt4B",
  "key5": "5w5kFDa48oRDDumjD7MXJ5CW1eDRW2B6fq2bgHZ6JCXQ8QSSU68Maw6VneWZpZFhnK2yqBz9hyrpYcof434kfBAt",
  "key6": "53Ys8jpxXttxJK7zMZ2nMxHYNAAmNQd3n6e4BMfUFxXmkUFSuM4C3xgi9C9K5vaLPF8ETtULfkAcdfsFn2WMaUGY",
  "key7": "4BpC5MSxNgBRYZEtKUj4oH2ZH5cxb25LoQjB9Xp1xuU1pHjXRB5pfJ57iTKy3Lg5MhTNyQKKRagnsv7pafTGSM75",
  "key8": "5ne6zE2RPHWfM8ETjHzD84Vg1LjcgEHuYyx6tYULEeMtbuSWiaVCVBnNm5PD5jRGSwjWuqWoq6BPnmw2RGV8zYqb",
  "key9": "2ZUo3TguiJYw9pPMyAhCjHiLu5aFQvCX4pwuu9oKATEcnSS8qVRJQz2xjvkFGHoiws8hShZGtyFC98igL6ury51C",
  "key10": "3TDYbGXWJbfBe1Ribs74Pq4dhrz6JGfokTXHJMiaP3C2HmVLq5GuZ7gASnRimsDh39hk3Cv3GiZSdHk7AXQ53y8e",
  "key11": "3hiuTKHF14CdNEupjTyL57t9jMooTdLifrZCyKQ1XAABup5PGGt1w9RyUhbwYdG8KNed9N9PWWBDEJfyZdKFu3U2",
  "key12": "NZNN46741DpVK4vzV2QYd3QTGEPoBTs1EBNA51AvLJqFR5Zq7SvfWtxHcJw63XwkuzZAUj94SmLuTkzzfWBgYE5",
  "key13": "5VNHGYi7AFKmuFSNLqwfBS7E9VLSFKzDxqma18hGpKEfofC8oapRcrtf7FdirwWq5dCRRnppKvtmvcNCVV1tHtj",
  "key14": "4U7dbAfWZzUD1JJwmtwviS6MfeGykbpSNnTg52L17wAjsaVKee2C98wPYLJUHrQbCzyXYKTmGXYKQmqbN5rBNoKB",
  "key15": "2gjpGFsPdRhnQzcW9Wtjn9VX9SpV91p9WjyZRUTApi4N3meUQBZLnmLdV9Q35in3w4RZH7iaP4FM5VuCStc6un5J",
  "key16": "wK9DmSc7BNrmPFxihy15CtGv51dq7bdACDZwaSvuUpAHLNpY7pggLuMxZziz5FapALpzRUyQf2k9uEX1jdnkJ73",
  "key17": "4m19EWPr4GoSzk8obeHrrvFkhTdR6TcNNpTKZhuSVDUhppuPmqyyPigDNyY1yqX6xkcKJ2TbnS2aHD5KJgcgmjcD",
  "key18": "3idpaxdviMGzrf6md8ho9oFSfbboUSXrjAN14CUWqisFzUPtBQ2gHUW7mad9fw39owG4Mk43FQFn2ggDQBD4ccM5",
  "key19": "YuioSE4N5m543HPVfCiJS9qWsFnpE4F5iJAAV6fabbqnYm1eWPyr5WAqof1epLhDF7fnUjDgesm4JTWmExTvtnH",
  "key20": "4WAbtjskAtzomwvimjzMjGdGdChFRNCqKvJspbYTQfvYhE2d345dCsxkto3yeQan6atMezDwNnaGJcJdb8ns2Jiu",
  "key21": "5eCCQF2EcbXnX2k5jwXKTK8HWruj6d6JhtcnQ9zTcLXS1fsELm9ZgrmpJB4Rb4Q7akTKsrsKMDVxqgJFoJgYvRLC",
  "key22": "28Nc7SEvCkrQobP1P7KeoHX5NQPhY4REFGYWxonSnQn4RXc2uTJ6LgWwibufskko6hGnGZFiywnYJgMLMRxYakie",
  "key23": "4me3SxfuHyF4UfFiP7Gxe6j5r5ueWVqiRyGdJJKtcmJddgwDwaqghemtG7zxk7akhHQmzPSURrPXUGrCZY3bFxU7",
  "key24": "65hEGffP2Nq45di1RRZWaKdbVFs63uPPjYrJZHkhCJquM1hpUn3GXtRw8z8SMUpRKe2sdNvXiD2xsNpYuW2f33k1",
  "key25": "5oDknbKFPKG1GxmnsyY6efVDKMtDHWynqCypsDetUXChhHAWBZDXKej4gvhkAnZ2ZcNL48AJzviybcdA8uXnABzb",
  "key26": "Zzcr8kDiDuKM3DwKQoUBrsCxjzWP51PPjhvpPCzBKJNNdpaigqQg8anajhU6VmjbaowYPxjHy224WCXUWykr3xE",
  "key27": "5Xkzj6EXhH4j6SiDX9XULQvWD3U43MqAftVx2cfk7HkgUyW3uZsYSUwGRGEtFW2gWj6eszF2whvLtkYGyekPiZfS",
  "key28": "2y6WSjifsQViAdDKw3ALEDtALg7CK6pNBeCdLyUp4QALictAHeXaGBS6JXX19KomPqa3YHBirfPoDX9SiQTD3ya3",
  "key29": "5SD9MA2R2tABxt3FFjAavLjte3h72Pj5qGN3Gw7NmuLqAzdBdNn4ECsHKeXy9q6Nnq41kWchWtgH2BBoLzJjTnJP",
  "key30": "24KBMPftdi47afLs2HeSmZgPx5AjsEoz2BCZXZNYbvu6GLjUUe8phBvtdUQH9CbbVhD8TJR8H5oDYrRreGxvXctg",
  "key31": "31uCT1Bu8k8fvLJAwpw8Ti1uU3grxWe5mKYiu3LrNUHEA7EfikrARJyQExDoRGXiM1eQmPR1tugSFN7MdH1eB7Ka",
  "key32": "Yaeo8Q15c9jUXqm1vYYCDgQTvRCC9xfA5MaCSSwP1rNaVD9hLyyLi5YDTCJvULRGyWqGWgjiP51BzD4GWbg8oci",
  "key33": "3mdPWHj41kinxBqkFt4Wc4ffivyjwdkraYb99h9aLcmaThBmQXwMURmW4zQ3JSPVw1Dv4nC5cGv3HTEctjBoCP9c",
  "key34": "3R3KujefZx82E9PCyBbbJ5gPVkZRPZvsE7j76sTMru3YDwezosMLjN4qTwNsduEvtA8SLnTWiBEicoYDDn9yK8V2",
  "key35": "46vAm9FwHze346D2LAJYVMGMxYAqdFcNRqHff3YGhRBP5P1eUibJRSEfVa6CigQZfdBr8BMdmYDmCLgkaztm16CE",
  "key36": "GF9sSYYEqS1F6Pwtmuvk6C4T6WNF5zmYRNxpG82AnyuVk9DU1ze35WyWdvNxfNbh6MhJgDwDwaXuYj8Sw3Gsib4",
  "key37": "3pPeYCPJtKnb4By2uoMEg77gEg6cUin4yAHYsuTW2DpN8jfs4VftyxYdUZZFatX8MpC5gNz86BtU32ku2JDdDkY",
  "key38": "3a8HkWkyMQrs3gRR16Y47ZtFSkRMKzpR2TNwm6MqKTMhtWDRGbAf45LNBk3ovuvCjtioeouzsA3K2G7imF1xsBHG",
  "key39": "65kJ3Lh2AmF6VkRQVRmP9muDJbqcc8HwVW9M8x32TiQVvp4M4k9T3ugCZpdyFDbWXwHmkAPbDR38mDt8S8Y15Wak",
  "key40": "5WR5mK57bUEMBaXYaKfy9XMzNzo5QvP8jbXHMwjwuh2D84ZsUunziPr39GhpUsiZp4hotBxno6dSFJTcytyPP1MX",
  "key41": "3N43fzwKdSRJkrjEJqVE5nw6LpGQEg5ChHeCYBZkD9VqSy1s5DfdvZm7ML5n6eshGutNZdM29ThsMAZL7aX1fgMG",
  "key42": "2tKyMme5z8UCJsSAzGEQyPRf6Pu6Ete9mhU3TnLn7tJmT6h1A8ugohZveK3fitmo7xWURcNcH26fcAeAb4MMoCsU",
  "key43": "2sMJjUJgaD5zFN7k4epU4AXMJY15aabJcjZX2EZ9XuLs5CMEM9sLKccotS1ogggnhT2QRCDYm36mXC6ZFRvsXqwU"
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
