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
    "RRbEZbN1yn2vAELFztMNAP18UZEdFGScFkpjdieeunwCu9GMf9WiiYSDbApt6YRJYNQoewDnbHDF3ruZGPFop7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yz3cexbqx2J9hQN6WqUooespTLqP94XxBrEgCqipDiTZJHBxFRKDN1znKrq4MYTkJtx6LipwpCds685C5kdCEDS",
  "key1": "5ES4z3G3NWbyaojdrK6dThwacT98ZEuX2bLXLtiYqEMA5QKNiichWRt3wQ8wYYVPor4Sd1199BHnGzrbFZUJVZVG",
  "key2": "2AZkZ6pFwPYHR1XaABRaPSsV17FANTkbKSVrpYR6Gigtu3iH3v8gAo6ixZ3k9FK8yS7CyvBTg9hb6ECwyK5i391n",
  "key3": "2JEg2Grh96w9eH1FjvqwrsDUe6h1FriAN2jkzJorQAB9Tu6bd7Earre5bNhM2gVL2yjRzzgS3AcTcsATv6emyyaz",
  "key4": "3D9Vvf7kJ2iJ3fAonfekyowv4rjb36rWzHPP6Ze2Af5r5c2WqTMGQwugCHq3M6xPfnYvRW5Fv6VjtfD36fkUFauL",
  "key5": "5Uri7c2PkcbqPLKeiePpaeycS3SA2NinomePTW56TcSmzzqhLN1tCHMyB3kyAxHh7mZ9KGRwgUbGpWTGFCoFAo2h",
  "key6": "q7WyFM51f19PkUTGhYMoaiB2x3HxSGp4VPtbPeYo4kTPxirYmp6inXtYpPQoSJ6dnWSb6yYKJe1BkWQYALDhW1h",
  "key7": "26EXkTzD28zNPUXcnUQCbkw4ec5skvh73itLcnW4A4tRhzqVbRnZoAv1fLRRLxoghv7otoL3r5wUCMFb41pSwE6z",
  "key8": "5mgygJadxzE3Zc3bnDzV2YdaTubPm6Xig32wxrXjZddehpunWVEga4wkYTYpdyrnTsVdHiLoBBEAjdPSDYekGi7g",
  "key9": "5hAk6pgjad3NxuNwsT42SaSCBuxhySMkMTdCdzvAcnps2wYv3cBMwq7nKZ9kGGnL2mg4Ae83kqLd3yNaYBUA25YY",
  "key10": "57pfVT9LhceKZyWt35E6ffk1EHbgzbGoTnH2p6wQU6dFbQ9d6p4g2oDBq3VDbnWUANQVm6o7ZniXmvpPvAdPPJ5b",
  "key11": "cPJaQ2P3H2xTjJVi3BgChLMgLQLWTVnCZRwrGpvQsQf8aZk1xjNVp8jE7GXUL3yAPzLLNF4qYbRNUYW65uH4gih",
  "key12": "4qga7DteiWzuJckomMsNaXchZZEKqCGK1FexviC7saUdEoJkW3govxmPZQoXNDwBEcWJRcpsgMfnpBQoFuzqnLRk",
  "key13": "7gB3etiv9oC82Ymf6B4aMaGS3c7EMdisa3W2aDp6XUDZypPk5sQiBt4WSNs3pmUAK27wkMtLukoHyBmj86u5TYX",
  "key14": "FaX9n7q6wohfAjRHpy93rDS5RdtRMJjBoaJrryCf5R1w3q25zUyqCjER6x9f83duPZWh33xBCmvV7UgywsY2o9H",
  "key15": "4c2fURSsUBseL46cSkoauw9JzYUGPVLvSD5iVNoXWujMxogpLRiDGXuRJ1x61HikYvuUhvR1W58UYChGe5mJntCR",
  "key16": "52MH7NKTpm1KwmSWn42rZJfBNNTkzEUybCYX8kFKNvXyv4eGzNLFokkkhqMWcGzsLaixEhiNA2rH65p2nFBbjooZ",
  "key17": "59vtU29tcD9Dgfh6xQYnFVArKuc7kU3uqLSiR6cF45bUh5hvuYg9ZNtn1YUTGKztybkGjev92wb5ZZWbpFAHhvHH",
  "key18": "63hfe86XQE8joPVLtJeS97HRMHc7621A3mFRkhzRzUag45SmddgzwGx9cLoTY5LZVpav8XFd2ujM5hDnyg7cwt8G",
  "key19": "3GFAfSYsP6qCWos7MG11wxKq74J9bvfxTULy4De5hYTdHBpvtaMWpuUN4fkoDTVo3LtijoXYqeju5T27ySFVXbdY",
  "key20": "2UgP2MvcSniYLttU8PV8J9qzs8K1K3UQDy54PUGpx6TWBikn8D3veTNuDi2HynHHqU1gUEapDiqC6cPZk4k3TVf2",
  "key21": "3U7t2zX1P6oELYCEU77UT45fkr4zKVqBPKivdKPCjMUCBycSn4SHTmJVxwJWzJzT65M3mGag8735DNTNi2Nmh2pe",
  "key22": "5KdJ7HvSFRpHHanL8WZaWhAXpQFeHa4joPf45h7C38CMBD57FBQZ1poj3SmHs1pWHJhgzJva8Qnceu5C7P7zZFKX",
  "key23": "P6Dh2PSNTB5c5oren6bsrBXwVtSbU3V5hdY4txGpiRLvKErMQsMHkhpfiXtHx2DfWf4tiBXmCp2tMsDSdHnAJ6c",
  "key24": "h7A5VqTtFijVHHUd9AQHKYZcWn7MM23jKoExcYMJtGL4mqFZu5et5abgtuimrn1TEyyUVfTT8KegJXeptVZRtx3",
  "key25": "3iYeRWsqYMDoWi67TT3Zcm7QxDWtxf43CxguTVTWTaaCxSQ9qga7gassowUbS5pmx5y4BkP8zfwvcH7cL1YHHLDL",
  "key26": "5tfundZ3oGdcdYGB9ZCRvsizSjY4XKgQqfQMDMYjF3oFB3DZEn3Li5eVxfeGpYb8KiBe98DwwMVGgWodqkgiXVvU",
  "key27": "2AtbbUFH4dAuX239LrFtfoCKkrLxkpsfPW77ajzLE6MVYHWvMHTK5h5sBdoCN7SJ1EMuohjLrUK6PYwLyFRWba1V",
  "key28": "3mWcnBFiEW8U2iR9zhpY6He7zcuGYyg1BqvMFAuhWgfPGGBT582G8qE2kAqshG5YZ9tucw6rHSr3j3io6f9rvAfQ",
  "key29": "4ZmA6NLqQugHovzCdy3m4BbcaUdk3cmPrM982B4b1SRbtdmdQa4jM1Hj6BmpVdWEhDt6NT8BnUce5SbQgX3EzwrB",
  "key30": "iJAWnu7p6yj4snXv7gJxCxuNuZHsL9QnJokkEhnJZ3PiahD2XQpKXwo4LQb9YMRpaYTgaqu2csVjQ8FLn3QkXCp",
  "key31": "4FNUaH2bn1oH3B3spLkScHwn4qrzp9Da1gTadnrro8cHqS36dRCqPQXGSbRUnKXgWFkEEHw14xBscrzroW7r5Ye9",
  "key32": "dGzadMUX1ej1Pn8jivxyq4tMpcBg1AkGFoE6b2asEdrbndJA49WeLUatFBxZhBrYz5WRg9odFa99HaNojXskAmg",
  "key33": "T6CMLMUVAaTe7cqYmMLxfxgcApLsXuXum7PsH4yeZq38d52Tvyw6WQsQDBLChwaYbVfYBjtWATYopYw33vzJuX9",
  "key34": "5c9wiHXFNjbhUMjfBoZ2en4rN5twNPwVEkeDjjqLt8U41m81JxSdLtaTRpCoC2B91QMZJrSYihYaN8wQvbSrcmKq",
  "key35": "5pLHbhJ23rPdF4rdsBjZ9jMkXLpnGUFqxmmZQ8xcpWpc13uaz9nEu6jr3mxGe24MVAbgQAdawsWd5pTeEjkrPFpQ",
  "key36": "4vRyA7yRacsHjMR2KmA7AgLGmJacCGjLHAxq2Priq2KKR9v3ouBbzWYt6ncUHUbqbeUnAmY6CDyXECqsdVJGvM9S",
  "key37": "4c7imjhZPxVhQCUiDXGe9BVVgsyA4xDccrQZJymjK4TGBSmTgb1k3tWLEy7E11WrHGKU1nYX66WYtfwojpy9MUpi",
  "key38": "3A2aKEj7X7PwpjKjjTfju9cRuzchbmHBahHJ8n4ba4tJswpfHmffB9Mpd2xTz2d8pNHXsHyR4UyBAt8uSV3HHhPu",
  "key39": "2irkBwmsZkZ7KzDE369pE6Tqq6m5QZwb3C1Q7bBaWn2SB8fwNp4r7TeeRUJjYTNgS1dPyEQ753zinDECzxrWphdU",
  "key40": "4gzZYHDU1RhwcQBAe4c1bWDVupVpKJJqqVLou1beuPGvGAVrtyC5hdeRJYwLtxwRsRY8k5UEhypeP6ytP5wwGyW1",
  "key41": "2XFuNJX1BEZTcmvUhro8NdCeKHtN2Yk2EkEqv7Fa5pX1fnAC7iQAs7tLeYJjMxTKy9dj9w7wvnKby3LQYkaAAe5e",
  "key42": "kJm1jaDr8eQKBBX6eGWAJgpbH8b7pHCQMKQuPsg7FLh9Qnbhkgk4dwi8xBeSstvKEySp5SZDvjdqWy7YFGBrjg4",
  "key43": "5JRRWBfUy1z7C1jvEP33hxe8ExKXwFUnEq7t6nMjmBx1VS9zAM8qtJ2GVQPeuzQW2T1GxqfJDUoZTM7KUDdvTgeK",
  "key44": "5o9pPxSqJVtKGp8zi4fjWMDdzpRBoxMEbeijqin274vxh3T1V9Anm1T2dYHapVr2QEKk2bkMCAe7BsrZGhgtQuqU",
  "key45": "4QTPqqZ2nkcv2ECuGVZtVdZeAMiS1jxuUvi6zHrtjqWp5oGBe1Q9nQppQmP8H2tRqLcCZBKiq4JSZ9MpoERKojx",
  "key46": "4kHvs4XgSKgKaWyxaFMSkFdoLsJEPVHXNNMBCdrccUfZBofnPGVCGmG8vwYpRfr1dtvgoE8es3qZMdceoAiqRbjv",
  "key47": "5mMH89UC9EafHyZkVC83ZpCxZohhNntojE3aqi4h2Duva8RDYXP98JBpf11Y5npkLe8rVcnjSHcKeRJmddZMbfGY",
  "key48": "2tY2EtKaMH15KNSQbjxW3ZMS2vTQ927zKTZrckyvsEKjoXnV8iwThUgLnpAk2oaGyLngdgMabcDMryDEy88Cn35z"
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
