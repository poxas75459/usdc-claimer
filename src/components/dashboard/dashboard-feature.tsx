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
    "4tZ52pgeiaNBCMnWGxmzMtqpGvp7bk34HqPxHnkKBmVmvUNj2b46TQrm6nqjdT7firQdKVUYHUj1U64gNofQSfsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55aYVyQ1tzizRZttkbqbfWFK7Mh4FwRbXa8Y4fnyMPKMrAwKprBkQQs3WoX26QSpUbMAwJj22QfMJ32CvKYcEeit",
  "key1": "4RF7naaJWziQP5ckWHgMJgZNDjpL8Vuwy1wj1WBR1Z62cv9BjAMqnHZyyC6QcE1dgPEpoGS4dVAyzVMgXdKwZa3C",
  "key2": "4ZmCQWufK69J7zUfcSryPKaGnNvNmjrkFXQ96Xa4FV51yVcaW11zNbJrtPP3zmvhScXwnntn8WUwGof3nhFtgxfs",
  "key3": "36otoe22StNAwmh1RUBG3rDqhhAUsr5nNpf5jMr5VvZtopCBhvYRcHU4dhxAPyD3k1ifo75H6Mc9F47tDCRQ4ggb",
  "key4": "5xCt8yKGGda5YXjXr3iVcn74P3GNJG919N9sXhX7b1vQwmsaYjyyJt58F6SzL8g62ghC3Nhct2LkpZmSqTLydx68",
  "key5": "2JZDCUvHEQJuaD7DjUSeebSCErQB9kfRvcZEgER9y5YC6G2ohehva6ACDYZQhjSoAvHQB9U7EagFyF7j6oG1e1kG",
  "key6": "4TVx8NT8U3yUi3KeUvYeW5L2DjikGJu2zuMPsCVN98xWh4vcb28giKS9FN7CVVpG1UAp86BEsJrcLTwoTzDpgUBF",
  "key7": "5JKvF8boH4Vs2H1fguxk5q2Yn7xSP8kLBfmyfAABJf3wPZpxbdXF7x2QiyUbZhP6McrbHwrLSxd7TTUGKS2gcDGj",
  "key8": "4WRvJBF42NjKBvEN39zvjaShDdJzqK215PDv76vRsXjpayx7BXzgdvfdGoZz7DYcYgrVhAbmqmozVZaLajNyQbMY",
  "key9": "2yiZUmNstfgsSrQjaCv3o7CmS9eDCJMgdkBiqeCSJgip5cgezJxxxemgLZ45FmV1kCLNSvhKLot427iebAt2ZRxN",
  "key10": "LXRWWYDaWAYvjrkAd3QyZxbZyZD5TW6aheMT5rQZN7T8a6ZftCx9hw7pCMgdy17KjT6xjCH4ppMHV8UNjdoZyYv",
  "key11": "2pUBBf4wtsR9WgsWwvzJi2uouM2f255rx867AqGwVpifsBaZyecByCw2m4RtDpYBM22P1CEg6cZKqr33JtSDuQRm",
  "key12": "4nHDpKaWSZ7ve5RBaxc7Ryr1S1XUhroDX9vYv46STenVdE5NSB5Y5BUJxgN1d6hLTyeks3BatePA5dQHXZwtvP6",
  "key13": "2Vxut4V6fMGEk67tWdhXuZnjrzneWC2KDNatpt4bVER11drNyfkFAQPLt4Kwaz453Grfmntf7EAD7NfZzSuLY7uU",
  "key14": "2mWhaRyAYgQ5zDepMRNX2GfqyzyfWnsBPuF1YyeWRzyygS6GPg68vTsNDxi9LyPxfvF97oRvHNQTinKhrd1eHozi",
  "key15": "3FEq6xusY7JDAC2CT2iT6mVCcK3afRTQiwxAAifMYHCXjr69GDQiG9d5EYvVR7hRa5piM3D8ohn3P3ttnbuxZ7kx",
  "key16": "2v9aDdE7Aw28NhPvzdAJqStzer9m4uo7XGpo87QbofN9oWcsCzwM3eM6dEU4Uwtuv9Fma5jT24cpcPsU8o9nGSwp",
  "key17": "321Y8c9mNg2LmPD8hNDBnb92bPauEmv5LcP9vnisfdfg3aFW2TDVwmAUr3HDEC2dHsRuuwpnZZSPxzvR33id8gUF",
  "key18": "5bjTFEtEvwg6EHb1BHBRgZFbAE5p6ojUkkj9XEeec41zWaHaWfbcwK4dwTtfrnAcxfEJk2QyTHQumXsY6V3pDaWu",
  "key19": "5H8bgEccuVJwiQXcpx2xVoPJoTBwjynaBjpxPgGqV6KpkuCW6xyj66eqBvAVej2w6JNJ3nKARTCBDhcMpha2FxNZ",
  "key20": "21L4wCrLWSyfA8fUX1YiSnagSFhBon2ndZWbXB6chQJngTyTup6bZMTwMmUwLu4dMaQ74X9aP11RsU9RQXkJiu8U",
  "key21": "5ftzfPKY6xz9frU6nLxcDDwY4Br9RqZ3CJ61dVNVMLKmAVvB4jmzSmCjZhRyugXK41F5XKYc5vaFSSBSP7VsRf7i",
  "key22": "4K2HsE5tZ8uSQd2mmkgXzn14CpGE3HWzBWSM8yGKMKTQLeqsVebh4SDnqDRV3QYAxonxSH5oZ4uLYpaHidhJjuei",
  "key23": "nkBvQC3FHKPiLBy2wJD1EWAWhdQ9FEYb9LHV498mb26WUfZhMfgYPK32GYzEVkZP99KJpMBt8rJG34z2ttxNRyh",
  "key24": "3M1d9BTBGfbRQry7P6TMD3QXPM9QhsgcXvLyfwRMhshDjA2ApYHW4P7LqV729xXUvi9W6MoAtVdXRVC6Jw7zoKJm",
  "key25": "uQF4mcDRVj4Hw71YqLre9Epgb3WeRgoTcS8sJhx2rRU8Nfgs1tsZJuiSM8Xh2QzMmkTQEZdGyCdhv9n7bggAhpT",
  "key26": "4fBtrysEKSZGDmTiwtF2xZs4c6JR65NeAx3kE538Th5cceq7VkYzHaftwHFqdc8crvFFbRMWcHPkBaf926a4oJQ5",
  "key27": "iMkngfgoQ1tCEfnVYzDHtewYRd5veaHeyBJzgWRdRzCZnYscRGjF9vAAC261jFZBekPSQjgkDezaDCeXaK7bGJy",
  "key28": "4MwTL1WfRkf87NYBbonNL1bV4KpMboN2Eta84gLyvjsGubGmxkoQMUGHqjxeDoQ9qdyi6MiznTXvF8YDd8i9xppv",
  "key29": "2CeF1homNSEqwe7mcawXuNmPc6TtZzMzYMSt8bbQ5Cpf7EzNFgRH8WDAzq9bjamAai4tVvkvshob6qLKHMY9sspg",
  "key30": "2xM8HwYoJnTGB77CT814zt8JMn6k3jsYK4xaLKgRg2jZMkPu4U2cAVEYhdVXdLwFEfXbH6QFGZvHHBM9xGfZbeeW",
  "key31": "2T4UErP33ysCtf23MhnUrhBBjG1stVtTmvBVeZWeHQn82vBB6rwVJ6X23EkSpSq7Q3pT94Bxtt34B4dJ85vaSwYp",
  "key32": "4nv1hJY57eaKk4bPdkdgGsHLhbWu6TCjuSaFjpm96jjWVWbh9LPdGgGJtwViTursgfB8duPiXpcGTECgvvM9mvVA",
  "key33": "4RQDMY5o66cCRa7x8znLkFbeG64o1AvQkkuRfy5P8X5D1xkfDiAsjRUhUkNWYVRgvjYy3Nyf3PCdV8uXpkpZvdpm",
  "key34": "2nqUUSXXnsUZjg7YDwayFPrgTBDgMfRAUMM1SrzVmjfNaWnMx6EZcYNfnPMNEh2mX3R1n3x5Cz1tE9B67HVLAePo",
  "key35": "fMYzKaDWAqWb1X68w5aciqooCAcgjjiDZ67w1FkEy28KM2De4hvvvD29DTSTSaS922dSD8f6qKFn8itm57xdWaN",
  "key36": "4RE3wdr3ykE4u9uEGUeKSE8hRH2C1HHc3pWyjL1WBBGY3bAzjGpkQCS3a8pvPaUSy3t6Az5L4ns1iZwCps8nVU33",
  "key37": "uLrCXNFRNaHj7A9JjbKTXKPdmz6tYHMWNj9ijdHFjmu3njCXLD3naNA3UBdmyJWHY8yUXacgBY2Jh6rBJ1xJe4f",
  "key38": "pojrpPmkzAdjMMCyKr2JpYyFyxeQAQCjf26t6Yw3cYwrxzwP3RQF1bKJQPzNfLqzt5Uzfrt1p5Ubu8Z61smmhfF",
  "key39": "2QFgZr7ii7vt8qJeEPgBfvE8UqEcqZdRvSE5pSmSpv6Xhsj73SnKtknriY89K6y5u1uAjzVU9Dd7RYnoWvpRvfuL",
  "key40": "25eqtGLqnLRhWY8GNRudc7m2sVP3RW3wBp9E2VV7YKaYRkMyH17URLY7iu6mGvzhkWNvMWoJYXKZkZDDVSKUgx63",
  "key41": "4i4zP9gasq2W1stvrkeUSKhdtKdbxsc2iuiVcrXo5vHMzHVwddyBYEcUz6qYHom4X3pBNb8sMeddDyW4Yqg1TV9M",
  "key42": "3GWpDqHvDNX2koeDoPNSF9tXSetp58TcanPg1oUktnqtF9ThudgN32xPc8c6LrGH688trNN7pxNocWcrc1SvLAyn",
  "key43": "5JNx8YshFZemJXVWnYDtBxbmMyhDEbQ2v32HBXzARiCCsA4czDLwzuPFGKeMZPKEnp1HQHsuYhvgyJwRY3UtyeLg",
  "key44": "3PmK97miuMEyKEkHibJswsVktMqzuLsAbCNSBTtjdrDHTMWhtc54Jso1JNaD2dpqF2guTSnysJmSJEBZsjn4RkgJ",
  "key45": "4vtQ1aCtuzfFaxJCwmWTDj4WfP1B5cP6R4ZDnpdpBv2ygq3BbsV3Tek99gtDFj3oCjgYezF54CaEsp8dr3NLU5uQ",
  "key46": "2RWRQygDd9UXVRAGoryBAdjooSEMbe9h19aTaddjyvzPeWFxyAv4JNbiHYEfRrxygnWqP2Sm4ytSuh789LPomPuv"
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
