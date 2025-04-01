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
    "629aatr13Fn1KJiei1pSU9gZauss3mnAbnCn5iryVHavbNXPCMs4vchjh93rTKa1wyWWHuLTreLjXmPHvMdb59rK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kuzn9JiBcAVQBwYVF6uLMmiCtqEjyTWSq5VWn2v95jHJf8jPdj1Kw29z6KTH4KCkhogz21yVrvLtwQ61UK5pfQJ",
  "key1": "4HFenzhqpNF49jrJq4Yk6ue3nV24Xxyo7hdWhSQaQc43Kt33bMBi1NZrCRVcDfyMDHVqV9BccEocQNcwNWHaDEbq",
  "key2": "2WAZCDrK18kaGH3CdSHRrqayoS4uwFDqigipo1j6K11rdayq9LEN7DjvtVuJcxFtHYxcWBKToGPp5zEDCDSGKB8H",
  "key3": "2YE1MBa6PKwVn7NKDKtHLi5w9BoQdT9Qs6Nhcrm6z8BVTNmBDysPJKAho1VyxYhYJLS7vj853oe9e8pF71fgDGqe",
  "key4": "3iXt67X7ChDpPGNJEzTvSvLHQZR28T73mLnbmHmp2fatGZW9tpzMi3GaHYVPnyzsTvjdEiNQzBhKjPrYW6qEsJnq",
  "key5": "2VwQhuvJsmmoQ1BzFvmWMBGRttTC15vbJfHb3DNxf4qhc66fVKsvJK7LMWqYQQdDdZGMYF3CcgvYUyCLqyYZEMXn",
  "key6": "2XGgiYZbJG32RcjgJZWc3oKHGdaEpnaRGPmDr7o8ow2jugDYiYpK8T9WSFMQH72CC5Cgg4XGqHLpH8fZz8t736WD",
  "key7": "5vGiXVMKzhC9hphgreeGLtX7k6GKq65gquKmjkHGgy1p2YzmCfGMSeVZMhNkor6YB9qAAVhMiDDe9AgSZcSJcz99",
  "key8": "37C6gkviHzRUg9g6gzhARz2PVYgGut5BQSmMv83gh7qGesCe3oKuytfe1FgAXhvLZA3Whmgw5jNujswczxbj9ZDC",
  "key9": "4Xh7NUt6d2fsw76FgqgL83DS4r27yhJzDEzAXzQF5rZASmrSG42CADjSUHTyhkGQnzBrCy9Ui4BGBhKVCVCC3wEQ",
  "key10": "4EsNYLDqoXDj8Ty3JGM9CmesjsZfpAcpcsD3AWKUcKsk6cxmmeNyK1ybZQ4dfESutXDEw3mCXZ4jm3DBSi97WYg4",
  "key11": "3Gci2Y529qjLFW4oJUPAYzfosM4eoeUPCEyPvdvGXVc5ZkZ2i1YQ1QKc36mEGL8EFhZMekiS3BUHDgxeuvjG2YKs",
  "key12": "3iziEEjXWyAahjRA7DPAWmKaEjDwpuTTPv9jK2i4uEmdEvy8YVge6rwnSXxdNqqytuJKRQcMCyJUbZyaZfoNQHhr",
  "key13": "5izj5xXuLmkvuppREazekSFLbLcDixAAr4xgRTQo7qzPv9b7nod19Nj69zj7s2ZddHXj9A5ReXAWUmeaCTTV2iL7",
  "key14": "2vNh7hJjhif6oMnsPM3Gw5Ek7wQyXcbvUtM24Y3awuD16s5f4Ug5top8umG7MaiFB1EvFSRjouYr9LvDiTsDUYtS",
  "key15": "K7cXz9MnKfcPNB9BjWTFnhVXaYYQsX3PoacFSrisgUNUTMsmSzHvztS6SZj6yDsDtENmL18HWC1wJNhmSBn6DB3",
  "key16": "3d4hjEtWY552b1W2rBEak8dCxxnGYrhQczW3oRXHmJ4AY9CZw78xphEUp1LESkE5T916UyA16jzYu9BkY4KrM8QM",
  "key17": "3xiaTKP4FdUJqTaRsorsG7aFSm8Z3pb9q2ajjuYro2jcEBDeEMzXk9mvcxd6yEJgxc4mkm3miiVPKPwitzJCW6Gk",
  "key18": "3U7djiZiFoLoUrYKMSaj6pSLCWYP1DeL9S8ReXsgcbU2Nhi3EDuRodGyd4XswuMXGs2toxxaf8bUWd9S5xRxdnEf",
  "key19": "34kmQbkfHXgXLpJJYRNky7KMNn5XWWV8pjP687K8Vxosv4GTSTzoiZD3AYPxbK3HPz4qxEWWSEqpspoY81axXsGE",
  "key20": "4w7ManYiGR8HwavqbUUBDbx9YQNC7AnX1FEVGSeSHUPjPBtCw2sSQrrYqX8axea6ojhjrcdGntPxEQc3EkEhhjoG",
  "key21": "4Hnasau71TYtkf9wuH62PodLuwDFJPf9VHFqEMmmZH3Loir1SpLKTYHXwfX1VgAFCzT6hpBaFnc69Lx9pYeGMbBJ",
  "key22": "448BgzhCHpWaKAN3xzy82kpbeZ8HCFmuq8E919PdM9MgGbP3Qy5Vmgx6RBS1H8CPDrVtMc4Gf5LmJh3nm6soiKsQ",
  "key23": "J7dhNcBPaRVX1KL7QqZBip5E8H8mAY1bt2E8WkYCDC4EUMwi7YbpdCkd4NwmWcJ7djajDvxSLVuFUZz8bmu3B48",
  "key24": "2VPN1Rd1ivSz3nM3gwAkz3gMoNstFPKW4T34Kfz4jvFpL5gNqLdjmbrTRBZmGrGijabSGCxjeJBuNGNZdEiLnaTo",
  "key25": "R5eY3KJHX9RFTL3WA6jGgvFoUgsoDtVCgzBYt389MPXQFawDAZjHKnr4VhkfPpCmZopuo5GHBVcJ181uFP9gM5f",
  "key26": "4LEvZjGwsvR7fDtsGDbFwEUEydZ1t3GvjtnPW4xTvqoBAb11Bxha7ZB1R16sa6ozDtvA4jCB3sD1WyBo74g1TGuy",
  "key27": "4Q4Ppe73N4BVTi7weSwN2N58jnTk95NgWgt8NuSAo3B2Fq5nmdLBNipNTMCGAAEg3QqvLx6nZyciJUY42TS2M7t",
  "key28": "4JUNm9RgQPLqBv3JfgDUZkxRcA9HicegRsDWMLd6ahArHaB1n7VeHuYjgXSezsKwCr8zEpL1CHgsGFQgYaKcx2UA",
  "key29": "3o8fYLJXLePNNKSWyGiXcu3V9y4MQxeL3d4wqJbXvCrhF2qgfcHUeSkyXaJNpGEv89rwBfhVzs9dNKMQfUGEyfEw",
  "key30": "2EuH3gLjxLYjLDeQ1GfhfgjaZ4JaG6qFiMd5m9brAwTT3YaCEz21bUh7egNBytwwpUJwvMAQLFP3SdmonZrmi8Nk",
  "key31": "4VwUC3X8kAjS5D7w4HbsiuLTsom7VQ6ChiGAUtcYbaBvfDB5vJbSMk7fGLnxq3rrezmfS24TsBEmF8Gv9chECHhL",
  "key32": "c4ntdS7hXA64RmtsCn2po8d8g76TsDifb7tTUeatkTzw5epJyBBE2Qxsp175P3GZ6RHXGv99TUiF8HrvjzBZfd2",
  "key33": "VFAAvKKV9Vo5DLgrWiBQRgmPTZVv8jAUPJgTs5Gsbs7DAxDLtG1Ky3UEMrfq467gxDudWaJFuuHxmc7RJrsaLqn",
  "key34": "3LkghcEXECCKF8LjYpqec7UHpWRQYaLfVQEiCYKg1d4rTxssHduXuDhYGzQkexPZvv1usQFkBp3yfJrgYuWbDXPs",
  "key35": "3Ti96dT6hdU5sKFtsCTNFBe9enozF27NmUzRsp9sDgyWHyf6tC8wj6radvSMgYW7eGWeSMGMynRUJ3Jy3WvXvqMV",
  "key36": "2YXSiF87FLRyXFhfgBvqqghemtLcQtXV8NrCMD2zbbetvVRDAy2JbCj49EPyxnE6xEEpWe7hJYRbeieuT4TzVkKF",
  "key37": "4uoCER1538MCJ1fUk2DEBmNtPELHXWH7CzQ7wH2Ug8uCwAVKgp5eE7RTuAnjeZSzvXjHB1psf1bUSS3k1cNRuYrM",
  "key38": "4Mp8wVhWYZ6H3LnoLg71ck6koJw7CaCZ5eMuhaPZVKP9gYKvQfDtugfRxJYT3AyYW8pVbSuCpADQJmgVKmcyZuQo"
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
