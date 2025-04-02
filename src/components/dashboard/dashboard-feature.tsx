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
    "5HJjvzr9demyHbkPnfwdWCFmfXvcXkBiteF8VuNtzJw9DawoHsrY2N69L5dz3oAdXtYmjJSwGAiFLkDP26WXBznh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rwkc91RmcioYXSzXfAtmPdhgjDFe2qtR3A1ehQ7oAV24ADYgSNuY1yTkbEB9zXifxVhiXKn3LALABznYkmHGPLN",
  "key1": "54kMwdS2czurj7f49Vyh8oeThFxXKK55iaWWdBLUfCfyVc9nUeQVX3DwcLgpJMgawDspy2Pg8s2cH1Ey9YXaVu6e",
  "key2": "5xrb7LneZjpk8AZQw1BwPKhRspYHZzTQdFnp4g6VFqQ2G522U36RDR1fNtxP731jGDuKWu5vQZXcGampNb2SuzKx",
  "key3": "4osqgDrJEsktS8WEaR28PwFYhE9Lsz2nZ77jJybKbx6VtEWcN3TGNkq61ySz4JPffHrc4nv8u47TC9erBgH9sxN9",
  "key4": "2Qhuh9qu5PvZVHCL7MTD6jTAwgWXn1vJLsZ2yBmQepnMPU5ECUgtDqzX9XNFnDY2oQ9ctWZhqwg9jccCUX3irSXU",
  "key5": "4VSJXGPwsxGRU2sKyUv9BfZwo6VHQsBzciaM7bA2Yhppq8SpNTWyNEg9HTQkyfxrnxqBwbDXGX3x5ZrPwSVcKT2S",
  "key6": "66cCyCuU4Nz8jks2eqVERB4k4y19hjqPmUM6r7ZehQpEV8SovahL8AXyfKQQaY7nC6EoXGYrFVcdHRxoR46Xv6oy",
  "key7": "2jtpEjLuDUJv2GrcEt8Wf9yGbi8Td4GmUT18QafvNm6B8k6SqW8Ab16GBcDVKNdPDeACZ6T1pQBa3YNgbstRZKzP",
  "key8": "5QtL1E5pMgjbQhj4x6ivrYJNYLK9qtmApRRXeNmc3iVV1SWXUjSz3EjN8DM69gpzBF4PcZ8pAbp4SkxSYbesyAeJ",
  "key9": "5nftb8xg1i4AaME4CF3N6qbuL8QVzMuVJVEaxfMf9cq7SqXsM11hwrV8cCpmEdn4iwUyKtL7wPpAaSvp64tLC7e1",
  "key10": "3YH5XyxNnSmhrg1VuJ4Quo3LezrQufwwXF3WJHB41rGiDBn1UxBM5wMsqFwmCsfuc9R7BnKSGKX3A7Lm4kXG3oAV",
  "key11": "4pQoCV6ZnsvaJTJJ1k9hn9z5pXkcR5UJYTz8BZvzt6K2dCBfkQbfoPAvp738J8h6iNjEBo7Sx1bsEdAbiL1YmRc6",
  "key12": "XcK1BgbN83PAxUvSC2KyfZJEA9skXovRWNvJNwBWAPsrmTGv8CDmDGPWTXMTo8ucQxByeCuvz4gpH7Gvd7xuCXt",
  "key13": "39tQYC3WsgRKDHo7CiyZazqLsDDoJjooWpCDRYLwAHxcdpmhKD13KghQnnm2QuMWmqTU6NhxcBAPXz6t5SiQcY4M",
  "key14": "4PofRLD3u66ZSWd7aNV1D5ArBUYa3DkNiJ8X5VC4cRhiJkVtv7fP8WcJK2bH41WU4HaPqwbnyNycwJjKwhSYvcyx",
  "key15": "uC47SHYPKhtKHWBRmHJtnfN3MZrHKqe9k17M72rbbHtiP1FTUg6SrC7ocoZ67z36A4B4QiuBGcLAcfYxasjHGUM",
  "key16": "2TPhZnKmXoE3J55H5wbCtGXFGGw5hrkJnNdnBEfCpSDnvLyT8SqV8kd5qzokKribbFEzXvfg7mmVYiJfmJsZUm7q",
  "key17": "59tjvLBga9gwLuafyBLepqufFYixdpATs8yYE9cmWmJytQi5nRiEG6iEiXewTHnkFqaqSKLXiz2fNj72tEsgNLGS",
  "key18": "T1kNu57XLmuMDAFcSpuAeLFhtnnknEEKmdkip4PXywytbqKasUht7zzXV5jwQUV9EMX3mEDp93BBMjZsU1RZ2Ym",
  "key19": "BC6AXACx7gDEeeJ4WKX95GpUk8z4BNbP6aNFyuTR7bnu7u1jYCnoDh48RVm5WhwsEr4S13gHbAwCFXXrQLYN68u",
  "key20": "bH3YrjxAz7umcPo8t2t4e2azDBGGEbHU7XeP8S9VbgS1oVr3YdLgdsx2oggtg37EWSz79tAqiCKXvkQYbwXHP2h",
  "key21": "2Eg7itoV9KJBRTcp7CnP9ox4Rpii1uEPN15rJk6XNhNsG7wbPrNCWdGTKHxXyqNLACt2YyHeAS1m76PPrwy4dzvW",
  "key22": "4dsPVrRMomNSowDGPVK5RNs759f72Pr5kpQroqhaSk7L79AfLCfGaxgXupDaLfYqPtNt8KHV78kZ3saEP9WzBKKQ",
  "key23": "4Zgis8XvCXqj5eSYaTCkWCD94bBTAnD48tTjkx1mdGvKoyFwq6owRBM98NVdnGYfdehVTmjf1TtRuCbHWGvRqFmA",
  "key24": "67kN8iejpT4rVsy6jdfxGPAmWBsJCUUF5T4H2M8AFCSr92gQ8WgZGqeVPuqvbEc9gmJBBMM3uJaMYYvysguMTY4j",
  "key25": "5VhRAoDRozrcC3tSbpC2VABidtHEG1WMWcEGGHNs9Nk9R7g36kHtQGaXtk17Q14jiB8wQc7BFCbvubVxo7hJw6An",
  "key26": "4DVxKHhWPsGQYowqWm176zbrTCbkSqje9wKkPaUNjZqdodF2itZ2ovQ57j8r4zSE2V2pBo4kfVNwB4L8oesLwCA9",
  "key27": "vtrzNGQqDVtCV6FVGnLSx1kKeFCcg16WQp9ELFs9guzq5PqgSsW5exEeED56BChBh1RuieSsWzGjYYy2jahNwDW",
  "key28": "2mMYq9t6hJ6i4wMHnCzpZYmgbbvjwJY4aagYEA91MTbcHRNEzPfXfVrEFsCF138ymZnQmPfABqwfQxHD2ZAKNDWo",
  "key29": "42JpsgFfZchxKkr3mrUDtFgKcoDD55x1KuYcj8VZkm4z7Z3tHYDREerj9DbkFezXBDr3VwWDnZ3FAjJRwtxn7E8",
  "key30": "5mU6Tm7Xj21gYsRobN7kAucDJEyXxqLW4ACk8BeynaoB7aJ66nPqGE8Zw12EqtsysSStRmsBSuC4ju91EaAHVXZj",
  "key31": "5yhvfxmdfg2F5SL8D5k1FrDXc5hAntY4mr61iqPsyvLjUDqKNFHPJGtjYCGWhx9CGPcf9UsWM7hJYDr2pGaXkKHD",
  "key32": "McNFn9xCSoxwCS5kNWrSpphcDg6jjkxw7uUwiua6MJk8HntQWP8Qt34qjkroYtYGcPjzytTJHF4gNBHeURGxbBG",
  "key33": "4xzMyHdmnnQEYyv3W4jnpP8iQbQyb4KLbtrH8j9ra6is9JYxqsb47SEUWhcGj4RvzKiVcmVAL3akPLyLsCKNcgof",
  "key34": "41vMotQrsoS4wd82gui4iXZy9objqP1a92BbiMVDbir4yQgGqYPVmJyA8usDjQwZi8QGQjc7H45J46c6oyej2MZ9",
  "key35": "EvtTEPJFsaf5hspBQAVYXhFK5vbcN6UnU9s4VCWw4UGMiES4TDvsFYo1ZaC5eYM1ytWLZyhZLna8zLeJR4RefAN",
  "key36": "3Vvi4ehz5Wce7WKn8vqApFs65rk3BRZbdnM9mh5GnJ5JvYbgnC8DTbNXCv7YfzGcajQjm5jUg7kcZg7GAaMZx4oS",
  "key37": "3Dc5yzm21RHtNb7fxjjhPmdvNkJ2W6YGyaMirubsb7Q6Wk59AhfzPmhWWG57NFy3YTKrFEYPQHpAWUxCtxo8E2hg",
  "key38": "GAVgKFPQarxH6SpnpRDuVXccQtJMoUEMLzzPFoTJ326jphHjimuAfkzrBaV3BvQTRoWdhJExthnxgV78dhXEtBi",
  "key39": "5x7NcffWbchV1uxhMqzadsbj7oJohGWtZqCRyPTYHaobGAAmpmLKevntuTHXrshW56tnMAHtBQUWhTB8X4q5GKkc",
  "key40": "4uZCdCSUn3w5rxdy59s1BjZ5fEED95vo4nq7JL7w9Xz8rX8a9nmynPJrxb3y65p173m8hr83UwD1NyNUc6dwVpro",
  "key41": "4o6ua7XmcVhY8C65uAUbSYBAqLDn3ycZjRzfuediYHYDYAuQDo6aR3mwjsv99rUN6g5NWpsngRBksYGJHRUo8XSr",
  "key42": "63VoPCDWBVHwz794ajMsYU56JDXNDPobPhjXVvmNAcxdXhAYp91F7E8FNRft356sxtQ58xWrLs2dtkcNrvizEEha",
  "key43": "5dSUXNcEZXF51RDzzbpJZAWhBmfL1Q6XCikaPBPwy3cnQjJtVckjq7MH91bmMvTyw1t4NQo3Gh9gVrWaw86xkbkr",
  "key44": "2ZhhfYsbCriDAqmWjSZu7F2XQLd6GDUTPamseFcDbGavf5xNPCRtYH2sfoVwqEzFrrQXCXLzoJe2xP95DP4qSEt4",
  "key45": "3ggrWoQj365Zwi5jcYxwSrZLtgaRpchGDoz7nozPeVU446jPKpEsP6SmNchzhqBxfqVHQXZ4gTnVzwKEBm9xt5Mw",
  "key46": "5x41ZQFnXvgt2jGWER7JXyusj8bQSuUmrZN8gzMNBRyP87U3DQj5qT7gkvGqq38qytTPy5mJXCiFak7M27xBta6U",
  "key47": "4i6fWkyZdBZVfPuyy6WKK4c7v13NK5R56fRS26tDLhoPAEZJzoM8fgr5tHX1Y9kKmTJup5suLMkdkz3Yjctyh6fJ",
  "key48": "5zETrpUqexBAQzYg2bXq8RYkDRhBShCgS4zCgYucoRySr4BtaHURwFQ2qr6Fo8sTXy2RR833U8hRVQ5yNrBVpayX"
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
