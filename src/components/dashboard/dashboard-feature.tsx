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
    "4pcx9Rhgx8bVVVNgA6JJrQQGgq38TmBJgjrZygRM61kVT3QXawt3NiFpeQ7T4LwdaDSATftxEwA1pftQ9yFvi6gW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SF9j1QUWQkc9Vs71MJ2Sejg5kU1DdP9b71SMb6pEeYEQprFNdodC1BL2TR9xLs3o1XT5ntrGcdrjSCLnxXKjBRR",
  "key1": "5HdNVbRTfbNfv2gU5H6TBZssUjAqYwK5mB3fYbJLGYQ9vHSmj4P5LxFg4bkGeY9ij44NxfVpt7EfNPX49XxFgQp1",
  "key2": "ditk6ELrhx1epZkKD6CbiU4qS2hzzAvMMuLUxnL6PCrAhypMYQLFa6aZKU6ndj1JUYrsnXw32DxVYc2ggqLxWYQ",
  "key3": "4zAP58CxFPgXMpjjMrHthkCLmNwHWqY4XkKaMEoADzsgAoxkaJevC3ivdXwMhRP1fhCSWfFMMns6SY8rte25QwqG",
  "key4": "4nhBQCKMKtRhamshSfe27FmtJ3dd84REpCQHD9ASN8aSHyzCyhuFMizoYtwEL5yEibgXqJ8fw86WcfZYKoqjn672",
  "key5": "3zcnyCRubSB4og7RDNd5TYPaBCqh1nLeUDFD91YQ7rrjtfKmhz8U5TqfxX6BQxcGsCgN59LVYK66oKD5gR6awGGw",
  "key6": "3m1Qy4CL6u7as7cot3EfqKZSDi7g3qtLfHcoHR71DPozZenDuiDDvbddfwySUS8YVJ9SqbA9yBZCYj12fxovxtTx",
  "key7": "HCk7ZuMNuFNDej2LuqmGf1wd9YXHjb2aD81v45JouBsSMZuzzN4nVdXwnrstyn9uaUrdZsv7AgUaS8Cz2YCpTek",
  "key8": "5NAf7Xd25odNviTDKYEVaUmnetviNygEbZJD1RrTrm8eopXqdAqy12gvVqZj1QWgTMv3ekU4LJxqTvQERts4eKw2",
  "key9": "5vmuDfaAfHarzQevHtCTDa1wuBj5Vfn4etm4WfJEB3zpTr84TJSAJVnV7JgzwcJGRtNrf1Jg5fQUekcztEQDGXV3",
  "key10": "J7xPs7G9Qdq4hvkyWswNPdc4paonnjJdze7zPNHomEwgvczPRy4KeuBZNAJY527VMRkwhQK3oofQCFK5gvujLRA",
  "key11": "MWVXheGPiaH2fomKibBwJ39rUkRZxAH9cQvmK8SJbD7uHCBYc4UHfEW8KY7qmRCXLgoCscDcr78hxvpkdumRvsv",
  "key12": "5nGEuLE2K1Jhs7tuB3pP3HBcw2iaGes2LDJhV2qLjJBC76KFar5US945TXa4AttrnV3DjRgHKH1s9QbBHg4pkuMA",
  "key13": "5VbJXHuasMJWUXGm54eHRX8BB1Nd1DpM5j2JFRD854GQL4CZ9aNHevY7DxLJzJdPKRAn5gf22ge5Vse7FsHTsNKS",
  "key14": "2WKeN9UvrXYU8bXj6b6ABf1GGYyr2AGgRQbWfiYPEpSPCR86pgAGZkduzbnenSbi7aauYFuJMkkpVGuXzdvWJYfZ",
  "key15": "4ShtE6r9NZ4YKRxj87A3JDy3QWsHDNfRbYHfEniFfF83jnR6JbFMT5bACpJcK6cM3uT4cwhzHDPwb48mN3U4tEni",
  "key16": "3drCxP4HiLucgfDiRGjuVXw4ep8GsZoRcn8PRFhGCtfgSmrADVBqJDP2hkpfpo99MSA8Tp5DdYDz68zhhgYfCZKN",
  "key17": "hB7ZrQ58A3iUVYpMJYk3ADNv638aA4NeT23CfsLerihsw1Uf84zXvhBGdQenwqFgY5xwfuLy67sv2C2dq5QuK9J",
  "key18": "5hLiGgbffrVWJMkQx8KmGxqYuoX4oKrw3VumRFohBuo6wke95Xykh1DRbAWAFgWK3bzpaxpdr5HnnrW424yqrLSZ",
  "key19": "cbCSAsB8ryTzF58JEtfahVQQbumz9hRNY9xPDjUkpTrA5jXjKJ5td6BzycuHRmhnwYNT86Le17Giu49vnXLRhma",
  "key20": "2Xx7XWTEbtfqWPLM5E5dsCx5JB6nteSChhWS6xgn4EubVwtF6kia7DmeGNHxA16APt3GTkPtPWFKGiG1Ym8qwWeQ",
  "key21": "nwTp3KbJp17H18GPjks4g4YjVZ3fiYdDcijGMPjoivUu27eHpW8kqea58p48gxbeMGHJRxfdou9DNW3AGWxFcy7",
  "key22": "LDTtbretiZnMYcXJbo46vxyP3zoLTjPK2Ct2m12mUrycRYhHtdkvwqDVtqYWuniDXEWm85Co3XFR2q6ZiTUrBgC",
  "key23": "34kGgzD5UCPPjHKbLcKJ3UhsqwvSenJ7QZQLbZYRtW7fsTWW2s3zQvhQcChTQfr6NPCfMdz3khcbkVevACW37sfn",
  "key24": "22zbeestvkuBwGo43n4zjE3m1KRopuCKBVyAkyJa6JQrbeQHVNVKnWs1XcbGcWtxmpudLANntv9aiLnozeJqkCF3",
  "key25": "NgEsHTYqmnRQv2hQkJ8rM8ZP3pBGzpTsXfJEbsPEXH4iFWUdzYHMrLiRP6AaN8jDJShMrGBXiLhuhX2WGpGoab7",
  "key26": "4r4uH4tRc1WCaju8aGpeDvSzJLYfHXQMH54V82fouau1ge6dz1hGDWtuxJW8GfsD9zmDpzqbLsnTTydWjxBSdddR",
  "key27": "3Tbwag3b6aTzKsccXmQy1ZV8VJ9NpnK5r9T9xWWYrGCZ35htz7NrAwSRjGuWSG2hfgveYY7Y2nbW31tN5kSbYQv2",
  "key28": "5kwXe9rTDW5DHqrvZv5yNC3XTerCGi14tsgJFz8sWN9FWCqTXGvHphWazZr5cWCV6fZw3cwny2DgqKh4KPeGrVqy",
  "key29": "5w91gu91U75tJiMHBTGAKccL3AvYXAjZif9w2oG49htUFZ6EQmQfCay2HUadz6Kw4rntdEG1mF1F6mrdntd7Bhfx",
  "key30": "2NBKyuDZ1MGBGypGDZFe1NH4npzTUuZEkDSHtUcNQrR5BzMQCU91qMCL9PM4pTbw7ZcXD54demSMAL31rCuYLigR",
  "key31": "cMrP8aWygekAbQzfPoTFAegeDTh7EKNRbPZpzyacTtRqRRzZTWDansxy7k5MWfTMMQVKzUn7DcaEatcuEft9iwo",
  "key32": "3FrZHiZxZLDXAeqtsp64so1QVzeSoyXDFyCa5afuJv6E1ycHyu4KXeC1Jt3ewmckAEGLLzyZjSHUMKnV8v7EE1Wd",
  "key33": "26P8u1oxmvo4s5Z64y8ZGLCtJ8PMamtQWCwj9iDZah4pUH85wg1BUn8eVMSft6pAptssP4oaXFE3rhJTRsAsoeP7",
  "key34": "5gWy5RMoo71tA5bLgBsLqhaJ7zVdZRg7VQ6azHT9yjNR7zfwKVdAcMn1rpZHwtKXTDp6wV9h6F89BgdEnt558xrB",
  "key35": "2kGi2tES7enDAutUzcK8Qd8fNCzJ3inXFo3qt4pwF2ifEShiEsSyFRAVgQVeXAiewY79Rsj16xjSDTkjs1Bctera",
  "key36": "35aJYcw3AAGAcHwK8yUUeabPNgnwvzqNKFANcsYMW1f66pLd5DWwUbFRFMQKy7rwj6z19jueKQwhEVMTy1pmxHAR",
  "key37": "Q5sVUZHEHiXgrip6H7Rs4APSs1ctEubKC5mkoERJuEbkWKby5QFkmFxYEG34yCu38Gr1RydjnUvdJNthMfqkUrz",
  "key38": "huh88ZicfxdQskubiBKipneK6Yopjs7jMcLv9ig2o7ikPGSDqp4p5D5ZY7C1DmTMYHiVqEMP7XZxUUytwrRgdgd",
  "key39": "W1A5FZ94KJUNFnAHhWLdHUSU7JvEReCPHPogWkpXVYn43ayQMxg5HX8e77pfntHiGn6TkiB9c6Z8HzAYxoYzQmQ",
  "key40": "HGc9rEwpdyKShSK47zeDMQEmGt3yYzbg18hjD2FEa7MM36wQGxNGSgHomHrYTuKLNJ1NFMWdUWnXei7AGPRzU2j",
  "key41": "2hVei9kDywP1iVAD2B5w2vNikwkHTkeS8bL1VVPxhzyWkfKirgoDWNSAseweS3VdBxxZcpvzj4MqcDGN2pexZVFX",
  "key42": "3xYrth4HBHg6pKsFPpHM6Zahm1iujm91Cs1PG9ryxmnWGxoCUAWnTGSBu1v4KtFjnmd9omPEViCwCjKzo283m2D6",
  "key43": "3iKzWdNkuSZAX7DrRzbqgqkYorokZUawjGg5JET8suEjujE1x1TZYiAqDHGLvmnr482nhLS2K1JFVDSQqdaZBnSK",
  "key44": "36GJXanWiwVopvbGkAZmoRWwB6N1qdS7ZsYUsTAguovGmo7KwSuWpTz5Gge5wnG8szTE1YvXE7YBmRhyK8ntX3By",
  "key45": "3zYQToGRb7WFyRfgKp8qCdtkExEt8zznA1Ck7aYSoNv98nm9HJKAkonRCYT6DUArmXtetzHzgUAi4sahEmnngLY9",
  "key46": "3J31sX14kPQfJiWr6ctgou49vG7Hdfx3oyhefp8ShU83xyoTZxoebo8GEEDVWx47aLAxivVBXCrtVVRs3m8BqYT"
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
