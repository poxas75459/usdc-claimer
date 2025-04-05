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
    "8sbFZmEbzBUWKbtZmmy9BDDfvkHhmSJsQ5H6hjWxhsPo1pppW1pPsF62HT3VZopc2jfMpWnqQRAZmmsxL6K5Sk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31rFcbdr95jFA56pd5svALJT5Gk53AV8rXsmrb5sg4m34uYjJuQzHgHB1XEfSBfvjixEuyeiihMUjk6zAnHzYe5F",
  "key1": "5NzLbYNg6aN3FJ9otMwPLwN16e7aVYTQQ3KrjZuM1TYkH4hXsJAH6rtxV1WNG2zFyY8B6ELGKcrrkbaXVy4yLmsZ",
  "key2": "66H3DWVdecXT1f6czEJdopvDn1BXSfvK1RuNvJdushjArP3MrMjv79KYNSKcTvZXCbVD5T3ntdu7vpg2AfEMa948",
  "key3": "38NBb9tjAAYySkbGK2K8GNCabeG4FY73nXk8g4LibMD19a4jphdU5f6HYsfZXHaGgat8SmbnL5jCBqCU5H1HQSZq",
  "key4": "3B7w8Cz712yTbmQTUYkhha1C2xYTMLBpzFtnp6pNJ21Jb5SoB9WBno3rabkKcT4K1GrCaSfQKBoTee7mUPSgtxEH",
  "key5": "thqitBNxhh22moKVqvgxpAqgCRuHMos9tGy232pRzMCVFTh8otXjoh2eTN61cTFqBGtYprwxDaLbLAru7DbjFp1",
  "key6": "2rZ4bkRsE4ZhVYM7p5Zr2ZphmnWoEc7HLxMXa4RLzNqdg232QGg8BwEtf2i1NSb5CLXJSZ3593qUinbjMU9q4JDG",
  "key7": "2c9AsuxuuALqBVuM7h3D7jSamK6WtH7gBp5j1G1pi18gkjsi2XdA2xopuWCt7bQZJr5LvuGqPi7WGAZoWtNGR1Yz",
  "key8": "4EEH7wMR48qNdFBaqJKLfx4o86rPUSL85N2CYgLJLgtC4VHbGFFS3xnb8hN1ymXpeCDzzchnQDPCEVay2wnHNX6f",
  "key9": "41fRxdq8HzBBRMGv9NwX2fwWDhuMpzCAgtL39n3DnffzUmLQRSntqi1FWtZkDnYk3FqBNi18FhXpL3npfqSBmuym",
  "key10": "S3VfKGAmiZ6p5s457QXV54uiJot4v5xkDGh6yZAeLufWehqU9Kv5cYiDwPo8Kxhn6MqJW6J6TVr8zZAJ2RRChra",
  "key11": "oisUbVTVJ8iuPojVT7LWVmYk24P3NN3jqkibnc8nVAPkhPSthedojReWEXJTtbTtGP1XPQj9xYX8JYpz7XTiPu6",
  "key12": "5oVg2NReCbBkEjK8xKVc31w8XYM95pJsBqnYn4p5dAdghKj3raAtXQ1hP7kjsymG7yXEydbgo589Y1fjF8WYiVHK",
  "key13": "64FNw11nm9Zy7tXQzBwjDtZGiaSk51DRxVjgSSytekBqnQwcqm9z2vQVC9Y1doeDpLY7KaBMY89AiioGCRJEkPPp",
  "key14": "3678NF2ptUDUr217cDvv6EdRPLNU1TUcpUQkU3gyZ7M5TnXRUMWXCgya68Khfn8Fdi19t91QQEKCLuGTnnEsfuhK",
  "key15": "2XFmVLkhwD39bc9UXMp3x32BUnGYEonFuDqprgpJbi4Kw3m5CW1NHe9XN4yBGESqtbHohQMVxsFiu3UHM6uk3b7b",
  "key16": "CHV1uqgUVbtATVBVD3zUxVcwgKBLFTpYyeCy5MEBDg6KUwXbpAP911EhF9Yc5KFz2p1oD8BB3VWKX2BczRewkty",
  "key17": "3P9r755q1pRVBvFcPfk8P4qJ42MSr9tezCWBf7Ech4V1ijvMgtGN2ytiXRW8cybM8KAfR1HZog1r1w97bHfLg9F9",
  "key18": "61kJDdVfAgpCXR7BFKPNxs3u64Y3tGsByXsQt7W1LRurEYnSs5rYCLnnuu2awFPcVPKNRYMkARwT3ZhBLCUPAdB6",
  "key19": "32n8AmuvSCR4pQ37zj7srSkqDx8YDKDcZfD66sL8fYDEwrpyxvJjKvRNXEkeZP1cYgxjAG7zmeVU2eeUJPfdrtKy",
  "key20": "4qRJ2GWj4uF8PPguvsLumuWgzVi5bWTPXV35gckBCPA42aCCpmjmuk33Bv5TCKFCic2LgCRFdYYCF5n6HCryh4Bh",
  "key21": "2yUk5Lz8ggNyTXgbioC4c1biZRNSdCoz4XALvgQLZUNruvw93UTgmN2qJummxkK4WmFVYjpqrcucGgWPaXFKdTkR",
  "key22": "3kJMwfFNeSDT8BSk7MHvB5GhBz5R7ts1jEdBBtQgPqYXYSoFm1H4bhrWkrWht7teKbRrFHm4VePScjx3hr8bQnZ9",
  "key23": "4qwa9XdSea93o1ZXiJDGvrzHQwd2p8tyRZaybFjQWZ41qWUA56PDiWsLeZrZTHTesaakeSpwMUSQRRkXfvc2p53B",
  "key24": "4ewhk5DyRSB6NJNQ6m8kRxVXJsDtbDi7sNf6ECaKFhkN5C1qxicGMrPAzyThGeKYrTgFfQ3P7ZzczGgCrq1eNV9L",
  "key25": "5Bfz25SDwg6Kf5g1vAhmWrzJGybJDHfPYiDyAtrW1pkKvqH1iPJ4pvNHPrET1F3askyp975yfRqxBPiPpmPqyxYa",
  "key26": "4ZAB3HqjFrzbcdYh4cetJxtsNNA2nbRtwJHAz2abLBRT8LimdHmkECshS5mDmwigonFarBXeLaxwfmY75rSqaocE",
  "key27": "q6dP76Xyy3THrq1SZXiuorHqQLLERu21nhVCk4Xwb7fuh1foCigvo3rLghNZhH9CpWQLXEyP9KLFvmp1WKjVxLi",
  "key28": "3uENB95ZCtsrwwZgbCjcvEWeiJyBCMZDqHYrPVVNzXG8r3Zo3nm8cj5NRpqTa8KWxLDFbnZHbVPVYM64p61Gc36w",
  "key29": "5RgxwB7pNTbiozWvRzfdRqCmYz52PqeuDRmy9XsLyBffnqhkwyQgwk3NUxNU5SrjCtdSgQja4h9MFHBwNSpfS4uE",
  "key30": "2KimhVtw3hrMiF6vgi7mXCEzwUMRWq5LQ6PWuWJmhdNrwZaBW4TVzfe2Ub63y49Av9CMY1zZiggqL5g7yVDvGb9t"
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
