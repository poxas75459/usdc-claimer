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
    "ZXtyyS7YJDtkkg4LEAbSfJb2kLyGCwCd1BSwMtimAF7uLFhQcD9yFHa6S8r1dXM46dkAEfkWZVmqm2wSKua8LiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tmgGPab5oukupVABLMrFHgTrFy28tPAZmoJxB9BgJZXsKkV4hymx9DdAA38Mq3MwHnSxuHiuw3SyXxzNMXJe6Cc",
  "key1": "9ioqDHccThdhZiigwcw5TmXYGVpsAtoyG54buDAb3uFAGAsjKngVukj2zktRLKvDsfifGhvrn3kcLsWyKWugwU5",
  "key2": "Tx5bgYpSSC54JHsYJogjnB9M9aDecwbhhsMMvMueqv7L1fKuzmnfAnCbAMjV3uB98kpFBag9MbzBrnv1nq6qic1",
  "key3": "2WDFfnsNxcGZM2AptGCEW8kWHvqyqWvhupFQj9Lu8LW3QEM1gSMQbTxJALuGrk8vjuLUH5fmgqorMH7tCuMnvFRM",
  "key4": "2uzj2fMS3btRKdhE6v5g3FfV6JUz9nXTyVN97iNR52oK8aELe8A8hvVNH8R43sV9KhMg4EbWqnFbwMqYaj4A3XWs",
  "key5": "2eN5EqNc8inW1FaVHi5jEbuKMpt1i4Wye62g6u7jQb2AkxPy6x3Ytj69cV6X3BFWP94q7kx1oZXjr7w8GqAAmNCL",
  "key6": "5zLUZ5MeSJYVmZmo5NmEU4eZYNDBRQ53L1Md3DnvZeZasoDYpeSWfptk1FCwmARPmxbQf3TNTdvh9cFvCxiRNAYX",
  "key7": "4AVvyaSTpc8WFxk4bA26xbu23QsGeJLpz4Kkooy9qPgiGPzrxdxWfzgQ8Tf6LGaY6kwTeb5o33ugGXBzyrgMfAnG",
  "key8": "3wSURZN5rEp5gorCUaETis6Pm58D7A6eMXtiRV8Yre3C7w42ScZVTo4csNNwAW8oQjwDAQrkLoVWfeAFmeGryZCV",
  "key9": "5sv4mDscqM8aU5n6pG94XXMe2WiajXHqpnNbvpUU3QoHKUN1WV9BF4J5KTLsNm7Bwd1RuNUMNdXq5US5n3Wsvn6b",
  "key10": "3hCVcVjktUevQvLKataJNsSZdGj8DGDGg6NbPLuYdVhKqjy2Yot72qw8rme5EjP8veppWmb9yb2Ej18GAASkg7Gm",
  "key11": "3ZnaArEiHtjwFwMseUW7QA6fjBJcaFBzEGyimDTFAQs2BurzLea7Vm3vvseCpV6zyh39MECbXeRNBYNTFBu3b1ge",
  "key12": "5SryjPUjiqxDPcr5VeGLnQP1K21NksJHx9DBfK4Vv7b9xNeUe9f49y6c8CzCcV4jLjbtWhLxvuYGLineqvtJyMLx",
  "key13": "W73pxuAPmq4U5gtTsE5NFg5bEdZujwMhtHSY62nibJ93vKnbkCJ8Wo1Ev5Ecpz8xNkAEApi5n6idhMUnRrfYLgt",
  "key14": "3LKTVWoPue81gco3hNzqxM154zVXX4znfqLhu5gVo6caVnTXahBFZDP57PvNRX8YoaLJujEaW2njM5QiCVpRjbmV",
  "key15": "5HBLWqhffAPwaPPH8zRKgoyAtv9FUnBDhrK4L8nwmCPtVFFAF8LhDFP7wyNMf2DvEnGPLwJTa6jiq2GhVevxCyqM",
  "key16": "674RHMq7t96hFzSBEWYNS9Hs4yUYpnZ5WxwhCstLmNhrWzfEF1MHytLeLw8PJE3LAXzZzdgFockgaD8V4k793Tyj",
  "key17": "5zJPNVQnnMU5AwjoorwZsybNw7zYAacbBYNGEPZCH1f5PbFmL4qJiUe8ppNnDFer7JZww3aLihNn1EEsX7GJCxNF",
  "key18": "4GK8pRwfoZkgGUB1PfDoXyM45XBUYH7AGrv4VZ2ySF4ZTaUMPLpEQoDBhAsG1WRMoamFgr765SKHDap4JpstrQU6",
  "key19": "4dGV6XvwSh2G5qTutHEWA3qmX3FshEEgQJxLA7GjQ9Tt93BRXuL3z918yWKYwoV3eUH4XQpoAuCMXm4retHQ2hBb",
  "key20": "3J1cK82FdiW96or3X8HCK6vYUoqUodgubzsa982vK1rnQBAbv64cXf4JhLU5tca8RtWcYeNuzyhuGCzWNSWkRdkF",
  "key21": "2jDRPRF68KWfzKm3Uq9jE2ikrbmxyN9ZFajcdK9JUP1Byd5fpBvXk2rt6EXxYDn4mh3yAZi2vHFQKzz6DiKbctD9",
  "key22": "4xR1uTHcgBGGRqKde5Yz2Bm36umRmwGxDNGqoDpLnBVmLqEL68E3UHJ4KZHzBgQZnqXqDRPckgSAXV8aT6UCzmzS",
  "key23": "2q9Qqei9kgfYfG5jWkx8F3NAw4p5HogYebZYNRjVLCZh3AVRb7J5wd8jPEhGBr2dYKTcNjRR64rv1ocbT6k8E5j5",
  "key24": "vxPGf28RHtNwhUef6GiyyCyXfgj3YAX6QHrtmkCK6d38QF1ZnF5JArWN6ta9u87cHPZBiVRcHEwu5y3NWPG2CYS",
  "key25": "4i3vZfou7wa9y2VaFTGZ8oPABdLdfwM3PvFCP1XFviRhNey7d1BzAxdW2qGGpD6tgERVQdxTVftf36bWJv9D3MZV",
  "key26": "4zZm1k2Komco6a8mUHbXe7fEbdvCVJY5w8jrgKkxQvXdH7YJbJBuURjoRqk8MnDQL36FTHkEexADHL8Rk3V36c9o",
  "key27": "HVwr7ataMFE51RCutfuFtQWzonasQQmiC4UPG5fpUwSHMyGViyJuYKDGWxjccpS384uKS2N9mGfgN7mBfiGRMhK",
  "key28": "4vYCDKDa4swK8NAdrurgXGd1MdQ5Rd5Q1bceFxZfJznsMtYfBVqZLstvE8EocfGmAYDHCDn5XeQZ81tVrxDybeQF",
  "key29": "2QdC7KTU16vKj7r4zW6rk1jwncgKj8swcrK9meQnrdjyKENNxzGHDuYw6qQ1Sun31wBDxbFTQtyU1jsYxegUSuqF",
  "key30": "3XQxSaiZDK84sFk9Jf7LJBTXWDDihXhvjb4CNTStFu3Myvx73xw3X1wUfDwqwCvPjfbzahiyvTDi6dDGp6tTrzhn",
  "key31": "5hYWmCKrvW28upHoNhzxRc3dfzQJha1iQQgniA4P4YDopzDEtyTmUDvYvifbkX57miohDKM4bQWRMud3A6gpAUhT",
  "key32": "23XVGmtdrPTaw8ma5ueTxBMcimuJ8aYpZLfW7541FKL6wonPeAmqw89QYCYsdjXuWRK6HQj3qjr9ToAhGNgP1C65",
  "key33": "hMRPc1hSDnHsRBUTMxEEwNyT9fE4Hf22Jos9Lhrhh5Xamw3W1cgotLMc3GBLZZJwKHDsKN3ErKb27hojPnxhzBL",
  "key34": "34qDTCdQvY3etcSMakcmJAxU2XEc3FTcveardweffdpkQ1wP4Hr8hJkL7ZBLzEF3Riz2Q37e6GdvvRyeVewYubWt",
  "key35": "5pYfuVyn1CM55WKikQmpwYwBBtAd4onYS5cJsTCUXa3UNqgXDXdMbfJpT8EG7uZLV66VkJvtcBorfsAA53ZMBtVc",
  "key36": "3cgvgXRB2DExDPBjScwH4D2TMnkHHC8ai8uH3T2ARoNhAvQ8hbgY978x3j33GmmPdRpZYoGry7Cqcj25Tz1SLmu5",
  "key37": "ebeKiVSGofuQf6N2FdPnxbgXtHWXMcoBtNNSFu9QNex5Fv2rDNnZ8hAuQDUf9nHC33638W31imS6uc99xbB8aSP",
  "key38": "5d5DXX9XQ5DA6YXNLdTemt5Zy9BrnQzFigT3aZQcBcMW1nFbY11TTjPjhURFSF9TzSSkEcAj3Ewfhg8QhZMSyXyH",
  "key39": "4tYDKCj9qxHskjbob1F6aNjj2qdyni6p8ytd2jX58RCRR7VtmWGUPa8qn4QvuRFYB1ayctRKEBTWVxwGDei7aNFW",
  "key40": "4EpJwvn9rzNTctoNafJMriME7KbgYaJwmt4KRu4cjWBgiZ6DQLif8R6M4w5EjujXRHYSKDZmf359fgq95YuUCs7L",
  "key41": "4QHjf8iSvhN1RRtUUTJSc2scJ9Zq5nEJntVSGgrm1USf6TLsyBhaXhwj1JmvXN7GtX32fYQCBZv5zTTakCxwcQf3",
  "key42": "4qhNbrnUhrEd3HApQLq6ZkUL6NQ37pUqNPxnJu7qerWQjD7nKUY5Yn3sbGd2tnJfCLP5XoBe7REJKXHdiTLUiVmV",
  "key43": "4yVFuSqqL6fFrVWfq1oDKHuzGMDR4nz5jz7xLGAx4PoUfCByUTxgKAsW4tpmH83rWyS8c78n9nKnRvhhV2TxmXqs",
  "key44": "K8cGAP3TZWBxPBk2fJuY1XFFC449n9NouDzN4Q18T6TZNunQGHW3x9Y7FSq5YFwVEWdvftqgXuKwBHHmWSqdedr"
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
