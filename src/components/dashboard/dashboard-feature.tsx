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
    "2GbDyCwLYaave7m2pEJMTELAGMbPNPpJ1VVGLuqz7rbFANfw3Qkdp9yjkxf68WB71JjHdQdxHt9EYpAwrgvMVKhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uhoW7Ctyv2YXnjBMNoafg2wT2HB4XeS9kB5uuB15WK1Wsun3CkiDzwHvRWvwSQWskKfLzLSNqfj4ZRuJ4UcPMaN",
  "key1": "5iQXkTaJ6hDgmScp41tcYadpE7qrWXg5jUw9LG2VKonqyyHHTVRQ7Weh1N34LbyFeNPJ7bHSNs61JqHcrypocpf3",
  "key2": "4xz3KXZFbx8cQiSzKsRrxaB6db1NbHK86zhZKReXNBjvZBM1PUNAaGXm6dKSmsCcSydoELQZpBD6U3BTxoW19Cus",
  "key3": "2atMx6Yv97mt5rdHYknA3fbvMnm48yZpjC1sD3xVnw2HZbMxoz96mcnMQBE3a5AhxzGGBWwQxRFNw5bDk74wvqgv",
  "key4": "373w2imRTPSbwtoXpFZpH5kGbtxxaf4vQXbxd14hmnZpVavrREf5DsFi4QR79pgcKK6XsWWtsvMZGS64rQDK7adV",
  "key5": "3f6XMiryE5g4k42zWAyXMc7adXEB3evqLmW6ejBV2TBh3ZJNKzbAUvKqaUV1VU2nAYTpHySuHbJQZi52KyBqs5cE",
  "key6": "29hrkxdAy9oiacAhXdigLi8D8U6w9pXVhaznmY99bE4fwtrVcgVKvgEqVV9u5zfak2vrBz1utLnBEha126oc63M6",
  "key7": "3WQ6X3aYhJR5asocPz83J1r7kpyzRQ8BvYPGDroDqqNq3YxeDUwKvvJuCB64jEdRMfa7ygxCzqoNNKrKjezYtY6h",
  "key8": "2apPNiVghAkTig6tSkv8U7idEq61RCpbfiNG9fQkDDcRFg1gVBq14n78iDnrG18qqAk5b4ywcUoRrHz9ACsqkQD4",
  "key9": "5Jv5enyePAkTNrAsZKiAJHvU1mw25xNkcSaJRFugCwGQmRQQWuWQiwxgER4yQeLcMW9bmBuDnfK3GxZirwSFoyJM",
  "key10": "4VcWBSYTY2BeusZdT42xmbdcXesjrgTStJGTDfWHvduwMCQK61sZo67nFEyDsx2kjJeDMNNm8effSTrMNo2QgWRh",
  "key11": "3Gp4ZrtFU2T6JPQZWPHeU2R9uijUtKRFSAySuQmXGRbsyUV5mUwv6PKw2x2TVRSFs7vtfefhRM8BuXnEBKobJKBj",
  "key12": "4K4a39kQ5aBjJDHPTAuLjNrsyzvXiYEab4spPJVdvWpzdoyrZiSzJ8Trbzo8kWEQZn1TsfRPNrjjp9ascZTQEZsw",
  "key13": "3Ntjd3TRm2Nor5ixnajtKparfYms2Zx61K5AXVbSXfud9Ac9rQ1771qSxu1ozjoANDTAP96pgBN7e6SLn3KeQyfM",
  "key14": "4cJdkkyMYziRQmxQ5BUrGQ1Gou1EyATxxXPXbtBU4eAtk3BwArGJPL4ywijP8AkmQBrxtLhdfqkTjF6sDjMnqRX5",
  "key15": "f6PC3HKJLuFCmrHX3CqcCiC56k6hxgTUfkyzYxnhiD9LTLfy6YiDWHuewVMRuRmWK68SEQ6mSs8nt6NvWDXzZaz",
  "key16": "2fDref9tZ1CBTTu67xPUDsczkFUsAG8893ga9BUisxnXvtKfhbf2X5rsdXhND4kGHeXhjePWA2dyDaxhfjZb6YGc",
  "key17": "4U4b8HYfTfe66nJ9H8URLoE9T8W4BGddQZYaU6pSHEvYD9pR6QVAqJt3kS5Dbme1r6Ym8t79PcMVpV8o87e1amng",
  "key18": "5KRVTwvwevUq7Gz7TTNz7dnKtXy6C3BVJQRMvfaRgMbivqMdXvzvLr9uLHDroJ9PEAB8psnrUybQGm6FWgXkHDsy",
  "key19": "2GDA6z6yNtrVJ7QTRPn84J3i9FtezyvGkxuNh1jPe7W7spyzzuqn4fyrREUvfW8sSqZ3ZfcbeQyXrBhru2khHghk",
  "key20": "5Ex2yY8XGBSGqoLtiLaWsULg8jXXPaPWQ4xiBF6krQbGcPt7yfeAS5wvej6hEvD1e6KgHhFjKL579soWB97BEqDQ",
  "key21": "5zGXPoY4xw7P7jGUxwMXNTDQ7F2woj4QTiNQXnWGgbuVRmvbLZBH7Kp9hL7Rxfsedd3t1kFRQB5jWgJUYVoC6KGj",
  "key22": "nhQuceKGs4M1Wi4TuG5nGrfRnwqaQ6vHRwyPCiF1BNvuVJT5y6W8VnvYfBxNaSZ8dvVpsedLqNfSX4htsJ2FUsE",
  "key23": "3J6wurTJfH951HVyBPpHeknPsY8ZjpzTtLEFXSp2CUgGchCFe4nUJogRhhv6A4Hd7eiunN4NuqXTYgD6XqKFk3qX",
  "key24": "4jbXXGNn72TmTVKEJE7hmCs5eD9BoWVaf7g9MDSdqf2u5rMowwWy1yZJAV6pbnGHJEQnT2u4MeiEPVRkavzTBDQP",
  "key25": "mtAJuEuHtvLGXV8mLAQHLxhwa7x6wiPbXanZVWt3LX85ogqQH2SXTLjSjtE7cMnacQ9jHshDEScfcyTEHsBNRRE",
  "key26": "yjNhij8eadrdDsQqX8qyBi7ALPcXGK96mSrvrDrWw9GRaDnr1wsx68XzJhAdkvb8vSM289eF4jiPG8SSMGmPgoP",
  "key27": "pSi2emejsCVTwrUv55EChA7JXCP4tdkTSapQigixSmGYw9wjDATskseS5yNK4Qx7WqiTmoo8u1WjEC2RHWLHGAD",
  "key28": "1Ui2fX6mFWsopmEPv4K6GyirZgNFuKnq5yF2QhkUkQuAEHhQnTwkGDWDc7FhFrYmeL66P9Vdinr8FZNCDuAf9Se",
  "key29": "2JNXY8vgVx7Pq5BKDhCqpwk2t62AnK6FUix2Qaz7165cUc8reFxu6eksDP81XbS673AL8eUaqP22c7GvXAGWMiSH",
  "key30": "2YhRijuKx4YWwwsYRB9VJb8HT6CrE29qLn8xvzUYsLtDiyuxsWGxgeBDq5buk5nxSLSkbQCMLN6BpV1p9F9Z4Rec",
  "key31": "4QxdkZxrDFW1kyFVfborkE2z8U5vnt3MYkMNye5umD679kgFQ8eewhTcYR5u7jHvcPUZ1ns6QdM6BGLdJ1HaknF8",
  "key32": "fW8dUBntha1LYRkWkXeS7os1rbCWMfXGQntyFzBzoWt8YvFHhJawgbjCoof8H5b5L2gRA5jKBmxs2ysRjst9j6q",
  "key33": "3C3ersaiZF7fiwA42V2pwarEz4JsHGbfYvxWVjFRVdTtwNY6aMBZNxm8Z2hGBvr4Nk4JGWUVVAndLzJYRn1R7jnr",
  "key34": "7VXbfgEMTASMaUBBhogsugDmEtoYqhH1ogCGK3qPvG5heDXzeFCeTtykLAgjvTb9e9vo2CQcoBsBSG5WbAaMFWU",
  "key35": "2KExaH2dFXL7qXmgnWRBsymPcfkGpa39m7FybppKHUHUwHhhPdHV1A8ksHCriCBFokmqZ6Gi4Giq7DghgkxtrFk2",
  "key36": "67EJ3bE2ofXJ8gEj85jgfJ5AFGaqdyvMYgctghzNgY3aRh3XMUH3eC39PS4ZdsYtBvpPPQyiar4uocDezxqFSDmh",
  "key37": "48UGV1jmWKMQCxDSK8aYuAm2f7QfcSw9g92om1pwg9McMfDp9UBdr5Smik8ARykTGHkGuNSjCNNZrPjo5kDQW96d",
  "key38": "3ZLZGVxowHfNLfPVG1W8WrM9UUtmYPNg4FT8SDsMkkVGW6oYRUev2G43QSWEojmrBi6w1dVxWqnU5EEyzhpZsPJC",
  "key39": "4B4ZzD37ZPLjHhgATrt7KKjaNynStpeh3iKqe43thzaZVkyPPHfvBtNwoya9ui3ZrsDFzM3MuiMkS11iaH5Q5oZG",
  "key40": "4DcrNSKSbwDLEqHgmkKyfhDH1X5pdhWyG8wRihvKKCYdVFrHBNFw5tSZWAm27bqxKM5peKiJWWq1C5d6m3CwkGxE",
  "key41": "3ZjyzGnYvYvYLaiEW6yoMDKdNJXqDrKknhAWNLXL5bZPSNZXvCfPE7FteqERo2EVkTaKBdGYQRjmwVSxdgcimEXJ",
  "key42": "58TronhEXPdiax4teMTg6TfHTLrfGifDzBJRGjGT6omJ6XBvPniwRmAGLBKy9XupQfbvKfAx2gGbsTwq2ArVCohV",
  "key43": "b6uu5cXagpicDvLkhHjowXyyyESmyBjoJLHqrQsazsESjYFnJJ5Fw12sdSPwUiwwDjZjrhoGAY9NTkadit8eKgL",
  "key44": "65qjEitXTThhZjvkMx6WFTajkJzpHJEhVSgjU2jELr276Nync8uzUkrb9aHAdtLfQXZW8sYUvCzzioQ28ZguMWg1"
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
